import svgPaths from "./svg-k4dn6w9byv";

function TabContents() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center justify-center min-h-px min-w-px relative shrink-0" data-name="Tab Contents">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#44483b] text-[14px] text-center text-nowrap tracking-[0.1px]">
        <p className="leading-[20px]">Kompetanse</p>
      </div>
    </div>
  );
}

function StateLayer() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="State-layer">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[16px] py-[14px] relative size-full">
          <TabContents />
        </div>
      </div>
    </div>
  );
}

function Tab() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[48px] items-center justify-end overflow-clip relative shrink-0" data-name="Tab 1">
      <StateLayer />
    </div>
  );
}

function TabContents1() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center justify-center min-h-px min-w-px relative shrink-0" data-name="Tab Contents">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#44483b] text-[14px] text-center text-nowrap tracking-[0.1px]">
        <p className="leading-[20px]">Kurs</p>
      </div>
    </div>
  );
}

function StateLayer1() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-center justify-center min-h-px min-w-px overflow-clip px-[16px] py-[14px] relative shrink-0" data-name="State-layer">
      <TabContents1 />
    </div>
  );
}

function Tab1() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[48px] items-center justify-end overflow-clip relative shrink-0" data-name="Tab 2">
      <StateLayer1 />
    </div>
  );
}

function TabContents2() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center justify-center min-h-px min-w-px relative shrink-0" data-name="Tab Contents">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[14px] text-center text-nowrap tracking-[0.1px]">
        <p className="leading-[20px]">Oppdragskapasitet</p>
      </div>
    </div>
  );
}

function StateLayer2() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="State-layer">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[16px] py-[14px] relative size-full">
          <TabContents2 />
          <div className="absolute bg-[#4a671e] bottom-0 h-[2px] left-0 right-0" data-name="Indicator" />
        </div>
      </div>
    </div>
  );
}

function Tab2() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[48px] items-center justify-end overflow-clip relative shrink-0" data-name="Tab 3">
      <StateLayer2 />
    </div>
  );
}

function TabContents3() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center justify-center min-h-px min-w-px relative shrink-0" data-name="Tab Contents">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#44483b] text-[14px] text-center text-nowrap tracking-[0.1px]">
        <p className="leading-[20px]">Oppdragsområde</p>
      </div>
    </div>
  );
}

function StateLayer3() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="State-layer">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[16px] py-[14px] relative size-full">
          <TabContents3 />
        </div>
      </div>
    </div>
  );
}

function Tab3() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[48px] items-center justify-end overflow-clip relative shrink-0" data-name="Tab 4">
      <StateLayer3 />
    </div>
  );
}

function TabContents4() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center justify-center min-h-px min-w-px relative shrink-0" data-name="Tab Contents">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#44483b] text-[14px] text-center text-nowrap tracking-[0.1px]">
        <p className="leading-[20px]">Reservasjonsliste</p>
      </div>
    </div>
  );
}

function StateLayer4() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="State-layer">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[16px] py-[14px] relative size-full">
          <TabContents4 />
        </div>
      </div>
    </div>
  );
}

function Tab4() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[48px] items-center justify-end overflow-clip relative shrink-0" data-name="Tab 5">
      <StateLayer4 />
    </div>
  );
}

function TabGroup() {
  return (
    <div className="relative shrink-0 w-full" data-name="Tab group">
      <div className="content-stretch flex items-start pl-[52px] pr-0 py-0 relative w-full">
        <Tab />
        <Tab1 />
        <Tab2 />
        <Tab3 />
        <Tab4 />
      </div>
    </div>
  );
}

function Divider() {
  return (
    <div className="h-[2px] relative shrink-0 w-full" data-name="Divider">
      <div className="absolute inset-[0_0_-0.01%_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1504 2.00013">
          <g id="Divider">
            <line id="Divider_2" stroke="var(--stroke-0, #E3E3D9)" strokeWidth="2" x1="8.74228e-08" x2="1504" y1="1.00013" y2="1" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Tabs() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Tabs">
      <TabGroup />
      <Divider />
    </div>
  );
}

function Left() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Left">
      <p className="font-['Manrope:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#44483b] text-[14px] text-nowrap tracking-[0.1px]">År</p>
    </div>
  );
}

function SectionHeader() {
  return (
    <div className="relative rounded-[100px] shrink-0 w-full" data-name="Section header 2">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[16px] py-[18px] relative w-full">
          <Left />
        </div>
      </div>
    </div>
  );
}

function StateLayer5() {
  return (
    <div className="content-stretch flex font-['Manrope:Medium',sans-serif] font-medium gap-[12px] h-full items-center leading-[20px] px-[24px] py-[16px] relative shrink-0 text-[#44483b] text-[14px] tracking-[0.1px] w-[274px]" data-name="state-layer">
      <p className="basis-0 grow min-h-px min-w-px relative shrink-0">2025</p>
      <p className="relative shrink-0 text-nowrap text-right">200 oppdrag</p>
    </div>
  );
}

function NavItem2() {
  return (
    <div className="content-stretch flex h-[56px] items-center overflow-clip relative rounded-[100px] shrink-0" data-name="Nav item 10">
      <StateLayer5 />
    </div>
  );
}

function StateLayer6() {
  return (
    <div className="content-stretch flex font-['Manrope:SemiBold',sans-serif] font-semibold gap-[12px] h-full items-center leading-[20px] px-[24px] py-[16px] relative shrink-0 text-[#174295] text-[14px] tracking-[0.1px] w-[274px]" data-name="state-layer">
      <p className="basis-0 grow min-h-px min-w-px relative shrink-0">2026</p>
      <p className="relative shrink-0 text-nowrap text-right">200 oppdrag</p>
    </div>
  );
}

function NavItem() {
  return (
    <div className="bg-[#dae2ff] content-stretch flex h-[56px] items-center overflow-clip relative rounded-[100px] shrink-0" data-name="Nav item 5">
      <StateLayer6 />
    </div>
  );
}

function StateLayer7() {
  return (
    <div className="content-stretch flex font-['Manrope:Medium',sans-serif] font-medium gap-[12px] h-full items-center leading-[20px] px-[24px] py-[16px] relative shrink-0 text-[#44483b] text-[14px] tracking-[0.1px] w-[274px]" data-name="state-layer">
      <p className="basis-0 grow min-h-px min-w-px relative shrink-0">2027</p>
      <p className="relative shrink-0 text-nowrap text-right">200 oppdrag</p>
    </div>
  );
}

function NavItem1() {
  return (
    <div className="content-stretch flex h-[56px] items-center overflow-clip relative rounded-[100px] shrink-0" data-name="Nav item 6">
      <StateLayer7 />
    </div>
  );
}

function YearList() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-[280px]" data-name="year list">
      <SectionHeader />
      <NavItem2 />
      <NavItem />
      <NavItem1 />
    </div>
  );
}

function Content() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] min-w-full relative shrink-0 text-[#44483b] text-[14px] tracking-[0.1px] w-[min-content]">
        <p className="leading-[20px]">Kapasitet i 2026</p>
      </div>
    </div>
  );
}

function StateLayer8() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative size-full">
          <Content />
        </div>
      </div>
    </div>
  );
}

function Title() {
  return (
    <div className="content-stretch flex flex-col h-[56px] items-center justify-center min-h-[56px] relative shrink-0 w-[360px]" data-name="Title">
      <StateLayer8 />
    </div>
  );
}

function Edit() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="edit">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="edit">
          <path d={svgPaths.p2da5bd80} fill="var(--fill-0, #44483B)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function LeadingElement() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Leading element">
      <Edit />
    </div>
  );
}

function Content1() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center leading-[0] min-h-px min-w-px overflow-clip relative shrink-0 tracking-[0.5px]" data-name="Content">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[#44483b] text-[12px] w-full">
        <p className="leading-[16px]">Antall oppdrag vår (januar–juni)</p>
      </div>
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#1a1c16] text-[16px] w-full">
        <p className="leading-[24px]">100</p>
      </div>
    </div>
  );
}

function StateLayer9() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[16px] items-center justify-center px-[16px] py-0 relative size-full">
          <LeadingElement />
          <Content1 />
        </div>
      </div>
    </div>
  );
}

function ListItemListItem4Density() {
  return (
    <div className="content-stretch flex flex-col h-[56px] items-center justify-center min-h-[56px] relative shrink-0 w-[360px]" data-name="List item/List Item: -4 Density">
      <StateLayer9 />
    </div>
  );
}

function Edit1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="edit">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="edit">
          <path d={svgPaths.p2da5bd80} fill="var(--fill-0, #44483B)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function LeadingElement1() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Leading element">
      <Edit1 />
    </div>
  );
}

function Content2() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center leading-[0] min-h-px min-w-px overflow-clip relative shrink-0 tracking-[0.5px]" data-name="Content">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[#44483b] text-[12px] w-full">
        <p className="leading-[16px]">Antall oppdrag høst (Juli-Desember)</p>
      </div>
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#1a1c16] text-[16px] w-full">
        <p className="leading-[24px]">100</p>
      </div>
    </div>
  );
}

function StateLayer10() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[16px] items-center justify-center px-[16px] py-0 relative size-full">
          <LeadingElement1 />
          <Content2 />
        </div>
      </div>
    </div>
  );
}

function ListItemListItem4Density1() {
  return (
    <div className="content-stretch flex flex-col h-[56px] items-center justify-center min-h-[56px] relative shrink-0 w-[360px]" data-name="List item/List Item: -4 Density">
      <StateLayer10 />
    </div>
  );
}

function CapacityDetails() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start justify-center min-h-px min-w-px relative shrink-0" data-name="Capacity details">
      <Title />
      <ListItemListItem4Density />
      <ListItemListItem4Density1 />
    </div>
  );
}

function Kompentanse() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="Kompentanse">
      <div className="content-stretch flex gap-[40px] items-start px-[40px] py-0 relative size-full">
        <YearList />
        <CapacityDetails />
      </div>
    </div>
  );
}

function TableContainer() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px overflow-clip relative shrink-0 w-full" data-name="Table Container">
      <Tabs />
      <Kompentanse />
    </div>
  );
}

export default function ProfileTabs() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-name="Profile tabs">
      <TableContainer />
    </div>
  );
}