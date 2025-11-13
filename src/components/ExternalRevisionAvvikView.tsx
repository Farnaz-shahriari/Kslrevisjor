import { useState, useEffect } from 'react';
import { ChevronDown, Search, Edit2, Upload, Plus } from 'lucide-react';
import svgPathsDeviation from '../imports/svg-rj5c6b7gl3';
import svgPathsUpload from '../imports/svg-927sr0kqkx';

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
  hasImage?: boolean;
}

interface ExternalRevisionAvvikViewProps {
  deviations: ExternalRevisionDeviation[];
}

export function ExternalRevisionAvvikView({ deviations }: ExternalRevisionAvvikViewProps) {
  const [selectedQuestionId, setSelectedQuestionId] = useState<string | null>(
    deviations.length > 0 ? deviations[0].id : null
  );
  const [panelWidth] = useState(520);

  const selectedDeviation = deviations.find(d => d.id === selectedQuestionId);

  const getSeverityChip = (severity: SeverityType) => {
    switch (severity) {
      case 'stort-avvik':
        return (
          <div className="inline-flex items-center px-3 py-1.5 rounded-lg bg-[#ffdad6] text-[#410002] cursor-default">
            <span className="label-medium">
              Stort avvik
            </span>
          </div>
        );
      case 'avvik':
        return (
          <div className="inline-flex items-center px-3 py-1.5 rounded-lg bg-[#fdd19f] text-[#3d2100] cursor-default">
            <span className="label-medium">
              Avvik
            </span>
          </div>
        );
      case 'lite-avvik':
        return (
          <div className="inline-flex items-center px-3 py-1.5 rounded-lg bg-[#fdeeb1] text-[#3d2c00] cursor-default">
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
              <p className="label-medium">Beregnet alvorlighetsgrad</p>
              <p className="body-large">Stort avvik</p>
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
              <p className="label-medium">Beregnet alvorlighetsgrad</p>
              <p className="body-large">Avvik</p>
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
              <p className="label-medium">Beregnet alvorlighetsgrad</p>
              <p className="body-large">Lite avvik</p>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="flex h-full w-full overflow-hidden">
      {/* Table */}
      <div className="flex-1 overflow-auto border-r border-[var(--border)] relative bg-background">
        <table className="w-full">
          <thead className="bg-background sticky top-0 z-10">
            <tr className="border-b border-[var(--border)]">
              <th className="w-[144px] px-10 py-2 text-left">
                <div className="flex items-center gap-2">
                  <ChevronDown className="w-6 h-6 text-foreground" />
                  <span className="label-medium text-foreground">Tidligere avvik</span>
                </div>
              </th>
              <th className="px-4 py-2 text-left">
                <div className="flex items-center gap-2">
                  <Search className="w-6 h-6 text-foreground" />
                  <span className="label-medium text-foreground">Sjekklistepunkt</span>
                </div>
              </th>
              <th className="px-4 py-2 text-left w-[140px]">
                <span className="label-medium text-foreground">Status</span>
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
                <td className="px-10 py-4">
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
                <td className="px-4 py-4">
                  <span className="body-medium text-foreground">Lukket</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Detail Panel */}
      {selectedDeviation && (
          <div 
            className="bg-background flex flex-col overflow-hidden relative"
            style={{ width: `${panelWidth}px` }}
          >
            <div className="overflow-auto flex-1">
              {/* Question Header */}
              <div className="px-6 py-4 border-b border-[var(--border)] sticky top-0 bg-background z-10">
                <h3 className="body-large text-foreground mb-3">
                  {selectedDeviation.questionNumber} {selectedDeviation.questionText}
                </h3>
                
                {/* Severity Badge */}
                {getSeverityBadge(selectedDeviation.severity)}
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
                    <p className="body-medium text-foreground">Lukking av avvik bekreftet.</p>
                  </div>
                </div>
              </div>

              {/* Ansvarlig Section */}
              <div className="px-6 py-4 border-b border-[var(--border)]">
                <span className="body-medium text-foreground block mb-2">Ansvarlig</span>
                {selectedDeviation.responsible && (
                  <p className="body-medium text-foreground">{selectedDeviation.responsible}</p>
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
                    <p className="label-medium text-muted-foreground">Tidsfrist</p>
                    <p className="body-medium text-foreground">{selectedDeviation.deadline || 'Ikke satt'}</p>
                  </div>
                </div>
              </div>

              {/* Bekreftelse av tiltak Section */}
              <div className="px-6 py-4 border-b border-[var(--border)]">
                <span className="body-medium text-foreground mb-3 block">Bekreftelse av tiltak</span>
                
                <div className="space-y-2 opacity-60 pointer-events-none">
                  <div className={`flex items-center gap-3 px-3 py-2 rounded-[var(--radius)] ${
                    selectedDeviation.confirmationMethod === 'dokumentasjon' ? 'bg-muted' : ''
                  }`}>
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                      selectedDeviation.confirmationMethod === 'dokumentasjon'
                        ? 'border-primary bg-primary'
                        : 'border-muted-foreground'
                    }`}>
                      {selectedDeviation.confirmationMethod === 'dokumentasjon' && (
                        <div className="w-2 h-2 rounded-full bg-primary-foreground" />
                      )}
                    </div>
                    <span className="body-medium text-foreground">Dokumentasjon</span>
                  </div>
                  
                  <div className={`flex items-center gap-3 px-3 py-2 rounded-[var(--radius)] ${
                    selectedDeviation.confirmationMethod === 'digitalt-besok' ? 'bg-muted' : ''
                  }`}>
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                      selectedDeviation.confirmationMethod === 'digitalt-besok'
                        ? 'border-primary bg-primary'
                        : 'border-muted-foreground'
                    }`}>
                      {selectedDeviation.confirmationMethod === 'digitalt-besok' && (
                        <div className="w-2 h-2 rounded-full bg-primary-foreground" />
                      )}
                    </div>
                    <span className="body-medium text-foreground">Digitalt besøk</span>
                  </div>
                  
                  <div className={`flex items-center gap-3 px-3 py-2 rounded-[var(--radius)] ${
                    selectedDeviation.confirmationMethod === 'fysisk-besok' ? 'bg-muted' : ''
                  }`}>
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                      selectedDeviation.confirmationMethod === 'fysisk-besok'
                        ? 'border-primary bg-primary'
                        : 'border-muted-foreground'
                    }`}>
                      {selectedDeviation.confirmationMethod === 'fysisk-besok' && (
                        <div className="w-2 h-2 rounded-full bg-primary-foreground" />
                      )}
                    </div>
                    <span className="body-medium text-foreground">Fysisk besøk</span>
                  </div>
                </div>
              </div>

              {/* Kommentar til foretaket Section */}
              {selectedDeviation.comment && (
                <div className="px-6 py-4 border-b border-[var(--border)]">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="p-1.5 rounded bg-muted">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
                      </svg>
                    </div>
                    <span className="body-medium text-foreground">Kommentar til foretaket</span>
                    <button className="ml-auto p-2 hover:bg-muted rounded">
                      <Plus className="w-5 h-5 text-foreground" />
                    </button>
                  </div>
                  {selectedDeviation.comment && (
                    <div className="p-3 rounded-[var(--radius)] bg-muted border border-[var(--border)] mt-2">
                      <p className="body-medium text-foreground">{selectedDeviation.comment}</p>
                    </div>
                  )}
                </div>
              )}

              {/* Rapportert avvik Section */}
              {selectedDeviation.reportedDeviation && (
                <div className="px-6 py-4 border-b border-[var(--border)]">
                  <p className="label-medium text-muted-foreground mb-2">Rapportert avvik</p>
                  <p className="body-medium text-foreground">{selectedDeviation.reportedDeviation}</p>
                  <p className="body-medium text-muted-foreground italic mt-1">Kan ikke endres nå.</p>
                </div>
              )}

              {/* Mangel Section */}
              {selectedDeviation.deficiency && (
                <div className="px-6 py-4 border-b border-[var(--border)]">
                  <p className="label-medium text-muted-foreground mb-2">Mangel</p>
                  <p className="body-medium text-foreground">{selectedDeviation.deficiency}</p>
                </div>
              )}

              {/* Bevis Section */}
              {selectedDeviation.evidence && (
                <div className="px-6 py-4 border-b border-[var(--border)]">
                  <p className="label-medium text-muted-foreground mb-2">Bevis</p>
                  <p className="body-medium text-foreground">{selectedDeviation.evidence}</p>
                </div>
              )}

              {/* Krav Section */}
              {selectedDeviation.requirement && (
                <div className="px-6 py-4">
                  <p className="label-medium text-muted-foreground mb-2">Krav</p>
                  <p className="body-medium text-foreground">{selectedDeviation.requirement}</p>
                </div>
              )}
            </div>
          </div>
        )}
    </div>
  );
}
