import { useState, useRef, useEffect } from 'react';
import svgPaths from '../imports/svg-0xfhwo02nd';
import { X, Plus, Check } from 'lucide-react';
import { InlineEditableListItem } from './ui/inline-editable-list-item';

type EditMode = 'empty' | 'edit' | 'view';

interface ObservationViewProps {
  improvementText?: string;
  improvementImages?: string[];
  positiveText?: string;
  positiveImages?: string[];
  onUpdate?: (data: {
    improvementText?: string;
    improvementImages?: string[];
    positiveText?: string;
    positiveImages?: string[];
  }) => void;
}

export function ObservationView({
  improvementText: initialImprovementText,
  improvementImages: initialImprovementImages,
  positiveText: initialPositiveText,
  positiveImages: initialPositiveImages,
  onUpdate
}: ObservationViewProps) {
  const [improvementMode, setImprovementMode] = useState<EditMode>(
    initialImprovementText ? 'view' : 'empty'
  );
  const [positiveMode, setPositiveMode] = useState<EditMode>(
    initialPositiveText ? 'view' : 'empty'
  );
  const [improvementText, setImprovementText] = useState(initialImprovementText || '');
  const [positiveText, setPositiveText] = useState(initialPositiveText || '');
  const [improvementTempText, setImprovementTempText] = useState('');
  const [positiveTempText, setPositiveTempText] = useState('');
  const [improvementImages, setImprovementImages] = useState<string[]>(initialImprovementImages || []);
  const [positiveImages, setPositiveImages] = useState<string[]>(initialPositiveImages || []);
  const improvementFileInputRef = useRef<HTMLInputElement>(null);
  const positiveFileInputRef = useRef<HTMLInputElement>(null);

  // Sync internal state with props when they change (when question changes)
  useEffect(() => {
    setImprovementText(initialImprovementText || '');
    setPositiveText(initialPositiveText || '');
    setImprovementImages(initialImprovementImages || []);
    setPositiveImages(initialPositiveImages || []);
  }, [initialImprovementText, initialPositiveText, initialImprovementImages, initialPositiveImages]);

  const handleImprovementImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const newImages: string[] = [];
      Array.from(files).forEach(file => {
        const reader = new FileReader();
        reader.onloadend = () => {
          newImages.push(reader.result as string);
          if (newImages.length === files.length) {
            setImprovementImages(prev => {
              const updated = [...prev, ...newImages];
              onUpdate?.({
                improvementText,
                improvementImages: updated,
                positiveText,
                positiveImages
              });
              return updated;
            });
          }
        };
        reader.readAsDataURL(file);
      });
    }
  };

  const handlePositiveImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const newImages: string[] = [];
      Array.from(files).forEach(file => {
        const reader = new FileReader();
        reader.onloadend = () => {
          newImages.push(reader.result as string);
          if (newImages.length === files.length) {
            setPositiveImages(prev => {
              const updated = [...prev, ...newImages];
              onUpdate?.({
                improvementText,
                improvementImages,
                positiveText,
                positiveImages: updated
              });
              return updated;
            });
          }
        };
        reader.readAsDataURL(file);
      });
    }
  };

  const removeImprovementImage = (index: number) => {
    setImprovementImages(prev => {
      const updated = prev.filter((_, i) => i !== index);
      onUpdate?.({
        improvementText,
        improvementImages: updated,
        positiveText,
        positiveImages
      });
      return updated;
    });
  };

  const removePositiveImage = (index: number) => {
    setPositiveImages(prev => {
      const updated = prev.filter((_, i) => i !== index);
      onUpdate?.({
        improvementText,
        improvementImages,
        positiveText,
        positiveImages: updated
      });
      return updated;
    });
  };

  const handleImprovementSave = () => {
    if (improvementTempText.trim()) {
      setImprovementText(improvementTempText);
      setImprovementMode('view');
    } else {
      setImprovementMode('empty');
      setImprovementTempText('');
    }
  };

  const handlePositiveSave = () => {
    if (positiveTempText.trim()) {
      setPositiveText(positiveTempText);
      setPositiveMode('view');
    } else {
      setPositiveMode('empty');
      setPositiveTempText('');
    }
  };

  const handleImprovementCancel = () => {
    setImprovementTempText(improvementText);
    if (improvementText) {
      setImprovementMode('view');
    } else {
      setImprovementMode('empty');
    }
  };

  const handlePositiveCancel = () => {
    setPositiveTempText(positiveText);
    if (positiveText) {
      setPositiveMode('view');
    } else {
      setPositiveMode('empty');
    }
  };

  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start shrink-0 w-full">
      {/* Forbedringspunkter */}
      <div className="max-w-[880px] relative rounded-[12px] shrink-0 w-full">
        <div aria-hidden="true" className="absolute border border-[#c4c8b7] border-solid inset-0 pointer-events-none rounded-[12px]" />
        <div className="max-w-inherit size-full">
          <div className="box-border content-stretch flex flex-col gap-[8px] items-start max-w-inherit p-[16px] relative w-full">
            {/* Header */}
            <div className="content-stretch flex flex-col items-center justify-center min-h-[56px] relative shrink-0 w-full">
              <div className="h-[56px] relative shrink-0 w-full">
                <div className="flex flex-row items-center justify-center size-full">
                  <div className="box-border content-stretch flex gap-[16px] h-[56px] items-center justify-center px-[16px] py-0 relative w-full">
                    {/* Leading icon */}
                    <div className="content-stretch flex items-center justify-center relative shrink-0">
                      <div className="relative shrink-0 size-[24px]">
                        <div className="absolute inset-0 overflow-clip">
                          <div className="absolute inset-[4.17%_3.13%]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23 22">
                              <path d={svgPaths.p11afaa00} fill="#44483B" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Content */}
                    <div className="basis-0 content-stretch flex flex-col font-['Manrope:Regular',sans-serif] font-normal grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0">
                      <div className="flex flex-col justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] tracking-[0.5px] w-full">
                        <p className="leading-[24px] m-0">Forbedringspunkter</p>
                      </div>
                      <p className="[white-space-collapse:collapse] h-[20px] leading-[20px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#44483b] text-[14px] text-nowrap tracking-[0.25px] w-full m-0">Anbefalinger for videre forbedring</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Tekstsvar input */}
            <div className="w-full">
              <InlineEditableListItem
                label="Tekstsvar"
                value={improvementText}
                onSave={(value) => {
                  setImprovementText(value);
                  onUpdate?.({
                    improvementText: value,
                    improvementImages,
                    positiveText,
                    positiveImages
                  });
                }}
                required={false}
                placeholder="Skriv forbedringspunkter..."
              />
            </div>

            {/* Upload button */}
            <div className="content-stretch flex h-[48px] items-center justify-center relative shrink-0">
              <input
                ref={improvementFileInputRef}
                type="file"
                accept="image/*"
                multiple
                onChange={handleImprovementImageUpload}
                className="hidden"
              />
              <button
                onClick={() => improvementFileInputRef.current?.click()}
                className="relative rounded-[100px] shrink-0 hover:bg-[#f5f5f0] transition-colors cursor-pointer"
              >
                <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[inherit]">
                  <div className="box-border content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[10px] relative shrink-0">
                    <div className="relative shrink-0 size-[20px]">
                      <div className="absolute inset-[16.667%]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
                          <path d={svgPaths.p31c8a300} fill="#44483B" />
                        </svg>
                      </div>
                    </div>
                    <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#44483b] text-[14px] text-nowrap tracking-[0.1px]">
                      <p className="leading-[20px] whitespace-pre m-0">Last opp bilde</p>
                    </div>
                  </div>
                </div>
                <div aria-hidden="true" className="absolute border border-[#c4c8b7] border-solid inset-0 pointer-events-none rounded-[100px]" />
              </button>
            </div>

            {/* Display uploaded images */}
            {improvementImages.length > 0 && (
              <div className="flex flex-wrap gap-2 w-full mt-2">
                {improvementImages.map((image, index) => (
                  <div key={index} className="relative group">
                    <img 
                      src={image} 
                      alt={`Forbedringspunkt ${index + 1}`}
                      className="w-24 h-24 object-cover rounded-[8px] border border-[#c4c8b7]"
                    />
                    <button
                      onClick={() => removeImprovementImage(index)}
                      className="absolute -top-2 -right-2 bg-[#1a1c16] text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <X size={16} />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Positive observasjoner */}
      <div className="max-w-[880px] relative rounded-[12px] shrink-0 w-full">
        <div aria-hidden="true" className="absolute border border-[#c4c8b7] border-solid inset-0 pointer-events-none rounded-[12px]" />
        <div className="max-w-inherit size-full">
          <div className="box-border content-stretch flex flex-col gap-[8px] items-start max-w-inherit p-[16px] relative w-full">
            {/* Header */}
            <div className="content-stretch flex flex-col items-center justify-center min-h-[56px] relative shrink-0 w-full">
              <div className="h-[56px] relative shrink-0 w-full">
                <div className="flex flex-row items-center justify-center size-full">
                  <div className="box-border content-stretch flex gap-[16px] h-[56px] items-center justify-center px-[16px] py-0 relative w-full">
                    {/* Leading icon */}
                    <div className="content-stretch flex items-center justify-center relative shrink-0">
                      <div className="relative shrink-0 size-[24px]">
                        <div className="absolute inset-0 overflow-clip">
                          <div className="absolute inset-[6.25%_4.17%]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 21">
                              <path d={svgPaths.p1b6ca280} fill="#44483B" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Content */}
                    <div className="basis-0 content-stretch flex flex-col font-['Manrope:Regular',sans-serif] font-normal grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0">
                      <div className="flex flex-col justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] tracking-[0.5px] w-full">
                        <p className="leading-[24px] m-0">Positive observasjoner</p>
                      </div>
                      <p className="[white-space-collapse:collapse] h-[20px] leading-[20px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#44483b] text-[14px] text-nowrap tracking-[0.25px] w-full m-0">Tydelige funn som viser god praksis</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Tekstsvar input */}
            <div className="w-full">
              <InlineEditableListItem
                label="Tekstsvar"
                value={positiveText}
                onSave={(value) => {
                  setPositiveText(value);
                  onUpdate?.({
                    improvementText,
                    improvementImages,
                    positiveText: value,
                    positiveImages
                  });
                }}
                required={false}
                placeholder="Skriv positive observasjoner..."
              />
            </div>

            {/* Upload button */}
            <div className="content-stretch flex h-[48px] items-center justify-center relative shrink-0">
              <input
                ref={positiveFileInputRef}
                type="file"
                accept="image/*"
                multiple
                onChange={handlePositiveImageUpload}
                className="hidden"
              />
              <button
                onClick={() => positiveFileInputRef.current?.click()}
                className="relative rounded-[100px] shrink-0 hover:bg-[#f5f5f0] transition-colors cursor-pointer"
              >
                <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[inherit]">
                  <div className="box-border content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[10px] relative shrink-0">
                    <div className="relative shrink-0 size-[20px]">
                      <div className="absolute inset-[16.667%]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
                          <path d={svgPaths.p31c8a300} fill="#44483B" />
                        </svg>
                      </div>
                    </div>
                    <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#44483b] text-[14px] text-nowrap tracking-[0.1px]">
                      <p className="leading-[20px] whitespace-pre m-0">Last opp bilde</p>
                    </div>
                  </div>
                </div>
                <div aria-hidden="true" className="absolute border border-[#c4c8b7] border-solid inset-0 pointer-events-none rounded-[100px]" />
              </button>
            </div>

            {/* Display uploaded images */}
            {positiveImages.length > 0 && (
              <div className="flex flex-wrap gap-2 w-full mt-2">
                {positiveImages.map((image, index) => (
                  <div key={index} className="relative group">
                    <img 
                      src={image} 
                      alt={`Positiv observasjon ${index + 1}`}
                      className="w-24 h-24 object-cover rounded-[8px] border border-[#c4c8b7]"
                    />
                    <button
                      onClick={() => removePositiveImage(index)}
                      className="absolute -top-2 -right-2 bg-[#1a1c16] text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <X size={16} />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
