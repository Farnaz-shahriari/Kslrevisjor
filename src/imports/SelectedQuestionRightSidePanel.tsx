import svgPaths from "./svg-qltvqbo7b6";
import imgThumbnail from "figma:asset/bccf40ef0d51ade359900027c9bd416d09e9658d.png";
import { img, imgIcon, imgVector, imgVector1, imgVector2, imgVector3, imgVector4, imgVector5, imgRipple, imgDivider, img1, img2 } from "./svg-wjox5";

/**
 * @figmaAssetKey ce2afdb7930953aaf65883eb67035bd11f41e679
 */
function Delete({ className }: { className?: string }) {
  return (
    <div className={className} data-name="delete">
      <Delete1 />
    </div>
  );
}

/**
 * @figmaAssetKey 5e45af36549157e8e21a601e54dbe93419f1eebe
 */
function BuildingBlocksImageThumbnail({ className }: { className?: string }) {
  return (
    <div className={className} data-name=".Building Blocks/image-Thumbnail">
      <div className="relative shrink-0 size-[56px]" data-name="Thumbnail">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgThumbnail} />
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
 * @figmaAssetKey ec3b85a19e6f2c0728ecb7b89d62525420f04a79
 */
function AddReaction({ className }: { className?: string }) {
  return (
    <div className={className} data-name="add_reaction">
      <Add_reaction />
    </div>
  );
}

/**
 * @figmaAssetKey b9a13a62b22fc70e4909a7ea1f4adabd9c39ff68
 */
function TipsAndUpdates({ className }: { className?: string }) {
  return (
    <div className={className} data-name="tips_and_updates">
      <Tips_and_updates />
    </div>
  );
}

/**
 * @figmaAssetKey dea5413882d957712e94ae8016a9579d4c8a7405
 */
function Cancel({ className }: { className?: string }) {
  return (
    <div className={className} data-name="cancel">
      <div className="absolute inset-[8.333%]" data-name="icon">
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(68, 72, 59, 1)" } as React.CSSProperties}>
          <img alt="" className="block max-w-none size-full" src={imgIcon} />
        </div>
      </div>
    </div>
  );
}
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
type InputProps = {
  className?: string;
  property1?: "Default" | "Variant2" | "Variant3";
};

/**
 * @figmaAssetKey 658dc6b6cd22a6c203301e382b63c15e049d8454
 */
function Input({ className, property1 = "Default" }: InputProps) {
  const element = <BuildingBlocksStateLayer1Enabled className="absolute inset-0" />;
  const leadingElement = (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Leading element">
      <TipsAndUpdates className="relative shrink-0 size-[24px]" />
    </div>
  );
  const content = (
    <div className="basis-0 content-stretch flex flex-col font-['Manrope:Regular',sans-serif] font-normal grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] tracking-[0.5px] w-full">
        <p className="leading-[24px]">Forbedringspunkter</p>
      </div>
      <p className="[white-space-collapse:collapse] h-[20px] leading-[20px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#44483b] text-[14px] text-nowrap tracking-[0.25px] w-full">Anbefalinger for videre forbedring</p>
    </div>
  );
  if (property1 === "Variant2") {
    return (
      <div className={className} data-name="Property 1=Variant2">
        <ListitemListItem4Density element={element} leadingElement={leadingElement} content={content} />
        <AppUserInput />
      </div>
    );
  }
  if (property1 === "Variant3") {
    return (
      <div className={className} data-name="Property 1=Variant3">
        <ListitemListItem4Density1 element={element} leadingElement={leadingElement} content={content} />
        <AppUserInput1 />
      </div>
    );
  }
  return (
    <div className={className} data-name="Property 1=Default">
      <ListitemListItem4Density2 element={element} leadingElement={leadingElement} content={content} />
    </div>
  );
}
type RevisonObservationsProps = {
  className?: string;
  type?: "Improvement points" | "Positive observations";
  filled1?: boolean;
};

/**
 * @figmaAssetKey 72285a8ab2bed10532ac2208c357348296415b25
 */
/**
 * @figmaAssetKey 7d38687e3bc774c185284a35ad5efcc919360d1e
 */
/**
 * @figmaAssetKey 7d38687e3bc774c185284a35ad5efcc919360d1e
 */
/**
 * @figmaAssetKey 7d38687e3bc774c185284a35ad5efcc919360d1e
 */
/**
 * @figmaAssetKey 7d38687e3bc774c185284a35ad5efcc919360d1e
 */
function RevisonObservations({ className, type = "Improvement points", filled1 = false }: RevisonObservationsProps) {
  /* WARNING: Some variants had the same property values applied, and were skipped */
  const element = <div aria-hidden="true" className="absolute border border-[#c4c8b7] border-solid inset-0 pointer-events-none rounded-[12px]" />;
  if (type === "Positive observations" && !filled1) {
    return (
      <div className={className} data-name="Type=Positive observations, Filled=no">
        {element}
        <ListitemListItem4Density3 />
        <AppUserInput2 />
        <Button />
      </div>
    );
  }
  if (type === "Improvement points" && filled1) {
    return (
      <div className={className} data-name="Type=Improvement points, Filled=yes">
        {element}
        <ListitemListItem4Density4 />
        <AppUserInput3 />
        <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Pictures">
          <Button1 />
          <ListitemListItem0Density />
        </div>
      </div>
    );
  }
  if (type === "Positive observations" && filled1) {
    return (
      <div className={className} data-name="Type=Positive observations, Filled=yes">
        {element}
        <ListitemListItem4Density5 />
        <AppUserInput4 />
        <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Last opp bilde">
          <Button2 />
          <ListitemListItem0Density1 />
        </div>
      </div>
    );
  }
  return (
    <div className={className} data-name="Type=Improvement points, Filled=no">
      {element}
      <Input className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-[527px]" />
      <Button3 />
    </div>
  );
}
type BuildingBlocksSecondaryTabsLabelOnlyProps = {
  className?: string;
  labelText?: string;
  showBadge?: boolean;
  selected?: boolean;
  state?: "Enabled" | "Hovered" | "Focused" | "Pressed";
};

/**
 * @figmaAssetKey c0784b542db6ea317f5b6194068cda84be130a1f
 */
function BuildingBlocksSecondaryTabsLabelOnly({ className, labelText = "Tab", showBadge = false, selected = false, state = "Enabled" }: BuildingBlocksSecondaryTabsLabelOnlyProps) {
  if (selected && state === "Pressed") {
    return (
      <div className={className} data-name="Selected=True, State=Pressed">
        <div className="basis-0 bg-[rgba(26,28,22,0.08)] grow min-h-px min-w-px relative shrink-0 w-full" data-name="State-layer">
          <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
            <div className="box-border content-stretch flex flex-col items-center justify-center px-[16px] py-[14px] relative size-full">
              <div className="absolute inset-[-75%_-32.23%_-75%_33.06%]" data-name="Ripple">
                <div className="absolute inset-0" style={{ "--fill-0": "rgba(26, 28, 22, 1)" } as React.CSSProperties}>
                  <img alt="" className="block max-w-none size-full" src={imgRipple} />
                </div>
              </div>
              <div className="absolute bg-[#4a671e] bottom-0 h-[2px] left-0 w-[121px]" data-name="Indicator" />
              <div className="basis-0 content-stretch flex gap-[4px] grow items-center justify-center min-h-px min-w-px relative shrink-0" data-name="Tab Contents">
                <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[14px] text-center text-nowrap tracking-[0.1px]">
                  <p className="leading-[20px] whitespace-pre">{labelText}</p>
                </div>
                {showBadge && (
                  <div className="bg-[#ba1a1a] box-border content-stretch flex items-center justify-center p-[2px] relative rounded-[100px] shrink-0" data-name="Badges">
                    <div className="shrink-0 size-[2px]" data-name="Spacer" />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (selected && state === "Focused") {
    return (
      <div className={className} data-name="Selected=True, State=Focused">
        <div className="basis-0 bg-[rgba(26,28,22,0.12)] grow min-h-px min-w-px relative shrink-0 w-full" data-name="State-layer">
          <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
            <div className="box-border content-stretch flex flex-col items-center justify-center px-[16px] py-[14px] relative size-full">
              <div className="basis-0 content-stretch flex gap-[4px] grow items-center justify-center min-h-px min-w-px relative shrink-0" data-name="Tab Contents">
                <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[14px] text-center text-nowrap tracking-[0.1px]">
                  <p className="leading-[20px] whitespace-pre">{labelText}</p>
                </div>
                {showBadge && (
                  <div className="bg-[#ba1a1a] box-border content-stretch flex items-center justify-center p-[2px] relative rounded-[100px] shrink-0" data-name="Badges">
                    <div className="shrink-0 size-[2px]" data-name="Spacer" />
                  </div>
                )}
              </div>
              <div className="absolute bg-[#4a671e] bottom-0 h-[2px] left-0 right-0" data-name="Indicator" />
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (selected && state === "Hovered") {
    return (
      <div className={className} data-name="Selected=True, State=Hovered">
        <div className="basis-0 bg-[rgba(26,28,22,0.08)] grow min-h-px min-w-px relative shrink-0 w-full" data-name="State-layer">
          <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
            <div className="box-border content-stretch flex flex-col items-center justify-center px-[16px] py-[14px] relative size-full">
              <div className="basis-0 content-stretch flex gap-[4px] grow items-center justify-center min-h-px min-w-px relative shrink-0" data-name="Tab Contents">
                <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[14px] text-center text-nowrap tracking-[0.1px]">
                  <p className="leading-[20px] whitespace-pre">{labelText}</p>
                </div>
                {showBadge && (
                  <div className="bg-[#ba1a1a] box-border content-stretch flex items-center justify-center p-[2px] relative rounded-[100px] shrink-0" data-name="Badges">
                    <div className="shrink-0 size-[2px]" data-name="Spacer" />
                  </div>
                )}
              </div>
              <div className="absolute bg-[#4a671e] bottom-0 h-[2px] left-0 right-0" data-name="Indicator" />
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (selected && state === "Enabled") {
    return (
      <div className={className} data-name="Selected=True, State=Enabled">
        <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="State-layer">
          <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
            <div className="box-border content-stretch flex flex-col items-center justify-center px-[16px] py-[14px] relative size-full">
              <div className="basis-0 content-stretch flex gap-[4px] grow items-center justify-center min-h-px min-w-px relative shrink-0" data-name="Tab Contents">
                <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[14px] text-center text-nowrap tracking-[0.1px]">
                  <p className="leading-[20px] whitespace-pre">{labelText}</p>
                </div>
                {showBadge && (
                  <div className="bg-[#ba1a1a] box-border content-stretch flex items-center justify-center p-[2px] relative rounded-[100px] shrink-0" data-name="Badges">
                    <div className="shrink-0 size-[2px]" data-name="Spacer" />
                  </div>
                )}
              </div>
              <div className="absolute bg-[#4a671e] bottom-0 h-[2px] left-0 right-0" data-name="Indicator" />
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (!selected && state === "Pressed") {
    return (
      <div className={className} data-name="Selected=False, State=Pressed">
        <div className="basis-0 bg-[rgba(26,28,22,0.08)] grow min-h-px min-w-px relative shrink-0 w-full" data-name="State-layer">
          <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
            <div className="box-border content-stretch flex flex-col items-center justify-center px-[16px] py-[14px] relative size-full">
              <div className="absolute inset-[-75%_-32.23%_-75%_33.06%]" data-name="Ripple">
                <div className="absolute inset-0" style={{ "--fill-0": "rgba(26, 28, 22, 1)" } as React.CSSProperties}>
                  <img alt="" className="block max-w-none size-full" src={imgRipple} />
                </div>
              </div>
              <div className="basis-0 content-stretch flex gap-[4px] grow items-center justify-center min-h-px min-w-px relative shrink-0" data-name="Tab Contents">
                <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[14px] text-center text-nowrap tracking-[0.1px]">
                  <p className="leading-[20px] whitespace-pre">{labelText}</p>
                </div>
                {showBadge && (
                  <div className="bg-[#ba1a1a] box-border content-stretch flex items-center justify-center p-[2px] relative rounded-[100px] shrink-0" data-name="Badges">
                    <div className="shrink-0 size-[2px]" data-name="Spacer" />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (!selected && state === "Focused") {
    return (
      <div className={className} data-name="Selected=False, State=Focused">
        <div className="basis-0 bg-[rgba(26,28,22,0.12)] grow min-h-px min-w-px relative shrink-0 w-full" data-name="State-layer">
          <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
            <div className="box-border content-stretch flex flex-col items-center justify-center px-[16px] py-[14px] relative size-full">
              <div className="basis-0 content-stretch flex gap-[4px] grow items-center justify-center min-h-px min-w-px relative shrink-0" data-name="Tab Contents">
                <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[14px] text-center text-nowrap tracking-[0.1px]">
                  <p className="leading-[20px] whitespace-pre">{labelText}</p>
                </div>
                {showBadge && (
                  <div className="bg-[#ba1a1a] box-border content-stretch flex items-center justify-center p-[2px] relative rounded-[100px] shrink-0" data-name="Badges">
                    <div className="shrink-0 size-[2px]" data-name="Spacer" />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (!selected && state === "Hovered") {
    return (
      <div className={className} data-name="Selected=False, State=Hovered">
        <div className="basis-0 bg-[rgba(26,28,22,0.08)] grow min-h-px min-w-px relative shrink-0 w-full" data-name="State-layer">
          <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
            <div className="box-border content-stretch flex flex-col items-center justify-center px-[16px] py-[14px] relative size-full">
              <div className="basis-0 content-stretch flex gap-[4px] grow items-center justify-center min-h-px min-w-px relative shrink-0" data-name="Tab Contents">
                <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[14px] text-center text-nowrap tracking-[0.1px]">
                  <p className="leading-[20px] whitespace-pre">{labelText}</p>
                </div>
                {showBadge && (
                  <div className="bg-[#ba1a1a] box-border content-stretch flex items-center justify-center p-[2px] relative rounded-[100px] shrink-0" data-name="Badges">
                    <div className="shrink-0 size-[2px]" data-name="Spacer" />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className={className} data-name="Selected=False, State=Enabled">
      <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="State-layer">
        <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="box-border content-stretch flex flex-col items-center justify-center px-[16px] py-[14px] relative size-full">
            <div className="basis-0 content-stretch flex gap-[4px] grow items-center justify-center min-h-px min-w-px relative shrink-0" data-name="Tab Contents">
              <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#44483b] text-[14px] text-center text-nowrap tracking-[0.1px]">
                <p className="leading-[20px] whitespace-pre">{labelText}</p>
              </div>
              {showBadge && (
                <div className="bg-[#ba1a1a] box-border content-stretch flex items-center justify-center p-[2px] relative rounded-[100px] shrink-0" data-name="Badges">
                  <div className="shrink-0 size-[2px]" data-name="Spacer" />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * @figmaAssetKey 46169eb7b051436b0d42f9e970c28845bd308a9e
 */
function RadioButtonUnchecked({ className }: { className?: string }) {
  return (
    <div className={className} data-name="radio_button_unchecked">
      <div className="absolute inset-[8.333%]" data-name="icon">
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(26, 28, 22, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <path d={svgPaths.p208acf00} fill="var(--fill-0, #1A1C16)" id="icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

/**
 * @figmaAssetKey 9fa220653ce368cc18b6d1247037b1584dfaebbe
 */
function BuildingBlocksStateLayer1Enabled1({ className }: { className?: string }) {
  return <div className={className} data-name="Building Blocks/state-layer/1. enabled" />;
}

/**
 * @figmaAssetKey 48c0a4b92c3075b4b17da8c56ed998432b28bb23
 */
function RadioButtonChecked({ className }: { className?: string }) {
  return (
    <div className={className} data-name="radio_button_checked">
      <div className="absolute inset-[8.333%]" data-name="icon">
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(26, 28, 22, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <path d={svgPaths.p22f8a570} fill="var(--fill-0, #1A1C16)" id="icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

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
 * @figmaAssetKey 0ae703f075dead17aa5d5d68a34caa375c41bcbc
 */
function ExpandMore({ className }: { className?: string }) {
  return (
    <div className={className} data-name="expand_more">
      <Expand_more />
    </div>
  );
}

/**
 * @figmaAssetKey feb2e5bc0f1d183811b6d7d8a19438f0e1568c8a
 */
function QuestionMark({ className }: { className?: string }) {
  return (
    <div className={className} data-name="question_mark">
      <Question_mark />
    </div>
  );
}

/**
 * @figmaAssetKey 672ba14a9021518422b7a5ddd06c7e4d45405743
 */
function VolumeUp({ className }: { className?: string }) {
  return (
    <div className={className} data-name="volume_up">
      <Volume_up />
    </div>
  );
}

/**
 * @figmaAssetKey c417ad4f6b1c6cd217f80204726c6826ff40bc9f
 */
function Pending({ className }: { className?: string }) {
  return (
    <div className={className} data-name="pending">
      <Pending1 />
    </div>
  );
}

function StateLayer() {
  return (
    <div className="content-stretch flex h-[32px] items-center justify-center relative shrink-0 w-full" data-name="State-layer">
      <ExpandMore className="relative shrink-0 size-[20px]" />
    </div>
  );
}

/**
 * @figmaAssetKey c6a680765ddc51dffe3309e908da24808d14359e
 */
function Frame8() {
  return (
    <button className="basis-0 box-border content-stretch cursor-pointer flex gap-[8px] grow items-center min-h-px min-w-px overflow-visible p-0 relative shrink-0">
      <Pending className="relative shrink-0 size-[24px]" />
      <div className="flex flex-col font-['Quatro:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1a1c16] text-[22px] text-nowrap">
        <p className="leading-[28px] whitespace-pre">
          <span className="font-['Quatro:Regular',sans-serif] not-italic">1.</span>1<span className="font-['Quatro:Regular',sans-serif] not-italic">.</span>1
        </p>
      </div>
      <Iconbutton />
    </button>
  );
}

function StateLayer1() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center p-[8px] relative shrink-0" data-name="state-layer">
      <VolumeUp className="relative shrink-0 size-[24px]" />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center overflow-clip relative rounded-[100px] shrink-0" data-name="container">
      <StateLayer1 />
    </div>
  );
}

function StateLayer2() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center p-[8px] relative shrink-0" data-name="state-layer">
      <QuestionMark className="relative shrink-0 size-[24px]" />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center overflow-clip relative rounded-[100px] shrink-0" data-name="container">
      <StateLayer2 />
    </div>
  );
}

function TrailingIcon() {
  return (
    <div className="content-stretch cursor-pointer flex h-[48px] items-center justify-end relative shrink-0" data-name="trailing-icon">
      <Trailingicon3 />
      <Trailingicon2 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
      <Frame8 />
      <TrailingIcon />
    </div>
  );
}

function Frame3() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start justify-center min-h-px min-w-px relative shrink-0">
      <Frame1 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
      <Frame3 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0 w-full">
      <Frame4 />
    </div>
  );
}

/**
 * @figmaAssetKey b050d69c96f13dcc7f0aaa7d565caf76713b1d0e
 */
function StateLayer3() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-center justify-center pl-[8px] pr-[12px] py-[6px] relative shrink-0" data-name="state-layer">
      <Icon4 />
      <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[14px] text-center text-nowrap text-white tracking-[0.1px]">
        <p className="leading-[20px] whitespace-pre">Dokumentasjon kreves</p>
      </div>
    </div>
  );
}

function QuestionInformationLabels() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="question information labels">
      <Inputchip />
    </div>
  );
}

function LeadingElement() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Leading element">
      <ExpandMore className="relative shrink-0 size-[24px]" />
    </div>
  );
}

function Content() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] tracking-[0.5px] w-full">
        <p className="leading-[24px]">Krav</p>
      </div>
    </div>
  );
}

function StateLayer4() {
  return (
    <div className="content-stretch flex gap-[16px] h-[40px] items-center justify-center relative shrink-0 w-full" data-name="state-layer">
      <LeadingElement />
      <Content />
    </div>
  );
}

function RequirementList() {
  return (
    <div className="relative shrink-0 w-full" data-name="requirement list">
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-start justify-center px-[24px] py-[8px] relative w-full">
          <ListitemListItem4Density6 />
        </div>
      </div>
    </div>
  );
}

function RequirementSection() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start max-h-[688px] relative shrink-0 w-full" data-name="Requirement section">
      <RequirementList />
    </div>
  );
}

function TabContents() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center justify-center min-h-px min-w-px relative shrink-0" data-name="Tab Contents">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[14px] text-center text-nowrap tracking-[0.1px]">
        <p className="leading-[20px] whitespace-pre">Veileder revisor</p>
      </div>
    </div>
  );
}

function StateLayer5() {
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
        <p className="leading-[20px] whitespace-pre">Veileder</p>
      </div>
    </div>
  );
}

function StateLayer6() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="State-layer">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col items-center justify-center px-[16px] py-[14px] relative size-full">
          <TabContents1 />
        </div>
      </div>
    </div>
  );
}

function TabGroup() {
  return (
    <div className="relative shrink-0 w-full" data-name="Tab group">
      <div className="size-full">
        <div className="box-border content-stretch cursor-pointer flex items-start pl-[24px] pr-0 py-0 relative w-full">
          <Tab1 />
          <Tab2 />
        </div>
      </div>
    </div>
  );
}

/**
 * @figmaAssetKey dc1dc9b1adb1af4b7315099e26718bc5957a4874
 */
function StateLayer7() {
  return (
    <div className="box-border content-stretch flex gap-[4px] items-center justify-center px-[12px] py-[6px] relative shrink-0" data-name="State-layer">
      <Icon5 />
      <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#4a671e] text-[14px] text-nowrap tracking-[0.1px]">
        <p className="leading-[20px] whitespace-pre">Les mer</p>
      </div>
    </div>
  );
}

/**
 * @figmaAssetKey 7a83146cc357fe4091370f7d956b86811cfa3c0a
 */
function Frame6() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-start px-[24px] py-0 relative w-full">
          <div className="-webkit-box flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full overflow-ellipsis overflow-hidden relative shrink-0 text-[#1a1c16] text-[16px] tracking-[0.5px] w-[min-content]">
            <p className="leading-[24px] mb-0">Dette bør du spørre om på dokumentgjennomgang:</p>
            <p className="leading-[24px] mb-0">&nbsp;</p>
            <ul>
              <li className="list-disc ms-[24px]">
                <span className="leading-[24px]">Be om dokumentasjon på kjøp av eks for, gjødsel eller drivstoff. ...</span>
              </li>
            </ul>
          </div>
          <NextButton />
        </div>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Tabs />
      <Frame6 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <RequirementSection />
      <Frame2 />
    </div>
  );
}

function KravOgVeileder() {
  return (
    <div className="bg-[#fafaf0] box-border content-stretch flex flex-col gap-[8px] items-center px-0 py-[8px] relative rounded-[12px] shrink-0 w-full" data-name="Krav og veileder">
      <div aria-hidden="true" className="absolute border border-[#c4c8b7] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Frame7 />
    </div>
  );
}

function StateLayer8() {
  return (
    <div className="box-border content-stretch flex items-center justify-center p-[8px] relative shrink-0" data-name="state-layer">
      <RadioButtonChecked className="opacity-[0.38] relative shrink-0 size-[24px]" />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0" data-name="container">
      <StateLayer8 />
    </div>
  );
}

function LeadingElement1() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Leading element">
      <Radiobuttons />
    </div>
  );
}

function Content1() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] tracking-[0.5px] w-full">
        <p className="leading-[24px]">Ja</p>
      </div>
    </div>
  );
}

function StateLayer9() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center px-[16px] py-0 relative size-full">
          <LeadingElement1 />
          <Content1 />
        </div>
      </div>
    </div>
  );
}

function StateLayer10() {
  return (
    <div className="box-border content-stretch flex items-center justify-center p-[8px] relative shrink-0" data-name="state-layer">
      <RadioButtonUnchecked className="opacity-[0.38] relative shrink-0 size-[24px]" />
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0" data-name="container">
      <StateLayer10 />
    </div>
  );
}

function LeadingElement2() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Leading element">
      <Radiobuttons1 />
    </div>
  );
}

function Content2() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] tracking-[0.5px] w-full">
        <p className="leading-[24px]">Nei</p>
      </div>
    </div>
  );
}

function StateLayer11() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center px-[16px] py-0 relative size-full">
          <LeadingElement2 />
          <Content2 />
        </div>
      </div>
    </div>
  );
}

function StateLayer12() {
  return (
    <div className="box-border content-stretch flex items-center justify-center p-[8px] relative shrink-0" data-name="state-layer">
      <RadioButtonUnchecked className="opacity-[0.38] relative shrink-0 size-[24px]" />
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0" data-name="container">
      <StateLayer12 />
    </div>
  );
}

function LeadingElement3() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Leading element">
      <Radiobuttons2 />
    </div>
  );
}

function Content3() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] tracking-[0.5px] w-full">
        <p className="leading-[24px]">Ikke relevant</p>
      </div>
    </div>
  );
}

function StateLayer13() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center px-[16px] py-0 relative size-full">
          <LeadingElement3 />
          <Content3 />
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="box-border content-stretch cursor-pointer flex flex-col items-start px-0 py-[16px] relative shrink-0 w-full">
      <ListitemListItem4Density7 />
      <ListitemListItem4Density8 />
      <ListitemListItem4Density9 />
    </div>
  );
}

function AnswerAlterantvies() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-x-clip overflow-y-auto relative shrink-0 w-full" data-name="Answer alterantvies">
      <Frame />
    </div>
  );
}

function TabGroup1() {
  return (
    <div className="content-stretch cursor-pointer flex items-start relative shrink-0 w-full" data-name="Tab group">
      <BuildingBlocksSecondaryTabsLabelOnly labelText="Observasjoner" selected={true} className="content-stretch flex flex-col h-[48px] items-center justify-end overflow-clip relative shrink-0" />
      <BuildingBlocksSecondaryTabsLabelOnly labelText="Egenrevisjonssvar" className="content-stretch flex flex-col h-[48px] items-center justify-end overflow-clip relative shrink-0" />
      <BuildingBlocksSecondaryTabsLabelOnly labelText="Notat" className="content-stretch flex flex-col h-[48px] items-center justify-end overflow-clip relative shrink-0 w-[90px]" />
    </div>
  );
}

/**
 * @figmaAssetKey ffe8dd901bf8c718be83b85c1ecaf11c6bcdadbf
 */
export default function SelectedQuestionRightSidePanel() {
  return (
    <div className="relative size-full" data-name="Selected question right side panel">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-start px-[16px] py-0 relative size-full">
          <Questionmobilemenu />
          <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] tracking-[0.15px] w-full">
            <p className="leading-[24px]">Er det etablert en rutine som sikrer at det kun brukes ingredienser med norsk opprinnelse i Spesialitet-godkjent produkt? (ingredienser som ikke produseres kommersielt i Norge er unntatt fra dette kravet)</p>
          </div>
          <QuestionInformationLabels />
          <KravOgVeileder />
          <AnswerAlterantvies />
          <QuestionTabs />
        </div>
      </div>
    </div>
  );
}