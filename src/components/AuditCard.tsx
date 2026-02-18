import { useState } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';

/**
 * Audit Status Types:
 * - 'tildelt': Assigned to revisor, not yet accepted
 * - 'akseptert': Accepted by revisor, not yet planned
 * - 'planlagt': Time scheduled, waiting for audit date
 * - 'revidert': Audit completed, report being written
 * - 'rapport-editerbar': Report locked but editable for 14 days
 * - 'rapport-last': Report locked and no longer editable (after 14 days)
 */
export type AuditStatus = 'tildelt' | 'akseptert' | 'planlagt' | 'revidert' | 'rapport-editerbar' | 'rapport-last';

export interface ProductionItem {
  name: string;
  count?: number; // Optional count to display after production name
}

export interface AuditCardData {
  id: string;
  ordning: 'KSL' | 'LokalMat' | 'Nyt Norge' | 'Spesialitet';
  status: AuditStatus;
  revisjonDato?: string; // Norwegian date format: "Torsdag 30. januar 2026"
  rapportLastDato?: string; // Date when report was locked
  produksjon: ProductionItem[]; // Array of production items with optional counts
  foretakName: string;
  address: string;
  kommune: string;
  avvikCount?: number; // Total deviations
  avvikOpen?: number; // Open deviations
  avvikClosed?: number; // Closed deviations
  kortRapport?: string; // Short report text
  deviations?: DeviationData[]; // Detailed deviation list
}

export interface DeviationData {
  id: string;
  severity: 'kritisk' | 'avvik' | 'lite-avvik';
  question: string;
  mangel?: string; // The deficiency/finding description
  status: 'apent' | 'dokument-levert' | 'tidspunkt-foreslatt' | 'lukket';
  deadline: string;
}

interface AuditCardProps {
  audit: AuditCardData;
  onClick?: () => void; // DEPRECATED: No longer used, cards are not clickable
  showExpandButton?: boolean; // Whether to show Vis mer/mindre button
  defaultExpanded?: boolean;
  variant?: 'external' | 'self'; // 'external' for external audits (cream bg), 'self' for egenrevisjon (white bg)
}

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

// Get severity badge data
const getSeverityBadgeData = (severity: string) => {
  switch (severity) {
    case 'kritisk':
      return { bg: '#ffdad6', color: '#410002', label: 'Kritisk' };
    case 'avvik':
      return { bg: '#fddcc9', color: '#4a2800', label: 'Avvik' };
    case 'lite-avvik':
      return { bg: '#fdeeb1', color: '#3d2c00', label: 'Lite avvik' };
    default:
      return { bg: '#fdeeb1', color: '#3d2c00', label: 'Lite avvik' };
  }
};

// Get deviation status badge data
const getDeviationStatusBadgeData = (status: string) => {
  switch (status) {
    case 'apent':
      return { dot: '#ba1a1a', text: 'Åpent avvik', textColor: '#ba1a1a' };
    case 'lukket':
      return { dot: '#4a671e', text: 'Avvik lukket', textColor: '#4a671e' };
    case 'dokument-levert':
      return { dot: '#ba1a1a', text: 'Dokument levert', textColor: '#ba1a1a' };
    case 'tidspunkt-foreslatt':
      return { dot: '#ba1a1a', text: 'Tidspunkt foreslått', textColor: '#ba1a1a' };
    default:
      return { dot: '#ba1a1a', text: 'Åpent avvik', textColor: '#ba1a1a' };
  }
};

export function AuditCard({ 
  audit, 
  onClick, 
  showExpandButton = true,
  defaultExpanded = false,
  variant = 'external'
}: AuditCardProps) {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);
  const [avvikExpanded, setAvvikExpanded] = useState(false);

  const chipColors = getOrdningChipColors(audit.ordning);
  
  // Determine which chips to show at the top
  const showRapportLastChip = variant === 'external' && (audit.status === 'rapport-editerbar' || audit.status === 'rapport-last');
  const showEgenrevisjonChip = variant === 'self';
  const showApneAvvikChip = audit.avvikOpen > 0;
  const showDownloadButton = showRapportLastChip || showEgenrevisjonChip; // Show download for both external locked reports and egenrevisjoner

  return (
    <div 
      className="content-stretch flex flex-col gap-[16px] items-start pt-[8px] px-[24px] max-[900px]:px-[16px] relative rounded-[12px] shrink-0 w-full max-w-[1040px]"
      style={{ backgroundColor: variant === 'external' ? '#FAFAF0' : '#FFFFFF' }}
    >
      <div aria-hidden="true" className="absolute border border-[var(--border)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      
      {/* Status chips row - at the top */}
      <div className="content-stretch flex flex-wrap gap-[10px] items-start relative shrink-0 w-full">
        {/* Egenrevisjon chip - shows FIRST for self audits */}
        {showEgenrevisjonChip && (
          <div className="bg-[var(--primary-container)] content-stretch flex h-[32px] items-center justify-center overflow-clip relative rounded-[8px] shrink-0">
            <div className="content-stretch flex gap-[8px] h-[32px] items-center justify-center pl-[8px] pr-[16px] py-[6px] relative shrink-0">
              <div className="relative shrink-0 size-[18px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                  <path d="M14.25 6.375H13.5V4.875C13.5 3.01125 12.0112 1.5 10.1719 1.5H7.82812C5.98875 1.5 4.5 3.01125 4.5 4.875V6.375H3.75C3.3375 6.375 3 6.7125 3 7.125V15C3 15.4125 3.3375 15.75 3.75 15.75H14.25C14.6625 15.75 15 15.4125 15 15V7.125C15 6.7125 14.6625 6.375 14.25 6.375ZM6 4.875C6 3.84 6.81 3 7.82812 3H10.1719C11.19 3 12 3.84 12 4.875V6.375H6V4.875ZM13.5 14.25H4.5V7.875H13.5V14.25ZM9 10.5C9.41421 10.5 9.75 10.1642 9.75 9.75C9.75 9.33579 9.41421 9 9 9C8.58579 9 8.25 9.33579 8.25 9.75C8.25 10.1642 8.58579 10.5 9 10.5Z" fill="var(--primary-container-foreground)" />
                </svg>
              </div>
              <div className="label-medium text-[var(--primary-container-foreground)]">
                <p>Egenrevisjon</p>
              </div>
            </div>
          </div>
        )}
        
        {/* Rapport låst chip - shows for external rapport-editerbar and rapport-last */}
        {showRapportLastChip && (
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
        )}

        {/* Åpne avvik chip - shows when there are open deviations */}
        {showApneAvvikChip && (
          <div className="bg-[var(--error-container)] content-stretch flex h-[32px] items-center justify-center overflow-clip relative rounded-[8px] shrink-0">
            <div className="content-stretch flex gap-[8px] h-[32px] items-center justify-center pl-[8px] pr-[16px] py-[6px] relative shrink-0">
              <div className="relative shrink-0 size-[18px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                  <path d="M1.5 16.5H16.5L9 3L1.5 16.5ZM9.75 14.25H8.25V12.75H9.75V14.25ZM9.75 11.25H8.25V8.25H9.75V11.25Z" fill="var(--error-container-foreground)" />
                </svg>
              </div>
              <div className="label-medium text-[var(--error-container-foreground)]">
                <p>{audit.avvikOpen} {audit.avvikOpen === 1 ? 'åpent avvik' : 'åpne avvik'}</p>
              </div>
            </div>
          </div>
        )}
      </div>
      
      {/* Audit information - responsive layout with flex-wrap */}
      <div className="flex flex-wrap gap-4 items-start relative shrink-0 w-full">
        
        {/* Revisjon info - Column 1 */}
        <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-[280px] relative">
          {/* Top info with date and ordning chip below */}
          <div className="content-stretch flex flex-col items-start px-0 py-[8px] relative shrink-0">
            {/* Revision Date - show if available */}
            {audit.revisjonDato && (
              <div className="title-medium text-foreground mb-2">
                <p>{audit.revisjonDato}</p>
              </div>
            )}
            
            {/* Ordning chip - comes BELOW the date */}
            <div className="flex items-center gap-2 flex-wrap">
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
            </div>
          </div>
          
          {/* Produksjon - Always visible */}
          <div className="content-stretch flex flex-col items-start min-h-[56px] relative shrink-0 w-full">
            <div className="content-stretch flex gap-[16px] items-start py-[4px] relative shrink-0 w-full">
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px overflow-clip relative">
                <div className="label-small text-muted-foreground">
                  <p>Produksjon</p>
                </div>
                <div className="body-large text-foreground">
                  {audit.produksjon.map((prod, idx) => (
                    <p key={idx} className={idx < audit.produksjon.length - 1 ? 'mb-0' : ''}>
                      {prod.name}{prod.count !== undefined ? ` (${prod.count})` : ''}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Foretak info - Column 2 */}
        <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-[280px] relative">
          {/* Top info with farm name and address */}
          <div className="content-stretch flex flex-col items-start px-0 py-[8px] relative shrink-0 w-full">
            {/* Farm name */}
            <div className="title-medium mb-1 text-foreground">
              <p>{audit.foretakName}</p>
            </div>
            
            {/* Address */}
            <div className="label-medium text-foreground">
              <p className="mb-0">{audit.address.split(',')[0]}</p>
              <p>{audit.address.split(',')[1]?.trim() || ''}</p>
            </div>
          </div>
          
          {/* Collapsible content - Kommune */}
          {isExpanded && (
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
          )}
        </div>
        
        {/* Actions - Column 3 - Desktop only */}
        <div className="content-stretch hidden md:flex flex-[1_0_0] flex-col gap-[10px] items-start max-w-[280px] min-w-[200px] relative">
          {/* Last ned rapporten button - only show for rapport-editerbar and rapport-last */}
          {showDownloadButton && (
            <button 
              onClick={(e) => {
                e.stopPropagation();
                console.log('Download report:', audit.id);
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
      
      {/* Kort rapport section - only show when expanded and if available */}
      {isExpanded && audit.kortRapport && (
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Kort rapport">
          <div className="label-small text-muted-foreground mb-2">
            <p>Kort rapport</p>
          </div>
          <div className="body-large text-foreground">
            <p>{audit.kortRapport}</p>
          </div>
        </div>
      )}
      
      {/* Deviations section - only show when expanded and if there are deviations */}
      {isExpanded && ((audit.avvikOpen ?? 0) + (audit.avvikClosed ?? 0) > 0) && (
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Deviations">
          {/* Avvik expandable header button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setAvvikExpanded(!avvikExpanded);
            }}
            className="flex items-center gap-4 h-[56px] px-0 py-2 hover:bg-[rgba(0,0,0,0.05)] transition-colors cursor-pointer rounded-[var(--radius)] w-full"
          >
            {avvikExpanded ? (
              <ChevronUp className="w-6 h-6 text-foreground" />
            ) : (
              <ChevronDown className="w-6 h-6 text-foreground" />
            )}
            <div className="label-small text-muted-foreground">
              <p>Avvik ({(audit.avvikOpen ?? 0) + (audit.avvikClosed ?? 0)})</p>
            </div>
          </button>
          
          {/* Deviation items - only show when avvik is expanded */}
          {avvikExpanded && audit.deviations && audit.deviations.map((deviation) => {
            const severityData = getSeverityBadgeData(deviation.severity);
            const statusData = getDeviationStatusBadgeData(deviation.status);
            const isOpen = deviation.status !== 'lukket';
            
            return (
              <div key={deviation.id} className="w-full border-b border-[var(--border)] py-4">
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
                      <span className="label-medium" style={{ color: statusData.textColor }}>{statusData.text}</span>
                    </div>
                    
                    {/* Deadline - only show if available */}
                    {deviation.deadline && (
                      <span className="label-small text-muted-foreground">Frist: {deviation.deadline}</span>
                    )}
                  </div>
                  
                  {/* Question text */}
                  <p className="body-medium text-foreground">{deviation.question}</p>
                  
                  {/* Mangel text - shows below question */}
                  {deviation.mangel && (
                    <div className="flex flex-col gap-1 w-full">
                      <span className="label-small text-muted-foreground">Mangel:</span>
                      <p className="body-medium text-foreground">{deviation.mangel}</p>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}
      
      {/* Mobile layout - Action buttons first, then Vis mer at bottom */}
      <div className="md:hidden w-full flex flex-col gap-2 pt-4">
        {/* Last ned rapporten button - on mobile, only for locked reports */}
        {showDownloadButton && (
          <button 
            onClick={(e) => {
              e.stopPropagation();
              console.log('Download report:', audit.id);
            }}
            className="flex items-center justify-center gap-2 px-6 py-4 rounded-full hover:opacity-70 transition-opacity w-full"
          >
            <div className="w-6 h-6">
              <svg className="block w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                <path d="M12 16L7 11L8.4 9.55L11 12.15V4H13V12.15L15.6 9.55L17 11L12 16ZM6 20C5.45 20 4.979 19.804 4.587 19.412C4.195 19.02 3.99934 18.5493 4 18V15H6V18H18V15H20V18C20 18.55 19.804 19.021 19.412 19.413C19.02 19.805 18.5493 20.0007 18 20H6Z" fill="var(--primary)" />
              </svg>
            </div>
            <span className="body-large text-primary">Last ned rapporten</span>
          </button>
        )}
        
        {/* Vis mer button - comes LAST on mobile, at the bottom - LEFT JUSTIFIED */}
        {showExpandButton && (
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setIsExpanded(!isExpanded);
            }}
            className="flex items-center gap-4 min-h-[56px] px-0 py-2 hover:bg-[rgba(0,0,0,0.05)] active:bg-[rgba(0,0,0,0.1)] transition-colors cursor-pointer rounded-[var(--radius)] w-full touch-manipulation"
            style={{ WebkitTapHighlightColor: 'transparent' }}
          >
            {isExpanded ? (
              <ChevronUp className="w-6 h-6 text-foreground" />
            ) : (
              <ChevronDown className="w-6 h-6 text-foreground" />
            )}
            <span className="body-large text-foreground">
              {isExpanded ? 'Vis mindre' : 'Vis mer'}
            </span>
          </button>
        )}
      </div>
      
      {/* Desktop Vis mer button - LEFT JUSTIFIED */}
      {showExpandButton && (
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setIsExpanded(!isExpanded);
          }}
          className="hidden md:flex items-center gap-4 min-h-[56px] px-0 py-2 hover:bg-[rgba(0,0,0,0.05)] active:bg-[rgba(0,0,0,0.1)] transition-colors cursor-pointer rounded-[var(--radius)] w-full touch-manipulation"
          style={{ WebkitTapHighlightColor: 'transparent', position: 'relative', zIndex: 100 }}
        >
          {isExpanded ? (
            <ChevronUp className="w-6 h-6 text-foreground" />
          ) : (
            <ChevronDown className="w-6 h-6 text-foreground" />
          )}
          <span className="body-large text-foreground">
            {isExpanded ? 'Vis mindre' : 'Vis mer'}
          </span>
        </button>
      )}
    </div>
  );
}