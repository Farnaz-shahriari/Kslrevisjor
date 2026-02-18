import { useState, useMemo } from 'react';
import { Button } from './ui/button';
import { ChevronLeft, Search, List, MapPin, SlidersHorizontal, Table } from 'lucide-react';
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
  // Cards without planned date (Akseptert status - waiting for planning)
  {
    id: 'awaiting-1',
    foretakName: 'Bjørkli Økologiske',
    visitDate: null,
    visitTime: null,
    revisjonData: {
      ordning: 'KSL',
      revisjonsfrist: '5. mai 2026',
      produksjon: [
        { name: 'Storfe', count: 24 },
        { name: 'Melkeproduksjon', count: 88 },
        { name: 'Grovfôr', count: 142 }
      ],
      kommune: 'Lillehammer',
      address: 'Bjørkliveien 15, 2609 Lillehammer',
      isPriority: false,
      hasPlannedDate: false
    },
    location: {
      lat: 61.1150,
      lng: 10.4662,
    },
  },
  {
    id: 'awaiting-2',
    foretakName: 'Sletteløkken Gård',
    visitDate: null,
    visitTime: null,
    revisjonData: {
      ordning: 'Nyt Norge',
      revisjonsfrist: '12. mai 2026',
      produksjon: [
        { name: 'Grønnsaker', count: 45 },
        { name: 'Potet', count: 156 },
        { name: 'Gulrot', count: 89 }
      ],
      kommune: 'Elverum',
      address: 'Sletteløkkveien 88, 2406 Elverum',
      isPriority: false,
      hasPlannedDate: false
    },
    location: {
      lat: 60.8813,
      lng: 11.5622,
    },
  },
  {
    id: 'awaiting-3',
    foretakName: 'Fjellheim Sauehold',
    visitDate: null,
    visitTime: null,
    revisjonData: {
      ordning: 'LokalMat',
      revisjonsfrist: '18. mai 2026',
      produksjon: [
        { name: 'Sau', count: 32 },
        { name: 'Lam', count: 48 },
        { name: 'Ullproduksjon', count: 12 }
      ],
      kommune: 'Gausdal',
      address: 'Fjellheimveien 45, 2651 Gausdal',
      isPriority: false,
      hasPlannedDate: false
    },
    location: {
      lat: 61.2356,
      lng: 10.1234,
    },
  },
  
  // Cards with FUTURE planned dates (Planlagt dato status - July 2026 and later)
  {
    id: 'planned-1',
    foretakName: 'Østre Toten Gardsmeieri',
    visitDate: new Date(2026, 6, 8), // 8. juli 2026
    visitTime: '09:00 - 11:30',
    revisjonData: {
      ordning: 'KSL',
      revisjonsfrist: '24. juni 2026',
      produksjon: [
        { name: 'Storfe', count: 18 },
        { name: 'Geitost produksjon', count: 6 },
        { name: 'Melkeproduksjon', count: 95 }
      ],
      kommune: 'Østre Toten',
      address: 'Meierigata 12, 2850 Lena',
      isPriority: false,
      hasPlannedDate: true
    },
    location: {
      lat: 60.7344,
      lng: 10.6234,
    },
  },
  {
    id: 'planned-2',
    foretakName: 'Hurdal Økogård',
    visitDate: new Date(2026, 6, 14), // 14. juli 2026
    visitTime: '13:00 - 15:30',
    revisjonData: {
      ordning: 'Nyt Norge',
      revisjonsfrist: '28. juni 2026',
      produksjon: [
        { name: 'Grønnsaker', count: 64 },
        { name: 'Potet', count: 198 },
        { name: 'Kålrot', count: 87 }
      ],
      kommune: 'Hurdal',
      address: 'Gardsveien 55, 2090 Hurdal',
      isPriority: true,
      hasPlannedDate: true
    },
    location: {
      lat: 60.4689,
      lng: 11.0856,
    },
  },
  {
    id: 'planned-3',
    foretakName: 'Søndre Hedmark Gård',
    visitDate: new Date(2026, 6, 21), // 21. juli 2026
    visitTime: '10:00 - 12:30',
    revisjonData: {
      ordning: 'KSL',
      revisjonsfrist: '5. juli 2026',
      produksjon: [
        { name: 'Storfe', count: 42 },
        { name: 'Melkeproduksjon', count: 156 },
        { name: 'Grovfôr', count: 223 }
      ],
      kommune: 'Kongsvinger',
      address: 'Gardsveien 78, 2212 Kongsvinger',
      isPriority: false,
      hasPlannedDate: true
    },
    location: {
      lat: 60.1928,
      lng: 12.0006,
    },
  },
  {
    id: 'planned-4',
    foretakName: 'Valdres Alpint Gardsbruk',
    visitDate: new Date(2026, 6, 28), // 28. juli 2026
    visitTime: '14:00 - 16:00',
    revisjonData: {
      ordning: 'Spesialitet',
      revisjonsfrist: '12. juli 2026',
      produksjon: [
        { name: 'Geit', count: 28 },
        { name: 'Geitost produksjon', count: 8 },
        { name: 'Geitemelk', count: 112 }
      ],
      kommune: 'Nord-Aurdal',
      address: 'Alpinveien 33, 2900 Fagernes',
      isPriority: false,
      hasPlannedDate: true
    },
    location: {
      lat: 61.0056,
      lng: 9.2267,
    },
  },
  {
    id: 'planned-5',
    foretakName: 'Ringebu Fjellgård',
    visitDate: new Date(2026, 7, 4), // 4. august 2026
    visitTime: '09:30 - 12:00',
    revisjonData: {
      ordning: 'LokalMat',
      revisjonsfrist: '18. juli 2026',
      produksjon: [
        { name: 'Sau', count: 48 },
        { name: 'Lam', count: 72 },
        { name: 'Ullproduksjon', count: 18 }
      ],
      kommune: 'Ringebu',
      address: 'Fjellveien 101, 2630 Ringebu',
      isPriority: false,
      hasPlannedDate: true
    },
    location: {
      lat: 61.5278,
      lng: 10.1689,
    },
  },
  {
    id: 'planned-6',
    foretakName: 'Hadeland Grønt AS',
    visitDate: new Date(2026, 7, 11), // 11. august 2026
    visitTime: '13:30 - 16:00',
    revisjonData: {
      ordning: 'Nyt Norge',
      revisjonsfrist: '25. juli 2026',
      produksjon: [
        { name: 'Grønnsaker', count: 98 },
        { name: 'Potet', count: 245 },
        { name: 'Gulrot', count: 134 }
      ],
      kommune: 'Gran',
      address: 'Grønnveien 42, 2770 Gran',
      isPriority: false,
      hasPlannedDate: true
    },
    location: {
      lat: 60.3889,
      lng: 10.5667,
    },
  },
  {
    id: 'planned-7',
    foretakName: 'Nes Honningproduksjon',
    visitDate: new Date(2026, 7, 18), // 18. august 2026
    visitTime: '10:00 - 11:30',
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
  
  // Cards with PAST planned dates (Revidert status - visit date passed but report not locked)
  {
    id: 'revidert-1',
    foretakName: 'Vestbygd Økofarm',
    visitDate: new Date(2026, 1, 10), // 10. februar 2026 - past date
    visitTime: '09:00 - 11:30',
    revisjonData: {
      ordning: 'KSL',
      revisjonsfrist: '24. februar 2026',
      produksjon: [
        { name: 'Storfe', count: 35 },
        { name: 'Melkeproduksjon', count: 120 },
        { name: 'Grovfôr', count: 165 }
      ],
      kommune: 'Ringebu',
      address: 'Vestbygdveien 88, 2630 Ringebu',
      isPriority: false,
      hasPlannedDate: true,
      rapportLocked: false // Report not locked yet
    },
    location: {
      lat: 61.5278,
      lng: 10.1689,
    },
  },
  {
    id: 'revidert-2',
    foretakName: 'Søndre Økologiske',
    visitDate: new Date(2026, 1, 11), // 11. februar 2026 - past date
    visitTime: '13:00 - 15:30',
    revisjonData: {
      ordning: 'Nyt Norge',
      revisjonsfrist: '25. februar 2026',
      produksjon: [
        { name: 'Grønnsaker', count: 52 },
        { name: 'Potet', count: 180 },
        { name: 'Kålrot', count: 75 }
      ],
      kommune: 'Hamar',
      address: 'Gardeveien 42, 2315 Hamar',
      isPriority: true,
      hasPlannedDate: true,
      rapportLocked: false // Report not locked yet
    },
    location: {
      lat: 60.7945,
      lng: 11.0680,
    },
  },
  {
    id: 'revidert-3',
    foretakName: 'Granli Gardsbruk',
    visitDate: new Date(2026, 1, 12), // 12. februar 2026 - past date
    visitTime: '10:00 - 12:00',
    revisjonData: {
      ordning: 'LokalMat',
      revisjonsfrist: '26. februar 2026',
      produksjon: [
        { name: 'Sau', count: 22 },
        { name: 'Lam', count: 34 },
        { name: 'Ullproduksjon', count: 8 }
      ],
      kommune: 'Åmot',
      address: 'Granliveien 15, 2450 Rena',
      isPriority: false,
      hasPlannedDate: true,
      rapportLocked: false // Report not locked yet
    },
    location: {
      lat: 61.1345,
      lng: 11.3689,
    },
  },
  {
    id: 'revidert-4',
    foretakName: 'Nordby Gårdsmeieri',
    visitDate: new Date(2026, 1, 13), // 13. februar 2026 - past date
    visitTime: '14:00 - 16:30',
    revisjonData: {
      ordning: 'Spesialitet',
      revisjonsfrist: '27. februar 2026',
      produksjon: [
        { name: 'Geit', count: 18 },
        { name: 'Geitost produksjon', count: 5 },
        { name: 'Geitemelk', count: 95 }
      ],
      kommune: 'Gjøvik',
      address: 'Nordbyveien 77, 2816 Gjøvik',
      isPriority: false,
      hasPlannedDate: true,
      rapportLocked: false // Report not locked yet
    },
    location: {
      lat: 60.7957,
      lng: 10.6915,
    },
  },
];

export function AksepterteRevisjonerPage({ onRevisionClick }: AksepterteRevisjonerPageProps) {
  const [showingMenu, setShowingMenu] = useState(false);
  const [viewMode, setViewMode] = useState<'list' | 'map' | 'table'>('list');
  const [selectedStatus, setSelectedStatus] = useState<string[]>([]);
  const [selectedOrdning, setSelectedOrdning] = useState<string[]>([]);
  const [selectedProduksjon, setSelectedProduksjon] = useState<string[]>([]);
  const [selectedKommune, setSelectedKommune] = useState<string[]>([]);
  const [sortDropdownOpen, setSortDropdownOpen] = useState(false);
  const [sortBy, setSortBy] = useState<'planlagt-dato' | 'revisjonsfrist' | 'ordning'>('planlagt-dato');
  const [isAdvancedSearchOpen, setIsAdvancedSearchOpen] = useState(false); // New state for toggling advanced search
  const [isFilterSheetOpen, setIsFilterSheetOpen] = useState(false); // New state for mobile filter sheet
  
  // Date range states
  const [revisjonsfristFrom, setRevisjonsfristFrom] = useState<Date | null>(null);
  const [revisjonsfristTo, setRevisjonsfristTo] = useState<Date | null>(null);
  const [planlagtDatoFrom, setPlanlagtDatoFrom] = useState<Date | null>(null);
  const [planlagtDatoTo, setPlanlagtDatoTo] = useState<Date | null>(null);

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

    // Filter by Ordning
    if (selectedOrdning.length > 0) {
      filtered = filtered.filter(rev => 
        selectedOrdning.some(ord => rev.revisjonData.ordning.toLowerCase() === ord.toLowerCase())
      );
    }

    // Filter by Produksjon
    if (selectedProduksjon.length > 0) {
      filtered = filtered.filter(rev => {
        return rev.revisjonData.produksjon.some(prod => {
          // Handle both string and object formats
          const prodName = typeof prod === 'string' ? prod : prod.name;
          const prodLower = prodName.toLowerCase();
          return selectedProduksjon.some(selected => prodLower.includes(selected.toLowerCase()));
        });
      });
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
  }, [mockAksepterteRevisjoner, selectedStatus, selectedOrdning, selectedProduksjon, selectedKommune, planlagtDatoFrom, planlagtDatoTo]);

  // Extract unique values with counts from the original data
  const filterOptions = useMemo(() => {
    const ordningCounts: Record<string, number> = {};
    const kommuneCounts: Record<string, number> = {};
    const produksjonCounts: Record<string, number> = {};
    const statusCounts = {
      'venter-pa-planlegging': 0,
      'planlagt-dato': 0,
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
        // Handle both string and object formats
        const prodName = typeof prod === 'string' ? prod : prod.name;
        produksjonCounts[prodName] = (produksjonCounts[prodName] || 0) + 1;
      });

      // Count status
      if (rev.revisjonData.hasPlannedDate) {
        statusCounts['planlagt-dato']++;
      } else {
        statusCounts['venter-pa-planlegging']++;
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
    }
    
    return sorted;
  };

  const handleSortChange = (newSort: 'planlagt-dato' | 'revisjonsfrist' | 'ordning') => {
    setSortBy(newSort);
    setSortDropdownOpen(false);
  };

  const getSortLabel = () => {
    switch (sortBy) {
      case 'planlagt-dato': return 'Planlagt dato';
      case 'revisjonsfrist': return 'Revisjonsfrist';
      case 'ordning': return 'Ordning';
    }
  };

  // Create label mappings for filter chips
  const statusLabels: Record<string, string> = {
    'venter-pa-planlegging': 'Venter på planlegging',
    'planlagt-dato': 'Planlagt dato',
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
  };

  const handleRemoveOrdning = (value: string) => {
    setSelectedOrdning(prev => prev.filter(v => v !== value));
  };

  const handleRemoveProduksjon = (value: string) => {
    setSelectedProduksjon(prev => prev.filter(v => v !== value));
  };

  const handleRemoveKommune = (value: string) => {
    setSelectedKommune(prev => prev.filter(v => v !== value));
  };

  const handleClearAllFilters = () => {
    setSelectedStatus([]);
    setSelectedOrdning([]);
    setSelectedProduksjon([]);
    setSelectedKommune([]);
  };

  // Helper function to get status chip based on revision state
  const getStatusChip = (revisjon: any) => {
    const today = new Date(2026, 1, 17); // Current date in the scenario: Tuesday, Feb 17, 2026
    
    // Akseptert status (no planned date) - orange background
    if (!revisjon.visitDate) {
      return (
        <div className="bg-[#fff4e6] content-stretch flex h-[32px] items-center justify-center overflow-clip relative rounded-[8px] shrink-0">
          <div className="content-stretch flex h-[32px] items-center justify-center px-[16px] py-[6px] relative shrink-0">
            <div className="label-medium text-[#805500]">
              Akseptert
            </div>
          </div>
        </div>
      );
    }
    
    // Planlagt status (future date) - accent color with icon
    if (revisjon.visitDate > today) {
      return (
        <div className="bg-[var(--accent)] content-stretch flex h-[32px] items-center justify-center overflow-clip relative rounded-[8px] shrink-0">
          <div className="content-stretch flex h-[32px] items-center justify-center px-[16px] py-[6px] relative shrink-0">
            <div className="label-medium text-[var(--accent-foreground)]">
              Planlagt
            </div>
          </div>
        </div>
      );
    }
    
    // Revidert status (past date) - orange background
    return (
      <div className="bg-[#fff4e6] content-stretch flex h-[32px] items-center justify-center overflow-clip relative rounded-[8px] shrink-0">
        <div className="content-stretch flex h-[32px] items-center justify-center px-[16px] py-[6px] relative shrink-0">
          <div className="label-medium text-[#805500]">
            Revidert
          </div>
        </div>
      </div>
    );
  };

  // Helper function to get revisor chip (outlined style like in card view)
  const getRevisorChip = () => {
    return (
      <div className="h-[32px] relative rounded-[8px] shrink-0">
        <div className="content-stretch flex h-full items-center justify-center overflow-clip relative rounded-[inherit]">
          <div className="content-stretch flex h-[32px] items-center justify-center px-4 py-[6px] relative shrink-0">
            <span className="label-medium text-foreground whitespace-nowrap">
              Revisor
            </span>
          </div>
        </div>
        <div aria-hidden="true" className="absolute border border-[#c4c8b7] border-solid inset-0 pointer-events-none rounded-[8px]" />
      </div>
    );
  };

  // Helper function to format produksjon for table display
  const formatProduksjon = (produksjon: any[]) => {
    return produksjon.map(p => typeof p === 'string' ? p : p.name).join(', ');
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
      <div className="flex flex-col bg-background">
        <div className="flex items-center justify-between px-6 pt-6 pb-4">
          <h2 className="headline-small text-foreground">Aksepterte Revisjoner</h2>
          
          {/* Avansert søk button - Desktop only */}
          <Button
            variant="secondary"
            onClick={() => setIsAdvancedSearchOpen(!isAdvancedSearchOpen)}
            className="max-[1400px]:hidden"
          >
            <SlidersHorizontal className="w-5 h-5" />
            Avansert søk
          </Button>
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

        {/* DESKTOP: Advanced Search - Conditionally visible */}
        {isAdvancedSearchOpen && (
          <div className="max-[1400px]:hidden w-[320px] h-full flex flex-col border-r border-[var(--border)] bg-background overflow-hidden">
            {/* Close button at the top */}
            <div className="px-4 py-4 border-b border-[var(--border)]">
              <Button 
                variant="tertiary"
                onClick={() => setIsAdvancedSearchOpen(false)}
                className="w-full justify-start"
              >
                <ChevronLeft className="w-5 h-5 mr-2" />
                Lukk søkepanel
              </Button>
            </div>
            
            <div className="flex-1 overflow-y-auto">
              {renderFilterSection(false)}
            </div>
          </div>
        )}

        {/* Vertical Divider - Desktop only, only show when panel is open */}
        {isAdvancedSearchOpen && (
          <div className="w-px h-full bg-[var(--border)] max-[1400px]:hidden" />
        )}

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
          <div className="flex-1 overflow-y-auto px-0 pt-2">
            {/* Sorting and Bulk Actions Bar */}
            <div className="flex items-center justify-between gap-2 px-6 py-0 mb-2 flex-wrap">
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
                  <button
                    onClick={() => setViewMode('table')}
                    className={`flex items-center justify-center gap-2 px-6 py-4 min-w-[48px] transition-colors ${
                      viewMode === 'table' ? 'bg-[#365bae] rounded-r-2xl' : 'bg-[#dae2ff] rounded-r'
                    }`}
                  >
                    <Table className={`w-6 h-6 ${viewMode === 'table' ? 'text-white' : 'text-[#174295]'}`} />
                    <span className={`label-medium ${viewMode === 'table' ? 'text-white' : 'text-[#174295]'}`}>
                      Tabell
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
                      </div>
                    </>
                  )}
                </div>
              )}
            </div>
            
            {/* Filter chip bar */}
            <RevisjonFilterChipBar
              selectedStatus={selectedStatus}
              selectedRevisjonstyper={[]}
              selectedProduksjon={selectedProduksjon}
              selectedOrdning={selectedOrdning}
              selectedKommune={selectedKommune}
              onRemoveStatus={handleRemoveStatus}
              onRemoveRevisjonstype={() => {}}
              onRemoveProduksjon={handleRemoveProduksjon}
              onRemoveOrdning={handleRemoveOrdning}
              onRemoveKommune={handleRemoveKommune}
              onClearAll={handleClearAllFilters}
              resultCount={getFilteredRevisjoner.length}
              statusLabels={statusLabels}
              revisjonstypeLabels={{}}
              produksjonLabels={produksjonLabels}
              ordningLabels={ordningLabels}
              kommuneLabels={kommuneLabels}
            />
            
            {/* Conditional rendering: List, Map, or Table view */}
            {viewMode === 'list' ? (
              <div className="flex flex-col gap-1 px-6">
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
            ) : viewMode === 'map' ? (
              <InteractiveMap
                revisjoner={getSortedRevisjoner()}
                onAccept={() => {}}
                onReject={() => {}}
                acceptedIds={new Set()}
              />
            ) : (
              /* Table View - Full Width */
              <div className="w-full">
                <table className="w-full border-collapse">
                  <thead className="bg-[var(--surface-container-low)] sticky top-0 z-10">
                    <tr className="border-b border-[var(--border)]">
                      {/* Status column */}
                      <th className="px-6 py-3 text-left max-[768px]:hidden">
                        <span className="label-medium">Status</span>
                      </th>
                      {/* Revisjonsfrist column */}
                      <th className="px-6 py-3 text-left max-[768px]:hidden">
                        <span className="label-medium">Revisjonsfrist</span>
                      </th>
                      {/* Ordning column */}
                      <th className="px-6 py-3 text-left max-[768px]:hidden">
                        <span className="label-medium">Ordning</span>
                      </th>
                      {/* Revisor/Med revisor column */}
                      <th className="px-6 py-3 text-left max-[768px]:hidden">
                        <span className="label-medium">Revisor</span>
                      </th>
                      {/* Foretak and details column - responsive */}
                      <th className="px-6 py-3 text-left">
                        <span className="label-medium max-[768px]:hidden">Foretak</span>
                        <span className="label-medium min-[768px]:hidden">Revisjon</span>
                      </th>
                      {/* Address column */}
                      <th className="px-6 py-3 text-left max-[768px]:hidden">
                        <span className="label-medium">Adresse</span>
                      </th>
                      {/* Kommune column */}
                      <th className="px-6 py-3 text-left max-[768px]:hidden">
                        <span className="label-medium">Kommune</span>
                      </th>
                      {/* Produksjon column */}
                      <th className="px-6 py-3 text-left max-[768px]:hidden">
                        <span className="label-medium">Produksjon</span>
                      </th>
                      {/* Actions column */}
                      <th className="px-6 py-3 text-left max-[768px]:hidden">
                        <span className="label-medium">Handlinger</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {getSortedRevisjoner().map((revisjon) => (
                      <tr 
                        key={revisjon.id} 
                        className="border-b border-[var(--border)] hover:bg-muted transition-colors cursor-pointer"
                        onClick={() => {
                          if (onRevisionClick) {
                            onRevisionClick(revisjon.id);
                          }
                        }}
                      >
                        {/* Desktop: Status column */}
                        <td className="px-6 py-4 max-[768px]:hidden">
                          {getStatusChip(revisjon)}
                        </td>
                        
                        {/* Desktop: Revisjonsfrist column */}
                        <td className="px-6 py-4 max-[768px]:hidden">
                          <span className="body-medium text-foreground">
                            {revisjon.revisjonData.revisjonsfrist}
                          </span>
                        </td>
                        
                        {/* Desktop: Ordning column */}
                        <td className="px-6 py-4 max-[768px]:hidden">
                          <span className="body-medium text-foreground">
                            {revisjon.revisjonData.ordning}
                          </span>
                        </td>
                        
                        {/* Desktop: Revisor chip column */}
                        <td className="px-6 py-4 max-[768px]:hidden">
                          {getRevisorChip()}
                        </td>
                        
                        {/* Responsive column - Foretak and details */}
                        <td className="px-6 py-4">
                          {/* Desktop: Show only foretak name */}
                          <span className="body-medium text-foreground max-[768px]:hidden">
                            {revisjon.foretakName}
                          </span>
                          
                          {/* Mobile: Show condensed two-line format */}
                          <div className="flex flex-col gap-2 min-[768px]:hidden">
                            {/* Line 1: Chips with gap-1 */}
                            <div className="flex flex-row items-center gap-1 flex-wrap">
                              {getStatusChip(revisjon)}
                              {getRevisorChip()}
                              <span className="label-small text-muted-foreground">
                                {revisjon.revisjonData.ordning}
                              </span>
                            </div>
                            
                            {/* Line 2: Foretak name and address */}
                            <div className="flex flex-col gap-0.5">
                              <span className="body-medium text-foreground font-semibold">
                                {revisjon.foretakName}
                              </span>
                              <span className="body-medium text-muted-foreground">
                                {revisjon.revisjonData.address} • {revisjon.revisjonData.kommune}
                              </span>
                            </div>
                          </div>
                        </td>
                        
                        {/* Desktop: Address column */}
                        <td className="px-6 py-4 max-[768px]:hidden">
                          <span className="body-medium text-foreground">
                            {revisjon.revisjonData.address}
                          </span>
                        </td>
                        
                        {/* Desktop: Kommune column */}
                        <td className="px-6 py-4 max-[768px]:hidden">
                          <span className="body-medium text-foreground">
                            {revisjon.revisjonData.kommune}
                          </span>
                        </td>
                        
                        {/* Desktop: Produksjon column */}
                        <td className="px-6 py-4 max-[768px]:hidden">
                          <span className="body-medium text-foreground">
                            {formatProduksjon(revisjon.revisjonData.produksjon)}
                          </span>
                        </td>
                        
                        {/* Desktop: Actions column */}
                        <td className="px-6 py-4 max-[768px]:hidden">
                          <div className="flex items-center justify-end">
                            <Button 
                              variant="secondary"
                              onClick={(e) => {
                                e.stopPropagation();
                                if (onRevisionClick) {
                                  onRevisionClick(revisjon.id);
                                }
                              }}
                              className="h-10"
                            >
                              Åpne revisjon
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
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