import svgPaths from "./svg-pjdrcrhzca";

function Divider() {
  return (
    <div className="h-px relative shrink-0 w-full" data-name="Divider">
      <div className="absolute inset-[0_0_-0.01%_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1600 1.00017">
          <g id="Divider">
            <line id="Divider_2" stroke="var(--stroke-0, #C4C8B7)" x2="1600" y1="0.50014" y2="0.50014" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Logo() {
  return (
    <div className="h-[21px] relative shrink-0 w-[69.695px]" data-name="Logo">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 69.6953 21">
        <g id="Logo">
          <path d={svgPaths.p364d3200} fill="var(--fill-0, #79B61D)" id="Vector" />
          <path d={svgPaths.p186c1d80} fill="var(--fill-0, #79B61D)" id="Vector_2" />
          <g id="Group">
            <g id="Vector_3"></g>
            <path d={svgPaths.p27396200} fill="var(--fill-0, #177312)" id="Vector_4" />
            <path d={svgPaths.p1b7dcb00} fill="var(--fill-0, #008F00)" id="Vector_5" />
            <path d={svgPaths.p242e0980} fill="var(--fill-0, #79B61D)" id="Vector_6" />
            <path d={svgPaths.pf608572} fill="var(--fill-0, #AFD377)" id="Vector_7" />
            <g id="Vector_8"></g>
          </g>
          <g id="Group_2">
            <path d={svgPaths.p16848380} fill="var(--fill-0, #79B61D)" id="Vector_9" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconButton() {
  return (
    <div className="content-stretch flex flex-col h-[56px] items-start justify-center px-0 py-[16px] relative shrink-0" data-name="Icon button">
      <Logo />
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[24px] z-[1]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p32dc8f00} fill="var(--fill-0, #284000)" id="icon" />
        </g>
      </svg>
    </div>
  );
}

function StateLayer() {
  return (
    <div className="content-stretch flex h-[56px] isolate items-center justify-center p-[16px] relative shrink-0" data-name="State-layer">
      <Icon />
    </div>
  );
}

function Fab() {
  return (
    <div className="bg-[#eff1e7] content-stretch flex items-center justify-center overflow-clip relative rounded-[16px] shrink-0" data-name="FAB">
      <StateLayer />
    </div>
  );
}

function MenuFab() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0" data-name="Menu & Fab">
      <IconButton />
      <Fab />
    </div>
  );
}

function Home() {
  return (
    <div className="absolute left-1/2 opacity-0 size-[24px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="home">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="home">
          <path d={svgPaths.p1e128b00} fill="var(--fill-0, #44483B)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Home1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="home">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="home">
          <path d={svgPaths.p1e128b00} fill="var(--fill-0, #44483B)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function StateLayer1() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center px-0 py-[4px] relative shrink-0 size-[56px]" data-name="State layer">
      <Home />
      <Home1 />
    </div>
  );
}

function IconContainer() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[28px] shrink-0" data-name="Icon container">
      <StateLayer1 />
    </div>
  );
}

function Forside() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-0 py-[4px] relative shrink-0 w-full" data-name="Forside">
      <IconContainer />
    </div>
  );
}

function Quiz() {
  return (
    <div className="absolute left-1/2 opacity-0 size-[24px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="quiz">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="quiz">
          <path d={svgPaths.p38fcf780} fill="var(--fill-0, #44483B)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Quiz1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="quiz">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="quiz">
          <path d={svgPaths.p38fcf780} fill="var(--fill-0, #44483B)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function StateLayer2() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center px-0 py-[4px] relative shrink-0 size-[56px]" data-name="State layer">
      <Quiz />
      <Quiz1 />
    </div>
  );
}

function IconContainer1() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[28px] shrink-0" data-name="Icon container">
      <StateLayer2 />
    </div>
  );
}

function TildelteRevisjoner() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-0 py-[4px] relative shrink-0 w-full" data-name="Tildelte Revisjoner">
      <IconContainer1 />
    </div>
  );
}

function Icon1() {
  return (
    <div className="absolute left-1/2 opacity-0 size-[24px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="rate_review">
          <path d={svgPaths.p14853080} fill="var(--fill-0, #44483B)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="rate_review">
          <path d={svgPaths.p14853080} fill="var(--fill-0, #44483B)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function StateLayer3() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center px-0 py-[4px] relative shrink-0 size-[56px]" data-name="State layer">
      <Icon1 />
      <Icon2 />
    </div>
  );
}

function IconContainer2() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[28px] shrink-0" data-name="Icon container">
      <StateLayer3 />
    </div>
  );
}

function AksepterteRevisjoner() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-0 py-[4px] relative shrink-0 w-full" data-name="Aksepterte Revisjoner">
      <IconContainer2 />
    </div>
  );
}

function ReportProblem() {
  return (
    <div className="absolute left-1/2 opacity-0 size-[24px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="report_problem">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="report_problem">
          <path d={svgPaths.p24139a00} fill="var(--fill-0, #174295)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ReportProblem1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="report_problem">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="report_problem">
          <path d={svgPaths.p24139a00} fill="var(--fill-0, #174295)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function StateLayer4() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[56px]" data-name="State layer">
      <ReportProblem />
      <ReportProblem1 />
    </div>
  );
}

function IconContainer3() {
  return (
    <div className="bg-[#dae2ff] content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[28px] shrink-0" data-name="Icon container">
      <StateLayer4 />
    </div>
  );
}

function NavItem() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-0 py-[4px] relative shrink-0 w-full" data-name="Nav item 04">
      <IconContainer3 />
    </div>
  );
}

function ReceiptLong() {
  return (
    <div className="absolute left-1/2 opacity-0 size-[24px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="receipt_long">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="receipt_long">
          <g id="Vector">
            <path d={svgPaths.p2e609600} fill="var(--fill-0, #44483B)" />
            <path d="M15 7H9V9H15V7Z" fill="var(--fill-0, #44483B)" />
            <path d="M18 7H16V9H18V7Z" fill="var(--fill-0, #44483B)" />
            <path d="M15 10H9V12H15V10Z" fill="var(--fill-0, #44483B)" />
            <path d="M18 10H16V12H18V10Z" fill="var(--fill-0, #44483B)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function ReceiptLong1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="receipt_long">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="receipt_long">
          <g id="Vector">
            <path d={svgPaths.p2e609600} fill="var(--fill-0, #44483B)" />
            <path d="M15 7H9V9H15V7Z" fill="var(--fill-0, #44483B)" />
            <path d="M18 7H16V9H18V7Z" fill="var(--fill-0, #44483B)" />
            <path d="M15 10H9V12H15V10Z" fill="var(--fill-0, #44483B)" />
            <path d="M18 10H16V12H18V10Z" fill="var(--fill-0, #44483B)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function StateLayer5() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center px-0 py-[4px] relative shrink-0 size-[56px]" data-name="State layer">
      <ReceiptLong />
      <ReceiptLong1 />
    </div>
  );
}

function IconContainer4() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[28px] shrink-0" data-name="Icon container">
      <StateLayer5 />
    </div>
  );
}

function Fakturagrunnlag() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-0 py-[4px] relative shrink-0 w-full" data-name="Fakturagrunnlag">
      <IconContainer4 />
    </div>
  );
}

function History() {
  return (
    <div className="absolute left-1/2 opacity-0 size-[24px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="history">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="history">
          <path d={svgPaths.p3486a460} fill="var(--fill-0, #44483B)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function History1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="history">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="history">
          <path d={svgPaths.p3486a460} fill="var(--fill-0, #44483B)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function StateLayer6() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center px-0 py-[4px] relative shrink-0 size-[56px]" data-name="State layer">
      <History />
      <History1 />
    </div>
  );
}

function IconContainer5() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[28px] shrink-0" data-name="Icon container">
      <StateLayer6 />
    </div>
  );
}

function Revisjonshistorikk() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-0 py-[4px] relative shrink-0 w-full" data-name="Revisjonshistorikk">
      <IconContainer5 />
    </div>
  );
}

function MenuOptions() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="menu options">
      <Forside />
      <TildelteRevisjoner />
      <AksepterteRevisjoner />
      <NavItem />
      <Fakturagrunnlag />
      <Revisjonshistorikk />
    </div>
  );
}

function KslNavigationRail() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-center overflow-clip pb-0 pt-[16px] px-0 relative shrink-0 w-[88px]" data-name="ksl Navigation Rail">
      <MenuFab />
      <MenuOptions />
    </div>
  );
}

function Icon3() {
  return (
    <div className="absolute left-1/2 size-[24px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon" opacity="0">
          <path d={svgPaths.p13485800} fill="var(--fill-0, #174295)" id="icon" />
        </g>
      </svg>
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="perm_identity">
          <path d={svgPaths.p24cfbd00} fill="var(--fill-0, #44483B)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function StateLayer7() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center px-0 py-[4px] relative shrink-0 size-[56px]" data-name="State layer">
      <Icon3 />
      <Icon4 />
    </div>
  );
}

function IconContainer6() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[28px] shrink-0" data-name="Icon container">
      <StateLayer7 />
    </div>
  );
}

function BuildingBlocksNavigationRailVerticalNavItem() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-0 py-[4px] shrink-0 sticky top-0 w-[88px]" data-name="Building Blocks/Navigation rail/Vertical nav item">
      <IconContainer6 />
    </div>
  );
}

function ExternalRevisorNavigationRail() {
  return (
    <div className="bg-white content-stretch flex flex-col h-full items-start relative shrink-0" data-name="External revisor Navigation Rail">
      <div aria-hidden="true" className="absolute border-[#c4c8b7] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <KslNavigationRail />
      <BuildingBlocksNavigationRailVerticalNavItem />
    </div>
  );
}

function TextContent() {
  return (
    <div className="absolute content-stretch flex flex-col h-[28px] items-start left-[56px] right-[56px] top-1/2 translate-y-[-50%]" data-name="Text content">
      <p className="font-['Quatro:Regular',sans-serif] leading-[28px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#1a1c16] text-[22px] text-nowrap w-full">Avviksoversikt</p>
    </div>
  );
}

function SectionHeader() {
  return (
    <div className="h-[64px] relative shrink-0 w-full" data-name="Section header">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[4px] py-[8px] relative size-full">
          <TextContent />
        </div>
      </div>
    </div>
  );
}

function Indicator() {
  return (
    <div className="absolute bottom-0 h-[14px] left-0 right-0" data-name="Indicator">
      <div className="absolute bg-[#4a671e] bottom-0 h-[3px] left-[2px] right-[2px] rounded-tl-[100px] rounded-tr-[100px]" data-name="Shape" />
    </div>
  );
}

function TabContents() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center justify-center min-h-px min-w-px overflow-clip px-0 py-[14px] relative shrink-0" data-name="Tab Contents">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#4a671e] text-[14px] text-center text-nowrap tracking-[0.1px]">
        <p className="leading-[20px]">Åpne avvik</p>
      </div>
      <Indicator />
    </div>
  );
}

function StateLayer8() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="State-layer">
      <div className="flex flex-col items-center justify-end overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-end px-[16px] py-0 relative size-full">
          <TabContents />
        </div>
      </div>
    </div>
  );
}

function Tab() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[48px] items-center justify-end overflow-clip relative shrink-0" data-name="Tab 1">
      <StateLayer8 />
    </div>
  );
}

function TabContents1() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center justify-center min-h-px min-w-px overflow-clip px-0 py-[14px] relative shrink-0" data-name="Tab Contents">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#44483b] text-[14px] text-center text-nowrap tracking-[0.1px]">
        <p className="leading-[20px]">Til handling nå</p>
      </div>
    </div>
  );
}

function StateLayer9() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="State-layer">
      <div className="flex flex-col items-center justify-end overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-end px-[16px] py-0 relative size-full">
          <TabContents1 />
        </div>
      </div>
    </div>
  );
}

function Tab1() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[48px] items-center justify-end overflow-clip relative shrink-0" data-name="Tab 2">
      <StateLayer9 />
    </div>
  );
}

function TabContents2() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center justify-center min-h-px min-w-px overflow-clip px-0 py-[14px] relative shrink-0" data-name="Tab Contents">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#44483b] text-[14px] text-center text-nowrap tracking-[0.1px]">
        <p className="leading-[20px]">Lukket avvik</p>
      </div>
    </div>
  );
}

function StateLayer10() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="State-layer">
      <div className="flex flex-col items-center justify-end overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-end px-[16px] py-0 relative size-full">
          <TabContents2 />
        </div>
      </div>
    </div>
  );
}

function Tab2() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[48px] items-center justify-end overflow-clip relative shrink-0" data-name="Tab 3">
      <StateLayer10 />
    </div>
  );
}

function TabGroup() {
  return (
    <div className="relative shrink-0 w-full" data-name="Tab group">
      <div className="content-stretch flex items-start pl-[52px] pr-0 py-0 relative w-full">
        <Tab />
        <Tab1 />
        <Tab2 />
      </div>
    </div>
  );
}

function Divider1() {
  return (
    <div className="h-px relative shrink-0 w-full" data-name="Divider">
      <div className="absolute inset-[0_0_-0.01%_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1512 1.00013">
          <g id="Divider">
            <line id="Divider_2" stroke="var(--stroke-0, #E3E3D9)" x1="4.37114e-08" x2="1512" y1="0.500132" y2="0.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Tabs() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Tabs">
      <TabGroup />
      <Divider1 />
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="heading">
      <SectionHeader />
      <Tabs />
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.pc423380} fill="var(--fill-0, #44483B)" id="icon" />
        </g>
      </svg>
    </div>
  );
}

function StateLayer11() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center px-[24px] py-[16px] relative shrink-0" data-name="State-layer">
      <Icon5 />
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#44483b] text-[16px] text-nowrap tracking-[0.15px]">
        <p className="leading-[24px]">Avansert søk</p>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="relative rounded-[100px] shrink-0" data-name="Content">
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[inherit]">
        <StateLayer11 />
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

function Content1() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full relative shrink-0 text-[#174295] text-[16px] tracking-[0.5px] w-[min-content]">
        <p className="leading-[24px]">Alle foretak</p>
      </div>
    </div>
  );
}

function StateLayer12() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative size-full">
          <Content1 />
        </div>
      </div>
    </div>
  );
}

function ListItemListItem0Density() {
  return (
    <div className="bg-[#dae2ff] content-stretch flex flex-col h-[56px] items-center justify-center min-h-[56px] relative rounded-[12px] shrink-0 w-[360px]" data-name="List item/List Item: 0 Density">
      <StateLayer12 />
    </div>
  );
}

function Badges() {
  return (
    <div className="bg-[#ba1a1a] content-stretch flex items-center justify-center max-w-[34px] min-w-[16px] overflow-clip px-[4px] py-0 relative rounded-[100px] shrink-0" data-name="Badges">
      <div className="basis-0 flex flex-col font-['Manrope:Medium',sans-serif] font-medium grow justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[11px] text-center text-white tracking-[0.5px]">
        <p className="leading-[16px]">&nbsp;</p>
      </div>
    </div>
  );
}

function LeadingElement() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Leading element">
      <Badges />
    </div>
  );
}

function Content2() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] tracking-[0.5px] w-full">
        <p className="leading-[24px]">Solheim Gård</p>
      </div>
      <p className="font-['Manrope:Bold',sans-serif] font-bold h-[20px] leading-[20px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#44483b] text-[14px] text-nowrap tracking-[0.25px] w-full">Forslag til møtetid mottatt</p>
    </div>
  );
}

function StateLayer13() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[16px] items-center justify-center px-[16px] py-[8px] relative size-full">
          <LeadingElement />
          <Content2 />
        </div>
      </div>
    </div>
  );
}

function ListItemListItem0Density1() {
  return (
    <div className="content-stretch flex flex-col h-[72px] items-center justify-center min-h-[72px] relative rounded-[12px] shrink-0 w-full" data-name="List item/List Item: 0 Density">
      <StateLayer13 />
    </div>
  );
}

function Badges1() {
  return (
    <div className="bg-[#ba1a1a] content-stretch flex items-center justify-center max-w-[34px] min-w-[16px] overflow-clip px-[4px] py-0 relative rounded-[100px] shrink-0" data-name="Badges">
      <div className="basis-0 flex flex-col font-['Manrope:Medium',sans-serif] font-medium grow justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[11px] text-center text-white tracking-[0.5px]">
        <p className="leading-[16px]">&nbsp;</p>
      </div>
    </div>
  );
}

function LeadingElement1() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Leading element">
      <Badges1 />
    </div>
  );
}

function Content3() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] tracking-[0.5px] w-full">
        <p className="leading-[24px]">Bjørkli Økologiske</p>
      </div>
      <p className="font-['Manrope:Bold',sans-serif] font-bold h-[20px] leading-[20px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#44483b] text-[14px] text-nowrap tracking-[0.25px] w-full">Forslag til møtetid mottatt</p>
    </div>
  );
}

function StateLayer14() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[16px] items-center justify-center px-[16px] py-[8px] relative size-full">
          <LeadingElement1 />
          <Content3 />
        </div>
      </div>
    </div>
  );
}

function ListItemListItem0Density2() {
  return (
    <div className="content-stretch flex flex-col h-[72px] items-center justify-center min-h-[72px] relative rounded-[12px] shrink-0 w-full" data-name="List item/List Item: 0 Density">
      <StateLayer14 />
    </div>
  );
}

function Badges2() {
  return (
    <div className="bg-[#ba1a1a] content-stretch flex items-center justify-center max-w-[34px] min-w-[16px] overflow-clip px-[4px] py-0 relative rounded-[100px] shrink-0" data-name="Badges">
      <div className="basis-0 flex flex-col font-['Manrope:Medium',sans-serif] font-medium grow justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[11px] text-center text-white tracking-[0.5px]">
        <p className="leading-[16px]">&nbsp;</p>
      </div>
    </div>
  );
}

function LeadingElement2() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Leading element">
      <Badges2 />
    </div>
  );
}

function Content4() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] tracking-[0.5px] w-full">
        <p className="leading-[24px]">Haugen Gård</p>
      </div>
      <p className="font-['Manrope:Bold',sans-serif] font-bold h-[20px] leading-[20px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#44483b] text-[14px] text-nowrap tracking-[0.25px] w-full">Dokument levert</p>
    </div>
  );
}

function StateLayer15() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[16px] items-center justify-center px-[16px] py-[8px] relative size-full">
          <LeadingElement2 />
          <Content4 />
        </div>
      </div>
    </div>
  );
}

function ListItemListItem0Density3() {
  return (
    <div className="content-stretch flex flex-col h-[72px] items-center justify-center min-h-[72px] relative rounded-[12px] shrink-0 w-full" data-name="List item/List Item: 0 Density">
      <StateLayer15 />
    </div>
  );
}

function Badges3() {
  return (
    <div className="bg-[#ba1a1a] content-stretch flex items-center justify-center max-w-[34px] min-w-[16px] overflow-clip px-[4px] py-0 relative rounded-[100px] shrink-0" data-name="Badges">
      <div className="basis-0 flex flex-col font-['Manrope:Medium',sans-serif] font-medium grow justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[11px] text-center text-white tracking-[0.5px]">
        <p className="leading-[16px]">&nbsp;</p>
      </div>
    </div>
  );
}

function LeadingElement3() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Leading element">
      <Badges3 />
    </div>
  );
}

function Content5() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] tracking-[0.5px] w-full">
        <p className="leading-[24px]">Nordby Gård</p>
      </div>
      <p className="font-['Manrope:Bold',sans-serif] font-bold h-[20px] leading-[20px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#44483b] text-[14px] text-nowrap tracking-[0.25px] w-full">Dokument levert</p>
    </div>
  );
}

function StateLayer16() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[16px] items-center justify-center px-[16px] py-[8px] relative size-full">
          <LeadingElement3 />
          <Content5 />
        </div>
      </div>
    </div>
  );
}

function ListItemListItem0Density4() {
  return (
    <div className="content-stretch flex flex-col h-[72px] items-center justify-center min-h-[72px] relative rounded-[12px] shrink-0 w-full" data-name="List item/List Item: 0 Density">
      <StateLayer16 />
    </div>
  );
}

function Badges4() {
  return (
    <div className="bg-[#ba1a1a] content-stretch flex items-center justify-center max-w-[34px] min-w-[16px] overflow-clip px-[4px] py-0 relative rounded-[100px] shrink-0" data-name="Badges">
      <div className="basis-0 flex flex-col font-['Manrope:Medium',sans-serif] font-medium grow justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[11px] text-center text-white tracking-[0.5px]">
        <p className="leading-[16px]">&nbsp;</p>
      </div>
    </div>
  );
}

function LeadingElement4() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Leading element">
      <Badges4 />
    </div>
  );
}

function Content6() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] tracking-[0.5px] w-full">
        <p className="leading-[24px]">Lund Gård</p>
      </div>
      <p className="font-['Manrope:Bold',sans-serif] font-bold h-[20px] leading-[20px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#44483b] text-[14px] text-nowrap tracking-[0.25px] w-full">Dokument levert</p>
    </div>
  );
}

function StateLayer17() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[16px] items-center justify-center px-[16px] py-[8px] relative size-full">
          <LeadingElement4 />
          <Content6 />
        </div>
      </div>
    </div>
  );
}

function ListItemListItem0Density5() {
  return (
    <div className="content-stretch flex flex-col h-[72px] items-center justify-center min-h-[72px] relative rounded-[12px] shrink-0 w-full" data-name="List item/List Item: 0 Density">
      <StateLayer17 />
    </div>
  );
}

function Badges5() {
  return (
    <div className="bg-[#ba1a1a] content-stretch flex items-center justify-center max-w-[34px] min-w-[16px] overflow-clip px-[4px] py-0 relative rounded-[100px] shrink-0" data-name="Badges">
      <div className="basis-0 flex flex-col font-['Manrope:Medium',sans-serif] font-medium grow justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[11px] text-center text-white tracking-[0.5px]">
        <p className="leading-[16px]">&nbsp;</p>
      </div>
    </div>
  );
}

function LeadingElement5() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Leading element">
      <Badges5 />
    </div>
  );
}

function Content7() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] tracking-[0.5px] w-full">
        <p className="leading-[24px]">Fjell Gård</p>
      </div>
      <p className="font-['Manrope:Bold',sans-serif] font-bold h-[20px] leading-[20px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#44483b] text-[14px] text-nowrap tracking-[0.25px] w-full">Ønsker fristforlengelse</p>
    </div>
  );
}

function StateLayer18() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[16px] items-center justify-center px-[16px] py-[8px] relative size-full">
          <LeadingElement5 />
          <Content7 />
        </div>
      </div>
    </div>
  );
}

function ListItemListItem0Density6() {
  return (
    <div className="content-stretch flex flex-col h-[72px] items-center justify-center min-h-[72px] relative rounded-[12px] shrink-0 w-full" data-name="List item/List Item: 0 Density">
      <StateLayer18 />
    </div>
  );
}

function Content8() {
  return (
    <div className="basis-0 content-stretch flex flex-col font-['Manrope:Regular',sans-serif] font-normal grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] tracking-[0.5px] w-full">
        <p className="leading-[24px]">Koll Gård</p>
      </div>
      <p className="h-[20px] leading-[20px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#44483b] text-[14px] text-nowrap tracking-[0.25px] w-full">Avventer dokumentasjon</p>
    </div>
  );
}

function StateLayer19() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative size-full">
          <Content8 />
        </div>
      </div>
    </div>
  );
}

function ListItemListItem0Density7() {
  return (
    <div className="content-stretch flex flex-col h-[72px] items-center justify-center min-h-[72px] relative rounded-[12px] shrink-0 w-full" data-name="List item/List Item: 0 Density">
      <StateLayer19 />
    </div>
  );
}

function Content9() {
  return (
    <div className="basis-0 content-stretch flex flex-col font-['Manrope:Regular',sans-serif] font-normal grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] tracking-[0.5px] w-full">
        <p className="leading-[24px]">Rosenlund Gård</p>
      </div>
      <p className="h-[20px] leading-[20px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#44483b] text-[14px] text-nowrap tracking-[0.25px] w-full">Avventer møteforslag</p>
    </div>
  );
}

function StateLayer20() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative size-full">
          <Content9 />
        </div>
      </div>
    </div>
  );
}

function ListItemListItem0Density8() {
  return (
    <div className="content-stretch flex flex-col h-[72px] items-center justify-center min-h-[72px] relative rounded-[12px] shrink-0 w-full" data-name="List item/List Item: 0 Density">
      <StateLayer20 />
    </div>
  );
}

function Content10() {
  return (
    <div className="basis-0 content-stretch flex flex-col font-['Manrope:Regular',sans-serif] font-normal grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] tracking-[0.5px] w-full">
        <p className="leading-[24px]">Lien Gård</p>
      </div>
      <p className="h-[20px] leading-[20px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#44483b] text-[14px] text-nowrap tracking-[0.25px] w-full">Avventer møteforslag</p>
    </div>
  );
}

function StateLayer21() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative size-full">
          <Content10 />
        </div>
      </div>
    </div>
  );
}

function ListItemListItem0Density9() {
  return (
    <div className="content-stretch flex flex-col h-[72px] items-center justify-center min-h-[72px] relative rounded-[12px] shrink-0 w-full" data-name="List item/List Item: 0 Density">
      <StateLayer21 />
    </div>
  );
}

function Content11() {
  return (
    <div className="basis-0 content-stretch flex flex-col font-['Manrope:Regular',sans-serif] font-normal grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] tracking-[0.5px] w-full">
        <p className="leading-[24px]">Fjellstad Bruk</p>
      </div>
      <p className="h-[20px] leading-[20px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#44483b] text-[14px] text-nowrap tracking-[0.25px] w-full">Avventer dokumentasjon</p>
    </div>
  );
}

function StateLayer22() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative size-full">
          <Content11 />
        </div>
      </div>
    </div>
  );
}

function ListItemListItem0Density10() {
  return (
    <div className="content-stretch flex flex-col h-[72px] items-center justify-center min-h-[72px] relative rounded-[12px] shrink-0 w-full" data-name="List item/List Item: 0 Density">
      <StateLayer22 />
    </div>
  );
}

function Content12() {
  return (
    <div className="basis-0 content-stretch flex flex-col font-['Manrope:Regular',sans-serif] font-normal grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] tracking-[0.5px] w-full">
        <p className="leading-[24px]">Bjørkli Økologiske</p>
      </div>
      <p className="h-[20px] leading-[20px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#44483b] text-[14px] text-nowrap tracking-[0.25px] w-full">Avventer dokumentasjon</p>
    </div>
  );
}

function StateLayer23() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative size-full">
          <Content12 />
        </div>
      </div>
    </div>
  );
}

function ListItemListItem0Density11() {
  return (
    <div className="content-stretch flex flex-col h-[72px] items-center justify-center min-h-[72px] relative rounded-[12px] shrink-0 w-full" data-name="List item/List Item: 0 Density">
      <StateLayer23 />
    </div>
  );
}

function Content13() {
  return (
    <div className="basis-0 content-stretch flex flex-col font-['Manrope:Regular',sans-serif] font-normal grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] tracking-[0.5px] w-full">
        <p className="leading-[24px]">Grønnhage AS</p>
      </div>
      <p className="h-[20px] leading-[20px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#44483b] text-[14px] text-nowrap tracking-[0.25px] w-full">Avventer dokumentasjon</p>
    </div>
  );
}

function StateLayer24() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative size-full">
          <Content13 />
        </div>
      </div>
    </div>
  );
}

function ListItemListItem0Density12() {
  return (
    <div className="content-stretch flex flex-col h-[72px] items-center justify-center min-h-[72px] relative rounded-[12px] shrink-0 w-full" data-name="List item/List Item: 0 Density">
      <StateLayer24 />
    </div>
  );
}

function Content14() {
  return (
    <div className="basis-0 content-stretch flex flex-col font-['Manrope:Regular',sans-serif] font-normal grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] tracking-[0.5px] w-full">
        <p className="leading-[24px]">Naturens Hjerte</p>
      </div>
      <p className="h-[20px] leading-[20px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#44483b] text-[14px] text-nowrap tracking-[0.25px] w-full">Avventer dokumentasjon</p>
    </div>
  );
}

function StateLayer25() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative size-full">
          <Content14 />
        </div>
      </div>
    </div>
  );
}

function ListItemListItem0Density13() {
  return (
    <div className="content-stretch flex flex-col h-[72px] items-center justify-center min-h-[72px] relative rounded-[12px] shrink-0 w-full" data-name="List item/List Item: 0 Density">
      <StateLayer25 />
    </div>
  );
}

function Content15() {
  return (
    <div className="basis-0 content-stretch flex flex-col font-['Manrope:Regular',sans-serif] font-normal grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] tracking-[0.5px] w-full">
        <p className="leading-[24px]">EkoStad AS</p>
      </div>
      <p className="h-[20px] leading-[20px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#44483b] text-[14px] text-nowrap tracking-[0.25px] w-full">Avventer dokumentasjon</p>
    </div>
  );
}

function StateLayer26() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative size-full">
          <Content15 />
        </div>
      </div>
    </div>
  );
}

function ListItemListItem0Density14() {
  return (
    <div className="content-stretch flex flex-col h-[72px] items-center justify-center min-h-[72px] relative rounded-[12px] shrink-0 w-full" data-name="List item/List Item: 0 Density">
      <StateLayer26 />
    </div>
  );
}

function Farms() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[360px]" data-name="farms">
      <ListItemListItem0Density1 />
      <ListItemListItem0Density2 />
      <ListItemListItem0Density3 />
      <ListItemListItem0Density4 />
      <ListItemListItem0Density5 />
      <ListItemListItem0Density6 />
      <ListItemListItem0Density7 />
      <ListItemListItem0Density8 />
      <ListItemListItem0Density9 />
      <ListItemListItem0Density10 />
      <ListItemListItem0Density11 />
      <ListItemListItem0Density12 />
      <ListItemListItem0Density13 />
      <ListItemListItem0Density14 />
    </div>
  );
}

function ForetakList() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-full items-start p-[16px] relative shrink-0 w-[392px] z-[2]" data-name="Foretak list">
      <div aria-hidden="true" className="absolute border-[#c4c8b7] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <Button />
      <ListItemListItem0Density />
      <Farms />
    </div>
  );
}

function ArrowDropDown() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="arrow_drop_down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="arrow_drop_down">
          <path d="M12 15L7 10H17L12 15Z" fill="var(--fill-0, #44483B)" id="icon" />
        </g>
      </svg>
    </div>
  );
}

function LeadingElement6() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Leading element">
      <ArrowDropDown />
    </div>
  );
}

function Content16() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-center overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[14px] tracking-[0.1px] w-full">
        <p className="leading-[20px]">Avvik Type</p>
      </div>
    </div>
  );
}

function StateLayer27() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative size-full">
          <LeadingElement6 />
          <Content16 />
        </div>
      </div>
    </div>
  );
}

function Divider2() {
  return (
    <div className="h-px relative shrink-0 w-full" data-name="Divider">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 160 1.00003">
        <g id="Divider">
          <line id="Divider_2" stroke="var(--stroke-0, #C4C8B7)" x1="4.37114e-08" x2="160" y1="0.500028" y2="0.500014" />
        </g>
      </svg>
    </div>
  );
}

function ListItemListItem0Density15() {
  return (
    <div className="content-stretch flex flex-col h-[56px] items-center justify-center min-h-[56px] relative shrink-0 w-full" data-name="List item/List Item: 0 Density">
      <StateLayer27 />
      <Divider2 />
    </div>
  );
}

function Icon6() {
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

function StateLayer28() {
  return (
    <div className="content-stretch flex gap-[8px] h-[32px] items-center justify-center pl-[8px] pr-[16px] py-[6px] relative shrink-0" data-name="state-layer">
      <Icon6 />
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#410002] text-[14px] text-center text-nowrap tracking-[0.1px]">
        <p className="leading-[20px]">Kritisk</p>
      </div>
    </div>
  );
}

function AssistiveChip() {
  return (
    <div className="bg-[#ffdad6] relative rounded-[8px] shrink-0" data-name="Assistive chip">
      <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[inherit]">
        <StateLayer28 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#c4c8b7] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function LeadingElement7() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Leading element">
      <AssistiveChip />
    </div>
  );
}

function StateLayer29() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[16px] items-center justify-center px-[16px] py-[8px] relative size-full">
          <LeadingElement7 />
        </div>
      </div>
    </div>
  );
}

function Divider3() {
  return (
    <div className="h-px relative shrink-0 w-full" data-name="Divider">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 160 1.00003">
        <g id="Divider">
          <line id="Divider_2" stroke="var(--stroke-0, #C4C8B7)" x1="4.37114e-08" x2="160" y1="0.500028" y2="0.500014" />
        </g>
      </svg>
    </div>
  );
}

function ListItemListItem0Density16() {
  return (
    <div className="content-stretch flex flex-col h-[56px] items-center justify-center min-h-[56px] relative shrink-0 w-full" data-name="List item/List Item: 0 Density">
      <StateLayer29 />
      <Divider3 />
    </div>
  );
}

function Icon7() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="report_problem">
          <path d={svgPaths.p21d3df00} fill="var(--fill-0, #3D2100)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function StateLayer30() {
  return (
    <div className="content-stretch flex gap-[8px] h-[32px] items-center justify-center pl-[8px] pr-[16px] py-[6px] relative shrink-0" data-name="state-layer">
      <Icon7 />
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#3d2100] text-[14px] text-center text-nowrap tracking-[0.1px]">
        <p className="leading-[20px]">Avvik</p>
      </div>
    </div>
  );
}

function AssistiveChip1() {
  return (
    <div className="bg-[#fdd19f] relative rounded-[8px] shrink-0" data-name="Assistive chip">
      <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[inherit]">
        <StateLayer30 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#c4c8b7] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function LeadingElement8() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Leading element">
      <AssistiveChip1 />
    </div>
  );
}

function StateLayer31() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[16px] items-center justify-center px-[16px] py-[8px] relative size-full">
          <LeadingElement8 />
        </div>
      </div>
    </div>
  );
}

function Divider4() {
  return (
    <div className="h-px relative shrink-0 w-full" data-name="Divider">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 160 1.00003">
        <g id="Divider">
          <line id="Divider_2" stroke="var(--stroke-0, #C4C8B7)" x1="4.37114e-08" x2="160" y1="0.500028" y2="0.500014" />
        </g>
      </svg>
    </div>
  );
}

function ListItemListItem0Density17() {
  return (
    <div className="content-stretch flex flex-col h-[56px] items-center justify-center min-h-[56px] relative shrink-0 w-full" data-name="List item/List Item: 0 Density">
      <StateLayer31 />
      <Divider4 />
    </div>
  );
}

function Icon8() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="report_problem">
          <path d={svgPaths.p21d3df00} fill="var(--fill-0, #3D2C00)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function StateLayer32() {
  return (
    <div className="content-stretch flex gap-[8px] h-[32px] items-center justify-center pl-[8px] pr-[16px] py-[6px] relative shrink-0" data-name="state-layer">
      <Icon8 />
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#3d2c00] text-[14px] text-center text-nowrap tracking-[0.1px]">
        <p className="leading-[20px]">Lite</p>
      </div>
    </div>
  );
}

function AssistiveChip2() {
  return (
    <div className="bg-[#fdeeb1] relative rounded-[8px] shrink-0" data-name="Assistive chip">
      <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[inherit]">
        <StateLayer32 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#c4c8b7] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function LeadingElement9() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Leading element">
      <AssistiveChip2 />
    </div>
  );
}

function StateLayer33() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[16px] items-center justify-center px-[16px] py-[8px] relative size-full">
          <LeadingElement9 />
        </div>
      </div>
    </div>
  );
}

function Divider5() {
  return (
    <div className="h-px relative shrink-0 w-full" data-name="Divider">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 160 1.00003">
        <g id="Divider">
          <line id="Divider_2" stroke="var(--stroke-0, #C4C8B7)" x1="4.37114e-08" x2="160" y1="0.500028" y2="0.500014" />
        </g>
      </svg>
    </div>
  );
}

function ListItemListItem0Density18() {
  return (
    <div className="content-stretch flex flex-col h-[56px] items-center justify-center min-h-[56px] relative shrink-0 w-full" data-name="List item/List Item: 0 Density">
      <StateLayer33 />
      <Divider5 />
    </div>
  );
}

function TableColumn() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[160px]" data-name="Table Column 1">
      <ListItemListItem0Density15 />
      <ListItemListItem0Density16 />
      <ListItemListItem0Density16 />
      <ListItemListItem0Density16 />
      <ListItemListItem0Density16 />
      <ListItemListItem0Density16 />
      <ListItemListItem0Density17 />
      <ListItemListItem0Density17 />
      <ListItemListItem0Density17 />
      <ListItemListItem0Density18 />
      <ListItemListItem0Density18 />
      <ListItemListItem0Density18 />
      <ListItemListItem0Density16 />
      <ListItemListItem0Density16 />
      <ListItemListItem0Density17 />
      <ListItemListItem0Density17 />
      <ListItemListItem0Density17 />
      <ListItemListItem0Density17 />
      <ListItemListItem0Density17 />
      <ListItemListItem0Density17 />
      <ListItemListItem0Density17 />
      <ListItemListItem0Density17 />
      <ListItemListItem0Density17 />
      <ListItemListItem0Density17 />
      <ListItemListItem0Density18 />
      <ListItemListItem0Density18 />
      <ListItemListItem0Density18 />
    </div>
  );
}

function ArrowDropDown1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="arrow_drop_down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="arrow_drop_down">
          <path d="M12 15L7 10H17L12 15Z" fill="var(--fill-0, #44483B)" id="icon" />
        </g>
      </svg>
    </div>
  );
}

function LeadingElement10() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Leading element">
      <ArrowDropDown1 />
    </div>
  );
}

function Content17() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[14px] tracking-[0.1px] w-full">
        <p className="leading-[20px]">Produsent</p>
      </div>
    </div>
  );
}

function StateLayer34() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative size-full">
          <LeadingElement10 />
          <Content17 />
        </div>
      </div>
    </div>
  );
}

function Divider6() {
  return (
    <div className="h-px relative shrink-0 w-[360px]" data-name="Divider">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 360 1.00003">
        <g id="Divider">
          <line id="Divider_2" stroke="var(--stroke-0, #C4C8B7)" x1="4.37114e-08" x2="360" y1="0.500031" y2="0.5" />
        </g>
      </svg>
    </div>
  );
}

function ListItemListItem0Density19() {
  return (
    <div className="content-stretch flex flex-col h-[56px] items-start justify-center min-h-[56px] relative shrink-0 w-full" data-name="List item/List Item: 0 Density">
      <StateLayer34 />
      <Divider6 />
    </div>
  );
}

function Content18() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full relative shrink-0 text-[#1a1c16] text-[14px] tracking-[0.25px] w-[min-content]">
        <p className="leading-[20px]">Bjørkli Økologiske</p>
      </div>
    </div>
  );
}

function StateLayer35() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative size-full">
          <Content18 />
        </div>
      </div>
    </div>
  );
}

function Divider7() {
  return (
    <div className="h-px relative shrink-0 w-full" data-name="Divider">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 160 1.00003">
        <g id="Divider">
          <line id="Divider_2" stroke="var(--stroke-0, #C4C8B7)" x1="4.37114e-08" x2="160" y1="0.500028" y2="0.500014" />
        </g>
      </svg>
    </div>
  );
}

function ListItemListItem0Density20() {
  return (
    <div className="content-stretch flex flex-col h-[56px] items-center justify-center min-h-[56px] relative shrink-0 w-full" data-name="List item/List Item: 0 Density">
      <StateLayer35 />
      <Divider7 />
    </div>
  );
}

function Content19() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full relative shrink-0 text-[#1a1c16] text-[14px] tracking-[0.25px] w-[min-content]">
        <p className="leading-[20px]">Solheim Gård</p>
      </div>
    </div>
  );
}

function StateLayer36() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative size-full">
          <Content19 />
        </div>
      </div>
    </div>
  );
}

function Divider8() {
  return (
    <div className="h-px relative shrink-0 w-full" data-name="Divider">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 160 1.00003">
        <g id="Divider">
          <line id="Divider_2" stroke="var(--stroke-0, #C4C8B7)" x1="4.37114e-08" x2="160" y1="0.500028" y2="0.500014" />
        </g>
      </svg>
    </div>
  );
}

function ListItemListItem0Density21() {
  return (
    <div className="content-stretch flex flex-col h-[56px] items-center justify-center min-h-[56px] relative shrink-0 w-full" data-name="List item/List Item: 0 Density">
      <StateLayer36 />
      <Divider8 />
    </div>
  );
}

function Content20() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full relative shrink-0 text-[#1a1c16] text-[14px] tracking-[0.25px] w-[min-content]">
        <p className="leading-[20px]">Fjellstad Bruk</p>
      </div>
    </div>
  );
}

function StateLayer37() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative size-full">
          <Content20 />
        </div>
      </div>
    </div>
  );
}

function Divider9() {
  return (
    <div className="h-px relative shrink-0 w-full" data-name="Divider">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 160 1.00003">
        <g id="Divider">
          <line id="Divider_2" stroke="var(--stroke-0, #C4C8B7)" x1="4.37114e-08" x2="160" y1="0.500028" y2="0.500014" />
        </g>
      </svg>
    </div>
  );
}

function ListItemListItem0Density22() {
  return (
    <div className="content-stretch flex flex-col h-[56px] items-center justify-center min-h-[56px] relative shrink-0 w-full" data-name="List item/List Item: 0 Density">
      <StateLayer37 />
      <Divider9 />
    </div>
  );
}

function Content21() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full relative shrink-0 text-[#1a1c16] text-[14px] tracking-[0.25px] w-[min-content]">
        <p className="leading-[20px]">Haugstad Gård</p>
      </div>
    </div>
  );
}

function StateLayer38() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative size-full">
          <Content21 />
        </div>
      </div>
    </div>
  );
}

function Divider10() {
  return (
    <div className="h-px relative shrink-0 w-full" data-name="Divider">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 160 1.00003">
        <g id="Divider">
          <line id="Divider_2" stroke="var(--stroke-0, #C4C8B7)" x1="4.37114e-08" x2="160" y1="0.500028" y2="0.500014" />
        </g>
      </svg>
    </div>
  );
}

function ListItemListItem0Density23() {
  return (
    <div className="content-stretch flex flex-col h-[56px] items-center justify-center min-h-[56px] relative shrink-0 w-full" data-name="List item/List Item: 0 Density">
      <StateLayer38 />
      <Divider10 />
    </div>
  );
}

function Content22() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full relative shrink-0 text-[#1a1c16] text-[14px] tracking-[0.25px] w-[min-content]">
        <p className="leading-[20px]">Elveli Gård</p>
      </div>
    </div>
  );
}

function StateLayer39() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative size-full">
          <Content22 />
        </div>
      </div>
    </div>
  );
}

function Divider11() {
  return (
    <div className="h-px relative shrink-0 w-full" data-name="Divider">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 160 1.00003">
        <g id="Divider">
          <line id="Divider_2" stroke="var(--stroke-0, #C4C8B7)" x1="4.37114e-08" x2="160" y1="0.500028" y2="0.500014" />
        </g>
      </svg>
    </div>
  );
}

function ListItemListItem0Density24() {
  return (
    <div className="content-stretch flex flex-col h-[56px] items-center justify-center min-h-[56px] relative shrink-0 w-full" data-name="List item/List Item: 0 Density">
      <StateLayer39 />
      <Divider11 />
    </div>
  );
}

function Content23() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full relative shrink-0 text-[#1a1c16] text-[14px] tracking-[0.25px] w-[min-content]">
        <p className="leading-[20px]">Fjellstad Bruk</p>
      </div>
    </div>
  );
}

function StateLayer40() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative size-full">
          <Content23 />
        </div>
      </div>
    </div>
  );
}

function Divider12() {
  return (
    <div className="h-px relative shrink-0 w-[360px]" data-name="Divider">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 360 1.00003">
        <g id="Divider">
          <line id="Divider_2" stroke="var(--stroke-0, #C4C8B7)" x1="4.37114e-08" x2="360" y1="0.500031" y2="0.5" />
        </g>
      </svg>
    </div>
  );
}

function ListItemListItem0Density25() {
  return (
    <div className="content-stretch flex flex-col h-[56px] items-center justify-center min-h-[56px] relative shrink-0 w-full" data-name="List item/List Item: 0 Density">
      <StateLayer40 />
      <Divider12 />
    </div>
  );
}

function Content24() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full relative shrink-0 text-[#1a1c16] text-[14px] tracking-[0.25px] w-[min-content]">
        <p className="leading-[20px]">Bjørkli Økologiske</p>
      </div>
    </div>
  );
}

function StateLayer41() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative size-full">
          <Content24 />
        </div>
      </div>
    </div>
  );
}

function Divider13() {
  return (
    <div className="h-px relative shrink-0 w-[360px]" data-name="Divider">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 360 1.00003">
        <g id="Divider">
          <line id="Divider_2" stroke="var(--stroke-0, #C4C8B7)" x1="4.37114e-08" x2="360" y1="0.500031" y2="0.5" />
        </g>
      </svg>
    </div>
  );
}

function ListItemListItem0Density26() {
  return (
    <div className="content-stretch flex flex-col h-[56px] items-center justify-center min-h-[56px] relative shrink-0 w-full" data-name="List item/List Item: 0 Density">
      <StateLayer41 />
      <Divider13 />
    </div>
  );
}

function Content25() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full relative shrink-0 text-[#1a1c16] text-[14px] tracking-[0.25px] w-[min-content]">
        <p className="leading-[20px]">Lundegaard Garden</p>
      </div>
    </div>
  );
}

function StateLayer42() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative size-full">
          <Content25 />
        </div>
      </div>
    </div>
  );
}

function Divider14() {
  return (
    <div className="h-px relative shrink-0 w-[360px]" data-name="Divider">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 360 1.00003">
        <g id="Divider">
          <line id="Divider_2" stroke="var(--stroke-0, #C4C8B7)" x1="4.37114e-08" x2="360" y1="0.500031" y2="0.5" />
        </g>
      </svg>
    </div>
  );
}

function ListItemListItem0Density27() {
  return (
    <div className="content-stretch flex flex-col h-[56px] items-center justify-center min-h-[56px] relative shrink-0 w-full" data-name="List item/List Item: 0 Density">
      <StateLayer42 />
      <Divider14 />
    </div>
  );
}

function Content26() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full relative shrink-0 text-[#1a1c16] text-[14px] tracking-[0.25px] w-[min-content]">
        <p className="leading-[20px]">Grønn Frukt</p>
      </div>
    </div>
  );
}

function StateLayer43() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative size-full">
          <Content26 />
        </div>
      </div>
    </div>
  );
}

function Divider15() {
  return (
    <div className="h-px relative shrink-0 w-[360px]" data-name="Divider">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 360 1.00003">
        <g id="Divider">
          <line id="Divider_2" stroke="var(--stroke-0, #C4C8B7)" x1="4.37114e-08" x2="360" y1="0.500031" y2="0.5" />
        </g>
      </svg>
    </div>
  );
}

function ListItemListItem0Density28() {
  return (
    <div className="content-stretch flex flex-col h-[56px] items-center justify-center min-h-[56px] relative shrink-0 w-full" data-name="List item/List Item: 0 Density">
      <StateLayer43 />
      <Divider15 />
    </div>
  );
}

function Content27() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full relative shrink-0 text-[#1a1c16] text-[14px] tracking-[0.25px] w-[min-content]">
        <p className="leading-[20px]">Hagen i Bakgården</p>
      </div>
    </div>
  );
}

function StateLayer44() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative size-full">
          <Content27 />
        </div>
      </div>
    </div>
  );
}

function Divider16() {
  return (
    <div className="h-px relative shrink-0 w-[360px]" data-name="Divider">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 360 1.00003">
        <g id="Divider">
          <line id="Divider_2" stroke="var(--stroke-0, #C4C8B7)" x1="4.37114e-08" x2="360" y1="0.500031" y2="0.5" />
        </g>
      </svg>
    </div>
  );
}

function ListItemListItem0Density29() {
  return (
    <div className="content-stretch flex flex-col h-[56px] items-center justify-center min-h-[56px] relative shrink-0 w-full" data-name="List item/List Item: 0 Density">
      <StateLayer44 />
      <Divider16 />
    </div>
  );
}

function Content28() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full relative shrink-0 text-[#1a1c16] text-[14px] tracking-[0.25px] w-[min-content]">
        <p className="leading-[20px]">EcoFarm Norway</p>
      </div>
    </div>
  );
}

function StateLayer45() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative size-full">
          <Content28 />
        </div>
      </div>
    </div>
  );
}

function Divider17() {
  return (
    <div className="h-px relative shrink-0 w-[360px]" data-name="Divider">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 360 1.00003">
        <g id="Divider">
          <line id="Divider_2" stroke="var(--stroke-0, #C4C8B7)" x1="4.37114e-08" x2="360" y1="0.500031" y2="0.5" />
        </g>
      </svg>
    </div>
  );
}

function ListItemListItem0Density30() {
  return (
    <div className="content-stretch flex flex-col h-[56px] items-center justify-center min-h-[56px] relative shrink-0 w-full" data-name="List item/List Item: 0 Density">
      <StateLayer45 />
      <Divider17 />
    </div>
  );
}

function Content29() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full relative shrink-0 text-[#1a1c16] text-[14px] tracking-[0.25px] w-[min-content]">
        <p className="leading-[20px]">Skoghaven Organics</p>
      </div>
    </div>
  );
}

function StateLayer46() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative size-full">
          <Content29 />
        </div>
      </div>
    </div>
  );
}

function Divider18() {
  return (
    <div className="h-px relative shrink-0 w-[360px]" data-name="Divider">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 360 1.00003">
        <g id="Divider">
          <line id="Divider_2" stroke="var(--stroke-0, #C4C8B7)" x1="4.37114e-08" x2="360" y1="0.500031" y2="0.5" />
        </g>
      </svg>
    </div>
  );
}

function ListItemListItem0Density31() {
  return (
    <div className="content-stretch flex flex-col h-[56px] items-center justify-center min-h-[56px] relative shrink-0 w-full" data-name="List item/List Item: 0 Density">
      <StateLayer46 />
      <Divider18 />
    </div>
  );
}

function Content30() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full relative shrink-0 text-[#1a1c16] text-[14px] tracking-[0.25px] w-[min-content]">
        <p className="leading-[20px]">Naturens Mat</p>
      </div>
    </div>
  );
}

function StateLayer47() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative size-full">
          <Content30 />
        </div>
      </div>
    </div>
  );
}

function Divider19() {
  return (
    <div className="h-px relative shrink-0 w-[360px]" data-name="Divider">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 360 1.00003">
        <g id="Divider">
          <line id="Divider_2" stroke="var(--stroke-0, #C4C8B7)" x1="4.37114e-08" x2="360" y1="0.500031" y2="0.5" />
        </g>
      </svg>
    </div>
  );
}

function ListItemListItem0Density32() {
  return (
    <div className="content-stretch flex flex-col h-[56px] items-center justify-center min-h-[56px] relative shrink-0 w-full" data-name="List item/List Item: 0 Density">
      <StateLayer47 />
      <Divider19 />
    </div>
  );
}

function Content31() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full relative shrink-0 text-[#1a1c16] text-[14px] tracking-[0.25px] w-[min-content]">
        <p className="leading-[20px]">Soleil Biofarm</p>
      </div>
    </div>
  );
}

function StateLayer48() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative size-full">
          <Content31 />
        </div>
      </div>
    </div>
  );
}

function Divider20() {
  return (
    <div className="h-px relative shrink-0 w-[360px]" data-name="Divider">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 360 1.00003">
        <g id="Divider">
          <line id="Divider_2" stroke="var(--stroke-0, #C4C8B7)" x1="4.37114e-08" x2="360" y1="0.500031" y2="0.5" />
        </g>
      </svg>
    </div>
  );
}

function ListItemListItem0Density33() {
  return (
    <div className="content-stretch flex flex-col h-[56px] items-center justify-center min-h-[56px] relative shrink-0 w-full" data-name="List item/List Item: 0 Density">
      <StateLayer48 />
      <Divider20 />
    </div>
  );
}

function Content32() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full relative shrink-0 text-[#1a1c16] text-[14px] tracking-[0.25px] w-[min-content]">
        <p className="leading-[20px]">Hjemmelaget Økologi</p>
      </div>
    </div>
  );
}

function StateLayer49() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative size-full">
          <Content32 />
        </div>
      </div>
    </div>
  );
}

function Divider21() {
  return (
    <div className="h-px relative shrink-0 w-[360px]" data-name="Divider">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 360 1.00003">
        <g id="Divider">
          <line id="Divider_2" stroke="var(--stroke-0, #C4C8B7)" x1="4.37114e-08" x2="360" y1="0.500031" y2="0.5" />
        </g>
      </svg>
    </div>
  );
}

function ListItemListItem0Density34() {
  return (
    <div className="content-stretch flex flex-col h-[56px] items-center justify-center min-h-[56px] relative shrink-0 w-full" data-name="List item/List Item: 0 Density">
      <StateLayer49 />
      <Divider21 />
    </div>
  );
}

function TableColumn1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[160px]" data-name="Table Column 2">
      <ListItemListItem0Density19 />
      <ListItemListItem0Density20 />
      <ListItemListItem0Density21 />
      <ListItemListItem0Density20 />
      <ListItemListItem0Density22 />
      <ListItemListItem0Density22 />
      <ListItemListItem0Density23 />
      <ListItemListItem0Density20 />
      <ListItemListItem0Density20 />
      <ListItemListItem0Density22 />
      <ListItemListItem0Density22 />
      <ListItemListItem0Density23 />
      <ListItemListItem0Density22 />
      <ListItemListItem0Density21 />
      <ListItemListItem0Density22 />
      <ListItemListItem0Density24 />
      <ListItemListItem0Density25 />
      {[...Array(2).keys()].map((_, i) => (
        <ListItemListItem0Density26 key={i} />
      ))}
      <ListItemListItem0Density27 />
      <ListItemListItem0Density28 />
      <ListItemListItem0Density29 />
      <ListItemListItem0Density30 />
      <ListItemListItem0Density31 />
      <ListItemListItem0Density32 />
      <ListItemListItem0Density33 />
      <ListItemListItem0Density34 />
    </div>
  );
}

function Search() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="search">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.pc423380} fill="var(--fill-0, #44483B)" id="icon" />
        </g>
      </svg>
    </div>
  );
}

function LeadingElement11() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Leading element">
      <Search />
    </div>
  );
}

function Content33() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[14px] tracking-[0.1px] w-full">
        <p className="leading-[20px]">Checklist point</p>
      </div>
    </div>
  );
}

function StateLayer50() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative size-full">
          <LeadingElement11 />
          <Content33 />
        </div>
      </div>
    </div>
  );
}

function Divider22() {
  return (
    <div className="h-px relative shrink-0 w-full" data-name="Divider">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 440 1.00004">
        <g id="Divider">
          <line id="Divider_2" stroke="var(--stroke-0, #C4C8B7)" x1="4.37114e-08" x2="440" y1="0.500038" y2="0.5" />
        </g>
      </svg>
    </div>
  );
}

function ListItemListItem0Density35() {
  return (
    <div className="content-stretch flex flex-col h-[56px] items-start justify-center min-h-[56px] relative shrink-0 w-full" data-name="List item/List Item: 0 Density">
      <StateLayer50 />
      <Divider22 />
    </div>
  );
}

function Content34() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full overflow-ellipsis overflow-hidden relative shrink-0 text-[#1a1c16] text-[14px] text-nowrap tracking-[0.25px] w-[min-content]">
        <p className="leading-[20px] overflow-ellipsis overflow-hidden">{`1.1.4  Er utstyr som krever det, kontrollert og sertifisert i tråd med forskrifter?`}</p>
      </div>
    </div>
  );
}

function StateLayer51() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative size-full">
          <Content34 />
        </div>
      </div>
    </div>
  );
}

function Divider23() {
  return (
    <div className="h-px relative shrink-0 w-full" data-name="Divider">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 440 1.00004">
        <g id="Divider">
          <line id="Divider_2" stroke="var(--stroke-0, #C4C8B7)" x1="4.37114e-08" x2="440" y1="0.500038" y2="0.5" />
        </g>
      </svg>
    </div>
  );
}

function ListItemListItem0Density36() {
  return (
    <div className="content-stretch flex flex-col h-[56px] items-center justify-center min-h-[56px] relative shrink-0 w-full" data-name="List item/List Item: 0 Density">
      <StateLayer51 />
      <Divider23 />
    </div>
  );
}

function Content35() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full overflow-ellipsis overflow-hidden relative shrink-0 text-[#1a1c16] text-[14px] text-nowrap tracking-[0.25px] w-[min-content]">
        <p className="leading-[20px] overflow-ellipsis overflow-hidden">1.3.1 Er husdyrgjødsel kun spredt på dyrket jord eller godkjent innmarksbeite?</p>
      </div>
    </div>
  );
}

function StateLayer52() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative size-full">
          <Content35 />
        </div>
      </div>
    </div>
  );
}

function Divider24() {
  return (
    <div className="h-px relative shrink-0 w-full" data-name="Divider">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 440 1.00004">
        <g id="Divider">
          <line id="Divider_2" stroke="var(--stroke-0, #C4C8B7)" x1="4.37114e-08" x2="440" y1="0.500038" y2="0.5" />
        </g>
      </svg>
    </div>
  );
}

function ListItemListItem0Density37() {
  return (
    <div className="content-stretch flex flex-col h-[56px] items-center justify-center min-h-[56px] relative shrink-0 w-full" data-name="List item/List Item: 0 Density">
      <StateLayer52 />
      <Divider24 />
    </div>
  );
}

function Content36() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full overflow-ellipsis overflow-hidden relative shrink-0 text-[#1a1c16] text-[14px] text-nowrap tracking-[0.25px] w-[min-content]">
        <p className="leading-[20px] overflow-ellipsis overflow-hidden">1.1.4 KRAV TIL PRODUKSJONSSTED, Klikk på neste spørsmål for å starte med denne gruppen.</p>
      </div>
    </div>
  );
}

function StateLayer53() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative size-full">
          <Content36 />
        </div>
      </div>
    </div>
  );
}

function Divider25() {
  return (
    <div className="h-px relative shrink-0 w-full" data-name="Divider">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 440 1.00004">
        <g id="Divider">
          <line id="Divider_2" stroke="var(--stroke-0, #C4C8B7)" x1="4.37114e-08" x2="440" y1="0.500038" y2="0.5" />
        </g>
      </svg>
    </div>
  );
}

function ListItemListItem0Density38() {
  return (
    <div className="content-stretch flex flex-col h-[56px] items-center justify-center min-h-[56px] relative shrink-0 w-full" data-name="List item/List Item: 0 Density">
      <StateLayer53 />
      <Divider25 />
    </div>
  );
}

function TableColumn2() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="Table Column 3">
      <ListItemListItem0Density35 />
      <ListItemListItem0Density36 />
      <ListItemListItem0Density37 />
      {[...Array(24).keys()].map((_, i) => (
        <ListItemListItem0Density38 key={i} />
      ))}
    </div>
  );
}

function ArrowDropDown2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="arrow_drop_down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="arrow_drop_down">
          <path d="M12 15L7 10H17L12 15Z" fill="var(--fill-0, #44483B)" id="icon" />
        </g>
      </svg>
    </div>
  );
}

function LeadingElement12() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Leading element">
      <ArrowDropDown2 />
    </div>
  );
}

function Content37() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[14px] tracking-[0.1px] w-full">
        <p className="leading-[20px]">Tidsfrist</p>
      </div>
    </div>
  );
}

function StateLayer54() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[16px] items-center justify-center px-[16px] py-[8px] relative size-full">
          <LeadingElement12 />
          <Content37 />
        </div>
      </div>
    </div>
  );
}

function Divider26() {
  return (
    <div className="h-px relative shrink-0 w-full" data-name="Divider">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 160 1.00003">
        <g id="Divider">
          <line id="Divider_2" stroke="var(--stroke-0, #C4C8B7)" x1="4.37114e-08" x2="160" y1="0.500028" y2="0.500014" />
        </g>
      </svg>
    </div>
  );
}

function ListItemListItem0Density39() {
  return (
    <div className="content-stretch flex flex-col h-[56px] items-center justify-center min-h-[56px] relative shrink-0 w-full" data-name="List item/List Item: 0 Density">
      <StateLayer54 />
      <Divider26 />
    </div>
  );
}

function Content38() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full relative shrink-0 text-[#1a1c16] text-[14px] tracking-[0.25px] w-[min-content]">
        <p className="leading-[20px]">4. mars 2025</p>
      </div>
    </div>
  );
}

function StateLayer55() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative size-full">
          <Content38 />
        </div>
      </div>
    </div>
  );
}

function Divider27() {
  return (
    <div className="h-px relative shrink-0 w-full" data-name="Divider">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 160 1.00003">
        <g id="Divider">
          <line id="Divider_2" stroke="var(--stroke-0, #C4C8B7)" x1="4.37114e-08" x2="160" y1="0.500028" y2="0.500014" />
        </g>
      </svg>
    </div>
  );
}

function ListItemListItem0Density40() {
  return (
    <div className="content-stretch flex flex-col h-[56px] items-center justify-center min-h-[56px] relative shrink-0 w-full" data-name="List item/List Item: 0 Density">
      <StateLayer55 />
      <Divider27 />
    </div>
  );
}

function TableColumn3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[160px]" data-name="Table Column 4">
      <ListItemListItem0Density39 />
      {[...Array(26).keys()].map((_, i) => (
        <ListItemListItem0Density40 key={i} />
      ))}
    </div>
  );
}

function ArrowDropDown3() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="arrow_drop_down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="arrow_drop_down">
          <path d="M12 15L7 10H17L12 15Z" fill="var(--fill-0, #44483B)" id="icon" />
        </g>
      </svg>
    </div>
  );
}

function LeadingElement13() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Leading element">
      <ArrowDropDown3 />
    </div>
  );
}

function Content39() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[14px] tracking-[0.1px] w-full">
        <p className="leading-[20px]">Status</p>
      </div>
    </div>
  );
}

function StateLayer56() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[16px] items-center justify-center px-[16px] py-[8px] relative size-full">
          <LeadingElement13 />
          <Content39 />
        </div>
      </div>
    </div>
  );
}

function Divider28() {
  return (
    <div className="h-px relative shrink-0 w-full" data-name="Divider">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 200 1.00003">
        <g id="Divider">
          <line id="Divider_2" stroke="var(--stroke-0, #C4C8B7)" x1="4.37114e-08" x2="200" y1="0.500028" y2="0.500011" />
        </g>
      </svg>
    </div>
  );
}

function ListItemListItem0Density41() {
  return (
    <div className="content-stretch flex flex-col h-[56px] items-center justify-center min-h-[56px] relative shrink-0 w-full" data-name="List item/List Item: 0 Density">
      <StateLayer56 />
      <Divider28 />
    </div>
  );
}

function Spacer() {
  return <div className="shrink-0 size-[2px]" data-name="Spacer" />;
}

function Badges6() {
  return (
    <div className="bg-[#ba1a1a] content-stretch flex items-center justify-center p-[2px] relative rounded-[100px] shrink-0" data-name="Badges">
      <Spacer />
    </div>
  );
}

function LeadingElement14() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0" data-name="Leading element">
      <Badges6 />
    </div>
  );
}

function Content40() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[14px] tracking-[0.1px] w-full">
        <p className="leading-[20px]">Tidspunkt foreslått</p>
      </div>
    </div>
  );
}

function StateLayer57() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative size-full">
          <LeadingElement14 />
          <Content40 />
        </div>
      </div>
    </div>
  );
}

function Divider29() {
  return (
    <div className="h-px relative shrink-0 w-full" data-name="Divider">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 200 1.00003">
        <g id="Divider">
          <line id="Divider_2" stroke="var(--stroke-0, #C4C8B7)" x1="4.37114e-08" x2="200" y1="0.500028" y2="0.500011" />
        </g>
      </svg>
    </div>
  );
}

function ListItemListItem0Density42() {
  return (
    <div className="content-stretch flex flex-col h-[56px] items-center justify-center min-h-[56px] relative shrink-0 w-full" data-name="List item/List Item: 0 Density">
      <StateLayer57 />
      <Divider29 />
    </div>
  );
}

function Spacer1() {
  return <div className="shrink-0 size-[2px]" data-name="Spacer" />;
}

function Badges7() {
  return (
    <div className="bg-[#ba1a1a] content-stretch flex items-center justify-center p-[2px] relative rounded-[100px] shrink-0" data-name="Badges">
      <Spacer1 />
    </div>
  );
}

function LeadingElement15() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0" data-name="Leading element">
      <Badges7 />
    </div>
  );
}

function Content41() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[14px] tracking-[0.1px] w-full">
        <p className="leading-[20px]">Dokument levert</p>
      </div>
    </div>
  );
}

function StateLayer58() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative size-full">
          <LeadingElement15 />
          <Content41 />
        </div>
      </div>
    </div>
  );
}

function Divider30() {
  return (
    <div className="h-px relative shrink-0 w-full" data-name="Divider">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 200 1.00003">
        <g id="Divider">
          <line id="Divider_2" stroke="var(--stroke-0, #C4C8B7)" x1="4.37114e-08" x2="200" y1="0.500028" y2="0.500011" />
        </g>
      </svg>
    </div>
  );
}

function ListItemListItem0Density43() {
  return (
    <div className="content-stretch flex flex-col h-[56px] items-center justify-center min-h-[56px] relative shrink-0 w-full" data-name="List item/List Item: 0 Density">
      <StateLayer58 />
      <Divider30 />
    </div>
  );
}

function Content42() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full relative shrink-0 text-[#1a1c16] text-[14px] tracking-[0.25px] w-[min-content]">
        <p className="leading-[20px]">Avventer møteforslag</p>
      </div>
    </div>
  );
}

function StateLayer59() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative size-full">
          <Content42 />
        </div>
      </div>
    </div>
  );
}

function Divider31() {
  return (
    <div className="h-px relative shrink-0 w-full" data-name="Divider">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 200 1.00003">
        <g id="Divider">
          <line id="Divider_2" stroke="var(--stroke-0, #C4C8B7)" x1="4.37114e-08" x2="200" y1="0.500028" y2="0.500011" />
        </g>
      </svg>
    </div>
  );
}

function ListItemListItem0Density44() {
  return (
    <div className="content-stretch flex flex-col h-[56px] items-center justify-center min-h-[56px] relative shrink-0 w-full" data-name="List item/List Item: 0 Density">
      <StateLayer59 />
      <Divider31 />
    </div>
  );
}

function Content43() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full relative shrink-0 text-[#1a1c16] text-[14px] tracking-[0.25px] w-[min-content]">
        <p className="leading-[20px]">Avventer dokumentasjon</p>
      </div>
    </div>
  );
}

function StateLayer60() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative size-full">
          <Content43 />
        </div>
      </div>
    </div>
  );
}

function Divider32() {
  return (
    <div className="h-px relative shrink-0 w-full" data-name="Divider">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 200 1.00003">
        <g id="Divider">
          <line id="Divider_2" stroke="var(--stroke-0, #C4C8B7)" x1="4.37114e-08" x2="200" y1="0.500028" y2="0.500011" />
        </g>
      </svg>
    </div>
  );
}

function ListItemListItem0Density45() {
  return (
    <div className="content-stretch flex flex-col h-[56px] items-center justify-center min-h-[56px] relative shrink-0 w-full" data-name="List item/List Item: 0 Density">
      <StateLayer60 />
      <Divider32 />
    </div>
  );
}

function Spacer2() {
  return <div className="shrink-0 size-[2px]" data-name="Spacer" />;
}

function Badges8() {
  return (
    <div className="bg-[#ba1a1a] content-stretch flex items-center justify-center p-[2px] relative rounded-[100px] shrink-0" data-name="Badges">
      <Spacer2 />
    </div>
  );
}

function LeadingElement16() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0" data-name="Leading element">
      <Badges8 />
    </div>
  );
}

function Content44() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[14px] tracking-[0.25px] w-full">
        <p className="leading-[20px]">Tidspunkt foreslått</p>
      </div>
    </div>
  );
}

function StateLayer61() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative size-full">
          <LeadingElement16 />
          <Content44 />
        </div>
      </div>
    </div>
  );
}

function Divider33() {
  return (
    <div className="h-px relative shrink-0 w-full" data-name="Divider">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 200 1.00003">
        <g id="Divider">
          <line id="Divider_2" stroke="var(--stroke-0, #C4C8B7)" x1="4.37114e-08" x2="200" y1="0.500028" y2="0.500011" />
        </g>
      </svg>
    </div>
  );
}

function ListItemListItem0Density46() {
  return (
    <div className="content-stretch flex flex-col h-[56px] items-center justify-center min-h-[56px] relative shrink-0 w-full" data-name="List item/List Item: 0 Density">
      <StateLayer61 />
      <Divider33 />
    </div>
  );
}

function TableColumn4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[200px]" data-name="Table Column 5">
      <ListItemListItem0Density41 />
      <ListItemListItem0Density42 />
      <ListItemListItem0Density42 />
      <ListItemListItem0Density43 />
      <ListItemListItem0Density43 />
      <ListItemListItem0Density43 />
      <ListItemListItem0Density43 />
      <ListItemListItem0Density43 />
      <ListItemListItem0Density42 />
      <ListItemListItem0Density42 />
      <ListItemListItem0Density43 />
      <ListItemListItem0Density43 />
      {[...Array(3).keys()].map((_, i) => (
        <ListItemListItem0Density44 key={i} />
      ))}
      {[...Array(3).keys()].map((_, i) => (
        <ListItemListItem0Density45 key={i} />
      ))}
      {[...Array(9).keys()].map((_, i) => (
        <ListItemListItem0Density46 key={i} />
      ))}
    </div>
  );
}

function TableContainer() {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0" data-name="Table Container">
      <TableColumn />
      <TableColumn1 />
      <TableColumn2 />
      <TableColumn3 />
      <TableColumn4 />
    </div>
  );
}

function DeviationTable() {
  return (
    <div className="basis-0 content-stretch flex grow h-full items-start min-h-px min-w-px relative shrink-0 z-[1]" data-name="Deviation table">
      <TableContainer />
    </div>
  );
}

function Content45() {
  return (
    <div className="basis-0 content-stretch flex grow isolate items-center min-h-px min-w-px relative shrink-0 w-full" data-name="Content">
      <ForetakList />
      <DeviationTable />
    </div>
  );
}

function Sidebar() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start min-h-px min-w-px relative shrink-0" data-name="Sidebar">
      <Heading />
      <Content45 />
    </div>
  );
}

function ContentContainer() {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0 w-full" data-name="Content Container">
      <ExternalRevisorNavigationRail />
      <Sidebar />
    </div>
  );
}

function MainContainer() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0 w-full" data-name="Main Container">
      <Divider />
      <ContentContainer />
    </div>
  );
}

export default function AvvikhanteringPage() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative rounded-[16px] shadow-[0px_8px_12px_6px_rgba(0,0,0,0.15),0px_4px_4px_0px_rgba(0,0,0,0.3)] size-full" data-name="Avvikhåntering page">
      <MainContainer />
    </div>
  );
}