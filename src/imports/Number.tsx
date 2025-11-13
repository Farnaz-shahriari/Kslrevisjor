export default function Number() {
  return (
    <div className="content-stretch flex font-['Quatro:Regular',sans-serif] gap-[8px] items-start leading-[0] not-italic relative size-full text-[#1a1c16] text-[22px]" data-name="Number">
      <div className="flex flex-col justify-center relative shrink-0 text-nowrap">
        <p className="leading-[28px] whitespace-pre">
          <span className="font-['Quatro:Regular',sans-serif] not-italic">1.</span>1<span className="font-['Quatro:Regular',sans-serif] not-italic">.</span>
          <span>{`1 `}</span>
        </p>
      </div>
      <div className="basis-0 flex flex-col grow justify-center min-h-px min-w-px relative shrink-0">
        <p className="leading-[28px]">Har du oversikt over alle driftsmidler du har kjøpt, og alle produkter du har solgt?</p>
      </div>
    </div>
  );
}