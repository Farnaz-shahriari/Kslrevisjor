import { useState, useEffect } from 'react';
import { DeviationView } from './DeviationView';
import { Plus } from 'lucide-react';

type SeverityLevel = 'lite-avvik' | 'avvik' | 'stor-avvik' | null;

interface DeviationData {
  id: string;
  severity?: SeverityLevel;
  mangel?: string;
  bevis?: string;
  bevisImages?: Array<{ id: string; name: string; url: string }>;
  krav?: string;
}

interface DeviationListViewProps {
  deviations?: DeviationData[];
  onUpdate?: (deviations: DeviationData[]) => void;
  questionId?: string;
  questionData?: any;
  onUpdateQuestionData?: (questionId: string, data: any) => void;
}

export function DeviationListView({ 
  deviations = [], 
  onUpdate,
  questionId,
  questionData,
  onUpdateQuestionData
}: DeviationListViewProps) {
  // Use either deviations prop or questionData.deviations
  const initialDeviations = deviations.length > 0 
    ? deviations 
    : (questionData?.deviations || [{ id: `deviation-${Date.now()}` }]);
    
  const [deviationList, setDeviationList] = useState<DeviationData[]>(initialDeviations);

  // Sync when questionData changes
  useEffect(() => {
    if (questionData?.deviations && questionData.deviations.length > 0) {
      setDeviationList(questionData.deviations);
    } else if (deviations.length > 0) {
      setDeviationList(deviations);
    }
  }, [questionData?.deviations, deviations]);

  // Check if a deviation is complete (all required fields filled)
  const isDeviationComplete = (deviation: DeviationData): boolean => {
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

  const handleDeviationUpdate = (id: string, data: DeviationData | undefined) => {
    let updatedList: DeviationData[];
    
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
    } else if (onUpdateQuestionData && questionId) {
      onUpdateQuestionData(questionId, { deviations: updatedList });
    }
  };

  const handleAddNewDeviation = () => {
    const newDeviation: DeviationData = {
      id: `deviation-${Date.now()}`
    };
    const updatedList = [...deviationList, newDeviation];
    setDeviationList(updatedList);
    
    // Update via appropriate callback
    if (onUpdate) {
      onUpdate(updatedList);
    } else if (onUpdateQuestionData && questionId) {
      onUpdateQuestionData(questionId, { deviations: updatedList });
    }
  };

  return (
    <div className="space-y-4">
      {/* Add New Deviation Button */}
      {canAddNewDeviation && (
        <button
          onClick={handleAddNewDeviation}
          className="flex items-center gap-2 px-6 py-3 rounded-[var(--radius-button)] border border-border hover:bg-muted transition-colors"
        >
          <Plus className="size-5" />
          <span className="label-medium">Legg til nytt avvik</span>
        </button>
      )}

      {/* Deviation Cards */}
      {deviationList.map((deviation) => (
        <DeviationView
          key={deviation.id}
          deviationData={deviation}
          onUpdate={(data) => handleDeviationUpdate(deviation.id, data)}
        />
      ))}
    </div>
  );
}
