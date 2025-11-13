import { useState } from 'react';
import { NavigationRail } from './components/NavigationRail';
import { TopBar, TopBarTab } from './components/TopBar';
import { LeftSidebar } from './components/LeftSidebar';
import { QuestionView } from './components/QuestionView';
import { RightSidebar } from './components/RightSidebar';
import { DocumentOverview } from './components/DocumentOverview';
import { WriteReportPage } from './components/WriteReportPage';
import { RevisjonsgrunnlagPage } from './components/RevisjonsgrunnlagPage';

type AnswerType = 'ja' | 'nei' | 'ikke-relevant';
type TabType = 'forside' | 'tildelteRevisjoner' | 'aksepterteRevisjoner' | 'avviksoversikt' | 'fakturagrunnlag' | 'revisjonshistorikk';

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

export default function App() {
  const [currentQuestionId, setCurrentQuestionId] = useState('1.1.1');
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
  const [activeMainTab, setActiveMainTab] = useState<TabType>('aksepterteRevisjoner');
  const [selectedDocumentIndex, setSelectedDocumentIndex] = useState<number | null>(null);
  const [deviationsLocked, setDeviationsLocked] = useState(false);
  const [activeTopBarTab, setActiveTopBarTab] = useState<TopBarTab>('registrer');
  
  // State for managing which questions are in Register Revisjon
  const [manuallyAddedQuestions, setManuallyAddedQuestions] = useState<Set<string>>(new Set());
  const [manuallyRemovedQuestions, setManuallyRemovedQuestions] = useState<Set<string>>(new Set());

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
          />
        );
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
          <>
            <LeftSidebar 
              currentQuestionId={currentQuestionId}
              onQuestionSelect={setCurrentQuestionId}
              answeredQuestions={answeredQuestions}
              questionsWithDeviations={questionsWithDeviations}
              manuallyAddedQuestions={manuallyAddedQuestions}
              manuallyRemovedQuestions={manuallyRemovedQuestions}
            />
            <QuestionView 
              questionId={currentQuestionId}
              questionData={questionData[currentQuestionId] || {}}
              onAnswer={handleAnswerQuestion}
              onUpdateData={handleUpdateQuestionData}
              onNavigate={setCurrentQuestionId}
              onNavigateToDocument={handleNavigateToDocument}
              deviationsLocked={deviationsLocked}
            />
            <RightSidebar questionId={currentQuestionId} />
          </>
        );
    }
  };

  return (
    <div className="h-screen flex overflow-hidden">
      <NavigationRail activeTab={activeMainTab} onTabChange={setActiveMainTab} />
      <div className="flex flex-1 overflow-hidden flex-col">
        {/* Only show TopBar when in aksepterteRevisjoner (the main revision workflow) */}
        {activeMainTab === 'aksepterteRevisjoner' && (
          <TopBar
            farmName="Haugseter Gård"
            activeTab={activeTopBarTab}
            onTabChange={handleTopBarTabChange}
          />
        )}
        
        <div className="flex flex-1 overflow-hidden">
          {activeMainTab === 'aksepterteRevisjoner' ? (
            renderAksepterteRevisjonerContent()
          ) : activeMainTab === 'revisjonshistorikk' ? (
            <WriteReportPage 
              onBack={() => setActiveMainTab('aksepterteRevisjoner')}
              questionData={questionData}
              onAnswerQuestion={handleAnswerQuestion}
              onUpdateQuestionData={handleUpdateQuestionData}
              onNavigateToDocument={handleNavigateToDocument}
              onLockDeviations={handleLockDeviations}
              deviationsLocked={deviationsLocked}
            />
          ) : activeMainTab === 'fakturagrunnlag' ? (
            <DocumentOverview initialSelectedIndex={selectedDocumentIndex} />
          ) : (
            <div className="flex-1 flex items-center justify-center text-muted-foreground">
              <p className="body-large">Denne siden er under utvikling</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
