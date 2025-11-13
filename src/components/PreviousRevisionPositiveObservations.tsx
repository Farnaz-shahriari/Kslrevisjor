import { useState } from 'react';
import { Search, Lightbulb, SmilePlus, Upload, ChevronDown, Volume2, HelpCircle } from 'lucide-react';

interface PositiveObservation {
  id: string;
  questionNumber: string;
  questionText: string;
  positiveText?: string;
  improvementText?: string;
  date?: string;
  revisionType?: string;
  type: 'positive' | 'improvement'; // Which list this came from
}

interface PreviousRevisionPositiveObservationsProps {
  positiveObservations: PositiveObservation[];
}

export function PreviousRevisionPositiveObservations({ positiveObservations }: PreviousRevisionPositiveObservationsProps) {
  const [selectedId, setSelectedId] = useState<string | null>(positiveObservations[0]?.id || null);
  const [activeTab, setActiveTab] = useState<'observasjoner' | 'egenvurderinger' | 'notat'>('observasjoner');

  const selectedPoint = positiveObservations.find(point => point.id === selectedId);

  return (
    <div className="flex h-full">
      {/* Table */}
      <div className="flex-1 overflow-auto border-r border-[var(--border)] relative bg-background">
        <table className="w-full">
          <thead className="bg-background sticky top-0 z-10">
            <tr className="border-b border-[var(--border)]">
              <th className="px-4 py-2 text-left">
                <div className="flex items-center gap-2">
                  <Search className="w-6 h-6 text-foreground" />
                  <span className="label-medium text-foreground">Sjekklistepunkt</span>
                </div>
              </th>
              <th className="px-4 py-2 text-left">
                <div className="flex items-center gap-2">
                  <span className="label-medium text-foreground">Positiv observasjon</span>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {positiveObservations.map((point) => {
              const displayText = point.type === 'positive' ? point.positiveText : point.improvementText;
              return (
                <tr
                  key={point.id}
                  onClick={() => setSelectedId(point.id)}
                  className={`cursor-pointer border-b border-[var(--border)] transition-colors ${
                    selectedId === point.id
                      ? 'bg-accent'
                      : 'hover:bg-muted'
                  }`}
                >
                  <td className="px-4 py-4">
                    <span className={`body-medium ${
                      selectedId === point.id
                        ? 'text-[#174295]'
                        : 'text-foreground'
                    }`}>
                      {point.questionNumber} - {point.questionText}
                    </span>
                  </td>
                  <td className="px-4 py-4">
                    <span className={`body-medium ${
                      selectedId === point.id
                        ? 'text-[#174295]'
                        : 'text-foreground'
                    }`}>
                      {displayText || ''}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Detail Panel */}
      {selectedPoint && (
        <div className="w-[400px] h-full flex flex-col bg-background">
          {/* Scrollable Content */}
          <div className="flex-1 overflow-y-auto">
            <div className="box-border content-stretch flex flex-col gap-[8px] items-start px-[16px] py-[16px] relative w-full">
              {/* Question Number */}
              <div className="flex gap-[8px] items-center w-full">
                <button className="flex items-center gap-[8px]">
                  <div className="relative shrink-0 size-[24px]">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="10" fill="#E3E3D9"/>
                      <circle cx="12" cy="12" r="8" fill="#C4C8B7"/>
                    </svg>
                  </div>
                  <div className="flex flex-col font-['Quatro:Regular',sans-serif] justify-center leading-[0] not-italic shrink-0 text-[#1a1c16] text-[22px] text-nowrap">
                    <p className="leading-[28px] m-0">{selectedPoint.questionNumber}</p>
                  </div>
                </button>
                <div className="flex-1"></div>
                <div className="flex gap-2">
                  <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-muted">
                    <Volume2 className="w-6 h-6 text-foreground" />
                  </button>
                  <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-muted">
                    <HelpCircle className="w-6 h-6 text-foreground" />
                  </button>
                </div>
              </div>
              
              {/* Question Text */}
              <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] tracking-[0.15px] w-full">
                <p className="leading-[24px] m-0">{selectedPoint.questionText}</p>
              </div>

              {/* Krav og Veileder Box */}
              <div className="bg-[#fafaf0] box-border content-stretch flex flex-col gap-[8px] items-center px-0 py-[8px] relative rounded-[12px] shrink-0 w-full">
                <div aria-hidden="true" className="absolute border border-[#c4c8b7] border-solid inset-0 pointer-events-none rounded-[12px]" />
                
                {/* Krav Section */}
                <div className="relative shrink-0 w-full">
                  <div className="flex flex-col justify-center size-full">
                    <div className="box-border content-stretch flex flex-col gap-[8px] items-start justify-center px-[24px] py-[8px] relative w-full">
                      <button className="content-stretch flex gap-[16px] h-[40px] items-center justify-center relative shrink-0 w-full">
                        <div className="content-stretch flex items-center justify-center relative shrink-0">
                          <ChevronDown className="w-6 h-6 text-foreground" />
                        </div>
                        <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0">
                          <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] tracking-[0.5px] w-full">
                            <p className="leading-[24px] m-0">Krav</p>
                          </div>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Answer Alternatives (Read-only with Ja selected) */}
              <div className="content-stretch flex flex-col items-start overflow-x-clip overflow-y-auto relative shrink-0 w-full">
                <div className="box-border content-stretch cursor-not-allowed flex flex-col items-start px-0 py-[16px] relative shrink-0 w-full">
                  {/* Ja Option */}
                  <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full opacity-50">
                    <div className="flex flex-row items-center size-full">
                      <div className="box-border content-stretch flex gap-[16px] items-center px-[16px] py-0 relative size-full">
                        <div className="content-stretch flex items-center justify-center relative shrink-0">
                          <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0">
                            <div className="box-border content-stretch flex items-center justify-center p-[8px] relative shrink-0">
                              <div className="relative shrink-0 size-[24px]">
                                <svg className="block size-full" fill="none" viewBox="0 0 20 20">
                                  <path d="M10 15C11.3833 15 12.5625 14.5125 13.5375 13.5375C14.5125 12.5625 15 11.3833 15 10C15 8.61667 14.5125 7.4375 13.5375 6.4625C12.5625 5.4875 11.3833 5 10 5C8.61667 5 7.4375 5.4875 6.4625 6.4625C5.4875 7.4375 5 8.61667 5 10C5 11.3833 5.4875 12.5625 6.4625 13.5375C7.4375 14.5125 8.61667 15 10 15ZM10 20C8.61667 20 7.31667 19.7375 6.1 19.2125C4.88333 18.6875 3.825 17.975 2.925 17.075C2.025 16.175 1.3125 15.1167 0.7875 13.9C0.2625 12.6833 0 11.3833 0 10C0 8.61667 0.2625 7.31667 0.7875 6.1C1.3125 4.88333 2.025 3.825 2.925 2.925C3.825 2.025 4.88333 1.3125 6.1 0.7875C7.31667 0.2625 8.61667 0 10 0C11.3833 0 12.6833 0.2625 13.9 0.7875C15.1167 1.3125 16.175 2.025 17.075 2.925C17.975 3.825 18.6875 4.88333 19.2125 6.1C19.7375 7.31667 20 8.61667 20 10C20 11.3833 19.7375 12.6833 19.2125 13.9C18.6875 15.1167 17.975 16.175 17.075 17.075C16.175 17.975 15.1167 18.6875 13.9 19.2125C12.6833 19.7375 11.3833 20 10 20ZM10 18C12.2333 18 14.125 17.225 15.675 15.675C17.225 14.125 18 12.2333 18 10C18 7.76667 17.225 5.875 15.675 4.325C14.125 2.775 12.2333 2 10 2C7.76667 2 5.875 2.775 4.325 4.325C2.775 5.875 2 7.76667 2 10C2 12.2333 2.775 14.125 4.325 15.675C5.875 17.225 7.76667 18 10 18Z" fill="#1A1C16"/>
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0">
                          <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] tracking-[0.5px] w-full">
                            <p className="leading-[24px] m-0">Ja</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Nei Option */}
                  <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full opacity-30">
                    <div className="flex flex-row items-center size-full">
                      <div className="box-border content-stretch flex gap-[16px] items-center px-[16px] py-0 relative size-full">
                        <div className="content-stretch flex items-center justify-center relative shrink-0">
                          <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0">
                            <div className="box-border content-stretch flex items-center justify-center p-[8px] relative shrink-0">
                              <div className="relative shrink-0 size-[24px]">
                                <svg className="block size-full" fill="none" viewBox="0 0 20 20">
                                  <path d="M10 20C8.61667 20 7.31667 19.7375 6.1 19.2125C4.88333 18.6875 3.825 17.975 2.925 17.075C2.025 16.175 1.3125 15.1167 0.7875 13.9C0.2625 12.6833 0 11.3833 0 10C0 8.61667 0.2625 7.31667 0.7875 6.1C1.3125 4.88333 2.025 3.825 2.925 2.925C3.825 2.025 4.88333 1.3125 6.1 0.7875C7.31667 0.2625 8.61667 0 10 0C11.3833 0 12.6833 0.2625 13.9 0.7875C15.1167 1.3125 16.175 2.025 17.075 2.925C17.975 3.825 18.6875 4.88333 19.2125 6.1C19.7375 7.31667 20 8.61667 20 10C20 11.3833 19.7375 12.6833 19.2125 13.9C18.6875 15.1167 17.975 16.175 17.075 17.075C16.175 17.975 15.1167 18.6875 13.9 19.2125C12.6833 19.7375 11.3833 20 10 20ZM10 18C12.2333 18 14.125 17.225 15.675 15.675C17.225 14.125 18 12.2333 18 10C18 7.76667 17.225 5.875 15.675 4.325C14.125 2.775 12.2333 2 10 2C7.76667 2 5.875 2.775 4.325 4.325C2.775 5.875 2 7.76667 2 10C2 12.2333 2.775 14.125 4.325 15.675C5.875 17.225 7.76667 18 10 18Z" fill="#1A1C16"/>
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0">
                          <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] tracking-[0.5px] w-full">
                            <p className="leading-[24px] m-0">Nei</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Ikke relevant Option */}
                  <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full opacity-30">
                    <div className="flex flex-row items-center size-full">
                      <div className="box-border content-stretch flex gap-[16px] items-center px-[16px] py-0 relative size-full">
                        <div className="content-stretch flex items-center justify-center relative shrink-0">
                          <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0">
                            <div className="box-border content-stretch flex items-center justify-center p-[8px] relative shrink-0">
                              <div className="relative shrink-0 size-[24px]">
                                <svg className="block size-full" fill="none" viewBox="0 0 20 20">
                                  <path d="M10 20C8.61667 20 7.31667 19.7375 6.1 19.2125C4.88333 18.6875 3.825 17.975 2.925 17.075C2.025 16.175 1.3125 15.1167 0.7875 13.9C0.2625 12.6833 0 11.3833 0 10C0 8.61667 0.2625 7.31667 0.7875 6.1C1.3125 4.88333 2.025 3.825 2.925 2.925C3.825 2.025 4.88333 1.3125 6.1 0.7875C7.31667 0.2625 8.61667 0 10 0C11.3833 0 12.6833 0.2625 13.9 0.7875C15.1167 1.3125 16.175 2.025 17.075 2.925C17.975 3.825 18.6875 4.88333 19.2125 6.1C19.7375 7.31667 20 8.61667 20 10C20 11.3833 19.7375 12.6833 19.2125 13.9C18.6875 15.1167 17.975 16.175 17.075 17.075C16.175 17.975 15.1167 18.6875 13.9 19.2125C12.6833 19.7375 11.3833 20 10 20ZM10 18C12.2333 18 14.125 17.225 15.675 15.675C17.225 14.125 18 12.2333 18 10C18 7.76667 17.225 5.875 15.675 4.325C14.125 2.775 12.2333 2 10 2C7.76667 2 5.875 2.775 4.325 4.325C2.775 5.875 2 7.76667 2 10C2 12.2333 2.775 14.125 4.325 15.675C5.875 17.225 7.76667 18 10 18Z" fill="#1A1C16"/>
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0">
                          <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] tracking-[0.5px] w-full">
                            <p className="leading-[24px] m-0">Ikke relevant</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tabs */}
              <div className="content-stretch flex flex-col items-start shrink-0 w-full">
                <div className="content-stretch cursor-pointer flex items-start shrink-0 w-full relative">
                  <button
                    onClick={() => setActiveTab('observasjoner')}
                    className="content-stretch flex flex-col h-[48px] items-center justify-center shrink-0 px-[16px] py-[14px] relative"
                  >
                    <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] shrink-0 text-center text-nowrap tracking-[0.1px]" style={{
                      fontSize: '14px',
                      color: activeTab === 'observasjoner' ? '#1a1c16' : '#44483b'
                    }}>
                      <p className="leading-[20px] whitespace-pre m-0">Observasjoner</p>
                    </div>
                    {activeTab === 'observasjoner' && (
                      <div className="absolute bottom-0 h-[2px] left-0 right-0 bg-[#4a671e] z-10" />
                    )}
                  </button>
                  <button
                    onClick={() => setActiveTab('egenvurderinger')}
                    className="content-stretch flex flex-col h-[48px] items-center justify-center shrink-0 px-[16px] py-[14px] relative"
                  >
                    <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] shrink-0 text-center text-nowrap tracking-[0.1px]" style={{
                      fontSize: '14px',
                      color: activeTab === 'egenvurderinger' ? '#1a1c16' : '#44483b'
                    }}>
                      <p className="leading-[20px] whitespace-pre m-0">Egenrevisjonssvar</p>
                    </div>
                    {activeTab === 'egenvurderinger' && (
                      <div className="absolute bottom-0 h-[2px] left-0 right-0 bg-[#4a671e] z-10" />
                    )}
                  </button>
                  <button
                    onClick={() => setActiveTab('notat')}
                    className="content-stretch flex flex-col h-[48px] items-center justify-center shrink-0 px-[16px] py-[14px] relative w-[90px]"
                  >
                    <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] shrink-0 text-center text-nowrap tracking-[0.1px]" style={{
                      fontSize: '14px',
                      color: activeTab === 'notat' ? '#1a1c16' : '#44483b'
                    }}>
                      <p className="leading-[20px] whitespace-pre m-0">Notat</p>
                    </div>
                    {activeTab === 'notat' && (
                      <div className="absolute bottom-0 h-[2px] left-0 right-0 bg-[#4a671e] z-10" />
                    )}
                  </button>
                </div>
                <div className="content-stretch flex flex-col items-start justify-center shrink-0 w-full">
                  <div className="h-0 shrink-0 w-full relative">
                    <div className="absolute bottom-0 left-0 right-0 top-[-2px]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 622 2">
                        <line stroke="#E3E3D9" strokeWidth="2" x2="622" y1="1" y2="1" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tab Content */}
              {activeTab === 'observasjoner' && (
                <div className="flex flex-col gap-[8px] w-full">
                  {/* Forbedringspunkter Card */}
                  <div className="max-w-[880px] relative rounded-[12px] shrink-0 w-full">
                    <div aria-hidden="true" className="absolute border border-[#c4c8b7] border-solid inset-0 pointer-events-none rounded-[12px]" />
                    <div className="max-w-inherit size-full">
                      <div className="box-border content-stretch flex flex-col gap-[8px] items-start max-w-inherit p-[16px] relative w-full">
                        {/* Header */}
                        <div className="content-stretch flex flex-col items-center justify-center min-h-[56px] relative shrink-0 w-full">
                          <div className="h-[56px] relative shrink-0 w-full">
                            <div className="flex flex-row items-center justify-center size-full">
                              <div className="box-border content-stretch flex gap-[16px] h-[56px] items-center justify-center px-[16px] py-0 relative w-full">
                                <div className="content-stretch flex items-center justify-center relative shrink-0">
                                  <div className="relative shrink-0 size-[24px]">
                                    <Lightbulb className="w-6 h-6 text-[#44483b]" />
                                  </div>
                                </div>
                                <div className="basis-0 content-stretch flex flex-col font-['Manrope:Regular',sans-serif] font-normal grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0">
                                  <div className="flex flex-col justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] tracking-[0.5px] w-full">
                                    <p className="leading-[24px] m-0">Forbedringspunkter</p>
                                  </div>
                                  <p className="[white-space-collapse:collapse] h-[20px] leading-[20px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#44483b] text-[14px] text-nowrap tracking-[0.25px] w-full m-0">Anbefalinger for videre forbedring</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Text Content - Only show if type is improvement */}
                        {selectedPoint.type === 'improvement' && selectedPoint.improvementText ? (
                          <div className="box-border content-stretch flex flex-col font-['Manrope:Regular',sans-serif] font-normal gap-[2px] items-start justify-center px-[16px] py-0 relative shrink-0 text-[#1a1c16] text-[16px] tracking-[0.5px] w-full">
                            <p className="leading-[24px] m-0">
                              {selectedPoint.improvementText}
                            </p>
                          </div>
                        ) : (
                          <div className="box-border content-stretch flex flex-col font-['Manrope:Regular',sans-serif] font-normal gap-[2px] items-start justify-center px-[16px] py-0 relative shrink-0 text-[#44483b] text-[16px] tracking-[0.5px] w-full">
                            <p className="leading-[24px] m-0 italic">
                              Ingen forbedringspunkter registrert
                            </p>
                          </div>
                        )}

                        {/* Upload Button */}
                        <div className="content-stretch flex h-[48px] items-center justify-center relative shrink-0">
                          <div className="relative rounded-[100px] shrink-0">
                            <div className="size-full">
                              <div className="box-border content-stretch flex gap-[8px] items-center justify-center px-[24px] py-[10px] relative size-full">
                                <div className="content-stretch flex items-center justify-center relative shrink-0">
                                  <Upload className="w-5 h-5 text-[#4a671e]" />
                                </div>
                                <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#4a671e] text-[14px] text-nowrap tracking-[0.1px]">
                                  <p className="leading-[20px] m-0 whitespace-pre">Last opp bilde</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Positive observasjoner Card */}
                  <div className="max-w-[880px] relative rounded-[12px] shrink-0 w-full">
                    <div aria-hidden="true" className="absolute border border-[#c4c8b7] border-solid inset-0 pointer-events-none rounded-[12px]" />
                    <div className="max-w-inherit size-full">
                      <div className="box-border content-stretch flex flex-col gap-[8px] items-start max-w-inherit p-[16px] relative w-full">
                        {/* Header */}
                        <div className="content-stretch flex flex-col items-center justify-center min-h-[56px] relative shrink-0 w-full">
                          <div className="h-[56px] relative shrink-0 w-full">
                            <div className="flex flex-row items-center justify-center size-full">
                              <div className="box-border content-stretch flex gap-[16px] h-[56px] items-center justify-center px-[16px] py-0 relative w-full">
                                <div className="content-stretch flex items-center justify-center relative shrink-0">
                                  <div className="relative shrink-0 size-[24px]">
                                    <SmilePlus className="w-6 h-6 text-[#44483b]" />
                                  </div>
                                </div>
                                <div className="basis-0 content-stretch flex flex-col font-['Manrope:Regular',sans-serif] font-normal grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0">
                                  <div className="flex flex-col justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] tracking-[0.5px] w-full">
                                    <p className="leading-[24px] m-0">Positive observasjoner</p>
                                  </div>
                                  <p className="[white-space-collapse:collapse] h-[20px] leading-[20px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#44483b] text-[14px] text-nowrap tracking-[0.25px] w-full m-0">Tydelige funn som viser god praksis</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Text Content - Only show if type is positive */}
                        {selectedPoint.type === 'positive' && selectedPoint.positiveText ? (
                          <div className="box-border content-stretch flex flex-col font-['Manrope:Regular',sans-serif] font-normal gap-[2px] items-start justify-center px-[16px] py-0 relative shrink-0 text-[#1a1c16] text-[16px] tracking-[0.5px] w-full">
                            <p className="leading-[24px] m-0">
                              {selectedPoint.positiveText}
                            </p>
                          </div>
                        ) : (
                          <div className="box-border content-stretch flex flex-col font-['Manrope:Regular',sans-serif] font-normal gap-[2px] items-start justify-center px-[16px] py-0 relative shrink-0 text-[#44483b] text-[16px] tracking-[0.5px] w-full">
                            <p className="leading-[24px] m-0 italic">
                              Ingen positive observasjoner registrert
                            </p>
                          </div>
                        )}

                        {/* Upload Button */}
                        <div className="content-stretch flex h-[48px] items-center justify-center relative shrink-0">
                          <div className="relative rounded-[100px] shrink-0">
                            <div className="size-full">
                              <div className="box-border content-stretch flex gap-[8px] items-center justify-center px-[24px] py-[10px] relative size-full">
                                <div className="content-stretch flex items-center justify-center relative shrink-0">
                                  <Upload className="w-5 h-5 text-[#4a671e]" />
                                </div>
                                <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#4a671e] text-[14px] text-nowrap tracking-[0.1px]">
                                  <p className="leading-[20px] m-0 whitespace-pre">Last opp bilde</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'egenvurderinger' && (
                <div className="flex flex-col gap-4 w-full px-2">
                  <p className="body-medium text-muted-foreground m-0">Ingen egenrevisjonssvar tilgjengelig</p>
                </div>
              )}

              {activeTab === 'notat' && (
                <div className="flex flex-col gap-4 w-full px-2">
                  <p className="body-medium text-muted-foreground m-0">Ingen notat registrert</p>
                </div>
              )}

              {/* Metadata */}
              {(selectedPoint.revisionType || selectedPoint.date) && (
                <div className="pt-4 border-t border-[var(--border)] w-full">
                  {selectedPoint.revisionType && (
                    <div className="mb-2">
                      <span className="label-small text-muted-foreground">Revisjonstype</span>
                      <p className="body-medium text-foreground m-0">{selectedPoint.revisionType}</p>
                    </div>
                  )}
                  {selectedPoint.date && (
                    <div>
                      <span className="label-small text-muted-foreground">Dato</span>
                      <p className="body-medium text-foreground m-0">{selectedPoint.date}</p>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
