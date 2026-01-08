import svgPaths from "./svg-4e9sdk8w9x";

function HandleShape() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center overflow-clip p-[11px] relative rounded-[24px] shrink-0" data-name="Handle shape">
      <div className="rounded-[23px] shrink-0 size-[2px]" data-name="Container" />
    </div>
  );
}

function StateLayer() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center p-[8px] relative rounded-[100px] shrink-0" data-name="State-layer">
      <HandleShape />
    </div>
  );
}

function Target() {
  return (
    <div className="absolute content-stretch flex items-center justify-center p-[4px] right-[-12px] top-1/2 translate-y-[-50%]" data-name="Target">
      <StateLayer />
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

function Switch() {
  return (
    <div className="bg-[#4a671e] content-stretch flex h-[32px] items-center justify-end px-[4px] py-[2px] relative rounded-[100px] shrink-0 w-[52px]" data-name="Switch">
      <Handle />
    </div>
  );
}

function LeadingElement() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Leading element">
      <Switch />
    </div>
  );
}

function Content() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[0px] tracking-[0.15px] w-full">
        <p className="font-['Manrope:Bold',sans-serif] font-bold leading-[24px] text-[16px]">Notatet gjelder et avvik</p>
      </div>
    </div>
  );
}

function StateLayer1() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative size-full">
          <LeadingElement />
          <Content />
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

function Icon() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="report_problem">
          <path d={svgPaths.p21d3df00} fill="var(--fill-0, #3D2C00)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function StateLayer2() {
  return (
    <div className="content-stretch flex gap-[8px] h-[32px] items-center justify-center pl-[8px] pr-[16px] py-[6px] relative shrink-0" data-name="state-layer">
      <Icon />
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#3d2c00] text-[14px] text-center text-nowrap tracking-[0.1px]">
        <p className="leading-[20px] whitespace-pre">Lite avvik</p>
      </div>
    </div>
  );
}

function AssistiveChip() {
  return (
    <div className="bg-[#fdeeb1] relative rounded-[8px] shrink-0" data-name="Assistive chip">
      <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[inherit]">
        <StateLayer2 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#c4c8b7] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function DeviationGradingChip() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0" data-name="Deviation Grading chip">
      <AssistiveChip />
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="report_problem">
          <path d={svgPaths.p21d3df00} fill="var(--fill-0, #3D2100)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function StateLayer3() {
  return (
    <div className="content-stretch flex gap-[8px] h-[32px] items-center justify-center pl-[8px] pr-[16px] py-[6px] relative shrink-0" data-name="state-layer">
      <Icon1 />
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#3d2100] text-[14px] text-center text-nowrap tracking-[0.1px]">
        <p className="leading-[20px] whitespace-pre">Avvik</p>
      </div>
    </div>
  );
}

function AssistiveChip1() {
  return (
    <div className="bg-[#fdd19f] relative rounded-[8px] shrink-0" data-name="Assistive chip">
      <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[inherit]">
        <StateLayer3 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#c4c8b7] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function DeviationGradingChip1() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0" data-name="Deviation Grading chip">
      <AssistiveChip1 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="report_problem">
          <path d={svgPaths.p21d3df00} fill="var(--fill-0, #410002)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function StateLayer4() {
  return (
    <div className="content-stretch flex gap-[8px] h-[32px] items-center justify-center pl-[8px] pr-[16px] py-[6px] relative shrink-0" data-name="state-layer">
      <Icon2 />
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#410002] text-[14px] text-center text-nowrap tracking-[0.1px]">
        <p className="leading-[20px] whitespace-pre">Stort avvik</p>
      </div>
    </div>
  );
}

function AssistiveChip2() {
  return (
    <div className="bg-[#ffdad6] relative rounded-[8px] shrink-0" data-name="Assistive chip">
      <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[inherit]">
        <StateLayer4 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#c4c8b7] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function DeviationGradingChip2() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0" data-name="Deviation Grading chip">
      <AssistiveChip2 />
    </div>
  );
}

function SeverityOptions() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Severity Options">
      <DeviationGradingChip />
      <DeviationGradingChip1 />
      <DeviationGradingChip2 />
    </div>
  );
}

function Content1() {
  return (
    <div className="basis-0 content-stretch flex flex-col font-['Manrope:Regular',sans-serif] font-normal grow items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] tracking-[0.5px] w-full">
        <p className="leading-[24px]">Mangel</p>
      </div>
      <p className="leading-[20px] relative shrink-0 text-[#44483b] text-[14px] tracking-[0.25px] w-full">Påkrevd</p>
      <p className="h-0 leading-[20px] opacity-0 relative shrink-0 text-[#44483b] text-[14px] tracking-[0.25px] w-full">Etiketter er delvis uleselige og plasseringen er uoversiktlig.</p>
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p2a6e0600} fill="var(--fill-0, #44483B)" id="icon" />
        </g>
      </svg>
    </div>
  );
}

function StateLayer5() {
  return (
    <div className="content-stretch flex h-[40px] items-center justify-center relative shrink-0 w-full" data-name="State-layer">
      <Icon3 />
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[100px] shrink-0 w-[40px]" data-name="Content">
      <StateLayer5 />
    </div>
  );
}

function IconButton() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[48px]" data-name="Icon button">
      <Content2 />
    </div>
  );
}

function Frame() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center p-[8px] relative w-full">
          <Content1 />
          <IconButton />
        </div>
      </div>
    </div>
  );
}

function HorizontalFullWidth() {
  return (
    <div className="h-px relative shrink-0 w-full" data-name="Horizontal/Full-width">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 352 1">
        <g id="Horizontal/Full-width">
          <line id="Divider" stroke="var(--stroke-0, #C4C8B7)" x1="4.37114e-08" x2="352" y1="0.500031" y2="0.500001" />
        </g>
      </svg>
    </div>
  );
}

function AppUserInput() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center justify-center min-h-[64px] pb-0 pt-[8px] px-0 relative shrink-0 w-full" data-name="App User Input">
      <Frame />
      <HorizontalFullWidth />
    </div>
  );
}

function Content3() {
  return (
    <div className="basis-0 content-stretch flex flex-col font-['Manrope:Regular',sans-serif] font-normal grow items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] tracking-[0.5px] w-full">
        <p className="leading-[24px]">Bevis</p>
      </div>
      <p className="leading-[20px] relative shrink-0 text-[#44483b] text-[14px] tracking-[0.25px] w-full">Påkrevd</p>
      <p className="h-0 leading-[20px] opacity-0 relative shrink-0 text-[#44483b] text-[14px] tracking-[0.25px] w-full">To midler står utenfor skapet på en hylle sammen med rengjøringsmidler. Noen beholdere mangler tydelig merking eller har gamle, uleselige etiketter. Skapet er ellers intakt og låsbart.</p>
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p2a6e0600} fill="var(--fill-0, #44483B)" id="icon" />
        </g>
      </svg>
    </div>
  );
}

function StateLayer6() {
  return (
    <div className="content-stretch flex h-[40px] items-center justify-center relative shrink-0 w-full" data-name="State-layer">
      <Icon4 />
    </div>
  );
}

function Content4() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[100px] shrink-0 w-[40px]" data-name="Content">
      <StateLayer6 />
    </div>
  );
}

function IconButton1() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[48px]" data-name="Icon button">
      <Content4 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center p-[8px] relative w-full">
          <Content3 />
          <IconButton1 />
        </div>
      </div>
    </div>
  );
}

function AppUserInput1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center justify-center min-h-[64px] pb-0 pt-[8px] px-0 relative shrink-0 w-full" data-name="App User Input">
      <Frame1 />
    </div>
  );
}

function Upload() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="upload">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="upload">
          <path d={svgPaths.p2de34800} fill="var(--fill-0, #44483B)" id="icon" />
        </g>
      </svg>
    </div>
  );
}

function StateLayer7() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[10px] relative shrink-0" data-name="State-layer">
      <Upload />
      <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#44483b] text-[14px] text-nowrap tracking-[0.1px]">
        <p className="leading-[20px] whitespace-pre">Last opp bilde</p>
      </div>
    </div>
  );
}

function Content5() {
  return (
    <div className="relative rounded-[100px] shrink-0" data-name="Content">
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[inherit]">
        <StateLayer7 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#c4c8b7] border-solid inset-0 pointer-events-none rounded-[100px]" />
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch flex h-[48px] items-center justify-center relative shrink-0" data-name="Button">
      <Content5 />
    </div>
  );
}

function Divider() {
  return (
    <div className="h-px relative shrink-0 w-full" data-name="Divider">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 352 1">
        <g id="Divider">
          <line id="Divider_2" stroke="var(--stroke-0, #C4C8B7)" x1="4.37114e-08" x2="352" y1="0.500031" y2="0.5" />
        </g>
      </svg>
    </div>
  );
}

function ContentContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Content Container">
      <AppUserInput1 />
      <Button />
      <Divider />
    </div>
  );
}

function Content6() {
  return (
    <div className="basis-0 content-stretch flex flex-col font-['Manrope:Regular',sans-serif] font-normal grow items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] tracking-[0.5px] w-full">
        <p className="leading-[24px]">Krav (fra veileder)</p>
      </div>
      <p className="leading-[20px] relative shrink-0 text-[#44483b] text-[14px] tracking-[0.25px] w-full">Påkrevd</p>
      <p className="h-0 leading-[20px] opacity-0 relative shrink-0 text-[#44483b] text-[14px] tracking-[0.25px] w-full">Alle beholdere skal ha tydelig og lesbar merking, og oppbevares adskilt fra andre kjemikalier for å hindre forveksling.</p>
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p2a6e0600} fill="var(--fill-0, #44483B)" id="icon" />
        </g>
      </svg>
    </div>
  );
}

function StateLayer8() {
  return (
    <div className="content-stretch flex h-[40px] items-center justify-center relative shrink-0 w-full" data-name="State-layer">
      <Icon5 />
    </div>
  );
}

function Content7() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[100px] shrink-0 w-[40px]" data-name="Content">
      <StateLayer8 />
    </div>
  );
}

function IconButton2() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[48px]" data-name="Icon button">
      <Content7 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center p-[8px] relative w-full">
          <Content6 />
          <IconButton2 />
        </div>
      </div>
    </div>
  );
}

function AppUserInput2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center justify-center min-h-[64px] pb-0 pt-[8px] px-0 relative shrink-0 w-full" data-name="App User Input">
      <Frame2 />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="font-['Manrope:Medium',sans-serif] font-medium leading-[20px] min-w-full relative shrink-0 text-[#1a1c16] text-[14px] tracking-[0.1px] w-[min-content]">Hvor langt er avviket fra kravet?</p>
      <SeverityOptions />
      <AppUserInput />
      <ContentContainer />
      <AppUserInput2 />
    </div>
  );
}

export default function DeviationRegistration() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative size-full" data-name="Deviation registration">
      <ListItemListItem0Density />
      <Container />
    </div>
  );
}