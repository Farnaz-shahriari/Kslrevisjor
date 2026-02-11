import svgPaths from "./svg-ayg77sirq8";

function Paragraph() {
  return (
    <div className="absolute h-[21px] left-[34px] top-[5.5px] w-[80.391px]" data-name="Paragraph">
      <p className="absolute font-['Manrope:Medium',sans-serif] font-medium leading-[21px] left-0 text-[#174295] text-[14px] top-0">Rapport låst</p>
    </div>
  );
}

function Icon() {
  return (
    <div className="h-[18px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[8.33%_16.67%_12.5%_16.67%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 14.25">
          <path d={svgPaths.p2b101580} fill="var(--fill-0, #174295)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[8px] size-[18px] top-[7px]" data-name="Container">
      <Icon />
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute h-[32px] left-0 top-0 w-[130.391px]" data-name="Container">
      <Paragraph />
      <Container3 />
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute bg-[#dae2ff] h-[32px] left-0 overflow-clip rounded-[8px] top-0 w-[130.391px]" data-name="Container">
      <Container2 />
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="absolute h-[21px] left-[34px] top-[5.5px] w-[72.531px]" data-name="Paragraph">
      <p className="absolute font-['Manrope:Medium',sans-serif] font-medium leading-[21px] left-0 text-[#2e7d32] text-[14px] top-0">Redigerbar</p>
    </div>
  );
}

function Icon1() {
  return (
    <div className="h-[18px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[12.49%_12.49%_12.5%_12.5%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.5019 13.5019">
          <path d={svgPaths.p2457a400} fill="var(--fill-0, #2E7D32)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[8px] size-[18px] top-[7px]" data-name="Container">
      <Icon1 />
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute h-[32px] left-0 top-0 w-[122.531px]" data-name="Container">
      <Paragraph1 />
      <Container6 />
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute bg-[#e8f5e9] h-[32px] left-[140.39px] overflow-clip rounded-[8px] top-0 w-[122.531px]" data-name="Container">
      <Container5 />
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[21px] relative shrink-0 w-[79.516px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Manrope:Medium',sans-serif] font-medium leading-[21px] left-0 text-[#805500] text-[14px] top-0 w-[80px] whitespace-pre-wrap">1 åpne avvik</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute content-stretch flex h-[32px] items-center justify-center left-0 pr-[8px] top-0 w-[103.516px]" data-name="Container">
      <Paragraph2 />
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute bg-[#fff4e6] h-[32px] left-[272.92px] overflow-clip rounded-[8px] top-0 w-[103.516px]" data-name="Container">
      <Container8 />
    </div>
  );
}

function Container() {
  return (
    <div className="h-[32px] relative shrink-0 w-[796px]" data-name="Container">
      <Container1 />
      <Container4 />
      <Container7 />
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[19.188px] relative shrink-0 w-[193.016px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Quatro:Regular',sans-serif] leading-[19.2px] left-0 not-italic text-[#1a1c16] text-[16px] top-0 w-[194px] whitespace-pre-wrap">30. January 2026, kl. 10:00</p>
      </div>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="h-[21px] relative shrink-0 w-[24.219px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Manrope:Medium',sans-serif] font-medium leading-[21px] left-0 text-[14px] text-white top-0">KSL</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="absolute content-stretch flex h-[32px] items-center justify-center left-0 top-0 w-[56.219px]" data-name="Container">
      <Paragraph4 />
    </div>
  );
}

function Container14() {
  return (
    <div className="h-[32px] overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="Container">
      <Container15 />
    </div>
  );
}

function Container13() {
  return (
    <div className="absolute bg-[#4a671e] content-stretch flex flex-col h-[32px] items-start left-0 rounded-[8px] top-0 w-[56.219px]" data-name="Container">
      <Container14 />
    </div>
  );
}

function Text() {
  return (
    <div className="h-[21px] relative shrink-0 w-[48.828px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Manrope:Medium',sans-serif] font-medium leading-[21px] left-0 text-[#1a1c16] text-[14px] top-0">Revisor</p>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="absolute content-stretch flex h-[32px] items-center justify-center left-0 top-0 w-[80.828px]" data-name="Container">
      <Text />
    </div>
  );
}

function Container17() {
  return (
    <div className="absolute h-[32px] left-0 overflow-clip rounded-[8px] top-0 w-[80.828px]" data-name="Container">
      <Container18 />
    </div>
  );
}

function Container19() {
  return <div className="absolute border border-[#c4c8b7] border-solid h-[32px] left-0 rounded-[8px] top-0 w-[80.828px]" data-name="Container" />;
}

function Container16() {
  return (
    <div className="absolute h-[32px] left-[64.22px] rounded-[8px] top-0 w-[80.828px]" data-name="Container">
      <Container17 />
      <Container19 />
    </div>
  );
}

function Container12() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[145.047px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container13 />
        <Container16 />
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[75.188px] items-start left-0 py-[8px] top-0 w-[193.016px]" data-name="Container">
      <Paragraph3 />
      <Container12 />
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="h-[16px] relative shrink-0 w-[97.141px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Manrope:Medium',sans-serif] font-medium leading-[16px] left-0 text-[#44483b] text-[12px] top-[-1px]">Rapport låst dato</p>
      </div>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="h-[24px] relative shrink-0 w-[128.391px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Manrope:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#1a1c16] text-[16px] top-0">13. February 2026</p>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="absolute content-stretch flex flex-col h-[56px] items-start justify-center left-0 overflow-clip top-0 w-[280px]" data-name="Container">
      <Paragraph5 />
      <Paragraph6 />
    </div>
  );
}

function Container21() {
  return (
    <div className="absolute h-[56px] left-0 top-0 w-[280px]" data-name="Container">
      <Container22 />
    </div>
  );
}

function Container20() {
  return (
    <div className="absolute h-[56px] left-0 top-[75.19px] w-[280px]" data-name="Container">
      <Container21 />
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="h-[16px] relative shrink-0 w-[63.406px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Manrope:Medium',sans-serif] font-medium leading-[16px] left-0 text-[#44483b] text-[12px] top-[-1px]">Produksjon</p>
      </div>
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Manrope:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#1a1c16] text-[16px] top-0">Melkeproduksjon</p>
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Manrope:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#1a1c16] text-[16px] top-0">Grovfôr</p>
    </div>
  );
}

function Container26() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[126.125px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph8 />
        <Paragraph9 />
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="absolute content-stretch flex flex-col h-[64px] items-start left-0 overflow-clip top-[4px] w-[280px]" data-name="Container">
      <Paragraph7 />
      <Container26 />
    </div>
  );
}

function Container24() {
  return (
    <div className="absolute h-[72px] left-0 top-0 w-[280px]" data-name="Container">
      <Container25 />
    </div>
  );
}

function Container23() {
  return (
    <div className="absolute h-[72px] left-0 top-[131.19px] w-[280px]" data-name="Container">
      <Container24 />
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute h-[203.188px] left-0 top-0 w-[280px]" data-name="Container">
      <Container11 />
      <Container20 />
      <Container23 />
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="h-[19.188px] relative shrink-0 w-[98.703px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Quatro:Regular',sans-serif] leading-[19.2px] not-italic relative shrink-0 text-[#1a1c16] text-[16px]">Haugen Gård</p>
      </div>
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Manrope:Medium',sans-serif] font-medium leading-[21px] left-0 text-[#1a1c16] text-[14px] top-0">Markveien 67</p>
    </div>
  );
}

function Paragraph12() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Manrope:Medium',sans-serif] font-medium leading-[21px] left-0 text-[#1a1c16] text-[14px] top-0">7000 Trondheim</p>
    </div>
  );
}

function Container29() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[106.594px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph11 />
        <Paragraph12 />
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[81.188px] items-start left-0 py-[8px] top-0 w-[280px]" data-name="Container">
      <Paragraph10 />
      <Container29 />
    </div>
  );
}

function Paragraph13() {
  return (
    <div className="h-[16px] relative shrink-0 w-[56.359px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Manrope:Medium',sans-serif] font-medium leading-[16px] left-0 text-[#44483b] text-[12px] top-[-1px]">Kommune</p>
      </div>
    </div>
  );
}

function Paragraph14() {
  return (
    <div className="h-[24px] relative shrink-0 w-[78.922px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Manrope:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#1a1c16] text-[16px] top-0">Trondheim</p>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="absolute content-stretch flex flex-col h-[56px] items-start justify-center left-0 overflow-clip top-0 w-[280px]" data-name="Container">
      <Paragraph13 />
      <Paragraph14 />
    </div>
  );
}

function Container31() {
  return (
    <div className="absolute h-[56px] left-0 top-0 w-[280px]" data-name="Container">
      <Container32 />
    </div>
  );
}

function Container30() {
  return (
    <div className="absolute h-[56px] left-0 top-[81.19px] w-[280px]" data-name="Container">
      <Container31 />
    </div>
  );
}

function Container27() {
  return (
    <div className="absolute h-[233.188px] left-[296px] top-0 w-[280px]" data-name="Container">
      <Container28 />
      <Container30 />
    </div>
  );
}

function Paragraph15() {
  return (
    <div className="absolute h-[24px] left-[56px] top-[16px] w-[99.5px]" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Manrope:Regular',sans-serif] font-normal leading-[24px] left-[50px] text-[#4a671e] text-[16px] text-center top-0">Åpne revisjon</p>
    </div>
  );
}

function Icon2() {
  return (
    <div className="h-[24px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-1/4 left-[33.33%] right-[35.83%] top-1/4" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.4 12">
          <path d={svgPaths.p33166380} fill="var(--fill-0, #4A671E)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[24px] size-[24px] top-[16px]" data-name="Container">
      <Icon2 />
    </div>
  );
}

function Container34() {
  return (
    <div className="absolute h-[56px] left-[12.25px] top-0 w-[179.5px]" data-name="Container">
      <Paragraph15 />
      <Container35 />
    </div>
  );
}

function Button() {
  return (
    <div className="absolute h-[56px] left-0 overflow-clip rounded-[100px] top-0 w-[204px]" data-name="Button">
      <Container34 />
    </div>
  );
}

function Paragraph16() {
  return (
    <div className="absolute h-[24px] left-[56px] top-[16px] w-[139.781px]" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Manrope:Regular',sans-serif] font-normal leading-[24px] left-[70px] text-[#4a671e] text-[16px] text-center top-0">Last ned rapporten</p>
    </div>
  );
}

function Icon3() {
  return (
    <div className="h-[24px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[16.67%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <path d={svgPaths.p3821bc00} fill="var(--fill-0, #4A671E)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[24px] size-[24px] top-[16px]" data-name="Container">
      <Icon3 />
    </div>
  );
}

function Container36() {
  return (
    <div className="absolute h-[56px] left-[-7.89px] top-0 w-[219.781px]" data-name="Container">
      <Paragraph16 />
      <Container37 />
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute h-[56px] left-0 overflow-clip rounded-[100px] top-[66px] w-[204px]" data-name="Button">
      <Container36 />
    </div>
  );
}

function Container33() {
  return (
    <div className="absolute h-[122px] left-[592px] top-0 w-[204px]" data-name="Container">
      <Button />
      <Button1 />
    </div>
  );
}

function Container9() {
  return (
    <div className="h-[203px] relative shrink-0 w-[796px]" data-name="Container">
      <Container10 />
      <Container27 />
      <Container33 />
    </div>
  );
}

function Paragraph17() {
  return (
    <div className="h-[16px] relative shrink-0 w-[63.406px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Manrope:Medium',sans-serif] font-medium leading-[16px] left-0 text-[#44483b] text-[12px] top-[-1px]">Kort rapport</p>
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#1a1c16] text-[16px] w-full whitespace-pre-wrap">here comes a random text for the kort report like how many deviations has been found and how it is planned to do and stuff</p>
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <Paragraph17 />
      <Container41 />
    </div>
  );
}

function Container39() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Container40 />
    </div>
  );
}

function Container38() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Container39 />
    </div>
  );
}

function Container42() {
  return (
    <div className="bg-[#f5f5eb] h-[49px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#c4c8b7] border-b border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Manrope:Medium',sans-serif] font-medium leading-[21px] left-[24px] text-[#1a1c16] text-[14px] top-[14px]">Avvik</p>
    </div>
  );
}

function Icon4() {
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

function Text1() {
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
      <Icon4 />
      <Text1 />
    </div>
  );
}

function Container46() {
  return <div className="bg-[#ba1a1a] rounded-[33554400px] shrink-0 size-[8px]" data-name="Container" />;
}

function Container47() {
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
      <Container46 />
      <Container47 />
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[16px] relative shrink-0 w-[153.469px]" data-name="Text">
      <p className="absolute font-['Manrope:Medium',sans-serif] font-medium leading-[16px] left-0 text-[#44483b] text-[12px] top-[-1px] w-[154px] whitespace-pre-wrap">Frist: Tirsdag 25. mars 2025</p>
    </div>
  );
}

function Container45() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] h-full items-center relative">
        <SeverityBadge />
        <StatusBadge />
        <Text2 />
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[21px] relative shrink-0 w-[640px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Manrope:Medium',sans-serif] font-medium leading-[20px] left-0 text-[#1a1c16] text-[14px] top-0 tracking-[0.1px]">Avvik lukket</p>
      </div>
    </div>
  );
}

function Text4() {
  return (
    <div className="h-[21px] relative shrink-0 w-[640px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Manrope:Regular',sans-serif] font-normal leading-[21px] left-0 text-[#1a1c16] text-[14px] top-0">1.2.1 – Har du en gyldig gjødslingsplan og skiftekart for året?</p>
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[91px] items-start relative shrink-0 w-full" data-name="Container">
      <Container45 />
      <Text3 />
      <Text4 />
    </div>
  );
}

function Container43() {
  return (
    <div className="h-[124px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#c4c8b7] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start pb-px pt-[16px] px-[24px] relative size-full">
        <Container44 />
      </div>
    </div>
  );
}

function Icon5() {
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

function Text5() {
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
      <Icon5 />
      <Text5 />
    </div>
  );
}

function Container51() {
  return <div className="bg-[#ba1a1a] rounded-[33554400px] shrink-0 size-[8px]" data-name="Container" />;
}

function Container52() {
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
      <Container51 />
      <Container52 />
    </div>
  );
}

function Text6() {
  return (
    <div className="absolute h-[16px] left-[230.55px] top-[8.5px] w-[140.188px]" data-name="Text">
      <p className="absolute font-['Manrope:Medium',sans-serif] font-medium leading-[16px] left-0 text-[#44483b] text-[12px] top-[-1px] w-[141px] whitespace-pre-wrap">Frist: Lørdag 5. april 2025</p>
    </div>
  );
}

function Container50() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[640px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <SeverityBadge1 />
        <StatusBadge1 />
        <Text6 />
      </div>
    </div>
  );
}

function Text7() {
  return (
    <div className="h-[21px] relative shrink-0 w-[640px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Manrope:SemiBold',sans-serif] font-semibold leading-[20px] left-0 text-[#ba1a1a] text-[14px] top-0 tracking-[0.1px]">Avvik åpent</p>
      </div>
    </div>
  );
}

function Text8() {
  return (
    <div className="h-[21px] relative shrink-0 w-[640px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Manrope:Regular',sans-serif] font-normal leading-[21px] left-0 text-[#1a1c16] text-[14px] top-0">1.3.6 – Har du nok lagringskapasitet (min. 8 måneder)?</p>
      </div>
    </div>
  );
}

function Container49() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[91px] items-start relative shrink-0 w-full" data-name="Container">
      <Container50 />
      <Text7 />
      <Text8 />
    </div>
  );
}

function Container48() {
  return (
    <div className="h-[124px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#c4c8b7] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start pb-px pt-[16px] px-[24px] relative size-full">
        <Container49 />
      </div>
    </div>
  );
}

function Deviations() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Deviations">
      <Container42 />
      <Container43 />
      <Container48 />
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d="M18 15L12 9L6 15" id="Vector" stroke="var(--stroke-0, #1A1C16)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Paragraph18() {
  return (
    <div className="h-[24px] relative shrink-0 w-[75.875px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Manrope:Regular',sans-serif] font-normal leading-[24px] left-[38px] text-[#1a1c16] text-[16px] text-center top-0">Vis mindre</p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="content-stretch flex gap-[16px] h-[56px] items-center pl-[40px] relative rounded-[4px] shrink-0 w-[796px]" data-name="Button">
      <Icon6 />
      <Paragraph18 />
    </div>
  );
}

export default function RevisjonCard() {
  return (
    <div className="bg-[#fafaf0] content-stretch flex flex-col gap-[16px] items-start px-[24px] py-[8px] relative rounded-[12px] size-full" data-name="RevisjonCard">
      <Container />
      <Container9 />
      <Container38 />
      <Deviations />
      <Button2 />
    </div>
  );
}