import { useState } from 'react';
import { DeviationDetailPanel } from './DeviationDetailPanel';
import { PreviousAvvik } from '../data/previousAvvik';

type SeverityType = 'kritisk' | 'avvik' | 'lite';
type StatusType = 'lukket' | 'apent';

interface PreviousDeviation {
  id: string;
  severity: SeverityType;
  questionNumber: string;
  questionText: string;
  status: StatusType;
  source: 'ekstern' | 'egen'; // To differentiate between external and internal
  fullAvvikData?: PreviousAvvik; // Optional: Full avvik data for detailed view
}

interface PreviousAvvikTableProps {
  deviations: PreviousDeviation[];
}

export function PreviousAvvikTable({ deviations }: PreviousAvvikTableProps) {
  const [selectedDeviationId, setSelectedDeviationId] = useState<string | null>(
    deviations.length > 0 ? deviations[0].id : null
  );

  const selectedDeviation = deviations.find(d => d.id === selectedDeviationId);

  const handleDeviationClick = (id: string) => {
    setSelectedDeviationId(id);
  };

  const getSeverityBadge = (severity: SeverityType) => {
    const severityConfig = {
      kritisk: {
        bg: 'bg-s-avvik-container',
        text: 'text-on-s-avvik-container',
        label: 'Kritisk'
      },
      avvik: {
        bg: 'bg-avvik-container',
        text: 'text-on-avvik-container',
        label: 'Avvik'
      },
      lite: {
        bg: 'bg-l-avvik-container',
        text: 'text-on-l-avvik-container',
        label: 'Lite avvik'
      }
    };

    const config = severityConfig[severity];

    return (
      <div className={`inline-flex items-center px-3 py-1.5 rounded-lg ${config.bg} ${config.text}`}>
        <span className="label-medium">{config.label}</span>
      </div>
    );
  };

  // Get the type badge - either severity or "Egenrevisjon" for internal audits
  const getTypeBadge = (deviation: PreviousDeviation) => {
    if (deviation.source === 'egen') {
      // Filled chip with lock icon for egenrevisjon - matches AuditCard design
      return (
        <div className="bg-[var(--primary-container)] inline-flex h-[32px] items-center justify-center overflow-clip rounded-[8px]">
          <div className="flex gap-[8px] h-[32px] items-center justify-center pl-[8px] pr-[16px] py-[6px]">
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
      );
    } else {
      // Severity badge for external audits
      return getSeverityBadge(deviation.severity);
    }
  };

  const getStatusBadge = (status: StatusType) => {
    const statusConfig = {
      lukket: {
        bg: 'bg-[#d0f0c0]',
        text: 'text-[#1a5000]',
        label: 'Lukket'
      },
      apent: {
        bg: 'bg-muted',
        text: 'text-muted-foreground',
        label: 'Åpent'
      }
    };

    const config = statusConfig[status];

    return (
      <div className={`inline-flex items-center px-3 py-1.5 rounded-lg ${config.bg} ${config.text}`}>
        <span className="label-medium">{config.label}</span>
      </div>
    );
  };

  return (
    <div className="flex h-full w-full overflow-hidden">
      {/* Table */}
      <div className="flex-1 flex flex-col h-full overflow-hidden">
        {/* Table */}
        <div className="flex-1 overflow-y-auto">
          <table className="w-full">
            <thead className="bg-surface-container-low sticky top-0 z-10">
              <tr className="border-b border-[var(--border)]">
                <th className="px-6 py-3 text-left max-[768px]:hidden">
                  <span className="label-medium">Avvik type</span>
                </th>
                <th className="px-6 py-3 text-left">
                  <span className="label-medium max-[768px]:hidden">Sjekklistespørsmål</span>
                  <span className="label-medium min-[768px]:hidden">Avvik</span>
                </th>
                <th className="px-6 py-3 text-left max-[768px]:hidden">
                  <span className="label-medium">Status</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {deviations.length === 0 ? (
                <tr>
                  <td colSpan={3} className="px-6 py-20 text-center">
                    <p className="body-large text-muted-foreground">
                      Ingen tidligere avvik registrert
                    </p>
                  </td>
                </tr>
              ) : (
                deviations.map((deviation) => (
                  <tr
                    key={deviation.id}
                    onClick={() => handleDeviationClick(deviation.id)}
                    className={`border-b border-[var(--border)] hover:bg-muted cursor-pointer ${
                      selectedDeviationId === deviation.id ? 'bg-secondary-container' : ''
                    }`}
                  >
                    {/* Desktop: Type column (severity or egenrevisjon) */}
                    <td className="px-6 py-4 max-[768px]:hidden">
                      {getTypeBadge(deviation)}
                    </td>

                    {/* Responsive column - shows different content on mobile vs desktop */}
                    <td className="px-6 py-4">
                      {/* Desktop: Question only */}
                      <span className="body-medium max-[768px]:hidden">
                        {deviation.questionNumber} {deviation.questionText}
                      </span>

                      {/* Mobile: Condensed format */}
                      <div className="flex flex-col gap-2 min-[768px]:hidden">
                        <div className="flex flex-row items-center gap-1 flex-wrap">
                          {getTypeBadge(deviation)}
                          {getStatusBadge(deviation.status)}
                        </div>
                        <span className="body-medium">
                          {deviation.questionNumber} {deviation.questionText}
                        </span>
                      </div>
                    </td>

                    {/* Desktop: Status column */}
                    <td className="px-6 py-4 max-[768px]:hidden">
                      {getStatusBadge(deviation.status)}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Vertical Divider - Desktop only */}
      <div className="w-px h-full bg-[var(--border)] max-[1400px]:hidden" />

      {/* Detail Panel - Desktop only */}
      {selectedDeviation && (
        <div className="max-[1400px]:hidden w-[520px] h-full overflow-hidden">
          <DeviationDetailPanel
            deviation={selectedDeviation.fullAvvikData ? {
              // Use fullAvvikData if available (for previous external avvik with complete details)
              id: selectedDeviation.id,
              severity: selectedDeviation.severity,
              foretakName: selectedDeviation.fullAvvikData.foretakName,
              checklist: selectedDeviation.fullAvvikData.checklist,
              deadline: selectedDeviation.fullAvvikData.deadline,
              status: selectedDeviation.fullAvvikData.status,
              requiresAction: selectedDeviation.fullAvvikData.requiresAction,
              confirmationMethod: selectedDeviation.fullAvvikData.confirmationMethod,
              mangel: selectedDeviation.fullAvvikData.mangel,
              bevis: selectedDeviation.fullAvvikData.bevis,
              krav: selectedDeviation.fullAvvikData.krav,
              closedDate: undefined
            } : {
              // Fallback for other types of avvik
              id: selectedDeviation.id,
              severity: selectedDeviation.severity,
              foretakName: '',
              checklist: `${selectedDeviation.questionNumber} – ${selectedDeviation.questionText}`,
              deadline: new Date(),
              status: selectedDeviation.status === 'lukket' ? 'lukket' : 'tidspunkt-foreslatt',
              requiresAction: false,
              confirmationMethod: 'dokumentasjon',
              closedDate: selectedDeviation.status === 'lukket' ? new Date(2025, 2, 1) : undefined
            }}
          />
        </div>
      )}
    </div>
  );
}