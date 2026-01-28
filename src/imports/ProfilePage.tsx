import svgPaths from "./svg-v11lvym0ub";

function TextContent() {
  return (
    <div className="absolute content-stretch flex flex-col items-start justify-center left-[56px] right-[56px] top-1/2 translate-y-[-50%]" data-name="Text content">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[28px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#1a1c16] text-[22px] text-nowrap w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Revisorprofil
      </p>
    </div>
  );
}

function TrailingElements() {
  return <div className="basis-0 content-stretch flex grow items-center justify-end min-h-px min-w-px overflow-clip shrink-0" data-name="Trailing elements" />;
}

function Heading() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pl-[4px] pr-[16px] py-[8px] relative w-full">
          <TextContent />
          <TrailingElements />
        </div>
      </div>
    </div>
  );
}

function GenericAvatar() {
  return (
    <div className="relative shrink-0 size-[112px]" data-name="Generic avatar">
      <div className="absolute inset-0" style={{ "--fill-0": "rgba(239, 241, 231, 1)" } as React.CSSProperties}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 112 112">
          <g id="Generic avatar">
            <rect fill="var(--fill-0, #EFF1E7)" height="112" rx="56" width="112" />
            <g id="Avatar Placeholder">
              <path clipRule="evenodd" d={svgPaths.pee4ef00} fill="var(--fill-0, #284000)" fillRule="evenodd" />
              <path d={svgPaths.p2a3b8000} fill="var(--fill-0, #284000)" />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}

function StateLayer() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[10px] relative shrink-0" data-name="State-layer">
      <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#4a671e] text-[14px] text-nowrap tracking-[0.1px]">
        <p className="leading-[20px]">Last opp profilbilde</p>
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

function Button() {
  return (
    <div className="content-stretch flex h-[48px] items-center justify-center relative shrink-0" data-name="Button">
      <Content />
    </div>
  );
}

function ProfilePicture() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-center justify-center relative shrink-0" data-name="Profile picture">
      <GenericAvatar />
      <Button />
    </div>
  );
}

function Content1() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center leading-[0] min-h-px min-w-px overflow-clip relative shrink-0 tracking-[0.5px]" data-name="Content">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[#44483b] text-[12px] w-full">
        <p className="leading-[16px]">Navn</p>
      </div>
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#1a1c16] text-[16px] w-full">
        <p className="leading-[24px]">Liv Berg</p>
      </div>
    </div>
  );
}

function StateLayer1() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[16px] py-0 relative size-full">
          <Content1 />
        </div>
      </div>
    </div>
  );
}

function ListItemListItem4Density() {
  return (
    <div className="content-stretch flex flex-col h-[56px] items-center justify-center min-h-[56px] relative shrink-0 w-[360px]" data-name="List item/List Item: -4 Density">
      <StateLayer1 />
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

function Content2() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center leading-[0] min-h-px min-w-px overflow-clip relative shrink-0 tracking-[0.5px]" data-name="Content">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[#44483b] text-[12px] w-full">
        <p className="leading-[16px]">Telefon</p>
      </div>
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#1a1c16] text-[16px] w-full">
        <p className="leading-[24px]">+474015467</p>
      </div>
    </div>
  );
}

function StateLayer2() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[16px] items-center justify-center px-[16px] py-0 relative size-full">
          <LeadingElement />
          <Content2 />
        </div>
      </div>
    </div>
  );
}

function ListItemListItem4Density1() {
  return (
    <div className="content-stretch flex flex-col h-[56px] items-center justify-center min-h-[56px] relative shrink-0 w-[360px]" data-name="List item/List Item: -4 Density">
      <StateLayer2 />
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

function Content3() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center leading-[0] min-h-px min-w-px overflow-clip relative shrink-0 tracking-[0.5px]" data-name="Content">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[#44483b] text-[12px] w-full">
        <p className="leading-[16px]">E-post</p>
      </div>
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#1a1c16] text-[16px] w-full">
        <p className="leading-[24px]">Liv.berg@ksl.no</p>
      </div>
    </div>
  );
}

function StateLayer3() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[16px] items-center justify-center px-[16px] py-0 relative size-full">
          <LeadingElement1 />
          <Content3 />
        </div>
      </div>
    </div>
  );
}

function ListItemListItem4Density2() {
  return (
    <div className="content-stretch flex flex-col h-[56px] items-center justify-center min-h-[56px] relative shrink-0 w-[360px]" data-name="List item/List Item: -4 Density">
      <StateLayer3 />
    </div>
  );
}

function Edit2() {
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

function LeadingElement2() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Leading element">
      <Edit2 />
    </div>
  );
}

function Content4() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center leading-[0] min-h-px min-w-px overflow-clip relative shrink-0 tracking-[0.5px]" data-name="Content">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[#44483b] text-[12px] w-full">
        <p className="leading-[16px]">Adresse</p>
      </div>
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#1a1c16] text-[16px] w-full">
        <p className="leading-[24px]">Åsvegen 24</p>
      </div>
    </div>
  );
}

function StateLayer4() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[16px] items-center justify-center px-[16px] py-0 relative size-full">
          <LeadingElement2 />
          <Content4 />
        </div>
      </div>
    </div>
  );
}

function ListItemListItem4Density3() {
  return (
    <div className="content-stretch flex flex-col h-[56px] items-center justify-center min-h-[56px] relative shrink-0 w-[360px]" data-name="List item/List Item: -4 Density">
      <StateLayer4 />
    </div>
  );
}

function Edit3() {
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

function LeadingElement3() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Leading element">
      <Edit3 />
    </div>
  );
}

function Content5() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center leading-[0] min-h-px min-w-px overflow-clip relative shrink-0 tracking-[0.5px]" data-name="Content">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[#44483b] text-[12px] w-full">
        <p className="leading-[16px]">Postnummer</p>
      </div>
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#1a1c16] text-[16px] w-full">
        <p className="leading-[24px]">1430 Ås</p>
      </div>
    </div>
  );
}

function StateLayer5() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[16px] items-center justify-center px-[16px] py-0 relative size-full">
          <LeadingElement3 />
          <Content5 />
        </div>
      </div>
    </div>
  );
}

function ListItemListItem4Density4() {
  return (
    <div className="content-stretch flex flex-col h-[56px] items-center justify-center min-h-[56px] relative shrink-0 w-[360px]" data-name="List item/List Item: -4 Density">
      <StateLayer5 />
    </div>
  );
}

function Content6() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start leading-[0] min-h-px min-w-px overflow-clip relative shrink-0 tracking-[0.5px]" data-name="Content">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[#44483b] text-[12px] w-full">
        <p className="leading-[16px]">{`Revisorforetaket `}</p>
      </div>
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#1a1c16] text-[16px] w-full">
        <p className="leading-[24px]">
          Søndre Århus Gård DA
          <br aria-hidden="true" />
          {` Org.nr: 912 345 678`}
        </p>
      </div>
    </div>
  );
}

function StateLayer6() {
  return (
    <div className="relative shrink-0 w-full" data-name="state-layer">
      <div className="content-stretch flex gap-[16px] items-start px-[16px] py-[4px] relative w-full">
        <Content6 />
      </div>
    </div>
  );
}

function ListItemListItem4Density5() {
  return (
    <div className="content-stretch flex flex-col items-center min-h-[72px] relative shrink-0 w-[360px]" data-name="List item/List Item: -4 Density">
      <StateLayer6 />
    </div>
  );
}

function HandleShape() {
  return (
    <div className="bg-[#74796a] content-stretch flex items-center justify-center overflow-clip p-[7px] relative rounded-[24px] shrink-0" data-name="Handle shape">
      <div className="rounded-[100px] shrink-0 size-[2px]" data-name="Container" />
    </div>
  );
}

function StateLayer7() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center p-[12px] relative rounded-[100px] shrink-0" data-name="State-layer">
      <HandleShape />
    </div>
  );
}

function Target() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[-16px] p-[4px] top-1/2 translate-y-[-50%]" data-name="Target">
      <StateLayer7 />
    </div>
  );
}

function Handle() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Handle">
      <Target />
    </div>
  );
}

function Switch() {
  return (
    <div className="bg-[#e3e3d9] content-stretch flex h-[32px] items-center px-[8px] py-[2px] relative rounded-[100px] shrink-0 w-[52px]" data-name="Switch">
      <div aria-hidden="true" className="absolute border-2 border-[#74796a] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <Handle />
    </div>
  );
}

function LeadingElement4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Leading element">
      <Switch />
    </div>
  );
}

function Content7() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] tracking-[0.5px] w-full">
        <p className="leading-[24px]">Oppfølging gyldig KSL</p>
      </div>
    </div>
  );
}

function StateLayer8() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[16px] py-0 relative size-full">
          <LeadingElement4 />
          <Content7 />
        </div>
      </div>
    </div>
  );
}

function ListItemListItem4Density6() {
  return (
    <div className="content-stretch flex flex-col h-[40px] items-center justify-center min-h-[40px] relative shrink-0 w-[360px]" data-name="List item/List Item: -4 Density">
      <StateLayer8 />
    </div>
  );
}

function Information() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="information">
      <ListItemListItem4Density />
      <ListItemListItem4Density1 />
      <ListItemListItem4Density2 />
      <ListItemListItem4Density3 />
      <ListItemListItem4Density4 />
      <ListItemListItem4Density5 />
      <ListItemListItem4Density6 />
    </div>
  );
}

function ProfileDetails() {
  return (
    <div className="relative shrink-0 w-full" data-name="Profile Details">
      <div className="content-stretch flex gap-[32px] items-start px-[40px] py-[16px] relative w-full">
        <ProfilePicture />
        <Information />
      </div>
    </div>
  );
}

function MainProfileInformation() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[48px] pt-0 px-0 relative shrink-0 w-[1504px]" data-name="main profile information">
      <Heading />
      <ProfileDetails />
    </div>
  );
}

function TabContents() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center justify-center min-h-px min-w-px relative shrink-0" data-name="Tab Contents">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[14px] text-center text-nowrap tracking-[0.1px]">
        <p className="leading-[20px]">Kompetanse</p>
      </div>
    </div>
  );
}

function StateLayer9() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="State-layer">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[16px] py-[14px] relative size-full">
          <TabContents />
          <div className="absolute bg-[#4a671e] bottom-0 h-[2px] left-0 right-0" data-name="Indicator" />
        </div>
      </div>
    </div>
  );
}

function Tab() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[48px] items-center justify-end overflow-clip relative shrink-0" data-name="Tab 1">
      <StateLayer9 />
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

function StateLayer10() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-center justify-center min-h-px min-w-px overflow-clip px-[16px] py-[14px] relative shrink-0" data-name="State-layer">
      <TabContents1 />
    </div>
  );
}

function Tab1() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[48px] items-center justify-end overflow-clip relative shrink-0" data-name="Tab 2">
      <StateLayer10 />
    </div>
  );
}

function TabContents2() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center justify-center min-h-px min-w-px relative shrink-0" data-name="Tab Contents">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#44483b] text-[14px] text-center text-nowrap tracking-[0.1px]">
        <p className="leading-[20px]">Oppdragskapasitet</p>
      </div>
    </div>
  );
}

function StateLayer11() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="State-layer">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[16px] py-[14px] relative size-full">
          <TabContents2 />
        </div>
      </div>
    </div>
  );
}

function Tab2() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[48px] items-center justify-end overflow-clip relative shrink-0" data-name="Tab 3">
      <StateLayer11 />
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

function StateLayer12() {
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
      <StateLayer12 />
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

function StateLayer13() {
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
      <StateLayer13 />
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
      <p className="font-['Manrope:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#44483b] text-[14px] text-nowrap tracking-[0.1px]">Ordning</p>
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

function StateLayer14() {
  return (
    <div className="content-stretch flex font-['Manrope:SemiBold',sans-serif] font-semibold gap-[12px] h-full items-center leading-[20px] px-[24px] py-[16px] relative shrink-0 text-[#174295] text-[14px] tracking-[0.1px] w-[274px]" data-name="state-layer">
      <p className="basis-0 grow min-h-px min-w-px relative shrink-0">KSl</p>
      <p className="relative shrink-0 text-nowrap text-right">14 Produksjoner</p>
    </div>
  );
}

function NavItem() {
  return (
    <div className="bg-[#dae2ff] content-stretch flex h-[56px] items-center overflow-clip relative rounded-[100px] shrink-0" data-name="Nav item 5">
      <StateLayer14 />
    </div>
  );
}

function StateLayer15() {
  return (
    <div className="content-stretch flex font-['Manrope:Medium',sans-serif] font-medium gap-[12px] h-full items-center leading-[20px] px-[24px] py-[16px] relative shrink-0 text-[#44483b] text-[14px] tracking-[0.1px] w-[274px]" data-name="state-layer">
      <p className="basis-0 grow min-h-px min-w-px relative shrink-0">Spesialitet</p>
      <p className="relative shrink-0 text-nowrap text-right">1 Produksjoner</p>
    </div>
  );
}

function NavItem1() {
  return (
    <div className="content-stretch flex h-[56px] items-center overflow-clip relative rounded-[100px] shrink-0" data-name="Nav item 6">
      <StateLayer15 />
    </div>
  );
}

function StateLayer16() {
  return (
    <div className="content-stretch flex font-['Manrope:Medium',sans-serif] font-medium gap-[12px] h-full items-center leading-[20px] px-[24px] py-[16px] relative shrink-0 text-[#44483b] text-[14px] tracking-[0.1px] w-[274px]" data-name="state-layer">
      <p className="basis-0 grow min-h-px min-w-px relative shrink-0">Lokalmat</p>
      <p className="relative shrink-0 text-nowrap text-right">3 Produksjoner</p>
    </div>
  );
}

function NavItem2() {
  return (
    <div className="content-stretch flex h-[56px] items-center overflow-clip relative rounded-[100px] shrink-0" data-name="Nav item 7">
      <StateLayer16 />
    </div>
  );
}

function StateLayer17() {
  return (
    <div className="content-stretch flex font-['Manrope:Medium',sans-serif] font-medium gap-[12px] h-full items-center leading-[20px] px-[24px] py-[16px] relative shrink-0 text-[#44483b] text-[14px] tracking-[0.1px] w-[274px]" data-name="state-layer">
      <p className="basis-0 grow min-h-px min-w-px relative shrink-0">Nyt Norge</p>
      <p className="relative shrink-0 text-nowrap text-right">4 Produksjoner</p>
    </div>
  );
}

function NavItem3() {
  return (
    <div className="content-stretch flex h-[56px] items-center overflow-clip relative rounded-[100px] shrink-0" data-name="Nav item 8">
      <StateLayer17 />
    </div>
  );
}

function StateLayer18() {
  return (
    <div className="content-stretch flex font-['Manrope:Medium',sans-serif] font-medium gap-[12px] h-full items-center leading-[20px] px-[24px] py-[16px] relative shrink-0 text-[#44483b] text-[14px] tracking-[0.1px] w-[274px]" data-name="state-layer">
      <p className="basis-0 grow min-h-px min-w-px relative shrink-0">Frukt- og grøntpakkerier</p>
      <p className="relative shrink-0 text-nowrap text-right">1 Produksjoner</p>
    </div>
  );
}

function NavItem4() {
  return (
    <div className="content-stretch flex h-[56px] items-center overflow-clip relative rounded-[100px] shrink-0" data-name="Nav item 9">
      <StateLayer18 />
    </div>
  );
}

function SchemeList() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="Scheme list">
      <SectionHeader />
      <NavItem />
      <NavItem1 />
      <NavItem2 />
      <NavItem3 />
      <NavItem4 />
    </div>
  );
}

function Content8() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] min-w-full relative shrink-0 text-[#1a1c16] text-[16px] tracking-[0.15px] w-[min-content]">
        <p className="leading-[24px]">KSL Produksjoner i din kompetanse</p>
      </div>
    </div>
  );
}

function StateLayer19() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative size-full">
          <Content8 />
        </div>
      </div>
    </div>
  );
}

function Title() {
  return (
    <div className="content-stretch flex flex-col h-[56px] items-center justify-center min-h-[56px] relative shrink-0 w-[360px]" data-name="Title">
      <StateLayer19 />
    </div>
  );
}

function HandleShape1() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center overflow-clip p-[11px] relative rounded-[24px] shrink-0" data-name="Handle shape">
      <div className="rounded-[23px] shrink-0 size-[2px]" data-name="Container" />
    </div>
  );
}

function StateLayer20() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center p-[8px] relative rounded-[100px] shrink-0" data-name="State-layer">
      <HandleShape1 />
    </div>
  );
}

function Target1() {
  return (
    <div className="absolute content-stretch flex items-center justify-center p-[4px] right-[-12px] top-1/2 translate-y-[-50%]" data-name="Target">
      <StateLayer20 />
    </div>
  );
}

function Handle1() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Handle">
      <Target1 />
    </div>
  );
}

function Switch1() {
  return (
    <div className="bg-[#4a671e] content-stretch flex h-[32px] items-center justify-end px-[4px] py-[2px] relative rounded-[100px] shrink-0 w-[52px]" data-name="Switch">
      <Handle1 />
    </div>
  );
}

function LeadingElement5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Leading element">
      <Switch1 />
    </div>
  );
}

function Content9() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] tracking-[0.5px] w-full">
        <p className="leading-[24px]">Inn på tunet</p>
      </div>
    </div>
  );
}

function StateLayer21() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative size-full">
          <LeadingElement5 />
          <Content9 />
        </div>
      </div>
    </div>
  );
}

function ListItemListItem0Density() {
  return (
    <div className="content-stretch flex flex-col h-[56px] items-center justify-center min-h-[56px] relative shrink-0 w-[360px]" data-name="List item/List Item: 0 Density">
      <StateLayer21 />
    </div>
  );
}

function HandleShape2() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center overflow-clip p-[11px] relative rounded-[24px] shrink-0" data-name="Handle shape">
      <div className="rounded-[23px] shrink-0 size-[2px]" data-name="Container" />
    </div>
  );
}

function StateLayer22() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center p-[8px] relative rounded-[100px] shrink-0" data-name="State-layer">
      <HandleShape2 />
    </div>
  );
}

function Target2() {
  return (
    <div className="absolute content-stretch flex items-center justify-center p-[4px] right-[-12px] top-1/2 translate-y-[-50%]" data-name="Target">
      <StateLayer22 />
    </div>
  );
}

function Handle2() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Handle">
      <Target2 />
    </div>
  );
}

function Switch2() {
  return (
    <div className="bg-[#4a671e] content-stretch flex h-[32px] items-center justify-end px-[4px] py-[2px] relative rounded-[100px] shrink-0 w-[52px]" data-name="Switch">
      <Handle2 />
    </div>
  );
}

function LeadingElement6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Leading element">
      <Switch2 />
    </div>
  );
}

function Content10() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] tracking-[0.5px] w-full">
        <p className="leading-[24px]">Sau</p>
      </div>
    </div>
  );
}

function StateLayer23() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative size-full">
          <LeadingElement6 />
          <Content10 />
        </div>
      </div>
    </div>
  );
}

function ListItemListItem0Density1() {
  return (
    <div className="content-stretch flex flex-col h-[56px] items-center justify-center min-h-[56px] relative shrink-0 w-[360px]" data-name="List item/List Item: 0 Density">
      <StateLayer23 />
    </div>
  );
}

function HandleShape3() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center overflow-clip p-[11px] relative rounded-[24px] shrink-0" data-name="Handle shape">
      <div className="rounded-[23px] shrink-0 size-[2px]" data-name="Container" />
    </div>
  );
}

function StateLayer24() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center p-[8px] relative rounded-[100px] shrink-0" data-name="State-layer">
      <HandleShape3 />
    </div>
  );
}

function Target3() {
  return (
    <div className="absolute content-stretch flex items-center justify-center p-[4px] right-[-12px] top-1/2 translate-y-[-50%]" data-name="Target">
      <StateLayer24 />
    </div>
  );
}

function Handle3() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Handle">
      <Target3 />
    </div>
  );
}

function Switch3() {
  return (
    <div className="bg-[#4a671e] content-stretch flex h-[32px] items-center justify-end px-[4px] py-[2px] relative rounded-[100px] shrink-0 w-[52px]" data-name="Switch">
      <Handle3 />
    </div>
  );
}

function LeadingElement7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Leading element">
      <Switch3 />
    </div>
  );
}

function Content11() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] tracking-[0.5px] w-full">
        <p className="leading-[24px]">Melk - sau</p>
      </div>
    </div>
  );
}

function StateLayer25() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative size-full">
          <LeadingElement7 />
          <Content11 />
        </div>
      </div>
    </div>
  );
}

function ListItemListItem0Density2() {
  return (
    <div className="content-stretch flex flex-col h-[56px] items-center justify-center min-h-[56px] relative shrink-0 w-[360px]" data-name="List item/List Item: 0 Density">
      <StateLayer25 />
    </div>
  );
}

function HandleShape4() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center overflow-clip p-[11px] relative rounded-[24px] shrink-0" data-name="Handle shape">
      <div className="rounded-[23px] shrink-0 size-[2px]" data-name="Container" />
    </div>
  );
}

function StateLayer26() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center p-[8px] relative rounded-[100px] shrink-0" data-name="State-layer">
      <HandleShape4 />
    </div>
  );
}

function Target4() {
  return (
    <div className="absolute content-stretch flex items-center justify-center p-[4px] right-[-12px] top-1/2 translate-y-[-50%]" data-name="Target">
      <StateLayer26 />
    </div>
  );
}

function Handle4() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Handle">
      <Target4 />
    </div>
  );
}

function Switch4() {
  return (
    <div className="bg-[#4a671e] content-stretch flex h-[32px] items-center justify-end px-[4px] py-[2px] relative rounded-[100px] shrink-0 w-[52px]" data-name="Switch">
      <Handle4 />
    </div>
  );
}

function LeadingElement8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Leading element">
      <Switch4 />
    </div>
  );
}

function Content12() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] tracking-[0.5px] w-full">
        <p className="leading-[24px]">Melk - geit</p>
      </div>
    </div>
  );
}

function StateLayer27() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative size-full">
          <LeadingElement8 />
          <Content12 />
        </div>
      </div>
    </div>
  );
}

function ListItemListItem0Density3() {
  return (
    <div className="content-stretch flex flex-col h-[56px] items-center justify-center min-h-[56px] relative shrink-0 w-[360px]" data-name="List item/List Item: 0 Density">
      <StateLayer27 />
    </div>
  );
}

function HandleShape5() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center overflow-clip p-[11px] relative rounded-[24px] shrink-0" data-name="Handle shape">
      <div className="rounded-[23px] shrink-0 size-[2px]" data-name="Container" />
    </div>
  );
}

function StateLayer28() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center p-[8px] relative rounded-[100px] shrink-0" data-name="State-layer">
      <HandleShape5 />
    </div>
  );
}

function Target5() {
  return (
    <div className="absolute content-stretch flex items-center justify-center p-[4px] right-[-12px] top-1/2 translate-y-[-50%]" data-name="Target">
      <StateLayer28 />
    </div>
  );
}

function Handle5() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Handle">
      <Target5 />
    </div>
  );
}

function Switch5() {
  return (
    <div className="bg-[#4a671e] content-stretch flex h-[32px] items-center justify-end px-[4px] py-[2px] relative rounded-[100px] shrink-0 w-[52px]" data-name="Switch">
      <Handle5 />
    </div>
  );
}

function LeadingElement9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Leading element">
      <Switch5 />
    </div>
  );
}

function Content13() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] tracking-[0.5px] w-full">
        <p className="leading-[24px]">Korn, frø, olje- og belgvekster</p>
      </div>
    </div>
  );
}

function StateLayer29() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative size-full">
          <LeadingElement9 />
          <Content13 />
        </div>
      </div>
    </div>
  );
}

function ListItemListItem0Density4() {
  return (
    <div className="content-stretch flex flex-col h-[56px] items-center justify-center min-h-[56px] relative shrink-0 w-[360px]" data-name="List item/List Item: 0 Density">
      <StateLayer29 />
    </div>
  );
}

function HandleShape6() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center overflow-clip p-[11px] relative rounded-[24px] shrink-0" data-name="Handle shape">
      <div className="rounded-[23px] shrink-0 size-[2px]" data-name="Container" />
    </div>
  );
}

function StateLayer30() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center p-[8px] relative rounded-[100px] shrink-0" data-name="State-layer">
      <HandleShape6 />
    </div>
  );
}

function Target6() {
  return (
    <div className="absolute content-stretch flex items-center justify-center p-[4px] right-[-12px] top-1/2 translate-y-[-50%]" data-name="Target">
      <StateLayer30 />
    </div>
  );
}

function Handle6() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Handle">
      <Target6 />
    </div>
  );
}

function Switch6() {
  return (
    <div className="bg-[#4a671e] content-stretch flex h-[32px] items-center justify-end px-[4px] py-[2px] relative rounded-[100px] shrink-0 w-[52px]" data-name="Switch">
      <Handle6 />
    </div>
  );
}

function LeadingElement10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Leading element">
      <Switch6 />
    </div>
  );
}

function Content14() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] tracking-[0.5px] w-full">
        <p className="leading-[24px]">Geit</p>
      </div>
    </div>
  );
}

function StateLayer31() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative size-full">
          <LeadingElement10 />
          <Content14 />
        </div>
      </div>
    </div>
  );
}

function ListItemListItem0Density5() {
  return (
    <div className="content-stretch flex flex-col h-[56px] items-center justify-center min-h-[56px] relative shrink-0 w-[360px]" data-name="List item/List Item: 0 Density">
      <StateLayer31 />
    </div>
  );
}

function HandleShape7() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center overflow-clip p-[11px] relative rounded-[24px] shrink-0" data-name="Handle shape">
      <div className="rounded-[23px] shrink-0 size-[2px]" data-name="Container" />
    </div>
  );
}

function StateLayer32() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center p-[8px] relative rounded-[100px] shrink-0" data-name="State-layer">
      <HandleShape7 />
    </div>
  );
}

function Target7() {
  return (
    <div className="absolute content-stretch flex items-center justify-center p-[4px] right-[-12px] top-1/2 translate-y-[-50%]" data-name="Target">
      <StateLayer32 />
    </div>
  );
}

function Handle7() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Handle">
      <Target7 />
    </div>
  );
}

function Switch7() {
  return (
    <div className="bg-[#4a671e] content-stretch flex h-[32px] items-center justify-end px-[4px] py-[2px] relative rounded-[100px] shrink-0 w-[52px]" data-name="Switch">
      <Handle7 />
    </div>
  );
}

function LeadingElement11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Leading element">
      <Switch7 />
    </div>
  );
}

function Content15() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] tracking-[0.5px] w-full">
        <p className="leading-[24px]">Melk - ku</p>
      </div>
    </div>
  );
}

function StateLayer33() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative size-full">
          <LeadingElement11 />
          <Content15 />
        </div>
      </div>
    </div>
  );
}

function ListItemListItem0Density6() {
  return (
    <div className="content-stretch flex flex-col h-[56px] items-center justify-center min-h-[56px] relative shrink-0 w-[360px]" data-name="List item/List Item: 0 Density">
      <StateLayer33 />
    </div>
  );
}

function HandleShape8() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center overflow-clip p-[11px] relative rounded-[24px] shrink-0" data-name="Handle shape">
      <div className="rounded-[23px] shrink-0 size-[2px]" data-name="Container" />
    </div>
  );
}

function StateLayer34() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center p-[8px] relative rounded-[100px] shrink-0" data-name="State-layer">
      <HandleShape8 />
    </div>
  );
}

function Target8() {
  return (
    <div className="absolute content-stretch flex items-center justify-center p-[4px] right-[-12px] top-1/2 translate-y-[-50%]" data-name="Target">
      <StateLayer34 />
    </div>
  );
}

function Handle8() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Handle">
      <Target8 />
    </div>
  );
}

function Switch8() {
  return (
    <div className="bg-[#4a671e] content-stretch flex h-[32px] items-center justify-end px-[4px] py-[2px] relative rounded-[100px] shrink-0 w-[52px]" data-name="Switch">
      <Handle8 />
    </div>
  );
}

function LeadingElement12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Leading element">
      <Switch8 />
    </div>
  );
}

function Content16() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] tracking-[0.5px] w-full">
        <p className="leading-[24px]">Grønnsaker</p>
      </div>
    </div>
  );
}

function StateLayer35() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative size-full">
          <LeadingElement12 />
          <Content16 />
        </div>
      </div>
    </div>
  );
}

function ListItemListItem0Density7() {
  return (
    <div className="content-stretch flex flex-col h-[56px] items-center justify-center min-h-[56px] relative shrink-0 w-[360px]" data-name="List item/List Item: 0 Density">
      <StateLayer35 />
    </div>
  );
}

function HandleShape9() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center overflow-clip p-[11px] relative rounded-[24px] shrink-0" data-name="Handle shape">
      <div className="rounded-[23px] shrink-0 size-[2px]" data-name="Container" />
    </div>
  );
}

function StateLayer36() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center p-[8px] relative rounded-[100px] shrink-0" data-name="State-layer">
      <HandleShape9 />
    </div>
  );
}

function Target9() {
  return (
    <div className="absolute content-stretch flex items-center justify-center p-[4px] right-[-12px] top-1/2 translate-y-[-50%]" data-name="Target">
      <StateLayer36 />
    </div>
  );
}

function Handle9() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Handle">
      <Target9 />
    </div>
  );
}

function Switch9() {
  return (
    <div className="bg-[#4a671e] content-stretch flex h-[32px] items-center justify-end px-[4px] py-[2px] relative rounded-[100px] shrink-0 w-[52px]" data-name="Switch">
      <Handle9 />
    </div>
  );
}

function LeadingElement13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Leading element">
      <Switch9 />
    </div>
  );
}

function Content17() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] tracking-[0.5px] w-full">
        <p className="leading-[24px]">Grovfôr</p>
      </div>
    </div>
  );
}

function StateLayer37() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative size-full">
          <LeadingElement13 />
          <Content17 />
        </div>
      </div>
    </div>
  );
}

function ListItemListItem0Density8() {
  return (
    <div className="content-stretch flex flex-col h-[56px] items-center justify-center min-h-[56px] relative shrink-0 w-[360px]" data-name="List item/List Item: 0 Density">
      <StateLayer37 />
    </div>
  );
}

function HandleShape10() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center overflow-clip p-[11px] relative rounded-[24px] shrink-0" data-name="Handle shape">
      <div className="rounded-[23px] shrink-0 size-[2px]" data-name="Container" />
    </div>
  );
}

function StateLayer38() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center p-[8px] relative rounded-[100px] shrink-0" data-name="State-layer">
      <HandleShape10 />
    </div>
  );
}

function Target10() {
  return (
    <div className="absolute content-stretch flex items-center justify-center p-[4px] right-[-12px] top-1/2 translate-y-[-50%]" data-name="Target">
      <StateLayer38 />
    </div>
  );
}

function Handle10() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Handle">
      <Target10 />
    </div>
  );
}

function Switch10() {
  return (
    <div className="bg-[#4a671e] content-stretch flex h-[32px] items-center justify-end px-[4px] py-[2px] relative rounded-[100px] shrink-0 w-[52px]" data-name="Switch">
      <Handle10 />
    </div>
  );
}

function LeadingElement14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Leading element">
      <Switch10 />
    </div>
  );
}

function Content18() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] tracking-[0.5px] w-full">
        <p className="leading-[24px]">Potet</p>
      </div>
    </div>
  );
}

function StateLayer39() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative size-full">
          <LeadingElement14 />
          <Content18 />
        </div>
      </div>
    </div>
  );
}

function ListItemListItem0Density9() {
  return (
    <div className="content-stretch flex flex-col h-[56px] items-center justify-center min-h-[56px] relative shrink-0 w-[360px]" data-name="List item/List Item: 0 Density">
      <StateLayer39 />
    </div>
  );
}

function HandleShape11() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center overflow-clip p-[11px] relative rounded-[24px] shrink-0" data-name="Handle shape">
      <div className="rounded-[23px] shrink-0 size-[2px]" data-name="Container" />
    </div>
  );
}

function StateLayer40() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center p-[8px] relative rounded-[100px] shrink-0" data-name="State-layer">
      <HandleShape11 />
    </div>
  );
}

function Target11() {
  return (
    <div className="absolute content-stretch flex items-center justify-center p-[4px] right-[-12px] top-1/2 translate-y-[-50%]" data-name="Target">
      <StateLayer40 />
    </div>
  );
}

function Handle11() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Handle">
      <Target11 />
    </div>
  );
}

function Switch11() {
  return (
    <div className="bg-[#4a671e] content-stretch flex h-[32px] items-center justify-end px-[4px] py-[2px] relative rounded-[100px] shrink-0 w-[52px]" data-name="Switch">
      <Handle11 />
    </div>
  );
}

function LeadingElement15() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Leading element">
      <Switch11 />
    </div>
  );
}

function Content19() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] tracking-[0.5px] w-full">
        <p className="leading-[24px]">Hest</p>
      </div>
    </div>
  );
}

function StateLayer41() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative size-full">
          <LeadingElement15 />
          <Content19 />
        </div>
      </div>
    </div>
  );
}

function ListItemListItem0Density10() {
  return (
    <div className="content-stretch flex flex-col h-[56px] items-center justify-center min-h-[56px] relative shrink-0 w-[360px]" data-name="List item/List Item: 0 Density">
      <StateLayer41 />
    </div>
  );
}

function HandleShape12() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center overflow-clip p-[11px] relative rounded-[24px] shrink-0" data-name="Handle shape">
      <div className="rounded-[23px] shrink-0 size-[2px]" data-name="Container" />
    </div>
  );
}

function StateLayer42() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center p-[8px] relative rounded-[100px] shrink-0" data-name="State-layer">
      <HandleShape12 />
    </div>
  );
}

function Target12() {
  return (
    <div className="absolute content-stretch flex items-center justify-center p-[4px] right-[-12px] top-1/2 translate-y-[-50%]" data-name="Target">
      <StateLayer42 />
    </div>
  );
}

function Handle12() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Handle">
      <Target12 />
    </div>
  );
}

function Switch12() {
  return (
    <div className="bg-[#4a671e] content-stretch flex h-[32px] items-center justify-end px-[4px] py-[2px] relative rounded-[100px] shrink-0 w-[52px]" data-name="Switch">
      <Handle12 />
    </div>
  );
}

function LeadingElement16() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Leading element">
      <Switch12 />
    </div>
  );
}

function Content20() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] tracking-[0.5px] w-full">
        <p className="leading-[24px]">Verpehøner (egg)</p>
      </div>
    </div>
  );
}

function StateLayer43() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative size-full">
          <LeadingElement16 />
          <Content20 />
        </div>
      </div>
    </div>
  );
}

function ListItemListItem0Density11() {
  return (
    <div className="content-stretch flex flex-col h-[56px] items-center justify-center min-h-[56px] relative shrink-0 w-[360px]" data-name="List item/List Item: 0 Density">
      <StateLayer43 />
    </div>
  );
}

function HandleShape13() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center overflow-clip p-[11px] relative rounded-[24px] shrink-0" data-name="Handle shape">
      <div className="rounded-[23px] shrink-0 size-[2px]" data-name="Container" />
    </div>
  );
}

function StateLayer44() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center p-[8px] relative rounded-[100px] shrink-0" data-name="State-layer">
      <HandleShape13 />
    </div>
  );
}

function Target13() {
  return (
    <div className="absolute content-stretch flex items-center justify-center p-[4px] right-[-12px] top-1/2 translate-y-[-50%]" data-name="Target">
      <StateLayer44 />
    </div>
  );
}

function Handle13() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Handle">
      <Target13 />
    </div>
  );
}

function Switch13() {
  return (
    <div className="bg-[#4a671e] content-stretch flex h-[32px] items-center justify-end px-[4px] py-[2px] relative rounded-[100px] shrink-0 w-[52px]" data-name="Switch">
      <Handle13 />
    </div>
  );
}

function LeadingElement17() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Leading element">
      <Switch13 />
    </div>
  );
}

function Content21() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] tracking-[0.5px] w-full">
        <p className="leading-[24px]">Storfe</p>
      </div>
    </div>
  );
}

function StateLayer45() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative size-full">
          <LeadingElement17 />
          <Content21 />
        </div>
      </div>
    </div>
  );
}

function ListItemListItem0Density12() {
  return (
    <div className="content-stretch flex flex-col h-[56px] items-center justify-center min-h-[56px] relative shrink-0 w-[360px]" data-name="List item/List Item: 0 Density">
      <StateLayer45 />
    </div>
  );
}

function HandleShape14() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center overflow-clip p-[11px] relative rounded-[24px] shrink-0" data-name="Handle shape">
      <div className="rounded-[23px] shrink-0 size-[2px]" data-name="Container" />
    </div>
  );
}

function StateLayer46() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center p-[8px] relative rounded-[100px] shrink-0" data-name="State-layer">
      <HandleShape14 />
    </div>
  );
}

function Target14() {
  return (
    <div className="absolute content-stretch flex items-center justify-center p-[4px] right-[-12px] top-1/2 translate-y-[-50%]" data-name="Target">
      <StateLayer46 />
    </div>
  );
}

function Handle14() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Handle">
      <Target14 />
    </div>
  );
}

function Switch14() {
  return (
    <div className="bg-[#4a671e] content-stretch flex h-[32px] items-center justify-end px-[4px] py-[2px] relative rounded-[100px] shrink-0 w-[52px]" data-name="Switch">
      <Handle14 />
    </div>
  );
}

function LeadingElement18() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Leading element">
      <Switch14 />
    </div>
  );
}

function Content22() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] tracking-[0.5px] w-full">
        <p className="leading-[24px]">Svin</p>
      </div>
    </div>
  );
}

function StateLayer47() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative size-full">
          <LeadingElement18 />
          <Content22 />
        </div>
      </div>
    </div>
  );
}

function ListItemListItem0Density13() {
  return (
    <div className="content-stretch flex flex-col h-[56px] items-center justify-center min-h-[56px] relative shrink-0 w-[360px]" data-name="List item/List Item: 0 Density">
      <StateLayer47 />
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="expand_less">
          <path d={svgPaths.p2b8d2f00} fill="var(--fill-0, #4A671E)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function StateLayer48() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center px-[24px] py-[16px] relative shrink-0" data-name="State-layer">
      <Icon />
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#4a671e] text-[16px] text-nowrap tracking-[0.15px]">
        <p className="leading-[24px]">Vis produksjoner som kan legges til</p>
      </div>
    </div>
  );
}

function Content23() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0" data-name="Content">
      <StateLayer48 />
    </div>
  );
}

function ExpandButton() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Expand Button">
      <Content23 />
    </div>
  );
}

function HandleShape15() {
  return (
    <div className="bg-[#74796a] content-stretch flex items-center justify-center overflow-clip p-[7px] relative rounded-[24px] shrink-0" data-name="Handle shape">
      <div className="rounded-[100px] shrink-0 size-[2px]" data-name="Container" />
    </div>
  );
}

function StateLayer49() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center p-[12px] relative rounded-[100px] shrink-0" data-name="State-layer">
      <HandleShape15 />
    </div>
  );
}

function Target15() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[-16px] p-[4px] top-1/2 translate-y-[-50%]" data-name="Target">
      <StateLayer49 />
    </div>
  );
}

function Handle15() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Handle">
      <Target15 />
    </div>
  );
}

function Switch15() {
  return (
    <div className="bg-[#e3e3d9] content-stretch flex h-[32px] items-center px-[8px] py-[2px] relative rounded-[100px] shrink-0 w-[52px]" data-name="Switch">
      <div aria-hidden="true" className="absolute border-2 border-[#74796a] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <Handle15 />
    </div>
  );
}

function LeadingElement19() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Leading element">
      <Switch15 />
    </div>
  );
}

function Content24() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] tracking-[0.5px] w-full">
        <p className="leading-[24px]">Kalkuner, ender og gjess</p>
      </div>
    </div>
  );
}

function StateLayer50() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative size-full">
          <LeadingElement19 />
          <Content24 />
        </div>
      </div>
    </div>
  );
}

function ListItemListItem0Density14() {
  return (
    <div className="content-stretch flex flex-col h-[56px] items-center justify-center min-h-[56px] relative shrink-0 w-[360px]" data-name="List item/List Item: 0 Density">
      <StateLayer50 />
    </div>
  );
}

function HandleShape16() {
  return (
    <div className="bg-[#74796a] content-stretch flex items-center justify-center overflow-clip p-[7px] relative rounded-[24px] shrink-0" data-name="Handle shape">
      <div className="rounded-[100px] shrink-0 size-[2px]" data-name="Container" />
    </div>
  );
}

function StateLayer51() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center p-[12px] relative rounded-[100px] shrink-0" data-name="State-layer">
      <HandleShape16 />
    </div>
  );
}

function Target16() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[-16px] p-[4px] top-1/2 translate-y-[-50%]" data-name="Target">
      <StateLayer51 />
    </div>
  );
}

function Handle16() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Handle">
      <Target16 />
    </div>
  );
}

function Switch16() {
  return (
    <div className="bg-[#e3e3d9] content-stretch flex h-[32px] items-center px-[8px] py-[2px] relative rounded-[100px] shrink-0 w-[52px]" data-name="Switch">
      <div aria-hidden="true" className="absolute border-2 border-[#74796a] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <Handle16 />
    </div>
  );
}

function LeadingElement20() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Leading element">
      <Switch16 />
    </div>
  );
}

function Content25() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] tracking-[0.5px] w-full">
        <p className="leading-[24px]">Oppal - fjørfe</p>
      </div>
    </div>
  );
}

function StateLayer52() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative size-full">
          <LeadingElement20 />
          <Content25 />
        </div>
      </div>
    </div>
  );
}

function ListItemListItem0Density15() {
  return (
    <div className="content-stretch flex flex-col h-[56px] items-center justify-center min-h-[56px] relative shrink-0 w-[360px]" data-name="List item/List Item: 0 Density">
      <StateLayer52 />
    </div>
  );
}

function HandleShape17() {
  return (
    <div className="bg-[#74796a] content-stretch flex items-center justify-center overflow-clip p-[7px] relative rounded-[24px] shrink-0" data-name="Handle shape">
      <div className="rounded-[100px] shrink-0 size-[2px]" data-name="Container" />
    </div>
  );
}

function StateLayer53() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center p-[12px] relative rounded-[100px] shrink-0" data-name="State-layer">
      <HandleShape17 />
    </div>
  );
}

function Target17() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[-16px] p-[4px] top-1/2 translate-y-[-50%]" data-name="Target">
      <StateLayer53 />
    </div>
  );
}

function Handle17() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Handle">
      <Target17 />
    </div>
  );
}

function Switch17() {
  return (
    <div className="bg-[#e3e3d9] content-stretch flex h-[32px] items-center px-[8px] py-[2px] relative rounded-[100px] shrink-0 w-[52px]" data-name="Switch">
      <div aria-hidden="true" className="absolute border-2 border-[#74796a] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <Handle17 />
    </div>
  );
}

function LeadingElement21() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Leading element">
      <Switch17 />
    </div>
  );
}

function Content26() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] tracking-[0.5px] w-full">
        <p className="leading-[24px]">Slaktekylling</p>
      </div>
    </div>
  );
}

function StateLayer54() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative size-full">
          <LeadingElement21 />
          <Content26 />
        </div>
      </div>
    </div>
  );
}

function ListItemListItem0Density16() {
  return (
    <div className="content-stretch flex flex-col h-[56px] items-center justify-center min-h-[56px] relative shrink-0 w-[360px]" data-name="List item/List Item: 0 Density">
      <StateLayer54 />
    </div>
  );
}

function HandleShape18() {
  return (
    <div className="bg-[#74796a] content-stretch flex items-center justify-center overflow-clip p-[7px] relative rounded-[24px] shrink-0" data-name="Handle shape">
      <div className="rounded-[100px] shrink-0 size-[2px]" data-name="Container" />
    </div>
  );
}

function StateLayer55() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center p-[12px] relative rounded-[100px] shrink-0" data-name="State-layer">
      <HandleShape18 />
    </div>
  );
}

function Target18() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[-16px] p-[4px] top-1/2 translate-y-[-50%]" data-name="Target">
      <StateLayer55 />
    </div>
  );
}

function Handle18() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Handle">
      <Target18 />
    </div>
  );
}

function Switch18() {
  return (
    <div className="bg-[#e3e3d9] content-stretch flex h-[32px] items-center px-[8px] py-[2px] relative rounded-[100px] shrink-0 w-[52px]" data-name="Switch">
      <div aria-hidden="true" className="absolute border-2 border-[#74796a] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <Handle18 />
    </div>
  );
}

function LeadingElement22() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Leading element">
      <Switch18 />
    </div>
  );
}

function Content27() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] tracking-[0.5px] w-full">
        <p className="leading-[24px]">Salat</p>
      </div>
    </div>
  );
}

function StateLayer56() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative size-full">
          <LeadingElement22 />
          <Content27 />
        </div>
      </div>
    </div>
  );
}

function ListItemListItem0Density17() {
  return (
    <div className="content-stretch flex flex-col h-[56px] items-center justify-center min-h-[56px] relative shrink-0 w-[360px]" data-name="List item/List Item: 0 Density">
      <StateLayer56 />
    </div>
  );
}

function HandleShape19() {
  return (
    <div className="bg-[#74796a] content-stretch flex items-center justify-center overflow-clip p-[7px] relative rounded-[24px] shrink-0" data-name="Handle shape">
      <div className="rounded-[100px] shrink-0 size-[2px]" data-name="Container" />
    </div>
  );
}

function StateLayer57() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center p-[12px] relative rounded-[100px] shrink-0" data-name="State-layer">
      <HandleShape19 />
    </div>
  );
}

function Target19() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[-16px] p-[4px] top-1/2 translate-y-[-50%]" data-name="Target">
      <StateLayer57 />
    </div>
  );
}

function Handle19() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Handle">
      <Target19 />
    </div>
  );
}

function Switch19() {
  return (
    <div className="bg-[#e3e3d9] content-stretch flex h-[32px] items-center px-[8px] py-[2px] relative rounded-[100px] shrink-0 w-[52px]" data-name="Switch">
      <div aria-hidden="true" className="absolute border-2 border-[#74796a] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <Handle19 />
    </div>
  );
}

function LeadingElement23() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Leading element">
      <Switch19 />
    </div>
  );
}

function Content28() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] tracking-[0.5px] w-full">
        <p className="leading-[24px]">Rugeegg</p>
      </div>
    </div>
  );
}

function StateLayer58() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative size-full">
          <LeadingElement23 />
          <Content28 />
        </div>
      </div>
    </div>
  );
}

function ListItemListItem0Density18() {
  return (
    <div className="content-stretch flex flex-col h-[56px] items-center justify-center min-h-[56px] relative shrink-0 w-[360px]" data-name="List item/List Item: 0 Density">
      <StateLayer58 />
    </div>
  );
}

function HandleShape20() {
  return (
    <div className="bg-[#74796a] content-stretch flex items-center justify-center overflow-clip p-[7px] relative rounded-[24px] shrink-0" data-name="Handle shape">
      <div className="rounded-[100px] shrink-0 size-[2px]" data-name="Container" />
    </div>
  );
}

function StateLayer59() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center p-[12px] relative rounded-[100px] shrink-0" data-name="State-layer">
      <HandleShape20 />
    </div>
  );
}

function Target20() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[-16px] p-[4px] top-1/2 translate-y-[-50%]" data-name="Target">
      <StateLayer59 />
    </div>
  );
}

function Handle20() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Handle">
      <Target20 />
    </div>
  );
}

function Switch20() {
  return (
    <div className="bg-[#e3e3d9] content-stretch flex h-[32px] items-center px-[8px] py-[2px] relative rounded-[100px] shrink-0 w-[52px]" data-name="Switch">
      <div aria-hidden="true" className="absolute border-2 border-[#74796a] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <Handle20 />
    </div>
  );
}

function LeadingElement24() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Leading element">
      <Switch20 />
    </div>
  );
}

function Content29() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] tracking-[0.5px] w-full">
        <p className="leading-[24px]">Potet - tillegg FSA</p>
      </div>
    </div>
  );
}

function StateLayer60() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative size-full">
          <LeadingElement24 />
          <Content29 />
        </div>
      </div>
    </div>
  );
}

function ListItemListItem0Density19() {
  return (
    <div className="content-stretch flex flex-col h-[56px] items-center justify-center min-h-[56px] relative shrink-0 w-[360px]" data-name="List item/List Item: 0 Density">
      <StateLayer60 />
    </div>
  );
}

function HandleShape21() {
  return (
    <div className="bg-[#74796a] content-stretch flex items-center justify-center overflow-clip p-[7px] relative rounded-[24px] shrink-0" data-name="Handle shape">
      <div className="rounded-[100px] shrink-0 size-[2px]" data-name="Container" />
    </div>
  );
}

function StateLayer61() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center p-[12px] relative rounded-[100px] shrink-0" data-name="State-layer">
      <HandleShape21 />
    </div>
  );
}

function Target21() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[-16px] p-[4px] top-1/2 translate-y-[-50%]" data-name="Target">
      <StateLayer61 />
    </div>
  );
}

function Handle21() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Handle">
      <Target21 />
    </div>
  );
}

function Switch21() {
  return (
    <div className="bg-[#e3e3d9] content-stretch flex h-[32px] items-center px-[8px] py-[2px] relative rounded-[100px] shrink-0 w-[52px]" data-name="Switch">
      <div aria-hidden="true" className="absolute border-2 border-[#74796a] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <Handle21 />
    </div>
  );
}

function LeadingElement25() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Leading element">
      <Switch21 />
    </div>
  );
}

function Content30() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] tracking-[0.5px] w-full">
        <p className="leading-[24px]">Juletre</p>
      </div>
    </div>
  );
}

function StateLayer62() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative size-full">
          <LeadingElement25 />
          <Content30 />
        </div>
      </div>
    </div>
  );
}

function ListItemListItem0Density20() {
  return (
    <div className="content-stretch flex flex-col h-[56px] items-center justify-center min-h-[56px] relative shrink-0 w-[360px]" data-name="List item/List Item: 0 Density">
      <StateLayer62 />
    </div>
  );
}

function HandleShape22() {
  return (
    <div className="bg-[#74796a] content-stretch flex items-center justify-center overflow-clip p-[7px] relative rounded-[24px] shrink-0" data-name="Handle shape">
      <div className="rounded-[100px] shrink-0 size-[2px]" data-name="Container" />
    </div>
  );
}

function StateLayer63() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center p-[12px] relative rounded-[100px] shrink-0" data-name="State-layer">
      <HandleShape22 />
    </div>
  );
}

function Target22() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[-16px] p-[4px] top-1/2 translate-y-[-50%]" data-name="Target">
      <StateLayer63 />
    </div>
  );
}

function Handle22() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Handle">
      <Target22 />
    </div>
  );
}

function Switch22() {
  return (
    <div className="bg-[#e3e3d9] content-stretch flex h-[32px] items-center px-[8px] py-[2px] relative rounded-[100px] shrink-0 w-[52px]" data-name="Switch">
      <div aria-hidden="true" className="absolute border-2 border-[#74796a] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <Handle22 />
    </div>
  );
}

function LeadingElement26() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Leading element">
      <Switch22 />
    </div>
  );
}

function Content31() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] tracking-[0.5px] w-full">
        <p className="leading-[24px]">Tilleggskrav McDonalds</p>
      </div>
    </div>
  );
}

function StateLayer64() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative size-full">
          <LeadingElement26 />
          <Content31 />
        </div>
      </div>
    </div>
  );
}

function ListItemListItem0Density21() {
  return (
    <div className="content-stretch flex flex-col h-[56px] items-center justify-center min-h-[56px] relative shrink-0 w-[360px]" data-name="List item/List Item: 0 Density">
      <StateLayer64 />
    </div>
  );
}

function HandleShape23() {
  return (
    <div className="bg-[#74796a] content-stretch flex items-center justify-center overflow-clip p-[7px] relative rounded-[24px] shrink-0" data-name="Handle shape">
      <div className="rounded-[100px] shrink-0 size-[2px]" data-name="Container" />
    </div>
  );
}

function StateLayer65() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center p-[12px] relative rounded-[100px] shrink-0" data-name="State-layer">
      <HandleShape23 />
    </div>
  );
}

function Target23() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[-16px] p-[4px] top-1/2 translate-y-[-50%]" data-name="Target">
      <StateLayer65 />
    </div>
  );
}

function Handle23() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Handle">
      <Target23 />
    </div>
  );
}

function Switch23() {
  return (
    <div className="bg-[#e3e3d9] content-stretch flex h-[32px] items-center px-[8px] py-[2px] relative rounded-[100px] shrink-0 w-[52px]" data-name="Switch">
      <div aria-hidden="true" className="absolute border-2 border-[#74796a] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <Handle23 />
    </div>
  );
}

function LeadingElement27() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Leading element">
      <Switch23 />
    </div>
  );
}

function Content32() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] tracking-[0.5px] w-full">
        <p className="leading-[24px]">Tilleggskrav vannmiljø</p>
      </div>
    </div>
  );
}

function StateLayer66() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative size-full">
          <LeadingElement27 />
          <Content32 />
        </div>
      </div>
    </div>
  );
}

function ListItemListItem0Density22() {
  return (
    <div className="content-stretch flex flex-col h-[56px] items-center justify-center min-h-[56px] relative shrink-0 w-[360px]" data-name="List item/List Item: 0 Density">
      <StateLayer66 />
    </div>
  );
}

function HandleShape24() {
  return (
    <div className="bg-[#74796a] content-stretch flex items-center justify-center overflow-clip p-[7px] relative rounded-[24px] shrink-0" data-name="Handle shape">
      <div className="rounded-[100px] shrink-0 size-[2px]" data-name="Container" />
    </div>
  );
}

function StateLayer67() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center p-[12px] relative rounded-[100px] shrink-0" data-name="State-layer">
      <HandleShape24 />
    </div>
  );
}

function Target24() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[-16px] p-[4px] top-1/2 translate-y-[-50%]" data-name="Target">
      <StateLayer67 />
    </div>
  );
}

function Handle24() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Handle">
      <Target24 />
    </div>
  );
}

function Switch24() {
  return (
    <div className="bg-[#e3e3d9] content-stretch flex h-[32px] items-center px-[8px] py-[2px] relative rounded-[100px] shrink-0 w-[52px]" data-name="Switch">
      <div aria-hidden="true" className="absolute border-2 border-[#74796a] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <Handle24 />
    </div>
  );
}

function LeadingElement28() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Leading element">
      <Switch24 />
    </div>
  );
}

function Content33() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-center overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] tracking-[0.5px] w-full">
        <p className="leading-[24px]">Erter og bønner til konservesindustri</p>
      </div>
    </div>
  );
}

function StateLayer68() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative size-full">
          <LeadingElement28 />
          <Content33 />
        </div>
      </div>
    </div>
  );
}

function ListItemListItem0Density23() {
  return (
    <div className="content-stretch flex flex-col h-[56px] items-center justify-center min-h-[56px] relative shrink-0 w-[360px]" data-name="List item/List Item: 0 Density">
      <StateLayer68 />
    </div>
  );
}

function NotSelectedProducts() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Not Selected Products">
      <ExpandButton />
      <ListItemListItem0Density14 />
      <ListItemListItem0Density15 />
      <ListItemListItem0Density16 />
      <ListItemListItem0Density17 />
      <ListItemListItem0Density18 />
      <ListItemListItem0Density19 />
      <ListItemListItem0Density20 />
      <ListItemListItem0Density21 />
      <ListItemListItem0Density22 />
      <ListItemListItem0Density23 />
    </div>
  );
}

function SchemeDetails() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start justify-center min-h-px min-w-px relative shrink-0" data-name="Scheme details">
      <Title />
      <ListItemListItem0Density />
      <ListItemListItem0Density1 />
      <ListItemListItem0Density2 />
      <ListItemListItem0Density3 />
      <ListItemListItem0Density4 />
      <ListItemListItem0Density5 />
      <ListItemListItem0Density6 />
      <ListItemListItem0Density7 />
      <ListItemListItem0Density8 />
      <ListItemListItem0Density9 />
      <ListItemListItem0Density10 />
      <ListItemListItem0Density11 />
      <ListItemListItem0Density12 />
      <ListItemListItem0Density13 />
      <NotSelectedProducts />
    </div>
  );
}

function Content34() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="Content">
      <div className="content-stretch flex gap-[40px] items-start px-[40px] py-0 relative size-full">
        <SchemeList />
        <SchemeDetails />
      </div>
    </div>
  );
}

function TableContainer() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px overflow-clip relative shrink-0 w-full" data-name="Table Container">
      <Tabs />
      <Content34 />
    </div>
  );
}

function ProfileTabs() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0 w-full" data-name="Profile tabs">
      <TableContainer />
    </div>
  );
}

export default function ProfilePage() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-name="profile page">
      <MainProfileInformation />
      <ProfileTabs />
    </div>
  );
}