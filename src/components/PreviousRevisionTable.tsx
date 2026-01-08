import { useState } from 'react';
import { ChevronDown, Search } from 'lucide-react';
import { BottomSheet } from './ui/bottom-sheet';
import { PreviousRevisionQuestionDetail } from './PreviousRevisionQuestionDetail';

type AnswerType = 'ja' | 'nei';

interface PreviousRevisionQuestion {
  id: string;
  questionNumber: string;
  questionText: string;
  answer: AnswerType;
  date?: string;
  notes?: string;
  revisionType: string;
}

interface PreviousRevisionTableProps {
  questions: PreviousRevisionQuestion[];
  selectedQuestionId: string | null;
  onSelectQuestion: (id: string) => void;
}

export function PreviousRevisionTable({ questions, selectedQuestionId, onSelectQuestion }: PreviousRevisionTableProps) {
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);

  const selectedQuestion = questions.find(q => q.id === selectedQuestionId);

  const handleQuestionSelect = (id: string) => {
    onSelectQuestion(id);
    // Open bottom sheet on mobile/tablet
    setIsBottomSheetOpen(true);
  };

  const handleCloseBottomSheet = () => {
    setIsBottomSheetOpen(false);
  };

  return (
    <>
      {/* MOBILE/TABLET: Table - Always visible, full width */}
      <div className="min-[1400px]:hidden w-full h-full bg-background flex flex-col overflow-hidden">
        <div className="flex-1 overflow-auto relative bg-background">
          <table className="w-full">
            <thead className="bg-surface-container-low sticky top-0 z-10">
              <tr className="border-b border-[var(--border)]">
                <th className="px-6 py-2 text-left bg-surface-container-low">
                  <div className="flex items-center gap-2">
                    <Search className="w-6 h-6 text-foreground" />
                    <span className="label-medium text-foreground">Sjekklistespørsmål</span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {questions.map((question) => (
                <tr
                  key={question.id}
                  onClick={() => handleQuestionSelect(question.id)}
                  className="cursor-pointer border-b border-[var(--border)] transition-colors hover:bg-muted"
                >
                  <td className="px-6 py-4">
                    <div className="flex flex-col gap-2">
                      <span className="body-medium text-foreground">
                        {question.questionNumber} {question.questionText}
                      </span>
                      <div className="inline-flex items-center px-3 py-1.5 rounded-lg bg-[#ffdad6] cursor-default w-fit">
                        <span className="label-medium text-[#410002]">
                          Åpent
                        </span>
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* DESKTOP: Table - Always visible */}
      <div className="max-[1400px]:hidden flex-1 overflow-auto border-r border-[var(--border)] relative bg-background">
        <table className="w-full">
          <thead className="bg-surface-container-low sticky top-0 z-10">
            <tr className="border-b border-[var(--border)]">
              <th className="px-4 py-2 text-left bg-surface-container-low">
                <div className="flex items-center gap-2">
                  <Search className="w-6 h-6 text-foreground" />
                  <span className="label-medium text-foreground">Sjekklistespørsmål</span>
                </div>
              </th>
              <th className="w-32 px-4 py-2 text-left bg-surface-container-low">
                <span className="label-medium text-foreground">Status</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {questions.map((question) => (
              <tr
                key={question.id}
                onClick={() => onSelectQuestion(question.id)}
                className={`cursor-pointer border-b border-[var(--border)] transition-colors ${
                  selectedQuestionId === question.id
                    ? 'bg-accent'
                    : 'hover:bg-muted'
                }`}
              >
                <td className="px-4 py-4">
                  <span className={`body-medium ${
                    selectedQuestionId === question.id
                      ? 'text-accent-foreground'
                      : 'text-foreground'
                  }`}>
                    {question.questionNumber} {question.questionText}
                  </span>
                </td>
                <td className="px-4 py-4">
                  <div className="inline-flex items-center px-3 py-1.5 rounded-lg bg-[#ffdad6] cursor-default">
                    <span className="label-medium text-[#410002]">
                      Åpent
                    </span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* MOBILE/TABLET: Bottom Sheet */}
      {selectedQuestion && (
        <BottomSheet
          isOpen={isBottomSheetOpen}
          onClose={handleCloseBottomSheet}
          title="Spørsmålsdetaljer"
          maxHeight={90}
        >
          <PreviousRevisionQuestionDetail
            questionNumber={selectedQuestion.questionNumber}
            questionText={selectedQuestion.questionText}
            answer={selectedQuestion.answer}
            notes={selectedQuestion.notes}
            date={selectedQuestion.date}
            revisionType={selectedQuestion.revisionType}
          />
        </BottomSheet>
      )}
    </>
  );
}
