import { useState, useMemo, useRef, useEffect } from 'react';
import { X, Paperclip, ExternalLink } from 'lucide-react';
import svgPaths from '../imports/svg-fww0ywnfzv';

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

interface DocumentsMenuProps {
  isOpen: boolean;
  onToggle: () => void;
  attachedDocuments?: string[];
  onAttachDocuments?: (documents: string[]) => void;
  onNavigateToDocument?: (documentIndex: number) => void;
}

export function DocumentsMenu({ isOpen, onToggle, attachedDocuments = [], onAttachDocuments, onNavigateToDocument }: DocumentsMenuProps) {
  const [searchExpanded, setSearchExpanded] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isAttachMode, setIsAttachMode] = useState(false);
  const [selectedDocuments, setSelectedDocuments] = useState<Set<number>>(new Set());
  const [hoveredDocIndex, setHoveredDocIndex] = useState<number | null>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  // Focus input when search expands
  useEffect(() => {
    if (searchExpanded && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [searchExpanded]);

  // Reset search and attach mode when menu closes
  useEffect(() => {
    if (!isOpen) {
      setSearchExpanded(false);
      setSearchQuery('');
      setIsAttachMode(false);
      setSelectedDocuments(new Set());
    }
  }, [isOpen]);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        onToggle();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onToggle]);

  // Filter documents based on search query
  const filteredDocuments = useMemo(() => {
    if (!searchQuery.trim()) {
      return documents;
    }
    const query = searchQuery.toLowerCase();
    return documents.filter(doc => doc.toLowerCase().includes(query));
  }, [searchQuery]);

  const handleSearchIconClick = () => {
    if (searchExpanded) {
      setSearchExpanded(false);
      setSearchQuery('');
    } else {
      setSearchExpanded(true);
    }
  };

  const handleAttachClick = () => {
    if (isAttachMode) {
      // Attach selected documents
      if (onAttachDocuments) {
        const docsToAttach = Array.from(selectedDocuments).map(index => documents[index]);
        const newAttachedDocuments = [...attachedDocuments, ...docsToAttach];
        onAttachDocuments(newAttachedDocuments);
      }
      setIsAttachMode(false);
      setSelectedDocuments(new Set());
    } else {
      setIsAttachMode(true);
    }
  };

  const handleCancelAttach = () => {
    setIsAttachMode(false);
    setSelectedDocuments(new Set());
  };

  const handleDocumentToggle = (index: number) => {
    const newSelected = new Set(selectedDocuments);
    if (newSelected.has(index)) {
      newSelected.delete(index);
    } else {
      newSelected.add(index);
    }
    setSelectedDocuments(newSelected);
  };

  return (
    <div ref={menuRef} className="relative flex items-center justify-center shrink-0">
      <button
        onClick={onToggle}
        className="rounded-[100px] shrink-0 relative"
      >
        <div className="flex flex-col items-center justify-center overflow-hidden rounded-inherit">
          <div className="flex gap-2 items-center justify-center px-6 py-4 shrink-0">
            <div className="shrink-0 size-6 relative">
              <div className="absolute inset-[41.67%_29.17%_37.5%_29.17%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 5">
                  <path 
                    d={isOpen ? "M5 0L10 5H0L5 0Z" : "M5 5L0 0H10L5 5Z"} 
                    fill="#44483B" 
                  />
                </svg>
              </div>
            </div>
            <div className="flex flex-col justify-center shrink-0">
              <p className="label-medium text-muted-foreground m-0 whitespace-nowrap">
                {isOpen ? 'Skjul dokumenter' : 'Se opplastede dokumenter'}
              </p>
            </div>
          </div>
        </div>
        <div 
          aria-hidden="true" 
          className="absolute border border-border border-solid inset-0 pointer-events-none rounded-[100px]" 
        />
      </button>
      
      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-[480px] rounded-[var(--radius)] z-50 max-h-[400px] overflow-y-auto documents-menu-scroll" style={{
          background: 'var(--popover)',
          boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.30), 0 2px 6px 2px rgba(0, 0, 0, 0.15)'
        }}>
          <div className="p-4">
            {/* Header with search */}
            <div className="flex items-center justify-between mb-3 gap-2">
              <p className={`label-large text-foreground m-0 transition-all ${searchExpanded ? 'opacity-0 w-0' : 'opacity-100'}`}>
                Opplastede dokumenter
              </p>
              
              {/* Search area */}
              <div className={`flex items-center gap-2 transition-all ${searchExpanded ? 'flex-1' : ''}`}>
                {searchExpanded && (
                  <input
                    ref={searchInputRef}
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Søk i opplastede dokumenter"
                    className="flex-1 bg-transparent border-none outline-none body-medium text-foreground placeholder:text-muted-foreground"
                  />
                )}
                <button
                  onClick={handleSearchIconClick}
                  className="shrink-0 p-1 hover:bg-muted rounded transition-colors"
                >
                  {searchExpanded ? (
                    <X className="w-[18px] h-[18px]" style={{ color: 'var(--muted-foreground)' }} />
                  ) : (
                    <div className="w-[18px] h-[18px]">
                      <svg className="block size-full" fill="none" viewBox="0 0 18 18">
                        <path d={svgPaths.p16b4a380} fill="var(--muted-foreground)" />
                      </svg>
                    </div>
                  )}
                </button>
              </div>
            </div>

            {/* Attach button */}
            <div className="flex items-center gap-2 mb-3">
              <button
                onClick={handleAttachClick}
                className={`flex items-center gap-2 px-4 py-2 rounded-[var(--radius-button)] transition-colors ${
                  isAttachMode
                    ? 'bg-primary'
                    : 'border border-border hover:bg-muted'
                }`}
              >
                <Paperclip className="w-[18px] h-[18px]" style={{ 
                  color: isAttachMode ? 'var(--primary-foreground)' : 'var(--muted-foreground)' 
                }} />
                <span className="label-medium" style={{ 
                  color: isAttachMode ? 'var(--primary-foreground)' : 'var(--foreground)' 
                }}>
                  {isAttachMode ? 'Knytt valgte' : 'Knytt til spørsmål'}
                </span>
              </button>
              
              {isAttachMode && (
                <button
                  onClick={handleCancelAttach}
                  className="label-medium hover:underline"
                  style={{ color: 'var(--muted-foreground)' }}
                >
                  Avbryt
                </button>
              )}
            </div>

            {/* Documents list */}
            <div className="flex flex-col gap-1">
              {filteredDocuments.length > 0 ? (
                filteredDocuments.map((doc, index) => (
                  <div
                    key={index}
                    onClick={() => {
                      if (isAttachMode) {
                        handleDocumentToggle(index);
                      } else if (onNavigateToDocument) {
                        onNavigateToDocument(index);
                      }
                    }}
                    onMouseEnter={() => setHoveredDocIndex(index)}
                    onMouseLeave={() => setHoveredDocIndex(null)}
                    className="cursor-pointer flex items-center gap-3 px-3 py-2 rounded-[var(--radius)] transition-all"
                    style={{
                      backgroundColor: hoveredDocIndex === index ? 'var(--muted)' : 'transparent'
                    }}
                  >
                    {isAttachMode && (
                      <input
                        type="checkbox"
                        checked={selectedDocuments.has(index)}
                        onChange={() => handleDocumentToggle(index)}
                        className="w-[18px] h-[18px] cursor-pointer"
                        style={{ accentColor: 'var(--primary)' }}
                      />
                    )}
                    <p className="body-medium text-foreground m-0 flex-1">{doc}</p>
                    {!isAttachMode && hoveredDocIndex === index && onNavigateToDocument && (
                      <div className="shrink-0 p-1">
                        <ExternalLink className="w-[16px] h-[16px]" style={{ color: 'var(--muted-foreground)' }} />
                      </div>
                    )}
                  </div>
                ))
              ) : (
                <div className="p-3 text-center">
                  <p className="body-medium text-muted-foreground m-0">Ingen dokumenter funnet</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
