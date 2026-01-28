import svgPaths from "./svg-duajlpw1wh";
import imgMapMakerOsloNorwayStandard from "figma:asset/66f4100501280f547d77168e53f1deebe5d89338.png";

function StateLayer() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center px-[24px] py-[16px] relative shrink-0" data-name="State-layer">
      <div className="css-g0mm18 flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#44483b] text-[16px] tracking-[0.15px]">
        <p className="css-ew64yg leading-[24px]">Aksepter alle oppdrag</p>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="relative rounded-[100px] shrink-0" data-name="Content">
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[inherit]">
        <StateLayer />
      </div>
      <div aria-hidden="true" className="absolute border border-[#c4c8b7] border-solid inset-0 pointer-events-none rounded-[100px]" />
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Button">
      <Content />
    </div>
  );
}

function FormatListBulleted() {
  return (
    <div className="relative shrink-0 size-[24px] z-[2]" data-name="format_list_bulleted">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="format_list_bulleted">
          <path d={svgPaths.p34667a00} fill="var(--fill-0, #365BAE)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function StateLayer1() {
  return (
    <div className="relative shrink-0 w-full" data-name="State-layer">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] isolate items-center justify-center px-[24px] py-[16px] relative w-full">
          <FormatListBulleted />
          <div className="css-g0mm18 flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#174295] text-[16px] tracking-[0.15px] z-[1]">
            <p className="css-ew64yg leading-[24px]">Liste</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Segment() {
  return (
    <div className="bg-[#dae2ff] content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px min-w-[48px] overflow-clip relative rounded-[8px]" data-name="Segment 1">
      <StateLayer1 />
    </div>
  );
}

function PinDrop() {
  return (
    <div className="relative shrink-0 size-[24px] z-[2]" data-name="pin_drop">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="pin_drop">
          <g id="Vector">
            <path d={svgPaths.p2289580} fill="var(--fill-0, white)" />
            <path d={svgPaths.p318ba8f0} fill="var(--fill-0, white)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function StateLayer2() {
  return (
    <div className="bg-[#365bae] relative shrink-0 w-full" data-name="State-layer">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] isolate items-center justify-center px-[24px] py-[16px] relative w-full">
          <PinDrop />
          <div className="css-g0mm18 flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[16px] text-white tracking-[0.15px] z-[1]">
            <p className="css-ew64yg leading-[24px]">Kart</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Segment1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px min-w-[48px] overflow-clip relative rounded-[100px]" data-name="Segment 2">
      <StateLayer2 />
    </div>
  );
}

function ConnectedButtonGroup() {
  return (
    <div className="content-stretch flex gap-[2px] items-start overflow-clip relative rounded-[28px] shrink-0 w-[246px]" data-name="Connected button group">
      <Segment />
      <Segment1 />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <Button />
      <ConnectedButtonGroup />
    </div>
  );
}

function LeadingIcon() {
  return (
    <div className="overflow-clip relative shrink-0 size-[21.719px]" data-name="Leading icon">
      <div className="absolute inset-[0_-84.17%_-84.17%_0]" data-name="Background">
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(239, 241, 231, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
            <circle cx="20" cy="20" fill="var(--fill-0, #EFF1E7)" id="Background" r="20" />
          </svg>
        </div>
      </div>
      <div className="absolute flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] left-[calc(50%+0.14px)] size-[48.264px] text-[#284000] text-[16px] text-center top-[calc(50%+0.14px)] tracking-[0.1px] translate-x-[-50%] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="css-4hzbpn leading-[24px]">T</p>
      </div>
    </div>
  );
}

function StateLayer3() {
  return (
    <div className="content-stretch flex gap-[9.653px] h-[38.612px] items-center justify-center pl-[9.653px] pr-[19.306px] py-[7.24px] relative shrink-0" data-name="state-layer">
      <LeadingIcon />
      <div className="css-g0mm18 flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#44483b] text-[19.306px] text-center tracking-[0.181px]">
        <p className="css-ew64yg leading-[28.959px]">Bjørkli Økologiske</p>
      </div>
    </div>
  );
}

function TildelteRevisjon() {
  return (
    <div className="absolute bg-[#fafaf0] h-[38px] left-[547px] rounded-[9.653px] top-[641px]" data-name="tildelte revisjon">
      <div className="content-stretch flex h-full items-center justify-center overflow-clip relative rounded-[inherit]">
        <StateLayer3 />
      </div>
      <div aria-hidden="true" className="absolute border-[#c4c8b7] border-[1.207px] border-solid inset-0 pointer-events-none rounded-[9.653px] shadow-[0px_9.653px_14.479px_7.24px_rgba(0,0,0,0.15),0px_4.826px_4.826px_0px_rgba(0,0,0,0.3)]" />
    </div>
  );
}

function LeadingIcon1() {
  return (
    <div className="overflow-clip relative shrink-0 size-[21.719px]" data-name="Leading icon">
      <div className="absolute inset-[0_-84.17%_-84.17%_0]" data-name="Background">
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(239, 241, 231, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
            <circle cx="20" cy="20" fill="var(--fill-0, #EFF1E7)" id="Background" r="20" />
          </svg>
        </div>
      </div>
      <div className="absolute flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] left-[calc(50%+0.14px)] size-[48.264px] text-[#284000] text-[16px] text-center top-[calc(50%+0.14px)] tracking-[0.1px] translate-x-[-50%] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="css-4hzbpn leading-[24px]">T</p>
      </div>
    </div>
  );
}

function StateLayer4() {
  return (
    <div className="content-stretch flex gap-[9.653px] h-[38.612px] items-center justify-center pl-[9.653px] pr-[19.306px] py-[7.24px] relative shrink-0" data-name="state-layer">
      <LeadingIcon1 />
      <div className="css-g0mm18 flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#44483b] text-[19.306px] text-center tracking-[0.181px]">
        <p className="css-ew64yg leading-[28.959px]">Bjørkli Økologiske</p>
      </div>
    </div>
  );
}

function TildelteRevisjon1() {
  return (
    <div className="absolute bg-[#fafaf0] h-[38px] left-[262px] rounded-[9.653px] top-[671px]" data-name="tildelte revisjon">
      <div className="content-stretch flex h-full items-center justify-center overflow-clip relative rounded-[inherit]">
        <StateLayer4 />
      </div>
      <div aria-hidden="true" className="absolute border-[#c4c8b7] border-[1.207px] border-solid inset-0 pointer-events-none rounded-[9.653px] shadow-[0px_9.653px_14.479px_7.24px_rgba(0,0,0,0.15),0px_4.826px_4.826px_0px_rgba(0,0,0,0.3)]" />
    </div>
  );
}

function LeadingIcon2() {
  return (
    <div className="overflow-clip relative shrink-0 size-[21.719px]" data-name="Leading icon">
      <div className="absolute inset-[0_-84.17%_-84.17%_0]" data-name="Background">
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(239, 241, 231, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
            <circle cx="20" cy="20" fill="var(--fill-0, #EFF1E7)" id="Background" r="20" />
          </svg>
        </div>
      </div>
      <div className="absolute flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] left-[calc(50%+0.14px)] size-[48.264px] text-[#284000] text-[16px] text-center top-[calc(50%+0.14px)] tracking-[0.1px] translate-x-[-50%] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="css-4hzbpn leading-[24px]">T</p>
      </div>
    </div>
  );
}

function StateLayer5() {
  return (
    <div className="content-stretch flex gap-[9.653px] h-[38.612px] items-center justify-center pl-[9.653px] pr-[19.306px] py-[7.24px] relative shrink-0" data-name="state-layer">
      <LeadingIcon2 />
      <div className="css-g0mm18 flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#44483b] text-[19.306px] text-center tracking-[0.181px]">
        <p className="css-ew64yg leading-[28.959px]">Bjørkli Økologiske</p>
      </div>
    </div>
  );
}

function TildelteRevisjon2() {
  return (
    <div className="absolute bg-[#fafaf0] h-[38px] left-[118px] rounded-[9.653px] top-[598px]" data-name="tildelte revisjon">
      <div className="content-stretch flex h-full items-center justify-center overflow-clip relative rounded-[inherit]">
        <StateLayer5 />
      </div>
      <div aria-hidden="true" className="absolute border-[#c4c8b7] border-[1.207px] border-solid inset-0 pointer-events-none rounded-[9.653px] shadow-[0px_9.653px_14.479px_7.24px_rgba(0,0,0,0.15),0px_4.826px_4.826px_0px_rgba(0,0,0,0.3)]" />
    </div>
  );
}

function LeadingIcon3() {
  return (
    <div className="overflow-clip relative shrink-0 size-[21.719px]" data-name="Leading icon">
      <div className="absolute inset-[0_-84.17%_-84.17%_0]" data-name="Background">
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(239, 241, 231, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
            <circle cx="20" cy="20" fill="var(--fill-0, #EFF1E7)" id="Background" r="20" />
          </svg>
        </div>
      </div>
      <div className="absolute flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] left-[calc(50%+0.14px)] size-[48.264px] text-[#284000] text-[16px] text-center top-[calc(50%+0.14px)] tracking-[0.1px] translate-x-[-50%] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="css-4hzbpn leading-[24px]">T</p>
      </div>
    </div>
  );
}

function StateLayer6() {
  return (
    <div className="content-stretch flex gap-[9.653px] h-[38.612px] items-center justify-center pl-[9.653px] pr-[19.306px] py-[7.24px] relative shrink-0" data-name="state-layer">
      <LeadingIcon3 />
      <div className="css-g0mm18 flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#174295] text-[19.306px] text-center tracking-[0.181px]">
        <p className="css-ew64yg leading-[28.959px]">Bjørkli Økologiske</p>
      </div>
    </div>
  );
}

function TildelteRevisjonSelected() {
  return (
    <div className="absolute bg-[#dae2ff] h-[38px] left-[420px] rounded-[9.653px] top-[466px]" data-name="tildelte revisjon- selected">
      <div className="content-stretch flex h-full items-center justify-center overflow-clip relative rounded-[inherit]">
        <StateLayer6 />
      </div>
      <div aria-hidden="true" className="absolute border-[#c4c8b7] border-[1.207px] border-solid inset-0 pointer-events-none rounded-[9.653px] shadow-[0px_9.653px_14.479px_7.24px_rgba(0,0,0,0.15),0px_4.826px_4.826px_0px_rgba(0,0,0,0.3)]" />
    </div>
  );
}

function LeadingIcon4() {
  return (
    <div className="relative shrink-0 size-[21.719px]" data-name="Leading icon">
      <div className="absolute inset-[0_-84.17%_-84.17%_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
          <g id="Leading icon">
            <path clipRule="evenodd" d={svgPaths.p1fd92980} fill="var(--fill-0, #EFF1E7)" fillRule="evenodd" id="Background" />
            <g id="Check">
              <path d={svgPaths.p959ff00} fill="var(--fill-0, #284000)" id="icon" />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}

function StateLayer7() {
  return (
    <div className="content-stretch flex gap-[9.653px] h-[38.612px] items-center justify-center pl-[9.653px] pr-[19.306px] py-[7.24px] relative shrink-0" data-name="state-layer">
      <LeadingIcon4 />
      <div className="css-g0mm18 flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#44483b] text-[19.306px] text-center tracking-[0.181px]">
        <p className="css-ew64yg leading-[28.959px]">Bjørkli Økologiske</p>
      </div>
    </div>
  );
}

function TildelteRevisjonerAkseptert() {
  return (
    <div className="absolute bg-[#fafaf0] h-[38px] left-[630px] rounded-[9.653px] top-[801px]" data-name="Tildelte revisjoner, akseptert">
      <div className="content-stretch flex h-full items-center justify-center overflow-clip relative rounded-[inherit]">
        <StateLayer7 />
      </div>
      <div aria-hidden="true" className="absolute border-[#c4c8b7] border-[1.207px] border-solid inset-0 pointer-events-none rounded-[9.653px] shadow-[0px_9.653px_14.479px_7.24px_rgba(0,0,0,0.15),0px_4.826px_4.826px_0px_rgba(0,0,0,0.3)]" />
    </div>
  );
}

function LeadingIcon5() {
  return (
    <div className="relative shrink-0 size-[21.719px]" data-name="Leading icon">
      <div className="absolute inset-[0_-84.17%_-84.17%_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
          <g id="Leading icon">
            <path clipRule="evenodd" d={svgPaths.p1fd92980} fill="var(--fill-0, #EFF1E7)" fillRule="evenodd" id="Background" />
            <g id="Check">
              <path d={svgPaths.p959ff00} fill="var(--fill-0, #284000)" id="icon" />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}

function StateLayer8() {
  return (
    <div className="content-stretch flex gap-[9.653px] h-[38.612px] items-center justify-center pl-[9.653px] pr-[19.306px] py-[7.24px] relative shrink-0" data-name="state-layer">
      <LeadingIcon5 />
      <div className="css-g0mm18 flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#44483b] text-[19.306px] text-center tracking-[0.181px]">
        <p className="css-ew64yg leading-[28.959px]">Bjørkli Økologiske</p>
      </div>
    </div>
  );
}

function TildelteRevisjonerAkseptert1() {
  return (
    <div className="absolute bg-[#fafaf0] h-[38px] left-[525px] rounded-[9.653px] top-[851px]" data-name="Tildelte revisjoner, akseptert">
      <div className="content-stretch flex h-full items-center justify-center overflow-clip relative rounded-[inherit]">
        <StateLayer8 />
      </div>
      <div aria-hidden="true" className="absolute border-[#c4c8b7] border-[1.207px] border-solid inset-0 pointer-events-none rounded-[9.653px] shadow-[0px_9.653px_14.479px_7.24px_rgba(0,0,0,0.15),0px_4.826px_4.826px_0px_rgba(0,0,0,0.3)]" />
    </div>
  );
}

function GenericAvatar() {
  return (
    <div className="absolute left-[843px] overflow-clip shadow-[0px_8px_12px_6px_rgba(0,0,0,0.15),0px_4px_4px_0px_rgba(0,0,0,0.3)] size-[56px] top-[485px]" data-name="Generic avatar">
      <div className="absolute inset-0" style={{ "--fill-0": "rgba(239, 241, 231, 1)" } as React.CSSProperties}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 56 56">
          <circle cx="28" cy="28" fill="var(--fill-0, #EFF1E7)" id="Background" r="28" />
        </svg>
      </div>
      <div className="absolute flex flex-col font-['Quatro:Regular',sans-serif] justify-center leading-[0] left-1/2 not-italic size-[40px] text-[#284000] text-[22px] text-center top-1/2 translate-x-[-50%] translate-y-[-50%]">
        <p className="css-4hzbpn leading-[28px]">3</p>
      </div>
    </div>
  );
}

function StateLayer9() {
  return (
    <div className="content-stretch flex h-[32px] items-center justify-center px-[16px] py-[6px] relative shrink-0" data-name="state-layer">
      <div className="css-g0mm18 flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#410002] text-[14px] text-center tracking-[0.1px]">
        <p className="css-ew64yg leading-[20px]">Prioritert</p>
      </div>
    </div>
  );
}

function FilterChip() {
  return (
    <div className="bg-[#ffdad6] h-[32px] relative rounded-[8px] shrink-0" data-name="Filter chip">
      <div className="content-stretch flex h-full items-center justify-center overflow-clip relative rounded-[inherit]">
        <StateLayer9 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#c4c8b7] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function StateLayer10() {
  return (
    <div className="content-stretch flex h-[32px] items-center justify-center px-[16px] py-[6px] relative shrink-0" data-name="state-layer">
      <div className="css-g0mm18 flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#3d2c00] text-[14px] text-center tracking-[0.1px]">
        <p className="css-ew64yg leading-[20px]">Oppfølging gyldig KSL</p>
      </div>
    </div>
  );
}

function FilterChip1() {
  return (
    <div className="bg-[#fdeeb1] h-[32px] relative rounded-[8px] shrink-0" data-name="Filter chip">
      <div className="content-stretch flex h-full items-center justify-center overflow-clip relative rounded-[inherit]">
        <StateLayer10 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#c4c8b7] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function InfoChips() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full" data-name="Info chips">
      <FilterChip />
      <FilterChip1 />
    </div>
  );
}

function TopInfo() {
  return (
    <div className="content-stretch flex flex-col items-start py-[8px] relative shrink-0" data-name="top info">
      <div className="css-g0mm18 flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] tracking-[0.15px]">
        <p className="css-ew64yg">
          <span className="leading-[24px]">{`Akseptfrist: `}</span>
          <span className="font-['Manrope:Medium',sans-serif] font-medium leading-[24px]">16.juli 2026</span>
        </p>
      </div>
    </div>
  );
}

function RevisjonInfo() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-[280px] relative" data-name="Revisjon info">
      <TopInfo />
    </div>
  );
}

function ForetakTopInfo() {
  return (
    <div className="content-stretch flex flex-col font-['Manrope:Medium',sans-serif] font-medium gap-[4px] items-start relative shrink-0 text-[#1a1c16] w-full" data-name="Foretak top info">
      <div className="flex flex-col justify-center leading-[0] relative shrink-0 text-[16px] tracking-[0.15px] w-full">
        <p className="css-4hzbpn leading-[24px]">Bjørkli Økologiske</p>
      </div>
      <div className="flex flex-col justify-center leading-[20px] relative shrink-0 text-[14px] tracking-[0.1px] w-full">
        <p className="css-4hzbpn mb-0">HOLTEVEIEN 138</p>
        <p className="css-4hzbpn">4639 Kristiansand s</p>
      </div>
    </div>
  );
}

function TopInfo1() {
  return (
    <div className="content-stretch flex flex-col items-start py-[8px] relative shrink-0 w-full" data-name="Top info">
      <ForetakTopInfo />
    </div>
  );
}

function ForetakInfo() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-[280px] relative" data-name="Foretak info">
      <TopInfo1 />
    </div>
  );
}

function RevisjonInfo1() {
  return (
    <div className="content-start flex flex-wrap gap-[0px_16px] items-start relative shrink-0 w-full" data-name="Revisjon info">
      <RevisjonInfo />
      <ForetakInfo />
    </div>
  );
}

function ExpandLess() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="expand_less">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="expand_less">
          <path d={svgPaths.p2b8d2f00} fill="var(--fill-0, #44483B)" id="Vector" />
        </g>
      </svg>
    </div>
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
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-h-px min-w-px overflow-clip relative" data-name="Content">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] tracking-[0.5px] w-full">
        <p className="css-4hzbpn leading-[24px]">Vis mindre</p>
      </div>
    </div>
  );
}

function StateLayer11() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[16px] items-center justify-center min-h-px min-w-px px-[16px] py-[8px] relative w-[360px]" data-name="state-layer">
      <LeadingElement />
      <Content1 />
    </div>
  );
}

function ListItemListItem0Density() {
  return (
    <div className="content-stretch flex flex-col h-[56px] items-center justify-center min-h-[56px] relative shrink-0" data-name="List item/List Item: 0 Density">
      <StateLayer11 />
    </div>
  );
}

function AuditInformation() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start min-w-[280px] relative shrink-0 w-full" data-name="Audit information">
      <RevisjonInfo1 />
      <ListItemListItem0Density />
    </div>
  );
}

function StateLayer12() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center px-[24px] py-[16px] relative shrink-0" data-name="State-layer">
      <div className="css-g0mm18 flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#44483b] text-[16px] tracking-[0.15px]">
        <p className="css-ew64yg leading-[24px]">Aksepter</p>
      </div>
    </div>
  );
}

function Content2() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[100px]" data-name="Content">
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[inherit] w-full">
        <StateLayer12 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#c4c8b7] border-solid inset-0 pointer-events-none rounded-[100px]" />
    </div>
  );
}

function Button1() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Button">
      <Content2 />
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p2edaeb50} fill="var(--fill-0, #4A671E)" id="icon" />
        </g>
      </svg>
    </div>
  );
}

function StateLayer13() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center px-[24px] py-[16px] relative shrink-0" data-name="State-layer">
      <Icon />
      <div className="css-g0mm18 flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#4a671e] text-[16px] tracking-[0.15px]">
        <p className="css-ew64yg leading-[24px]">Avvis</p>
      </div>
    </div>
  );
}

function Content3() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0" data-name="Content">
      <StateLayer13 />
    </div>
  );
}

function Button2() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Button">
      <Content3 />
    </div>
  );
}

function Actions() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-end max-w-[280px] min-w-[200px] relative shrink-0 w-full" data-name="Actions">
      <Button1 />
      <Button2 />
    </div>
  );
}

function AuditInformation1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="audit information">
      <AuditInformation />
      <Actions />
    </div>
  );
}

function RevisjonCardForSelectedRevisjonOnMap() {
  return (
    <div className="absolute bg-[#fafaf0] content-stretch flex flex-col gap-[16px] items-start left-[193px] pt-[8px] px-[24px] rounded-[12px] top-[104px] w-[658px]" data-name="Revisjon Card for selected revisjon on map">
      <div aria-hidden="true" className="absolute border border-[#c4c8b7] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <InfoChips />
      <AuditInformation1 />
    </div>
  );
}

function Map() {
  return (
    <div className="aspect-[1014/1014] content-stretch flex flex-col gap-[24.143px] items-start justify-center overflow-clip relative rounded-[12px] shrink-0 w-full" data-name="map">
      <div className="aspect-[420/420] relative shrink-0 w-full" data-name="🌎 Map Maker: Oslo, Norway (Standard)">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgMapMakerOsloNorwayStandard} />
      </div>
      <TildelteRevisjon />
      <TildelteRevisjon1 />
      <TildelteRevisjon2 />
      <TildelteRevisjonSelected />
      <TildelteRevisjonerAkseptert />
      <TildelteRevisjonerAkseptert1 />
      <GenericAvatar />
      <RevisjonCardForSelectedRevisjonOnMap />
    </div>
  );
}

export default function UpcomingAudits() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[16px] items-start px-[40px] py-[16px] relative rounded-[12px] size-full" data-name="Upcoming audits">
      <Container />
      <Map />
    </div>
  );
}