import svgPaths from "./svg-es1yhnytnq";

function StateLayer() {
  return (
    <div className="content-stretch flex h-[32px] items-center justify-center px-[16px] py-[6px] relative shrink-0" data-name="state-layer">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#410002] text-[14px] text-center text-nowrap tracking-[0.1px]">
        <p className="leading-[20px]">Prioritert</p>
      </div>
    </div>
  );
}

function FilterChip() {
  return (
    <div className="bg-[#ffdad6] h-[32px] relative rounded-[8px] shrink-0" data-name="Filter chip">
      <div className="content-stretch flex h-full items-center justify-center overflow-clip relative rounded-[inherit]">
        <StateLayer />
      </div>
      <div aria-hidden="true" className="absolute border border-[#c4c8b7] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function SelectedIcon() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Selected icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Selected icon">
          <path d={svgPaths.p35211d80} fill="var(--fill-0, #174295)" id="icon" />
        </g>
      </svg>
    </div>
  );
}

function StateLayer1() {
  return (
    <div className="content-stretch flex gap-[8px] h-[32px] items-center justify-center pl-[8px] pr-[16px] py-[6px] relative shrink-0" data-name="state-layer">
      <SelectedIcon />
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#174295] text-[14px] text-center text-nowrap tracking-[0.1px]">
        <p className="leading-[20px]">Planlgt dato</p>
      </div>
    </div>
  );
}

function FilterChip1() {
  return (
    <div className="bg-[#dae2ff] content-stretch flex h-[32px] items-center justify-center overflow-clip relative rounded-[8px] shrink-0" data-name="Filter chip">
      <StateLayer1 />
    </div>
  );
}

function InfoChips() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="info chips">
      <FilterChip />
      <FilterChip1 />
    </div>
  );
}

function TopInfo() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start px-0 py-[8px] relative shrink-0" data-name="top info">
      <InfoChips />
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] text-nowrap tracking-[0.15px]">
        <p className="leading-[24px]">4.mars 2026, kl. 14:00</p>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center leading-[0] min-h-px min-w-px overflow-clip relative shrink-0 tracking-[0.5px]" data-name="Content">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[#44483b] text-[12px] w-full">
        <p className="leading-[16px]">Ordning</p>
      </div>
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#1a1c16] text-[16px] w-full">
        <p className="leading-[24px]">KSL</p>
      </div>
    </div>
  );
}

function StateLayer2() {
  return (
    <div className="h-[56px] relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[16px] py-0 relative size-full">
          <Content />
        </div>
      </div>
    </div>
  );
}

function ListItemListItem4Density() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center min-h-[56px] relative shrink-0 w-[245px]" data-name="List item/List Item: -4 Density">
      <StateLayer2 />
    </div>
  );
}

function Content1() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center leading-[0] min-h-px min-w-px overflow-clip relative shrink-0 tracking-[0.5px]" data-name="Content">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[#44483b] text-[12px] w-full">
        <p className="leading-[16px]">Revisjonsfrist</p>
      </div>
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#1a1c16] text-[16px] w-full">
        <p className="leading-[24px]">16.juli 2026</p>
      </div>
    </div>
  );
}

function StateLayer3() {
  return (
    <div className="h-[56px] relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[16px] py-0 relative size-full">
          <Content1 />
        </div>
      </div>
    </div>
  );
}

function ListItemListItem4Density1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center min-h-[56px] relative shrink-0 w-[245px]" data-name="List item/List Item: -4 Density">
      <StateLayer3 />
    </div>
  );
}

function Content2() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start leading-[0] min-h-px min-w-px overflow-clip relative shrink-0 tracking-[0.5px]" data-name="Content">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[#44483b] text-[12px] w-full">
        <p className="leading-[16px]">Produksjon</p>
      </div>
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[24px] relative shrink-0 text-[#1a1c16] text-[16px] w-full">
        <p className="mb-0">Sau (11)</p>
        <p className="mb-0">Korn, frø, olje- og belgvekster (0)</p>
        <p className="mb-0">Grovfôr (114)</p>
        <p>Storfe (2)</p>
      </div>
    </div>
  );
}

function StateLayer4() {
  return (
    <div className="relative shrink-0 w-full" data-name="state-layer">
      <div className="content-stretch flex gap-[16px] items-start px-[16px] py-[4px] relative w-full">
        <Content2 />
      </div>
    </div>
  );
}

function ListItemListItem4Density2() {
  return (
    <div className="content-stretch flex flex-col items-center min-h-[72px] relative shrink-0 w-[245px]" data-name="List item/List Item: -4 Density">
      <StateLayer4 />
    </div>
  );
}

function RevisjonInfo() {
  return (
    <div className="content-stretch flex flex-col h-[348px] items-start relative shrink-0 w-[269.333px]" data-name="Revisjon info">
      <TopInfo />
      <ListItemListItem4Density />
      <ListItemListItem4Density1 />
      <ListItemListItem4Density2 />
    </div>
  );
}

function StateLayer5() {
  return (
    <div className="content-stretch flex h-[32px] items-center justify-center px-[16px] py-[6px] relative shrink-0" data-name="state-layer">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#44483b] text-[14px] text-center text-nowrap tracking-[0.1px]">
        <p className="leading-[20px]">Bjørkli Økologiske</p>
      </div>
    </div>
  );
}

function FilterChip2() {
  return (
    <div className="h-[32px] relative rounded-[8px] shrink-0" data-name="Filter chip">
      <div className="content-stretch flex h-full items-center justify-center overflow-clip relative rounded-[inherit]">
        <StateLayer5 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#c4c8b7] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function InfoChips1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="info chips">
      <FilterChip2 />
    </div>
  );
}

function TopInfo1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start px-0 py-[8px] relative shrink-0 w-full" data-name="Top info">
      <InfoChips1 />
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[24px] min-w-full relative shrink-0 text-[#1a1c16] text-[16px] tracking-[0.15px] w-[min-content]">
        <p className="mb-0">HOLTEVEIEN 138</p>
        <p>4639 Kristiansand s</p>
      </div>
    </div>
  );
}

function Content3() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center leading-[0] min-h-px min-w-px overflow-clip relative shrink-0 tracking-[0.5px]" data-name="Content">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[#44483b] text-[12px] w-full">
        <p className="leading-[16px]">Kommune</p>
      </div>
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#1a1c16] text-[16px] w-full">
        <p className="leading-[24px]">Kristiansand</p>
      </div>
    </div>
  );
}

function StateLayer6() {
  return (
    <div className="content-stretch flex gap-[16px] h-[56px] items-center relative shrink-0 w-full" data-name="state-layer">
      <Content3 />
    </div>
  );
}

function ListItemListItem4Density3() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center min-h-[56px] relative shrink-0 w-full" data-name="List item/List Item: -4 Density">
      <StateLayer6 />
    </div>
  );
}

function Content4() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start leading-[0] min-h-px min-w-px overflow-clip relative shrink-0 tracking-[0.5px]" data-name="Content">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[#44483b] text-[12px] w-full">
        <p className="leading-[16px]">Adresse</p>
      </div>
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[24px] relative shrink-0 text-[#1a1c16] text-[16px] w-full">
        <p className="mb-0">HOLTEVEIEN 138</p>
        <p>4639 Kristiansand s</p>
      </div>
    </div>
  );
}

function StateLayer7() {
  return (
    <div className="content-stretch flex gap-[16px] items-start px-0 py-[4px] relative shrink-0 w-full" data-name="state-layer">
      <Content4 />
    </div>
  );
}

function ListItemListItem4Density4() {
  return (
    <div className="content-stretch flex flex-col items-start min-h-[72px] relative shrink-0 w-full" data-name="List item/List Item: -4 Density">
      <StateLayer7 />
    </div>
  );
}

function ForetakInfo() {
  return (
    <div className="content-stretch flex flex-col h-[304px] items-start relative shrink-0 w-[269.333px]" data-name="Foretak info">
      <TopInfo1 />
      <ListItemListItem4Density3 />
      <ListItemListItem4Density4 />
    </div>
  );
}

function NavigateNext() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="navigate_next">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="navigate_next">
          <path d={svgPaths.pa1eb970} fill="var(--fill-0, #4A671E)" id="icon" />
        </g>
      </svg>
    </div>
  );
}

function StateLayer8() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center px-[24px] py-[16px] relative shrink-0" data-name="State-layer">
      <NavigateNext />
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#4a671e] text-[16px] text-nowrap tracking-[0.15px]">
        <p className="leading-[24px]">Åpne revisjon</p>
      </div>
    </div>
  );
}

function Content5() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0" data-name="Content">
      <StateLayer8 />
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Button">
      <Content5 />
    </div>
  );
}

function Actions() {
  return (
    <div className="content-stretch flex flex-col h-[56px] items-start relative shrink-0 w-[269.333px]" data-name="Actions">
      <Button />
    </div>
  );
}

function AuditInformation() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0" data-name="audit information">
      <RevisjonInfo />
      <ForetakInfo />
      <Actions />
    </div>
  );
}

function ExpandLess() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="expand_less">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="expand_less">
          <path d={svgPaths.p2b8d2f00} fill="var(--fill-0, #44483B)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function LeadingElement() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Leading element">
      <ExpandLess />
    </div>
  );
}

function Content6() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] tracking-[0.5px] w-full">
        <p className="leading-[24px]">Vis mindre</p>
      </div>
    </div>
  );
}

function StateLayer9() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[16px] items-center justify-center px-[16px] py-[8px] relative size-full">
          <LeadingElement />
          <Content6 />
        </div>
      </div>
    </div>
  );
}

function ListItemListItem0Density() {
  return (
    <div className="content-stretch flex flex-col h-[56px] items-center justify-center min-h-[56px] relative shrink-0 w-[360px]" data-name="List item/List Item: 0 Density">
      <StateLayer9 />
    </div>
  );
}

export default function RevisjonCardExpanded() {
  return (
    <div className="bg-[#fafaf0] content-stretch flex flex-col gap-[16px] items-start pb-0 pt-[8px] px-[24px] relative rounded-[12px] size-full" data-name="Revisjon Card expanded">
      <div aria-hidden="true" className="absolute border border-[#c4c8b7] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <AuditInformation />
      <ListItemListItem0Density />
    </div>
  );
}