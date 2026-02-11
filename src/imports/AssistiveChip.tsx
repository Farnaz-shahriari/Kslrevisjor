import imgDebio from "figma:asset/ad6a9cba5bc5debb973519a0747d791024fa12b8.png";

function Debio() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="debio">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgDebio} />
    </div>
  );
}

function StateLayer() {
  return (
    <div className="content-stretch flex gap-[8px] h-[32px] items-center justify-center pl-[8px] pr-[16px] py-[6px] relative shrink-0" data-name="state-layer">
      <Debio />
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[14px] text-center tracking-[0.1px] whitespace-nowrap">
        <p className="leading-[20px]">Debio</p>
      </div>
    </div>
  );
}

export default function AssistiveChip() {
  return (
    <div className="relative rounded-[8px] size-full" data-name="Assistive chip">
      <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[inherit] size-full">
        <StateLayer />
      </div>
      <div aria-hidden="true" className="absolute border border-[#c4c8b7] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}