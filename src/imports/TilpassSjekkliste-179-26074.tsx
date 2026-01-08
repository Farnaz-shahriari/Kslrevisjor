import svgPaths from "./svg-1kswklcu5w";
import { imgIcon, imgDivider, img, img1, imgDivider1, imgIcon1, img2, img3, imgVector, imgVector1, imgVector2, imgLogoMain, imgGroup, imgGroup1, imgVector3, imgVector4, imgVector5, imgVector6, imgMainLogo, imgLogoMain1, imgLogo, imgGroup2, imgGroup3, imgVector7, imgVector8, imgVector9, imgVector10, imgLogo1, imgLogo2, imgGroup4, imgGroup5, imgVector11, imgVector12, imgVector13, imgVector14, imgVector15, img4, img5, imgVector16 } from "./svg-u6hgv";

/**
 * @figmaAssetKey 46169eb7b051436b0d42f9e970c28845bd308a9e
 */
function RadioButtonUnchecked({ className }: { className?: string }) {
  return (
    <div className={className} data-name="radio_button_unchecked">
      <div className="absolute inset-[8.333%]" data-name="icon">
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(26, 28, 22, 1)" } as React.CSSProperties}>
          <img alt="" className="block max-w-none size-full" src={imgIcon} />
        </div>
      </div>
    </div>
  );
}

/**
 * @figmaAssetKey 9fa220653ce368cc18b6d1247037b1584dfaebbe
 */
function BuildingBlocksStateLayer1Enabled({ className }: { className?: string }) {
  return <div className={className} data-name="Building Blocks/state-layer/1. enabled" />;
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

/**
 * @figmaAssetKey f6cacb6cf25d564e77204186f090070131298330
 */
function Pending({ className }: { className?: string }) {
  return (
    <div className={className} data-name="pending">
      <Pending1 />
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
      <Pending2 />
    </div>
  );
}

/**
 * @figmaAssetKey 5345a50996f643634a37cc011c5535783a64d458
 */
function BuildingBlocksStateLayer1Enabled1({ className }: { className?: string }) {
  return <div className={className} data-name="Building Blocks/state-layer/1. enabled" />;
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

/**
 * @figmaAssetKey bd6413481386c99d2157f176c8dbb57dfd6ec17e
 */
function Stars({ className }: { className?: string }) {
  return (
    <div className={className} data-name="stars">
      <div className="absolute inset-[8.333%]" data-name="icon">
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(29, 27, 32, 1)" } as React.CSSProperties}>
          <img alt="" className="block max-w-none size-full" src={imgIcon1} />
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
        <Content9 />
      </div>
    );
  }
  if (type === "Square" && size === "XLarge" && style === "Standard" && width === "Default") {
    return (
      <div className={className} data-name="Type=Square, Size=XLarge, Style=Standard, Width=Default">
        <Content10 />
      </div>
    );
  }
  if (type === "Square" && size === "XLarge" && style === "Standard" && width === "Narrow") {
    return (
      <div className={className} data-name="Type=Square, Size=XLarge, Style=Standard, Width=Narrow">
        <Content11 />
      </div>
    );
  }
  if (type === "Square" && size === "Large" && style === "Standard" && width === "Wide") {
    return (
      <div className={className} data-name="Type=Square, Size=Large, Style=Standard, Width=Wide">
        <Content12 />
      </div>
    );
  }
  if (type === "Square" && size === "Large" && style === "Standard" && width === "Default") {
    return (
      <div className={className} data-name="Type=Square, Size=Large, Style=Standard, Width=Default">
        <Content13 />
      </div>
    );
  }
  if (type === "Square" && size === "Large" && style === "Standard" && width === "Narrow") {
    return (
      <div className={className} data-name="Type=Square, Size=Large, Style=Standard, Width=Narrow">
        <Content14 />
      </div>
    );
  }
  if (type === "Square" && size === "Medium" && style === "Standard" && width === "Wide") {
    return (
      <div className={className} data-name="Type=Square, Size=Medium, Style=Standard, Width=Wide">
        <Content15 />
      </div>
    );
  }
  if (type === "Square" && size === "Medium" && style === "Standard" && width === "Default") {
    return (
      <div className={className} data-name="Type=Square, Size=Medium, Style=Standard, Width=Default">
        <Content16 />
      </div>
    );
  }
  if (type === "Square" && size === "Medium" && style === "Standard" && width === "Narrow") {
    return (
      <div className={className} data-name="Type=Square, Size=Medium, Style=Standard, Width=Narrow">
        <Content17 />
      </div>
    );
  }
  if (type === "Square" && size === "Small" && style === "Standard" && width === "Wide") {
    return (
      <div className={className} data-name="Type=Square, Size=Small, Style=Standard, Width=Wide">
        <Content18 />
      </div>
    );
  }
  if (type === "Square" && size === "Small" && style === "Standard" && width === "Default") {
    return (
      <div className={className} data-name="Type=Square, Size=Small, Style=Standard, Width=Default">
        <Content19 />
      </div>
    );
  }
  if (type === "Square" && size === "Small" && style === "Standard" && width === "Narrow") {
    return (
      <div className={className} data-name="Type=Square, Size=Small, Style=Standard, Width=Narrow">
        <Content20 />
      </div>
    );
  }
  if (type === "Square" && size === "XSmall" && style === "Standard" && width === "Wide") {
    return (
      <div className={className} data-name="Type=Square, Size=XSmall, Style=Standard, Width=Wide">
        <Content21 />
      </div>
    );
  }
  if (type === "Square" && size === "XSmall" && style === "Standard" && width === "Default") {
    return (
      <div className={className} data-name="Type=Square, Size=XSmall, Style=Standard, Width=Default">
        <Content22 />
      </div>
    );
  }
  if (type === "Square" && size === "XSmall" && style === "Standard" && width === "Narrow") {
    return (
      <div className={className} data-name="Type=Square, Size=XSmall, Style=Standard, Width=Narrow">
        <Content23 />
      </div>
    );
  }
  if (type === "Round" && size === "XLarge" && style === "Standard" && width === "Wide") {
    return (
      <div className={className} data-name="Type=Round, Size=XLarge, Style=Standard, Width=Wide">
        <Content24 />
      </div>
    );
  }
  if (type === "Round" && size === "XLarge" && style === "Standard" && width === "Default") {
    return (
      <div className={className} data-name="Type=Round, Size=XLarge, Style=Standard, Width=Default">
        <Content25 />
      </div>
    );
  }
  if (type === "Round" && size === "XLarge" && style === "Standard" && width === "Narrow") {
    return (
      <div className={className} data-name="Type=Round, Size=XLarge, Style=Standard, Width=Narrow">
        <Content26 />
      </div>
    );
  }
  if (type === "Round" && size === "Large" && style === "Standard" && width === "Wide") {
    return (
      <div className={className} data-name="Type=Round, Size=Large, Style=Standard, Width=Wide">
        <Content27 />
      </div>
    );
  }
  if (type === "Round" && size === "Large" && style === "Standard" && width === "Default") {
    return (
      <div className={className} data-name="Type=Round, Size=Large, Style=Standard, Width=Default">
        <Content28 />
      </div>
    );
  }
  if (type === "Round" && size === "Large" && style === "Standard" && width === "Narrow") {
    return (
      <div className={className} data-name="Type=Round, Size=Large, Style=Standard, Width=Narrow">
        <Content29 />
      </div>
    );
  }
  if (type === "Round" && size === "Medium" && style === "Standard" && width === "Wide") {
    return (
      <div className={className} data-name="Type=Round, Size=Medium, Style=Standard, Width=Wide">
        <Content30 />
      </div>
    );
  }
  if (type === "Round" && size === "Medium" && style === "Standard" && width === "Default") {
    return (
      <div className={className} data-name="Type=Round, Size=Medium, Style=Standard, Width=Default">
        <Content31 />
      </div>
    );
  }
  if (type === "Round" && size === "Medium" && style === "Standard" && width === "Narrow") {
    return (
      <div className={className} data-name="Type=Round, Size=Medium, Style=Standard, Width=Narrow">
        <Content32 />
      </div>
    );
  }
  if (type === "Round" && size === "Small" && style === "Standard" && width === "Wide") {
    return (
      <div className={className} data-name="Type=Round, Size=Small, Style=Standard, Width=Wide">
        <Content33 />
      </div>
    );
  }
  if (type === "Round" && size === "Small" && style === "Standard" && width === "Default") {
    return (
      <div className={className} data-name="Type=Round, Size=Small, Style=Standard, Width=Default">
        <Content34 />
      </div>
    );
  }
  if (type === "Round" && size === "Small" && style === "Standard" && width === "Narrow") {
    return (
      <div className={className} data-name="Type=Round, Size=Small, Style=Standard, Width=Narrow">
        <Content35 />
      </div>
    );
  }
  if (type === "Round" && size === "XSmall" && style === "Standard" && width === "Wide") {
    return (
      <div className={className} data-name="Type=Round, Size=XSmall, Style=Standard, Width=Wide">
        <Content36 />
      </div>
    );
  }
  if (type === "Round" && size === "XSmall" && style === "Standard" && width === "Default") {
    return (
      <div className={className} data-name="Type=Round, Size=XSmall, Style=Standard, Width=Default">
        <Content37 />
      </div>
    );
  }
  if (type === "Round" && size === "XSmall" && style === "Standard" && width === "Narrow") {
    return (
      <div className={className} data-name="Type=Round, Size=XSmall, Style=Standard, Width=Narrow">
        <Content38 />
      </div>
    );
  }
  if (type === "Square" && size === "XLarge" && style === "Outline" && width === "Wide") {
    return (
      <div className={className} data-name="Type=Square, Size=XLarge, Style=Outline, Width=Wide">
        <Content39 />
      </div>
    );
  }
  if (type === "Square" && size === "XLarge" && style === "Outline" && width === "Default") {
    return (
      <div className={className} data-name="Type=Square, Size=XLarge, Style=Outline, Width=Default">
        <Content40 />
      </div>
    );
  }
  if (type === "Square" && size === "XLarge" && style === "Outline" && width === "Narrow") {
    return (
      <div className={className} data-name="Type=Square, Size=XLarge, Style=Outline, Width=Narrow">
        <Content41 />
      </div>
    );
  }
  if (type === "Square" && size === "Large" && style === "Outline" && width === "Wide") {
    return (
      <div className={className} data-name="Type=Square, Size=Large, Style=Outline, Width=Wide">
        <Content42 />
      </div>
    );
  }
  if (type === "Square" && size === "Large" && style === "Outline" && width === "Default") {
    return (
      <div className={className} data-name="Type=Square, Size=Large, Style=Outline, Width=Default">
        <Content43 />
      </div>
    );
  }
  if (type === "Square" && size === "Large" && style === "Outline" && width === "Narrow") {
    return (
      <div className={className} data-name="Type=Square, Size=Large, Style=Outline, Width=Narrow">
        <Content44 />
      </div>
    );
  }
  if (type === "Square" && size === "Medium" && style === "Outline" && width === "Wide") {
    return (
      <div className={className} data-name="Type=Square, Size=Medium, Style=Outline, Width=Wide">
        <Content45 />
      </div>
    );
  }
  if (type === "Square" && size === "Medium" && style === "Outline" && width === "Default") {
    return (
      <div className={className} data-name="Type=Square, Size=Medium, Style=Outline, Width=Default">
        <Content46 />
      </div>
    );
  }
  if (type === "Square" && size === "Medium" && style === "Outline" && width === "Narrow") {
    return (
      <div className={className} data-name="Type=Square, Size=Medium, Style=Outline, Width=Narrow">
        <Content47 />
      </div>
    );
  }
  if (type === "Square" && size === "Small" && style === "Outline" && width === "Wide") {
    return (
      <div className={className} data-name="Type=Square, Size=Small, Style=Outline, Width=Wide">
        <Content48 />
      </div>
    );
  }
  if (type === "Square" && size === "Small" && style === "Outline" && width === "Default") {
    return (
      <div className={className} data-name="Type=Square, Size=Small, Style=Outline, Width=Default">
        <Content49 />
      </div>
    );
  }
  if (type === "Square" && size === "Small" && style === "Outline" && width === "Narrow") {
    return (
      <div className={className} data-name="Type=Square, Size=Small, Style=Outline, Width=Narrow">
        <Content50 />
      </div>
    );
  }
  if (type === "Square" && size === "XSmall" && style === "Outline" && width === "Wide") {
    return (
      <div className={className} data-name="Type=Square, Size=XSmall, Style=Outline, Width=Wide">
        <Content51 />
      </div>
    );
  }
  if (type === "Square" && size === "XSmall" && style === "Outline" && width === "Default") {
    return (
      <div className={className} data-name="Type=Square, Size=XSmall, Style=Outline, Width=Default">
        <Content52 />
      </div>
    );
  }
  if (type === "Square" && size === "XSmall" && style === "Outline" && width === "Narrow") {
    return (
      <div className={className} data-name="Type=Square, Size=XSmall, Style=Outline, Width=Narrow">
        <Content53 />
      </div>
    );
  }
  if (type === "Round" && size === "XLarge" && style === "Outline" && width === "Wide") {
    return (
      <div className={className} data-name="Type=Round, Size=XLarge, Style=Outline, Width=Wide">
        <Content54 />
      </div>
    );
  }
  if (type === "Round" && size === "XLarge" && style === "Outline" && width === "Default") {
    return (
      <div className={className} data-name="Type=Round, Size=XLarge, Style=Outline, Width=Default">
        <Content55 />
      </div>
    );
  }
  if (type === "Round" && size === "XLarge" && style === "Outline" && width === "Narrow") {
    return (
      <div className={className} data-name="Type=Round, Size=XLarge, Style=Outline, Width=Narrow">
        <Content56 />
      </div>
    );
  }
  if (type === "Round" && size === "Large" && style === "Outline" && width === "Wide") {
    return (
      <div className={className} data-name="Type=Round, Size=Large, Style=Outline, Width=Wide">
        <Content57 />
      </div>
    );
  }
  if (type === "Round" && size === "Large" && style === "Outline" && width === "Default") {
    return (
      <div className={className} data-name="Type=Round, Size=Large, Style=Outline, Width=Default">
        <Content58 />
      </div>
    );
  }
  if (type === "Round" && size === "Large" && style === "Outline" && width === "Narrow") {
    return (
      <div className={className} data-name="Type=Round, Size=Large, Style=Outline, Width=Narrow">
        <Content59 />
      </div>
    );
  }
  if (type === "Round" && size === "Medium" && style === "Outline" && width === "Wide") {
    return (
      <div className={className} data-name="Type=Round, Size=Medium, Style=Outline, Width=Wide">
        <Content60 />
      </div>
    );
  }
  if (type === "Round" && size === "Medium" && style === "Outline" && width === "Default") {
    return (
      <div className={className} data-name="Type=Round, Size=Medium, Style=Outline, Width=Default">
        <Content61 />
      </div>
    );
  }
  if (type === "Round" && size === "Medium" && style === "Outline" && width === "Narrow") {
    return (
      <div className={className} data-name="Type=Round, Size=Medium, Style=Outline, Width=Narrow">
        <Content62 />
      </div>
    );
  }
  if (type === "Round" && size === "Small" && style === "Outline" && width === "Wide") {
    return (
      <div className={className} data-name="Type=Round, Size=Small, Style=Outline, Width=Wide">
        <Content63 />
      </div>
    );
  }
  if (type === "Round" && size === "Small" && style === "Outline" && width === "Default") {
    return (
      <div className={className} data-name="Type=Round, Size=Small, Style=Outline, Width=Default">
        <Content64 />
      </div>
    );
  }
  if (type === "Round" && size === "Small" && style === "Outline" && width === "Narrow") {
    return (
      <div className={className} data-name="Type=Round, Size=Small, Style=Outline, Width=Narrow">
        <Content65 />
      </div>
    );
  }
  if (type === "Round" && size === "XSmall" && style === "Outline" && width === "Wide") {
    return (
      <div className={className} data-name="Type=Round, Size=XSmall, Style=Outline, Width=Wide">
        <Content66 />
      </div>
    );
  }
  if (type === "Round" && size === "XSmall" && style === "Outline" && width === "Default") {
    return (
      <div className={className} data-name="Type=Round, Size=XSmall, Style=Outline, Width=Default">
        <Content67 />
      </div>
    );
  }
  if (type === "Round" && size === "XSmall" && style === "Outline" && width === "Narrow") {
    return (
      <div className={className} data-name="Type=Round, Size=XSmall, Style=Outline, Width=Narrow">
        <Content68 />
      </div>
    );
  }
  if (type === "Square" && size === "XLarge" && style === "Tonal" && width === "Wide") {
    return (
      <div className={className} data-name="Type=Square, Size=XLarge, Style=Tonal, Width=Wide">
        <Content69 />
      </div>
    );
  }
  if (type === "Square" && size === "XLarge" && style === "Tonal" && width === "Default") {
    return (
      <div className={className} data-name="Type=Square, Size=XLarge, Style=Tonal, Width=Default">
        <Content70 />
      </div>
    );
  }
  if (type === "Square" && size === "XLarge" && style === "Tonal" && width === "Narrow") {
    return (
      <div className={className} data-name="Type=Square, Size=XLarge, Style=Tonal, Width=Narrow">
        <Content71 />
      </div>
    );
  }
  if (type === "Square" && size === "Large" && style === "Tonal" && width === "Wide") {
    return (
      <div className={className} data-name="Type=Square, Size=Large, Style=Tonal, Width=Wide">
        <Content72 />
      </div>
    );
  }
  if (type === "Square" && size === "Large" && style === "Tonal" && width === "Default") {
    return (
      <div className={className} data-name="Type=Square, Size=Large, Style=Tonal, Width=Default">
        <Content73 />
      </div>
    );
  }
  if (type === "Square" && size === "Large" && style === "Tonal" && width === "Narrow") {
    return (
      <div className={className} data-name="Type=Square, Size=Large, Style=Tonal, Width=Narrow">
        <Content74 />
      </div>
    );
  }
  if (type === "Square" && size === "Medium" && style === "Tonal" && width === "Wide") {
    return (
      <div className={className} data-name="Type=Square, Size=Medium, Style=Tonal, Width=Wide">
        <Content75 />
      </div>
    );
  }
  if (type === "Square" && size === "Medium" && style === "Tonal" && width === "Default") {
    return (
      <div className={className} data-name="Type=Square, Size=Medium, Style=Tonal, Width=Default">
        <Content76 />
      </div>
    );
  }
  if (type === "Square" && size === "Medium" && style === "Tonal" && width === "Narrow") {
    return (
      <div className={className} data-name="Type=Square, Size=Medium, Style=Tonal, Width=Narrow">
        <Content77 />
      </div>
    );
  }
  if (type === "Square" && size === "Small" && style === "Tonal" && width === "Wide") {
    return (
      <div className={className} data-name="Type=Square, Size=Small, Style=Tonal, Width=Wide">
        <Content78 />
      </div>
    );
  }
  if (type === "Square" && size === "Small" && style === "Tonal" && width === "Default") {
    return (
      <div className={className} data-name="Type=Square, Size=Small, Style=Tonal, Width=Default">
        <Content79 />
      </div>
    );
  }
  if (type === "Square" && size === "Small" && style === "Tonal" && width === "Narrow") {
    return (
      <div className={className} data-name="Type=Square, Size=Small, Style=Tonal, Width=Narrow">
        <Content80 />
      </div>
    );
  }
  if (type === "Square" && size === "XSmall" && style === "Tonal" && width === "Wide") {
    return (
      <div className={className} data-name="Type=Square, Size=XSmall, Style=Tonal, Width=Wide">
        <Content81 />
      </div>
    );
  }
  if (type === "Square" && size === "XSmall" && style === "Tonal" && width === "Default") {
    return (
      <div className={className} data-name="Type=Square, Size=XSmall, Style=Tonal, Width=Default">
        <Content82 />
      </div>
    );
  }
  if (type === "Square" && size === "XSmall" && style === "Tonal" && width === "Narrow") {
    return (
      <div className={className} data-name="Type=Square, Size=XSmall, Style=Tonal, Width=Narrow">
        <Content83 />
      </div>
    );
  }
  if (type === "Round" && size === "XLarge" && style === "Tonal" && width === "Wide") {
    return (
      <div className={className} data-name="Type=Round, Size=XLarge, Style=Tonal, Width=Wide">
        <Content84 />
      </div>
    );
  }
  if (type === "Round" && size === "XLarge" && style === "Tonal" && width === "Default") {
    return (
      <div className={className} data-name="Type=Round, Size=XLarge, Style=Tonal, Width=Default">
        <Content85 />
      </div>
    );
  }
  if (type === "Round" && size === "XLarge" && style === "Tonal" && width === "Narrow") {
    return (
      <div className={className} data-name="Type=Round, Size=XLarge, Style=Tonal, Width=Narrow">
        <Content86 />
      </div>
    );
  }
  if (type === "Round" && size === "Large" && style === "Tonal" && width === "Wide") {
    return (
      <div className={className} data-name="Type=Round, Size=Large, Style=Tonal, Width=Wide">
        <Content87 />
      </div>
    );
  }
  if (type === "Round" && size === "Large" && style === "Tonal" && width === "Default") {
    return (
      <div className={className} data-name="Type=Round, Size=Large, Style=Tonal, Width=Default">
        <Content88 />
      </div>
    );
  }
  if (type === "Round" && size === "Large" && style === "Tonal" && width === "Narrow") {
    return (
      <div className={className} data-name="Type=Round, Size=Large, Style=Tonal, Width=Narrow">
        <Content89 />
      </div>
    );
  }
  if (type === "Round" && size === "Medium" && style === "Tonal" && width === "Wide") {
    return (
      <div className={className} data-name="Type=Round, Size=Medium, Style=Tonal, Width=Wide">
        <Content90 />
      </div>
    );
  }
  if (type === "Round" && size === "Medium" && style === "Tonal" && width === "Default") {
    return (
      <div className={className} data-name="Type=Round, Size=Medium, Style=Tonal, Width=Default">
        <Content91 />
      </div>
    );
  }
  if (type === "Round" && size === "Medium" && style === "Tonal" && width === "Narrow") {
    return (
      <div className={className} data-name="Type=Round, Size=Medium, Style=Tonal, Width=Narrow">
        <Content92 />
      </div>
    );
  }
  if (type === "Round" && size === "Small" && style === "Tonal" && width === "Wide") {
    return (
      <div className={className} data-name="Type=Round, Size=Small, Style=Tonal, Width=Wide">
        <Content93 />
      </div>
    );
  }
  if (type === "Round" && size === "Small" && style === "Tonal" && width === "Default") {
    return (
      <div className={className} data-name="Type=Round, Size=Small, Style=Tonal, Width=Default">
        <Content94 />
      </div>
    );
  }
  if (type === "Round" && size === "Small" && style === "Tonal" && width === "Narrow") {
    return (
      <div className={className} data-name="Type=Round, Size=Small, Style=Tonal, Width=Narrow">
        <Content95 />
      </div>
    );
  }
  if (type === "Round" && size === "XSmall" && style === "Tonal" && width === "Wide") {
    return (
      <div className={className} data-name="Type=Round, Size=XSmall, Style=Tonal, Width=Wide">
        <Content96 />
      </div>
    );
  }
  if (type === "Round" && size === "XSmall" && style === "Tonal" && width === "Default") {
    return (
      <div className={className} data-name="Type=Round, Size=XSmall, Style=Tonal, Width=Default">
        <Content97 />
      </div>
    );
  }
  if (type === "Round" && size === "XSmall" && style === "Tonal" && width === "Narrow") {
    return (
      <div className={className} data-name="Type=Round, Size=XSmall, Style=Tonal, Width=Narrow">
        <Content98 />
      </div>
    );
  }
  if (type === "Square" && size === "XLarge" && style === "Filled" && width === "Wide") {
    return (
      <div className={className} data-name="Type=Square, Size=XLarge, Style=Filled, Width=Wide">
        <Content99 />
      </div>
    );
  }
  if (type === "Square" && size === "XLarge" && style === "Filled" && width === "Default") {
    return (
      <div className={className} data-name="Type=Square, Size=XLarge, Style=Filled, Width=Default">
        <Content100 />
      </div>
    );
  }
  if (type === "Square" && size === "XLarge" && style === "Filled" && width === "Narrow") {
    return (
      <div className={className} data-name="Type=Square, Size=XLarge, Style=Filled, Width=Narrow">
        <Content101 />
      </div>
    );
  }
  if (type === "Square" && size === "Large" && style === "Filled" && width === "Wide") {
    return (
      <div className={className} data-name="Type=Square, Size=Large, Style=Filled, Width=Wide">
        <Content102 />
      </div>
    );
  }
  if (type === "Square" && size === "Large" && style === "Filled" && width === "Default") {
    return (
      <div className={className} data-name="Type=Square, Size=Large, Style=Filled, Width=Default">
        <Content103 />
      </div>
    );
  }
  if (type === "Square" && size === "Large" && style === "Filled" && width === "Narrow") {
    return (
      <div className={className} data-name="Type=Square, Size=Large, Style=Filled, Width=Narrow">
        <Content104 />
      </div>
    );
  }
  if (type === "Square" && size === "Medium" && style === "Filled" && width === "Wide") {
    return (
      <div className={className} data-name="Type=Square, Size=Medium, Style=Filled, Width=Wide">
        <Content105 />
      </div>
    );
  }
  if (type === "Square" && size === "Medium" && style === "Filled" && width === "Default") {
    return (
      <div className={className} data-name="Type=Square, Size=Medium, Style=Filled, Width=Default">
        <Content106 />
      </div>
    );
  }
  if (type === "Square" && size === "Medium" && style === "Filled" && width === "Narrow") {
    return (
      <div className={className} data-name="Type=Square, Size=Medium, Style=Filled, Width=Narrow">
        <Content107 />
      </div>
    );
  }
  if (type === "Square" && size === "Small" && style === "Filled" && width === "Wide") {
    return (
      <div className={className} data-name="Type=Square, Size=Small, Style=Filled, Width=Wide">
        <Content108 />
      </div>
    );
  }
  if (type === "Square" && size === "Small" && style === "Filled" && width === "Default") {
    return (
      <div className={className} data-name="Type=Square, Size=Small, Style=Filled, Width=Default">
        <Content109 />
      </div>
    );
  }
  if (type === "Square" && size === "Small" && style === "Filled" && width === "Narrow") {
    return (
      <div className={className} data-name="Type=Square, Size=Small, Style=Filled, Width=Narrow">
        <Content110 />
      </div>
    );
  }
  if (type === "Square" && size === "XSmall" && style === "Filled" && width === "Wide") {
    return (
      <div className={className} data-name="Type=Square, Size=XSmall, Style=Filled, Width=Wide">
        <Content111 />
      </div>
    );
  }
  if (type === "Square" && size === "XSmall" && style === "Filled" && width === "Default") {
    return (
      <div className={className} data-name="Type=Square, Size=XSmall, Style=Filled, Width=Default">
        <Content112 />
      </div>
    );
  }
  if (type === "Square" && size === "XSmall" && style === "Filled" && width === "Narrow") {
    return (
      <div className={className} data-name="Type=Square, Size=XSmall, Style=Filled, Width=Narrow">
        <Content113 />
      </div>
    );
  }
  if (type === "Round" && size === "XLarge" && style === "Filled" && width === "Wide") {
    return (
      <div className={className} data-name="Type=Round, Size=XLarge, Style=Filled, Width=Wide">
        <Content114 />
      </div>
    );
  }
  if (type === "Round" && size === "XLarge" && style === "Filled" && width === "Default") {
    return (
      <div className={className} data-name="Type=Round, Size=XLarge, Style=Filled, Width=Default">
        <Content115 />
      </div>
    );
  }
  if (type === "Round" && size === "XLarge" && style === "Filled" && width === "Narrow") {
    return (
      <div className={className} data-name="Type=Round, Size=XLarge, Style=Filled, Width=Narrow">
        <Content116 />
      </div>
    );
  }
  if (type === "Round" && size === "Large" && style === "Filled" && width === "Wide") {
    return (
      <div className={className} data-name="Type=Round, Size=Large, Style=Filled, Width=Wide">
        <Content117 />
      </div>
    );
  }
  if (type === "Round" && size === "Large" && style === "Filled" && width === "Default") {
    return (
      <div className={className} data-name="Type=Round, Size=Large, Style=Filled, Width=Default">
        <Content118 />
      </div>
    );
  }
  if (type === "Round" && size === "Large" && style === "Filled" && width === "Narrow") {
    return (
      <div className={className} data-name="Type=Round, Size=Large, Style=Filled, Width=Narrow">
        <Content119 />
      </div>
    );
  }
  if (type === "Round" && size === "Medium" && style === "Filled" && width === "Wide") {
    return (
      <div className={className} data-name="Type=Round, Size=Medium, Style=Filled, Width=Wide">
        <Content120 />
      </div>
    );
  }
  if (type === "Round" && size === "Medium" && style === "Filled" && width === "Default") {
    return (
      <div className={className} data-name="Type=Round, Size=Medium, Style=Filled, Width=Default">
        <Content121 />
      </div>
    );
  }
  if (type === "Round" && size === "Medium" && style === "Filled" && width === "Narrow") {
    return (
      <div className={className} data-name="Type=Round, Size=Medium, Style=Filled, Width=Narrow">
        <Content122 />
      </div>
    );
  }
  if (type === "Round" && size === "Small" && style === "Filled" && width === "Wide") {
    return (
      <div className={className} data-name="Type=Round, Size=Small, Style=Filled, Width=Wide">
        <Content123 />
      </div>
    );
  }
  if (type === "Round" && size === "Small" && style === "Filled" && width === "Default") {
    return (
      <div className={className} data-name="Type=Round, Size=Small, Style=Filled, Width=Default">
        <Content124 />
      </div>
    );
  }
  if (type === "Round" && size === "Small" && style === "Filled" && width === "Narrow") {
    return (
      <div className={className} data-name="Type=Round, Size=Small, Style=Filled, Width=Narrow">
        <Content125 />
      </div>
    );
  }
  if (type === "Round" && size === "XSmall" && style === "Filled" && width === "Wide") {
    return (
      <div className={className} data-name="Type=Round, Size=XSmall, Style=Filled, Width=Wide">
        <Content126 />
      </div>
    );
  }
  if (type === "Round" && size === "XSmall" && style === "Filled" && width === "Default") {
    return (
      <div className={className} data-name="Type=Round, Size=XSmall, Style=Filled, Width=Default">
        <Content127 />
      </div>
    );
  }
  return (
    <div className={className} data-name="Type=Round, Size=XSmall, Style=Filled, Width=Narrow">
      <Content128 />
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
type LogoProps = {
  className?: string;
  type?: "KSL" | "Lokalmat.no LOGO" | "NorskMat" | "Nyt Norge" | "Spesialitet";
  background?: "Default" | "White" | "Color";
  size?: "Default" | "Big";
};

/**
 * @figmaAssetKey 419372e4d8fb19de962b73aeccb0339b113ed479
 */
function Logo({ className, type = "KSL", background = "White", size = "Big" }: LogoProps) {
  if (type === "KSL" && background === "Default" && size === "Default") {
    return (
      <div className={className} data-name="Type=KSL, Background=Default, Size=Default">
        <div className="h-[21px] relative shrink-0 w-[69.695px]" data-name="Logo">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 70 21">
            <g id="Logo">
              <path d={svgPaths.p364d3200} fill="var(--fill-0, #79B61D)" id="Vector" />
              <path d={svgPaths.p186c1d80} fill="var(--fill-0, #79B61D)" id="Vector_2" />
              <g id="Group">
                <g id="Vector_3"></g>
                <path d={svgPaths.p27396200} fill="var(--fill-0, #177312)" id="Vector_4" />
                <path d={svgPaths.p1b7dcb00} fill="var(--fill-0, #008F00)" id="Vector_5" />
                <path d={svgPaths.p242e0980} fill="var(--fill-0, #79B61D)" id="Vector_6" />
                <path d={svgPaths.pf608572} fill="var(--fill-0, #AFD377)" id="Vector_7" />
                <g id="Vector_8"></g>
              </g>
              <g id="Group_2">
                <path d={svgPaths.p16848380} fill="var(--fill-0, #79B61D)" id="Vector_9" />
              </g>
            </g>
          </svg>
        </div>
      </div>
    );
  }
  if (type === "Spesialitet" && background === "White" && size === "Big") {
    return (
      <div className={className} data-name="Type=Spesialitet, Background=White, Size=Big">
        <div className="h-[104px] relative shrink-0 w-[93.788px]" data-name="Logo Main">
          <img alt="" className="block max-w-none size-full" src={imgLogoMain} />
        </div>
      </div>
    );
  }
  if (type === "Nyt Norge" && background === "White" && size === "Big") {
    return (
      <div className={className} data-name="Type=Nyt Norge, Background=White, Size=Big">
        <div className="h-[104px] relative shrink-0 w-[93.254px]" data-name="Logo Main">
          <div className="absolute contents inset-0" data-name="Logo Main">
            <div className="absolute contents inset-0" data-name="Clip path group">
              <div className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px] mask-size-[93.254px_104px]" data-name="Group" style={{ maskImage: `url('${imgGroup}')` }}>
                <img alt="" className="block max-w-none size-full" src={imgGroup1} />
              </div>
            </div>
            <div className="absolute inset-[12.77%_12.09%_63.39%_68.93%]" data-name="Vector">
              <img alt="" className="block max-w-none size-full" src={imgVector3} />
            </div>
            <div className="absolute inset-[12.8%_33.99%_63.46%_41.37%]" data-name="Vector">
              <img alt="" className="block max-w-none size-full" src={imgVector4} />
            </div>
            <div className="absolute inset-[66.18%_75.07%_6.34%_7.08%]" data-name="Vector">
              <img alt="" className="block max-w-none size-full" src={imgVector5} />
            </div>
            <div className="absolute inset-[66.18%_59.48%_6.34%_31.47%]" data-name="Vector">
              <img alt="" className="block max-w-none size-full" src={imgVector6} />
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (type === "Lokalmat.no LOGO" && background === "White" && size === "Big") {
    return (
      <div className={className} data-name="Type=Lokalmat.no LOGO, Background=White, Size=Big">
        <div className="h-[36.925px] relative shrink-0 w-[187.216px]" data-name="Main Logo">
          <img alt="" className="block max-w-none size-full" src={imgMainLogo} />
        </div>
      </div>
    );
  }
  if (type === "Nyt Norge" && background === "Color" && size === "Big") {
    return (
      <div className={className} data-name="Type=Nyt Norge, Background=Color, Size=Big">
        <div className="h-[90.401px] relative shrink-0 w-[81px]" data-name="Logo Main">
          <img alt="" className="block max-w-none size-full" src={imgLogoMain1} />
        </div>
      </div>
    );
  }
  if (type === "NorskMat" && background === "Default" && size === "Default") {
    return (
      <div className={className} data-name="Type=NorskMat, Background=Default, Size=Default">
        <div className="h-[32px] relative shrink-0 w-[80.786px]" data-name="Logo">
          <img alt="" className="block max-w-none size-full" src={imgLogo} />
        </div>
      </div>
    );
  }
  if (type === "Nyt Norge" && background === "Default" && size === "Default") {
    return (
      <div className={className} data-name="Type=Nyt Norge, Background=Default, Size=Default">
        <div className="h-[48px] overflow-clip relative shrink-0 w-[43.005px]" data-name="nytnorge_utenomriss_rgb 1">
          <div className="absolute contents inset-0" data-name="Layer 2">
            <div className="absolute contents inset-0" data-name="Layer 1">
              <div className="absolute contents inset-0" data-name="Clip path group">
                <div className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px] mask-size-[43.005px_48px]" data-name="Group" style={{ maskImage: `url('${imgGroup2}')` }}>
                  <img alt="" className="block max-w-none size-full" src={imgGroup3} />
                </div>
              </div>
              <div className="absolute inset-[12.52%_11.81%_63.47%_69.08%]" data-name="Vector">
                <img alt="" className="block max-w-none size-full" src={imgVector7} />
              </div>
              <div className="absolute inset-[12.55%_33.88%_63.56%_41.31%]" data-name="Vector">
                <img alt="" className="block max-w-none size-full" src={imgVector8} />
              </div>
              <div className="absolute inset-[66.28%_75.24%_6.07%_6.77%]" data-name="Vector">
                <img alt="" className="block max-w-none size-full" src={imgVector9} />
              </div>
              <div className="absolute inset-[66.28%_59.55%_6.07%_31.33%]" data-name="Vector">
                <img alt="" className="block max-w-none size-full" src={imgVector10} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (type === "Lokalmat.no LOGO" && background === "Default" && size === "Default") {
    return (
      <div className={className} data-name="Type=Lokalmat.no LOGO, Background=Default, Size=Default">
        <div className="h-[20.367px] relative shrink-0 w-[103.262px]" data-name="Logo">
          <img alt="" className="block max-w-none size-full" src={imgLogo1} />
        </div>
      </div>
    );
  }
  if (type === "Spesialitet" && background === "Default" && size === "Default") {
    return (
      <div className={className} data-name="Type=Spesialitet, Background=Default, Size=Default">
        <div className="h-[48.489px] relative shrink-0 w-[43.728px]" data-name="Logo">
          <img alt="" className="block max-w-none size-full" src={imgLogo2} />
        </div>
      </div>
    );
  }
  return (
    <div className={className} data-name="Type=KSL, Background=White, Size=Big">
      <div className="h-[104px] relative shrink-0 w-[173.293px]" data-name="Main Logo">
        <div className="absolute contents left-0 top-0">
          <div className="absolute h-[44.024px] left-0 top-0 w-[146.132px]">
            <img alt="" className="block max-w-none size-full" src={imgGroup4} />
          </div>
          <div className="absolute h-[47.258px] left-0 top-[56.74px] w-[173.293px]" data-name="Group">
            <img alt="" className="block max-w-none size-full" src={imgGroup5} />
          </div>
        </div>
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
          <img alt="" className="block max-w-none size-full" src={imgVector11} />
        </div>
      </div>
    );
  }
  if (style === "Round") {
    return (
      <div className={className} data-name="Style=Round">
        <div className="absolute inset-[12.49%_7.22%]" data-name="Vector">
          <img alt="" className="block max-w-none size-full" src={imgVector12} />
        </div>
      </div>
    );
  }
  if (style === "Sharp") {
    return (
      <div className={className} data-name="Style=Sharp">
        <div className="absolute inset-[10.42%_4.17%]" data-name="Vector">
          <img alt="" className="block max-w-none size-full" src={imgVector13} />
        </div>
      </div>
    );
  }
  if (style === "Two Tone") {
    return (
      <div className={className} data-name="Style=Two Tone">
        <div className="absolute inset-[24.96%_18.63%_20.83%_18.63%]" data-name="Vector">
          <img alt="" className="block max-w-none size-full" src={imgVector14} />
        </div>
        <div className="absolute inset-[8.33%_4.17%_12.5%_4.17%]" data-name="Vector">
          <img alt="" className="block max-w-none size-full" src={imgVector15} />
        </div>
      </div>
    );
  }
  return (
    <div className={className} data-name="Style=Filled">
      <div className="absolute inset-[10.42%_4.17%]" data-name="Vector">
        <img alt="" className="block max-w-none size-full" src={imgVector13} />
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
 * @figmaAssetKey 944973e9fb104bf52e81e63ff8d3f642e1f5661d
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
  if (property1 === "Expanded") {
    return (
      <div className={className} data-name="Property 1=Expanded">
        {element}
        <KslNavigationRail />
      </div>
    );
  }
  return (
    <button className={className} data-name="Property 1=Default">
      {element}
      <KslNavigationRail1 />
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
        <img alt="" className="block max-w-none size-full" src={imgVector16} />
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

function TrailingElements() {
  return (
    <div className="content-stretch flex h-[48px] items-center justify-end overflow-clip relative shrink-0" data-name="Trailing elements">
      <IconButton size="Small" style="Standard" width="Default" className="content-stretch flex items-center justify-center relative shrink-0 size-[48px]" />
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

function StateLayer1() {
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

function StateLayer2() {
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

function StateLayer3() {
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

function StateLayer4() {
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

function StateLayer5() {
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

function StateLayer6() {
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
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full relative shrink-0 text-[#44483b] text-[16px] tracking-[0.5px] w-[min-content]">
        <p className="leading-[24px]">Før du starter med egenrevisjonen</p>
      </div>
    </div>
  );
}

function StateLayer7() {
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

function StateLayer8() {
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
    <div className="content-stretch flex gap-[8px] items-start leading-[0] relative shrink-0 text-[#174295] text-[14px] text-nowrap tracking-[0.1px] w-full" data-name="Question text">
      <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center overflow-ellipsis overflow-hidden relative shrink-0">
        <p className="leading-[20px] overflow-ellipsis overflow-hidden text-[14px] text-nowrap whitespace-pre">1.3</p>
      </div>
      <div className="basis-0 flex flex-col font-['Manrope:Medium',sans-serif] font-medium grow justify-center min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0">
        <p className="[white-space-collapse:collapse] leading-[20px] overflow-ellipsis overflow-hidden text-[14px] text-nowrap">KRAV TIL KSL - BRUK AV EGNE RÅVARER</p>
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
        <p className="leading-[20px] overflow-ellipsis overflow-hidden text-[14px] text-nowrap whitespace-pre">1.4</p>
      </div>
      <div className="basis-0 flex flex-col font-['Manrope:Medium',sans-serif] font-medium grow justify-center min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0">
        <p className="[white-space-collapse:collapse] leading-[20px] overflow-ellipsis overflow-hidden text-[14px] text-nowrap">KRAV TIL KSL - NORSKE RÅVARER KJØPT DIREKTE FRA PRIMÆRPRODUSENTER</p>
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
        <p className="leading-[20px] overflow-ellipsis overflow-hidden text-[14px] text-nowrap whitespace-pre">1.5</p>
      </div>
      <div className="basis-0 flex flex-col font-['Manrope:Medium',sans-serif] font-medium grow justify-center leading-[20px] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0">
        <p className="[white-space-collapse:collapse] mb-0 overflow-ellipsis overflow-hidden">KRAV TIL KSL - NORSKE RÅVARER OG / ELLER FOREDLEDE NÆRINGSMIDLER KJØPT FRA ANDRE VIRKSOMHETER</p>
        <p className="[white-space-collapse:collapse] overflow-ellipsis overflow-hidden">&nbsp;</p>
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
        <p className="leading-[20px] overflow-ellipsis overflow-hidden text-[14px] text-nowrap whitespace-pre">1.6</p>
      </div>
      <div className="basis-0 flex flex-col font-['Manrope:Medium',sans-serif] font-medium grow justify-center leading-[20px] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0">
        <p className="[white-space-collapse:collapse] mb-0 overflow-ellipsis overflow-hidden">KRAV TIL KVALITETSSYSTEM - NORSKE RÅVARER FRA ANDRE PRIMÆRPRODUKSJONER ENN LANDBRUK</p>
        <p className="[white-space-collapse:collapse] overflow-ellipsis overflow-hidden">&nbsp;</p>
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

function ThemeQuestions() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow isolate items-start min-h-px min-w-px relative shrink-0 w-full" data-name="Theme Questions">
      <DividerwithSubhead />
      <ChecklistQuestion />
      <ChecklistQuestion1 />
      <ChecklistQuestion2 />
      <ChecklistQuestion3 />
    </div>
  );
}

function ItemList() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[16px] h-full items-start px-[24px] py-[8px] relative shrink-0 w-[400px] z-[4]" data-name="item List">
      <ListitemListItem0Density />
      <ListitemListItem0Density1 />
      <ThemeQuestions />
    </div>
  );
}

/**
 * @figmaAssetKey 1b09dde9ecf865381eb9b052eb872623748378be
 */
function StateLayer9() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center p-[8px] relative shrink-0" data-name="state-layer">
      <Icon37 />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center overflow-clip relative rounded-[100px] shrink-0" data-name="container">
      <StateLayer9 />
    </div>
  );
}

function TrailingIcon1() {
  return (
    <div className="content-stretch flex h-[48px] items-center justify-end relative shrink-0" data-name="trailing-icon">
      <Trailingicon4 />
    </div>
  );
}

function AnswerHeader() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Answer Header">
      <div className="basis-0 flex flex-col font-['Quatro:Regular',sans-serif] grow h-[48px] justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#1a1c16] text-[22px]">
        <p className="leading-[28px]">1.3</p>
      </div>
      <TrailingIcon1 />
    </div>
  );
}

function AnswerTextContainer() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start justify-center min-h-px min-w-px relative shrink-0" data-name="Answer Text Container">
      <AnswerHeader />
      <div className="flex flex-col font-['Quatro:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1a1c16] text-[22px] w-full">
        <p className="leading-[28px]">KRAV TIL KSL - BRUK AV EGNE RÅVARER, Brukes det råvarer fra egen primærproduksjon</p>
      </div>
    </div>
  );
}

function AnswerRow() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Answer Row">
      <AnswerTextContainer />
    </div>
  );
}

function AnswerContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0 w-full" data-name="Answer Container">
      <AnswerRow />
    </div>
  );
}

function AsnwerHeading() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[8px] items-start justify-center px-0 py-[12px] relative shrink-0 w-full" data-name="Asnwer Heading">
      <AnswerContainer />
    </div>
  );
}

function StateLayer10() {
  return (
    <div className="box-border content-stretch flex items-center justify-center p-[8px] relative shrink-0" data-name="state-layer">
      <RadioButtonUnchecked className="relative shrink-0 size-[24px]" />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0" data-name="container">
      <StateLayer10 />
    </div>
  );
}

function LeadingElement() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Leading element">
      <Radiobuttons />
    </div>
  );
}

function Content6() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] tracking-[0.5px] w-full">
        <p className="leading-[24px]">Ja</p>
      </div>
    </div>
  );
}

function StateLayer11() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center px-[16px] py-0 relative size-full">
          <LeadingElement />
          <Content6 />
        </div>
      </div>
    </div>
  );
}

function StateLayer12() {
  return (
    <div className="box-border content-stretch flex items-center justify-center p-[8px] relative shrink-0" data-name="state-layer">
      <RadioButtonUnchecked className="relative shrink-0 size-[24px]" />
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0" data-name="container">
      <StateLayer12 />
    </div>
  );
}

function LeadingElement1() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Leading element">
      <Radiobuttons1 />
    </div>
  );
}

function Content7() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] tracking-[0.5px] w-full">
        <p className="leading-[24px]">Nei</p>
      </div>
    </div>
  );
}

function StateLayer13() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center px-[16px] py-0 relative size-full">
          <LeadingElement1 />
          <Content7 />
        </div>
      </div>
    </div>
  );
}

function StateLayer14() {
  return (
    <div className="box-border content-stretch flex items-center justify-center p-[8px] relative shrink-0" data-name="state-layer">
      <RadioButtonUnchecked className="relative shrink-0 size-[24px]" />
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0" data-name="container">
      <StateLayer14 />
    </div>
  );
}

function LeadingElement2() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Leading element">
      <Radiobuttons2 />
    </div>
  );
}

function Content8() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] tracking-[0.5px] w-full">
        <p className="leading-[24px]">Ikke relevant</p>
      </div>
    </div>
  );
}

function StateLayer15() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center px-[16px] py-0 relative size-full">
          <LeadingElement2 />
          <Content8 />
        </div>
      </div>
    </div>
  );
}

function AnswerOptions() {
  return (
    <div className="box-border content-stretch flex items-start px-0 py-[16px] relative shrink-0 w-full" data-name="Answer Options">
      <ListitemListItem4Density />
      <ListitemListItem4Density1 />
      <ListitemListItem4Density2 />
    </div>
  );
}

function AnswerAlternatives() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-x-clip overflow-y-auto relative shrink-0 w-full" data-name="Answer Alternatives">
      <AnswerOptions />
    </div>
  );
}

function StateLayer16() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center justify-center px-[12px] py-[10px] relative size-full">
          <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#4a671e] text-[14px] text-center text-nowrap tracking-[0.1px]">
            <p className="leading-[20px] whitespace-pre">Forrige spørsmål</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function StateLayer17() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center justify-center px-[24px] py-[10px] relative size-full">
          <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-center text-nowrap text-white tracking-[0.1px]">
            <p className="leading-[20px] whitespace-pre">Neste spørsmål</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Buttons() {
  return (
    <div className="basis-0 content-stretch cursor-pointer flex gap-[16px] grow items-center justify-end min-h-px min-w-px relative shrink-0" data-name="Buttons">
      <PreviousButton />
      <NextButton />
    </div>
  );
}

function NavigationButtons() {
  return (
    <div className="basis-0 content-stretch flex gap-[16px] grow items-center justify-end min-h-px min-w-px relative shrink-0" data-name="Navigation buttons">
      <Buttons />
    </div>
  );
}

function AnswerSection() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="Answer Section">
      <div className="flex flex-col items-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] items-center px-[40px] py-0 relative size-full">
          <AsnwerHeading />
          <AnswerAlternatives />
          <Actions />
        </div>
      </div>
    </div>
  );
}

function QuestionDetails() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start min-h-px min-w-px relative shrink-0 z-[2]" data-name="Question details">
      <AnswerSection />
    </div>
  );
}

function GuideText() {
  return (
    <div className="relative shrink-0 w-full" data-name="Guide Text">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col items-start px-[24px] py-[8px] relative w-full">
          <div className="-webkit-box flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[20px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#1a1c16] text-[14px] tracking-[0.25px] w-full">
            <p className="mb-0">Landbruksbaserte råvarer skal være produsert av primærprodusenter som har gyldig Kvalitetssystem i landbruket (KSL).</p>
            <p>&nbsp;</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Guide() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Guide">
      <GuideText />
    </div>
  );
}

function GuidelineSection() {
  return (
    <div className="bg-[#fafaf0] box-border content-stretch flex flex-col gap-[8px] h-full items-center px-0 py-[8px] relative shrink-0 w-[400px] z-[1]" data-name="Guideline Section">
      <Guide />
    </div>
  );
}

function ChecklistQuestions() {
  return (
    <div className="basis-0 content-stretch flex grow isolate items-center justify-center min-h-px min-w-px relative shrink-0 w-full" data-name="Checklist Questions">
      <ItemList />
      <VerticalFullWidth className="content-stretch flex flex-col h-full items-center overflow-clip relative shrink-0 w-px z-[3]" />
      <QuestionDetails />
      <GuidelineSection />
    </div>
  );
}

/**
 * @figmaAssetKey 018728b1034822bfdf88ac9b394e16a4a550b457
 */
/**
 * @figmaAssetKey b016f6a510eebef46377ecdc66da6f98ff296421
 */
function CustomizeChecklist() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start min-h-px min-w-px relative shrink-0" data-name="customize checklist">
      <ChecklistHeading />
      <ChecklistQuestions />
    </div>
  );
}

function ContentContainer() {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0 w-full" data-name="Content Container">
      <ProducerNavigationRail className="bg-white box-border content-stretch cursor-pointer flex flex-col h-full items-start overflow-visible p-0 relative shrink-0" />
      <CustomizeChecklist />
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