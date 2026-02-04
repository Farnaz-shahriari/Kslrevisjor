import { useState, useEffect, useRef } from 'react';
import { Check, ChevronDown, Search, AlertTriangle, Calendar as CalendarIcon, User, CheckCircle2, Circle, Edit2, Plus } from 'lucide-react';
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
  onNavigateToSvaroversikt
}: AvvikshandteringPageProps) {
  const [hasAgreed, setHasAgreed] = useState(false);
  const [isLocked, setIsLocked] = useState(false);
  const [selectedQuestionId, setSelectedQuestionId] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<TabType>('avvik');
  const [showDocumentsMenu, setShowDocumentsMenu] = useState(false);
  const [panelWidth, setPanelWidth] = useState(520);
  const [isResizing, setIsResizing] = useState(false);
  const [showResizeHandle, setShowResizeHandle] = useState(false);
  
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
      
      setAnswers(prev => prev.map(a => 
        a.id === selectedQuestionId ? { ...a, answer: 'Nei' } : a
      ));
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

  return (
    <div className="flex flex-col h-full w-full">
      {/* Header Section */}
      <div className="px-10 py-3 border-b border-border">
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

      {/* Table and Detail Panel */}
      <div id="avvikshandtering-container" className="flex flex-1 overflow-hidden w-full">
        {/* Table */}
        <div className="flex-1 overflow-auto border-r border-border">
          <table className="w-full">
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
              {answers.map((answer) => (
                <tr
                  key={answer.id}
                  onClick={() => setSelectedQuestionId(answer.id)}
                  className={`cursor-pointer border-b border-border transition-colors ${
                    selectedQuestionId === answer.id
                      ? 'bg-accent'
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
        </div>

        {/* Detail Panel */}
        {selectedQuestion && selectedQuestionInfo && (
          <div 
            className="overflow-y-auto bg-background relative"
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
              /* Locked State - Figma Design */
              <div className="px-6 py-4">
                {/* Question Number with External Link */}
                <div className="flex gap-2 items-center justify-between mb-2">
                  <h3 className="font-['Quatro:Regular',sans-serif] text-[22px] leading-[28px] text-[#1a1c16]">
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
                <h4 className="font-['Quatro:Regular',sans-serif] text-[22px] leading-[28px] text-[#1a1c16] mb-4">
                  {selectedQuestion.questionText}
                </h4>

                {/* Severity Badge */}
                {selectedQuestion.severity && (
                  <div className={`flex items-center gap-4 p-4 rounded-lg mb-4 ${getSeverityColor(selectedQuestion.severity)}`}>
                    <svg className="w-6 h-6 shrink-0" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                      <g transform="scale(1.09)">
                        <path d={svgPaths.p6027970} fill="currentColor" />
                      </g>
                    </svg>
                    <div className="flex-1">
                      <p className="font-['Manrope:Medium',sans-serif] text-[12px] leading-[16px]">
                        Beregnet alvorlighetsgrad
                      </p>
                      <p className="font-['Manrope:Medium',sans-serif] text-[16px] leading-[24px]">
                        {getSeverityLabel(selectedQuestion.severity)}
                      </p>
                    </div>
                    <svg className="w-6 h-6 shrink-0" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                      <g transform="scale(1.2)">
                        <path d={svgPaths.p19ecbc00} fill="currentColor" />
                      </g>
                    </svg>
                  </div>
                )}

                <div className="border-t border-[#C4C8B7] my-4" />

                {/* Mangel */}
                <button className="w-full flex items-start gap-4 p-2 hover:bg-muted rounded-lg mb-2">
                  <div className="flex-1">
                    <p className="font-['Manrope:Medium',sans-serif] text-[12px] leading-[16px] text-[#44483b] text-left">
                      Mangel
                    </p>
                    <p className="font-['Manrope:Regular',sans-serif] text-[16px] leading-[24px] text-[#1a1c16] text-left">
                      {selectedQuestionData.deviations?.[0]?.description || 'Ingen dokumentasjon fremvist for truckkontroll.'}
                    </p>
                  </div>
                  <svg className="w-5 h-5 mt-1 shrink-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                    <g transform="scale(1.3333)">
                      <path d={svgPaths.p25003780} fill="#44483B" />
                    </g>
                  </svg>
                </button>

                {/* Tidsfrist */}
                <Popover open={isDatePickerOpen} onOpenChange={setIsDatePickerOpen}>
                  <PopoverTrigger asChild>
                    <button 
                      className="w-full flex items-center gap-4 p-2 hover:bg-muted rounded-lg mb-2"
                    >
                      <svg className="w-6 h-6 shrink-0" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                        <g transform="scale(1.2)">
                          <path d={svgPaths.p302c2680} fill="#44483B" />
                        </g>
                      </svg>
                      <div className="flex-1 text-left">
                        <p className="font-['Manrope:Medium',sans-serif] text-[12px] leading-[16px] text-[#44483b]">
                          Tidsfrist for lukking av avvik
                        </p>
                        <p className="font-['Manrope:Regular',sans-serif] text-[16px] leading-[24px] text-[#1a1c16]">
                          {selectedClosureInfo.deadline 
                            ? `${format(new Date(selectedClosureInfo.deadline), 'd. MMMM yyyy', { locale: nb })} (anbefalt)`
                            : '4. mars 2026 (anbefalt)'
                          }
                        </p>
                      </div>
                      <svg className="w-5 h-5 shrink-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                        <g transform="scale(1.3333)">
                          <path d={svgPaths.p25003780} fill="#44483B" />
                        </g>
                      </svg>
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

                {/* Ansvarlig */}
                {editingResponsible === selectedQuestionId ? (
                  <div className="w-full flex items-center gap-4 p-2 mb-4">
                    <svg className="w-6 h-6 shrink-0" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                      <g transform="scale(1.2)">
                        <path d={svgPaths.p22a29c0} fill="#44483B" />
                      </g>
                    </svg>
                    <div className="flex-1">
                      <input
                        type="text"
                        value={tempResponsible}
                        onChange={(e) => setTempResponsible(e.target.value)}
                        placeholder="Skriv navn..."
                        className="w-full px-3 py-2 border border-border rounded-lg font-['Manrope:Regular',sans-serif] text-[16px] leading-[24px] text-[#1a1c16] focus:outline-none focus:ring-2 focus:ring-primary"
                        autoFocus
                      />
                    </div>
                    <button
                      onClick={() => {
                        if (tempResponsible.trim() && selectedQuestionId) {
                          updateClosureInfo(selectedQuestionId, { responsible: tempResponsible.trim() });
                          setEditingResponsible(null);
                          setTempResponsible('');
                        }
                      }}
                      className="p-2 hover:bg-muted rounded-lg"
                    >
                      <Check className="w-5 h-5 text-primary" />
                    </button>
                  </div>
                ) : (
                  <button 
                    onClick={() => {
                      setEditingResponsible(selectedQuestionId);
                      setTempResponsible(selectedClosureInfo.responsible || '');
                    }}
                    className="w-full flex items-center gap-4 p-2 hover:bg-muted rounded-lg mb-4"
                  >
                    <svg className="w-6 h-6 shrink-0" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                      <g transform="scale(1.2)">
                        <path d={svgPaths.p22a29c0} fill="#44483B" />
                      </g>
                    </svg>
                    <div className="flex-1 text-left">
                      <p className="font-['Manrope:Regular',sans-serif] text-[16px] leading-[24px] text-[#1a1c16]">
                        Ansvarlig for lukking:
                      </p>
                      <p className="font-['Manrope:Regular',sans-serif] text-[14px] leading-[20px] text-[#44483b]">
                        {selectedClosureInfo.responsible || 'Påkrevd'}
                      </p>
                    </div>
                    <svg className="w-6 h-6 shrink-0" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                      <g transform="scale(1.714)">
                        <path d={svgPaths.p2ccb20} fill="#44483B" />
                      </g>
                    </svg>
                  </button>
                )}

                {/* Tabs */}
                <div className="flex border-b border-[#E3E3D9] mb-4">
                  <button
                    onClick={() => setActiveTab('lukking')}
                    className="px-4 py-3 font-['Manrope:Medium',sans-serif] text-[14px] leading-[20px] relative"
                    style={{ color: activeTab === 'lukking' ? '#1a1c16' : '#44483b' }}
                  >
                    Lukking av avvik
                    {activeTab === 'lukking' && (
                      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#4a671e]" />
                    )}
                  </button>
                  <button
                    onClick={() => setActiveTab('avvik')}
                    className="px-4 py-3 font-['Manrope:Medium',sans-serif] text-[14px] leading-[20px] relative"
                    style={{ color: activeTab === 'avvik' ? '#1a1c16' : '#44483b' }}
                  >
                    Mer om avvik og sjekkelistekrav
                    {activeTab === 'avvik' && (
                      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#4a671e]" />
                    )}
                  </button>
                </div>

                {/* Tab Content */}
                {activeTab === 'lukking' && (
                  <div className="bg-[#eeeee4] border border-[#c4c8b7] rounded-xl p-6">
                    <h5 className="font-['Manrope:Medium',sans-serif] text-[16px] leading-[24px] text-[#1a1c16] mb-1">
                      Hvordan bekreftes tiltaket?
                    </h5>
                    <p className="font-['Manrope:Regular',sans-serif] text-[14px] leading-[20px] text-[#44483b] mb-4">
                      Alvorlighetsgraden styrer hvilke bekreftelsesvalg du ser.
                    </p>

                    {/* Radio Options */}
                    {(() => {
                      const isLiteAvvik = selectedQuestion.severity === 'lite-avvik';
                      const availableMethods: ConfirmationMethod[] = isLiteAvvik 
                        ? ['dokumentasjon']
                        : ['dokumentasjon', 'digitalt-besok', 'fysisk-besok'];
                      
                      // Auto-select dokumentasjon for lite avvik if not already set
                      if (isLiteAvvik && !selectedClosureInfo.confirmationMethod) {
                        updateClosureInfo(selectedQuestionId, { confirmationMethod: 'dokumentasjon' });
                      }
                      
                      return (
                        <div className="space-y-2">
                          {availableMethods.map((method) => {
                            const isSelected = selectedClosureInfo.confirmationMethod === method;
                            return (
                              <button
                                key={method}
                                onClick={() => updateClosureInfo(selectedQuestionId, { confirmationMethod: method })}
                                className="w-full flex items-center gap-3 px-3 py-2 hover:bg-muted/50 rounded-[var(--radius)] transition-colors"
                              >
                                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${
                                  isSelected
                                    ? 'border-primary bg-primary'
                                    : 'border-foreground'
                                }`}>
                                  {isSelected && (
                                    <div className="w-2.5 h-2.5 rounded-full bg-white" />
                                  )}
                                </div>
                                <span className={`font-['Manrope:Regular',sans-serif] text-[16px] leading-[24px] ${
                                  isSelected ? 'text-primary' : 'text-[#1a1c16]'
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

                    {/* Kommentar */}
                    {editingComment === selectedQuestionId ? (
                      <div className="w-full mt-4">
                        <div className="flex items-start gap-2">
                          <svg className="w-6 h-6 shrink-0 mt-2" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                            <g transform="scale(1.2)">
                              <path d={svgPaths.p27b1b000} fill="#44483B" />
                            </g>
                          </svg>
                          <div className="flex-1">
                            <textarea
                              value={tempComment}
                              onChange={(e) => setTempComment(e.target.value)}
                              onBlur={() => {
                                updateClosureInfo(selectedQuestionId, { comment: tempComment });
                                setEditingComment(null);
                              }}
                              autoFocus
                              className="w-full p-2 border border-border rounded-[var(--radius)] font-['Manrope:Regular',sans-serif] text-[16px] leading-[24px] text-[#1a1c16] resize-none"
                              rows={3}
                              placeholder="Legg til kommentar..."
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
                        className="w-full flex items-center gap-4 p-2 hover:bg-muted/50 rounded-lg mt-4"
                      >
                        <svg className="w-6 h-6 shrink-0" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                          <g transform="scale(1.2)">
                            <path d={svgPaths.p27b1b000} fill="#44483B" />
                          </g>
                        </svg>
                        <div className="flex-1 text-left">
                          <p className="font-['Manrope:Regular',sans-serif] text-[16px] leading-[24px] text-[#1a1c16]">
                            Kommentar
                          </p>
                          <p className="font-['Manrope:Regular',sans-serif] text-[14px] leading-[20px] text-[#44483b]">
                            {selectedClosureInfo.comment || 'valgfri'}
                          </p>
                        </div>
                        <svg className="w-6 h-6 shrink-0" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                          <g transform="scale(1.714)">
                            <path d={svgPaths.p2ccb20} fill="#44483B" />
                          </g>
                        </svg>
                      </button>
                    )}
                  </div>
                )}

                {activeTab === 'avvik' && selectedQuestionData.deviations && selectedQuestionData.deviations.length > 0 && (() => {
                  const deviation = selectedQuestionData.deviations[0];
                  return (
                    <div className="w-full space-y-4">
                      {/* Rapportert avvik */}
                      <div className="flex flex-col gap-2 py-2">
                        <p className="font-['Manrope:Medium',sans-serif] text-[12px] leading-[16px] text-[#44483b]">
                          Rapportert avvik
                        </p>
                        <div className={`inline-flex self-start items-center gap-2 px-3 py-1.5 rounded-lg ${getSeverityColor(deviation.severity)}`}>
                          <AlertTriangle className="w-4 h-4" />
                          <span className="label-medium">
                            {getSeverityLabel(deviation.severity)}
                          </span>
                        </div>
                      </div>

                      {/* Mangel */}
                      <div className="border-t border-[#c4c8b7] pt-4">
                        {editingMangel === selectedQuestionId ? (
                          <div className="flex items-start gap-4">
                            <div className="flex-1">
                              <p className="font-['Manrope:Medium',sans-serif] text-[12px] leading-[16px] text-[#44483b] mb-2">
                                Mangel
                              </p>
                              <textarea
                                value={tempMangel}
                                onChange={(e) => setTempMangel(e.target.value)}
                                onBlur={() => {
                                  if (onUpdateQuestionData) {
                                    const updatedDeviations = [...selectedQuestionData.deviations];
                                    updatedDeviations[0] = { ...updatedDeviations[0], mangel: tempMangel };
                                    onUpdateQuestionData(selectedQuestionId, { deviations: updatedDeviations });
                                  }
                                  setEditingMangel(null);
                                }}
                                autoFocus
                                className="w-full p-2 border border-border rounded-[var(--radius)] font-['Manrope:Regular',sans-serif] text-[16px] leading-[24px] text-[#1a1c16] resize-none"
                                rows={2}
                              />
                            </div>
                          </div>
                        ) : (
                          <div className="flex items-start gap-4 py-2">
                            <div className="flex-1">
                              <p className="font-['Manrope:Medium',sans-serif] text-[12px] leading-[16px] text-[#44483b]">
                                Mangel
                              </p>
                              <p className="font-['Manrope:Regular',sans-serif] text-[16px] leading-[24px] text-[#1a1c16]">
                                {deviation.mangel || 'Ingen mangel lagt til'}
                              </p>
                            </div>
                            <button
                              onClick={() => {
                                setEditingMangel(selectedQuestionId);
                                setTempMangel(deviation.mangel || '');
                              }}
                              className="shrink-0 w-12 h-12 flex items-center justify-center hover:bg-muted rounded-full transition-colors"
                            >
                              <svg className="w-5 h-5" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
                                <path d={svgPathsDeviation.p25003780} fill="#44483B" />
                              </svg>
                            </button>
                          </div>
                        )}

                        <div className="mt-4 border-t border-[#c4c8b7]" />
                      </div>

                      {/* Bevis */}
                      <div className="pt-4">
                        {editingBevis === selectedQuestionId ? (
                          <div className="flex items-start gap-4">
                            <div className="flex-1">
                              <p className="font-['Manrope:Medium',sans-serif] text-[12px] leading-[16px] text-[#44483b] mb-2">
                                Bevis
                              </p>
                              <textarea
                                value={tempBevis}
                                onChange={(e) => setTempBevis(e.target.value)}
                                onBlur={() => {
                                  if (onUpdateQuestionData) {
                                    const updatedDeviations = [...selectedQuestionData.deviations];
                                    updatedDeviations[0] = { ...updatedDeviations[0], bevis: tempBevis };
                                    onUpdateQuestionData(selectedQuestionId, { deviations: updatedDeviations });
                                  }
                                  setEditingBevis(null);
                                }}
                                autoFocus
                                className="w-full p-2 border border-border rounded-[var(--radius)] font-['Manrope:Regular',sans-serif] text-[16px] leading-[24px] text-[#1a1c16] resize-none"
                                rows={2}
                              />
                            </div>
                          </div>
                        ) : (
                          <div className="flex items-start gap-4 py-2">
                            <div className="flex-1">
                              <p className="font-['Manrope:Medium',sans-serif] text-[12px] leading-[16px] text-[#44483b]">
                                Bevis
                              </p>
                              <p className="font-['Manrope:Regular',sans-serif] text-[16px] leading-[24px] text-[#1a1c16]">
                                {deviation.bevis || 'Ingen bevis lagt til'}
                              </p>
                            </div>
                            <button
                              onClick={() => {
                                setEditingBevis(selectedQuestionId);
                                setTempBevis(deviation.bevis || '');
                              }}
                              className="shrink-0 w-12 h-12 flex items-center justify-center hover:bg-muted rounded-full transition-colors"
                            >
                              <svg className="w-5 h-5" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
                                <path d={svgPathsDeviation.p25003780} fill="#44483B" />
                              </svg>
                            </button>
                          </div>
                        )}

                        {/* Upload Images */}
                        <div className="mt-4">
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
                          <button
                            onClick={() => fileInputRef.current?.click()}
                            className="flex items-center gap-2 px-6 py-4 border border-[#c4c8b7] rounded-full hover:bg-muted transition-colors"
                          >
                            <svg className="w-6 h-6" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                              <path d={svgPathsDeviation.p3573eb00} fill="#44483B" />
                            </svg>
                            <span className="font-['Manrope:Medium',sans-serif] text-[16px] leading-[24px] text-[#44483b]">
                              Last opp bilde
                            </span>
                          </button>

                          {/* Uploaded Images List */}
                          {deviation.bevisImages && deviation.bevisImages.length > 0 && (
                            <div className="mt-4 space-y-0">
                              {deviation.bevisImages.map((image: any, index: number) => (
                                <div key={image.id || index} className="flex items-center gap-4 px-4 py-2 min-h-[72px]">
                                  <div className="w-14 h-14 bg-muted rounded overflow-hidden shrink-0">
                                    <img src={image.url} alt={image.name} className="w-full h-full object-cover" />
                                  </div>
                                  <div className="flex-1">
                                    <p className="font-['Manrope:Regular',sans-serif] text-[16px] leading-[24px] text-[#1a1c16]">
                                      {image.name}
                                    </p>
                                  </div>
                                  <button
                                    onClick={() => {
                                      if (onUpdateQuestionData) {
                                        const updatedDeviations = [...selectedQuestionData.deviations];
                                        updatedDeviations[0] = {
                                          ...updatedDeviations[0],
                                          bevisImages: deviation.bevisImages.filter((_: any, i: number) => i !== index)
                                        };
                                        onUpdateQuestionData(selectedQuestionId, { deviations: updatedDeviations });
                                      }
                                    }}
                                    className="shrink-0"
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

                        <div className="mt-4 border-t border-[#c4c8b7]" />
                      </div>

                      {/* Krav */}
                      <div className="pt-4">
                        {editingKrav === selectedQuestionId ? (
                          <div className="flex items-start gap-4">
                            <div className="flex-1">
                              <p className="font-['Manrope:Medium',sans-serif] text-[12px] leading-[16px] text-[#44483b] mb-2">
                                Krav (fra veileder)
                              </p>
                              <textarea
                                value={tempKrav}
                                onChange={(e) => setTempKrav(e.target.value)}
                                onBlur={() => {
                                  if (onUpdateQuestionData) {
                                    const updatedDeviations = [...selectedQuestionData.deviations];
                                    updatedDeviations[0] = { ...updatedDeviations[0], krav: tempKrav };
                                    onUpdateQuestionData(selectedQuestionId, { deviations: updatedDeviations });
                                  }
                                  setEditingKrav(null);
                                }}
                                autoFocus
                                className="w-full p-2 border border-border rounded-[var(--radius)] font-['Manrope:Regular',sans-serif] text-[16px] leading-[24px] text-[#1a1c16] resize-none"
                                rows={2}
                              />
                            </div>
                          </div>
                        ) : (
                          <div className="flex items-start gap-4 py-2">
                            <div className="flex-1">
                              <p className="font-['Manrope:Medium',sans-serif] text-[12px] leading-[16px] text-[#44483b]">
                                Krav (fra veileder)
                              </p>
                              <p className="font-['Manrope:Regular',sans-serif] text-[16px] leading-[24px] text-[#1a1c16]">
                                {deviation.krav || 'Ingen krav lagt til'}
                              </p>
                            </div>
                            <button
                              onClick={() => {
                                setEditingKrav(selectedQuestionId);
                                setTempKrav(deviation.krav || '');
                              }}
                              className="shrink-0 w-12 h-12 flex items-center justify-center hover:bg-muted rounded-full transition-colors"
                            >
                              <svg className="w-5 h-5" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
                                <path d={svgPathsDeviation.p25003780} fill="#44483B" />
                              </svg>
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })()}
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
                      questionId={selectedQuestionId}
                      questionData={selectedQuestionData}
                      onUpdateQuestionData={onUpdateQuestionData}
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
    </div>
  );
}
