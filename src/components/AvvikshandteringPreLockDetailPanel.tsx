import { useState } from 'react';
import { DeviationView } from './DeviationView';
import { KravVeilederSection } from './KravVeilederSection';
import { AttachedDocumentCard } from './AttachedDocumentCard';

interface QuestionInfo {
  id: string;
  title: string;
  kravVeileder?: string;
  answerText?: string;
}

interface QuestionAnswer {
  id: string;
  answer: 'Nei';
  questionText: string;
  categoryId: string;
  groupId: string;
  severity?: string;
}

interface QuestionData {
  answer?: string;
  improvementText?: string;
  improvementImages?: string[];
  positiveText?: string;
  positiveImages?: string[];
  notatText?: string;
  deviations?: any[];
  attachedDocuments?: string[];
}

interface AvvikshandteringPreLockDetailPanelProps {
  selectedQuestionId: string;
  selectedQuestionInfo: QuestionInfo;
  selectedQuestion: QuestionAnswer;
  selectedQuestionData: QuestionData;
  onUpdateQuestionData?: (questionId: string, data: Partial<QuestionData>) => void;
  onAnswerChange?: (questionId: string, answer: 'ja' | 'nei' | 'ikke-relevant') => void;
  onClose?: () => void;
}

export function AvvikshandteringPreLockDetailPanel({
  selectedQuestionId,
  selectedQuestionInfo,
  selectedQuestion,
  selectedQuestionData,
  onUpdateQuestionData,
  onAnswerChange,
  onClose
}: AvvikshandteringPreLockDetailPanelProps) {
  const [activeTab, setActiveTab] = useState<'avvik' | 'egenvurderinger' | 'notat'>('avvik');

  const handleDeviationUpdate = (data: any) => {
    if (onUpdateQuestionData) {
      onUpdateQuestionData(selectedQuestionId, {
        deviations: data ? [data] : []
      });
    }
  };

  const handleRemoveDocument = (index: number) => {
    if (selectedQuestionData.attachedDocuments && onUpdateQuestionData) {
      const newDocuments = selectedQuestionData.attachedDocuments.filter((_, i) => i !== index);
      onUpdateQuestionData(selectedQuestionId, { attachedDocuments: newDocuments });
    }
  };

  const handleAnswerClick = (option: 'Ja' | 'Nei' | 'Ikke relevant') => {
    if (onAnswerChange) {
      const answerType = option === 'Ja' ? 'ja' : option === 'Nei' ? 'nei' : 'ikke-relevant';
      onAnswerChange(selectedQuestionId, answerType);
    }
  };

  // Get current answer from questionData
  const currentAnswer = selectedQuestionData.answer === 'ja' ? 'Ja' : 
                        selectedQuestionData.answer === 'nei' ? 'Nei' : 
                        selectedQuestionData.answer === 'ikke-relevant' ? 'Ikke relevant' : 'Nei';

  return (
    <div className="flex flex-col h-full w-full bg-background overflow-y-auto">
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

      {/* Answer Options - Now clickable to change answer */}
      <div className="px-6 py-4 border-b border-border">
        <h4 className="label-medium text-foreground mb-3">Velg svar</h4>
        <div className="space-y-2">
          {(['Ja', 'Nei', 'Ikke relevant'] as const).map((option) => (
            <button
              key={option}
              onClick={() => handleAnswerClick(option)}
              className="w-full flex items-center gap-3 px-3 py-2 rounded-[var(--radius)] transition-colors hover:bg-muted"
            >
              <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${
                option === currentAnswer
                  ? 'border-primary bg-primary'
                  : 'border-foreground'
              }`}>
                {option === currentAnswer && (
                  <div className="w-2.5 h-2.5 rounded-full bg-white" />
                )}
              </div>
              <span className={`body-medium ${
                option === currentAnswer ? 'text-primary' : 'text-foreground'
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
          <button
            onClick={() => setActiveTab('avvik')}
            className="px-3 py-3 label-medium relative transition-colors"
            style={{
              color: activeTab === 'avvik' ? '#1a1c16' : '#44483b'
            }}
          >
            Avvik
            {activeTab === 'avvik' && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
            )}
          </button>
          <button
            onClick={() => setActiveTab('egenvurderinger')}
            className="px-3 py-3 label-medium relative transition-colors"
            style={{
              color: activeTab === 'egenvurderinger' ? '#1a1c16' : '#44483b'
            }}
          >
            Egenrevisjonssvar
            {activeTab === 'egenvurderinger' && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
            )}
          </button>
          <button
            onClick={() => setActiveTab('notat')}
            className="px-3 py-3 label-medium relative transition-colors"
            style={{
              color: activeTab === 'notat' ? '#1a1c16' : '#44483b'
            }}
          >
            Notat
            {activeTab === 'notat' && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
            )}
          </button>
        </div>
      </div>

      {/* Tab Content */}
      <div className="px-6 py-4">
        {activeTab === 'avvik' && (
          <div className="max-w-full">
            <DeviationView
              deviationData={selectedQuestionData.deviations?.[0]}
              onUpdate={handleDeviationUpdate}
              showTrengerUtfylling={false}
            />
          </div>
        )}

        {activeTab === 'egenvurderinger' && (
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <p className="label-small text-muted-foreground m-0">Svarvalg</p>
              <p className="body-medium text-foreground m-0">Nei</p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="label-small text-muted-foreground m-0">Svartekst</p>
              <p className="body-medium text-foreground m-0">
                {selectedQuestionInfo.answerText || 'Ingen svartekst tilgjengelig'}
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
          </div>
        )}

        {activeTab === 'notat' && (
          <div className="max-w-full">
            <div className="flex flex-col gap-2">
              <p className="body-medium text-foreground m-0">
                {selectedQuestionData.notatText || 'Ingen notat lagt til'}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}