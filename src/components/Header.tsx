import { HelpCircle, ChevronLeft } from 'lucide-react';
import kslLogo from 'figma:asset/19ef94f003aa6eb1cf7277c51aea8efb5e1080dc.png';

type TabType = 'planlegg' | 'revisjonsoversikt' | 'dokumentoversikt' | 'registrer' | 'rapport';

interface HeaderProps {
  activeTab?: TabType;
  onTabChange?: (tab: TabType) => void;
}

export function Header({ activeTab = 'registrer', onTabChange }: HeaderProps) {
  return (
    <header className="bg-background border-b border-border">
      <div className="flex items-center justify-between px-6 py-2">
        <div className="flex items-center gap-3">
          <img 
            src={kslLogo}
            alt="KSL Logo"
            className="h-16"
          />
        </div>

        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-muted rounded-full">
            <HelpCircle className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-muted rounded-full flex items-center justify-center">
              <span>LB</span>
            </div>
            <div className="text-right">
              <p className="m-0">Liv Berg</p>
              <p className="text-muted-foreground m-0">liv.berg@ksl.no</p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="flex items-center gap-4 px-6 py-2">
          <button className="flex items-center gap-2 hover:bg-muted px-2 py-1 rounded-[var(--radius)]">
            <ChevronLeft className="w-4 h-4" />
            <span className="title-large">Haugseter Gård</span>
          </button>
        </div>
      </div>

      <div className="flex items-center gap-6 px-6 overflow-x-auto">
        <button 
          onClick={() => onTabChange?.('planlegg')}
          className={`px-4 py-3 whitespace-nowrap transition-colors title-small ${
            activeTab === 'planlegg' 
              ? 'text-foreground border-b-2 border-primary' 
              : 'text-muted-foreground hover:text-foreground'
          }`}
        >
          Planlegg revisjon
        </button>
        <button 
          onClick={() => onTabChange?.('revisjonsoversikt')}
          className={`px-4 py-3 whitespace-nowrap transition-colors title-small ${
            activeTab === 'revisjonsoversikt' 
              ? 'text-foreground border-b-2 border-primary' 
              : 'text-muted-foreground hover:text-foreground'
          }`}
        >
          Revisjonsoversikt
        </button>
        <button 
          onClick={() => onTabChange?.('dokumentoversikt')}
          className={`px-4 py-3 whitespace-nowrap transition-colors title-small ${
            activeTab === 'dokumentoversikt' 
              ? 'text-foreground border-b-2 border-primary' 
              : 'text-muted-foreground hover:text-foreground'
          }`}
        >
          Dokumentoversikt
        </button>
        <button 
          onClick={() => onTabChange?.('registrer')}
          className={`px-4 py-3 whitespace-nowrap transition-colors title-small ${
            activeTab === 'registrer' 
              ? 'text-foreground border-b-2 border-primary' 
              : 'text-muted-foreground hover:text-foreground'
          }`}
        >
          Registrer revisjon
        </button>
        <button 
          onClick={() => onTabChange?.('rapport')}
          className={`px-4 py-3 whitespace-nowrap transition-colors title-small ${
            activeTab === 'rapport' 
              ? 'text-foreground border-b-2 border-primary' 
              : 'text-muted-foreground hover:text-foreground'
          }`}
        >
          Skriv rapport
        </button>
      </div>
    </header>
  );
}
