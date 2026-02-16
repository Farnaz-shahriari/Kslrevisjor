import { useState } from 'react';
import svgPathsRevisjonCard from "../imports/svg-es1yhnytnq";
import { ChevronUp, ChevronDown } from "lucide-react";
import { Button } from './ui/button';

interface RevisjonData {
  ordning: string;
  revisjonsfrist: string;
  produksjon: string[];
  kommune: string;
  address: string;
  isPriority: boolean;
  isOppfolgingGyldigKSL?: boolean; // For KSL chip
}

interface TildeltRevisjon {
  id: string;
  foretakName: string;
  visitDate: Date; // This is the "Akseptfrist"
  visitTime: string;
  revisjonData: RevisjonData;
}

interface TildeltRevisjonCardProps {
  revisjon: TildeltRevisjon;
  onAccept?: (id: string) => void;
  onReject?: (id: string) => void;
}

export function TildeltRevisjonCard({ revisjon, onAccept, onReject }: TildeltRevisjonCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const data = revisjon.revisjonData;

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

  // Format Norwegian date
  const formatNorwegianDate = (date: Date): string => {
    const dayNames = ['Søndag', 'Mandag', 'Tirsdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lørdag'];
    const monthNames = ['januar', 'februar', 'mars', 'april', 'mai', 'juni', 'juli', 'august', 'september', 'oktober', 'november', 'desember'];
    
    const dayName = dayNames[date.getDay()];
    const day = date.getDate();
    const month = monthNames[date.getMonth()];
    const year = date.getFullYear();
    
    return `${dayName} ${day}. ${month} ${year}`;
  };

  return (
    <div 
      className="content-stretch flex flex-col gap-[16px] items-start pt-[8px] px-[24px] max-[900px]:px-[16px] relative rounded-[12px] shrink-0 w-full max-w-[1040px]"
      style={{ backgroundColor: '#FAFAF0' }}
      data-name="Tildelt Revisjon Card"
    >
      <div aria-hidden="true" className="absolute border border-[var(--border)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      
      {/* Info chips - at the top */}
      <div className="content-stretch flex flex-wrap gap-[8px] items-start relative shrink-0 w-full" data-name="Info chips">
        {/* Priority chip */}
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

        {/* Oppfølging gyldig KSL chip */}
        {data.isOppfolgingGyldigKSL && (
          <div className="bg-[var(--accent)] h-[32px] relative rounded-[8px] shrink-0">
            <div className="content-stretch flex h-full items-center justify-center overflow-clip relative rounded-[inherit]">
              <div className="content-stretch flex h-[32px] items-center justify-center px-[16px] py-[6px] relative shrink-0">
                <div className="label-medium text-[var(--accent-foreground)]">
                  <p>Oppfølging gyldig KSL</p>
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
          {/* Top info with akseptfrist */}
          <div className="content-stretch flex flex-col items-start px-0 py-[8px] relative shrink-0" data-name="top info">
            {/* Akseptfrist */}
            <div className="title-medium text-foreground">
              <p>Akseptfrist: {formatNorwegianDate(revisjon.visitDate)}</p>
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
                      {['tildelt-2', 'tildelt-5', 'tildelt-1', 'tildelt-7', 'akseptert-3', 'akseptert-6'].includes(revisjon.id) ? 'Medrevisor' : 'Revisor'}
                    </span>
                  </div>
                </div>
                <div aria-hidden="true" className="absolute border border-[#c4c8b7] border-solid inset-0 pointer-events-none rounded-[8px]" />
              </div>
            </div>
          </div>
          
          {/* Collapsible content - Revisjonsfrist and Produksjon */}
          {isExpanded && (
            <>
              {/* Revisjonsfrist */}
              <div className="content-stretch flex flex-col items-center justify-center min-h-[56px] relative shrink-0 w-full">
                <div className="content-stretch flex gap-[16px] h-[56px] items-center relative shrink-0 w-full">
                  <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-h-px min-w-px overflow-clip relative">
                    <div className="label-small text-muted-foreground">
                      <p>Revisjonsfrist</p>
                    </div>
                    <div className="body-large text-foreground">
                      <p>{data.revisjonsfrist}</p>
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
          <Button 
            variant="secondary"
            onClick={() => onAccept?.(revisjon.id)}
            className="w-full body-large"
          >
            Aksepter revisjon
          </Button>
          
          <Button 
            variant="tertiary"
            onClick={() => onReject?.(revisjon.id)}
            className="w-full body-large"
          >
            Avvis
          </Button>
        </div>
      </div>
      
      {/* Mobile layout - Action buttons first, then Vis mer at bottom */}
      <div className="md:hidden w-full flex flex-col gap-2">
        {/* Aksepter revisjon button - comes FIRST on mobile */}
        <Button 
          variant="secondary"
          onClick={() => onAccept?.(revisjon.id)}
          className="w-full body-large"
        >
          Aksepter revisjon
        </Button>
        
        {/* Avvis button - comes SECOND on mobile */}
        <Button 
          variant="tertiary"
          onClick={() => onReject?.(revisjon.id)}
          className="w-full body-large"
        >
          Avvis
        </Button>
        
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