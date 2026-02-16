import { useState, useMemo } from 'react';
import { Button } from './ui/button';
import { ChevronLeft, Search, List, MapPin, SlidersHorizontal } from 'lucide-react';
import { RevisjonCard } from './RevisjonCard';
import { MaterialCheckbox } from './ui/material-checkbox';
import { DatePicker } from './ui/date-picker';
import { formatNorwegianDate } from '../utils/dateFormat';
import { InteractiveMap } from './InteractiveMap';
import { BottomSheet } from './ui/bottom-sheet';
import { RevisjonFilterChipBar } from './RevisjonFilterChipBar';
import svgPathsSorting from "../imports/svg-59lykn648d";
import { allDeviations } from './AvvikoversiktPage'; // Import deviations data

interface RevisjonshistorikkPageProps {
  onRevisionClick?: (revisionId: string) => void;
  initialFilter?: string[];
  onFilterChange?: (newFilter: string[]) => void;
}

// Helper function to calculate avvik counts for a foretak
function getAvvikCounts(foretakName: string) {
  const foretakDeviations = allDeviations.filter(d => d.foretakName === foretakName);
  const totalCount = foretakDeviations.length;
  
  // For now, simulate closed avvik - in production this would come from actual data
  // Let's say 30-60% of avvik are closed
  const closedCount = Math.floor(totalCount * (0.3 + Math.random() * 0.3));
  const openCount = totalCount - closedCount;
  
  return {
    total: totalCount,
    open: openCount,
    closed: closedCount
  };
}

// Mock data - Historical revisions with locked reports
// Using foretak names from AvvikOversikt
export const mockRevisjonshistorikk = [
  {
    id: 'hist-1',
    foretakName: 'Solheim Gård',
    visitDate: new Date(2026, 0, 25), // 25. januar 2026 - Within 14 days (editable)
    visitTime: '09:00 - 12:00',
    revisjonData: {
      ordning: 'KSL',
      revisjonsfrist: '1. februar 2026',
      produksjon: ['Storfe', 'Grovfôr'],
      kommune: 'Oslo',
      address: 'Fjellveien 12, 0123 Oslo',
      isPriority: false,
      hasPlannedDate: true,
      rapportLocked: true,
      isEditable: true // Within 14 days - can still edit
    },
    location: {
      lat: 59.9139,
      lng: 10.7522,
    },
  },
  {
    id: 'hist-2',
    foretakName: 'Bjarki Økologiske',
    visitDate: new Date(2026, 0, 28), // 28. januar 2026 - Within 14 days (editable)
    visitTime: '08:30 - 11:00',
    revisjonData: {
      ordning: 'LokalMat',
      revisjonsfrist: '5. februar 2026',
      produksjon: ['Sau', 'Lam', 'Økologiske grønnsaker'],
      kommune: 'Lillehammer',
      address: 'Dalveien 45, 2600 Lillehammer',
      isPriority: true,
      hasPlannedDate: true,
      rapportLocked: true,
      isEditable: true // Within 14 days - can still edit
    },
    location: {
      lat: 61.1153,
      lng: 10.4662,
    },
  },
  {
    id: 'hist-3',
    foretakName: 'Haugen Gård',
    visitDate: new Date(2026, 0, 30), // 30. januar 2026 - Within 14 days (editable)
    visitTime: '10:00 - 13:00',
    revisjonData: {
      ordning: 'KSL',
      revisjonsfrist: '8. februar 2026',
      produksjon: ['Melkeproduksjon', 'Grovfôr'],
      kommune: 'Trondheim',
      address: 'Markveien 67, 7000 Trondheim',
      isPriority: false,
      hasPlannedDate: true,
      rapportLocked: true,
      isEditable: true // Within 14 days - can still edit
    },
    location: {
      lat: 63.4305,
      lng: 10.3951,
    },
  },
  {
    id: 'hist-4',
    foretakName: 'Nordby Gård',
    visitDate: new Date(2025, 0, 8), // 8. januar 2025 - More than 14 days ago (NOT editable)
    visitTime: '09:30 - 12:00',
    revisjonData: {
      ordning: 'Spesialitet',
      revisjonsfrist: '15. januar 2025',
      produksjon: ['Frukt og bær', 'Honningproduksjon'],
      kommune: 'Bergen',
      address: 'Fjordgata 23, 5000 Bergen',
      isPriority: false,
      hasPlannedDate: true,
      rapportLocked: true,
      isEditable: false // More than 14 days ago - cannot edit
    },
    location: {
      lat: 60.3913,
      lng: 5.3221,
    },
  },
  {
    id: 'hist-5',
    foretakName: 'Lund Gård',
    visitDate: new Date(2025, 0, 10), // 10. januar 2025 - More than 14 days ago (NOT editable)
    visitTime: '08:00 - 10:30',
    revisjonData: {
      ordning: 'KSL',
      revisjonsfrist: '18. januar 2025',
      produksjon: ['Korn', 'Frø og belgvekster'],
      kommune: 'Stavanger',
      address: 'Kornveien 89, 4000 Stavanger',
      isPriority: true,
      hasPlannedDate: true,
      rapportLocked: true,
      isEditable: false // More than 14 days ago - cannot edit
    },
    location: {
      lat: 58.9700,
      lng: 5.7331,
    },
  },
  {
    id: 'hist-6',
    foretakName: 'Fjell Gård',
    visitDate: new Date(2025, 0, 12), // 12. januar 2025
    visitTime: '11:00 - 14:00',
    revisjonData: {
      ordning: 'Nyt Norge',
      revisjonsfrist: '20. januar 2025',
      produksjon: ['Geit', 'Geitost produksjon'],
      kommune: 'Drammen',
      address: 'Geiteveien 34, 3000 Drammen',
      isPriority: false,
      hasPlannedDate: true,
      rapportLocked: true,
      isEditable: false // More than 14 days ago - cannot edit
    },
    location: {
      lat: 59.7439,
      lng: 10.2045,
    },
  },
  {
    id: 'hist-7',
    foretakName: 'Koll Gård',
    visitDate: new Date(2025, 0, 15), // 15. januar 2025
    visitTime: '09:00 - 11:30',
    revisjonData: {
      ordning: 'KSL',
      revisjonsfrist: '22. januar 2025',
      produksjon: ['Sau', 'Storfe', 'Grovfôr'],
      kommune: 'Fredrikstad',
      address: 'Sauveien 56, 1600 Fredrikstad',
      isPriority: false,
      hasPlannedDate: true,
      rapportLocked: true,
      isEditable: false // More than 14 days ago - cannot edit
    },
    location: {
      lat: 59.2181,
      lng: 10.9298,
    },
  },
  {
    id: 'hist-8',
    foretakName: 'Rosenlund Gård',
    visitDate: new Date(2025, 0, 17), // 17. januar 2025
    visitTime: '10:30 - 13:00',
    revisjonData: {
      ordning: 'LokalMat',
      revisjonsfrist: '25. januar 2025',
      produksjon: ['Økologiske grønnsaker', 'Potet'],
      kommune: 'Sarpsborg',
      address: 'Grøntveien 78, 1700 Sarpsborg',
      isPriority: true,
      hasPlannedDate: true,
      rapportLocked: true,
      isEditable: false // More than 14 days ago - cannot edit
    },
    location: {
      lat: 59.2833,
      lng: 11.1094,
    },
  },
  {
    id: 'hist-9',
    foretakName: 'Lien Gård',
    visitDate: new Date(2025, 0, 20), // 20. januar 2025
    visitTime: '08:30 - 11:00',
    revisjonData: {
      ordning: 'Spesialitet',
      revisjonsfrist: '28. januar 2025',
      produksjon: ['Frukt og bær', 'Planter og stauder'],
      kommune: 'Tønsberg',
      address: 'Fruktveien 90, 3100 Tønsberg',
      isPriority: false,
      hasPlannedDate: true,
      rapportLocked: true
    },
    location: {
      lat: 59.2667,
      lng: 10.4078,
    },
  },
  {
    id: 'hist-10',
    foretakName: 'Fjellstad Bruk',
    visitDate: new Date(2025, 0, 22), // 22. januar 2025
    visitTime: '09:30 - 12:30',
    revisjonData: {
      ordning: 'KSL',
      revisjonsfrist: '30. januar 2025',
      produksjon: ['Korn', 'Grovfôr', 'Storfe'],
      kommune: 'Hamar',
      address: 'Fjellveien 123, 2300 Hamar',
      isPriority: false,
      hasPlannedDate: true,
      rapportLocked: true
    },
    location: {
      lat: 60.7945,
      lng: 11.0680,
    },
  },
  {
    id: 'hist-11',
    foretakName: 'Grønhage AS',
    visitDate: new Date(2025, 0, 24), // 24. januar 2025
    visitTime: '10:00 - 13:30',
    revisjonData: {
      ordning: 'Nyt Norge',
      revisjonsfrist: '2. februar 2025',
      produksjon: ['Økologiske grønnsaker', 'Frukt og bær'],
      kommune: 'Moss',
      address: 'Grønnveien 45, 1500 Moss',
      isPriority: true,
      hasPlannedDate: true,
      rapportLocked: true
    },
    location: {
      lat: 59.4344,
      lng: 10.6569,
    },
  },
  {
    id: 'hist-12',
    foretakName: 'Naturens Hjerte',
    visitDate: new Date(2025, 0, 26), // 26. januar 2025
    visitTime: '08:00 - 10:30',
    revisjonData: {
      ordning: 'KSL',
      revisjonsfrist: '5. februar 2025',
      produksjon: ['Sau', 'Lam', 'Grovfôr'],
      kommune: 'Arendal',
      address: 'Naturveien 67, 4800 Arendal',
      isPriority: false,
      hasPlannedDate: true,
      rapportLocked: true
    },
    location: {
      lat: 58.4616,
      lng: 8.7719,
    },
  },
  {
    id: 'hist-13',
    foretakName: 'EkoSted AS',
    visitDate: new Date(2025, 0, 28), // 28. januar 2025
    visitTime: '11:00 - 14:00',
    revisjonData: {
      ordning: 'LokalMat',
      revisjonsfrist: '8. februar 2025',
      produksjon: ['Melkeproduksjon', 'Grovfôr'],
      kommune: 'Kristiansand',
      address: 'Melkveien 89, 4600 Kristiansand',
      isPriority: false,
      hasPlannedDate: true,
      rapportLocked: true
    },
    location: {
      lat: 58.1467,
      lng: 7.9956,
    },
  },
  {
    id: 'hist-14',
    foretakName: 'Oreen Frukt',
    visitDate: new Date(2025, 0, 30), // 30. januar 2025
    visitTime: '09:00 - 11:30',
    revisjonData: {
      ordning: 'Spesialitet',
      revisjonsfrist: '10. februar 2025',
      produksjon: ['Frukt og bær', 'Honningproduksjon'],
      kommune: 'Skien',
      address: 'Fruktveien 123, 3700 Skien',
      isPriority: true,
      hasPlannedDate: true,
      rapportLocked: true
    },
    location: {
      lat: 59.2091,
      lng: 9.6090,
    },
  },
  {
    id: 'hist-15',
    foretakName: 'Haugseter Gård',
    visitDate: new Date(2025, 1, 1), // 1. februar 2025
    visitTime: '08:30 - 11:00',
    revisjonData: {
      ordning: 'KSL',
      revisjonsfrist: '12. februar 2025',
      produksjon: ['Storfe', 'Grovfôr'],
      kommune: 'Kongsberg',
      address: 'Haugeveien 56, 3600 Kongsberg',
      isPriority: false,
      hasPlannedDate: true,
      rapportLocked: true
    },
    location: {
      lat: 59.6689,
      lng: 9.6517,
    },
  },
  {
    id: 'hist-16',
    foretakName: 'EcoFarm Norway',
    visitDate: new Date(2025, 1, 3), // 3. februar 2025
    visitTime: '10:00 - 13:00',
    revisjonData: {
      ordning: 'Nyt Norge',
      revisjonsfrist: '15. februar 2025',
      produksjon: ['Korn', 'Frø og belgvekster', 'Grovfôr'],
      kommune: 'Porsgrunn',
      address: 'Økoveien 78, 3900 Porsgrunn',
      isPriority: false,
      hasPlannedDate: true,
      rapportLocked: true
    },
    location: {
      lat: 59.1404,
      lng: 9.6561,
    },
  },
  {
    id: 'hist-17',
    foretakName: 'Skogsvann Organics',
    visitDate: new Date(2025, 1, 5), // 5. februar 2025
    visitTime: '09:30 - 12:00',
    revisjonData: {
      ordning: 'KSL',
      revisjonsfrist: '18. februar 2025',
      produksjon: ['Sau', 'Økologiske grønnsaker'],
      kommune: 'Gjøvik',
      address: 'Skogveien 34, 2815 Gjøvik',
      isPriority: true,
      hasPlannedDate: true,
      rapportLocked: true
    },
    location: {
      lat: 60.7957,
      lng: 10.6915,
    },
  },
  {
    id: 'hist-18',
    foretakName: 'Naturens Høst',
    visitDate: new Date(2026, 0, 21), // 21. januar 2026 - Within 14 days (editable)
    visitTime: '08:00 - 10:30',
    revisjonData: {
      ordning: 'LokalMat',
      revisjonsfrist: '28. januar 2026',
      produksjon: ['Geit', 'Geitost produksjon'],
      kommune: 'Sandefjord',
      address: 'Høstveien 90, 3200 Sandefjord',
      isPriority: false,
      hasPlannedDate: true,
      rapportLocked: true,
      isEditable: true // Within 14 days - can still edit
    },
    location: {
      lat: 59.1314,
      lng: 10.2166,
    },
  },
  {
    id: 'hist-19',
    foretakName: 'Solei Biofarm',
    visitDate: new Date(2026, 0, 23), // 23. januar 2026 - Within 14 days (editable)
    visitTime: '11:00 - 14:00',
    revisjonData: {
      ordning: 'Spesialitet',
      revisjonsfrist: '30. januar 2026',
      produksjon: ['Biodling', 'Honningproduksjon'],
      kommune: 'Larvik',
      address: 'Bioveien 45, 3250 Larvik',
      isPriority: false,
      hasPlannedDate: true,
      rapportLocked: true,
      isEditable: true // Within 14 days - can still edit
    },
    location: {
      lat: 59.0522,
      lng: 10.0348,
    },
  },
  {
    id: 'hist-20',
    foretakName: 'Hjemmelalget økologi',
    visitDate: new Date(2026, 0, 27), // 27. januar 2026 - Within 14 days (editable)
    visitTime: '09:00 - 11:30',
    revisjonData: {
      ordning: 'KSL',
      revisjonsfrist: '5. februar 2026',
      produksjon: ['Melkeproduksjon', 'Storfe', 'Grovfôr'],
      kommune: 'Horten',
      address: 'Lageveien 67, 3180 Horten',
      isPriority: true,
      hasPlannedDate: true,
      rapportLocked: true,
      isEditable: true // Within 14 days - can still edit
    },
    location: {
      lat: 59.4169,
      lng: 10.4836,
    },
  },
];

export function RevisjonshistorikkPage({ onRevisionClick, initialFilter = [], onFilterChange }: RevisjonshistorikkPageProps = {}) {
  const [showingMenu, setShowingMenu] = useState(false);
  const [viewMode, setViewMode] = useState<'list' | 'map'>('list');
  const [selectedRevisjonstyper, setSelectedRevisjonstyper] = useState<string[]>([]);
  const [selectedProduksjon, setSelectedProduksjon] = useState<string[]>([]);
  const [selectedOrdning, setSelectedOrdning] = useState<string[]>([]);
  const [selectedKommune, setSelectedKommune] = useState<string[]>([]);
  const [selectedStatus, setSelectedStatus] = useState<string[]>([]); // NEW: Status filter
  const [sortDropdownOpen, setSortDropdownOpen] = useState(false);
  const [sortBy, setSortBy] = useState<'planlagt-dato' | 'revisjonsfrist' | 'ordning' | 'revisjonstype'>('planlagt-dato');
  const [isFilterSheetOpen, setIsFilterSheetOpen] = useState(false);
  
  // Date range states - Changed revisjonsfrist to rapportLaastDato
  const [rapportLaastDatoFrom, setRapportLaastDatoFrom] = useState<Date | null>(new Date('2024-01-01'));
  const [rapportLaastDatoTo, setRapportLaastDatoTo] = useState<Date | null>(new Date('2027-12-31'));
  const [planlagtDatoFrom, setPlanlagtDatoFrom] = useState<Date | null>(new Date('2024-01-01'));
  const [planlagtDatoTo, setPlanlagtDatoTo] = useState<Date | null>(new Date('2027-12-31'));

  const handleBackToMenu = () => {
    setShowingMenu(true);
  };

  // Filter the revisjoner based on selected filters
  const getFilteredRevisjoner = useMemo(() => {
    let filtered = [...mockRevisjonshistorikk];

    // Filter by Status
    if (selectedStatus.length > 0) {
      filtered = filtered.filter(rev => {
        // Redigerbar - reports that are editable (within 14 days)
        if (selectedStatus.includes('redigerbar') && rev.revisjonData.rapportLocked && rev.revisjonData.isEditable) return true;
        
        // Åpne avvik - reports with open deviations
        const avvik = getAvvikCounts(rev.foretakName);
        if (selectedStatus.includes('apne-avvik') && avvik.open > 0) return true;
        
        // Lukket avvik - reports with all deviations closed
        if (selectedStatus.includes('lukket-avvik') && avvik.total > 0 && avvik.open === 0) return true;
        
        return false;
      });
    }

    // Filter by Revisjonstype
    if (selectedRevisjonstyper.length > 0) {
      filtered = filtered.filter(rev => {
        if (selectedRevisjonstyper.includes('prioritert-revisjon') && rev.revisjonData.isPriority) return true;
        if (selectedRevisjonstyper.includes('ordinar') && !rev.revisjonData.isPriority) return true;
        return false;
      });
    }

    // Filter by Produksjon
    if (selectedProduksjon.length > 0) {
      filtered = filtered.filter(rev => {
        return rev.revisjonData.produksjon.some(prod => {
          const prodLower = prod.toLowerCase();
          return selectedProduksjon.some(selected => prodLower.includes(selected.toLowerCase()));
        });
      });
    }

    // Filter by Ordning
    if (selectedOrdning.length > 0) {
      filtered = filtered.filter(rev => 
        selectedOrdning.some(ord => rev.revisjonData.ordning.toLowerCase() === ord.toLowerCase())
      );
    }

    // Filter by Kommune
    if (selectedKommune.length > 0) {
      filtered = filtered.filter(rev => 
        selectedKommune.some(kom => rev.revisjonData.kommune.toLowerCase() === kom.toLowerCase())
      );
    }

    // Filter by Planlagt dato (visitDate)
    if (planlagtDatoFrom || planlagtDatoTo) {
      filtered = filtered.filter(rev => {
        if (!rev.visitDate) return true;
        if (planlagtDatoFrom && rev.visitDate < planlagtDatoFrom) return false;
        if (planlagtDatoTo && rev.visitDate > planlagtDatoTo) return false;
        return true;
      });
    }

    return filtered;
  }, [mockRevisjonshistorikk, selectedRevisjonstyper, selectedProduksjon, selectedOrdning, selectedKommune, planlagtDatoFrom, planlagtDatoTo]);

  // Extract unique values with counts from the original data
  const filterOptions = useMemo(() => {
    const ordningCounts: Record<string, number> = {};
    const kommuneCounts: Record<string, number> = {};
    const produksjonCounts: Record<string, number> = {};
    const revisjonstypeCounts = {
      'prioritert-revisjon': 0,
      'ordinar': 0,
    };
    
    // NEW: Status counts
    const statusCounts = {
      'redigerbar': 0,
      'apne-avvik': 0,
      'lukket-avvik': 0,
    };

    mockRevisjonshistorikk.forEach(rev => {
      // Count ordning
      const ordning = rev.revisjonData.ordning;
      ordningCounts[ordning] = (ordningCounts[ordning] || 0) + 1;

      // Count kommune
      const kommune = rev.revisjonData.kommune;
      kommuneCounts[kommune] = (kommuneCounts[kommune] || 0) + 1;

      // Count produksjon
      rev.revisjonData.produksjon.forEach(prod => {
        produksjonCounts[prod] = (produksjonCounts[prod] || 0) + 1;
      });

      // Count revisjonstype
      if (rev.revisjonData.isPriority) {
        revisjonstypeCounts['prioritert-revisjon']++;
      } else {
        revisjonstypeCounts['ordinar']++;
      }
      
      // NEW: Count status
      if (rev.revisjonData.rapportLocked && rev.revisjonData.isEditable) {
        statusCounts['redigerbar']++;
      }
      
      const avvik = getAvvikCounts(rev.foretakName);
      if (avvik.open > 0) {
        statusCounts['apne-avvik']++;
      }
      if (avvik.total > 0 && avvik.open === 0) {
        statusCounts['lukket-avvik']++;
      }
    });

    return {
      status: [
        { value: 'redigerbar', label: 'Redigerbar', count: statusCounts['redigerbar'] },
        { value: 'apne-avvik', label: 'Åpne avvik', count: statusCounts['apne-avvik'] },
        { value: 'lukket-avvik', label: 'Lukket avvik', count: statusCounts['lukket-avvik'] },
      ].filter(item => item.count > 0),
      ordning: Object.entries(ordningCounts).map(([value, count]) => ({
        value: value.toLowerCase().replace(/ /g, '-'),
        label: value,
        count,
      })),
      kommune: Object.entries(kommuneCounts).map(([value, count]) => ({
        value: value.toLowerCase().replace(/ /g, '-'),
        label: value,
        count,
      })),
      produksjon: Object.entries(produksjonCounts).map(([value, count]) => ({
        value: value.toLowerCase().replace(/ /g, '-'),
        label: value,
        count,
      })),
      revisjonstype: [
        { value: 'prioritert-revisjon', label: 'Prioritert revisjon', count: revisjonstypeCounts['prioritert-revisjon'] },
        { value: 'ordinar', label: 'Ordinær', count: revisjonstypeCounts['ordinar'] },
      ].filter(item => item.count > 0),
    };
  }, [mockRevisjonshistorikk]);

  // Sorting function
  const getSortedRevisjoner = () => {
    const sorted = [...getFilteredRevisjoner];
    
    if (sortBy === 'planlagt-dato') {
      sorted.sort((a, b) => {
        if (!a.visitDate && !b.visitDate) return 0;
        if (!a.visitDate) return -1;
        if (!b.visitDate) return 1;
        return b.visitDate.getTime() - a.visitDate.getTime(); // Newest first
      });
    } else if (sortBy === 'revisjonsfrist') {
      sorted.sort((a, b) => {
        return a.revisjonData.revisjonsfrist.localeCompare(b.revisjonData.revisjonsfrist);
      });
    } else if (sortBy === 'ordning') {
      sorted.sort((a, b) => a.revisjonData.ordning.localeCompare(b.revisjonData.ordning));
    } else if (sortBy === 'revisjonstype') {
      sorted.sort((a, b) => {
        const aScore = a.revisjonData.isPriority ? 1 : 0;
        const bScore = b.revisjonData.isPriority ? 1 : 0;
        return bScore - aScore;
      });
    }
    
    return sorted;
  };

  const handleSortChange = (newSort: 'planlagt-dato' | 'revisjonsfrist' | 'ordning' | 'revisjonstype') => {
    setSortBy(newSort);
    setSortDropdownOpen(false);
  };

  const getSortLabel = () => {
    switch (sortBy) {
      case 'planlagt-dato': return 'Planlagt dato';
      case 'revisjonsfrist': return 'Revisjonsfrist';
      case 'ordning': return 'Ordning';
      case 'revisjonstype': return 'Revisjonstype';
    }
  };

  // Create label mappings for filter chips
  const revisjonstypeLabels: Record<string, string> = {
    'prioritert-revisjon': 'Prioritert revisjon',
    'ordinar': 'Ordinær',
  };

  const produksjonLabels: Record<string, string> = {};
  const ordningLabels: Record<string, string> = {};
  const kommuneLabels: Record<string, string> = {};

  // Build label mappings from filterOptions
  filterOptions.produksjon.forEach(item => {
    produksjonLabels[item.value] = item.label;
  });
  filterOptions.ordning.forEach(item => {
    ordningLabels[item.value] = item.label;
  });
  filterOptions.kommune.forEach(item => {
    kommuneLabels[item.value] = item.label;
  });

  // Handlers for removing filters
  const handleRemoveRevisjonstype = (value: string) => {
    setSelectedRevisjonstyper(prev => prev.filter(v => v !== value));
  };

  const handleRemoveProduksjon = (value: string) => {
    setSelectedProduksjon(prev => prev.filter(v => v !== value));
  };

  const handleRemoveOrdning = (value: string) => {
    setSelectedOrdning(prev => prev.filter(v => v !== value));
  };

  const handleRemoveKommune = (value: string) => {
    setSelectedKommune(prev => prev.filter(v => v !== value));
  };

  const handleClearAllFilters = () => {
    setSelectedRevisjonstyper([]);
    setSelectedProduksjon([]);
    setSelectedOrdning([]);
    setSelectedKommune([]);
  };

  // Render filter section helper
  const renderFilterSection = (mobile: boolean) => (
    <>
      {/* Search field */}
      <div className="px-4 py-4">
        <div className="relative">
          <div className="absolute left-4 top-1/2 -translate-y-1/2">
            <Search className="w-5 h-5 text-muted-foreground" />
          </div>
          <input
            type="text"
            placeholder="Søk foretak, kommune, etc."
            className="w-full h-14 pl-12 pr-4 rounded-[28px] bg-muted border-none body-medium text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
      </div>

      {/* Divider */}
      <div className="px-4">
        <div className="h-px bg-[var(--border)]" />
      </div>

      {/* Status section - ABOVE Revisjonstype */}
      <div className="px-4 py-4">
        <h3 className="label-medium text-foreground mb-2">Status</h3>
        <div className="flex flex-col gap-1">
          {filterOptions.status.map((item) => (
            <div
              key={item.value}
              className="h-14 px-4 flex items-center hover:bg-muted rounded-[var(--radius)] transition-colors"
            >
              <MaterialCheckbox
                checked={selectedStatus.includes(item.value)}
                onChange={(checked) => {
                  const newList = checked
                    ? [...selectedStatus, item.value]
                    : selectedStatus.filter(s => s !== item.value);
                  setSelectedStatus(newList);
                }}
                label={`${item.label} (${item.count})`}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="px-4">
        <div className="h-px bg-[var(--border)]" />
      </div>

      {/* Revisjonstype section */}
      <div className="px-4 py-4">
        <h3 className="label-medium text-foreground mb-2">Revisjonstype</h3>
        <div className="flex flex-col gap-1">
          {filterOptions.revisjonstype.map((item) => (
            <div
              key={item.value}
              className="h-14 px-4 flex items-center hover:bg-muted rounded-[var(--radius)] transition-colors"
            >
              <MaterialCheckbox
                checked={selectedRevisjonstyper.includes(item.value)}
                onChange={(checked) => {
                  const newList = checked
                    ? [...selectedRevisjonstyper, item.value]
                    : selectedRevisjonstyper.filter(s => s !== item.value);
                  setSelectedRevisjonstyper(newList);
                }}
                label={`${item.label} (${item.count})`}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="px-4">
        <div className="h-px bg-[var(--border)]" />
      </div>

      {/* Ordning section - MOVED ABOVE Produksjon */}
      <div className="px-4 py-4">
        <h3 className="label-medium text-foreground mb-2">Ordning</h3>
        <div className="flex flex-col gap-1">
          {filterOptions.ordning.map((item) => (
            <div
              key={item.value}
              className="h-14 px-4 flex items-center hover:bg-muted rounded-[var(--radius)] transition-colors"
            >
              <MaterialCheckbox
                checked={selectedOrdning.includes(item.value)}
                onChange={(checked) => {
                  const newList = checked
                    ? [...selectedOrdning, item.value]
                    : selectedOrdning.filter(s => s !== item.value);
                  setSelectedOrdning(newList);
                }}
                label={`${item.label} (${item.count})`}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="px-4">
        <div className="h-px bg-[var(--border)]" />
      </div>

      {/* Produksjon section - MOVED BELOW Ordning */}
      <div className="px-4 py-4">
        <h3 className="label-medium text-foreground mb-2">Produksjon</h3>
        <div className="flex flex-col gap-1">
          {filterOptions.produksjon.map((item) => (
            <div
              key={item.value}
              className="h-14 px-4 flex items-center hover:bg-muted rounded-[var(--radius)] transition-colors"
            >
              <MaterialCheckbox
                checked={selectedProduksjon.includes(item.value)}
                onChange={(checked) => {
                  const newList = checked
                    ? [...selectedProduksjon, item.value]
                    : selectedProduksjon.filter(s => s !== item.value);
                  setSelectedProduksjon(newList);
                }}
                label={`${item.label} (${item.count})`}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="px-4">
        <div className="h-px bg-[var(--border)]" />
      </div>

      {/* Rapport låst dato section */}
      <div className="px-4 py-4">
        <h3 className="label-medium text-foreground mb-2">Rapport låst</h3>
        <div className="flex flex-col gap-6">
          <DatePicker
            label="Fra og med"
            value={rapportLaastDatoFrom}
            onChange={setRapportLaastDatoFrom}
          />
          <DatePicker
            label="Til og med"
            value={rapportLaastDatoTo}
            onChange={setRapportLaastDatoTo}
          />
        </div>
      </div>

      {/* Divider */}
      <div className="px-4">
        <div className="h-px bg-[var(--border)]" />
      </div>

      {/* Revisjonsdato section - Changed from Planlagt dato */}
      <div className="px-4 py-4">
        <h3 className="label-medium text-foreground mb-2">Revisjonsdato</h3>
        <div className="flex flex-col gap-6">
          <DatePicker
            label="Fra og med"
            value={planlagtDatoFrom}
            onChange={setPlanlagtDatoFrom}
          />
          <DatePicker
            label="Til og med"
            value={planlagtDatoTo}
            onChange={setPlanlagtDatoTo}
          />
        </div>
      </div>

      {/* Divider */}
      <div className="px-4">
        <div className="h-px bg-[var(--border)]" />
      </div>

      {/* Kommune section - AT THE END */}
      <div className="px-4 py-4">
        <h3 className="label-medium text-foreground mb-2">Kommune</h3>
        <div className="flex flex-col gap-1">
          {filterOptions.kommune.map((item) => (
            <div
              key={item.value}
              className="h-14 px-4 flex items-center hover:bg-muted rounded-[var(--radius)] transition-colors"
            >
              <MaterialCheckbox
                checked={selectedKommune.includes(item.value)}
                onChange={(checked) => {
                  const newList = checked
                    ? [...selectedKommune, item.value]
                    : selectedKommune.filter(s => s !== item.value);
                  setSelectedKommune(newList);
                }}
                label={`${item.label} (${item.count})`}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );

  return (
    <div className="flex h-full w-full overflow-hidden flex-col bg-background">
      {/* Header with title */}
      <div className="flex flex-col border-b border-[var(--border)] bg-background">
        <div className="px-6 pt-6 pb-4">
          <h2 className="headline-small text-foreground">Revisjonshistorikk</h2>
        </div>
      </div>

      {/* Main content area with advanced search and content */}
      <div className="flex flex-1 overflow-hidden">
        {/* MOBILE/TABLET: Advanced Search - Shows ONLY when showingMenu is true */}
        {showingMenu && (
          <div className="min-[1400px]:hidden w-full h-full bg-background overflow-hidden">
            <div className="flex flex-col h-full">
              <div className="flex-1 overflow-y-auto">
                {renderFilterSection(true)}
              </div>
              
              {/* Button to see results */}
              <div className="p-6 border-t border-[var(--border)] bg-background">
                <Button 
                  onClick={() => setShowingMenu(false)}
                  className="w-full"
                >
                  Se resultater ({getFilteredRevisjoner.length})
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* DESKTOP: Advanced Search - Always visible */}
        <div className="max-[1400px]:hidden w-[320px] h-full flex flex-col border-r border-[var(--border)] bg-background overflow-hidden">
          <div className="flex-1 overflow-y-auto">
            {renderFilterSection(false)}
          </div>
        </div>

        {/* Vertical Divider - Desktop only */}
        <div className="w-px h-full bg-[var(--border)] max-[1400px]:hidden" />

        {/* MOBILE/TABLET & DESKTOP: Main Content Area */}
        <div className={`flex-1 h-full flex-col ${showingMenu ? 'max-[1400px]:hidden' : 'max-[1400px]:flex'} min-[1400px]:flex max-[1400px]:w-full`}>
          {/* Detail content */}
          <div className="flex-1 overflow-y-auto px-4 pt-2 max-[900px]:px-4">
            {/* Sorting and Bulk Actions Bar */}
            <div className="flex items-center justify-between gap-2 py-0 mb-2 flex-wrap max-w-[1040px]">
              {/* LEFT GROUP: View toggle */}
              <div className="flex items-center gap-2 flex-wrap">
                {/* View Mode Toggle */}
                <div className="flex gap-[2px] overflow-clip rounded-2xl">
                  <button
                    onClick={() => setViewMode('list')}
                    className={`flex items-center justify-center gap-2 px-6 py-4 min-w-[48px] transition-colors ${
                      viewMode === 'list' ? 'bg-[#365bae] rounded-l-2xl' : 'bg-[#dae2ff] rounded-l'
                    }`}
                  >
                    <List className={`w-6 h-6 ${viewMode === 'list' ? 'text-white' : 'text-[#174295]'}`} />
                    <span className={`label-medium ${viewMode === 'list' ? 'text-white' : 'text-[#174295]'}`}>
                      Liste
                    </span>
                  </button>
                  <button
                    onClick={() => setViewMode('map')}
                    className={`flex items-center justify-center gap-2 px-6 py-4 min-w-[48px] transition-colors ${
                      viewMode === 'map' ? 'bg-[#365bae] rounded-r-2xl' : 'bg-[#dae2ff] rounded-r'
                    }`}
                  >
                    <MapPin className={`w-6 h-6 ${viewMode === 'map' ? 'text-white' : 'text-[#174295]'}`} />
                    <span className={`label-medium ${viewMode === 'map' ? 'text-white' : 'text-[#174295]'}`}>
                      Kart
                    </span>
                  </button>
                </div>
              </div>
              
              {/* RIGHT GROUP: Sorting */}
              {viewMode === 'list' && (
                <div className="flex items-center gap-4 min-w-0 relative">
                  {/* "Filtrer listen" button - Mobile/Tablet only */}
                  <Button 
                    variant="secondary"
                    onClick={() => setIsFilterSheetOpen(true)}
                    className="min-[1400px]:hidden"
                  >
                    <SlidersHorizontal className="w-5 h-5" />
                    Filtrer listen
                  </Button>

                  <div className="label-large text-foreground whitespace-nowrap">
                    Sortering:
                  </div>
                  <button 
                    onClick={() => setSortDropdownOpen(!sortDropdownOpen)}
                    className="h-8 relative rounded-lg shrink-0 hover:bg-muted transition-colors"
                  >
                    <div className="flex h-full items-center justify-center overflow-hidden relative rounded-inherit">
                      <div className="flex gap-2 h-8 items-center justify-center pl-4 pr-2 py-1.5 relative">
                        <div className="label-medium text-foreground">
                          {getSortLabel()}
                        </div>
                        <div className="relative shrink-0 size-[18px]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                            <path d={svgPathsSorting.p1e934100} fill="var(--foreground)" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div aria-hidden="true" className="absolute border border-[var(--border)] border-solid inset-0 pointer-events-none rounded-lg" />
                  </button>
                  
                  {sortDropdownOpen && (
                    <>
                      <div className="fixed inset-0 z-10" onClick={() => setSortDropdownOpen(false)} />
                      <div className="absolute top-full right-0 mt-2 z-20 bg-card border border-[var(--border)] rounded-lg shadow-lg min-w-[200px] overflow-hidden">
                        <button
                          onClick={() => handleSortChange('planlagt-dato')}
                          className={`w-full px-4 py-3 text-left body-medium hover:bg-muted transition-colors ${
                            sortBy === 'planlagt-dato' ? 'bg-secondary-container text-secondary-container-foreground' : 'text-foreground'
                          }`}
                        >
                          Planlagt dato
                        </button>
                        <button
                          onClick={() => handleSortChange('revisjonsfrist')}
                          className={`w-full px-4 py-3 text-left body-medium hover:bg-muted transition-colors ${
                            sortBy === 'revisjonsfrist' ? 'bg-secondary-container text-secondary-container-foreground' : 'text-foreground'
                          }`}
                        >
                          Revisjonsfrist
                        </button>
                        <button
                          onClick={() => handleSortChange('ordning')}
                          className={`w-full px-4 py-3 text-left body-medium hover:bg-muted transition-colors ${
                            sortBy === 'ordning' ? 'bg-secondary-container text-secondary-container-foreground' : 'text-foreground'
                          }`}
                        >
                          Ordning
                        </button>
                        <button
                          onClick={() => handleSortChange('revisjonstype')}
                          className={`w-full px-4 py-3 text-left body-medium hover:bg-muted transition-colors ${
                            sortBy === 'revisjonstype' ? 'bg-secondary-container text-secondary-container-foreground' : 'text-foreground'
                          }`}
                        >
                          Revisjonstype
                        </button>
                      </div>
                    </>
                  )}
                </div>
              )}
            </div>
            
            {/* Filter chip bar */}
            <RevisjonFilterChipBar
              selectedStatus={selectedStatus}
              selectedRevisjonstyper={selectedRevisjonstyper}
              selectedProduksjon={selectedProduksjon}
              selectedOrdning={selectedOrdning}
              selectedKommune={selectedKommune}
              onRemoveStatus={() => {}}
              onRemoveRevisjonstype={handleRemoveRevisjonstype}
              onRemoveProduksjon={handleRemoveProduksjon}
              onRemoveOrdning={handleRemoveOrdning}
              onRemoveKommune={handleRemoveKommune}
              onClearAll={handleClearAllFilters}
              resultCount={getFilteredRevisjoner.length}
              statusLabels={{}}
              revisjonstypeLabels={revisjonstypeLabels}
              produksjonLabels={produksjonLabels}
              ordningLabels={ordningLabels}
              kommuneLabels={kommuneLabels}
            />
            
            {/* Conditional rendering: List or Map view */}
            {viewMode === 'list' ? (
              <div className="flex flex-col gap-1">
                {getSortedRevisjoner().map((revisjon) => {
                  // Add avvik counts to the revisjon data
                  const avvikCounts = getAvvikCounts(revisjon.foretakName);
                  const revisjonWithAvvik = {
                    ...revisjon,
                    revisjonData: {
                      ...revisjon.revisjonData,
                      avvikCount: avvikCounts.total,
                      avvikOpen: avvikCounts.open,
                      avvikClosed: avvikCounts.closed
                    }
                  };
                  
                  return (
                    <RevisjonCard 
                      key={revisjon.id} 
                      revisjon={revisjonWithAvvik}
                      onCardClick={() => {
                        if (onRevisionClick) {
                          onRevisionClick(revisjon.id);
                        }
                      }}
                    />
                  );
                })}
              </div>
            ) : (
              <InteractiveMap
                revisjoner={getSortedRevisjoner()}
                onAccept={() => {}}
                onReject={() => {}}
                acceptedIds={new Set()}
              />
            )}
          </div>
        </div>
      </div>

      {/* BottomSheet for filters - Mobile/Tablet only */}
      <BottomSheet
        isOpen={isFilterSheetOpen}
        onClose={() => setIsFilterSheetOpen(false)}
        title="Filtrer listen"
      >
        <div className="flex flex-col h-full">
          <div className="flex-1 overflow-y-auto">
            {renderFilterSection(true)}
          </div>
          
          {/* Button to see results */}
          <div className="p-6 border-t border-[var(--border)] bg-background">
            <Button 
              onClick={() => setIsFilterSheetOpen(false)}
              className="w-full"
            >
              Se resultater ({getFilteredRevisjoner.length})
            </Button>
          </div>
        </div>
      </BottomSheet>
    </div>
  );
}