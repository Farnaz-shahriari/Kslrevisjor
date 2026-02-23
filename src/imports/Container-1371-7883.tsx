import svgPaths from "./svg-vi49t3onwi";

function Check() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%+0.1px)] size-[24.208px] top-[calc(50%+0.1px)]" data-name="Check">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.2085 24.2085">
        <g id="pending_actions">
          <path d={svgPaths.p2e8afa00} fill="var(--fill-0, #284000)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function GenericAvatar() {
  return (
    <div className="bg-[#eff1e7] relative shrink-0 size-[40px]" data-name="Generic avatar">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <path clipRule="evenodd" d={svgPaths.p1fd92980} fill="var(--fill-0, #EFF1E7)" fillRule="evenodd" id="Background" />
      </svg>
      <Check />
    </div>
  );
}

function LeadingElement() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[1000px] shrink-0" data-name="Leading element">
      <GenericAvatar />
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-h-px min-w-px overflow-clip relative" data-name="Content">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] tracking-[0.5px] w-full">
        <p className="leading-[24px] whitespace-pre-wrap">Utsatt frist er forespurt.</p>
      </div>
    </div>
  );
}

function StateLayer() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative size-full">
          <LeadingElement />
          <Content />
        </div>
      </div>
    </div>
  );
}

function ListItemListItem0Density() {
  return (
    <div className="content-stretch flex flex-col h-[56px] items-center justify-center min-h-[56px] relative shrink-0 w-full" data-name="List item/List Item: 0 Density">
      <StateLayer />
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col font-['Manrope:SemiBold',sans-serif] font-semibold h-full items-start justify-center min-h-px min-w-px overflow-clip relative text-[14px] tracking-[0.1px]" data-name="Content">
      <div className="flex flex-col justify-center leading-[0] relative shrink-0 text-[#1a1c16] w-full">
        <p className="leading-[20px] whitespace-pre-wrap">Hurdal Økogård</p>
      </div>
      <p className="h-[20px] leading-[20px] overflow-hidden relative shrink-0 text-[#44483b] text-ellipsis w-full whitespace-nowrap">Lukkefrist: Lørdag 5. april 2025</p>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="report_problem">
          <path d={svgPaths.p21d3df00} fill="var(--fill-0, #410002)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function StateLayer2() {
  return (
    <div className="content-stretch flex gap-[8px] h-[32px] items-center justify-center pl-[8px] pr-[16px] py-[6px] relative shrink-0" data-name="state-layer">
      <Icon />
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#410002] text-[14px] text-center tracking-[0.1px] whitespace-nowrap">
        <p className="leading-[20px]">Stort avvik</p>
      </div>
    </div>
  );
}

function AssistiveChip() {
  return (
    <div className="bg-[#ffdad6] relative rounded-[8px] shrink-0" data-name="Assistive chip">
      <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[inherit]">
        <StateLayer2 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#c4c8b7] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function DeviationGradingChip() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0" data-name="Deviation Grading chip">
      <AssistiveChip />
    </div>
  );
}

function TrailingElement() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Trailing element">
      <DeviationGradingChip />
    </div>
  );
}

function StateLayer1() {
  return (
    <div className="h-[56px] relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[16px] relative size-full">
          <Content1 />
          <TrailingElement />
        </div>
      </div>
    </div>
  );
}

function ListItemListItem4Density() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center min-h-[56px] relative shrink-0 w-full" data-name="List item/List Item: -4 Density">
      <StateLayer1 />
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start leading-[0] min-h-px min-w-px overflow-clip relative" data-name="Content">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[#44483b] text-[12px] tracking-[0.5px] w-full">
        <p className="leading-[16px] whitespace-pre-wrap">Sjekklistespørsmål</p>
      </div>
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center overflow-hidden relative shrink-0 text-[#1a1c16] text-[14px] text-ellipsis tracking-[0.25px] w-full whitespace-nowrap">
        <p className="leading-[20px] overflow-hidden">1.3.5 – Har du kontrollert gjødsellageret de siste 12 månedene?</p>
      </div>
    </div>
  );
}

function StateLayer3() {
  return (
    <div className="relative shrink-0 w-full" data-name="state-layer">
      <div className="content-stretch flex gap-[16px] items-start px-[16px] py-[4px] relative w-full">
        <Content2 />
      </div>
    </div>
  );
}

function ListItemListItem4Density1() {
  return (
    <div className="content-stretch flex flex-col items-center min-h-[72px] relative shrink-0 w-full" data-name="List item/List Item: -4 Density">
      <StateLayer3 />
    </div>
  );
}

export default function Container() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.3),0px_2px_6px_0px_rgba(0,0,0,0.15)] size-full" data-name="Container">
      <ListItemListItem0Density />
      <ListItemListItem4Density />
      <ListItemListItem4Density1 />
    </div>
  );
}