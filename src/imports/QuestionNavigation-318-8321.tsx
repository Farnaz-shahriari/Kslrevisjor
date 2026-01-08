import svgPaths from "./svg-vbij11rrav";

function HeaderTextContainer() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Header Text Container">
      <div className="flex flex-col font-['Quatro:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1a1c16] text-[22px] text-nowrap">
        <p className="leading-[28px] whitespace-pre">Ny notat</p>
      </div>
    </div>
  );
}

function HeaderContent() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start justify-center min-h-px min-w-px relative shrink-0" data-name="Header Content">
      <HeaderTextContainer />
    </div>
  );
}

function HeaderContainer() {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0" data-name="Header Container">
      <HeaderContent />
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p2edaeb50} fill="var(--fill-0, #1A1C16)" id="icon" />
        </g>
      </svg>
    </div>
  );
}

function StateLayer() {
  return (
    <div className="content-stretch flex items-center justify-center p-[8px] relative shrink-0" data-name="state-layer">
      <Icon />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0" data-name="container">
      <StateLayer />
    </div>
  );
}

function TrailingIcon() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[48px]" data-name="trailing-icon 3">
      <Container />
    </div>
  );
}

function Header() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Header">
      <HeaderContainer />
      <TrailingIcon />
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="mic">
          <g id="Vector">
            <path d={svgPaths.p2ff32f00} fill="var(--fill-0, #44483B)" />
            <path d={svgPaths.pb6a2200} fill="var(--fill-0, #44483B)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function StateLayer1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center px-[24px] py-[16px] relative shrink-0" data-name="State-layer">
      <Icon1 />
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#44483b] text-[16px] text-nowrap tracking-[0.15px]">
        <p className="leading-[24px] whitespace-pre">Snakk inn notat</p>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative rounded-[100px] shrink-0" data-name="Content">
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[inherit] w-full">
        <StateLayer1 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#c4c8b7] border-solid inset-0 pointer-events-none rounded-[100px]" />
    </div>
  );
}

function SearchButton() {
  return (
    <div className="content-stretch flex h-[56px] items-center relative shrink-0 w-full" data-name="Search Button">
      <Content />
    </div>
  );
}

function LabelTextContainer() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Label text container">
      <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#44483b] text-[16px] text-nowrap tracking-[0.5px] whitespace-pre">Skriv her</p>
    </div>
  );
}

function Content1() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-[48px] items-start justify-center min-h-px min-w-px px-0 py-[4px] relative shrink-0" data-name="Content">
      <LabelTextContainer />
    </div>
  );
}

function StateLayer2() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="State-layer">
      <div className="size-full">
        <div className="content-stretch flex items-start pl-[16px] pr-0 py-[4px] relative size-full">
          <Content1 />
        </div>
      </div>
    </div>
  );
}

function TextField() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative rounded-[4px] shrink-0 w-full" data-name="Text field">
      <div aria-hidden="true" className="absolute border border-[#74796a] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <StateLayer2 />
    </div>
  );
}

function SupportingText() {
  return (
    <div className="absolute bottom-[-20px] content-stretch flex h-[20px] items-start left-0 pb-0 pt-[4px] px-[16px] right-0" data-name="Supporting text">
      <p className="basis-0 font-['Manrope:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#44483b] text-[12px] tracking-[0.4px]">Kun synlig for deg</p>
    </div>
  );
}

function TextField1() {
  return (
    <div className="content-stretch flex flex-col h-[152px] items-start relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="Text field">
      <TextField />
      <SupportingText />
    </div>
  );
}

function QuestionListHeading() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start pb-[32px] pt-0 px-0 relative shrink-0 w-full" data-name="Question list heading">
      <SearchButton />
      <TextField1 />
    </div>
  );
}

function HandleShape() {
  return (
    <div className="bg-[#74796a] content-stretch flex items-center justify-center overflow-clip p-[7px] relative rounded-[24px] shrink-0" data-name="Handle shape">
      <div className="rounded-[100px] shrink-0 size-[2px]" data-name="Container" />
    </div>
  );
}

function StateLayer3() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center p-[12px] relative rounded-[100px] shrink-0" data-name="State-layer">
      <HandleShape />
    </div>
  );
}

function Target() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[-16px] p-[4px] top-1/2 translate-y-[-50%]" data-name="Target">
      <StateLayer3 />
    </div>
  );
}

function Handle() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Handle">
      <Target />
    </div>
  );
}

function Switch() {
  return (
    <div className="bg-[#e3e3d9] content-stretch flex h-[32px] items-center px-[8px] py-[2px] relative rounded-[100px] shrink-0 w-[52px]" data-name="Switch">
      <div aria-hidden="true" className="absolute border-2 border-[#74796a] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <Handle />
    </div>
  );
}

function LeadingElement() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Leading element">
      <Switch />
    </div>
  );
}

function Content2() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[0px] tracking-[0.15px] w-full">
        <p className="font-['Manrope:Bold',sans-serif] font-bold leading-[24px] text-[16px]">Notatet gjelder et avvik</p>
      </div>
    </div>
  );
}

function StateLayer4() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative size-full">
          <LeadingElement />
          <Content2 />
        </div>
      </div>
    </div>
  );
}

function ListItemListItem0Density() {
  return (
    <div className="content-stretch flex flex-col h-[56px] items-center justify-center min-h-[56px] relative shrink-0 w-full" data-name="List item/List Item: 0 Density">
      <StateLayer4 />
    </div>
  );
}

function MainContent() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[16px] grow items-start justify-center min-h-px min-w-px relative shrink-0 w-full" data-name="Main Content">
      <QuestionListHeading />
      <ListItemListItem0Density />
    </div>
  );
}

function Divider() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0 w-full" data-name="Divider">
      <div className="h-0 relative shrink-0 w-full" data-name="Divider">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]" style={{ "--stroke-0": "rgba(196, 200, 183, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 352 1">
            <line id="Divider" stroke="var(--stroke-0, #C4C8B7)" x2="352" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <p className="font-['Manrope:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#44483b] text-[14px] tracking-[0.1px] w-full">Gjelder hvilket spørsmål?</p>
    </div>
  );
}

function StateLayer5() {
  return (
    <div className="content-stretch flex h-[32px] items-center justify-center px-[16px] py-[6px] relative shrink-0" data-name="state-layer">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[14px] text-center text-nowrap tracking-[0.1px]">
        <p className="leading-[20px] whitespace-pre">Beste treff</p>
      </div>
    </div>
  );
}

function AssistiveChip() {
  return (
    <div className="relative rounded-[8px] shrink-0" data-name="Assistive chip">
      <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[inherit]">
        <StateLayer5 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#c4c8b7] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function QuestionText() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Question text">
      <div className="-webkit-box basis-0 flex-col font-['Manrope:Medium',sans-serif] font-medium grow justify-center leading-[20px] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#44483b] text-[14px] tracking-[0.1px]">
        <p className="mb-0">1.1.1 Har du oversikt over alle driftsmidler du har kjøpt, og alle produkter du har solgt?</p>
        <p>&nbsp;</p>
      </div>
    </div>
  );
}

function SnippetFolder() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="snippet_folder">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="snippet_folder">
          <path d={svgPaths.p1a55f400} fill="var(--fill-0, #174295)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0">
      <SnippetFolder />
    </div>
  );
}

function Content3() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <QuestionText />
      <Frame />
    </div>
  );
}

function ChecklistQuestion() {
  return (
    <div className="h-[92px] relative rounded-[12px] shrink-0 w-full" data-name="checklist Question">
      <div aria-hidden="true" className="absolute border border-[#74796a] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="size-full">
        <div className="content-stretch flex h-[92px] items-start p-[12px] relative w-full">
          <Content3 />
        </div>
      </div>
    </div>
  );
}

function QuestionContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Question Container">
      <AssistiveChip />
      <ChecklistQuestion />
    </div>
  );
}

function StateLayer6() {
  return (
    <div className="content-stretch flex h-[32px] items-center justify-center px-[16px] py-[6px] relative shrink-0" data-name="state-layer">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[14px] text-center text-nowrap tracking-[0.1px]">
        <p className="leading-[20px] whitespace-pre">Treff</p>
      </div>
    </div>
  );
}

function AssistiveChip1() {
  return (
    <div className="relative rounded-[8px] shrink-0" data-name="Assistive chip">
      <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[inherit]">
        <StateLayer6 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#c4c8b7] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function QuestionText1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Question text">
      <div className="-webkit-box basis-0 flex-col font-['Manrope:Medium',sans-serif] font-medium grow justify-center leading-[20px] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#44483b] text-[14px] tracking-[0.1px]">
        <p className="mb-0">1.1.1 Har du oversikt over alle driftsmidler du har kjøpt, og alle produkter du har solgt?</p>
        <p>&nbsp;</p>
      </div>
    </div>
  );
}

function SnippetFolder1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="snippet_folder">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="snippet_folder">
          <path d={svgPaths.p1a55f400} fill="var(--fill-0, #174295)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0">
      <SnippetFolder1 />
    </div>
  );
}

function Content4() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <QuestionText1 />
      <Frame1 />
    </div>
  );
}

function ChecklistQuestion1() {
  return (
    <div className="h-[92px] relative rounded-[12px] shrink-0 w-full" data-name="checklist Question">
      <div aria-hidden="true" className="absolute border border-[#74796a] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="size-full">
        <div className="content-stretch flex h-[92px] items-start p-[12px] relative w-full">
          <Content4 />
        </div>
      </div>
    </div>
  );
}

function QuestionContainer1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Question Container">
      <AssistiveChip1 />
      <ChecklistQuestion1 />
    </div>
  );
}

function Icon2() {
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

function StateLayer7() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center px-[24px] py-[16px] relative shrink-0" data-name="State-layer">
      <Icon2 />
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#44483b] text-[16px] text-nowrap tracking-[0.15px]">
        <p className="leading-[24px] whitespace-pre">Søk i sjekklistespørsmål</p>
      </div>
    </div>
  );
}

function Content5() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative rounded-[100px] shrink-0" data-name="Content">
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[inherit] w-full">
        <StateLayer7 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#c4c8b7] border-solid inset-0 pointer-events-none rounded-[100px]" />
    </div>
  );
}

function SearchButton1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[296px]" data-name="Search Button">
      <Content5 />
    </div>
  );
}

function QuestionSection() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start pb-[40px] pt-0 px-0 relative shrink-0 w-full" data-name="Question Section">
      <Divider />
      <QuestionContainer />
      <QuestionContainer1 />
      <SearchButton1 />
    </div>
  );
}

export default function QuestionNavigation() {
  return (
    <div className="relative size-full" data-name="Question Navigation">
      <div aria-hidden="true" className="absolute border-[#c4c8b7] border-[0px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-start px-[24px] py-[16px] relative size-full">
          <Header />
          <MainContent />
          <QuestionSection />
        </div>
      </div>
    </div>
  );
}