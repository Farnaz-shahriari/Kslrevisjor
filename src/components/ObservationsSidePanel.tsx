import { useState, useRef, useEffect } from 'react';
import { Lightbulb, SmilePlus, Upload, X } from 'lucide-react';

interface ObservationsSidePanelProps {
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

export function ObservationsSidePanel({
  improvementText: initialImprovementText = '',
  improvementImages: initialImprovementImages = [],
  positiveText: initialPositiveText = '',
  positiveImages: initialPositiveImages = [],
  onUpdate
}: ObservationsSidePanelProps) {
  const [improvementText, setImprovementText] = useState(initialImprovementText);
  const [improvementImages, setImprovementImages] = useState<string[]>(initialImprovementImages);
  const [positiveText, setPositiveText] = useState(initialPositiveText);
  const [positiveImages, setPositiveImages] = useState<string[]>(initialPositiveImages);
  
  const improvementFileInputRef = useRef<HTMLInputElement>(null);
  const positiveFileInputRef = useRef<HTMLInputElement>(null);

  // Update state when initial props change
  useEffect(() => {
    setImprovementText(initialImprovementText);
  }, [initialImprovementText]);

  useEffect(() => {
    setImprovementImages(initialImprovementImages);
  }, [initialImprovementImages]);

  useEffect(() => {
    setPositiveText(initialPositiveText);
  }, [initialPositiveText]);

  useEffect(() => {
    setPositiveImages(initialPositiveImages);
  }, [initialPositiveImages]);

  const handleImprovementTextChange = (text: string) => {
    setImprovementText(text);
    onUpdate?.({
      improvementText: text,
      improvementImages,
      positiveText,
      positiveImages
    });
  };

  const handlePositiveTextChange = (text: string) => {
    setPositiveText(text);
    onUpdate?.({
      improvementText,
      improvementImages,
      positiveText: text,
      positiveImages
    });
  };

  const handleImprovementImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const newImages = Array.from(files).map(file => URL.createObjectURL(file));
      const updatedImages = [...improvementImages, ...newImages];
      setImprovementImages(updatedImages);
      onUpdate?.({
        improvementText,
        improvementImages: updatedImages,
        positiveText,
        positiveImages
      });
    }
  };

  const handlePositiveImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const newImages = Array.from(files).map(file => URL.createObjectURL(file));
      const updatedImages = [...positiveImages, ...newImages];
      setPositiveImages(updatedImages);
      onUpdate?.({
        improvementText,
        improvementImages,
        positiveText,
        positiveImages: updatedImages
      });
    }
  };

  const removeImprovementImage = (index: number) => {
    const updatedImages = improvementImages.filter((_, i) => i !== index);
    setImprovementImages(updatedImages);
    onUpdate?.({
      improvementText,
      improvementImages: updatedImages,
      positiveText,
      positiveImages
    });
  };

  const removePositiveImage = (index: number) => {
    const updatedImages = positiveImages.filter((_, i) => i !== index);
    setPositiveImages(updatedImages);
    onUpdate?.({
      improvementText,
      improvementImages,
      positiveText,
      positiveImages: updatedImages
    });
  };

  return (
    <div className="flex flex-col gap-4 w-full">
      {/* Forbedringspunkter */}
      <div className="bg-[#fafaf0] rounded-[12px] border border-[#c4c8b7] overflow-hidden">
        <div className="flex flex-col w-full">
          {/* Header */}
          <div className="flex gap-4 items-start p-4 border-b border-[#c4c8b7]">
            <div className="flex items-center justify-center shrink-0 w-6 h-6">
              <Lightbulb className="w-6 h-6 text-[#1a1c16]" />
            </div>
            <div className="flex flex-col flex-1 min-w-0">
              <p className="body-large text-[#1a1c16] m-0">Forbedringspunkter</p>
              <p className="body-medium text-[#44483b] m-0">Anbefalinger for videre forbedring</p>
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col gap-3 p-4">
            {/* Text input */}
            <textarea
              value={improvementText}
              onChange={(e) => handleImprovementTextChange(e.target.value)}
              placeholder="Skriv forbedringspunkter her..."
              className="w-full min-h-[120px] px-3 py-2 border-2 border-[#c4c8b7] rounded-[8px] text-[#1a1c16] text-[16px] leading-[24px] font-['Manrope:Regular',sans-serif] focus:outline-none focus:border-[#4a671e] resize-vertical"
            />

            {/* Upload button */}
            <div className="flex flex-col gap-2">
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
                className="flex items-center gap-2 px-3 py-2 border border-[#79747e] rounded-[8px] text-[#4a671e] hover:bg-[#eff1e7] transition-colors"
              >
                <Upload className="w-5 h-5" />
                <span className="label-large">Last opp bilde</span>
              </button>

              {/* Image thumbnails */}
              {improvementImages.length > 0 && (
                <div className="flex flex-col gap-2">
                  {improvementImages.map((image, index) => (
                    <div key={index} className="flex items-center gap-3 p-2 bg-white rounded-[8px] border border-[#c4c8b7]">
                      <img
                        src={image}
                        alt={`Forbedring ${index + 1}`}
                        className="w-14 h-14 object-cover rounded-[4px]"
                      />
                      <div className="flex-1 min-w-0">
                        <p className="body-medium text-[#1a1c16] truncate m-0">Bilde {index + 1}</p>
                      </div>
                      <button
                        onClick={() => removeImprovementImage(index)}
                        className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-[#eff1e7] transition-colors shrink-0"
                      >
                        <X className="w-5 h-5 text-[#44483b]" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Positive observasjoner */}
      <div className="bg-[#fafaf0] rounded-[12px] border border-[#c4c8b7] overflow-hidden">
        <div className="flex flex-col w-full">
          {/* Header */}
          <div className="flex gap-4 items-start p-4 border-b border-[#c4c8b7]">
            <div className="flex items-center justify-center shrink-0 w-6 h-6">
              <SmilePlus className="w-6 h-6 text-[#1a1c16]" />
            </div>
            <div className="flex flex-col flex-1 min-w-0">
              <p className="body-large text-[#1a1c16] m-0">Positive observasjoner</p>
              <p className="body-medium text-[#44483b] m-0">Tydelige funn som viser god praksis</p>
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col gap-3 p-4">
            {/* Text input */}
            <textarea
              value={positiveText}
              onChange={(e) => handlePositiveTextChange(e.target.value)}
              placeholder="Skriv positive observasjoner her..."
              className="w-full min-h-[120px] px-3 py-2 border-2 border-[#c4c8b7] rounded-[8px] text-[#1a1c16] text-[16px] leading-[24px] font-['Manrope:Regular',sans-serif] focus:outline-none focus:border-[#4a671e] resize-vertical"
            />

            {/* Upload button */}
            <div className="flex flex-col gap-2">
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
                className="flex items-center gap-2 px-3 py-2 border border-[#79747e] rounded-[8px] text-[#4a671e] hover:bg-[#eff1e7] transition-colors"
              >
                <Upload className="w-5 h-5" />
                <span className="label-large">Last opp bilde</span>
              </button>

              {/* Image thumbnails */}
              {positiveImages.length > 0 && (
                <div className="flex flex-col gap-2">
                  {positiveImages.map((image, index) => (
                    <div key={index} className="flex items-center gap-3 p-2 bg-white rounded-[8px] border border-[#c4c8b7]">
                      <img
                        src={image}
                        alt={`Positiv observasjon ${index + 1}`}
                        className="w-14 h-14 object-cover rounded-[4px]"
                      />
                      <div className="flex-1 min-w-0">
                        <p className="body-medium text-[#1a1c16] truncate m-0">Bilde {index + 1}</p>
                      </div>
                      <button
                        onClick={() => removePositiveImage(index)}
                        className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-[#eff1e7] transition-colors shrink-0"
                      >
                        <X className="w-5 h-5 text-[#44483b]" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
