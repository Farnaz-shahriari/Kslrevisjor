import svgPaths from "./svg-pql2ojrzfw";
import { imgDivider, imgIcon, img, img1, imgIcon1, imgDivider1 } from "./svg-y7wel";

/**
 * @figmaAssetKey a720761d66b52800b8061dce03dda4fb6eabf107
 */
function HorizontalFullWidth({ className }: { className?: string }) {
  return (
    <div className={className} data-name="Horizontal/Full-width">
      <div className="h-0 relative shrink-0 w-full" data-name="Divider">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]" style={{ "--stroke-0": "rgba(196, 200, 183, 1)" } as React.CSSProperties}>
          <img alt="" className="block max-w-none size-full" src={imgDivider} />
        </div>
      </div>
    </div>
  );
}

/**
 * @figmaAssetKey 04173d8c3b69f36664458e791cbca3ec01c7770e
 */
function Add({ className }: { className?: string }) {
  return (
    <div className={className} data-name="add">
      <div className="absolute inset-[20.833%]" data-name="icon">
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(68, 72, 59, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
            <path d={svgPaths.p2ccb20} fill="var(--fill-0, #44483B)" id="icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

/**
 * @figmaAssetKey 5345a50996f643634a37cc011c5535783a64d458
 */
function BuildingBlocksStateLayer1Enabled({ className }: { className?: string }) {
  return <div className={className} data-name="Building Blocks/state-layer/1. enabled" />;
}

/**
 * @figmaAssetKey 6031e2762880867103b944b4659a4c3da7c63043
 */
function Check({ className }: { className?: string }) {
  return (
    <div className={className} data-name="check">
      <div className="absolute bottom-1/4 left-[16.04%] right-[16.04%] top-[24.9%]" data-name="icon">
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(68, 72, 59, 1)" } as React.CSSProperties}>
          <img alt="" className="block max-w-none size-full" src={imgIcon} />
        </div>
      </div>
    </div>
  );
}

/**
 * @figmaAssetKey 5004ca034d63c632a82a29c3de9688ebf4303eaa
 */
function ReportProblem({ className }: { className?: string }) {
  return (
    <div className={className} data-name="report_problem">
      <Report_problem />
    </div>
  );
}
type ChipCellsProps = {
  className?: string;
  type?: "Space" | "Chip" | "Text";
  selected?: boolean;
};

/**
 * @figmaAssetKey 13275f861902308173a6e7c14f7c5aec03fa6345
 */
/**
 * @figmaAssetKey 56a7d1d35bbcf6c0ac74a2c8c55896fd5432054b
 */
/**
 * @figmaAssetKey a720761d66b52800b8061dce03dda4fb6eabf107
 */
/**
 * @figmaAssetKey 5345a50996f643634a37cc011c5535783a64d458
 */
/**
 * @figmaAssetKey a720761d66b52800b8061dce03dda4fb6eabf107
 */
/**
 * @figmaAssetKey 5345a50996f643634a37cc011c5535783a64d458
 */
/**
 * @figmaAssetKey a720761d66b52800b8061dce03dda4fb6eabf107
 */
/**
 * @figmaAssetKey a720761d66b52800b8061dce03dda4fb6eabf107
 */
/**
 * @figmaAssetKey a720761d66b52800b8061dce03dda4fb6eabf107
 */
/**
 * @figmaAssetKey 56a7d1d35bbcf6c0ac74a2c8c55896fd5432054b
 */
/**
 * @figmaAssetKey a720761d66b52800b8061dce03dda4fb6eabf107
 */
function ChipCells({ className, type = "Chip", selected = false }: ChipCellsProps) {
  if (type === "Chip" && selected) {
    return (
      <div className={className} data-name="Type=Chip, Selected=Yes">
        <ListitemListItem0Density />
      </div>
    );
  }
  if (type === "Text" && !selected) {
    return (
      <div className={className} data-name="Type=Text, Selected=No">
        <ListitemListItem0Density1 />
      </div>
    );
  }
  if (type === "Text" && selected) {
    return (
      <div className={className} data-name="Type=Text, Selected=Yes">
        <ListitemListItem0Density2 />
      </div>
    );
  }
  if (type === "Space" && !selected) {
    return (
      <div className={className} data-name="Type=Space, Selected=No">
        <ListitemListItem0Density3 />
      </div>
    );
  }
  if (type === "Space" && selected) {
    return (
      <div className={className} data-name="Type=Space, Selected=Yes">
        <ListitemListItem0Density4 />
      </div>
    );
  }
  return (
    <div className={className} data-name="Type=Chip, Selected=No">
      <ListitemListItem0Density5 />
    </div>
  );
}

/**
 * @figmaAssetKey 7208c66d02e6b12a0726d77283c8c05b06a664fb
 */
function LocalTaxi({ className }: { className?: string }) {
  return (
    <div className={className} data-name="local_taxi">
      <div className="absolute inset-[12.5%]" data-name="icon">
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(68, 72, 59, 1)" } as React.CSSProperties}>
          <img alt="" className="block max-w-none size-full" src={imgIcon1} />
        </div>
      </div>
    </div>
  );
}

/**
 * @figmaAssetKey f91b2df5ef4208c6c419b4fbf4a45f74fbd5fe21
 */
function VerticalFullWidth({ className }: { className?: string }) {
  return (
    <div className={className} data-name="Vertical/Full-width">
      <div className="basis-0 flex grow items-center justify-center min-h-px min-w-px relative shrink-0 w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "120", "--transform-inner-height": "120" } as React.CSSProperties}>
        <div className="flex-none h-full rotate-[90deg]">
          <div className="h-full relative w-[120px]" data-name="Divider">
            <div className="absolute bottom-0 left-0 right-0 top-[-1px]" style={{ "--stroke-0": "rgba(196, 200, 183, 1)" } as React.CSSProperties}>
              <img alt="" className="block max-w-none size-full" src={imgDivider1} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full relative shrink-0 text-[#1a1c16] text-[16px] tracking-[0.5px] w-[min-content]">
        <p className="leading-[24px]">Revisjonshistorikk og rapporter</p>
      </div>
    </div>
  );
}

function StateLayer() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative size-full">
          <Content />
        </div>
      </div>
    </div>
  );
}

/**
 * @figmaAssetKey e1eea685030ee7b03e5e50470963ad069a3538d2
 */
function StateLayer1() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-center justify-center px-[24px] py-[16px] relative shrink-0" data-name="State-layer">
      <Icon />
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[16px] text-nowrap text-white tracking-[0.15px]">
        <p className="leading-[24px] whitespace-pre">Oppdater revisjongrunnlag</p>
      </div>
    </div>
  );
}

function LeadingElement() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0" data-name="Leading element">
      <BuildingBlocksMonogram />
    </div>
  );
}

function Content1() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#174295] text-[16px] tracking-[0.5px] w-full">
        <p className="leading-[24px]">Generelle krav til gården</p>
      </div>
    </div>
  );
}

function StateLayer2() {
  return (
    <div className="basis-0 box-border content-stretch flex gap-[16px] grow items-center min-h-px min-w-px px-0 py-[8px] relative shrink-0 w-full" data-name="state-layer">
      <LeadingElement />
      <Content1 />
    </div>
  );
}

function Frame() {
  return (
    <div className="basis-0 grow h-[64px] min-h-px min-w-px relative shrink-0">
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] h-[64px] items-start justify-center px-[8px] py-0 relative w-full">
          <ListitemListItem0Density6 />
        </div>
      </div>
    </div>
  );
}

function LeadingElement1() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0" data-name="Leading element">
      <BuildingBlocksMonogram1 />
    </div>
  );
}

function Content2() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] tracking-[0.5px] w-full">
        <p className="leading-[24px]">Helse, miljø og sikkerhet</p>
      </div>
    </div>
  );
}

function StateLayer3() {
  return (
    <div className="basis-0 box-border content-stretch flex gap-[16px] grow items-center min-h-px min-w-px px-0 py-[8px] relative shrink-0 w-full" data-name="state-layer">
      <LeadingElement1 />
      <Content2 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="basis-0 grow h-[64px] min-h-px min-w-px relative shrink-0">
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] h-[64px] items-start justify-center px-[8px] py-0 relative w-full">
          <ListitemListItem0Density7 />
        </div>
      </div>
    </div>
  );
}

function LeadingElement2() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0" data-name="Leading element">
      <BuildingBlocksMonogram2 />
    </div>
  );
}

function Content3() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] tracking-[0.5px] w-full">
        <p className="leading-[24px]">{`Grovfôr, korn, frø, olje- og belgvekster	`}</p>
      </div>
    </div>
  );
}

function StateLayer4() {
  return (
    <div className="basis-0 box-border content-stretch flex gap-[16px] grow items-center min-h-px min-w-px px-0 py-[8px] relative shrink-0 w-full" data-name="state-layer">
      <LeadingElement2 />
      <Content3 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="basis-0 grow h-[64px] min-h-px min-w-px relative shrink-0">
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] h-[64px] items-start justify-center px-[8px] py-0 relative w-full">
          <ListitemListItem0Density8 />
        </div>
      </div>
    </div>
  );
}

function LeadingElement3() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0" data-name="Leading element">
      <BuildingBlocksMonogram3 />
    </div>
  );
}

function Content4() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] tracking-[0.5px] w-full">
        <p className="leading-[24px]">Drøvtyggere - generell</p>
      </div>
    </div>
  );
}

function StateLayer5() {
  return (
    <div className="basis-0 box-border content-stretch flex gap-[16px] grow items-center min-h-px min-w-px px-0 py-[8px] relative shrink-0 w-full" data-name="state-layer">
      <LeadingElement3 />
      <Content4 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="basis-0 grow h-[64px] min-h-px min-w-px relative shrink-0">
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] h-[64px] items-start justify-center px-[8px] py-0 relative w-full">
          <ListitemListItem0Density9 />
        </div>
      </div>
    </div>
  );
}

function LeadingElement4() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0" data-name="Leading element">
      <BuildingBlocksMonogram4 />
    </div>
  );
}

function Content5() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] tracking-[0.5px] w-full">
        <p className="leading-[24px]">Småfe</p>
      </div>
    </div>
  );
}

function StateLayer6() {
  return (
    <div className="basis-0 box-border content-stretch flex gap-[16px] grow items-center min-h-px min-w-px px-0 py-[8px] relative shrink-0 w-full" data-name="state-layer">
      <LeadingElement4 />
      <Content5 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="basis-0 grow h-[64px] min-h-px min-w-px relative shrink-0">
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] h-[64px] items-start justify-center px-[8px] py-0 relative w-full">
          <ListitemListItem0Density10 />
        </div>
      </div>
    </div>
  );
}

function LeadingElement5() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0" data-name="Leading element">
      <BuildingBlocksMonogram5 />
    </div>
  );
}

function Content6() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] tracking-[0.5px] w-full">
        <p className="leading-[24px]">overordnet spørsmål-Overordnede spørsmål for revisor</p>
      </div>
    </div>
  );
}

function StateLayer7() {
  return (
    <div className="basis-0 box-border content-stretch flex gap-[16px] grow items-center min-h-px min-w-px px-0 py-[8px] relative shrink-0 w-full" data-name="state-layer">
      <LeadingElement5 />
      <Content6 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="basis-0 grow h-[64px] min-h-px min-w-px relative shrink-0">
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] h-[64px] items-start justify-center px-[8px] py-0 relative w-full">
          <ListitemListItem0Density11 />
        </div>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow isolate items-start min-h-px min-w-px overflow-x-clip overflow-y-auto relative shrink-0 w-full">
      <ChecklistQuestion />
      <ChecklistQuestion1 />
      <ChecklistQuestion2 />
      <ChecklistQuestion3 />
      <ChecklistQuestion4 />
      <ChecklistQuestion5 />
    </div>
  );
}

/**
 * @figmaAssetKey 77d741260dc065faab6ffc6966e947cef12001d1
 */
function Frame7() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[16px] grow items-start min-h-px min-w-px relative shrink-0 w-full">
      <HorizontalDividerwithsubhead />
      <Button />
      <Frame6 />
    </div>
  );
}

function Checklists() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[24px] h-full items-start p-[16px] relative shrink-0 w-[400px] z-[3]" data-name="Checklists">
      <ListitemListItem0Density12 />
      <Frame7 />
    </div>
  );
}

function StateLayer8() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-center justify-center px-[24px] py-[16px] relative shrink-0" data-name="State-layer">
      <Icon1 />
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#44483b] text-[16px] text-nowrap tracking-[0.15px]">
        <p className="leading-[24px] whitespace-pre">Legg til alle spørsmål</p>
      </div>
    </div>
  );
}

/**
 * @figmaAssetKey 78cdedb65f8c4ecba6e671a14fb1ca629a70679d
 */
function Frame8() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full">
      <div className="basis-0 flex flex-col font-['Quatro:Regular',sans-serif] grow h-[48px] justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#1a1c16] text-[22px]">
        <p className="leading-[28px]">Generelle krav til gården</p>
      </div>
      <Button1 />
    </div>
  );
}

function StateLayer9() {
  return (
    <div className="box-border content-stretch flex items-center justify-center p-[11px] relative rounded-[100px] shrink-0" data-name="state-layer">
      <div className="relative rounded-[2px] shrink-0 size-[18px]" data-name="container">
        <div aria-hidden="true" className="absolute border-2 border-[#44483b] border-solid inset-0 pointer-events-none rounded-[2px]" />
      </div>
    </div>
  );
}

function LeadingElement6() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Leading element">
      <Checkboxes />
    </div>
  );
}

function Content7() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] tracking-[0.5px] w-full">
        <p className="leading-[24px]">Marker som gjennomgått</p>
      </div>
    </div>
  );
}

function StateLayer10() {
  return (
    <div className="basis-0 box-border content-stretch flex gap-[16px] grow items-center min-h-px min-w-px px-0 py-[8px] relative shrink-0 w-full" data-name="state-layer">
      <LeadingElement6 />
      <Content7 />
    </div>
  );
}

function SelectedChecklistHeading() {
  return (
    <div className="relative shrink-0 w-full" data-name="Selected checklist Heading">
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-start justify-center px-[40px] py-[12px] relative w-full">
          <Frame8 />
          <ListitemListItem0Density13 />
        </div>
      </div>
    </div>
  );
}

function TabContents() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center justify-center min-h-px min-w-px relative shrink-0" data-name="Tab Contents">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[14px] text-center text-nowrap tracking-[0.1px]">
        <p className="leading-[20px] whitespace-pre">Alle spørsmål</p>
      </div>
    </div>
  );
}

function StateLayer11() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="State-layer">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col items-center justify-center px-[16px] py-[14px] relative size-full">
          <TabContents />
          <div className="absolute bg-[#4a671e] bottom-0 h-[2px] left-0 right-0" data-name="Indicator" />
        </div>
      </div>
    </div>
  );
}

function TabContents1() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center justify-center min-h-px min-w-px relative shrink-0" data-name="Tab Contents">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#44483b] text-[14px] text-center text-nowrap tracking-[0.1px]">
        <p className="leading-[20px] whitespace-pre">Avvik (ekstern)</p>
      </div>
    </div>
  );
}

function StateLayer12() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-col grow items-center justify-center min-h-px min-w-px overflow-clip px-[16px] py-[14px] relative shrink-0" data-name="State-layer">
      <TabContents1 />
    </div>
  );
}

function TabContents2() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center justify-center min-h-px min-w-px relative shrink-0" data-name="Tab Contents">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#44483b] text-[14px] text-center text-nowrap tracking-[0.1px]">
        <p className="leading-[20px] whitespace-pre">Avvik (eget)</p>
      </div>
    </div>
  );
}

function StateLayer13() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="State-layer">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col items-center justify-center px-[16px] py-[14px] relative size-full">
          <TabContents2 />
        </div>
      </div>
    </div>
  );
}

function TabContents3() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center justify-center min-h-px min-w-px relative shrink-0" data-name="Tab Contents">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#44483b] text-[14px] text-center text-nowrap tracking-[0.1px]">
        <p className="leading-[20px] whitespace-pre">Forbedringspunkter</p>
      </div>
    </div>
  );
}

function StateLayer14() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="State-layer">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col items-center justify-center px-[16px] py-[14px] relative size-full">
          <TabContents3 />
        </div>
      </div>
    </div>
  );
}

function TabContents4() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center justify-center min-h-px min-w-px relative shrink-0" data-name="Tab Contents">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#44483b] text-[14px] text-center text-nowrap tracking-[0.1px]">
        <p className="leading-[20px] whitespace-pre">Positive observasjoner</p>
      </div>
    </div>
  );
}

function StateLayer15() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="State-layer">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col items-center justify-center px-[16px] py-[14px] relative size-full">
          <TabContents4 />
        </div>
      </div>
    </div>
  );
}

function TabGroup() {
  return (
    <div className="relative shrink-0 w-full" data-name="Tab group">
      <div className="size-full">
        <div className="box-border content-stretch cursor-pointer flex items-start pl-[52px] pr-0 py-0 relative w-full">
          <Tab1 />
          <Tab2 />
          <Tab3 />
          <Tab4 />
          <Tab5 />
        </div>
      </div>
    </div>
  );
}

function StateLayer16() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center px-[16px] py-[8px] size-full" />
      </div>
    </div>
  );
}

function StateLayer17() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center px-[16px] py-[8px] size-full" />
      </div>
    </div>
  );
}

function StateLayer18() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center px-[16px] py-[8px] size-full" />
      </div>
    </div>
  );
}

function StateLayer19() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center px-[16px] py-[8px] size-full" />
      </div>
    </div>
  );
}

function StateLayer20() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center px-[16px] py-[8px] size-full" />
      </div>
    </div>
  );
}

function StateLayer21() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center px-[16px] py-[8px] size-full" />
      </div>
    </div>
  );
}

function StateLayer22() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center px-[16px] py-[8px] size-full" />
      </div>
    </div>
  );
}

function StateLayer23() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center px-[16px] py-[8px] size-full" />
      </div>
    </div>
  );
}

function StateLayer24() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center px-[16px] py-[8px] size-full" />
      </div>
    </div>
  );
}

function StateLayer25() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center px-[16px] py-[8px] size-full" />
      </div>
    </div>
  );
}

function StateLayer26() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center px-[16px] py-[8px] size-full" />
      </div>
    </div>
  );
}

function StateLayer27() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center px-[16px] py-[8px] size-full" />
      </div>
    </div>
  );
}

function StateLayer28() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center px-[16px] py-[8px] size-full" />
      </div>
    </div>
  );
}

function StateLayer29() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center px-[16px] py-[8px] size-full" />
      </div>
    </div>
  );
}

function StateLayer30() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center px-[16px] py-[8px] size-full" />
      </div>
    </div>
  );
}

function StateLayer31() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center px-[16px] py-[8px] size-full" />
      </div>
    </div>
  );
}

function StateLayer32() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center px-[16px] py-[8px] size-full" />
      </div>
    </div>
  );
}

function Content8() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] min-w-full overflow-ellipsis overflow-hidden relative shrink-0 text-[#1a1c16] text-[14px] text-nowrap tracking-[0.1px] w-[min-content]">
        <p className="[white-space-collapse:collapse] leading-[20px] overflow-ellipsis overflow-hidden">Tidligere avvik</p>
      </div>
    </div>
  );
}

function StateLayer33() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative size-full">
          <Content8 />
        </div>
      </div>
    </div>
  );
}

function StateLayer34() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center px-[16px] py-[8px] size-full" />
      </div>
    </div>
  );
}

function StateLayer35() {
  return (
    <div className="box-border content-stretch flex gap-[8px] h-[32px] items-center justify-center pl-[8px] pr-[16px] py-[6px] relative shrink-0" data-name="state-layer">
      <ReportProblem className="relative shrink-0 size-[18px]" />
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#410002] text-[14px] text-center text-nowrap tracking-[0.1px]">
        <p className="leading-[20px] whitespace-pre">Stort avvik</p>
      </div>
    </div>
  );
}

/**
 * @figmaAssetKey 56a7d1d35bbcf6c0ac74a2c8c55896fd5432054b
 */
function LeadingElement7() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Leading element">
      <DeviationGradingchip2 />
    </div>
  );
}

function StateLayer36() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative size-full">
          <LeadingElement7 />
        </div>
      </div>
    </div>
  );
}

function StateLayer37() {
  return (
    <div className="box-border content-stretch flex gap-[8px] h-[32px] items-center justify-center pl-[8px] pr-[16px] py-[6px] relative shrink-0" data-name="state-layer">
      <ReportProblem className="relative shrink-0 size-[18px]" />
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#3d2c00] text-[14px] text-center text-nowrap tracking-[0.1px]">
        <p className="leading-[20px] whitespace-pre">Lite avvik</p>
      </div>
    </div>
  );
}

/**
 * @figmaAssetKey 56a7d1d35bbcf6c0ac74a2c8c55896fd5432054b
 */
function LeadingElement8() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Leading element">
      <DeviationGradingchip3 />
    </div>
  );
}

function StateLayer38() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative size-full">
          <LeadingElement8 />
        </div>
      </div>
    </div>
  );
}

function StateLayer39() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center px-[16px] py-[8px] size-full" />
      </div>
    </div>
  );
}

function StateLayer40() {
  return (
    <div className="box-border content-stretch flex gap-[8px] h-[32px] items-center justify-center pl-[8px] pr-[16px] py-[6px] relative shrink-0" data-name="state-layer">
      <ReportProblem className="relative shrink-0 size-[18px]" />
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#3d2c00] text-[14px] text-center text-nowrap tracking-[0.1px]">
        <p className="leading-[20px] whitespace-pre">Lite avvik</p>
      </div>
    </div>
  );
}

/**
 * @figmaAssetKey 56a7d1d35bbcf6c0ac74a2c8c55896fd5432054b
 */
function LeadingElement9() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Leading element">
      <DeviationGradingchip4 />
    </div>
  );
}

function StateLayer41() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative size-full">
          <LeadingElement9 />
        </div>
      </div>
    </div>
  );
}

function StateLayer42() {
  return (
    <div className="box-border content-stretch flex gap-[8px] h-[32px] items-center justify-center pl-[8px] pr-[16px] py-[6px] relative shrink-0" data-name="state-layer">
      <LocalTaxi className="relative shrink-0 size-[18px]" />
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#44483b] text-[14px] text-center text-nowrap tracking-[0.1px]">
        <p className="leading-[20px] whitespace-pre">Eget avvik</p>
      </div>
    </div>
  );
}

function LeadingElement10() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Leading element">
      <Suggestionchip />
    </div>
  );
}

function StateLayer43() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative size-full">
          <LeadingElement10 />
        </div>
      </div>
    </div>
  );
}

function StateLayer44() {
  return (
    <div className="box-border content-stretch flex gap-[8px] h-[32px] items-center justify-center pl-[8px] pr-[16px] py-[6px] relative shrink-0" data-name="state-layer">
      <ReportProblem className="relative shrink-0 size-[18px]" />
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#3d2100] text-[14px] text-center text-nowrap tracking-[0.1px]">
        <p className="leading-[20px] whitespace-pre">Avvik</p>
      </div>
    </div>
  );
}

/**
 * @figmaAssetKey 56a7d1d35bbcf6c0ac74a2c8c55896fd5432054b
 */
function LeadingElement11() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Leading element">
      <DeviationGradingchip5 />
    </div>
  );
}

function StateLayer45() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative size-full">
          <LeadingElement11 />
        </div>
      </div>
    </div>
  );
}

/**
 * @figmaAssetKey 5e61f19a6b04693475e9468b4b4d315a7f7861ec
 */
/**
 * @figmaAssetKey 5e61f19a6b04693475e9468b4b4d315a7f7861ec
 */
/**
 * @figmaAssetKey 5e61f19a6b04693475e9468b4b4d315a7f7861ec
 */
/**
 * @figmaAssetKey 5e61f19a6b04693475e9468b4b4d315a7f7861ec
 */
/**
 * @figmaAssetKey 5e61f19a6b04693475e9468b4b4d315a7f7861ec
 */
/**
 * @figmaAssetKey 5e61f19a6b04693475e9468b4b4d315a7f7861ec
 */
/**
 * @figmaAssetKey 5e61f19a6b04693475e9468b4b4d315a7f7861ec
 */
/**
 * @figmaAssetKey 5e61f19a6b04693475e9468b4b4d315a7f7861ec
 */
function TableColumn() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[160px]" data-name="Table Column">
      <Chipcells />
      <Chipcells1 />
      <Chipcells2 />
      <ChipCells type="Space" className="h-[80px] relative shrink-0 w-full" />
      <ChipCells type="Space" className="h-[80px] relative shrink-0 w-full" />
      <Chipcells3 />
      <Chipcells4 />
      <ChipCells type="Space" className="h-[80px] relative shrink-0 w-full" />
      <Chipcells5 />
      <Chipcells6 />
      <ChipCells type="Space" className="h-[80px] relative shrink-0 w-full" />
      <ChipCells type="Space" className="h-[80px] relative shrink-0 w-full" />
      <Chipcells7 />
      <ChipCells type="Space" className="h-[80px] relative shrink-0 w-full" />
      <ChipCells type="Space" className="h-[80px] relative shrink-0 w-full" />
      <ChipCells type="Space" className="h-[80px] relative shrink-0 w-full" />
      <ChipCells type="Space" className="h-[80px] relative shrink-0 w-full" />
    </div>
  );
}

function Content9() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] overflow-ellipsis overflow-hidden relative shrink-0 text-[#1a1c16] text-[14px] text-nowrap tracking-[0.1px] w-full">
        <p className="[white-space-collapse:collapse] leading-[20px] overflow-ellipsis overflow-hidden">Sjekklistepunkt</p>
      </div>
    </div>
  );
}

function StateLayer46() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center justify-center px-[16px] py-[8px] relative size-full">
          <Content9 />
        </div>
      </div>
    </div>
  );
}

function Content10() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full relative shrink-0 text-[#1a1c16] text-[14px] tracking-[0.25px] w-[min-content]">
        <p className="leading-[20px] whitespace-pre-wrap">{`1.1  OVERSIKT OVER DOKUMENTASJON, ANALYSERESULTATER OG SERTIFSERINGER.`}</p>
      </div>
    </div>
  );
}

function StateLayer47() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative size-full">
          <Content10 />
        </div>
      </div>
    </div>
  );
}

function Content11() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full relative shrink-0 text-[#1a1c16] text-[14px] tracking-[0.25px] w-[min-content]">
        <p className="leading-[20px]">1.1.1 - Har du oversikt over alle driftsmidler du har kjøpt, og alle produkter du har solgt?</p>
      </div>
    </div>
  );
}

function StateLayer48() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative size-full">
          <Content11 />
        </div>
      </div>
    </div>
  );
}

function Content12() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full relative shrink-0 text-[#1a1c16] text-[14px] tracking-[0.25px] w-[min-content]">
        <p className="leading-[20px]">1.1.2 - Har du en plan for hvordan du skal håndtere og eventuelt tilbakekalle helseskadelige produkter, samt varsle Mattilsynet og varemottaker?</p>
      </div>
    </div>
  );
}

function StateLayer49() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative size-full">
          <Content12 />
        </div>
      </div>
    </div>
  );
}

function Content13() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full relative shrink-0 text-[#1a1c16] text-[14px] tracking-[0.25px] w-[min-content]">
        <p className="leading-[20px]">1.1.3 - Arkiverer du analyseresultater, vedtak og tilbakemeldinger fra varemottaker og myndigheter?</p>
      </div>
    </div>
  );
}

function StateLayer50() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative size-full">
          <Content13 />
        </div>
      </div>
    </div>
  );
}

function Content14() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full relative shrink-0 text-[#1a1c16] text-[14px] tracking-[0.25px] w-[min-content]">
        <p className="leading-[20px]">1.1.4 - Er utstyr som krever det, kontrollert og sertifisert i tråd med forskrifter?</p>
      </div>
    </div>
  );
}

function StateLayer51() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative size-full">
          <Content14 />
        </div>
      </div>
    </div>
  );
}

function Content15() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full relative shrink-0 text-[#1a1c16] text-[14px] tracking-[0.25px] w-[min-content]">
        <p className="leading-[20px] whitespace-pre-wrap">{`1.2  GJØDSLINGSPLAN OG JORDPRØVER`}</p>
      </div>
    </div>
  );
}

function StateLayer52() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative size-full">
          <Content15 />
        </div>
      </div>
    </div>
  );
}

function Content16() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full relative shrink-0 text-[#1a1c16] text-[14px] tracking-[0.25px] w-[min-content]">
        <p className="leading-[20px]">1.2.1 - Har du en gyldig gjødslingsplan og skiftekart for i år basert på representative jordprøver?</p>
      </div>
    </div>
  );
}

function StateLayer53() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative size-full">
          <Content16 />
        </div>
      </div>
    </div>
  );
}

function Content17() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full relative shrink-0 text-[#1a1c16] text-[14px] tracking-[0.25px] w-[min-content]">
        <p className="leading-[20px]">1.1.2 - Noterer du gjødselmengdene som brukes?</p>
      </div>
    </div>
  );
}

function StateLayer54() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative size-full">
          <Content17 />
        </div>
      </div>
    </div>
  );
}

function Content18() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full relative shrink-0 text-[#1a1c16] text-[14px] tracking-[0.25px] w-[min-content]">
        <p className="leading-[20px]">1.1.4 - Er utstyr som krever det, kontrollert og sertifisert i tråd med forskrifter?</p>
      </div>
    </div>
  );
}

function StateLayer55() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative size-full">
          <Content18 />
        </div>
      </div>
    </div>
  );
}

function Content19() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full relative shrink-0 text-[#1a1c16] text-[14px] tracking-[0.25px] w-[min-content]">
        <p className="leading-[20px] whitespace-pre-wrap">{`1.3  LAGRING OG BRUK AV HUSDYRGJØDSEL	`}</p>
      </div>
    </div>
  );
}

function StateLayer56() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative size-full">
          <Content19 />
        </div>
      </div>
    </div>
  );
}

function Content20() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full relative shrink-0 text-[#1a1c16] text-[14px] tracking-[0.25px] w-[min-content]">
        <p className="leading-[20px]">1.3.1 - Er husdyrgjødsla kun spredt på dyrket jord eller på innmarksbeite som kommunen har godkjent som spredeareal?</p>
      </div>
    </div>
  );
}

function StateLayer57() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative size-full">
          <Content20 />
        </div>
      </div>
    </div>
  );
}

function Content21() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full relative shrink-0 text-[#1a1c16] text-[14px] tracking-[0.25px] w-[min-content]">
        <p className="leading-[20px]">1.3.2 - Har du spredt husdyrgjødsla i perioden fra 15. februar til 1. november og kun på snø- og frostfri mark?</p>
      </div>
    </div>
  );
}

function StateLayer58() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative size-full">
          <Content21 />
        </div>
      </div>
    </div>
  );
}

function Content22() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full relative shrink-0 text-[#1a1c16] text-[14px] tracking-[0.25px] w-[min-content]">
        <p className="leading-[20px]">1.3.3 -Hvis husdyrgjødsel spres uten nedmolding eller nedfelling: gjennomføres dette innen 1. september, eventuelt innen senere dato fastsatt av kommunen?</p>
      </div>
    </div>
  );
}

function StateLayer59() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative size-full">
          <Content22 />
        </div>
      </div>
    </div>
  );
}

function Content23() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[20px] min-w-full relative shrink-0 text-[#1a1c16] text-[14px] tracking-[0.25px] w-[min-content]">
        <p className="mb-0">{`	1.3.4 -`}</p>
        <p>Hvis det spres husdyrgjødsel på åpen åker: moldes gjødsla ned innen 18 timer?</p>
      </div>
    </div>
  );
}

function StateLayer60() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative size-full">
          <Content23 />
        </div>
      </div>
    </div>
  );
}

function Content24() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full relative shrink-0 text-[#1a1c16] text-[14px] tracking-[0.25px] w-[min-content]">
        <p className="leading-[20px]">1.3.5 - Har du kontrollert gjødsellageret i løpet av de siste 12 månedene?</p>
      </div>
    </div>
  );
}

function StateLayer61() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative size-full">
          <Content24 />
        </div>
      </div>
    </div>
  );
}

function Content25() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full relative shrink-0 text-[#1a1c16] text-[14px] tracking-[0.25px] w-[min-content]">
        <p className="leading-[20px]">1.3.6 - Har du nok lagringskapasitet til at du kan lagre gjødsla inntil det er tillatt å spre den (minimum 8 måneders lagringskapasitet)?</p>
      </div>
    </div>
  );
}

function StateLayer62() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative size-full">
          <Content25 />
        </div>
      </div>
    </div>
  );
}

/**
 * @figmaAssetKey 5e61f19a6b04693475e9468b4b4d315a7f7861ec
 */
/**
 * @figmaAssetKey 5e61f19a6b04693475e9468b4b4d315a7f7861ec
 */
/**
 * @figmaAssetKey 5e61f19a6b04693475e9468b4b4d315a7f7861ec
 */
/**
 * @figmaAssetKey 5e61f19a6b04693475e9468b4b4d315a7f7861ec
 */
/**
 * @figmaAssetKey 5e61f19a6b04693475e9468b4b4d315a7f7861ec
 */
/**
 * @figmaAssetKey 5e61f19a6b04693475e9468b4b4d315a7f7861ec
 */
/**
 * @figmaAssetKey 5e61f19a6b04693475e9468b4b4d315a7f7861ec
 */
/**
 * @figmaAssetKey 5e61f19a6b04693475e9468b4b4d315a7f7861ec
 */
/**
 * @figmaAssetKey 5e61f19a6b04693475e9468b4b4d315a7f7861ec
 */
/**
 * @figmaAssetKey 5e61f19a6b04693475e9468b4b4d315a7f7861ec
 */
/**
 * @figmaAssetKey 5e61f19a6b04693475e9468b4b4d315a7f7861ec
 */
/**
 * @figmaAssetKey 5e61f19a6b04693475e9468b4b4d315a7f7861ec
 */
/**
 * @figmaAssetKey 5e61f19a6b04693475e9468b4b4d315a7f7861ec
 */
/**
 * @figmaAssetKey 5e61f19a6b04693475e9468b4b4d315a7f7861ec
 */
/**
 * @figmaAssetKey 5e61f19a6b04693475e9468b4b4d315a7f7861ec
 */
/**
 * @figmaAssetKey 5e61f19a6b04693475e9468b4b4d315a7f7861ec
 */
/**
 * @figmaAssetKey 5e61f19a6b04693475e9468b4b4d315a7f7861ec
 */
function TableColumn1() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="Table Column">
      <Chipcells8 />
      <Chipcells9 />
      <Chipcells10 />
      <Chipcells11 />
      <Chipcells12 />
      <Chipcells13 />
      <Chipcells14 />
      <Chipcells15 />
      <Chipcells16 />
      <Chipcells17 />
      <Chipcells18 />
      <Chipcells19 />
      <Chipcells20 />
      <Chipcells21 />
      <Chipcells22 />
      <Chipcells23 />
      <Chipcells24 />
    </div>
  );
}

function Content26() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] overflow-ellipsis overflow-hidden relative shrink-0 text-[#1a1c16] text-[14px] text-nowrap tracking-[0.1px] w-full">
        <p className="[white-space-collapse:collapse] leading-[20px] overflow-ellipsis overflow-hidden">{`Foretakets svar	`}</p>
      </div>
    </div>
  );
}

function StateLayer63() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center justify-center px-[16px] py-[8px] relative size-full">
          <Content26 />
        </div>
      </div>
    </div>
  );
}

function StateLayer64() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center px-[16px] py-[8px] size-full" />
      </div>
    </div>
  );
}

function Content27() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full relative shrink-0 text-[#1a1c16] text-[14px] tracking-[0.25px] w-[min-content]">
        <p className="leading-[20px]">Ja (Fil)</p>
      </div>
    </div>
  );
}

function StateLayer65() {
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
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full relative shrink-0 text-[#1a1c16] text-[14px] tracking-[0.25px] w-[min-content]">
        <p className="leading-[20px]">Nei (egen avvik)</p>
      </div>
    </div>
  );
}

function StateLayer66() {
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
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full relative shrink-0 text-[#1a1c16] text-[14px] tracking-[0.25px] w-[min-content]">
        <p className="leading-[20px]">Ikke relevant</p>
      </div>
    </div>
  );
}

function StateLayer67() {
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
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full relative shrink-0 text-[#1a1c16] text-[14px] tracking-[0.25px] w-[min-content]">
        <p className="leading-[20px]">Ikke relevant</p>
      </div>
    </div>
  );
}

function StateLayer68() {
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

function StateLayer69() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center px-[16px] py-[8px] size-full" />
      </div>
    </div>
  );
}

function Content31() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full relative shrink-0 text-[#1a1c16] text-[14px] tracking-[0.25px] w-[min-content]">
        <p className="leading-[20px]">Ja</p>
      </div>
    </div>
  );
}

function StateLayer70() {
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
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full relative shrink-0 text-[#1a1c16] text-[14px] tracking-[0.25px] w-[min-content]">
        <p className="leading-[20px]">Ja</p>
      </div>
    </div>
  );
}

function StateLayer71() {
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
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full relative shrink-0 text-[#1a1c16] text-[14px] tracking-[0.25px] w-[min-content]">
        <p className="leading-[20px]">Ja</p>
      </div>
    </div>
  );
}

function StateLayer72() {
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
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full relative shrink-0 text-[#1a1c16] text-[14px] tracking-[0.25px] w-[min-content]">
        <p className="leading-[20px]">Ja</p>
      </div>
    </div>
  );
}

function StateLayer73() {
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
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full relative shrink-0 text-[#1a1c16] text-[14px] tracking-[0.25px] w-[min-content]">
        <p className="leading-[20px]">Ja</p>
      </div>
    </div>
  );
}

function StateLayer74() {
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
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full relative shrink-0 text-[#1a1c16] text-[14px] tracking-[0.25px] w-[min-content]">
        <p className="leading-[20px]">Ja</p>
      </div>
    </div>
  );
}

function StateLayer75() {
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
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full relative shrink-0 text-[#1a1c16] text-[14px] tracking-[0.25px] w-[min-content]">
        <p className="leading-[20px]">Ja</p>
      </div>
    </div>
  );
}

function StateLayer76() {
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
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full relative shrink-0 text-[#1a1c16] text-[14px] tracking-[0.25px] w-[min-content]">
        <p className="leading-[20px]">Ja</p>
      </div>
    </div>
  );
}

function StateLayer77() {
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
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full relative shrink-0 text-[#1a1c16] text-[14px] tracking-[0.25px] w-[min-content]">
        <p className="leading-[20px]">Ja</p>
      </div>
    </div>
  );
}

function StateLayer78() {
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
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full relative shrink-0 text-[#1a1c16] text-[14px] tracking-[0.25px] w-[min-content]">
        <p className="leading-[20px]">Ja</p>
      </div>
    </div>
  );
}

function StateLayer79() {
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

/**
 * @figmaAssetKey 5e61f19a6b04693475e9468b4b4d315a7f7861ec
 */
/**
 * @figmaAssetKey 5e61f19a6b04693475e9468b4b4d315a7f7861ec
 */
/**
 * @figmaAssetKey 5e61f19a6b04693475e9468b4b4d315a7f7861ec
 */
/**
 * @figmaAssetKey 5e61f19a6b04693475e9468b4b4d315a7f7861ec
 */
/**
 * @figmaAssetKey 5e61f19a6b04693475e9468b4b4d315a7f7861ec
 */
/**
 * @figmaAssetKey 5e61f19a6b04693475e9468b4b4d315a7f7861ec
 */
/**
 * @figmaAssetKey 5e61f19a6b04693475e9468b4b4d315a7f7861ec
 */
/**
 * @figmaAssetKey 5e61f19a6b04693475e9468b4b4d315a7f7861ec
 */
/**
 * @figmaAssetKey 5e61f19a6b04693475e9468b4b4d315a7f7861ec
 */
/**
 * @figmaAssetKey 5e61f19a6b04693475e9468b4b4d315a7f7861ec
 */
/**
 * @figmaAssetKey 5e61f19a6b04693475e9468b4b4d315a7f7861ec
 */
/**
 * @figmaAssetKey 5e61f19a6b04693475e9468b4b4d315a7f7861ec
 */
/**
 * @figmaAssetKey 5e61f19a6b04693475e9468b4b4d315a7f7861ec
 */
/**
 * @figmaAssetKey 5e61f19a6b04693475e9468b4b4d315a7f7861ec
 */
/**
 * @figmaAssetKey 5e61f19a6b04693475e9468b4b4d315a7f7861ec
 */
/**
 * @figmaAssetKey 5e61f19a6b04693475e9468b4b4d315a7f7861ec
 */
/**
 * @figmaAssetKey 5e61f19a6b04693475e9468b4b4d315a7f7861ec
 */
function TableColumn2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[152px]" data-name="Table Column">
      <Chipcells25 />
      <Chipcells26 />
      <Chipcells27 />
      <Chipcells28 />
      <Chipcells29 />
      <Chipcells30 />
      <Chipcells31 />
      <Chipcells32 />
      <Chipcells33 />
      <Chipcells34 />
      <Chipcells35 />
      <Chipcells36 />
      <Chipcells37 />
      <Chipcells38 />
      <Chipcells39 />
      <Chipcells40 />
      <Chipcells41 />
    </div>
  );
}

function Content41() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-center overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] overflow-ellipsis overflow-hidden relative shrink-0 text-[#1a1c16] text-[14px] text-nowrap tracking-[0.1px] w-full">
        <p className="[white-space-collapse:collapse] leading-[20px] overflow-ellipsis overflow-hidden">Del av grunnlaget</p>
      </div>
    </div>
  );
}

function StateLayer80() {
  return (
    <div className="basis-0 box-border content-stretch flex gap-[16px] grow items-center justify-center min-h-px min-w-px px-[16px] py-[8px] relative shrink-0" data-name="state-layer">
      <Content41 />
    </div>
  );
}

function StateLayer81() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center px-[16px] py-[8px] size-full" />
      </div>
    </div>
  );
}

function StateLayer82() {
  return (
    <div className="box-border content-stretch flex gap-[8px] h-[32px] items-center justify-center pl-[8px] pr-[16px] py-[6px] relative shrink-0" data-name="state-layer">
      <Check className="relative shrink-0 size-[18px]" />
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#174295] text-[14px] text-center text-nowrap tracking-[0.1px]">
        <p className="leading-[20px] whitespace-pre">Lagt til</p>
      </div>
    </div>
  );
}

function FilterChip() {
  return (
    <div className="bg-[#dae2ff] content-stretch flex h-[32px] items-center justify-center overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="Filter chip">
      <StateLayer82 />
    </div>
  );
}

function LeadingElement12() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Leading element">
      <Delavgrunnlaget />
    </div>
  );
}

function StateLayer83() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative size-full">
          <LeadingElement12 />
        </div>
      </div>
    </div>
  );
}

function StateLayer84() {
  return (
    <div className="box-border content-stretch flex gap-[8px] h-[32px] items-center justify-center pl-[8px] pr-[16px] py-[6px] relative shrink-0" data-name="state-layer">
      <Check className="relative shrink-0 size-[18px]" />
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#174295] text-[14px] text-center text-nowrap tracking-[0.1px]">
        <p className="leading-[20px] whitespace-pre">Lagt til</p>
      </div>
    </div>
  );
}

function FilterChip1() {
  return (
    <div className="bg-[#dae2ff] content-stretch flex h-[32px] items-center justify-center overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="Filter chip">
      <StateLayer84 />
    </div>
  );
}

function LeadingElement13() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Leading element">
      <Delavgrunnlaget1 />
    </div>
  );
}

function StateLayer85() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative size-full">
          <LeadingElement13 />
        </div>
      </div>
    </div>
  );
}

function StateLayer86() {
  return (
    <div className="box-border content-stretch flex gap-[8px] h-[32px] items-center justify-center pl-[8px] pr-[16px] py-[6px] relative shrink-0" data-name="state-layer">
      <Add className="relative shrink-0 size-[18px]" />
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#44483b] text-[14px] text-center text-nowrap tracking-[0.1px]">
        <p className="leading-[20px] whitespace-pre">Legg til</p>
      </div>
    </div>
  );
}

function FilterChip2() {
  return (
    <div className="h-[32px] relative rounded-[8px] shrink-0 w-full" data-name="Filter chip">
      <div className="content-stretch flex h-[32px] items-center justify-center overflow-clip relative rounded-[inherit] w-full">
        <StateLayer86 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#c4c8b7] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function LeadingElement14() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Leading element">
      <Delavgrunnlaget2 />
    </div>
  );
}

function StateLayer87() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative size-full">
          <LeadingElement14 />
        </div>
      </div>
    </div>
  );
}

function StateLayer88() {
  return (
    <div className="box-border content-stretch flex gap-[8px] h-[32px] items-center justify-center pl-[8px] pr-[16px] py-[6px] relative shrink-0" data-name="state-layer">
      <Check className="relative shrink-0 size-[18px]" />
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#174295] text-[14px] text-center text-nowrap tracking-[0.1px]">
        <p className="leading-[20px] whitespace-pre">Lagt til</p>
      </div>
    </div>
  );
}

function FilterChip3() {
  return (
    <div className="bg-[#dae2ff] content-stretch flex h-[32px] items-center justify-center overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="Filter chip">
      <StateLayer88 />
    </div>
  );
}

function LeadingElement15() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Leading element">
      <Delavgrunnlaget3 />
    </div>
  );
}

function StateLayer89() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative size-full">
          <LeadingElement15 />
        </div>
      </div>
    </div>
  );
}

function StateLayer90() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center px-[16px] py-[8px] size-full" />
      </div>
    </div>
  );
}

function StateLayer91() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-center justify-center px-[12px] py-[6px] relative shrink-0" data-name="state-layer">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#174295] text-[14px] text-center text-nowrap tracking-[0.1px]">
        <p className="leading-[20px] whitespace-pre">Fokusområde</p>
      </div>
    </div>
  );
}

/**
 * @figmaAssetKey 799af3d5c224f59f919d7aa86fea3d949fa90081
 */
function LeadingElement16() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Leading element">
      <Delavgrunnlaget4 />
    </div>
  );
}

function StateLayer92() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative size-full">
          <LeadingElement16 />
        </div>
      </div>
    </div>
  );
}

function StateLayer93() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-center justify-center px-[12px] py-[6px] relative shrink-0" data-name="state-layer">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#174295] text-[14px] text-center text-nowrap tracking-[0.1px]">
        <p className="leading-[20px] whitespace-pre">Fokusområde</p>
      </div>
    </div>
  );
}

/**
 * @figmaAssetKey 799af3d5c224f59f919d7aa86fea3d949fa90081
 */
function LeadingElement17() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Leading element">
      <Delavgrunnlaget5 />
    </div>
  );
}

function StateLayer94() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative size-full">
          <LeadingElement17 />
        </div>
      </div>
    </div>
  );
}

function StateLayer95() {
  return (
    <div className="box-border content-stretch flex gap-[8px] h-[32px] items-center justify-center pl-[8px] pr-[16px] py-[6px] relative shrink-0" data-name="state-layer">
      <Add className="relative shrink-0 size-[18px]" />
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#44483b] text-[14px] text-center text-nowrap tracking-[0.1px]">
        <p className="leading-[20px] whitespace-pre">Legg til</p>
      </div>
    </div>
  );
}

function FilterChip4() {
  return (
    <div className="h-[32px] relative rounded-[8px] shrink-0 w-full" data-name="Filter chip">
      <div className="content-stretch flex h-[32px] items-center justify-center overflow-clip relative rounded-[inherit] w-full">
        <StateLayer95 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#c4c8b7] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function LeadingElement18() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Leading element">
      <Delavgrunnlaget6 />
    </div>
  );
}

function StateLayer96() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative size-full">
          <LeadingElement18 />
        </div>
      </div>
    </div>
  );
}

function StateLayer97() {
  return (
    <div className="box-border content-stretch flex gap-[8px] h-[32px] items-center justify-center pl-[8px] pr-[16px] py-[6px] relative shrink-0" data-name="state-layer">
      <Add className="relative shrink-0 size-[18px]" />
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#44483b] text-[14px] text-center text-nowrap tracking-[0.1px]">
        <p className="leading-[20px] whitespace-pre">Legg til</p>
      </div>
    </div>
  );
}

function FilterChip5() {
  return (
    <div className="h-[32px] relative rounded-[8px] shrink-0 w-full" data-name="Filter chip">
      <div className="content-stretch flex h-[32px] items-center justify-center overflow-clip relative rounded-[inherit] w-full">
        <StateLayer97 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#c4c8b7] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function LeadingElement19() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Leading element">
      <Delavgrunnlaget7 />
    </div>
  );
}

function StateLayer98() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative size-full">
          <LeadingElement19 />
        </div>
      </div>
    </div>
  );
}

function StateLayer99() {
  return (
    <div className="box-border content-stretch flex gap-[8px] h-[32px] items-center justify-center pl-[8px] pr-[16px] py-[6px] relative shrink-0" data-name="state-layer">
      <Add className="relative shrink-0 size-[18px]" />
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#44483b] text-[14px] text-center text-nowrap tracking-[0.1px]">
        <p className="leading-[20px] whitespace-pre">Legg til</p>
      </div>
    </div>
  );
}

function FilterChip6() {
  return (
    <div className="h-[32px] relative rounded-[8px] shrink-0 w-full" data-name="Filter chip">
      <div className="content-stretch flex h-[32px] items-center justify-center overflow-clip relative rounded-[inherit] w-full">
        <StateLayer99 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#c4c8b7] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function LeadingElement20() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Leading element">
      <Delavgrunnlaget8 />
    </div>
  );
}

function StateLayer100() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative size-full">
          <LeadingElement20 />
        </div>
      </div>
    </div>
  );
}

function StateLayer101() {
  return (
    <div className="box-border content-stretch flex gap-[8px] h-[32px] items-center justify-center pl-[8px] pr-[16px] py-[6px] relative shrink-0" data-name="state-layer">
      <Add className="relative shrink-0 size-[18px]" />
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#44483b] text-[14px] text-center text-nowrap tracking-[0.1px]">
        <p className="leading-[20px] whitespace-pre">Legg til</p>
      </div>
    </div>
  );
}

function FilterChip7() {
  return (
    <div className="h-[32px] relative rounded-[8px] shrink-0 w-full" data-name="Filter chip">
      <div className="content-stretch flex h-[32px] items-center justify-center overflow-clip relative rounded-[inherit] w-full">
        <StateLayer101 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#c4c8b7] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function LeadingElement21() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Leading element">
      <Delavgrunnlaget9 />
    </div>
  );
}

function StateLayer102() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative size-full">
          <LeadingElement21 />
        </div>
      </div>
    </div>
  );
}

function StateLayer103() {
  return (
    <div className="box-border content-stretch flex gap-[8px] h-[32px] items-center justify-center pl-[8px] pr-[16px] py-[6px] relative shrink-0" data-name="state-layer">
      <Add className="relative shrink-0 size-[18px]" />
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#44483b] text-[14px] text-center text-nowrap tracking-[0.1px]">
        <p className="leading-[20px] whitespace-pre">Legg til</p>
      </div>
    </div>
  );
}

function FilterChip8() {
  return (
    <div className="h-[32px] relative rounded-[8px] shrink-0 w-full" data-name="Filter chip">
      <div className="content-stretch flex h-[32px] items-center justify-center overflow-clip relative rounded-[inherit] w-full">
        <StateLayer103 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#c4c8b7] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function LeadingElement22() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Leading element">
      <Delavgrunnlaget10 />
    </div>
  );
}

function StateLayer104() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative size-full">
          <LeadingElement22 />
        </div>
      </div>
    </div>
  );
}

function StateLayer105() {
  return (
    <div className="box-border content-stretch flex gap-[8px] h-[32px] items-center justify-center pl-[8px] pr-[16px] py-[6px] relative shrink-0" data-name="state-layer">
      <Add className="relative shrink-0 size-[18px]" />
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#44483b] text-[14px] text-center text-nowrap tracking-[0.1px]">
        <p className="leading-[20px] whitespace-pre">Legg til</p>
      </div>
    </div>
  );
}

function FilterChip9() {
  return (
    <div className="h-[32px] relative rounded-[8px] shrink-0 w-full" data-name="Filter chip">
      <div className="content-stretch flex h-[32px] items-center justify-center overflow-clip relative rounded-[inherit] w-full">
        <StateLayer105 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#c4c8b7] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function LeadingElement23() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Leading element">
      <Delavgrunnlaget11 />
    </div>
  );
}

function StateLayer106() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative size-full">
          <LeadingElement23 />
        </div>
      </div>
    </div>
  );
}

function StateLayer107() {
  return (
    <div className="box-border content-stretch flex gap-[8px] h-[32px] items-center justify-center pl-[8px] pr-[16px] py-[6px] relative shrink-0" data-name="state-layer">
      <Add className="relative shrink-0 size-[18px]" />
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#44483b] text-[14px] text-center text-nowrap tracking-[0.1px]">
        <p className="leading-[20px] whitespace-pre">Legg til</p>
      </div>
    </div>
  );
}

function FilterChip10() {
  return (
    <div className="h-[32px] relative rounded-[8px] shrink-0 w-full" data-name="Filter chip">
      <div className="content-stretch flex h-[32px] items-center justify-center overflow-clip relative rounded-[inherit] w-full">
        <StateLayer107 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#c4c8b7] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function LeadingElement24() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Leading element">
      <Delavgrunnlaget12 />
    </div>
  );
}

function StateLayer108() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative size-full">
          <LeadingElement24 />
        </div>
      </div>
    </div>
  );
}

function StateLayer109() {
  return (
    <div className="box-border content-stretch flex gap-[8px] h-[32px] items-center justify-center pl-[8px] pr-[16px] py-[6px] relative shrink-0" data-name="state-layer">
      <Add className="relative shrink-0 size-[18px]" />
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#44483b] text-[14px] text-center text-nowrap tracking-[0.1px]">
        <p className="leading-[20px] whitespace-pre">Legg til</p>
      </div>
    </div>
  );
}

function FilterChip11() {
  return (
    <div className="h-[32px] relative rounded-[8px] shrink-0 w-full" data-name="Filter chip">
      <div className="content-stretch flex h-[32px] items-center justify-center overflow-clip relative rounded-[inherit] w-full">
        <StateLayer109 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#c4c8b7] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function LeadingElement25() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Leading element">
      <Delavgrunnlaget13 />
    </div>
  );
}

function StateLayer110() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative size-full">
          <LeadingElement25 />
        </div>
      </div>
    </div>
  );
}

/**
 * @figmaAssetKey 5e61f19a6b04693475e9468b4b4d315a7f7861ec
 */
/**
 * @figmaAssetKey 5e61f19a6b04693475e9468b4b4d315a7f7861ec
 */
/**
 * @figmaAssetKey 5e61f19a6b04693475e9468b4b4d315a7f7861ec
 */
/**
 * @figmaAssetKey 5e61f19a6b04693475e9468b4b4d315a7f7861ec
 */
/**
 * @figmaAssetKey 5e61f19a6b04693475e9468b4b4d315a7f7861ec
 */
/**
 * @figmaAssetKey 5e61f19a6b04693475e9468b4b4d315a7f7861ec
 */
/**
 * @figmaAssetKey 5e61f19a6b04693475e9468b4b4d315a7f7861ec
 */
/**
 * @figmaAssetKey 5e61f19a6b04693475e9468b4b4d315a7f7861ec
 */
/**
 * @figmaAssetKey 5e61f19a6b04693475e9468b4b4d315a7f7861ec
 */
/**
 * @figmaAssetKey 5e61f19a6b04693475e9468b4b4d315a7f7861ec
 */
/**
 * @figmaAssetKey 5e61f19a6b04693475e9468b4b4d315a7f7861ec
 */
/**
 * @figmaAssetKey 5e61f19a6b04693475e9468b4b4d315a7f7861ec
 */
/**
 * @figmaAssetKey 5e61f19a6b04693475e9468b4b4d315a7f7861ec
 */
/**
 * @figmaAssetKey 5e61f19a6b04693475e9468b4b4d315a7f7861ec
 */
/**
 * @figmaAssetKey 5e61f19a6b04693475e9468b4b4d315a7f7861ec
 */
/**
 * @figmaAssetKey 5e61f19a6b04693475e9468b4b4d315a7f7861ec
 */
/**
 * @figmaAssetKey 5e61f19a6b04693475e9468b4b4d315a7f7861ec
 */
function TableColumn3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[154px]" data-name="Table Column">
      <Chipcells42 />
      <Chipcells43 />
      <Chipcells44 />
      <Chipcells45 />
      <Chipcells46 />
      <Chipcells47 />
      <Chipcells48 />
      <Chipcells49 />
      <Chipcells50 />
      <Chipcells51 />
      <Chipcells52 />
      <Chipcells53 />
      <Chipcells54 />
      <Chipcells55 />
      <Chipcells56 />
      <Chipcells57 />
      <Chipcells58 />
    </div>
  );
}

/**
 * @figmaAssetKey 13275f861902308173a6e7c14f7c5aec03fa6345
 */
/**
 * @figmaAssetKey a720761d66b52800b8061dce03dda4fb6eabf107
 */
/**
 * @figmaAssetKey 13275f861902308173a6e7c14f7c5aec03fa6345
 */
/**
 * @figmaAssetKey 13275f861902308173a6e7c14f7c5aec03fa6345
 */
/**
 * @figmaAssetKey 13275f861902308173a6e7c14f7c5aec03fa6345
 */
/**
 * @figmaAssetKey 13275f861902308173a6e7c14f7c5aec03fa6345
 */
/**
 * @figmaAssetKey 13275f861902308173a6e7c14f7c5aec03fa6345
 */
/**
 * @figmaAssetKey 13275f861902308173a6e7c14f7c5aec03fa6345
 */
/**
 * @figmaAssetKey 13275f861902308173a6e7c14f7c5aec03fa6345
 */
/**
 * @figmaAssetKey 13275f861902308173a6e7c14f7c5aec03fa6345
 */
/**
 * @figmaAssetKey 13275f861902308173a6e7c14f7c5aec03fa6345
 */
/**
 * @figmaAssetKey 13275f861902308173a6e7c14f7c5aec03fa6345
 */
/**
 * @figmaAssetKey 13275f861902308173a6e7c14f7c5aec03fa6345
 */
/**
 * @figmaAssetKey 13275f861902308173a6e7c14f7c5aec03fa6345
 */
/**
 * @figmaAssetKey 13275f861902308173a6e7c14f7c5aec03fa6345
 */
/**
 * @figmaAssetKey 13275f861902308173a6e7c14f7c5aec03fa6345
 */
/**
 * @figmaAssetKey 13275f861902308173a6e7c14f7c5aec03fa6345
 */
/**
 * @figmaAssetKey 13275f861902308173a6e7c14f7c5aec03fa6345
 */
function KlsTable() {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px overflow-x-clip overflow-y-auto relative shrink-0 w-full" data-name="KLS Table">
      <TableColumn3 />
      <TableColumn />
      <TableColumn1 />
      {[...Array(2).keys()].map((_, i) => (
        <TableColumn2 key={i} />
      ))}
      <TableColumn3 />
    </div>
  );
}

/**
 * @figmaAssetKey a720761d66b52800b8061dce03dda4fb6eabf107
 */
function QuestionList() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px overflow-clip relative shrink-0 w-full" data-name="Question list">
      <Tabs />
      <KlsTable />
    </div>
  );
}

function SelectedChecklistQuestions() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start min-h-px min-w-px relative shrink-0 z-[1]" data-name="Selected checklist questions">
      <SelectedChecklistHeading />
      <QuestionList />
    </div>
  );
}

export default function Revisjonsgrunnlag() {
  return (
    <div className="content-stretch flex isolate items-start relative size-full" data-name="Revisjonsgrunnlag">
      <Checklists />
      <VerticalFullWidth className="content-stretch flex flex-col h-full items-center overflow-clip relative shrink-0 w-px z-[2]" />
      <SelectedChecklistQuestions />
    </div>
  );
}