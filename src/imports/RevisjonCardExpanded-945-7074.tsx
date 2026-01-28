import svgPaths from "./svg-haruvjz962";

function StateLayer() {
  return (
    <div className="content-stretch flex h-[32px] items-center justify-center px-[16px] py-[6px] relative shrink-0" data-name="state-layer">
      <div className="css-g0mm18 flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#410002] text-[14px] text-center tracking-[0.1px]">
        <p className="css-ew64yg leading-[20px]">Prioritert</p>
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

function StateLayer1() {
  return (
    <div className="content-stretch flex h-[32px] items-center justify-center px-[16px] py-[6px] relative shrink-0" data-name="state-layer">
      <div className="css-g0mm18 flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#3d2c00] text-[14px] text-center tracking-[0.1px]">
        <p className="css-ew64yg leading-[20px]">Oppfølging gyldig KSL</p>
      </div>
    </div>
  );
}

function FilterChip1() {
  return (
    <div className="bg-[#fdeeb1] h-[32px] relative rounded-[8px] shrink-0" data-name="Filter chip">
      <div className="content-stretch flex h-full items-center justify-center overflow-clip relative rounded-[inherit]">
        <StateLayer1 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#c4c8b7] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function InfoChips() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full" data-name="Info chips">
      <FilterChip />
      <FilterChip1 />
    </div>
  );
}

function TopInfo() {
  return (
    <div className="content-stretch flex flex-col items-start py-[8px] relative shrink-0" data-name="top info">
      <div className="css-g0mm18 flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] tracking-[0.15px]">
        <p className="css-ew64yg">
          <span className="leading-[24px]">{`Akseptfrist: `}</span>
          <span className="font-['Manrope:Medium',sans-serif] font-medium leading-[24px]">16.juli 2026</span>
        </p>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center leading-[0] min-h-px min-w-px overflow-clip relative tracking-[0.5px]" data-name="Content">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[#44483b] text-[12px] w-full">
        <p className="css-4hzbpn leading-[16px]">Ordning</p>
      </div>
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#1a1c16] text-[16px] w-full">
        <p className="css-4hzbpn leading-[24px]">KSL</p>
      </div>
    </div>
  );
}

function StateLayer2() {
  return (
    <div className="content-stretch flex gap-[16px] h-[56px] items-center relative shrink-0 w-full" data-name="state-layer">
      <Content />
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
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center leading-[0] min-h-px min-w-px overflow-clip relative tracking-[0.5px]" data-name="Content">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[#44483b] text-[12px] w-full">
        <p className="css-4hzbpn leading-[16px]">Revisjonsfrist</p>
      </div>
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#1a1c16] text-[16px] w-full">
        <p className="css-4hzbpn leading-[24px]">16.juli 2026</p>
      </div>
    </div>
  );
}

function StateLayer3() {
  return (
    <div className="content-stretch flex gap-[16px] h-[56px] items-center relative shrink-0 w-full" data-name="state-layer">
      <Content1 />
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
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px overflow-clip relative tracking-[0.5px]" data-name="Content">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#44483b] text-[12px] w-full">
        <p className="css-4hzbpn leading-[16px]">Produksjon</p>
      </div>
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[24px] relative shrink-0 text-[#1a1c16] text-[16px] w-full">
        <p className="css-4hzbpn mb-0">Sau (11)</p>
        <p className="css-4hzbpn mb-0">Korn, frø, olje- og belgvekster (0)</p>
        <p className="css-4hzbpn mb-0">Grovfôr (114)</p>
        <p className="css-4hzbpn">Storfe (2)</p>
      </div>
    </div>
  );
}

function StateLayer4() {
  return (
    <div className="content-stretch flex gap-[16px] items-start py-[4px] relative shrink-0 w-full" data-name="state-layer">
      <Content2 />
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
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-[280px] relative" data-name="Revisjon info">
      <TopInfo />
      <ListItemListItem4Density />
      <ListItemListItem4Density1 />
      <ListItemListItem4Density2 />
    </div>
  );
}

function ForetakTopInfo() {
  return (
    <div className="content-stretch flex flex-col font-['Manrope:Medium',sans-serif] font-medium gap-[4px] items-start relative shrink-0 text-[#1a1c16] w-full" data-name="Foretak top info">
      <div className="flex flex-col justify-center leading-[0] relative shrink-0 text-[16px] tracking-[0.15px] w-full">
        <p className="css-4hzbpn leading-[24px]">Bjørkli Økologiske</p>
      </div>
      <div className="flex flex-col justify-center leading-[20px] relative shrink-0 text-[14px] tracking-[0.1px] w-full">
        <p className="css-4hzbpn mb-0">HOLTEVEIEN 138</p>
        <p className="css-4hzbpn">4639 Kristiansand s</p>
      </div>
    </div>
  );
}

function TopInfo1() {
  return (
    <div className="content-stretch flex flex-col items-start py-[8px] relative shrink-0 w-full" data-name="Top info">
      <ForetakTopInfo />
    </div>
  );
}

function Content3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center leading-[0] min-h-px min-w-px overflow-clip relative tracking-[0.5px]" data-name="Content">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[#44483b] text-[12px] w-full">
        <p className="css-4hzbpn leading-[16px]">Kommune</p>
      </div>
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#1a1c16] text-[16px] w-full">
        <p className="css-4hzbpn leading-[24px]">Kristiansand</p>
      </div>
    </div>
  );
}

function StateLayer5() {
  return (
    <div className="content-stretch flex gap-[16px] h-[56px] items-center relative shrink-0 w-full" data-name="state-layer">
      <Content3 />
    </div>
  );
}

function ListItemListItem4Density3() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center min-h-[56px] relative shrink-0 w-full" data-name="List item/List Item: -4 Density">
      <StateLayer5 />
    </div>
  );
}

function Content4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px overflow-clip relative tracking-[0.5px]" data-name="Content">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#44483b] text-[12px] w-full">
        <p className="css-4hzbpn leading-[16px]">Adresse</p>
      </div>
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[24px] relative shrink-0 text-[#1a1c16] text-[16px] w-full">
        <p className="css-4hzbpn mb-0">HOLTEVEIEN 138</p>
        <p className="css-4hzbpn">4639 Kristiansand s</p>
      </div>
    </div>
  );
}

function StateLayer6() {
  return (
    <div className="content-stretch flex gap-[16px] items-start py-[4px] relative shrink-0 w-full" data-name="state-layer">
      <Content4 />
    </div>
  );
}

function ListItemListItem4Density4() {
  return (
    <div className="content-stretch flex flex-col items-start min-h-[72px] relative shrink-0 w-full" data-name="List item/List Item: -4 Density">
      <StateLayer6 />
    </div>
  );
}

function ForetakInfo() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-[280px] relative" data-name="Foretak info">
      <TopInfo1 />
      <ListItemListItem4Density3 />
      <ListItemListItem4Density4 />
    </div>
  );
}

function RevisjonInfo1() {
  return (
    <div className="content-start flex flex-wrap gap-[16px] items-start relative shrink-0 w-full" data-name="Revisjon info">
      <RevisjonInfo />
      <ForetakInfo />
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

function Content5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-h-px min-w-px overflow-clip relative" data-name="Content">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] tracking-[0.5px] w-full">
        <p className="css-4hzbpn leading-[24px]">Vis mindre</p>
      </div>
    </div>
  );
}

function StateLayer7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[16px] items-center justify-center min-h-px min-w-px px-[16px] py-[8px] relative w-[360px]" data-name="state-layer">
      <LeadingElement />
      <Content5 />
    </div>
  );
}

function ListItemListItem0Density() {
  return (
    <div className="content-stretch flex flex-col h-[56px] items-center justify-center min-h-[56px] relative shrink-0" data-name="List item/List Item: 0 Density">
      <StateLayer7 />
    </div>
  );
}

function AuditInformation() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-h-px min-w-[280px] relative" data-name="Audit information">
      <RevisjonInfo1 />
      <ListItemListItem0Density />
    </div>
  );
}

function StateLayer8() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center px-[24px] py-[16px] relative shrink-0" data-name="State-layer">
      <div className="css-g0mm18 flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#44483b] text-[16px] tracking-[0.15px]">
        <p className="css-ew64yg leading-[24px]">Aksepter</p>
      </div>
    </div>
  );
}

function Content6() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[100px]" data-name="Content">
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[inherit] w-full">
        <StateLayer8 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#c4c8b7] border-solid inset-0 pointer-events-none rounded-[100px]" />
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Button">
      <Content6 />
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p2edaeb50} fill="var(--fill-0, #4A671E)" id="icon" />
        </g>
      </svg>
    </div>
  );
}

function StateLayer9() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center px-[24px] py-[16px] relative shrink-0" data-name="State-layer">
      <Icon />
      <div className="css-g0mm18 flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#4a671e] text-[16px] tracking-[0.15px]">
        <p className="css-ew64yg leading-[24px]">Avvis</p>
      </div>
    </div>
  );
}

function Content7() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0" data-name="Content">
      <StateLayer9 />
    </div>
  );
}

function Button1() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Button">
      <Content7 />
    </div>
  );
}

function Actions() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-end max-w-[280px] min-h-px min-w-[200px] relative" data-name="Actions">
      <Button />
      <Button1 />
    </div>
  );
}

function AuditInformation1() {
  return (
    <div className="content-start flex flex-wrap gap-[16px] items-start relative shrink-0 w-full" data-name="audit information">
      <AuditInformation />
      <Actions />
    </div>
  );
}

export default function RevisjonCardExpanded() {
  return (
    <div className="bg-[#fafaf0] content-stretch flex flex-col gap-[16px] items-start pt-[8px] px-[24px] relative rounded-[12px] size-full" data-name="Revisjon Card expanded">
      <div aria-hidden="true" className="absolute border border-[#c4c8b7] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <InfoChips />
      <AuditInformation1 />
    </div>
  );
}