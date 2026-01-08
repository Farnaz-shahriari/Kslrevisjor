import { useState, useRef, useEffect } from 'react';
import { TextInputField } from './ui/text-input-field';
import svgPaths from '../imports/svg-bywq3u55d8';

type SeverityLevel = 'lite-avvik' | 'avvik' | 'stor-avvik' | null;

interface DeviationData {
  severity?: SeverityLevel;
  mangel?: string;
  bevis?: string;
  bevisImages?: Array<{ id: string; name: string; url: string }>;
  krav?: string;
}

interface DeviationViewProps {
  deviationData?: DeviationData;
  onUpdate?: (data: DeviationData | undefined) => void;
  showTrengerUtfylling?: boolean;
}

// Predefined krav options
const KRAV_OPTIONS = [
  'Dyrevelferdsforskriften § 4 - Generelle krav om dyrevelferd og forsvarlig behandling',
  'Dyrevelferdsforskriften § 12 - Krav til bygninger og innredning for husdyr',
  'Matproduksjonsforskriften § 2 - Krav til hygiene og kontroll ved primærproduksjon'
];

export function DeviationView({ deviationData, onUpdate, showTrengerUtfylling }: DeviationViewProps) {
  const [selectedSeverity, setSelectedSeverity] = useState<SeverityLevel>(deviationData?.severity || null);
  const [severityExpanded, setSeverityExpanded] = useState(!deviationData?.severity);
  
  // Mangel, Bevis, Krav values
  const [mangelValue, setMangelValue] = useState(deviationData?.mangel || '');
  const [bevisValue, setBevisValue] = useState(deviationData?.bevis || '');
  const [kravValue, setKravValue] = useState(deviationData?.krav || '');
  
  // Bevis images state
  const [bevisImages, setBevisImages] = useState<Array<{ id: string; name: string; url: string }>>(
    deviationData?.bevisImages || []
  );
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Sync with deviationData when it changes
  useEffect(() => {
    if (deviationData) {
      if (deviationData.severity !== undefined) {
        setSelectedSeverity(deviationData.severity);
        setSeverityExpanded(!deviationData.severity);
      }
      if (deviationData.mangel !== undefined) {
        setMangelValue(deviationData.mangel);
      }
      if (deviationData.bevis !== undefined) {
        setBevisValue(deviationData.bevis);
      }
      if (deviationData.krav !== undefined) {
        setKravValue(deviationData.krav);
      }
      if (deviationData.bevisImages) {
        setBevisImages(deviationData.bevisImages);
      }
    }
  }, [deviationData]);

  const updateDeviationData = (updates: Partial<DeviationData>) => {
    const newData = {
      severity: selectedSeverity,
      mangel: mangelValue,
      bevis: bevisValue,
      bevisImages: bevisImages,
      krav: kravValue,
      ...updates
    };
    onUpdate?.(newData);
  };

  const handleSeveritySelect = (severity: SeverityLevel) => {
    // If clicking on already selected severity, unselect it
    if (selectedSeverity === severity) {
      setSelectedSeverity(null);
      setSeverityExpanded(true);
      updateDeviationData({ severity: null });
    } else {
      setSelectedSeverity(severity);
      setSeverityExpanded(false);
      updateDeviationData({ severity });
    }
  };

  const toggleSeverityExpanded = () => {
    setSeverityExpanded(!severityExpanded);
  };

  // Image upload handlers
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const newImages = Array.from(files).map((file, index) => ({
        id: `${Date.now()}-${index}`,
        name: file.name,
        url: URL.createObjectURL(file)
      }));
      const updatedImages = [...bevisImages, ...newImages];
      setBevisImages(updatedImages);
      updateDeviationData({ bevisImages: updatedImages });
    }
    // Reset file input
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleDeleteImage = (id: string) => {
    const updatedImages = bevisImages.filter(img => img.id !== id);
    setBevisImages(updatedImages);
    updateDeviationData({ bevisImages: updatedImages });
  };

  // Krav handlers
  const handleKravAdd = () => {
    setKravValue('');
    updateDeviationData({ krav: '' });
  };

  const handleKravEdit = () => {
    setKravValue('');
    updateDeviationData({ krav: '' });
  };

  const handleKravInputChange = (value: string) => {
    setKravValue(value);
    if (value.trim()) {
      const filtered = KRAV_OPTIONS.filter(option =>
        option.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredKravOptions(filtered);
      setShowKravDropdown(true);
    } else {
      setFilteredKravOptions(KRAV_OPTIONS);
      setShowKravDropdown(true);
    }
  };

  const handleKravSelect = (option: string) => {
    setKravValue(option);
    setKravMode('view');
    setShowKravDropdown(false);
    updateDeviationData({ krav: option });
  };

  const handleKravSave = () => {
    const trimmed = kravValue.trim();
    if (trimmed) {
      setKravValue(trimmed);
      setKravMode('view');
      setShowKravDropdown(false);
      updateDeviationData({ krav: trimmed });
    } else {
      setKravValue('');
      setKravMode('empty');
      setShowKravDropdown(false);
      updateDeviationData({ krav: '' });
    }
  };

  const handleKravBlur = () => {
    // Delay to allow clicking on dropdown items
    setTimeout(() => {
      setShowKravDropdown(false);
      handleKravSave();
    }, 200);
  };

  const handleDelete = () => {
    setSelectedSeverity(null);
    setMangelValue('');
    setBevisValue('');
    setBevisImages([]);
    setKravValue('');
    onUpdate?.(undefined);
  };

  return (
    <div className="w-full">
      <div className="border border-border rounded-[var(--radius-card)] p-4">
        {/* Deviation Grades */}
        <div className="mb-4">
          {/* Title */}
          <h3 className="title-medium mb-3 mt-0">Hvor langt er avviket fra kravet?</h3>
          
          {/* Collapsed view - show only selected */}
          {!severityExpanded && selectedSeverity && (
            <button
              onClick={toggleSeverityExpanded}
              className={`rounded-lg h-14 min-h-14 px-4 flex items-center gap-3 w-full ${
                selectedSeverity === 'lite-avvik' ? 'bg-[#fdeeb1]' :
                selectedSeverity === 'avvik' ? 'bg-[#fdd19f]' :
                'bg-[#ffdad6]'
              }`}
            >
              <div className="flex-1 flex items-center justify-start min-w-0">
                <p className={`body-large m-0 leading-6 ${
                  selectedSeverity === 'lite-avvik' ? 'text-[#3d2c00]' :
                  selectedSeverity === 'avvik' ? 'text-[#3d2100]' :
                  'text-[#410002]'
                }`}>
                  {selectedSeverity === 'lite-avvik' ? 'Lite avvik' :
                   selectedSeverity === 'avvik' ? 'Avvik' :
                   'Stor avvik'}
                </p>
              </div>
              <div className="shrink-0 flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M7 10L12 15L17 10" stroke="#44483B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </button>
          )}

          {/* Expanded view - show all with radio buttons */}
          {severityExpanded && (
            <div className="flex flex-col gap-2">
              {/* Lite avvik */}
              <button
                onClick={() => handleSeveritySelect('lite-avvik')}
                className="bg-[#fdeeb1] rounded-lg h-14 min-h-14 px-4 flex items-center gap-3 w-full hover:opacity-90 transition-opacity"
              >
                <div className="shrink-0 flex items-center justify-center size-5">
                  <div className={`size-5 rounded-full border-2 flex items-center justify-center ${
                    selectedSeverity === 'lite-avvik' 
                      ? 'border-[#3d2c00] bg-[#3d2c00]' 
                      : 'border-[#3d2c00]'
                  }`}>
                    {selectedSeverity === 'lite-avvik' && (
                      <div className="size-2 rounded-full bg-[#fdeeb1]"></div>
                    )}
                  </div>
                </div>
                <div className="flex-1 flex items-center justify-start min-w-0">
                  <p className="body-large text-[#3d2c00] m-0 leading-6">Lite avvik</p>
                </div>
              </button>

              {/* Avvik */}
              <button
                onClick={() => handleSeveritySelect('avvik')}
                className="bg-[#fdd19f] rounded-lg h-14 min-h-14 px-4 flex items-center gap-3 w-full hover:opacity-90 transition-opacity"
              >
                <div className="shrink-0 flex items-center justify-center size-5">
                  <div className={`size-5 rounded-full border-2 flex items-center justify-center ${
                    selectedSeverity === 'avvik' 
                      ? 'border-[#3d2100] bg-[#3d2100]' 
                      : 'border-[#3d2100]'
                  }`}>
                    {selectedSeverity === 'avvik' && (
                      <div className="size-2 rounded-full bg-[#fdd19f]"></div>
                    )}
                  </div>
                </div>
                <div className="flex-1 flex items-center justify-start min-w-0">
                  <p className="body-large text-[#3d2100] m-0 leading-6">Avvik</p>
                </div>
              </button>

              {/* Stor avvik */}
              <button
                onClick={() => handleSeveritySelect('stor-avvik')}
                className="bg-[#ffdad6] rounded-lg h-14 min-h-14 px-4 flex items-center gap-3 w-full hover:opacity-90 transition-opacity"
              >
                <div className="shrink-0 flex items-center justify-center size-5">
                  <div className={`size-5 rounded-full border-2 flex items-center justify-center ${
                    selectedSeverity === 'stor-avvik' 
                      ? 'border-[#410002] bg-[#410002]' 
                      : 'border-[#410002]'
                  }`}>
                    {selectedSeverity === 'stor-avvik' && (
                      <div className="size-2 rounded-full bg-[#ffdad6]"></div>
                    )}
                  </div>
                </div>
                <div className="flex-1 flex items-center justify-start min-w-0">
                  <p className="body-large text-[#410002] m-0 leading-6">Stor avvik</p>
                </div>
              </button>
            </div>
          )}
        </div>

        {/* Divider */}
        <div className="h-0 w-full relative mb-4">
          <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 496 1">
              <line stroke="#C4C8B7" x2="496" y1="0.5" y2="0.5" />
            </svg>
          </div>
        </div>

        {/* Mangel Section */}
        <TextInputField
          label="Mangel"
          value={mangelValue}
          onChange={(value) => {
            setMangelValue(value);
            updateDeviationData({ mangel: value });
          }}
          placeholder="Mangel"
          multiline={false}
          showTrengerUtfylling={showTrengerUtfylling}
        />

        {/* Divider */}
        <div className="h-0 w-full relative mb-2">
          <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 496 1">
              <line stroke="#C4C8B7" x2="496" y1="0.5" y2="0.5" />
            </svg>
          </div>
        </div>

        {/* Bevis Section */}
        <TextInputField
          label="Bevis"
          value={bevisValue}
          onChange={(value) => {
            setBevisValue(value);
            updateDeviationData({ bevis: value });
          }}
          placeholder="Bevis"
          multiline={false}
          showTrengerUtfylling={showTrengerUtfylling}
        />

        {/* Upload Button */}
        <div className="mb-4">
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            multiple
            onChange={handleImageUpload}
            className="hidden"
          />
          <button
            onClick={() => fileInputRef.current?.click()}
            className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-[var(--radius-button)] border border-border w-auto hover:bg-muted transition-colors"
          >
            <div className="size-5">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
                <path d={svgPaths.p31c8a300} fill="#44483B" />
              </svg>
            </div>
            <p className="label-medium text-muted-foreground m-0 whitespace-nowrap">Last opp bilde</p>
          </button>
        </div>

        {/* Uploaded Images List */}
        {bevisImages.map((image) => (
          <div key={image.id} className="flex items-center gap-4 px-4 py-2 min-h-18 mb-2">
            <div className="shrink-0 size-14">
              <img
                src={image.url}
                alt={image.name}
                className="w-full h-full object-cover rounded"
              />
            </div>
            <div className="flex-1 flex flex-col justify-center">
              <p className="body-large text-foreground m-0 leading-6">{image.name}</p>
            </div>
            <button
              onClick={() => handleDeleteImage(image.id)}
              className="flex items-center justify-center shrink-0 hover:bg-muted rounded transition-colors p-1"
            >
              <div className="size-6">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 18">
                  <path d={svgPaths.p4c48400} fill="#44483B" />
                </svg>
              </div>
            </button>
          </div>
        ))}

        {/* Divider between Bevis and Krav */}
        <div className="h-0 w-full relative mb-2">
          <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 496 1">
              <line stroke="#C4C8B7" x2="496" y1="0.5" y2="0.5" />
            </svg>
          </div>
        </div>

        {/* Krav Section */}
        <TextInputField
          label="Krav (fra veileder)"
          value={kravValue}
          onChange={(value) => {
            setKravValue(value);
            updateDeviationData({ krav: value });
          }}
          placeholder="Krav (fra veileder)"
          multiline={false}
          showTrengerUtfylling={showTrengerUtfylling}
        />

        {/* Delete Button */}
        <div className="flex items-center justify-end w-full">
          <button
            onClick={handleDelete}
            className="flex items-center justify-center px-6 py-4 rounded-[var(--radius-button)] hover:bg-muted transition-colors"
          >
            <p className="body-large text-primary m-0 whitespace-nowrap">Slett avvik</p>
          </button>
        </div>
      </div>
    </div>
  );
}