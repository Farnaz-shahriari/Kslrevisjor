import svgPaths from "./svg-3vzdmte995";

function StateLayer() {
  return (
    <div className="content-stretch flex items-center justify-center px-[12px] py-[6px] relative shrink-0" data-name="state-layer">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[16px] text-center text-white tracking-[0.5px] whitespace-nowrap">
        <p className="leading-[24px]">Nyt Norge</p>
      </div>
    </div>
  );
}

function InputChip() {
  return (
    <div className="bg-[#00319e] content-stretch flex h-[32px] items-center justify-center overflow-clip relative rounded-[8px] shrink-0" data-name="Input chip">
      <StateLayer />
    </div>
  );
}

function Info() {
  return (
    <div className="absolute inset-[0_-33.33%_-33.33%_0]" data-name="info">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="info">
          <path d={svgPaths.p2668ba00} fill="var(--fill-0, #BA1A1A)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon">
      <Info />
    </div>
  );
}

function StateLayer1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center pl-[8px] pr-[12px] py-[6px] relative shrink-0" data-name="state-layer">
      <Icon />
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#44483b] text-[14px] text-center tracking-[0.1px] whitespace-nowrap">
        <p className="leading-[20px]">Rapport ikke låst</p>
      </div>
    </div>
  );
}

function InputChip1() {
  return (
    <div className="h-[32px] relative rounded-[8px] shrink-0" data-name="Input chip">
      <div className="content-stretch flex h-full items-center justify-center overflow-clip relative rounded-[inherit]">
        <StateLayer1 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#c4c8b7] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Container">
      <InputChip />
      <InputChip1 />
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center leading-[0] min-h-px min-w-px overflow-clip relative tracking-[0.5px]" data-name="Content">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[#44483b] text-[12px] w-full">
        <p className="leading-[16px] whitespace-pre-wrap">4. mars 2025</p>
      </div>
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#1a1c16] text-[16px] w-full">
        <p className="leading-[24px] whitespace-pre-wrap">Bjørkli Økologiske</p>
      </div>
    </div>
  );
}

function StateLayer2() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[16px] relative size-full">
          <Content />
        </div>
      </div>
    </div>
  );
}

function ListItemListItem4Density() {
  return (
    <div className="content-stretch flex flex-col h-[56px] items-center justify-center min-h-[56px] relative shrink-0 w-full" data-name="List item/List Item: -4 Density">
      <StateLayer2 />
    </div>
  );
}

export default function Audits() {
  return (
    <div className="content-stretch flex flex-col items-start p-[8px] relative rounded-[12px] size-full" data-name="Audits">
      <div aria-hidden="true" className="absolute border border-[#c4c8b7] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Container />
      <ListItemListItem4Density />
    </div>
  );
}