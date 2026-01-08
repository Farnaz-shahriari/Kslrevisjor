import { ChevronDown, ChevronLeft } from 'lucide-react';
import { useState, useEffect } from 'react';
import { ObservationView } from './ObservationView';
import { DeviationListView } from './DeviationListView';
import { NotatView } from './NotatView';
import { DocumentsMenu } from './DocumentsMenu';
import { AttachedDocumentCard } from './AttachedDocumentCard';
import { KravVeiledningMobile } from './KravVeiledningMobile';
import { QuestionHeadingWithNavigation } from './QuestionHeadingWithNavigation';
import { getQuestionById, getNextQuestionId, getPreviousQuestionId } from '../data/questions';
import svgPaths from '../imports/svg-4o5ww5kgwr';
import DocumentationChip from '../imports/DocumentationChip';
import { RadioButton } from './ui/radio-button';

type AnswerType = 'ja' | 'nei' | 'ikke-relevant';
type TabType = 'observasjoner' | 'egenvurderinger' | 'notat' | 'avvik';

export interface QuestionData {
  answer?: AnswerType;
  improvementText?: string;
  improvementImages?: string[];
  positiveText?: string;
  positiveImages?: string[];
  notatText?: string;
  deviations?: any[];
  attachedDocuments?: string[];
}

interface QuestionViewProps {
  questionId: string;
  questionData: QuestionData;
  onAnswer?: (questionId: string, answer: AnswerType) => void;
  onUpdateData?: (questionId: string, data: Partial<QuestionData>) => void;
  onNavigate?: (questionId: string) => void;
  onNavigateToDocument?: (documentIndex: number) => void;
  deviationsLocked?: boolean;
  showBackButton?: boolean;
  onBackToMenu?: () => void;
}

export function QuestionView({ questionId, questionData: savedData, onAnswer, onUpdateData, onNavigate, onNavigateToDocument, deviationsLocked, showBackButton, onBackToMenu }: QuestionViewProps) {
  const questionInfo = getQuestionById(questionId);
  const [selectedAnswer, setSelectedAnswer] = useState<AnswerType | null>(savedData.answer || null);
  const [activeTab, setActiveTab] = useState<TabType>('egenvurderinger');
  const [showDocumentsMenu, setShowDocumentsMenu] = useState(false);

  // Update selected answer when question changes or saved answer changes
  useEffect(() => {
    setSelectedAnswer(savedData.answer || null);
    
    // Set the appropriate tab based on saved answer
    if (savedData.answer === 'ja') {
      setActiveTab('observasjoner');
    } else if (savedData.answer === 'nei') {
      setActiveTab('avvik');
    } else if (savedData.answer) {
      setActiveTab('egenvurderinger');
    } else {
      setActiveTab('egenvurderinger');
    }
  }, [questionId, savedData.answer]);

  const handleAnswerSelect = (answer: AnswerType) => {
    // If clicking on already selected answer, unselect it
    if (selectedAnswer === answer) {
      setSelectedAnswer(null);
      setActiveTab('egenvurderinger');
      // Save null answer and clear deviations
      if (onAnswer) {
        onAnswer(questionId, null as any);
      }
      // Clear deviations when unselecting
      if (onUpdateData) {
        onUpdateData(questionId, { deviations: [] });
      }
    } else {
      setSelectedAnswer(answer);
      if (answer === 'ja') {
        setActiveTab('observasjoner');
      } else if (answer === 'nei') {
        setActiveTab('avvik');
      } else {
        setActiveTab('egenvurderinger');
      }
      
      // If changing from 'nei' to another answer, clear deviations
      if (selectedAnswer === 'nei' && answer !== 'nei') {
        if (onUpdateData) {
          onUpdateData(questionId, { deviations: [] });
        }
      }
      
      // Save the answer
      if (onAnswer) {
        onAnswer(questionId, answer);
      }
    }
  };

  const handleRemoveDocument = (index: number) => {
    if (savedData.attachedDocuments && onUpdateData) {
      const newDocuments = savedData.attachedDocuments.filter((_, i) => i !== index);
      onUpdateData(questionId, { attachedDocuments: newDocuments });
    }
  };

  const getVisibleTabs = (): TabType[] => {
    if (!selectedAnswer) {
      return ['egenvurderinger', 'notat'];
    }
    if (selectedAnswer === 'ja') {
      return ['observasjoner', 'egenvurderinger', 'notat'];
    } else if (selectedAnswer === 'nei') {
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

  const getAnswerDisplayText = (answer: AnswerType | null): string => {
    if (!answer) return 'Ja';
    const displayTexts: Record<AnswerType, string> = {
      'ja': 'Ja',
      'nei': 'Nei',
      'ikke-relevant': 'Ikke relevant'
    };
    return displayTexts[answer];
  };

  if (!questionInfo) {
    return (
      <div className="flex-1 bg-background flex items-center justify-center">
        <p className="text-muted-foreground">Spørsmål ikke funnet</p>
      </div>
    );
  }

  return (
    <div className="flex-1 bg-background flex flex-col h-full overflow-auto">
      {/* Back button for mobile/tablet */}
      {showBackButton && onBackToMenu && (
        <div className="px-6 pt-4 pb-2 min-[1400px]:hidden">
          <button
            onClick={onBackToMenu}
            className="flex items-center gap-2 label-large text-foreground hover:opacity-70 transition-opacity"
            aria-label="Tilbake til spørsmålsliste"
          >
            <ChevronLeft className="w-5 h-5" />
            Tilbake
          </button>
        </div>
      )}

      {/* Scrollable content */}
      <div className="px-[40px] max-[1400px]:px-6 pt-[12px] pb-6">
        {/* Question heading with navigation */}
        <div className="mb-2">
          <QuestionHeadingWithNavigation
            questionNumber={questionId}
            hasAnswer={!!selectedAnswer}
            onPrevious={() => {
              const prevId = getPreviousQuestionId(questionId);
              if (prevId && onNavigate) {
                onNavigate(prevId);
              }
            }}
            onNext={() => {
              const nextId = getNextQuestionId(questionId);
              if (nextId && onNavigate) {
                onNavigate(nextId);
              }
            }}
            hasPrevious={!!getPreviousQuestionId(questionId)}
            hasNext={!!getNextQuestionId(questionId)}
          />
        </div>

        {/* Question title */}
        <div className="w-full mb-2">
          <p className="title-large m-0">{questionInfo.title}</p>
        </div>

        {/* Information chips */}
        <div className="flex gap-2 items-center w-full mb-2">{questionInfo.requiresDocumentation && (
            <div className="bg-secondary h-8 flex items-center justify-center rounded-[8px]">
              <div className="flex gap-2 items-center justify-center pl-2 pr-3 py-1.5">
                <div className="w-[18px] h-[18px] flex items-center justify-center">
                  <svg className="w-[15px] h-3" fill="none" viewBox="0 0 20 16">
                    <path d="M18 2H10L8 0H2C0.9 0 0.00999999 0.9 0.00999999 2L0 14C0 15.1 0.9 16 2 16H18C19.1 16 20 15.1 20 14V4C20 2.9 19.1 2 18 2ZM18 14H2V2H7.17L9.17 4H18V14ZM15.5 8.12V11.5H12.5V6.5H13.88L15.5 8.12ZM11 5V13H17V7.5L14.5 5H11Z" fill="white" />
                  </svg>
                </div>
                <p className="label-medium text-secondary-foreground m-0">Dokumentasjon kreves</p>
              </div>
            </div>
          )}
        </div>

        {/* Mobile Krav og Veiledning - Shows when combined width of question + right panel < 1000px */}
        <div className="max-[1600px]:block hidden w-full mb-4">
          <KravVeiledningMobile
            veilederRevisorText={questionInfo.veilederRevisorText}
            veilederText={questionInfo.veilederText}
            kravLinks={questionInfo.kravLinks}
          />
        </div>

        {/* Answer selection */}
        <div className="flex flex-col min-[768px]:flex-row items-stretch min-[768px]:items-center w-full gap-2 mb-6">
          <div className={`flex flex-col h-10 min-h-[40px] items-center justify-center flex-1 rounded-[var(--radius)] transition-colors ${
            deviationsLocked 
              ? 'opacity-40 cursor-not-allowed' 
              : 'hover:bg-muted'
          }`}>
            <RadioButton
              checked={selectedAnswer === 'ja'}
              onClick={() => !deviationsLocked && handleAnswerSelect('ja')}
              label="Ja"
              disabled={deviationsLocked}
              className="w-full px-4"
            />
          </div>

          <div className={`flex flex-col h-10 min-h-[40px] items-center justify-center flex-1 rounded-[var(--radius)] transition-colors ${
            deviationsLocked 
              ? 'opacity-40 cursor-not-allowed' 
              : 'hover:bg-muted'
          }`}>
            <RadioButton
              checked={selectedAnswer === 'nei'}
              onClick={() => !deviationsLocked && handleAnswerSelect('nei')}
              label="Nei"
              disabled={deviationsLocked}
              className="w-full px-4"
            />
          </div>

          <div className={`flex flex-col h-10 min-h-[40px] items-center justify-center flex-1 rounded-[var(--radius)] transition-colors ${
            deviationsLocked 
              ? 'opacity-40 cursor-not-allowed' 
              : 'hover:bg-muted'
          }`}>
            <RadioButton
              checked={selectedAnswer === 'ikke-relevant'}
              onClick={() => !deviationsLocked && handleAnswerSelect('ikke-relevant')}
              label="Ikke relevant"
              disabled={deviationsLocked}
              className="w-full px-4"
            />
          </div>
        </div>

        {/* Tabs */}
        <div className="content-stretch flex flex-col items-start shrink-0 w-full">
          <div className="content-stretch cursor-pointer flex items-start shrink-0 w-full relative">
            {getVisibleTabs().map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className="content-stretch flex flex-col h-[48px] items-center justify-center shrink-0 px-[16px] py-[14px] relative"
              >
                <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] shrink-0 text-center text-nowrap tracking-[0.1px]" style={{
                  fontSize: 'var(--text-sm)',
                  color: activeTab === tab ? '#1a1c16' : '#44483b'
                }}>
                  <p className="leading-[20px] whitespace-pre m-0">
                    {getTabLabel(tab)}
                  </p>
                </div>
                {activeTab === tab && (
                  <div className="absolute bottom-0 h-[2px] left-0 right-0 bg-[#4a671e] z-10" data-name="Indicator" />
                )}
              </button>
            ))}
          </div>
          <div className="content-stretch flex flex-col items-start justify-center shrink-0 w-full">
            <div className="h-0 shrink-0 w-full relative">
              <div className="absolute bottom-0 left-0 right-0 top-[-2px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 622 2">
                  <line stroke="#E3E3D9" strokeWidth="2" x2="622" y1="1" y2="1" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Tab content - no separate scroll */}
        <div className="pt-4">
          {selectedAnswer && (
            <div className="max-w-2xl">
              {activeTab === 'observasjoner' && (
                <ObservationView 
                  improvementText={savedData.improvementText}
                  improvementImages={savedData.improvementImages}
                  positiveText={savedData.positiveText}
                  positiveImages={savedData.positiveImages}
                  onUpdate={(data) => onUpdateData?.(questionId, data)}
                />
              )}
              {activeTab === 'avvik' && (
                <DeviationListView 
                  deviations={savedData.deviations}
                  onUpdate={(deviations) => onUpdateData?.(questionId, { deviations })}
                  showTrengerUtfylling={false}
                />
              )}
              {activeTab === 'notat' && (
                <NotatView 
                  notatText={savedData.notatText}
                  onUpdate={(text) => onUpdateData?.(questionId, { notatText: text })}
                />
              )}
            </div>
          )}

          {/* Show farmer's self-audit answer when viewing Egenrevisjonssvar tab (before answer selection) */}
          {activeTab === 'egenvurderinger' && !selectedAnswer && (
            <div className="flex flex-col gap-4 items-start shrink-0 w-full">
                <div className="flex flex-col gap-2 items-center justify-center min-h-16 pb-0 pt-2 px-0 shrink-0 w-full">
                  <div className="shrink-0 w-full">
                    <div className="size-full">
                      <div className="flex gap-4 items-start p-2 w-full">
                        <div className="basis-0 flex flex-col grow items-start justify-center min-h-px min-w-px overflow-hidden shrink-0">
                          <div className="flex flex-col justify-center shrink-0 w-full">
                            <p className="label-small text-muted-foreground m-0">Svarvalg</p>
                          </div>
                          <div className="flex flex-col justify-center shrink-0 w-full">
                            <p className="body-large text-foreground m-0">Ja</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-2 items-center justify-center min-h-16 pb-0 pt-2 px-0 shrink-0 w-full">
                  <div className="shrink-0 w-full">
                    <div className="size-full">
                      <div className="flex gap-4 items-start p-2 w-full">
                        <div className="basis-0 flex flex-col grow items-start justify-center min-h-px min-w-px overflow-hidden shrink-0">
                          <div className="flex flex-col justify-center shrink-0 w-full">
                            <p className="label-small text-muted-foreground m-0">Svartekst</p>
                          </div>
                          <div className="flex flex-col justify-center shrink-0 w-full">
                            <p className="body-large text-foreground m-0">{questionInfo.answerText || 'Rutinene for rengjøring av melkestallen kan forbedres ved å innføre en fast sjekkliste etter hver melking.'}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Attached documents section */}
                {savedData.attachedDocuments && savedData.attachedDocuments.length > 0 && (
                  <div className="flex flex-col gap-2 items-start shrink-0 w-full pt-2">
                    <div className="shrink-0" style={{ width: '480px' }}>
                      <div className="flex flex-col justify-center shrink-0 w-full mb-3 px-2">
                        <p className="label-small text-muted-foreground m-0">Knyttede dokumenter</p>
                      </div>
                      <div className="flex flex-col gap-2 w-full">
                        {savedData.attachedDocuments.map((doc, index) => (
                          <AttachedDocumentCard
                            key={index}
                            documentName={doc}
                            onRemove={() => handleRemoveDocument(index)}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                )}
                
              <DocumentsMenu 
                isOpen={showDocumentsMenu} 
                onToggle={() => setShowDocumentsMenu(!showDocumentsMenu)}
                attachedDocuments={savedData.attachedDocuments || []}
                onAttachDocuments={(documents) => onUpdateData?.(questionId, { attachedDocuments: documents })}
                onNavigateToDocument={onNavigateToDocument}
              />
            </div>
          )}

          {/* Show farmer's answer when viewing Egenrevisjonssvar tab (after answer selection) */}
          {activeTab === 'egenvurderinger' && selectedAnswer && (
            <div className="flex flex-col gap-4 items-start shrink-0 w-full">
                <div className="flex flex-col gap-2 items-center justify-center min-h-16 pb-0 pt-2 px-0 shrink-0 w-full">
                  <div className="shrink-0 w-full">
                    <div className="size-full">
                      <div className="flex gap-4 items-start p-2 w-full">
                        <div className="basis-0 flex flex-col grow items-start justify-center min-h-px min-w-px overflow-hidden shrink-0">
                          <div className="flex flex-col justify-center shrink-0 w-full">
                            <p className="label-small text-muted-foreground m-0">Svarvalg</p>
                          </div>
                          <div className="flex flex-col justify-center shrink-0 w-full">
                            <p className="body-large text-foreground m-0">Ja</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-2 items-center justify-center min-h-16 pb-0 pt-2 px-0 shrink-0 w-full">
                  <div className="shrink-0 w-full">
                    <div className="size-full">
                      <div className="flex gap-4 items-start p-2 w-full">
                        <div className="basis-0 flex flex-col grow items-start justify-center min-h-px min-w-px overflow-hidden shrink-0">
                          <div className="flex flex-col justify-center shrink-0 w-full">
                            <p className="label-small text-muted-foreground m-0">Svartekst</p>
                          </div>
                          <div className="flex flex-col justify-center shrink-0 w-full">
                            <p className="body-large text-foreground m-0">{questionInfo.answerText || 'Rutinene for rengjøring av melkestallen kan forbedres ved å innføre en fast sjekkliste etter hver melking.'}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Attached documents section */}
                {savedData.attachedDocuments && savedData.attachedDocuments.length > 0 && (
                  <div className="flex flex-col gap-2 items-start shrink-0 w-full pt-2">
                    <div className="shrink-0" style={{ width: '480px' }}>
                      <div className="flex flex-col justify-center shrink-0 w-full mb-3 px-2">
                        <p className="label-small text-muted-foreground m-0">Knyttede dokumenter</p>
                      </div>
                      <div className="flex flex-col gap-2 w-full">
                        {savedData.attachedDocuments.map((doc, index) => (
                          <AttachedDocumentCard
                            key={index}
                            documentName={doc}
                            onRemove={() => handleRemoveDocument(index)}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                )}
                
              <DocumentsMenu 
                isOpen={showDocumentsMenu} 
                onToggle={() => setShowDocumentsMenu(!showDocumentsMenu)}
                attachedDocuments={savedData.attachedDocuments || []}
                onAttachDocuments={(documents) => onUpdateData?.(questionId, { attachedDocuments: documents })}
                onNavigateToDocument={onNavigateToDocument}
              />
            </div>
          )}

          {!selectedAnswer && activeTab === 'notat' && (
            <NotatView 
              notatText={savedData.notatText}
              onUpdate={(text) => onUpdateData?.(questionId, { notatText: text })}
            />
          )}
        </div>
      </div>
    </div>
  );
}