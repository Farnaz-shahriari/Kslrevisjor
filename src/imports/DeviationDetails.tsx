import svgPaths from "./svg-1takk81wic";
import imgThumbnail from "figma:asset/bccf40ef0d51ade359900027c9bd416d09e9658d.png";

function Icon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="open_in_new">
          <path d={svgPaths.p13453dc0} fill="var(--fill-0, #1A1C16)" id="Vector" />
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

function TrailingIcon2() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[48px]" data-name="trailing-icon 2">
      <Container />
    </div>
  );
}

function TrailingIcon() {
  return (
    <div className="content-stretch flex h-[48px] items-center justify-end relative shrink-0" data-name="trailing-icon">
      <TrailingIcon2 />
    </div>
  );
}

function QuestionHeader() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Question Header">
      <div className="flex flex-col font-['Quatro:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1a1c16] text-[22px] text-nowrap">
        <p className="leading-[28px]">
          <span className="font-['Quatro:Regular',sans-serif] not-italic">1.</span>1<span className="font-['Quatro:Regular',sans-serif] not-italic">.</span>4
        </p>
      </div>
      <TrailingIcon />
    </div>
  );
}

function Icon1() {
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

function StateLayer1() {
  return (
    <div className="content-stretch flex items-center justify-center p-[8px] relative shrink-0" data-name="state-layer">
      <Icon1 />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0" data-name="container">
      <StateLayer1 />
    </div>
  );
}

function TrailingIcon3() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[48px]" data-name="trailing-icon 2">
      <Container1 />
    </div>
  );
}

function TrailingIcon1() {
  return (
    <div className="content-stretch flex h-[48px] items-center justify-end relative shrink-0" data-name="trailing-icon">
      <TrailingIcon3 />
    </div>
  );
}

function QuestionHeader1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Question Header">
      <QuestionHeader />
      <TrailingIcon1 />
    </div>
  );
}

function ChecklistQuestion() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Checklist question">
      <QuestionHeader1 />
      <div className="flex flex-col font-['Quatro:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1a1c16] text-[22px] w-full">
        <p className="leading-[28px]">Er utstyr som krever det, kontrollert og sertifisert i tråd med forskrifter?</p>
      </div>
    </div>
  );
}

function QuestionContainer() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Question Container">
      <ChecklistQuestion />
    </div>
  );
}

function BuildingBlocksMonogram() {
  return (
    <div className="bg-[#eff1e7] overflow-clip relative rounded-[100px] shrink-0 size-[40px]" data-name=".Building Blocks/Monogram">
      <div className="absolute flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] left-1/2 size-[40px] text-[#284000] text-[16px] text-center top-1/2 tracking-[0.15px] translate-x-[-50%] translate-y-[-50%]">
        <p className="leading-[24px]">BØ</p>
      </div>
    </div>
  );
}

function LeadingElement() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0" data-name="Leading element">
      <BuildingBlocksMonogram />
    </div>
  );
}

function Content() {
  return (
    <div className="basis-0 content-stretch flex flex-col font-['Manrope:Regular',sans-serif] font-normal grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] tracking-[0.5px] w-full">
        <p className="leading-[24px]">Bjørkli Økologiske</p>
      </div>
      <p className="h-[20px] leading-[20px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#44483b] text-[14px] text-nowrap tracking-[0.25px] w-full">Alle saker for gården</p>
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
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="Trailing element">
      <ArrowRight />
    </div>
  );
}

function StateLayer2() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center pl-[8px] pr-[16px] py-[8px] relative size-full">
          <LeadingElement />
          <Content />
          <TrailingElement />
        </div>
      </div>
    </div>
  );
}

function Foretak() {
  return (
    <div className="content-stretch flex flex-col h-[72px] items-start justify-center min-h-[72px] relative shrink-0 w-full" data-name="foretak">
      <StateLayer2 />
    </div>
  );
}

function ReportProblem() {
  return (
    <div className="absolute inset-[0_0.86%_0.86%_0]" data-name="report_problem">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="report_problem">
          <path d={svgPaths.p24139a00} fill="var(--fill-0, #410002)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Check() {
  return (
    <div className="absolute left-[calc(50%+0.1px)] size-[24.208px] top-[calc(50%+0.1px)] translate-x-[-50%] translate-y-[-50%]" data-name="Check">
      <ReportProblem />
    </div>
  );
}

function GenericAvatar() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="Generic avatar">
      <div className="absolute inset-0" style={{ "--fill-0": "rgba(255, 218, 214, 1)" } as React.CSSProperties}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
          <path clipRule="evenodd" d={svgPaths.p1fd92980} fill="var(--fill-0, #FFDAD6)" fillRule="evenodd" id="Background" />
        </svg>
      </div>
      <Check />
    </div>
  );
}

function LeadingElement1() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0" data-name="Leading element">
      <GenericAvatar />
    </div>
  );
}

function Content1() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center leading-[0] min-h-px min-w-px overflow-clip relative shrink-0 tracking-[0.5px]" data-name="Content">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[#44483b] text-[12px] w-full">
        <p className="leading-[16px]">Resultat av vurdering</p>
      </div>
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#1a1c16] text-[16px] w-full">
        <p className="leading-[24px]">Kritisk avvik</p>
      </div>
    </div>
  );
}

function Info() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="info">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="info">
          <path d={svgPaths.p2668ba00} fill="var(--fill-0, #44483B)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function StateLayer3() {
  return (
    <div className="content-stretch flex h-[40px] items-center justify-center relative shrink-0 w-full" data-name="State-layer">
      <Info />
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[100px] shrink-0 w-[40px]" data-name="Content">
      <StateLayer3 />
    </div>
  );
}

function IconButton() {
  return (
    <div className="content-stretch flex h-[24px] items-center justify-center relative shrink-0" data-name="Icon button">
      <Content2 />
    </div>
  );
}

function TrailingElement1() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="Trailing element">
      <IconButton />
    </div>
  );
}

function StateLayer4() {
  return (
    <div className="h-[56px] relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[8px] py-0 relative size-full">
          <LeadingElement1 />
          <Content1 />
          <TrailingElement1 />
        </div>
      </div>
    </div>
  );
}

function DeviationLevel() {
  return (
    <div className="bg-[#ffdad6] content-stretch flex flex-col items-center justify-center min-h-[56px] relative rounded-[12px] shrink-0 w-full" data-name="Deviation level">
      <StateLayer4 />
    </div>
  );
}

function Content3() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start justify-center leading-[0] min-h-px min-w-px overflow-clip relative shrink-0 tracking-[0.5px]" data-name="Content">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[#44483b] text-[12px] w-full">
        <p className="leading-[16px]">Mangel</p>
      </div>
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#1a1c16] text-[16px] w-full">
        <p className="leading-[24px]">Ingen dokumentasjon fremvist for truckkontroll.</p>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex gap-[16px] items-start p-[8px] relative w-full">
        <Content3 />
      </div>
    </div>
  );
}

function Mangel() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center justify-center min-h-[64px] pb-0 pt-[8px] px-0 relative shrink-0 w-full" data-name="mangel">
      <Frame />
    </div>
  );
}

function PendingActions() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="pending_actions">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="pending_actions">
          <path d={svgPaths.p2c046200} fill="var(--fill-0, #44483B)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function LeadingElement2() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Leading element">
      <PendingActions />
    </div>
  );
}

function Content4() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start justify-center leading-[0] min-h-px min-w-px overflow-clip relative shrink-0 tracking-[0.5px]" data-name="Content">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[#44483b] text-[12px] w-full">
        <p className="leading-[16px]">Tidsfrist for lukking av avvik</p>
      </div>
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#1a1c16] text-[16px] w-full">
        <p className="leading-[24px]">4. mars 2025</p>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex gap-[16px] items-start p-[8px] relative w-full">
        <LeadingElement2 />
        <Content4 />
      </div>
    </div>
  );
}

function Deadline() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center justify-center min-h-[64px] pb-0 pt-[8px] px-0 relative shrink-0 w-full" data-name="Deadline">
      <Frame1 />
    </div>
  );
}

function AssignmentInd() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="assignment_ind">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="assignment_ind">
          <path d={svgPaths.p3e89b580} fill="var(--fill-0, #44483B)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function LeadingElement3() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Leading element">
      <AssignmentInd />
    </div>
  );
}

function Content5() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start justify-center leading-[0] min-h-px min-w-px overflow-clip relative shrink-0 tracking-[0.5px]" data-name="Content">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[#44483b] text-[12px] w-full">
        <p className="leading-[16px]">Ansvarlig for lukking:</p>
      </div>
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#1a1c16] text-[16px] w-full">
        <p className="leading-[24px]">Tellef Lima Eidland</p>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex gap-[16px] items-start p-[8px] relative w-full">
        <LeadingElement3 />
        <Content5 />
      </div>
    </div>
  );
}

function AppUserInput() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center justify-center min-h-[64px] pb-0 pt-[8px] px-0 relative shrink-0 w-full" data-name="App User Input">
      <Frame2 />
    </div>
  );
}

function StateLayer5() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center px-[24px] py-[16px] relative shrink-0" data-name="State-layer">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#44483b] text-[16px] text-nowrap tracking-[0.15px]">
        <p className="leading-[24px]">Bekreft lukking av avviket</p>
      </div>
    </div>
  );
}

function Content6() {
  return (
    <div className="relative rounded-[100px] shrink-0" data-name="Content">
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[inherit]">
        <StateLayer5 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#c4c8b7] border-solid inset-0 pointer-events-none rounded-[100px]" />
    </div>
  );
}

function ClosingAvvikButton() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Closing avvik Button">
      <Content6 />
    </div>
  );
}

function Badges() {
  return (
    <div className="absolute bg-[#ba1a1a] content-stretch flex items-center justify-center left-[39px] max-w-[34px] min-w-[16px] overflow-clip px-[4px] py-0 rounded-[100px] top-[10.32px]" data-name="Badges">
      <div className="basis-0 flex flex-col font-['Manrope:Medium',sans-serif] font-medium grow justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[11px] text-center text-white tracking-[0.5px]">
        <p className="leading-[16px]">3</p>
      </div>
    </div>
  );
}

function ImportantAvvikInformation() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="important avvik information">
      <Foretak />
      <DeviationLevel />
      <Mangel />
      <Deadline />
      <AppUserInput />
      <ClosingAvvikButton />
      <Badges />
    </div>
  );
}

function ClosingAvvikIcon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Closing Avvik Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="contact_phone">
          <path d={svgPaths.p3b7e4b92} fill="var(--fill-0, #44483B)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function TypeOfClosing() {
  return (
    <div className="content-stretch flex gap-[8px] items-center px-0 py-[8px] relative shrink-0" data-name="Type of closing">
      <ClosingAvvikIcon />
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] text-nowrap tracking-[0.15px]">
        <p className="leading-[24px]">{`Lukking krever digitalt besøk `}</p>
      </div>
    </div>
  );
}

function MarkEmailRead() {
  return (
    <div className="absolute inset-[0_-33.33%_-33.33%_0]" data-name="mark_email_read">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="mark_email_read">
          <path d={svgPaths.p3a6e7900} fill="var(--fill-0, #4A671E)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function MarkEmailRead1() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="mark_email_read">
      <MarkEmailRead />
    </div>
  );
}

function StateLayer6() {
  return (
    <div className="content-stretch flex gap-[8px] h-[32px] items-center justify-center pl-[8px] pr-[16px] py-[6px] relative shrink-0" data-name="state-layer">
      <MarkEmailRead1 />
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[14px] text-center text-nowrap tracking-[0.1px]">
        <p className="leading-[20px]">Tidspunkt foreslått</p>
      </div>
    </div>
  );
}

function StatusChip() {
  return (
    <div className="relative rounded-[8px] shrink-0" data-name="Status chip">
      <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[inherit]">
        <StateLayer6 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#c4c8b7] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function ChatBubble() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="chat_bubble">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="chat_bubble">
          <path d={svgPaths.p1bbda200} fill="var(--fill-0, #44483B)" id="icon" />
        </g>
      </svg>
    </div>
  );
}

function LeadingElement4() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Leading element">
      <ChatBubble />
    </div>
  );
}

function Content7() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start justify-center leading-[0] min-h-px min-w-px overflow-clip relative shrink-0 tracking-[0.5px]" data-name="Content">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[#44483b] text-[12px] w-full">
        <p className="leading-[16px]">Kommentar</p>
      </div>
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#1a1c16] text-[16px] w-full">
        <p className="leading-[24px]">Ring meg på telefon først, og vi fortsetter dialogen på Messenger.</p>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex gap-[16px] items-start p-[8px] relative w-full">
        <LeadingElement4 />
        <Content7 />
      </div>
    </div>
  );
}

function HorizontalFullWidth() {
  return (
    <div className="h-px relative shrink-0 w-full" data-name="Horizontal/Full-width">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 384 1.00003">
        <g id="Horizontal/Full-width">
          <line id="Divider" stroke="var(--stroke-0, #C4C8B7)" x1="4.37114e-08" x2="384" y1="0.500034" y2="0.5" />
        </g>
      </svg>
    </div>
  );
}

function AppUserInput1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center justify-center min-h-[64px] pb-0 pt-[8px] px-0 relative shrink-0 w-full" data-name="App User Input">
      <Frame3 />
      <HorizontalFullWidth />
    </div>
  );
}

function Today() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="today">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p13a8df70} fill="var(--fill-0, #44483B)" id="icon" />
        </g>
      </svg>
    </div>
  );
}

function LeadingElement5() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Leading element">
      <Today />
    </div>
  );
}

function Content8() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center leading-[0] min-h-px min-w-px overflow-clip relative shrink-0 text-[#44483b] tracking-[0.5px]" data-name="Content">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[12px] w-full">
        <p className="leading-[16px]">Forslag til digitalt besøk</p>
      </div>
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[16px] w-full">
        <p className="leading-[24px]">16. juni 2025</p>
      </div>
    </div>
  );
}

function StateLayer7() {
  return (
    <div className="content-stretch flex gap-[16px] h-[56px] items-center justify-center relative shrink-0 w-full" data-name="state-layer">
      <LeadingElement5 />
      <Content8 />
    </div>
  );
}

function ListItemListItem4Density() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-center justify-center min-h-[56px] min-w-px relative shrink-0" data-name="List item/List Item: -4 Density">
      <StateLayer7 />
    </div>
  );
}

function ClosingAvvikDeadline() {
  return (
    <div className="relative shrink-0 w-full" data-name="Closing Avvik deadline">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[8px] py-0 relative w-full">
          <ListItemListItem4Density />
        </div>
      </div>
    </div>
  );
}

function Check1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="check">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="check">
          <path d={svgPaths.p217bb200} fill="var(--fill-0, white)" id="icon" />
        </g>
      </svg>
    </div>
  );
}

function StateLayer8() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center px-[24px] py-[16px] relative shrink-0" data-name="State-layer">
      <Check1 />
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[16px] text-nowrap text-white tracking-[0.15px]">
        <p className="leading-[24px]">Godta tidspunkt</p>
      </div>
    </div>
  );
}

function Content9() {
  return (
    <div className="bg-[#4a671e] content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0" data-name="Content">
      <StateLayer8 />
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Button">
      <Content9 />
    </div>
  );
}

function StateLayer9() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center px-[24px] py-[16px] relative shrink-0" data-name="State-layer">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#44483b] text-[16px] text-nowrap tracking-[0.15px]">
        <p className="leading-[24px]">Foreslå nytt tidspunkt</p>
      </div>
    </div>
  );
}

function Content10() {
  return (
    <div className="relative rounded-[100px] shrink-0" data-name="Content">
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[inherit]">
        <StateLayer9 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#c4c8b7] border-solid inset-0 pointer-events-none rounded-[100px]" />
    </div>
  );
}

function Button1() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Button">
      <Content10 />
    </div>
  );
}

function ClosingAvvikActions() {
  return (
    <div className="content-start flex flex-wrap gap-[16px] items-start relative shrink-0 w-full" data-name="Closing Avvik Actions">
      <Button />
      <Button1 />
    </div>
  );
}

function ClosingAvvikContent() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Closing Avvik Content">
      <TypeOfClosing />
      <StatusChip />
      <AppUserInput1 />
      <ClosingAvvikDeadline />
      <ClosingAvvikActions />
    </div>
  );
}

function ClosingAvvik() {
  return (
    <div className="bg-[#fafaf0] relative rounded-[12px] shrink-0 w-full" data-name="closing avvik">
      <div className="overflow-x-clip overflow-y-auto size-full">
        <div className="content-stretch flex flex-col items-start p-[24px] relative w-full">
          <ClosingAvvikContent />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#c4c8b7] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Content11() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#44483b] text-[12px] tracking-[0.5px] w-full">
        <p className="leading-[16px]">Rapportert avvik</p>
      </div>
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] tracking-[0.5px] w-full">
        <p className="leading-[24px]">Stort avvik fra kravet.</p>
      </div>
      <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#44483b] text-[14px] tracking-[0.25px] w-full">Kan ikke endres nå</p>
    </div>
  );
}

function StateLayer10() {
  return (
    <div className="content-stretch flex gap-[16px] items-start px-0 py-[8px] relative shrink-0 w-full" data-name="state-layer">
      <Content11 />
    </div>
  );
}

function ReportetDeviationLevel() {
  return (
    <div className="content-stretch flex flex-col items-start min-h-[80px] relative shrink-0 w-full" data-name="Reportet deviation level">
      <StateLayer10 />
    </div>
  );
}

function Divider() {
  return (
    <div className="h-px relative shrink-0 w-full" data-name="Divider">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 432 1.00004">
        <g id="Divider">
          <line id="Divider_2" stroke="var(--stroke-0, #C4C8B7)" x1="4.37114e-08" x2="432" y1="0.500038" y2="0.5" />
        </g>
      </svg>
    </div>
  );
}

function Content12() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start justify-center leading-[0] min-h-px min-w-px overflow-clip relative shrink-0 tracking-[0.5px]" data-name="Content">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[#44483b] text-[12px] w-full">
        <p className="leading-[16px]">{`Krav `}</p>
      </div>
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#1a1c16] text-[16px] w-full">
        <p className="leading-[24px]">Ingen dokumentasjon fremvist for truckkontroll.</p>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex gap-[16px] items-start p-[8px] relative w-full">
        <Content12 />
      </div>
    </div>
  );
}

function AppUserInput2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center justify-center min-h-[64px] pb-0 pt-[8px] px-0 relative shrink-0 w-full" data-name="App User Input">
      <Frame4 />
    </div>
  );
}

function Content13() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start justify-center leading-[0] min-h-px min-w-px overflow-clip relative shrink-0 tracking-[0.5px]" data-name="Content">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[#44483b] text-[12px] w-full">
        <p className="leading-[16px]">Bevis</p>
      </div>
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#1a1c16] text-[16px] w-full">
        <p className="leading-[24px]">Ingen dokumentasjon fremvist for truckkontroll.</p>
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="edit">
          <path d={svgPaths.p31cc4800} fill="var(--fill-0, #44483B)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function StateLayer11() {
  return (
    <div className="content-stretch flex h-[32px] items-center justify-center relative shrink-0 w-full" data-name="State-layer">
      <Icon2 />
    </div>
  );
}

function Content14() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[100px] shrink-0 w-[28px]" data-name="Content">
      <StateLayer11 />
    </div>
  );
}

function IconButton1() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[48px]" data-name="Icon button">
      <Content14 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[16px] items-start px-0 py-[8px] relative shrink-0 w-full">
      <Content13 />
      <IconButton1 />
    </div>
  );
}

function AppUserInput3() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-center min-h-[64px] pb-0 pt-[8px] px-0 relative shrink-0 w-full" data-name="App User Input">
      <Frame5 />
    </div>
  );
}

function Upload() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="upload">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="upload">
          <path d={svgPaths.p1a103880} fill="var(--fill-0, #44483B)" id="icon" />
        </g>
      </svg>
    </div>
  );
}

function StateLayer12() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center px-[24px] py-[16px] relative shrink-0" data-name="State-layer">
      <Upload />
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#44483b] text-[16px] text-nowrap tracking-[0.15px]">
        <p className="leading-[24px]">Last opp bilde</p>
      </div>
    </div>
  );
}

function Content15() {
  return (
    <div className="relative rounded-[100px] shrink-0" data-name="Content">
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[inherit]">
        <StateLayer12 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#c4c8b7] border-solid inset-0 pointer-events-none rounded-[100px]" />
    </div>
  );
}

function Button2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Button">
      <Content15 />
    </div>
  );
}

function BuildingBlocksImageThumbnail() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name=".Building Blocks/image-Thumbnail">
      <div className="relative shrink-0 size-[56px]" data-name="Thumbnail">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgThumbnail} />
      </div>
    </div>
  );
}

function LeadingElement6() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0" data-name="Leading element">
      <BuildingBlocksImageThumbnail />
    </div>
  );
}

function Content16() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] tracking-[0.5px] w-full">
        <p className="leading-[24px]">(uploaded item name)</p>
      </div>
    </div>
  );
}

function Delete() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="delete">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="delete">
          <path d={svgPaths.p13375d00} fill="var(--fill-0, #44483B)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function TrailingElement2() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="Trailing element">
      <Delete />
    </div>
  );
}

function StateLayer13() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative size-full">
          <LeadingElement6 />
          <Content16 />
          <TrailingElement2 />
        </div>
      </div>
    </div>
  );
}

function ListItemListItem0Density() {
  return (
    <div className="content-stretch flex flex-col h-[72px] items-center justify-center min-h-[56px] relative shrink-0 w-full" data-name="List item/List Item: 0 Density">
      <StateLayer13 />
    </div>
  );
}

function Evidences() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Evidences">
      <AppUserInput3 />
      <Button2 />
      {[...Array(2).keys()].map((_, i) => (
        <ListItemListItem0Density key={i} />
      ))}
    </div>
  );
}

function OtherInfo() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Other info">
      <ReportetDeviationLevel />
      <Divider />
      <AppUserInput2 />
      <Evidences />
    </div>
  );
}

function ContentContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[1406px] items-start relative shrink-0 w-full" data-name="Content Container">
      <ImportantAvvikInformation />
      <ClosingAvvik />
      <OtherInfo />
    </div>
  );
}

export default function DeviationDetails() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[16px] items-start px-[24px] py-[16px] relative size-full" data-name="deviation details">
      <QuestionContainer />
      <ContentContainer />
    </div>
  );
}