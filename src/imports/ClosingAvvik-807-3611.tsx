import svgPaths from "./svg-xi9dihpnab";

function SnippetFolder() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="snippet_folder">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="snippet_folder">
          <path d={svgPaths.p1a55f400} fill="var(--fill-0, #44483B)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ClosingConfirmationMethode() {
  return (
    <div className="content-stretch flex gap-[8px] items-center px-0 py-[8px] relative shrink-0" data-name="Closing confirmation methode">
      <SnippetFolder />
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] text-nowrap tracking-[0.15px]">
        <p className="leading-[24px]">
          Lukking krever d<span className="font-['Manrope:Medium',sans-serif] font-medium">okumentasjon</span>
        </p>
      </div>
    </div>
  );
}

function StateLayer() {
  return (
    <div className="content-stretch flex h-[32px] items-center justify-center px-[16px] py-[6px] relative shrink-0" data-name="state-layer">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[14px] text-center text-nowrap tracking-[0.1px]">
        <p className="leading-[20px]">Avventer dokumentasjon</p>
      </div>
    </div>
  );
}

function StatusChip() {
  return (
    <div className="relative rounded-[8px] shrink-0" data-name="Status chip">
      <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[inherit]">
        <StateLayer />
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
        <p className="leading-[24px]">{`Send meg relevante dokumentasjon her `}</p>
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

function AppUserInput() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center justify-center min-h-[64px] pb-0 pt-[8px] px-0 relative shrink-0 w-full" data-name="App User Input">
      <Frame />
    </div>
  );
}

function ClosingAvvikContent() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Closing Avvik Content">
      <ClosingConfirmationMethode />
      <StatusChip />
      <AppUserInput />
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