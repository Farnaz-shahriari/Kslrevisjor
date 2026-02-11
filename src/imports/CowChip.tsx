import svgPaths from "./svg-nzpuwvh5nv";

function LeadingIcon() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Leading icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Leading icon">
          <path d={svgPaths.p1671bb00} fill="var(--fill-0, #4A671E)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function StateLayer() {
  return (
    <div className="content-stretch flex gap-[8px] h-[32px] items-center justify-center pl-[8px] pr-[16px] py-[6px] relative shrink-0" data-name="state-layer">
      <LeadingIcon />
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#44483b] text-[14px] text-center tracking-[0.1px] whitespace-nowrap">
        <p className="leading-[20px]">DVP storfe</p>
      </div>
    </div>
  );
}

export default function CowChip() {
  return (
    <div className="relative rounded-[8px] size-full" data-name="Cow chip">
      <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[inherit] size-full">
        <StateLayer />
      </div>
      <div aria-hidden="true" className="absolute border border-[#c4c8b7] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}