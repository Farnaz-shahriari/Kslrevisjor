import svgPaths from "./svg-lvuy16bas2";

function Icon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.pc87b500} fill="var(--fill-0, #44483B)" id="icon" />
        </g>
      </svg>
    </div>
  );
}

function StateLayer() {
  return (
    <div className="content-stretch flex items-center justify-center p-[8px] relative shrink-0" data-name="state-layer">
      <Icon />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0" data-name="container">
      <StateLayer />
    </div>
  );
}

function IconButton() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[48px]" data-name="Icon button">
      <Container />
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="icon">
          <path d={svgPaths.p1e934100} fill="var(--fill-0, #44483B)" id="icon_2" />
        </g>
      </svg>
    </div>
  );
}

function StateLayer1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center overflow-clip pl-[8px] pr-[4px] py-[10px] relative rounded-[100px] shrink-0" data-name="state-layer">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#44483b] text-[14px] text-center text-nowrap tracking-[0.1px]">
        <p className="leading-[20px]">Aug</p>
      </div>
      <Icon1 />
    </div>
  );
}

function BuildingBlocksMenuButton() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name=".Building Blocks/Menu button">
      <StateLayer1 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.pa1eb970} fill="var(--fill-0, #44483B)" id="icon" />
        </g>
      </svg>
    </div>
  );
}

function StateLayer2() {
  return (
    <div className="content-stretch flex items-center justify-center p-[8px] relative shrink-0" data-name="state-layer">
      <Icon2 />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0" data-name="container">
      <StateLayer2 />
    </div>
  );
}

function IconButton1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[48px]" data-name="Icon button">
      <Container1 />
    </div>
  );
}

function MonthDropDown() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Month drop down">
      <IconButton />
      <BuildingBlocksMenuButton />
      <IconButton1 />
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.pc87b500} fill="var(--fill-0, #44483B)" id="icon" />
        </g>
      </svg>
    </div>
  );
}

function StateLayer3() {
  return (
    <div className="content-stretch flex items-center justify-center p-[8px] relative shrink-0" data-name="state-layer">
      <Icon3 />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0" data-name="container">
      <StateLayer3 />
    </div>
  );
}

function IconButton2() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[48px]" data-name="Icon button">
      <Container2 />
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="icon">
          <path d={svgPaths.p1e934100} fill="var(--fill-0, #44483B)" id="icon_2" />
        </g>
      </svg>
    </div>
  );
}

function StateLayer4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center overflow-clip pl-[8px] pr-[4px] py-[10px] relative rounded-[100px] shrink-0" data-name="state-layer">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#44483b] text-[14px] text-center text-nowrap tracking-[0.1px]">
        <p className="leading-[20px]">2023</p>
      </div>
      <Icon4 />
    </div>
  );
}

function BuildingBlocksMenuButton1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name=".Building Blocks/Menu button">
      <StateLayer4 />
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.pa1eb970} fill="var(--fill-0, #44483B)" id="icon" />
        </g>
      </svg>
    </div>
  );
}

function StateLayer5() {
  return (
    <div className="content-stretch flex items-center justify-center p-[8px] relative shrink-0" data-name="state-layer">
      <Icon5 />
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0" data-name="container">
      <StateLayer5 />
    </div>
  );
}

function IconButton3() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[48px]" data-name="Icon button">
      <Container3 />
    </div>
  );
}

function YearDropDown() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Year drop down">
      <IconButton2 />
      <BuildingBlocksMenuButton1 />
      <IconButton3 />
    </div>
  );
}

function SelectionRow() {
  return (
    <div className="content-stretch flex h-[64px] items-center justify-between relative shrink-0 w-full" data-name="Selection Row">
      <MonthDropDown />
      <YearDropDown />
    </div>
  );
}

function Sunday() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[100px] shrink-0 size-[48px]" data-name="Sunday">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] text-center text-nowrap tracking-[0.5px]">
        <p className="leading-[24px]">S</p>
      </div>
    </div>
  );
}

function Monday() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[100px] shrink-0 size-[48px]" data-name="Monday">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] text-center text-nowrap tracking-[0.5px]">
        <p className="leading-[24px]">M</p>
      </div>
    </div>
  );
}

function Tuesday() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[100px] shrink-0 size-[48px]" data-name="Tuesday">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] text-center text-nowrap tracking-[0.5px]">
        <p className="leading-[24px]">T</p>
      </div>
    </div>
  );
}

function Wednesday() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[100px] shrink-0 size-[48px]" data-name="Wednesday">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] text-center text-nowrap tracking-[0.5px]">
        <p className="leading-[24px]">W</p>
      </div>
    </div>
  );
}

function Thursday() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[100px] shrink-0 size-[48px]" data-name="Thursday">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] text-center text-nowrap tracking-[0.5px]">
        <p className="leading-[24px]">T</p>
      </div>
    </div>
  );
}

function Friday() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[100px] shrink-0 size-[48px]" data-name="Friday">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] text-center text-nowrap tracking-[0.5px]">
        <p className="leading-[24px]">F</p>
      </div>
    </div>
  );
}

function Saturday() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[100px] shrink-0 size-[48px]" data-name="Saturday">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] text-center text-nowrap tracking-[0.5px]">
        <p className="leading-[24px]">S</p>
      </div>
    </div>
  );
}

function DaysOfTheWeek() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0 w-full" data-name="Days of the week">
      <Sunday />
      <Monday />
      <Tuesday />
      <Wednesday />
      <Thursday />
      <Friday />
      <Saturday />
    </div>
  );
}

function StateLayer6() {
  return (
    <div className="content-stretch flex items-center justify-center p-[10px] relative shrink-0 size-[40px]" data-name="state-layer">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] opacity-[0.38] relative shrink-0 text-[#44483b] text-[16px] text-center text-nowrap tracking-[0.5px]">
        <p className="leading-[24px]">26</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[40px]" data-name="container">
      <StateLayer6 />
    </div>
  );
}

function Sunday1() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[48px]" data-name="Sunday">
      <Container4 />
    </div>
  );
}

function StateLayer7() {
  return (
    <div className="content-stretch flex items-center justify-center p-[10px] relative shrink-0 size-[40px]" data-name="state-layer">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] opacity-[0.38] relative shrink-0 text-[#44483b] text-[16px] text-center text-nowrap tracking-[0.5px]">
        <p className="leading-[24px]">27</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[40px]" data-name="container">
      <StateLayer7 />
    </div>
  );
}

function Monday1() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[48px]" data-name="Monday">
      <Container5 />
    </div>
  );
}

function StateLayer8() {
  return (
    <div className="content-stretch flex items-center justify-center p-[10px] relative shrink-0 size-[40px]" data-name="state-layer">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] opacity-[0.38] relative shrink-0 text-[#44483b] text-[16px] text-center text-nowrap tracking-[0.5px]">
        <p className="leading-[24px]">28</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[40px]" data-name="container">
      <StateLayer8 />
    </div>
  );
}

function Tuesday1() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[48px]" data-name="Tuesday">
      <Container6 />
    </div>
  );
}

function StateLayer9() {
  return (
    <div className="content-stretch flex items-center justify-center p-[10px] relative shrink-0 size-[40px]" data-name="state-layer">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] opacity-[0.38] relative shrink-0 text-[#44483b] text-[16px] text-center text-nowrap tracking-[0.5px]">
        <p className="leading-[24px]">29</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[40px]" data-name="container">
      <StateLayer9 />
    </div>
  );
}

function Wednesday1() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[48px]" data-name="Wednesday">
      <Container7 />
    </div>
  );
}

function StateLayer10() {
  return (
    <div className="content-stretch flex items-center justify-center p-[10px] relative shrink-0 size-[40px]" data-name="state-layer">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] opacity-[0.38] relative shrink-0 text-[#44483b] text-[16px] text-center text-nowrap tracking-[0.5px]">
        <p className="leading-[24px]">30</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[40px]" data-name="container">
      <StateLayer10 />
    </div>
  );
}

function Thursday1() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[48px]" data-name="Thursday">
      <Container8 />
    </div>
  );
}

function StateLayer11() {
  return (
    <div className="content-stretch flex items-center justify-center p-[10px] relative shrink-0 size-[40px]" data-name="state-layer">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] opacity-[0.38] relative shrink-0 text-[#44483b] text-[16px] text-center text-nowrap tracking-[0.5px]">
        <p className="leading-[24px]">31</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[40px]" data-name="container">
      <StateLayer11 />
    </div>
  );
}

function Friday1() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[48px]" data-name="Friday">
      <Container9 />
    </div>
  );
}

function StateLayer12() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[40px]" data-name="state-layer">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] text-center text-nowrap tracking-[0.5px]">
        <p className="leading-[24px]">1</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0 size-[40px]" data-name="container">
      <StateLayer12 />
    </div>
  );
}

function Saturday1() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[48px]" data-name="Saturday">
      <Container10 />
    </div>
  );
}

function Week() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Week 1">
      <Sunday1 />
      <Monday1 />
      <Tuesday1 />
      <Wednesday1 />
      <Thursday1 />
      <Friday1 />
      <Saturday1 />
    </div>
  );
}

function StateLayer13() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[40px]" data-name="state-layer">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] text-center text-nowrap tracking-[0.5px]">
        <p className="leading-[24px]">2</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0 size-[40px]" data-name="container">
      <StateLayer13 />
    </div>
  );
}

function Sunday2() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[48px]" data-name="Sunday">
      <Container11 />
    </div>
  );
}

function StateLayer14() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[40px]" data-name="state-layer">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] text-center text-nowrap tracking-[0.5px]">
        <p className="leading-[24px]">3</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0 size-[40px]" data-name="container">
      <StateLayer14 />
    </div>
  );
}

function Monday2() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[48px]" data-name="Monday">
      <Container12 />
    </div>
  );
}

function StateLayer15() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[40px]" data-name="state-layer">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] text-center text-nowrap tracking-[0.5px]">
        <p className="leading-[24px]">4</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0 size-[40px]" data-name="container">
      <StateLayer15 />
    </div>
  );
}

function Tuesday2() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[48px]" data-name="Tuesday">
      <Container13 />
    </div>
  );
}

function StateLayer16() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[40px]" data-name="state-layer">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] text-center text-nowrap tracking-[0.5px]">
        <p className="leading-[24px]">5</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0 size-[40px]" data-name="container">
      <StateLayer16 />
    </div>
  );
}

function Wednesday2() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[48px]" data-name="Wednesday">
      <Container14 />
    </div>
  );
}

function StateLayer17() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[40px]" data-name="state-layer">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] text-center text-nowrap tracking-[0.5px]">
        <p className="leading-[24px]">6</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0 size-[40px]" data-name="container">
      <StateLayer17 />
    </div>
  );
}

function Thursday2() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[48px]" data-name="Thursday">
      <Container15 />
    </div>
  );
}

function StateLayer18() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[40px]" data-name="state-layer">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] text-center text-nowrap tracking-[0.5px]">
        <p className="leading-[24px]">7</p>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0 size-[40px]" data-name="container">
      <StateLayer18 />
    </div>
  );
}

function Friday2() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[48px]" data-name="Friday">
      <Container16 />
    </div>
  );
}

function StateLayer19() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[40px]" data-name="state-layer">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] text-center text-nowrap tracking-[0.5px]">
        <p className="leading-[24px]">8</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0 size-[40px]" data-name="container">
      <StateLayer19 />
    </div>
  );
}

function Saturday2() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[48px]" data-name="Saturday">
      <Container17 />
    </div>
  );
}

function Week1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Week 6">
      <Sunday2 />
      <Monday2 />
      <Tuesday2 />
      <Wednesday2 />
      <Thursday2 />
      <Friday2 />
      <Saturday2 />
    </div>
  );
}

function StateLayer20() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[40px]" data-name="state-layer">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] text-center text-nowrap tracking-[0.5px]">
        <p className="leading-[24px]">9</p>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0 size-[40px]" data-name="container">
      <StateLayer20 />
    </div>
  );
}

function Sunday3() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[48px]" data-name="Sunday">
      <Container18 />
    </div>
  );
}

function StateLayer21() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[40px]" data-name="state-layer">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] text-center text-nowrap tracking-[0.5px]">
        <p className="leading-[24px]">10</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0 size-[40px]" data-name="container">
      <StateLayer21 />
    </div>
  );
}

function Monday3() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[48px]" data-name="Monday">
      <Container19 />
    </div>
  );
}

function StateLayer22() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[40px]" data-name="state-layer">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] text-center text-nowrap tracking-[0.5px]">
        <p className="leading-[24px]">11</p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0 size-[40px]" data-name="container">
      <StateLayer22 />
    </div>
  );
}

function Tuesday3() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[48px]" data-name="Tuesday">
      <Container20 />
    </div>
  );
}

function StateLayer23() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[40px]" data-name="state-layer">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] text-center text-nowrap tracking-[0.5px]">
        <p className="leading-[24px]">12</p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0 size-[40px]" data-name="container">
      <StateLayer23 />
    </div>
  );
}

function Wednesday3() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[48px]" data-name="Wednesday">
      <Container21 />
    </div>
  );
}

function StateLayer24() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[40px]" data-name="state-layer">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] text-center text-nowrap tracking-[0.5px]">
        <p className="leading-[24px]">13</p>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0 size-[40px]" data-name="container">
      <StateLayer24 />
    </div>
  );
}

function Thursday3() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[48px]" data-name="Thursday">
      <Container22 />
    </div>
  );
}

function StateLayer25() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[40px]" data-name="state-layer">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] text-center text-nowrap tracking-[0.5px]">
        <p className="leading-[24px]">14</p>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0 size-[40px]" data-name="container">
      <StateLayer25 />
    </div>
  );
}

function Friday3() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[48px]" data-name="Friday">
      <Container23 />
    </div>
  );
}

function StateLayer26() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[40px]" data-name="state-layer">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] text-center text-nowrap tracking-[0.5px]">
        <p className="leading-[24px]">15</p>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0 size-[40px]" data-name="container">
      <StateLayer26 />
    </div>
  );
}

function Saturday3() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[48px]" data-name="Saturday">
      <Container24 />
    </div>
  );
}

function Week2() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Week 7">
      <Sunday3 />
      <Monday3 />
      <Tuesday3 />
      <Wednesday3 />
      <Thursday3 />
      <Friday3 />
      <Saturday3 />
    </div>
  );
}

function StateLayer27() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[40px]" data-name="state-layer">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] text-center text-nowrap tracking-[0.5px]">
        <p className="leading-[24px]">16</p>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0 size-[40px]" data-name="container">
      <StateLayer27 />
    </div>
  );
}

function Sunday4() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[48px]" data-name="Sunday">
      <Container25 />
    </div>
  );
}

function StateLayer28() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[40px]" data-name="state-layer">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[16px] text-center text-nowrap text-white tracking-[0.5px]">
        <p className="leading-[24px]">17</p>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="bg-[#4a671e] content-stretch flex items-start overflow-clip relative rounded-[100px] shrink-0 size-[40px]" data-name="container">
      <StateLayer28 />
    </div>
  );
}

function Monday4() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-center justify-center relative shrink-0 size-[48px]" data-name="Monday">
      <Container26 />
    </div>
  );
}

function StateLayer29() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[40px]" data-name="state-layer">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] text-center text-nowrap tracking-[0.5px]">
        <p className="leading-[24px]">18</p>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0 size-[40px]" data-name="container">
      <StateLayer29 />
    </div>
  );
}

function Tuesday4() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[48px]" data-name="Tuesday">
      <Container27 />
    </div>
  );
}

function StateLayer30() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[40px]" data-name="state-layer">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] text-center text-nowrap tracking-[0.5px]">
        <p className="leading-[24px]">19</p>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0 size-[40px]" data-name="container">
      <StateLayer30 />
    </div>
  );
}

function Wednesday4() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[48px]" data-name="Wednesday">
      <Container28 />
    </div>
  );
}

function StateLayer31() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[40px]" data-name="state-layer">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] text-center text-nowrap tracking-[0.5px]">
        <p className="leading-[24px]">20</p>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0 size-[40px]" data-name="container">
      <StateLayer31 />
    </div>
  );
}

function Thursday4() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[48px]" data-name="Thursday">
      <Container29 />
    </div>
  );
}

function StateLayer32() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[40px]" data-name="state-layer">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] text-center text-nowrap tracking-[0.5px]">
        <p className="leading-[24px]">21</p>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0 size-[40px]" data-name="container">
      <StateLayer32 />
    </div>
  );
}

function Friday4() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[48px]" data-name="Friday">
      <Container30 />
    </div>
  );
}

function StateLayer33() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[40px]" data-name="state-layer">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] text-center text-nowrap tracking-[0.5px]">
        <p className="leading-[24px]">22</p>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0 size-[40px]" data-name="container">
      <StateLayer33 />
    </div>
  );
}

function Saturday4() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[48px]" data-name="Saturday">
      <Container31 />
    </div>
  );
}

function Week3() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Week 8">
      <Sunday4 />
      <Monday4 />
      <Tuesday4 />
      <Wednesday4 />
      <Thursday4 />
      <Friday4 />
      <Saturday4 />
    </div>
  );
}

function StateLayer34() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[40px]" data-name="state-layer">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] text-center text-nowrap tracking-[0.5px]">
        <p className="leading-[24px]">23</p>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0 size-[40px]" data-name="container">
      <StateLayer34 />
    </div>
  );
}

function Sunday5() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[48px]" data-name="Sunday">
      <Container32 />
    </div>
  );
}

function StateLayer35() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[40px]" data-name="state-layer">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] text-center text-nowrap tracking-[0.5px]">
        <p className="leading-[24px]">24</p>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0 size-[40px]" data-name="container">
      <StateLayer35 />
    </div>
  );
}

function Monday5() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[48px]" data-name="Monday">
      <Container33 />
    </div>
  );
}

function StateLayer36() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[40px]" data-name="state-layer">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] text-center text-nowrap tracking-[0.5px]">
        <p className="leading-[24px]">25</p>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0 size-[40px]" data-name="container">
      <StateLayer36 />
    </div>
  );
}

function Tuesday5() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[48px]" data-name="Tuesday">
      <Container34 />
    </div>
  );
}

function StateLayer37() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[40px]" data-name="state-layer">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] text-center text-nowrap tracking-[0.5px]">
        <p className="leading-[24px]">26</p>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0 size-[40px]" data-name="container">
      <StateLayer37 />
    </div>
  );
}

function Wednesday5() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[48px]" data-name="Wednesday">
      <Container35 />
    </div>
  );
}

function StateLayer38() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[40px]" data-name="state-layer">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] text-center text-nowrap tracking-[0.5px]">
        <p className="leading-[24px]">27</p>
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0 size-[40px]" data-name="container">
      <StateLayer38 />
    </div>
  );
}

function Thursday5() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[48px]" data-name="Thursday">
      <Container36 />
    </div>
  );
}

function StateLayer39() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[40px]" data-name="state-layer">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] text-center text-nowrap tracking-[0.5px]">
        <p className="leading-[24px]">28</p>
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0 size-[40px]" data-name="container">
      <StateLayer39 />
    </div>
  );
}

function Friday5() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[48px]" data-name="Friday">
      <Container37 />
    </div>
  );
}

function StateLayer40() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[40px]" data-name="state-layer">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] text-center text-nowrap tracking-[0.5px]">
        <p className="leading-[24px]">29</p>
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0 size-[40px]" data-name="container">
      <StateLayer40 />
    </div>
  );
}

function Saturday5() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[48px]" data-name="Saturday">
      <Container38 />
    </div>
  );
}

function Week4() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Week 9">
      <Sunday5 />
      <Monday5 />
      <Tuesday5 />
      <Wednesday5 />
      <Thursday5 />
      <Friday5 />
      <Saturday5 />
    </div>
  );
}

function StateLayer41() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[40px]" data-name="state-layer">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] text-center text-nowrap tracking-[0.5px]">
        <p className="leading-[24px]">30</p>
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0 size-[40px]" data-name="container">
      <StateLayer41 />
    </div>
  );
}

function Sunday6() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[48px]" data-name="Sunday">
      <Container39 />
    </div>
  );
}

function StateLayer42() {
  return (
    <div className="content-stretch flex items-center justify-center p-[10px] relative shrink-0 size-[40px]" data-name="state-layer">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] opacity-[0.38] relative shrink-0 text-[#44483b] text-[16px] text-center text-nowrap tracking-[0.5px]">
        <p className="leading-[24px]">1</p>
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[40px]" data-name="container">
      <StateLayer42 />
    </div>
  );
}

function Monday6() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[48px]" data-name="Monday">
      <Container40 />
    </div>
  );
}

function StateLayer43() {
  return (
    <div className="content-stretch flex items-center justify-center p-[10px] relative shrink-0 size-[40px]" data-name="state-layer">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] opacity-[0.38] relative shrink-0 text-[#44483b] text-[16px] text-center text-nowrap tracking-[0.5px]">
        <p className="leading-[24px]">2</p>
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[40px]" data-name="container">
      <StateLayer43 />
    </div>
  );
}

function Tuesday6() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[48px]" data-name="Tuesday">
      <Container41 />
    </div>
  );
}

function StateLayer44() {
  return (
    <div className="content-stretch flex items-center justify-center p-[10px] relative shrink-0 size-[40px]" data-name="state-layer">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] opacity-[0.38] relative shrink-0 text-[#44483b] text-[16px] text-center text-nowrap tracking-[0.5px]">
        <p className="leading-[24px]">3</p>
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[40px]" data-name="container">
      <StateLayer44 />
    </div>
  );
}

function Wednesday6() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[48px]" data-name="Wednesday">
      <Container42 />
    </div>
  );
}

function StateLayer45() {
  return (
    <div className="content-stretch flex items-center justify-center p-[10px] relative shrink-0 size-[40px]" data-name="state-layer">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] opacity-[0.38] relative shrink-0 text-[#44483b] text-[16px] text-center text-nowrap tracking-[0.5px]">
        <p className="leading-[24px]">4</p>
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[40px]" data-name="container">
      <StateLayer45 />
    </div>
  );
}

function Thursday6() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[48px]" data-name="Thursday">
      <Container43 />
    </div>
  );
}

function StateLayer46() {
  return (
    <div className="content-stretch flex items-center justify-center p-[10px] relative shrink-0 size-[40px]" data-name="state-layer">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] opacity-[0.38] relative shrink-0 text-[#44483b] text-[16px] text-center text-nowrap tracking-[0.5px]">
        <p className="leading-[24px]">5</p>
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[40px]" data-name="container">
      <StateLayer46 />
    </div>
  );
}

function Friday6() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[48px]" data-name="Friday">
      <Container44 />
    </div>
  );
}

function StateLayer47() {
  return (
    <div className="content-stretch flex items-center justify-center p-[10px] relative shrink-0 size-[40px]" data-name="state-layer">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] opacity-[0.38] relative shrink-0 text-[#44483b] text-[16px] text-center text-nowrap tracking-[0.5px]">
        <p className="leading-[24px]">6</p>
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[40px]" data-name="container">
      <StateLayer47 />
    </div>
  );
}

function Saturday6() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[48px]" data-name="Saturday">
      <Container45 />
    </div>
  );
}

function Week5() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Week 10">
      <Sunday6 />
      <Monday6 />
      <Tuesday6 />
      <Wednesday6 />
      <Thursday6 />
      <Friday6 />
      <Saturday6 />
    </div>
  );
}

function CalendarGrid() {
  return (
    <div className="content-stretch flex flex-col items-end pb-[4px] pt-0 px-[12px] relative shrink-0" data-name="Calendar grid">
      <DaysOfTheWeek />
      <Week />
      <Week1 />
      <Week2 />
      <Week3 />
      <Week4 />
      <Week5 />
    </div>
  );
}

function StateLayer48() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[12px] py-[10px] relative size-full">
          <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#4a671e] text-[14px] text-center text-nowrap tracking-[0.1px]">
            <p className="leading-[20px]">Clear</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ClearButton() {
  return (
    <div className="content-stretch flex flex-col h-[40px] items-center justify-center overflow-clip relative rounded-[100px] shrink-0" data-name="Clear button">
      <StateLayer48 />
    </div>
  );
}

function StateLayer49() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[12px] py-[10px] relative size-full">
          <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#4a671e] text-[14px] text-center text-nowrap tracking-[0.1px]">
            <p className="leading-[20px]">Cancel</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function SecondaryButton() {
  return (
    <div className="content-stretch flex flex-col h-[40px] items-center justify-center overflow-clip relative rounded-[100px] shrink-0" data-name="Secondary button">
      <StateLayer49 />
    </div>
  );
}

function StateLayer50() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[12px] py-[10px] relative size-full">
          <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#4a671e] text-[14px] text-center text-nowrap tracking-[0.1px]">
            <p className="leading-[20px]">OK</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function PrimaryButton() {
  return (
    <div className="content-stretch flex flex-col h-[40px] items-center justify-center overflow-clip relative rounded-[100px] shrink-0" data-name="Primary button">
      <StateLayer50 />
    </div>
  );
}

function ButtonContainer() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-end justify-end min-h-px min-w-px relative shrink-0" data-name="Button container">
      <SecondaryButton />
      <PrimaryButton />
    </div>
  );
}

function LocalActions() {
  return (
    <div className="relative shrink-0 w-full" data-name="Local Actions">
      <div className="content-stretch flex items-start justify-between px-[12px] py-[8px] relative w-full">
        <ClearButton />
        <ButtonContainer />
      </div>
    </div>
  );
}

function DatePicker() {
  return (
    <div className="absolute bg-[#e9e9df] content-stretch flex flex-col items-start left-0 overflow-clip rounded-[16px] top-[91px]" data-name="Date Picker">
      <SelectionRow />
      <CalendarGrid />
      <LocalActions />
    </div>
  );
}

function InputTextContainer() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Input text container">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] text-nowrap tracking-[0.5px]">
        <p className="leading-[24px]">08/17/2023</p>
      </div>
    </div>
  );
}

function LabelTextContainer() {
  return (
    <div className="absolute bg-white content-stretch flex items-center left-[-4px] px-[4px] py-0 top-[-12px]" data-name="Label text container">
      <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#4a671e] text-[12px] text-nowrap tracking-[0.4px]">Date</p>
    </div>
  );
}

function Content() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-[48px] items-start justify-center min-h-px min-w-px px-0 py-[4px] relative shrink-0" data-name="Content">
      <InputTextContainer />
      <LabelTextContainer />
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p13a8df70} fill="var(--fill-0, #44483B)" id="icon" />
        </g>
      </svg>
    </div>
  );
}

function StateLayer51() {
  return (
    <div className="bg-[rgba(68,72,59,0.12)] content-stretch flex items-center justify-center p-[8px] relative shrink-0" data-name="state-layer">
      <Icon6 />
    </div>
  );
}

function Container46() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0" data-name="container">
      <StateLayer51 />
    </div>
  );
}

function TrailingIcon() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[48px]" data-name="trailing-icon">
      <Container46 />
    </div>
  );
}

function StateLayer52() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="State-layer">
      <div className="content-stretch flex items-start pl-[16px] pr-0 py-[4px] relative size-full">
        <Content />
        <TrailingIcon />
      </div>
    </div>
  );
}

function TextField() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative rounded-[4px] shrink-0 w-full" data-name="Text field">
      <div aria-hidden="true" className="absolute border-[#4a671e] border-[3px] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <StateLayer52 />
    </div>
  );
}

function SupportingText() {
  return (
    <div className="absolute bottom-[-20px] content-stretch flex h-[20px] items-start left-0 pb-0 pt-[4px] px-[16px] right-0" data-name="Supporting text">
      <p className="basis-0 font-['Manrope:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#44483b] text-[12px] tracking-[0.4px]">MM/DD/YYYY</p>
    </div>
  );
}

function TextField1() {
  return (
    <div className="absolute content-stretch flex flex-col h-[56px] items-start left-0 rounded-tl-[4px] rounded-tr-[4px] top-[8px] w-[312px]" data-name="Text field">
      <TextField />
      <SupportingText />
    </div>
  );
}

export default function DockedInputDatePickerDesktop() {
  return (
    <div className="relative size-full" data-name="Docked input date picker [desktop]">
      <DatePicker />
      <TextField1 />
    </div>
  );
}