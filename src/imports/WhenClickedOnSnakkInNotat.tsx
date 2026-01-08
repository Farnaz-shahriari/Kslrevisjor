import svgPaths from "./svg-avbrtuz18i";
import imgImage from "figma:asset/d678aa745e74adddc4c7e64f6135c96efcf57242.png";

function Icon() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon">
          <path d={svgPaths.p3eba5b00} fill="var(--fill-0, white)" id="icon" />
        </g>
      </svg>
    </div>
  );
}

function StateLayer() {
  return (
    <div className="content-stretch flex h-[96px] items-center justify-center relative shrink-0 w-full" data-name="State-layer">
      <Icon />
    </div>
  );
}

function Content() {
  return (
    <div className="bg-[#ba1a1a] content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[100px] shrink-0 w-[96px]" data-name="Content">
      <StateLayer />
    </div>
  );
}

function IconButton() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Icon button">
      <Content />
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon">
          <path d={svgPaths.p1e20e900} fill="var(--fill-0, white)" id="icon" />
        </g>
      </svg>
    </div>
  );
}

function StateLayer1() {
  return (
    <div className="content-stretch flex h-[96px] items-center justify-center relative shrink-0 w-full" data-name="State-layer">
      <Icon1 />
    </div>
  );
}

function Content1() {
  return (
    <div className="bg-[#4a671e] content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[100px] shrink-0 w-[96px]" data-name="Content">
      <StateLayer1 />
    </div>
  );
}

function IconButton1() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Icon button">
      <Content1 />
    </div>
  );
}

function ButtonContainer() {
  return (
    <div className="content-stretch flex gap-[32px] items-center justify-center px-0 py-[16px] relative shrink-0 w-full" data-name="Button Container">
      <IconButton />
      <IconButton1 />
    </div>
  );
}

function LabelTextContainer() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Label text container">
      <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#44483b] text-[16px] text-nowrap tracking-[0.5px] whitespace-pre">live text is written here...</p>
    </div>
  );
}

function Content2() {
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
          <Content2 />
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
    <div className="relative shrink-0 w-full" data-name="Question list heading">
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start pb-[32px] pt-0 px-[40px] relative w-full">
          <TextField1 />
        </div>
      </div>
    </div>
  );
}

export default function WhenClickedOnSnakkInNotat() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[16px] items-start justify-center relative size-full" data-name="When clicked on snakk in notat">
      <div className="aspect-[1536/1024] relative shrink-0 w-full" data-name="Image">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage} />
      </div>
      <ButtonContainer />
      <QuestionListHeading />
    </div>
  );
}