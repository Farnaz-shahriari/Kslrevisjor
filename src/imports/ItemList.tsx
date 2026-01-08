import { img, img1 } from "./svg-cvia9";
type StatusIconProps = {
  className?: string;
  answerState?: "Done" | "Pending";
};

/**
 * @figmaAssetKey c465e6ac18df7fa752cd4e47e6da1a0124522bef
 */
/**
 * @figmaAssetKey ad18286645889f6a53b0a56f0c05ffe45990ff81
 */
/**
 * @figmaAssetKey 0f47fbd8e03e0cea34f157ceddaf4dce70017a24
 */
function StatusIcon({ className, answerState = "Pending" }: StatusIconProps) {
  if (answerState === "Done") {
    return (
      <div className={className} data-name="answerState=Done">
        <Check_circle_outline />
      </div>
    );
  }
  return (
    <div className={className} data-name="answerState=Pending">
      <Pending1 />
    </div>
  );
}

/**
 * @figmaAssetKey f6cacb6cf25d564e77204186f090070131298330
 */
function Pending({ className }: { className?: string }) {
  return (
    <div className={className} data-name="pending">
      <Pending2 />
    </div>
  );
}

/**
 * @figmaAssetKey 5345a50996f643634a37cc011c5535783a64d458
 */
function BuildingBlocksStateLayer1Enabled({ className }: { className?: string }) {
  return <div className={className} data-name="Building Blocks/state-layer/1. enabled" />;
}

function Content() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full relative shrink-0 text-[#174295] text-[16px] tracking-[0.5px] w-[min-content]">
        <p className="leading-[24px]">Før du starter med egenrevisjonen</p>
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

function Content1() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full relative shrink-0 text-[#44483b] text-[16px] tracking-[0.5px] w-[min-content]">
        <p className="leading-[24px]">Produksjoner</p>
      </div>
    </div>
  );
}

function StateLayer1() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative size-full">
          <Content1 />
        </div>
      </div>
    </div>
  );
}

function QuestionText() {
  return (
    <div className="content-stretch flex gap-[8px] items-start leading-[0] relative shrink-0 text-[#44483b] text-[14px] text-nowrap tracking-[0.1px] w-full" data-name="Question text">
      <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center overflow-ellipsis overflow-hidden relative shrink-0">
        <p className="leading-[20px] overflow-ellipsis overflow-hidden text-[14px] text-nowrap whitespace-pre">1.2</p>
      </div>
      <div className="basis-0 flex flex-col font-['Manrope:Medium',sans-serif] font-medium grow justify-center min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0">
        <p className="[white-space-collapse:collapse] leading-[20px] overflow-ellipsis overflow-hidden text-[14px] text-nowrap">KRAV TIL PRODUKSJONSSTED, Klikk på neste spørsmål for å starte med denne gruppen.</p>
      </div>
    </div>
  );
}

function Content2() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <QuestionText />
    </div>
  );
}

function QuestionText1() {
  return (
    <div className="content-stretch flex gap-[8px] items-start leading-[0] relative shrink-0 text-[#44483b] text-[14px] text-nowrap tracking-[0.1px] w-full" data-name="Question text">
      <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center overflow-ellipsis overflow-hidden relative shrink-0">
        <p className="leading-[20px] overflow-ellipsis overflow-hidden text-[14px] text-nowrap whitespace-pre">1.3</p>
      </div>
      <div className="basis-0 flex flex-col font-['Manrope:Medium',sans-serif] font-medium grow justify-center min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0">
        <p className="[white-space-collapse:collapse] leading-[20px] overflow-ellipsis overflow-hidden text-[14px] text-nowrap">KRAV TIL KSL - BRUK AV EGNE RÅVARER, Brukes det råvarer fra egen primærproduksjon</p>
      </div>
    </div>
  );
}

function Content3() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <QuestionText1 />
    </div>
  );
}

function QuestionText2() {
  return (
    <div className="content-stretch flex gap-[8px] items-start leading-[0] relative shrink-0 text-[#44483b] text-[14px] text-nowrap tracking-[0.1px] w-full" data-name="Question text">
      <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center overflow-ellipsis overflow-hidden relative shrink-0">
        <p className="leading-[20px] overflow-ellipsis overflow-hidden text-[14px] text-nowrap whitespace-pre">1.4</p>
      </div>
      <div className="basis-0 flex flex-col font-['Manrope:Medium',sans-serif] font-medium grow justify-center min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0">
        <p className="[white-space-collapse:collapse] leading-[20px] overflow-ellipsis overflow-hidden text-[14px] text-nowrap">KRAV TIL KSL - NORSKE RÅVARER KJØPT DIREKTE FRA PRIMÆRPRODUSENTER</p>
      </div>
    </div>
  );
}

function Content4() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <QuestionText2 />
    </div>
  );
}

function QuestionText3() {
  return (
    <div className="content-stretch flex gap-[8px] items-start leading-[0] relative shrink-0 text-[#44483b] text-[14px] text-nowrap tracking-[0.1px] w-full" data-name="Question text">
      <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center overflow-ellipsis overflow-hidden relative shrink-0">
        <p className="leading-[20px] overflow-ellipsis overflow-hidden text-[14px] text-nowrap whitespace-pre">1.5</p>
      </div>
      <div className="basis-0 flex flex-col font-['Manrope:Medium',sans-serif] font-medium grow justify-center min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0">
        <p className="[white-space-collapse:collapse] leading-[20px] overflow-ellipsis overflow-hidden text-[14px] text-nowrap">KRAV TIL KSL - NORSKE RÅVARER OG / ELLER FOREDLEDE NÆRINGSMIDLER KJØPT FRA ANDRE VIRKSOMHETER</p>
      </div>
    </div>
  );
}

function Content5() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <QuestionText3 />
    </div>
  );
}

function QuestionText4() {
  return (
    <div className="content-stretch flex font-['Manrope:Medium',sans-serif] font-medium gap-[8px] items-start leading-[0] relative shrink-0 text-[#44483b] text-[14px] text-nowrap tracking-[0.1px] w-full" data-name="Question text">
      <div className="flex flex-col justify-center overflow-ellipsis overflow-hidden relative shrink-0">
        <p className="leading-[20px] overflow-ellipsis overflow-hidden text-[14px] text-nowrap whitespace-pre">{`1.6 `}</p>
      </div>
      <div className="basis-0 flex flex-col grow justify-center min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0">
        <p className="[white-space-collapse:collapse] leading-[20px] overflow-ellipsis overflow-hidden text-[14px] text-nowrap">KRAV TIL KVALITETSSYSTEM - NORSKE RÅVARER FRA ANDRE PRIMÆRPRODUKSJONER ENN LANDBRUK</p>
      </div>
    </div>
  );
}

function Content6() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <QuestionText4 />
    </div>
  );
}

function QuestionText5() {
  return (
    <div className="content-stretch flex font-['Manrope:Medium',sans-serif] font-medium gap-[8px] items-start leading-[0] relative shrink-0 text-[#44483b] text-[14px] text-nowrap tracking-[0.1px] w-full" data-name="Question text">
      <div className="flex flex-col justify-center overflow-ellipsis overflow-hidden relative shrink-0">
        <p className="leading-[20px] overflow-ellipsis overflow-hidden text-[14px] text-nowrap whitespace-pre">1.7</p>
      </div>
      <div className="basis-0 flex flex-col grow justify-center min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0">
        <p className="[white-space-collapse:collapse] leading-[20px] overflow-ellipsis overflow-hidden text-[14px] text-nowrap">BRUK AV SPESIALITET-MERKET</p>
      </div>
    </div>
  );
}

function Content7() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <QuestionText5 />
    </div>
  );
}

function QuestionText6() {
  return (
    <div className="content-stretch flex font-['Manrope:Medium',sans-serif] font-medium gap-[8px] items-start leading-[0] relative shrink-0 text-[#44483b] text-[14px] text-nowrap tracking-[0.1px] w-full" data-name="Question text">
      <div className="flex flex-col justify-center overflow-ellipsis overflow-hidden relative shrink-0">
        <p className="leading-[20px] overflow-ellipsis overflow-hidden text-[14px] text-nowrap whitespace-pre">1.8</p>
      </div>
      <div className="basis-0 flex flex-col grow justify-center min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0">
        <p className="[white-space-collapse:collapse] leading-[20px] overflow-ellipsis overflow-hidden text-[14px] text-nowrap">OPPFØLGING, VARSLING OG RAPPORTERING</p>
      </div>
    </div>
  );
}

function Content8() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <QuestionText6 />
    </div>
  );
}

function ThemeQuestions() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow isolate items-start min-h-px min-w-px relative shrink-0 w-full" data-name="Theme Questions">
      <DividerwithSubhead />
      <ChecklistQuestion />
      <ChecklistQuestion1 />
      <ChecklistQuestion2 />
      <ChecklistQuestion3 />
      <ChecklistQuestion4 />
      <ChecklistQuestion5 />
      <ChecklistQuestion6 />
    </div>
  );
}

export default function ItemList() {
  return (
    <div className="relative size-full" data-name="item List">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] items-start px-[24px] py-[8px] relative size-full">
          <ListitemListItem0Density />
          <ListitemListItem0Density1 />
          <ThemeQuestions />
        </div>
      </div>
    </div>
  );
}