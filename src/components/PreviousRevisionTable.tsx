import { useState } from 'react';
import { ChevronDown, Search } from 'lucide-react';
import svgPaths from '../imports/svg-4o5ww5kgwr';

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
  return (
    <div className="flex-1 overflow-auto border-r border-[var(--border)] relative bg-background">
      <table className="w-full">
        <thead className="bg-background sticky top-0 z-10">
          <tr className="border-b border-[var(--border)]">
            <th className="px-4 py-2 text-left">
              <div className="flex items-center gap-2">
                <Search className="w-6 h-6 text-foreground" />
                <span className="label-medium text-foreground">Sjekklistespørsmål</span>
              </div>
            </th>
            <th className="w-32 px-4 py-2 text-left">
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
  );
}
