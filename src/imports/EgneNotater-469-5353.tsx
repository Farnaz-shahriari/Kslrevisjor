import svgPaths from "./svg-8a6ssefiu5";

function Add() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="add">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="add">
          <path d={svgPaths.p2a6e0600} fill="var(--fill-0, white)" id="icon" />
        </g>
      </svg>
    </div>
  );
}

function StateLayer() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center px-[24px] py-[16px] relative shrink-0" data-name="State-layer">
      <Add />
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[16px] text-nowrap text-white tracking-[0.15px]">
        <p className="leading-[24px]">Legg til nytt notat</p>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="bg-[#4a671e] content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0" data-name="Content">
      <StateLayer />
    </div>
  );
}

function NewNoteButton() {
  return (
    <div className="content-stretch flex h-[56px] items-center relative shrink-0" data-name="new note Button">
      <Content />
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p2edaeb50} fill="var(--fill-0, #44483B)" id="icon" />
        </g>
      </svg>
    </div>
  );
}

function StateLayer1() {
  return (
    <div className="content-stretch flex h-[56px] items-center justify-center relative shrink-0 w-full" data-name="State-layer">
      <Icon />
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[100px] shrink-0 w-[56px]" data-name="Content">
      <StateLayer1 />
    </div>
  );
}

function TrailingIcon() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="trailing-icon 3">
      <Content1 />
    </div>
  );
}

function SearchAndFilterContainer() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Search and filter container">
      <NewNoteButton />
      <TrailingIcon />
    </div>
  );
}

function AddNewNoteButton() {
  return (
    <div className="relative shrink-0 w-full" data-name="Add new note button">
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start px-[24px] py-[16px] relative w-full">
          <SearchAndFilterContainer />
        </div>
      </div>
    </div>
  );
}

function Divider() {
  return (
    <div className="h-px relative shrink-0 w-full" data-name="Divider">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 352 1.00003">
        <g id="Divider">
          <line id="Divider_2" stroke="var(--stroke-0, #C4C8B7)" x1="4.37114e-08" x2="352" y1="0.500031" y2="0.5" />
        </g>
      </svg>
    </div>
  );
}

function Search() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="search">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="search">
          <path d={svgPaths.p378bce80} fill="var(--fill-0, #4A671E)" id="icon" />
        </g>
      </svg>
    </div>
  );
}

function StateLayer2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center px-[12px] py-[6px] relative shrink-0" data-name="State-layer">
      <Search />
      <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#4a671e] text-[14px] text-nowrap tracking-[0.1px]">
        <p className="leading-[20px]">Søk i notater</p>
      </div>
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0" data-name="Content">
      <StateLayer2 />
    </div>
  );
}

function TrailingIcon1() {
  return (
    <div className="content-stretch flex h-[56px] items-center justify-center relative shrink-0" data-name="trailing-icon 4">
      <Content2 />
    </div>
  );
}

function FilterList() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="filter_list">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="filter_list">
          <path d={svgPaths.p306ba380} fill="var(--fill-0, #44483B)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function StateLayer3() {
  return (
    <div className="content-stretch flex h-[56px] items-center justify-center relative shrink-0 w-full" data-name="State-layer">
      <FilterList />
    </div>
  );
}

function Content3() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[100px] shrink-0 w-[56px]" data-name="Content">
      <StateLayer3 />
    </div>
  );
}

function TrailingIcon2() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="trailing-icon 5">
      <Content3 />
    </div>
  );
}

function Header() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Header">
      <TrailingIcon1 />
      <TrailingIcon2 />
    </div>
  );
}

function StickyNote() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="sticky_note_2">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="sticky_note_2">
          <path d={svgPaths.p9e88080} fill="var(--fill-0, #44483B)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function LeadingElement() {
  return (
    <div className="content-stretch flex h-[64px] items-start relative shrink-0" data-name="Leading element">
      <StickyNote />
    </div>
  );
}

function Content4() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start leading-[0] min-h-px min-w-px overflow-clip relative shrink-0 tracking-[0.5px]" data-name="Content">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center overflow-ellipsis overflow-hidden relative shrink-0 text-[#44483b] text-[12px] text-nowrap w-full">
        <p className="leading-[16px] overflow-ellipsis overflow-hidden">{`1.1.1  Har du oversikt over alle driftsmidler du har kjøpt, og alle produkter du har solgt?`}</p>
      </div>
      <div className="-webkit-box flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center overflow-ellipsis overflow-hidden relative shrink-0 text-[#1a1c16] text-[16px] w-full">
        <p className="leading-[24px]">Har du oversikt over alle driftsmidler du har kjøpt, og alle produkter du har solgt?</p>
      </div>
    </div>
  );
}

function StateLayer4() {
  return (
    <div className="relative shrink-0 w-full" data-name="state-layer">
      <div className="size-full">
        <div className="content-stretch flex gap-[16px] items-start px-[16px] py-[12px] relative w-full">
          <LeadingElement />
          <Content4 />
        </div>
      </div>
    </div>
  );
}

function ListItemListItem0Density() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center min-h-[88px] relative rounded-[12px] shrink-0 w-full" data-name="List item/List Item: 0 Density">
      <div aria-hidden="true" className="absolute border border-[#c4c8b7] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <StateLayer4 />
    </div>
  );
}

function StickyNote1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="sticky_note_2">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="sticky_note_2">
          <path d={svgPaths.p9e88080} fill="var(--fill-0, #44483B)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function LeadingElement1() {
  return (
    <div className="content-stretch flex h-[64px] items-start relative shrink-0" data-name="Leading element">
      <StickyNote1 />
    </div>
  );
}

function Content5() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="-webkit-box flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] overflow-ellipsis overflow-hidden relative shrink-0 text-[#1a1c16] text-[16px] tracking-[0.5px] w-full">
        <p className="leading-[24px]">Har du oversikt over alle driftsmidler du har kjøpt, og alle produkter du har solgt?</p>
      </div>
    </div>
  );
}

function StateLayer5() {
  return (
    <div className="relative shrink-0 w-full" data-name="state-layer">
      <div className="size-full">
        <div className="content-stretch flex gap-[16px] items-start px-[16px] py-[12px] relative w-full">
          <LeadingElement1 />
          <Content5 />
        </div>
      </div>
    </div>
  );
}

function ListItemListItem0Density1() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center min-h-[88px] relative rounded-[12px] shrink-0 w-full" data-name="List item/List Item: 0 Density">
      <div aria-hidden="true" className="absolute border border-[#c4c8b7] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <StateLayer5 />
    </div>
  );
}

function ReportProblem() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="report_problem">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="report_problem">
          <path d={svgPaths.p24139a00} fill="var(--fill-0, #BA1A1A)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function LeadingElement2() {
  return (
    <div className="content-stretch flex h-[64px] items-start relative shrink-0" data-name="Leading element">
      <ReportProblem />
    </div>
  );
}

function Content6() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start leading-[0] min-h-px min-w-px overflow-clip relative shrink-0 tracking-[0.5px]" data-name="Content">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center overflow-ellipsis overflow-hidden relative shrink-0 text-[#44483b] text-[12px] text-nowrap w-full">
        <p className="leading-[16px] overflow-ellipsis overflow-hidden">{`1.1.1  Har du oversikt over alle driftsmidler du har kjøpt, og alle produkter du har solgt?`}</p>
      </div>
      <div className="-webkit-box flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center overflow-ellipsis overflow-hidden relative shrink-0 text-[#1a1c16] text-[16px] w-full">
        <p className="leading-[24px]">Har du oversikt over alle driftsmidler du har kjøpt, og alle produkter du har solgt?</p>
      </div>
    </div>
  );
}

function StateLayer6() {
  return (
    <div className="relative shrink-0 w-full" data-name="state-layer">
      <div className="size-full">
        <div className="content-stretch flex gap-[16px] items-start px-[16px] py-[12px] relative w-full">
          <LeadingElement2 />
          <Content6 />
        </div>
      </div>
    </div>
  );
}

function ListItemListItem0Density2() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center min-h-[88px] relative rounded-[12px] shrink-0 w-full" data-name="List item/List Item: 0 Density">
      <div aria-hidden="true" className="absolute border border-[#c4c8b7] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <StateLayer6 />
    </div>
  );
}

function ReportProblem1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="report_problem">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="report_problem">
          <path d={svgPaths.p24139a00} fill="var(--fill-0, #705400)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function LeadingElement3() {
  return (
    <div className="content-stretch flex h-[64px] items-start relative shrink-0" data-name="Leading element">
      <ReportProblem1 />
    </div>
  );
}

function Content7() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="-webkit-box flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] overflow-ellipsis overflow-hidden relative shrink-0 text-[#1a1c16] text-[16px] tracking-[0.5px] w-full">
        <p className="leading-[24px]">Har du oversikt over alle driftsmidler du har kjøpt, og alle produkter du har solgt?</p>
      </div>
    </div>
  );
}

function StateLayer7() {
  return (
    <div className="relative shrink-0 w-full" data-name="state-layer">
      <div className="size-full">
        <div className="content-stretch flex gap-[16px] items-start px-[16px] py-[12px] relative w-full">
          <LeadingElement3 />
          <Content7 />
        </div>
      </div>
    </div>
  );
}

function ListItemListItem0Density3() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center min-h-[88px] relative rounded-[12px] shrink-0 w-full" data-name="List item/List Item: 0 Density">
      <div aria-hidden="true" className="absolute border border-[#c4c8b7] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <StateLayer7 />
    </div>
  );
}

function AlleNotater() {
  return (
    <div className="relative shrink-0 w-full" data-name="alle notater">
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start pb-[40px] pt-0 px-[24px] relative w-full">
          <Divider />
          <Header />
          <ListItemListItem0Density />
          <ListItemListItem0Density1 />
          <ListItemListItem0Density2 />
          <ListItemListItem0Density3 />
          <ListItemListItem0Density />
          <ListItemListItem0Density />
        </div>
      </div>
    </div>
  );
}

export default function EgneNotater() {
  return (
    <div className="bg-[#eeeee4] content-stretch flex flex-col gap-[8px] items-start relative size-full" data-name="Egne notater">
      <div aria-hidden="true" className="absolute border-[#c4c8b7] border-[0px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <AddNewNoteButton />
      <AlleNotater />
    </div>
  );
}