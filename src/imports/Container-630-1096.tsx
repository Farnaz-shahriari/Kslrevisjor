import svgPaths from "./svg-e6eq5ss5pb";

function StateLayer() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[10px] relative shrink-0" data-name="State-layer">
      <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[14px] text-nowrap text-white tracking-[0.1px]">
        <p className="leading-[20px]">Fjern alle filtre</p>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="bg-[#4a671e] content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[100px] shrink-0" data-name="Content">
      <StateLayer />
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch flex h-[48px] items-center justify-center relative shrink-0" data-name="Button">
      <Content />
    </div>
  );
}

function TrailingIcon() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="trailing-icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="trailing-icon">
          <path d={svgPaths.p26507680} fill="var(--fill-0, #44483B)" id="icon" />
        </g>
      </svg>
    </div>
  );
}

function StateLayer1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center pl-[12px] pr-[8px] py-[6px] relative shrink-0" data-name="state-layer">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#44483b] text-[14px] text-center text-nowrap tracking-[0.1px]">
        <p className="leading-[20px]">Kritisk</p>
      </div>
      <TrailingIcon />
    </div>
  );
}

function InputChip() {
  return (
    <div className="h-[32px] relative rounded-[8px] shrink-0" data-name="Input chip">
      <div className="content-stretch flex h-full items-center justify-center overflow-clip relative rounded-[inherit]">
        <StateLayer1 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#c4c8b7] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function TrailingIcon1() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="trailing-icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="trailing-icon">
          <path d={svgPaths.p26507680} fill="var(--fill-0, #44483B)" id="icon" />
        </g>
      </svg>
    </div>
  );
}

function StateLayer2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center pl-[12px] pr-[8px] py-[6px] relative shrink-0" data-name="state-layer">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] text-center text-nowrap tracking-[0.5px]">
        <p className="leading-[24px]">Fjellstad Bruk</p>
      </div>
      <TrailingIcon1 />
    </div>
  );
}

function InputChip1() {
  return (
    <div className="h-[32px] relative rounded-[8px] shrink-0" data-name="Input chip">
      <div className="content-stretch flex h-full items-center justify-center overflow-clip relative rounded-[inherit]">
        <StateLayer2 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#c4c8b7] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function TrailingIcon2() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="trailing-icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="trailing-icon">
          <path d={svgPaths.p26507680} fill="var(--fill-0, #44483B)" id="icon" />
        </g>
      </svg>
    </div>
  );
}

function StateLayer3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center pl-[12px] pr-[8px] py-[6px] relative shrink-0" data-name="state-layer">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#44483b] text-[14px] text-center text-nowrap tracking-[0.1px]">
        <p className="leading-[20px]">Solheim Gård</p>
      </div>
      <TrailingIcon2 />
    </div>
  );
}

function InputChip2() {
  return (
    <div className="h-[32px] relative rounded-[8px] shrink-0" data-name="Input chip">
      <div className="content-stretch flex h-full items-center justify-center overflow-clip relative rounded-[inherit]">
        <StateLayer3 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#c4c8b7] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function FilterContainer() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Filter Container">
      <Button />
      <InputChip />
      <InputChip1 />
      <InputChip2 />
    </div>
  );
}

export default function Container() {
  return (
    <div className="content-stretch flex gap-[8px] items-center px-[24px] py-[8px] relative size-full" data-name="Container">
      <FilterContainer />
      <p className="font-['Manrope:Medium',sans-serif] font-medium leading-[24px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#44483b] text-[16px] text-nowrap tracking-[0.15px]">N treff</p>
    </div>
  );
}