import { X } from 'lucide-react';
import { Button } from './ui/button';

interface RevisjonFilterChipBarProps {
  selectedStatus?: string[];
  selectedRevisjonstyper: string[];
  selectedProduksjon: string[];
  selectedOrdning: string[];
  selectedKommune: string[];
  onRemoveStatus?: (value: string) => void;
  onRemoveRevisjonstype: (value: string) => void;
  onRemoveProduksjon: (value: string) => void;
  onRemoveOrdning: (value: string) => void;
  onRemoveKommune: (value: string) => void;
  onClearAll: () => void;
  resultCount: number;
  // Label mappings passed from parent to display correct labels
  statusLabels?: Record<string, string>;
  revisjonstypeLabels: Record<string, string>;
  produksjonLabels: Record<string, string>;
  ordningLabels: Record<string, string>;
  kommuneLabels: Record<string, string>;
}

export function RevisjonFilterChipBar({
  selectedStatus = [],
  selectedRevisjonstyper,
  selectedProduksjon,
  selectedOrdning,
  selectedKommune,
  onRemoveStatus,
  onRemoveRevisjonstype,
  onRemoveProduksjon,
  onRemoveOrdning,
  onRemoveKommune,
  onClearAll,
  resultCount,
  statusLabels = {},
  revisjonstypeLabels,
  produksjonLabels,
  ordningLabels,
  kommuneLabels,
}: RevisjonFilterChipBarProps) {
  // Calculate total number of active filters
  const totalFilters = 
    selectedStatus.length +
    selectedRevisjonstyper.length + 
    selectedProduksjon.length +
    selectedOrdning.length +
    selectedKommune.length;

  // Don't render if no filters are active
  if (totalFilters === 0) {
    return null;
  }

  return (
    <div className="px-0 py-2 bg-background border-b border-border w-full max-w-[1040px]">
      <div className="max-w-[1040px] flex items-center gap-2">
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
                    {statusLabels[status] || status}
                  </span>
                  <button
                    onClick={() => onRemoveStatus?.(status)}
                    className="relative shrink-0 size-[18px] hover:opacity-70 transition-opacity"
                    aria-label={`Fjern ${statusLabels[status] || status} filter`}
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

          {/* Revisjonstype chips */}
          {selectedRevisjonstyper.map((type) => (
            <div
              key={type}
              className="h-8 relative rounded-lg shrink-0"
            >
              <div className="content-stretch flex h-full items-center justify-center overflow-clip relative rounded-inherit">
                <div className="content-stretch flex gap-2 items-center justify-center pl-3 pr-2 py-1.5 relative shrink-0">
                  <span className="label-medium text-foreground whitespace-nowrap">
                    {revisjonstypeLabels[type] || type}
                  </span>
                  <button
                    onClick={() => onRemoveRevisjonstype(type)}
                    className="relative shrink-0 size-[18px] hover:opacity-70 transition-opacity"
                    aria-label={`Fjern ${revisjonstypeLabels[type] || type} filter`}
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

          {/* Produksjon chips */}
          {selectedProduksjon.map((prod) => (
            <div
              key={prod}
              className="h-8 relative rounded-lg shrink-0"
            >
              <div className="content-stretch flex h-full items-center justify-center overflow-clip relative rounded-inherit">
                <div className="content-stretch flex gap-2 items-center justify-center pl-3 pr-2 py-1.5 relative shrink-0">
                  <span className="label-medium text-foreground whitespace-nowrap">
                    {produksjonLabels[prod] || prod}
                  </span>
                  <button
                    onClick={() => onRemoveProduksjon(prod)}
                    className="relative shrink-0 size-[18px] hover:opacity-70 transition-opacity"
                    aria-label={`Fjern ${produksjonLabels[prod] || prod} filter`}
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

          {/* Ordning chips */}
          {selectedOrdning.map((ord) => (
            <div
              key={ord}
              className="h-8 relative rounded-lg shrink-0"
            >
              <div className="content-stretch flex h-full items-center justify-center overflow-clip relative rounded-inherit">
                <div className="content-stretch flex gap-2 items-center justify-center pl-3 pr-2 py-1.5 relative shrink-0">
                  <span className="label-medium text-foreground whitespace-nowrap">
                    {ordningLabels[ord] || ord}
                  </span>
                  <button
                    onClick={() => onRemoveOrdning(ord)}
                    className="relative shrink-0 size-[18px] hover:opacity-70 transition-opacity"
                    aria-label={`Fjern ${ordningLabels[ord] || ord} filter`}
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

          {/* Kommune chips */}
          {selectedKommune.map((kom) => (
            <div
              key={kom}
              className="h-8 relative rounded-lg shrink-0"
            >
              <div className="content-stretch flex h-full items-center justify-center overflow-clip relative rounded-inherit">
                <div className="content-stretch flex gap-2 items-center justify-center pl-3 pr-2 py-1.5 relative shrink-0">
                  <span className="label-medium text-foreground whitespace-nowrap">
                    {kommuneLabels[kom] || kom}
                  </span>
                  <button
                    onClick={() => onRemoveKommune(kom)}
                    className="relative shrink-0 size-[18px] hover:opacity-70 transition-opacity"
                    aria-label={`Fjern ${kommuneLabels[kom] || kom} filter`}
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
    </div>
  );
}