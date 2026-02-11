import svgPaths from "./svg-1q9ydsa8k6";

function ClosingAvvikIcon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Closing Avvik Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="info">
          <path d={svgPaths.p2668ba00} fill="var(--fill-0, #705400)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function TypeOfClosing() {
  return (
    <div className="content-stretch flex gap-[8px] items-center py-[8px] relative shrink-0" data-name="Type of closing">
      <ClosingAvvikIcon />
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] tracking-[0.15px] whitespace-nowrap">
        <p className="leading-[24px]">Foretaket har bedt om fristforlengelse</p>
      </div>
    </div>
  );
}

function ClosingAvvikContent() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Closing Avvik Content">
      <TypeOfClosing />
    </div>
  );
}

export default function Postpone() {
  return (
    <div className="bg-[#fdeeb1] relative rounded-[12px] size-full" data-name="postpone">
      <div className="content-stretch flex flex-col items-start overflow-clip p-[24px] relative rounded-[inherit] size-full">
        <ClosingAvvikContent />
      </div>
      <div aria-hidden="true" className="absolute border border-[#705400] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}