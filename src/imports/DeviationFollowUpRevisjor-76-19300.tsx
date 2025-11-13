import svgPaths from "./svg-rmozt6mwwz";
import imgThumbnail from "figma:asset/bccf40ef0d51ade359900027c9bd416d09e9658d.png";
import {
  img,
  imgVector,
  imgVector1,
  imgVector2,
  imgVector3,
  imgVector4,
  imgVector5,
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13,
  img14,
  img15,
  imgIcon,
  imgIcon1,
  img16,
  img17,
  img18,
  img19,
  img20,
  img21,
  img22,
  img23,
  imgVector6,
  imgVector7,
  imgVector8,
  imgVector9,
} from "./svg-dwxkl";
type AvvikReportStatusProps = {
  className?: string;
  status?: "pending" | "Done";
};

/**
 * @figmaAssetKey c484f1f368a92ccdf0cf9aea1901aaac172649e0
 */
function AvvikReportStatus({
  className,
  status = "pending",
}: AvvikReportStatusProps) {
  if (status === "Done") {
    return (
      <div className={className} data-name="Status=Done">
        <div
          className="bg-[#f4f4ea] box-border content-stretch cursor-pointer flex items-center justify-center overflow-clip relative rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.3),0px_1px_3px_1px_rgba(0,0,0,0.15)] shrink-0"
          data-name="Assistive chip"
        >
          <div
            className="box-border content-stretch flex gap-[8px] h-[32px] items-center justify-center pl-[8px] pr-[16px] py-[6px] relative shrink-0"
            data-name="state-layer"
          >
            <div
              className="relative shrink-0 size-[18px]"
              data-name="Icon"
            >
              <div
                className="absolute inset-0 overflow-clip"
                data-name="check_circle"
              >
                <div
                  className="absolute inset-[8.333%]"
                  data-name="Vector"
                >
                  <div
                    className="absolute inset-0"
                    style={
                      {
                        "--fill-0": "rgba(74, 103, 30, 1)",
                      } as React.CSSProperties
                    }
                  >
                    <img
                      alt=""
                      className="block max-w-none size-full"
                      src={img}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[14px] text-center text-nowrap tracking-[0.1px]">
              <p className="leading-[20px] whitespace-pre">
                Fullført
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className={className} data-name="Status=pending">
      <div
        className="bg-[#f4f4ea] box-border content-stretch cursor-pointer flex items-center justify-center overflow-clip relative rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.3),0px_1px_3px_1px_rgba(0,0,0,0.15)] shrink-0"
        data-name="Assistive chip"
      >
        <div
          className="box-border content-stretch flex gap-[8px] h-[32px] items-center justify-center pl-[8px] pr-[16px] py-[6px] relative shrink-0"
          data-name="state-layer"
        >
          <div
            className="relative shrink-0 size-[18px]"
            data-name="Icon"
          >
            <div
              className="absolute inset-[8.333%]"
              data-name="icon"
            >
              <div
                className="absolute inset-0"
                style={
                  {
                    "--fill-0": "rgba(186, 26, 26, 1)",
                  } as React.CSSProperties
                }
              >
                <svg
                  className="block size-full"
                  fill="none"
                  preserveAspectRatio="none"
                  viewBox="0 0 15 15"
                >
                  <path
                    d={svgPaths.p1c3b4f80}
                    fill="var(--fill-0, #BA1A1A)"
                    id="icon"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[14px] text-center text-nowrap tracking-[0.1px]">
            <p className="leading-[20px] whitespace-pre">
              Trenger utfylling
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * @figmaAssetKey 04173d8c3b69f36664458e791cbca3ec01c7770e
 */
function Add({ className }: { className?: string }) {
  return (
    <div className={className} data-name="add">
      <div
        className="absolute inset-[20.833%]"
        data-name="icon"
      >
        <div
          className="absolute inset-0"
          style={
            {
              "--fill-0": "rgba(68, 72, 59, 1)",
            } as React.CSSProperties
          }
        >
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 14 14"
          >
            <path
              d={svgPaths.p2ccb20}
              fill="var(--fill-0, #44483B)"
              id="icon"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

/**
 * @figmaAssetKey ce2afdb7930953aaf65883eb67035bd11f41e679
 */
function Delete({ className }: { className?: string }) {
  return (
    <div className={className} data-name="delete">
      <div
        className="absolute inset-0 overflow-clip"
        data-name="delete"
      >
        <div
          className="absolute inset-[12.5%_20.83%]"
          data-name="Vector"
        >
          <div
            className="absolute inset-0"
            style={
              {
                "--fill-0": "rgba(68, 72, 59, 1)",
              } as React.CSSProperties
            }
          >
            <svg
              className="block size-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 14 18"
            >
              <path
                d={svgPaths.p4c48400}
                fill="var(--fill-0, #44483B)"
                id="Vector"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * @figmaAssetKey 5e45af36549157e8e21a601e54dbe93419f1eebe
 */
function BuildingBlocksImageThumbnail({
  className,
}: {
  className?: string;
}) {
  return (
    <div
      className={className}
      data-name=".Building Blocks/image-Thumbnail"
    >
      <div
        className="relative shrink-0 size-[56px]"
        data-name="Thumbnail"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
          src={imgThumbnail}
        />
      </div>
    </div>
  );
}

/**
 * @figmaAssetKey 5345a50996f643634a37cc011c5535783a64d458
 */
function BuildingBlocksStateLayer1Enabled({
  className,
}: {
  className?: string;
}) {
  return (
    <div
      className={className}
      data-name="Building Blocks/state-layer/1. enabled"
    />
  );
}
type EditProps = {
  className?: string;
  style?:
    | "Filled"
    | "Outlined"
    | "Round"
    | "Sharp"
    | "Two Tone";
};

/**
 * @figmaAssetKey 7d6712169194ce197120596537d05820d8a366ec
 */
function Edit({ className, style = "Filled" }: EditProps) {
  if (style === "Outlined") {
    return (
      <div className={className} data-name="Style=Outlined">
        <div
          className="absolute inset-[12.5%_12.49%]"
          data-name="Vector"
        >
          <img
            alt=""
            className="block max-w-none size-full"
            src={imgVector}
          />
        </div>
      </div>
    );
  }
  if (style === "Round") {
    return (
      <div className={className} data-name="Style=Round">
        <div
          className="absolute inset-[12.495%]"
          data-name="Vector"
        >
          <img
            alt=""
            className="block max-w-none size-full"
            src={imgVector1}
          />
        </div>
      </div>
    );
  }
  if (style === "Sharp") {
    return (
      <div className={className} data-name="Style=Sharp">
        <div
          className="absolute inset-[11.646%]"
          data-name="Vector"
        >
          <img
            alt=""
            className="block max-w-none size-full"
            src={imgVector2}
          />
        </div>
      </div>
    );
  }
  if (style === "Two Tone") {
    return (
      <div className={className} data-name="Style=Two Tone">
        <div
          className="absolute inset-[37.58%_37.58%_20.84%_20.83%]"
          data-name="Vector"
        >
          <img
            alt=""
            className="block max-w-none size-full"
            src={imgVector3}
          />
        </div>
        <div
          className="absolute inset-[12.5%_12.49%_12.5%_12.5%]"
          data-name="Vector"
        >
          <img
            alt=""
            className="block max-w-none size-full"
            src={imgVector4}
          />
        </div>
      </div>
    );
  }
  return (
    <div className={className} data-name="Style=Filled">
      <div
        className="absolute inset-[12.495%]"
        data-name="Vector"
      >
        <img
          alt=""
          className="block max-w-none size-full"
          src={imgVector5}
        />
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
 * @figmaAssetKey 1f20ddad4c7d6d3c649da515a64198e13789f350
 */
function IconButton({
  className,
  type = "Round",
  size = "XSmall",
  style = "Filled",
  width = "Narrow",
}: IconButtonProps) {
  if (
    type === "Square" &&
    size === "XLarge" &&
    style === "Standard" &&
    width === "Wide"
  ) {
    return (
      <div
        className={className}
        data-name="Type=Square, Size=XLarge, Style=Standard, Width=Wide"
      >
        <div
          className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[28px] shrink-0 w-[184px]"
          data-name="Content"
        >
          <div
            className="content-stretch flex h-[136px] items-center justify-center relative shrink-0 w-full"
            data-name="State-layer"
          >
            <div
              className="relative shrink-0 size-[40px]"
              data-name="Icon"
            >
              <div
                className="absolute inset-[8.333%]"
                data-name="icon"
              >
                <div
                  className="absolute inset-0"
                  style={
                    {
                      "--fill-0": "rgba(68, 72, 59, 1)",
                    } as React.CSSProperties
                  }
                >
                  <img
                    alt=""
                    className="block max-w-none size-full"
                    src={img1}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (
    type === "Square" &&
    size === "XLarge" &&
    style === "Standard" &&
    width === "Default"
  ) {
    return (
      <div
        className={className}
        data-name="Type=Square, Size=XLarge, Style=Standard, Width=Default"
      >
        <div
          className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[28px] shrink-0 w-[136px]"
          data-name="Content"
        >
          <div
            className="content-stretch flex h-[136px] items-center justify-center relative shrink-0 w-full"
            data-name="State-layer"
          >
            <div
              className="relative shrink-0 size-[40px]"
              data-name="Icon"
            >
              <div
                className="absolute inset-[8.333%]"
                data-name="icon"
              >
                <div
                  className="absolute inset-0"
                  style={
                    {
                      "--fill-0": "rgba(68, 72, 59, 1)",
                    } as React.CSSProperties
                  }
                >
                  <img
                    alt=""
                    className="block max-w-none size-full"
                    src={img1}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (
    type === "Square" &&
    size === "XLarge" &&
    style === "Standard" &&
    width === "Narrow"
  ) {
    return (
      <div
        className={className}
        data-name="Type=Square, Size=XLarge, Style=Standard, Width=Narrow"
      >
        <div
          className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[28px] shrink-0 w-[104px]"
          data-name="Content"
        >
          <div
            className="content-stretch flex h-[136px] items-center justify-center relative shrink-0 w-full"
            data-name="State-layer"
          >
            <div
              className="relative shrink-0 size-[40px]"
              data-name="Icon"
            >
              <div
                className="absolute inset-[8.333%]"
                data-name="icon"
              >
                <div
                  className="absolute inset-0"
                  style={
                    {
                      "--fill-0": "rgba(68, 72, 59, 1)",
                    } as React.CSSProperties
                  }
                >
                  <img
                    alt=""
                    className="block max-w-none size-full"
                    src={img1}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (
    type === "Square" &&
    size === "Large" &&
    style === "Standard" &&
    width === "Wide"
  ) {
    return (
      <div
        className={className}
        data-name="Type=Square, Size=Large, Style=Standard, Width=Wide"
      >
        <div
          className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[28px] shrink-0 w-[128px]"
          data-name="Content"
        >
          <div
            className="content-stretch flex h-[96px] items-center justify-center relative shrink-0 w-full"
            data-name="State-layer"
          >
            <div
              className="relative shrink-0 size-[32px]"
              data-name="Icon"
            >
              <div
                className="absolute inset-[8.333%]"
                data-name="icon"
              >
                <div
                  className="absolute inset-0"
                  style={
                    {
                      "--fill-0": "rgba(68, 72, 59, 1)",
                    } as React.CSSProperties
                  }
                >
                  <img
                    alt=""
                    className="block max-w-none size-full"
                    src={img2}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (
    type === "Square" &&
    size === "Large" &&
    style === "Standard" &&
    width === "Default"
  ) {
    return (
      <div
        className={className}
        data-name="Type=Square, Size=Large, Style=Standard, Width=Default"
      >
        <div
          className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[28px] shrink-0 w-[96px]"
          data-name="Content"
        >
          <div
            className="content-stretch flex h-[96px] items-center justify-center relative shrink-0 w-full"
            data-name="State-layer"
          >
            <div
              className="relative shrink-0 size-[32px]"
              data-name="Icon"
            >
              <div
                className="absolute inset-[8.333%]"
                data-name="icon"
              >
                <div
                  className="absolute inset-0"
                  style={
                    {
                      "--fill-0": "rgba(68, 72, 59, 1)",
                    } as React.CSSProperties
                  }
                >
                  <img
                    alt=""
                    className="block max-w-none size-full"
                    src={img2}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (
    type === "Square" &&
    size === "Large" &&
    style === "Standard" &&
    width === "Narrow"
  ) {
    return (
      <div
        className={className}
        data-name="Type=Square, Size=Large, Style=Standard, Width=Narrow"
      >
        <div
          className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[28px] shrink-0 w-[64px]"
          data-name="Content"
        >
          <div
            className="content-stretch flex h-[96px] items-center justify-center relative shrink-0 w-full"
            data-name="State-layer"
          >
            <div
              className="relative shrink-0 size-[32px]"
              data-name="Icon"
            >
              <div
                className="absolute inset-[8.333%]"
                data-name="icon"
              >
                <div
                  className="absolute inset-0"
                  style={
                    {
                      "--fill-0": "rgba(68, 72, 59, 1)",
                    } as React.CSSProperties
                  }
                >
                  <img
                    alt=""
                    className="block max-w-none size-full"
                    src={img2}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (
    type === "Square" &&
    size === "Medium" &&
    style === "Standard" &&
    width === "Wide"
  ) {
    return (
      <div
        className={className}
        data-name="Type=Square, Size=Medium, Style=Standard, Width=Wide"
      >
        <div
          className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[16px] shrink-0 w-[72px]"
          data-name="Content"
        >
          <div
            className="h-[56px] relative shrink-0 w-full"
            data-name="State-layer"
          >
            <div className="flex flex-row items-center justify-center size-full">
              <div className="box-border content-stretch flex h-[56px] items-center justify-center px-[32px] py-[16px] relative w-full">
                <div
                  className="relative shrink-0 size-[24px]"
                  data-name="Icon"
                >
                  <div
                    className="absolute inset-[8.333%]"
                    data-name="icon"
                  >
                    <div
                      className="absolute inset-0"
                      style={
                        {
                          "--fill-0": "rgba(68, 72, 59, 1)",
                        } as React.CSSProperties
                      }
                    >
                      <img
                        alt=""
                        className="block max-w-none size-full"
                        src={img3}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (
    type === "Square" &&
    size === "Medium" &&
    style === "Standard" &&
    width === "Default"
  ) {
    return (
      <div
        className={className}
        data-name="Type=Square, Size=Medium, Style=Standard, Width=Default"
      >
        <div
          className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[16px] shrink-0 w-[56px]"
          data-name="Content"
        >
          <div
            className="content-stretch flex h-[56px] items-center justify-center relative shrink-0 w-full"
            data-name="State-layer"
          >
            <div
              className="relative shrink-0 size-[24px]"
              data-name="Icon"
            >
              <div
                className="absolute inset-[8.333%]"
                data-name="icon"
              >
                <div
                  className="absolute inset-0"
                  style={
                    {
                      "--fill-0": "rgba(68, 72, 59, 1)",
                    } as React.CSSProperties
                  }
                >
                  <img
                    alt=""
                    className="block max-w-none size-full"
                    src={img3}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (
    type === "Square" &&
    size === "Medium" &&
    style === "Standard" &&
    width === "Narrow"
  ) {
    return (
      <div
        className={className}
        data-name="Type=Square, Size=Medium, Style=Standard, Width=Narrow"
      >
        <div
          className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[16px] shrink-0 w-[48px]"
          data-name="Content"
        >
          <div
            className="content-stretch flex h-[56px] items-center justify-center relative shrink-0 w-full"
            data-name="State-layer"
          >
            <div
              className="relative shrink-0 size-[24px]"
              data-name="Icon"
            >
              <div
                className="absolute inset-[8.333%]"
                data-name="icon"
              >
                <div
                  className="absolute inset-0"
                  style={
                    {
                      "--fill-0": "rgba(68, 72, 59, 1)",
                    } as React.CSSProperties
                  }
                >
                  <img
                    alt=""
                    className="block max-w-none size-full"
                    src={img3}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (
    type === "Square" &&
    size === "Small" &&
    style === "Standard" &&
    width === "Wide"
  ) {
    return (
      <div
        className={className}
        data-name="Type=Square, Size=Small, Style=Standard, Width=Wide"
      >
        <div
          className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[12px] shrink-0 w-[52px]"
          data-name="Content"
        >
          <div
            className="content-stretch flex h-[40px] items-center justify-center relative shrink-0 w-full"
            data-name="State-layer"
          >
            <div
              className="relative shrink-0 size-[24px]"
              data-name="Icon"
            >
              <div
                className="absolute inset-[8.333%]"
                data-name="icon"
              >
                <div
                  className="absolute inset-0"
                  style={
                    {
                      "--fill-0": "rgba(68, 72, 59, 1)",
                    } as React.CSSProperties
                  }
                >
                  <img
                    alt=""
                    className="block max-w-none size-full"
                    src={img3}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (
    type === "Square" &&
    size === "Small" &&
    style === "Standard" &&
    width === "Default"
  ) {
    return (
      <div
        className={className}
        data-name="Type=Square, Size=Small, Style=Standard, Width=Default"
      >
        <div
          className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[12px] shrink-0 w-[40px]"
          data-name="Content"
        >
          <div
            className="content-stretch flex h-[40px] items-center justify-center relative shrink-0 w-full"
            data-name="State-layer"
          >
            <div
              className="relative shrink-0 size-[24px]"
              data-name="Icon"
            >
              <div
                className="absolute inset-[8.333%]"
                data-name="icon"
              >
                <div
                  className="absolute inset-0"
                  style={
                    {
                      "--fill-0": "rgba(68, 72, 59, 1)",
                    } as React.CSSProperties
                  }
                >
                  <img
                    alt=""
                    className="block max-w-none size-full"
                    src={img3}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (
    type === "Square" &&
    size === "Small" &&
    style === "Standard" &&
    width === "Narrow"
  ) {
    return (
      <div
        className={className}
        data-name="Type=Square, Size=Small, Style=Standard, Width=Narrow"
      >
        <div
          className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[12px] shrink-0 w-[32px]"
          data-name="Content"
        >
          <div
            className="content-stretch flex h-[40px] items-center justify-center relative shrink-0 w-full"
            data-name="State-layer"
          >
            <div
              className="relative shrink-0 size-[24px]"
              data-name="Icon"
            >
              <div
                className="absolute inset-[8.333%]"
                data-name="icon"
              >
                <div
                  className="absolute inset-0"
                  style={
                    {
                      "--fill-0": "rgba(68, 72, 59, 1)",
                    } as React.CSSProperties
                  }
                >
                  <img
                    alt=""
                    className="block max-w-none size-full"
                    src={img3}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (
    type === "Square" &&
    size === "XSmall" &&
    style === "Standard" &&
    width === "Wide"
  ) {
    return (
      <div
        className={className}
        data-name="Type=Square, Size=XSmall, Style=Standard, Width=Wide"
      >
        <div
          className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[12px] shrink-0 w-[40px]"
          data-name="Content"
        >
          <div
            className="content-stretch flex h-[32px] items-center justify-center relative shrink-0 w-full"
            data-name="State-layer"
          >
            <div
              className="relative shrink-0 size-[20px]"
              data-name="Icon"
            >
              <div
                className="absolute inset-[8.333%]"
                data-name="icon"
              >
                <div
                  className="absolute inset-0"
                  style={
                    {
                      "--fill-0": "rgba(68, 72, 59, 1)",
                    } as React.CSSProperties
                  }
                >
                  <img
                    alt=""
                    className="block max-w-none size-full"
                    src={img4}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (
    type === "Square" &&
    size === "XSmall" &&
    style === "Standard" &&
    width === "Default"
  ) {
    return (
      <div
        className={className}
        data-name="Type=Square, Size=XSmall, Style=Standard, Width=Default"
      >
        <div
          className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[12px] shrink-0 w-[32px]"
          data-name="Content"
        >
          <div
            className="content-stretch flex h-[32px] items-center justify-center relative shrink-0 w-full"
            data-name="State-layer"
          >
            <div
              className="relative shrink-0 size-[20px]"
              data-name="Icon"
            >
              <div
                className="absolute inset-[8.333%]"
                data-name="icon"
              >
                <div
                  className="absolute inset-0"
                  style={
                    {
                      "--fill-0": "rgba(68, 72, 59, 1)",
                    } as React.CSSProperties
                  }
                >
                  <img
                    alt=""
                    className="block max-w-none size-full"
                    src={img4}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (
    type === "Square" &&
    size === "XSmall" &&
    style === "Standard" &&
    width === "Narrow"
  ) {
    return (
      <div
        className={className}
        data-name="Type=Square, Size=XSmall, Style=Standard, Width=Narrow"
      >
        <div
          className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[12px] shrink-0 w-[28px]"
          data-name="Content"
        >
          <div
            className="content-stretch flex h-[32px] items-center justify-center relative shrink-0 w-full"
            data-name="State-layer"
          >
            <div
              className="relative shrink-0 size-[20px]"
              data-name="Icon"
            >
              <div
                className="absolute inset-[8.333%]"
                data-name="icon"
              >
                <div
                  className="absolute inset-0"
                  style={
                    {
                      "--fill-0": "rgba(68, 72, 59, 1)",
                    } as React.CSSProperties
                  }
                >
                  <img
                    alt=""
                    className="block max-w-none size-full"
                    src={img4}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (
    type === "Round" &&
    size === "XLarge" &&
    style === "Standard" &&
    width === "Wide"
  ) {
    return (
      <div
        className={className}
        data-name="Type=Round, Size=XLarge, Style=Standard, Width=Wide"
      >
        <div
          className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[100px] shrink-0 w-[184px]"
          data-name="Content"
        >
          <div
            className="content-stretch flex h-[136px] items-center justify-center relative shrink-0 w-full"
            data-name="State-layer"
          >
            <div
              className="relative shrink-0 size-[40px]"
              data-name="Icon"
            >
              <div
                className="absolute inset-[8.333%]"
                data-name="icon"
              >
                <div
                  className="absolute inset-0"
                  style={
                    {
                      "--fill-0": "rgba(68, 72, 59, 1)",
                    } as React.CSSProperties
                  }
                >
                  <img
                    alt=""
                    className="block max-w-none size-full"
                    src={img1}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (
    type === "Round" &&
    size === "XLarge" &&
    style === "Standard" &&
    width === "Default"
  ) {
    return (
      <div
        className={className}
        data-name="Type=Round, Size=XLarge, Style=Standard, Width=Default"
      >
        <div
          className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[100px] shrink-0 w-[136px]"
          data-name="Content"
        >
          <div
            className="content-stretch flex h-[136px] items-center justify-center relative shrink-0 w-full"
            data-name="State-layer"
          >
            <div
              className="relative shrink-0 size-[40px]"
              data-name="Icon"
            >
              <div
                className="absolute inset-[8.333%]"
                data-name="icon"
              >
                <div
                  className="absolute inset-0"
                  style={
                    {
                      "--fill-0": "rgba(68, 72, 59, 1)",
                    } as React.CSSProperties
                  }
                >
                  <img
                    alt=""
                    className="block max-w-none size-full"
                    src={img1}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (
    type === "Round" &&
    size === "XLarge" &&
    style === "Standard" &&
    width === "Narrow"
  ) {
    return (
      <div
        className={className}
        data-name="Type=Round, Size=XLarge, Style=Standard, Width=Narrow"
      >
        <div
          className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[100px] shrink-0 w-[104px]"
          data-name="Content"
        >
          <div
            className="content-stretch flex h-[136px] items-center justify-center relative shrink-0 w-full"
            data-name="State-layer"
          >
            <div
              className="relative shrink-0 size-[40px]"
              data-name="Icon"
            >
              <div
                className="absolute inset-[8.333%]"
                data-name="icon"
              >
                <div
                  className="absolute inset-0"
                  style={
                    {
                      "--fill-0": "rgba(68, 72, 59, 1)",
                    } as React.CSSProperties
                  }
                >
                  <img
                    alt=""
                    className="block max-w-none size-full"
                    src={img1}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (
    type === "Round" &&
    size === "Large" &&
    style === "Standard" &&
    width === "Wide"
  ) {
    return (
      <div
        className={className}
        data-name="Type=Round, Size=Large, Style=Standard, Width=Wide"
      >
        <div
          className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[100px] shrink-0 w-[128px]"
          data-name="Content"
        >
          <div
            className="content-stretch flex h-[96px] items-center justify-center relative shrink-0 w-full"
            data-name="State-layer"
          >
            <div
              className="relative shrink-0 size-[32px]"
              data-name="Icon"
            >
              <div
                className="absolute inset-[8.333%]"
                data-name="icon"
              >
                <div
                  className="absolute inset-0"
                  style={
                    {
                      "--fill-0": "rgba(68, 72, 59, 1)",
                    } as React.CSSProperties
                  }
                >
                  <img
                    alt=""
                    className="block max-w-none size-full"
                    src={img2}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (
    type === "Round" &&
    size === "Large" &&
    style === "Standard" &&
    width === "Default"
  ) {
    return (
      <div
        className={className}
        data-name="Type=Round, Size=Large, Style=Standard, Width=Default"
      >
        <div
          className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[100px] shrink-0 w-[96px]"
          data-name="Content"
        >
          <div
            className="content-stretch flex h-[96px] items-center justify-center relative shrink-0 w-full"
            data-name="State-layer"
          >
            <div
              className="relative shrink-0 size-[32px]"
              data-name="Icon"
            >
              <div
                className="absolute inset-[8.333%]"
                data-name="icon"
              >
                <div
                  className="absolute inset-0"
                  style={
                    {
                      "--fill-0": "rgba(68, 72, 59, 1)",
                    } as React.CSSProperties
                  }
                >
                  <img
                    alt=""
                    className="block max-w-none size-full"
                    src={img2}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (
    type === "Round" &&
    size === "Large" &&
    style === "Standard" &&
    width === "Narrow"
  ) {
    return (
      <div
        className={className}
        data-name="Type=Round, Size=Large, Style=Standard, Width=Narrow"
      >
        <div
          className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[100px] shrink-0 w-[64px]"
          data-name="Content"
        >
          <div
            className="content-stretch flex h-[96px] items-center justify-center relative shrink-0 w-full"
            data-name="State-layer"
          >
            <div
              className="relative shrink-0 size-[32px]"
              data-name="Icon"
            >
              <div
                className="absolute inset-[8.333%]"
                data-name="icon"
              >
                <div
                  className="absolute inset-0"
                  style={
                    {
                      "--fill-0": "rgba(68, 72, 59, 1)",
                    } as React.CSSProperties
                  }
                >
                  <img
                    alt=""
                    className="block max-w-none size-full"
                    src={img2}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (
    type === "Round" &&
    size === "Medium" &&
    style === "Standard" &&
    width === "Wide"
  ) {
    return (
      <div
        className={className}
        data-name="Type=Round, Size=Medium, Style=Standard, Width=Wide"
      >
        <div
          className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[100px] shrink-0 w-[72px]"
          data-name="Content"
        >
          <div
            className="h-[56px] relative shrink-0 w-full"
            data-name="State-layer"
          >
            <div className="flex flex-row items-center justify-center size-full">
              <div className="box-border content-stretch flex h-[56px] items-center justify-center px-[32px] py-[16px] relative w-full">
                <div
                  className="relative shrink-0 size-[24px]"
                  data-name="Icon"
                >
                  <div
                    className="absolute inset-[8.333%]"
                    data-name="icon"
                  >
                    <div
                      className="absolute inset-0"
                      style={
                        {
                          "--fill-0": "rgba(68, 72, 59, 1)",
                        } as React.CSSProperties
                      }
                    >
                      <img
                        alt=""
                        className="block max-w-none size-full"
                        src={img3}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (
    type === "Round" &&
    size === "Medium" &&
    style === "Standard" &&
    width === "Default"
  ) {
    return (
      <div
        className={className}
        data-name="Type=Round, Size=Medium, Style=Standard, Width=Default"
      >
        <div
          className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[100px] shrink-0 w-[56px]"
          data-name="Content"
        >
          <div
            className="content-stretch flex h-[56px] items-center justify-center relative shrink-0 w-full"
            data-name="State-layer"
          >
            <div
              className="relative shrink-0 size-[24px]"
              data-name="Icon"
            >
              <div
                className="absolute inset-[8.333%]"
                data-name="icon"
              >
                <div
                  className="absolute inset-0"
                  style={
                    {
                      "--fill-0": "rgba(68, 72, 59, 1)",
                    } as React.CSSProperties
                  }
                >
                  <img
                    alt=""
                    className="block max-w-none size-full"
                    src={img3}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (
    type === "Round" &&
    size === "Medium" &&
    style === "Standard" &&
    width === "Narrow"
  ) {
    return (
      <div
        className={className}
        data-name="Type=Round, Size=Medium, Style=Standard, Width=Narrow"
      >
        <div
          className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[100px] shrink-0 w-[48px]"
          data-name="Content"
        >
          <div
            className="content-stretch flex h-[56px] items-center justify-center relative shrink-0 w-full"
            data-name="State-layer"
          >
            <div
              className="relative shrink-0 size-[24px]"
              data-name="Icon"
            >
              <div
                className="absolute inset-[8.333%]"
                data-name="icon"
              >
                <div
                  className="absolute inset-0"
                  style={
                    {
                      "--fill-0": "rgba(68, 72, 59, 1)",
                    } as React.CSSProperties
                  }
                >
                  <img
                    alt=""
                    className="block max-w-none size-full"
                    src={img3}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (
    type === "Round" &&
    size === "Small" &&
    style === "Standard" &&
    width === "Wide"
  ) {
    return (
      <div
        className={className}
        data-name="Type=Round, Size=Small, Style=Standard, Width=Wide"
      >
        <div
          className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[100px] shrink-0 w-[52px]"
          data-name="Content"
        >
          <div
            className="content-stretch flex h-[40px] items-center justify-center relative shrink-0 w-full"
            data-name="State-layer"
          >
            <div
              className="relative shrink-0 size-[24px]"
              data-name="Icon"
            >
              <div
                className="absolute inset-[8.333%]"
                data-name="icon"
              >
                <div
                  className="absolute inset-0"
                  style={
                    {
                      "--fill-0": "rgba(68, 72, 59, 1)",
                    } as React.CSSProperties
                  }
                >
                  <img
                    alt=""
                    className="block max-w-none size-full"
                    src={img3}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (
    type === "Round" &&
    size === "Small" &&
    style === "Standard" &&
    width === "Default"
  ) {
    return (
      <div
        className={className}
        data-name="Type=Round, Size=Small, Style=Standard, Width=Default"
      >
        <div
          className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[100px] shrink-0 w-[40px]"
          data-name="Content"
        >
          <div
            className="content-stretch flex h-[40px] items-center justify-center relative shrink-0 w-full"
            data-name="State-layer"
          >
            <div
              className="relative shrink-0 size-[24px]"
              data-name="Icon"
            >
              <div
                className="absolute inset-[8.333%]"
                data-name="icon"
              >
                <div
                  className="absolute inset-0"
                  style={
                    {
                      "--fill-0": "rgba(68, 72, 59, 1)",
                    } as React.CSSProperties
                  }
                >
                  <img
                    alt=""
                    className="block max-w-none size-full"
                    src={img3}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (
    type === "Round" &&
    size === "Small" &&
    style === "Standard" &&
    width === "Narrow"
  ) {
    return (
      <div
        className={className}
        data-name="Type=Round, Size=Small, Style=Standard, Width=Narrow"
      >
        <div
          className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[100px] shrink-0 w-[32px]"
          data-name="Content"
        >
          <div
            className="content-stretch flex h-[40px] items-center justify-center relative shrink-0 w-full"
            data-name="State-layer"
          >
            <div
              className="relative shrink-0 size-[24px]"
              data-name="Icon"
            >
              <div
                className="absolute inset-[8.333%]"
                data-name="icon"
              >
                <div
                  className="absolute inset-0"
                  style={
                    {
                      "--fill-0": "rgba(68, 72, 59, 1)",
                    } as React.CSSProperties
                  }
                >
                  <img
                    alt=""
                    className="block max-w-none size-full"
                    src={img3}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (
    type === "Round" &&
    size === "XSmall" &&
    style === "Standard" &&
    width === "Wide"
  ) {
    return (
      <div
        className={className}
        data-name="Type=Round, Size=XSmall, Style=Standard, Width=Wide"
      >
        <div
          className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[100px] shrink-0 w-[40px]"
          data-name="Content"
        >
          <div
            className="content-stretch flex h-[32px] items-center justify-center relative shrink-0 w-full"
            data-name="State-layer"
          >
            <div
              className="relative shrink-0 size-[20px]"
              data-name="Icon"
            >
              <div
                className="absolute inset-[8.333%]"
                data-name="icon"
              >
                <div
                  className="absolute inset-0"
                  style={
                    {
                      "--fill-0": "rgba(68, 72, 59, 1)",
                    } as React.CSSProperties
                  }
                >
                  <img
                    alt=""
                    className="block max-w-none size-full"
                    src={img4}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (
    type === "Round" &&
    size === "XSmall" &&
    style === "Standard" &&
    width === "Default"
  ) {
    return (
      <div
        className={className}
        data-name="Type=Round, Size=XSmall, Style=Standard, Width=Default"
      >
        <div
          className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[100px] shrink-0 w-[32px]"
          data-name="Content"
        >
          <div
            className="content-stretch flex h-[32px] items-center justify-center relative shrink-0 w-full"
            data-name="State-layer"
          >
            <div
              className="relative shrink-0 size-[20px]"
              data-name="Icon"
            >
              <div
                className="absolute inset-[8.333%]"
                data-name="icon"
              >
                <div
                  className="absolute inset-0"
                  style={
                    {
                      "--fill-0": "rgba(68, 72, 59, 1)",
                    } as React.CSSProperties
                  }
                >
                  <img
                    alt=""
                    className="block max-w-none size-full"
                    src={img4}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (
    type === "Round" &&
    size === "XSmall" &&
    style === "Standard" &&
    width === "Narrow"
  ) {
    return (
      <div
        className={className}
        data-name="Type=Round, Size=XSmall, Style=Standard, Width=Narrow"
      >
        <div
          className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[100px] shrink-0 w-[28px]"
          data-name="Content"
        >
          <div
            className="content-stretch flex h-[32px] items-center justify-center relative shrink-0 w-full"
            data-name="State-layer"
          >
            <div
              className="relative shrink-0 size-[20px]"
              data-name="Icon"
            >
              <div
                className="absolute inset-[8.333%]"
                data-name="icon"
              >
                <div
                  className="absolute inset-0"
                  style={
                    {
                      "--fill-0": "rgba(68, 72, 59, 1)",
                    } as React.CSSProperties
                  }
                >
                  <img
                    alt=""
                    className="block max-w-none size-full"
                    src={img4}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (
    type === "Square" &&
    size === "XLarge" &&
    style === "Outline" &&
    width === "Wide"
  ) {
    return (
      <div
        className={className}
        data-name="Type=Square, Size=XLarge, Style=Outline, Width=Wide"
      >
        <div
          className="relative rounded-[28px] shrink-0 w-[184px]"
          data-name="Content"
        >
          <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[inherit] w-[184px]">
            <div
              className="content-stretch flex h-[136px] items-center justify-center relative shrink-0 w-full"
              data-name="State-layer"
            >
              <div
                className="relative shrink-0 size-[40px]"
                data-name="Icon"
              >
                <div
                  className="absolute inset-[8.333%]"
                  data-name="icon"
                >
                  <div
                    className="absolute inset-0"
                    style={
                      {
                        "--fill-0": "rgba(68, 72, 59, 1)",
                      } as React.CSSProperties
                    }
                  >
                    <img
                      alt=""
                      className="block max-w-none size-full"
                      src={img1}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            aria-hidden="true"
            className="absolute border-2 border-[#c4c8b7] border-solid inset-0 pointer-events-none rounded-[28px]"
          />
        </div>
      </div>
    );
  }
  if (
    type === "Square" &&
    size === "XLarge" &&
    style === "Outline" &&
    width === "Default"
  ) {
    return (
      <div
        className={className}
        data-name="Type=Square, Size=XLarge, Style=Outline, Width=Default"
      >
        <div
          className="relative rounded-[28px] shrink-0 w-[136px]"
          data-name="Content"
        >
          <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[inherit] w-[136px]">
            <div
              className="content-stretch flex h-[136px] items-center justify-center relative shrink-0 w-full"
              data-name="State-layer"
            >
              <div
                className="relative shrink-0 size-[40px]"
                data-name="Icon"
              >
                <div
                  className="absolute inset-[8.333%]"
                  data-name="icon"
                >
                  <div
                    className="absolute inset-0"
                    style={
                      {
                        "--fill-0": "rgba(68, 72, 59, 1)",
                      } as React.CSSProperties
                    }
                  >
                    <img
                      alt=""
                      className="block max-w-none size-full"
                      src={img1}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            aria-hidden="true"
            className="absolute border-2 border-[#c4c8b7] border-solid inset-0 pointer-events-none rounded-[28px]"
          />
        </div>
      </div>
    );
  }
  if (
    type === "Square" &&
    size === "XLarge" &&
    style === "Outline" &&
    width === "Narrow"
  ) {
    return (
      <div
        className={className}
        data-name="Type=Square, Size=XLarge, Style=Outline, Width=Narrow"
      >
        <div
          className="relative rounded-[28px] shrink-0 w-[104px]"
          data-name="Content"
        >
          <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[inherit] w-[104px]">
            <div
              className="content-stretch flex h-[136px] items-center justify-center relative shrink-0 w-full"
              data-name="State-layer"
            >
              <div
                className="relative shrink-0 size-[40px]"
                data-name="Icon"
              >
                <div
                  className="absolute inset-[8.333%]"
                  data-name="icon"
                >
                  <div
                    className="absolute inset-0"
                    style={
                      {
                        "--fill-0": "rgba(68, 72, 59, 1)",
                      } as React.CSSProperties
                    }
                  >
                    <img
                      alt=""
                      className="block max-w-none size-full"
                      src={img1}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            aria-hidden="true"
            className="absolute border-2 border-[#c4c8b7] border-solid inset-0 pointer-events-none rounded-[28px]"
          />
        </div>
      </div>
    );
  }
  if (
    type === "Square" &&
    size === "Large" &&
    style === "Outline" &&
    width === "Wide"
  ) {
    return (
      <div
        className={className}
        data-name="Type=Square, Size=Large, Style=Outline, Width=Wide"
      >
        <div
          className="relative rounded-[28px] shrink-0 w-[128px]"
          data-name="Content"
        >
          <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[inherit] w-[128px]">
            <div
              className="content-stretch flex h-[96px] items-center justify-center relative shrink-0 w-full"
              data-name="State-layer"
            >
              <div
                className="relative shrink-0 size-[32px]"
                data-name="Icon"
              >
                <div
                  className="absolute inset-[8.333%]"
                  data-name="icon"
                >
                  <div
                    className="absolute inset-0"
                    style={
                      {
                        "--fill-0": "rgba(68, 72, 59, 1)",
                      } as React.CSSProperties
                    }
                  >
                    <img
                      alt=""
                      className="block max-w-none size-full"
                      src={img2}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            aria-hidden="true"
            className="absolute border-2 border-[#c4c8b7] border-solid inset-0 pointer-events-none rounded-[28px]"
          />
        </div>
      </div>
    );
  }
  if (
    type === "Square" &&
    size === "Large" &&
    style === "Outline" &&
    width === "Default"
  ) {
    return (
      <div
        className={className}
        data-name="Type=Square, Size=Large, Style=Outline, Width=Default"
      >
        <div
          className="relative rounded-[28px] shrink-0 w-[96px]"
          data-name="Content"
        >
          <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[inherit] w-[96px]">
            <div
              className="content-stretch flex h-[96px] items-center justify-center relative shrink-0 w-full"
              data-name="State-layer"
            >
              <div
                className="relative shrink-0 size-[32px]"
                data-name="Icon"
              >
                <div
                  className="absolute inset-[8.333%]"
                  data-name="icon"
                >
                  <div
                    className="absolute inset-0"
                    style={
                      {
                        "--fill-0": "rgba(68, 72, 59, 1)",
                      } as React.CSSProperties
                    }
                  >
                    <img
                      alt=""
                      className="block max-w-none size-full"
                      src={img2}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            aria-hidden="true"
            className="absolute border-2 border-[#c4c8b7] border-solid inset-0 pointer-events-none rounded-[28px]"
          />
        </div>
      </div>
    );
  }
  if (
    type === "Square" &&
    size === "Large" &&
    style === "Outline" &&
    width === "Narrow"
  ) {
    return (
      <div
        className={className}
        data-name="Type=Square, Size=Large, Style=Outline, Width=Narrow"
      >
        <div
          className="relative rounded-[28px] shrink-0 w-[64px]"
          data-name="Content"
        >
          <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[inherit] w-[64px]">
            <div
              className="content-stretch flex h-[96px] items-center justify-center relative shrink-0 w-full"
              data-name="State-layer"
            >
              <div
                className="relative shrink-0 size-[32px]"
                data-name="Icon"
              >
                <div
                  className="absolute inset-[8.333%]"
                  data-name="icon"
                >
                  <div
                    className="absolute inset-0"
                    style={
                      {
                        "--fill-0": "rgba(68, 72, 59, 1)",
                      } as React.CSSProperties
                    }
                  >
                    <img
                      alt=""
                      className="block max-w-none size-full"
                      src={img2}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            aria-hidden="true"
            className="absolute border-2 border-[#c4c8b7] border-solid inset-0 pointer-events-none rounded-[28px]"
          />
        </div>
      </div>
    );
  }
  if (
    type === "Square" &&
    size === "Medium" &&
    style === "Outline" &&
    width === "Wide"
  ) {
    return (
      <div
        className={className}
        data-name="Type=Square, Size=Medium, Style=Outline, Width=Wide"
      >
        <div
          className="relative rounded-[16px] shrink-0 w-[72px]"
          data-name="Content"
        >
          <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[inherit] w-[72px]">
            <div
              className="h-[56px] relative shrink-0 w-full"
              data-name="State-layer"
            >
              <div className="flex flex-row items-center justify-center size-full">
                <div className="box-border content-stretch flex h-[56px] items-center justify-center px-[32px] py-[16px] relative w-full">
                  <div
                    className="relative shrink-0 size-[24px]"
                    data-name="Icon"
                  >
                    <div
                      className="absolute inset-[8.333%]"
                      data-name="icon"
                    >
                      <div
                        className="absolute inset-0"
                        style={
                          {
                            "--fill-0": "rgba(68, 72, 59, 1)",
                          } as React.CSSProperties
                        }
                      >
                        <img
                          alt=""
                          className="block max-w-none size-full"
                          src={img3}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            aria-hidden="true"
            className="absolute border border-[#c4c8b7] border-solid inset-0 pointer-events-none rounded-[16px]"
          />
        </div>
      </div>
    );
  }
  if (
    type === "Square" &&
    size === "Medium" &&
    style === "Outline" &&
    width === "Default"
  ) {
    return (
      <div
        className={className}
        data-name="Type=Square, Size=Medium, Style=Outline, Width=Default"
      >
        <div
          className="relative rounded-[16px] shrink-0 w-[56px]"
          data-name="Content"
        >
          <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[inherit] w-[56px]">
            <div
              className="content-stretch flex h-[56px] items-center justify-center relative shrink-0 w-full"
              data-name="State-layer"
            >
              <div
                className="relative shrink-0 size-[24px]"
                data-name="Icon"
              >
                <div
                  className="absolute inset-[8.333%]"
                  data-name="icon"
                >
                  <div
                    className="absolute inset-0"
                    style={
                      {
                        "--fill-0": "rgba(68, 72, 59, 1)",
                      } as React.CSSProperties
                    }
                  >
                    <img
                      alt=""
                      className="block max-w-none size-full"
                      src={img3}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            aria-hidden="true"
            className="absolute border border-[#c4c8b7] border-solid inset-0 pointer-events-none rounded-[16px]"
          />
        </div>
      </div>
    );
  }
  if (
    type === "Square" &&
    size === "Medium" &&
    style === "Outline" &&
    width === "Narrow"
  ) {
    return (
      <div
        className={className}
        data-name="Type=Square, Size=Medium, Style=Outline, Width=Narrow"
      >
        <div
          className="relative rounded-[16px] shrink-0 w-[48px]"
          data-name="Content"
        >
          <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[inherit] w-[48px]">
            <div
              className="content-stretch flex h-[56px] items-center justify-center relative shrink-0 w-full"
              data-name="State-layer"
            >
              <div
                className="relative shrink-0 size-[24px]"
                data-name="Icon"
              >
                <div
                  className="absolute inset-[8.333%]"
                  data-name="icon"
                >
                  <div
                    className="absolute inset-0"
                    style={
                      {
                        "--fill-0": "rgba(68, 72, 59, 1)",
                      } as React.CSSProperties
                    }
                  >
                    <img
                      alt=""
                      className="block max-w-none size-full"
                      src={img3}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            aria-hidden="true"
            className="absolute border border-[#c4c8b7] border-solid inset-0 pointer-events-none rounded-[16px]"
          />
        </div>
      </div>
    );
  }
  if (
    type === "Square" &&
    size === "Small" &&
    style === "Outline" &&
    width === "Wide"
  ) {
    return (
      <div
        className={className}
        data-name="Type=Square, Size=Small, Style=Outline, Width=Wide"
      >
        <div
          className="relative rounded-[12px] shrink-0 w-[52px]"
          data-name="Content"
        >
          <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[inherit] w-[52px]">
            <div
              className="content-stretch flex h-[40px] items-center justify-center relative shrink-0 w-full"
              data-name="State-layer"
            >
              <div
                className="relative shrink-0 size-[24px]"
                data-name="Icon"
              >
                <div
                  className="absolute inset-[8.333%]"
                  data-name="icon"
                >
                  <div
                    className="absolute inset-0"
                    style={
                      {
                        "--fill-0": "rgba(68, 72, 59, 1)",
                      } as React.CSSProperties
                    }
                  >
                    <img
                      alt=""
                      className="block max-w-none size-full"
                      src={img3}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            aria-hidden="true"
            className="absolute border border-[#c4c8b7] border-solid inset-0 pointer-events-none rounded-[12px]"
          />
        </div>
      </div>
    );
  }
  if (
    type === "Square" &&
    size === "Small" &&
    style === "Outline" &&
    width === "Default"
  ) {
    return (
      <div
        className={className}
        data-name="Type=Square, Size=Small, Style=Outline, Width=Default"
      >
        <div
          className="relative rounded-[12px] shrink-0 w-[40px]"
          data-name="Content"
        >
          <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[inherit] w-[40px]">
            <div
              className="content-stretch flex h-[40px] items-center justify-center relative shrink-0 w-full"
              data-name="State-layer"
            >
              <div
                className="relative shrink-0 size-[24px]"
                data-name="Icon"
              >
                <div
                  className="absolute inset-[8.333%]"
                  data-name="icon"
                >
                  <div
                    className="absolute inset-0"
                    style={
                      {
                        "--fill-0": "rgba(68, 72, 59, 1)",
                      } as React.CSSProperties
                    }
                  >
                    <img
                      alt=""
                      className="block max-w-none size-full"
                      src={img3}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            aria-hidden="true"
            className="absolute border border-[#c4c8b7] border-solid inset-0 pointer-events-none rounded-[12px]"
          />
        </div>
      </div>
    );
  }
  if (
    type === "Square" &&
    size === "Small" &&
    style === "Outline" &&
    width === "Narrow"
  ) {
    return (
      <div
        className={className}
        data-name="Type=Square, Size=Small, Style=Outline, Width=Narrow"
      >
        <div
          className="relative rounded-[12px] shrink-0 w-[32px]"
          data-name="Content"
        >
          <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[inherit] w-[32px]">
            <div
              className="content-stretch flex h-[40px] items-center justify-center relative shrink-0 w-full"
              data-name="State-layer"
            >
              <div
                className="relative shrink-0 size-[24px]"
                data-name="Icon"
              >
                <div
                  className="absolute inset-[8.333%]"
                  data-name="icon"
                >
                  <div
                    className="absolute inset-0"
                    style={
                      {
                        "--fill-0": "rgba(68, 72, 59, 1)",
                      } as React.CSSProperties
                    }
                  >
                    <img
                      alt=""
                      className="block max-w-none size-full"
                      src={img3}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            aria-hidden="true"
            className="absolute border border-[#c4c8b7] border-solid inset-0 pointer-events-none rounded-[12px]"
          />
        </div>
      </div>
    );
  }
  if (
    type === "Square" &&
    size === "XSmall" &&
    style === "Outline" &&
    width === "Wide"
  ) {
    return (
      <div
        className={className}
        data-name="Type=Square, Size=XSmall, Style=Outline, Width=Wide"
      >
        <div
          className="relative rounded-[12px] shrink-0 w-[40px]"
          data-name="Content"
        >
          <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[inherit] w-[40px]">
            <div
              className="content-stretch flex h-[32px] items-center justify-center relative shrink-0 w-full"
              data-name="State-layer"
            >
              <div
                className="relative shrink-0 size-[20px]"
                data-name="Icon"
              >
                <div
                  className="absolute inset-[8.333%]"
                  data-name="icon"
                >
                  <div
                    className="absolute inset-0"
                    style={
                      {
                        "--fill-0": "rgba(68, 72, 59, 1)",
                      } as React.CSSProperties
                    }
                  >
                    <img
                      alt=""
                      className="block max-w-none size-full"
                      src={img4}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            aria-hidden="true"
            className="absolute border border-[#c4c8b7] border-solid inset-0 pointer-events-none rounded-[12px]"
          />
        </div>
      </div>
    );
  }
  if (
    type === "Square" &&
    size === "XSmall" &&
    style === "Outline" &&
    width === "Default"
  ) {
    return (
      <div
        className={className}
        data-name="Type=Square, Size=XSmall, Style=Outline, Width=Default"
      >
        <div
          className="relative rounded-[12px] shrink-0 w-[32px]"
          data-name="Content"
        >
          <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[inherit] w-[32px]">
            <div
              className="content-stretch flex h-[32px] items-center justify-center relative shrink-0 w-full"
              data-name="State-layer"
            >
              <div
                className="relative shrink-0 size-[20px]"
                data-name="Icon"
              >
                <div
                  className="absolute inset-[8.333%]"
                  data-name="icon"
                >
                  <div
                    className="absolute inset-0"
                    style={
                      {
                        "--fill-0": "rgba(68, 72, 59, 1)",
                      } as React.CSSProperties
                    }
                  >
                    <img
                      alt=""
                      className="block max-w-none size-full"
                      src={img4}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            aria-hidden="true"
            className="absolute border border-[#c4c8b7] border-solid inset-0 pointer-events-none rounded-[12px]"
          />
        </div>
      </div>
    );
  }
  if (
    type === "Square" &&
    size === "XSmall" &&
    style === "Outline" &&
    width === "Narrow"
  ) {
    return (
      <div
        className={className}
        data-name="Type=Square, Size=XSmall, Style=Outline, Width=Narrow"
      >
        <div
          className="relative rounded-[12px] shrink-0 w-[28px]"
          data-name="Content"
        >
          <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[inherit] w-[28px]">
            <div
              className="content-stretch flex h-[32px] items-center justify-center relative shrink-0 w-full"
              data-name="State-layer"
            >
              <div
                className="relative shrink-0 size-[20px]"
                data-name="Icon"
              >
                <div
                  className="absolute inset-[8.333%]"
                  data-name="icon"
                >
                  <div
                    className="absolute inset-0"
                    style={
                      {
                        "--fill-0": "rgba(68, 72, 59, 1)",
                      } as React.CSSProperties
                    }
                  >
                    <img
                      alt=""
                      className="block max-w-none size-full"
                      src={img4}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            aria-hidden="true"
            className="absolute border border-[#c4c8b7] border-solid inset-0 pointer-events-none rounded-[12px]"
          />
        </div>
      </div>
    );
  }
  if (
    type === "Round" &&
    size === "XLarge" &&
    style === "Outline" &&
    width === "Wide"
  ) {
    return (
      <div
        className={className}
        data-name="Type=Round, Size=XLarge, Style=Outline, Width=Wide"
      >
        <div
          className="relative rounded-[100px] shrink-0 w-[184px]"
          data-name="Content"
        >
          <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[inherit] w-[184px]">
            <div
              className="content-stretch flex h-[136px] items-center justify-center relative shrink-0 w-full"
              data-name="State-layer"
            >
              <div
                className="relative shrink-0 size-[40px]"
                data-name="Icon"
              >
                <div
                  className="absolute inset-[8.333%]"
                  data-name="icon"
                >
                  <div
                    className="absolute inset-0"
                    style={
                      {
                        "--fill-0": "rgba(68, 72, 59, 1)",
                      } as React.CSSProperties
                    }
                  >
                    <img
                      alt=""
                      className="block max-w-none size-full"
                      src={img1}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            aria-hidden="true"
            className="absolute border-2 border-[#c4c8b7] border-solid inset-0 pointer-events-none rounded-[100px]"
          />
        </div>
      </div>
    );
  }
  if (
    type === "Round" &&
    size === "XLarge" &&
    style === "Outline" &&
    width === "Default"
  ) {
    return (
      <div
        className={className}
        data-name="Type=Round, Size=XLarge, Style=Outline, Width=Default"
      >
        <div
          className="relative rounded-[100px] shrink-0 w-[136px]"
          data-name="Content"
        >
          <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[inherit] w-[136px]">
            <div
              className="content-stretch flex h-[136px] items-center justify-center relative shrink-0 w-full"
              data-name="State-layer"
            >
              <div
                className="relative shrink-0 size-[40px]"
                data-name="Icon"
              >
                <div
                  className="absolute inset-[8.333%]"
                  data-name="icon"
                >
                  <div
                    className="absolute inset-0"
                    style={
                      {
                        "--fill-0": "rgba(68, 72, 59, 1)",
                      } as React.CSSProperties
                    }
                  >
                    <img
                      alt=""
                      className="block max-w-none size-full"
                      src={img1}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            aria-hidden="true"
            className="absolute border-2 border-[#c4c8b7] border-solid inset-0 pointer-events-none rounded-[100px]"
          />
        </div>
      </div>
    );
  }
  if (
    type === "Round" &&
    size === "XLarge" &&
    style === "Outline" &&
    width === "Narrow"
  ) {
    return (
      <div
        className={className}
        data-name="Type=Round, Size=XLarge, Style=Outline, Width=Narrow"
      >
        <div
          className="relative rounded-[100px] shrink-0 w-[104px]"
          data-name="Content"
        >
          <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[inherit] w-[104px]">
            <div
              className="content-stretch flex h-[136px] items-center justify-center relative shrink-0 w-full"
              data-name="State-layer"
            >
              <div
                className="relative shrink-0 size-[40px]"
                data-name="Icon"
              >
                <div
                  className="absolute inset-[8.333%]"
                  data-name="icon"
                >
                  <div
                    className="absolute inset-0"
                    style={
                      {
                        "--fill-0": "rgba(68, 72, 59, 1)",
                      } as React.CSSProperties
                    }
                  >
                    <img
                      alt=""
                      className="block max-w-none size-full"
                      src={img1}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            aria-hidden="true"
            className="absolute border-2 border-[#c4c8b7] border-solid inset-0 pointer-events-none rounded-[100px]"
          />
        </div>
      </div>
    );
  }
  if (
    type === "Round" &&
    size === "Large" &&
    style === "Outline" &&
    width === "Wide"
  ) {
    return (
      <div
        className={className}
        data-name="Type=Round, Size=Large, Style=Outline, Width=Wide"
      >
        <div
          className="relative rounded-[100px] shrink-0 w-[128px]"
          data-name="Content"
        >
          <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[inherit] w-[128px]">
            <div
              className="content-stretch flex h-[96px] items-center justify-center relative shrink-0 w-full"
              data-name="State-layer"
            >
              <div
                className="relative shrink-0 size-[32px]"
                data-name="Icon"
              >
                <div
                  className="absolute inset-[8.333%]"
                  data-name="icon"
                >
                  <div
                    className="absolute inset-0"
                    style={
                      {
                        "--fill-0": "rgba(68, 72, 59, 1)",
                      } as React.CSSProperties
                    }
                  >
                    <img
                      alt=""
                      className="block max-w-none size-full"
                      src={img2}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            aria-hidden="true"
            className="absolute border-2 border-[#c4c8b7] border-solid inset-0 pointer-events-none rounded-[100px]"
          />
        </div>
      </div>
    );
  }
  if (
    type === "Round" &&
    size === "Large" &&
    style === "Outline" &&
    width === "Default"
  ) {
    return (
      <div
        className={className}
        data-name="Type=Round, Size=Large, Style=Outline, Width=Default"
      >
        <div
          className="relative rounded-[100px] shrink-0 w-[96px]"
          data-name="Content"
        >
          <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[inherit] w-[96px]">
            <div
              className="content-stretch flex h-[96px] items-center justify-center relative shrink-0 w-full"
              data-name="State-layer"
            >
              <div
                className="relative shrink-0 size-[32px]"
                data-name="Icon"
              >
                <div
                  className="absolute inset-[8.333%]"
                  data-name="icon"
                >
                  <div
                    className="absolute inset-0"
                    style={
                      {
                        "--fill-0": "rgba(68, 72, 59, 1)",
                      } as React.CSSProperties
                    }
                  >
                    <img
                      alt=""
                      className="block max-w-none size-full"
                      src={img2}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            aria-hidden="true"
            className="absolute border-2 border-[#c4c8b7] border-solid inset-0 pointer-events-none rounded-[100px]"
          />
        </div>
      </div>
    );
  }
  if (
    type === "Round" &&
    size === "Large" &&
    style === "Outline" &&
    width === "Narrow"
  ) {
    return (
      <div
        className={className}
        data-name="Type=Round, Size=Large, Style=Outline, Width=Narrow"
      >
        <div
          className="relative rounded-[100px] shrink-0 w-[64px]"
          data-name="Content"
        >
          <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[inherit] w-[64px]">
            <div
              className="content-stretch flex h-[96px] items-center justify-center relative shrink-0 w-full"
              data-name="State-layer"
            >
              <div
                className="relative shrink-0 size-[32px]"
                data-name="Icon"
              >
                <div
                  className="absolute inset-[8.333%]"
                  data-name="icon"
                >
                  <div
                    className="absolute inset-0"
                    style={
                      {
                        "--fill-0": "rgba(68, 72, 59, 1)",
                      } as React.CSSProperties
                    }
                  >
                    <img
                      alt=""
                      className="block max-w-none size-full"
                      src={img2}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            aria-hidden="true"
            className="absolute border-2 border-[#c4c8b7] border-solid inset-0 pointer-events-none rounded-[100px]"
          />
        </div>
      </div>
    );
  }
  if (
    type === "Round" &&
    size === "Medium" &&
    style === "Outline" &&
    width === "Wide"
  ) {
    return (
      <div
        className={className}
        data-name="Type=Round, Size=Medium, Style=Outline, Width=Wide"
      >
        <div
          className="relative rounded-[100px] shrink-0 w-[72px]"
          data-name="Content"
        >
          <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[inherit] w-[72px]">
            <div
              className="h-[56px] relative shrink-0 w-full"
              data-name="State-layer"
            >
              <div className="flex flex-row items-center justify-center size-full">
                <div className="box-border content-stretch flex h-[56px] items-center justify-center px-[32px] py-[16px] relative w-full">
                  <div
                    className="relative shrink-0 size-[24px]"
                    data-name="Icon"
                  >
                    <div
                      className="absolute inset-[8.333%]"
                      data-name="icon"
                    >
                      <div
                        className="absolute inset-0"
                        style={
                          {
                            "--fill-0": "rgba(68, 72, 59, 1)",
                          } as React.CSSProperties
                        }
                      >
                        <img
                          alt=""
                          className="block max-w-none size-full"
                          src={img3}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            aria-hidden="true"
            className="absolute border border-[#c4c8b7] border-solid inset-0 pointer-events-none rounded-[100px]"
          />
        </div>
      </div>
    );
  }
  if (
    type === "Round" &&
    size === "Medium" &&
    style === "Outline" &&
    width === "Default"
  ) {
    return (
      <div
        className={className}
        data-name="Type=Round, Size=Medium, Style=Outline, Width=Default"
      >
        <div
          className="relative rounded-[100px] shrink-0 w-[56px]"
          data-name="Content"
        >
          <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[inherit] w-[56px]">
            <div
              className="content-stretch flex h-[56px] items-center justify-center relative shrink-0 w-full"
              data-name="State-layer"
            >
              <div
                className="relative shrink-0 size-[24px]"
                data-name="Icon"
              >
                <div
                  className="absolute inset-[8.333%]"
                  data-name="icon"
                >
                  <div
                    className="absolute inset-0"
                    style={
                      {
                        "--fill-0": "rgba(68, 72, 59, 1)",
                      } as React.CSSProperties
                    }
                  >
                    <img
                      alt=""
                      className="block max-w-none size-full"
                      src={img3}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            aria-hidden="true"
            className="absolute border border-[#c4c8b7] border-solid inset-0 pointer-events-none rounded-[100px]"
          />
        </div>
      </div>
    );
  }
  if (
    type === "Round" &&
    size === "Medium" &&
    style === "Outline" &&
    width === "Narrow"
  ) {
    return (
      <div
        className={className}
        data-name="Type=Round, Size=Medium, Style=Outline, Width=Narrow"
      >
        <div
          className="relative rounded-[100px] shrink-0 w-[48px]"
          data-name="Content"
        >
          <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[inherit] w-[48px]">
            <div
              className="content-stretch flex h-[56px] items-center justify-center relative shrink-0 w-full"
              data-name="State-layer"
            >
              <div
                className="relative shrink-0 size-[24px]"
                data-name="Icon"
              >
                <div
                  className="absolute inset-[8.333%]"
                  data-name="icon"
                >
                  <div
                    className="absolute inset-0"
                    style={
                      {
                        "--fill-0": "rgba(68, 72, 59, 1)",
                      } as React.CSSProperties
                    }
                  >
                    <img
                      alt=""
                      className="block max-w-none size-full"
                      src={img3}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            aria-hidden="true"
            className="absolute border border-[#c4c8b7] border-solid inset-0 pointer-events-none rounded-[100px]"
          />
        </div>
      </div>
    );
  }
  if (
    type === "Round" &&
    size === "Small" &&
    style === "Outline" &&
    width === "Wide"
  ) {
    return (
      <div
        className={className}
        data-name="Type=Round, Size=Small, Style=Outline, Width=Wide"
      >
        <div
          className="relative rounded-[100px] shrink-0 w-[52px]"
          data-name="Content"
        >
          <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[inherit] w-[52px]">
            <div
              className="content-stretch flex h-[40px] items-center justify-center relative shrink-0 w-full"
              data-name="State-layer"
            >
              <div
                className="relative shrink-0 size-[24px]"
                data-name="Icon"
              >
                <div
                  className="absolute inset-[8.333%]"
                  data-name="icon"
                >
                  <div
                    className="absolute inset-0"
                    style={
                      {
                        "--fill-0": "rgba(68, 72, 59, 1)",
                      } as React.CSSProperties
                    }
                  >
                    <img
                      alt=""
                      className="block max-w-none size-full"
                      src={img3}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            aria-hidden="true"
            className="absolute border border-[#c4c8b7] border-solid inset-0 pointer-events-none rounded-[100px]"
          />
        </div>
      </div>
    );
  }
  if (
    type === "Round" &&
    size === "Small" &&
    style === "Outline" &&
    width === "Default"
  ) {
    return (
      <div
        className={className}
        data-name="Type=Round, Size=Small, Style=Outline, Width=Default"
      >
        <div
          className="relative rounded-[100px] shrink-0 w-[40px]"
          data-name="Content"
        >
          <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[inherit] w-[40px]">
            <div
              className="content-stretch flex h-[40px] items-center justify-center relative shrink-0 w-full"
              data-name="State-layer"
            >
              <div
                className="relative shrink-0 size-[24px]"
                data-name="Icon"
              >
                <div
                  className="absolute inset-[8.333%]"
                  data-name="icon"
                >
                  <div
                    className="absolute inset-0"
                    style={
                      {
                        "--fill-0": "rgba(68, 72, 59, 1)",
                      } as React.CSSProperties
                    }
                  >
                    <img
                      alt=""
                      className="block max-w-none size-full"
                      src={img3}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            aria-hidden="true"
            className="absolute border border-[#c4c8b7] border-solid inset-0 pointer-events-none rounded-[100px]"
          />
        </div>
      </div>
    );
  }
  if (
    type === "Round" &&
    size === "Small" &&
    style === "Outline" &&
    width === "Narrow"
  ) {
    return (
      <div
        className={className}
        data-name="Type=Round, Size=Small, Style=Outline, Width=Narrow"
      >
        <div
          className="relative rounded-[100px] shrink-0 w-[32px]"
          data-name="Content"
        >
          <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[inherit] w-[32px]">
            <div
              className="content-stretch flex h-[40px] items-center justify-center relative shrink-0 w-full"
              data-name="State-layer"
            >
              <div
                className="relative shrink-0 size-[24px]"
                data-name="Icon"
              >
                <div
                  className="absolute inset-[8.333%]"
                  data-name="icon"
                >
                  <div
                    className="absolute inset-0"
                    style={
                      {
                        "--fill-0": "rgba(68, 72, 59, 1)",
                      } as React.CSSProperties
                    }
                  >
                    <img
                      alt=""
                      className="block max-w-none size-full"
                      src={img3}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            aria-hidden="true"
            className="absolute border border-[#c4c8b7] border-solid inset-0 pointer-events-none rounded-[100px]"
          />
        </div>
      </div>
    );
  }
  if (
    type === "Round" &&
    size === "XSmall" &&
    style === "Outline" &&
    width === "Wide"
  ) {
    return (
      <div
        className={className}
        data-name="Type=Round, Size=XSmall, Style=Outline, Width=Wide"
      >
        <div
          className="relative rounded-[100px] shrink-0 w-[40px]"
          data-name="Content"
        >
          <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[inherit] w-[40px]">
            <div
              className="content-stretch flex h-[32px] items-center justify-center relative shrink-0 w-full"
              data-name="State-layer"
            >
              <div
                className="relative shrink-0 size-[20px]"
                data-name="Icon"
              >
                <div
                  className="absolute inset-[8.333%]"
                  data-name="icon"
                >
                  <div
                    className="absolute inset-0"
                    style={
                      {
                        "--fill-0": "rgba(68, 72, 59, 1)",
                      } as React.CSSProperties
                    }
                  >
                    <img
                      alt=""
                      className="block max-w-none size-full"
                      src={img4}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            aria-hidden="true"
            className="absolute border border-[#c4c8b7] border-solid inset-0 pointer-events-none rounded-[100px]"
          />
        </div>
      </div>
    );
  }
  if (
    type === "Round" &&
    size === "XSmall" &&
    style === "Outline" &&
    width === "Default"
  ) {
    return (
      <div
        className={className}
        data-name="Type=Round, Size=XSmall, Style=Outline, Width=Default"
      >
        <div
          className="relative rounded-[100px] shrink-0 w-[32px]"
          data-name="Content"
        >
          <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[inherit] w-[32px]">
            <div
              className="content-stretch flex h-[32px] items-center justify-center relative shrink-0 w-full"
              data-name="State-layer"
            >
              <div
                className="relative shrink-0 size-[20px]"
                data-name="Icon"
              >
                <div
                  className="absolute inset-[8.333%]"
                  data-name="icon"
                >
                  <div
                    className="absolute inset-0"
                    style={
                      {
                        "--fill-0": "rgba(68, 72, 59, 1)",
                      } as React.CSSProperties
                    }
                  >
                    <img
                      alt=""
                      className="block max-w-none size-full"
                      src={img4}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            aria-hidden="true"
            className="absolute border border-[#c4c8b7] border-solid inset-0 pointer-events-none rounded-[100px]"
          />
        </div>
      </div>
    );
  }
  if (
    type === "Round" &&
    size === "XSmall" &&
    style === "Outline" &&
    width === "Narrow"
  ) {
    return (
      <div
        className={className}
        data-name="Type=Round, Size=XSmall, Style=Outline, Width=Narrow"
      >
        <div
          className="relative rounded-[100px] shrink-0 w-[28px]"
          data-name="Content"
        >
          <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[inherit] w-[28px]">
            <div
              className="content-stretch flex h-[32px] items-center justify-center relative shrink-0 w-full"
              data-name="State-layer"
            >
              <div
                className="relative shrink-0 size-[20px]"
                data-name="Icon"
              >
                <div
                  className="absolute inset-[8.333%]"
                  data-name="icon"
                >
                  <div
                    className="absolute inset-0"
                    style={
                      {
                        "--fill-0": "rgba(68, 72, 59, 1)",
                      } as React.CSSProperties
                    }
                  >
                    <img
                      alt=""
                      className="block max-w-none size-full"
                      src={img4}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            aria-hidden="true"
            className="absolute border border-[#c4c8b7] border-solid inset-0 pointer-events-none rounded-[100px]"
          />
        </div>
      </div>
    );
  }
  if (
    type === "Square" &&
    size === "XLarge" &&
    style === "Tonal" &&
    width === "Wide"
  ) {
    return (
      <div
        className={className}
        data-name="Type=Square, Size=XLarge, Style=Tonal, Width=Wide"
      >
        <div
          className="bg-[#dae2ff] content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[28px] shrink-0 w-[184px]"
          data-name="Content"
        >
          <div
            className="h-[136px] relative shrink-0 w-full"
            data-name="State-layer"
          >
            <div className="flex flex-row items-center justify-center size-full">
              <div className="box-border content-stretch flex h-[136px] items-center justify-center p-[48px] relative w-full">
                <div
                  className="relative shrink-0 size-[40px]"
                  data-name="Icon"
                >
                  <div
                    className="absolute inset-[8.333%]"
                    data-name="icon"
                  >
                    <div
                      className="absolute inset-0"
                      style={
                        {
                          "--fill-0": "rgba(23, 66, 149, 1)",
                        } as React.CSSProperties
                      }
                    >
                      <img
                        alt=""
                        className="block max-w-none size-full"
                        src={img5}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (
    type === "Square" &&
    size === "XLarge" &&
    style === "Tonal" &&
    width === "Default"
  ) {
    return (
      <div
        className={className}
        data-name="Type=Square, Size=XLarge, Style=Tonal, Width=Default"
      >
        <div
          className="bg-[#dae2ff] content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[28px] shrink-0 w-[136px]"
          data-name="Content"
        >
          <div
            className="h-[136px] relative shrink-0 w-full"
            data-name="State-layer"
          >
            <div className="flex flex-row items-center justify-center size-full">
              <div className="box-border content-stretch flex h-[136px] items-center justify-center p-[48px] relative w-full">
                <div
                  className="relative shrink-0 size-[40px]"
                  data-name="Icon"
                >
                  <div
                    className="absolute inset-[8.333%]"
                    data-name="icon"
                  >
                    <div
                      className="absolute inset-0"
                      style={
                        {
                          "--fill-0": "rgba(23, 66, 149, 1)",
                        } as React.CSSProperties
                      }
                    >
                      <img
                        alt=""
                        className="block max-w-none size-full"
                        src={img5}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (
    type === "Square" &&
    size === "XLarge" &&
    style === "Tonal" &&
    width === "Narrow"
  ) {
    return (
      <div
        className={className}
        data-name="Type=Square, Size=XLarge, Style=Tonal, Width=Narrow"
      >
        <div
          className="bg-[#dae2ff] content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[28px] shrink-0 w-[104px]"
          data-name="Content"
        >
          <div
            className="h-[136px] relative shrink-0 w-full"
            data-name="State-layer"
          >
            <div className="flex flex-row items-center justify-center size-full">
              <div className="box-border content-stretch flex h-[136px] items-center justify-center p-[48px] relative w-full">
                <div
                  className="relative shrink-0 size-[40px]"
                  data-name="Icon"
                >
                  <div
                    className="absolute inset-[8.333%]"
                    data-name="icon"
                  >
                    <div
                      className="absolute inset-0"
                      style={
                        {
                          "--fill-0": "rgba(23, 66, 149, 1)",
                        } as React.CSSProperties
                      }
                    >
                      <img
                        alt=""
                        className="block max-w-none size-full"
                        src={img5}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (
    type === "Square" &&
    size === "Large" &&
    style === "Tonal" &&
    width === "Wide"
  ) {
    return (
      <div
        className={className}
        data-name="Type=Square, Size=Large, Style=Tonal, Width=Wide"
      >
        <div
          className="bg-[#dae2ff] content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[28px] shrink-0 w-[128px]"
          data-name="Content"
        >
          <div
            className="h-[96px] relative shrink-0 w-full"
            data-name="State-layer"
          >
            <div className="flex flex-row items-center justify-center size-full">
              <div className="box-border content-stretch flex h-[96px] items-center justify-center p-[32px] relative w-full">
                <div
                  className="relative shrink-0 size-[32px]"
                  data-name="Icon"
                >
                  <div
                    className="absolute inset-[8.333%]"
                    data-name="icon"
                  >
                    <div
                      className="absolute inset-0"
                      style={
                        {
                          "--fill-0": "rgba(23, 66, 149, 1)",
                        } as React.CSSProperties
                      }
                    >
                      <img
                        alt=""
                        className="block max-w-none size-full"
                        src={img6}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (
    type === "Square" &&
    size === "Large" &&
    style === "Tonal" &&
    width === "Default"
  ) {
    return (
      <div
        className={className}
        data-name="Type=Square, Size=Large, Style=Tonal, Width=Default"
      >
        <div
          className="bg-[#dae2ff] content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[28px] shrink-0 w-[96px]"
          data-name="Content"
        >
          <div
            className="h-[96px] relative shrink-0 w-full"
            data-name="State-layer"
          >
            <div className="flex flex-row items-center justify-center size-full">
              <div className="box-border content-stretch flex h-[96px] items-center justify-center p-[32px] relative w-full">
                <div
                  className="relative shrink-0 size-[32px]"
                  data-name="Icon"
                >
                  <div
                    className="absolute inset-[8.333%]"
                    data-name="icon"
                  >
                    <div
                      className="absolute inset-0"
                      style={
                        {
                          "--fill-0": "rgba(23, 66, 149, 1)",
                        } as React.CSSProperties
                      }
                    >
                      <img
                        alt=""
                        className="block max-w-none size-full"
                        src={img6}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (
    type === "Square" &&
    size === "Large" &&
    style === "Tonal" &&
    width === "Narrow"
  ) {
    return (
      <div
        className={className}
        data-name="Type=Square, Size=Large, Style=Tonal, Width=Narrow"
      >
        <div
          className="bg-[#dae2ff] content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[28px] shrink-0 w-[64px]"
          data-name="Content"
        >
          <div
            className="h-[96px] relative shrink-0 w-full"
            data-name="State-layer"
          >
            <div className="flex flex-row items-center justify-center size-full">
              <div className="box-border content-stretch flex h-[96px] items-center justify-center p-[32px] relative w-full">
                <div
                  className="relative shrink-0 size-[32px]"
                  data-name="Icon"
                >
                  <div
                    className="absolute inset-[8.333%]"
                    data-name="icon"
                  >
                    <div
                      className="absolute inset-0"
                      style={
                        {
                          "--fill-0": "rgba(23, 66, 149, 1)",
                        } as React.CSSProperties
                      }
                    >
                      <img
                        alt=""
                        className="block max-w-none size-full"
                        src={img6}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (
    type === "Square" &&
    size === "Medium" &&
    style === "Tonal" &&
    width === "Wide"
  ) {
    return (
      <div
        className={className}
        data-name="Type=Square, Size=Medium, Style=Tonal, Width=Wide"
      >
        <div
          className="bg-[#dae2ff] content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[16px] shrink-0 w-[72px]"
          data-name="Content"
        >
          <div
            className="h-[56px] relative shrink-0 w-full"
            data-name="State-layer"
          >
            <div className="flex flex-row items-center justify-center size-full">
              <div className="box-border content-stretch flex h-[56px] items-center justify-center p-[16px] relative w-full">
                <div
                  className="relative shrink-0 size-[24px]"
                  data-name="Icon"
                >
                  <div
                    className="absolute inset-[8.333%]"
                    data-name="icon"
                  >
                    <div
                      className="absolute inset-0"
                      style={
                        {
                          "--fill-0": "rgba(23, 66, 149, 1)",
                        } as React.CSSProperties
                      }
                    >
                      <img
                        alt=""
                        className="block max-w-none size-full"
                        src={img7}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (
    type === "Square" &&
    size === "Medium" &&
    style === "Tonal" &&
    width === "Default"
  ) {
    return (
      <div
        className={className}
        data-name="Type=Square, Size=Medium, Style=Tonal, Width=Default"
      >
        <div
          className="bg-[#dae2ff] content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[16px] shrink-0 w-[56px]"
          data-name="Content"
        >
          <div
            className="h-[56px] relative shrink-0 w-full"
            data-name="State-layer"
          >
            <div className="flex flex-row items-center justify-center size-full">
              <div className="box-border content-stretch flex h-[56px] items-center justify-center p-[16px] relative w-full">
                <div
                  className="relative shrink-0 size-[24px]"
                  data-name="Icon"
                >
                  <div
                    className="absolute inset-[8.333%]"
                    data-name="icon"
                  >
                    <div
                      className="absolute inset-0"
                      style={
                        {
                          "--fill-0": "rgba(23, 66, 149, 1)",
                        } as React.CSSProperties
                      }
                    >
                      <img
                        alt=""
                        className="block max-w-none size-full"
                        src={img7}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (
    type === "Square" &&
    size === "Medium" &&
    style === "Tonal" &&
    width === "Narrow"
  ) {
    return (
      <div
        className={className}
        data-name="Type=Square, Size=Medium, Style=Tonal, Width=Narrow"
      >
        <div
          className="bg-[#dae2ff] content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[16px] shrink-0 w-[48px]"
          data-name="Content"
        >
          <div
            className="h-[56px] relative shrink-0 w-full"
            data-name="State-layer"
          >
            <div className="flex flex-row items-center justify-center size-full">
              <div className="box-border content-stretch flex h-[56px] items-center justify-center p-[16px] relative w-full">
                <div
                  className="relative shrink-0 size-[24px]"
                  data-name="Icon"
                >
                  <div
                    className="absolute inset-[8.333%]"
                    data-name="icon"
                  >
                    <div
                      className="absolute inset-0"
                      style={
                        {
                          "--fill-0": "rgba(23, 66, 149, 1)",
                        } as React.CSSProperties
                      }
                    >
                      <img
                        alt=""
                        className="block max-w-none size-full"
                        src={img7}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (
    type === "Square" &&
    size === "Small" &&
    style === "Tonal" &&
    width === "Wide"
  ) {
    return (
      <div
        className={className}
        data-name="Type=Square, Size=Small, Style=Tonal, Width=Wide"
      >
        <div
          className="bg-[#dae2ff] content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[12px] shrink-0 w-[52px]"
          data-name="Content"
        >
          <div
            className="h-[40px] relative shrink-0 w-full"
            data-name="State-layer"
          >
            <div className="flex flex-row items-center justify-center size-full">
              <div className="box-border content-stretch flex h-[40px] items-center justify-center p-[10px] relative w-full">
                <div
                  className="relative shrink-0 size-[24px]"
                  data-name="Icon"
                >
                  <div
                    className="absolute inset-[8.333%]"
                    data-name="icon"
                  >
                    <div
                      className="absolute inset-0"
                      style={
                        {
                          "--fill-0": "rgba(23, 66, 149, 1)",
                        } as React.CSSProperties
                      }
                    >
                      <img
                        alt=""
                        className="block max-w-none size-full"
                        src={img7}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (
    type === "Square" &&
    size === "Small" &&
    style === "Tonal" &&
    width === "Default"
  ) {
    return (
      <div
        className={className}
        data-name="Type=Square, Size=Small, Style=Tonal, Width=Default"
      >
        <div
          className="bg-[#dae2ff] content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[12px] shrink-0 w-[40px]"
          data-name="Content"
        >
          <div
            className="h-[40px] relative shrink-0 w-full"
            data-name="State-layer"
          >
            <div className="flex flex-row items-center justify-center size-full">
              <div className="box-border content-stretch flex h-[40px] items-center justify-center p-[10px] relative w-full">
                <div
                  className="relative shrink-0 size-[24px]"
                  data-name="Icon"
                >
                  <div
                    className="absolute inset-[8.333%]"
                    data-name="icon"
                  >
                    <div
                      className="absolute inset-0"
                      style={
                        {
                          "--fill-0": "rgba(23, 66, 149, 1)",
                        } as React.CSSProperties
                      }
                    >
                      <img
                        alt=""
                        className="block max-w-none size-full"
                        src={img7}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (
    type === "Square" &&
    size === "Small" &&
    style === "Tonal" &&
    width === "Narrow"
  ) {
    return (
      <div
        className={className}
        data-name="Type=Square, Size=Small, Style=Tonal, Width=Narrow"
      >
        <div
          className="bg-[#dae2ff] content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[12px] shrink-0 w-[32px]"
          data-name="Content"
        >
          <div
            className="h-[40px] relative shrink-0 w-full"
            data-name="State-layer"
          >
            <div className="flex flex-row items-center justify-center size-full">
              <div className="box-border content-stretch flex h-[40px] items-center justify-center p-[10px] relative w-full">
                <div
                  className="relative shrink-0 size-[24px]"
                  data-name="Icon"
                >
                  <div
                    className="absolute inset-[8.333%]"
                    data-name="icon"
                  >
                    <div
                      className="absolute inset-0"
                      style={
                        {
                          "--fill-0": "rgba(23, 66, 149, 1)",
                        } as React.CSSProperties
                      }
                    >
                      <img
                        alt=""
                        className="block max-w-none size-full"
                        src={img7}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (
    type === "Square" &&
    size === "XSmall" &&
    style === "Tonal" &&
    width === "Wide"
  ) {
    return (
      <div
        className={className}
        data-name="Type=Square, Size=XSmall, Style=Tonal, Width=Wide"
      >
        <div
          className="bg-[#dae2ff] content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[12px] shrink-0 w-[40px]"
          data-name="Content"
        >
          <div
            className="h-[32px] relative shrink-0 w-full"
            data-name="State-layer"
          >
            <div className="flex flex-row items-center justify-center size-full">
              <div className="box-border content-stretch flex h-[32px] items-center justify-center p-[10px] relative w-full">
                <div
                  className="relative shrink-0 size-[20px]"
                  data-name="Icon"
                >
                  <div
                    className="absolute inset-[8.333%]"
                    data-name="icon"
                  >
                    <div
                      className="absolute inset-0"
                      style={
                        {
                          "--fill-0": "rgba(23, 66, 149, 1)",
                        } as React.CSSProperties
                      }
                    >
                      <img
                        alt=""
                        className="block max-w-none size-full"
                        src={img8}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (
    type === "Square" &&
    size === "XSmall" &&
    style === "Tonal" &&
    width === "Default"
  ) {
    return (
      <div
        className={className}
        data-name="Type=Square, Size=XSmall, Style=Tonal, Width=Default"
      >
        <div
          className="bg-[#dae2ff] content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[12px] shrink-0 w-[32px]"
          data-name="Content"
        >
          <div
            className="h-[32px] relative shrink-0 w-full"
            data-name="State-layer"
          >
            <div className="flex flex-row items-center justify-center size-full">
              <div className="box-border content-stretch flex h-[32px] items-center justify-center p-[10px] relative w-full">
                <div
                  className="relative shrink-0 size-[20px]"
                  data-name="Icon"
                >
                  <div
                    className="absolute inset-[8.333%]"
                    data-name="icon"
                  >
                    <div
                      className="absolute inset-0"
                      style={
                        {
                          "--fill-0": "rgba(23, 66, 149, 1)",
                        } as React.CSSProperties
                      }
                    >
                      <img
                        alt=""
                        className="block max-w-none size-full"
                        src={img8}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (
    type === "Square" &&
    size === "XSmall" &&
    style === "Tonal" &&
    width === "Narrow"
  ) {
    return (
      <div
        className={className}
        data-name="Type=Square, Size=XSmall, Style=Tonal, Width=Narrow"
      >
        <div
          className="bg-[#dae2ff] content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[12px] shrink-0 w-[28px]"
          data-name="Content"
        >
          <div
            className="h-[32px] relative shrink-0 w-full"
            data-name="State-layer"
          >
            <div className="flex flex-row items-center justify-center size-full">
              <div className="box-border content-stretch flex h-[32px] items-center justify-center p-[10px] relative w-full">
                <div
                  className="relative shrink-0 size-[20px]"
                  data-name="Icon"
                >
                  <div
                    className="absolute inset-[8.333%]"
                    data-name="icon"
                  >
                    <div
                      className="absolute inset-0"
                      style={
                        {
                          "--fill-0": "rgba(23, 66, 149, 1)",
                        } as React.CSSProperties
                      }
                    >
                      <img
                        alt=""
                        className="block max-w-none size-full"
                        src={img8}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (
    type === "Round" &&
    size === "XLarge" &&
    style === "Tonal" &&
    width === "Wide"
  ) {
    return (
      <div
        className={className}
        data-name="Type=Round, Size=XLarge, Style=Tonal, Width=Wide"
      >
        <div
          className="bg-[#dae2ff] content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[100px] shrink-0 w-[184px]"
          data-name="Content"
        >
          <div
            className="h-[136px] relative shrink-0 w-full"
            data-name="State-layer"
          >
            <div className="flex flex-row items-center justify-center size-full">
              <div className="box-border content-stretch flex h-[136px] items-center justify-center p-[48px] relative w-full">
                <div
                  className="relative shrink-0 size-[40px]"
                  data-name="Icon"
                >
                  <div
                    className="absolute inset-[8.333%]"
                    data-name="icon"
                  >
                    <div
                      className="absolute inset-0"
                      style={
                        {
                          "--fill-0": "rgba(23, 66, 149, 1)",
                        } as React.CSSProperties
                      }
                    >
                      <img
                        alt=""
                        className="block max-w-none size-full"
                        src={img5}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (
    type === "Round" &&
    size === "XLarge" &&
    style === "Tonal" &&
    width === "Default"
  ) {
    return (
      <div
        className={className}
        data-name="Type=Round, Size=XLarge, Style=Tonal, Width=Default"
      >
        <div
          className="bg-[#dae2ff] content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[100px] shrink-0 w-[136px]"
          data-name="Content"
        >
          <div
            className="h-[136px] relative shrink-0 w-full"
            data-name="State-layer"
          >
            <div className="flex flex-row items-center justify-center size-full">
              <div className="box-border content-stretch flex h-[136px] items-center justify-center p-[48px] relative w-full">
                <div
                  className="relative shrink-0 size-[40px]"
                  data-name="Icon"
                >
                  <div
                    className="absolute inset-[8.333%]"
                    data-name="icon"
                  >
                    <div
                      className="absolute inset-0"
                      style={
                        {
                          "--fill-0": "rgba(23, 66, 149, 1)",
                        } as React.CSSProperties
                      }
                    >
                      <img
                        alt=""
                        className="block max-w-none size-full"
                        src={img5}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (
    type === "Round" &&
    size === "XLarge" &&
    style === "Tonal" &&
    width === "Narrow"
  ) {
    return (
      <div
        className={className}
        data-name="Type=Round, Size=XLarge, Style=Tonal, Width=Narrow"
      >
        <div
          className="bg-[#dae2ff] content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[100px] shrink-0 w-[104px]"
          data-name="Content"
        >
          <div
            className="h-[136px] relative shrink-0 w-full"
            data-name="State-layer"
          >
            <div className="flex flex-row items-center justify-center size-full">
              <div className="box-border content-stretch flex h-[136px] items-center justify-center p-[48px] relative w-full">
                <div
                  className="relative shrink-0 size-[40px]"
                  data-name="Icon"
                >
                  <div
                    className="absolute inset-[8.333%]"
                    data-name="icon"
                  >
                    <div
                      className="absolute inset-0"
                      style={
                        {
                          "--fill-0": "rgba(23, 66, 149, 1)",
                        } as React.CSSProperties
                      }
                    >
                      <img
                        alt=""
                        className="block max-w-none size-full"
                        src={img5}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (
    type === "Round" &&
    size === "Large" &&
    style === "Tonal" &&
    width === "Wide"
  ) {
    return (
      <div
        className={className}
        data-name="Type=Round, Size=Large, Style=Tonal, Width=Wide"
      >
        <div
          className="bg-[#dae2ff] content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[100px] shrink-0 w-[128px]"
          data-name="Content"
        >
          <div
            className="h-[96px] relative shrink-0 w-full"
            data-name="State-layer"
          >
            <div className="flex flex-row items-center justify-center size-full">
              <div className="box-border content-stretch flex h-[96px] items-center justify-center p-[32px] relative w-full">
                <div
                  className="relative shrink-0 size-[32px]"
                  data-name="Icon"
                >
                  <div
                    className="absolute inset-[8.333%]"
                    data-name="icon"
                  >
                    <div
                      className="absolute inset-0"
                      style={
                        {
                          "--fill-0": "rgba(23, 66, 149, 1)",
                        } as React.CSSProperties
                      }
                    >
                      <img
                        alt=""
                        className="block max-w-none size-full"
                        src={img6}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (
    type === "Round" &&
    size === "Large" &&
    style === "Tonal" &&
    width === "Default"
  ) {
    return (
      <div
        className={className}
        data-name="Type=Round, Size=Large, Style=Tonal, Width=Default"
      >
        <div
          className="bg-[#dae2ff] content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[100px] shrink-0 w-[96px]"
          data-name="Content"
        >
          <div
            className="h-[96px] relative shrink-0 w-full"
            data-name="State-layer"
          >
            <div className="flex flex-row items-center justify-center size-full">
              <div className="box-border content-stretch flex h-[96px] items-center justify-center p-[32px] relative w-full">
                <div
                  className="relative shrink-0 size-[32px]"
                  data-name="Icon"
                >
                  <div
                    className="absolute inset-[8.333%]"
                    data-name="icon"
                  >
                    <div
                      className="absolute inset-0"
                      style={
                        {
                          "--fill-0": "rgba(23, 66, 149, 1)",
                        } as React.CSSProperties
                      }
                    >
                      <img
                        alt=""
                        className="block max-w-none size-full"
                        src={img6}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (
    type === "Round" &&
    size === "Large" &&
    style === "Tonal" &&
    width === "Narrow"
  ) {
    return (
      <div
        className={className}
        data-name="Type=Round, Size=Large, Style=Tonal, Width=Narrow"
      >
        <div
          className="bg-[#dae2ff] content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[100px] shrink-0 w-[64px]"
          data-name="Content"
        >
          <div
            className="h-[96px] relative shrink-0 w-full"
            data-name="State-layer"
          >
            <div className="flex flex-row items-center justify-center size-full">
              <div className="box-border content-stretch flex h-[96px] items-center justify-center p-[32px] relative w-full">
                <div
                  className="relative shrink-0 size-[32px]"
                  data-name="Icon"
                >
                  <div
                    className="absolute inset-[8.333%]"
                    data-name="icon"
                  >
                    <div
                      className="absolute inset-0"
                      style={
                        {
                          "--fill-0": "rgba(23, 66, 149, 1)",
                        } as React.CSSProperties
                      }
                    >
                      <img
                        alt=""
                        className="block max-w-none size-full"
                        src={img6}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (
    type === "Round" &&
    size === "Medium" &&
    style === "Tonal" &&
    width === "Wide"
  ) {
    return (
      <div
        className={className}
        data-name="Type=Round, Size=Medium, Style=Tonal, Width=Wide"
      >
        <div
          className="bg-[#dae2ff] content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[100px] shrink-0 w-[72px]"
          data-name="Content"
        >
          <div
            className="h-[56px] relative shrink-0 w-full"
            data-name="State-layer"
          >
            <div className="flex flex-row items-center justify-center size-full">
              <div className="box-border content-stretch flex h-[56px] items-center justify-center p-[16px] relative w-full">
                <div
                  className="relative shrink-0 size-[24px]"
                  data-name="Icon"
                >
                  <div
                    className="absolute inset-[8.333%]"
                    data-name="icon"
                  >
                    <div
                      className="absolute inset-0"
                      style={
                        {
                          "--fill-0": "rgba(23, 66, 149, 1)",
                        } as React.CSSProperties
                      }
                    >
                      <img
                        alt=""
                        className="block max-w-none size-full"
                        src={img7}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (
    type === "Round" &&
    size === "Medium" &&
    style === "Tonal" &&
    width === "Default"
  ) {
    return (
      <div
        className={className}
        data-name="Type=Round, Size=Medium, Style=Tonal, Width=Default"
      >
        <div
          className="bg-[#dae2ff] content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[100px] shrink-0 w-[56px]"
          data-name="Content"
        >
          <div
            className="h-[56px] relative shrink-0 w-full"
            data-name="State-layer"
          >
            <div className="flex flex-row items-center justify-center size-full">
              <div className="box-border content-stretch flex h-[56px] items-center justify-center p-[16px] relative w-full">
                <div
                  className="relative shrink-0 size-[24px]"
                  data-name="Icon"
                >
                  <div
                    className="absolute inset-[8.333%]"
                    data-name="icon"
                  >
                    <div
                      className="absolute inset-0"
                      style={
                        {
                          "--fill-0": "rgba(23, 66, 149, 1)",
                        } as React.CSSProperties
                      }
                    >
                      <img
                        alt=""
                        className="block max-w-none size-full"
                        src={img7}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (
    type === "Round" &&
    size === "Medium" &&
    style === "Tonal" &&
    width === "Narrow"
  ) {
    return (
      <div
        className={className}
        data-name="Type=Round, Size=Medium, Style=Tonal, Width=Narrow"
      >
        <div
          className="bg-[#dae2ff] content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[100px] shrink-0 w-[48px]"
          data-name="Content"
        >
          <div
            className="h-[56px] relative shrink-0 w-full"
            data-name="State-layer"
          >
            <div className="flex flex-row items-center justify-center size-full">
              <div className="box-border content-stretch flex h-[56px] items-center justify-center p-[16px] relative w-full">
                <div
                  className="relative shrink-0 size-[24px]"
                  data-name="Icon"
                >
                  <div
                    className="absolute inset-[8.333%]"
                    data-name="icon"
                  >
                    <div
                      className="absolute inset-0"
                      style={
                        {
                          "--fill-0": "rgba(23, 66, 149, 1)",
                        } as React.CSSProperties
                      }
                    >
                      <img
                        alt=""
                        className="block max-w-none size-full"
                        src={img7}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (
    type === "Round" &&
    size === "Small" &&
    style === "Tonal" &&
    width === "Wide"
  ) {
    return (
      <div
        className={className}
        data-name="Type=Round, Size=Small, Style=Tonal, Width=Wide"
      >
        <div
          className="bg-[#dae2ff] content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[100px] shrink-0 w-[52px]"
          data-name="Content"
        >
          <div
            className="h-[40px] relative shrink-0 w-full"
            data-name="State-layer"
          >
            <div className="flex flex-row items-center justify-center size-full">
              <div className="box-border content-stretch flex h-[40px] items-center justify-center p-[10px] relative w-full">
                <div
                  className="relative shrink-0 size-[24px]"
                  data-name="Icon"
                >
                  <div
                    className="absolute inset-[8.333%]"
                    data-name="icon"
                  >
                    <div
                      className="absolute inset-0"
                      style={
                        {
                          "--fill-0": "rgba(23, 66, 149, 1)",
                        } as React.CSSProperties
                      }
                    >
                      <img
                        alt=""
                        className="block max-w-none size-full"
                        src={img7}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (
    type === "Round" &&
    size === "Small" &&
    style === "Tonal" &&
    width === "Default"
  ) {
    return (
      <div
        className={className}
        data-name="Type=Round, Size=Small, Style=Tonal, Width=Default"
      >
        <div
          className="bg-[#dae2ff] content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[100px] shrink-0 w-[40px]"
          data-name="Content"
        >
          <div
            className="h-[40px] relative shrink-0 w-full"
            data-name="State-layer"
          >
            <div className="flex flex-row items-center justify-center size-full">
              <div className="box-border content-stretch flex h-[40px] items-center justify-center p-[10px] relative w-full">
                <div
                  className="relative shrink-0 size-[24px]"
                  data-name="Icon"
                >
                  <div
                    className="absolute inset-[8.333%]"
                    data-name="icon"
                  >
                    <div
                      className="absolute inset-0"
                      style={
                        {
                          "--fill-0": "rgba(23, 66, 149, 1)",
                        } as React.CSSProperties
                      }
                    >
                      <img
                        alt=""
                        className="block max-w-none size-full"
                        src={img7}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (
    type === "Round" &&
    size === "Small" &&
    style === "Tonal" &&
    width === "Narrow"
  ) {
    return (
      <div
        className={className}
        data-name="Type=Round, Size=Small, Style=Tonal, Width=Narrow"
      >
        <div
          className="bg-[#dae2ff] content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[100px] shrink-0 w-[32px]"
          data-name="Content"
        >
          <div
            className="h-[40px] relative shrink-0 w-full"
            data-name="State-layer"
          >
            <div className="flex flex-row items-center justify-center size-full">
              <div className="box-border content-stretch flex h-[40px] items-center justify-center p-[10px] relative w-full">
                <div
                  className="relative shrink-0 size-[24px]"
                  data-name="Icon"
                >
                  <div
                    className="absolute inset-[8.333%]"
                    data-name="icon"
                  >
                    <div
                      className="absolute inset-0"
                      style={
                        {
                          "--fill-0": "rgba(23, 66, 149, 1)",
                        } as React.CSSProperties
                      }
                    >
                      <img
                        alt=""
                        className="block max-w-none size-full"
                        src={img7}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (
    type === "Round" &&
    size === "XSmall" &&
    style === "Tonal" &&
    width === "Wide"
  ) {
    return (
      <div
        className={className}
        data-name="Type=Round, Size=XSmall, Style=Tonal, Width=Wide"
      >
        <div
          className="bg-[#dae2ff] content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[100px] shrink-0 w-[40px]"
          data-name="Content"
        >
          <div
            className="h-[32px] relative shrink-0 w-full"
            data-name="State-layer"
          >
            <div className="flex flex-row items-center justify-center size-full">
              <div className="box-border content-stretch flex h-[32px] items-center justify-center p-[10px] relative w-full">
                <div
                  className="relative shrink-0 size-[20px]"
                  data-name="Icon"
                >
                  <div
                    className="absolute inset-[8.333%]"
                    data-name="icon"
                  >
                    <div
                      className="absolute inset-0"
                      style={
                        {
                          "--fill-0": "rgba(23, 66, 149, 1)",
                        } as React.CSSProperties
                      }
                    >
                      <img
                        alt=""
                        className="block max-w-none size-full"
                        src={img8}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (
    type === "Round" &&
    size === "XSmall" &&
    style === "Tonal" &&
    width === "Default"
  ) {
    return (
      <div
        className={className}
        data-name="Type=Round, Size=XSmall, Style=Tonal, Width=Default"
      >
        <div
          className="bg-[#dae2ff] content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[100px] shrink-0 w-[32px]"
          data-name="Content"
        >
          <div
            className="h-[32px] relative shrink-0 w-full"
            data-name="State-layer"
          >
            <div className="flex flex-row items-center justify-center size-full">
              <div className="box-border content-stretch flex h-[32px] items-center justify-center p-[10px] relative w-full">
                <div
                  className="relative shrink-0 size-[20px]"
                  data-name="Icon"
                >
                  <div
                    className="absolute inset-[8.333%]"
                    data-name="icon"
                  >
                    <div
                      className="absolute inset-0"
                      style={
                        {
                          "--fill-0": "rgba(23, 66, 149, 1)",
                        } as React.CSSProperties
                      }
                    >
                      <img
                        alt=""
                        className="block max-w-none size-full"
                        src={img8}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (
    type === "Round" &&
    size === "XSmall" &&
    style === "Tonal" &&
    width === "Narrow"
  ) {
    return (
      <div
        className={className}
        data-name="Type=Round, Size=XSmall, Style=Tonal, Width=Narrow"
      >
        <div
          className="bg-[#dae2ff] content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[100px] shrink-0 w-[28px]"
          data-name="Content"
        >
          <div
            className="h-[32px] relative shrink-0 w-full"
            data-name="State-layer"
          >
            <div className="flex flex-row items-center justify-center size-full">
              <div className="box-border content-stretch flex h-[32px] items-center justify-center p-[10px] relative w-full">
                <div
                  className="relative shrink-0 size-[20px]"
                  data-name="Icon"
                >
                  <div
                    className="absolute inset-[8.333%]"
                    data-name="icon"
                  >
                    <div
                      className="absolute inset-0"
                      style={
                        {
                          "--fill-0": "rgba(23, 66, 149, 1)",
                        } as React.CSSProperties
                      }
                    >
                      <img
                        alt=""
                        className="block max-w-none size-full"
                        src={img8}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (
    type === "Square" &&
    size === "XLarge" &&
    style === "Filled" &&
    width === "Wide"
  ) {
    return (
      <div
        className={className}
        data-name="Type=Square, Size=XLarge, Style=Filled, Width=Wide"
      >
        <div
          className="bg-[#4a671e] content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[28px] shrink-0 w-[184px]"
          data-name="Content"
        >
          <div
            className="content-stretch flex h-[136px] items-center justify-center relative shrink-0 w-full"
            data-name="State-layer"
          >
            <div
              className="relative shrink-0 size-[40px]"
              data-name="Icon"
            >
              <div
                className="absolute inset-[8.333%]"
                data-name="icon"
              >
                <div
                  className="absolute inset-0"
                  style={
                    {
                      "--fill-0": "rgba(255, 255, 255, 1)",
                    } as React.CSSProperties
                  }
                >
                  <img
                    alt=""
                    className="block max-w-none size-full"
                    src={img9}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (
    type === "Square" &&
    size === "XLarge" &&
    style === "Filled" &&
    width === "Default"
  ) {
    return (
      <div
        className={className}
        data-name="Type=Square, Size=XLarge, Style=Filled, Width=Default"
      >
        <div
          className="bg-[#4a671e] content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[28px] shrink-0 w-[136px]"
          data-name="Content"
        >
          <div
            className="content-stretch flex h-[136px] items-center justify-center relative shrink-0 w-full"
            data-name="State-layer"
          >
            <div
              className="relative shrink-0 size-[40px]"
              data-name="Icon"
            >
              <div
                className="absolute inset-[8.333%]"
                data-name="icon"
              >
                <div
                  className="absolute inset-0"
                  style={
                    {
                      "--fill-0": "rgba(255, 255, 255, 1)",
                    } as React.CSSProperties
                  }
                >
                  <img
                    alt=""
                    className="block max-w-none size-full"
                    src={img9}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (
    type === "Square" &&
    size === "XLarge" &&
    style === "Filled" &&
    width === "Narrow"
  ) {
    return (
      <div
        className={className}
        data-name="Type=Square, Size=XLarge, Style=Filled, Width=Narrow"
      >
        <div
          className="bg-[#4a671e] content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[28px] shrink-0 w-[104px]"
          data-name="Content"
        >
          <div
            className="content-stretch flex h-[136px] items-center justify-center relative shrink-0 w-full"
            data-name="State-layer"
          >
            <div
              className="relative shrink-0 size-[40px]"
              data-name="Icon"
            >
              <div
                className="absolute inset-[8.333%]"
                data-name="icon"
              >
                <div
                  className="absolute inset-0"
                  style={
                    {
                      "--fill-0": "rgba(255, 255, 255, 1)",
                    } as React.CSSProperties
                  }
                >
                  <img
                    alt=""
                    className="block max-w-none size-full"
                    src={img9}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (
    type === "Square" &&
    size === "Large" &&
    style === "Filled" &&
    width === "Wide"
  ) {
    return (
      <div
        className={className}
        data-name="Type=Square, Size=Large, Style=Filled, Width=Wide"
      >
        <div
          className="bg-[#4a671e] content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[28px] shrink-0 w-[128px]"
          data-name="Content"
        >
          <div
            className="content-stretch flex h-[96px] items-center justify-center relative shrink-0 w-full"
            data-name="State-layer"
          >
            <div
              className="relative shrink-0 size-[32px]"
              data-name="Icon"
            >
              <div
                className="absolute inset-[8.333%]"
                data-name="icon"
              >
                <div
                  className="absolute inset-0"
                  style={
                    {
                      "--fill-0": "rgba(255, 255, 255, 1)",
                    } as React.CSSProperties
                  }
                >
                  <img
                    alt=""
                    className="block max-w-none size-full"
                    src={img10}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (
    type === "Square" &&
    size === "Large" &&
    style === "Filled" &&
    width === "Default"
  ) {
    return (
      <div
        className={className}
        data-name="Type=Square, Size=Large, Style=Filled, Width=Default"
      >
        <div
          className="bg-[#4a671e] content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[28px] shrink-0 w-[96px]"
          data-name="Content"
        >
          <div
            className="content-stretch flex h-[96px] items-center justify-center relative shrink-0 w-full"
            data-name="State-layer"
          >
            <div
              className="relative shrink-0 size-[32px]"
              data-name="Icon"
            >
              <div
                className="absolute inset-[8.333%]"
                data-name="icon"
              >
                <div
                  className="absolute inset-0"
                  style={
                    {
                      "--fill-0": "rgba(255, 255, 255, 1)",
                    } as React.CSSProperties
                  }
                >
                  <img
                    alt=""
                    className="block max-w-none size-full"
                    src={img10}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (
    type === "Square" &&
    size === "Large" &&
    style === "Filled" &&
    width === "Narrow"
  ) {
    return (
      <div
        className={className}
        data-name="Type=Square, Size=Large, Style=Filled, Width=Narrow"
      >
        <div
          className="bg-[#4a671e] content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[28px] shrink-0 w-[64px]"
          data-name="Content"
        >
          <div
            className="content-stretch flex h-[96px] items-center justify-center relative shrink-0 w-full"
            data-name="State-layer"
          >
            <div
              className="relative shrink-0 size-[32px]"
              data-name="Icon"
            >
              <div
                className="absolute inset-[8.333%]"
                data-name="icon"
              >
                <div
                  className="absolute inset-0"
                  style={
                    {
                      "--fill-0": "rgba(255, 255, 255, 1)",
                    } as React.CSSProperties
                  }
                >
                  <img
                    alt=""
                    className="block max-w-none size-full"
                    src={img10}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (
    type === "Square" &&
    size === "Medium" &&
    style === "Filled" &&
    width === "Wide"
  ) {
    return (
      <div
        className={className}
        data-name="Type=Square, Size=Medium, Style=Filled, Width=Wide"
      >
        <div
          className="bg-[#4a671e] content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[16px] shrink-0 w-[72px]"
          data-name="Content"
        >
          <div
            className="h-[56px] relative shrink-0 w-full"
            data-name="State-layer"
          >
            <div className="flex flex-row items-center justify-center size-full">
              <div className="box-border content-stretch flex h-[56px] items-center justify-center px-[32px] py-[16px] relative w-full">
                <div
                  className="relative shrink-0 size-[24px]"
                  data-name="Icon"
                >
                  <div
                    className="absolute inset-[8.333%]"
                    data-name="icon"
                  >
                    <div
                      className="absolute inset-0"
                      style={
                        {
                          "--fill-0": "rgba(255, 255, 255, 1)",
                        } as React.CSSProperties
                      }
                    >
                      <img
                        alt=""
                        className="block max-w-none size-full"
                        src={img11}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (
    type === "Square" &&
    size === "Medium" &&
    style === "Filled" &&
    width === "Default"
  ) {
    return (
      <div
        className={className}
        data-name="Type=Square, Size=Medium, Style=Filled, Width=Default"
      >
        <div
          className="bg-[#4a671e] content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[16px] shrink-0 w-[56px]"
          data-name="Content"
        >
          <div
            className="content-stretch flex h-[56px] items-center justify-center relative shrink-0 w-full"
            data-name="State-layer"
          >
            <div
              className="relative shrink-0 size-[24px]"
              data-name="Icon"
            >
              <div
                className="absolute inset-[8.333%]"
                data-name="icon"
              >
                <div
                  className="absolute inset-0"
                  style={
                    {
                      "--fill-0": "rgba(255, 255, 255, 1)",
                    } as React.CSSProperties
                  }
                >
                  <img
                    alt=""
                    className="block max-w-none size-full"
                    src={img11}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (
    type === "Square" &&
    size === "Medium" &&
    style === "Filled" &&
    width === "Narrow"
  ) {
    return (
      <div
        className={className}
        data-name="Type=Square, Size=Medium, Style=Filled, Width=Narrow"
      >
        <div
          className="bg-[#4a671e] content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[16px] shrink-0 w-[48px]"
          data-name="Content"
        >
          <div
            className="content-stretch flex h-[56px] items-center justify-center relative shrink-0 w-full"
            data-name="State-layer"
          >
            <div
              className="relative shrink-0 size-[24px]"
              data-name="Icon"
            >
              <div
                className="absolute inset-[8.333%]"
                data-name="icon"
              >
                <div
                  className="absolute inset-0"
                  style={
                    {
                      "--fill-0": "rgba(255, 255, 255, 1)",
                    } as React.CSSProperties
                  }
                >
                  <img
                    alt=""
                    className="block max-w-none size-full"
                    src={img11}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (
    type === "Square" &&
    size === "Small" &&
    style === "Filled" &&
    width === "Wide"
  ) {
    return (
      <div
        className={className}
        data-name="Type=Square, Size=Small, Style=Filled, Width=Wide"
      >
        <div
          className="bg-[#4a671e] content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[12px] shrink-0 w-[52px]"
          data-name="Content"
        >
          <div
            className="content-stretch flex h-[40px] items-center justify-center relative shrink-0 w-full"
            data-name="State-layer"
          >
            <div
              className="relative shrink-0 size-[24px]"
              data-name="Icon"
            >
              <div
                className="absolute inset-[8.333%]"
                data-name="icon"
              >
                <div
                  className="absolute inset-0"
                  style={
                    {
                      "--fill-0": "rgba(255, 255, 255, 1)",
                    } as React.CSSProperties
                  }
                >
                  <img
                    alt=""
                    className="block max-w-none size-full"
                    src={img11}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (
    type === "Square" &&
    size === "Small" &&
    style === "Filled" &&
    width === "Default"
  ) {
    return (
      <div
        className={className}
        data-name="Type=Square, Size=Small, Style=Filled, Width=Default"
      >
        <div
          className="bg-[#4a671e] content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[12px] shrink-0 w-[40px]"
          data-name="Content"
        >
          <div
            className="content-stretch flex h-[40px] items-center justify-center relative shrink-0 w-full"
            data-name="State-layer"
          >
            <div
              className="relative shrink-0 size-[24px]"
              data-name="Icon"
            >
              <div
                className="absolute inset-[8.333%]"
                data-name="icon"
              >
                <div
                  className="absolute inset-0"
                  style={
                    {
                      "--fill-0": "rgba(255, 255, 255, 1)",
                    } as React.CSSProperties
                  }
                >
                  <img
                    alt=""
                    className="block max-w-none size-full"
                    src={img11}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (
    type === "Square" &&
    size === "Small" &&
    style === "Filled" &&
    width === "Narrow"
  ) {
    return (
      <div
        className={className}
        data-name="Type=Square, Size=Small, Style=Filled, Width=Narrow"
      >
        <div
          className="bg-[#4a671e] content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[12px] shrink-0 w-[32px]"
          data-name="Content"
        >
          <div
            className="content-stretch flex h-[40px] items-center justify-center relative shrink-0 w-full"
            data-name="State-layer"
          >
            <div
              className="relative shrink-0 size-[24px]"
              data-name="Icon"
            >
              <div
                className="absolute inset-[8.333%]"
                data-name="icon"
              >
                <div
                  className="absolute inset-0"
                  style={
                    {
                      "--fill-0": "rgba(255, 255, 255, 1)",
                    } as React.CSSProperties
                  }
                >
                  <img
                    alt=""
                    className="block max-w-none size-full"
                    src={img11}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (
    type === "Square" &&
    size === "XSmall" &&
    style === "Filled" &&
    width === "Wide"
  ) {
    return (
      <div
        className={className}
        data-name="Type=Square, Size=XSmall, Style=Filled, Width=Wide"
      >
        <div
          className="bg-[#4a671e] content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[12px] shrink-0 w-[40px]"
          data-name="Content"
        >
          <div
            className="content-stretch flex h-[32px] items-center justify-center relative shrink-0 w-full"
            data-name="State-layer"
          >
            <div
              className="relative shrink-0 size-[20px]"
              data-name="Icon"
            >
              <div
                className="absolute inset-[8.333%]"
                data-name="icon"
              >
                <div
                  className="absolute inset-0"
                  style={
                    {
                      "--fill-0": "rgba(255, 255, 255, 1)",
                    } as React.CSSProperties
                  }
                >
                  <img
                    alt=""
                    className="block max-w-none size-full"
                    src={img12}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (
    type === "Square" &&
    size === "XSmall" &&
    style === "Filled" &&
    width === "Default"
  ) {
    return (
      <div
        className={className}
        data-name="Type=Square, Size=XSmall, Style=Filled, Width=Default"
      >
        <div
          className="bg-[#4a671e] content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[12px] shrink-0 w-[32px]"
          data-name="Content"
        >
          <div
            className="content-stretch flex h-[32px] items-center justify-center relative shrink-0 w-full"
            data-name="State-layer"
          >
            <div
              className="relative shrink-0 size-[20px]"
              data-name="Icon"
            >
              <div
                className="absolute inset-[8.333%]"
                data-name="icon"
              >
                <div
                  className="absolute inset-0"
                  style={
                    {
                      "--fill-0": "rgba(255, 255, 255, 1)",
                    } as React.CSSProperties
                  }
                >
                  <img
                    alt=""
                    className="block max-w-none size-full"
                    src={img12}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (
    type === "Square" &&
    size === "XSmall" &&
    style === "Filled" &&
    width === "Narrow"
  ) {
    return (
      <div
        className={className}
        data-name="Type=Square, Size=XSmall, Style=Filled, Width=Narrow"
      >
        <div
          className="bg-[#4a671e] content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[12px] shrink-0 w-[28px]"
          data-name="Content"
        >
          <div
            className="content-stretch flex h-[32px] items-center justify-center relative shrink-0 w-full"
            data-name="State-layer"
          >
            <div
              className="relative shrink-0 size-[20px]"
              data-name="Icon"
            >
              <div
                className="absolute inset-[8.333%]"
                data-name="icon"
              >
                <div
                  className="absolute inset-0"
                  style={
                    {
                      "--fill-0": "rgba(255, 255, 255, 1)",
                    } as React.CSSProperties
                  }
                >
                  <img
                    alt=""
                    className="block max-w-none size-full"
                    src={img12}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (
    type === "Round" &&
    size === "XLarge" &&
    style === "Filled" &&
    width === "Wide"
  ) {
    return (
      <div
        className={className}
        data-name="Type=Round, Size=XLarge, Style=Filled, Width=Wide"
      >
        <div
          className="bg-[#4a671e] content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[100px] shrink-0 w-[184px]"
          data-name="Content"
        >
          <div
            className="content-stretch flex h-[136px] items-center justify-center relative shrink-0 w-full"
            data-name="State-layer"
          >
            <div
              className="relative shrink-0 size-[40px]"
              data-name="Icon"
            >
              <div
                className="absolute inset-[8.333%]"
                data-name="icon"
              >
                <div
                  className="absolute inset-0"
                  style={
                    {
                      "--fill-0": "rgba(255, 255, 255, 1)",
                    } as React.CSSProperties
                  }
                >
                  <img
                    alt=""
                    className="block max-w-none size-full"
                    src={img9}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (
    type === "Round" &&
    size === "XLarge" &&
    style === "Filled" &&
    width === "Default"
  ) {
    return (
      <div
        className={className}
        data-name="Type=Round, Size=XLarge, Style=Filled, Width=Default"
      >
        <div
          className="bg-[#4a671e] content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[100px] shrink-0 w-[136px]"
          data-name="Content"
        >
          <div
            className="content-stretch flex h-[136px] items-center justify-center relative shrink-0 w-full"
            data-name="State-layer"
          >
            <div
              className="relative shrink-0 size-[40px]"
              data-name="Icon"
            >
              <div
                className="absolute inset-[8.333%]"
                data-name="icon"
              >
                <div
                  className="absolute inset-0"
                  style={
                    {
                      "--fill-0": "rgba(255, 255, 255, 1)",
                    } as React.CSSProperties
                  }
                >
                  <img
                    alt=""
                    className="block max-w-none size-full"
                    src={img9}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (
    type === "Round" &&
    size === "XLarge" &&
    style === "Filled" &&
    width === "Narrow"
  ) {
    return (
      <div
        className={className}
        data-name="Type=Round, Size=XLarge, Style=Filled, Width=Narrow"
      >
        <div
          className="bg-[#4a671e] content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[100px] shrink-0 w-[104px]"
          data-name="Content"
        >
          <div
            className="content-stretch flex h-[136px] items-center justify-center relative shrink-0 w-full"
            data-name="State-layer"
          >
            <div
              className="relative shrink-0 size-[40px]"
              data-name="Icon"
            >
              <div
                className="absolute inset-[8.333%]"
                data-name="icon"
              >
                <div
                  className="absolute inset-0"
                  style={
                    {
                      "--fill-0": "rgba(255, 255, 255, 1)",
                    } as React.CSSProperties
                  }
                >
                  <img
                    alt=""
                    className="block max-w-none size-full"
                    src={img9}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (
    type === "Round" &&
    size === "Large" &&
    style === "Filled" &&
    width === "Wide"
  ) {
    return (
      <div
        className={className}
        data-name="Type=Round, Size=Large, Style=Filled, Width=Wide"
      >
        <div
          className="bg-[#4a671e] content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[100px] shrink-0 w-[128px]"
          data-name="Content"
        >
          <div
            className="content-stretch flex h-[96px] items-center justify-center relative shrink-0 w-full"
            data-name="State-layer"
          >
            <div
              className="relative shrink-0 size-[32px]"
              data-name="Icon"
            >
              <div
                className="absolute inset-[8.333%]"
                data-name="icon"
              >
                <div
                  className="absolute inset-0"
                  style={
                    {
                      "--fill-0": "rgba(255, 255, 255, 1)",
                    } as React.CSSProperties
                  }
                >
                  <img
                    alt=""
                    className="block max-w-none size-full"
                    src={img10}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (
    type === "Round" &&
    size === "Large" &&
    style === "Filled" &&
    width === "Default"
  ) {
    return (
      <div
        className={className}
        data-name="Type=Round, Size=Large, Style=Filled, Width=Default"
      >
        <div
          className="bg-[#4a671e] content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[100px] shrink-0 w-[96px]"
          data-name="Content"
        >
          <div
            className="content-stretch flex h-[96px] items-center justify-center relative shrink-0 w-full"
            data-name="State-layer"
          >
            <div
              className="relative shrink-0 size-[32px]"
              data-name="Icon"
            >
              <div
                className="absolute inset-[8.333%]"
                data-name="icon"
              >
                <div
                  className="absolute inset-0"
                  style={
                    {
                      "--fill-0": "rgba(255, 255, 255, 1)",
                    } as React.CSSProperties
                  }
                >
                  <img
                    alt=""
                    className="block max-w-none size-full"
                    src={img10}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (
    type === "Round" &&
    size === "Large" &&
    style === "Filled" &&
    width === "Narrow"
  ) {
    return (
      <div
        className={className}
        data-name="Type=Round, Size=Large, Style=Filled, Width=Narrow"
      >
        <div
          className="bg-[#4a671e] content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[100px] shrink-0 w-[64px]"
          data-name="Content"
        >
          <div
            className="content-stretch flex h-[96px] items-center justify-center relative shrink-0 w-full"
            data-name="State-layer"
          >
            <div
              className="relative shrink-0 size-[32px]"
              data-name="Icon"
            >
              <div
                className="absolute inset-[8.333%]"
                data-name="icon"
              >
                <div
                  className="absolute inset-0"
                  style={
                    {
                      "--fill-0": "rgba(255, 255, 255, 1)",
                    } as React.CSSProperties
                  }
                >
                  <img
                    alt=""
                    className="block max-w-none size-full"
                    src={img10}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (
    type === "Round" &&
    size === "Medium" &&
    style === "Filled" &&
    width === "Wide"
  ) {
    return (
      <div
        className={className}
        data-name="Type=Round, Size=Medium, Style=Filled, Width=Wide"
      >
        <div
          className="bg-[#4a671e] content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[100px] shrink-0 w-[72px]"
          data-name="Content"
        >
          <div
            className="h-[56px] relative shrink-0 w-full"
            data-name="State-layer"
          >
            <div className="flex flex-row items-center justify-center size-full">
              <div className="box-border content-stretch flex h-[56px] items-center justify-center px-[32px] py-[16px] relative w-full">
                <div
                  className="relative shrink-0 size-[24px]"
                  data-name="Icon"
                >
                  <div
                    className="absolute inset-[8.333%]"
                    data-name="icon"
                  >
                    <div
                      className="absolute inset-0"
                      style={
                        {
                          "--fill-0": "rgba(255, 255, 255, 1)",
                        } as React.CSSProperties
                      }
                    >
                      <img
                        alt=""
                        className="block max-w-none size-full"
                        src={img11}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (
    type === "Round" &&
    size === "Medium" &&
    style === "Filled" &&
    width === "Default"
  ) {
    return (
      <div
        className={className}
        data-name="Type=Round, Size=Medium, Style=Filled, Width=Default"
      >
        <div
          className="bg-[#4a671e] content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[100px] shrink-0 w-[56px]"
          data-name="Content"
        >
          <div
            className="content-stretch flex h-[56px] items-center justify-center relative shrink-0 w-full"
            data-name="State-layer"
          >
            <div
              className="relative shrink-0 size-[24px]"
              data-name="Icon"
            >
              <div
                className="absolute inset-[8.333%]"
                data-name="icon"
              >
                <div
                  className="absolute inset-0"
                  style={
                    {
                      "--fill-0": "rgba(255, 255, 255, 1)",
                    } as React.CSSProperties
                  }
                >
                  <img
                    alt=""
                    className="block max-w-none size-full"
                    src={img11}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (
    type === "Round" &&
    size === "Medium" &&
    style === "Filled" &&
    width === "Narrow"
  ) {
    return (
      <div
        className={className}
        data-name="Type=Round, Size=Medium, Style=Filled, Width=Narrow"
      >
        <div
          className="bg-[#4a671e] content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[100px] shrink-0 w-[48px]"
          data-name="Content"
        >
          <div
            className="content-stretch flex h-[56px] items-center justify-center relative shrink-0 w-full"
            data-name="State-layer"
          >
            <div
              className="relative shrink-0 size-[24px]"
              data-name="Icon"
            >
              <div
                className="absolute inset-[8.333%]"
                data-name="icon"
              >
                <div
                  className="absolute inset-0"
                  style={
                    {
                      "--fill-0": "rgba(255, 255, 255, 1)",
                    } as React.CSSProperties
                  }
                >
                  <img
                    alt=""
                    className="block max-w-none size-full"
                    src={img11}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (
    type === "Round" &&
    size === "Small" &&
    style === "Filled" &&
    width === "Wide"
  ) {
    return (
      <div
        className={className}
        data-name="Type=Round, Size=Small, Style=Filled, Width=Wide"
      >
        <div
          className="bg-[#4a671e] content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[100px] shrink-0 w-[52px]"
          data-name="Content"
        >
          <div
            className="content-stretch flex h-[40px] items-center justify-center relative shrink-0 w-full"
            data-name="State-layer"
          >
            <div
              className="relative shrink-0 size-[24px]"
              data-name="Icon"
            >
              <div
                className="absolute inset-[8.333%]"
                data-name="icon"
              >
                <div
                  className="absolute inset-0"
                  style={
                    {
                      "--fill-0": "rgba(255, 255, 255, 1)",
                    } as React.CSSProperties
                  }
                >
                  <img
                    alt=""
                    className="block max-w-none size-full"
                    src={img11}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (
    type === "Round" &&
    size === "Small" &&
    style === "Filled" &&
    width === "Default"
  ) {
    return (
      <div
        className={className}
        data-name="Type=Round, Size=Small, Style=Filled, Width=Default"
      >
        <div
          className="bg-[#4a671e] content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[100px] shrink-0 w-[40px]"
          data-name="Content"
        >
          <div
            className="content-stretch flex h-[40px] items-center justify-center relative shrink-0 w-full"
            data-name="State-layer"
          >
            <div
              className="relative shrink-0 size-[24px]"
              data-name="Icon"
            >
              <div
                className="absolute inset-[8.333%]"
                data-name="icon"
              >
                <div
                  className="absolute inset-0"
                  style={
                    {
                      "--fill-0": "rgba(255, 255, 255, 1)",
                    } as React.CSSProperties
                  }
                >
                  <img
                    alt=""
                    className="block max-w-none size-full"
                    src={img11}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (
    type === "Round" &&
    size === "Small" &&
    style === "Filled" &&
    width === "Narrow"
  ) {
    return (
      <div
        className={className}
        data-name="Type=Round, Size=Small, Style=Filled, Width=Narrow"
      >
        <div
          className="bg-[#4a671e] content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[100px] shrink-0 w-[32px]"
          data-name="Content"
        >
          <div
            className="content-stretch flex h-[40px] items-center justify-center relative shrink-0 w-full"
            data-name="State-layer"
          >
            <div
              className="relative shrink-0 size-[24px]"
              data-name="Icon"
            >
              <div
                className="absolute inset-[8.333%]"
                data-name="icon"
              >
                <div
                  className="absolute inset-0"
                  style={
                    {
                      "--fill-0": "rgba(255, 255, 255, 1)",
                    } as React.CSSProperties
                  }
                >
                  <img
                    alt=""
                    className="block max-w-none size-full"
                    src={img11}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (
    type === "Round" &&
    size === "XSmall" &&
    style === "Filled" &&
    width === "Wide"
  ) {
    return (
      <div
        className={className}
        data-name="Type=Round, Size=XSmall, Style=Filled, Width=Wide"
      >
        <div
          className="bg-[#4a671e] content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[100px] shrink-0 w-[40px]"
          data-name="Content"
        >
          <div
            className="content-stretch flex h-[32px] items-center justify-center relative shrink-0 w-full"
            data-name="State-layer"
          >
            <div
              className="relative shrink-0 size-[20px]"
              data-name="Icon"
            >
              <div
                className="absolute inset-[8.333%]"
                data-name="icon"
              >
                <div
                  className="absolute inset-0"
                  style={
                    {
                      "--fill-0": "rgba(255, 255, 255, 1)",
                    } as React.CSSProperties
                  }
                >
                  <img
                    alt=""
                    className="block max-w-none size-full"
                    src={img12}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (
    type === "Round" &&
    size === "XSmall" &&
    style === "Filled" &&
    width === "Default"
  ) {
    return (
      <div
        className={className}
        data-name="Type=Round, Size=XSmall, Style=Filled, Width=Default"
      >
        <div
          className="bg-[#4a671e] content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[100px] shrink-0 w-[32px]"
          data-name="Content"
        >
          <div
            className="content-stretch flex h-[32px] items-center justify-center relative shrink-0 w-full"
            data-name="State-layer"
          >
            <div
              className="relative shrink-0 size-[20px]"
              data-name="Icon"
            >
              <div
                className="absolute inset-[8.333%]"
                data-name="icon"
              >
                <div
                  className="absolute inset-0"
                  style={
                    {
                      "--fill-0": "rgba(255, 255, 255, 1)",
                    } as React.CSSProperties
                  }
                >
                  <img
                    alt=""
                    className="block max-w-none size-full"
                    src={img12}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div
      className={className}
      data-name="Type=Round, Size=XSmall, Style=Filled, Width=Narrow"
    >
      <div
        className="bg-[#4a671e] content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[100px] shrink-0 w-[28px]"
        data-name="Content"
      >
        <div
          className="content-stretch flex h-[32px] items-center justify-center relative shrink-0 w-full"
          data-name="State-layer"
        >
          <div
            className="relative shrink-0 size-[20px]"
            data-name="Icon"
          >
            <div
              className="absolute inset-[8.333%]"
              data-name="icon"
            >
              <div
                className="absolute inset-0"
                style={
                  {
                    "--fill-0": "rgba(255, 255, 255, 1)",
                  } as React.CSSProperties
                }
              >
                <img
                  alt=""
                  className="block max-w-none size-full"
                  src={img12}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * @figmaAssetKey 9b04d510931e79e821a4baa96f259176c46f56cf
 */
function ChatBubble({ className }: { className?: string }) {
  return (
    <div className={className} data-name="chat_bubble">
      <div className="absolute inset-[8.333%]" data-name="icon">
        <div
          className="absolute inset-0"
          style={
            {
              "--fill-0": "rgba(68, 72, 59, 1)",
            } as React.CSSProperties
          }
        >
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 20 20"
          >
            <path
              d={svgPaths.p27b1b000}
              fill="var(--fill-0, #44483B)"
              id="icon"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
type RadioButtonsProps = {
  className?: string;
  selected?: "True" | "False";
  state?:
    | "Enabled"
    | "Hovered"
    | "Focused"
    | "Pressed"
    | "Disabled";
};

/**
 * @figmaAssetKey 824004dbf41ee71a45e83164a6561b02fc31b82b
 */
function RadioButtons({
  className,
  selected = "True",
  state = "Enabled",
}: RadioButtonsProps) {
  if (selected === "False" && state === "Disabled") {
    return (
      <div
        className={className}
        data-name="Selected=False, State=Disabled"
      >
        <div
          className="content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0"
          data-name="container"
        >
          <div
            className="box-border content-stretch flex items-center justify-center p-[8px] relative shrink-0"
            data-name="state-layer"
          >
            <div
              className="opacity-[0.38] relative shrink-0 size-[24px]"
              data-name="icon"
            >
              <div
                className="absolute inset-[8.333%]"
                data-name="icon"
              >
                <div
                  className="absolute inset-0"
                  style={
                    {
                      "--fill-0": "rgba(26, 28, 22, 1)",
                    } as React.CSSProperties
                  }
                >
                  <img
                    alt=""
                    className="block max-w-none size-full"
                    src={img13}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (selected === "False" && state === "Pressed") {
    return (
      <div
        className={className}
        data-name="Selected=False, State=Pressed"
      >
        <div
          className="content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0"
          data-name="container"
        >
          <div
            className="bg-[rgba(77,102,43,0.12)] box-border content-stretch flex items-center justify-center p-[8px] relative shrink-0"
            data-name="state-layer"
          >
            <div
              className="relative shrink-0 size-[24px]"
              data-name="icon"
            >
              <div
                className="absolute inset-[8.333%]"
                data-name="icon"
              >
                <div
                  className="absolute inset-0"
                  style={
                    {
                      "--fill-0": "rgba(26, 28, 22, 1)",
                    } as React.CSSProperties
                  }
                >
                  <img
                    alt=""
                    className="block max-w-none size-full"
                    src={img13}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (selected === "False" && state === "Focused") {
    return (
      <div
        className={className}
        data-name="Selected=False, State=Focused"
      >
        <div
          className="content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0"
          data-name="container"
        >
          <div
            className="bg-[rgba(26,28,22,0.12)] box-border content-stretch flex items-center justify-center p-[8px] relative shrink-0"
            data-name="state-layer"
          >
            <div
              className="relative shrink-0 size-[24px]"
              data-name="icon"
            >
              <div
                className="absolute inset-[8.333%]"
                data-name="icon"
              >
                <div
                  className="absolute inset-0"
                  style={
                    {
                      "--fill-0": "rgba(26, 28, 22, 1)",
                    } as React.CSSProperties
                  }
                >
                  <img
                    alt=""
                    className="block max-w-none size-full"
                    src={img13}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (selected === "False" && state === "Hovered") {
    return (
      <div
        className={className}
        data-name="Selected=False, State=Hovered"
      >
        <div
          className="content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0"
          data-name="container"
        >
          <div
            className="bg-[rgba(26,28,22,0.08)] box-border content-stretch flex items-center justify-center p-[8px] relative shrink-0"
            data-name="state-layer"
          >
            <div
              className="relative shrink-0 size-[24px]"
              data-name="icon"
            >
              <div
                className="absolute inset-[8.333%]"
                data-name="icon"
              >
                <div
                  className="absolute inset-0"
                  style={
                    {
                      "--fill-0": "rgba(26, 28, 22, 1)",
                    } as React.CSSProperties
                  }
                >
                  <img
                    alt=""
                    className="block max-w-none size-full"
                    src={img13}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (selected === "False" && state === "Enabled") {
    return (
      <div
        className={className}
        data-name="Selected=False, State=Enabled"
      >
        <div
          className="content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0"
          data-name="container"
        >
          <div
            className="box-border content-stretch flex items-center justify-center p-[8px] relative shrink-0"
            data-name="state-layer"
          >
            <div
              className="relative shrink-0 size-[24px]"
              data-name="icon"
            >
              <div
                className="absolute inset-[8.333%]"
                data-name="icon"
              >
                <div
                  className="absolute inset-0"
                  style={
                    {
                      "--fill-0": "rgba(68, 72, 59, 1)",
                    } as React.CSSProperties
                  }
                >
                  <svg
                    className="block size-full"
                    fill="none"
                    preserveAspectRatio="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d={svgPaths.p208acf00}
                      fill="var(--fill-0, #44483B)"
                      id="icon"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (selected === "True" && state === "Disabled") {
    return (
      <div
        className={className}
        data-name="Selected=True, State=Disabled"
      >
        <div
          className="content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0"
          data-name="container"
        >
          <div
            className="box-border content-stretch flex items-center justify-center p-[8px] relative shrink-0"
            data-name="state-layer"
          >
            <div
              className="opacity-[0.38] relative shrink-0 size-[24px]"
              data-name="icon"
            >
              <div
                className="absolute inset-[8.333%]"
                data-name="icon"
              >
                <div
                  className="absolute inset-0"
                  style={
                    {
                      "--fill-0": "rgba(26, 28, 22, 1)",
                    } as React.CSSProperties
                  }
                >
                  <img
                    alt=""
                    className="block max-w-none size-full"
                    src={img14}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (selected === "True" && state === "Pressed") {
    return (
      <div
        className={className}
        data-name="Selected=True, State=Pressed"
      >
        <div
          className="content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0"
          data-name="container"
        >
          <div
            className="bg-[rgba(26,28,22,0.12)] box-border content-stretch flex items-center justify-center p-[8px] relative shrink-0"
            data-name="state-layer"
          >
            <div
              className="relative shrink-0 size-[24px]"
              data-name="icon"
            >
              <div
                className="absolute inset-[8.333%]"
                data-name="icon"
              >
                <div
                  className="absolute inset-0"
                  style={
                    {
                      "--fill-0": "rgba(74, 103, 30, 1)",
                    } as React.CSSProperties
                  }
                >
                  <img
                    alt=""
                    className="block max-w-none size-full"
                    src={img15}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (selected === "True" && state === "Focused") {
    return (
      <div
        className={className}
        data-name="Selected=True, State=Focused"
      >
        <div
          className="content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0"
          data-name="container"
        >
          <div
            className="bg-[rgba(77,102,43,0.12)] box-border content-stretch flex items-center justify-center p-[8px] relative shrink-0"
            data-name="state-layer"
          >
            <div
              className="relative shrink-0 size-[24px]"
              data-name="icon"
            >
              <div
                className="absolute inset-[8.333%]"
                data-name="icon"
              >
                <div
                  className="absolute inset-0"
                  style={
                    {
                      "--fill-0": "rgba(74, 103, 30, 1)",
                    } as React.CSSProperties
                  }
                >
                  <img
                    alt=""
                    className="block max-w-none size-full"
                    src={img15}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (selected === "True" && state === "Hovered") {
    return (
      <div
        className={className}
        data-name="Selected=True, State=Hovered"
      >
        <div
          className="content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0"
          data-name="container"
        >
          <div
            className="bg-[rgba(77,102,43,0.08)] box-border content-stretch flex items-center justify-center p-[8px] relative shrink-0"
            data-name="state-layer"
          >
            <div
              className="relative shrink-0 size-[24px]"
              data-name="icon"
            >
              <div
                className="absolute inset-[8.333%]"
                data-name="icon"
              >
                <div
                  className="absolute inset-0"
                  style={
                    {
                      "--fill-0": "rgba(74, 103, 30, 1)",
                    } as React.CSSProperties
                  }
                >
                  <img
                    alt=""
                    className="block max-w-none size-full"
                    src={img15}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div
      className={className}
      data-name="Selected=True, State=Enabled"
    >
      <div
        className="content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0"
        data-name="container"
      >
        <div
          className="box-border content-stretch flex items-center justify-center p-[8px] relative shrink-0"
          data-name="state-layer"
        >
          <div
            className="relative shrink-0 size-[24px]"
            data-name="icon"
          >
            <div
              className="absolute inset-[8.333%]"
              data-name="icon"
            >
              <div
                className="absolute inset-0"
                style={
                  {
                    "--fill-0": "rgba(74, 103, 30, 1)",
                  } as React.CSSProperties
                }
              >
                <img
                  alt=""
                  className="block max-w-none size-full"
                  src={img15}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * @figmaAssetKey 6091f906a932fe8795721b93af69a7034dd70e64
 */
function PendingActions({ className }: { className?: string }) {
  return (
    <div className={className} data-name="pending_actions">
      <div
        className="absolute inset-0 overflow-clip"
        data-name="pending_actions"
      >
        <div
          className="absolute inset-[6.25%_12.5%]"
          data-name="Vector"
        >
          <div
            className="absolute inset-0"
            style={
              {
                "--fill-0": "rgba(68, 72, 59, 1)",
              } as React.CSSProperties
            }
          >
            <svg
              className="block size-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 18 21"
            >
              <path
                d={svgPaths.p302c2680}
                fill="var(--fill-0, #44483B)"
                id="Vector"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * @figmaAssetKey 46169eb7b051436b0d42f9e970c28845bd308a9e
 */
function RadioButtonUnchecked({
  className,
}: {
  className?: string;
}) {
  return (
    <div
      className={className}
      data-name="radio_button_unchecked"
    >
      <div className="absolute inset-[8.333%]" data-name="icon">
        <div
          className="absolute inset-0"
          style={
            {
              "--fill-0": "rgba(26, 28, 22, 1)",
            } as React.CSSProperties
          }
        >
          <img
            alt=""
            className="block max-w-none size-full"
            src={imgIcon}
          />
        </div>
      </div>
    </div>
  );
}

/**
 * @figmaAssetKey 9fa220653ce368cc18b6d1247037b1584dfaebbe
 */
function BuildingBlocksStateLayer1Enabled1({
  className,
}: {
  className?: string;
}) {
  return (
    <div
      className={className}
      data-name="Building Blocks/state-layer/1. enabled"
    />
  );
}

/**
 * @figmaAssetKey 48c0a4b92c3075b4b17da8c56ed998432b28bb23
 */
function RadioButtonChecked({
  className,
}: {
  className?: string;
}) {
  return (
    <div className={className} data-name="radio_button_checked">
      <div className="absolute inset-[8.333%]" data-name="icon">
        <div
          className="absolute inset-0"
          style={
            {
              "--fill-0": "rgba(26, 28, 22, 1)",
            } as React.CSSProperties
          }
        >
          <img
            alt=""
            className="block max-w-none size-full"
            src={imgIcon1}
          />
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
function DeviationGrades({
  className,
  state = "Selection",
  type = "Revision",
}: DeviationGradesProps) {
  const element = (
    <BuildingBlocksStateLayer1Enabled1 className="absolute inset-0" />
  );
  if (state === "High" && type === "Revision") {
    return (
      <button
        className={className}
        data-name="State=High, Type=Revision"
      >
        <div
          className="bg-[#ffdad6] content-stretch flex flex-col h-[56px] items-center justify-center min-h-[56px] relative rounded-[8px] shrink-0 w-full"
          data-name="List item/List Item: -4 Density"
        >
          {element}
          <div
            className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full"
            data-name="state-layer"
          >
            <div className="flex flex-row items-center size-full">
              <div className="box-border content-stretch flex gap-[16px] items-center px-[16px] py-0 relative size-full">
                <div
                  className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0 text-[#410002]"
                  data-name="Content"
                >
                  <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[16px] tracking-[0.15px] w-full">
                    <p className="leading-[24px]">
                      Stort avvik
                    </p>
                  </div>
                  <p className="[white-space-collapse:collapse] font-['Manrope:Regular',sans-serif] font-normal h-[20px] leading-[20px] overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-nowrap tracking-[0.25px] w-full">
                    Verken låsing eller merking er
                    tilfredsstillende — høy risiko for feilbruk.
                  </p>
                </div>
                <div
                  className="content-stretch flex gap-[10px] items-center relative shrink-0"
                  data-name="Trailing element"
                >
                  <div
                    className="relative shrink-0 size-[24px]"
                    data-name="arrow_drop_down"
                  >
                    <div
                      className="absolute inset-[41.67%_29.17%_37.5%_29.17%]"
                      data-name="icon"
                    >
                      <div
                        className="absolute inset-0"
                        style={
                          {
                            "--fill-0": "rgba(65, 0, 2, 1)",
                          } as React.CSSProperties
                        }
                      >
                        <img
                          alt=""
                          className="block max-w-none size-full"
                          src={img16}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </button>
    );
  }
  if (state === "High" && type === "Report") {
    return (
      <button
        className={className}
        data-name="State=High, Type=Report"
      >
        <div
          className="bg-[#ffdad6] content-stretch flex flex-col h-[56px] items-center justify-center min-h-[56px] relative rounded-[8px] shrink-0 w-full"
          data-name="List item/List Item: -4 Density"
        >
          {element}
          <div
            className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full"
            data-name="state-layer"
          >
            <div className="flex flex-row items-center justify-center size-full">
              <div className="box-border content-stretch flex gap-[16px] items-center justify-center px-[16px] py-0 relative size-full">
                <div
                  className="content-stretch flex items-center justify-center relative shrink-0"
                  data-name="Leading element"
                >
                  <div
                    className="relative shrink-0 size-[24px]"
                    data-name="report_problem"
                  >
                    <div
                      className="absolute inset-0 overflow-clip"
                      data-name="report_problem"
                    >
                      <div
                        className="absolute inset-[10.42%_4.17%]"
                        data-name="Vector"
                      >
                        <div
                          className="absolute inset-0"
                          style={
                            {
                              "--fill-0": "rgba(65, 0, 2, 1)",
                            } as React.CSSProperties
                          }
                        >
                          <svg
                            className="block size-full"
                            fill="none"
                            preserveAspectRatio="none"
                            viewBox="0 0 22 19"
                          >
                            <path
                              d={svgPaths.p6027970}
                              fill="var(--fill-0, #410002)"
                              id="Vector"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="basis-0 content-stretch flex flex-col font-['Manrope:Medium',sans-serif] font-medium grow h-full items-start justify-center leading-[0] min-h-px min-w-px overflow-clip relative shrink-0 text-[#410002]"
                  data-name="Content"
                >
                  <div className="flex flex-col justify-center relative shrink-0 text-[12px] tracking-[0.5px] w-full">
                    <p className="leading-[16px]">
                      Beregnet alvorlighetsgrad
                    </p>
                  </div>
                  <div className="flex flex-col justify-center relative shrink-0 text-[16px] tracking-[0.15px] w-full">
                    <p className="leading-[24px]">
                      Stort avvik
                    </p>
                  </div>
                </div>
                <div
                  className="content-stretch flex gap-[10px] items-center relative shrink-0"
                  data-name="Trailing element"
                >
                  <div
                    className="relative shrink-0 size-[24px]"
                    data-name="info"
                  >
                    <div
                      className="absolute inset-0 overflow-clip"
                      data-name="info"
                    >
                      <div
                        className="absolute inset-[8.333%]"
                        data-name="Vector"
                      >
                        <div
                          className="absolute inset-0"
                          style={
                            {
                              "--fill-0": "rgba(65, 0, 2, 1)",
                            } as React.CSSProperties
                          }
                        >
                          <svg
                            className="block size-full"
                            fill="none"
                            preserveAspectRatio="none"
                            viewBox="0 0 20 20"
                          >
                            <path
                              d={svgPaths.p19ecbc00}
                              fill="var(--fill-0, #410002)"
                              id="Vector"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </button>
    );
  }
  if (state === "Low" && type === "Revision") {
    return (
      <button
        className={className}
        data-name="State=Low, Type=Revision"
      >
        <div
          className="bg-[#fdeeb1] content-stretch flex flex-col h-[56px] items-center justify-center min-h-[56px] relative rounded-[8px] shrink-0 w-full"
          data-name="List item/List Item: -4 Density"
        >
          {element}
          <div
            className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full"
            data-name="state-layer"
          >
            <div className="flex flex-row items-center size-full">
              <div className="box-border content-stretch flex gap-[16px] items-center px-[16px] py-0 relative size-full">
                <div
                  className="basis-0 content-stretch flex flex-col font-['Manrope:Regular',sans-serif] font-normal grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0 text-[#3d2c00]"
                  data-name="Content"
                >
                  <div className="flex flex-col justify-center leading-[0] relative shrink-0 text-[16px] tracking-[0.5px] w-full">
                    <p className="leading-[24px]">Lite avvik</p>
                  </div>
                  <p className="[white-space-collapse:collapse] h-[20px] leading-[20px] overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-nowrap tracking-[0.25px] w-full">
                    Liten uorden eller manglende oppslag, enkelt
                    å rette opp uten større tiltak.
                  </p>
                </div>
                <div
                  className="content-stretch flex gap-[10px] items-start relative shrink-0"
                  data-name="Trailing element"
                >
                  <div
                    className="relative shrink-0 size-[24px]"
                    data-name="arrow_drop_down"
                  >
                    <div
                      className="absolute inset-[41.67%_29.17%_37.5%_29.17%]"
                      data-name="icon"
                    >
                      <div
                        className="absolute inset-0"
                        style={
                          {
                            "--fill-0": "rgba(61, 44, 0, 1)",
                          } as React.CSSProperties
                        }
                      >
                        <img
                          alt=""
                          className="block max-w-none size-full"
                          src={img17}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </button>
    );
  }
  if (state === "Low" && type === "Report") {
    return (
      <button
        className={className}
        data-name="State=Low, Type=Report"
      >
        <div
          className="bg-[#fdeeb1] content-stretch flex flex-col h-[56px] items-center justify-center min-h-[56px] relative rounded-[8px] shrink-0 w-full"
          data-name="List item/List Item: -4 Density"
        >
          {element}
          <div
            className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full"
            data-name="state-layer"
          >
            <div className="flex flex-row items-center justify-center size-full">
              <div className="box-border content-stretch flex gap-[16px] items-center justify-center px-[16px] py-0 relative size-full">
                <div
                  className="content-stretch flex items-center justify-center relative shrink-0"
                  data-name="Leading element"
                >
                  <div
                    className="relative shrink-0 size-[24px]"
                    data-name="report_problem"
                  >
                    <div
                      className="absolute inset-0 overflow-clip"
                      data-name="report_problem"
                    >
                      <div
                        className="absolute inset-[10.42%_4.17%]"
                        data-name="Vector"
                      >
                        <div
                          className="absolute inset-0"
                          style={
                            {
                              "--fill-0": "rgba(61, 44, 0, 1)",
                            } as React.CSSProperties
                          }
                        >
                          <img
                            alt=""
                            className="block max-w-none size-full"
                            src={img18}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center leading-[0] min-h-px min-w-px overflow-clip relative shrink-0 text-[#3d2c00] tracking-[0.5px]"
                  data-name="Content"
                >
                  <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[12px] w-full">
                    <p className="leading-[16px]">
                      Beregnet alvorlighetsgrad
                    </p>
                  </div>
                  <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[16px] w-full">
                    <p className="leading-[24px]">Lite avvik</p>
                  </div>
                </div>
                <div
                  className="content-stretch flex gap-[10px] items-center relative shrink-0"
                  data-name="Trailing element"
                >
                  <div
                    className="relative shrink-0 size-[24px]"
                    data-name="info"
                  >
                    <div
                      className="absolute inset-0 overflow-clip"
                      data-name="info"
                    >
                      <div
                        className="absolute inset-[8.333%]"
                        data-name="Vector"
                      >
                        <div
                          className="absolute inset-0"
                          style={
                            {
                              "--fill-0": "rgba(61, 44, 0, 1)",
                            } as React.CSSProperties
                          }
                        >
                          <img
                            alt=""
                            className="block max-w-none size-full"
                            src={img19}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </button>
    );
  }
  if (state === "Medium" && type === "Revision") {
    return (
      <button
        className={className}
        data-name="State=Medium, Type=Revision"
      >
        <div
          className="bg-[#fdd19f] content-stretch flex flex-col h-[56px] items-center justify-center min-h-[56px] relative rounded-[8px] shrink-0 w-full"
          data-name="List item/List Item: -4 Density"
        >
          {element}
          <div
            className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full"
            data-name="state-layer"
          >
            <div className="flex flex-row items-center size-full">
              <div className="box-border content-stretch flex gap-[16px] items-center px-[16px] py-0 relative size-full">
                <div
                  className="basis-0 content-stretch flex flex-col font-['Manrope:Regular',sans-serif] font-normal grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0 text-[#3d2100]"
                  data-name="Content"
                >
                  <div className="flex flex-col justify-center leading-[0] relative shrink-0 text-[16px] tracking-[0.5px] w-full">
                    <p className="leading-[24px]">Avvik</p>
                  </div>
                  <p className="[white-space-collapse:collapse] h-[20px] leading-[20px] overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-nowrap tracking-[0.25px] w-full">
                    Merkingen og strukturen er mangelfull, men
                    risikoen er lav.
                  </p>
                </div>
                <div
                  className="content-stretch flex gap-[10px] items-start relative shrink-0"
                  data-name="Trailing element"
                >
                  <div
                    className="relative shrink-0 size-[24px]"
                    data-name="arrow_drop_down"
                  >
                    <div
                      className="absolute inset-[41.67%_29.17%_37.5%_29.17%]"
                      data-name="icon"
                    >
                      <div
                        className="absolute inset-0"
                        style={
                          {
                            "--fill-0": "rgba(61, 33, 0, 1)",
                          } as React.CSSProperties
                        }
                      >
                        <img
                          alt=""
                          className="block max-w-none size-full"
                          src={img20}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </button>
    );
  }
  if (state === "Medium" && type === "Report") {
    return (
      <button
        className={className}
        data-name="State=Medium, Type=Report"
      >
        <div
          className="bg-[#fdd19f] content-stretch flex flex-col h-[56px] items-center justify-center min-h-[56px] relative rounded-[8px] shrink-0 w-full"
          data-name="List item/List Item: -4 Density"
        >
          {element}
          <div
            className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full"
            data-name="state-layer"
          >
            <div className="flex flex-row items-center justify-center size-full">
              <div className="box-border content-stretch flex gap-[16px] items-center justify-center px-[16px] py-0 relative size-full">
                <div
                  className="content-stretch flex items-center justify-center relative shrink-0"
                  data-name="Leading element"
                >
                  <div
                    className="relative shrink-0 size-[24px]"
                    data-name="report_problem"
                  >
                    <div
                      className="absolute inset-0 overflow-clip"
                      data-name="report_problem"
                    >
                      <div
                        className="absolute inset-[10.42%_4.17%]"
                        data-name="Vector"
                      >
                        <div
                          className="absolute inset-0"
                          style={
                            {
                              "--fill-0": "rgba(61, 33, 0, 1)",
                            } as React.CSSProperties
                          }
                        >
                          <img
                            alt=""
                            className="block max-w-none size-full"
                            src={img21}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center leading-[0] min-h-px min-w-px overflow-clip relative shrink-0 text-[#3d2100] tracking-[0.5px]"
                  data-name="Content"
                >
                  <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[12px] w-full">
                    <p className="leading-[16px]">
                      Beregnet alvorlighetsgrad
                    </p>
                  </div>
                  <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[16px] w-full">
                    <p className="leading-[24px]">Avvik</p>
                  </div>
                </div>
                <div
                  className="content-stretch flex gap-[10px] items-center relative shrink-0"
                  data-name="Trailing element"
                >
                  <div
                    className="relative shrink-0 size-[24px]"
                    data-name="info"
                  >
                    <div
                      className="absolute inset-0 overflow-clip"
                      data-name="info"
                    >
                      <div
                        className="absolute inset-[8.333%]"
                        data-name="Vector"
                      >
                        <div
                          className="absolute inset-0"
                          style={
                            {
                              "--fill-0": "rgba(61, 33, 0, 1)",
                            } as React.CSSProperties
                          }
                        >
                          <img
                            alt=""
                            className="block max-w-none size-full"
                            src={img22}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </button>
    );
  }
  return (
    <div
      className={className}
      data-name="State=Selection, Type=Revision"
    >
      <button
        className="bg-[#fdeeb1] box-border content-stretch flex flex-col h-[56px] items-center justify-center min-h-[56px] overflow-visible p-0 relative rounded-[8px] shrink-0 w-full"
        data-name="List item/List Item: -4 Density"
      >
        {element}
        <div
          className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full"
          data-name="state-layer"
        >
          <div className="flex flex-row items-center size-full">
            <div className="box-border content-stretch flex gap-[16px] items-center px-[16px] py-0 relative size-full">
              <div
                className="content-stretch flex items-center justify-center relative shrink-0"
                data-name="Leading element"
              >
                <div
                  className="content-stretch flex items-center justify-center relative shrink-0 size-[24px]"
                  data-name="Radio buttons"
                >
                  <div
                    className="content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0"
                    data-name="container"
                  >
                    <div
                      className="box-border content-stretch flex items-center justify-center p-[8px] relative shrink-0"
                      data-name="state-layer"
                    >
                      <RadioButtonChecked className="relative shrink-0 size-[24px]" />
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="basis-0 content-stretch flex flex-col font-['Manrope:Regular',sans-serif] font-normal grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0 text-[#3d2c00]"
                data-name="Content"
              >
                <div className="flex flex-col justify-center leading-[0] relative shrink-0 text-[16px] tracking-[0.5px] w-full">
                  <p className="leading-[24px]">Lite avvik</p>
                </div>
                <p className="[white-space-collapse:collapse] h-[20px] leading-[20px] overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-nowrap tracking-[0.25px] w-full">
                  Liten uorden eller manglende oppslag, enkelt å
                  rette opp uten større tiltak.
                </p>
              </div>
            </div>
          </div>
        </div>
      </button>
      <button
        className="bg-[#fdd19f] box-border content-stretch flex flex-col h-[56px] items-center justify-center min-h-[56px] overflow-visible p-0 relative rounded-[8px] shrink-0 w-full"
        data-name="List item/List Item: -4 Density"
      >
        <BuildingBlocksStateLayer1Enabled1 className="absolute inset-0" />
        <div
          className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full"
          data-name="state-layer"
        >
          <div className="flex flex-row items-center size-full">
            <div className="box-border content-stretch flex gap-[16px] items-center px-[16px] py-0 relative size-full">
              <div
                className="content-stretch flex items-center justify-center relative shrink-0"
                data-name="Leading element"
              >
                <div
                  className="content-stretch flex items-center justify-center relative shrink-0 size-[24px]"
                  data-name="Radio buttons"
                >
                  <div
                    className="content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0"
                    data-name="container"
                  >
                    <div
                      className="box-border content-stretch flex items-center justify-center p-[8px] relative shrink-0"
                      data-name="state-layer"
                    >
                      <div
                        className="relative shrink-0 size-[24px]"
                        data-name="icon"
                      >
                        <div
                          className="absolute inset-[8.333%]"
                          data-name="icon"
                        >
                          <div
                            className="absolute inset-0"
                            style={
                              {
                                "--fill-0":
                                  "rgba(61, 33, 0, 1)",
                              } as React.CSSProperties
                            }
                          >
                            <img
                              alt=""
                              className="block max-w-none size-full"
                              src={img23}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="basis-0 content-stretch flex flex-col font-['Manrope:Regular',sans-serif] font-normal grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0 text-[#3d2100]"
                data-name="Content"
              >
                <div className="flex flex-col justify-center leading-[0] relative shrink-0 text-[16px] tracking-[0.5px] w-full">
                  <p className="leading-[24px]">Avvik</p>
                </div>
                <p className="[white-space-collapse:collapse] h-[20px] leading-[20px] overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-nowrap tracking-[0.25px] w-full">
                  Merkingen og strukturen er mangelfull, men
                  risikoen er lav.
                </p>
              </div>
            </div>
          </div>
        </div>
      </button>
      <button
        className="bg-[#ffdad6] box-border content-stretch flex flex-col h-[56px] items-center justify-center min-h-[56px] overflow-visible p-0 relative rounded-[8px] shrink-0 w-full"
        data-name="List item/List Item: -4 Density"
      >
        <BuildingBlocksStateLayer1Enabled1 className="absolute inset-0" />
        <div
          className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full"
          data-name="state-layer"
        >
          <div className="flex flex-row items-center size-full">
            <div className="box-border content-stretch flex gap-[16px] items-center px-[16px] py-0 relative size-full">
              <div
                className="content-stretch flex items-center justify-center relative shrink-0"
                data-name="Leading element"
              >
                <div
                  className="content-stretch flex items-center justify-center relative shrink-0 size-[24px]"
                  data-name="Radio buttons"
                >
                  <div
                    className="content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0"
                    data-name="container"
                  >
                    <div
                      className="box-border content-stretch flex items-center justify-center p-[8px] relative shrink-0"
                      data-name="state-layer"
                    >
                      <RadioButtonUnchecked className="relative shrink-0 size-[24px]" />
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="basis-0 content-stretch flex flex-col font-['Manrope:Regular',sans-serif] font-normal grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0 text-[#410002]"
                data-name="Content"
              >
                <div className="flex flex-col justify-center leading-[0] relative shrink-0 text-[16px] tracking-[0.5px] w-full">
                  <p className="leading-[24px]">Stor avvik</p>
                </div>
                <p className="[white-space-collapse:collapse] h-[20px] leading-[20px] overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-nowrap tracking-[0.25px] w-full">
                  Verken låsing eller merking er
                  tilfredsstillende — høy risiko for feilbruk.
                </p>
              </div>
            </div>
          </div>
        </div>
      </button>
    </div>
  );
}
type OpenInNewProps = {
  className?: string;
  style?:
    | "Filled"
    | "Outlined"
    | "Round"
    | "Sharp"
    | "Two Tone";
};

/**
 * @figmaAssetKey e5189d4054f6360325fe7b0b13b401e8e33e663e
 */
function OpenInNew({
  className,
  style = "Filled",
}: OpenInNewProps) {
  if (style === "Outlined") {
    return (
      <div className={className} data-name="Style=Outlined">
        <div
          className="absolute inset-[12.5%]"
          data-name="Vector"
        >
          <img
            alt=""
            className="block max-w-none size-full"
            src={imgVector6}
          />
        </div>
      </div>
    );
  }
  if (style === "Round") {
    return (
      <div className={className} data-name="Style=Round">
        <div
          className="absolute inset-[12.5%]"
          data-name="Vector"
        >
          <img
            alt=""
            className="block max-w-none size-full"
            src={imgVector7}
          />
        </div>
      </div>
    );
  }
  if (style === "Sharp") {
    return (
      <div className={className} data-name="Style=Sharp">
        <div
          className="absolute inset-[12.5%]"
          data-name="Vector"
        >
          <img
            alt=""
            className="block max-w-none size-full"
            src={imgVector8}
          />
        </div>
      </div>
    );
  }
  if (style === "Two Tone") {
    return (
      <div className={className} data-name="Style=Two Tone">
        <div
          className="absolute inset-[12.5%]"
          data-name="Vector"
        >
          <img
            alt=""
            className="block max-w-none size-full"
            src={imgVector9}
          />
        </div>
      </div>
    );
  }
  return (
    <div className={className} data-name="Style=Filled">
      <div
        className="absolute inset-[12.5%]"
        data-name="Vector"
      >
        <img
          alt=""
          className="block max-w-none size-full"
          src={imgVector6}
        />
      </div>
    </div>
  );
}

function StateLayer() {
  return (
    <div
      className="box-border content-stretch flex gap-[10px] items-center justify-center p-[8px] relative shrink-0"
      data-name="state-layer"
    >
      <div
        className="relative shrink-0 size-[24px]"
        data-name="Icon"
      >
        <OpenInNew
          style="Outlined"
          className="absolute inset-0 overflow-clip"
        />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div
      className="content-stretch flex gap-[10px] items-center justify-center overflow-clip relative rounded-[100px] shrink-0"
      data-name="container"
    >
      <StateLayer />
    </div>
  );
}

function TrailingIcon() {
  return (
    <div
      className="content-stretch flex h-[48px] items-center justify-end relative shrink-0"
      data-name="trailing-icon"
    >
      <div
        className="content-stretch cursor-pointer flex flex-col gap-[10px] items-center justify-center relative shrink-0 size-[48px]"
        data-name="trailing-icon 2"
      >
        <Container />
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0">
      <div className="flex flex-col font-['Quatro:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1a1c16] text-[22px] text-nowrap">
        <p className="leading-[28px] whitespace-pre">
          <span className="font-['Quatro:Regular',sans-serif] not-italic">
            1.
          </span>
          1
          <span className="font-['Quatro:Regular',sans-serif] not-italic">
            .
          </span>
          4
        </p>
      </div>
      <TrailingIcon />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <Frame />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full">
      <Frame2 />
      <div className="flex flex-col font-['Quatro:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1a1c16] text-[22px] w-full">
        <p className="leading-[28px]">
          Er utstyr som krever det, kontrollert og sertifisert i
          tråd med forskrifter?
        </p>
      </div>
    </div>
  );
}

function ChecklistQuestion() {
  return (
    <div
      className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full"
      data-name="Checklist question"
    >
      <Frame4 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-x-clip overflow-y-auto relative shrink-0 w-full">
      <ChecklistQuestion />
      <DeviationGrades
        state="High"
        type="Report"
        className="box-border content-stretch cursor-pointer flex flex-col gap-[8px] items-start overflow-visible p-0 relative shrink-0 w-full"
      />
    </div>
  );
}

function LeadingElement() {
  return (
    <div
      className="content-stretch flex items-center justify-center relative shrink-0"
      data-name="Leading element"
    >
      <Add className="relative shrink-0 size-[24px]" />
    </div>
  );
}

function Content() {
  return (
    <div
      className="basis-0 content-stretch flex flex-col font-['Manrope:Regular',sans-serif] font-normal grow items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0"
      data-name="Content"
    >
      <div className="flex flex-col justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] tracking-[0.5px] w-full">
        <p className="leading-[24px]">{`Ansvarlig `}</p>
      </div>
      <p className="leading-[20px] relative shrink-0 text-[#44483b] text-[14px] tracking-[0.25px] w-full">
        Påkrevd
      </p>
      <p className="h-0 leading-[20px] opacity-0 relative shrink-0 text-[#44483b] text-[14px] tracking-[0.25px] w-full">
        Ingen dokumentasjon fremvist for truckkontroll.
      </p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center p-[8px] relative w-full">
          <LeadingElement />
          <Content />
          <AvvikReportStatus className="content-stretch flex items-center justify-center relative shrink-0" />
        </div>
      </div>
    </div>
  );
}

function LeadingElement1() {
  return (
    <div
      className="content-stretch flex items-center justify-center relative shrink-0"
      data-name="Leading element"
    >
      <PendingActions className="relative shrink-0 size-[24px]" />
    </div>
  );
}

function Content1() {
  return (
    <div
      className="basis-0 content-stretch flex flex-col grow items-start justify-center leading-[0] min-h-px min-w-px overflow-clip relative shrink-0 tracking-[0.5px]"
      data-name="Content"
    >
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[#44483b] text-[12px] w-full">
        <p className="leading-[16px]">{`Tidsfrist `}</p>
      </div>
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#1a1c16] text-[16px] w-full">
        <p className="leading-[24px]">
          4. mars 2026 (anbefalt)
        </p>
      </div>
    </div>
  );
}

function StateLayer1() {
  return (
    <div
      className="content-stretch flex h-[32px] items-center justify-center relative shrink-0 w-full"
      data-name="State-layer"
    >
      <div
        className="relative shrink-0 size-[20px]"
        data-name="Icon"
      >
        <Edit
          style="Outlined"
          className="absolute inset-0 overflow-clip"
        />
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[16px] items-start p-[8px] relative w-full">
          <LeadingElement1 />
          <Content1 />
          <div
            className="content-stretch flex items-center justify-center relative shrink-0 size-[48px]"
            data-name="Icon button"
          >
            <div
              className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[100px] shrink-0 w-[28px]"
              data-name="Content"
            >
              <StateLayer1 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <div className="basis-0 flex flex-col font-['Manrope:Medium',sans-serif] font-medium grow justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[#1a1c16] text-[16px] tracking-[0.15px]">
        <p className="leading-[24px]">Bekreftelse av tiltak</p>
      </div>
      <AvvikReportStatus className="content-stretch flex items-center justify-center relative shrink-0" />
    </div>
  );
}

function LeadingElement2() {
  return (
    <div
      className="content-stretch flex items-center justify-center relative shrink-0"
      data-name="Leading element"
    >
      <RadioButtons
        selected="False"
        className="content-stretch flex items-center justify-center relative shrink-0 size-[24px]"
      />
    </div>
  );
}

function Content2() {
  return (
    <div
      className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0"
      data-name="Content"
    >
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] tracking-[0.5px] w-full">
        <p className="leading-[24px]">Dokumentasjon</p>
      </div>
    </div>
  );
}

function StateLayer2() {
  return (
    <div
      className="content-stretch flex gap-[16px] h-[40px] items-center relative shrink-0 w-full"
      data-name="state-layer"
    >
      <LeadingElement2 />
      <Content2 />
    </div>
  );
}

function LeadingElement3() {
  return (
    <div
      className="content-stretch flex items-center justify-center relative shrink-0"
      data-name="Leading element"
    >
      <RadioButtons
        selected="False"
        className="content-stretch flex items-center justify-center relative shrink-0 size-[24px]"
      />
    </div>
  );
}

function Content3() {
  return (
    <div
      className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0"
      data-name="Content"
    >
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] tracking-[0.5px] w-full">
        <p className="leading-[24px]">Digitalt besøk</p>
      </div>
    </div>
  );
}

function StateLayer3() {
  return (
    <div
      className="content-stretch flex gap-[16px] h-[40px] items-center relative shrink-0 w-full"
      data-name="state-layer"
    >
      <LeadingElement3 />
      <Content3 />
    </div>
  );
}

function LeadingElement4() {
  return (
    <div
      className="content-stretch flex items-center justify-center relative shrink-0"
      data-name="Leading element"
    >
      <RadioButtons
        selected="False"
        className="content-stretch flex items-center justify-center relative shrink-0 size-[24px]"
      />
    </div>
  );
}

function Content4() {
  return (
    <div
      className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0"
      data-name="Content"
    >
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] tracking-[0.5px] w-full">
        <p className="leading-[24px]">Fysisk besøk</p>
      </div>
    </div>
  );
}

function StateLayer4() {
  return (
    <div
      className="content-stretch flex gap-[16px] h-[40px] items-center relative shrink-0 w-full"
      data-name="state-layer"
    >
      <LeadingElement4 />
      <Content4 />
    </div>
  );
}

function ClosingAlternatives() {
  return (
    <div
      className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full"
      data-name="Closing alternatives"
    >
      <Frame1 />
      <div
        className="content-stretch flex flex-col items-center justify-center min-h-[40px] relative shrink-0 w-full"
        data-name="List item/List Item: -4 Density"
      >
        <BuildingBlocksStateLayer1Enabled className="absolute inset-0" />
        <StateLayer2 />
      </div>
      <button
        className="box-border content-stretch cursor-pointer flex flex-col items-center justify-center min-h-[40px] overflow-visible p-0 relative shrink-0 w-full"
        data-name="List item/List Item: -4 Density"
      >
        <BuildingBlocksStateLayer1Enabled className="absolute inset-0" />
        <StateLayer3 />
      </button>
      <div
        className="content-stretch flex flex-col items-center justify-center min-h-[40px] relative shrink-0 w-full"
        data-name="List item/List Item: -4 Density"
      >
        <BuildingBlocksStateLayer1Enabled className="absolute inset-0" />
        <StateLayer4 />
      </div>
    </div>
  );
}

function LeadingElement5() {
  return (
    <div
      className="content-stretch flex items-center justify-center relative shrink-0"
      data-name="Leading element"
    >
      <ChatBubble className="relative shrink-0 size-[24px]" />
    </div>
  );
}

function Content5() {
  return (
    <div
      className="basis-0 content-stretch flex flex-col font-['Manrope:Regular',sans-serif] font-normal grow items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0"
      data-name="Content"
    >
      <div className="flex flex-col justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] tracking-[0.5px] w-full">
        <p className="leading-[24px]">Kommentar til bonde</p>
      </div>
      <p className="leading-[20px] relative shrink-0 text-[#44483b] text-[14px] tracking-[0.25px] w-full">
        valgfri
      </p>
      <p className="h-0 leading-[20px] opacity-0 relative shrink-0 text-[#44483b] text-[14px] tracking-[0.25px] w-full">
        Ring meg på telefon først, og vi fortsetter dialogen på
        Messenger.
      </p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center p-[8px] relative w-full">
          <LeadingElement5 />
          <Content5 />
          <IconButton
            size="Small"
            style="Standard"
            width="Default"
            className="content-stretch flex items-center justify-center relative shrink-0 size-[48px]"
          />
        </div>
      </div>
    </div>
  );
}

function ClosingAvvik() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-[16px] items-start px-0 py-[8px] relative rounded-[12px] shrink-0 w-full"
      data-name="closing avvik"
    >
      <ClosingAlternatives />
      <button
        className="box-border content-stretch cursor-pointer flex flex-col gap-[8px] items-center justify-center min-h-[64px] overflow-visible pb-0 pt-[8px] px-0 relative shrink-0 w-full"
        data-name="App User Input comment"
      >
        <Frame7 />
      </button>
    </div>
  );
}

function Content6() {
  return (
    <div
      className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px overflow-clip relative shrink-0"
      data-name="Content"
    >
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#44483b] text-[12px] tracking-[0.5px] w-full">
        <p className="leading-[16px]">Rapportert avvik</p>
      </div>
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] tracking-[0.5px] w-full">
        <p className="leading-[24px]">
          Stort avvik fra kravet.
        </p>
      </div>
      <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#44483b] text-[14px] tracking-[0.25px] w-full">
        Kan ikke endres nå
      </p>
    </div>
  );
}

function StateLayer5() {
  return (
    <div
      className="box-border content-stretch flex gap-[16px] items-start px-0 py-[8px] relative shrink-0 w-full"
      data-name="state-layer"
    >
      <Content6 />
    </div>
  );
}

function LeadingElement6() {
  return (
    <div
      className="content-stretch flex items-center justify-center relative shrink-0"
      data-name="Leading element"
    >
      <Add className="relative shrink-0 size-[24px]" />
    </div>
  );
}

function Content7() {
  return (
    <div
      className="basis-0 content-stretch flex flex-col font-['Manrope:Regular',sans-serif] font-normal grow items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0"
      data-name="Content"
    >
      <div className="flex flex-col justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] tracking-[0.5px] w-full">
        <p className="leading-[24px]">Mangel</p>
      </div>
      <p className="leading-[20px] relative shrink-0 text-[#44483b] text-[14px] tracking-[0.25px] w-full">
        Påkrevd
      </p>
      <p className="h-0 leading-[20px] opacity-0 relative shrink-0 text-[#44483b] text-[14px] tracking-[0.25px] w-full">
        Ingen dokumentasjon fremvist for truckkontroll.
      </p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center p-[8px] relative w-full">
          <LeadingElement6 />
          <Content7 />
          <AvvikReportStatus className="content-stretch flex items-center justify-center relative shrink-0" />
        </div>
      </div>
    </div>
  );
}

function Content8() {
  return (
    <div
      className="basis-0 content-stretch flex flex-col grow items-start justify-center leading-[0] min-h-px min-w-px overflow-clip relative shrink-0 tracking-[0.5px]"
      data-name="Content"
    >
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[#44483b] text-[12px] w-full">
        <p className="leading-[16px]">Bevis</p>
      </div>
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#1a1c16] text-[16px] w-full">
        <p className="leading-[24px]">
          Ingen dokumentasjon fremvist for truckkontroll.
        </p>
      </div>
    </div>
  );
}

function StateLayer6() {
  return (
    <div
      className="content-stretch flex h-[32px] items-center justify-center relative shrink-0 w-full"
      data-name="State-layer"
    >
      <div
        className="relative shrink-0 size-[20px]"
        data-name="Icon"
      >
        <Edit
          style="Outlined"
          className="absolute inset-0 overflow-clip"
        />
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="box-border content-stretch flex gap-[16px] items-start px-0 py-[8px] relative shrink-0 w-full">
      <Content8 />
      <div
        className="content-stretch flex items-center justify-center relative shrink-0 size-[48px]"
        data-name="Icon button"
      >
        <div
          className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[100px] shrink-0 w-[28px]"
          data-name="Content"
        >
          <StateLayer6 />
        </div>
      </div>
    </div>
  );
}

function StateLayer7() {
  return (
    <div
      className="box-border content-stretch flex gap-[8px] items-center justify-center px-[24px] py-[16px] relative shrink-0"
      data-name="State-layer"
    >
      <div
        className="relative shrink-0 size-[24px]"
        data-name="Icon"
      >
        <div
          className="absolute inset-[16.667%]"
          data-name="icon"
        >
          <div
            className="absolute inset-0"
            style={
              {
                "--fill-0": "rgba(68, 72, 59, 1)",
              } as React.CSSProperties
            }
          >
            <svg
              className="block size-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 16 16"
            >
              <path
                d={svgPaths.p3fc73f80}
                fill="var(--fill-0, #44483B)"
                id="icon"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#44483b] text-[16px] text-nowrap tracking-[0.15px]">
        <p className="leading-[24px] whitespace-pre">
          Last opp bilde
        </p>
      </div>
    </div>
  );
}

function LeadingElement7() {
  return (
    <div
      className="content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0"
      data-name="Leading element"
    >
      <BuildingBlocksImageThumbnail className="content-stretch flex gap-[10px] items-start relative shrink-0" />
    </div>
  );
}

function Content9() {
  return (
    <div
      className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0"
      data-name="Content"
    >
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] tracking-[0.5px] w-full">
        <p className="leading-[24px]">(uploaded item name)</p>
      </div>
    </div>
  );
}

function TrailingElement() {
  return (
    <div
      className="content-stretch flex gap-[10px] items-center relative shrink-0"
      data-name="Trailing element"
    >
      <Delete className="relative shrink-0 size-[24px]" />
    </div>
  );
}

function StateLayer8() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full"
      data-name="state-layer"
    >
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative size-full">
          <LeadingElement7 />
          <Content9 />
          <TrailingElement />
        </div>
      </div>
    </div>
  );
}

function LeadingElement8() {
  return (
    <div
      className="content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0"
      data-name="Leading element"
    >
      <BuildingBlocksImageThumbnail className="content-stretch flex gap-[10px] items-start relative shrink-0" />
    </div>
  );
}

function Content10() {
  return (
    <div
      className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0"
      data-name="Content"
    >
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] tracking-[0.5px] w-full">
        <p className="leading-[24px]">(uploaded item name)</p>
      </div>
    </div>
  );
}

function TrailingElement1() {
  return (
    <div
      className="content-stretch flex gap-[10px] items-center relative shrink-0"
      data-name="Trailing element"
    >
      <Delete className="relative shrink-0 size-[24px]" />
    </div>
  );
}

function StateLayer9() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full"
      data-name="state-layer"
    >
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative size-full">
          <LeadingElement8 />
          <Content10 />
          <TrailingElement1 />
        </div>
      </div>
    </div>
  );
}

function Evidences() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
      data-name="Evidences"
    >
      <button
        className="box-border content-stretch cursor-pointer flex flex-col gap-[8px] items-start justify-center min-h-[64px] overflow-visible pb-0 pt-[8px] px-0 relative shrink-0 w-full"
        data-name="App User Input"
      >
        <Frame9 />
      </button>
      <div
        className="content-stretch flex items-center relative shrink-0 w-full"
        data-name="Button"
      >
        <div
          className="relative rounded-[100px] shrink-0"
          data-name="Content"
        >
          <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[inherit]">
            <StateLayer7 />
          </div>
          <div
            aria-hidden="true"
            className="absolute border border-[#c4c8b7] border-solid inset-0 pointer-events-none rounded-[100px]"
          />
        </div>
      </div>
      <div
        className="content-stretch flex flex-col h-[72px] items-center justify-center min-h-[56px] relative shrink-0 w-full"
        data-name="List item/List Item: 0 Density"
      >
        <BuildingBlocksStateLayer1Enabled className="absolute inset-0" />
        <StateLayer8 />
      </div>
      <div
        className="content-stretch flex flex-col h-[72px] items-center justify-center min-h-[56px] relative shrink-0 w-full"
        data-name="List item/List Item: 0 Density"
      >
        <BuildingBlocksStateLayer1Enabled className="absolute inset-0" />
        <StateLayer9 />
      </div>
      <div
        className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full"
        data-name="Horizontal/Full-width"
      >
        <div
          className="h-0 relative shrink-0 w-full"
          data-name="Divider"
        >
          <div
            className="absolute bottom-0 left-0 right-0 top-[-1px]"
            style={
              {
                "--stroke-0": "rgba(196, 200, 183, 1)",
              } as React.CSSProperties
            }
          >
            <svg
              className="block size-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 352 1"
            >
              <line
                id="Divider"
                stroke="var(--stroke-0, #C4C8B7)"
                x2="352"
                y1="0.5"
                y2="0.5"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function LeadingElement9() {
  return (
    <div
      className="content-stretch flex items-center justify-center relative shrink-0"
      data-name="Leading element"
    >
      <Add className="relative shrink-0 size-[24px]" />
    </div>
  );
}

function Content11() {
  return (
    <div
      className="basis-0 content-stretch flex flex-col font-['Manrope:Regular',sans-serif] font-normal grow items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0"
      data-name="Content"
    >
      <div className="flex flex-col justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] tracking-[0.5px] w-full">
        <p className="leading-[24px]">{`Krav `}</p>
      </div>
      <p className="leading-[20px] relative shrink-0 text-[#44483b] text-[14px] tracking-[0.25px] w-full">
        Påkrevd
      </p>
      <p className="h-0 leading-[20px] opacity-0 relative shrink-0 text-[#44483b] text-[14px] tracking-[0.25px] w-full">
        Ingen dokumentasjon fremvist for truckkontroll.
      </p>
    </div>
  );
}

function Frame10() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center p-[8px] relative w-full">
          <LeadingElement9 />
          <Content11 />
          <AvvikReportStatus className="content-stretch flex items-center justify-center relative shrink-0" />
        </div>
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="relative rounded-[12px] shrink-0 w-full">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-start px-[24px] py-[16px] relative w-full">
          <Frame3 />
          <div
            className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full"
            data-name="Horizontal/Full-width"
          >
            <div
              className="h-0 relative shrink-0 w-full"
              data-name="Divider"
            >
              <div
                className="absolute bottom-0 left-0 right-0 top-[-1px]"
                style={
                  {
                    "--stroke-0": "rgba(196, 200, 183, 1)",
                  } as React.CSSProperties
                }
              >
                <svg
                  className="block size-full"
                  fill="none"
                  preserveAspectRatio="none"
                  viewBox="0 0 352 1"
                >
                  <line
                    id="Divider"
                    stroke="var(--stroke-0, #C4C8B7)"
                    x2="352"
                    y1="0.5"
                    y2="0.5"
                  />
                </svg>
              </div>
            </div>
          </div>
          <button
            className="box-border content-stretch cursor-pointer flex flex-col gap-[8px] items-center justify-center min-h-[64px] overflow-visible pb-0 pt-[8px] px-0 relative shrink-0 w-full"
            data-name="App User Input"
          >
            <Frame5 />
          </button>
          <div
            className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full"
            data-name="Horizontal/Full-width"
          >
            <div
              className="h-0 relative shrink-0 w-full"
              data-name="Divider"
            >
              <div
                className="absolute bottom-0 left-0 right-0 top-[-1px]"
                style={
                  {
                    "--stroke-0": "rgba(196, 200, 183, 1)",
                  } as React.CSSProperties
                }
              >
                <svg
                  className="block size-full"
                  fill="none"
                  preserveAspectRatio="none"
                  viewBox="0 0 352 1"
                >
                  <line
                    id="Divider"
                    stroke="var(--stroke-0, #C4C8B7)"
                    x2="352"
                    y1="0.5"
                    y2="0.5"
                  />
                </svg>
              </div>
            </div>
          </div>
          <button
            className="box-border content-stretch cursor-pointer flex flex-col gap-[8px] items-center justify-center min-h-[64px] overflow-visible pb-0 pt-[8px] px-0 relative shrink-0 w-full"
            data-name="App User Input"
          >
            <Frame6 />
          </button>
          <div
            className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full"
            data-name="Horizontal/Full-width"
          >
            <div
              className="h-0 relative shrink-0 w-full"
              data-name="Divider"
            >
              <div
                className="absolute bottom-0 left-0 right-0 top-[-1px]"
                style={
                  {
                    "--stroke-0": "rgba(196, 200, 183, 1)",
                  } as React.CSSProperties
                }
              >
                <svg
                  className="block size-full"
                  fill="none"
                  preserveAspectRatio="none"
                  viewBox="0 0 352 1"
                >
                  <line
                    id="Divider"
                    stroke="var(--stroke-0, #C4C8B7)"
                    x2="352"
                    y1="0.5"
                    y2="0.5"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div
            className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full"
            data-name="Deviation tabs"
          >
            <div
              className="relative shrink-0 w-full"
              data-name="Revisor Deviation closed confirmation"
            >
              <div className="size-full">
                <div className="box-border content-stretch flex flex-col gap-[16px] items-start px-[8px] py-0 relative w-full">
                  <ClosingAvvik />
                </div>
              </div>
            </div>
          </div>
          <div
            className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full"
            data-name="Horizontal/Full-width"
          >
            <div
              className="h-0 relative shrink-0 w-full"
              data-name="Divider"
            >
              <div
                className="absolute bottom-0 left-0 right-0 top-[-1px]"
                style={
                  {
                    "--stroke-0": "rgba(196, 200, 183, 1)",
                  } as React.CSSProperties
                }
              >
                <svg
                  className="block size-full"
                  fill="none"
                  preserveAspectRatio="none"
                  viewBox="0 0 352 1"
                >
                  <line
                    id="Divider"
                    stroke="var(--stroke-0, #C4C8B7)"
                    x2="352"
                    y1="0.5"
                    y2="0.5"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div
            className="content-stretch flex flex-col items-start min-h-[80px] relative shrink-0 w-full"
            data-name="List item/List Item: -2 Density"
          >
            <BuildingBlocksStateLayer1Enabled className="absolute inset-0" />
            <StateLayer5 />
          </div>
          <div
            className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full"
            data-name="Horizontal/Full-width"
          >
            <div
              className="h-0 relative shrink-0 w-full"
              data-name="Divider"
            >
              <div
                className="absolute bottom-0 left-0 right-0 top-[-1px]"
                style={
                  {
                    "--stroke-0": "rgba(196, 200, 183, 1)",
                  } as React.CSSProperties
                }
              >
                <svg
                  className="block size-full"
                  fill="none"
                  preserveAspectRatio="none"
                  viewBox="0 0 352 1"
                >
                  <line
                    id="Divider"
                    stroke="var(--stroke-0, #C4C8B7)"
                    x2="352"
                    y1="0.5"
                    y2="0.5"
                  />
                </svg>
              </div>
            </div>
          </div>
          <button
            className="box-border content-stretch cursor-pointer flex flex-col gap-[8px] items-center justify-center min-h-[64px] overflow-visible pb-0 pt-[8px] px-0 relative shrink-0 w-full"
            data-name="App User Input"
          >
            <Frame8 />
          </button>
          <div
            className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full"
            data-name="Horizontal/Inset"
          >
            <div
              className="h-0 relative shrink-0 w-full"
              data-name="Divider"
            >
              <div
                className="absolute bottom-0 left-0 right-0 top-[-1px]"
                style={
                  {
                    "--stroke-0": "rgba(196, 200, 183, 1)",
                  } as React.CSSProperties
                }
              >
                <svg
                  className="block size-full"
                  fill="none"
                  preserveAspectRatio="none"
                  viewBox="0 0 352 1"
                >
                  <line
                    id="Divider"
                    stroke="var(--stroke-0, #C4C8B7)"
                    x2="352"
                    y1="0.5"
                    y2="0.5"
                  />
                </svg>
              </div>
            </div>
          </div>
          <Evidences />
          <button
            className="box-border content-stretch cursor-pointer flex flex-col gap-[8px] items-center justify-center min-h-[64px] overflow-visible pb-0 pt-[8px] px-0 relative shrink-0 w-full"
            data-name="App User Input"
          >
            <Frame10 />
          </button>
        </div>
      </div>
    </div>
  );
}

export default function DeviationFollowUpRevisjor() {
  return (
    <div
      className="bg-white content-stretch flex flex-col gap-[16px] items-start overflow-clip relative rounded-[12px] size-full"
      data-name="Deviation Follow-up Revisjor"
    >
      <Frame11 />
    </div>
  );
}