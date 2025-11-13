import svgPaths from "./svg-mop7ef4bwx";

function StateLayer() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center p-[8px] relative shrink-0" data-name="state-layer">
      <div className="relative shrink-0 size-[24px]" data-name="Icon">
        <div className="absolute inset-[20.833%]" data-name="icon">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
            <path d={svgPaths.p2aa77200} fill="var(--fill-0, #44483B)" id="icon" />
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

function CardHeader() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Card header">
      <div className="box-border content-stretch flex gap-[4px] h-[32px] items-center overflow-clip pl-0 pr-[4px] py-0 relative rounded-[8px] shrink-0" data-name="icon tx">
        <div className="relative shrink-0 size-[18px]" data-name="Icon KSL Trygg">
          <div className="absolute inset-0 overflow-clip" data-name="snippet_folder">
            <div className="absolute inset-[16.67%_8.33%]" data-name="Vector">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 12">
                <path d={svgPaths.p33aa4080} fill="var(--fill-0, #44483B)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
        <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#44483b] text-[12px] text-center text-nowrap tracking-[0.5px]">
          <p className="leading-[16px] whitespace-pre">Dokument</p>
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[10px] items-center justify-center relative shrink-0 size-[48px]" data-name="Icon button">
        <Container />
      </div>
    </div>
  );
}

function CardHeader1() {
  return <div className="content-stretch flex gap-[16px] items-center shrink-0 w-full" data-name="Card header" />;
}

function Content() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-col grow items-start min-h-px min-w-px pb-[8px] pt-0 px-0 relative self-stretch shrink-0" data-name="Content">
      <CardHeader />
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] overflow-ellipsis overflow-hidden relative shrink-0 text-[#1a1c16] text-[16px] text-nowrap tracking-[0.15px] w-full">
        <p className="[white-space-collapse:collapse] leading-[24px] overflow-ellipsis overflow-hidden">Vedlikehold av ventilasjonssystem</p>
      </div>
      <CardHeader1 />
    </div>
  );
}

function TextAndImage() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Text and image">
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[16px] items-start pl-[16px] pr-[8px] py-0 relative w-full">
          <Content />
        </div>
      </div>
    </div>
  );
}

export default function ItemCard() {
  return (
    <div className="bg-white relative rounded-[12px] size-full" data-name="Item Card">
      <div className="content-stretch flex items-center overflow-clip relative rounded-[inherit] size-full">
        <TextAndImage />
      </div>
      <div aria-hidden="true" className="absolute border border-[#c4c8b7] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}