import { useState } from 'react';
import svgPathsRevisjonCard from "../imports/svg-es1yhnytnq";
import { OverlayScrollContainer } from './OverlayScrollContainer';
import { ChevronUp, ChevronDown } from 'lucide-react';

// Mock audit data for this specific foretak (same address, different ordnings allowed)
const mockAuditHistory = [
  {
    id: 'hist-2026',
    ordning: 'KSL',
    revisjonDato: 'Torsdag 30. januar 2026',
    rapportLastDato: 'Torsdag 13. februar 2026',
    produksjon: ['Korn', 'Storfe'],
    foretakName: 'Berget Gård AS',
    address: 'Bergetveien 42, 2150 Årnes',
    kommune: 'Nes',
    isEditable: true,
    avvikCount: 3,
    avvikOpen: 2,
    avvikClosed: 1,
  },
  {
    id: 'hist-2023',
    ordning: 'LokalMat',
    revisjonDato: 'Mandag 15. mai 2023',
    rapportLastDato: 'Mandag 29. mai 2023',
    produksjon: ['Storfe', 'Grønnsaker'],
    foretakName: 'Berget Gård AS',
    address: 'Bergetveien 42, 2150 Årnes',
    kommune: 'Nes',
    isEditable: false,
    avvikCount: 1,
    avvikOpen: 0,
    avvikClosed: 1,
  },
  {
    id: 'hist-2020',
    ordning: 'KSL',
    revisjonDato: 'Fredag 20. mars 2020',
    rapportLastDato: 'Fredag 3. april 2020',
    produksjon: ['Korn', 'Storfe'],
    foretakName: 'Berget Gård AS',
    address: 'Bergetveien 42, 2150 Årnes',
    kommune: 'Nes',
    isEditable: false,
    avvikCount: 2,
    avvikOpen: 0,
    avvikClosed: 2,
  },
];

type HistoryTabType = 'eksternrevisjoner' | 'egenrevisjoner' | 'tilsynshistorikk';

export function ForetakHistorikkView() {
  const [activeHistoryTab, setActiveHistoryTab] = useState<HistoryTabType>('eksternrevisjoner');

  // Get ordning chip colors
  const getOrdningChipColors = (ordning: string): { bg: string; text: string } => {
    switch (ordning.toLowerCase()) {
      case 'lokalmat':
        return { bg: '#A80000', text: '#FFFFFF' };
      case 'nyt norge':
        return { bg: '#00319E', text: '#FFFFFF' };
      case 'spesialitet':
        return { bg: '#594414', text: '#FFFFFF' };
      case 'ksl':
      default:
        return { bg: '#4A671E', text: '#FFFFFF' };
    }
  };

  const renderAuditCard = (audit: typeof mockAuditHistory[0]) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [avvikExpanded, setAvvikExpanded] = useState(false);
    const chipColors = getOrdningChipColors(audit.ordning);
    
    return (
      <div 
        key={audit.id}
        className="content-stretch flex flex-col gap-[16px] items-start pt-[8px] px-[24px] max-[900px]:px-[16px] relative rounded-[12px] shrink-0 w-full max-w-[1040px]"
        style={{ backgroundColor: '#FAFAF0' }}
      >
        <div aria-hidden="true" className="absolute border border-[var(--border)] border-solid inset-0 pointer-events-none rounded-[12px]" />
        
        {/* Info chips - at the top */}
        <div className="content-stretch flex flex-wrap gap-[10px] items-start relative shrink-0 w-full">
          {/* Rapport låst chip */}
          <div className="bg-[var(--secondary-container)] content-stretch flex h-[32px] items-center justify-center overflow-clip relative rounded-[8px] shrink-0">
            <div className="content-stretch flex gap-[8px] h-[32px] items-center justify-center pl-[8px] pr-[16px] py-[6px] relative shrink-0">
              <div className="relative shrink-0 size-[18px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                  <path d="M14.25 6.375H13.5V4.875C13.5 3.01125 12.0112 1.5 10.1719 1.5H7.82812C5.98875 1.5 4.5 3.01125 4.5 4.875V6.375H3.75C3.3375 6.375 3 6.7125 3 7.125V15C3 15.4125 3.3375 15.75 3.75 15.75H14.25C14.6625 15.75 15 15.4125 15 15V7.125C15 6.7125 14.6625 6.375 14.25 6.375ZM6 4.875C6 3.84 6.81 3 7.82812 3H10.1719C11.19 3 12 3.84 12 4.875V6.375H6V4.875ZM13.5 14.25H4.5V7.875H13.5V14.25ZM9 10.5C9.41421 10.5 9.75 10.1642 9.75 9.75C9.75 9.33579 9.41421 9 9 9C8.58579 9 8.25 9.33579 8.25 9.75C8.25 10.1642 8.58579 10.5 9 10.5Z" fill="var(--secondary-container-foreground)" />
                </svg>
              </div>
              <div className="label-medium text-[var(--secondary-container-foreground)]">
                <p>Rapport låst</p>
              </div>
            </div>
          </div>
          
          {/* Redigerbar chip - only show if editable */}
          {audit.isEditable && (
            <div className="bg-[#E8F5E9] content-stretch flex h-[32px] items-center justify-center overflow-clip relative rounded-[8px] shrink-0">
              <div className="content-stretch flex gap-[8px] h-[32px] items-center justify-center pl-[8px] pr-[16px] py-[6px] relative shrink-0">
                <div className="relative shrink-0 size-[18px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                    <path d="M2.25 12.9375V15.75H5.0625L13.3575 7.455L10.545 4.6425L2.25 12.9375ZM15.5325 5.28C15.825 4.9875 15.825 4.515 15.5325 4.2225L13.7775 2.4675C13.485 2.175 13.0125 2.175 12.72 2.4675L11.3475 3.84L14.16 6.6525L15.5325 5.28Z" fill="#2E7D32" />
                  </svg>
                </div>
                <div className="label-medium text-[#2E7D32]">
                  <p>Redigerbar</p>
                </div>
              </div>
            </div>
          )}
          
          {/* Åpne avvik chip */}
          {audit.avvikOpen > 0 && (
            <div className="bg-[#FFF4E6] content-stretch flex h-[32px] items-center justify-center overflow-clip relative rounded-[8px] shrink-0">
              <div className="content-stretch flex gap-[8px] h-[32px] items-center justify-center pl-[8px] pr-[16px] py-[6px] relative shrink-0">
                <div className="label-medium text-[#805500]">
                  <p>{audit.avvikOpen} åpne avvik</p>
                </div>
              </div>
            </div>
          )}
        </div>
        
        {/* Audit information - responsive layout with flex-wrap */}
        <div className="flex flex-wrap gap-4 items-start relative shrink-0 w-full">
          
          {/* Revisjon info - Column 1 */}
          <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-[280px] relative">
            {/* Top info with date */}
            <div className="content-stretch flex flex-col items-start px-0 py-[8px] relative shrink-0">
              <div className="title-medium text-foreground">
                <p>{audit.revisjonDato}</p>
              </div>
              {/* Chips Row */}
              <div className="flex items-center gap-2 mt-2 flex-wrap">
                {/* Ordning chip */}
                <div 
                  className="h-[32px] relative rounded-[8px] shrink-0"
                  style={{ backgroundColor: chipColors.bg }}
                >
                  <div className="content-stretch flex h-full items-center justify-center overflow-clip relative rounded-[inherit]">
                    <div className="content-stretch flex h-[32px] items-center justify-center px-[16px] py-[6px] relative shrink-0">
                      <div className="label-medium" style={{ color: chipColors.text }}>
                        <p>{audit.ordning}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Revisor Outlined Chip */}
                <div className="h-[32px] relative rounded-[8px] shrink-0">
                  <div className="content-stretch flex h-full items-center justify-center overflow-clip relative rounded-[inherit]">
                    <div className="content-stretch flex h-[32px] items-center justify-center px-4 py-[6px] relative shrink-0">
                      <span className="label-medium text-foreground whitespace-nowrap">
                        Revisor
                      </span>
                    </div>
                  </div>
                  <div aria-hidden="true" className="absolute border border-[#c4c8b7] border-solid inset-0 pointer-events-none rounded-[8px]" />
                </div>
              </div>
            </div>
            
            {/* Collapsible content - Rapport låst dato, Produksjon */}
            {isExpanded && (
              <>
                {/* Rapport låst dato */}
                <div className="content-stretch flex flex-col items-center justify-center min-h-[56px] relative shrink-0 w-full">
                  <div className="content-stretch flex gap-[16px] h-[56px] items-center relative shrink-0 w-full">
                    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-h-px min-w-px overflow-clip relative">
                      <div className="label-small text-muted-foreground">
                        <p>Rapport låst dato</p>
                      </div>
                      <div className="body-large text-foreground">
                        <p>{audit.rapportLastDato}</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Produksjon */}
                <div className="content-stretch flex flex-col items-start min-h-[72px] relative shrink-0 w-full">
                  <div className="content-stretch flex gap-[16px] items-start py-[4px] relative shrink-0 w-full">
                    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px overflow-clip relative">
                      <div className="label-small text-muted-foreground">
                        <p>Produksjon</p>
                      </div>
                      <div className="body-large text-foreground">
                        {audit.produksjon.map((prod, idx) => (
                          <p key={idx} className={idx < audit.produksjon.length - 1 ? 'mb-0' : ''}>{prod}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
          
          {/* Foretak info - Column 2 - Always Haugseter Gård */}
          <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-[280px] relative">
            {/* Top info with farm name and address */}
            <div className="content-stretch flex flex-col items-start px-0 py-[8px] relative shrink-0 w-full">
              {/* Farm name - Always Haugseter Gård */}
              <div className="title-medium mb-1 text-foreground">
                <p>Haugseter Gård</p>
              </div>
              
              {/* Address lines - Always same address */}
              <div className="label-medium text-foreground">
                <p className="mb-0">Haugseterveien 12</p>
                <p>2350 Nes på Hedmarken</p>
              </div>
            </div>
            
            {/* Collapsible content - Kommune */}
            {isExpanded && (
              <>
                {/* Kommune */}
                <div className="content-stretch flex flex-col items-start justify-center min-h-[56px] relative shrink-0 w-full">
                  <div className="content-stretch flex gap-[16px] h-[56px] items-center relative shrink-0 w-full">
                    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-h-px min-w-px overflow-clip relative">
                      <div className="label-small text-muted-foreground">
                        <p>Kommune</p>
                      </div>
                      <div className="body-large text-foreground">
                        <p>{audit.kommune}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
          
          {/* Actions - Column 3 */}
          <div className="content-stretch hidden md:flex flex-[1_0_0] flex-col gap-[10px] items-end max-w-[280px] min-w-[200px] relative">
            <button 
              onClick={() => console.log('Open revision:', audit.id)}
              className="content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0 hover:opacity-70 transition-opacity w-full"
            >
              <div className="content-stretch flex gap-[8px] items-center justify-center px-[24px] py-[16px] relative shrink-0">
                <div className="relative shrink-0 size-[24px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                    <path d={svgPathsRevisjonCard.pa1eb970} fill="var(--primary)" />
                  </svg>
                </div>
                <div className="body-large text-primary">
                  <p>Åpne revisjon</p>
                </div>
              </div>
            </button>
            
            {/* Last ned rapporten button */}
            <button 
              onClick={() => console.log('Download report:', audit.id)}
              className="content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0 hover:opacity-70 transition-opacity w-full"
            >
              <div className="content-stretch flex gap-[8px] items-center justify-center px-[24px] py-[16px] relative shrink-0">
                <div className="relative shrink-0 size-[24px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                    <path d="M12 16L7 11L8.4 9.55L11 12.15V4H13V12.15L15.6 9.55L17 11L12 16ZM6 20C5.45 20 4.979 19.804 4.587 19.412C4.195 19.02 3.99934 18.5493 4 18V15H6V18H18V15H20V18C20 18.55 19.804 19.021 19.412 19.413C19.02 19.805 18.5493 20.0007 18 20H6Z" fill="var(--primary)" />
                  </svg>
                </div>
                <div className="body-large text-primary">
                  <p>Last ned rapporten</p>
                </div>
              </div>
            </button>
          </div>
        </div>
        
        {/* Kort rapport section - only show when expanded */}
        {isExpanded && (
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Kort rapport">
            <div className="label-small text-muted-foreground mb-2">
              <p>Kort rapport</p>
            </div>
            <div className="body-large text-foreground">
              <p>
                {audit.id === 'hist-2026' 
                  ? 'Revisjonen ble gjennomført den 30. januar 2026. Gården viste god etterlevelse av regelverket innenfor de fleste områder. Det ble identifisert ett kritisk avvik knyttet til gjødselplan og lagringskapasitet, samt to mindre avvik relatert til dokumentasjon. Oppfølging er planlagt gjennom fysisk besøk og dokumentasjon.'
                  : audit.id === 'hist-2023'
                  ? 'Under revisjonen ble det konstatert gode rutiner for dyrevelferd og fôrhåndtering. To avvik ble registrert i forbindelse med sporbarhet i produksjonsregistreringer. Bedriften har fått frist til 25. mars for å levere manglende dokumentasjon. Ingen kritiske avvik ble funnet.'
                  : 'Revisjonen avdekket tilfredsstillende overholdelse av hygienekrav og driftsrutiner. Ett lite avvik ble notert vedrørende oppdatering av internkontrollsystemet. Bedriften har selv tatt ansvar for å lukke avviket innen fristen gjennom opplasting av dokumentasjon.'
                }
              </p>
            </div>
          </div>
        )}
        
        {/* Deviations section - only show when expanded */}
        {isExpanded && (audit.avvikOpen + audit.avvikClosed > 0) && (
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Deviations">
            {/* Avvik expandable header button */}
            <button
              onClick={() => setAvvikExpanded(!avvikExpanded)}
              className="flex items-center gap-4 h-[56px] px-0 py-2 hover:bg-[rgba(0,0,0,0.05)] transition-colors cursor-pointer rounded-[var(--radius)] w-full"
            >
              {avvikExpanded ? (
                <ChevronUp className="w-6 h-6 text-foreground" />
              ) : (
                <ChevronDown className="w-6 h-6 text-foreground" />
              )}
              <div className="label-small text-muted-foreground">
                <p>Avvik ({audit.avvikOpen + audit.avvikClosed})</p>
              </div>
            </button>
            
            {/* Deviation items - only show when avvik is expanded */}
            {avvikExpanded && (() => {
              const deviations = [];
              
              // Severity options for random generation
              const severityOptions = [
                { severity: 'kritisk', bg: '#ffdad6', color: '#410002', label: 'Kritisk' },
                { severity: 'avvik', bg: '#fddcc9', color: '#4a2800', label: 'Avvik' },
                { severity: 'lite-avvik', bg: '#fdeeb1', color: '#3d2c00', label: 'Lite avvik' }
              ];
              
              // Questions pool for random selection
              const questionPool = [
                '1.2.1 – Har du en gyldig gjødslingsplan og skiftekart for året?',
                '1.3.6 – Har du nok lagringskapasitet (min. 8 måneder)?',
                '2.1.3 – Er produksjonsregistreringene oppdatert og korrekte?',
                '2.4.2 – Er lagring av plantevernmidler i tråd med forskriftene?',
                '3.2.1 – Er internkontrollsystemet oppdatert med siste revisjonsdato?',
                '1.1.4 – Er avløpssystemet for husdyrgjødsel tilfredsstillende?',
                '2.3.1 – Følger du kravene til sporbarhet i produksjonen?',
                '3.1.2 – Er hygienekravene i produksjonslokaler oppfylt?'
              ];
              
              // Status options for open deviations
              const openStatusOptions = [
                { status: 'Dokument levert', dot: '#ba1a1a' },
                { status: 'Tidspunkt foreslått', dot: '#ba1a1a' },
                { status: 'Venter på handling', dot: '#ba1a1a' }
              ];
              
              // Deadlines pool
              const deadlines = [
                'Tirsdag 25. mars 2026',
                'Lørdag 5. april 2026',
                'Torsdag 13. mars 2026',
                'Mandag 10. mars 2026',
                'Fredag 28. mars 2026',
                'Onsdag 2. april 2026'
              ];
              
              // Generate open deviations
              for (let i = 0; i < audit.avvikOpen; i++) {
                const severityData = severityOptions[i % severityOptions.length];
                const question = questionPool[i % questionPool.length];
                const statusData = openStatusOptions[i % openStatusOptions.length];
                const deadline = deadlines[i % deadlines.length];
                
                deviations.push(
                  <div key={`open-${i}`} className="w-full border-b border-[var(--border)] py-4">
                    <div className="content-stretch flex flex-col gap-2 items-start relative shrink-0 w-full">
                      {/* Badges row */}
                      <div className="flex flex-wrap gap-2 items-center">
                        {/* Severity badge */}
                        <div className="content-stretch flex gap-2 h-[33px] items-center px-3 relative rounded-xl shrink-0" style={{ backgroundColor: severityData.bg }}>
                          <svg className="size-4" fill="none" viewBox="0 0 16 16">
                            <path d="M1.33334 14.6667H14.6667L8.00001 2.66667L1.33334 14.6667ZM8.66668 12.6667H7.33334V11.3333H8.66668V12.6667ZM8.66668 10H7.33334V7.33333H8.66668V10Z" fill={severityData.color} />
                          </svg>
                          <span className="label-medium" style={{ color: severityData.color }}>{severityData.label}</span>
                        </div>
                        
                        {/* Status badge */}
                        <div className="flex gap-2 items-center">
                          <div className="rounded-full size-2" style={{ backgroundColor: statusData.dot }} />
                          <span className="label-medium text-foreground">{statusData.status}</span>
                        </div>
                        
                        {/* Deadline */}
                        <span className="label-small text-muted-foreground">Frist: {deadline}</span>
                      </div>
                      
                      {/* Status text */}
                      <p className="label-medium text-[#ba1a1a] tracking-[0.1px]">Avvik åpent</p>
                      
                      {/* Question text */}
                      <p className="body-medium text-foreground">{question}</p>
                    </div>
                  </div>
                );
              }
              
              // Generate closed deviations
              for (let i = 0; i < audit.avvikClosed; i++) {
                const severityData = severityOptions[(audit.avvikOpen + i) % severityOptions.length];
                const question = questionPool[(audit.avvikOpen + i + 1) % questionPool.length];
                const deadline = deadlines[(audit.avvikOpen + i + 1) % deadlines.length];
                
                deviations.push(
                  <div key={`closed-${i}`} className="w-full border-b border-[var(--border)] py-4">
                    <div className="content-stretch flex flex-col gap-2 items-start relative shrink-0 w-full">
                      {/* Badges row */}
                      <div className="flex flex-wrap gap-2 items-center">
                        {/* Severity badge */}
                        <div className="content-stretch flex gap-2 h-[33px] items-center px-3 relative rounded-xl shrink-0" style={{ backgroundColor: severityData.bg }}>
                          <svg className="size-4" fill="none" viewBox="0 0 16 16">
                            <path d="M1.33334 14.6667H14.6667L8.00001 2.66667L1.33334 14.6667ZM8.66668 12.6667H7.33334V11.3333H8.66668V12.6667ZM8.66668 10H7.33334V7.33333H8.66668V10Z" fill={severityData.color} />
                          </svg>
                          <span className="label-medium" style={{ color: severityData.color }}>{severityData.label}</span>
                        </div>
                        
                        {/* Status badge */}
                        <div className="flex gap-2 items-center">
                          <div className="rounded-full size-2 bg-[#4a671e]" />
                          <span className="label-medium text-foreground">Avvik lukket</span>
                        </div>
                        
                        {/* Deadline */}
                        <span className="label-small text-muted-foreground">Frist: {deadline}</span>
                      </div>
                      
                      {/* Status text */}
                      <p className="label-medium text-[#4a671e] tracking-[0.1px]">Avvik lukket</p>
                      
                      {/* Question text */}
                      <p className="body-medium text-foreground">{question}</p>
                    </div>
                  </div>
                );
              }
              
              return deviations;
            })()}
          </div>
        )}
        
        {/* Mobile layout - Action buttons first, then Vis mer at bottom */}
        <div className="md:hidden w-full flex flex-col">
          {/* Åpne revisjon button - comes FIRST on mobile */}
          <div className="w-full pt-4">
            <button 
              onClick={() => console.log('Open revision:', audit.id)}
              className="content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0 hover:opacity-70 transition-opacity w-full"
            >
              <div className="content-stretch flex gap-[8px] items-center justify-center px-[24px] py-[16px] relative shrink-0">
                <div className="relative shrink-0 size-[24px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                    <path d={svgPathsRevisjonCard.pa1eb970} fill="var(--primary)" />
                  </svg>
                </div>
                <div className="body-large text-primary">
                  <p>Åpne revisjon</p>
                </div>
              </div>
            </button>
          </div>
          
          {/* Last ned rapporten button - on mobile */}
          <div className="w-full pt-2">
            <button 
              onClick={() => console.log('Download report:', audit.id)}
              className="content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0 hover:opacity-70 transition-opacity w-full"
            >
              <div className="content-stretch flex gap-[8px] items-center justify-center px-[24px] py-[16px] relative shrink-0">
                <div className="relative shrink-0 size-[24px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                    <path d="M12 16L7 11L8.4 9.55L11 12.15V4H13V12.15L15.6 9.55L17 11L12 16ZM6 20C5.45 20 4.979 19.804 4.587 19.412C4.195 19.02 3.99934 18.5493 4 18V15H6V18H18V15H20V18C20 18.55 19.804 19.021 19.412 19.413C19.02 19.805 18.5493 20.0007 18 20H6Z" fill="var(--primary)" />
                  </svg>
                </div>
                <div className="body-large text-primary">
                  <p>Last ned rapporten</p>
                </div>
              </div>
            </button>
          </div>
          
          {/* Vis mer button - comes LAST on mobile, at the bottom */}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center justify-center gap-4 h-[56px] px-10 py-2 hover:bg-[rgba(0,0,0,0.05)] transition-colors cursor-pointer rounded-[var(--radius)] w-full"
          >
            {isExpanded ? (
              <ChevronUp className="w-6 h-6 text-foreground" />
            ) : (
              <ChevronDown className="w-6 h-6 text-foreground" />
            )}
            <div className="body-large text-foreground">
              <p>{isExpanded ? 'Vis mindre' : 'Vis mer'}</p>
            </div>
          </button>
        </div>
        
        {/* Desktop Vis mer button */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="hidden md:flex items-center gap-4 h-[56px] px-10 py-2 hover:bg-[rgba(0,0,0,0.05)] transition-colors cursor-pointer rounded-[var(--radius)] w-full"
        >
          {isExpanded ? (
            <ChevronUp className="w-6 h-6 text-foreground" />
          ) : (
            <ChevronDown className="w-6 h-6 text-foreground" />
          )}
          <div className="body-large text-foreground">
            <p>{isExpanded ? 'Vis mindre' : 'Vis mer'}</p>
          </div>
        </button>
      </div>
    );
  };

  return (
    <div className="flex-1 h-full flex flex-col">
      {/* Tabs */}
      <div className="border-b border-[var(--border)] pl-[52px] max-[1400px]:pl-6">
        <div className="flex overflow-x-auto">
          {[
            { id: 'eksternrevisjoner', label: 'Eksternrevisjoner' },
            { id: 'egenrevisjoner', label: 'Egenrevisjoner' },
            { id: 'tilsynshistorikk', label: 'Tilsynshistorikk' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveHistoryTab(tab.id as HistoryTabType)}
              className={`px-4 py-[14px] label-medium relative whitespace-nowrap ${
                activeHistoryTab === tab.id
                  ? 'text-foreground'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {tab.label}
              {activeHistoryTab === tab.id && (
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary" />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <OverlayScrollContainer className="flex-1 overflow-y-auto">
        <div className="flex flex-col gap-6 p-10 max-[1400px]:p-6">
          {activeHistoryTab === 'eksternrevisjoner' && (
            <>
              {mockAuditHistory.map(audit => renderAuditCard(audit))}
            </>
          )}
          
          {activeHistoryTab === 'egenrevisjoner' && (
            <div className="flex items-center justify-center py-20">
              <p className="body-large text-muted-foreground">
                Ingen egenrevisjoner registrert for dette foretaket
              </p>
            </div>
          )}
          
          {activeHistoryTab === 'tilsynshistorikk' && (
            <div className="flex items-center justify-center py-20">
              <p className="body-large text-muted-foreground">
                Ingen tilsynshistorikk registrert for dette foretaket
              </p>
            </div>
          )}
        </div>
      </OverlayScrollContainer>
    </div>
  );
}