import svgPaths from "./svg-lebuxrzm9d";

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
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] tracking-[0.5px] w-full">
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
          <div className="content-stretch flex flex-col h-[72px] items-center justify-center min-h-[56px] relative shrink-0 w-full" data-name="List item/List Item: 0 Density">
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

function Frame9() {
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

function Frame10() {
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

function Frame11() {
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
        <p className="leading-[24px]">Om foretaket</p>
      </div>
      <p className="leading-[20px] relative shrink-0 text-[#44483b] text-[14px] tracking-[0.25px] w-full">Påkrevd</p>
      <p className="h-0 leading-[20px] opacity-0 relative shrink-0 text-[#44483b] text-[14px] tracking-[0.25px] w-full">Gården har kombinert produksjon med sau, geit og noe storfe. Produksjonen av korn og grovfôr dekker i hovedsak eget fôrbehov.</p>
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

function LeadingElement6() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Leading element">
      <div className="relative shrink-0 size-[24px]" data-name="pin_drop">
        <div className="absolute inset-0 overflow-clip" data-name="pin_drop">
          <div className="absolute inset-[8.33%_20.83%]" data-name="Vector">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 20">
              <g id="Vector">
                <path d={svgPaths.p20955040} fill="var(--fill-0, #44483B)" />
                <path d={svgPaths.p24454800} fill="var(--fill-0, #44483B)" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Content6() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start justify-center leading-[0] min-h-px min-w-px overflow-clip relative shrink-0 tracking-[0.5px]" data-name="Content">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[#44483b] text-[12px] w-full">
        <p className="leading-[16px]">Revisjonssted</p>
      </div>
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[24px] relative shrink-0 text-[#1a1c16] text-[16px] w-full">
        <p className="mb-0">HOLTEVEIEN 138</p>
        <p>4639 Kristiansand s</p>
      </div>
    </div>
  );
}

function StateLayer24() {
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

function Frame16() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[16px] items-start p-[8px] relative w-full">
          <LeadingElement6 />
          <Content6 />
          <div className="content-stretch flex items-center justify-center relative shrink-0 size-[48px]" data-name="Icon button">
            <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[100px] shrink-0 w-[28px]" data-name="Content">
              <StateLayer24 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function StateLayer25() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-center justify-center px-[24px] py-[16px] relative shrink-0" data-name="State-layer">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icon">
        <div className="absolute bottom-1/2 left-1/4 right-[21.88%] top-1/2" data-name="Vector">
          <div className="absolute inset-[-0.9px_-7.06%]" style={{ "--stroke-0": "rgba(255, 255, 255, 1)" } as React.CSSProperties}>
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 2">
              <path d="M0.9 0.9H13.65" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-[21.88%] left-1/2 right-[21.88%] top-[21.88%]" data-name="Vector">
          <div className="absolute inset-[-6.67%_-13.33%]" style={{ "--stroke-0": "rgba(255, 255, 255, 1)" } as React.CSSProperties}>
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 16">
              <path d="M0.9 14.4L7.65 7.65L0.9 0.9" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[16px] text-nowrap text-white tracking-[0.15px]">
        <p className="leading-[24px] whitespace-pre">{`Neste `}</p>
      </div>
    </div>
  );
}

function Buttons() {
  return (
    <div className="basis-0 content-stretch flex gap-[16px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Buttons">
      <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="next Button">
        <div className="bg-[#4a671e] content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0" data-name="Content">
          <StateLayer25 />
        </div>
      </div>
    </div>
  );
}

function NavigationButtons() {
  return (
    <div className="basis-0 content-stretch flex gap-[16px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Navigation buttons">
      <Buttons />
    </div>
  );
}

function Heading() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading">
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] items-start justify-center px-[40px] py-[12px] relative w-full">
          <div className="flex flex-col font-['Quatro:Regular',sans-serif] h-[48px] justify-center leading-[0] not-italic relative shrink-0 text-[#1a1c16] text-[22px] w-[1030px]">
            <p className="leading-[28px]">{`Informasjon om foretaket `}</p>
          </div>
          <button className="box-border content-stretch cursor-pointer flex flex-col gap-[8px] items-start justify-center max-w-[600px] min-h-[64px] overflow-visible pb-0 pt-[8px] px-0 relative shrink-0 w-full" data-name="App User Input">
            <Frame15 />
          </button>
          <button className="box-border content-stretch cursor-pointer flex flex-col gap-[8px] items-start justify-center max-w-[600px] min-h-[64px] overflow-visible pb-0 pt-[8px] px-0 relative shrink-0 w-full" data-name="App User Input">
            <Frame16 />
          </button>
          <div className="box-border content-stretch flex gap-[16px] items-start justify-end px-0 py-[12px] relative shrink-0 w-full" data-name="Navigation buttons">
            <NavigationButtons />
          </div>
        </div>
      </div>
    </div>
  );
}

function Content7() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-center overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] min-w-full relative shrink-0 text-[#1a1c16] text-[14px] tracking-[0.1px] w-[min-content]">
        <p className="leading-[20px]">Produksjon</p>
      </div>
    </div>
  );
}

function StateLayer26() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center pl-[40px] pr-[16px] py-[8px] relative size-full">
          <Content7 />
        </div>
      </div>
    </div>
  );
}

function Content8() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full relative shrink-0 text-[#1a1c16] text-[16px] tracking-[0.5px] w-[min-content]">
        <p className="leading-[24px]">Sau</p>
      </div>
    </div>
  );
}

function StateLayer27() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center pl-[40px] pr-[16px] py-[8px] relative size-full">
          <Content8 />
        </div>
      </div>
    </div>
  );
}

function Content9() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full relative shrink-0 text-[#1a1c16] text-[16px] tracking-[0.5px] w-[min-content]">
        <p className="leading-[24px]">{`Korn, frø, olje- og belgvekster	`}</p>
      </div>
    </div>
  );
}

function StateLayer28() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center pl-[40px] pr-[16px] py-[8px] relative size-full">
          <Content9 />
        </div>
      </div>
    </div>
  );
}

function Content10() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full relative shrink-0 text-[#1a1c16] text-[16px] tracking-[0.5px] w-[min-content]">
        <p className="leading-[24px]">{`Grovfôr	`}</p>
      </div>
    </div>
  );
}

function StateLayer29() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center pl-[40px] pr-[16px] py-[8px] relative size-full">
          <Content10 />
        </div>
      </div>
    </div>
  );
}

function Content11() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full relative shrink-0 text-[#1a1c16] text-[16px] tracking-[0.5px] w-[min-content]">
        <p className="leading-[24px]">Storfe</p>
      </div>
    </div>
  );
}

function StateLayer30() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center pl-[40px] pr-[16px] py-[8px] relative size-full">
          <Content11 />
        </div>
      </div>
    </div>
  );
}

function Content12() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full relative shrink-0 text-[#1a1c16] text-[16px] tracking-[0.5px] w-[min-content]">
        <p className="leading-[24px]">Geit</p>
      </div>
    </div>
  );
}

function StateLayer31() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center pl-[40px] pr-[16px] py-[8px] relative size-full">
          <Content12 />
        </div>
      </div>
    </div>
  );
}

function Frame96() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[372px]">
      <div className="content-stretch flex flex-col h-[56px] items-center justify-center min-h-[56px] relative shrink-0 w-full" data-name="List item/List Item: 0 Density">
        <div className="absolute inset-0" data-name="state-layer overlay" />
        <StateLayer26 />
        <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Divider">
          <div className="h-0 relative shrink-0 w-full" data-name="Divider">
            <div className="absolute bottom-0 left-0 right-0 top-[-1px]" style={{ "--stroke-0": "rgba(196, 200, 183, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 372 1">
                <line id="Divider" stroke="var(--stroke-0, #C4C8B7)" x2="372" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col h-[56px] items-center justify-center min-h-[56px] relative shrink-0 w-full" data-name="List item/List Item: 0 Density">
        <div className="absolute inset-0" data-name="state-layer overlay" />
        <StateLayer27 />
        <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Divider">
          <div className="h-0 relative shrink-0 w-full" data-name="Divider">
            <div className="absolute bottom-0 left-0 right-0 top-[-1px]" style={{ "--stroke-0": "rgba(196, 200, 183, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 372 1">
                <line id="Divider" stroke="var(--stroke-0, #C4C8B7)" x2="372" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col h-[56px] items-center justify-center min-h-[56px] relative shrink-0 w-full" data-name="List item/List Item: 0 Density">
        <div className="absolute inset-0" data-name="state-layer overlay" />
        <StateLayer28 />
        <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Divider">
          <div className="h-0 relative shrink-0 w-full" data-name="Divider">
            <div className="absolute bottom-0 left-0 right-0 top-[-1px]" style={{ "--stroke-0": "rgba(196, 200, 183, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 372 1">
                <line id="Divider" stroke="var(--stroke-0, #C4C8B7)" x2="372" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col h-[56px] items-center justify-center min-h-[56px] relative shrink-0 w-full" data-name="List item/List Item: 0 Density">
        <div className="absolute inset-0" data-name="state-layer overlay" />
        <StateLayer29 />
        <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Divider">
          <div className="h-0 relative shrink-0 w-full" data-name="Divider">
            <div className="absolute bottom-0 left-0 right-0 top-[-1px]" style={{ "--stroke-0": "rgba(196, 200, 183, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 372 1">
                <line id="Divider" stroke="var(--stroke-0, #C4C8B7)" x2="372" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col h-[56px] items-center justify-center min-h-[56px] relative shrink-0 w-full" data-name="List item/List Item: 0 Density">
        <div className="absolute inset-0" data-name="state-layer overlay" />
        <StateLayer30 />
        <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Divider">
          <div className="h-0 relative shrink-0 w-full" data-name="Divider">
            <div className="absolute bottom-0 left-0 right-0 top-[-1px]" style={{ "--stroke-0": "rgba(196, 200, 183, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 372 1">
                <line id="Divider" stroke="var(--stroke-0, #C4C8B7)" x2="372" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col h-[56px] items-center justify-center min-h-[56px] relative shrink-0 w-full" data-name="List item/List Item: 0 Density">
        <div className="absolute inset-0" data-name="state-layer overlay" />
        <StateLayer31 />
        <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Divider">
          <div className="h-0 relative shrink-0 w-full" data-name="Divider">
            <div className="absolute bottom-0 left-0 right-0 top-[-1px]" style={{ "--stroke-0": "rgba(196, 200, 183, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 372 1">
                <line id="Divider" stroke="var(--stroke-0, #C4C8B7)" x2="372" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Content13() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] min-w-full relative shrink-0 text-[#1a1c16] text-[14px] tracking-[0.1px] w-[min-content]">
        <p className="leading-[20px]">Volum importert fra LDIR</p>
      </div>
    </div>
  );
}

function StateLayer32() {
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
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full overflow-ellipsis overflow-hidden relative shrink-0 text-[#1a1c16] text-[14px] text-nowrap tracking-[0.25px] w-[min-content]">
        <p className="[white-space-collapse:collapse] leading-[20px] overflow-ellipsis overflow-hidden">120</p>
      </div>
    </div>
  );
}

function StateLayer33() {
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
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full overflow-ellipsis overflow-hidden relative shrink-0 text-[#1a1c16] text-[14px] text-nowrap tracking-[0.25px] w-[min-content]">
        <p className="[white-space-collapse:collapse] leading-[20px] overflow-ellipsis overflow-hidden">0</p>
      </div>
    </div>
  );
}

function StateLayer34() {
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

function Content16() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full overflow-ellipsis overflow-hidden relative shrink-0 text-[#1a1c16] text-[14px] text-nowrap tracking-[0.25px] w-[min-content]">
        <p className="[white-space-collapse:collapse] leading-[20px] overflow-ellipsis overflow-hidden">0</p>
      </div>
    </div>
  );
}

function StateLayer35() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative size-full">
          <Content16 />
        </div>
      </div>
    </div>
  );
}

function Content17() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full overflow-ellipsis overflow-hidden relative shrink-0 text-[#1a1c16] text-[14px] text-nowrap tracking-[0.25px] w-[min-content]">
        <p className="[white-space-collapse:collapse] leading-[20px] overflow-ellipsis overflow-hidden">5</p>
      </div>
    </div>
  );
}

function StateLayer36() {
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
        <p className="[white-space-collapse:collapse] leading-[20px] overflow-ellipsis overflow-hidden">40</p>
      </div>
    </div>
  );
}

function StateLayer37() {
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

function Frame97() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0">
      <div className="content-stretch flex flex-col h-[56px] items-start justify-center min-h-[56px] relative shrink-0 w-full" data-name="List item/List Item: 0 Density">
        <div className="absolute inset-0" data-name="state-layer overlay" />
        <StateLayer32 />
        <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Divider">
          <div className="h-0 relative shrink-0 w-full" data-name="Divider">
            <div className="absolute bottom-0 left-0 right-0 top-[-1px]" style={{ "--stroke-0": "rgba(196, 200, 183, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 739 1">
                <line id="Divider" stroke="var(--stroke-0, #C4C8B7)" x2="739" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col h-[56px] items-center justify-center min-h-[56px] relative shrink-0 w-full" data-name="List item/List Item: 0 Density">
        <div className="absolute inset-0" data-name="state-layer overlay" />
        <StateLayer33 />
        <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Divider">
          <div className="h-0 relative shrink-0 w-full" data-name="Divider">
            <div className="absolute bottom-0 left-0 right-0 top-[-1px]" style={{ "--stroke-0": "rgba(196, 200, 183, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 739 1">
                <line id="Divider" stroke="var(--stroke-0, #C4C8B7)" x2="739" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col h-[56px] items-center justify-center min-h-[56px] relative shrink-0 w-full" data-name="List item/List Item: 0 Density">
        <div className="absolute inset-0" data-name="state-layer overlay" />
        <StateLayer34 />
        <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Divider">
          <div className="h-0 relative shrink-0 w-full" data-name="Divider">
            <div className="absolute bottom-0 left-0 right-0 top-[-1px]" style={{ "--stroke-0": "rgba(196, 200, 183, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 739 1">
                <line id="Divider" stroke="var(--stroke-0, #C4C8B7)" x2="739" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col h-[56px] items-center justify-center min-h-[56px] relative shrink-0 w-full" data-name="List item/List Item: 0 Density">
        <div className="absolute inset-0" data-name="state-layer overlay" />
        <StateLayer35 />
        <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Divider">
          <div className="h-0 relative shrink-0 w-full" data-name="Divider">
            <div className="absolute bottom-0 left-0 right-0 top-[-1px]" style={{ "--stroke-0": "rgba(196, 200, 183, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 739 1">
                <line id="Divider" stroke="var(--stroke-0, #C4C8B7)" x2="739" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col h-[56px] items-center justify-center min-h-[56px] relative shrink-0 w-full" data-name="List item/List Item: 0 Density">
        <div className="absolute inset-0" data-name="state-layer overlay" />
        <StateLayer36 />
        <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Divider">
          <div className="h-0 relative shrink-0 w-full" data-name="Divider">
            <div className="absolute bottom-0 left-0 right-0 top-[-1px]" style={{ "--stroke-0": "rgba(196, 200, 183, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 739 1">
                <line id="Divider" stroke="var(--stroke-0, #C4C8B7)" x2="739" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col h-[56px] items-center justify-center min-h-[56px] relative shrink-0 w-full" data-name="List item/List Item: 0 Density">
        <div className="absolute inset-0" data-name="state-layer overlay" />
        <StateLayer37 />
        <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Divider">
          <div className="h-0 relative shrink-0 w-full" data-name="Divider">
            <div className="absolute bottom-0 left-0 right-0 top-[-1px]" style={{ "--stroke-0": "rgba(196, 200, 183, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 739 1">
                <line id="Divider" stroke="var(--stroke-0, #C4C8B7)" x2="739" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame98() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <Frame96 />
      <Frame97 />
    </div>
  );
}

function Content19() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Content">
      <Frame98 />
    </div>
  );
}

function AboutProducer() {
  return (
    <div className="content-stretch flex flex-col h-full items-start relative shrink-0 w-[1111px] z-[1]" data-name="About producer">
      <Heading />
      <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Horizontal/Full-width">
        <div className="h-0 relative shrink-0 w-full" data-name="Divider">
          <div className="absolute bottom-0 left-0 right-0 top-[-1px]" style={{ "--stroke-0": "rgba(196, 200, 183, 1)" } as React.CSSProperties}>
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1111 1">
              <line id="Divider" stroke="var(--stroke-0, #C4C8B7)" x2="1111" y1="0.5" y2="0.5" />
            </svg>
          </div>
        </div>
      </div>
      <Content19 />
    </div>
  );
}

function WriteReport() {
  return (
    <div className="basis-0 content-stretch flex grow isolate items-start min-h-px min-w-px relative shrink-0 w-full" data-name="write report">
      <div className="box-border content-stretch flex flex-col gap-[8px] h-full items-start overflow-x-clip overflow-y-auto p-[16px] relative shrink-0 w-[392px] z-[3]" data-name="Report steps">
        <div className="bg-[#dae2ff] box-border content-stretch flex gap-[16px] items-center min-h-[64px] px-0 py-[8px] relative rounded-[12px] shrink-0 w-full" data-name="checklist Question">
          <Frame7 />
        </div>
        <div className="bg-white box-border content-stretch flex gap-[16px] items-center min-h-[64px] px-0 py-[8px] relative rounded-[12px] shrink-0 w-full" data-name="checklist Question">
          <Frame8 />
        </div>
        <div className="bg-white box-border content-stretch flex gap-[16px] items-center min-h-[64px] px-0 py-[8px] relative rounded-[12px] shrink-0 w-full" data-name="checklist Question">
          <Frame9 />
        </div>
        <div className="bg-white box-border content-stretch flex gap-[16px] items-center min-h-[64px] px-0 py-[8px] relative rounded-[12px] shrink-0 w-full" data-name="checklist Question">
          <Frame10 />
        </div>
        <div className="bg-white box-border content-stretch flex gap-[16px] items-center min-h-[64px] px-0 py-[8px] relative rounded-[12px] shrink-0 w-full" data-name="checklist Question">
          <Frame11 />
        </div>
        <Summary />
      </div>
      <div className="content-stretch flex flex-col h-full items-center overflow-clip relative shrink-0 w-px z-[2]" data-name="Vertical/Full-width">
        <div className="basis-0 flex grow items-center justify-center min-h-px min-w-px relative shrink-0 w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "120", "--transform-inner-height": "1" } as React.CSSProperties}>
          <div className="flex-none h-full rotate-[90deg]">
            <div className="h-full relative w-[120px]" data-name="Divider">
              <div className="absolute bottom-0 left-0 right-0 top-[-1px]" style={{ "--stroke-0": "rgba(196, 200, 183, 1)" } as React.CSSProperties}>
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 931 1">
                  <line id="Divider" stroke="var(--stroke-0, #C4C8B7)" x2="930.323" y1="0.5" y2="0.5" />
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

function RevisjonPage() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start min-h-px min-w-px relative shrink-0" data-name="Revisjon page">
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
      <WriteReport />
    </div>
  );
}

function Page() {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0 w-full" data-name="page">
      <button className="bg-white box-border content-stretch cursor-pointer flex flex-col h-full items-start overflow-visible p-0 relative shrink-0" data-name="Producer Navigation Rail">
        <div aria-hidden="true" className="absolute border-[#c4c8b7] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none" />
        <div className="box-border content-stretch flex flex-col gap-[40px] h-[800px] items-center overflow-clip pb-[56px] pt-[44px] px-0 relative shrink-0 w-[96px]" data-name="ksl Navigation Rail">
          <MenuFab />
          <Segments />
        </div>
      </button>
      <RevisjonPage />
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
      <Page />
    </div>
  );
}

export default function RevisorRapportInformationAboutTheProducer() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[10px] items-start overflow-clip relative rounded-[16px] shadow-[0px_8px_12px_6px_rgba(0,0,0,0.15),0px_4px_4px_0px_rgba(0,0,0,0.3)] size-full" data-name="revisor- rapport- Information about the producer">
      <Frame6 />
    </div>
  );
}