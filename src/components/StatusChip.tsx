import svgPaths from "../imports/svg-cne2b5etox";

interface StatusChipProps {
  isComplete: boolean;
}

export function StatusChip({ isComplete }: StatusChipProps) {
  if (isComplete) {
    // Outline chip - "Fullført"
    return (
      <div className="cursor-pointer relative rounded-[8px] shrink-0">
        <div className="flex items-center overflow-clip relative rounded-[inherit]">
          <div className="box-border flex gap-2 h-8 items-center justify-center pl-2 pr-4 py-1.5">
            <div className="relative shrink-0 w-[18px] h-[18px]">
              <div className="absolute inset-0 overflow-clip">
                <div className="absolute inset-[8.333%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
                    <path d={svgPaths.p34e9dc00} fill="#4A671E" />
                  </svg>
                </div>
              </div>
            </div>
            <span className="label-medium text-foreground whitespace-nowrap">
              Fullført
            </span>
          </div>
        </div>
        <div aria-hidden="true" className="absolute border border-[#c4c8b7] border-solid inset-0 pointer-events-none rounded-[8px]" />
      </div>
    );
  }

  // Elevated chip - "Trenger utfylling"
  return (
    <div className="bg-[#f4f4ea] box-border flex items-center justify-center overflow-clip relative rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.3),0px_1px_3px_1px_rgba(0,0,0,0.15)] shrink-0">
      <div className="box-border flex gap-2 h-8 items-center justify-center pl-2 pr-4 py-1.5">
        <div className="relative shrink-0 w-[18px] h-[18px]">
          <div className="absolute inset-[8.333%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
              <path d={svgPaths.p1c3b4f80} fill="#BA1A1A" />
            </svg>
          </div>
        </div>
        <span className="label-medium text-foreground whitespace-nowrap">
          Trenger utfylling
        </span>
      </div>
    </div>
  );
}
