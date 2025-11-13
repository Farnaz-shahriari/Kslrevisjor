import svgPaths from '../imports/svg-mop7ef4bwx';

interface AttachedDocumentCardProps {
  documentName: string;
  onRemove: () => void;
}

export function AttachedDocumentCard({ documentName, onRemove }: AttachedDocumentCardProps) {
  return (
    <div className="bg-white relative rounded-[12px] w-full">
      <div className="content-stretch flex items-center overflow-clip relative rounded-[inherit]">
        <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
          <div className="size-full">
            <div className="box-border content-stretch flex gap-[16px] items-start pl-[16px] pr-[8px] py-0 relative w-full">
              <div className="basis-0 box-border content-stretch flex flex-col grow items-start min-h-px min-w-px pb-[8px] pt-0 px-0 relative self-stretch shrink-0">
                {/* Card header with icon and close button */}
                <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
                  <div className="box-border content-stretch flex gap-[4px] h-[32px] items-center overflow-clip pl-0 pr-[4px] py-0 relative rounded-[8px] shrink-0">
                    <div className="relative shrink-0 size-[18px]">
                      <div className="absolute inset-0 overflow-clip">
                        <div className="absolute inset-[16.67%_8.33%]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 12">
                            <path d={svgPaths.p33aa4080} fill="var(--fill-0, #44483B)" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#44483b] text-[12px] text-center text-nowrap tracking-[0.5px]">
                      <p className="leading-[16px] whitespace-pre m-0">Dokument</p>
                    </div>
                  </div>
                  
                  {/* Close button */}
                  <div className="content-stretch flex flex-col gap-[10px] items-center justify-center relative shrink-0 size-[48px]">
                    <button
                      onClick={onRemove}
                      className="content-stretch flex gap-[10px] items-center justify-center overflow-clip relative rounded-[100px] shrink-0 hover:bg-muted transition-colors"
                    >
                      <div className="box-border content-stretch flex gap-[10px] items-center justify-center p-[8px] relative shrink-0">
                        <div className="relative shrink-0 size-[24px]">
                          <div className="absolute inset-[20.833%]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
                              <path d={svgPaths.p2aa77200} fill="var(--fill-0, #44483B)" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
                
                {/* Document name */}
                <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] overflow-ellipsis overflow-hidden relative shrink-0 text-[#1a1c16] text-[16px] text-nowrap tracking-[0.15px] w-full">
                  <p className="[white-space-collapse:collapse] leading-[24px] overflow-ellipsis overflow-hidden m-0">{documentName}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#c4c8b7] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}
