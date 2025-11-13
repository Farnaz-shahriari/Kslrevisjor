import svgPaths from "./svg-n755b67lok";

function StateLayer() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-center justify-center px-[24px] py-[16px] relative shrink-0" data-name="State-layer">
      <div className="relative shrink-0 size-[24px]" data-name="Icon">
        <div className="absolute inset-[12.5%]" data-name="icon">
          <div className="absolute inset-0" style={{ "--fill-0": "rgba(68, 72, 59, 1)" } as React.CSSProperties}>
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
              <path d={svgPaths.p16b4a380} fill="var(--fill-0, #44483B)" id="icon" />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#44483b] text-[16px] text-nowrap tracking-[0.15px]">
        <p className="leading-[24px] whitespace-pre">Søk i sjekklistespørsmål</p>
      </div>
    </div>
  );
}

function StateLayer1() {
  return (
    <div className="content-stretch flex h-[56px] items-center justify-center relative shrink-0 w-full" data-name="State-layer">
      <div className="relative shrink-0 size-[24px]" data-name="Icon">
        <div className="absolute inset-[20.833%]" data-name="icon">
          <div className="absolute inset-0" style={{ "--fill-0": "rgba(68, 72, 59, 1)" } as React.CSSProperties}>
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
              <path d={svgPaths.p2ccb20} fill="var(--fill-0, #44483B)" id="icon" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function QuestionListHeading() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Question list heading">
      <div className="content-stretch flex items-center relative self-stretch shrink-0 w-[296px]" data-name="Search Button">
        <div className="basis-0 grow min-h-px min-w-px relative rounded-[100px] shrink-0" data-name="Content">
          <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[inherit] w-full">
            <StateLayer />
          </div>
          <div aria-hidden="true" className="absolute border border-[#c4c8b7] border-solid inset-0 pointer-events-none rounded-[100px]" />
        </div>
      </div>
      <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Add question button">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[100px] shrink-0 w-[56px]" data-name="Content">
          <StateLayer1 />
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
            <div className="absolute inset-0" style={{ "--fill-0": "rgba(68, 72, 59, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 8">
                <path d={svgPaths.p180a8a80} fill="var(--fill-0, #44483B)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function StateLayer2() {
  return (
    <div className="basis-0 box-border content-stretch flex gap-[16px] grow items-center min-h-px min-w-px px-0 py-[8px] relative shrink-0 w-full" data-name="state-layer">
      <LeadingElement />
      <Content />
      <TrailingElement />
    </div>
  );
}

function Frame() {
  return (
    <div className="basis-0 grow h-[64px] min-h-px min-w-px relative shrink-0">
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] h-[64px] items-start justify-center px-[8px] py-0 relative w-full">
          <div className="content-stretch flex flex-col h-[72px] items-center justify-center min-h-[72px] relative shrink-0 w-full" data-name="List item/List Item: 0 Density">
            <div className="absolute inset-0" data-name="state-layer overlay" />
            <StateLayer2 />
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

function Content1() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <QuestionText />
    </div>
  );
}

function LeadingElement1() {
  return <div className="content-stretch flex items-center justify-center shrink-0" data-name="Leading element" />;
}

function QuestionText1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Question text">
      <div className="basis-0 flex flex-col font-['Manrope:Medium',sans-serif] font-medium grow justify-center leading-[20px] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#174295] text-[14px] text-nowrap tracking-[0.1px]">
        <p className="[white-space-collapse:collapse] mb-0 overflow-ellipsis overflow-hidden">1.1.1 Har du oversikt over alle driftsmidler du har kjøpt, og alle produkter du har solgt?</p>
        <p className="[white-space-collapse:collapse] overflow-ellipsis overflow-hidden">&nbsp;</p>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0">
      <div className="relative shrink-0 size-[24px]" data-name="snippet_folder">
        <div className="absolute inset-0 overflow-clip" data-name="snippet_folder">
          <div className="absolute inset-[16.67%_8.33%]" data-name="Vector">
            <div className="absolute inset-0" style={{ "--fill-0": "rgba(23, 66, 149, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 16">
                <path d={svgPaths.p1a10df00} fill="var(--fill-0, #174295)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Content2() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <QuestionText1 />
      <Frame1 />
    </div>
  );
}

function LeadingElement2() {
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

function Content3() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <QuestionText2 />
    </div>
  );
}

function LeadingElement3() {
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

function Frame2() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0">
      <div className="relative shrink-0 size-[24px]" data-name="snippet_folder">
        <div className="absolute inset-0 overflow-clip" data-name="snippet_folder">
          <div className="absolute inset-[16.67%_8.33%]" data-name="Vector">
            <div className="absolute inset-0" style={{ "--fill-0": "rgba(23, 66, 149, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 16">
                <path d={svgPaths.p1a10df00} fill="var(--fill-0, #174295)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Content4() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <QuestionText3 />
      <Frame2 />
    </div>
  );
}

function LeadingElement4() {
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

function Frame3() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0">
      <div className="relative shrink-0 size-[24px]" data-name="snippet_folder">
        <div className="absolute inset-0 overflow-clip" data-name="snippet_folder">
          <div className="absolute inset-[16.67%_8.33%]" data-name="Vector">
            <div className="absolute inset-0" style={{ "--fill-0": "rgba(23, 66, 149, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 16">
                <path d={svgPaths.p1a10df00} fill="var(--fill-0, #174295)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Content5() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <QuestionText4 />
      <Frame3 />
    </div>
  );
}

function Component11QuestionGorups() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] isolate items-start relative shrink-0 w-full z-[12]" data-name="1.1 question gorups">
      <div className="bg-[#dae2ff] relative rounded-[12px] shrink-0 w-full z-[4]" data-name="checklist Question">
        <div className="flex flex-row items-center size-full">
          <div className="box-border content-stretch flex gap-[16px] items-center px-[8px] py-[12px] relative w-full">
            <LeadingElement1 />
            <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Status icon">
              <div className="relative shrink-0 size-[24px]" data-name="pending">
                <div className="absolute inset-0 overflow-clip" data-name="pending">
                  <div className="absolute inset-[8.333%]" data-name="Vector">
                    <div className="absolute inset-0" style={{ "--fill-0": "rgba(68, 72, 59, 1)" } as React.CSSProperties}>
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
            </div>
            <Content2 />
          </div>
        </div>
      </div>
      <div className="bg-white relative rounded-[12px] shrink-0 w-full z-[3]" data-name="checklist Question">
        <div className="flex flex-row items-center size-full">
          <div className="box-border content-stretch flex gap-[16px] items-center px-[8px] py-[12px] relative w-full">
            <LeadingElement2 />
            <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Status icon">
              <div className="relative shrink-0 size-[24px]" data-name="pending">
                <div className="absolute inset-0 overflow-clip" data-name="pending">
                  <div className="absolute inset-[8.333%]" data-name="Vector">
                    <div className="absolute inset-0" style={{ "--fill-0": "rgba(68, 72, 59, 1)" } as React.CSSProperties}>
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
            </div>
            <Content3 />
          </div>
        </div>
      </div>
      <div className="bg-white relative rounded-[12px] shrink-0 w-full z-[2]" data-name="checklist Question">
        <div className="flex flex-row items-center size-full">
          <div className="box-border content-stretch flex gap-[16px] items-center px-[8px] py-[12px] relative w-full">
            <LeadingElement3 />
            <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Status icon">
              <div className="relative shrink-0 size-[24px]" data-name="pending">
                <div className="absolute inset-0 overflow-clip" data-name="pending">
                  <div className="absolute inset-[8.333%]" data-name="Vector">
                    <div className="absolute inset-0" style={{ "--fill-0": "rgba(68, 72, 59, 1)" } as React.CSSProperties}>
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
            </div>
            <Content4 />
          </div>
        </div>
      </div>
      <div className="bg-white relative rounded-[12px] shrink-0 w-full z-[1]" data-name="checklist Question">
        <div className="flex flex-row items-center size-full">
          <div className="box-border content-stretch flex gap-[16px] items-center px-[8px] py-[12px] relative w-full">
            <LeadingElement4 />
            <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Status icon">
              <div className="relative shrink-0 size-[24px]" data-name="pending">
                <div className="absolute inset-0 overflow-clip" data-name="pending">
                  <div className="absolute inset-[8.333%]" data-name="Vector">
                    <div className="absolute inset-0" style={{ "--fill-0": "rgba(68, 72, 59, 1)" } as React.CSSProperties}>
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
            </div>
            <Content5 />
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

function Content6() {
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

function Content7() {
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

function Content8() {
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

function Content9() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <QuestionText8 />
    </div>
  );
}

function LeadingElement5() {
  return <div className="content-stretch flex items-center justify-center shrink-0" data-name="Leading element" />;
}

function QuestionText9() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Question text">
      <div className="basis-0 flex flex-col font-['Manrope:Medium',sans-serif] font-medium grow justify-center leading-[20px] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#44483b] text-[14px] text-nowrap tracking-[0.1px]">
        <p className="[white-space-collapse:collapse] mb-0 overflow-ellipsis overflow-hidden">1.5.1 Kan du dokumentere at plantevernmidler kun er brukt av personell med gyldig autorisasjon?</p>
        <p className="[white-space-collapse:collapse] mb-0 overflow-ellipsis overflow-hidden">&nbsp;</p>
        <p className="[white-space-collapse:collapse] overflow-ellipsis overflow-hidden">&nbsp;</p>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0">
      <div className="relative shrink-0 size-[24px]" data-name="snippet_folder">
        <div className="absolute inset-0 overflow-clip" data-name="snippet_folder">
          <div className="absolute inset-[16.67%_8.33%]" data-name="Vector">
            <div className="absolute inset-0" style={{ "--fill-0": "rgba(23, 66, 149, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 16">
                <path d={svgPaths.p1a10df00} fill="var(--fill-0, #174295)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Content10() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <QuestionText9 />
      <Frame4 />
    </div>
  );
}

function LeadingElement6() {
  return <div className="content-stretch flex items-center justify-center shrink-0" data-name="Leading element" />;
}

function QuestionText10() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Question text">
      <div className="basis-0 flex flex-col font-['Manrope:Medium',sans-serif] font-medium grow justify-center leading-[20px] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#44483b] text-[14px] text-nowrap tracking-[0.1px]">
        <p className="[white-space-collapse:collapse] mb-0 overflow-ellipsis overflow-hidden">1.5.2 Er plantevernmidlene brukt i samsvar med godkjent etikett?</p>
        <p className="[white-space-collapse:collapse] overflow-ellipsis overflow-hidden">&nbsp;</p>
      </div>
    </div>
  );
}

function Content11() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <QuestionText10 />
    </div>
  );
}

function LeadingElement7() {
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

function Frame5() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0">
      <div className="relative shrink-0 size-[24px]" data-name="snippet_folder">
        <div className="absolute inset-0 overflow-clip" data-name="snippet_folder">
          <div className="absolute inset-[16.67%_8.33%]" data-name="Vector">
            <div className="absolute inset-0" style={{ "--fill-0": "rgba(23, 66, 149, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 16">
                <path d={svgPaths.p1a10df00} fill="var(--fill-0, #174295)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Content12() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <QuestionText11 />
      <Frame5 />
    </div>
  );
}

function LeadingElement8() {
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

function Content13() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <QuestionText12 />
    </div>
  );
}

function Component15QuestionGorups() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] isolate items-start relative shrink-0 w-full z-[7]" data-name="1.5 question gorups">
      <div className="bg-white relative rounded-[12px] shrink-0 w-full z-[8]" data-name="checklist Question">
        <div className="flex flex-row items-center size-full">
          <div className="box-border content-stretch flex gap-[16px] items-center px-[8px] py-[12px] relative w-full">
            <LeadingElement5 />
            <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Status icon">
              <div className="relative shrink-0 size-[24px]" data-name="pending">
                <div className="absolute inset-0 overflow-clip" data-name="pending">
                  <div className="absolute inset-[8.333%]" data-name="Vector">
                    <div className="absolute inset-0" style={{ "--fill-0": "rgba(68, 72, 59, 1)" } as React.CSSProperties}>
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
            </div>
            <Content10 />
          </div>
        </div>
      </div>
      <div className="bg-white relative rounded-[12px] shrink-0 w-full z-[7]" data-name="checklist Question">
        <div className="flex flex-row items-center size-full">
          <div className="box-border content-stretch flex gap-[16px] items-center px-[8px] py-[12px] relative w-full">
            <LeadingElement6 />
            <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Status icon">
              <div className="relative shrink-0 size-[24px]" data-name="pending">
                <div className="absolute inset-0 overflow-clip" data-name="pending">
                  <div className="absolute inset-[8.333%]" data-name="Vector">
                    <div className="absolute inset-0" style={{ "--fill-0": "rgba(68, 72, 59, 1)" } as React.CSSProperties}>
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
            </div>
            <Content11 />
          </div>
        </div>
      </div>
      <div className="bg-white relative rounded-[12px] shrink-0 w-full z-[5]" data-name="checklist Question">
        <div className="flex flex-row items-center size-full">
          <div className="box-border content-stretch flex gap-[16px] items-center px-[8px] py-[12px] relative w-full">
            <LeadingElement7 />
            <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Status icon">
              <div className="relative shrink-0 size-[24px]" data-name="pending">
                <div className="absolute inset-0 overflow-clip" data-name="pending">
                  <div className="absolute inset-[8.333%]" data-name="Vector">
                    <div className="absolute inset-0" style={{ "--fill-0": "rgba(68, 72, 59, 1)" } as React.CSSProperties}>
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
            </div>
            <Content12 />
          </div>
        </div>
      </div>
      <div className="bg-white relative rounded-[12px] shrink-0 w-full z-[4]" data-name="checklist Question">
        <div className="flex flex-row items-center size-full">
          <div className="box-border content-stretch flex gap-[16px] items-center px-[8px] py-[12px] relative w-full">
            <LeadingElement8 />
            <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Status icon">
              <div className="relative shrink-0 size-[24px]" data-name="pending">
                <div className="absolute inset-0 overflow-clip" data-name="pending">
                  <div className="absolute inset-[8.333%]" data-name="Vector">
                    <div className="absolute inset-0" style={{ "--fill-0": "rgba(68, 72, 59, 1)" } as React.CSSProperties}>
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
            </div>
            <Content13 />
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

function Content14() {
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

function Content15() {
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

function Content16() {
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

function Content17() {
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

function Content18() {
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

function Content19() {
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
                    <div className="absolute inset-0" style={{ "--fill-0": "rgba(68, 72, 59, 1)" } as React.CSSProperties}>
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
            </div>
            <Content1 />
            <div className="content-stretch cursor-pointer flex gap-[10px] items-center relative shrink-0" data-name="Expand Q" role="button" tabIndex="0">
              <div className="relative shrink-0 size-[24px]" data-name="arrow_drop_down">
                <div className="absolute inset-[41.67%_29.17%_37.5%_29.17%]" data-name="icon">
                  <div className="absolute inset-0" style={{ "--fill-0": "rgba(68, 72, 59, 1)" } as React.CSSProperties}>
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 5">
                      <path d="M5 5L0 0H10L5 5Z" fill="var(--fill-0, #44483B)" id="icon" />
                    </svg>
                  </div>
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
                    <div className="absolute inset-0" style={{ "--fill-0": "rgba(68, 72, 59, 1)" } as React.CSSProperties}>
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
            </div>
            <Content6 />
            <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="Expand Q">
              <div className="relative shrink-0 size-[24px]" data-name="arrow_drop_down">
                <div className="absolute inset-[41.67%_29.17%_37.5%_29.17%]" data-name="icon">
                  <div className="absolute inset-0" style={{ "--fill-0": "rgba(68, 72, 59, 1)" } as React.CSSProperties}>
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
      <div className="bg-white relative rounded-[12px] shrink-0 w-full z-10" data-name="checklist Question">
        <div className="flex flex-row items-center size-full">
          <div className="box-border content-stretch flex gap-[16px] items-center px-[8px] py-[12px] relative w-full">
            <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Status icon">
              <div className="relative shrink-0 size-[24px]" data-name="pending">
                <div className="absolute inset-0 overflow-clip" data-name="pending">
                  <div className="absolute inset-[8.333%]" data-name="Vector">
                    <div className="absolute inset-0" style={{ "--fill-0": "rgba(68, 72, 59, 1)" } as React.CSSProperties}>
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
            </div>
            <Content7 />
            <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="Expand Q">
              <div className="relative shrink-0 size-[24px]" data-name="arrow_drop_down">
                <div className="absolute inset-[41.67%_29.17%_37.5%_29.17%]" data-name="icon">
                  <div className="absolute inset-0" style={{ "--fill-0": "rgba(68, 72, 59, 1)" } as React.CSSProperties}>
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
      <div className="bg-white relative rounded-[12px] shrink-0 w-full z-[9]" data-name="checklist Question">
        <div className="flex flex-row items-center size-full">
          <div className="box-border content-stretch flex gap-[16px] items-center px-[8px] py-[12px] relative w-full">
            <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Status icon">
              <div className="relative shrink-0 size-[24px]" data-name="pending">
                <div className="absolute inset-0 overflow-clip" data-name="pending">
                  <div className="absolute inset-[8.333%]" data-name="Vector">
                    <div className="absolute inset-0" style={{ "--fill-0": "rgba(68, 72, 59, 1)" } as React.CSSProperties}>
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
            </div>
            <Content8 />
            <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="Expand Q">
              <div className="relative shrink-0 size-[24px]" data-name="arrow_drop_down">
                <div className="absolute inset-[41.67%_29.17%_37.5%_29.17%]" data-name="icon">
                  <div className="absolute inset-0" style={{ "--fill-0": "rgba(68, 72, 59, 1)" } as React.CSSProperties}>
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
      <button className="bg-white cursor-pointer relative rounded-[12px] shrink-0 w-full z-[8]" data-name="checklist Question">
        <div className="flex flex-row items-center size-full">
          <div className="box-border content-stretch flex gap-[16px] items-center px-[8px] py-[12px] relative w-full">
            <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Status icon">
              <div className="relative shrink-0 size-[24px]" data-name="pending">
                <div className="absolute inset-0 overflow-clip" data-name="pending">
                  <div className="absolute inset-[8.333%]" data-name="Vector">
                    <div className="absolute inset-0" style={{ "--fill-0": "rgba(68, 72, 59, 1)" } as React.CSSProperties}>
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
            </div>
            <Content9 />
            <div className="content-stretch cursor-pointer flex gap-[10px] items-center relative shrink-0" data-name="Expand Q" role="button" tabIndex="0">
              <div className="relative shrink-0 size-[24px]" data-name="arrow_drop_down">
                <div className="absolute inset-[41.67%_29.17%_37.5%_29.17%]" data-name="icon">
                  <div className="absolute inset-0" style={{ "--fill-0": "rgba(68, 72, 59, 1)" } as React.CSSProperties}>
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 5">
                      <path d="M5 5L0 0H10L5 5Z" fill="var(--fill-0, #44483B)" id="icon" />
                    </svg>
                  </div>
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
                    <div className="absolute inset-0" style={{ "--fill-0": "rgba(68, 72, 59, 1)" } as React.CSSProperties}>
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
            </div>
            <Content14 />
            <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="Expand Q">
              <div className="relative shrink-0 size-[24px]" data-name="arrow_drop_down">
                <div className="absolute inset-[41.67%_29.17%_37.5%_29.17%]" data-name="icon">
                  <div className="absolute inset-0" style={{ "--fill-0": "rgba(68, 72, 59, 1)" } as React.CSSProperties}>
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
      <div className="bg-white relative rounded-[12px] shrink-0 w-full z-[5]" data-name="checklist Question">
        <div className="flex flex-row items-center size-full">
          <div className="box-border content-stretch flex gap-[16px] items-center px-[8px] py-[12px] relative w-full">
            <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Status icon">
              <div className="relative shrink-0 size-[24px]" data-name="pending">
                <div className="absolute inset-0 overflow-clip" data-name="pending">
                  <div className="absolute inset-[8.333%]" data-name="Vector">
                    <div className="absolute inset-0" style={{ "--fill-0": "rgba(68, 72, 59, 1)" } as React.CSSProperties}>
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
            </div>
            <Content15 />
            <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="Expand Q">
              <div className="relative shrink-0 size-[24px]" data-name="arrow_drop_down">
                <div className="absolute inset-[41.67%_29.17%_37.5%_29.17%]" data-name="icon">
                  <div className="absolute inset-0" style={{ "--fill-0": "rgba(68, 72, 59, 1)" } as React.CSSProperties}>
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
      <div className="bg-white relative rounded-[12px] shrink-0 w-full z-[4]" data-name="checklist Question">
        <div className="flex flex-row items-center size-full">
          <div className="box-border content-stretch flex gap-[16px] items-center px-[8px] py-[12px] relative w-full">
            <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Status icon">
              <div className="relative shrink-0 size-[24px]" data-name="pending">
                <div className="absolute inset-0 overflow-clip" data-name="pending">
                  <div className="absolute inset-[8.333%]" data-name="Vector">
                    <div className="absolute inset-0" style={{ "--fill-0": "rgba(68, 72, 59, 1)" } as React.CSSProperties}>
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
            </div>
            <Content16 />
            <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="Expand Q">
              <div className="relative shrink-0 size-[24px]" data-name="arrow_drop_down">
                <div className="absolute inset-[41.67%_29.17%_37.5%_29.17%]" data-name="icon">
                  <div className="absolute inset-0" style={{ "--fill-0": "rgba(68, 72, 59, 1)" } as React.CSSProperties}>
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
      <div className="bg-white relative rounded-[12px] shrink-0 w-full z-[3]" data-name="checklist Question">
        <div className="flex flex-row items-center size-full">
          <div className="box-border content-stretch flex gap-[16px] items-center px-[8px] py-[12px] relative w-full">
            <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Status icon">
              <div className="relative shrink-0 size-[24px]" data-name="pending">
                <div className="absolute inset-0 overflow-clip" data-name="pending">
                  <div className="absolute inset-[8.333%]" data-name="Vector">
                    <div className="absolute inset-0" style={{ "--fill-0": "rgba(68, 72, 59, 1)" } as React.CSSProperties}>
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
            </div>
            <Content17 />
            <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="Expand Q">
              <div className="relative shrink-0 size-[24px]" data-name="arrow_drop_down">
                <div className="absolute inset-[41.67%_29.17%_37.5%_29.17%]" data-name="icon">
                  <div className="absolute inset-0" style={{ "--fill-0": "rgba(68, 72, 59, 1)" } as React.CSSProperties}>
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
      <div className="bg-white relative rounded-[12px] shrink-0 w-full z-[2]" data-name="checklist Question">
        <div className="flex flex-row items-center size-full">
          <div className="box-border content-stretch flex gap-[16px] items-center px-[8px] py-[12px] relative w-full">
            <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Status icon">
              <div className="relative shrink-0 size-[24px]" data-name="pending">
                <div className="absolute inset-0 overflow-clip" data-name="pending">
                  <div className="absolute inset-[8.333%]" data-name="Vector">
                    <div className="absolute inset-0" style={{ "--fill-0": "rgba(68, 72, 59, 1)" } as React.CSSProperties}>
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
            </div>
            <Content18 />
            <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="Expand Q">
              <div className="relative shrink-0 size-[24px]" data-name="arrow_drop_down">
                <div className="absolute inset-[41.67%_29.17%_37.5%_29.17%]" data-name="icon">
                  <div className="absolute inset-0" style={{ "--fill-0": "rgba(68, 72, 59, 1)" } as React.CSSProperties}>
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
      <div className="bg-white relative rounded-[12px] shrink-0 w-full z-[1]" data-name="checklist Question">
        <div className="flex flex-row items-center size-full">
          <div className="box-border content-stretch flex gap-[16px] items-center px-[8px] py-[12px] relative w-full">
            <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Status icon">
              <div className="relative shrink-0 size-[24px]" data-name="pending">
                <div className="absolute inset-0 overflow-clip" data-name="pending">
                  <div className="absolute inset-[8.333%]" data-name="Vector">
                    <div className="absolute inset-0" style={{ "--fill-0": "rgba(68, 72, 59, 1)" } as React.CSSProperties}>
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
            </div>
            <Content19 />
            <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="Expand Q">
              <div className="relative shrink-0 size-[24px]" data-name="arrow_drop_down">
                <div className="absolute inset-[41.67%_29.17%_37.5%_29.17%]" data-name="icon">
                  <div className="absolute inset-0" style={{ "--fill-0": "rgba(68, 72, 59, 1)" } as React.CSSProperties}>
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
    </div>
  );
}

function ChecklistQuestions() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[8px] isolate items-start pb-[16px] pt-0 px-0 relative shrink-0 w-full" data-name="Checklist questions">
      <div className="bg-white box-border content-stretch flex gap-[16px] items-center min-h-[64px] px-0 py-[8px] relative rounded-[12px] shrink-0 w-full z-[2]" data-name="checklist Question">
        <Frame />
      </div>
      <GroupQuestions />
    </div>
  );
}

function LeadingElement9() {
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

function Content20() {
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
            <div className="absolute inset-0" style={{ "--fill-0": "rgba(68, 72, 59, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 8">
                <path d={svgPaths.p180a8a80} fill="var(--fill-0, #44483B)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function StateLayer3() {
  return (
    <div className="basis-0 box-border content-stretch flex gap-[16px] grow items-center min-h-px min-w-px px-0 py-[8px] relative shrink-0 w-full" data-name="state-layer">
      <LeadingElement9 />
      <Content20 />
      <TrailingElement1 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="basis-0 grow h-[64px] min-h-px min-w-px relative shrink-0">
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] h-[64px] items-start justify-center px-[8px] py-0 relative w-full">
          <div className="content-stretch flex flex-col h-[72px] items-center justify-center min-h-[72px] relative shrink-0 w-full" data-name="List item/List Item: 0 Density">
            <div className="absolute inset-0" data-name="state-layer overlay" />
            <StateLayer3 />
          </div>
        </div>
      </div>
    </div>
  );
}

function LeadingElement10() {
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

function TrailingElement2() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="Trailing element">
      <div className="relative shrink-0 size-[24px]" data-name="expand_more">
        <div className="absolute inset-0 overflow-clip" data-name="expand_more">
          <div className="absolute bottom-[34.56%] left-1/4 right-1/4 top-[34.56%]" data-name="Vector">
            <div className="absolute inset-0" style={{ "--fill-0": "rgba(68, 72, 59, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 8">
                <path d={svgPaths.p180a8a80} fill="var(--fill-0, #44483B)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function StateLayer4() {
  return (
    <div className="basis-0 box-border content-stretch flex gap-[16px] grow items-center min-h-px min-w-px px-0 py-[8px] relative shrink-0 w-full" data-name="state-layer">
      <LeadingElement10 />
      <Content21 />
      <TrailingElement2 />
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
            <StateLayer4 />
          </div>
        </div>
      </div>
    </div>
  );
}

function LeadingElement11() {
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

function TrailingElement3() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="Trailing element">
      <div className="relative shrink-0 size-[24px]" data-name="expand_more">
        <div className="absolute inset-0 overflow-clip" data-name="expand_more">
          <div className="absolute bottom-[34.56%] left-1/4 right-1/4 top-[34.56%]" data-name="Vector">
            <div className="absolute inset-0" style={{ "--fill-0": "rgba(68, 72, 59, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 8">
                <path d={svgPaths.p180a8a80} fill="var(--fill-0, #44483B)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function StateLayer5() {
  return (
    <div className="basis-0 box-border content-stretch flex gap-[16px] grow items-center min-h-px min-w-px px-0 py-[8px] relative shrink-0 w-full" data-name="state-layer">
      <LeadingElement11 />
      <Content22 />
      <TrailingElement3 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="basis-0 grow h-[64px] min-h-px min-w-px relative shrink-0">
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] h-[64px] items-start justify-center px-[8px] py-0 relative w-full">
          <div className="content-stretch flex flex-col h-[72px] items-center justify-center min-h-[72px] relative shrink-0 w-full" data-name="List item/List Item: 0 Density">
            <div className="absolute inset-0" data-name="state-layer overlay" />
            <StateLayer5 />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function QuestionNavigation() {
  return (
    <div className="relative size-full" data-name="Question Navigation">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] items-start p-[16px] relative size-full">
          <QuestionListHeading />
          <ChecklistQuestions />
          <div className="bg-white box-border content-stretch flex gap-[16px] items-center min-h-[64px] px-0 py-[8px] relative rounded-[12px] shrink-0 w-full" data-name="checklist Question">
            <Frame6 />
          </div>
          <div className="bg-white box-border content-stretch flex gap-[16px] items-center min-h-[64px] px-0 py-[8px] relative rounded-[12px] shrink-0 w-full" data-name="checklist Question">
            <Frame7 />
          </div>
          <div className="bg-white box-border content-stretch flex gap-[16px] items-center min-h-[64px] px-0 py-[8px] relative rounded-[12px] shrink-0 w-full" data-name="checklist Question">
            <Frame8 />
          </div>
        </div>
      </div>
    </div>
  );
}