import { useState, useEffect } from 'react';
import { DeviationView } from './DeviationView';
import { Plus } from 'lucide-react';

type SeverityLevel = 'lite-avvik' | 'avvik' | 'stor-avvik' | null;

interface DeviationItem {
  id: string;
  severity?: SeverityLevel;
  mangel?: string;
  bevis?: string;
  bevisImages?: Array<{ id: string; name: string; url: string }>;
  krav?: string;
}

interface DeviationListViewProps {
  deviations?: DeviationItem[];
  onUpdate?: (deviations: DeviationItem[]) => void;
  showTrengerUtfylling?: boolean;
}

export function DeviationListView({ 
  deviations = [], 
  onUpdate,
  showTrengerUtfylling
}: DeviationListViewProps) {
  // Use either deviations prop or questionData.deviations
  const initialDeviations = deviations.length > 0 
    ? deviations 
    : [{ id: `deviation-${Date.now()}` }];
    
  const [deviationList, setDeviationList] = useState<DeviationItem[]>(initialDeviations);

  // Sync when questionData changes
  useEffect(() => {
    if (deviations.length > 0) {
      setDeviationList(deviations);
    }
  }, [deviations]);

  // Check if a deviation is complete (all required fields filled)
  const isDeviationComplete = (deviation: DeviationItem): boolean => {
    const hasSeverity = !!deviation.severity;
    const hasMangel = !!deviation.mangel && deviation.mangel.trim().length > 0;
    const hasBevis = 
      (!!deviation.bevis && deviation.bevis.trim().length > 0) ||
      (!!deviation.bevisImages && deviation.bevisImages.length > 0);
    const hasKrav = !!deviation.krav && deviation.krav.trim().length > 0;

    return hasSeverity && hasMangel && hasBevis && hasKrav;
  };

  // Check if we should show the "Add new deviation" button
  const canAddNewDeviation = deviationList.some(dev => isDeviationComplete(dev));

  const handleDeviationUpdate = (id: string, data: DeviationItem | undefined) => {
    let updatedList: DeviationItem[];
    
    if (data === undefined) {
      // Remove the deviation
      updatedList = deviationList.filter(dev => dev.id !== id);
      // If no deviations left, add an empty one
      if (updatedList.length === 0) {
        updatedList = [{ id: `deviation-${Date.now()}` }];
      }
    } else {
      // Update the deviation
      updatedList = deviationList.map(dev => 
        dev.id === id ? { ...data, id } : dev
      );
    }
    
    setDeviationList(updatedList);
    
    // Update via appropriate callback
    if (onUpdate) {
      onUpdate(updatedList);
    }
  };

  const handleAddNewDeviation = () => {
    const newDeviation: DeviationItem = {
      id: `deviation-${Date.now()}`
    };
    const updatedList = [...deviationList, newDeviation];
    setDeviationList(updatedList);
    
    // Update via appropriate callback
    if (onUpdate) {
      onUpdate(updatedList);
    }
  };

  return (
    <div className="space-y-4">
      {/* Add New Deviation Button */}
      {canAddNewDeviation && (
        <button
          onClick={handleAddNewDeviation}
          className="flex items-center gap-2 px-6 py-3.5 h-14 rounded-[var(--radius-button)] border border-border hover:bg-muted transition-colors label-medium"
        >
          <Plus className="size-5" />
          Legg til nytt avvik
        </button>
      )}

      {/* Deviation Cards */}
      {deviationList.map((deviation) => (
        <DeviationView
          key={deviation.id}
          deviationData={deviation}
          onUpdate={(data) => handleDeviationUpdate(deviation.id, data)}
          showTrengerUtfylling={showTrengerUtfylling}
        />
      ))}
    </div>
  );
}