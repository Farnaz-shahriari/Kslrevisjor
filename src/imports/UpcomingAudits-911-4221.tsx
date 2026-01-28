import svgPaths from "./svg-huj91ygtdq";

function LeadingElement() {
  return (
    <div className="bg-[#f4f4ea] relative rounded-[7.262px] shrink-0 size-[24px]" data-name="Leading element">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="post_add">
          <g id="Vector">
            <path d={svgPaths.p15082280} fill="var(--fill-0, #4A671E)" />
            <path d={svgPaths.p141e7e00} fill="var(--fill-0, #4A671E)" />
            <path d="M14.5 9.5H6.5V11.5H14.5V9.5Z" fill="var(--fill-0, #4A671E)" />
            <path d={svgPaths.p1e924700} fill="var(--fill-0, #4A671E)" />
            <path d={svgPaths.p3be0780} fill="var(--fill-0, #4A671E)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Badges() {
  return (
    <div className="absolute bg-[#ba1a1a] content-stretch flex items-center justify-center left-[36px] max-w-[34px] min-w-[16px] overflow-clip px-[4px] py-0 rounded-[100px] top-[-4px]" data-name="Badges">
      <div className="basis-0 flex flex-col font-['Manrope:Medium',sans-serif] font-medium grow justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[11px] text-center text-white tracking-[0.5px]">
        <p className="leading-[16px]">10</p>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="bg-[#f4f4ea] content-stretch flex gap-[8px] items-center justify-center p-[8px] relative rounded-[7.262px] shrink-0 size-[48px]" data-name="icon">
      <LeadingElement />
      <Badges />
    </div>
  );
}

function Content() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] tracking-[0.15px] w-full">
        <p className="leading-[24px]">Tildelte revisjoner</p>
      </div>
      <p className="font-['Manrope:Regular',sans-serif] font-normal h-[20px] leading-[20px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#44483b] text-[14px] text-nowrap tracking-[0.25px] w-full">Venter på at du skal ta stilling</p>
    </div>
  );
}

function ArrowRight() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="arrow_right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="arrow_right">
          <path d="M10 17V7L15 12L10 17Z" fill="var(--fill-0, #44483B)" id="icon" />
        </g>
      </svg>
    </div>
  );
}

function TrailingElement() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Trailing element">
      <ArrowRight />
    </div>
  );
}

function StateLayer() {
  return (
    <div className="h-[56px] relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[16px] py-0 relative size-full">
          <Content />
          <TrailingElement />
        </div>
      </div>
    </div>
  );
}

function ListItemListItem4Density() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center min-h-[56px] relative shrink-0 w-full" data-name="List item/List Item: -4 Density">
      <StateLayer />
    </div>
  );
}

function BeredskapCard() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start justify-center min-h-px min-w-px overflow-clip relative rounded-[16px] shrink-0" data-name="beredskap card">
      <ListItemListItem4Density />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Container">
      <Icon />
      <BeredskapCard />
    </div>
  );
}

function RevisorCard() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start p-[12px] relative rounded-[16px] shrink-0 w-[361px]" data-name="Revisor card">
      <div aria-hidden="true" className="absolute border border-[#c4c8b7] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Container />
    </div>
  );
}

function LeadingElement1() {
  return (
    <div className="bg-[#f4f4ea] relative rounded-[7.262px] shrink-0 size-[24px]" data-name="Leading element">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="date_range">
          <path d={svgPaths.p1c86d00} fill="var(--fill-0, #4A671E)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Badges1() {
  return (
    <div className="absolute bg-[#ba1a1a] content-stretch flex items-center justify-center left-[36px] max-w-[34px] min-w-[16px] overflow-clip px-[4px] py-0 rounded-[100px] top-[-4px]" data-name="Badges">
      <div className="basis-0 flex flex-col font-['Manrope:Medium',sans-serif] font-medium grow justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[11px] text-center text-white tracking-[0.5px]">
        <p className="leading-[16px]">3</p>
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="bg-[#f4f4ea] content-stretch flex gap-[8px] items-center justify-center p-[8px] relative rounded-[7.262px] shrink-0 size-[48px]" data-name="icon">
      <LeadingElement1 />
      <Badges1 />
    </div>
  );
}

function Content1() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] tracking-[0.15px] w-full">
        <p className="leading-[24px]">Venter på planlegging</p>
      </div>
      <p className="font-['Manrope:Regular',sans-serif] font-normal h-[20px] leading-[20px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#44483b] text-[14px] text-nowrap tracking-[0.25px] w-full">Tidspunkt er ikke satt</p>
    </div>
  );
}

function ArrowRight1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="arrow_right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="arrow_right">
          <path d="M10 17V7L15 12L10 17Z" fill="var(--fill-0, #44483B)" id="icon" />
        </g>
      </svg>
    </div>
  );
}

function TrailingElement1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Trailing element">
      <ArrowRight1 />
    </div>
  );
}

function StateLayer1() {
  return (
    <div className="h-[56px] relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[16px] py-0 relative size-full">
          <Content1 />
          <TrailingElement1 />
        </div>
      </div>
    </div>
  );
}

function ListItemListItem4Density1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center min-h-[56px] relative shrink-0 w-full" data-name="List item/List Item: -4 Density">
      <StateLayer1 />
    </div>
  );
}

function BeredskapCard1() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start justify-center min-h-px min-w-px overflow-clip relative rounded-[16px] shrink-0" data-name="beredskap card">
      <ListItemListItem4Density1 />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Container">
      <Icon1 />
      <BeredskapCard1 />
    </div>
  );
}

function RevisorCard1() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start p-[12px] relative rounded-[16px] shrink-0 w-[361px]" data-name="Revisor card">
      <div aria-hidden="true" className="absolute border border-[#c4c8b7] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Container1 />
    </div>
  );
}

function NeedsActionAuditsNavigation() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0" data-name="needs action audits navigation">
      <RevisorCard />
      <RevisorCard1 />
    </div>
  );
}

function FormatListBulleted() {
  return (
    <div className="absolute inset-[0_-20%_-20%_0]" data-name="format_list_bulleted">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="format_list_bulleted">
          <path d={svgPaths.p34667a00} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[20px] z-[2]" data-name="Icon">
      <FormatListBulleted />
    </div>
  );
}

function StateLayer2() {
  return (
    <div className="min-w-[48px] relative shrink-0 w-full" data-name="State-layer">
      <div className="flex flex-row items-center justify-center min-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[4px] isolate items-center justify-center min-w-[inherit] px-[12px] py-[6px] relative w-full">
          <Icon2 />
          <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[14px] text-nowrap text-white tracking-[0.1px] z-[1]">
            <p className="leading-[20px]">Liste</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Segment() {
  return (
    <div className="bg-[#365bae] content-stretch flex flex-col items-center justify-center min-w-[48px] overflow-clip relative rounded-[24px] shrink-0" data-name="Segment 1">
      <StateLayer2 />
    </div>
  );
}

function CalendarToday() {
  return (
    <div className="absolute inset-[0_-20%_-20%_0]" data-name="calendar_today">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="calendar_today">
          <path d={svgPaths.p6ea8c00} fill="var(--fill-0, #174295)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[20px] z-[2]" data-name="Icon">
      <CalendarToday />
    </div>
  );
}

function StateLayer3() {
  return (
    <div className="relative shrink-0 w-full" data-name="State-layer">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[4px] isolate items-center justify-center px-[12px] py-[6px] relative w-full">
          <Icon3 />
          <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#174295] text-[14px] text-nowrap tracking-[0.1px] z-[1]">
            <p className="leading-[20px]">Kalender</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Segment1() {
  return (
    <div className="bg-[#dae2ff] content-stretch flex flex-col items-center justify-center min-w-[48px] overflow-clip relative rounded-[4px] shrink-0" data-name="Segment 2">
      <StateLayer3 />
    </div>
  );
}

function ConnectedButtonGroup() {
  return (
    <div className="content-stretch flex gap-[2px] items-start overflow-clip relative rounded-[16px] shrink-0" data-name="Connected button group">
      <Segment />
      <Segment1 />
    </div>
  );
}

function ChevronLeft() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="chevron_left">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="chevron_left">
          <path d={svgPaths.p73b2780} fill="var(--fill-0, #44483B)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function StateLayer4() {
  return (
    <div className="content-stretch flex h-[56px] items-center justify-center relative shrink-0 w-full" data-name="State-layer">
      <ChevronLeft />
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[100px] shrink-0 w-[56px]" data-name="Content">
      <StateLayer4 />
    </div>
  );
}

function IconButton() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Icon button">
      <Content2 />
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.pa1eb970} fill="var(--fill-0, #44483B)" id="icon" />
        </g>
      </svg>
    </div>
  );
}

function StateLayer5() {
  return (
    <div className="content-stretch flex h-[56px] items-center justify-center relative shrink-0 w-full" data-name="State-layer">
      <Icon4 />
    </div>
  );
}

function Content3() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[100px] shrink-0 w-[56px]" data-name="Content">
      <StateLayer5 />
    </div>
  );
}

function IconButton1() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Icon button">
      <Content3 />
    </div>
  );
}

function Header() {
  return (
    <div className="content-stretch flex gap-[16px] items-center justify-center px-0 py-[8px] relative shrink-0 w-full" data-name="Header">
      <IconButton />
      <div className="flex flex-col font-['Quatro:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1a1c16] text-[22px] text-center text-nowrap">
        <p className="leading-[28px]">Januar 2026</p>
      </div>
      <IconButton1 />
    </div>
  );
}

function Date() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative shrink-0 w-full" data-name="Date">
      <div className="content-stretch flex flex-col items-start p-[8px] relative size-full">
        <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#44483b] text-[16px] text-center text-nowrap tracking-[0.15px]">
          <p className="leading-[24px]">29.</p>
        </div>
      </div>
    </div>
  );
}

function DayColumn() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[16px] grow h-full items-start min-h-px min-w-px relative shrink-0" data-name="Day Column">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] text-center text-nowrap tracking-[0.15px]">
        <p className="leading-[24px]">Ma</p>
      </div>
      <Date />
    </div>
  );
}

function Date1() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative shrink-0 w-full" data-name="Date">
      <div className="content-stretch flex flex-col items-start p-[8px] relative size-full">
        <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#44483b] text-[16px] text-center text-nowrap tracking-[0.15px]">
          <p className="leading-[24px]">30.</p>
        </div>
      </div>
    </div>
  );
}

function DayColumn1() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[16px] grow h-full items-start min-h-px min-w-px relative shrink-0" data-name="Day Column">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] text-center text-nowrap tracking-[0.15px]">
        <p className="leading-[24px]">Ti</p>
      </div>
      <Date1 />
    </div>
  );
}

function Date2() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative shrink-0 w-full" data-name="Date">
      <div className="content-stretch flex flex-col items-start p-[8px] relative size-full">
        <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#44483b] text-[16px] text-center text-nowrap tracking-[0.15px]">
          <p className="leading-[24px]">31.</p>
        </div>
      </div>
    </div>
  );
}

function DayColumn2() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[16px] grow h-full items-start min-h-px min-w-px relative shrink-0" data-name="Day Column">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] text-center text-nowrap tracking-[0.15px]">
        <p className="leading-[24px]">On</p>
      </div>
      <Date2 />
    </div>
  );
}

function Date3() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative shrink-0 w-full" data-name="Date">
      <div className="content-stretch flex flex-col items-start p-[8px] relative size-full">
        <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#44483b] text-[16px] text-center text-nowrap tracking-[0.15px]">
          <p className="leading-[24px]">01.</p>
        </div>
      </div>
    </div>
  );
}

function DayColumn3() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[16px] grow h-full items-start min-h-px min-w-px relative shrink-0" data-name="Day Column">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] text-center text-nowrap tracking-[0.15px]">
        <p className="leading-[24px]">To</p>
      </div>
      <Date3 />
    </div>
  );
}

function Audit() {
  return (
    <div className="bg-[#fafaf0] relative shrink-0 w-full" data-name="audit">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[4px] relative w-full">
          <div className="basis-0 flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold grow justify-center leading-[0] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#44483b] text-[14px] text-center text-nowrap tracking-[0.1px]">
            <p className="leading-[20px] overflow-ellipsis overflow-hidden">{`08:30. Bjørkli Økologiske `}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Audit1() {
  return (
    <div className="bg-[#fafaf0] relative shrink-0 w-full" data-name="audit">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[4px] relative w-full">
          <div className="basis-0 flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold grow justify-center leading-[0] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#44483b] text-[14px] text-center text-nowrap tracking-[0.1px]">
            <p className="leading-[20px] overflow-ellipsis overflow-hidden">{`13:30.Solvang  Gård`}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Date4() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative shrink-0 w-full" data-name="Date">
      <div className="content-stretch flex flex-col gap-[8px] items-start p-[8px] relative size-full">
        <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#44483b] text-[16px] text-center text-nowrap tracking-[0.15px]">
          <p className="leading-[24px]">02.</p>
        </div>
        <Audit />
        <Audit1 />
      </div>
    </div>
  );
}

function DayColumn4() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[16px] grow h-full items-start min-h-px min-w-px relative shrink-0" data-name="Day Column">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] text-center text-nowrap tracking-[0.15px]">
        <p className="leading-[24px]">Fr</p>
      </div>
      <Date4 />
    </div>
  );
}

function Date5() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative shrink-0 w-full" data-name="Date">
      <div className="content-stretch flex flex-col items-start p-[8px] relative size-full">
        <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#44483b] text-[16px] text-center text-nowrap tracking-[0.15px]">
          <p className="leading-[24px]">03.</p>
        </div>
      </div>
    </div>
  );
}

function DayColumn5() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[16px] grow h-full items-start min-h-px min-w-px relative shrink-0" data-name="Day Column">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] text-center text-nowrap tracking-[0.15px]">
        <p className="leading-[24px]">Lø</p>
      </div>
      <Date5 />
    </div>
  );
}

function Date6() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative shrink-0 w-full" data-name="Date">
      <div className="content-stretch flex flex-col items-start p-[8px] relative size-full">
        <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#44483b] text-[16px] text-center text-nowrap tracking-[0.15px]">
          <p className="leading-[24px]">04.</p>
        </div>
      </div>
    </div>
  );
}

function DayColumn6() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[16px] grow h-full items-start min-h-px min-w-px relative shrink-0" data-name="Day Column">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] text-center text-nowrap tracking-[0.15px]">
        <p className="leading-[24px]">Sø</p>
      </div>
      <Date6 />
    </div>
  );
}

function WeekRow() {
  return (
    <div className="content-stretch flex gap-[8px] h-[208px] items-center relative shrink-0 w-full" data-name="Week Row">
      <DayColumn />
      <DayColumn1 />
      <DayColumn2 />
      <DayColumn3 />
      <DayColumn4 />
      <DayColumn5 />
      <DayColumn6 />
    </div>
  );
}

function Date7() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative shrink-0 w-full" data-name="Date">
      <div className="content-stretch flex flex-col items-start p-[8px] relative size-full">
        <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#44483b] text-[16px] text-center text-nowrap tracking-[0.15px]">
          <p className="leading-[24px]">05.</p>
        </div>
      </div>
    </div>
  );
}

function DayColumn7() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start min-h-px min-w-px relative shrink-0" data-name="Day Column">
      <Date7 />
    </div>
  );
}

function Date8() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative shrink-0 w-full" data-name="Date">
      <div className="content-stretch flex flex-col items-start p-[8px] relative size-full">
        <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#44483b] text-[16px] text-center text-nowrap tracking-[0.15px]">
          <p className="leading-[24px]">06.</p>
        </div>
      </div>
    </div>
  );
}

function DayColumn8() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start min-h-px min-w-px relative shrink-0" data-name="Day Column">
      <Date8 />
    </div>
  );
}

function Date9() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative shrink-0 w-full" data-name="Date">
      <div className="content-stretch flex flex-col items-start p-[8px] relative size-full">
        <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#44483b] text-[16px] text-center text-nowrap tracking-[0.15px]">
          <p className="leading-[24px]">07.</p>
        </div>
      </div>
    </div>
  );
}

function DayColumn9() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start min-h-px min-w-px relative shrink-0" data-name="Day Column">
      <Date9 />
    </div>
  );
}

function Date10() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative shrink-0 w-full" data-name="Date">
      <div className="content-stretch flex flex-col items-start p-[8px] relative size-full">
        <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#44483b] text-[16px] text-center text-nowrap tracking-[0.15px]">
          <p className="leading-[24px]">08.</p>
        </div>
      </div>
    </div>
  );
}

function DayColumn10() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start min-h-px min-w-px relative shrink-0" data-name="Day Column">
      <Date10 />
    </div>
  );
}

function Date11() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative shrink-0 w-full" data-name="Date">
      <div className="content-stretch flex flex-col items-start p-[8px] relative size-full">
        <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#44483b] text-[16px] text-center text-nowrap tracking-[0.15px]">
          <p className="leading-[24px]">09.</p>
        </div>
      </div>
    </div>
  );
}

function DayColumn11() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start min-h-px min-w-px relative shrink-0" data-name="Day Column">
      <Date11 />
    </div>
  );
}

function Date12() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative shrink-0 w-full" data-name="Date">
      <div className="content-stretch flex flex-col items-start p-[8px] relative size-full">
        <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#44483b] text-[16px] text-center text-nowrap tracking-[0.15px]">
          <p className="leading-[24px]">10.</p>
        </div>
      </div>
    </div>
  );
}

function DayColumn12() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start min-h-px min-w-px relative shrink-0" data-name="Day Column">
      <Date12 />
    </div>
  );
}

function Date13() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative shrink-0 w-full" data-name="Date">
      <div className="content-stretch flex flex-col items-start p-[8px] relative size-full">
        <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#44483b] text-[16px] text-center text-nowrap tracking-[0.15px]">
          <p className="leading-[24px]">11.</p>
        </div>
      </div>
    </div>
  );
}

function DayColumn13() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start min-h-px min-w-px relative shrink-0" data-name="Day Column">
      <Date13 />
    </div>
  );
}

function WeekRow1() {
  return (
    <div className="content-stretch flex gap-[8px] h-[164px] items-center relative shrink-0 w-full" data-name="Week Row">
      <DayColumn7 />
      <DayColumn8 />
      <DayColumn9 />
      <DayColumn10 />
      <DayColumn11 />
      <DayColumn12 />
      <DayColumn13 />
    </div>
  );
}

function Date14() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative shrink-0 w-full" data-name="Date">
      <div className="content-stretch flex flex-col items-start p-[8px] relative size-full">
        <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#44483b] text-[16px] text-center text-nowrap tracking-[0.15px]">
          <p className="leading-[24px]">12.</p>
        </div>
      </div>
    </div>
  );
}

function DayColumn14() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start min-h-px min-w-px relative shrink-0" data-name="Day Column">
      <Date14 />
    </div>
  );
}

function Date15() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative shrink-0 w-full" data-name="Date">
      <div className="content-stretch flex flex-col items-start p-[8px] relative size-full">
        <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#44483b] text-[16px] text-center text-nowrap tracking-[0.15px]">
          <p className="leading-[24px]">13.</p>
        </div>
      </div>
    </div>
  );
}

function DayColumn15() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start min-h-px min-w-px relative shrink-0" data-name="Day Column">
      <Date15 />
    </div>
  );
}

function Date16() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative shrink-0 w-full" data-name="Date">
      <div className="content-stretch flex flex-col items-start p-[8px] relative size-full">
        <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#44483b] text-[16px] text-center text-nowrap tracking-[0.15px]">
          <p className="leading-[24px]">14.</p>
        </div>
      </div>
    </div>
  );
}

function DayColumn16() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start min-h-px min-w-px relative shrink-0" data-name="Day Column">
      <Date16 />
    </div>
  );
}

function Date17() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative shrink-0 w-full" data-name="Date">
      <div className="content-stretch flex flex-col items-start p-[8px] relative size-full">
        <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#44483b] text-[16px] text-center text-nowrap tracking-[0.15px]">
          <p className="leading-[24px]">15.</p>
        </div>
      </div>
    </div>
  );
}

function DayColumn17() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start min-h-px min-w-px relative shrink-0" data-name="Day Column">
      <Date17 />
    </div>
  );
}

function Date18() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative shrink-0 w-full" data-name="Date">
      <div className="content-stretch flex flex-col items-start p-[8px] relative size-full">
        <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#44483b] text-[16px] text-center text-nowrap tracking-[0.15px]">
          <p className="leading-[24px]">16.</p>
        </div>
      </div>
    </div>
  );
}

function DayColumn18() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start min-h-px min-w-px relative shrink-0" data-name="Day Column">
      <Date18 />
    </div>
  );
}

function Date19() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative shrink-0 w-full" data-name="Date">
      <div className="content-stretch flex flex-col items-start p-[8px] relative size-full">
        <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#44483b] text-[16px] text-center text-nowrap tracking-[0.15px]">
          <p className="leading-[24px]">17.</p>
        </div>
      </div>
    </div>
  );
}

function DayColumn19() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start min-h-px min-w-px relative shrink-0" data-name="Day Column">
      <Date19 />
    </div>
  );
}

function Date20() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative shrink-0 w-full" data-name="Date">
      <div className="content-stretch flex flex-col items-start p-[8px] relative size-full">
        <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#44483b] text-[16px] text-center text-nowrap tracking-[0.15px]">
          <p className="leading-[24px]">18.</p>
        </div>
      </div>
    </div>
  );
}

function DayColumn20() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start min-h-px min-w-px relative shrink-0" data-name="Day Column">
      <Date20 />
    </div>
  );
}

function WeekRow2() {
  return (
    <div className="content-stretch flex gap-[8px] h-[164px] items-center relative shrink-0 w-full" data-name="Week Row">
      <DayColumn14 />
      <DayColumn15 />
      <DayColumn16 />
      <DayColumn17 />
      <DayColumn18 />
      <DayColumn19 />
      <DayColumn20 />
    </div>
  );
}

function Date21() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative shrink-0 w-full" data-name="Date">
      <div className="content-stretch flex flex-col items-start p-[8px] relative size-full">
        <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#44483b] text-[16px] text-center text-nowrap tracking-[0.15px]">
          <p className="leading-[24px]">19.</p>
        </div>
      </div>
    </div>
  );
}

function DayColumn21() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start min-h-px min-w-px relative shrink-0" data-name="Day Column">
      <Date21 />
    </div>
  );
}

function Date22() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative shrink-0 w-full" data-name="Date">
      <div className="content-stretch flex flex-col items-start p-[8px] relative size-full">
        <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#44483b] text-[16px] text-center text-nowrap tracking-[0.15px]">
          <p className="leading-[24px]">20.</p>
        </div>
      </div>
    </div>
  );
}

function DayColumn22() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start min-h-px min-w-px relative shrink-0" data-name="Day Column">
      <Date22 />
    </div>
  );
}

function Date23() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative shrink-0 w-full" data-name="Date">
      <div className="content-stretch flex flex-col items-start p-[8px] relative size-full">
        <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#44483b] text-[16px] text-center text-nowrap tracking-[0.15px]">
          <p className="leading-[24px]">21.</p>
        </div>
      </div>
    </div>
  );
}

function DayColumn23() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start min-h-px min-w-px relative shrink-0" data-name="Day Column">
      <Date23 />
    </div>
  );
}

function Date24() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative shrink-0 w-full" data-name="Date">
      <div className="content-stretch flex flex-col items-start p-[8px] relative size-full">
        <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#44483b] text-[16px] text-center text-nowrap tracking-[0.15px]">
          <p className="leading-[24px]">22.</p>
        </div>
      </div>
    </div>
  );
}

function DayColumn24() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start min-h-px min-w-px relative shrink-0" data-name="Day Column">
      <Date24 />
    </div>
  );
}

function Date25() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative shrink-0 w-full" data-name="Date">
      <div className="content-stretch flex flex-col items-start p-[8px] relative size-full">
        <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#44483b] text-[16px] text-center text-nowrap tracking-[0.15px]">
          <p className="leading-[24px]">23.</p>
        </div>
      </div>
    </div>
  );
}

function DayColumn25() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start min-h-px min-w-px relative shrink-0" data-name="Day Column">
      <Date25 />
    </div>
  );
}

function Date26() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative shrink-0 w-full" data-name="Date">
      <div className="content-stretch flex flex-col items-start p-[8px] relative size-full">
        <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#44483b] text-[16px] text-center text-nowrap tracking-[0.15px]">
          <p className="leading-[24px]">24.</p>
        </div>
      </div>
    </div>
  );
}

function DayColumn26() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start min-h-px min-w-px relative shrink-0" data-name="Day Column">
      <Date26 />
    </div>
  );
}

function Date27() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative shrink-0 w-full" data-name="Date">
      <div className="content-stretch flex flex-col items-start p-[8px] relative size-full">
        <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#44483b] text-[16px] text-center text-nowrap tracking-[0.15px]">
          <p className="leading-[24px]">25.</p>
        </div>
      </div>
    </div>
  );
}

function DayColumn27() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start min-h-px min-w-px relative shrink-0" data-name="Day Column">
      <Date27 />
    </div>
  );
}

function WeekRow3() {
  return (
    <div className="content-stretch flex gap-[8px] h-[164px] items-center relative shrink-0 w-full" data-name="Week Row">
      <DayColumn21 />
      <DayColumn22 />
      <DayColumn23 />
      <DayColumn24 />
      <DayColumn25 />
      <DayColumn26 />
      <DayColumn27 />
    </div>
  );
}

function Date28() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative shrink-0 w-full" data-name="Date">
      <div className="content-stretch flex flex-col items-start p-[8px] relative size-full">
        <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#44483b] text-[16px] text-center text-nowrap tracking-[0.15px]">
          <p className="leading-[24px]">26.</p>
        </div>
      </div>
    </div>
  );
}

function DayColumn28() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start min-h-px min-w-px relative shrink-0" data-name="Day Column">
      <Date28 />
    </div>
  );
}

function Date29() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative shrink-0 w-full" data-name="Date">
      <div className="content-stretch flex flex-col items-start p-[8px] relative size-full">
        <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#44483b] text-[16px] text-center text-nowrap tracking-[0.15px]">
          <p className="leading-[24px]">27.</p>
        </div>
      </div>
    </div>
  );
}

function DayColumn29() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start min-h-px min-w-px relative shrink-0" data-name="Day Column">
      <Date29 />
    </div>
  );
}

function Date30() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative shrink-0 w-full" data-name="Date">
      <div className="content-stretch flex flex-col items-start p-[8px] relative size-full">
        <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#44483b] text-[16px] text-center text-nowrap tracking-[0.15px]">
          <p className="leading-[24px]">28.</p>
        </div>
      </div>
    </div>
  );
}

function DayColumn30() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start min-h-px min-w-px relative shrink-0" data-name="Day Column">
      <Date30 />
    </div>
  );
}

function Date31() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative shrink-0 w-full" data-name="Date">
      <div className="content-stretch flex flex-col items-start p-[8px] relative size-full">
        <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#44483b] text-[16px] text-center text-nowrap tracking-[0.15px]">
          <p className="leading-[24px]">29.</p>
        </div>
      </div>
    </div>
  );
}

function DayColumn31() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start min-h-px min-w-px relative shrink-0" data-name="Day Column">
      <Date31 />
    </div>
  );
}

function Date32() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative shrink-0 w-full" data-name="Date">
      <div className="content-stretch flex flex-col items-start p-[8px] relative size-full">
        <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#44483b] text-[16px] text-center text-nowrap tracking-[0.15px]">
          <p className="leading-[24px]">30.</p>
        </div>
      </div>
    </div>
  );
}

function DayColumn32() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start min-h-px min-w-px relative shrink-0" data-name="Day Column">
      <Date32 />
    </div>
  );
}

function Date33() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative shrink-0 w-full" data-name="Date">
      <div className="content-stretch flex flex-col items-start p-[8px] relative size-full">
        <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#44483b] text-[16px] text-center text-nowrap tracking-[0.15px]">
          <p className="leading-[24px]">31.</p>
        </div>
      </div>
    </div>
  );
}

function DayColumn33() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start min-h-px min-w-px relative shrink-0" data-name="Day Column">
      <Date33 />
    </div>
  );
}

function Date34() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative shrink-0 w-full" data-name="Date">
      <div className="content-stretch flex flex-col items-start p-[8px] relative size-full">
        <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#44483b] text-[16px] text-center text-nowrap tracking-[0.15px]">
          <p className="leading-[24px]">01.</p>
        </div>
      </div>
    </div>
  );
}

function DayColumn34() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start min-h-px min-w-px relative shrink-0" data-name="Day Column">
      <Date34 />
    </div>
  );
}

function WeekRow4() {
  return (
    <div className="content-stretch flex gap-[8px] h-[164px] items-center relative shrink-0 w-full" data-name="Week Row">
      <DayColumn28 />
      <DayColumn29 />
      <DayColumn30 />
      <DayColumn31 />
      <DayColumn32 />
      <DayColumn33 />
      <DayColumn34 />
    </div>
  );
}

function CalendarBody() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Calendar Body">
      <WeekRow />
      <WeekRow1 />
      <WeekRow2 />
      <WeekRow3 />
      <WeekRow4 />
    </div>
  );
}

function Calendar() {
  return (
    <div className="bg-[#e0e4d3] h-[1038px] relative rounded-[16px] shrink-0 w-full" data-name="Calendar">
      <div className="content-stretch flex flex-col gap-[24px] items-start p-[16px] relative size-full">
        <Header />
        <CalendarBody />
      </div>
    </div>
  );
}

export default function UpcomingAudits() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[16px] items-start px-[24px] py-[16px] relative rounded-[12px] size-full" data-name="Upcoming audits">
      <div className="flex flex-col font-['Quatro:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1a1c16] text-[22px] text-center text-nowrap">
        <p className="leading-[28px]">Planlagte revisjoner</p>
      </div>
      <NeedsActionAuditsNavigation />
      <ConnectedButtonGroup />
      <Calendar />
    </div>
  );
}