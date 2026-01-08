import svgPaths from "../imports/svg-zmeqbh4lbi";
import { useState } from 'react';

interface ProducerDocumentationViewProps {
  documentationText?: string;
  onUpdate?: (text: string) => void;
}

export function ProducerDocumentationView({ 
  documentationText = '', 
  onUpdate 
}: ProducerDocumentationViewProps) {
  const [text, setText] = useState(documentationText);

  const handleTextChange = (newText: string) => {
    setText(newText);
    onUpdate?.(newText);
  };

  const handleUploadDocument = () => {
    // Handle document upload
    console.log('Upload document');
  };

  return (
    <div className="flex flex-col gap-2 w-full max-w-2xl">
      {/* Warning Banner */}
      <div 
        className="flex items-center gap-4 px-4 py-2 rounded-2xl w-full"
        style={{ backgroundColor: 'var(--tertiary-container)' }}
      >
        <div className="shrink-0 size-6">
          <svg className="block size-full" fill="none" viewBox="0 0 24 24">
            <path d={svgPaths.p38e56880} fill="var(--tertiary-container-foreground)" />
          </svg>
        </div>
        <p className="label-medium" style={{ color: 'var(--tertiary-container-foreground)' }}>
          Dokumentasjon er påkrevd for dette spørsmålet – last opp fil eller skriv direkte i dokumentet.
        </p>
      </div>

      {/* Documentation Input Area */}
      <div className="box-border content-stretch flex flex-col gap-2 items-center justify-center min-h-[64px] pb-0 pt-2 px-0 relative shrink-0 w-full">
        <div className="relative shrink-0 w-full">
          <div className="box-border content-stretch flex gap-4 items-start p-2 relative w-full">
            <div className="basis-0 content-stretch flex flex-col grow items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0">
              <div className="flex flex-col justify-center relative shrink-0 w-full">
                <p className="label-small text-muted-foreground m-0">Dokumentasjon tekstsvar</p>
              </div>
              <div className="flex flex-col justify-center relative shrink-0 w-full">
                <textarea
                  value={text}
                  onChange={(e) => handleTextChange(e.target.value)}
                  placeholder="Alt utstyr som krever det skal være kontrollert og sertifisert iht. forskrift."
                  className="w-full min-h-[64px] bg-transparent border-none resize-none body-large text-foreground focus:outline-none p-0"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Upload Document Button */}
      <button
        onClick={handleUploadDocument}
        className="inline-flex items-center justify-center gap-2 px-6 py-4 h-14 rounded-[var(--radius-button)] border border-border hover:bg-muted transition-colors label-medium"
      >
        <div className="size-6">
          <svg className="block size-full" fill="none" viewBox="0 0 24 24">
            <path d={svgPaths.p1a103880} fill="var(--foreground)" />
          </svg>
        </div>
        <span className="body-large text-foreground">laste opp dokument</span>
      </button>
    </div>
  );
}