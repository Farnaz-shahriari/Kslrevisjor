import { useState } from 'react';
import svgPathsRevisjonCard from "../imports/svg-es1yhnytnq";
import { ChevronUp, ChevronDown, ChevronRight, X } from "lucide-react";
import { Button } from './ui/button';

interface RevisjonData {
  ordning: string;
  revisjonsfrist: string;
  produksjon: string[];
  kommune: string;
  address: string;
  isPriority: boolean;
  isOppfolgingGyldigKSL?: boolean; // New field for the KSL chip
}

interface TildeltRevisjon {
  id: string;
  foretakName: string;
  visitDate: Date;
  visitTime: string;
  revisjonData: RevisjonData;
}

export function TildeltRevisjonCard({ revisjon }: { revisjon: TildeltRevisjon }) {
  const [isExpanded, setIsExpanded] = useState(false); // Default: collapsed
  const data = revisjon.revisjonData;
  const dateObj = revisjon.visitDate;
  const monthNames = ['januar', 'februar', 'mars', 'april', 'mai', 'juni', 'juli', 'august', 'september', 'oktober', 'november', 'desember'];
  const dateStr = `${dateObj.getDate()}. ${monthNames[dateObj.getMonth()]} ${dateObj.getFullYear()}`;

  return (
    <div className="bg-[#fafaf0] content-stretch flex flex-col gap-[16px] items-start pt-[8px] px-[24px] relative rounded-[12px] shrink-0 w-full max-w-[1040px]" data-name="Tildelt Revisjon Card">
      <div aria-hidden="true" className="absolute border border-[#c4c8b7] border-solid inset-0 pointer-events-none rounded-[12px]" />
      
      {/* Info chips - at the top */}
      <div className="content-stretch flex flex-wrap gap-[10px] items-start relative shrink-0 w-full" data-name="Info chips">
        {/* Priority chip */}
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
        
        {/* KSL chip */}
        {data.isOppfolgingGyldigKSL && (
          <div className="bg-[#fdeeb1] h-[32px] relative rounded-[8px] shrink-0">
            <div className="content-stretch flex h-full items-center justify-center overflow-clip relative rounded-[inherit]">
              <div className="content-stretch flex h-[32px] items-center justify-center px-[16px] py-[6px] relative shrink-0">
                <div className="label-medium text-[#3d2c00]">
                  <p>Oppfølging gyldig KSL</p>
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
          {/* Top info with chips and date */}
          <div className="content-stretch flex flex-col items-start px-0 py-[8px] relative shrink-0" data-name="top info">
            {/* Akseptfrist date */}
            <div className="title-medium text-foreground">
              <p>Akseptfrist: {dateStr}</p>
            </div>
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
          {/* Primary button - Aksepter */}
          <Button variant="secondary" className="w-full">
            Aksepter
          </Button>
          
          {/* Tertiary/Text button - Avvis */}
          <Button variant="tertiary" className="w-full">
            <X className="w-6 h-6" />
            Avvis
          </Button>
        </div>
      </div>
      
      {/* Mobile layout - Action buttons first, then Vis mer at bottom */}
      <div className="md:hidden w-full flex flex-col">
        {/* Action buttons - come FIRST on mobile */}
        <div className="w-full px-[24px] pt-4 flex flex-col gap-[10px]">
          {/* Secondary button - Aksepter */}
          <Button variant="secondary" className="w-full">
            Aksepter
          </Button>
          
          {/* Tertiary/Text button - Avvis */}
          <Button variant="tertiary" className="w-full">
            <X className="w-6 h-6" />
            Avvis
          </Button>
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