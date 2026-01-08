import { StickyNote } from 'lucide-react';

interface LargeExtendedFABProps {
  onClick: () => void;
  label?: string;
}

export function LargeExtendedFAB({ onClick, label = 'Egne notater' }: LargeExtendedFABProps) {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={onClick}
        className="flex flex-row items-center justify-center gap-3 px-5 h-20 bg-secondary rounded-[28px] shadow-[0px_4px_8px_3px_rgba(0,0,0,0.15),0px_1px_3px_rgba(0,0,0,0.3)] hover:shadow-[0px_6px_10px_4px_rgba(0,0,0,0.15),0px_2px_3px_rgba(0,0,0,0.3)] active:shadow-[0px_4px_8px_3px_rgba(0,0,0,0.15),0px_1px_3px_rgba(0,0,0,0.3)] transition-all relative overflow-hidden group"
      >
        {/* Hover/Focus/Press State Layer */}
        <div className="absolute inset-0 bg-secondary-foreground opacity-0 group-hover:opacity-[0.08] group-focus:opacity-[0.12] group-active:opacity-[0.12] transition-opacity rounded-[28px]" />
        
        {/* Icon */}
        <StickyNote className="w-9 h-9 text-secondary-foreground relative z-10" />
        
        {/* Label */}
        <span className="headline-small text-secondary-foreground relative z-10 whitespace-nowrap">
          {label}
        </span>
      </button>
    </div>
  );
}
