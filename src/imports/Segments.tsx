import { imgIcon, imgVector, imgVector1, imgVector2 } from "./svg-unedn";

/**
 * @figmaAssetKey bd6413481386c99d2157f176c8dbb57dfd6ec17e
 */
function Stars({ className }: { className?: string }) {
  return (
    <div className={className} data-name="stars">
      <div className="absolute inset-[8.333%]" data-name="icon">
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(29, 27, 32, 1)" } as React.CSSProperties}>
          <img alt="" className="block max-w-none size-full" src={imgIcon} />
        </div>
      </div>
    </div>
  );
}
type BadgesProps = {
  className?: string;
  badgeLabel?: string;
  size?: "Large" | "Small";
};

/**
 * @figmaAssetKey c4cac4c34bca0826ffee133d44ef79fffa81bacb
 */
function Badges({ className, badgeLabel = "3", size = "Large" }: BadgesProps) {
  if (size === "Small") {
    return (
      <div className={className} data-name="Size=Small">
        <div className="shrink-0 size-[2px]" data-name="Spacer" />
      </div>
    );
  }
  return (
    <div className={className} data-name="Size=Large">
      <div className="basis-0 flex flex-col font-['Roboto:Medium',sans-serif] font-medium grow justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[11px] text-center text-white tracking-[0.5px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[16px]">{badgeLabel}</p>
      </div>
    </div>
  );
}
type ChecklistProps = {
  className?: string;
  style?: "Filled" | "Outlined" | "Round" | "Sharp" | "Two Tone";
};

/**
 * @figmaAssetKey 443862074c53b2983fd82631ef622ef2d66f6088
 */
function Checklist({ className, style = "Filled" }: ChecklistProps) {
  if (style === "Outlined") {
    return (
      <div className={className} data-name="Style=Outlined">
        <div className="absolute inset-[18.6%_8.33%]" data-name="Vector">
          <img alt="" className="block max-w-none size-full" src={imgVector} />
        </div>
      </div>
    );
  }
  if (style === "Round") {
    return (
      <div className={className} data-name="Style=Round">
        <div className="absolute inset-[20.32%_9.18%]" data-name="Vector">
          <img alt="" className="block max-w-none size-full" src={imgVector1} />
        </div>
      </div>
    );
  }
  if (style === "Sharp") {
    return (
      <div className={className} data-name="Style=Sharp">
        <div className="absolute inset-[18.6%_8.33%]" data-name="Vector">
          <img alt="" className="block max-w-none size-full" src={imgVector} />
        </div>
      </div>
    );
  }
  if (style === "Two Tone") {
    return (
      <div className={className} data-name="Style=Two Tone">
        <div className="absolute inset-[16.37%_8.33%_20.84%_8.33%]" data-name="Vector">
          <img alt="" className="block max-w-none size-full" src={imgVector2} />
        </div>
      </div>
    );
  }
  return (
    <div className={className} data-name="Style=Filled">
      <div className="absolute inset-[18.6%_8.33%]" data-name="Vector">
        <img alt="" className="block max-w-none size-full" src={imgVector} />
      </div>
    </div>
  );
}

/**
 * @figmaAssetKey c1b243c1c48c7413a42719a33a72235237e91b19
 */
/**
 * @figmaAssetKey c1b243c1c48c7413a42719a33a72235237e91b19
 */
function StateLayer() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="State layer">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center p-[16px] relative w-full">
          <Icon />
          <Icon1 />
          <p className="font-['Manrope:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#44483b] text-[14px] text-nowrap tracking-[0.1px] whitespace-pre">Forside</p>
        </div>
      </div>
    </div>
  );
}

function Section() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Section 1">
      <BuildingBlocksNavigationrailHorizontalnavitem />
    </div>
  );
}

function SectionHeader() {
  return (
    <div className="h-[36px] relative rounded-[100px] shrink-0 w-full" data-name="Section Header">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[36px] items-center px-[16px] py-0 relative w-full">
          <p className="[white-space-collapse:collapse] basis-0 font-['Manrope:SemiBold',sans-serif] font-semibold grow leading-[16px] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#44483b] text-[12px] text-nowrap tracking-[0.5px]">EGENREVISJON</p>
        </div>
      </div>
    </div>
  );
}

/**
 * @figmaAssetKey 443862074c53b2983fd82631ef622ef2d66f6088
 */
function StateLayer1() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="State layer">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center p-[16px] relative w-full">
          <Icon2 />
          <Icon3 />
          <p className="font-['Manrope:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#44483b] text-[14px] text-nowrap tracking-[0.1px] whitespace-pre">Lokalmat</p>
          <Badges size="Small" className="absolute bg-[#ba1a1a] box-border content-stretch flex items-center justify-center left-[34px] p-[2px] rounded-[100px] top-[16px]" />
        </div>
      </div>
    </div>
  );
}

/**
 * @figmaAssetKey 443862074c53b2983fd82631ef622ef2d66f6088
 */
/**
 * @figmaAssetKey 443862074c53b2983fd82631ef622ef2d66f6088
 */
function StateLayer2() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="State layer">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center p-[16px] relative w-full">
          <Icon4 />
          <Icon5 />
          <p className="font-['Manrope:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#174295] text-[14px] text-nowrap tracking-[0.1px] whitespace-pre">Spesialitet</p>
        </div>
      </div>
    </div>
  );
}

/**
 * @figmaAssetKey 443862074c53b2983fd82631ef622ef2d66f6088
 */
function StateLayer3() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="State layer">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center p-[16px] relative w-full">
          <Stars className="absolute left-[16px] opacity-0 size-[24px] top-[16px]" />
          <Icon6 />
          <p className="font-['Manrope:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#44483b] text-[14px] text-nowrap tracking-[0.1px] whitespace-pre">Nyt Norge</p>
        </div>
      </div>
    </div>
  );
}

function Section1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Section 2">
      <SectionHeader />
      <BuildingBlocksNavigationrailHorizontalnavitem1 />
      <BuildingBlocksNavigationrailHorizontalnavitem2 />
      <Navitem08 />
    </div>
  );
}

/**
 * @figmaAssetKey 29536c36f723ab490444db302b0f8d3a01bc2470
 */
function StateLayer4() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="State layer">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center p-[16px] relative w-full">
          <Stars className="absolute left-[16px] opacity-0 size-[24px] top-[16px]" />
          <Icon7 />
          <p className="[white-space-collapse:collapse] basis-0 font-['Manrope:SemiBold',sans-serif] font-semibold grow leading-[20px] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#44483b] text-[14px] text-nowrap tracking-[0.1px]">Foretaksopplysninger</p>
        </div>
      </div>
    </div>
  );
}

/**
 * @figmaAssetKey d991ef7d8ad5b328f190d12c551d340ab07595c6
 */
/**
 * @figmaAssetKey d991ef7d8ad5b328f190d12c551d340ab07595c6
 */
function StateLayer5() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="State layer">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center p-[16px] relative w-full">
          <Icon8 />
          <Icon9 />
          <p className="font-['Manrope:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#44483b] text-[14px] text-nowrap tracking-[0.1px] whitespace-pre">Avvik og notater</p>
        </div>
      </div>
    </div>
  );
}

/**
 * @figmaAssetKey 4e1d37ebb63b8d2d7a14a163159819292b4280f5
 */
function StateLayer6() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="State layer">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center p-[16px] relative w-full">
          <Stars className="absolute left-[16px] opacity-0 size-[24px] top-[16px]" />
          <Icon10 />
          <p className="font-['Manrope:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#44483b] text-[14px] text-nowrap tracking-[0.1px] whitespace-pre">Rapporter</p>
        </div>
      </div>
    </div>
  );
}

/**
 * @figmaAssetKey 999d2cf2ec06d3492536457fc2ec4432664d2547
 */
function StateLayer7() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="State layer">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center p-[16px] relative w-full">
          <Stars className="absolute left-[16px] opacity-0 size-[24px] top-[16px]" />
          <Icon11 />
          <p className="font-['Manrope:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#44483b] text-[14px] text-nowrap tracking-[0.1px] whitespace-pre">Opplastede filer</p>
        </div>
      </div>
    </div>
  );
}

function Section2() {
  return (
    <div className="content-stretch cursor-pointer flex flex-col items-start relative shrink-0 w-full" data-name="Section 3">
      <Navitem10 />
      <Navitem11 />
      <Navitem12 />
      <Navitem13 />
    </div>
  );
}

export default function Segments() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative size-full" data-name="Segments">
      <Section />
      <Section1 />
      <Section2 />
    </div>
  );
}