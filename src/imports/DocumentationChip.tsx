import svgPaths from "./svg-12b6842bx8";

function StateLayer() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-center justify-center pl-[8px] pr-[12px] py-[6px] relative shrink-0" data-name="state-layer">
      <div className="relative shrink-0 size-[18px]" data-name="Icon">
        <div className="absolute inset-0 overflow-clip" data-name="snippet_folder">
          <div className="absolute inset-[16.67%_8.33%]" data-name="Vector">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 12">
              <path d={svgPaths.p33aa4080} fill="var(--fill-0, white)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[14px] text-center text-nowrap text-white tracking-[0.1px]">
        <p className="leading-[20px] whitespace-pre">Dokumentasjon kreves</p>
      </div>
    </div>
  );
}

export default function DocumentationChip() {
  return (
    <div className="bg-[#365bae] content-stretch flex items-center justify-center overflow-clip relative rounded-[8px] size-full" data-name="Documentation chip">
      <StateLayer />
    </div>
  );
}