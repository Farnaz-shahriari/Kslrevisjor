import svgPaths from "./svg-o536ea8qon";

function InputTextContainer() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Input text container">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] text-nowrap tracking-[0.5px]">
        <p className="leading-[24px] whitespace-pre">KSL-egenrevisjon (Årlig dokumentasjon)</p>
      </div>
    </div>
  );
}

function LabelTextContainer() {
  return (
    <div className="absolute bg-white box-border content-stretch flex items-center left-[-4px] px-[4px] py-0 top-[-12px]" data-name="Label text container">
      <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#44483b] text-[12px] text-nowrap tracking-[0.4px] whitespace-pre">{`Eget avvik* `}</p>
    </div>
  );
}

function Content() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-col grow h-[48px] items-start justify-center min-h-px min-w-px px-0 py-[4px] relative shrink-0" data-name="Content">
      <InputTextContainer />
      <LabelTextContainer />
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p3219cb70} fill="var(--fill-0, #44483B)" id="icon" />
        </g>
      </svg>
    </div>
  );
}

function StateLayer() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center p-[8px] relative shrink-0" data-name="state-layer">
      <Icon />
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

function TrailingIcon() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-center justify-center relative shrink-0 size-[48px]" data-name="Trailing icon">
      <Container />
    </div>
  );
}

function StateLayer1() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="State-layer">
      <div className="size-full">
        <div className="box-border content-stretch flex items-start pl-[16px] pr-0 py-[4px] relative size-full">
          <Content />
          <TrailingIcon />
        </div>
      </div>
    </div>
  );
}

function TextField() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[10px] grow items-start min-h-px min-w-px relative rounded-[4px] shrink-0 w-full" data-name="Text field">
      <div aria-hidden="true" className="absolute border border-[#74796a] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <StateLayer1 />
    </div>
  );
}

function TextField1() {
  return (
    <div className="content-stretch flex flex-col h-[56px] items-start relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="Text field">
      <TextField />
    </div>
  );
}

function DeviationTitle() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full" data-name="Deviation title">
      <TextField1 />
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="calendar_today">
          <path d={svgPaths.p6ea8c00} fill="var(--fill-0, #44483B)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function StateLayer2() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center p-[8px] relative shrink-0" data-name="state-layer">
      <Icon1 />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center overflow-clip relative rounded-[100px] shrink-0" data-name="container">
      <StateLayer2 />
    </div>
  );
}

function LeadingIcon() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-center justify-center relative shrink-0 size-[48px]" data-name="Leading icon">
      <Container1 />
    </div>
  );
}

function InputTextContainer1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Input text container">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] text-nowrap tracking-[0.5px]">
        <p className="leading-[24px] whitespace-pre">6.12.2025</p>
      </div>
    </div>
  );
}

function LabelTextContainer1() {
  return (
    <div className="absolute bg-white box-border content-stretch flex items-center left-[-36px] px-[4px] py-0 top-[-12px]" data-name="Label text container">
      <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#44483b] text-[12px] text-nowrap tracking-[0.4px] whitespace-pre">{`Frist*  `}</p>
    </div>
  );
}

function Content1() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-col grow h-[48px] items-start justify-center min-h-px min-w-px px-0 py-[4px] relative shrink-0" data-name="Content">
      <InputTextContainer1 />
      <LabelTextContainer1 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d="M12 15L7 10H17L12 15Z" fill="var(--fill-0, #44483B)" id="icon" />
        </g>
      </svg>
    </div>
  );
}

function StateLayer3() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center p-[8px] relative shrink-0" data-name="state-layer">
      <Icon2 />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center overflow-clip relative rounded-[100px] shrink-0" data-name="container">
      <StateLayer3 />
    </div>
  );
}

function TrailingIcon1() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-center justify-center relative shrink-0 size-[48px]" data-name="Trailing icon">
      <Container2 />
    </div>
  );
}

function StateLayer4() {
  return (
    <div className="basis-0 box-border content-stretch flex grow items-start min-h-px min-w-px px-0 py-[4px] relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="State-layer">
      <LeadingIcon />
      <Content1 />
      <TrailingIcon1 />
    </div>
  );
}

function TextField2() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] h-[56px] items-start relative rounded-[4px] shrink-0 w-full" data-name="Text field">
      <div aria-hidden="true" className="absolute border border-[#74796a] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <StateLayer4 />
    </div>
  );
}

function TextField3() {
  return (
    <div className="content-stretch flex flex-col items-start relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-[200px]" data-name="Text field">
      <TextField2 />
    </div>
  );
}

function DeviationDeadline() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Deviation deadline">
      <TextField3 />
    </div>
  );
}

function StateLayer5() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-center justify-center px-[24px] py-[16px] relative shrink-0" data-name="State-layer">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#4a671e] text-[16px] text-nowrap tracking-[0.15px]">
        <p className="leading-[24px] whitespace-pre">Slett avvik</p>
      </div>
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0" data-name="Content">
      <StateLayer5 />
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

function StateLayer6() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-center justify-center px-[24px] py-[16px] relative shrink-0" data-name="State-layer">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[16px] text-nowrap text-white tracking-[0.15px]">
        <p className="leading-[24px] whitespace-pre">Lagre eget avvik</p>
      </div>
    </div>
  );
}

function Content3() {
  return (
    <div className="bg-[#4a671e] content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0" data-name="Content">
      <StateLayer6 />
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

function Frame() {
  return (
    <div className="content-stretch flex gap-[16px] items-center justify-end relative shrink-0 w-full">
      <Button />
      <Button1 />
    </div>
  );
}

export default function ProducerDeviation() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[16px] items-start pb-[56px] pt-0 px-0 relative size-full" data-name="Producer Deviation">
      <DeviationTitle />
      <DeviationDeadline />
      <Frame />
    </div>
  );
}