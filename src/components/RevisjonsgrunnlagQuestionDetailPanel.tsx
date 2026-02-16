import React, { useState } from 'react';
import { X, Plus, Minus } from 'lucide-react';
import { Button } from './ui/button';
import { getQuestionById } from '../data/questions';
import { KravVeilederSection } from './KravVeilederSection';

interface QuestionDetailData {
  id: string;
  text: string;
  isGroup: boolean;
  previousDeviation: string | null;
  companyAnswer: string | null;
  partOfBasis: string | null;
}

interface RevisjonsgrunnlagQuestionDetailPanelProps {
  question: QuestionDetailData;
  onClose: () => void;
  isAddedToRevision: boolean;
  onToggleAddToRevision: () => void;
}

type TabType = 'egenvurderinger' | 'notat';

export function RevisjonsgrunnlagQuestionDetailPanel({ 
  question, 
  onClose,
  isAddedToRevision,
  onToggleAddToRevision
}: RevisjonsgrunnlagQuestionDetailPanelProps) {
  const [activeTab, setActiveTab] = useState<TabType>('egenvurderinger');

  // Get question details from questionsData
  const questionInfo = getQuestionById(question.id);

  return (
    <div className="h-full flex flex-col bg-background overflow-hidden">
      {/* Header */}
      <div className="border-b border-border px-6 py-4">
        <div className="flex items-start justify-between gap-4 mb-3">
          <h3 className="body-large text-foreground flex-1">
            {question.text}
          </h3>
          
          {/* Close button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            aria-label="Lukk"
          >
            <X className="w-6 h-6" />
          </Button>
        </div>

        {/* Krav & Veileder Section */}
        {questionInfo && (
          <div className="overflow-hidden">
            <KravVeilederSection question={questionInfo} />
          </div>
        )}
      </div>

      {/* Add/Remove Button Section */}
      <div className="px-6 py-4 border-b border-border">
        <Button 
          variant="secondary" 
          onClick={onToggleAddToRevision}
        >
          {isAddedToRevision ? (
            <>
              <Minus className="w-5 h-5" />
              Fjern fra revisjon
            </>
          ) : (
            <>
              <Plus className="w-5 h-5" />
              Legg til i revisjon
            </>
          )}
        </Button>
      </div>

      {/* Tabs */}
      <div className="border-b border-border">
        <div className="flex items-center px-4">
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
      <div className="flex-1 overflow-y-auto">
        <div className="px-6 py-4">
          {activeTab === 'egenvurderinger' && (
            <div className="flex flex-col gap-4 w-full">
              <div className="flex flex-col gap-2 w-full">
                <p className="label-small text-muted-foreground m-0">Svarvalg</p>
                <p className="body-medium text-foreground m-0">
                  {question.companyAnswer || 'Ikke besvart'}
                </p>
              </div>
              
              {question.companyAnswer && question.companyAnswer.includes('(Fil)') && (
                <div className="flex flex-col gap-2 w-full">
                  <p className="label-small text-muted-foreground m-0">Vedlagte filer</p>
                  <div className="bg-muted rounded-lg p-3 w-full">
                    <p className="body-medium text-foreground m-0">dokumentasjon.pdf</p>
                  </div>
                </div>
              )}

              {question.companyAnswer && question.companyAnswer.includes('egen avvik') && (
                <div className="flex flex-col gap-2 w-full">
                  <p className="label-small text-muted-foreground m-0">Svartekst</p>
                  <p className="body-medium text-foreground m-0">
                    Foretaket har registrert et eget avvik for dette spørsmålet.
                  </p>
                </div>
              )}

              {!question.companyAnswer && (
                <p className="body-medium text-muted-foreground m-0">
                  Foretaket har ikke svart på dette spørsmålet ennå.
                </p>
              )}
            </div>
          )}

          {activeTab === 'notat' && (
            <div className="flex flex-col gap-4 w-full">
              <p className="body-medium text-muted-foreground m-0">
                Ingen notat registrert for dette spørsmålet.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}