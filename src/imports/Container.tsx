import svgPaths from "./svg-bo40brm6yy";

function ExpandMore() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="expand_more">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="expand_more">
          <path d={svgPaths.p18b66300} fill="var(--fill-0, #44483B)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function LeadingElement() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Leading element">
      <ExpandMore />
    </div>
  );
}

function Content() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] tracking-[0.5px] w-full">
        <p className="leading-[24px]">Krav</p>
      </div>
    </div>
  );
}

function StateLayer() {
  return (
    <div className="content-stretch flex gap-[16px] h-[40px] items-center justify-center relative shrink-0 w-full" data-name="state-layer">
      <LeadingElement />
      <Content />
    </div>
  );
}

function ListItemListItem4Density() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center min-h-[40px] relative shrink-0 w-full" data-name="List item/List Item: -4 Density">
      <StateLayer />
    </div>
  );
}

function RequirementList() {
  return (
    <div className="relative shrink-0 w-full" data-name="requirement list">
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-start justify-center px-[24px] py-[8px] relative w-full">
          <ListItemListItem4Density />
        </div>
      </div>
    </div>
  );
}

function RequirementSection() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start max-h-[688px] relative shrink-0 w-full" data-name="Requirement section">
      <RequirementList />
    </div>
  );
}

function TabContents() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center justify-center min-h-px min-w-px relative shrink-0" data-name="Tab Contents">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[14px] text-center text-nowrap tracking-[0.1px]">
        <p className="leading-[20px] whitespace-pre">Veileder revisor</p>
      </div>
    </div>
  );
}

function StateLayer1() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="State-layer">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col items-center justify-center px-[16px] py-[14px] relative size-full">
          <TabContents />
          <div className="absolute bg-[#4a671e] bottom-0 h-[2px] left-0 right-0" data-name="Indicator" />
        </div>
      </div>
    </div>
  );
}

function Tab() {
  return (
    <div className="content-stretch flex flex-col h-[48px] items-center justify-end overflow-clip relative shrink-0" data-name="Tab 1">
      <StateLayer1 />
    </div>
  );
}

function TabContents1() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center justify-center min-h-px min-w-px relative shrink-0" data-name="Tab Contents">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#44483b] text-[14px] text-center text-nowrap tracking-[0.1px]">
        <p className="leading-[20px] whitespace-pre">Veileder</p>
      </div>
    </div>
  );
}

function StateLayer2() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="State-layer">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col items-center justify-center px-[16px] py-[14px] relative size-full">
          <TabContents1 />
        </div>
      </div>
    </div>
  );
}

function Tab1() {
  return (
    <div className="content-stretch flex flex-col h-[48px] items-center justify-end overflow-clip relative shrink-0" data-name="Tab 2">
      <StateLayer2 />
    </div>
  );
}

function TabGroup() {
  return (
    <div className="relative shrink-0 w-full" data-name="Tab group">
      <div className="size-full">
        <div className="box-border content-stretch flex items-start pl-[24px] pr-0 py-0 relative w-full">
          <Tab />
          <Tab1 />
        </div>
      </div>
    </div>
  );
}

function Divider() {
  return (
    <div className="h-px relative shrink-0 w-full" data-name="Divider">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 448 1">
        <g id="Divider">
          <line id="Divider_2" stroke="var(--stroke-0, #E3E3D9)" x1="4.37114e-08" x2="448" y1="0.500039" y2="0.5" />
        </g>
      </svg>
    </div>
  );
}

function Tabs() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Tabs">
      <TabGroup />
      <Divider />
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="expand_more">
          <path d={svgPaths.p1c0f0600} fill="var(--fill-0, #4A671E)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function StateLayer3() {
  return (
    <div className="box-border content-stretch flex gap-[4px] items-center justify-center px-[12px] py-[6px] relative shrink-0" data-name="State-layer">
      <Icon />
      <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#4a671e] text-[14px] text-nowrap tracking-[0.1px]">
        <p className="leading-[20px] whitespace-pre">Les mer</p>
      </div>
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0" data-name="Content">
      <StateLayer3 />
    </div>
  );
}

function NextButton() {
  return (
    <div className="content-stretch flex h-[48px] items-center justify-center relative shrink-0" data-name="next Button">
      <Content1 />
    </div>
  );
}

function Container() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-start px-[24px] py-0 relative w-full">
          <div className="-webkit-box flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full overflow-ellipsis overflow-hidden relative shrink-0 text-[#1a1c16] text-[16px] tracking-[0.5px] w-[min-content]">
            <p className="leading-[24px] mb-0">Dette bør du spørre om på dokumentgjennomgang:</p>
            <p className="leading-[24px] mb-0">&nbsp;</p>
            <ul>
              <li className="list-disc ms-[24px]">
                <span className="leading-[24px]">Be om dokumentasjon på kjøp av eks for, gjødsel eller drivstoff. ...</span>
              </li>
            </ul>
          </div>
          <NextButton />
        </div>
      </div>
    </div>
  );
}

function ScrollableContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Scrollable container">
      <Tabs />
      <Container />
    </div>
  );
}

function RequirementSection1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Requirement section">
      <RequirementSection />
      <ScrollableContainer />
    </div>
  );
}

export default function Container1() {
  return (
    <div className="bg-[#fafaf0] box-border content-stretch flex flex-col gap-[8px] items-center px-0 py-[8px] relative rounded-[12px] size-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#c4c8b7] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <RequirementSection1 />
    </div>
  );
}