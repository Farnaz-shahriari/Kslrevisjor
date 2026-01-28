import svgPaths from "./svg-h0hxm9lc87";

function ClosingAvvikIcon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Closing Avvik Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="spatial_audio_off">
          <g id="Vector">
            <path d={svgPaths.p1d73bd00} fill="var(--fill-0, #44483B)" />
            <path d={svgPaths.p17184600} fill="var(--fill-0, #44483B)" />
            <path d={svgPaths.pfba46c0} fill="var(--fill-0, #44483B)" />
            <path d={svgPaths.p33b21a00} fill="var(--fill-0, #44483B)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

export default function TypeOfClosing() {
  return (
    <div className="content-stretch flex gap-[8px] items-center px-0 py-[8px] relative size-full" data-name="Type of closing">
      <ClosingAvvikIcon />
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] text-nowrap tracking-[0.15px]">
        <p className="leading-[24px]">Lukking krever fysisk besøk</p>
      </div>
    </div>
  );
}