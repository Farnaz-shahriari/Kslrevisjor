import svgPaths from "./svg-rj5c6b7gl3";
import img from "figma:asset/bccf40ef0d51ade359900027c9bd416d09e9658d.png";

function IconAndLabel() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="Icon and label">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#44483b] text-[14px] text-center text-nowrap tracking-[0.1px]">
        <p className="leading-[20px] whitespace-pre">Lukking av avvik</p>
      </div>
    </div>
  );
}

function TabContents() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center justify-center min-h-px min-w-px relative shrink-0" data-name="Tab Contents">
      <IconAndLabel />
    </div>
  );
}

function StateLayer() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="State-layer">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col items-center justify-center px-[16px] py-[12px] relative size-full">
          <TabContents />
        </div>
      </div>
    </div>
  );
}

function IconAndLabel1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="Icon and label">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[14px] text-center text-nowrap tracking-[0.1px]">
        <p className="leading-[20px] whitespace-pre">Mer om avvik og sjekkelistekrav</p>
      </div>
    </div>
  );
}

function TabContents1() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center justify-center min-h-px min-w-px relative shrink-0" data-name="Tab Contents">
      <IconAndLabel1 />
    </div>
  );
}

function StateLayer1() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="State-layer">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col items-center justify-center px-[16px] py-[12px] relative size-full">
          <TabContents1 />
          <div className="absolute bg-[#4a671e] bottom-0 h-[2px] left-0 right-0" data-name="Indicator" />
        </div>
      </div>
    </div>
  );
}

function TabGroup() {
  return (
    <div className="content-stretch cursor-pointer flex items-start relative shrink-0 w-full" data-name="Tab group">
      <div className="content-stretch flex flex-col h-[48px] items-center justify-end overflow-clip relative shrink-0" data-name="Tab 1">
        <StateLayer />
      </div>
      <div className="content-stretch flex flex-col h-[48px] items-center justify-end overflow-clip relative shrink-0" data-name="Tab 2">
        <StateLayer1 />
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center leading-[0] min-h-px min-w-px overflow-clip relative shrink-0 tracking-[0.5px]" data-name="Content">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[#44483b] text-[12px] w-full">
        <p className="leading-[16px]">Rapportert avvik</p>
      </div>
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#1a1c16] text-[16px] w-full">
        <p className="leading-[24px]">Stort avvik</p>
      </div>
    </div>
  );
}

function StateLayer2() {
  return (
    <div className="basis-0 box-border content-stretch flex gap-[16px] grow items-center min-h-px min-w-px px-0 py-[4px] relative shrink-0 w-full" data-name="state-layer">
      <Content />
    </div>
  );
}

function Content1() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start justify-center leading-[0] min-h-px min-w-px overflow-clip relative shrink-0 tracking-[0.5px]" data-name="Content">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[#44483b] text-[12px] w-full">
        <p className="leading-[16px]">Bevis</p>
      </div>
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#1a1c16] text-[16px] w-full">
        <p className="leading-[24px]">Ingen dokumentasjon fremvist for truckkontroll.</p>
      </div>
    </div>
  );
}

function StateLayer3() {
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

function Frame15() {
  return (
    <div className="box-border content-stretch flex gap-[16px] items-start px-0 py-[8px] relative shrink-0 w-full">
      <Content1 />
      <div className="content-stretch flex items-center justify-center relative shrink-0 size-[48px]" data-name="Icon button">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[100px] shrink-0 w-[28px]" data-name="Content">
          <StateLayer3 />
        </div>
      </div>
    </div>
  );
}

function StateLayer4() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-center justify-center px-[24px] py-[16px] relative shrink-0" data-name="State-layer">
      <div className="relative shrink-0 size-[24px]" data-name="Icon">
        <div className="absolute inset-[16.667%]" data-name="icon">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
            <path d={svgPaths.p3573eb00} fill="var(--fill-0, #44483B)" id="icon" />
          </svg>
        </div>
      </div>
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#44483b] text-[16px] text-nowrap tracking-[0.15px]">
        <p className="leading-[24px] whitespace-pre">Last opp bilde</p>
      </div>
    </div>
  );
}

function LeadingElement1() {
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

function Content2() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] tracking-[0.5px] w-full">
        <p className="leading-[24px]">(uploaded item name)</p>
      </div>
    </div>
  );
}

function TrailingElement() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="Trailing element">
      <div className="relative shrink-0 size-[24px]" data-name="delete">
        <div className="absolute inset-0 overflow-clip" data-name="delete">
          <div className="absolute inset-[12.5%_20.83%]" data-name="Vector">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 18">
              <path d={svgPaths.p4c48400} fill="var(--fill-0, #44483B)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function StateLayer5() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative size-full">
          <LeadingElement1 />
          <Content2 />
          <TrailingElement />
        </div>
      </div>
    </div>
  );
}

function LeadingElement2() {
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

function Content3() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] tracking-[0.5px] w-full">
        <p className="leading-[24px]">(uploaded item name)</p>
      </div>
    </div>
  );
}

function TrailingElement1() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="Trailing element">
      <div className="relative shrink-0 size-[24px]" data-name="delete">
        <div className="absolute inset-0 overflow-clip" data-name="delete">
          <div className="absolute inset-[12.5%_20.83%]" data-name="Vector">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 18">
              <path d={svgPaths.p4c48400} fill="var(--fill-0, #44483B)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function StateLayer6() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative size-full">
          <LeadingElement2 />
          <Content3 />
          <TrailingElement1 />
        </div>
      </div>
    </div>
  );
}

function Evidences() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Evidences">
      <button className="box-border content-stretch cursor-pointer flex flex-col gap-[8px] items-start justify-center min-h-[64px] overflow-visible pb-0 pt-[8px] px-0 relative shrink-0 w-full" data-name="App User Input">
        <Frame15 />
      </button>
      <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Button">
        <div className="relative rounded-[100px] shrink-0" data-name="Content">
          <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[inherit]">
            <StateLayer4 />
          </div>
          <div aria-hidden="true" className="absolute border border-[#c4c8b7] border-solid inset-0 pointer-events-none rounded-[100px]" />
        </div>
      </div>
      <div className="content-stretch flex flex-col h-[72px] items-center justify-center min-h-[56px] relative shrink-0 w-full" data-name="List item/List Item: 0 Density">
        <div className="absolute inset-0" data-name="state-layer overlay" />
        <StateLayer5 />
      </div>
      <div className="content-stretch flex flex-col h-[72px] items-center justify-center min-h-[56px] relative shrink-0 w-full" data-name="List item/List Item: 0 Density">
        <div className="absolute inset-0" data-name="state-layer overlay" />
        <StateLayer6 />
      </div>
      <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Horizontal/Full-width">
        <div className="h-0 relative shrink-0 w-full" data-name="Divider">
          <div className="absolute bottom-0 left-0 right-0 top-[-1px]" style={{ "--stroke-0": "rgba(196, 200, 183, 1)" } as React.CSSProperties}>
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 480 1">
              <line id="Divider" stroke="var(--stroke-0, #C4C8B7)" x2="480" y1="0.5" y2="0.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame96() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <div className="content-stretch flex flex-col h-[64px] items-start justify-center min-h-[64px] relative shrink-0 w-full" data-name="List item/List Item: -2 Density">
        <div className="absolute inset-0" data-name="state-layer overlay" />
        <StateLayer2 />
      </div>
      <Evidences />
    </div>
  );
}

function Content4() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start justify-center leading-[0] min-h-px min-w-px overflow-clip relative shrink-0 tracking-[0.5px]" data-name="Content">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[#44483b] text-[12px] w-full">
        <p className="leading-[16px]">Krav (fra veileder)</p>
      </div>
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#1a1c16] text-[16px] w-full">
        <p className="leading-[24px]">Alt utstyr som krever det skal være kontrollert og sertifisert iht. forskrift.</p>
      </div>
    </div>
  );
}

function StateLayer7() {
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
    <div className="box-border content-stretch flex gap-[16px] items-start px-0 py-[8px] relative shrink-0 w-full">
      <Content4 />
      <div className="content-stretch flex items-center justify-center relative shrink-0 size-[48px]" data-name="Icon button">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[100px] shrink-0 w-[28px]" data-name="Content">
          <StateLayer7 />
        </div>
      </div>
    </div>
  );
}

export default function DeviationTabs() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative size-full" data-name="Deviation tabs">
      <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Tabs">
        <TabGroup />
        <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Divider">
          <div className="h-0 relative shrink-0 w-full" data-name="Divider">
            <div className="absolute bottom-0 left-0 right-0 top-[-1px]" style={{ "--stroke-0": "rgba(227, 227, 217, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 480 1">
                <line id="Divider" stroke="var(--stroke-0, #E3E3D9)" x2="480" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Frame96 />
      <button className="box-border content-stretch cursor-pointer flex flex-col gap-[8px] items-center justify-center min-h-[64px] overflow-visible pb-0 pt-[8px] px-0 relative shrink-0 w-full" data-name="App User Input">
        <Frame16 />
      </button>
    </div>
  );
}