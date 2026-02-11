import { useState } from 'react';
import { Button } from './ui/button';
import { ChevronLeft, Search, List, MapPin, SlidersHorizontal } from 'lucide-react';
import { MaterialCheckbox } from './ui/material-checkbox';
import { DatePicker } from './ui/date-picker';
import { formatNorwegianDate } from '../utils/dateFormat';
import { TildeltRevisjonCard } from './TildeltRevisjonCard';
import { MapViewWrapper } from './MapViewWrapper';
import { BottomSheet } from './ui/bottom-sheet';
import svgPathsSorting from "../imports/svg-59lykn648d";

// Placeholder interfaces - will be defined later
interface TildeltRevisjon {
  id: string;
  foretakName: string;
  visitDate: Date;
  visitTime: string;
  revisjonData: {
    ordning: string;
    revisjonsfrist: string;
    produksjon: string[];
    kommune: string;
    address: string;
    isPriority: boolean;
    isOppfolgingGyldigKSL?: boolean; // New field for the KSL chip
  };
  location?: {
    lat: number;
    lng: number;
  };
}

// Placeholder SearchFilters for Advanced Search - will be customized later
export interface TildeltRevisjonSearchFilters {
  // TODO: Define search filter fields
}

interface TildelteRevisjonerPageProps {
  onRevisionClick: () => void;
}

export function TildelteRevisjonerPage({ onRevisionClick }: TildelteRevisjonerPageProps) {
  const [showingMenu, setShowingMenu] = useState(false);
  const [viewMode, setViewMode] = useState<'list' | 'map'>('list'); // New state for view toggle
  const [acceptedIds, setAcceptedIds] = useState<Set<string>>(new Set()); // Track accepted revisjoner
  const [searchFilters, setSearchFilters] = useState<TildeltRevisjonSearchFilters>({});
  const [selectedRevisjonstyper, setSelectedRevisjonstyper] = useState<string[]>([]);
  const [selectedProduksjon, setSelectedProduksjon] = useState<string[]>([]);
  const [selectedOrdning, setSelectedOrdning] = useState<string[]>([]);
  const [selectedKommune, setSelectedKommune] = useState<string[]>([]);
  const [sortDropdownOpen, setSortDropdownOpen] = useState(false);
  const [sortBy, setSortBy] = useState<'akseptfrist' | 'revisjonsfrist' | 'ordning' | 'revisjonstype'>('akseptfrist');
  
  // Date range states
  const [akseptfristFrom, setAkseptfristFrom] = useState<Date | null>(new Date('2025-01-01'));
  const [akseptfristTo, setAkseptfristTo] = useState<Date | null>(new Date('2025-12-31'));
  const [revisjonsfristFrom, setRevisjonsfristFrom] = useState<Date | null>(new Date('2025-01-01'));
  const [revisjonsfristTo, setRevisjonsfristTo] = useState<Date | null>(new Date('2025-12-31'));

  // Handlers for map view
  const handleAccept = (id: string) => {
    setAcceptedIds(prev => new Set([...prev, id]));
  };

  const handleReject = (id: string) => {
    // Handle rejection - for now, just remove from list or mark as rejected
    console.log('Rejected:', id);
  };

  // Placeholder data - will be populated later
  const tildelteRevisjoner: TildeltRevisjon[] = [
    {
      id: '1',
      foretakName: 'Bjørkli Økologiske',
      visitDate: new Date(2025, 1, 5), // February 5, 2025
      visitTime: '09:00 - 11:30',
      revisjonData: {
        ordning: 'KSL',
        revisjonsfrist: '10. februar 2025',
        produksjon: ['Sau (11)', 'Grovfôr (114)', 'Storfe (2)'],
        kommune: 'Kristiansand',
        address: 'Holteveien 138, 4639 Kristiansand',
        isPriority: true,
        isOppfolgingGyldigKSL: true, // Both priority and KSL
      },
      location: {
        lat: 58.1556,
        lng: 8.2088,
      },
    },
    {
      id: '2',
      foretakName: 'Nordlys Økologiske',
      visitDate: new Date(2025, 1, 8), // February 8, 2025
      visitTime: '10:00 - 12:00',
      revisjonData: {
        ordning: 'LokalMat',
        revisjonsfrist: '15. februar 2025',
        produksjon: ['Melkeproduksjon (80)', 'Grovfôr (200)', 'Storfe (85)'],
        kommune: 'Kristiansand',
        address: 'Søm Hovedgård, 4640 Søgne',
        isPriority: false,
        isOppfolgingGyldigKSL: true, // Only KSL (not priority)
      },
      location: {
        lat: 58.0876,
        lng: 7.8011,
      },
    },
    {
      id: '3',
      foretakName: 'Grønn Vallei Gård',
      visitDate: new Date(2025, 1, 12), // February 12, 2025
      visitTime: '13:00 - 15:00',
      revisjonData: {
        ordning: 'Spesialitet',
        revisjonsfrist: '19. februar 2025',
        produksjon: ['Økologiske grønnsaker (230)', 'Potet (120)'],
        kommune: 'Vennesla',
        address: 'Mosbyvegen 45, 4700 Vennesla',
        isPriority: true,
      },
      location: {
        lat: 58.2767,
        lng: 7.9572,
      },
    },
    {
      id: '4',
      foretakName: 'Fjellheim Sauebruk',
      visitDate: new Date(2025, 1, 15), // February 15, 2025
      visitTime: '08:00 - 10:00',
      revisjonData: {
        ordning: 'KSL',
        revisjonsfrist: '22. februar 2025',
        produksjon: ['Sau (25)', 'Lam (40)', 'Grovfôr (80)'],
        kommune: 'Songdalen',
        address: 'Brennåsen 22, 4685 Nodeland',
        isPriority: false,
      },
      location: {
        lat: 58.2011,
        lng: 7.7453,
      },
    },
    {
      id: '5',
      foretakName: 'Solsiden Frukt & Bær',
      visitDate: new Date(2025, 1, 18), // February 18, 2025
      visitTime: '14:00 - 16:30',
      revisjonData: {
        ordning: 'LokalMat',
        revisjonsfrist: '25. februar 2025',
        produksjon: ['Frukt og bær (150)', 'Planter og stauder (45)'],
        kommune: 'Lillesand',
        address: 'Årnesvegen 18, 4790 Lillesand',
        isPriority: true,
        isOppfolgingGyldigKSL: true, // Both priority and KSL
      },
      location: {
        lat: 58.2475,
        lng: 8.3788,
      },
    },
    {
      id: '6',
      foretakName: 'Aurland Biogård',
      visitDate: new Date(2025, 1, 20), // February 20, 2025
      visitTime: '11:00 - 13:30',
      revisjonData: {
        ordning: 'Nyt Norge',
        revisjonsfrist: '27. februar 2025',
        produksjon: ['Biodling (35)', 'Honningproduksjon'],
        kommune: 'Birkenes',
        address: 'Flaksvann 56, 4795 Birkeland',
        isPriority: false,
        isOppfolgingGyldigKSL: true, // Only KSL (not priority)
      },
      location: {
        lat: 58.3522,
        lng: 8.2578,
      },
    },
    {
      id: '7',
      foretakName: 'Eikestad Melkeproduksjon',
      visitDate: new Date(2025, 1, 22), // February 22, 2025
      visitTime: '10:30 - 13:00',
      revisjonData: {
        ordning: 'KSL',
        revisjonsfrist: '1. mars 2025',
        produksjon: ['Melkeproduksjon (120)', 'Storfe (95)', 'Grovfôr (180)'],
        kommune: 'Iveland',
        address: 'Vatnestrøm 12, 4724 Iveland',
        isPriority: true,
      },
      location: {
        lat: 58.4367,
        lng: 7.9583,
      },
    },
    {
      id: '8',
      foretakName: 'Høgås Gårdsdrift',
      visitDate: new Date(2025, 2, 3), // March 3, 2025
      visitTime: '09:00 - 11:30',
      revisjonData: {
        ordning: 'Spesialitet',
        revisjonsfrist: '10. mars 2025',
        produksjon: ['Korn (450)', 'Frø og belgvekster (60)'],
        kommune: 'Evje og Hornnes',
        address: 'Kilefjorden 88, 4735 Evje',
        isPriority: false,
        isOppfolgingGyldigKSL: true, // Only KSL (not priority)
      },
      location: {
        lat: 58.5889,
        lng: 7.7967,
      },
    },
    {
      id: '9',
      foretakName: 'Lunden Grønnsaker',
      visitDate: new Date(2025, 2, 7), // March 7, 2025
      visitTime: '13:30 - 16:00',
      revisjonData: {
        ordning: 'LokalMat',
        revisjonsfrist: '14. mars 2025',
        produksjon: ['Økologiske grønnsaker (180)', 'Rotfrukter (90)', 'Urter (25)'],
        kommune: 'Kristiansand',
        address: 'Justnesveien 74, 4626 Kristiansand',
        isPriority: true,
      },
      location: {
        lat: 58.1889,
        lng: 8.0444,
      },
    },
    {
      id: '10',
      foretakName: 'Solberg Økologisk',
      visitDate: new Date(2025, 2, 10), // March 10, 2025
      visitTime: '15:00 - 17:00',
      revisjonData: {
        ordning: 'Nyt Norge',
        revisjonsfrist: '17. mars 2025',
        produksjon: ['Geit (18)', 'Geitost produksjon', 'Grovfôr (55)'],
        kommune: 'Lindesnes',
        address: 'Åros 33, 4521 Lindesnes',
        isPriority: false,
      },
      location: {
        lat: 58.0367,
        lng: 7.0500,
      },
    },
  ];

  // Sorting function
  const getSortedRevisjoner = () => {
    const sorted = [...tildelteRevisjoner];
    
    if (sortBy === 'akseptfrist') {
      // Sort by visit date (akseptfrist)
      sorted.sort((a, b) => a.visitDate.getTime() - b.visitDate.getTime());
    } else if (sortBy === 'revisjonsfrist') {
      // Sort by revisjonsfrist (parse the Norwegian date string)
      sorted.sort((a, b) => {
        // Simple date comparison based on the date string
        return a.revisjonData.revisjonsfrist.localeCompare(b.revisjonData.revisjonsfrist);
      });
    } else if (sortBy === 'ordning') {
      // Sort alphabetically by ordning
      sorted.sort((a, b) => a.revisjonData.ordning.localeCompare(b.revisjonData.ordning));
    } else if (sortBy === 'revisjonstype') {
      // Sort by revisjonstype: prioritert first, then oppfølging, then others
      sorted.sort((a, b) => {
        const aScore = a.revisjonData.isPriority ? 2 : (a.revisjonData.isOppfolgingGyldigKSL ? 1 : 0);
        const bScore = b.revisjonData.isPriority ? 2 : (b.revisjonData.isOppfolgingGyldigKSL ? 1 : 0);
        return bScore - aScore; // Higher score comes first
      });
    }
    
    return sorted;
  };

  const handleSortChange = (newSort: 'akseptfrist' | 'revisjonsfrist' | 'ordning' | 'revisjonstype') => {
    setSortBy(newSort);
    setSortDropdownOpen(false);
  };

  const getSortLabel = () => {
    switch (sortBy) {
      case 'akseptfrist':
        return 'Akseptfrist';
      case 'revisjonsfrist':
        return 'Revisjonsfrist';
      case 'ordning':
        return 'Ordning';
      case 'revisjonstype':
        return 'Revisjonstype';
    }
  };

  return (
    <div className="flex h-full w-full overflow-hidden flex-col bg-background">
      {/* Header with title */}
      <div className="flex flex-col border-b border-[var(--border)] bg-background">
        {/* Title */}
        <div className="px-6 pt-6 pb-4">
          <h2 className="headline-small text-foreground">Tildelte Revisjoner</h2>
        </div>

        {/* Divider after title (no tabs for now) */}
      </div>

      {/* Main content area with advanced search and content */}
      <div className="flex flex-1 overflow-hidden">
        {/* MOBILE/TABLET: Advanced Search - Shows ONLY when showingMenu is true */}
        {showingMenu && (
          <div className="min-[1400px]:hidden w-full h-full bg-background overflow-hidden">
            <div className="flex flex-col h-full">
              <div className="flex-1 overflow-y-auto">
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

                {/* Revisjonstype section */}
                <div className="px-4 py-4">
                  <h3 className="label-medium text-foreground mb-2">Revisjonstype</h3>
                  <div className="flex flex-col gap-1">
                    {[
                      { value: 'prioritert-revisjon', label: 'Prioritert revisjon' },
                      { value: 'oppfolging-gyldig-ksl', label: 'Oppfølging gyldig KSL' },
                      { value: 'ordinar', label: 'Ordinær' },
                    ].map((item) => (
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
                          label={item.label}
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Divider */}
                <div className="px-4">
                  <div className="h-px bg-[var(--border)]" />
                </div>

                {/* Akseptfrist section */}
                <div className="px-6 py-6">
                  <h3 className="title-medium text-foreground mb-6">Akseptfrist</h3>
                  <div className="flex flex-col gap-6">
                    <DatePicker
                      label="Fra"
                      value={akseptfristFrom}
                      onChange={setAkseptfristFrom}
                    />
                    <DatePicker
                      label="Til"
                      value={akseptfristTo}
                      onChange={setAkseptfristTo}
                    />
                  </div>
                </div>

                {/* Divider */}
                <div className="px-4">
                  <div className="h-px bg-[var(--border)]" />
                </div>

                {/* Revisjonsfrist section */}
                <div className="px-6 py-6">
                  <h3 className="title-medium text-foreground mb-6">Revisjonsfrist</h3>
                  <div className="flex flex-col gap-6">
                    <DatePicker
                      label="Fra"
                      value={revisjonsfristFrom}
                      onChange={setRevisjonsfristFrom}
                    />
                    <DatePicker
                      label="Til"
                      value={revisjonsfristTo}
                      onChange={setRevisjonsfristTo}
                    />
                  </div>
                </div>
              </div>
              
              {/* Button to see results */}
              <div className="p-6 border-t border-[var(--border)] bg-background">
                <Button 
                  onClick={() => setShowingMenu(false)}
                  className="w-full"
                >
                  Se resultater (0)
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* DESKTOP: Advanced Search - Always visible */}
        <div className="max-[1400px]:hidden w-[320px] h-full flex flex-col border-r border-[var(--border)] bg-background overflow-hidden">
          <div className="flex-1 overflow-y-auto">
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

            {/* Revisjonstype section */}
            <div className="px-4 py-4">
              <h3 className="label-medium text-foreground mb-2">Revisjonstype</h3>
              <div className="flex flex-col gap-1">
                {[
                  { value: 'prioritert-revisjon', label: 'Prioritert revisjon', count: 8 },
                  { value: 'oppfolging-gyldig-ksl', label: 'Oppfølging gyldig KSL', count: 5 },
                  { value: 'ordinar', label: 'Ordinær', count: 15 },
                ].map((item) => (
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
                {[
                  { value: 'ksl', label: 'KSL', count: 12 },
                  { value: 'nyt-norge', label: 'Nyt Norge', count: 6 },
                  { value: 'lokalmat', label: 'LokalMat', count: 8 },
                  { value: 'spesialitet', label: 'Spesialitet', count: 4 },
                ].map((item) => (
                  <div
                    key={item.value}
                    className="h-14 px-4 flex items-center hover:bg-muted rounded-[var(--radius)] transition-colors"
                  >
                    <MaterialCheckbox
                      checked={selectedOrdning?.includes(item.value) || false}
                      onChange={(checked) => {
                        const newList = checked
                          ? [...(selectedOrdning || []), item.value]
                          : (selectedOrdning || []).filter(s => s !== item.value);
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

            {/* Akseptfrist section - MOVED UNDER Ordning */}
            <div className="px-4 py-4">
              <h3 className="label-medium text-foreground mb-2">Akseptfrist</h3>
              <div className="flex flex-col gap-6">
                <DatePicker
                  label="Fra og med"
                  value={akseptfristFrom}
                  onChange={setAkseptfristFrom}
                />
                <DatePicker
                  label="Til og med"
                  value={akseptfristTo}
                  onChange={setAkseptfristTo}
                />
              </div>
            </div>

            {/* Divider */}
            <div className="px-4">
              <div className="h-px bg-[var(--border)]" />
            </div>

            {/* Revisjonsfrist section - MOVED UNDER Akseptfrist */}
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

            {/* Produksjon section - MOVED BELOW date sections */}
            <div className="px-4 py-4">
              <h3 className="label-medium text-foreground mb-2">Produksjon</h3>
              <div className="flex flex-col gap-1">
                {[
                  { value: 'sau', label: 'Sau', count: 9 },
                  { value: 'geit', label: 'Geit', count: 5 },
                  { value: 'korn-fro-olje-belgvekster', label: 'Korn, frø, olje- og belgvekster', count: 7 },
                  { value: 'grovfor', label: 'Grovfôr', count: 14 },
                  { value: 'storfe', label: 'Storfe', count: 11 },
                ].map((item) => (
                  <div
                    key={item.value}
                    className="h-14 px-4 flex items-center hover:bg-muted rounded-[var(--radius)] transition-colors"
                  >
                    <MaterialCheckbox
                      checked={selectedProduksjon?.includes(item.value) || false}
                      onChange={(checked) => {
                        const newList = checked
                          ? [...(selectedProduksjon || []), item.value]
                          : (selectedProduksjon || []).filter(s => s !== item.value);
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

            {/* Kommune section - AT THE END */}
            <div className="px-4 py-4">
              <h3 className="label-medium text-foreground mb-2">Kommune</h3>
              <div className="flex flex-col gap-1">
                {[
                  { value: 'oslo', label: 'Oslo', count: 8 },
                  { value: 'bergen', label: 'Bergen', count: 6 },
                  { value: 'trondheim', label: 'Trondheim', count: 5 },
                  { value: 'stavanger', label: 'Stavanger', count: 4 },
                  { value: 'drammen', label: 'Drammen', count: 3 },
                  { value: 'fredrikstad', label: 'Fredrikstad', count: 4 },
                ].map((item) => (
                  <div
                    key={item.value}
                    className="h-14 px-4 flex items-center hover:bg-muted rounded-[var(--radius)] transition-colors"
                  >
                    <MaterialCheckbox
                      checked={selectedKommune?.includes(item.value) || false}
                      onChange={(checked) => {
                        const newList = checked
                          ? [...(selectedKommune || []), item.value]
                          : (selectedKommune || []).filter(s => s !== item.value);
                        setSelectedKommune(newList);
                      }}
                      label={`${item.label} (${item.count})`}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Vertical Divider - Desktop only */}
        <div className="w-px h-full bg-[var(--border)] max-[1400px]:hidden" />

        {/* MOBILE/TABLET & DESKTOP: Main Content Area */}
        <div className={`flex-1 h-full flex-col ${showingMenu ? 'max-[1400px]:hidden' : 'max-[1400px]:flex'} min-[1400px]:flex max-[1400px]:w-full`}>
          {/* Main content - Placeholder for list of tildelte revisjoner */}
          <div className="flex-1 overflow-y-auto px-4 py-4 pr-10 min-[1500px]:pr-[200px]">
            {/* Sorting and Bulk Actions Bar */}
            <div className="flex items-center justify-between gap-4 py-0 mb-6 flex-wrap max-w-[1040px]">
              {/* LEFT GROUP: View toggle + Bulk action */}
              <div className="flex items-center gap-4 flex-wrap">
                {/* View Mode Toggle - Liste/Kart - FIRST */}
                <div className="flex gap-[2px] overflow-clip rounded-2xl">
                  {/* Liste button */}
                  <button
                    onClick={() => setViewMode('list')}
                    className={`flex items-center justify-center gap-2 px-6 py-4 min-w-[48px] transition-colors ${
                      viewMode === 'list'
                        ? 'bg-[#365bae] rounded-l-2xl'
                        : 'bg-[#dae2ff] rounded-l'
                    }`}
                  >
                    <List className={`w-6 h-6 ${viewMode === 'list' ? 'text-white' : 'text-[#174295]'}`} />
                    <span className={`label-medium ${viewMode === 'list' ? 'text-white' : 'text-[#174295]'}`}>
                      Liste
                    </span>
                  </button>

                  {/* Kart button */}
                  <button
                    onClick={() => setViewMode('map')}
                    className={`flex items-center justify-center gap-2 px-6 py-4 min-w-[48px] transition-colors ${
                      viewMode === 'map'
                        ? 'bg-[#365bae] rounded-r-2xl'
                        : 'bg-[#dae2ff] rounded-r'
                    }`}
                  >
                    <MapPin className={`w-6 h-6 ${viewMode === 'map' ? 'text-white' : 'text-[#174295]'}`} />
                    <span className={`label-medium ${viewMode === 'map' ? 'text-white' : 'text-[#174295]'}`}>
                      Kart
                    </span>
                  </button>
                </div>
                
                {/* Bulk action button - SECOND */}
                <div className="flex items-center justify-center shrink-0">
                  <Button variant="secondary">
                    Aksepter alle oppdrag
                  </Button>
                </div>
              </div>
              
              {/* RIGHT GROUP: Sorting + Filter button - only show in list view */}
              {viewMode === 'list' && (
                <div className="flex items-center gap-4 min-w-0 relative">
                  {/* \"Filtrer listen\" button - Mobile/Tablet only */}
                  <Button 
                    variant="secondary"
                    onClick={() => setShowingMenu(true)}
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
                  
                  {/* Dropdown menu */}
                  {sortDropdownOpen && (
                    <>
                      {/* Backdrop to close dropdown */}
                      <div 
                        className="fixed inset-0 z-10" 
                        onClick={() => setSortDropdownOpen(false)}
                      />
                      
                      {/* Dropdown content */}
                      <div className="absolute top-full right-0 mt-2 z-20 bg-card border border-[var(--border)] rounded-lg shadow-lg min-w-[200px] overflow-hidden">
                        <button
                          onClick={() => handleSortChange('akseptfrist')}
                          className={`w-full px-4 py-3 text-left body-medium hover:bg-muted transition-colors ${
                            sortBy === 'akseptfrist' ? 'bg-secondary-container text-secondary-container-foreground' : 'text-foreground'
                          }`}
                        >
                          Akseptfrist
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
            
            {/* Conditional rendering: List or Map view */}
            {viewMode === 'list' ? (
              /* Cards list */
              <div className="flex flex-col gap-6">
                {getSortedRevisjoner().map((revisjon) => (
                  <TildeltRevisjonCard key={revisjon.id} revisjon={revisjon} />
                ))}
              </div>
            ) : (
              /* Map view */
              <MapViewWrapper
                revisjoner={getSortedRevisjoner()}
                onAccept={handleAccept}
                onReject={handleReject}
                acceptedIds={acceptedIds}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}