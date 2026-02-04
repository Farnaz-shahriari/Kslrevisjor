import svgPaths from "./svg-24h13zh742";

function GenericAvatar() {
  return (
    <div className="relative shrink-0 size-[56px]" data-name="Generic avatar">
      <div className="absolute inset-0" style={{ "--fill-0": "rgba(239, 241, 231, 1)" } as React.CSSProperties}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 56 56">
          <g id="Generic avatar">
            <rect fill="var(--fill-0, #EFF1E7)" height="56" rx="28" width="56" />
            <g id="Avatar Placeholder">
              <path clipRule="evenodd" d={svgPaths.pb9ab680} fill="var(--fill-0, #284000)" fillRule="evenodd" />
              <path d={svgPaths.p14aadaf0} fill="var(--fill-0, #284000)" />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}

function UserInfo() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start justify-center leading-[0] min-h-px min-w-px relative" data-name="User Info">
      <div className="flex flex-col font-['Quatro:Regular',sans-serif] justify-center not-italic relative shrink-0 text-[#1a1c16] text-[22px] w-full">
        <p className="css-4hzbpn leading-[28px]">Liv Berg</p>
      </div>
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[#44483b] text-[16px] tracking-[0.15px] w-full">
        <p className="css-4hzbpn leading-[24px]">Revisorprofil</p>
      </div>
    </div>
  );
}

function UserGreeting() {
  return (
    <div className="content-stretch flex gap-[16px] items-center py-[8px] relative shrink-0 w-[533px]" data-name="user greeting">
      <GenericAvatar />
      <UserInfo />
    </div>
  );
}

function Percent() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="percent">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="percent">
          <path d={svgPaths.p37d26b00} fill="var(--fill-0, #4A671E)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function StateLayer() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center px-[24px] py-[16px] relative shrink-0" data-name="State-layer">
      <Percent />
      <div className="css-g0mm18 flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#4a671e] text-[16px] tracking-[0.15px]">
        <p className="css-ew64yg leading-[24px]">Se på statistik</p>
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
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Button">
      <Content />
    </div>
  );
}

function PermIdentity() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="perm_identity">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="perm_identity">
          <path d={svgPaths.p24cfbd00} fill="var(--fill-0, #4A671E)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function StateLayer1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center px-[24px] py-[16px] relative shrink-0" data-name="State-layer">
      <PermIdentity />
      <div className="css-g0mm18 flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#4a671e] text-[16px] tracking-[0.15px]">
        <p className="css-ew64yg leading-[24px]">Rediger revisorsprofil</p>
      </div>
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0" data-name="Content">
      <StateLayer1 />
    </div>
  );
}

function Button1() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Button">
      <Content1 />
    </div>
  );
}

function Actions() {
  return (
    <div className="content-center flex flex-wrap gap-[8px] items-center relative shrink-0" data-name="Actions">
      <Button />
      <Button1 />
    </div>
  );
}

function Information() {
  return (
    <div className="content-center flex flex-wrap gap-[8px] items-center justify-between py-[8px] relative shrink-0 w-full" data-name="information">
      <UserGreeting />
      <Actions />
    </div>
  );
}

function LeadingElement() {
  return (
    <div className="bg-[#f4f4ea] relative rounded-[7.262px] shrink-0 size-[24px]" data-name="Leading element">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="post_add">
          <g id="Vector">
            <path d={svgPaths.p15082280} fill="var(--fill-0, #4A671E)" />
            <path d={svgPaths.p141e7e00} fill="var(--fill-0, #4A671E)" />
            <path d="M14.5 9.5H6.5V11.5H14.5V9.5Z" fill="var(--fill-0, #4A671E)" />
            <path d={svgPaths.p1e924700} fill="var(--fill-0, #4A671E)" />
            <path d={svgPaths.p3be0780} fill="var(--fill-0, #4A671E)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Badges() {
  return (
    <div className="absolute bg-[#ba1a1a] content-stretch flex items-center justify-center left-[36px] max-w-[34px] min-w-[16px] overflow-clip px-[4px] rounded-[100px] top-[-4px]" data-name="Badges">
      <div className="flex flex-[1_0_0] flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] min-h-px min-w-px relative text-[11px] text-center text-white tracking-[0.5px]">
        <p className="css-4hzbpn leading-[16px]">10</p>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="bg-[#f4f4ea] content-stretch flex gap-[8px] items-center justify-center p-[8px] relative rounded-[7.262px] shrink-0 size-[48px]" data-name="icon">
      <LeadingElement />
      <Badges />
    </div>
  );
}

function AssignedAudits() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 text-center" data-name="Assigned Audits">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] tracking-[0.15px] w-full">
        <p className="css-4hzbpn leading-[24px]">Tildelte revisjoner</p>
      </div>
      <p className="css-g0mm18 font-['Manrope:Regular',sans-serif] font-normal h-[20px] leading-[20px] overflow-hidden relative shrink-0 text-[#44483b] text-[14px] text-ellipsis tracking-[0.25px] w-full">Venter på at du skal ta stilling</p>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center justify-center relative shrink-0" data-name="Container">
      <Icon />
      <AssignedAudits />
    </div>
  );
}

function QuickAccessCard() {
  return (
    <div className="bg-white flex-[1_0_0] max-w-[280px] min-h-px min-w-[232px] relative rounded-[16px]" data-name="Quick access card">
      <div aria-hidden="true" className="absolute border border-[#c4c8b7] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-col items-center max-w-[inherit] min-w-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center max-w-[inherit] min-w-[inherit] p-[12px] relative w-full">
          <Container />
        </div>
      </div>
    </div>
  );
}

function LeadingElement1() {
  return (
    <div className="bg-[#f4f4ea] relative rounded-[7.262px] shrink-0 size-[24px]" data-name="Leading element">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="date_range">
          <path d={svgPaths.p1c86d00} fill="var(--fill-0, #4A671E)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Badges1() {
  return (
    <div className="absolute bg-[#ba1a1a] content-stretch flex items-center justify-center left-[36px] max-w-[34px] min-w-[16px] overflow-clip px-[4px] rounded-[100px] top-[-4px]" data-name="Badges">
      <div className="flex flex-[1_0_0] flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] min-h-px min-w-px relative text-[11px] text-center text-white tracking-[0.5px]">
        <p className="css-4hzbpn leading-[16px]">3</p>
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="bg-[#f4f4ea] content-stretch flex gap-[8px] items-center justify-center p-[8px] relative rounded-[7.262px] shrink-0 size-[48px]" data-name="icon">
      <LeadingElement1 />
      <Badges1 />
    </div>
  );
}

function WaitingForPlanning() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 text-center" data-name="Waiting for Planning">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] tracking-[0.15px] w-full">
        <p className="css-4hzbpn leading-[24px]">Venter på planlegging</p>
      </div>
      <p className="css-g0mm18 font-['Manrope:Regular',sans-serif] font-normal h-[20px] leading-[20px] overflow-hidden relative shrink-0 text-[#44483b] text-[14px] text-ellipsis tracking-[0.25px] w-full">Tidspunkt er ikke satt</p>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center justify-center relative shrink-0" data-name="Container">
      <Icon1 />
      <WaitingForPlanning />
    </div>
  );
}

function QuickAccessCard1() {
  return (
    <div className="bg-white flex-[1_0_0] max-w-[280px] min-h-px min-w-[232px] relative rounded-[16px]" data-name="Quick access card">
      <div aria-hidden="true" className="absolute border border-[#c4c8b7] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-col items-center max-w-[inherit] min-w-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center max-w-[inherit] min-w-[inherit] p-[12px] relative w-full">
          <Container1 />
        </div>
      </div>
    </div>
  );
}

function LeadingElement2() {
  return (
    <div className="bg-[#f4f4ea] relative rounded-[7.262px] shrink-0 size-[24px]" data-name="Leading element">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="rule_folder">
          <path d={svgPaths.p38bb600} fill="var(--fill-0, #4A671E)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Badges2() {
  return (
    <div className="absolute bg-[#ba1a1a] content-stretch flex items-center justify-center left-[36px] max-w-[34px] min-w-[16px] overflow-clip px-[4px] rounded-[100px] top-[-4px]" data-name="Badges">
      <div className="flex flex-[1_0_0] flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] min-h-px min-w-px relative text-[11px] text-center text-white tracking-[0.5px]">
        <p className="css-4hzbpn leading-[16px]">3</p>
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="bg-[#f4f4ea] content-stretch flex gap-[8px] items-center justify-center p-[8px] relative rounded-[7.262px] shrink-0 size-[48px]" data-name="icon">
      <LeadingElement2 />
      <Badges2 />
    </div>
  );
}

function ReadyForReport() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 text-center" data-name="Ready for Report">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] tracking-[0.15px] w-full">
        <p className="css-4hzbpn leading-[24px]">Klar for rapport</p>
      </div>
      <p className="css-g0mm18 font-['Manrope:Regular',sans-serif] font-normal h-[20px] leading-[20px] overflow-hidden relative shrink-0 text-[#44483b] text-[14px] text-ellipsis tracking-[0.25px] w-full">Rapport må ferdigstilles</p>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center justify-center relative shrink-0" data-name="Container">
      <Icon2 />
      <ReadyForReport />
    </div>
  );
}

function QuickAccessCard2() {
  return (
    <div className="bg-white flex-[1_0_0] max-w-[280px] min-h-px min-w-[232px] relative rounded-[16px]" data-name="Quick access card">
      <div aria-hidden="true" className="absolute border border-[#c4c8b7] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-col items-center max-w-[inherit] min-w-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center max-w-[inherit] min-w-[inherit] p-[12px] relative w-full">
          <Container2 />
        </div>
      </div>
    </div>
  );
}

function LeadingElement3() {
  return (
    <div className="bg-[#f4f4ea] relative rounded-[7.262px] shrink-0 size-[24px]" data-name="Leading element">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="report_problem">
          <path d={svgPaths.p24139a00} fill="var(--fill-0, #4A671E)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Badges3() {
  return (
    <div className="absolute bg-[#ba1a1a] content-stretch flex items-center justify-center left-[36px] max-w-[34px] min-w-[16px] overflow-clip px-[4px] rounded-[100px] top-[-4px]" data-name="Badges">
      <div className="flex flex-[1_0_0] flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] min-h-px min-w-px relative text-[11px] text-center text-white tracking-[0.5px]">
        <p className="css-4hzbpn leading-[16px]">3</p>
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="bg-[#f4f4ea] content-stretch flex gap-[8px] h-[48px] items-center justify-center p-[8px] relative rounded-[7.262px] shrink-0" data-name="icon">
      <LeadingElement3 />
      <Badges3 />
    </div>
  );
}

function ReadyForFollowUp() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 text-center" data-name="Ready for Follow-up">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] tracking-[0.15px] w-full">
        <p className="css-4hzbpn leading-[24px]">Klar for oppfølging</p>
      </div>
      <p className="css-g0mm18 font-['Manrope:Regular',sans-serif] font-normal h-[20px] leading-[20px] overflow-hidden relative shrink-0 text-[#44483b] text-[14px] text-ellipsis tracking-[0.25px] w-full">Avvik gjenstår etter besøk</p>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center justify-center relative shrink-0" data-name="Container">
      <Icon3 />
      <ReadyForFollowUp />
    </div>
  );
}

function QuickAccessCard3() {
  return (
    <div className="bg-white flex-[1_0_0] max-w-[280px] min-h-px min-w-[232px] relative rounded-[16px]" data-name="Quick access card">
      <div aria-hidden="true" className="absolute border border-[#c4c8b7] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-col items-center max-w-[inherit] min-w-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center max-w-[inherit] min-w-[inherit] p-[12px] relative w-full">
          <Container3 />
        </div>
      </div>
    </div>
  );
}

function NeedsActionAuditsNavigation() {
  return (
    <div className="content-start flex flex-wrap gap-[24px] items-start relative shrink-0 w-full" data-name="needs action audits navigation">
      <QuickAccessCard />
      <QuickAccessCard1 />
      <QuickAccessCard2 />
      <QuickAccessCard3 />
    </div>
  );
}

export default function ProfileDetails() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start justify-center px-[48px] py-[24px] relative size-full" data-name="Profile Details">
      <Information />
      <NeedsActionAuditsNavigation />
    </div>
  );
}