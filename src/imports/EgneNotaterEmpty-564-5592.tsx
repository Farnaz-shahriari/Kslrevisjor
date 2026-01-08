import svgPaths from "./svg-rr8mylgdu8";

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

function StateLayer() {
  return (
    <div className="content-stretch flex h-[56px] items-center justify-center relative shrink-0 w-full" data-name="State-layer">
      <Icon />
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[100px] shrink-0 w-[56px]" data-name="Content">
      <StateLayer />
    </div>
  );
}

function TrailingIcon() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="trailing-icon 3">
      <Content />
    </div>
  );
}

function SearchAndFilterContainer() {
  return (
    <div className="content-stretch flex items-start justify-end relative shrink-0 w-full" data-name="Search and filter container">
      <TrailingIcon />
    </div>
  );
}

function AddNewNoteButton() {
  return (
    <div className="relative shrink-0 w-full" data-name="Add new note button">
      <div className="content-stretch flex flex-col items-start px-[24px] py-[16px] relative w-full">
        <SearchAndFilterContainer />
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute h-[201.049px] left-1/2 top-[calc(50%-0.48px)] translate-x-[-50%] translate-y-[-50%] w-[280px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 280 201.049">
        <g id="Group 6">
          <path d={svgPaths.pf0a4c00} fill="var(--fill-0, #E3E3D9)" id="Vector" />
          <path d={svgPaths.p31814680} fill="var(--fill-0, #C4C8B7)" id="Vector_2" />
          <path d={svgPaths.p38d88880} fill="var(--fill-0, #E0E4D3)" id="Vector_3" />
          <path d={svgPaths.p193f9400} fill="var(--fill-0, #C4C8B7)" id="Vector_4" />
          <path d={svgPaths.p31ab6c0} fill="var(--fill-0, #E0E4D3)" id="Vector_5" />
          <path d={svgPaths.p15fc57f0} fill="var(--fill-0, #C4C8B7)" id="Vector_6" />
          <path d={svgPaths.p1e226600} fill="var(--fill-0, #C4C8B7)" id="Vector_7" />
          <path d={svgPaths.pfc66e00} fill="var(--fill-0, #C4C8B7)" id="Vector_8" />
          <path d={svgPaths.p35be0d00} fill="var(--fill-0, #C4C8B7)" id="Vector_9" />
          <path d={svgPaths.pc564400} fill="var(--fill-0, #C4C8B7)" id="Vector_10" />
          <path d={svgPaths.pe268e00} fill="var(--fill-0, #C4C8B7)" id="Vector_11" />
          <path d={svgPaths.p3b0d8370} fill="var(--fill-0, #284000)" id="Vector_12" />
        </g>
      </svg>
    </div>
  );
}

function Note() {
  return (
    <div className="h-[200px] overflow-clip relative shrink-0 w-[280px]" data-name="Note">
      <Group />
    </div>
  );
}

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

function StateLayer1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center px-[24px] py-[16px] relative shrink-0" data-name="State-layer">
      <Add />
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[16px] text-nowrap text-white tracking-[0.15px]">
        <p className="leading-[24px]">Legg til nytt notat</p>
      </div>
    </div>
  );
}

function Content1() {
  return (
    <div className="bg-[#4a671e] content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0" data-name="Content">
      <StateLayer1 />
    </div>
  );
}

function NewNoteButton() {
  return (
    <div className="content-stretch flex h-[56px] items-center relative shrink-0" data-name="new note Button">
      <Content1 />
    </div>
  );
}

function NoteDetails() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-full" data-name="Note details">
      <div className="flex flex-col font-['Quatro:Regular',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#1a1c16] text-[22px] text-center w-[min-content]">
        <p className="leading-[28px]">Legg til privat notat</p>
      </div>
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full relative shrink-0 text-[#1a1c16] text-[16px] text-center tracking-[0.5px] w-[min-content]">
        <p className="leading-[24px]">Ikke delt med foretaket</p>
      </div>
      <NewNoteButton />
    </div>
  );
}

function AlleNotater() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="alle notater">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[32px] items-center justify-center pb-[40px] pt-0 px-[24px] relative size-full">
          <Note />
          <NoteDetails />
        </div>
      </div>
    </div>
  );
}

export default function EgneNotaterEmpty() {
  return (
    <div className="bg-[#eeeee4] content-stretch flex flex-col gap-[8px] items-start relative size-full" data-name="Egne notater- empty">
      <div aria-hidden="true" className="absolute border-[#c4c8b7] border-[0px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <AddNewNoteButton />
      <AlleNotater />
    </div>
  );
}