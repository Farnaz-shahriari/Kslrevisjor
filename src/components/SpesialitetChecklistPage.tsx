import { useState, useEffect } from 'react';
import { ChevronRight, Video, AlertCircle, Link as LinkIcon, X, ChevronLeft } from 'lucide-react';
import { ChecklistHeading } from './ChecklistHeading';
import { ProductionSwitch } from './ProductionSwitch';
import { ProducerLeftSidebar } from './ProducerLeftSidebar';
import { ProducerQuestionView, ProducerQuestionData } from './ProducerQuestionView';
import { SpesialitetLeftSidebar } from './SpesialitetLeftSidebar';
import { SpesialitetQuestionView, SpesialitetQuestionData } from './SpesialitetQuestionView';
import { QuestionHeadingWithNavigation } from './QuestionHeadingWithNavigation';
import { RadioButton } from './ui/radio-button';

export function SpesialitetChecklistPage() {
  const [activeTab, setActiveTab] = useState('tilpass');
  const [selectedView, setSelectedView] = useState<'intro' | 'produksjoner' | 'question' | 'allQuestions'>('intro');
  const [selectedQuestionId, setSelectedQuestionId] = useState<string | null>(null);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [answeredQuestions, setAnsweredQuestions] = useState<Record<string, string>>({});
  const [questionDataMap, setQuestionDataMap] = useState<Record<string, ProducerQuestionData>>({});
  
  // Mobile/tablet navigation state
  const [showingMenu, setShowingMenu] = useState(true);
  
  // Spesialitet-specific state for "Alle spørsmål" tab (independent from revisor answers)
  const [spesialitetQuestionData, setSpesialitetQuestionData] = useState<Record<string, SpesialitetQuestionData>>({});
  const [spesialitetAnsweredQuestions, setSpesialitetAnsweredQuestions] = useState<Set<string>>(new Set());
  
  // State to preserve selected question per tab
  const [tilpassSelectedQuestionId, setTilpassSelectedQuestionId] = useState<string | null>(null);
  const [alleSelectedQuestionId, setAlleSelectedQuestionId] = useState<string | null>('1.1.1'); // Default to first question
  
  // Auto-select first question when switching to tabs with question lists
  useEffect(() => {
    // Reset to showing menu when switching tabs on mobile
    setShowingMenu(true);

    // Check if desktop
    const isDesktop = window.innerWidth >= 1400;

    if (activeTab === 'alle' || activeTab === 'ubesvarte' || activeTab === 'dokumentasjon') {
      // If no question is selected for this tab context, select the first one
      if (!alleSelectedQuestionId) {
        setAlleSelectedQuestionId('1.1.1');
        setSelectedQuestionId('1.1.1');
      } else if (isDesktop && !selectedQuestionId) {
        // On desktop, if currentQuestionId is empty but we have a preserved ID, restore it
        setSelectedQuestionId(alleSelectedQuestionId);
      } else {
        // Restore previously selected question
        setSelectedQuestionId(alleSelectedQuestionId);
      }
    } else if (activeTab === 'tilpass') {
      // Restore the tilpass tab's selected question if any
      setSelectedQuestionId(tilpassSelectedQuestionId);
    }
  }, [activeTab]);
  
  // Update the preserved question ID when user selects a question
  useEffect(() => {
    if (activeTab === 'alle' || activeTab === 'ubesvarte' || activeTab === 'dokumentasjon') {
      if (selectedQuestionId) {
        setAlleSelectedQuestionId(selectedQuestionId);
      }
    } else if (activeTab === 'tilpass') {
      setTilpassSelectedQuestionId(selectedQuestionId);
    }
  }, [selectedQuestionId, activeTab]);

  // Map temaspørsmål IDs to question group IDs in database
  const temaToGroupMapping: Record<string, string> = {
    '1.3': 'group-1-3', // KRAV TIL KSL - BRUK AV EGNE RÅVARER
    '1.4': 'group-1-4', // KRAV TIL KSL - NORSKE RÅVARER KJØPT DIREKTE FRA PRIMÆRPRODUSENTER
    '1.5': 'group-1-5', // KRAV TIL KSL - NORSKE RÅVARER OG / ELLER FOREDLEDE NÆRINGSMIDLER KJØPT FRA ANDRE VIRKSOMHETER
    '1.6': 'group-1-6', // KRAV TIL KVALITETSSYSTEM - NORSKE RÅVARER FRA ANDRE PRIMÆRPRODUKSJONER ENN LANDBRUK
  };
  
  // Determine which question groups to exclude based on temaspørsmål answers
  const getExcludedQuestionGroups = (): Set<string> => {
    const excluded = new Set<string>();
    
    // For each tema question, check if it's answered "nei"
    Object.entries(temaToGroupMapping).forEach(([temaId, groupId]) => {
      const answer = answeredQuestions[temaId];
      // If answered "nei", exclude the corresponding group
      if (answer === 'nei') {
        excluded.add(groupId);
      }
    });
    
    return excluded;
  };
  const [productions, setProductions] = useState<Record<string, boolean>>({
    'erter-bonner': true,
    'bier': true,
    'blomster': false,
    'baer': true,
    'frukt': true,
    'fsa-gull': false,
    'geit': true,
    'grovfor': false,
    'gronnsaker': false,
    'hest': true,
    'hest-naering': false,
    'hjort': true,
    'inn-tunet': true,
    'juletraer': false,
    'kalkuner': true,
    'kameldyr': false,
  });

  const questions = [
    { id: '1.3', title: 'KRAV TIL KSL - BRUK AV EGNE RÅVARER', fullTitle: 'KRAV TIL KSL - BRUK AV EGNE RÅVARER, Brukes det råvarer fra egen primærproduksjon', guideline: 'Landbruksbaserte råvarer skal være produsert av primærprodusenter som har gyldig Kvalitetssystem i landbruket (KSL).' },
    { id: '1.4', title: 'KRAV TIL KSL - NORSKE RÅVARER KJØPT DIREKTE FRA PRIMÆRPRODUSENTER', fullTitle: 'KRAV TIL KSL - NORSKE RÅVARER KJØPT DIREKTE FRA PRIMÆRPRODUSENTER', guideline: 'Landbruksbaserte råvarer skal være produsert av primærprodusenter som har gyldig Kvalitetssystem i landbruket (KSL).' },
    { id: '1.5', title: 'KRAV TIL KSL - NORSKE RÅVARER OG / ELLER FOREDLEDE NÆRINGSMIDLER KJØPT FRA ANDRE VIRKSOMHETER', fullTitle: 'KRAV TIL KSL - NORSKE RÅVARER OG / ELLER FOREDLEDE NÆRINGSMIDLER KJØPT FRA ANDRE VIRKSOMHETER', guideline: 'Landbruksbaserte råvarer skal være produsert av primærprodusenter som har gyldig Kvalitetssystem i landbruket (KSL).' },
    { id: '1.6', title: 'KRAV TIL KVALITETSSYSTEM - NORSKE RÅVARER FRA ANDRE PRIMÆRPRODUKSJONER ENN LANDBRUK', fullTitle: 'KRAV TIL KVALITETSSYSTEM - NORSKE RÅVARER FRA ANDRE PRIMÆRPRODUKSJONER ENN LANDBRUK', guideline: 'Landbruksbaserte råvarer skal være produsert av primærprodusenter som har gyldig Kvalitetssystem i landbruket (KSL).' },
  ];

  const selectedQuestion = questions.find(q => q.id === selectedQuestionId) || null;

  const handleAnswerSelect = (answer: string) => {
    // Toggle: if clicking the same answer, deselect it
    if (selectedAnswer === answer) {
      setSelectedAnswer(null);
      if (selectedQuestionId) {
        setAnsweredQuestions(prev => {
          const newAnswers = { ...prev };
          delete newAnswers[selectedQuestionId];
          return newAnswers;
        });
      }
    } else {
      setSelectedAnswer(answer);
      if (selectedQuestionId) {
        setAnsweredQuestions(prev => ({
          ...prev,
          [selectedQuestionId]: answer
        }));
      }
    }
  };

  // Navigation helpers for tema questions
  const handlePreviousQuestion = () => {
    const currentIndex = questions.findIndex(q => q.id === selectedQuestionId);
    if (currentIndex > 0) {
      const prevQuestion = questions[currentIndex - 1];
      setSelectedQuestionId(prevQuestion.id);
      setSelectedAnswer(answeredQuestions[prevQuestion.id] || null);
    }
  };

  const handleNextQuestion = () => {
    const currentIndex = questions.findIndex(q => q.id === selectedQuestionId);
    if (currentIndex < questions.length - 1) {
      const nextQuestion = questions[currentIndex + 1];
      setSelectedQuestionId(nextQuestion.id);
      setSelectedAnswer(answeredQuestions[nextQuestion.id] || null);
    }
  };

  const hasPreviousQuestion = () => {
    const currentIndex = questions.findIndex(q => q.id === selectedQuestionId);
    return currentIndex > 0;
  };

  const hasNextQuestion = () => {
    const currentIndex = questions.findIndex(q => q.id === selectedQuestionId);
    return currentIndex < questions.length - 1;
  };

  const handleProducerQuestionAnswer = (questionId: string, answer: 'ja' | 'nei' | null) => {
    setQuestionDataMap(prev => ({
      ...prev,
      [questionId]: {
        ...prev[questionId],
        answer: answer || undefined
      }
    }));

    if (answer) {
      setAnsweredQuestions(prev => ({
        ...prev,
        [questionId]: answer
      }));
    } else {
      setAnsweredQuestions(prev => {
        const newAnswered = { ...prev };
        delete newAnswered[questionId];
        return newAnswered;
      });
    }
  };

  const handleProducerQuestionNote = (questionId: string, note: string) => {
    setQuestionDataMap(prev => ({
      ...prev,
      [questionId]: {
        ...prev[questionId],
        note
      }
    }));
  };

  // Handlers for "Alle spørsmål" tab (Spesialitet questions)
  const handleSpesialitetAnswer = (questionId: string, answer: 'ja' | 'nei' | 'ikke-relevant') => {
    setSpesialitetQuestionData(prev => ({
      ...prev,
      [questionId]: {
        ...prev[questionId],
        answer
      }
    }));
    setSpesialitetAnsweredQuestions(prev => new Set([...prev, questionId]));
  };

  const handleSpesialitetUpdateData = (questionId: string, data: Partial<SpesialitetQuestionData>) => {
    setSpesialitetQuestionData(prev => ({
      ...prev,
      [questionId]: {
        ...prev[questionId],
        ...data
      }
    }));
  };

  const toggleProduction = (id: string) => {
    setProductions(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const productionsList = [
    { id: 'erter-bonner', name: 'Erter og bønner til konservesindustri', relevant: 'KSL', reported: 'Nei' },
    { id: 'bier', name: 'Bier', relevant: 'KSL', reported: 'Nei' },
    { id: 'blomster', name: 'Blomster og planteskole', relevant: 'KSL', reported: 'Nei' },
    { id: 'baer', name: 'Bær', relevant: 'KSL', reported: 'Nei' },
    { id: 'frukt', name: 'Frukt', relevant: 'KSL', reported: 'Nei' },
    { id: 'fsa-gull', name: 'FSA Gull', relevant: 'KSL', reported: 'Nei' },
    { id: 'geit', name: 'Geit', relevant: 'KSL', reported: 'Nei' },
    { id: 'grovfor', name: 'Grovfôr', relevant: 'KSL', reported: 'Nei' },
    { id: 'gronnsaker', name: 'Grønnsaker', relevant: 'KSL', reported: 'Nei' },
    { id: 'hest', name: 'Hest', relevant: 'KSL', reported: 'Nei' },
    { id: 'hest-naering', name: 'Hest i næring', relevant: 'KSL', reported: 'Nei' },
    { id: 'hjort', name: 'Hjort', relevant: 'KSL', reported: 'Nei' },
    { id: 'inn-tunet', name: 'Inn på tunet', relevant: 'KSL', reported: 'Nei' },
    { id: 'juletraer', name: 'Juletrær', relevant: 'KSL', reported: 'Nei' },
    { id: 'kalkuner', name: 'Kalkuner, ender og gjess', relevant: 'KSL', reported: 'Nei' },
    { id: 'kameldyr', name: 'Kameldyr', relevant: 'KSL', reported: 'Nei' },
  ];

  // Mobile/tablet navigation handlers
  const handleNavigateToDetail = (view: 'intro' | 'produksjoner' | 'question', questionId?: string) => {
    setSelectedView(view);
    if (questionId) {
      setSelectedQuestionId(questionId);
      setSelectedAnswer(answeredQuestions[questionId] || null);
    }
    setShowingMenu(false);
  };

  const handleQuestionSelect = (questionId: string) => {
    setSelectedQuestionId(questionId);
    if (window.innerWidth < 1400) {
      setShowingMenu(false);
    }
  };

  const handleBackToMenu = () => {
    setShowingMenu(true);
  };

  return (
    <div className="flex flex-1 overflow-hidden flex-col bg-background">
      {/* Checklist Heading */}
      <ChecklistHeading
        checklistName="Spesialitet"
        activeTab={activeTab}
        onTabChange={setActiveTab}
        showSubmitButton={true}
        onSubmit={() => {
          console.log('Submit egenrevisjon');
        }}
      />

      {/* Main Content Area */}
      <div className="flex flex-1 overflow-hidden">
        {/* Conditional Rendering based on activeTab */}
        {activeTab === 'alle' || activeTab === 'ubesvarte' || activeTab === 'dokumentasjon' ? (
          <>
            {/* ALLE SPØRSMÅL / UBESVarte / DOKUMENTASJONSKRAV TABS */}
            {/* MOBILE/TABLET: Menu Panel - Shows ONLY when showingMenu is true */}
            {showingMenu && (
              <div className="min-[1400px]:hidden w-full h-full bg-background flex flex-col overflow-hidden">
                <SpesialitetLeftSidebar
                  currentQuestionId={selectedQuestionId || '1.1.1'}
                  onQuestionSelect={handleQuestionSelect}
                  answeredQuestions={spesialitetAnsweredQuestions}
                  excludedQuestionGroups={getExcludedQuestionGroups()}
                  filterMode={
                    activeTab === 'ubesvarte' ? 'unanswered' : 
                    activeTab === 'dokumentasjon' ? 'documentation' : 
                    'all'
                  }
                />
              </div>
            )}

            {/* DESKTOP: Menu Panel - Always visible */}
            <div className="max-[1400px]:hidden w-[400px] h-full flex flex-col overflow-hidden">
              <SpesialitetLeftSidebar
                currentQuestionId={selectedQuestionId || '1.1.1'}
                onQuestionSelect={(questionId) => {
                  setSelectedQuestionId(questionId);
                }}
                answeredQuestions={spesialitetAnsweredQuestions}
                excludedQuestionGroups={getExcludedQuestionGroups()}
                filterMode={
                  activeTab === 'ubesvarte' ? 'unanswered' : 
                  activeTab === 'dokumentasjon' ? 'documentation' : 
                  'all'
                }
              />
            </div>

            {/* Vertical Divider - Desktop only */}
            <div className="w-px h-full bg-[var(--border)] max-[1400px]:hidden" />

            {/* MOBILE/TABLET & DESKTOP: Detail Panel */}
            <div className={`flex-1 h-full flex-col ${showingMenu ? 'max-[1400px]:hidden' : 'max-[1400px]:flex'} min-[1400px]:flex max-[1400px]:w-full overflow-hidden`}>
              {/* Back button - visible only on mobile/tablet */}
              {!showingMenu && (
                <div className="px-6 pt-4 pb-2 min-[1400px]:hidden">
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

              {/* Question View */}
              <div className="flex-1 overflow-hidden">
                <SpesialitetQuestionView
                  questionId={selectedQuestionId || '1.1.1'}
                  questionData={spesialitetQuestionData[selectedQuestionId || '1.1.1'] || {}}
                  onAnswer={handleSpesialitetAnswer}
                  onUpdateData={handleSpesialitetUpdateData}
                  onNavigate={(questionId) => setSelectedQuestionId(questionId)}
                />
              </div>
            </div>
          </>
        ) : (
          <>
            {/* TILPASS TAB */}
            {/* MOBILE/TABLET: Menu Panel - Shows ONLY when showingMenu is true */}
            {showingMenu && (
              <div className="min-[1400px]:hidden w-full h-full bg-background flex flex-col overflow-hidden">
                <div className="flex-1 overflow-auto px-6 py-2 space-y-1">
                  {/* Intro Section */}
                  <button 
                    onClick={() => handleNavigateToDetail('intro')}
                    className="w-full text-left px-4 min-h-[56px] rounded-[var(--radius)] transition-colors hover:bg-muted"
                  >
                    <div className="flex items-center gap-4">
                      <span className="body-large text-muted-foreground">
                        Før du starter med egenrevisjonen
                      </span>
                    </div>
                  </button>

                  {/* Produksjoner Section */}
                  <button 
                    onClick={() => handleNavigateToDetail('produksjoner')}
                    className="w-full text-left px-4 min-h-[56px] rounded-[var(--radius)] transition-colors hover:bg-muted"
                  >
                    <div className="flex items-center gap-4">
                      <span className="body-large text-muted-foreground">
                        Produksjoner
                      </span>
                    </div>
                  </button>

                  {/* Divider */}
                  <div className="h-px bg-border my-3"></div>

                  {/* Temaspørsmål Section */}
                  <div className="flex flex-col gap-4">
                    <div className="px-4 min-h-[36px] flex items-center">
                      <span className="label-xsmall text-muted-foreground">TEMASPØRSMÅL</span>
                    </div>

                    {questions.map((item) => {
                      const isAnswered = !!answeredQuestions[item.id];
                      return (
                        <button
                          key={item.id}
                          onClick={() => handleNavigateToDetail('question', item.id)}
                          className="w-full text-left px-4 min-h-[56px] rounded-[12px] transition-colors hover:bg-muted"
                        >
                          <div className="flex items-center gap-2">
                            {/* Status Icon */}
                            <div className="shrink-0">
                              {isAnswered ? (
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 20 20">
                                  <path d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 14.41 14.41 18 10 18ZM14.59 5.58L8 12.17L5.41 9.59L4 11L8 15L16 7L14.59 5.58Z" fill="var(--muted-foreground)" />
                                </svg>
                              ) : (
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 20 20">
                                  <g>
                                    <path d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.58 18 2 14.42 2 10C2 5.58 5.58 2 10 2C14.42 2 18 5.58 18 10C18 14.42 14.42 18 10 18Z" fill="var(--muted-foreground)" />
                                    <path d="M5 11.5C5.82843 11.5 6.5 10.8284 6.5 10C6.5 9.17157 5.82843 8.5 5 8.5C4.17157 8.5 3.5 9.17157 3.5 10C3.5 10.8284 4.17157 11.5 5 11.5Z" fill="var(--muted-foreground)" />
                                    <path d="M10 11.5C10.8284 11.5 11.5 10.8284 11.5 10C11.5 9.17157 10.8284 8.5 10 8.5C9.17157 8.5 8.5 9.17157 8.5 10C8.5 10.8284 9.17157 11.5 10 11.5Z" fill="var(--muted-foreground)" />
                                    <path d="M15 11.5C15.8284 11.5 16.5 10.8284 16.5 10C16.5 9.17157 15.8284 8.5 15 8.5C14.1716 8.5 13.5 9.17157 13.5 10C13.5 10.8284 14.1716 11.5 15 11.5Z" fill="var(--muted-foreground)" />
                                  </g>
                                </svg>
                              )}
                            </div>
                            
                            {/* Question Text */}
                            <div className="flex-1 min-w-0 flex items-center gap-2">
                              <span className="label-medium shrink-0 text-muted-foreground">
                                {item.id}
                              </span>
                              <span className="body-large flex-1 line-clamp-3 text-muted-foreground">
                                {item.title}
                              </span>
                            </div>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}

            {/* DESKTOP: Menu Panel - Always visible */}
            <div className="max-[1400px]:hidden w-[400px] border-r border-border flex flex-col overflow-hidden">
              <div className="flex-1 overflow-auto px-6 py-2 space-y-1">
                {/* Intro Section */}
                <button 
                  onClick={() => {
                    setSelectedView('intro');
                    setSelectedQuestionId(null);
                  }}
                  className={`w-full text-left px-4 min-h-[56px] rounded-[var(--radius)] transition-colors ${
                    selectedView === 'intro' ? 'bg-secondary-container' : 'hover:bg-muted'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span className={`body-large ${selectedView === 'intro' ? 'text-secondary-container-foreground' : 'text-muted-foreground'}`}>
                      Før du starter med egenrevisjonen
                    </span>
                  </div>
                </button>

                {/* Produksjoner Section */}
                <button 
                  onClick={() => {
                    setSelectedView('produksjoner');
                    setSelectedQuestionId(null);
                  }}
                  className={`w-full text-left px-4 min-h-[56px] rounded-[var(--radius)] transition-colors ${
                    selectedView === 'produksjoner' ? 'bg-secondary-container' : 'hover:bg-muted'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span className={`body-large ${selectedView === 'produksjoner' ? 'text-secondary-container-foreground' : 'text-muted-foreground'}`}>
                      Produksjoner
                    </span>
                  </div>
                </button>

                {/* Divider */}
                <div className="h-px bg-border my-3"></div>

                {/* Temaspørsmål Section */}
                <div className="flex flex-col gap-4">
                  <div className="px-4 min-h-[36px] flex items-center">
                    <span className="label-xsmall text-muted-foreground">TEMASPØRSMÅL</span>
                  </div>

                  {questions.map((item) => {
                    const isSelected = selectedView === 'question' && selectedQuestionId === item.id;
                    const isAnswered = !!answeredQuestions[item.id];
                    
                    // Split title on "-" to separate overline from main title
                    const titleParts = item.title.split('-').map(part => part.trim());
                    const overlineText = titleParts.length > 1 ? titleParts[0] : '';
                    const mainTitle = titleParts.length > 1 ? titleParts.slice(1).join(' - ') : item.title;
                    
                    return (
                      <button
                        key={item.id}
                        onClick={() => {
                          setSelectedView('question');
                          setSelectedQuestionId(item.id);
                          setSelectedAnswer(answeredQuestions[item.id] || null);
                        }}
                        className={`w-full text-left px-4 min-h-[56px] rounded-[12px] transition-colors ${
                          isSelected ? 'bg-secondary-container' : 'hover:bg-muted'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          {/* Status Icon */}
                          <div className="shrink-0">
                            {isAnswered ? (
                              <svg className="w-5 h-5" fill="none" viewBox="0 0 20 20">
                                <path d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 14.41 14.41 18 10 18ZM14.59 5.58L8 12.17L5.41 9.59L4 11L8 15L16 7L14.59 5.58Z" fill={isSelected ? 'var(--secondary-container-foreground)' : 'var(--muted-foreground)'} />
                              </svg>
                            ) : (
                              <svg className="w-5 h-5" fill="none" viewBox="0 0 20 20">
                                <g>
                                  <path d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.58 18 2 14.42 2 10C2 5.58 5.58 2 10 2C14.42 2 18 5.58 18 10C18 14.42 14.42 18 10 18Z" fill={isSelected ? 'var(--secondary-container-foreground)' : 'var(--muted-foreground)'} />
                                  <path d="M5 11.5C5.82843 11.5 6.5 10.8284 6.5 10C6.5 9.17157 5.82843 8.5 5 8.5C4.17157 8.5 3.5 9.17157 3.5 10C3.5 10.8284 4.17157 11.5 5 11.5Z" fill={isSelected ? 'var(--secondary-container-foreground)' : 'var(--muted-foreground)'} />
                                  <path d="M10 11.5C10.8284 11.5 11.5 10.8284 11.5 10C11.5 9.17157 10.8284 8.5 10 8.5C9.17157 8.5 8.5 9.17157 8.5 10C8.5 10.8284 9.17157 11.5 10 11.5Z" fill={isSelected ? 'var(--secondary-container-foreground)' : 'var(--muted-foreground)'} />
                                  <path d="M15 11.5C15.8284 11.5 16.5 10.8284 16.5 10C16.5 9.17157 15.8284 8.5 15 8.5C14.1716 8.5 13.5 9.17157 13.5 10C13.5 10.8284 14.1716 11.5 15 11.5Z" fill={isSelected ? 'var(--secondary-container-foreground)' : 'var(--muted-foreground)'} />
                                </g>
                              </svg>
                            )}
                          </div>
                          
                          {/* Question Text */}
                          <div className="flex-1 min-w-0 flex items-center gap-2">
                            <span className={`label-medium shrink-0 ${isSelected ? 'text-secondary-container-foreground' : 'text-muted-foreground'}`}>
                              {item.id}
                            </span>
                            <div className="flex-1 min-w-0 flex flex-col">
                              {overlineText && (
                                <span className={`label-xsmall ${isSelected ? 'text-secondary-container-foreground' : 'text-muted-foreground'}`}>
                                  {overlineText.toUpperCase()}
                                </span>
                              )}
                              <span className={`body-large line-clamp-3 ${isSelected ? 'text-secondary-container-foreground' : 'text-muted-foreground'}`}>
                                {mainTitle}
                              </span>
                            </div>
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* TILPASS TAB - Main Content */}
            {selectedView === 'question' && selectedQuestion ? (
              <>
                  {/* Temaspørsmål View */}
                <div className={`flex-1 flex-col ${showingMenu ? 'max-[1400px]:hidden' : 'max-[1400px]:flex'} min-[1400px]:flex max-[1400px]:w-full overflow-hidden`}>
                  {/* Back button - visible only on mobile/tablet */}
                  {!showingMenu && (
                    <div className="px-6 pt-4 pb-2 min-[1400px]:hidden">
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

                  <div className="flex-1 overflow-auto px-10 py-6">
                    {/* Question heading with navigation */}
                    <div className="mb-6">
                      <QuestionHeadingWithNavigation
                        questionNumber={selectedQuestion.id}
                        hasAnswer={!!selectedAnswer}
                        onPrevious={hasPreviousQuestion() ? handlePreviousQuestion : undefined}
                        onNext={hasNextQuestion() ? handleNextQuestion : undefined}
                        hasPrevious={hasPreviousQuestion()}
                        hasNext={hasNextQuestion()}
                        onStartFilling={() => {
                          setActiveTab('alle');
                          setSelectedQuestionId('1.1.1');
                        }}
                      />
                    </div>
                    
                    <h3 className="title-large text-foreground mb-8">
                      {selectedQuestion.fullTitle}
                    </h3>

                    {/* Answer Options - Horizontal Layout */}
                    <div className="flex flex-col min-[768px]:flex-row items-stretch min-[768px]:items-center w-full gap-2 mb-6">
                      <div className="flex flex-col h-10 min-h-[40px] items-center justify-center flex-1 rounded-[var(--radius)] transition-colors hover:bg-muted">
                        <RadioButton
                          checked={selectedAnswer === 'ja'}
                          onClick={() => handleAnswerSelect('ja')}
                          label="Ja"
                          className="w-full px-4"
                        />
                      </div>

                      <div className="flex flex-col h-10 min-h-[40px] items-center justify-center flex-1 rounded-[var(--radius)] transition-colors hover:bg-muted">
                        <RadioButton
                          checked={selectedAnswer === 'nei'}
                          onClick={() => handleAnswerSelect('nei')}
                          label="Nei"
                          className="w-full px-4"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="w-[400px] bg-[var(--muted)] border-l border-border overflow-auto px-6 py-4 max-[1400px]:hidden">
                  <p className="body-medium text-foreground">
                    {selectedQuestion.guideline}
                  </p>
                </div>
              </>
            ) : selectedView === 'produksjoner' ? (
            <div className={`flex-1 overflow-auto flex-col ${showingMenu ? 'max-[1400px]:hidden' : 'max-[1400px]:flex'} min-[1400px]:flex max-[1400px]:w-full`}>
              {/* Back button - visible only on mobile/tablet */}
              {!showingMenu && (
                <div className="px-6 pt-4 pb-2 min-[1400px]:hidden">
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

              <div className="flex flex-col justify-center items-start gap-2 py-3 px-10 self-stretch border-b border-border">
                <div className="flex items-center justify-between w-full">
                  <h2 className="title-large text-foreground">
                    Sjekk at det er de riktige produksjonene som ligger inne hos deg. Er det feil, rett opp dette før du starter egenrevisjonen.
                  </h2>
                  <button 
                    onClick={() => {
                      setSelectedView('question');
                      if (questions.length > 0) {
                        setSelectedQuestionId(questions[0].id);
                        setSelectedAnswer(answeredQuestions[questions[0].id] || null);
                      }
                    }}
                    className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 h-14 rounded-[var(--radius-button)] label-medium transition-colors flex items-center gap-2 shrink-0"
                  >
                    <ChevronRight className="w-5 h-5" />
                    Gå videre til temaspørsmål
                  </button>
                </div>
              </div>

              <div className="flex-1 overflow-auto">
                {/* "Tilpass dine produksjoner" button */}
                <div className="px-10 pt-6 pb-4">
                  <button className="border border-border hover:bg-muted text-foreground px-6 h-14 rounded-[var(--radius-button)] label-medium transition-colors">
                    Tilpass dine produksjoner
                  </button>
                </div>

                <table className="w-full">
                  <thead className="sticky top-0 bg-[var(--surface-container-low)] border-b border-border">
                    <tr>
                      <th className="pl-10 pr-4 py-2 text-left">
                        <span className="label-medium text-foreground">Dine produksjoner</span>
                      </th>
                      <th className="px-4 py-2 text-center">
                        <span className="label-medium text-foreground">Relevant for</span>
                      </th>
                      <th className="px-4 py-2 text-center">
                        <span className="label-medium text-foreground">Tildeling</span>
                      </th>
                      <th className="px-4 py-2 text-center">
                        <span className="label-medium text-foreground">Innmeldt av varemottaker</span>
                      </th>
                    </tr>
                  </thead>

                  <tbody className="divide-y divide-border">
                    {productionsList
                      .filter((production) => productions[production.id]) // Only show products that are "on"
                      .map((production) => (
                        <tr key={production.id} className="hover:bg-muted transition-colors">
                          <td className="pl-10 pr-4 py-2">
                            <span className="body-medium text-foreground">{production.name}</span>
                          </td>

                          <td className="px-4 py-2 text-center">
                            <span className="body-medium text-foreground">{production.relevant}</span>
                          </td>

                          <td className="px-4 py-2 text-center">
                            <span className="body-medium text-foreground"></span>
                          </td>

                          <td className="px-4 py-2 text-center">
                            <span className="body-medium text-foreground">{production.reported}</span>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          ) : (
            /* Intro View */
            <div className={`flex-1 overflow-auto flex-col justify-start items-start gap-2 py-3 px-10 self-stretch ${showingMenu ? 'max-[1400px]:hidden' : 'max-[1400px]:flex'} min-[1400px]:flex max-[1400px]:w-full`}>
              {/* Back button - visible only on mobile/tablet */}
              {!showingMenu && (
                <div className="px-6 pt-4 pb-2 min-[1400px]:hidden border-b border-border -mx-10 -mt-3 mb-3">
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

              <div>
                <h2 className="title-large text-foreground mb-2">Før du starter med egenrevisjonen</h2>
              </div>

              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex items-start justify-center pt-1">
                    <AlertCircle className="w-6 h-6 text-foreground" />
                  </div>
                  <div className="flex-1">
                    <p className="body-large text-foreground">
                      Sjekk at det er de riktige produksjonene som ligger inne hos deg. Er det feil, rett opp dette før du starter egenrevisjonen.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex items-start justify-center pt-1">
                    <Video className="w-6 h-6 text-foreground" />
                  </div>
                  <div className="flex-1">
                    <p className="body-large text-foreground">
                      Tips{' '}
                      <a href="https://www.youtube.com/watch?v=Ex-GXubkyHU&t=5s" target="_blank" rel="noopener noreferrer" className="text-foreground underline hover:text-foreground/80">
                        Forbered deg til egenrevisjonen
                      </a>
                    </p>
                  </div>
                  <button className="flex items-center justify-center">
                    <ChevronRight className="w-5 h-5 text-foreground" />
                  </button>
                </div>

                <div className="flex gap-4">
                  <div className="flex items-start justify-center pt-1">
                    <AlertCircle className="w-6 h-6 text-foreground" />
                  </div>
                  <div className="flex-1">
                    <p className="body-large text-foreground">
                      Ved spørsmål som krever dokumentasjon, du kan enten laste opp et dokument eller du kan skrive inn hva du har gjort eller hvilket fagsystem du benytter (f.eks. «Benytter Skifteplan» til gjødselplanlegging, «egen notatbok» til besøksjournal osv. eller oppdatert leverandørliste for Nyt Norge).
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex items-start justify-center pt-1">
                    <Video className="w-6 h-6 text-foreground" />
                  </div>
                  <div className="flex-1">
                    <p className="body-large text-foreground">
                      Tips{' '}
                      <a href="https://www.youtube.com/watch?v=yRRvcdUO2ng&t=8s" target="_blank" rel="noopener noreferrer" className="text-foreground underline hover:text-foreground/80">
                        Slik fyller du ut egenrevisjonen
                      </a>
                    </p>
                  </div>
                  <button className="flex items-center justify-center">
                    <ChevronRight className="w-5 h-5 text-foreground" />
                  </button>
                </div>

                <div className="flex gap-4">
                  <div className="flex items-start justify-center pt-1">
                    <AlertCircle className="w-6 h-6 text-foreground" />
                  </div>
                  <div className="flex-1">
                    <p className="body-large text-foreground">
                      Har du et sertifikat/godkjenning som er gyldig flere år kan du laste opp dokumentasjon på dette og bekrefte varighet slik at du ikke trenger å besvare dette spørsmålet før dokumentet har gått ut på dato. (f.eks. Plantevernsertifikat, varme arbeider, sertifisering, HMS-kurs osv.).
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex items-start justify-center pt-1">
                    <AlertCircle className="w-6 h-6 text-foreground" />
                  </div>
                  <div className="flex-1">
                    <p className="body-large text-foreground">
                      Les veiledningstekstene på spørsmålet slik at du er klar over hva som kreves for at du kan svare «ja» på det enkelte spørsmålet. Du finner lenker med veiledning og referanse til forskrifter knyttet til hvert spørsmål.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex items-start justify-center pt-1">
                    <AlertCircle className="w-6 h-6 text-foreground" />
                  </div>
                  <div className="flex-1">
                    <p className="body-large text-foreground">
                      Avvik er helt naturlig og noe alle har i større eller mindre grad. Bruk egenrevisjonen til å finne de områdene du ikke helt tilfredsstiller kravene. Sett en frist som gir deg mulighet til å jobbe med problemet, ikke sett for kort tid, ikke sett frister alt for langt fram i tid. Prioriter de viktige områdene.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex items-start justify-center pt-1">
                    <AlertCircle className="w-6 h-6 text-foreground" />
                  </div>
                  <div className="flex-1">
                    <p className="body-large text-foreground">
                      «ikke aktuelt» er helt greit da det er spørsmål som skal dekke både små og store foretak.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex items-start justify-center pt-1">
                    <AlertCircle className="w-6 h-6 text-foreground" />
                  </div>
                  <div className="flex-1">
                    <p className="body-large text-foreground">
                      Du trenger ikke svare på alt samme dag, det som er registrert er lagret til neste gang du logger inn.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex items-start justify-center pt-1">
                    <AlertCircle className="w-6 h-6 text-foreground" />
                  </div>
                  <div className="flex-1">
                    <p className="body-large text-foreground">
                      Når du er ferdig med alle spørsmålene, husk å sende inn slik at du får registrert at du har gjennomført egenrevisjonen. Dokumentasjon kan skrives ut på forsiden.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex items-start justify-center pt-1">
                    <LinkIcon className="w-6 h-6 text-foreground" />
                  </div>
                  <div className="flex-1">
                    <p className="body-large text-foreground">
                      Se også hjelpeskjema og veiledning,{' '}
                      <a href="https://www.ksl.no/no" target="_blank" rel="noopener noreferrer" className="text-foreground underline hover:text-foreground/80">
                        velg meny på nettsiden
                      </a>
                    </p>
                  </div>
                  <button className="flex items-center justify-center">
                    <ChevronRight className="w-5 h-5 text-foreground" />
                  </button>
                </div>
              </div>

              <div className="pt-6">
                <button 
                  onClick={() => setSelectedView('produksjoner')}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2.5 h-10 rounded-[var(--radius-button)] label-medium transition-colors flex items-center gap-2"
                >
                  <ChevronRight className="w-5 h-5" />
                  Gå videre til produksjoner
                </button>
              </div>
            </div>
          )}
          </>
        )}
      </div>
    </div>
  );
}