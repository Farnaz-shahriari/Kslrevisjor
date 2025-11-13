import svgPaths from "./svg-y4rtyra0fb";
import { imgLogoMain, imgGroup, imgGroup1, imgVector, imgVector1, imgVector2, imgVector3, imgMainLogo, imgLogoMain1, imgLogo, imgGroup2, imgGroup3, imgVector4, imgVector5, imgVector6, imgVector7, imgLogo1, imgLogo2, imgGroup4, imgGroup5 } from "./svg-8wju2";
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
              <img alt="" className="block max-w-none size-full" src={imgVector} />
            </div>
            <div className="absolute inset-[12.8%_33.99%_63.46%_41.37%]" data-name="Vector">
              <img alt="" className="block max-w-none size-full" src={imgVector1} />
            </div>
            <div className="absolute inset-[66.18%_75.07%_6.34%_7.08%]" data-name="Vector">
              <img alt="" className="block max-w-none size-full" src={imgVector2} />
            </div>
            <div className="absolute inset-[66.18%_59.48%_6.34%_31.47%]" data-name="Vector">
              <img alt="" className="block max-w-none size-full" src={imgVector3} />
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
                <img alt="" className="block max-w-none size-full" src={imgVector4} />
              </div>
              <div className="absolute inset-[12.55%_33.88%_63.56%_41.31%]" data-name="Vector">
                <img alt="" className="block max-w-none size-full" src={imgVector5} />
              </div>
              <div className="absolute inset-[66.28%_75.24%_6.07%_6.77%]" data-name="Vector">
                <img alt="" className="block max-w-none size-full" src={imgVector6} />
              </div>
              <div className="absolute inset-[66.28%_59.55%_6.07%_31.33%]" data-name="Vector">
                <img alt="" className="block max-w-none size-full" src={imgVector7} />
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

export default function IconButton() {
  return <Logo background="Default" size="Default" className="box-border content-stretch flex flex-col gap-[10px] items-start justify-center px-0 py-[16px] relative size-full" />;
}