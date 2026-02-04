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

interface AksepterteRevisjonerPageProps {
  onRevisionClick?: (revisionId: string) => void;
  initialFilter?: string[];
  onFilterChange?: (newFilter: string[]) => void;
}

// Mock data - Exact same revisjoner as in ForsidePage
export const mockAksepterteRevisjoner = [
  // Cards without planned date (Venter på planlegging)
  {
    id: 'awaiting-1',
    foretakName: 'Bjørkli Økologiske',
    visitDate: null,
    visitTime: null,
    revisjonData: {
      ordning: 'KSL',
      revisjonsfrist: '15. februar 2025',
      produksjon: ['Sau', 'Grovfôr', 'Storfe'],
      kommune: 'Trysil',
      address: 'Fjellveien 88, 2420 Trysil',
      isPriority: true,
      hasPlannedDate: false
    },
    location: {
      lat: 61.3158,
      lng: 12.2689,
    },
  },
  {
    id: 'awaiting-2',
    foretakName: 'Kollen Gård',
    visitDate: null,
    visitTime: null,
    revisjonData: {
      ordning: 'LokalMat',
      revisjonsfrist: '20. februar 2025',
      produksjon: ['Melkeproduksjon', 'Grovfôr'],
      kommune: 'Eidskog',
      address: 'Skogveien 45, 2230 Eidskog',
      isPriority: false,
      hasPlannedDate: false
    },
    location: {
      lat: 60.1689,
      lng: 12.0967,
    },
  },
  {
    id: 'awaiting-3',
    foretakName: 'Sjøli Økofarm',
    visitDate: null,
    visitTime: null,
    revisjonData: {
      ordning: 'Nyt Norge',
      revisjonsfrist: '25. februar 2025',
      produksjon: ['Geit', 'Geitost produksjon'],
      kommune: 'Åmot',
      address: 'Øvergårdveien 12, 2450 Rena',
      isPriority: false,
      hasPlannedDate: false
    },
    location: {
      lat: 61.1328,
      lng: 11.3678,
    },
  },
  {
    id: 'awaiting-4',
    foretakName: 'Lia Sauebruk',
    visitDate: null,
    visitTime: null,
    revisjonData: {
      ordning: 'KSL',
      revisjonsfrist: '28. februar 2025',
      produksjon: ['Sau', 'Lam', 'Grovfôr'],
      kommune: 'Åsnes',
      address: 'Liaåsen 67, 2270 Flisa',
      isPriority: true,
      hasPlannedDate: false
    },
    location: {
      lat: 60.6167,
      lng: 12.3167,
    },
  },
  {
    id: 'awaiting-5',
    foretakName: 'Berget Biogård',
    visitDate: null,
    visitTime: null,
    revisjonData: {
      ordning: 'Spesialitet',
      revisjonsfrist: '5. mars 2025',
      produksjon: ['Biodling', 'Honningproduksjon'],
      kommune: 'Kongsvinger',
      address: 'Honningveien 3, 2212 Kongsvinger',
      isPriority: false,
      hasPlannedDate: false
    },
    location: {
      lat: 60.1917,
      lng: 12.0050,
    },
  },
  {
    id: 'awaiting-6',
    foretakName: 'Skogen Øko AS',
    visitDate: null,
    visitTime: null,
    revisjonData: {
      ordning: 'KSL',
      revisjonsfrist: '10. mars 2025',
      produksjon: ['Korn', 'Frø og belgvekster', 'Grovfôr'],
      kommune: 'Grue',
      address: 'Grueveien 156, 2260 Kirkenær',
      isPriority: false,
      hasPlannedDate: false
    },
    location: {
      lat: 60.4728,
      lng: 12.1378,
    },
  },
  {
    id: 'awaiting-7',
    foretakName: 'Dalheim Gård',
    visitDate: null,
    visitTime: null,
    revisjonData: {
      ordning: 'LokalMat',
      revisjonsfrist: '15. mars 2025',
      produksjon: ['Frukt og bær', 'Økologiske grønnsaker'],
      kommune: 'Våler',
      address: 'Dalveien 89, 2436 Våler i Solør',
      isPriority: true,
      hasPlannedDate: false
    },
    location: {
      lat: 60.3083,
      lng: 12.2556,
    },
  },
  // Cards with planned date (Planlagt dato)
  {
    id: 'haugseter-gard',
    foretakName: 'Haugseter Gård',
    visitDate: new Date(2025, 0, 15), // 15. januar 2025
    visitTime: '09:00 - 12:00',
    revisjonData: {
      ordning: 'KSL',
      revisjonsfrist: '31. mars 2025',
      produksjon: ['Storfe', 'Grovfôr'],
      kommune: 'Vang',
      address: 'Vangsvegen 302, 2974 Vang',
      isPriority: false,
      hasPlannedDate: true
    },
    location: {
      lat: 61.1344,
      lng: 8.5983,
    },
  },
  {
    id: 'accepted-1',
    foretakName: 'Nordlys Økologiske',
    visitDate: new Date(2025, 0, 27), // 27. januar 2025
    visitTime: '09:00 - 11:30',
    revisjonData: {
      ordning: 'KSL',
      revisjonsfrist: '30. januar 2025',
      produksjon: ['Sau', 'Korn', 'Frø og belgvekster', 'Grovfôr', 'Storfe'],
      kommune: 'Sel',
      address: 'Fjellveien 42, 2670 Otta',
      isPriority: true,
      hasPlannedDate: true
    },
    location: {
      lat: 61.7739,
      lng: 9.5444,
    },
  },
  {
    id: 'accepted-2',
    foretakName: 'Grønn Vallei Gård',
    visitDate: new Date(2025, 0, 27), // 27. januar 2025
    visitTime: '13:00 - 15:00',
    revisjonData: {
      ordning: 'LokalMat',
      revisjonsfrist: '31. januar 2025',
      produksjon: ['Melkeproduksjon', 'Grovfôr', 'Storfe'],
      kommune: 'Lillehammer',
      address: 'Storgata 15, 2000 Lillehammer',
      isPriority: false,
      hasPlannedDate: true
    },
    location: {
      lat: 61.1153,
      lng: 10.4662,
    },
  },
  {
    id: 'accepted-3',
    foretakName: 'Fjellheim Sauebruk',
    visitDate: new Date(2025, 0, 29), // 29. januar 2025
    visitTime: '10:00 - 13:00',
    revisjonData: {
      ordning: 'Spesialitet',
      revisjonsfrist: '1. februar 2025',
      produksjon: ['Frukt og bær', 'Planter og stauder'],
      kommune: 'Dovre',
      address: 'Høyfjellsvegen 8, 2660 Dombås',
      isPriority: false,
      hasPlannedDate: true
    },
    location: {
      lat: 62.0758,
      lng: 9.1228,
    },
  },
  {
    id: 'accepted-4',
    foretakName: 'Solsiden Frukt & Bær',
    visitDate: new Date(2025, 0, 29), // 29. januar 2025
    visitTime: '14:00 - 16:30',
    revisjonData: {
      ordning: 'Nyt Norge',
      revisjonsfrist: '3. februar 2025',
      produksjon: ['Økologiske grønnsaker', 'Potet'],
      kommune: 'Stange',
      address: 'Fruktveien 23, 2312 Ottestad',
      isPriority: true,
      hasPlannedDate: true
    },
    location: {
      lat: 60.8872,
      lng: 11.1922,
    },
  },
  {
    id: 'accepted-5',
    foretakName: 'Aurland Biogård',
    visitDate: new Date(2025, 1, 3), // 3. februar 2025
    visitTime: '11:00 - 13:30',
    revisjonData: {
      ordning: 'KSL',
      revisjonsfrist: '6. februar 2025',
      produksjon: ['Sau', 'Lam', 'Grovfôr'],
      kommune: 'Elverum',
      address: 'Melkeveien 7, 2408 Elverum',
      isPriority: false,
      hasPlannedDate: true
    },
    location: {
      lat: 60.8814,
      lng: 11.5644,
    },
  },
  {
    id: 'accepted-6',
    foretakName: 'Eikestad Melkeproduksjon',
    visitDate: new Date(2025, 1, 3), // 3. februar 2025
    visitTime: '08:00 - 11:00',
    revisjonData: {
      ordning: 'LokalMat',
      revisjonsfrist: '8. februar 2025',
      produksjon: ['Biodling', 'Honningproduksjon'],
      kommune: 'Nes',
      address: 'Kornveien 55, 2150 Årnes',
      isPriority: false,
      hasPlannedDate: true
    },
    location: {
      lat: 60.1278,
      lng: 11.4689,
    },
  },
];

export function AksepterteRevisjonerPage({ onRevisionClick, initialFilter = [], onFilterChange }: AksepterteRevisjonerPageProps = {}) {
  const [showingMenu, setShowingMenu] = useState(false); // Changed to false - show list first on mobile
  const [viewMode, setViewMode] = useState<'list' | 'map'>('list');
  const [selectedStatus, setSelectedStatus] = useState<string[]>(initialFilter);
  const [selectedRevisjonstyper, setSelectedRevisjonstyper] = useState<string[]>([]);
  const [selectedProduksjon, setSelectedProduksjon] = useState<string[]>([]);
  const [selectedOrdning, setSelectedOrdning] = useState<string[]>([]);
  const [selectedKommune, setSelectedKommune] = useState<string[]>([]);
  const [sortDropdownOpen, setSortDropdownOpen] = useState(false);
  const [sortBy, setSortBy] = useState<'planlagt-dato' | 'revisjonsfrist' | 'ordning' | 'revisjonstype'>('planlagt-dato');
  const [isFilterSheetOpen, setIsFilterSheetOpen] = useState(false); // New state for BottomSheet
  
  // Date range states
  const [revisjonsfristFrom, setRevisjonsfristFrom] = useState<Date | null>(new Date('2025-01-01'));
  const [revisjonsfristTo, setRevisjonsfristTo] = useState<Date | null>(new Date('2025-12-31'));
  const [planlagtDatoFrom, setPlanlagtDatoFrom] = useState<Date | null>(new Date('2025-01-01'));
  const [planlagtDatoTo, setPlanlagtDatoTo] = useState<Date | null>(new Date('2025-12-31'));

  const handleBackToMenu = () => {
    setShowingMenu(true);
  };

  // Filter the revisjoner based on selected filters
  const getFilteredRevisjoner = useMemo(() => {
    let filtered = [...mockAksepterteRevisjoner];

    // Filter by Status
    if (selectedStatus.length > 0) {
      filtered = filtered.filter(rev => {
        if (selectedStatus.includes('venter-pa-planlegging') && !rev.revisjonData.hasPlannedDate) return true;
        if (selectedStatus.includes('planlagt-dato') && rev.revisjonData.hasPlannedDate) return true;
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

    // Filter by Planlagt dato (visitDate) - only for revisions with planned dates
    if (planlagtDatoFrom || planlagtDatoTo) {
      filtered = filtered.filter(rev => {
        if (!rev.visitDate) return true; // Keep revisions without dates
        if (planlagtDatoFrom && rev.visitDate < planlagtDatoFrom) return false;
        if (planlagtDatoTo && rev.visitDate > planlagtDatoTo) return false;
        return true;
      });
    }

    return filtered;
  }, [mockAksepterteRevisjoner, selectedStatus, selectedRevisjonstyper, selectedProduksjon, selectedOrdning, selectedKommune, planlagtDatoFrom, planlagtDatoTo]);

  // Extract unique values with counts from the original data
  const filterOptions = useMemo(() => {
    const ordningCounts: Record<string, number> = {};
    const kommuneCounts: Record<string, number> = {};
    const produksjonCounts: Record<string, number> = {};
    const statusCounts = {
      'venter-pa-planlegging': 0,
      'planlagt-dato': 0,
    };
    const revisjonstypeCounts = {
      'prioritert-revisjon': 0,
      'ordinar': 0,
    };

    mockAksepterteRevisjoner.forEach(rev => {
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

      // Count status
      if (rev.revisjonData.hasPlannedDate) {
        statusCounts['planlagt-dato']++;
      } else {
        statusCounts['venter-pa-planlegging']++;
      }

      // Count revisjonstype
      if (rev.revisjonData.isPriority) {
        revisjonstypeCounts['prioritert-revisjon']++;
      } else {
        revisjonstypeCounts['ordinar']++;
      }
    });

    return {
      status: [
        { value: 'venter-pa-planlegging', label: 'Venter på planlegging', count: statusCounts['venter-pa-planlegging'] },
        { value: 'planlagt-dato', label: 'Planlagt dato', count: statusCounts['planlagt-dato'] },
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
  }, [mockAksepterteRevisjoner]);

  // Sorting function
  const getSortedRevisjoner = () => {
    const sorted = [...getFilteredRevisjoner];
    
    if (sortBy === 'planlagt-dato') {
      // Sort by visit date (planned date) - cards without date first, then by date
      sorted.sort((a, b) => {
        if (!a.visitDate && !b.visitDate) return 0;
        if (!a.visitDate) return -1; // No date comes first
        if (!b.visitDate) return 1;
        return a.visitDate.getTime() - b.visitDate.getTime();
      });
    } else if (sortBy === 'revisjonsfrist') {
      // Sort by revisjonsfrist (parse the Norwegian date string)
      sorted.sort((a, b) => {
        return a.revisjonData.revisjonsfrist.localeCompare(b.revisjonData.revisjonsfrist);
      });
    } else if (sortBy === 'ordning') {
      // Sort alphabetically by ordning
      sorted.sort((a, b) => a.revisjonData.ordning.localeCompare(b.revisjonData.ordning));
    } else if (sortBy === 'revisjonstype') {
      // Sort by revisjonstype: prioritert first, then others
      sorted.sort((a, b) => {
        const aScore = a.revisjonData.isPriority ? 1 : 0;
        const bScore = b.revisjonData.isPriority ? 1 : 0;
        return bScore - aScore; // Higher score comes first
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
  const statusLabels: Record<string, string> = {
    'venter-pa-planlegging': 'Venter på planlegging',
    'planlagt-dato': 'Planlagt dato',
  };

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
  const handleRemoveStatus = (value: string) => {
    const newList = selectedStatus.filter(v => v !== value);
    setSelectedStatus(newList);
    onFilterChange?.(newList);
  };

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
    setSelectedStatus([]);
    setSelectedRevisjonstyper([]);
    setSelectedProduksjon([]);
    setSelectedOrdning([]);
    setSelectedKommune([]);
    onFilterChange?.([]);
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

      {/* Status section */}
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
                  onFilterChange?.(newList);
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

      {/* Produksjon section - MOVED ABOVE Kommune */}
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

      {/* Kommune section - MOVED BELOW Produksjon */}
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

      {/* Divider */}
      <div className="px-4">
        <div className="h-px bg-[var(--border)]" />
      </div>

      {/* Revisjonsfrist section */}
      <div className="px-4 py-4">
        <h3 className="label-medium text-foreground mb-2">Revisjonsfrist</h3>
        <div className="flex flex-col gap-6">
          <DatePicker
            label="Fra og med"
            value={revisjonsfristFrom}
            onChange={setRevisjonsfristFrom}
          />
          <DatePicker
            label="Til og med"
            value={revisjonsfristTo}
            onChange={setRevisjonsfristTo}
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
    </>
  );

  return (
    <div className="flex h-full w-full overflow-hidden flex-col bg-background">
      {/* Header with title */}
      <div className="flex flex-col border-b border-[var(--border)] bg-background">
        <div className="px-6 pt-6 pb-4">
          <h2 className="headline-small text-foreground">Aksepterte Revisjoner</h2>
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
          {/* Back button - visible only on mobile/tablet */}
          {!showingMenu && (
            <div className="px-6 pt-4 pb-2 min-[1400px]:hidden">
              <button
                onClick={handleBackToMenu}
                className="flex items-center gap-2 label-large text-foreground hover:opacity-70 transition-opacity"
                aria-label="Tilbake til søk"
              >
                <ChevronLeft className="w-5 h-5" />
                Tilbake
              </button>
            </div>
          )}

          {/* Main content */}
          <div className="flex-1 overflow-y-auto px-4 py-4 pr-10 min-[1500px]:pr-[200px]">
            {/* Sorting and Bulk Actions Bar */}
            <div className="flex items-center justify-between gap-4 py-0 mb-6 flex-wrap max-w-[1040px]">
              {/* LEFT GROUP: View toggle */}
              <div className="flex items-center gap-4 flex-wrap">
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
              onRemoveStatus={handleRemoveStatus}
              onRemoveRevisjonstype={handleRemoveRevisjonstype}
              onRemoveProduksjon={handleRemoveProduksjon}
              onRemoveOrdning={handleRemoveOrdning}
              onRemoveKommune={handleRemoveKommune}
              onClearAll={handleClearAllFilters}
              resultCount={getFilteredRevisjoner.length}
              statusLabels={statusLabels}
              revisjonstypeLabels={revisjonstypeLabels}
              produksjonLabels={produksjonLabels}
              ordningLabels={ordningLabels}
              kommuneLabels={kommuneLabels}
            />
            
            {/* Conditional rendering: List or Map view */}
            {viewMode === 'list' ? (
              <div className="flex flex-col gap-6 pt-2">
                {getSortedRevisjoner().map((revisjon) => (
                  <RevisjonCard 
                    key={revisjon.id} 
                    revisjon={revisjon}
                    onCardClick={() => {
                      if (onRevisionClick) {
                        onRevisionClick(revisjon.id);
                      }
                    }}
                  />
                ))}
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