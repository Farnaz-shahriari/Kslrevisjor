import { useState, useEffect } from 'react';
import { AlertCircle, ChevronDown, Search } from 'lucide-react';
import { questionsData, getQuestionById } from '../data/questions';
import { ObservationView } from './ObservationView';
import { DeviationListView } from './DeviationListView';
import { NotatView } from './NotatView';
import { DocumentsMenu } from './DocumentsMenu';
import { AttachedDocumentCard } from './AttachedDocumentCard';
import { Snackbar } from './Snackbar';
import { BottomSheet } from './ui/bottom-sheet';
import { Button } from './ui/button';
import { KravVeilederSection } from './KravVeilederSection';
import { formatNorwegianDate } from '../utils/dateFormat';
import { PreviousAvvikCard } from './PreviousAvvikCard';
import { DeviationDetailPanel } from './DeviationDetailPanel';
import svgPathsChip from '../imports/svg-cne2b5etox';

type AnswerType = 'ja' | 'nei' | 'ikke-relevant';
type TabType = 'observasjoner' | 'egenvurderinger' | 'notat' | 'avvik';

interface QuestionData {
  answer?: AnswerType;
  improvementText?: string;
  improvementImages?: string[];
  positiveText?: string;
  positiveImages?: string[];
  notatText?: string;
  deviations?: any[];
  attachedDocuments?: string[];
  isPreviousAvvik?: boolean;
  previousAvvikData?: {
    severity: 'kritisk' | 'avvik' | 'lite';
    checklist: string;
    deadline: Date;
    status: string;
  };
}

interface SvaroversiktSectionProps {
  isConfirmed: boolean;
  onConfirmChange: (value: boolean) => void;
  onNext: () => void;
  onPrevious: () => void;
  questionData: Record<string, QuestionData>;
  onAnswerQuestion?: (questionId: string, answer: AnswerType) => void;
  onUpdateQuestionData?: (questionId: string, data: Partial<QuestionData>) => void;
  onNavigateToDocument?: (documentIndex: number) => void;
  deviationsLocked?: boolean;
  initialFilter?: FilterTab;
  onBottomSheetOpenChange?: (isOpen: boolean) => void;
}

type FilterTab = 'all' | 'ubesvarte' | 'ja' | 'nei' | 'forbedring' | 'positive' | 'ikke-relevant';

interface QuestionAnswer {
  id: string;
  answer: 'Ja' | 'Nei' | 'Ikke relevant';
  questionText: string;
  categoryId: string;
  groupId: string;
  hasForbedringspunkter?: boolean;
  hasPositiveObservasjoner?: boolean;
}

export function SvaroversiktSection({ 
  isConfirmed, 
  onConfirmChange, 
  onNext, 
  onPrevious, 
  questionData,
  onAnswerQuestion,
  onUpdateQuestionData,
  onNavigateToDocument,
  deviationsLocked,
  initialFilter,
  onBottomSheetOpenChange
}: SvaroversiktSectionProps) {
  // Calculate initial filter - start with 'ubesvarte' if there are unanswered questions
  const getInitialFilter = (): FilterTab => {
    // If initialFilter is provided, use it
    if (initialFilter) return initialFilter;
    
    let unansweredCount = 0;
    questionsData.forEach(category => {
      category.questionGroups.forEach(group => {
        group.questions.forEach(question => {
          const data = questionData[question.id];
          if (!data || !data.answer) {
            unansweredCount++;
          }
        });
      });
    });
    return unansweredCount > 0 ? 'ubesvarte' : 'all';
  };
  
  const [selectedFilter, setSelectedFilter] = useState<FilterTab>(getInitialFilter());
  const [selectedQuestionId, setSelectedQuestionId] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<TabType>('egenvurderinger');
  const [showDocumentsMenu, setShowDocumentsMenu] = useState(false);
  const [panelWidth, setPanelWidth] = useState(520);
  const [isResizing, setIsResizing] = useState(false);
  const [showResizeHandle, setShowResizeHandle] = useState(false);
  const [snackbarVisible, setSnackbarVisible] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarUndo, setSnackbarUndo] = useState<(() => void) | null>(null);
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);

  // Notify parent when bottom sheet state changes
  useEffect(() => {
    onBottomSheetOpenChange?.(isBottomSheetOpen);
  }, [isBottomSheetOpen, onBottomSheetOpenChange]);

  // Update filter when initialFilter changes
  useEffect(() => {
    if (initialFilter) {
      setSelectedFilter(initialFilter);
    }
  }, [initialFilter]);
  
  const [answers, setAnswers] = useState<QuestionAnswer[]>(() => {
    // Generate answers from actual questionData passed from App.tsx
    const allQuestions: QuestionAnswer[] = [];
    
    questionsData.forEach(category => {
      category.questionGroups.forEach(group => {
        group.questions.forEach(question => {
          const data = questionData[question.id];
          
          // Only include questions that have been answered
          if (data && data.answer) {
            let answer: 'Ja' | 'Nei' | 'Ikke relevant';
            if (data.answer === 'ja') answer = 'Ja';
            else if (data.answer === 'nei') answer = 'Nei';
            else answer = 'Ikke relevant';
            
            allQuestions.push({
              id: question.id,
              answer,
              questionText: question.title,
              categoryId: category.id,
              groupId: group.id,
              hasForbedringspunkter: !!data.improvementText,
              hasPositiveObservasjoner: !!data.positiveText,
            });
          }
        });
      });
    });
    
    return allQuestions;
  });
  
  // CRITICAL: displayedAnswers is what's shown in the list
  // It only updates when filter changes, NOT when individual answers change
  const [displayedAnswers, setDisplayedAnswers] = useState<QuestionAnswer[]>([]);
  
  // Track pending changes flag
  const [hasPendingChanges, setHasPendingChanges] = useState(false);

  // Get unanswered questions - computed from questionData
  const unansweredQuestions = (() => {
    const unanswered: QuestionAnswer[] = [];
    
    questionsData.forEach(category => {
      category.questionGroups.forEach(group => {
        group.questions.forEach(question => {
          const data = questionData[question.id];
          
          // Include questions without answers
          if (!data || !data.answer) {
            unanswered.push({
              id: question.id,
              answer: '' as any, // No answer selected
              questionText: question.title,
              categoryId: category.id,
              groupId: group.id,
            });
          }
        });
      });
    });
    
    return unanswered;
  })();

  // Calculate total questions and check if all answered
  const totalQuestions = (() => {
    let count = 0;
    questionsData.forEach(category => {
      category.questionGroups.forEach(group => {
        count += group.questions.length;
      });
    });
    return count;
  })();

  const allQuestionsAnswered = answers.length === totalQuestions;

  // Reorganize displayed answers ONLY when filter tab changes (not when answers change)
  useEffect(() => {
    let filtered: QuestionAnswer[];
    
    if (selectedFilter === 'ubesvarte') {
      filtered = unansweredQuestions;
    } else {
      filtered = answers.filter(answer => {
        switch (selectedFilter) {
          case 'ja':
            return answer.answer === 'Ja';
          case 'nei':
            return answer.answer === 'Nei';
          case 'ikke-relevant':
            return answer.answer === 'Ikke relevant';
          case 'forbedring':
            return answer.hasForbedringspunkter;
          case 'positive':
            return answer.hasPositiveObservasjoner;
          case 'all':
          default:
            return true;
        }
      });
    }
    
    setDisplayedAnswers(filtered);
    setHasPendingChanges(false);
  }, [selectedFilter]); // ONLY reorganize when filter tab changes, not when answers change

  // Resize handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsResizing(true);
  };

  useEffect(() => {
    if (!isResizing) return;

    const handleMouseMove = (e: MouseEvent) => {
      const container = document.getElementById('svaroversikt-container');
      if (!container) return;

      const containerRect = container.getBoundingClientRect();
      const newWidth = containerRect.right - e.clientX;
      
      // Snap to 20px intervals
      const snappedWidth = Math.round(newWidth / 20) * 20;
      
      // Constrain between min and max
      const constrainedWidth = Math.max(480, Math.min(680, snappedWidth));
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

  // Automatically mark as confirmed when all questions are answered
  useEffect(() => {
    if (allQuestionsAnswered && !isConfirmed) {
      onConfirmChange(true);
    } else if (!allQuestionsAnswered && isConfirmed) {
      onConfirmChange(false);
    }
  }, [allQuestionsAnswered, isConfirmed, onConfirmChange]);

  // Set first question as selected by default
  useEffect(() => {
    if (answers.length > 0 && !selectedQuestionId) {
      setSelectedQuestionId(answers[0].id);
    }
  }, [answers.length, selectedQuestionId]);

  // When filter tab changes, select the first question of that tab
  useEffect(() => {
    const filtered = answers.filter(answer => {
      switch (selectedFilter) {
        case 'ja':
          return answer.answer === 'Ja';
        case 'nei':
          return answer.answer === 'Nei';
        case 'ikke-relevant':
          return answer.answer === 'Ikke relevant';
        case 'forbedring':
          return answer.hasForbedringspunkter;
        case 'positive':
          return answer.hasPositiveObservasjoner;
        case 'ubesvarte':
          return false; // Will use unansweredQuestions instead
        case 'all':
        default:
          return true;
      }
    });

    if (selectedFilter === 'ubesvarte' && unansweredQuestions.length > 0) {
      setSelectedQuestionId(unansweredQuestions[0].id);
    } else if (filtered.length > 0) {
      setSelectedQuestionId(filtered[0].id);
    }
  }, [selectedFilter]);

  // Update active tab based on answer
  useEffect(() => {
    if (selectedQuestionId) {
      const data = questionData[selectedQuestionId];
      if (data?.answer === 'ja') {
        setActiveTab('observasjoner');
      } else if (data?.answer === 'nei') {
        setActiveTab('avvik');
      } else if (data?.answer) {
        setActiveTab('egenvurderinger');
      } else {
        setActiveTab('egenvurderinger');
      }
    }
  }, [selectedQuestionId, questionData]);

  // Auto-confirm when all questions are answered
  useEffect(() => {
    if (allQuestionsAnswered && !isConfirmed) {
      onConfirmChange(true);
    }
  }, [allQuestionsAnswered, isConfirmed, onConfirmChange]);

  // Calculate counts for each tab
  const tabCounts = {
    all: answers.length,
    ubesvarte: unansweredQuestions.length,
    ja: answers.filter(a => a.answer === 'Ja').length,
    nei: answers.filter(a => a.answer === 'Nei').length,
    'ikke-relevant': answers.filter(a => a.answer === 'Ikke relevant').length,
    forbedring: answers.filter(a => a.hasForbedringspunkter).length,
    positive: answers.filter(a => a.hasPositiveObservasjoner).length,
  };

  const filteredAnswers = selectedFilter === 'ubesvarte' 
    ? unansweredQuestions 
    : answers.filter(answer => {
        switch (selectedFilter) {
          case 'ja':
            return answer.answer === 'Ja';
          case 'nei':
            return answer.answer === 'Nei';
          case 'ikke-relevant':
            return answer.answer === 'Ikke relevant';
          case 'forbedring':
            return answer.hasForbedringspunkter;
          case 'positive':
            return answer.hasPositiveObservasjoner;
          case 'all':
          default:
            return true;
        }
      });

  const selectedQuestion = selectedFilter === 'ubesvarte' 
    ? unansweredQuestions.find(a => a.id === selectedQuestionId)
    : answers.find(a => a.id === selectedQuestionId);
  const selectedQuestionInfo = selectedQuestionId ? getQuestionById(selectedQuestionId) : null;
  const selectedQuestionData = selectedQuestionId ? questionData[selectedQuestionId] || {} : {};

  const handleAnswerChange = (newAnswer: 'Ja' | 'Nei' | 'Ikke relevant') => {
    if (selectedQuestionId && onAnswerQuestion) {
      const answerType = newAnswer === 'Ja' ? 'ja' : newAnswer === 'Nei' ? 'nei' : 'ikke-relevant';
      const wasUnanswered = selectedFilter === 'ubesvarte';
      const currentQuestionId = selectedQuestionId;
      const questionInfo = getQuestionById(selectedQuestionId);
      
      // Store previous state for undo
      const previousAnswer = questionData[selectedQuestionId]?.answer;
      
      onAnswerQuestion(selectedQuestionId, answerType);
      
      // Update local state
      const existingAnswer = answers.find(a => a.id === selectedQuestionId);
      if (existingAnswer) {
        // Update existing answer in both answers and displayedAnswers
        setAnswers(prev => prev.map(a => 
          a.id === selectedQuestionId ? { ...a, answer: newAnswer } : a
        ));
        setDisplayedAnswers(prev => prev.map(a =>
          a.id === selectedQuestionId ? { ...a, answer: newAnswer } : a
        ));
      } else {
        // Add new answer for previously unanswered question
        if (questionInfo) {
          const newAnswerObj = {
            id: selectedQuestionId,
            answer: newAnswer,
            questionText: questionInfo.title,
            categoryId: questionInfo.categoryId || '',
            groupId: questionInfo.groupId || '',
          };
          
          setAnswers(prev => [...prev, newAnswerObj]);
          // Update displayed answers in place - replace the unanswered item with the answered one
          setDisplayedAnswers(prev => prev.map(a =>
            a.id === selectedQuestionId ? newAnswerObj : a
          ));
          
          // Flag that we have pending changes
          setHasPendingChanges(true);
          
          // If we're in the ubesvarte tab, show snackbar and select next question
          if (wasUnanswered) {
            // Show snackbar with undo functionality
            const answerText = newAnswer === 'Ja' ? 'Ja' : newAnswer === 'Nei' ? 'Nei' : 'Ikke relevant';
            setSnackbarMessage(`${currentQuestionId} er merket som ${answerText}`);
            setSnackbarUndo(() => () => {
              // Undo the answer
              if (previousAnswer) {
                onAnswerQuestion(currentQuestionId, previousAnswer);
              } else {
                // Remove the answer by setting it to undefined
                onUpdateQuestionData?.(currentQuestionId, { answer: undefined });
              }
              
              // Remove from answers list
              setAnswers(prev => prev.filter(a => a.id !== currentQuestionId));
              
              // Select the question again
              setSelectedQuestionId(currentQuestionId);
              
              // Hide snackbar
              setSnackbarVisible(false);
            });
            setSnackbarVisible(true);
            
            // Auto-hide snackbar after 5 seconds
            setTimeout(() => {
              setSnackbarVisible(false);
            }, 5000);
            
            // Find and select the next unanswered question
            const stillUnanswered: QuestionAnswer[] = [];
            questionsData.forEach(category => {
              category.questionGroups.forEach(group => {
                group.questions.forEach(question => {
                  const data = questionData[question.id];
                  if ((!data || !data.answer) && question.id !== currentQuestionId) {
                    stillUnanswered.push({
                      id: question.id,
                      answer: '' as any,
                      questionText: question.title,
                      categoryId: category.id,
                      groupId: group.id,
                    });
                  }
                });
              });
            });
            
            if (stillUnanswered.length > 0) {
              // Immediately select the next unanswered question
              setSelectedQuestionId(stillUnanswered[0].id);
            } else {
              // All questions answered, switch to 'all' tab and select first question
              setSelectedFilter('all');
              if (answers.length > 0) {
                setSelectedQuestionId(answers[0].id);
              }
            }
          }
        }
      }
    }
  };

  const handleRemoveDocument = (index: number) => {
    if (selectedQuestionId && selectedQuestionData.attachedDocuments && onUpdateQuestionData) {
      const newDocuments = selectedQuestionData.attachedDocuments.filter((_, i) => i !== index);
      onUpdateQuestionData(selectedQuestionId, { attachedDocuments: newDocuments });
    }
  };

  const getVisibleTabs = (): TabType[] => {
    if (!selectedQuestionData.answer) {
      return ['egenvurderinger', 'notat'];
    }
    if (selectedQuestionData.answer === 'ja') {
      return ['observasjoner', 'egenvurderinger', 'notat'];
    } else if (selectedQuestionData.answer === 'nei') {
      return ['avvik', 'egenvurderinger', 'notat'];
    }
    return ['egenvurderinger', 'notat'];
  };

  const getTabLabel = (tab: TabType): string => {
    const labels: Record<TabType, string> = {
      observasjoner: 'Observasjoner',
      egenvurderinger: 'Egenrevisjonssvar',
      notat: 'Notat',
      avvik: 'Avvik'
    };
    return labels[tab];
  };

  const getSeverityColor = (severity: 'kritisk' | 'avvik' | 'lite'): string => {
    const colors = {
      'kritisk': 'bg-[#ffdad6]',
      'avvik': 'bg-[#fdd19f]',
      'lite': 'bg-[#fdeeb1]'
    };
    return colors[severity] || 'bg-[#fdd19f]';
  };

  const getSeverityLabel = (severity: 'kritisk' | 'avvik' | 'lite'): string => {
    // Always return just "Kritisk" for tables
    return 'Kritisk';
  };

  return (
    <div className="flex flex-col h-full w-full">
      {/* Header Section */}
      <div className="px-10 pt-3 pb-6 border-b border-border">
        {/* Title with Navigation Buttons */}
        <div className="flex items-center justify-between mb-2 max-[1400px]:block">
          <h2 className="title-large max-[1400px]:mb-2">Svaroversikt</h2>
          
          {/* Navigation buttons - always enabled */}
          <div className="flex items-center gap-4 max-[1400px]:hidden">
            <Button
              variant="tertiary"
              onClick={onPrevious}
            >
              Forrige
            </Button>
            <Button
              variant={allQuestionsAnswered ? "primary" : "tertiary"}
              onClick={onNext}
              className="flex items-center gap-2"
            >
              <span>Neste</span>
              <ChevronDown className="w-5 h-5 rotate-[-90deg]" />
            </Button>
          </div>
        </div>
        
        <p className="body-large text-foreground mb-4">
          Ikke relevante spørsmål blir slettet. Avvikene behandles videre i neste steg.
        </p>

        {/* Status Message */}
        {!allQuestionsAnswered ? (
          <button
            onClick={() => setSelectedFilter('ubesvarte')}
            className="flex items-center gap-3 w-full bg-[#fef7ec] border border-[#e6c589] rounded-xl px-4 py-4 mb-3 hover:bg-[#fdf3e0] transition-colors cursor-pointer"
          >
            <AlertCircle className="w-5 h-5 text-[#7d5800] shrink-0" />
            <span className="body-large text-[#3d2c00]">
              {unansweredQuestions.length} spørsmål står fortsatt ubesvart i denne sjekklisten.
            </span>
          </button>
        ) : (
          <div className="flex items-center gap-3 w-full bg-[#e6f4ea] border border-[#a8dab5] rounded-xl px-4 py-4 mb-3">
            <AlertCircle className="w-5 h-5 text-[#137333] shrink-0" />
            <span className="body-large text-[#0d5025]">
              Alle spørsmål er besvart. Svaroversikten er fullført.
            </span>
          </div>
        )}
      </div>

      {/* Filter Tabs */}
      <div className="bg-background border-b border-border w-full">
        <div className="flex items-center pl-10">
          {/* Ubesvarte spørsmål - First position, only show if there are unanswered questions */}
          {tabCounts.ubesvarte > 0 && (
            <button
              onClick={() => setSelectedFilter('ubesvarte')}
              className={`px-4 py-3.5 label-medium relative transition-colors ${
                selectedFilter === 'ubesvarte'
                  ? 'text-foreground'
                  : 'text-muted-foreground'
              }`}
            >
              Ubesvarte spørsmål
              {selectedFilter === 'ubesvarte' && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
              )}
            </button>
          )}
          {/* Alle svar - Always show */}
          <button
            onClick={() => setSelectedFilter('all')}
            className={`px-4 py-3.5 label-medium relative transition-colors ${
              selectedFilter === 'all'
                ? 'text-foreground'
                : 'text-muted-foreground'
            }`}
          >
            Alle svar
            {selectedFilter === 'all' && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
            )}
          </button>
          {/* Ja - Only show if there are items */}
          {tabCounts.ja > 0 && (
            <button
              onClick={() => setSelectedFilter('ja')}
              className={`px-4 py-3.5 label-medium relative transition-colors ${
                selectedFilter === 'ja'
                  ? 'text-foreground'
                  : 'text-muted-foreground'
              }`}
            >
              Ja
              {selectedFilter === 'ja' && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
              )}
            </button>
          )}
          {/* Nei - Only show if there are items */}
          {tabCounts.nei > 0 && (
            <button
              onClick={() => setSelectedFilter('nei')}
              className={`px-4 py-3.5 label-medium relative transition-colors ${
                selectedFilter === 'nei'
                  ? 'text-foreground'
                  : 'text-muted-foreground'
              }`}
            >
              Nei
              {selectedFilter === 'nei' && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
              )}
            </button>
          )}
          {/* Forbedringspunkter - Only show if there are items */}
          {tabCounts.forbedring > 0 && (
            <button
              onClick={() => setSelectedFilter('forbedring')}
              className={`px-4 py-3.5 label-medium relative transition-colors ${
                selectedFilter === 'forbedring'
                  ? 'text-foreground'
                  : 'text-muted-foreground'
              }`}
            >
              Forbedringspunkter
              {selectedFilter === 'forbedring' && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
              )}
            </button>
          )}
          {/* Positive observasjoner - Only show if there are items */}
          {tabCounts.positive > 0 && (
            <button
              onClick={() => setSelectedFilter('positive')}
              className={`px-4 py-3.5 label-medium relative transition-colors ${
                selectedFilter === 'positive'
                  ? 'text-foreground'
                  : 'text-muted-foreground'
              }`}
            >
              Positive observasjoner
              {selectedFilter === 'positive' && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
              )}
            </button>
          )}
          {/* Ikke relevant - Only show if there are items */}
          {tabCounts['ikke-relevant'] > 0 && (
            <button
              onClick={() => setSelectedFilter('ikke-relevant')}
              className={`px-4 py-3.5 label-medium relative transition-colors ${
                selectedFilter === 'ikke-relevant'
                  ? 'text-foreground'
                  : 'text-muted-foreground'
              }`}
            >
              Ikke relevant
              {selectedFilter === 'ikke-relevant' && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
              )}
            </button>
          )}
        </div>
      </div>

      {/* Table and Detail Panel */}
      <div id="svaroversikt-container" className="flex flex-1 overflow-hidden w-full">
        {/* List/Table Container - Changes layout based on whether detail is shown */}
        <div 
          className={`h-full flex flex-col relative ${
            selectedQuestionId ? 'w-1/2' : 'flex-1'
          }`}
        >
          <div className="flex-1 overflow-auto bg-background flex flex-col">
            {/* Desktop Table - Shows on wide screens (≥1600px) or when detail panel is not shown, OR on tablet (768-1399px) */}
            <table className={`w-full ${selectedQuestionId ? 'min-[1400px]:max-[1599px]:hidden max-[768px]:hidden' : 'max-[768px]:hidden'}`}>
            <thead className="bg-surface-container-low sticky top-0 z-10">
              <tr className="border-b border-border">
                <th className="w-46 px-10 py-2 text-left bg-surface-container-low">
                  <div className="flex items-center gap-2">
                    <ChevronDown className="w-6 h-6 text-foreground" />
                    <span className="label-medium text-foreground">Svar</span>
                  </div>
                </th>
                <th className="px-4 py-2 text-left bg-surface-container-low">
                  <div className="flex items-center gap-2">
                    <Search className="w-6 h-6 text-foreground" />
                    <span className="label-medium text-foreground">Sjekklistespørsmål</span>
                  </div>
                </th>
                <th className="px-4 py-2 text-right w-48 bg-surface-container-low"></th>
              </tr>
            </thead>
            <tbody>
              {displayedAnswers.map((answer) => {
                // Check if this question has a previous avvik
                const data = questionData[answer.id];
                const isPreviousAvvik = data?.isPreviousAvvik && data?.previousAvvikData;
                
                // Get severity config for previous avvik badge
                const getSeverityConfig = (severity: 'kritisk' | 'avvik' | 'lite') => {
                  const severityConfig = {
                    kritisk: {
                      bg: 'bg-s-avvik-container',
                      text: 'text-on-s-avvik-container',
                      label: 'Kritisk'
                    },
                    avvik: {
                      bg: 'bg-avvik-container',
                      text: 'text-on-avvik-container',
                      label: 'Avvik'
                    },
                    lite: {
                      bg: 'bg-l-avvik-container',
                      text: 'text-on-l-avvik-container',
                      label: 'Lite avvik'
                    }
                  };
                  return severityConfig[severity];
                };
                
                // Normal question row (including previous avvik - rendered as normal row)
                return (
                  <tr
                    key={answer.id}
                    onClick={() => {
                      setSelectedQuestionId(answer.id);
                      // Open bottom sheet on mobile/tablet
                      if (window.innerWidth < 1400) {
                        setIsBottomSheetOpen(true);
                      }
                    }}
                    className={`cursor-pointer border-b border-border transition-colors ${
                      selectedQuestionId === answer.id
                        ? 'bg-secondary-container'
                        : 'hover:bg-muted'
                    }`}
                  >
                    <td className="px-10 py-3">
                      {/* Show severity badge for previous avvik, or normal answer */}
                      {isPreviousAvvik && data.previousAvvikData ? (
                        (() => {
                          const config = getSeverityConfig(data.previousAvvikData.severity);
                          return (
                            <div className={`inline-flex items-center px-3 py-1.5 rounded-lg ${config.bg} ${config.text}`}>
                              <span className="label-medium">{config.label}</span>
                            </div>
                          );
                        })()
                      ) : !answer.answer || answer.answer === '' ? (
                        <div className="bg-[#f4f4ea] box-border flex items-center justify-center overflow-clip relative rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.3),0px_1px_3px_1px_rgba(0,0,0,0.15)] shrink-0">
                          <div className="box-border flex gap-2 h-8 items-center justify-center pl-2 pr-4 py-1.5">
                            <div className="relative shrink-0 w-[18px] h-[18px]">
                              <div className="absolute inset-[8.333%]">
                                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
                                  <path d={svgPathsChip.p1c3b4f80} fill="#BA1A1A" />
                                </svg>
                              </div>
                            </div>
                            <span className="label-medium text-foreground whitespace-nowrap">
                              Trenger utfylling
                            </span>
                          </div>
                        </div>
                      ) : (
                        <span className={`body-large ${
                          selectedQuestionId === answer.id
                            ? 'text-accent-foreground'
                            : 'text-foreground'
                        }`}>
                          {answer.answer}
                        </span>
                      )}
                    </td>
                    <td className="px-4 py-3">
                      <span className={`body-medium line-clamp-1 ${
                        selectedQuestionId === answer.id
                          ? 'text-accent-foreground'
                          : 'text-foreground'
                      }`}>
                        {answer.id} {answer.questionText}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      {/* Empty cell - "Trenger utfylling" moved to Svar column */}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          {/* Condensed List - Shows on smaller screens when table would be too cramped */}
          <div className={`flex flex-col ${selectedQuestionId ? 'min-[768px]:max-[1399px]:hidden min-[1600px]:hidden' : 'min-[768px]:hidden'}`}>
            <div className="px-6 py-3 border-b border-[var(--border)] bg-surface-container-low sticky top-0 z-10">
              <span className="label-medium text-foreground">Svar</span>
            </div>
            {displayedAnswers.map((answer) => (
              <div
                key={answer.id}
                onClick={() => {
                  setSelectedQuestionId(answer.id);
                  // On mobile/tablet, open bottom sheet
                  if (window.innerWidth < 1400) {
                    setIsBottomSheetOpen(true);
                  }
                }}
                className={`px-6 py-4 border-b border-[var(--border)] hover:bg-muted cursor-pointer transition-colors ${
                  selectedQuestionId === answer.id ? 'bg-secondary-container' : ''
                }`}
              >
                <div className="flex flex-col gap-2">
                  {/* Line 1: Answer status with gap-1 */}
                  <div className="flex flex-row items-center gap-1 flex-wrap">
                    {!answer.answer || answer.answer === '' ? (
                      <div className="bg-[#f4f4ea] box-border flex items-center justify-center overflow-clip relative rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.3),0px_1px_3px_1px_rgba(0,0,0,0.15)] shrink-0">
                        <div className="box-border flex gap-2 h-8 items-center justify-center pl-2 pr-4 py-1.5">
                          <div className="relative shrink-0 w-[18px] h-[18px]">
                            <div className="absolute inset-[8.333%]">
                              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
                                <path d={svgPathsChip.p1c3b4f80} fill="#BA1A1A" />
                              </svg>
                            </div>
                          </div>
                          <span className="label-medium text-foreground whitespace-nowrap">
                            Trenger utfylling
                          </span>
                        </div>
                      </div>
                    ) : (
                      <span className="label-small text-muted-foreground">
                        Svar: {answer.answer}
                      </span>
                    )}
                  </div>
                  
                  {/* Line 2: Question text */}
                  <span className="body-medium text-foreground">
                    {answer.id} {answer.questionText}
                  </span>
                </div>
              </div>
            ))}
          </div>
          </div>
          
          {/* Snackbar positioned at bottom of table */}
          {snackbarVisible && (
            <div className="fixed bottom-4 left-10 right-10 z-50 flex justify-start">
              <div className="max-w-2xl">
                <Snackbar
                  message={snackbarMessage}
                  actionText="Angre"
                  onAction={snackbarUndo || undefined}
                  onClose={() => setSnackbarVisible(false)}
                  isVisible={snackbarVisible}
                />
              </div>
            </div>
          )}
        </div>

        {/* DESKTOP: Detail Panel - Shows selected question at 50% width */}
        {selectedQuestion && selectedQuestionInfo && (() => {
          // Check if this is a previous avvik
          const data = questionData[selectedQuestion.id];
          const isPreviousAvvik = data?.isPreviousAvvik && data?.previousAvvikData;
          
          // If it's a previous avvik, show DeviationDetailPanel instead
          if (isPreviousAvvik && data.previousAvvikData) {
            const previousAvvik = data.previousAvvikData;
            return (
              <div className="max-[1400px]:hidden w-1/2 h-full bg-background overflow-y-auto border-l border-[var(--border)]">
                <DeviationDetailPanel
                  deviation={{
                    id: previousAvvik.id,
                    severity: previousAvvik.severity,
                    foretakName: previousAvvik.foretakName,
                    checklist: previousAvvik.checklist,
                    deadline: previousAvvik.deadline,
                    status: previousAvvik.status as any,
                    requiresAction: previousAvvik.requiresAction,
                    confirmationMethod: previousAvvik.confirmationMethod as any
                  }}
                  context="tidligere-revisjon"
                />
              </div>
            );
          }
          
          // Normal question view
          return (
            <div 
              className="max-[1400px]:hidden w-1/2 h-full bg-background overflow-y-auto border-l border-[var(--border)]"
              onMouseEnter={() => setShowResizeHandle(true)}
              onMouseLeave={() => !isResizing && setShowResizeHandle(false)}
            >
              {/* Resize Handle */}
              <div
                className={`absolute left-0 top-0 bottom-0 w-1 cursor-col-resize transition-colors ${
                  showResizeHandle || isResizing ? 'bg-primary' : 'bg-transparent'
                } hover:bg-primary`}
                onMouseDown={handleMouseDown}
                style={{ 
                  width: '4px', 
                  marginLeft: '-2px',
                  zIndex: 20
                }}
              />
              <div className="overflow-auto flex-1">
                {/* Question Header */}
                <div className="px-6 py-4 border-b border-border">
                  <h3 className="body-large text-foreground mb-3">
                    {selectedQuestion.id} {selectedQuestion.questionText}
                  </h3>
                  
                  {/* Krav & Veileder Section */}
                  {selectedQuestionInfo && (
                    <KravVeilederSection question={selectedQuestionInfo} />
                  )}
                </div>

                {/* Answer Options */}
                <div className="px-6 py-4 border-b border-border">
                  <h4 className="label-medium text-foreground mb-3">Velg svar</h4>
                  <div className="space-y-2">
                    {(['Ja', 'Nei', 'Ikke relevant'] as const).map((option) => (
                      <button
                        key={option}
                        onClick={() => handleAnswerChange(option)}
                        disabled={deviationsLocked}
                        className={`w-full flex items-center gap-3 px-3 py-2 rounded-[var(--radius)] transition-colors ${
                          deviationsLocked 
                            ? 'opacity-40 cursor-not-allowed' 
                            : 'hover:bg-muted'
                        }`}
                      >
                        <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${
                          selectedQuestion?.answer === option
                            ? 'border-primary bg-primary'
                            : 'border-foreground'
                        }`}>
                          {selectedQuestion?.answer === option && (
                            <div className="w-2.5 h-2.5 rounded-full bg-white" />
                          )}
                        </div>
                        <span className={`body-medium ${
                          selectedQuestion?.answer === option ? 'text-primary' : 'text-foreground'
                        }`}>
                          {option}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Tabs */}
                <div className="border-b border-border">
                  <div className="flex items-center px-4">
                    {getVisibleTabs().map((tab) => (
                      <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className="px-3 py-3 label-medium relative transition-colors"
                        style={{
                          color: activeTab === tab ? '#1a1c16' : '#44483b'
                        }}
                      >
                        {getTabLabel(tab)}
                        {activeTab === tab && (
                          <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Tab Content */}
                <div className="px-6 py-4">
                  {selectedQuestionData.answer && (
                    <>
                      {activeTab === 'observasjoner' && (
                        <div className="max-w-full">
                          <ObservationView 
                            improvementText={selectedQuestionData.improvementText}
                            improvementImages={selectedQuestionData.improvementImages}
                            positiveText={selectedQuestionData.positiveText}
                            positiveImages={selectedQuestionData.positiveImages}
                            onUpdate={(data) => onUpdateQuestionData?.(selectedQuestionId, data)}
                          />
                        </div>
                      )}
                      {activeTab === 'avvik' && (
                        <div className="max-w-full">
                          <DeviationListView 
                            deviations={selectedQuestionData.deviations}
                            onUpdate={(deviations) => onUpdateQuestionData?.(selectedQuestionId, { deviations })}
                          />
                        </div>
                      )}
                    </>
                  )}

                  {/* Show farmer's self-audit answer when viewing Egenrevisjonssvar tab */}
                  {activeTab === 'egenvurderinger' && (
                    <div className="flex flex-col gap-4">
                      <div className="flex flex-col gap-2">
                        <p className="label-small text-muted-foreground m-0">Svarvalg</p>
                        <p className="body-medium text-foreground m-0">Ja</p>
                      </div>
                      <div className="flex flex-col gap-2">
                        <p className="label-small text-muted-foreground m-0">Svartekst</p>
                        <p className="body-medium text-foreground m-0">
                          {selectedQuestionInfo.answerText || 'Rutinene for rengjøring av melkestallen kan forbedres ved å innføre en fast sjekkliste etter hver melking.'}
                        </p>
                      </div>
                      
                      {/* Attached documents section */}
                      {selectedQuestionData.attachedDocuments && selectedQuestionData.attachedDocuments.length > 0 && (
                        <div className="flex flex-col gap-2 pt-2">
                          <p className="label-small text-muted-foreground m-0">Knyttede dokumenter</p>
                          <div className="flex flex-col gap-2">
                            {selectedQuestionData.attachedDocuments.map((doc, index) => (
                              <AttachedDocumentCard
                                key={index}
                                documentName={doc}
                                onRemove={() => handleRemoveDocument(index)}
                              />
                            ))}
                          </div>
                        </div>
                      )}
                      
                      <DocumentsMenu 
                        isOpen={showDocumentsMenu} 
                        onToggle={() => setShowDocumentsMenu(!showDocumentsMenu)}
                        attachedDocuments={selectedQuestionData.attachedDocuments || []}
                        onAttachDocuments={(documents) => onUpdateQuestionData?.(selectedQuestionId, { attachedDocuments: documents })}
                        onNavigateToDocument={onNavigateToDocument}
                      />
                    </div>
                  )}

                  {activeTab === 'notat' && (
                    <div className="max-w-full">
                      <NotatView 
                        notatText={selectedQuestionData.notatText}
                        onUpdate={(text) => onUpdateQuestionData?.(selectedQuestionId, { notatText: text })}
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })()}
      </div>

      {/* MOBILE/TABLET: Bottom Sheet */}
      {selectedQuestion && selectedQuestionInfo && (() => {
        // Check if this is a previous avvik
        const data = questionData[selectedQuestion.id];
        const isPreviousAvvik = data?.isPreviousAvvik && data?.previousAvvikData;
        
        // If it's a previous avvik, show DeviationDetailPanel instead
        if (isPreviousAvvik && data.previousAvvikData) {
          const previousAvvik = data.previousAvvikData;
          return (
            <BottomSheet
              isOpen={isBottomSheetOpen}
              onClose={() => setIsBottomSheetOpen(false)}
              title={selectedQuestion.questionText}
              maxHeight={90}
            >
              <DeviationDetailPanel
                deviation={{
                  id: previousAvvik.id,
                  severity: previousAvvik.severity,
                  foretakName: previousAvvik.foretakName,
                  checklist: previousAvvik.checklist,
                  deadline: previousAvvik.deadline,
                  status: previousAvvik.status as any,
                  requiresAction: previousAvvik.requiresAction,
                  confirmationMethod: previousAvvik.confirmationMethod as any
                }}
                context="tidligere-revisjon"
              />
            </BottomSheet>
          );
        }
        
        // Normal question view
        return (
          <BottomSheet
            isOpen={isBottomSheetOpen}
            onClose={() => setIsBottomSheetOpen(false)}
            title={selectedQuestion.questionText}
            maxHeight={90}
          >
            <div className="px-6 py-4">
              {/* Krav & Veileder Section */}
              {selectedQuestionInfo && (
                <div className="mb-4">
                  <KravVeilederSection question={selectedQuestionInfo} />
                </div>
              )}

              {/* Answer Options */}
              <div className="mb-4">
                <h4 className="label-medium text-foreground mb-3">Velg svar</h4>
                <div className="space-y-2">
                  {(['Ja', 'Nei', 'Ikke relevant'] as const).map((option) => (
                    <button
                      key={option}
                      onClick={() => handleAnswerChange(option)}
                      disabled={deviationsLocked}
                      className={`w-full flex items-center gap-3 px-3 py-2 rounded-[var(--radius)] transition-colors ${
                        deviationsLocked 
                          ? 'opacity-40 cursor-not-allowed' 
                          : 'hover:bg-muted'
                      }`}
                    >
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${
                        selectedQuestion?.answer === option
                          ? 'border-primary bg-primary'
                          : 'border-foreground'
                      }`}>
                        {selectedQuestion?.answer === option && (
                          <div className="w-2.5 h-2.5 rounded-full bg-white" />
                        )}
                      </div>
                      <span className={`body-medium ${
                        selectedQuestion?.answer === option ? 'text-primary' : 'text-foreground'
                      }`}>
                        {option}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Tabs */}
              <div className="border-b border-border mb-4">
                <div className="flex overflow-x-auto scrollbar-hide">
                  {getVisibleTabs().map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className="px-3 py-3 label-medium relative transition-colors whitespace-nowrap"
                      style={{
                        color: activeTab === tab ? '#1a1c16' : '#44483b'
                      }}
                    >
                      {getTabLabel(tab)}
                      {activeTab === tab && (
                        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Tab Content */}
              <div>
                {selectedQuestionData.answer && (
                  <>
                    {activeTab === 'observasjoner' && (
                      <div className="max-w-full">
                        <ObservationView 
                          improvementText={selectedQuestionData.improvementText}
                          improvementImages={selectedQuestionData.improvementImages}
                          positiveText={selectedQuestionData.positiveText}
                          positiveImages={selectedQuestionData.positiveImages}
                          onUpdate={(data) => onUpdateQuestionData?.(selectedQuestionId, data)}
                        />
                      </div>
                    )}
                    {activeTab === 'avvik' && (
                      <div className="max-w-full">
                        <DeviationListView 
                          deviations={selectedQuestionData.deviations}
                          onUpdate={(deviations) => onUpdateQuestionData?.(selectedQuestionId, { deviations })}
                        />
                      </div>
                    )}
                  </>
                )}

                {/* Show farmer's self-audit answer when viewing Egenrevisjonssvar tab */}
                {activeTab === 'egenvurderinger' && (
                  <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                      <p className="label-small text-muted-foreground m-0">Svarvalg</p>
                      <p className="body-medium text-foreground m-0">Ja</p>
                    </div>
                    <div className="flex flex-col gap-2">
                      <p className="label-small text-muted-foreground m-0">Svartekst</p>
                      <p className="body-medium text-foreground m-0">
                        {selectedQuestionInfo.answerText || 'Rutinene for rengjøring av melkestallen kan forbedres ved å innføre en fast sjekkliste etter hver melking.'}
                      </p>
                    </div>
                    
                    {/* Attached documents section */}
                    {selectedQuestionData.attachedDocuments && selectedQuestionData.attachedDocuments.length > 0 && (
                      <div className="flex flex-col gap-2 pt-2">
                        <p className="label-small text-muted-foreground m-0">Knyttede dokumenter</p>
                        <div className="flex flex-col gap-2">
                          {selectedQuestionData.attachedDocuments.map((doc, index) => (
                            <AttachedDocumentCard
                              key={index}
                              documentName={doc}
                              onRemove={() => handleRemoveDocument(index)}
                            />
                          ))}
                        </div>
                      </div>
                    )}
                    
                    <DocumentsMenu 
                      isOpen={showDocumentsMenu} 
                      onToggle={() => setShowDocumentsMenu(!showDocumentsMenu)}
                      attachedDocuments={selectedQuestionData.attachedDocuments || []}
                      onAttachDocuments={(documents) => onUpdateQuestionData?.(selectedQuestionId, { attachedDocuments: documents })}
                      onNavigateToDocument={onNavigateToDocument}
                    />
                  </div>
                )}

                {activeTab === 'notat' && (
                  <div className="max-w-full">
                    <NotatView 
                      notatText={selectedQuestionData.notatText}
                      onUpdate={(text) => onUpdateQuestionData?.(selectedQuestionId, { notatText: text })}
                    />
                  </div>
                )}
              </div>
            </div>
          </BottomSheet>
        );
      })()}
    </div>
  );
}