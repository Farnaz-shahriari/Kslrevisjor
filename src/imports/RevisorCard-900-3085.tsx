import svgPaths from "./svg-kwr2krk31l";

function LeadingElement() {
  return (
    <div className="bg-[#f4f4ea] relative rounded-[7.262px] shrink-0 size-[24px]" data-name="Leading element">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="post_add">
          <g id="Vector">
            <path d={svgPaths.p15082280} fill="var(--fill-0, #4A671E)" />
            <path d={svgPaths.p141e7e00} fill="var(--fill-0, #4A671E)" />
            <path d="M14.5 9.5H6.5V11.5H14.5V9.5Z" fill="var(--fill-0, #4A671E)" />
            <path d={svgPaths.p1e924700} fill="var(--fill-0, #4A671E)" />
            <path d={svgPaths.p3be0780} fill="var(--fill-0, #4A671E)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Badges() {
  return (
    <div className="absolute bg-[#ba1a1a] content-stretch flex items-center justify-center left-[36px] max-w-[34px] min-w-[16px] overflow-clip px-[4px] py-0 rounded-[100px] top-[-4px]" data-name="Badges">
      <div className="basis-0 flex flex-col font-['Manrope:Medium',sans-serif] font-medium grow justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[11px] text-center text-white tracking-[0.5px]">
        <p className="leading-[16px]">10</p>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="bg-[#f4f4ea] content-stretch flex gap-[8px] items-center justify-center p-[8px] relative rounded-[7.262px] shrink-0 size-[48px]" data-name="icon">
      <LeadingElement />
      <Badges />
    </div>
  );
}

function Content() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] tracking-[0.15px] w-full">
        <p className="leading-[24px]">Tildelte revisjoner</p>
      </div>
      <p className="font-['Manrope:Regular',sans-serif] font-normal h-[20px] leading-[20px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#44483b] text-[14px] text-nowrap tracking-[0.25px] w-full">Venter på at du skal ta stilling</p>
    </div>
  );
}

function ArrowRight() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="arrow_right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="arrow_right">
          <path d="M10 17V7L15 12L10 17Z" fill="var(--fill-0, #44483B)" id="icon" />
        </g>
      </svg>
    </div>
  );
}

function TrailingElement() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Trailing element">
      <ArrowRight />
    </div>
  );
}

function StateLayer() {
  return (
    <div className="h-[56px] relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[16px] py-0 relative size-full">
          <Content />
          <TrailingElement />
        </div>
      </div>
    </div>
  );
}

function ListItemListItem4Density() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center min-h-[56px] relative shrink-0 w-full" data-name="List item/List Item: -4 Density">
      <StateLayer />
    </div>
  );
}

function BeredskapCard() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start justify-center min-h-px min-w-px overflow-clip relative rounded-[16px] shrink-0" data-name="beredskap card">
      <ListItemListItem4Density />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Container">
      <Icon />
      <BeredskapCard />
    </div>
  );
}

export default function RevisorCard() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start p-[12px] relative rounded-[16px] size-full" data-name="Revisor card">
      <div aria-hidden="true" className="absolute border border-[#c4c8b7] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Container />
    </div>
  );
}