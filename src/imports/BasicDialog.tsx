function TitleDescription() {
  return (
    <div className="relative shrink-0 w-full" data-name="Title & Description">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start leading-[0] pb-0 pt-[24px] px-[24px] relative w-full">
          <div className="flex flex-col font-['Quatro:Regular',sans-serif] justify-center not-italic relative shrink-0 text-[#1a1c16] text-[24px] w-full">
            <p className="leading-[32px]">Basic dialog title</p>
          </div>
          <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#44483b] text-[14px] tracking-[0.25px] w-full">
            <p className="leading-[20px]">A dialog is a type of modal window that appears in front of app content to provide critical information, or prompt for a decision to be made.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TextContent() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Text Content">
      <TitleDescription />
    </div>
  );
}

function StateLayer() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[12px] py-[10px] relative size-full">
          <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#4a671e] text-[14px] text-center text-nowrap tracking-[0.1px]">
            <p className="leading-[20px]">Action 2</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function SecondaryButton() {
  return (
    <div className="content-stretch flex flex-col h-[40px] items-center justify-center overflow-clip relative rounded-[100px] shrink-0" data-name="Secondary button">
      <StateLayer />
    </div>
  );
}

function StateLayer1() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[12px] py-[10px] relative size-full">
          <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#4a671e] text-[14px] text-center text-nowrap tracking-[0.1px]">
            <p className="leading-[20px]">Action 1</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function PrimaryButton() {
  return (
    <div className="content-stretch flex flex-col h-[40px] items-center justify-center overflow-clip relative rounded-[100px] shrink-0" data-name="Primary button">
      <StateLayer1 />
    </div>
  );
}

function Actions() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip pl-[8px] pr-[24px] py-[24px] relative shrink-0" data-name="Actions">
      <SecondaryButton />
      <PrimaryButton />
    </div>
  );
}

function Actions1() {
  return (
    <div className="content-stretch flex flex-col items-end overflow-clip relative shrink-0 w-full" data-name="Actions">
      <Actions />
    </div>
  );
}

export default function BasicDialog() {
  return (
    <div className="bg-[#e9e9df] content-stretch flex flex-col items-end overflow-clip relative rounded-[28px] size-full" data-name="Basic dialog">
      <TextContent />
      <Actions1 />
    </div>
  );
}