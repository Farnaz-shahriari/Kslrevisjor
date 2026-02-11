import svgPaths from "./svg-zb3udgb252";

function Group() {
  return (
    <div className="absolute inset-[14.58%_8.33%]" data-name="Group">
      <div className="absolute inset-[-5.88%_-5%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.4988 14.2494">
          <g id="Group">
            <path d={svgPaths.padb40c0} id="Vector" stroke="var(--stroke-0, #4A671E)" strokeLinejoin="round" strokeWidth="1.5" />
            <path d={svgPaths.p26aa9700} id="Vector_2" stroke="var(--stroke-0, #4A671E)" strokeWidth="1.5" />
            <path d={svgPaths.p1f961900} fill="var(--fill-0, #4A671E)" id="Vector_3" />
            <path d={svgPaths.p2b4e6700} fill="var(--fill-0, #4A671E)" id="Vector_4" />
            <path d={svgPaths.p6b61b00} fill="var(--fill-0, #4A671E)" id="Vector_5" />
            <path d={svgPaths.p29b3f00} fill="var(--fill-0, #4A671E)" id="Vector_6" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function LeadingIcon() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Leading icon">
      <Group />
    </div>
  );
}

function StateLayer() {
  return (
    <div className="content-stretch flex gap-[8px] h-[32px] items-center justify-center pl-[8px] pr-[16px] py-[6px] relative shrink-0" data-name="state-layer">
      <LeadingIcon />
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#44483b] text-[14px] text-center tracking-[0.1px] whitespace-nowrap">
        <p className="leading-[20px]">Helsegris</p>
      </div>
    </div>
  );
}

export default function PigChip() {
  return (
    <div className="relative rounded-[8px] size-full" data-name="Pig chip">
      <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[inherit] size-full">
        <StateLayer />
      </div>
      <div aria-hidden="true" className="absolute border border-[#c4c8b7] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}