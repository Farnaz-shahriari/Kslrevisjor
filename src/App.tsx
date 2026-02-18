import { useState } from 'react';
import { NavigationRail } from './components/NavigationRail';
import { TopBar, TopBarTab } from './components/TopBar';
import { RegisterRevisjonPage } from './components/RegisterRevisjonPage';
import { RevisjonsgrunnlagPage } from './components/RevisjonsgrunnlagPage';
import { WriteReportPage } from './components/WriteReportPage';
import { ReportAvvikPage } from './components/ReportAvvikPage';
import { DocumentOverview } from './components/DocumentOverview';
import ByttRollePage from './components/ByttRollePage';
import { ProducerNavigationRail, ProducerNavTab } from './components/ProducerNavigationRail';
import { ProducerHomePage } from './components/ProducerHomePage';
import { SpesialitetChecklistPage } from './components/SpesialitetChecklistPage';
import { AvvikoversiktPage } from './components/AvvikoversiktPage';
import { ProfilePage } from './components/ProfilePage';
import { PrivateNotesPanel } from './components/PrivateNotesPanel';
import { PrivateNotesPanelDockable } from './components/PrivateNotesPanelDockable';
import { PlanleggRevisjonPage } from './components/PlanleggRevisjonPage';
import { TildelteRevisjonerPage } from './components/TildelteRevisjonerPage';
import { AksepterteRevisjonerPage } from './components/AksepterteRevisjonerPage';
import ForsidePage from './components/ForsidePage';
import { FakturagrunnlagPage } from './components/FakturagrunnlagPage';
import { RevisjonshistorikkPage } from './components/RevisjonshistorikkPage';

type AnswerType = 'ja' | 'nei' | 'ikke-relevant';
type TabType = 'forside' | 'tildelteRevisjoner' | 'aksepterteRevisjoner' | 'avviksoversikt' | 'fakturagrunnlag' | 'revisjonshistorikk' | 'byttRolle' | 'producer' | 'minProfil';
type UserRole = 'revisor' | 'producer' | null;

export interface QuestionData {
  answer?: AnswerType;
  improvementText?: string;
  improvementImages?: string[];
  positiveText?: string;
  positiveImages?: string[];
  notatText?: string;
  deviationData?: any; // You can type this more specifically if needed
  attachedDocuments?: string[];
}

export interface SavedNote {
  id: string;
  text: string;
  timestamp: Date;
  questionId?: string;
  questionTitle?: string;
  isDeviation: boolean;
  deviationSeverity?: 'lite-avvik' | 'avvik' | 'stor-avvik';
  deviationMangel?: string;
  deviationBevis?: string;
  deviationKrav?: string;
}

export default function App() {
  // Check if desktop (≥1400px) - only auto-select on desktop, not mobile
  const isDesktop = typeof window !== 'undefined' && window.innerWidth >= 1400;
  const [currentQuestionId, setCurrentQuestionId] = useState(isDesktop ? '1.1.1' : '');
  const [questionData, setQuestionData] = useState<Record<string, QuestionData>>({
    // Group 1.1 - Only 1 positive observation and 1 improvement point
    '1.1.1': { 
      answer: 'ja', 
      positiveText: 'Svært godt system for dokumenthåndtering. Alle dokumenter er systematisk organisert og lett tilgjengelige for kontroll.', 
      positiveImages: [] 
    },
    '1.1.2': { 
      answer: 'ja'
    },
    '1.1.3': { 
      answer: 'ja', 
      improvementText: 'Det anbefales å digitalisere dokumentasjonen for bedre sporbarhet og enklere tilgang. Vurder bruk av sky-basert dokumenthåndteringssystem.', 
      improvementImages: [] 
    },
    '1.1.4': { 
      answer: 'ja'
    },
    
    // Group 1.2 - Only 1 positive observation and 1 improvement point
    '1.2.1': { 
      answer: 'ja', 
      positiveText: 'Meget god og strukturert gjødslingsplan basert på oppdaterte jordprøver. Skiftekartet er oversiktlig og profesjonelt utarbeidet.', 
      positiveImages: [] 
    },
    '1.2.2': { 
      answer: 'ja',
      improvementText: 'Det kan være hensiktsmessig å legge til mer detaljerte notater om årsaken til valg av gjødseltype for hvert skifte.',
      improvementImages: []
    },
    
    // Group 1.3 - Only 1 positive observation and 1 improvement point
    '1.3.1': { 
      answer: 'ja'
    },
    '1.3.2': { 
      answer: 'ja'
    },
    '1.3.3': { 
      answer: 'ja',
      positiveText: 'Utmerkede rutiner for spredning. Utstyret er godt vedlikeholdt og kalibrert i henhold til anbefalinger.',
      positiveImages: []
    },
    '1.3.4': { 
      answer: 'ja'
    },
    '1.3.5': { 
      answer: 'nei',
      deviations: [{
        id: 'dev-1.3.5-1',
        severity: 'avvik',
        calculatedSeverity: 'avvik',
        mangel: 'Dokumentasjon manglet',
        bevis: 'Kontrollskjema vist frem',
        krav: 'Årlig kontroll dokumenteres (KSL 1.3.5)',
        bevisImages: []
      }]
    },
    '1.3.6': { 
      answer: 'ja'
    },
    '1.3.7': { 
      answer: 'nei',
      deviations: [{
        id: 'dev-1.3.7-1',
        severity: 'stor-avvik',
        calculatedSeverity: 'stort-avvik',
        mangel: 'Manglende sikring mot avrenning',
        bevis: 'Fotodokumentasjon av lagringsplass',
        krav: 'Forsvarlig lagring (KSL 1.3.7)',
        bevisImages: []
      }]
    },
    '1.3.8': { 
      answer: 'ja'
    },
    
    // Group 1.4 - No observations or improvements
    '1.4.1': { 
      answer: 'ja'
    },
    '1.4.2': { 
      answer: 'ja'
    },
    
    // Group 1.5 - KEEP EMPTY (we're working on these)
    // '1.5.1': {},
    // '1.5.2': {},
    // '1.5.4': {},
    
    // Group 1.6 - Only 1 positive observation
    '1.6.1': { 
      answer: 'ja',
      positiveText: 'Planleggingen av arealdrift viser god oversikt og fremsynt tenkning. Alle relevante faktorer er tatt med i vurderingen.',
      positiveImages: []
    },
    '1.6.2': { 
      answer: 'ja'
    },
    '1.6.3': { 
      answer: 'ja'
    },
    '1.6.4': { 
      answer: 'ja'
    },
    
    // Group 1.7 - One with deviation (1.7.1), rest without observations/improvements
    '1.7.1': { 
      answer: 'nei',
      deviations: [{
        id: 'dev-1.7.1-1',
        severity: 'lite-avvik',
        calculatedSeverity: 'lite-avvik',
        mangel: 'Ubeskyttet lagring',
        bevis: 'Nye bilder av forbedret lager',
        krav: 'Tørr og sikker lagring (KSL 1.7.1)',
        bevisImages: []
      }]
    },
    '1.7.2': { 
      answer: 'ja'
    },
    '1.7.3': { 
      answer: 'ja'
    },
    
    // Group 1.8 - Only 1 positive observation
    '1.8.1': { 
      answer: 'ja', 
      positiveText: 'Utmerket journalføring med detaljert informasjon. Alle notater er tydelige og komplette, og viser god oversikt over planteverntiltak.', 
      positiveImages: [] 
    },
    '1.8.2': { 
      answer: 'ja'
    },
    '1.8.3': { 
      answer: 'ja'
    },
    '1.8.4': { 
      answer: 'ja'
    },
    '1.8.5': { 
      answer: 'ja'
    },
    
    // Group 1.9 - Only 1 improvement point
    '1.9.1': { 
      answer: 'ja'
    },
    '1.9.2': { 
      answer: 'ja', 
      improvementText: 'Selv om prosedyrene er gode, anbefales det å lage en enkel visuell guide eller sjekkliste for rengjøring av sprøyteutstyr som kan henges opp i vaske-/fylleområdet.', 
      improvementImages: [] 
    },
    '1.9.3': { 
      answer: 'ja'
    },
    '1.9.4': { 
      answer: 'ja'
    },
    
    // Group 1.10 - No observations or improvements
    '1.10.1': { 
      answer: 'ja'
    },
    '1.10.2': { 
      answer: 'ja'
    },
    '1.10.3': { 
      answer: 'ja'
    },
    '1.10.4': { 
      answer: 'ja',
      improvementText: 'Det kan være nyttig å dokumentere terskelverdier for behandling mer detaljert i vekstsesongen.',
      improvementImages: []
    },
    
    // Group 1.11 - Mix of improvements and positive observations
    '1.11.1': { 
      answer: 'ja',
      positiveText: 'Svært god håndtering av plantevernmidler. Alle sikkerhetstiltak følges nøye, og dokumentasjonen er komplett.',
      positiveImages: []
    },
    
    // Add some "ikke-relevant" answers for testing
    '1.4.3': {
      answer: 'ikke-relevant'
    },
    '1.6.5': {
      answer: 'ikke-relevant'
    }
  });
  const [currentRole, setCurrentRole] = useState<UserRole>(null);
  const [activeMainTab, setActiveMainTab] = useState<TabType>('byttRolle');
  const [activeProducerTab, setActiveProducerTab] = useState<ProducerNavTab>('hjem');
  const [selectedDocumentIndex, setSelectedDocumentIndex] = useState<number | null>(null);
  const [deviationsLocked, setDeviationsLocked] = useState(false);
  const [activeTopBarTab, setActiveTopBarTab] = useState<TopBarTab>('planlegg'); // Changed default to 'planlegg'
  const [reportLocked, setReportLocked] = useState(false);
  
  // State for tracking if we're viewing a specific revision detail or the list
  const [viewingRevisionDetail, setViewingRevisionDetail] = useState(false);
  
  // State for managing which questions are in Register Revisjon
  const [manuallyAddedQuestions, setManuallyAddedQuestions] = useState<Set<string>>(new Set());
  const [manuallyRemovedQuestions, setManuallyRemovedQuestions] = useState<Set<string>>(new Set());

  // State for private notes panel
  const [isPrivateNotesPanelOpen, setIsPrivateNotesPanelOpen] = useState(false);
  
  // State for notes panel width - default to 384px
  const [notesPanelWidth, setNotesPanelWidth] = useState(384);
  
  // State to track if any bottom sheet is open (used to hide FAB)
  const [isAnyBottomSheetOpen, setIsAnyBottomSheetOpen] = useState(false);
  
  // State for Aksepterte Revisjoner filter (venter-pa-planlegging)
  const [aksepterteRevisjonerFilter, setAksepterteRevisjonerFilter] = useState<string[]>([]);
  
  // State for saved notes - with example notes
  const [savedNotes, setSavedNotes] = useState<SavedNote[]>([
    {
      id: 'note-example-1',
      text: 'Gjødsellager kontrollert i dag. Observerte at alle beholdere er tydelig merket med innhold og advarselsetiketter. Avstanden til nærmeste vannkilde målt til 28 meter, noe som er godt innenfor sikkerhetskrav.',
      timestamp: new Date('2024-12-17T10:30:00'),
      questionId: '1.3.7',
      questionTitle: 'Lagres gjødsel og plantevernmidler på betryggende måte?',
      isDeviation: false,
    },
    {
      id: 'note-example-2',
      text: 'Manglende dokumentasjon på kalibrering av sprøyteutstyr. Siste kalibrering ikke dokumentert, og bonden kunne ikke vise frem kvittering.',
      timestamp: new Date('2024-12-16T14:15:00'),
      questionId: '1.9.1',
      questionTitle: 'Er sprøyteutstyr kalibrert regelmessig?',
      isDeviation: true,
      deviationSeverity: 'avvik',
    },
    {
      id: 'note-example-3',
      text: 'Generell observasjon om gode rutiner for dokumenthåndtering. Alle papirer er systematisk organisert i egne permer. Bonden har også startet med digital backup i skyen. Anbefaler at dette fortsetter.',
      timestamp: new Date('2024-12-15T09:45:00'),
      isDeviation: false,
    },
    {
      id: 'note-example-4',
      text: 'KRITISK: Funnet utdaterte plantevernmidler i produksjonslokale sammen med gyldige produkter. Tre beholdere med utgått dato ikke markert. Dette utgjør stor risiko for feilbruk.',
      timestamp: new Date('2024-12-14T16:20:00'),
      questionId: '1.3.6',
      questionTitle: 'Oppbevares kun plantevernmidler med gyldig holdbarhet?',
      isDeviation: true,
      deviationSeverity: 'stor-avvik',
    },
    {
      id: 'note-example-5',
      text: 'Mindre avvik på generelt renhold i vaskehallen for sprøyteutstyr. Støv og rusk på gulv og noen flater. Ikke kritisk, men bør forbedres.',
      timestamp: new Date('2024-12-13T11:00:00'),
      questionId: '1.9.2',
      questionTitle: 'Vaskes og rengjøres sprøyteutstyr etter bruk?',
      isDeviation: true,
      deviationSeverity: 'lite-avvik',
    },
    {
      id: 'note-example-6',
      text: 'Bonden viste frem imponerende god oversikt over gjødslingsplan. Alle skifte er kartlagt med jordprøver fra inneværende år. Planen er detaljert og viser god kunnskap om gjødslingsbehov.',
      timestamp: new Date('2024-12-12T13:20:00'),
      questionId: '1.2.1',
      questionTitle: 'Foreligger det en gjødslingsplan basert på jordanalyser?',
      isDeviation: false,
    },
    {
      id: 'note-example-7',
      text: 'Notert at registrering av fôrinnkjøp kunne vært mer detaljert med tanke på sporbarhet. Anbefaler bruk av digitalt system fremfor håndskrevne notater i framtiden.',
      timestamp: new Date('2024-12-11T10:15:00'),
      questionId: '1.1.1',
      questionTitle: 'Har du oversikt over alle driftsmidler du har kjøpt, og alle produkter du har solgt?',
      isDeviation: false,
    },
  ]);

  const handleSaveNote = (note: SavedNote) => {
    setSavedNotes(prev => {
      // Check if note already exists
      const existingIndex = prev.findIndex(n => n.id === note.id);
      
      if (existingIndex >= 0) {
        // Update existing note
        const updated = [...prev];
        updated[existingIndex] = note;
        return updated;
      } else {
        // Add new note to beginning
        return [note, ...prev];
      }
    });
  };

  const handleDeleteNote = (noteId: string) => {
    setSavedNotes(prev => prev.filter(n => n.id !== noteId));
  };

  const handleAnswerQuestion = (questionId: string, answer: AnswerType) => {
    // Prevent changing to "nei" when deviations are locked
    if (deviationsLocked && answer === 'nei') {
      return;
    }
    setQuestionData(prev => ({
      ...prev,
      [questionId]: {
        ...prev[questionId],
        answer
      }
    }));
  };

  const handleUpdateQuestionData = (questionId: string, data: Partial<QuestionData>) => {
    setQuestionData(prev => ({
      ...prev,
      [questionId]: {
        ...prev[questionId],
        ...data
      }
    }));
  };

  // Get all question IDs that have been answered
  const answeredQuestions = new Set(
    Object.keys(questionData).filter(id => questionData[id].answer)
  );

  // Get all question IDs that have deviations
  const questionsWithDeviations = new Set(
    Object.keys(questionData).filter(id => {
      const data = questionData[id];
      return data.deviations && Array.isArray(data.deviations) && data.deviations.length > 0;
    })
  );

  const handleNavigateToDocument = (documentIndex: number) => {
    setSelectedDocumentIndex(documentIndex);
    setActiveMainTab('aksepterteRevisjoner');
  };

  const handleLockDeviations = () => {
    setDeviationsLocked(true);
  };

  const handleLockReport = () => {
    setReportLocked(true);
    // Automatically switch to the Avvik tab when report is locked
    setActiveTopBarTab('avvik');
  };

  const handleTopBarTabChange = (tab: TopBarTab) => {
    setActiveTopBarTab(tab);
  };

  // Handlers for managing Register Revisjon questions
  const handleAddQuestionToRegister = (questionId: string) => {
    setManuallyAddedQuestions((prev) => {
      const newSet = new Set(prev);
      newSet.add(questionId);
      return newSet;
    });
    // Remove from manually removed if it was there
    setManuallyRemovedQuestions((prev) => {
      const newSet = new Set(prev);
      newSet.delete(questionId);
      return newSet;
    });
  };

  const handleRemoveQuestionFromRegister = (questionId: string) => {
    setManuallyRemovedQuestions((prev) => {
      const newSet = new Set(prev);
      newSet.add(questionId);
      return newSet;
    });
    // Remove from manually added if it was there
    setManuallyAddedQuestions((prev) => {
      const newSet = new Set(prev);
      newSet.delete(questionId);
      return newSet;
    });
  };

  const renderAksepterteRevisjonerContent = () => {
    switch (activeTopBarTab) {
      case 'planlegg':
        return <PlanleggRevisjonPage />;
      case 'rapport':
        return (
          <WriteReportPage 
            onBack={() => setActiveTopBarTab('registrer')}
            questionData={questionData}
            onAnswerQuestion={handleAnswerQuestion}
            onUpdateQuestionData={handleUpdateQuestionData}
            onNavigateToDocument={handleNavigateToDocument}
            onLockDeviations={handleLockDeviations}
            deviationsLocked={deviationsLocked}
            onLockReport={handleLockReport}
            reportLocked={reportLocked}
            onBottomSheetOpenChange={setIsAnyBottomSheetOpen}
          />
        );
      case 'avvik':
        return <ReportAvvikPage />;
      case 'dokumentoversikt':
        return <DocumentOverview initialSelectedIndex={selectedDocumentIndex} />;
      case 'revisjonsgrunnlag':
        return (
          <RevisjonsgrunnlagPage
            manuallyAddedQuestions={manuallyAddedQuestions}
            manuallyRemovedQuestions={manuallyRemovedQuestions}
            onAddQuestionToRegister={handleAddQuestionToRegister}
            onRemoveQuestionFromRegister={handleRemoveQuestionFromRegister}
          />
        );
      case 'registrer':
      default:
        return (
          <RegisterRevisjonPage
            currentQuestionId={currentQuestionId}
            onQuestionSelect={setCurrentQuestionId}
            questionData={questionData}
            onAnswer={handleAnswerQuestion}
            onUpdateData={handleUpdateQuestionData}
            answeredQuestions={answeredQuestions}
            questionsWithDeviations={questionsWithDeviations}
            manuallyAddedQuestions={manuallyAddedQuestions}
            manuallyRemovedQuestions={manuallyRemovedQuestions}
            onNavigateToDocument={handleNavigateToDocument}
            deviationsLocked={deviationsLocked}
            onAddQuestionToRegister={handleAddQuestionToRegister}
            onRemoveQuestionFromRegister={handleRemoveQuestionFromRegister}
          />
        );
    }
  };

  const handleRoleSelect = (roleId: number) => {
    // Role 2 is "KETIL NORDSETH - Ansatt" (Producer/Farmer)
    if (roleId === 2) {
      setCurrentRole('producer');
      setActiveMainTab('producer');
      setActiveProducerTab('spesialitet'); // Changed from 'hjem' to go directly to Spesialitet
    }
    // Role 3 is "KETIL NORDSETH - Revisor"
    else if (roleId === 3) {
      setCurrentRole('revisor');
      setActiveMainTab('forside'); // Go directly to Forside page
    }
  };

  return (
    <div className="h-screen flex flex-col overflow-hidden">
      {/* Show Bytt Rolle page without navigation rail */}
      {activeMainTab === 'byttRolle' ? (
        <ByttRollePage onRoleSelect={handleRoleSelect} />
      ) : currentRole === 'producer' ? (
        /* Producer Interface */
        <div className="flex flex-1 overflow-hidden max-[1400px]:flex-col">
          <ProducerNavigationRail 
            activeTab={activeProducerTab} 
            onTabChange={setActiveProducerTab}
            onChangeRole={() => {
              setCurrentRole(null);
              setActiveMainTab('byttRolle');
            }}
          />
          <div className="flex flex-1 overflow-hidden flex-col">
            <div className="flex flex-1 overflow-hidden">
              {activeProducerTab === 'hjem' ? (
                <ProducerHomePage 
                  onNavigateToChecklist={() => setActiveProducerTab('lokalmat')}
                />
              ) : activeProducerTab === 'lokalmat' ? (
                <div className="flex-1 flex items-center justify-center text-muted-foreground">
                  <p className="body-large">Lokalmat - kommer snart</p>
                </div>
              ) : activeProducerTab === 'spesialitet' ? (
                <SpesialitetChecklistPage />
              ) : activeProducerTab === 'nytNorge' ? (
                <div className="flex-1 flex items-center justify-center text-muted-foreground">
                  <p className="body-large">Nyt Norge - kommer snart</p>
                </div>
              ) : activeProducerTab === 'foretaksopplysninger' ? (
                <div className="flex-1 flex items-center justify-center text-muted-foreground">
                  <p className="body-large">Foretaksopplysninger - kommer snart</p>
                </div>
              ) : activeProducerTab === 'avvikOgNotater' ? (
                <div className="flex-1 flex items-center justify-center text-muted-foreground">
                  <p className="body-large">Avvik og notater - kommer snart</p>
                </div>
              ) : activeProducerTab === 'rapporter' ? (
                <div className="flex-1 flex items-center justify-center text-muted-foreground">
                  <p className="body-large">Rapporter - kommer snart</p>
                </div>
              ) : activeProducerTab === 'opplastdeFiler' ? (
                <div className="flex-1 flex items-center justify-center text-muted-foreground">
                  <p className="body-large">Opplastede filer - kommer snart</p>
                </div>
              ) : activeProducerTab === 'minProfil' ? (
                <ProfilePage />
              ) : null}
            </div>
          </div>
        </div>
      ) : (
        /* Revisor Interface */
        <div className="flex flex-1 overflow-hidden max-[1400px]:flex-col">
          <NavigationRail activeTab={activeMainTab} onTabChange={setActiveMainTab} />
          
          {/* Main content area and notes panel wrapper */}
          <div className="flex flex-1 overflow-hidden">
            {/* Content area - Contains TopBar and pages */}
            <div className="flex flex-1 overflow-hidden flex-col">
              {/* Only show TopBar when in aksepterteRevisjoner (the main revision workflow) */}
              {activeMainTab === 'aksepterteRevisjoner' && viewingRevisionDetail && (
                <TopBar
                  farmName="Haugseter Gård"
                  activeTab={activeTopBarTab}
                  onTabChange={handleTopBarTabChange}
                  onBack={() => setViewingRevisionDetail(false)}
                  showNotesButton={true}
                  isNotesPanelOpen={isPrivateNotesPanelOpen}
                  onToggleNotes={() => setIsPrivateNotesPanelOpen(!isPrivateNotesPanelOpen)}
                  reportLocked={reportLocked}
                />
              )}
              
              {/* Main pages content */}
              <div className="flex flex-1 max-[1023px]:overflow-y-auto overflow-hidden">
                {activeMainTab === 'forside' ? (
                  <ForsidePage 
                    onNavigateToTildelteRevisjoner={() => setActiveMainTab('tildelteRevisjoner')}
                    onNavigateToVenterPaPlanlegging={() => {
                      setAksepterteRevisjonerFilter(['venter-pa-planlegging']);
                      setActiveMainTab('aksepterteRevisjoner');
                    }}
                    onRevisionClick={() => {
                      setActiveMainTab('aksepterteRevisjoner');
                      setActiveTopBarTab('planlegg'); // Reset to Planlegg revisjon tab
                      setViewingRevisionDetail(true);
                    }}
                    onNavigateToAvvikoversikt={() => setActiveMainTab('avviksoversikt')}
                  />
                ) : activeMainTab === 'tildelteRevisjoner' ? (
                  <TildelteRevisjonerPage 
                    onRevisionClick={() => setActiveMainTab('aksepterteRevisjoner')}
                  />
                ) : activeMainTab === 'aksepterteRevisjoner' ? (
                  viewingRevisionDetail ? (
                    renderAksepterteRevisjonerContent()
                  ) : (
                    <AksepterteRevisjonerPage 
                      onRevisionClick={() => {
                        setActiveTopBarTab('planlegg'); // Reset to Planlegg revisjon tab
                        setViewingRevisionDetail(true);
                      }}
                      initialFilter={aksepterteRevisjonerFilter}
                      onFilterChange={setAksepterteRevisjonerFilter}
                    />
                  )
                ) : activeMainTab === 'revisjonshistorikk' ? (
                  <RevisjonshistorikkPage />
                ) : activeMainTab === 'fakturagrunnlag' ? (
                  <FakturagrunnlagPage />
                ) : activeMainTab === 'avviksoversikt' ? (
                  <AvvikoversiktPage />
                ) : activeMainTab === 'minProfil' ? (
                  <ProfilePage />
                ) : (
                  <div className="flex-1 flex items-center justify-center text-muted-foreground">
                    <p className="body-large">Denne siden er under utvikling</p>
                  </div>
                )}
              </div>

              {/* Medium Extended FAB - Mobile/Tablet only, shown on aksepterteRevisjoner when viewing detail */}
              {activeMainTab === 'aksepterteRevisjoner' && viewingRevisionDetail && !isAnyBottomSheetOpen && (
                <button
                  onClick={() => setIsPrivateNotesPanelOpen(true)}
                  className="min-[1200px]:hidden fixed bottom-6 right-6 bg-secondary hover:bg-secondary/90 transition-colors rounded-[16px] shadow-lg flex items-center gap-3 px-6 h-14 z-50"
                  aria-label="Åpne egne notater"
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24">
                    <path d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2ZM18 20H6V4H13V9H18V20ZM8 15.2L9.4 16.6L11 15L12.6 16.6L14 15.2L12.4 13.6L14 12L12.6 10.6L11 12.2L9.4 10.6L8 12L9.6 13.6L8 15.2Z" fill="var(--secondary-foreground)" />
                  </svg>
                  <span className="label-large text-secondary-foreground">Egne notater</span>
                </button>
              )}
              
              {/* Mobile/Tablet: BottomSheet Notes Panel */}
              {activeMainTab === 'aksepterteRevisjoner' && viewingRevisionDetail && (
                <div className="min-[1200px]:hidden">
                  <PrivateNotesPanel 
                    isOpen={isPrivateNotesPanelOpen} 
                    onClose={() => setIsPrivateNotesPanelOpen(false)} 
                    onUpdateQuestionData={handleUpdateQuestionData}
                    getQuestionData={(questionId: string) => questionData[questionId]}
                    savedNotes={savedNotes}
                    onSaveNote={handleSaveNote}
                    onDeleteNote={handleDeleteNote}
                  />
                </div>
              )}
            </div>

            {/* Notes Panel - Desktop - Docked at application level (beside entire content) */}
            {activeMainTab === 'aksepterteRevisjoner' && viewingRevisionDetail && isPrivateNotesPanelOpen && (
              <div 
                className="max-[1199px]:hidden min-[1200px]:block"
                style={{ width: `${notesPanelWidth}px`, minWidth: `${notesPanelWidth}px` }}
              >
                <PrivateNotesPanelDockable 
                  isOpen={isPrivateNotesPanelOpen} 
                  onClose={() => setIsPrivateNotesPanelOpen(false)} 
                  onUpdateQuestionData={handleUpdateQuestionData}
                  getQuestionData={(questionId: string) => questionData[questionId]}
                  savedNotes={savedNotes}
                  onSaveNote={handleSaveNote}
                  onDeleteNote={handleDeleteNote}
                  panelWidth={notesPanelWidth}
                  onPanelWidthChange={setNotesPanelWidth}
                />
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}