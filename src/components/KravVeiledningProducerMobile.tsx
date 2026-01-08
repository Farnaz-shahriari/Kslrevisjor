import { useState } from 'react';
import svgPaths from "../imports/svg-vw3ze69ti4";

interface KravVeiledningProducerMobileProps {
  veilederText?: string;
  kravLinks?: Array<{
    category: string;
    title: string;
    description?: string;
  }>;
}

export function KravVeiledningProducerMobile({
  veilederText,
  kravLinks = []
}: KravVeiledningProducerMobileProps) {
  const [isKravExpanded, setIsKravExpanded] = useState(false);
  const [isVeilederExpanded, setIsVeilederExpanded] = useState(false);

  // Example krav links - will be replaced with real data
  const exampleKravLinks = kravLinks.length > 0 ? kravLinks : [
    {
      category: 'Lovkrav',
      title: 'Matlovsforskriften',
      description: 'Artikkel 18 Sporbarhet'
    },
    {
      category: 'Lovkrav',
      title: 'Bokføringsloven',
      description: 'Artikkel 3 Bokføringspliktige'
    }
  ];

  return (
    <div 
      className="bg-[var(--surface-container-low)] rounded-[12px] flex flex-col w-full"
      style={{ 
        backgroundColor: 'var(--surface-container-low, #F4F4EA)',
        borderRadius: 'var(--radius-card, 12px)'
      }}
    >
      {/* Veileder Section */}
      {veilederText && (
        <div className="content-stretch flex flex-col items-start w-full">
          {/* Veileder Header with Expand Icon */}
          <div className="w-full">
            <div className="box-border flex items-start px-[24px] py-[8px] w-full">
              <button
                onClick={() => setIsVeilederExpanded(!isVeilederExpanded)}
                className="flex h-[56px] items-center w-full hover:bg-muted/20 transition-colors rounded-[var(--radius)]"
              >
                <div className="box-border flex gap-[16px] items-center px-0 py-[8px] w-full">
                  {/* Leading element - expand icon */}
                  <div className="flex items-center justify-center shrink-0">
                    <div className={`w-[24px] h-[24px] transition-transform ${!isVeilederExpanded ? 'rotate-180' : ''}`}>
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                        <path d={svgPaths.p2b8d2f00} fill="var(--foreground, #44483B)" />
                      </svg>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 flex items-center justify-start overflow-hidden">
                    <div 
                      className="body-large text-foreground"
                      style={{
                        fontFamily: 'var(--font-family-manrope)',
                        fontSize: '16px',
                        fontWeight: 400,
                        lineHeight: '24px',
                        letterSpacing: '0.5px'
                      }}
                    >
                      Veileder
                    </div>
                  </div>
                </div>
              </button>
            </div>
          </div>
          
          {/* Veileder Content - Always visible */}
          <div className="w-full">
            <div className="box-border flex flex-col gap-[8px] items-start px-[24px] py-[8px] w-full">
              <div 
                className={`body-large text-foreground w-full ${!isVeilederExpanded ? 'line-clamp-4' : ''}`}
                style={{
                  fontFamily: 'var(--font-family-manrope)',
                  fontSize: '16px',
                  fontWeight: 400,
                  lineHeight: '24px',
                  letterSpacing: '0.5px'
                }}
              >
                {veilederText}
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Krav Section */}
      <div className="flex flex-col items-start w-full">
        <div className="w-full">
          <div className="box-border flex items-start px-[24px] py-[8px] w-full">
            <button
              onClick={() => setIsKravExpanded(!isKravExpanded)}
              className="flex h-[56px] items-center w-full hover:bg-muted/20 transition-colors rounded-[var(--radius)]"
            >
              <div className="box-border flex gap-[16px] items-center px-0 py-[8px] w-full">
                {/* Leading element - expand icon */}
                <div className="flex items-center justify-center shrink-0">
                  <div className={`w-[24px] h-[24px] transition-transform ${!isKravExpanded ? 'rotate-180' : ''}`}>
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                      <path d={svgPaths.p2b8d2f00} fill="var(--foreground, #44483B)" />
                    </svg>
                  </div>
                </div>
                
                {/* Content */}
                <div className="flex-1 flex items-center justify-start overflow-hidden">
                  <div 
                    className="body-large text-foreground"
                    style={{
                      fontFamily: 'var(--font-family-manrope)',
                      fontSize: '16px',
                      fontWeight: 400,
                      lineHeight: '24px',
                      letterSpacing: '0.5px'
                    }}
                  >
                    Krav
                  </div>
                </div>
              </div>
            </button>
          </div>
        </div>
        
        {/* Krav Items - Expanded */}
        {isKravExpanded && exampleKravLinks.length > 0 && (
          <div className="flex flex-col items-start max-h-[688px] w-full">
            <div className="flex flex-col justify-center w-full">
              <div className="box-border flex flex-col gap-[8px] items-start px-[24px] py-[8px] w-full">
                {exampleKravLinks.map((req, index) => (
                  <div 
                    key={index} 
                    className="bg-background flex flex-col items-center min-h-[88px] rounded-[12px] w-full relative max-w-[480px]"
                  >
                    <div 
                      aria-hidden="true" 
                      className="absolute border border-solid inset-0 pointer-events-none rounded-[12px]" 
                      style={{ borderColor: 'var(--border, #C4C8B7)' }}
                    />
                    <div className="w-full">
                      <div className="box-border flex gap-[16px] items-start px-[16px] py-[12px] w-full">
                        {/* Content */}
                        <div className="flex-1 flex flex-col items-start overflow-hidden">
                          {/* Category */}
                          <div 
                            className="label-small text-muted-foreground w-full"
                            style={{
                              fontFamily: 'var(--font-family-manrope)',
                              fontSize: '12px',
                              fontWeight: 500,
                              lineHeight: '16px',
                              letterSpacing: '0.5px'
                            }}
                          >
                            {req.category}
                          </div>
                          
                          {/* Title */}
                          <div 
                            className="body-large text-foreground w-full"
                            style={{
                              fontFamily: 'var(--font-family-manrope)',
                              fontSize: '16px',
                              fontWeight: 400,
                              lineHeight: '24px',
                              letterSpacing: '0.5px'
                            }}
                          >
                            {req.title}
                          </div>
                          
                          {/* Description */}
                          {req.description && (
                            <div 
                              className="body-medium text-muted-foreground w-full"
                              style={{
                                fontFamily: 'var(--font-family-manrope)',
                                fontSize: '14px',
                                fontWeight: 400,
                                lineHeight: '20px',
                                letterSpacing: '0.25px'
                              }}
                            >
                              {req.description}
                            </div>
                          )}
                        </div>
                        
                        {/* Trailing element - open icon */}
                        <div className="flex gap-[10px] h-[64px] items-start shrink-0">
                          <div className="w-[24px] h-[24px]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                              <path d={svgPaths.p13453dc0} fill="var(--foreground, #1A1C16)" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}