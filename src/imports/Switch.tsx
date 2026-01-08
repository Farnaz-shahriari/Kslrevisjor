import { img, img1, img2 } from "./svg-aygs1";
type SwitchProps = {
  className?: string;
  selected?: boolean;
  state?: "Enabled" | "Hovered" | "Focused" | "Pressed" | "Disabled";
  icon?: boolean;
};

/**
 * @figmaAssetKey b9d30bc42a9f8fb7268b192cab1b8789121b1e9d
 */
function Switch({ className, selected = true, state = "Enabled", icon = false }: SwitchProps) {
  if (selected && state === "Hovered" && !icon) {
    return (
      <div className={className} data-name="Selected=True, State=Hovered, Icon=False">
        <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Handle">
          <div className="absolute box-border content-stretch cursor-pointer flex items-center justify-center p-[4px] right-[-12px] top-1/2 translate-y-[-50%]" data-name="Target">
            <div className="bg-[rgba(77,102,43,0.08)] box-border content-stretch flex flex-col gap-[8px] items-center justify-center p-[8px] relative rounded-[100px] shrink-0" data-name="State-layer">
              <div className="bg-[#eff1e7] box-border content-stretch flex items-center justify-center overflow-clip p-[11px] relative rounded-[24px] shrink-0" data-name="Handle shape">
                <div className="rounded-[23px] shrink-0 size-[2px]" data-name="Container" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (selected && state === "Focused" && !icon) {
    return (
      <div className={className} data-name="Selected=True, State=Focused, Icon=False">
        <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Handle">
          <div className="absolute box-border content-stretch flex items-center justify-center p-[4px] right-[-12px] top-1/2 translate-y-[-50%]" data-name="Target">
            <div className="bg-[rgba(77,102,43,0.12)] box-border content-stretch flex flex-col gap-[8px] items-center justify-center p-[8px] relative rounded-[100px] shrink-0" data-name="State-layer">
              <div className="bg-[#eff1e7] box-border content-stretch flex items-center justify-center overflow-clip p-[11px] relative rounded-[24px] shrink-0" data-name="Handle shape">
                <div className="rounded-[23px] shrink-0 size-[2px]" data-name="Container" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (selected && state === "Pressed" && !icon) {
    return (
      <div className={className} data-name="Selected=True, State=Pressed, Icon=False">
        <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Handle">
          <div className="absolute box-border content-stretch cursor-pointer flex items-center justify-center p-[4px] right-[-10px] top-1/2 translate-y-[-50%]" data-name="Target">
            <div className="bg-[rgba(77,102,43,0.12)] box-border content-stretch flex flex-col gap-[8px] items-center justify-center p-[6px] relative rounded-[100px] shrink-0" data-name="State-layer">
              <div className="bg-[#eff1e7] box-border content-stretch flex items-center justify-center overflow-clip p-[13px] relative rounded-[24px] shrink-0" data-name="Handle shape">
                <div className="rounded-[23px] shrink-0 size-[2px]" data-name="Container" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (selected && state === "Disabled" && !icon) {
    return (
      <div className={className} data-name="Selected=True, State=Disabled, Icon=False">
        <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Handle">
          <div className="absolute box-border content-stretch flex items-center justify-center p-[4px] right-[-12px] top-1/2 translate-y-[-50%]" data-name="Target">
            <div className="box-border content-stretch flex flex-col gap-[8px] items-center justify-center p-[8px] relative rounded-[100px] shrink-0" data-name="State-layer">
              <div className="bg-white box-border content-stretch flex items-center justify-center overflow-clip p-[11px] relative rounded-[24px] shrink-0" data-name="Handle shape">
                <div className="rounded-[23px] shrink-0 size-[2px]" data-name="Container" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (selected && state === "Enabled" && icon) {
    return (
      <div className={className} data-name="Selected=True, State=Enabled, Icon=True">
        <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Handle">
          <div className="absolute box-border content-stretch flex items-center justify-center p-[4px] right-[-12px] top-1/2 translate-y-[-50%]" data-name="Target">
            <div className="box-border content-stretch flex flex-col gap-[8px] items-center justify-center p-[8px] relative rounded-[100px] shrink-0" data-name="State-layer">
              <div className="bg-white box-border content-stretch flex items-center justify-center overflow-clip p-[11px] relative rounded-[24px] shrink-0" data-name="Handle shape">
                <div className="rounded-[23px] shrink-0 size-[2px]" data-name="Container" />
                <Icon />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (selected && state === "Hovered" && icon) {
    return (
      <div className={className} data-name="Selected=True, State=Hovered, Icon=True">
        <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Handle">
          <div className="absolute box-border content-stretch cursor-pointer flex items-center justify-center p-[4px] right-[-12px] top-1/2 translate-y-[-50%]" data-name="Target">
            <div className="bg-[rgba(77,102,43,0.08)] box-border content-stretch flex flex-col gap-[8px] items-center justify-center p-[8px] relative rounded-[100px] shrink-0" data-name="State-layer">
              <div className="bg-[#eff1e7] box-border content-stretch flex items-center justify-center overflow-clip p-[11px] relative rounded-[24px] shrink-0" data-name="Handle shape">
                <div className="rounded-[23px] shrink-0 size-[2px]" data-name="Container" />
                <Icon1 />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (selected && state === "Focused" && icon) {
    return (
      <div className={className} data-name="Selected=True, State=Focused, Icon=True">
        <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Handle">
          <div className="absolute box-border content-stretch flex items-center justify-center p-[4px] right-[-12px] top-1/2 translate-y-[-50%]" data-name="Target">
            <div className="bg-[rgba(77,102,43,0.12)] box-border content-stretch flex flex-col gap-[8px] items-center justify-center p-[8px] relative rounded-[100px] shrink-0" data-name="State-layer">
              <div className="bg-[#eff1e7] box-border content-stretch flex items-center justify-center overflow-clip p-[11px] relative rounded-[24px] shrink-0" data-name="Handle shape">
                <div className="rounded-[23px] shrink-0 size-[2px]" data-name="Container" />
                <Icon2 />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (selected && state === "Pressed" && icon) {
    return (
      <div className={className} data-name="Selected=True, State=Pressed, Icon=True">
        <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Handle">
          <div className="absolute box-border content-stretch cursor-pointer flex items-center justify-center p-[4px] right-[-10px] top-1/2 translate-y-[-50%]" data-name="Target">
            <div className="bg-[rgba(77,102,43,0.12)] box-border content-stretch flex flex-col gap-[8px] items-center justify-center p-[6px] relative rounded-[100px] shrink-0" data-name="State-layer">
              <div className="bg-[#eff1e7] box-border content-stretch flex items-center justify-center overflow-clip p-[13px] relative rounded-[24px] shrink-0" data-name="Handle shape">
                <div className="rounded-[23px] shrink-0 size-[2px]" data-name="Container" />
                <Icon3 />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (selected && state === "Disabled" && icon) {
    return (
      <div className={className} data-name="Selected=True, State=Disabled, Icon=True">
        <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Handle">
          <div className="absolute box-border content-stretch flex items-center justify-center p-[4px] right-[-12px] top-1/2 translate-y-[-50%]" data-name="Target">
            <div className="box-border content-stretch flex flex-col gap-[8px] items-center justify-center p-[8px] relative rounded-[100px] shrink-0" data-name="State-layer">
              <div className="bg-white box-border content-stretch flex items-center justify-center overflow-clip p-[11px] relative rounded-[24px] shrink-0" data-name="Handle shape">
                <div className="rounded-[23px] shrink-0 size-[2px]" data-name="Container" />
                <Icon4 />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (!selected && state === "Enabled" && !icon) {
    return (
      <div className={className} data-name="Selected=False, State=Enabled, Icon=False">
        <div aria-hidden="true" className="absolute border-2 border-[#74796a] border-solid inset-0 pointer-events-none rounded-[100px]" />
        <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Handle">
          <div className="absolute box-border content-stretch flex items-center justify-center left-[-16px] p-[4px] top-1/2 translate-y-[-50%]" data-name="Target">
            <div className="box-border content-stretch flex flex-col gap-[8px] items-center justify-center p-[12px] relative rounded-[100px] shrink-0" data-name="State-layer">
              <div className="bg-[#74796a] box-border content-stretch flex items-center justify-center overflow-clip p-[7px] relative rounded-[24px] shrink-0" data-name="Handle shape">
                <div className="rounded-[100px] shrink-0 size-[2px]" data-name="Container" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (!selected && state === "Hovered" && !icon) {
    return (
      <div className={className} data-name="Selected=False, State=Hovered, Icon=False">
        <div aria-hidden="true" className="absolute border-2 border-[#74796a] border-solid inset-0 pointer-events-none rounded-[100px]" />
        <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Handle">
          <div className="absolute box-border content-stretch cursor-pointer flex items-center justify-center left-[-16px] p-[4px] top-1/2 translate-y-[-50%]" data-name="Target">
            <div className="bg-[rgba(26,28,22,0.08)] box-border content-stretch flex flex-col gap-[8px] items-center justify-center p-[12px] relative rounded-[100px] shrink-0" data-name="State-layer">
              <div className="bg-[#44483b] box-border content-stretch flex items-center justify-center overflow-clip p-[7px] relative rounded-[24px] shrink-0" data-name="Handle shape">
                <div className="rounded-[100px] shrink-0 size-[2px]" data-name="Container" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (!selected && state === "Focused" && !icon) {
    return (
      <div className={className} data-name="Selected=False, State=Focused, Icon=False">
        <div aria-hidden="true" className="absolute border-2 border-[#74796a] border-solid inset-0 pointer-events-none rounded-[100px]" />
        <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Handle">
          <div className="absolute box-border content-stretch flex items-center justify-center left-[-16px] p-[4px] top-1/2 translate-y-[-50%]" data-name="Target">
            <div className="bg-[rgba(26,28,22,0.12)] box-border content-stretch flex flex-col gap-[8px] items-center justify-center p-[12px] relative rounded-[100px] shrink-0" data-name="State-layer">
              <div className="bg-[#44483b] box-border content-stretch flex items-center justify-center overflow-clip p-[7px] relative rounded-[24px] shrink-0" data-name="Handle shape">
                <div className="rounded-[100px] shrink-0 size-[2px]" data-name="Container" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (!selected && state === "Pressed" && !icon) {
    return (
      <div className={className} data-name="Selected=False, State=Pressed, Icon=False">
        <div aria-hidden="true" className="absolute border-2 border-[#74796a] border-solid inset-0 pointer-events-none rounded-[100px]" />
        <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Handle">
          <div className="absolute box-border content-stretch flex items-center justify-center left-[-10px] p-[4px] top-1/2 translate-y-[-50%]" data-name="Target">
            <div className="bg-[rgba(26,28,22,0.12)] box-border content-stretch flex flex-col gap-[8px] items-center justify-center p-[6px] relative rounded-[100px] shrink-0" data-name="State-layer">
              <div className="bg-[#44483b] box-border content-stretch flex items-center justify-center overflow-clip p-[13px] relative rounded-[24px] shrink-0" data-name="Handle shape">
                <div className="rounded-[100px] shrink-0 size-[2px]" data-name="Container" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (!selected && state === "Disabled" && !icon) {
    return (
      <div className={className} data-name="Selected=False, State=Disabled, Icon=False">
        <div aria-hidden="true" className="absolute border-2 border-[rgba(26,28,22,0.12)] border-solid inset-0 pointer-events-none rounded-[100px]" />
        <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Handle">
          <div className="absolute box-border content-stretch flex items-center justify-center left-[-16px] p-[4px] top-1/2 translate-y-[-50%]" data-name="Target">
            <div className="box-border content-stretch flex flex-col gap-[8px] items-center justify-center p-[12px] relative rounded-[100px] shrink-0" data-name="State-layer">
              <div className="bg-[#1a1c16] box-border content-stretch flex items-center justify-center opacity-[0.38] overflow-clip p-[7px] relative rounded-[24px] shrink-0" data-name="Handle shape">
                <div className="opacity-[0.38] rounded-[100px] shrink-0 size-[2px]" data-name="Container" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (!selected && state === "Enabled" && icon) {
    return (
      <div className={className} data-name="Selected=False, State=Enabled, Icon=True">
        <div aria-hidden="true" className="absolute border-2 border-[#74796a] border-solid inset-0 pointer-events-none rounded-[100px]" />
        <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Handle">
          <div className="absolute box-border content-stretch flex items-center justify-center left-[-12px] p-[4px] top-1/2 translate-y-[-50%]" data-name="Target">
            <div className="box-border content-stretch flex flex-col gap-[8px] items-center justify-center p-[8px] relative rounded-[100px] shrink-0" data-name="State-layer">
              <div className="bg-[#74796a] box-border content-stretch flex items-center justify-center overflow-clip p-[11px] relative rounded-[24px] shrink-0" data-name="Handle shape">
                <div className="rounded-[100px] shrink-0 size-[2px]" data-name="Container" />
                <Icon5 />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (!selected && state === "Hovered" && icon) {
    return (
      <div className={className} data-name="Selected=False, State=Hovered, Icon=True">
        <div aria-hidden="true" className="absolute border-2 border-[#74796a] border-solid inset-0 pointer-events-none rounded-[100px]" />
        <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Handle">
          <div className="absolute box-border content-stretch cursor-pointer flex items-center justify-center left-[-12px] p-[4px] top-1/2 translate-y-[-50%]" data-name="Target">
            <div className="bg-[rgba(26,28,22,0.08)] box-border content-stretch flex flex-col gap-[8px] items-center justify-center p-[8px] relative rounded-[100px] shrink-0" data-name="State-layer">
              <div className="bg-[#44483b] box-border content-stretch flex items-center justify-center overflow-clip p-[11px] relative rounded-[24px] shrink-0" data-name="Handle shape">
                <div className="rounded-[100px] shrink-0 size-[2px]" data-name="Container" />
                <Icon6 />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (!selected && state === "Focused" && icon) {
    return (
      <div className={className} data-name="Selected=False, State=Focused, Icon=True">
        <div aria-hidden="true" className="absolute border-2 border-[#74796a] border-solid inset-0 pointer-events-none rounded-[100px]" />
        <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Handle">
          <div className="absolute box-border content-stretch flex items-center justify-center left-[-12px] p-[4px] top-1/2 translate-y-[-50%]" data-name="Target">
            <div className="bg-[rgba(26,28,22,0.12)] box-border content-stretch flex flex-col gap-[8px] items-center justify-center p-[8px] relative rounded-[100px] shrink-0" data-name="State-layer">
              <div className="bg-[#44483b] box-border content-stretch flex items-center justify-center overflow-clip p-[11px] relative rounded-[24px] shrink-0" data-name="Handle shape">
                <div className="rounded-[100px] shrink-0 size-[2px]" data-name="Container" />
                <Icon7 />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (!selected && state === "Pressed" && icon) {
    return (
      <div className={className} data-name="Selected=False, State=Pressed, Icon=True">
        <div aria-hidden="true" className="absolute border-2 border-[#74796a] border-solid inset-0 pointer-events-none rounded-[100px]" />
        <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Handle">
          <div className="absolute box-border content-stretch cursor-pointer flex items-center justify-center left-[-10px] p-[4px] top-1/2 translate-y-[-50%]" data-name="Target">
            <div className="bg-[rgba(26,28,22,0.12)] box-border content-stretch flex flex-col gap-[8px] items-center justify-center p-[6px] relative rounded-[100px] shrink-0" data-name="State-layer">
              <div className="bg-[#44483b] box-border content-stretch flex items-center justify-center overflow-clip p-[13px] relative rounded-[24px] shrink-0" data-name="Handle shape">
                <div className="rounded-[100px] shrink-0 size-[2px]" data-name="Container" />
                <Icon8 />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (!selected && state === "Disabled" && icon) {
    return (
      <div className={className} data-name="Selected=False, State=Disabled, Icon=True">
        <div aria-hidden="true" className="absolute border-2 border-[rgba(26,28,22,0.12)] border-solid inset-0 pointer-events-none rounded-[100px]" />
        <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Handle">
          <div className="absolute box-border content-stretch flex items-center justify-center left-[-12px] p-[4px] top-1/2 translate-y-[-50%]" data-name="Target">
            <div className="box-border content-stretch flex flex-col gap-[8px] items-center justify-center p-[8px] relative rounded-[100px] shrink-0" data-name="State-layer">
              <div className="bg-[#1a1c16] box-border content-stretch flex items-center justify-center opacity-[0.38] overflow-clip p-[11px] relative rounded-[24px] shrink-0" data-name="Handle shape">
                <div className="opacity-[0.38] rounded-[100px] shrink-0 size-[2px]" data-name="Container" />
                <Icon9 />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className={className} data-name="Selected=True, State=Enabled, Icon=False">
      <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Handle">
        <div className="absolute box-border content-stretch flex items-center justify-center p-[4px] right-[-12px] top-1/2 translate-y-[-50%]" data-name="Target">
          <div className="box-border content-stretch flex flex-col gap-[8px] items-center justify-center p-[8px] relative rounded-[100px] shrink-0" data-name="State-layer">
            <div className="bg-white box-border content-stretch flex items-center justify-center overflow-clip p-[11px] relative rounded-[24px] shrink-0" data-name="Handle shape">
              <div className="rounded-[23px] shrink-0 size-[2px]" data-name="Container" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Switch1() {
  return <Switch selected={false} icon={true} className="bg-[#e3e3d9] relative rounded-[100px] size-full" />;
}