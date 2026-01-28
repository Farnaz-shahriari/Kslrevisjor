import { useState, useEffect, useRef } from 'react';

interface UserInputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  icon?: 'edit' | 'phone' | 'email' | 'location';
  multiline?: boolean;
  readOnly?: boolean;
}

export function UserInput({ 
  label, 
  value, 
  onChange, 
  icon = 'edit',
  multiline = false,
  readOnly = false
}: UserInputProps) {
  const [mode, setMode] = useState<'view' | 'edit'>(value ? 'view' : 'edit');
  const [editValue, setEditValue] = useState(value);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const adjustTextareaHeight = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = 'auto';
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  };

  const handleEdit = (e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    if (readOnly) return;
    setMode('edit');
    setEditValue(value);
  };

  const handleSave = () => {
    const trimmedValue = editValue.trim();
    onChange(trimmedValue);
    setMode('view');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Escape') {
      setEditValue(value);
      setMode('view');
    }
    // Tab key saves and exits edit mode
    if (e.key === 'Tab') {
      e.preventDefault();
      handleSave();
    }
    // Enter saves for single-line inputs only
    if (e.key === 'Enter' && !multiline) {
      e.preventDefault();
      handleSave();
    }
  };

  const handleBlur = () => {
    // Save when clicking outside
    handleSave();
  };

  useEffect(() => {
    if (mode === 'edit' && textareaRef.current) {
      textareaRef.current.focus();
      adjustTextareaHeight();
    }
  }, [mode]);

  useEffect(() => {
    if (mode === 'edit') {
      adjustTextareaHeight();
    }
  }, [editValue, mode]);

  // Update editValue when value prop changes
  useEffect(() => {
    setEditValue(value);
  }, [value]);

  const renderIcon = () => {
    return (
      <div className="w-6 h-6">
        <svg className="block size-full" fill="none" viewBox="0 0 24 24">
          <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" fill="#44483B" />
        </svg>
      </div>
    );
  };

  // Edit state
  if (mode === 'edit') {
    return (
      <div className="box-border flex gap-4 items-start p-2 w-full">
        {/* Leading Icon Button - Check/Save */}
        <div className="flex items-center justify-center shrink-0 size-12">
          <button
            type="button"
            onMouseDown={(e) => {
              e.preventDefault(); // Prevent textarea blur
            }}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              handleSave();
            }}
            className="cursor-pointer flex flex-col items-center justify-center overflow-clip rounded-[var(--radius-button)] shrink-0 w-10 hover:bg-[var(--primary-container)] transition-colors"
          >
            <div className="flex h-10 items-center justify-center w-full">
              <div className="w-6 h-6">
                <svg className="block size-full" fill="none" viewBox="0 0 20 20">
                  <path d="M16.667 5L7.5 14.167L3.333 10" stroke="#44483B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                </svg>
              </div>
            </div>
          </button>
        </div>

        {/* Content */}
        <div className="basis-0 flex flex-col grow items-start justify-center min-h-px min-w-px overflow-clip shrink-0 max-w-[480px]">
          <div className="label-small text-muted-foreground w-full mb-1">
            <p className="m-0">{label}</p>
          </div>
          <textarea
            ref={textareaRef}
            value={editValue}
            onChange={(e) => setEditValue(e.target.value)}
            onKeyDown={handleKeyDown}
            onBlur={handleBlur}
            rows={1}
            className="w-full px-3 py-2 border-2 border-primary rounded-[var(--radius)] body-large text-foreground focus:outline-none focus:border-primary resize-none overflow-hidden"
            style={{ minHeight: multiline ? '72px' : '48px' }}
          />
        </div>
      </div>
    );
  }

  // View state - Clickable to edit
  return (
    <div className="box-border flex gap-4 items-start p-2 w-full">
      {/* Leading Icon Button - Edit */}
      <div className="flex items-center justify-center shrink-0 size-12">
        <div
          onClick={handleEdit}
          className={`flex flex-col items-center justify-center overflow-clip rounded-[var(--radius-button)] shrink-0 w-10 transition-colors ${
            readOnly ? '' : 'cursor-pointer hover:bg-[var(--primary-container)]'
          }`}
        >
          <div className="flex h-10 items-center justify-center w-full">
            {renderIcon()}
          </div>
        </div>
      </div>

      {/* Content - Clickable to edit */}
      <button
        onClick={handleEdit}
        disabled={readOnly}
        className={`basis-0 flex flex-col grow items-start justify-center min-h-px min-w-px overflow-clip shrink-0 text-left ${
          readOnly ? '' : 'cursor-pointer'
        }`}
      >
        <div className="label-small text-muted-foreground w-full">
          <p className="m-0">{label}</p>
        </div>
        <div className="body-large text-foreground w-full">
          <p className="m-0 whitespace-pre-wrap">{value || ''}</p>
        </div>
      </button>
    </div>
  );
}
