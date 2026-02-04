import { X } from 'lucide-react';
import { Button } from './ui/button';
import { formatNorwegianDate } from '../utils/dateFormat';

type TripStatus = 'kladd' | 'klar-til-fakturering' | 'fakturert';

interface FakturaFilterChipBarProps {
  selectedStatus: TripStatus[];
  selectedForetak: string[];
  startDateFrom: Date | null;
  startDateTo: Date | null;
  endDateFrom: Date | null;
  endDateTo: Date | null;
  amountFrom: string;
  amountTo: string;
  onRemoveStatus: (status: TripStatus) => void;
  onRemoveForetak: (foretak: string) => void;
  onRemoveDateFilter: (type: 'startFrom' | 'startTo' | 'endFrom' | 'endTo') => void;
  onRemoveAmountFilter: (type: 'from' | 'to') => void;
  onClearAll: () => void;
  resultCount: number;
}

export function FakturaFilterChipBar({
  selectedStatus,
  selectedForetak,
  startDateFrom,
  startDateTo,
  endDateFrom,
  endDateTo,
  amountFrom,
  amountTo,
  onRemoveStatus,
  onRemoveForetak,
  onRemoveDateFilter,
  onRemoveAmountFilter,
  onClearAll,
  resultCount
}: FakturaFilterChipBarProps) {
  // Calculate total number of active filters
  const totalFilters = 
    selectedStatus.length + 
    selectedForetak.length +
    (startDateFrom ? 1 : 0) +
    (startDateTo ? 1 : 0) +
    (endDateFrom ? 1 : 0) +
    (endDateTo ? 1 : 0) +
    (amountFrom ? 1 : 0) +
    (amountTo ? 1 : 0);

  // Don't render if no filters are active
  if (totalFilters === 0) {
    return null;
  }

  // Map status values to display labels
  const getStatusLabel = (status: TripStatus): string => {
    switch (status) {
      case 'kladd':
        return 'Kladd';
      case 'klar-til-fakturering':
        return 'Klar til fakturering';
      case 'fakturert':
        return 'Fakturert';
    }
  };

  const formatAmount = (amount: string): string => {
    return new Intl.NumberFormat('nb-NO', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(parseFloat(amount));
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

        {/* Status chips */}
        {selectedStatus.map((status) => (
          <div
            key={status}
            className="h-8 relative rounded-lg shrink-0"
          >
            <div className="content-stretch flex h-full items-center justify-center overflow-clip relative rounded-inherit">
              <div className="content-stretch flex gap-2 items-center justify-center pl-3 pr-2 py-1.5 relative shrink-0">
                <span className="label-medium text-foreground whitespace-nowrap">
                  {getStatusLabel(status)}
                </span>
                <button
                  onClick={() => onRemoveStatus(status)}
                  className="relative shrink-0 size-[18px] hover:opacity-70 transition-opacity"
                  aria-label={`Fjern ${getStatusLabel(status)} filter`}
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

        {/* Start date from chip */}
        {startDateFrom && (
          <div className="h-8 relative rounded-lg shrink-0">
            <div className="content-stretch flex h-full items-center justify-center overflow-clip relative rounded-inherit">
              <div className="content-stretch flex gap-2 items-center justify-center pl-3 pr-2 py-1.5 relative shrink-0">
                <span className="label-medium text-foreground whitespace-nowrap">
                  Startdato fra: {formatNorwegianDate(startDateFrom)}
                </span>
                <button
                  onClick={() => onRemoveDateFilter('startFrom')}
                  className="relative shrink-0 size-[18px] hover:opacity-70 transition-opacity"
                  aria-label="Fjern startdato fra filter"
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
        )}

        {/* Start date to chip */}
        {startDateTo && (
          <div className="h-8 relative rounded-lg shrink-0">
            <div className="content-stretch flex h-full items-center justify-center overflow-clip relative rounded-inherit">
              <div className="content-stretch flex gap-2 items-center justify-center pl-3 pr-2 py-1.5 relative shrink-0">
                <span className="label-medium text-foreground whitespace-nowrap">
                  Startdato til: {formatNorwegianDate(startDateTo)}
                </span>
                <button
                  onClick={() => onRemoveDateFilter('startTo')}
                  className="relative shrink-0 size-[18px] hover:opacity-70 transition-opacity"
                  aria-label="Fjern startdato til filter"
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
        )}

        {/* End date from chip */}
        {endDateFrom && (
          <div className="h-8 relative rounded-lg shrink-0">
            <div className="content-stretch flex h-full items-center justify-center overflow-clip relative rounded-inherit">
              <div className="content-stretch flex gap-2 items-center justify-center pl-3 pr-2 py-1.5 relative shrink-0">
                <span className="label-medium text-foreground whitespace-nowrap">
                  Sluttdato fra: {formatNorwegianDate(endDateFrom)}
                </span>
                <button
                  onClick={() => onRemoveDateFilter('endFrom')}
                  className="relative shrink-0 size-[18px] hover:opacity-70 transition-opacity"
                  aria-label="Fjern sluttdato fra filter"
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
        )}

        {/* End date to chip */}
        {endDateTo && (
          <div className="h-8 relative rounded-lg shrink-0">
            <div className="content-stretch flex h-full items-center justify-center overflow-clip relative rounded-inherit">
              <div className="content-stretch flex gap-2 items-center justify-center pl-3 pr-2 py-1.5 relative shrink-0">
                <span className="label-medium text-foreground whitespace-nowrap">
                  Sluttdato til: {formatNorwegianDate(endDateTo)}
                </span>
                <button
                  onClick={() => onRemoveDateFilter('endTo')}
                  className="relative shrink-0 size-[18px] hover:opacity-70 transition-opacity"
                  aria-label="Fjern sluttdato til filter"
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
        )}

        {/* Amount from chip */}
        {amountFrom && (
          <div className="h-8 relative rounded-lg shrink-0">
            <div className="content-stretch flex h-full items-center justify-center overflow-clip relative rounded-inherit">
              <div className="content-stretch flex gap-2 items-center justify-center pl-3 pr-2 py-1.5 relative shrink-0">
                <span className="label-medium text-foreground whitespace-nowrap">
                  Beløp fra: {formatAmount(amountFrom)} kr
                </span>
                <button
                  onClick={() => onRemoveAmountFilter('from')}
                  className="relative shrink-0 size-[18px] hover:opacity-70 transition-opacity"
                  aria-label="Fjern beløp fra filter"
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
        )}

        {/* Amount to chip */}
        {amountTo && (
          <div className="h-8 relative rounded-lg shrink-0">
            <div className="content-stretch flex h-full items-center justify-center overflow-clip relative rounded-inherit">
              <div className="content-stretch flex gap-2 items-center justify-center pl-3 pr-2 py-1.5 relative shrink-0">
                <span className="label-medium text-foreground whitespace-nowrap">
                  Beløp til: {formatAmount(amountTo)} kr
                </span>
                <button
                  onClick={() => onRemoveAmountFilter('to')}
                  className="relative shrink-0 size-[18px] hover:opacity-70 transition-opacity"
                  aria-label="Fjern beløp til filter"
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
        )}

        {/* Foretak chips */}
        {selectedForetak.map((foretak) => (
          <div
            key={foretak}
            className="h-8 relative rounded-lg shrink-0"
          >
            <div className="content-stretch flex h-full items-center justify-center overflow-clip relative rounded-inherit">
              <div className="content-stretch flex gap-2 items-center justify-center pl-3 pr-2 py-1.5 relative shrink-0">
                <span className="label-medium text-foreground whitespace-nowrap">
                  {foretak}
                </span>
                <button
                  onClick={() => onRemoveForetak(foretak)}
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
