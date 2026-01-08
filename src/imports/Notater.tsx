import svgPaths from "./svg-q99ru41342";
import clsx from "clsx";
type AssistiveChipProps = {
  text: string;
};

function AssistiveChip({ children, text }: React.PropsWithChildren<AssistiveChipProps>) {
  return (
    <div className="relative rounded-[8px] shrink-0">
      <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[inherit]">
        <div className="content-stretch flex h-[32px] items-center justify-center px-[16px] py-[6px] relative shrink-0">
          <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[14px] text-center text-nowrap tracking-[0.1px]">
            <p className="leading-[20px] whitespace-pre">{text}</p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#c4c8b7] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Wrapper8({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative rounded-[100px] shrink-0">
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[inherit] w-full">{children}</div>
      <div aria-hidden="true" className="absolute border border-[#c4c8b7] border-solid inset-0 pointer-events-none rounded-[100px]" />
    </div>
  );
}

function Wrapper7({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <div className="-webkit-box basis-0 flex-col font-['Manrope:Medium',sans-serif] font-medium grow justify-center leading-[20px] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#44483b] text-[14px] tracking-[0.1px]">{children}</div>
    </div>
  );
}

function Wrapper6({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="h-px relative shrink-0 w-full">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 599 1">
        {children}
      </svg>
    </div>
  );
}
type Wrapper5Props = {
  additionalClassNames?: string;
};

function Wrapper5({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper5Props>) {
  return (
    <div className={additionalClassNames}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        {children}
      </svg>
    </div>
  );
}

function Wrapper4({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex flex-row items-center size-full">
      <div className="content-stretch flex gap-[16px] items-center px-[8px] py-[12px] relative w-full">{children}</div>
    </div>
  );
}

function ChecklistQuestion27({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="h-[92px] relative rounded-[12px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#74796a] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="size-full">
        <div className="content-stretch flex items-start p-[12px] relative size-full">{children}</div>
      </div>
    </div>
  );
}

function Wrapper3({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center p-[8px] relative w-full">{children}</div>
      </div>
    </div>
  );
}

function StateLayer44({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[16px] py-[14px] relative size-full">{children}</div>
      </div>
    </div>
  );
}

function StateLayer43({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[16px] py-0 relative size-full">{children}</div>
      </div>
    </div>
  );
}
type ChecklistQuestion26Props = {
  additionalClassNames?: string;
};

function ChecklistQuestion26({ children, additionalClassNames = "" }: React.PropsWithChildren<ChecklistQuestion26Props>) {
  return (
    <div className={clsx("relative rounded-[12px] shrink-0 w-full", additionalClassNames)}>
      <Wrapper4>{children}</Wrapper4>
    </div>
  );
}
type ChecklistQuestion25Props = {
  additionalClassNames?: string;
};

function ChecklistQuestion25({ children, additionalClassNames = "" }: React.PropsWithChildren<ChecklistQuestion25Props>) {
  return (
    <button className={clsx("bg-white cursor-pointer relative rounded-[12px] shrink-0 w-full", additionalClassNames)}>
      <Wrapper4>{children}</Wrapper4>
    </button>
  );
}

function Wrapper2({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="basis-0 grow h-[64px] min-h-px min-w-px relative shrink-0">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[8px] py-0 relative size-full">{children}</div>
      </div>
    </div>
  );
}

function StateLayer22({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full">
      <div className="flex flex-col items-center justify-end overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-end px-[16px] py-0 relative size-full">{children}</div>
      </div>
    </div>
  );
}
type Wrapper1Props = {
  additionalClassNames?: string;
};

function Wrapper1({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper1Props>) {
  return (
    <Wrapper5 additionalClassNames={clsx("relative shrink-0 size-[24px]", additionalClassNames)}>
      <g id="Icon">{children}</g>
    </Wrapper5>
  );
}

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <Wrapper5 additionalClassNames="relative shrink-0 size-[24px]">
      <g id="icon">{children}</g>
    </Wrapper5>
  );
}
type Content25Props = {
  text: string;
  text1: string;
  text2: string;
};

function Content25({ text, text1, text2 }: Content25Props) {
  return (
    <div className="basis-0 content-stretch flex flex-col font-['Manrope:Regular',sans-serif] font-normal grow items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0">
      <div className="flex flex-col justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] tracking-[0.5px] w-full">
        <p className="leading-[24px]">{text}</p>
      </div>
      <p className="leading-[20px] relative shrink-0 text-[#44483b] text-[14px] tracking-[0.25px] w-full">{text1}</p>
      <p className="h-0 leading-[20px] opacity-0 relative shrink-0 text-[#44483b] text-[14px] tracking-[0.25px] w-full">{text2}</p>
    </div>
  );
}

function Divider2() {
  return (
    <Wrapper6>
      <g id="Divider">
        <line id="Divider_2" stroke="var(--stroke-0, #C4C8B7)" x1="4.37114e-08" x2="599" y1="0.500052" y2="0.5" />
      </g>
    </Wrapper6>
  );
}
type Content23Props = {
  text: string;
  text1: string;
  additionalClassNames?: string;
};

function Content23({ text, text1, additionalClassNames = "" }: Content23Props) {
  return (
    <div className={clsx("basis-0 content-stretch flex flex-col font-['Manrope:Regular',sans-serif] font-normal grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0", additionalClassNames)}>
      <div className="flex flex-col justify-center leading-[0] relative shrink-0 text-[16px] tracking-[0.5px] w-full">
        <p className="leading-[24px]">{text}</p>
      </div>
      <p className="[white-space-collapse:collapse] h-[20px] leading-[20px] overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-nowrap tracking-[0.25px] w-full">{text1}</p>
    </div>
  );
}

function Icon8() {
  return (
    <Wrapper>
      <path d={svgPaths.p1ee5e230} fill="var(--fill-0, #44483B)" id="icon_2" />
    </Wrapper>
  );
}
type ContentTextProps = {
  text: string;
};

function ContentText({ text }: ContentTextProps) {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] tracking-[0.5px] w-full">
        <p className="leading-[24px]">{text}</p>
      </div>
    </div>
  );
}

function Icon7() {
  return (
    <Wrapper>
      <path d={svgPaths.pf1830f2} fill="var(--fill-0, #4A671E)" id="icon_2" />
    </Wrapper>
  );
}
type QuestionTextTextProps = {
  text: string;
  additionalClassNames?: string;
};

function QuestionTextText({ text, additionalClassNames = "" }: QuestionTextTextProps) {
  return (
    <div className={clsx("content-stretch flex relative shrink-0 w-full", additionalClassNames)}>
      <div className="-webkit-box basis-0 flex-col font-['Manrope:Medium',sans-serif] font-medium grow justify-center leading-[0] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#44483b] text-[14px] tracking-[0.1px]">
        <p className="leading-[20px]">{text}</p>
      </div>
    </div>
  );
}

function SnippetFolder() {
  return (
    <Wrapper5 additionalClassNames="relative shrink-0 size-[24px]">
      <g id="snippet_folder">
        <path d={svgPaths.p1a55f400} fill="var(--fill-0, #174295)" id="Vector" />
      </g>
    </Wrapper5>
  );
}
type QuestionText1Props = {
  text: string;
  text1: string;
  additionalClassNames?: string;
};

function QuestionText1({ text, text1, additionalClassNames = "" }: QuestionText1Props) {
  return (
    <div className={clsx("content-stretch flex relative shrink-0 w-full", additionalClassNames)}>
      <div className="-webkit-box basis-0 flex-col font-['Manrope:Medium',sans-serif] font-medium grow justify-center leading-[20px] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#44483b] text-[14px] tracking-[0.1px]">
        <p className="mb-0">{text}</p>
        <p>{text1}</p>
      </div>
    </div>
  );
}

function ArrowDropDown() {
  return (
    <Wrapper5 additionalClassNames="relative shrink-0 size-[24px]">
      <g id="arrow_drop_down">
        <path d="M12 15L7 10H17L12 15Z" fill="var(--fill-0, #44483B)" id="icon" />
      </g>
    </Wrapper5>
  );
}

function Pending() {
  return (
    <Wrapper5 additionalClassNames="relative shrink-0 size-[24px]">
      <g id="pending">
        <g id="Vector">
          <path d={svgPaths.p26f9ce00} fill="var(--fill-0, #44483B)" />
          <path d={svgPaths.pf24e00} fill="var(--fill-0, #44483B)" />
          <path d={svgPaths.p11e47970} fill="var(--fill-0, #44483B)" />
          <path d={svgPaths.p181a2880} fill="var(--fill-0, #44483B)" />
        </g>
      </g>
    </Wrapper5>
  );
}

function ExpandMore() {
  return (
    <Wrapper5 additionalClassNames="relative shrink-0 size-[24px]">
      <g id="expand_more">
        <path d={svgPaths.p18b66300} fill="var(--fill-0, #44483B)" id="Vector" />
      </g>
    </Wrapper5>
  );
}
type Content3Props = {
  text: string;
  text1: string;
};

function Content3({ text, text1 }: Content3Props) {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center leading-[0] min-h-px min-w-px overflow-clip relative shrink-0 tracking-[0.5px]">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[#44483b] text-[12px] w-full">
        <p className="leading-[16px]">{text}</p>
      </div>
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#1a1c16] text-[16px] w-full">
        <p className="leading-[24px]">{text1}</p>
      </div>
    </div>
  );
}
type BuildingBlocksMonogramTextProps = {
  text: string;
};

function BuildingBlocksMonogramText({ text }: BuildingBlocksMonogramTextProps) {
  return (
    <div className="bg-[#eff1e7] overflow-clip relative rounded-[100px] shrink-0 size-[40px]">
      <div className="absolute flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] left-1/2 size-[40px] text-[#284000] text-[16px] text-center top-1/2 tracking-[0.15px] translate-x-[-50%] translate-y-[-50%]">
        <p className="leading-[24px]">{text}</p>
      </div>
    </div>
  );
}

function Helper6() {
  return (
    <Wrapper5 additionalClassNames="relative shrink-0 size-[24px]">
      <g id="add">
        <path d={svgPaths.p2a6e0600} fill="var(--fill-0, #44483B)" id="icon" />
      </g>
    </Wrapper5>
  );
}

function Content1() {
  return (
    <Wrapper8>
      <StateLayerText text="Søk i sjekklistespørsmål" />
    </Wrapper8>
  );
}
type StateLayerTextProps = {
  text: string;
};

function StateLayerText({ text }: StateLayerTextProps) {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center px-[24px] py-[16px] relative shrink-0">
      <Icon6 />
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#44483b] text-[16px] text-nowrap tracking-[0.15px]">
        <p className="leading-[24px] whitespace-pre">{text}</p>
      </div>
    </div>
  );
}

function Icon6() {
  return (
    <Wrapper1>
      <path d={svgPaths.pc423380} fill="var(--fill-0, #44483B)" id="icon" />
    </Wrapper1>
  );
}
type TabContentsTextProps = {
  text: string;
  additionalClassNames?: string;
};

function TabContentsText({ text, additionalClassNames = "" }: TabContentsTextProps) {
  return (
    <div className={clsx("basis-0 content-stretch flex gap-[4px] grow items-center justify-center min-h-px min-w-px relative shrink-0", additionalClassNames)}>
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#44483b] text-[14px] text-center text-nowrap tracking-[0.1px]">
        <p className="leading-[20px] whitespace-pre">{text}</p>
      </div>
    </div>
  );
}

function Helper5() {
  return (
    <svg fill="none" preserveAspectRatio="none" viewBox="0 0 24 24" className="block size-full">
      <g id="history">
        <path d={svgPaths.p3486a460} fill="var(--fill-0, #44483B)" id="Vector" />
      </g>
    </svg>
  );
}

function Helper4() {
  return (
    <svg fill="none" preserveAspectRatio="none" viewBox="0 0 24 24" className="block size-full">
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
  );
}

function Helper3() {
  return (
    <svg fill="none" preserveAspectRatio="none" viewBox="0 0 24 24" className="block size-full">
      <g id="report_problem">
        <path d={svgPaths.p24139a00} fill="var(--fill-0, #44483B)" id="Vector" />
      </g>
    </svg>
  );
}

function Helper2() {
  return (
    <svg fill="none" preserveAspectRatio="none" viewBox="0 0 24 24" className="block size-full">
      <g id="rate_review">
        <path d={svgPaths.p14853080} fill="var(--fill-0, #174295)" id="Vector" />
      </g>
    </svg>
  );
}

function Helper1() {
  return (
    <svg fill="none" preserveAspectRatio="none" viewBox="0 0 24 24" className="block size-full">
      <g id="quiz">
        <path d={svgPaths.p38fcf780} fill="var(--fill-0, #44483B)" id="Vector" />
      </g>
    </svg>
  );
}

function Helper() {
  return (
    <svg fill="none" preserveAspectRatio="none" viewBox="0 0 24 24" className="block size-full">
      <g id="home">
        <path d={svgPaths.p1e128b00} fill="var(--fill-0, #44483B)" id="Vector" />
      </g>
    </svg>
  );
}

function Container() {
  return (
    <div className="h-px relative shrink-0 w-full" data-name="Container">
      <div className="absolute inset-[0_0_-0.01%_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1600 1">
          <g id="Container">
            <line id="Divider" stroke="var(--stroke-0, #C4C8B7)" x2="1600" y1="0.50014" y2="0.50014" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Logo() {
  return (
    <div className="h-[21px] relative shrink-0 w-[69.695px]" data-name="Logo">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 70 21">
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
    <Wrapper1 additionalClassNames="z-[1]">
      <path d={svgPaths.p32dc8f00} fill="var(--fill-0, #284000)" id="icon" />
    </Wrapper1>
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
      <Helper />
    </div>
  );
}

function Home1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="home">
      <Helper />
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
      <Helper1 />
    </div>
  );
}

function Quiz1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="quiz">
      <Helper1 />
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
      <Helper2 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <Helper2 />
    </div>
  );
}

function StateLayer3() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[56px]" data-name="State layer">
      <Icon1 />
      <Icon2 />
    </div>
  );
}

function IconContainer2() {
  return (
    <div className="bg-[#dae2ff] content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[28px] shrink-0" data-name="Icon container">
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
      <Helper3 />
    </div>
  );
}

function ReportProblem1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="report_problem">
      <Helper3 />
    </div>
  );
}

function StateLayer4() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center px-0 py-[4px] relative shrink-0 size-[56px]" data-name="State layer">
      <ReportProblem />
      <ReportProblem1 />
    </div>
  );
}

function IconContainer3() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[28px] shrink-0" data-name="Icon container">
      <StateLayer4 />
    </div>
  );
}

function Avviksoversikt() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-0 py-[4px] relative shrink-0 w-full" data-name="Avviksoversikt">
      <IconContainer3 />
    </div>
  );
}

function ReceiptLong() {
  return (
    <div className="absolute left-1/2 opacity-0 size-[24px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="receipt_long">
      <Helper4 />
    </div>
  );
}

function ReceiptLong1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="receipt_long">
      <Helper4 />
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
      <Helper5 />
    </div>
  );
}

function History1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="history">
      <Helper5 />
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
      <Avviksoversikt />
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
    <Wrapper5 additionalClassNames="relative shrink-0 size-[24px]">
      <g id="perm_identity">
        <path d={svgPaths.p24cfbd00} fill="var(--fill-0, #44483B)" id="Vector" />
      </g>
    </Wrapper5>
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

function Icon5() {
  return (
    <Wrapper1>
      <path d={svgPaths.p38ded900} fill="var(--fill-0, #1A1C16)" id="icon" />
    </Wrapper1>
  );
}

function StateLayer8() {
  return (
    <div className="content-stretch flex h-[40px] items-center justify-center relative shrink-0 w-full" data-name="State-layer">
      <Icon5 />
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[100px] shrink-0 w-[40px]" data-name="Content">
      <StateLayer8 />
    </div>
  );
}

function LeadingIcon() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[48px]" data-name="Leading icon">
      <Content />
    </div>
  );
}

function TextContent() {
  return (
    <div className="absolute content-stretch flex flex-col items-start justify-center left-[56px] right-[56px] top-1/2 translate-y-[-50%]" data-name="Text content">
      <p className="[white-space-collapse:collapse] font-['Roboto:Regular',sans-serif] font-normal leading-[28px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#1a1c16] text-[22px] text-nowrap w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Haugseter Gård
      </p>
    </div>
  );
}

function ChecklistNameActions() {
  return (
    <div className="relative shrink-0 w-full" data-name="Checklist name & actions">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[4px] py-0 relative w-full">
          <LeadingIcon />
          <TextContent />
        </div>
      </div>
    </div>
  );
}

function StateLayer9() {
  return (
    <StateLayer22>
      <TabContentsText text="Planlegg revisjon" additionalClassNames="overflow-clip px-0 py-[14px]" />
    </StateLayer22>
  );
}

function Tab() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[48px] items-center justify-end overflow-clip relative shrink-0" data-name="Tab 1">
      <StateLayer9 />
    </div>
  );
}

function StateLayer10() {
  return (
    <StateLayer22>
      <TabContentsText text="Revisjonsgrunnlag" additionalClassNames="overflow-clip px-0 py-[14px]" />
    </StateLayer22>
  );
}

function Tab1() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[48px] items-center justify-end overflow-clip relative shrink-0" data-name="Tab 2">
      <StateLayer10 />
    </div>
  );
}

function StateLayer11() {
  return (
    <StateLayer22>
      <TabContentsText text="Dokumentoversikt" additionalClassNames="overflow-clip px-0 py-[14px]" />
    </StateLayer22>
  );
}

function Tab2() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[48px] items-center justify-end overflow-clip relative shrink-0" data-name="Tab 3">
      <StateLayer11 />
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
        <p className="leading-[20px] whitespace-pre">Registrer revisjon</p>
      </div>
      <Indicator />
    </div>
  );
}

function StateLayer12() {
  return (
    <StateLayer22>
      <TabContents />
    </StateLayer22>
  );
}

function Tab3() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[48px] items-center justify-end overflow-clip relative shrink-0" data-name="Tab 4">
      <StateLayer12 />
    </div>
  );
}

function StateLayer13() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-center justify-end min-h-px min-w-px overflow-clip px-[16px] py-0 relative shrink-0" data-name="State-layer">
      <TabContentsText text="Skriv rapport" additionalClassNames="overflow-clip px-0 py-[14px]" />
    </div>
  );
}

function Tab5() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[48px] items-center justify-end overflow-clip relative shrink-0" data-name="Tab 6">
      <StateLayer13 />
    </div>
  );
}

function StateLayer14() {
  return (
    <StateLayer22>
      <TabContentsText text="Notater" additionalClassNames="overflow-clip px-0 py-[14px]" />
    </StateLayer22>
  );
}

function Tab6() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[48px] items-center justify-end overflow-clip relative shrink-0 w-[90px]" data-name="Tab 7">
      <StateLayer14 />
    </div>
  );
}

function TabGroup() {
  return (
    <div className="relative shrink-0 w-full" data-name="Tab group">
      <div className="size-full">
        <div className="content-stretch flex items-start pl-[52px] pr-0 py-0 relative w-full">
          <Tab />
          <Tab1 />
          <Tab2 />
          <Tab3 />
          <Tab5 />
          <Tab6 />
        </div>
      </div>
    </div>
  );
}

function Divider() {
  return (
    <div className="h-[2px] relative shrink-0 w-full" data-name="Divider">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1112 2">
        <g id="Divider">
          <line id="Divider_2" stroke="var(--stroke-0, #E3E3D9)" strokeWidth="2" x1="8.74228e-08" x2="1112" y1="1.00013" y2="1.00003" />
        </g>
      </svg>
    </div>
  );
}

function Tabs() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Tabs">
      <TabGroup />
      <Divider />
    </div>
  );
}

function ChecklistHeading() {
  return (
    <div className="content-stretch flex flex-col h-[98px] items-start justify-center relative shrink-0 w-full" data-name="Checklist heading">
      <ChecklistNameActions />
      <Tabs />
    </div>
  );
}

function Tabs1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Tabs">
      <ChecklistHeading />
    </div>
  );
}

function SearchButton() {
  return (
    <div className="content-stretch flex items-center relative self-stretch shrink-0 w-[296px]" data-name="Search Button">
      <Content1 />
    </div>
  );
}

function StateLayer15() {
  return (
    <div className="content-stretch flex h-[56px] items-center justify-center relative shrink-0 w-full" data-name="State-layer">
      <Helper6 />
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[100px] shrink-0 w-[56px]" data-name="Content">
      <StateLayer15 />
    </div>
  );
}

function AddQuestionButton() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Add question button">
      <Content2 />
    </div>
  );
}

function QuestionListHeading() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Question list heading">
      <SearchButton />
      <AddQuestionButton />
    </div>
  );
}

function LeadingElement() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0" data-name="Leading element">
      <BuildingBlocksMonogramText text="1" />
    </div>
  );
}

function TrailingElement() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="Trailing element">
      <ExpandMore />
    </div>
  );
}

function StateLayer16() {
  return (
    <div className="basis-0 content-stretch flex gap-[16px] grow items-center min-h-px min-w-px px-0 py-[8px] relative shrink-0 w-full" data-name="state-layer">
      <LeadingElement />
      <Content3 text="2/8" text1="Generelle krav til gården" />
      <TrailingElement />
    </div>
  );
}

function ListItemListItem0Density() {
  return (
    <div className="content-stretch flex flex-col h-[72px] items-center justify-center min-h-[72px] relative shrink-0 w-full" data-name="List item/List Item: 0 Density">
      <StateLayer16 />
    </div>
  );
}

function Frame() {
  return (
    <Wrapper2>
      <ListItemListItem0Density />
    </Wrapper2>
  );
}

function ChecklistQuestion() {
  return (
    <div className="bg-white content-stretch flex gap-[16px] items-center min-h-[64px] px-0 py-[8px] relative rounded-[12px] shrink-0 w-full z-[2]" data-name="checklist Question">
      <Frame />
    </div>
  );
}

function StatusIcon() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Status icon">
      <Pending />
    </div>
  );
}

function QuestionText() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Question text">
      <div className="-webkit-box basis-0 flex-col font-['Manrope:Medium',sans-serif] font-medium grow justify-center leading-[20px] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#44483b] text-[14px] text-left tracking-[0.1px]">
        <p className="mb-0">1.1 OVERSIKT OVER DOKUMENTASJON, ANALYSERESULTATER OG SERTIFSERINGER.</p>
        <p>&nbsp;</p>
      </div>
    </div>
  );
}

function Content4() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <QuestionText />
    </div>
  );
}

function ExpandQ() {
  return (
    <div className="content-stretch cursor-pointer flex gap-[10px] items-center relative shrink-0" data-name="Expand Q" role="button" tabIndex="0">
      <ArrowDropDown />
    </div>
  );
}

function ChecklistQuestion1() {
  return (
    <ChecklistQuestion25 additionalClassNames="z-[13]">
      <StatusIcon />
      <Content4 />
      <ExpandQ />
    </ChecklistQuestion25>
  );
}

function LeadingElement1() {
  return <div className="content-stretch flex items-center justify-center shrink-0" data-name="Leading element" />;
}

function StatusIcon1() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Status icon">
      <Pending />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0">
      <SnippetFolder />
    </div>
  );
}

function Content5() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <QuestionText1 text="1.1.1 Har du oversikt over alle driftsmidler du har kjøpt, og alle produkter du har solgt?" text1="&nbsp;" additionalClassNames="items-center" />
      <Frame1 />
    </div>
  );
}

function ChecklistQuestion2() {
  return (
    <ChecklistQuestion26 additionalClassNames="bg-white z-[4]">
      <LeadingElement1 />
      <StatusIcon1 />
      <Content5 />
    </ChecklistQuestion26>
  );
}

function LeadingElement2() {
  return <div className="content-stretch flex items-center justify-center shrink-0" data-name="Leading element" />;
}

function StatusIcon2() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Status icon">
      <Pending />
    </div>
  );
}

function Content6() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <QuestionText1 text="1.1.2 Har du en plan for hvordan du skal håndtere og eventuelt tilbakekalle helseskadelige produkter, samt varsle Mattilsynet og varemottaker?" text1="&nbsp;" additionalClassNames="items-center" />
    </div>
  );
}

function ChecklistQuestion3() {
  return (
    <ChecklistQuestion26 additionalClassNames="bg-white z-[3]">
      <LeadingElement2 />
      <StatusIcon2 />
      <Content6 />
    </ChecklistQuestion26>
  );
}

function LeadingElement3() {
  return <div className="content-stretch flex items-center justify-center shrink-0" data-name="Leading element" />;
}

function StatusIcon3() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Status icon">
      <Pending />
    </div>
  );
}

function QuestionText2() {
  return (
    <Wrapper7>
      <p className="mb-0">1.1.3 Arkiverer du analyseresultater, vedtak og tilbakemeldinger fra varemottaker og myndigheter?</p>
      <p className="mb-0">&nbsp;</p>
      <p className="mb-0">&nbsp;</p>
      <p className="mb-0">&nbsp;</p>
      <p>&nbsp;</p>
    </Wrapper7>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0">
      <SnippetFolder />
    </div>
  );
}

function Content7() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <QuestionText2 />
      <Frame2 />
    </div>
  );
}

function ChecklistQuestion4() {
  return (
    <ChecklistQuestion26 additionalClassNames="bg-white z-[2]">
      <LeadingElement3 />
      <StatusIcon3 />
      <Content7 />
    </ChecklistQuestion26>
  );
}

function LeadingElement4() {
  return <div className="content-stretch flex items-center justify-center shrink-0" data-name="Leading element" />;
}

function StatusIcon4() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Status icon">
      <Pending />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0">
      <SnippetFolder />
    </div>
  );
}

function Content8() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <QuestionText1 text="1.1.4 Har du en plan for hvordan du skal håndtere og eventuelt tilbakekalle helseskadelige produkter, samt varsle Mattilsynet og varemottaker?" text1="&nbsp;" additionalClassNames="items-center" />
      <Frame3 />
    </div>
  );
}

function ChecklistQuestion5() {
  return (
    <ChecklistQuestion26 additionalClassNames="bg-white z-[1]">
      <LeadingElement4 />
      <StatusIcon4 />
      <Content8 />
    </ChecklistQuestion26>
  );
}

function Component11QuestionGorups() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] isolate items-start relative shrink-0 w-full z-[12]" data-name="1.1 question gorups">
      <ChecklistQuestion2 />
      <ChecklistQuestion3 />
      <ChecklistQuestion4 />
      <ChecklistQuestion5 />
    </div>
  );
}

function StatusIcon5() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Status icon">
      <Pending />
    </div>
  );
}

function Content9() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <QuestionTextText text="1.2 GJØDSLINGSPLAN OG JORDPRØVER" additionalClassNames="items-start" />
    </div>
  );
}

function ExpandQ1() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="Expand Q">
      <ArrowDropDown />
    </div>
  );
}

function ChecklistQuestion6() {
  return (
    <ChecklistQuestion26 additionalClassNames="bg-white z-[11]">
      <StatusIcon5 />
      <Content9 />
      <ExpandQ1 />
    </ChecklistQuestion26>
  );
}

function StatusIcon6() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Status icon">
      <Pending />
    </div>
  );
}

function Content10() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <QuestionTextText text="1.3 LAGRING OG BRUK AV HUSDYRGJØDSEL" additionalClassNames="items-start" />
    </div>
  );
}

function ExpandQ2() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="Expand Q">
      <ArrowDropDown />
    </div>
  );
}

function ChecklistQuestion7() {
  return (
    <ChecklistQuestion26 additionalClassNames="bg-white z-10">
      <StatusIcon6 />
      <Content10 />
      <ExpandQ2 />
    </ChecklistQuestion26>
  );
}

function StatusIcon7() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Status icon">
      <Pending />
    </div>
  );
}

function Content11() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <QuestionTextText text="1.4 BRUK AV AVLØPSSLAM, KOMPOST, BIOREST ELLER ANNEN ORGANISK GJØDSEL" additionalClassNames="items-start" />
    </div>
  );
}

function ExpandQ3() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="Expand Q">
      <ArrowDropDown />
    </div>
  );
}

function ChecklistQuestion8() {
  return (
    <ChecklistQuestion26 additionalClassNames="bg-white z-[9]">
      <StatusIcon7 />
      <Content11 />
      <ExpandQ3 />
    </ChecklistQuestion26>
  );
}

function StatusIcon8() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Status icon">
      <Pending />
    </div>
  );
}

function QuestionText3() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Question text">
      <div className="-webkit-box basis-0 flex-col font-['Manrope:Medium',sans-serif] font-medium grow justify-center leading-[0] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#44483b] text-[14px] text-left tracking-[0.1px]">
        <p className="leading-[20px]">1.5 LAGRING OG BRUK AV PLANTEVERNMIDLER</p>
      </div>
    </div>
  );
}

function Content12() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <QuestionText3 />
    </div>
  );
}

function ExpandQ4() {
  return (
    <div className="content-stretch cursor-pointer flex gap-[10px] items-center relative shrink-0" data-name="Expand Q" role="button" tabIndex="0">
      <ArrowDropDown />
    </div>
  );
}

function ChecklistQuestion9() {
  return (
    <ChecklistQuestion25 additionalClassNames="z-[8]">
      <StatusIcon8 />
      <Content12 />
      <ExpandQ4 />
    </ChecklistQuestion25>
  );
}

function LeadingElement5() {
  return <div className="content-stretch flex items-center justify-center shrink-0" data-name="Leading element" />;
}

function StatusIcon9() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Status icon">
      <Pending />
    </div>
  );
}

function QuestionText4() {
  return (
    <Wrapper7>
      <p className="mb-0">1.5.1 Kan du dokumentere at plantevernmidler kun er brukt av personell med gyldig autorisasjon?</p>
      <p className="mb-0">&nbsp;</p>
      <p>&nbsp;</p>
    </Wrapper7>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0">
      <SnippetFolder />
    </div>
  );
}

function Content13() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <QuestionText4 />
      <Frame4 />
    </div>
  );
}

function ChecklistQuestion10() {
  return (
    <ChecklistQuestion26 additionalClassNames="bg-white z-[8]">
      <LeadingElement5 />
      <StatusIcon9 />
      <Content13 />
    </ChecklistQuestion26>
  );
}

function LeadingElement6() {
  return <div className="content-stretch flex items-center justify-center shrink-0" data-name="Leading element" />;
}

function StatusIcon10() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Status icon">
      <Pending />
    </div>
  );
}

function Content14() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <QuestionTextText text="1.5.2 Er plantevernmidlene brukt i samsvar med godkjent etikett?" additionalClassNames="items-center" />
    </div>
  );
}

function ChecklistQuestion11() {
  return (
    <ChecklistQuestion26 additionalClassNames="bg-white z-[7]">
      <LeadingElement6 />
      <StatusIcon10 />
      <Content14 />
    </ChecklistQuestion26>
  );
}

function LeadingElement7() {
  return <div className="content-stretch flex items-center justify-center shrink-0" data-name="Leading element" />;
}

function StatusIcon11() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Status icon">
      <Pending />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0">
      <SnippetFolder />
    </div>
  );
}

function Content15() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <QuestionTextText text="1.5.4 Oppfyller du kravene til integrert plantevern, beskyttelse av vannmiljø, og journalføring?" additionalClassNames="items-center" />
      <Frame5 />
    </div>
  );
}

function ChecklistQuestion12() {
  return (
    <ChecklistQuestion26 additionalClassNames="bg-white z-[5]">
      <LeadingElement7 />
      <StatusIcon11 />
      <Content15 />
    </ChecklistQuestion26>
  );
}

function LeadingElement8() {
  return <div className="content-stretch flex items-center justify-center shrink-0" data-name="Leading element" />;
}

function StatusIcon12() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Status icon">
      <Pending />
    </div>
  );
}

function QuestionText5() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Question text">
      <div className="-webkit-box basis-0 flex-col font-['Manrope:Medium',sans-serif] font-medium grow justify-center leading-[20px] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#174295] text-[14px] tracking-[0.1px]">
        <p className="mb-0">1.5.5 Oppbevarer du plantevernmidlene avlåst og merket, og i henhold til eventuelle tilleggskrav som står på etiketten?</p>
        <p>&nbsp;</p>
      </div>
    </div>
  );
}

function Content16() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <QuestionText5 />
    </div>
  );
}

function ChecklistQuestion13() {
  return (
    <ChecklistQuestion26 additionalClassNames="bg-[#dae2ff] z-[4]">
      <LeadingElement8 />
      <StatusIcon12 />
      <Content16 />
    </ChecklistQuestion26>
  );
}

function Component15QuestionGorups() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] isolate items-start relative shrink-0 w-full z-[7]" data-name="1.5 question gorups">
      <ChecklistQuestion10 />
      <ChecklistQuestion11 />
      <ChecklistQuestion12 />
      <ChecklistQuestion13 />
    </div>
  );
}

function StatusIcon13() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Status icon">
      <Pending />
    </div>
  );
}

function Content17() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <QuestionText1 text="1.6 MELDEPLIKTIG UGRESS OG PLANTESKADEGJØRERE" text1="&nbsp;" additionalClassNames="items-start" />
    </div>
  );
}

function ExpandQ5() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="Expand Q">
      <ArrowDropDown />
    </div>
  );
}

function ChecklistQuestion14() {
  return (
    <ChecklistQuestion26 additionalClassNames="bg-white z-[6]">
      <StatusIcon13 />
      <Content17 />
      <ExpandQ5 />
    </ChecklistQuestion26>
  );
}

function StatusIcon14() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Status icon">
      <Pending />
    </div>
  );
}

function Content18() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <QuestionText1 text="1.7 LAGRING AV DRIFTSMIDLER, PUNKTUTSLIPP OG AVFALLSHÅNDTERING" text1="&nbsp;" additionalClassNames="items-start" />
    </div>
  );
}

function ExpandQ6() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="Expand Q">
      <ArrowDropDown />
    </div>
  );
}

function ChecklistQuestion15() {
  return (
    <ChecklistQuestion26 additionalClassNames="bg-white z-[5]">
      <StatusIcon14 />
      <Content18 />
      <ExpandQ6 />
    </ChecklistQuestion26>
  );
}

function StatusIcon15() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Status icon">
      <Pending />
    </div>
  );
}

function Content19() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <QuestionText1 text="1.8 SKADEGJØRERE I HUSDYRROM, LAGER, SORTERINGS- OG FOREDLINGSROM" text1="&nbsp;" additionalClassNames="items-start" />
    </div>
  );
}

function ExpandQ7() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="Expand Q">
      <ArrowDropDown />
    </div>
  );
}

function ChecklistQuestion16() {
  return (
    <ChecklistQuestion26 additionalClassNames="bg-white z-[4]">
      <StatusIcon15 />
      <Content19 />
      <ExpandQ7 />
    </ChecklistQuestion26>
  );
}

function StatusIcon16() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Status icon">
      <Pending />
    </div>
  );
}

function Content20() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <QuestionTextText text="1.9 ET KLIMAVENNLIG LANDBRUK" additionalClassNames="items-start" />
    </div>
  );
}

function ExpandQ8() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="Expand Q">
      <ArrowDropDown />
    </div>
  );
}

function ChecklistQuestion17() {
  return (
    <ChecklistQuestion26 additionalClassNames="bg-white z-[3]">
      <StatusIcon16 />
      <Content20 />
      <ExpandQ8 />
    </ChecklistQuestion26>
  );
}

function StatusIcon17() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Status icon">
      <Pending />
    </div>
  );
}

function Content21() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <QuestionText1 text="1.10 KULTURMINNER, KULTURLANDSKAP OG BIOLOGISK MANGFOLD - REGIONALE OG LOKALE MILJØBESTEMMELSER" text1="&nbsp;" additionalClassNames="items-start" />
    </div>
  );
}

function ExpandQ9() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="Expand Q">
      <ArrowDropDown />
    </div>
  );
}

function ChecklistQuestion18() {
  return (
    <ChecklistQuestion26 additionalClassNames="bg-white z-[2]">
      <StatusIcon17 />
      <Content21 />
      <ExpandQ9 />
    </ChecklistQuestion26>
  );
}

function StatusIcon18() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Status icon">
      <Pending />
    </div>
  );
}

function Content22() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <QuestionText1 text="1.11 SMITTEFOREBYGGING VED KJØP AV BRUKT UTSTYR FRA UTLANDET" text1="&nbsp;" additionalClassNames="items-start" />
    </div>
  );
}

function ExpandQ10() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="Expand Q">
      <ArrowDropDown />
    </div>
  );
}

function ChecklistQuestion19() {
  return (
    <ChecklistQuestion26 additionalClassNames="bg-white z-[1]">
      <StatusIcon18 />
      <Content22 />
      <ExpandQ10 />
    </ChecklistQuestion26>
  );
}

function GroupQuestions() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] isolate items-start relative shrink-0 w-full z-[1]" data-name="Group Questions">
      <ChecklistQuestion1 />
      <Component11QuestionGorups />
      <ChecklistQuestion6 />
      <ChecklistQuestion7 />
      <ChecklistQuestion8 />
      <ChecklistQuestion9 />
      <Component15QuestionGorups />
      <ChecklistQuestion14 />
      <ChecklistQuestion15 />
      <ChecklistQuestion16 />
      <ChecklistQuestion17 />
      <ChecklistQuestion18 />
      <ChecklistQuestion19 />
    </div>
  );
}

function ChecklistQuestions() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] isolate items-start pb-[16px] pt-0 px-0 relative shrink-0 w-full" data-name="Checklist questions">
      <ChecklistQuestion />
      <GroupQuestions />
    </div>
  );
}

function LeadingElement9() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0" data-name="Leading element">
      <BuildingBlocksMonogramText text="10" />
    </div>
  );
}

function TrailingElement1() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="Trailing element">
      <ExpandMore />
    </div>
  );
}

function StateLayer17() {
  return (
    <div className="basis-0 content-stretch flex gap-[16px] grow items-center min-h-px min-w-px px-0 py-[8px] relative shrink-0 w-full" data-name="state-layer">
      <LeadingElement9 />
      <Content3 text="2/8" text1="Generelle krav til gården" />
      <TrailingElement1 />
    </div>
  );
}

function ListItemListItem0Density1() {
  return (
    <div className="content-stretch flex flex-col h-[72px] items-center justify-center min-h-[72px] relative shrink-0 w-full" data-name="List item/List Item: 0 Density">
      <StateLayer17 />
    </div>
  );
}

function Frame6() {
  return (
    <Wrapper2>
      <ListItemListItem0Density1 />
    </Wrapper2>
  );
}

function ChecklistQuestion20() {
  return (
    <div className="bg-white content-stretch flex gap-[16px] items-center min-h-[64px] px-0 py-[8px] relative rounded-[12px] shrink-0 w-full" data-name="checklist Question">
      <Frame6 />
    </div>
  );
}

function LeadingElement10() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0" data-name="Leading element">
      <BuildingBlocksMonogramText text="30" />
    </div>
  );
}

function TrailingElement2() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="Trailing element">
      <ExpandMore />
    </div>
  );
}

function StateLayer18() {
  return (
    <div className="basis-0 content-stretch flex gap-[16px] grow items-center min-h-px min-w-px px-0 py-[8px] relative shrink-0 w-full" data-name="state-layer">
      <LeadingElement10 />
      <Content3 text="2/8" text1="Generelle krav til gården" />
      <TrailingElement2 />
    </div>
  );
}

function ListItemListItem0Density2() {
  return (
    <div className="content-stretch flex flex-col h-[72px] items-center justify-center min-h-[72px] relative shrink-0 w-full" data-name="List item/List Item: 0 Density">
      <StateLayer18 />
    </div>
  );
}

function Frame7() {
  return (
    <Wrapper2>
      <ListItemListItem0Density2 />
    </Wrapper2>
  );
}

function ChecklistQuestion21() {
  return (
    <div className="bg-white content-stretch flex gap-[16px] items-center min-h-[64px] px-0 py-[8px] relative rounded-[12px] shrink-0 w-full" data-name="checklist Question">
      <Frame7 />
    </div>
  );
}

function LeadingElement11() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0" data-name="Leading element">
      <BuildingBlocksMonogramText text="32" />
    </div>
  );
}

function TrailingElement3() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="Trailing element">
      <ExpandMore />
    </div>
  );
}

function StateLayer19() {
  return (
    <div className="basis-0 content-stretch flex gap-[16px] grow items-center min-h-px min-w-px px-0 py-[8px] relative shrink-0 w-full" data-name="state-layer">
      <LeadingElement11 />
      <Content3 text="2/8" text1="Generelle krav til gården" />
      <TrailingElement3 />
    </div>
  );
}

function ListItemListItem0Density3() {
  return (
    <div className="content-stretch flex flex-col h-[72px] items-center justify-center min-h-[72px] relative shrink-0 w-full" data-name="List item/List Item: 0 Density">
      <StateLayer19 />
    </div>
  );
}

function Frame9() {
  return (
    <Wrapper2>
      <ListItemListItem0Density3 />
    </Wrapper2>
  );
}

function ChecklistQuestion22() {
  return (
    <div className="bg-white content-stretch flex gap-[16px] items-center min-h-[64px] px-0 py-[8px] relative rounded-[12px] shrink-0 w-full" data-name="checklist Question">
      <Frame9 />
    </div>
  );
}

function QuestionNavigation() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-full items-start p-[16px] relative shrink-0 w-[400px] z-[3]" data-name="Question Navigation">
      <QuestionListHeading />
      <ChecklistQuestions />
      <ChecklistQuestion20 />
      <ChecklistQuestion21 />
      <ChecklistQuestion22 />
    </div>
  );
}

function Container1() {
  return (
    <div className="h-full relative shrink-0 w-px z-[2]" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 892">
        <g clipPath="url(#clip0_410_27372)" id="Container">
          <line id="Divider" stroke="var(--stroke-0, #C4C8B7)" x1="0.499959" x2="0.499998" y1="-2.18557e-08" y2="892" />
        </g>
        <defs>
          <clipPath id="clip0_410_27372">
            <rect fill="white" height="892" width="1" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Number() {
  return (
    <div className="basis-0 content-stretch flex font-['Quatro:Regular',sans-serif] gap-[8px] grow items-start leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#1a1c16] text-[22px]" data-name="Number">
      <div className="flex flex-col justify-center relative shrink-0 text-nowrap">
        <p className="leading-[28px] whitespace-pre">
          <span className="font-['Quatro:Regular',sans-serif] not-italic">1.</span>5<span className="font-['Quatro:Regular',sans-serif] not-italic">.</span>5
        </p>
      </div>
      <div className="basis-0 flex flex-col grow justify-center min-h-px min-w-px relative shrink-0">
        <p className="leading-[28px]">Har du oversikt over alle driftsmidler du har kjøpt, og alle produkter du har solgt?</p>
      </div>
    </div>
  );
}

function VolumeUp() {
  return (
    <Wrapper5 additionalClassNames="relative shrink-0 size-[24px]">
      <g id="volume_up">
        <path d={svgPaths.p1858ec00} fill="var(--fill-0, #44483B)" id="Vector" />
      </g>
    </Wrapper5>
  );
}

function StateLayer20() {
  return (
    <div className="content-stretch flex items-center justify-center p-[8px] relative shrink-0" data-name="state-layer">
      <VolumeUp />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0" data-name="container">
      <StateLayer20 />
    </div>
  );
}

function TrailingIcon1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[48px]" data-name="trailing-icon 3">
      <Container2 />
    </div>
  );
}

function QuestionMark() {
  return (
    <Wrapper5 additionalClassNames="relative shrink-0 size-[24px]">
      <g id="question_mark">
        <path d={svgPaths.p36769380} fill="var(--fill-0, #44483B)" id="Vector" />
      </g>
    </Wrapper5>
  );
}

function StateLayer21() {
  return (
    <div className="content-stretch flex items-center justify-center p-[8px] relative shrink-0" data-name="state-layer">
      <QuestionMark />
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0" data-name="container">
      <StateLayer21 />
    </div>
  );
}

function TrailingIcon() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[48px]" data-name="trailing-icon 2">
      <Container3 />
    </div>
  );
}

function InfoIconButtons() {
  return (
    <div className="content-stretch flex h-[48px] items-center justify-end relative shrink-0" data-name="Info icon buttons">
      <TrailingIcon1 />
      <TrailingIcon />
    </div>
  );
}

function NumberInfoIconButtons() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Number & info icon buttons">
      <Number />
      <InfoIconButtons />
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Text">
      <NumberInfoIconButtons />
    </div>
  );
}

function SnippetFolder1() {
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

function StateLayer23() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center pl-[8px] pr-[12px] py-[6px] relative shrink-0" data-name="state-layer">
      <SnippetFolder1 />
      <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[14px] text-center text-nowrap text-white tracking-[0.1px]">
        <p className="leading-[20px] whitespace-pre">Dokumentasjon kreves</p>
      </div>
    </div>
  );
}

function DocumentationChip() {
  return (
    <div className="bg-[#365bae] content-stretch flex h-[32px] items-center justify-center overflow-clip relative rounded-[8px] shrink-0" data-name="Documentation chip">
      <StateLayer23 />
    </div>
  );
}

function AboutTheQuestionsChips() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="About the questions chips">
      <DocumentationChip />
    </div>
  );
}

function Question() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-center px-0 py-[12px] relative shrink-0 w-full" data-name="Question">
      <Text />
      <AboutTheQuestionsChips />
    </div>
  );
}

function StateLayer24() {
  return (
    <div className="content-stretch flex items-center justify-center p-[8px] relative shrink-0" data-name="state-layer">
      <Icon7 />
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0" data-name="container">
      <StateLayer24 />
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

function LeadingElement12() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Leading element">
      <RadioButtons />
    </div>
  );
}

function StateLayer25() {
  return (
    <StateLayer43>
      <LeadingElement12 />
      <ContentText text="Ja" />
    </StateLayer43>
  );
}

function Yes() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-[40px] items-center justify-center min-h-[40px] min-w-px relative shrink-0" data-name="Yes">
      <StateLayer25 />
    </div>
  );
}

function StateLayer26() {
  return (
    <div className="content-stretch flex items-center justify-center p-[8px] relative shrink-0" data-name="state-layer">
      <Icon7 />
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0" data-name="container">
      <StateLayer26 />
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

function LeadingElement13() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Leading element">
      <RadioButtons1 />
    </div>
  );
}

function StateLayer27() {
  return (
    <StateLayer43>
      <LeadingElement13 />
      <ContentText text="Nei" />
    </StateLayer43>
  );
}

function No() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-[40px] items-center justify-center min-h-[40px] min-w-px relative shrink-0" data-name="No">
      <StateLayer27 />
    </div>
  );
}

function StateLayer28() {
  return (
    <div className="content-stretch flex items-center justify-center p-[8px] relative shrink-0" data-name="state-layer">
      <Icon8 />
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0" data-name="container">
      <StateLayer28 />
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

function LeadingElement14() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Leading element">
      <RadioButtons2 />
    </div>
  );
}

function StateLayer29() {
  return (
    <StateLayer43>
      <LeadingElement14 />
      <ContentText text="Ikke relevant" />
    </StateLayer43>
  );
}

function NotRelevant() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-[40px] items-center justify-center min-h-[40px] min-w-px relative shrink-0" data-name="Not relevant">
      <StateLayer29 />
    </div>
  );
}

function AnswerSelection() {
  return (
    <div className="content-stretch flex items-start px-0 py-[16px] relative shrink-0 w-full" data-name="Answer selection">
      <Yes />
      <No />
      <NotRelevant />
    </div>
  );
}

function TabContents1() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center justify-center min-h-px min-w-px relative shrink-0" data-name="Tab Contents">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[14px] text-center text-nowrap tracking-[0.1px]">
        <p className="leading-[20px] whitespace-pre">Avvik</p>
      </div>
    </div>
  );
}

function StateLayer30() {
  return (
    <StateLayer44>
      <TabContents1 />
      <div className="absolute bg-[#4a671e] bottom-0 h-[2px] left-0 right-0" data-name="Indicator" />
    </StateLayer44>
  );
}

function Tab4() {
  return (
    <div className="content-stretch flex flex-col h-[48px] items-center justify-end overflow-clip relative shrink-0 w-[90px]" data-name="Tab 1">
      <StateLayer30 />
    </div>
  );
}

function StateLayer31() {
  return (
    <StateLayer44>
      <TabContentsText text="Egenrevisjonssvar" />
    </StateLayer44>
  );
}

function Tab7() {
  return (
    <div className="content-stretch flex flex-col h-[48px] items-center justify-end overflow-clip relative shrink-0" data-name="Tab 3">
      <StateLayer31 />
    </div>
  );
}

function StateLayer32() {
  return (
    <StateLayer44>
      <TabContentsText text="Notat" />
    </StateLayer44>
  );
}

function Tab8() {
  return (
    <div className="content-stretch flex flex-col h-[48px] items-center justify-end overflow-clip relative shrink-0 w-[90px]" data-name="Tab 4">
      <StateLayer32 />
    </div>
  );
}

function TabGroup1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Tab group">
      <Tab4 />
      <Tab7 />
      <Tab8 />
    </div>
  );
}

function Divider1() {
  return (
    <div className="h-[2px] relative shrink-0 w-full" data-name="Divider">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 631 2">
        <g id="Divider">
          <line id="Divider_2" stroke="var(--stroke-0, #E3E3D9)" strokeWidth="2" x1="8.74228e-08" x2="631" y1="1.00006" y2="1" />
        </g>
      </svg>
    </div>
  );
}

function Tabs2() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Tabs">
      <TabGroup1 />
      <Divider1 />
    </div>
  );
}

function StateLayer33() {
  return (
    <div className="content-stretch flex items-center justify-center p-[8px] relative shrink-0" data-name="state-layer">
      <Icon8 />
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0" data-name="container">
      <StateLayer33 />
    </div>
  );
}

function RadioButtons3() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[24px]" data-name="Radio buttons">
      <Container7 />
    </div>
  );
}

function LeadingElement15() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Leading element">
      <RadioButtons3 />
    </div>
  );
}

function StateLayer34() {
  return (
    <StateLayer43>
      <LeadingElement15 />
      <Content23 text="Lite avvik" text1="Liten uorden eller manglende oppslag, enkelt å rette opp uten større tiltak." additionalClassNames="text-[#3d2c00]" />
    </StateLayer43>
  );
}

function ListItemListItem4Density() {
  return (
    <div className="bg-[#fdeeb1] content-stretch flex flex-col h-[56px] items-center justify-center min-h-[56px] relative rounded-[8px] shrink-0 w-full" data-name="List item/List Item: -4 Density">
      <StateLayer34 />
    </div>
  );
}

function Icon9() {
  return (
    <Wrapper>
      <path d={svgPaths.p1ee5e230} fill="var(--fill-0, #3D2100)" id="icon_2" />
    </Wrapper>
  );
}

function StateLayer35() {
  return (
    <div className="content-stretch flex items-center justify-center p-[8px] relative shrink-0" data-name="state-layer">
      <Icon9 />
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0" data-name="container">
      <StateLayer35 />
    </div>
  );
}

function RadioButtons4() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[24px]" data-name="Radio buttons">
      <Container8 />
    </div>
  );
}

function LeadingElement16() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Leading element">
      <RadioButtons4 />
    </div>
  );
}

function Content24() {
  return (
    <div className="basis-0 content-stretch flex flex-col font-['Manrope:Regular',sans-serif] font-normal grow items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0 text-[#3d2100]" data-name="Content">
      <div className="flex flex-col justify-center leading-[0] relative shrink-0 text-[16px] tracking-[0.5px] w-full">
        <p className="leading-[24px]">Avvik</p>
      </div>
      <p className="[white-space-collapse:collapse] leading-[20px] overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-nowrap tracking-[0.25px] w-full">Merkingen og strukturen er mangelfull, men risikoen er lav.</p>
    </div>
  );
}

function StateLayer36() {
  return (
    <div className="relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[16px] py-0 relative w-full">
          <LeadingElement16 />
          <Content24 />
        </div>
      </div>
    </div>
  );
}

function ListItemListItem4Density1() {
  return (
    <div className="bg-[#fdd19f] content-stretch flex flex-col items-center justify-center min-h-[56px] relative rounded-[8px] shrink-0 w-full" data-name="List item/List Item: -4 Density">
      <StateLayer36 />
    </div>
  );
}

function StateLayer37() {
  return (
    <div className="content-stretch flex items-center justify-center p-[8px] relative shrink-0" data-name="state-layer">
      <Icon8 />
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0" data-name="container">
      <StateLayer37 />
    </div>
  );
}

function RadioButtons5() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[24px]" data-name="Radio buttons">
      <Container9 />
    </div>
  );
}

function LeadingElement17() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Leading element">
      <RadioButtons5 />
    </div>
  );
}

function StateLayer38() {
  return (
    <StateLayer43>
      <LeadingElement17 />
      <Content23 text="Stor avvik" text1="Verken låsing eller merking er tilfredsstillende — høy risiko for feilbruk." additionalClassNames="text-[#410002]" />
    </StateLayer43>
  );
}

function ListItemListItem4Density2() {
  return (
    <div className="bg-[#ffdad6] content-stretch flex flex-col h-[56px] items-center justify-center min-h-[56px] relative rounded-[8px] shrink-0 w-full" data-name="List item/List Item: -4 Density">
      <StateLayer38 />
    </div>
  );
}

function DeviationGrades() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start px-0 py-[8px] relative shrink-0 w-full" data-name="Deviation Grades">
      <ListItemListItem4Density />
      <ListItemListItem4Density1 />
      <ListItemListItem4Density2 />
    </div>
  );
}

function HeaderContainer() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-x-clip overflow-y-auto relative shrink-0 w-full" data-name="Header Container">
      <DeviationGrades />
    </div>
  );
}

function StateLayer39() {
  return (
    <div className="content-stretch flex h-[40px] items-center justify-center relative shrink-0 w-full" data-name="State-layer">
      <Helper6 />
    </div>
  );
}

function Content26() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[100px] shrink-0 w-[40px]" data-name="Content">
      <StateLayer39 />
    </div>
  );
}

function IconButton1() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[48px]" data-name="Icon button">
      <Content26 />
    </div>
  );
}

function Frame8() {
  return (
    <Wrapper3>
      <Content25 text="Mangel" text1="Påkrevd" text2="Etiketter er delvis uleselige og plasseringen er uoversiktlig." />
      <IconButton1 />
    </Wrapper3>
  );
}

function HorizontalFullWidth() {
  return (
    <Wrapper6>
      <g id="Horizontal/Full-width">
        <line id="Divider" stroke="var(--stroke-0, #C4C8B7)" x1="4.37114e-08" x2="599" y1="0.500052" y2="0.5" />
      </g>
    </Wrapper6>
  );
}

function AppUserInput() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center justify-center min-h-[64px] pb-0 pt-[8px] px-0 relative shrink-0 w-full" data-name="App User Input">
      <Frame8 />
      <HorizontalFullWidth />
    </div>
  );
}

function StateLayer40() {
  return (
    <div className="content-stretch flex h-[40px] items-center justify-center relative shrink-0 w-full" data-name="State-layer">
      <Helper6 />
    </div>
  );
}

function Content27() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[100px] shrink-0 w-[40px]" data-name="Content">
      <StateLayer40 />
    </div>
  );
}

function IconButton2() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[48px]" data-name="Icon button">
      <Content27 />
    </div>
  );
}

function Frame10() {
  return (
    <Wrapper3>
      <Content25 text="Bevis" text1="Påkrevd" text2="To midler står utenfor skapet på en hylle sammen med rengjøringsmidler. Noen beholdere mangler tydelig merking eller har gamle, uleselige etiketter. Skapet er ellers intakt og låsbart." />
      <IconButton2 />
    </Wrapper3>
  );
}

function AppUserInput1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center justify-center min-h-[64px] pb-0 pt-[8px] px-0 relative shrink-0 w-full" data-name="App User Input">
      <Frame10 />
    </div>
  );
}

function Upload() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="upload">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="upload">
          <path d={svgPaths.p2de34800} fill="var(--fill-0, #44483B)" id="icon" />
        </g>
      </svg>
    </div>
  );
}

function StateLayer41() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[10px] relative shrink-0" data-name="State-layer">
      <Upload />
      <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#44483b] text-[14px] text-nowrap tracking-[0.1px]">
        <p className="leading-[20px] whitespace-pre">Last opp bilde</p>
      </div>
    </div>
  );
}

function Content28() {
  return (
    <div className="relative rounded-[100px] shrink-0" data-name="Content">
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[inherit]">
        <StateLayer41 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#c4c8b7] border-solid inset-0 pointer-events-none rounded-[100px]" />
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch flex h-[48px] items-center justify-center relative shrink-0" data-name="Button">
      <Content28 />
    </div>
  );
}

function ContentContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Content Container">
      <AppUserInput1 />
      <Button />
      <Divider2 />
    </div>
  );
}

function StateLayer42() {
  return (
    <div className="content-stretch flex h-[40px] items-center justify-center relative shrink-0 w-full" data-name="State-layer">
      <Helper6 />
    </div>
  );
}

function Content29() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[100px] shrink-0 w-[40px]" data-name="Content">
      <StateLayer42 />
    </div>
  );
}

function IconButton3() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[48px]" data-name="Icon button">
      <Content29 />
    </div>
  );
}

function Frame11() {
  return (
    <Wrapper3>
      <Content25 text="Krav (fra veileder)" text1="Påkrevd" text2="Alle beholdere skal ha tydelig og lesbar merking, og oppbevares adskilt fra andre kjemikalier for å hindre forveksling." />
      <IconButton3 />
    </Wrapper3>
  );
}

function AppUserInput2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center justify-center min-h-[64px] pb-0 pt-[8px] px-0 relative shrink-0 w-full" data-name="App User Input">
      <Frame11 />
    </div>
  );
}

function FooterContainer() {
  return <div className="content-stretch flex items-center justify-end shrink-0 w-full" data-name="Footer Container" />;
}

function Container10() {
  return (
    <div className="relative rounded-[12px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#c4c8b7] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start p-[16px] relative w-full">
          <HeaderContainer />
          <Divider2 />
          <AppUserInput />
          <ContentContainer />
          <AppUserInput2 />
          <FooterContainer />
        </div>
      </div>
    </div>
  );
}

function AuditDeviation() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[880px] relative rounded-[12px] shrink-0 w-full" data-name="Audit deviation">
      <Container10 />
    </div>
  );
}

function RevisorQuestionTabs() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start max-w-[704px] min-w-[600px] relative shrink-0 w-full" data-name="Revisor Question Tabs">
      <Tabs2 />
      <AuditDeviation />
    </div>
  );
}

function StateLayer45() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center px-[24px] py-[16px] relative shrink-0" data-name="State-layer">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[16px] text-nowrap text-white tracking-[0.15px]">
        <p className="leading-[24px] whitespace-pre">Neste spørsmål</p>
      </div>
    </div>
  );
}

function Content30() {
  return (
    <div className="bg-[#4a671e] content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0" data-name="Content">
      <StateLayer45 />
    </div>
  );
}

function NextButton() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="next Button">
      <Content30 />
    </div>
  );
}

function Buttons() {
  return (
    <div className="basis-0 content-stretch flex gap-[16px] grow items-center justify-end min-h-px min-w-px relative shrink-0" data-name="Buttons">
      <NextButton />
    </div>
  );
}

function NavigationButtons() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-end min-h-px min-w-px relative shrink-0" data-name="Navigation buttons">
      <Buttons />
    </div>
  );
}

function QuestionNavigationButtons() {
  return (
    <div className="content-stretch flex items-start justify-end px-0 py-[24px] relative shrink-0 w-full" data-name="Question navigation buttons">
      <NavigationButtons />
    </div>
  );
}

function MainContents() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Main contents">
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start px-[40px] py-0 relative size-full">
          <Question />
          <AnswerSelection />
          <RevisorQuestionTabs />
          <QuestionNavigationButtons />
        </div>
      </div>
    </div>
  );
}

function QuestionContent() {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px overflow-clip relative shrink-0 w-full" data-name="Question Content">
      <MainContents />
    </div>
  );
}

function QuestionContainer() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start min-h-px min-w-px relative shrink-0 z-[1]" data-name="Question Container">
      <QuestionContent />
    </div>
  );
}

function NyPrototype() {
  return (
    <div className="basis-0 content-stretch flex grow isolate items-center min-h-px min-w-px relative shrink-0 w-full" data-name="ny prototype">
      <QuestionNavigation />
      <Container1 />
      <QuestionContainer />
    </div>
  );
}

function Content31() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start min-h-px min-w-px relative shrink-0" data-name="Content">
      <Tabs1 />
      <NyPrototype />
    </div>
  );
}

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

function HeaderContainer1() {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0" data-name="Header Container">
      <HeaderContent />
    </div>
  );
}

function Icon10() {
  return (
    <Wrapper1>
      <path d={svgPaths.p2edaeb50} fill="var(--fill-0, #1A1C16)" id="icon" />
    </Wrapper1>
  );
}

function StateLayer46() {
  return (
    <div className="content-stretch flex items-center justify-center p-[8px] relative shrink-0" data-name="state-layer">
      <Icon10 />
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0" data-name="container">
      <StateLayer46 />
    </div>
  );
}

function TrailingIcon2() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[48px]" data-name="trailing-icon 3">
      <Container11 />
    </div>
  );
}

function Header() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Header">
      <HeaderContainer1 />
      <TrailingIcon2 />
    </div>
  );
}

function Icon11() {
  return (
    <Wrapper5 additionalClassNames="relative shrink-0 size-[24px]">
      <g id="mic">
        <g id="Vector">
          <path d={svgPaths.p2ff32f00} fill="var(--fill-0, #44483B)" />
          <path d={svgPaths.pb6a2200} fill="var(--fill-0, #44483B)" />
        </g>
      </g>
    </Wrapper5>
  );
}

function StateLayer47() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center px-[24px] py-[16px] relative shrink-0" data-name="State-layer">
      <Icon11 />
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#44483b] text-[16px] text-nowrap tracking-[0.15px]">
        <p className="leading-[24px] whitespace-pre">Snakk inn notat</p>
      </div>
    </div>
  );
}

function Content32() {
  return (
    <Wrapper8>
      <StateLayer47 />
    </Wrapper8>
  );
}

function SearchButton1() {
  return (
    <div className="content-stretch flex h-[56px] items-center relative shrink-0 w-full" data-name="Search Button">
      <Content32 />
    </div>
  );
}

function PlaceholderTextContainer() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Placeholder text container">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#44483b] text-[16px] text-nowrap tracking-[0.5px]">
        <p className="leading-[24px] whitespace-pre">Placeholder</p>
      </div>
    </div>
  );
}

function LabelTextContainer() {
  return (
    <div className="absolute bg-white content-stretch flex items-center left-[-4px] px-[4px] py-0 top-[-12px]" data-name="Label text container">
      <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#44483b] text-[12px] text-nowrap tracking-[0.4px] whitespace-pre">Skriv her</p>
    </div>
  );
}

function Content33() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-[48px] items-start justify-center min-h-px min-w-px px-0 py-[4px] relative shrink-0" data-name="Content">
      <PlaceholderTextContainer />
      <LabelTextContainer />
    </div>
  );
}

function StateLayer48() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="State-layer">
      <div className="size-full">
        <div className="content-stretch flex items-start pl-[16px] pr-0 py-[4px] relative size-full">
          <Content33 />
        </div>
      </div>
    </div>
  );
}

function TextField() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative rounded-[4px] shrink-0 w-full" data-name="Text field">
      <div aria-hidden="true" className="absolute border border-[#74796a] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <StateLayer48 />
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

function QuestionListHeading1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start pb-[32px] pt-0 px-0 relative shrink-0 w-full" data-name="Question list heading">
      <SearchButton1 />
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

function StateLayer49() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center p-[12px] relative rounded-[100px] shrink-0" data-name="State-layer">
      <HandleShape />
    </div>
  );
}

function Target() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[-16px] p-[4px] top-1/2 translate-y-[-50%]" data-name="Target">
      <StateLayer49 />
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

function LeadingElement18() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Leading element">
      <Switch />
    </div>
  );
}

function Content34() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[0px] tracking-[0.15px] w-full">
        <p className="font-['Manrope:Bold',sans-serif] font-bold leading-[24px] text-[16px]">Notatet gjelder et avvik</p>
      </div>
    </div>
  );
}

function StateLayer50() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative size-full">
          <LeadingElement18 />
          <Content34 />
        </div>
      </div>
    </div>
  );
}

function ListItemListItem0Density4() {
  return (
    <div className="content-stretch flex flex-col h-[56px] items-center justify-center min-h-[56px] relative shrink-0 w-full" data-name="List item/List Item: 0 Density">
      <StateLayer50 />
    </div>
  );
}

function MainContent() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[16px] grow items-start min-h-px min-w-px relative shrink-0 w-full" data-name="Main Content">
      <QuestionListHeading1 />
      <ListItemListItem0Density4 />
    </div>
  );
}

function Divider3() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0 w-full" data-name="Divider">
      <div className="h-0 relative shrink-0 w-full" data-name="Divider">
        <div className="absolute inset-[-1px_0_0_0]" style={{ "--stroke-0": "rgba(196, 200, 183, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 352 1">
            <line id="Divider" stroke="var(--stroke-0, #C4C8B7)" x2="352" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <p className="font-['Manrope:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#44483b] text-[14px] tracking-[0.1px] w-full">Gjelder hvilket spørsmål?</p>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0">
      <SnippetFolder />
    </div>
  );
}

function Content35() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <QuestionText1 text="1.1.1 Har du oversikt over alle driftsmidler du har kjøpt, og alle produkter du har solgt?" text1="&nbsp;" additionalClassNames="items-center" />
      <Frame12 />
    </div>
  );
}

function ChecklistQuestion23() {
  return (
    <ChecklistQuestion27>
      <Content35 />
    </ChecklistQuestion27>
  );
}

function QuestionContainer1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Question Container">
      <AssistiveChip text="Beste treff" />
      <ChecklistQuestion23 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0">
      <SnippetFolder />
    </div>
  );
}

function Content36() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <QuestionText1 text="1.1.1 Har du oversikt over alle driftsmidler du har kjøpt, og alle produkter du har solgt?" text1="&nbsp;" additionalClassNames="items-center" />
      <Frame13 />
    </div>
  );
}

function ChecklistQuestion24() {
  return (
    <ChecklistQuestion27>
      <Content36 />
    </ChecklistQuestion27>
  );
}

function QuestionContainer2() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Question Container">
      <AssistiveChip text="Treff" />
      <ChecklistQuestion24 />
    </div>
  );
}

function SearchButton2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[296px]" data-name="Search Button">
      <Content1 />
    </div>
  );
}

function QuestionSection() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start pb-[40px] pt-0 px-0 relative shrink-0 w-full" data-name="Question Section">
      <Divider3 />
      <QuestionContainer1 />
      <QuestionContainer2 />
      <SearchButton2 />
    </div>
  );
}

function NyNotat() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] h-full items-start px-[24px] py-[16px] relative shrink-0 w-[400px]" data-name="ny notat">
      <div aria-hidden="true" className="absolute border-[#c4c8b7] border-[0px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Header />
      <MainContent />
      <QuestionSection />
    </div>
  );
}

function MainContent1() {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0 w-full" data-name="Main Content">
      <ExternalRevisorNavigationRail />
      <Content31 />
      <NyNotat />
    </div>
  );
}

function MainContainer() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0 w-full" data-name="Main Container">
      <Container />
      <MainContent1 />
    </div>
  );
}

export default function Notater() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative rounded-[16px] shadow-[0px_8px_12px_6px_rgba(0,0,0,0.15),0px_4px_4px_0px_rgba(0,0,0,0.3)] size-full" data-name="notater">
      <MainContainer />
    </div>
  );
}