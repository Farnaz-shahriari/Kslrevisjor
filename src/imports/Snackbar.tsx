import svgPaths from "./svg-l1bmea34rk";

function StateLayer() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-center justify-center px-[12px] py-[10px] relative shrink-0" data-name="state-layer">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#afd27c] text-[14px] text-center text-nowrap tracking-[0.1px]">
        <p className="leading-[20px] whitespace-pre">Action</p>
      </div>
    </div>
  );
}

function StateLayer1() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center p-[8px] relative shrink-0" data-name="state-layer">
      <div className="relative shrink-0 size-[24px]" data-name="Icon">
        <div className="absolute inset-[20.833%]" data-name="icon">
          <div className="absolute inset-0" style={{ "--fill-0": "rgba(241, 241, 231, 1)" } as React.CSSProperties}>
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
              <path d={svgPaths.p2aa77200} fill="var(--fill-0, #F1F1E7)" id="icon" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center overflow-clip relative rounded-[100px] shrink-0" data-name="container">
      <StateLayer1 />
    </div>
  );
}

function ActionCloseAffordance() {
  return (
    <div className="content-stretch cursor-pointer flex items-center relative shrink-0" data-name="action & close affordance">
      <div className="content-stretch flex flex-col gap-[8px] items-center justify-center overflow-clip relative rounded-[100px] shrink-0" data-name="Inverse-button">
        <StateLayer />
      </div>
      <div className="content-stretch flex flex-col gap-[10px] items-center justify-center relative shrink-0 size-[48px]" data-name="Close affordance">
        <Container />
      </div>
    </div>
  );
}

export default function Snackbar() {
  return (
    <div className="bg-[#2f312b] relative rounded-[4px] shadow-[0px_4px_8px_3px_rgba(0,0,0,0.15),0px_1px_3px_0px_rgba(0,0,0,0.3)] size-full" data-name="Snackbar">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[4px] items-center pl-[16px] pr-0 py-0 relative size-full">
          <p className="basis-0 font-['Manrope:Regular',sans-serif] font-normal grow h-[20px] leading-[20px] min-h-px min-w-px relative shrink-0 text-[#f1f2e6] text-[14px] tracking-[0.25px]">Single-line snackbar with action</p>
          <ActionCloseAffordance />
        </div>
      </div>
    </div>
  );
}