import { StickyNote } from 'lucide-react';

interface FloatingActionButtonProps {
  onClick: () => void;
}

export function FloatingActionButton({ onClick }: FloatingActionButtonProps) {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Extended FAB - Primary Container Style */}
      <button
        onClick={onClick}
        className="flex flex-row items-center justify-center gap-2 px-4 h-14 bg-primary-container rounded-[16px] shadow-[0px_4px_8px_3px_rgba(0,0,0,0.15),0px_1px_3px_rgba(0,0,0,0.3)] hover:shadow-[0px_6px_10px_4px_rgba(0,0,0,0.15),0px_2px_3px_rgba(0,0,0,0.3)] hover:bg-[var(--primary-container)] active:bg-[var(--primary-container)] transition-all relative overflow-hidden group"
      >
        {/* Hover/Focus State Layer */}
        <div className="absolute inset-0 bg-primary-container-foreground opacity-0 group-hover:opacity-[0.08] group-focus:opacity-[0.12] group-active:opacity-[0.08] transition-opacity" />
        
        {/* Icon */}
        <StickyNote className="w-6 h-6 text-primary-container-foreground relative z-10" />
        
        {/* Label */}
        <span className="title-medium text-primary-container-foreground relative z-10">
          Egne notater
        </span>
      </button>
    </div>
  );
}