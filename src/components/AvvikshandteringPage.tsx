import { useState, useEffect, useRef } from 'react';
import { Check, ChevronDown, Search, AlertTriangle, Calendar as CalendarIcon, User, CheckCircle2, Circle, Edit2, Plus, ChevronRight } from 'lucide-react';
import { questionsData, getQuestionById } from '../data/questions';
import { DeviationListView } from './DeviationListView';
import { NotatView } from './NotatView';
import { AttachedDocumentCard } from './AttachedDocumentCard';
import { DocumentsMenu } from './DocumentsMenu';
import { StatusChip } from './StatusChip';
import svgPaths from '../imports/svg-8axi0x1eud';
import svgPathsDeviation from '../imports/svg-rj5c6b7gl3';
import { Calendar } from './ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { format } from 'date-fns';
import { nb } from 'date-fns/locale';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Label } from './ui/label';
import { BottomSheet } from './ui/bottom-sheet';
import { Button } from './ui/button';
import { AvvikshandteringDetailPanel } from './AvvikshandteringDetailPanel';
import { AvvikshandteringPreLockDetailPanel } from './AvvikshandteringPreLockDetailPanel';

type AnswerType = 'ja' | 'nei' | 'ikke-relevant';
type TabType = 'lukking' | 'avvik' | 'egenvurderinger' | 'notat';
type SeverityType = 'kritisk' | 'stort-avvik' | 'avvik' | 'lite-avvik';
type ConfirmationMethod = 'dokumentasjon' | 'digitalt-besok' | 'fysisk-besok';

interface QuestionData {
  answer?: AnswerType;
  improvementText?: string;
  improvementImages?: string[];
  positiveText?: string;
  positiveImages?: string[];
  notatText?: string;
  deviations?: any[];
  attachedDocuments?: string[];
}

interface AvvikshandteringPageProps {
  questionData: Record<string, QuestionData>;
  onAnswerQuestion?: (questionId: string, answer: AnswerType) => void;
  onUpdateQuestionData?: (questionId: string, data: Partial<QuestionData>) => void;
  onNavigateToDocument?: (documentIndex: number) => void;
  onLockDeviations?: () => void;
  onCompletionChange?: (isComplete: boolean) => void;
  onNavigateToSvaroversikt?: () => void;
  onPrevious?: () => void;
  onNext?: () => void;
  onBottomSheetOpenChange?: (isOpen: boolean) => void;
}

interface QuestionAnswer {
  id: string;
  answer: 'Nei';
  questionText: string;
  categoryId: string;
  groupId: string;
  severity?: SeverityType;
}

interface ClosureInfo {
  deadline?: string;
  responsible?: string;
  confirmationMethod?: ConfirmationMethod;
  comment?: string;
}

export function AvvikshandteringPage({ 
  questionData,
  onAnswerQuestion,
  onUpdateQuestionData,
  onNavigateToDocument,
  onLockDeviations,
  onCompletionChange,
  onNavigateToSvaroversikt,
  onPrevious,
  onNext,
  onBottomSheetOpenChange
}: AvvikshandteringPageProps) {
  const [hasAgreed, setHasAgreed] = useState(false);
  const [isLocked, setIsLocked] = useState(false);
  const [selectedQuestionId, setSelectedQuestionId] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<TabType>('avvik');
  const [showDocumentsMenu, setShowDocumentsMenu] = useState(false);
  const [isDetailBottomSheetOpen, setIsDetailBottomSheetOpen] = useState(false);
  
  // Notify parent when bottom sheet state changes
  useEffect(() => {
    onBottomSheetOpenChange?.(isDetailBottomSheetOpen);
  }, [isDetailBottomSheetOpen, onBottomSheetOpenChange]);
  
  // Store closure information for each deviation
  const [closureData, setClosureData] = useState<Record<string, ClosureInfo>>({});
  
  // Editing states
  const [editingResponsible, setEditingResponsible] = useState<string | null>(null);
  const [tempResponsible, setTempResponsible] = useState('');
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
  const [editingMangel, setEditingMangel] = useState<string | null>(null);
  const [tempMangel, setTempMangel] = useState('');
  const [editingBevis, setEditingBevis] = useState<string | null>(null);
  const [tempBevis, setTempBevis] = useState('');
  const [editingKrav, setEditingKrav] = useState<string | null>(null);
  const [tempKrav, setTempKrav] = useState('');
  const [editingComment, setEditingComment] = useState<string | null>(null);
  const [tempComment, setTempComment] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Calculate severity based on question
  const calculateSeverity = (questionId: string, groupId: string): SeverityType => {
    const questionInfo = getQuestionById(questionId);
    
    // Check if this is the mineral fertilizer question
    if (questionInfo?.title.toLowerCase().includes('mineralgjørdsel')) {
      return 'lite-avvik';
    }
    
    // Check if it's in group 1.5
    if (groupId === '1.5') {
      return 'stort-avvik';
    }
    
    // Default to lite avvik
    return 'lite-avvik';
  };

  // Generate answers from questionData - only "nei" answers
  const [answers, setAnswers] = useState<QuestionAnswer[]>(() => {
    const neiQuestions: QuestionAnswer[] = [];
    
    questionsData.forEach(category => {
      category.questionGroups.forEach(group => {
        group.questions.forEach(question => {
          const data = questionData[question.id];
          
          // Only include questions answered "nei"
          if (data && data.answer === 'nei') {
            // Use calculated severity from deviations if available, otherwise calculate
            let severity = calculateSeverity(question.id, group.id);
            if (data.deviations && data.deviations.length > 0 && data.deviations[0].calculatedSeverity) {
              severity = data.deviations[0].calculatedSeverity;
            }
            
            neiQuestions.push({
              id: question.id,
              answer: 'Nei',
              questionText: question.title,
              categoryId: category.id,
              groupId: group.id,
              severity
            });
          }
        });
      });
    });
    
    return neiQuestions;
  });

  // CRITICAL: displayedAnswers is what's shown in the list
  // It only updates when filter changes, NOT when individual answers change
  const [displayedAnswers, setDisplayedAnswers] = useState<QuestionAnswer[]>([]);
  
  // Track pending changes flag
  const [hasPendingChanges, setHasPendingChanges] = useState(false);

  // Initialize displayedAnswers on first render and when answers regenerate
  useEffect(() => {
    setDisplayedAnswers(answers);
  }, [answers]);

  // Handle answer change - update in place with deferred filtering
  const handleAnswerChange = (questionId: string, newAnswer: 'ja' | 'nei' | 'ikke-relevant') => {
    // Update the answer in questionData via parent callback
    if (onAnswerQuestion) {
      onAnswerQuestion(questionId, newAnswer);
    }

    // Update the displayed item's answer immediately (visual feedback)
    setDisplayedAnswers(prevDisplayed =>
      prevDisplayed.map(item =>
        item.id === questionId
          ? { ...item, answer: newAnswer === 'ja' ? 'Ja' : newAnswer === 'nei' ? 'Nei' : 'Ikke relevant' }
          : item
      )
    );

    // Flag that we have pending changes
    setHasPendingChanges(true);
  };

  // Reorganize list when isLocked changes (when "Lås avvikene" is clicked)
  useEffect(() => {
    if (isLocked && hasPendingChanges) {
      // Regenerate the list to only show "Nei" answers
      const neiQuestions: QuestionAnswer[] = [];
      
      questionsData.forEach(category => {
        category.questionGroups.forEach(group => {
          group.questions.forEach(question => {
            const data = questionData[question.id];
            
            if (data && data.answer === 'nei') {
              let severity = calculateSeverity(question.id, group.id);
              if (data.deviations && data.deviations.length > 0 && data.deviations[0].calculatedSeverity) {
                severity = data.deviations[0].calculatedSeverity;
              }
              
              neiQuestions.push({
                id: question.id,
                answer: 'Nei',
                questionText: question.title,
                categoryId: category.id,
                groupId: group.id,
                severity
              });
            }
          });
        });
      });
      
      setAnswers(neiQuestions);
      setDisplayedAnswers(neiQuestions);
      setHasPendingChanges(false);
    }
  }, [isLocked]);

  // Calculate unanswered questions count
  const unansweredCount = (() => {
    let count = 0;
    questionsData.forEach(category => {
      category.questionGroups.forEach(group => {
        group.questions.forEach(question => {
          const data = questionData[question.id];
          if (!data || !data.answer) {
            count++;
          }
        });
      });
    });
    return count;
  })();

  // Set first question as selected by default
  useEffect(() => {
    if (answers.length > 0 && !selectedQuestionId) {
      setSelectedQuestionId(answers[0].id);
    }
  }, [answers.length, selectedQuestionId]);

  // Update active tab when locked state changes
  useEffect(() => {
    if (isLocked) {
      setActiveTab('lukking');
    } else {
      setActiveTab('avvik');
    }
  }, [isLocked]);

  const selectedQuestion = answers.find(a => a.id === selectedQuestionId);
  const selectedQuestionInfo = selectedQuestionId ? getQuestionById(selectedQuestionId) : null;
  const selectedQuestionData = selectedQuestionId ? questionData[selectedQuestionId] || {} : {};
  const selectedClosureInfo = selectedQuestionId ? closureData[selectedQuestionId] || {} : {};

  const handleRemoveDocument = (index: number) => {
    if (selectedQuestionId && selectedQuestionData.attachedDocuments && onUpdateQuestionData) {
      const newDocuments = selectedQuestionData.attachedDocuments.filter((_, i) => i !== index);
      onUpdateQuestionData(selectedQuestionId, { attachedDocuments: newDocuments });
    }
  };

  const handleLockClick = () => {
    if (hasAgreed) {
      setIsLocked(true);
      if (onLockDeviations) {
        onLockDeviations();
      }
    }
  };

  const updateClosureInfo = (questionId: string, updates: Partial<ClosureInfo>) => {
    setClosureData(prev => ({
      ...prev,
      [questionId]: {
        ...prev[questionId],
        ...updates
      }
    }));
  };

  const isAvvikComplete = (questionId: string): boolean => {
    const info = closureData[questionId];
    const deviationData = questionData[questionId]?.deviations?.[0];
    
    // Check all required fields
    const hasMangel = !!(deviationData?.mangel && deviationData.mangel.trim());
    const hasBevis = !!(deviationData?.bevis && deviationData.bevis.trim());
    const hasKrav = !!(deviationData?.krav && deviationData.krav.trim());
    const hasResponsible = !!(info?.responsible && info.responsible.trim());
    const hasConfirmationMethod = !!info?.confirmationMethod;
    
    return hasMangel && hasBevis && hasKrav && hasResponsible && hasConfirmationMethod;
  };

  const allAvviksComplete = (): boolean => {
    return answers.every(answer => isAvvikComplete(answer.id));
  };

  // Notify parent when completion status changes
  useEffect(() => {
    if (onCompletionChange) {
      const isComplete = isLocked && allAvviksComplete();
      onCompletionChange(isComplete);
    }
  }, [isLocked, closureData, answers.length, onCompletionChange]);

  const getVisibleTabs = (): TabType[] => {
    if (isLocked) {
      return ['lukking', 'avvik', 'egenvurderinger', 'notat'];
    }
    return ['avvik', 'egenvurderinger', 'notat'];
  };

  const getTabLabel = (tab: TabType): string => {
    const labels: Record<TabType, string> = {
      lukking: 'Lukking av avvik',
      avvik: 'Avvik',
      egenvurderinger: 'Egenrevisjonssvar',
      notat: 'Notat'
    };
    return labels[tab];
  };

  const getSeverityColor = (severity: SeverityType) => {
    switch (severity) {
      case 'kritisk':
        return 'bg-[#ffdad6] text-[#410002]';
      case 'stort-avvik':
        return 'bg-[#ffdad6] text-[#410002]';
      case 'avvik':
        return 'bg-[#fdd19f] text-[#3d2100]';
      case 'lite-avvik':
        return 'bg-[#fdeeb1] text-[#3d2c00]';
      default:
        return 'bg-[#eeeee4] text-[#1a1c16]';
    }
  };

  const getSeverityLabel = (severity: SeverityType) => {
    switch (severity) {
      case 'kritisk':
        return 'Kritisk';
      case 'stort-avvik':
        return 'Stort avvik';
      case 'avvik':
        return 'Avvik';
      case 'lite-avvik':
        return 'Lite avvik';
      default:
        return 'Avvik';
    }
  };

  // SeverityBadge component
  function SeverityBadge({ severity }: { severity: SeverityType }) {
    return (
      <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg ${getSeverityColor(severity)}`}>
        <AlertTriangle className="w-4 h-4" />
        <span className="label-medium">
          {getSeverityLabel(severity)}
        </span>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full w-full">
      {/* Header Section */}
      <div className="px-10 py-3 border-b border-border">
        <div className="flex items-start justify-between gap-6">
          {/* Left side - Content */}
          <div className="flex-1">
            <h2 className="title-large mb-4">Avvikshåndtering</h2>

            {!isLocked && (
              <>
                {unansweredCount > 0 ? (
                  /* Info Box for Unanswered Questions */
                  <button
                    onClick={() => {
                      if (onNavigateToSvaroversikt) {
                        onNavigateToSvaroversikt();
                      }
                    }}
                    className="flex items-start gap-4 w-full max-w-[800px] bg-[#fff4e5] border border-[#fdd19f] rounded-xl px-4 py-4 hover:bg-[#ffebcc] transition-colors"
                  >
                    <AlertTriangle className="w-6 h-6 text-[#b54f00] shrink-0 mt-0.5" />
                    <div className="flex-1 text-left">
                      <p className="body-large text-foreground mb-1">
                        {unansweredCount} {unansweredCount === 1 ? 'spørsmål mangler' : 'spørsmål mangler'} svar
                      </p>
                      <p className="body-medium text-muted-foreground">
                        Du må besvare alle spørsmål før du kan låse avvikene. Klikk her for å gå til ubesvarte spørsmål.
                      </p>
                    </div>
                    <svg className="w-5 h-5 text-[#44483b] shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                ) : (
                  <>
                    {/* Confirmation Checkbox */}
                    <button
                      onClick={() => setHasAgreed(!hasAgreed)}
                      className="flex items-start gap-4 w-full bg-muted border border-border rounded-xl px-4 py-4 mb-3 hover:bg-input transition-colors"
                    >
                      <div className={`w-5 h-5 rounded-sm border-2 flex items-center justify-center transition-colors shrink-0 mt-0.5 ${
                        hasAgreed 
                          ? 'bg-primary border-primary' 
                          : 'border-foreground'
                      }`}>
                        {hasAgreed && <Check className="w-4 h-4 text-white" />}
                      </div>
                      <div className="flex-1 text-left">
                        <p className="body-large text-foreground mb-1">
                          Jeg bekrefter at jeg er klar over at etter låsing kan ingen nye avvik legges til og alvorlighetsgrad kan ikke endres.
                        </p>
                        <p className="body-medium text-muted-foreground">
                          Tekst og bilder i mangel, krav og bevis kan alltid redigeres etterpå.
                        </p>
                      </div>
                    </button>

                    {/* Lock Button */}
                    <div className="flex items-center gap-4">
                      <button
                        onClick={handleLockClick}
                        disabled={!hasAgreed}
                        className={`px-6 py-4 rounded-[var(--radius-button)] bg-primary text-primary-foreground label-medium transition-opacity ${
                          !hasAgreed ? 'opacity-40 cursor-not-allowed' : 'hover:opacity-90'
                        }`}
                      >
                        Lås avvikene for vurdering
                      </button>
                    </div>
                  </>
                )}
              </>
            )}

            {isLocked && (
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 px-4 py-2 bg-muted rounded-lg">
                  <Check className="w-5 h-5 text-primary" />
                  <span className="body-medium text-foreground">
                    Alvorlighetsgrad er beregnet. Sett frist, ansvarlig og bekreftelsesmetode for hvert avvik
                  </span>
                </div>
                {allAvviksComplete() && (
                  <div className="flex items-center gap-2 px-4 py-2 bg-[#d5e6c3] rounded-lg">
                    <CheckCircle2 className="w-5 h-5 text-[#4a671e]" />
                    <span className="body-medium text-[#1a1c16]">
                      Alle avvik er fullført
                    </span>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Right side - Navigation buttons */}
          <div className="flex items-center gap-4 pt-1">
            {onPrevious && (
              <Button variant="tertiary" onClick={onPrevious}>
                Forrige
              </Button>
            )}
            {onNext && (
              (isLocked && allAvviksComplete()) ? (
                <Button variant="primary" onClick={onNext}>
                  Neste
                  <ChevronRight className="w-5 h-5" />
                </Button>
              ) : (
                <Button variant="tertiary" onClick={onNext}>
                  Neste
                </Button>
              )
            )}
          </div>
        </div>
      </div>

      {/* Table and Detail Panel */}
      <div className="flex flex-1 overflow-hidden">
        {/* Table Panel */}
        <div 
          className={`h-full flex flex-col max-[1400px]:w-full relative ${
            selectedQuestionId ? 'w-1/2' : 'flex-1'
          }`}
        >
          <div className="flex-1 overflow-auto bg-background flex flex-col">
            {/* Desktop Table - Shows on wide screens (≥1600px) or when detail panel is not shown, OR on tablet (768-1399px) */}
            <table className={`w-full ${selectedQuestionId ? 'min-[1400px]:max-[1599px]:hidden max-[768px]:hidden' : 'max-[768px]:hidden'}`}>
            <thead className="bg-background sticky top-0 z-10">
              <tr className="border-b border-border">
                {isLocked && (
                  <th className="w-24 px-4 py-2 text-left">
                    <span className="label-medium text-foreground">Status</span>
                  </th>
                )}
                {isLocked && (
                  <th className="w-48 px-4 py-2 text-left">
                    <span className="label-medium text-foreground">Gradering</span>
                  </th>
                )}
                {!isLocked && (
                  <th className="w-46 px-10 py-2 text-left">
                    <div className="flex items-center gap-2">
                      <ChevronDown className="w-6 h-6 text-foreground" />
                      <span className="label-medium text-foreground">Svar</span>
                    </div>
                  </th>
                )}
                <th className="px-4 py-2 text-left">
                  <div className="flex items-center gap-2">
                    <Search className="w-6 h-6 text-foreground" />
                    <span className="label-medium text-foreground">Sjekklistespørsmål</span>
                  </div>
                </th>
                {isLocked && (
                  <th className="w-56 px-4 py-2 text-left">
                    <span className="label-medium text-foreground">Status</span>
                  </th>
                )}
              </tr>
            </thead>
            <tbody>
              {displayedAnswers.map((answer) => (
                <tr
                  key={answer.id}
                  onClick={() => {
                    setSelectedQuestionId(answer.id);
                    // On mobile/tablet, open bottom sheet
                    if (window.innerWidth < 1400) {
                      setIsDetailBottomSheetOpen(true);
                    }
                  }}
                  className={`cursor-pointer border-b border-border transition-colors ${
                    selectedQuestionId === answer.id
                      ? 'bg-secondary-container'
                      : 'hover:bg-muted'
                  }`}
                >
                  {isLocked && (
                    <td className="px-4 py-3">
                      <div className="flex items-center justify-center">
                        {isAvvikComplete(answer.id) ? (
                          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24">
                            <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM16.59 7.58L10 14.17L7.41 11.59L6 13L10 17L18 9L16.59 7.58Z" fill="var(--muted-foreground)" />
                          </svg>
                        ) : (
                          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24">
                            <g>
                              <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z" fill="var(--muted-foreground)" />
                              <path d="M7 13.5C7.82843 13.5 8.5 12.8284 8.5 12C8.5 11.1716 7.82843 10.5 7 10.5C6.17157 10.5 5.5 11.1716 5.5 12C5.5 12.8284 6.17157 13.5 7 13.5Z" fill="var(--muted-foreground)" />
                              <path d="M12 13.5C12.8284 13.5 13.5 12.8284 13.5 12C13.5 11.1716 12.8284 10.5 12 10.5C11.1716 10.5 10.5 11.1716 10.5 12C10.5 12.8284 11.1716 13.5 12 13.5Z" fill="var(--muted-foreground)" />
                              <path d="M17 13.5C17.8284 13.5 18.5 12.8284 18.5 12C18.5 11.1716 17.8284 10.5 17 10.5C16.1716 10.5 15.5 11.1716 15.5 12C15.5 12.8284 16.1716 13.5 17 13.5Z" fill="var(--muted-foreground)" />
                            </g>
                          </svg>
                        )}
                      </div>
                    </td>
                  )}
                  {isLocked && answer.severity && (
                    <td className="px-4 py-3">
                      <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg ${getSeverityColor(answer.severity)}`}>
                        <AlertTriangle className="w-4 h-4" />
                        <span className="label-medium">
                          {getSeverityLabel(answer.severity)}
                        </span>
                      </div>
                    </td>
                  )}
                  {!isLocked && (
                    <td className="px-10 py-3">
                      <span className={`body-large ${
                        selectedQuestionId === answer.id
                          ? 'text-accent-foreground'
                          : 'text-foreground'
                      }`}>
                        {answer.answer}
                      </span>
                    </td>
                  )}
                  <td className="px-4 py-3">
                    <span className={`body-medium line-clamp-1 ${
                      selectedQuestionId === answer.id
                        ? 'text-accent-foreground'
                        : 'text-foreground'
                    }`}>
                      {answer.id} {answer.questionText}
                    </span>
                  </td>
                  {isLocked && (
                    <td className="px-4 py-3">
                      <StatusChip isComplete={isAvvikComplete(answer.id)} />
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>

          {/* Condensed List - Shows on smaller screens when table would be too cramped */}
          <div className={`flex flex-col ${selectedQuestionId ? 'min-[768px]:max-[1399px]:hidden min-[1600px]:hidden' : 'min-[768px]:hidden'}`}>
            <div className="px-6 py-3 border-b border-[var(--border)] bg-surface-container-low sticky top-0 z-10">
              <span className="label-medium text-foreground">Avvik</span>
            </div>
            {displayedAnswers.map((answer) => (
              <div
                key={answer.id}
                onClick={() => {
                  setSelectedQuestionId(answer.id);
                  // On mobile/tablet, open bottom sheet
                  if (window.innerWidth < 1400) {
                    setIsDetailBottomSheetOpen(true);
                  }
                }}
                className={`px-6 py-4 border-b border-[var(--border)] hover:bg-muted cursor-pointer transition-colors ${
                  selectedQuestionId === answer.id ? 'bg-secondary-container' : ''
                }`}
              >
                <div className="flex flex-col gap-2">
                  {/* Line 1: Chips and badges with gap-1 */}
                  <div className="flex flex-row items-center gap-1 flex-wrap">
                    {isLocked && answer.severity && (
                      <SeverityBadge severity={answer.severity} />
                    )}
                    {isLocked && (
                      <StatusChip isComplete={isAvvikComplete(answer.id)} />
                    )}
                    {!isLocked && (
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
      </div>

      {/* DESKTOP: Detail Panel - Shows selected deviation at 50% width */}
      {selectedQuestionId && selectedQuestion && selectedQuestionInfo && (
        <div 
          className="max-[1400px]:hidden w-1/2 h-full bg-background overflow-y-auto border-l border-[var(--border)]"
        >
          {isLocked ? (
            <AvvikshandteringDetailPanel
              selectedQuestionId={selectedQuestionId}
              selectedQuestionInfo={selectedQuestionInfo}
              selectedQuestion={selectedQuestion}
              selectedQuestionData={selectedQuestionData}
              selectedClosureInfo={selectedClosureInfo}
              updateClosureInfo={updateClosureInfo}
              onUpdateQuestionData={onUpdateQuestionData}
            />
          ) : (
            <AvvikshandteringPreLockDetailPanel
              selectedQuestionId={selectedQuestionId}
              selectedQuestionInfo={selectedQuestionInfo}
              selectedQuestion={selectedQuestion}
              selectedQuestionData={selectedQuestionData}
              updateClosureInfo={updateClosureInfo}
              onUpdateQuestionData={onUpdateQuestionData}
              onAnswerChange={handleAnswerChange}
            />
          )}
        </div>
      )}
    </div>

    {/* Bottom Sheet for mobile/tablet - Shows detail view */}
    <BottomSheet
      isOpen={isDetailBottomSheetOpen}
      onClose={() => setIsDetailBottomSheetOpen(false)}
      title="Avvikdetaljer"
      maxHeight={90}
    >
      <div className="flex flex-col h-full">
        <div className="flex-1 overflow-y-auto">
          {selectedQuestionId && selectedQuestion && selectedQuestionInfo && (
            <div>
              {isLocked ? (
                <AvvikshandteringDetailPanel
                  selectedQuestionId={selectedQuestionId}
                  selectedQuestionInfo={selectedQuestionInfo}
                  selectedQuestion={selectedQuestion}
                  selectedQuestionData={selectedQuestionData}
                  selectedClosureInfo={selectedClosureInfo}
                  updateClosureInfo={updateClosureInfo}
                  onUpdateQuestionData={onUpdateQuestionData}
                />
              ) : (
                <AvvikshandteringPreLockDetailPanel
                  selectedQuestionId={selectedQuestionId}
                  selectedQuestionInfo={selectedQuestionInfo}
                  selectedQuestion={selectedQuestion}
                  selectedQuestionData={selectedQuestionData}
                  updateClosureInfo={updateClosureInfo}
                  onUpdateQuestionData={onUpdateQuestionData}
                  onAnswerChange={handleAnswerChange}
                />
              )}
            </div>
          )}
        </div>
      </div>
    </BottomSheet>
  </div>
  );
}