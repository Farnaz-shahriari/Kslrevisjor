import { ArrowLeft, MoreVertical } from 'lucide-react';

interface ChecklistHeadingProps {
  checklistName: string;
  activeTab: string;
  onTabChange: (tab: string) => void;
  onBack?: () => void;
  showSubmitButton?: boolean;
  onSubmit?: () => void;
}

export function ChecklistHeading({
  checklistName,
  activeTab,
  onTabChange,
  onBack,
  showSubmitButton = true,
  onSubmit,
}: ChecklistHeadingProps) {
  const tabs = [
    { id: 'tilpass', label: 'Tilpass sjekkliste' },
    { id: 'alle', label: 'Alle spørsmål' },
    { id: 'ubesvarte', label: 'Ubesvarte spørsmål' },
    { id: 'eksternt', label: 'Eksternt besvarte' },
    { id: 'dokumentasjon', label: 'Dokumentasjonskrav' },
    { id: 'avvik', label: 'Avvik' },
  ];

  return (
    <div className="flex flex-col bg-card border-b border-border">
      {/* Top Section - Name and Actions */}
      <div className="flex flex-col px-6 py-4 relative">
        {/* Title row with back button and more button */}
        <div className="flex items-center justify-between">
          {/* Left - Back button and name */}
          <div className="flex items-center gap-4">
            {onBack && (
              <button
                onClick={onBack}
                className="w-14 h-14 flex items-center justify-center hover:bg-muted rounded-full transition-colors"
                aria-label="Tilbake"
              >
                <ArrowLeft className="w-5 h-5 text-foreground" />
              </button>
            )}
            <h2 className="title-large text-foreground">{checklistName}</h2>
          </div>

          {/* Right - More button (always visible) */}
          <button
            className="w-14 h-14 flex items-center justify-center hover:bg-muted rounded-full transition-colors"
            aria-label="Flere handlinger"
          >
            <MoreVertical className="w-5 h-5 text-foreground" />
          </button>
        </div>

        {/* Submit button row - below title on mobile, inline on desktop */}
        {showSubmitButton && (
          <div className="flex mt-2 min-[880px]:mt-0 min-[880px]:absolute min-[880px]:right-[88px] min-[880px]:top-4">
            <button
              onClick={onSubmit}
              disabled={!onSubmit}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3.5 h-14 rounded-[var(--radius-button)] label-medium transition-colors disabled:opacity-38"
            >
              Send inn egenrevisjon
            </button>
          </div>
        )}
      </div>

      {/* Tabs Section */}
      <div className="flex items-center overflow-x-auto px-6">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className="relative px-4 py-3.5 hover:bg-muted/50 transition-colors shrink-0"
          >
            <span
              className={`label-medium ${
                activeTab === tab.id ? 'text-primary' : 'text-foreground'
              }`}
            >
              {tab.label}
            </span>
            {activeTab === tab.id && (
              <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-primary rounded-t-full" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}