import svgPaths from "./svg-qfu4fo6l6u";

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

function Frame10() {
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
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#174295] text-[16px] tracking-[0.5px] w-full">
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

function StateLayer23() {
  return (
    <div className="box-border content-stretch flex items-center justify-center p-[11px] relative rounded-[100px] shrink-0" data-name="state-layer">
      <div className="relative rounded-[2px] shrink-0 size-[18px]" data-name="container">
        <div aria-hidden="true" className="absolute border-2 border-[#44483b] border-solid inset-0 pointer-events-none rounded-[2px]" />
      </div>
    </div>
  );
}

function LeadingElement5() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Leading element">
      <div className="box-border content-stretch flex flex-col items-center justify-center p-[4px] relative shrink-0" data-name="Checkboxes">
        <StateLayer23 />
      </div>
    </div>
  );
}

function Content5() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-center overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] tracking-[0.5px] w-full">
        <p className="leading-[24px]">Jeg bekrefter at alle svar er relevante og fullstendige.</p>
      </div>
    </div>
  );
}

function StateLayer24() {
  return (
    <div className="basis-0 box-border content-stretch flex gap-[16px] grow items-center min-h-px min-w-px px-[16px] py-[8px] relative shrink-0" data-name="state-layer">
      <LeadingElement5 />
      <Content5 />
    </div>
  );
}

function StateLayer25() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-center justify-center px-[24px] py-[16px] relative shrink-0" data-name="State-layer">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#4a671e] text-[16px] text-nowrap tracking-[0.15px]">
        <p className="leading-[24px] whitespace-pre">{`Forrige `}</p>
      </div>
    </div>
  );
}

function StateLayer26() {
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
      <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Previous Button">
        <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0" data-name="Content">
          <StateLayer25 />
        </div>
      </div>
      <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="next Button">
        <div className="bg-[#4a671e] content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0" data-name="Content">
          <StateLayer26 />
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

function TabContents5() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center justify-center min-h-px min-w-px relative shrink-0" data-name="Tab Contents">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[14px] text-center text-nowrap tracking-[0.1px]">
        <p className="leading-[20px] whitespace-pre">Alle svar</p>
      </div>
    </div>
  );
}

function StateLayer27() {
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
        <p className="leading-[20px] whitespace-pre">Ja</p>
      </div>
    </div>
  );
}

function StateLayer28() {
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
        <p className="leading-[20px] whitespace-pre">Nei</p>
      </div>
    </div>
  );
}

function StateLayer29() {
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
        <p className="leading-[20px] whitespace-pre">Forbedringspunkter</p>
      </div>
    </div>
  );
}

function StateLayer30() {
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

function TabContents9() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center justify-center min-h-px min-w-px relative shrink-0" data-name="Tab Contents">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#44483b] text-[14px] text-center text-nowrap tracking-[0.1px]">
        <p className="leading-[20px] whitespace-pre">Positive observasjoner</p>
      </div>
    </div>
  );
}

function StateLayer31() {
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

function TabContents10() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center justify-center min-h-px min-w-px relative shrink-0" data-name="Tab Contents">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#44483b] text-[14px] text-center text-nowrap tracking-[0.1px]">
        <p className="leading-[20px] whitespace-pre">Ikke relevant</p>
      </div>
    </div>
  );
}

function StateLayer32() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="State-layer">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col items-center justify-center px-[16px] py-[14px] relative size-full">
          <TabContents10 />
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
            <StateLayer27 />
          </div>
          <div className="bg-white content-stretch flex flex-col h-[48px] items-center justify-end overflow-clip relative shrink-0 w-[90px]" data-name="Tab 2">
            <StateLayer28 />
          </div>
          <div className="bg-white content-stretch flex flex-col h-[48px] items-center justify-end overflow-clip relative shrink-0" data-name="Tab 3">
            <StateLayer29 />
          </div>
          <div className="bg-white content-stretch flex flex-col h-[48px] items-center justify-end overflow-clip relative shrink-0" data-name="Tab 4">
            <StateLayer30 />
          </div>
          <div className="bg-white content-stretch flex flex-col h-[48px] items-center justify-end overflow-clip relative shrink-0" data-name="Tab 5">
            <StateLayer31 />
          </div>
          <div className="bg-white content-stretch flex flex-col h-[48px] items-center justify-end overflow-clip relative shrink-0" data-name="Tab 6">
            <StateLayer32 />
          </div>
        </div>
      </div>
    </div>
  );
}

function LeadingElement6() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Leading element">
      <div className="relative shrink-0 size-[24px]" data-name="arrow_drop_down">
        <div className="absolute inset-[41.67%_29.17%_37.5%_29.17%]" data-name="icon">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 5">
            <path d="M5 5L0 0H10L5 5Z" fill="var(--fill-0, #44483B)" id="icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Content6() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-center overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[14px] tracking-[0.1px] w-full">
        <p className="leading-[20px]">Svar</p>
      </div>
    </div>
  );
}

function StateLayer33() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center pl-[40px] pr-[16px] py-[8px] relative size-full">
          <LeadingElement6 />
          <Content6 />
        </div>
      </div>
    </div>
  );
}

function Content7() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full relative shrink-0 text-[#174295] text-[16px] tracking-[0.5px] w-[min-content]">
        <p className="leading-[24px]">Ikke relevant</p>
      </div>
    </div>
  );
}

function StateLayer34() {
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
        <p className="leading-[24px]">Ikke relevant</p>
      </div>
    </div>
  );
}

function StateLayer35() {
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
        <p className="leading-[24px]">Ikke relevant</p>
      </div>
    </div>
  );
}

function StateLayer36() {
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
        <p className="leading-[24px]">Nei</p>
      </div>
    </div>
  );
}

function StateLayer37() {
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
        <p className="leading-[24px]">Nei</p>
      </div>
    </div>
  );
}

function StateLayer38() {
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
        <p className="leading-[24px]">Nei</p>
      </div>
    </div>
  );
}

function StateLayer39() {
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

function Content13() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full relative shrink-0 text-[#1a1c16] text-[16px] tracking-[0.5px] w-[min-content]">
        <p className="leading-[24px]">Ja</p>
      </div>
    </div>
  );
}

function StateLayer40() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center pl-[40px] pr-[16px] py-[8px] relative size-full">
          <Content13 />
        </div>
      </div>
    </div>
  );
}

function Content14() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full relative shrink-0 text-[#1a1c16] text-[16px] tracking-[0.5px] w-[min-content]">
        <p className="leading-[24px]">Ja</p>
      </div>
    </div>
  );
}

function StateLayer41() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center pl-[40px] pr-[16px] py-[8px] relative size-full">
          <Content14 />
        </div>
      </div>
    </div>
  );
}

function Content15() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full relative shrink-0 text-[#1a1c16] text-[16px] tracking-[0.5px] w-[min-content]">
        <p className="leading-[24px]">Ja</p>
      </div>
    </div>
  );
}

function StateLayer42() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center pl-[40px] pr-[16px] py-[8px] relative size-full">
          <Content15 />
        </div>
      </div>
    </div>
  );
}

function Content16() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full relative shrink-0 text-[#1a1c16] text-[16px] tracking-[0.5px] w-[min-content]">
        <p className="leading-[24px]">Ja</p>
      </div>
    </div>
  );
}

function StateLayer43() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center pl-[40px] pr-[16px] py-[8px] relative size-full">
          <Content16 />
        </div>
      </div>
    </div>
  );
}

function Content17() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full relative shrink-0 text-[#1a1c16] text-[16px] tracking-[0.5px] w-[min-content]">
        <p className="leading-[24px]">Ja</p>
      </div>
    </div>
  );
}

function StateLayer44() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center pl-[40px] pr-[16px] py-[8px] relative size-full">
          <Content17 />
        </div>
      </div>
    </div>
  );
}

function Content18() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full relative shrink-0 text-[#1a1c16] text-[16px] tracking-[0.5px] w-[min-content]">
        <p className="leading-[24px]">Ja</p>
      </div>
    </div>
  );
}

function StateLayer45() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center pl-[40px] pr-[16px] py-[8px] relative size-full">
          <Content18 />
        </div>
      </div>
    </div>
  );
}

function Content19() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full relative shrink-0 text-[#1a1c16] text-[16px] tracking-[0.5px] w-[min-content]">
        <p className="leading-[24px]">Ja</p>
      </div>
    </div>
  );
}

function StateLayer46() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center pl-[40px] pr-[16px] py-[8px] relative size-full">
          <Content19 />
        </div>
      </div>
    </div>
  );
}

function Content20() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full relative shrink-0 text-[#1a1c16] text-[16px] tracking-[0.5px] w-[min-content]">
        <p className="leading-[24px]">Ja</p>
      </div>
    </div>
  );
}

function StateLayer47() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center pl-[40px] pr-[16px] py-[8px] relative size-full">
          <Content20 />
        </div>
      </div>
    </div>
  );
}

function Content21() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full relative shrink-0 text-[#1a1c16] text-[16px] tracking-[0.5px] w-[min-content]">
        <p className="leading-[24px]">Ja</p>
      </div>
    </div>
  );
}

function StateLayer48() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center pl-[40px] pr-[16px] py-[8px] relative size-full">
          <Content21 />
        </div>
      </div>
    </div>
  );
}

function Content22() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full relative shrink-0 text-[#1a1c16] text-[16px] tracking-[0.5px] w-[min-content]">
        <p className="leading-[24px]">Ja</p>
      </div>
    </div>
  );
}

function StateLayer49() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center pl-[40px] pr-[16px] py-[8px] relative size-full">
          <Content22 />
        </div>
      </div>
    </div>
  );
}

function Content23() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full relative shrink-0 text-[#1a1c16] text-[16px] tracking-[0.5px] w-[min-content]">
        <p className="leading-[24px]">Ja</p>
      </div>
    </div>
  );
}

function StateLayer50() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center pl-[40px] pr-[16px] py-[8px] relative size-full">
          <Content23 />
        </div>
      </div>
    </div>
  );
}

function Content24() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full relative shrink-0 text-[#1a1c16] text-[16px] tracking-[0.5px] w-[min-content]">
        <p className="leading-[24px]">Ja</p>
      </div>
    </div>
  );
}

function StateLayer51() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center pl-[40px] pr-[16px] py-[8px] relative size-full">
          <Content24 />
        </div>
      </div>
    </div>
  );
}

function AsnwerColumn() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[184px]" data-name="Asnwer column">
      <div className="content-stretch flex flex-col h-[56px] items-center justify-center min-h-[56px] relative shrink-0 w-full" data-name="List item/List Item: 0 Density">
        <div className="absolute inset-0" data-name="state-layer overlay" />
        <StateLayer33 />
        <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Divider">
          <div className="h-0 relative shrink-0 w-full" data-name="Divider">
            <div className="absolute bottom-0 left-0 right-0 top-[-1px]" style={{ "--stroke-0": "rgba(196, 200, 183, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 184 1">
                <line id="Divider" stroke="var(--stroke-0, #C4C8B7)" x2="184" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#dae2ff] content-stretch flex flex-col h-[56px] items-center justify-center min-h-[56px] relative shrink-0 w-full" data-name="List item/List Item: 0 Density">
        <div className="absolute inset-0" data-name="state-layer overlay" />
        <StateLayer34 />
        <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Divider">
          <div className="h-0 relative shrink-0 w-full" data-name="Divider">
            <div className="absolute bottom-0 left-0 right-0 top-[-1px]" style={{ "--stroke-0": "rgba(196, 200, 183, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 184 1">
                <line id="Divider" stroke="var(--stroke-0, #C4C8B7)" x2="184" y1="0.5" y2="0.5" />
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
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 184 1">
                <line id="Divider" stroke="var(--stroke-0, #C4C8B7)" x2="184" y1="0.5" y2="0.5" />
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
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 184 1">
                <line id="Divider" stroke="var(--stroke-0, #C4C8B7)" x2="184" y1="0.5" y2="0.5" />
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
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 184 1">
                <line id="Divider" stroke="var(--stroke-0, #C4C8B7)" x2="184" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col h-[56px] items-center justify-center min-h-[56px] relative shrink-0 w-full" data-name="List item/List Item: 0 Density">
        <div className="absolute inset-0" data-name="state-layer overlay" />
        <StateLayer38 />
        <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Divider">
          <div className="h-0 relative shrink-0 w-full" data-name="Divider">
            <div className="absolute bottom-0 left-0 right-0 top-[-1px]" style={{ "--stroke-0": "rgba(196, 200, 183, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 184 1">
                <line id="Divider" stroke="var(--stroke-0, #C4C8B7)" x2="184" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col h-[56px] items-center justify-center min-h-[56px] relative shrink-0 w-full" data-name="List item/List Item: 0 Density">
        <div className="absolute inset-0" data-name="state-layer overlay" />
        <StateLayer39 />
        <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Divider">
          <div className="h-0 relative shrink-0 w-full" data-name="Divider">
            <div className="absolute bottom-0 left-0 right-0 top-[-1px]" style={{ "--stroke-0": "rgba(196, 200, 183, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 184 1">
                <line id="Divider" stroke="var(--stroke-0, #C4C8B7)" x2="184" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col h-[56px] items-center justify-center min-h-[56px] relative shrink-0 w-full" data-name="List item/List Item: 0 Density">
        <div className="absolute inset-0" data-name="state-layer overlay" />
        <StateLayer40 />
        <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Divider">
          <div className="h-0 relative shrink-0 w-full" data-name="Divider">
            <div className="absolute bottom-0 left-0 right-0 top-[-1px]" style={{ "--stroke-0": "rgba(196, 200, 183, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 184 1">
                <line id="Divider" stroke="var(--stroke-0, #C4C8B7)" x2="184" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col h-[56px] items-center justify-center min-h-[56px] relative shrink-0 w-full" data-name="List item/List Item: 0 Density">
        <div className="absolute inset-0" data-name="state-layer overlay" />
        <StateLayer41 />
        <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Divider">
          <div className="h-0 relative shrink-0 w-full" data-name="Divider">
            <div className="absolute bottom-0 left-0 right-0 top-[-1px]" style={{ "--stroke-0": "rgba(196, 200, 183, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 184 1">
                <line id="Divider" stroke="var(--stroke-0, #C4C8B7)" x2="184" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col h-[56px] items-center justify-center min-h-[56px] relative shrink-0 w-full" data-name="List item/List Item: 0 Density">
        <div className="absolute inset-0" data-name="state-layer overlay" />
        <StateLayer42 />
        <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Divider">
          <div className="h-0 relative shrink-0 w-full" data-name="Divider">
            <div className="absolute bottom-0 left-0 right-0 top-[-1px]" style={{ "--stroke-0": "rgba(196, 200, 183, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 184 1">
                <line id="Divider" stroke="var(--stroke-0, #C4C8B7)" x2="184" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col h-[56px] items-center justify-center min-h-[56px] relative shrink-0 w-full" data-name="List item/List Item: 0 Density">
        <div className="absolute inset-0" data-name="state-layer overlay" />
        <StateLayer43 />
        <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Divider">
          <div className="h-0 relative shrink-0 w-full" data-name="Divider">
            <div className="absolute bottom-0 left-0 right-0 top-[-1px]" style={{ "--stroke-0": "rgba(196, 200, 183, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 184 1">
                <line id="Divider" stroke="var(--stroke-0, #C4C8B7)" x2="184" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col h-[56px] items-center justify-center min-h-[56px] relative shrink-0 w-full" data-name="List item/List Item: 0 Density">
        <div className="absolute inset-0" data-name="state-layer overlay" />
        <StateLayer44 />
        <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Divider">
          <div className="h-0 relative shrink-0 w-full" data-name="Divider">
            <div className="absolute bottom-0 left-0 right-0 top-[-1px]" style={{ "--stroke-0": "rgba(196, 200, 183, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 184 1">
                <line id="Divider" stroke="var(--stroke-0, #C4C8B7)" x2="184" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col h-[56px] items-center justify-center min-h-[56px] relative shrink-0 w-full" data-name="List item/List Item: 0 Density">
        <div className="absolute inset-0" data-name="state-layer overlay" />
        <StateLayer45 />
        <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Divider">
          <div className="h-0 relative shrink-0 w-full" data-name="Divider">
            <div className="absolute bottom-0 left-0 right-0 top-[-1px]" style={{ "--stroke-0": "rgba(196, 200, 183, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 184 1">
                <line id="Divider" stroke="var(--stroke-0, #C4C8B7)" x2="184" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col h-[56px] items-center justify-center min-h-[56px] relative shrink-0 w-full" data-name="List item/List Item: 0 Density">
        <div className="absolute inset-0" data-name="state-layer overlay" />
        <StateLayer46 />
        <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Divider">
          <div className="h-0 relative shrink-0 w-full" data-name="Divider">
            <div className="absolute bottom-0 left-0 right-0 top-[-1px]" style={{ "--stroke-0": "rgba(196, 200, 183, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 184 1">
                <line id="Divider" stroke="var(--stroke-0, #C4C8B7)" x2="184" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col h-[56px] items-center justify-center min-h-[56px] relative shrink-0 w-full" data-name="List item/List Item: 0 Density">
        <div className="absolute inset-0" data-name="state-layer overlay" />
        <StateLayer47 />
        <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Divider">
          <div className="h-0 relative shrink-0 w-full" data-name="Divider">
            <div className="absolute bottom-0 left-0 right-0 top-[-1px]" style={{ "--stroke-0": "rgba(196, 200, 183, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 184 1">
                <line id="Divider" stroke="var(--stroke-0, #C4C8B7)" x2="184" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col h-[56px] items-center justify-center min-h-[56px] relative shrink-0 w-full" data-name="List item/List Item: 0 Density">
        <div className="absolute inset-0" data-name="state-layer overlay" />
        <StateLayer48 />
        <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Divider">
          <div className="h-0 relative shrink-0 w-full" data-name="Divider">
            <div className="absolute bottom-0 left-0 right-0 top-[-1px]" style={{ "--stroke-0": "rgba(196, 200, 183, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 184 1">
                <line id="Divider" stroke="var(--stroke-0, #C4C8B7)" x2="184" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col h-[56px] items-center justify-center min-h-[56px] relative shrink-0 w-full" data-name="List item/List Item: 0 Density">
        <div className="absolute inset-0" data-name="state-layer overlay" />
        <StateLayer49 />
        <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Divider">
          <div className="h-0 relative shrink-0 w-full" data-name="Divider">
            <div className="absolute bottom-0 left-0 right-0 top-[-1px]" style={{ "--stroke-0": "rgba(196, 200, 183, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 184 1">
                <line id="Divider" stroke="var(--stroke-0, #C4C8B7)" x2="184" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col h-[56px] items-center justify-center min-h-[56px] relative shrink-0 w-full" data-name="List item/List Item: 0 Density">
        <div className="absolute inset-0" data-name="state-layer overlay" />
        <StateLayer50 />
        <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Divider">
          <div className="h-0 relative shrink-0 w-full" data-name="Divider">
            <div className="absolute bottom-0 left-0 right-0 top-[-1px]" style={{ "--stroke-0": "rgba(196, 200, 183, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 184 1">
                <line id="Divider" stroke="var(--stroke-0, #C4C8B7)" x2="184" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col h-[56px] items-center justify-center min-h-[56px] relative shrink-0 w-full" data-name="List item/List Item: 0 Density">
        <div className="absolute inset-0" data-name="state-layer overlay" />
        <StateLayer51 />
        <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Divider">
          <div className="h-0 relative shrink-0 w-full" data-name="Divider">
            <div className="absolute bottom-0 left-0 right-0 top-[-1px]" style={{ "--stroke-0": "rgba(196, 200, 183, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 184 1">
                <line id="Divider" stroke="var(--stroke-0, #C4C8B7)" x2="184" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function LeadingElement7() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Leading element">
      <div className="relative shrink-0 size-[24px]" data-name="search">
        <div className="absolute inset-[12.5%]" data-name="icon">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
            <path d={svgPaths.p16b4a380} fill="var(--fill-0, #44483B)" id="icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Content25() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[14px] tracking-[0.1px] w-full">
        <p className="leading-[20px]">Checklist point</p>
      </div>
    </div>
  );
}

function StateLayer52() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative size-full">
          <LeadingElement7 />
          <Content25 />
        </div>
      </div>
    </div>
  );
}

function Content26() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full overflow-ellipsis overflow-hidden relative shrink-0 text-[#174295] text-[14px] text-nowrap tracking-[0.25px] w-[min-content]">
        <p className="[white-space-collapse:collapse] leading-[20px] overflow-ellipsis overflow-hidden">1.1.4 KRAV TIL PRODUKSJONSSTED, Klikk på neste spørsmål for å starte med denne gruppen.</p>
      </div>
    </div>
  );
}

function StateLayer53() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative size-full">
          <Content26 />
        </div>
      </div>
    </div>
  );
}

function Content27() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full overflow-ellipsis overflow-hidden relative shrink-0 text-[#1a1c16] text-[14px] text-nowrap tracking-[0.25px] w-[min-content]">
        <p className="[white-space-collapse:collapse] leading-[20px] overflow-ellipsis overflow-hidden">{`1.1.4  Er utstyr som krever det, kontrollert og sertifisert i tråd med forskrifter?`}</p>
      </div>
    </div>
  );
}

function StateLayer54() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative size-full">
          <Content27 />
        </div>
      </div>
    </div>
  );
}

function Content28() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full overflow-ellipsis overflow-hidden relative shrink-0 text-[#1a1c16] text-[14px] text-nowrap tracking-[0.25px] w-[min-content]">
        <p className="[white-space-collapse:collapse] leading-[20px] overflow-ellipsis overflow-hidden">1.1.4 KRAV TIL PRODUKSJONSSTED, Klikk på neste spørsmål for å starte med denne gruppen.</p>
      </div>
    </div>
  );
}

function StateLayer55() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative size-full">
          <Content28 />
        </div>
      </div>
    </div>
  );
}

function Content29() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full overflow-ellipsis overflow-hidden relative shrink-0 text-[#1a1c16] text-[14px] text-nowrap tracking-[0.25px] w-[min-content]">
        <p className="[white-space-collapse:collapse] leading-[20px] overflow-ellipsis overflow-hidden">1.1.4 KRAV TIL PRODUKSJONSSTED, Klikk på neste spørsmål for å starte med denne gruppen.</p>
      </div>
    </div>
  );
}

function StateLayer56() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative size-full">
          <Content29 />
        </div>
      </div>
    </div>
  );
}

function Content30() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full overflow-ellipsis overflow-hidden relative shrink-0 text-[#1a1c16] text-[14px] text-nowrap tracking-[0.25px] w-[min-content]">
        <p className="[white-space-collapse:collapse] leading-[20px] overflow-ellipsis overflow-hidden">1.1.4 KRAV TIL PRODUKSJONSSTED, Klikk på neste spørsmål for å starte med denne gruppen.</p>
      </div>
    </div>
  );
}

function StateLayer57() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative size-full">
          <Content30 />
        </div>
      </div>
    </div>
  );
}

function Content31() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full overflow-ellipsis overflow-hidden relative shrink-0 text-[#1a1c16] text-[14px] text-nowrap tracking-[0.25px] w-[min-content]">
        <p className="[white-space-collapse:collapse] leading-[20px] overflow-ellipsis overflow-hidden">1.1.4 KRAV TIL PRODUKSJONSSTED, Klikk på neste spørsmål for å starte med denne gruppen.</p>
      </div>
    </div>
  );
}

function StateLayer58() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative size-full">
          <Content31 />
        </div>
      </div>
    </div>
  );
}

function Content32() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full overflow-ellipsis overflow-hidden relative shrink-0 text-[#1a1c16] text-[14px] text-nowrap tracking-[0.25px] w-[min-content]">
        <p className="[white-space-collapse:collapse] leading-[20px] overflow-ellipsis overflow-hidden">1.1.4 KRAV TIL PRODUKSJONSSTED, Klikk på neste spørsmål for å starte med denne gruppen.</p>
      </div>
    </div>
  );
}

function StateLayer59() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative size-full">
          <Content32 />
        </div>
      </div>
    </div>
  );
}

function Content33() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full overflow-ellipsis overflow-hidden relative shrink-0 text-[#1a1c16] text-[14px] text-nowrap tracking-[0.25px] w-[min-content]">
        <p className="[white-space-collapse:collapse] leading-[20px] overflow-ellipsis overflow-hidden">1.1.4 KRAV TIL PRODUKSJONSSTED, Klikk på neste spørsmål for å starte med denne gruppen.</p>
      </div>
    </div>
  );
}

function StateLayer60() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative size-full">
          <Content33 />
        </div>
      </div>
    </div>
  );
}

function Content34() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full overflow-ellipsis overflow-hidden relative shrink-0 text-[#1a1c16] text-[14px] text-nowrap tracking-[0.25px] w-[min-content]">
        <p className="[white-space-collapse:collapse] leading-[20px] overflow-ellipsis overflow-hidden">1.1.4 KRAV TIL PRODUKSJONSSTED, Klikk på neste spørsmål for å starte med denne gruppen.</p>
      </div>
    </div>
  );
}

function StateLayer61() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative size-full">
          <Content34 />
        </div>
      </div>
    </div>
  );
}

function Content35() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full overflow-ellipsis overflow-hidden relative shrink-0 text-[#1a1c16] text-[14px] text-nowrap tracking-[0.25px] w-[min-content]">
        <p className="[white-space-collapse:collapse] leading-[20px] overflow-ellipsis overflow-hidden">1.1.4 KRAV TIL PRODUKSJONSSTED, Klikk på neste spørsmål for å starte med denne gruppen.</p>
      </div>
    </div>
  );
}

function StateLayer62() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative size-full">
          <Content35 />
        </div>
      </div>
    </div>
  );
}

function Content36() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full overflow-ellipsis overflow-hidden relative shrink-0 text-[#1a1c16] text-[14px] text-nowrap tracking-[0.25px] w-[min-content]">
        <p className="[white-space-collapse:collapse] leading-[20px] overflow-ellipsis overflow-hidden">1.1.4 KRAV TIL PRODUKSJONSSTED, Klikk på neste spørsmål for å starte med denne gruppen.</p>
      </div>
    </div>
  );
}

function StateLayer63() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative size-full">
          <Content36 />
        </div>
      </div>
    </div>
  );
}

function Content37() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full overflow-ellipsis overflow-hidden relative shrink-0 text-[#1a1c16] text-[14px] text-nowrap tracking-[0.25px] w-[min-content]">
        <p className="[white-space-collapse:collapse] leading-[20px] overflow-ellipsis overflow-hidden">1.1.4 KRAV TIL PRODUKSJONSSTED, Klikk på neste spørsmål for å starte med denne gruppen.</p>
      </div>
    </div>
  );
}

function StateLayer64() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative size-full">
          <Content37 />
        </div>
      </div>
    </div>
  );
}

function Content38() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full overflow-ellipsis overflow-hidden relative shrink-0 text-[#1a1c16] text-[14px] text-nowrap tracking-[0.25px] w-[min-content]">
        <p className="[white-space-collapse:collapse] leading-[20px] overflow-ellipsis overflow-hidden">1.1.4 KRAV TIL PRODUKSJONSSTED, Klikk på neste spørsmål for å starte med denne gruppen.</p>
      </div>
    </div>
  );
}

function StateLayer65() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative size-full">
          <Content38 />
        </div>
      </div>
    </div>
  );
}

function Content39() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full overflow-ellipsis overflow-hidden relative shrink-0 text-[#1a1c16] text-[14px] text-nowrap tracking-[0.25px] w-[min-content]">
        <p className="[white-space-collapse:collapse] leading-[20px] overflow-ellipsis overflow-hidden">1.1.4 KRAV TIL PRODUKSJONSSTED, Klikk på neste spørsmål for å starte med denne gruppen.</p>
      </div>
    </div>
  );
}

function StateLayer66() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative size-full">
          <Content39 />
        </div>
      </div>
    </div>
  );
}

function Content40() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full overflow-ellipsis overflow-hidden relative shrink-0 text-[#1a1c16] text-[14px] text-nowrap tracking-[0.25px] w-[min-content]">
        <p className="[white-space-collapse:collapse] leading-[20px] overflow-ellipsis overflow-hidden">1.1.4 KRAV TIL PRODUKSJONSSTED, Klikk på neste spørsmål for å starte med denne gruppen.</p>
      </div>
    </div>
  );
}

function StateLayer67() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative size-full">
          <Content40 />
        </div>
      </div>
    </div>
  );
}

function Content41() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full overflow-ellipsis overflow-hidden relative shrink-0 text-[#1a1c16] text-[14px] text-nowrap tracking-[0.25px] w-[min-content]">
        <p className="[white-space-collapse:collapse] leading-[20px] overflow-ellipsis overflow-hidden">1.1.4 KRAV TIL PRODUKSJONSSTED, Klikk på neste spørsmål for å starte med denne gruppen.</p>
      </div>
    </div>
  );
}

function StateLayer68() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative size-full">
          <Content41 />
        </div>
      </div>
    </div>
  );
}

function Content42() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full overflow-ellipsis overflow-hidden relative shrink-0 text-[#1a1c16] text-[14px] text-nowrap tracking-[0.25px] w-[min-content]">
        <p className="[white-space-collapse:collapse] leading-[20px] overflow-ellipsis overflow-hidden">1.1.4 KRAV TIL PRODUKSJONSSTED, Klikk på neste spørsmål for å starte med denne gruppen.</p>
      </div>
    </div>
  );
}

function StateLayer69() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative size-full">
          <Content42 />
        </div>
      </div>
    </div>
  );
}

function Content43() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full overflow-ellipsis overflow-hidden relative shrink-0 text-[#1a1c16] text-[14px] text-nowrap tracking-[0.25px] w-[min-content]">
        <p className="[white-space-collapse:collapse] leading-[20px] overflow-ellipsis overflow-hidden">1.1.4 KRAV TIL PRODUKSJONSSTED, Klikk på neste spørsmål for å starte med denne gruppen.</p>
      </div>
    </div>
  );
}

function StateLayer70() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative size-full">
          <Content43 />
        </div>
      </div>
    </div>
  );
}

function Sjekklistesporsmal() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="Sjekklistespørsmål">
      <div className="content-stretch flex flex-col h-[56px] items-start justify-center min-h-[56px] relative shrink-0 w-full" data-name="List item/List Item: 0 Density">
        <div className="absolute inset-0" data-name="state-layer overlay" />
        <StateLayer52 />
        <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Divider">
          <div className="h-0 relative shrink-0 w-full" data-name="Divider">
            <div className="absolute bottom-0 left-0 right-0 top-[-1px]" style={{ "--stroke-0": "rgba(196, 200, 183, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 444 1">
                <line id="Divider" stroke="var(--stroke-0, #C4C8B7)" x2="444" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#dae2ff] content-stretch flex flex-col h-[56px] items-center justify-center min-h-[56px] relative shrink-0 w-full" data-name="List item/List Item: 0 Density">
        <div className="absolute inset-0" data-name="state-layer overlay" />
        <StateLayer53 />
        <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Divider">
          <div className="h-0 relative shrink-0 w-full" data-name="Divider">
            <div className="absolute bottom-0 left-0 right-0 top-[-1px]" style={{ "--stroke-0": "rgba(196, 200, 183, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 444 1">
                <line id="Divider" stroke="var(--stroke-0, #C4C8B7)" x2="444" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col h-[56px] items-center justify-center min-h-[56px] relative shrink-0 w-full" data-name="List item/List Item: 0 Density">
        <div className="absolute inset-0" data-name="state-layer overlay" />
        <StateLayer54 />
        <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Divider">
          <div className="h-0 relative shrink-0 w-full" data-name="Divider">
            <div className="absolute bottom-0 left-0 right-0 top-[-1px]" style={{ "--stroke-0": "rgba(196, 200, 183, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 444 1">
                <line id="Divider" stroke="var(--stroke-0, #C4C8B7)" x2="444" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col h-[56px] items-center justify-center min-h-[56px] relative shrink-0 w-full" data-name="List item/List Item: 0 Density">
        <div className="absolute inset-0" data-name="state-layer overlay" />
        <StateLayer55 />
        <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Divider">
          <div className="h-0 relative shrink-0 w-full" data-name="Divider">
            <div className="absolute bottom-0 left-0 right-0 top-[-1px]" style={{ "--stroke-0": "rgba(196, 200, 183, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 444 1">
                <line id="Divider" stroke="var(--stroke-0, #C4C8B7)" x2="444" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col h-[56px] items-center justify-center min-h-[56px] relative shrink-0 w-full" data-name="List item/List Item: 0 Density">
        <div className="absolute inset-0" data-name="state-layer overlay" />
        <StateLayer56 />
        <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Divider">
          <div className="h-0 relative shrink-0 w-full" data-name="Divider">
            <div className="absolute bottom-0 left-0 right-0 top-[-1px]" style={{ "--stroke-0": "rgba(196, 200, 183, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 444 1">
                <line id="Divider" stroke="var(--stroke-0, #C4C8B7)" x2="444" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col h-[56px] items-center justify-center min-h-[56px] relative shrink-0 w-full" data-name="List item/List Item: 0 Density">
        <div className="absolute inset-0" data-name="state-layer overlay" />
        <StateLayer57 />
        <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Divider">
          <div className="h-0 relative shrink-0 w-full" data-name="Divider">
            <div className="absolute bottom-0 left-0 right-0 top-[-1px]" style={{ "--stroke-0": "rgba(196, 200, 183, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 444 1">
                <line id="Divider" stroke="var(--stroke-0, #C4C8B7)" x2="444" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col h-[56px] items-center justify-center min-h-[56px] relative shrink-0 w-full" data-name="List item/List Item: 0 Density">
        <div className="absolute inset-0" data-name="state-layer overlay" />
        <StateLayer58 />
        <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Divider">
          <div className="h-0 relative shrink-0 w-full" data-name="Divider">
            <div className="absolute bottom-0 left-0 right-0 top-[-1px]" style={{ "--stroke-0": "rgba(196, 200, 183, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 444 1">
                <line id="Divider" stroke="var(--stroke-0, #C4C8B7)" x2="444" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col h-[56px] items-center justify-center min-h-[56px] relative shrink-0 w-full" data-name="List item/List Item: 0 Density">
        <div className="absolute inset-0" data-name="state-layer overlay" />
        <StateLayer59 />
        <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Divider">
          <div className="h-0 relative shrink-0 w-full" data-name="Divider">
            <div className="absolute bottom-0 left-0 right-0 top-[-1px]" style={{ "--stroke-0": "rgba(196, 200, 183, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 444 1">
                <line id="Divider" stroke="var(--stroke-0, #C4C8B7)" x2="444" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col h-[56px] items-center justify-center min-h-[56px] relative shrink-0 w-full" data-name="List item/List Item: 0 Density">
        <div className="absolute inset-0" data-name="state-layer overlay" />
        <StateLayer60 />
        <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Divider">
          <div className="h-0 relative shrink-0 w-full" data-name="Divider">
            <div className="absolute bottom-0 left-0 right-0 top-[-1px]" style={{ "--stroke-0": "rgba(196, 200, 183, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 444 1">
                <line id="Divider" stroke="var(--stroke-0, #C4C8B7)" x2="444" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col h-[56px] items-center justify-center min-h-[56px] relative shrink-0 w-full" data-name="List item/List Item: 0 Density">
        <div className="absolute inset-0" data-name="state-layer overlay" />
        <StateLayer61 />
        <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Divider">
          <div className="h-0 relative shrink-0 w-full" data-name="Divider">
            <div className="absolute bottom-0 left-0 right-0 top-[-1px]" style={{ "--stroke-0": "rgba(196, 200, 183, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 444 1">
                <line id="Divider" stroke="var(--stroke-0, #C4C8B7)" x2="444" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col h-[56px] items-center justify-center min-h-[56px] relative shrink-0 w-full" data-name="List item/List Item: 0 Density">
        <div className="absolute inset-0" data-name="state-layer overlay" />
        <StateLayer62 />
        <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Divider">
          <div className="h-0 relative shrink-0 w-full" data-name="Divider">
            <div className="absolute bottom-0 left-0 right-0 top-[-1px]" style={{ "--stroke-0": "rgba(196, 200, 183, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 444 1">
                <line id="Divider" stroke="var(--stroke-0, #C4C8B7)" x2="444" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col h-[56px] items-center justify-center min-h-[56px] relative shrink-0 w-full" data-name="List item/List Item: 0 Density">
        <div className="absolute inset-0" data-name="state-layer overlay" />
        <StateLayer63 />
        <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Divider">
          <div className="h-0 relative shrink-0 w-full" data-name="Divider">
            <div className="absolute bottom-0 left-0 right-0 top-[-1px]" style={{ "--stroke-0": "rgba(196, 200, 183, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 444 1">
                <line id="Divider" stroke="var(--stroke-0, #C4C8B7)" x2="444" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col h-[56px] items-center justify-center min-h-[56px] relative shrink-0 w-full" data-name="List item/List Item: 0 Density">
        <div className="absolute inset-0" data-name="state-layer overlay" />
        <StateLayer64 />
        <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Divider">
          <div className="h-0 relative shrink-0 w-full" data-name="Divider">
            <div className="absolute bottom-0 left-0 right-0 top-[-1px]" style={{ "--stroke-0": "rgba(196, 200, 183, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 444 1">
                <line id="Divider" stroke="var(--stroke-0, #C4C8B7)" x2="444" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col h-[56px] items-center justify-center min-h-[56px] relative shrink-0 w-full" data-name="List item/List Item: 0 Density">
        <div className="absolute inset-0" data-name="state-layer overlay" />
        <StateLayer65 />
        <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Divider">
          <div className="h-0 relative shrink-0 w-full" data-name="Divider">
            <div className="absolute bottom-0 left-0 right-0 top-[-1px]" style={{ "--stroke-0": "rgba(196, 200, 183, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 444 1">
                <line id="Divider" stroke="var(--stroke-0, #C4C8B7)" x2="444" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col h-[56px] items-center justify-center min-h-[56px] relative shrink-0 w-full" data-name="List item/List Item: 0 Density">
        <div className="absolute inset-0" data-name="state-layer overlay" />
        <StateLayer66 />
        <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Divider">
          <div className="h-0 relative shrink-0 w-full" data-name="Divider">
            <div className="absolute bottom-0 left-0 right-0 top-[-1px]" style={{ "--stroke-0": "rgba(196, 200, 183, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 444 1">
                <line id="Divider" stroke="var(--stroke-0, #C4C8B7)" x2="444" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col h-[56px] items-center justify-center min-h-[56px] relative shrink-0 w-full" data-name="List item/List Item: 0 Density">
        <div className="absolute inset-0" data-name="state-layer overlay" />
        <StateLayer67 />
        <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Divider">
          <div className="h-0 relative shrink-0 w-full" data-name="Divider">
            <div className="absolute bottom-0 left-0 right-0 top-[-1px]" style={{ "--stroke-0": "rgba(196, 200, 183, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 444 1">
                <line id="Divider" stroke="var(--stroke-0, #C4C8B7)" x2="444" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col h-[56px] items-center justify-center min-h-[56px] relative shrink-0 w-full" data-name="List item/List Item: 0 Density">
        <div className="absolute inset-0" data-name="state-layer overlay" />
        <StateLayer68 />
        <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Divider">
          <div className="h-0 relative shrink-0 w-full" data-name="Divider">
            <div className="absolute bottom-0 left-0 right-0 top-[-1px]" style={{ "--stroke-0": "rgba(196, 200, 183, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 444 1">
                <line id="Divider" stroke="var(--stroke-0, #C4C8B7)" x2="444" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col h-[56px] items-center justify-center min-h-[56px] relative shrink-0 w-full" data-name="List item/List Item: 0 Density">
        <div className="absolute inset-0" data-name="state-layer overlay" />
        <StateLayer69 />
        <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Divider">
          <div className="h-0 relative shrink-0 w-full" data-name="Divider">
            <div className="absolute bottom-0 left-0 right-0 top-[-1px]" style={{ "--stroke-0": "rgba(196, 200, 183, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 444 1">
                <line id="Divider" stroke="var(--stroke-0, #C4C8B7)" x2="444" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col h-[56px] items-center justify-center min-h-[56px] relative shrink-0 w-full" data-name="List item/List Item: 0 Density">
        <div className="absolute inset-0" data-name="state-layer overlay" />
        <StateLayer70 />
        <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Divider">
          <div className="h-0 relative shrink-0 w-full" data-name="Divider">
            <div className="absolute bottom-0 left-0 right-0 top-[-1px]" style={{ "--stroke-0": "rgba(196, 200, 183, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 444 1">
                <line id="Divider" stroke="var(--stroke-0, #C4C8B7)" x2="444" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function AnswersTable() {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0" data-name="Answers Table">
      <AsnwerColumn />
      <Sjekklistesporsmal />
    </div>
  );
}

function StateLayer71() {
  return (
    <div className="content-stretch flex h-[32px] items-center justify-center relative shrink-0 w-full" data-name="State-layer">
      <div className="relative shrink-0 size-[20px]" data-name="Icon">
        <div className="absolute inset-0 overflow-clip" data-name="expand_more">
          <div className="absolute bottom-[34.56%] left-1/4 right-1/4 top-[34.56%]" data-name="Vector">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 7">
              <path d={svgPaths.p2cbae000} fill="var(--fill-0, #44483B)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame94() {
  return (
    <button className="basis-0 box-border content-stretch cursor-pointer flex gap-[8px] grow items-center min-h-px min-w-px overflow-visible p-0 relative shrink-0">
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
      <div className="flex flex-col font-['Quatro:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1a1c16] text-[22px] text-nowrap">
        <p className="leading-[28px] whitespace-pre">
          <span className="font-['Quatro:Regular',sans-serif] not-italic">1.</span>1<span className="font-['Quatro:Regular',sans-serif] not-italic">.</span>1
        </p>
      </div>
      <div className="content-stretch flex items-center justify-center opacity-0 relative shrink-0 size-[48px]" data-name="Icon button">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[100px] shrink-0 w-[32px]" data-name="Content">
          <StateLayer71 />
        </div>
      </div>
    </button>
  );
}

function StateLayer72() {
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

function Container1() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center overflow-clip relative rounded-[100px] shrink-0" data-name="container">
      <StateLayer72 />
    </div>
  );
}

function StateLayer73() {
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

function Container2() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center overflow-clip relative rounded-[100px] shrink-0" data-name="container">
      <StateLayer73 />
    </div>
  );
}

function TrailingIcon1() {
  return (
    <div className="content-stretch cursor-pointer flex h-[48px] items-center justify-end relative shrink-0" data-name="trailing-icon">
      <div className="content-stretch flex flex-col gap-[10px] items-center justify-center relative shrink-0 size-[48px]" data-name="trailing-icon 3">
        <Container1 />
      </div>
      <div className="content-stretch flex flex-col gap-[10px] items-center justify-center relative shrink-0 size-[48px]" data-name="trailing-icon 2">
        <Container2 />
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
      <Frame94 />
      <TrailingIcon1 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start justify-center min-h-px min-w-px relative shrink-0">
      <Frame8 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
      <Frame14 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0 w-full">
      <Frame16 />
    </div>
  );
}

function StateLayer74() {
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

function Frame18() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <div className="bg-[#365bae] content-stretch flex h-[32px] items-center justify-center overflow-clip relative rounded-[8px] shrink-0" data-name="Input chip">
        <StateLayer74 />
      </div>
    </div>
  );
}

function LeadingElement8() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Leading element">
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

function Content44() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] tracking-[0.5px] w-full">
        <p className="leading-[24px]">Krav</p>
      </div>
    </div>
  );
}

function StateLayer75() {
  return (
    <div className="content-stretch flex gap-[16px] h-[40px] items-center justify-center relative shrink-0 w-full" data-name="state-layer">
      <LeadingElement8 />
      <Content44 />
    </div>
  );
}

function RequirementList() {
  return (
    <div className="relative shrink-0 w-full" data-name="requirement list">
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-start justify-center px-[24px] py-[8px] relative w-full">
          <div className="content-stretch flex flex-col items-start justify-center min-h-[40px] relative shrink-0 w-full" data-name="List item/List Item: -4 Density">
            <div className="absolute inset-0" data-name="state-layer overlay" />
            <StateLayer75 />
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

function TabContents11() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center justify-center min-h-px min-w-px relative shrink-0" data-name="Tab Contents">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[14px] text-center text-nowrap tracking-[0.1px]">
        <p className="leading-[20px] whitespace-pre">Veileder revisor</p>
      </div>
    </div>
  );
}

function StateLayer76() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="State-layer">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col items-center justify-center px-[16px] py-[14px] relative size-full">
          <TabContents11 />
          <div className="absolute bg-[#4a671e] bottom-0 h-[2px] left-0 right-0" data-name="Indicator" />
        </div>
      </div>
    </div>
  );
}

function TabContents12() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center justify-center min-h-px min-w-px relative shrink-0" data-name="Tab Contents">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#44483b] text-[14px] text-center text-nowrap tracking-[0.1px]">
        <p className="leading-[20px] whitespace-pre">Veileder</p>
      </div>
    </div>
  );
}

function StateLayer77() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="State-layer">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col items-center justify-center px-[16px] py-[14px] relative size-full">
          <TabContents12 />
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
            <StateLayer76 />
          </div>
          <div className="content-stretch flex flex-col h-[48px] items-center justify-end overflow-clip relative shrink-0" data-name="Tab 2">
            <StateLayer77 />
          </div>
        </div>
      </div>
    </div>
  );
}

function StateLayer78() {
  return (
    <div className="box-border content-stretch flex gap-[4px] items-center justify-center px-[12px] py-[6px] relative shrink-0" data-name="State-layer">
      <div className="relative shrink-0 size-[20px]" data-name="Icon">
        <div className="absolute inset-0 overflow-clip" data-name="expand_more">
          <div className="absolute bottom-[34.56%] left-1/4 right-1/4 top-[34.56%]" data-name="Vector">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 7">
              <path d={svgPaths.p2cbae000} fill="var(--fill-0, #4A671E)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#4a671e] text-[14px] text-nowrap tracking-[0.1px]">
        <p className="leading-[20px] whitespace-pre">Les mer</p>
      </div>
    </div>
  );
}

function Frame19() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-start px-[24px] py-0 relative w-full">
          <div className="-webkit-box flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full overflow-ellipsis overflow-hidden relative shrink-0 text-[#1a1c16] text-[16px] tracking-[0.5px] w-[min-content]">
            <p className="leading-[24px] mb-0">Dette bør du spørre om på dokumentgjennomgang:</p>
            <p className="leading-[24px] mb-0">&nbsp;</p>
            <ul>
              <li className="list-disc ms-[24px]">
                <span className="leading-[24px]">Be om dokumentasjon på kjøp av eks for, gjødsel eller drivstoff. ...</span>
              </li>
            </ul>
          </div>
          <div className="content-stretch flex h-[48px] items-center justify-center relative shrink-0" data-name="next Button">
            <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0" data-name="Content">
              <StateLayer78 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Tabs">
        <TabGroup2 />
        <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Divider">
          <div className="h-0 relative shrink-0 w-full" data-name="Divider">
            <div className="absolute bottom-0 left-0 right-0 top-[-1px]" style={{ "--stroke-0": "rgba(227, 227, 217, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 448 1">
                <line id="Divider" stroke="var(--stroke-0, #E3E3D9)" x2="448" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Frame19 />
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <RequirementSection />
      <Frame9 />
    </div>
  );
}

function KravVeileder() {
  return (
    <div className="bg-[#fafaf0] box-border content-stretch flex flex-col gap-[8px] items-center px-0 py-[8px] relative rounded-[12px] shrink-0 w-full" data-name="krav & veileder">
      <div aria-hidden="true" className="absolute border border-[#c4c8b7] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Frame20 />
    </div>
  );
}

function StateLayer79() {
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

function Container3() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0" data-name="container">
      <StateLayer79 />
    </div>
  );
}

function LeadingElement9() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Leading element">
      <div className="content-stretch flex items-center justify-center relative shrink-0 size-[24px]" data-name="Radio buttons">
        <Container3 />
      </div>
    </div>
  );
}

function Content45() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] tracking-[0.5px] w-full">
        <p className="leading-[24px]">Ja</p>
      </div>
    </div>
  );
}

function StateLayer80() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center px-[16px] py-0 relative size-full">
          <LeadingElement9 />
          <Content45 />
        </div>
      </div>
    </div>
  );
}

function StateLayer81() {
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

function Container4() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0" data-name="container">
      <StateLayer81 />
    </div>
  );
}

function LeadingElement10() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Leading element">
      <div className="content-stretch flex items-center justify-center relative shrink-0 size-[24px]" data-name="Radio buttons">
        <Container4 />
      </div>
    </div>
  );
}

function Content46() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] tracking-[0.5px] w-full">
        <p className="leading-[24px]">Nei</p>
      </div>
    </div>
  );
}

function StateLayer82() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center px-[16px] py-0 relative size-full">
          <LeadingElement10 />
          <Content46 />
        </div>
      </div>
    </div>
  );
}

function StateLayer83() {
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

function Container5() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0" data-name="container">
      <StateLayer83 />
    </div>
  );
}

function LeadingElement11() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Leading element">
      <div className="content-stretch flex items-center justify-center relative shrink-0 size-[24px]" data-name="Radio buttons">
        <Container5 />
      </div>
    </div>
  );
}

function Content47() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] tracking-[0.5px] w-full">
        <p className="leading-[24px]">Ikke relevant</p>
      </div>
    </div>
  );
}

function StateLayer84() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center px-[16px] py-0 relative size-full">
          <LeadingElement11 />
          <Content47 />
        </div>
      </div>
    </div>
  );
}

function Frame21() {
  return (
    <div className="box-border content-stretch cursor-pointer flex flex-col items-start px-0 py-[16px] relative shrink-0 w-full">
      <button className="box-border content-stretch flex flex-col h-[40px] items-center justify-center min-h-[40px] overflow-visible p-0 relative shrink-0 w-full" data-name="List item/List Item: -4 Density">
        <div className="absolute inset-0" data-name="state-layer overlay" />
        <StateLayer80 />
      </button>
      <button className="box-border content-stretch flex flex-col h-[40px] items-center justify-center min-h-[40px] overflow-visible p-0 relative shrink-0 w-full" data-name="List item/List Item: -4 Density">
        <div className="absolute inset-0" data-name="state-layer overlay" />
        <StateLayer82 />
      </button>
      <button className="box-border content-stretch flex flex-col h-[40px] items-center justify-center min-h-[40px] overflow-visible p-0 relative shrink-0 w-full" data-name="List item/List Item: -4 Density">
        <div className="absolute inset-0" data-name="state-layer overlay" />
        <StateLayer84 />
      </button>
    </div>
  );
}

function AnswerAlternatvies() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-x-clip overflow-y-auto relative shrink-0 w-full" data-name="Answer alternatvies">
      <Frame21 />
    </div>
  );
}

function TabContents13() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center justify-center min-h-px min-w-px relative shrink-0" data-name="Tab Contents">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[14px] text-center text-nowrap tracking-[0.1px]">
        <p className="leading-[20px] whitespace-pre">Egenrevisjonssvar</p>
      </div>
    </div>
  );
}

function StateLayer85() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="State-layer">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col items-center justify-center px-[16px] py-[14px] relative size-full">
          <TabContents13 />
          <div className="absolute bg-[#4a671e] bottom-0 h-[2px] left-0 right-0" data-name="Indicator" />
        </div>
      </div>
    </div>
  );
}

function TabContents14() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center justify-center min-h-px min-w-px relative shrink-0" data-name="Tab Contents">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#44483b] text-[14px] text-center text-nowrap tracking-[0.1px]">
        <p className="leading-[20px] whitespace-pre">Notat</p>
      </div>
    </div>
  );
}

function StateLayer86() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="State-layer">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col items-center justify-center px-[16px] py-[14px] relative size-full">
          <TabContents14 />
        </div>
      </div>
    </div>
  );
}

function TabGroup3() {
  return (
    <div className="content-stretch cursor-pointer flex items-start relative shrink-0 w-full" data-name="Tab group">
      <div className="content-stretch flex flex-col h-[48px] items-center justify-end overflow-clip relative shrink-0" data-name="Tab 3">
        <StateLayer85 />
      </div>
      <div className="content-stretch flex flex-col h-[48px] items-center justify-end overflow-clip relative shrink-0 w-[90px]" data-name="Tab 4">
        <StateLayer86 />
      </div>
    </div>
  );
}

function Content48() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start justify-center leading-[0] min-h-px min-w-px overflow-clip relative shrink-0 tracking-[0.5px]" data-name="Content">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[#44483b] text-[12px] w-full">
        <p className="leading-[16px]">Svarvalg</p>
      </div>
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#1a1c16] text-[16px] w-full">
        <p className="leading-[24px]">Ja</p>
      </div>
    </div>
  );
}

function Frame15() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[16px] items-start p-[8px] relative w-full">
          <Content48 />
        </div>
      </div>
    </div>
  );
}

function Content49() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start justify-center leading-[0] min-h-px min-w-px overflow-clip relative shrink-0 tracking-[0.5px]" data-name="Content">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[#44483b] text-[12px] w-full">
        <p className="leading-[16px]">Svartekst</p>
      </div>
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#1a1c16] text-[16px] w-full">
        <p className="leading-[24px]">Ja, jeg har alt registrert i regnskapssystemet mitt, og kan enkelt hente ut oversikten.</p>
      </div>
    </div>
  );
}

function Frame22() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[16px] items-start p-[8px] relative w-full">
          <Content49 />
        </div>
      </div>
    </div>
  );
}

function StateLayer87() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-center justify-center px-[24px] py-[16px] relative shrink-0" data-name="State-layer">
      <div className="relative shrink-0 size-[24px]" data-name="Icon">
        <div className="absolute inset-[41.67%_29.17%_37.5%_29.17%]" data-name="icon">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 5">
            <path d="M5 5L0 0H10L5 5Z" fill="var(--fill-0, #44483B)" id="icon" />
          </svg>
        </div>
      </div>
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#44483b] text-[16px] text-nowrap tracking-[0.15px]">
        <p className="leading-[24px] whitespace-pre">Se opplastede dokumenter</p>
      </div>
    </div>
  );
}

function SelectedItemPanel() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[8px] h-full items-start overflow-x-clip overflow-y-auto px-[16px] py-0 relative shrink-0 w-[480px]" data-name="Selected item panel">
      <div className="box-border content-stretch flex flex-col gap-[8px] items-start justify-center px-0 py-[8px] relative shrink-0 w-[361px]" data-name="Question mobile menu">
        <Frame17 />
      </div>
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] min-w-full relative shrink-0 text-[#1a1c16] text-[16px] tracking-[0.15px] w-[min-content]">
        <p className="leading-[24px]">Er det etablert en rutine som sikrer at det kun brukes ingredienser med norsk opprinnelse i Spesialitet-godkjent produkt? (ingredienser som ikke produseres kommersielt i Norge er unntatt fra dette kravet)</p>
      </div>
      <Frame18 />
      <KravVeileder />
      <AnswerAlternatvies />
      <div className="content-stretch flex flex-col gap-[16px] items-start max-w-[704px] relative shrink-0 w-full" data-name="Revisor Question Tabs">
        <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Tabs">
          <TabGroup3 />
          <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Divider">
            <div className="h-0 relative shrink-0 w-full" data-name="Divider">
              <div className="absolute bottom-0 left-0 right-0 top-[-2px]" style={{ "--stroke-0": "rgba(227, 227, 217, 1)" } as React.CSSProperties}>
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 448 2">
                  <line id="Divider" stroke="var(--stroke-0, #E3E3D9)" strokeWidth="2" x2="448" y1="1" y2="1" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Self-audit answer">
          <div className="box-border content-stretch flex flex-col gap-[8px] items-center justify-center min-h-[64px] pb-0 pt-[8px] px-0 relative shrink-0 w-full" data-name="App User Input">
            <Frame15 />
          </div>
          <div className="box-border content-stretch flex flex-col gap-[8px] items-center justify-center min-h-[64px] pb-0 pt-[8px] px-0 relative shrink-0 w-full" data-name="App User Input">
            <Frame22 />
          </div>
          <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Button">
            <div className="relative rounded-[100px] shrink-0" data-name="Content">
              <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[inherit]">
                <StateLayer87 />
              </div>
              <div aria-hidden="true" className="absolute border border-[#c4c8b7] border-solid inset-0 pointer-events-none rounded-[100px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableContent() {
  return (
    <div className="basis-0 content-stretch flex gap-px grow items-start min-h-px min-w-px relative shrink-0 w-full" data-name="Table Content">
      <AnswersTable />
      <div className="content-stretch flex flex-col h-full items-center overflow-clip relative shrink-0 w-px" data-name="Vertical/Full-width">
        <div className="basis-0 flex grow items-center justify-center min-h-px min-w-px relative shrink-0 w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "120", "--transform-inner-height": "1" } as React.CSSProperties}>
          <div className="flex-none h-full rotate-[90deg]">
            <div className="h-full relative w-[120px]" data-name="Divider">
              <div className="absolute bottom-0 left-0 right-0 top-[-1px]" style={{ "--stroke-0": "rgba(196, 200, 183, 1)" } as React.CSSProperties}>
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1041 1">
                  <line id="Divider" stroke="var(--stroke-0, #C4C8B7)" x2="1040.32" y1="0.5" y2="0.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SelectedItemPanel />
    </div>
  );
}

function Svaroversikt() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start min-h-px min-w-px relative shrink-0 z-[1]" data-name="Svaroversikt">
      <div className="relative shrink-0 w-full" data-name="Primary content">
        <div className="flex flex-col justify-center size-full">
          <div className="box-border content-stretch flex flex-col gap-[8px] items-start justify-center px-[40px] py-[12px] relative w-full">
            <div className="flex flex-col font-['Quatro:Regular',sans-serif] h-[48px] justify-center leading-[0] not-italic relative shrink-0 text-[#1a1c16] text-[22px] w-[1030px]">
              <p className="leading-[28px]">{`Svaroversikt `}</p>
            </div>
            <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full relative shrink-0 text-[#1a1c16] text-[16px] tracking-[0.5px] w-[min-content]">
              <p className="leading-[24px]">Ikke relevante spørsmål blir slettet. Avvikene behandles videre i neste steg.</p>
            </div>
            <button className="bg-[#eeeee4] box-border content-stretch cursor-pointer flex flex-col h-[56px] items-center justify-center min-h-[56px] overflow-visible p-0 relative rounded-[12px] shrink-0" data-name="List item/List Item: 0 Density">
              <div aria-hidden="true" className="absolute border border-[#c4c8b7] border-solid inset-0 pointer-events-none rounded-[12px]" />
              <div className="absolute inset-0" data-name="state-layer overlay" />
              <StateLayer24 />
            </button>
            <div className="box-border content-stretch flex gap-[16px] items-start justify-end px-0 py-[12px] relative shrink-0 w-full" data-name="Navigation buttons">
              <NavigationButtons />
            </div>
          </div>
        </div>
      </div>
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
      <TableContent />
    </div>
  );
}

function NyPrototype() {
  return (
    <div className="basis-0 content-stretch flex grow isolate items-center min-h-px min-w-px relative shrink-0 w-full" data-name="ny prototype">
      <div className="box-border content-stretch flex flex-col gap-[8px] h-full items-start overflow-x-clip overflow-y-auto p-[16px] relative shrink-0 w-[392px] z-[3]" data-name="Report steps">
        <div className="bg-white box-border content-stretch flex gap-[16px] items-center min-h-[64px] px-0 py-[8px] relative rounded-[12px] shrink-0 w-full" data-name="checklist Question">
          <Frame7 />
        </div>
        <div className="bg-white box-border content-stretch flex gap-[16px] items-center min-h-[64px] px-0 py-[8px] relative rounded-[12px] shrink-0 w-full" data-name="checklist Question">
          <Frame10 />
        </div>
        <div className="bg-[#dae2ff] box-border content-stretch flex gap-[16px] items-center min-h-[64px] px-0 py-[8px] relative rounded-[12px] shrink-0 w-full" data-name="checklist Question">
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
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1346 1">
                  <line id="Divider" stroke="var(--stroke-0, #C4C8B7)" x2="1345.32" y1="0.5" y2="0.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Svaroversikt />
    </div>
  );
}

function Frame23() {
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
      <Frame23 />
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

export default function RevisorRapportSketch7() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[10px] items-start overflow-clip relative rounded-[16px] shadow-[0px_8px_12px_6px_rgba(0,0,0,0.15),0px_4px_4px_0px_rgba(0,0,0,0.3)] size-full" data-name="revisor- rapport sketch 7">
      <Frame6 />
    </div>
  );
}