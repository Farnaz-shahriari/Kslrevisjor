import { useState, useEffect } from 'react';
import { KravVeiledningProducerMobile } from './KravVeiledningProducerMobile';
import { QuestionHeadingWithNavigation } from './QuestionHeadingWithNavigation';
import { getProducerQuestionById, getNextProducerQuestionId, getPreviousProducerQuestionId } from '../data/producerQuestions';
import { RadioButton } from './ui/radio-button';

type AnswerType = 'ja' | 'nei';

export interface ProducerQuestionData {
  answer?: AnswerType;
  note?: string;
}

interface ProducerQuestionViewProps {
  questionId: string;
  questionData: ProducerQuestionData;
  onAnswer?: (questionId: string, answer: AnswerType | null) => void;
  onUpdateNote?: (questionId: string, note: string) => void;
  onNavigate?: (questionId: string) => void;
}

export function ProducerQuestionView({ 
  questionId, 
  questionData, 
  onAnswer, 
  onUpdateNote,
  onNavigate
}: ProducerQuestionViewProps) {
  const questionInfo = getProducerQuestionById(questionId);
  const [selectedAnswer, setSelectedAnswer] = useState<AnswerType | null>(questionData.answer || null);
  const [noteText, setNoteText] = useState<string>(questionData.note || '');

  // Update when question changes
  useEffect(() => {
    setSelectedAnswer(questionData.answer || null);
    setNoteText(questionData.note || '');
  }, [questionId, questionData]);

  const handleAnswerSelect = (answer: AnswerType) => {
    // Toggle answer if clicking the same one
    if (selectedAnswer === answer) {
      setSelectedAnswer(null);
      if (onAnswer) {
        onAnswer(questionId, null);
      }
    } else {
      setSelectedAnswer(answer);
      if (onAnswer) {
        onAnswer(questionId, answer);
      }
    }
  };

  const handleNoteChange = (value: string) => {
    setNoteText(value);
    if (onUpdateNote) {
      onUpdateNote(questionId, value);
    }
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
      {/* Scrollable content */}
      <div className="px-10 pt-3 pb-6">
        {/* Question heading with navigation */}
        <div className="mb-2">
          <QuestionHeadingWithNavigation
            questionNumber={questionId}
            hasAnswer={!!selectedAnswer}
            onPrevious={() => {
              const prevId = getPreviousProducerQuestionId(questionId);
              if (prevId && onNavigate) {
                onNavigate(prevId);
              }
            }}
            onNext={() => {
              const nextId = getNextProducerQuestionId(questionId);
              if (nextId && onNavigate) {
                onNavigate(nextId);
              }
            }}
            hasPrevious={!!getPreviousProducerQuestionId(questionId)}
            hasNext={!!getNextProducerQuestionId(questionId)}
          />
        </div>

        {/* Question title */}
        <div className="w-full mb-2">
          <p className="title-large m-0">{questionInfo.title}</p>
        </div>

        {/* Information chips */}
        <div className="flex gap-2 items-center w-full mb-2">{questionInfo.requiresDocumentation && (
            <div className="bg-secondary-container h-8 flex items-center justify-center rounded-[8px]">
              <div className="flex gap-2 items-center justify-center pl-2 pr-3 py-1.5">
                <div className="w-[18px] h-[18px] flex items-center justify-center">
                  <svg className="w-[15px] h-3" fill="none" viewBox="0 0 20 16">
                    <path d="M18 2H10L8 0H2C0.9 0 0.00999999 0.9 0.00999999 2L0 14C0 15.1 0.9 16 2 16H18C19.1 16 20 15.1 20 14V4C20 2.9 19.1 2 18 2ZM18 14H2V2H7.17L9.17 4H18V14ZM15.5 8.12V11.5H12.5V6.5H13.88L15.5 8.12ZM11 5V13H17V7.5L14.5 5H11Z" fill="currentColor" className="text-on-secondary-container" />
                  </svg>
                </div>
                <p className="label-medium text-on-secondary-container m-0">Dokumentasjon kreves</p>
              </div>
            </div>
          )}
        </div>

        {/* Krav og Veiledning - Always visible for producers */}
        <div className="w-full mb-4">
          <KravVeiledningProducerMobile
            veilederText={questionInfo.veilederText}
            kravLinks={questionInfo.kravLinks}
          />
        </div>

        {/* Answer selection - Only Ja/Nei */}
        <div className="flex flex-col min-[768px]:flex-row items-stretch min-[768px]:items-center w-full gap-2 mb-6">
          {/* Ja */}
          <div className="flex flex-col h-10 min-h-[40px] items-center justify-center flex-1 rounded-[var(--radius)] transition-colors hover:bg-muted">
            <RadioButton
              checked={selectedAnswer === 'ja'}
              onClick={() => handleAnswerSelect('ja')}
              label="Ja"
              className="w-full px-4"
            />
          </div>

          {/* Nei */}
          <div className="flex flex-col h-10 min-h-[40px] items-center justify-center flex-1 rounded-[var(--radius)] transition-colors hover:bg-muted">
            <RadioButton
              checked={selectedAnswer === 'nei'}
              onClick={() => handleAnswerSelect('nei')}
              label="Nei"
              className="w-full px-4"
            />
          </div>
        </div>

        {/* Content Area - no separate scroll */}
        <div className="py-6 space-y-6">
          {/* Note Section */}
          <div className="space-y-3">
            <p className="label-large text-foreground m-0">Notat</p>
            <textarea
              value={noteText}
              onChange={(e) => handleNoteChange(e.target.value)}
              placeholder="Skriv dine notater her..."
              className="w-full min-h-[120px] p-3 rounded-[var(--radius)] border border-border bg-background body-medium resize-y focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
        </div>
      </div>
    </div>
  );
}