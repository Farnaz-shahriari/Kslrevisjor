import svgPaths from "./svg-xmkzfk4gow";

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

function Spacer() {
  return <div className="shrink-0 size-[2px]" data-name="Spacer" />;
}

function Icon() {
  return (
    <div className="bg-[#ba1a1a] content-stretch flex items-center justify-center p-[2px] relative rounded-[100px] shrink-0" data-name="Icon">
      <Spacer />
    </div>
  );
}

function StateLayer() {
  return (
    <div className="content-stretch flex gap-[8px] h-[32px] items-center justify-center pl-[8px] pr-[16px] py-[6px] relative shrink-0" data-name="state-layer">
      <Icon />
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[14px] text-center text-nowrap tracking-[0.1px]">
        <p className="leading-[20px]">Tidspunkt foreslått</p>
      </div>
    </div>
  );
}

function StatusChip() {
  return (
    <div className="bg-[#f4f4ea] content-stretch flex items-center justify-center overflow-clip relative rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.3),0px_1px_3px_1px_rgba(0,0,0,0.15)] shrink-0" data-name="Status chip">
      <StateLayer />
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

function LeadingElement() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Leading element">
      <ChatBubble />
    </div>
  );
}

function Content() {
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

function Frame() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex gap-[16px] items-start p-[8px] relative w-full">
        <LeadingElement />
        <Content />
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

function AppUserInput() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center justify-center min-h-[64px] pb-0 pt-[8px] px-0 relative shrink-0 w-full" data-name="App User Input">
      <Frame />
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

function LeadingElement1() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Leading element">
      <Today />
    </div>
  );
}

function Content1() {
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

function StateLayer1() {
  return (
    <div className="content-stretch flex gap-[16px] h-[56px] items-center justify-center relative shrink-0 w-full" data-name="state-layer">
      <LeadingElement1 />
      <Content1 />
    </div>
  );
}

function ListItemListItem4Density() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-center justify-center min-h-[56px] min-w-px relative shrink-0" data-name="List item/List Item: -4 Density">
      <StateLayer1 />
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

function Check() {
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

function StateLayer2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center px-[24px] py-[16px] relative shrink-0" data-name="State-layer">
      <Check />
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[16px] text-nowrap text-white tracking-[0.15px]">
        <p className="leading-[24px]">Godta tidspunkt</p>
      </div>
    </div>
  );
}

function Content2() {
  return (
    <div className="bg-[#4a671e] content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0" data-name="Content">
      <StateLayer2 />
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Button">
      <Content2 />
    </div>
  );
}

function StateLayer3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center px-[24px] py-[16px] relative shrink-0" data-name="State-layer">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#44483b] text-[16px] text-nowrap tracking-[0.15px]">
        <p className="leading-[24px]">Foreslå nytt tidspunkt</p>
      </div>
    </div>
  );
}

function Content3() {
  return (
    <div className="relative rounded-[100px] shrink-0" data-name="Content">
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[inherit]">
        <StateLayer3 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#c4c8b7] border-solid inset-0 pointer-events-none rounded-[100px]" />
    </div>
  );
}

function Button1() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Button">
      <Content3 />
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
      <AppUserInput />
      <ClosingAvvikDeadline />
      <ClosingAvvikActions />
    </div>
  );
}

export default function ClosingAvvik() {
  return (
    <div className="bg-[#fafaf0] relative rounded-[12px] size-full" data-name="closing avvik">
      <div className="content-stretch flex flex-col items-start overflow-clip p-[24px] relative rounded-[inherit] size-full">
        <ClosingAvvikContent />
      </div>
      <div aria-hidden="true" className="absolute border border-[#c4c8b7] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}