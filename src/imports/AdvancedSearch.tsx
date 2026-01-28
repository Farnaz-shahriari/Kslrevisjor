import svgPaths from "./svg-g2i7cfq0od";

function Icon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p38ded900} fill="var(--fill-0, #44483B)" id="icon" />
        </g>
      </svg>
    </div>
  );
}

function StateLayer() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center px-[24px] py-[16px] relative shrink-0" data-name="State-layer">
      <Icon />
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#44483b] text-[16px] text-nowrap tracking-[0.15px]">
        <p className="leading-[24px]">Foretaksliste</p>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="relative rounded-[100px] shrink-0" data-name="Content">
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[inherit]">
        <StateLayer />
      </div>
      <div aria-hidden="true" className="absolute border border-[#c4c8b7] border-solid inset-0 pointer-events-none rounded-[100px]" />
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

function SearchBar() {
  return (
    <div className="content-stretch flex items-center justify-center px-0 py-[16px] relative shrink-0 w-full" data-name="Search Bar">
      <p className="basis-0 font-['Manrope:Medium',sans-serif] font-medium grow leading-[24px] min-h-px min-w-px relative shrink-0 text-[#1a1c16] text-[16px] tracking-[0.15px]">Søk i Avvik</p>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.pc423380} fill="var(--fill-0, #44483B)" id="icon" />
        </g>
      </svg>
    </div>
  );
}

function StateLayer1() {
  return (
    <div className="content-stretch flex items-center justify-center p-[8px] relative shrink-0" data-name="state-layer">
      <Icon1 />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0" data-name="container">
      <StateLayer1 />
    </div>
  );
}

function LeadingIcon() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[48px]" data-name="Leading-icon">
      <Container />
    </div>
  );
}

function Content1() {
  return (
    <div className="basis-0 content-stretch flex grow h-full items-center min-h-px min-w-px relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#44483b] text-[16px] text-nowrap tracking-[0.5px]">
        <p className="leading-[24px]">Find gård, avvikstype, etc.</p>
      </div>
    </div>
  );
}

function TrailingElements() {
  return <div className="content-stretch flex items-center justify-end shrink-0" data-name="Trailing-Elements" />;
}

function StateLayer2() {
  return (
    <div className="content-stretch flex gap-[4px] h-full items-center p-[4px] relative shrink-0 w-[360px]" data-name="state-layer">
      <LeadingIcon />
      <Content1 />
      <TrailingElements />
    </div>
  );
}

function SearchBar1() {
  return (
    <div className="bg-[#e9e9df] content-stretch flex h-[56px] items-center max-w-[720px] min-w-[360px] overflow-clip relative rounded-[28px] shrink-0" data-name="Search bar">
      <StateLayer2 />
    </div>
  );
}

function Search() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Search">
      <SearchBar1 />
    </div>
  );
}

function SearchContainer() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Search Container">
      <SearchBar />
      <Search />
    </div>
  );
}

function AvvikstypeHeader() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-0 py-[8px] relative shrink-0 w-full" data-name="Avvikstype Header">
      <p className="font-['Manrope:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#1a1c16] text-[16px] tracking-[0.15px] w-full">Avvikstype</p>
    </div>
  );
}

function StateLayer3() {
  return (
    <div className="content-stretch flex items-center justify-center p-[11px] relative rounded-[100px] shrink-0" data-name="state-layer">
      <div className="relative rounded-[2px] shrink-0 size-[18px]" data-name="container">
        <div aria-hidden="true" className="absolute border-2 border-[#44483b] border-solid inset-0 pointer-events-none rounded-[2px]" />
      </div>
    </div>
  );
}

function Checkboxes() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center pl-0 pr-[4px] py-[4px] relative shrink-0" data-name="Checkboxes">
      <StateLayer3 />
    </div>
  );
}

function LeadingElement() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Leading element">
      <Checkboxes />
    </div>
  );
}

function Content2() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] tracking-[0.5px] w-full">
        <p className="leading-[24px]">Stort avvik</p>
      </div>
    </div>
  );
}

function StateLayer4() {
  return (
    <div className="h-[56px] relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative size-full">
          <LeadingElement />
          <Content2 />
        </div>
      </div>
    </div>
  );
}

function ListItemListItem0Density() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center min-h-[56px] relative shrink-0 w-full" data-name="List item/List Item: 0 Density">
      <StateLayer4 />
    </div>
  );
}

function StateLayer5() {
  return (
    <div className="content-stretch flex items-center justify-center p-[11px] relative rounded-[100px] shrink-0" data-name="state-layer">
      <div className="relative rounded-[2px] shrink-0 size-[18px]" data-name="container">
        <div aria-hidden="true" className="absolute border-2 border-[#44483b] border-solid inset-0 pointer-events-none rounded-[2px]" />
      </div>
    </div>
  );
}

function Checkboxes1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center pl-0 pr-[4px] py-[4px] relative shrink-0" data-name="Checkboxes">
      <StateLayer5 />
    </div>
  );
}

function LeadingElement1() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Leading element">
      <Checkboxes1 />
    </div>
  );
}

function Content3() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] tracking-[0.5px] w-full">
        <p className="leading-[24px]">Avvik</p>
      </div>
    </div>
  );
}

function StateLayer6() {
  return (
    <div className="h-[56px] relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative size-full">
          <LeadingElement1 />
          <Content3 />
        </div>
      </div>
    </div>
  );
}

function ListItemListItem0Density1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center min-h-[56px] relative shrink-0 w-full" data-name="List item/List Item: 0 Density">
      <StateLayer6 />
    </div>
  );
}

function StateLayer7() {
  return (
    <div className="content-stretch flex items-center justify-center p-[11px] relative rounded-[100px] shrink-0" data-name="state-layer">
      <div className="relative rounded-[2px] shrink-0 size-[18px]" data-name="container">
        <div aria-hidden="true" className="absolute border-2 border-[#44483b] border-solid inset-0 pointer-events-none rounded-[2px]" />
      </div>
    </div>
  );
}

function Checkboxes2() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center pl-0 pr-[4px] py-[4px] relative shrink-0" data-name="Checkboxes">
      <StateLayer7 />
    </div>
  );
}

function LeadingElement2() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Leading element">
      <Checkboxes2 />
    </div>
  );
}

function Content4() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] tracking-[0.5px] w-full">
        <p className="leading-[24px]">Lite avvik</p>
      </div>
    </div>
  );
}

function StateLayer8() {
  return (
    <div className="h-[56px] relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative size-full">
          <LeadingElement2 />
          <Content4 />
        </div>
      </div>
    </div>
  );
}

function ListItemListItem0Density2() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center min-h-[56px] relative shrink-0 w-full" data-name="List item/List Item: 0 Density">
      <StateLayer8 />
    </div>
  );
}

function AvvikstypeList() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Avvikstype List">
      <ListItemListItem0Density />
      <ListItemListItem0Density1 />
      <ListItemListItem0Density2 />
    </div>
  );
}

function AvvikstypeContainer() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Avvikstype Container">
      <AvvikstypeHeader />
      <AvvikstypeList />
    </div>
  );
}

function Divider() {
  return (
    <div className="h-px relative shrink-0 w-full" data-name="Divider">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 360 1.00003">
        <g id="Divider">
          <line id="Divider_2" stroke="var(--stroke-0, #C4C8B7)" x1="4.37114e-08" x2="360" y1="0.500031" y2="0.5" />
        </g>
      </svg>
    </div>
  );
}

function BekreftelsesmateHeader() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-0 py-[8px] relative shrink-0 w-full" data-name="Bekreftelsesmåte Header">
      <p className="font-['Manrope:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#1a1c16] text-[16px] tracking-[0.15px] w-full">Bekreftelsesmåte</p>
    </div>
  );
}

function StateLayer9() {
  return (
    <div className="content-stretch flex items-center justify-center p-[11px] relative rounded-[100px] shrink-0" data-name="state-layer">
      <div className="relative rounded-[2px] shrink-0 size-[18px]" data-name="container">
        <div aria-hidden="true" className="absolute border-2 border-[#44483b] border-solid inset-0 pointer-events-none rounded-[2px]" />
      </div>
    </div>
  );
}

function Checkboxes3() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center pl-0 pr-[4px] py-[4px] relative shrink-0" data-name="Checkboxes">
      <StateLayer9 />
    </div>
  );
}

function LeadingElement3() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Leading element">
      <Checkboxes3 />
    </div>
  );
}

function Content5() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] tracking-[0.5px] w-full">
        <p className="leading-[24px]">Fysisk besøk</p>
      </div>
    </div>
  );
}

function StateLayer10() {
  return (
    <div className="h-[56px] relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative size-full">
          <LeadingElement3 />
          <Content5 />
        </div>
      </div>
    </div>
  );
}

function ListItemListItem0Density3() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center min-h-[56px] relative shrink-0 w-full" data-name="List item/List Item: 0 Density">
      <StateLayer10 />
    </div>
  );
}

function StateLayer11() {
  return (
    <div className="content-stretch flex items-center justify-center p-[11px] relative rounded-[100px] shrink-0" data-name="state-layer">
      <div className="relative rounded-[2px] shrink-0 size-[18px]" data-name="container">
        <div aria-hidden="true" className="absolute border-2 border-[#44483b] border-solid inset-0 pointer-events-none rounded-[2px]" />
      </div>
    </div>
  );
}

function Checkboxes4() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center pl-0 pr-[4px] py-[4px] relative shrink-0" data-name="Checkboxes">
      <StateLayer11 />
    </div>
  );
}

function LeadingElement4() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Leading element">
      <Checkboxes4 />
    </div>
  );
}

function Content6() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] tracking-[0.5px] w-full">
        <p className="leading-[24px]">Digitalt besøk</p>
      </div>
    </div>
  );
}

function StateLayer12() {
  return (
    <div className="h-[56px] relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative size-full">
          <LeadingElement4 />
          <Content6 />
        </div>
      </div>
    </div>
  );
}

function ListItemListItem0Density4() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center min-h-[56px] relative shrink-0 w-full" data-name="List item/List Item: 0 Density">
      <StateLayer12 />
    </div>
  );
}

function StateLayer13() {
  return (
    <div className="content-stretch flex items-center justify-center p-[11px] relative rounded-[100px] shrink-0" data-name="state-layer">
      <div className="relative rounded-[2px] shrink-0 size-[18px]" data-name="container">
        <div aria-hidden="true" className="absolute border-2 border-[#44483b] border-solid inset-0 pointer-events-none rounded-[2px]" />
      </div>
    </div>
  );
}

function Checkboxes5() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center pl-0 pr-[4px] py-[4px] relative shrink-0" data-name="Checkboxes">
      <StateLayer13 />
    </div>
  );
}

function LeadingElement5() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Leading element">
      <Checkboxes5 />
    </div>
  );
}

function Content7() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] tracking-[0.5px] w-full">
        <p className="leading-[24px]">Dokumentasjon</p>
      </div>
    </div>
  );
}

function StateLayer14() {
  return (
    <div className="h-[56px] relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative size-full">
          <LeadingElement5 />
          <Content7 />
        </div>
      </div>
    </div>
  );
}

function ListItemListItem0Density5() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center min-h-[56px] relative shrink-0 w-full" data-name="List item/List Item: 0 Density">
      <StateLayer14 />
    </div>
  );
}

function BekreftelsesmateList() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Bekreftelsesmåte List">
      <ListItemListItem0Density3 />
      <ListItemListItem0Density4 />
      <ListItemListItem0Density5 />
    </div>
  );
}

function BekreftelsesmateContainer() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Bekreftelsesmåte Container">
      <BekreftelsesmateHeader />
      <BekreftelsesmateList />
    </div>
  );
}

function TidsfristHeader() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center px-0 py-[8px] relative shrink-0 w-full" data-name="Tidsfrist Header">
      <p className="font-['Manrope:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#1a1c16] text-[16px] tracking-[0.15px] w-[376px]">Tidsfrist for lukking av avvik</p>
    </div>
  );
}

function Content8() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start justify-center leading-[0] min-h-px min-w-px overflow-clip relative shrink-0 tracking-[0.5px]" data-name="Content">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[#44483b] text-[12px] w-full">
        <p className="leading-[16px]">Fra</p>
      </div>
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#1a1c16] text-[16px] w-full">
        <p className="leading-[24px]">29. Desember 2024</p>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex gap-[16px] items-start p-[8px] relative w-full">
        <Content8 />
      </div>
    </div>
  );
}

function AppUserInput() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center justify-center min-h-[64px] pb-0 pt-[8px] px-0 relative shrink-0 w-full" data-name="App User Input">
      <Frame />
    </div>
  );
}

function Content9() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start justify-center leading-[0] min-h-px min-w-px overflow-clip relative shrink-0 tracking-[0.5px]" data-name="Content">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[#44483b] text-[12px] w-full">
        <p className="leading-[16px]">Til</p>
      </div>
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#1a1c16] text-[16px] w-full">
        <p className="leading-[24px]">29. Desember 2025</p>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex gap-[16px] items-start p-[8px] relative w-full">
        <Content9 />
      </div>
    </div>
  );
}

function AppUserInput1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center justify-center min-h-[64px] pb-0 pt-[8px] px-0 relative shrink-0 w-full" data-name="App User Input">
      <Frame1 />
    </div>
  );
}

function TidsfristContainer() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Tidsfrist Container">
      <TidsfristHeader />
      <AppUserInput />
      <AppUserInput1 />
    </div>
  );
}

function StatusHeader() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-0 py-[8px] relative shrink-0 w-full" data-name="Status Header">
      <p className="font-['Manrope:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#1a1c16] text-[16px] tracking-[0.15px] w-full">Status</p>
    </div>
  );
}

function StateLayer15() {
  return (
    <div className="content-stretch flex items-center justify-center p-[11px] relative rounded-[100px] shrink-0" data-name="state-layer">
      <div className="relative rounded-[2px] shrink-0 size-[18px]" data-name="container">
        <div aria-hidden="true" className="absolute border-2 border-[#44483b] border-solid inset-0 pointer-events-none rounded-[2px]" />
      </div>
    </div>
  );
}

function Checkboxes6() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center pl-0 pr-[4px] py-[4px] relative shrink-0" data-name="Checkboxes">
      <StateLayer15 />
    </div>
  );
}

function LeadingElement6() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Leading element">
      <Checkboxes6 />
    </div>
  );
}

function Content10() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] tracking-[0.5px] w-full">
        <p className="leading-[24px]">Besøk avtalt</p>
      </div>
    </div>
  );
}

function StateLayer16() {
  return (
    <div className="h-[56px] relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative size-full">
          <LeadingElement6 />
          <Content10 />
          <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#44483b] text-[11px] text-nowrap text-right tracking-[0.5px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            3
          </p>
        </div>
      </div>
    </div>
  );
}

function ListItemListItem0Density6() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center min-h-[56px] relative shrink-0 w-full" data-name="List item/List Item: 0 Density">
      <StateLayer16 />
    </div>
  );
}

function StateLayer17() {
  return (
    <div className="content-stretch flex items-center justify-center p-[11px] relative rounded-[100px] shrink-0" data-name="state-layer">
      <div className="relative rounded-[2px] shrink-0 size-[18px]" data-name="container">
        <div aria-hidden="true" className="absolute border-2 border-[#44483b] border-solid inset-0 pointer-events-none rounded-[2px]" />
      </div>
    </div>
  );
}

function Checkboxes7() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center pl-0 pr-[4px] py-[4px] relative shrink-0" data-name="Checkboxes">
      <StateLayer17 />
    </div>
  );
}

function LeadingElement7() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Leading element">
      <Checkboxes7 />
    </div>
  );
}

function Content11() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] tracking-[0.5px] w-full">
        <p className="leading-[24px]">Dokumentasjon mottatt</p>
      </div>
    </div>
  );
}

function StateLayer18() {
  return (
    <div className="h-[56px] relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative size-full">
          <LeadingElement7 />
          <Content11 />
          <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#44483b] text-[11px] text-nowrap text-right tracking-[0.5px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            2
          </p>
        </div>
      </div>
    </div>
  );
}

function ListItemListItem0Density7() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center min-h-[56px] relative shrink-0 w-full" data-name="List item/List Item: 0 Density">
      <StateLayer18 />
    </div>
  );
}

function StateLayer19() {
  return (
    <div className="content-stretch flex items-center justify-center p-[11px] relative rounded-[100px] shrink-0" data-name="state-layer">
      <div className="relative rounded-[2px] shrink-0 size-[18px]" data-name="container">
        <div aria-hidden="true" className="absolute border-2 border-[#44483b] border-solid inset-0 pointer-events-none rounded-[2px]" />
      </div>
    </div>
  );
}

function Checkboxes8() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center pl-0 pr-[4px] py-[4px] relative shrink-0" data-name="Checkboxes">
      <StateLayer19 />
    </div>
  );
}

function LeadingElement8() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Leading element">
      <Checkboxes8 />
    </div>
  );
}

function Content12() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] tracking-[0.5px] w-full">
        <p className="leading-[24px]">Avventer forslag til tidspunkt</p>
      </div>
    </div>
  );
}

function StateLayer20() {
  return (
    <div className="h-[56px] relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative size-full">
          <LeadingElement8 />
          <Content12 />
          <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#44483b] text-[11px] text-nowrap text-right tracking-[0.5px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            8
          </p>
        </div>
      </div>
    </div>
  );
}

function ListItemListItem0Density8() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center min-h-[56px] relative shrink-0 w-full" data-name="List item/List Item: 0 Density">
      <StateLayer20 />
    </div>
  );
}

function StateLayer21() {
  return (
    <div className="content-stretch flex items-center justify-center p-[11px] relative rounded-[100px] shrink-0" data-name="state-layer">
      <div className="relative rounded-[2px] shrink-0 size-[18px]" data-name="container">
        <div aria-hidden="true" className="absolute border-2 border-[#44483b] border-solid inset-0 pointer-events-none rounded-[2px]" />
      </div>
    </div>
  );
}

function Checkboxes9() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center pl-0 pr-[4px] py-[4px] relative shrink-0" data-name="Checkboxes">
      <StateLayer21 />
    </div>
  );
}

function LeadingElement9() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Leading element">
      <Checkboxes9 />
    </div>
  );
}

function Content13() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] tracking-[0.5px] w-full">
        <p className="leading-[24px]">Avventer dokumentasjon</p>
      </div>
    </div>
  );
}

function StateLayer22() {
  return (
    <div className="h-[56px] relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative size-full">
          <LeadingElement9 />
          <Content13 />
          <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#44483b] text-[11px] text-nowrap text-right tracking-[0.5px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            5
          </p>
        </div>
      </div>
    </div>
  );
}

function ListItemListItem0Density9() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center min-h-[56px] relative shrink-0 w-full" data-name="List item/List Item: 0 Density">
      <StateLayer22 />
    </div>
  );
}

function StatusList() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Status List">
      <ListItemListItem0Density6 />
      <ListItemListItem0Density7 />
      <ListItemListItem0Density8 />
      <ListItemListItem0Density9 />
    </div>
  );
}

function StatusContainer() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Status Container">
      <StatusHeader />
      <StatusList />
    </div>
  );
}

function ForetakHeader() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-0 py-[8px] relative shrink-0 w-full" data-name="Foretak Header">
      <p className="font-['Manrope:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#1a1c16] text-[16px] tracking-[0.15px] w-full">Foretak</p>
    </div>
  );
}

function StateLayer23() {
  return (
    <div className="content-stretch flex items-center justify-center p-[11px] relative rounded-[100px] shrink-0" data-name="state-layer">
      <div className="relative rounded-[2px] shrink-0 size-[18px]" data-name="container">
        <div aria-hidden="true" className="absolute border-2 border-[#44483b] border-solid inset-0 pointer-events-none rounded-[2px]" />
      </div>
    </div>
  );
}

function Checkboxes10() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center pl-0 pr-[4px] py-[4px] relative shrink-0" data-name="Checkboxes">
      <StateLayer23 />
    </div>
  );
}

function LeadingElement10() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Leading element">
      <Checkboxes10 />
    </div>
  );
}

function Content14() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] tracking-[0.5px] w-full">
        <p className="leading-[24px]">Bjørkli Økologiske</p>
      </div>
    </div>
  );
}

function StateLayer24() {
  return (
    <div className="h-[56px] relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative size-full">
          <LeadingElement10 />
          <Content14 />
        </div>
      </div>
    </div>
  );
}

function ListItemListItem0Density10() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center min-h-[56px] relative shrink-0 w-full" data-name="List item/List Item: 0 Density">
      <StateLayer24 />
    </div>
  );
}

function StateLayer25() {
  return (
    <div className="content-stretch flex items-center justify-center p-[11px] relative rounded-[100px] shrink-0" data-name="state-layer">
      <div className="relative rounded-[2px] shrink-0 size-[18px]" data-name="container">
        <div aria-hidden="true" className="absolute border-2 border-[#44483b] border-solid inset-0 pointer-events-none rounded-[2px]" />
      </div>
    </div>
  );
}

function Checkboxes11() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center pl-0 pr-[4px] py-[4px] relative shrink-0" data-name="Checkboxes">
      <StateLayer25 />
    </div>
  );
}

function LeadingElement11() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Leading element">
      <Checkboxes11 />
    </div>
  );
}

function Content15() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] tracking-[0.5px] w-full">
        <p className="leading-[24px]">Fjellstad Bruk</p>
      </div>
    </div>
  );
}

function StateLayer26() {
  return (
    <div className="h-[56px] relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative size-full">
          <LeadingElement11 />
          <Content15 />
        </div>
      </div>
    </div>
  );
}

function ListItemListItem0Density11() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center min-h-[56px] relative shrink-0 w-full" data-name="List item/List Item: 0 Density">
      <StateLayer26 />
    </div>
  );
}

function StateLayer27() {
  return (
    <div className="content-stretch flex items-center justify-center p-[11px] relative rounded-[100px] shrink-0" data-name="state-layer">
      <div className="relative rounded-[2px] shrink-0 size-[18px]" data-name="container">
        <div aria-hidden="true" className="absolute border-2 border-[#44483b] border-solid inset-0 pointer-events-none rounded-[2px]" />
      </div>
    </div>
  );
}

function Checkboxes12() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center pl-0 pr-[4px] py-[4px] relative shrink-0" data-name="Checkboxes">
      <StateLayer27 />
    </div>
  );
}

function LeadingElement12() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Leading element">
      <Checkboxes12 />
    </div>
  );
}

function Content16() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] tracking-[0.5px] w-full">
        <p className="leading-[24px]">Solheim Gård</p>
      </div>
    </div>
  );
}

function StateLayer28() {
  return (
    <div className="h-[56px] relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative size-full">
          <LeadingElement12 />
          <Content16 />
        </div>
      </div>
    </div>
  );
}

function ListItemListItem0Density12() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center min-h-[56px] relative shrink-0 w-full" data-name="List item/List Item: 0 Density">
      <StateLayer28 />
    </div>
  );
}

function StateLayer29() {
  return (
    <div className="content-stretch flex items-center justify-center p-[11px] relative rounded-[100px] shrink-0" data-name="state-layer">
      <div className="relative rounded-[2px] shrink-0 size-[18px]" data-name="container">
        <div aria-hidden="true" className="absolute border-2 border-[#44483b] border-solid inset-0 pointer-events-none rounded-[2px]" />
      </div>
    </div>
  );
}

function Checkboxes13() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center pl-0 pr-[4px] py-[4px] relative shrink-0" data-name="Checkboxes">
      <StateLayer29 />
    </div>
  );
}

function LeadingElement13() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Leading element">
      <Checkboxes13 />
    </div>
  );
}

function Content17() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] tracking-[0.5px] w-full">
        <p className="leading-[24px]">Lien Gård</p>
      </div>
    </div>
  );
}

function StateLayer30() {
  return (
    <div className="h-[56px] relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative size-full">
          <LeadingElement13 />
          <Content17 />
        </div>
      </div>
    </div>
  );
}

function ListItemListItem0Density13() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center min-h-[56px] relative shrink-0 w-full" data-name="List item/List Item: 0 Density">
      <StateLayer30 />
    </div>
  );
}

function ForetakList() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Foretak List">
      <ListItemListItem0Density10 />
      <ListItemListItem0Density11 />
      <ListItemListItem0Density12 />
      <ListItemListItem0Density13 />
    </div>
  );
}

function ForetakContainer() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Foretak Container">
      <ForetakHeader />
      <ForetakList />
    </div>
  );
}

export default function AdvancedSearch() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start p-[16px] relative size-full" data-name="Advanced search">
      <div aria-hidden="true" className="absolute border-[#c4c8b7] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <Button />
      <SearchContainer />
      <AvvikstypeContainer />
      <Divider />
      <BekreftelsesmateContainer />
      <Divider />
      <TidsfristContainer />
      <Divider />
      <StatusContainer />
      <Divider />
      <ForetakContainer />
    </div>
  );
}