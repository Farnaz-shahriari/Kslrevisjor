import svgPaths from "./svg-vw3ze69ti4";

function TabContents() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center justify-center min-h-px min-w-px relative shrink-0" data-name="Tab Contents">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#44483b] text-[14px] text-center text-nowrap tracking-[0.1px]">
        <p className="leading-[20px] whitespace-pre">Veileder</p>
      </div>
    </div>
  );
}

function StateLayer() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="State-layer">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col items-center justify-center px-[16px] py-[14px] relative size-full">
          <TabContents />
        </div>
      </div>
    </div>
  );
}

function Tab() {
  return (
    <div className="content-stretch flex flex-col h-[48px] items-center justify-end overflow-clip relative shrink-0" data-name="Tab 2">
      <StateLayer />
    </div>
  );
}

function TabGroup() {
  return (
    <div className="relative shrink-0 w-full" data-name="Tab group">
      <div className="size-full">
        <div className="box-border content-stretch flex items-start pl-[24px] pr-0 py-0 relative w-full">
          <Tab />
        </div>
      </div>
    </div>
  );
}

function Divider() {
  return (
    <div className="h-px relative shrink-0 w-full" data-name="Divider">
      <div className="absolute bottom-[-0.01%] left-0 right-0 top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1023 1">
          <g id="Divider">
            <line id="Divider_2" stroke="var(--stroke-0, #E3E3D9)" x1="4.37114e-08" x2="1023" y1="0.500089" y2="0.5" />
          </g>
        </svg>
      </div>
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

function StateLayer1() {
  return (
    <div className="box-border content-stretch flex gap-[4px] items-center justify-center px-[12px] py-[6px] relative shrink-0" data-name="State-layer">
      <Icon />
      <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#4a671e] text-[14px] text-nowrap tracking-[0.1px]">
        <p className="leading-[20px] whitespace-pre">Les mer</p>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0" data-name="Content">
      <StateLayer1 />
    </div>
  );
}

function NextButton() {
  return (
    <div className="content-stretch flex h-[48px] items-center justify-center relative shrink-0" data-name="next Button">
      <Content />
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

function GuidanceSection() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="guidance section">
      <Tabs />
      <Container />
    </div>
  );
}

function ExpandLess() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="expand_less">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="expand_less">
          <path d={svgPaths.p2b8d2f00} fill="var(--fill-0, #44483B)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function LeadingElement() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Leading element">
      <ExpandLess />
    </div>
  );
}

function Content1() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] tracking-[0.5px] w-full">
        <p className="leading-[24px]">Krav</p>
      </div>
    </div>
  );
}

function StateLayer2() {
  return (
    <div className="basis-0 box-border content-stretch flex gap-[16px] grow items-center justify-center min-h-px min-w-px px-0 py-[8px] relative shrink-0 w-full" data-name="state-layer">
      <LeadingElement />
      <Content1 />
    </div>
  );
}

function ListItemListItem0Density() {
  return (
    <div className="content-stretch flex flex-col h-[56px] items-start justify-center min-h-[56px] relative shrink-0 w-full" data-name="List item/List Item: 0 Density">
      <StateLayer2 />
    </div>
  );
}

function Content2() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#44483b] text-[12px] tracking-[0.5px] w-full">
        <p className="leading-[16px]">{`Merkebrukerkrav	`}</p>
      </div>
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] tracking-[0.5px] w-full">
        <p className="leading-[24px]">{`Krav til bruk av Spesialitet	`}</p>
      </div>
      <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#44483b] text-[14px] tracking-[0.25px] w-full">{`Kravpunkt 2.1	`}</p>
    </div>
  );
}

function OpenInNew() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="open_in_new">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="open_in_new">
          <path d={svgPaths.p13453dc0} fill="var(--fill-0, #1A1C16)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function TrailingElement() {
  return (
    <div className="content-stretch flex gap-[10px] h-[64px] items-start relative shrink-0" data-name="Trailing element">
      <OpenInNew />
    </div>
  );
}

function StateLayer3() {
  return (
    <div className="relative shrink-0 w-full" data-name="state-layer">
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[16px] items-start px-[16px] py-[12px] relative w-full">
          <Content2 />
          <TrailingElement />
        </div>
      </div>
    </div>
  );
}

function ListItemListItem0Density1() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center max-w-[480px] min-h-[88px] relative rounded-[12px] shrink-0 w-full" data-name="List item/List Item: 0 Density">
      <div aria-hidden="true" className="absolute border border-[#c4c8b7] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <StateLayer3 />
    </div>
  );
}

function RequirementList() {
  return (
    <div className="relative shrink-0 w-full" data-name="requirement list">
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-start justify-center px-[24px] py-[8px] relative w-full">
          <ListItemListItem0Density />
          <ListItemListItem0Density1 />
        </div>
      </div>
    </div>
  );
}

function LinksSection() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start max-h-[688px] relative shrink-0 w-full" data-name="links section">
      <RequirementList />
    </div>
  );
}

export default function GuidanceAndLinksContainer() {
  return (
    <div className="bg-[#f4f4ea] content-stretch flex flex-col items-start relative rounded-[12px] size-full" data-name="Guidance and links container">
      <GuidanceSection />
      <LinksSection />
    </div>
  );
}