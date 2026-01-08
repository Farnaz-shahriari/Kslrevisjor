import { useState, useEffect } from 'react';
import { ChevronLeft } from 'lucide-react';
import { LeftSidebar } from './LeftSidebar';
import { QuestionView } from './QuestionView';
import { RightSidebar } from './RightSidebar';

export interface QuestionData {
  answer?: 'ja' | 'nei' | 'ikke-relevant';
  improvementText?: string;
  improvementImages?: string[];
  positiveText?: string;
  positiveImages?: string[];
  notatText?: string;
  deviationData?: any;
  deviations?: any[];
  attachedDocuments?: string[];
}

interface RegisterRevisjonPageProps {
  currentQuestionId: string;
  onQuestionSelect: (questionId: string) => void;
  questionData: Record<string, QuestionData>;
  onAnswer: (questionId: string, answer: 'ja' | 'nei' | 'ikke-relevant') => void;
  onUpdateData: (questionId: string, data: Partial<QuestionData>) => void;
  answeredQuestions: Set<string>;
  questionsWithDeviations: Set<string>;
  manuallyAddedQuestions: Set<string>;
  manuallyRemovedQuestions: Set<string>;
  onNavigateToDocument?: (documentIndex: number) => void;
  deviationsLocked?: boolean;
}

/**
 * RegisterRevisjonPage Component
 * 
 * Implements the responsive navigation pattern for Register Revisjon:
 * - Mobile/Tablet (<900px): Shows question list first, then navigates to question detail with back button
 * - Desktop (≥900px): Shows list and detail side-by-side, with optional right sidebar at ≥1600px
 */
export function RegisterRevisjonPage({
  currentQuestionId,
  onQuestionSelect,
  questionData,
  onAnswer,
  onUpdateData,
  answeredQuestions,
  questionsWithDeviations,
  manuallyAddedQuestions,
  manuallyRemovedQuestions,
  onNavigateToDocument,
  deviationsLocked
}: RegisterRevisjonPageProps) {
  const [showingMenu, setShowingMenu] = useState(true);

  // Auto-select first question on desktop if none selected
  useEffect(() => {
    const isDesktop = window.innerWidth >= 900;
    if (isDesktop && !currentQuestionId) {
      onQuestionSelect('1.1.1');
    }
  }, [currentQuestionId, onQuestionSelect]);

  const handleQuestionSelect = (questionId: string) => {
    onQuestionSelect(questionId);
    // Navigate to detail view on mobile/tablet
    setShowingMenu(false);
  };

  const handleBackToMenu = () => {
    setShowingMenu(true);
  };

  return (
    <div className="flex h-full w-full overflow-hidden">
      {/* MOBILE/TABLET: Menu Panel - Shows ONLY when showingMenu is true */}
      {showingMenu && (
        <div className="min-[900px]:hidden w-full h-full bg-background flex flex-col overflow-hidden">
          <LeftSidebar
            currentQuestionId={currentQuestionId}
            onQuestionSelect={handleQuestionSelect}
            answeredQuestions={answeredQuestions}
            questionsWithDeviations={questionsWithDeviations}
            manuallyAddedQuestions={manuallyAddedQuestions}
            manuallyRemovedQuestions={manuallyRemovedQuestions}
          />
        </div>
      )}

      {/* DESKTOP: Menu Panel - Always visible */}
      <div className="max-[900px]:hidden h-full flex flex-col overflow-hidden">
        <LeftSidebar
          currentQuestionId={currentQuestionId}
          onQuestionSelect={onQuestionSelect}
          answeredQuestions={answeredQuestions}
          questionsWithDeviations={questionsWithDeviations}
          manuallyAddedQuestions={manuallyAddedQuestions}
          manuallyRemovedQuestions={manuallyRemovedQuestions}
        />
      </div>

      {/* Vertical Divider - Desktop only */}
      <div className="w-px h-full bg-[var(--border)] max-[900px]:hidden" />

      {/* MOBILE/TABLET & DESKTOP: Detail Panel */}
      <div className={`flex-1 h-full flex flex-col ${showingMenu ? 'max-[900px]:hidden' : 'max-[900px]:flex'} min-[900px]:flex max-[900px]:w-full`}>
        {/* Back button for mobile/tablet - positioned in QuestionView header */}
        <QuestionView
          questionId={currentQuestionId}
          questionData={questionData[currentQuestionId] || {}}
          onAnswer={onAnswer}
          onUpdateData={onUpdateData}
          onNavigate={onQuestionSelect}
          onNavigateToDocument={onNavigateToDocument}
          deviationsLocked={deviationsLocked}
          showBackButton={!showingMenu}
          onBackToMenu={handleBackToMenu}
        />
      </div>

      {/* RightSidebar - Only show on wide desktop (≥1600px) */}
      <div className="max-[1600px]:hidden block">
        <RightSidebar questionId={currentQuestionId} />
      </div>
    </div>
  );
}