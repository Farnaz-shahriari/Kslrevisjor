import { useState, useMemo, useEffect } from 'react';
import svgPaths from '../imports/svg-jn8ghpuyc1';
import searchSvgPaths from '../imports/svg-fww0ywnfzv';
import { Download, X, ChevronLeft } from 'lucide-react';
import pdfPreviewImage from 'figma:asset/65c764fac4feecaa7cd096c4015c7181beaf1bfc.png';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTitle, SheetDescription } from './ui/sheet';
import * as VisuallyHidden from '@radix-ui/react-visually-hidden';

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

// Component for document list (shared between mobile and desktop)
function DocumentList({ 
  filteredDocuments, 
  selectedDocIndex, 
  searchQuery,
  setSearchQuery,
  onDocumentClick 
}: {
  filteredDocuments: { doc: string; originalIndex: number }[];
  selectedDocIndex: number;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  onDocumentClick: (index: number) => void;
}) {
  return (
    <>
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
          onClick={() => onDocumentClick(originalIndex)}
        >
          <div className={`${selectedDocIndex === originalIndex ? 'bg-[#dae2ff]' : ''} h-[56px] relative shrink-0 w-full cursor-pointer hover:bg-[#f4f4ea] transition-colors rounded-[12px]`}>
            <div className="flex flex-row items-center size-full">
              <div className="box-border content-stretch flex gap-3 h-[56px] items-center px-3 py-2 relative w-full">
                <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0">
                  <div className="flex flex-col body-large justify-center leading-[0] relative shrink-0 text-foreground tracking-[0.5px] w-full">
                    <p className={`leading-[24px] m-0 ${selectedDocIndex === originalIndex ? 'text-[#174295]' : ''}`}>{doc}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export function DocumentOverview({ initialSelectedIndex = null }: DocumentOverviewProps) {
  // Check if desktop (≥1400px) - only auto-select on desktop, not mobile
  const isDesktop = typeof window !== 'undefined' && window.innerWidth >= 1400;
  const [selectedDocIndex, setSelectedDocIndex] = useState(initialSelectedIndex ?? (isDesktop ? 0 : null));
  const [activeTab, setActiveTab] = useState<'attachments' | 'questions'>('attachments');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedAttachment, setSelectedAttachment] = useState<string | null>(null);
  // Mobile/Tablet state - true = showing menu, false = showing detail
  const [showingMenu, setShowingMenu] = useState(true);
  
  // Track if we're on desktop for attachment preview (≥1024px)
  const [isDesktopView, setIsDesktopView] = useState(
    typeof window !== 'undefined' && window.innerWidth >= 1024
  );

  // Update desktop view state on resize
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const handleResize = () => {
      setIsDesktopView(window.innerWidth >= 1024);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Handler for navigating to detail with animation
  const handleNavigateToDetail = (docIndex: number) => {
    setSelectedDocIndex(docIndex);
    setTimeout(() => {
      setShowingMenu(false);
    }, 50);
  };

  // Handler for going back to menu with animation
  const handleBackToMenu = () => {
    setTimeout(() => {
      setShowingMenu(true);
    }, 50);
  };

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
    <div className="flex h-full w-full overflow-hidden">
      {/* MOBILE/TABLET: Menu Panel - Shows ONLY when showingMenu is true */}
      {showingMenu && (
        <div className="min-[1400px]:hidden w-full h-full bg-background flex flex-col gap-2 p-4 overflow-y-auto">
          <h2 className="title-large mb-4">Dokument oversikt</h2>
          <DocumentList
            filteredDocuments={filteredDocuments}
            selectedDocIndex={selectedDocIndex}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            onDocumentClick={handleNavigateToDetail}
          />
        </div>
      )}

      {/* DESKTOP: Menu Panel - Always visible */}
      <div className="max-[1400px]:hidden w-[400px] h-full flex flex-col gap-2 p-4 overflow-y-auto">
        <DocumentList
          filteredDocuments={filteredDocuments}
          selectedDocIndex={selectedDocIndex}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          onDocumentClick={setSelectedDocIndex}
        />
      </div>

      {/* Vertical Divider - Desktop only */}
      <div className="w-px h-full bg-[var(--border)] max-[1400px]:hidden" />

      {/* MOBILE/TABLET & DESKTOP: Detail Panel */}
      <div className={`flex-1 h-full flex-col ${showingMenu ? 'max-[1400px]:hidden' : 'max-[1400px]:flex'} min-[1400px]:flex max-[1400px]:w-full`}>
        {/* Back button for mobile/tablet */}
        <div className="px-6 pt-4 pb-2 min-[1400px]:hidden border-b border-[var(--border)]">
          <button
            onClick={handleBackToMenu}
            className="flex items-center gap-2 label-large text-foreground hover:opacity-70 transition-opacity"
            aria-label="Tilbake til dokumentliste"
          >
            <ChevronLeft className="w-5 h-5" />
            Tilbake
          </button>
        </div>
        
        {/* Document title - Desktop only */}
        <div className="border-b border-[var(--border)] px-10 py-3 max-[1400px]:hidden">
          <h2 className="title-large">{documents[selectedDocIndex]}</h2>
        </div>

        {/* Detail content */}
        <div className="flex-1 overflow-y-auto">
          <div className="box-border content-stretch flex flex-col gap-4 items-start px-10 max-[1400px]:px-6 py-4 relative size-full">
            {/* Document title - Mobile only (visible below Tilbake button) */}
            <div className="min-[1400px]:hidden w-full mb-2">
              <h2 className="title-large m-0 text-foreground">{documents[selectedDocIndex]}</h2>
            </div>

            {/* Document badge */}
            <div className="content-stretch flex gap-2 items-center relative shrink-0 w-full">
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
                <div className="label-small text-muted-foreground">
                  <p className="m-0">Dokument</p>
                </div>
              </div>
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
                    <div className="label-medium text-foreground">
                      <p className="m-0">Del dokument</p>
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
                      <div className="label-small text-muted-foreground">
                        <p className="m-0">Om dokument</p>
                      </div>
                      <div className="body-large text-foreground">
                        <p className="m-0">{selectedDoc.description}</p>
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
                      <div className="label-small text-muted-foreground">
                        <p className="m-0">Kategori</p>
                      </div>
                      <div className="body-large text-foreground">
                        <p className="m-0">{selectedDoc.category}</p>
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
                      <div className="label-small text-muted-foreground">
                        <p className="m-0">Utløpsdato</p>
                      </div>
                      <div className="body-large text-foreground">
                        <p className="m-0">{selectedDoc.expiryDate}</p>
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
                            <div className={`label-medium text-center ${activeTab === 'attachments' ? 'text-foreground' : 'text-muted-foreground'}`}>
                              <p className="m-0">Vedlegg</p>
                            </div>
                          </div>
                          {activeTab === 'attachments' && (
                            <div className="absolute bg-primary bottom-0 h-[2px] left-0 right-0" />
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
                        <div className={`label-medium text-center ${activeTab === 'questions' ? 'text-foreground' : 'text-muted-foreground'}`}>
                          <p className="m-0">Knyttede sjekkliste spørsmål</p>
                        </div>
                      </div>
                      {activeTab === 'questions' && (
                        <div className="absolute bg-primary bottom-0 h-[2px] left-0 right-0" />
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
                          <div className="body-large text-foreground">
                            <p className="m-0 whitespace-nowrap">{attachment}</p>
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

      {/* PDF Preview Right Panel */}
      {selectedAttachment && (
        <>
          {/* Desktop: Right Panel */}
          <div className="max-[1024px]:hidden content-stretch flex h-full items-start overflow-clip relative shrink-0 z-[1]">
            {/* Vertical divider */}
            <div className="content-stretch flex flex-col h-full items-center overflow-clip relative shrink-0 w-px z-[2]">
              <div className="basis-0 flex grow items-center justify-center min-h-px min-w-px relative shrink-0">
                <div className="flex-none h-full">
                  <div className="h-full relative w-px" style={{ backgroundColor: 'var(--border)' }} />
                </div>
              </div>
            </div>

            {/* PDF Preview Panel */}
            <div className="basis-0 content-stretch flex grow h-full items-start min-h-px min-w-px overflow-clip relative shrink-0">
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
                          variant="secondary"
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
                          <Download className="w-5 h-5" />
                          <span>Last ned</span>
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => setSelectedAttachment(null)}
                        >
                          <X className="w-6 h-6" />
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
          </div>

          {/* Mobile/Tablet: Bottom Sheet */}
          <Sheet open={!isDesktopView && !!selectedAttachment} onOpenChange={(open) => !open && setSelectedAttachment(null)}>
            <SheetContent side="bottom" className="min-[1024px]:hidden h-[90vh] p-0">
              <VisuallyHidden.Root>
                <SheetTitle>Forhåndsvisning av vedlegg</SheetTitle>
                <SheetDescription>Forhåndsvisning og nedlasting av {selectedAttachment}</SheetDescription>
              </VisuallyHidden.Root>
              
              <div className="flex flex-col h-full">
                {/* Header with title and close - restructured for mobile */}
                <div className="flex flex-col gap-3 px-6 py-4 border-b border-[var(--border)]">
                  {/* Title */}
                  <div className="flex items-start">
                    <h3 className="title-large m-0 flex-1 break-words" style={{ color: 'var(--foreground)' }}>{selectedAttachment}</h3>
                  </div>
                  
                  {/* Download button */}
                  <div className="flex">
                    <Button
                      variant="secondary"
                      onClick={() => {
                        // Create a download link
                        const link = document.createElement('a');
                        link.href = pdfPreviewImage;
                        link.download = selectedAttachment;
                        document.body.appendChild(link);
                        link.click();
                        document.body.removeChild(link);
                      }}
                      className="w-full"
                    >
                      <Download className="w-5 h-5" />
                      <span>Last ned</span>
                    </Button>
                  </div>
                </div>
                
                {/* PDF Preview */}
                <div className="flex-1 overflow-y-auto p-6">
                  <div className="w-full h-full border rounded-[var(--radius)] overflow-hidden" style={{ borderColor: 'var(--border)' }}>
                    <img 
                      src={pdfPreviewImage} 
                      alt={selectedAttachment}
                      className="w-full h-full object-contain bg-white"
                    />
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </>
      )}
    </div>
  );
}