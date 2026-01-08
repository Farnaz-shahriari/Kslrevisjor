import { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { Check, ChevronDown, ChevronLeft, Search, AlertTriangle, Calendar as CalendarIcon, User, CheckCircle2, Circle, Edit2, Plus } from 'lucide-react';
import { questionsData, getQuestionById } from '../data/questions';
import { DeviationListView } from './DeviationListView';
import { NotatView } from './NotatView';
import { AttachedDocumentCard } from './AttachedDocumentCard';
import { DocumentsMenu } from './DocumentsMenu';
import { StatusChip } from './StatusChip';
import { BottomSheet } from './ui/bottom-sheet';
import { Button } from './ui/button';
import svgPaths from '../imports/svg-8axi0x1eud';
import svgPathsDeviation from '../imports/svg-rj5c6b7gl3';
import svgPathsNew from '../imports/svg-87gmswxs21';
import svgPathsUpload from '../imports/svg-927sr0kqkx';
import { Calendar } from './ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { format } from 'date-fns';
import { nb } from 'date-fns/locale';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Label } from './ui/label';

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
  // Navigation props
  onPrevious?: () => void;
  onNext?: () => void;
  // Persistent state props
  hasAgreed?: boolean;
  onHasAgreedChange?: (value: boolean) => void;
  isLocked?: boolean;
  onIsLockedChange?: (value: boolean) => void;
  closureData?: Record<string, ClosureInfo>;
  onClosureDataChange?: (data: Record<string, ClosureInfo>) => void;
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
  hasAgreed: externalHasAgreed,
  onHasAgreedChange,
  isLocked: externalIsLocked,
  onIsLockedChange,
  closureData: externalClosureData,
  onClosureDataChange
}: AvvikshandteringPageProps) {
  // Use external state if provided, otherwise use local state
  const [localHasAgreed, setLocalHasAgreed] = useState(false);
  const [localIsLocked, setLocalIsLocked] = useState(false);
  const [localClosureData, setLocalClosureData] = useState<Record<string, ClosureInfo>>({});
  
  const hasAgreed = externalHasAgreed !== undefined ? externalHasAgreed : localHasAgreed;
  const setHasAgreed = onHasAgreedChange || setLocalHasAgreed;
  const isLocked = externalIsLocked !== undefined ? externalIsLocked : localIsLocked;
  const setIsLocked = onIsLockedChange || setLocalIsLocked;
  const closureData = externalClosureData !== undefined ? externalClosureData : localClosureData;
  const setClosureData = onClosureDataChange || setLocalClosureData;
  
  const [selectedQuestionId, setSelectedQuestionId] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<TabType>('avvik');
  const [showDocumentsMenu, setShowDocumentsMenu] = useState(false);
  const [panelWidth, setPanelWidth] = useState(520);
  const [isResizing, setIsResizing] = useState(false);
  const [showResizeHandle, setShowResizeHandle] = useState(false);
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);
  
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
  const commentTextareaRef = useRef<HTMLTextAreaElement>(null);
  const mangelTextareaRef = useRef<HTMLTextAreaElement>(null);
  const kravTextareaRef = useRef<HTMLTextAreaElement>(null);

  // Auto-resize textarea to fit content
  const adjustTextareaHeight = (textarea: HTMLTextAreaElement | null) => {
    if (textarea) {
      textarea.style.height = 'auto';
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  };

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

  // Generate answers from questionData - only "nei" answers (memoized)
  const answers = useMemo<QuestionAnswer[]>(() => {
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
  }, [questionData]);

  // Calculate unanswered questions count (memoized)
  const unansweredCount = useMemo(() => {
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
  }, [questionData]);

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

  // Resize handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsResizing(true);
  };

  useEffect(() => {
    if (!isResizing) return;

    const handleMouseMove = (e: MouseEvent) => {
      const container = document.getElementById('avvikshandtering-container');
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

  const handleAnswerChange = (newAnswer: 'Ja' | 'Nei' | 'Ikke relevant') => {
    if (selectedQuestionId && onAnswerQuestion) {
      const answerType = newAnswer === 'Ja' ? 'ja' : newAnswer === 'Nei' ? 'nei' : 'ikke-relevant';
      onAnswerQuestion(selectedQuestionId, answerType);
      // Note: answers will automatically update via useMemo when questionData changes
    }
  };

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

  const isAvvikComplete = useCallback((questionId: string): boolean => {
    const info = closureData[questionId];
    const deviationData = questionData[questionId]?.deviations?.[0];
    
    // Check all required fields
    const hasMangel = !!(deviationData?.mangel && deviationData.mangel.trim());
    const hasBevis = !!(deviationData?.bevis && deviationData.bevis.trim());
    const hasKrav = !!(deviationData?.krav && deviationData.krav.trim());
    const hasResponsible = !!(info?.responsible && info.responsible.trim());
    const hasConfirmationMethod = !!info?.confirmationMethod;
    
    return hasMangel && hasBevis && hasKrav && hasResponsible && hasConfirmationMethod;
  }, [closureData, questionData]);

  const allAvviksComplete = useMemo((): boolean => {
    return answers.every(answer => isAvvikComplete(answer.id));
  }, [answers, isAvvikComplete]);

  // Track if component has mounted to avoid calling onCompletionChange during initial render
  const hasMountedRef = useRef(false);
  const previousCompletionRef = useRef<boolean | null>(null);
  
  // Notify parent when completion status changes
  useEffect(() => {
    // Skip the first render to avoid setState during render warning
    if (!hasMountedRef.current) {
      hasMountedRef.current = true;
      return;
    }
    
    if (onCompletionChange) {
      const isComplete = isLocked && allAvviksComplete;
      // Only call if the value has actually changed
      if (previousCompletionRef.current !== isComplete) {
        previousCompletionRef.current = isComplete;
        onCompletionChange(isComplete);
      }
    }
  }, [isLocked, allAvviksComplete, onCompletionChange]);

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

  return (
    <div className="flex flex-col h-full w-full">
      {/* Header Section */}
      <div className="px-10 pt-3 pb-6 border-b border-border">
        {/* Title with Navigation Buttons */}
        <div className="flex items-center justify-between mb-4 max-[1400px]:block">
          <h2 className="title-large max-[1400px]:mb-2">Avvikshåndtering</h2>
          
          {/* Navigation buttons - always enabled */}
          <div className="flex items-center gap-4 max-[1400px]:hidden">
            <Button
              variant="tertiary"
              onClick={onPrevious}
            >
              Forrige
            </Button>
            <Button
              variant={(isLocked && allAvviksComplete) ? "primary" : "tertiary"}
              onClick={onNext}
              className="flex items-center gap-2"
            >
              <span>Neste</span>
              <ChevronLeft className="w-5 h-5 rotate-180" />
            </Button>
          </div>
        </div>

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
                className="flex items-start gap-4 w-full bg-[#fff4e5] border border-[#fdd19f] rounded-xl px-4 py-4 hover:bg-[#ffebcc] transition-colors"
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
            {allAvviksComplete && (
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

      {/* Table and Detail Panel */}
      <div id="avvikshandtering-container" className="flex flex-1 overflow-hidden w-full">
        {/* Table */}
        <div className="flex-1 overflow-auto border-r border-border">
          <table className="w-full">
            <thead className="bg-surface-container-low sticky top-0 z-10">
              <tr className="border-b border-border">
                {isLocked && (
                  <th className="w-48 px-4 py-2 text-left bg-surface-container-low">
                    <span className="label-medium text-foreground">Gradering</span>
                  </th>
                )}
                {!isLocked && (
                  <th className="w-46 px-10 py-2 text-left bg-surface-container-low">
                    <div className="flex items-center gap-2">
                      <ChevronDown className="w-6 h-6 text-foreground" />
                      <span className="label-medium text-foreground">Svar</span>
                    </div>
                  </th>
                )}
                <th className="px-4 py-2 text-left bg-surface-container-low">
                  <div className="flex items-center gap-2">
                    <Search className="w-6 h-6 text-foreground" />
                    <span className="label-medium text-foreground">Sjekklistespørsmål</span>
                  </div>
                </th>
                {isLocked && (
                  <th className="w-56 px-4 py-2 text-left bg-surface-container-low">
                    <span className="label-medium text-foreground">Status</span>
                  </th>
                )}
              </tr>
            </thead>
            <tbody>
              {answers.map((answer) => (
                <tr
                  key={answer.id}
                  onClick={() => {
                    setSelectedQuestionId(answer.id);
                    // Open bottom sheet on mobile/tablet
                    setIsBottomSheetOpen(true);
                  }}
                  className={`cursor-pointer border-b border-border transition-colors ${
                    selectedQuestionId === answer.id
                      ? 'bg-accent'
                      : 'hover:bg-muted'
                  }`}
                >
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
        </div>

        {/* Detail Panel - Desktop only */}
        {selectedQuestion && selectedQuestionInfo && (
          <div 
            className="bg-background relative flex flex-col max-[1400px]:hidden"
            style={{ width: `${panelWidth}px` }}
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
            {isLocked ? (
              /* Locked State - New Figma Design */
              <div className="flex flex-col flex-1 overflow-hidden">
                {/* Fixed Header */}
                <div className="px-6 py-4 shrink-0">
                  {/* Question Header */}
                  <div className="flex gap-2 items-center justify-between mb-2">
                    <h3 className="heading-4">
                      {selectedQuestionInfo.id}
                    </h3>
                    <button className="p-2">
                      <svg className="w-6 h-6" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                        <g transform="scale(1.3333)">
                          <path d={svgPaths.pd76fd80} fill="#1A1C16" />
                        </g>
                      </svg>
                    </button>
                  </div>

                  {/* Question Text */}
                  <h4 className="heading-4">
                    {selectedQuestion.questionText}
                  </h4>

                  {/* Severity Badge */}
                  {selectedQuestion.severity && (
                    <div className={`flex items-center gap-4 px-4 py-2 rounded-[var(--radius-md)] mt-2 min-h-[56px] ${getSeverityColor(selectedQuestion.severity)}`}>
                      <div className="shrink-0 w-6 h-6 flex items-center justify-center">
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" overflow="visible">
                          <path d={svgPaths.p6027970} fill="currentColor" />
                        </svg>
                      </div>
                      <div className="flex-1 flex flex-col justify-center min-h-0 overflow-hidden">
                        <p className="label-medium">
                          Beregnet alvorlighetsgrad
                        </p>
                        <p className="body-large">
                          {getSeverityLabel(selectedQuestion.severity)}
                        </p>
                      </div>
                      <div className="shrink-0 w-6 h-6 flex items-center justify-center">
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" overflow="visible">
                          <g transform="scale(1.2)">
                            <path d={svgPaths.p19ecbc00} fill="currentColor" />
                          </g>
                        </svg>
                      </div>
                    </div>
                  )}
                </div>

                {/* Scrollable Content */}
                <div className="flex-1 overflow-y-auto px-6 pb-8">
                  <div className="border-t border-[var(--border)] my-2" />

                  {/* Ansvarlig Section */}
                  {editingResponsible === selectedQuestionId ? (
                    <div className="min-h-[64px] pt-2 pb-0 px-2">
                      <p className="body-large mb-2">
                        Ansvarlig
                      </p>
                      <div className="flex items-center gap-2">
                        <input
                          type="text"
                          value={tempResponsible}
                          onChange={(e) => setTempResponsible(e.target.value)}
                          onBlur={() => {
                            if (tempResponsible.trim() && selectedQuestionId) {
                              updateClosureInfo(selectedQuestionId, { responsible: tempResponsible.trim() });
                            }
                            setEditingResponsible(null);
                          }}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter' && tempResponsible.trim() && selectedQuestionId) {
                              updateClosureInfo(selectedQuestionId, { responsible: tempResponsible.trim() });
                              setEditingResponsible(null);
                            }
                          }}
                          placeholder="Skriv navn..."
                          className="flex-1 px-3 py-2 border border-border rounded-lg body-large focus:outline-none focus:ring-2 focus:ring-primary"
                          autoFocus
                        />
                      </div>
                    </div>
                  ) : (
                    <button 
                      onClick={() => {
                        setEditingResponsible(selectedQuestionId);
                        setTempResponsible(selectedClosureInfo.responsible || '');
                      }}
                      className="w-full pt-2 pb-0"
                    >
                      <div className="flex gap-4 items-start px-2">
                        {!selectedClosureInfo.responsible && (
                          <Plus className="shrink-0 w-6 h-6 text-muted-foreground" />
                        )}
                        <div className="flex-1 min-w-0 text-left">
                          {selectedClosureInfo.responsible ? (
                            <>
                              <p className="label-medium text-muted-foreground">
                                Ansvarlig
                              </p>
                              <p className="body-large">
                                {selectedClosureInfo.responsible}
                              </p>
                            </>
                          ) : (
                            <p className="body-large">
                              Ansvarlig
                            </p>
                          )}
                        </div>
                        {selectedClosureInfo.responsible ? (
                          <div className="shrink-0 w-12 h-12 flex items-center justify-center">
                            <div className="w-7 h-8 flex items-center justify-center rounded-full hover:bg-muted transition-colors">
                              <Edit2 className="w-5 h-5 text-muted-foreground" />
                            </div>
                          </div>
                        ) : (
                          <StatusChip isComplete={false} />
                        )}
                      </div>
                    </button>
                  )}

                  <div className="border-t border-[var(--border)] my-2" />

                  {/* Tidsfrist Section */}
                  <Popover open={isDatePickerOpen} onOpenChange={setIsDatePickerOpen}>
                    <PopoverTrigger asChild>
                      <button className="w-full min-h-[64px] pt-2 pb-0">
                        <div className="flex gap-4 items-center px-2">
                          <CalendarIcon className="shrink-0 w-6 h-6 text-muted-foreground" />
                          <div className="flex-1 text-left min-w-0">
                            <p className="label-medium text-muted-foreground">
                              Tidsfrist
                            </p>
                            <p className="body-large">
                              {selectedClosureInfo.deadline 
                                ? `${format(new Date(selectedClosureInfo.deadline), 'd. MMMM yyyy', { locale: nb })} (anbefalt)`
                                : '4. mars 2026 (anbefalt)'
                              }
                            </p>
                          </div>
                          <div className="shrink-0 w-10 h-10 flex items-center justify-center rounded-full hover:bg-muted transition-colors">
                            <Edit2 className="w-5 h-5 text-muted-foreground" />
                          </div>
                        </div>
                      </button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={selectedClosureInfo.deadline ? new Date(selectedClosureInfo.deadline) : undefined}
                        onSelect={(date) => {
                          if (date && selectedQuestionId) {
                            updateClosureInfo(selectedQuestionId, { deadline: date.toISOString() });
                            setIsDatePickerOpen(false);
                          }
                        }}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>

                  <div className="border-t border-[var(--border)] my-2" />

                  {/* Bekreftelse av tiltak Section */}
                  <div className="px-2 py-2">
                    <div className="flex gap-2 items-center justify-between mb-4">
                      <h5 className="body-large">
                        Bekreftelse av tiltak
                      </h5>
                      <StatusChip isComplete={!!selectedClosureInfo.confirmationMethod} />
                    </div>

                    {/* Radio Options */}
                    {(() => {
                      const isLiteAvvik = selectedQuestion.severity === 'lite-avvik';
                      const availableMethods: ConfirmationMethod[] = isLiteAvvik 
                        ? ['dokumentasjon']
                        : ['dokumentasjon', 'digitalt-besok', 'fysisk-besok'];
                      
                      if (isLiteAvvik && !selectedClosureInfo.confirmationMethod) {
                        updateClosureInfo(selectedQuestionId, { confirmationMethod: 'dokumentasjon' });
                      }
                      
                      return (
                        <div className="space-y-0">
                          {availableMethods.map((method) => {
                            const isSelected = selectedClosureInfo.confirmationMethod === method;
                            return (
                              <button
                                key={method}
                                onClick={() => updateClosureInfo(selectedQuestionId, { confirmationMethod: method })}
                                className="w-full flex items-center gap-3 px-0 py-2 hover:bg-muted/50 rounded-[var(--radius)] transition-colors min-h-[40px]"
                              >
                                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all shrink-0 ${
                                  isSelected
                                    ? 'border-primary bg-primary'
                                    : 'border-foreground'
                                }`}>
                                  {isSelected && (
                                    <div className="w-2.5 h-2.5 rounded-full bg-white" />
                                  )}
                                </div>
                                <span className={`body-large ${
                                  isSelected ? 'text-primary' : 'text-foreground'
                                }`}>
                                  {method === 'dokumentasjon' && 'Dokumentasjon'}
                                  {method === 'digitalt-besok' && 'Digitalt besøk'}
                                  {method === 'fysisk-besok' && 'Fysisk besøk'}
                                </span>
                              </button>
                            );
                          })}
                        </div>
                      );
                    })()}

                    <div className="border-t border-[var(--border)] my-2" />

                    {/* Kommentar */}
                    {editingComment === selectedQuestionId ? (
                      <div className="w-full">
                        <div className="flex items-start gap-2">
                          <svg className="w-6 h-6 shrink-0 mt-2" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                            <g transform="scale(1.2)">
                              <path d={svgPaths.p27b1b000} fill="#44483B" />
                            </g>
                          </svg>
                          <div className="flex-1">
                            <textarea
                              ref={commentTextareaRef}
                              value={tempComment}
                              onChange={(e) => {
                                setTempComment(e.target.value);
                                adjustTextareaHeight(commentTextareaRef.current);
                              }}
                              onBlur={() => {
                                updateClosureInfo(selectedQuestionId, { comment: tempComment });
                                setEditingComment(null);
                              }}
                              onFocus={() => adjustTextareaHeight(commentTextareaRef.current)}
                              autoFocus
                              className="w-full p-2 border border-border rounded-[var(--radius)] body-large resize-none overflow-hidden"
                              rows={1}
                              placeholder="Legg til kommentar..."
                              style={{ minHeight: '48px' }}
                            />
                          </div>
                        </div>
                      </div>
                    ) : (
                      <button
                        onClick={() => {
                          setEditingComment(selectedQuestionId);
                          setTempComment(selectedClosureInfo.comment || '');
                        }}
                        className="w-full flex items-center gap-3 px-0 py-2 hover:bg-muted/50 rounded-lg min-h-[48px]"
                      >
                        <svg className="w-6 h-6 shrink-0" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                          <g transform="scale(1.2)">
                            <path d={svgPaths.p27b1b000} fill="#44483B" />
                          </g>
                        </svg>
                        <div className="flex-1 text-left">
                          <p className="body-large">
                            Kommentar til foretaket
                          </p>
                          {selectedClosureInfo.comment ? (
                            <p className="body-medium text-muted-foreground">
                              {selectedClosureInfo.comment}
                            </p>
                          ) : (
                            <p className="body-medium text-muted-foreground">
                              valgfri
                            </p>
                          )}
                        </div>
                        <Plus className="shrink-0 w-6 h-6 text-muted-foreground" />
                      </button>
                    )}
                  </div>

                  <div className="border-t border-[var(--border)] my-2" />

                  {/* Rapportert avvik - Read Only */}
                  {selectedQuestionData.deviations && selectedQuestionData.deviations.length > 0 && (() => {
                    const deviation = selectedQuestionData.deviations[0];
                    return (
                      <>
                        <div className="min-h-[80px] py-2 px-2">
                          <p className="label-medium text-muted-foreground mb-1">
                            Rapportert avvik
                          </p>
                          <p className="body-large mb-1">
                            {getSeverityLabel(deviation.severity)} fra kravet.
                          </p>
                          <p className="body-medium text-muted-foreground">
                            Kan ikke endres nå
                          </p>
                        </div>

                        <div className="border-t border-[var(--border)] my-2" />

                        {/* Mangel Section */}
                        {editingMangel === selectedQuestionId ? (
                          <div className="min-h-[64px] pt-2 pb-0 px-2">
                            <p className="label-medium text-muted-foreground mb-2">
                              Mangel
                            </p>
                            <div className="flex items-start gap-2">
                              <textarea
                                ref={mangelTextareaRef}
                                value={tempMangel}
                                onChange={(e) => {
                                  setTempMangel(e.target.value);
                                  adjustTextareaHeight(mangelTextareaRef.current);
                                }}
                                onBlur={() => {
                                  if (onUpdateQuestionData) {
                                    const updatedDeviations = [...selectedQuestionData.deviations];
                                    updatedDeviations[0] = { ...updatedDeviations[0], mangel: tempMangel };
                                    onUpdateQuestionData(selectedQuestionId, { deviations: updatedDeviations });
                                  }
                                  setEditingMangel(null);
                                }}
                                onFocus={() => adjustTextareaHeight(mangelTextareaRef.current)}
                                autoFocus
                                className="flex-1 p-2 border border-border rounded-[var(--radius)] body-large resize-none overflow-hidden"
                                rows={1}
                                style={{ minHeight: '48px' }}
                              />
                            </div>
                          </div>
                        ) : (
                          <button
                            onClick={() => {
                              setEditingMangel(selectedQuestionId);
                              setTempMangel(deviation.mangel || deviation.description || '');
                            }}
                            className="w-full pt-2 pb-0"
                          >
                            <div className="flex gap-4 items-start px-2">
                              {!(deviation.mangel || deviation.description) && (
                                <Plus className="shrink-0 w-6 h-6 text-muted-foreground" />
                              )}
                              <div className="flex-1 min-w-0 text-left">
                                {(deviation.mangel || deviation.description) ? (
                                  <>
                                    <p className="label-medium text-muted-foreground">
                                      Mangel
                                    </p>
                                    <p className="body-large">
                                      {deviation.mangel || deviation.description}
                                    </p>
                                  </>
                                ) : (
                                  <p className="body-large">
                                    Mangel
                                  </p>
                                )}
                              </div>
                              {(deviation.mangel || deviation.description) ? (
                                <div className="shrink-0 w-12 h-12 flex items-center justify-center">
                                  <div className="w-7 h-8 flex items-center justify-center rounded-full hover:bg-muted transition-colors">
                                    <Edit2 className="w-5 h-5 text-muted-foreground" />
                                  </div>
                                </div>
                              ) : (
                                <StatusChip isComplete={false} />
                              )}
                            </div>
                          </button>
                        )}

                        <div className="border-t border-[var(--border)] my-2" />

                        {/* Bevis Section */}
                        <div className="pt-2 pb-0 px-2">
                          <p className="label-medium text-muted-foreground mb-1">
                            Bevis
                          </p>
                          {deviation.bevis && (
                            <p className="body-large mb-2">
                              {deviation.bevis}
                            </p>
                          )}
                          
                          {/* Upload Button */}
                          <input
                            ref={fileInputRef}
                            type="file"
                            accept="image/*"
                            multiple
                            className="hidden"
                            onChange={(e) => {
                              const files = e.target.files;
                              if (files && onUpdateQuestionData) {
                                const newImages = Array.from(files).map((file, index) => ({
                                  id: `${Date.now()}-${index}`,
                                  name: file.name,
                                  url: URL.createObjectURL(file)
                                }));
                                const updatedDeviations = [...selectedQuestionData.deviations];
                                updatedDeviations[0] = {
                                  ...updatedDeviations[0],
                                  bevisImages: [...(deviation.bevisImages || []), ...newImages]
                                };
                                onUpdateQuestionData(selectedQuestionId, { deviations: updatedDeviations });
                              }
                              if (fileInputRef.current) {
                                fileInputRef.current.value = '';
                              }
                            }}
                          />
                          <div className="relative inline-block">
                            <button
                              onClick={() => fileInputRef.current?.click()}
                              className="flex items-center gap-2 px-6 py-4 border border-[var(--border)] rounded-full hover:bg-muted transition-colors"
                            >
                              <svg className="w-6 h-6" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                                <path d={svgPathsUpload.p3fc73f80} fill="#44483B" />
                              </svg>
                              <span className="body-large text-muted-foreground">
                                Last opp bilde
                              </span>
                            </button>
                          </div>

                          {/* Uploaded Images */}
                          {deviation.bevisImages && deviation.bevisImages.length > 0 && (
                            <div className="mt-4 space-y-0">
                              {deviation.bevisImages.map((image: any, index: number) => (
                                <div key={image.id || index} className="flex items-center gap-4 min-h-[72px] px-4">
                                  <div className="w-14 h-14 bg-muted rounded overflow-hidden shrink-0">
                                    <img src={image.url} alt={image.name} className="w-full h-full object-cover" />
                                  </div>
                                  <div className="flex-1">
                                    <p className="body-large">
                                      {image.name}
                                    </p>
                                  </div>
                                  <button
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      if (onUpdateQuestionData) {
                                        const updatedDeviations = [...selectedQuestionData.deviations];
                                        updatedDeviations[0] = {
                                          ...updatedDeviations[0],
                                          bevisImages: deviation.bevisImages.filter((_: any, i: number) => i !== index)
                                        };
                                        onUpdateQuestionData(selectedQuestionId, { deviations: updatedDeviations });
                                      }
                                    }}
                                    className="shrink-0 w-6 h-6"
                                  >
                                    <svg className="w-6 h-6" fill="none" preserveAspectRatio="none" viewBox="0 0 14 18">
                                      <path d={svgPathsDeviation.p4c48400} fill="#44483B" />
                                    </svg>
                                  </button>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>

                        <div className="border-t border-[var(--border)] my-2" />

                        {/* Krav Section */}
                        {editingKrav === selectedQuestionId ? (
                          <div className="min-h-[64px] pt-2 pb-0 px-2">
                            <p className="label-medium text-muted-foreground mb-2">
                              Krav (fra veileder)
                            </p>
                            <div className="flex items-start gap-2">
                              <textarea
                                ref={kravTextareaRef}
                                value={tempKrav}
                                onChange={(e) => {
                                  setTempKrav(e.target.value);
                                  adjustTextareaHeight(kravTextareaRef.current);
                                }}
                                onBlur={() => {
                                  if (onUpdateQuestionData) {
                                    const updatedDeviations = [...selectedQuestionData.deviations];
                                    updatedDeviations[0] = { ...updatedDeviations[0], krav: tempKrav };
                                    onUpdateQuestionData(selectedQuestionId, { deviations: updatedDeviations });
                                  }
                                  setEditingKrav(null);
                                }}
                                onFocus={() => adjustTextareaHeight(kravTextareaRef.current)}
                                autoFocus
                                className="flex-1 p-2 border border-border rounded-[var(--radius)] body-large resize-none overflow-hidden"
                                rows={1}
                                style={{ minHeight: '48px' }}
                              />
                            </div>
                          </div>
                        ) : (
                          <button
                            onClick={() => {
                              setEditingKrav(selectedQuestionId);
                              setTempKrav(deviation.krav || '');
                            }}
                            className="w-full pt-2 pb-0"
                          >
                            <div className="flex gap-4 items-start px-2">
                              {!deviation.krav && (
                                <Plus className="shrink-0 w-6 h-6 text-muted-foreground" />
                              )}
                              <div className="flex-1 min-w-0 text-left">
                                {deviation.krav ? (
                                  <>
                                    <p className="label-medium text-muted-foreground">
                                      Krav
                                    </p>
                                    <p className="body-large">
                                      {deviation.krav}
                                    </p>
                                  </>
                                ) : (
                                  <p className="body-large">
                                    Krav
                                  </p>
                                )}
                              </div>
                              {deviation.krav ? (
                                <div className="shrink-0 w-12 h-12 flex items-center justify-center">
                                  <div className="w-7 h-8 flex items-center justify-center rounded-full hover:bg-muted transition-colors">
                                    <Edit2 className="w-5 h-5 text-muted-foreground" />
                                  </div>
                                </div>
                              ) : (
                                <StatusChip isComplete={false} />
                              )}
                            </div>
                          </button>
                        )}
                      </>
                    );
                  })()}
                </div>
              </div>
            ) : (
              /* Unlocked State */
              <>
                <div className="px-6 py-4 border-b border-border">
                  <h3 className="body-large text-foreground mb-3">
                    {selectedQuestion.questionText}
                  </h3>
                  
                  {selectedQuestionInfo.requiresDocumentation && (
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-secondary text-secondary-foreground rounded-lg label-medium">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 16">
                        <path d="M18 2H10L8 0H2C0.9 0 0.00999999 0.9 0.00999999 2L0 14C0 15.1 0.9 16 2 16H18C19.1 16 20 15.1 20 14V4C20 2.9 19.1 2 18 2ZM18 14H2V2H7.17L9.17 4H18V14ZM15.5 8.12V11.5H12.5V6.5H13.88L15.5 8.12ZM11 5V13H17V7.5L14.5 5H11Z" />
                      </svg>
                      Dokumentasjon kreves
                    </div>
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
                        className="w-full flex items-center gap-3 px-3 py-2 hover:bg-muted rounded-[var(--radius)] transition-colors"
                      >
                        <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${
                          selectedQuestion.answer === option
                            ? 'border-primary bg-primary'
                            : 'border-foreground'
                        }`}>
                          {selectedQuestion.answer === option && (
                            <div className="w-2.5 h-2.5 rounded-full bg-white" />
                          )}
                        </div>
                        <span className={`body-medium ${
                          selectedQuestion.answer === option ? 'text-primary' : 'text-foreground'
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
                  {selectedQuestionData.answer && activeTab === 'avvik' && (
                    <DeviationListView 
                      deviations={selectedQuestionData.deviations}
                      onUpdate={(deviations) => onUpdateQuestionData?.(selectedQuestionId, { deviations })}
                      showTrengerUtfylling={true}
                    />
                  )}

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
                    <NotatView 
                      questionId={selectedQuestionId}
                      questionData={selectedQuestionData}
                      onUpdateQuestionData={onUpdateQuestionData}
                    />
                  )}
                </div>
              </>
            )}
          </div>
        )}
      </div>

      {/* MOBILE/TABLET: Bottom Sheet */}
      {selectedQuestion && selectedQuestionInfo && (
        <BottomSheet
          isOpen={isBottomSheetOpen}
          onClose={() => setIsBottomSheetOpen(false)}
          title={selectedQuestionInfo.id}
          maxHeight={90}
        >
          {!isLocked ? (
            <>
              <div className="px-6 py-4 border-b border-border">
                <h3 className="body-large text-foreground mb-3">
                  {selectedQuestion.questionText}
                </h3>
                
                {selectedQuestionInfo.requiresDocumentation && (
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-secondary text-secondary-foreground rounded-lg label-medium">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 16">
                      <path d="M18 2H10L8 0H2C0.9 0 0.00999999 0.9 0.00999999 2L0 14C0 15.1 0.9 16 2 16H18C19.1 16 20 15.1 20 14V4C20 2.9 19.1 2 18 2ZM18 14H2V2H7.17L9.17 4H18V14ZM15.5 8.12V11.5H12.5V6.5H13.88L15.5 8.12ZM11 5V13H17V7.5L14.5 5H11Z" />
                    </svg>
                    Dokumentasjon kreves
                  </div>
                )}
              </div>

              <div className="px-6 py-4 border-b border-border">
                <h4 className="label-medium text-foreground mb-3">Velg svar</h4>
                <div className="space-y-2">
                  {(['Ja', 'Nei', 'Ikke relevant'] as const).map((option) => (
                    <button
                      key={option}
                      onClick={() => handleAnswerChange(option)}
                      className="w-full flex items-center gap-3 px-3 py-2 hover:bg-muted rounded-[var(--radius)] transition-colors"
                    >
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${selectedQuestion.answer === option ? 'border-primary bg-primary' : 'border-foreground'}`}>
                        {selectedQuestion.answer === option && (
                          <div className="w-2.5 h-2.5 rounded-full bg-white" />
                        )}
                      </div>
                      <span className={`body-medium ${selectedQuestion.answer === option ? 'text-primary' : 'text-foreground'}`}>
                        {option}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="border-b border-border">
                <div className="flex overflow-x-auto scrollbar-hide px-4">
                  {getVisibleTabs().map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className="px-3 py-3 label-medium relative transition-colors whitespace-nowrap"
                      style={{color: activeTab === tab ? '#1a1c16' : '#44483b'}}
                    >
                      {getTabLabel(tab)}
                      {activeTab === tab && (
                        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
                      )}
                    </button>
                  ))}
                </div>
              </div>

              <div className="px-6 py-4">
                {selectedQuestionData.answer && activeTab === 'avvik' && (
                  <DeviationListView 
                    deviations={selectedQuestionData.deviations}
                    onUpdate={(deviations) => onUpdateQuestionData?.(selectedQuestionId, { deviations })}
                    showTrengerUtfylling={true}
                  />
                )}

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
                  <NotatView 
                    questionId={selectedQuestionId}
                    questionData={selectedQuestionData}
                    onUpdateQuestionData={onUpdateQuestionData}
                  />
                )}
              </div>
            </>
          ) : (
            <div className="pb-8">
              <p className="body-large text-muted-foreground px-6 py-4">
                Locked state: Deadline, responsible, and closure info will display here
              </p>
            </div>
          )}
        </BottomSheet>
      )}
    </div>
  );
}
