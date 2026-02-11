import { ChevronRight, ChevronLeft, MapPin, Clock, CheckCircle2, AlertCircle, ExternalLink, Calendar, Paperclip, Download, Check } from 'lucide-react';
import { Button } from './ui/button';
import { formatNorwegianDate } from '../utils/dateFormat';
import { RevisjonCard } from './RevisjonCard';
import { allDeviations } from './AvvikoversiktPage';
import { mockAksepterteRevisjoner } from './AksepterteRevisjonerPage';
import { useState } from 'react';

// SVG paths for icons
const svgPathsProfileDetailsNew = {
  // Avatar person icon paths
  pb9ab680: "M9 11C10.66 11 12 9.66 12 8C12 6.34 10.66 5 9 5C7.34 5 6 6.34 6 8C6 9.66 7.34 11 9 11ZM9 13C6.67 13 2 14.17 2 16.5V18H16V16.5C16 14.17 11.33 13 9 13Z",
  p14aadaf0: "M9 2C13.97 2 18 6.03 18 11C18 15.97 13.97 20 9 20C4.03 20 0 15.97 0 11C0 6.03 4.03 2 9 2Z",
  // Statistics/percent icon
  p37d26b00: "M7.5 11.5C8.88 11.5 10 10.38 10 9C10 7.62 8.88 6.5 7.5 6.5C6.12 6.5 5 7.62 5 9C5 10.38 6.12 11.5 7.5 11.5ZM16.5 6.5C15.12 6.5 14 7.62 14 9C14 10.38 15.12 11.5 16.5 11.5C17.88 11.5 19 10.38 19 9C19 7.62 17.88 6.5 16.5 6.5ZM21 9C21 6.79 19.21 5 17 5C15.76 5 14.66 5.57 14 6.45C13.34 5.57 12.24 5 11 5C8.79 5 7 6.79 7 9C7 11.21 8.79 13 11 13C12.24 13 13.34 12.43 14 11.55C14.66 12.43 15.76 13 17 13C19.21 13 21 11.21 21 9Z",
  // Profile/identity icon
  p24cfbd00: "M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z",
  // Assignment/document icon paths
  p15082280: "M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3Z",
  p141e7e00: "M7 7H17V9H7V7Z",
  p1e924700: "M7 11H17V13H7V11Z",
  p3be0780: "M7 15H14V17H7V15Z",
  // Calendar icon
  p1c86d00: "M19 4H18V2H16V4H8V2H6V4H5C3.89 4 3.01 4.9 3.01 6L3 20C3 21.1 3.89 22 5 22H19C20.1 22 21 21.1 21 20V6C21 4.9 20.1 4 19 4ZM19 20H5V10H19V20ZM19 8H5V6H19V8Z",
  // Description/report icon
  p38bb600: "M14 2H6C4.9 2 4.01 2.9 4.01 4L4 20C4 21.1 4.89 22 5.99 22H18C19.1 22 20 21.1 20 20V8L14 2ZM16 18H8V16H16V18ZM16 14H8V12H16V14ZM13 9V3.5L18.5 9H13Z",
  // Follow-up/checklist icon
  p24139a00: "M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z"
};

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

interface RevisjonData {
  ordning: string;
  revisjonsfrist: string;
  produksjon: string[];
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
  // Filter only revisjoner that have a planned date
  const plannedRevisjoner: PlannedRevisjon[] = mockAksepterteRevisjoner
    .filter(rev => rev.revisjonData.hasPlannedDate === true && rev.visitDate !== null)
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
  onNavigateToAvvikoversikt?: () => void;
}

function Section2PlanlagteRevisjoner({ onNavigateToTildelteRevisjoner, onNavigateToVenterPaPlanlegging, onRevisionClick, onNavigateToAvvikoversikt }: Section2Props) {
  const [viewMode, setViewMode] = useState<'list' | 'calendar'>('list');
  const [currentMonth, setCurrentMonth] = useState(new Date(2025, 0, 1)); // January 2026
  const allPlannedRevisjoner = getAllPlannedRevisjoner();
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
          {/* Title */}
          <div className="title-large text-foreground max-[1400px]:px-6 max-[1400px]:pt-6">
            <p>Planlagte revisjoner</p>
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

        {/* Scrollable Content Area - Only on desktop */}
        <div className="flex-1 w-full overflow-y-auto max-[1400px]:overflow-visible mt-4 px-10 max-[1400px]:px-0">
          {/* Calendar View */}
          {viewMode === 'calendar' && (
            <div className="bg-[#f4f4ea] rounded-xl p-6 w-full max-[1400px]:mx-6 max-[1400px]:mb-6">
              {/* Calendar header with month navigation */}
              <div className="flex items-center justify-center gap-4 py-2 mb-4">
                <button 
                  onClick={goToPreviousMonth}
                  className="w-14 h-14 flex items-center justify-center hover:bg-muted/30 rounded-full transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24">
                    <path d="M15.41 7.41L14 6L8 12L14 18L15.41 16.59L10.83 12L15.41 7.41Z" fill="var(--muted-foreground)" />
                  </svg>
                </button>
                
                <h2 className="title-large text-foreground min-w-[200px] text-center">
                  {currentMonthName}
                </h2>
                
                <button 
                  onClick={goToNextMonth}
                  className="w-14 h-14 flex items-center justify-center hover:bg-muted/30 rounded-full transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24">
                    <path d="M10 6L8.59 7.41L13.17 12L8.59 16.59L10 18L16 12L10 6Z" fill="var(--muted-foreground)" />
                  </svg>
                </button>
              </div>

              {/* Calendar grid */}
              <div className="grid grid-cols-7 gap-4">
                {/* Day headers */}
                {['Ma', 'Ti', 'On', 'To', 'Fr', 'Lø', 'Sø'].map(day => (
                  <div key={day} className="title-medium text-foreground text-center pb-4">
                    {day}
                  </div>
                ))}

                {/* Calendar days */}
                {calendarDays.map((day, index) => {
                  const revisjoner = getRevisjonerForDate(day.fullDate);
                  const isCurrentMonth = day.month === 'current';
                  
                  return (
                    <div 
                      key={index} 
                      className={`bg-white p-2 min-h-[100px] flex flex-col gap-2 ${
                        !isCurrentMonth ? 'opacity-40' : ''
                      }`}
                    >
                      <div className={`title-medium ${isCurrentMonth ? 'text-[var(--muted-foreground)]' : 'text-[var(--muted-foreground)]'} text-left`}>
                        {day.date.toString().padStart(2, '0')}.
                      </div>
                      
                      {/* Show revisjoner for this date */}
                      {revisjoner.map((rev, idx) => {
                        const time = rev.visitTime?.split(' - ')[0] || '';
                        const foretakShort = rev.foretakName.split(' ').slice(0, 2).join(' ');
                        
                        return (
                          <div 
                            key={idx}
                            className="bg-[#fafaf0] px-1 py-0.5 text-center"
                            title={`${time} ${rev.foretakName}`}
                          >
                            <p className="label-medium text-[var(--muted-foreground)] truncate">
                              {time}. {foretakShort}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* List View */}
          {viewMode === 'list' && (
            <div className="w-full max-[1400px]:pb-4">
              {/* Date groups and revisjon cards */}
              {Array.from(groupedRevisjoner.entries()).map(([dateKey, revisjoner], groupIndex) => (
                <div key={dateKey} className="flex flex-col w-full" style={{ marginTop: groupIndex === 0 ? 0 : '24px' }}>
                  {/* Date header - closer to cards below */}
                  <div className="label-medium text-foreground mb-2 max-[1400px]:px-6">
                    <p>{dateKey}</p>
                  </div>

                  {/* Revisjon cards */}
                  <div className="flex flex-col gap-4 max-[1400px]:px-6">
                    {revisjoner.map((revisjon) => (
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
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function Section3SidePanelToDoList() {
  const handleOpenAvvik = (deviationId: string) => {
    // This will navigate to Avvikoversikt page with this deviation selected
    console.log('Navigate to Avvikoversikt with deviation:', deviationId);
    // TODO: Add navigation to AvvikoversiktPage
  };

  // Filter and sort the deviations
  const todoItems = allDeviations
    .filter(deviation => deviation.requiresAction)
    .sort((a, b) => getSeveritySortOrder(a.severity) - getSeveritySortOrder(b.severity));

  console.log('ForsidePage - Total deviations:', allDeviations.length);
  console.log('ForsidePage - Filtered todo items:', todoItems.length);
  console.log('ForsidePage - Todo items:', todoItems.map(d => ({ id: d.id, foretak: d.foretakName, status: d.status })));

  return (
    <div className="bg-background flex h-full max-[1400px]:h-auto shrink-0 w-[520px] max-[1400px]:w-full" data-name="Section 3 - Side panel to-do list">
      {/* Content container that hugs cards - scrollable on desktop */}
      <div className="flex flex-col py-[16px] relative h-full max-[1400px]:h-auto w-full max-[1400px]:w-full min-[1400px]:max-w-max">
        {/* Fixed Header - Title with badge */}
        <div className="flex items-center gap-2 shrink-0 px-10">
          <div className="title-large text-foreground">
            <p>Klar for oppfølging</p>
          </div>
          {/* Badge showing count */}
          <div className="bg-[var(--error)] rounded-full min-w-6 h-6 px-2 flex items-center justify-center">
            <span className="label-xsmall text-[var(--error-foreground)]">{todoItems.length}</span>
          </div>
        </div>

        {/* Scrollable Content Area - Only on desktop */}
        <div className="flex-1 w-full overflow-y-auto max-[1400px]:overflow-visible mt-6 px-10">
        {/* To-do cards */}
        <div className="flex flex-col gap-4 w-full max-[1400px]:pb-4">
          {todoItems.map((deviation) => {
            const severityConfig = getSeverityConfig(deviation.severity);
            const actionText = getActionText(deviation.status, deviation.confirmationMethod);
            const isVisit = deviation.confirmationMethod !== 'dokumentasjon';
            
            return (
              <div 
                key={deviation.id} 
                className="bg-card border border-border rounded-xl shadow-sm w-full"
              >
                {/* List item header */}
                <div className="flex gap-4 items-start px-4 py-3 min-h-[88px]">
                  {/* Content */}
                  <div className="flex-1 flex flex-col gap-0 min-w-0">
                    {/* Overline - Farm name */}
                    <div className="label-medium text-muted-foreground">
                      <p>{deviation.foretakName}</p>
                    </div>
                    
                    {/* Main text - Action required */}
                    <div className="body-large text-foreground">
                      <p>{actionText}</p>
                    </div>
                    
                    {/* Supporting text - Severity + Question */}
                    <div className="flex flex-col">
                      <span 
                        className="label-medium inline-block"
                        style={{ color: severityConfig.text }}
                      >
                        {severityConfig.label}
                      </span>
                      <p className="label-medium text-muted-foreground truncate">
                        {deviation.checklist}
                      </p>
                    </div>
                  </div>

                  {/* Trailing element - Open in new icon */}
                  <button
                    onClick={() => handleOpenAvvik(deviation.id)}
                    className="flex items-center justify-center w-6 h-6 shrink-0 text-muted-foreground hover:text-foreground transition-colors"
                    aria-label="Åpne avvik"
                  >
                    <ExternalLink className="w-6 h-6" />
                  </button>
                </div>

                {/* Content section */}
                <div className="px-4 py-2">
                  {isVisit ? (
                    // Visit section with date
                    <div className="flex gap-4 items-center h-14 w-full">
                      <Calendar className="w-6 h-6 text-muted-foreground shrink-0" />
                      <div className="flex-1 flex flex-col justify-center min-w-0">
                        <p className="label-medium text-muted-foreground">
                          Forslag til {deviation.confirmationMethod === 'digitalt-besok' ? 'digitalt' : 'fysisk'} besøk
                        </p>
                        <p className="body-large text-muted-foreground">
                          {formatNorwegianDate(deviation.deadline)}
                        </p>
                      </div>
                    </div>
                  ) : (
                    // Document section with attachment
                    <div className="flex gap-4 items-center h-14 w-full">
                      <Paperclip className="w-6 h-6 text-muted-foreground shrink-0" />
                      <div className="flex-1 flex flex-col justify-center min-w-0">
                        <p className="label-medium text-muted-foreground">
                          Attachment
                        </p>
                        <p className="body-large text-muted-foreground truncate">
                          kontrollrapport.jpg
                        </p>
                      </div>
                      <button className="text-muted-foreground hover:text-foreground transition-colors">
                        <Download className="w-6 h-6" />
                      </button>
                    </div>
                  )}

                  {/* Action buttons */}
                  <div className="flex gap-2 mt-2 w-full">
                    {isVisit ? (
                      <>
                        <Button variant="secondary" className="flex-1">
                          Foreslå nytt tidspunkt
                        </Button>
                        <Button variant="secondary" className="flex-1">
                          <Check className="w-5 h-5" />
                          Godta tidspunkt
                        </Button>
                      </>
                    ) : (
                      <>
                        <Button variant="secondary" className="flex-1">
                          Avvis dokument og be om nytt
                        </Button>
                        <Button variant="secondary" className="flex-1">
                          Lukk avviket
                        </Button>
                      </>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        </div>
      </div>
    </div>
  );
}

function Section1HomeHeading({ onNavigateToTildelteRevisjoner, onNavigateToVenterPaPlanlegging, onNavigateToAvvikoversikt }: Section2Props) {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start justify-center px-[24px] py-[16px] relative w-full" data-name="Profile Details">
      {/* Information - User greeting and action buttons */}
      <div className="content-center flex flex-wrap gap-[8px] items-center justify-between py-[8px] relative shrink-0 w-full" data-name="information">
        {/* User greeting */}
        <div className="content-stretch flex gap-[16px] items-center py-[8px] relative shrink-0 w-[533px]" data-name="user greeting">
          {/* Avatar - Clean profile picture without badge */}
          <div className="relative shrink-0 size-[56px] rounded-full bg-[#EFF1E7] flex items-center justify-center" data-name="Generic avatar">
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" fill="#284000" />
            </svg>
          </div>

          {/* User Info - Reordered: Revisorprofil above, Liv Berg below, button at bottom */}
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start justify-center leading-[0] min-h-px min-w-px relative" data-name="User Info">
            <div className="label-large text-muted-foreground w-full">
              <p>Revisorprofil</p>
            </div>
            <div className="title-large text-foreground w-full">
              <p>Liv Berg</p>
            </div>
            <button className="label-medium text-primary hover:opacity-70 transition-opacity mt-1">
              Rediger revisorsprofil
            </button>
          </div>
        </div>

        {/* Actions - Only "Se på statistik" button */}
        <div className="content-center flex flex-wrap gap-[8px] items-center relative shrink-0" data-name="Actions">
          {/* Button - Se på statistik with percent icon */}
          <button className="content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0 hover:opacity-80 transition-opacity" data-name="Button">
            <div className="content-stretch flex gap-[8px] items-center justify-center px-[24px] py-[16px] relative shrink-0" data-name="State-layer">
              {/* Percent icon % */}
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="19" y1="5" x2="5" y2="19" />
                <circle cx="6.5" cy="6.5" r="2.5" />
                <circle cx="17.5" cy="17.5" r="2.5" />
              </svg>
              <div className="label-medium text-primary">
                <p>Se på statistik</p>
              </div>
            </div>
          </button>
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
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24">
                      <g>
                        <path d={svgPathsProfileDetailsNew.p1c86d00} fill="var(--primary)" />
                      </g>
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
                    <p>Venter på planlegging</p>
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
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24">
                      <g>
                        <path d={svgPathsProfileDetailsNew.p38bb600} fill="var(--primary)" />
                      </g>
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
                    <p>Klar for rapport</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </button>

        {/* Card 4 - Klar for oppfølging - Hidden on desktop (≥1400px) when "Til handling nå" panel is visible */}
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
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24">
                      <g>
                        <path d={svgPathsProfileDetailsNew.p24139a00} fill="var(--primary)" />
                      </g>
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
                    <p>Klar for oppfølging</p>
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

function MainContentArea({ onNavigateToTildelteRevisjoner, onNavigateToVenterPaPlanlegging, onRevisionClick }: Section2Props) {
  return (
    <div className="bg-background content-stretch flex flex-1 items-start justify-start relative w-full h-full max-[1400px]:overflow-y-auto max-[1400px]:h-auto overflow-hidden" data-name="Main Content Area">
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
          <Section3SidePanelToDoList />
        </div>
      </div>
    </div>
  );
}

interface ForsidePageProps {
  onNavigateToTildelteRevisjoner?: () => void;
  onNavigateToVenterPaPlanlegging?: () => void;
  onRevisionClick?: (revisionId: string) => void;
  onNavigateToAvvikoversikt?: () => void;
}

function ForsidePage({ onNavigateToTildelteRevisjoner, onNavigateToVenterPaPlanlegging, onRevisionClick, onNavigateToAvvikoversikt }: ForsidePageProps) {
  return (
    <div className="bg-background content-stretch flex flex-col items-start relative size-full max-w-[1680px] mx-auto max-[1400px]:h-auto max-[1400px]:overflow-y-auto" data-name="Forside Page">
      <Section1HomeHeading 
        onNavigateToTildelteRevisjoner={onNavigateToTildelteRevisjoner}
        onNavigateToVenterPaPlanlegging={onNavigateToVenterPaPlanlegging}
        onNavigateToAvvikoversikt={onNavigateToAvvikoversikt}
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