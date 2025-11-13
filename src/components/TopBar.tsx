import { ArrowLeft } from 'lucide-react';

type TopBarTab = 'planlegg' | 'revisjonsgrunnlag' | 'dokumentoversikt' | 'registrer' | 'rapport';

interface TopBarProps {
  farmName: string;
  activeTab: TopBarTab;
  onTabChange: (tab: TopBarTab) => void;
  onBack?: () => void;
}

export function TopBar({ farmName, activeTab, onTabChange, onBack }: TopBarProps) {
  const tabs = [
    { id: 'planlegg' as TopBarTab, label: 'Planlegg revisjon', disabled: true },
    { id: 'revisjonsgrunnlag' as TopBarTab, label: 'Revisjonsgrunnlag', disabled: false },
    { id: 'dokumentoversikt' as TopBarTab, label: 'Dokument oversikt' },
    { id: 'registrer' as TopBarTab, label: 'Registrer revisjon' },
    { id: 'rapport' as TopBarTab, label: 'Skriv rapport' },
  ];

  return (
    <div className="bg-background border-b border-border">
      {/* Farm name header */}
      <div className="flex items-center gap-2 px-6 py-3">
        {onBack && (
          <button
            onClick={onBack}
            className="text-foreground hover:text-primary transition-colors"
            aria-label="Tilbake"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
        )}
        <h1 className="title-large text-foreground">{farmName}</h1>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-0 px-6">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          const isDisabled = tab.disabled;
          return (
            <button
              key={tab.id}
              onClick={() => !isDisabled && onTabChange(tab.id)}
              disabled={isDisabled}
              className={`
                relative px-4 py-3 label-large transition-colors
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
  );
}

export type { TopBarTab };
