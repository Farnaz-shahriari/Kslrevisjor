import svgPaths from "./svg-fww0ywnfzv";

function StateLayer() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center p-[8px] relative shrink-0" data-name="state-layer">
      <div className="relative shrink-0 size-[24px]" data-name="Icon">
        <div className="absolute inset-[12.5%]" data-name="icon">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
            <path d={svgPaths.p16b4a380} fill="var(--fill-0, #44483B)" id="icon" />
          </svg>
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

function Content() {
  return (
    <div className="basis-0 content-stretch cursor-pointer flex gap-[10px] grow h-full items-center min-h-px min-w-px relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#44483b] text-[16px] text-nowrap tracking-[0.5px]">
        <p className="leading-[24px] whitespace-pre">Søk i sjekklistespørsmål</p>
      </div>
    </div>
  );
}

function TrailingElements() {
  return <div className="content-stretch flex items-center justify-end shrink-0" data-name="Trailing-Elements" />;
}

function StateLayer1() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[4px] items-center p-[4px] relative size-full">
          <div className="content-stretch cursor-pointer flex flex-col gap-[10px] items-center justify-center relative shrink-0 size-[48px]" data-name="Leading-icon">
            <Container />
          </div>
          <Content />
          <TrailingElements />
        </div>
      </div>
    </div>
  );
}

export default function Search() {
  return (
    <div className="content-stretch flex items-start relative size-full" data-name="Search">
      <div className="basis-0 bg-[#e9e9df] content-stretch flex gap-[4px] grow h-[56px] items-center max-w-[720px] min-h-px min-w-[360px] overflow-clip relative rounded-[28px] shrink-0" data-name="Search bar">
        <StateLayer1 />
      </div>
    </div>
  );
}