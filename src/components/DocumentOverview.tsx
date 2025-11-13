import { useState, useMemo } from 'react';
import svgPaths from '../imports/svg-jn8ghpuyc1';
import searchSvgPaths from '../imports/svg-fww0ywnfzv';
import { Download, X } from 'lucide-react';
import pdfPreviewImage from 'figma:asset/65c764fac4feecaa7cd096c4015c7181beaf1bfc.png';
import { Button } from './ui/button';

const documents = [
  'Sporingssystem for driftsmidler og produkter',
  'Plan for tilbakekalling av produkter og varslingsrutine',
  'Gjødslingsplan 2025 med skiftekart',
  'Plantevernjournal 2025.pdf',
  'Logg over gjødselmengder',
  'Spredningsplan for husdyrgjødsel',
  'Bruksregistrering og analyse av biorest',
  'Skadedyrkontrollplan og loggbok',
  'Kart over plasserte skadedyrmidler',
  'Skiftekart med avmerkede kulturminner',
  'Korrespondanse med kommunen om miljøtiltak',
  'Desinfiseringsattest for brukt utstyr',
  'HMS-mål for gården',
  'Avvikssystem / avvikslogg',
  'Vernerapport fra siste år',
  'Sikkerhetsdatabladmappe',
  'Rapport fra termografering av el-anlegg',
  'Sertifikat for varme arbeider',
  'Kontrollrapport for brannslukkingsutstyr',
  'Tankedokumentasjon / kontrollskjema',
  'Egenkontrollskjema elektrisk anlegg',
  'Bevis på HMS-opplæring for leder',
  'Opplæringsbevis for arbeidsutstyr',
  'Risikovurdering for gravide arbeidstakere',
  'Yrkesskadeforsikringsbevis',
  'Yrkesskadeforsikringsbevis (fast ansatte)',
  'Beredskapsplan'
];

// Mock document details
const documentDetails: Record<number, {
  description: string;
  category: string;
  expiryDate: string;
  attachments: string[];
}> = {
  0: {
    description: 'System for sporbarhet av alle driftsmidler og produkter på gården. Dette sikrer god kontroll og mulighet for tilbakesporing ved behov.',
    category: 'Dokumentasjon',
    expiryDate: '31.12.2025',
    attachments: ['Sporingssystem_2025.xlsx', 'Oversikt_produkter.pdf']
  },
  3: {
    description: 'Digital journal for registrering av plantevernmiddelbruk i 2025. Dokumentet inneholder fullstendig oversikt over alle sprøytinger med tidspunkt, middel, dosering og værforhold.',
    category: 'Plantevern',
    expiryDate: '31.12.2025',
    attachments: ['Plantevernjournal_2025.pdf']
  }
};

interface DocumentOverviewProps {
  initialSelectedIndex?: number | null;
}

export function DocumentOverview({ initialSelectedIndex = null }: DocumentOverviewProps) {
  const [selectedDocIndex, setSelectedDocIndex] = useState(initialSelectedIndex ?? 0);
  const [activeTab, setActiveTab] = useState<'attachments' | 'questions'>('attachments');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedAttachment, setSelectedAttachment] = useState<string | null>(null);

  // Filter documents based on search query
  const filteredDocuments = useMemo(() => {
    if (!searchQuery.trim()) {
      return documents.map((doc, index) => ({ doc, originalIndex: index }));
    }
    const query = searchQuery.toLowerCase();
    return documents
      .map((doc, index) => ({ doc, originalIndex: index }))
      .filter(item => item.doc.toLowerCase().includes(query));
  }, [searchQuery]);

  const selectedDoc = documentDetails[selectedDocIndex] || {
    description: 'Instruks for hvordan man håndterer dette dokumentet for å sikre god dokumentasjon og etterlevelse av regelverket.',
    category: 'Dokumentasjon',
    expiryDate: '6.6.2028',
    attachments: []
  };

  return (
    <div className="content-stretch flex grow isolate items-center min-h-px min-w-px relative shrink-0 w-full">
      {/* Left panel: Document list */}
      <div className="box-border content-stretch flex flex-col gap-2 h-full items-start p-4 relative shrink-0 w-[400px] overflow-y-auto scrollable-sidebar z-[3]">
        {/* Search input */}
        <div className="content-stretch flex items-start relative w-full mb-2">
          <div className="bg-[#e9e9df] content-stretch flex gap-[4px] w-full h-[56px] items-center overflow-clip relative rounded-[28px] shrink-0">
            <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0">
              <div className="flex flex-row items-center size-full">
                <div className="box-border content-stretch flex gap-[4px] items-center p-[4px] relative size-full">
                  {/* Leading icon */}
                  <div className="content-stretch flex flex-col gap-[10px] items-center justify-center relative shrink-0 size-[48px]">
                    <div className="content-stretch flex gap-[10px] items-center justify-center overflow-clip relative rounded-[100px] shrink-0">
                      <div className="box-border content-stretch flex gap-[10px] items-center justify-center p-[8px] relative shrink-0">
                        <div className="relative shrink-0 size-[24px]">
                          <div className="absolute inset-[12.5%]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                              <path d={searchSvgPaths.p16b4a380} fill="var(--muted-foreground)" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Input field */}
                  <div className="basis-0 content-stretch flex gap-[10px] grow h-full items-center min-h-px min-w-px relative shrink-0">
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Søk i opplastede dokumenter"
                      className="w-full bg-transparent border-none outline-none body-large text-foreground placeholder:text-muted-foreground"
                    />
                  </div>
                  
                  {/* Trailing elements */}
                  <div className="content-stretch flex items-center justify-end shrink-0" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Document list */}
        {filteredDocuments.map(({ doc, originalIndex }) => (
          <div 
            key={originalIndex}
            className="content-stretch flex flex-col items-start relative shrink-0 w-full"
            onClick={() => setSelectedDocIndex(originalIndex)}
          >
            <div className={`${selectedDocIndex === originalIndex ? 'bg-[#dae2ff]' : ''} h-[56px] relative shrink-0 w-full cursor-pointer hover:bg-[#f4f4ea] transition-colors rounded-[12px]`}>
              <div className="flex flex-row items-center size-full">
                <div className="box-border content-stretch flex gap-3 h-[56px] items-center px-3 py-2 relative w-full">
                  <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0">
                    <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] tracking-[0.5px] w-full">
                      <p className={`leading-[24px] m-0 ${selectedDocIndex === originalIndex ? 'text-[#174295]' : ''}`}>{doc}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Vertical divider */}
      <div className="content-stretch flex flex-col h-full items-center overflow-clip relative shrink-0 w-px z-[2]">
        <div className="basis-0 flex grow items-center justify-center min-h-px min-w-px relative shrink-0">
          <div className="flex-none h-full">
            <div className="h-full relative w-px" style={{ backgroundColor: 'var(--border)' }} />
          </div>
        </div>
      </div>

      {/* Right panel: Document details */}
      <div className="basis-0 content-stretch flex grow h-full items-start min-h-px min-w-px overflow-clip relative shrink-0 z-[1]">
        <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0">
          <div className="size-full overflow-y-auto">
            <div className="box-border content-stretch flex flex-col gap-4 items-start px-10 py-0 relative size-full">
              {/* Document header */}
              <div className="content-stretch flex flex-col gap-2 items-start relative shrink-0 w-full pt-3">
                <div className="box-border content-stretch flex flex-col gap-2 items-start justify-center px-0 py-3 relative shrink-0 w-full">
                  {/* Document badge */}
                  <div className="content-stretch flex gap-2 items-center relative shrink-0 w-full">
                    <div className="basis-0 content-stretch flex gap-4 grow items-center min-h-px min-w-px relative shrink-0">
                      <div className="box-border content-stretch flex gap-1 h-12 items-center overflow-clip pl-0 pr-1 py-0 relative rounded-[8px] shrink-0">
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
                    </div>
                  </div>
                  
                  {/* Document title */}
                  <div className="flex flex-col font-['Quatro:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1a1c16] text-[22px] w-full">
                    <p className="leading-[28px] m-0">{documents[selectedDocIndex]}</p>
                  </div>

                  {/* Share button */}
                  <div className="content-stretch flex gap-2 items-center relative shrink-0 w-full">
                    <div className="content-stretch flex gap-2 items-start relative shrink-0">
                      <div className="bg-[#f4f4ea] box-border content-stretch cursor-pointer flex items-center justify-center overflow-clip relative rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.3),0px_1px_3px_1px_rgba(0,0,0,0.15)] shrink-0">
                        <div className="box-border content-stretch flex gap-2 h-8 items-center justify-center pl-2 pr-4 py-[6px] relative shrink-0">
                          <div className="relative shrink-0 size-[18px]">
                            <div className="absolute inset-0 overflow-clip">
                              <div className="absolute inset-[4.17%_16.67%]">
                                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 17">
                                  <path d={svgPaths.p2d444900} fill="var(--fill-0, #4A671E)" />
                                </svg>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[14px] text-center text-nowrap tracking-[0.1px]">
                            <p className="leading-[20px] whitespace-pre m-0">Del dokument</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Document details */}
              <div className="box-border content-stretch flex flex-col gap-2 items-center justify-center min-h-[64px] overflow-visible pb-0 pt-2 px-0 relative shrink-0 w-full">
                <div className="relative shrink-0 w-full">
                  <div className="size-full">
                    <div className="box-border content-stretch flex gap-4 items-start p-2 relative w-full">
                      <div className="content-stretch flex items-center justify-center relative shrink-0">
                        <div className="relative shrink-0 size-6">
                          <div className="absolute inset-0 overflow-clip">
                            <div className="absolute inset-[8.33%_16.67%]">
                              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 20">
                                <path d={svgPaths.p3f9a2700} fill="var(--fill-0, #44483B)" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="basis-0 content-stretch flex flex-col grow items-start justify-center leading-[0] min-h-px min-w-px overflow-clip relative shrink-0 tracking-[0.5px]">
                        <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[#44483b] text-[12px] w-full">
                          <p className="leading-[16px] m-0">Om dokument</p>
                        </div>
                        <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#1a1c16] text-[16px] w-full">
                          <p className="leading-[24px] m-0">{selectedDoc.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="box-border content-stretch flex flex-col gap-2 items-center justify-center min-h-[64px] overflow-visible pb-0 pt-2 px-0 relative shrink-0 w-full">
                <div className="relative shrink-0 w-full">
                  <div className="size-full">
                    <div className="box-border content-stretch flex gap-4 items-start p-2 relative w-full">
                      <div className="content-stretch flex items-center justify-center relative shrink-0">
                        <div className="relative shrink-0 size-6">
                          <div className="absolute inset-0 overflow-clip">
                            <div className="absolute inset-[8.33%_10.42%]">
                              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 20">
                                <path d={svgPaths.pff4a100} fill="var(--fill-0, #44483B)" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="basis-0 content-stretch flex flex-col grow items-start justify-center leading-[0] min-h-px min-w-px overflow-clip relative shrink-0 tracking-[0.5px]">
                        <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[#44483b] text-[12px] w-full">
                          <p className="leading-[16px] m-0">Kategori</p>
                        </div>
                        <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#1a1c16] text-[16px] w-full">
                          <p className="leading-[24px] m-0">{selectedDoc.category}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="box-border content-stretch flex flex-col gap-2 items-center justify-center min-h-[64px] overflow-visible pb-0 pt-2 px-0 relative shrink-0 w-full">
                <div className="relative shrink-0 w-full">
                  <div className="size-full">
                    <div className="box-border content-stretch flex gap-4 items-start p-2 relative w-full">
                      <div className="content-stretch flex items-center justify-center relative shrink-0">
                        <div className="relative shrink-0 size-6">
                          <div className="absolute inset-0 overflow-clip">
                            <div className="absolute inset-[8.33%_12.5%]">
                              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 20">
                                <path d={svgPaths.p24b92280} fill="var(--fill-0, #44483B)" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="basis-0 content-stretch flex flex-col grow items-start justify-center leading-[0] min-h-px min-w-px overflow-clip relative shrink-0 tracking-[0.5px]">
                        <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[#44483b] text-[12px] w-full">
                          <p className="leading-[16px] m-0">Utløpsdato</p>
                        </div>
                        <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#1a1c16] text-[16px] w-full">
                          <p className="leading-[24px] m-0">{selectedDoc.expiryDate}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tabs section */}
              <div className="content-stretch flex flex-col gap-4 items-start relative shrink-0 w-full mt-4">
                <div className="bg-white content-stretch flex flex-col items-start relative shrink-0 w-full">
                  <div className="content-stretch cursor-pointer flex items-start relative shrink-0">
                    <div 
                      onClick={() => setActiveTab('attachments')}
                      className="bg-white content-stretch flex flex-col h-12 items-center justify-end overflow-clip relative shrink-0 w-[120px]"
                    >
                      <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full">
                        <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
                          <div className="box-border content-stretch flex flex-col items-center justify-center px-4 py-[14px] relative size-full">
                            <div className="basis-0 content-stretch flex gap-1 grow items-center justify-center min-h-px min-w-px relative shrink-0">
                              <div className={`flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-center text-nowrap tracking-[0.1px] ${activeTab === 'attachments' ? 'text-[#1a1c16]' : 'text-[#44483b]'}`}>
                                <p className="leading-[20px] whitespace-pre m-0">Vedlegg</p>
                              </div>
                            </div>
                            {activeTab === 'attachments' && (
                              <div className="absolute bg-[#4a671e] bottom-0 h-[2px] left-0 right-0" />
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div 
                      onClick={() => setActiveTab('questions')}
                      className="bg-white content-stretch flex flex-col h-12 items-center justify-end overflow-clip relative shrink-0"
                    >
                      <div className="basis-0 box-border content-stretch flex flex-col grow items-center justify-center min-h-px min-w-px overflow-clip px-4 py-[14px] relative shrink-0">
                        <div className="basis-0 content-stretch flex gap-1 grow items-center justify-center min-h-px min-w-px relative shrink-0">
                          <div className={`flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-center text-nowrap tracking-[0.1px] ${activeTab === 'questions' ? 'text-[#1a1c16]' : 'text-[#44483b]'}`}>
                            <p className="leading-[20px] whitespace-pre m-0">Knyttede sjekkliste spørsmål</p>
                          </div>
                        </div>
                        {activeTab === 'questions' && (
                          <div className="absolute bg-[#4a671e] bottom-0 h-[2px] left-0 right-0" />
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full">
                    <div className="h-px w-full" style={{ backgroundColor: 'var(--border)' }} />
                  </div>
                </div>

                {/* Tab content */}
                {activeTab === 'attachments' && selectedDoc.attachments.length > 0 && (
                  <div className="content-stretch flex flex-col gap-2 items-start relative shrink-0 w-full">
                    {selectedDoc.attachments.map((attachment, index) => (
                      <div 
                        key={index} 
                        onClick={() => setSelectedAttachment(attachment)}
                        className="content-stretch flex flex-col h-[56px] items-center justify-center min-h-[56px] relative shrink-0 cursor-pointer hover:bg-muted rounded-[var(--radius)] transition-colors"
                      >
                        <div className="basis-0 content-stretch flex gap-4 grow items-center justify-center min-h-px min-w-px px-4 py-2 relative shrink-0">
                          <div className="content-stretch flex items-center justify-center relative shrink-0">
                            <div className="relative shrink-0 size-6">
                              <div className="absolute inset-0 overflow-clip">
                                <div className="absolute inset-[20.83%_12.5%]">
                                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 14">
                                    <path d={svgPaths.p39f2fc80} fill="var(--fill-0, #44483B)" />
                                  </svg>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="content-stretch flex flex-col h-full items-start justify-center overflow-clip relative shrink-0 flex-1">
                            <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] tracking-[0.5px]">
                              <p className="leading-[24px] m-0 whitespace-nowrap">{attachment}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === 'attachments' && selectedDoc.attachments.length === 0 && (
                  <div className="p-4 text-center w-full">
                    <p className="body-medium text-muted-foreground m-0">Ingen vedlegg tilgjengelig</p>
                  </div>
                )}

                {activeTab === 'questions' && (
                  <div className="p-4 text-center w-full">
                    <p className="body-medium text-muted-foreground m-0">Ingen knyttede spørsmål</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* PDF Preview Right Panel */}
      {selectedAttachment && (
        <>
          {/* Vertical divider */}
          <div className="content-stretch flex flex-col h-full items-center overflow-clip relative shrink-0 w-px z-[2]">
            <div className="basis-0 flex grow items-center justify-center min-h-px min-w-px relative shrink-0">
              <div className="flex-none h-full">
                <div className="h-full relative w-px" style={{ backgroundColor: 'var(--border)' }} />
              </div>
            </div>
          </div>

          {/* PDF Preview Panel */}
          <div className="basis-0 content-stretch flex grow h-full items-start min-h-px min-w-px overflow-clip relative shrink-0 z-[1]">
            <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0">
              <div className="size-full overflow-y-auto">
                <div className="box-border content-stretch flex flex-col gap-4 items-start px-6 py-4 relative size-full">
                  {/* Header with title, download and close */}
                  <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
                    <div className="flex-1">
                      <h3 className="title-large m-0" style={{ color: 'var(--foreground)' }}>{selectedAttachment}</h3>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        onClick={() => {
                          // Create a download link
                          const link = document.createElement('a');
                          link.href = pdfPreviewImage;
                          link.download = selectedAttachment;
                          document.body.appendChild(link);
                          link.click();
                          document.body.removeChild(link);
                        }}
                      >
                        <Download />
                        <span className="label-large">Last ned</span>
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setSelectedAttachment(null)}
                      >
                        <X />
                      </Button>
                    </div>
                  </div>

                  {/* PDF Preview */}
                  <div className="content-stretch flex flex-col items-start relative shrink-0 w-full flex-1">
                    <div className="w-full h-full border rounded-[var(--radius)] overflow-hidden" style={{ borderColor: 'var(--border)' }}>
                      <img 
                        src={pdfPreviewImage} 
                        alt={selectedAttachment}
                        className="w-full h-full object-contain bg-white"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
