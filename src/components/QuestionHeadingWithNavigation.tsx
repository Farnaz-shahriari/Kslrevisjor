import svgPaths from "../imports/svg-f1g8ccuivl";
import { Button } from "./ui/button";

interface QuestionHeadingWithNavigationProps {
  questionNumber: string;
  hasAnswer: boolean;
  onPrevious?: () => void;
  onNext?: () => void;
  hasPrevious?: boolean;
  hasNext?: boolean;
  onStartFilling?: () => void; // Callback for "Start utfylling" button on last question
}

export function QuestionHeadingWithNavigation({
  questionNumber,
  hasAnswer,
  onPrevious,
  onNext,
  hasPrevious = true,
  hasNext = true,
  onStartFilling,
}: QuestionHeadingWithNavigationProps) {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start w-full min-[540px]:flex-row min-[540px]:gap-[8px]">
      {/* Navigation buttons - appears first on mobile, last on larger screens */}
      <div className="content-stretch flex gap-[16px] items-center justify-start w-full min-[540px]:basis-0 min-[540px]:grow min-[540px]:justify-end min-[540px]:order-2 min-[540px]:min-h-px min-[540px]:min-w-px">
        {/* Previous Button */}
        {hasPrevious && (
          <Button
            variant="tertiary"
            onClick={onPrevious}
            disabled={!onPrevious}
            className="h-14"
          >
            Forrige spørsmål
          </Button>
        )}

        {/* Next Button - Dynamic styling based on answer */}
        {hasNext ? (
          <Button
            variant={hasAnswer ? "primary" : "tertiary"}
            onClick={onNext}
            disabled={!onNext}
            className="h-14"
          >
            Neste spørsmål
          </Button>
        ) : (
          /* Start utfylling button - shown on last question */
          onStartFilling && (
            <Button
              variant={hasAnswer ? "primary" : "tertiary"}
              onClick={onStartFilling}
              className="h-14"
            >
              Start utfylling
            </Button>
          )
        )}
      </div>

      {/* Question number with speaker icon - appears second on mobile, first on larger screens */}
      <div className="content-stretch flex gap-[8px] items-center shrink-0 min-[540px]:order-1">
        <div className="title-large text-foreground text-nowrap">
          {questionNumber}
        </div>
        <div className="content-stretch flex flex-col gap-[10px] items-center justify-center shrink-0 size-[48px]">
          <div className="content-stretch flex gap-[10px] items-center justify-center overflow-clip rounded-[100px] shrink-0">
            <div className="box-border content-stretch flex gap-[10px] items-center justify-center p-[8px] shrink-0">
              <div className="relative shrink-0 size-[24px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                  <path d={svgPaths.p1858ec00} fill="var(--foreground)" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}