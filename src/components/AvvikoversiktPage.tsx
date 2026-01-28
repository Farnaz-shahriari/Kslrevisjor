import { Badge } from './ui/badge';
import { AdvancedSearchPanel, SearchFilters } from './AdvancedSearchPanel';
import { FilterChipBar } from './FilterChipBar';
import { formatNorwegianDate } from '../utils/dateFormat';
import { Button } from './ui/button';
import { BottomSheet } from './ui/bottom-sheet';
import { useState, useRef, useEffect } from 'react';
import { Search, AlertTriangle, ChevronLeft, User, Calendar as CalendarIcon, Plus, Edit2 } from 'lucide-react';
import svgPaths from '../imports/svg-8axi0x1eud';
import svgPathsDeviation from '../imports/svg-rj5c6b7gl3';
import { DeviationDetailPanel } from './DeviationDetailPanel';

type TabType = 'apne' | 'tilHandling' | 'besokPlanlagt' | 'lukket';
type SeverityType = 'kritisk' | 'avvik' | 'lite';
type StatusType = 'tidspunkt-foreslatt' | 'besok-planlagt' | 'venter-godkjenning' | 'onsker-fristforlengelse' | 'dokument-levert' | 'avventer-moteforslag' | 'avventer-dokumentasjon';
type ConfirmationMethod = 'dokumentasjon' | 'digitalt-besok' | 'fysisk-besok';

interface RejectedDocument {
  filename: string;
  reason: string;
}

interface Deviation {
  id: string;
  severity: SeverityType;
  foretakName: string;
  checklist: string;
  deadline: Date;
  status: StatusType;
  requiresAction: boolean; // true when revisor needs to do something
  confirmationMethod: ConfirmationMethod;
  rejectedDocuments?: RejectedDocument[]; // Array of rejected documents for this specific avvik
}

interface Foretak {
  id: string;
  name: string;
  status: string;
  requiresAction: boolean;
  deviationCount: number;
}

// Mock data for foretak
const foretakList: Foretak[] = [
  { id: '1', name: 'Solheim Gård', status: '3 avvik til handling', requiresAction: true, deviationCount: 3 },
  { id: '2', name: 'Bjarki Økologiske', status: '5 avvik til handling', requiresAction: true, deviationCount: 5 },
  { id: '3', name: 'Haugen Gård', status: '2 avvik til handling', requiresAction: true, deviationCount: 2 },
  { id: '4', name: 'Nordby Gård', status: '1 avvik', requiresAction: false, deviationCount: 1 },
  { id: '5', name: 'Lund Gård', status: '2 avvik til handling', requiresAction: true, deviationCount: 2 },
  { id: '6', name: 'Fjell Gård', status: '1 avvik', requiresAction: false, deviationCount: 1 },
  { id: '7', name: 'Koll Gård', status: '1 avvik', requiresAction: false, deviationCount: 1 },
  { id: '8', name: 'Rosenlund Gård', status: '2 avvik', requiresAction: false, deviationCount: 2 },
  { id: '9', name: 'Lien Gård', status: '1 avvik', requiresAction: false, deviationCount: 1 },
  { id: '10', name: 'Fjellstad Bruk', status: '4 avvik', requiresAction: false, deviationCount: 4 },
  { id: '11', name: 'Grønhage AS', status: '2 avvik', requiresAction: false, deviationCount: 2 },
  { id: '12', name: 'Naturens Hjerte', status: '2 avvik til handling', requiresAction: true, deviationCount: 2 },
  { id: '13', name: 'EkoSted AS', status: '1 avvik', requiresAction: false, deviationCount: 1 },
  { id: '14', name: 'Oreen Frukt', status: '1 avvik til handling', requiresAction: true, deviationCount: 1 },
  { id: '15', name: 'Haugseter Gård', status: '1 avvik', requiresAction: false, deviationCount: 1 },
  { id: '16', name: 'EcoFarm Norway', status: '2 avvik', requiresAction: false, deviationCount: 2 },
  { id: '17', name: 'Skogsvann Organics', status: '1 avvik til handling', requiresAction: true, deviationCount: 1 },
  { id: '18', name: 'Naturens Høst', status: '2 avvik til handling', requiresAction: true, deviationCount: 2 },
  { id: '19', name: 'Solei Biofarm', status: '1 avvik til handling', requiresAction: true, deviationCount: 1 },
  { id: '20', name: 'Hjemmelalget økologi', status: '1 avvik til handling', requiresAction: true, deviationCount: 1 },
  { id: '21', name: 'Berget Gård', status: '2 avvik', requiresAction: false, deviationCount: 2 },
  { id: '22', name: 'Skog og Mark AS', status: '1 avvik', requiresAction: false, deviationCount: 1 },
  { id: '23', name: 'Sæter Økogård', status: '1 avvik til handling', requiresAction: true, deviationCount: 1 },
  { id: '24', name: 'Viken Landbruk', status: '1 avvik', requiresAction: false, deviationCount: 1 },
  { id: '25', name: 'Fjord og Fjell', status: '2 avvik', requiresAction: false, deviationCount: 2 },
];

// Mock data for deviations - Using real questions from Generelle krav til gården checklist
// Exported for use in other components (e.g., ForsidePage to-do list)
// TODO: In production, this should be managed via shared state (Context/Redux) or backend API
export const allDeviations: Deviation[] = [
  // Action required - Kritisk severity
  { id: '1', severity: 'kritisk', foretakName: 'Solheim Gård', checklist: '1.1.1 – Oversikt over alle driftsmidler du har kjøpt og produkter du har solgt?', deadline: new Date(2025, 2, 15), status: 'tidspunkt-foreslatt', requiresAction: true, confirmationMethod: 'digitalt-besok' },
  { id: '2', severity: 'kritisk', foretakName: 'Bjarki Økologiske', checklist: '1.3.5 – Har du kontrollert gjødsellageret de siste 12 månedene?', deadline: new Date(2025, 2, 20), status: 'onsker-fristforlengelse', requiresAction: true, confirmationMethod: 'fysisk-besok' },
  { id: '3', severity: 'kritisk', foretakName: 'Haugen Gård', checklist: '1.1.2 – En plan for håndtering eller tilbakekalling av helseskadelige produkter?', deadline: new Date(2025, 2, 18), status: 'besok-planlagt', requiresAction: false, confirmationMethod: 'digitalt-besok' },
  
  // Action required - Avvik severity
  { id: '4', severity: 'avvik', foretakName: 'Bjarki Økologiske', checklist: '1.3.2 – Har du spredt husdyrgjødsel kun i perioden 15. februar–1. november?', deadline: new Date(2025, 2, 22), status: 'besok-planlagt', requiresAction: false, confirmationMethod: 'fysisk-besok' },
  { id: '5', severity: 'avvik', foretakName: 'Solheim Gård', checklist: '1.2.1 – Har du en gyldig gjødslingsplan og skiftekart for året?', deadline: new Date(2025, 2, 25), status: 'dokument-levert', requiresAction: true, confirmationMethod: 'dokumentasjon' },
  { id: '6', severity: 'avvik', foretakName: 'Lund Gård', checklist: '1.5.1 – Kan du dokumentere at plantevernmidler kun brukes av autorisert personell?', deadline: new Date(2025, 3, 1), status: 'besok-planlagt', requiresAction: false, confirmationMethod: 'digitalt-besok' },
  { id: '7', severity: 'avvik', foretakName: 'Haugen Gård', checklist: '1.3.6 – Har du nok lagringskapasitet (min. 8 måneder)?', deadline: new Date(2025, 3, 5), status: 'tidspunkt-foreslatt', requiresAction: true, confirmationMethod: 'fysisk-besok' },
  { id: '8', severity: 'avvik', foretakName: 'Bjarki Økologiske', checklist: '1.5.5 – Oppbevares plantevernmidler forsvarlig (avlåst, merket, og iht. etikettkrav)?', deadline: new Date(2025, 3, 8), status: 'dokument-levert', requiresAction: true, confirmationMethod: 'dokumentasjon' },
  { id: '9', severity: 'avvik', foretakName: 'Naturens Hjerte', checklist: '1.6.1 Følger du opplysningsplikten for meldepliktige skadegjørere og floghavre?', deadline: new Date(2025, 3, 10), status: 'besok-planlagt', requiresAction: false, confirmationMethod: 'digitalt-besok' },
  { id: '10', severity: 'avvik', foretakName: 'Lund Gård', checklist: '1.2.2 – Noterer du gjødselmengdene som brukes?', deadline: new Date(2025, 3, 12), status: 'onsker-fristforlengelse', requiresAction: true, confirmationMethod: 'fysisk-besok' },
  { id: '11', severity: 'avvik', foretakName: 'Oreen Frukt', checklist: '1.5.4 – Oppfyller du krav til integrert plantevern, vannmiljøbeskyttelse og journalføring?', deadline: new Date(2025, 3, 15), status: 'avventer-dokumentasjon', requiresAction: false, confirmationMethod: 'dokumentasjon' },
  { id: '12', severity: 'avvik', foretakName: 'Skogsvann Organics', checklist: '1.3.4 – Ved spredning på åpen åker, moldes gjødsla ned innen 18 timer?', deadline: new Date(2025, 3, 18), status: 'besok-planlagt', requiresAction: false, confirmationMethod: 'digitalt-besok' },
  { id: '13', severity: 'avvik', foretakName: 'Bjarki Økologiske', checklist: '1.6.3 – Har du rutiner for bekjempelse og forebygging av floghavre?', deadline: new Date(2025, 3, 20), status: 'dokument-levert', requiresAction: true, confirmationMethod: 'dokumentasjon' },
  { id: '14', severity: 'avvik', foretakName: 'Naturens Hjerte', checklist: '1.1.3 – Arkivert analyseresultater, vedtak og tilbakemeldinger fra myndigheter?', deadline: new Date(2025, 3, 22), status: 'besok-planlagt', requiresAction: false, confirmationMethod: 'fysisk-besok' },
  
  // Action required - Lite severity
  { id: '15', severity: 'lite', foretakName: 'Naturens Høst', checklist: '1.3.8 – Samler du opp gjødsel fra luftegårder og utendørs talle minst én gang årlig?', deadline: new Date(2025, 3, 25), status: 'besok-planlagt', requiresAction: false, confirmationMethod: 'digitalt-besok' },
  { id: '16', severity: 'lite', foretakName: 'Solei Biofarm', checklist: '1.6.2 – Informerer du utleier/leietaker om forekomst av slike skadegjørere?', deadline: new Date(2025, 3, 28), status: 'dokument-levert', requiresAction: true, confirmationMethod: 'dokumentasjon' },
  { id: '17', severity: 'lite', foretakName: 'Hjemmelalget økologi', checklist: '1.5.2 – Brukes plantevernmidlene i samsvar med godkjent etikett?', deadline: new Date(2025, 4, 1), status: 'besok-planlagt', requiresAction: false, confirmationMethod: 'fysisk-besok' },
  { id: '18', severity: 'lite', foretakName: 'Naturens Høst', checklist: '1.3.1 – Er husdyrgjødsel kun spredt på dyrket jord eller godkjent innmarksbeite?', deadline: new Date(2025, 4, 5), status: 'avventer-dokumentasjon', requiresAction: false, confirmationMethod: 'dokumentasjon' },
  { id: '19', severity: 'lite', foretakName: 'Sæter Økogård', checklist: '1.1.4 – Kontrollert og sertifisert utstyr i tråd med forskrifter?', deadline: new Date(2025, 4, 8), status: 'tidspunkt-foreslatt', requiresAction: true, confirmationMethod: 'digitalt-besok' },
  
  // No action required - Kritisk severity
  { id: '20', severity: 'kritisk', foretakName: 'Nordby Gård', checklist: '1.3.7 – Er husdyrgjødsel lagret på bakken skjermet mot overflatevann?', deadline: new Date(2025, 2, 10), status: 'avventer-dokumentasjon', requiresAction: false, confirmationMethod: 'dokumentasjon' },
  { id: '21', severity: 'kritisk', foretakName: 'Fjellstad Bruk', checklist: '1.5.3 – Tilpasses, rengjøres og vedlikeholdes spredeutstyret?', deadline: new Date(2025, 2, 12), status: 'avventer-dokumentasjon', requiresAction: false, confirmationMethod: 'dokumentasjon' },
  { id: '22', severity: 'kritisk', foretakName: 'Fjellstad Bruk', checklist: '1.3.3 – Dersom gjødsel spres uten nedmolding/nedfelling, gjøres dette innen 1. september?', deadline: new Date(2025, 2, 14), status: 'avventer-dokumentasjon', requiresAction: false, confirmationMethod: 'dokumentasjon' },
  
  // No action required - Avvik severity
  { id: '23', severity: 'avvik', foretakName: 'Fjell Gård', checklist: '1.5.6 – Merker du områder behandlet med plantevernmidler som er åpne for allmenn ferdsel?', deadline: new Date(2025, 2, 16), status: 'avventer-moteforslag', requiresAction: false, confirmationMethod: 'digitalt-besok' },
  { id: '24', severity: 'avvik', foretakName: 'Koll Gård', checklist: '1.5.7 – Er spredeutstyret funksjonstestet i henhold til krav?', deadline: new Date(2025, 2, 18), status: 'avventer-dokumentasjon', requiresAction: false, confirmationMethod: 'dokumentasjon' },
  { id: '25', severity: 'avvik', foretakName: 'Rosenlund Gård', checklist: '1.5.8 – Overholder du behandlingsfristen ved bruk av plantevernmidler?', deadline: new Date(2025, 2, 20), status: 'avventer-dokumentasjon', requiresAction: false, confirmationMethod: 'dokumentasjon' },
  { id: '26', severity: 'avvik', foretakName: 'Lien Gård', checklist: '1.4.1 – Følger du gjeldende regelverk og bruksbegrensninger for slike materialer?', deadline: new Date(2025, 2, 22), status: 'avventer-moteforslag', requiresAction: false, confirmationMethod: 'fysisk-besok' },
  { id: '27', severity: 'avvik', foretakName: 'Fjellstad Bruk', checklist: '1.4.2 – Har du meldt fra til kommunen før bruk av avløpsslam?', deadline: new Date(2025, 2, 24), status: 'avventer-dokumentasjon', requiresAction: false, confirmationMethod: 'dokumentasjon' },
  { id: '28', severity: 'avvik', foretakName: 'Grønhage AS', checklist: '1.6.4 – Har du kontrollert og eventuelt bekjempet hønsehirse?', deadline: new Date(2025, 2, 26), status: 'avventer-dokumentasjon', requiresAction: false, confirmationMethod: 'dokumentasjon' },
  { id: '29', severity: 'avvik', foretakName: 'EkoSted AS', checklist: '1.1.1 – Oversikt over alle driftsmidler du har kjøpt og produkter du har solgt?', deadline: new Date(2025, 2, 28), status: 'avventer-dokumentasjon', requiresAction: false, confirmationMethod: 'dokumentasjon' },
  { id: '30', severity: 'avvik', foretakName: 'Haugseter Gård', checklist: '1.2.1 – Har du en gyldig gjødslingsplan og skiftekart for året?', deadline: new Date(2025, 3, 2), status: 'avventer-dokumentasjon', requiresAction: false, confirmationMethod: 'dokumentasjon' },
  { id: '31', severity: 'avvik', foretakName: 'EcoFarm Norway', checklist: '1.3.1 – Er husdyrgjødsel kun spredt på dyrket jord eller godkjent innmarksbeite?', deadline: new Date(2025, 3, 4), status: 'avventer-moteforslag', requiresAction: false, confirmationMethod: 'digitalt-besok' },
  { id: '32', severity: 'avvik', foretakName: 'Grønhage AS', checklist: '1.3.2 – Har du spredt husdyrgjødsel kun i perioden 15. februar–1. november?', deadline: new Date(2025, 3, 6), status: 'avventer-dokumentasjon', requiresAction: false, confirmationMethod: 'dokumentasjon' },
  { id: '33', severity: 'avvik', foretakName: 'Rosenlund Gård', checklist: '1.5.1 – Kan du dokumentere at plantevernmidler kun brukes av autorisert personell?', deadline: new Date(2025, 3, 8), status: 'avventer-dokumentasjon', requiresAction: false, confirmationMethod: 'dokumentasjon' },
  { id: '34', severity: 'avvik', foretakName: 'EcoFarm Norway', checklist: '1.5.2 – Brukes plantevernmidlene i samsvar med godkjent etikett?', deadline: new Date(2025, 3, 10), status: 'avventer-moteforslag', requiresAction: false, confirmationMethod: 'fysisk-besok' },
  
  // No action required - Lite severity
  { id: '35', severity: 'lite', foretakName: 'Fjellstad Bruk', checklist: '1.1.3 – Arkivert analyseresultater, vedtak og tilbakemeldinger fra myndigheter?', deadline: new Date(2025, 3, 12), status: 'avventer-dokumentasjon', requiresAction: false, confirmationMethod: 'dokumentasjon' },
  { id: '36', severity: 'lite', foretakName: 'Fjellstad Bruk', checklist: '1.1.4 – Kontrollert og sertifisert utstyr i tråd med forskrifter?', deadline: new Date(2025, 3, 14), status: 'avventer-dokumentasjon', requiresAction: false, confirmationMethod: 'dokumentasjon' },
  { id: '37', severity: 'lite', foretakName: 'Berget Gård', checklist: '1.2.2 – Noterer du gjødselmengdene som brukes?', deadline: new Date(2025, 3, 16), status: 'avventer-dokumentasjon', requiresAction: false, confirmationMethod: 'dokumentasjon' },
  { id: '38', severity: 'lite', foretakName: 'Skog og Mark AS', checklist: '1.3.4 – Ved spredning på åpen åker, moldes gjødsla ned innen 18 timer?', deadline: new Date(2025, 3, 18), status: 'avventer-dokumentasjon', requiresAction: false, confirmationMethod: 'dokumentasjon' },
  { id: '39', severity: 'lite', foretakName: 'Viken Landbruk', checklist: '1.3.6 – Har du nok lagringskapasitet (min. 8 måneder)?', deadline: new Date(2025, 3, 20), status: 'avventer-moteforslag', requiresAction: false, confirmationMethod: 'fysisk-besok' },
  { id: '40', severity: 'lite', foretakName: 'Berget Gård', checklist: '1.3.7 – Er husdyrgjødsel lagret på bakken skjermet mot overflatevann?', deadline: new Date(2025, 3, 22), status: 'avventer-dokumentasjon', requiresAction: false, confirmationMethod: 'dokumentasjon' },
  { id: '41', severity: 'lite', foretakName: 'Fjord og Fjell', checklist: '1.3.8 – Samler du opp gjødsel fra luftegårder og utendørs talle minst én gang årlig?', deadline: new Date(2025, 3, 24), status: 'avventer-dokumentasjon', requiresAction: false, confirmationMethod: 'dokumentasjon' },
  { id: '42', severity: 'lite', foretakName: 'Fjord og Fjell', checklist: '1.5.3 – Tilpasses, rengjøres og vedlikeholdes spredeutstyret?', deadline: new Date(2025, 3, 26), status: 'avventer-dokumentasjon', requiresAction: false, confirmationMethod: 'dokumentasjon' },
  
  // Additional deviations to reach 50+
  { id: '43', severity: 'avvik', foretakName: 'Solheim Gård', checklist: '1.6.2 – Informerer du utleier/leietaker om forekomst av slike skadegjørere?', deadline: new Date(2025, 4, 1), status: 'dokument-levert', requiresAction: true, confirmationMethod: 'dokumentasjon' },
  { id: '44', severity: 'lite', foretakName: 'Nordby Gård', checklist: '1.5.4 – Oppfyller du krav til integrert plantevern og vannmiljøbeskyttelse?', deadline: new Date(2025, 4, 3), status: 'avventer-dokumentasjon', requiresAction: false, confirmationMethod: 'dokumentasjon' },
  { id: '45', severity: 'avvik', foretakName: 'Haugen Gård', checklist: '1.5.5 – Oppbevares plantevernmidler forsvarlig (avlåst, merket)?', deadline: new Date(2025, 4, 5), status: 'dokument-levert', requiresAction: true, confirmationMethod: 'dokumentasjon' },
  { id: '46', severity: 'lite', foretakName: 'Koll Gård', checklist: '1.6.3 – Har du rutiner for bekjempelse og forebygging av floghavre?', deadline: new Date(2025, 4, 7), status: 'avventer-dokumentasjon', requiresAction: false, confirmationMethod: 'dokumentasjon' },
  { id: '47', severity: 'avvik', foretakName: 'Lund Gård', checklist: '1.3.3 – Dersom gjødsel spres uten nedmolding/nedfelling?', deadline: new Date(2025, 4, 9), status: 'dokument-levert', requiresAction: true, confirmationMethod: 'dokumentasjon' },
  { id: '48', severity: 'lite', foretakName: 'Lien Gård', checklist: '1.1.2 – En plan for håndtering eller tilbakekalling av helseskadelige produkter?', deadline: new Date(2025, 4, 11), status: 'avventer-moteforslag', requiresAction: false, confirmationMethod: 'digitalt-besok' },
  { id: '49', severity: 'avvik', foretakName: 'Bjarki Økologiske', checklist: '1.3.5 – Har du kontrollert gjødsellageret de siste 12 månedene?', deadline: new Date(2025, 4, 13), status: 'dokument-levert', requiresAction: true, confirmationMethod: 'dokumentasjon' },
  { id: '50', severity: 'lite', foretakName: 'EkoSted AS', checklist: '1.5.6 – Merker du områder behandlet med plantevernmidler?', deadline: new Date(2025, 4, 15), status: 'avventer-dokumentasjon', requiresAction: false, confirmationMethod: 'dokumentasjon' },
  { id: '51', severity: 'avvik', foretakName: 'Naturens Hjerte', checklist: '1.5.7 – Er spredeutstyret funksjonstestet i henhold til krav?', deadline: new Date(2025, 4, 17), status: 'tidspunkt-foreslatt', requiresAction: true, confirmationMethod: 'digitalt-besok' },
  { id: '52', severity: 'lite', foretakName: 'Skog og Mark AS', checklist: '1.5.8 – Overholder du behandlingsfristen ved bruk av plantevernmidler?', deadline: new Date(2025, 4, 19), status: 'avventer-moteforslag', requiresAction: false, confirmationMethod: 'fysisk-besok' },
  { id: '53', severity: 'avvik', foretakName: 'Oreen Frukt', checklist: '1.4.1 – Følger du gjeldende regelverk og bruksbegrensninger?', deadline: new Date(2025, 4, 21), status: 'dokument-levert', requiresAction: true, confirmationMethod: 'dokumentasjon' },
  { id: '54', severity: 'lite', foretakName: 'Viken Landbruk', checklist: '1.4.2 – Har du meldt fra til kommunen før bruk av avløpsslam?', deadline: new Date(2025, 4, 23), status: 'avventer-dokumentasjon', requiresAction: false, confirmationMethod: 'dokumentasjon' },
  { id: '55', severity: 'avvik', foretakName: 'Skogsvann Organics', checklist: '1.6.4 – Har du kontrollert og eventuelt bekjempet hønsehirse?', deadline: new Date(2025, 4, 25), status: 'dokument-levert', requiresAction: true, confirmationMethod: 'dokumentasjon' },
];

function SeverityBadge({ severity }: { severity: SeverityType }) {
  const config = {
    kritisk: {
      bg: '#ffdad6',
      text: '#410002',
      icon: AlertTriangle,
      label: 'Kritisk',
    },
    avvik: {
      bg: '#ffddcc',
      text: '#4a2800',
      icon: AlertTriangle,
      label: 'Avvik',
    },
    lite: {
      bg: '#ffedd0',
      text: '#3d2e00',
      icon: AlertTriangle,
      label: 'Lite',
    },
  };

  const { bg, text, icon: Icon, label } = config[severity];

  return (
    <div 
      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg cursor-default" 
      style={{ backgroundColor: bg }}
    >
      <Icon className="w-4 h-4" style={{ color: text }} />
      <span className="label-medium" style={{ color: text }}>
        {label}
      </span>
    </div>
  );
}

function getConfirmationMethodLabel(method: ConfirmationMethod): string {
  const labels: Record<ConfirmationMethod, string> = {
    'dokumentasjon': 'Dokumentasjon',
    'digitalt-besok': 'Digitalt besøk',
    'fysisk-besok': 'Fysisk besøk'
  };
  return labels[method];
}

// Helper function to get confirmation method based on ID if not set
function getConfirmationMethod(deviation: Deviation): ConfirmationMethod {
  if (deviation.confirmationMethod) {
    return deviation.confirmationMethod;
  }
  // Fallback: determine based on ID
  const id = parseInt(deviation.id);
  const methods: ConfirmationMethod[] = ['dokumentasjon', 'digitalt-besok', 'fysisk-besok'];
  return methods[id % 3];
}

function StatusBadge({ status, requiresAction }: { status: StatusType; requiresAction: boolean }) {
  const config = {
    'tidspunkt-foreslatt': {
      label: 'Tidspunkt foreslått',
    },
    'besok-planlagt': {
      label: 'Besøk planlagt',
    },
    'venter-godkjenning': {
      label: 'Venter godkjenning',
    },
    'onsker-fristforlengelse': {
      label: 'Ønsker fristforlengelse',
    },
    'dokument-levert': {
      label: 'Dokument levert',
    },
    'avventer-moteforslag': {
      label: 'Avventer møteforslag',
    },
    'avventer-dokumentasjon': {
      label: 'Avventer dokumentasjon',
    },
  };

  const { label } = config[status];

  if (requiresAction) {
    return (
      <div className="flex flex-row gap-2 items-center">
        <div className="rounded-full bg-[var(--error)] w-2 h-2 shrink-0" />
        <div className="label-medium text-foreground font-semibold">
          {label}
        </div>
      </div>
    );
  }

  return (
    <div className="body-medium text-foreground">
      {label}
    </div>
  );
}

export function AvvikoversiktPage() {
  const [activeTab, setActiveTab] = useState<TabType>('apne');
  const [selectedForetakId, setSelectedForetakId] = useState<string | null>('alle');
  const [showingMenu, setShowingMenu] = useState(true);
  const [selectedDeviationId, setSelectedDeviationId] = useState<string | null>(null);
  const [isDetailBottomSheetOpen, setIsDetailBottomSheetOpen] = useState(false);
  const [panelWidth, setPanelWidth] = useState(520);
  const [isResizing, setIsResizing] = useState(false);
  const [showResizeHandle, setShowResizeHandle] = useState(false);
  
  // Manage deviations as state so they can be updated
  const [deviations, setDeviations] = useState<Deviation[]>(allDeviations);
  
  // Track initial sort order - only updated on tab/foretak change, not on status updates
  const [sortedDeviationIds, setSortedDeviationIds] = useState<string[]>([]);
  
  const [searchFilters, setSearchFilters] = useState<SearchFilters>({
    severities: [],
    confirmationMethods: [],
    dateRange: { from: null, to: null },
    statuses: [],
    foretak: []
  });

  // Handler to update deviation status
  const handleDeviationStatusUpdate = (deviationId: string, newStatus: StatusType) => {
    setDeviations(prevDeviations => 
      prevDeviations.map(dev => 
        dev.id === deviationId 
          ? { ...dev, status: newStatus, requiresAction: newStatus === 'tidspunkt-foreslatt' || newStatus === 'dokument-levert' || newStatus === 'onsker-fristforlengelse' }
          : dev
      )
    );
  };

  // Handler to add rejected documents to a specific deviation
  const handleAddRejectedDocuments = (deviationId: string, documents: RejectedDocument[]) => {
    setDeviations(prevDeviations => 
      prevDeviations.map(dev => 
        dev.id === deviationId 
          ? { ...dev, rejectedDocuments: [...(dev.rejectedDocuments || []), ...documents] }
          : dev
      )
    );
  };

  // Severity order for sorting (lower number = higher priority)
  const severityOrder: Record<SeverityType, number> = {
    'kritisk': 1,
    'avvik': 2,
    'lite': 3,
  };

  // Filter deviations by tab
  const filteredDeviations = deviations.filter(deviation => {
    if (activeTab === 'apne') return true; // All deviations
    if (activeTab === 'tilHandling') return deviation.requiresAction;
    if (activeTab === 'besokPlanlagt') return deviation.status === 'besok-planlagt';
    return false; // lukket - no mock data for closed deviations
  });

  // Compute initial sort order only when tab or foretak changes (not on status updates)
  useEffect(() => {
    const toSort = selectedForetakId === 'alle' 
      ? filteredDeviations 
      : filteredDeviations.filter(d => d.foretakName === foretakList.find(f => f.id === selectedForetakId)?.name);
    
    // Sort by requiresAction first, then by severity
    const sorted = [...toSort].sort((a, b) => {
      // First, sort by requiresAction (action required comes first)
      if (a.requiresAction !== b.requiresAction) {
        return a.requiresAction ? -1 : 1;
      }
      
      // Then, sort by severity (kritisk > avvik > lite)
      return severityOrder[a.severity] - severityOrder[b.severity];
    });
    
    // Save the sorted IDs
    setSortedDeviationIds(sorted.map(d => d.id));
  }, [activeTab, selectedForetakId]); // Only re-sort when tab or foretak changes

  // Apply the saved sort order to displayed deviations
  const displayedDeviations = (selectedForetakId === 'alle' 
    ? filteredDeviations 
    : filteredDeviations.filter(d => d.foretakName === foretakList.find(f => f.id === selectedForetakId)?.name)
  )
  // Apply search filters
  .filter(dev => {
    // Filter by severity
    if (searchFilters.severities.length > 0 && !searchFilters.severities.includes(dev.severity)) {
      return false;
    }
    
    // Filter by status
    if (searchFilters.statuses.length > 0 && !searchFilters.statuses.includes(dev.status)) {
      return false;
    }
    
    // Filter by date range
    if (searchFilters.dateRange.from && dev.deadline < searchFilters.dateRange.from) {
      return false;
    }
    if (searchFilters.dateRange.to && dev.deadline > searchFilters.dateRange.to) {
      return false;
    }
    
    // Filter by foretak
    if (searchFilters.foretak.length >0 && !searchFilters.foretak.includes(dev.foretakName)) {
      return false;
    }
    
    return true;
  })
  // Sort by the saved order instead of computing it dynamically
  .sort((a, b) => {
    const indexA = sortedDeviationIds.indexOf(a.id);
    const indexB = sortedDeviationIds.indexOf(b.id);
    
    // If either ID is not in the sorted list, put it at the end
    if (indexA === -1 && indexB === -1) return 0;
    if (indexA === -1) return 1;
    if (indexB === -1) return -1;
    
    return indexA - indexB;
  });

  const handleForetakClick = (foretakId: string) => {
    setSelectedForetakId(foretakId);
    // On mobile, navigate to table view
    if (window.innerWidth < 1400) {
      setShowingMenu(false);
    }
  };

  const handleBackToMenu = () => {
    setShowingMenu(true);
  };

  const handleRemoveFilter = (type: 'severity' | 'status' | 'foretak', value: string) => {
    if (type === 'severity') {
      setSearchFilters(prev => ({
        ...prev,
        severities: prev.severities.filter(s => s !== value)
      }));
    } else if (type === 'status') {
      setSearchFilters(prev => ({
        ...prev,
        statuses: prev.statuses.filter(s => s !== value)
      }));
    } else if (type === 'foretak') {
      setSearchFilters(prev => ({
        ...prev,
        foretak: prev.foretak.filter(f => f !== value)
      }));
    }
  };

  const handleClearAllFilters = () => {
    setSearchFilters({
      severities: [],
      confirmationMethods: [],
      dateRange: { from: null, to: null },
      statuses: [],
      foretak: []
    });
  };

  return (
    <div className="flex h-full w-full overflow-hidden flex-col bg-background">
      {/* Header with title and tabs */}
      <div className="flex flex-col border-b border-[var(--border)] bg-background">
        {/* Title */}
        <div className="px-6 pt-6 pb-4">
          <h2 className="headline-small text-foreground">Avvikoversikt</h2>
        </div>

        {/* Tabs */}
        <div className="flex gap-1 px-6">
          <button
            onClick={() => setActiveTab('apne')}
            className={`px-4 py-3 label-large transition-colors relative ${
              activeTab === 'apne'
                ? 'text-primary'
                : 'text-foreground hover:bg-muted'
            }`}
          >
            Åpne avvik
            {activeTab === 'apne' && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-t-full" />
            )}
          </button>
          <button
            onClick={() => setActiveTab('tilHandling')}
            className={`px-4 py-3 label-large transition-colors relative ${
              activeTab === 'tilHandling'
                ? 'text-primary'
                : 'text-foreground hover:bg-muted'
            }`}
          >
            Til handling nå
            {activeTab === 'tilHandling' && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-t-full" />
            )}
          </button>
          <button
            onClick={() => setActiveTab('besokPlanlagt')}
            className={`px-4 py-3 label-large transition-colors relative ${
              activeTab === 'besokPlanlagt'
                ? 'text-primary'
                : 'text-foreground hover:bg-muted'
            }`}
          >
            Besøk planlagt
            {activeTab === 'besokPlanlagt' && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-t-full" />
            )}
          </button>
          <button
            onClick={() => setActiveTab('lukket')}
            className={`px-4 py-3 label-large transition-colors relative ${
              activeTab === 'lukket'
                ? 'text-primary'
                : 'text-foreground hover:bg-muted'
            }`}
          >
            Lukket avvik
            {activeTab === 'lukket' && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-t-full" />
            )}
          </button>
        </div>
      </div>

      {/* Main content area with advanced search and table */}
      <div className="flex flex-1 overflow-hidden">
        {/* MOBILE/TABLET: Advanced Search - Shows ONLY when showingMenu is true */}
        {showingMenu && (
          <div className="min-[1400px]:hidden w-full h-full bg-background overflow-hidden">
            <div className="flex flex-col h-full">
              <div className="flex-1 overflow-y-auto">
                <AdvancedSearchPanel 
                  onBack={handleBackToMenu} 
                  allDeviations={filteredDeviations}
                  onFilterChange={setSearchFilters}
                  currentFilters={searchFilters}
                />
              </div>
              
              {/* Button to see results */}
              <div className="p-6 border-t border-[var(--border)] bg-background">
                <Button 
                  onClick={() => setShowingMenu(false)}
                  className="w-full"
                >
                  Se resultater ({displayedDeviations.length})
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* DESKTOP: Advanced Search - Always visible */}
        <div className="max-[1400px]:hidden w-[320px] h-full flex flex-col border-r border-[var(--border)] bg-background overflow-hidden">
          <AdvancedSearchPanel 
            onBack={() => {
              // On desktop, reset filters on back
              handleClearAllFilters();
            }} 
            allDeviations={filteredDeviations}
            onFilterChange={setSearchFilters}
            currentFilters={searchFilters}
          />
        </div>

        {/* MOBILE/TABLET & DESKTOP: Table Panel */}
        <div className={`flex-1 h-full flex-col ${showingMenu ? 'max-[1400px]:hidden' : 'max-[1400px]:flex'} min-[1400px]:flex max-[1400px]:w-full ${ selectedDeviationId ? 'max-[1400px]:flex' : ''}`}
          style={{ width: selectedDeviationId ? `calc(100% - ${panelWidth}px)` : '100%' }}
        >
          {/* Back button - visible only on mobile/tablet */}
          {!showingMenu && (
            <div className="px-6 pt-4 pb-2 min-[1400px]:hidden border-b border-[var(--border)]">
              <button
                onClick={handleBackToMenu}
                className="flex items-center gap-2 label-large text-foreground hover:opacity-70 transition-opacity"
                aria-label="Tilbake til meny"
              >
                <ChevronLeft className="w-5 h-5" />
                Tilbake
              </button>
            </div>
          )}

          {/* Table content */}
          <div className="flex-1 overflow-auto bg-background flex flex-col">
            {/* Filter chip bar - only shows when filters are active */}
            <FilterChipBar 
              filters={searchFilters}
              onRemoveFilter={handleRemoveFilter}
              onClearAll={handleClearAllFilters}
              resultCount={displayedDeviations.length}
            />
            
            <div className="flex-1 overflow-auto">
              <table className="w-full">
                <thead className="bg-surface-container-low sticky top-0 z-10">
                  <tr className="border-b border-[var(--border)]">
                    <th className="px-6 py-3 text-left bg-surface-container-low">
                      <span className="label-medium text-foreground">Avvik Type</span>
                    </th>
                    <th className="px-6 py-3 text-left bg-surface-container-low">
                      <span className="label-medium text-foreground">Produsent</span>
                    </th>
                    <th className="px-6 py-3 text-left bg-surface-container-low max-[900px]:hidden">
                      <span className="label-medium text-foreground">Checklist poeng</span>
                    </th>
                    <th className="px-6 py-3 text-left bg-surface-container-low max-[900px]:hidden">
                      <span className="label-medium text-foreground">Oppfølging</span>
                    </th>
                    <th className="px-6 py-3 text-left bg-surface-container-low">
                      <span className="label-medium text-foreground">Status</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {displayedDeviations.map((deviation) => (
                    <tr
                      key={deviation.id}
                      onClick={() => {
                        setSelectedDeviationId(deviation.id);
                        // On mobile, open bottom sheet
                        if (window.innerWidth < 1400) {
                          setIsDetailBottomSheetOpen(true);
                        }
                      }}
                      className={`border-b border-[var(--border)] hover:bg-muted cursor-pointer transition-colors ${
                        selectedDeviationId === deviation.id ? 'bg-secondary-container' : ''
                      }`}
                    >
                      <td className="px-6 py-4">
                        <SeverityBadge severity={deviation.severity} />
                      </td>
                      <td className="px-6 py-4">
                        <span className="body-medium text-foreground">{deviation.foretakName}</span>
                      </td>
                      <td className="px-6 py-4 max-[900px]:hidden">
                        <span className="body-medium text-foreground">{deviation.checklist}</span>
                      </td>
                      <td className="px-6 py-4 max-[900px]:hidden">
                        <div className="flex flex-col gap-0.5">
                          <span className="body-medium text-foreground">{getConfirmationMethodLabel(getConfirmationMethod(deviation))}</span>
                          <span className="body-small text-muted-foreground">Frist: {formatNorwegianDate(deviation.deadline)}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <StatusBadge status={deviation.status} requiresAction={deviation.requiresAction} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {/* Empty state */}
              {displayedDeviations.length === 0 && (
                <div className="flex items-center justify-center h-64">
                  <p className="body-large text-muted-foreground">Ingen avvik å vise</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Resize Handle - Desktop only, visible when deviation is selected */}
        {selectedDeviationId && (
          <div
            className="max-[1400px]:hidden relative w-1 bg-border cursor-col-resize hover:bg-primary transition-colors flex-shrink-0"
            onMouseEnter={() => setShowResizeHandle(true)}
            onMouseLeave={() => !isResizing && setShowResizeHandle(false)}
          >
            {showResizeHandle && (
              <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-1 bg-primary" />
            )}
          </div>
        )}

        {/* DESKTOP: Detail Panel - Shows selected deviation */}
        {selectedDeviationId && (
          <div 
            className="max-[1400px]:hidden h-full bg-background overflow-hidden flex flex-col"
            style={{ width: `${panelWidth}px` }}
          >
            <DeviationDetailPanel 
              deviation={deviations.find(d => d.id === selectedDeviationId)!} 
              onStatusUpdate={handleDeviationStatusUpdate}
              onAddRejectedDocuments={handleAddRejectedDocuments}
            />
          </div>
        )}
      </div>

      {/* Detail Bottom Sheet */}
      <BottomSheet
        isOpen={isDetailBottomSheetOpen}
        onClose={() => setIsDetailBottomSheetOpen(false)}
        title="Avvikdetaljer"
        maxHeight={90}
      >
        <div className="flex flex-col h-full">
          <div className="flex-1 overflow-y-auto">
            {selectedDeviationId && (
              <DeviationDetailPanel 
                deviation={deviations.find(d => d.id === selectedDeviationId)!} 
                onStatusUpdate={handleDeviationStatusUpdate}
                onAddRejectedDocuments={handleAddRejectedDocuments}
              />
            )}
          </div>
        </div>
      </BottomSheet>
    </div>
  );
}