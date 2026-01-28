import svgPaths from "../imports/svg-4in44qqe2k";
import svgPathsToDoList from "../imports/svg-nbjngogatf";
import svgPathsUpcomingAudits from "../imports/svg-2vm1tzdqhs";
import svgPathsNeedsAction from "../imports/svg-nh1bgog2fz";
import svgPathsRevisorCard from "../imports/svg-kwr2krk31l";
import svgPathsProfileDetails from "../imports/svg-epuzborok3";
import { Button } from "./ui/button";
import { User, Calendar, Paperclip, Download, ExternalLink, Check } from "lucide-react";
import { formatNorwegianDate } from "../utils/dateFormat";
import { RevisjonCard } from "./RevisjonCard";
import { useState } from "react";

// Import deviation data from AvvikoversiktPage for data consistency
// TODO: In production, this should use shared state management (Context/Redux) or backend API
import { allDeviations } from "./AvvikoversiktPage";

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

// Helper function to get severity badge config
function getSeverityConfig(severity: SeverityType) {
  const configs = {
    kritisk: { bg: '#ffdad6', text: '#410002', label: 'Stort avvik' },
    avvik: { bg: '#ffedbf', text: '#705400', label: 'Avvik' },
    lite: { bg: '#ffe9c4', text: '#932601', label: 'Lite avvik' }
  };
  return configs[severity];
}

// Helper function to get action text based on status and confirmation method
function getActionText(status: StatusType, confirmationMethod: ConfirmationMethod): string {
  if (status === 'tidspunkt-foreslatt') {
    return confirmationMethod === 'digitalt-besok' 
      ? 'Forespørsel om digitalt besøk'
      : 'Forespørsel om fysisk besøk';
  }
  if (status === 'dokument-levert') {
    return 'Dokumentasjon er lastet opp';
  }
  if (status === 'onsker-fristforlengelse') {
    return 'Ønsker fristforlengelse';
  }
  return 'Krever handling';
}

// ============================================================================
// Planned Revisjoner Types and Data
// ============================================================================

type RevisjonType = 'besok-planlagt' | 'godkjent-revisjon';

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

const addresses = [
  { street: 'HOLTEVEIEN 138', postalCode: '4639', city: 'Kristiansand s', kommune: 'Kristiansand' },
  { street: 'Fjellveien 42', postalCode: '2670', city: 'Otta', kommune: 'Sel' },
  { street: 'Storgata 15', postalCode: '2000', city: 'Lillehammer', kommune: 'Lillehammer' },
  { street: 'Høyfjellsvegen 8', postalCode: '2660', city: 'Dombås', kommune: 'Dovre' },
  { street: 'Fruktveien 23', postalCode: '2312', city: 'Ottestad', kommune: 'Stange' },
  { street: 'Melkeveien 7', postalCode: '2408', city: 'Elverum', kommune: 'Elverum' },
  { street: 'Kornveien 55', postalCode: '2150', city: 'Årnes', kommune: 'Nes' },
  { street: 'Bakkevegen 12', postalCode: '1950', city: 'Fjerdingby', kommune: 'Sørum' }
];

const ordninger = ['KSL', 'LokalMat', 'Spesialitet', 'Nyt Norge'];

const produksjonTypes = [
  ['Sau (11)', 'Korn, frø, olje- og belgvekster (0)', 'Grovfôr (114)', 'Storfe (2)'],
  ['Melkeproduksjon (80)', 'Grovfôr (200)', 'Storfe (85)'],
  ['Frukt og bær (150)', 'Planter og stauder (45)'],
  ['Økologiske grønnsaker (230)', 'Potet (120)'],
  ['Sau (25)', 'Lam (40)', 'Grovfôr (80)'],
  ['Biodling (35)', 'Honningproduksjon'],
  ['Korn (450)', 'Frø og belgvekster (60)'],
  ['Geit (18)', 'Geitost produksjon', 'Grovfôr (55)']
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

// Get planned revisjoner from Avvikoversikt (besok-planlagt status) + random accepted revisjoner
function getAllPlannedRevisjoner(): PlannedRevisjon[] {
  // 1. Get revisjoner from deviations with besok-planlagt status
  const deviationRevisjoner: PlannedRevisjon[] = allDeviations
    .filter(d => d.status === 'besok-planlagt')
    .map(d => {
      const addressData = addresses[Math.floor(Math.random() * addresses.length)];
      return {
        id: `deviation-${d.id}`,
        type: 'besok-planlagt' as RevisjonType,
        foretakName: d.foretakName,
        contactPerson: 'Per Hansen', // Mock contact
        visitDate: d.deadline,
        visitTime: '10:00 - 12:00',
        visitType: d.confirmationMethod as 'digitalt-besok' | 'fysisk-besok',
        address: d.confirmationMethod === 'fysisk-besok' ? `${addressData.street}, ${addressData.postalCode} ${addressData.city}` : undefined,
        checklist: d.checklist,
        notes: `Oppfølging av ${getSeverityConfig(d.severity).label.toLowerCase()}`,
        deviationId: d.id,
        severity: d.severity,
        revisjonData: {
          ordning: ordninger[Math.floor(Math.random() * ordninger.length)],
          revisjonsfrist: getRevisjonsfrist(d.deadline),
          produksjon: produksjonTypes[Math.floor(Math.random() * produksjonTypes.length)],
          kommune: addressData.kommune,
          address: `${addressData.street}, ${addressData.postalCode} ${addressData.city}`,
          isPriority: Math.random() > 0.5
        }
      };
    });

  // 2. Add random accepted revisjoner (not from deviations)
  const addr1 = addresses[1]; // Fjellveien 42, 2670 Otta - Sel kommune
  const addr2 = addresses[2]; // Storgata 15, 2000 Lillehammer - Lillehammer kommune
  const addr3 = addresses[3]; // Høyfjellsvegen 8, 2660 Dombås - Dovre kommune
  const addr4 = addresses[4]; // Fruktveien 23, 2312 Ottestad - Stange kommune
  const addr5 = addresses[5]; // Melkeveien 7, 2408 Elverum - Elverum kommune
  const addr6 = addresses[6]; // Kornveien 55, 2150 Årnes - Nes kommune

  const randomRevisjoner: PlannedRevisjon[] = [
    {
      id: 'haugseter-gard',
      type: 'godkjent-revisjon',
      foretakName: 'Haugseter Gård',
      contactPerson: 'Lars Haugseter',
      visitDate: new Date(2025, 0, 15), // 15. januar 2025
      visitTime: '09:00 - 12:00',
      visitType: 'fysisk-besok',
      address: 'Vangsvegen 302, 2974 Vang',
      checklist: 'Årlig ordinær revisjon - KSL',
      notes: 'Oppfølging gyldig KSL',
      revisjonData: {
        ordning: 'KSL - Kvalitetssystem i landbruket',
        revisjonsfrist: '31. mars 2025',
        produksjon: ['Storfe', 'Grovfôr'],
        kommune: 'Vang',
        address: 'Vangsvegen 302, 2974 Vang',
        isPriority: false
      }
    },
    {
      id: 'accepted-1',
      type: 'godkjent-revisjon',
      foretakName: 'Nordlys Økologiske',
      contactPerson: 'Kari Nordmann',
      visitDate: new Date(2025, 0, 27), // 27. januar 2025
      visitTime: '09:00 - 11:30',
      visitType: 'fysisk-besok',
      address: `${addr1.street}, ${addr1.postalCode} ${addr1.city}`,
      checklist: 'Årlig ordinær revisjon - Husdyrhold',
      notes: 'Første revisjon for dette foretaket',
      revisjonData: {
        ordning: ordninger[Math.floor(Math.random() * ordninger.length)],
        revisjonsfrist: getRevisjonsfrist(new Date(2025, 0, 27)),
        produksjon: produksjonTypes[Math.floor(Math.random() * produksjonTypes.length)],
        kommune: addr1.kommune,
        address: `${addr1.street}, ${addr1.postalCode} ${addr1.city}`,
        isPriority: Math.random() > 0.5
      }
    },
    {
      id: 'accepted-2',
      type: 'godkjent-revisjon',
      foretakName: 'Grønn Vallei Gård',
      contactPerson: 'Ola Svendsen',
      visitDate: new Date(2025, 0, 27), // 27. januar 2025 - Same day
      visitTime: '13:00 - 15:00',
      visitType: 'digitalt-besok',
      checklist: 'Oppfølging revisjon - Økologisk planteproduksjon',
      notes: 'Gjennomgang av dokumentasjon fra forrige sesong',
      revisjonData: {
        ordning: ordninger[Math.floor(Math.random() * ordninger.length)],
        revisjonsfrist: getRevisjonsfrist(new Date(2025, 0, 27)),
        produksjon: produksjonTypes[Math.floor(Math.random() * produksjonTypes.length)],
        kommune: addr2.kommune,
        address: `${addr2.street}, ${addr2.postalCode} ${addr2.city}`,
        isPriority: Math.random() > 0.5
      }
    },
    {
      id: 'accepted-3',
      type: 'godkjent-revisjon',
      foretakName: 'Fjellheim Sauebruk',
      contactPerson: 'Ingrid Larsen',
      visitDate: new Date(2025, 0, 29), // 29. januar 2025
      visitTime: '10:00 - 13:00',
      visitType: 'fysisk-besok',
      address: `${addr3.street}, ${addr3.postalCode} ${addr3.city}`,
      checklist: 'Årlig ordinær revisjon - Sauehold',
      notes: 'Inkluderer inspeksjon av beiteområder',
      revisjonData: {
        ordning: ordninger[Math.floor(Math.random() * ordninger.length)],
        revisjonsfrist: getRevisjonsfrist(new Date(2025, 0, 29)),
        produksjon: produksjonTypes[Math.floor(Math.random() * produksjonTypes.length)],
        kommune: addr3.kommune,
        address: `${addr3.street}, ${addr3.postalCode} ${addr3.city}`,
        isPriority: Math.random() > 0.5
      }
    },
    {
      id: 'accepted-4',
      type: 'godkjent-revisjon',
      foretakName: 'Solsiden Frukt & Bær',
      contactPerson: 'Martin Berg',
      visitDate: new Date(2025, 0, 29), // 29. januar 2025 - Same day
      visitTime: '14:00 - 16:30',
      visitType: 'fysisk-besok',
      address: `${addr4.street}, ${addr4.postalCode} ${addr4.city}`,
      checklist: 'Årlig ordinær revisjon - Fruktproduksjon',
      notes: 'Fokus på nye plantinger fra 2024',
      revisjonData: {
        ordning: ordninger[Math.floor(Math.random() * ordninger.length)],
        revisjonsfrist: getRevisjonsfrist(new Date(2025, 0, 29)),
        produksjon: produksjonTypes[Math.floor(Math.random() * produksjonTypes.length)],
        kommune: addr4.kommune,
        address: `${addr4.street}, ${addr4.postalCode} ${addr4.city}`,
        isPriority: Math.random() > 0.5
      }
    },
    {
      id: 'accepted-5',
      type: 'godkjent-revisjon',
      foretakName: 'Aurland Biogård',
      contactPerson: 'Silje Andersen',
      visitDate: new Date(2025, 1, 3), // 3. februar 2025
      visitTime: '11:00 - 13:30',
      visitType: 'digitalt-besok',
      checklist: 'Oppfølging revisjon - Biodling',
      notes: 'Gjennomgang av bikuberegistrering og honningproduksjon',
      revisjonData: {
        ordning: ordninger[Math.floor(Math.random() * ordninger.length)],
        revisjonsfrist: getRevisjonsfrist(new Date(2025, 1, 3)),
        produksjon: produksjonTypes[Math.floor(Math.random() * produksjonTypes.length)],
        kommune: addr5.kommune,
        address: `${addr5.street}, ${addr5.postalCode} ${addr5.city}`,
        isPriority: Math.random() > 0.5
      }
    },
    {
      id: 'accepted-6',
      type: 'godkjent-revisjon',
      foretakName: 'Eikestad Melkeproduksjon',
      contactPerson: 'Tor Eriksen',
      visitDate: new Date(2025, 1, 3), // 3. februar 2025 - Same day
      visitTime: '08:00 - 11:00',
      visitType: 'fysisk-besok',
      address: `${addr6.street}, ${addr6.postalCode} ${addr6.city}`,
      checklist: 'Årlig ordinær revisjon - Melkeproduksjon',
      notes: 'Stort foretak med 80 melkekyr',
      revisjonData: {
        ordning: ordninger[Math.floor(Math.random() * ordninger.length)],
        revisjonsfrist: getRevisjonsfrist(new Date(2025, 1, 3)),
        produksjon: produksjonTypes[Math.floor(Math.random() * produksjonTypes.length)],
        kommune: addr6.kommune,
        address: `${addr6.street}, ${addr6.postalCode} ${addr6.city}`,
        isPriority: Math.random() > 0.5
      }
    }
  ];

  // Combine and sort by date
  return [...deviationRevisjoner, ...randomRevisjoner].sort((a, b) => 
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
}

function Section2PlanlagteRevisjoner({ onNavigateToTildelteRevisjoner, onNavigateToVenterPaPlanlegging }: Section2Props = {}) {
  const [viewMode, setViewMode] = useState<'list' | 'calendar'>('list');
  const [currentMonth, setCurrentMonth] = useState(new Date(2025, 0, 1)); // January 2026
  const allPlannedRevisjoner = getAllPlannedRevisjoner();
  const groupedRevisjoner = groupRevisjonerByDate(allPlannedRevisjoner);

  // Count revisjoner waiting for different statuses
  // Tildelte revisjoner count (from TildelteRevisjonerPage - total items)
  const tildelteRevisjonerCount = 10;
  
  // Venter på planlegging count (from AksepterteRevisjonerPage - cards without planned date)
  const venterPaPlanleggingCount = 7;

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
    <div className="bg-white content-stretch flex flex-col gap-[16px] items-start px-10 py-[32px] relative rounded-[12px] flex-1 h-full overflow-y-auto" data-name="Upcoming audits">
      {/* Title */}
      <div className="title-large text-foreground">
        <p>Planlagte revisjoner</p>
      </div>

      {/* Navigation cards */}
      <div className="flex flex-row gap-4 items-start w-full">
        {/* Card 1 - Tildelte revisjoner */}
        <button 
          onClick={onNavigateToTildelteRevisjoner}
          className="bg-white rounded-2xl flex-1 max-w-[400px] p-3 flex items-center gap-3 hover:bg-muted/30 transition-colors relative"
        >
          <div className="absolute border border-[var(--outline-variant)] inset-0 pointer-events-none rounded-2xl" />
          
          {/* Icon with badge */}
          <div className="relative shrink-0">
            <div className="w-12 h-12 rounded-lg bg-[var(--surface-container-low)] flex items-center justify-center p-2">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24">
                <g>
                  <path d={svgPathsRevisorCard.p15082280} fill="var(--primary)" />
                  <path d={svgPathsRevisorCard.p141e7e00} fill="var(--primary)" />
                  <path d="M14.5 9.5H6.5V11.5H14.5V9.5Z" fill="var(--primary)" />
                  <path d={svgPathsRevisorCard.p1e924700} fill="var(--primary)" />
                  <path d={svgPathsRevisorCard.p3be0780} fill="var(--primary)" />
                </g>
              </svg>
            </div>
            {/* Badge */}
            <div className="absolute -top-1 -right-1 bg-[var(--error)] rounded-full min-w-5 h-5 px-1 flex items-center justify-center">
              <span className="label-xsmall text-[var(--error-foreground)]">{tildelteRevisjonerCount}</span>
            </div>
          </div>

          {/* Text content */}
          <div className="flex-1 flex flex-col items-start gap-0">
            <p className="title-medium text-[var(--foreground)]">Tildelte revisjoner</p>
            <p className="body-medium text-[var(--muted-foreground)]">Venter på at du skal ta stilling</p>
          </div>

          {/* Arrow icon */}
          <div className="shrink-0 w-6 h-6">
            <svg className="block size-full" fill="none" viewBox="0 0 24 24">
              <path d="M10 17V7L15 12L10 17Z" fill="var(--muted-foreground)" />
            </svg>
          </div>
        </button>

        {/* Card 2 - Venter på planlegging */}
        <button 
          onClick={onNavigateToVenterPaPlanlegging}
          className="bg-white rounded-2xl flex-1 max-w-[400px] p-3 flex items-center gap-3 hover:bg-muted/30 transition-colors relative"
        >
          <div className="absolute border border-[var(--outline-variant)] inset-0 pointer-events-none rounded-2xl" />
          
          {/* Icon with badge */}
          <div className="relative shrink-0">
            <div className="w-12 h-12 rounded-lg bg-[var(--surface-container-low)] flex items-center justify-center p-2">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24">
                <g>
                  <path d={svgPathsRevisorCard.p15082280} fill="var(--primary)" />
                  <path d={svgPathsRevisorCard.p141e7e00} fill="var(--primary)" />
                  <path d="M14.5 9.5H6.5V11.5H14.5V9.5Z" fill="var(--primary)" />
                  <path d={svgPathsRevisorCard.p1e924700} fill="var(--primary)" />
                  <path d={svgPathsRevisorCard.p3be0780} fill="var(--primary)" />
                </g>
              </svg>
            </div>
            {/* Badge */}
            <div className="absolute -top-1 -right-1 bg-[var(--error)] rounded-full min-w-5 h-5 px-1 flex items-center justify-center">
              <span className="label-xsmall text-[var(--error-foreground)]">{venterPaPlanleggingCount}</span>
            </div>
          </div>

          {/* Text content */}
          <div className="flex-1 flex flex-col items-start gap-0">
            <p className="title-medium text-[var(--foreground)]">Venter på planlegging</p>
            <p className="body-medium text-[var(--muted-foreground)]">Tidspunkt er ikke satt</p>
          </div>

          {/* Arrow icon */}
          <div className="shrink-0 w-6 h-6">
            <svg className="block size-full" fill="none" viewBox="0 0 24 24">
              <path d="M10 17V7L15 12L10 17Z" fill="var(--muted-foreground)" />
            </svg>
          </div>
        </button>
      </div>

      {/* View toggle buttons - Liste and Kalender */}
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

      {/* Calendar View */}
      {viewMode === 'calendar' && (
        <div className="bg-[#f4f4ea] rounded-xl p-6 w-full">
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
        <>
          {/* Date groups and revisjon cards */}
          {Array.from(groupedRevisjoner.entries()).map(([dateKey, revisjoner], groupIndex) => (
            <div key={dateKey} className="flex flex-col w-full" style={{ marginTop: groupIndex === 0 ? 0 : '24px' }}>
              {/* Date header - closer to cards below */}
              <div className="label-medium text-foreground mb-2">
                <p>{dateKey}</p>
              </div>

              {/* Revisjon cards */}
              <div className="flex flex-col gap-4">
                {revisjoner.map((revisjon) => (
                  <RevisjonCard key={revisjon.id} revisjon={revisjon} />
                ))}
              </div>
            </div>
          ))}
        </>
      )}
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
    <div className="bg-background flex flex-col h-full px-10 py-[32px] relative shrink-0 w-[520px] gap-6 overflow-y-auto" data-name="Section 3 - Side panel to-do list">
      {/* Header */}
      <div className="title-large text-foreground">
        <p>Til handling nå</p>
      </div>

      {/* To-do cards */}
      <div className="flex flex-col gap-4 w-full">
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
  );
}

function Section1HomeHeading() {
  return (
    <div className="bg-background h-[160px] relative shrink-0 w-full" data-name="Profile Details">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[32px] items-center px-10 py-[16px] relative size-full">
          {/* Information - Left side */}
          <div className="basis-0 content-stretch flex flex-col grow items-start justify-center min-h-px min-w-px px-0 py-[8px] relative shrink-0">
            {/* User greeting */}
            <div className="content-stretch flex gap-[16px] items-center px-0 py-[8px] relative shrink-0">
              {/* Avatar */}
              <div className="relative shrink-0 size-[40px]">
                <div className="absolute inset-0">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
                    <g>
                      <rect fill="#EFF1E7" height="40" rx="20" width="40" />
                      <g>
                        <path clipRule="evenodd" d={svgPathsProfileDetails.p16400780} fill="#284000" fillRule="evenodd" />
                        <path d={svgPathsProfileDetails.pfd6ae80} fill="#284000" />
                      </g>
                    </g>
                  </svg>
                </div>
              </div>
              
              {/* Welcome text */}
              <div className="headline-small text-foreground">
                <p>Velkommen til revisorprofilen din, Liv Berg</p>
              </div>
            </div>
            
            {/* Button */}
            <div className="content-stretch flex items-center justify-center relative shrink-0">
              <Button variant="secondary">
                Se og rediger revisorsprofil
              </Button>
            </div>
          </div>

          {/* Statistics - Right side */}
          <div className="bg-card content-stretch flex flex-col items-start justify-center overflow-clip pl-0 pr-[16px] py-[8px] relative rounded-xl shrink-0 w-[467px]">
            {/* Stat content */}
            <div className="content-stretch flex flex-col h-[56px] items-center justify-center min-h-[56px] relative shrink-0 w-full">
              <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full">
                <div className="flex flex-row items-center justify-center size-full">
                  <div className="content-stretch flex gap-[16px] items-center justify-center px-[16px] py-[8px] relative size-full">
                    {/* Percent icon */}
                    <div className="content-stretch flex items-center justify-center relative shrink-0">
                      <div className="relative shrink-0 size-[24px]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                          <path d={svgPaths.p37d26b00} fill="var(--foreground)" />
                        </svg>
                      </div>
                    </div>
                    
                    {/* Text content */}
                    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0">
                      <div className="body-large text-foreground w-full">
                        <p>Du gir 30% mindre avvik enn gjennomsitning</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Button */}
            <div className="content-stretch flex items-center justify-center relative shrink-0">
              <Button variant="secondary">
                Se på statistik
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MainContentArea({ onNavigateToTildelteRevisjoner, onNavigateToVenterPaPlanlegging }: Section2Props = {}) {
  return (
    <div className="bg-background content-stretch flex flex-1 items-start justify-start relative w-full h-full overflow-hidden" data-name="Main Content Area">
      {/* Container with max gap between sections */}
      <div className="flex items-start w-full h-full">
        {/* Section 2 - Planned Revisjoner - with constrained width */}
        <div className="h-full" style={{ 
          flexGrow: 1,
          flexShrink: 1,
          flexBasis: 'auto',
          minWidth: 0,
          maxWidth: 'calc(100% - 520px - 32px)' // Total width minus right panel minus gap
        }}>
          <Section2PlanlagteRevisjoner 
            onNavigateToTildelteRevisjoner={onNavigateToTildelteRevisjoner}
            onNavigateToVenterPaPlanlegging={onNavigateToVenterPaPlanlegging}
          />
        </div>

        {/* Gap - fixed at 32px */}
        <div className="shrink-0" style={{ width: '32px' }} />

        {/* Section 3 - To-do list - fixed width */}
        <Section3SidePanelToDoList />
      </div>
    </div>
  );
}

interface ForsidePageProps {
  onNavigateToTildelteRevisjoner?: () => void;
  onNavigateToVenterPaPlanlegging?: () => void;
}

function ForsidePage({ onNavigateToTildelteRevisjoner, onNavigateToVenterPaPlanlegging }: ForsidePageProps = {}) {
  return (
    <div className="bg-background content-stretch flex flex-col items-start relative size-full" data-name="Forside Page">
      <Section1HomeHeading />
      
      {/* Divider between header and content */}
      <div className="w-full h-px bg-border" />
      
      <MainContentArea 
        onNavigateToTildelteRevisjoner={onNavigateToTildelteRevisjoner}
        onNavigateToVenterPaPlanlegging={onNavigateToVenterPaPlanlegging}
      />
    </div>
  );
}

export default ForsidePage;