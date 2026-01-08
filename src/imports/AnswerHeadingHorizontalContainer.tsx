import svgPaths from "./svg-f1g8ccuivl";

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

function StateLayer() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center p-[8px] relative shrink-0" data-name="state-layer">
      <VolumeUp />
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

function TrailingIcon1() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-center justify-center relative shrink-0 size-[48px]" data-name="trailing-icon 3">
      <Container />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <div className="flex flex-col font-['Quatro:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1a1c16] text-[22px] text-nowrap">
        <p className="leading-[28px] whitespace-pre">
          <span className="font-['Quatro:Regular',sans-serif] not-italic">1.</span>1<span className="font-['Quatro:Regular',sans-serif] not-italic">.</span>1
        </p>
      </div>
      <TrailingIcon1 />
    </div>
  );
}

function StateLayer1() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center justify-center px-[12px] py-[10px] relative size-full">
          <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#4a671e] text-[14px] text-center text-nowrap tracking-[0.1px]">
            <p className="leading-[20px] whitespace-pre">Forrige spørsmål</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function PreviousButton() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[40px] items-center justify-center overflow-clip relative rounded-[100px] shrink-0" data-name="Previous Button">
      <StateLayer1 />
    </div>
  );
}

function StateLayer2() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center justify-center px-[12px] py-[10px] relative size-full">
          <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#4a671e] text-[14px] text-center text-nowrap tracking-[0.1px]">
            <p className="leading-[20px] whitespace-pre">Neste spørsmål</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function NextButton() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[40px] items-center justify-center overflow-clip relative rounded-[100px] shrink-0" data-name="next Button">
      <StateLayer2 />
    </div>
  );
}

function NavigationButtons() {
  return (
    <div className="content-stretch flex gap-[16px] items-center justify-end relative shrink-0" data-name="navigation Buttons">
      <PreviousButton />
      <NextButton />
    </div>
  );
}

function TrailingIcon() {
  return (
    <div className="basis-0 content-stretch flex gap-[24px] grow h-[48px] items-center justify-end min-h-px min-w-px relative shrink-0" data-name="trailing-icon">
      <NavigationButtons />
    </div>
  );
}

export default function AnswerHeadingHorizontalContainer() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative size-full" data-name="Answer heading horizontal container">
      <Frame />
      <TrailingIcon />
    </div>
  );
}