import svgPaths from "./svg-59lykn648d";

function TrailingIcon() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Trailing icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Trailing icon">
          <path d={svgPaths.p1e934100} fill="var(--fill-0, #44483B)" id="icon" />
        </g>
      </svg>
    </div>
  );
}

function StateLayer() {
  return (
    <div className="content-stretch flex gap-[8px] h-[32px] items-center justify-center pl-[16px] pr-[8px] py-[6px] relative shrink-0" data-name="state-layer">
      <div className="css-g0mm18 flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#44483b] text-[14px] text-center tracking-[0.1px]">
        <p className="css-ew64yg leading-[20px]">Akseptfrist</p>
      </div>
      <TrailingIcon />
    </div>
  );
}

function FilterChip() {
  return (
    <div className="h-[32px] relative rounded-[8px] shrink-0" data-name="Filter chip">
      <div className="content-stretch flex h-full items-center justify-center overflow-clip relative rounded-[inherit]">
        <StateLayer />
      </div>
      <div aria-hidden="true" className="absolute border border-[#c4c8b7] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[16px] items-center min-h-px min-w-px relative" data-name="Container">
      <div className="css-g0mm18 flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[14px] tracking-[0.1px]">
        <p className="css-ew64yg leading-[20px]">Sortering:</p>
      </div>
      <FilterChip />
    </div>
  );
}

function StateLayer1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center px-[24px] py-[16px] relative shrink-0" data-name="State-layer">
      <div className="css-g0mm18 flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#44483b] text-[16px] tracking-[0.15px]">
        <p className="css-ew64yg leading-[24px]">Aksepter alle oppdrag</p>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="relative rounded-[100px] shrink-0" data-name="Content">
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[inherit]">
        <StateLayer1 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#c4c8b7] border-solid inset-0 pointer-events-none rounded-[100px]" />
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Button">
      <Content />
    </div>
  );
}

export default function Container1() {
  return (
    <div className="content-stretch flex gap-[16px] items-center py-[8px] relative size-full" data-name="Container">
      <Container />
      <Button />
    </div>
  );
}