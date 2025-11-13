import svgPaths from "./svg-c6v7q2s62a";
import { imgRipple, imgRipple1, imgIcon, imgIcon1, img, img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16, img17, img18, img19, imgDivider, imgIcon2, imgIcon3, img20, img21, img22, img23, img24, img25, img26, img27, imgDivider1, img28 } from "./svg-iihp6";

/**
 * @figmaAssetKey aeba83abcf31eaf6f1db76bf28ac41b246b50f00
 */
function Today({ className }: { className?: string }) {
  return (
    <div className={className} data-name="today">
      <div className="absolute inset-[8.33%_12.5%]" data-name="icon">
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(68, 72, 59, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 20">
            <path d={svgPaths.pcb4ca40} fill="var(--fill-0, #44483B)" id="icon" />
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
 * @figmaAssetKey 9b04d510931e79e821a4baa96f259176c46f56cf
 */
function ChatBubble({ className }: { className?: string }) {
  return (
    <div className={className} data-name="chat_bubble">
      <div className="absolute inset-[8.333%]" data-name="icon">
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(68, 72, 59, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <path d={svgPaths.p27b1b000} fill="var(--fill-0, #44483B)" id="icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}
type DeviationFollowUpStatusProps = {
  className?: string;
  property1?: "Deadline postpone request" | "Document sent" | "Waiting documentation" | "Waiting visit time" | "Sent visit time" | "Waiting for visit";
};

/**
 * @figmaAssetKey 2b41d557d96b25323c5b69b398ae231b34dd8599
 */
/**
 * @figmaAssetKey 98ec661cee7a1d759cba182d4cdfbff87727ef36
 */
/**
 * @figmaAssetKey 98ec661cee7a1d759cba182d4cdfbff87727ef36
 */
/**
 * @figmaAssetKey 98ec661cee7a1d759cba182d4cdfbff87727ef36
 */
/**
 * @figmaAssetKey 98ec661cee7a1d759cba182d4cdfbff87727ef36
 */
function DeviationFollowUpStatus({ className, property1 = "Document sent" }: DeviationFollowUpStatusProps) {
  const vector = (
    <div className="absolute inset-[12.5%_6.25%]" data-name="Vector">
      <div className="absolute inset-0" style={{ "--fill-0": "rgba(74, 103, 30, 1)" } as React.CSSProperties}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 14">
          <path d={svgPaths.p3b7ee600} fill="var(--fill-0, #4A671E)" id="Vector" />
        </svg>
      </div>
    </div>
  );
  if (property1 === "Waiting documentation") {
    return (
      <div className={className} data-name="Property 1=Waiting documentation">
        <Status />
      </div>
    );
  }
  if (property1 === "Sent visit time") {
    return (
      <div className={className} data-name="Property 1=Sent visit time">
        <DeviationFollowupStatus vector={vector} />
      </div>
    );
  }
  if (property1 === "Waiting for visit") {
    return (
      <div className={className} data-name="Property 1=Waiting for visit">
        <DeviationFollowupStatus1 vector={vector} />
      </div>
    );
  }
  if (property1 === "Deadline postpone request") {
    return (
      <div className={className} data-name="Property 1=Deadline postpone request">
        <Status1 vector={vector} />
      </div>
    );
  }
  if (property1 === "Waiting visit time") {
    return (
      <div className={className} data-name="Property 1=Waiting visit time">
        <Status2 />
      </div>
    );
  }
  return (
    <div className={className} data-name="Property 1=Document sent">
      <Status3 vector={vector} />
    </div>
  );
}

/**
 * @figmaAssetKey be656307c68051b08fb1b02a884d1a6a00daacee
 */
function ContactPhone({ className }: { className?: string }) {
  return (
    <div className={className} data-name="contact_phone">
      <Contact_phone />
    </div>
  );
}
type BuildingBlocksPrimaryTabsLabelOnlyProps = {
  className?: string;
  labelText?: string;
  showBadge?: boolean;
  selected?: boolean;
  state?: "Enabled" | "Hovered" | "Focused" | "Pressed";
};

/**
 * @figmaAssetKey 868be50856ae259a68b53dd36e11de6f39303632
 */
function BuildingBlocksPrimaryTabsLabelOnly({ className, labelText = "Tab", showBadge = false, selected = false, state = "Enabled" }: BuildingBlocksPrimaryTabsLabelOnlyProps) {
  if (selected && state === "Pressed") {
    return (
      <div className={className} data-name="Selected=True, State=Pressed">
        <div className="basis-0 bg-[rgba(77,102,43,0.08)] grow min-h-px min-w-px relative shrink-0 w-full" data-name="State-layer">
          <div className="flex flex-col items-center justify-end overflow-clip rounded-[inherit] size-full">
            <div className="box-border content-stretch flex flex-col items-center justify-end px-[16px] py-0 relative size-full">
              <div className="absolute inset-[-75%_-33.33%_-75%_33.33%]" data-name="Ripple">
                <img alt="" className="block max-w-none size-full" src={imgRipple} />
              </div>
              <div className="basis-0 box-border content-stretch flex gap-[4px] grow items-center justify-center min-h-px min-w-px overflow-clip px-0 py-[14px] relative shrink-0" data-name="Tab Contents">
                <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#4a671e] text-[14px] text-center text-nowrap tracking-[0.1px]">
                  <p className="leading-[20px] whitespace-pre">{labelText}</p>
                </div>
                <div className="absolute bottom-0 h-[14px] left-0 right-0" data-name="Indicator">
                  <div className="absolute bg-[#4a671e] bottom-0 h-[3px] left-[2px] right-[2px] rounded-tl-[100px] rounded-tr-[100px]" data-name="Shape" />
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
        <div className="basis-0 bg-[rgba(77,102,43,0.12)] grow min-h-px min-w-px relative shrink-0 w-full" data-name="State-layer">
          <div className="flex flex-col items-center justify-end overflow-clip rounded-[inherit] size-full">
            <div className="box-border content-stretch flex flex-col items-center justify-end px-[16px] py-0 relative size-full">
              <div className="basis-0 box-border content-stretch flex gap-[4px] grow items-center justify-center min-h-px min-w-px overflow-clip px-0 py-[14px] relative shrink-0" data-name="Tab Contents">
                <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#4a671e] text-[14px] text-center text-nowrap tracking-[0.1px]">
                  <p className="leading-[20px] whitespace-pre">{labelText}</p>
                </div>
                <div className="absolute bottom-0 h-[14px] left-0 right-0" data-name="Indicator">
                  <div className="absolute bg-[#4a671e] bottom-0 h-[3px] left-[2px] right-[2px] rounded-tl-[100px] rounded-tr-[100px]" data-name="Shape" />
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
  if (selected && state === "Hovered") {
    return (
      <div className={className} data-name="Selected=True, State=Hovered">
        <div className="basis-0 bg-[rgba(77,102,43,0.08)] grow min-h-px min-w-px relative shrink-0 w-full" data-name="State-layer">
          <div className="flex flex-col items-center justify-end overflow-clip rounded-[inherit] size-full">
            <div className="box-border content-stretch flex flex-col items-center justify-end px-[16px] py-0 relative size-full">
              <div className="basis-0 box-border content-stretch flex gap-[4px] grow items-center justify-center min-h-px min-w-px overflow-clip px-0 py-[14px] relative shrink-0" data-name="Tab Contents">
                <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#4a671e] text-[14px] text-center text-nowrap tracking-[0.1px]">
                  <p className="leading-[20px] whitespace-pre">{labelText}</p>
                </div>
                <div className="absolute bottom-0 h-[14px] left-0 right-0" data-name="Indicator">
                  <div className="absolute bg-[#4a671e] bottom-0 h-[3px] left-[2px] right-[2px] rounded-tl-[100px] rounded-tr-[100px]" data-name="Shape" />
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
  if (selected && state === "Enabled") {
    return (
      <div className={className} data-name="Selected=True, State=Enabled">
        <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="State-layer">
          <div className="flex flex-col items-center justify-end overflow-clip rounded-[inherit] size-full">
            <div className="box-border content-stretch flex flex-col items-center justify-end px-[16px] py-0 relative size-full">
              <div className="basis-0 box-border content-stretch flex gap-[4px] grow items-center justify-center min-h-px min-w-px overflow-clip px-0 py-[14px] relative shrink-0" data-name="Tab Contents">
                <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#4a671e] text-[14px] text-center text-nowrap tracking-[0.1px]">
                  <p className="leading-[20px] whitespace-pre">{labelText}</p>
                </div>
                <div className="absolute bottom-0 h-[14px] left-0 right-0" data-name="Indicator">
                  <div className="absolute bg-[#4a671e] bottom-0 h-[3px] left-[2px] right-[2px] rounded-tl-[100px] rounded-tr-[100px]" data-name="Shape" />
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
  if (!selected && state === "Pressed") {
    return (
      <div className={className} data-name="Selected=False, State=Pressed">
        <div className="basis-0 bg-[rgba(26,28,22,0.08)] grow min-h-px min-w-px relative shrink-0 w-full" data-name="State-layer">
          <div className="flex flex-col items-center justify-end overflow-clip rounded-[inherit] size-full">
            <div className="box-border content-stretch flex flex-col items-center justify-end px-[16px] py-0 relative size-full">
              <div className="absolute inset-[-75%_-33.33%_-75%_33.33%]" data-name="Ripple">
                <div className="absolute inset-0" style={{ "--fill-0": "rgba(26, 28, 22, 1)" } as React.CSSProperties}>
                  <img alt="" className="block max-w-none size-full" src={imgRipple1} />
                </div>
              </div>
              <div className="basis-0 box-border content-stretch flex gap-[4px] grow items-center justify-center min-h-px min-w-px overflow-clip px-0 py-[14px] relative shrink-0" data-name="Tab Contents">
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
          <div className="flex flex-col items-center justify-end overflow-clip rounded-[inherit] size-full">
            <div className="box-border content-stretch flex flex-col items-center justify-end px-[16px] py-0 relative size-full">
              <div className="basis-0 box-border content-stretch flex gap-[4px] grow items-center justify-center min-h-px min-w-px overflow-clip px-0 py-[14px] relative shrink-0" data-name="Tab Contents">
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
          <div className="flex flex-col items-center justify-end overflow-clip rounded-[inherit] size-full">
            <div className="box-border content-stretch flex flex-col items-center justify-end px-[16px] py-0 relative size-full">
              <div className="basis-0 box-border content-stretch flex gap-[4px] grow items-center justify-center min-h-px min-w-px overflow-clip px-0 py-[14px] relative shrink-0" data-name="Tab Contents">
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
        <div className="flex flex-col items-center justify-end overflow-clip rounded-[inherit] size-full">
          <div className="box-border content-stretch flex flex-col items-center justify-end px-[16px] py-0 relative size-full">
            <div className="basis-0 box-border content-stretch flex gap-[4px] grow items-center justify-center min-h-px min-w-px overflow-clip px-0 py-[14px] relative shrink-0" data-name="Tab Contents">
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
 * @figmaAssetKey 317868a3ae71888c8becb3dfa8ef7a76950f8e08
 */
function Stars({ className }: { className?: string }) {
  return (
    <div className={className} data-name="stars">
      <div className="absolute inset-[8.333%]" data-name="icon">
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(26, 28, 22, 1)" } as React.CSSProperties}>
          <img alt="" className="block max-w-none size-full" src={imgIcon} />
        </div>
      </div>
    </div>
  );
}
type TabsProps = {
  className?: string;
  type?: "Fixed" | "Scrollable";
  style?: "Primary" | "Secondary";
  configuration?: "Icon only" | "Label & icon" | "Label only";
};

/**
 * @figmaAssetKey b016f6a510eebef46377ecdc66da6f98ff296421
 */
function Tabs({ className, type = "Fixed", style = "Primary", configuration = "Label only" }: TabsProps) {
  const divider = (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Divider">
      <div className="h-0 relative shrink-0 w-full" data-name="Divider">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]" style={{ "--stroke-0": "rgba(227, 227, 217, 1)" } as React.CSSProperties}>
          <img alt="" className="block max-w-none size-full" src={imgIcon1} />
        </div>
      </div>
    </div>
  );
  if (type === "Fixed" && style === "Secondary" && configuration === "Label & icon") {
    return (
      <div className={className} data-name="Type=Fixed, Style=Secondary, Configuration=Label & icon">
        <div className="content-stretch cursor-pointer flex items-start relative shrink-0 w-full" data-name="Tab group">
          <Tab1 />
          <Tab2 />
          <Tab3 />
        </div>
        {divider}
      </div>
    );
  }
  if (type === "Scrollable" && style === "Secondary" && configuration === "Label & icon") {
    return (
      <div className={className} data-name="Type=Scrollable, Style=Secondary, Configuration=Label & icon">
        <div className="relative shrink-0 w-full" data-name="Tab group">
          <div className="size-full">
            <div className="box-border content-stretch cursor-pointer flex items-start pl-[52px] pr-0 py-0 relative w-full">
              <Tab4 />
              <Tab5 />
              <Tab6 />
              <Tab7 />
            </div>
          </div>
        </div>
        {divider}
      </div>
    );
  }
  if (type === "Fixed" && style === "Secondary" && configuration === "Label only") {
    return (
      <div className={className} data-name="Type=Fixed, Style=Secondary, Configuration=Label only">
        <div className="content-stretch cursor-pointer flex items-start relative shrink-0 w-full" data-name="Tab group">
          <Tab8 />
          <Tab9 />
          <Tab10 />
        </div>
        {divider}
      </div>
    );
  }
  if (type === "Scrollable" && style === "Secondary" && configuration === "Label only") {
    return (
      <div className={className} data-name="Type=Scrollable, Style=Secondary, Configuration=Label only">
        <div className="relative shrink-0 w-full" data-name="Tab group">
          <div className="size-full">
            <div className="box-border content-stretch cursor-pointer flex items-start pl-[52px] pr-0 py-0 relative w-full">
              <Tab11 />
              <Tab12 />
              <Tab13 />
              <Tab14 />
            </div>
          </div>
        </div>
        {divider}
      </div>
    );
  }
  if (type === "Fixed" && style === "Primary" && configuration === "Icon only") {
    return (
      <div className={className} data-name="Type=Fixed, Style=Primary, Configuration=Icon only">
        <div className="content-stretch cursor-pointer flex items-start relative shrink-0 w-full" data-name="Tab group">
          <Tab15 />
          <Tab16 />
          <Tab17 />
        </div>
        {divider}
      </div>
    );
  }
  if (type === "Scrollable" && style === "Primary" && configuration === "Icon only") {
    return (
      <div className={className} data-name="Type=Scrollable, Style=Primary, Configuration=Icon only">
        <div className="relative shrink-0 w-full" data-name="Tab group">
          <div className="size-full">
            <div className="box-border content-stretch cursor-pointer flex items-start pl-[52px] pr-0 py-0 relative w-full">
              <Tab18 />
              <Tab19 />
              <Tab20 />
              <Tab21 />
            </div>
          </div>
        </div>
        {divider}
      </div>
    );
  }
  if (type === "Fixed" && style === "Primary" && configuration === "Label & icon") {
    return (
      <div className={className} data-name="Type=Fixed, Style=Primary, Configuration=Label & icon">
        <div className="content-stretch cursor-pointer flex items-start relative shrink-0 w-full" data-name="Tab group">
          <Tab22 />
          <Tab23 />
          <Tab24 />
        </div>
        {divider}
      </div>
    );
  }
  if (type === "Scrollable" && style === "Primary" && configuration === "Label & icon") {
    return (
      <div className={className} data-name="Type=Scrollable, Style=Primary, Configuration=Label & icon">
        <div className="relative shrink-0 w-full" data-name="Tab group">
          <div className="size-full">
            <div className="box-border content-stretch cursor-pointer flex items-start pl-[52px] pr-0 py-0 relative w-full">
              <Tab25 />
              <Tab26 />
              <Tab27 />
              <Tab28 />
            </div>
          </div>
        </div>
        {divider}
      </div>
    );
  }
  if (type === "Scrollable" && style === "Primary" && configuration === "Label only") {
    return (
      <div className={className} data-name="Type=Scrollable, Style=Primary, Configuration=Label only">
        <div className="relative shrink-0 w-full" data-name="Tab group">
          <div className="size-full">
            <div className="box-border content-stretch cursor-pointer flex items-start pl-[52px] pr-0 py-0 relative w-full">
              <Tab29 />
              <Tab30 />
              <Tab31 />
              <Tab32 />
            </div>
          </div>
        </div>
        {divider}
      </div>
    );
  }
  return (
    <div className={className} data-name="Type=Fixed, Style=Primary, Configuration=Label only">
      <div className="content-stretch cursor-pointer flex items-start relative shrink-0 w-full" data-name="Tab group">
        <BuildingBlocksPrimaryTabsLabelOnly labelText="Video" selected={true} className="basis-0 bg-white content-stretch flex flex-col grow h-[48px] items-center justify-end min-h-px min-w-px overflow-clip relative shrink-0" />
        <Tab33 />
        <Tab34 />
      </div>
      {divider}
    </div>
  );
}
type ButtonProps = {
  className?: string;
  type?: "Round" | "Square";
  size?: "XSmall" | "Small" | "Medium" | "Large" | "XLarge";
  style?: "Filled" | "Tonal" | "Outline" | "Elevated" | "Text";
};

/**
 * @figmaAssetKey 1ea2b6cdb096becefc7fa612795d9048fa798efc
 */
function Button({ className, type = "Round", size = "XSmall", style = "Filled" }: ButtonProps) {
  if (type === "Square" && size === "XLarge" && style === "Elevated") {
    return (
      <div className={className} data-name="Type=Square, Size=XLarge, Style=Elevated">
        <Content />
      </div>
    );
  }
  if (type === "Square" && size === "Large" && style === "Elevated") {
    return (
      <div className={className} data-name="Type=Square, Size=Large, Style=Elevated">
        <Content1 />
      </div>
    );
  }
  if (type === "Square" && size === "Medium" && style === "Elevated") {
    return (
      <div className={className} data-name="Type=Square, Size=Medium, Style=Elevated">
        <Content2 />
      </div>
    );
  }
  if (type === "Square" && size === "Small" && style === "Elevated") {
    return (
      <div className={className} data-name="Type=Square, Size=Small, Style=Elevated">
        <Content3 />
      </div>
    );
  }
  if (type === "Square" && size === "XSmall" && style === "Elevated") {
    return (
      <div className={className} data-name="Type=Square, Size=XSmall, Style=Elevated">
        <Content13 />
      </div>
    );
  }
  if (type === "Round" && size === "XLarge" && style === "Elevated") {
    return (
      <div className={className} data-name="Type=Round, Size=XLarge, Style=Elevated">
        <Content19 />
      </div>
    );
  }
  if (type === "Round" && size === "Large" && style === "Elevated") {
    return (
      <div className={className} data-name="Type=Round, Size=Large, Style=Elevated">
        <Content20 />
      </div>
    );
  }
  if (type === "Round" && size === "Medium" && style === "Elevated") {
    return (
      <div className={className} data-name="Type=Round, Size=Medium, Style=Elevated">
        <Content21 />
      </div>
    );
  }
  if (type === "Round" && size === "Small" && style === "Elevated") {
    return (
      <div className={className} data-name="Type=Round, Size=Small, Style=Elevated">
        <Content22 />
      </div>
    );
  }
  if (type === "Round" && size === "XSmall" && style === "Elevated") {
    return (
      <div className={className} data-name="Type=Round, Size=XSmall, Style=Elevated">
        <Content23 />
      </div>
    );
  }
  if (type === "Square" && size === "XLarge" && style === "Text") {
    return (
      <div className={className} data-name="Type=Square, Size=XLarge, Style=Text">
        <Content24 />
      </div>
    );
  }
  if (type === "Square" && size === "Large" && style === "Text") {
    return (
      <div className={className} data-name="Type=Square, Size=Large, Style=Text">
        <Content25 />
      </div>
    );
  }
  if (type === "Square" && size === "Medium" && style === "Text") {
    return (
      <div className={className} data-name="Type=Square, Size=Medium, Style=Text">
        <Content26 />
      </div>
    );
  }
  if (type === "Square" && size === "Small" && style === "Text") {
    return (
      <div className={className} data-name="Type=Square, Size=Small, Style=Text">
        <Content27 />
      </div>
    );
  }
  if (type === "Square" && size === "XSmall" && style === "Text") {
    return (
      <div className={className} data-name="Type=Square, Size=XSmall, Style=Text">
        <Content28 />
      </div>
    );
  }
  if (type === "Round" && size === "XLarge" && style === "Text") {
    return (
      <div className={className} data-name="Type=Round, Size=XLarge, Style=Text">
        <Content29 />
      </div>
    );
  }
  if (type === "Round" && size === "Large" && style === "Text") {
    return (
      <div className={className} data-name="Type=Round, Size=Large, Style=Text">
        <Content30 />
      </div>
    );
  }
  if (type === "Round" && size === "Medium" && style === "Text") {
    return (
      <div className={className} data-name="Type=Round, Size=Medium, Style=Text">
        <Content31 />
      </div>
    );
  }
  if (type === "Round" && size === "Small" && style === "Text") {
    return (
      <div className={className} data-name="Type=Round, Size=Small, Style=Text">
        <Content32 />
      </div>
    );
  }
  if (type === "Round" && size === "XSmall" && style === "Text") {
    return (
      <div className={className} data-name="Type=Round, Size=XSmall, Style=Text">
        <Content33 />
      </div>
    );
  }
  if (type === "Square" && size === "XLarge" && style === "Outline") {
    return (
      <div className={className} data-name="Type=Square, Size=XLarge, Style=Outline">
        <Content34 />
      </div>
    );
  }
  if (type === "Square" && size === "Large" && style === "Outline") {
    return (
      <div className={className} data-name="Type=Square, Size=Large, Style=Outline">
        <Content35 />
      </div>
    );
  }
  if (type === "Square" && size === "Medium" && style === "Outline") {
    return (
      <div className={className} data-name="Type=Square, Size=Medium, Style=Outline">
        <Content36 />
      </div>
    );
  }
  if (type === "Square" && size === "Small" && style === "Outline") {
    return (
      <div className={className} data-name="Type=Square, Size=Small, Style=Outline">
        <Content37 />
      </div>
    );
  }
  if (type === "Square" && size === "XSmall" && style === "Outline") {
    return (
      <div className={className} data-name="Type=Square, Size=XSmall, Style=Outline">
        <Content38 />
      </div>
    );
  }
  if (type === "Round" && size === "XLarge" && style === "Outline") {
    return (
      <div className={className} data-name="Type=Round, Size=XLarge, Style=Outline">
        <Content39 />
      </div>
    );
  }
  if (type === "Round" && size === "Large" && style === "Outline") {
    return (
      <div className={className} data-name="Type=Round, Size=Large, Style=Outline">
        <Content40 />
      </div>
    );
  }
  if (type === "Round" && size === "Medium" && style === "Outline") {
    return (
      <div className={className} data-name="Type=Round, Size=Medium, Style=Outline">
        <Content41 />
      </div>
    );
  }
  if (type === "Round" && size === "Small" && style === "Outline") {
    return (
      <div className={className} data-name="Type=Round, Size=Small, Style=Outline">
        <Content42 />
      </div>
    );
  }
  if (type === "Round" && size === "XSmall" && style === "Outline") {
    return (
      <div className={className} data-name="Type=Round, Size=XSmall, Style=Outline">
        <Content43 />
      </div>
    );
  }
  if (type === "Square" && size === "XLarge" && style === "Tonal") {
    return (
      <div className={className} data-name="Type=Square, Size=XLarge, Style=Tonal">
        <Content44 />
      </div>
    );
  }
  if (type === "Square" && size === "Large" && style === "Tonal") {
    return (
      <div className={className} data-name="Type=Square, Size=Large, Style=Tonal">
        <Content45 />
      </div>
    );
  }
  if (type === "Square" && size === "Medium" && style === "Tonal") {
    return (
      <div className={className} data-name="Type=Square, Size=Medium, Style=Tonal">
        <Content46 />
      </div>
    );
  }
  if (type === "Square" && size === "Small" && style === "Tonal") {
    return (
      <div className={className} data-name="Type=Square, Size=Small, Style=Tonal">
        <Content47 />
      </div>
    );
  }
  if (type === "Square" && size === "XSmall" && style === "Tonal") {
    return (
      <div className={className} data-name="Type=Square, Size=XSmall, Style=Tonal">
        <Content48 />
      </div>
    );
  }
  if (type === "Round" && size === "XLarge" && style === "Tonal") {
    return (
      <div className={className} data-name="Type=Round, Size=XLarge, Style=Tonal">
        <Content49 />
      </div>
    );
  }
  if (type === "Round" && size === "Large" && style === "Tonal") {
    return (
      <div className={className} data-name="Type=Round, Size=Large, Style=Tonal">
        <Content50 />
      </div>
    );
  }
  if (type === "Round" && size === "Medium" && style === "Tonal") {
    return (
      <div className={className} data-name="Type=Round, Size=Medium, Style=Tonal">
        <Content51 />
      </div>
    );
  }
  if (type === "Round" && size === "Small" && style === "Tonal") {
    return (
      <div className={className} data-name="Type=Round, Size=Small, Style=Tonal">
        <Content52 />
      </div>
    );
  }
  if (type === "Round" && size === "XSmall" && style === "Tonal") {
    return (
      <div className={className} data-name="Type=Round, Size=XSmall, Style=Tonal">
        <Content53 />
      </div>
    );
  }
  if (type === "Square" && size === "XLarge" && style === "Filled") {
    return (
      <div className={className} data-name="Type=Square, Size=XLarge, Style=Filled">
        <Content54 />
      </div>
    );
  }
  if (type === "Square" && size === "Large" && style === "Filled") {
    return (
      <div className={className} data-name="Type=Square, Size=Large, Style=Filled">
        <Content55 />
      </div>
    );
  }
  if (type === "Square" && size === "Medium" && style === "Filled") {
    return (
      <div className={className} data-name="Type=Square, Size=Medium, Style=Filled">
        <Content56 />
      </div>
    );
  }
  if (type === "Square" && size === "Small" && style === "Filled") {
    return (
      <div className={className} data-name="Type=Square, Size=Small, Style=Filled">
        <Content57 />
      </div>
    );
  }
  if (type === "Square" && size === "XSmall" && style === "Filled") {
    return (
      <div className={className} data-name="Type=Square, Size=XSmall, Style=Filled">
        <Content58 />
      </div>
    );
  }
  if (type === "Round" && size === "XLarge" && style === "Filled") {
    return (
      <div className={className} data-name="Type=Round, Size=XLarge, Style=Filled">
        <Content59 />
      </div>
    );
  }
  if (type === "Round" && size === "Large" && style === "Filled") {
    return (
      <div className={className} data-name="Type=Round, Size=Large, Style=Filled">
        <Content60 />
      </div>
    );
  }
  if (type === "Round" && size === "Medium" && style === "Filled") {
    return (
      <div className={className} data-name="Type=Round, Size=Medium, Style=Filled">
        <Content61 />
      </div>
    );
  }
  if (type === "Round" && size === "Small" && style === "Filled") {
    return (
      <div className={className} data-name="Type=Round, Size=Small, Style=Filled">
        <Content62 />
      </div>
    );
  }
  return (
    <div className={className} data-name="Type=Round, Size=XSmall, Style=Filled">
      <Content63 />
    </div>
  );
}
type IconButtonProps = {
  className?: string;
  type?: "Round" | "Square";
  size?: "XSmall" | "Small" | "Medium" | "Large" | "XLarge";
  style?: "Filled" | "Tonal" | "Outline" | "Standard";
  width?: "Narrow" | "Default" | "Wide";
};

/**
 * @figmaAssetKey 1f20ddad4c7d6d3c649da515a64198e13789f350
 */
function IconButton({ className, type = "Round", size = "XSmall", style = "Filled", width = "Narrow" }: IconButtonProps) {
  if (type === "Square" && size === "XLarge" && style === "Standard" && width === "Wide") {
    return (
      <div className={className} data-name="Type=Square, Size=XLarge, Style=Standard, Width=Wide">
        <Content64 />
      </div>
    );
  }
  if (type === "Square" && size === "XLarge" && style === "Standard" && width === "Default") {
    return (
      <div className={className} data-name="Type=Square, Size=XLarge, Style=Standard, Width=Default">
        <Content65 />
      </div>
    );
  }
  if (type === "Square" && size === "XLarge" && style === "Standard" && width === "Narrow") {
    return (
      <div className={className} data-name="Type=Square, Size=XLarge, Style=Standard, Width=Narrow">
        <Content66 />
      </div>
    );
  }
  if (type === "Square" && size === "Large" && style === "Standard" && width === "Wide") {
    return (
      <div className={className} data-name="Type=Square, Size=Large, Style=Standard, Width=Wide">
        <Content67 />
      </div>
    );
  }
  if (type === "Square" && size === "Large" && style === "Standard" && width === "Default") {
    return (
      <div className={className} data-name="Type=Square, Size=Large, Style=Standard, Width=Default">
        <Content68 />
      </div>
    );
  }
  if (type === "Square" && size === "Large" && style === "Standard" && width === "Narrow") {
    return (
      <div className={className} data-name="Type=Square, Size=Large, Style=Standard, Width=Narrow">
        <Content69 />
      </div>
    );
  }
  if (type === "Square" && size === "Medium" && style === "Standard" && width === "Wide") {
    return (
      <div className={className} data-name="Type=Square, Size=Medium, Style=Standard, Width=Wide">
        <Content70 />
      </div>
    );
  }
  if (type === "Square" && size === "Medium" && style === "Standard" && width === "Default") {
    return (
      <div className={className} data-name="Type=Square, Size=Medium, Style=Standard, Width=Default">
        <Content71 />
      </div>
    );
  }
  if (type === "Square" && size === "Medium" && style === "Standard" && width === "Narrow") {
    return (
      <div className={className} data-name="Type=Square, Size=Medium, Style=Standard, Width=Narrow">
        <Content72 />
      </div>
    );
  }
  if (type === "Square" && size === "Small" && style === "Standard" && width === "Wide") {
    return (
      <div className={className} data-name="Type=Square, Size=Small, Style=Standard, Width=Wide">
        <Content73 />
      </div>
    );
  }
  if (type === "Square" && size === "Small" && style === "Standard" && width === "Default") {
    return (
      <div className={className} data-name="Type=Square, Size=Small, Style=Standard, Width=Default">
        <Content74 />
      </div>
    );
  }
  if (type === "Square" && size === "Small" && style === "Standard" && width === "Narrow") {
    return (
      <div className={className} data-name="Type=Square, Size=Small, Style=Standard, Width=Narrow">
        <Content75 />
      </div>
    );
  }
  if (type === "Square" && size === "XSmall" && style === "Standard" && width === "Wide") {
    return (
      <div className={className} data-name="Type=Square, Size=XSmall, Style=Standard, Width=Wide">
        <Content76 />
      </div>
    );
  }
  if (type === "Square" && size === "XSmall" && style === "Standard" && width === "Default") {
    return (
      <div className={className} data-name="Type=Square, Size=XSmall, Style=Standard, Width=Default">
        <Content77 />
      </div>
    );
  }
  if (type === "Square" && size === "XSmall" && style === "Standard" && width === "Narrow") {
    return (
      <div className={className} data-name="Type=Square, Size=XSmall, Style=Standard, Width=Narrow">
        <Content78 />
      </div>
    );
  }
  if (type === "Round" && size === "XLarge" && style === "Standard" && width === "Wide") {
    return (
      <div className={className} data-name="Type=Round, Size=XLarge, Style=Standard, Width=Wide">
        <Content79 />
      </div>
    );
  }
  if (type === "Round" && size === "XLarge" && style === "Standard" && width === "Default") {
    return (
      <div className={className} data-name="Type=Round, Size=XLarge, Style=Standard, Width=Default">
        <Content80 />
      </div>
    );
  }
  if (type === "Round" && size === "XLarge" && style === "Standard" && width === "Narrow") {
    return (
      <div className={className} data-name="Type=Round, Size=XLarge, Style=Standard, Width=Narrow">
        <Content81 />
      </div>
    );
  }
  if (type === "Round" && size === "Large" && style === "Standard" && width === "Wide") {
    return (
      <div className={className} data-name="Type=Round, Size=Large, Style=Standard, Width=Wide">
        <Content82 />
      </div>
    );
  }
  if (type === "Round" && size === "Large" && style === "Standard" && width === "Default") {
    return (
      <div className={className} data-name="Type=Round, Size=Large, Style=Standard, Width=Default">
        <Content83 />
      </div>
    );
  }
  if (type === "Round" && size === "Large" && style === "Standard" && width === "Narrow") {
    return (
      <div className={className} data-name="Type=Round, Size=Large, Style=Standard, Width=Narrow">
        <Content84 />
      </div>
    );
  }
  if (type === "Round" && size === "Medium" && style === "Standard" && width === "Wide") {
    return (
      <div className={className} data-name="Type=Round, Size=Medium, Style=Standard, Width=Wide">
        <Content85 />
      </div>
    );
  }
  if (type === "Round" && size === "Medium" && style === "Standard" && width === "Default") {
    return (
      <div className={className} data-name="Type=Round, Size=Medium, Style=Standard, Width=Default">
        <Content86 />
      </div>
    );
  }
  if (type === "Round" && size === "Medium" && style === "Standard" && width === "Narrow") {
    return (
      <div className={className} data-name="Type=Round, Size=Medium, Style=Standard, Width=Narrow">
        <Content87 />
      </div>
    );
  }
  if (type === "Round" && size === "Small" && style === "Standard" && width === "Wide") {
    return (
      <div className={className} data-name="Type=Round, Size=Small, Style=Standard, Width=Wide">
        <Content88 />
      </div>
    );
  }
  if (type === "Round" && size === "Small" && style === "Standard" && width === "Default") {
    return (
      <div className={className} data-name="Type=Round, Size=Small, Style=Standard, Width=Default">
        <Content89 />
      </div>
    );
  }
  if (type === "Round" && size === "Small" && style === "Standard" && width === "Narrow") {
    return (
      <div className={className} data-name="Type=Round, Size=Small, Style=Standard, Width=Narrow">
        <Content90 />
      </div>
    );
  }
  if (type === "Round" && size === "XSmall" && style === "Standard" && width === "Wide") {
    return (
      <div className={className} data-name="Type=Round, Size=XSmall, Style=Standard, Width=Wide">
        <Content91 />
      </div>
    );
  }
  if (type === "Round" && size === "XSmall" && style === "Standard" && width === "Default") {
    return (
      <div className={className} data-name="Type=Round, Size=XSmall, Style=Standard, Width=Default">
        <Content92 />
      </div>
    );
  }
  if (type === "Round" && size === "XSmall" && style === "Standard" && width === "Narrow") {
    return (
      <div className={className} data-name="Type=Round, Size=XSmall, Style=Standard, Width=Narrow">
        <Content93 />
      </div>
    );
  }
  if (type === "Square" && size === "XLarge" && style === "Outline" && width === "Wide") {
    return (
      <div className={className} data-name="Type=Square, Size=XLarge, Style=Outline, Width=Wide">
        <Content94 />
      </div>
    );
  }
  if (type === "Square" && size === "XLarge" && style === "Outline" && width === "Default") {
    return (
      <div className={className} data-name="Type=Square, Size=XLarge, Style=Outline, Width=Default">
        <Content95 />
      </div>
    );
  }
  if (type === "Square" && size === "XLarge" && style === "Outline" && width === "Narrow") {
    return (
      <div className={className} data-name="Type=Square, Size=XLarge, Style=Outline, Width=Narrow">
        <Content96 />
      </div>
    );
  }
  if (type === "Square" && size === "Large" && style === "Outline" && width === "Wide") {
    return (
      <div className={className} data-name="Type=Square, Size=Large, Style=Outline, Width=Wide">
        <Content97 />
      </div>
    );
  }
  if (type === "Square" && size === "Large" && style === "Outline" && width === "Default") {
    return (
      <div className={className} data-name="Type=Square, Size=Large, Style=Outline, Width=Default">
        <Content98 />
      </div>
    );
  }
  if (type === "Square" && size === "Large" && style === "Outline" && width === "Narrow") {
    return (
      <div className={className} data-name="Type=Square, Size=Large, Style=Outline, Width=Narrow">
        <Content99 />
      </div>
    );
  }
  if (type === "Square" && size === "Medium" && style === "Outline" && width === "Wide") {
    return (
      <div className={className} data-name="Type=Square, Size=Medium, Style=Outline, Width=Wide">
        <Content100 />
      </div>
    );
  }
  if (type === "Square" && size === "Medium" && style === "Outline" && width === "Default") {
    return (
      <div className={className} data-name="Type=Square, Size=Medium, Style=Outline, Width=Default">
        <Content101 />
      </div>
    );
  }
  if (type === "Square" && size === "Medium" && style === "Outline" && width === "Narrow") {
    return (
      <div className={className} data-name="Type=Square, Size=Medium, Style=Outline, Width=Narrow">
        <Content102 />
      </div>
    );
  }
  if (type === "Square" && size === "Small" && style === "Outline" && width === "Wide") {
    return (
      <div className={className} data-name="Type=Square, Size=Small, Style=Outline, Width=Wide">
        <Content103 />
      </div>
    );
  }
  if (type === "Square" && size === "Small" && style === "Outline" && width === "Default") {
    return (
      <div className={className} data-name="Type=Square, Size=Small, Style=Outline, Width=Default">
        <Content104 />
      </div>
    );
  }
  if (type === "Square" && size === "Small" && style === "Outline" && width === "Narrow") {
    return (
      <div className={className} data-name="Type=Square, Size=Small, Style=Outline, Width=Narrow">
        <Content105 />
      </div>
    );
  }
  if (type === "Square" && size === "XSmall" && style === "Outline" && width === "Wide") {
    return (
      <div className={className} data-name="Type=Square, Size=XSmall, Style=Outline, Width=Wide">
        <Content106 />
      </div>
    );
  }
  if (type === "Square" && size === "XSmall" && style === "Outline" && width === "Default") {
    return (
      <div className={className} data-name="Type=Square, Size=XSmall, Style=Outline, Width=Default">
        <Content107 />
      </div>
    );
  }
  if (type === "Square" && size === "XSmall" && style === "Outline" && width === "Narrow") {
    return (
      <div className={className} data-name="Type=Square, Size=XSmall, Style=Outline, Width=Narrow">
        <Content108 />
      </div>
    );
  }
  if (type === "Round" && size === "XLarge" && style === "Outline" && width === "Wide") {
    return (
      <div className={className} data-name="Type=Round, Size=XLarge, Style=Outline, Width=Wide">
        <Content109 />
      </div>
    );
  }
  if (type === "Round" && size === "XLarge" && style === "Outline" && width === "Default") {
    return (
      <div className={className} data-name="Type=Round, Size=XLarge, Style=Outline, Width=Default">
        <Content110 />
      </div>
    );
  }
  if (type === "Round" && size === "XLarge" && style === "Outline" && width === "Narrow") {
    return (
      <div className={className} data-name="Type=Round, Size=XLarge, Style=Outline, Width=Narrow">
        <Content111 />
      </div>
    );
  }
  if (type === "Round" && size === "Large" && style === "Outline" && width === "Wide") {
    return (
      <div className={className} data-name="Type=Round, Size=Large, Style=Outline, Width=Wide">
        <Content112 />
      </div>
    );
  }
  if (type === "Round" && size === "Large" && style === "Outline" && width === "Default") {
    return (
      <div className={className} data-name="Type=Round, Size=Large, Style=Outline, Width=Default">
        <Content113 />
      </div>
    );
  }
  if (type === "Round" && size === "Large" && style === "Outline" && width === "Narrow") {
    return (
      <div className={className} data-name="Type=Round, Size=Large, Style=Outline, Width=Narrow">
        <Content114 />
      </div>
    );
  }
  if (type === "Round" && size === "Medium" && style === "Outline" && width === "Wide") {
    return (
      <div className={className} data-name="Type=Round, Size=Medium, Style=Outline, Width=Wide">
        <Content115 />
      </div>
    );
  }
  if (type === "Round" && size === "Medium" && style === "Outline" && width === "Default") {
    return (
      <div className={className} data-name="Type=Round, Size=Medium, Style=Outline, Width=Default">
        <Content116 />
      </div>
    );
  }
  if (type === "Round" && size === "Medium" && style === "Outline" && width === "Narrow") {
    return (
      <div className={className} data-name="Type=Round, Size=Medium, Style=Outline, Width=Narrow">
        <Content117 />
      </div>
    );
  }
  if (type === "Round" && size === "Small" && style === "Outline" && width === "Wide") {
    return (
      <div className={className} data-name="Type=Round, Size=Small, Style=Outline, Width=Wide">
        <Content118 />
      </div>
    );
  }
  if (type === "Round" && size === "Small" && style === "Outline" && width === "Default") {
    return (
      <div className={className} data-name="Type=Round, Size=Small, Style=Outline, Width=Default">
        <Content119 />
      </div>
    );
  }
  if (type === "Round" && size === "Small" && style === "Outline" && width === "Narrow") {
    return (
      <div className={className} data-name="Type=Round, Size=Small, Style=Outline, Width=Narrow">
        <Content120 />
      </div>
    );
  }
  if (type === "Round" && size === "XSmall" && style === "Outline" && width === "Wide") {
    return (
      <div className={className} data-name="Type=Round, Size=XSmall, Style=Outline, Width=Wide">
        <Content121 />
      </div>
    );
  }
  if (type === "Round" && size === "XSmall" && style === "Outline" && width === "Default") {
    return (
      <div className={className} data-name="Type=Round, Size=XSmall, Style=Outline, Width=Default">
        <Content122 />
      </div>
    );
  }
  if (type === "Round" && size === "XSmall" && style === "Outline" && width === "Narrow") {
    return (
      <div className={className} data-name="Type=Round, Size=XSmall, Style=Outline, Width=Narrow">
        <Content123 />
      </div>
    );
  }
  if (type === "Square" && size === "XLarge" && style === "Tonal" && width === "Wide") {
    return (
      <div className={className} data-name="Type=Square, Size=XLarge, Style=Tonal, Width=Wide">
        <Content124 />
      </div>
    );
  }
  if (type === "Square" && size === "XLarge" && style === "Tonal" && width === "Default") {
    return (
      <div className={className} data-name="Type=Square, Size=XLarge, Style=Tonal, Width=Default">
        <Content125 />
      </div>
    );
  }
  if (type === "Square" && size === "XLarge" && style === "Tonal" && width === "Narrow") {
    return (
      <div className={className} data-name="Type=Square, Size=XLarge, Style=Tonal, Width=Narrow">
        <Content126 />
      </div>
    );
  }
  if (type === "Square" && size === "Large" && style === "Tonal" && width === "Wide") {
    return (
      <div className={className} data-name="Type=Square, Size=Large, Style=Tonal, Width=Wide">
        <Content127 />
      </div>
    );
  }
  if (type === "Square" && size === "Large" && style === "Tonal" && width === "Default") {
    return (
      <div className={className} data-name="Type=Square, Size=Large, Style=Tonal, Width=Default">
        <Content128 />
      </div>
    );
  }
  if (type === "Square" && size === "Large" && style === "Tonal" && width === "Narrow") {
    return (
      <div className={className} data-name="Type=Square, Size=Large, Style=Tonal, Width=Narrow">
        <Content129 />
      </div>
    );
  }
  if (type === "Square" && size === "Medium" && style === "Tonal" && width === "Wide") {
    return (
      <div className={className} data-name="Type=Square, Size=Medium, Style=Tonal, Width=Wide">
        <Content130 />
      </div>
    );
  }
  if (type === "Square" && size === "Medium" && style === "Tonal" && width === "Default") {
    return (
      <div className={className} data-name="Type=Square, Size=Medium, Style=Tonal, Width=Default">
        <Content131 />
      </div>
    );
  }
  if (type === "Square" && size === "Medium" && style === "Tonal" && width === "Narrow") {
    return (
      <div className={className} data-name="Type=Square, Size=Medium, Style=Tonal, Width=Narrow">
        <Content132 />
      </div>
    );
  }
  if (type === "Square" && size === "Small" && style === "Tonal" && width === "Wide") {
    return (
      <div className={className} data-name="Type=Square, Size=Small, Style=Tonal, Width=Wide">
        <Content133 />
      </div>
    );
  }
  if (type === "Square" && size === "Small" && style === "Tonal" && width === "Default") {
    return (
      <div className={className} data-name="Type=Square, Size=Small, Style=Tonal, Width=Default">
        <Content134 />
      </div>
    );
  }
  if (type === "Square" && size === "Small" && style === "Tonal" && width === "Narrow") {
    return (
      <div className={className} data-name="Type=Square, Size=Small, Style=Tonal, Width=Narrow">
        <Content135 />
      </div>
    );
  }
  if (type === "Square" && size === "XSmall" && style === "Tonal" && width === "Wide") {
    return (
      <div className={className} data-name="Type=Square, Size=XSmall, Style=Tonal, Width=Wide">
        <Content136 />
      </div>
    );
  }
  if (type === "Square" && size === "XSmall" && style === "Tonal" && width === "Default") {
    return (
      <div className={className} data-name="Type=Square, Size=XSmall, Style=Tonal, Width=Default">
        <Content137 />
      </div>
    );
  }
  if (type === "Square" && size === "XSmall" && style === "Tonal" && width === "Narrow") {
    return (
      <div className={className} data-name="Type=Square, Size=XSmall, Style=Tonal, Width=Narrow">
        <Content138 />
      </div>
    );
  }
  if (type === "Round" && size === "XLarge" && style === "Tonal" && width === "Wide") {
    return (
      <div className={className} data-name="Type=Round, Size=XLarge, Style=Tonal, Width=Wide">
        <Content139 />
      </div>
    );
  }
  if (type === "Round" && size === "XLarge" && style === "Tonal" && width === "Default") {
    return (
      <div className={className} data-name="Type=Round, Size=XLarge, Style=Tonal, Width=Default">
        <Content140 />
      </div>
    );
  }
  if (type === "Round" && size === "XLarge" && style === "Tonal" && width === "Narrow") {
    return (
      <div className={className} data-name="Type=Round, Size=XLarge, Style=Tonal, Width=Narrow">
        <Content141 />
      </div>
    );
  }
  if (type === "Round" && size === "Large" && style === "Tonal" && width === "Wide") {
    return (
      <div className={className} data-name="Type=Round, Size=Large, Style=Tonal, Width=Wide">
        <Content142 />
      </div>
    );
  }
  if (type === "Round" && size === "Large" && style === "Tonal" && width === "Default") {
    return (
      <div className={className} data-name="Type=Round, Size=Large, Style=Tonal, Width=Default">
        <Content143 />
      </div>
    );
  }
  if (type === "Round" && size === "Large" && style === "Tonal" && width === "Narrow") {
    return (
      <div className={className} data-name="Type=Round, Size=Large, Style=Tonal, Width=Narrow">
        <Content144 />
      </div>
    );
  }
  if (type === "Round" && size === "Medium" && style === "Tonal" && width === "Wide") {
    return (
      <div className={className} data-name="Type=Round, Size=Medium, Style=Tonal, Width=Wide">
        <Content145 />
      </div>
    );
  }
  if (type === "Round" && size === "Medium" && style === "Tonal" && width === "Default") {
    return (
      <div className={className} data-name="Type=Round, Size=Medium, Style=Tonal, Width=Default">
        <Content146 />
      </div>
    );
  }
  if (type === "Round" && size === "Medium" && style === "Tonal" && width === "Narrow") {
    return (
      <div className={className} data-name="Type=Round, Size=Medium, Style=Tonal, Width=Narrow">
        <Content147 />
      </div>
    );
  }
  if (type === "Round" && size === "Small" && style === "Tonal" && width === "Wide") {
    return (
      <div className={className} data-name="Type=Round, Size=Small, Style=Tonal, Width=Wide">
        <Content148 />
      </div>
    );
  }
  if (type === "Round" && size === "Small" && style === "Tonal" && width === "Default") {
    return (
      <div className={className} data-name="Type=Round, Size=Small, Style=Tonal, Width=Default">
        <Content149 />
      </div>
    );
  }
  if (type === "Round" && size === "Small" && style === "Tonal" && width === "Narrow") {
    return (
      <div className={className} data-name="Type=Round, Size=Small, Style=Tonal, Width=Narrow">
        <Content150 />
      </div>
    );
  }
  if (type === "Round" && size === "XSmall" && style === "Tonal" && width === "Wide") {
    return (
      <div className={className} data-name="Type=Round, Size=XSmall, Style=Tonal, Width=Wide">
        <Content151 />
      </div>
    );
  }
  if (type === "Round" && size === "XSmall" && style === "Tonal" && width === "Default") {
    return (
      <div className={className} data-name="Type=Round, Size=XSmall, Style=Tonal, Width=Default">
        <Content152 />
      </div>
    );
  }
  if (type === "Round" && size === "XSmall" && style === "Tonal" && width === "Narrow") {
    return (
      <div className={className} data-name="Type=Round, Size=XSmall, Style=Tonal, Width=Narrow">
        <Content153 />
      </div>
    );
  }
  if (type === "Square" && size === "XLarge" && style === "Filled" && width === "Wide") {
    return (
      <div className={className} data-name="Type=Square, Size=XLarge, Style=Filled, Width=Wide">
        <Content154 />
      </div>
    );
  }
  if (type === "Square" && size === "XLarge" && style === "Filled" && width === "Default") {
    return (
      <div className={className} data-name="Type=Square, Size=XLarge, Style=Filled, Width=Default">
        <Content155 />
      </div>
    );
  }
  if (type === "Square" && size === "XLarge" && style === "Filled" && width === "Narrow") {
    return (
      <div className={className} data-name="Type=Square, Size=XLarge, Style=Filled, Width=Narrow">
        <Content156 />
      </div>
    );
  }
  if (type === "Square" && size === "Large" && style === "Filled" && width === "Wide") {
    return (
      <div className={className} data-name="Type=Square, Size=Large, Style=Filled, Width=Wide">
        <Content157 />
      </div>
    );
  }
  if (type === "Square" && size === "Large" && style === "Filled" && width === "Default") {
    return (
      <div className={className} data-name="Type=Square, Size=Large, Style=Filled, Width=Default">
        <Content158 />
      </div>
    );
  }
  if (type === "Square" && size === "Large" && style === "Filled" && width === "Narrow") {
    return (
      <div className={className} data-name="Type=Square, Size=Large, Style=Filled, Width=Narrow">
        <Content159 />
      </div>
    );
  }
  if (type === "Square" && size === "Medium" && style === "Filled" && width === "Wide") {
    return (
      <div className={className} data-name="Type=Square, Size=Medium, Style=Filled, Width=Wide">
        <Content160 />
      </div>
    );
  }
  if (type === "Square" && size === "Medium" && style === "Filled" && width === "Default") {
    return (
      <div className={className} data-name="Type=Square, Size=Medium, Style=Filled, Width=Default">
        <Content161 />
      </div>
    );
  }
  if (type === "Square" && size === "Medium" && style === "Filled" && width === "Narrow") {
    return (
      <div className={className} data-name="Type=Square, Size=Medium, Style=Filled, Width=Narrow">
        <Content162 />
      </div>
    );
  }
  if (type === "Square" && size === "Small" && style === "Filled" && width === "Wide") {
    return (
      <div className={className} data-name="Type=Square, Size=Small, Style=Filled, Width=Wide">
        <Content163 />
      </div>
    );
  }
  if (type === "Square" && size === "Small" && style === "Filled" && width === "Default") {
    return (
      <div className={className} data-name="Type=Square, Size=Small, Style=Filled, Width=Default">
        <Content164 />
      </div>
    );
  }
  if (type === "Square" && size === "Small" && style === "Filled" && width === "Narrow") {
    return (
      <div className={className} data-name="Type=Square, Size=Small, Style=Filled, Width=Narrow">
        <Content165 />
      </div>
    );
  }
  if (type === "Square" && size === "XSmall" && style === "Filled" && width === "Wide") {
    return (
      <div className={className} data-name="Type=Square, Size=XSmall, Style=Filled, Width=Wide">
        <Content166 />
      </div>
    );
  }
  if (type === "Square" && size === "XSmall" && style === "Filled" && width === "Default") {
    return (
      <div className={className} data-name="Type=Square, Size=XSmall, Style=Filled, Width=Default">
        <Content167 />
      </div>
    );
  }
  if (type === "Square" && size === "XSmall" && style === "Filled" && width === "Narrow") {
    return (
      <div className={className} data-name="Type=Square, Size=XSmall, Style=Filled, Width=Narrow">
        <Content168 />
      </div>
    );
  }
  if (type === "Round" && size === "XLarge" && style === "Filled" && width === "Wide") {
    return (
      <div className={className} data-name="Type=Round, Size=XLarge, Style=Filled, Width=Wide">
        <Content169 />
      </div>
    );
  }
  if (type === "Round" && size === "XLarge" && style === "Filled" && width === "Default") {
    return (
      <div className={className} data-name="Type=Round, Size=XLarge, Style=Filled, Width=Default">
        <Content170 />
      </div>
    );
  }
  if (type === "Round" && size === "XLarge" && style === "Filled" && width === "Narrow") {
    return (
      <div className={className} data-name="Type=Round, Size=XLarge, Style=Filled, Width=Narrow">
        <Content171 />
      </div>
    );
  }
  if (type === "Round" && size === "Large" && style === "Filled" && width === "Wide") {
    return (
      <div className={className} data-name="Type=Round, Size=Large, Style=Filled, Width=Wide">
        <Content172 />
      </div>
    );
  }
  if (type === "Round" && size === "Large" && style === "Filled" && width === "Default") {
    return (
      <div className={className} data-name="Type=Round, Size=Large, Style=Filled, Width=Default">
        <Content173 />
      </div>
    );
  }
  if (type === "Round" && size === "Large" && style === "Filled" && width === "Narrow") {
    return (
      <div className={className} data-name="Type=Round, Size=Large, Style=Filled, Width=Narrow">
        <Content174 />
      </div>
    );
  }
  if (type === "Round" && size === "Medium" && style === "Filled" && width === "Wide") {
    return (
      <div className={className} data-name="Type=Round, Size=Medium, Style=Filled, Width=Wide">
        <Content175 />
      </div>
    );
  }
  if (type === "Round" && size === "Medium" && style === "Filled" && width === "Default") {
    return (
      <div className={className} data-name="Type=Round, Size=Medium, Style=Filled, Width=Default">
        <Content176 />
      </div>
    );
  }
  if (type === "Round" && size === "Medium" && style === "Filled" && width === "Narrow") {
    return (
      <div className={className} data-name="Type=Round, Size=Medium, Style=Filled, Width=Narrow">
        <Content177 />
      </div>
    );
  }
  if (type === "Round" && size === "Small" && style === "Filled" && width === "Wide") {
    return (
      <div className={className} data-name="Type=Round, Size=Small, Style=Filled, Width=Wide">
        <Content178 />
      </div>
    );
  }
  if (type === "Round" && size === "Small" && style === "Filled" && width === "Default") {
    return (
      <div className={className} data-name="Type=Round, Size=Small, Style=Filled, Width=Default">
        <Content179 />
      </div>
    );
  }
  if (type === "Round" && size === "Small" && style === "Filled" && width === "Narrow") {
    return (
      <div className={className} data-name="Type=Round, Size=Small, Style=Filled, Width=Narrow">
        <Content180 />
      </div>
    );
  }
  if (type === "Round" && size === "XSmall" && style === "Filled" && width === "Wide") {
    return (
      <div className={className} data-name="Type=Round, Size=XSmall, Style=Filled, Width=Wide">
        <Content181 />
      </div>
    );
  }
  if (type === "Round" && size === "XSmall" && style === "Filled" && width === "Default") {
    return (
      <div className={className} data-name="Type=Round, Size=XSmall, Style=Filled, Width=Default">
        <Content182 />
      </div>
    );
  }
  return (
    <div className={className} data-name="Type=Round, Size=XSmall, Style=Filled, Width=Narrow">
      <Content183 />
    </div>
  );
}

/**
 * @figmaAssetKey 66a5d7eb170df6d708f732dfb7c4a4b250768596
 */
function AssignmentInd({ className }: { className?: string }) {
  return (
    <div className={className} data-name="assignment_ind">
      <Assignment_ind />
    </div>
  );
}

/**
 * @figmaAssetKey 6091f906a932fe8795721b93af69a7034dd70e64
 */
function PendingActions({ className }: { className?: string }) {
  return (
    <div className={className} data-name="pending_actions">
      <Pending_actions />
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
 * @figmaAssetKey 46169eb7b051436b0d42f9e970c28845bd308a9e
 */
function RadioButtonUnchecked({ className }: { className?: string }) {
  return (
    <div className={className} data-name="radio_button_unchecked">
      <div className="absolute inset-[8.333%]" data-name="icon">
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(26, 28, 22, 1)" } as React.CSSProperties}>
          <img alt="" className="block max-w-none size-full" src={imgIcon2} />
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
          <img alt="" className="block max-w-none size-full" src={imgIcon3} />
        </div>
      </div>
    </div>
  );
}
type DeviationGradesProps = {
  className?: string;
  state?: "High" | "Low" | "Medium" | "Selection";
  type?: "Report" | "Revision";
};

/**
 * @figmaAssetKey 559b37c434253d1ebc3b67aa076b70fe337f49e5
 */
/**
 * @figmaAssetKey d991ef7d8ad5b328f190d12c551d340ab07595c6
 */
/**
 * @figmaAssetKey 58e830085fc44429965c9a0524129414c30c3400
 */
/**
 * @figmaAssetKey d991ef7d8ad5b328f190d12c551d340ab07595c6
 */
/**
 * @figmaAssetKey 58e830085fc44429965c9a0524129414c30c3400
 */
/**
 * @figmaAssetKey d991ef7d8ad5b328f190d12c551d340ab07595c6
 */
/**
 * @figmaAssetKey 58e830085fc44429965c9a0524129414c30c3400
 */
function DeviationGrades({ className, state = "Selection", type = "Revision" }: DeviationGradesProps) {
  const element = <BuildingBlocksStateLayer1Enabled1 className="absolute inset-0" />;
  if (state === "High" && type === "Revision") {
    return (
      <button className={className} data-name="State=High, Type=Revision">
        <ListitemListItem4Density element={element} />
      </button>
    );
  }
  if (state === "High" && type === "Report") {
    return (
      <button className={className} data-name="State=High, Type=Report">
        <ListitemListItem4Density1 element={element} />
      </button>
    );
  }
  if (state === "Low" && type === "Revision") {
    return (
      <button className={className} data-name="State=Low, Type=Revision">
        <ListitemListItem4Density2 element={element} />
      </button>
    );
  }
  if (state === "Low" && type === "Report") {
    return (
      <button className={className} data-name="State=Low, Type=Report">
        <ListitemListItem4Density3 element={element} />
      </button>
    );
  }
  if (state === "Medium" && type === "Revision") {
    return (
      <button className={className} data-name="State=Medium, Type=Revision">
        <ListitemListItem4Density4 element={element} />
      </button>
    );
  }
  if (state === "Medium" && type === "Report") {
    return (
      <button className={className} data-name="State=Medium, Type=Report">
        <ListitemListItem4Density5 element={element} />
      </button>
    );
  }
  return (
    <div className={className} data-name="State=Selection, Type=Revision">
      <ListitemListItem4Density6 element={element} />
      <ListitemListItem4Density7 />
      <ListitemListItem4Density8 />
    </div>
  );
}

/**
 * @figmaAssetKey f66b7a751bec0913de630f8455131404a270a648
 */
function OpenInNew({ className }: { className?: string }) {
  return (
    <div className={className} data-name="open_in_new">
      <Open_in_new />
    </div>
  );
}

/**
 * @figmaAssetKey 3f0f4d4c17cf97c07e8b44879d6d3f50b42baf08
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

/**
 * @figmaAssetKey 5004ca034d63c632a82a29c3de9688ebf4303eaa
 */
function ReportProblem({ className }: { className?: string }) {
  return (
    <div className={className} data-name="report_problem">
      <Report_problem3 />
    </div>
  );
}

function TabContents() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center justify-center min-h-px min-w-px relative shrink-0" data-name="Tab Contents">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[14px] text-center text-nowrap tracking-[0.1px]">
        <p className="leading-[20px] whitespace-pre">Ekstern revisjon</p>
      </div>
    </div>
  );
}

function StateLayer() {
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
        <p className="leading-[20px] whitespace-pre">Egenrevisjon</p>
      </div>
    </div>
  );
}

function StateLayer1() {
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
        <p className="leading-[20px] whitespace-pre">Forbedringspunkter</p>
      </div>
    </div>
  );
}

function StateLayer2() {
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
        <p className="leading-[20px] whitespace-pre">Positive observasjoner</p>
      </div>
    </div>
  );
}

function StateLayer3() {
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

function TabGroup() {
  return (
    <div className="relative shrink-0 w-full" data-name="Tab group">
      <div className="size-full">
        <div className="box-border content-stretch cursor-pointer flex items-start pl-[52px] pr-0 py-0 relative w-full">
          <Tab35 />
          <Tab36 />
          <Tab37 />
          <Tab38 />
        </div>
      </div>
    </div>
  );
}

function StateLayer4() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center px-[16px] py-[8px] size-full" />
      </div>
    </div>
  );
}

function StateLayer5() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center px-[16px] py-[8px] size-full" />
      </div>
    </div>
  );
}

function StateLayer6() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center px-[16px] py-[8px] size-full" />
      </div>
    </div>
  );
}

function StateLayer7() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center px-[16px] py-[8px] size-full" />
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] min-w-full overflow-ellipsis overflow-hidden relative shrink-0 text-[#1a1c16] text-[14px] text-nowrap tracking-[0.1px] w-[min-content]">
        <p className="[white-space-collapse:collapse] leading-[20px] overflow-ellipsis overflow-hidden">Tidligere avvik</p>
      </div>
    </div>
  );
}

function StateLayer8() {
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

function StateLayer9() {
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
function LeadingElement() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Leading element">
      <DeviationGradingchip />
    </div>
  );
}

function StateLayer10() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative size-full">
          <LeadingElement />
        </div>
      </div>
    </div>
  );
}

function StateLayer11() {
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
function LeadingElement1() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Leading element">
      <DeviationGradingchip1 />
    </div>
  );
}

function StateLayer12() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative size-full">
          <LeadingElement1 />
        </div>
      </div>
    </div>
  );
}

function StateLayer13() {
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
function LeadingElement2() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Leading element">
      <DeviationGradingchip2 />
    </div>
  );
}

function StateLayer14() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative size-full">
          <LeadingElement2 />
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
function TableColumn() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[144px]" data-name="Table Column">
      <Chipcells />
      <Chipcells1 />
      <Chipcells2 />
      <Chipcells3 />
    </div>
  );
}

function Content1() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] overflow-ellipsis overflow-hidden relative shrink-0 text-[#1a1c16] text-[14px] text-nowrap tracking-[0.1px] w-full">
        <p className="[white-space-collapse:collapse] leading-[20px] overflow-ellipsis overflow-hidden">Sjekklistepunkt</p>
      </div>
    </div>
  );
}

function StateLayer15() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center justify-center px-[16px] py-[8px] relative size-full">
          <Content1 />
        </div>
      </div>
    </div>
  );
}

function Content2() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full relative shrink-0 text-[#174295] text-[14px] tracking-[0.25px] w-[min-content]">
        <p className="leading-[20px]">1.1.1 - Har du oversikt over alle driftsmidler du har kjøpt, og alle produkter du har solgt?</p>
      </div>
    </div>
  );
}

function StateLayer16() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative size-full">
          <Content2 />
        </div>
      </div>
    </div>
  );
}

function Content3() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full relative shrink-0 text-[#1a1c16] text-[14px] tracking-[0.25px] w-[min-content]">
        <p className="leading-[20px]">1.1.2 - Noterer du gjødselmengdene som brukes?</p>
      </div>
    </div>
  );
}

function StateLayer17() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative size-full">
          <Content3 />
        </div>
      </div>
    </div>
  );
}

function Content4() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full relative shrink-0 text-[#1a1c16] text-[14px] tracking-[0.25px] w-[min-content]">
        <p className="leading-[20px]">1.3.2 - Har du spredt husdyrgjødsla i perioden fra 15. februar til 1. november og kun på snø- og frostfri mark?</p>
      </div>
    </div>
  );
}

function StateLayer18() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative size-full">
          <Content4 />
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
function TableColumn1() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="Table Column">
      <Chipcells4 />
      <Chipcells5 />
      <Chipcells6 />
      <Chipcells7 />
    </div>
  );
}

function Content5() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] overflow-ellipsis overflow-hidden relative shrink-0 text-[#1a1c16] text-[14px] text-nowrap tracking-[0.1px] w-full">
        <p className="[white-space-collapse:collapse] leading-[20px] overflow-ellipsis overflow-hidden">Status</p>
      </div>
    </div>
  );
}

function StateLayer19() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center justify-center px-[16px] py-[8px] relative size-full">
          <Content5 />
        </div>
      </div>
    </div>
  );
}

function Content6() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full relative shrink-0 text-[#174295] text-[14px] tracking-[0.25px] w-[min-content]">
        <p className="leading-[20px]">Åpent</p>
      </div>
    </div>
  );
}

function StateLayer20() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative size-full">
          <Content6 />
        </div>
      </div>
    </div>
  );
}

function Content7() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full overflow-ellipsis overflow-hidden relative shrink-0 text-[#1a1c16] text-[14px] text-nowrap tracking-[0.25px] w-[min-content]">
        <p className="[white-space-collapse:collapse] leading-[20px] overflow-ellipsis overflow-hidden">lukket</p>
      </div>
    </div>
  );
}

function StateLayer21() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative size-full">
          <Content7 />
        </div>
      </div>
    </div>
  );
}

function Content8() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full overflow-ellipsis overflow-hidden relative shrink-0 text-[#1a1c16] text-[14px] text-nowrap tracking-[0.25px] w-[min-content]">
        <p className="[white-space-collapse:collapse] leading-[20px] overflow-ellipsis overflow-hidden">lukket</p>
      </div>
    </div>
  );
}

function StateLayer22() {
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
function Table() {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0" data-name="Table">
      <TableColumn2 />
      <TableColumn />
      <TableColumn1 />
      <TableColumn3 />
    </div>
  );
}

function StateLayer23() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center p-[8px] relative shrink-0" data-name="state-layer">
      <OpenInNew className="relative shrink-0 size-[24px]" />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center overflow-clip relative rounded-[100px] shrink-0" data-name="container">
      <StateLayer23 />
    </div>
  );
}

function TrailingIcon() {
  return (
    <div className="content-stretch flex h-[48px] items-center justify-end relative shrink-0" data-name="trailing-icon">
      <Trailingicon2 />
    </div>
  );
}

function Frame() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0">
      <div className="flex flex-col font-['Quatro:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1a1c16] text-[22px] text-nowrap">
        <p className="leading-[28px] whitespace-pre">
          <span className="font-['Quatro:Regular',sans-serif] not-italic">1.</span>1<span className="font-['Quatro:Regular',sans-serif] not-italic">.</span>4
        </p>
      </div>
      <TrailingIcon />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <Frame />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full">
      <Frame1 />
      <div className="flex flex-col font-['Quatro:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1a1c16] text-[22px] w-full">
        <p className="leading-[28px]">Har du oversikt over alle driftsmidler du har kjøpt, og alle produkter du har solgt?</p>
      </div>
    </div>
  );
}

function ChecklistQuestion() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Checklist question">
      <Frame3 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-x-clip overflow-y-auto relative shrink-0 w-full">
      <ChecklistQuestion />
      <DeviationGrades state="High" type="Report" className="box-border content-stretch cursor-pointer flex flex-col gap-[8px] items-start overflow-visible p-0 relative shrink-0 w-full" />
    </div>
  );
}

function Content9() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start justify-center leading-[0] min-h-px min-w-px overflow-clip relative shrink-0 tracking-[0.5px]" data-name="Content">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[#44483b] text-[12px] w-full">
        <p className="leading-[16px]">Mangel</p>
      </div>
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#1a1c16] text-[16px] w-full">
        <p className="leading-[24px]">Ingen dokumentasjon fremvist for truckkontroll.</p>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[16px] items-start p-[8px] relative w-full">
          <Content9 />
          <IconButton style="Standard" className="content-stretch flex items-center justify-center relative shrink-0 size-[48px]" />
        </div>
      </div>
    </div>
  );
}

function LeadingElement3() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Leading element">
      <PendingActions className="relative shrink-0 size-[24px]" />
    </div>
  );
}

function Content10() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start justify-center leading-[0] min-h-px min-w-px overflow-clip relative shrink-0 tracking-[0.5px]" data-name="Content">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[#44483b] text-[12px] w-full">
        <p className="leading-[16px]">Tidsfrist for lukking av avvik</p>
      </div>
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#1a1c16] text-[16px] w-full">
        <p className="leading-[24px]">4. mars 2026 (anbefalt)</p>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[16px] items-start p-[8px] relative w-full">
          <LeadingElement3 />
          <Content10 />
          <IconButton style="Standard" className="content-stretch flex items-center justify-center relative shrink-0 size-[48px]" />
        </div>
      </div>
    </div>
  );
}

function LeadingElement4() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Leading element">
      <AssignmentInd className="relative shrink-0 size-[24px]" />
    </div>
  );
}

function Content11() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start justify-center leading-[0] min-h-px min-w-px overflow-clip relative shrink-0 tracking-[0.5px]" data-name="Content">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[#44483b] text-[12px] w-full">
        <p className="leading-[16px]">Ansvarlig for lukking:</p>
      </div>
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#1a1c16] text-[16px] w-full">
        <p className="leading-[24px]">Tellef Lima Eidland</p>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[16px] items-start p-[8px] relative w-full">
          <LeadingElement4 />
          <Content11 />
          <IconButton style="Standard" className="content-stretch flex items-center justify-center relative shrink-0 size-[48px]" />
        </div>
      </div>
    </div>
  );
}

function ClosingConfirmationMethode() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-center px-0 py-[8px] relative shrink-0" data-name="Closing confirmation methode">
      <ContactPhone className="relative shrink-0 size-[24px]" />
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] text-nowrap tracking-[0.15px]">
        <p className="leading-[24px] whitespace-pre">{`Lukking krever digitalt besøk `}</p>
      </div>
    </div>
  );
}

function LeadingElement5() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Leading element">
      <ChatBubble className="relative shrink-0 size-[24px]" />
    </div>
  );
}

function Content12() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start justify-center leading-[0] min-h-px min-w-px overflow-clip relative shrink-0 tracking-[0.5px]" data-name="Content">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[#44483b] text-[12px] w-full">
        <p className="leading-[16px]">Kommentar</p>
      </div>
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#1a1c16] text-[16px] w-full">
        <p className="leading-[24px]">Ring meg på telefon først, og vi fortsetter dialogen på Messenger.</p>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[16px] items-start p-[8px] relative w-full">
          <LeadingElement5 />
          <Content12 />
        </div>
      </div>
    </div>
  );
}

function LeadingElement6() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Leading element">
      <Today className="relative shrink-0 size-[24px]" />
    </div>
  );
}

function Content13() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center leading-[0] min-h-px min-w-px overflow-clip relative shrink-0 text-[#44483b] tracking-[0.5px]" data-name="Content">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[12px] w-full">
        <p className="leading-[16px]">Forslag til digitalt besøk</p>
      </div>
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[16px] w-full">
        <p className="leading-[24px]">16. juni 2025</p>
      </div>
    </div>
  );
}

function StateLayer24() {
  return (
    <div className="content-stretch flex gap-[16px] h-[56px] items-center justify-center relative shrink-0 w-full" data-name="state-layer">
      <LeadingElement6 />
      <Content13 />
    </div>
  );
}

function TimeRequest() {
  return (
    <div className="relative shrink-0 w-full" data-name="Time request">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex items-center px-[8px] py-0 relative w-full">
          <ListitemListItem4Density9 />
        </div>
      </div>
    </div>
  );
}

function ClosingAvvik() {
  return (
    <div className="bg-[#eeeee4] relative rounded-[12px] shrink-0 w-full" data-name="Closing avvik">
      <div className="overflow-x-clip overflow-y-auto size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] items-start p-[24px] relative w-full">
          <ClosingConfirmationMethode />
          <DeviationFollowUpStatus property1="Deadline postpone request" className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0" />
          <Revisorcomment />
          <TimeRequest />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#c4c8b7] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

/**
 * @figmaAssetKey fd13480deb69aa90ee59b3a308dc205b060cb523
 */
function Frame8() {
  return (
    <div className="relative rounded-[12px] shrink-0 w-full">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-start px-[24px] py-[16px] relative w-full">
          <Frame2 />
          <HorizontalFullWidth className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" />
          <AppUserInput />
          <AppUserInput1 />
          <AppUserInput2 />
          <Button size="Medium" style="Outline" className="content-stretch flex items-center justify-center relative shrink-0" />
          <Deviationtabs />
        </div>
      </div>
    </div>
  );
}

function KlsTable() {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px overflow-x-clip overflow-y-auto relative shrink-0 w-full" data-name="KLS Table">
      <Table />
      <VerticalFullWidth className="content-stretch flex flex-col h-full items-center overflow-clip relative shrink-0 w-px" />
      <DeviationFollowupRevisjor />
    </div>
  );
}

export default function SecondaryInfo() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-name="Secondary info">
      <Tabs1 />
      <KlsTable />
    </div>
  );
}