import { useState, useEffect, useRef } from 'react';
import { X, Plus, Check } from 'lucide-react';

type EditMode = 'empty' | 'edit' | 'view';

interface NotatViewProps {
  notatText?: string;
  onUpdate?: (text: string) => void;
}

export function NotatView({ notatText: initialNotatText, onUpdate }: NotatViewProps) {
  const [mode, setMode] = useState<EditMode>(initialNotatText ? 'view' : 'empty');
  const [notatText, setNotatText] = useState(initialNotatText || '');
  const [tempText, setTempText] = useState('');
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Auto-resize textarea to fit content
  const adjustTextareaHeight = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = 'auto';
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  };

  // Update parent whenever text changes
  useEffect(() => {
    onUpdate?.(notatText);
  }, [notatText]);

  // Adjust height when in edit mode
  useEffect(() => {
    if (mode === 'edit') {
      adjustTextareaHeight();
    }
  }, [tempText, mode]);

  const handleSave = () => {
    if (tempText.trim()) {
      setNotatText(tempText);
      setMode('view');
    } else {
      setMode('empty');
      setTempText('');
    }
  };

  const handleCancel = () => {
    setTempText(notatText);
    if (notatText) {
      setMode('view');
    } else {
      setMode('empty');
    }
  };

  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start shrink-0 w-full">
      {/* Notat */}
      <div className="max-w-[880px] relative rounded-[12px] shrink-0 w-full">
        <div aria-hidden="true" className="absolute border border-[#c4c8b7] border-solid inset-0 pointer-events-none rounded-[12px]" />
        <div className="max-w-inherit size-full">
          <div className="box-border content-stretch flex flex-col gap-[8px] items-start max-w-inherit p-[16px] relative w-full">
            {/* Header with icon and plus/edit button */}
            <div className="content-stretch flex flex-col items-center justify-center min-h-[56px] relative shrink-0 w-full">
              <div className="h-[56px] relative shrink-0 w-full">
                <div className="flex flex-row items-center justify-center size-full">
                  <div className="box-border content-stretch flex gap-[16px] h-[56px] items-center justify-center px-[16px] py-0 relative w-full">
                    {/* Leading icon */}
                    <div className="content-stretch flex items-center justify-center relative shrink-0">
                      <div className="relative shrink-0 size-[24px]">
                        <div className="absolute inset-0 overflow-clip">
                          <div className="absolute inset-[8.33%]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                              <path d="M14.166 2.5H5.833c-.92 0-1.666.746-1.666 1.667v11.666c0 .92.746 1.667 1.666 1.667h8.333c.92 0 1.667-.746 1.667-1.667V4.167c0-.92-.746-1.667-1.667-1.667Z" stroke="#44483B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                              <path d="M7.5 7.5h5M7.5 10.833h5M7.5 14.167h2.5" stroke="#44483B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Content */}
                    <div className="basis-0 content-stretch flex flex-col font-['Manrope:Regular',sans-serif] font-normal grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0">
                      <div className="flex flex-col justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] tracking-[0.5px] w-full">
                        <p className="leading-[24px] m-0">Notat</p>
                      </div>
                      <p className="[white-space-collapse:collapse] h-[20px] leading-[20px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#44483b] text-[14px] text-nowrap tracking-[0.25px] w-full m-0">Personlige notater</p>
                    </div>
                    {/* Plus button (only in empty or view mode) */}
                    {mode !== 'edit' && (
                      <button
                        onClick={() => {
                          setMode('edit');
                          setTempText(notatText);
                        }}
                        className="flex items-center justify-center size-[24px] shrink-0 hover:bg-[#f5f5f0] rounded-[4px] transition-colors"
                      >
                        <Plus size={20} color="#44483B" />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Edit mode - Text input */}
            {mode === 'edit' && (
              <div className="relative rounded-[8px] shrink-0 w-full">
                <div aria-hidden="true" className="absolute border border-[#c4c8b7] border-solid inset-0 pointer-events-none rounded-[8px]" />
                <div className="flex flex-col gap-2 p-3">
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex-1">
                      <p className="label-small text-muted-foreground m-0 mb-1">Tekstsvar</p>
                      <textarea
                        ref={textareaRef}
                        value={tempText}
                        onChange={(e) => setTempText(e.target.value)}
                        placeholder="Skriv dine notater her..."
                        rows={1}
                        className="w-full p-2 border-none outline-none resize-none body-large text-foreground bg-transparent overflow-hidden"
                        style={{ minHeight: '80px' }}
                      />
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={handleCancel}
                        className="flex items-center justify-center size-[32px] shrink-0 hover:bg-[#f5f5f0] rounded-[4px] transition-colors"
                      >
                        <X size={20} color="#44483B" />
                      </button>
                      <button
                        onClick={handleSave}
                        className="flex items-center justify-center size-[32px] shrink-0 hover:bg-[#f5f5f0] rounded-[4px] transition-colors"
                      >
                        <Check size={20} color="#44483B" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* View mode - Display saved text */}
            {mode === 'view' && (
              <div className="flex flex-col gap-1 w-full">
                <p className="label-small text-muted-foreground m-0">Tekstsvar</p>
                <p className="body-large text-foreground m-0">{notatText}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
