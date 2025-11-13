import { useState, useEffect, useRef } from 'react';
import svgPaths from '../imports/svg-0xfhwo02nd';
import svgPathsChip from '../imports/svg-cne2b5etox';
import svgPathsEdit from '../imports/svg-lebuxrzm9d';

interface ExpandableInputProps {
  label: string;
  placeholder?: string;
  onSave?: (value: string) => void;
  value?: string;
  onChange?: (value: string) => void;
  icon?: 'description' | 'groups' | 'timelapse';
  required?: boolean;
}

const iconPaths = {
  description: "M4 14H12V16H4V14ZM4 10H12V12H4V10ZM10 0H2C0.9 0 0 0.9 0 2V18C0 19.1 0.89 20 1.99 20H14C15.1 20 16 19.1 16 18V6L10 0ZM14 18H2V2H9V7H14V18Z",
  groups: "M1.22 8.58C0.48 8.9 0 9.62 0 10.43V12H4.5V10.39C4.5 9.56 4.73 8.78 5.13 8.1C4.76 8.04 4.39 8 4 8C3.01 8 2.07 8.21 1.22 8.58ZM10.27 6H13.73C14.66 6 15.36 5.17 15.21 4.25L14.91 2.46C14.67 1.04 13.44 0 12 0C10.56 0 9.33 1.04 9.09 2.47L8.79 4.26C8.64 5.17 9.34 6 10.27 6ZM11.06 2.79C11.14 2.33 11.53 2 12 2C12.47 2 12.86 2.33 12.94 2.79L13.14 4H10.86L11.06 2.79ZM1.66 5.11C1.53 5.37 1.48 5.68 1.56 5.99C1.72 6.68 2.32 7.02 3.09 6.99C3.09 6.99 4.58 6.99 5.04 6.99C5.87 6.99 6.55 6.41 6.55 5.7C6.55 5.56 6.52 5.43 6.48 5.3C6.47 5.27 6.47 5.25 6.49 5.22C6.58 5.06 6.63 4.88 6.63 4.69C6.63 4.38 6.49 4.09 6.27 3.87C6.24 3.84 6.24 3.81 6.25 3.77C6.32 3.57 6.32 3.34 6.26 3.12C6.1 2.69 5.71 2.4 5.27 2.38C5.24 2.38 5.22 2.37 5.2 2.35C5.03 2.14 4.72 2 4.37 2C4.07 2 3.8 2.1 3.62 2.26C3.59 2.29 3.56 2.29 3.53 2.28C3.39 2.22 3.23 2.19 3.07 2.19C2.42 2.19 1.89 2.68 1.83 3.31C1.83 3.33 1.82 3.35 1.8 3.37C1.51 3.63 1.34 4.02 1.39 4.42C1.42 4.64 1.51 4.85 1.64 5.02C1.67 5.04 1.67 5.08 1.66 5.11ZM16.24 7.65C15.07 7.13 13.63 6.75 12 6.75C10.37 6.75 8.93 7.14 7.76 7.65C6.68 8.13 6 9.21 6 10.39V12H18V10.39C18 9.21 17.32 8.13 16.24 7.65ZM8.07 10C8.16 9.77 8.34 9.58 8.56 9.48C9.66 8.99 10.82 8.75 11.99 8.75C13.17 8.75 14.32 9 15.42 9.48C15.65 9.58 15.82 9.77 15.91 10H8.07ZM22 5V4.5C22 3.4 21.1 2.5 20 2.5H18C17.58 2.5 17.35 2.98 17.61 3.31L18.31 3.94C18.12 4.25 18 4.61 18 5C18 6.1 18.9 7 20 7C21.1 7 22 6.1 22 5ZM22.78 8.58C21.93 8.21 20.99 8 20 8C19.61 8 19.24 8.04 18.87 8.1C19.27 8.78 19.5 9.56 19.5 10.39V12H24V10.43C24 9.62 23.52 8.9 22.78 8.58Z",
  timelapse: "M14.24 5.76C13.07 4.59 11.54 4 10 4V10L5.76 14.24C8.1 16.58 11.9 16.58 14.25 14.24C16.59 11.9 16.59 8.1 14.24 5.76ZM10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.58 18 2 14.42 2 10C2 5.58 5.58 2 10 2C14.42 2 18 5.58 18 10C18 14.42 14.42 18 10 18Z"
};

export function ExpandableInput({ label, placeholder = '', onSave, value: propValue, onChange, icon = 'description', required = false }: ExpandableInputProps) {
  const [mode, setMode] = useState<'empty' | 'edit' | 'view'>('empty');
  const [value, setValue] = useState(propValue || '');
  const [editValue, setEditValue] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (propValue !== undefined) {
      setValue(propValue);
      setMode(propValue ? 'view' : 'empty');
    }
  }, [propValue]);

  useEffect(() => {
    if (mode === 'edit' && inputRef.current) {
      inputRef.current.focus();
    }
  }, [mode]);

  const handleAdd = () => {
    setMode('edit');
    setEditValue(value);
  };

  const handleEdit = () => {
    setMode('edit');
    setEditValue(value);
  };

  const handleSave = () => {
    const trimmedValue = editValue.trim();
    if (trimmedValue) {
      // If there's text, save it
      setValue(trimmedValue);
      setMode('view');
      if (onChange) {
        onChange(trimmedValue);
      }
      if (onSave) {
        onSave(trimmedValue);
      }
    } else {
      // If empty input, always go to empty state
      setValue('');
      setMode('empty');
      setEditValue('');
      if (onChange) {
        onChange('');
      }
    }
  };

  const handleCheckClick = () => {
    handleSave();
  };

  const handleBlur = () => {
    handleSave();
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSave();
    }
  };

  // Empty state
  if (mode === 'empty') {
    return (
      <div className="box-border content-stretch flex flex-col gap-[8px] items-center justify-center min-h-[64px] overflow-visible pb-0 pt-[8px] px-0 relative shrink-0 w-full max-w-[600px]">
        <div className="relative shrink-0 w-full">
          <div className="flex flex-row items-center size-full">
            <div className="box-border content-stretch flex gap-[16px] items-center p-[8px] relative w-full">
              {/* Leading Plus icon button */}
              <div className="content-stretch flex items-center justify-center relative shrink-0 size-[48px]">
                <button 
                  onClick={handleAdd}
                  className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[100px] shrink-0 w-[40px] hover:bg-[#eff1e7] transition-colors"
                >
                  <div className="content-stretch flex h-[40px] items-center justify-center relative shrink-0 w-full">
                    <div className="relative shrink-0 size-[24px]">
                      <div className="absolute inset-[20.833%]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
                          <path d={svgPaths.p2ccb20} fill="#44483B" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </button>
              </div>
              {/* Text content - clickable to activate edit mode */}
              <button
                onClick={handleAdd}
                className="basis-0 content-stretch flex flex-col font-['Manrope:Regular',sans-serif] font-normal grow items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0 text-left cursor-pointer"
              >
                <div className="flex flex-col justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] tracking-[0.5px] w-full">
                  <p className="leading-[24px] m-0">{label}</p>
                </div>
                <p className="leading-[20px] relative shrink-0 text-[#44483b] text-[14px] tracking-[0.25px] w-full m-0">{required ? 'Påkrevd' : 'Valgfri'}</p>
              </button>
              {/* Trenger utfylling chip - only show if required */}
              {required && (
                <div className="bg-[#f4f4ea] box-border flex items-center justify-center overflow-clip relative rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.3),0px_1px_3px_1px_rgba(0,0,0,0.15)] shrink-0">
                  <div className="box-border flex gap-2 h-8 items-center justify-center pl-2 pr-4 py-1.5">
                    <div className="relative shrink-0 w-[18px] h-[18px]">
                      <div className="absolute inset-[8.333%]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
                          <path d={svgPathsChip.p1c3b4f80} fill="#BA1A1A" />
                        </svg>
                      </div>
                    </div>
                    <span className="label-medium text-foreground whitespace-nowrap">
                      Trenger utfylling
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Edit state
  if (mode === 'edit') {
    return (
      <div className="box-border content-stretch flex flex-col gap-[8px] items-center justify-center min-h-[64px] overflow-visible pb-0 pt-[8px] px-0 relative shrink-0 w-full max-w-[600px]">
        <div className="relative shrink-0 w-full">
          <div className="flex flex-row items-center size-full">
            <div className="box-border content-stretch flex gap-[16px] items-start p-[8px] relative w-full">
              {/* Leading Check/Save icon button */}
              <div className="content-stretch flex items-center justify-center relative shrink-0 size-[48px]">
                <button 
                  onClick={handleCheckClick}
                  className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[100px] shrink-0 w-[40px] hover:bg-[#eff1e7] transition-colors"
                >
                  <div className="content-stretch flex h-[40px] items-center justify-center relative shrink-0 w-full">
                    <div className="relative shrink-0 size-[24px]">
                      <div className="absolute inset-[16.667%]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                          <path d="M16.667 5L7.5 14.167L3.333 10" stroke="#44483B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </button>
              </div>
              {/* Input field */}
              <div className="basis-0 grow relative">
                <label className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#44483b] text-[12px] tracking-[0.5px] mb-1">
                  <p className="leading-[16px] m-0">{label}</p>
                </label>
                <input
                  ref={inputRef}
                  type="text"
                  value={editValue}
                  onChange={(e) => setEditValue(e.target.value)}
                  onKeyDown={handleKeyDown}
                  onBlur={handleBlur}
                  placeholder={placeholder || label}
                  className="w-full px-3 py-2 border-2 border-[#4a671e] rounded-[8px] text-[#1a1c16] text-[16px] leading-[24px] font-['Manrope:Regular',sans-serif] focus:outline-none focus:border-[#4a671e]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // View state
  return (
    <div className="box-border content-stretch flex flex-col gap-[8px] items-center justify-center min-h-[64px] overflow-visible pb-0 pt-[8px] px-0 relative shrink-0 w-full max-w-[600px]">
      <div className="relative shrink-0 w-full">
        <div className="flex flex-row items-center size-full">
          <div className="box-border content-stretch flex gap-[16px] items-start p-[8px] relative w-full">
            {/* Leading Edit icon button */}
            <div className="content-stretch flex items-center justify-center relative shrink-0 size-[48px]">
              <button 
                onClick={handleEdit}
                className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[100px] shrink-0 w-[40px] hover:bg-[#eff1e7] transition-colors"
              >
                <div className="content-stretch flex h-[40px] items-center justify-center relative shrink-0 w-full">
                  <div className="relative shrink-0 size-[24px]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                      <path d={svgPathsEdit.p25003780} fill="#44483B" />
                    </svg>
                  </div>
                </div>
              </button>
            </div>
            {/* Text content - clickable to edit */}
            <button 
              onClick={handleEdit}
              className="basis-0 content-stretch flex flex-col grow items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0 text-left cursor-pointer"
            >
              <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#44483b] text-[12px] tracking-[0.5px] w-full">
                <p className="leading-[16px] m-0">{label}</p>
              </div>
              <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#1a1c16] text-[16px] w-full">
                <p className="leading-[24px] m-0">{value}</p>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
