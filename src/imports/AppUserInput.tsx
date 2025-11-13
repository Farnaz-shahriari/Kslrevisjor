import { imgVector, imgVector1, imgVector2, imgVector3, imgVector4, imgVector5 } from "./svg-l8k43";
type EditProps = {
  className?: string;
  style?: "Filled" | "Outlined" | "Round" | "Sharp" | "Two Tone";
};

/**
 * @figmaAssetKey 7d6712169194ce197120596537d05820d8a366ec
 */
function Edit({ className, style = "Filled" }: EditProps) {
  if (style === "Outlined") {
    return (
      <div className={className} data-name="Style=Outlined">
        <div className="absolute inset-[12.5%_12.49%]" data-name="Vector">
          <img alt="" className="block max-w-none size-full" src={imgVector} />
        </div>
      </div>
    );
  }
  if (style === "Round") {
    return (
      <div className={className} data-name="Style=Round">
        <div className="absolute inset-[12.495%]" data-name="Vector">
          <img alt="" className="block max-w-none size-full" src={imgVector1} />
        </div>
      </div>
    );
  }
  if (style === "Sharp") {
    return (
      <div className={className} data-name="Style=Sharp">
        <div className="absolute inset-[11.646%]" data-name="Vector">
          <img alt="" className="block max-w-none size-full" src={imgVector2} />
        </div>
      </div>
    );
  }
  if (style === "Two Tone") {
    return (
      <div className={className} data-name="Style=Two Tone">
        <div className="absolute inset-[37.58%_37.58%_20.84%_20.83%]" data-name="Vector">
          <img alt="" className="block max-w-none size-full" src={imgVector3} />
        </div>
        <div className="absolute inset-[12.5%_12.49%_12.5%_12.5%]" data-name="Vector">
          <img alt="" className="block max-w-none size-full" src={imgVector4} />
        </div>
      </div>
    );
  }
  return (
    <div className={className} data-name="Style=Filled">
      <div className="absolute inset-[12.495%]" data-name="Vector">
        <img alt="" className="block max-w-none size-full" src={imgVector5} />
      </div>
    </div>
  );
}

function Content() {
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

function StateLayer() {
  return (
    <div className="content-stretch flex h-[32px] items-center justify-center relative shrink-0 w-full" data-name="State-layer">
      <div className="relative shrink-0 size-[20px]" data-name="Icon">
        <Edit style="Outlined" className="absolute inset-0 overflow-clip" />
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="box-border content-stretch flex gap-[16px] items-start px-0 py-[8px] relative shrink-0 w-full">
      <Content />
      <div className="content-stretch flex items-center justify-center relative shrink-0 size-[48px]" data-name="Icon button">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[100px] shrink-0 w-[28px]" data-name="Content">
          <StateLayer />
        </div>
      </div>
    </div>
  );
}

export default function AppUserInput() {
  return (
    <button className="box-border content-stretch cursor-pointer flex flex-col gap-[8px] items-start justify-center pb-0 pt-[8px] px-0 relative size-full" data-name="App User Input">
      <Frame />
    </button>
  );
}