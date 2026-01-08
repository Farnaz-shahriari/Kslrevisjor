import svgPaths from "./svg-wft2f3vder";

function ArrowBack() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="arrow_back">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="arrow_back">
          <path d={svgPaths.p38ded900} fill="var(--fill-0, #4A671E)" id="icon" />
        </g>
      </svg>
    </div>
  );
}

function StateLayer() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center px-[24px] py-[16px] relative shrink-0" data-name="State-layer">
      <ArrowBack />
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#4a671e] text-[16px] text-nowrap tracking-[0.15px]">
        <p className="leading-[24px]">Alle notater</p>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0" data-name="Content">
      <StateLayer />
    </div>
  );
}

function SearchButton() {
  return (
    <div className="content-stretch flex h-[56px] items-center relative shrink-0" data-name="Search Button">
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

function IconButton() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Icon button">
      <Content1 />
    </div>
  );
}

function Navigation() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Navigation">
      <SearchButton />
      <IconButton />
    </div>
  );
}

function HeaderTextContainer() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Header Text Container">
      <div className="flex flex-col font-['Quatro:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1a1c16] text-[22px] text-nowrap">
        <p className="leading-[28px]">Nytt notat</p>
      </div>
    </div>
  );
}

function HeaderContent() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start justify-center min-h-px min-w-px relative shrink-0" data-name="Header Content">
      <HeaderTextContainer />
    </div>
  );
}

function StateLayer2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[10px] relative shrink-0" data-name="State-layer">
      <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[14px] text-nowrap text-white tracking-[0.1px]">
        <p className="leading-[20px]">Ferdig</p>
      </div>
    </div>
  );
}

function Content2() {
  return (
    <div className="basis-0 bg-[#4a671e] content-stretch flex flex-col grow items-center justify-center min-h-px min-w-px overflow-clip relative rounded-[100px] shrink-0" data-name="Content">
      <StateLayer2 />
    </div>
  );
}

function NewNoteButton() {
  return (
    <div className="basis-0 content-stretch flex grow h-[48px] items-center min-h-px min-w-px relative shrink-0" data-name="new note Button">
      <Content2 />
    </div>
  );
}

function HeaderContainer() {
  return (
    <div className="basis-0 content-stretch flex gap-[16px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Header Container">
      <HeaderContent />
      <NewNoteButton />
    </div>
  );
}

function HeaderContainer1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Header Container">
      <HeaderContainer />
    </div>
  );
}

export default function Header() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative size-full" data-name="Header">
      <Navigation />
      <HeaderContainer1 />
    </div>
  );
}