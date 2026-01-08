import svgPaths from "./svg-83ylgutnn2";

function Pending() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="pending">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="pending">
          <g id="Vector">
            <path d={svgPaths.p26f9ce00} fill="var(--fill-0, #44483B)" />
            <path d={svgPaths.pf24e00} fill="var(--fill-0, #44483B)" />
            <path d={svgPaths.p11e47970} fill="var(--fill-0, #44483B)" />
            <path d={svgPaths.p181a2880} fill="var(--fill-0, #44483B)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="expand_more">
          <path d={svgPaths.p1c0f0600} fill="var(--fill-0, #44483B)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function StateLayer() {
  return (
    <div className="content-stretch flex h-[32px] items-center justify-center relative shrink-0 w-full" data-name="State-layer">
      <Icon />
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[100px] shrink-0 w-[32px]" data-name="Content">
      <StateLayer />
    </div>
  );
}

function IconButton() {
  return (
    <div className="content-stretch flex items-center justify-center opacity-0 relative shrink-0 size-[48px]" data-name="Icon button">
      <Content />
    </div>
  );
}

function Frame6() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0">
      <Pending />
      <div className="flex flex-col font-['Quatro:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1a1c16] text-[22px] text-nowrap">
        <p className="leading-[28px] whitespace-pre">
          <span className="font-['Quatro:Regular',sans-serif] not-italic">1.</span>1<span className="font-['Quatro:Regular',sans-serif] not-italic">.</span>1
        </p>
      </div>
      <IconButton />
    </div>
  );
}

function VolumeUp() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="volume_up">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="volume_up">
          <path d={svgPaths.p1858ec00} fill="var(--fill-0, #44483B)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function StateLayer1() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center p-[8px] relative shrink-0" data-name="state-layer">
      <VolumeUp />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center overflow-clip relative rounded-[100px] shrink-0" data-name="container">
      <StateLayer1 />
    </div>
  );
}

function TrailingIcon2() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-center justify-center relative shrink-0 size-[48px]" data-name="trailing-icon 3">
      <Container />
    </div>
  );
}

function QuestionMark() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="question_mark">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="question_mark">
          <path d={svgPaths.p36769380} fill="var(--fill-0, #44483B)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function StateLayer2() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center p-[8px] relative shrink-0" data-name="state-layer">
      <QuestionMark />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center overflow-clip relative rounded-[100px] shrink-0" data-name="container">
      <StateLayer2 />
    </div>
  );
}

function TrailingIcon1() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-center justify-center relative shrink-0 size-[48px]" data-name="trailing-icon 2">
      <Container1 />
    </div>
  );
}

function TrailingIcon() {
  return (
    <div className="content-stretch flex h-[48px] items-center justify-end relative shrink-0" data-name="trailing-icon">
      <TrailingIcon2 />
      <TrailingIcon1 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
      <Frame6 />
      <TrailingIcon />
    </div>
  );
}

function Frame1() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start justify-center min-h-px min-w-px relative shrink-0">
      <Frame />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
      <Frame1 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0 w-full">
      <Frame2 />
    </div>
  );
}

function QuestionMobileMenu() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[8px] items-start justify-center px-0 py-[8px] relative shrink-0 w-full" data-name="Question mobile menu">
      <Frame3 />
    </div>
  );
}

function SnippetFolder() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="snippet_folder">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="snippet_folder">
          <path d={svgPaths.p3bf1dd00} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function StateLayer3() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-center justify-center pl-[8px] pr-[12px] py-[6px] relative shrink-0" data-name="state-layer">
      <SnippetFolder />
      <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[14px] text-center text-nowrap text-white tracking-[0.1px]">
        <p className="leading-[20px] whitespace-pre">Dokumentasjon kreves</p>
      </div>
    </div>
  );
}

function InputChip() {
  return (
    <div className="bg-[#365bae] content-stretch flex h-[32px] items-center justify-center overflow-clip relative rounded-[8px] shrink-0" data-name="Input chip">
      <StateLayer3 />
    </div>
  );
}

function Configuration() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Configuration">
      <InputChip />
    </div>
  );
}

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

function Content1() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] tracking-[0.5px] w-full">
        <p className="leading-[24px]">Krav</p>
      </div>
    </div>
  );
}

function StateLayer4() {
  return (
    <div className="content-stretch flex gap-[16px] h-[40px] items-center justify-center relative shrink-0 w-full" data-name="state-layer">
      <LeadingElement />
      <Content1 />
    </div>
  );
}

function ListItemListItem4Density() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center min-h-[40px] relative shrink-0 w-full" data-name="List item/List Item: -4 Density">
      <StateLayer4 />
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

function StateLayer5() {
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
      <StateLayer5 />
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

function StateLayer6() {
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
      <StateLayer6 />
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

function Icon1() {
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

function StateLayer7() {
  return (
    <div className="box-border content-stretch flex gap-[4px] items-center justify-center px-[12px] py-[6px] relative shrink-0" data-name="State-layer">
      <Icon1 />
      <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#4a671e] text-[14px] text-nowrap tracking-[0.1px]">
        <p className="leading-[20px] whitespace-pre">Les mer</p>
      </div>
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0" data-name="Content">
      <StateLayer7 />
    </div>
  );
}

function NextButton() {
  return (
    <div className="content-stretch flex h-[48px] items-center justify-center relative shrink-0" data-name="next Button">
      <Content2 />
    </div>
  );
}

function Container2() {
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
      <Container2 />
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

function Container3() {
  return (
    <div className="bg-[#fafaf0] box-border content-stretch flex flex-col gap-[8px] items-center px-0 py-[8px] relative rounded-[12px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#c4c8b7] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <RequirementSection1 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="icon">
          <path d={svgPaths.p1ee5e230} fill="var(--fill-0, #44483B)" id="icon_2" />
        </g>
      </svg>
    </div>
  );
}

function StateLayer8() {
  return (
    <div className="box-border content-stretch flex items-center justify-center p-[8px] relative shrink-0" data-name="state-layer">
      <Icon2 />
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0" data-name="container">
      <StateLayer8 />
    </div>
  );
}

function RadioButtons() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[24px]" data-name="Radio buttons">
      <Container4 />
    </div>
  );
}

function LeadingElement1() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Leading element">
      <RadioButtons />
    </div>
  );
}

function Content3() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] tracking-[0.5px] w-full">
        <p className="leading-[24px]">Ja</p>
      </div>
    </div>
  );
}

function StateLayer9() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center px-[16px] py-0 relative size-full">
          <LeadingElement1 />
          <Content3 />
        </div>
      </div>
    </div>
  );
}

function ListItemListItem4Density1() {
  return (
    <button className="box-border content-stretch flex flex-col h-[40px] items-center justify-center min-h-[40px] p-0 relative shrink-0 w-full" data-name="List item/List Item: -4 Density">
      <StateLayer9 />
    </button>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="icon">
          <path d={svgPaths.p1ee5e230} fill="var(--fill-0, #44483B)" id="icon_2" />
        </g>
      </svg>
    </div>
  );
}

function StateLayer10() {
  return (
    <div className="box-border content-stretch flex items-center justify-center p-[8px] relative shrink-0" data-name="state-layer">
      <Icon3 />
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0" data-name="container">
      <StateLayer10 />
    </div>
  );
}

function RadioButtons1() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[24px]" data-name="Radio buttons">
      <Container5 />
    </div>
  );
}

function LeadingElement2() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Leading element">
      <RadioButtons1 />
    </div>
  );
}

function Content4() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] tracking-[0.5px] w-full">
        <p className="leading-[24px]">Nei</p>
      </div>
    </div>
  );
}

function StateLayer11() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center px-[16px] py-0 relative size-full">
          <LeadingElement2 />
          <Content4 />
        </div>
      </div>
    </div>
  );
}

function ListItemListItem4Density2() {
  return (
    <button className="box-border content-stretch flex flex-col h-[40px] items-center justify-center min-h-[40px] p-0 relative shrink-0 w-full" data-name="List item/List Item: -4 Density">
      <StateLayer11 />
    </button>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="icon">
          <path d={svgPaths.pf1830f2} fill="var(--fill-0, #4A671E)" id="icon_2" />
        </g>
      </svg>
    </div>
  );
}

function StateLayer12() {
  return (
    <div className="box-border content-stretch flex items-center justify-center p-[8px] relative shrink-0" data-name="state-layer">
      <Icon4 />
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0" data-name="container">
      <StateLayer12 />
    </div>
  );
}

function RadioButtons2() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[24px]" data-name="Radio buttons">
      <Container6 />
    </div>
  );
}

function LeadingElement3() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Leading element">
      <RadioButtons2 />
    </div>
  );
}

function Content5() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] tracking-[0.5px] w-full">
        <p className="leading-[24px]">Ikke relevant</p>
      </div>
    </div>
  );
}

function StateLayer13() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center px-[16px] py-0 relative size-full">
          <LeadingElement3 />
          <Content5 />
        </div>
      </div>
    </div>
  );
}

function ListItemListItem4Density3() {
  return (
    <button className="box-border content-stretch flex flex-col h-[40px] items-center justify-center min-h-[40px] p-0 relative shrink-0 w-full" data-name="List item/List Item: -4 Density">
      <StateLayer13 />
    </button>
  );
}

function Container7() {
  return (
    <div className="box-border content-stretch cursor-pointer flex flex-col items-start px-0 py-[16px] relative shrink-0 w-full" data-name="Container">
      <ListItemListItem4Density1 />
      <ListItemListItem4Density2 />
      <ListItemListItem4Density3 />
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-x-clip overflow-y-auto relative shrink-0 w-full" data-name="Container">
      <Container7 />
    </div>
  );
}

function TabContents2() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center justify-center min-h-px min-w-px relative shrink-0" data-name="Tab Contents">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[14px] text-center text-nowrap tracking-[0.1px]">
        <p className="leading-[20px] whitespace-pre">Egenrevisjonssvar</p>
      </div>
    </div>
  );
}

function StateLayer14() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="State-layer">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col items-center justify-center px-[16px] py-[14px] relative size-full">
          <TabContents2 />
          <div className="absolute bg-[#4a671e] bottom-0 h-[2px] left-0 right-0" data-name="Indicator" />
        </div>
      </div>
    </div>
  );
}

function Tab2() {
  return (
    <div className="content-stretch flex flex-col h-[48px] items-center justify-end overflow-clip relative shrink-0" data-name="Tab 3">
      <StateLayer14 />
    </div>
  );
}

function TabContents3() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center justify-center min-h-px min-w-px relative shrink-0" data-name="Tab Contents">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#44483b] text-[14px] text-center text-nowrap tracking-[0.1px]">
        <p className="leading-[20px] whitespace-pre">Notat</p>
      </div>
    </div>
  );
}

function StateLayer15() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="State-layer">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col items-center justify-center px-[16px] py-[14px] relative size-full">
          <TabContents3 />
        </div>
      </div>
    </div>
  );
}

function Tab3() {
  return (
    <div className="content-stretch flex flex-col h-[48px] items-center justify-end overflow-clip relative shrink-0 w-[90px]" data-name="Tab 4">
      <StateLayer15 />
    </div>
  );
}

function TabGroup1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Tab group">
      <Tab2 />
      <Tab3 />
    </div>
  );
}

function Divider1() {
  return (
    <div className="h-[2px] relative shrink-0 w-full" data-name="Divider">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 448 2">
        <g id="Divider">
          <line id="Divider_2" stroke="var(--stroke-0, #E3E3D9)" strokeWidth="2" x1="8.74228e-08" x2="448" y1="1.00004" y2="1" />
        </g>
      </svg>
    </div>
  );
}

function Tabs1() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Tabs">
      <TabGroup1 />
      <Divider1 />
    </div>
  );
}

function Content6() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start justify-center leading-[0] min-h-px min-w-px overflow-clip relative shrink-0 tracking-[0.5px]" data-name="Content">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[#44483b] text-[12px] w-full">
        <p className="leading-[16px]">Svarvalg</p>
      </div>
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#1a1c16] text-[16px] w-full">
        <p className="leading-[24px]">Ja</p>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[16px] items-start p-[8px] relative w-full">
          <Content6 />
        </div>
      </div>
    </div>
  );
}

function AppUserInput() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[8px] items-center justify-center min-h-[64px] pb-0 pt-[8px] px-0 relative shrink-0 w-full" data-name="App User Input">
      <Frame4 />
    </div>
  );
}

function Content7() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start justify-center leading-[0] min-h-px min-w-px overflow-clip relative shrink-0 tracking-[0.5px]" data-name="Content">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[#44483b] text-[12px] w-full">
        <p className="leading-[16px]">Svartekst</p>
      </div>
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#1a1c16] text-[16px] w-full">
        <p className="leading-[24px]">Ja, jeg har alt registrert i regnskapssystemet mitt, og kan enkelt hente ut oversikten.</p>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[16px] items-start p-[8px] relative w-full">
          <Content7 />
        </div>
      </div>
    </div>
  );
}

function AppUserInput1() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[8px] items-center justify-center min-h-[64px] pb-0 pt-[8px] px-0 relative shrink-0 w-full" data-name="App User Input">
      <Frame5 />
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d="M12 15L7 10H17L12 15Z" fill="var(--fill-0, #44483B)" id="icon" />
        </g>
      </svg>
    </div>
  );
}

function StateLayer16() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-center justify-center px-[24px] py-[16px] relative shrink-0" data-name="State-layer">
      <Icon5 />
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#44483b] text-[16px] text-nowrap tracking-[0.15px]">
        <p className="leading-[24px] whitespace-pre">Se opplastede dokumenter</p>
      </div>
    </div>
  );
}

function Content8() {
  return (
    <div className="relative rounded-[100px] shrink-0" data-name="Content">
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[inherit]">
        <StateLayer16 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#c4c8b7] border-solid inset-0 pointer-events-none rounded-[100px]" />
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Button">
      <Content8 />
    </div>
  );
}

function SelfAuditAnswer() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Self-audit answer">
      <AppUserInput />
      <AppUserInput1 />
      <Button />
    </div>
  );
}

function RevisorQuestionTabs() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start max-w-[704px] relative shrink-0 w-full" data-name="Revisor Question Tabs">
      <Tabs1 />
      <SelfAuditAnswer />
    </div>
  );
}

export default function QuestionInfoGuidenceForSmallScreen() {
  return (
    <div className="bg-white relative size-full" data-name="QuestionInfo+ guidence for small screen">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-start px-[16px] py-0 relative size-full">
          <QuestionMobileMenu />
          <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] tracking-[0.15px] w-full">
            <p className="leading-[24px]">Er det etablert en rutine som sikrer at det kun brukes ingredienser med norsk opprinnelse i Spesialitet-godkjent produkt? (ingredienser som ikke produseres kommersielt i Norge er unntatt fra dette kravet)</p>
          </div>
          <Configuration />
          <Container3 />
          <Container8 />
          <RevisorQuestionTabs />
        </div>
      </div>
    </div>
  );
}