export default function HorizontalDividerWithSubhead() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center px-[16px] relative size-full" data-name="Horizontal/Divider with subhead">
      <div className="h-0 relative shrink-0 w-full" data-name="Divider">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 288 1">
            <line id="Divider" stroke="var(--stroke-0, #C4C8B7)" x2="288" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <p className="font-['Manrope:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#44483b] text-[14px] tracking-[0.1px] w-full whitespace-pre-wrap">Subheader</p>
    </div>
  );
}