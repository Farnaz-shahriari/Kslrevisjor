import svgPaths from "./svg-ki4jhp4zut";
import clsx from "clsx";
import imgMap from "figma:asset/c0527853f7bdf08aa49e67977a1c1456feddc02b.png";

function Content9({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative rounded-[100px] shrink-0">
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[inherit]">{children}</div>
      <div aria-hidden="true" className="absolute border border-[#c4c8b7] border-solid inset-0 pointer-events-none rounded-[100px]" />
    </div>
  );
}

function Wrapper1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        {children}
      </svg>
    </div>
  );
}
type WrapperProps = {
  additionalClassNames?: string;
};

function Wrapper({ children, additionalClassNames = "" }: React.PropsWithChildren<WrapperProps>) {
  return (
    <div className={clsx("content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative size-full", additionalClassNames)}>
      <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0">{children}</div>
    </div>
  );
}
type StateLayer11Props = {
  text: string;
};

function StateLayer11({ children, text }: React.PropsWithChildren<StateLayer11Props>) {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <Wrapper>
          <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full relative shrink-0 text-[#1a1c16] text-[14px] tracking-[0.25px] w-[min-content]">
            <p className="leading-[20px]">{text}</p>
          </div>
        </Wrapper>
      </div>
    </div>
  );
}
type StateLayer10Props = {
  text: string;
};

function StateLayer10({ children, text }: React.PropsWithChildren<StateLayer10Props>) {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <Wrapper additionalClassNames="justify-center">
          <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] overflow-ellipsis overflow-hidden relative shrink-0 text-[#1a1c16] text-[14px] text-nowrap tracking-[0.1px] w-full">
            <p className="[white-space-collapse:collapse] leading-[20px] overflow-ellipsis overflow-hidden">{text}</p>
          </div>
        </Wrapper>
      </div>
    </div>
  );
}

function StateLayer12({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[16px] py-[14px] relative size-full">{children}</div>
      </div>
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

function Divider2() {
  return (
    <div className="h-px relative shrink-0 w-full">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 344 1">
        <g id="Divider">
          <line id="Divider_2" stroke="var(--stroke-0, #C4C8B7)" x1="4.37114e-08" x2="344" y1="0.50003" y2="0.5" />
        </g>
      </svg>
    </div>
  );
}

function Divider1() {
  return (
    <div className="h-px relative shrink-0 w-full">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 1">
        <g id="Divider">
          <line id="Divider_2" stroke="var(--stroke-0, #C4C8B7)" x1="4.37114e-08" x2="32" y1="0.500028" y2="0.500025" />
        </g>
      </svg>
    </div>
  );
}

function StateLayer9() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[16px] py-[8px] size-full" />
      </div>
    </div>
  );
}
type TabContentsTextProps = {
  text: string;
};

function TabContentsText({ text }: TabContentsTextProps) {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center justify-center min-h-px min-w-px relative shrink-0">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#44483b] text-[14px] text-center text-nowrap tracking-[0.1px]">
        <p className="leading-[20px] whitespace-pre">{text}</p>
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
    <Wrapper1>
      <g id="expand_less">
        <path d={svgPaths.p2b8d2f00} fill="var(--fill-0, #44483B)" id="Vector" />
      </g>
    </Wrapper1>
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
    <Wrapper1>
      <g>
        <path d={svgPaths.p3fd9e500} fill="var(--fill-0, #44483B)" id="Vector" />
      </g>
    </Wrapper1>
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

function Heading() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start justify-center pb-[32px] pt-[12px] px-[40px] relative w-full">
          <MapAndDetails />
          <ActionButtons />
        </div>
      </div>
    </div>
  );
}

function TabContents() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center justify-center min-h-px min-w-px relative shrink-0" data-name="Tab Contents">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[14px] text-center text-nowrap tracking-[0.1px]">
        <p className="leading-[20px] whitespace-pre">Kontaktinformasjon</p>
      </div>
    </div>
  );
}

function StateLayer4() {
  return (
    <StateLayer12>
      <TabContents />
      <div className="absolute bg-[#4a671e] bottom-0 h-[2px] left-0 right-0" data-name="Indicator" />
    </StateLayer12>
  );
}

function Tab() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[48px] items-center justify-end overflow-clip relative shrink-0" data-name="Tab 1">
      <StateLayer4 />
    </div>
  );
}

function StateLayer5() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-center justify-center min-h-px min-w-px overflow-clip px-[16px] py-[14px] relative shrink-0" data-name="State-layer">
      <TabContentsText text="Foretakets ordninger" />
    </div>
  );
}

function Tab1() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[48px] items-center justify-end overflow-clip relative shrink-0" data-name="Tab 2">
      <StateLayer5 />
    </div>
  );
}

function StateLayer6() {
  return (
    <StateLayer12>
      <TabContentsText text="Brev og varsler til foretaket" />
    </StateLayer12>
  );
}

function Tab2() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[48px] items-center justify-end overflow-clip relative shrink-0" data-name="Tab 3">
      <StateLayer6 />
    </div>
  );
}

function StateLayer7() {
  return (
    <StateLayer12>
      <TabContentsText text="Varemottakere" />
    </StateLayer12>
  );
}

function Tab3() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[48px] items-center justify-end overflow-clip relative shrink-0" data-name="Tab 4">
      <StateLayer7 />
    </div>
  );
}

function StateLayer8() {
  return (
    <StateLayer12>
      <TabContentsText text="Logg" />
    </StateLayer12>
  );
}

function Tab4() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[48px] items-center justify-end overflow-clip relative shrink-0" data-name="Tab 5">
      <StateLayer8 />
    </div>
  );
}

function TabGroup() {
  return (
    <div className="relative shrink-0 w-full" data-name="Tab group">
      <div className="size-full">
        <div className="content-stretch flex items-start pl-[52px] pr-0 py-0 relative w-full">
          <Tab />
          <Tab1 />
          <Tab2 />
          <Tab3 />
          <Tab4 />
        </div>
      </div>
    </div>
  );
}

function Divider() {
  return (
    <div className="h-[2px] relative shrink-0 w-full" data-name="Divider">
      <div className="absolute inset-[0_0_-0.01%_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1504 2">
          <g id="Divider">
            <line id="Divider_2" stroke="var(--stroke-0, #E3E3D9)" strokeWidth="2" x1="8.74228e-08" x2="1504" y1="1.00013" y2="1" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Tabs() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Tabs">
      <TabGroup />
      <Divider />
    </div>
  );
}

function ListItemListItem0Density() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-start justify-center min-h-[56px]" data-name="List item/List Item: 0 Density">
      <StateLayer9 />
      <Divider1 />
    </div>
  );
}

function ChipCells() {
  return (
    <div className="h-[56px] relative shrink-0 w-full" data-name="Chip cells">
      <ListItemListItem0Density />
    </div>
  );
}

function ListItemListItem0Density1() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-start justify-center min-h-[56px]" data-name="List item/List Item: 0 Density">
      <StateLayer9 />
      <Divider1 />
    </div>
  );
}

function ChipCells1() {
  return (
    <div className="h-[80px] relative shrink-0 w-full" data-name="Chip cells">
      <ListItemListItem0Density1 />
    </div>
  );
}

function TableColumn() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[32px]" data-name="Table Column">
      <ChipCells />
      {[...Array(2).keys()].map((_, i) => (
        <ChipCells1 key={i} />
      ))}
    </div>
  );
}

function ListItemListItem0Density2() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-center justify-center min-h-[56px] min-w-px relative shrink-0 w-full" data-name="List item/List Item: 0 Density">
      <StateLayer10 text="Område" />
      <Divider2 />
    </div>
  );
}

function ChipCells2() {
  return (
    <div className="content-stretch flex flex-col h-[56px] items-start relative shrink-0 w-full" data-name="Chip cells">
      <ListItemListItem0Density2 />
    </div>
  );
}

function ListItemListItem0Density3() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-center justify-center min-h-[56px] min-w-px relative shrink-0 w-full" data-name="List item/List Item: 0 Density">
      <StateLayer11 text="Generell kontaktinformasjon" />
      <Divider2 />
    </div>
  );
}

function ChipCells3() {
  return (
    <div className="content-stretch flex flex-col h-[80px] items-start relative shrink-0 w-full" data-name="Chip cells">
      <ListItemListItem0Density3 />
    </div>
  );
}

function TableColumn1() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="Table Column">
      <ChipCells2 />
      {[...Array(2).keys()].map((_, i) => (
        <ChipCells3 key={i} />
      ))}
    </div>
  );
}

function Table() {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0" data-name="Table">
      <TableColumn />
      <TableColumn1 />
    </div>
  );
}

function ListItemListItem0Density4() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-start justify-center min-h-[56px]" data-name="List item/List Item: 0 Density">
      <StateLayer9 />
      <Divider1 />
    </div>
  );
}

function ChipCells4() {
  return (
    <div className="h-[56px] relative shrink-0 w-full" data-name="Chip cells">
      <ListItemListItem0Density4 />
    </div>
  );
}

function ListItemListItem0Density5() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-start justify-center min-h-[56px]" data-name="List item/List Item: 0 Density">
      <StateLayer9 />
      <Divider1 />
    </div>
  );
}

function ChipCells5() {
  return (
    <div className="h-[80px] relative shrink-0 w-full" data-name="Chip cells">
      <ListItemListItem0Density5 />
    </div>
  );
}

function TableColumn2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[32px]" data-name="Table Column">
      <ChipCells4 />
      {[...Array(2).keys()].map((_, i) => (
        <ChipCells5 key={i} />
      ))}
    </div>
  );
}

function ListItemListItem0Density6() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-center justify-center min-h-[56px] min-w-px relative shrink-0 w-full" data-name="List item/List Item: 0 Density">
      <StateLayer10 text="Navn" />
      <Divider2 />
    </div>
  );
}

function ChipCells6() {
  return (
    <div className="content-stretch flex flex-col h-[56px] items-start relative shrink-0 w-full" data-name="Chip cells">
      <ListItemListItem0Density6 />
    </div>
  );
}

function ListItemListItem0Density7() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-center justify-center min-h-[56px] min-w-px relative shrink-0 w-full" data-name="List item/List Item: 0 Density">
      <StateLayer11 text="Full name" />
      <Divider2 />
    </div>
  );
}

function ChipCells7() {
  return (
    <div className="content-stretch flex flex-col h-[80px] items-start relative shrink-0 w-full" data-name="Chip cells">
      <ListItemListItem0Density7 />
    </div>
  );
}

function TableColumn3() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="Table Column">
      <ChipCells6 />
      {[...Array(2).keys()].map((_, i) => (
        <ChipCells7 key={i} />
      ))}
    </div>
  );
}

function Table1() {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0" data-name="Table">
      <TableColumn2 />
      <TableColumn3 />
    </div>
  );
}

function ListItemListItem0Density8() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-start justify-center min-h-[56px]" data-name="List item/List Item: 0 Density">
      <StateLayer9 />
      <Divider1 />
    </div>
  );
}

function ChipCells8() {
  return (
    <div className="h-[56px] relative shrink-0 w-full" data-name="Chip cells">
      <ListItemListItem0Density8 />
    </div>
  );
}

function ListItemListItem0Density9() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-start justify-center min-h-[56px]" data-name="List item/List Item: 0 Density">
      <StateLayer9 />
      <Divider1 />
    </div>
  );
}

function ChipCells9() {
  return (
    <div className="h-[80px] relative shrink-0 w-full" data-name="Chip cells">
      <ListItemListItem0Density9 />
    </div>
  );
}

function TableColumn4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[32px]" data-name="Table Column">
      <ChipCells8 />
      {[...Array(2).keys()].map((_, i) => (
        <ChipCells9 key={i} />
      ))}
    </div>
  );
}

function ListItemListItem0Density10() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-center justify-center min-h-[56px] min-w-px relative shrink-0 w-full" data-name="List item/List Item: 0 Density">
      <StateLayer10 text="E-post" />
      <Divider2 />
    </div>
  );
}

function ChipCells10() {
  return (
    <div className="content-stretch flex flex-col h-[56px] items-start relative shrink-0 w-full" data-name="Chip cells">
      <ListItemListItem0Density10 />
    </div>
  );
}

function ListItemListItem0Density11() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-center justify-center min-h-[56px] min-w-px relative shrink-0 w-full" data-name="List item/List Item: 0 Density">
      <StateLayer11 text="kjellolavaa@gmail.com" />
      <Divider2 />
    </div>
  );
}

function ChipCells11() {
  return (
    <div className="content-stretch flex flex-col h-[80px] items-start relative shrink-0 w-full" data-name="Chip cells">
      <ListItemListItem0Density11 />
    </div>
  );
}

function TableColumn5() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="Table Column">
      <ChipCells10 />
      {[...Array(2).keys()].map((_, i) => (
        <ChipCells11 key={i} />
      ))}
    </div>
  );
}

function Table2() {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0" data-name="Table">
      <TableColumn4 />
      <TableColumn5 />
    </div>
  );
}

function ListItemListItem0Density12() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-start justify-center min-h-[56px]" data-name="List item/List Item: 0 Density">
      <StateLayer9 />
      <Divider1 />
    </div>
  );
}

function ChipCells12() {
  return (
    <div className="h-[56px] relative shrink-0 w-full" data-name="Chip cells">
      <ListItemListItem0Density12 />
    </div>
  );
}

function ListItemListItem0Density13() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-start justify-center min-h-[56px]" data-name="List item/List Item: 0 Density">
      <StateLayer9 />
      <Divider1 />
    </div>
  );
}

function ChipCells13() {
  return (
    <div className="h-[80px] relative shrink-0 w-full" data-name="Chip cells">
      <ListItemListItem0Density13 />
    </div>
  );
}

function TableColumn6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[32px]" data-name="Table Column">
      <ChipCells12 />
      {[...Array(2).keys()].map((_, i) => (
        <ChipCells13 key={i} />
      ))}
    </div>
  );
}

function ListItemListItem0Density14() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-center justify-center min-h-[56px] min-w-px relative shrink-0 w-full" data-name="List item/List Item: 0 Density">
      <StateLayer10 text="Telefonnummer" />
      <Divider2 />
    </div>
  );
}

function ChipCells14() {
  return (
    <div className="content-stretch flex flex-col h-[56px] items-start relative shrink-0 w-full" data-name="Chip cells">
      <ListItemListItem0Density14 />
    </div>
  );
}

function ListItemListItem0Density15() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-center justify-center min-h-[56px] min-w-px relative shrink-0 w-full" data-name="List item/List Item: 0 Density">
      <StateLayer11 text="95066834" />
      <Divider2 />
    </div>
  );
}

function ChipCells15() {
  return (
    <div className="content-stretch flex flex-col h-[80px] items-start relative shrink-0 w-full" data-name="Chip cells">
      <ListItemListItem0Density15 />
    </div>
  );
}

function TableColumn7() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="Table Column">
      <ChipCells14 />
      {[...Array(2).keys()].map((_, i) => (
        <ChipCells15 key={i} />
      ))}
    </div>
  );
}

function Table3() {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0" data-name="Table">
      <TableColumn6 />
      <TableColumn7 />
    </div>
  );
}

function Content10() {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0 w-full" data-name="Content">
      <Table />
      <Table1 />
      <Table2 />
      <Table3 />
    </div>
  );
}

function TableContainer() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px overflow-clip relative shrink-0 w-full" data-name="Table Container">
      <Tabs />
      <Content10 />
    </div>
  );
}

export default function PlanleggRevisjon() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-name="Planlegg revisjon">
      <Heading />
      <TableContainer />
    </div>
  );
}