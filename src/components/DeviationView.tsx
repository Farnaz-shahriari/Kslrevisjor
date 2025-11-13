import { useState, useRef, useEffect } from 'react';
import svgPaths from '../imports/svg-bywq3u55d8';
import svgPathsCommon from '../imports/svg-0xfhwo02nd';

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
}

// Predefined krav options
const KRAV_OPTIONS = [
  'Dyrevelferdsforskriften § 4 - Generelle krav om dyrevelferd og forsvarlig behandling',
  'Dyrevelferdsforskriften § 12 - Krav til bygninger og innredning for husdyr',
  'Matproduksjonsforskriften § 2 - Krav til hygiene og kontroll ved primærproduksjon'
];

export function DeviationView({ deviationData, onUpdate }: DeviationViewProps) {
  const [selectedSeverity, setSelectedSeverity] = useState<SeverityLevel>(deviationData?.severity || null);
  const [severityExpanded, setSeverityExpanded] = useState(!deviationData?.severity);
  
  // Mangel state
  const [mangelMode, setMangelMode] = useState<'empty' | 'edit' | 'view'>('empty');
  const [mangelValue, setMangelValue] = useState(deviationData?.mangel || '');
  const [mangelEditValue, setMangelEditValue] = useState('');
  
  // Bevis text state
  const [bevisMode, setBevisMode] = useState<'empty' | 'edit' | 'view'>('empty');
  const [bevisValue, setBevisValue] = useState(deviationData?.bevis || '');
  const [bevisEditValue, setBevisEditValue] = useState('');
  
  // Bevis images state
  const [bevisImages, setBevisImages] = useState<Array<{ id: string; name: string; url: string }>>(
    deviationData?.bevisImages || []
  );
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  // Krav state
  const [kravMode, setKravMode] = useState<'empty' | 'edit' | 'view'>('empty');
  const [kravValue, setKravValue] = useState(deviationData?.krav || '');
  const [kravEditValue, setKravEditValue] = useState('');
  const [showKravDropdown, setShowKravDropdown] = useState(false);
  const [filteredKravOptions, setFilteredKravOptions] = useState(KRAV_OPTIONS);
  const kravInputRef = useRef<HTMLInputElement>(null);

  // Sync with deviationData when it changes
  useEffect(() => {
    if (deviationData) {
      if (deviationData.severity !== undefined) {
        setSelectedSeverity(deviationData.severity);
        setSeverityExpanded(!deviationData.severity);
      }
      if (deviationData.mangel) {
        setMangelMode('view');
        setMangelValue(deviationData.mangel);
      }
      if (deviationData.bevis) {
        setBevisMode('view');
        setBevisValue(deviationData.bevis);
      }
      if (deviationData.krav) {
        setKravMode('view');
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

  // Mangel handlers
  const handleMangelAdd = () => {
    setMangelMode('edit');
    setMangelEditValue(mangelValue);
  };

  const handleMangelEdit = () => {
    setMangelMode('edit');
    setMangelEditValue(mangelValue);
  };

  const handleMangelSave = () => {
    const trimmed = mangelEditValue.trim();
    if (trimmed) {
      setMangelValue(trimmed);
      setMangelMode('view');
      updateDeviationData({ mangel: trimmed });
    } else {
      setMangelValue('');
      setMangelMode('empty');
      updateDeviationData({ mangel: '' });
    }
  };

  const handleMangelBlur = () => {
    handleMangelSave();
  };

  // Bevis text handlers
  const handleBevisAdd = () => {
    setBevisMode('edit');
    setBevisEditValue(bevisValue);
  };

  const handleBevisEdit = () => {
    setBevisMode('edit');
    setBevisEditValue(bevisValue);
  };

  const handleBevisSave = () => {
    const trimmed = bevisEditValue.trim();
    if (trimmed) {
      setBevisValue(trimmed);
      setBevisMode('view');
      updateDeviationData({ bevis: trimmed });
    } else {
      setBevisValue('');
      setBevisMode('empty');
      updateDeviationData({ bevis: '' });
    }
  };

  const handleBevisBlur = () => {
    handleBevisSave();
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
    setKravMode('edit');
    setKravEditValue(kravValue);
    setShowKravDropdown(true);
    setFilteredKravOptions(KRAV_OPTIONS);
    setTimeout(() => kravInputRef.current?.focus(), 0);
  };

  const handleKravEdit = () => {
    setKravMode('edit');
    setKravEditValue(kravValue);
    setShowKravDropdown(true);
    setFilteredKravOptions(KRAV_OPTIONS);
    setTimeout(() => kravInputRef.current?.focus(), 0);
  };

  const handleKravInputChange = (value: string) => {
    setKravEditValue(value);
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
    setKravEditValue(option);
    setKravValue(option);
    setKravMode('view');
    setShowKravDropdown(false);
    updateDeviationData({ krav: option });
  };

  const handleKravSave = () => {
    const trimmed = kravEditValue.trim();
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
    setMangelMode('empty');
    setMangelValue('');
    setBevisMode('empty');
    setBevisValue('');
    setBevisImages([]);
    setKravMode('empty');
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
        <div className="box-border content-stretch flex flex-col gap-[8px] items-center justify-center min-h-[64px] overflow-visible pb-0 pt-[8px] px-0 relative shrink-0 w-full mb-2">
          <div className="relative shrink-0 w-full">
            <div className="flex flex-row items-center size-full">
              <div className="box-border content-stretch flex gap-[8px] items-center p-[8px] relative w-full">
                {mangelMode === 'empty' && (
                  <>
                    <div className="basis-0 content-stretch flex flex-col grow items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0">
                      <div className="flex flex-col justify-center leading-[0] relative shrink-0 text-foreground text-[16px] tracking-[0.5px] w-full">
                        <p className="leading-[24px] m-0">Mangel</p>
                      </div>
                      <p className="leading-[20px] relative shrink-0 text-muted-foreground text-[14px] tracking-[0.25px] w-full m-0">Påkrevd</p>
                    </div>
                    <div className="content-stretch flex items-center justify-center relative shrink-0">
                      <button 
                        onClick={handleMangelAdd}
                        className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[100px] shrink-0 w-[32px] h-[32px] hover:bg-muted transition-colors"
                      >
                        <div className="relative shrink-0 size-[20px]">
                          <div className="absolute inset-[21%]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
                              <path d={svgPathsCommon.p2ccb20} fill="#44483B" />
                            </svg>
                          </div>
                        </div>
                      </button>
                    </div>
                  </>
                )}
                {mangelMode === 'edit' && (
                  <>
                    <div className="basis-0 grow relative">
                      <label className="flex flex-col justify-center leading-[0] relative shrink-0 text-muted-foreground text-[12px] tracking-[0.5px] mb-1">
                        <p className="leading-[16px] m-0">Mangel</p>
                      </label>
                      <input
                        type="text"
                        value={mangelEditValue}
                        onChange={(e) => setMangelEditValue(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleMangelSave()}
                        onBlur={handleMangelBlur}
                        placeholder="Mangel"
                        autoFocus
                        className="w-full px-3 py-2 border border-border rounded-[8px] text-foreground bg-input-background focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
                      />
                    </div>
                    <div className="content-stretch flex items-center justify-center relative shrink-0">
                      <button 
                        onClick={handleMangelSave}
                        className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[100px] shrink-0 w-[32px] h-[32px] hover:bg-muted transition-colors"
                      >
                        <div className="relative shrink-0 size-[20px]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                            <path d="M16.667 5L7.5 14.167L3.333 10" stroke="#44483B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                          </svg>
                        </div>
                      </button>
                    </div>
                  </>
                )}
                {mangelMode === 'view' && (
                  <>
                    <div 
                      onClick={handleMangelEdit}
                      className="basis-0 content-stretch flex flex-col grow items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0 cursor-pointer hover:bg-muted rounded-[8px] p-2 -ml-2 transition-colors"
                    >
                      <div className="flex flex-col justify-center leading-[0] relative shrink-0 text-muted-foreground text-[12px] tracking-[0.5px] w-full mb-1">
                        <p className="leading-[16px] m-0">Mangel</p>
                      </div>
                      <p className="leading-[24px] relative shrink-0 text-foreground text-[16px] tracking-[0.5px] w-full m-0">{mangelValue}</p>
                    </div>
                    <div className="content-stretch flex items-center justify-center relative shrink-0">
                      <button 
                        onClick={handleMangelEdit}
                        className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[100px] shrink-0 w-[32px] h-[32px] hover:bg-muted transition-colors"
                      >
                        <div className="relative shrink-0 size-[20px]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                            <path d="M14.166 2.5a2.5 2.5 0 0 1 3.536 3.536l-10 10-4.166.833.833-4.166 10-10Z" stroke="#44483B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                          </svg>
                        </div>
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-0 w-full relative mb-2">
          <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 496 1">
              <line stroke="#C4C8B7" x2="496" y1="0.5" y2="0.5" />
            </svg>
          </div>
        </div>

        {/* Bevis Section */}
        <div className="box-border content-stretch flex flex-col gap-[8px] items-center justify-center min-h-[64px] overflow-visible pb-0 pt-[8px] px-0 relative shrink-0 w-full mb-4">
          <div className="relative shrink-0 w-full">
            <div className="flex flex-row items-center size-full">
              <div className="box-border content-stretch flex gap-[8px] items-center p-[8px] relative w-full">
                {bevisMode === 'empty' && (
                  <>
                    <div className="basis-0 content-stretch flex flex-col grow items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0">
                      <div className="flex flex-col justify-center leading-[0] relative shrink-0 text-foreground text-[16px] tracking-[0.5px] w-full">
                        <p className="leading-[24px] m-0">Bevis</p>
                      </div>
                      <p className="leading-[20px] relative shrink-0 text-muted-foreground text-[14px] tracking-[0.25px] w-full m-0">Påkrevd</p>
                    </div>
                    <div className="content-stretch flex items-center justify-center relative shrink-0">
                      <button 
                        onClick={handleBevisAdd}
                        className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[100px] shrink-0 w-[32px] h-[32px] hover:bg-muted transition-colors"
                      >
                        <div className="relative shrink-0 size-[20px]">
                          <div className="absolute inset-[21%]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
                              <path d={svgPathsCommon.p2ccb20} fill="#44483B" />
                            </svg>
                          </div>
                        </div>
                      </button>
                    </div>
                  </>
                )}
                {bevisMode === 'edit' && (
                  <>
                    <div className="basis-0 grow relative">
                      <label className="flex flex-col justify-center leading-[0] relative shrink-0 text-muted-foreground text-[12px] tracking-[0.5px] mb-1">
                        <p className="leading-[16px] m-0">Bevis</p>
                      </label>
                      <input
                        type="text"
                        value={bevisEditValue}
                        onChange={(e) => setBevisEditValue(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleBevisSave()}
                        onBlur={handleBevisBlur}
                        placeholder="Bevis"
                        autoFocus
                        className="w-full px-3 py-2 border border-border rounded-[8px] text-foreground bg-input-background focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
                      />
                    </div>
                    <div className="content-stretch flex items-center justify-center relative shrink-0">
                      <button 
                        onClick={handleBevisSave}
                        className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[100px] shrink-0 w-[32px] h-[32px] hover:bg-muted transition-colors"
                      >
                        <div className="relative shrink-0 size-[20px]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                            <path d="M16.667 5L7.5 14.167L3.333 10" stroke="#44483B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                          </svg>
                        </div>
                      </button>
                    </div>
                  </>
                )}
                {bevisMode === 'view' && (
                  <>
                    <div 
                      onClick={handleBevisEdit}
                      className="basis-0 content-stretch flex flex-col grow items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0 cursor-pointer hover:bg-muted rounded-[8px] p-2 -ml-2 transition-colors"
                    >
                      <div className="flex flex-col justify-center leading-[0] relative shrink-0 text-muted-foreground text-[12px] tracking-[0.5px] w-full mb-1">
                        <p className="leading-[16px] m-0">Bevis</p>
                      </div>
                      <p className="leading-[24px] relative shrink-0 text-foreground text-[16px] tracking-[0.5px] w-full m-0">{bevisValue}</p>
                    </div>
                    <div className="content-stretch flex items-center justify-center relative shrink-0">
                      <button 
                        onClick={handleBevisEdit}
                        className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[100px] shrink-0 w-[32px] h-[32px] hover:bg-muted transition-colors"
                      >
                        <div className="relative shrink-0 size-[20px]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                            <path d="M14.166 2.5a2.5 2.5 0 0 1 3.536 3.536l-10 10-4.166.833.833-4.166 10-10Z" stroke="#44483B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                          </svg>
                        </div>
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>

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

        {bevisImages.length > 0 && (
          <>
            {/* Divider */}
            <div className="h-0 w-full relative mb-4">
              <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 496 1">
                  <line stroke="#C4C8B7" x2="496" y1="0.5" y2="0.5" />
                </svg>
              </div>
            </div>
          </>
        )}

        {/* Krav Section */}
        <div className="box-border content-stretch flex flex-col gap-[8px] items-center justify-center min-h-[64px] overflow-visible pb-0 pt-[8px] px-0 relative shrink-0 w-full mb-4">
          <div className="relative shrink-0 w-full">
            <div className="flex flex-row items-center size-full">
              <div className="box-border content-stretch flex gap-[8px] items-center p-[8px] relative w-full">
                {kravMode === 'empty' && (
                  <>
                    <div className="basis-0 content-stretch flex flex-col grow items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0">
                      <div className="flex flex-col justify-center leading-[0] relative shrink-0 text-foreground text-[16px] tracking-[0.5px] w-full">
                        <p className="leading-[24px] m-0">Krav (fra veileder)</p>
                      </div>
                      <p className="leading-[20px] relative shrink-0 text-muted-foreground text-[14px] tracking-[0.25px] w-full m-0">Påkrevd</p>
                    </div>
                    <div className="content-stretch flex items-center justify-center relative shrink-0">
                      <button 
                        onClick={handleKravAdd}
                        className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[100px] shrink-0 w-[32px] h-[32px] hover:bg-muted transition-colors"
                      >
                        <div className="relative shrink-0 size-[20px]">
                          <div className="absolute inset-[21%]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
                              <path d={svgPathsCommon.p2ccb20} fill="#44483B" />
                            </svg>
                          </div>
                        </div>
                      </button>
                    </div>
                  </>
                )}
                {kravMode === 'edit' && (
                  <>
                    <div className="basis-0 grow relative">
                      <label className="flex flex-col justify-center leading-[0] relative shrink-0 text-muted-foreground text-[12px] tracking-[0.5px] mb-1">
                        <p className="leading-[16px] m-0">Krav (fra veileder)</p>
                      </label>
                      <input
                        ref={kravInputRef}
                        type="text"
                        value={kravEditValue}
                        onChange={(e) => handleKravInputChange(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleKravSave()}
                        onBlur={handleKravBlur}
                        onFocus={() => setShowKravDropdown(true)}
                        placeholder="Søk eller skriv krav"
                        autoFocus
                        className="w-full px-3 py-2 border border-border rounded-[8px] text-foreground bg-input-background focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
                      />
                      {/* Dropdown menu */}
                      {showKravDropdown && filteredKravOptions.length > 0 && (
                        <div className="absolute z-10 w-full mt-1 bg-card border border-border rounded-[8px] shadow-[var(--elevation-sm)] max-h-[200px] overflow-y-auto">
                          {filteredKravOptions.map((option, index) => (
                            <button
                              key={index}
                              onMouseDown={(e) => {
                                e.preventDefault();
                                handleKravSelect(option);
                              }}
                              className="w-full px-3 py-2 text-left hover:bg-muted transition-colors border-b border-border last:border-b-0"
                            >
                              <p className="text-foreground text-[14px] leading-[20px] m-0">{option}</p>
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                    <div className="content-stretch flex items-center justify-center relative shrink-0">
                      <button 
                        onClick={handleKravSave}
                        className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[100px] shrink-0 w-[32px] h-[32px] hover:bg-muted transition-colors"
                      >
                        <div className="relative shrink-0 size-[20px]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                            <path d="M16.667 5L7.5 14.167L3.333 10" stroke="#44483B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                          </svg>
                        </div>
                      </button>
                    </div>
                  </>
                )}
                {kravMode === 'view' && (
                  <>
                    <div 
                      onClick={handleKravEdit}
                      className="basis-0 content-stretch flex flex-col grow items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0 cursor-pointer hover:bg-muted rounded-[8px] p-2 -ml-2 transition-colors"
                    >
                      <div className="flex flex-col justify-center leading-[0] relative shrink-0 text-muted-foreground text-[12px] tracking-[0.5px] w-full mb-1">
                        <p className="leading-[16px] m-0">Krav (fra veileder)</p>
                      </div>
                      <p className="leading-[24px] relative shrink-0 text-foreground text-[16px] tracking-[0.5px] w-full m-0">{kravValue}</p>
                    </div>
                    <div className="content-stretch flex items-center justify-center relative shrink-0">
                      <button 
                        onClick={handleKravEdit}
                        className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[100px] shrink-0 w-[32px] h-[32px] hover:bg-muted transition-colors"
                      >
                        <div className="relative shrink-0 size-[20px]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                            <path d="M14.166 2.5a2.5 2.5 0 0 1 3.536 3.536l-10 10-4.166.833.833-4.166 10-10Z" stroke="#44483B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                          </svg>
                        </div>
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>

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
