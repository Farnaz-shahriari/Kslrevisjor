import { imgIcon } from "./svg-kblq4";

/**
 * @figmaAssetKey b0d74a8e7a6e62bc018a7c054d2b604cf22cf59d
 */
function IconsCheck24Px({ className }: { className?: string }) {
  return (
    <div className={className} data-name="Icons/check_24px">
      <div className="absolute inset-[23.29%_12.5%_20.83%_14.21%]" data-name="icon">
        <img alt="" className="block max-w-none size-full" src={imgIcon} />
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

function LeadingElement() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[1000px] shrink-0" data-name="Leading element">
      <Genericavatar />
    </div>
  );
}

function Content() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center leading-[0] min-h-px min-w-px overflow-clip relative shrink-0 tracking-[0.5px]" data-name="Content">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[#44483b] text-[12px] w-full">
        <ol className="list-decimal" start="1">
          <li className="ms-[18px]">
            <span className="leading-[16px]">mars 2025</span>
          </li>
        </ol>
      </div>
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#1a1c16] text-[16px] w-full">
        <p className="leading-[24px]">Lukking av avvik bekreftet.</p>
      </div>
    </div>
  );
}

function TrailingElement() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="Trailing element">
      <p className="font-['Manrope:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#44483b] text-[11px] text-nowrap text-right tracking-[0.5px] whitespace-pre">Tiltak og bevis</p>
      <Arrow_drop_down />
    </div>
  );
}

function StateLayer() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative size-full">
          <LeadingElement />
          <Content />
          <TrailingElement />
        </div>
      </div>
    </div>
  );
}

/**
 * @figmaAssetKey 5e61f19a6b04693475e9468b4b4d315a7f7861ec
 */
export default function ListItemListItem0Density() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative size-full" data-name="List item/List Item: 0 Density">
      <BuildingBlocksStateLayer1Enabled className="absolute inset-0" />
      <StateLayer />
    </div>
  );
}