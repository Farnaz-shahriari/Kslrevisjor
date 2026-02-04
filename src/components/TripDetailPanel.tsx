import { useState, useMemo, useEffect } from 'react';
import { RadioButton } from './ui/radio-button';
import { AlertTriangle, Info, Trash2 } from 'lucide-react';
import { TextInputWithIcon } from './ui/text-input-with-icon';
import { NumberInputWithIcon } from './ui/number-input-with-icon';
import { TimePickerWithIcon } from './ui/time-picker-with-icon';
import { DateTimePicker } from './ui/date-time-picker';
import { Button } from './ui/button';

type TripType = 'dagreise' | 'reise-med-overnatting' | null;

interface Trip {
  id: string;
  tripNumber: string;
  startDate: string;
  endDate: string;
  description: string;
  foretak: string;
  amount: number;
  status: 'kladd' | 'klar-til-fakturering' | 'fakturert' | 'godkjent';
}

interface TripDetailPanelProps {
  trip: Trip;
  onUpdate?: (updatedTrip: Partial<Trip>) => void;
  onSave?: () => void; // Called when trip is saved (type + date selected)
  onDelete?: () => void; // Called when user wants to delete the trip
  isSaved?: boolean; // Whether the trip has been saved
}

// Mock revision database - past month revisions
interface Revision {
  id: string;
  date: Date;
  foretak: string;
  ordninger: string;
  reportLocked: boolean;
}

// Mock trip data generator - generates realistic trip data based on trip ID
export const generateTripData = (tripId: string) => {
  const tripDataMap: Record<string, {
    description: string;
    route: string;
    ownCarKm: string;
    rentalCarKr: string;
    travelTimeHours: number;
    travelTimeMinutes: number;
    tollsKr: string;
    ticketsKr: string;
    startTimeHours: number;
    startTimeMinutes: number;
    endTimeHours: number;
    endTimeMinutes: number;
    // Overnatting fields
    accommodationNights: string;
    accommodationKr: string;
    mealsKr: string;
  }> = {
    '1': {
      description: 'Revisjon hos Solheim Gård - KSL kontroll og oppfølging av tidligere avvik',
      route: 'Oslo - Lillehammer via E6 - Revisjon på Solheim Gård - Retur Oslo',
      ownCarKm: '245',
      rentalCarKr: '',
      travelTimeHours: 0,
      travelTimeMinutes: 45,
      tollsKr: '120',
      ticketsKr: '65',
      startTimeHours: 8,
      startTimeMinutes: 0,
      endTimeHours: 16,
      endTimeMinutes: 30,
      accommodationNights: '',
      accommodationKr: '',
      mealsKr: ''
    },
    '2': {
      description: 'Oppfølgingsrevisjon - kontroll av flere gårder i Telemark regionen',
      route: 'Oslo - Skien - Notodden - Retur Oslo via E134',
      ownCarKm: '320',
      rentalCarKr: '',
      travelTimeHours: 1,
      travelTimeMinutes: 15,
      tollsKr: '85',
      ticketsKr: '40',
      startTimeHours: 7,
      startTimeMinutes: 30,
      endTimeHours: 18,
      endTimeMinutes: 0,
      accommodationNights: '',
      accommodationKr: '',
      mealsKr: ''
    },
    '3': {
      description: 'Reise til Fjellgård Økomat - flere dagers KSL og Lokalmat revisjon med overnatting',
      route: 'Oslo - Fjellregionen via E6 - Opphold på Fjellgård - Retur Oslo',
      ownCarKm: '',
      rentalCarKr: '3200',
      travelTimeHours: 2,
      travelTimeMinutes: 0,
      tollsKr: '280',
      ticketsKr: '950',
      startTimeHours: 7,
      startTimeMinutes: 0,
      endTimeHours: 19,
      endTimeMinutes: 0,
      accommodationNights: '4',
      accommodationKr: '4800',
      mealsKr: '3200'
    },
    '4': {
      description: 'Reise til Vestlandet - flere revisjoner over to dager, KSL og Lokalmat kontroller',
      route: 'Oslo - Bergen via E16 - Voss - Retur Oslo',
      ownCarKm: '',
      rentalCarKr: '2850',
      travelTimeHours: 2,
      travelTimeMinutes: 30,
      tollsKr: '340',
      ticketsKr: '1250',
      startTimeHours: 6,
      startTimeMinutes: 0,
      endTimeHours: 20,
      endTimeMinutes: 30,
      accommodationNights: '1',
      accommodationKr: '1200',
      mealsKr: '850'
    },
    '5': {
      description: 'Nordlandsreise - omfattende KSL kontroller og sertifisering over flere dager',
      route: 'Oslo - Trondheim - Bodø - Retur Oslo (fly)',
      ownCarKm: '',
      rentalCarKr: '4200',
      travelTimeHours: 3,
      travelTimeMinutes: 45,
      tollsKr: '450',
      ticketsKr: '2850',
      startTimeHours: 5,
      startTimeMinutes: 30,
      endTimeHours: 21,
      endTimeMinutes: 0,
      accommodationNights: '3',
      accommodationKr: '3600',
      mealsKr: '2400'
    },
    '6': {
      description: 'Spesialitet revisjon - kontroll av tradisjonelle produkter på Sørlandet',
      route: 'Oslo - Kristiansand via E18 - Arendal - Retur Oslo',
      ownCarKm: '410',
      rentalCarKr: '',
      travelTimeHours: 1,
      travelTimeMinutes: 0,
      tollsKr: '150',
      ticketsKr: '85',
      startTimeHours: 7,
      startTimeMinutes: 0,
      endTimeHours: 19,
      endTimeMinutes: 30,
      accommodationNights: '',
      accommodationKr: '',
      mealsKr: ''
    },
    '7': {
      description: 'Dagrevisjon Akershus - rask kontroll av nytt foretak',
      route: 'Oslo - Jessheim - Gardermoen - Retur Oslo',
      ownCarKm: '120',
      rentalCarKr: '',
      travelTimeHours: 0,
      travelTimeMinutes: 30,
      tollsKr: '45',
      ticketsKr: '30',
      startTimeHours: 9,
      startTimeMinutes: 0,
      endTimeHours: 15,
      endTimeMinutes: 30,
      accommodationNights: '',
      accommodationKr: '',
      mealsKr: ''
    },
    '8': {
      description: 'Lokalmat kontroll - dokumentasjonskontroll og feltrevisjon i Buskerud',
      route: 'Oslo - Kongsberg via E134 - Drammen - Retur Oslo',
      ownCarKm: '195',
      rentalCarKr: '',
      travelTimeHours: 0,
      travelTimeMinutes: 45,
      tollsKr: '75',
      ticketsKr: '35',
      startTimeHours: 8,
      startTimeMinutes: 30,
      endTimeHours: 16,
      endTimeMinutes: 0,
      accommodationNights: '',
      accommodationKr: '',
      mealsKr: ''
    },
    '9': {
      description: 'Omfattende revisjonstur - Innlandet med overnatting, KSL årskontroller',
      route: 'Oslo - Lillehammer - Otta - Dombås - Retur Oslo via E6',
      ownCarKm: '',
      rentalCarKr: '1950',
      travelTimeHours: 1,
      travelTimeMinutes: 45,
      tollsKr: '210',
      ticketsKr: '450',
      startTimeHours: 6,
      startTimeMinutes: 30,
      endTimeHours: 19,
      endTimeMinutes: 0,
      accommodationNights: '2',
      accommodationKr: '2400',
      mealsKr: '1600'
    },
    '10': {
      description: 'KSL årskontroll - oppfølging av gårder i Hedmark',
      route: 'Oslo - Elverum via Rv3 - Hamar - Retur Oslo via E6',
      ownCarKm: '265',
      rentalCarKr: '',
      travelTimeHours: 0,
      travelTimeMinutes: 45,
      tollsKr: '90',
      ticketsKr: '55',
      startTimeHours: 7,
      startTimeMinutes: 45,
      endTimeHours: 17,
      endTimeMinutes: 30,
      accommodationNights: '',
      accommodationKr: '',
      mealsKr: ''
    }
  };

  return tripDataMap[tripId] || {
    description: 'Revisjon hos produsentvirksomhet - standard kontroll og dokumentasjon',
    route: 'Avreise fra kontor - lokasjon - retur til kontor',
    ownCarKm: '150',
    rentalCarKr: '',
    travelTimeHours: 0,
    travelTimeMinutes: 30,
    tollsKr: '60',
    ticketsKr: '25',
    startTimeHours: 8,
    startTimeMinutes: 0,
    endTimeHours: 16,
    endTimeMinutes: 30,
    accommodationNights: '',
    accommodationKr: '',
    mealsKr: ''
  };
};

export const MOCK_REVISIONS: Revision[] = [
  // January 5, 2026 - 1 revision
  {
    id: 'rev-001',
    date: new Date(2026, 0, 5),
    foretak: 'Haugseter Gård',
    ordninger: 'KSL, Lokalmat',
    reportLocked: true
  },
  // January 8, 2026 - 2 revisions
  {
    id: 'rev-002',
    date: new Date(2026, 0, 8),
    foretak: 'Nordby Gardsbruk',
    ordninger: 'KSL',
    reportLocked: true
  },
  {
    id: 'rev-003',
    date: new Date(2026, 0, 8),
    foretak: 'Solberg Gård',
    ordninger: 'Spesialitet',
    reportLocked: false
  },
  // January 12, 2026 - 1 revision
  {
    id: 'rev-004',
    date: new Date(2026, 0, 12),
    foretak: 'Bakke Landbruk AS',
    ordninger: 'KSL, Nyt Norge',
    reportLocked: true
  },
  // January 15, 2026 - 3 revisions
  {
    id: 'rev-005',
    date: new Date(2026, 0, 15),
    foretak: 'Lia Gård',
    ordninger: 'Lokalmat',
    reportLocked: false
  },
  {
    id: 'rev-006',
    date: new Date(2026, 0, 15),
    foretak: 'Grønli Gård',
    ordninger: 'KSL, Spesialitet',
    reportLocked: true
  },
  {
    id: 'rev-007',
    date: new Date(2026, 0, 15),
    foretak: 'Østby Gardsbruk',
    ordninger: 'Nyt Norge',
    reportLocked: true
  },
  // January 18, 2026 - 2 revisions
  {
    id: 'rev-008',
    date: new Date(2026, 0, 18),
    foretak: 'Fjellheim Gård',
    ordninger: 'KSL',
    reportLocked: false
  },
  {
    id: 'rev-009',
    date: new Date(2026, 0, 18),
    foretak: 'Ås Landbruk',
    ordninger: 'Lokalmat, Spesialitet',
    reportLocked: true
  },
  // January 22, 2026 - 1 revision
  {
    id: 'rev-010',
    date: new Date(2026, 0, 22),
    foretak: 'Vestre Gård',
    ordninger: 'KSL, Lokalmat, Nyt Norge',
    reportLocked: true
  },
  // January 25, 2026 - 2 revisions
  {
    id: 'rev-011',
    date: new Date(2026, 0, 25),
    foretak: 'Søndre Landbruk AS',
    ordninger: 'Spesialitet',
    reportLocked: true
  },
  {
    id: 'rev-012',
    date: new Date(2026, 0, 25),
    foretak: 'Berget Gård',
    ordninger: 'KSL',
    reportLocked: true
  },
  // January 28, 2026 - 1 revision
  {
    id: 'rev-013',
    date: new Date(2026, 0, 28),
    foretak: 'Dalen Gardsbruk',
    ordninger: 'Lokalmat, Nyt Norge',
    reportLocked: true
  }
];

export function TripDetailPanel({ trip, onUpdate, onSave, onDelete, isSaved }: TripDetailPanelProps) {
  // Auto-detect trip type based on dates
  const autoDetectedTripType: TripType = useMemo(() => {
    if (!trip.startDate || !trip.endDate) return null;
    const start = new Date(trip.startDate);
    const end = new Date(trip.endDate);
    
    // Compare dates without time component
    const isSameDay = 
      start.getDate() === end.getDate() &&
      start.getMonth() === end.getMonth() &&
      start.getFullYear() === end.getFullYear();
    
    return isSameDay ? 'dagreise' : 'reise-med-overnatting';
  }, [trip.startDate, trip.endDate]);

  const [selectedTripType, setSelectedTripType] = useState<TripType>(autoDetectedTripType);
  
  // Shared form states for both trip types
  const [tripDate, setTripDate] = useState<Date | null>(
    trip.startDate ? new Date(trip.startDate) : null
  );
  const [tripDescription, setTripDescription] = useState('');
  const [tripRoute, setTripRoute] = useState('');
  const [ownCarKm, setOwnCarKm] = useState('');
  const [rentalCarKr, setRentalCarKr] = useState('');
  const [travelTimeHours, setTravelTimeHours] = useState(0);
  const [travelTimeMinutes, setTravelTimeMinutes] = useState(0);
  const [tollsKr, setTollsKr] = useState('');
  const [ticketsKr, setTicketsKr] = useState('');

  // Additional states for Reise med overnatting (date range)
  const [startDate, setStartDate] = useState<Date | null>(
    trip.startDate ? new Date(trip.startDate) : null
  );
  const [endDate, setEndDate] = useState<Date | null>(
    trip.endDate ? new Date(trip.endDate) : null
  );
  const [startTimeHours, setStartTimeHours] = useState(8);
  const [startTimeMinutes, setStartTimeMinutes] = useState(0);
  const [endTimeHours, setEndTimeHours] = useState(17);
  const [endTimeMinutes, setEndTimeMinutes] = useState(0);

  // Overnatting (accommodation) states - only for Reise med overnatting
  const [accommodationNights, setAccommodationNights] = useState('');
  const [accommodationKr, setAccommodationKr] = useState('');
  const [mealsKr, setMealsKr] = useState('');

  // Update trip type and dates when trip changes
  useEffect(() => {
    // Update trip type based on new trip dates
    setSelectedTripType(autoDetectedTripType);
    
    // Update dates
    setTripDate(trip.startDate ? new Date(trip.startDate) : null);
    setStartDate(trip.startDate ? new Date(trip.startDate) : null);
    setEndDate(trip.endDate ? new Date(trip.endDate) : null);
    
    // Only populate form fields with generated trip data if this is NOT a new trip
    const isNewTrip = trip.id.startsWith('new-');
    
    if (!isNewTrip) {
      // Existing trip - populate with generated data
      const tripData = generateTripData(trip.id);
      setTripDescription(tripData.description);
      setTripRoute(tripData.route);
      setOwnCarKm(tripData.ownCarKm);
      setRentalCarKr(tripData.rentalCarKr);
      setTravelTimeHours(tripData.travelTimeHours);
      setTravelTimeMinutes(tripData.travelTimeMinutes);
      setTollsKr(tripData.tollsKr);
      setTicketsKr(tripData.ticketsKr);
      setStartTimeHours(tripData.startTimeHours);
      setStartTimeMinutes(tripData.startTimeMinutes);
      setEndTimeHours(tripData.endTimeHours);
      setEndTimeMinutes(tripData.endTimeMinutes);
      setAccommodationNights(tripData.accommodationNights);
      setAccommodationKr(tripData.accommodationKr);
      setMealsKr(tripData.mealsKr);
    } else {
      // New trip - start with empty fields
      setTripDescription(trip.description || '');
      setTripRoute('');
      setOwnCarKm('');
      setRentalCarKr('');
      setTravelTimeHours(0);
      setTravelTimeMinutes(0);
      setTollsKr('');
      setTicketsKr('');
      setStartTimeHours(8);
      setStartTimeMinutes(0);
      setEndTimeHours(17);
      setEndTimeMinutes(0);
      setAccommodationNights('');
      setAccommodationKr('');
      setMealsKr('');
    }
  }, [trip.id, trip.startDate, trip.endDate, autoDetectedTripType]);

  // Helper functions to update parent state for new trips
  const handleDescriptionChange = (value: string) => {
    setTripDescription(value);
    if (onUpdate && trip.id.startsWith('new-')) {
      onUpdate({ description: value });
    }
  };

  const handleDateChange = (date: Date | null) => {
    setTripDate(date);
    if (onUpdate && trip.id.startsWith('new-') && selectedTripType === 'dagreise' && date) {
      const dateStr = date.toISOString().split('T')[0];
      onUpdate({ 
        startDate: dateStr,
        endDate: dateStr
      });
    }
  };

  const handleStartDateChange = (date: Date | null) => {
    setStartDate(date);
    if (onUpdate && trip.id.startsWith('new-') && selectedTripType === 'reise-med-overnatting' && date) {
      onUpdate({ startDate: date.toISOString().split('T')[0] });
    }
  };

  const handleEndDateChange = (date: Date | null) => {
    setEndDate(date);
    if (onUpdate && trip.id.startsWith('new-') && selectedTripType === 'reise-med-overnatting' && date) {
      onUpdate({ endDate: date.toISOString().split('T')[0] });
    }
  };

  // Detect when trip is "saved" (type selected + date(s) selected)
  useEffect(() => {
    if (!trip.id.startsWith('new-') || !onSave || isSaved) return;
    
    const hasDagreiseData = selectedTripType === 'dagreise' && tripDate;
    const hasOvernattingData = selectedTripType === 'reise-med-overnatting' && startDate && endDate;
    
    if (hasDagreiseData || hasOvernattingData) {
      onSave();
    }
  }, [selectedTripType, tripDate, startDate, endDate, trip.id, onSave, isSaved]);

  // Get all unique dates with revisions
  const revisionDates = useMemo(() => {
    return MOCK_REVISIONS.map(rev => rev.date);
  }, []);

  // Get revisions for selected date (single date for Dagreise)
  const revisionsForSelectedDate = useMemo(() => {
    if (!tripDate) return [];
    
    const revisions = MOCK_REVISIONS.filter(rev => {
      return rev.date.getDate() === tripDate.getDate() &&
             rev.date.getMonth() === tripDate.getMonth() &&
             rev.date.getFullYear() === tripDate.getFullYear();
    });

    // Split each revision into separate entries for each ordning
    const expandedRevisions: Array<Revision & { singleOrdning: string }> = [];
    revisions.forEach(revision => {
      const ordningerArray = revision.ordninger.split(', ');
      ordningerArray.forEach(ordning => {
        expandedRevisions.push({
          ...revision,
          singleOrdning: ordning.trim()
        });
      });
    });

    return expandedRevisions;
  }, [tripDate]);

  // Get revisions between date range (for Reise med overnatting)
  const revisionsInDateRange = useMemo(() => {
    if (!startDate || !endDate) return [];
    
    const revisions = MOCK_REVISIONS.filter(rev => {
      const revDate = new Date(rev.date);
      revDate.setHours(0, 0, 0, 0);
      const start = new Date(startDate);
      start.setHours(0, 0, 0, 0);
      const end = new Date(endDate);
      end.setHours(0, 0, 0, 0);
      
      return revDate >= start && revDate <= end;
    });

    // Split each revision into separate entries for each ordning
    const expandedRevisions: Array<Revision & { singleOrdning: string }> = [];
    revisions.forEach(revision => {
      const ordningerArray = revision.ordninger.split(', ');
      ordningerArray.forEach(ordning => {
        expandedRevisions.push({
          ...revision,
          singleOrdning: ordning.trim()
        });
      });
    });

    return expandedRevisions;
  }, [startDate, endDate]);

  // Check if there are any unlocked reports in selected date(s)
  const hasUnlockedReports = useMemo(() => {
    if (selectedTripType === 'dagreise') {
      if (!tripDate) return false;
      return revisionsForSelectedDate.some(rev => !rev.reportLocked);
    } else if (selectedTripType === 'reise-med-overnatting') {
      if (!startDate || !endDate) return false;
      return revisionsInDateRange.some(rev => !rev.reportLocked);
    }
    return false;
  }, [selectedTripType, tripDate, startDate, endDate, revisionsForSelectedDate, revisionsInDateRange]);

  // Count unlocked reports
  const unlockedReportCount = useMemo(() => {
    if (selectedTripType === 'dagreise') {
      if (!tripDate) return 0;
      return revisionsForSelectedDate.filter(rev => !rev.reportLocked).length;
    } else if (selectedTripType === 'reise-med-overnatting') {
      if (!startDate || !endDate) return 0;
      return revisionsInDateRange.filter(rev => !rev.reportLocked).length;
    }
    return 0;
  }, [selectedTripType, tripDate, startDate, endDate, revisionsForSelectedDate, revisionsInDateRange]);

  return (
    <div className="flex flex-col h-full overflow-y-auto bg-background">
      {/* Content */}
      <div className="flex flex-col gap-2 p-6">
        {/* ===== GENERAL INFO SECTION ===== */}
        <div className="flex flex-col gap-2">
          {/* Title */}
          <h2 className="title-large text-foreground">
            Reise {trip.tripNumber}
          </h2>
          
          {/* Status Chip - Only show "Ny reise" when creating (not yet saved) */}
          {trip.id.startsWith('new-') && !isSaved && (
            <div className="inline-flex items-center px-3 py-1.5 rounded-lg bg-[#dae2ff] self-start">
              <span className="label-medium text-[#174295]">
                Ny reise
              </span>
            </div>
          )}
          
          {/* Conditional: Warning when there are unlocked reports in selected date(s) */}
          {hasUnlockedReports && (
            <div className="flex gap-2 items-start p-4 bg-l-avvik-container border border-[var(--border)] rounded-[var(--radius-lg)]">
              <AlertTriangle className="w-5 h-5 text-on-l-avvik-container shrink-0 mt-0.5" />
              <div className="flex flex-col gap-1">
                <p className="body-medium text-on-l-avvik-container">
                  Du har {unlockedReportCount} ikke låst(e) revisjon(er) tilknyttet dato(er) for reise.
                </p>
                <p className="body-medium text-on-l-avvik-container">
                  Rapport må låses før du kan skrive ut faktura for denne reisen.
                </p>
              </div>
            </div>
          )}

          {/* Fakturer reisen Button - Only show for trips ready for invoicing */}
          {trip.status === 'klar-til-fakturering' && (
            <Button 
              onClick={() => {
                // Handle invoice trip action - change status to 'fakturert'
                console.log('Invoicing trip:', trip.id);
                if (onUpdate) {
                  onUpdate({ status: 'fakturert' });
                }
              }}
              className="self-start"
            >
              Fakturer reisen
            </Button>
          )}

          {/* Last ned faktura Button - For fakturert and godkjent trips */}
          {(trip.status === 'fakturert' || trip.status === 'godkjent') && (
            <Button 
              onClick={() => {
                // Handle download invoice action
                console.log('Downloading invoice for trip:', trip.id);
              }}
              className="self-start"
            >
              Last ned faktura (PDF)
            </Button>
          )}
          
          {/* Delete Button - Only show for new saved trips */}
          {trip.id.startsWith('new-') && isSaved && onDelete && (
            <Button 
              variant="secondary" 
              onClick={onDelete}
              className="self-start"
            >
              <Trash2 className="w-5 h-5" />
              Slett reise
            </Button>
          )}
        </div>

        {/* Divider */}
        <div className="h-px bg-[var(--border)]" />

        {/* Trip Type Selection */}
        <div className="flex flex-col gap-4">
          <p className="label-medium text-foreground">
            Velg type for å opprette reise:
          </p>

          {/* Radio Button Options */}
          <div className="flex flex-col gap-2">
            <div className="flex flex-col h-10 min-h-[40px] items-center justify-center rounded-[var(--radius)] transition-colors hover:bg-muted">
              <RadioButton
                checked={selectedTripType === 'dagreise'}
                onClick={() => setSelectedTripType('dagreise')}
                label="Dagreise"
                className="w-full px-4"
              />
            </div>

            <div className="flex flex-col h-10 min-h-[40px] items-center justify-center rounded-[var(--radius)] transition-colors hover:bg-muted">
              <RadioButton
                checked={selectedTripType === 'reise-med-overnatting'}
                onClick={() => setSelectedTripType('reise-med-overnatting')}
                label="Reise med overnatting"
                className="w-full px-4"
              />
            </div>
          </div>
        </div>

        {/* Conditional content for Dagreise */}
        {selectedTripType === 'dagreise' && (
          <>
            {/* ===== DATO SECTION ===== */}
            <div className="flex flex-col gap-4">
              {/* Divider with Label */}
              <div className="content-stretch flex flex-col gap-[4px] items-start justify-center px-0 relative w-full">
                <div className="h-0 relative shrink-0 w-full">
                  <div className="absolute inset-[-1px_0_0_0]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 288 1">
                      <line stroke="var(--border)" x2="288" y1="0.5" y2="0.5" />
                    </svg>
                  </div>
                </div>
                <p className="label-medium text-muted-foreground relative shrink-0 w-full whitespace-pre-wrap">Revisjoner</p>
              </div>

              {/* Date Picker */}
              <DateTimePicker
                label="Dato"
                dateValue={tripDate}
                timeHours={startTimeHours}
                timeMinutes={startTimeMinutes}
                onDateChange={handleDateChange}
                onTimeChange={(hours, minutes) => {
                  setStartTimeHours(hours);
                  setStartTimeMinutes(minutes);
                }}
                required={false}
                placeholder="Velg dato og tid"
                highlightedDates={revisionDates}
              />

              {/* Revisjoner på valgt dato - when revisions exist */}
              {tripDate && revisionsForSelectedDate.length > 0 && (
                <div className="flex flex-col gap-4 pb-4">
                  <h3 className="label-medium text-foreground">
                    Revisjoner på valgt dato
                  </h3>
                  
                  <div className="flex flex-col gap-2">
                    {revisionsForSelectedDate.map((revision) => {
                      // Helper function to get theme-specific colors for each ordning
                      const getOrdningColors = (ordning: string) => {
                        const normalizedOrdning = ordning.trim();
                        switch (normalizedOrdning) {
                          case 'KSL':
                            return { bg: '#4A671E', fg: '#FFFFFF' }; // KSL theme primary
                          case 'Lokalmat':
                            return { bg: '#A80000', fg: '#FFFFFF' }; // LokalMat theme primary
                          case 'Nyt Norge':
                            return { bg: '#00319E', fg: '#FFFFFF' }; // Nyt Norge theme primary
                          case 'Spesialitet':
                            return { bg: '#594414', fg: '#FFFFFF' }; // Spesialitet theme primary
                          default:
                            return { bg: 'var(--primary)', fg: 'var(--primary-foreground)' };
                        }
                      };
                      
                      return (
                        <div 
                          key={`${revision.id}-${revision.singleOrdning}`}
                          className="flex flex-col items-start p-2 rounded-[12px] border border-border hover:bg-muted transition-colors cursor-pointer"
                        >
                          {/* Top: Ordninger chips and Status chip */}
                          <div className="flex gap-2 items-center flex-wrap">
                            {/* Ordninger chips */}
                            <div 
                              className="flex h-8 items-center justify-center overflow-clip rounded-lg"
                              style={{ backgroundColor: getOrdningColors(revision.singleOrdning).bg }}
                            >
                              <div className="flex items-center justify-center px-3 py-1.5">
                                <span className="label-medium whitespace-nowrap" style={{ color: getOrdningColors(revision.singleOrdning).fg }}>
                                  {revision.singleOrdning}
                                </span>
                              </div>
                            </div>
                            
                            {/* Report status chip */}
                            {revision.reportLocked ? (
                              // Rapport låst - blue chip (no icon)
                              <div className="bg-[#dae2ff] flex items-center justify-center overflow-clip rounded-lg">
                                <div className="flex h-8 items-center justify-center px-3 py-1.5">
                                  <span className="label-medium text-[#174295] whitespace-nowrap">
                                    Rapport låst
                                  </span>
                                </div>
                              </div>
                            ) : (
                              // Rapport ikke låst - outlined chip (no icon)
                              <div className="h-8 relative rounded-lg">
                                <div className="flex h-full items-center justify-center overflow-clip rounded-lg">
                                  <div className="flex items-center justify-center px-3 py-1.5">
                                    <span className="label-medium text-foreground whitespace-nowrap">
                                      Rapport ikke låst
                                    </span>
                                  </div>
                                </div>
                                <div className="absolute border border-border inset-0 pointer-events-none rounded-lg" />
                              </div>
                            )}
                          </div>
                          
                          {/* Bottom: Date and Company name */}
                          <div className="flex flex-col items-start justify-center w-full px-4 h-14 min-h-14">
                            <span className="label-small text-muted-foreground">
                              {revision.date.getDate()}. {['januar', 'februar', 'mars', 'april', 'mai', 'juni', 'juli', 'august', 'september', 'oktober', 'november', 'desember'][revision.date.getMonth()]} {revision.date.getFullYear()}
                            </span>
                            <span className="body-large text-foreground">
                              {revision.foretak}
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* No revisions message - when date is selected but no revisions found */}
              {tripDate && revisionsForSelectedDate.length === 0 && (
                <div className="flex gap-3 items-start p-4 rounded-lg bg-muted">
                  <Info className="w-5 h-5 text-muted-foreground shrink-0 mt-0.5" />
                  <p className="body-medium text-muted-foreground">
                    Ingen revisjoner på valgt dato
                  </p>
                </div>
              )}
            </div>

            {/* ===== OM REISE SECTION ===== */}
            <div className="flex flex-col gap-4">
              {/* Divider with Label */}
              <div className="content-stretch flex flex-col gap-[4px] items-start justify-center px-0 relative w-full">
                <div className="h-0 relative shrink-0 w-full">
                  <div className="absolute inset-[-1px_0_0_0]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 288 1">
                      <line stroke="var(--border)" x2="288" y1="0.5" y2="0.5" />
                    </svg>
                  </div>
                </div>
                <p className="label-medium text-muted-foreground relative shrink-0 w-full whitespace-pre-wrap">Om reise</p>
              </div>

              {/* Reisebeskrivelse */}
              <TextInputWithIcon
                label="Reisebeskrivelse"
                value={tripDescription}
                onChange={handleDescriptionChange}
                required={false}
                placeholder="Skriv inn reisebeskrivelse"
                multiline={true}
                helpText=""
              />

              {/* Reiserute */}
              <TextInputWithIcon
                label="Reiserute"
                value={tripRoute}
                onChange={setTripRoute}
                required={false}
                placeholder="Skriv inn reiserute"
                multiline={true}
                helpText=""
              />
            </div>

            {/* ===== KJØRING SECTION ===== */}
            <div className="flex flex-col gap-4">
              {/* Divider with Label */}
              <div className="content-stretch flex flex-col gap-[4px] items-start justify-center px-0 relative w-full">
                <div className="h-0 relative shrink-0 w-full">
                  <div className="absolute inset-[-1px_0_0_0]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 288 1">
                      <line stroke="var(--border)" x2="288" y1="0.5" y2="0.5" />
                    </svg>
                  </div>
                </div>
                <p className="label-medium text-muted-foreground relative shrink-0 w-full whitespace-pre-wrap">Kjøring</p>
              </div>

              {/* Egen bil */}
              <NumberInputWithIcon
                label="Egen bil"
                value={ownCarKm}
                onChange={setOwnCarKm}
                required={false}
                placeholder="0"
                suffix="km"
                helpText=""
              />

              {/* Leiebil */}
              <NumberInputWithIcon
                label="Leiebil"
                value={rentalCarKr}
                onChange={setRentalCarKr}
                required={false}
                placeholder="0"
                suffix="kr"
                helpText=""
              />

              {/* Reisetid, ikke egen bil */}
              <TimePickerWithIcon
                label="Reisetid, ikke egen bil"
                helpText="All reisetid som ikke gir km godtgjørelse"
                hours={travelTimeHours}
                minutes={travelTimeMinutes}
                onChange={(hours, minutes) => {
                  setTravelTimeHours(hours);
                  setTravelTimeMinutes(minutes);
                }}
                required={false}
              />

              {/* Bompenger */}
              <NumberInputWithIcon
                label="Bompenger"
                value={tollsKr}
                onChange={setTollsKr}
                required={false}
                placeholder="0"
                suffix="kr"
                helpText=""
              />

              {/* Billetter */}
              <NumberInputWithIcon
                label="Billetter"
                value={ticketsKr}
                onChange={setTicketsKr}
                required={false}
                placeholder="0"
                suffix="kr"
                helpText="Ferge, fly, tog, parkering m.m."
              />
            </div>
          </>
        )}

        {/* Conditional content for Reise med overnatting */}
        {selectedTripType === 'reise-med-overnatting' && (
          <>
            {/* ===== DATO SECTION ===== */}
            <div className="flex flex-col gap-4">
              {/* Divider with Label */}
              <div className="content-stretch flex flex-col gap-[4px] items-start justify-center px-0 relative w-full">
                <div className="h-0 relative shrink-0 w-full">
                  <div className="absolute inset-[-1px_0_0_0]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 288 1">
                      <line stroke="var(--border)" x2="288" y1="0.5" y2="0.5" />
                    </svg>
                  </div>
                </div>
                <p className="label-medium text-muted-foreground relative shrink-0 w-full whitespace-pre-wrap">Revisjoner</p>
              </div>

              {/* Startdato */}
              <DateTimePicker
                label="Startdato"
                dateValue={startDate}
                timeHours={startTimeHours}
                timeMinutes={startTimeMinutes}
                onDateChange={handleStartDateChange}
                onTimeChange={(hours, minutes) => {
                  setStartTimeHours(hours);
                  setStartTimeMinutes(minutes);
                }}
                required={false}
                placeholder="Velg startdato"
                highlightedDates={revisionDates}
              />

              {/* Sluttdato */}
              <DateTimePicker
                label="Sluttdato"
                dateValue={endDate}
                timeHours={endTimeHours}
                timeMinutes={endTimeMinutes}
                onDateChange={handleEndDateChange}
                onTimeChange={(hours, minutes) => {
                  setEndTimeHours(hours);
                  setEndTimeMinutes(minutes);
                }}
                required={false}
                placeholder="Velg sluttdato"
                highlightedDates={revisionDates}
              />

              {/* Revisjoner mellom valgte datoer - when revisions exist */}
              {startDate && endDate && revisionsInDateRange.length > 0 && (
                <div className="flex flex-col gap-4 pb-4">
                  <h3 className="label-medium text-foreground">
                    Revisjoner mellom valgte datoer
                  </h3>
                  
                  <div className="flex flex-col gap-2">
                    {revisionsInDateRange.map((revision) => {
                      // Helper function to get theme-specific colors for each ordning
                      const getOrdningColors = (ordning: string) => {
                        const normalizedOrdning = ordning.trim();
                        switch (normalizedOrdning) {
                          case 'KSL':
                            return { bg: '#4A671E', fg: '#FFFFFF' }; // KSL theme primary
                          case 'Lokalmat':
                            return { bg: '#A80000', fg: '#FFFFFF' }; // LokalMat theme primary
                          case 'Nyt Norge':
                            return { bg: '#00319E', fg: '#FFFFFF' }; // Nyt Norge theme primary
                          case 'Spesialitet':
                            return { bg: '#594414', fg: '#FFFFFF' }; // Spesialitet theme primary
                          default:
                            return { bg: 'var(--primary)', fg: 'var(--primary-foreground)' };
                        }
                      };
                      
                      return (
                        <div 
                          key={`${revision.id}-${revision.singleOrdning}`}
                          className="flex flex-col items-start p-2 rounded-[12px] border border-border hover:bg-muted transition-colors cursor-pointer"
                        >
                          {/* Top: Ordninger chips and Status chip */}
                          <div className="flex gap-2 items-center flex-wrap">
                            {/* Ordninger chips */}
                            <div 
                              className="flex h-8 items-center justify-center overflow-clip rounded-lg"
                              style={{ backgroundColor: getOrdningColors(revision.singleOrdning).bg }}
                            >
                              <div className="flex items-center justify-center px-3 py-1.5">
                                <span className="label-medium whitespace-nowrap" style={{ color: getOrdningColors(revision.singleOrdning).fg }}>
                                  {revision.singleOrdning}
                                </span>
                              </div>
                            </div>
                            
                            {/* Report status chip */}
                            {revision.reportLocked ? (
                              // Rapport låst - blue chip (no icon)
                              <div className="bg-[#dae2ff] flex items-center justify-center overflow-clip rounded-lg">
                                <div className="flex h-8 items-center justify-center px-3 py-1.5">
                                  <span className="label-medium text-[#174295] whitespace-nowrap">
                                    Rapport låst
                                  </span>
                                </div>
                              </div>
                            ) : (
                              // Rapport ikke låst - outlined chip (no icon)
                              <div className="h-8 relative rounded-lg">
                                <div className="flex h-full items-center justify-center overflow-clip rounded-lg">
                                  <div className="flex items-center justify-center px-3 py-1.5">
                                    <span className="label-medium text-foreground whitespace-nowrap">
                                      Rapport ikke låst
                                    </span>
                                  </div>
                                </div>
                                <div className="absolute border border-border inset-0 pointer-events-none rounded-lg" />
                              </div>
                            )}
                          </div>
                          
                          {/* Bottom: Date and Company name */}
                          <div className="flex flex-col items-start justify-center w-full px-4 h-14 min-h-14">
                            <span className="label-small text-muted-foreground">
                              {revision.date.getDate()}. {['januar', 'februar', 'mars', 'april', 'mai', 'juni', 'juli', 'august', 'september', 'oktober', 'november', 'desember'][revision.date.getMonth()]} {revision.date.getFullYear()}
                            </span>
                            <span className="body-large text-foreground">
                              {revision.foretak}
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* No revisions message - when dates are selected but no revisions found */}
              {startDate && endDate && revisionsInDateRange.length === 0 && (
                <div className="flex gap-3 items-start p-4 rounded-lg bg-muted">
                  <Info className="w-5 h-5 text-muted-foreground shrink-0 mt-0.5" />
                  <p className="body-medium text-muted-foreground">
                    Ingen revisjoner mellom valgte datoer
                  </p>
                </div>
              )}
            </div>

            {/* ===== OM REISE SECTION ===== */}
            <div className="flex flex-col gap-4">
              {/* Divider with Label */}
              <div className="content-stretch flex flex-col gap-[4px] items-start justify-center px-0 relative w-full">
                <div className="h-0 relative shrink-0 w-full">
                  <div className="absolute inset-[-1px_0_0_0]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 288 1">
                      <line stroke="var(--border)" x2="288" y1="0.5" y2="0.5" />
                    </svg>
                  </div>
                </div>
                <p className="label-medium text-muted-foreground relative shrink-0 w-full whitespace-pre-wrap">Om reise</p>
              </div>

              {/* Reisebeskrivelse */}
              <TextInputWithIcon
                label="Reisebeskrivelse"
                value={tripDescription}
                onChange={handleDescriptionChange}
                required={false}
                placeholder="Skriv inn reisebeskrivelse"
                multiline={true}
                helpText=""
              />

              {/* Reiserute */}
              <TextInputWithIcon
                label="Reiserute"
                value={tripRoute}
                onChange={setTripRoute}
                required={false}
                placeholder="Skriv inn reiserute"
                multiline={true}
                helpText=""
              />
            </div>

            {/* ===== KJØRING SECTION ===== */}
            <div className="flex flex-col gap-4">
              {/* Divider with Label */}
              <div className="content-stretch flex flex-col gap-[4px] items-start justify-center px-0 relative w-full">
                <div className="h-0 relative shrink-0 w-full">
                  <div className="absolute inset-[-1px_0_0_0]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 288 1">
                      <line stroke="var(--border)" x2="288" y1="0.5" y2="0.5" />
                    </svg>
                  </div>
                </div>
                <p className="label-medium text-muted-foreground relative shrink-0 w-full whitespace-pre-wrap">Kjøring</p>
              </div>

              {/* Egen bil */}
              <NumberInputWithIcon
                label="Egen bil"
                value={ownCarKm}
                onChange={setOwnCarKm}
                required={false}
                placeholder="0"
                suffix="km"
                helpText=""
              />

              {/* Leiebil */}
              <NumberInputWithIcon
                label="Leiebil"
                value={rentalCarKr}
                onChange={setRentalCarKr}
                required={false}
                placeholder="0"
                suffix="kr"
                helpText=""
              />

              {/* Reisetid, ikke egen bil */}
              <TimePickerWithIcon
                label="Reisetid, ikke egen bil"
                helpText="All reisetid som ikke gir km godtgjørelse"
                hours={travelTimeHours}
                minutes={travelTimeMinutes}
                onChange={(hours, minutes) => {
                  setTravelTimeHours(hours);
                  setTravelTimeMinutes(minutes);
                }}
                required={false}
              />

              {/* Bompenger */}
              <NumberInputWithIcon
                label="Bompenger"
                value={tollsKr}
                onChange={setTollsKr}
                required={false}
                placeholder="0"
                suffix="kr"
                helpText=""
              />

              {/* Billetter */}
              <NumberInputWithIcon
                label="Billetter"
                value={ticketsKr}
                onChange={setTicketsKr}
                required={false}
                placeholder="0"
                suffix="kr"
                helpText="Ferge, fly, tog, parkering m.m."
              />
            </div>

            {/* ===== OVERNATTING SECTION - Only for Reise med overnatting ===== */}
            <div className="flex flex-col gap-4">
              {/* Divider with Label */}
              <div className="content-stretch flex flex-col gap-[4px] items-start justify-center px-0 relative w-full">
                <div className="h-0 relative shrink-0 w-full">
                  <div className="absolute inset-[-1px_0_0_0]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 288 1">
                      <line stroke="var(--border)" x2="288" y1="0.5" y2="0.5" />
                    </svg>
                  </div>
                </div>
                <p className="label-medium text-muted-foreground relative shrink-0 w-full whitespace-pre-wrap">Overnatting</p>
              </div>

              {/* Antall netter */}
              <NumberInputWithIcon
                label="Antall netter"
                value={accommodationNights}
                onChange={setAccommodationNights}
                required={false}
                placeholder="0"
                suffix="netter"
                helpText=""
              />

              {/* Overnatting */}
              <NumberInputWithIcon
                label="Overnatting"
                value={accommodationKr}
                onChange={setAccommodationKr}
                required={false}
                placeholder="0"
                suffix="kr"
                helpText=""
              />

              {/* Mat */}
              <NumberInputWithIcon
                label="Mat"
                value={mealsKr}
                onChange={setMealsKr}
                required={false}
                placeholder="0"
                suffix="kr"
                helpText=""
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
}