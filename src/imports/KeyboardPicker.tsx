import svgPaths from "./svg-pum4ziyfdt";

function Header() {
  return (
    <div className="relative shrink-0 w-full" data-name="Header">
      <div className="content-stretch flex items-start pt-[24px] px-[24px] relative w-full">
        <p className="label-small text-muted-foreground">Velg klokkeslett</p>
      </div>
    </div>
  );
}

function InputField() {
  return (
    <div className="bg-primary-container h-[72px] relative rounded-[8px] shrink-0 w-full" data-name="Input Field">
      <div aria-hidden="true" className="absolute border-2 border-primary border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-px items-center justify-center px-[16px] py-[9px] relative size-full">
          <div className="flex flex-col justify-center leading-[0] not-italic relative shrink-0 text-primary text-[45px] text-center whitespace-nowrap">
            <p className="leading-[52px]">20</p>
          </div>
          <div className="bg-primary h-[42px] shrink-0 w-[2px]" data-name="Cursor" />
        </div>
      </div>
    </div>
  );
}

function Hour() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[7px] items-start min-h-px min-w-px relative" data-name="Hour">
      <InputField />
      <p className="label-small text-muted-foreground relative shrink-0 w-full whitespace-pre-wrap">Timer</p>
    </div>
  );
}

function InputField1() {
  return (
    <div className="bg-muted h-[72px] relative rounded-[8px] shrink-0 w-full" data-name="Input Field">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[16px] py-[9px] relative size-full">
          <div className="flex flex-col justify-center leading-[0] not-italic relative shrink-0 text-foreground text-[45px] text-center whitespace-nowrap">
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
      <p className="label-small text-muted-foreground relative shrink-0 w-full whitespace-pre-wrap">Minutter</p>
    </div>
  );
}

function HourMinuteSelector() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative" data-name="Hour & Minute Selector">
      <Hour />
      <div className="flex flex-col h-[72px] justify-center leading-[0] relative shrink-0 text-foreground text-[57px] text-center w-[24px]">
        <p className="leading-[64px] whitespace-pre-wrap">:</p>
      </div>
      <Minute />
    </div>
  );
}

function Input() {
  return (
    <div className="h-[95px] relative shrink-0 w-full" data-name="Input">
      <div className="flex flex-row justify-center size-full">
        <div className="content-stretch flex gap-[12px] items-start justify-center px-[24px] relative size-full">
          <HourMinuteSelector />
        </div>
      </div>
    </div>
  );
}

function InputSelection() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px min-w-px relative w-full" data-name="Input Selection">
      <Input />
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p32338af0} fill="var(--muted-foreground)" id="icon" />
        </g>
      </svg>
    </div>
  );
}

function StateLayer2() {
  return (
    <div className="content-stretch flex items-center justify-center p-[8px] relative shrink-0" data-name="state-layer">
      <Icon />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0" data-name="container">
      <StateLayer2 />
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

function StateLayer3() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="state-layer">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[12px] py-[10px] relative size-full">
          <div className="flex flex-col justify-center leading-[0] relative shrink-0 text-center whitespace-nowrap">
            <p className="label-large text-primary">Avbryt</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function SecondaryButton() {
  return (
    <div className="content-stretch flex flex-col h-[40px] items-center justify-center overflow-clip relative rounded-[100px] shrink-0" data-name="Secondary button">
      <StateLayer3 />
    </div>
  );
}

function StateLayer4() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="state-layer">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[12px] py-[10px] relative size-full">
          <div className="flex flex-col justify-center leading-[0] relative shrink-0 text-center whitespace-nowrap">
            <p className="label-large text-primary">OK</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function PrimaryButton() {
  return (
    <div className="content-stretch flex flex-col h-[40px] items-center justify-center overflow-clip relative rounded-[100px] shrink-0" data-name="Primary button">
      <StateLayer4 />
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
    <div className="bg-surface-container content-stretch flex flex-col gap-[20px] items-start relative rounded-[28px] size-full" data-name="Keyboard picker">
      <Header />
      <InputSelection />
      <Actions />
    </div>
  );
}
