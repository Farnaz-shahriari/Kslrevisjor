import svgPaths from "./svg-nbjngogatf";

function Content() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start leading-[0] min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[#44483b] text-[12px] tracking-[0.5px] w-full">
        <p className="leading-[16px]">Solvang Gård</p>
      </div>
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#1a1c16] text-[16px] tracking-[0.5px] w-full">
        <p className="leading-[24px]">Forespørsel om digitalt besøk</p>
      </div>
      <div className="font-['Manrope:SemiBold',sans-serif] font-semibold relative shrink-0 text-[#ba1a1a] text-[0px] tracking-[0.1px] w-full">
        <p className="leading-[20px] mb-0 text-[14px]">{`Stort avvik `}</p>
        <p className="font-['Manrope:Medium',sans-serif] font-medium leading-[16px] text-[#44483b] text-[12px] tracking-[0.5px]">1.1.4 Er utstyr som krever det, kontrollert og sertifisert i tråd med forskrifter?</p>
      </div>
    </div>
  );
}

function OpenInNew() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="open_in_new">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="open_in_new">
          <path d={svgPaths.p13453dc0} fill="var(--fill-0, #44483B)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function TrailingElement() {
  return (
    <div className="content-stretch flex gap-[10px] h-[64px] items-start relative shrink-0" data-name="Trailing element">
      <OpenInNew />
    </div>
  );
}

function StateLayer() {
  return (
    <div className="relative shrink-0 w-full" data-name="state-layer">
      <div className="content-stretch flex gap-[16px] items-start px-[16px] py-[12px] relative w-full">
        <Content />
        <TrailingElement />
      </div>
    </div>
  );
}

function ListItemListItem0Density() {
  return (
    <div className="content-stretch flex flex-col items-center min-h-[88px] relative shrink-0 w-full" data-name="List item/List Item: 0 Density">
      <StateLayer />
    </div>
  );
}

function Today() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="today">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="today">
          <path d={svgPaths.p13a8df70} fill="var(--fill-0, #44483B)" id="icon" />
        </g>
      </svg>
    </div>
  );
}

function LeadingElement() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Leading element">
      <Today />
    </div>
  );
}

function Content1() {
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

function StateLayer1() {
  return (
    <div className="content-stretch flex gap-[16px] h-[56px] items-center justify-center relative shrink-0 w-full" data-name="state-layer">
      <LeadingElement />
      <Content1 />
    </div>
  );
}

function ListItemListItem4Density() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center min-h-[56px] relative shrink-0 w-full" data-name="List item/List Item: -4 Density">
      <StateLayer1 />
    </div>
  );
}

function StateLayer2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[10px] relative shrink-0" data-name="State-layer">
      <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#44483b] text-[14px] text-nowrap tracking-[0.1px]">
        <p className="leading-[20px]">Foreslå nytt tidspunkt</p>
      </div>
    </div>
  );
}

function Content2() {
  return (
    <div className="relative rounded-[100px] shrink-0" data-name="Content">
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[inherit]">
        <StateLayer2 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#c4c8b7] border-solid inset-0 pointer-events-none rounded-[100px]" />
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch flex h-[48px] items-center justify-center relative shrink-0" data-name="Button">
      <Content2 />
    </div>
  );
}

function Check() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="check">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="check">
          <path d={svgPaths.p1a6828c0} fill="var(--fill-0, #44483B)" id="icon" />
        </g>
      </svg>
    </div>
  );
}

function StateLayer3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[10px] relative shrink-0" data-name="State-layer">
      <Check />
      <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#44483b] text-[14px] text-nowrap tracking-[0.1px]">
        <p className="leading-[20px]">Godta tidspunkt</p>
      </div>
    </div>
  );
}

function Content3() {
  return (
    <div className="relative rounded-[100px] shrink-0" data-name="Content">
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[inherit]">
        <StateLayer3 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#c4c8b7] border-solid inset-0 pointer-events-none rounded-[100px]" />
    </div>
  );
}

function Button1() {
  return (
    <div className="content-stretch flex h-[48px] items-center justify-center relative shrink-0" data-name="Button">
      <Content3 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
      <Button />
      <Button1 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full z-[1]">
      <ListItemListItem4Density />
      <Frame1 />
    </div>
  );
}

function Attachment() {
  return (
    <div className="relative shrink-0 w-full" data-name="Attachment">
      <div className="content-stretch flex flex-col isolate items-start px-[16px] py-[8px] relative w-full">
        <Frame5 />
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start px-0 py-[8px] relative rounded-[12px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#c4c8b7] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.3),0px_2px_6px_2px_rgba(0,0,0,0.15)]" />
      <ListItemListItem0Density />
      <Attachment />
    </div>
  );
}

function Content4() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start leading-[0] min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[#44483b] text-[12px] tracking-[0.5px] w-full">
        <p className="leading-[16px]">Bjørkli Økologiske</p>
      </div>
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#1a1c16] text-[16px] tracking-[0.5px] w-full">
        <p className="leading-[24px]">Forespørsel om fysisk besøk</p>
      </div>
      <div className="-webkit-box font-['Manrope:SemiBold',sans-serif] font-semibold overflow-ellipsis overflow-hidden relative shrink-0 text-[#ba1a1a] text-[0px] tracking-[0.1px] w-full">
        <p className="leading-[20px] mb-0 text-[#932601] text-[14px]">{`Stort avvik `}</p>
        <p className="font-['Manrope:Medium',sans-serif] font-medium leading-[16px] text-[#44483b] text-[12px] tracking-[0.5px]">1.2.1 KRAV TIL PRODUKSJONSSTED, Klikk på neste spørsmål for å starte med denne gruppen.</p>
      </div>
    </div>
  );
}

function OpenInNew1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="open_in_new">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="open_in_new">
          <path d={svgPaths.p13453dc0} fill="var(--fill-0, #44483B)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function TrailingElement1() {
  return (
    <div className="content-stretch flex gap-[10px] h-[64px] items-start relative shrink-0" data-name="Trailing element">
      <OpenInNew1 />
    </div>
  );
}

function StateLayer4() {
  return (
    <div className="relative shrink-0 w-full" data-name="state-layer">
      <div className="content-stretch flex gap-[16px] items-start px-[16px] py-[12px] relative w-full">
        <Content4 />
        <TrailingElement1 />
      </div>
    </div>
  );
}

function ListItemListItem0Density1() {
  return (
    <div className="content-stretch flex flex-col items-start min-h-[88px] relative rounded-[12px] shrink-0 w-full" data-name="List item/List Item: 0 Density">
      <StateLayer4 />
    </div>
  );
}

function Today1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="today">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="today">
          <path d={svgPaths.p13a8df70} fill="var(--fill-0, #44483B)" id="icon" />
        </g>
      </svg>
    </div>
  );
}

function LeadingElement1() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Leading element">
      <Today1 />
    </div>
  );
}

function Content5() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center leading-[0] min-h-px min-w-px overflow-clip relative shrink-0 text-[#44483b] tracking-[0.5px]" data-name="Content">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[12px] w-full">
        <p className="leading-[16px]">Forslag til fysisk besøk</p>
      </div>
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[16px] w-full">
        <p className="leading-[24px]">16. juni 2025</p>
      </div>
    </div>
  );
}

function StateLayer5() {
  return (
    <div className="content-stretch flex gap-[16px] h-[56px] items-center justify-center relative shrink-0 w-full" data-name="state-layer">
      <LeadingElement1 />
      <Content5 />
    </div>
  );
}

function ListItemListItem4Density1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center min-h-[56px] relative shrink-0 w-full" data-name="List item/List Item: -4 Density">
      <StateLayer5 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full">
      <ListItemListItem4Density1 />
    </div>
  );
}

function StateLayer6() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[10px] relative shrink-0" data-name="State-layer">
      <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#44483b] text-[14px] text-nowrap tracking-[0.1px]">
        <p className="leading-[20px]">Foreslå nytt tidspunkt</p>
      </div>
    </div>
  );
}

function Content6() {
  return (
    <div className="relative rounded-[100px] shrink-0" data-name="Content">
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[inherit]">
        <StateLayer6 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#c4c8b7] border-solid inset-0 pointer-events-none rounded-[100px]" />
    </div>
  );
}

function Button2() {
  return (
    <div className="content-stretch flex h-[48px] items-center justify-center relative shrink-0" data-name="Button">
      <Content6 />
    </div>
  );
}

function Check1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="check">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="check">
          <path d={svgPaths.p1a6828c0} fill="var(--fill-0, #44483B)" id="icon" />
        </g>
      </svg>
    </div>
  );
}

function StateLayer7() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[10px] relative shrink-0" data-name="State-layer">
      <Check1 />
      <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#44483b] text-[14px] text-nowrap tracking-[0.1px]">
        <p className="leading-[20px]">Godta tidspunkt</p>
      </div>
    </div>
  );
}

function Content7() {
  return (
    <div className="relative rounded-[100px] shrink-0" data-name="Content">
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[inherit]">
        <StateLayer7 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#c4c8b7] border-solid inset-0 pointer-events-none rounded-[100px]" />
    </div>
  );
}

function Button3() {
  return (
    <div className="content-stretch flex h-[48px] items-center justify-center relative shrink-0" data-name="Button">
      <Content7 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0">
      <Button2 />
      <Button3 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[8px] items-start px-[16px] py-0 relative w-full">
        <Frame6 />
        <Frame7 />
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start px-0 py-[8px] relative rounded-[12px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#c4c8b7] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.3),0px_2px_6px_2px_rgba(0,0,0,0.15)]" />
      <ListItemListItem0Density1 />
      <Frame11 />
    </div>
  );
}

function Content8() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start leading-[0] min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[#44483b] text-[12px] tracking-[0.5px] w-full">
        <p className="leading-[16px]">Bjørkli Økologiske</p>
      </div>
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#1a1c16] text-[16px] tracking-[0.5px] w-full">
        <p className="leading-[24px]">Dokumentasjon er lastet opp</p>
      </div>
      <div className="-webkit-box font-['Manrope:SemiBold',sans-serif] font-semibold overflow-ellipsis overflow-hidden relative shrink-0 text-[#ba1a1a] text-[0px] tracking-[0.1px] w-full">
        <p className="leading-[20px] mb-0 text-[#705400] text-[14px]">{`Avvik `}</p>
        <p className="font-['Manrope:Medium',sans-serif] font-medium leading-[16px] text-[#44483b] text-[12px] tracking-[0.5px]">1.2.1 KRAV TIL PRODUKSJONSSTED, Klikk på neste spørsmål for å starte med denne gruppen.</p>
      </div>
    </div>
  );
}

function OpenInNew2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="open_in_new">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="open_in_new">
          <path d={svgPaths.p13453dc0} fill="var(--fill-0, #44483B)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function TrailingElement2() {
  return (
    <div className="content-stretch flex gap-[10px] h-[64px] items-start relative shrink-0" data-name="Trailing element">
      <OpenInNew2 />
    </div>
  );
}

function StateLayer8() {
  return (
    <div className="relative shrink-0 w-full" data-name="state-layer">
      <div className="content-stretch flex gap-[16px] items-start px-[16px] py-[12px] relative w-full">
        <Content8 />
        <TrailingElement2 />
      </div>
    </div>
  );
}

function ListItemListItem0Density2() {
  return (
    <div className="content-stretch flex flex-col items-start min-h-[88px] relative rounded-[12px] shrink-0 w-full" data-name="List item/List Item: 0 Density">
      <StateLayer8 />
    </div>
  );
}

function AttachFile() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="attach_file">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="attach_file">
          <path d={svgPaths.p11961400} fill="var(--fill-0, #44483B)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function LeadingElement2() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Leading element">
      <AttachFile />
    </div>
  );
}

function Content9() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center leading-[0] min-h-px min-w-px overflow-clip relative shrink-0 text-[#44483b] tracking-[0.5px]" data-name="Content">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[12px] w-full">
        <p className="leading-[16px]">Attachment</p>
      </div>
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[16px] w-full">
        <p className="leading-[24px]">kontrollrapport.jpg</p>
      </div>
    </div>
  );
}

function Download() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="download">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="download">
          <path d={svgPaths.p16f45de0} fill="var(--fill-0, #44483B)" id="icon" />
        </g>
      </svg>
    </div>
  );
}

function TrailingElement3() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="Trailing element">
      <Download />
    </div>
  );
}

function StateLayer9() {
  return (
    <div className="content-stretch flex gap-[16px] h-[56px] items-center relative shrink-0 w-full" data-name="state-layer">
      <LeadingElement2 />
      <Content9 />
      <TrailingElement3 />
    </div>
  );
}

function ListItemListItem4Density2() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center min-h-[56px] relative shrink-0 w-[280px]" data-name="List item/List Item: -4 Density">
      <StateLayer9 />
    </div>
  );
}

function StateLayer10() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[10px] relative shrink-0" data-name="State-layer">
      <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#44483b] text-[14px] text-nowrap tracking-[0.1px]">
        <p className="leading-[20px]">Avvis dokument og be om nytt</p>
      </div>
    </div>
  );
}

function Content10() {
  return (
    <div className="relative rounded-[100px] shrink-0" data-name="Content">
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[inherit]">
        <StateLayer10 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#c4c8b7] border-solid inset-0 pointer-events-none rounded-[100px]" />
    </div>
  );
}

function Button4() {
  return (
    <div className="content-stretch flex h-[48px] items-center justify-center relative shrink-0" data-name="Button">
      <Content10 />
    </div>
  );
}

function StateLayer11() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[10px] relative shrink-0" data-name="State-layer">
      <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#44483b] text-[14px] text-nowrap tracking-[0.1px]">
        <p className="leading-[20px]">Lukk avviket</p>
      </div>
    </div>
  );
}

function Content11() {
  return (
    <div className="relative rounded-[100px] shrink-0" data-name="Content">
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[inherit]">
        <StateLayer11 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#c4c8b7] border-solid inset-0 pointer-events-none rounded-[100px]" />
    </div>
  );
}

function Button5() {
  return (
    <div className="content-stretch flex h-[48px] items-center justify-center relative shrink-0" data-name="Button">
      <Content11 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0">
      <Button4 />
      <Button5 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[8px] items-start px-[16px] py-0 relative w-full">
        <ListItemListItem4Density2 />
        <Frame9 />
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start px-0 py-[8px] relative rounded-[12px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#c4c8b7] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.3),0px_2px_6px_2px_rgba(0,0,0,0.15)]" />
      <ListItemListItem0Density2 />
      <Frame12 />
    </div>
  );
}

function Content12() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start leading-[0] min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[#44483b] text-[12px] tracking-[0.5px] w-full">
        <p className="leading-[16px]">Bjørkli Økologiske</p>
      </div>
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#1a1c16] text-[16px] tracking-[0.5px] w-full">
        <p className="leading-[24px]">Fjellstad Bruk</p>
      </div>
      <div className="-webkit-box font-['Manrope:SemiBold',sans-serif] font-semibold overflow-ellipsis overflow-hidden relative shrink-0 text-[#ba1a1a] text-[0px] tracking-[0.1px] w-full">
        <p className="leading-[20px] mb-0 text-[#705400] text-[14px]">{`Avvik `}</p>
        <p className="font-['Manrope:Medium',sans-serif] font-medium leading-[16px] text-[#44483b] text-[12px] tracking-[0.5px]">1.2.3 KRAV TIL PRODUKSJONSSTED, Klikk på neste spørsmål for å starte med denne gruppen.</p>
      </div>
    </div>
  );
}

function OpenInNew3() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="open_in_new">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="open_in_new">
          <path d={svgPaths.p13453dc0} fill="var(--fill-0, #44483B)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function TrailingElement4() {
  return (
    <div className="content-stretch flex gap-[10px] h-[64px] items-start relative shrink-0" data-name="Trailing element">
      <OpenInNew3 />
    </div>
  );
}

function StateLayer12() {
  return (
    <div className="relative shrink-0 w-full" data-name="state-layer">
      <div className="content-stretch flex gap-[16px] items-start px-[16px] py-[12px] relative w-full">
        <Content12 />
        <TrailingElement4 />
      </div>
    </div>
  );
}

function ListItemListItem0Density3() {
  return (
    <div className="content-stretch flex flex-col items-start min-h-[88px] relative rounded-[12px] shrink-0 w-full" data-name="List item/List Item: 0 Density">
      <StateLayer12 />
    </div>
  );
}

function AttachFile1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="attach_file">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="attach_file">
          <path d={svgPaths.p11961400} fill="var(--fill-0, #44483B)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function LeadingElement3() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Leading element">
      <AttachFile1 />
    </div>
  );
}

function Content13() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center leading-[0] min-h-px min-w-px overflow-clip relative shrink-0 text-[#44483b] tracking-[0.5px]" data-name="Content">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[12px] w-full">
        <p className="leading-[16px]">Attachment</p>
      </div>
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[16px] w-full">
        <p className="leading-[24px]">kontrollrapport.jpg</p>
      </div>
    </div>
  );
}

function Download1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="download">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="download">
          <path d={svgPaths.p16f45de0} fill="var(--fill-0, #44483B)" id="icon" />
        </g>
      </svg>
    </div>
  );
}

function TrailingElement5() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="Trailing element">
      <Download1 />
    </div>
  );
}

function StateLayer13() {
  return (
    <div className="content-stretch flex gap-[16px] h-[56px] items-center relative shrink-0 w-full" data-name="state-layer">
      <LeadingElement3 />
      <Content13 />
      <TrailingElement5 />
    </div>
  );
}

function ListItemListItem4Density3() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center min-h-[56px] relative shrink-0 w-[280px]" data-name="List item/List Item: -4 Density">
      <StateLayer13 />
    </div>
  );
}

function StateLayer14() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[10px] relative shrink-0" data-name="State-layer">
      <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#44483b] text-[14px] text-nowrap tracking-[0.1px]">
        <p className="leading-[20px]">Avvis dokument og be om nytt</p>
      </div>
    </div>
  );
}

function Content14() {
  return (
    <div className="relative rounded-[100px] shrink-0" data-name="Content">
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[inherit]">
        <StateLayer14 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#c4c8b7] border-solid inset-0 pointer-events-none rounded-[100px]" />
    </div>
  );
}

function Button6() {
  return (
    <div className="content-stretch flex h-[48px] items-center justify-center relative shrink-0" data-name="Button">
      <Content14 />
    </div>
  );
}

function StateLayer15() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[10px] relative shrink-0" data-name="State-layer">
      <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#44483b] text-[14px] text-nowrap tracking-[0.1px]">
        <p className="leading-[20px]">Lukk avviket</p>
      </div>
    </div>
  );
}

function Content15() {
  return (
    <div className="relative rounded-[100px] shrink-0" data-name="Content">
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[inherit]">
        <StateLayer15 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#c4c8b7] border-solid inset-0 pointer-events-none rounded-[100px]" />
    </div>
  );
}

function Button7() {
  return (
    <div className="content-stretch flex h-[48px] items-center justify-center relative shrink-0" data-name="Button">
      <Content15 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0">
      <Button6 />
      <Button7 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[8px] items-start px-[16px] py-0 relative w-full">
        <ListItemListItem4Density3 />
        <Frame10 />
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start px-0 py-[8px] relative rounded-[12px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#c4c8b7] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.3),0px_2px_6px_2px_rgba(0,0,0,0.15)]" />
      <ListItemListItem0Density3 />
      <Frame13 />
    </div>
  );
}

export default function Frame() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[8px] items-start px-[24px] py-[8px] relative rounded-[12px] size-full">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] text-center text-nowrap tracking-[0.15px]">
        <p className="leading-[24px]">Til handling nå</p>
      </div>
      <Frame4 />
      <Frame8 />
      <Frame2 />
      {[...Array(2).keys()].map((_, i) => (
        <Frame3 key={i} />
      ))}
    </div>
  );
}