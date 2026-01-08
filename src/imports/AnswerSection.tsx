import { img, img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, imgIcon, img11, img12, img13, img14, img15, img16, img17, img18, img19, img20, img21, img22, imgDivider, img23, img24, imgIcon1, imgIcon2 } from "./svg-50mfq";
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

/**
 * @figmaAssetKey 4f613eb0b0dcab335a280e1ad9e038c3a95bf01a
 */
function MoreVert({ className }: { className?: string }) {
  return (
    <div className={className} data-name="more_vert">
      <div className="absolute inset-[16.67%_41.67%]" data-name="icon">
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(26, 28, 22, 1)" } as React.CSSProperties}>
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
 * @figmaAssetKey 1f20ddad4c7d6d3c649da515a64198e13789f350
 */
function IconButton({ className, type = "Round", size = "XSmall", style = "Filled", width = "Narrow" }: IconButtonProps) {
  if (type === "Square" && size === "XLarge" && style === "Standard" && width === "Wide") {
    return (
      <div className={className} data-name="Type=Square, Size=XLarge, Style=Standard, Width=Wide">
        <Content3 />
      </div>
    );
  }
  if (type === "Square" && size === "XLarge" && style === "Standard" && width === "Default") {
    return (
      <div className={className} data-name="Type=Square, Size=XLarge, Style=Standard, Width=Default">
        <Content4 />
      </div>
    );
  }
  if (type === "Square" && size === "XLarge" && style === "Standard" && width === "Narrow") {
    return (
      <div className={className} data-name="Type=Square, Size=XLarge, Style=Standard, Width=Narrow">
        <Content5 />
      </div>
    );
  }
  if (type === "Square" && size === "Large" && style === "Standard" && width === "Wide") {
    return (
      <div className={className} data-name="Type=Square, Size=Large, Style=Standard, Width=Wide">
        <Content6 />
      </div>
    );
  }
  if (type === "Square" && size === "Large" && style === "Standard" && width === "Default") {
    return (
      <div className={className} data-name="Type=Square, Size=Large, Style=Standard, Width=Default">
        <Content7 />
      </div>
    );
  }
  if (type === "Square" && size === "Large" && style === "Standard" && width === "Narrow") {
    return (
      <div className={className} data-name="Type=Square, Size=Large, Style=Standard, Width=Narrow">
        <Content8 />
      </div>
    );
  }
  if (type === "Square" && size === "Medium" && style === "Standard" && width === "Wide") {
    return (
      <div className={className} data-name="Type=Square, Size=Medium, Style=Standard, Width=Wide">
        <Content9 />
      </div>
    );
  }
  if (type === "Square" && size === "Medium" && style === "Standard" && width === "Default") {
    return (
      <div className={className} data-name="Type=Square, Size=Medium, Style=Standard, Width=Default">
        <Content10 />
      </div>
    );
  }
  if (type === "Square" && size === "Medium" && style === "Standard" && width === "Narrow") {
    return (
      <div className={className} data-name="Type=Square, Size=Medium, Style=Standard, Width=Narrow">
        <Content11 />
      </div>
    );
  }
  if (type === "Square" && size === "Small" && style === "Standard" && width === "Wide") {
    return (
      <div className={className} data-name="Type=Square, Size=Small, Style=Standard, Width=Wide">
        <Content12 />
      </div>
    );
  }
  if (type === "Square" && size === "Small" && style === "Standard" && width === "Default") {
    return (
      <div className={className} data-name="Type=Square, Size=Small, Style=Standard, Width=Default">
        <Content13 />
      </div>
    );
  }
  if (type === "Square" && size === "Small" && style === "Standard" && width === "Narrow") {
    return (
      <div className={className} data-name="Type=Square, Size=Small, Style=Standard, Width=Narrow">
        <Content14 />
      </div>
    );
  }
  if (type === "Square" && size === "XSmall" && style === "Standard" && width === "Wide") {
    return (
      <div className={className} data-name="Type=Square, Size=XSmall, Style=Standard, Width=Wide">
        <Content15 />
      </div>
    );
  }
  if (type === "Square" && size === "XSmall" && style === "Standard" && width === "Default") {
    return (
      <div className={className} data-name="Type=Square, Size=XSmall, Style=Standard, Width=Default">
        <Content16 />
      </div>
    );
  }
  if (type === "Square" && size === "XSmall" && style === "Standard" && width === "Narrow") {
    return (
      <div className={className} data-name="Type=Square, Size=XSmall, Style=Standard, Width=Narrow">
        <Content17 />
      </div>
    );
  }
  if (type === "Round" && size === "XLarge" && style === "Standard" && width === "Wide") {
    return (
      <div className={className} data-name="Type=Round, Size=XLarge, Style=Standard, Width=Wide">
        <Content18 />
      </div>
    );
  }
  if (type === "Round" && size === "XLarge" && style === "Standard" && width === "Default") {
    return (
      <div className={className} data-name="Type=Round, Size=XLarge, Style=Standard, Width=Default">
        <Content19 />
      </div>
    );
  }
  if (type === "Round" && size === "XLarge" && style === "Standard" && width === "Narrow") {
    return (
      <div className={className} data-name="Type=Round, Size=XLarge, Style=Standard, Width=Narrow">
        <Content20 />
      </div>
    );
  }
  if (type === "Round" && size === "Large" && style === "Standard" && width === "Wide") {
    return (
      <div className={className} data-name="Type=Round, Size=Large, Style=Standard, Width=Wide">
        <Content21 />
      </div>
    );
  }
  if (type === "Round" && size === "Large" && style === "Standard" && width === "Default") {
    return (
      <div className={className} data-name="Type=Round, Size=Large, Style=Standard, Width=Default">
        <Content22 />
      </div>
    );
  }
  if (type === "Round" && size === "Large" && style === "Standard" && width === "Narrow") {
    return (
      <div className={className} data-name="Type=Round, Size=Large, Style=Standard, Width=Narrow">
        <Content23 />
      </div>
    );
  }
  if (type === "Round" && size === "Medium" && style === "Standard" && width === "Wide") {
    return (
      <div className={className} data-name="Type=Round, Size=Medium, Style=Standard, Width=Wide">
        <Content24 />
      </div>
    );
  }
  if (type === "Round" && size === "Medium" && style === "Standard" && width === "Default") {
    return (
      <div className={className} data-name="Type=Round, Size=Medium, Style=Standard, Width=Default">
        <Content25 />
      </div>
    );
  }
  if (type === "Round" && size === "Medium" && style === "Standard" && width === "Narrow") {
    return (
      <div className={className} data-name="Type=Round, Size=Medium, Style=Standard, Width=Narrow">
        <Content26 />
      </div>
    );
  }
  if (type === "Round" && size === "Small" && style === "Standard" && width === "Wide") {
    return (
      <div className={className} data-name="Type=Round, Size=Small, Style=Standard, Width=Wide">
        <Content27 />
      </div>
    );
  }
  if (type === "Round" && size === "Small" && style === "Standard" && width === "Default") {
    return (
      <div className={className} data-name="Type=Round, Size=Small, Style=Standard, Width=Default">
        <Content28 />
      </div>
    );
  }
  if (type === "Round" && size === "Small" && style === "Standard" && width === "Narrow") {
    return (
      <div className={className} data-name="Type=Round, Size=Small, Style=Standard, Width=Narrow">
        <Content29 />
      </div>
    );
  }
  if (type === "Round" && size === "XSmall" && style === "Standard" && width === "Wide") {
    return (
      <div className={className} data-name="Type=Round, Size=XSmall, Style=Standard, Width=Wide">
        <Content30 />
      </div>
    );
  }
  if (type === "Round" && size === "XSmall" && style === "Standard" && width === "Default") {
    return (
      <div className={className} data-name="Type=Round, Size=XSmall, Style=Standard, Width=Default">
        <Content31 />
      </div>
    );
  }
  if (type === "Round" && size === "XSmall" && style === "Standard" && width === "Narrow") {
    return (
      <div className={className} data-name="Type=Round, Size=XSmall, Style=Standard, Width=Narrow">
        <Content32 />
      </div>
    );
  }
  if (type === "Square" && size === "XLarge" && style === "Outline" && width === "Wide") {
    return (
      <div className={className} data-name="Type=Square, Size=XLarge, Style=Outline, Width=Wide">
        <Content33 />
      </div>
    );
  }
  if (type === "Square" && size === "XLarge" && style === "Outline" && width === "Default") {
    return (
      <div className={className} data-name="Type=Square, Size=XLarge, Style=Outline, Width=Default">
        <Content34 />
      </div>
    );
  }
  if (type === "Square" && size === "XLarge" && style === "Outline" && width === "Narrow") {
    return (
      <div className={className} data-name="Type=Square, Size=XLarge, Style=Outline, Width=Narrow">
        <Content35 />
      </div>
    );
  }
  if (type === "Square" && size === "Large" && style === "Outline" && width === "Wide") {
    return (
      <div className={className} data-name="Type=Square, Size=Large, Style=Outline, Width=Wide">
        <Content36 />
      </div>
    );
  }
  if (type === "Square" && size === "Large" && style === "Outline" && width === "Default") {
    return (
      <div className={className} data-name="Type=Square, Size=Large, Style=Outline, Width=Default">
        <Content37 />
      </div>
    );
  }
  if (type === "Square" && size === "Large" && style === "Outline" && width === "Narrow") {
    return (
      <div className={className} data-name="Type=Square, Size=Large, Style=Outline, Width=Narrow">
        <Content38 />
      </div>
    );
  }
  if (type === "Square" && size === "Medium" && style === "Outline" && width === "Wide") {
    return (
      <div className={className} data-name="Type=Square, Size=Medium, Style=Outline, Width=Wide">
        <Content39 />
      </div>
    );
  }
  if (type === "Square" && size === "Medium" && style === "Outline" && width === "Default") {
    return (
      <div className={className} data-name="Type=Square, Size=Medium, Style=Outline, Width=Default">
        <Content40 />
      </div>
    );
  }
  if (type === "Square" && size === "Medium" && style === "Outline" && width === "Narrow") {
    return (
      <div className={className} data-name="Type=Square, Size=Medium, Style=Outline, Width=Narrow">
        <Content41 />
      </div>
    );
  }
  if (type === "Square" && size === "Small" && style === "Outline" && width === "Wide") {
    return (
      <div className={className} data-name="Type=Square, Size=Small, Style=Outline, Width=Wide">
        <Content42 />
      </div>
    );
  }
  if (type === "Square" && size === "Small" && style === "Outline" && width === "Default") {
    return (
      <div className={className} data-name="Type=Square, Size=Small, Style=Outline, Width=Default">
        <Content43 />
      </div>
    );
  }
  if (type === "Square" && size === "Small" && style === "Outline" && width === "Narrow") {
    return (
      <div className={className} data-name="Type=Square, Size=Small, Style=Outline, Width=Narrow">
        <Content44 />
      </div>
    );
  }
  if (type === "Square" && size === "XSmall" && style === "Outline" && width === "Wide") {
    return (
      <div className={className} data-name="Type=Square, Size=XSmall, Style=Outline, Width=Wide">
        <Content45 />
      </div>
    );
  }
  if (type === "Square" && size === "XSmall" && style === "Outline" && width === "Default") {
    return (
      <div className={className} data-name="Type=Square, Size=XSmall, Style=Outline, Width=Default">
        <Content46 />
      </div>
    );
  }
  if (type === "Square" && size === "XSmall" && style === "Outline" && width === "Narrow") {
    return (
      <div className={className} data-name="Type=Square, Size=XSmall, Style=Outline, Width=Narrow">
        <Content47 />
      </div>
    );
  }
  if (type === "Round" && size === "XLarge" && style === "Outline" && width === "Wide") {
    return (
      <div className={className} data-name="Type=Round, Size=XLarge, Style=Outline, Width=Wide">
        <Content48 />
      </div>
    );
  }
  if (type === "Round" && size === "XLarge" && style === "Outline" && width === "Default") {
    return (
      <div className={className} data-name="Type=Round, Size=XLarge, Style=Outline, Width=Default">
        <Content49 />
      </div>
    );
  }
  if (type === "Round" && size === "XLarge" && style === "Outline" && width === "Narrow") {
    return (
      <div className={className} data-name="Type=Round, Size=XLarge, Style=Outline, Width=Narrow">
        <Content50 />
      </div>
    );
  }
  if (type === "Round" && size === "Large" && style === "Outline" && width === "Wide") {
    return (
      <div className={className} data-name="Type=Round, Size=Large, Style=Outline, Width=Wide">
        <Content51 />
      </div>
    );
  }
  if (type === "Round" && size === "Large" && style === "Outline" && width === "Default") {
    return (
      <div className={className} data-name="Type=Round, Size=Large, Style=Outline, Width=Default">
        <Content52 />
      </div>
    );
  }
  if (type === "Round" && size === "Large" && style === "Outline" && width === "Narrow") {
    return (
      <div className={className} data-name="Type=Round, Size=Large, Style=Outline, Width=Narrow">
        <Content53 />
      </div>
    );
  }
  if (type === "Round" && size === "Medium" && style === "Outline" && width === "Wide") {
    return (
      <div className={className} data-name="Type=Round, Size=Medium, Style=Outline, Width=Wide">
        <Content54 />
      </div>
    );
  }
  if (type === "Round" && size === "Medium" && style === "Outline" && width === "Default") {
    return (
      <div className={className} data-name="Type=Round, Size=Medium, Style=Outline, Width=Default">
        <Content55 />
      </div>
    );
  }
  if (type === "Round" && size === "Medium" && style === "Outline" && width === "Narrow") {
    return (
      <div className={className} data-name="Type=Round, Size=Medium, Style=Outline, Width=Narrow">
        <Content56 />
      </div>
    );
  }
  if (type === "Round" && size === "Small" && style === "Outline" && width === "Wide") {
    return (
      <div className={className} data-name="Type=Round, Size=Small, Style=Outline, Width=Wide">
        <Content57 />
      </div>
    );
  }
  if (type === "Round" && size === "Small" && style === "Outline" && width === "Default") {
    return (
      <div className={className} data-name="Type=Round, Size=Small, Style=Outline, Width=Default">
        <Content58 />
      </div>
    );
  }
  if (type === "Round" && size === "Small" && style === "Outline" && width === "Narrow") {
    return (
      <div className={className} data-name="Type=Round, Size=Small, Style=Outline, Width=Narrow">
        <Content59 />
      </div>
    );
  }
  if (type === "Round" && size === "XSmall" && style === "Outline" && width === "Wide") {
    return (
      <div className={className} data-name="Type=Round, Size=XSmall, Style=Outline, Width=Wide">
        <Content60 />
      </div>
    );
  }
  if (type === "Round" && size === "XSmall" && style === "Outline" && width === "Default") {
    return (
      <div className={className} data-name="Type=Round, Size=XSmall, Style=Outline, Width=Default">
        <Content61 />
      </div>
    );
  }
  if (type === "Round" && size === "XSmall" && style === "Outline" && width === "Narrow") {
    return (
      <div className={className} data-name="Type=Round, Size=XSmall, Style=Outline, Width=Narrow">
        <Content62 />
      </div>
    );
  }
  if (type === "Square" && size === "XLarge" && style === "Tonal" && width === "Wide") {
    return (
      <div className={className} data-name="Type=Square, Size=XLarge, Style=Tonal, Width=Wide">
        <Content63 />
      </div>
    );
  }
  if (type === "Square" && size === "XLarge" && style === "Tonal" && width === "Default") {
    return (
      <div className={className} data-name="Type=Square, Size=XLarge, Style=Tonal, Width=Default">
        <Content64 />
      </div>
    );
  }
  if (type === "Square" && size === "XLarge" && style === "Tonal" && width === "Narrow") {
    return (
      <div className={className} data-name="Type=Square, Size=XLarge, Style=Tonal, Width=Narrow">
        <Content65 />
      </div>
    );
  }
  if (type === "Square" && size === "Large" && style === "Tonal" && width === "Wide") {
    return (
      <div className={className} data-name="Type=Square, Size=Large, Style=Tonal, Width=Wide">
        <Content66 />
      </div>
    );
  }
  if (type === "Square" && size === "Large" && style === "Tonal" && width === "Default") {
    return (
      <div className={className} data-name="Type=Square, Size=Large, Style=Tonal, Width=Default">
        <Content67 />
      </div>
    );
  }
  if (type === "Square" && size === "Large" && style === "Tonal" && width === "Narrow") {
    return (
      <div className={className} data-name="Type=Square, Size=Large, Style=Tonal, Width=Narrow">
        <Content68 />
      </div>
    );
  }
  if (type === "Square" && size === "Medium" && style === "Tonal" && width === "Wide") {
    return (
      <div className={className} data-name="Type=Square, Size=Medium, Style=Tonal, Width=Wide">
        <Content69 />
      </div>
    );
  }
  if (type === "Square" && size === "Medium" && style === "Tonal" && width === "Default") {
    return (
      <div className={className} data-name="Type=Square, Size=Medium, Style=Tonal, Width=Default">
        <Content70 />
      </div>
    );
  }
  if (type === "Square" && size === "Medium" && style === "Tonal" && width === "Narrow") {
    return (
      <div className={className} data-name="Type=Square, Size=Medium, Style=Tonal, Width=Narrow">
        <Content71 />
      </div>
    );
  }
  if (type === "Square" && size === "Small" && style === "Tonal" && width === "Wide") {
    return (
      <div className={className} data-name="Type=Square, Size=Small, Style=Tonal, Width=Wide">
        <Content72 />
      </div>
    );
  }
  if (type === "Square" && size === "Small" && style === "Tonal" && width === "Default") {
    return (
      <div className={className} data-name="Type=Square, Size=Small, Style=Tonal, Width=Default">
        <Content73 />
      </div>
    );
  }
  if (type === "Square" && size === "Small" && style === "Tonal" && width === "Narrow") {
    return (
      <div className={className} data-name="Type=Square, Size=Small, Style=Tonal, Width=Narrow">
        <Content74 />
      </div>
    );
  }
  if (type === "Square" && size === "XSmall" && style === "Tonal" && width === "Wide") {
    return (
      <div className={className} data-name="Type=Square, Size=XSmall, Style=Tonal, Width=Wide">
        <Content75 />
      </div>
    );
  }
  if (type === "Square" && size === "XSmall" && style === "Tonal" && width === "Default") {
    return (
      <div className={className} data-name="Type=Square, Size=XSmall, Style=Tonal, Width=Default">
        <Content76 />
      </div>
    );
  }
  if (type === "Square" && size === "XSmall" && style === "Tonal" && width === "Narrow") {
    return (
      <div className={className} data-name="Type=Square, Size=XSmall, Style=Tonal, Width=Narrow">
        <Content77 />
      </div>
    );
  }
  if (type === "Round" && size === "XLarge" && style === "Tonal" && width === "Wide") {
    return (
      <div className={className} data-name="Type=Round, Size=XLarge, Style=Tonal, Width=Wide">
        <Content78 />
      </div>
    );
  }
  if (type === "Round" && size === "XLarge" && style === "Tonal" && width === "Default") {
    return (
      <div className={className} data-name="Type=Round, Size=XLarge, Style=Tonal, Width=Default">
        <Content79 />
      </div>
    );
  }
  if (type === "Round" && size === "XLarge" && style === "Tonal" && width === "Narrow") {
    return (
      <div className={className} data-name="Type=Round, Size=XLarge, Style=Tonal, Width=Narrow">
        <Content80 />
      </div>
    );
  }
  if (type === "Round" && size === "Large" && style === "Tonal" && width === "Wide") {
    return (
      <div className={className} data-name="Type=Round, Size=Large, Style=Tonal, Width=Wide">
        <Content81 />
      </div>
    );
  }
  if (type === "Round" && size === "Large" && style === "Tonal" && width === "Default") {
    return (
      <div className={className} data-name="Type=Round, Size=Large, Style=Tonal, Width=Default">
        <Content82 />
      </div>
    );
  }
  if (type === "Round" && size === "Large" && style === "Tonal" && width === "Narrow") {
    return (
      <div className={className} data-name="Type=Round, Size=Large, Style=Tonal, Width=Narrow">
        <Content83 />
      </div>
    );
  }
  if (type === "Round" && size === "Medium" && style === "Tonal" && width === "Wide") {
    return (
      <div className={className} data-name="Type=Round, Size=Medium, Style=Tonal, Width=Wide">
        <Content84 />
      </div>
    );
  }
  if (type === "Round" && size === "Medium" && style === "Tonal" && width === "Default") {
    return (
      <div className={className} data-name="Type=Round, Size=Medium, Style=Tonal, Width=Default">
        <Content85 />
      </div>
    );
  }
  if (type === "Round" && size === "Medium" && style === "Tonal" && width === "Narrow") {
    return (
      <div className={className} data-name="Type=Round, Size=Medium, Style=Tonal, Width=Narrow">
        <Content86 />
      </div>
    );
  }
  if (type === "Round" && size === "Small" && style === "Tonal" && width === "Wide") {
    return (
      <div className={className} data-name="Type=Round, Size=Small, Style=Tonal, Width=Wide">
        <Content87 />
      </div>
    );
  }
  if (type === "Round" && size === "Small" && style === "Tonal" && width === "Default") {
    return (
      <div className={className} data-name="Type=Round, Size=Small, Style=Tonal, Width=Default">
        <Content88 />
      </div>
    );
  }
  if (type === "Round" && size === "Small" && style === "Tonal" && width === "Narrow") {
    return (
      <div className={className} data-name="Type=Round, Size=Small, Style=Tonal, Width=Narrow">
        <Content89 />
      </div>
    );
  }
  if (type === "Round" && size === "XSmall" && style === "Tonal" && width === "Wide") {
    return (
      <div className={className} data-name="Type=Round, Size=XSmall, Style=Tonal, Width=Wide">
        <Content90 />
      </div>
    );
  }
  if (type === "Round" && size === "XSmall" && style === "Tonal" && width === "Default") {
    return (
      <div className={className} data-name="Type=Round, Size=XSmall, Style=Tonal, Width=Default">
        <Content91 />
      </div>
    );
  }
  if (type === "Round" && size === "XSmall" && style === "Tonal" && width === "Narrow") {
    return (
      <div className={className} data-name="Type=Round, Size=XSmall, Style=Tonal, Width=Narrow">
        <Content92 />
      </div>
    );
  }
  if (type === "Square" && size === "XLarge" && style === "Filled" && width === "Wide") {
    return (
      <div className={className} data-name="Type=Square, Size=XLarge, Style=Filled, Width=Wide">
        <Content93 />
      </div>
    );
  }
  if (type === "Square" && size === "XLarge" && style === "Filled" && width === "Default") {
    return (
      <div className={className} data-name="Type=Square, Size=XLarge, Style=Filled, Width=Default">
        <Content94 />
      </div>
    );
  }
  if (type === "Square" && size === "XLarge" && style === "Filled" && width === "Narrow") {
    return (
      <div className={className} data-name="Type=Square, Size=XLarge, Style=Filled, Width=Narrow">
        <Content95 />
      </div>
    );
  }
  if (type === "Square" && size === "Large" && style === "Filled" && width === "Wide") {
    return (
      <div className={className} data-name="Type=Square, Size=Large, Style=Filled, Width=Wide">
        <Content96 />
      </div>
    );
  }
  if (type === "Square" && size === "Large" && style === "Filled" && width === "Default") {
    return (
      <div className={className} data-name="Type=Square, Size=Large, Style=Filled, Width=Default">
        <Content97 />
      </div>
    );
  }
  if (type === "Square" && size === "Large" && style === "Filled" && width === "Narrow") {
    return (
      <div className={className} data-name="Type=Square, Size=Large, Style=Filled, Width=Narrow">
        <Content98 />
      </div>
    );
  }
  if (type === "Square" && size === "Medium" && style === "Filled" && width === "Wide") {
    return (
      <div className={className} data-name="Type=Square, Size=Medium, Style=Filled, Width=Wide">
        <Content99 />
      </div>
    );
  }
  if (type === "Square" && size === "Medium" && style === "Filled" && width === "Default") {
    return (
      <div className={className} data-name="Type=Square, Size=Medium, Style=Filled, Width=Default">
        <Content100 />
      </div>
    );
  }
  if (type === "Square" && size === "Medium" && style === "Filled" && width === "Narrow") {
    return (
      <div className={className} data-name="Type=Square, Size=Medium, Style=Filled, Width=Narrow">
        <Content101 />
      </div>
    );
  }
  if (type === "Square" && size === "Small" && style === "Filled" && width === "Wide") {
    return (
      <div className={className} data-name="Type=Square, Size=Small, Style=Filled, Width=Wide">
        <Content102 />
      </div>
    );
  }
  if (type === "Square" && size === "Small" && style === "Filled" && width === "Default") {
    return (
      <div className={className} data-name="Type=Square, Size=Small, Style=Filled, Width=Default">
        <Content103 />
      </div>
    );
  }
  if (type === "Square" && size === "Small" && style === "Filled" && width === "Narrow") {
    return (
      <div className={className} data-name="Type=Square, Size=Small, Style=Filled, Width=Narrow">
        <Content104 />
      </div>
    );
  }
  if (type === "Square" && size === "XSmall" && style === "Filled" && width === "Wide") {
    return (
      <div className={className} data-name="Type=Square, Size=XSmall, Style=Filled, Width=Wide">
        <Content105 />
      </div>
    );
  }
  if (type === "Square" && size === "XSmall" && style === "Filled" && width === "Default") {
    return (
      <div className={className} data-name="Type=Square, Size=XSmall, Style=Filled, Width=Default">
        <Content106 />
      </div>
    );
  }
  if (type === "Square" && size === "XSmall" && style === "Filled" && width === "Narrow") {
    return (
      <div className={className} data-name="Type=Square, Size=XSmall, Style=Filled, Width=Narrow">
        <Content107 />
      </div>
    );
  }
  if (type === "Round" && size === "XLarge" && style === "Filled" && width === "Wide") {
    return (
      <div className={className} data-name="Type=Round, Size=XLarge, Style=Filled, Width=Wide">
        <Content108 />
      </div>
    );
  }
  if (type === "Round" && size === "XLarge" && style === "Filled" && width === "Default") {
    return (
      <div className={className} data-name="Type=Round, Size=XLarge, Style=Filled, Width=Default">
        <Content109 />
      </div>
    );
  }
  if (type === "Round" && size === "XLarge" && style === "Filled" && width === "Narrow") {
    return (
      <div className={className} data-name="Type=Round, Size=XLarge, Style=Filled, Width=Narrow">
        <Content110 />
      </div>
    );
  }
  if (type === "Round" && size === "Large" && style === "Filled" && width === "Wide") {
    return (
      <div className={className} data-name="Type=Round, Size=Large, Style=Filled, Width=Wide">
        <Content111 />
      </div>
    );
  }
  if (type === "Round" && size === "Large" && style === "Filled" && width === "Default") {
    return (
      <div className={className} data-name="Type=Round, Size=Large, Style=Filled, Width=Default">
        <Content112 />
      </div>
    );
  }
  if (type === "Round" && size === "Large" && style === "Filled" && width === "Narrow") {
    return (
      <div className={className} data-name="Type=Round, Size=Large, Style=Filled, Width=Narrow">
        <Content113 />
      </div>
    );
  }
  if (type === "Round" && size === "Medium" && style === "Filled" && width === "Wide") {
    return (
      <div className={className} data-name="Type=Round, Size=Medium, Style=Filled, Width=Wide">
        <Content114 />
      </div>
    );
  }
  if (type === "Round" && size === "Medium" && style === "Filled" && width === "Default") {
    return (
      <div className={className} data-name="Type=Round, Size=Medium, Style=Filled, Width=Default">
        <Content115 />
      </div>
    );
  }
  if (type === "Round" && size === "Medium" && style === "Filled" && width === "Narrow") {
    return (
      <div className={className} data-name="Type=Round, Size=Medium, Style=Filled, Width=Narrow">
        <Content116 />
      </div>
    );
  }
  if (type === "Round" && size === "Small" && style === "Filled" && width === "Wide") {
    return (
      <div className={className} data-name="Type=Round, Size=Small, Style=Filled, Width=Wide">
        <Content117 />
      </div>
    );
  }
  if (type === "Round" && size === "Small" && style === "Filled" && width === "Default") {
    return (
      <div className={className} data-name="Type=Round, Size=Small, Style=Filled, Width=Default">
        <Content118 />
      </div>
    );
  }
  if (type === "Round" && size === "Small" && style === "Filled" && width === "Narrow") {
    return (
      <div className={className} data-name="Type=Round, Size=Small, Style=Filled, Width=Narrow">
        <Content119 />
      </div>
    );
  }
  if (type === "Round" && size === "XSmall" && style === "Filled" && width === "Wide") {
    return (
      <div className={className} data-name="Type=Round, Size=XSmall, Style=Filled, Width=Wide">
        <Content120 />
      </div>
    );
  }
  if (type === "Round" && size === "XSmall" && style === "Filled" && width === "Default") {
    return (
      <div className={className} data-name="Type=Round, Size=XSmall, Style=Filled, Width=Default">
        <Content121 />
      </div>
    );
  }
  return (
    <div className={className} data-name="Type=Round, Size=XSmall, Style=Filled, Width=Narrow">
      <Content122 />
    </div>
  );
}
type ProducerDocumentProps = {
  className?: string;
  documentIsNeeded?: boolean;
  state?: "Empty" | "filled" | "Saved";
};

/**
 * @figmaAssetKey 27a61e295e32d6fd4d405f0ff9d11e96a17eccee
 */
/**
 * @figmaAssetKey 78cdedb65f8c4ecba6e671a14fb1ca629a70679d
 */
/**
 * @figmaAssetKey 78cdedb65f8c4ecba6e671a14fb1ca629a70679d
 */
/**
 * @figmaAssetKey c83b52fbbd6f3f7ac28668f8e35814c971d9498d
 */
/**
 * @figmaAssetKey 78cdedb65f8c4ecba6e671a14fb1ca629a70679d
 */
function ProducerDocument({ className, documentIsNeeded = true, state = "Empty" }: ProducerDocumentProps) {
  if (state === "filled") {
    return (
      <div className={className} data-name="State=filled">
        <AppUserInput />
        <Button />
      </div>
    );
  }
  if (state === "Saved") {
    return (
      <div className={className} data-name="State=Saved">
        <AppUserInput1 />
        <Button1 />
        <ItemCard />
      </div>
    );
  }
  return (
    <div className={className} data-name="State=Empty">
      {documentIsNeeded && (
        <div className="bg-[#e0e4d3] relative rounded-[16px] shrink-0 w-full" data-name="document is needed">
          <div className="flex flex-row items-center size-full">
            <div className="box-border content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative w-full">
              <Error />
              <div className="basis-0 flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold grow justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[#44483b] text-[14px] tracking-[0.1px]">
                <p className="leading-[20px]">Dokumentasjon er påkrevd for dette spørsmålet – last opp fil eller skriv direkte i dokumentet.</p>
              </div>
            </div>
          </div>
        </div>
      )}
      <AppUserInput2 />
      <Button2 />
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
          <img alt="" className="block max-w-none size-full" src={imgDivider} />
        </div>
      </div>
    </div>
  );
}

/**
 * @figmaAssetKey 92286effc928ef4b6c453981abd50d31102a8883
 */
function Note({ className }: { className?: string }) {
  return (
    <div className={className} data-name="note">
      <Note1 />
    </div>
  );
}

/**
 * @figmaAssetKey f9861c34a3e2d071f96138c833590b998010adb4
 */
function SnippetFolder({ className }: { className?: string }) {
  return (
    <div className={className} data-name="snippet_folder">
      <Snippet_folder1 />
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
          <img alt="" className="block max-w-none size-full" src={imgIcon1} />
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
 * @figmaAssetKey 48c0a4b92c3075b4b17da8c56ed998432b28bb23
 */
function RadioButtonChecked({ className }: { className?: string }) {
  return (
    <div className={className} data-name="radio_button_checked">
      <div className="absolute inset-[8.333%]" data-name="icon">
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(26, 28, 22, 1)" } as React.CSSProperties}>
          <img alt="" className="block max-w-none size-full" src={imgIcon2} />
        </div>
      </div>
    </div>
  );
}

/**
 * @figmaAssetKey 1b09dde9ecf865381eb9b052eb872623748378be
 */
function StateLayer() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center p-[8px] relative shrink-0" data-name="state-layer">
      <Icon123 />
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

function Frame1() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
      <div className="basis-0 flex flex-col font-['Quatro:Regular',sans-serif] grow h-[48px] justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#1a1c16] text-[22px]">
        <p className="leading-[28px]">
          <span className="font-['Quatro:Regular',sans-serif] not-italic">1.</span>1<span className="font-['Quatro:Regular',sans-serif] not-italic">.</span>1
        </p>
      </div>
      <TrailingIcon />
    </div>
  );
}

function Frame2() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start justify-center min-h-px min-w-px relative shrink-0">
      <Frame1 />
      <div className="flex flex-col font-['Quatro:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1a1c16] text-[22px] w-full">
        <p className="leading-[28px]">Er det etablert en rutine som sikrer at det kun brukes ingredienser med norsk opprinnelse i Spesialitet-godkjent produkt? (ingredienser som ikke produseres kommersielt i Norge er unntatt fra dette kravet)</p>
      </div>
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

/**
 * @figmaAssetKey b050d69c96f13dcc7f0aaa7d565caf76713b1d0e
 */
function StateLayer1() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-center justify-center pl-[8px] pr-[12px] py-[6px] relative shrink-0" data-name="state-layer">
      <Icon124 />
      <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[14px] text-center text-nowrap text-white tracking-[0.1px]">
        <p className="leading-[20px] whitespace-pre">Dokumentasjon kreves</p>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <Inputchip />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0 w-full">
      <Frame3 />
      <Frame4 />
    </div>
  );
}

function AsnwerHeading() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[8px] items-start justify-center px-0 py-[12px] relative shrink-0 w-full" data-name="Asnwer Heading">
      <Frame5 />
    </div>
  );
}

function StateLayer2() {
  return (
    <div className="box-border content-stretch flex items-center justify-center p-[8px] relative shrink-0" data-name="state-layer">
      <RadioButtonChecked className="relative shrink-0 size-[24px]" />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0" data-name="container">
      <StateLayer2 />
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

function Content() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] tracking-[0.5px] w-full">
        <p className="leading-[24px]">Ja</p>
      </div>
    </div>
  );
}

function StateLayer3() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center px-[16px] py-0 relative size-full">
          <LeadingElement />
          <Content />
        </div>
      </div>
    </div>
  );
}

function StateLayer4() {
  return (
    <div className="box-border content-stretch flex items-center justify-center p-[8px] relative shrink-0" data-name="state-layer">
      <RadioButtonUnchecked className="relative shrink-0 size-[24px]" />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0" data-name="container">
      <StateLayer4 />
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

function Content1() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] tracking-[0.5px] w-full">
        <p className="leading-[24px]">Nei</p>
      </div>
    </div>
  );
}

function StateLayer5() {
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

function StateLayer6() {
  return (
    <div className="box-border content-stretch flex items-center justify-center p-[8px] relative shrink-0" data-name="state-layer">
      <RadioButtonUnchecked className="relative shrink-0 size-[24px]" />
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0" data-name="container">
      <StateLayer6 />
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

function Content2() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] tracking-[0.5px] w-full">
        <p className="leading-[24px]">Ikke relevant</p>
      </div>
    </div>
  );
}

function StateLayer7() {
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

function Frame() {
  return (
    <div className="box-border content-stretch cursor-pointer flex items-start px-0 py-[16px] relative shrink-0 w-full">
      <ListitemListItem4Density />
      <ListitemListItem4Density1 />
      <ListitemListItem4Density2 />
    </div>
  );
}

function AnswerAlternatives() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-x-clip overflow-y-auto relative shrink-0 w-full" data-name="Answer Alternatives">
      <Frame />
    </div>
  );
}

function IconAndLabel() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="Icon and label">
      <SnippetFolder className="relative shrink-0 size-[24px]" />
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[14px] text-center text-nowrap tracking-[0.1px]">
        <p className="leading-[20px] whitespace-pre">Dokumentasjon</p>
      </div>
    </div>
  );
}

function TabContents() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center justify-center min-h-px min-w-px relative shrink-0" data-name="Tab Contents">
      <IconAndLabel />
    </div>
  );
}

function StateLayer8() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="State-layer">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col items-center justify-center px-[16px] py-[12px] relative size-full">
          <TabContents />
          <div className="absolute bg-[#4a671e] bottom-0 h-[2px] left-0 right-0" data-name="Indicator" />
        </div>
      </div>
    </div>
  );
}

function IconAndLabel1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="Icon and label">
      <Note className="relative shrink-0 size-[24px]" />
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#44483b] text-[14px] text-center text-nowrap tracking-[0.1px]">
        <p className="leading-[20px] whitespace-pre">Notat</p>
      </div>
    </div>
  );
}

function TabContents1() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center justify-center min-h-px min-w-px relative shrink-0" data-name="Tab Contents">
      <IconAndLabel1 />
    </div>
  );
}

function StateLayer9() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="State-layer">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col items-center justify-center px-[16px] py-[12px] relative size-full">
          <TabContents1 />
        </div>
      </div>
    </div>
  );
}

function TabGroup() {
  return (
    <div className="content-stretch cursor-pointer flex items-start relative shrink-0 w-full" data-name="Tab group">
      <Tab2 />
      <Tab4 />
    </div>
  );
}

function StateLayer10() {
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

function StateLayer11() {
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

/**
 * @figmaAssetKey b016f6a510eebef46377ecdc66da6f98ff296421
 */
export default function AnswerSection() {
  return (
    <div className="relative size-full" data-name="Answer Section">
      <div className="flex flex-col items-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] items-center px-[40px] py-0 relative size-full">
          <AsnwerHeading />
          <AnswerAlternatives />
          <ProducerAnswerTabs />
          <Actions />
        </div>
      </div>
    </div>
  );
}