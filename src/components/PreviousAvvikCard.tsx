import { formatNorwegianDate } from '../utils/dateFormat';

interface PreviousAvvikCardProps {
  severity: 'kritisk' | 'avvik' | 'lite';
  checklist: string;
  deadline: Date;
  status: string;
  onClick?: () => void;
}

function getSeverityLabel(severity: 'kritisk' | 'avvik' | 'lite'): string {
  const labels = {
    'kritisk': 'Kritisk avvik',
    'avvik': 'Avvik',
    'lite': 'Lite avvik'
  };
  return labels[severity] || 'Avvik';
}

function getSeverityColor(severity: 'kritisk' | 'avvik' | 'lite'): string {
  const colors = {
    'kritisk': 'bg-[#ffdad6]',
    'avvik': 'bg-[#fdd19f]',
    'lite': 'bg-[#fdeeb1]'
  };
  return colors[severity] || 'bg-[#fdd19f]';
}

export function PreviousAvvikCard({ severity, checklist, deadline, status, onClick }: PreviousAvvikCardProps) {
  return (
    <div
      onClick={onClick}
      className="flex flex-col gap-2 p-4 border border-[var(--border)] rounded-[var(--radius-lg)] bg-card hover:bg-muted transition-colors cursor-pointer"
    >
      {/* Severity Badge and Question Title */}
      <div className="flex items-start gap-2">
        <div className={`${getSeverityColor(severity)} px-3 py-1 rounded-[var(--radius-full)] shrink-0`}>
          <span className="label-small text-foreground">{getSeverityLabel(severity)}</span>
        </div>
        <span className="body-medium text-foreground flex-1">{checklist}</span>
      </div>

      {/* Deadline and Status */}
      <div className="flex items-center gap-4 text-muted-foreground">
        <div className="flex items-center gap-1">
          <span className="label-small">Frist:</span>
          <span className="body-small">{formatNorwegianDate(deadline)}</span>
        </div>
        <div className="flex items-center gap-1">
          <span className="label-small">Status:</span>
          <span className="body-small">{status}</span>
        </div>
      </div>
    </div>
  );
}
