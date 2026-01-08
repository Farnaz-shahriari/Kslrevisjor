import svgPaths from "./svg-1vzfmd7o5i";

function Group() {
  return (
    <div className="absolute h-[23.57px] left-0 top-0 w-[78.233px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 79 24">
        <g id="Group 1">
          <path d={svgPaths.p170b9b00} fill="var(--fill-0, #79B61D)" id="Vector" />
          <path d={svgPaths.p2e49f100} fill="var(--fill-0, #79B61D)" id="Vector_2" />
          <path d={svgPaths.p194b95f0} fill="var(--fill-0, white)" id="Vector_3" />
          <g id="Group">
            <g id="Vector_4"></g>
            <path d={svgPaths.p26648e00} fill="var(--fill-0, #177312)" id="Vector_5" />
            <path d={svgPaths.p15eb980} fill="var(--fill-0, #008F00)" id="Vector_6" />
            <path d={svgPaths.p27d29980} fill="var(--fill-0, #79B61D)" id="Vector_7" />
            <path d={svgPaths.p2f715300} fill="var(--fill-0, #AFD377)" id="Vector_8" />
            <g id="Vector_9"></g>
          </g>
          <g id="Group_2">
            <path d={svgPaths.p2f6f7580} fill="var(--fill-0, #79B61D)" id="Vector_10" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute h-[25.301px] left-0 top-[30.38px] w-[92.774px]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 93 26">
        <g id="Group">
          <g id="Group_2">
            <path d={svgPaths.p22e00180} fill="var(--fill-0, black)" id="Vector" />
            <path d={svgPaths.p35b08100} fill="var(--fill-0, black)" id="Vector_2" />
            <path d={svgPaths.p3596f680} fill="var(--fill-0, black)" id="Vector_3" />
            <path d={svgPaths.pb281e00} fill="var(--fill-0, black)" id="Vector_4" />
            <path d={svgPaths.p18518b00} fill="var(--fill-0, black)" id="Vector_5" />
            <path d={svgPaths.p1f111800} fill="var(--fill-0, black)" id="Vector_6" />
            <path d={svgPaths.p25a4df00} fill="var(--fill-0, black)" id="Vector_7" />
            <path d={svgPaths.p36e2e900} fill="var(--fill-0, black)" id="Vector_8" />
            <path d={svgPaths.p2675c900} fill="var(--fill-0, black)" id="Vector_9" />
            <path d={svgPaths.p27f0ab00} fill="var(--fill-0, black)" id="Vector_10" />
            <path d={svgPaths.p283ce180} fill="var(--fill-0, black)" id="Vector_11" />
            <path d={svgPaths.p201d8a00} fill="var(--fill-0, black)" id="Vector_12" />
            <path d={svgPaths.p277fdc00} fill="var(--fill-0, black)" id="Vector_13" />
            <path d={svgPaths.p241f6b70} fill="var(--fill-0, black)" id="Vector_14" />
            <path d={svgPaths.p2959ef00} fill="var(--fill-0, black)" id="Vector_15" />
            <path d={svgPaths.p1214de00} fill="var(--fill-0, black)" id="Vector_16" />
            <path d={svgPaths.p2faf9e80} fill="var(--fill-0, black)" id="Vector_17" />
            <path d={svgPaths.p24216180} fill="var(--fill-0, black)" id="Vector_18" />
            <path d={svgPaths.p1599a100} fill="var(--fill-0, black)" id="Vector_19" />
            <path d={svgPaths.p128ae200} fill="var(--fill-0, black)" id="Vector_20" />
            <path d={svgPaths.p315b85c0} fill="var(--fill-0, black)" id="Vector_21" />
            <path d={svgPaths.p3c930bc0} fill="var(--fill-0, black)" id="Vector_22" />
            <path d={svgPaths.pff96c80} fill="var(--fill-0, black)" id="Vector_23" />
          </g>
          <path d={svgPaths.p860dd00} fill="var(--fill-0, black)" id="Vector_24" />
          <path d={svgPaths.p165b8b00} fill="var(--fill-0, black)" id="Vector_25" />
          <path d={svgPaths.p20480480} fill="var(--fill-0, black)" id="Vector_26" />
        </g>
      </svg>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents left-0 top-0">
      <Group />
      <Group2 />
    </div>
  );
}

function MainLogo() {
  return (
    <div className="h-[55.677px] relative shrink-0 w-[92.774px]" data-name="Main Logo">
      <Group1 />
    </div>
  );
}

function Logo() {
  return (
    <div className="content-stretch flex flex-col gap-[5.354px] h-[55.677px] items-start relative shrink-0" data-name="Logo">
      <MainLogo />
    </div>
  );
}

function HelpOutline() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="help_outline">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="help_outline">
          <rect fill="#44483D" height="24" width="24" />
          <path d={svgPaths.pe593d70} fill="var(--fill-0, #44483B)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function StateLayer() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center p-[8px] relative shrink-0" data-name="state-layer">
      <HelpOutline />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center overflow-clip relative rounded-[100px] shrink-0" data-name="container">
      <StateLayer />
    </div>
  );
}

function TrailingIcon1() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-center justify-center relative shrink-0 size-[48px]" data-name="trailing-icon 3">
      <Container />
    </div>
  );
}

function TrailingIcon() {
  return (
    <div className="content-stretch flex h-[48px] items-center justify-end relative shrink-0" data-name="trailing-icon">
      <TrailingIcon1 />
    </div>
  );
}

function GenericAvatar() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="Generic avatar">
      <div className="absolute inset-0" style={{ "--fill-0": "rgba(239, 241, 231, 1)" } as React.CSSProperties}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
          <g id="Generic avatar">
            <rect fill="var(--fill-0, #EFF1E7)" height="40" rx="20" width="40" />
            <g id="Avatar Placeholder">
              <path clipRule="evenodd" d={svgPaths.p16400780} fill="var(--fill-0, #284000)" fillRule="evenodd" />
              <path d={svgPaths.pfd6ae80} fill="var(--fill-0, #284000)" />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}

function ProfileAvator() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0" data-name="Profile Avator">
      <GenericAvatar />
    </div>
  );
}

function UserInfo() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center leading-[0] relative shrink-0 text-[#44483b]" data-name="User info">
      <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center relative shrink-0 text-[14px] tracking-[0.1px] w-[120px]">
        <p className="leading-[20px]">Liv Berg</p>
      </div>
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[11px] tracking-[0.5px] w-[120px]">
        <p className="leading-[16px]">Liv.berg@ksl.no</p>
      </div>
    </div>
  );
}

function StateLayer1() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-center px-[8px] py-[4px] relative shrink-0 w-[168px]" data-name="State Layer">
      <ProfileAvator />
      <UserInfo />
    </div>
  );
}

function UserProfile() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative rounded-[8px] shrink-0" data-name="User Profile">
      <StateLayer1 />
    </div>
  );
}

function RightSide() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Right Side">
      <TrailingIcon />
      <UserProfile />
    </div>
  );
}

function TopbarActions() {
  return (
    <div className="basis-0 content-stretch flex gap-[16px] grow items-center justify-end min-h-px min-w-px relative shrink-0" data-name="Topbar Actions">
      <RightSide />
    </div>
  );
}

function TopBar() {
  return (
    <div className="bg-white h-[64px] relative shrink-0 w-full" data-name="Top Bar">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[8px] h-[64px] items-center px-[24px] py-0 relative w-full">
          <Logo />
          <TopbarActions />
        </div>
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start min-h-px min-w-px relative shrink-0 text-[#1a1c16]" data-name="Text">
      <p className="font-['Manrope:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[16px] tracking-[0.15px] w-full">STIFTELSEN NORSK MAT</p>
      <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] tracking-[0.25px] w-full">Superadmin</p>
    </div>
  );
}

function Content() {
  return (
    <div className="basis-0 content-stretch flex gap-[16px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Content">
      <Text />
    </div>
  );
}

function Icon() {
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
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center p-[8px] relative shrink-0" data-name="state-layer">
      <Icon />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center overflow-clip relative rounded-[100px] shrink-0" data-name="container">
      <StateLayer2 />
    </div>
  );
}

function IconButton() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-center justify-center relative shrink-0 size-[48px]" data-name="Icon button">
      <Container1 />
    </div>
  );
}

function Header() {
  return (
    <div className="h-[72px] relative shrink-0 w-full" data-name="Header">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[72px] items-center pl-[16px] pr-[4px] py-[12px] relative w-full">
          <Content />
          <IconButton />
        </div>
      </div>
    </div>
  );
}

function MediaTextContent() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-center" data-name="Media & Text content">
      <Header />
    </div>
  );
}

function Content1() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative rounded-[12px] shrink-0 z-[2]" data-name="Content">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <MediaTextContent />
      </div>
      <div aria-hidden="true" className="absolute border border-[#c4c8b7] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Background() {
  return (
    <div className="absolute bg-white inset-0 rounded-[12px] z-[1]" data-name="Background">
      <div className="overflow-clip rounded-[inherit] size-full" />
      <div aria-hidden="true" className="absolute border border-[#c4c8b7] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function StackedCard() {
  return (
    <div className="content-stretch flex h-[80px] isolate items-start max-w-[480px] relative rounded-[12px] shrink-0 w-[480px]" data-name="Stacked card">
      <Content1 />
      <Background />
    </div>
  );
}

function Text1() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start min-h-px min-w-px relative shrink-0 text-[#1a1c16]" data-name="Text">
      <p className="font-['Manrope:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[16px] tracking-[0.15px] w-full">KETIL NORDSETH</p>
      <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] tracking-[0.25px] w-full">Ansatt</p>
    </div>
  );
}

function Content2() {
  return (
    <div className="basis-0 content-stretch flex gap-[16px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Content">
      <Text1 />
    </div>
  );
}

function Icon1() {
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

function StateLayer3() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center p-[8px] relative shrink-0" data-name="state-layer">
      <Icon1 />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center overflow-clip relative rounded-[100px] shrink-0" data-name="container">
      <StateLayer3 />
    </div>
  );
}

function IconButton1() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-center justify-center relative shrink-0 size-[48px]" data-name="Icon button">
      <Container2 />
    </div>
  );
}

function Header1() {
  return (
    <div className="h-[72px] relative shrink-0 w-full" data-name="Header">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[72px] items-center pl-[16px] pr-[4px] py-[12px] relative w-full">
          <Content2 />
          <IconButton1 />
        </div>
      </div>
    </div>
  );
}

function MediaTextContent1() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-center" data-name="Media & Text content">
      <Header1 />
    </div>
  );
}

function Content3() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative rounded-[12px] shrink-0 z-[2]" data-name="Content">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <MediaTextContent1 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#c4c8b7] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Background1() {
  return (
    <div className="absolute bg-white inset-0 rounded-[12px] z-[1]" data-name="Background">
      <div className="overflow-clip rounded-[inherit] size-full" />
      <div aria-hidden="true" className="absolute border border-[#c4c8b7] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function StackedCard1() {
  return (
    <div className="content-stretch flex h-[80px] isolate items-start max-w-[480px] relative rounded-[12px] shrink-0 w-[480px]" data-name="Stacked card">
      <Content3 />
      <Background1 />
    </div>
  );
}

function Text2() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start min-h-px min-w-px relative shrink-0 text-[#1a1c16]" data-name="Text">
      <p className="font-['Manrope:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[16px] tracking-[0.15px] w-full">KETIL NORDSETH</p>
      <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] tracking-[0.25px] w-full">Revisor</p>
    </div>
  );
}

function Content4() {
  return (
    <div className="basis-0 content-stretch flex gap-[16px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Content">
      <Text2 />
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

function StateLayer4() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center p-[8px] relative shrink-0" data-name="state-layer">
      <Icon2 />
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center overflow-clip relative rounded-[100px] shrink-0" data-name="container">
      <StateLayer4 />
    </div>
  );
}

function IconButton2() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-center justify-center relative shrink-0 size-[48px]" data-name="Icon button">
      <Container3 />
    </div>
  );
}

function Header2() {
  return (
    <div className="h-[72px] relative shrink-0 w-full" data-name="Header">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[72px] items-center pl-[16px] pr-[4px] py-[12px] relative w-full">
          <Content4 />
          <IconButton2 />
        </div>
      </div>
    </div>
  );
}

function MediaTextContent2() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-center" data-name="Media & Text content">
      <Header2 />
    </div>
  );
}

function Content5() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative rounded-[12px] shrink-0 z-[2]" data-name="Content">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <MediaTextContent2 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#c4c8b7] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Background2() {
  return (
    <div className="absolute bg-white inset-0 rounded-[12px] z-[1]" data-name="Background">
      <div className="overflow-clip rounded-[inherit] size-full" />
      <div aria-hidden="true" className="absolute border border-[#c4c8b7] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function StackedCard2() {
  return (
    <div className="content-stretch flex h-[80px] isolate items-start max-w-[480px] relative rounded-[12px] shrink-0 w-[480px]" data-name="Stacked card">
      <Content5 />
      <Background2 />
    </div>
  );
}

function Text3() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start min-h-px min-w-px relative shrink-0 text-[#1a1c16]" data-name="Text">
      <p className="font-['Manrope:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[16px] tracking-[0.15px] w-full">{`NORTURA SA `}</p>
      <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] tracking-[0.25px] w-full">Varemottakeradministrator</p>
    </div>
  );
}

function Content6() {
  return (
    <div className="basis-0 content-stretch flex gap-[16px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Content">
      <Text3 />
    </div>
  );
}

function Icon3() {
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
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center p-[8px] relative shrink-0" data-name="state-layer">
      <Icon3 />
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center overflow-clip relative rounded-[100px] shrink-0" data-name="container">
      <StateLayer5 />
    </div>
  );
}

function IconButton3() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-center justify-center relative shrink-0 size-[48px]" data-name="Icon button">
      <Container4 />
    </div>
  );
}

function Header3() {
  return (
    <div className="h-[72px] relative shrink-0 w-full" data-name="Header">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[72px] items-center pl-[16px] pr-[4px] py-[12px] relative w-full">
          <Content6 />
          <IconButton3 />
        </div>
      </div>
    </div>
  );
}

function MediaTextContent3() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-center" data-name="Media & Text content">
      <Header3 />
    </div>
  );
}

function Content7() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative rounded-[12px] shrink-0 z-[2]" data-name="Content">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <MediaTextContent3 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#c4c8b7] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Background3() {
  return (
    <div className="absolute bg-white inset-0 rounded-[12px] z-[1]" data-name="Background">
      <div className="overflow-clip rounded-[inherit] size-full" />
      <div aria-hidden="true" className="absolute border border-[#c4c8b7] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function StackedCard3() {
  return (
    <div className="content-stretch flex h-[80px] isolate items-start max-w-[480px] relative rounded-[12px] shrink-0 w-[480px]" data-name="Stacked card">
      <Content7 />
      <Background3 />
    </div>
  );
}

function Text4() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start min-h-px min-w-px relative shrink-0 text-[#1a1c16]" data-name="Text">
      <p className="font-['Manrope:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[16px] tracking-[0.15px] w-full">Fatland Jæren AS</p>
      <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] tracking-[0.25px] w-full">Varemottakeradministrator</p>
    </div>
  );
}

function Content8() {
  return (
    <div className="basis-0 content-stretch flex gap-[16px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Content">
      <Text4 />
    </div>
  );
}

function Icon4() {
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

function StateLayer6() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center p-[8px] relative shrink-0" data-name="state-layer">
      <Icon4 />
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center overflow-clip relative rounded-[100px] shrink-0" data-name="container">
      <StateLayer6 />
    </div>
  );
}

function IconButton4() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-center justify-center relative shrink-0 size-[48px]" data-name="Icon button">
      <Container5 />
    </div>
  );
}

function Header4() {
  return (
    <div className="h-[72px] relative shrink-0 w-full" data-name="Header">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[72px] items-center pl-[16px] pr-[4px] py-[12px] relative w-full">
          <Content8 />
          <IconButton4 />
        </div>
      </div>
    </div>
  );
}

function MediaTextContent4() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-center" data-name="Media & Text content">
      <Header4 />
    </div>
  );
}

function Content9() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative rounded-[12px] shrink-0 z-[2]" data-name="Content">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <MediaTextContent4 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#c4c8b7] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Background4() {
  return (
    <div className="absolute bg-white inset-0 rounded-[12px] z-[1]" data-name="Background">
      <div className="overflow-clip rounded-[inherit] size-full" />
      <div aria-hidden="true" className="absolute border border-[#c4c8b7] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function StackedCard4() {
  return (
    <div className="content-stretch flex h-[80px] isolate items-start max-w-[480px] relative rounded-[12px] shrink-0 w-[480px]" data-name="Stacked card">
      <Content9 />
      <Background4 />
    </div>
  );
}

function CompanyList() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="Company List">
      <StackedCard />
      <StackedCard1 />
      <StackedCard2 />
      <StackedCard3 />
      <StackedCard4 />
    </div>
  );
}

function Divider() {
  return (
    <div className="h-px relative shrink-0 w-full" data-name="Divider">
      <div className="absolute bottom-[-0.01%] left-0 right-0 top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1120 1">
          <g id="Divider">
            <line id="Divider_2" stroke="var(--stroke-0, #C4C8B7)" x1="4.37114e-08" x2="1120" y1="0.500098" y2="0.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p2a6e0600} fill="var(--fill-0, #44483B)" id="icon" />
        </g>
      </svg>
    </div>
  );
}

function StateLayer7() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-center justify-center px-[24px] py-[16px] relative shrink-0" data-name="State-layer">
      <Icon5 />
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#44483b] text-[16px] text-nowrap tracking-[0.15px]">
        <p className="leading-[24px] whitespace-pre">Be om tilgang til nytt foretak</p>
      </div>
    </div>
  );
}

function Content10() {
  return (
    <div className="relative rounded-[100px] shrink-0" data-name="Content">
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[inherit]">
        <StateLayer7 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#c4c8b7] border-solid inset-0 pointer-events-none rounded-[100px]" />
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Button">
      <Content10 />
    </div>
  );
}

function ContentContainer() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="Content Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] items-start pb-0 pt-[40px] px-[240px] relative size-full">
          <p className="font-['Quatro:Regular',sans-serif] leading-[36px] not-italic relative shrink-0 text-[#1a1c16] text-[28px] text-nowrap whitespace-pre">Hei Liv Berg!</p>
          <p className="font-['Manrope:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#1a1c16] text-[16px] text-nowrap tracking-[0.15px] whitespace-pre">Foretak du har tilgang til:</p>
          <CompanyList />
          <Divider />
          <p className="font-['Manrope:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#1a1c16] text-[16px] text-nowrap tracking-[0.15px] whitespace-pre">Trenger du tilgang til andre foretak?</p>
          <Button />
        </div>
      </div>
    </div>
  );
}

function MainContainer() {
  return (
    <div className="absolute content-stretch flex flex-col h-[1011px] items-start left-0 top-0 w-[1600px]" data-name="Main Container">
      <TopBar />
      <ContentContainer />
    </div>
  );
}

export default function ByttRole() {
  return (
    <div className="bg-white overflow-clip relative rounded-[28px] shadow-[9px_20px_30px_0px_rgba(0,0,0,0.15)] size-full" data-name="Bytt Role">
      <MainContainer />
    </div>
  );
}