import { useState } from 'react';
import svgPathsRevisjonCard from "../imports/svg-es1yhnytnq";
import { ChevronUp, ChevronDown, StickyNote } from "lucide-react";
import { Button } from './ui/button';

interface RevisjonData {
  ordning: string;
  revisjonsfrist: string;
  produksjon: string[];
  kommune: string;
  address: string;
  isPriority: boolean;
  hasPlannedDate?: boolean;
  rapportLocked?: boolean; // For historical revisions
  isEditable?: boolean; // Within 14 days after closing
  avvikCount?: number; // Total avvik count
  avvikOpen?: number; // Open avvik count
  avvikClosed?: number; // Closed avvik count
}

interface PlannedRevisjon {
  id: string;
  foretakName: string;
  visitDate: Date | null;
  visitTime: string | null;
  revisjonData: RevisjonData;
}

interface RevisjonCardProps {
  revisjon: PlannedRevisjon;
  onCardClick?: () => void;
  onNotesClick?: (revisjonId: string) => void;
  notesCount?: number;
}

export function RevisjonCard({ revisjon, onCardClick, onNotesClick, notesCount }: RevisjonCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [avvikExpanded, setAvvikExpanded] = useState(false);
  const data = revisjon.revisjonData;

  // Get surface colors based on ordning - but DON'T apply theme class
  const getOrdningSurfaceColors = (ordning: string): { bg: string; text: string; textSecondary: string } => {
    switch (ordning.toLowerCase()) {
      case 'lokalmat':
        return {
          bg: '#FDFDF8', // LokalMat surface-bright
          text: '#1A1C16', // LokalMat on-surface
          textSecondary: '#44483B' // LokalMat on-surface-variant
        };
      case 'nyt norge':
        return {
          bg: '#F5F8FF', // Nyt Norge surface-bright
          text: '#1A1C22', // Nyt Norge on-surface
          textSecondary: '#44464F' // Nyt Norge on-surface-variant
        };
      case 'spesialitet':
        return {
          bg: '#FAF8F5', // Spesialitet surface-bright
          text: '#1C1B18', // Spesialitet on-surface
          textSecondary: '#48443F' // Spesialitet on-surface-variant
        };
      case 'ksl':
      default:
        return {
          bg: '#FAFAF0', // KSL surface-bright
          text: '#1A1C16', // KSL on-surface
          textSecondary: '#44483B' // KSL on-surface-variant
        };
    }
  };

  const surfaceColors = getOrdningSurfaceColors(data.ordning);

  // Get ordning primary color for the ordning label
  const getOrdningPrimaryColor = (ordning: string): string => {
    switch (ordning.toLowerCase()) {
      case 'lokalmat':
        return '#A80000';
      case 'nyt norge':
        return '#00319E';
      case 'spesialitet':
        return '#594414';
      case 'ksl':
      default:
        return '#4A671E';
    }
  };

  // Get ordning chip colors (primary and foreground)
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

  const chipColors = getOrdningChipColors(data.ordning);

  return (
    <div 
      className="content-stretch flex flex-col gap-[16px] items-start pt-[8px] px-[24px] max-[900px]:px-[16px] relative rounded-[12px] shrink-0 w-full max-w-[1040px]"
      style={{ backgroundColor: '#FAFAF0' }}
      data-name="Revisjon Card"
    >
      <div aria-hidden="true" className="absolute border border-[var(--border)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      
      {/* Info chips - at the top */}
      <div className="content-stretch flex flex-wrap gap-[10px] items-start relative shrink-0 w-full" data-name="Info chips">
        {/* Show different chip based on report status */}
        {data.rapportLocked ? (
          // Rapport låst chip - for historical revisions
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
        ) : data.hasPlannedDate ? (
          // Planlagt dato chip - when date exists
          <div className="bg-[var(--accent)] content-stretch flex h-[32px] items-center justify-center overflow-clip relative rounded-[8px] shrink-0">
            <div className="content-stretch flex gap-[8px] h-[32px] items-center justify-center pl-[8px] pr-[16px] py-[6px] relative shrink-0">
              <div className="relative shrink-0 size-[18px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                  <path d={svgPathsRevisjonCard.p35211d80} fill="var(--accent-foreground)" />
                </svg>
              </div>
              <div className="label-medium text-[var(--accent-foreground)]">
                <p>Planlagt dato</p>
              </div>
            </div>
          </div>
        ) : (
          // Venter på planlegging chip - when no date
          <div className="bg-[#fff4e6] content-stretch flex h-[32px] items-center justify-center overflow-clip relative rounded-[8px] shrink-0">
            <div className="content-stretch flex gap-[8px] h-[32px] items-center justify-center pl-[8px] pr-[16px] py-[6px] relative shrink-0">
              <div className="relative shrink-0 size-[18px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                  <path d={svgPathsRevisjonCard.p35211d80} fill="#805500" />
                </svg>
              </div>
              <div className="label-medium text-[#805500]">
                <p>Venter på planlegging</p>
              </div>
            </div>
          </div>
        )}
        
        {/* Redigerbar chip - only show for locked reports that are still editable (within 14 days) */}
        {data.rapportLocked && data.isEditable && (
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
        
        {/* Åpne avvik chip - only show for locked reports with open deviations */}
        {data.rapportLocked && data.avvikOpen !== undefined && data.avvikOpen > 0 && (
          <div className="bg-[#FFF4E6] content-stretch flex h-[32px] items-center justify-center overflow-clip relative rounded-[8px] shrink-0">
            <div className="content-stretch flex gap-[8px] h-[32px] items-center justify-center pl-[8px] pr-[16px] py-[6px] relative shrink-0">
              <div className="label-medium text-[#805500]">
                <p>{data.avvikOpen} åpne avvik</p>
              </div>
            </div>
          </div>
        )}
        
        {/* Priority chip - comes AFTER status chip */}
        {data.isPriority && (
          <div className="bg-[var(--error-container)] h-[32px] relative rounded-[8px] shrink-0">
            <div className="content-stretch flex h-full items-center justify-center overflow-clip relative rounded-[inherit]">
              <div className="content-stretch flex h-[32px] items-center justify-center px-[16px] py-[6px] relative shrink-0">
                <div className="label-medium text-[var(--error-container-foreground)]">
                  <p>Prioritert</p>
                </div>
              </div>
            </div>
            <div aria-hidden="true" className="absolute border border-[var(--border)] border-solid inset-0 pointer-events-none rounded-[8px]" />
          </div>
        )}
      </div>
      
      {/* Audit information - responsive layout with flex-wrap */}
      <div className="flex flex-wrap gap-4 items-start relative shrink-0 w-full" data-name="audit information">
        
        {/* Revisjon info - Column 1 - min-width for wrapping */}
        <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-[280px] relative" data-name="Revisjon info">
          {/* Top info with date */}
          <div className="content-stretch flex flex-col items-start px-0 py-[8px] relative shrink-0" data-name="top info">
            {/* Date and time OR Revisjonsfrist */}
            {data.hasPlannedDate ? (
              <>
                <div className="title-medium text-foreground">
                  <p>{revisjon.visitDate?.getDate()}. {revisjon.visitDate?.toLocaleString('default', { month: 'long' })} {revisjon.visitDate?.getFullYear()}, kl. {revisjon.visitTime?.split(' - ')[0]}</p>
                </div>
                {/* Chips Row */}
                <div className="flex items-center gap-2 mt-2 flex-wrap">
                  {/* Ordning chip with theme colors */}
                  <div 
                    className="h-[32px] relative rounded-[8px] shrink-0"
                    style={{ backgroundColor: chipColors.bg }}
                  >
                    <div className="content-stretch flex h-full items-center justify-center overflow-clip relative rounded-[inherit]">
                      <div className="content-stretch flex h-[32px] items-center justify-center px-[16px] py-[6px] relative shrink-0">
                        <div className="label-medium" style={{ color: chipColors.text }}>
                          <p>{data.ordning}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Revisor/Medrevisor Outlined Chip */}
                  <div className="h-[32px] relative rounded-[8px] shrink-0">
                    <div className="content-stretch flex h-full items-center justify-center overflow-clip relative rounded-[inherit]">
                      <div className="content-stretch flex h-[32px] items-center justify-center px-4 py-[6px] relative shrink-0">
                        <span className="label-medium text-foreground whitespace-nowrap">
                          {revisjon.id === 'rev-2' || revisjon.id === 'rev-5' ? 'Medrevisor' : 'Revisor'}
                        </span>
                      </div>
                    </div>
                    <div aria-hidden="true" className="absolute border border-[#c4c8b7] border-solid inset-0 pointer-events-none rounded-[8px]" />
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="title-medium text-foreground">
                  <p>Revisjonsfrist: {data.revisjonsfrist}</p>
                </div>
                {/* Chips Row */}
                <div className="flex items-center gap-2 mt-2 flex-wrap">
                  {/* Ordning chip with theme colors */}
                  <div 
                    className="h-[32px] relative rounded-[8px] shrink-0"
                    style={{ backgroundColor: chipColors.bg }}
                  >
                    <div className="content-stretch flex h-full items-center justify-center overflow-clip relative rounded-[inherit]">
                      <div className="content-stretch flex h-[32px] items-center justify-center px-[16px] py-[6px] relative shrink-0">
                        <div className="label-medium" style={{ color: chipColors.text }}>
                          <p>{data.ordning}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Revisor/Medrevisor Outlined Chip */}
                  <div className="h-[32px] relative rounded-[8px] shrink-0">
                    <div className="content-stretch flex h-full items-center justify-center overflow-clip relative rounded-[inherit]">
                      <div className="content-stretch flex h-[32px] items-center justify-center px-4 py-[6px] relative shrink-0">
                        <span className="label-medium text-foreground whitespace-nowrap">
                          {revisjon.id === 'rev-2' || revisjon.id === 'rev-5' ? 'Medrevisor' : 'Revisor'}
                        </span>
                      </div>
                    </div>
                    <div aria-hidden="true" className="absolute border border-[#c4c8b7] border-solid inset-0 pointer-events-none rounded-[8px]" />
                  </div>
                </div>
              </>
            )}
          </div>
          
          {/* Collapsible content - Ordning, Revisjonsfrist, Produksjon */}
          {isExpanded && (
            <>
              {/* Revisjonsfrist OR Rapport låst dato */}
              <div className="content-stretch flex flex-col items-center justify-center min-h-[56px] relative shrink-0 w-full">
                <div className="content-stretch flex gap-[16px] h-[56px] items-center relative shrink-0 w-full">
                  <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-h-px min-w-px overflow-clip relative">
                    <div className="label-small text-muted-foreground">
                      <p>{data.rapportLocked ? 'Rapport låst dato' : 'Revisjonsfrist'}</p>
                    </div>
                    <div className="body-large text-foreground">
                      {data.rapportLocked && revisjon.visitDate ? (
                        // Calculate 2 weeks (14 days) after the revision date
                        <p>
                          {(() => {
                            const lockedDate = new Date(revisjon.visitDate);
                            lockedDate.setDate(lockedDate.getDate() + 14);
                            return `${lockedDate.getDate()}. ${lockedDate.toLocaleString('default', { month: 'long' })} ${lockedDate.getFullYear()}`;
                          })()}
                        </p>
                      ) : (
                        <p>{data.revisjonsfrist}</p>
                      )}
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
                      {data.produksjon.map((prod, idx) => (
                        <p key={idx} className={idx < data.produksjon.length - 1 ? 'mb-0' : ''}>{prod}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
        
        {/* Foretak info - Column 2 - min-width for wrapping */}
        <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-[280px] relative" data-name="Foretak info">
          {/* Top info with farm name and address */}
          <div className="content-stretch flex flex-col items-start px-0 py-[8px] relative shrink-0 w-full">
            {/* Farm name - NO CHIP, just text */}
            <div className="title-medium mb-1 text-foreground">
              <p>{revisjon.foretakName}</p>
            </div>
            
            {/* Address lines - smaller font */}
            <div className="label-medium text-foreground">
              {data.address.split(', ').map((line, idx) => (
                <p key={idx} className={idx === 0 ? 'mb-0' : ''}>{line}</p>
              ))}
            </div>
          </div>
          
          {/* Collapsible content - Kommune and Adresse */}
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
                      <p>{data.kommune}</p>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
        
        {/* Actions - Column 3 - min-width for wrapping */}
        <div className="content-stretch hidden md:flex flex-[1_0_0] flex-col gap-[10px] items-end max-w-[280px] min-w-[200px] relative" data-name="Actions">
          <button 
            onClick={onCardClick}
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
          
          {/* Last ned rapporten button - only show for historical revisions */}
          {data.rapportLocked && (
            <button 
              onClick={(e) => {
                e.stopPropagation();
                // Handle download logic here
                console.log('Downloading rapport for:', revisjon.foretakName);
              }}
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
          )}
        </div>
      </div>
      
      {/* Kort rapport section - only show when expanded and locked */}
      {isExpanded && data.rapportLocked && (
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Kort rapport">
          <div className="label-small text-muted-foreground mb-2">
            <p>Kort rapport</p>
          </div>
          <div className="body-large text-foreground">
            <p>
              {revisjon.id === 'rev-1' 
                ? 'Revisjonen ble gjennomført den 30. januar 2026. Gården viste god etterlevelse av regelverket innenfor de fleste områder. Det ble identifisert ett kritisk avvik knyttet til gjødselplan og lagringskapasitet, samt to mindre avvik relatert til dokumentasjon. Oppfølging er planlagt gjennom fysisk besøk og dokumentasjon.'
                : revisjon.id === 'rev-2'
                ? 'Under revisjonen ble det konstatert gode rutiner for dyrevelferd og fôrhåndtering. To avvik ble registrert i forbindelse med sporbarhet i produksjonsregistreringer. Bedriften har fått frist til 25. mars for å levere manglende dokumentasjon. Ingen kritiske avvik ble funnet.'
                : revisjon.id === 'rev-3'
                ? 'Revisjonen avdekket tilfredsstillende overholdelse av hygienekrav og driftsrutiner. Ett lite avvik ble notert vedrørende oppdatering av internkontrollsystemet. Bedriften har selv tatt ansvar for å lukke avviket innen fristen gjennom opplasting av dokumentasjon.'
                : revisjon.id === 'rev-4'
                ? 'Gården holder høy standard på produksjonslokaler og utstyr. Ett avvik ble registrert knyttet til lagring av plantevernmidler. Oppfølging vil skje gjennom digitalt besøk for å verifisere at tiltakene er gjennomført. Forventet lukking av avviket er satt til 15. april 2026.'
                : 'Revisjonen viste god kontroll på nøkkelprosesser og sporbarhet. Det ble identifisert mindre forbedringspotensial innenfor dokumentasjonshåndtering. Alle avvik har lav alvorlighetsgrad og forventes lukket innen satt frist gjennom levering av oppdatert dokumentasjon.'
              }
            </p>
          </div>
        </div>
      )}
      
      {/* Deviations section - only show when expanded and locked with deviations */}
      {isExpanded && data.rapportLocked && (data.avvikCount !== undefined && data.avvikCount > 0) && (
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
              <p>Avvik ({(data.avvikOpen || 0) + 1})</p>
            </div>
          </button>
          
          {/* Deviation items - only show when expanded */}
          {avvikExpanded && (() => {
            const openCount = data.avvikOpen || 0;
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
            for (let i = 0; i < openCount; i++) {
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
            
            // Add one closed deviation
            const closedSeverity = severityOptions[openCount % severityOptions.length];
            const closedQuestion = questionPool[(openCount + 1) % questionPool.length];
            const closedDeadline = deadlines[(openCount + 1) % deadlines.length];
            
            deviations.push(
              <div key="closed" className="w-full border-b border-[var(--border)] py-4">
                <div className="content-stretch flex flex-col gap-2 items-start relative shrink-0 w-full">
                  {/* Badges row */}
                  <div className="flex flex-wrap gap-2 items-center">
                    {/* Severity badge */}
                    <div className="content-stretch flex gap-2 h-[33px] items-center px-3 relative rounded-xl shrink-0" style={{ backgroundColor: closedSeverity.bg }}>
                      <svg className="size-4" fill="none" viewBox="0 0 16 16">
                        <path d="M1.33334 14.6667H14.6667L8.00001 2.66667L1.33334 14.6667ZM8.66668 12.6667H7.33334V11.3333H8.66668V12.6667ZM8.66668 10H7.33334V7.33333H8.66668V10Z" fill={closedSeverity.color} />
                      </svg>
                      <span className="label-medium" style={{ color: closedSeverity.color }}>{closedSeverity.label}</span>
                    </div>
                    
                    {/* Status badge */}
                    <div className="flex gap-2 items-center">
                      <div className="bg-[#4a671e] rounded-full size-2" />
                      <span className="label-medium text-foreground">Godkjent</span>
                    </div>
                    
                    {/* Deadline */}
                    <span className="label-small text-muted-foreground">Frist: {closedDeadline}</span>
                  </div>
                  
                  {/* Status text */}
                  <p className="label-medium text-foreground tracking-[0.1px]">Avvik lukket</p>
                  
                  {/* Question text */}
                  <p className="body-medium text-foreground">{closedQuestion}</p>
                </div>
              </div>
            );
            
            return deviations;
          })()}
        </div>
      )}
      
      {/* Mobile layout - Action buttons first, then Vis mer at bottom */}
      <div className="md:hidden w-full flex flex-col">
        {/* Åpne revisjon button - comes FIRST on mobile */}
        <div className="w-full pt-4">
          <button 
            onClick={onCardClick}
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
        
        {/* Last ned rapporten button - only show for historical revisions on mobile */}
        {data.rapportLocked && (
          <div className="w-full pt-2">
            <button 
              onClick={(e) => {
                e.stopPropagation();
                // Handle download logic here
                console.log('Downloading rapport for:', revisjon.foretakName);
              }}
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
        )}
        
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
}