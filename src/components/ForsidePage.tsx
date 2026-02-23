import { ChevronRight, ChevronLeft, MapPin, Clock, CheckCircle2, AlertCircle, ExternalLink, Calendar, Paperclip, Download, Check } from 'lucide-react';
import { Button } from './ui/button';
import { formatNorwegianDate } from '../utils/dateFormat';
import { RevisjonCard } from './RevisjonCard';
import { allDeviations } from './AvvikoversiktPage';
import { mockAksepterteRevisjoner } from './AksepterteRevisjonerPage';
import { AvvikActionCard } from './AvvikActionCard';
import { useState } from 'react';
import svgPathsSorting from "../imports/svg-59lykn648d";

// Import data counts from other pages
// These would normally come from a shared state management solution or backend API
export const TILDELTE_REVISJONER_COUNT = 10; // From TildelteRevisjonerPage - total items
export const VENTER_PA_PLANLEGGING_COUNT = 7; // From AksepterteRevisjonerPage - cards without planned date
export const KLAR_FOR_RAPPORT_COUNT = 3; // Placeholder - will be determined later

// Calculate KLAR_FOR_OPPFOLGING_COUNT
// In production this would come from the backend or shared state
// For now, we use a calculated value based on mock data (7 deviations require action)
export const KLAR_FOR_OPPFOLGING_COUNT = 7;

// ============================================================================
// Planned Revisjoner Types and Data
// ============================================================================

type RevisjonType = 'besok-planlagt' | 'godkjent-revisjon';

// Deviation types (from AvvikoversiktPage)
type SeverityType = 'kritisk' | 'avvik' | 'lite';
type StatusType = 'tidspunkt-foreslatt' | 'besok-planlagt' | 'venter-godkjenning' | 'onsker-fristforlengelse' | 'dokument-levert' | 'avventer-moteforslag' | 'avventer-dokumentasjon';
type ConfirmationMethod = 'dokumentasjon' | 'digitalt-besok' | 'fysisk-besok';

interface Deviation {
  id: string;
  severity: SeverityType;
  foretakName: string;
  checklist: string;
  deadline: Date;
  status: StatusType;
  requiresAction: boolean;
  confirmationMethod: ConfirmationMethod;
}

// Helper function to get severity sort order (kritisk = 0, avvik = 1, lite = 2)
function getSeveritySortOrder(severity: SeverityType): number {
  const order = { kritisk: 0, avvik: 1, lite: 2 };
  return order[severity];
}

// Helper function to get severity config (colors and labels)
function getSeverityConfig(severity: SeverityType): { label: string; text: string; bg: string } {
  switch (severity) {
    case 'kritisk':
      return {
        label: 'Stor avvik',
        text: '#B3261E',
        bg: 'var(--error-container)'
      };
    case 'avvik':
      return {
        label: 'Avvik',
        text: '#E67E00',
        bg: 'var(--avvik-container)'
      };
    case 'lite':
      return {
        label: 'Lite avvik',
        text: '#E6B800',
        bg: 'var(--l-avvik-container)'
      };
  }
}

// Helper function to get action text based on status
function getActionText(status: StatusType, confirmationMethod: ConfirmationMethod): string {
  switch (status) {
    case 'tidspunkt-foreslatt':
      return confirmationMethod === 'digitalt-besok' 
        ? 'Godkjenn tidspunkt for digitalt besøk' 
        : 'Godkjenn tidspunkt for fysisk besøk';
    case 'onsker-fristforlengelse':
      return 'Godkjenn eller avslå forespørsel om fristforlengelse';
    case 'dokument-levert':
      return 'Vurder dokumentasjon og lukk avviket';
    case 'venter-godkjenning':
      return 'Dokument venter på din godkjenning';
    case 'avventer-moteforslag':
      return 'Venter på møteforslag fra bonde';
    case 'avventer-dokumentasjon':
      return 'Venter på dokumentasjon fra bonde';
    default:
      return 'Handling kreves';
  }
}

export interface ProductionItem {
  name: string;
  count?: number;
}

interface RevisjonData {
  ordning: string;
  revisjonsfrist: string;
  produksjon: ProductionItem[] | string[]; // Support both formats
  kommune: string;
  address: string;
  isPriority: boolean;
}

interface PlannedRevisjon {
  id: string;
  type: RevisjonType;
  foretakName: string;
  contactPerson: string;
  visitDate: Date;
  visitTime: string;
  visitType: 'digitalt-besok' | 'fysisk-besok';
  address?: string;
  checklist: string;
  notes?: string;
  // For besok-planlagt type (from deviations)
  deviationId?: string;
  severity?: SeverityType;
  // Additional data for card
  revisjonData: RevisjonData;
}

// Random data generators
const farmNames = [
  'Bjørkli Økologiske', 'Nordlys Økologiske', 'Grønn Vallei Gård', 'Fjellheim Sauebruk',
  'Solsiden Frukt & Bær', 'Aurland Biogård', 'Eikestad Melkeproduksjon', 'Høgås Gårdsdrift',
  'Lunden Grønnsaker', 'Solberg Økologisk', 'Breivoll Beitebruk', 'Tindra Melkeproduksjon'
];

// Generate random date within next year
function getRandomDateWithinYear(): Date {
  const now = new Date();
  const oneYearFromNow = new Date(now.getFullYear() + 1, now.getMonth(), now.getDate());
  const randomTime = now.getTime() + Math.random() * (oneYearFromNow.getTime() - now.getTime());
  return new Date(randomTime);
}

// Generate random time slot
function getRandomTimeSlot(): string {
  const times = [
    '08:00 - 10:00', '09:00 - 11:30', '10:00 - 12:00', '10:30 - 13:00',
    '13:00 - 15:00', '13:30 - 16:00', '14:00 - 16:30', '15:00 - 17:00'
  ];
  return times[Math.floor(Math.random() * times.length)];
}

// Generate random revisjonsfrist (few days to one week after visit date)
function getRevisjonsfrist(visitDate: Date): string {
  const months = ['januar', 'februar', 'mars', 'april', 'mai', 'juni', 'juli', 'august', 'september', 'oktober', 'november', 'desember'];
  
  // Add 3-7 days to visit date
  const daysToAdd = 3 + Math.floor(Math.random() * 5); // 3 to 7 days
  const fristDate = new Date(visitDate);
  fristDate.setDate(fristDate.getDate() + daysToAdd);
  
  const day = fristDate.getDate();
  const month = months[fristDate.getMonth()];
  const year = fristDate.getFullYear();
  
  return `${day}. ${month} ${year}`;
}

// Get planned revisjoner - ONLY from AksepterteRevisjonerPage with hasPlannedDate: true
function getAllPlannedRevisjoner(): PlannedRevisjon[] {
  // Filter only revisjoner that have a planned date in the FUTURE
  const now = new Date();
  const plannedRevisjoner: PlannedRevisjon[] = mockAksepterteRevisjoner
    .filter(rev => 
      rev.revisjonData.hasPlannedDate === true && 
      rev.visitDate !== null && 
      rev.visitDate > now // Only future dates
    )
    .map(rev => ({
      id: rev.id,
      type: 'godkjent-revisjon' as RevisjonType,
      foretakName: rev.foretakName,
      contactPerson: 'Kontaktperson', // Mock contact
      visitDate: rev.visitDate!,
      visitTime: rev.visitTime!,
      visitType: 'fysisk-besok',
      address: rev.revisjonData.address,
      checklist: 'Årlig ordinær revisjon',
      notes: '',
      revisjonData: rev.revisjonData
    }));

  // Sort by date
  return plannedRevisjoner.sort((a, b) => 
    a.visitDate.getTime() - b.visitDate.getTime()
  );
}

// Helper to format date for grouping (e.g., "Torsdag 23. januar 2025")
function getDateGroupKey(date: Date): string {
  return formatNorwegianDate(date);
}

// Group revisjoner by date
function groupRevisjonerByDate(revisjoner: PlannedRevisjon[]): Map<string, PlannedRevisjon[]> {
  const grouped = new Map<string, PlannedRevisjon[]>();
  
  revisjoner.forEach(revisjon => {
    const dateKey = getDateGroupKey(revisjon.visitDate);
    if (!grouped.has(dateKey)) {
      grouped.set(dateKey, []);
    }
    grouped.get(dateKey)!.push(revisjon);
  });
  
  return grouped;
}

// ============================================================================
// Section 2 - Planned Revisjoner Component
// ============================================================================

interface Section2Props {
  onNavigateToTildelteRevisjoner?: () => void;
  onNavigateToVenterPaPlanlegging?: () => void;
  onRevisionClick?: (revisionId: string) => void;
  onNavigateToAvvikoversikt?: (deviationId?: string) => void;
}

function Section2PlanlagteRevisjoner({ onNavigateToTildelteRevisjoner, onNavigateToVenterPaPlanlegging, onRevisionClick, onNavigateToAvvikoversikt }: Section2Props) {
  const [viewMode, setViewMode] = useState<'list' | 'calendar'>('list');
  const allPlannedRevisjoner = getAllPlannedRevisjoner();
  
  // Set initial month to the first planned revisjon's month (July 2026)
  const firstRevisjonDate = allPlannedRevisjoner.length > 0 
    ? allPlannedRevisjoner[0].visitDate 
    : new Date(2026, 6, 1); // Fallback to July 2026
  
  const [currentMonth, setCurrentMonth] = useState(new Date(firstRevisjonDate.getFullYear(), firstRevisjonDate.getMonth(), 1));
  const groupedRevisjoner = groupRevisjonerByDate(allPlannedRevisjoner);

  // Month navigation
  const goToPreviousMonth = () => {
    setCurrentMonth(prev => new Date(prev.getFullYear(), prev.getMonth() - 1, 1));
  };

  const goToNextMonth = () => {
    setCurrentMonth(prev => new Date(prev.getFullYear(), prev.getMonth() + 1, 1));
  };

  // Get month name in Norwegian
  const monthNames = ['Januar', 'Februar', 'Mars', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Desember'];
  const currentMonthName = `${monthNames[currentMonth.getMonth()]} ${currentMonth.getFullYear()}`;

  // Generate calendar days
  const generateCalendarDays = () => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    
    // First day of the month
    const firstDay = new Date(year, month, 1);
    const firstDayOfWeek = firstDay.getDay(); // 0 = Sunday, 1 = Monday, ...
    
    // Adjust to make Monday = 0
    const adjustedFirstDay = firstDayOfWeek === 0 ? 6 : firstDayOfWeek - 1;
    
    // Last day of the month
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    
    // Previous month days to show
    const prevMonthLastDay = new Date(year, month, 0);
    const prevMonthDays = prevMonthLastDay.getDate();
    
    const days: Array<{ date: number; month: 'prev' | 'current' | 'next'; fullDate: Date }> = [];
    
    // Add previous month days
    for (let i = adjustedFirstDay - 1; i >= 0; i--) {
      days.push({
        date: prevMonthDays - i,
        month: 'prev',
        fullDate: new Date(year, month - 1, prevMonthDays - i)
      });
    }
    
    // Add current month days
    for (let i = 1; i <= daysInMonth; i++) {
      days.push({
        date: i,
        month: 'current',
        fullDate: new Date(year, month, i)
      });
    }
    
    // Add next month days to complete the grid (35 or 42 days total)
    const totalDays = days.length;
    const daysToAdd = totalDays <= 35 ? 35 - totalDays : 42 - totalDays;
    for (let i = 1; i <= daysToAdd; i++) {
      days.push({
        date: i,
        month: 'next',
        fullDate: new Date(year, month + 1, i)
      });
    }
    
    return days;
  };

  const calendarDays = generateCalendarDays();
  
  // Get revisjoner for a specific date
  const getRevisjonerForDate = (date: Date) => {
    return allPlannedRevisjoner.filter(rev => {
      return rev.visitDate.getDate() === date.getDate() &&
             rev.visitDate.getMonth() === date.getMonth() &&
             rev.visitDate.getFullYear() === date.getFullYear();
    });
  };

  return (
    <div className="bg-white h-full max-[1400px]:h-auto inline-flex self-start rounded-[12px] max-[1400px]:rounded-none mr-[40px] max-[1400px]:w-full max-[1400px]:mr-0" data-name="Upcoming audits">

      {/* Content container that hugs cards - scrollable on desktop */}
      <div className="flex flex-col items-start py-[16px] relative h-full max-[1400px]:h-auto w-full max-[1400px]:w-full">
        {/* Fixed Header - Title and View Toggle Buttons */}
        <div className="flex flex-col gap-[16px] shrink-0 px-10 max-[1400px]:px-0 w-full">
          {/* Title with badge - matches Avviksbehandling style */}
          <div className="flex items-center gap-2 max-[1400px]:px-6 max-[1400px]:pt-6">
            <div className="title-large text-foreground">
              <p>Planlagte revisjoner</p>
            </div>
            {/* Badge showing count */}
            <div className="bg-[var(--error)] rounded-full min-w-6 h-6 px-2 flex items-center justify-center">
              <span className="label-xsmall text-[var(--error-foreground)]">{allPlannedRevisjoner.length}</span>
            </div>
          </div>

          {/* View toggle buttons - Liste and Kalender */}
          <div className="flex gap-[2px] overflow-clip rounded-2xl max-[1400px]:mx-6 w-max">
          {/* Liste button */}
          <button
            onClick={() => setViewMode('list')}
            className={`flex items-center justify-center gap-2 px-6 py-4 min-w-[48px] transition-colors ${
              viewMode === 'list'
                ? 'bg-[#365bae] rounded-l-2xl'
                : 'bg-[#dae2ff] rounded-l'
            }`}
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24">
              <path 
                d="M4 10.5C3.17 10.5 2.5 11.17 2.5 12C2.5 12.83 3.17 13.5 4 13.5C4.83 13.5 5.5 12.83 5.5 12C5.5 11.17 4.83 10.5 4 10.5ZM4 4.5C3.17 4.5 2.5 5.17 2.5 6C2.5 6.83 3.17 7.5 4 7.5C4.83 7.5 5.5 6.83 5.5 6C5.5 5.17 4.83 4.5 4 4.5ZM4 16.5C3.17 16.5 2.5 17.18 2.5 18C2.5 18.82 3.18 19.5 4 19.5C4.82 19.5 5.5 18.82 5.5 18C5.5 17.18 4.83 16.5 4 16.5ZM7 19H21V17H7V19ZM7 13H21V11H7V13ZM7 5V7H21V5H7Z" 
                fill={viewMode === 'list' ? 'white' : '#174295'}
              />
            </svg>
            <span className={`label-medium ${viewMode === 'list' ? 'text-white' : 'text-[#174295]'}`}>
              Liste
            </span>
          </button>

          {/* Kalender button */}
          <button
            onClick={() => setViewMode('calendar')}
            className={`flex items-center justify-center gap-2 px-6 py-4 min-w-[48px] transition-colors ${
              viewMode === 'calendar'
                ? 'bg-[#365bae] rounded-r-2xl'
                : 'bg-[#dae2ff] rounded-r'
            }`}
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24">
              <path 
                d="M19 4H18V2H16V4H8V2H6V4H5C3.89 4 3.01 4.9 3.01 6L3 20C3 21.1 3.89 22 5 22H19C20.1 22 21 21.1 21 20V6C21 4.9 20.1 4 19 4ZM19 20H5V10H19V20ZM19 8H5V6H19V8ZM12 13H17V18H12V13Z" 
                fill={viewMode === 'calendar' ? 'white' : '#174295'}
              />
            </svg>
            <span className={`label-medium ${viewMode === 'calendar' ? 'text-white' : 'text-[#174295]'}`}>
              Kalender
            </span>
          </button>
        </div>
      </div>

        {/* Scrollable Content Area - List or Calendar View - only scrollable on desktop */}
        <div className="flex-1 w-full min-[1400px]:overflow-y-auto mt-4 px-10 max-[1400px]:px-6">
          {viewMode === 'list' ? (
            /* List View */
            <div className="flex flex-col gap-1 w-full max-[1400px]:pb-4">
              {Array.from(groupedRevisjoner.entries()).map(([dateKey, revisjoner]) => (
                <div key={dateKey} className="flex flex-col gap-1">
                  {/* Date heading - HIDDEN as per user request */}
                  {/* <div className="label-large text-foreground py-2">
                    {dateKey}
                  </div> */}
                  
                  {/* Revisjoner for this date */}
                  {revisjoner.map((revisjon) => (
                    <RevisjonCard
                      key={revisjon.id}
                      revisjon={{
                        id: revisjon.id,
                        foretakName: revisjon.foretakName,
                        visitDate: revisjon.visitDate,
                        visitTime: revisjon.visitTime,
                        revisjonData: revisjon.revisjonData
                      }}
                      onCardClick={() => onRevisionClick?.(revisjon.id)}
                    />
                  ))}
                </div>
              ))}

              {allPlannedRevisjoner.length === 0 && (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <Calendar className="w-12 h-12 text-muted-foreground mb-4" />
                  <p className="body-large text-muted-foreground">Ingen planlagte revisjoner</p>
                </div>
              )}
            </div>
          ) : (
            /* Calendar View */
            <div className="bg-[#e0e4d3] rounded-[16px] p-4">
              {/* Calendar Header */}
              <div className="flex items-center justify-between mb-6">
                <button
                  onClick={goToPreviousMonth}
                  className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/20 transition-colors"
                >
                  <ChevronLeft className="w-6 h-6 text-foreground" />
                </button>

                <div className="title-medium text-foreground">
                  {currentMonthName}
                </div>

                <button
                  onClick={goToNextMonth}
                  className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/20 transition-colors"
                >
                  <ChevronRight className="w-6 h-6 text-foreground" />
                </button>
              </div>

              {/* Calendar Grid */}
              <div className="grid grid-cols-7 gap-2">
                {/* Day names header */}
                {['Ma', 'Ti', 'On', 'To', 'Fr', 'Lø', 'Sø'].map((day) => (
                  <div key={day} className="label-small text-center text-muted-foreground py-2">
                    {day}
                  </div>
                ))}

                {/* Calendar days */}
                {calendarDays.map((day, index) => {
                  const revisjonerForDay = getRevisjonerForDate(day.fullDate);
                  const hasRevisjoner = revisjonerForDay.length > 0;
                  const isCurrentMonth = day.month === 'current';

                  return (
                    <div
                      key={index}
                      className={`min-h-[80px] p-2 rounded-lg ${
                        isCurrentMonth ? 'bg-white' : 'bg-white/40'
                      } ${hasRevisjoner ? 'ring-2 ring-primary' : ''}`}
                    >
                      <div className={`label-small mb-1 ${isCurrentMonth ? 'text-foreground' : 'text-muted-foreground'}`}>
                        {day.date}
                      </div>
                      
                      {hasRevisjoner && (
                        <div className="flex flex-col gap-1">
                          {revisjonerForDay.slice(0, 2).map((rev) => (
                            <div
                              key={rev.id}
                              className="text-[10px] bg-primary text-primary-foreground px-1 py-0.5 rounded truncate"
                            >
                              {rev.foretakName}
                            </div>
                          ))}
                          {revisjonerForDay.length > 2 && (
                            <div className="text-[10px] text-muted-foreground">
                              +{revisjonerForDay.length - 2} flere
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// Section 3 - To-Do List Component  
// ============================================================================

function Section3SidePanelToDoList({ onNavigateToAvvikoversikt }: { onNavigateToAvvikoversikt?: (deviationId?: string) => void }) {
  const [sortDropdownOpen, setSortDropdownOpen] = useState(false);
  const [sortBy, setSortBy] = useState<'tidsfrist' | 'innmeldt-dato'>('tidsfrist');

  const handleOpenAvvik = (deviationId: string) => {
    // Navigate to Avvikoversikt page with this deviation selected
    if (onNavigateToAvvikoversikt) {
      onNavigateToAvvikoversikt(deviationId);
    }
  };

  const handleSortChange = (newSort: 'tidsfrist' | 'innmeldt-dato') => {
    setSortBy(newSort);
    setSortDropdownOpen(false);
  };

  const getSortLabel = () => {
    switch (sortBy) {
      case 'tidsfrist':
        return 'Tidsfrist for lukking';
      case 'innmeldt-dato':
        return 'Innmeldt dato';
      default:
        return 'Tidsfrist for lukking';
    }
  };

  // Filter deviations that require action
  const filteredDeviations = allDeviations.filter(deviation => deviation.requiresAction);

  // Sort the deviations based on sortBy
  const sortedTodoItems = [...filteredDeviations].sort((a, b) => {
    if (sortBy === 'tidsfrist') {
      // Sort by deadline (closest first)
      return a.deadline.getTime() - b.deadline.getTime();
    } else if (sortBy === 'innmeldt-dato') {
      // Sort by reported date (most recent first)
      // For now, using deadline as a proxy - in production this would be a separate field
      return b.deadline.getTime() - a.deadline.getTime();
    }
    return 0;
  });

  console.log('ForsidePage - Total deviations:', allDeviations.length);
  console.log('ForsidePage - Filtered todo items:', sortedTodoItems.length);
  console.log('ForsidePage - Todo items:', sortedTodoItems.map(d => ({ id: d.id, foretak: d.foretakName, status: d.status })));

  return (
    <div className="bg-background flex h-full max-[1400px]:h-auto shrink-0 w-[520px] max-[1400px]:w-full" data-name="Section 3 - Side panel to-do list">
      {/* Content container that hugs cards - scrollable on desktop */}
      <div className="flex flex-col py-[16px] relative h-full max-[1400px]:h-auto w-full max-[1400px]:w-full min-[1400px]:max-w-max">
        {/* Fixed Header - Title with badge and sorting dropdown */}
        <div className="flex flex-col gap-[16px] shrink-0 px-10">
          {/* Title row with badge */}
          <div className="flex items-center gap-2">
            <div className="title-large text-foreground">
              <p>Avviksbehandling</p>
            </div>
            {/* Badge showing count */}
            <div className="bg-[var(--error)] rounded-full min-w-6 h-6 px-2 flex items-center justify-center">
              <span className="label-xsmall text-[var(--error-foreground)]">{sortedTodoItems.length}</span>
            </div>
          </div>

          {/* Sorting row - same style as TildelteRevisjonerPage - matched height with Liste/Kalender buttons */}
          <div className="flex items-center gap-2 relative min-h-[56px]">
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
                <div className="absolute top-full left-0 mt-2 z-20 bg-card border border-[var(--border)] rounded-lg shadow-lg min-w-[220px] overflow-hidden">
                  <button
                    onClick={() => handleSortChange('tidsfrist')}
                    className={`w-full px-4 py-3 text-left body-medium hover:bg-muted transition-colors ${
                      sortBy === 'tidsfrist' ? 'bg-secondary-container text-secondary-container-foreground' : 'text-foreground'
                    }`}
                  >
                    Tidsfrist for lukking
                  </button>
                  <button
                    onClick={() => handleSortChange('innmeldt-dato')}
                    className={`w-full px-4 py-3 text-left body-medium hover:bg-muted transition-colors ${
                      sortBy === 'innmeldt-dato' ? 'bg-secondary-container text-secondary-container-foreground' : 'text-foreground'
                    }`}
                  >
                    Innmeldt dato
                  </button>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Scrollable Content Area - Only on desktop - no margin top to align with left cards */}
        <div className="flex-1 w-full overflow-y-auto max-[1400px]:overflow-visible mt-4 px-10">
        {/* To-do cards */}
        <div className="flex flex-col gap-1 w-full max-[1400px]:pb-4">
          {sortedTodoItems.map((deviation) => (
            <AvvikActionCard
              key={deviation.id}
              foretakName={deviation.foretakName}
              deadline={formatNorwegianDate(deviation.deadline)}
              checklist={deviation.checklist}
              severity={deviation.severity}
              status={deviation.status}
              onClick={() => handleOpenAvvik(deviation.id)}
            />
          ))}
        </div>
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// Section 1 - Home Heading Component
// ============================================================================

function Section1HomeHeading({ onNavigateToTildelteRevisjoner, onNavigateToVenterPaPlanlegging, onNavigateToAvvikoversikt, onNavigateToStatistics, onNavigateToRevisorprofil }: Section2Props & { onNavigateToStatistics?: () => void; onNavigateToRevisorprofil?: () => void }) {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start justify-center px-[24px] py-[16px] relative w-full" data-name="Profile Details">
      {/* Information - User greeting and action buttons */}
      <div className="content-center flex flex-wrap gap-[8px] items-center justify-between py-[0px] relative shrink-0 w-full" data-name="information">
        {/* User greeting */}
        <div className="content-stretch flex gap-[16px] items-center py-[8px] relative shrink-0 w-[533px]" data-name="user greeting">
          {/* Avatar - Clean profile picture without badge */}
          <div className="relative shrink-0 size-[56px] rounded-full bg-[#EFF1E7] flex items-center justify-center" data-name="Generic avatar">
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" fill="#284000" />
            </svg>
          </div>

          {/* User Info - Reordered: Revisorprofil above, Liv Berg below */}
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start justify-center leading-[0] min-h-px min-w-px relative" data-name="User Info">
            <div className="label-large text-muted-foreground w-full">
              <p>Revisorprofil</p>
            </div>
            <div className="title-large text-foreground w-full">
              <p>Liv Berg</p>
            </div>
          </div>
        </div>
      </div>

      {/* Needs action audits navigation - Quick access cards */}
      <div className="content-start flex flex-wrap gap-[24px] max-[900px]:grid max-[900px]:grid-cols-2 max-[900px]:gap-[8px] items-start relative shrink-0 w-full" data-name="needs action audits navigation">
        {/* Card 1 - Tildelte revisjoner */}
        <button
          onClick={onNavigateToTildelteRevisjoner}
          className="bg-white flex-[1_0_0] max-w-[280px] min-h-px min-w-[232px] max-[900px]:flex-none max-[900px]:w-auto max-[900px]:h-[120px] max-[900px]:min-w-0 max-[900px]:max-w-none relative rounded-[16px] max-[900px]:rounded-[12px] hover:bg-muted/30 transition-colors cursor-pointer"
          data-name="Quick access card"
        >
          <div aria-hidden="true" className="absolute border border-[var(--border)] border-solid inset-0 pointer-events-none rounded-[16px] max-[900px]:rounded-[12px]" />
          <div className="flex flex-col items-center max-w-[inherit] min-w-[inherit] size-full">
            <div className="content-stretch flex flex-col items-center max-w-[inherit] min-w-[inherit] p-[12px] max-[900px]:px-[16px] max-[900px]:py-[16px] relative w-full">
              <div className="content-stretch flex flex-col gap-[16px] max-[900px]:gap-[8px] items-center justify-center relative shrink-0" data-name="Container">
                {/* Icon with larger badge */}
                <div className="relative shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-[var(--surface-container-low)] flex items-center justify-center p-2">
                    {/* Material Design post_add icon */}
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24">
                      <path d="M17 19.22H5V7h7V5H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-7h-2v7.22z" fill="var(--primary)" />
                      <path d="M19 2h-2v3h-3c.01.01 0 2 0 2h3v2.99c.01.01 2 0 2 0V7h3V5h-3V2zM7 9h8v2H7V9zm0 3v2h8v-2h-3H7zm0 3h8v2H7v-2z" fill="var(--primary)" />
                    </svg>
                  </div>
                  {/* Larger Badge */}
                  <div className="absolute -top-1 -right-1 bg-[var(--error)] rounded-full min-w-5 h-5 px-1 flex items-center justify-center">
                    <span className="label-xsmall text-[var(--error-foreground)]">{TILDELTE_REVISJONER_COUNT}</span>
                  </div>
                </div>

                {/* Text */}
                <div className="content-stretch flex flex-col items-start relative shrink-0 text-center" data-name="Assigned Audits">
                  <div className="title-medium text-foreground w-full">
                    <p>Tildelte revisjoner</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </button>

        {/* Card 2 - Venter på planlegging */}
        <button
          onClick={onNavigateToVenterPaPlanlegging}
          className="bg-white flex-[1_0_0] max-w-[280px] min-h-px min-w-[232px] max-[900px]:flex-none max-[900px]:w-auto max-[900px]:h-[120px] max-[900px]:min-w-0 max-[900px]:max-w-none relative rounded-[16px] max-[900px]:rounded-[12px] hover:bg-muted/30 transition-colors cursor-pointer"
          data-name="Quick access card"
        >
          <div aria-hidden="true" className="absolute border border-[var(--border)] border-solid inset-0 pointer-events-none rounded-[16px] max-[900px]:rounded-[12px]" />
          <div className="flex flex-col items-center max-w-[inherit] min-w-[inherit] size-full">
            <div className="content-stretch flex flex-col items-center max-w-[inherit] min-w-[inherit] p-[12px] max-[900px]:px-[24px] max-[900px]:py-[16px] relative w-full">
              <div className="content-stretch flex flex-col gap-[16px] max-[900px]:gap-[8px] items-center justify-center relative shrink-0" data-name="Container">
                {/* Icon with larger badge */}
                <div className="relative shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-[var(--surface-container-low)] flex items-center justify-center p-2">
                    {/* Material Design check_circle icon */}
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM16.59 7.58L10 14.17L7.41 11.59L6 13L10 17L18 9L16.59 7.58Z" fill="var(--primary)" />
                    </svg>
                  </div>
                  {/* Larger Badge */}
                  <div className="absolute -top-1 -right-1 bg-[var(--error)] rounded-full min-w-5 h-5 px-1 flex items-center justify-center">
                    <span className="label-xsmall text-[var(--error-foreground)]">{VENTER_PA_PLANLEGGING_COUNT}</span>
                  </div>
                </div>

                {/* Text */}
                <div className="content-stretch flex flex-col items-start relative shrink-0 text-center" data-name="Waiting for Planning">
                  <div className="title-medium text-foreground w-full">
                    <p>Aksepterte revisjoner</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </button>

        {/* Card 3 - Klar for rapport */}
        <button
          className="bg-white flex-[1_0_0] max-w-[280px] min-h-px min-w-[232px] max-[900px]:flex-none max-[900px]:w-auto max-[900px]:h-[120px] max-[900px]:min-w-0 max-[900px]:max-w-none relative rounded-[16px] max-[900px]:rounded-[12px] hover:bg-muted/30 transition-colors cursor-pointer"
          data-name="Quick access card"
        >
          <div aria-hidden="true" className="absolute border border-[var(--border)] border-solid inset-0 pointer-events-none rounded-[16px] max-[900px]:rounded-[12px]" />
          <div className="flex flex-col items-center max-w-[inherit] min-w-[inherit] size-full">
            <div className="content-stretch flex flex-col items-center max-w-[inherit] min-w-[inherit] p-[12px] max-[900px]:px-[24px] max-[900px]:py-[16px] relative w-full">
              <div className="content-stretch flex flex-col gap-[16px] max-[900px]:gap-[8px] items-center justify-center relative shrink-0" data-name="Container">
                {/* Icon with larger badge */}
                <div className="relative shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-[var(--surface-container-low)] flex items-center justify-center p-2">
                    {/* Material Design description (report) icon */}
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24">
                      <path d="M8 16H16V18H8V16ZM8 12H16V14H8V12ZM14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.89 22 5.99 22H18C19.1 22 20 21.1 20 20V8L14 2ZM18 20H6V4H13V9H18V20Z" fill="var(--primary)" />
                    </svg>
                  </div>
                  {/* Larger Badge */}
                  <div className="absolute -top-1 -right-1 bg-[var(--error)] rounded-full min-w-5 h-5 px-1 flex items-center justify-center">
                    <span className="label-xsmall text-[var(--error-foreground)]">{KLAR_FOR_RAPPORT_COUNT}</span>
                  </div>
                </div>

                {/* Text */}
                <div className="content-stretch flex flex-col items-start relative shrink-0 text-center" data-name="Ready for Report">
                  <div className="title-medium text-foreground w-full">
                    <p>Rapporter, ikke låst</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </button>

        {/* Card 4 - Avviksbehandling - Hidden on desktop (≥1400px) when "Til handling nå" panel is visible */}
        <button
          onClick={onNavigateToAvvikoversikt}
          className="bg-white flex-[1_0_0] max-w-[280px] min-h-px min-w-[232px] max-[900px]:flex-none max-[900px]:w-auto max-[900px]:h-[120px] max-[900px]:min-w-0 max-[900px]:max-w-none relative rounded-[16px] max-[900px]:rounded-[12px] hover:bg-muted/30 transition-colors cursor-pointer max-[1399px]:flex min-[1400px]:hidden"
          data-name="Quick access card"
        >
          <div aria-hidden="true" className="absolute border border-[var(--border)] border-solid inset-0 pointer-events-none rounded-[16px] max-[900px]:rounded-[12px]" />
          <div className="flex flex-col items-center max-w-[inherit] min-w-[inherit] size-full">
            <div className="content-stretch flex flex-col items-center max-w-[inherit] min-w-[inherit] p-[12px] max-[900px]:px-[24px] max-[900px]:py-[16px] relative w-full">
              <div className="content-stretch flex flex-col gap-[16px] max-[900px]:gap-[8px] items-center justify-center relative shrink-0" data-name="Container">
                {/* Icon with larger badge */}
                <div className="relative shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-[var(--surface-container-low)] flex items-center justify-center p-2">
                    {/* Material Design report_problem outlined icon */}
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24">
                      <path d="M12 5.99L19.53 19H4.47L12 5.99ZM12 2L1 21H23L12 2ZM13 16H11V18H13V16ZM13 10H11V14H13V10Z" fill="var(--primary)" />
                    </svg>
                  </div>
                  {/* Larger Badge */}
                  <div className="absolute -top-1 -right-1 bg-[var(--error)] rounded-full min-w-5 h-5 px-1 flex items-center justify-center">
                    <span className="label-xsmall text-[var(--error-foreground)]">{KLAR_FOR_OPPFOLGING_COUNT}</span>
                  </div>
                </div>

                {/* Text */}
                <div className="content-stretch flex flex-col items-start relative shrink-0 text-center" data-name="Ready for Follow-up">
                  <div className="title-medium text-foreground w-full">
                    <p>Avviksbehandling</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </button>

        {/* Card 5 - Se på statistikk */}
        <button
          onClick={onNavigateToStatistics}
          className="bg-white flex-[1_0_0] max-w-[280px] min-h-px min-w-[232px] max-[900px]:flex-none max-[900px]:w-auto max-[900px]:h-[120px] max-[900px]:min-w-0 max-[900px]:max-w-none relative rounded-[16px] max-[900px]:rounded-[12px] hover:bg-muted/30 transition-colors cursor-pointer"
          data-name="Quick access card"
        >
          <div aria-hidden="true" className="absolute border border-[var(--border)] border-solid inset-0 pointer-events-none rounded-[16px] max-[900px]:rounded-[12px]" />
          <div className="flex flex-col items-center max-w-[inherit] min-w-[inherit] size-full">
            <div className="content-stretch flex flex-col items-center max-w-[inherit] min-w-[inherit] p-[12px] max-[900px]:px-[24px] max-[900px]:py-[16px] relative w-full">
              <div className="content-stretch flex flex-col gap-[16px] max-[900px]:gap-[8px] items-center justify-center relative shrink-0" data-name="Container">
                {/* Icon without badge */}
                <div className="relative shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-[var(--surface-container-low)] flex items-center justify-center p-2">
                    {/* Percent icon % */}
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="19" y1="5" x2="5" y2="19" />
                      <circle cx="6.5" cy="6.5" r="2.5" />
                      <circle cx="17.5" cy="17.5" r="2.5" />
                    </svg>
                  </div>
                </div>

                {/* Text */}
                <div className="content-stretch flex flex-col items-start relative shrink-0 text-center" data-name="Statistics">
                  <div className="title-medium text-foreground w-full">
                    <p>Se på statistikk</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </button>

        {/* Card 6 - Revisorprofil */}
        <button
          onClick={onNavigateToRevisorprofil}
          className="bg-white flex-[1_0_0] max-w-[280px] min-h-px min-w-[232px] max-[900px]:flex-none max-[900px]:w-auto max-[900px]:h-[120px] max-[900px]:min-w-0 max-[900px]:max-w-none relative rounded-[16px] max-[900px]:rounded-[12px] hover:bg-muted/30 transition-colors cursor-pointer"
          data-name="Quick access card"
        >
          <div aria-hidden="true" className="absolute border border-[var(--border)] border-solid inset-0 pointer-events-none rounded-[16px] max-[900px]:rounded-[12px]" />
          <div className="flex flex-col items-center max-w-[inherit] min-w-[inherit] size-full">
            <div className="content-stretch flex flex-col items-center max-w-[inherit] min-w-[inherit] p-[12px] max-[900px]:px-[24px] max-[900px]:py-[16px] relative w-full">
              <div className="content-stretch flex flex-col gap-[16px] max-[900px]:gap-[8px] items-center justify-center relative shrink-0" data-name="Container">
                {/* Icon without badge */}
                <div className="relative shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-[var(--surface-container-low)] flex items-center justify-center p-2">
                    {/* Material Design account_circle icon */}
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 5C13.66 5 15 6.34 15 8C15 9.66 13.66 11 12 11C10.34 11 9 9.66 9 8C9 6.34 10.34 5 12 5ZM12 19.2C9.5 19.2 7.29 17.92 6 15.98C6.03 13.99 10 12.9 12 12.9C13.99 12.9 17.97 13.99 18 15.98C16.71 17.92 14.5 19.2 12 19.2Z" fill="var(--primary)" />
                    </svg>
                  </div>
                </div>

                {/* Text */}
                <div className="content-stretch flex flex-col items-start relative shrink-0 text-center" data-name="Revisor Profile">
                  <div className="title-medium text-foreground w-full">
                    <p>Rediger revisorprofil</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </button>
      </div>
    </div>
  );
}

// ============================================================================
// Main Content Area Component
// ============================================================================

function MainContentArea({ onNavigateToTildelteRevisjoner, onNavigateToVenterPaPlanlegging, onRevisionClick, onNavigateToAvvikoversikt }: Section2Props & { onNavigateToAvvikoversikt?: (deviationId?: string) => void }) {
  return (
    <div className="bg-background content-stretch flex flex-1 items-start justify-start relative w-full h-full max-[1400px]:h-auto min-[1400px]:overflow-hidden" data-name="Main Content Area">
      {/* Container with max gap between sections */}
      <div className="flex items-start w-full h-full max-[1400px]:h-auto max-[1400px]:flex-col max-[1400px]:gap-0">
        {/* Section 2 - Planned Revisjoner - Full width on mobile, constrained on desktop */}
        <div className="h-full max-[1400px]:h-auto w-full min-[1400px]:flex-1 min-[1400px]:min-w-0">
          <Section2PlanlagteRevisjoner 
            onNavigateToTildelteRevisjoner={onNavigateToTildelteRevisjoner}
            onNavigateToVenterPaPlanlegging={onNavigateToVenterPaPlanlegging}
            onRevisionClick={onRevisionClick}
          />
        </div>

        {/* Gap - fixed at 32px on desktop, removed on mobile */}
        <div className="shrink-0 max-[1400px]:hidden" style={{ width: '32px' }} />

        {/* Section 3 - To-do list - shown only on desktop (≥1400px), hidden on mobile/tablet */}
        <div className="max-[1399px]:hidden min-[1400px]:block h-full">
          <Section3SidePanelToDoList onNavigateToAvvikoversikt={onNavigateToAvvikoversikt} />
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// Main ForsidePage Component
// ============================================================================

interface ForsidePageProps {
  onNavigateToTildelteRevisjoner?: () => void;
  onNavigateToVenterPaPlanlegging?: () => void;
  onRevisionClick?: (revisionId: string) => void;
  onNavigateToAvvikoversikt?: (deviationId?: string) => void;
  onNavigateToStatistics?: () => void;
  onNavigateToRevisorprofil?: () => void;
}

function ForsidePage({ onNavigateToTildelteRevisjoner, onNavigateToVenterPaPlanlegging, onRevisionClick, onNavigateToAvvikoversikt, onNavigateToStatistics, onNavigateToRevisorprofil }: ForsidePageProps) {
  return (
    <div className="bg-background content-stretch flex flex-col items-start relative size-full max-w-[1680px] mx-auto max-[1400px]:h-auto max-[1400px]:overflow-y-auto" data-name="Forside Page">
      <Section1HomeHeading 
        onNavigateToTildelteRevisjoner={onNavigateToTildelteRevisjoner}
        onNavigateToVenterPaPlanlegging={onNavigateToVenterPaPlanlegging}
        onNavigateToAvvikoversikt={onNavigateToAvvikoversikt}
        onNavigateToStatistics={onNavigateToStatistics}
        onNavigateToRevisorprofil={onNavigateToRevisorprofil}
      />
      
      <MainContentArea 
        onNavigateToTildelteRevisjoner={onNavigateToTildelteRevisjoner}
        onNavigateToVenterPaPlanlegging={onNavigateToVenterPaPlanlegging}
        onRevisionClick={onRevisionClick}
        onNavigateToAvvikoversikt={onNavigateToAvvikoversikt}
      />
    </div>
  );
}

export default ForsidePage;