import svgPaths from "./svg-s9ckd2zaiv";

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        {children}
      </svg>
    </div>
  );
}

function ReportProblem({ children }: React.PropsWithChildren<{}>) {
  return (
    <Wrapper>
      <g id="report_problem">{children}</g>
    </Wrapper>
  );
}

function StateLayer6({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 w-full">
      <div className="size-full">
        <div className="content-stretch flex gap-[16px] items-start px-[16px] py-[12px] relative w-full">{children}</div>
      </div>
    </div>
  );
}
type ContentText1Props = {
  text: string;
};

function ContentText1({ text }: ContentText1Props) {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px overflow-clip relative shrink-0">
      <div className="-webkit-box flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] overflow-ellipsis overflow-hidden relative shrink-0 text-[#1a1c16] text-[16px] tracking-[0.5px] w-full">
        <p className="leading-[24px]">{text}</p>
      </div>
    </div>
  );
}

function Divider1() {
  return (
    <div className="h-px relative shrink-0 w-full">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 352 1">
        <g id="Divider">
          <line id="Divider_2" stroke="var(--stroke-0, #C4C8B7)" x1="4.37114e-08" x2="352" y1="0.500031" y2="0.5" />
        </g>
      </svg>
    </div>
  );
}
type ContentTextProps = {
  text: string;
};

function ContentText({ text }: ContentTextProps) {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start leading-[0] min-h-px min-w-px overflow-clip relative shrink-0 tracking-[0.5px]">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center overflow-ellipsis overflow-hidden relative shrink-0 text-[#44483b] text-[12px] text-nowrap w-full">
        <p className="[white-space-collapse:collapse] leading-[16px] overflow-ellipsis overflow-hidden">{`1.1.1  Har du oversikt over alle driftsmidler du har kjøpt, og alle produkter du har solgt?`}</p>
      </div>
      <div className="-webkit-box flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center overflow-ellipsis overflow-hidden relative shrink-0 text-[#1a1c16] text-[16px] w-full">
        <p className="leading-[24px]">{text}</p>
      </div>
    </div>
  );
}

function StickyNote() {
  return (
    <Wrapper>
      <g id="sticky_note_2">
        <path d={svgPaths.p9e88080} fill="var(--fill-0, #44483B)" id="Vector" />
      </g>
    </Wrapper>
  );
}

function HeaderTextContainer() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Header Text Container">
      <div className="flex flex-col font-['Quatro:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1a1c16] text-[22px] text-nowrap">
        <p className="leading-[28px] whitespace-pre">Egne notater</p>
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
    <Wrapper>
      <g id="Icon">
        <path d={svgPaths.p2edaeb50} fill="var(--fill-0, #1A1C16)" id="icon" />
      </g>
    </Wrapper>
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
    <Wrapper>
      <g id="add">
        <path d={svgPaths.p2a6e0600} fill="var(--fill-0, #44483B)" id="icon" />
      </g>
    </Wrapper>
  );
}

function StateLayer1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center px-[24px] py-[16px] relative shrink-0" data-name="State-layer">
      <Icon1 />
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#44483b] text-[16px] text-nowrap tracking-[0.15px]">
        <p className="leading-[24px] whitespace-pre">Legg til ny notat</p>
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

function NewNoteButton() {
  return (
    <div className="content-stretch flex h-[56px] items-center relative shrink-0 w-full" data-name="new note Button">
      <Content />
    </div>
  );
}

function Divider() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0 w-full" data-name="Divider">
      <div className="h-0 relative shrink-0 w-full" data-name="Divider">
        <div className="absolute inset-[-1px_0_0_0]" style={{ "--stroke-0": "rgba(196, 200, 183, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 352 1">
            <line id="Divider" stroke="var(--stroke-0, #C4C8B7)" x2="352" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <p className="font-['Manrope:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#44483b] text-[14px] tracking-[0.1px] w-full">Alle notater</p>
    </div>
  );
}

function LeadingElement() {
  return (
    <div className="content-stretch flex h-[64px] items-start relative shrink-0" data-name="Leading element">
      <StickyNote />
    </div>
  );
}

function StateLayer2() {
  return (
    <StateLayer6>
      <LeadingElement />
      <ContentText text="Har du oversikt over alle driftsmidler du har kjøpt, og alle produkter du har solgt?" />
    </StateLayer6>
  );
}

function ListItemListItem0Density() {
  return (
    <div className="content-stretch flex flex-col items-center min-h-[88px] relative shrink-0 w-full" data-name="List item/List Item: 0 Density">
      <StateLayer2 />
      <Divider1 />
    </div>
  );
}

function LeadingElement1() {
  return (
    <div className="content-stretch flex h-[64px] items-start relative shrink-0" data-name="Leading element">
      <StickyNote />
    </div>
  );
}

function StateLayer3() {
  return (
    <StateLayer6>
      <LeadingElement1 />
      <ContentText1 text="Har du oversikt over alle driftsmidler du har kjøpt, og alle produkter du har solgt?" />
    </StateLayer6>
  );
}

function ListItemListItem0Density1() {
  return (
    <div className="content-stretch flex flex-col items-center min-h-[88px] relative shrink-0 w-full" data-name="List item/List Item: 0 Density">
      <StateLayer3 />
      <Divider1 />
    </div>
  );
}

function ReportProblem1() {
  return (
    <ReportProblem>
      <path d={svgPaths.p24139a00} fill="var(--fill-0, #BA1A1A)" id="Vector" />
    </ReportProblem>
  );
}

function LeadingElement2() {
  return (
    <div className="content-stretch flex h-[64px] items-start relative shrink-0" data-name="Leading element">
      <ReportProblem1 />
    </div>
  );
}

function StateLayer4() {
  return (
    <StateLayer6>
      <LeadingElement2 />
      <ContentText text="Har du oversikt over alle driftsmidler du har kjøpt, og alle produkter du har solgt?" />
    </StateLayer6>
  );
}

function ListItemListItem0Density2() {
  return (
    <div className="content-stretch flex flex-col items-center min-h-[88px] relative shrink-0 w-full" data-name="List item/List Item: 0 Density">
      <StateLayer4 />
      <Divider1 />
    </div>
  );
}

function ReportProblem2() {
  return (
    <ReportProblem>
      <path d={svgPaths.p24139a00} fill="var(--fill-0, #705400)" id="Vector" />
    </ReportProblem>
  );
}

function LeadingElement3() {
  return (
    <div className="content-stretch flex h-[64px] items-start relative shrink-0" data-name="Leading element">
      <ReportProblem2 />
    </div>
  );
}

function StateLayer5() {
  return (
    <StateLayer6>
      <LeadingElement3 />
      <ContentText1 text="Har du oversikt over alle driftsmidler du har kjøpt, og alle produkter du har solgt?" />
    </StateLayer6>
  );
}

function ListItemListItem0Density3() {
  return (
    <div className="content-stretch flex flex-col items-center min-h-[88px] relative shrink-0 w-full" data-name="List item/List Item: 0 Density">
      <StateLayer5 />
      <Divider1 />
    </div>
  );
}

function AlleNotater() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[40px] pt-0 px-0 relative shrink-0 w-full" data-name="alle notater">
      <Divider />
      <ListItemListItem0Density />
      <ListItemListItem0Density1 />
      <ListItemListItem0Density2 />
      <ListItemListItem0Density3 />
      <ListItemListItem0Density />
      <ListItemListItem0Density />
    </div>
  );
}

export default function EgneNotater() {
  return (
    <div className="relative size-full" data-name="Egne notater">
      <div aria-hidden="true" className="absolute border-[#c4c8b7] border-[0px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[32px] items-start px-[24px] py-[16px] relative size-full">
          <Header />
          <NewNoteButton />
          <AlleNotater />
        </div>
      </div>
    </div>
  );
}