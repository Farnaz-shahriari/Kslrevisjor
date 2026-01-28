import svgPaths from "./svg-epuzborok3";

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

function UserGreeting() {
  return (
    <div className="content-stretch flex gap-[16px] items-center px-0 py-[8px] relative shrink-0" data-name="user greeting">
      <GenericAvatar />
      <div className="flex flex-col font-['Quatro:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1a1c16] text-[24px] text-nowrap">
        <p className="leading-[32px]">Velkommen til revisorprofilen din, Liv Berg</p>
      </div>
    </div>
  );
}

function StateLayer() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center px-[24px] py-[16px] relative shrink-0" data-name="State-layer">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#4a671e] text-[16px] text-nowrap tracking-[0.15px]">
        <p className="leading-[24px]">See og rediger revisorsprofil</p>
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

function Information() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start justify-center min-h-px min-w-px px-0 py-[8px] relative shrink-0" data-name="information">
      <UserGreeting />
      <Button />
    </div>
  );
}

function Percent() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="percent">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="percent">
          <path d={svgPaths.p37d26b00} fill="var(--fill-0, #44483B)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function LeadingElement() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Leading element">
      <Percent />
    </div>
  );
}

function Content1() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] tracking-[0.5px] w-full">
        <p className="leading-[24px]">Du gir 30% mindre avvik enn gjennomsitning</p>
      </div>
    </div>
  );
}

function StateLayer1() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[16px] items-center justify-center px-[16px] py-[8px] relative size-full">
          <LeadingElement />
          <Content1 />
        </div>
      </div>
    </div>
  );
}

function ListItemListItem0Density() {
  return (
    <div className="content-stretch flex flex-col h-[56px] items-center justify-center min-h-[56px] relative shrink-0 w-full" data-name="List item/List Item: 0 Density">
      <StateLayer1 />
    </div>
  );
}

function StateLayer2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center px-[24px] py-[16px] relative shrink-0" data-name="State-layer">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#44483b] text-[16px] text-nowrap tracking-[0.15px]">
        <p className="leading-[24px]">Se på statistik</p>
      </div>
    </div>
  );
}

function Content2() {
  return (
    <div className="relative rounded-[100px] shrink-0" data-name="Content">
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[inherit]">
        <StateLayer2 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#c4c8b7] border-solid inset-0 pointer-events-none rounded-[100px]" />
    </div>
  );
}

function Button1() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Button">
      <Content2 />
    </div>
  );
}

function Statics() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start justify-center overflow-clip pl-0 pr-[16px] py-[8px] relative rounded-[12px] shrink-0 w-[467px]" data-name="Statics">
      <ListItemListItem0Density />
      <Button1 />
    </div>
  );
}

export default function ProfileDetails() {
  return (
    <div className="content-stretch flex gap-[16px] items-center px-[48px] py-[16px] relative size-full" data-name="Profile Details">
      <Information />
      <Statics />
    </div>
  );
}