function StateLayer() {
  return (
    <div className="content-stretch flex h-[32px] items-center justify-center px-[16px] py-[6px] relative shrink-0" data-name="state-layer">
      <div className="css-g0mm18 flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#3d2c00] text-[14px] text-center tracking-[0.1px]">
        <p className="css-ew64yg leading-[20px]">Oppfølging gyldig KSL</p>
      </div>
    </div>
  );
}

function FilterChip() {
  return (
    <div className="bg-[#fdeeb1] h-[32px] relative rounded-[8px] shrink-0" data-name="Filter chip">
      <div className="content-stretch flex h-full items-center justify-center overflow-clip relative rounded-[inherit]">
        <StateLayer />
      </div>
      <div aria-hidden="true" className="absolute border border-[#c4c8b7] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

export default function InfoChips() {
  return (
    <div className="content-stretch flex items-start relative size-full" data-name="info chips">
      <FilterChip />
    </div>
  );
}