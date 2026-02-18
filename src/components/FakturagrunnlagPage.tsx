import React, { useState, useMemo, useEffect } from 'react';
import { Download, SlidersHorizontal, ChevronLeft, Search } from 'lucide-react';
import { TripDetailPanel } from './TripDetailPanel';
import { TabLarge } from './ui/tabs';
import { FakturaFilterChipBar } from './FakturaFilterChipBar';
import { formatNorwegianDate } from '../utils/dateFormat';
import { Button } from './ui/button';
import { BottomSheet } from './ui/bottom-sheet';
import { MaterialCheckbox } from './ui/material-checkbox';
import { DatePicker } from './ui/date-picker';
import { imgVector12 } from '../imports/svg-djl4p';

type TabType = 'ufakturerte' | 'alle';
type TripStatus = 'kladd' | 'klar-til-fakturering' | 'fakturert' | 'godkjent';

interface Trip {
  id: string;
  tripNumber: string;
  startDate: string;
  endDate: string;
  description: string;
  foretak: string;
  amount: number;
  status: TripStatus;
}

export function FakturagrunnlagPage() {
  const [activeTab, setActiveTab] = useState<TabType>('ufakturerte');
  const [selectedTripId, setSelectedTripId] = useState<string | null>(null);
  const [isFilterSheetOpen, setIsFilterSheetOpen] = useState(false);
  const [isDetailBottomSheetOpen, setIsDetailBottomSheetOpen] = useState(false);
  const [showResizeHandle, setShowResizeHandle] = useState(false);
  const [isResizing, setIsResizing] = useState(false);
  const [panelWidth, setPanelWidth] = useState(400);
  const [isAdvancedSearchOpen, setIsAdvancedSearchOpen] = useState(false); // New state for toggling advanced search
  
  // State for creating new trip
  const [isCreatingNewTrip, setIsCreatingNewTrip] = useState(false);
  const [newTripData, setNewTripData] = useState<Trip | null>(null);
  
  // Track if new trip has been saved (type and date selected)
  const [isNewTripSaved, setIsNewTripSaved] = useState(false);
  
  // Track trips that were just fakturert in this session (should stay visible in ufakturerte tab)
  const [justFakturertTripIds, setJustFakturertTripIds] = useState<Set<string>>(new Set());
  
  // Search and filter states
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStatus, setSelectedStatus] = useState<TripStatus[]>([]);
  const [selectedForetak, setSelectedForetak] = useState<string[]>([]);
  const [startDateFrom, setStartDateFrom] = useState<Date | null>(null);
  const [startDateTo, setStartDateTo] = useState<Date | null>(null);
  const [endDateFrom, setEndDateFrom] = useState<Date | null>(null);
  const [endDateTo, setEndDateTo] = useState<Date | null>(null);
  const [amountFrom, setAmountFrom] = useState('');
  const [amountTo, setAmountTo] = useState('');

  // State for resizable detail panel
  const [detailPanelWidth, setDetailPanelWidth] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth * 0.5; // Default to 50% of screen width
    }
    return 600;
  });
  const [isResizingDetail, setIsResizingDetail] = useState(false);

  // Convert allTrips to state so we can update trip status
  const [allTrips, setAllTrips] = useState<Trip[]>([
    {
      id: '1',
      tripNumber: '2026-000015',
      startDate: '2026-01-15',
      endDate: '2026-01-15',
      description: '',
      foretak: 'Solheim Gård',
      amount: 0,
      status: 'kladd'
    },
    {
      id: '2',
      tripNumber: '2026-000011',
      startDate: '2026-01-20',
      endDate: '2026-01-20',
      description: 'på gården forretningsreise',
      foretak: 'Åsen Landbruk AS',
      amount: 1081.82,
      status: 'kladd'
    },
    {
      id: '3',
      tripNumber: '2026-000008',
      startDate: '2026-01-18',
      endDate: '2026-01-22',
      description: '',
      foretak: 'Fjellgård Økomat',
      amount: 0,
      status: 'kladd'
    },
    {
      id: '4',
      tripNumber: '2026-000005',
      startDate: '2026-01-23',
      endDate: '2026-01-23',
      description: '',
      foretak: 'Aardal Olav A',
      amount: 8187.5,
      status: 'kladd'
    },
    {
      id: '5',
      tripNumber: '2026-000002',
      startDate: '2026-01-25',
      endDate: '2026-01-25',
      description: 'kontrollbesøk',
      foretak: 'Haugen Gardsbruk',
      amount: 1500.0,
      status: 'klar-til-fakturering'
    },
    {
      id: '6',
      tripNumber: '2026-000001',
      startDate: '2026-01-28',
      endDate: '2026-01-28',
      description: 'oppfølgingsbesøk',
      foretak: 'Valle Økologiske',
      amount: 2250.0,
      status: 'klar-til-fakturering'
    },
    {
      id: '7',
      tripNumber: '2025-000298',
      startDate: '2025-12-15',
      endDate: '2025-12-15',
      description: 'revisjon spesialitet',
      foretak: 'Bergfoss Meieri',
      amount: 3200.0,
      status: 'fakturert'
    },
    {
      id: '8',
      tripNumber: '2025-000285',
      startDate: '2025-12-10',
      endDate: '2025-12-12',
      description: 'årlig revisjon',
      foretak: 'Lien Gård AS',
      amount: 4500.0,
      status: 'fakturert'
    },
    {
      id: '9',
      tripNumber: '2026-000012',
      startDate: '2026-01-30',
      endDate: '2026-01-30',
      description: '',
      foretak: 'Nordheim Fruktgård',
      amount: 0,
      status: 'kladd'
    },
    {
      id: '10',
      tripNumber: '2026-000007',
      startDate: '2026-01-27',
      endDate: '2026-01-29',
      description: 'dokumentkontroll',
      foretak: 'Vik Slakteri',
      amount: 2800.0,
      status: 'klar-til-fakturering'
    },
    {
      id: '11',
      tripNumber: '2025-000290',
      startDate: '2025-12-20',
      endDate: '2025-12-20',
      description: 'oppfølging avvik',
      foretak: 'Fjellstad Kjøtt',
      amount: 1950.0,
      status: 'godkjent'
    },
    {
      id: '12',
      tripNumber: '2025-000275',
      startDate: '2025-12-05',
      endDate: '2025-12-05',
      description: 'årlig revisjon',
      foretak: 'Grønn Dal Gård',
      amount: 1200.0,
      status: 'godkjent'
    },
    {
      id: '13',
      tripNumber: '2025-000268',
      startDate: '2025-11-28',
      endDate: '2025-11-30',
      description: 'kontrollbesøk flere gårder',
      foretak: 'Ødegård Økologisk',
      amount: 3750.0,
      status: 'godkjent'
    }
  ]);

  // Filter trips based on active tab
  const trips = activeTab === 'ufakturerte' 
    ? allTrips.filter(trip => 
        // Include non-fakturert/godkjent trips OR trips that were just fakturert in this session
        (trip.status !== 'fakturert' && trip.status !== 'godkjent') || justFakturertTripIds.has(trip.id)
      )
    : allTrips;

  // Calculate filter options with counts from the trips list (based on active tab)
  const filterOptions = useMemo(() => {
    const statusCounts: Record<TripStatus, number> = {
      'kladd': 0,
      'klar-til-fakturering': 0,
      'fakturert': 0,
      'godkjent': 0
    };
    const foretakCounts: Record<string, number> = {};

    trips.forEach(trip => {
      // Count status
      statusCounts[trip.status]++;

      // Count foretak
      foretakCounts[trip.foretak] = (foretakCounts[trip.foretak] || 0) + 1;
    });

    return {
      status: [
        { value: 'kladd' as TripStatus, label: 'Kladd', count: statusCounts['kladd'] },
        { value: 'klar-til-fakturering' as TripStatus, label: 'Klar til fakturering', count: statusCounts['klar-til-fakturering'] },
        { value: 'fakturert' as TripStatus, label: 'Fakturert', count: statusCounts['fakturert'] },
        { value: 'godkjent' as TripStatus, label: 'Godkjent', count: statusCounts['godkjent'] },
      ].filter(item => item.count > 0),
      foretak: Object.entries(foretakCounts).map(([value, count]) => ({
        value,
        label: value,
        count,
      })).sort((a, b) => a.label.localeCompare(b.label)),
    };
  }, [trips]);

  // Helper function to get unique foretak for a trip based on its date range
  const getForetakForTrip = (trip: Trip): string => {
    // Return the foretak from the trip data
    return trip.foretak || '—';
  };

  // Helper function to generate next trip number
  const generateNextTripNumber = (): string => {
    const currentYear = new Date().getFullYear();
    
    // Find all trips from current year
    const currentYearTrips = allTrips.filter(trip => 
      trip.tripNumber.startsWith(`${currentYear}-`)
    );
    
    if (currentYearTrips.length === 0) {
      return `${currentYear}-000001`;
    }
    
    // Extract numbers and find the highest
    const numbers = currentYearTrips.map(trip => {
      const parts = trip.tripNumber.split('-');
      return parseInt(parts[1], 10);
    });
    
    const highestNumber = Math.max(...numbers);
    const nextNumber = highestNumber + 1;
    
    // Pad with zeros to make it 6 digits
    return `${currentYear}-${String(nextNumber).padStart(6, '0')}`;
  };

  // Handle create new trip
  const handleCreateNewTrip = () => {
    const newTripNumber = generateNextTripNumber();
    const newId = `new-${Date.now()}`;
    
    const newTrip: Trip = {
      id: newId,
      tripNumber: newTripNumber,
      startDate: '',
      endDate: '',
      description: '',
      foretak: '',
      amount: 0,
      status: 'kladd'
    };
    
    setNewTripData(newTrip);
    setIsCreatingNewTrip(true);
    setIsNewTripSaved(false); // Start as unsaved
    setSelectedTripId(newId);
    
    // On mobile/tablet, open the detail bottom sheet
    if (window.innerWidth < 1400) {
      setIsDetailBottomSheetOpen(true);
    }
  };

  // Handle save trip (called when type + date are selected)
  const handleSaveTrip = () => {
    setIsNewTripSaved(true);
  };

  // Handle delete trip
  const handleDeleteTrip = () => {
    setIsCreatingNewTrip(false);
    setNewTripData(null);
    setIsNewTripSaved(false);
    setSelectedTripId(null);
    
    // Close mobile detail sheet if open
    if (window.innerWidth < 1400) {
      setIsDetailBottomSheetOpen(false);
    }
  };

  // Handle update trip data (callback from TripDetailPanel)
  const handleUpdateTripData = (updatedTrip: Partial<Trip>) => {
    if (newTripData && isCreatingNewTrip && newTripData.id === selectedTripId) {
      // Handle updates to new trip being created
      setNewTripData({
        ...newTripData,
        ...updatedTrip
      });
    } else if (selectedTripId) {
      // Handle updates to existing trips
      setAllTrips(prevTrips => 
        prevTrips.map(trip => 
          trip.id === selectedTripId 
            ? { ...trip, ...updatedTrip }
            : trip
        )
      );
      
      // If status changed to 'fakturert', track this trip ID
      if (updatedTrip.status === 'fakturert' && activeTab === 'ufakturerte') {
        setJustFakturertTripIds(prev => new Set(prev).add(selectedTripId));
      }
    }
  };

  // Apply search filters
  const filteredTrips = trips.filter(trip => {
    // Search query filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      const matchesTripNumber = trip.tripNumber.toLowerCase().includes(query);
      const matchesDescription = trip.description.toLowerCase().includes(query);
      const matchesForetak = trip.foretak.toLowerCase().includes(query);
      if (!matchesTripNumber && !matchesDescription && !matchesForetak) {
        return false;
      }
    }
    
    // Status filter
    if (selectedStatus.length > 0 && !selectedStatus.includes(trip.status)) {
      return false;
    }
    
    // Foretak filter
    if (selectedForetak.length > 0 && !selectedForetak.includes(trip.foretak)) {
      return false;
    }
    
    // Amount filter
    if (amountFrom && trip.amount < parseFloat(amountFrom)) {
      return false;
    }
    if (amountTo && trip.amount > parseFloat(amountTo)) {
      return false;
    }
    
    // Date filters
    if (trip.startDate && trip.endDate) {
      const tripStartDate = new Date(trip.startDate);
      const tripEndDate = new Date(trip.endDate);
      
      if (startDateFrom && tripStartDate < startDateFrom) {
        return false;
      }
      if (startDateTo && tripStartDate > startDateTo) {
        return false;
      }
      if (endDateFrom && tripEndDate < endDateFrom) {
        return false;
      }
      if (endDateTo && tripEndDate > endDateTo) {
        return false;
      }
    }
    
    return true;
  });

  // Add new trip to the top of the list if creating
  const displayedTrips = isCreatingNewTrip && newTripData 
    ? [newTripData, ...filteredTrips]
    : filteredTrips;

  const getStatusLabel = (status: TripStatus): string => {
    switch (status) {
      case 'kladd':
        return 'Kladd';
      case 'klar-til-fakturering':
        return 'Klar til fakturering';
      case 'fakturert':
        return 'Fakturert';
      case 'godkjent':
        return 'Godkjent';
    }
  };

  const getStatusBadge = (status: TripStatus) => {
    switch (status) {
      case 'kladd':
        return (
          <div className="inline-flex items-center px-3 py-1.5 rounded-lg bg-muted text-foreground">
            <span className="label-medium">Kladd</span>
          </div>
        );
      case 'klar-til-fakturering':
        return (
          <div className="inline-flex items-center px-3 py-1.5 rounded-lg bg-[#d5e6c3] text-[#1a1c16]">
            <span className="label-medium">Klar til fakturering</span>
          </div>
        );
      case 'fakturert':
        return (
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#d5e6c3] text-[#1a1c16]">
            <div className="relative w-4 h-4">
              <div className="absolute inset-[8.33%_12.5%]">
                <img alt="" className="block max-w-none size-full" src={imgVector12} />
              </div>
            </div>
            <span className="label-medium">Fakturert</span>
          </div>
        );
      case 'godkjent':
        return (
          <div className="inline-flex items-center px-3 py-1.5 rounded-lg bg-[#c3d5e6] text-[#1a1c16]">
            <span className="label-medium">Godkjent</span>
          </div>
        );
    }
  };

  const formatAmount = (amount: number): string => {
    return new Intl.NumberFormat('nb-NO', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(amount);
  };

  // Handle trip row click
  const handleTripClick = (tripId: string) => {
    setSelectedTripId(tripId);
    
    // On mobile/tablet, open the detail bottom sheet
    if (window.innerWidth < 1400) {
      setIsDetailBottomSheetOpen(true);
    }
  };

  // Resize handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsResizing(true);
  };

  useEffect(() => {
    if (!isResizing) return;

    const handleMouseMove = (e: MouseEvent) => {
      const newWidth = window.innerWidth - e.clientX;
      const constrainedWidth = Math.max(320, Math.min(600, newWidth));
      setPanelWidth(constrainedWidth);
    };

    const handleMouseUp = () => {
      setIsResizing(false);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isResizing]);

  const handleClearFilters = () => {
    setSearchQuery('');
    setSelectedStatus([]);
    setSelectedForetak([]);
    setStartDateFrom(null);
    setStartDateTo(null);
    setEndDateFrom(null);
    setEndDateTo(null);
    setAmountFrom('');
    setAmountTo('');
  };

  // Handler functions for filter chip bar
  const handleRemoveStatus = (status: TripStatus) => {
    setSelectedStatus(prev => prev.filter(s => s !== status));
  };

  const handleRemoveForetak = (foretak: string) => {
    setSelectedForetak(prev => prev.filter(f => f !== foretak));
  };

  const handleRemoveDateFilter = (type: 'startFrom' | 'startTo' | 'endFrom' | 'endTo') => {
    switch (type) {
      case 'startFrom':
        setStartDateFrom(null);
        break;
      case 'startTo':
        setStartDateTo(null);
        break;
      case 'endFrom':
        setEndDateFrom(null);
        break;
      case 'endTo':
        setEndDateTo(null);
        break;
    }
  };

  const handleRemoveAmountFilter = (type: 'from' | 'to') => {
    if (type === 'from') {
      setAmountFrom('');
    } else {
      setAmountTo('');
    }
  };

  // Handle mouse move and mouse up for resizing detail panel
  useEffect(() => {
    if (!isResizingDetail) return;

    const handleMouseMove = (e: MouseEvent) => {
      const newWidth = window.innerWidth - e.clientX;
      
      // Constrain width between 30% and 70% of screen width
      const minWidth = window.innerWidth * 0.30; // 30%
      const maxWidth = window.innerWidth * 0.70; // 70%
      
      const constrainedWidth = Math.max(minWidth, Math.min(maxWidth, newWidth));
      setDetailPanelWidth(constrainedWidth);
    };

    const handleMouseUp = () => {
      setIsResizingDetail(false);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isResizingDetail]);

  // Render filter panel content
  const renderFilterPanel = () => (
    <>
      {/* Search field */}
      <div className="px-4 py-4">
        <div className="relative">
          <div className="absolute left-4 top-1/2 -translate-y-1/2">
            <Search className="w-5 h-5 text-muted-foreground" />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Søk reisenummer, beskrivelse, etc."
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
          {filterOptions.status.map((status) => (
            <div
              key={status.value}
              className="h-14 px-4 flex items-center hover:bg-muted rounded-[var(--radius)] transition-colors"
            >
              <MaterialCheckbox
                checked={selectedStatus.includes(status.value)}
                onChange={(checked) => {
                  const newList = checked
                    ? [...selectedStatus, status.value]
                    : selectedStatus.filter(s => s !== status.value);
                  setSelectedStatus(newList);
                }}
                label={`${status.label} (${status.count})`}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="px-4">
        <div className="h-px bg-[var(--border)]" />
      </div>

      {/* Startdato section */}
      <div className="px-4 py-4">
        <h3 className="label-medium text-foreground mb-2">Startdato</h3>
        <div className="flex flex-col gap-6">
          <DatePicker
            label="Fra"
            value={startDateFrom}
            onChange={setStartDateFrom}
          />
          <DatePicker
            label="Til"
            value={startDateTo}
            onChange={setStartDateTo}
          />
        </div>
      </div>

      {/* Divider */}
      <div className="px-4">
        <div className="h-px bg-[var(--border)]" />
      </div>

      {/* Sluttdato section */}
      <div className="px-4 py-4">
        <h3 className="label-medium text-foreground mb-2">Sluttdato</h3>
        <div className="flex flex-col gap-6">
          <DatePicker
            label="Fra"
            value={endDateFrom}
            onChange={setEndDateFrom}
          />
          <DatePicker
            label="Til"
            value={endDateTo}
            onChange={setEndDateTo}
          />
        </div>
      </div>

      {/* Divider */}
      <div className="px-4">
        <div className="h-px bg-[var(--border)]" />
      </div>

      {/* Beløp section */}
      <div className="px-4 py-4">
        <h3 className="label-medium text-foreground mb-2">Beløp</h3>
        <div className="flex flex-col gap-6">
          <div>
            <label className="block mb-1.5">
              <span className="label-medium text-foreground">Fra</span>
            </label>
            <input
              type="number"
              value={amountFrom}
              onChange={(e) => setAmountFrom(e.target.value)}
              placeholder="0"
              className="w-full h-14 px-4 rounded-lg border-2 border-border hover:border-foreground bg-background text-foreground body-large focus:outline-none focus:border-primary transition-colors"
            />
          </div>
          <div>
            <label className="block mb-1.5">
              <span className="label-medium text-foreground">Til</span>
            </label>
            <input
              type="number"
              value={amountTo}
              onChange={(e) => setAmountTo(e.target.value)}
              placeholder="0"
              className="w-full h-14 px-4 rounded-lg border-2 border-border hover:border-foreground bg-background text-foreground body-large focus:outline-none focus:border-primary transition-colors"
            />
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="px-4">
        <div className="h-px bg-[var(--border)]" />
      </div>

      {/* Foretak section */}
      <div className="px-4 py-4">
        <h3 className="label-medium text-foreground mb-2">Foretak</h3>
        <div className="flex flex-col gap-1">
          {filterOptions.foretak.map((foretak) => (
            <div
              key={foretak.value}
              className="h-14 px-4 flex items-center hover:bg-muted rounded-[var(--radius)] transition-colors"
            >
              <MaterialCheckbox
                checked={selectedForetak.includes(foretak.value)}
                onChange={(checked) => {
                  const newList = checked
                    ? [...selectedForetak, foretak.value]
                    : selectedForetak.filter(f => f !== foretak.value);
                  setSelectedForetak(newList);
                }}
                label={`${foretak.label} (${foretak.count})`}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );

  return (
    <div className="flex flex-col flex-1 w-full bg-background">
      {/* Header with tabs */}
      <div className="border-b border-border">
        <div className="flex items-center justify-between px-6 pt-6 pb-0">
          <h1 className="headline-small">Fakturagrunnlag</h1>
          
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

        {/* Tabs */}
        <div className="flex items-center gap-0 px-6">
          <TabLarge
            active={activeTab === 'ufakturerte'}
            onClick={() => setActiveTab('ufakturerte')}
          >
            Ufakturerte reiser
          </TabLarge>
          <TabLarge
            active={activeTab === 'alle'}
            onClick={() => setActiveTab('alle')}
          >
            Alle reiser
          </TabLarge>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex flex-1 overflow-hidden">
        {/* DESKTOP: Advanced Search Panel - Conditionally visible */}
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
              {renderFilterPanel()}
            </div>
          </div>
        )}

        {/* Table Panel */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Filter Chip Bar */}
          <FakturaFilterChipBar
            selectedStatus={selectedStatus}
            selectedForetak={selectedForetak}
            startDateFrom={startDateFrom}
            startDateTo={startDateTo}
            endDateFrom={endDateFrom}
            endDateTo={endDateTo}
            amountFrom={amountFrom}
            amountTo={amountTo}
            onRemoveStatus={handleRemoveStatus}
            onRemoveForetak={handleRemoveForetak}
            onRemoveDateFilter={handleRemoveDateFilter}
            onRemoveAmountFilter={handleRemoveAmountFilter}
            onClearAll={handleClearFilters}
            resultCount={displayedTrips.length}
          />

          {/* Scrollable table container */}
          <div className="flex-1 overflow-auto">
            {/* Desktop Table - Shows on wide screens (≥1600px) or when detail panel is not shown, OR on tablet (768-1199px) */}
            <table className={`w-full ${selectedTripId ? 'min-[1200px]:max-[1599px]:hidden max-[768px]:hidden' : 'max-[768px]:hidden'}`}>
              <thead className="bg-surface-container-low sticky top-0 z-10">
                <tr className="border-b border-[var(--border)]">
                  <th className="px-6 py-3 text-left bg-surface-container-low">
                    <span className="label-medium">Reisenr.</span>
                  </th>
                  <th className="px-6 py-3 text-left bg-surface-container-low">
                    <span className="label-medium">Dato</span>
                  </th>
                  <th className="px-6 py-3 text-left bg-surface-container-low">
                    <span className="label-medium">Reisebeskrivelse</span>
                  </th>
                  <th className="px-6 py-3 text-left bg-surface-container-low">
                    <span className="label-medium">Foretak</span>
                  </th>
                  <th className="px-6 py-3 text-left bg-surface-container-low">
                    <span className="label-medium">Beløp</span>
                  </th>
                  <th className="px-6 py-3 text-left bg-surface-container-low">
                    <span className="label-medium">Status</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {displayedTrips.map((trip) => {
                  // Check if it's a day trip (same date) or overnight (different dates)
                  const isDayTrip = trip.startDate && trip.endDate && 
                    new Date(trip.startDate).toDateString() === new Date(trip.endDate).toDateString();
                  
                  return (
                    <tr
                        key={trip.id}
                        onClick={() => handleTripClick(trip.id)}
                        className={`border-b border-[var(--border)] hover:bg-muted cursor-pointer transition-colors ${
                          selectedTripId === trip.id ? 'bg-secondary-container' : ''
                        }`}
                    >
                      {/* Desktop: Trip Number column */}
                      <td className="px-6 py-4">
                        <span className="body-medium text-foreground">{trip.tripNumber}</span>
                      </td>

                      {/* Desktop: Date column (combined start/end dates) */}
                      <td className="px-6 py-4">
                        {isDayTrip ? (
                          // Day trip: Show single date
                          <span className="body-medium text-foreground">
                            {trip.startDate ? formatNorwegianDate(new Date(trip.startDate)) : '—'}
                          </span>
                        ) : (
                          // Overnight: Show both dates on one line with "-" between
                          <span className="body-medium text-foreground">
                            {trip.startDate ? formatNorwegianDate(new Date(trip.startDate)) : '—'}
                            {' - '}
                            {trip.endDate ? formatNorwegianDate(new Date(trip.endDate)) : '—'}
                          </span>
                        )}
                      </td>

                      {/* Desktop: Description */}
                      <td className="px-6 py-4">
                        <span className="body-medium text-foreground">
                          {trip.description || '—'}
                        </span>
                      </td>

                      {/* Desktop: Foretak column */}
                      <td className="px-6 py-4">
                        <span className="body-medium text-foreground">{getForetakForTrip(trip)}</span>
                      </td>

                      {/* Desktop: Amount column */}
                      <td className="px-6 py-4">
                        <span className="body-medium text-foreground">{formatAmount(trip.amount)}</span>
                      </td>

                      {/* Desktop: Status column */}
                      <td className="px-6 py-4">
                        {getStatusBadge(trip.status)}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>

            {/* Condensed List View - Shows on mobile (<768px) OR on desktop when detail panel is open and screen is narrow (1200-1599px) */}
            <div className={`flex flex-col ${selectedTripId ? 'min-[768px]:max-[1199px]:hidden min-[1600px]:hidden' : 'min-[768px]:hidden'}`}>
              <div className="px-6 py-3 border-b border-[var(--border)] bg-surface-container-low sticky top-0 z-10">
                <span className="label-medium text-foreground">Reise</span>
              </div>
              {displayedTrips.map((trip) => {
                const isDayTrip = trip.startDate && trip.endDate && 
                  new Date(trip.startDate).toDateString() === new Date(trip.endDate).toDateString();
                
                return (
                  <div
                    key={trip.id}
                    onClick={() => {
                      setSelectedTripId(trip.id);
                      // On mobile/tablet, open bottom sheet
                      if (window.innerWidth < 1200) {
                        setIsDetailBottomSheetOpen(true);
                      }
                    }}
                    className={`px-6 py-4 border-b border-[var(--border)] hover:bg-muted cursor-pointer transition-colors ${
                      selectedTripId === trip.id ? 'bg-secondary-container' : ''
                    }`}
                  >
                    <div className="flex flex-col gap-2">
                      {/* Line 1: Status badge and amount with gap-1 */}
                      <div className="flex flex-row items-center gap-1 flex-wrap">
                        {getStatusBadge(trip.status)}
                        <span className="label-small text-muted-foreground">
                          {formatAmount(trip.amount)} kr
                        </span>
                      </div>

                      {/* Line 2: Trip details */}
                      <div className="flex flex-col gap-0.5">
                        <span className="body-medium text-foreground">
                          {trip.tripNumber} • {getForetakForTrip(trip)}
                        </span>
                        {trip.startDate && trip.endDate && (
                          <span className="label-small text-muted-foreground">
                            {isDayTrip ? (
                              formatNorwegianDate(new Date(trip.startDate))
                            ) : (
                              `${formatNorwegianDate(new Date(trip.startDate))} - ${formatNorwegianDate(new Date(trip.endDate))}`
                            )}
                          </span>
                        )}
                        <span className="body-medium text-foreground">
                          {trip.description || '—'}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Empty state */}
            {displayedTrips.length === 0 && (
              <div className="flex items-center justify-center h-64">
                <p className="body-large text-muted-foreground">Ingen reiser å vise</p>
              </div>
            )}
          </div>
        </div>

        {/* DESKTOP: Detail Panel - Shows selected trip with resizable width */}
        {selectedTripId && (
          <div 
            className="max-[1200px]:hidden h-full bg-background overflow-hidden flex flex-row relative"
            style={{ width: `${detailPanelWidth}px` }}
          >
            {/* Resize Handle - Left Edge */}
            <div
              onMouseDown={(e) => {
                e.preventDefault();
                setIsResizingDetail(true);
              }}
              className={`absolute left-0 top-0 bottom-0 w-1 cursor-col-resize hover:bg-primary transition-colors z-10 ${
                isResizingDetail ? 'bg-primary' : 'bg-transparent'
              }`}
              style={{
                touchAction: 'none',
              }}
            >
              {/* Wider invisible hit area for easier grabbing */}
              <div className="absolute -left-1 -right-1 top-0 bottom-0" />
            </div>

            {/* Detail Panel Content */}
            <div className="flex-1 flex flex-col border-l border-[var(--border)]">
              <TripDetailPanel 
                trip={(isCreatingNewTrip && newTripData?.id === selectedTripId) ? newTripData : allTrips.find(t => t.id === selectedTripId)!} 
                onUpdate={handleUpdateTripData}
                onSave={handleSaveTrip}
                onDelete={handleDeleteTrip}
                isSaved={isNewTripSaved}
                onClose={() => setSelectedTripId(null)}
              />
            </div>
          </div>
        )}
      </div>

      {/* Floating Action Button (FAB) - Mobile/Tablet only */}
      <button
        onClick={() => setIsFilterSheetOpen(true)}
        className="min-[1200px]:hidden fixed bottom-6 right-6 w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-lg hover:bg-primary/90 transition-all flex items-center justify-center z-50"
        aria-label="Filtrer"
      >
        <SlidersHorizontal className="w-6 h-6" />
      </button>

      {/* BottomSheet for filters - Mobile/Tablet only */}
      <BottomSheet
        isOpen={isFilterSheetOpen}
        onClose={() => setIsFilterSheetOpen(false)}
        title="Filtrer listen"
      >
        <div className="flex flex-col h-full">
          <div className="flex-1 overflow-y-auto">
            {renderFilterPanel()}
          </div>

          {/* Button to see results */}
          <div className="p-6 border-t border-[var(--border)] bg-background">
            <Button
              onClick={() => setIsFilterSheetOpen(false)}
              className="w-full"
            >
              Se resultater ({displayedTrips.length})
            </Button>
          </div>
        </div>
      </BottomSheet>

      {/* Detail Bottom Sheet - Mobile/Tablet only */}
      <BottomSheet
        isOpen={isDetailBottomSheetOpen}
        onClose={() => setIsDetailBottomSheetOpen(false)}
        title="Reisedetaljer"
        maxHeight={90}
      >
        <div className="flex flex-col h-full">
          <div className="flex-1 overflow-y-auto">
            {selectedTripId && (
              <TripDetailPanel 
                trip={(isCreatingNewTrip && newTripData?.id === selectedTripId) ? newTripData : allTrips.find(t => t.id === selectedTripId)!}
                onUpdate={handleUpdateTripData}
                onSave={handleSaveTrip}
                onDelete={handleDeleteTrip}
                isSaved={isNewTripSaved}
              />
            )}
          </div>
        </div>
      </BottomSheet>
    </div>
  );
}