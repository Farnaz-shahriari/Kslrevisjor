import { imgDivider, imgIcon, img, img1 } from "./svg-n4fb0";

/**
 * @figmaAssetKey 44b9715e248ea0e408c3bbe05f15ac27b6c1285d
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
        <Content />
      </div>
    );
  }
  if (type === "Square" && size === "XLarge" && style === "Standard" && width === "Default") {
    return (
      <div className={className} data-name="Type=Square, Size=XLarge, Style=Standard, Width=Default">
        <Content1 />
      </div>
    );
  }
  if (type === "Square" && size === "XLarge" && style === "Standard" && width === "Narrow") {
    return (
      <div className={className} data-name="Type=Square, Size=XLarge, Style=Standard, Width=Narrow">
        <Content2 />
      </div>
    );
  }
  if (type === "Square" && size === "Large" && style === "Standard" && width === "Wide") {
    return (
      <div className={className} data-name="Type=Square, Size=Large, Style=Standard, Width=Wide">
        <Content3 />
      </div>
    );
  }
  if (type === "Square" && size === "Large" && style === "Standard" && width === "Default") {
    return (
      <div className={className} data-name="Type=Square, Size=Large, Style=Standard, Width=Default">
        <Content4 />
      </div>
    );
  }
  if (type === "Square" && size === "Large" && style === "Standard" && width === "Narrow") {
    return (
      <div className={className} data-name="Type=Square, Size=Large, Style=Standard, Width=Narrow">
        <Content5 />
      </div>
    );
  }
  if (type === "Square" && size === "Medium" && style === "Standard" && width === "Wide") {
    return (
      <div className={className} data-name="Type=Square, Size=Medium, Style=Standard, Width=Wide">
        <Content6 />
      </div>
    );
  }
  if (type === "Square" && size === "Medium" && style === "Standard" && width === "Default") {
    return (
      <div className={className} data-name="Type=Square, Size=Medium, Style=Standard, Width=Default">
        <Content7 />
      </div>
    );
  }
  if (type === "Square" && size === "Medium" && style === "Standard" && width === "Narrow") {
    return (
      <div className={className} data-name="Type=Square, Size=Medium, Style=Standard, Width=Narrow">
        <Content8 />
      </div>
    );
  }
  if (type === "Square" && size === "Small" && style === "Standard" && width === "Wide") {
    return (
      <div className={className} data-name="Type=Square, Size=Small, Style=Standard, Width=Wide">
        <Content9 />
      </div>
    );
  }
  if (type === "Square" && size === "Small" && style === "Standard" && width === "Default") {
    return (
      <div className={className} data-name="Type=Square, Size=Small, Style=Standard, Width=Default">
        <Content10 />
      </div>
    );
  }
  if (type === "Square" && size === "Small" && style === "Standard" && width === "Narrow") {
    return (
      <div className={className} data-name="Type=Square, Size=Small, Style=Standard, Width=Narrow">
        <Content11 />
      </div>
    );
  }
  if (type === "Square" && size === "XSmall" && style === "Standard" && width === "Wide") {
    return (
      <div className={className} data-name="Type=Square, Size=XSmall, Style=Standard, Width=Wide">
        <Content12 />
      </div>
    );
  }
  if (type === "Square" && size === "XSmall" && style === "Standard" && width === "Default") {
    return (
      <div className={className} data-name="Type=Square, Size=XSmall, Style=Standard, Width=Default">
        <Content13 />
      </div>
    );
  }
  if (type === "Square" && size === "XSmall" && style === "Standard" && width === "Narrow") {
    return (
      <div className={className} data-name="Type=Square, Size=XSmall, Style=Standard, Width=Narrow">
        <Content14 />
      </div>
    );
  }
  if (type === "Round" && size === "XLarge" && style === "Standard" && width === "Wide") {
    return (
      <div className={className} data-name="Type=Round, Size=XLarge, Style=Standard, Width=Wide">
        <Content15 />
      </div>
    );
  }
  if (type === "Round" && size === "XLarge" && style === "Standard" && width === "Default") {
    return (
      <div className={className} data-name="Type=Round, Size=XLarge, Style=Standard, Width=Default">
        <Content16 />
      </div>
    );
  }
  if (type === "Round" && size === "XLarge" && style === "Standard" && width === "Narrow") {
    return (
      <div className={className} data-name="Type=Round, Size=XLarge, Style=Standard, Width=Narrow">
        <Content17 />
      </div>
    );
  }
  if (type === "Round" && size === "Large" && style === "Standard" && width === "Wide") {
    return (
      <div className={className} data-name="Type=Round, Size=Large, Style=Standard, Width=Wide">
        <Content18 />
      </div>
    );
  }
  if (type === "Round" && size === "Large" && style === "Standard" && width === "Default") {
    return (
      <div className={className} data-name="Type=Round, Size=Large, Style=Standard, Width=Default">
        <Content19 />
      </div>
    );
  }
  if (type === "Round" && size === "Large" && style === "Standard" && width === "Narrow") {
    return (
      <div className={className} data-name="Type=Round, Size=Large, Style=Standard, Width=Narrow">
        <Content20 />
      </div>
    );
  }
  if (type === "Round" && size === "Medium" && style === "Standard" && width === "Wide") {
    return (
      <div className={className} data-name="Type=Round, Size=Medium, Style=Standard, Width=Wide">
        <Content21 />
      </div>
    );
  }
  if (type === "Round" && size === "Medium" && style === "Standard" && width === "Default") {
    return (
      <div className={className} data-name="Type=Round, Size=Medium, Style=Standard, Width=Default">
        <Content22 />
      </div>
    );
  }
  if (type === "Round" && size === "Medium" && style === "Standard" && width === "Narrow") {
    return (
      <div className={className} data-name="Type=Round, Size=Medium, Style=Standard, Width=Narrow">
        <Content23 />
      </div>
    );
  }
  if (type === "Round" && size === "Small" && style === "Standard" && width === "Wide") {
    return (
      <div className={className} data-name="Type=Round, Size=Small, Style=Standard, Width=Wide">
        <Content24 />
      </div>
    );
  }
  if (type === "Round" && size === "Small" && style === "Standard" && width === "Default") {
    return (
      <div className={className} data-name="Type=Round, Size=Small, Style=Standard, Width=Default">
        <Content25 />
      </div>
    );
  }
  if (type === "Round" && size === "Small" && style === "Standard" && width === "Narrow") {
    return (
      <div className={className} data-name="Type=Round, Size=Small, Style=Standard, Width=Narrow">
        <Content26 />
      </div>
    );
  }
  if (type === "Round" && size === "XSmall" && style === "Standard" && width === "Wide") {
    return (
      <div className={className} data-name="Type=Round, Size=XSmall, Style=Standard, Width=Wide">
        <Content27 />
      </div>
    );
  }
  if (type === "Round" && size === "XSmall" && style === "Standard" && width === "Default") {
    return (
      <div className={className} data-name="Type=Round, Size=XSmall, Style=Standard, Width=Default">
        <Content28 />
      </div>
    );
  }
  if (type === "Round" && size === "XSmall" && style === "Standard" && width === "Narrow") {
    return (
      <div className={className} data-name="Type=Round, Size=XSmall, Style=Standard, Width=Narrow">
        <Content29 />
      </div>
    );
  }
  if (type === "Square" && size === "XLarge" && style === "Outline" && width === "Wide") {
    return (
      <div className={className} data-name="Type=Square, Size=XLarge, Style=Outline, Width=Wide">
        <Content30 />
      </div>
    );
  }
  if (type === "Square" && size === "XLarge" && style === "Outline" && width === "Default") {
    return (
      <div className={className} data-name="Type=Square, Size=XLarge, Style=Outline, Width=Default">
        <Content31 />
      </div>
    );
  }
  if (type === "Square" && size === "XLarge" && style === "Outline" && width === "Narrow") {
    return (
      <div className={className} data-name="Type=Square, Size=XLarge, Style=Outline, Width=Narrow">
        <Content32 />
      </div>
    );
  }
  if (type === "Square" && size === "Large" && style === "Outline" && width === "Wide") {
    return (
      <div className={className} data-name="Type=Square, Size=Large, Style=Outline, Width=Wide">
        <Content33 />
      </div>
    );
  }
  if (type === "Square" && size === "Large" && style === "Outline" && width === "Default") {
    return (
      <div className={className} data-name="Type=Square, Size=Large, Style=Outline, Width=Default">
        <Content34 />
      </div>
    );
  }
  if (type === "Square" && size === "Large" && style === "Outline" && width === "Narrow") {
    return (
      <div className={className} data-name="Type=Square, Size=Large, Style=Outline, Width=Narrow">
        <Content35 />
      </div>
    );
  }
  if (type === "Square" && size === "Medium" && style === "Outline" && width === "Wide") {
    return (
      <div className={className} data-name="Type=Square, Size=Medium, Style=Outline, Width=Wide">
        <Content36 />
      </div>
    );
  }
  if (type === "Square" && size === "Medium" && style === "Outline" && width === "Default") {
    return (
      <div className={className} data-name="Type=Square, Size=Medium, Style=Outline, Width=Default">
        <Content37 />
      </div>
    );
  }
  if (type === "Square" && size === "Medium" && style === "Outline" && width === "Narrow") {
    return (
      <div className={className} data-name="Type=Square, Size=Medium, Style=Outline, Width=Narrow">
        <Content38 />
      </div>
    );
  }
  if (type === "Square" && size === "Small" && style === "Outline" && width === "Wide") {
    return (
      <div className={className} data-name="Type=Square, Size=Small, Style=Outline, Width=Wide">
        <Content39 />
      </div>
    );
  }
  if (type === "Square" && size === "Small" && style === "Outline" && width === "Default") {
    return (
      <div className={className} data-name="Type=Square, Size=Small, Style=Outline, Width=Default">
        <Content40 />
      </div>
    );
  }
  if (type === "Square" && size === "Small" && style === "Outline" && width === "Narrow") {
    return (
      <div className={className} data-name="Type=Square, Size=Small, Style=Outline, Width=Narrow">
        <Content41 />
      </div>
    );
  }
  if (type === "Square" && size === "XSmall" && style === "Outline" && width === "Wide") {
    return (
      <div className={className} data-name="Type=Square, Size=XSmall, Style=Outline, Width=Wide">
        <Content42 />
      </div>
    );
  }
  if (type === "Square" && size === "XSmall" && style === "Outline" && width === "Default") {
    return (
      <div className={className} data-name="Type=Square, Size=XSmall, Style=Outline, Width=Default">
        <Content43 />
      </div>
    );
  }
  if (type === "Square" && size === "XSmall" && style === "Outline" && width === "Narrow") {
    return (
      <div className={className} data-name="Type=Square, Size=XSmall, Style=Outline, Width=Narrow">
        <Content44 />
      </div>
    );
  }
  if (type === "Round" && size === "XLarge" && style === "Outline" && width === "Wide") {
    return (
      <div className={className} data-name="Type=Round, Size=XLarge, Style=Outline, Width=Wide">
        <Content45 />
      </div>
    );
  }
  if (type === "Round" && size === "XLarge" && style === "Outline" && width === "Default") {
    return (
      <div className={className} data-name="Type=Round, Size=XLarge, Style=Outline, Width=Default">
        <Content46 />
      </div>
    );
  }
  if (type === "Round" && size === "XLarge" && style === "Outline" && width === "Narrow") {
    return (
      <div className={className} data-name="Type=Round, Size=XLarge, Style=Outline, Width=Narrow">
        <Content47 />
      </div>
    );
  }
  if (type === "Round" && size === "Large" && style === "Outline" && width === "Wide") {
    return (
      <div className={className} data-name="Type=Round, Size=Large, Style=Outline, Width=Wide">
        <Content48 />
      </div>
    );
  }
  if (type === "Round" && size === "Large" && style === "Outline" && width === "Default") {
    return (
      <div className={className} data-name="Type=Round, Size=Large, Style=Outline, Width=Default">
        <Content49 />
      </div>
    );
  }
  if (type === "Round" && size === "Large" && style === "Outline" && width === "Narrow") {
    return (
      <div className={className} data-name="Type=Round, Size=Large, Style=Outline, Width=Narrow">
        <Content50 />
      </div>
    );
  }
  if (type === "Round" && size === "Medium" && style === "Outline" && width === "Wide") {
    return (
      <div className={className} data-name="Type=Round, Size=Medium, Style=Outline, Width=Wide">
        <Content51 />
      </div>
    );
  }
  if (type === "Round" && size === "Medium" && style === "Outline" && width === "Default") {
    return (
      <div className={className} data-name="Type=Round, Size=Medium, Style=Outline, Width=Default">
        <Content52 />
      </div>
    );
  }
  if (type === "Round" && size === "Medium" && style === "Outline" && width === "Narrow") {
    return (
      <div className={className} data-name="Type=Round, Size=Medium, Style=Outline, Width=Narrow">
        <Content53 />
      </div>
    );
  }
  if (type === "Round" && size === "Small" && style === "Outline" && width === "Wide") {
    return (
      <div className={className} data-name="Type=Round, Size=Small, Style=Outline, Width=Wide">
        <Content54 />
      </div>
    );
  }
  if (type === "Round" && size === "Small" && style === "Outline" && width === "Default") {
    return (
      <div className={className} data-name="Type=Round, Size=Small, Style=Outline, Width=Default">
        <Content55 />
      </div>
    );
  }
  if (type === "Round" && size === "Small" && style === "Outline" && width === "Narrow") {
    return (
      <div className={className} data-name="Type=Round, Size=Small, Style=Outline, Width=Narrow">
        <Content56 />
      </div>
    );
  }
  if (type === "Round" && size === "XSmall" && style === "Outline" && width === "Wide") {
    return (
      <div className={className} data-name="Type=Round, Size=XSmall, Style=Outline, Width=Wide">
        <Content57 />
      </div>
    );
  }
  if (type === "Round" && size === "XSmall" && style === "Outline" && width === "Default") {
    return (
      <div className={className} data-name="Type=Round, Size=XSmall, Style=Outline, Width=Default">
        <Content58 />
      </div>
    );
  }
  if (type === "Round" && size === "XSmall" && style === "Outline" && width === "Narrow") {
    return (
      <div className={className} data-name="Type=Round, Size=XSmall, Style=Outline, Width=Narrow">
        <Content59 />
      </div>
    );
  }
  if (type === "Square" && size === "XLarge" && style === "Tonal" && width === "Wide") {
    return (
      <div className={className} data-name="Type=Square, Size=XLarge, Style=Tonal, Width=Wide">
        <Content60 />
      </div>
    );
  }
  if (type === "Square" && size === "XLarge" && style === "Tonal" && width === "Default") {
    return (
      <div className={className} data-name="Type=Square, Size=XLarge, Style=Tonal, Width=Default">
        <Content61 />
      </div>
    );
  }
  if (type === "Square" && size === "XLarge" && style === "Tonal" && width === "Narrow") {
    return (
      <div className={className} data-name="Type=Square, Size=XLarge, Style=Tonal, Width=Narrow">
        <Content62 />
      </div>
    );
  }
  if (type === "Square" && size === "Large" && style === "Tonal" && width === "Wide") {
    return (
      <div className={className} data-name="Type=Square, Size=Large, Style=Tonal, Width=Wide">
        <Content63 />
      </div>
    );
  }
  if (type === "Square" && size === "Large" && style === "Tonal" && width === "Default") {
    return (
      <div className={className} data-name="Type=Square, Size=Large, Style=Tonal, Width=Default">
        <Content64 />
      </div>
    );
  }
  if (type === "Square" && size === "Large" && style === "Tonal" && width === "Narrow") {
    return (
      <div className={className} data-name="Type=Square, Size=Large, Style=Tonal, Width=Narrow">
        <Content65 />
      </div>
    );
  }
  if (type === "Square" && size === "Medium" && style === "Tonal" && width === "Wide") {
    return (
      <div className={className} data-name="Type=Square, Size=Medium, Style=Tonal, Width=Wide">
        <Content66 />
      </div>
    );
  }
  if (type === "Square" && size === "Medium" && style === "Tonal" && width === "Default") {
    return (
      <div className={className} data-name="Type=Square, Size=Medium, Style=Tonal, Width=Default">
        <Content67 />
      </div>
    );
  }
  if (type === "Square" && size === "Medium" && style === "Tonal" && width === "Narrow") {
    return (
      <div className={className} data-name="Type=Square, Size=Medium, Style=Tonal, Width=Narrow">
        <Content68 />
      </div>
    );
  }
  if (type === "Square" && size === "Small" && style === "Tonal" && width === "Wide") {
    return (
      <div className={className} data-name="Type=Square, Size=Small, Style=Tonal, Width=Wide">
        <Content69 />
      </div>
    );
  }
  if (type === "Square" && size === "Small" && style === "Tonal" && width === "Default") {
    return (
      <div className={className} data-name="Type=Square, Size=Small, Style=Tonal, Width=Default">
        <Content70 />
      </div>
    );
  }
  if (type === "Square" && size === "Small" && style === "Tonal" && width === "Narrow") {
    return (
      <div className={className} data-name="Type=Square, Size=Small, Style=Tonal, Width=Narrow">
        <Content71 />
      </div>
    );
  }
  if (type === "Square" && size === "XSmall" && style === "Tonal" && width === "Wide") {
    return (
      <div className={className} data-name="Type=Square, Size=XSmall, Style=Tonal, Width=Wide">
        <Content72 />
      </div>
    );
  }
  if (type === "Square" && size === "XSmall" && style === "Tonal" && width === "Default") {
    return (
      <div className={className} data-name="Type=Square, Size=XSmall, Style=Tonal, Width=Default">
        <Content73 />
      </div>
    );
  }
  if (type === "Square" && size === "XSmall" && style === "Tonal" && width === "Narrow") {
    return (
      <div className={className} data-name="Type=Square, Size=XSmall, Style=Tonal, Width=Narrow">
        <Content74 />
      </div>
    );
  }
  if (type === "Round" && size === "XLarge" && style === "Tonal" && width === "Wide") {
    return (
      <div className={className} data-name="Type=Round, Size=XLarge, Style=Tonal, Width=Wide">
        <Content75 />
      </div>
    );
  }
  if (type === "Round" && size === "XLarge" && style === "Tonal" && width === "Default") {
    return (
      <div className={className} data-name="Type=Round, Size=XLarge, Style=Tonal, Width=Default">
        <Content76 />
      </div>
    );
  }
  if (type === "Round" && size === "XLarge" && style === "Tonal" && width === "Narrow") {
    return (
      <div className={className} data-name="Type=Round, Size=XLarge, Style=Tonal, Width=Narrow">
        <Content77 />
      </div>
    );
  }
  if (type === "Round" && size === "Large" && style === "Tonal" && width === "Wide") {
    return (
      <div className={className} data-name="Type=Round, Size=Large, Style=Tonal, Width=Wide">
        <Content78 />
      </div>
    );
  }
  if (type === "Round" && size === "Large" && style === "Tonal" && width === "Default") {
    return (
      <div className={className} data-name="Type=Round, Size=Large, Style=Tonal, Width=Default">
        <Content79 />
      </div>
    );
  }
  if (type === "Round" && size === "Large" && style === "Tonal" && width === "Narrow") {
    return (
      <div className={className} data-name="Type=Round, Size=Large, Style=Tonal, Width=Narrow">
        <Content80 />
      </div>
    );
  }
  if (type === "Round" && size === "Medium" && style === "Tonal" && width === "Wide") {
    return (
      <div className={className} data-name="Type=Round, Size=Medium, Style=Tonal, Width=Wide">
        <Content81 />
      </div>
    );
  }
  if (type === "Round" && size === "Medium" && style === "Tonal" && width === "Default") {
    return (
      <div className={className} data-name="Type=Round, Size=Medium, Style=Tonal, Width=Default">
        <Content82 />
      </div>
    );
  }
  if (type === "Round" && size === "Medium" && style === "Tonal" && width === "Narrow") {
    return (
      <div className={className} data-name="Type=Round, Size=Medium, Style=Tonal, Width=Narrow">
        <Content83 />
      </div>
    );
  }
  if (type === "Round" && size === "Small" && style === "Tonal" && width === "Wide") {
    return (
      <div className={className} data-name="Type=Round, Size=Small, Style=Tonal, Width=Wide">
        <Content84 />
      </div>
    );
  }
  if (type === "Round" && size === "Small" && style === "Tonal" && width === "Default") {
    return (
      <div className={className} data-name="Type=Round, Size=Small, Style=Tonal, Width=Default">
        <Content85 />
      </div>
    );
  }
  if (type === "Round" && size === "Small" && style === "Tonal" && width === "Narrow") {
    return (
      <div className={className} data-name="Type=Round, Size=Small, Style=Tonal, Width=Narrow">
        <Content86 />
      </div>
    );
  }
  if (type === "Round" && size === "XSmall" && style === "Tonal" && width === "Wide") {
    return (
      <div className={className} data-name="Type=Round, Size=XSmall, Style=Tonal, Width=Wide">
        <Content87 />
      </div>
    );
  }
  if (type === "Round" && size === "XSmall" && style === "Tonal" && width === "Default") {
    return (
      <div className={className} data-name="Type=Round, Size=XSmall, Style=Tonal, Width=Default">
        <Content88 />
      </div>
    );
  }
  if (type === "Round" && size === "XSmall" && style === "Tonal" && width === "Narrow") {
    return (
      <div className={className} data-name="Type=Round, Size=XSmall, Style=Tonal, Width=Narrow">
        <Content89 />
      </div>
    );
  }
  if (type === "Square" && size === "XLarge" && style === "Filled" && width === "Wide") {
    return (
      <div className={className} data-name="Type=Square, Size=XLarge, Style=Filled, Width=Wide">
        <Content90 />
      </div>
    );
  }
  if (type === "Square" && size === "XLarge" && style === "Filled" && width === "Default") {
    return (
      <div className={className} data-name="Type=Square, Size=XLarge, Style=Filled, Width=Default">
        <Content91 />
      </div>
    );
  }
  if (type === "Square" && size === "XLarge" && style === "Filled" && width === "Narrow") {
    return (
      <div className={className} data-name="Type=Square, Size=XLarge, Style=Filled, Width=Narrow">
        <Content92 />
      </div>
    );
  }
  if (type === "Square" && size === "Large" && style === "Filled" && width === "Wide") {
    return (
      <div className={className} data-name="Type=Square, Size=Large, Style=Filled, Width=Wide">
        <Content93 />
      </div>
    );
  }
  if (type === "Square" && size === "Large" && style === "Filled" && width === "Default") {
    return (
      <div className={className} data-name="Type=Square, Size=Large, Style=Filled, Width=Default">
        <Content94 />
      </div>
    );
  }
  if (type === "Square" && size === "Large" && style === "Filled" && width === "Narrow") {
    return (
      <div className={className} data-name="Type=Square, Size=Large, Style=Filled, Width=Narrow">
        <Content95 />
      </div>
    );
  }
  if (type === "Square" && size === "Medium" && style === "Filled" && width === "Wide") {
    return (
      <div className={className} data-name="Type=Square, Size=Medium, Style=Filled, Width=Wide">
        <Content96 />
      </div>
    );
  }
  if (type === "Square" && size === "Medium" && style === "Filled" && width === "Default") {
    return (
      <div className={className} data-name="Type=Square, Size=Medium, Style=Filled, Width=Default">
        <Content97 />
      </div>
    );
  }
  if (type === "Square" && size === "Medium" && style === "Filled" && width === "Narrow") {
    return (
      <div className={className} data-name="Type=Square, Size=Medium, Style=Filled, Width=Narrow">
        <Content98 />
      </div>
    );
  }
  if (type === "Square" && size === "Small" && style === "Filled" && width === "Wide") {
    return (
      <div className={className} data-name="Type=Square, Size=Small, Style=Filled, Width=Wide">
        <Content99 />
      </div>
    );
  }
  if (type === "Square" && size === "Small" && style === "Filled" && width === "Default") {
    return (
      <div className={className} data-name="Type=Square, Size=Small, Style=Filled, Width=Default">
        <Content100 />
      </div>
    );
  }
  if (type === "Square" && size === "Small" && style === "Filled" && width === "Narrow") {
    return (
      <div className={className} data-name="Type=Square, Size=Small, Style=Filled, Width=Narrow">
        <Content101 />
      </div>
    );
  }
  if (type === "Square" && size === "XSmall" && style === "Filled" && width === "Wide") {
    return (
      <div className={className} data-name="Type=Square, Size=XSmall, Style=Filled, Width=Wide">
        <Content102 />
      </div>
    );
  }
  if (type === "Square" && size === "XSmall" && style === "Filled" && width === "Default") {
    return (
      <div className={className} data-name="Type=Square, Size=XSmall, Style=Filled, Width=Default">
        <Content103 />
      </div>
    );
  }
  if (type === "Square" && size === "XSmall" && style === "Filled" && width === "Narrow") {
    return (
      <div className={className} data-name="Type=Square, Size=XSmall, Style=Filled, Width=Narrow">
        <Content104 />
      </div>
    );
  }
  if (type === "Round" && size === "XLarge" && style === "Filled" && width === "Wide") {
    return (
      <div className={className} data-name="Type=Round, Size=XLarge, Style=Filled, Width=Wide">
        <Content105 />
      </div>
    );
  }
  if (type === "Round" && size === "XLarge" && style === "Filled" && width === "Default") {
    return (
      <div className={className} data-name="Type=Round, Size=XLarge, Style=Filled, Width=Default">
        <Content106 />
      </div>
    );
  }
  if (type === "Round" && size === "XLarge" && style === "Filled" && width === "Narrow") {
    return (
      <div className={className} data-name="Type=Round, Size=XLarge, Style=Filled, Width=Narrow">
        <Content107 />
      </div>
    );
  }
  if (type === "Round" && size === "Large" && style === "Filled" && width === "Wide") {
    return (
      <div className={className} data-name="Type=Round, Size=Large, Style=Filled, Width=Wide">
        <Content108 />
      </div>
    );
  }
  if (type === "Round" && size === "Large" && style === "Filled" && width === "Default") {
    return (
      <div className={className} data-name="Type=Round, Size=Large, Style=Filled, Width=Default">
        <Content109 />
      </div>
    );
  }
  if (type === "Round" && size === "Large" && style === "Filled" && width === "Narrow") {
    return (
      <div className={className} data-name="Type=Round, Size=Large, Style=Filled, Width=Narrow">
        <Content110 />
      </div>
    );
  }
  if (type === "Round" && size === "Medium" && style === "Filled" && width === "Wide") {
    return (
      <div className={className} data-name="Type=Round, Size=Medium, Style=Filled, Width=Wide">
        <Content111 />
      </div>
    );
  }
  if (type === "Round" && size === "Medium" && style === "Filled" && width === "Default") {
    return (
      <div className={className} data-name="Type=Round, Size=Medium, Style=Filled, Width=Default">
        <Content112 />
      </div>
    );
  }
  if (type === "Round" && size === "Medium" && style === "Filled" && width === "Narrow") {
    return (
      <div className={className} data-name="Type=Round, Size=Medium, Style=Filled, Width=Narrow">
        <Content113 />
      </div>
    );
  }
  if (type === "Round" && size === "Small" && style === "Filled" && width === "Wide") {
    return (
      <div className={className} data-name="Type=Round, Size=Small, Style=Filled, Width=Wide">
        <Content114 />
      </div>
    );
  }
  if (type === "Round" && size === "Small" && style === "Filled" && width === "Default") {
    return (
      <div className={className} data-name="Type=Round, Size=Small, Style=Filled, Width=Default">
        <Content115 />
      </div>
    );
  }
  if (type === "Round" && size === "Small" && style === "Filled" && width === "Narrow") {
    return (
      <div className={className} data-name="Type=Round, Size=Small, Style=Filled, Width=Narrow">
        <Content116 />
      </div>
    );
  }
  if (type === "Round" && size === "XSmall" && style === "Filled" && width === "Wide") {
    return (
      <div className={className} data-name="Type=Round, Size=XSmall, Style=Filled, Width=Wide">
        <Content117 />
      </div>
    );
  }
  if (type === "Round" && size === "XSmall" && style === "Filled" && width === "Default") {
    return (
      <div className={className} data-name="Type=Round, Size=XSmall, Style=Filled, Width=Default">
        <Content118 />
      </div>
    );
  }
  return (
    <div className={className} data-name="Type=Round, Size=XSmall, Style=Filled, Width=Narrow">
      <Content119 />
    </div>
  );
}

function StateLayer() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-center justify-center opacity-[0.38] px-[24px] py-[16px] relative shrink-0" data-name="State-layer">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[16px] text-nowrap text-white tracking-[0.15px]">
        <p className="leading-[24px] whitespace-pre">Send inn egenrevisjon</p>
      </div>
    </div>
  );
}

function StateLayer1() {
  return (
    <div className="content-stretch flex h-[40px] items-center justify-center relative shrink-0 w-full" data-name="State-layer">
      <Icon12 />
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

function StateLayer2() {
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

function StateLayer3() {
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

function StateLayer4() {
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

function StateLayer5() {
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

function StateLayer6() {
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

function StateLayer7() {
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

/**
 * @figmaAssetKey 2078a549e29363a6c1697ee18bbd4c3468f79ed6
 */
export default function ChecklistHeading() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative size-full" data-name="Checklist Heading">
      <Checklistnameactions />
      <Tabs />
    </div>
  );
}