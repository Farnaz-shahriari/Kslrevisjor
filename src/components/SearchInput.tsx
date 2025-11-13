import svgPaths from "../imports/svg-fww0ywnfzv";

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
}

export function SearchInput({ value, onChange }: SearchInputProps) {
  return (
    <div className="content-stretch flex items-start relative w-full" data-name="Search">
      <div className="bg-[#e9e9df] content-stretch flex gap-[4px] w-full h-[56px] items-center overflow-clip relative rounded-[28px] shrink-0" data-name="Search bar">
        <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="state-layer">
          <div className="flex flex-row items-center size-full">
            <div className="box-border content-stretch flex gap-[4px] items-center p-[4px] relative size-full">
              {/* Leading icon */}
              <div className="content-stretch flex flex-col gap-[10px] items-center justify-center relative shrink-0 size-[48px]" data-name="Leading-icon">
                <div className="content-stretch flex gap-[10px] items-center justify-center overflow-clip relative rounded-[100px] shrink-0" data-name="container">
                  <div className="box-border content-stretch flex gap-[10px] items-center justify-center p-[8px] relative shrink-0" data-name="state-layer">
                    <div className="relative shrink-0 size-[24px]" data-name="Icon">
                      <div className="absolute inset-[12.5%]" data-name="icon">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                          <path d={svgPaths.p16b4a380} fill="var(--muted-foreground)" id="icon" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Input field */}
              <div className="basis-0 content-stretch flex gap-[10px] grow h-full items-center min-h-px min-w-px relative shrink-0" data-name="Content">
                <input
                  type="text"
                  value={value}
                  onChange={(e) => onChange(e.target.value)}
                  placeholder="Søk i sjekklistespørsmål"
                  className="w-full bg-transparent border-none outline-none body-large text-foreground placeholder:text-muted-foreground"
                />
              </div>
              
              {/* Trailing elements */}
              <div className="content-stretch flex items-center justify-end shrink-0" data-name="Trailing-Elements" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
