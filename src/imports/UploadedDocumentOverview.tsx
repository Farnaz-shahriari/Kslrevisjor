import svgPaths from "./svg-jn8ghpuyc1";
import img from "figma:asset/bccf40ef0d51ade359900027c9bd416d09e9658d.png";

function StateLayer() {
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

function StateLayer1() {
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

function StateLayer2() {
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
          <StateLayer1 />
        </div>
      </div>
      <div className="content-stretch flex items-center justify-center relative shrink-0 size-[48px]" data-name="Trailing action 1">
        <div className="content-stretch cursor-pointer flex flex-col items-center justify-center overflow-clip relative rounded-[100px] shrink-0 w-[40px]" data-name="Content">
          <StateLayer2 />
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

function StateLayer3() {
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

function StateLayer4() {
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

function Indicator() {
  return (
    <div className="absolute bottom-0 h-[14px] left-0 right-0" data-name="Indicator">
      <div className="absolute bg-[#4a671e] bottom-0 h-[3px] left-[2px] right-[2px] rounded-tl-[100px] rounded-tr-[100px]" data-name="Shape" />
    </div>
  );
}

function TabContents2() {
  return (
    <div className="basis-0 box-border content-stretch flex gap-[4px] grow items-center justify-center min-h-px min-w-px overflow-clip px-0 py-[14px] relative shrink-0" data-name="Tab Contents">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#4a671e] text-[14px] text-center text-nowrap tracking-[0.1px]">
        <p className="leading-[20px] whitespace-pre">Dokumentoversikt</p>
      </div>
      <Indicator />
    </div>
  );
}

function StateLayer5() {
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

function StateLayer6() {
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

function StateLayer7() {
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
            <StateLayer3 />
          </div>
          <div className="bg-white content-stretch flex flex-col h-[48px] items-center justify-end overflow-clip relative shrink-0" data-name="Tab 2">
            <StateLayer4 />
          </div>
          <div className="bg-white content-stretch flex flex-col h-[48px] items-center justify-end overflow-clip relative shrink-0" data-name="Tab 3">
            <StateLayer5 />
          </div>
          <div className="bg-white content-stretch flex flex-col h-[48px] items-center justify-end overflow-clip relative shrink-0" data-name="Tab 4">
            <StateLayer6 />
          </div>
          <div className="bg-white content-stretch flex flex-col h-[48px] items-center justify-end overflow-clip relative shrink-0" data-name="Tab 6">
            <StateLayer7 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#174295] text-[16px] tracking-[0.5px] w-full">
        <p className="leading-[24px]">{`Plantevernjournal 2025	`}</p>
      </div>
    </div>
  );
}

function StateLayer8() {
  return (
    <div className="bg-[#dae2ff] h-[56px] relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] h-[56px] items-center px-[12px] py-[8px] relative w-full">
          <Content />
        </div>
      </div>
    </div>
  );
}

function Content1() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] tracking-[0.5px] w-full">
        <p className="leading-[24px]">Plantevernjournal_2025.xlsx</p>
      </div>
    </div>
  );
}

function StateLayer9() {
  return (
    <div className="h-[56px] relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] h-[56px] items-center px-[12px] py-[8px] relative w-full">
          <Content1 />
        </div>
      </div>
    </div>
  );
}

function Content2() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] tracking-[0.5px] w-full">
        <p className="leading-[24px]">Bilde_feltkontroll_mai.jpg</p>
      </div>
    </div>
  );
}

function StateLayer10() {
  return (
    <div className="h-[56px] relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] h-[56px] items-center px-[12px] py-[8px] relative w-full">
          <Content2 />
        </div>
      </div>
    </div>
  );
}

function Content3() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] tracking-[0.5px] w-full">
        <p className="leading-[24px]">{`Tiltak for beskyttelse av vannmiljø	`}</p>
      </div>
    </div>
  );
}

function StateLayer11() {
  return (
    <div className="h-[56px] relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] h-[56px] items-center px-[12px] py-[8px] relative w-full">
          <Content3 />
        </div>
      </div>
    </div>
  );
}

function Content4() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] tracking-[0.5px] w-full">
        <p className="leading-[24px]">Ugresskontroll-Notater.pdf</p>
      </div>
    </div>
  );
}

function StateLayer12() {
  return (
    <div className="h-[56px] relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] h-[56px] items-center px-[12px] py-[8px] relative w-full">
          <Content4 />
        </div>
      </div>
    </div>
  );
}

function Content5() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] tracking-[0.5px] w-full">
        <p className="leading-[24px]">plantevernkurs_bevis_ola_hansen.pdf</p>
      </div>
    </div>
  );
}

function StateLayer13() {
  return (
    <div className="h-[56px] relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] h-[56px] items-center px-[12px] py-[8px] relative w-full">
          <Content5 />
        </div>
      </div>
    </div>
  );
}

function Content6() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] tracking-[0.5px] w-full">
        <p className="leading-[24px]">{`Integrert plantevern – sjekkliste	`}</p>
      </div>
    </div>
  );
}

function StateLayer14() {
  return (
    <div className="h-[56px] relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] h-[56px] items-center px-[12px] py-[8px] relative w-full">
          <Content6 />
        </div>
      </div>
    </div>
  );
}

function Content7() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] tracking-[0.5px] w-full">
        <p className="leading-[24px]">Bilder_sprøyting_mai2024.zip</p>
      </div>
    </div>
  );
}

function StateLayer15() {
  return (
    <div className="h-[56px] relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] h-[56px] items-center px-[12px] py-[8px] relative w-full">
          <Content7 />
        </div>
      </div>
    </div>
  );
}

function Content8() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] tracking-[0.5px] w-full">
        <p className="leading-[24px]">intern_rutine_plantevern.docx</p>
      </div>
    </div>
  );
}

function StateLayer16() {
  return (
    <div className="h-[56px] relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] h-[56px] items-center px-[12px] py-[8px] relative w-full">
          <Content8 />
        </div>
      </div>
    </div>
  );
}

function Content9() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] tracking-[0.5px] w-full">
        <p className="leading-[24px]">journal-gjødsel_2022.xlsx</p>
      </div>
    </div>
  );
}

function StateLayer17() {
  return (
    <div className="h-[56px] relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] h-[56px] items-center px-[12px] py-[8px] relative w-full">
          <Content9 />
        </div>
      </div>
    </div>
  );
}

function Content10() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] tracking-[0.5px] w-full">
        <p className="leading-[24px]">Sprøyteplan vår 2024</p>
      </div>
    </div>
  );
}

function StateLayer18() {
  return (
    <div className="h-[56px] relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] h-[56px] items-center px-[12px] py-[8px] relative w-full">
          <Content10 />
        </div>
      </div>
    </div>
  );
}

function Content11() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] tracking-[0.5px] w-full">
        <p className="leading-[24px]">Sproyteplan_var2024.xlsx</p>
      </div>
    </div>
  );
}

function StateLayer19() {
  return (
    <div className="h-[56px] relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] h-[56px] items-center px-[12px] py-[8px] relative w-full">
          <Content11 />
        </div>
      </div>
    </div>
  );
}

function UploadedDocumentsList() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[8px] h-full items-start p-[16px] relative shrink-0 w-[400px] z-[3]" data-name="uploaded documents list">
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Menu list item 1">
        <StateLayer8 />
      </div>
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Menu list item 2">
        <StateLayer9 />
      </div>
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Menu list item 3">
        <StateLayer10 />
      </div>
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Menu list item 4">
        <StateLayer11 />
      </div>
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Menu list item 5">
        <StateLayer12 />
      </div>
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Menu list item 6">
        <StateLayer13 />
      </div>
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Menu list item 7">
        <StateLayer14 />
      </div>
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Menu list item 8">
        <StateLayer15 />
      </div>
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Menu list item 9">
        <StateLayer16 />
      </div>
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Menu list item 10">
        <StateLayer17 />
      </div>
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Menu list item 11">
        <StateLayer18 />
      </div>
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Menu list item 12">
        <StateLayer19 />
      </div>
    </div>
  );
}

function Number() {
  return (
    <div className="basis-0 content-stretch flex gap-[16px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Number">
      <div className="box-border content-stretch flex gap-[4px] h-[48px] items-center overflow-clip pl-0 pr-[4px] py-0 relative rounded-[8px] shrink-0" data-name="trailing-icon 2">
        <div className="relative shrink-0 size-[18px]" data-name="Icon KSL Trygg">
          <div className="absolute inset-0 overflow-clip" data-name="snippet_folder">
            <div className="absolute inset-[16.67%_8.33%]" data-name="Vector">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 12">
                <path d={svgPaths.p33aa4080} fill="var(--fill-0, #44483B)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
        <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#44483b] text-[12px] text-center text-nowrap tracking-[0.5px]">
          <p className="leading-[16px] whitespace-pre">Dokument</p>
        </div>
      </div>
    </div>
  );
}

function StateLayer20() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center p-[8px] relative shrink-0" data-name="state-layer">
      <div className="relative shrink-0 size-[24px]" data-name="Icon">
        <div className="absolute inset-[16.67%_41.67%]" data-name="icon">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 16">
            <path d={svgPaths.p3f25c480} fill="var(--fill-0, #1A1C16)" id="icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center overflow-clip relative rounded-[100px] shrink-0" data-name="container">
      <StateLayer20 />
    </div>
  );
}

function InfoIconButtons() {
  return (
    <div className="content-stretch flex h-[48px] items-center justify-end relative shrink-0" data-name="Info icon buttons">
      <div className="content-stretch cursor-pointer flex flex-col gap-[10px] items-center justify-center relative shrink-0 size-[48px]" data-name="trailing-icon 2">
        <Container />
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
        <p className="leading-[28px]">{`Plantevernjournal 2025	`}</p>
      </div>
    </div>
  );
}

function StateLayer21() {
  return (
    <div className="box-border content-stretch flex gap-[8px] h-[32px] items-center justify-center pl-[8px] pr-[16px] py-[6px] relative shrink-0" data-name="state-layer">
      <div className="relative shrink-0 size-[18px]" data-name="Icon">
        <div className="absolute inset-0 overflow-clip" data-name="ios_share">
          <div className="absolute inset-[4.17%_16.67%]" data-name="Vector">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 17">
              <path d={svgPaths.p2d444900} fill="var(--fill-0, #4A671E)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[14px] text-center text-nowrap tracking-[0.1px]">
        <p className="leading-[20px] whitespace-pre">Del dokument</p>
      </div>
    </div>
  );
}

function Action() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Action">
      <div className="bg-[#f4f4ea] box-border content-stretch cursor-pointer flex items-center justify-center overflow-clip relative rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.3),0px_1px_3px_1px_rgba(0,0,0,0.15)] shrink-0" data-name="Assistive chip 2">
        <StateLayer21 />
      </div>
    </div>
  );
}

function AboutTheQuestionsChips() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="About the questions chips">
      <Action />
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

function LeadingElement() {
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

function Content12() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start justify-center leading-[0] min-h-px min-w-px overflow-clip relative shrink-0 tracking-[0.5px]" data-name="Content">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[#44483b] text-[12px] w-full">
        <p className="leading-[16px]">Om dokument</p>
      </div>
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#1a1c16] text-[16px] w-full">
        <p className="leading-[24px]">Instruks for hvordan man håndterer nyfødte lam for å sikre god dyrevelferd. Dette inkluderer tørking, merking og overvåkning av lammets helse de første timene.</p>
      </div>
    </div>
  );
}

function Frame15() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[16px] items-start p-[8px] relative w-full">
          <LeadingElement />
          <Content12 />
        </div>
      </div>
    </div>
  );
}

function LeadingElement1() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Leading element">
      <div className="relative shrink-0 size-[24px]" data-name="category">
        <div className="absolute inset-0 overflow-clip" data-name="category">
          <div className="absolute inset-[8.33%_10.42%]" data-name="Vector">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 20">
              <path d={svgPaths.pff4a100} fill="var(--fill-0, #44483B)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Content13() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start justify-center leading-[0] min-h-px min-w-px overflow-clip relative shrink-0 tracking-[0.5px]" data-name="Content">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[#44483b] text-[12px] w-full">
        <p className="leading-[16px]">Kategori</p>
      </div>
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#1a1c16] text-[16px] w-full">
        <p className="leading-[24px]">Dyrevelferd</p>
      </div>
    </div>
  );
}

function Frame16() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[16px] items-start p-[8px] relative w-full">
          <LeadingElement1 />
          <Content13 />
        </div>
      </div>
    </div>
  );
}

function LeadingElement2() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Leading element">
      <div className="relative shrink-0 size-[24px]" data-name="today">
        <div className="absolute inset-0 overflow-clip" data-name="today">
          <div className="absolute inset-[8.33%_12.5%]" data-name="Vector">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 20">
              <path d={svgPaths.p24b92280} fill="var(--fill-0, #44483B)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Content14() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start justify-center leading-[0] min-h-px min-w-px overflow-clip relative shrink-0 tracking-[0.5px]" data-name="Content">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[#44483b] text-[12px] w-full">
        <p className="leading-[16px]">Utløpsdato</p>
      </div>
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#1a1c16] text-[16px] w-full">
        <p className="leading-[24px]">6.6.2028</p>
      </div>
    </div>
  );
}

function Frame17() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[16px] items-start p-[8px] relative w-full">
          <LeadingElement2 />
          <Content14 />
        </div>
      </div>
    </div>
  );
}

function AboutTheDocuements() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="about the docuements">
      <Question />
      <button className="box-border content-stretch cursor-pointer flex flex-col gap-[8px] items-center justify-center min-h-[64px] overflow-visible pb-0 pt-[8px] px-0 relative shrink-0 w-full" data-name="App User Input">
        <Frame15 />
      </button>
      <button className="box-border content-stretch cursor-pointer flex flex-col gap-[8px] items-center justify-center min-h-[64px] overflow-visible pb-0 pt-[8px] px-0 relative shrink-0 w-full" data-name="App User Input">
        <Frame16 />
      </button>
      <button className="box-border content-stretch cursor-pointer flex flex-col gap-[8px] items-center justify-center min-h-[64px] overflow-visible pb-0 pt-[8px] px-0 relative shrink-0 w-full" data-name="App User Input">
        <Frame17 />
      </button>
    </div>
  );
}

function TabContents5() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center justify-center min-h-px min-w-px relative shrink-0" data-name="Tab Contents">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[14px] text-center text-nowrap tracking-[0.1px]">
        <p className="leading-[20px] whitespace-pre">vedlegg</p>
      </div>
    </div>
  );
}

function StateLayer22() {
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
        <p className="leading-[20px] whitespace-pre">Knyttede sjekkliste spørsmål</p>
      </div>
    </div>
  );
}

function StateLayer23() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-col grow items-center justify-center min-h-px min-w-px overflow-clip px-[16px] py-[14px] relative shrink-0" data-name="State-layer">
      <TabContents6 />
    </div>
  );
}

function TabGroup1() {
  return (
    <div className="content-stretch cursor-pointer flex items-start relative shrink-0" data-name="Tab group">
      <div className="bg-white content-stretch flex flex-col h-[48px] items-center justify-end overflow-clip relative shrink-0 w-[120px]" data-name="Tab 1">
        <StateLayer22 />
      </div>
      <div className="bg-white content-stretch flex flex-col h-[48px] items-center justify-end overflow-clip relative shrink-0" data-name="Tab 2">
        <StateLayer23 />
      </div>
    </div>
  );
}

function LeadingElement3() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Leading element">
      <div className="relative shrink-0 size-[24px]" data-name="view_list">
        <div className="absolute inset-0 overflow-clip" data-name="view_list">
          <div className="absolute inset-[20.83%_12.5%]" data-name="Vector">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 14">
              <path d={svgPaths.p39f2fc80} fill="var(--fill-0, #44483B)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Content15() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] tracking-[0.5px] w-full">
        <p className="leading-[24px]">Plantevernjournal_2025.xlsx</p>
      </div>
    </div>
  );
}

function TrailingElement() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="Trailing element">
      <div className="relative shrink-0 size-[24px]" data-name="more_vert">
        <div className="absolute inset-[16.67%_41.67%]" data-name="icon">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 16">
            <path d={svgPaths.p3f25c480} fill="var(--fill-0, #44483B)" id="icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function StateLayer24() {
  return (
    <div className="basis-0 box-border content-stretch flex gap-[16px] grow items-center justify-center min-h-px min-w-px px-[16px] py-[8px] relative shrink-0 w-[360px]" data-name="state-layer">
      <LeadingElement3 />
      <Content15 />
      <TrailingElement />
    </div>
  );
}

function LeadingElement4() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0" data-name="Leading element">
      <div className="content-stretch flex gap-[10px] items-start relative shrink-0" data-name=".Building Blocks/image-Thumbnail">
        <div className="relative shrink-0 size-[56px]" data-name="Thumbnail">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img} />
        </div>
      </div>
    </div>
  );
}

function Content16() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] tracking-[0.5px] w-full">
        <p className="leading-[24px]">Bilde_feltkontroll_mai.jpg</p>
      </div>
    </div>
  );
}

function TrailingElement1() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="Trailing element">
      <div className="relative shrink-0 size-[24px]" data-name="more_vert">
        <div className="absolute inset-[16.67%_41.67%]" data-name="icon">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 16">
            <path d={svgPaths.p3f25c480} fill="var(--fill-0, #44483B)" id="icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function StateLayer25() {
  return (
    <div className="basis-0 box-border content-stretch flex gap-[16px] grow items-center min-h-px min-w-px px-[16px] py-[8px] relative shrink-0 w-[360px]" data-name="state-layer">
      <LeadingElement4 />
      <Content16 />
      <TrailingElement1 />
    </div>
  );
}

function SectionHeader() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Section header">
      <div className="content-stretch flex flex-col h-[56px] items-center justify-center min-h-[56px] relative shrink-0" data-name="List item/List Item: 0 Density">
        <div className="absolute inset-0" data-name="state-layer overlay" />
        <StateLayer24 />
      </div>
      <div className="content-stretch flex flex-col h-[72px] items-center justify-center min-h-[56px] relative shrink-0" data-name="List item/List Item: 0 Density">
        <div className="absolute inset-0" data-name="state-layer overlay" />
        <StateLayer25 />
      </div>
    </div>
  );
}

function UploadDocuments() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Upload Documents">
      <SectionHeader />
    </div>
  );
}

function FilesAndConnections() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="files and connections">
      <div className="bg-white content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Tabs">
        <TabGroup1 />
        <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="Divider">
          <div className="h-0 relative shrink-0 w-[320px]" data-name="Divider">
            <div className="absolute bottom-0 left-0 right-0 top-[-1px]" style={{ "--stroke-0": "rgba(227, 227, 217, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 360 1">
                <line id="Divider" stroke="var(--stroke-0, #E3E3D9)" x2="360" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <UploadDocuments />
    </div>
  );
}

function HandleShape() {
  return (
    <div className="bg-[#74796a] box-border content-stretch flex items-center justify-center overflow-clip p-[11px] relative rounded-[24px] shrink-0" data-name="Handle shape">
      <div className="rounded-[100px] shrink-0 size-[2px]" data-name="Container" />
      <div className="absolute left-1/2 size-[16px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="Icon">
        <div className="absolute inset-[20.833%]" data-name="icon">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
            <path d={svgPaths.p2dc32500} fill="var(--fill-0, #E3E3D9)" id="icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function StateLayer26() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[8px] items-center justify-center p-[8px] relative rounded-[100px] shrink-0" data-name="State-layer">
      <HandleShape />
    </div>
  );
}

function Target() {
  return (
    <div className="absolute box-border content-stretch flex items-center justify-center left-[-12px] p-[4px] top-1/2 translate-y-[-50%]" data-name="Target">
      <StateLayer26 />
    </div>
  );
}

function Handle() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Handle">
      <Target />
    </div>
  );
}

function LeadingElement5() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0" data-name="Leading element">
      <div className="bg-[#e3e3d9] box-border content-stretch flex h-[32px] items-center p-[4px] relative rounded-[100px] shrink-0 w-[52px]" data-name="Switch">
        <div aria-hidden="true" className="absolute border-2 border-[#74796a] border-solid inset-0 pointer-events-none rounded-[100px]" />
        <Handle />
      </div>
    </div>
  );
}

function Content17() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[14px] tracking-[0.1px] w-full">
        <p className="leading-[20px]">Sikker Jobb Analyse (SJA)</p>
      </div>
      <p className="[white-space-collapse:collapse] font-['Manrope:Regular',sans-serif] font-normal h-[20px] leading-[16px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#44483b] text-[12px] text-nowrap tracking-[0.4px] w-full">For å sikre risikovurdering ved farlige oppgaver.</p>
    </div>
  );
}

function StateLayer27() {
  return (
    <div className="basis-0 content-stretch flex gap-[16px] grow items-center justify-center min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <LeadingElement5 />
      <Content17 />
    </div>
  );
}

function Content18() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-between min-h-px min-w-px relative shrink-0 w-full" data-name="Content">
      <div className="basis-0 content-stretch flex flex-col grow h-[56px] items-start justify-center min-h-[56px] min-w-px relative shrink-0" data-name="List item/List Item: -4 Density">
        <div className="absolute inset-0" data-name="state-layer overlay" />
        <StateLayer27 />
      </div>
    </div>
  );
}

function MainContents() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Main contents">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] items-start px-[40px] py-0 relative size-full">
          <AboutTheDocuements />
          <FilesAndConnections />
          <button className="box-border content-stretch cursor-pointer flex flex-col h-[80px] items-start justify-center opacity-0 overflow-visible p-0 relative shrink-0 w-full" data-name="Safe Job Analysis (SJA)">
            <Content18 />
            <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Horizontal/Full-width">
              <div className="h-0 relative shrink-0 w-full" data-name="Divider">
                <div className="absolute bottom-0 left-0 right-0 top-[-1px]" style={{ "--stroke-0": "rgba(196, 200, 183, 1)" } as React.CSSProperties}>
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1022 1">
                    <line id="Divider" stroke="var(--stroke-0, #C4C8B7)" x2="1022" y1="0.5" y2="0.5" />
                  </svg>
                </div>
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

function SelectedDocuemntInformation() {
  return (
    <div className="basis-0 content-stretch flex grow h-full items-start min-h-px min-w-px overflow-clip relative shrink-0 z-[1]" data-name="Selected docuemnt information">
      <MainContents />
      <div className="content-stretch flex flex-col h-full items-center overflow-clip relative shrink-0 w-px" data-name="Vertical/Full-width">
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
    </div>
  );
}

function NyPrototype() {
  return (
    <div className="basis-0 content-stretch flex grow isolate items-center min-h-px min-w-px relative shrink-0 w-full" data-name="ny prototype">
      <UploadedDocumentsList />
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
      <SelectedDocuemntInformation />
    </div>
  );
}

export default function UploadedDocumentOverview() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-name="Uploaded Document overview">
      <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-[1504px]" data-name="Revisor tabs">
        <div className="content-stretch flex flex-col h-[114px] items-start justify-center relative shrink-0 w-full" data-name="Checklist heading">
          <div className="h-[64px] relative shrink-0 w-full" data-name="Checklist name & actions">
            <div className="flex flex-row items-center size-full">
              <div className="box-border content-stretch flex h-[64px] items-center justify-between px-[4px] py-[8px] relative w-full">
                <div className="content-stretch flex items-center justify-center relative shrink-0 size-[48px]" data-name="Leading icon">
                  <div className="content-stretch cursor-pointer flex flex-col items-center justify-center overflow-clip relative rounded-[100px] shrink-0 w-[40px]" data-name="Content">
                    <StateLayer />
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