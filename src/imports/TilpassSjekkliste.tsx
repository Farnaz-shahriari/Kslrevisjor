import svgPaths from "./svg-sbk4ek7r6";
import { imgVector, imgVector1, imgVector2, imgVector3, imgDivider, img, img1, imgDivider1, imgIcon, img2, img3, imgVector4, imgVector5, imgVector6, imgVector7, imgVector8, imgVector9, imgVector10, imgVector11, img4, imgVector12 } from "./svg-et14p";
type OpenInNewProps = {
  className?: string;
  style?: "Filled" | "Outlined" | "Round" | "Sharp" | "Two Tone";
};

/**
 * @figmaAssetKey e5189d4054f6360325fe7b0b13b401e8e33e663e
 */
function OpenInNew({ className, style = "Filled" }: OpenInNewProps) {
  if (style === "Outlined") {
    return (
      <div className={className} data-name="Style=Outlined">
        <div className="absolute inset-[12.5%]" data-name="Vector">
          <img alt="" className="block max-w-none size-full" src={imgVector} />
        </div>
      </div>
    );
  }
  if (style === "Round") {
    return (
      <div className={className} data-name="Style=Round">
        <div className="absolute inset-[12.5%]" data-name="Vector">
          <img alt="" className="block max-w-none size-full" src={imgVector1} />
        </div>
      </div>
    );
  }
  if (style === "Sharp") {
    return (
      <div className={className} data-name="Style=Sharp">
        <div className="absolute inset-[12.5%]" data-name="Vector">
          <img alt="" className="block max-w-none size-full" src={imgVector2} />
        </div>
      </div>
    );
  }
  if (style === "Two Tone") {
    return (
      <div className={className} data-name="Style=Two Tone">
        <div className="absolute inset-[12.5%]" data-name="Vector">
          <img alt="" className="block max-w-none size-full" src={imgVector3} />
        </div>
      </div>
    );
  }
  return (
    <div className={className} data-name="Style=Filled">
      <div className="absolute inset-[12.5%]" data-name="Vector">
        <img alt="" className="block max-w-none size-full" src={imgVector} />
      </div>
    </div>
  );
}

/**
 * @figmaAssetKey e9963ea235b805aad9b45a92aacf326d77e9b6a1
 */
function Link({ className }: { className?: string }) {
  return (
    <div className={className} data-name="link">
      <Link1 />
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
 * @figmaAssetKey 4794bcb54eed19815e637f8f1606169b4e3387e9
 */
function Error({ className }: { className?: string }) {
  return (
    <div className={className} data-name="error">
      <Error1 />
    </div>
  );
}

/**
 * @figmaAssetKey 390d051087d0b1947ef179469a42f8dc4654b8a4
 */
function OndemandVideo({ className }: { className?: string }) {
  return (
    <div className={className} data-name="ondemand_video">
      <Ondemand_video />
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
              <img alt="" className="block max-w-none size-full" src={imgDivider} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
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
 * @figmaAssetKey 44b9715e248ea0e408c3bbe05f15ac27b6c1285d
 */
function HorizontalFullWidth({ className }: { className?: string }) {
  return (
    <div className={className} data-name="Horizontal/Full-width">
      <div className="h-0 relative shrink-0 w-full" data-name="Divider">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]" style={{ "--stroke-0": "rgba(196, 200, 183, 1)" } as React.CSSProperties}>
          <img alt="" className="block max-w-none size-full" src={imgDivider1} />
        </div>
      </div>
    </div>
  );
}
type BuildingBlocksAppBarContentTextSmallProps = {
  className?: string;
  headline?: string;
  showSupportingText?: boolean;
  supportingText?: string;
  size?: "Small";
  alignment?: "Centered" | "Left";
};

/**
 * @figmaAssetKey 4e5e4c08f995160bedc7045861e7555615ed0053
 */
function BuildingBlocksAppBarContentTextSmall({ className, headline = "Label", showSupportingText = true, supportingText = "Supporting text", size = "Small", alignment = "Centered" }: BuildingBlocksAppBarContentTextSmallProps) {
  const element = (
    <p className="[white-space-collapse:collapse] font-['Roboto:Regular',sans-serif] font-normal leading-[28px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#1a1c16] text-[22px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
      {headline}
    </p>
  );
  const element1 = showSupportingText && (
    <p className="[white-space-collapse:collapse] font-['Roboto:Medium',sans-serif] font-medium leading-[16px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#44483b] text-[12px] tracking-[0.5px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
      {supportingText}
    </p>
  );
  if (size === "Small" && alignment === "Left") {
    return (
      <div className={className} data-name="Size=Small, Alignment=Left">
        {element}
        {element1}
      </div>
    );
  }
  return (
    <div className={className} data-name="Size=Small, Alignment=Centered">
      {element}
      {element1}
    </div>
  );
}

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
type IconButtonProps = {
  className?: string;
  type?: "Round" | "Square";
  size?: "XSmall" | "Small" | "Medium" | "Large" | "XLarge";
  style?: "Filled" | "Tonal" | "Outline" | "Standard";
  width?: "Narrow" | "Default" | "Wide";
};

/**
 * @figmaAssetKey 9369b3d0962d7747dec23f3b7e8f29949043a2a1
 */
function IconButton({ className, type = "Round", size = "XSmall", style = "Filled", width = "Narrow" }: IconButtonProps) {
  if (type === "Square" && size === "XLarge" && style === "Standard" && width === "Wide") {
    return (
      <div className={className} data-name="Type=Square, Size=XLarge, Style=Standard, Width=Wide">
        <Content20 />
      </div>
    );
  }
  if (type === "Square" && size === "XLarge" && style === "Standard" && width === "Default") {
    return (
      <div className={className} data-name="Type=Square, Size=XLarge, Style=Standard, Width=Default">
        <Content21 />
      </div>
    );
  }
  if (type === "Square" && size === "XLarge" && style === "Standard" && width === "Narrow") {
    return (
      <div className={className} data-name="Type=Square, Size=XLarge, Style=Standard, Width=Narrow">
        <Content22 />
      </div>
    );
  }
  if (type === "Square" && size === "Large" && style === "Standard" && width === "Wide") {
    return (
      <div className={className} data-name="Type=Square, Size=Large, Style=Standard, Width=Wide">
        <Content23 />
      </div>
    );
  }
  if (type === "Square" && size === "Large" && style === "Standard" && width === "Default") {
    return (
      <div className={className} data-name="Type=Square, Size=Large, Style=Standard, Width=Default">
        <Content24 />
      </div>
    );
  }
  if (type === "Square" && size === "Large" && style === "Standard" && width === "Narrow") {
    return (
      <div className={className} data-name="Type=Square, Size=Large, Style=Standard, Width=Narrow">
        <Content25 />
      </div>
    );
  }
  if (type === "Square" && size === "Medium" && style === "Standard" && width === "Wide") {
    return (
      <div className={className} data-name="Type=Square, Size=Medium, Style=Standard, Width=Wide">
        <Content26 />
      </div>
    );
  }
  if (type === "Square" && size === "Medium" && style === "Standard" && width === "Default") {
    return (
      <div className={className} data-name="Type=Square, Size=Medium, Style=Standard, Width=Default">
        <Content27 />
      </div>
    );
  }
  if (type === "Square" && size === "Medium" && style === "Standard" && width === "Narrow") {
    return (
      <div className={className} data-name="Type=Square, Size=Medium, Style=Standard, Width=Narrow">
        <Content28 />
      </div>
    );
  }
  if (type === "Square" && size === "Small" && style === "Standard" && width === "Wide") {
    return (
      <div className={className} data-name="Type=Square, Size=Small, Style=Standard, Width=Wide">
        <Content29 />
      </div>
    );
  }
  if (type === "Square" && size === "Small" && style === "Standard" && width === "Default") {
    return (
      <div className={className} data-name="Type=Square, Size=Small, Style=Standard, Width=Default">
        <Content30 />
      </div>
    );
  }
  if (type === "Square" && size === "Small" && style === "Standard" && width === "Narrow") {
    return (
      <div className={className} data-name="Type=Square, Size=Small, Style=Standard, Width=Narrow">
        <Content31 />
      </div>
    );
  }
  if (type === "Square" && size === "XSmall" && style === "Standard" && width === "Wide") {
    return (
      <div className={className} data-name="Type=Square, Size=XSmall, Style=Standard, Width=Wide">
        <Content32 />
      </div>
    );
  }
  if (type === "Square" && size === "XSmall" && style === "Standard" && width === "Default") {
    return (
      <div className={className} data-name="Type=Square, Size=XSmall, Style=Standard, Width=Default">
        <Content33 />
      </div>
    );
  }
  if (type === "Square" && size === "XSmall" && style === "Standard" && width === "Narrow") {
    return (
      <div className={className} data-name="Type=Square, Size=XSmall, Style=Standard, Width=Narrow">
        <Content34 />
      </div>
    );
  }
  if (type === "Round" && size === "XLarge" && style === "Standard" && width === "Wide") {
    return (
      <div className={className} data-name="Type=Round, Size=XLarge, Style=Standard, Width=Wide">
        <Content35 />
      </div>
    );
  }
  if (type === "Round" && size === "XLarge" && style === "Standard" && width === "Default") {
    return (
      <div className={className} data-name="Type=Round, Size=XLarge, Style=Standard, Width=Default">
        <Content36 />
      </div>
    );
  }
  if (type === "Round" && size === "XLarge" && style === "Standard" && width === "Narrow") {
    return (
      <div className={className} data-name="Type=Round, Size=XLarge, Style=Standard, Width=Narrow">
        <Content37 />
      </div>
    );
  }
  if (type === "Round" && size === "Large" && style === "Standard" && width === "Wide") {
    return (
      <div className={className} data-name="Type=Round, Size=Large, Style=Standard, Width=Wide">
        <Content38 />
      </div>
    );
  }
  if (type === "Round" && size === "Large" && style === "Standard" && width === "Default") {
    return (
      <div className={className} data-name="Type=Round, Size=Large, Style=Standard, Width=Default">
        <Content39 />
      </div>
    );
  }
  if (type === "Round" && size === "Large" && style === "Standard" && width === "Narrow") {
    return (
      <div className={className} data-name="Type=Round, Size=Large, Style=Standard, Width=Narrow">
        <Content40 />
      </div>
    );
  }
  if (type === "Round" && size === "Medium" && style === "Standard" && width === "Wide") {
    return (
      <div className={className} data-name="Type=Round, Size=Medium, Style=Standard, Width=Wide">
        <Content41 />
      </div>
    );
  }
  if (type === "Round" && size === "Medium" && style === "Standard" && width === "Default") {
    return (
      <div className={className} data-name="Type=Round, Size=Medium, Style=Standard, Width=Default">
        <Content42 />
      </div>
    );
  }
  if (type === "Round" && size === "Medium" && style === "Standard" && width === "Narrow") {
    return (
      <div className={className} data-name="Type=Round, Size=Medium, Style=Standard, Width=Narrow">
        <Content43 />
      </div>
    );
  }
  if (type === "Round" && size === "Small" && style === "Standard" && width === "Wide") {
    return (
      <div className={className} data-name="Type=Round, Size=Small, Style=Standard, Width=Wide">
        <Content44 />
      </div>
    );
  }
  if (type === "Round" && size === "Small" && style === "Standard" && width === "Default") {
    return (
      <div className={className} data-name="Type=Round, Size=Small, Style=Standard, Width=Default">
        <Content45 />
      </div>
    );
  }
  if (type === "Round" && size === "Small" && style === "Standard" && width === "Narrow") {
    return (
      <div className={className} data-name="Type=Round, Size=Small, Style=Standard, Width=Narrow">
        <Content46 />
      </div>
    );
  }
  if (type === "Round" && size === "XSmall" && style === "Standard" && width === "Wide") {
    return (
      <div className={className} data-name="Type=Round, Size=XSmall, Style=Standard, Width=Wide">
        <Content47 />
      </div>
    );
  }
  if (type === "Round" && size === "XSmall" && style === "Standard" && width === "Default") {
    return (
      <div className={className} data-name="Type=Round, Size=XSmall, Style=Standard, Width=Default">
        <Content48 />
      </div>
    );
  }
  if (type === "Round" && size === "XSmall" && style === "Standard" && width === "Narrow") {
    return (
      <div className={className} data-name="Type=Round, Size=XSmall, Style=Standard, Width=Narrow">
        <Content49 />
      </div>
    );
  }
  if (type === "Square" && size === "XLarge" && style === "Outline" && width === "Wide") {
    return (
      <div className={className} data-name="Type=Square, Size=XLarge, Style=Outline, Width=Wide">
        <Content50 />
      </div>
    );
  }
  if (type === "Square" && size === "XLarge" && style === "Outline" && width === "Default") {
    return (
      <div className={className} data-name="Type=Square, Size=XLarge, Style=Outline, Width=Default">
        <Content51 />
      </div>
    );
  }
  if (type === "Square" && size === "XLarge" && style === "Outline" && width === "Narrow") {
    return (
      <div className={className} data-name="Type=Square, Size=XLarge, Style=Outline, Width=Narrow">
        <Content52 />
      </div>
    );
  }
  if (type === "Square" && size === "Large" && style === "Outline" && width === "Wide") {
    return (
      <div className={className} data-name="Type=Square, Size=Large, Style=Outline, Width=Wide">
        <Content53 />
      </div>
    );
  }
  if (type === "Square" && size === "Large" && style === "Outline" && width === "Default") {
    return (
      <div className={className} data-name="Type=Square, Size=Large, Style=Outline, Width=Default">
        <Content54 />
      </div>
    );
  }
  if (type === "Square" && size === "Large" && style === "Outline" && width === "Narrow") {
    return (
      <div className={className} data-name="Type=Square, Size=Large, Style=Outline, Width=Narrow">
        <Content55 />
      </div>
    );
  }
  if (type === "Square" && size === "Medium" && style === "Outline" && width === "Wide") {
    return (
      <div className={className} data-name="Type=Square, Size=Medium, Style=Outline, Width=Wide">
        <Content56 />
      </div>
    );
  }
  if (type === "Square" && size === "Medium" && style === "Outline" && width === "Default") {
    return (
      <div className={className} data-name="Type=Square, Size=Medium, Style=Outline, Width=Default">
        <Content57 />
      </div>
    );
  }
  if (type === "Square" && size === "Medium" && style === "Outline" && width === "Narrow") {
    return (
      <div className={className} data-name="Type=Square, Size=Medium, Style=Outline, Width=Narrow">
        <Content58 />
      </div>
    );
  }
  if (type === "Square" && size === "Small" && style === "Outline" && width === "Wide") {
    return (
      <div className={className} data-name="Type=Square, Size=Small, Style=Outline, Width=Wide">
        <Content59 />
      </div>
    );
  }
  if (type === "Square" && size === "Small" && style === "Outline" && width === "Default") {
    return (
      <div className={className} data-name="Type=Square, Size=Small, Style=Outline, Width=Default">
        <Content60 />
      </div>
    );
  }
  if (type === "Square" && size === "Small" && style === "Outline" && width === "Narrow") {
    return (
      <div className={className} data-name="Type=Square, Size=Small, Style=Outline, Width=Narrow">
        <Content61 />
      </div>
    );
  }
  if (type === "Square" && size === "XSmall" && style === "Outline" && width === "Wide") {
    return (
      <div className={className} data-name="Type=Square, Size=XSmall, Style=Outline, Width=Wide">
        <Content62 />
      </div>
    );
  }
  if (type === "Square" && size === "XSmall" && style === "Outline" && width === "Default") {
    return (
      <div className={className} data-name="Type=Square, Size=XSmall, Style=Outline, Width=Default">
        <Content63 />
      </div>
    );
  }
  if (type === "Square" && size === "XSmall" && style === "Outline" && width === "Narrow") {
    return (
      <div className={className} data-name="Type=Square, Size=XSmall, Style=Outline, Width=Narrow">
        <Content64 />
      </div>
    );
  }
  if (type === "Round" && size === "XLarge" && style === "Outline" && width === "Wide") {
    return (
      <div className={className} data-name="Type=Round, Size=XLarge, Style=Outline, Width=Wide">
        <Content65 />
      </div>
    );
  }
  if (type === "Round" && size === "XLarge" && style === "Outline" && width === "Default") {
    return (
      <div className={className} data-name="Type=Round, Size=XLarge, Style=Outline, Width=Default">
        <Content66 />
      </div>
    );
  }
  if (type === "Round" && size === "XLarge" && style === "Outline" && width === "Narrow") {
    return (
      <div className={className} data-name="Type=Round, Size=XLarge, Style=Outline, Width=Narrow">
        <Content67 />
      </div>
    );
  }
  if (type === "Round" && size === "Large" && style === "Outline" && width === "Wide") {
    return (
      <div className={className} data-name="Type=Round, Size=Large, Style=Outline, Width=Wide">
        <Content68 />
      </div>
    );
  }
  if (type === "Round" && size === "Large" && style === "Outline" && width === "Default") {
    return (
      <div className={className} data-name="Type=Round, Size=Large, Style=Outline, Width=Default">
        <Content69 />
      </div>
    );
  }
  if (type === "Round" && size === "Large" && style === "Outline" && width === "Narrow") {
    return (
      <div className={className} data-name="Type=Round, Size=Large, Style=Outline, Width=Narrow">
        <Content70 />
      </div>
    );
  }
  if (type === "Round" && size === "Medium" && style === "Outline" && width === "Wide") {
    return (
      <div className={className} data-name="Type=Round, Size=Medium, Style=Outline, Width=Wide">
        <Content71 />
      </div>
    );
  }
  if (type === "Round" && size === "Medium" && style === "Outline" && width === "Default") {
    return (
      <div className={className} data-name="Type=Round, Size=Medium, Style=Outline, Width=Default">
        <Content72 />
      </div>
    );
  }
  if (type === "Round" && size === "Medium" && style === "Outline" && width === "Narrow") {
    return (
      <div className={className} data-name="Type=Round, Size=Medium, Style=Outline, Width=Narrow">
        <Content73 />
      </div>
    );
  }
  if (type === "Round" && size === "Small" && style === "Outline" && width === "Wide") {
    return (
      <div className={className} data-name="Type=Round, Size=Small, Style=Outline, Width=Wide">
        <Content74 />
      </div>
    );
  }
  if (type === "Round" && size === "Small" && style === "Outline" && width === "Default") {
    return (
      <div className={className} data-name="Type=Round, Size=Small, Style=Outline, Width=Default">
        <Content75 />
      </div>
    );
  }
  if (type === "Round" && size === "Small" && style === "Outline" && width === "Narrow") {
    return (
      <div className={className} data-name="Type=Round, Size=Small, Style=Outline, Width=Narrow">
        <Content76 />
      </div>
    );
  }
  if (type === "Round" && size === "XSmall" && style === "Outline" && width === "Wide") {
    return (
      <div className={className} data-name="Type=Round, Size=XSmall, Style=Outline, Width=Wide">
        <Content77 />
      </div>
    );
  }
  if (type === "Round" && size === "XSmall" && style === "Outline" && width === "Default") {
    return (
      <div className={className} data-name="Type=Round, Size=XSmall, Style=Outline, Width=Default">
        <Content78 />
      </div>
    );
  }
  if (type === "Round" && size === "XSmall" && style === "Outline" && width === "Narrow") {
    return (
      <div className={className} data-name="Type=Round, Size=XSmall, Style=Outline, Width=Narrow">
        <Content79 />
      </div>
    );
  }
  if (type === "Square" && size === "XLarge" && style === "Tonal" && width === "Wide") {
    return (
      <div className={className} data-name="Type=Square, Size=XLarge, Style=Tonal, Width=Wide">
        <Content80 />
      </div>
    );
  }
  if (type === "Square" && size === "XLarge" && style === "Tonal" && width === "Default") {
    return (
      <div className={className} data-name="Type=Square, Size=XLarge, Style=Tonal, Width=Default">
        <Content81 />
      </div>
    );
  }
  if (type === "Square" && size === "XLarge" && style === "Tonal" && width === "Narrow") {
    return (
      <div className={className} data-name="Type=Square, Size=XLarge, Style=Tonal, Width=Narrow">
        <Content82 />
      </div>
    );
  }
  if (type === "Square" && size === "Large" && style === "Tonal" && width === "Wide") {
    return (
      <div className={className} data-name="Type=Square, Size=Large, Style=Tonal, Width=Wide">
        <Content83 />
      </div>
    );
  }
  if (type === "Square" && size === "Large" && style === "Tonal" && width === "Default") {
    return (
      <div className={className} data-name="Type=Square, Size=Large, Style=Tonal, Width=Default">
        <Content84 />
      </div>
    );
  }
  if (type === "Square" && size === "Large" && style === "Tonal" && width === "Narrow") {
    return (
      <div className={className} data-name="Type=Square, Size=Large, Style=Tonal, Width=Narrow">
        <Content85 />
      </div>
    );
  }
  if (type === "Square" && size === "Medium" && style === "Tonal" && width === "Wide") {
    return (
      <div className={className} data-name="Type=Square, Size=Medium, Style=Tonal, Width=Wide">
        <Content86 />
      </div>
    );
  }
  if (type === "Square" && size === "Medium" && style === "Tonal" && width === "Default") {
    return (
      <div className={className} data-name="Type=Square, Size=Medium, Style=Tonal, Width=Default">
        <Content87 />
      </div>
    );
  }
  if (type === "Square" && size === "Medium" && style === "Tonal" && width === "Narrow") {
    return (
      <div className={className} data-name="Type=Square, Size=Medium, Style=Tonal, Width=Narrow">
        <Content88 />
      </div>
    );
  }
  if (type === "Square" && size === "Small" && style === "Tonal" && width === "Wide") {
    return (
      <div className={className} data-name="Type=Square, Size=Small, Style=Tonal, Width=Wide">
        <Content89 />
      </div>
    );
  }
  if (type === "Square" && size === "Small" && style === "Tonal" && width === "Default") {
    return (
      <div className={className} data-name="Type=Square, Size=Small, Style=Tonal, Width=Default">
        <Content90 />
      </div>
    );
  }
  if (type === "Square" && size === "Small" && style === "Tonal" && width === "Narrow") {
    return (
      <div className={className} data-name="Type=Square, Size=Small, Style=Tonal, Width=Narrow">
        <Content91 />
      </div>
    );
  }
  if (type === "Square" && size === "XSmall" && style === "Tonal" && width === "Wide") {
    return (
      <div className={className} data-name="Type=Square, Size=XSmall, Style=Tonal, Width=Wide">
        <Content92 />
      </div>
    );
  }
  if (type === "Square" && size === "XSmall" && style === "Tonal" && width === "Default") {
    return (
      <div className={className} data-name="Type=Square, Size=XSmall, Style=Tonal, Width=Default">
        <Content93 />
      </div>
    );
  }
  if (type === "Square" && size === "XSmall" && style === "Tonal" && width === "Narrow") {
    return (
      <div className={className} data-name="Type=Square, Size=XSmall, Style=Tonal, Width=Narrow">
        <Content94 />
      </div>
    );
  }
  if (type === "Round" && size === "XLarge" && style === "Tonal" && width === "Wide") {
    return (
      <div className={className} data-name="Type=Round, Size=XLarge, Style=Tonal, Width=Wide">
        <Content95 />
      </div>
    );
  }
  if (type === "Round" && size === "XLarge" && style === "Tonal" && width === "Default") {
    return (
      <div className={className} data-name="Type=Round, Size=XLarge, Style=Tonal, Width=Default">
        <Content96 />
      </div>
    );
  }
  if (type === "Round" && size === "XLarge" && style === "Tonal" && width === "Narrow") {
    return (
      <div className={className} data-name="Type=Round, Size=XLarge, Style=Tonal, Width=Narrow">
        <Content97 />
      </div>
    );
  }
  if (type === "Round" && size === "Large" && style === "Tonal" && width === "Wide") {
    return (
      <div className={className} data-name="Type=Round, Size=Large, Style=Tonal, Width=Wide">
        <Content98 />
      </div>
    );
  }
  if (type === "Round" && size === "Large" && style === "Tonal" && width === "Default") {
    return (
      <div className={className} data-name="Type=Round, Size=Large, Style=Tonal, Width=Default">
        <Content99 />
      </div>
    );
  }
  if (type === "Round" && size === "Large" && style === "Tonal" && width === "Narrow") {
    return (
      <div className={className} data-name="Type=Round, Size=Large, Style=Tonal, Width=Narrow">
        <Content100 />
      </div>
    );
  }
  if (type === "Round" && size === "Medium" && style === "Tonal" && width === "Wide") {
    return (
      <div className={className} data-name="Type=Round, Size=Medium, Style=Tonal, Width=Wide">
        <Content101 />
      </div>
    );
  }
  if (type === "Round" && size === "Medium" && style === "Tonal" && width === "Default") {
    return (
      <div className={className} data-name="Type=Round, Size=Medium, Style=Tonal, Width=Default">
        <Content102 />
      </div>
    );
  }
  if (type === "Round" && size === "Medium" && style === "Tonal" && width === "Narrow") {
    return (
      <div className={className} data-name="Type=Round, Size=Medium, Style=Tonal, Width=Narrow">
        <Content103 />
      </div>
    );
  }
  if (type === "Round" && size === "Small" && style === "Tonal" && width === "Wide") {
    return (
      <div className={className} data-name="Type=Round, Size=Small, Style=Tonal, Width=Wide">
        <Content104 />
      </div>
    );
  }
  if (type === "Round" && size === "Small" && style === "Tonal" && width === "Default") {
    return (
      <div className={className} data-name="Type=Round, Size=Small, Style=Tonal, Width=Default">
        <Content105 />
      </div>
    );
  }
  if (type === "Round" && size === "Small" && style === "Tonal" && width === "Narrow") {
    return (
      <div className={className} data-name="Type=Round, Size=Small, Style=Tonal, Width=Narrow">
        <Content106 />
      </div>
    );
  }
  if (type === "Round" && size === "XSmall" && style === "Tonal" && width === "Wide") {
    return (
      <div className={className} data-name="Type=Round, Size=XSmall, Style=Tonal, Width=Wide">
        <Content107 />
      </div>
    );
  }
  if (type === "Round" && size === "XSmall" && style === "Tonal" && width === "Default") {
    return (
      <div className={className} data-name="Type=Round, Size=XSmall, Style=Tonal, Width=Default">
        <Content108 />
      </div>
    );
  }
  if (type === "Round" && size === "XSmall" && style === "Tonal" && width === "Narrow") {
    return (
      <div className={className} data-name="Type=Round, Size=XSmall, Style=Tonal, Width=Narrow">
        <Content109 />
      </div>
    );
  }
  if (type === "Square" && size === "XLarge" && style === "Filled" && width === "Wide") {
    return (
      <div className={className} data-name="Type=Square, Size=XLarge, Style=Filled, Width=Wide">
        <Content110 />
      </div>
    );
  }
  if (type === "Square" && size === "XLarge" && style === "Filled" && width === "Default") {
    return (
      <div className={className} data-name="Type=Square, Size=XLarge, Style=Filled, Width=Default">
        <Content111 />
      </div>
    );
  }
  if (type === "Square" && size === "XLarge" && style === "Filled" && width === "Narrow") {
    return (
      <div className={className} data-name="Type=Square, Size=XLarge, Style=Filled, Width=Narrow">
        <Content112 />
      </div>
    );
  }
  if (type === "Square" && size === "Large" && style === "Filled" && width === "Wide") {
    return (
      <div className={className} data-name="Type=Square, Size=Large, Style=Filled, Width=Wide">
        <Content113 />
      </div>
    );
  }
  if (type === "Square" && size === "Large" && style === "Filled" && width === "Default") {
    return (
      <div className={className} data-name="Type=Square, Size=Large, Style=Filled, Width=Default">
        <Content114 />
      </div>
    );
  }
  if (type === "Square" && size === "Large" && style === "Filled" && width === "Narrow") {
    return (
      <div className={className} data-name="Type=Square, Size=Large, Style=Filled, Width=Narrow">
        <Content115 />
      </div>
    );
  }
  if (type === "Square" && size === "Medium" && style === "Filled" && width === "Wide") {
    return (
      <div className={className} data-name="Type=Square, Size=Medium, Style=Filled, Width=Wide">
        <Content116 />
      </div>
    );
  }
  if (type === "Square" && size === "Medium" && style === "Filled" && width === "Default") {
    return (
      <div className={className} data-name="Type=Square, Size=Medium, Style=Filled, Width=Default">
        <Content117 />
      </div>
    );
  }
  if (type === "Square" && size === "Medium" && style === "Filled" && width === "Narrow") {
    return (
      <div className={className} data-name="Type=Square, Size=Medium, Style=Filled, Width=Narrow">
        <Content118 />
      </div>
    );
  }
  if (type === "Square" && size === "Small" && style === "Filled" && width === "Wide") {
    return (
      <div className={className} data-name="Type=Square, Size=Small, Style=Filled, Width=Wide">
        <Content119 />
      </div>
    );
  }
  if (type === "Square" && size === "Small" && style === "Filled" && width === "Default") {
    return (
      <div className={className} data-name="Type=Square, Size=Small, Style=Filled, Width=Default">
        <Content120 />
      </div>
    );
  }
  if (type === "Square" && size === "Small" && style === "Filled" && width === "Narrow") {
    return (
      <div className={className} data-name="Type=Square, Size=Small, Style=Filled, Width=Narrow">
        <Content121 />
      </div>
    );
  }
  if (type === "Square" && size === "XSmall" && style === "Filled" && width === "Wide") {
    return (
      <div className={className} data-name="Type=Square, Size=XSmall, Style=Filled, Width=Wide">
        <Content122 />
      </div>
    );
  }
  if (type === "Square" && size === "XSmall" && style === "Filled" && width === "Default") {
    return (
      <div className={className} data-name="Type=Square, Size=XSmall, Style=Filled, Width=Default">
        <Content123 />
      </div>
    );
  }
  if (type === "Square" && size === "XSmall" && style === "Filled" && width === "Narrow") {
    return (
      <div className={className} data-name="Type=Square, Size=XSmall, Style=Filled, Width=Narrow">
        <Content124 />
      </div>
    );
  }
  if (type === "Round" && size === "XLarge" && style === "Filled" && width === "Wide") {
    return (
      <div className={className} data-name="Type=Round, Size=XLarge, Style=Filled, Width=Wide">
        <Content125 />
      </div>
    );
  }
  if (type === "Round" && size === "XLarge" && style === "Filled" && width === "Default") {
    return (
      <div className={className} data-name="Type=Round, Size=XLarge, Style=Filled, Width=Default">
        <Content126 />
      </div>
    );
  }
  if (type === "Round" && size === "XLarge" && style === "Filled" && width === "Narrow") {
    return (
      <div className={className} data-name="Type=Round, Size=XLarge, Style=Filled, Width=Narrow">
        <Content127 />
      </div>
    );
  }
  if (type === "Round" && size === "Large" && style === "Filled" && width === "Wide") {
    return (
      <div className={className} data-name="Type=Round, Size=Large, Style=Filled, Width=Wide">
        <Content128 />
      </div>
    );
  }
  if (type === "Round" && size === "Large" && style === "Filled" && width === "Default") {
    return (
      <div className={className} data-name="Type=Round, Size=Large, Style=Filled, Width=Default">
        <Content129 />
      </div>
    );
  }
  if (type === "Round" && size === "Large" && style === "Filled" && width === "Narrow") {
    return (
      <div className={className} data-name="Type=Round, Size=Large, Style=Filled, Width=Narrow">
        <Content130 />
      </div>
    );
  }
  if (type === "Round" && size === "Medium" && style === "Filled" && width === "Wide") {
    return (
      <div className={className} data-name="Type=Round, Size=Medium, Style=Filled, Width=Wide">
        <Content131 />
      </div>
    );
  }
  if (type === "Round" && size === "Medium" && style === "Filled" && width === "Default") {
    return (
      <div className={className} data-name="Type=Round, Size=Medium, Style=Filled, Width=Default">
        <Content132 />
      </div>
    );
  }
  if (type === "Round" && size === "Medium" && style === "Filled" && width === "Narrow") {
    return (
      <div className={className} data-name="Type=Round, Size=Medium, Style=Filled, Width=Narrow">
        <Content133 />
      </div>
    );
  }
  if (type === "Round" && size === "Small" && style === "Filled" && width === "Wide") {
    return (
      <div className={className} data-name="Type=Round, Size=Small, Style=Filled, Width=Wide">
        <Content134 />
      </div>
    );
  }
  if (type === "Round" && size === "Small" && style === "Filled" && width === "Default") {
    return (
      <div className={className} data-name="Type=Round, Size=Small, Style=Filled, Width=Default">
        <Content135 />
      </div>
    );
  }
  if (type === "Round" && size === "Small" && style === "Filled" && width === "Narrow") {
    return (
      <div className={className} data-name="Type=Round, Size=Small, Style=Filled, Width=Narrow">
        <Content136 />
      </div>
    );
  }
  if (type === "Round" && size === "XSmall" && style === "Filled" && width === "Wide") {
    return (
      <div className={className} data-name="Type=Round, Size=XSmall, Style=Filled, Width=Wide">
        <Content137 />
      </div>
    );
  }
  if (type === "Round" && size === "XSmall" && style === "Filled" && width === "Default") {
    return (
      <div className={className} data-name="Type=Round, Size=XSmall, Style=Filled, Width=Default">
        <Content138 />
      </div>
    );
  }
  return (
    <div className={className} data-name="Type=Round, Size=XSmall, Style=Filled, Width=Narrow">
      <Content139 />
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
          <img alt="" className="block max-w-none size-full" src={imgVector4} />
        </div>
      </div>
    );
  }
  if (style === "Round") {
    return (
      <div className={className} data-name="Style=Round">
        <div className="absolute inset-[20.32%_9.18%]" data-name="Vector">
          <img alt="" className="block max-w-none size-full" src={imgVector5} />
        </div>
      </div>
    );
  }
  if (style === "Sharp") {
    return (
      <div className={className} data-name="Style=Sharp">
        <div className="absolute inset-[18.6%_8.33%]" data-name="Vector">
          <img alt="" className="block max-w-none size-full" src={imgVector4} />
        </div>
      </div>
    );
  }
  if (style === "Two Tone") {
    return (
      <div className={className} data-name="Style=Two Tone">
        <div className="absolute inset-[16.37%_8.33%_20.84%_8.33%]" data-name="Vector">
          <img alt="" className="block max-w-none size-full" src={imgVector6} />
        </div>
      </div>
    );
  }
  return (
    <div className={className} data-name="Style=Filled">
      <div className="absolute inset-[18.6%_8.33%]" data-name="Vector">
        <img alt="" className="block max-w-none size-full" src={imgVector4} />
      </div>
    </div>
  );
}
type ReportProblemProps = {
  className?: string;
  style?: "Filled" | "Outlined" | "Round" | "Sharp" | "Two Tone";
};

/**
 * @figmaAssetKey d991ef7d8ad5b328f190d12c551d340ab07595c6
 */
function ReportProblem({ className, style = "Filled" }: ReportProblemProps) {
  if (style === "Outlined") {
    return (
      <div className={className} data-name="Style=Outlined">
        <div className="absolute inset-[10.42%_4.17%]" data-name="Vector">
          <img alt="" className="block max-w-none size-full" src={imgVector7} />
        </div>
      </div>
    );
  }
  if (style === "Round") {
    return (
      <div className={className} data-name="Style=Round">
        <div className="absolute inset-[12.49%_7.22%]" data-name="Vector">
          <img alt="" className="block max-w-none size-full" src={imgVector8} />
        </div>
      </div>
    );
  }
  if (style === "Sharp") {
    return (
      <div className={className} data-name="Style=Sharp">
        <div className="absolute inset-[10.42%_4.17%]" data-name="Vector">
          <img alt="" className="block max-w-none size-full" src={imgVector9} />
        </div>
      </div>
    );
  }
  if (style === "Two Tone") {
    return (
      <div className={className} data-name="Style=Two Tone">
        <div className="absolute inset-[24.96%_18.63%_20.83%_18.63%]" data-name="Vector">
          <img alt="" className="block max-w-none size-full" src={imgVector10} />
        </div>
        <div className="absolute inset-[8.33%_4.17%_12.5%_4.17%]" data-name="Vector">
          <img alt="" className="block max-w-none size-full" src={imgVector11} />
        </div>
      </div>
    );
  }
  return (
    <div className={className} data-name="Style=Filled">
      <div className="absolute inset-[10.42%_4.17%]" data-name="Vector">
        <img alt="" className="block max-w-none size-full" src={imgVector9} />
      </div>
    </div>
  );
}
type ProducerNavigationRailProps = {
  className?: string;
  property1?: "Default" | "Expanded";
};

/**
 * @figmaAssetKey 8b433a1a08619f2adecb3bb0be506da693b957de
 */
/**
 * @figmaAssetKey c1b243c1c48c7413a42719a33a72235237e91b19
 */
/**
 * @figmaAssetKey c1b243c1c48c7413a42719a33a72235237e91b19
 */
/**
 * @figmaAssetKey 443862074c53b2983fd82631ef622ef2d66f6088
 */
/**
 * @figmaAssetKey 443862074c53b2983fd82631ef622ef2d66f6088
 */
/**
 * @figmaAssetKey 443862074c53b2983fd82631ef622ef2d66f6088
 */
/**
 * @figmaAssetKey 443862074c53b2983fd82631ef622ef2d66f6088
 */
/**
 * @figmaAssetKey 29536c36f723ab490444db302b0f8d3a01bc2470
 */
/**
 * @figmaAssetKey d991ef7d8ad5b328f190d12c551d340ab07595c6
 */
/**
 * @figmaAssetKey d991ef7d8ad5b328f190d12c551d340ab07595c6
 */
/**
 * @figmaAssetKey 4e1d37ebb63b8d2d7a14a163159819292b4280f5
 */
/**
 * @figmaAssetKey 999d2cf2ec06d3492536457fc2ec4432664d2547
 */
/**
 * @figmaAssetKey c1b243c1c48c7413a42719a33a72235237e91b19
 */
/**
 * @figmaAssetKey c1b243c1c48c7413a42719a33a72235237e91b19
 */
/**
 * @figmaAssetKey 443862074c53b2983fd82631ef622ef2d66f6088
 */
/**
 * @figmaAssetKey 443862074c53b2983fd82631ef622ef2d66f6088
 */
/**
 * @figmaAssetKey d991ef7d8ad5b328f190d12c551d340ab07595c6
 */
/**
 * @figmaAssetKey 29536c36f723ab490444db302b0f8d3a01bc2470
 */
/**
 * @figmaAssetKey d991ef7d8ad5b328f190d12c551d340ab07595c6
 */
/**
 * @figmaAssetKey 999d2cf2ec06d3492536457fc2ec4432664d2547
 */
/**
 * @figmaAssetKey 4e1d37ebb63b8d2d7a14a163159819292b4280f5
 */
/**
 * @figmaAssetKey 999d2cf2ec06d3492536457fc2ec4432664d2547
 */
function ProducerNavigationRail({ className, property1 = "Default" }: ProducerNavigationRailProps) {
  const element = <div aria-hidden="true" className="absolute border-[#c4c8b7] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none" />;
  const element1 = <IconButton type="Square" size="Medium" style="Standard" width="Default" className="content-stretch flex items-center justify-center relative shrink-0" />;
  if (property1 === "Expanded") {
    return (
      <div className={className} data-name="Property 1=Expanded">
        {element}
        <KslNavigationRail element1={element1} />
      </div>
    );
  }
  return (
    <button className={className} data-name="Property 1=Default">
      {element}
      <KslNavigationRail1 element1={element1} />
    </button>
  );
}
type UserProfileProps = {
  className?: string;
  state?: "Default" | "Hover" | "Pressed" | "Mobile";
};

/**
 * @figmaAssetKey a23c3b07991e982fd07f5088a077ff58f709783e
 */
function UserProfile({ className, state = "Default" }: UserProfileProps) {
  const profileAvator = (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0" data-name="Profile Avator">
      <div className="bg-[#eff1e7] overflow-clip relative rounded-[100px] shrink-0 size-[40px]" data-name="Generic avatar">
        <div className="absolute bottom-[10.92%] left-[14.77%] right-[14.77%] top-1/4" data-name="Avatar Placeholder">
          <div className="absolute inset-0" style={{ "--fill-0": "rgba(40, 64, 0, 1)" } as React.CSSProperties}>
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29 26">
              <g id="Avatar Placeholder">
                <path clipRule="evenodd" d={svgPaths.pb52dd00} fill="var(--fill-0, #284000)" fillRule="evenodd" />
                <path d={svgPaths.p1df7e300} fill="var(--fill-0, #284000)" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
  if (state === "Mobile") {
    return (
      <div className={className} data-name="State=Mobile">
        <div className="box-border content-stretch flex gap-[8px] items-center justify-end px-[8px] py-[4px] relative shrink-0" data-name="State Layer">
          {profileAvator}
        </div>
      </div>
    );
  }
  if (state === "Hover") {
    return (
      <button className={className} data-name="State=Hover">
        <div className="bg-[rgba(68,72,59,0.08)] box-border content-stretch flex gap-[8px] items-center px-[8px] py-[4px] relative shrink-0 w-[168px]" data-name="State Layer">
          {profileAvator}
          <div className="content-stretch flex flex-col items-start justify-center leading-[0] relative shrink-0 text-[#44483b]" data-name="User info">
            <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center relative shrink-0 text-[14px] tracking-[0.1px] w-[120px]">
              <p className="leading-[20px]">Liv Berg</p>
            </div>
            <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[11px] tracking-[0.5px] w-[120px]">
              <p className="leading-[16px]">Liv.berg@ksl.no</p>
            </div>
          </div>
        </div>
      </button>
    );
  }
  if (state === "Pressed") {
    return (
      <button className={className} data-name="State=Pressed">
        <div className="bg-[rgba(68,72,59,0.12)] box-border content-stretch flex gap-[8px] items-center px-[8px] py-[4px] relative shrink-0 w-[168px]" data-name="State Layer">
          {profileAvator}
          <div className="content-stretch flex flex-col items-start justify-center leading-[0] relative shrink-0 text-[#44483b]" data-name="User info">
            <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center relative shrink-0 text-[14px] tracking-[0.1px] w-[120px]">
              <p className="leading-[20px]">Liv Berg</p>
            </div>
            <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[11px] tracking-[0.5px] w-[120px]">
              <p className="leading-[16px]">Liv.berg@ksl.no</p>
            </div>
          </div>
        </div>
      </button>
    );
  }
  return (
    <div className={className} data-name="State=Default">
      <div className="box-border content-stretch flex gap-[8px] items-center px-[8px] py-[4px] relative shrink-0 w-[168px]" data-name="State Layer">
        {profileAvator}
        <div className="content-stretch flex flex-col items-start justify-center leading-[0] relative shrink-0 text-[#44483b]" data-name="User info">
          <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center relative shrink-0 text-[14px] tracking-[0.1px] w-[120px]">
            <p className="leading-[20px]">Liv Berg</p>
          </div>
          <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[11px] tracking-[0.5px] w-[120px]">
            <p className="leading-[16px]">Liv.berg@ksl.no</p>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * @figmaAssetKey 39665ae62b9313ec2145558f106624d5c43668f4
 */
function HelpOutline({ className }: { className?: string }) {
  return (
    <div className={className} data-name="help_outline">
      <div className="absolute inset-[8.333%]" data-name="Vector">
        <img alt="" className="block max-w-none size-full" src={imgVector12} />
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute h-[23.569px] left-0 top-0 w-[78.233px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 79 24">
        <g id="Group 1">
          <path d={svgPaths.pc59adc0} fill="var(--fill-0, #79B61D)" id="Vector" />
          <path d={svgPaths.pb353100} fill="var(--fill-0, #79B61D)" id="Vector_2" />
          <path d={svgPaths.p38a1df00} fill="var(--fill-0, white)" id="Vector_3" />
          <g id="Group">
            <g id="Vector_4"></g>
            <path d={svgPaths.p1f855e00} fill="var(--fill-0, #177312)" id="Vector_5" />
            <path d={svgPaths.pfd51100} fill="var(--fill-0, #008F00)" id="Vector_6" />
            <path d={svgPaths.p3a663072} fill="var(--fill-0, #79B61D)" id="Vector_7" />
            <path d={svgPaths.p38968d00} fill="var(--fill-0, #AFD377)" id="Vector_8" />
            <g id="Vector_9"></g>
          </g>
          <g id="Group_2">
            <path d={svgPaths.pdc27900} fill="var(--fill-0, #79B61D)" id="Vector_10" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute h-[25.3px] left-0 top-[30.38px] w-[92.774px]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 93 26">
        <g id="Group">
          <g id="Group_2">
            <path d={svgPaths.p6ce0c80} fill="var(--fill-0, black)" id="Vector" />
            <path d={svgPaths.p3714de70} fill="var(--fill-0, black)" id="Vector_2" />
            <path d={svgPaths.p1f6d1000} fill="var(--fill-0, black)" id="Vector_3" />
            <path d={svgPaths.p30cda200} fill="var(--fill-0, black)" id="Vector_4" />
            <path d={svgPaths.p2de2ab40} fill="var(--fill-0, black)" id="Vector_5" />
            <path d={svgPaths.p6277170} fill="var(--fill-0, black)" id="Vector_6" />
            <path d={svgPaths.p6b6a670} fill="var(--fill-0, black)" id="Vector_7" />
            <path d={svgPaths.p2f29cd00} fill="var(--fill-0, black)" id="Vector_8" />
            <path d={svgPaths.p3b8dad00} fill="var(--fill-0, black)" id="Vector_9" />
            <path d={svgPaths.p1171c00} fill="var(--fill-0, black)" id="Vector_10" />
            <path d={svgPaths.p2f2cb380} fill="var(--fill-0, black)" id="Vector_11" />
            <path d={svgPaths.p2206be00} fill="var(--fill-0, black)" id="Vector_12" />
            <path d={svgPaths.p38461c00} fill="var(--fill-0, black)" id="Vector_13" />
            <path d={svgPaths.p246bf900} fill="var(--fill-0, black)" id="Vector_14" />
            <path d={svgPaths.p1b7451f0} fill="var(--fill-0, black)" id="Vector_15" />
            <path d={svgPaths.p202c0f40} fill="var(--fill-0, black)" id="Vector_16" />
            <path d={svgPaths.p12a36a00} fill="var(--fill-0, black)" id="Vector_17" />
            <path d={svgPaths.p2eb4d500} fill="var(--fill-0, black)" id="Vector_18" />
            <path d={svgPaths.p271fc640} fill="var(--fill-0, black)" id="Vector_19" />
            <path d={svgPaths.p30cc85e0} fill="var(--fill-0, black)" id="Vector_20" />
            <path d={svgPaths.p203ff100} fill="var(--fill-0, black)" id="Vector_21" />
            <path d={svgPaths.p192a4f00} fill="var(--fill-0, black)" id="Vector_22" />
            <path d={svgPaths.pe8ac500} fill="var(--fill-0, black)" id="Vector_23" />
          </g>
          <path d={svgPaths.p4e31200} fill="var(--fill-0, black)" id="Vector_24" />
          <path d={svgPaths.p2fd93200} fill="var(--fill-0, black)" id="Vector_25" />
          <path d={svgPaths.p3d9831f0} fill="var(--fill-0, black)" id="Vector_26" />
        </g>
      </svg>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents left-0 top-0">
      <Group />
      <Group2 />
    </div>
  );
}

function MainLogo() {
  return (
    <div className="h-[55.677px] relative shrink-0 w-[92.774px]" data-name="Main Logo">
      <Group1 />
    </div>
  );
}

function StateLayer() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center p-[8px] relative shrink-0" data-name="state-layer">
      <HelpOutline className="overflow-clip relative shrink-0 size-[24px]" />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center overflow-clip relative rounded-[100px] shrink-0" data-name="container">
      <StateLayer />
    </div>
  );
}

function TrailingIcon() {
  return (
    <div className="content-stretch flex h-[48px] items-center justify-end relative shrink-0" data-name="trailing-icon">
      <Trailingicon3 />
    </div>
  );
}

function RightSide() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Right Side">
      <TrailingIcon />
      <UserProfile className="content-stretch flex gap-[8px] items-center overflow-clip relative rounded-[8px] shrink-0" />
    </div>
  );
}

function TopbarActions() {
  return (
    <div className="basis-0 content-stretch flex gap-[16px] grow items-center justify-end min-h-px min-w-px relative shrink-0" data-name="Topbar Actions">
      <RightSide />
    </div>
  );
}

function StateLayer1() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-center justify-center opacity-[0.38] px-[24px] py-[16px] relative shrink-0" data-name="State-layer">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[16px] text-nowrap text-white tracking-[0.15px]">
        <p className="leading-[24px] whitespace-pre">Send inn egenrevisjon</p>
      </div>
    </div>
  );
}

function StateLayer2() {
  return (
    <div className="content-stretch flex h-[40px] items-center justify-center relative shrink-0 w-full" data-name="State-layer">
      <Icon35 />
    </div>
  );
}

/**
 * @figmaAssetKey 77d741260dc065faab6ffc6966e947cef12001d1
 */
/**
 * @figmaAssetKey 4d97c69c14d3e43011cc5c14da9d6bc7f0458b04
 */
function TrailingElements() {
  return (
    <div className="content-stretch flex items-center justify-end overflow-clip relative shrink-0" data-name="Trailing elements">
      <Trailingaction3 />
      <Trailingaction1 />
    </div>
  );
}

function Indicator() {
  return (
    <div className="absolute bottom-0 h-[14px] left-0 right-0" data-name="Indicator">
      <div className="absolute bg-[#4a671e] bottom-0 h-[3px] left-[2px] right-[2px] rounded-tl-[100px] rounded-tr-[100px]" data-name="Shape" />
    </div>
  );
}

function TabContents() {
  return (
    <div className="basis-0 box-border content-stretch flex gap-[4px] grow items-center justify-center min-h-px min-w-px overflow-clip px-0 py-[14px] relative shrink-0" data-name="Tab Contents">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#4a671e] text-[14px] text-center text-nowrap tracking-[0.1px]">
        <p className="leading-[20px] whitespace-pre">Tilpass sjekkliste</p>
      </div>
      <Indicator />
    </div>
  );
}

function StateLayer3() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="State-layer">
      <div className="flex flex-col items-center justify-end overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col items-center justify-end px-[16px] py-0 relative size-full">
          <TabContents />
        </div>
      </div>
    </div>
  );
}

function TabContents1() {
  return (
    <div className="basis-0 box-border content-stretch flex gap-[4px] grow items-center justify-center min-h-px min-w-px overflow-clip px-0 py-[14px] relative shrink-0" data-name="Tab Contents">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#44483b] text-[14px] text-center text-nowrap tracking-[0.1px]">
        <p className="leading-[20px] whitespace-pre">Alle spørsmål</p>
      </div>
    </div>
  );
}

function StateLayer4() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="State-layer">
      <div className="flex flex-col items-center justify-end overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col items-center justify-end px-[16px] py-0 relative size-full">
          <TabContents1 />
        </div>
      </div>
    </div>
  );
}

function TabContents2() {
  return (
    <div className="basis-0 box-border content-stretch flex gap-[4px] grow items-center justify-center min-h-px min-w-px overflow-clip px-0 py-[14px] relative shrink-0" data-name="Tab Contents">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#44483b] text-[14px] text-center text-nowrap tracking-[0.1px]">
        <p className="leading-[20px] whitespace-pre">Ubesvarte spørsmål</p>
      </div>
    </div>
  );
}

function StateLayer5() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="State-layer">
      <div className="flex flex-col items-center justify-end overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col items-center justify-end px-[16px] py-0 relative size-full">
          <TabContents2 />
        </div>
      </div>
    </div>
  );
}

function TabContents3() {
  return (
    <div className="basis-0 box-border content-stretch flex gap-[4px] grow items-center justify-center min-h-px min-w-px overflow-clip px-0 py-[14px] relative shrink-0" data-name="Tab Contents">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#44483b] text-[14px] text-center text-nowrap tracking-[0.1px]">
        <p className="leading-[20px] whitespace-pre">Eksternt besvarte</p>
      </div>
    </div>
  );
}

function StateLayer6() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="State-layer">
      <div className="flex flex-col items-center justify-end overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col items-center justify-end px-[16px] py-0 relative size-full">
          <TabContents3 />
        </div>
      </div>
    </div>
  );
}

function TabContents4() {
  return (
    <div className="basis-0 box-border content-stretch flex gap-[4px] grow items-center justify-center min-h-px min-w-px overflow-clip px-0 py-[14px] relative shrink-0" data-name="Tab Contents">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#44483b] text-[14px] text-center text-nowrap tracking-[0.1px]">
        <p className="leading-[20px] whitespace-pre">Dokumentasjonskrav</p>
      </div>
    </div>
  );
}

function StateLayer7() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="State-layer">
      <div className="flex flex-col items-center justify-end overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col items-center justify-end px-[16px] py-0 relative size-full">
          <TabContents4 />
        </div>
      </div>
    </div>
  );
}

function TabContents5() {
  return (
    <div className="basis-0 box-border content-stretch flex gap-[4px] grow items-center justify-center min-h-px min-w-px overflow-clip px-0 py-[14px] relative shrink-0" data-name="Tab Contents">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#44483b] text-[14px] text-center text-nowrap tracking-[0.1px]">
        <p className="leading-[20px] whitespace-pre">Avvik</p>
      </div>
    </div>
  );
}

function StateLayer8() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="State-layer">
      <div className="flex flex-col items-center justify-end overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col items-center justify-end px-[16px] py-0 relative size-full">
          <TabContents5 />
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
          <Tab6 />
        </div>
      </div>
    </div>
  );
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

function StateLayer9() {
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

function StateLayer10() {
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

function ItemList() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[16px] h-full items-start px-[24px] py-[8px] relative shrink-0 w-[400px] z-[3]" data-name="item List">
      <ListitemListItem0Density />
      <ListitemListItem0Density1 />
      <ThemeQuestions />
    </div>
  );
}

function LeadingElement() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Leading element">
      <Error className="relative shrink-0 size-[24px]" />
    </div>
  );
}

function Content9() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] tracking-[0.5px] w-full">
        <p className="leading-[24px]">Sjekk at det er de riktige produksjonene som ligger inne hos deg. Er det feil, rett opp dette før du starter egenrevisjonen.</p>
      </div>
    </div>
  );
}

function StateLayer11() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center justify-center px-[16px] py-[8px] relative size-full">
          <LeadingElement />
          <Content9 />
        </div>
      </div>
    </div>
  );
}

function LeadingElement1() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Leading element">
      <OndemandVideo className="relative shrink-0 size-[24px]" />
    </div>
  );
}

function Content10() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[0px] tracking-[0.5px] w-full">
        <p className="leading-[24px] text-[16px]">
          <span>{`Tips `}</span>
          <a className="[text-decoration-skip-ink:none] [text-underline-position:from-font] cursor-pointer decoration-solid underline" href="https://www.youtube.com/watch?v=Ex-GXubkyHU&t=5s">
            <span className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid font-['Manrope:Regular',sans-serif] font-normal leading-[24px] text-[#1a1c16] text-[16px] tracking-[0.5px]" href="https://www.youtube.com/watch?v=Ex-GXubkyHU&t=5s">
              Forbered deg til egenrevisjonen
            </span>
          </a>
        </p>
      </div>
    </div>
  );
}

function TrailingElement() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="Trailing element">
      <Open_in_new />
    </div>
  );
}

function StateLayer12() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center justify-center px-[16px] py-[8px] relative size-full">
          <LeadingElement1 />
          <Content10 />
          <TrailingElement />
        </div>
      </div>
    </div>
  );
}

function LeadingElement2() {
  return (
    <div className="content-stretch flex h-[64px] items-start relative shrink-0" data-name="Leading element">
      <Error className="relative shrink-0 size-[24px]" />
    </div>
  );
}

function Content11() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] tracking-[0.5px] w-full">
        <p className="leading-[24px]">Ved spørsmål som krever dokumentasjon, du kan enten laste opp et dokument eller du kan skrive inn hva du har gjort eller hvilket fagsystem du benytter (f.eks. «Benytter Skifteplan» til gjødselplanlegging, «egen notatbok» til besøksjournal osv. eller oppdatert leverandørliste for Nyt Norge).</p>
      </div>
    </div>
  );
}

function StateLayer13() {
  return (
    <div className="relative shrink-0 w-full" data-name="state-layer">
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[16px] items-start px-[16px] py-[12px] relative w-full">
          <LeadingElement2 />
          <Content11 />
        </div>
      </div>
    </div>
  );
}

function LeadingElement3() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Leading element">
      <OndemandVideo className="relative shrink-0 size-[24px]" />
    </div>
  );
}

function Content12() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[0px] tracking-[0.5px] w-full">
        <p className="leading-[24px] text-[16px]">
          <span>{`Tips `}</span>
          <a className="[text-decoration-skip-ink:none] [text-underline-position:from-font] cursor-pointer decoration-solid underline" href="https://www.youtube.com/watch?v=yRRvcdUO2ng&t=8s">
            <span className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid font-['Manrope:Regular',sans-serif] font-normal leading-[24px] text-[#1a1c16] text-[16px] tracking-[0.5px]" href="https://www.youtube.com/watch?v=yRRvcdUO2ng&t=8s">
              Slik fyller du ut egenrevisjonen
            </span>
          </a>
        </p>
      </div>
    </div>
  );
}

function TrailingElement1() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="Trailing element">
      <Open_in_new1 />
    </div>
  );
}

function StateLayer14() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center justify-center px-[16px] py-[8px] relative size-full">
          <LeadingElement3 />
          <Content12 />
          <TrailingElement1 />
        </div>
      </div>
    </div>
  );
}

function LeadingElement4() {
  return (
    <div className="content-stretch flex h-[64px] items-start relative shrink-0" data-name="Leading element">
      <Error className="relative shrink-0 size-[24px]" />
    </div>
  );
}

function Content13() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] tracking-[0.5px] w-full">
        <p className="leading-[24px]">Har du et sertifikat/godkjenning som er gyldig flere år kan du laste opp dokumentasjon på dette og bekrefte varighet slik at du ikke trenger å besvare dette spørsmålet før dokumentet har gått ut på dato. (f.eks. Plantevernsertifikat, varme arbeider, sertifisering, HMS-kurs osv.).</p>
      </div>
    </div>
  );
}

function StateLayer15() {
  return (
    <div className="relative shrink-0 w-full" data-name="state-layer">
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[16px] items-start px-[16px] py-[12px] relative w-full">
          <LeadingElement4 />
          <Content13 />
        </div>
      </div>
    </div>
  );
}

function LeadingElement5() {
  return (
    <div className="content-stretch flex h-[64px] items-start relative shrink-0" data-name="Leading element">
      <Error className="relative shrink-0 size-[24px]" />
    </div>
  );
}

function Content14() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] tracking-[0.5px] w-full">
        <p className="leading-[24px]">Les veiledningstekstene på spørsmålet slik at du er klar over hva som kreves for at du kan svare «ja» på det enkelte spørsmålet. Du finner lenker med veiledning og referanse til forskrifter knyttet til hvert spørsmål.</p>
      </div>
    </div>
  );
}

function StateLayer16() {
  return (
    <div className="relative shrink-0 w-full" data-name="state-layer">
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[16px] items-start px-[16px] py-[12px] relative w-full">
          <LeadingElement5 />
          <Content14 />
        </div>
      </div>
    </div>
  );
}

function LeadingElement6() {
  return (
    <div className="content-stretch flex h-[64px] items-start relative shrink-0" data-name="Leading element">
      <Error className="relative shrink-0 size-[24px]" />
    </div>
  );
}

function Content15() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] tracking-[0.5px] w-full">
        <p className="leading-[24px]">Avvik er helt naturlig og noe alle har i større eller mindre grad. Bruk egenrevisjonen til å finne de områdene du ikke helt tilfredsstiller kravene. Sett en frist som gir deg mulighet til å jobbe med problemet, ikke sett for kort tid, ikke sett frister alt for langt fram i tid. Prioriter de viktige områdene.</p>
      </div>
    </div>
  );
}

function StateLayer17() {
  return (
    <div className="relative shrink-0 w-full" data-name="state-layer">
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[16px] items-start px-[16px] py-[12px] relative w-full">
          <LeadingElement6 />
          <Content15 />
        </div>
      </div>
    </div>
  );
}

function LeadingElement7() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Leading element">
      <Error className="relative shrink-0 size-[24px]" />
    </div>
  );
}

function Content16() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] tracking-[0.5px] w-full">
        <p className="leading-[24px]">«ikke aktuelt» er helt greit da det er spørsmål som skal dekke både små og store foretak.</p>
      </div>
    </div>
  );
}

function StateLayer18() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center justify-center px-[16px] py-[8px] relative size-full">
          <LeadingElement7 />
          <Content16 />
        </div>
      </div>
    </div>
  );
}

function LeadingElement8() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Leading element">
      <Error className="relative shrink-0 size-[24px]" />
    </div>
  );
}

function Content17() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] tracking-[0.5px] w-full">
        <p className="leading-[24px]">Du trenger ikke svare på alt samme dag, det som er registrert er lagret til neste gang du logger inn.</p>
      </div>
    </div>
  );
}

function StateLayer19() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center justify-center px-[16px] py-[8px] relative size-full">
          <LeadingElement8 />
          <Content17 />
        </div>
      </div>
    </div>
  );
}

function LeadingElement9() {
  return (
    <div className="content-stretch flex h-[64px] items-start relative shrink-0" data-name="Leading element">
      <Error className="relative shrink-0 size-[24px]" />
    </div>
  );
}

function Content18() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] tracking-[0.5px] w-full">
        <p className="leading-[24px]">Når du er ferdig med alle spørsmålene, husk å sende inn slik at du får registrert at du har gjennomført egenrevisjonen. Dokumentasjon kan skrives ut på forsiden.</p>
      </div>
    </div>
  );
}

function StateLayer20() {
  return (
    <div className="relative shrink-0 w-full" data-name="state-layer">
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[16px] items-start px-[16px] py-[12px] relative w-full">
          <LeadingElement9 />
          <Content18 />
        </div>
      </div>
    </div>
  );
}

function LeadingElement10() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Leading element">
      <Link className="relative shrink-0 size-[24px]" />
    </div>
  );
}

function Content19() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[0px] tracking-[0.5px] w-full">
        <p className="leading-[24px] text-[16px]">
          <span>{`Se også hjelpeskjema og veiledning, `}</span>
          <a className="[text-decoration-skip-ink:none] [text-underline-position:from-font] cursor-pointer decoration-solid underline" href="https://www.ksl.no/no">
            <span className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid font-['Manrope:Regular',sans-serif] font-normal leading-[24px] text-[#1a1c16] text-[16px] tracking-[0.5px]" href="https://www.ksl.no/no">
              velg meny på nettsiden
            </span>
          </a>
        </p>
      </div>
    </div>
  );
}

function TrailingElement2() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="Trailing element">
      <Open_in_new2 />
    </div>
  );
}

function StateLayer21() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center justify-center px-[16px] py-[8px] relative size-full">
          <LeadingElement10 />
          <Content19 />
          <TrailingElement2 />
        </div>
      </div>
    </div>
  );
}

function StateLayer22() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-center justify-center px-[24px] py-[16px] relative shrink-0" data-name="State-layer">
      <Icon36 />
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[16px] text-nowrap text-white tracking-[0.15px]">
        <p className="leading-[24px] whitespace-pre">{`Gå videre til produksjoner `}</p>
      </div>
    </div>
  );
}

/**
 * @figmaAssetKey 77d741260dc065faab6ffc6966e947cef12001d1
 */
function Buttons() {
  return (
    <div className="basis-0 content-stretch flex gap-[16px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Buttons">
      <NextButton />
    </div>
  );
}

function NavigationButtons() {
  return (
    <div className="basis-0 content-stretch flex gap-[16px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Navigation buttons">
      <Buttons />
    </div>
  );
}

function Heading() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading">
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-start justify-center px-[40px] py-[12px] relative w-full">
          <div className="flex flex-col font-['Quatro:Regular',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#1a1c16] text-[22px] w-[min-content]">
            <p className="leading-[28px]">Før du starter med egenrevisjonen</p>
          </div>
          <ListitemListItem0Density2 />
          <ListitemListItem0Density3 />
          <ListitemListItem0Density4 />
          <ListitemListItem0Density5 />
          <ListitemListItem0Density6 />
          <ListitemListItem0Density7 />
          <ListitemListItem0Density8 />
          <ListitemListItem0Density9 />
          <ListitemListItem0Density10 />
          <ListitemListItem0Density11 />
          <ListitemListItem0Density12 />
          <Navigationbuttons />
        </div>
      </div>
    </div>
  );
}

function SelectedItemDetails() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[24px] grow h-full items-center min-h-px min-w-px relative shrink-0 z-[1]" data-name="Selected item details">
      <Heading />
    </div>
  );
}

function CustomizeChecklist() {
  return (
    <div className="basis-0 content-stretch flex grow isolate items-center justify-center min-h-px min-w-px relative shrink-0 w-full" data-name="customize checklist">
      <ItemList />
      <VerticalFullWidth className="content-stretch flex flex-col h-full items-center overflow-clip relative shrink-0 w-px z-[2]" />
      <SelectedItemDetails />
    </div>
  );
}

/**
 * @figmaAssetKey 018728b1034822bfdf88ac9b394e16a4a550b457
 */
/**
 * @figmaAssetKey b016f6a510eebef46377ecdc66da6f98ff296421
 */
function ChecklistContainer() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start min-h-px min-w-px relative shrink-0" data-name="Checklist Container">
      <ChecklistHeading />
      <CustomizeChecklist />
    </div>
  );
}

function ContentContainer() {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0 w-full" data-name="Content Container">
      <ProducerNavigationRail className="bg-white box-border content-stretch cursor-pointer flex flex-col h-full items-start overflow-visible p-0 relative shrink-0" />
      <ChecklistContainer />
    </div>
  );
}

function MainContainer() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0 w-full" data-name="Main Container">
      <TopBar />
      <HorizontalFullWidth className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" />
      <ContentContainer />
    </div>
  );
}

export default function TilpassSjekkliste() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[10px] items-start overflow-clip relative rounded-[16px] shadow-[0px_8px_12px_6px_rgba(0,0,0,0.15),0px_4px_4px_0px_rgba(0,0,0,0.3)] size-full" data-name="Tilpass sjekkliste">
      <MainContainer />
    </div>
  );
}