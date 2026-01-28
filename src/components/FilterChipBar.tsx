import { X } from 'lucide-react';
import { Button } from './ui/button';
import { SearchFilters } from './AdvancedSearchPanel';

interface FilterChipBarProps {
  filters: SearchFilters;
  onRemoveFilter: (type: 'severity' | 'status' | 'foretak', value: string) => void;
  onClearAll: () => void;
  resultCount: number;
}

export function FilterChipBar({ filters, onRemoveFilter, onClearAll, resultCount }: FilterChipBarProps) {
  // Calculate total number of active filters
  const totalFilters = 
    filters.severities.length + 
    filters.statuses.length + 
    filters.foretak.length;

  // Don't render if no filters are active
  if (totalFilters === 0) {
    return null;
  }

  // Map severity values to display labels
  const severityLabels: Record<string, string> = {
    'kritisk': 'Kritisk',
    'avvik': 'Avvik',
    'lite': 'Lite avvik'
  };

  // Map status values to display labels
  const statusLabels: Record<string, string> = {
    'tidspunkt-foreslatt': 'Tidspunkt foreslått',
    'onsker-fristforlengelse': 'Ønsker fristforlengelse',
    'dokument-levert': 'Dokument levert',
    'avventer-moteforslag': 'Avventer møteforslag',
    'avventer-dokumentasjon': 'Avventer dokumentasjon'
  };

  return (
    <div className="flex items-center gap-2 px-6 py-2 bg-background border-b border-border">
      <div className="flex items-center gap-2 flex-1 flex-wrap">
        {/* Fjern alle filtre button */}
        <Button
          onClick={onClearAll}
          className="h-12"
        >
          Fjern alle filtre
        </Button>

        {/* Severity chips */}
        {filters.severities.map((severity) => (
          <div
            key={severity}
            className="h-8 relative rounded-lg shrink-0"
          >
            <div className="content-stretch flex h-full items-center justify-center overflow-clip relative rounded-inherit">
              <div className="content-stretch flex gap-2 items-center justify-center pl-3 pr-2 py-1.5 relative shrink-0">
                <span className="label-medium text-foreground whitespace-nowrap">
                  {severityLabels[severity]}
                </span>
                <button
                  onClick={() => onRemoveFilter('severity', severity)}
                  className="relative shrink-0 size-[18px] hover:opacity-70 transition-opacity"
                  aria-label={`Fjern ${severityLabels[severity]} filter`}
                >
                  <X className="w-full h-full" strokeWidth={2} />
                </button>
              </div>
            </div>
            <div
              aria-hidden="true"
              className="absolute border border-border border-solid inset-0 pointer-events-none rounded-lg"
            />
          </div>
        ))}

        {/* Status chips */}
        {filters.statuses.map((status) => (
          <div
            key={status}
            className="h-8 relative rounded-lg shrink-0"
          >
            <div className="content-stretch flex h-full items-center justify-center overflow-clip relative rounded-inherit">
              <div className="content-stretch flex gap-2 items-center justify-center pl-3 pr-2 py-1.5 relative shrink-0">
                <span className="label-medium text-foreground whitespace-nowrap">
                  {statusLabels[status]}
                </span>
                <button
                  onClick={() => onRemoveFilter('status', status)}
                  className="relative shrink-0 size-[18px] hover:opacity-70 transition-opacity"
                  aria-label={`Fjern ${statusLabels[status]} filter`}
                >
                  <X className="w-full h-full" strokeWidth={2} />
                </button>
              </div>
            </div>
            <div
              aria-hidden="true"
              className="absolute border border-border border-solid inset-0 pointer-events-none rounded-lg"
            />
          </div>
        ))}

        {/* Foretak chips */}
        {filters.foretak.map((foretak) => (
          <div
            key={foretak}
            className="h-8 relative rounded-lg shrink-0"
          >
            <div className="content-stretch flex h-full items-center justify-center overflow-clip relative rounded-inherit">
              <div className="content-stretch flex gap-2 items-center justify-center pl-3 pr-2 py-1.5 relative shrink-0">
                <span className="body-large text-foreground whitespace-nowrap">
                  {foretak}
                </span>
                <button
                  onClick={() => onRemoveFilter('foretak', foretak)}
                  className="relative shrink-0 size-[18px] hover:opacity-70 transition-opacity"
                  aria-label={`Fjern ${foretak} filter`}
                >
                  <X className="w-full h-full" strokeWidth={2} />
                </button>
              </div>
            </div>
            <div
              aria-hidden="true"
              className="absolute border border-border border-solid inset-0 pointer-events-none rounded-lg"
            />
          </div>
        ))}
      </div>

      {/* Result count */}
      <span className="label-large text-foreground whitespace-nowrap">
        {resultCount} {resultCount === 1 ? 'treff' : 'treff'}
      </span>
    </div>
  );
}
