import { ChevronLeft, Search } from 'lucide-react';
import { useState, useMemo, useEffect } from 'react';
import { Button } from './ui/button';
import { MaterialCheckbox } from './ui/material-checkbox';
import { DatePicker } from './ui/date-picker';
import { formatNorwegianDate } from '../utils/dateFormat';
import { BottomSheet } from './ui/bottom-sheet';

interface Deviation {
  id: string;
  severity: 'kritisk' | 'avvik' | 'lite';
  foretakName: string;
  checklist: string;
  deadline: Date;
  status: 'tidspunkt-foreslatt' | 'onsker-fristforlengelse' | 'dokument-levert' | 'avventer-moteforslag' | 'avventer-dokumentasjon';
  requiresAction: boolean;
}

interface AdvancedSearchPanelProps {
  onBack: () => void;
  allDeviations: Deviation[];
  onFilterChange: (filters: SearchFilters) => void;
  currentFilters: SearchFilters; // Add this to receive external filter state
}

export interface SearchFilters {
  severities: string[];
  confirmationMethods: string[];
  dateRange: { from: Date | null; to: Date | null };
  statuses: string[];
  foretak: string[];
}

export function AdvancedSearchPanel({ onBack, allDeviations, onFilterChange, currentFilters }: AdvancedSearchPanelProps) {
  // Calculate min and max dates from all deviations
  const { minDate, maxDate } = useMemo(() => {
    if (allDeviations.length === 0) {
      return { minDate: new Date(), maxDate: new Date() };
    }
    const dates = allDeviations.map(d => d.deadline);
    return {
      minDate: new Date(Math.min(...dates.map(d => d.getTime()))),
      maxDate: new Date(Math.max(...dates.map(d => d.getTime())))
    };
  }, [allDeviations]);

  const [selectedSeverities, setSelectedSeverities] = useState<string[]>(currentFilters.severities);
  const [selectedConfirmationMethods, setSelectedConfirmationMethods] = useState<string[]>(currentFilters.confirmationMethods);
  const [selectedStatuses, setSelectedStatuses] = useState<string[]>(currentFilters.statuses);
  const [selectedForetak, setSelectedForetak] = useState<string[]>(currentFilters.foretak);
  const [dateFrom, setDateFrom] = useState<Date | null>(currentFilters.dateRange.from || minDate);
  const [dateTo, setDateTo] = useState<Date | null>(currentFilters.dateRange.to || maxDate);

  // Sync internal state with external filters (when chips are removed)
  useEffect(() => {
    setSelectedSeverities(currentFilters.severities);
    setSelectedConfirmationMethods(currentFilters.confirmationMethods);
    setSelectedStatuses(currentFilters.statuses);
    setSelectedForetak(currentFilters.foretak);
    setDateFrom(currentFilters.dateRange.from);
    setDateTo(currentFilters.dateRange.to);
  }, [currentFilters]);

  // Get currently filtered deviations based on active filters
  const currentFilteredDeviations = useMemo(() => {
    return allDeviations.filter(dev => {
      // Apply current filters
      if (selectedSeverities.length > 0 && !selectedSeverities.includes(dev.severity)) {
        return false;
      }
      if (selectedStatuses.length > 0 && !selectedStatuses.includes(dev.status)) {
        return false;
      }
      if (dateFrom && dev.deadline < dateFrom) {
        return false;
      }
      if (dateTo && dev.deadline > dateTo) {
        return false;
      }
      if (selectedForetak.length > 0 && !selectedForetak.includes(dev.foretakName)) {
        return false;
      }
      return true;
    });
  }, [allDeviations, selectedSeverities, selectedStatuses, dateFrom, dateTo, selectedForetak]);

  // Get available severities from currently filtered deviations
  const availableSeverities = useMemo(() => {
    const severities = new Set<string>();
    currentFilteredDeviations.forEach(dev => {
      severities.add(dev.severity);
    });
    return Array.from(severities);
  }, [currentFilteredDeviations]);

  // Get unique statuses from currently filtered deviations with counts
  const statusCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    currentFilteredDeviations.forEach(dev => {
      counts[dev.status] = (counts[dev.status] || 0) + 1;
    });
    return counts;
  }, [currentFilteredDeviations]);

  // Get unique foretak names from currently filtered deviations
  const uniqueForetak = useMemo(() => {
    const foretak = new Set<string>();
    currentFilteredDeviations.forEach(dev => {
      foretak.add(dev.foretakName);
    });
    return Array.from(foretak).sort();
  }, [currentFilteredDeviations]);

  const toggleSelection = (value: string, list: string[], setter: (list: string[]) => void) => {
    const newList = list.includes(value)
      ? list.filter(item => item !== value)
      : [...list, value];
    setter(newList);
    
    // Update filters
    updateFilters(
      value === 'stort-avvik' || value === 'avvik' || value === 'lite-avvik' 
        ? newList 
        : selectedSeverities,
      selectedConfirmationMethods,
      { from: dateFrom, to: dateTo },
      value.startsWith('tidspunkt') || value.startsWith('onsker') || value.startsWith('dokument') || value.startsWith('avventer')
        ? newList
        : selectedStatuses,
      uniqueForetak.includes(value)
        ? newList
        : selectedForetak
    );
  };

  const updateFilters = (severities: string[], confirmationMethods: string[], dateRange: { from: Date | null; to: Date | null }, statuses: string[], foretak: string[]) => {
    onFilterChange({
      severities,
      confirmationMethods,
      dateRange,
      statuses,
      foretak
    });
  };

  return (
    <div className="w-full h-full bg-background flex flex-col overflow-y-auto">
      {/* Search section - now first element */}
      <div className="px-4 py-4">
        <div className="relative">
          <div className="absolute left-4 top-1/2 -translate-y-1/2">
            <Search className="w-5 h-5 text-muted-foreground" />
          </div>
          <input
            type="text"
            placeholder="Søk foretak, avvikstype, etc."
            className="w-full h-14 pl-12 pr-4 rounded-[28px] bg-muted border-none body-medium text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
      </div>

      {/* Divider */}
      <div className="px-4">
        <div className="h-px bg-[var(--border)]" />
      </div>

      {/* Avvikstype section */}
      <div className="px-4 py-4">
        <h3 className="label-medium text-foreground mb-2">Avvikstype</h3>
        <div className="flex flex-col gap-1">
          {availableSeverities.map((severity) => (
            <div
              key={severity}
              className="h-14 px-4 flex items-center hover:bg-muted rounded-[var(--radius)] transition-colors"
            >
              <MaterialCheckbox
                checked={selectedSeverities.includes(severity)}
                onChange={(checked) => {
                  const newList = checked
                    ? [...selectedSeverities, severity]
                    : selectedSeverities.filter(s => s !== severity);
                  setSelectedSeverities(newList);
                  updateFilters(newList, selectedConfirmationMethods, { from: dateFrom, to: dateTo }, selectedStatuses, selectedForetak);
                }}
                label={severity.charAt(0).toUpperCase() + severity.slice(1)}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="px-4">
        <div className="h-px bg-[var(--border)]" />
      </div>

      {/* Bekreftelsesmåte section */}
      <div className="px-4 py-4">
        <h3 className="label-medium text-foreground mb-2">Bekreftelsesmåte</h3>
        <div className="flex flex-col gap-1">
          {[
            { value: 'fysisk-besok', label: 'Fysisk besøk' },
            { value: 'digitalt-besok', label: 'Digitalt besøk' },
            { value: 'dokumentasjon', label: 'Dokumentasjon' },
          ].map((item) => (
            <div
              key={item.value}
              className="h-14 px-4 flex items-center hover:bg-muted rounded-[var(--radius)] transition-colors"
            >
              <MaterialCheckbox
                checked={selectedConfirmationMethods.includes(item.value)}
                onChange={(checked) => {
                  const newList = checked
                    ? [...selectedConfirmationMethods, item.value]
                    : selectedConfirmationMethods.filter(s => s !== item.value);
                  setSelectedConfirmationMethods(newList);
                  updateFilters(selectedSeverities, newList, { from: dateFrom, to: dateTo }, selectedStatuses, selectedForetak);
                }}
                label={item.label}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="px-4">
        <div className="h-px bg-[var(--border)]" />
      </div>

      {/* Tidsfrist section */}
      <div className="px-6 py-6">
        <h3 className="title-medium text-foreground mb-6">Tidsfrist for lukking av avvik</h3>
        <div className="flex flex-col gap-6">
          <DatePicker
            label="Fra"
            value={dateFrom}
            onChange={(newDate) => {
              setDateFrom(newDate);
              updateFilters(selectedSeverities, selectedConfirmationMethods, { from: newDate, to: dateTo }, selectedStatuses, selectedForetak);
            }}
          />
          <DatePicker
            label="Til"
            value={dateTo}
            onChange={(newDate) => {
              setDateTo(newDate);
              updateFilters(selectedSeverities, selectedConfirmationMethods, { from: dateFrom, to: newDate }, selectedStatuses, selectedForetak);
            }}
          />
        </div>
      </div>

      {/* Divider */}
      <div className="px-4">
        <div className="h-px bg-[var(--border)]" />
      </div>

      {/* Status section */}
      <div className="px-4 py-4">
        <h3 className="label-medium text-foreground mb-2">Status</h3>
        <div className="flex flex-col gap-1">
          {[
            { value: 'tidspunkt-foreslatt', label: 'Tidspunkt foreslått' },
            { value: 'onsker-fristforlengelse', label: 'Ønsker fristforlengelse' },
            { value: 'dokument-levert', label: 'Dokument levert' },
            { value: 'avventer-moteforslag', label: 'Avventer møteforslag' },
            { value: 'avventer-dokumentasjon', label: 'Avventer dokumentasjon' },
          ].filter(item => statusCounts[item.value] > 0).map((item) => (
            <div
              key={item.value}
              className="flex items-center h-14 px-4 hover:bg-muted rounded-[var(--radius)] transition-colors"
            >
              <div className="flex items-center flex-1">
                <MaterialCheckbox
                  checked={selectedStatuses.includes(item.value)}
                  onChange={(checked) => {
                    const newList = checked
                      ? [...selectedStatuses, item.value]
                      : selectedStatuses.filter(s => s !== item.value);
                    setSelectedStatuses(newList);
                    updateFilters(selectedSeverities, selectedConfirmationMethods, { from: dateFrom, to: dateTo }, newList, selectedForetak);
                  }}
                  label={item.label}
                />
              </div>
              <span className="label-small text-muted-foreground ml-2">{statusCounts[item.value]}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="px-4">
        <div className="h-px bg-[var(--border)]" />
      </div>

      {/* Foretak section */}
      <div className="px-4 py-4">
        <h3 className="label-medium text-foreground mb-2">Foretak</h3>
        <div className="flex flex-col gap-1">
          {uniqueForetak.map((foretakName) => (
            <div
              key={foretakName}
              className="h-14 px-4 flex items-center hover:bg-muted rounded-[var(--radius)] transition-colors"
            >
              <MaterialCheckbox
                checked={selectedForetak.includes(foretakName)}
                onChange={(checked) => {
                  const newList = checked
                    ? [...selectedForetak, foretakName]
                    : selectedForetak.filter(f => f !== foretakName);
                  setSelectedForetak(newList);
                  updateFilters(selectedSeverities, selectedConfirmationMethods, { from: dateFrom, to: dateTo }, selectedStatuses, newList);
                }}
                label={foretakName}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}