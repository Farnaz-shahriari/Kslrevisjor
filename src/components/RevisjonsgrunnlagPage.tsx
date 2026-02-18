import { useState, useEffect, useMemo } from 'react';
import { ChevronDown, ChevronLeft, ChevronRight, Plus, Check, RefreshCw, Building2 } from 'lucide-react';
import { OverlayScrollContainer } from './OverlayScrollContainer';
import { questionsData } from '../data/questions';
import { ArrowLeft } from 'lucide-react';
import { Sheet, SheetContent, SheetTitle, SheetDescription } from './ui/sheet';
import * as VisuallyHidden from '@radix-ui/react-visually-hidden';
import svgPathsRevisjonCard from "../imports/svg-es1yhnytnq";
import { ForetakHistorikkView } from './ForetakHistorikkView';
import { DividerWithSubtitle } from './ui/divider-with-subtitle';
import { imgVector7 } from '../imports/svg-djl4p';
import { RevisjonsgrunnlagQuestionDetailPanel } from './RevisjonsgrunnlagQuestionDetailPanel';

// Mock data for checklists
const checklists = [
  { id: '1', name: 'Generelle krav til gården', icon: '1' },
  { id: '10', name: 'Helse, miljø og sikkerhet', icon: '10' },
  { id: '15', name: 'Grovfôr, korn, frø, olje- og belgvekster', icon: '15' },
  { id: '30', name: 'Drøvtyggere - generell', icon: '30' },
  { id: '32', name: 'Småfe', icon: '32' },
  { id: 'KSL', name: 'overordnet spørsmål-Overordnede spørsmål for revisor', icon: 'KSL' },
];

// Mock data for questions in the selected checklist
const questionData = [
  // 1.1 - OVERSIKT OVER DOKUMENTASJON, ANALYSERESULTATER OG SERTIFSERINGER
  {
    id: '1.1',
    text: '1.1 OVERSIKT OVER DOKUMENTASJON, ANALYSERESULTATER OG SERTIFSERINGER',
    isGroup: true,
    previousDeviation: null,
    companyAnswer: null,
    partOfBasis: null,
  },
  {
    id: '1.1.1',
    text: '1.1.1 – Oversikt over alle driftsmidler du har kjøpt og produkter du har solgt?',
    isGroup: false,
    previousDeviation: 'Stort avvik',
    companyAnswer: 'Ja (Fil)',
    partOfBasis: 'added',
  },
  {
    id: '1.1.2',
    text: '1.1.2 – En plan for håndtering eller tilbakekalling av helseskadelige produkter, inkludert varsling til Mattilsynet og varemottaker?',
    isGroup: false,
    previousDeviation: 'Lite avvik',
    companyAnswer: 'Nei (egen avvik)',
    partOfBasis: 'added',
  },
  {
    id: '1.1.3',
    text: '1.1.3 – Arkivert analyseresultater, vedtak og tilbakemeldinger fra varemottaker og myndigheter?',
    isGroup: false,
    previousDeviation: null,
    companyAnswer: 'Ja',
    partOfBasis: 'added',
  },
  {
    id: '1.1.4',
    text: '1.1.4 – Kontrollert og sertifisert utstyr i tråd med forskrifter?',
    isGroup: false,
    previousDeviation: null,
    companyAnswer: 'Ja',
    partOfBasis: 'added',
  },

  // 1.2 - GJØDSLINGSPLAN OG JORDPRØVER
  {
    id: '1.2',
    text: '1.2 Gjødslingsplan og jordprøver',
    isGroup: true,
    previousDeviation: null,
    companyAnswer: null,
    partOfBasis: null,
  },
  {
    id: '1.2.1',
    text: '1.2.1 – Har du en gyldig gjødslingsplan og skiftekart for året, basert på representative jordprøver?',
    isGroup: false,
    previousDeviation: null,
    companyAnswer: 'Ja',
    partOfBasis: 'focus',
  },
  {
    id: '1.2.2',
    text: '1.2.2 – Noterer du gjødselmengdene som brukes?',
    isGroup: false,
    previousDeviation: null,
    companyAnswer: 'Ja',
    partOfBasis: 'focus',
  },

  // 1.3 - LAGRING OG BRUK AV HUSDYRGJØDSEL
  {
    id: '1.3',
    text: '1.3 Lagring og bruk av husdyrgjødsel',
    isGroup: true,
    previousDeviation: null,
    companyAnswer: null,
    partOfBasis: null,
  },
  {
    id: '1.3.1',
    text: '1.3.1 – Er husdyrgjødsel kun spredt på dyrket jord eller godkjent innmarksbeite?',
    isGroup: false,
    previousDeviation: null,
    companyAnswer: 'Ja',
    partOfBasis: 'added',
  },
  {
    id: '1.3.2',
    text: '1.3.2 – Har du spredt husdyrgjødsel kun i perioden 15. februar–1. november, og på snø- og frostfri mark?',
    isGroup: false,
    previousDeviation: null,
    companyAnswer: 'Ja',
    partOfBasis: 'added',
  },
  {
    id: '1.3.3',
    text: '1.3.3 – Dersom gjødsel spres uten nedmolding/nedfelling, gjøres dette innen 1. september eller senere dato fastsatt av kommunen?',
    isGroup: false,
    previousDeviation: 'Eget avvik',
    companyAnswer: 'Ja',
    partOfBasis: 'added',
  },
  {
    id: '1.3.4',
    text: '1.3.4 – Ved spredning på åpen åker, moldes gjødsla ned innen 18 timer?',
    isGroup: false,
    previousDeviation: null,
    companyAnswer: 'Ja',
    partOfBasis: 'added',
  },
  {
    id: '1.3.5',
    text: '1.3.5 – Har du kontrollert gjødsellageret de siste 12 månedene?',
    isGroup: false,
    previousDeviation: 'Avvik',
    companyAnswer: 'Ja',
    partOfBasis: 'added',
  },
  {
    id: '1.3.6',
    text: '1.3.6 – Har du nok lagringskapasitet (min. 8 måneder)?',
    isGroup: false,
    previousDeviation: null,
    companyAnswer: 'Ja',
    partOfBasis: 'added',
  },
  {
    id: '1.3.7',
    text: '1.3.7 – Er husdyrgjødsel lagret på bakken skjermet mot overflatevann og plassert slik at avrenning hindres?',
    isGroup: false,
    previousDeviation: null,
    companyAnswer: 'Ja',
    partOfBasis: 'added',
  },
  {
    id: '1.3.8',
    text: '1.3.8 – Samler du opp gjødsel fra luftegårder og utendørs talle minst én gang årlig?',
    isGroup: false,
    previousDeviation: null,
    companyAnswer: 'Ja',
    partOfBasis: 'added',
  },

  // 1.4 - BRUK AV AVLØPSSLAM, KOMPOST, BIOREST ELLER ANNEN ORGANISK GJØDSEL
  {
    id: '1.4',
    text: '1.4 Bruk av avløpsslam, kompost, biorest eller annen organisk gjødsel',
    isGroup: true,
    previousDeviation: null,
    companyAnswer: null,
    partOfBasis: null,
  },
  {
    id: '1.4.1',
    text: '1.4.1 – Følger du gjeldende regelverk og bruksbegrensninger for slike materialer?',
    isGroup: false,
    previousDeviation: null,
    companyAnswer: 'Ikke relevant',
    partOfBasis: 'added',
  },
  {
    id: '1.4.2',
    text: '1.4.2 – Har du meldt fra til kommunen før bruk av avløpsslam?',
    isGroup: false,
    previousDeviation: null,
    companyAnswer: 'Ikke relevant',
    partOfBasis: 'added',
  },

  // 1.5 - LAGRING OG BRUK AV PLANTEVERNMIDLER
  {
    id: '1.5',
    text: '1.5 Lagring og bruk av plantevernmidler',
    isGroup: true,
    previousDeviation: null,
    companyAnswer: null,
    partOfBasis: null,
  },
  {
    id: '1.5.1',
    text: '1.5.1 – Kan du dokumentere at plantevernmidler kun brukes av autorisert personell?',
    isGroup: false,
    previousDeviation: null,
    companyAnswer: 'Ja',
    partOfBasis: 'added',
  },
  {
    id: '1.5.2',
    text: '1.5.2 – Brukes plantevernmidlene i samsvar med godkjent etikett?',
    isGroup: false,
    previousDeviation: null,
    companyAnswer: 'Ja',
    partOfBasis: 'added',
  },
  {
    id: '1.5.3',
    text: '1.5.3 – Tilpasses, rengjøres og vedlikeholdes spredeutstyret for å unngå forurensning av vann?',
    isGroup: false,
    previousDeviation: null,
    companyAnswer: 'Ja',
    partOfBasis: 'not-added',
  },
  {
    id: '1.5.4',
    text: '1.5.4 – Oppfyller du krav til integrert plantevern, vannmiljøbeskyttelse og journalføring?',
    isGroup: false,
    previousDeviation: null,
    companyAnswer: 'Ja',
    partOfBasis: 'added',
  },
  {
    id: '1.5.5',
    text: '1.5.5 – Oppbevares plantevernmidler forsvarlig (avlåst, merket, og iht. etikettkrav)?',
    isGroup: false,
    previousDeviation: null,
    companyAnswer: 'Ja',
    partOfBasis: 'added',
  },
  {
    id: '1.5.6',
    text: '1.5.6 – Merker du områder behandlet med plantevernmidler som er åpne for allmenn ferdsel?',
    isGroup: false,
    previousDeviation: null,
    companyAnswer: 'Ja',
    partOfBasis: 'not-added',
  },
  {
    id: '1.5.7',
    text: '1.5.7 – Er spredeutstyret funksjonstestet i henhold til krav?',
    isGroup: false,
    previousDeviation: null,
    companyAnswer: 'Ja',
    partOfBasis: 'not-added',
  },
  {
    id: '1.5.8',
    text: '1.5.8 – Overholder du behandlingsfristen ved bruk av plantevernmidler og dokumenterer innhøstingsdato?',
    isGroup: false,
    previousDeviation: null,
    companyAnswer: 'Ja',
    partOfBasis: 'not-added',
  },

  // 1.6 - MELDEPLIKTIG UGRESS OG PLANTESKADEGJØRERE
  {
    id: '1.6',
    text: '1.6 Meldepliktig ugress og planteskadegjørere',
    isGroup: true,
    previousDeviation: null,
    companyAnswer: null,
    partOfBasis: null,
  },
  {
    id: '1.6.1',
    text: '1.6.1  Følger du opplysningsplikten for meldepliktige skadegjørere og floghavre?',
    isGroup: false,
    previousDeviation: null,
    companyAnswer: 'Ja',
    partOfBasis: 'added',
  },
  {
    id: '1.6.2',
    text: '1.6.2 – Informerer du utleier/leietaker om forekomst av slike skadegjørere?',
    isGroup: false,
    previousDeviation: null,
    companyAnswer: 'Ja',
    partOfBasis: 'added',
  },
  {
    id: '1.6.3',
    text: '1.6.3 – Har du rutiner for bekjempelse og forebygging av floghavre?',
    isGroup: false,
    previousDeviation: null,
    companyAnswer: 'Ja',
    partOfBasis: 'added',
  },
  {
    id: '1.6.4',
    text: '1.6.4 – Har du kontrollert og eventuelt bekjempet hønsehirse?',
    isGroup: false,
    previousDeviation: null,
    companyAnswer: 'Ja',
    partOfBasis: 'added',
  },

  // 1.7 - LAGRING AV DRIFTSMIDLER, PUNKTUTSLIPP OG AVFALLSHÅNDTERING
  {
    id: '1.7',
    text: '1.7 Lagring av driftsmidler, punktutslipp og avfallshåndtering',
    isGroup: true,
    previousDeviation: null,
    companyAnswer: null,
    partOfBasis: null,
  },
  {
    id: '1.7.1',
    text: '1.7.1 – Lagrer du mineralgjødsel sikkert?',
    isGroup: false,
    previousDeviation: null,
    companyAnswer: 'Ja',
    partOfBasis: 'focus',
  },
  {
    id: '1.7.2',
    text: '1.7.2 – Lagrer du fôr slik at det ikke er fare for avrenning?',
    isGroup: false,
    previousDeviation: null,
    companyAnswer: 'Ja',
    partOfBasis: 'added',
  },
  {
    id: '1.7.3',
    text: '1.7.3 – Har du en avfallshåndteringsplan for gården?',
    isGroup: false,
    previousDeviation: null,
    companyAnswer: 'Ja',
    partOfBasis: 'focus',
  },

  // 1.8 - SKADEGJØRERE I HUSDYRROM, LAGER, SORTERINGS- OG FOREDLINGSROM
  {
    id: '1.8',
    text: '1.8 Skadegjørere i husdyrrom, lager, sorterings- og foredlingsrom',
    isGroup: true,
    previousDeviation: null,
    companyAnswer: null,
    partOfBasis: null,
  },
  {
    id: '1.8.1',
    text: '1.8.1 – Jobber du systematisk med overvåking og bekjemping av skadedyr som kan påvirke mattryggheten?',
    isGroup: false,
    previousDeviation: null,
    companyAnswer: 'Ja',
    partOfBasis: 'focus',
  },
  {
    id: '1.8.2',
    text: '1.8.2 – Kan du dokumentere hvilke skadedyrmidler som brukes og hvor de er plassert?',
    isGroup: false,
    previousDeviation: null,
    companyAnswer: 'Ja',
    partOfBasis: 'focus',
  },

  // 1.9 - ET KLIMAVENNLIG LANDBRUK
  {
    id: '1.9',
    text: '1.9 Et klimavennlig landbruk',
    isGroup: true,
    previousDeviation: null,
    companyAnswer: null,
    partOfBasis: null,
  },
  {
    id: '1.9.1',
    text: '1.9.1 – Har du en plan for vedlikehold og fornyelse av hydrotekniske anlegg?',
    isGroup: false,
    previousDeviation: null,
    companyAnswer: 'Ja',
    partOfBasis: 'added',
  },
  {
    id: '1.9.2',
    text: '1.9.2 – Følger du lokale/regionale bestemmelser om jordarbeiding og miljøkrav?',
    isGroup: false,
    previousDeviation: null,
    companyAnswer: 'Ja',
    partOfBasis: 'added',
  },
  {
    id: '1.9.3',
    text: '1.9.3 – Følger du særskilte miljøbestemmelser gitt av kommunen?',
    isGroup: false,
    previousDeviation: null,
    companyAnswer: 'Ja',
    partOfBasis: 'added',
  },
  {
    id: '1.9.4',
    text: '1.9.4 – Har du kartlagt kilder til klimagassutslipp og vurdert aktuelle tiltak for gården?',
    isGroup: false,
    previousDeviation: null,
    companyAnswer: 'Ja',
    partOfBasis: 'added',
  },

  // 1.10 - KULTURMINNER, KULTURLANDSKAP OG BIOLOGISK MANGFOLD
  {
    id: '1.10',
    text: '1.10 Kulturminner, kulturlandskap og biologisk mangfold',
    isGroup: true,
    previousDeviation: null,
    companyAnswer: null,
    partOfBasis: null,
  },
  {
    id: '1.10.1',
    text: '1.10.1 – Har du merket av kulturminner og verdifulle kulturlandskapselementer på skiftekartet?',
    isGroup: false,
    previousDeviation: null,
    companyAnswer: 'Ja',
    partOfBasis: 'added',
  },
  {
    id: '1.10.2',
    text: '1.10.2 – Har du minst 2 meter vegetasjonssone mot vassdrag med årssikker vannføring?',
    isGroup: false,
    previousDeviation: null,
    companyAnswer: 'Ja',
    partOfBasis: 'added',
  },
  {
    id: '1.10.3',
    text: '1.10.3 – Gjennomføres tiltak som påvirker kulturminner/kulturlandskap i dialog med kommunen?',
    isGroup: false,
    previousDeviation: null,
    companyAnswer: 'Ja',
    partOfBasis: 'added',
  },
  {
    id: '1.10.4',
    text: '1.10.4 – Ivaretar du fredede kulturminner med tilhørende sikringssone?',
    isGroup: false,
    previousDeviation: null,
    companyAnswer: 'Ja',
    partOfBasis: 'added',
  },

  // 1.11 - SMITTEFOREBYGGING VED KJØP AV BRUKT UTSTYR FRA UTLANDET
  {
    id: '1.11',
    text: '1.11 Smitteforebygging ved kjøp av brukt utstyr fra utlandet',
    isGroup: true,
    previousDeviation: null,
    companyAnswer: null,
    partOfBasis: null,
  },
  {
    id: '1.11.1',
    text: '1.11.1 – Kan du dokumentere at brukt utstyr innkjøpt fra utlandet ble rengjort og desinfisert før forsendelse til Norge?',
    isGroup: false,
    previousDeviation: null,
    companyAnswer: 'Ikke relevant',
    partOfBasis: 'added',
  },
];

type TabType = 'alle' | 'avvik-ekstern' | 'avvik-eget' | 'forbedringspunkter' | 'positive';

interface RevisjonsgrunnlagPageProps {
  manuallyAddedQuestions: Set<string>;
  manuallyRemovedQuestions: Set<string>;
  onAddQuestionToRegister: (questionId: string) => void;
  onRemoveQuestionFromRegister: (questionId: string) => void;
}

export function RevisjonsgrunnlagPage({
  manuallyAddedQuestions,
  manuallyRemovedQuestions,
  onAddQuestionToRegister,
  onRemoveQuestionFromRegister,
}: RevisjonsgrunnlagPageProps) {
  const [selectedChecklistId, setSelectedChecklistId] = useState('historiikk');
  const [activeTab, setActiveTab] = useState<TabType>('alle');
  const [markedAsReviewed, setMarkedAsReviewed] = useState(false);
  const [addedToBasics, setAddedToBasics] = useState<Set<string>>(
    new Set(['1.1.1', '1.1.2', '1.1.4', '1.2.1', '1.2.2'])
  );
  // Mobile/Tablet state - true = showing menu, false = showing detail
  const [showingMenu, setShowingMenu] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);

  // State for selected question and resizable detail panel
  const [selectedQuestionId, setSelectedQuestionId] = useState<string | null>(null);
  const [detailPanelWidth, setDetailPanelWidth] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth * 0.5; // Default to 50% of screen width
    }
    return 600;
  });
  const [isResizingDetail, setIsResizingDetail] = useState(false);

  const selectedChecklist = checklists.find((c) => c.id === selectedChecklistId);

  // Create a Set of all question IDs that exist in Register Revisjon (questionsData)
  const questionsInRegisterRevisjon = useMemo(() => {
    const questionIds = new Set<string>();
    questionsData.forEach(category => {
      category.questionGroups.forEach(group => {
        group.questions.forEach(question => {
          questionIds.add(question.id);
        });
      });
    });
    return questionIds;
  }, []);

  // Focus area questions that should be marked as "Fokusområde" (cannot be removed)
  const focusAreaQuestions = new Set([
    '1.2.1',
    '1.2.2',
    '1.7.1',
    '1.7.3',
    '1.8.1',
    '1.8.2'
  ]);

  // Function to get the partOfBasis status for a question
  const getPartOfBasisStatus = (questionId: string): 'added' | 'focus' | 'not-added' => {
    // First check if it's a focus area question (always included, cannot be removed)
    if (focusAreaQuestions.has(questionId)) {
      return 'focus';
    }
    
    // Check if manually removed
    if (manuallyRemovedQuestions.has(questionId)) {
      return 'not-added';
    }
    
    // Check if manually added
    if (manuallyAddedQuestions.has(questionId)) {
      return 'added';
    }
    
    // Check if it exists in the original Register Revisjon data
    if (questionsInRegisterRevisjon.has(questionId)) {
      return 'added';
    }
    
    // Otherwise, it's not added
    return 'not-added';
  };

  // Wrapper to prevent removing focus area questions
  const handleRemoveQuestion = (questionId: string) => {
    // Don't allow removing focus area questions
    if (focusAreaQuestions.has(questionId)) {
      return;
    }
    onRemoveQuestionFromRegister(questionId);
  };

  const handleToggleAddToBasics = (questionId: string) => {
    setAddedToBasics((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(questionId)) {
        newSet.delete(questionId);
      } else {
        newSet.add(questionId);
      }
      return newSet;
    });
  };

  const handleAddAllQuestions = () => {
    const allQuestionIds = questionData.filter((q) => !q.isGroup).map((q) => q.id);
    setAddedToBasics(new Set(allQuestionIds));
  };

  // Handler for navigating to detail with animation
  const handleNavigateToDetail = (checklistId: string) => {
    setSelectedChecklistId(checklistId);
    setIsAnimating(true);
    setTimeout(() => {
      setShowingMenu(false);
      setIsAnimating(false);
    }, 300);
  };

  // Handler for going back to menu with animation
  const handleBackToMenu = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setShowingMenu(true);
      setIsAnimating(false);
    }, 300);
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

  // Get the selected question object
  const selectedQuestion = selectedQuestionId 
    ? questionData.find(q => q.id === selectedQuestionId)
    : null;

  const getDeviationChip = (type: string | null) => {
    if (!type) return null;

    const styles: Record<string, { bg: string; text: string; icon: string }> = {
      'Stort avvik': {
        bg: 'bg-s-avvik-container',
        text: 'text-on-s-avvik-container',
        icon: '⚠',
      },
      'Lite avvik': {
        bg: 'bg-l-avvik-container',
        text: 'text-on-l-avvik-container',
        icon: '⚠',
      },
      Avvik: {
        bg: 'bg-avvik-container',
        text: 'text-on-avvik-container',
        icon: '⚠',
      },
      'Eget avvik': {
        bg: 'bg-muted',
        text: 'text-muted-foreground',
        icon: '🚕',
      },
    };

    const style = styles[type] || styles['Avvik'];

    return (
      <div
        className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-[8px] ${style.bg} ${style.text}`}
      >
        <span className="label-medium">
          {type}
        </span>
      </div>
    );
  };

  return (
    <div className="flex h-full w-full overflow-hidden">
      {/* MOBILE/TABLET: Menu Panel - Shows ONLY when showingMenu is true */}
      {showingMenu && (
        <OverlayScrollContainer className="min-[1400px]:hidden w-full h-full bg-background flex flex-col gap-6 p-6 overflow-y-auto">
          {/* Update button */}
          <button className="w-full bg-primary text-primary-foreground rounded-[var(--radius-button)] px-6 py-3.5 h-14 flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors label-medium">
            <RefreshCw className="w-5 h-5" />
            <span className="body-large">
              Oppdater revisjonsgrunnlag
            </span>
          </button>

          {/* Fetch business revision basis button - Outlined */}
          <button className="w-full bg-transparent text-foreground rounded-[var(--radius-button)] px-6 py-3.5 h-14 flex items-center justify-center gap-2 border-2 border-border hover:bg-muted transition-colors label-medium">
            <Building2 className="w-5 h-5" />
            <span className="body-large">
              Hent revisjonsgrunnlag bedrift
            </span>
          </button>

          {/* Revisjonshistorikk og rapporter button - Above divider */}
          <button
            onClick={() => handleNavigateToDetail('historiikk')}
            className="flex items-center justify-between gap-4 px-4 py-2 hover:bg-muted rounded-[var(--radius)] transition-colors w-full"
          >
            <div className="flex items-center gap-4">
              {/* HistoryIcon */}
              <div className="relative w-6 h-6 text-on-surface-variant">
                <div className="absolute inset-[12.5%_6.25%]">
                  <img alt="" className="block max-w-none size-full" src={imgVector7} style={{ filter: 'brightness(0) saturate(100%)' }} />
                </div>
              </div>
              <span className="body-large text-foreground">
                Revisjonshistorikk og rapporter
              </span>
            </div>
            <ChevronRight className="w-5 h-5 text-foreground" />
          </button>

          {/* Divider with subtitle */}
          <DividerWithSubtitle subtitle="Sjekklister for foretaket" />

          {/* Checklist items */}
          <div className="flex flex-col gap-2">
            {checklists.map((checklist) => (
              <button
                key={checklist.id}
                onClick={() => handleNavigateToDetail(checklist.id)}
                className="flex items-center gap-4 px-4 py-2 rounded-[12px] transition-colors hover:bg-muted"
              >
                {/* Icon/Number */}
                <div className="w-14 h-14 rounded-full bg-muted flex items-center justify-center shrink-0">
                  <span className="label-medium text-foreground">
                    {checklist.icon}
                  </span>
                </div>
                {/* Name */}
                <span className="body-large text-left flex-1 text-foreground">
                  {checklist.name}
                </span>
              </button>
            ))}
          </div>
        </OverlayScrollContainer>
      )}

      {/* DESKTOP: Left Sidebar - Always visible */}
      <OverlayScrollContainer className="w-[400px] max-[1400px]:hidden h-full bg-background border-r border-[var(--border)] flex flex-col gap-6 p-4 overflow-y-auto">
        {/* Update button */}
        <button className="w-full bg-primary text-primary-foreground rounded-[var(--radius-button)] px-6 py-3.5 h-14 flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors label-medium">
          <RefreshCw className="w-5 h-5" />
          <span className="body-large">
            Oppdater revisjonsgrunnlag
          </span>
        </button>

        {/* Fetch business revision basis button - Outlined */}
        <button className="w-full bg-transparent text-foreground rounded-[var(--radius-button)] px-6 py-3.5 h-14 flex items-center justify-center gap-2 border-2 border-border hover:bg-muted transition-colors label-medium">
          <Building2 className="w-5 h-5" />
          <span className="body-large">
            Hent revisjonsgrunnlag bedrift
          </span>
        </button>

        {/* Revisjonshistorikk og rapporter button - Above divider */}
        <button
          onClick={() => setSelectedChecklistId('historiikk')}
          className={`flex items-center gap-4 px-4 py-4 rounded-[12px] transition-colors w-full ${
            selectedChecklistId === 'historiikk'
              ? 'bg-secondary-container'
              : 'hover:bg-muted'
          }`}
        >
          {/* HistoryIcon */}
          <div className="relative w-6 h-6 shrink-0" style={{ color: 'var(--on-surface-variant)' }}>
            <div className="absolute inset-[12.5%_6.25%]">
              <img alt="" className="block max-w-none size-full" src={imgVector7} style={{ filter: 'brightness(0) saturate(100%)' }} />
            </div>
          </div>
          <span className={`body-large text-left flex-1 ${
            selectedChecklistId === 'historiikk'
              ? 'text-secondary-container-foreground'
              : 'text-foreground'
          }`}>
            Revisjonshistorikk og rapporter
          </span>
        </button>

        {/* Divider with subtitle */}
        <DividerWithSubtitle subtitle="Sjekklister for foretaket" />

        {/* Checklist items */}
        <div className="flex flex-col gap-2">
          {checklists.map((checklist) => (
            <button
              key={checklist.id}
              onClick={() => setSelectedChecklistId(checklist.id)}
              className={`flex items-center gap-4 px-4 py-2 rounded-[12px] transition-colors ${
                selectedChecklistId === checklist.id
                  ? 'bg-secondary-container'
                  : 'hover:bg-muted'
              }`}
            >
              {/* Icon/Number */}
              <div className="w-14 h-14 rounded-full bg-muted flex items-center justify-center shrink-0">
                <span className="label-medium text-foreground">
                  {checklist.icon}
                </span>
              </div>
              {/* Name */}
              <span className={`body-large text-left flex-1 ${
                selectedChecklistId === checklist.id
                  ? 'text-secondary-container-foreground'
                  : 'text-foreground'
              }`}>
                {checklist.name}
              </span>
            </button>
          ))}
        </div>
      </OverlayScrollContainer>

      {/* Vertical Divider - Desktop only */}
      <div className="w-px h-full bg-[var(--border)] max-[1400px]:hidden" />

      {/* MOBILE/TABLET & DESKTOP: Detail Panel - Shows when NOT showingMenu on mobile/tablet */}
      <div className={`flex-1 h-full flex-col ${showingMenu ? 'max-[1400px]:hidden' : 'max-[1400px]:flex'} min-[1400px]:flex max-[1400px]:w-full`}>
        {/* Header - Only show for regular checklists, not for historiikk */}
        {selectedChecklistId !== 'historiikk' && (
          <div className="border-b border-[var(--border)] px-10 max-[1400px]:px-6 py-3">
            <div className="flex flex-col gap-3 w-full mb-2 min-[600px]:flex-row min-[600px]:items-center min-[600px]:justify-between">
              <div className="flex items-center gap-3 flex-1 min-[600px]:order-1">
                {/* Title */}
                <h2 className="title-large text-foreground">
                  {selectedChecklist?.name}
                </h2>
              </div>
              {/* Add all questions button - Only show for regular checklists, not for historiikk */}
              <button
                onClick={handleAddAllQuestions}
                className="px-6 py-4 rounded-[100px] border border-[var(--border)] hover:bg-muted transition-colors flex items-center gap-2 max-[1400px]:hidden min-[600px]:order-2"
              >
                <Plus size={20} className="text-foreground" />
                <span className="body-large text-foreground">
                  Legg til alle spørsmål
                </span>
              </button>
            </div>

            {/* Checkbox - Only show for regular checklists, not for historiikk */}
            <div className="flex items-center gap-4 py-2">
              <button
                onClick={() => setMarkedAsReviewed(!markedAsReviewed)}
                className="w-14 h-14 rounded-[100px] flex items-center justify-center hover:bg-muted transition-colors"
              >
                <div className="w-[18px] h-[18px] rounded-[2px] border-2 border-[#44483b] flex items-center justify-center">
                  {markedAsReviewed && <Check size={14} className="text-[#44483b]" />}
                </div>
              </button>
              <span className="body-large text-foreground">
                Marker som gjennomgått
              </span>
            </div>
          </div>
        )}

        {/* Conditional Content: Show ForetakHistorikkView OR Tabs + Table */}
        {selectedChecklistId === 'historiikk' ? (
          <ForetakHistorikkView />
        ) : (
          <div className="flex flex-1 overflow-hidden">
            {/* Table Panel - Takes remaining space */}
            <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
              {/* Tabs */}
              <div className="border-b border-[var(--border)] pl-[52px] max-[1400px]:pl-6">
                <div className="flex overflow-x-auto">
                  {[
                    { id: 'alle', label: 'Alle spørsmål' },
                    { id: 'avvik-ekstern', label: 'Avvik (ekstern)' },
                    { id: 'avvik-eget', label: 'Avvik (eget)' },
                    { id: 'forbedringspunkter', label: 'Forbedringspunkter' },
                    { id: 'positive', label: 'Positive observasjoner' },
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id as TabType)}
                      className={`px-4 py-[14px] label-medium relative whitespace-nowrap ${
                        activeTab === tab.id
                          ? 'text-foreground'
                          : 'text-muted-foreground hover:text-foreground'
                      }`}
                    >
                      {tab.label}
                      {activeTab === tab.id && (
                        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary" />
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Table */}
              <div className="flex-1 overflow-auto">
                <table className="w-full">
                  <thead className="sticky top-0 bg-surface-container-low border-b border-[var(--border)]">
                    <tr>
                      <th className="text-left px-4 py-2 label-medium text-foreground bg-surface-container-low">
                        Sjekklistepunkt
                      </th>
                      <th className="text-left px-4 py-2 label-medium text-foreground bg-surface-container-low max-[1400px]:hidden" style={{ width: '160px' }}>
                        Tidligere avvik
                      </th>
                      <th className="text-left px-4 py-2 label-medium text-foreground bg-surface-container-low max-[1400px]:hidden" style={{ width: '152px' }}>
                        Foretakets svar
                      </th>
                      <th className="text-left px-4 py-2 label-medium text-foreground bg-surface-container-low" style={{ width: '180px' }}>
                        Del av grunnlaget
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {questionData.map((question) => {
                      // Get dynamic status based on whether question exists in Register Revisjon
                      const basisStatus = getPartOfBasisStatus(question.id);
                      const isFocus = basisStatus === 'focus';
                      const isAdded = basisStatus === 'added';
                      const isNotAdded = basisStatus === 'not-added';

                      return (
                        <tr
                          key={question.id}
                          onClick={() => !question.isGroup && setSelectedQuestionId(question.id)}
                          className={`border-b border-[var(--border)] ${
                            question.isGroup ? 'bg-muted/30' : 'hover:bg-muted cursor-pointer'
                          }`}
                        >
                          {/* Question text */}
                          <td className="px-4 py-4">
                            <p className="body-medium text-foreground">
                              {question.text}
                            </p>
                          </td>

                          {/* Previous deviation - Hidden on mobile/tablet */}
                          <td className="px-4 py-4 max-[1400px]:hidden" style={{ width: '160px' }}>
                            {question.previousDeviation && getDeviationChip(question.previousDeviation)}
                          </td>

                          {/* Company answer - Hidden on mobile/tablet */}
                          <td className="px-4 py-4 max-[1400px]:hidden" style={{ width: '152px' }}>
                            {question.companyAnswer && (
                              <p className="body-medium text-foreground">
                                {question.companyAnswer}
                              </p>
                            )}
                          </td>

                          {/* Part of basis */}
                          <td className="px-4 py-4" style={{ width: '180px' }}>
                            {!question.isGroup && (
                              <>
                                {isFocus ? (
                                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-[8px] bg-[#dae2ff] text-[#174295]">
                                    <span className="label-medium whitespace-nowrap">
                                      Fokusområde
                                    </span>
                                  </div>
                                ) : isAdded ? (
                                  <button
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      handleRemoveQuestion(question.id);
                                    }}
                                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-[8px] bg-[#dae2ff] text-[#174295] hover:bg-[#c5d5ff] transition-colors cursor-pointer"
                                    title="Klikk for å fjerne fra Register Revisjon"
                                  >
                                    <Check size={18} />
                                    <span className="label-medium whitespace-nowrap">
                                      Lagt til
                                    </span>
                                  </button>
                                ) : isNotAdded ? (
                                  <button
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      onAddQuestionToRegister(question.id);
                                    }}
                                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-[8px] border border-[var(--border)] hover:bg-muted transition-colors cursor-pointer"
                                    title="Klikk for å legge til i Register Revisjon"
                                  >
                                    <Plus size={18} className="text-foreground" />
                                    <span className="label-medium text-foreground whitespace-nowrap">
                                      Legg til
                                    </span>
                                  </button>
                                ) : null}
                              </>
                            )}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>

            {/* DESKTOP: Detail Panel - Shows selected question with resizable width */}
            {selectedQuestion && !selectedQuestion.isGroup && (
              <div 
                className="max-[1200px]:hidden h-full bg-background overflow-hidden flex flex-row relative shrink-0"
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
                />

                {/* Vertical Divider */}
                <div className="w-px h-full bg-border shrink-0" />

                {/* Detail Content */}
                <div className="flex-1 overflow-hidden">
                  <RevisjonsgrunnlagQuestionDetailPanel 
                    question={selectedQuestion}
                    onClose={() => setSelectedQuestionId(null)}
                    isAddedToRevision={getPartOfBasisStatus(selectedQuestion.id) !== 'not-added'}
                    onToggleAddToRevision={() => {
                      const status = getPartOfBasisStatus(selectedQuestion.id);
                      if (status === 'not-added') {
                        onAddQuestionToRegister(selectedQuestion.id);
                      } else if (status === 'added') {
                        handleRemoveQuestion(selectedQuestion.id);
                      }
                      // Focus areas can't be toggled
                    }}
                  />
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}