import svgPaths from "./svg-go8c5cj06u";

function Note() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="note">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="note">
          <path d={svgPaths.p3dc58700} fill="var(--fill-0, #4A671E)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function StateLayer() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center px-[24px] py-[16px] relative shrink-0" data-name="State-layer">
      <Note />
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#4a671e] text-[16px] tracking-[0.15px] whitespace-nowrap">
        <p className="leading-[24px]">Åpne egne notater</p>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="bg-[#f4f4ea] content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.3),0px_2px_6px_2px_rgba(0,0,0,0.15)] shrink-0" data-name="Content">
      <StateLayer />
    </div>
  );
}

export default function Button() {
  return (
    <div className="content-stretch flex items-center justify-center relative size-full" data-name="Button">
      <Content />
    </div>
  );
}