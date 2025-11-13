import { img, img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, imgRipple, imgRipple1, imgIcon, imgIcon1, img13, img14, img15, img16, imgDivider, img17, img18 } from "./svg-7d0k5";
type IconTypeProps = {
  className?: string;
  property1?: "Risikovurdering" | "Avvik" | "oppgave" | "Maskiner & Utstyr" | "Bygninger" | "Elkontroll" | "Vernerunde" | "Opplæring" | "Arbeidsinstruks" | "Document" | "date";
};

/**
 * @figmaAssetKey 4b9e8ab71354dfe65a934dbd2dfa2bf15d437126
 */
function IconType({ className, property1 = "Risikovurdering" }: IconTypeProps) {
  if (property1 === "Avvik") {
    return (
      <div className={className} data-name="Property 1=Avvik">
        <Report_problem />
      </div>
    );
  }
  if (property1 === "oppgave") {
    return (
      <div className={className} data-name="Property 1=oppgave">
        <Inventory />
      </div>
    );
  }
  if (property1 === "Maskiner & Utstyr") {
    return (
      <div className={className} data-name="Property 1=Maskiner & Utstyr">
        <Router />
      </div>
    );
  }
  if (property1 === "Bygninger") {
    return (
      <div className={className} data-name="Property 1=Bygninger">
        <Other_houses />
      </div>
    );
  }
  if (property1 === "Elkontroll") {
    return (
      <div className={className} data-name="Property 1=Elkontroll">
        <Rule />
      </div>
    );
  }
  if (property1 === "Vernerunde") {
    return (
      <div className={className} data-name="Property 1=Vernerunde">
        <Fact_check />
      </div>
    );
  }
  if (property1 === "Opplæring") {
    return (
      <div className={className} data-name="Property 1=Opplæring">
        <Chrome_reader_mode />
      </div>
    );
  }
  if (property1 === "Arbeidsinstruks") {
    return (
      <div className={className} data-name="Property 1=Arbeidsinstruks">
        <Schema />
      </div>
    );
  }
  if (property1 === "Document") {
    return (
      <div className={className} data-name="Property 1=Document">
        <Snippet_folder />
      </div>
    );
  }
  if (property1 === "date") {
    return (
      <div className={className} data-name="Property 1=date">
        <Pending_actions />
      </div>
    );
  }
  return (
    <div className={className} data-name="Property 1=Risikovurdering">
      <Safety_check />
    </div>
  );
}
type IconTxProps = {
  className?: string;
  showBadges?: boolean;
  property1?: "Risikovurdering" | "Oppgaver" | "Avvik" | "Maskiner & Utstyr" | "Bygninger" | "Elkontroll" | "Variant7" | "Opplæring" | "Arbeidsinstruks" | "Document" | "deadline";
};

/**
 * @figmaAssetKey 7978cdc92b897ee19e2ef6ee85a1a70f48a5247a
 */
function IconTx({ className, showBadges = false, property1 = "Risikovurdering" }: IconTxProps) {
  if (property1 === "Bygninger") {
    return (
      <div className={className} data-name="Property 1=Bygninger">
        <IconType property1="Bygninger" className="relative shrink-0 size-[18px]" />
        <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#44483b] text-[12px] text-center text-nowrap tracking-[0.5px]">
          <p className="leading-[16px] whitespace-pre">Bygninger</p>
        </div>
        {showBadges && (
          <div className="bg-[#dae2ff] box-border content-stretch flex items-center justify-center max-w-[34px] min-w-[16px] overflow-clip px-[4px] py-0 relative rounded-[100px] shrink-0" data-name="Badges">
            <div className="basis-0 flex flex-col font-['Manrope:Medium',sans-serif] font-medium grow justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[#174295] text-[11px] text-center tracking-[0.5px]">
              <p className="leading-[16px]">3</p>
            </div>
          </div>
        )}
      </div>
    );
  }
  if (property1 === "Elkontroll") {
    return (
      <div className={className} data-name="Property 1=Elkontroll">
        <IconType property1="Elkontroll" className="relative shrink-0 size-[18px]" />
        <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#44483b] text-[12px] text-center text-nowrap tracking-[0.5px]">
          <p className="leading-[16px] whitespace-pre">Elkontroll</p>
        </div>
        {showBadges && (
          <div className="bg-[#dae2ff] box-border content-stretch flex items-center justify-center max-w-[34px] min-w-[16px] overflow-clip px-[4px] py-0 relative rounded-[100px] shrink-0" data-name="Badges">
            <div className="basis-0 flex flex-col font-['Manrope:Medium',sans-serif] font-medium grow justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[#174295] text-[11px] text-center tracking-[0.5px]">
              <p className="leading-[16px]">3</p>
            </div>
          </div>
        )}
      </div>
    );
  }
  if (property1 === "Variant7") {
    return (
      <div className={className} data-name="Property 1=Variant7">
        <IconType property1="Vernerunde" className="relative shrink-0 size-[18px]" />
        <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#44483b] text-[12px] text-center text-nowrap tracking-[0.5px]">
          <p className="leading-[16px] whitespace-pre">Vernerunde</p>
        </div>
        {showBadges && (
          <div className="bg-[#dae2ff] box-border content-stretch flex items-center justify-center max-w-[34px] min-w-[16px] overflow-clip px-[4px] py-0 relative rounded-[100px] shrink-0" data-name="Badges">
            <div className="basis-0 flex flex-col font-['Manrope:Medium',sans-serif] font-medium grow justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[#174295] text-[11px] text-center tracking-[0.5px]">
              <p className="leading-[16px]">3</p>
            </div>
          </div>
        )}
      </div>
    );
  }
  if (property1 === "Opplæring") {
    return (
      <div className={className} data-name="Property 1=Opplæring">
        <IconType property1="Opplæring" className="relative shrink-0 size-[18px]" />
        <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#44483b] text-[12px] text-center text-nowrap tracking-[0.5px]">
          <p className="leading-[16px] whitespace-pre">Opplæring</p>
        </div>
        {showBadges && (
          <div className="bg-[#dae2ff] box-border content-stretch flex items-center justify-center max-w-[34px] min-w-[16px] overflow-clip px-[4px] py-0 relative rounded-[100px] shrink-0" data-name="Badges">
            <div className="basis-0 flex flex-col font-['Manrope:Medium',sans-serif] font-medium grow justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[#174295] text-[11px] text-center tracking-[0.5px]">
              <p className="leading-[16px]">3</p>
            </div>
          </div>
        )}
      </div>
    );
  }
  if (property1 === "Document") {
    return (
      <div className={className} data-name="Property 1=Document">
        <IconType property1="Document" className="relative shrink-0 size-[18px]" />
        <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#44483b] text-[12px] text-center text-nowrap tracking-[0.5px]">
          <p className="leading-[16px] whitespace-pre">Dokument</p>
        </div>
        {showBadges && (
          <div className="bg-[#dae2ff] box-border content-stretch flex items-center justify-center max-w-[34px] min-w-[16px] overflow-clip px-[4px] py-0 relative rounded-[100px] shrink-0" data-name="Badges">
            <div className="basis-0 flex flex-col font-['Manrope:Medium',sans-serif] font-medium grow justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[#174295] text-[11px] text-center tracking-[0.5px]">
              <p className="leading-[16px]">3</p>
            </div>
          </div>
        )}
      </div>
    );
  }
  if (property1 === "deadline") {
    return (
      <div className={className} data-name="Property 1=deadline">
        <IconType property1="date" className="relative shrink-0 size-[18px]" />
        <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#ba1a1a] text-[12px] text-center text-nowrap tracking-[0.5px]">
          <p className="leading-[16px] whitespace-pre">6 Mar 2025</p>
        </div>
        {showBadges && (
          <div className="bg-[#ba1a1a] box-border content-stretch flex items-center justify-center max-w-[34px] min-w-[16px] overflow-clip px-[4px] py-0 relative rounded-[100px] shrink-0" data-name="Badges">
            <div className="basis-0 flex flex-col font-['Manrope:Medium',sans-serif] font-medium grow justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[11px] text-center text-white tracking-[0.5px]">
              <p className="leading-[16px]">3</p>
            </div>
          </div>
        )}
      </div>
    );
  }
  if (property1 === "Arbeidsinstruks") {
    return (
      <div className={className} data-name="Property 1=Arbeidsinstruks">
        <IconType property1="Arbeidsinstruks" className="relative shrink-0 size-[18px]" />
        <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#44483b] text-[12px] text-center text-nowrap tracking-[0.5px]">
          <p className="leading-[16px] whitespace-pre">Arbeidsinstruks</p>
        </div>
        {showBadges && (
          <div className="bg-[#dae2ff] box-border content-stretch flex items-center justify-center max-w-[34px] min-w-[16px] overflow-clip px-[4px] py-0 relative rounded-[100px] shrink-0" data-name="Badges">
            <div className="basis-0 flex flex-col font-['Manrope:Medium',sans-serif] font-medium grow justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[#174295] text-[11px] text-center tracking-[0.5px]">
              <p className="leading-[16px]">3</p>
            </div>
          </div>
        )}
      </div>
    );
  }
  if (property1 === "Oppgaver") {
    return (
      <div className={className} data-name="Property 1=Oppgaver">
        <IconType property1="oppgave" className="relative shrink-0 size-[18px]" />
        <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#44483b] text-[12px] text-center text-nowrap tracking-[0.5px]">
          <p className="leading-[16px] whitespace-pre">Oppgaver</p>
        </div>
        {showBadges && (
          <div className="bg-[#dae2ff] box-border content-stretch flex items-center justify-center max-w-[34px] min-w-[16px] overflow-clip px-[4px] py-0 relative rounded-[100px] shrink-0" data-name="Badges">
            <div className="basis-0 flex flex-col font-['Manrope:Medium',sans-serif] font-medium grow justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[#174295] text-[11px] text-center tracking-[0.5px]">
              <p className="leading-[16px]">3</p>
            </div>
          </div>
        )}
      </div>
    );
  }
  if (property1 === "Maskiner & Utstyr") {
    return (
      <div className={className} data-name="Property 1=Maskiner & Utstyr">
        <IconType property1="Maskiner & Utstyr" className="relative shrink-0 size-[18px]" />
        <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#44483b] text-[12px] text-center text-nowrap tracking-[0.5px]">
          <p className="leading-[16px] whitespace-pre">Maskiner & Utstyr</p>
        </div>
        {showBadges && (
          <div className="bg-[#dae2ff] box-border content-stretch flex items-center justify-center max-w-[34px] min-w-[16px] overflow-clip px-[4px] py-0 relative rounded-[100px] shrink-0" data-name="Badges">
            <div className="basis-0 flex flex-col font-['Manrope:Medium',sans-serif] font-medium grow justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[#174295] text-[11px] text-center tracking-[0.5px]">
              <p className="leading-[16px]">3</p>
            </div>
          </div>
        )}
      </div>
    );
  }
  if (property1 === "Avvik") {
    return (
      <div className={className} data-name="Property 1=Avvik">
        <IconType property1="Avvik" className="relative shrink-0 size-[18px]" />
        <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#410002] text-[12px] text-center text-nowrap tracking-[0.5px]">
          <p className="leading-[16px] whitespace-pre">Avvik</p>
        </div>
        {showBadges && (
          <div className="bg-[#ba1a1a] box-border content-stretch flex items-center justify-center max-w-[34px] min-w-[16px] overflow-clip px-[4px] py-0 relative rounded-[100px] shrink-0" data-name="Badges">
            <div className="basis-0 flex flex-col font-['Manrope:Medium',sans-serif] font-medium grow justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[11px] text-center text-white tracking-[0.5px]">
              <p className="leading-[16px]">1</p>
            </div>
          </div>
        )}
      </div>
    );
  }
  return (
    <div className={className} data-name="Property 1=Risikovurdering">
      <IconType className="relative shrink-0 size-[18px]" />
      <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#44483b] text-[12px] text-center text-nowrap tracking-[0.5px]">
        <p className="leading-[16px] whitespace-pre">Risikovurdering</p>
      </div>
      {showBadges && (
        <div className="bg-[#dae2ff] box-border content-stretch flex items-center justify-center max-w-[34px] min-w-[16px] overflow-clip px-[4px] py-0 relative rounded-[100px] shrink-0" data-name="Badges">
          <div className="basis-0 flex flex-col font-['Manrope:Medium',sans-serif] font-medium grow justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[#174295] text-[11px] text-center tracking-[0.5px]">
            <p className="leading-[16px]">3</p>
          </div>
        </div>
      )}
    </div>
  );
}
type StatusChipsProps = {
  className?: string;
  status?: "Planlagt" | "Pågår" | "Fullført" | "Closed" | "open";
  type?: "Oppgave" | "Avvik";
};

/**
 * @figmaAssetKey 4a18017d7bfac5fa24ea4c7e553492d0aaccc0f2
 */
function StatusChips({ className, status = "Planlagt", type = "Oppgave" }: StatusChipsProps) {
  if (status === "open" && type === "Avvik") {
    return (
      <div className={className} data-name="status=open, Type=Avvik">
        <Statuschips />
      </div>
    );
  }
  if (status === "Pågår" && type === "Oppgave") {
    return (
      <div className={className} data-name="status=Pågår, Type=Oppgave">
        <Statuschips1 />
      </div>
    );
  }
  if (status === "Fullført" && type === "Oppgave") {
    return (
      <div className={className} data-name="status=Fullført, Type=Oppgave">
        <Statuschips2 />
      </div>
    );
  }
  if (status === "Closed" && type === "Avvik") {
    return (
      <div className={className} data-name="status=Closed, Type=Avvik">
        <Statuschips3 />
      </div>
    );
  }
  return (
    <div className={className} data-name="status=Planlagt, Type=Oppgave">
      <Statuschips4 />
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
 * @figmaAssetKey ac90bcbff46494e64294bf741157b73c56bc412e
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
 * @figmaAssetKey 735fb85be76558412a27dc7d148e19ac36ec205c
 */
function Stars({ className }: { className?: string }) {
  return (
    <div className={className} data-name="stars">
      <div className="absolute inset-[8.333%]" data-name="icon">
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(68, 72, 59, 1)" } as React.CSSProperties}>
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
 * @figmaAssetKey ffe8dd901bf8c718be83b85c1ecaf11c6bcdadbf
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
 * @figmaAssetKey 5345a50996f643634a37cc011c5535783a64d458
 */
function BuildingBlocksStateLayer1Enabled({ className }: { className?: string }) {
  return <div className={className} data-name="Building Blocks/state-layer/1. enabled" />;
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
function Frame9() {
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
      <Trailingicon5 />
      <Trailingicon6 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
      <Frame9 />
      <TrailingIcon />
    </div>
  );
}

function Frame2() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start justify-center min-h-px min-w-px relative shrink-0">
      <Frame />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
      <Frame2 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0 w-full">
      <Frame3 />
    </div>
  );
}

/**
 * @figmaAssetKey b050d69c96f13dcc7f0aaa7d565caf76713b1d0e
 */
function StateLayer3() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-center justify-center pl-[8px] pr-[12px] py-[6px] relative shrink-0" data-name="state-layer">
      <Icon18 />
      <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[14px] text-center text-nowrap text-white tracking-[0.1px]">
        <p className="leading-[20px] whitespace-pre">Dokumentasjon kreves</p>
      </div>
    </div>
  );
}

function QuestionInfoLables() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="question info lables">
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
          <ListitemListItem4Density />
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
          <Tab35 />
          <Tab36 />
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
      <Icon19 />
      <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#4a671e] text-[14px] text-nowrap tracking-[0.1px]">
        <p className="leading-[20px] whitespace-pre">Les mer</p>
      </div>
    </div>
  );
}

/**
 * @figmaAssetKey 7a83146cc357fe4091370f7d956b86811cfa3c0a
 */
function Frame5() {
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

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Tabs1 />
      <Frame5 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <RequirementSection />
      <Frame1 />
    </div>
  );
}

function KravOgVeileder() {
  return (
    <div className="bg-[#fafaf0] box-border content-stretch flex flex-col gap-[8px] items-center px-0 py-[8px] relative rounded-[12px] shrink-0 w-full" data-name="krav og veileder">
      <div aria-hidden="true" className="absolute border border-[#c4c8b7] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Frame6 />
    </div>
  );
}

function Content1() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start justify-center leading-[0] min-h-px min-w-px overflow-clip relative shrink-0 tracking-[0.5px]" data-name="Content">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[#44483b] text-[12px] w-full">
        <p className="leading-[16px]">Svarvalg</p>
      </div>
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#1a1c16] text-[16px] w-full">
        <p className="leading-[24px]">Nei</p>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[16px] items-start p-[8px] relative w-full">
          <Content1 />
        </div>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <StatusChips status="open" type="Avvik" className="content-stretch flex items-start relative shrink-0" />
    </div>
  );
}

function CardHeader() {
  return (
    <div className="content-stretch flex h-[48px] items-center justify-between relative shrink-0 w-full" data-name="Card header">
      <IconTx property1="Avvik" className="bg-[#ffdad6] box-border content-stretch flex gap-[4px] h-[32px] items-center overflow-clip px-[4px] py-0 relative rounded-[8px] shrink-0" />
      <Frame8 />
    </div>
  );
}

function CardHeader1() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Card header">
      <IconTx property1="deadline" className="content-stretch flex gap-[4px] h-[32px] items-center overflow-clip relative rounded-[8px] shrink-0" />
    </div>
  );
}

function Content2() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-col grow items-start min-h-px min-w-px pb-[8px] pt-0 px-0 relative self-stretch shrink-0" data-name="Content">
      <CardHeader />
      <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] overflow-ellipsis overflow-hidden relative shrink-0 text-[#410002] text-[14px] text-nowrap tracking-[0.1px] w-full">
        <p className="[white-space-collapse:collapse] leading-[20px] overflow-ellipsis overflow-hidden">KSL-egenrevisjon (Årlig dokumentasjon)</p>
      </div>
      <CardHeader1 />
    </div>
  );
}

function TextAndImage() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Text and image">
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[16px] items-start pl-[16px] pr-[8px] py-0 relative w-full">
          <Content2 />
        </div>
      </div>
    </div>
  );
}

/**
 * @figmaAssetKey abd0151384160432817e2919d48ad5c44bda65b7
 */
export default function EgenrevisjonAvvik() {
  return (
    <div className="relative size-full" data-name="Egenrevisjon avvik">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-start px-[16px] py-0 relative size-full">
          <Questionmobilemenu />
          <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] tracking-[0.15px] w-full">
            <p className="leading-[24px]">Er det etablert en rutine som sikrer at det kun brukes ingredienser med norsk opprinnelse i Spesialitet-godkjent produkt? (ingredienser som ikke produseres kommersielt i Norge er unntatt fra dette kravet)</p>
          </div>
          <QuestionInfoLables />
          <KravOgVeileder />
          <QuestionTabs />
        </div>
      </div>
    </div>
  );
}