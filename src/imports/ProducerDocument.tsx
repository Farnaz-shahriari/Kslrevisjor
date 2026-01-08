import svgPaths from "./svg-zmeqbh4lbi";

function Error() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="error">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="error">
          <path d={svgPaths.p38e56880} fill="var(--fill-0, #44483B)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function DocumentIsNeeded() {
  return (
    <div className="bg-[#e0e4d3] relative rounded-[16px] shrink-0 w-full" data-name="document is needed">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative w-full">
          <Error />
          <div className="basis-0 flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold grow justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[#44483b] text-[14px] tracking-[0.1px]">
            <p className="leading-[20px]">Dokumentasjon er påkrevd for dette spørsmålet – last opp fil eller skriv direkte i dokumentet.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start justify-center leading-[0] min-h-px min-w-px overflow-clip relative shrink-0 tracking-[0.5px]" data-name="Content">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[#44483b] text-[12px] w-full">
        <p className="leading-[16px]">Dokumentasjon tekstsvar</p>
      </div>
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#1a1c16] text-[16px] w-full">
        <p className="leading-[24px]">Alt utstyr som krever det skal være kontrollert og sertifisert iht. forskrift.</p>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[16px] items-start p-[8px] relative w-full">
          <Content />
        </div>
      </div>
    </div>
  );
}

function AppUserInput() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[8px] items-center justify-center min-h-[64px] pb-0 pt-[8px] px-0 relative shrink-0 w-full" data-name="App User Input">
      <Frame />
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p1a103880} fill="var(--fill-0, #44483B)" id="icon" />
        </g>
      </svg>
    </div>
  );
}

function StateLayer() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-center justify-center px-[24px] py-[16px] relative shrink-0" data-name="State-layer">
      <Icon />
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#44483b] text-[16px] text-nowrap tracking-[0.15px]">
        <p className="leading-[24px] whitespace-pre">laste opp dokument</p>
      </div>
    </div>
  );
}

function Content1() {
  return (
    <div className="relative rounded-[100px] shrink-0" data-name="Content">
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[inherit]">
        <StateLayer />
      </div>
      <div aria-hidden="true" className="absolute border border-[#c4c8b7] border-solid inset-0 pointer-events-none rounded-[100px]" />
    </div>
  );
}

function UploadDocumentsButton() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="upload documents Button">
      <Content1 />
    </div>
  );
}

export default function ProducerDocument() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative size-full" data-name="Producer Document">
      <DocumentIsNeeded />
      <AppUserInput />
      <UploadDocumentsButton />
    </div>
  );
}