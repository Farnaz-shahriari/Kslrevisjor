import { HelpCircle, ChevronDown } from 'lucide-react';

interface ProducerTopBarProps {
  userName?: string;
  userEmail?: string;
  farmName?: string;
}

export function ProducerTopBar({ 
  userName = 'Ketil Nordseth',
  userEmail = 'ketil.nordseth@haugseter.no',
  farmName = 'Haugseter Gård'
}: ProducerTopBarProps) {
  return (
    <div className="bg-card border-b border-border h-16 flex items-center justify-between px-6 shrink-0">
      {/* Left Side - Farm Name */}
      <div className="flex items-center gap-4">
        <h2 className="title-medium text-foreground">{farmName}</h2>
      </div>

      {/* Right Side - Help and User Profile */}
      <div className="flex items-center gap-4">
        {/* Help Button */}
        <button 
          className="p-2 rounded-full hover:bg-muted transition-colors"
          aria-label="Hjelp"
        >
          <HelpCircle className="w-5 h-5 text-muted-foreground" />
        </button>

        {/* User Profile */}
        <button className="flex items-center gap-3 px-2 py-1.5 rounded-lg hover:bg-muted transition-colors">
          {/* Avatar */}
          <div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center">
            <span className="label-medium text-primary-container-foreground">
              {userName.split(' ').map(n => n[0]).join('')}
            </span>
          </div>
          
          {/* User Info */}
          <div className="text-left">
            <p className="label-medium text-foreground leading-tight">{userName}</p>
            <p className="label-xsmall text-muted-foreground leading-tight">{userEmail}</p>
          </div>
          
          <ChevronDown className="w-4 h-4 text-muted-foreground" />
        </button>
      </div>
    </div>
  );
}
