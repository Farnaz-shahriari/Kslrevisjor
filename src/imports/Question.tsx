import svgPaths from "./svg-b1cjmvl83y";

function Number() {
  return (
    <div className="basis-0 content-stretch flex gap-[16px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Number">
      <div className="flex flex-col font-['Quatro:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1a1c16] text-[22px] text-nowrap">
        <p className="leading-[28px] whitespace-pre">
          <span className="font-['Quatro:Regular',sans-serif] not-italic">1.</span>1<span className="font-['Quatro:Regular',sans-serif] not-italic">.</span>
          <span>{`1 `}</span>
        </p>
      </div>
    </div>
  );
}

function StateLayer() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center p-[8px] relative shrink-0" data-name="state-layer">
      <div className="relative shrink-0 size-[24px]" data-name="Icon">
        <div className="absolute inset-0 overflow-clip" data-name="volume_up">
          <div className="absolute inset-[13.46%_12.5%]" data-name="Vector">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
              <path d={svgPaths.p13285c40} fill="var(--fill-0, #44483B)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center overflow-clip relative rounded-[100px] shrink-0" data-name="container">
      <StateLayer />
    </div>
  );
}

function StateLayer1() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center p-[8px] relative shrink-0" data-name="state-layer">
      <div className="relative shrink-0 size-[24px]" data-name="Icon">
        <div className="absolute inset-0 overflow-clip" data-name="question_mark">
          <div className="absolute inset-[10.42%_27.25%]" data-name="Vector">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 19">
              <path d={svgPaths.p2eda3e70} fill="var(--fill-0, #44483B)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center overflow-clip relative rounded-[100px] shrink-0" data-name="container">
      <StateLayer1 />
    </div>
  );
}

function InfoIconButtons() {
  return (
    <div className="content-stretch cursor-pointer flex h-[48px] items-center justify-end relative shrink-0" data-name="Info icon buttons">
      <div className="content-stretch flex flex-col gap-[10px] items-center justify-center relative shrink-0 size-[48px]" data-name="trailing-icon 3">
        <Container />
      </div>
      <div className="content-stretch flex flex-col gap-[10px] items-center justify-center relative shrink-0 size-[48px]" data-name="trailing-icon 2">
        <Container1 />
      </div>
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
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Text">
      <NumberInfoIconButtons />
      <div className="flex flex-col font-['Quatro:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1a1c16] text-[22px] w-full">
        <p className="leading-[28px]">Har du oversikt over alle driftsmidler du har kjøpt, og alle produkter du har solgt?</p>
      </div>
    </div>
  );
}

function StateLayer2() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-center justify-center pl-[8px] pr-[12px] py-[6px] relative shrink-0" data-name="state-layer">
      <div className="relative shrink-0 size-[18px]" data-name="Icon">
        <div className="absolute inset-0 overflow-clip" data-name="snippet_folder">
          <div className="absolute inset-[16.67%_8.33%]" data-name="Vector">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 12">
              <path d={svgPaths.p33aa4080} fill="var(--fill-0, white)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[14px] text-center text-nowrap text-white tracking-[0.1px]">
        <p className="leading-[20px] whitespace-pre">Dokumentasjon kreves</p>
      </div>
    </div>
  );
}

function StateLayer3() {
  return (
    <div className="box-border content-stretch flex gap-[8px] h-[32px] items-center justify-center pl-[8px] pr-[16px] py-[6px] relative shrink-0" data-name="state-layer">
      <div className="relative shrink-0 size-[18px]" data-name="Icon">
        <div className="absolute inset-0 overflow-clip" data-name="info">
          <div className="absolute inset-[8.333%]" data-name="Vector">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
              <path d={svgPaths.p15837280} fill="var(--fill-0, #44483B)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[14px] text-center text-nowrap tracking-[0.1px]">
        <p className="leading-[20px] whitespace-pre">Fokusområde</p>
      </div>
    </div>
  );
}

function AboutTheQuestionsChips() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="About the questions chips">
      <div className="bg-[#365bae] content-stretch flex h-[32px] items-center justify-center overflow-clip relative rounded-[8px] shrink-0" data-name="Documentation chip">
        <StateLayer2 />
      </div>
      <div className="cursor-pointer relative rounded-[8px] shrink-0" data-name="Focus area chip">
        <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[inherit]">
          <StateLayer3 />
        </div>
        <div aria-hidden="true" className="absolute border border-[#c4c8b7] border-solid inset-0 pointer-events-none rounded-[8px]" />
      </div>
    </div>
  );
}

export default function Question() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[8px] items-start justify-center px-0 py-[12px] relative size-full" data-name="Question">
      <Text />
      <AboutTheQuestionsChips />
    </div>
  );
}