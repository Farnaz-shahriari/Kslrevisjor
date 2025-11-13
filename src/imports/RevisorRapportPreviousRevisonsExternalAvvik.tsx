import svgPaths from "./svg-izrl73o48o";

function Group1() {
  return (
    <div className="absolute h-[23.569px] left-0 top-0 w-[78.233px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 79 24">
        <g id="Group 1">
          <path d={svgPaths.pc59adc0} fill="var(--fill-0, #79B61D)" id="Vector" />
          <path d={svgPaths.pb353100} fill="var(--fill-0, #79B61D)" id="Vector_2" />
          <path d={svgPaths.p38a1df00} fill="var(--fill-0, white)" id="Vector_3" />
          <g id="Group">
            <g id="Vector_4"></g>
            <path d={svgPaths.p1f855e00} fill="var(--fill-0, #177312)" id="Vector_5" />
            <path d={svgPaths.pfd51100} fill="var(--fill-0, #008F00)" id="Vector_6" />
            <path d={svgPaths.p3a663072} fill="var(--fill-0, #79B61D)" id="Vector_7" />
            <path d={svgPaths.p38968d00} fill="var(--fill-0, #AFD377)" id="Vector_8" />
            <g id="Vector_9"></g>
          </g>
          <g id="Group_2">
            <path d={svgPaths.pdc27900} fill="var(--fill-0, #79B61D)" id="Vector_10" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute h-[25.3px] left-0 top-[30.38px] w-[92.774px]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 93 26">
        <g id="Group">
          <g id="Group_2">
            <path d={svgPaths.p6ce0c80} fill="var(--fill-0, black)" id="Vector" />
            <path d={svgPaths.p3714de70} fill="var(--fill-0, black)" id="Vector_2" />
            <path d={svgPaths.p1f6d1000} fill="var(--fill-0, black)" id="Vector_3" />
            <path d={svgPaths.p30cda200} fill="var(--fill-0, black)" id="Vector_4" />
            <path d={svgPaths.p2de2ab40} fill="var(--fill-0, black)" id="Vector_5" />
            <path d={svgPaths.p6277170} fill="var(--fill-0, black)" id="Vector_6" />
            <path d={svgPaths.p6b6a670} fill="var(--fill-0, black)" id="Vector_7" />
            <path d={svgPaths.p2f29cd00} fill="var(--fill-0, black)" id="Vector_8" />
            <path d={svgPaths.p3b8dad00} fill="var(--fill-0, black)" id="Vector_9" />
            <path d={svgPaths.p1171c00} fill="var(--fill-0, black)" id="Vector_10" />
            <path d={svgPaths.p2f2cb380} fill="var(--fill-0, black)" id="Vector_11" />
            <path d={svgPaths.p2206be00} fill="var(--fill-0, black)" id="Vector_12" />
            <path d={svgPaths.p38461c00} fill="var(--fill-0, black)" id="Vector_13" />
            <path d={svgPaths.p246bf900} fill="var(--fill-0, black)" id="Vector_14" />
            <path d={svgPaths.p1b7451f0} fill="var(--fill-0, black)" id="Vector_15" />
            <path d={svgPaths.p202c0f40} fill="var(--fill-0, black)" id="Vector_16" />
            <path d={svgPaths.p12a36a00} fill="var(--fill-0, black)" id="Vector_17" />
            <path d={svgPaths.p2eb4d500} fill="var(--fill-0, black)" id="Vector_18" />
            <path d={svgPaths.p271fc640} fill="var(--fill-0, black)" id="Vector_19" />
            <path d={svgPaths.p30cc85e0} fill="var(--fill-0, black)" id="Vector_20" />
            <path d={svgPaths.p203ff100} fill="var(--fill-0, black)" id="Vector_21" />
            <path d={svgPaths.p192a4f00} fill="var(--fill-0, black)" id="Vector_22" />
            <path d={svgPaths.pe8ac500} fill="var(--fill-0, black)" id="Vector_23" />
          </g>
          <path d={svgPaths.p4e31200} fill="var(--fill-0, black)" id="Vector_24" />
          <path d={svgPaths.p2fd93200} fill="var(--fill-0, black)" id="Vector_25" />
          <path d={svgPaths.p3d9831f0} fill="var(--fill-0, black)" id="Vector_26" />
        </g>
      </svg>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents left-0 top-0">
      <Group1 />
      <Group5 />
    </div>
  );
}

function MainLogo() {
  return (
    <div className="h-[55.677px] relative shrink-0 w-[92.774px]" data-name="Main Logo">
      <Group2 />
    </div>
  );
}

function StateLayer() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center p-[8px] relative shrink-0" data-name="state-layer">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icon">
        <div className="absolute inset-[8.333%]" data-name="Vector">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <path d={svgPaths.p3bfea80} fill="var(--fill-0, #44483B)" id="Vector" />
          </svg>
        </div>
      </div>
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

function TrailingIcon() {
  return (
    <div className="content-stretch flex h-[48px] items-center justify-end relative shrink-0" data-name="trailing-icon">
      <div className="content-stretch cursor-pointer flex flex-col gap-[10px] items-center justify-center relative shrink-0 size-[48px]" data-name="trailing-icon 3">
        <Container />
      </div>
    </div>
  );
}

function ProfileAvator() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0" data-name="Profile Avator">
      <div className="bg-[#eff1e7] overflow-clip relative rounded-[100px] shrink-0 size-[40px]" data-name="Generic avatar">
        <div className="absolute bottom-[10.92%] left-[14.77%] right-[14.77%] top-1/4" data-name="Avatar Placeholder">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29 26">
            <g id="Avatar Placeholder">
              <path clipRule="evenodd" d={svgPaths.pb52dd00} fill="var(--fill-0, #284000)" fillRule="evenodd" />
              <path d={svgPaths.p1df7e300} fill="var(--fill-0, #284000)" />
            </g>
          </svg>
        </div>
      </div>
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

function RightSide() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Right Side">
      <TrailingIcon />
      <div className="content-stretch flex gap-[8px] items-center overflow-clip relative rounded-[8px] shrink-0" data-name="User Profile">
        <StateLayer1 />
      </div>
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

function StateLayer2() {
  return (
    <div className="content-stretch flex h-[56px] items-center justify-center relative shrink-0 w-full" data-name="State-layer">
      <div className="relative shrink-0 size-[24px]" data-name="Icon">
        <div className="absolute bottom-1/4 left-[12.5%] right-[12.5%] top-1/4" data-name="icon">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 12">
            <path d={svgPaths.p2304a600} fill="var(--fill-0, #44483B)" id="icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function MenuFab() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0" data-name="Menu & Fab">
      <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Icon button">
        <div className="content-stretch cursor-pointer flex flex-col items-center justify-center overflow-clip relative rounded-[16px] shrink-0 w-[56px]" data-name="Content">
          <StateLayer2 />
        </div>
      </div>
    </div>
  );
}

function StateLayer3() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-0 py-[4px] relative shrink-0 size-[56px]" data-name="State layer">
      <div className="absolute left-1/2 opacity-0 size-[24px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="Icon">
        <div className="absolute inset-0 overflow-clip" data-name="home">
          <div className="absolute inset-[14.58%_8.33%]" data-name="Vector">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 17">
              <path d={svgPaths.p11aa2f00} fill="var(--fill-0, #44483B)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <div className="relative shrink-0 size-[24px]" data-name="Icon">
        <div className="absolute inset-0 overflow-clip" data-name="home">
          <div className="absolute inset-[14.58%_8.33%]" data-name="Vector">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 17">
              <path d={svgPaths.p11aa2f00} fill="var(--fill-0, #44483B)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function IconContainer() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[28px] shrink-0" data-name="Icon container">
      <StateLayer3 />
    </div>
  );
}

function StateLayer4() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[56px]" data-name="State layer">
      <div className="absolute left-1/2 opacity-0 size-[24px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="Icon">
        <div className="absolute inset-0 overflow-clip" data-name="checklist">
          <div className="absolute inset-[18.6%_8.33%]" data-name="Vector">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 16">
              <path d={svgPaths.p11c05700} fill="var(--fill-0, #174295)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <div className="relative shrink-0 size-[24px]" data-name="Icon">
        <div className="absolute inset-0 overflow-clip" data-name="checklist">
          <div className="absolute inset-[18.6%_8.33%]" data-name="Vector">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 16">
              <path d={svgPaths.p11c05700} fill="var(--fill-0, #174295)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function IconContainer1() {
  return (
    <div className="bg-[#dae2ff] content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[28px] shrink-0" data-name="Icon container">
      <StateLayer4 />
    </div>
  );
}

function StateLayer5() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-0 py-[4px] relative shrink-0 size-[56px]" data-name="State layer">
      <div className="absolute left-1/2 opacity-0 size-[24px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="Icon">
        <div className="absolute inset-0 overflow-clip" data-name="report_problem">
          <div className="absolute inset-[10.42%_4.17%]" data-name="Vector">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 19">
              <path d={svgPaths.p6027970} fill="var(--fill-0, #44483B)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <div className="relative shrink-0 size-[24px]" data-name="Icon">
        <div className="absolute inset-0 overflow-clip" data-name="business">
          <div className="absolute inset-[12.5%_8.33%]" data-name="Vector">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 18">
              <path d={svgPaths.p7ec4d00} fill="var(--fill-0, #44483B)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function IconContainer2() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[28px] shrink-0" data-name="Icon container">
      <StateLayer5 />
    </div>
  );
}

function StateLayer6() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-0 py-[4px] relative shrink-0 size-[56px]" data-name="State layer">
      <div className="absolute left-1/2 opacity-0 size-[24px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="Icon">
        <div className="absolute inset-0 overflow-clip" data-name="report_problem">
          <div className="absolute inset-[10.42%_4.17%]" data-name="Vector">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 19">
              <path d={svgPaths.p6027970} fill="var(--fill-0, #44483B)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <div className="relative shrink-0 size-[24px]" data-name="Icon">
        <div className="absolute inset-0 overflow-clip" data-name="report_problem">
          <div className="absolute inset-[10.42%_4.17%]" data-name="Vector">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 19">
              <path d={svgPaths.p6027970} fill="var(--fill-0, #44483B)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function IconContainer3() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[28px] shrink-0" data-name="Icon container">
      <StateLayer6 />
    </div>
  );
}

function StateLayer7() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-0 py-[4px] relative shrink-0 size-[56px]" data-name="State layer">
      <div className="absolute left-1/2 opacity-0 size-[24px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="Icon">
        <div className="absolute inset-0 overflow-clip" data-name="upload_file">
          <div className="absolute inset-[8.33%_16.67%]" data-name="Vector">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 20">
              <path d={svgPaths.p27105900} fill="var(--fill-0, #44483B)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <div className="relative shrink-0 size-[24px]" data-name="Icon">
        <div className="absolute inset-0 overflow-clip" data-name="analytics">
          <div className="absolute inset-[12.5%]" data-name="Vector">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
              <g id="Vector">
                <path d={svgPaths.p1742ec00} fill="var(--fill-0, #44483B)" />
                <path d="M6 9H4V14H6V9Z" fill="var(--fill-0, #44483B)" />
                <path d="M14 4H12V14H14V4Z" fill="var(--fill-0, #44483B)" />
                <path d="M10 11H8V14H10V11Z" fill="var(--fill-0, #44483B)" />
                <path d="M10 7H8V9H10V7Z" fill="var(--fill-0, #44483B)" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function IconContainer4() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[28px] shrink-0" data-name="Icon container">
      <StateLayer7 />
    </div>
  );
}

function StateLayer8() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-0 py-[4px] relative shrink-0 size-[56px]" data-name="State layer">
      <div className="absolute left-1/2 opacity-0 size-[24px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="Icon">
        <div className="absolute inset-[8.333%]" data-name="icon">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <path d={svgPaths.p1b831700} fill="var(--fill-0, #174295)" id="icon" />
          </svg>
        </div>
      </div>
      <div className="relative shrink-0 size-[24px]" data-name="Icon">
        <div className="absolute inset-0 overflow-clip" data-name="upload_file">
          <div className="absolute inset-[8.33%_16.67%]" data-name="Vector">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 20">
              <path d={svgPaths.p27105900} fill="var(--fill-0, #44483B)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function IconContainer5() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[28px] shrink-0" data-name="Icon container">
      <StateLayer8 />
    </div>
  );
}

function Segments() {
  return (
    <div className="content-stretch cursor-pointer flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Segments">
      <div className="box-border content-stretch flex flex-col gap-[4px] items-center justify-center px-0 py-[4px] relative shrink-0 w-full" data-name="Nav item 01">
        <IconContainer />
      </div>
      <div className="box-border content-stretch flex flex-col gap-[4px] items-center justify-center px-0 py-[4px] relative shrink-0 w-full" data-name="Nav item 02">
        <IconContainer1 />
      </div>
      <div className="box-border content-stretch flex flex-col gap-[4px] items-center justify-center px-0 py-[4px] relative shrink-0 w-full" data-name="Nav item 03">
        <IconContainer2 />
      </div>
      <div className="box-border content-stretch flex flex-col gap-[4px] items-center justify-center px-0 py-[4px] relative shrink-0 w-full" data-name="Nav item 04">
        <IconContainer3 />
      </div>
      <div className="box-border content-stretch flex flex-col gap-[4px] items-center justify-center px-0 py-[4px] relative shrink-0 w-full" data-name="Nav item 05">
        <IconContainer4 />
      </div>
      <div className="box-border content-stretch flex flex-col gap-[4px] items-center justify-center px-0 py-[4px] relative shrink-0 w-full" data-name="Nav item 06">
        <IconContainer5 />
      </div>
    </div>
  );
}

function StateLayer9() {
  return (
    <div className="content-stretch flex h-[40px] items-center justify-center relative shrink-0 w-full" data-name="State-layer">
      <div className="relative shrink-0 size-[24px]" data-name="Icon">
        <div className="absolute inset-[16.667%]" data-name="icon">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
            <path d={svgPaths.p3573eb00} fill="var(--fill-0, #1A1C16)" id="icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function StateLayer10() {
  return (
    <div className="content-stretch flex h-[40px] items-center justify-center relative shrink-0 w-full" data-name="State-layer">
      <div className="relative shrink-0 size-[24px]" data-name="Icon">
        <div className="absolute inset-0 overflow-clip" data-name="message">
          <div className="absolute inset-[8.333%]" data-name="Vector">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
              <path d={svgPaths.p1e3a2f00} fill="var(--fill-0, #44483B)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function StateLayer11() {
  return (
    <div className="content-stretch flex h-[40px] items-center justify-center relative shrink-0 w-full" data-name="State-layer">
      <div className="relative shrink-0 size-[24px]" data-name="Icon">
        <div className="absolute inset-0 overflow-clip" data-name="question_mark">
          <div className="absolute inset-[10.42%_27.25%]" data-name="Vector">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 19">
              <path d={svgPaths.p2eda3e70} fill="var(--fill-0, #44483B)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function TrailingElements() {
  return (
    <div className="content-stretch flex h-[48px] items-center justify-end overflow-clip relative shrink-0" data-name="Trailing elements">
      <div className="content-stretch flex items-center justify-center relative shrink-0 size-[48px]" data-name="Trailing action 3">
        <div className="content-stretch cursor-pointer flex flex-col items-center justify-center overflow-clip relative rounded-[100px] shrink-0 w-[40px]" data-name="Content">
          <StateLayer10 />
        </div>
      </div>
      <div className="content-stretch flex items-center justify-center relative shrink-0 size-[48px]" data-name="Trailing action 1">
        <div className="content-stretch cursor-pointer flex flex-col items-center justify-center overflow-clip relative rounded-[100px] shrink-0 w-[40px]" data-name="Content">
          <StateLayer11 />
        </div>
      </div>
    </div>
  );
}

function TabContents() {
  return (
    <div className="basis-0 box-border content-stretch flex gap-[4px] grow items-center justify-center min-h-px min-w-px overflow-clip px-0 py-[14px] relative shrink-0" data-name="Tab Contents">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#44483b] text-[14px] text-center text-nowrap tracking-[0.1px]">
        <p className="leading-[20px] whitespace-pre">Planlegg revisjon</p>
      </div>
    </div>
  );
}

function StateLayer12() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="State-layer">
      <div className="flex flex-col items-center justify-end overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col items-center justify-end px-[16px] py-0 relative size-full">
          <TabContents />
        </div>
      </div>
    </div>
  );
}

function TabContents1() {
  return (
    <div className="basis-0 box-border content-stretch flex gap-[4px] grow items-center justify-center min-h-px min-w-px overflow-clip px-0 py-[14px] relative shrink-0" data-name="Tab Contents">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#44483b] text-[14px] text-center text-nowrap tracking-[0.1px]">
        <p className="leading-[20px] whitespace-pre">Revisjonsgrunnlag</p>
      </div>
    </div>
  );
}

function StateLayer13() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="State-layer">
      <div className="flex flex-col items-center justify-end overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col items-center justify-end px-[16px] py-0 relative size-full">
          <TabContents1 />
        </div>
      </div>
    </div>
  );
}

function TabContents2() {
  return (
    <div className="basis-0 box-border content-stretch flex gap-[4px] grow items-center justify-center min-h-px min-w-px overflow-clip px-0 py-[14px] relative shrink-0" data-name="Tab Contents">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#44483b] text-[14px] text-center text-nowrap tracking-[0.1px]">
        <p className="leading-[20px] whitespace-pre">Dokumentoversikt</p>
      </div>
    </div>
  );
}

function StateLayer14() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="State-layer">
      <div className="flex flex-col items-center justify-end overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col items-center justify-end px-[16px] py-0 relative size-full">
          <TabContents2 />
        </div>
      </div>
    </div>
  );
}

function TabContents3() {
  return (
    <div className="basis-0 box-border content-stretch flex gap-[4px] grow items-center justify-center min-h-px min-w-px overflow-clip px-0 py-[14px] relative shrink-0" data-name="Tab Contents">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#44483b] text-[14px] text-center text-nowrap tracking-[0.1px]">
        <p className="leading-[20px] whitespace-pre">Registrer revisjon</p>
      </div>
    </div>
  );
}

function StateLayer15() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="State-layer">
      <div className="flex flex-col items-center justify-end overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col items-center justify-end px-[16px] py-0 relative size-full">
          <TabContents3 />
        </div>
      </div>
    </div>
  );
}

function Indicator() {
  return (
    <div className="absolute bottom-0 h-[14px] left-0 right-0" data-name="Indicator">
      <div className="absolute bg-[#4a671e] bottom-0 h-[3px] left-[2px] right-[2px] rounded-tl-[100px] rounded-tr-[100px]" data-name="Shape" />
    </div>
  );
}

function TabContents4() {
  return (
    <div className="basis-0 box-border content-stretch flex gap-[4px] grow items-center justify-center min-h-px min-w-px overflow-clip px-0 py-[14px] relative shrink-0" data-name="Tab Contents">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#4a671e] text-[14px] text-center text-nowrap tracking-[0.1px]">
        <p className="leading-[20px] whitespace-pre">Skriv rapport</p>
      </div>
      <Indicator />
    </div>
  );
}

function StateLayer16() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-col grow items-center justify-end min-h-px min-w-px overflow-clip px-[16px] py-0 relative shrink-0" data-name="State-layer">
      <TabContents4 />
    </div>
  );
}

function TabGroup() {
  return (
    <div className="relative shrink-0 w-full" data-name="Tab group">
      <div className="size-full">
        <div className="box-border content-stretch cursor-pointer flex items-start pl-[52px] pr-0 py-0 relative w-full">
          <div className="bg-white content-stretch flex flex-col h-[48px] items-center justify-end overflow-clip relative shrink-0" data-name="Tab 1">
            <StateLayer12 />
          </div>
          <div className="bg-white content-stretch flex flex-col h-[48px] items-center justify-end overflow-clip relative shrink-0" data-name="Tab 2">
            <StateLayer13 />
          </div>
          <div className="bg-white content-stretch flex flex-col h-[48px] items-center justify-end overflow-clip relative shrink-0" data-name="Tab 3">
            <StateLayer14 />
          </div>
          <div className="bg-white content-stretch flex flex-col h-[48px] items-center justify-end overflow-clip relative shrink-0" data-name="Tab 4">
            <StateLayer15 />
          </div>
          <div className="bg-white content-stretch flex flex-col h-[48px] items-center justify-end overflow-clip relative shrink-0" data-name="Tab 6">
            <StateLayer16 />
          </div>
        </div>
      </div>
    </div>
  );
}

function LeadingElement() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0" data-name="Leading element">
      <div className="bg-[#eff1e7] overflow-clip relative rounded-[100px] shrink-0 size-[40px]" data-name=".Building Blocks/Monogram">
        <div className="absolute flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] left-1/2 size-[40px] text-[#284000] text-[16px] text-center top-1/2 tracking-[0.15px] translate-x-[-50%] translate-y-[-50%]">
          <p className="leading-[24px]">1</p>
        </div>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#174295] text-[16px] tracking-[0.5px] w-full">
        <p className="leading-[24px]">Informasjon om foretaket</p>
      </div>
    </div>
  );
}

function StateLayer17() {
  return (
    <div className="basis-0 box-border content-stretch flex gap-[16px] grow items-center min-h-px min-w-px px-0 py-[8px] relative shrink-0 w-full" data-name="state-layer">
      <LeadingElement />
      <Content />
    </div>
  );
}

function Frame7() {
  return (
    <div className="basis-0 grow h-[64px] min-h-px min-w-px relative shrink-0">
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] h-[64px] items-start justify-center px-[8px] py-0 relative w-full">
          <div className="content-stretch flex flex-col h-[72px] items-start justify-center min-h-[56px] relative shrink-0 w-full" data-name="List item/List Item: 0 Density">
            <div className="absolute inset-0" data-name="state-layer overlay" />
            <StateLayer17 />
          </div>
        </div>
      </div>
    </div>
  );
}

function LeadingElement1() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0" data-name="Leading element">
      <div className="bg-[#eff1e7] overflow-clip relative rounded-[100px] shrink-0 size-[40px]" data-name=".Building Blocks/Monogram">
        <div className="absolute flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] left-1/2 size-[40px] text-[#284000] text-[16px] text-center top-1/2 tracking-[0.15px] translate-x-[-50%] translate-y-[-50%]">
          <p className="leading-[24px]">2</p>
        </div>
      </div>
    </div>
  );
}

function Content1() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#174295] text-[16px] tracking-[0.5px] w-full">
        <p className="leading-[24px]">Tidligere revisjon</p>
      </div>
    </div>
  );
}

function StateLayer18() {
  return (
    <div className="basis-0 box-border content-stretch flex gap-[16px] grow items-center min-h-px min-w-px px-0 py-[8px] relative shrink-0 w-full" data-name="state-layer">
      <LeadingElement1 />
      <Content1 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="basis-0 grow h-[64px] min-h-px min-w-px relative shrink-0">
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] h-[64px] items-start justify-center px-[8px] py-0 relative w-full">
          <div className="content-stretch flex flex-col h-[72px] items-start justify-center min-h-[72px] relative shrink-0 w-full" data-name="List item/List Item: 0 Density">
            <div className="absolute inset-0" data-name="state-layer overlay" />
            <StateLayer18 />
          </div>
        </div>
      </div>
    </div>
  );
}

function LeadingElement2() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0" data-name="Leading element">
      <div className="bg-[#eff1e7] overflow-clip relative rounded-[100px] shrink-0 size-[40px]" data-name=".Building Blocks/Monogram">
        <div className="absolute flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] left-1/2 size-[40px] text-[#284000] text-[16px] text-center top-1/2 tracking-[0.15px] translate-x-[-50%] translate-y-[-50%]">
          <p className="leading-[24px]">3</p>
        </div>
      </div>
    </div>
  );
}

function Content2() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] tracking-[0.5px] w-full">
        <p className="leading-[24px]">{`Svaroversikt `}</p>
      </div>
    </div>
  );
}

function StateLayer19() {
  return (
    <div className="basis-0 box-border content-stretch flex gap-[16px] grow items-center min-h-px min-w-px px-0 py-[8px] relative shrink-0 w-full" data-name="state-layer">
      <LeadingElement2 />
      <Content2 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="basis-0 grow h-[64px] min-h-px min-w-px relative shrink-0">
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] h-[64px] items-start justify-center px-[8px] py-0 relative w-full">
          <div className="content-stretch flex flex-col h-[72px] items-start justify-center min-h-[56px] relative shrink-0 w-full" data-name="List item/List Item: 0 Density">
            <div className="absolute inset-0" data-name="state-layer overlay" />
            <StateLayer19 />
          </div>
        </div>
      </div>
    </div>
  );
}

function LeadingElement3() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0" data-name="Leading element">
      <div className="bg-[#eff1e7] overflow-clip relative rounded-[100px] shrink-0 size-[40px]" data-name=".Building Blocks/Monogram">
        <div className="absolute flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] left-1/2 size-[40px] text-[#284000] text-[16px] text-center top-1/2 tracking-[0.15px] translate-x-[-50%] translate-y-[-50%]">
          <p className="leading-[24px]">4</p>
        </div>
      </div>
    </div>
  );
}

function Content3() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] tracking-[0.5px] w-full">
        <p className="leading-[24px]">{`Avvikshåndtering `}</p>
      </div>
    </div>
  );
}

function StateLayer20() {
  return (
    <div className="basis-0 box-border content-stretch flex gap-[16px] grow items-center min-h-px min-w-px px-0 py-[8px] relative shrink-0 w-full" data-name="state-layer">
      <LeadingElement3 />
      <Content3 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="basis-0 grow h-[64px] min-h-px min-w-px relative shrink-0">
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] h-[64px] items-start justify-center px-[8px] py-0 relative w-full">
          <div className="content-stretch flex flex-col h-[72px] items-center justify-center min-h-[56px] relative shrink-0 w-full" data-name="List item/List Item: 0 Density">
            <div className="absolute inset-0" data-name="state-layer overlay" />
            <StateLayer20 />
          </div>
        </div>
      </div>
    </div>
  );
}

function LeadingElement4() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0" data-name="Leading element">
      <div className="bg-[#eff1e7] overflow-clip relative rounded-[100px] shrink-0 size-[40px]" data-name=".Building Blocks/Monogram">
        <div className="absolute flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] left-1/2 size-[40px] text-[#284000] text-[16px] text-center top-1/2 tracking-[0.15px] translate-x-[-50%] translate-y-[-50%]">
          <p className="leading-[24px]">5</p>
        </div>
      </div>
    </div>
  );
}

function Content4() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] tracking-[0.5px] w-full">
        <p className="leading-[24px]">{`Hovedkonklusjon `}</p>
      </div>
    </div>
  );
}

function StateLayer21() {
  return (
    <div className="basis-0 box-border content-stretch flex gap-[16px] grow items-center min-h-px min-w-px px-0 py-[8px] relative shrink-0 w-full" data-name="state-layer">
      <LeadingElement4 />
      <Content4 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="basis-0 grow h-[64px] min-h-px min-w-px relative shrink-0">
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] h-[64px] items-start justify-center px-[8px] py-0 relative w-full">
          <div className="content-stretch flex flex-col h-[72px] items-center justify-center min-h-[56px] relative shrink-0 w-full" data-name="List item/List Item: 0 Density">
            <div className="absolute inset-0" data-name="state-layer overlay" />
            <StateLayer21 />
          </div>
        </div>
      </div>
    </div>
  );
}

function StateLayer22() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-center justify-center opacity-[0.38] px-[24px] py-[16px] relative shrink-0" data-name="State-layer">
      <div className="relative shrink-0 size-[24px]" data-name="Icon">
        <div className="absolute inset-0 overflow-clip" data-name="lock">
          <div className="absolute inset-[6.25%_16.67%]" data-name="Vector">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 21">
              <path d={svgPaths.p29f40100} fill="var(--fill-0, #44483B)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[16px] text-nowrap text-white tracking-[0.15px]">
        <p className="leading-[24px] whitespace-pre">Lås rapport</p>
      </div>
    </div>
  );
}

function Frame93() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Button">
        <div className="bg-[#4a671e] content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0" data-name="Content">
          <StateLayer22 />
        </div>
      </div>
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full relative shrink-0 text-[#44483b] text-[14px] tracking-[0.25px] w-[min-content]">
        <p className="leading-[20px]">Rapporten inneholder ufullstendige deler</p>
      </div>
    </div>
  );
}

function Summary() {
  return (
    <div className="relative shrink-0 w-full" data-name="Summary">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col items-start px-[16px] py-[24px] relative w-full">
          <Frame93 />
        </div>
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[24px] relative shrink-0 text-[#1a1c16] text-[16px] tracking-[0.5px] w-full">
        <p className="mb-0">{`Tabellen over åpne og lukkede avvik fra siste eksterne revisjon og egenrevisjon vises ikke i rapporten. `}</p>
        <p>Åpne avvik fra egenrevisjon blir markert som lukket.</p>
      </div>
    </div>
  );
}

function LeadingElement5() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Leading element">
      <div className="relative shrink-0 size-[24px]" data-name="description">
        <div className="absolute inset-0 overflow-clip" data-name="description">
          <div className="absolute inset-[8.33%_16.67%]" data-name="Vector">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 20">
              <path d={svgPaths.p3f9a2700} fill="var(--fill-0, #44483B)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Content5() {
  return (
    <div className="basis-0 content-stretch flex flex-col font-['Manrope:Regular',sans-serif] font-normal grow items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] tracking-[0.5px] w-full">
        <p className="leading-[24px]">Oppfølging fra tidligere revisjoner</p>
      </div>
      <p className="leading-[20px] relative shrink-0 text-[#44483b] text-[14px] tracking-[0.25px] w-full">valgfri</p>
      <p className="h-0 leading-[20px] opacity-0 relative shrink-0 text-[#44483b] text-[14px] tracking-[0.25px] w-full">Alle avvik fra forrige revisjon er lukket, og tiltakene er godt dokumentert.</p>
    </div>
  );
}

function StateLayer23() {
  return (
    <div className="content-stretch flex h-[40px] items-center justify-center relative shrink-0 w-full" data-name="State-layer">
      <div className="relative shrink-0 size-[24px]" data-name="Icon">
        <div className="absolute inset-[20.833%]" data-name="icon">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
            <path d={svgPaths.p2ccb20} fill="var(--fill-0, #44483B)" id="icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame15() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center p-[8px] relative w-full">
          <LeadingElement5 />
          <Content5 />
          <div className="content-stretch flex items-center justify-center relative shrink-0 size-[48px]" data-name="Icon button">
            <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[100px] shrink-0 w-[40px]" data-name="Content">
              <StateLayer23 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function FocusInformation() {
  return (
    <div className="relative shrink-0 w-full" data-name="Focus information">
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-start justify-center px-[40px] py-[16px] relative w-full">
          <div className="flex flex-col font-['Quatro:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1a1c16] text-[22px] w-[1030px]">
            <p className="leading-[28px]">{`Tidligere revisjoner `}</p>
          </div>
          <Frame10 />
          <button className="box-border content-stretch cursor-pointer flex flex-col gap-[8px] items-start justify-center max-w-[520px] min-h-[64px] overflow-visible pb-0 pt-[8px] px-0 relative shrink-0 w-full" data-name="App User Input">
            <Frame15 />
          </button>
        </div>
      </div>
    </div>
  );
}

function TabContents5() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center justify-center min-h-px min-w-px relative shrink-0" data-name="Tab Contents">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[14px] text-center text-nowrap tracking-[0.1px]">
        <p className="leading-[20px] whitespace-pre">Ekstern revisjon</p>
      </div>
    </div>
  );
}

function StateLayer24() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="State-layer">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col items-center justify-center px-[16px] py-[14px] relative size-full">
          <TabContents5 />
          <div className="absolute bg-[#4a671e] bottom-0 h-[2px] left-0 right-0" data-name="Indicator" />
        </div>
      </div>
    </div>
  );
}

function TabContents6() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center justify-center min-h-px min-w-px relative shrink-0" data-name="Tab Contents">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#44483b] text-[14px] text-center text-nowrap tracking-[0.1px]">
        <p className="leading-[20px] whitespace-pre">Egenrevisjon</p>
      </div>
    </div>
  );
}

function StateLayer25() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-col grow items-center justify-center min-h-px min-w-px overflow-clip px-[16px] py-[14px] relative shrink-0" data-name="State-layer">
      <TabContents6 />
    </div>
  );
}

function TabContents7() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center justify-center min-h-px min-w-px relative shrink-0" data-name="Tab Contents">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#44483b] text-[14px] text-center text-nowrap tracking-[0.1px]">
        <p className="leading-[20px] whitespace-pre">Forbedringspunkter</p>
      </div>
    </div>
  );
}

function StateLayer26() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="State-layer">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col items-center justify-center px-[16px] py-[14px] relative size-full">
          <TabContents7 />
        </div>
      </div>
    </div>
  );
}

function TabContents8() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center justify-center min-h-px min-w-px relative shrink-0" data-name="Tab Contents">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#44483b] text-[14px] text-center text-nowrap tracking-[0.1px]">
        <p className="leading-[20px] whitespace-pre">Positive observasjoner</p>
      </div>
    </div>
  );
}

function StateLayer27() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="State-layer">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col items-center justify-center px-[16px] py-[14px] relative size-full">
          <TabContents8 />
        </div>
      </div>
    </div>
  );
}

function TabGroup1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Tab group">
      <div className="size-full">
        <div className="box-border content-stretch cursor-pointer flex items-start pl-[52px] pr-0 py-0 relative w-full">
          <div className="bg-white content-stretch flex flex-col h-[48px] items-center justify-end overflow-clip relative shrink-0" data-name="Tab 1">
            <StateLayer24 />
          </div>
          <div className="bg-white content-stretch flex flex-col h-[48px] items-center justify-end overflow-clip relative shrink-0" data-name="Tab 2">
            <StateLayer25 />
          </div>
          <div className="bg-white content-stretch flex flex-col h-[48px] items-center justify-end overflow-clip relative shrink-0" data-name="Tab 4">
            <StateLayer26 />
          </div>
          <div className="bg-white content-stretch flex flex-col h-[48px] items-center justify-end overflow-clip relative shrink-0" data-name="Tab 5">
            <StateLayer27 />
          </div>
        </div>
      </div>
    </div>
  );
}

function StateLayer28() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center px-[16px] py-[8px] size-full" />
      </div>
    </div>
  );
}

function StateLayer29() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center px-[16px] py-[8px] size-full" />
      </div>
    </div>
  );
}

function StateLayer30() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center px-[16px] py-[8px] size-full" />
      </div>
    </div>
  );
}

function StateLayer31() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center px-[16px] py-[8px] size-full" />
      </div>
    </div>
  );
}

function StateLayer32() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center px-[16px] py-[8px] size-full" />
      </div>
    </div>
  );
}

function Content11() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] min-w-full overflow-ellipsis overflow-hidden relative shrink-0 text-[#1a1c16] text-[14px] text-nowrap tracking-[0.1px] w-[min-content]">
        <p className="[white-space-collapse:collapse] leading-[20px] overflow-ellipsis overflow-hidden">Tidligere avvik</p>
      </div>
    </div>
  );
}

function StateLayer33() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative size-full">
          <Content11 />
        </div>
      </div>
    </div>
  );
}

function StateLayer34() {
  return (
    <div className="box-border content-stretch flex gap-[8px] h-[32px] items-center justify-center pl-[8px] pr-[16px] py-[6px] relative shrink-0" data-name="state-layer">
      <div className="relative shrink-0 size-[18px]" data-name="Icon">
        <div className="absolute inset-0 overflow-clip" data-name="report_problem">
          <div className="absolute inset-[10.42%_4.17%]" data-name="Vector">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 15">
              <path d={svgPaths.p6a07000} fill="var(--fill-0, #410002)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#410002] text-[14px] text-center text-nowrap tracking-[0.1px]">
        <p className="leading-[20px] whitespace-pre">Stort avvik</p>
      </div>
    </div>
  );
}

function LeadingElement6() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Leading element">
      <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Deviation Grading chip">
        <div className="bg-[#ffdad6] cursor-pointer relative rounded-[8px] shrink-0" data-name="Assistive chip">
          <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[inherit]">
            <StateLayer34 />
          </div>
          <div aria-hidden="true" className="absolute border border-[#c4c8b7] border-solid inset-0 pointer-events-none rounded-[8px]" />
        </div>
      </div>
    </div>
  );
}

function StateLayer35() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative size-full">
          <LeadingElement6 />
        </div>
      </div>
    </div>
  );
}

function StateLayer36() {
  return (
    <div className="box-border content-stretch flex gap-[8px] h-[32px] items-center justify-center pl-[8px] pr-[16px] py-[6px] relative shrink-0" data-name="state-layer">
      <div className="relative shrink-0 size-[18px]" data-name="Icon">
        <div className="absolute inset-0 overflow-clip" data-name="report_problem">
          <div className="absolute inset-[10.42%_4.17%]" data-name="Vector">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 15">
              <path d={svgPaths.p6a07000} fill="var(--fill-0, #3D2100)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#3d2100] text-[14px] text-center text-nowrap tracking-[0.1px]">
        <p className="leading-[20px] whitespace-pre">Avvik</p>
      </div>
    </div>
  );
}

function LeadingElement7() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Leading element">
      <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Deviation Grading chip">
        <div className="bg-[#fdd19f] cursor-pointer relative rounded-[8px] shrink-0" data-name="Assistive chip">
          <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[inherit]">
            <StateLayer36 />
          </div>
          <div aria-hidden="true" className="absolute border border-[#c4c8b7] border-solid inset-0 pointer-events-none rounded-[8px]" />
        </div>
      </div>
    </div>
  );
}

function StateLayer37() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative size-full">
          <LeadingElement7 />
        </div>
      </div>
    </div>
  );
}

function StateLayer38() {
  return (
    <div className="box-border content-stretch flex gap-[8px] h-[32px] items-center justify-center pl-[8px] pr-[16px] py-[6px] relative shrink-0" data-name="state-layer">
      <div className="relative shrink-0 size-[18px]" data-name="Icon">
        <div className="absolute inset-0 overflow-clip" data-name="report_problem">
          <div className="absolute inset-[10.42%_4.17%]" data-name="Vector">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 15">
              <path d={svgPaths.p6a07000} fill="var(--fill-0, #3D2C00)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#3d2c00] text-[14px] text-center text-nowrap tracking-[0.1px]">
        <p className="leading-[20px] whitespace-pre">Lite avvik</p>
      </div>
    </div>
  );
}

function LeadingElement8() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Leading element">
      <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Deviation Grading chip">
        <div className="bg-[#fdeeb1] cursor-pointer relative rounded-[8px] shrink-0" data-name="Assistive chip">
          <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[inherit]">
            <StateLayer38 />
          </div>
          <div aria-hidden="true" className="absolute border border-[#c4c8b7] border-solid inset-0 pointer-events-none rounded-[8px]" />
        </div>
      </div>
    </div>
  );
}

function StateLayer39() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative size-full">
          <LeadingElement8 />
        </div>
      </div>
    </div>
  );
}

function TableColumn() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[144px]" data-name="Table Column">
      <div className="content-stretch flex flex-col gap-[10px] h-[56px] items-start relative shrink-0 w-full" data-name="Chip cells">
        <div className="basis-0 content-stretch flex flex-col grow items-center justify-center min-h-[56px] min-w-px relative shrink-0 w-full" data-name="List item/List Item: 0 Density">
          <div className="absolute inset-0" data-name="state-layer overlay" />
          <StateLayer33 />
          <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Divider">
            <div className="h-0 relative shrink-0 w-full" data-name="Divider">
              <div className="absolute bottom-0 left-0 right-0 top-[-1px]" style={{ "--stroke-0": "rgba(196, 200, 183, 1)" } as React.CSSProperties}>
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 144 1">
                  <line id="Divider" stroke="var(--stroke-0, #C4C8B7)" x2="144" y1="0.5" y2="0.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#dae2ff] content-stretch flex h-[80px] items-start relative shrink-0 w-full" data-name="Chip cells">
        <div className="basis-0 content-stretch flex flex-col grow h-full items-center justify-center min-h-[56px] min-w-px relative shrink-0" data-name="List item/List Item: 0 Density">
          <div className="absolute inset-0" data-name="state-layer overlay" />
          <StateLayer35 />
          <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Divider">
            <div className="h-0 relative shrink-0 w-full" data-name="Divider">
              <div className="absolute bottom-0 left-0 right-0 top-[-1px]" style={{ "--stroke-0": "rgba(196, 200, 183, 1)" } as React.CSSProperties}>
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 144 1">
                  <line id="Divider" stroke="var(--stroke-0, #C4C8B7)" x2="144" y1="0.5" y2="0.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex h-[80px] items-start relative shrink-0 w-full" data-name="Chip cells">
        <div className="basis-0 content-stretch flex flex-col grow h-[80px] items-center justify-center min-h-[56px] min-w-px relative shrink-0" data-name="List item/List Item: 0 Density">
          <div className="absolute inset-0" data-name="state-layer overlay" />
          <StateLayer37 />
          <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Divider">
            <div className="h-0 relative shrink-0 w-full" data-name="Divider">
              <div className="absolute bottom-0 left-0 right-0 top-[-1px]" style={{ "--stroke-0": "rgba(196, 200, 183, 1)" } as React.CSSProperties}>
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 144 1">
                  <line id="Divider" stroke="var(--stroke-0, #C4C8B7)" x2="144" y1="0.5" y2="0.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex h-[80px] items-start relative shrink-0 w-full" data-name="Chip cells">
        <div className="basis-0 content-stretch flex flex-col grow h-[80px] items-center justify-center min-h-[56px] min-w-px relative shrink-0" data-name="List item/List Item: 0 Density">
          <div className="absolute inset-0" data-name="state-layer overlay" />
          <StateLayer39 />
          <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Divider">
            <div className="h-0 relative shrink-0 w-full" data-name="Divider">
              <div className="absolute bottom-0 left-0 right-0 top-[-1px]" style={{ "--stroke-0": "rgba(196, 200, 183, 1)" } as React.CSSProperties}>
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 144 1">
                  <line id="Divider" stroke="var(--stroke-0, #C4C8B7)" x2="144" y1="0.5" y2="0.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Content12() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] overflow-ellipsis overflow-hidden relative shrink-0 text-[#1a1c16] text-[14px] text-nowrap tracking-[0.1px] w-full">
        <p className="[white-space-collapse:collapse] leading-[20px] overflow-ellipsis overflow-hidden">Sjekklistepunkt</p>
      </div>
    </div>
  );
}

function StateLayer40() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center justify-center px-[16px] py-[8px] relative size-full">
          <Content12 />
        </div>
      </div>
    </div>
  );
}

function Content13() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full relative shrink-0 text-[#174295] text-[14px] tracking-[0.25px] w-[min-content]">
        <p className="leading-[20px]">1.1.1 - Har du oversikt over alle driftsmidler du har kjøpt, og alle produkter du har solgt?</p>
      </div>
    </div>
  );
}

function StateLayer41() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative size-full">
          <Content13 />
        </div>
      </div>
    </div>
  );
}

function Content14() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full relative shrink-0 text-[#1a1c16] text-[14px] tracking-[0.25px] w-[min-content]">
        <p className="leading-[20px]">1.1.2 - Noterer du gjødselmengdene som brukes?</p>
      </div>
    </div>
  );
}

function StateLayer42() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative size-full">
          <Content14 />
        </div>
      </div>
    </div>
  );
}

function Content15() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full relative shrink-0 text-[#1a1c16] text-[14px] tracking-[0.25px] w-[min-content]">
        <p className="leading-[20px]">1.3.2 - Har du spredt husdyrgjødsla i perioden fra 15. februar til 1. november og kun på snø- og frostfri mark?</p>
      </div>
    </div>
  );
}

function StateLayer43() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative size-full">
          <Content15 />
        </div>
      </div>
    </div>
  );
}

function TableColumn1() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="Table Column">
      <div className="content-stretch flex flex-col gap-[10px] h-[56px] items-start relative shrink-0 w-full" data-name="Chip cells">
        <div className="basis-0 content-stretch flex flex-col grow items-center justify-center min-h-[56px] min-w-px relative shrink-0 w-full" data-name="List item/List Item: 0 Density">
          <div className="absolute inset-0" data-name="state-layer overlay" />
          <StateLayer40 />
          <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Divider">
            <div className="h-0 relative shrink-0 w-full" data-name="Divider">
              <div className="absolute bottom-0 left-0 right-0 top-[-1px]" style={{ "--stroke-0": "rgba(196, 200, 183, 1)" } as React.CSSProperties}>
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 451 1">
                  <line id="Divider" stroke="var(--stroke-0, #C4C8B7)" x2="451" y1="0.5" y2="0.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#dae2ff] content-stretch flex flex-col h-[80px] items-start relative shrink-0 w-full" data-name="Chip cells">
        <div className="basis-0 content-stretch flex flex-col grow items-center justify-center min-h-[56px] min-w-px relative shrink-0 w-full" data-name="List item/List Item: 0 Density">
          <div className="absolute inset-0" data-name="state-layer overlay" />
          <StateLayer41 />
          <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Divider">
            <div className="h-0 relative shrink-0 w-full" data-name="Divider">
              <div className="absolute bottom-0 left-0 right-0 top-[-1px]" style={{ "--stroke-0": "rgba(196, 200, 183, 1)" } as React.CSSProperties}>
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 451 1">
                  <line id="Divider" stroke="var(--stroke-0, #C4C8B7)" x2="451" y1="0.5" y2="0.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col h-[80px] items-start relative shrink-0 w-full" data-name="Chip cells">
        <div className="basis-0 content-stretch flex flex-col grow items-center justify-center min-h-[56px] min-w-px relative shrink-0 w-full" data-name="List item/List Item: 0 Density">
          <div className="absolute inset-0" data-name="state-layer overlay" />
          <StateLayer42 />
          <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Divider">
            <div className="h-0 relative shrink-0 w-full" data-name="Divider">
              <div className="absolute bottom-0 left-0 right-0 top-[-1px]" style={{ "--stroke-0": "rgba(196, 200, 183, 1)" } as React.CSSProperties}>
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 451 1">
                  <line id="Divider" stroke="var(--stroke-0, #C4C8B7)" x2="451" y1="0.5" y2="0.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col h-[80px] items-start relative shrink-0 w-full" data-name="Chip cells">
        <div className="basis-0 content-stretch flex flex-col grow items-center justify-center min-h-[56px] min-w-px relative shrink-0 w-full" data-name="List item/List Item: 0 Density">
          <div className="absolute inset-0" data-name="state-layer overlay" />
          <StateLayer43 />
          <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Divider">
            <div className="h-0 relative shrink-0 w-full" data-name="Divider">
              <div className="absolute bottom-0 left-0 right-0 top-[-1px]" style={{ "--stroke-0": "rgba(196, 200, 183, 1)" } as React.CSSProperties}>
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 451 1">
                  <line id="Divider" stroke="var(--stroke-0, #C4C8B7)" x2="451" y1="0.5" y2="0.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Content16() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] overflow-ellipsis overflow-hidden relative shrink-0 text-[#1a1c16] text-[14px] text-nowrap tracking-[0.1px] w-full">
        <p className="[white-space-collapse:collapse] leading-[20px] overflow-ellipsis overflow-hidden">Status</p>
      </div>
    </div>
  );
}

function StateLayer44() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center justify-center px-[16px] py-[8px] relative size-full">
          <Content16 />
        </div>
      </div>
    </div>
  );
}

function Content17() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full relative shrink-0 text-[#174295] text-[14px] tracking-[0.25px] w-[min-content]">
        <p className="leading-[20px]">Åpent</p>
      </div>
    </div>
  );
}

function StateLayer45() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative size-full">
          <Content17 />
        </div>
      </div>
    </div>
  );
}

function Content18() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full overflow-ellipsis overflow-hidden relative shrink-0 text-[#1a1c16] text-[14px] text-nowrap tracking-[0.25px] w-[min-content]">
        <p className="[white-space-collapse:collapse] leading-[20px] overflow-ellipsis overflow-hidden">lukket</p>
      </div>
    </div>
  );
}

function StateLayer46() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative size-full">
          <Content18 />
        </div>
      </div>
    </div>
  );
}

function Content19() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full overflow-ellipsis overflow-hidden relative shrink-0 text-[#1a1c16] text-[14px] text-nowrap tracking-[0.25px] w-[min-content]">
        <p className="[white-space-collapse:collapse] leading-[20px] overflow-ellipsis overflow-hidden">lukket</p>
      </div>
    </div>
  );
}

function StateLayer47() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative size-full">
          <Content19 />
        </div>
      </div>
    </div>
  );
}

function Table() {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0" data-name="Table">
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-[32px]" data-name="Table Column">
        <div className="h-[56px] relative shrink-0 w-full" data-name="Chip cells">
          <div className="absolute content-stretch flex flex-col inset-0 items-start justify-center min-h-[56px]" data-name="List item/List Item: 0 Density">
            <div className="absolute inset-0" data-name="state-layer overlay" />
            <StateLayer28 />
            <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Divider">
              <div className="h-0 relative shrink-0 w-full" data-name="Divider">
                <div className="absolute bottom-0 left-0 right-0 top-[-1px]" style={{ "--stroke-0": "rgba(196, 200, 183, 1)" } as React.CSSProperties}>
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 1">
                    <line id="Divider" stroke="var(--stroke-0, #C4C8B7)" x2="32" y1="0.5" y2="0.5" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#dae2ff] h-[80px] relative shrink-0 w-full" data-name="Chip cells">
          <div className="absolute content-stretch flex flex-col inset-0 items-start justify-center min-h-[56px]" data-name="List item/List Item: 0 Density">
            <div className="absolute inset-0" data-name="state-layer overlay" />
            <StateLayer29 />
            <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Divider">
              <div className="h-0 relative shrink-0 w-full" data-name="Divider">
                <div className="absolute bottom-0 left-0 right-0 top-[-1px]" style={{ "--stroke-0": "rgba(196, 200, 183, 1)" } as React.CSSProperties}>
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 1">
                    <line id="Divider" stroke="var(--stroke-0, #C4C8B7)" x2="32" y1="0.5" y2="0.5" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[80px] relative shrink-0 w-full" data-name="Chip cells">
          <div className="absolute content-stretch flex flex-col inset-0 items-start justify-center min-h-[56px]" data-name="List item/List Item: 0 Density">
            <div className="absolute inset-0" data-name="state-layer overlay" />
            <StateLayer30 />
            <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Divider">
              <div className="h-0 relative shrink-0 w-full" data-name="Divider">
                <div className="absolute bottom-0 left-0 right-0 top-[-1px]" style={{ "--stroke-0": "rgba(196, 200, 183, 1)" } as React.CSSProperties}>
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 1">
                    <line id="Divider" stroke="var(--stroke-0, #C4C8B7)" x2="32" y1="0.5" y2="0.5" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[80px] relative shrink-0 w-full" data-name="Chip cells">
          <div className="absolute content-stretch flex flex-col inset-0 items-start justify-center min-h-[56px]" data-name="List item/List Item: 0 Density">
            <div className="absolute inset-0" data-name="state-layer overlay" />
            <StateLayer31 />
            <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Divider">
              <div className="h-0 relative shrink-0 w-full" data-name="Divider">
                <div className="absolute bottom-0 left-0 right-0 top-[-1px]" style={{ "--stroke-0": "rgba(196, 200, 183, 1)" } as React.CSSProperties}>
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 1">
                    <line id="Divider" stroke="var(--stroke-0, #C4C8B7)" x2="32" y1="0.5" y2="0.5" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[80px] relative shrink-0 w-full" data-name="Chip cells">
          <div className="absolute content-stretch flex flex-col inset-0 items-start justify-center min-h-[56px]" data-name="List item/List Item: 0 Density">
            <div className="absolute inset-0" data-name="state-layer overlay" />
            <StateLayer32 />
            <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Divider">
              <div className="h-0 relative shrink-0 w-full" data-name="Divider">
                <div className="absolute bottom-0 left-0 right-0 top-[-1px]" style={{ "--stroke-0": "rgba(196, 200, 183, 1)" } as React.CSSProperties}>
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 1">
                    <line id="Divider" stroke="var(--stroke-0, #C4C8B7)" x2="32" y1="0.5" y2="0.5" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <TableColumn />
      <TableColumn1 />
      <div className="content-stretch flex flex-col h-[296px] items-start relative shrink-0 w-[83px]" data-name="Table Column">
        <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full" data-name="Chip cells">
          <div className="content-stretch flex flex-col h-[56px] items-center justify-center min-h-[56px] relative shrink-0 w-full" data-name="List item/List Item: 0 Density">
            <div className="absolute inset-0" data-name="state-layer overlay" />
            <StateLayer44 />
            <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Divider">
              <div className="h-0 relative shrink-0 w-full" data-name="Divider">
                <div className="absolute bottom-0 left-0 right-0 top-[-1px]" style={{ "--stroke-0": "rgba(196, 200, 183, 1)" } as React.CSSProperties}>
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 83 1">
                    <line id="Divider" stroke="var(--stroke-0, #C4C8B7)" x2="83" y1="0.5" y2="0.5" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="basis-0 bg-[#dae2ff] content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0 w-full" data-name="Chip cells">
          <div className="basis-0 content-stretch flex flex-col grow items-center justify-center min-h-[56px] min-w-px relative shrink-0 w-full" data-name="List item/List Item: 0 Density">
            <div className="absolute inset-0" data-name="state-layer overlay" />
            <StateLayer45 />
            <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Divider">
              <div className="h-0 relative shrink-0 w-full" data-name="Divider">
                <div className="absolute bottom-0 left-0 right-0 top-[-1px]" style={{ "--stroke-0": "rgba(196, 200, 183, 1)" } as React.CSSProperties}>
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 83 1">
                    <line id="Divider" stroke="var(--stroke-0, #C4C8B7)" x2="83" y1="0.5" y2="0.5" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="basis-0 content-stretch flex flex-col gap-[10px] grow items-start min-h-px min-w-px relative shrink-0 w-full" data-name="Chip cells">
          <div className="basis-0 content-stretch flex flex-col grow items-center justify-center min-h-[56px] min-w-px relative shrink-0 w-full" data-name="List item/List Item: 0 Density">
            <div className="absolute inset-0" data-name="state-layer overlay" />
            <StateLayer46 />
            <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Divider">
              <div className="h-0 relative shrink-0 w-full" data-name="Divider">
                <div className="absolute bottom-0 left-0 right-0 top-[-1px]" style={{ "--stroke-0": "rgba(196, 200, 183, 1)" } as React.CSSProperties}>
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 83 1">
                    <line id="Divider" stroke="var(--stroke-0, #C4C8B7)" x2="83" y1="0.5" y2="0.5" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0 w-full" data-name="Chip cells">
          <div className="basis-0 content-stretch flex flex-col grow items-center justify-center min-h-[56px] min-w-px relative shrink-0 w-full" data-name="List item/List Item: 0 Density">
            <div className="absolute inset-0" data-name="state-layer overlay" />
            <StateLayer47 />
            <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Divider">
              <div className="h-0 relative shrink-0 w-full" data-name="Divider">
                <div className="absolute bottom-0 left-0 right-0 top-[-1px]" style={{ "--stroke-0": "rgba(196, 200, 183, 1)" } as React.CSSProperties}>
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 83 1">
                    <line id="Divider" stroke="var(--stroke-0, #C4C8B7)" x2="83" y1="0.5" y2="0.5" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function StateLayer48() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center p-[8px] relative shrink-0" data-name="state-layer">
      <div className="relative shrink-0 size-[24px]" data-name="Icon">
        <div className="absolute inset-0 overflow-clip" data-name="open_in_new">
          <div className="absolute inset-[12.5%]" data-name="Vector">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
              <path d={svgPaths.pd76fd80} fill="var(--fill-0, #1A1C16)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center overflow-clip relative rounded-[100px] shrink-0" data-name="container">
      <StateLayer48 />
    </div>
  );
}

function TrailingIcon1() {
  return (
    <div className="content-stretch flex h-[48px] items-center justify-end relative shrink-0" data-name="trailing-icon">
      <div className="content-stretch cursor-pointer flex flex-col gap-[10px] items-center justify-center relative shrink-0 size-[48px]" data-name="trailing-icon 2">
        <Container1 />
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0">
      <div className="flex flex-col font-['Quatro:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1a1c16] text-[22px] text-nowrap">
        <p className="leading-[28px] whitespace-pre">
          <span className="font-['Quatro:Regular',sans-serif] not-italic">1.</span>1<span className="font-['Quatro:Regular',sans-serif] not-italic">.</span>4
        </p>
      </div>
      <TrailingIcon1 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <Frame1 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full">
      <Frame9 />
      <div className="flex flex-col font-['Quatro:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1a1c16] text-[22px] w-full">
        <p className="leading-[28px]">Har du oversikt over alle driftsmidler du har kjøpt, og alle produkter du har solgt?</p>
      </div>
    </div>
  );
}

function ChecklistQuestion() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Checklist question">
      <Frame14 />
    </div>
  );
}

function LeadingElement11() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Leading element">
      <div className="relative shrink-0 size-[24px]" data-name="report_problem">
        <div className="absolute inset-0 overflow-clip" data-name="report_problem">
          <div className="absolute inset-[10.42%_4.17%]" data-name="Vector">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 19">
              <path d={svgPaths.p6027970} fill="var(--fill-0, #410002)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Content20() {
  return (
    <div className="basis-0 content-stretch flex flex-col font-['Manrope:Medium',sans-serif] font-medium grow h-full items-start justify-center leading-[0] min-h-px min-w-px overflow-clip relative shrink-0 text-[#410002]" data-name="Content">
      <div className="flex flex-col justify-center relative shrink-0 text-[12px] tracking-[0.5px] w-full">
        <p className="leading-[16px]">Beregnet alvorlighetsgrad</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[16px] tracking-[0.15px] w-full">
        <p className="leading-[24px]">Stort avvik</p>
      </div>
    </div>
  );
}

function TrailingElement() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="Trailing element">
      <div className="relative shrink-0 size-[24px]" data-name="info">
        <div className="absolute inset-0 overflow-clip" data-name="info">
          <div className="absolute inset-[8.333%]" data-name="Vector">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
              <path d={svgPaths.p19ecbc00} fill="var(--fill-0, #410002)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function StateLayer49() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center justify-center px-[16px] py-0 relative size-full">
          <LeadingElement11 />
          <Content20 />
          <TrailingElement />
        </div>
      </div>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-x-clip overflow-y-auto relative shrink-0 w-full">
      <ChecklistQuestion />
      <button className="box-border content-stretch cursor-pointer flex flex-col gap-[8px] items-start overflow-visible p-0 relative shrink-0 w-full" data-name="Deviation Grades">
        <div className="bg-[#ffdad6] content-stretch flex flex-col h-[56px] items-center justify-center min-h-[56px] relative rounded-[8px] shrink-0 w-full" data-name="List item/List Item: -4 Density">
          <div className="absolute inset-0" data-name="state-layer overlay" />
          <StateLayer49 />
        </div>
      </button>
    </div>
  );
}

function Content21() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start justify-center leading-[0] min-h-px min-w-px overflow-clip relative shrink-0 tracking-[0.5px]" data-name="Content">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[#44483b] text-[12px] w-full">
        <p className="leading-[16px]">Mangel</p>
      </div>
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#1a1c16] text-[16px] w-full">
        <p className="leading-[24px]">Ingen dokumentasjon fremvist for truckkontroll.</p>
      </div>
    </div>
  );
}

function StateLayer50() {
  return (
    <div className="content-stretch flex h-[32px] items-center justify-center relative shrink-0 w-full" data-name="State-layer">
      <div className="relative shrink-0 size-[20px]" data-name="Icon">
        <div className="absolute inset-0 overflow-clip" data-name="edit">
          <div className="absolute inset-[12.5%_12.49%]" data-name="Vector">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
              <path d={svgPaths.p25003780} fill="var(--fill-0, #44483B)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame17() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[16px] items-start p-[8px] relative w-full">
          <Content21 />
          <div className="content-stretch flex items-center justify-center relative shrink-0 size-[48px]" data-name="Icon button">
            <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[100px] shrink-0 w-[28px]" data-name="Content">
              <StateLayer50 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function LeadingElement13() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Leading element">
      <div className="relative shrink-0 size-[24px]" data-name="pending_actions">
        <div className="absolute inset-0 overflow-clip" data-name="pending_actions">
          <div className="absolute inset-[6.25%_12.5%]" data-name="Vector">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 21">
              <path d={svgPaths.p302c2680} fill="var(--fill-0, #44483B)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Content22() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start justify-center leading-[0] min-h-px min-w-px overflow-clip relative shrink-0 tracking-[0.5px]" data-name="Content">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[#44483b] text-[12px] w-full">
        <p className="leading-[16px]">Tidsfrist for lukking av avvik</p>
      </div>
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#1a1c16] text-[16px] w-full">
        <p className="leading-[24px]">4. mars 2026 (anbefalt)</p>
      </div>
    </div>
  );
}

function StateLayer51() {
  return (
    <div className="content-stretch flex h-[32px] items-center justify-center relative shrink-0 w-full" data-name="State-layer">
      <div className="relative shrink-0 size-[20px]" data-name="Icon">
        <div className="absolute inset-0 overflow-clip" data-name="edit">
          <div className="absolute inset-[12.5%_12.49%]" data-name="Vector">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
              <path d={svgPaths.p25003780} fill="var(--fill-0, #44483B)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame18() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[16px] items-start p-[8px] relative w-full">
          <LeadingElement13 />
          <Content22 />
          <div className="content-stretch flex items-center justify-center relative shrink-0 size-[48px]" data-name="Icon button">
            <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[100px] shrink-0 w-[28px]" data-name="Content">
              <StateLayer51 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function LeadingElement14() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Leading element">
      <div className="relative shrink-0 size-[24px]" data-name="assignment_ind">
        <div className="absolute inset-0 overflow-clip" data-name="assignment_ind">
          <div className="absolute inset-[8.33%_12.5%]" data-name="Vector">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 20">
              <path d={svgPaths.p22a29c0} fill="var(--fill-0, #44483B)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Content23() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start justify-center leading-[0] min-h-px min-w-px overflow-clip relative shrink-0 tracking-[0.5px]" data-name="Content">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[#44483b] text-[12px] w-full">
        <p className="leading-[16px]">Ansvarlig for lukking:</p>
      </div>
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#1a1c16] text-[16px] w-full">
        <p className="leading-[24px]">Tellef Lima Eidland</p>
      </div>
    </div>
  );
}

function StateLayer52() {
  return (
    <div className="content-stretch flex h-[32px] items-center justify-center relative shrink-0 w-full" data-name="State-layer">
      <div className="relative shrink-0 size-[20px]" data-name="Icon">
        <div className="absolute inset-0 overflow-clip" data-name="edit">
          <div className="absolute inset-[12.5%_12.49%]" data-name="Vector">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
              <path d={svgPaths.p25003780} fill="var(--fill-0, #44483B)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame19() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[16px] items-start p-[8px] relative w-full">
          <LeadingElement14 />
          <Content23 />
          <div className="content-stretch flex items-center justify-center relative shrink-0 size-[48px]" data-name="Icon button">
            <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[100px] shrink-0 w-[28px]" data-name="Content">
              <StateLayer52 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function StateLayer53() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-center justify-center px-[24px] py-[16px] relative shrink-0" data-name="State-layer">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#44483b] text-[16px] text-nowrap tracking-[0.15px]">
        <p className="leading-[24px] whitespace-pre">Bekreft lukking av avviket</p>
      </div>
    </div>
  );
}

function IconAndLabel() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="Icon and label">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[14px] text-center text-nowrap tracking-[0.1px]">
        <p className="leading-[20px] whitespace-pre">Lukking av avvik</p>
      </div>
    </div>
  );
}

function TabContents9() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center justify-center min-h-px min-w-px relative shrink-0" data-name="Tab Contents">
      <IconAndLabel />
    </div>
  );
}

function StateLayer54() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="State-layer">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col items-center justify-center px-[16px] py-[12px] relative size-full">
          <TabContents9 />
          <div className="absolute bg-[#4a671e] bottom-0 h-[2px] left-0 right-0" data-name="Indicator" />
        </div>
      </div>
    </div>
  );
}

function IconAndLabel1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="Icon and label">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#44483b] text-[14px] text-center text-nowrap tracking-[0.1px]">
        <p className="leading-[20px] whitespace-pre">Mer om avvik og sjekkelistekrav</p>
      </div>
    </div>
  );
}

function TabContents10() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center justify-center min-h-px min-w-px relative shrink-0" data-name="Tab Contents">
      <IconAndLabel1 />
    </div>
  );
}

function StateLayer55() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="State-layer">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col items-center justify-center px-[16px] py-[12px] relative size-full">
          <TabContents10 />
        </div>
      </div>
    </div>
  );
}

function TabGroup2() {
  return (
    <div className="content-stretch cursor-pointer flex items-start relative shrink-0 w-full" data-name="Tab group">
      <div className="content-stretch flex flex-col h-[48px] items-center justify-end overflow-clip relative shrink-0" data-name="Tab 1">
        <StateLayer54 />
      </div>
      <div className="content-stretch flex flex-col h-[48px] items-center justify-end overflow-clip relative shrink-0" data-name="Tab 2">
        <StateLayer55 />
      </div>
    </div>
  );
}

function ClosingConfirmationMethode() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-center px-0 py-[8px] relative shrink-0" data-name="Closing confirmation methode">
      <div className="relative shrink-0 size-[24px]" data-name="contact_phone">
        <div className="absolute inset-0 overflow-clip" data-name="contact_phone">
          <div className="absolute bottom-[12.5%] left-0 right-0 top-[12.5%]" data-name="Vector">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 18">
              <path d={svgPaths.p3a9b380} fill="var(--fill-0, #44483B)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] text-nowrap tracking-[0.15px]">
        <p className="leading-[24px] whitespace-pre">{`Lukking krever digitalt besøk `}</p>
      </div>
    </div>
  );
}

function StateLayer56() {
  return (
    <div className="box-border content-stretch flex gap-[8px] h-[32px] items-center justify-center pl-[8px] pr-[16px] py-[6px] relative shrink-0" data-name="state-layer">
      <div className="relative shrink-0 size-[18px]" data-name="Icon">
        <div className="absolute inset-0 overflow-clip" data-name="mark_email_read">
          <div className="absolute inset-[12.5%_6.25%]" data-name="Vector">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 14">
              <path d={svgPaths.p3b7ee600} fill="var(--fill-0, #4A671E)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[14px] text-center text-nowrap tracking-[0.1px]">
        <p className="leading-[20px] whitespace-pre">Tidspunkt foreslått</p>
      </div>
    </div>
  );
}

function LeadingElement15() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Leading element">
      <div className="relative shrink-0 size-[24px]" data-name="chat_bubble">
        <div className="absolute inset-[8.333%]" data-name="icon">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <path d={svgPaths.p27b1b000} fill="var(--fill-0, #44483B)" id="icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Content24() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start justify-center leading-[0] min-h-px min-w-px overflow-clip relative shrink-0 tracking-[0.5px]" data-name="Content">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[#44483b] text-[12px] w-full">
        <p className="leading-[16px]">Kommentar</p>
      </div>
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#1a1c16] text-[16px] w-full">
        <p className="leading-[24px]">Ring meg på telefon først, og vi fortsetter dialogen på Messenger.</p>
      </div>
    </div>
  );
}

function Frame20() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[16px] items-start p-[8px] relative w-full">
          <LeadingElement15 />
          <Content24 />
        </div>
      </div>
    </div>
  );
}

function LeadingElement16() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Leading element">
      <div className="relative shrink-0 size-[24px]" data-name="today">
        <div className="absolute inset-[8.33%_12.5%]" data-name="icon">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 20">
            <path d={svgPaths.pcb4ca40} fill="var(--fill-0, #44483B)" id="icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Content25() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center leading-[0] min-h-px min-w-px overflow-clip relative shrink-0 text-[#44483b] tracking-[0.5px]" data-name="Content">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[12px] w-full">
        <p className="leading-[16px]">Forslag til digitalt besøk</p>
      </div>
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[16px] w-full">
        <p className="leading-[24px]">16. juni 2025</p>
      </div>
    </div>
  );
}

function StateLayer57() {
  return (
    <div className="content-stretch flex gap-[16px] h-[56px] items-center justify-center relative shrink-0 w-full" data-name="state-layer">
      <LeadingElement16 />
      <Content25 />
    </div>
  );
}

function TimeRequest() {
  return (
    <div className="relative shrink-0 w-full" data-name="Time request">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex items-center px-[8px] py-0 relative w-full">
          <div className="basis-0 content-stretch flex flex-col grow items-center justify-center min-h-[56px] min-w-px relative shrink-0" data-name="List item/List Item: -4 Density">
            <div className="absolute inset-0" data-name="state-layer overlay" />
            <StateLayer57 />
          </div>
        </div>
      </div>
    </div>
  );
}

function ClosingAvvik() {
  return (
    <div className="bg-[#eeeee4] relative rounded-[12px] shrink-0 w-full" data-name="Closing avvik">
      <div className="overflow-x-clip overflow-y-auto size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] items-start p-[24px] relative w-full">
          <ClosingConfirmationMethode />
          <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-[177px]" data-name="Deviation Follow up Status">
            <div className="bg-[#f4f4ea] box-border content-stretch cursor-pointer flex items-center justify-center overflow-clip relative rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.3),0px_1px_3px_1px_rgba(0,0,0,0.15)] shrink-0 w-full" data-name="Deviation Follow up Status">
              <StateLayer56 />
            </div>
          </div>
          <button className="box-border content-stretch cursor-pointer flex flex-col gap-[8px] items-center justify-center min-h-[64px] overflow-visible pb-0 pt-[8px] px-0 relative shrink-0 w-full" data-name="Revisor comment">
            <Frame20 />
          </button>
          <TimeRequest />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#c4c8b7] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Frame96() {
  return (
    <div className="relative rounded-[12px] shrink-0 w-full">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-start px-[24px] py-[16px] relative w-full">
          <Frame16 />
          <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Horizontal/Full-width">
            <div className="h-0 relative shrink-0 w-full" data-name="Divider">
              <div className="absolute bottom-0 left-0 right-0 top-[-1px]" style={{ "--stroke-0": "rgba(196, 200, 183, 1)" } as React.CSSProperties}>
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 352 1">
                  <line id="Divider" stroke="var(--stroke-0, #C4C8B7)" x2="352" y1="0.5" y2="0.5" />
                </svg>
              </div>
            </div>
          </div>
          <button className="box-border content-stretch cursor-pointer flex flex-col gap-[8px] items-center justify-center min-h-[64px] overflow-visible pb-0 pt-[8px] px-0 relative shrink-0 w-full" data-name="App User Input">
            <Frame17 />
          </button>
          <button className="box-border content-stretch cursor-pointer flex flex-col gap-[8px] items-center justify-center min-h-[64px] overflow-visible pb-0 pt-[8px] px-0 relative shrink-0 w-full" data-name="App User Input">
            <Frame18 />
          </button>
          <button className="box-border content-stretch cursor-pointer flex flex-col gap-[8px] items-center justify-center min-h-[64px] overflow-visible pb-0 pt-[8px] px-0 relative shrink-0 w-full" data-name="App User Input">
            <Frame19 />
          </button>
          <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Button">
            <div className="relative rounded-[100px] shrink-0" data-name="Content">
              <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[inherit]">
                <StateLayer53 />
              </div>
              <div aria-hidden="true" className="absolute border border-[#c4c8b7] border-solid inset-0 pointer-events-none rounded-[100px]" />
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Deviation tabs">
            <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Tabs">
              <TabGroup2 />
              <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Divider">
                <div className="h-0 relative shrink-0 w-full" data-name="Divider">
                  <div className="absolute bottom-0 left-0 right-0 top-[-1px]" style={{ "--stroke-0": "rgba(227, 227, 217, 1)" } as React.CSSProperties}>
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 352 1">
                      <line id="Divider" stroke="var(--stroke-0, #E3E3D9)" x2="352" y1="0.5" y2="0.5" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Revisor Deviation closed confirmation">
              <ClosingAvvik />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function KlsTable() {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px overflow-x-clip overflow-y-auto relative shrink-0 w-full" data-name="KLS Table">
      <Table />
      <div className="content-stretch flex flex-col h-full items-center overflow-clip relative shrink-0 w-px" data-name="Vertical/Full-width">
        <div className="basis-0 flex grow items-center justify-center min-h-px min-w-px relative shrink-0 w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "120", "--transform-inner-height": "1" } as React.CSSProperties}>
          <div className="flex-none h-full rotate-[90deg]">
            <div className="h-full relative w-[120px]" data-name="Divider">
              <div className="absolute bottom-0 left-0 right-0 top-[-1px]" style={{ "--stroke-0": "rgba(196, 200, 183, 1)" } as React.CSSProperties}>
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1096 1">
                  <line id="Divider" stroke="var(--stroke-0, #C4C8B7)" x2="1095.32" y1="0.5" y2="0.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[16px] h-full items-start max-w-[528px] overflow-x-clip overflow-y-auto relative rounded-[12px] shrink-0 w-[400px]" data-name="Deviation Follow-up Revisjor">
        <Frame96 />
      </div>
    </div>
  );
}

function SecondaryInfo() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0 w-full" data-name="Secondary info">
      <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Tabs">
        <TabGroup1 />
        <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Divider">
          <div className="h-0 relative shrink-0 w-full" data-name="Divider">
            <div className="absolute bottom-0 left-0 right-0 top-[-1px]" style={{ "--stroke-0": "rgba(227, 227, 217, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1111 1">
                <line id="Divider" stroke="var(--stroke-0, #E3E3D9)" x2="1111" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <KlsTable />
    </div>
  );
}

function AboutProducer() {
  return (
    <div className="content-stretch flex flex-col h-full items-start relative shrink-0 w-[1111px] z-[1]" data-name="About producer">
      <FocusInformation />
      <SecondaryInfo />
    </div>
  );
}

function NyPrototype() {
  return (
    <div className="basis-0 content-stretch flex grow isolate items-start min-h-px min-w-px relative shrink-0 w-full" data-name="ny prototype">
      <div className="box-border content-stretch flex flex-col gap-[8px] h-full items-start overflow-x-clip overflow-y-auto p-[16px] relative shrink-0 w-[392px] z-[3]" data-name="Report steps">
        <div className="bg-white box-border content-stretch flex gap-[16px] items-center min-h-[64px] px-0 py-[8px] relative rounded-[12px] shrink-0 w-full" data-name="checklist Question">
          <Frame7 />
        </div>
        <div className="bg-[#dae2ff] box-border content-stretch flex gap-[16px] items-center min-h-[64px] px-0 py-[8px] relative rounded-[12px] shrink-0 w-full" data-name="checklist Question">
          <Frame8 />
        </div>
        <div className="bg-white box-border content-stretch flex gap-[16px] items-center min-h-[64px] px-0 py-[8px] relative rounded-[12px] shrink-0 w-full" data-name="checklist Question">
          <Frame11 />
        </div>
        <div className="bg-white box-border content-stretch flex gap-[16px] items-center min-h-[64px] px-0 py-[8px] relative rounded-[12px] shrink-0 w-full" data-name="checklist Question">
          <Frame12 />
        </div>
        <div className="bg-white box-border content-stretch flex gap-[16px] items-center min-h-[64px] px-0 py-[8px] relative rounded-[12px] shrink-0 w-full" data-name="checklist Question">
          <Frame13 />
        </div>
        <Summary />
      </div>
      <div className="content-stretch flex flex-col h-full items-center overflow-clip relative shrink-0 w-px z-[2]" data-name="Vertical/Full-width">
        <div className="basis-0 flex grow items-center justify-center min-h-px min-w-px relative shrink-0 w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "120", "--transform-inner-height": "1" } as React.CSSProperties}>
          <div className="flex-none h-full rotate-[90deg]">
            <div className="h-full relative w-[120px]" data-name="Divider">
              <div className="absolute bottom-0 left-0 right-0 top-[-1px]" style={{ "--stroke-0": "rgba(196, 200, 183, 1)" } as React.CSSProperties}>
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1341 1">
                  <line id="Divider" stroke="var(--stroke-0, #C4C8B7)" x2="1340.32" y1="0.5" y2="0.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AboutProducer />
    </div>
  );
}

function Frame21() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start min-h-px min-w-px relative shrink-0">
      <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-[1504px]" data-name="Revisor tabs">
        <div className="content-stretch flex flex-col h-[114px] items-start justify-center relative shrink-0 w-full" data-name="Checklist heading">
          <div className="h-[64px] relative shrink-0 w-full" data-name="Checklist name & actions">
            <div className="flex flex-row items-center size-full">
              <div className="box-border content-stretch flex h-[64px] items-center justify-between px-[4px] py-[8px] relative w-full">
                <div className="content-stretch flex items-center justify-center relative shrink-0 size-[48px]" data-name="Leading icon">
                  <div className="content-stretch cursor-pointer flex flex-col items-center justify-center overflow-clip relative rounded-[100px] shrink-0 w-[40px]" data-name="Content">
                    <StateLayer9 />
                  </div>
                </div>
                <div className="absolute content-stretch flex flex-col items-start justify-center left-[56px] right-[56px] top-1/2 translate-y-[-50%]" data-name="Text content">
                  <p className="[white-space-collapse:collapse] font-['Roboto:Regular',sans-serif] font-normal leading-[28px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#1a1c16] text-[22px] text-nowrap w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Haugseter Gård
                  </p>
                </div>
                <TrailingElements />
              </div>
            </div>
          </div>
          <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Tabs">
            <TabGroup />
            <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Divider">
              <div className="h-0 relative shrink-0 w-full" data-name="Divider">
                <div className="absolute bottom-0 left-0 right-0 top-[-2px]" style={{ "--stroke-0": "rgba(227, 227, 217, 1)" } as React.CSSProperties}>
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1504 2">
                    <line id="Divider" stroke="var(--stroke-0, #E3E3D9)" strokeWidth="2" x2="1504" y1="1" y2="1" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <NyPrototype />
    </div>
  );
}

function Frame3() {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0 w-full">
      <button className="bg-white box-border content-stretch cursor-pointer flex flex-col h-full items-start overflow-visible p-0 relative shrink-0" data-name="Producer Navigation Rail">
        <div aria-hidden="true" className="absolute border-[#c4c8b7] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none" />
        <div className="box-border content-stretch flex flex-col gap-[40px] h-[800px] items-center overflow-clip pb-[56px] pt-[44px] px-0 relative shrink-0 w-[96px]" data-name="ksl Navigation Rail">
          <MenuFab />
          <Segments />
        </div>
      </button>
      <Frame21 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0 w-full">
      <div className="bg-white relative shrink-0 w-full" data-name="App Top bar">
        <div className="flex flex-row items-center size-full">
          <div className="box-border content-stretch flex gap-[8px] items-center px-[24px] py-[8px] relative w-full">
            <div className="content-stretch flex flex-col gap-[5.354px] h-[29.807px] items-start relative shrink-0" data-name="Logo">
              <MainLogo />
            </div>
            <TopbarActions />
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Horizontal/Full-width">
        <div className="h-0 relative shrink-0 w-full" data-name="Divider">
          <div className="absolute bottom-0 left-0 right-0 top-[-1px]" style={{ "--stroke-0": "rgba(196, 200, 183, 1)" } as React.CSSProperties}>
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1600 1">
              <line id="Divider" stroke="var(--stroke-0, #C4C8B7)" x2="1600" y1="0.5" y2="0.5" />
            </svg>
          </div>
        </div>
      </div>
      <Frame3 />
    </div>
  );
}

export default function RevisorRapportPreviousRevisonsExternalAvvik() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[10px] items-start overflow-clip relative rounded-[16px] shadow-[0px_8px_12px_6px_rgba(0,0,0,0.15),0px_4px_4px_0px_rgba(0,0,0,0.3)] size-full" data-name="revisor- rapport- Previous revisons- external avvik">
      <Frame6 />
    </div>
  );
}