import { useState, useEffect } from 'react';
import { ChevronDown, Search } from 'lucide-react';
import svgPathsDeviation from '../imports/svg-rj5c6b7gl3';
import { getQuestionById } from '../data/questions';
import { KravVeilederSection } from './KravVeilederSection';
import { BottomSheet } from './ui/bottom-sheet';

type SeverityType = 'stort-avvik' | 'avvik' | 'lite-avvik';
type ConfirmationMethod = 'dokumentasjon' | 'digitalt-besok' | 'fysisk-besok';

interface ExternalRevisionDeviation {
  id: string;
  questionNumber: string;
  questionText: string;
  severity: SeverityType;
  responsible?: string;
  deadline?: string;
  confirmationMethod?: ConfirmationMethod;
  comment?: string;
  reportedDeviation?: string;
  deficiency?: string;
  evidence?: string;
  requirement?: string;
  requirementNumber?: string;
  hasImage?: boolean;
}

interface ExternalRevisionAvvikViewProps {
  deviations: ExternalRevisionDeviation[];
}

export function ExternalRevisionAvvikView({ deviations }: ExternalRevisionAvvikViewProps) {
  const [selectedQuestionId, setSelectedQuestionId] = useState<string | null>(
    deviations.length > 0 ? deviations[0].id : null
  );
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);

  // State for resizable detail panel
  const [detailPanelWidth, setDetailPanelWidth] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth * 0.5; // Default to 50% of screen width
    }
    return 600;
  });
  const [isResizingDetail, setIsResizingDetail] = useState(false);

  const selectedDeviation = deviations.find(d => d.id === selectedQuestionId);

  const handleDeviationSelect = (id: string) => {
    setSelectedQuestionId(id);
    // Open bottom sheet on mobile/tablet
    setIsBottomSheetOpen(true);
  };

  const handleCloseBottomSheet = () => {
    setIsBottomSheetOpen(false);
  };

  // Handle mouse move and mouse up for resizing detail panel
  useEffect(() => {
    if (!isResizingDetail) return;

    const handleMouseMove = (e: MouseEvent) => {
      const newWidth = window.innerWidth - e.clientX;
      
      // Constrain width between 30% and 70% of screen width
      const minWidth = window.innerWidth * 0.30; // 30%
      const maxWidth = window.innerWidth * 0.70; // 70%
      
      const constrainedWidth = Math.max(minWidth, Math.min(maxWidth, newWidth));
      setDetailPanelWidth(constrainedWidth);
    };

    const handleMouseUp = () => {
      setIsResizingDetail(false);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isResizingDetail]);

  const getSeverityChip = (severity: SeverityType) => {
    switch (severity) {
      case 'stort-avvik':
        return (
          <div className="inline-flex items-center px-3 py-1.5 rounded-lg bg-[#ffdad6] text-[#410002] cursor-default whitespace-nowrap">
            <span className="label-medium">
              Stort avvik
            </span>
          </div>
        );
      case 'avvik':
        return (
          <div className="inline-flex items-center px-3 py-1.5 rounded-lg bg-[#fdd19f] text-[#3d2100] cursor-default whitespace-nowrap">
            <span className="label-medium">
              Avvik
            </span>
          </div>
        );
      case 'lite-avvik':
        return (
          <div className="inline-flex items-center px-3 py-1.5 rounded-lg bg-[#fdeeb1] text-[#3d2c00] cursor-default whitespace-nowrap">
            <span className="label-medium">
              Lite avvik
            </span>
          </div>
        );
    }
  };

  const getSeverityBadge = (severity: SeverityType) => {
    switch (severity) {
      case 'stort-avvik':
        return (
          <div className="flex items-center gap-4 px-4 py-2 rounded-[var(--radius-md)] bg-[#ffdad6] text-[#410002] min-h-[56px]">
            <div className="shrink-0 w-6 h-6 flex items-center justify-center">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24">
                <path d={svgPathsDeviation.p04b1b000} fill="currentColor" transform="scale(1.6) translate(0, 0)" />
              </svg>
            </div>
            <div className="flex-1 flex flex-col justify-center">
              <p className="label-medium m-0">Beregnet alvorlighetsgrad</p>
              <p className="body-large m-0">Stort avvik</p>
            </div>
          </div>
        );
      case 'avvik':
        return (
          <div className="flex items-center gap-4 px-4 py-2 rounded-[var(--radius-md)] bg-[#fdd19f] text-[#3d2100] min-h-[56px]">
            <div className="shrink-0 w-6 h-6 flex items-center justify-center">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24">
                <path d={svgPathsDeviation.p04b1b000} fill="currentColor" transform="scale(1.6) translate(0, 0)" />
              </svg>
            </div>
            <div className="flex-1 flex flex-col justify-center">
              <p className="label-medium m-0">Beregnet alvorlighetsgrad</p>
              <p className="body-large m-0">Avvik</p>
            </div>
          </div>
        );
      case 'lite-avvik':
        return (
          <div className="flex items-center gap-4 px-4 py-2 rounded-[var(--radius-md)] bg-[#fdeeb1] text-[#3d2c00] min-h-[56px]">
            <div className="shrink-0 w-6 h-6 flex items-center justify-center">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24">
                <path d={svgPathsDeviation.p04b1b000} fill="currentColor" transform="scale(1.6) translate(0, 0)" />
              </svg>
            </div>
            <div className="flex-1 flex flex-col justify-center">
              <p className="label-medium m-0">Beregnet alvorlighetsgrad</p>
              <p className="body-large m-0">Lite avvik</p>
            </div>
          </div>
        );
    }
  };

  // Detail content component (reused in both desktop panel and mobile bottom sheet)
  const DetailContent = ({ deviation }: { deviation: ExternalRevisionDeviation }) => {
    // Get the full question data from questionsData using questionNumber
    const questionInfo = getQuestionById(deviation.questionNumber);
    
    return (
      <>
        {/* Question Header */}
        <div className="px-6 py-4 border-b border-[var(--border)]">
          <div className="flex items-start justify-between gap-4 mb-3">
            <h3 className="body-large text-foreground flex-1">
              {deviation.questionText}
            </h3>
            <span className="label-large text-muted-foreground shrink-0">
              {deviation.questionNumber}
            </span>
          </div>
          
          {/* Krav & Veileder Section */}
          {questionInfo && (
            <div className="mb-3">
              <KravVeilederSection question={questionInfo} />
            </div>
          )}
          
          {/* Severity Badge */}
          {getSeverityBadge(deviation.severity)}
        </div>

        {/* Lukking av avvik Section */}
        <div className="px-6 py-4 border-b border-[var(--border)] bg-[#f9faf6]">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-6 h-6 rounded-full bg-primary shrink-0">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 18 14">
                <path d="M5.59 10.58L1.42 6.41L0 7.82L5.59 13.41L17.59 1.41L16.18 0L5.59 10.58Z" fill="white"/>
              </svg>
            </div>
            <div className="flex-1">
              <p className="label-medium text-muted-foreground mb-0.5">1. mars 2025</p>
              <p className="body-medium text-foreground m-0">Lukking av avvik bekreftet.</p>
            </div>
          </div>
        </div>

        {/* Ansvarlig Section */}
        <div className="px-6 py-4 border-b border-[var(--border)]">
          <span className="body-medium text-foreground block mb-2">Ansvarlig</span>
          {deviation.responsible && (
            <p className="body-medium text-foreground m-0">{deviation.responsible}</p>
          )}
        </div>

        {/* Tidsfrist Section */}
        <div className="px-6 py-4 border-b border-[var(--border)]">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded bg-muted">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zM9 14H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2zm-8 4H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2z" />
              </svg>
            </div>
            <div className="flex-1">
              <p className="label-medium text-muted-foreground m-0">Tidsfrist</p>
              <p className="body-medium text-foreground m-0">{deviation.deadline || 'Ikke satt'}</p>
            </div>
          </div>
        </div>

        {/* Bekreftelse av tiltak Section */}
        <div className="px-6 py-4 border-b border-[var(--border)]">
          <span className="body-medium text-foreground mb-3 block">Bekreftelse av tiltak</span>
          
          <div className="space-y-2 opacity-60 pointer-events-none">
            <div className={`flex items-center gap-3 px-3 py-2 rounded-[var(--radius)] ${
              deviation.confirmationMethod === 'dokumentasjon' ? 'bg-muted' : ''
            }`}>
              <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                deviation.confirmationMethod === 'dokumentasjon'
                  ? 'border-primary bg-primary'
                  : 'border-muted-foreground'
              }`}>
                {deviation.confirmationMethod === 'dokumentasjon' && (
                  <div className="w-2.5 h-2.5 rounded-full bg-primary-foreground" />
                )}
              </div>
              <span className="body-medium text-foreground">Dokumentasjon</span>
            </div>
            
            <div className={`flex items-center gap-3 px-3 py-2 rounded-[var(--radius)] ${
              deviation.confirmationMethod === 'digitalt-besok' ? 'bg-muted' : ''
            }`}>
              <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                deviation.confirmationMethod === 'digitalt-besok'
                  ? 'border-primary bg-primary'
                  : 'border-muted-foreground'
              }`}>
                {deviation.confirmationMethod === 'digitalt-besok' && (
                  <div className="w-2.5 h-2.5 rounded-full bg-primary-foreground" />
                )}
              </div>
              <span className="body-medium text-foreground">Digitalt besøk</span>
            </div>
            
            <div className={`flex items-center gap-3 px-3 py-2 rounded-[var(--radius)] ${
              deviation.confirmationMethod === 'fysisk-besok' ? 'bg-muted' : ''
            }`}>
              <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                deviation.confirmationMethod === 'fysisk-besok'
                  ? 'border-primary bg-primary'
                  : 'border-muted-foreground'
              }`}>
                {deviation.confirmationMethod === 'fysisk-besok' && (
                  <div className="w-2.5 h-2.5 rounded-full bg-primary-foreground" />
                )}
              </div>
              <span className="body-medium text-foreground">Fysisk besøk</span>
            </div>
          </div>
        </div>

        {/* Rapportert avvik Section */}
        {deviation.reportedDeviation && (
          <div className="px-6 py-4 border-b border-[var(--border)]">
            <p className="label-medium text-muted-foreground mb-2">Rapportert avvik</p>
            <p className="body-medium text-foreground m-0">{deviation.reportedDeviation}</p>
            <p className="body-medium text-muted-foreground italic mt-1">Kan ikke endres nå.</p>
          </div>
        )}

        {/* Mangel Section */}
        {deviation.deficiency && (
          <div className="px-6 py-4 border-b border-[var(--border)]">
            <p className="label-medium text-muted-foreground mb-2">Mangel</p>
            <p className="body-medium text-foreground m-0">{deviation.deficiency}</p>
          </div>
        )}

        {/* Bevis Section */}
        {deviation.evidence && (
          <div className="px-6 py-4 border-b border-[var(--border)]">
            <p className="label-medium text-muted-foreground mb-2">Bevis</p>
            <p className="body-medium text-foreground m-0">{deviation.evidence}</p>
          </div>
        )}

        {/* Krav Section */}
        {deviation.requirement && (
          <div className="px-6 py-4">
            <p className="label-medium text-muted-foreground mb-2">Krav</p>
            <p className="body-medium text-foreground m-0">{deviation.requirement}</p>
          </div>
        )}
      </>
    );
  };

  return (
    <div className="flex h-full w-full overflow-hidden">
      {/* MOBILE/TABLET: Table - Always visible, full width */}
      <div className="min-[1400px]:hidden w-full h-full bg-background flex flex-col overflow-hidden">
        <div className="flex-1 overflow-auto relative bg-background">
          <table className="w-full">
            <thead className="bg-surface-container-low sticky top-0 z-10">
              <tr className="border-b border-[var(--border)]">
                <th className="w-auto px-6 py-2 text-left bg-surface-container-low">
                  <div className="flex items-center gap-2 whitespace-nowrap">
                    <ChevronDown className="w-6 h-6 text-foreground" />
                    <span className="label-medium text-foreground">Tidligere avvik</span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {deviations.map((deviation) => (
                <tr
                  key={deviation.id}
                  onClick={() => handleDeviationSelect(deviation.id)}
                  className="cursor-pointer border-b border-[var(--border)] transition-colors hover:bg-muted"
                >
                  <td className="px-6 py-4 w-auto">
                    {/* Mobile: Condensed two-line format */}
                    <div className="flex flex-col gap-2">
                      {/* Line 1: Severity chip with gap-1 */}
                      <div className="flex flex-row items-center gap-1 flex-wrap">
                        {getSeverityChip(deviation.severity)}
                        <span className="label-small text-muted-foreground">
                          Krav {deviation.requirementNumber}
                        </span>
                      </div>
                      
                      {/* Line 2: Question text */}
                      <span className="body-medium text-foreground">
                        {deviation.questionNumber} {deviation.questionText}
                      </span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* DESKTOP: Table - Always visible */}
      <div className="max-[1400px]:hidden flex-1 overflow-auto border-r border-[var(--border)] relative bg-background">
        <table className="w-full">
          <thead className="bg-surface-container-low sticky top-0 z-10">
            <tr className="border-b border-[var(--border)]">
              <th className="w-auto px-10 py-2 text-left bg-surface-container-low">
                <div className="flex items-center gap-2 whitespace-nowrap">
                  <ChevronDown className="w-6 h-6 text-foreground" />
                  <span className="label-medium text-foreground">Tidligere avvik</span>
                </div>
              </th>
              <th className="px-4 py-2 text-left bg-surface-container-low">
                <span className="label-medium text-foreground">Sjekklistepunkt</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {deviations.map((deviation) => (
              <tr
                key={deviation.id}
                onClick={() => setSelectedQuestionId(deviation.id)}
                className={`cursor-pointer border-b border-[var(--border)] transition-colors ${
                  selectedQuestionId === deviation.id
                    ? 'bg-accent'
                    : 'hover:bg-muted'
                }`}
              >
                <td className="px-10 py-4 w-auto">
                  {getSeverityChip(deviation.severity)}
                </td>
                <td className="px-4 py-4">
                  <span className={`body-medium ${
                    selectedQuestionId === deviation.id
                      ? 'text-accent-foreground'
                      : 'text-foreground'
                  }`}>
                    {deviation.questionNumber} {deviation.questionText}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Vertical Divider - Desktop only */}
      <div className="w-px h-full bg-[var(--border)] max-[1400px]:hidden" />

      {/* DESKTOP: Detail Panel - Shows selected deviation with resizable width */}
      {selectedDeviation && (
        <div 
          className="max-[1400px]:hidden h-full bg-background overflow-hidden flex flex-row relative"
          style={{ width: `${detailPanelWidth}px` }}
        >
          {/* Resize Handle - Left Edge */}
          <div
            onMouseDown={(e) => {
              e.preventDefault();
              setIsResizingDetail(true);
            }}
            className={`absolute left-0 top-0 bottom-0 w-1 cursor-col-resize hover:bg-primary transition-colors z-10 ${
              isResizingDetail ? 'bg-primary' : 'bg-transparent'
            }`}
            style={{
              touchAction: 'none',
            }}
          />

          {/* Vertical Divider */}
          <div className="w-px h-full bg-border shrink-0" />

          {/* Detail Content */}
          <div className="flex-1 overflow-hidden">
            <div className="overflow-auto h-full">
              <DetailContent deviation={selectedDeviation} />
            </div>
          </div>
        </div>
      )}

      {/* MOBILE/TABLET: Bottom Sheet */}
      {selectedDeviation && (
        <BottomSheet
          isOpen={isBottomSheetOpen}
          onClose={handleCloseBottomSheet}
          title="Avviksdetaljer"
          maxHeight={90}
        >
          <DetailContent deviation={selectedDeviation} />
        </BottomSheet>
      )}
    </div>
  );
}