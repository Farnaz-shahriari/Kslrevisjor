import { ChevronDown } from 'lucide-react';
import { useState, useEffect } from 'react';
import { ObservationView } from './ObservationView';
import { DeviationListView } from './DeviationListView';
import { NotatView } from './NotatView';
import { DocumentsMenu } from './DocumentsMenu';
import { AttachedDocumentCard } from './AttachedDocumentCard';
import { getSpesialitetQuestionById, getNextSpesialitetQuestionId, getPreviousSpesialitetQuestionId } from '../data/spesialitetQuestions';
import svgPaths from '../imports/svg-4o5ww5kgwr';
import DocumentationChip from '../imports/DocumentationChip';

type AnswerType = 'ja' | 'nei' | 'ikke-relevant';
type TabType = 'observasjoner' | 'egenvurderinger' | 'notat' | 'avvik';

export interface SpesialitetQuestionData {
  answer?: AnswerType;
  improvementText?: string;
  improvementImages?: string[];
  positiveText?: string;
  positiveImages?: string[];
  notatText?: string;
  deviations?: any[];
  attachedDocuments?: string[];
}

interface SpesialitetQuestionViewProps {
  questionId: string;
  questionData: SpesialitetQuestionData;
  onAnswer?: (questionId: string, answer: AnswerType) => void;
  onUpdateData?: (questionId: string, data: Partial<SpesialitetQuestionData>) => void;
  onNavigate?: (questionId: string) => void;
  onNavigateToDocument?: (documentIndex: number) => void;
  deviationsLocked?: boolean;
}

export function SpesialitetQuestionView({ questionId, questionData: savedData, onAnswer, onUpdateData, onNavigate, onNavigateToDocument, deviationsLocked }: SpesialitetQuestionViewProps) {
  const questionInfo = getSpesialitetQuestionById(questionId);
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

  const handleAddDocuments = (documents: string[]) => {
    if (onUpdateData) {
      const currentDocuments = savedData.attachedDocuments || [];
      onUpdateData(questionId, { attachedDocuments: [...currentDocuments, ...documents] });
    }
  };

  const handleNavigatePrevious = () => {
    const prevId = getPreviousSpesialitetQuestionId(questionId);
    if (prevId && onNavigate) {
      onNavigate(prevId);
    }
  };

  const handleNavigateNext = () => {
    const nextId = getNextSpesialitetQuestionId(questionId);
    if (nextId && onNavigate) {
      onNavigate(nextId);
    }
  };

  if (!questionInfo) {
    return (
      <div className="flex-1 bg-background flex items-center justify-center">
        <p className="body-medium text-muted-foreground">Spørsmål ikke funnet</p>
      </div>
    );
  }

  const previousQuestionId = getPreviousSpesialitetQuestionId(questionId);
  const nextQuestionId = getNextSpesialitetQuestionId(questionId);

  return (
    <div className="flex-1 bg-background flex flex-col h-full overflow-hidden">
      {/* Header Section */}
      <div className="shrink-0 px-10 pt-3 border-b border-border">
        {/* Question number and text */}
        <div className="flex items-start gap-2 w-full mb-2">
          <div className="shrink-0">
            <p className="title-large m-0 text-nowrap">{questionId}</p>
          </div>
          <div className="flex-1 min-w-0">
            <p className="title-large m-0">{questionInfo.title}</p>
          </div>
        </div>

        {/* Information chips */}
        {questionInfo.requiresDocumentation && (
          <div className="flex gap-2 items-center w-full mb-2">
            <DocumentationChip />
          </div>
        )}

        {/* Answer selection */}
        <div className="flex flex-row items-center w-full gap-2 mb-6">
          {/* Ja */}
          <button
            onClick={() => handleAnswerSelect('ja')}
            className="flex flex-col h-10 min-h-[40px] items-center justify-center flex-1 rounded-[var(--radius)] transition-colors hover:bg-muted"
          >
            <div className="flex gap-2 items-center justify-center w-full h-full">
              <div className="w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors"
                style={{
                  borderColor: selectedAnswer === 'ja' ? 'var(--foreground)' : 'var(--border)',
                }}
              >
                {selectedAnswer === 'ja' && (
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: 'var(--foreground)' }}></div>
                )}
              </div>
              <p className="body-large m-0" style={{ color: selectedAnswer === 'ja' ? 'var(--foreground)' : 'var(--muted-foreground)' }}>
                Ja
              </p>
            </div>
          </button>

          {/* Nei */}
          <button
            onClick={() => handleAnswerSelect('nei')}
            className="flex flex-col h-10 min-h-[40px] items-center justify-center flex-1 rounded-[var(--radius)] transition-colors hover:bg-muted"
          >
            <div className="flex gap-2 items-center justify-center w-full h-full">
              <div className="w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors"
                style={{
                  borderColor: selectedAnswer === 'nei' ? 'var(--foreground)' : 'var(--border)',
                }}
              >
                {selectedAnswer === 'nei' && (
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: 'var(--foreground)' }}></div>
                )}
              </div>
              <p className="body-large m-0" style={{ color: selectedAnswer === 'nei' ? 'var(--foreground)' : 'var(--muted-foreground)' }}>
                Nei
              </p>
            </div>
          </button>

          {/* Ikke relevant */}
          <button
            onClick={() => handleAnswerSelect('ikke-relevant')}
            className="flex flex-col h-10 min-h-[40px] items-center justify-center flex-1 rounded-[var(--radius)] transition-colors hover:bg-muted"
          >
            <div className="flex gap-2 items-center justify-center w-full h-full">
              <div className="w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors"
                style={{
                  borderColor: selectedAnswer === 'ikke-relevant' ? 'var(--foreground)' : 'var(--border)',
                }}
              >
                {selectedAnswer === 'ikke-relevant' && (
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: 'var(--foreground)' }}></div>
                )}
              </div>
              <p className="body-large m-0 whitespace-nowrap" style={{ color: selectedAnswer === 'ikke-relevant' ? 'var(--foreground)' : 'var(--muted-foreground)' }}>
                Ikke relevant
              </p>
            </div>
          </button>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 border-b border-border">
          <button
            onClick={() => setActiveTab('egenvurderinger')}
            className={`px-4 py-2 label-medium transition-colors relative ${
              activeTab === 'egenvurderinger'
                ? 'text-primary'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            Egenvurderinger
            {activeTab === 'egenvurderinger' && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"></div>
            )}
          </button>
          <button
            onClick={() => setActiveTab('observasjoner')}
            className={`px-4 py-2 label-medium transition-colors relative ${
              activeTab === 'observasjoner'
                ? 'text-primary'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            Observasjoner
            {activeTab === 'observasjoner' && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"></div>
            )}
          </button>
          <button
            onClick={() => setActiveTab('avvik')}
            className={`px-4 py-2 label-medium transition-colors relative ${
              activeTab === 'avvik'
                ? 'text-primary'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            Avvik
            {activeTab === 'avvik' && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"></div>
            )}
          </button>
          <button
            onClick={() => setActiveTab('notat')}
            className={`px-4 py-2 label-medium transition-colors relative ${
              activeTab === 'notat'
                ? 'text-primary'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            Notat
            {activeTab === 'notat' && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"></div>
            )}
          </button>
        </div>
      </div>

      {/* Scrollable Content Area */}
      <div className="flex-1 overflow-auto">
        <div className="px-10 pt-6 pb-6">
          {/* Tab Content */}
          {activeTab === 'egenvurderinger' && (
            <div>
              <p className="body-medium text-muted-foreground mb-4">
                Her kan du legge til egne vurderinger og kommentarer til spørsmålet.
              </p>
            </div>
          )}

          {activeTab === 'observasjoner' && (
            <ObservationView
              improvementText={savedData.improvementText || ''}
              improvementImages={savedData.improvementImages || []}
              positiveText={savedData.positiveText || ''}
              positiveImages={savedData.positiveImages || []}
              onImprovementTextChange={(text) => onUpdateData?.(questionId, { improvementText: text })}
              onImprovementImagesChange={(images) => onUpdateData?.(questionId, { improvementImages: images })}
              onPositiveTextChange={(text) => onUpdateData?.(questionId, { positiveText: text })}
              onPositiveImagesChange={(images) => onUpdateData?.(questionId, { positiveImages: images })}
            />
          )}

          {activeTab === 'avvik' && (
            <DeviationListView
              deviations={savedData.deviations || []}
              onDeviationsChange={(deviations) => onUpdateData?.(questionId, { deviations })}
              locked={deviationsLocked}
            />
          )}

          {activeTab === 'notat' && (
            <NotatView
              notatText={savedData.notatText || ''}
              onNotatChange={(text) => onUpdateData?.(questionId, { notatText: text })}
            />
          )}

          {/* Attached Documents Section */}
          {savedData.attachedDocuments && savedData.attachedDocuments.length > 0 && (
            <div className="mt-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="label-medium text-foreground">Vedlagte dokumenter</h3>
              </div>
              <div className="space-y-2">
                {savedData.attachedDocuments.map((doc, index) => (
                  <AttachedDocumentCard
                    key={index}
                    documentName={doc}
                    onRemove={() => handleRemoveDocument(index)}
                    onNavigate={() => onNavigateToDocument?.(index)}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Add Documents Button */}
          <div className="mt-6 relative">
            <button
              onClick={() => setShowDocumentsMenu(!showDocumentsMenu)}
              className="border border-border text-foreground px-6 py-2.5 h-10 rounded-[var(--radius-button)] label-medium hover:bg-muted transition-colors"
            >
              Legg til dokument
            </button>
            {showDocumentsMenu && (
              <DocumentsMenu
                onClose={() => setShowDocumentsMenu(false)}
                onSelectDocuments={handleAddDocuments}
              />
            )}
          </div>
        </div>
      </div>

      {/* Fixed Bottom Navigation */}
      <div className="shrink-0 border-t border-border px-10 py-4 bg-background">
        <div className="flex items-center justify-between gap-4">
          {/* Previous Button */}
          <button
            onClick={handleNavigatePrevious}
            disabled={!previousQuestionId}
            className={`border border-border px-6 py-2.5 h-10 rounded-[var(--radius-button)] label-medium transition-colors ${
              previousQuestionId
                ? 'text-foreground hover:bg-muted'
                : 'text-muted-foreground cursor-not-allowed opacity-50'
            }`}
          >
            Forrige spørsmål
          </button>

          {/* Question Counter */}
          <span className="body-medium text-muted-foreground">
            Spørsmål {questionId}
          </span>

          {/* Next Button */}
          <button
            onClick={handleNavigateNext}
            disabled={!nextQuestionId}
            className={`px-6 py-2.5 h-10 rounded-[var(--radius-button)] label-medium transition-colors ${
              nextQuestionId
                ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                : 'bg-muted text-muted-foreground cursor-not-allowed opacity-50'
            }`}
          >
            Neste spørsmål
          </button>
        </div>
      </div>
    </div>
  );
}
