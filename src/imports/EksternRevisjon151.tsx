import svgPaths from "./svg-bfm6jzo4sm";

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

function Indicator() {
  return (
    <div className="absolute bottom-0 h-[14px] left-0 right-0" data-name="Indicator">
      <div className="absolute bg-[#4a671e] bottom-0 h-[3px] left-[2px] right-[2px] rounded-tl-[100px] rounded-tr-[100px]" data-name="Shape" />
    </div>
  );
}

function TabContents3() {
  return (
    <div className="basis-0 box-border content-stretch flex gap-[4px] grow items-center justify-center min-h-px min-w-px overflow-clip px-0 py-[14px] relative shrink-0" data-name="Tab Contents">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#4a671e] text-[14px] text-center text-nowrap tracking-[0.1px]">
        <p className="leading-[20px] whitespace-pre">Registrer revisjon</p>
      </div>
      <Indicator />
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

function TabContents4() {
  return (
    <div className="basis-0 box-border content-stretch flex gap-[4px] grow items-center justify-center min-h-px min-w-px overflow-clip px-0 py-[14px] relative shrink-0" data-name="Tab Contents">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#44483b] text-[14px] text-center text-nowrap tracking-[0.1px]">
        <p className="leading-[20px] whitespace-pre">Skriv rapport</p>
      </div>
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

function StateLayer17() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-center justify-center px-[24px] py-[16px] relative shrink-0" data-name="State-layer">
      <div className="relative shrink-0 size-[24px]" data-name="Icon">
        <div className="absolute inset-[20.833%]" data-name="icon">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
            <path d={svgPaths.p2ccb20} fill="var(--fill-0, #44483B)" id="icon" />
          </svg>
        </div>
      </div>
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#44483b] text-[16px] text-nowrap tracking-[0.15px]">
        <p className="leading-[24px] whitespace-pre">Legg til flere spørsmål</p>
      </div>
    </div>
  );
}

function StateLayer18() {
  return (
    <div className="content-stretch flex h-[56px] items-center justify-center relative shrink-0 w-full" data-name="State-layer">
      <div className="relative shrink-0 size-[24px]" data-name="Icon">
        <div className="absolute inset-[12.5%]" data-name="icon">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
            <path d={svgPaths.p16b4a380} fill="var(--fill-0, #44483B)" id="icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full">
      <div className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px relative shrink-0" data-name="Button">
        <div className="basis-0 grow min-h-px min-w-px relative rounded-[100px] shrink-0" data-name="Content">
          <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[inherit] w-full">
            <StateLayer17 />
          </div>
          <div aria-hidden="true" className="absolute border border-[#c4c8b7] border-solid inset-0 pointer-events-none rounded-[100px]" />
        </div>
      </div>
      <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Icon button">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[100px] shrink-0 w-[56px]" data-name="Content">
          <StateLayer18 />
        </div>
      </div>
    </div>
  );
}

function SegmentStart() {
  return (
    <div className="h-[12px] relative shrink-0 w-[40px]" data-name="Segment - start">
      <div className="absolute bottom-0 left-[-5%] right-[-5%] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44 12">
          <g id="Segment - start">
            <path d="M42 6L32 6L12 6L2 6" id="wave-increment" stroke="var(--stroke-0, #4A671E)" strokeLinecap="round" strokeWidth="4" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function SegmentEnd() {
  return (
    <div className="basis-0 grow h-[12px] min-h-px min-w-px relative shrink-0" data-name="Segment - end">
      <div className="absolute bottom-0 left-[-3.04%] right-[-3.25%] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 70 12">
          <g id="Segment - end">
            <path d="M2 6H18.5H51.5H68" id="wave-increment" stroke="var(--stroke-0, #4A671E)" strokeLinecap="round" strokeWidth="4" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function ActiveIndicator() {
  return (
    <div className="absolute box-border content-stretch flex items-center left-0 pl-[2px] pr-[6px] py-0 right-[69.06%] top-1/2 translate-y-[-50%]" data-name="Active indicator">
      <SegmentStart />
      <SegmentEnd />
    </div>
  );
}

function Track() {
  return (
    <div className="basis-0 grow h-[12px] min-h-px min-w-px relative shrink-0" data-name="Track">
      <div className="absolute bg-[#dae2ff] h-[4px] left-0 right-0 rounded-[8px] top-1/2 translate-y-[-50%]" data-name="track" />
    </div>
  );
}

function Stop() {
  return (
    <div className="absolute right-0 size-[4px] top-1/2 translate-y-[-50%]" data-name="Stop">
      <div className="absolute bg-[#4a671e] left-1/2 rounded-[26px] size-[4px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="Stop shape" />
    </div>
  );
}

function TrackAndStop() {
  return (
    <div className="absolute content-stretch flex items-center left-[30.94%] right-0 top-1/2 translate-y-[-50%]" data-name="track-and-stop">
      <Track />
      <Stop />
    </div>
  );
}

function ProgressIndicator() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[4px] items-start px-0 py-[16px] relative shrink-0 w-full" data-name="Progress indicator">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#44483b] text-[12px] tracking-[0.5px] w-full">
        <p className="leading-[16px]">revisjon fremdrift (12/69)</p>
      </div>
      <div className="h-[12px] relative shrink-0 w-full" data-name="linear-determinate">
        <ActiveIndicator />
        <TrackAndStop />
      </div>
    </div>
  );
}

function StateLayer19() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center p-[8px] relative shrink-0" data-name="state-layer">
      <div className="relative shrink-0 size-[24px]" data-name="Icon">
        <div className="absolute inset-[12.5%]" data-name="icon">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
            <path d={svgPaths.p16b4a380} fill="var(--fill-0, #44483B)" id="icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center overflow-clip relative rounded-[100px] shrink-0" data-name="container">
      <StateLayer19 />
    </div>
  );
}

function Content() {
  return (
    <div className="basis-0 content-stretch cursor-pointer flex gap-[10px] grow h-full items-center min-h-px min-w-px relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#44483b] text-[16px] text-nowrap tracking-[0.5px]">
        <p className="leading-[24px] whitespace-pre">Søk i sjekklistespørsmål</p>
      </div>
    </div>
  );
}

function TrailingElements1() {
  return <div className="content-stretch flex items-center justify-end shrink-0" data-name="Trailing-Elements" />;
}

function StateLayer20() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[4px] items-center p-[4px] relative size-full">
          <div className="content-stretch cursor-pointer flex flex-col gap-[10px] items-center justify-center relative shrink-0 size-[48px]" data-name="Leading-icon">
            <Container1 />
          </div>
          <Content />
          <TrailingElements1 />
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

function Content1() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center leading-[0] min-h-px min-w-px overflow-clip relative shrink-0 tracking-[0.5px]" data-name="Content">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[#44483b] text-[12px] w-full">
        <p className="leading-[16px]">2/8</p>
      </div>
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#1a1c16] text-[16px] w-full">
        <p className="leading-[24px]">Generelle krav til gården</p>
      </div>
    </div>
  );
}

function TrailingElement() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="Trailing element">
      <div className="relative shrink-0 size-[24px]" data-name="expand_more">
        <div className="absolute inset-0 overflow-clip" data-name="expand_more">
          <div className="absolute bottom-[34.56%] left-1/4 right-1/4 top-[34.56%]" data-name="Vector">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 8">
              <path d={svgPaths.p180a8a80} fill="var(--fill-0, #44483B)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function StateLayer21() {
  return (
    <div className="basis-0 box-border content-stretch flex gap-[16px] grow items-center min-h-px min-w-px px-0 py-[8px] relative shrink-0 w-full" data-name="state-layer">
      <LeadingElement />
      <Content1 />
      <TrailingElement />
    </div>
  );
}

function Frame7() {
  return (
    <div className="basis-0 grow h-[64px] min-h-px min-w-px relative shrink-0">
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] h-[64px] items-start justify-center px-[8px] py-0 relative w-full">
          <div className="content-stretch flex flex-col h-[72px] items-center justify-center min-h-[72px] relative shrink-0 w-full" data-name="List item/List Item: 0 Density">
            <div className="absolute inset-0" data-name="state-layer overlay" />
            <StateLayer21 />
          </div>
        </div>
      </div>
    </div>
  );
}

function QuestionText() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Question text">
      <div className="basis-0 flex flex-col font-['Manrope:Medium',sans-serif] font-medium grow justify-center leading-[20px] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#44483b] text-[14px] text-nowrap tracking-[0.1px]">
        <p className="[white-space-collapse:collapse] mb-0 overflow-ellipsis overflow-hidden">1.1 OVERSIKT OVER DOKUMENTASJON, ANALYSERESULTATER OG SERTIFSERINGER.</p>
        <p className="[white-space-collapse:collapse] overflow-ellipsis overflow-hidden">&nbsp;</p>
      </div>
    </div>
  );
}

function Content2() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <QuestionText />
    </div>
  );
}

function LeadingElement2() {
  return <div className="content-stretch flex items-center justify-center shrink-0" data-name="Leading element" />;
}

function QuestionText1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Question text">
      <div className="basis-0 flex flex-col font-['Manrope:Medium',sans-serif] font-medium grow justify-center leading-[20px] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#44483b] text-[14px] text-nowrap tracking-[0.1px]">
        <p className="[white-space-collapse:collapse] mb-0 overflow-ellipsis overflow-hidden">1.1.1 Har du oversikt over alle driftsmidler du har kjøpt, og alle produkter du har solgt?</p>
        <p className="[white-space-collapse:collapse] overflow-ellipsis overflow-hidden">&nbsp;</p>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0">
      <div className="relative shrink-0 size-[24px]" data-name="snippet_folder">
        <div className="absolute inset-0 overflow-clip" data-name="snippet_folder">
          <div className="absolute inset-[16.67%_8.33%]" data-name="Vector">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 16">
              <path d={svgPaths.p1a10df00} fill="var(--fill-0, #174295)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Content3() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <QuestionText1 />
      <Frame8 />
    </div>
  );
}

function LeadingElement3() {
  return <div className="content-stretch flex items-center justify-center shrink-0" data-name="Leading element" />;
}

function QuestionText2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Question text">
      <div className="basis-0 flex flex-col font-['Manrope:Medium',sans-serif] font-medium grow justify-center leading-[20px] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#44483b] text-[14px] text-nowrap tracking-[0.1px]">
        <p className="[white-space-collapse:collapse] mb-0 overflow-ellipsis overflow-hidden">1.1.2 Har du en plan for hvordan du skal håndtere og eventuelt tilbakekalle helseskadelige produkter, samt varsle Mattilsynet og varemottaker?</p>
        <p className="[white-space-collapse:collapse] overflow-ellipsis overflow-hidden">&nbsp;</p>
      </div>
    </div>
  );
}

function Content4() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <QuestionText2 />
    </div>
  );
}

function LeadingElement4() {
  return <div className="content-stretch flex items-center justify-center shrink-0" data-name="Leading element" />;
}

function QuestionText3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Question text">
      <div className="basis-0 flex flex-col font-['Manrope:Medium',sans-serif] font-medium grow justify-center leading-[20px] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#44483b] text-[14px] text-nowrap tracking-[0.1px]">
        <p className="[white-space-collapse:collapse] mb-0 overflow-ellipsis overflow-hidden">1.1.3 Arkiverer du analyseresultater, vedtak og tilbakemeldinger fra varemottaker og myndigheter?</p>
        <p className="[white-space-collapse:collapse] mb-0 overflow-ellipsis overflow-hidden">&nbsp;</p>
        <p className="[white-space-collapse:collapse] mb-0 overflow-ellipsis overflow-hidden">&nbsp;</p>
        <p className="[white-space-collapse:collapse] mb-0 overflow-ellipsis overflow-hidden">&nbsp;</p>
        <p className="[white-space-collapse:collapse] overflow-ellipsis overflow-hidden">&nbsp;</p>
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0">
      <div className="relative shrink-0 size-[24px]" data-name="snippet_folder">
        <div className="absolute inset-0 overflow-clip" data-name="snippet_folder">
          <div className="absolute inset-[16.67%_8.33%]" data-name="Vector">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 16">
              <path d={svgPaths.p1a10df00} fill="var(--fill-0, #174295)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Content5() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <QuestionText3 />
      <Frame10 />
    </div>
  );
}

function LeadingElement5() {
  return <div className="content-stretch flex items-center justify-center shrink-0" data-name="Leading element" />;
}

function QuestionText4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Question text">
      <div className="basis-0 flex flex-col font-['Manrope:Medium',sans-serif] font-medium grow justify-center leading-[20px] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#44483b] text-[14px] text-nowrap tracking-[0.1px]">
        <p className="[white-space-collapse:collapse] mb-0 overflow-ellipsis overflow-hidden">1.1.4 Har du en plan for hvordan du skal håndtere og eventuelt tilbakekalle helseskadelige produkter, samt varsle Mattilsynet og varemottaker?</p>
        <p className="[white-space-collapse:collapse] overflow-ellipsis overflow-hidden">&nbsp;</p>
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0">
      <div className="relative shrink-0 size-[24px]" data-name="snippet_folder">
        <div className="absolute inset-0 overflow-clip" data-name="snippet_folder">
          <div className="absolute inset-[16.67%_8.33%]" data-name="Vector">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 16">
              <path d={svgPaths.p1a10df00} fill="var(--fill-0, #174295)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Content6() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <QuestionText4 />
      <Frame11 />
    </div>
  );
}

function Component11QuestionGorups() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] isolate items-start relative shrink-0 w-full z-[12]" data-name="1.1 question gorups">
      <div className="bg-white relative rounded-[12px] shrink-0 w-full z-[4]" data-name="checklist Question">
        <div className="flex flex-row items-center size-full">
          <div className="box-border content-stretch flex gap-[16px] items-center px-[8px] py-[12px] relative w-full">
            <LeadingElement2 />
            <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Status icon">
              <div className="relative shrink-0 size-[24px]" data-name="pending">
                <div className="absolute inset-0 overflow-clip" data-name="pending">
                  <div className="absolute inset-[8.333%]" data-name="Vector">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                      <g id="Vector">
                        <path d={svgPaths.p3a58b490} fill="var(--fill-0, #44483B)" />
                        <path d={svgPaths.p14b56c80} fill="var(--fill-0, #44483B)" />
                        <path d={svgPaths.p51e9a00} fill="var(--fill-0, #44483B)" />
                        <path d={svgPaths.p276d07f0} fill="var(--fill-0, #44483B)" />
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <Content3 />
          </div>
        </div>
      </div>
      <div className="bg-white relative rounded-[12px] shrink-0 w-full z-[3]" data-name="checklist Question">
        <div className="flex flex-row items-center size-full">
          <div className="box-border content-stretch flex gap-[16px] items-center px-[8px] py-[12px] relative w-full">
            <LeadingElement3 />
            <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Status icon">
              <div className="relative shrink-0 size-[24px]" data-name="pending">
                <div className="absolute inset-0 overflow-clip" data-name="pending">
                  <div className="absolute inset-[8.333%]" data-name="Vector">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                      <g id="Vector">
                        <path d={svgPaths.p3a58b490} fill="var(--fill-0, #44483B)" />
                        <path d={svgPaths.p14b56c80} fill="var(--fill-0, #44483B)" />
                        <path d={svgPaths.p51e9a00} fill="var(--fill-0, #44483B)" />
                        <path d={svgPaths.p276d07f0} fill="var(--fill-0, #44483B)" />
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <Content4 />
          </div>
        </div>
      </div>
      <div className="bg-white relative rounded-[12px] shrink-0 w-full z-[2]" data-name="checklist Question">
        <div className="flex flex-row items-center size-full">
          <div className="box-border content-stretch flex gap-[16px] items-center px-[8px] py-[12px] relative w-full">
            <LeadingElement4 />
            <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Status icon">
              <div className="relative shrink-0 size-[24px]" data-name="pending">
                <div className="absolute inset-0 overflow-clip" data-name="pending">
                  <div className="absolute inset-[8.333%]" data-name="Vector">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                      <g id="Vector">
                        <path d={svgPaths.p3a58b490} fill="var(--fill-0, #44483B)" />
                        <path d={svgPaths.p14b56c80} fill="var(--fill-0, #44483B)" />
                        <path d={svgPaths.p51e9a00} fill="var(--fill-0, #44483B)" />
                        <path d={svgPaths.p276d07f0} fill="var(--fill-0, #44483B)" />
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <Content5 />
          </div>
        </div>
      </div>
      <div className="bg-white relative rounded-[12px] shrink-0 w-full z-[1]" data-name="checklist Question">
        <div className="flex flex-row items-center size-full">
          <div className="box-border content-stretch flex gap-[16px] items-center px-[8px] py-[12px] relative w-full">
            <LeadingElement5 />
            <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Status icon">
              <div className="relative shrink-0 size-[24px]" data-name="pending">
                <div className="absolute inset-0 overflow-clip" data-name="pending">
                  <div className="absolute inset-[8.333%]" data-name="Vector">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                      <g id="Vector">
                        <path d={svgPaths.p3a58b490} fill="var(--fill-0, #44483B)" />
                        <path d={svgPaths.p14b56c80} fill="var(--fill-0, #44483B)" />
                        <path d={svgPaths.p51e9a00} fill="var(--fill-0, #44483B)" />
                        <path d={svgPaths.p276d07f0} fill="var(--fill-0, #44483B)" />
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <Content6 />
          </div>
        </div>
      </div>
    </div>
  );
}

function QuestionText5() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Question text">
      <div className="basis-0 flex flex-col font-['Manrope:Medium',sans-serif] font-medium grow justify-center leading-[0] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#44483b] text-[14px] text-nowrap tracking-[0.1px]">
        <p className="[white-space-collapse:collapse] leading-[20px] overflow-ellipsis overflow-hidden">1.2 GJØDSLINGSPLAN OG JORDPRØVER</p>
      </div>
    </div>
  );
}

function Content7() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <QuestionText5 />
    </div>
  );
}

function QuestionText6() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Question text">
      <div className="basis-0 flex flex-col font-['Manrope:Medium',sans-serif] font-medium grow justify-center leading-[0] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#44483b] text-[14px] text-nowrap tracking-[0.1px]">
        <p className="[white-space-collapse:collapse] leading-[20px] overflow-ellipsis overflow-hidden">1.3 LAGRING OG BRUK AV HUSDYRGJØDSEL</p>
      </div>
    </div>
  );
}

function Content8() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <QuestionText6 />
    </div>
  );
}

function QuestionText7() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Question text">
      <div className="basis-0 flex flex-col font-['Manrope:Medium',sans-serif] font-medium grow justify-center leading-[0] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#44483b] text-[14px] text-nowrap tracking-[0.1px]">
        <p className="[white-space-collapse:collapse] leading-[20px] overflow-ellipsis overflow-hidden">1.4 BRUK AV AVLØPSSLAM, KOMPOST, BIOREST ELLER ANNEN ORGANISK GJØDSEL</p>
      </div>
    </div>
  );
}

function Content9() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <QuestionText7 />
    </div>
  );
}

function QuestionText8() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Question text">
      <div className="basis-0 flex flex-col font-['Manrope:Medium',sans-serif] font-medium grow justify-center leading-[0] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#44483b] text-[14px] text-nowrap tracking-[0.1px]">
        <p className="[white-space-collapse:collapse] leading-[20px] overflow-ellipsis overflow-hidden">1.5 LAGRING OG BRUK AV PLANTEVERNMIDLER</p>
      </div>
    </div>
  );
}

function Content10() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <QuestionText8 />
    </div>
  );
}

function LeadingElement10() {
  return <div className="content-stretch flex items-center justify-center shrink-0" data-name="Leading element" />;
}

function QuestionText9() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Question text">
      <div className="basis-0 flex flex-col font-['Manrope:Medium',sans-serif] font-medium grow justify-center leading-[20px] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#174295] text-[14px] text-nowrap tracking-[0.1px]">
        <p className="[white-space-collapse:collapse] mb-0 overflow-ellipsis overflow-hidden">1.5.1 Kan du dokumentere at plantevernmidler kun er brukt av personell med gyldig autorisasjon?</p>
        <p className="[white-space-collapse:collapse] mb-0 overflow-ellipsis overflow-hidden">&nbsp;</p>
        <p className="[white-space-collapse:collapse] overflow-ellipsis overflow-hidden">&nbsp;</p>
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0">
      <div className="relative shrink-0 size-[24px]" data-name="snippet_folder">
        <div className="absolute inset-0 overflow-clip" data-name="snippet_folder">
          <div className="absolute inset-[16.67%_8.33%]" data-name="Vector">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 16">
              <path d={svgPaths.p1a10df00} fill="var(--fill-0, #174295)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Content11() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <QuestionText9 />
      <Frame12 />
    </div>
  );
}

function LeadingElement11() {
  return <div className="content-stretch flex items-center justify-center shrink-0" data-name="Leading element" />;
}

function QuestionText10() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Question text">
      <div className="basis-0 flex flex-col font-['Manrope:Medium',sans-serif] font-medium grow justify-center leading-[0] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#44483b] text-[14px] text-nowrap tracking-[0.1px]">
        <p className="[white-space-collapse:collapse] leading-[20px] overflow-ellipsis overflow-hidden">1.5.2 Er plantevernmidlene brukt i samsvar med godkjent etikett?</p>
      </div>
    </div>
  );
}

function Content12() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <QuestionText10 />
    </div>
  );
}

function LeadingElement12() {
  return <div className="content-stretch flex items-center justify-center shrink-0" data-name="Leading element" />;
}

function QuestionText11() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Question text">
      <div className="basis-0 flex flex-col font-['Manrope:Medium',sans-serif] font-medium grow justify-center leading-[0] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#44483b] text-[14px] text-nowrap tracking-[0.1px]">
        <p className="[white-space-collapse:collapse] leading-[20px] overflow-ellipsis overflow-hidden">1.5.4 Oppfyller du kravene til integrert plantevern, beskyttelse av vannmiljø, og journalføring?</p>
      </div>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0">
      <div className="relative shrink-0 size-[24px]" data-name="snippet_folder">
        <div className="absolute inset-0 overflow-clip" data-name="snippet_folder">
          <div className="absolute inset-[16.67%_8.33%]" data-name="Vector">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 16">
              <path d={svgPaths.p1a10df00} fill="var(--fill-0, #174295)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Content13() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <QuestionText11 />
      <Frame13 />
    </div>
  );
}

function LeadingElement13() {
  return <div className="content-stretch flex items-center justify-center shrink-0" data-name="Leading element" />;
}

function QuestionText12() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Question text">
      <div className="basis-0 flex flex-col font-['Manrope:Medium',sans-serif] font-medium grow justify-center leading-[20px] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#44483b] text-[14px] text-nowrap tracking-[0.1px]">
        <p className="[white-space-collapse:collapse] mb-0 overflow-ellipsis overflow-hidden">1.5.5 Oppbevarer du plantevernmidlene avlåst og merket, og i henhold til eventuelle tilleggskrav som står på etiketten?</p>
        <p className="[white-space-collapse:collapse] overflow-ellipsis overflow-hidden">&nbsp;</p>
      </div>
    </div>
  );
}

function Content14() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <QuestionText12 />
    </div>
  );
}

function Component15QuestionGorups() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] isolate items-start relative shrink-0 w-full z-[7]" data-name="1.5 question gorups">
      <div className="bg-[#dae2ff] relative rounded-[12px] shrink-0 w-full z-[8]" data-name="checklist Question">
        <div className="flex flex-row items-center size-full">
          <div className="box-border content-stretch flex gap-[16px] items-center px-[8px] py-[12px] relative w-full">
            <LeadingElement10 />
            <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Status icon">
              <div className="relative shrink-0 size-[24px]" data-name="pending">
                <div className="absolute inset-0 overflow-clip" data-name="pending">
                  <div className="absolute inset-[8.333%]" data-name="Vector">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                      <g id="Vector">
                        <path d={svgPaths.p3a58b490} fill="var(--fill-0, #44483B)" />
                        <path d={svgPaths.p14b56c80} fill="var(--fill-0, #44483B)" />
                        <path d={svgPaths.p51e9a00} fill="var(--fill-0, #44483B)" />
                        <path d={svgPaths.p276d07f0} fill="var(--fill-0, #44483B)" />
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <Content11 />
          </div>
        </div>
      </div>
      <div className="bg-white relative rounded-[12px] shrink-0 w-full z-[7]" data-name="checklist Question">
        <div className="flex flex-row items-center size-full">
          <div className="box-border content-stretch flex gap-[16px] items-center px-[8px] py-[12px] relative w-full">
            <LeadingElement11 />
            <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Status icon">
              <div className="relative shrink-0 size-[24px]" data-name="pending">
                <div className="absolute inset-0 overflow-clip" data-name="pending">
                  <div className="absolute inset-[8.333%]" data-name="Vector">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                      <g id="Vector">
                        <path d={svgPaths.p3a58b490} fill="var(--fill-0, #44483B)" />
                        <path d={svgPaths.p14b56c80} fill="var(--fill-0, #44483B)" />
                        <path d={svgPaths.p51e9a00} fill="var(--fill-0, #44483B)" />
                        <path d={svgPaths.p276d07f0} fill="var(--fill-0, #44483B)" />
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <Content12 />
          </div>
        </div>
      </div>
      <div className="bg-white relative rounded-[12px] shrink-0 w-full z-[5]" data-name="checklist Question">
        <div className="flex flex-row items-center size-full">
          <div className="box-border content-stretch flex gap-[16px] items-center px-[8px] py-[12px] relative w-full">
            <LeadingElement12 />
            <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Status icon">
              <div className="relative shrink-0 size-[24px]" data-name="pending">
                <div className="absolute inset-0 overflow-clip" data-name="pending">
                  <div className="absolute inset-[8.333%]" data-name="Vector">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                      <g id="Vector">
                        <path d={svgPaths.p3a58b490} fill="var(--fill-0, #44483B)" />
                        <path d={svgPaths.p14b56c80} fill="var(--fill-0, #44483B)" />
                        <path d={svgPaths.p51e9a00} fill="var(--fill-0, #44483B)" />
                        <path d={svgPaths.p276d07f0} fill="var(--fill-0, #44483B)" />
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <Content13 />
          </div>
        </div>
      </div>
      <div className="bg-white relative rounded-[12px] shrink-0 w-full z-[4]" data-name="checklist Question">
        <div className="flex flex-row items-center size-full">
          <div className="box-border content-stretch flex gap-[16px] items-center px-[8px] py-[12px] relative w-full">
            <LeadingElement13 />
            <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Status icon">
              <div className="relative shrink-0 size-[24px]" data-name="pending">
                <div className="absolute inset-0 overflow-clip" data-name="pending">
                  <div className="absolute inset-[8.333%]" data-name="Vector">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                      <g id="Vector">
                        <path d={svgPaths.p3a58b490} fill="var(--fill-0, #44483B)" />
                        <path d={svgPaths.p14b56c80} fill="var(--fill-0, #44483B)" />
                        <path d={svgPaths.p51e9a00} fill="var(--fill-0, #44483B)" />
                        <path d={svgPaths.p276d07f0} fill="var(--fill-0, #44483B)" />
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <Content14 />
          </div>
        </div>
      </div>
    </div>
  );
}

function QuestionText13() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Question text">
      <div className="basis-0 flex flex-col font-['Manrope:Medium',sans-serif] font-medium grow justify-center leading-[20px] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#44483b] text-[14px] text-nowrap tracking-[0.1px]">
        <p className="[white-space-collapse:collapse] mb-0 overflow-ellipsis overflow-hidden">1.6 MELDEPLIKTIG UGRESS OG PLANTESKADEGJØRERE</p>
        <p className="[white-space-collapse:collapse] overflow-ellipsis overflow-hidden">&nbsp;</p>
      </div>
    </div>
  );
}

function Content15() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <QuestionText13 />
    </div>
  );
}

function QuestionText14() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Question text">
      <div className="basis-0 flex flex-col font-['Manrope:Medium',sans-serif] font-medium grow justify-center leading-[20px] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#44483b] text-[14px] text-nowrap tracking-[0.1px]">
        <p className="[white-space-collapse:collapse] mb-0 overflow-ellipsis overflow-hidden">1.7 LAGRING AV DRIFTSMIDLER, PUNKTUTSLIPP OG AVFALLSHÅNDTERING</p>
        <p className="[white-space-collapse:collapse] overflow-ellipsis overflow-hidden">&nbsp;</p>
      </div>
    </div>
  );
}

function Content16() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <QuestionText14 />
    </div>
  );
}

function QuestionText15() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Question text">
      <div className="basis-0 flex flex-col font-['Manrope:Medium',sans-serif] font-medium grow justify-center leading-[20px] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#44483b] text-[14px] text-nowrap tracking-[0.1px]">
        <p className="[white-space-collapse:collapse] mb-0 overflow-ellipsis overflow-hidden">1.8 SKADEGJØRERE I HUSDYRROM, LAGER, SORTERINGS- OG FOREDLINGSROM</p>
        <p className="[white-space-collapse:collapse] overflow-ellipsis overflow-hidden">&nbsp;</p>
      </div>
    </div>
  );
}

function Content17() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <QuestionText15 />
    </div>
  );
}

function QuestionText16() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Question text">
      <div className="basis-0 flex flex-col font-['Manrope:Medium',sans-serif] font-medium grow justify-center leading-[0] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#44483b] text-[14px] text-nowrap tracking-[0.1px]">
        <p className="[white-space-collapse:collapse] leading-[20px] overflow-ellipsis overflow-hidden">1.9 ET KLIMAVENNLIG LANDBRUK</p>
      </div>
    </div>
  );
}

function Content18() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <QuestionText16 />
    </div>
  );
}

function QuestionText17() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Question text">
      <div className="basis-0 flex flex-col font-['Manrope:Medium',sans-serif] font-medium grow justify-center leading-[20px] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#44483b] text-[14px] text-nowrap tracking-[0.1px]">
        <p className="[white-space-collapse:collapse] mb-0 overflow-ellipsis overflow-hidden">1.10 KULTURMINNER, KULTURLANDSKAP OG BIOLOGISK MANGFOLD - REGIONALE OG LOKALE MILJØBESTEMMELSER</p>
        <p className="[white-space-collapse:collapse] overflow-ellipsis overflow-hidden">&nbsp;</p>
      </div>
    </div>
  );
}

function Content19() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <QuestionText17 />
    </div>
  );
}

function QuestionText18() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Question text">
      <div className="basis-0 flex flex-col font-['Manrope:Medium',sans-serif] font-medium grow justify-center leading-[20px] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#44483b] text-[14px] text-nowrap tracking-[0.1px]">
        <p className="[white-space-collapse:collapse] mb-0 overflow-ellipsis overflow-hidden">1.11 SMITTEFOREBYGGING VED KJØP AV BRUKT UTSTYR FRA UTLANDET</p>
        <p className="[white-space-collapse:collapse] overflow-ellipsis overflow-hidden">&nbsp;</p>
      </div>
    </div>
  );
}

function Content20() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <QuestionText18 />
    </div>
  );
}

function GroupQuestions() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] isolate items-start relative shrink-0 w-full z-[1]" data-name="Group Questions">
      <button className="bg-white cursor-pointer relative rounded-[12px] shrink-0 w-full z-[13]" data-name="checklist Question">
        <div className="flex flex-row items-center size-full">
          <div className="box-border content-stretch flex gap-[16px] items-center px-[8px] py-[12px] relative w-full">
            <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Status icon">
              <div className="relative shrink-0 size-[24px]" data-name="pending">
                <div className="absolute inset-0 overflow-clip" data-name="pending">
                  <div className="absolute inset-[8.333%]" data-name="Vector">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                      <g id="Vector">
                        <path d={svgPaths.p3a58b490} fill="var(--fill-0, #44483B)" />
                        <path d={svgPaths.p14b56c80} fill="var(--fill-0, #44483B)" />
                        <path d={svgPaths.p51e9a00} fill="var(--fill-0, #44483B)" />
                        <path d={svgPaths.p276d07f0} fill="var(--fill-0, #44483B)" />
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <Content2 />
            <div className="content-stretch cursor-pointer flex gap-[10px] items-center relative shrink-0" data-name="Expand Q" role="button" tabIndex="0">
              <div className="relative shrink-0 size-[24px]" data-name="arrow_drop_down">
                <div className="absolute inset-[41.67%_29.17%_37.5%_29.17%]" data-name="icon">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 5">
                    <path d="M5 5L0 0H10L5 5Z" fill="var(--fill-0, #44483B)" id="icon" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </button>
      <Component11QuestionGorups />
      <div className="bg-white relative rounded-[12px] shrink-0 w-full z-[11]" data-name="checklist Question">
        <div className="flex flex-row items-center size-full">
          <div className="box-border content-stretch flex gap-[16px] items-center px-[8px] py-[12px] relative w-full">
            <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Status icon">
              <div className="relative shrink-0 size-[24px]" data-name="pending">
                <div className="absolute inset-0 overflow-clip" data-name="pending">
                  <div className="absolute inset-[8.333%]" data-name="Vector">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                      <g id="Vector">
                        <path d={svgPaths.p3a58b490} fill="var(--fill-0, #44483B)" />
                        <path d={svgPaths.p14b56c80} fill="var(--fill-0, #44483B)" />
                        <path d={svgPaths.p51e9a00} fill="var(--fill-0, #44483B)" />
                        <path d={svgPaths.p276d07f0} fill="var(--fill-0, #44483B)" />
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <Content7 />
            <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="Expand Q">
              <div className="relative shrink-0 size-[24px]" data-name="arrow_drop_down">
                <div className="absolute inset-[41.67%_29.17%_37.5%_29.17%]" data-name="icon">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 5">
                    <path d="M5 5L0 0H10L5 5Z" fill="var(--fill-0, #44483B)" id="icon" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white relative rounded-[12px] shrink-0 w-full z-10" data-name="checklist Question">
        <div className="flex flex-row items-center size-full">
          <div className="box-border content-stretch flex gap-[16px] items-center px-[8px] py-[12px] relative w-full">
            <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Status icon">
              <div className="relative shrink-0 size-[24px]" data-name="pending">
                <div className="absolute inset-0 overflow-clip" data-name="pending">
                  <div className="absolute inset-[8.333%]" data-name="Vector">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                      <g id="Vector">
                        <path d={svgPaths.p3a58b490} fill="var(--fill-0, #44483B)" />
                        <path d={svgPaths.p14b56c80} fill="var(--fill-0, #44483B)" />
                        <path d={svgPaths.p51e9a00} fill="var(--fill-0, #44483B)" />
                        <path d={svgPaths.p276d07f0} fill="var(--fill-0, #44483B)" />
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <Content8 />
            <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="Expand Q">
              <div className="relative shrink-0 size-[24px]" data-name="arrow_drop_down">
                <div className="absolute inset-[41.67%_29.17%_37.5%_29.17%]" data-name="icon">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 5">
                    <path d="M5 5L0 0H10L5 5Z" fill="var(--fill-0, #44483B)" id="icon" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white relative rounded-[12px] shrink-0 w-full z-[9]" data-name="checklist Question">
        <div className="flex flex-row items-center size-full">
          <div className="box-border content-stretch flex gap-[16px] items-center px-[8px] py-[12px] relative w-full">
            <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Status icon">
              <div className="relative shrink-0 size-[24px]" data-name="pending">
                <div className="absolute inset-0 overflow-clip" data-name="pending">
                  <div className="absolute inset-[8.333%]" data-name="Vector">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                      <g id="Vector">
                        <path d={svgPaths.p3a58b490} fill="var(--fill-0, #44483B)" />
                        <path d={svgPaths.p14b56c80} fill="var(--fill-0, #44483B)" />
                        <path d={svgPaths.p51e9a00} fill="var(--fill-0, #44483B)" />
                        <path d={svgPaths.p276d07f0} fill="var(--fill-0, #44483B)" />
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <Content9 />
            <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="Expand Q">
              <div className="relative shrink-0 size-[24px]" data-name="arrow_drop_down">
                <div className="absolute inset-[41.67%_29.17%_37.5%_29.17%]" data-name="icon">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 5">
                    <path d="M5 5L0 0H10L5 5Z" fill="var(--fill-0, #44483B)" id="icon" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button className="bg-white cursor-pointer relative rounded-[12px] shrink-0 w-full z-[8]" data-name="checklist Question">
        <div className="flex flex-row items-center size-full">
          <div className="box-border content-stretch flex gap-[16px] items-center px-[8px] py-[12px] relative w-full">
            <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Status icon">
              <div className="relative shrink-0 size-[24px]" data-name="pending">
                <div className="absolute inset-0 overflow-clip" data-name="pending">
                  <div className="absolute inset-[8.333%]" data-name="Vector">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                      <g id="Vector">
                        <path d={svgPaths.p3a58b490} fill="var(--fill-0, #44483B)" />
                        <path d={svgPaths.p14b56c80} fill="var(--fill-0, #44483B)" />
                        <path d={svgPaths.p51e9a00} fill="var(--fill-0, #44483B)" />
                        <path d={svgPaths.p276d07f0} fill="var(--fill-0, #44483B)" />
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <Content10 />
            <div className="content-stretch cursor-pointer flex gap-[10px] items-center relative shrink-0" data-name="Expand Q" role="button" tabIndex="0">
              <div className="relative shrink-0 size-[24px]" data-name="arrow_drop_down">
                <div className="absolute inset-[41.67%_29.17%_37.5%_29.17%]" data-name="icon">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 5">
                    <path d="M5 5L0 0H10L5 5Z" fill="var(--fill-0, #44483B)" id="icon" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </button>
      <Component15QuestionGorups />
      <div className="bg-white relative rounded-[12px] shrink-0 w-full z-[6]" data-name="checklist Question">
        <div className="flex flex-row items-center size-full">
          <div className="box-border content-stretch flex gap-[16px] items-center px-[8px] py-[12px] relative w-full">
            <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Status icon">
              <div className="relative shrink-0 size-[24px]" data-name="pending">
                <div className="absolute inset-0 overflow-clip" data-name="pending">
                  <div className="absolute inset-[8.333%]" data-name="Vector">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                      <g id="Vector">
                        <path d={svgPaths.p3a58b490} fill="var(--fill-0, #44483B)" />
                        <path d={svgPaths.p14b56c80} fill="var(--fill-0, #44483B)" />
                        <path d={svgPaths.p51e9a00} fill="var(--fill-0, #44483B)" />
                        <path d={svgPaths.p276d07f0} fill="var(--fill-0, #44483B)" />
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <Content15 />
            <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="Expand Q">
              <div className="relative shrink-0 size-[24px]" data-name="arrow_drop_down">
                <div className="absolute inset-[41.67%_29.17%_37.5%_29.17%]" data-name="icon">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 5">
                    <path d="M5 5L0 0H10L5 5Z" fill="var(--fill-0, #44483B)" id="icon" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white relative rounded-[12px] shrink-0 w-full z-[5]" data-name="checklist Question">
        <div className="flex flex-row items-center size-full">
          <div className="box-border content-stretch flex gap-[16px] items-center px-[8px] py-[12px] relative w-full">
            <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Status icon">
              <div className="relative shrink-0 size-[24px]" data-name="pending">
                <div className="absolute inset-0 overflow-clip" data-name="pending">
                  <div className="absolute inset-[8.333%]" data-name="Vector">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                      <g id="Vector">
                        <path d={svgPaths.p3a58b490} fill="var(--fill-0, #44483B)" />
                        <path d={svgPaths.p14b56c80} fill="var(--fill-0, #44483B)" />
                        <path d={svgPaths.p51e9a00} fill="var(--fill-0, #44483B)" />
                        <path d={svgPaths.p276d07f0} fill="var(--fill-0, #44483B)" />
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <Content16 />
            <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="Expand Q">
              <div className="relative shrink-0 size-[24px]" data-name="arrow_drop_down">
                <div className="absolute inset-[41.67%_29.17%_37.5%_29.17%]" data-name="icon">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 5">
                    <path d="M5 5L0 0H10L5 5Z" fill="var(--fill-0, #44483B)" id="icon" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white relative rounded-[12px] shrink-0 w-full z-[4]" data-name="checklist Question">
        <div className="flex flex-row items-center size-full">
          <div className="box-border content-stretch flex gap-[16px] items-center px-[8px] py-[12px] relative w-full">
            <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Status icon">
              <div className="relative shrink-0 size-[24px]" data-name="pending">
                <div className="absolute inset-0 overflow-clip" data-name="pending">
                  <div className="absolute inset-[8.333%]" data-name="Vector">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                      <g id="Vector">
                        <path d={svgPaths.p3a58b490} fill="var(--fill-0, #44483B)" />
                        <path d={svgPaths.p14b56c80} fill="var(--fill-0, #44483B)" />
                        <path d={svgPaths.p51e9a00} fill="var(--fill-0, #44483B)" />
                        <path d={svgPaths.p276d07f0} fill="var(--fill-0, #44483B)" />
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <Content17 />
            <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="Expand Q">
              <div className="relative shrink-0 size-[24px]" data-name="arrow_drop_down">
                <div className="absolute inset-[41.67%_29.17%_37.5%_29.17%]" data-name="icon">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 5">
                    <path d="M5 5L0 0H10L5 5Z" fill="var(--fill-0, #44483B)" id="icon" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white relative rounded-[12px] shrink-0 w-full z-[3]" data-name="checklist Question">
        <div className="flex flex-row items-center size-full">
          <div className="box-border content-stretch flex gap-[16px] items-center px-[8px] py-[12px] relative w-full">
            <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Status icon">
              <div className="relative shrink-0 size-[24px]" data-name="pending">
                <div className="absolute inset-0 overflow-clip" data-name="pending">
                  <div className="absolute inset-[8.333%]" data-name="Vector">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                      <g id="Vector">
                        <path d={svgPaths.p3a58b490} fill="var(--fill-0, #44483B)" />
                        <path d={svgPaths.p14b56c80} fill="var(--fill-0, #44483B)" />
                        <path d={svgPaths.p51e9a00} fill="var(--fill-0, #44483B)" />
                        <path d={svgPaths.p276d07f0} fill="var(--fill-0, #44483B)" />
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <Content18 />
            <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="Expand Q">
              <div className="relative shrink-0 size-[24px]" data-name="arrow_drop_down">
                <div className="absolute inset-[41.67%_29.17%_37.5%_29.17%]" data-name="icon">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 5">
                    <path d="M5 5L0 0H10L5 5Z" fill="var(--fill-0, #44483B)" id="icon" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white relative rounded-[12px] shrink-0 w-full z-[2]" data-name="checklist Question">
        <div className="flex flex-row items-center size-full">
          <div className="box-border content-stretch flex gap-[16px] items-center px-[8px] py-[12px] relative w-full">
            <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Status icon">
              <div className="relative shrink-0 size-[24px]" data-name="pending">
                <div className="absolute inset-0 overflow-clip" data-name="pending">
                  <div className="absolute inset-[8.333%]" data-name="Vector">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                      <g id="Vector">
                        <path d={svgPaths.p3a58b490} fill="var(--fill-0, #44483B)" />
                        <path d={svgPaths.p14b56c80} fill="var(--fill-0, #44483B)" />
                        <path d={svgPaths.p51e9a00} fill="var(--fill-0, #44483B)" />
                        <path d={svgPaths.p276d07f0} fill="var(--fill-0, #44483B)" />
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <Content19 />
            <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="Expand Q">
              <div className="relative shrink-0 size-[24px]" data-name="arrow_drop_down">
                <div className="absolute inset-[41.67%_29.17%_37.5%_29.17%]" data-name="icon">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 5">
                    <path d="M5 5L0 0H10L5 5Z" fill="var(--fill-0, #44483B)" id="icon" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white relative rounded-[12px] shrink-0 w-full z-[1]" data-name="checklist Question">
        <div className="flex flex-row items-center size-full">
          <div className="box-border content-stretch flex gap-[16px] items-center px-[8px] py-[12px] relative w-full">
            <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Status icon">
              <div className="relative shrink-0 size-[24px]" data-name="pending">
                <div className="absolute inset-0 overflow-clip" data-name="pending">
                  <div className="absolute inset-[8.333%]" data-name="Vector">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                      <g id="Vector">
                        <path d={svgPaths.p3a58b490} fill="var(--fill-0, #44483B)" />
                        <path d={svgPaths.p14b56c80} fill="var(--fill-0, #44483B)" />
                        <path d={svgPaths.p51e9a00} fill="var(--fill-0, #44483B)" />
                        <path d={svgPaths.p276d07f0} fill="var(--fill-0, #44483B)" />
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <Content20 />
            <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="Expand Q">
              <div className="relative shrink-0 size-[24px]" data-name="arrow_drop_down">
                <div className="absolute inset-[41.67%_29.17%_37.5%_29.17%]" data-name="icon">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 5">
                    <path d="M5 5L0 0H10L5 5Z" fill="var(--fill-0, #44483B)" id="icon" />
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

function ChecklistQuestions() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[8px] isolate items-start pb-[16px] pt-0 px-0 relative shrink-0 w-full z-[7]" data-name="Checklist questions">
      <div className="bg-white box-border content-stretch flex gap-[16px] items-center min-h-[64px] px-0 py-[8px] relative rounded-[12px] shrink-0 w-full z-[2]" data-name="checklist Question">
        <Frame7 />
      </div>
      <GroupQuestions />
    </div>
  );
}

function LeadingElement20() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0" data-name="Leading element">
      <div className="bg-[#eff1e7] overflow-clip relative rounded-[100px] shrink-0 size-[40px]" data-name=".Building Blocks/Monogram">
        <div className="absolute flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] left-1/2 size-[40px] text-[#284000] text-[16px] text-center top-1/2 tracking-[0.15px] translate-x-[-50%] translate-y-[-50%]">
          <p className="leading-[24px]">10</p>
        </div>
      </div>
    </div>
  );
}

function Content21() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center leading-[0] min-h-px min-w-px overflow-clip relative shrink-0 tracking-[0.5px]" data-name="Content">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[#44483b] text-[12px] w-full">
        <p className="leading-[16px]">2/8</p>
      </div>
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#1a1c16] text-[16px] w-full">
        <p className="leading-[24px]">Generelle krav til gården</p>
      </div>
    </div>
  );
}

function TrailingElement1() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="Trailing element">
      <div className="relative shrink-0 size-[24px]" data-name="expand_more">
        <div className="absolute inset-0 overflow-clip" data-name="expand_more">
          <div className="absolute bottom-[34.56%] left-1/4 right-1/4 top-[34.56%]" data-name="Vector">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 8">
              <path d={svgPaths.p180a8a80} fill="var(--fill-0, #44483B)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function StateLayer22() {
  return (
    <div className="basis-0 box-border content-stretch flex gap-[16px] grow items-center min-h-px min-w-px px-0 py-[8px] relative shrink-0 w-full" data-name="state-layer">
      <LeadingElement20 />
      <Content21 />
      <TrailingElement1 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="basis-0 grow h-[64px] min-h-px min-w-px relative shrink-0">
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] h-[64px] items-start justify-center px-[8px] py-0 relative w-full">
          <div className="content-stretch flex flex-col h-[72px] items-center justify-center min-h-[72px] relative shrink-0 w-full" data-name="List item/List Item: 0 Density">
            <div className="absolute inset-0" data-name="state-layer overlay" />
            <StateLayer22 />
          </div>
        </div>
      </div>
    </div>
  );
}

function LeadingElement21() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0" data-name="Leading element">
      <div className="bg-[#eff1e7] overflow-clip relative rounded-[100px] shrink-0 size-[40px]" data-name=".Building Blocks/Monogram">
        <div className="absolute flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] left-1/2 size-[40px] text-[#284000] text-[16px] text-center top-1/2 tracking-[0.15px] translate-x-[-50%] translate-y-[-50%]">
          <p className="leading-[24px]">30</p>
        </div>
      </div>
    </div>
  );
}

function Content22() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center leading-[0] min-h-px min-w-px overflow-clip relative shrink-0 tracking-[0.5px]" data-name="Content">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[#44483b] text-[12px] w-full">
        <p className="leading-[16px]">2/8</p>
      </div>
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#1a1c16] text-[16px] w-full">
        <p className="leading-[24px]">Generelle krav til gården</p>
      </div>
    </div>
  );
}

function TrailingElement2() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="Trailing element">
      <div className="relative shrink-0 size-[24px]" data-name="expand_more">
        <div className="absolute inset-0 overflow-clip" data-name="expand_more">
          <div className="absolute bottom-[34.56%] left-1/4 right-1/4 top-[34.56%]" data-name="Vector">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 8">
              <path d={svgPaths.p180a8a80} fill="var(--fill-0, #44483B)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function StateLayer23() {
  return (
    <div className="basis-0 box-border content-stretch flex gap-[16px] grow items-center min-h-px min-w-px px-0 py-[8px] relative shrink-0 w-full" data-name="state-layer">
      <LeadingElement21 />
      <Content22 />
      <TrailingElement2 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="basis-0 grow h-[64px] min-h-px min-w-px relative shrink-0">
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] h-[64px] items-start justify-center px-[8px] py-0 relative w-full">
          <div className="content-stretch flex flex-col h-[72px] items-center justify-center min-h-[72px] relative shrink-0 w-full" data-name="List item/List Item: 0 Density">
            <div className="absolute inset-0" data-name="state-layer overlay" />
            <StateLayer23 />
          </div>
        </div>
      </div>
    </div>
  );
}

function LeadingElement22() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0" data-name="Leading element">
      <div className="bg-[#eff1e7] overflow-clip relative rounded-[100px] shrink-0 size-[40px]" data-name=".Building Blocks/Monogram">
        <div className="absolute flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] left-1/2 size-[40px] text-[#284000] text-[16px] text-center top-1/2 tracking-[0.15px] translate-x-[-50%] translate-y-[-50%]">
          <p className="leading-[24px]">32</p>
        </div>
      </div>
    </div>
  );
}

function Content23() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center leading-[0] min-h-px min-w-px overflow-clip relative shrink-0 tracking-[0.5px]" data-name="Content">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[#44483b] text-[12px] w-full">
        <p className="leading-[16px]">2/8</p>
      </div>
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#1a1c16] text-[16px] w-full">
        <p className="leading-[24px]">Generelle krav til gården</p>
      </div>
    </div>
  );
}

function TrailingElement3() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="Trailing element">
      <div className="relative shrink-0 size-[24px]" data-name="expand_more">
        <div className="absolute inset-0 overflow-clip" data-name="expand_more">
          <div className="absolute bottom-[34.56%] left-1/4 right-1/4 top-[34.56%]" data-name="Vector">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 8">
              <path d={svgPaths.p180a8a80} fill="var(--fill-0, #44483B)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function StateLayer24() {
  return (
    <div className="basis-0 box-border content-stretch flex gap-[16px] grow items-center min-h-px min-w-px px-0 py-[8px] relative shrink-0 w-full" data-name="state-layer">
      <LeadingElement22 />
      <Content23 />
      <TrailingElement3 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="basis-0 grow h-[64px] min-h-px min-w-px relative shrink-0">
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] h-[64px] items-start justify-center px-[8px] py-0 relative w-full">
          <div className="content-stretch flex flex-col h-[72px] items-center justify-center min-h-[72px] relative shrink-0 w-full" data-name="List item/List Item: 0 Density">
            <div className="absolute inset-0" data-name="state-layer overlay" />
            <StateLayer24 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame18() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[16px] grow isolate items-start min-h-px min-w-px overflow-x-clip overflow-y-auto relative shrink-0 w-full">
      <div className="content-stretch flex items-start relative shrink-0 w-[360px] z-10" data-name="Search">
        <div className="basis-0 bg-[#e9e9df] content-stretch flex gap-[4px] grow h-[56px] items-center max-w-[720px] min-h-px min-w-[360px] overflow-clip relative rounded-[28px] shrink-0" data-name="Search bar">
          <StateLayer20 />
        </div>
      </div>
      <ChecklistQuestions />
      <div className="bg-white box-border content-stretch flex gap-[16px] items-center min-h-[64px] px-0 py-[8px] relative rounded-[12px] shrink-0 w-full z-[3]" data-name="checklist Question">
        <Frame14 />
      </div>
      <div className="bg-white box-border content-stretch flex gap-[16px] items-center min-h-[64px] px-0 py-[8px] relative rounded-[12px] shrink-0 w-full z-[2]" data-name="checklist Question">
        <Frame16 />
      </div>
      <div className="bg-white box-border content-stretch flex gap-[16px] items-center min-h-[64px] px-0 py-[8px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="checklist Question">
        <Frame17 />
      </div>
    </div>
  );
}

function QuestionNavigation() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[16px] h-full items-start p-[16px] relative shrink-0 w-[400px] z-[3]" data-name="Question Navigation">
      <Frame1 />
      <ProgressIndicator />
      <Frame18 />
    </div>
  );
}

function Number() {
  return (
    <div className="basis-0 content-stretch flex gap-[16px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Number">
      <div className="flex flex-col font-['Quatro:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1a1c16] text-[22px] text-nowrap">
        <p className="leading-[28px] whitespace-pre">
          <span className="font-['Quatro:Regular',sans-serif] not-italic">1.</span>5<span className="font-['Quatro:Regular',sans-serif] not-italic">.</span>
          <span>{`1 `}</span>
        </p>
      </div>
    </div>
  );
}

function StateLayer25() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center p-[8px] relative shrink-0" data-name="state-layer">
      <div className="relative shrink-0 size-[24px]" data-name="Icon">
        <div className="absolute inset-0 overflow-clip" data-name="volume_up">
          <div className="absolute inset-[13.46%_12.5%]" data-name="Vector">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
              <path d={svgPaths.p13285c40} fill="var(--fill-0, #44483B)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center overflow-clip relative rounded-[100px] shrink-0" data-name="container">
      <StateLayer25 />
    </div>
  );
}

function StateLayer26() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center p-[8px] relative shrink-0" data-name="state-layer">
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

function Container3() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center overflow-clip relative rounded-[100px] shrink-0" data-name="container">
      <StateLayer26 />
    </div>
  );
}

function InfoIconButtons() {
  return (
    <div className="content-stretch cursor-pointer flex h-[48px] items-center justify-end relative shrink-0" data-name="Info icon buttons">
      <div className="content-stretch flex flex-col gap-[10px] items-center justify-center relative shrink-0 size-[48px]" data-name="trailing-icon 3">
        <Container2 />
      </div>
      <div className="content-stretch flex flex-col gap-[10px] items-center justify-center relative shrink-0 size-[48px]" data-name="trailing-icon 2">
        <Container3 />
      </div>
    </div>
  );
}

function NumberInfoIconButtons() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Number & info icon buttons">
      <Number />
      <InfoIconButtons />
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Text">
      <NumberInfoIconButtons />
      <div className="flex flex-col font-['Quatro:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1a1c16] text-[22px] w-full">
        <p className="leading-[28px]">Kan du dokumentere at plantevernmidler kun er brukt av personell med gyldig autorisasjon?</p>
      </div>
    </div>
  );
}

function StateLayer27() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-center justify-center pl-[8px] pr-[12px] py-[6px] relative shrink-0" data-name="state-layer">
      <div className="relative shrink-0 size-[18px]" data-name="Icon">
        <div className="absolute inset-0 overflow-clip" data-name="snippet_folder">
          <div className="absolute inset-[16.67%_8.33%]" data-name="Vector">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 12">
              <path d={svgPaths.p33aa4080} fill="var(--fill-0, white)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[14px] text-center text-nowrap text-white tracking-[0.1px]">
        <p className="leading-[20px] whitespace-pre">Dokumentasjon kreves</p>
      </div>
    </div>
  );
}

function AboutTheQuestionsChips() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="About the questions chips">
      <div className="bg-[#365bae] content-stretch flex h-[32px] items-center justify-center overflow-clip relative rounded-[8px] shrink-0" data-name="Documentation chip">
        <StateLayer27 />
      </div>
    </div>
  );
}

function Question() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[8px] items-start justify-center px-0 py-[12px] relative shrink-0 w-full" data-name="Question">
      <Text />
      <AboutTheQuestionsChips />
    </div>
  );
}

function StateLayer28() {
  return (
    <div className="box-border content-stretch flex items-center justify-center p-[8px] relative shrink-0" data-name="state-layer">
      <div className="relative shrink-0 size-[24px]" data-name="icon">
        <div className="absolute inset-[8.333%]" data-name="icon">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <path d={svgPaths.p22f8a570} fill="var(--fill-0, #4A671E)" id="icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0" data-name="container">
      <StateLayer28 />
    </div>
  );
}

function LeadingElement23() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Leading element">
      <div className="content-stretch flex items-center justify-center relative shrink-0 size-[24px]" data-name="Radio buttons">
        <Container4 />
      </div>
    </div>
  );
}

function Content24() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] tracking-[0.5px] w-full">
        <p className="leading-[24px]">Ja</p>
      </div>
    </div>
  );
}

function StateLayer29() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center px-[16px] py-0 relative size-full">
          <LeadingElement23 />
          <Content24 />
        </div>
      </div>
    </div>
  );
}

function StateLayer30() {
  return (
    <div className="box-border content-stretch flex items-center justify-center p-[8px] relative shrink-0" data-name="state-layer">
      <div className="relative shrink-0 size-[24px]" data-name="icon">
        <div className="absolute inset-[8.333%]" data-name="icon">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <path d={svgPaths.p208acf00} fill="var(--fill-0, #44483B)" id="icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0" data-name="container">
      <StateLayer30 />
    </div>
  );
}

function LeadingElement24() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Leading element">
      <div className="content-stretch flex items-center justify-center relative shrink-0 size-[24px]" data-name="Radio buttons">
        <Container5 />
      </div>
    </div>
  );
}

function Content25() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] tracking-[0.5px] w-full">
        <p className="leading-[24px]">Nei</p>
      </div>
    </div>
  );
}

function StateLayer31() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center px-[16px] py-0 relative size-full">
          <LeadingElement24 />
          <Content25 />
        </div>
      </div>
    </div>
  );
}

function StateLayer32() {
  return (
    <div className="box-border content-stretch flex items-center justify-center p-[8px] relative shrink-0" data-name="state-layer">
      <div className="relative shrink-0 size-[24px]" data-name="icon">
        <div className="absolute inset-[8.333%]" data-name="icon">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <path d={svgPaths.p208acf00} fill="var(--fill-0, #44483B)" id="icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0" data-name="container">
      <StateLayer32 />
    </div>
  );
}

function LeadingElement25() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Leading element">
      <div className="content-stretch flex items-center justify-center relative shrink-0 size-[24px]" data-name="Radio buttons">
        <Container6 />
      </div>
    </div>
  );
}

function Content26() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] tracking-[0.5px] w-full">
        <p className="leading-[24px]">Ikke relevant</p>
      </div>
    </div>
  );
}

function StateLayer33() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center px-[16px] py-0 relative size-full">
          <LeadingElement25 />
          <Content26 />
        </div>
      </div>
    </div>
  );
}

function AnswerSelection() {
  return (
    <div className="box-border content-stretch flex items-start px-0 py-[16px] relative shrink-0 w-full" data-name="Answer selection">
      <button className="basis-0 box-border content-stretch cursor-pointer flex flex-col grow h-[40px] items-center justify-center min-h-[40px] min-w-px overflow-visible p-0 relative shrink-0" data-name="Yes">
        <div className="absolute inset-0" data-name="state-layer overlay" />
        <StateLayer29 />
      </button>
      <div className="basis-0 content-stretch flex flex-col grow h-[40px] items-center justify-center min-h-[40px] min-w-px relative shrink-0" data-name="No">
        <div className="absolute inset-0" data-name="state-layer overlay" />
        <StateLayer31 />
      </div>
      <div className="basis-0 content-stretch flex flex-col grow h-[40px] items-center justify-center min-h-[40px] min-w-px relative shrink-0" data-name="Not relevant">
        <div className="absolute inset-0" data-name="state-layer overlay" />
        <StateLayer33 />
      </div>
    </div>
  );
}

function TabContents5() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center justify-center min-h-px min-w-px relative shrink-0" data-name="Tab Contents">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[14px] text-center text-nowrap tracking-[0.1px]">
        <p className="leading-[20px] whitespace-pre">Observasjoner</p>
      </div>
    </div>
  );
}

function StateLayer34() {
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
        <p className="leading-[20px] whitespace-pre">Egenrevisjonssvar</p>
      </div>
    </div>
  );
}

function StateLayer35() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="State-layer">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col items-center justify-center px-[16px] py-[14px] relative size-full">
          <TabContents6 />
        </div>
      </div>
    </div>
  );
}

function TabContents7() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center justify-center min-h-px min-w-px relative shrink-0" data-name="Tab Contents">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#44483b] text-[14px] text-center text-nowrap tracking-[0.1px]">
        <p className="leading-[20px] whitespace-pre">Notat</p>
      </div>
    </div>
  );
}

function StateLayer36() {
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

function TabGroup1() {
  return (
    <div className="content-stretch cursor-pointer flex items-start relative shrink-0 w-full" data-name="Tab group">
      <div className="content-stretch flex flex-col h-[48px] items-center justify-end overflow-clip relative shrink-0" data-name="Tab 2">
        <StateLayer34 />
      </div>
      <div className="content-stretch flex flex-col h-[48px] items-center justify-end overflow-clip relative shrink-0" data-name="Tab 3">
        <StateLayer35 />
      </div>
      <div className="content-stretch flex flex-col h-[48px] items-center justify-end overflow-clip relative shrink-0 w-[90px]" data-name="Tab 4">
        <StateLayer36 />
      </div>
    </div>
  );
}

function LeadingElement26() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Leading element">
      <div className="relative shrink-0 size-[24px]" data-name="tips_and_updates">
        <div className="absolute inset-0 overflow-clip" data-name="tips_and_updates">
          <div className="absolute inset-[4.17%_3.13%]" data-name="Vector">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23 22">
              <path d={svgPaths.p11afaa00} fill="var(--fill-0, #44483B)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Content27() {
  return (
    <div className="basis-0 content-stretch flex flex-col font-['Manrope:Regular',sans-serif] font-normal grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] tracking-[0.5px] w-full">
        <p className="leading-[24px]">Forbedringspunkter</p>
      </div>
      <p className="[white-space-collapse:collapse] h-[20px] leading-[20px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#44483b] text-[14px] text-nowrap tracking-[0.25px] w-full">Anbefalinger for videre forbedring</p>
    </div>
  );
}

function TrailingElement4() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="Trailing element">
      <div className="relative shrink-0 size-[24px]" data-name="add">
        <div className="absolute inset-[20.833%]" data-name="icon">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
            <path d={svgPaths.p2ccb20} fill="var(--fill-0, #44483B)" id="icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function StateLayer37() {
  return (
    <div className="h-[56px] relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[16px] h-[56px] items-center justify-center px-[16px] py-0 relative w-full">
          <LeadingElement26 />
          <Content27 />
          <TrailingElement4 />
        </div>
      </div>
    </div>
  );
}

function StateLayer38() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[10px] relative shrink-0" data-name="State-layer">
      <div className="relative shrink-0 size-[20px]" data-name="Icon">
        <div className="absolute inset-[16.667%]" data-name="icon">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
            <path d={svgPaths.p31c8a300} fill="var(--fill-0, #44483B)" id="icon" />
          </svg>
        </div>
      </div>
      <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#44483b] text-[14px] text-nowrap tracking-[0.1px]">
        <p className="leading-[20px] whitespace-pre">Last opp bilde</p>
      </div>
    </div>
  );
}

function LeadingElement27() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Leading element">
      <div className="relative shrink-0 size-[24px]" data-name="add_reaction">
        <div className="absolute inset-0 overflow-clip" data-name="add_reaction">
          <div className="absolute inset-[6.25%_4.17%]" data-name="Vector">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 21">
              <path d={svgPaths.p1b6ca280} fill="var(--fill-0, #44483B)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Content28() {
  return (
    <div className="basis-0 content-stretch flex flex-col font-['Manrope:Regular',sans-serif] font-normal grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] tracking-[0.5px] w-full">
        <p className="leading-[24px]">Positive observasjoner</p>
      </div>
      <p className="[white-space-collapse:collapse] h-[20px] leading-[20px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#44483b] text-[14px] text-nowrap tracking-[0.25px] w-full">Tydelige funn som viser god praksis</p>
    </div>
  );
}

function StateLayer39() {
  return (
    <div className="h-[56px] relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[16px] h-[56px] items-center justify-center px-[16px] py-0 relative w-full">
          <LeadingElement27 />
          <Content28 />
        </div>
      </div>
    </div>
  );
}

function Content29() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start justify-center leading-[0] min-h-px min-w-px overflow-clip relative shrink-0 tracking-[0.5px]" data-name="Content">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[#44483b] text-[12px] w-full">
        <p className="leading-[16px]">Positive observasjoner</p>
      </div>
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#1a1c16] text-[16px] w-full">
        <p className="leading-[24px]">Rutinene for rengjøring av melkestallen kan forbedres ved å innføre en fast sjekkliste etter hver melking.</p>
      </div>
    </div>
  );
}

function Frame15() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[16px] items-start p-[8px] relative w-full">
          <Content29 />
        </div>
      </div>
    </div>
  );
}

function StateLayer40() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[10px] relative shrink-0" data-name="State-layer">
      <div className="relative shrink-0 size-[20px]" data-name="Icon">
        <div className="absolute inset-[16.667%]" data-name="icon">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
            <path d={svgPaths.p31c8a300} fill="var(--fill-0, #44483B)" id="icon" />
          </svg>
        </div>
      </div>
      <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#44483b] text-[14px] text-nowrap tracking-[0.1px]">
        <p className="leading-[20px] whitespace-pre">Last opp bilde</p>
      </div>
    </div>
  );
}

function StateLayer41() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-center justify-center px-[24px] py-[16px] relative shrink-0" data-name="State-layer">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[16px] text-nowrap text-white tracking-[0.15px]">
        <p className="leading-[24px] whitespace-pre">Neste spørsmål</p>
      </div>
    </div>
  );
}

function Buttons() {
  return (
    <div className="basis-0 content-stretch flex gap-[16px] grow items-center justify-end min-h-px min-w-px relative shrink-0" data-name="Buttons">
      <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="next Button">
        <div className="bg-[#4a671e] content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0" data-name="Content">
          <StateLayer41 />
        </div>
      </div>
    </div>
  );
}

function NavigationButtons() {
  return (
    <div className="basis-0 content-stretch flex gap-[16px] grow items-center justify-end min-h-px min-w-px relative shrink-0" data-name="Navigation buttons">
      <Buttons />
    </div>
  );
}

function MainContents() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Main contents">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] items-start px-[40px] py-0 relative size-full">
          <Question />
          <AnswerSelection />
          <div className="content-stretch flex flex-col gap-[16px] items-start max-w-[704px] min-w-[600px] relative shrink-0 w-full" data-name="Revisor Question Tabs">
            <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Tabs">
              <TabGroup1 />
              <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Divider">
                <div className="h-0 relative shrink-0 w-full" data-name="Divider">
                  <div className="absolute bottom-0 left-0 right-0 top-[-2px]" style={{ "--stroke-0": "rgba(227, 227, 217, 1)" } as React.CSSProperties}>
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 622 2">
                      <line id="Divider" stroke="var(--stroke-0, #E3E3D9)" strokeWidth="2" x2="622" y1="1" y2="1" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="max-w-[880px] relative rounded-[12px] shrink-0 w-full" data-name="Revison observations">
              <div aria-hidden="true" className="absolute border border-[#c4c8b7] border-solid inset-0 pointer-events-none rounded-[12px]" />
              <div className="max-w-inherit size-full">
                <div className="box-border content-stretch flex flex-col gap-[8px] items-start max-w-inherit p-[16px] relative w-full">
                  <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-[527px]" data-name="input">
                    <div className="content-stretch flex flex-col items-center justify-center min-h-[56px] relative shrink-0 w-full" data-name="List item/List Item: -4 Density">
                      <div className="absolute inset-0" data-name="state-layer overlay" />
                      <StateLayer37 />
                    </div>
                  </div>
                  <div className="content-stretch flex h-[48px] items-center justify-center relative shrink-0" data-name="Button">
                    <div className="relative rounded-[100px] shrink-0" data-name="Content">
                      <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[inherit]">
                        <StateLayer38 />
                      </div>
                      <div aria-hidden="true" className="absolute border border-[#c4c8b7] border-solid inset-0 pointer-events-none rounded-[100px]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="max-w-[880px] relative rounded-[12px] shrink-0 w-full" data-name="Revison observations">
              <div aria-hidden="true" className="absolute border border-[#c4c8b7] border-solid inset-0 pointer-events-none rounded-[12px]" />
              <div className="max-w-inherit size-full">
                <div className="box-border content-stretch flex flex-col gap-[8px] items-start max-w-inherit p-[16px] relative w-full">
                  <div className="content-stretch flex flex-col items-center justify-center min-h-[56px] relative shrink-0 w-full" data-name="List item/List Item: -4 Density">
                    <div className="absolute inset-0" data-name="state-layer overlay" />
                    <StateLayer39 />
                  </div>
                  <button className="box-border content-stretch cursor-pointer flex flex-col gap-[8px] items-center justify-center min-h-[64px] overflow-visible pb-0 pt-[8px] px-0 relative shrink-0 w-full" data-name="App User Input">
                    <Frame15 />
                  </button>
                  <div className="content-stretch flex h-[48px] items-center justify-center relative shrink-0" data-name="Button">
                    <div className="relative rounded-[100px] shrink-0" data-name="Content">
                      <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[inherit]">
                        <StateLayer40 />
                      </div>
                      <div aria-hidden="true" className="absolute border border-[#c4c8b7] border-solid inset-0 pointer-events-none rounded-[100px]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="box-border content-stretch flex gap-[16px] items-start justify-end px-0 py-[24px] relative shrink-0 w-full" data-name="Question navigation buttons">
            <NavigationButtons />
          </div>
        </div>
      </div>
    </div>
  );
}

function LeadingElement29() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Leading element">
      <div className="relative shrink-0 size-[24px]" data-name="expand_less">
        <div className="absolute inset-0 overflow-clip" data-name="expand_less">
          <div className="absolute bottom-[34.56%] left-1/4 right-1/4 top-[34.56%]" data-name="Vector">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 8">
              <path d={svgPaths.p2bb41700} fill="var(--fill-0, #44483B)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Content30() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] tracking-[0.5px] w-full">
        <p className="leading-[24px]">Krav</p>
      </div>
    </div>
  );
}

function StateLayer42() {
  return (
    <div className="basis-0 box-border content-stretch flex gap-[16px] grow items-center justify-center min-h-px min-w-px px-0 py-[8px] relative shrink-0 w-full" data-name="state-layer">
      <LeadingElement29 />
      <Content30 />
    </div>
  );
}

function Content31() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center leading-[0] min-h-px min-w-px overflow-clip relative shrink-0 tracking-[0.5px]" data-name="Content">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[#44483b] text-[12px] w-full">
        <p className="leading-[16px]">Lovkrav</p>
      </div>
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#1a1c16] text-[16px] w-full">
        <p className="leading-[24px] whitespace-pre-wrap">{`Forskrift om plantevernmidler		`}</p>
      </div>
    </div>
  );
}

function TrailingElement5() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0" data-name="Trailing element">
      <div className="relative shrink-0 size-[24px]" data-name="open_in_new">
        <div className="absolute inset-0 overflow-clip" data-name="open_in_new">
          <div className="absolute inset-[12.5%]" data-name="Vector">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
              <path d={svgPaths.pd76fd80} fill="var(--fill-0, #44483B)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function StateLayer43() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative size-full">
          <Content31 />
          <TrailingElement5 />
        </div>
      </div>
    </div>
  );
}

function RequirementList() {
  return (
    <div className="relative shrink-0 w-full" data-name="requirement list">
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-start justify-center px-[24px] py-[8px] relative w-full">
          <div className="content-stretch flex flex-col h-[56px] items-start justify-center min-h-[56px] relative shrink-0 w-full" data-name="List item/List Item: 0 Density">
            <div className="absolute inset-0" data-name="state-layer overlay" />
            <StateLayer42 />
          </div>
          <div className="bg-white content-stretch flex flex-col h-[72px] items-center justify-center min-h-[72px] relative rounded-[12px] shrink-0 w-full" data-name="List item/List Item: 0 Density">
            <div aria-hidden="true" className="absolute border border-[#c4c8b7] border-solid inset-0 pointer-events-none rounded-[12px]" />
            <div className="absolute inset-0" data-name="state-layer overlay" />
            <StateLayer43 />
          </div>
        </div>
      </div>
    </div>
  );
}

function RequirementSection() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start max-h-[688px] relative shrink-0 w-full" data-name="Requirement section">
      <RequirementList />
    </div>
  );
}

function TabContents8() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center justify-center min-h-px min-w-px relative shrink-0" data-name="Tab Contents">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[14px] text-center text-nowrap tracking-[0.1px]">
        <p className="leading-[20px] whitespace-pre">Veileder revisor</p>
      </div>
    </div>
  );
}

function StateLayer44() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="State-layer">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col items-center justify-center px-[16px] py-[14px] relative size-full">
          <TabContents8 />
          <div className="absolute bg-[#4a671e] bottom-0 h-[2px] left-0 right-0" data-name="Indicator" />
        </div>
      </div>
    </div>
  );
}

function TabContents9() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center justify-center min-h-px min-w-px relative shrink-0" data-name="Tab Contents">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#44483b] text-[14px] text-center text-nowrap tracking-[0.1px]">
        <p className="leading-[20px] whitespace-pre">Veileder</p>
      </div>
    </div>
  );
}

function StateLayer45() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="State-layer">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col items-center justify-center px-[16px] py-[14px] relative size-full">
          <TabContents9 />
        </div>
      </div>
    </div>
  );
}

function TabGroup2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Tab group">
      <div className="size-full">
        <div className="box-border content-stretch cursor-pointer flex items-start pl-[24px] pr-0 py-0 relative w-full">
          <div className="content-stretch flex flex-col h-[48px] items-center justify-end overflow-clip relative shrink-0" data-name="Tab 1">
            <StateLayer44 />
          </div>
          <div className="content-stretch flex flex-col h-[48px] items-center justify-end overflow-clip relative shrink-0" data-name="Tab 2">
            <StateLayer45 />
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
        <div className="box-border content-stretch flex flex-col items-start px-[24px] py-[8px] relative w-full">
          <div className="-webkit-box flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] overflow-ellipsis overflow-hidden relative shrink-0 text-[#1a1c16] text-[16px] tracking-[0.5px] w-full">
            <p className="leading-[24px] mb-0">Dette bør du kontrollere på befaring:</p>
            <ul className="list-disc mb-0">
              <li className="mb-0 ms-[24px]">
                <span className="leading-[24px]">at bonden har gyldig autorisasjon.</span>
              </li>
              <li className="ms-[24px]">
                <span className="leading-[24px]">At eventuelle ansatte/annen hjelp som bruker har gyldig autorisasjon.</span>
              </li>
            </ul>
            <p className="leading-[24px] mb-0">&nbsp;</p>
            <p className="leading-[24px] mb-0">&nbsp;</p>
            <p className="leading-[24px]">{`Hvis usikker, se presentasjon gitt av Mattilsynet 07.06.24 for revisorene. Ligger under: Nettmøter 2024 --> Presentasjon fra innledere`}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Tabs">
        <TabGroup2 />
        <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Divider">
          <div className="h-0 relative shrink-0 w-full" data-name="Divider">
            <div className="absolute bottom-0 left-0 right-0 top-[-1px]" style={{ "--stroke-0": "rgba(227, 227, 217, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 400 1">
                <line id="Divider" stroke="var(--stroke-0, #E3E3D9)" x2="400" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Frame19 />
    </div>
  );
}

function RequirementsGuidePanel() {
  return (
    <div className="bg-[#fafaf0] content-stretch flex flex-col gap-[24px] h-full items-center relative shrink-0 w-[400px]" data-name="Requirements & Guide panel">
      <RequirementSection />
      <Frame20 />
    </div>
  );
}

function Frame21() {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px overflow-clip relative shrink-0 w-full">
      <MainContents />
      <div className="content-stretch flex flex-col h-full items-center overflow-clip relative shrink-0 w-px" data-name="Vertical/Full-width">
        <div className="basis-0 flex grow items-center justify-center min-h-px min-w-px relative shrink-0 w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "120", "--transform-inner-height": "1" } as React.CSSProperties}>
          <div className="flex-none h-full rotate-[90deg]">
            <div className="h-full relative w-[120px]" data-name="Divider">
              <div className="absolute bottom-0 left-0 right-0 top-[-1px]" style={{ "--stroke-0": "rgba(196, 200, 183, 1)" } as React.CSSProperties}>
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1697 1">
                  <line id="Divider" stroke="var(--stroke-0, #C4C8B7)" x2="1696.32" y1="0.5" y2="0.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <RequirementsGuidePanel />
    </div>
  );
}

function Frame9() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start min-h-px min-w-px relative shrink-0 z-[1]">
      <Frame21 />
    </div>
  );
}

function NyPrototype() {
  return (
    <div className="basis-0 content-stretch flex grow isolate items-center min-h-px min-w-px relative shrink-0 w-full" data-name="ny prototype">
      <QuestionNavigation />
      <div className="content-stretch flex flex-col h-full items-center overflow-clip relative shrink-0 w-px z-[2]" data-name="Vertical/Full-width">
        <div className="basis-0 flex grow items-center justify-center min-h-px min-w-px relative shrink-0 w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "120", "--transform-inner-height": "1" } as React.CSSProperties}>
          <div className="flex-none h-full rotate-[90deg]">
            <div className="h-full relative w-[120px]" data-name="Divider">
              <div className="absolute bottom-0 left-0 right-0 top-[-1px]" style={{ "--stroke-0": "rgba(196, 200, 183, 1)" } as React.CSSProperties}>
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1697 1">
                  <line id="Divider" stroke="var(--stroke-0, #C4C8B7)" x2="1696.32" y1="0.5" y2="0.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Frame9 />
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

export default function EksternRevisjon151() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[10px] items-start overflow-clip relative rounded-[16px] shadow-[0px_8px_12px_6px_rgba(0,0,0,0.15),0px_4px_4px_0px_rgba(0,0,0,0.3)] size-full" data-name="ekstern revisjon- 1.5.1">
      <Frame6 />
    </div>
  );
}