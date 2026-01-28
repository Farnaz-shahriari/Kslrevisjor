import svgPaths from "./svg-2vm1tzdqhs";

function NavigateNext() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="navigate_next">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="navigate_next">
          <path d={svgPaths.pa1eb970} fill="var(--fill-0, #174295)" id="icon" />
        </g>
      </svg>
    </div>
  );
}

function StateLayer() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center px-[24px] py-[16px] relative shrink-0" data-name="State-layer">
      <NavigateNext />
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#174295] text-[16px] text-nowrap tracking-[0.15px]">
        <p className="leading-[24px]">7 revisjoner venter på aksept</p>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="bg-[#dae2ff] content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0" data-name="Content">
      <StateLayer />
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Button">
      <Content />
    </div>
  );
}

function NavigateNext1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="navigate_next">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="navigate_next">
          <path d={svgPaths.pa1eb970} fill="var(--fill-0, #174295)" id="icon" />
        </g>
      </svg>
    </div>
  );
}

function StateLayer1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center px-[24px] py-[16px] relative shrink-0" data-name="State-layer">
      <NavigateNext1 />
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#174295] text-[16px] text-nowrap tracking-[0.15px]">
        <p className="leading-[24px]">3 revisjoner venter på Dato plannleginng</p>
      </div>
    </div>
  );
}

function Content1() {
  return (
    <div className="bg-[#dae2ff] content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0" data-name="Content">
      <StateLayer1 />
    </div>
  );
}

function Button1() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Button">
      <Content1 />
    </div>
  );
}

function NeedsActionAdutisNavigation() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0" data-name="needs action adutis navigation">
      <Button />
      <Button1 />
    </div>
  );
}

function AuditCard() {
  return (
    <div className="bg-[#d49939] h-[170px] relative shrink-0 w-full" data-name="Audit card">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[48px] py-[16px] relative size-full">
          <div className="flex flex-col font-['Quatro:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-nowrap text-white">
            <p className="leading-[32px]">Audit card</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function UpcomingAudits() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[16px] items-start px-[24px] py-[8px] relative rounded-[12px] size-full" data-name="Upcoming audits">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] text-center text-nowrap tracking-[0.15px]">
        <p className="leading-[24px]">Planlagte revisjoner</p>
      </div>
      <NeedsActionAdutisNavigation />
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] text-center text-nowrap tracking-[0.15px]">
        <p className="leading-[24px]">
          <span>{`Idag, `}</span>
          <span className="font-['Manrope:Medium',sans-serif] font-medium">4.mars 2026</span>
        </p>
      </div>
      <AuditCard />
      <AuditCard />
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] text-center text-nowrap tracking-[0.15px]">
        <p className="leading-[24px]">
          24<span className="font-['Manrope:Medium',sans-serif] font-medium">.mars 2026</span>
        </p>
      </div>
      <AuditCard />
      <AuditCard />
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] text-center text-nowrap tracking-[0.15px]">
        <p className="leading-[24px]">
          25<span className="font-['Manrope:Medium',sans-serif] font-medium">.mars 2026</span>
        </p>
      </div>
      <AuditCard />
    </div>
  );
}