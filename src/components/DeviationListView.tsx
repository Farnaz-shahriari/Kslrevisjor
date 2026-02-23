import { useState, useEffect } from 'react';
import { DeviationView } from './DeviationView';
import { Plus } from 'lucide-react';
import { formatNorwegianDate } from '../utils/dateFormat';

type SeverityLevel = 'lite-avvik' | 'avvik' | 'stor-avvik' | null;

interface DeviationItem {
  id: string;
  severity?: SeverityLevel | 'kritisk';
  mangel?: string;
  bevis?: string;
  bevisImages?: Array<{ id: string; name: string; url: string }>;
  krav?: string;
  isPreviousAvvik?: boolean;
  previousAvvikId?: string;
  locked?: boolean;
  deadline?: Date;
  status?: string;
  confirmationMethod?: string;
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
  // Check if there's a previous avvik (from previous external audit)
  const previousAvvik = deviations.find(dev => dev.isPreviousAvvik);
  const hasPreviousAvvik = !!previousAvvik;
  
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

  // Check if a deviation is complete enough to allow adding another one
  // Only requires severity and mangel to be filled
  const isDeviationComplete = (deviation: DeviationItem): boolean => {
    const hasSeverity = !!deviation.severity;
    const hasMangel = !!deviation.mangel && deviation.mangel.trim().length > 0;

    return hasSeverity && hasMangel;
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
      {/* If there's a previous avvik, show it in read-only format (like Tidligere revisjoner) */}
      {hasPreviousAvvik && previousAvvik && (
        <div className="border border-[var(--border)] rounded-[var(--radius-lg)] bg-[#FEF7EC] p-4">
          <div className="space-y-4">
            {/* Severity Dropdown - Disabled */}
            <div>
              <p className="label-small text-muted-foreground mb-2">Hvor langt er avviket fra kravet?</p>
              <div className="w-full h-10 px-4 py-2 bg-[#FDF0DB] border border-[var(--border)] rounded-[var(--radius)] flex items-center justify-between">
                <span className="body-large text-foreground capitalize">
                  {previousAvvik.severity === 'kritisk' ? 'Stort avvik' : previousAvvik.severity === 'avvik' ? 'Avvik' : 'Lite avvik'}
                </span>
              </div>
            </div>

            {/* Mangel - Read-only */}
            {previousAvvik.mangel && (
              <div>
                <p className="label-small text-muted-foreground mb-2">Mangel</p>
                <div className="w-full p-3 bg-[#FDF0DB] border border-[var(--border)] rounded-[var(--radius)]">\n                  <p className="body-medium text-foreground m-0">{previousAvvik.mangel}</p>
                </div>
              </div>
            )}

            {/* Bevis - Read-only */}
            {previousAvvik.bevis && (
              <div>
                <p className="label-small text-muted-foreground mb-2">Bevis</p>
                <div className="w-full p-3 bg-[#FDF0DB] border border-[var(--border)] rounded-[var(--radius)]">\n                  <p className="body-medium text-foreground m-0">{previousAvvik.bevis}</p>
                </div>
              </div>
            )}

            {/* Krav - Read-only */}
            {previousAvvik.krav && (
              <div>
                <p className="label-small text-muted-foreground mb-2">Krav</p>
                <div className="w-full p-3 bg-[#FDF0DB] border border-[var(--border)] rounded-[var(--radius)]">\n                  <p className="body-medium text-foreground m-0">{previousAvvik.krav}</p>
                </div>
              </div>
            )}

            {/* Additional info */}
            {previousAvvik.deadline && (
              <div>
                <p className="label-small text-muted-foreground mb-2">Frist</p>
                <p className="body-medium text-foreground">{formatNorwegianDate(previousAvvik.deadline)}</p>
              </div>
            )}

            {previousAvvik.status && (
              <div>
                <p className="label-small text-muted-foreground mb-2">Status</p>
                <p className="body-medium text-foreground capitalize">{previousAvvik.status.replace('-', ' ')}</p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Only show "Add new deviation" button and editable forms if there's NO previous avvik */}
      {!hasPreviousAvvik && (
        <>
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
          {deviationList.filter(dev => !dev.isPreviousAvvik).map((deviation) => (
            <DeviationView
              key={deviation.id}
              deviationData={deviation}
              onUpdate={(data) => handleDeviationUpdate(deviation.id, data)}
              showTrengerUtfylling={showTrengerUtfylling}
            />
          ))}
        </>
      )}
    </div>
  );
}