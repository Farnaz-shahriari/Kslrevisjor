import { useState } from 'react';
import { DatePicker } from './ui/date-picker';

interface ProducerDeviationViewProps {
  deviationText?: string;
  deviationDeadline?: string;
  onUpdate?: (data: { deviationText: string; deviationDeadline: string }) => void;
  onDelete?: () => void;
}

export function ProducerDeviationView({ 
  deviationText = '', 
  deviationDeadline = '',
  onUpdate,
  onDelete 
}: ProducerDeviationViewProps) {
  const [text, setText] = useState(deviationText);
  const [deadline, setDeadline] = useState<Date | null>(
    deviationDeadline ? new Date(deviationDeadline) : null
  );

  const handleSave = () => {
    if (text.trim() && deadline) {
      onUpdate?.({ deviationText: text, deviationDeadline: deadline.toISOString() });
    }
  };

  const handleDelete = () => {
    setText('');
    setDeadline(null);
    onDelete?.();
  };

  return (
    <div className="flex flex-col gap-6 w-full max-w-2xl">
      {/* Eget avvik field */}
      <div className="flex flex-col gap-2">
        <label className="label-medium text-foreground">Eget avvik*</label>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Beskrivelse av avvik"
          className="w-full h-14 px-4 border-2 border-border hover:border-foreground focus:border-primary rounded-lg bg-background body-large text-foreground placeholder:text-muted-foreground focus:outline-none transition-colors"
        />
      </div>

      {/* Frist field with DatePicker */}
      <DatePicker
        label="Frist"
        value={deadline}
        onChange={(date) => setDeadline(date)}
        placeholder="DD/MM/ÅÅÅÅ"
        required
      />

      {/* Action buttons */}
      <div className="flex items-center gap-4 justify-between w-full pt-2">
        {/* Delete button - tertiary/text style */}
        <button
          onClick={handleDelete}
          className="text-primary px-6 py-3.5 h-14 rounded-[var(--radius-button)] label-medium hover:bg-muted transition-colors"
        >
          Slett avvik
        </button>

        {/* Save button - primary style */}
        <button
          onClick={handleSave}
          disabled={!text.trim() || !deadline}
          className="bg-primary text-primary-foreground px-6 py-3.5 h-14 rounded-[var(--radius-button)] label-medium hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Lagre eget avvik
        </button>
      </div>
    </div>
  );
}