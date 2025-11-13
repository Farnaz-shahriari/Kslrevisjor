import { img, imgVector, imgVector1, imgVector2, img1, img2, img3, imgCaret, imgCaret1, img4, img5, imgActiveIndicator, imgActiveIndicator1, imgActiveIndicator2, imgActiveIndicator3, imgActiveIndicator4, imgActiveIndicator5, img6, img7 } from "./svg-if6ho";

/**
 * @figmaAssetKey 3c3c1feb01288b6537b0622727c43d3a528acdb3
 */
function Edit({ className }: { className?: string }) {
  return (
    <div className={className} data-name="edit">
      <Edit1 />
    </div>
  );
}

/**
 * @figmaAssetKey 5345a50996f643634a37cc011c5535783a64d458
 */
function BuildingBlocksStateLayer1Enabled({ className }: { className?: string }) {
  return <div className={className} data-name="Building Blocks/state-layer/1. enabled" />;
}
type CheckProps = {
  className?: string;
  style?: "Filled" | "Outlined" | "Round" | "Sharp" | "Two Tone";
};

/**
 * @figmaAssetKey cf9e8c50f81fe7049063e34b7b14f3ebe8417eb8
 */
function Check({ className, style = "Filled" }: CheckProps) {
  if (style === "Outlined") {
    return (
      <div className={className} data-name="Style=Outlined">
        <div className="absolute inset-[22.06%_13.35%]" data-name="Vector">
          <img alt="" className="block max-w-none size-full" src={imgVector} />
        </div>
      </div>
    );
  }
  if (style === "Round") {
    return (
      <div className={className} data-name="Style=Round">
        <div className="absolute inset-[23.8%_15.09%]" data-name="Vector">
          <img alt="" className="block max-w-none size-full" src={imgVector1} />
        </div>
      </div>
    );
  }
  if (style === "Sharp") {
    return (
      <div className={className} data-name="Style=Sharp">
        <div className="absolute inset-[22.06%_13.35%]" data-name="Vector">
          <img alt="" className="block max-w-none size-full" src={imgVector} />
        </div>
      </div>
    );
  }
  if (style === "Two Tone") {
    return (
      <div className={className} data-name="Style=Two Tone">
        <div className="absolute inset-[23.29%_12.5%_20.83%_14.21%]" data-name="Vector">
          <img alt="" className="block max-w-none size-full" src={imgVector2} />
        </div>
      </div>
    );
  }
  return (
    <div className={className} data-name="Style=Filled">
      <div className="absolute inset-[22.06%_13.35%]" data-name="Vector">
        <img alt="" className="block max-w-none size-full" src={imgVector} />
      </div>
    </div>
  );
}
type TextFieldProps = {
  className?: string;
  showSupportingText?: boolean;
  labelText?: string;
  placeholderText?: string;
  inputText?: string;
  supportingText?: string;
  style?: "Filled" | "Outlined";
  state?: "Enabled" | "Hovered" | "Focused" | "Error" | "Disabled";
  textConfigurations?: "Input text" | "Label text" | "Placeholder text";
  leadingIcon?: boolean;
  trailingIcon?: boolean;
};

/**
 * @figmaAssetKey bce0efa00506e1482e1aa272383bf0ad60a8fc53
 */
function TextField({ className, showSupportingText = true, labelText = "Label", placeholderText = "Placeholder", inputText = "Input", supportingText = "Supporting text", style = "Filled", state = "Enabled", textConfigurations = "Input text", leadingIcon = false, trailingIcon = true }: TextFieldProps) {
  if (style === "Outlined" && state === "Disabled" && textConfigurations === "Placeholder text" && leadingIcon && !trailingIcon) {
    return (
      <div className={className} data-name="Style=Outlined, State=Disabled, Text configurations=Placeholder text, Leading icon=True, Trailing icon=False">
        <div className="basis-0 content-stretch flex flex-col gap-[10px] grow items-start min-h-px min-w-px relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="Text field">
          <div className="basis-0 grow min-h-px min-w-px relative rounded-[4px] shrink-0 w-full" data-name="State-layer">
            <div aria-hidden="true" className="absolute border border-[rgba(26,28,22,0.12)] border-solid inset-[-0.5px] pointer-events-none rounded-[4.5px]" />
            <div className="size-full">
              <div className="box-border content-stretch flex items-start pl-0 pr-[16px] py-[4px] relative size-full">
                <Leadingicon />
                <div className="basis-0 box-border content-stretch flex flex-col grow h-[48px] items-start justify-center min-h-px min-w-px px-0 py-[4px] relative shrink-0" data-name="Content">
                  <div className="content-stretch flex gap-[10px] items-start relative shrink-0" data-name="Placeholder text container">
                    <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] opacity-[0.38] relative shrink-0 text-[#1a1c16] text-[16px] text-nowrap tracking-[0.5px]">
                      <p className="leading-[24px] whitespace-pre">{placeholderText}</p>
                    </div>
                  </div>
                  <div className="absolute bg-white box-border content-stretch flex items-center left-[-36px] px-[4px] py-0 top-[-12px]" data-name="Label text container">
                    <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[16px] opacity-[0.38] relative shrink-0 text-[#1a1c16] text-[12px] text-nowrap tracking-[0.4px] whitespace-pre">{labelText}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 opacity-[0.04] rounded-[4px]" data-name="disabled-state-color">
          <div aria-hidden="true" className="absolute border border-[#1a1c16] border-solid inset-0 pointer-events-none rounded-[4px]" />
        </div>
        {showSupportingText && (
          <div className="absolute bottom-[-20px] box-border content-stretch flex gap-[10px] h-[20px] items-start left-0 opacity-[0.38] pb-0 pt-[4px] px-[16px] right-0" data-name="Supporting text">
            <p className="basis-0 font-['Manrope:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#1a1c16] text-[12px] tracking-[0.4px]">{supportingText}</p>
          </div>
        )}
      </div>
    );
  }
  if (style === "Outlined" && state === "Error" && textConfigurations === "Placeholder text" && leadingIcon && !trailingIcon) {
    return (
      <div className={className} data-name="Style=Outlined, State=Error, Text configurations=Placeholder text, Leading icon=True, Trailing icon=False">
        <div className="basis-0 content-stretch flex flex-col gap-[10px] grow items-start min-h-px min-w-px relative rounded-[4px] shrink-0 w-full" data-name="Text field">
          <div aria-hidden="true" className="absolute border border-[#ba1a1a] border-solid inset-0 pointer-events-none rounded-[4px]" />
          <div className="basis-0 box-border content-stretch flex grow items-start min-h-px min-w-px px-0 py-[4px] relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="State-layer">
            <Leadingicon1 />
            <div className="basis-0 box-border content-stretch flex flex-col grow h-[48px] items-start justify-center min-h-px min-w-px px-0 py-[4px] relative shrink-0" data-name="Content">
              <div className="content-stretch flex gap-[10px] items-start relative shrink-0" data-name="Placeholder text container">
                <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#44483b] text-[16px] text-nowrap tracking-[0.5px]">
                  <p className="leading-[24px] whitespace-pre">{placeholderText}</p>
                </div>
              </div>
              <div className="absolute bg-white box-border content-stretch flex items-center left-[-36px] px-[4px] py-0 top-[-12px]" data-name="Label text container">
                <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#ba1a1a] text-[12px] text-nowrap tracking-[0.4px] whitespace-pre">{labelText}</p>
              </div>
            </div>
            <Trailingiconerror />
          </div>
        </div>
        {showSupportingText && (
          <div className="absolute bottom-[-20px] box-border content-stretch flex gap-[10px] h-[20px] items-start left-0 pb-0 pt-[4px] px-[16px] right-0" data-name="Supporting text">
            <p className="basis-0 font-['Manrope:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#ba1a1a] text-[12px] tracking-[0.4px]">{supportingText}</p>
          </div>
        )}
      </div>
    );
  }
  if (style === "Outlined" && state === "Hovered" && textConfigurations === "Placeholder text" && leadingIcon && !trailingIcon) {
    return (
      <button className={className} data-name="Style=Outlined, State=Hovered, Text configurations=Placeholder text, Leading icon=True, Trailing icon=False">
        <div aria-hidden="true" className="absolute border-0 border-[#1a1c16] border-solid inset-0 pointer-events-none rounded-tl-[4px] rounded-tr-[4px]" />
        <div className="basis-0 content-stretch flex flex-col gap-[10px] grow items-start min-h-px min-w-px relative rounded-[4px] shrink-0 w-full" data-name="Text field">
          <div aria-hidden="true" className="absolute border border-[#1a1c16] border-solid inset-0 pointer-events-none rounded-[4px]" />
          <div className="basis-0 grow min-h-px min-w-px relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="State-layer">
            <div className="size-full">
              <div className="box-border content-stretch flex items-start pl-0 pr-[16px] py-[4px] relative size-full">
                <Leadingicon2 />
                <div className="basis-0 box-border content-stretch flex flex-col grow h-[48px] items-start justify-center min-h-px min-w-px px-0 py-[4px] relative shrink-0" data-name="Content">
                  <div className="content-stretch flex gap-[10px] items-start relative shrink-0" data-name="Placeholder text container">
                    <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#44483b] text-[16px] text-nowrap tracking-[0.5px]">
                      <p className="leading-[24px] whitespace-pre">{placeholderText}</p>
                    </div>
                  </div>
                  <div className="absolute bg-white box-border content-stretch flex items-center left-[-36px] px-[4px] py-0 top-[-12px]" data-name="Label text container">
                    <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#1a1c16] text-[12px] text-nowrap tracking-[0.4px] whitespace-pre">{labelText}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {showSupportingText && (
          <div className="absolute bottom-[-20px] box-border content-stretch flex gap-[10px] h-[20px] items-start left-0 pb-0 pt-[4px] px-[16px] right-0" data-name="Supporting text">
            <p className="basis-0 font-['Manrope:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#44483b] text-[12px] tracking-[0.4px]">{supportingText}</p>
          </div>
        )}
      </button>
    );
  }
  if (style === "Outlined" && state === "Focused" && textConfigurations === "Placeholder text" && leadingIcon && !trailingIcon) {
    return (
      <div className={className} data-name="Style=Outlined, State=Focused, Text configurations=Placeholder text, Leading icon=True, Trailing icon=False">
        <div className="basis-0 content-stretch flex flex-col gap-[10px] grow items-start min-h-px min-w-px relative rounded-[4px] shrink-0 w-full" data-name="Text field">
          <div aria-hidden="true" className="absolute border-[#4a671e] border-[3px] border-solid inset-0 pointer-events-none rounded-[4px]" />
          <div className="basis-0 grow min-h-px min-w-px relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="State-layer">
            <div className="size-full">
              <div className="box-border content-stretch flex items-start pl-0 pr-[16px] py-[4px] relative size-full">
                <Leadingicon3 />
                <div className="basis-0 box-border content-stretch flex flex-col grow h-[48px] items-start justify-center min-h-px min-w-px px-0 py-[4px] relative shrink-0" data-name="Content">
                  <div className="content-stretch flex items-center relative shrink-0" data-name="Placeholder text container">
                    <div className="h-[16px] relative shrink-0 w-0" data-name="Caret">
                      <div className="absolute inset-[-3.13%_-0.5px]" style={{ "--stroke-0": "rgba(74, 103, 30, 1)" } as React.CSSProperties}>
                        <img alt="" className="block max-w-none size-full" src={imgCaret} />
                      </div>
                    </div>
                    <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#44483b] text-[16px] text-nowrap tracking-[0.5px]">
                      <p className="leading-[24px] whitespace-pre">{placeholderText}</p>
                    </div>
                  </div>
                  <div className="absolute bg-white box-border content-stretch flex items-center left-[-36px] px-[4px] py-0 top-[-12px]" data-name="Label text container">
                    <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#4a671e] text-[12px] text-nowrap tracking-[0.4px] whitespace-pre">{labelText}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {showSupportingText && (
          <div className="absolute bottom-[-20px] box-border content-stretch flex gap-[10px] h-[20px] items-start left-0 pb-0 pt-[4px] px-[16px] right-0" data-name="Supporting text">
            <p className="basis-0 font-['Manrope:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#44483b] text-[12px] tracking-[0.4px]">{supportingText}</p>
          </div>
        )}
      </div>
    );
  }
  if (style === "Outlined" && state === "Enabled" && textConfigurations === "Placeholder text" && leadingIcon && !trailingIcon) {
    return (
      <div className={className} data-name="Style=Outlined, State=Enabled, Text configurations=Placeholder text, Leading icon=True, Trailing icon=False">
        <div className="basis-0 content-stretch flex flex-col gap-[10px] grow items-start min-h-px min-w-px relative rounded-[4px] shrink-0 w-full" data-name="Text field">
          <div aria-hidden="true" className="absolute border border-[#74796a] border-solid inset-0 pointer-events-none rounded-[4px]" />
          <div className="basis-0 grow min-h-px min-w-px relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="State-layer">
            <div className="size-full">
              <div className="box-border content-stretch flex items-start pl-0 pr-[16px] py-[4px] relative size-full">
                <Leadingicon4 />
                <div className="basis-0 box-border content-stretch flex flex-col grow h-[48px] items-start justify-center min-h-px min-w-px px-0 py-[4px] relative shrink-0" data-name="Content">
                  <div className="content-stretch flex gap-[10px] items-start relative shrink-0" data-name="Placeholder text container">
                    <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#44483b] text-[16px] text-nowrap tracking-[0.5px]">
                      <p className="leading-[24px] whitespace-pre">{placeholderText}</p>
                    </div>
                  </div>
                  <div className="absolute bg-white box-border content-stretch flex items-center left-[-36px] px-[4px] py-0 top-[-12px]" data-name="Label text container">
                    <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#44483b] text-[12px] text-nowrap tracking-[0.4px] whitespace-pre">{labelText}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {showSupportingText && (
          <div className="absolute bottom-[-20px] box-border content-stretch flex gap-[10px] h-[20px] items-start left-0 pb-0 pt-[4px] px-[16px] right-0" data-name="Supporting text">
            <p className="basis-0 font-['Manrope:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#44483b] text-[12px] tracking-[0.4px]">{supportingText}</p>
          </div>
        )}
      </div>
    );
  }
  if (style === "Outlined" && state === "Disabled" && textConfigurations === "Label text" && leadingIcon && !trailingIcon) {
    return (
      <div className={className} data-name="Style=Outlined, State=Disabled, Text configurations=Label text, Leading icon=True, Trailing icon=False">
        <div className="absolute inset-0 opacity-[0.04] rounded-[4px]" data-name="disabled-state-color">
          <div aria-hidden="true" className="absolute border border-[#1a1c16] border-solid inset-0 pointer-events-none rounded-[4px]" />
        </div>
        <div className="basis-0 content-stretch flex flex-col gap-[10px] grow items-start min-h-px min-w-px relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="Text field">
          <div className="basis-0 grow min-h-px min-w-px relative rounded-[4px] shrink-0 w-full" data-name="State-layer">
            <div aria-hidden="true" className="absolute border border-[rgba(26,28,22,0.12)] border-solid inset-[-0.5px] pointer-events-none rounded-[4.5px]" />
            <div className="size-full">
              <div className="box-border content-stretch flex items-start pl-0 pr-[16px] py-[4px] relative size-full">
                <Leadingicon5 />
                <div className="basis-0 box-border content-stretch flex flex-col grow h-[48px] items-start justify-center min-h-px min-w-px px-0 py-[4px] relative shrink-0" data-name="Content">
                  <div className="content-stretch flex items-center relative shrink-0" data-name="Label text container">
                    <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[24px] opacity-[0.38] relative shrink-0 text-[#1a1c16] text-[16px] text-nowrap tracking-[0.5px] whitespace-pre">{labelText}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {showSupportingText && (
          <div className="absolute bottom-[-20px] box-border content-stretch flex gap-[10px] h-[20px] items-start left-0 opacity-[0.38] pb-0 pt-[4px] px-[16px] right-0" data-name="Supporting text">
            <p className="basis-0 font-['Manrope:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#1a1c16] text-[12px] tracking-[0.4px]">{supportingText}</p>
          </div>
        )}
      </div>
    );
  }
  if (style === "Outlined" && state === "Error" && textConfigurations === "Label text" && leadingIcon && !trailingIcon) {
    return (
      <div className={className} data-name="Style=Outlined, State=Error, Text configurations=Label text, Leading icon=True, Trailing icon=False">
        <div className="basis-0 content-stretch flex flex-col gap-[10px] grow items-start min-h-px min-w-px relative rounded-[4px] shrink-0 w-full" data-name="Text field">
          <div aria-hidden="true" className="absolute border border-[#ba1a1a] border-solid inset-0 pointer-events-none rounded-[4px]" />
          <div className="basis-0 box-border content-stretch flex grow items-start min-h-px min-w-px px-0 py-[4px] relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="State-layer">
            <Leadingicon6 />
            <div className="basis-0 box-border content-stretch flex flex-col grow h-[48px] items-start justify-center min-h-px min-w-px px-0 py-[4px] relative shrink-0" data-name="Content">
              <div className="content-stretch flex items-center relative shrink-0" data-name="Label text container">
                <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#ba1a1a] text-[16px] text-nowrap tracking-[0.5px] whitespace-pre">{labelText}</p>
              </div>
            </div>
            <Trailingiconerror1 />
          </div>
        </div>
        {showSupportingText && (
          <div className="absolute bottom-[-20px] box-border content-stretch flex gap-[10px] h-[20px] items-start left-0 pb-0 pt-[4px] px-[16px] right-0" data-name="Supporting text">
            <p className="basis-0 font-['Manrope:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#ba1a1a] text-[12px] tracking-[0.4px]">{supportingText}</p>
          </div>
        )}
      </div>
    );
  }
  if (style === "Outlined" && state === "Hovered" && textConfigurations === "Label text" && leadingIcon && !trailingIcon) {
    return (
      <button className={className} data-name="Style=Outlined, State=Hovered, Text configurations=Label text, Leading icon=True, Trailing icon=False">
        <div aria-hidden="true" className="absolute border-0 border-[#1a1c16] border-solid inset-0 pointer-events-none rounded-tl-[4px] rounded-tr-[4px]" />
        <div className="basis-0 content-stretch flex flex-col gap-[10px] grow items-start min-h-px min-w-px relative rounded-[4px] shrink-0 w-full" data-name="Text field">
          <div aria-hidden="true" className="absolute border border-[#1a1c16] border-solid inset-0 pointer-events-none rounded-[4px]" />
          <div className="basis-0 grow min-h-px min-w-px relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="State-layer">
            <div className="size-full">
              <div className="box-border content-stretch flex items-start pl-0 pr-[16px] py-[4px] relative size-full">
                <Leadingicon7 />
                <div className="basis-0 box-border content-stretch flex flex-col grow h-[48px] items-start justify-center min-h-px min-w-px px-0 py-[4px] relative shrink-0" data-name="Content">
                  <div className="content-stretch flex items-center relative shrink-0" data-name="Label text container">
                    <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#1a1c16] text-[16px] text-nowrap tracking-[0.5px] whitespace-pre">{labelText}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {showSupportingText && (
          <div className="absolute bottom-[-20px] box-border content-stretch flex gap-[10px] h-[20px] items-start left-0 pb-0 pt-[4px] px-[16px] right-0" data-name="Supporting text">
            <p className="basis-0 font-['Manrope:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#44483b] text-[12px] tracking-[0.4px]">{supportingText}</p>
          </div>
        )}
      </button>
    );
  }
  if (style === "Outlined" && state === "Focused" && textConfigurations === "Label text" && leadingIcon && !trailingIcon) {
    return (
      <div className={className} data-name="Style=Outlined, State=Focused, Text configurations=Label text, Leading icon=True, Trailing icon=False">
        <div className="basis-0 content-stretch flex flex-col gap-[10px] grow items-start min-h-px min-w-px relative rounded-[4px] shrink-0 w-full" data-name="Text field">
          <div aria-hidden="true" className="absolute border-[#4a671e] border-[3px] border-solid inset-0 pointer-events-none rounded-[4px]" />
          <div className="basis-0 grow min-h-px min-w-px relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="State-layer">
            <div className="size-full">
              <div className="box-border content-stretch flex items-start pl-0 pr-[16px] py-[4px] relative size-full">
                <Leadingicon8 />
                <div className="basis-0 box-border content-stretch flex flex-col grow h-[48px] items-start justify-center min-h-px min-w-px px-0 py-[4px] relative shrink-0" data-name="Content">
                  <div className="content-stretch flex items-center relative shrink-0" data-name="Input text container">
                    <div className="h-[16px] relative shrink-0 w-0" data-name="Caret">
                      <div className="absolute inset-[-3.13%_-0.5px]" style={{ "--stroke-0": "rgba(74, 103, 30, 1)" } as React.CSSProperties}>
                        <img alt="" className="block max-w-none size-full" src={imgCaret} />
                      </div>
                    </div>
                  </div>
                  <div className="absolute bg-white box-border content-stretch flex items-center left-[-36px] px-[4px] py-0 top-[-12px]" data-name="Label text container">
                    <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#4a671e] text-[12px] text-nowrap tracking-[0.4px] whitespace-pre">{labelText}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {showSupportingText && (
          <div className="absolute bottom-[-20px] box-border content-stretch flex gap-[10px] h-[20px] items-start left-0 pb-0 pt-[4px] px-[16px] right-0" data-name="Supporting text">
            <p className="basis-0 font-['Manrope:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#44483b] text-[12px] tracking-[0.4px]">{supportingText}</p>
          </div>
        )}
      </div>
    );
  }
  if (style === "Outlined" && state === "Enabled" && textConfigurations === "Label text" && leadingIcon && !trailingIcon) {
    return (
      <div className={className} data-name="Style=Outlined, State=Enabled, Text configurations=Label text, Leading icon=True, Trailing icon=False">
        <div className="basis-0 content-stretch flex flex-col gap-[10px] grow items-start min-h-px min-w-px relative rounded-[4px] shrink-0 w-full" data-name="Text field">
          <div aria-hidden="true" className="absolute border border-[#74796a] border-solid inset-0 pointer-events-none rounded-[4px]" />
          <div className="basis-0 grow min-h-px min-w-px relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="State-layer">
            <div className="size-full">
              <div className="box-border content-stretch flex items-start pl-0 pr-[16px] py-[4px] relative size-full">
                <Leadingicon9 />
                <div className="basis-0 box-border content-stretch flex flex-col grow h-[48px] items-start justify-center min-h-px min-w-px px-0 py-[4px] relative shrink-0" data-name="Content">
                  <div className="content-stretch flex items-center relative shrink-0" data-name="Label text container">
                    <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#44483b] text-[16px] text-nowrap tracking-[0.5px] whitespace-pre">{labelText}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {showSupportingText && (
          <div className="absolute bottom-[-20px] box-border content-stretch flex gap-[10px] h-[20px] items-start left-0 pb-0 pt-[4px] px-[16px] right-0" data-name="Supporting text">
            <p className="basis-0 font-['Manrope:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#44483b] text-[12px] tracking-[0.4px]">{supportingText}</p>
          </div>
        )}
      </div>
    );
  }
  if (style === "Outlined" && state === "Disabled" && textConfigurations === "Input text" && leadingIcon && !trailingIcon) {
    return (
      <div className={className} data-name="Style=Outlined, State=Disabled, Text configurations=Input text, Leading icon=True, Trailing icon=False">
        <div className="absolute inset-0 opacity-[0.04] rounded-[4px]" data-name="disabled-state-color">
          <div aria-hidden="true" className="absolute border border-[#1a1c16] border-solid inset-0 pointer-events-none rounded-[4px]" />
        </div>
        <div className="basis-0 content-stretch flex flex-col gap-[10px] grow items-start min-h-px min-w-px relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="Text field">
          <div className="basis-0 grow min-h-px min-w-px relative rounded-[4px] shrink-0 w-full" data-name="State-layer">
            <div aria-hidden="true" className="absolute border border-[rgba(26,28,22,0.12)] border-solid inset-[-0.5px] pointer-events-none rounded-[4.5px]" />
            <div className="size-full">
              <div className="box-border content-stretch flex items-start pl-0 pr-[16px] py-[4px] relative size-full">
                <Leadingicon10 />
                <div className="basis-0 box-border content-stretch flex flex-col grow h-[48px] items-start justify-center min-h-px min-w-px px-0 py-[4px] relative shrink-0" data-name="Content">
                  <div className="content-stretch flex items-center relative shrink-0" data-name="Input text container">
                    <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] opacity-[0.38] relative shrink-0 text-[#1a1c16] text-[16px] text-nowrap tracking-[0.5px]">
                      <p className="leading-[24px] whitespace-pre">{inputText}</p>
                    </div>
                  </div>
                  <div className="absolute bg-white box-border content-stretch flex items-center left-[-36px] px-[4px] py-0 top-[-12px]" data-name="Label text container">
                    <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[16px] opacity-[0.38] relative shrink-0 text-[#1a1c16] text-[12px] text-nowrap tracking-[0.4px] whitespace-pre">{labelText}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {showSupportingText && (
          <div className="absolute bottom-[-20px] box-border content-stretch flex gap-[10px] h-[20px] items-start left-0 opacity-[0.38] pb-0 pt-[4px] px-[16px] right-0" data-name="Supporting text">
            <p className="basis-0 font-['Manrope:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#1a1c16] text-[12px] tracking-[0.4px]">{supportingText}</p>
          </div>
        )}
      </div>
    );
  }
  if (style === "Outlined" && state === "Error" && textConfigurations === "Input text" && leadingIcon && !trailingIcon) {
    return (
      <div className={className} data-name="Style=Outlined, State=Error, Text configurations=Input text, Leading icon=True, Trailing icon=False">
        <div className="basis-0 content-stretch flex flex-col gap-[10px] grow items-start min-h-px min-w-px relative rounded-[4px] shrink-0 w-full" data-name="Text field">
          <div aria-hidden="true" className="absolute border-[#ba1a1a] border-[3px] border-solid inset-0 pointer-events-none rounded-[4px]" />
          <div className="basis-0 box-border content-stretch flex grow items-start min-h-px min-w-px px-0 py-[4px] relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="State-layer">
            <Leadingicon11 />
            <div className="basis-0 box-border content-stretch flex flex-col grow h-[48px] items-start justify-center min-h-px min-w-px px-0 py-[4px] relative shrink-0" data-name="Content">
              <div className="content-stretch flex items-center relative shrink-0" data-name="Input text container">
                <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] text-nowrap tracking-[0.5px]">
                  <p className="leading-[24px] whitespace-pre">{inputText}</p>
                </div>
                <div className="h-[16px] relative shrink-0 w-0" data-name="Caret">
                  <div className="absolute inset-[-3.13%_-0.5px]" style={{ "--stroke-0": "rgba(186, 26, 26, 1)" } as React.CSSProperties}>
                    <img alt="" className="block max-w-none size-full" src={imgCaret1} />
                  </div>
                </div>
              </div>
              <div className="absolute bg-white box-border content-stretch flex items-center left-[-36px] px-[4px] py-0 top-[-12px]" data-name="Label text container">
                <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#ba1a1a] text-[12px] text-nowrap tracking-[0.4px] whitespace-pre">{labelText}</p>
              </div>
            </div>
            <Trailingiconerror2 />
          </div>
        </div>
        {showSupportingText && (
          <div className="absolute bottom-[-20px] box-border content-stretch flex gap-[10px] h-[20px] items-start left-0 pb-0 pt-[4px] px-[16px] right-0" data-name="Supporting text">
            <p className="basis-0 font-['Manrope:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#ba1a1a] text-[12px] tracking-[0.4px]">{supportingText}</p>
          </div>
        )}
      </div>
    );
  }
  if (style === "Outlined" && state === "Hovered" && textConfigurations === "Input text" && leadingIcon && !trailingIcon) {
    return (
      <button className={className} data-name="Style=Outlined, State=Hovered, Text configurations=Input text, Leading icon=True, Trailing icon=False">
        <div aria-hidden="true" className="absolute border-0 border-[#1a1c16] border-solid inset-0 pointer-events-none rounded-tl-[4px] rounded-tr-[4px]" />
        <div className="basis-0 content-stretch flex flex-col gap-[10px] grow items-start min-h-px min-w-px relative rounded-[4px] shrink-0 w-full" data-name="Text field">
          <div aria-hidden="true" className="absolute border border-[#1a1c16] border-solid inset-0 pointer-events-none rounded-[4px]" />
          <div className="basis-0 grow min-h-px min-w-px relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="State-layer">
            <div className="size-full">
              <div className="box-border content-stretch flex items-start pl-0 pr-[16px] py-[4px] relative size-full">
                <Leadingicon12 />
                <div className="basis-0 box-border content-stretch flex flex-col grow h-[48px] items-start justify-center min-h-px min-w-px px-0 py-[4px] relative shrink-0" data-name="Content">
                  <div className="content-stretch flex items-center relative shrink-0" data-name="Input text container">
                    <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] text-nowrap tracking-[0.5px]">
                      <p className="leading-[24px] whitespace-pre">{inputText}</p>
                    </div>
                  </div>
                  <div className="absolute bg-white box-border content-stretch flex items-center left-[-36px] px-[4px] py-0 top-[-12px]" data-name="Label text container">
                    <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#1a1c16] text-[12px] text-nowrap tracking-[0.4px] whitespace-pre">{labelText}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {showSupportingText && (
          <div className="absolute bottom-[-20px] box-border content-stretch flex gap-[10px] h-[20px] items-start left-0 pb-0 pt-[4px] px-[16px] right-0" data-name="Supporting text">
            <p className="basis-0 font-['Manrope:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#44483b] text-[12px] tracking-[0.4px]">{supportingText}</p>
          </div>
        )}
      </button>
    );
  }
  if (style === "Outlined" && state === "Focused" && textConfigurations === "Input text" && leadingIcon && !trailingIcon) {
    return (
      <div className={className} data-name="Style=Outlined, State=Focused, Text configurations=Input text, Leading icon=True, Trailing icon=False">
        <div className="basis-0 content-stretch flex flex-col gap-[10px] grow items-start min-h-px min-w-px relative rounded-[4px] shrink-0 w-full" data-name="Text field">
          <div aria-hidden="true" className="absolute border-[#4a671e] border-[3px] border-solid inset-0 pointer-events-none rounded-[4px]" />
          <div className="basis-0 grow min-h-px min-w-px relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="State-layer">
            <div className="size-full">
              <div className="box-border content-stretch flex items-start pl-0 pr-[16px] py-[4px] relative size-full">
                <Leadingicon13 />
                <div className="basis-0 box-border content-stretch flex flex-col grow h-[48px] items-start justify-center min-h-px min-w-px px-0 py-[4px] relative shrink-0" data-name="Content">
                  <div className="content-stretch flex items-center relative shrink-0" data-name="Input text container">
                    <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] text-nowrap tracking-[0.5px]">
                      <p className="leading-[24px] whitespace-pre">{inputText}</p>
                    </div>
                    <div className="h-[16px] relative shrink-0 w-0" data-name="Caret">
                      <div className="absolute inset-[-3.13%_-0.5px]" style={{ "--stroke-0": "rgba(74, 103, 30, 1)" } as React.CSSProperties}>
                        <img alt="" className="block max-w-none size-full" src={imgCaret} />
                      </div>
                    </div>
                  </div>
                  <div className="absolute bg-white box-border content-stretch flex items-center left-[-36px] px-[4px] py-0 top-[-12px]" data-name="Label text container">
                    <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#4a671e] text-[12px] text-nowrap tracking-[0.4px] whitespace-pre">{labelText}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {showSupportingText && (
          <div className="absolute bottom-[-20px] box-border content-stretch flex gap-[10px] h-[20px] items-start left-0 pb-0 pt-[4px] px-[16px] right-0" data-name="Supporting text">
            <p className="basis-0 font-['Manrope:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#44483b] text-[12px] tracking-[0.4px]">{supportingText}</p>
          </div>
        )}
      </div>
    );
  }
  if (style === "Outlined" && state === "Enabled" && textConfigurations === "Input text" && leadingIcon && !trailingIcon) {
    return (
      <div className={className} data-name="Style=Outlined, State=Enabled, Text configurations=Input text, Leading icon=True, Trailing icon=False">
        <div className="basis-0 content-stretch flex flex-col gap-[10px] grow items-start min-h-px min-w-px relative rounded-[4px] shrink-0 w-full" data-name="Text field">
          <div aria-hidden="true" className="absolute border border-[#74796a] border-solid inset-0 pointer-events-none rounded-[4px]" />
          <div className="basis-0 grow min-h-px min-w-px relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="State-layer">
            <div className="size-full">
              <div className="box-border content-stretch flex items-start pl-0 pr-[16px] py-[4px] relative size-full">
                <Leadingicon14 />
                <div className="basis-0 box-border content-stretch flex flex-col grow h-[48px] items-start justify-center min-h-px min-w-px px-0 py-[4px] relative shrink-0" data-name="Content">
                  <div className="content-stretch flex items-center relative shrink-0" data-name="Input text container">
                    <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] text-nowrap tracking-[0.5px]">
                      <p className="leading-[24px] whitespace-pre">{inputText}</p>
                    </div>
                  </div>
                  <div className="absolute bg-white box-border content-stretch flex items-center left-[-36px] px-[4px] py-0 top-[-12px]" data-name="Label text container">
                    <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#44483b] text-[12px] text-nowrap tracking-[0.4px] whitespace-pre">{labelText}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {showSupportingText && (
          <div className="absolute bottom-[-20px] box-border content-stretch flex gap-[10px] h-[20px] items-start left-0 pb-0 pt-[4px] px-[16px] right-0" data-name="Supporting text">
            <p className="basis-0 font-['Manrope:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#44483b] text-[12px] tracking-[0.4px]">{supportingText}</p>
          </div>
        )}
      </div>
    );
  }
  if (style === "Outlined" && state === "Disabled" && textConfigurations === "Placeholder text" && !leadingIcon && !trailingIcon) {
    return (
      <div className={className} data-name="Style=Outlined, State=Disabled, Text configurations=Placeholder text, Leading icon=False, Trailing icon=False">
        <div className="basis-0 content-stretch flex flex-col gap-[10px] grow items-start min-h-px min-w-px relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="Text field">
          <div className="basis-0 grow min-h-px min-w-px relative rounded-[4px] shrink-0 w-full" data-name="State-layer">
            <div aria-hidden="true" className="absolute border border-[rgba(26,28,22,0.12)] border-solid inset-[-0.5px] pointer-events-none rounded-[4.5px]" />
            <div className="size-full">
              <div className="box-border content-stretch flex items-start pl-[16px] pr-0 py-[4px] relative size-full">
                <div className="basis-0 box-border content-stretch flex flex-col grow h-[48px] items-start justify-center min-h-px min-w-px px-0 py-[4px] relative shrink-0" data-name="Content">
                  <div className="content-stretch flex gap-[10px] items-start relative shrink-0" data-name="Placeholder text container">
                    <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] opacity-[0.38] relative shrink-0 text-[#1a1c16] text-[16px] text-nowrap tracking-[0.5px]">
                      <p className="leading-[24px] whitespace-pre">{placeholderText}</p>
                    </div>
                  </div>
                  <div className="absolute bg-white box-border content-stretch flex items-center left-[-4px] px-[4px] py-0 top-[-12px]" data-name="Label text container">
                    <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[16px] opacity-[0.38] relative shrink-0 text-[#1a1c16] text-[12px] text-nowrap tracking-[0.4px] whitespace-pre">{labelText}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 opacity-[0.04] rounded-[4px]" data-name="disabled-state-color">
          <div aria-hidden="true" className="absolute border border-[#1a1c16] border-solid inset-0 pointer-events-none rounded-[4px]" />
        </div>
        {showSupportingText && (
          <div className="absolute bottom-[-20px] box-border content-stretch flex gap-[10px] h-[20px] items-start left-0 opacity-[0.38] pb-0 pt-[4px] px-[16px] right-0" data-name="Supporting text">
            <p className="basis-0 font-['Manrope:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#1a1c16] text-[12px] tracking-[0.4px]">{supportingText}</p>
          </div>
        )}
      </div>
    );
  }
  if (style === "Outlined" && state === "Error" && textConfigurations === "Placeholder text" && !leadingIcon && !trailingIcon) {
    return (
      <div className={className} data-name="Style=Outlined, State=Error, Text configurations=Placeholder text, Leading icon=False, Trailing icon=False">
        <div className="basis-0 content-stretch flex flex-col gap-[10px] grow items-start min-h-px min-w-px relative rounded-[4px] shrink-0 w-full" data-name="Text field">
          <div aria-hidden="true" className="absolute border border-[#ba1a1a] border-solid inset-0 pointer-events-none rounded-[4px]" />
          <div className="basis-0 grow min-h-px min-w-px relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="State-layer">
            <div className="size-full">
              <div className="box-border content-stretch flex items-start pl-[16px] pr-0 py-[4px] relative size-full">
                <div className="basis-0 box-border content-stretch flex flex-col grow h-[48px] items-start justify-center min-h-px min-w-px px-0 py-[4px] relative shrink-0" data-name="Content">
                  <div className="content-stretch flex gap-[10px] items-start relative shrink-0" data-name="Placeholder text container">
                    <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#44483b] text-[16px] text-nowrap tracking-[0.5px]">
                      <p className="leading-[24px] whitespace-pre">{placeholderText}</p>
                    </div>
                  </div>
                  <div className="absolute bg-white box-border content-stretch flex items-center left-[-4px] px-[4px] py-0 top-[-12px]" data-name="Label text container">
                    <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#ba1a1a] text-[12px] text-nowrap tracking-[0.4px] whitespace-pre">{labelText}</p>
                  </div>
                </div>
                <Trailingiconerror3 />
              </div>
            </div>
          </div>
        </div>
        {showSupportingText && (
          <div className="absolute bottom-[-20px] box-border content-stretch flex gap-[10px] h-[20px] items-start left-0 pb-0 pt-[4px] px-[16px] right-0" data-name="Supporting text">
            <p className="basis-0 font-['Manrope:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#ba1a1a] text-[12px] tracking-[0.4px]">{supportingText}</p>
          </div>
        )}
      </div>
    );
  }
  if (style === "Outlined" && state === "Hovered" && textConfigurations === "Placeholder text" && !leadingIcon && !trailingIcon) {
    return (
      <button className={className} data-name="Style=Outlined, State=Hovered, Text configurations=Placeholder text, Leading icon=False, Trailing icon=False">
        <div aria-hidden="true" className="absolute border-0 border-[#1a1c16] border-solid inset-0 pointer-events-none rounded-tl-[4px] rounded-tr-[4px]" />
        <div className="basis-0 content-stretch flex flex-col gap-[10px] grow items-start min-h-px min-w-px relative rounded-[4px] shrink-0 w-full" data-name="Text field">
          <div aria-hidden="true" className="absolute border border-[#1a1c16] border-solid inset-0 pointer-events-none rounded-[4px]" />
          <div className="basis-0 grow min-h-px min-w-px relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="State-layer">
            <div className="size-full">
              <div className="box-border content-stretch flex items-start pl-[16px] pr-0 py-[4px] relative size-full">
                <div className="basis-0 box-border content-stretch flex flex-col grow h-[48px] items-start justify-center min-h-px min-w-px px-0 py-[4px] relative shrink-0" data-name="Content">
                  <div className="content-stretch flex gap-[10px] items-start relative shrink-0" data-name="Placeholder text container">
                    <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] text-nowrap tracking-[0.5px]">
                      <p className="leading-[24px] whitespace-pre">{placeholderText}</p>
                    </div>
                  </div>
                  <div className="absolute bg-white box-border content-stretch flex items-center left-[-4px] px-[4px] py-0 top-[-12px]" data-name="Label text container">
                    <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#1a1c16] text-[12px] text-nowrap tracking-[0.4px] whitespace-pre">{labelText}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {showSupportingText && (
          <div className="absolute bottom-[-20px] box-border content-stretch flex gap-[10px] h-[20px] items-start left-0 pb-0 pt-[4px] px-[16px] right-0" data-name="Supporting text">
            <p className="basis-0 font-['Manrope:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#44483b] text-[12px] tracking-[0.4px]">{supportingText}</p>
          </div>
        )}
      </button>
    );
  }
  if (style === "Outlined" && state === "Focused" && textConfigurations === "Placeholder text" && !leadingIcon && !trailingIcon) {
    return (
      <div className={className} data-name="Style=Outlined, State=Focused, Text configurations=Placeholder text, Leading icon=False, Trailing icon=False">
        <div className="basis-0 content-stretch flex flex-col gap-[10px] grow items-start min-h-px min-w-px relative rounded-[4px] shrink-0 w-full" data-name="Text field">
          <div aria-hidden="true" className="absolute border-[#4a671e] border-[3px] border-solid inset-0 pointer-events-none rounded-[4px]" />
          <div className="basis-0 grow min-h-px min-w-px relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="State-layer">
            <div className="size-full">
              <div className="box-border content-stretch flex items-start pl-[16px] pr-0 py-[4px] relative size-full">
                <div className="basis-0 box-border content-stretch flex flex-col grow h-[48px] items-start justify-center min-h-px min-w-px px-0 py-[4px] relative shrink-0" data-name="Content">
                  <div className="content-stretch flex items-center relative shrink-0" data-name="Placeholder text container">
                    <div className="h-[16px] relative shrink-0 w-0" data-name="Caret">
                      <div className="absolute inset-[-3.13%_-0.5px]" style={{ "--stroke-0": "rgba(74, 103, 30, 1)" } as React.CSSProperties}>
                        <img alt="" className="block max-w-none size-full" src={imgCaret} />
                      </div>
                    </div>
                    <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#44483b] text-[16px] text-nowrap tracking-[0.5px]">
                      <p className="leading-[24px] whitespace-pre">{placeholderText}</p>
                    </div>
                  </div>
                  <div className="absolute bg-white box-border content-stretch flex items-center left-[-4px] px-[4px] py-0 top-[-12px]" data-name="Label text container">
                    <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#4a671e] text-[12px] text-nowrap tracking-[0.4px] whitespace-pre">{labelText}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {showSupportingText && (
          <div className="absolute bottom-[-20px] box-border content-stretch flex gap-[10px] h-[20px] items-start left-0 pb-0 pt-[4px] px-[16px] right-0" data-name="Supporting text">
            <p className="basis-0 font-['Manrope:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#44483b] text-[12px] tracking-[0.4px]">{supportingText}</p>
          </div>
        )}
      </div>
    );
  }
  if (style === "Outlined" && state === "Enabled" && textConfigurations === "Placeholder text" && !leadingIcon && !trailingIcon) {
    return (
      <div className={className} data-name="Style=Outlined, State=Enabled, Text configurations=Placeholder text, Leading icon=False, Trailing icon=False">
        <div className="basis-0 content-stretch flex flex-col gap-[10px] grow items-start min-h-px min-w-px relative rounded-[4px] shrink-0 w-full" data-name="Text field">
          <div aria-hidden="true" className="absolute border border-[#74796a] border-solid inset-0 pointer-events-none rounded-[4px]" />
          <div className="basis-0 grow min-h-px min-w-px relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="State-layer">
            <div className="size-full">
              <div className="box-border content-stretch flex items-start pl-[16px] pr-0 py-[4px] relative size-full">
                <div className="basis-0 box-border content-stretch flex flex-col grow h-[48px] items-start justify-center min-h-px min-w-px px-0 py-[4px] relative shrink-0" data-name="Content">
                  <div className="content-stretch flex gap-[10px] items-start relative shrink-0" data-name="Placeholder text container">
                    <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#44483b] text-[16px] text-nowrap tracking-[0.5px]">
                      <p className="leading-[24px] whitespace-pre">{placeholderText}</p>
                    </div>
                  </div>
                  <div className="absolute bg-white box-border content-stretch flex items-center left-[-4px] px-[4px] py-0 top-[-12px]" data-name="Label text container">
                    <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#44483b] text-[12px] text-nowrap tracking-[0.4px] whitespace-pre">{labelText}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {showSupportingText && (
          <div className="absolute bottom-[-20px] box-border content-stretch flex gap-[10px] h-[20px] items-start left-0 pb-0 pt-[4px] px-[16px] right-0" data-name="Supporting text">
            <p className="basis-0 font-['Manrope:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#44483b] text-[12px] tracking-[0.4px]">{supportingText}</p>
          </div>
        )}
      </div>
    );
  }
  if (style === "Outlined" && state === "Disabled" && textConfigurations === "Label text" && !leadingIcon && !trailingIcon) {
    return (
      <div className={className} data-name="Style=Outlined, State=Disabled, Text configurations=Label text, Leading icon=False, Trailing icon=False">
        <div className="absolute inset-0 opacity-[0.04] rounded-[4px]" data-name="disabled-state-color">
          <div aria-hidden="true" className="absolute border border-[#1a1c16] border-solid inset-0 pointer-events-none rounded-[4px]" />
        </div>
        <div className="basis-0 content-stretch flex flex-col gap-[10px] grow items-start min-h-px min-w-px relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="Text field">
          <div className="basis-0 grow min-h-px min-w-px relative rounded-[4px] shrink-0 w-full" data-name="State-layer">
            <div aria-hidden="true" className="absolute border border-[rgba(26,28,22,0.12)] border-solid inset-[-0.5px] pointer-events-none rounded-[4.5px]" />
            <div className="size-full">
              <div className="box-border content-stretch flex items-start pl-[16px] pr-0 py-[4px] relative size-full">
                <div className="basis-0 box-border content-stretch flex flex-col grow h-[48px] items-start justify-center min-h-px min-w-px px-0 py-[4px] relative shrink-0" data-name="Content">
                  <div className="content-stretch flex items-center relative shrink-0" data-name="Label text container">
                    <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[24px] opacity-[0.38] relative shrink-0 text-[#1a1c16] text-[16px] text-nowrap tracking-[0.5px] whitespace-pre">{labelText}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {showSupportingText && (
          <div className="absolute bottom-[-20px] box-border content-stretch flex gap-[10px] h-[20px] items-start left-0 opacity-[0.38] pb-0 pt-[4px] px-[16px] right-0" data-name="Supporting text">
            <p className="basis-0 font-['Manrope:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#1a1c16] text-[12px] tracking-[0.4px]">{supportingText}</p>
          </div>
        )}
      </div>
    );
  }
  if (style === "Outlined" && state === "Error" && textConfigurations === "Label text" && !leadingIcon && !trailingIcon) {
    return (
      <div className={className} data-name="Style=Outlined, State=Error, Text configurations=Label text, Leading icon=False, Trailing icon=False">
        <div className="basis-0 content-stretch flex flex-col gap-[10px] grow items-start min-h-px min-w-px relative rounded-[4px] shrink-0 w-full" data-name="Text field">
          <div aria-hidden="true" className="absolute border border-[#ba1a1a] border-solid inset-0 pointer-events-none rounded-[4px]" />
          <div className="basis-0 grow min-h-px min-w-px relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="State-layer">
            <div className="size-full">
              <div className="box-border content-stretch flex items-start pl-[16px] pr-0 py-[4px] relative size-full">
                <div className="basis-0 box-border content-stretch flex flex-col grow h-[48px] items-start justify-center min-h-px min-w-px px-0 py-[4px] relative shrink-0" data-name="Content">
                  <div className="content-stretch flex items-center relative shrink-0" data-name="Label text container">
                    <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#ba1a1a] text-[16px] text-nowrap tracking-[0.5px] whitespace-pre">{labelText}</p>
                  </div>
                </div>
                <Trailingiconerror4 />
              </div>
            </div>
          </div>
        </div>
        {showSupportingText && (
          <div className="absolute bottom-[-20px] box-border content-stretch flex gap-[10px] h-[20px] items-start left-0 pb-0 pt-[4px] px-[16px] right-0" data-name="Supporting text">
            <p className="basis-0 font-['Manrope:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#ba1a1a] text-[12px] tracking-[0.4px]">{supportingText}</p>
          </div>
        )}
      </div>
    );
  }
  if (style === "Outlined" && state === "Hovered" && textConfigurations === "Label text" && !leadingIcon && !trailingIcon) {
    return (
      <button className={className} data-name="Style=Outlined, State=Hovered, Text configurations=Label text, Leading icon=False, Trailing icon=False">
        <div aria-hidden="true" className="absolute border-0 border-[#1a1c16] border-solid inset-0 pointer-events-none rounded-tl-[4px] rounded-tr-[4px]" />
        <div className="basis-0 content-stretch flex flex-col gap-[10px] grow items-start min-h-px min-w-px relative rounded-[4px] shrink-0 w-full" data-name="Text field">
          <div aria-hidden="true" className="absolute border border-[#1a1c16] border-solid inset-0 pointer-events-none rounded-[4px]" />
          <div className="basis-0 grow min-h-px min-w-px relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="State-layer">
            <div className="size-full">
              <div className="box-border content-stretch flex items-start pl-[16px] pr-0 py-[4px] relative size-full">
                <div className="basis-0 box-border content-stretch flex flex-col grow h-[48px] items-start justify-center min-h-px min-w-px px-0 py-[4px] relative shrink-0" data-name="Content">
                  <div className="content-stretch flex items-center relative shrink-0" data-name="Label text container">
                    <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#1a1c16] text-[16px] text-nowrap tracking-[0.5px] whitespace-pre">{labelText}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {showSupportingText && (
          <div className="absolute bottom-[-20px] box-border content-stretch flex gap-[10px] h-[20px] items-start left-0 pb-0 pt-[4px] px-[16px] right-0" data-name="Supporting text">
            <p className="basis-0 font-['Manrope:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#44483b] text-[12px] tracking-[0.4px]">{supportingText}</p>
          </div>
        )}
      </button>
    );
  }
  if (style === "Outlined" && state === "Focused" && textConfigurations === "Label text" && !leadingIcon && !trailingIcon) {
    return (
      <div className={className} data-name="Style=Outlined, State=Focused, Text configurations=Label text, Leading icon=False, Trailing icon=False">
        <div className="basis-0 content-stretch flex flex-col gap-[10px] grow items-start min-h-px min-w-px relative rounded-[4px] shrink-0 w-full" data-name="Text field">
          <div aria-hidden="true" className="absolute border-[#4a671e] border-[3px] border-solid inset-0 pointer-events-none rounded-[4px]" />
          <div className="basis-0 grow min-h-px min-w-px relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="State-layer">
            <div className="size-full">
              <div className="box-border content-stretch flex items-start pl-[16px] pr-0 py-[4px] relative size-full">
                <div className="basis-0 box-border content-stretch flex flex-col grow h-[48px] items-start justify-center min-h-px min-w-px px-0 py-[4px] relative shrink-0" data-name="Content">
                  <div className="content-stretch flex items-center relative shrink-0" data-name="Input text container">
                    <div className="h-[16px] relative shrink-0 w-0" data-name="Caret">
                      <div className="absolute inset-[-3.13%_-0.5px]" style={{ "--stroke-0": "rgba(74, 103, 30, 1)" } as React.CSSProperties}>
                        <img alt="" className="block max-w-none size-full" src={imgCaret} />
                      </div>
                    </div>
                  </div>
                  <div className="absolute bg-white box-border content-stretch flex items-center left-[-4px] px-[4px] py-0 top-[-12px]" data-name="Label text container">
                    <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#4a671e] text-[12px] text-nowrap tracking-[0.4px] whitespace-pre">{labelText}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {showSupportingText && (
          <div className="absolute bottom-[-20px] box-border content-stretch flex gap-[10px] h-[20px] items-start left-0 pb-0 pt-[4px] px-[16px] right-0" data-name="Supporting text">
            <p className="basis-0 font-['Manrope:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#44483b] text-[12px] tracking-[0.4px]">{supportingText}</p>
          </div>
        )}
      </div>
    );
  }
  if (style === "Outlined" && state === "Enabled" && textConfigurations === "Label text" && !leadingIcon && !trailingIcon) {
    return (
      <div className={className} data-name="Style=Outlined, State=Enabled, Text configurations=Label text, Leading icon=False, Trailing icon=False">
        <div className="basis-0 content-stretch flex flex-col gap-[10px] grow items-start min-h-px min-w-px relative rounded-[4px] shrink-0 w-full" data-name="Text field">
          <div aria-hidden="true" className="absolute border border-[#74796a] border-solid inset-0 pointer-events-none rounded-[4px]" />
          <div className="basis-0 grow min-h-px min-w-px relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="State-layer">
            <div className="size-full">
              <div className="box-border content-stretch flex items-start pl-[16px] pr-0 py-[4px] relative size-full">
                <div className="basis-0 box-border content-stretch flex flex-col grow h-[48px] items-start justify-center min-h-px min-w-px px-0 py-[4px] relative shrink-0" data-name="Content">
                  <div className="content-stretch flex items-center relative shrink-0" data-name="Label text container">
                    <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#44483b] text-[16px] text-nowrap tracking-[0.5px] whitespace-pre">{labelText}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {showSupportingText && (
          <div className="absolute bottom-[-20px] box-border content-stretch flex gap-[10px] h-[20px] items-start left-0 pb-0 pt-[4px] px-[16px] right-0" data-name="Supporting text">
            <p className="basis-0 font-['Manrope:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#44483b] text-[12px] tracking-[0.4px]">{supportingText}</p>
          </div>
        )}
      </div>
    );
  }
  if (style === "Outlined" && state === "Disabled" && textConfigurations === "Input text" && !leadingIcon && !trailingIcon) {
    return (
      <div className={className} data-name="Style=Outlined, State=Disabled, Text configurations=Input text, Leading icon=False, Trailing icon=False">
        <div className="absolute inset-0 opacity-[0.04] rounded-[4px]" data-name="disabled-state-color">
          <div aria-hidden="true" className="absolute border border-[#1a1c16] border-solid inset-0 pointer-events-none rounded-[4px]" />
        </div>
        <div className="basis-0 content-stretch flex flex-col gap-[10px] grow items-start min-h-px min-w-px relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="Text field">
          <div className="basis-0 grow min-h-px min-w-px relative rounded-[4px] shrink-0 w-full" data-name="State-layer">
            <div aria-hidden="true" className="absolute border border-[rgba(26,28,22,0.12)] border-solid inset-[-0.5px] pointer-events-none rounded-[4.5px]" />
            <div className="size-full">
              <div className="box-border content-stretch flex items-start pl-[16px] pr-0 py-[4px] relative size-full">
                <div className="basis-0 box-border content-stretch flex flex-col grow h-[48px] items-start justify-center min-h-px min-w-px px-0 py-[4px] relative shrink-0" data-name="Content">
                  <div className="content-stretch flex items-center relative shrink-0" data-name="Input text container">
                    <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] opacity-[0.38] relative shrink-0 text-[#1a1c16] text-[16px] text-nowrap tracking-[0.5px]">
                      <p className="leading-[24px] whitespace-pre">{inputText}</p>
                    </div>
                  </div>
                  <div className="absolute bg-white box-border content-stretch flex items-center left-[-4px] px-[4px] py-0 top-[-12px]" data-name="Label text container">
                    <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[16px] opacity-[0.38] relative shrink-0 text-[#1a1c16] text-[12px] text-nowrap tracking-[0.4px] whitespace-pre">{labelText}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {showSupportingText && (
          <div className="absolute bottom-[-20px] box-border content-stretch flex gap-[10px] h-[20px] items-start left-0 opacity-[0.38] pb-0 pt-[4px] px-[16px] right-0" data-name="Supporting text">
            <p className="basis-0 font-['Manrope:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#1a1c16] text-[12px] tracking-[0.4px]">{supportingText}</p>
          </div>
        )}
      </div>
    );
  }
  if (style === "Outlined" && state === "Error" && textConfigurations === "Input text" && !leadingIcon && !trailingIcon) {
    return (
      <div className={className} data-name="Style=Outlined, State=Error, Text configurations=Input text, Leading icon=False, Trailing icon=False">
        <div className="basis-0 content-stretch flex flex-col gap-[10px] grow items-start min-h-px min-w-px relative rounded-[4px] shrink-0 w-full" data-name="Text field">
          <div aria-hidden="true" className="absolute border-[#ba1a1a] border-[3px] border-solid inset-0 pointer-events-none rounded-[4px]" />
          <div className="basis-0 grow min-h-px min-w-px relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="State-layer">
            <div className="size-full">
              <div className="box-border content-stretch flex items-start pl-[16px] pr-0 py-[4px] relative size-full">
                <div className="basis-0 box-border content-stretch flex flex-col grow h-[48px] items-start justify-center min-h-px min-w-px px-0 py-[4px] relative shrink-0" data-name="Content">
                  <div className="content-stretch flex items-center relative shrink-0" data-name="Input text container">
                    <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] text-nowrap tracking-[0.5px]">
                      <p className="leading-[24px] whitespace-pre">{inputText}</p>
                    </div>
                    <div className="h-[16px] relative shrink-0 w-0" data-name="Caret">
                      <div className="absolute inset-[-3.13%_-0.5px]" style={{ "--stroke-0": "rgba(186, 26, 26, 1)" } as React.CSSProperties}>
                        <img alt="" className="block max-w-none size-full" src={imgCaret1} />
                      </div>
                    </div>
                  </div>
                  <div className="absolute bg-white box-border content-stretch flex items-center left-[-4px] px-[4px] py-0 top-[-12px]" data-name="Label text container">
                    <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#ba1a1a] text-[12px] text-nowrap tracking-[0.4px] whitespace-pre">{labelText}</p>
                  </div>
                </div>
                <Trailingiconerror5 />
              </div>
            </div>
          </div>
        </div>
        {showSupportingText && (
          <div className="absolute bottom-[-20px] box-border content-stretch flex gap-[10px] h-[20px] items-start left-0 pb-0 pt-[4px] px-[16px] right-0" data-name="Supporting text">
            <p className="basis-0 font-['Manrope:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#ba1a1a] text-[12px] tracking-[0.4px]">{supportingText}</p>
          </div>
        )}
      </div>
    );
  }
  if (style === "Outlined" && state === "Hovered" && textConfigurations === "Input text" && !leadingIcon && !trailingIcon) {
    return (
      <button className={className} data-name="Style=Outlined, State=Hovered, Text configurations=Input text, Leading icon=False, Trailing icon=False">
        <div aria-hidden="true" className="absolute border-0 border-[#1a1c16] border-solid inset-0 pointer-events-none rounded-tl-[4px] rounded-tr-[4px]" />
        <div className="basis-0 content-stretch flex flex-col gap-[10px] grow items-start min-h-px min-w-px relative rounded-[4px] shrink-0 w-full" data-name="Text field">
          <div aria-hidden="true" className="absolute border border-[#1a1c16] border-solid inset-0 pointer-events-none rounded-[4px]" />
          <div className="basis-0 grow min-h-px min-w-px relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="State-layer">
            <div className="size-full">
              <div className="box-border content-stretch flex items-start pl-[16px] pr-0 py-[4px] relative size-full">
                <div className="basis-0 box-border content-stretch flex flex-col grow h-[48px] items-start justify-center min-h-px min-w-px px-0 py-[4px] relative shrink-0" data-name="Content">
                  <div className="content-stretch flex items-center relative shrink-0" data-name="Input text container">
                    <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] text-nowrap tracking-[0.5px]">
                      <p className="leading-[24px] whitespace-pre">{inputText}</p>
                    </div>
                  </div>
                  <div className="absolute bg-white box-border content-stretch flex items-center left-[-4px] px-[4px] py-0 top-[-12px]" data-name="Label text container">
                    <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#1a1c16] text-[12px] text-nowrap tracking-[0.4px] whitespace-pre">{labelText}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {showSupportingText && (
          <div className="absolute bottom-[-20px] box-border content-stretch flex gap-[10px] h-[20px] items-start left-0 pb-0 pt-[4px] px-[16px] right-0" data-name="Supporting text">
            <p className="basis-0 font-['Manrope:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#44483b] text-[12px] tracking-[0.4px]">{supportingText}</p>
          </div>
        )}
      </button>
    );
  }
  if (style === "Outlined" && state === "Focused" && textConfigurations === "Input text" && !leadingIcon && !trailingIcon) {
    return (
      <div className={className} data-name="Style=Outlined, State=Focused, Text configurations=Input text, Leading icon=False, Trailing icon=False">
        <div className="basis-0 content-stretch flex flex-col gap-[10px] grow items-start min-h-px min-w-px relative rounded-[4px] shrink-0 w-full" data-name="Text field">
          <div aria-hidden="true" className="absolute border-[#4a671e] border-[3px] border-solid inset-0 pointer-events-none rounded-[4px]" />
          <div className="basis-0 grow min-h-px min-w-px relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="State-layer">
            <div className="size-full">
              <div className="box-border content-stretch flex items-start pl-[16px] pr-0 py-[4px] relative size-full">
                <div className="basis-0 box-border content-stretch flex flex-col grow h-[48px] items-start justify-center min-h-px min-w-px px-0 py-[4px] relative shrink-0" data-name="Content">
                  <div className="content-stretch flex items-center relative shrink-0" data-name="Input text container">
                    <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] text-nowrap tracking-[0.5px]">
                      <p className="leading-[24px] whitespace-pre">{inputText}</p>
                    </div>
                    <div className="h-[16px] relative shrink-0 w-0" data-name="Caret">
                      <div className="absolute inset-[-3.13%_-0.5px]" style={{ "--stroke-0": "rgba(74, 103, 30, 1)" } as React.CSSProperties}>
                        <img alt="" className="block max-w-none size-full" src={imgCaret} />
                      </div>
                    </div>
                  </div>
                  <div className="absolute bg-white box-border content-stretch flex items-center left-[-4px] px-[4px] py-0 top-[-12px]" data-name="Label text container">
                    <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#4a671e] text-[12px] text-nowrap tracking-[0.4px] whitespace-pre">{labelText}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {showSupportingText && (
          <div className="absolute bottom-[-20px] box-border content-stretch flex gap-[10px] h-[20px] items-start left-0 pb-0 pt-[4px] px-[16px] right-0" data-name="Supporting text">
            <p className="basis-0 font-['Manrope:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#44483b] text-[12px] tracking-[0.4px]">{supportingText}</p>
          </div>
        )}
      </div>
    );
  }
  if (style === "Outlined" && state === "Enabled" && textConfigurations === "Input text" && !leadingIcon && !trailingIcon) {
    return (
      <div className={className} data-name="Style=Outlined, State=Enabled, Text configurations=Input text, Leading icon=False, Trailing icon=False">
        <div className="basis-0 content-stretch flex flex-col gap-[10px] grow items-start min-h-px min-w-px relative rounded-[4px] shrink-0 w-full" data-name="Text field">
          <div aria-hidden="true" className="absolute border border-[#74796a] border-solid inset-0 pointer-events-none rounded-[4px]" />
          <div className="basis-0 grow min-h-px min-w-px relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="State-layer">
            <div className="size-full">
              <div className="box-border content-stretch flex items-start pl-[16px] pr-0 py-[4px] relative size-full">
                <div className="basis-0 box-border content-stretch flex flex-col grow h-[48px] items-start justify-center min-h-px min-w-px px-0 py-[4px] relative shrink-0" data-name="Content">
                  <div className="content-stretch flex items-center relative shrink-0" data-name="Input text container">
                    <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] text-nowrap tracking-[0.5px]">
                      <p className="leading-[24px] whitespace-pre">{inputText}</p>
                    </div>
                  </div>
                  <div className="absolute bg-white box-border content-stretch flex items-center left-[-4px] px-[4px] py-0 top-[-12px]" data-name="Label text container">
                    <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#44483b] text-[12px] text-nowrap tracking-[0.4px] whitespace-pre">{labelText}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {showSupportingText && (
          <div className="absolute bottom-[-20px] box-border content-stretch flex gap-[10px] h-[20px] items-start left-0 pb-0 pt-[4px] px-[16px] right-0" data-name="Supporting text">
            <p className="basis-0 font-['Manrope:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#44483b] text-[12px] tracking-[0.4px]">{supportingText}</p>
          </div>
        )}
      </div>
    );
  }
  if (style === "Outlined" && state === "Disabled" && textConfigurations === "Placeholder text" && leadingIcon && trailingIcon) {
    return (
      <div className={className} data-name="Style=Outlined, State=Disabled, Text configurations=Placeholder text, Leading icon=True, Trailing icon=True">
        <div className="basis-0 content-stretch flex flex-col gap-[10px] grow items-start min-h-px min-w-px relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="Text field">
          <div className="basis-0 box-border content-stretch flex grow items-start min-h-px min-w-px px-0 py-[4px] relative rounded-[4px] shrink-0 w-full" data-name="State-layer">
            <div aria-hidden="true" className="absolute border border-[rgba(26,28,22,0.12)] border-solid inset-[-0.5px] pointer-events-none rounded-[4.5px]" />
            <Leadingicon15 />
            <div className="basis-0 box-border content-stretch flex flex-col grow h-[48px] items-start justify-center min-h-px min-w-px px-0 py-[4px] relative shrink-0" data-name="Content">
              <div className="content-stretch flex gap-[10px] items-start relative shrink-0" data-name="Placeholder text container">
                <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] opacity-[0.38] relative shrink-0 text-[#1a1c16] text-[16px] text-nowrap tracking-[0.5px]">
                  <p className="leading-[24px] whitespace-pre">{placeholderText}</p>
                </div>
              </div>
              <div className="absolute bg-white box-border content-stretch flex items-center left-[-36px] px-[4px] py-0 top-[-12px]" data-name="Label text container">
                <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[16px] opacity-[0.38] relative shrink-0 text-[#1a1c16] text-[12px] text-nowrap tracking-[0.4px] whitespace-pre">{labelText}</p>
              </div>
            </div>
            <Trailingicon />
          </div>
        </div>
        <div className="absolute inset-0 opacity-[0.04] rounded-[4px]" data-name="disabled-state-color">
          <div aria-hidden="true" className="absolute border border-[#1a1c16] border-solid inset-0 pointer-events-none rounded-[4px]" />
        </div>
        {showSupportingText && (
          <div className="absolute bottom-[-20px] box-border content-stretch flex gap-[10px] h-[20px] items-start left-0 opacity-[0.38] pb-0 pt-[4px] px-[16px] right-0" data-name="Supporting text">
            <p className="basis-0 font-['Manrope:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#1a1c16] text-[12px] tracking-[0.4px]">{supportingText}</p>
          </div>
        )}
      </div>
    );
  }
  if (style === "Outlined" && state === "Error" && textConfigurations === "Placeholder text" && leadingIcon && trailingIcon) {
    return (
      <div className={className} data-name="Style=Outlined, State=Error, Text configurations=Placeholder text, Leading icon=True, Trailing icon=True">
        <div className="basis-0 content-stretch flex flex-col gap-[10px] grow items-start min-h-px min-w-px relative rounded-[4px] shrink-0 w-full" data-name="Text field">
          <div aria-hidden="true" className="absolute border border-[#ba1a1a] border-solid inset-0 pointer-events-none rounded-[4px]" />
          <div className="basis-0 box-border content-stretch flex grow items-start min-h-px min-w-px px-0 py-[4px] relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="State-layer">
            <Leadingicon16 />
            <div className="basis-0 box-border content-stretch flex flex-col grow h-[48px] items-start justify-center min-h-px min-w-px px-0 py-[4px] relative shrink-0" data-name="Content">
              <div className="content-stretch flex gap-[10px] items-start relative shrink-0" data-name="Placeholder text container">
                <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#44483b] text-[16px] text-nowrap tracking-[0.5px]">
                  <p className="leading-[24px] whitespace-pre">{placeholderText}</p>
                </div>
              </div>
              <div className="absolute bg-white box-border content-stretch flex items-center left-[-36px] px-[4px] py-0 top-[-12px]" data-name="Label text container">
                <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#ba1a1a] text-[12px] text-nowrap tracking-[0.4px] whitespace-pre">{labelText}</p>
              </div>
            </div>
            <Trailingiconerror6 />
          </div>
        </div>
        {showSupportingText && (
          <div className="absolute bottom-[-20px] box-border content-stretch flex gap-[10px] h-[20px] items-start left-0 pb-0 pt-[4px] px-[16px] right-0" data-name="Supporting text">
            <p className="basis-0 font-['Manrope:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#ba1a1a] text-[12px] tracking-[0.4px]">{supportingText}</p>
          </div>
        )}
      </div>
    );
  }
  if (style === "Outlined" && state === "Hovered" && textConfigurations === "Placeholder text" && leadingIcon && trailingIcon) {
    return (
      <button className={className} data-name="Style=Outlined, State=Hovered, Text configurations=Placeholder text, Leading icon=True, Trailing icon=True">
        <div aria-hidden="true" className="absolute border-0 border-[#1a1c16] border-solid inset-0 pointer-events-none rounded-tl-[4px] rounded-tr-[4px]" />
        <div className="basis-0 content-stretch flex flex-col gap-[10px] grow items-start min-h-px min-w-px relative rounded-[4px] shrink-0 w-full" data-name="Text field">
          <div aria-hidden="true" className="absolute border border-[#1a1c16] border-solid inset-0 pointer-events-none rounded-[4px]" />
          <div className="basis-0 box-border content-stretch flex grow items-start min-h-px min-w-px px-0 py-[4px] relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="State-layer">
            <Leadingicon17 />
            <div className="basis-0 box-border content-stretch flex flex-col grow h-[48px] items-start justify-center min-h-px min-w-px px-0 py-[4px] relative shrink-0" data-name="Content">
              <div className="content-stretch flex gap-[10px] items-start relative shrink-0" data-name="Placeholder text container">
                <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#44483b] text-[16px] text-nowrap tracking-[0.5px]">
                  <p className="leading-[24px] whitespace-pre">{placeholderText}</p>
                </div>
              </div>
              <div className="absolute bg-white box-border content-stretch flex items-center left-[-36px] px-[4px] py-0 top-[-12px]" data-name="Label text container">
                <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#1a1c16] text-[12px] text-nowrap tracking-[0.4px] whitespace-pre">{labelText}</p>
              </div>
            </div>
            <Trailingicon1 />
          </div>
        </div>
        {showSupportingText && (
          <div className="absolute bottom-[-20px] box-border content-stretch flex gap-[10px] h-[20px] items-start left-0 pb-0 pt-[4px] px-[16px] right-0" data-name="Supporting text">
            <p className="basis-0 font-['Manrope:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#44483b] text-[12px] tracking-[0.4px]">{supportingText}</p>
          </div>
        )}
      </button>
    );
  }
  if (style === "Outlined" && state === "Focused" && textConfigurations === "Placeholder text" && leadingIcon && trailingIcon) {
    return (
      <div className={className} data-name="Style=Outlined, State=Focused, Text configurations=Placeholder text, Leading icon=True, Trailing icon=True">
        <div className="basis-0 content-stretch flex flex-col gap-[10px] grow items-start min-h-px min-w-px relative rounded-[4px] shrink-0 w-full" data-name="Text field">
          <div aria-hidden="true" className="absolute border-[#4a671e] border-[3px] border-solid inset-0 pointer-events-none rounded-[4px]" />
          <div className="basis-0 box-border content-stretch flex grow items-start min-h-px min-w-px px-0 py-[4px] relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="State-layer">
            <Leadingicon18 />
            <div className="basis-0 box-border content-stretch flex flex-col grow h-[48px] items-start justify-center min-h-px min-w-px px-0 py-[4px] relative shrink-0" data-name="Content">
              <div className="content-stretch flex items-center relative shrink-0" data-name="Placeholder text container">
                <div className="h-[16px] relative shrink-0 w-0" data-name="Caret">
                  <div className="absolute inset-[-3.13%_-0.5px]" style={{ "--stroke-0": "rgba(74, 103, 30, 1)" } as React.CSSProperties}>
                    <img alt="" className="block max-w-none size-full" src={imgCaret} />
                  </div>
                </div>
                <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#44483b] text-[16px] text-nowrap tracking-[0.5px]">
                  <p className="leading-[24px] whitespace-pre">{placeholderText}</p>
                </div>
              </div>
              <div className="absolute bg-white box-border content-stretch flex items-center left-[-36px] px-[4px] py-0 top-[-12px]" data-name="Label text container">
                <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#4a671e] text-[12px] text-nowrap tracking-[0.4px] whitespace-pre">{labelText}</p>
              </div>
            </div>
            <Trailingicon2 />
          </div>
        </div>
        {showSupportingText && (
          <div className="absolute bottom-[-20px] box-border content-stretch flex gap-[10px] h-[20px] items-start left-0 pb-0 pt-[4px] px-[16px] right-0" data-name="Supporting text">
            <p className="basis-0 font-['Manrope:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#44483b] text-[12px] tracking-[0.4px]">{supportingText}</p>
          </div>
        )}
      </div>
    );
  }
  if (style === "Outlined" && state === "Enabled" && textConfigurations === "Placeholder text" && leadingIcon && trailingIcon) {
    return (
      <div className={className} data-name="Style=Outlined, State=Enabled, Text configurations=Placeholder text, Leading icon=True, Trailing icon=True">
        <div className="basis-0 content-stretch flex flex-col gap-[10px] grow items-start min-h-px min-w-px relative rounded-[4px] shrink-0 w-full" data-name="Text field">
          <div aria-hidden="true" className="absolute border border-[#74796a] border-solid inset-0 pointer-events-none rounded-[4px]" />
          <div className="basis-0 box-border content-stretch flex grow items-start min-h-px min-w-px px-0 py-[4px] relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="State-layer">
            <Leadingicon19 />
            <div className="basis-0 box-border content-stretch flex flex-col grow h-[48px] items-start justify-center min-h-px min-w-px px-0 py-[4px] relative shrink-0" data-name="Content">
              <div className="content-stretch flex gap-[10px] items-start relative shrink-0" data-name="Placeholder text container">
                <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#44483b] text-[16px] text-nowrap tracking-[0.5px]">
                  <p className="leading-[24px] whitespace-pre">{placeholderText}</p>
                </div>
              </div>
              <div className="absolute bg-white box-border content-stretch flex items-center left-[-36px] px-[4px] py-0 top-[-12px]" data-name="Label text container">
                <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#44483b] text-[12px] text-nowrap tracking-[0.4px] whitespace-pre">{labelText}</p>
              </div>
            </div>
            <Trailingicon3 />
          </div>
        </div>
        {showSupportingText && (
          <div className="absolute bottom-[-20px] box-border content-stretch flex gap-[10px] h-[20px] items-start left-0 pb-0 pt-[4px] px-[16px] right-0" data-name="Supporting text">
            <p className="basis-0 font-['Manrope:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#44483b] text-[12px] tracking-[0.4px]">{supportingText}</p>
          </div>
        )}
      </div>
    );
  }
  if (style === "Outlined" && state === "Disabled" && textConfigurations === "Label text" && leadingIcon && trailingIcon) {
    return (
      <div className={className} data-name="Style=Outlined, State=Disabled, Text configurations=Label text, Leading icon=True, Trailing icon=True">
        <div className="absolute inset-0 opacity-[0.04] rounded-[4px]" data-name="disabled-state-color">
          <div aria-hidden="true" className="absolute border border-[#1a1c16] border-solid inset-0 pointer-events-none rounded-[4px]" />
        </div>
        <div className="basis-0 content-stretch flex flex-col gap-[10px] grow items-start min-h-px min-w-px relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="Text field">
          <div className="basis-0 box-border content-stretch flex grow items-start min-h-px min-w-px px-0 py-[4px] relative rounded-[4px] shrink-0 w-full" data-name="State-layer">
            <div aria-hidden="true" className="absolute border border-[rgba(26,28,22,0.12)] border-solid inset-[-0.5px] pointer-events-none rounded-[4.5px]" />
            <Leadingicon20 />
            <div className="basis-0 box-border content-stretch flex flex-col grow h-[48px] items-start justify-center min-h-px min-w-px px-0 py-[4px] relative shrink-0" data-name="Content">
              <div className="content-stretch flex items-center relative shrink-0" data-name="Label text container">
                <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[24px] opacity-[0.38] relative shrink-0 text-[#1a1c16] text-[16px] text-nowrap tracking-[0.5px] whitespace-pre">{labelText}</p>
              </div>
            </div>
            <Trailingicon4 />
          </div>
        </div>
        {showSupportingText && (
          <div className="absolute bottom-[-20px] box-border content-stretch flex gap-[10px] h-[20px] items-start left-0 opacity-[0.38] pb-0 pt-[4px] px-[16px] right-0" data-name="Supporting text">
            <p className="basis-0 font-['Manrope:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#1a1c16] text-[12px] tracking-[0.4px]">{supportingText}</p>
          </div>
        )}
      </div>
    );
  }
  if (style === "Outlined" && state === "Error" && textConfigurations === "Label text" && leadingIcon && trailingIcon) {
    return (
      <div className={className} data-name="Style=Outlined, State=Error, Text configurations=Label text, Leading icon=True, Trailing icon=True">
        <div className="basis-0 content-stretch flex flex-col gap-[10px] grow items-start min-h-px min-w-px relative rounded-[4px] shrink-0 w-full" data-name="Text field">
          <div aria-hidden="true" className="absolute border border-[#ba1a1a] border-solid inset-0 pointer-events-none rounded-[4px]" />
          <div className="basis-0 box-border content-stretch flex grow items-start min-h-px min-w-px px-0 py-[4px] relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="State-layer">
            <Leadingicon21 />
            <div className="basis-0 box-border content-stretch flex flex-col grow h-[48px] items-start justify-center min-h-px min-w-px px-0 py-[4px] relative shrink-0" data-name="Content">
              <div className="content-stretch flex items-center relative shrink-0" data-name="Label text container">
                <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#ba1a1a] text-[16px] text-nowrap tracking-[0.5px] whitespace-pre">{labelText}</p>
              </div>
            </div>
            <Trailingiconerror7 />
          </div>
        </div>
        {showSupportingText && (
          <div className="absolute bottom-[-20px] box-border content-stretch flex gap-[10px] h-[20px] items-start left-0 pb-0 pt-[4px] px-[16px] right-0" data-name="Supporting text">
            <p className="basis-0 font-['Manrope:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#ba1a1a] text-[12px] tracking-[0.4px]">{supportingText}</p>
          </div>
        )}
      </div>
    );
  }
  if (style === "Outlined" && state === "Hovered" && textConfigurations === "Label text" && leadingIcon && trailingIcon) {
    return (
      <button className={className} data-name="Style=Outlined, State=Hovered, Text configurations=Label text, Leading icon=True, Trailing icon=True">
        <div aria-hidden="true" className="absolute border-0 border-[#1a1c16] border-solid inset-0 pointer-events-none rounded-tl-[4px] rounded-tr-[4px]" />
        <div className="basis-0 content-stretch flex flex-col gap-[10px] grow items-start min-h-px min-w-px relative rounded-[4px] shrink-0 w-full" data-name="Text field">
          <div aria-hidden="true" className="absolute border border-[#1a1c16] border-solid inset-0 pointer-events-none rounded-[4px]" />
          <div className="basis-0 box-border content-stretch flex grow items-start min-h-px min-w-px px-0 py-[4px] relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="State-layer">
            <Leadingicon22 />
            <div className="basis-0 box-border content-stretch flex flex-col grow h-[48px] items-start justify-center min-h-px min-w-px px-0 py-[4px] relative shrink-0" data-name="Content">
              <div className="content-stretch flex items-center relative shrink-0" data-name="Label text container">
                <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#1a1c16] text-[16px] text-nowrap tracking-[0.5px] whitespace-pre">{labelText}</p>
              </div>
            </div>
            <Trailingicon5 />
          </div>
        </div>
        {showSupportingText && (
          <div className="absolute bottom-[-20px] box-border content-stretch flex gap-[10px] h-[20px] items-start left-0 pb-0 pt-[4px] px-[16px] right-0" data-name="Supporting text">
            <p className="basis-0 font-['Manrope:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#44483b] text-[12px] tracking-[0.4px]">{supportingText}</p>
          </div>
        )}
      </button>
    );
  }
  if (style === "Outlined" && state === "Focused" && textConfigurations === "Label text" && leadingIcon && trailingIcon) {
    return (
      <div className={className} data-name="Style=Outlined, State=Focused, Text configurations=Label text, Leading icon=True, Trailing icon=True">
        <div className="basis-0 content-stretch flex flex-col gap-[10px] grow items-start min-h-px min-w-px relative rounded-[4px] shrink-0 w-full" data-name="Text field">
          <div aria-hidden="true" className="absolute border-[#4a671e] border-[3px] border-solid inset-0 pointer-events-none rounded-[4px]" />
          <div className="basis-0 box-border content-stretch flex grow items-start min-h-px min-w-px px-0 py-[4px] relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="State-layer">
            <Leadingicon23 />
            <div className="basis-0 box-border content-stretch flex flex-col grow h-[48px] items-start justify-center min-h-px min-w-px px-0 py-[4px] relative shrink-0" data-name="Content">
              <div className="content-stretch flex items-center relative shrink-0" data-name="Input text container">
                <div className="h-[16px] relative shrink-0 w-0" data-name="Caret">
                  <div className="absolute inset-[-3.13%_-0.5px]" style={{ "--stroke-0": "rgba(74, 103, 30, 1)" } as React.CSSProperties}>
                    <img alt="" className="block max-w-none size-full" src={imgCaret} />
                  </div>
                </div>
              </div>
              <div className="absolute bg-white box-border content-stretch flex items-center left-[-36px] px-[4px] py-0 top-[-12px]" data-name="Label text container">
                <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#4a671e] text-[12px] text-nowrap tracking-[0.4px] whitespace-pre">{labelText}</p>
              </div>
            </div>
            <Trailingicon6 />
          </div>
        </div>
        {showSupportingText && (
          <div className="absolute bottom-[-20px] box-border content-stretch flex gap-[10px] h-[20px] items-start left-0 pb-0 pt-[4px] px-[16px] right-0" data-name="Supporting text">
            <p className="basis-0 font-['Manrope:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#44483b] text-[12px] tracking-[0.4px]">{supportingText}</p>
          </div>
        )}
      </div>
    );
  }
  if (style === "Outlined" && state === "Enabled" && textConfigurations === "Label text" && leadingIcon && trailingIcon) {
    return (
      <div className={className} data-name="Style=Outlined, State=Enabled, Text configurations=Label text, Leading icon=True, Trailing icon=True">
        <div className="basis-0 content-stretch flex flex-col gap-[10px] grow items-start min-h-px min-w-px relative rounded-[4px] shrink-0 w-full" data-name="Text field">
          <div aria-hidden="true" className="absolute border border-[#74796a] border-solid inset-0 pointer-events-none rounded-[4px]" />
          <div className="basis-0 box-border content-stretch flex grow items-start min-h-px min-w-px px-0 py-[4px] relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="State-layer">
            <Leadingicon24 />
            <div className="basis-0 box-border content-stretch flex flex-col grow h-[48px] items-start justify-center min-h-px min-w-px px-0 py-[4px] relative shrink-0" data-name="Content">
              <div className="content-stretch flex items-center relative shrink-0" data-name="Label text container">
                <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#44483b] text-[16px] text-nowrap tracking-[0.5px] whitespace-pre">{labelText}</p>
              </div>
            </div>
            <Trailingicon7 />
          </div>
        </div>
        {showSupportingText && (
          <div className="absolute bottom-[-20px] box-border content-stretch flex gap-[10px] h-[20px] items-start left-0 pb-0 pt-[4px] px-[16px] right-0" data-name="Supporting text">
            <p className="basis-0 font-['Manrope:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#44483b] text-[12px] tracking-[0.4px]">{supportingText}</p>
          </div>
        )}
      </div>
    );
  }
  if (style === "Outlined" && state === "Disabled" && textConfigurations === "Input text" && leadingIcon && trailingIcon) {
    return (
      <div className={className} data-name="Style=Outlined, State=Disabled, Text configurations=Input text, Leading icon=True, Trailing icon=True">
        <div className="absolute inset-0 opacity-[0.04] rounded-[4px]" data-name="disabled-state-color">
          <div aria-hidden="true" className="absolute border border-[#1a1c16] border-solid inset-0 pointer-events-none rounded-[4px]" />
        </div>
        <div className="basis-0 content-stretch flex flex-col gap-[10px] grow items-start min-h-px min-w-px relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="Text field">
          <div className="basis-0 box-border content-stretch flex grow items-start min-h-px min-w-px px-0 py-[4px] relative rounded-[4px] shrink-0 w-full" data-name="State-layer">
            <div aria-hidden="true" className="absolute border border-[rgba(26,28,22,0.12)] border-solid inset-[-0.5px] pointer-events-none rounded-[4.5px]" />
            <Leadingicon25 />
            <div className="basis-0 box-border content-stretch flex flex-col grow h-[48px] items-start justify-center min-h-px min-w-px px-0 py-[4px] relative shrink-0" data-name="Content">
              <div className="content-stretch flex items-center relative shrink-0" data-name="Input text container">
                <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] opacity-[0.38] relative shrink-0 text-[#1a1c16] text-[16px] text-nowrap tracking-[0.5px]">
                  <p className="leading-[24px] whitespace-pre">{inputText}</p>
                </div>
              </div>
              <div className="absolute bg-white box-border content-stretch flex items-center left-[-36px] px-[4px] py-0 top-[-12px]" data-name="Label text container">
                <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[16px] opacity-[0.38] relative shrink-0 text-[#1a1c16] text-[12px] text-nowrap tracking-[0.4px] whitespace-pre">{labelText}</p>
              </div>
            </div>
            <Trailingicon8 />
          </div>
        </div>
        {showSupportingText && (
          <div className="absolute bottom-[-20px] box-border content-stretch flex gap-[10px] h-[20px] items-start left-0 opacity-[0.38] pb-0 pt-[4px] px-[16px] right-0" data-name="Supporting text">
            <p className="basis-0 font-['Manrope:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#1a1c16] text-[12px] tracking-[0.4px]">{supportingText}</p>
          </div>
        )}
      </div>
    );
  }
  if (style === "Outlined" && state === "Error" && textConfigurations === "Input text" && leadingIcon && trailingIcon) {
    return (
      <div className={className} data-name="Style=Outlined, State=Error, Text configurations=Input text, Leading icon=True, Trailing icon=True">
        <div className="basis-0 content-stretch flex flex-col gap-[10px] grow items-start min-h-px min-w-px relative rounded-[4px] shrink-0 w-full" data-name="Text field">
          <div aria-hidden="true" className="absolute border-[#ba1a1a] border-[3px] border-solid inset-0 pointer-events-none rounded-[4px]" />
          <div className="basis-0 box-border content-stretch flex grow items-start min-h-px min-w-px px-0 py-[4px] relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="State-layer">
            <Leadingicon26 />
            <div className="basis-0 box-border content-stretch flex flex-col grow h-[48px] items-start justify-center min-h-px min-w-px px-0 py-[4px] relative shrink-0" data-name="Content">
              <div className="content-stretch flex items-center relative shrink-0" data-name="Input text container">
                <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] text-nowrap tracking-[0.5px]">
                  <p className="leading-[24px] whitespace-pre">{inputText}</p>
                </div>
                <div className="h-[16px] relative shrink-0 w-0" data-name="Caret">
                  <div className="absolute inset-[-3.13%_-0.5px]" style={{ "--stroke-0": "rgba(186, 26, 26, 1)" } as React.CSSProperties}>
                    <img alt="" className="block max-w-none size-full" src={imgCaret1} />
                  </div>
                </div>
              </div>
              <div className="absolute bg-white box-border content-stretch flex items-center left-[-36px] px-[4px] py-0 top-[-12px]" data-name="Label text container">
                <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#ba1a1a] text-[12px] text-nowrap tracking-[0.4px] whitespace-pre">{labelText}</p>
              </div>
            </div>
            <Trailingiconerror8 />
          </div>
        </div>
        {showSupportingText && (
          <div className="absolute bottom-[-20px] box-border content-stretch flex gap-[10px] h-[20px] items-start left-0 pb-0 pt-[4px] px-[16px] right-0" data-name="Supporting text">
            <p className="basis-0 font-['Manrope:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#ba1a1a] text-[12px] tracking-[0.4px]">{supportingText}</p>
          </div>
        )}
      </div>
    );
  }
  if (style === "Outlined" && state === "Hovered" && textConfigurations === "Input text" && leadingIcon && trailingIcon) {
    return (
      <button className={className} data-name="Style=Outlined, State=Hovered, Text configurations=Input text, Leading icon=True, Trailing icon=True">
        <div aria-hidden="true" className="absolute border-0 border-[#1a1c16] border-solid inset-0 pointer-events-none rounded-tl-[4px] rounded-tr-[4px]" />
        <div className="basis-0 content-stretch flex flex-col gap-[10px] grow items-start min-h-px min-w-px relative rounded-[4px] shrink-0 w-full" data-name="Text field">
          <div aria-hidden="true" className="absolute border border-[#1a1c16] border-solid inset-0 pointer-events-none rounded-[4px]" />
          <div className="basis-0 box-border content-stretch flex grow items-start min-h-px min-w-px px-0 py-[4px] relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="State-layer">
            <Leadingicon27 />
            <div className="basis-0 box-border content-stretch flex flex-col grow h-[48px] items-start justify-center min-h-px min-w-px px-0 py-[4px] relative shrink-0" data-name="Content">
              <div className="content-stretch flex items-center relative shrink-0" data-name="Input text container">
                <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] text-nowrap tracking-[0.5px]">
                  <p className="leading-[24px] whitespace-pre">{inputText}</p>
                </div>
              </div>
              <div className="absolute bg-white box-border content-stretch flex items-center left-[-36px] px-[4px] py-0 top-[-12px]" data-name="Label text container">
                <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#1a1c16] text-[12px] text-nowrap tracking-[0.4px] whitespace-pre">{labelText}</p>
              </div>
            </div>
            <Trailingicon9 />
          </div>
        </div>
        {showSupportingText && (
          <div className="absolute bottom-[-20px] box-border content-stretch flex gap-[10px] h-[20px] items-start left-0 pb-0 pt-[4px] px-[16px] right-0" data-name="Supporting text">
            <p className="basis-0 font-['Manrope:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#44483b] text-[12px] tracking-[0.4px]">{supportingText}</p>
          </div>
        )}
      </button>
    );
  }
  if (style === "Outlined" && state === "Focused" && textConfigurations === "Input text" && leadingIcon && trailingIcon) {
    return (
      <div className={className} data-name="Style=Outlined, State=Focused, Text configurations=Input text, Leading icon=True, Trailing icon=True">
        <div className="basis-0 content-stretch flex flex-col gap-[10px] grow items-start min-h-px min-w-px relative rounded-[4px] shrink-0 w-full" data-name="Text field">
          <div aria-hidden="true" className="absolute border-[#4a671e] border-[3px] border-solid inset-0 pointer-events-none rounded-[4px]" />
          <div className="basis-0 box-border content-stretch flex grow items-start min-h-px min-w-px px-0 py-[4px] relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="State-layer">
            <Leadingicon28 />
            <div className="basis-0 box-border content-stretch flex flex-col grow h-[48px] items-start justify-center min-h-px min-w-px px-0 py-[4px] relative shrink-0" data-name="Content">
              <div className="content-stretch flex items-center relative shrink-0" data-name="Input text container">
                <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] text-nowrap tracking-[0.5px]">
                  <p className="leading-[24px] whitespace-pre">{inputText}</p>
                </div>
                <div className="h-[16px] relative shrink-0 w-0" data-name="Caret">
                  <div className="absolute inset-[-3.13%_-0.5px]" style={{ "--stroke-0": "rgba(74, 103, 30, 1)" } as React.CSSProperties}>
                    <img alt="" className="block max-w-none size-full" src={imgCaret} />
                  </div>
                </div>
              </div>
              <div className="absolute bg-white box-border content-stretch flex items-center left-[-36px] px-[4px] py-0 top-[-12px]" data-name="Label text container">
                <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#4a671e] text-[12px] text-nowrap tracking-[0.4px] whitespace-pre">{labelText}</p>
              </div>
            </div>
            <Trailingicon10 />
          </div>
        </div>
        {showSupportingText && (
          <div className="absolute bottom-[-20px] box-border content-stretch flex gap-[10px] h-[20px] items-start left-0 pb-0 pt-[4px] px-[16px] right-0" data-name="Supporting text">
            <p className="basis-0 font-['Manrope:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#44483b] text-[12px] tracking-[0.4px]">{supportingText}</p>
          </div>
        )}
      </div>
    );
  }
  if (style === "Outlined" && state === "Enabled" && textConfigurations === "Input text" && leadingIcon && trailingIcon) {
    return (
      <div className={className} data-name="Style=Outlined, State=Enabled, Text configurations=Input text, Leading icon=True, Trailing icon=True">
        <div className="basis-0 content-stretch flex flex-col gap-[10px] grow items-start min-h-px min-w-px relative rounded-[4px] shrink-0 w-full" data-name="Text field">
          <div aria-hidden="true" className="absolute border border-[#74796a] border-solid inset-0 pointer-events-none rounded-[4px]" />
          <div className="basis-0 box-border content-stretch flex grow items-start min-h-px min-w-px px-0 py-[4px] relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="State-layer">
            <Leadingicon29 />
            <div className="basis-0 box-border content-stretch flex flex-col grow h-[48px] items-start justify-center min-h-px min-w-px px-0 py-[4px] relative shrink-0" data-name="Content">
              <div className="content-stretch flex items-center relative shrink-0" data-name="Input text container">
                <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] text-nowrap tracking-[0.5px]">
                  <p className="leading-[24px] whitespace-pre">{inputText}</p>
                </div>
              </div>
              <div className="absolute bg-white box-border content-stretch flex items-center left-[-36px] px-[4px] py-0 top-[-12px]" data-name="Label text container">
                <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#44483b] text-[12px] text-nowrap tracking-[0.4px] whitespace-pre">{labelText}</p>
              </div>
            </div>
            <Trailingicon11 />
          </div>
        </div>
        {showSupportingText && (
          <div className="absolute bottom-[-20px] box-border content-stretch flex gap-[10px] h-[20px] items-start left-0 pb-0 pt-[4px] px-[16px] right-0" data-name="Supporting text">
            <p className="basis-0 font-['Manrope:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#44483b] text-[12px] tracking-[0.4px]">{supportingText}</p>
          </div>
        )}
      </div>
    );
  }
  if (style === "Outlined" && state === "Disabled" && textConfigurations === "Placeholder text" && !leadingIcon && trailingIcon) {
    return (
      <div className={className} data-name="Style=Outlined, State=Disabled, Text configurations=Placeholder text, Leading icon=False, Trailing icon=True">
        <div className="basis-0 content-stretch flex flex-col gap-[10px] grow items-start min-h-px min-w-px relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="Text field">
          <div className="basis-0 grow min-h-px min-w-px relative rounded-[4px] shrink-0 w-full" data-name="State-layer">
            <div aria-hidden="true" className="absolute border border-[rgba(26,28,22,0.12)] border-solid inset-[-0.5px] pointer-events-none rounded-[4.5px]" />
            <div className="size-full">
              <div className="box-border content-stretch flex items-start pl-[16px] pr-0 py-[4px] relative size-full">
                <div className="basis-0 box-border content-stretch flex flex-col grow h-[48px] items-start justify-center min-h-px min-w-px px-0 py-[4px] relative shrink-0" data-name="Content">
                  <div className="content-stretch flex gap-[10px] items-start relative shrink-0" data-name="Placeholder text container">
                    <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] opacity-[0.38] relative shrink-0 text-[#1a1c16] text-[16px] text-nowrap tracking-[0.5px]">
                      <p className="leading-[24px] whitespace-pre">{placeholderText}</p>
                    </div>
                  </div>
                  <div className="absolute bg-white box-border content-stretch flex items-center left-[-4px] px-[4px] py-0 top-[-12px]" data-name="Label text container">
                    <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[16px] opacity-[0.38] relative shrink-0 text-[#1a1c16] text-[12px] text-nowrap tracking-[0.4px] whitespace-pre">{labelText}</p>
                  </div>
                </div>
                <Trailingicon12 />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 opacity-[0.04] rounded-[4px]" data-name="disabled-state-color">
          <div aria-hidden="true" className="absolute border border-[#1a1c16] border-solid inset-0 pointer-events-none rounded-[4px]" />
        </div>
        {showSupportingText && (
          <div className="absolute bottom-[-20px] box-border content-stretch flex gap-[10px] h-[20px] items-start left-0 opacity-[0.38] pb-0 pt-[4px] px-[16px] right-0" data-name="Supporting text">
            <p className="basis-0 font-['Manrope:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#1a1c16] text-[12px] tracking-[0.4px]">{supportingText}</p>
          </div>
        )}
      </div>
    );
  }
  if (style === "Outlined" && state === "Error" && textConfigurations === "Placeholder text" && !leadingIcon && trailingIcon) {
    return (
      <div className={className} data-name="Style=Outlined, State=Error, Text configurations=Placeholder text, Leading icon=False, Trailing icon=True">
        <div className="basis-0 content-stretch flex flex-col gap-[10px] grow items-start min-h-px min-w-px relative rounded-[4px] shrink-0 w-full" data-name="Text field">
          <div aria-hidden="true" className="absolute border border-[#ba1a1a] border-solid inset-0 pointer-events-none rounded-[4px]" />
          <div className="basis-0 grow min-h-px min-w-px relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="State-layer">
            <div className="size-full">
              <div className="box-border content-stretch flex items-start pl-[16px] pr-0 py-[4px] relative size-full">
                <div className="basis-0 box-border content-stretch flex flex-col grow h-[48px] items-start justify-center min-h-px min-w-px px-0 py-[4px] relative shrink-0" data-name="Content">
                  <div className="content-stretch flex gap-[10px] items-start relative shrink-0" data-name="Placeholder text container">
                    <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#44483b] text-[16px] text-nowrap tracking-[0.5px]">
                      <p className="leading-[24px] whitespace-pre">{placeholderText}</p>
                    </div>
                  </div>
                  <div className="absolute bg-white box-border content-stretch flex items-center left-[-4px] px-[4px] py-0 top-[-12px]" data-name="Label text container">
                    <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#ba1a1a] text-[12px] text-nowrap tracking-[0.4px] whitespace-pre">{labelText}</p>
                  </div>
                </div>
                <Trailingiconerror9 />
              </div>
            </div>
          </div>
        </div>
        {showSupportingText && (
          <div className="absolute bottom-[-20px] box-border content-stretch flex gap-[10px] h-[20px] items-start left-0 pb-0 pt-[4px] px-[16px] right-0" data-name="Supporting text">
            <p className="basis-0 font-['Manrope:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#ba1a1a] text-[12px] tracking-[0.4px]">{supportingText}</p>
          </div>
        )}
      </div>
    );
  }
  if (style === "Outlined" && state === "Hovered" && textConfigurations === "Placeholder text" && !leadingIcon && trailingIcon) {
    return (
      <button className={className} data-name="Style=Outlined, State=Hovered, Text configurations=Placeholder text, Leading icon=False, Trailing icon=True">
        <div aria-hidden="true" className="absolute border-0 border-[#1a1c16] border-solid inset-0 pointer-events-none rounded-tl-[4px] rounded-tr-[4px]" />
        <div className="basis-0 content-stretch flex flex-col gap-[10px] grow items-start min-h-px min-w-px relative rounded-[4px] shrink-0 w-full" data-name="Text field">
          <div aria-hidden="true" className="absolute border border-[#1a1c16] border-solid inset-0 pointer-events-none rounded-[4px]" />
          <div className="basis-0 grow min-h-px min-w-px relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="State-layer">
            <div className="size-full">
              <div className="box-border content-stretch flex items-start pl-[16px] pr-0 py-[4px] relative size-full">
                <div className="basis-0 box-border content-stretch flex flex-col grow h-[48px] items-start justify-center min-h-px min-w-px px-0 py-[4px] relative shrink-0" data-name="Content">
                  <div className="content-stretch flex gap-[10px] items-start relative shrink-0" data-name="Placeholder text container">
                    <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#44483b] text-[16px] text-nowrap tracking-[0.5px]">
                      <p className="leading-[24px] whitespace-pre">{placeholderText}</p>
                    </div>
                  </div>
                  <div className="absolute bg-white box-border content-stretch flex items-center left-[-4px] px-[4px] py-0 top-[-12px]" data-name="Label text container">
                    <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#1a1c16] text-[12px] text-nowrap tracking-[0.4px] whitespace-pre">{labelText}</p>
                  </div>
                </div>
                <Trailingicon13 />
              </div>
            </div>
          </div>
        </div>
        {showSupportingText && (
          <div className="absolute bottom-[-20px] box-border content-stretch flex gap-[10px] h-[20px] items-start left-0 pb-0 pt-[4px] px-[16px] right-0" data-name="Supporting text">
            <p className="basis-0 font-['Manrope:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#44483b] text-[12px] tracking-[0.4px]">{supportingText}</p>
          </div>
        )}
      </button>
    );
  }
  if (style === "Outlined" && state === "Focused" && textConfigurations === "Placeholder text" && !leadingIcon && trailingIcon) {
    return (
      <div className={className} data-name="Style=Outlined, State=Focused, Text configurations=Placeholder text, Leading icon=False, Trailing icon=True">
        <div className="basis-0 content-stretch flex flex-col gap-[10px] grow items-start min-h-px min-w-px relative rounded-[4px] shrink-0 w-full" data-name="Text field">
          <div aria-hidden="true" className="absolute border-[#4a671e] border-[3px] border-solid inset-0 pointer-events-none rounded-[4px]" />
          <div className="basis-0 grow min-h-px min-w-px relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="State-layer">
            <div className="size-full">
              <div className="box-border content-stretch flex items-start pl-[16px] pr-0 py-[4px] relative size-full">
                <div className="basis-0 box-border content-stretch flex flex-col grow h-[48px] items-start justify-center min-h-px min-w-px px-0 py-[4px] relative shrink-0" data-name="Content">
                  <div className="content-stretch flex items-center relative shrink-0" data-name="Placeholder text container">
                    <div className="h-[16px] relative shrink-0 w-0" data-name="Caret">
                      <div className="absolute inset-[-3.13%_-0.5px]" style={{ "--stroke-0": "rgba(74, 103, 30, 1)" } as React.CSSProperties}>
                        <img alt="" className="block max-w-none size-full" src={imgCaret} />
                      </div>
                    </div>
                    <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#44483b] text-[16px] text-nowrap tracking-[0.5px]">
                      <p className="leading-[24px] whitespace-pre">{placeholderText}</p>
                    </div>
                  </div>
                  <div className="absolute bg-white box-border content-stretch flex items-center left-[-4px] px-[4px] py-0 top-[-12px]" data-name="Label text container">
                    <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#4a671e] text-[12px] text-nowrap tracking-[0.4px] whitespace-pre">{labelText}</p>
                  </div>
                </div>
                <Trailingicon14 />
              </div>
            </div>
          </div>
        </div>
        {showSupportingText && (
          <div className="absolute bottom-[-20px] box-border content-stretch flex gap-[10px] h-[20px] items-start left-0 pb-0 pt-[4px] px-[16px] right-0" data-name="Supporting text">
            <p className="basis-0 font-['Manrope:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#44483b] text-[12px] tracking-[0.4px]">{supportingText}</p>
          </div>
        )}
      </div>
    );
  }
  if (style === "Outlined" && state === "Enabled" && textConfigurations === "Placeholder text" && !leadingIcon && trailingIcon) {
    return (
      <div className={className} data-name="Style=Outlined, State=Enabled, Text configurations=Placeholder text, Leading icon=False, Trailing icon=True">
        <div className="basis-0 content-stretch flex flex-col gap-[10px] grow items-start min-h-px min-w-px relative rounded-[4px] shrink-0 w-full" data-name="Text field">
          <div aria-hidden="true" className="absolute border border-[#74796a] border-solid inset-0 pointer-events-none rounded-[4px]" />
          <div className="basis-0 grow min-h-px min-w-px relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="State-layer">
            <div className="size-full">
              <div className="box-border content-stretch flex items-start pl-[16px] pr-0 py-[4px] relative size-full">
                <div className="basis-0 box-border content-stretch flex flex-col grow h-[48px] items-start justify-center min-h-px min-w-px px-0 py-[4px] relative shrink-0" data-name="Content">
                  <div className="content-stretch flex gap-[10px] items-start relative shrink-0" data-name="Placeholder text container">
                    <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#44483b] text-[16px] text-nowrap tracking-[0.5px]">
                      <p className="leading-[24px] whitespace-pre">{placeholderText}</p>
                    </div>
                  </div>
                  <div className="absolute bg-white box-border content-stretch flex items-center left-[-4px] px-[4px] py-0 top-[-12px]" data-name="Label text container">
                    <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#44483b] text-[12px] text-nowrap tracking-[0.4px] whitespace-pre">{labelText}</p>
                  </div>
                </div>
                <Trailingicon15 />
              </div>
            </div>
          </div>
        </div>
        {showSupportingText && (
          <div className="absolute bottom-[-20px] box-border content-stretch flex gap-[10px] h-[20px] items-start left-0 pb-0 pt-[4px] px-[16px] right-0" data-name="Supporting text">
            <p className="basis-0 font-['Manrope:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#44483b] text-[12px] tracking-[0.4px]">{supportingText}</p>
          </div>
        )}
      </div>
    );
  }
  if (style === "Outlined" && state === "Disabled" && textConfigurations === "Label text" && !leadingIcon && trailingIcon) {
    return (
      <div className={className} data-name="Style=Outlined, State=Disabled, Text configurations=Label text, Leading icon=False, Trailing icon=True">
        <div className="absolute inset-0 opacity-[0.04] rounded-[4px]" data-name="disabled-state-color">
          <div aria-hidden="true" className="absolute border border-[#1a1c16] border-solid inset-0 pointer-events-none rounded-[4px]" />
        </div>
        <div className="basis-0 content-stretch flex flex-col gap-[10px] grow items-start min-h-px min-w-px relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="Text field">
          <div className="basis-0 grow min-h-px min-w-px relative rounded-[4px] shrink-0 w-full" data-name="State-layer">
            <div aria-hidden="true" className="absolute border border-[rgba(26,28,22,0.12)] border-solid inset-[-0.5px] pointer-events-none rounded-[4.5px]" />
            <div className="size-full">
              <div className="box-border content-stretch flex items-start pl-[16px] pr-0 py-[4px] relative size-full">
                <div className="basis-0 box-border content-stretch flex flex-col grow h-[48px] items-start justify-center min-h-px min-w-px px-0 py-[4px] relative shrink-0" data-name="Content">
                  <div className="content-stretch flex items-center relative shrink-0" data-name="Label text container">
                    <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[24px] opacity-[0.38] relative shrink-0 text-[#1a1c16] text-[16px] text-nowrap tracking-[0.5px] whitespace-pre">{labelText}</p>
                  </div>
                </div>
                <Trailingicon16 />
              </div>
            </div>
          </div>
        </div>
        {showSupportingText && (
          <div className="absolute bottom-[-20px] box-border content-stretch flex gap-[10px] h-[20px] items-start left-0 opacity-[0.38] pb-0 pt-[4px] px-[16px] right-0" data-name="Supporting text">
            <p className="basis-0 font-['Manrope:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#1a1c16] text-[12px] tracking-[0.4px]">{supportingText}</p>
          </div>
        )}
      </div>
    );
  }
  if (style === "Outlined" && state === "Error" && textConfigurations === "Label text" && !leadingIcon && trailingIcon) {
    return (
      <div className={className} data-name="Style=Outlined, State=Error, Text configurations=Label text, Leading icon=False, Trailing icon=True">
        <div className="basis-0 content-stretch flex flex-col gap-[10px] grow items-start min-h-px min-w-px relative rounded-[4px] shrink-0 w-full" data-name="Text field">
          <div aria-hidden="true" className="absolute border border-[#ba1a1a] border-solid inset-0 pointer-events-none rounded-[4px]" />
          <div className="basis-0 grow min-h-px min-w-px relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="State-layer">
            <div className="size-full">
              <div className="box-border content-stretch flex items-start pl-[16px] pr-0 py-[4px] relative size-full">
                <div className="basis-0 box-border content-stretch flex flex-col grow h-[48px] items-start justify-center min-h-px min-w-px px-0 py-[4px] relative shrink-0" data-name="Content">
                  <div className="content-stretch flex items-center relative shrink-0" data-name="Label text container">
                    <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#ba1a1a] text-[16px] text-nowrap tracking-[0.5px] whitespace-pre">{labelText}</p>
                  </div>
                </div>
                <Trailingiconerror10 />
              </div>
            </div>
          </div>
        </div>
        {showSupportingText && (
          <div className="absolute bottom-[-20px] box-border content-stretch flex gap-[10px] h-[20px] items-start left-0 pb-0 pt-[4px] px-[16px] right-0" data-name="Supporting text">
            <p className="basis-0 font-['Manrope:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#ba1a1a] text-[12px] tracking-[0.4px]">{supportingText}</p>
          </div>
        )}
      </div>
    );
  }
  if (style === "Outlined" && state === "Hovered" && textConfigurations === "Label text" && !leadingIcon && trailingIcon) {
    return (
      <button className={className} data-name="Style=Outlined, State=Hovered, Text configurations=Label text, Leading icon=False, Trailing icon=True">
        <div aria-hidden="true" className="absolute border-0 border-[#1a1c16] border-solid inset-0 pointer-events-none rounded-tl-[4px] rounded-tr-[4px]" />
        <div className="basis-0 content-stretch flex flex-col gap-[10px] grow items-start min-h-px min-w-px relative rounded-[4px] shrink-0 w-full" data-name="Text field">
          <div aria-hidden="true" className="absolute border border-[#1a1c16] border-solid inset-0 pointer-events-none rounded-[4px]" />
          <div className="basis-0 grow min-h-px min-w-px relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="State-layer">
            <div className="size-full">
              <div className="box-border content-stretch flex items-start pl-[16px] pr-0 py-[4px] relative size-full">
                <div className="basis-0 box-border content-stretch flex flex-col grow h-[48px] items-start justify-center min-h-px min-w-px px-0 py-[4px] relative shrink-0" data-name="Content">
                  <div className="content-stretch flex items-center relative shrink-0" data-name="Label text container">
                    <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#1a1c16] text-[16px] text-nowrap tracking-[0.5px] whitespace-pre">{labelText}</p>
                  </div>
                </div>
                <Trailingicon17 />
              </div>
            </div>
          </div>
        </div>
        {showSupportingText && (
          <div className="absolute bottom-[-20px] box-border content-stretch flex gap-[10px] h-[20px] items-start left-0 pb-0 pt-[4px] px-[16px] right-0" data-name="Supporting text">
            <p className="basis-0 font-['Manrope:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#44483b] text-[12px] tracking-[0.4px]">{supportingText}</p>
          </div>
        )}
      </button>
    );
  }
  if (style === "Outlined" && state === "Focused" && textConfigurations === "Label text" && !leadingIcon && trailingIcon) {
    return (
      <div className={className} data-name="Style=Outlined, State=Focused, Text configurations=Label text, Leading icon=False, Trailing icon=True">
        <div className="basis-0 content-stretch flex flex-col gap-[10px] grow items-start min-h-px min-w-px relative rounded-[4px] shrink-0 w-full" data-name="Text field">
          <div aria-hidden="true" className="absolute border-[#4a671e] border-[3px] border-solid inset-0 pointer-events-none rounded-[4px]" />
          <div className="basis-0 grow min-h-px min-w-px relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="State-layer">
            <div className="size-full">
              <div className="box-border content-stretch flex items-start pl-[16px] pr-0 py-[4px] relative size-full">
                <div className="basis-0 box-border content-stretch flex flex-col grow h-[48px] items-start justify-center min-h-px min-w-px px-0 py-[4px] relative shrink-0" data-name="Content">
                  <div className="content-stretch flex items-center relative shrink-0" data-name="Input text container">
                    <div className="h-[16px] relative shrink-0 w-0" data-name="Caret">
                      <div className="absolute inset-[-3.13%_-0.5px]" style={{ "--stroke-0": "rgba(74, 103, 30, 1)" } as React.CSSProperties}>
                        <img alt="" className="block max-w-none size-full" src={imgCaret} />
                      </div>
                    </div>
                  </div>
                  <div className="absolute bg-white box-border content-stretch flex items-center left-[-4px] px-[4px] py-0 top-[-12px]" data-name="Label text container">
                    <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#4a671e] text-[12px] text-nowrap tracking-[0.4px] whitespace-pre">{labelText}</p>
                  </div>
                </div>
                <Trailingicon18 />
              </div>
            </div>
          </div>
        </div>
        {showSupportingText && (
          <div className="absolute bottom-[-20px] box-border content-stretch flex gap-[10px] h-[20px] items-start left-0 pb-0 pt-[4px] px-[16px] right-0" data-name="Supporting text">
            <p className="basis-0 font-['Manrope:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#44483b] text-[12px] tracking-[0.4px]">{supportingText}</p>
          </div>
        )}
      </div>
    );
  }
  if (style === "Outlined" && state === "Enabled" && textConfigurations === "Label text" && !leadingIcon && trailingIcon) {
    return (
      <div className={className} data-name="Style=Outlined, State=Enabled, Text configurations=Label text, Leading icon=False, Trailing icon=True">
        <div className="basis-0 content-stretch flex flex-col gap-[10px] grow items-start min-h-px min-w-px relative rounded-[4px] shrink-0 w-full" data-name="Text field">
          <div aria-hidden="true" className="absolute border border-[#74796a] border-solid inset-0 pointer-events-none rounded-[4px]" />
          <div className="basis-0 grow min-h-px min-w-px relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="State-layer">
            <div className="size-full">
              <div className="box-border content-stretch flex items-start pl-[16px] pr-0 py-[4px] relative size-full">
                <div className="basis-0 box-border content-stretch flex flex-col grow h-[48px] items-start justify-center min-h-px min-w-px px-0 py-[4px] relative shrink-0" data-name="Content">
                  <div className="content-stretch flex items-center relative shrink-0" data-name="Label text container">
                    <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#44483b] text-[16px] text-nowrap tracking-[0.5px] whitespace-pre">{labelText}</p>
                  </div>
                </div>
                <Trailingicon19 />
              </div>
            </div>
          </div>
        </div>
        {showSupportingText && (
          <div className="absolute bottom-[-20px] box-border content-stretch flex gap-[10px] h-[20px] items-start left-0 pb-0 pt-[4px] px-[16px] right-0" data-name="Supporting text">
            <p className="basis-0 font-['Manrope:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#44483b] text-[12px] tracking-[0.4px]">{supportingText}</p>
          </div>
        )}
      </div>
    );
  }
  if (style === "Outlined" && state === "Disabled" && textConfigurations === "Input text" && !leadingIcon && trailingIcon) {
    return (
      <div className={className} data-name="Style=Outlined, State=Disabled, Text configurations=Input text, Leading icon=False, Trailing icon=True">
        <div className="absolute inset-0 opacity-[0.04] rounded-[4px]" data-name="disabled-state-color">
          <div aria-hidden="true" className="absolute border border-[#1a1c16] border-solid inset-0 pointer-events-none rounded-[4px]" />
        </div>
        <div className="basis-0 content-stretch flex flex-col gap-[10px] grow items-start min-h-px min-w-px relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="Text field">
          <div className="basis-0 grow min-h-px min-w-px relative rounded-[4px] shrink-0 w-full" data-name="State-layer">
            <div aria-hidden="true" className="absolute border border-[rgba(26,28,22,0.12)] border-solid inset-[-0.5px] pointer-events-none rounded-[4.5px]" />
            <div className="size-full">
              <div className="box-border content-stretch flex items-start pl-[16px] pr-0 py-[4px] relative size-full">
                <div className="basis-0 box-border content-stretch flex flex-col grow h-[48px] items-start justify-center min-h-px min-w-px px-0 py-[4px] relative shrink-0" data-name="Content">
                  <div className="content-stretch flex items-center relative shrink-0" data-name="Input text container">
                    <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] opacity-[0.38] relative shrink-0 text-[#1a1c16] text-[16px] text-nowrap tracking-[0.5px]">
                      <p className="leading-[24px] whitespace-pre">{inputText}</p>
                    </div>
                  </div>
                  <div className="absolute bg-white box-border content-stretch flex items-center left-[-4px] px-[4px] py-0 top-[-12px]" data-name="Label text container">
                    <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[16px] opacity-[0.38] relative shrink-0 text-[#1a1c16] text-[12px] text-nowrap tracking-[0.4px] whitespace-pre">{labelText}</p>
                  </div>
                </div>
                <Trailingicon20 />
              </div>
            </div>
          </div>
        </div>
        {showSupportingText && (
          <div className="absolute bottom-[-20px] box-border content-stretch flex gap-[10px] h-[20px] items-start left-0 opacity-[0.38] pb-0 pt-[4px] px-[16px] right-0" data-name="Supporting text">
            <p className="basis-0 font-['Manrope:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#1a1c16] text-[12px] tracking-[0.4px]">{supportingText}</p>
          </div>
        )}
      </div>
    );
  }
  if (style === "Outlined" && state === "Error" && textConfigurations === "Input text" && !leadingIcon && trailingIcon) {
    return (
      <div className={className} data-name="Style=Outlined, State=Error, Text configurations=Input text, Leading icon=False, Trailing icon=True">
        <div className="basis-0 content-stretch flex flex-col gap-[10px] grow items-start min-h-px min-w-px relative rounded-[4px] shrink-0 w-full" data-name="Text field">
          <div aria-hidden="true" className="absolute border-[#ba1a1a] border-[3px] border-solid inset-0 pointer-events-none rounded-[4px]" />
          <div className="basis-0 grow min-h-px min-w-px relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="State-layer">
            <div className="size-full">
              <div className="box-border content-stretch flex items-start pl-[16px] pr-0 py-[4px] relative size-full">
                <div className="basis-0 box-border content-stretch flex flex-col grow h-[48px] items-start justify-center min-h-px min-w-px px-0 py-[4px] relative shrink-0" data-name="Content">
                  <div className="content-stretch flex items-center relative shrink-0" data-name="Input text container">
                    <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] text-nowrap tracking-[0.5px]">
                      <p className="leading-[24px] whitespace-pre">{inputText}</p>
                    </div>
                    <div className="h-[16px] relative shrink-0 w-0" data-name="Caret">
                      <div className="absolute inset-[-3.13%_-0.5px]" style={{ "--stroke-0": "rgba(186, 26, 26, 1)" } as React.CSSProperties}>
                        <img alt="" className="block max-w-none size-full" src={imgCaret1} />
                      </div>
                    </div>
                  </div>
                  <div className="absolute bg-white box-border content-stretch flex items-center left-[-4px] px-[4px] py-0 top-[-12px]" data-name="Label text container">
                    <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#ba1a1a] text-[12px] text-nowrap tracking-[0.4px] whitespace-pre">{labelText}</p>
                  </div>
                </div>
                <Trailingiconerror11 />
              </div>
            </div>
          </div>
        </div>
        {showSupportingText && (
          <div className="absolute bottom-[-20px] box-border content-stretch flex gap-[10px] h-[20px] items-start left-0 pb-0 pt-[4px] px-[16px] right-0" data-name="Supporting text">
            <p className="basis-0 font-['Manrope:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#ba1a1a] text-[12px] tracking-[0.4px]">{supportingText}</p>
          </div>
        )}
      </div>
    );
  }
  if (style === "Outlined" && state === "Hovered" && textConfigurations === "Input text" && !leadingIcon && trailingIcon) {
    return (
      <button className={className} data-name="Style=Outlined, State=Hovered, Text configurations=Input text, Leading icon=False, Trailing icon=True">
        <div className="basis-0 content-stretch flex flex-col gap-[10px] grow items-start min-h-px min-w-px relative rounded-[4px] shrink-0 w-full" data-name="Text field">
          <div aria-hidden="true" className="absolute border border-[#1a1c16] border-solid inset-0 pointer-events-none rounded-[4px]" />
          <div className="basis-0 grow min-h-px min-w-px relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="State-layer">
            <div className="size-full">
              <div className="box-border content-stretch flex items-start pl-[16px] pr-0 py-[4px] relative size-full">
                <div className="basis-0 box-border content-stretch flex flex-col grow h-[48px] items-start justify-center min-h-px min-w-px px-0 py-[4px] relative shrink-0" data-name="Content">
                  <div className="content-stretch flex items-center relative shrink-0" data-name="Input text container">
                    <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] text-nowrap tracking-[0.5px]">
                      <p className="leading-[24px] whitespace-pre">{inputText}</p>
                    </div>
                  </div>
                  <div className="absolute bg-white box-border content-stretch flex items-center left-[-4px] px-[4px] py-0 top-[-12px]" data-name="Label text container">
                    <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#1a1c16] text-[12px] text-nowrap tracking-[0.4px] whitespace-pre">{labelText}</p>
                  </div>
                </div>
                <Trailingicon21 />
              </div>
            </div>
          </div>
        </div>
        {showSupportingText && (
          <div className="absolute bottom-[-20px] box-border content-stretch flex gap-[10px] h-[20px] items-start left-0 pb-0 pt-[4px] px-[16px] right-0" data-name="Supporting text">
            <p className="basis-0 font-['Manrope:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#44483b] text-[12px] tracking-[0.4px]">{supportingText}</p>
          </div>
        )}
      </button>
    );
  }
  if (style === "Outlined" && state === "Focused" && textConfigurations === "Input text" && !leadingIcon && trailingIcon) {
    return (
      <div className={className} data-name="Style=Outlined, State=Focused, Text configurations=Input text, Leading icon=False, Trailing icon=True">
        <div className="basis-0 content-stretch flex flex-col gap-[10px] grow items-start min-h-px min-w-px relative rounded-[4px] shrink-0 w-full" data-name="Text field">
          <div aria-hidden="true" className="absolute border-[#4a671e] border-[3px] border-solid inset-0 pointer-events-none rounded-[4px]" />
          <div className="basis-0 grow min-h-px min-w-px relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="State-layer">
            <div className="size-full">
              <div className="box-border content-stretch flex items-start pl-[16px] pr-0 py-[4px] relative size-full">
                <div className="basis-0 box-border content-stretch flex flex-col grow h-[48px] items-start justify-center min-h-px min-w-px px-0 py-[4px] relative shrink-0" data-name="Content">
                  <div className="content-stretch flex items-center relative shrink-0" data-name="Input text container">
                    <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] text-nowrap tracking-[0.5px]">
                      <p className="leading-[24px] whitespace-pre">{inputText}</p>
                    </div>
                    <div className="h-[16px] relative shrink-0 w-0" data-name="Caret">
                      <div className="absolute inset-[-3.13%_-0.5px]" style={{ "--stroke-0": "rgba(74, 103, 30, 1)" } as React.CSSProperties}>
                        <img alt="" className="block max-w-none size-full" src={imgCaret} />
                      </div>
                    </div>
                  </div>
                  <div className="absolute bg-white box-border content-stretch flex items-center left-[-4px] px-[4px] py-0 top-[-12px]" data-name="Label text container">
                    <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#4a671e] text-[12px] text-nowrap tracking-[0.4px] whitespace-pre">{labelText}</p>
                  </div>
                </div>
                <Trailingicon22 />
              </div>
            </div>
          </div>
        </div>
        {showSupportingText && (
          <div className="absolute bottom-[-20px] box-border content-stretch flex gap-[10px] h-[20px] items-start left-0 pb-0 pt-[4px] px-[16px] right-0" data-name="Supporting text">
            <p className="basis-0 font-['Manrope:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#44483b] text-[12px] tracking-[0.4px]">{supportingText}</p>
          </div>
        )}
      </div>
    );
  }
  if (style === "Outlined" && state === "Enabled" && textConfigurations === "Input text" && !leadingIcon && trailingIcon) {
    return (
      <div className={className} data-name="Style=Outlined, State=Enabled, Text configurations=Input text, Leading icon=False, Trailing icon=True">
        <div className="basis-0 content-stretch flex flex-col gap-[10px] grow items-start min-h-px min-w-px relative rounded-[4px] shrink-0 w-full" data-name="Text field">
          <div aria-hidden="true" className="absolute border border-[#74796a] border-solid inset-0 pointer-events-none rounded-[4px]" />
          <div className="basis-0 grow min-h-px min-w-px relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="State-layer">
            <div className="size-full">
              <div className="box-border content-stretch flex items-start pl-[16px] pr-0 py-[4px] relative size-full">
                <div className="basis-0 box-border content-stretch flex flex-col grow h-[48px] items-start justify-center min-h-px min-w-px px-0 py-[4px] relative shrink-0" data-name="Content">
                  <div className="content-stretch flex items-center relative shrink-0" data-name="Input text container">
                    <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] text-nowrap tracking-[0.5px]">
                      <p className="leading-[24px] whitespace-pre">{inputText}</p>
                    </div>
                  </div>
                  <div className="absolute bg-white box-border content-stretch flex items-center left-[-4px] px-[4px] py-0 top-[-12px]" data-name="Label text container">
                    <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#44483b] text-[12px] text-nowrap tracking-[0.4px] whitespace-pre">{labelText}</p>
                  </div>
                </div>
                <Trailingicon23 />
              </div>
            </div>
          </div>
        </div>
        {showSupportingText && (
          <div className="absolute bottom-[-20px] box-border content-stretch flex gap-[10px] h-[20px] items-start left-0 pb-0 pt-[4px] px-[16px] right-0" data-name="Supporting text">
            <p className="basis-0 font-['Manrope:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#44483b] text-[12px] tracking-[0.4px]">{supportingText}</p>
          </div>
        )}
      </div>
    );
  }
  if (style === "Filled" && state === "Disabled" && textConfigurations === "Placeholder text" && leadingIcon && !trailingIcon) {
    return (
      <div className={className} data-name="Style=Filled, State=Disabled, Text configurations=Placeholder text, Leading icon=True, Trailing icon=False">
        <div className="absolute bg-[#1a1c16] inset-0 opacity-[0.04] rounded-tl-[4px] rounded-tr-[4px]" data-name="disabled-state-color" />
        <div className="basis-0 content-stretch flex flex-col gap-[10px] grow items-start min-h-px min-w-px opacity-[0.38] relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="Text field">
          <div className="basis-0 grow min-h-px min-w-px relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="State-layer">
            <div className="size-full">
              <div className="box-border content-stretch flex items-start pl-0 pr-[16px] py-[4px] relative size-full">
                <Leadingicon30 />
                <div className="basis-0 box-border content-stretch flex flex-col grow h-[48px] items-start justify-center min-h-px min-w-px px-0 py-[4px] relative shrink-0" data-name="Content">
                  <div className="content-stretch flex items-center relative shrink-0" data-name="Label text container">
                    <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#1a1c16] text-[12px] text-nowrap tracking-[0.4px] whitespace-pre">{labelText}</p>
                  </div>
                  <div className="content-stretch flex gap-[10px] items-start relative shrink-0" data-name="Placeholder text container">
                    <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] text-nowrap tracking-[0.5px]">
                      <p className="leading-[24px] whitespace-pre">{placeholderText}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-0 relative shrink-0 w-full" data-name="Active indicator">
          <div className="absolute bottom-0 left-0 right-0 top-[-1px]" style={{ "--stroke-0": "rgba(26, 28, 22, 1)" } as React.CSSProperties}>
            <img alt="" className="block max-w-none size-full" src={imgActiveIndicator} />
          </div>
        </div>
        {showSupportingText && (
          <div className="absolute bottom-[-20px] box-border content-stretch flex gap-[10px] h-[20px] items-start left-0 opacity-[0.38] pb-0 pt-[4px] px-[16px] right-0" data-name="Supporting text">
            <p className="basis-0 font-['Manrope:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#1a1c16] text-[12px] tracking-[0.4px]">{supportingText}</p>
          </div>
        )}
      </div>
    );
  }
  if (style === "Filled" && state === "Error" && textConfigurations === "Placeholder text" && leadingIcon && !trailingIcon) {
    return (
      <div className={className} data-name="Style=Filled, State=Error, Text configurations=Placeholder text, Leading icon=True, Trailing icon=False">
        <div className="basis-0 bg-[#e3e3d9] content-stretch flex flex-col gap-[10px] grow items-start min-h-px min-w-px relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="Text field">
          <div className="basis-0 box-border content-stretch flex grow items-start min-h-px min-w-px px-0 py-[4px] relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="State-layer">
            <Leadingicon31 />
            <div className="basis-0 box-border content-stretch flex flex-col grow h-[48px] items-start justify-center min-h-px min-w-px px-0 py-[4px] relative shrink-0" data-name="Content">
              <div className="content-stretch flex items-center relative shrink-0" data-name="Label text container">
                <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#ba1a1a] text-[12px] text-nowrap tracking-[0.4px] whitespace-pre">{labelText}</p>
              </div>
              <div className="content-stretch flex gap-[10px] items-start relative shrink-0" data-name="Placeholder text container">
                <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#44483b] text-[16px] text-nowrap tracking-[0.5px]">
                  <p className="leading-[24px] whitespace-pre">{placeholderText}</p>
                </div>
              </div>
            </div>
            <Trailingiconerror12 />
          </div>
        </div>
        <div className="h-0 relative shrink-0 w-full" data-name="Active indicator">
          <div className="absolute bottom-0 left-0 right-0 top-[-1px]" style={{ "--stroke-0": "rgba(186, 26, 26, 1)" } as React.CSSProperties}>
            <img alt="" className="block max-w-none size-full" src={imgActiveIndicator1} />
          </div>
        </div>
        {showSupportingText && (
          <div className="absolute bottom-[-20px] box-border content-stretch flex gap-[10px] h-[20px] items-start left-0 pb-0 pt-[4px] px-[16px] right-0" data-name="Supporting text">
            <p className="basis-0 font-['Manrope:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#ba1a1a] text-[12px] tracking-[0.4px]">{supportingText}</p>
          </div>
        )}
      </div>
    );
  }
  if (style === "Filled" && state === "Hovered" && textConfigurations === "Placeholder text" && leadingIcon && !trailingIcon) {
    return (
      <button className={className} data-name="Style=Filled, State=Hovered, Text configurations=Placeholder text, Leading icon=True, Trailing icon=False">
        <div className="basis-0 bg-[#e3e3d9] content-stretch flex flex-col gap-[10px] grow items-start min-h-px min-w-px relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="Text field">
          <div className="basis-0 bg-[rgba(26,28,22,0.08)] grow min-h-px min-w-px relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="State-layer">
            <div className="size-full">
              <div className="box-border content-stretch flex items-start pl-0 pr-[16px] py-[4px] relative size-full">
                <Leadingicon32 />
                <div className="basis-0 box-border content-stretch flex flex-col grow h-[48px] items-start justify-center min-h-px min-w-px px-0 py-[4px] relative shrink-0" data-name="Content">
                  <div className="content-stretch flex items-center relative shrink-0" data-name="Label text container">
                    <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#44483b] text-[12px] text-nowrap tracking-[0.4px] whitespace-pre">{labelText}</p>
                  </div>
                  <div className="content-stretch flex gap-[10px] items-start relative shrink-0" data-name="Placeholder text container">
                    <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#44483b] text-[16px] text-nowrap tracking-[0.5px]">
                      <p className="leading-[24px] whitespace-pre">{placeholderText}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-0 relative shrink-0 w-full" data-name="Active indicator">
          <div className="absolute bottom-0 left-0 right-0 top-[-1px]" style={{ "--stroke-0": "rgba(26, 28, 22, 1)" } as React.CSSProperties}>
            <img alt="" className="block max-w-none size-full" src={imgActiveIndicator2} />
          </div>
        </div>
        {showSupportingText && (
          <div className="absolute bottom-[-20px] box-border content-stretch flex gap-[10px] h-[20px] items-start left-0 pb-0 pt-[4px] px-[16px] right-0" data-name="Supporting text">
            <p className="basis-0 font-['Manrope:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#44483b] text-[12px] tracking-[0.4px]">{supportingText}</p>
          </div>
        )}
      </button>
    );
  }
  if (style === "Filled" && state === "Focused" && textConfigurations === "Placeholder text" && leadingIcon && !trailingIcon) {
    return (
      <div className={className} data-name="Style=Filled, State=Focused, Text configurations=Placeholder text, Leading icon=True, Trailing icon=False">
        <div className="basis-0 bg-[#e3e3d9] content-stretch flex flex-col gap-[10px] grow items-start min-h-px min-w-px relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="Text field">
          <div className="basis-0 grow min-h-px min-w-px relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="State-layer">
            <div className="size-full">
              <div className="box-border content-stretch flex items-start pl-0 pr-[16px] py-[4px] relative size-full">
                <Leadingicon33 />
                <div className="basis-0 box-border content-stretch flex flex-col grow h-[48px] items-start justify-center min-h-px min-w-px px-0 py-[4px] relative shrink-0" data-name="Content">
                  <div className="content-stretch flex items-center relative shrink-0" data-name="Label text container">
                    <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#4a671e] text-[12px] text-nowrap tracking-[0.4px] whitespace-pre">{labelText}</p>
                  </div>
                  <div className="content-stretch flex items-center relative shrink-0" data-name="Placeholder text container">
                    <div className="h-[16px] relative shrink-0 w-0" data-name="Caret">
                      <div className="absolute inset-[-3.13%_-0.5px]" style={{ "--stroke-0": "rgba(74, 103, 30, 1)" } as React.CSSProperties}>
                        <img alt="" className="block max-w-none size-full" src={imgCaret} />
                      </div>
                    </div>
                    <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#44483b] text-[16px] text-nowrap tracking-[0.5px]">
                      <p className="leading-[24px] whitespace-pre">{placeholderText}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-0 relative shrink-0 w-full" data-name="Active indicator">
          <div className="absolute bottom-0 left-0 right-0 top-[-3px]" style={{ "--stroke-0": "rgba(74, 103, 30, 1)" } as React.CSSProperties}>
            <img alt="" className="block max-w-none size-full" src={imgActiveIndicator3} />
          </div>
        </div>
        {showSupportingText && (
          <div className="absolute bottom-[-20px] box-border content-stretch flex gap-[10px] h-[20px] items-start left-0 pb-0 pt-[4px] px-[16px] right-0" data-name="Supporting text">
            <p className="basis-0 font-['Manrope:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#44483b] text-[12px] tracking-[0.4px]">{supportingText}</p>
          </div>
        )}
      </div>
    );
  }
  if (style === "Filled" && state === "Enabled" && textConfigurations === "Placeholder text" && leadingIcon && !trailingIcon) {
    return (
      <div className={className} data-name="Style=Filled, State=Enabled, Text configurations=Placeholder text, Leading icon=True, Trailing icon=False">
        <div className="basis-0 bg-[#e3e3d9] content-stretch flex flex-col gap-[10px] grow items-start min-h-px min-w-px relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="Text field">
          <div className="basis-0 grow min-h-px min-w-px relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="State-layer">
            <div className="size-full">
              <div className="box-border content-stretch flex items-start pl-0 pr-[16px] py-[4px] relative size-full">
                <Leadingicon34 />
                <div className="basis-0 box-border content-stretch flex flex-col grow h-[48px] items-start justify-center min-h-px min-w-px px-0 py-[4px] relative shrink-0" data-name="Content">
                  <div className="content-stretch flex items-center relative shrink-0" data-name="Label text container">
                    <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#44483b] text-[12px] text-nowrap tracking-[0.4px] whitespace-pre">{labelText}</p>
                  </div>
                  <div className="content-stretch flex gap-[10px] items-start relative shrink-0" data-name="Placeholder text container">
                    <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#44483b] text-[16px] text-nowrap tracking-[0.5px]">
                      <p className="leading-[24px] whitespace-pre">{placeholderText}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-0 relative shrink-0 w-full" data-name="Active indicator">
          <div className="absolute bottom-0 left-0 right-0 top-[-1px]" style={{ "--stroke-0": "rgba(68, 72, 59, 1)" } as React.CSSProperties}>
            <img alt="" className="block max-w-none size-full" src={imgActiveIndicator4} />
          </div>
        </div>
        {showSupportingText && (
          <div className="absolute bottom-[-20px] box-border content-stretch flex gap-[10px] h-[20px] items-start left-0 pb-0 pt-[4px] px-[16px] right-0" data-name="Supporting text">
            <p className="basis-0 font-['Manrope:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#44483b] text-[12px] tracking-[0.4px]">{supportingText}</p>
          </div>
        )}
      </div>
    );
  }
  if (style === "Filled" && state === "Disabled" && textConfigurations === "Label text" && leadingIcon && !trailingIcon) {
    return (
      <div className={className} data-name="Style=Filled, State=Disabled, Text configurations=Label text, Leading icon=True, Trailing icon=False">
        <div className="absolute bg-[#1a1c16] inset-0 opacity-[0.04] rounded-tl-[4px] rounded-tr-[4px]" data-name="disabled-state-color" />
        <div className="basis-0 content-stretch flex flex-col gap-[10px] grow items-start min-h-px min-w-px opacity-[0.38] relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="Text field">
          <div className="basis-0 grow min-h-px min-w-px relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="State-layer">
            <div className="size-full">
              <div className="box-border content-stretch flex items-start pl-0 pr-[16px] py-[4px] relative size-full">
                <Leadingicon35 />
                <div className="basis-0 box-border content-stretch flex flex-col grow h-[48px] items-start justify-center min-h-px min-w-px px-0 py-[4px] relative shrink-0" data-name="Content">
                  <div className="content-stretch flex items-center relative shrink-0" data-name="Label text container">
                    <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#1a1c16] text-[16px] text-nowrap tracking-[0.5px] whitespace-pre">{labelText}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-0 relative shrink-0 w-full" data-name="Active indicator">
          <div className="absolute bottom-0 left-0 right-0 top-[-1px]" style={{ "--stroke-0": "rgba(26, 28, 22, 1)" } as React.CSSProperties}>
            <img alt="" className="block max-w-none size-full" src={imgActiveIndicator} />
          </div>
        </div>
        {showSupportingText && (
          <div className="absolute bottom-[-20px] box-border content-stretch flex gap-[10px] h-[20px] items-start left-0 opacity-[0.38] pb-0 pt-[4px] px-[16px] right-0" data-name="Supporting text">
            <p className="basis-0 font-['Manrope:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#1a1c16] text-[12px] tracking-[0.4px]">{supportingText}</p>
          </div>
        )}
      </div>
    );
  }
  if (style === "Filled" && state === "Error" && textConfigurations === "Label text" && leadingIcon && !trailingIcon) {
    return (
      <div className={className} data-name="Style=Filled, State=Error, Text configurations=Label text, Leading icon=True, Trailing icon=False">
        <div className="basis-0 bg-[#e3e3d9] content-stretch flex flex-col gap-[10px] grow items-start min-h-px min-w-px relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="Text field">
          <div className="basis-0 box-border content-stretch flex grow items-start min-h-px min-w-px px-0 py-[4px] relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="State-layer">
            <Leadingicon36 />
            <div className="basis-0 box-border content-stretch flex flex-col grow h-[48px] items-start justify-center min-h-px min-w-px px-0 py-[4px] relative shrink-0" data-name="Content">
              <div className="content-stretch flex items-center relative shrink-0" data-name="Label text container">
                <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#ba1a1a] text-[16px] text-nowrap tracking-[0.5px] whitespace-pre">{labelText}</p>
              </div>
            </div>
            <Trailingiconerror13 />
          </div>
        </div>
        <div className="h-0 relative shrink-0 w-full" data-name="Active indicator">
          <div className="absolute bottom-0 left-0 right-0 top-[-1px]" style={{ "--stroke-0": "rgba(186, 26, 26, 1)" } as React.CSSProperties}>
            <img alt="" className="block max-w-none size-full" src={imgActiveIndicator1} />
          </div>
        </div>
        {showSupportingText && (
          <div className="absolute bottom-[-20px] box-border content-stretch flex gap-[10px] h-[20px] items-start left-0 pb-0 pt-[4px] px-[16px] right-0" data-name="Supporting text">
            <p className="basis-0 font-['Manrope:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#ba1a1a] text-[12px] tracking-[0.4px]">{supportingText}</p>
          </div>
        )}
      </div>
    );
  }
  if (style === "Filled" && state === "Hovered" && textConfigurations === "Label text" && leadingIcon && !trailingIcon) {
    return (
      <button className={className} data-name="Style=Filled, State=Hovered, Text configurations=Label text, Leading icon=True, Trailing icon=False">
        <div className="basis-0 bg-[#e3e3d9] content-stretch flex flex-col gap-[10px] grow items-start min-h-px min-w-px relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="Text field">
          <div className="basis-0 bg-[rgba(26,28,22,0.08)] grow min-h-px min-w-px relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="State-layer">
            <div className="size-full">
              <div className="box-border content-stretch flex items-start pl-0 pr-[16px] py-[4px] relative size-full">
                <Leadingicon37 />
                <div className="basis-0 box-border content-stretch flex flex-col grow h-[48px] items-start justify-center min-h-px min-w-px px-0 py-[4px] relative shrink-0" data-name="Content">
                  <div className="content-stretch flex items-center relative shrink-0" data-name="Label text container">
                    <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#44483b] text-[16px] text-nowrap tracking-[0.5px] whitespace-pre">{labelText}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-0 relative shrink-0 w-full" data-name="Active indicator">
          <div className="absolute bottom-0 left-0 right-0 top-[-1px]" style={{ "--stroke-0": "rgba(26, 28, 22, 1)" } as React.CSSProperties}>
            <img alt="" className="block max-w-none size-full" src={imgActiveIndicator2} />
          </div>
        </div>
        {showSupportingText && (
          <div className="absolute bottom-[-20px] box-border content-stretch flex gap-[10px] h-[20px] items-start left-0 pb-0 pt-[4px] px-[16px] right-0" data-name="Supporting text">
            <p className="basis-0 font-['Manrope:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#44483b] text-[12px] tracking-[0.4px]">{supportingText}</p>
          </div>
        )}
      </button>
    );
  }
  if (style === "Filled" && state === "Focused" && textConfigurations === "Label text" && leadingIcon && !trailingIcon) {
    return (
      <div className={className} data-name="Style=Filled, State=Focused, Text configurations=Label text, Leading icon=True, Trailing icon=False">
        <div className="basis-0 bg-[#e3e3d9] content-stretch flex flex-col gap-[10px] grow items-start min-h-px min-w-px relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="Text field">
          <div className="basis-0 grow min-h-px min-w-px relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="State-layer">
            <div className="size-full">
              <div className="box-border content-stretch flex items-start pl-0 pr-[16px] py-[4px] relative size-full">
                <Leadingicon38 />
                <div className="basis-0 box-border content-stretch flex flex-col grow h-[48px] items-start justify-center min-h-px min-w-px px-0 py-[4px] relative shrink-0" data-name="Content">
                  <div className="content-stretch flex items-center relative shrink-0" data-name="Label text container">
                    <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#4a671e] text-[12px] text-nowrap tracking-[0.4px] whitespace-pre">{labelText}</p>
                  </div>
                  <div className="content-stretch flex h-[24px] items-center relative shrink-0" data-name="Input text container">
                    <div className="h-[16px] relative shrink-0 w-0" data-name="Caret">
                      <div className="absolute inset-[-3.13%_-0.5px]" style={{ "--stroke-0": "rgba(74, 103, 30, 1)" } as React.CSSProperties}>
                        <img alt="" className="block max-w-none size-full" src={imgCaret} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-0 relative shrink-0 w-full" data-name="Active indicator">
          <div className="absolute bottom-0 left-0 right-0 top-[-3px]" style={{ "--stroke-0": "rgba(74, 103, 30, 1)" } as React.CSSProperties}>
            <img alt="" className="block max-w-none size-full" src={imgActiveIndicator3} />
          </div>
        </div>
        {showSupportingText && (
          <div className="absolute bottom-[-20px] box-border content-stretch flex gap-[10px] h-[20px] items-start left-0 pb-0 pt-[4px] px-[16px] right-0" data-name="Supporting text">
            <p className="basis-0 font-['Manrope:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#44483b] text-[12px] tracking-[0.4px]">{supportingText}</p>
          </div>
        )}
      </div>
    );
  }
  if (style === "Filled" && state === "Enabled" && textConfigurations === "Label text" && leadingIcon && !trailingIcon) {
    return (
      <div className={className} data-name="Style=Filled, State=Enabled, Text configurations=Label text, Leading icon=True, Trailing icon=False">
        <div className="basis-0 bg-[#e3e3d9] content-stretch flex flex-col gap-[10px] grow items-start min-h-px min-w-px relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="Text field">
          <div className="basis-0 grow min-h-px min-w-px relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="State-layer">
            <div className="size-full">
              <div className="box-border content-stretch flex items-start pl-0 pr-[16px] py-[4px] relative size-full">
                <Leadingicon39 />
                <div className="basis-0 box-border content-stretch flex flex-col grow h-[48px] items-start justify-center min-h-px min-w-px px-0 py-[4px] relative shrink-0" data-name="Content">
                  <div className="content-stretch flex items-center relative shrink-0" data-name="Label text container">
                    <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#44483b] text-[16px] text-nowrap tracking-[0.5px] whitespace-pre">{labelText}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-0 relative shrink-0 w-full" data-name="Active indicator">
          <div className="absolute bottom-0 left-0 right-0 top-[-1px]" style={{ "--stroke-0": "rgba(26, 28, 22, 1)" } as React.CSSProperties}>
            <img alt="" className="block max-w-none size-full" src={imgActiveIndicator2} />
          </div>
        </div>
        {showSupportingText && (
          <div className="absolute bottom-[-20px] box-border content-stretch flex gap-[10px] h-[20px] items-start left-0 pb-0 pt-[4px] px-[16px] right-0" data-name="Supporting text">
            <p className="basis-0 font-['Manrope:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#44483b] text-[12px] tracking-[0.4px]">{supportingText}</p>
          </div>
        )}
      </div>
    );
  }
  if (style === "Filled" && state === "Disabled" && textConfigurations === "Input text" && leadingIcon && !trailingIcon) {
    return (
      <div className={className} data-name="Style=Filled, State=Disabled, Text configurations=Input text, Leading icon=True, Trailing icon=False">
        <div className="absolute bg-[#1a1c16] inset-0 opacity-[0.04] rounded-tl-[4px] rounded-tr-[4px]" data-name="disabled-state-color" />
        <div className="basis-0 content-stretch flex flex-col gap-[10px] grow items-start min-h-px min-w-px opacity-[0.38] relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="Text field">
          <div className="basis-0 grow min-h-px min-w-px relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="State-layer">
            <div className="size-full">
              <div className="box-border content-stretch flex items-start pl-0 pr-[16px] py-[4px] relative size-full">
                <Leadingicon40 />
                <div className="basis-0 box-border content-stretch flex flex-col grow h-[48px] items-start justify-center min-h-px min-w-px px-0 py-[4px] relative shrink-0" data-name="Content">
                  <div className="content-stretch flex items-center relative shrink-0" data-name="Label text container">
                    <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#1a1c16] text-[12px] text-nowrap tracking-[0.4px] whitespace-pre">{labelText}</p>
                  </div>
                  <div className="content-stretch flex items-center relative shrink-0" data-name="Input text container">
                    <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] text-nowrap tracking-[0.5px]">
                      <p className="leading-[24px] whitespace-pre">{inputText}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-0 relative shrink-0 w-full" data-name="Active indicator">
          <div className="absolute bottom-0 left-0 right-0 top-[-1px]" style={{ "--stroke-0": "rgba(26, 28, 22, 1)" } as React.CSSProperties}>
            <img alt="" className="block max-w-none size-full" src={imgActiveIndicator} />
          </div>
        </div>
        {showSupportingText && (
          <div className="absolute bottom-[-20px] box-border content-stretch flex gap-[10px] h-[20px] items-start left-0 opacity-[0.38] pb-0 pt-[4px] px-[16px] right-0" data-name="Supporting text">
            <p className="basis-0 font-['Manrope:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#1a1c16] text-[12px] tracking-[0.4px]">{supportingText}</p>
          </div>
        )}
      </div>
    );
  }
  if (style === "Filled" && state === "Error" && textConfigurations === "Input text" && leadingIcon && !trailingIcon) {
    return (
      <div className={className} data-name="Style=Filled, State=Error, Text configurations=Input text, Leading icon=True, Trailing icon=False">
        <div className="basis-0 bg-[#e3e3d9] content-stretch flex flex-col gap-[10px] grow items-start min-h-px min-w-px relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="Text field">
          <div className="basis-0 box-border content-stretch flex grow items-start min-h-px min-w-px px-0 py-[4px] relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="State-layer">
            <Leadingicon41 />
            <div className="basis-0 box-border content-stretch flex flex-col grow h-[48px] items-start justify-center min-h-px min-w-px px-0 py-[4px] relative shrink-0" data-name="Content">
              <div className="content-stretch flex items-center relative shrink-0" data-name="Label text container">
                <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#ba1a1a] text-[12px] text-nowrap tracking-[0.4px] whitespace-pre">{labelText}</p>
              </div>
              <div className="content-stretch flex items-center relative shrink-0" data-name="Input text container">
                <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] text-nowrap tracking-[0.5px]">
                  <p className="leading-[24px] whitespace-pre">{inputText}</p>
                </div>
                <div className="h-[16px] relative shrink-0 w-0" data-name="Caret">
                  <div className="absolute inset-[-3.13%_-0.5px]" style={{ "--stroke-0": "rgba(186, 26, 26, 1)" } as React.CSSProperties}>
                    <img alt="" className="block max-w-none size-full" src={imgCaret1} />
                  </div>
                </div>
              </div>
            </div>
            <Trailingiconerror14 />
          </div>
        </div>
        <div className="h-0 relative shrink-0 w-full" data-name="Active indicator">
          <div className="absolute bottom-0 left-0 right-0 top-[-3px]" style={{ "--stroke-0": "rgba(186, 26, 26, 1)" } as React.CSSProperties}>
            <img alt="" className="block max-w-none size-full" src={imgActiveIndicator5} />
          </div>
        </div>
        {showSupportingText && (
          <div className="absolute bottom-[-20px] box-border content-stretch flex gap-[10px] h-[20px] items-start left-0 pb-0 pt-[4px] px-[16px] right-0" data-name="Supporting text">
            <p className="basis-0 font-['Manrope:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#ba1a1a] text-[12px] tracking-[0.4px]">{supportingText}</p>
          </div>
        )}
      </div>
    );
  }
  if (style === "Filled" && state === "Hovered" && textConfigurations === "Input text" && leadingIcon && !trailingIcon) {
    return (
      <button className={className} data-name="Style=Filled, State=Hovered, Text configurations=Input text, Leading icon=True, Trailing icon=False">
        <div className="basis-0 bg-[#e3e3d9] content-stretch flex flex-col gap-[10px] grow items-start min-h-px min-w-px relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="Text field">
          <div className="basis-0 bg-[rgba(26,28,22,0.08)] grow min-h-px min-w-px relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="State-layer">
            <div className="size-full">
              <div className="box-border content-stretch flex items-start pl-0 pr-[16px] py-[4px] relative size-full">
                <Leadingicon42 />
                <div className="basis-0 box-border content-stretch flex flex-col grow h-[48px] items-start justify-center min-h-px min-w-px px-0 py-[4px] relative shrink-0" data-name="Content">
                  <div className="content-stretch flex items-center relative shrink-0" data-name="Label text container">
                    <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#44483b] text-[12px] text-nowrap tracking-[0.4px] whitespace-pre">{labelText}</p>
                  </div>
                  <div className="content-stretch flex items-center relative shrink-0" data-name="Input text container">
                    <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] text-nowrap tracking-[0.5px]">
                      <p className="leading-[24px] whitespace-pre">{inputText}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-0 relative shrink-0 w-full" data-name="Active indicator">
          <div className="absolute bottom-0 left-0 right-0 top-[-1px]" style={{ "--stroke-0": "rgba(26, 28, 22, 1)" } as React.CSSProperties}>
            <img alt="" className="block max-w-none size-full" src={imgActiveIndicator2} />
          </div>
        </div>
        {showSupportingText && (
          <div className="absolute bottom-[-20px] box-border content-stretch flex gap-[10px] h-[20px] items-start left-0 pb-0 pt-[4px] px-[16px] right-0" data-name="Supporting text">
            <p className="basis-0 font-['Manrope:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#44483b] text-[12px] tracking-[0.4px]">{supportingText}</p>
          </div>
        )}
      </button>
    );
  }
  if (style === "Filled" && state === "Focused" && textConfigurations === "Input text" && leadingIcon && !trailingIcon) {
    return (
      <div className={className} data-name="Style=Filled, State=Focused, Text configurations=Input text, Leading icon=True, Trailing icon=False">
        <div className="basis-0 bg-[#e3e3d9] content-stretch flex flex-col gap-[10px] grow items-start min-h-px min-w-px relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="Text field">
          <div className="basis-0 grow min-h-px min-w-px relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="State-layer">
            <div className="size-full">
              <div className="box-border content-stretch flex items-start pl-0 pr-[16px] py-[4px] relative size-full">
                <Leadingicon43 />
                <div className="basis-0 box-border content-stretch flex flex-col grow h-[48px] items-start justify-center min-h-px min-w-px px-0 py-[4px] relative shrink-0" data-name="Content">
                  <div className="content-stretch flex items-center relative shrink-0" data-name="Label text container">
                    <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#4a671e] text-[12px] text-nowrap tracking-[0.4px] whitespace-pre">{labelText}</p>
                  </div>
                  <div className="content-stretch flex items-center relative shrink-0" data-name="Input text container">
                    <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] text-nowrap tracking-[0.5px]">
                      <p className="leading-[24px] whitespace-pre">{inputText}</p>
                    </div>
                    <div className="h-[16px] relative shrink-0 w-0" data-name="Caret">
                      <div className="absolute inset-[-3.13%_-0.5px]" style={{ "--stroke-0": "rgba(74, 103, 30, 1)" } as React.CSSProperties}>
                        <img alt="" className="block max-w-none size-full" src={imgCaret} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-0 relative shrink-0 w-full" data-name="Active indicator">
          <div className="absolute bottom-0 left-0 right-0 top-[-3px]" style={{ "--stroke-0": "rgba(74, 103, 30, 1)" } as React.CSSProperties}>
            <img alt="" className="block max-w-none size-full" src={imgActiveIndicator3} />
          </div>
        </div>
        {showSupportingText && (
          <div className="absolute bottom-[-20px] box-border content-stretch flex gap-[10px] h-[20px] items-start left-0 pb-0 pt-[4px] px-[16px] right-0" data-name="Supporting text">
            <p className="basis-0 font-['Manrope:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#44483b] text-[12px] tracking-[0.4px]">{supportingText}</p>
          </div>
        )}
      </div>
    );
  }
  if (style === "Filled" && state === "Enabled" && textConfigurations === "Input text" && leadingIcon && !trailingIcon) {
    return (
      <div className={className} data-name="Style=Filled, State=Enabled, Text configurations=Input text, Leading icon=True, Trailing icon=False">
        <div className="basis-0 bg-[#e3e3d9] content-stretch flex flex-col gap-[10px] grow items-start min-h-px min-w-px relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="Text field">
          <div className="basis-0 grow min-h-px min-w-px relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="State-layer">
            <div className="size-full">
              <div className="box-border content-stretch flex items-start pl-0 pr-[16px] py-[4px] relative size-full">
                <Leadingicon44 />
                <div className="basis-0 box-border content-stretch flex flex-col grow h-[48px] items-start justify-center min-h-px min-w-px px-0 py-[4px] relative shrink-0" data-name="Content">
                  <div className="content-stretch flex items-center relative shrink-0" data-name="Label text container">
                    <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#44483b] text-[12px] text-nowrap tracking-[0.4px] whitespace-pre">{labelText}</p>
                  </div>
                  <div className="content-stretch flex items-center relative shrink-0" data-name="Input text container">
                    <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] text-nowrap tracking-[0.5px]">
                      <p className="leading-[24px] whitespace-pre">{inputText}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-0 relative shrink-0 w-full" data-name="Active indicator">
          <div className="absolute bottom-0 left-0 right-0 top-[-1px]" style={{ "--stroke-0": "rgba(68, 72, 59, 1)" } as React.CSSProperties}>
            <img alt="" className="block max-w-none size-full" src={imgActiveIndicator4} />
          </div>
        </div>
        {showSupportingText && (
          <div className="absolute bottom-[-20px] box-border content-stretch flex gap-[10px] h-[20px] items-start left-0 pb-0 pt-[4px] px-[16px] right-0" data-name="Supporting text">
            <p className="basis-0 font-['Manrope:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#44483b] text-[12px] tracking-[0.4px]">{supportingText}</p>
          </div>
        )}
      </div>
    );
  }
  if (style === "Filled" && state === "Disabled" && textConfigurations === "Placeholder text" && !leadingIcon && !trailingIcon) {
    return (
      <div className={className} data-name="Style=Filled, State=Disabled, Text configurations=Placeholder text, Leading icon=False, Trailing icon=False">
        <div className="absolute bg-[#1a1c16] inset-0 opacity-[0.04] rounded-tl-[4px] rounded-tr-[4px]" data-name="disabled-state-color" />
        <div className="basis-0 content-stretch flex flex-col gap-[10px] grow items-start min-h-px min-w-px opacity-[0.38] relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="Text field">
          <div className="basis-0 grow min-h-px min-w-px relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="State-layer">
            <div className="size-full">
              <div className="box-border content-stretch flex items-start pl-[16px] pr-0 py-[4px] relative size-full">
                <div className="basis-0 box-border content-stretch flex flex-col grow h-[48px] items-start justify-center min-h-px min-w-px px-0 py-[4px] relative shrink-0" data-name="Content">
                  <div className="content-stretch flex items-center relative shrink-0" data-name="Label text container">
                    <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#1a1c16] text-[12px] text-nowrap tracking-[0.4px] whitespace-pre">{labelText}</p>
                  </div>
                  <div className="content-stretch flex gap-[10px] items-start relative shrink-0" data-name="Placeholder text container">
                    <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] text-nowrap tracking-[0.5px]">
                      <p className="leading-[24px] whitespace-pre">{placeholderText}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-0 relative shrink-0 w-full" data-name="Active indicator">
          <div className="absolute bottom-0 left-0 right-0 top-[-1px]" style={{ "--stroke-0": "rgba(26, 28, 22, 1)" } as React.CSSProperties}>
            <img alt="" className="block max-w-none size-full" src={imgActiveIndicator} />
          </div>
        </div>
        {showSupportingText && (
          <div className="absolute bottom-[-20px] box-border content-stretch flex gap-[10px] h-[20px] items-start left-0 opacity-[0.38] pb-0 pt-[4px] px-[16px] right-0" data-name="Supporting text">
            <p className="basis-0 font-['Manrope:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#1a1c16] text-[12px] tracking-[0.4px]">{supportingText}</p>
          </div>
        )}
      </div>
    );
  }
  if (style === "Filled" && state === "Error" && textConfigurations === "Placeholder text" && !leadingIcon && !trailingIcon) {
    return (
      <div className={className} data-name="Style=Filled, State=Error, Text configurations=Placeholder text, Leading icon=False, Trailing icon=False">
        <div className="basis-0 bg-[#e3e3d9] content-stretch flex flex-col gap-[10px] grow items-start min-h-px min-w-px relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="Text field">
          <div className="basis-0 grow min-h-px min-w-px relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="State-layer">
            <div className="size-full">
              <div className="box-border content-stretch flex items-start pl-[16px] pr-0 py-[4px] relative size-full">
                <div className="basis-0 box-border content-stretch flex flex-col grow h-[48px] items-start justify-center min-h-px min-w-px px-0 py-[4px] relative shrink-0" data-name="Content">
                  <div className="content-stretch flex items-center relative shrink-0" data-name="Label text container">
                    <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#ba1a1a] text-[12px] text-nowrap tracking-[0.4px] whitespace-pre">{labelText}</p>
                  </div>
                  <div className="content-stretch flex gap-[10px] items-start relative shrink-0" data-name="Placeholder text container">
                    <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#44483b] text-[16px] text-nowrap tracking-[0.5px]">
                      <p className="leading-[24px] whitespace-pre">{placeholderText}</p>
                    </div>
                  </div>
                </div>
                <Trailingiconerror15 />
              </div>
            </div>
          </div>
        </div>
        <div className="h-0 relative shrink-0 w-full" data-name="Active indicator">
          <div className="absolute bottom-0 left-0 right-0 top-[-1px]" style={{ "--stroke-0": "rgba(186, 26, 26, 1)" } as React.CSSProperties}>
            <img alt="" className="block max-w-none size-full" src={imgActiveIndicator1} />
          </div>
        </div>
        {showSupportingText && (
          <div className="absolute bottom-[-20px] box-border content-stretch flex gap-[10px] h-[20px] items-start left-0 pb-0 pt-[4px] px-[16px] right-0" data-name="Supporting text">
            <p className="basis-0 font-['Manrope:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#ba1a1a] text-[12px] tracking-[0.4px]">{supportingText}</p>
          </div>
        )}
      </div>
    );
  }
  if (style === "Filled" && state === "Hovered" && textConfigurations === "Placeholder text" && !leadingIcon && !trailingIcon) {
    return (
      <button className={className} data-name="Style=Filled, State=Hovered, Text configurations=Placeholder text, Leading icon=False, Trailing icon=False">
        <div className="basis-0 bg-[#e3e3d9] content-stretch flex flex-col gap-[10px] grow items-start min-h-px min-w-px relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="Text field">
          <div className="basis-0 bg-[rgba(26,28,22,0.08)] grow min-h-px min-w-px relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="State-layer">
            <div className="size-full">
              <div className="box-border content-stretch flex items-start px-[16px] py-[4px] relative size-full">
                <div className="basis-0 box-border content-stretch flex flex-col grow h-[48px] items-start justify-center min-h-px min-w-px px-0 py-[4px] relative shrink-0" data-name="Content">
                  <div className="content-stretch flex items-center relative shrink-0" data-name="Label text container">
                    <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#44483b] text-[12px] text-nowrap tracking-[0.4px] whitespace-pre">{labelText}</p>
                  </div>
                  <div className="content-stretch flex gap-[10px] items-start relative shrink-0" data-name="Placeholder text container">
                    <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#44483b] text-[16px] text-nowrap tracking-[0.5px]">
                      <p className="leading-[24px] whitespace-pre">{placeholderText}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-0 relative shrink-0 w-full" data-name="Active indicator">
          <div className="absolute bottom-0 left-0 right-0 top-[-1px]" style={{ "--stroke-0": "rgba(26, 28, 22, 1)" } as React.CSSProperties}>
            <img alt="" className="block max-w-none size-full" src={imgActiveIndicator2} />
          </div>
        </div>
        {showSupportingText && (
          <div className="absolute bottom-[-20px] box-border content-stretch flex gap-[10px] h-[20px] items-start left-0 pb-0 pt-[4px] px-[16px] right-0" data-name="Supporting text">
            <p className="basis-0 font-['Manrope:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#44483b] text-[12px] tracking-[0.4px]">{supportingText}</p>
          </div>
        )}
      </button>
    );
  }
  if (style === "Filled" && state === "Focused" && textConfigurations === "Placeholder text" && !leadingIcon && !trailingIcon) {
    return (
      <div className={className} data-name="Style=Filled, State=Focused, Text configurations=Placeholder text, Leading icon=False, Trailing icon=False">
        <div className="basis-0 bg-[#e3e3d9] content-stretch flex flex-col gap-[10px] grow items-start min-h-px min-w-px relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="Text field">
          <div className="basis-0 grow min-h-px min-w-px relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="State-layer">
            <div className="size-full">
              <div className="box-border content-stretch flex items-start px-[16px] py-[4px] relative size-full">
                <div className="basis-0 box-border content-stretch flex flex-col grow h-[48px] items-start justify-center min-h-px min-w-px px-0 py-[4px] relative shrink-0" data-name="Content">
                  <div className="content-stretch flex items-center relative shrink-0" data-name="Label text container">
                    <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#4a671e] text-[12px] text-nowrap tracking-[0.4px] whitespace-pre">{labelText}</p>
                  </div>
                  <div className="content-stretch flex items-center relative shrink-0" data-name="Placeholder text container">
                    <div className="h-[16px] relative shrink-0 w-0" data-name="Caret">
                      <div className="absolute inset-[-3.13%_-0.5px]" style={{ "--stroke-0": "rgba(74, 103, 30, 1)" } as React.CSSProperties}>
                        <img alt="" className="block max-w-none size-full" src={imgCaret} />
                      </div>
                    </div>
                    <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#44483b] text-[16px] text-nowrap tracking-[0.5px]">
                      <p className="leading-[24px] whitespace-pre">{placeholderText}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-0 relative shrink-0 w-full" data-name="Active indicator">
          <div className="absolute bottom-0 left-0 right-0 top-[-3px]" style={{ "--stroke-0": "rgba(74, 103, 30, 1)" } as React.CSSProperties}>
            <img alt="" className="block max-w-none size-full" src={imgActiveIndicator3} />
          </div>
        </div>
        {showSupportingText && (
          <div className="absolute bottom-[-20px] box-border content-stretch flex gap-[10px] h-[20px] items-start left-0 pb-0 pt-[4px] px-[16px] right-0" data-name="Supporting text">
            <p className="basis-0 font-['Manrope:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#44483b] text-[12px] tracking-[0.4px]">{supportingText}</p>
          </div>
        )}
      </div>
    );
  }
  if (style === "Filled" && state === "Enabled" && textConfigurations === "Placeholder text" && !leadingIcon && !trailingIcon) {
    return (
      <div className={className} data-name="Style=Filled, State=Enabled, Text configurations=Placeholder text, Leading icon=False, Trailing icon=False">
        <div className="basis-0 bg-[#e3e3d9] content-stretch flex flex-col gap-[10px] grow items-start min-h-px min-w-px relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="Text field">
          <div className="basis-0 grow min-h-px min-w-px relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="State-layer">
            <div className="size-full">
              <div className="box-border content-stretch flex items-start px-[16px] py-[4px] relative size-full">
                <div className="basis-0 box-border content-stretch flex flex-col grow h-[48px] items-start justify-center min-h-px min-w-px px-0 py-[4px] relative shrink-0" data-name="Content">
                  <div className="content-stretch flex items-center relative shrink-0" data-name="Label text container">
                    <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#44483b] text-[12px] text-nowrap tracking-[0.4px] whitespace-pre">{labelText}</p>
                  </div>
                  <div className="content-stretch flex gap-[10px] items-start relative shrink-0" data-name="Placeholder text container">
                    <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#44483b] text-[16px] text-nowrap tracking-[0.5px]">
                      <p className="leading-[24px] whitespace-pre">{placeholderText}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-0 relative shrink-0 w-full" data-name="Active indicator">
          <div className="absolute bottom-0 left-0 right-0 top-[-1px]" style={{ "--stroke-0": "rgba(68, 72, 59, 1)" } as React.CSSProperties}>
            <img alt="" className="block max-w-none size-full" src={imgActiveIndicator4} />
          </div>
        </div>
        {showSupportingText && (
          <div className="absolute bottom-[-20px] box-border content-stretch flex gap-[10px] h-[20px] items-start left-0 pb-0 pt-[4px] px-[16px] right-0" data-name="Supporting text">
            <p className="basis-0 font-['Manrope:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#44483b] text-[12px] tracking-[0.4px]">{supportingText}</p>
          </div>
        )}
      </div>
    );
  }
  if (style === "Filled" && state === "Disabled" && textConfigurations === "Label text" && !leadingIcon && !trailingIcon) {
    return (
      <div className={className} data-name="Style=Filled, State=Disabled, Text configurations=Label text, Leading icon=False, Trailing icon=False">
        <div className="absolute bg-[#1a1c16] inset-0 opacity-[0.04] rounded-tl-[4px] rounded-tr-[4px]" data-name="disabled-state-color" />
        <div className="basis-0 content-stretch flex flex-col gap-[10px] grow items-start min-h-px min-w-px opacity-[0.38] relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="Text field">
          <div className="basis-0 grow min-h-px min-w-px relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="State-layer">
            <div className="size-full">
              <div className="box-border content-stretch flex items-start pl-[16px] pr-0 py-[4px] relative size-full">
                <div className="basis-0 box-border content-stretch flex flex-col grow h-[48px] items-start justify-center min-h-px min-w-px px-0 py-[4px] relative shrink-0" data-name="Content">
                  <div className="content-stretch flex items-center relative shrink-0" data-name="Label text container">
                    <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#1a1c16] text-[16px] text-nowrap tracking-[0.5px] whitespace-pre">{labelText}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-0 relative shrink-0 w-full" data-name="Active indicator">
          <div className="absolute bottom-0 left-0 right-0 top-[-1px]" style={{ "--stroke-0": "rgba(26, 28, 22, 1)" } as React.CSSProperties}>
            <img alt="" className="block max-w-none size-full" src={imgActiveIndicator} />
          </div>
        </div>
        {showSupportingText && (
          <div className="absolute bottom-[-20px] box-border content-stretch flex gap-[10px] h-[20px] items-start left-0 opacity-[0.38] pb-0 pt-[4px] px-[16px] right-0" data-name="Supporting text">
            <p className="basis-0 font-['Manrope:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#1a1c16] text-[12px] tracking-[0.4px]">{supportingText}</p>
          </div>
        )}
      </div>
    );
  }
  if (style === "Filled" && state === "Error" && textConfigurations === "Label text" && !leadingIcon && !trailingIcon) {
    return (
      <div className={className} data-name="Style=Filled, State=Error, Text configurations=Label text, Leading icon=False, Trailing icon=False">
        <div className="basis-0 bg-[#e3e3d9] content-stretch flex flex-col gap-[10px] grow items-start min-h-px min-w-px relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="Text field">
          <div className="basis-0 grow min-h-px min-w-px relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="State-layer">
            <div className="size-full">
              <div className="box-border content-stretch flex items-start pl-[16px] pr-0 py-[4px] relative size-full">
                <div className="basis-0 box-border content-stretch flex flex-col grow h-[48px] items-start justify-center min-h-px min-w-px px-0 py-[4px] relative shrink-0" data-name="Content">
                  <div className="content-stretch flex items-center relative shrink-0" data-name="Label text container">
                    <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#ba1a1a] text-[16px] text-nowrap tracking-[0.5px] whitespace-pre">{labelText}</p>
                  </div>
                </div>
                <Trailingiconerror16 />
              </div>
            </div>
          </div>
        </div>
        <div className="h-0 relative shrink-0 w-full" data-name="Active indicator">
          <div className="absolute bottom-0 left-0 right-0 top-[-1px]" style={{ "--stroke-0": "rgba(186, 26, 26, 1)" } as React.CSSProperties}>
            <img alt="" className="block max-w-none size-full" src={imgActiveIndicator1} />
          </div>
        </div>
        {showSupportingText && (
          <div className="absolute bottom-[-20px] box-border content-stretch flex gap-[10px] h-[20px] items-start left-0 pb-0 pt-[4px] px-[16px] right-0" data-name="Supporting text">
            <p className="basis-0 font-['Manrope:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#ba1a1a] text-[12px] tracking-[0.4px]">{supportingText}</p>
          </div>
        )}
      </div>
    );
  }
  if (style === "Filled" && state === "Hovered" && textConfigurations === "Label text" && !leadingIcon && !trailingIcon) {
    return (
      <button className={className} data-name="Style=Filled, State=Hovered, Text configurations=Label text, Leading icon=False, Trailing icon=False">
        <div className="basis-0 bg-[#e3e3d9] content-stretch flex flex-col gap-[10px] grow items-start min-h-px min-w-px relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="Text field">
          <div className="basis-0 bg-[rgba(26,28,22,0.08)] grow min-h-px min-w-px relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="State-layer">
            <div className="size-full">
              <div className="box-border content-stretch flex items-start px-[16px] py-[4px] relative size-full">
                <div className="basis-0 box-border content-stretch flex flex-col grow h-[48px] items-start justify-center min-h-px min-w-px px-0 py-[4px] relative shrink-0" data-name="Content">
                  <div className="content-stretch flex items-center relative shrink-0" data-name="Label text container">
                    <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#44483b] text-[16px] text-nowrap tracking-[0.5px] whitespace-pre">{labelText}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-0 relative shrink-0 w-full" data-name="Active indicator">
          <div className="absolute bottom-0 left-0 right-0 top-[-1px]" style={{ "--stroke-0": "rgba(26, 28, 22, 1)" } as React.CSSProperties}>
            <img alt="" className="block max-w-none size-full" src={imgActiveIndicator2} />
          </div>
        </div>
        {showSupportingText && (
          <div className="absolute bottom-[-20px] box-border content-stretch flex gap-[10px] h-[20px] items-start left-0 pb-0 pt-[4px] px-[16px] right-0" data-name="Supporting text">
            <p className="basis-0 font-['Manrope:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#44483b] text-[12px] tracking-[0.4px]">{supportingText}</p>
          </div>
        )}
      </button>
    );
  }
  if (style === "Filled" && state === "Focused" && textConfigurations === "Label text" && !leadingIcon && !trailingIcon) {
    return (
      <div className={className} data-name="Style=Filled, State=Focused, Text configurations=Label text, Leading icon=False, Trailing icon=False">
        <div className="basis-0 bg-[#e3e3d9] content-stretch flex flex-col gap-[10px] grow items-start min-h-px min-w-px relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="Text field">
          <div className="basis-0 grow min-h-px min-w-px relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="State-layer">
            <div className="size-full">
              <div className="box-border content-stretch flex items-start px-[16px] py-[4px] relative size-full">
                <div className="basis-0 box-border content-stretch flex flex-col grow h-[48px] items-start justify-center min-h-px min-w-px px-0 py-[4px] relative shrink-0" data-name="Content">
                  <div className="content-stretch flex items-center relative shrink-0" data-name="Label text container">
                    <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#4a671e] text-[12px] text-nowrap tracking-[0.4px] whitespace-pre">{labelText}</p>
                  </div>
                  <div className="content-stretch flex h-[24px] items-center relative shrink-0" data-name="Input text container">
                    <div className="h-[16px] relative shrink-0 w-0" data-name="Caret">
                      <div className="absolute inset-[-3.13%_-0.5px]" style={{ "--stroke-0": "rgba(74, 103, 30, 1)" } as React.CSSProperties}>
                        <img alt="" className="block max-w-none size-full" src={imgCaret} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-0 relative shrink-0 w-full" data-name="Active indicator">
          <div className="absolute bottom-0 left-0 right-0 top-[-3px]" style={{ "--stroke-0": "rgba(74, 103, 30, 1)" } as React.CSSProperties}>
            <img alt="" className="block max-w-none size-full" src={imgActiveIndicator3} />
          </div>
        </div>
        {showSupportingText && (
          <div className="absolute bottom-[-20px] box-border content-stretch flex gap-[10px] h-[20px] items-start left-0 pb-0 pt-[4px] px-[16px] right-0" data-name="Supporting text">
            <p className="basis-0 font-['Manrope:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#44483b] text-[12px] tracking-[0.4px]">{supportingText}</p>
          </div>
        )}
      </div>
    );
  }
  if (style === "Filled" && state === "Enabled" && textConfigurations === "Label text" && !leadingIcon && !trailingIcon) {
    return (
      <div className={className} data-name="Style=Filled, State=Enabled, Text configurations=Label text, Leading icon=False, Trailing icon=False">
        <div className="basis-0 bg-[#e3e3d9] content-stretch flex flex-col gap-[10px] grow items-start min-h-px min-w-px relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="Text field">
          <div className="basis-0 grow min-h-px min-w-px relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="State-layer">
            <div className="size-full">
              <div className="box-border content-stretch flex items-start px-[16px] py-[4px] relative size-full">
                <div className="basis-0 box-border content-stretch flex flex-col grow h-[48px] items-start justify-center min-h-px min-w-px px-0 py-[4px] relative shrink-0" data-name="Content">
                  <div className="content-stretch flex items-center relative shrink-0" data-name="Label text container">
                    <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#44483b] text-[16px] text-nowrap tracking-[0.5px] whitespace-pre">{labelText}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-0 relative shrink-0 w-full" data-name="Active indicator">
          <div className="absolute bottom-0 left-0 right-0 top-[-1px]" style={{ "--stroke-0": "rgba(68, 72, 59, 1)" } as React.CSSProperties}>
            <img alt="" className="block max-w-none size-full" src={imgActiveIndicator4} />
          </div>
        </div>
        {showSupportingText && (
          <div className="absolute bottom-[-20px] box-border content-stretch flex gap-[10px] h-[20px] items-start left-0 pb-0 pt-[4px] px-[16px] right-0" data-name="Supporting text">
            <p className="basis-0 font-['Manrope:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#44483b] text-[12px] tracking-[0.4px]">{supportingText}</p>
          </div>
        )}
      </div>
    );
  }
  if (style === "Filled" && state === "Disabled" && textConfigurations === "Input text" && !leadingIcon && !trailingIcon) {
    return (
      <div className={className} data-name="Style=Filled, State=Disabled, Text configurations=Input text, Leading icon=False, Trailing icon=False">
        <div className="absolute bg-[#1a1c16] inset-0 opacity-[0.04] rounded-tl-[4px] rounded-tr-[4px]" data-name="disabled-state-color" />
        <div className="basis-0 content-stretch flex flex-col gap-[10px] grow items-start min-h-px min-w-px opacity-[0.38] relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="Text field">
          <div className="basis-0 grow min-h-px min-w-px relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="State-layer">
            <div className="size-full">
              <div className="box-border content-stretch flex items-start pl-[16px] pr-0 py-[4px] relative size-full">
                <div className="basis-0 box-border content-stretch flex flex-col grow h-[48px] items-start justify-center min-h-px min-w-px px-0 py-[4px] relative shrink-0" data-name="Content">
                  <div className="content-stretch flex items-center relative shrink-0" data-name="Label text container">
                    <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#1a1c16] text-[12px] text-nowrap tracking-[0.4px] whitespace-pre">{labelText}</p>
                  </div>
                  <div className="content-stretch flex items-center relative shrink-0" data-name="Input text container">
                    <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] text-nowrap tracking-[0.5px]">
                      <p className="leading-[24px] whitespace-pre">{inputText}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-0 relative shrink-0 w-full" data-name="Active indicator">
          <div className="absolute bottom-0 left-0 right-0 top-[-1px]" style={{ "--stroke-0": "rgba(26, 28, 22, 1)" } as React.CSSProperties}>
            <img alt="" className="block max-w-none size-full" src={imgActiveIndicator} />
          </div>
        </div>
        {showSupportingText && (
          <div className="absolute bottom-[-20px] box-border content-stretch flex gap-[10px] h-[20px] items-start left-0 opacity-[0.38] pb-0 pt-[4px] px-[16px] right-0" data-name="Supporting text">
            <p className="basis-0 font-['Manrope:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#1a1c16] text-[12px] tracking-[0.4px]">{supportingText}</p>
          </div>
        )}
      </div>
    );
  }
  if (style === "Filled" && state === "Error" && textConfigurations === "Input text" && !leadingIcon && !trailingIcon) {
    return (
      <div className={className} data-name="Style=Filled, State=Error, Text configurations=Input text, Leading icon=False, Trailing icon=False">
        <div className="basis-0 bg-[#e3e3d9] content-stretch flex flex-col gap-[10px] grow items-start min-h-px min-w-px relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="Text field">
          <div className="basis-0 grow min-h-px min-w-px relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="State-layer">
            <div className="size-full">
              <div className="box-border content-stretch flex items-start pl-[16px] pr-0 py-[4px] relative size-full">
                <div className="basis-0 box-border content-stretch flex flex-col grow h-[48px] items-start justify-center min-h-px min-w-px px-0 py-[4px] relative shrink-0" data-name="Content">
                  <div className="content-stretch flex items-center relative shrink-0" data-name="Label text container">
                    <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#ba1a1a] text-[12px] text-nowrap tracking-[0.4px] whitespace-pre">{labelText}</p>
                  </div>
                  <div className="content-stretch flex items-center relative shrink-0" data-name="Input text container">
                    <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] text-nowrap tracking-[0.5px]">
                      <p className="leading-[24px] whitespace-pre">{inputText}</p>
                    </div>
                    <div className="h-[16px] relative shrink-0 w-0" data-name="Caret">
                      <div className="absolute inset-[-3.13%_-0.5px]" style={{ "--stroke-0": "rgba(186, 26, 26, 1)" } as React.CSSProperties}>
                        <img alt="" className="block max-w-none size-full" src={imgCaret1} />
                      </div>
                    </div>
                  </div>
                </div>
                <Trailingiconerror17 />
              </div>
            </div>
          </div>
        </div>
        <div className="h-0 relative shrink-0 w-full" data-name="Active indicator">
          <div className="absolute bottom-0 left-0 right-0 top-[-3px]" style={{ "--stroke-0": "rgba(186, 26, 26, 1)" } as React.CSSProperties}>
            <img alt="" className="block max-w-none size-full" src={imgActiveIndicator5} />
          </div>
        </div>
        {showSupportingText && (
          <div className="absolute bottom-[-20px] box-border content-stretch flex gap-[10px] h-[20px] items-start left-0 pb-0 pt-[4px] px-[16px] right-0" data-name="Supporting text">
            <p className="basis-0 font-['Manrope:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#ba1a1a] text-[12px] tracking-[0.4px]">{supportingText}</p>
          </div>
        )}
      </div>
    );
  }
  if (style === "Filled" && state === "Hovered" && textConfigurations === "Input text" && !leadingIcon && !trailingIcon) {
    return (
      <button className={className} data-name="Style=Filled, State=Hovered, Text configurations=Input text, Leading icon=False, Trailing icon=False">
        <div className="basis-0 bg-[#e3e3d9] content-stretch flex flex-col gap-[10px] grow items-start min-h-px min-w-px relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="Text field">
          <div className="basis-0 bg-[rgba(26,28,22,0.08)] grow min-h-px min-w-px relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="State-layer">
            <div className="size-full">
              <div className="box-border content-stretch flex items-start px-[16px] py-[4px] relative size-full">
                <div className="basis-0 box-border content-stretch flex flex-col grow h-[48px] items-start justify-center min-h-px min-w-px px-0 py-[4px] relative shrink-0" data-name="Content">
                  <div className="content-stretch flex items-center relative shrink-0" data-name="Label text container">
                    <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#44483b] text-[12px] text-nowrap tracking-[0.4px] whitespace-pre">{labelText}</p>
                  </div>
                  <div className="content-stretch flex items-center relative shrink-0" data-name="Input text container">
                    <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] text-nowrap tracking-[0.5px]">
                      <p className="leading-[24px] whitespace-pre">{inputText}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-0 relative shrink-0 w-full" data-name="Active indicator">
          <div className="absolute bottom-0 left-0 right-0 top-[-1px]" style={{ "--stroke-0": "rgba(26, 28, 22, 1)" } as React.CSSProperties}>
            <img alt="" className="block max-w-none size-full" src={imgActiveIndicator2} />
          </div>
        </div>
        {showSupportingText && (
          <div className="absolute bottom-[-20px] box-border content-stretch flex gap-[10px] h-[20px] items-start left-0 pb-0 pt-[4px] px-[16px] right-0" data-name="Supporting text">
            <p className="basis-0 font-['Manrope:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#44483b] text-[12px] tracking-[0.4px]">{supportingText}</p>
          </div>
        )}
      </button>
    );
  }
  if (style === "Filled" && state === "Focused" && textConfigurations === "Input text" && !leadingIcon && !trailingIcon) {
    return (
      <div className={className} data-name="Style=Filled, State=Focused, Text configurations=Input text, Leading icon=False, Trailing icon=False">
        <div className="basis-0 bg-[#e3e3d9] content-stretch flex flex-col gap-[10px] grow items-start min-h-px min-w-px relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="Text field">
          <div className="basis-0 grow min-h-px min-w-px relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="State-layer">
            <div className="size-full">
              <div className="box-border content-stretch flex items-start px-[16px] py-[4px] relative size-full">
                <div className="basis-0 box-border content-stretch flex flex-col grow h-[48px] items-start justify-center min-h-px min-w-px px-0 py-[4px] relative shrink-0" data-name="Content">
                  <div className="content-stretch flex items-center relative shrink-0" data-name="Label text container">
                    <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#4a671e] text-[12px] text-nowrap tracking-[0.4px] whitespace-pre">{labelText}</p>
                  </div>
                  <div className="content-stretch flex items-center relative shrink-0" data-name="Input text container">
                    <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] text-nowrap tracking-[0.5px]">
                      <p className="leading-[24px] whitespace-pre">{inputText}</p>
                    </div>
                    <div className="h-[16px] relative shrink-0 w-0" data-name="Caret">
                      <div className="absolute inset-[-3.13%_-0.5px]" style={{ "--stroke-0": "rgba(74, 103, 30, 1)" } as React.CSSProperties}>
                        <img alt="" className="block max-w-none size-full" src={imgCaret} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-0 relative shrink-0 w-full" data-name="Active indicator">
          <div className="absolute bottom-0 left-0 right-0 top-[-3px]" style={{ "--stroke-0": "rgba(74, 103, 30, 1)" } as React.CSSProperties}>
            <img alt="" className="block max-w-none size-full" src={imgActiveIndicator3} />
          </div>
        </div>
        {showSupportingText && (
          <div className="absolute bottom-[-20px] box-border content-stretch flex gap-[10px] h-[20px] items-start left-0 pb-0 pt-[4px] px-[16px] right-0" data-name="Supporting text">
            <p className="basis-0 font-['Manrope:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#44483b] text-[12px] tracking-[0.4px]">{supportingText}</p>
          </div>
        )}
      </div>
    );
  }
  if (style === "Filled" && state === "Enabled" && textConfigurations === "Input text" && !leadingIcon && !trailingIcon) {
    return (
      <div className={className} data-name="Style=Filled, State=Enabled, Text configurations=Input text, Leading icon=False, Trailing icon=False">
        <div className="basis-0 bg-[#e3e3d9] content-stretch flex flex-col gap-[10px] grow items-start min-h-px min-w-px relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="Text field">
          <div className="basis-0 grow min-h-px min-w-px relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="State-layer">
            <div className="size-full">
              <div className="box-border content-stretch flex items-start px-[16px] py-[4px] relative size-full">
                <div className="basis-0 box-border content-stretch flex flex-col grow h-[48px] items-start justify-center min-h-px min-w-px px-0 py-[4px] relative shrink-0" data-name="Content">
                  <div className="content-stretch flex items-center relative shrink-0" data-name="Label text container">
                    <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#44483b] text-[12px] text-nowrap tracking-[0.4px] whitespace-pre">{labelText}</p>
                  </div>
                  <div className="content-stretch flex items-center relative shrink-0" data-name="Input text container">
                    <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] text-nowrap tracking-[0.5px]">
                      <p className="leading-[24px] whitespace-pre">{inputText}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-0 relative shrink-0 w-full" data-name="Active indicator">
          <div className="absolute bottom-0 left-0 right-0 top-[-1px]" style={{ "--stroke-0": "rgba(68, 72, 59, 1)" } as React.CSSProperties}>
            <img alt="" className="block max-w-none size-full" src={imgActiveIndicator4} />
          </div>
        </div>
        {showSupportingText && (
          <div className="absolute bottom-[-20px] box-border content-stretch flex gap-[10px] h-[20px] items-start left-0 pb-0 pt-[4px] px-[16px] right-0" data-name="Supporting text">
            <p className="basis-0 font-['Manrope:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#44483b] text-[12px] tracking-[0.4px]">{supportingText}</p>
          </div>
        )}
      </div>
    );
  }
  if (style === "Filled" && state === "Disabled" && textConfigurations === "Placeholder text" && leadingIcon && trailingIcon) {
    return (
      <div className={className} data-name="Style=Filled, State=Disabled, Text configurations=Placeholder text, Leading icon=True, Trailing icon=True">
        <div className="absolute bg-[#1a1c16] inset-0 opacity-[0.04] rounded-tl-[4px] rounded-tr-[4px]" data-name="disabled-state-color" />
        <div className="basis-0 content-stretch flex flex-col gap-[10px] grow items-start min-h-px min-w-px opacity-[0.38] relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="Text field">
          <div className="basis-0 box-border content-stretch flex grow items-start min-h-px min-w-px px-0 py-[4px] relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="State-layer">
            <Leadingicon45 />
            <div className="basis-0 box-border content-stretch flex flex-col grow h-[48px] items-start justify-center min-h-px min-w-px px-0 py-[4px] relative shrink-0" data-name="Content">
              <div className="content-stretch flex items-center relative shrink-0" data-name="Label text container">
                <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#1a1c16] text-[12px] text-nowrap tracking-[0.4px] whitespace-pre">{labelText}</p>
              </div>
              <div className="content-stretch flex gap-[10px] items-start relative shrink-0" data-name="Placeholder text container">
                <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] text-nowrap tracking-[0.5px]">
                  <p className="leading-[24px] whitespace-pre">{placeholderText}</p>
                </div>
              </div>
            </div>
            <Trailingicon24 />
          </div>
        </div>
        <div className="h-0 relative shrink-0 w-full" data-name="Active indicator">
          <div className="absolute bottom-0 left-0 right-0 top-[-1px]" style={{ "--stroke-0": "rgba(26, 28, 22, 1)" } as React.CSSProperties}>
            <img alt="" className="block max-w-none size-full" src={imgActiveIndicator} />
          </div>
        </div>
        {showSupportingText && (
          <div className="absolute bottom-[-20px] box-border content-stretch flex gap-[10px] h-[20px] items-start left-0 opacity-[0.38] pb-0 pt-[4px] px-[16px] right-0" data-name="Supporting text">
            <p className="basis-0 font-['Manrope:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#1a1c16] text-[12px] tracking-[0.4px]">{supportingText}</p>
          </div>
        )}
      </div>
    );
  }
  if (style === "Filled" && state === "Error" && textConfigurations === "Placeholder text" && leadingIcon && trailingIcon) {
    return (
      <div className={className} data-name="Style=Filled, State=Error, Text configurations=Placeholder text, Leading icon=True, Trailing icon=True">
        <div className="basis-0 bg-[#e3e3d9] content-stretch flex flex-col gap-[10px] grow items-start min-h-px min-w-px relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="Text field">
          <div className="basis-0 box-border content-stretch flex grow items-start min-h-px min-w-px px-0 py-[4px] relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="State-layer">
            <Leadingicon46 />
            <div className="basis-0 box-border content-stretch flex flex-col grow h-[48px] items-start justify-center min-h-px min-w-px px-0 py-[4px] relative shrink-0" data-name="Content">
              <div className="content-stretch flex items-center relative shrink-0" data-name="Label text container">
                <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#ba1a1a] text-[12px] text-nowrap tracking-[0.4px] whitespace-pre">{labelText}</p>
              </div>
              <div className="content-stretch flex gap-[10px] items-start relative shrink-0" data-name="Placeholder text container">
                <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#44483b] text-[16px] text-nowrap tracking-[0.5px]">
                  <p className="leading-[24px] whitespace-pre">{placeholderText}</p>
                </div>
              </div>
            </div>
            <Trailingiconerror18 />
          </div>
        </div>
        <div className="h-0 relative shrink-0 w-full" data-name="Active indicator">
          <div className="absolute bottom-0 left-0 right-0 top-[-1px]" style={{ "--stroke-0": "rgba(186, 26, 26, 1)" } as React.CSSProperties}>
            <img alt="" className="block max-w-none size-full" src={imgActiveIndicator1} />
          </div>
        </div>
        {showSupportingText && (
          <div className="absolute bottom-[-20px] box-border content-stretch flex gap-[10px] h-[20px] items-start left-0 pb-0 pt-[4px] px-[16px] right-0" data-name="Supporting text">
            <p className="basis-0 font-['Manrope:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#ba1a1a] text-[12px] tracking-[0.4px]">{supportingText}</p>
          </div>
        )}
      </div>
    );
  }
  if (style === "Filled" && state === "Hovered" && textConfigurations === "Placeholder text" && leadingIcon && trailingIcon) {
    return (
      <button className={className} data-name="Style=Filled, State=Hovered, Text configurations=Placeholder text, Leading icon=True, Trailing icon=True">
        <div className="basis-0 bg-[#e3e3d9] content-stretch flex flex-col gap-[10px] grow items-start min-h-px min-w-px relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="Text field">
          <div className="basis-0 bg-[rgba(26,28,22,0.08)] box-border content-stretch flex grow items-start min-h-px min-w-px px-0 py-[4px] relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="State-layer">
            <Leadingicon47 />
            <div className="basis-0 box-border content-stretch flex flex-col grow h-[48px] items-start justify-center min-h-px min-w-px px-0 py-[4px] relative shrink-0" data-name="Content">
              <div className="content-stretch flex items-center relative shrink-0" data-name="Label text container">
                <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#44483b] text-[12px] text-nowrap tracking-[0.4px] whitespace-pre">{labelText}</p>
              </div>
              <div className="content-stretch flex gap-[10px] items-start relative shrink-0" data-name="Placeholder text container">
                <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#44483b] text-[16px] text-nowrap tracking-[0.5px]">
                  <p className="leading-[24px] whitespace-pre">{placeholderText}</p>
                </div>
              </div>
            </div>
            <Trailingicon25 />
          </div>
        </div>
        <div className="h-0 relative shrink-0 w-full" data-name="Active indicator">
          <div className="absolute bottom-0 left-0 right-0 top-[-1px]" style={{ "--stroke-0": "rgba(26, 28, 22, 1)" } as React.CSSProperties}>
            <img alt="" className="block max-w-none size-full" src={imgActiveIndicator2} />
          </div>
        </div>
        {showSupportingText && (
          <div className="absolute bottom-[-20px] box-border content-stretch flex gap-[10px] h-[20px] items-start left-0 pb-0 pt-[4px] px-[16px] right-0" data-name="Supporting text">
            <p className="basis-0 font-['Manrope:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#44483b] text-[12px] tracking-[0.4px]">{supportingText}</p>
          </div>
        )}
      </button>
    );
  }
  if (style === "Filled" && state === "Focused" && textConfigurations === "Placeholder text" && leadingIcon && trailingIcon) {
    return (
      <div className={className} data-name="Style=Filled, State=Focused, Text configurations=Placeholder text, Leading icon=True, Trailing icon=True">
        <div className="basis-0 bg-[#e3e3d9] content-stretch flex flex-col gap-[10px] grow items-start min-h-px min-w-px relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="Text field">
          <div className="basis-0 box-border content-stretch flex grow items-start min-h-px min-w-px px-0 py-[4px] relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="State-layer">
            <Leadingicon48 />
            <div className="basis-0 box-border content-stretch flex flex-col grow h-[48px] items-start justify-center min-h-px min-w-px px-0 py-[4px] relative shrink-0" data-name="Content">
              <div className="content-stretch flex items-center relative shrink-0" data-name="Label text container">
                <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#4a671e] text-[12px] text-nowrap tracking-[0.4px] whitespace-pre">{labelText}</p>
              </div>
              <div className="content-stretch flex items-center relative shrink-0" data-name="Placeholder text container">
                <div className="h-[16px] relative shrink-0 w-0" data-name="Caret">
                  <div className="absolute inset-[-3.13%_-0.5px]" style={{ "--stroke-0": "rgba(74, 103, 30, 1)" } as React.CSSProperties}>
                    <img alt="" className="block max-w-none size-full" src={imgCaret} />
                  </div>
                </div>
                <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#44483b] text-[16px] text-nowrap tracking-[0.5px]">
                  <p className="leading-[24px] whitespace-pre">{placeholderText}</p>
                </div>
              </div>
            </div>
            <Trailingicon26 />
          </div>
        </div>
        <div className="h-0 relative shrink-0 w-full" data-name="Active indicator">
          <div className="absolute bottom-0 left-0 right-0 top-[-3px]" style={{ "--stroke-0": "rgba(74, 103, 30, 1)" } as React.CSSProperties}>
            <img alt="" className="block max-w-none size-full" src={imgActiveIndicator3} />
          </div>
        </div>
        {showSupportingText && (
          <div className="absolute bottom-[-20px] box-border content-stretch flex gap-[10px] h-[20px] items-start left-0 pb-0 pt-[4px] px-[16px] right-0" data-name="Supporting text">
            <p className="basis-0 font-['Manrope:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#44483b] text-[12px] tracking-[0.4px]">{supportingText}</p>
          </div>
        )}
      </div>
    );
  }
  if (style === "Filled" && state === "Enabled" && textConfigurations === "Placeholder text" && leadingIcon && trailingIcon) {
    return (
      <div className={className} data-name="Style=Filled, State=Enabled, Text configurations=Placeholder text, Leading icon=True, Trailing icon=True">
        <div className="basis-0 bg-[#e3e3d9] content-stretch flex flex-col gap-[10px] grow items-start min-h-px min-w-px relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="Text field">
          <div className="basis-0 box-border content-stretch flex grow items-start min-h-px min-w-px px-0 py-[4px] relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="State-layer">
            <Leadingicon49 />
            <div className="basis-0 box-border content-stretch flex flex-col grow h-[48px] items-start justify-center min-h-px min-w-px px-0 py-[4px] relative shrink-0" data-name="Content">
              <div className="content-stretch flex items-center relative shrink-0" data-name="Label text container">
                <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#44483b] text-[12px] text-nowrap tracking-[0.4px] whitespace-pre">{labelText}</p>
              </div>
              <div className="content-stretch flex gap-[10px] items-start relative shrink-0" data-name="Placeholder text container">
                <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#44483b] text-[16px] text-nowrap tracking-[0.5px]">
                  <p className="leading-[24px] whitespace-pre">{placeholderText}</p>
                </div>
              </div>
            </div>
            <Trailingicon27 />
          </div>
        </div>
        <div className="h-0 relative shrink-0 w-full" data-name="Active indicator">
          <div className="absolute bottom-0 left-0 right-0 top-[-1px]" style={{ "--stroke-0": "rgba(68, 72, 59, 1)" } as React.CSSProperties}>
            <img alt="" className="block max-w-none size-full" src={imgActiveIndicator4} />
          </div>
        </div>
        {showSupportingText && (
          <div className="absolute bottom-[-20px] box-border content-stretch flex gap-[10px] h-[20px] items-start left-0 pb-0 pt-[4px] px-[16px] right-0" data-name="Supporting text">
            <p className="basis-0 font-['Manrope:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#44483b] text-[12px] tracking-[0.4px]">{supportingText}</p>
          </div>
        )}
      </div>
    );
  }
  if (style === "Filled" && state === "Disabled" && textConfigurations === "Label text" && leadingIcon && trailingIcon) {
    return (
      <div className={className} data-name="Style=Filled, State=Disabled, Text configurations=Label text, Leading icon=True, Trailing icon=True">
        <div className="absolute bg-[#1a1c16] inset-0 opacity-[0.04] rounded-tl-[4px] rounded-tr-[4px]" data-name="disabled-state-color" />
        <div className="basis-0 content-stretch flex flex-col gap-[10px] grow items-start min-h-px min-w-px opacity-[0.38] relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="Text field">
          <div className="basis-0 box-border content-stretch flex grow items-start min-h-px min-w-px px-0 py-[4px] relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="State-layer">
            <Leadingicon50 />
            <div className="basis-0 box-border content-stretch flex flex-col grow h-[48px] items-start justify-center min-h-px min-w-px px-0 py-[4px] relative shrink-0" data-name="Content">
              <div className="content-stretch flex items-center relative shrink-0" data-name="Label text container">
                <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#1a1c16] text-[16px] text-nowrap tracking-[0.5px] whitespace-pre">{labelText}</p>
              </div>
            </div>
            <Trailingicon28 />
          </div>
        </div>
        <div className="h-0 relative shrink-0 w-full" data-name="Active indicator">
          <div className="absolute bottom-0 left-0 right-0 top-[-1px]" style={{ "--stroke-0": "rgba(26, 28, 22, 1)" } as React.CSSProperties}>
            <img alt="" className="block max-w-none size-full" src={imgActiveIndicator} />
          </div>
        </div>
        {showSupportingText && (
          <div className="absolute bottom-[-20px] box-border content-stretch flex gap-[10px] h-[20px] items-start left-0 opacity-[0.38] pb-0 pt-[4px] px-[16px] right-0" data-name="Supporting text">
            <p className="basis-0 font-['Manrope:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#1a1c16] text-[12px] tracking-[0.4px]">{supportingText}</p>
          </div>
        )}
      </div>
    );
  }
  if (style === "Filled" && state === "Error" && textConfigurations === "Label text" && leadingIcon && trailingIcon) {
    return (
      <div className={className} data-name="Style=Filled, State=Error, Text configurations=Label text, Leading icon=True, Trailing icon=True">
        <div className="basis-0 bg-[#e3e3d9] content-stretch flex flex-col gap-[10px] grow items-start min-h-px min-w-px relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="Text field">
          <div className="basis-0 box-border content-stretch flex grow items-start min-h-px min-w-px px-0 py-[4px] relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="State-layer">
            <Leadingicon51 />
            <div className="basis-0 box-border content-stretch flex flex-col grow h-[48px] items-start justify-center min-h-px min-w-px px-0 py-[4px] relative shrink-0" data-name="Content">
              <div className="content-stretch flex items-center relative shrink-0" data-name="Label text container">
                <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#ba1a1a] text-[16px] text-nowrap tracking-[0.5px] whitespace-pre">{labelText}</p>
              </div>
            </div>
            <Trailingiconerror19 />
          </div>
        </div>
        <div className="h-0 relative shrink-0 w-full" data-name="Active indicator">
          <div className="absolute bottom-0 left-0 right-0 top-[-1px]" style={{ "--stroke-0": "rgba(186, 26, 26, 1)" } as React.CSSProperties}>
            <img alt="" className="block max-w-none size-full" src={imgActiveIndicator1} />
          </div>
        </div>
        {showSupportingText && (
          <div className="absolute bottom-[-20px] box-border content-stretch flex gap-[10px] h-[20px] items-start left-0 pb-0 pt-[4px] px-[16px] right-0" data-name="Supporting text">
            <p className="basis-0 font-['Manrope:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#ba1a1a] text-[12px] tracking-[0.4px]">{supportingText}</p>
          </div>
        )}
      </div>
    );
  }
  if (style === "Filled" && state === "Hovered" && textConfigurations === "Label text" && leadingIcon && trailingIcon) {
    return (
      <button className={className} data-name="Style=Filled, State=Hovered, Text configurations=Label text, Leading icon=True, Trailing icon=True">
        <div className="basis-0 bg-[#e3e3d9] content-stretch flex flex-col gap-[10px] grow items-start min-h-px min-w-px relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="Text field">
          <div className="basis-0 bg-[rgba(26,28,22,0.08)] box-border content-stretch flex grow items-start min-h-px min-w-px px-0 py-[4px] relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="State-layer">
            <Leadingicon52 />
            <div className="basis-0 box-border content-stretch flex flex-col grow h-[48px] items-start justify-center min-h-px min-w-px px-0 py-[4px] relative shrink-0" data-name="Content">
              <div className="content-stretch flex items-center relative shrink-0" data-name="Label text container">
                <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#44483b] text-[16px] text-nowrap tracking-[0.5px] whitespace-pre">{labelText}</p>
              </div>
            </div>
            <Trailingicon29 />
          </div>
        </div>
        <div className="h-0 relative shrink-0 w-full" data-name="Active indicator">
          <div className="absolute bottom-0 left-0 right-0 top-[-1px]" style={{ "--stroke-0": "rgba(26, 28, 22, 1)" } as React.CSSProperties}>
            <img alt="" className="block max-w-none size-full" src={imgActiveIndicator2} />
          </div>
        </div>
        {showSupportingText && (
          <div className="absolute bottom-[-20px] box-border content-stretch flex gap-[10px] h-[20px] items-start left-0 pb-0 pt-[4px] px-[16px] right-0" data-name="Supporting text">
            <p className="basis-0 font-['Manrope:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#44483b] text-[12px] tracking-[0.4px]">{supportingText}</p>
          </div>
        )}
      </button>
    );
  }
  if (style === "Filled" && state === "Focused" && textConfigurations === "Label text" && leadingIcon && trailingIcon) {
    return (
      <div className={className} data-name="Style=Filled, State=Focused, Text configurations=Label text, Leading icon=True, Trailing icon=True">
        <div className="basis-0 bg-[#e3e3d9] content-stretch flex flex-col gap-[10px] grow items-start min-h-px min-w-px relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="Text field">
          <div className="basis-0 box-border content-stretch flex grow items-start min-h-px min-w-px px-0 py-[4px] relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="State-layer">
            <Leadingicon53 />
            <div className="basis-0 box-border content-stretch flex flex-col grow h-[48px] items-start justify-center min-h-px min-w-px px-0 py-[4px] relative shrink-0" data-name="Content">
              <div className="content-stretch flex items-center relative shrink-0" data-name="Label text container">
                <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#4a671e] text-[12px] text-nowrap tracking-[0.4px] whitespace-pre">{labelText}</p>
              </div>
              <div className="content-stretch flex h-[24px] items-center relative shrink-0" data-name="Input text container">
                <div className="h-[16px] relative shrink-0 w-0" data-name="Caret">
                  <div className="absolute inset-[-3.13%_-0.5px]" style={{ "--stroke-0": "rgba(74, 103, 30, 1)" } as React.CSSProperties}>
                    <img alt="" className="block max-w-none size-full" src={imgCaret} />
                  </div>
                </div>
              </div>
            </div>
            <Trailingicon30 />
          </div>
        </div>
        <div className="h-0 relative shrink-0 w-full" data-name="Active indicator">
          <div className="absolute bottom-0 left-0 right-0 top-[-3px]" style={{ "--stroke-0": "rgba(74, 103, 30, 1)" } as React.CSSProperties}>
            <img alt="" className="block max-w-none size-full" src={imgActiveIndicator3} />
          </div>
        </div>
        {showSupportingText && (
          <div className="absolute bottom-[-20px] box-border content-stretch flex gap-[10px] h-[20px] items-start left-0 pb-0 pt-[4px] px-[16px] right-0" data-name="Supporting text">
            <p className="basis-0 font-['Manrope:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#44483b] text-[12px] tracking-[0.4px]">{supportingText}</p>
          </div>
        )}
      </div>
    );
  }
  if (style === "Filled" && state === "Enabled" && textConfigurations === "Label text" && leadingIcon && trailingIcon) {
    return (
      <div className={className} data-name="Style=Filled, State=Enabled, Text configurations=Label text, Leading icon=True, Trailing icon=True">
        <div className="basis-0 bg-[#e3e3d9] content-stretch flex flex-col gap-[10px] grow items-start min-h-px min-w-px relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="Text field">
          <div className="basis-0 box-border content-stretch flex grow items-start min-h-px min-w-px px-0 py-[4px] relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="State-layer">
            <Leadingicon54 />
            <div className="basis-0 box-border content-stretch flex flex-col grow h-[48px] items-start justify-center min-h-px min-w-px px-0 py-[4px] relative shrink-0" data-name="Content">
              <div className="content-stretch flex items-center relative shrink-0" data-name="Label text container">
                <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#44483b] text-[16px] text-nowrap tracking-[0.5px] whitespace-pre">{labelText}</p>
              </div>
            </div>
            <Trailingicon31 />
          </div>
        </div>
        <div className="h-0 relative shrink-0 w-full" data-name="Active indicator">
          <div className="absolute bottom-0 left-0 right-0 top-[-1px]" style={{ "--stroke-0": "rgba(68, 72, 59, 1)" } as React.CSSProperties}>
            <img alt="" className="block max-w-none size-full" src={imgActiveIndicator4} />
          </div>
        </div>
        {showSupportingText && (
          <div className="absolute bottom-[-20px] box-border content-stretch flex gap-[10px] h-[20px] items-start left-0 pb-0 pt-[4px] px-[16px] right-0" data-name="Supporting text">
            <p className="basis-0 font-['Manrope:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#44483b] text-[12px] tracking-[0.4px]">{supportingText}</p>
          </div>
        )}
      </div>
    );
  }
  if (style === "Filled" && state === "Disabled" && textConfigurations === "Input text" && leadingIcon && trailingIcon) {
    return (
      <div className={className} data-name="Style=Filled, State=Disabled, Text configurations=Input text, Leading icon=True, Trailing icon=True">
        <div className="absolute bg-[#1a1c16] inset-0 opacity-[0.04] rounded-tl-[4px] rounded-tr-[4px]" data-name="disabled-state-color" />
        <div className="basis-0 content-stretch flex flex-col gap-[10px] grow items-start min-h-px min-w-px opacity-[0.38] relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="Text field">
          <div className="basis-0 box-border content-stretch flex grow items-start min-h-px min-w-px px-0 py-[4px] relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="State-layer">
            <Leadingicon55 />
            <div className="basis-0 box-border content-stretch flex flex-col grow h-[48px] items-start justify-center min-h-px min-w-px px-0 py-[4px] relative shrink-0" data-name="Content">
              <div className="content-stretch flex items-center relative shrink-0" data-name="Label text container">
                <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#1a1c16] text-[12px] text-nowrap tracking-[0.4px] whitespace-pre">{labelText}</p>
              </div>
              <div className="content-stretch flex items-center relative shrink-0" data-name="Input text container">
                <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] text-nowrap tracking-[0.5px]">
                  <p className="leading-[24px] whitespace-pre">{inputText}</p>
                </div>
              </div>
            </div>
            <Trailingicon32 />
          </div>
        </div>
        <div className="h-0 relative shrink-0 w-full" data-name="Active indicator">
          <div className="absolute bottom-0 left-0 right-0 top-[-1px]" style={{ "--stroke-0": "rgba(26, 28, 22, 1)" } as React.CSSProperties}>
            <img alt="" className="block max-w-none size-full" src={imgActiveIndicator} />
          </div>
        </div>
        {showSupportingText && (
          <div className="absolute bottom-[-20px] box-border content-stretch flex gap-[10px] h-[20px] items-start left-0 opacity-[0.38] pb-0 pt-[4px] px-[16px] right-0" data-name="Supporting text">
            <p className="basis-0 font-['Manrope:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#1a1c16] text-[12px] tracking-[0.4px]">{supportingText}</p>
          </div>
        )}
      </div>
    );
  }
  if (style === "Filled" && state === "Error" && textConfigurations === "Input text" && leadingIcon && trailingIcon) {
    return (
      <div className={className} data-name="Style=Filled, State=Error, Text configurations=Input text, Leading icon=True, Trailing icon=True">
        <div className="basis-0 bg-[#e3e3d9] content-stretch flex flex-col gap-[10px] grow items-start min-h-px min-w-px relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="Text field">
          <div className="basis-0 box-border content-stretch flex grow items-start min-h-px min-w-px px-0 py-[4px] relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="State-layer">
            <Leadingicon56 />
            <div className="basis-0 box-border content-stretch flex flex-col grow h-[48px] items-start justify-center min-h-px min-w-px px-0 py-[4px] relative shrink-0" data-name="Content">
              <div className="content-stretch flex items-center relative shrink-0" data-name="Label text container">
                <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#ba1a1a] text-[12px] text-nowrap tracking-[0.4px] whitespace-pre">{labelText}</p>
              </div>
              <div className="content-stretch flex items-center relative shrink-0" data-name="Input text container">
                <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] text-nowrap tracking-[0.5px]">
                  <p className="leading-[24px] whitespace-pre">{inputText}</p>
                </div>
                <div className="h-[16px] relative shrink-0 w-0" data-name="Caret">
                  <div className="absolute inset-[-3.13%_-0.5px]" style={{ "--stroke-0": "rgba(186, 26, 26, 1)" } as React.CSSProperties}>
                    <img alt="" className="block max-w-none size-full" src={imgCaret1} />
                  </div>
                </div>
              </div>
            </div>
            <Trailingiconerror20 />
          </div>
        </div>
        <div className="h-0 relative shrink-0 w-full" data-name="Active indicator">
          <div className="absolute bottom-0 left-0 right-0 top-[-3px]" style={{ "--stroke-0": "rgba(186, 26, 26, 1)" } as React.CSSProperties}>
            <img alt="" className="block max-w-none size-full" src={imgActiveIndicator5} />
          </div>
        </div>
        {showSupportingText && (
          <div className="absolute bottom-[-20px] box-border content-stretch flex gap-[10px] h-[20px] items-start left-0 pb-0 pt-[4px] px-[16px] right-0" data-name="Supporting text">
            <p className="basis-0 font-['Manrope:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#ba1a1a] text-[12px] tracking-[0.4px]">{supportingText}</p>
          </div>
        )}
      </div>
    );
  }
  if (style === "Filled" && state === "Hovered" && textConfigurations === "Input text" && leadingIcon && trailingIcon) {
    return (
      <button className={className} data-name="Style=Filled, State=Hovered, Text configurations=Input text, Leading icon=True, Trailing icon=True">
        <div className="basis-0 bg-[#e3e3d9] content-stretch flex flex-col gap-[10px] grow items-start min-h-px min-w-px relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="Text field">
          <div className="basis-0 bg-[rgba(26,28,22,0.08)] box-border content-stretch flex grow items-start min-h-px min-w-px px-0 py-[4px] relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="State-layer">
            <Leadingicon57 />
            <div className="basis-0 box-border content-stretch flex flex-col grow h-[48px] items-start justify-center min-h-px min-w-px px-0 py-[4px] relative shrink-0" data-name="Content">
              <div className="content-stretch flex items-center relative shrink-0" data-name="Label text container">
                <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#44483b] text-[12px] text-nowrap tracking-[0.4px] whitespace-pre">{labelText}</p>
              </div>
              <div className="content-stretch flex items-center relative shrink-0" data-name="Input text container">
                <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] text-nowrap tracking-[0.5px]">
                  <p className="leading-[24px] whitespace-pre">{inputText}</p>
                </div>
              </div>
            </div>
            <Trailingicon33 />
          </div>
        </div>
        <div className="h-0 relative shrink-0 w-full" data-name="Active indicator">
          <div className="absolute bottom-0 left-0 right-0 top-[-1px]" style={{ "--stroke-0": "rgba(26, 28, 22, 1)" } as React.CSSProperties}>
            <img alt="" className="block max-w-none size-full" src={imgActiveIndicator2} />
          </div>
        </div>
        {showSupportingText && (
          <div className="absolute bottom-[-20px] box-border content-stretch flex gap-[10px] h-[20px] items-start left-0 pb-0 pt-[4px] px-[16px] right-0" data-name="Supporting text">
            <p className="basis-0 font-['Manrope:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#44483b] text-[12px] tracking-[0.4px]">{supportingText}</p>
          </div>
        )}
      </button>
    );
  }
  if (style === "Filled" && state === "Focused" && textConfigurations === "Input text" && leadingIcon && trailingIcon) {
    return (
      <div className={className} data-name="Style=Filled, State=Focused, Text configurations=Input text, Leading icon=True, Trailing icon=True">
        <div className="basis-0 bg-[#e3e3d9] content-stretch flex flex-col gap-[10px] grow items-start min-h-px min-w-px relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="Text field">
          <div className="basis-0 box-border content-stretch flex grow items-start min-h-px min-w-px px-0 py-[4px] relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="State-layer">
            <Leadingicon58 />
            <div className="basis-0 box-border content-stretch flex flex-col grow h-[48px] items-start justify-center min-h-px min-w-px px-0 py-[4px] relative shrink-0" data-name="Content">
              <div className="content-stretch flex items-center relative shrink-0" data-name="Label text container">
                <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#4a671e] text-[12px] text-nowrap tracking-[0.4px] whitespace-pre">{labelText}</p>
              </div>
              <div className="content-stretch flex items-center relative shrink-0" data-name="Input text container">
                <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] text-nowrap tracking-[0.5px]">
                  <p className="leading-[24px] whitespace-pre">{inputText}</p>
                </div>
                <div className="h-[16px] relative shrink-0 w-0" data-name="Caret">
                  <div className="absolute inset-[-3.13%_-0.5px]" style={{ "--stroke-0": "rgba(74, 103, 30, 1)" } as React.CSSProperties}>
                    <img alt="" className="block max-w-none size-full" src={imgCaret} />
                  </div>
                </div>
              </div>
            </div>
            <Trailingicon34 />
          </div>
        </div>
        <div className="h-0 relative shrink-0 w-full" data-name="Active indicator">
          <div className="absolute bottom-0 left-0 right-0 top-[-3px]" style={{ "--stroke-0": "rgba(74, 103, 30, 1)" } as React.CSSProperties}>
            <img alt="" className="block max-w-none size-full" src={imgActiveIndicator3} />
          </div>
        </div>
        {showSupportingText && (
          <div className="absolute bottom-[-20px] box-border content-stretch flex gap-[10px] h-[20px] items-start left-0 pb-0 pt-[4px] px-[16px] right-0" data-name="Supporting text">
            <p className="basis-0 font-['Manrope:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#44483b] text-[12px] tracking-[0.4px]">{supportingText}</p>
          </div>
        )}
      </div>
    );
  }
  if (style === "Filled" && state === "Enabled" && textConfigurations === "Input text" && leadingIcon && trailingIcon) {
    return (
      <div className={className} data-name="Style=Filled, State=Enabled, Text configurations=Input text, Leading icon=True, Trailing icon=True">
        <div className="basis-0 bg-[#e3e3d9] content-stretch flex flex-col gap-[10px] grow items-start min-h-px min-w-px relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="Text field">
          <div className="basis-0 box-border content-stretch flex grow items-start min-h-px min-w-px px-0 py-[4px] relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="State-layer">
            <Leadingicon59 />
            <div className="basis-0 box-border content-stretch flex flex-col grow h-[48px] items-start justify-center min-h-px min-w-px px-0 py-[4px] relative shrink-0" data-name="Content">
              <div className="content-stretch flex items-center relative shrink-0" data-name="Label text container">
                <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#44483b] text-[12px] text-nowrap tracking-[0.4px] whitespace-pre">{labelText}</p>
              </div>
              <div className="content-stretch flex items-center relative shrink-0" data-name="Input text container">
                <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] text-nowrap tracking-[0.5px]">
                  <p className="leading-[24px] whitespace-pre">{inputText}</p>
                </div>
              </div>
            </div>
            <Trailingicon35 />
          </div>
        </div>
        <div className="h-0 relative shrink-0 w-full" data-name="Active indicator">
          <div className="absolute bottom-0 left-0 right-0 top-[-1px]" style={{ "--stroke-0": "rgba(68, 72, 59, 1)" } as React.CSSProperties}>
            <img alt="" className="block max-w-none size-full" src={imgActiveIndicator4} />
          </div>
        </div>
        {showSupportingText && (
          <div className="absolute bottom-[-20px] box-border content-stretch flex gap-[10px] h-[20px] items-start left-0 pb-0 pt-[4px] px-[16px] right-0" data-name="Supporting text">
            <p className="basis-0 font-['Manrope:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#44483b] text-[12px] tracking-[0.4px]">{supportingText}</p>
          </div>
        )}
      </div>
    );
  }
  if (style === "Filled" && state === "Disabled" && textConfigurations === "Placeholder text" && !leadingIcon && trailingIcon) {
    return (
      <div className={className} data-name="Style=Filled, State=Disabled, Text configurations=Placeholder text, Leading icon=False, Trailing icon=True">
        <div className="absolute bg-[#1a1c16] inset-0 opacity-[0.04] rounded-tl-[4px] rounded-tr-[4px]" data-name="disabled-state-color" />
        <div className="basis-0 content-stretch flex flex-col gap-[10px] grow items-start min-h-px min-w-px opacity-[0.38] relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="Text field">
          <div className="basis-0 grow min-h-px min-w-px relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="State-layer">
            <div className="size-full">
              <div className="box-border content-stretch flex items-start pl-[16px] pr-0 py-[4px] relative size-full">
                <div className="basis-0 box-border content-stretch flex flex-col grow h-[48px] items-start justify-center min-h-px min-w-px px-0 py-[4px] relative shrink-0" data-name="Content">
                  <div className="content-stretch flex items-center relative shrink-0" data-name="Label text container">
                    <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#1a1c16] text-[12px] text-nowrap tracking-[0.4px] whitespace-pre">{labelText}</p>
                  </div>
                  <div className="content-stretch flex gap-[10px] items-start relative shrink-0" data-name="Placeholder text container">
                    <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] text-nowrap tracking-[0.5px]">
                      <p className="leading-[24px] whitespace-pre">{placeholderText}</p>
                    </div>
                  </div>
                </div>
                <Trailingicon36 />
              </div>
            </div>
          </div>
        </div>
        <div className="h-0 relative shrink-0 w-full" data-name="Active indicator">
          <div className="absolute bottom-0 left-0 right-0 top-[-1px]" style={{ "--stroke-0": "rgba(26, 28, 22, 1)" } as React.CSSProperties}>
            <img alt="" className="block max-w-none size-full" src={imgActiveIndicator} />
          </div>
        </div>
        {showSupportingText && (
          <div className="absolute bottom-[-20px] box-border content-stretch flex gap-[10px] h-[20px] items-start left-0 opacity-[0.38] pb-0 pt-[4px] px-[16px] right-0" data-name="Supporting text">
            <p className="basis-0 font-['Manrope:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#1a1c16] text-[12px] tracking-[0.4px]">{supportingText}</p>
          </div>
        )}
      </div>
    );
  }
  if (style === "Filled" && state === "Error" && textConfigurations === "Placeholder text" && !leadingIcon && trailingIcon) {
    return (
      <div className={className} data-name="Style=Filled, State=Error, Text configurations=Placeholder text, Leading icon=False, Trailing icon=True">
        <div className="basis-0 bg-[#e3e3d9] content-stretch flex flex-col gap-[10px] grow items-start min-h-px min-w-px relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="Text field">
          <div className="basis-0 grow min-h-px min-w-px relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="State-layer">
            <div className="size-full">
              <div className="box-border content-stretch flex items-start pl-[16px] pr-0 py-[4px] relative size-full">
                <div className="basis-0 box-border content-stretch flex flex-col grow h-[48px] items-start justify-center min-h-px min-w-px px-0 py-[4px] relative shrink-0" data-name="Content">
                  <div className="content-stretch flex items-center relative shrink-0" data-name="Label text container">
                    <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#ba1a1a] text-[12px] text-nowrap tracking-[0.4px] whitespace-pre">{labelText}</p>
                  </div>
                  <div className="content-stretch flex gap-[10px] items-start relative shrink-0" data-name="Placeholder text container">
                    <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#44483b] text-[16px] text-nowrap tracking-[0.5px]">
                      <p className="leading-[24px] whitespace-pre">{placeholderText}</p>
                    </div>
                  </div>
                </div>
                <Trailingiconerror21 />
              </div>
            </div>
          </div>
        </div>
        <div className="h-0 relative shrink-0 w-full" data-name="Active indicator">
          <div className="absolute bottom-0 left-0 right-0 top-[-1px]" style={{ "--stroke-0": "rgba(186, 26, 26, 1)" } as React.CSSProperties}>
            <img alt="" className="block max-w-none size-full" src={imgActiveIndicator1} />
          </div>
        </div>
        {showSupportingText && (
          <div className="absolute bottom-[-20px] box-border content-stretch flex gap-[10px] h-[20px] items-start left-0 pb-0 pt-[4px] px-[16px] right-0" data-name="Supporting text">
            <p className="basis-0 font-['Manrope:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#ba1a1a] text-[12px] tracking-[0.4px]">{supportingText}</p>
          </div>
        )}
      </div>
    );
  }
  if (style === "Filled" && state === "Hovered" && textConfigurations === "Placeholder text" && !leadingIcon && trailingIcon) {
    return (
      <button className={className} data-name="Style=Filled, State=Hovered, Text configurations=Placeholder text, Leading icon=False, Trailing icon=True">
        <div className="basis-0 bg-[#e3e3d9] content-stretch flex flex-col gap-[10px] grow items-start min-h-px min-w-px relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="Text field">
          <div className="basis-0 bg-[rgba(26,28,22,0.08)] grow min-h-px min-w-px relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="State-layer">
            <div className="size-full">
              <div className="box-border content-stretch flex items-start pl-[16px] pr-0 py-[4px] relative size-full">
                <div className="basis-0 box-border content-stretch flex flex-col grow h-[48px] items-start justify-center min-h-px min-w-px px-0 py-[4px] relative shrink-0" data-name="Content">
                  <div className="content-stretch flex items-center relative shrink-0" data-name="Label text container">
                    <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#44483b] text-[12px] text-nowrap tracking-[0.4px] whitespace-pre">{labelText}</p>
                  </div>
                  <div className="content-stretch flex gap-[10px] items-start relative shrink-0" data-name="Placeholder text container">
                    <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#44483b] text-[16px] text-nowrap tracking-[0.5px]">
                      <p className="leading-[24px] whitespace-pre">{placeholderText}</p>
                    </div>
                  </div>
                </div>
                <Trailingicon37 />
              </div>
            </div>
          </div>
        </div>
        <div className="h-0 relative shrink-0 w-full" data-name="Active indicator">
          <div className="absolute bottom-0 left-0 right-0 top-[-1px]" style={{ "--stroke-0": "rgba(26, 28, 22, 1)" } as React.CSSProperties}>
            <img alt="" className="block max-w-none size-full" src={imgActiveIndicator2} />
          </div>
        </div>
        {showSupportingText && (
          <div className="absolute bottom-[-20px] box-border content-stretch flex gap-[10px] h-[20px] items-start left-0 pb-0 pt-[4px] px-[16px] right-0" data-name="Supporting text">
            <p className="basis-0 font-['Manrope:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#44483b] text-[12px] tracking-[0.4px]">{supportingText}</p>
          </div>
        )}
      </button>
    );
  }
  if (style === "Filled" && state === "Focused" && textConfigurations === "Placeholder text" && !leadingIcon && trailingIcon) {
    return (
      <div className={className} data-name="Style=Filled, State=Focused, Text configurations=Placeholder text, Leading icon=False, Trailing icon=True">
        <div className="basis-0 bg-[#e3e3d9] content-stretch flex flex-col gap-[10px] grow items-start min-h-px min-w-px relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="Text field">
          <div className="basis-0 grow min-h-px min-w-px relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="State-layer">
            <div className="size-full">
              <div className="box-border content-stretch flex items-start pl-[16px] pr-0 py-[4px] relative size-full">
                <div className="basis-0 box-border content-stretch flex flex-col grow h-[48px] items-start justify-center min-h-px min-w-px px-0 py-[4px] relative shrink-0" data-name="Content">
                  <div className="content-stretch flex items-center relative shrink-0" data-name="Label text container">
                    <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#4a671e] text-[12px] text-nowrap tracking-[0.4px] whitespace-pre">{labelText}</p>
                  </div>
                  <div className="content-stretch flex items-center relative shrink-0" data-name="Placeholder text container">
                    <div className="h-[16px] relative shrink-0 w-0" data-name="Caret">
                      <div className="absolute inset-[-3.13%_-0.5px]" style={{ "--stroke-0": "rgba(74, 103, 30, 1)" } as React.CSSProperties}>
                        <img alt="" className="block max-w-none size-full" src={imgCaret} />
                      </div>
                    </div>
                    <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#44483b] text-[16px] text-nowrap tracking-[0.5px]">
                      <p className="leading-[24px] whitespace-pre">{placeholderText}</p>
                    </div>
                  </div>
                </div>
                <Trailingicon38 />
              </div>
            </div>
          </div>
        </div>
        <div className="h-0 relative shrink-0 w-full" data-name="Active indicator">
          <div className="absolute bottom-0 left-0 right-0 top-[-3px]" style={{ "--stroke-0": "rgba(74, 103, 30, 1)" } as React.CSSProperties}>
            <img alt="" className="block max-w-none size-full" src={imgActiveIndicator3} />
          </div>
        </div>
        {showSupportingText && (
          <div className="absolute bottom-[-20px] box-border content-stretch flex gap-[10px] h-[20px] items-start left-0 pb-0 pt-[4px] px-[16px] right-0" data-name="Supporting text">
            <p className="basis-0 font-['Manrope:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#44483b] text-[12px] tracking-[0.4px]">{supportingText}</p>
          </div>
        )}
      </div>
    );
  }
  if (style === "Filled" && state === "Enabled" && textConfigurations === "Placeholder text" && !leadingIcon && trailingIcon) {
    return (
      <div className={className} data-name="Style=Filled, State=Enabled, Text configurations=Placeholder text, Leading icon=False, Trailing icon=True">
        <div className="basis-0 bg-[#e3e3d9] content-stretch flex flex-col gap-[10px] grow items-start min-h-px min-w-px relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="Text field">
          <div className="basis-0 grow min-h-px min-w-px relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="State-layer">
            <div className="size-full">
              <div className="box-border content-stretch flex items-start pl-[16px] pr-0 py-[4px] relative size-full">
                <div className="basis-0 box-border content-stretch flex flex-col grow h-[48px] items-start justify-center min-h-px min-w-px px-0 py-[4px] relative shrink-0" data-name="Content">
                  <div className="content-stretch flex items-center relative shrink-0" data-name="Label text container">
                    <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#44483b] text-[12px] text-nowrap tracking-[0.4px] whitespace-pre">{labelText}</p>
                  </div>
                  <div className="content-stretch flex gap-[10px] items-start relative shrink-0" data-name="Placeholder text container">
                    <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#44483b] text-[16px] text-nowrap tracking-[0.5px]">
                      <p className="leading-[24px] whitespace-pre">{placeholderText}</p>
                    </div>
                  </div>
                </div>
                <Trailingicon39 />
              </div>
            </div>
          </div>
        </div>
        <div className="h-0 relative shrink-0 w-full" data-name="Active indicator">
          <div className="absolute bottom-0 left-0 right-0 top-[-1px]" style={{ "--stroke-0": "rgba(68, 72, 59, 1)" } as React.CSSProperties}>
            <img alt="" className="block max-w-none size-full" src={imgActiveIndicator4} />
          </div>
        </div>
        {showSupportingText && (
          <div className="absolute bottom-[-20px] box-border content-stretch flex gap-[10px] h-[20px] items-start left-0 pb-0 pt-[4px] px-[16px] right-0" data-name="Supporting text">
            <p className="basis-0 font-['Manrope:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#44483b] text-[12px] tracking-[0.4px]">{supportingText}</p>
          </div>
        )}
      </div>
    );
  }
  if (style === "Filled" && state === "Disabled" && textConfigurations === "Label text" && !leadingIcon && trailingIcon) {
    return (
      <div className={className} data-name="Style=Filled, State=Disabled, Text configurations=Label text, Leading icon=False, Trailing icon=True">
        <div className="absolute bg-[#1a1c16] inset-0 opacity-[0.04] rounded-tl-[4px] rounded-tr-[4px]" data-name="disabled-state-color" />
        <div className="basis-0 content-stretch flex flex-col gap-[10px] grow items-start min-h-px min-w-px opacity-[0.38] relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="Text field">
          <div className="basis-0 grow min-h-px min-w-px relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="State-layer">
            <div className="size-full">
              <div className="box-border content-stretch flex items-start pl-[16px] pr-0 py-[4px] relative size-full">
                <div className="basis-0 box-border content-stretch flex flex-col grow h-[48px] items-start justify-center min-h-px min-w-px px-0 py-[4px] relative shrink-0" data-name="Content">
                  <div className="content-stretch flex items-center relative shrink-0" data-name="Label text container">
                    <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#1a1c16] text-[16px] text-nowrap tracking-[0.5px] whitespace-pre">{labelText}</p>
                  </div>
                </div>
                <Trailingicon40 />
              </div>
            </div>
          </div>
        </div>
        <div className="h-0 relative shrink-0 w-full" data-name="Active indicator">
          <div className="absolute bottom-0 left-0 right-0 top-[-1px]" style={{ "--stroke-0": "rgba(26, 28, 22, 1)" } as React.CSSProperties}>
            <img alt="" className="block max-w-none size-full" src={imgActiveIndicator} />
          </div>
        </div>
        {showSupportingText && (
          <div className="absolute bottom-[-20px] box-border content-stretch flex gap-[10px] h-[20px] items-start left-0 opacity-[0.38] pb-0 pt-[4px] px-[16px] right-0" data-name="Supporting text">
            <p className="basis-0 font-['Manrope:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#1a1c16] text-[12px] tracking-[0.4px]">{supportingText}</p>
          </div>
        )}
      </div>
    );
  }
  if (style === "Filled" && state === "Error" && textConfigurations === "Label text" && !leadingIcon && trailingIcon) {
    return (
      <div className={className} data-name="Style=Filled, State=Error, Text configurations=Label text, Leading icon=False, Trailing icon=True">
        <div className="basis-0 bg-[#e3e3d9] content-stretch flex flex-col gap-[10px] grow items-start min-h-px min-w-px relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="Text field">
          <div className="basis-0 grow min-h-px min-w-px relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="State-layer">
            <div className="size-full">
              <div className="box-border content-stretch flex items-start pl-[16px] pr-0 py-[4px] relative size-full">
                <div className="basis-0 box-border content-stretch flex flex-col grow h-[48px] items-start justify-center min-h-px min-w-px px-0 py-[4px] relative shrink-0" data-name="Content">
                  <div className="content-stretch flex items-center relative shrink-0" data-name="Label text container">
                    <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#ba1a1a] text-[16px] text-nowrap tracking-[0.5px] whitespace-pre">{labelText}</p>
                  </div>
                </div>
                <Trailingiconerror22 />
              </div>
            </div>
          </div>
        </div>
        <div className="h-0 relative shrink-0 w-full" data-name="Active indicator">
          <div className="absolute bottom-0 left-0 right-0 top-[-1px]" style={{ "--stroke-0": "rgba(186, 26, 26, 1)" } as React.CSSProperties}>
            <img alt="" className="block max-w-none size-full" src={imgActiveIndicator1} />
          </div>
        </div>
        {showSupportingText && (
          <div className="absolute bottom-[-20px] box-border content-stretch flex gap-[10px] h-[20px] items-start left-0 pb-0 pt-[4px] px-[16px] right-0" data-name="Supporting text">
            <p className="basis-0 font-['Manrope:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#ba1a1a] text-[12px] tracking-[0.4px]">{supportingText}</p>
          </div>
        )}
      </div>
    );
  }
  if (style === "Filled" && state === "Hovered" && textConfigurations === "Label text" && !leadingIcon && trailingIcon) {
    return (
      <button className={className} data-name="Style=Filled, State=Hovered, Text configurations=Label text, Leading icon=False, Trailing icon=True">
        <div className="basis-0 bg-[#e3e3d9] content-stretch flex flex-col gap-[10px] grow items-start min-h-px min-w-px relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="Text field">
          <div className="basis-0 bg-[rgba(26,28,22,0.08)] grow min-h-px min-w-px relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="State-layer">
            <div className="size-full">
              <div className="box-border content-stretch flex items-start pl-[16px] pr-0 py-[4px] relative size-full">
                <div className="basis-0 box-border content-stretch flex flex-col grow h-[48px] items-start justify-center min-h-px min-w-px px-0 py-[4px] relative shrink-0" data-name="Content">
                  <div className="content-stretch flex items-center relative shrink-0" data-name="Label text container">
                    <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#44483b] text-[16px] text-nowrap tracking-[0.5px] whitespace-pre">{labelText}</p>
                  </div>
                </div>
                <Trailingicon41 />
              </div>
            </div>
          </div>
        </div>
        <div className="h-0 relative shrink-0 w-full" data-name="Active indicator">
          <div className="absolute bottom-0 left-0 right-0 top-[-1px]" style={{ "--stroke-0": "rgba(26, 28, 22, 1)" } as React.CSSProperties}>
            <img alt="" className="block max-w-none size-full" src={imgActiveIndicator2} />
          </div>
        </div>
        {showSupportingText && (
          <div className="absolute bottom-[-20px] box-border content-stretch flex gap-[10px] h-[20px] items-start left-0 pb-0 pt-[4px] px-[16px] right-0" data-name="Supporting text">
            <p className="basis-0 font-['Manrope:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#44483b] text-[12px] tracking-[0.4px]">{supportingText}</p>
          </div>
        )}
      </button>
    );
  }
  if (style === "Filled" && state === "Focused" && textConfigurations === "Label text" && !leadingIcon && trailingIcon) {
    return (
      <div className={className} data-name="Style=Filled, State=Focused, Text configurations=Label text, Leading icon=False, Trailing icon=True">
        <div className="basis-0 bg-[#e3e3d9] content-stretch flex flex-col gap-[10px] grow items-start min-h-px min-w-px relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="Text field">
          <div className="basis-0 grow min-h-px min-w-px relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="State-layer">
            <div className="size-full">
              <div className="box-border content-stretch flex items-start pl-[16px] pr-0 py-[4px] relative size-full">
                <div className="basis-0 box-border content-stretch flex flex-col grow h-[48px] items-start justify-center min-h-px min-w-px px-0 py-[4px] relative shrink-0" data-name="Content">
                  <div className="content-stretch flex items-center relative shrink-0" data-name="Label text container">
                    <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#4a671e] text-[12px] text-nowrap tracking-[0.4px] whitespace-pre">{labelText}</p>
                  </div>
                  <div className="content-stretch flex h-[24px] items-center relative shrink-0" data-name="Input text container">
                    <div className="h-[16px] relative shrink-0 w-0" data-name="Caret">
                      <div className="absolute inset-[-3.13%_-0.5px]" style={{ "--stroke-0": "rgba(74, 103, 30, 1)" } as React.CSSProperties}>
                        <img alt="" className="block max-w-none size-full" src={imgCaret} />
                      </div>
                    </div>
                  </div>
                </div>
                <Trailingicon42 />
              </div>
            </div>
          </div>
        </div>
        <div className="h-0 relative shrink-0 w-full" data-name="Active indicator">
          <div className="absolute bottom-0 left-0 right-0 top-[-3px]" style={{ "--stroke-0": "rgba(74, 103, 30, 1)" } as React.CSSProperties}>
            <img alt="" className="block max-w-none size-full" src={imgActiveIndicator3} />
          </div>
        </div>
        {showSupportingText && (
          <div className="absolute bottom-[-20px] box-border content-stretch flex gap-[10px] h-[20px] items-start left-0 pb-0 pt-[4px] px-[16px] right-0" data-name="Supporting text">
            <p className="basis-0 font-['Manrope:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#44483b] text-[12px] tracking-[0.4px]">{supportingText}</p>
          </div>
        )}
      </div>
    );
  }
  if (style === "Filled" && state === "Enabled" && textConfigurations === "Label text" && !leadingIcon && trailingIcon) {
    return (
      <div className={className} data-name="Style=Filled, State=Enabled, Text configurations=Label text, Leading icon=False, Trailing icon=True">
        <div className="basis-0 bg-[#e3e3d9] content-stretch flex flex-col gap-[10px] grow items-start min-h-px min-w-px relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="Text field">
          <div className="basis-0 grow min-h-px min-w-px relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="State-layer">
            <div className="size-full">
              <div className="box-border content-stretch flex items-start pl-[16px] pr-0 py-[4px] relative size-full">
                <div className="basis-0 box-border content-stretch flex flex-col grow h-[48px] items-start justify-center min-h-px min-w-px px-0 py-[4px] relative shrink-0" data-name="Content">
                  <div className="content-stretch flex items-center relative shrink-0" data-name="Label text container">
                    <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#44483b] text-[16px] text-nowrap tracking-[0.5px] whitespace-pre">{labelText}</p>
                  </div>
                </div>
                <Trailingicon43 />
              </div>
            </div>
          </div>
        </div>
        <div className="h-0 relative shrink-0 w-full" data-name="Active indicator">
          <div className="absolute bottom-0 left-0 right-0 top-[-1px]" style={{ "--stroke-0": "rgba(68, 72, 59, 1)" } as React.CSSProperties}>
            <img alt="" className="block max-w-none size-full" src={imgActiveIndicator4} />
          </div>
        </div>
        {showSupportingText && (
          <div className="absolute bottom-[-20px] box-border content-stretch flex gap-[10px] h-[20px] items-start left-0 pb-0 pt-[4px] px-[16px] right-0" data-name="Supporting text">
            <p className="basis-0 font-['Manrope:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#44483b] text-[12px] tracking-[0.4px]">{supportingText}</p>
          </div>
        )}
      </div>
    );
  }
  if (style === "Filled" && state === "Disabled" && textConfigurations === "Input text" && !leadingIcon && trailingIcon) {
    return (
      <div className={className} data-name="Style=Filled, State=Disabled, Text configurations=Input text, Leading icon=False, Trailing icon=True">
        <div className="absolute bg-[#1a1c16] inset-0 opacity-[0.04] rounded-tl-[4px] rounded-tr-[4px]" data-name="disabled-state-color" />
        <div className="basis-0 content-stretch flex flex-col gap-[10px] grow items-start min-h-px min-w-px opacity-[0.38] relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="Text field">
          <div className="basis-0 grow min-h-px min-w-px relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="State-layer">
            <div className="size-full">
              <div className="box-border content-stretch flex items-start pl-[16px] pr-0 py-[4px] relative size-full">
                <div className="basis-0 box-border content-stretch flex flex-col grow h-[48px] items-start justify-center min-h-px min-w-px px-0 py-[4px] relative shrink-0" data-name="Content">
                  <div className="content-stretch flex items-center relative shrink-0" data-name="Label text container">
                    <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#1a1c16] text-[12px] text-nowrap tracking-[0.4px] whitespace-pre">{labelText}</p>
                  </div>
                  <div className="content-stretch flex items-center relative shrink-0" data-name="Input text container">
                    <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] text-nowrap tracking-[0.5px]">
                      <p className="leading-[24px] whitespace-pre">{inputText}</p>
                    </div>
                  </div>
                </div>
                <Trailingicon44 />
              </div>
            </div>
          </div>
        </div>
        <div className="h-0 relative shrink-0 w-full" data-name="Active indicator">
          <div className="absolute bottom-0 left-0 right-0 top-[-1px]" style={{ "--stroke-0": "rgba(26, 28, 22, 1)" } as React.CSSProperties}>
            <img alt="" className="block max-w-none size-full" src={imgActiveIndicator} />
          </div>
        </div>
        {showSupportingText && (
          <div className="absolute bottom-[-20px] box-border content-stretch flex gap-[10px] h-[20px] items-start left-0 opacity-[0.38] pb-0 pt-[4px] px-[16px] right-0" data-name="Supporting text">
            <p className="basis-0 font-['Manrope:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#1a1c16] text-[12px] tracking-[0.4px]">{supportingText}</p>
          </div>
        )}
      </div>
    );
  }
  if (style === "Filled" && state === "Error" && textConfigurations === "Input text" && !leadingIcon && trailingIcon) {
    return (
      <div className={className} data-name="Style=Filled, State=Error, Text configurations=Input text, Leading icon=False, Trailing icon=True">
        <div className="basis-0 bg-[#e3e3d9] content-stretch flex flex-col gap-[10px] grow items-start min-h-px min-w-px relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="Text field">
          <div className="basis-0 grow min-h-px min-w-px relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="State-layer">
            <div className="size-full">
              <div className="box-border content-stretch flex items-start pl-[16px] pr-0 py-[4px] relative size-full">
                <div className="basis-0 box-border content-stretch flex flex-col grow h-[48px] items-start justify-center min-h-px min-w-px px-0 py-[4px] relative shrink-0" data-name="Content">
                  <div className="content-stretch flex items-center relative shrink-0" data-name="Label text container">
                    <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#ba1a1a] text-[12px] text-nowrap tracking-[0.4px] whitespace-pre">{labelText}</p>
                  </div>
                  <div className="content-stretch flex items-center relative shrink-0" data-name="Input text container">
                    <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] text-nowrap tracking-[0.5px]">
                      <p className="leading-[24px] whitespace-pre">{inputText}</p>
                    </div>
                    <div className="h-[16px] relative shrink-0 w-0" data-name="Caret">
                      <div className="absolute inset-[-3.13%_-0.5px]" style={{ "--stroke-0": "rgba(186, 26, 26, 1)" } as React.CSSProperties}>
                        <img alt="" className="block max-w-none size-full" src={imgCaret1} />
                      </div>
                    </div>
                  </div>
                </div>
                <Trailingiconerror23 />
              </div>
            </div>
          </div>
        </div>
        <div className="h-0 relative shrink-0 w-full" data-name="Active indicator">
          <div className="absolute bottom-0 left-0 right-0 top-[-3px]" style={{ "--stroke-0": "rgba(186, 26, 26, 1)" } as React.CSSProperties}>
            <img alt="" className="block max-w-none size-full" src={imgActiveIndicator5} />
          </div>
        </div>
        {showSupportingText && (
          <div className="absolute bottom-[-20px] box-border content-stretch flex gap-[10px] h-[20px] items-start left-0 pb-0 pt-[4px] px-[16px] right-0" data-name="Supporting text">
            <p className="basis-0 font-['Manrope:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#ba1a1a] text-[12px] tracking-[0.4px]">{supportingText}</p>
          </div>
        )}
      </div>
    );
  }
  if (style === "Filled" && state === "Hovered" && textConfigurations === "Input text" && !leadingIcon && trailingIcon) {
    return (
      <button className={className} data-name="Style=Filled, State=Hovered, Text configurations=Input text, Leading icon=False, Trailing icon=True">
        <div className="basis-0 bg-[#e3e3d9] content-stretch flex flex-col gap-[10px] grow items-start min-h-px min-w-px relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="Text field">
          <div className="basis-0 bg-[rgba(26,28,22,0.08)] grow min-h-px min-w-px relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="State-layer">
            <div className="size-full">
              <div className="box-border content-stretch flex items-start pl-[16px] pr-0 py-[4px] relative size-full">
                <div className="basis-0 box-border content-stretch flex flex-col grow h-[48px] items-start justify-center min-h-px min-w-px px-0 py-[4px] relative shrink-0" data-name="Content">
                  <div className="content-stretch flex items-center relative shrink-0" data-name="Label text container">
                    <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#44483b] text-[12px] text-nowrap tracking-[0.4px] whitespace-pre">{labelText}</p>
                  </div>
                  <div className="content-stretch flex items-center relative shrink-0" data-name="Input text container">
                    <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] text-nowrap tracking-[0.5px]">
                      <p className="leading-[24px] whitespace-pre">{inputText}</p>
                    </div>
                  </div>
                </div>
                <Trailingicon45 />
              </div>
            </div>
          </div>
        </div>
        <div className="h-0 relative shrink-0 w-full" data-name="Active indicator">
          <div className="absolute bottom-0 left-0 right-0 top-[-1px]" style={{ "--stroke-0": "rgba(26, 28, 22, 1)" } as React.CSSProperties}>
            <img alt="" className="block max-w-none size-full" src={imgActiveIndicator2} />
          </div>
        </div>
        {showSupportingText && (
          <div className="absolute bottom-[-20px] box-border content-stretch flex gap-[10px] h-[20px] items-start left-0 pb-0 pt-[4px] px-[16px] right-0" data-name="Supporting text">
            <p className="basis-0 font-['Manrope:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#44483b] text-[12px] tracking-[0.4px]">{supportingText}</p>
          </div>
        )}
      </button>
    );
  }
  if (style === "Filled" && state === "Focused" && textConfigurations === "Input text" && !leadingIcon && trailingIcon) {
    return (
      <div className={className} data-name="Style=Filled, State=Focused, Text configurations=Input text, Leading icon=False, Trailing icon=True">
        <div className="basis-0 bg-[#e3e3d9] content-stretch flex flex-col gap-[10px] grow items-start min-h-px min-w-px relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="Text field">
          <div className="basis-0 grow min-h-px min-w-px relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="State-layer">
            <div className="size-full">
              <div className="box-border content-stretch flex items-start pl-[16px] pr-0 py-[4px] relative size-full">
                <div className="basis-0 box-border content-stretch flex flex-col grow h-[48px] items-start justify-center min-h-px min-w-px px-0 py-[4px] relative shrink-0" data-name="Content">
                  <div className="content-stretch flex items-center relative shrink-0" data-name="Label text container">
                    <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#4a671e] text-[12px] text-nowrap tracking-[0.4px] whitespace-pre">{labelText}</p>
                  </div>
                  <div className="content-stretch flex items-center relative shrink-0" data-name="Input text container">
                    <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] text-nowrap tracking-[0.5px]">
                      <p className="leading-[24px] whitespace-pre">{inputText}</p>
                    </div>
                    <div className="h-[16px] relative shrink-0 w-0" data-name="Caret">
                      <div className="absolute inset-[-3.13%_-0.5px]" style={{ "--stroke-0": "rgba(74, 103, 30, 1)" } as React.CSSProperties}>
                        <img alt="" className="block max-w-none size-full" src={imgCaret} />
                      </div>
                    </div>
                  </div>
                </div>
                <Trailingicon46 />
              </div>
            </div>
          </div>
        </div>
        <div className="h-0 relative shrink-0 w-full" data-name="Active indicator">
          <div className="absolute bottom-0 left-0 right-0 top-[-3px]" style={{ "--stroke-0": "rgba(74, 103, 30, 1)" } as React.CSSProperties}>
            <img alt="" className="block max-w-none size-full" src={imgActiveIndicator3} />
          </div>
        </div>
        {showSupportingText && (
          <div className="absolute bottom-[-20px] box-border content-stretch flex gap-[10px] h-[20px] items-start left-0 pb-0 pt-[4px] px-[16px] right-0" data-name="Supporting text">
            <p className="basis-0 font-['Manrope:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#44483b] text-[12px] tracking-[0.4px]">{supportingText}</p>
          </div>
        )}
      </div>
    );
  }
  return (
    <div className={className} data-name="Style=Filled, State=Enabled, Text configurations=Input text, Leading icon=False, Trailing icon=True">
      <div className="basis-0 bg-[#e3e3d9] content-stretch flex flex-col gap-[10px] grow items-start min-h-px min-w-px relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="Text field">
        <div className="basis-0 grow min-h-px min-w-px relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="State-layer">
          <div className="size-full">
            <div className="box-border content-stretch flex items-start pl-[16px] pr-0 py-[4px] relative size-full">
              <div className="basis-0 box-border content-stretch flex flex-col grow h-[48px] items-start justify-center min-h-px min-w-px px-0 py-[4px] relative shrink-0" data-name="Content">
                <div className="content-stretch flex items-center relative shrink-0" data-name="Label text container">
                  <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#44483b] text-[12px] text-nowrap tracking-[0.4px] whitespace-pre">{labelText}</p>
                </div>
                <div className="content-stretch flex items-center relative shrink-0" data-name="Input text container">
                  <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] text-nowrap tracking-[0.5px]">
                    <p className="leading-[24px] whitespace-pre">{inputText}</p>
                  </div>
                </div>
              </div>
              <Trailingicon47 />
            </div>
          </div>
        </div>
      </div>
      <div className="h-0 relative shrink-0 w-full" data-name="Active indicator">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]" style={{ "--stroke-0": "rgba(68, 72, 59, 1)" } as React.CSSProperties}>
          <img alt="" className="block max-w-none size-full" src={imgActiveIndicator4} />
        </div>
      </div>
      {showSupportingText && (
        <div className="absolute bottom-[-20px] box-border content-stretch flex gap-[10px] h-[20px] items-start left-0 pb-0 pt-[4px] px-[16px] right-0" data-name="Supporting text">
          <p className="basis-0 font-['Manrope:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#44483b] text-[12px] tracking-[0.4px]">{supportingText}</p>
        </div>
      )}
    </div>
  );
}

/**
 * @figmaAssetKey f3b168d044a24e8ab23f429f253f144ca82dd666
 */
function Add({ className }: { className?: string }) {
  return (
    <div className={className} data-name="add">
      <Add1 />
    </div>
  );
}
type ListItemInlineEditableProps = {
  className?: string;
  state?: "Empty" | "Edit" | "View";
};

/**
 * @figmaAssetKey b5d2b4655f79c5e111776c5f49f74447511f46d8
 */
/**
 * @figmaAssetKey 05c892727b191c5b4f59706caca7ab214ba3c4a3
 */
/**
 * @figmaAssetKey 21b31df5033ec22cd0e17de0ebf23478d8a91f95
 */
function ListItemInlineEditable({ className, state = "Empty" }: ListItemInlineEditableProps) {
  if (state === "Edit") {
    return (
      <div className={className} data-name="State=Edit">
        <TextField showSupportingText={false} supportingText="Påkrevd" style="Outlined" textConfigurations="Placeholder text" className="content-stretch flex flex-col h-[56px] items-start relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-[280px]" />
        <Iconbutton />
      </div>
    );
  }
  if (state === "View") {
    return (
      <div className={className} data-name="State=View">
        <ListitemInlineEditable />
      </div>
    );
  }
  return (
    <div className={className} data-name="State=Empty">
      <ListitemInlineEditable1 />
    </div>
  );
}

export default function ListItemInlineEditable1() {
  return <ListItemInlineEditable state="View" className="content-stretch flex flex-col items-center relative size-full" />;
}