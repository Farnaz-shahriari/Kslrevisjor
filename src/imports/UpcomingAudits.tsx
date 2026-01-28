import svgPaths from "./svg-1u2832xnpt";

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

function StateLayer2() {
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
        <StateLayer2 />
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

function StateLayer3() {
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
      <StateLayer3 />
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

function Content2() {
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

function StateLayer4() {
  return (
    <div className="h-[56px] relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[16px] py-0 relative size-full">
          <Content2 />
        </div>
      </div>
    </div>
  );
}

function ListItemListItem4Density() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center min-h-[56px] relative shrink-0 w-[245px]" data-name="List item/List Item: -4 Density">
      <StateLayer4 />
    </div>
  );
}

function Content3() {
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

function StateLayer5() {
  return (
    <div className="h-[56px] relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[16px] py-0 relative size-full">
          <Content3 />
        </div>
      </div>
    </div>
  );
}

function ListItemListItem4Density1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center min-h-[56px] relative shrink-0 w-[245px]" data-name="List item/List Item: -4 Density">
      <StateLayer5 />
    </div>
  );
}

function Content4() {
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

function StateLayer6() {
  return (
    <div className="relative shrink-0 w-full" data-name="state-layer">
      <div className="content-stretch flex gap-[16px] items-start px-[16px] py-[4px] relative w-full">
        <Content4 />
      </div>
    </div>
  );
}

function ListItemListItem4Density2() {
  return (
    <div className="content-stretch flex flex-col items-center min-h-[72px] relative shrink-0 w-[245px]" data-name="List item/List Item: -4 Density">
      <StateLayer6 />
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

function StateLayer7() {
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
        <StateLayer7 />
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

function Content5() {
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

function StateLayer8() {
  return (
    <div className="content-stretch flex gap-[16px] h-[56px] items-center relative shrink-0 w-full" data-name="state-layer">
      <Content5 />
    </div>
  );
}

function ListItemListItem4Density3() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center min-h-[56px] relative shrink-0 w-full" data-name="List item/List Item: -4 Density">
      <StateLayer8 />
    </div>
  );
}

function Content6() {
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

function StateLayer9() {
  return (
    <div className="content-stretch flex gap-[16px] items-start px-0 py-[4px] relative shrink-0 w-full" data-name="state-layer">
      <Content6 />
    </div>
  );
}

function ListItemListItem4Density4() {
  return (
    <div className="content-stretch flex flex-col items-start min-h-[72px] relative shrink-0 w-full" data-name="List item/List Item: -4 Density">
      <StateLayer9 />
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

function NavigateNext2() {
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

function StateLayer10() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center px-[24px] py-[16px] relative shrink-0" data-name="State-layer">
      <NavigateNext2 />
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#4a671e] text-[16px] text-nowrap tracking-[0.15px]">
        <p className="leading-[24px]">Åpne revisjon</p>
      </div>
    </div>
  );
}

function Content7() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0" data-name="Content">
      <StateLayer10 />
    </div>
  );
}

function Button2() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Button">
      <Content7 />
    </div>
  );
}

function Actions() {
  return (
    <div className="content-stretch flex flex-col h-[56px] items-start relative shrink-0 w-[269.333px]" data-name="Actions">
      <Button2 />
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

function Content8() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] tracking-[0.5px] w-full">
        <p className="leading-[24px]">Vis mindre</p>
      </div>
    </div>
  );
}

function StateLayer11() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[16px] items-center justify-center px-[16px] py-[8px] relative size-full">
          <LeadingElement />
          <Content8 />
        </div>
      </div>
    </div>
  );
}

function ListItemListItem0Density() {
  return (
    <div className="content-stretch flex flex-col h-[56px] items-center justify-center min-h-[56px] relative shrink-0 w-[360px]" data-name="List item/List Item: 0 Density">
      <StateLayer11 />
    </div>
  );
}

function RevisjonCardExpanded() {
  return (
    <div className="bg-[#fafaf0] content-stretch flex flex-col gap-[16px] items-start pb-0 pt-[8px] px-[24px] relative rounded-[12px] shrink-0 w-[888px]" data-name="Revisjon Card expanded">
      <div aria-hidden="true" className="absolute border border-[#c4c8b7] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <AuditInformation />
      <ListItemListItem0Density />
    </div>
  );
}

function SelectedIcon1() {
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

function StateLayer12() {
  return (
    <div className="content-stretch flex gap-[8px] h-[32px] items-center justify-center pl-[8px] pr-[16px] py-[6px] relative shrink-0" data-name="state-layer">
      <SelectedIcon1 />
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#174295] text-[14px] text-center text-nowrap tracking-[0.1px]">
        <p className="leading-[20px]">Planlgt dato</p>
      </div>
    </div>
  );
}

function FilterChip3() {
  return (
    <div className="bg-[#dae2ff] content-stretch flex h-[32px] items-center justify-center overflow-clip relative rounded-[8px] shrink-0" data-name="Filter chip">
      <StateLayer12 />
    </div>
  );
}

function InfoChips2() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="info chips">
      <FilterChip3 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start px-0 py-[8px] relative shrink-0">
      <InfoChips2 />
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] text-nowrap tracking-[0.15px]">
        <p className="leading-[24px]">4.mars 2026, kl. 14:00</p>
      </div>
    </div>
  );
}

function RevisjonInfo1() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0 w-[269.333px]" data-name="Revisjon info">
      <Frame />
    </div>
  );
}

function StateLayer13() {
  return (
    <div className="content-stretch flex h-[32px] items-center justify-center px-[16px] py-[6px] relative shrink-0" data-name="state-layer">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#44483b] text-[14px] text-center text-nowrap tracking-[0.1px]">
        <p className="leading-[20px]">Bjørkli Økologiske</p>
      </div>
    </div>
  );
}

function FilterChip4() {
  return (
    <div className="h-[32px] relative rounded-[8px] shrink-0" data-name="Filter chip">
      <div className="content-stretch flex h-full items-center justify-center overflow-clip relative rounded-[inherit]">
        <StateLayer13 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#c4c8b7] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function InfoChips3() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="info chips">
      <FilterChip4 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start px-0 py-[8px] relative shrink-0 w-full">
      <InfoChips3 />
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[24px] min-w-full relative shrink-0 text-[#1a1c16] text-[16px] tracking-[0.15px] w-[min-content]">
        <p className="mb-0">HOLTEVEIEN 138</p>
        <p>4639 Kristiansand s</p>
      </div>
    </div>
  );
}

function ForetakInfo1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[269.333px]" data-name="Foretak info">
      <Frame1 />
    </div>
  );
}

function NavigateNext3() {
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

function StateLayer14() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center px-[24px] py-[16px] relative shrink-0" data-name="State-layer">
      <NavigateNext3 />
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#4a671e] text-[16px] text-nowrap tracking-[0.15px]">
        <p className="leading-[24px]">Åpne revisjon</p>
      </div>
    </div>
  );
}

function Content9() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0" data-name="Content">
      <StateLayer14 />
    </div>
  );
}

function Button3() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Button">
      <Content9 />
    </div>
  );
}

function Actions1() {
  return (
    <div className="content-stretch flex flex-col h-[56px] items-start relative shrink-0 w-[269.333px]" data-name="Actions">
      <Button3 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0">
      <RevisjonInfo1 />
      <ForetakInfo1 />
      <Actions1 />
    </div>
  );
}

function ExpandMore() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="expand_more">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="expand_more">
          <path d={svgPaths.p18b66300} fill="var(--fill-0, #44483B)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function LeadingElement1() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Leading element">
      <ExpandMore />
    </div>
  );
}

function Content10() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] tracking-[0.5px] w-full">
        <p className="leading-[24px]">Vis mer</p>
      </div>
    </div>
  );
}

function StateLayer15() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[16px] items-center justify-center px-[16px] py-[8px] relative size-full">
          <LeadingElement1 />
          <Content10 />
        </div>
      </div>
    </div>
  );
}

function ListItemListItem0Density1() {
  return (
    <div className="content-stretch flex flex-col h-[56px] items-center justify-center min-h-[56px] relative shrink-0 w-[360px]" data-name="List item/List Item: 0 Density">
      <StateLayer15 />
    </div>
  );
}

function RevisjonCard() {
  return (
    <div className="bg-[#fafaf0] content-stretch flex flex-col items-start pb-0 pt-[8px] px-[24px] relative rounded-[12px] shrink-0 w-[888px]" data-name="Revisjon Card">
      <div aria-hidden="true" className="absolute border border-[#c4c8b7] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Frame2 />
      <ListItemListItem0Density1 />
    </div>
  );
}

function StateLayer16() {
  return (
    <div className="content-stretch flex h-[32px] items-center justify-center px-[16px] py-[6px] relative shrink-0" data-name="state-layer">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#410002] text-[14px] text-center text-nowrap tracking-[0.1px]">
        <p className="leading-[20px]">Prioritert</p>
      </div>
    </div>
  );
}

function FilterChip5() {
  return (
    <div className="bg-[#ffdad6] h-[32px] relative rounded-[8px] shrink-0" data-name="Filter chip">
      <div className="content-stretch flex h-full items-center justify-center overflow-clip relative rounded-[inherit]">
        <StateLayer16 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#c4c8b7] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function SelectedIcon2() {
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

function StateLayer17() {
  return (
    <div className="content-stretch flex gap-[8px] h-[32px] items-center justify-center pl-[8px] pr-[16px] py-[6px] relative shrink-0" data-name="state-layer">
      <SelectedIcon2 />
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#174295] text-[14px] text-center text-nowrap tracking-[0.1px]">
        <p className="leading-[20px]">Planlgt dato</p>
      </div>
    </div>
  );
}

function FilterChip6() {
  return (
    <div className="bg-[#dae2ff] content-stretch flex h-[32px] items-center justify-center overflow-clip relative rounded-[8px] shrink-0" data-name="Filter chip">
      <StateLayer17 />
    </div>
  );
}

function InfoChips4() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="info chips">
      <FilterChip5 />
      <FilterChip6 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start px-0 py-[8px] relative shrink-0">
      <InfoChips4 />
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] text-nowrap tracking-[0.15px]">
        <p className="leading-[24px]">24.mars 2026, kl. 10:00</p>
      </div>
    </div>
  );
}

function RevisjonInfo2() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0 w-[269.333px]" data-name="Revisjon info">
      <Frame3 />
    </div>
  );
}

function StateLayer18() {
  return (
    <div className="content-stretch flex h-[32px] items-center justify-center px-[16px] py-[6px] relative shrink-0" data-name="state-layer">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#44483b] text-[12px] text-center text-nowrap tracking-[0.5px]">
        <p className="leading-[16px]">Solvang Gård</p>
      </div>
    </div>
  );
}

function FilterChip7() {
  return (
    <div className="h-[32px] relative rounded-[8px] shrink-0" data-name="Filter chip">
      <div className="content-stretch flex h-full items-center justify-center overflow-clip relative rounded-[inherit]">
        <StateLayer18 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#c4c8b7] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function InfoChips5() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="info chips">
      <FilterChip7 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start px-0 py-[8px] relative shrink-0 w-full">
      <InfoChips5 />
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[24px] min-w-full relative shrink-0 text-[#1a1c16] text-[16px] tracking-[0.15px] w-[min-content]">
        <p className="mb-0">HOLTEVEIEN 138</p>
        <p>4639 Kristiansand s</p>
      </div>
    </div>
  );
}

function ForetakInfo2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[269.333px]" data-name="Foretak info">
      <Frame4 />
    </div>
  );
}

function NavigateNext4() {
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

function StateLayer19() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center px-[24px] py-[16px] relative shrink-0" data-name="State-layer">
      <NavigateNext4 />
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#4a671e] text-[16px] text-nowrap tracking-[0.15px]">
        <p className="leading-[24px]">Åpne revisjon</p>
      </div>
    </div>
  );
}

function Content11() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0" data-name="Content">
      <StateLayer19 />
    </div>
  );
}

function Button4() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Button">
      <Content11 />
    </div>
  );
}

function Actions2() {
  return (
    <div className="content-stretch flex flex-col h-[56px] items-start relative shrink-0 w-[269.333px]" data-name="Actions">
      <Button4 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0">
      <RevisjonInfo2 />
      <ForetakInfo2 />
      <Actions2 />
    </div>
  );
}

function ExpandMore1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="expand_more">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="expand_more">
          <path d={svgPaths.p18b66300} fill="var(--fill-0, #44483B)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function LeadingElement2() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Leading element">
      <ExpandMore1 />
    </div>
  );
}

function Content12() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] tracking-[0.5px] w-full">
        <p className="leading-[24px]">Vis mer</p>
      </div>
    </div>
  );
}

function StateLayer20() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[16px] items-center justify-center px-[16px] py-[8px] relative size-full">
          <LeadingElement2 />
          <Content12 />
        </div>
      </div>
    </div>
  );
}

function ListItemListItem0Density2() {
  return (
    <div className="content-stretch flex flex-col h-[56px] items-center justify-center min-h-[56px] relative shrink-0 w-[360px]" data-name="List item/List Item: 0 Density">
      <StateLayer20 />
    </div>
  );
}

function RevisjonCard1() {
  return (
    <div className="bg-[#fafaf0] content-stretch flex flex-col items-start pb-0 pt-[8px] px-[24px] relative rounded-[12px] shrink-0 w-[888px]" data-name="Revisjon Card">
      <div aria-hidden="true" className="absolute border border-[#c4c8b7] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Frame5 />
      <ListItemListItem0Density2 />
    </div>
  );
}

function StateLayer21() {
  return (
    <div className="content-stretch flex h-[32px] items-center justify-center px-[16px] py-[6px] relative shrink-0" data-name="state-layer">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#410002] text-[14px] text-center text-nowrap tracking-[0.1px]">
        <p className="leading-[20px]">Prioritert</p>
      </div>
    </div>
  );
}

function FilterChip8() {
  return (
    <div className="bg-[#ffdad6] h-[32px] relative rounded-[8px] shrink-0" data-name="Filter chip">
      <div className="content-stretch flex h-full items-center justify-center overflow-clip relative rounded-[inherit]">
        <StateLayer21 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#c4c8b7] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function SelectedIcon3() {
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

function StateLayer22() {
  return (
    <div className="content-stretch flex gap-[8px] h-[32px] items-center justify-center pl-[8px] pr-[16px] py-[6px] relative shrink-0" data-name="state-layer">
      <SelectedIcon3 />
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#174295] text-[14px] text-center text-nowrap tracking-[0.1px]">
        <p className="leading-[20px]">Planlgt dato</p>
      </div>
    </div>
  );
}

function FilterChip9() {
  return (
    <div className="bg-[#dae2ff] content-stretch flex h-[32px] items-center justify-center overflow-clip relative rounded-[8px] shrink-0" data-name="Filter chip">
      <StateLayer22 />
    </div>
  );
}

function InfoChips6() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="info chips">
      <FilterChip8 />
      <FilterChip9 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start px-0 py-[8px] relative shrink-0">
      <InfoChips6 />
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] text-nowrap tracking-[0.15px]">
        <p className="leading-[24px]">25.mars 2026, kl. 10:00</p>
      </div>
    </div>
  );
}

function RevisjonInfo3() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0 w-[269.333px]" data-name="Revisjon info">
      <Frame6 />
    </div>
  );
}

function StateLayer23() {
  return (
    <div className="content-stretch flex h-[32px] items-center justify-center px-[16px] py-[6px] relative shrink-0" data-name="state-layer">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#44483b] text-[12px] text-center text-nowrap tracking-[0.5px]">
        <p className="leading-[16px]">Solvang Gård</p>
      </div>
    </div>
  );
}

function FilterChip10() {
  return (
    <div className="h-[32px] relative rounded-[8px] shrink-0" data-name="Filter chip">
      <div className="content-stretch flex h-full items-center justify-center overflow-clip relative rounded-[inherit]">
        <StateLayer23 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#c4c8b7] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function InfoChips7() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="info chips">
      <FilterChip10 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start px-0 py-[8px] relative shrink-0 w-full">
      <InfoChips7 />
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[24px] min-w-full relative shrink-0 text-[#1a1c16] text-[16px] tracking-[0.15px] w-[min-content]">
        <p className="mb-0">HOLTEVEIEN 138</p>
        <p>4639 Kristiansand s</p>
      </div>
    </div>
  );
}

function ForetakInfo3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[269.333px]" data-name="Foretak info">
      <Frame7 />
    </div>
  );
}

function NavigateNext5() {
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

function StateLayer24() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center px-[24px] py-[16px] relative shrink-0" data-name="State-layer">
      <NavigateNext5 />
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#4a671e] text-[16px] text-nowrap tracking-[0.15px]">
        <p className="leading-[24px]">Åpne revisjon</p>
      </div>
    </div>
  );
}

function Content13() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0" data-name="Content">
      <StateLayer24 />
    </div>
  );
}

function Button5() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Button">
      <Content13 />
    </div>
  );
}

function Actions3() {
  return (
    <div className="content-stretch flex flex-col h-[56px] items-start relative shrink-0 w-[269.333px]" data-name="Actions">
      <Button5 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0">
      <RevisjonInfo3 />
      <ForetakInfo3 />
      <Actions3 />
    </div>
  );
}

function ExpandMore2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="expand_more">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="expand_more">
          <path d={svgPaths.p18b66300} fill="var(--fill-0, #44483B)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function LeadingElement3() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Leading element">
      <ExpandMore2 />
    </div>
  );
}

function Content14() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] tracking-[0.5px] w-full">
        <p className="leading-[24px]">Vis mer</p>
      </div>
    </div>
  );
}

function StateLayer25() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[16px] items-center justify-center px-[16px] py-[8px] relative size-full">
          <LeadingElement3 />
          <Content14 />
        </div>
      </div>
    </div>
  );
}

function ListItemListItem0Density3() {
  return (
    <div className="content-stretch flex flex-col h-[56px] items-center justify-center min-h-[56px] relative shrink-0 w-[360px]" data-name="List item/List Item: 0 Density">
      <StateLayer25 />
    </div>
  );
}

function RevisjonCard2() {
  return (
    <div className="bg-[#fafaf0] content-stretch flex flex-col items-start pb-0 pt-[8px] px-[24px] relative rounded-[12px] shrink-0 w-[888px]" data-name="Revisjon Card">
      <div aria-hidden="true" className="absolute border border-[#c4c8b7] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Frame8 />
      <ListItemListItem0Density3 />
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
      <RevisjonCardExpanded />
      <RevisjonCard />
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] text-center text-nowrap tracking-[0.15px]">
        <p className="leading-[24px]">
          24<span className="font-['Manrope:Medium',sans-serif] font-medium">.mars 2026</span>
        </p>
      </div>
      <RevisjonCard1 />
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] text-center text-nowrap tracking-[0.15px]">
        <p className="leading-[24px]">
          25<span className="font-['Manrope:Medium',sans-serif] font-medium">.mars 2026</span>
        </p>
      </div>
      <RevisjonCard2 />
    </div>
  );
}