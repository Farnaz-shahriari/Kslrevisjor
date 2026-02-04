import svgPaths from "./svg-5ppphcyh59";

function Header() {
  return (
    <div className="relative shrink-0 w-full" data-name="Header">
      <div className="content-stretch flex items-start pt-[24px] px-[24px] relative w-full">
        <p className="font-['Manrope:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#44483b] text-[12px] tracking-[0.5px]">Enter time</p>
      </div>
    </div>
  );
}

function InputField() {
  return (
    <div className="bg-[#eff1e7] h-[72px] relative rounded-[8px] shrink-0 w-full" data-name="Input Field">
      <div aria-hidden="true" className="absolute border-2 border-[#4a671e] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-px items-center justify-center px-[16px] py-[9px] relative size-full">
          <div className="flex flex-col font-['Quatro:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#284000] text-[45px] text-center whitespace-nowrap">
            <p className="leading-[52px]">20</p>
          </div>
          <div className="bg-[#4a671e] h-[42px] shrink-0 w-[2px]" data-name="Cursor" />
        </div>
      </div>
    </div>
  );
}

function Hour() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[7px] items-start min-h-px min-w-px relative" data-name="Hour">
      <InputField />
      <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#44483b] text-[12px] tracking-[0.4px] w-full whitespace-pre-wrap">Hour</p>
    </div>
  );
}

function InputField1() {
  return (
    <div className="bg-[#e3e3d9] h-[72px] relative rounded-[8px] shrink-0 w-full" data-name="Input Field">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[16px] py-[9px] relative size-full">
          <div className="flex flex-col font-['Quatro:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1a1c16] text-[45px] text-center whitespace-nowrap">
            <p className="leading-[52px]">00</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Minute() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[7px] items-start min-h-px min-w-px relative" data-name="Minute">
      <InputField1 />
      <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#44483b] text-[12px] tracking-[0.4px] w-full whitespace-pre-wrap">Minute</p>
    </div>
  );
}

function HourMinuteSelector() {
  return (
    <div className="relative shrink-0 w-full" data-name="Hour & Minute Selector">
      <div className="flex flex-row justify-center size-full">
        <div className="content-stretch flex items-start justify-center px-[24px] relative w-full">
          <Hour />
          <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal h-[72px] justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[57px] text-center w-[24px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[64px] whitespace-pre-wrap">:</p>
          </div>
          <Minute />
        </div>
      </div>
    </div>
  );
}

function InputSelection() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px min-w-px relative w-full" data-name="Input Selection">
      <HourMinuteSelector />
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p32338af0} fill="var(--fill-0, #44483B)" id="icon" />
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

function IconButton() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[48px]" data-name="Icon button">
      <Container />
    </div>
  );
}

function StateLayer1() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="state-layer">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[12px] py-[10px] relative size-full">
          <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#4a671e] text-[14px] text-center tracking-[0.1px] whitespace-nowrap">
            <p className="leading-[20px]">Cancel</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function SecondaryButton() {
  return (
    <div className="content-stretch flex flex-col h-[40px] items-center justify-center overflow-clip relative rounded-[100px] shrink-0" data-name="Secondary button">
      <StateLayer1 />
    </div>
  );
}

function StateLayer2() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="state-layer">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[12px] py-[10px] relative size-full">
          <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#4a671e] text-[14px] text-center tracking-[0.1px] whitespace-nowrap">
            <p className="leading-[20px]">OK</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function PrimaryButton() {
  return (
    <div className="content-stretch flex flex-col h-[40px] items-center justify-center overflow-clip relative rounded-[100px] shrink-0" data-name="Primary button">
      <StateLayer2 />
    </div>
  );
}

function Actions1() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Actions">
      <SecondaryButton />
      <PrimaryButton />
    </div>
  );
}

function Actions() {
  return (
    <div className="relative shrink-0 w-full" data-name="Actions">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pb-[20px] pl-[12px] pr-[24px] relative w-full">
          <IconButton />
          <Actions1 />
        </div>
      </div>
    </div>
  );
}

export default function KeyboardPicker() {
  return (
    <div className="bg-[#e9e9df] content-stretch flex flex-col gap-[20px] items-start relative rounded-[28px] size-full" data-name="Keyboard picker">
      <Header />
      <InputSelection />
      <Actions />
    </div>
  );
}