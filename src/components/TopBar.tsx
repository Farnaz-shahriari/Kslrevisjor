import { ArrowLeft, StickyNote } from 'lucide-react';
import { Button } from './ui/button';

type TopBarTab = 'planlegg' | 'revisjonsgrunnlag' | 'dokumentoversikt' | 'registrer' | 'rapport' | 'avvik';

interface TopBarProps {
  farmName: string;
  activeTab: TopBarTab;
  onTabChange: (tab: TopBarTab) => void;
  onBack?: () => void;
  showNotesButton?: boolean;
  isNotesPanelOpen?: boolean;
  onToggleNotes?: () => void;
  reportLocked?: boolean; // New prop to control Avvik tab visibility
}

export function TopBar({ 
  farmName, 
  activeTab, 
  onTabChange, 
  onBack,
  showNotesButton = false,
  isNotesPanelOpen = false,
  onToggleNotes,
  reportLocked = false
}: TopBarProps) {
  const tabs = [
    { id: 'planlegg' as TopBarTab, label: 'Planlegg revisjon', disabled: false },
    { id: 'revisjonsgrunnlag' as TopBarTab, label: 'Revisjonsgrunnlag', disabled: false },
    { id: 'dokumentoversikt' as TopBarTab, label: 'Dokument oversikt' },
    { id: 'registrer' as TopBarTab, label: 'Registrer revisjon' },
    { id: 'rapport' as TopBarTab, label: 'Skriv rapport' },
    // Only show Avvik tab when report is locked
    ...(reportLocked ? [{ id: 'avvik' as TopBarTab, label: 'Avvik' }] : []),
  ];

  return (
    <div className="bg-background border-b border-border">
      {/* Back to accepted revisions button - above farm name */}
      <div className="flex items-center justify-between px-6 pt-3">
        <button
          className="flex items-center gap-2 px-0 py-0 hover:opacity-70 transition-opacity"
          onClick={onBack}
        >
          <ArrowLeft size={20} className="text-foreground" />
          <span className="label-medium text-foreground">
            Tilbake til aksepterte revisjoner
          </span>
        </button>
      </div>

      {/* Farm name header */}
      <div className="flex items-center justify-between gap-2 px-6 py-3">
        <h1 className="title-large text-foreground">{farmName}</h1>
        
        {/* Notes button - Desktop only */}
        {showNotesButton && onToggleNotes && (
          <button
            onClick={onToggleNotes}
            className="max-[1399px]:hidden bg-[var(--secondary-container)] rounded-[100px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.3),0px_2px_6px_2px_rgba(0,0,0,0.15)] hover:shadow-[0px_2px_4px_0px_rgba(0,0,0,0.3),0px_4px_8px_3px_rgba(0,0,0,0.15)] transition-shadow"
            aria-label={isNotesPanelOpen ? "Lukk egne notater" : "Åpne egne notater"}
            style={{ display: isNotesPanelOpen ? 'none' : 'block' }}
          >
            <div className="flex gap-2 items-center justify-center px-6 py-4">
              <StickyNote className="w-6 h-6 text-[var(--secondary-container-foreground)]" />
              <span className="label-large text-[var(--secondary-container-foreground)]">
                Åpne egne notater
              </span>
            </div>
          </button>
        )}
      </div>

      {/* Tabs */}
      <div className="overflow-x-auto">
        <div className="flex items-center gap-0 px-6 min-w-max">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            const isDisabled = tab.disabled;
            return (
              <button
                key={tab.id}
                onClick={() => !isDisabled && onTabChange(tab.id)}
                disabled={isDisabled}
                className={`
                  relative px-4 py-3 label-large transition-colors whitespace-nowrap
                  ${isDisabled
                    ? 'text-muted-foreground cursor-not-allowed'
                    : isActive 
                      ? 'text-primary' 
                      : 'text-foreground hover:text-primary'
                  }
                `}
              >
                {tab.label}
                {isActive && !isDisabled && (
                  <div 
                    className="absolute bottom-0 left-0 right-0 h-[3px] bg-primary"
                    style={{ borderRadius: '3px 3px 0px 0px' }}
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export type { TopBarTab };