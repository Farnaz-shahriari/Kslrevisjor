import svgPaths from "./svg-rbg17wu6my";
import imgMap from "figma:asset/c0527853f7bdf08aa49e67977a1c1456feddc02b.png";

function Content9({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative rounded-[100px] shrink-0">
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[inherit]">{children}</div>
      <div aria-hidden="true" className="absolute border border-[#c4c8b7] border-solid inset-0 pointer-events-none rounded-[100px]" />
    </div>
  );
}

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        {children}
      </svg>
    </div>
  );
}
type StateLayer2Props = {
  text: string;
  text1: string;
};

function StateLayer2({ children, text, text1 }: React.PropsWithChildren<StateLayer2Props>) {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[16px] py-0 relative size-full">
          <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center leading-[0] min-h-px min-w-px overflow-clip relative shrink-0 tracking-[0.5px]">
            <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[#44483b] text-[12px] w-full">
              <p className="leading-[16px]">{text}</p>
            </div>
            <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#1a1c16] text-[16px] w-full">
              <p className="leading-[24px]">{text1}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
type StateLayerTextProps = {
  text: string;
};

function StateLayerText({ text }: StateLayerTextProps) {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center px-[24px] py-[16px] relative shrink-0">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#44483b] text-[16px] text-nowrap tracking-[0.15px]">
        <p className="leading-[24px] whitespace-pre">{text}</p>
      </div>
    </div>
  );
}

function Map() {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative self-stretch shrink-0" data-name="map">
      <div className="aspect-[584/297] basis-0 grow min-h-px min-w-px relative shrink-0" data-name="map">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgMap} />
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start leading-[0] min-h-px min-w-px overflow-clip relative shrink-0 tracking-[0.5px]" data-name="Content">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[#44483b] text-[12px] w-full">
        <p className="leading-[16px]">Adresse</p>
      </div>
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[24px] relative shrink-0 text-[#1a1c16] text-[16px] w-full">
        <p className="mb-0">HOLTEVEIEN 138</p>
        <p>4639 Kristiansand s</p>
      </div>
    </div>
  );
}

function StateLayer() {
  return (
    <div className="relative shrink-0 w-full" data-name="state-layer">
      <div className="size-full">
        <div className="content-stretch flex gap-[16px] items-start px-[16px] py-[4px] relative w-full">
          <Content />
        </div>
      </div>
    </div>
  );
}

function ListItemListItem4Density() {
  return (
    <div className="content-stretch flex flex-col items-center min-h-[72px] relative shrink-0 w-[360px]" data-name="List item/List Item: -4 Density">
      <StateLayer />
    </div>
  );
}

function ExpandLess() {
  return (
    <Wrapper>
      <g id="expand_less">
        <path d={svgPaths.p2b8d2f00} fill="var(--fill-0, #44483B)" id="Vector" />
      </g>
    </Wrapper>
  );
}

function LeadingElement() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Leading element">
      <ExpandLess />
    </div>
  );
}

function Content1() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] tracking-[0.5px] w-full">
        <p className="leading-[24px]">Detaljer</p>
      </div>
    </div>
  );
}

function StateLayer1() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[16px] items-center justify-center px-[16px] py-0 relative size-full">
          <LeadingElement />
          <Content1 />
        </div>
      </div>
    </div>
  );
}

function ListItemListItem4Density1() {
  return (
    <div className="content-stretch flex flex-col h-[40px] items-center justify-center min-h-[40px] relative shrink-0 w-[360px]" data-name="List item/List Item: -4 Density">
      <StateLayer1 />
    </div>
  );
}

function ListItemListItem4Density2() {
  return (
    <div className="content-stretch flex flex-col h-[56px] items-center justify-center min-h-[56px] relative shrink-0 w-[360px]" data-name="List item/List Item: -4 Density">
      <StateLayer2 text="Organisasjonsnummer" text1="4204015467" />
    </div>
  );
}

function ListItemListItem4Density3() {
  return (
    <div className="content-stretch flex flex-col h-[56px] items-center justify-center min-h-[56px] relative shrink-0 w-[360px]" data-name="List item/List Item: -4 Density">
      <StateLayer2 text="Produsentnummer" text1="4204015467" />
    </div>
  );
}

function ListItemListItem4Density4() {
  return (
    <div className="content-stretch flex flex-col h-[56px] items-center justify-center min-h-[56px] relative shrink-0 w-[360px]" data-name="List item/List Item: -4 Density">
      <StateLayer2 text="Gammelt produsentnummer" text1="1001022563" />
    </div>
  );
}

function ListItemListItem4Density5() {
  return (
    <div className="content-stretch flex flex-col h-[56px] items-center justify-center min-h-[56px] relative shrink-0 w-[360px]" data-name="List item/List Item: -4 Density">
      <StateLayer2 text="Gårds- og bruksnummer" text1="Gårdsnr. 92, bruksnr. 1" />
    </div>
  );
}

function AdditionalDetails() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Additional Details">
      <ListItemListItem4Density1 />
      <ListItemListItem4Density2 />
      <ListItemListItem4Density3 />
      <ListItemListItem4Density4 />
      <ListItemListItem4Density5 />
    </div>
  );
}

function CompanyDetails() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start p-[12px] relative shrink-0 w-[360px]" data-name="company Details">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] text-nowrap tracking-[0.15px]">
        <p className="leading-[24px] whitespace-pre">Haugseter Gård</p>
      </div>
      <ListItemListItem4Density />
      <AdditionalDetails />
    </div>
  );
}

function ListItemListItem4Density6() {
  return (
    <div className="content-stretch flex flex-col h-[56px] items-center justify-center min-h-[56px] relative shrink-0 w-full" data-name="List item/List Item: -4 Density">
      <StateLayer2 text="Dato" text1="05/12/2025" />
    </div>
  );
}

function ListItemListItem4Density7() {
  return (
    <div className="content-stretch flex flex-col h-[56px] items-center justify-center min-h-[56px] relative shrink-0 w-full" data-name="List item/List Item: -4 Density">
      <StateLayer2 text="Tidspunkt" text1="08:00 til 10:00" />
    </div>
  );
}

function Content2() {
  return (
    <Content9>
      <StateLayerText text="Endre revisjonstidspunkt" />
    </Content9>
  );
}

function Button() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Button">
      <Content2 />
    </div>
  );
}

function Content3() {
  return (
    <Content9>
      <StateLayerText text="Slett avtale" />
    </Content9>
  );
}

function Button1() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Button">
      <Content3 />
    </div>
  );
}

function RevisionDetails() {
  return (
    <div className="bg-[#fafaf0] content-stretch flex flex-col gap-[8px] items-start p-[12px] relative rounded-[12px] self-stretch shrink-0 w-[360px]" data-name="Revision Details">
      <div aria-hidden="true" className="absolute border border-[#c4c8b7] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] text-nowrap tracking-[0.15px]">
        <p className="leading-[24px] whitespace-pre">Revisjonstidspunkt</p>
      </div>
      <ListItemListItem4Density6 />
      <ListItemListItem4Density7 />
      <Button />
      <Button1 />
    </div>
  );
}

function MapAndDetails() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full" data-name="Map and Details">
      <Map />
      <CompanyDetails />
      <RevisionDetails />
    </div>
  );
}

function Content4() {
  return (
    <Content9>
      <StateLayerText text="Skriv ut varslingsbrev" />
    </Content9>
  );
}

function Button2() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Button 01">
      <Content4 />
    </div>
  );
}

function Content5() {
  return (
    <Content9>
      <StateLayerText text="Skriv ut plan" />
    </Content9>
  );
}

function Button3() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Button 02">
      <Content5 />
    </div>
  );
}

function Content6() {
  return (
    <Content9>
      <StateLayerText text="Eskaler til Stiftelsen Norsk Mat" />
    </Content9>
  );
}

function Button4() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Button 03">
      <Content6 />
    </div>
  );
}

function Content7() {
  return (
    <Content9>
      <StateLayerText text="Be om revisjon" />
    </Content9>
  );
}

function Button5() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Button 04">
      <Content7 />
    </div>
  );
}

function Icon() {
  return (
    <Wrapper>
      <g>
        <path d={svgPaths.p3fd9e500} fill="var(--fill-0, #44483B)" id="Vector" />
      </g>
    </Wrapper>
  );
}

function StateLayer3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center px-[24px] py-[16px] relative shrink-0" data-name="State-layer">
      <Icon />
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#44483b] text-[16px] text-nowrap tracking-[0.15px]">
        <p className="leading-[24px] whitespace-pre">Avvis</p>
      </div>
    </div>
  );
}

function Content8() {
  return (
    <Content9>
      <StateLayer3 />
    </Content9>
  );
}

function Button6() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Button 05">
      <Content8 />
    </div>
  );
}

function StandardButtonGroup() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[1424px]" data-name="Standard button group">
      <Button2 />
      <Button3 />
      <Button4 />
      <Button5 />
      <Button6 />
    </div>
  );
}

function ActionButtons() {
  return (
    <div className="content-stretch flex flex-col items-start px-0 py-[24px] relative shrink-0 w-full" data-name="Action Buttons">
      <StandardButtonGroup />
    </div>
  );
}

export default function Heading() {
  return (
    <div className="relative size-full" data-name="Heading">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start justify-center pb-[32px] pt-[12px] px-[40px] relative size-full">
          <MapAndDetails />
          <ActionButtons />
        </div>
      </div>
    </div>
  );
}