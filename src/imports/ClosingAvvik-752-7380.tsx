import svgPaths from "./svg-9ohorzm3x0";
import imgThumbnail from "figma:asset/bccf40ef0d51ade359900027c9bd416d09e9658d.png";

function SnippetFolder() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="snippet_folder">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="snippet_folder">
          <path d={svgPaths.p1a55f400} fill="var(--fill-0, #44483B)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ClosingConfirmationMethode() {
  return (
    <div className="content-stretch flex gap-[8px] items-center px-0 py-[8px] relative shrink-0" data-name="Closing confirmation methode">
      <SnippetFolder />
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] text-nowrap tracking-[0.15px]">
        <p className="leading-[24px]">
          Lukking krever d<span className="font-['Manrope:Medium',sans-serif] font-medium">okumentasjon</span>
        </p>
      </div>
    </div>
  );
}

function Spacer() {
  return <div className="shrink-0 size-[2px]" data-name="Spacer" />;
}

function Icon() {
  return (
    <div className="bg-[#ba1a1a] content-stretch flex items-center justify-center p-[2px] relative rounded-[100px] shrink-0" data-name="Icon">
      <Spacer />
    </div>
  );
}

function StateLayer() {
  return (
    <div className="content-stretch flex gap-[8px] h-[32px] items-center justify-center pl-[8px] pr-[16px] py-[6px] relative shrink-0" data-name="state-layer">
      <Icon />
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[14px] text-center text-nowrap tracking-[0.1px]">
        <p className="leading-[20px]">Tidspunkt foreslått</p>
      </div>
    </div>
  );
}

function StatusChip() {
  return (
    <div className="bg-[#f4f4ea] content-stretch flex items-center justify-center overflow-clip relative rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.3),0px_1px_3px_1px_rgba(0,0,0,0.15)] shrink-0" data-name="Status chip">
      <StateLayer />
    </div>
  );
}

function ChatBubble() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="chat_bubble">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="chat_bubble">
          <path d={svgPaths.p1bbda200} fill="var(--fill-0, #44483B)" id="icon" />
        </g>
      </svg>
    </div>
  );
}

function LeadingElement() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Leading element">
      <ChatBubble />
    </div>
  );
}

function Content() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start justify-center leading-[0] min-h-px min-w-px overflow-clip relative shrink-0 tracking-[0.5px]" data-name="Content">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[#44483b] text-[12px] w-full">
        <p className="leading-[16px]">Kommentar</p>
      </div>
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#1a1c16] text-[16px] w-full">
        <p className="leading-[24px]">{`Send meg relevante dokumentasjon her `}</p>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex gap-[16px] items-start p-[8px] relative w-full">
        <LeadingElement />
        <Content />
      </div>
    </div>
  );
}

function HorizontalFullWidth() {
  return (
    <div className="h-px relative shrink-0 w-full" data-name="Horizontal/Full-width">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 384 1.00003">
        <g id="Horizontal/Full-width">
          <line id="Divider" stroke="var(--stroke-0, #C4C8B7)" x1="4.37114e-08" x2="384" y1="0.500034" y2="0.5" />
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

function ViewList() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="view_list">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="view_list">
          <path d={svgPaths.pccd6580} fill="var(--fill-0, #44483B)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function LeadingElement1() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Leading element">
      <ViewList />
    </div>
  );
}

function Content1() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] tracking-[0.5px] w-full">
        <p className="leading-[24px]">Plantevernjournal_2025.xlsx</p>
      </div>
    </div>
  );
}

function MoreVert() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="more_vert">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="more_vert">
          <path d={svgPaths.p34810300} fill="var(--fill-0, #44483B)" id="icon" />
        </g>
      </svg>
    </div>
  );
}

function TrailingElement() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="Trailing element">
      <MoreVert />
    </div>
  );
}

function StateLayer1() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[16px] items-center justify-center px-[16px] py-[8px] relative size-full">
          <LeadingElement1 />
          <Content1 />
          <TrailingElement />
        </div>
      </div>
    </div>
  );
}

function ListItemListItem0Density() {
  return (
    <div className="content-stretch flex flex-col h-[56px] items-start justify-center min-h-[56px] relative shrink-0 w-full" data-name="List item/List Item: 0 Density">
      <StateLayer1 />
    </div>
  );
}

function BuildingBlocksImageThumbnail() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name=".Building Blocks/image-Thumbnail">
      <div className="relative shrink-0 size-[56px]" data-name="Thumbnail">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgThumbnail} />
      </div>
    </div>
  );
}

function LeadingElement2() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0" data-name="Leading element">
      <BuildingBlocksImageThumbnail />
    </div>
  );
}

function Content2() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] tracking-[0.5px] w-full">
        <p className="leading-[24px]">Bilde_feltkontroll_mai.jpg</p>
      </div>
    </div>
  );
}

function MoreVert1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="more_vert">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="more_vert">
          <path d={svgPaths.p34810300} fill="var(--fill-0, #44483B)" id="icon" />
        </g>
      </svg>
    </div>
  );
}

function TrailingElement1() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="Trailing element">
      <MoreVert1 />
    </div>
  );
}

function StateLayer2() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative size-full">
          <LeadingElement2 />
          <Content2 />
          <TrailingElement1 />
        </div>
      </div>
    </div>
  );
}

function ListItemListItem0Density1() {
  return (
    <div className="content-stretch flex flex-col h-[72px] items-start justify-center min-h-[56px] relative shrink-0 w-full" data-name="List item/List Item: 0 Density">
      <StateLayer2 />
    </div>
  );
}

function Clear() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="clear">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g>
          <path d={svgPaths.p3fd9e500} fill="var(--fill-0, #44483B)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function StateLayer3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center px-[24px] py-[16px] relative shrink-0" data-name="State-layer">
      <Clear />
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#44483b] text-[16px] text-nowrap tracking-[0.15px]">
        <p className="leading-[24px]">Avvis dokument og be om nytt</p>
      </div>
    </div>
  );
}

function Content3() {
  return (
    <div className="relative rounded-[100px] shrink-0" data-name="Content">
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[inherit]">
        <StateLayer3 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#c4c8b7] border-solid inset-0 pointer-events-none rounded-[100px]" />
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Button">
      <Content3 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0 w-full">
      <ListItemListItem0Density />
      <ListItemListItem0Density1 />
      <Button />
    </div>
  );
}

function ClosingAvvikContent() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Closing Avvik Content">
      <ClosingConfirmationMethode />
      <StatusChip />
      <AppUserInput />
      <Frame1 />
    </div>
  );
}

export default function ClosingAvvik() {
  return (
    <div className="bg-[#fafaf0] relative rounded-[12px] size-full" data-name="closing avvik">
      <div className="content-stretch flex flex-col items-start overflow-clip p-[24px] relative rounded-[inherit] size-full">
        <ClosingAvvikContent />
      </div>
      <div aria-hidden="true" className="absolute border border-[#c4c8b7] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}