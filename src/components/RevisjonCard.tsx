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
  onNotesClick?: (revisjonId: string) => void; // New prop for notes
  notesCount?: number; // Optional: show badge with number of notes
}

export function RevisjonCard({ revisjon, onCardClick, onNotesClick, notesCount = 0 }: RevisjonCardProps) {
  const [isExpanded, setIsExpanded] = useState(false); // Default: collapsed
  const data = revisjon.revisjonData;
  const dateObj = revisjon.visitDate;
  const monthNames = ['januar', 'februar', 'mars', 'april', 'mai', 'juni', 'juli', 'august', 'september', 'oktober', 'november', 'desember'];
  const dateTimeStr = dateObj && revisjon.visitTime 
    ? `${dateObj.getDate()}. ${monthNames[dateObj.getMonth()]} ${dateObj.getFullYear()}, kl. ${revisjon.visitTime.split(' - ')[0]}` 
    : 'Ikke planlagt';

  return (
    <div className="bg-[#fafaf0] content-stretch flex flex-col gap-[16px] items-start pt-[8px] px-[24px] relative rounded-[12px] shrink-0 w-full max-w-[1040px]" data-name="Revisjon Card">
      <div aria-hidden="true" className="absolute border border-[#c4c8b7] border-solid inset-0 pointer-events-none rounded-[12px]" />
      
      {/* Info chips - at the top */}
      <div className="content-stretch flex flex-wrap gap-[10px] items-start relative shrink-0 w-full" data-name="Info chips">
        {/* Show different chip based on whether date is planned */}
        {dateObj ? (
          // Planlagt dato chip - when date exists
          <div className="bg-[#dae2ff] content-stretch flex h-[32px] items-center justify-center overflow-clip relative rounded-[8px] shrink-0">
            <div className="content-stretch flex gap-[8px] h-[32px] items-center justify-center pl-[8px] pr-[16px] py-[6px] relative shrink-0">
              <div className="relative shrink-0 size-[18px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                  <path d={svgPathsRevisjonCard.p35211d80} fill="#174295" />
                </svg>
              </div>
              <div className="label-medium text-[#174295]">
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
        
        {/* Priority chip - comes AFTER status chip */}
        {data.isPriority && (
          <div className="bg-[#ffdad6] h-[32px] relative rounded-[8px] shrink-0">
            <div className="content-stretch flex h-full items-center justify-center overflow-clip relative rounded-[inherit]">
              <div className="content-stretch flex h-[32px] items-center justify-center px-[16px] py-[6px] relative shrink-0">
                <div className="label-medium text-[#410002]">
                  <p>Prioritert</p>
                </div>
              </div>
            </div>
            <div aria-hidden="true" className="absolute border border-[#c4c8b7] border-solid inset-0 pointer-events-none rounded-[8px]" />
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
            {dateObj ? (
              <div className="title-medium text-foreground">
                <p>{dateTimeStr}</p>
              </div>
            ) : (
              <div className="title-medium text-foreground">
                <p>Revisjonsfrist: {data.revisjonsfrist}</p>
              </div>
            )}
          </div>
          
          {/* Collapsible content - Ordning, Revisjonsfrist, Produksjon */}
          {isExpanded && (
            <>
              {/* Ordning */}
              <div className="content-stretch flex flex-col items-center justify-center min-h-[56px] relative shrink-0 w-full">
                <div className="content-stretch flex gap-[16px] h-[56px] items-center relative shrink-0 w-full">
                  <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-h-px min-w-px overflow-clip relative">
                    <div className="label-small text-muted-foreground w-full">
                      <p>Ordning</p>
                    </div>
                    <div className="body-large text-foreground w-full">
                      <p>{data.ordning}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Revisjonsfrist */}
              <div className="content-stretch flex flex-col items-center justify-center min-h-[56px] relative shrink-0 w-full">
                <div className="content-stretch flex gap-[16px] h-[56px] items-center relative shrink-0 w-full">
                  <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-h-px min-w-px overflow-clip relative">
                    <div className="label-small text-muted-foreground w-full">
                      <p>Revisjonsfrist</p>
                    </div>
                    <div className="body-large text-foreground w-full">
                      <p>{data.revisjonsfrist}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Produksjon */}
              <div className="content-stretch flex flex-col items-start min-h-[72px] relative shrink-0 w-full">
                <div className="content-stretch flex gap-[16px] items-start py-[4px] relative shrink-0 w-full">
                  <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px overflow-clip relative">
                    <div className="label-small text-muted-foreground w-full">
                      <p>Produksjon</p>
                    </div>
                    <div className="body-large text-foreground w-full">
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
            <div className="title-medium text-foreground mb-1">
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
                    <div className="label-small text-muted-foreground w-full">
                      <p>Kommune</p>
                    </div>
                    <div className="body-large text-foreground w-full">
                      <p>{data.kommune}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Adresse */}
              <div className="content-stretch flex flex-col items-start min-h-[72px] relative shrink-0 w-full">
                <div className="content-stretch flex gap-[16px] items-start py-[4px] relative shrink-0 w-full">
                  <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px overflow-clip relative">
                    <div className="label-small text-muted-foreground w-full">
                      <p>Adresse</p>
                    </div>
                    <div className="body-large text-foreground w-full">
                      {data.address.split(', ').map((line, idx) => (
                        <p key={idx} className={idx === 0 ? 'mb-0' : ''}>{line}</p>
                      ))}
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
        </div>
      </div>
      
      {/* Mobile layout - Action buttons first, then Vis mer at bottom */}
      <div className="md:hidden w-full flex flex-col">
        {/* Åpne revisjon button - comes FIRST on mobile */}
        <div className="w-full px-[24px] pt-4">
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