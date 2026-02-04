import svgPaths from "./svg-asusthkamm";

function SelectedIcon() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Selected icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Selected icon">
          <path d={svgPaths.p35211d80} fill="var(--fill-0, #174295)" id="icon" />
        </g>
      </svg>
    </div>
  );
}

function StateLayer() {
  return (
    <div className="content-stretch flex gap-[8px] h-[32px] items-center justify-center pl-[8px] pr-[16px] py-[6px] relative shrink-0" data-name="state-layer">
      <SelectedIcon />
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#174295] text-[14px] text-center tracking-[0.1px] whitespace-nowrap">
        <p className="leading-[20px]">Rapport låst</p>
      </div>
    </div>
  );
}

export default function FilterChip() {
  return (
    <div className="bg-[#dae2ff] content-stretch flex items-center justify-center overflow-clip relative rounded-[8px] size-full" data-name="Filter chip">
      <StateLayer />
    </div>
  );
}