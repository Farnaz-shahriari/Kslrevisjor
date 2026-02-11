import { useState } from 'react';
import svgPaths from '../imports/svg-8axi0x1eud';
import { DeviationView } from './DeviationView';
import { X } from 'lucide-react';

interface QuestionInfo {
  id: string;
  title: string;
  kravVeileder?: string;
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
  onClose?: () => void;
}

export function AvvikshandteringPreLockDetailPanel({
  selectedQuestionId,
  selectedQuestionInfo,
  selectedQuestion,
  selectedQuestionData,
  onUpdateQuestionData,
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

  return (
    <div className="flex flex-col h-full w-full bg-background">
      {/* Header with Close Button */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-[var(--border)] bg-background sticky top-0 z-10">
        <h3 className="title-large text-foreground">Avvikdetaljer</h3>
        {onClose && (
          <button
            onClick={onClose}
            className="w-10 h-10 flex items-center justify-center hover:bg-muted rounded-full transition-colors"
            aria-label="Lukk"
          >
            <X className="w-6 h-6 text-foreground" />
          </button>
        )}
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto px-6 py-4">
        {/* Question Header */}
        <div className="flex gap-2 items-center justify-between mb-2">
          <h3 className="title-large">
            {selectedQuestionInfo.id}
          </h3>
        </div>

        {/* Question Text */}
        <h4 className="title-large mb-4">
          {selectedQuestion.questionText}
        </h4>

        {/* Krav Veileder Section */}
        {selectedQuestionInfo && (
          <div className="bg-[var(--surface-container-low)] border border-[var(--border)] rounded-[var(--radius-lg)] p-4 mb-6">
            <div className="flex items-center gap-2 mb-2">
              <svg className="w-5 h-5 shrink-0" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                <path d={svgPaths.p2668ba00} fill="#44483B" />
              </svg>
              <p className="label-medium text-foreground">
                Krav veileder
              </p>
            </div>
            <p className="body-medium text-muted-foreground">
              {selectedQuestionInfo.kravVeileder || 'Se krav i veileder for mer informasjon om dette spørsmålet.'}
            </p>
          </div>
        )}

        {/* Tabs */}
        <div className="flex gap-2 mb-6 border-b border-[var(--border)]">
          <button
            onClick={() => setActiveTab('avvik')}
            className={`px-4 py-3 label-medium transition-colors relative ${
              activeTab === 'avvik'
                ? 'text-primary'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            Avvik
            {activeTab === 'avvik' && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
            )}
          </button>
          <button
            onClick={() => setActiveTab('egenvurderinger')}
            className={`px-4 py-3 label-medium transition-colors relative ${
              activeTab === 'egenvurderinger'
                ? 'text-primary'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            Egenrevisjonssvar
            {activeTab === 'egenvurderinger' && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
            )}
          </button>
          <button
            onClick={() => setActiveTab('notat')}
            className={`px-4 py-3 label-medium transition-colors relative ${
              activeTab === 'notat'
                ? 'text-primary'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            Notat
            {activeTab === 'notat' && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
            )}
          </button>
        </div>

        {/* Tab Content */}
        {activeTab === 'avvik' && (
          <div className="space-y-4">
            <DeviationView
              deviationData={selectedQuestionData.deviations?.[0]}
              onUpdate={handleDeviationUpdate}
              showTrengerUtfylling={false}
            />
          </div>
        )}

        {activeTab === 'egenvurderinger' && (
          <div className="space-y-4">
            <div className="bg-[var(--surface-container-low)] border border-[var(--border)] rounded-[var(--radius-lg)] p-4">
              <p className="body-medium text-muted-foreground">
                Ingen egenrevisjonssvar tilgjengelig
              </p>
            </div>
          </div>
        )}

        {activeTab === 'notat' && (
          <div className="space-y-4">
            <div className="bg-[var(--surface-container-low)] border border-[var(--border)] rounded-[var(--radius-lg)] p-4">
              <p className="body-medium text-muted-foreground">
                {selectedQuestionData.notatText || 'Ingen notat lagt til'}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
