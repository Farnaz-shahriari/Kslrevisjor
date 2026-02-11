import svgPaths from "./svg-zrv6a2wd69";

function Container() {
  return (
    <div className="bg-[#f5f5eb] h-[49px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#c4c8b7] border-b border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Manrope:Medium',sans-serif] font-medium leading-[21px] left-[24px] text-[#1a1c16] text-[14px] top-[14px]">Avvik</p>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p19bc7f80} id="Vector" stroke="var(--stroke-0, #410002)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8 6V8.66667" id="Vector_2" stroke="var(--stroke-0, #410002)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8 11.3333H8.00667" id="Vector_3" stroke="var(--stroke-0, #410002)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text() {
  return (
    <div className="flex-[1_0_0] h-[21px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Manrope:Medium',sans-serif] font-medium leading-[21px] left-0 text-[#410002] text-[14px] top-0">Kritisk</p>
      </div>
    </div>
  );
}

function SeverityBadge() {
  return (
    <div className="bg-[#ffdad6] content-stretch flex gap-[8px] h-[33px] items-center px-[12px] relative rounded-[12px] shrink-0 w-[89.094px]" data-name="SeverityBadge2">
      <Icon />
      <Text />
    </div>
  );
}

function Container4() {
  return <div className="bg-[#ba1a1a] rounded-[33554400px] shrink-0 size-[8px]" data-name="Container" />;
}

function Container5() {
  return (
    <div className="flex-[1_0_0] h-[21px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Manrope:Medium',sans-serif] font-medium leading-[21px] left-0 text-[#1a1c16] text-[14px] top-0">Dokument levert</p>
      </div>
    </div>
  );
}

function StatusBadge() {
  return (
    <div className="content-stretch flex gap-[8px] h-[21px] items-center relative shrink-0 w-[124.438px]" data-name="StatusBadge">
      <Container4 />
      <Container5 />
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[16px] relative shrink-0 w-[153.469px]" data-name="Text">
      <p className="absolute font-['Manrope:Medium',sans-serif] font-medium leading-[16px] left-0 text-[#44483b] text-[12px] top-[-1px] w-[154px] whitespace-pre-wrap">Frist: Tirsdag 25. mars 2025</p>
    </div>
  );
}

function Container3() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] h-full items-center relative">
        <SeverityBadge />
        <StatusBadge />
        <Text1 />
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[21px] relative shrink-0 w-[640px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Manrope:Medium',sans-serif] font-medium leading-[20px] left-0 text-[#1a1c16] text-[14px] top-0 tracking-[0.1px]">Avvik lukket</p>
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[21px] relative shrink-0 w-[640px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Manrope:Regular',sans-serif] font-normal leading-[21px] left-0 text-[#1a1c16] text-[14px] top-0">1.2.1 – Har du en gyldig gjødslingsplan og skiftekart for året?</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[91px] items-start relative shrink-0 w-full" data-name="Container">
      <Container3 />
      <Text2 />
      <Text3 />
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[124px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#c4c8b7] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start pb-px pt-[16px] px-[24px] relative size-full">
        <Container2 />
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p19bc7f80} id="Vector" stroke="var(--stroke-0, #4A2800)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8 6V8.66667" id="Vector_2" stroke="var(--stroke-0, #4A2800)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8 11.3333H8.00667" id="Vector_3" stroke="var(--stroke-0, #4A2800)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text4() {
  return (
    <div className="flex-[1_0_0] h-[21px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Manrope:Medium',sans-serif] font-medium leading-[21px] left-0 text-[#4a2800] text-[14px] top-0">Avvik</p>
      </div>
    </div>
  );
}

function SeverityBadge1() {
  return (
    <div className="absolute bg-[#fdc] content-stretch flex gap-[8px] h-[33px] items-center left-0 px-[12px] rounded-[12px] top-0 w-[81.766px]" data-name="SeverityBadge2">
      <Icon1 />
      <Text4 />
    </div>
  );
}

function Container9() {
  return <div className="bg-[#ba1a1a] rounded-[33554400px] shrink-0 size-[8px]" data-name="Container" />;
}

function Container10() {
  return (
    <div className="flex-[1_0_0] h-[21px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Manrope:Medium',sans-serif] font-medium leading-[21px] left-0 text-[#1a1c16] text-[14px] top-0">Tidspunkt foreslått</p>
      </div>
    </div>
  );
}

function StatusBadge1() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[21px] items-center left-[85.77px] top-[6px] w-[140.781px]" data-name="StatusBadge">
      <Container9 />
      <Container10 />
    </div>
  );
}

function Text5() {
  return (
    <div className="absolute h-[16px] left-[230.55px] top-[8.5px] w-[140.188px]" data-name="Text">
      <p className="absolute font-['Manrope:Medium',sans-serif] font-medium leading-[16px] left-0 text-[#44483b] text-[12px] top-[-1px] w-[141px] whitespace-pre-wrap">Frist: Lørdag 5. april 2025</p>
    </div>
  );
}

function Container8() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[640px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <SeverityBadge1 />
        <StatusBadge1 />
        <Text5 />
      </div>
    </div>
  );
}

function Text6() {
  return (
    <div className="h-[21px] relative shrink-0 w-[640px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Manrope:SemiBold',sans-serif] font-semibold leading-[20px] left-0 text-[#ba1a1a] text-[14px] top-0 tracking-[0.1px]">Avvik åpent</p>
      </div>
    </div>
  );
}

function Text7() {
  return (
    <div className="h-[21px] relative shrink-0 w-[640px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Manrope:Regular',sans-serif] font-normal leading-[21px] left-0 text-[#1a1c16] text-[14px] top-0">1.3.6 – Har du nok lagringskapasitet (min. 8 måneder)?</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[91px] items-start relative shrink-0 w-full" data-name="Container">
      <Container8 />
      <Text6 />
      <Text7 />
    </div>
  );
}

function Container6() {
  return (
    <div className="h-[124px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#c4c8b7] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start pb-px pt-[16px] px-[24px] relative size-full">
        <Container7 />
      </div>
    </div>
  );
}

export default function Deviations() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-name="Deviations">
      <Container />
      <Container1 />
      <Container6 />
    </div>
  );
}