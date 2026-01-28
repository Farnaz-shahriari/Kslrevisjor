import { useState } from 'react';
import { X } from 'lucide-react';
import { Button } from './ui/button';

interface RevisjonData {
  ordning: string;
  revisjonsfrist: string;
  produksjon: string[];
  kommune: string;
  address: string;
  isPriority: boolean;
  isOppfolgingGyldigKSL?: boolean;
}

interface TildeltRevisjon {
  id: string;
  foretakName: string;
  visitDate: Date;
  visitTime: string;
  revisjonData: RevisjonData;
}

interface MapRevisjonCardProps {
  revisjon: TildeltRevisjon;
  onClose: () => void;
  onAccept: (id: string) => void;
  onReject: (id: string) => void;
  isAccepted: boolean;
}

export function MapRevisjonCard({ 
  revisjon, 
  onClose, 
  onAccept, 
  onReject,
  isAccepted 
}: MapRevisjonCardProps) {
  const data = revisjon.revisjonData;
  const dateObj = revisjon.visitDate;
  const monthNames = ['januar', 'februar', 'mars', 'april', 'mai', 'juni', 'juli', 'august', 'september', 'oktober', 'november', 'desember'];
  const dateStr = `${dateObj.getDate()}. ${monthNames[dateObj.getMonth()]} ${dateObj.getFullYear()}`;

  return (
    <div className="bg-[#fafaf0] content-stretch flex flex-col gap-[16px] items-start pt-[8px] px-[24px] pb-[8px] relative rounded-[12px] shrink-0 w-[320px] shadow-lg">
      <div aria-hidden="true" className="absolute border border-[#c4c8b7] border-solid inset-0 pointer-events-none rounded-[12px]" />
      
      {/* Close button */}
      <div className="absolute top-2 right-2 z-10">
        <Button
          variant="ghost"
          size="icon-sm"
          onClick={onClose}
          className="bg-[#fafaf0] rounded-full"
        >
          <X className="w-5 h-5" />
        </Button>
      </div>

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
      
      {/* Audit information */}
      <div className="flex flex-col gap-4 items-start relative shrink-0 w-full" data-name="audit information">
        
        {/* Revisjon info - Column 1 */}
        <div className="content-stretch flex flex-col items-start w-full relative" data-name="Revisjon info">
          {/* Top info with chips and date */}
          <div className="content-stretch flex flex-col items-start px-0 py-[8px] relative shrink-0" data-name="top info">
            {/* Akseptfrist date */}
            <div className="title-medium text-foreground">
              <p>Akseptfrist: {dateStr}</p>
            </div>
          </div>
          
          {/* Always expanded content - Ordning, Revisjonsfrist, Produksjon */}
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
        </div>
        
        {/* Foretak info - Column 2 */}
        <div className="content-stretch flex flex-col items-start w-full relative" data-name="Foretak info">
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
          
          {/* Always expanded content - Kommune and Adresse */}
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
        </div>
      </div>
      
      {/* Action buttons */}
      {!isAccepted ? (
        <div className="w-full flex flex-col gap-[10px]">
          {/* Secondary button - Aksepter */}
          <Button 
            variant="secondary" 
            className="w-full"
            onClick={() => onAccept(revisjon.id)}
          >
            Aksepter
          </Button>
          
          {/* Tertiary/Text button - Avvis */}
          <Button 
            variant="tertiary" 
            className="w-full"
            onClick={() => onReject(revisjon.id)}
          >
            <X className="w-6 h-6" />
            Avvis
          </Button>
        </div>
      ) : (
        <div className="w-full flex items-center justify-center gap-2 text-primary py-4">
          <span className="label-medium">✓ Akseptert</span>
        </div>
      )}
    </div>
  );
}