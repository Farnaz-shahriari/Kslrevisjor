import { useState } from 'react';
import svgPaths from '../imports/svg-o536ea8qon';

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
  const [deadline, setDeadline] = useState(deviationDeadline);

  const handleSave = () => {
    if (text.trim() && deadline) {
      onUpdate?.({ deviationText: text, deviationDeadline: deadline });
    }
  };

  const handleDelete = () => {
    setText('');
    setDeadline('');
    onDelete?.();
  };

  return (
    <div className="flex flex-col gap-4 w-full max-w-2xl">
      {/* Eget avvik field */}
      <div className="box-border content-stretch flex flex-col gap-2 items-center justify-center min-h-[64px] pb-0 pt-2 px-0 relative shrink-0 w-full">
        <div className="relative shrink-0 w-full">
          <div className="box-border content-stretch flex gap-4 items-start p-2 relative w-full">
            <div className="basis-0 content-stretch flex flex-col grow items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0">
              <div className="flex flex-col justify-center relative shrink-0 w-full">
                <p className="label-small text-muted-foreground m-0">Eget avvik*</p>
              </div>
              <div className="flex flex-col justify-center relative shrink-0 w-full">
                <input
                  type="text"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  placeholder="Beskrivelse av avvik"
                  className="w-full bg-transparent border-none body-large text-foreground focus:outline-none p-0"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Frist field with calendar icon */}
      <div className="box-border content-stretch flex flex-col gap-2 items-center justify-center min-h-[64px] pb-0 pt-2 px-0 relative shrink-0 w-full">
        <div className="relative shrink-0 w-full">
          <div className="box-border content-stretch flex gap-4 items-start p-2 relative w-full">
            <div className="basis-0 content-stretch flex flex-col grow items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0">
              <div className="flex flex-col justify-center relative shrink-0 w-full">
                <p className="label-small text-muted-foreground m-0">Frist*</p>
              </div>
              <div className="flex items-center gap-2 relative shrink-0 w-full">
                <input
                  type="date"
                  value={deadline}
                  onChange={(e) => setDeadline(e.target.value)}
                  className="w-full bg-transparent border-none body-large text-foreground focus:outline-none p-0"
                />
                <div className="shrink-0 size-6">
                  <svg className="block size-full" fill="none" viewBox="0 0 20 20">
                    <path d={svgPaths.p2b8e9700} fill="var(--foreground)" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Action buttons */}
      <div className="flex items-center gap-4 justify-between w-full">
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