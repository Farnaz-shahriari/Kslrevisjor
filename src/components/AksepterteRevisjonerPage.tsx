import { Search, ChevronRight } from 'lucide-react';

interface RevisionCardProps {
  farmName: string;
  location: string;
  certificationScheme: string;
  status: 'Venter på rapport' | 'Rapport klar' | 'Avsluttet';
  revisionDate: string;
  onClick: () => void;
}

function RevisionCard({ farmName, location, certificationScheme, status, revisionDate, onClick }: RevisionCardProps) {
  // Determine status color
  const getStatusColor = () => {
    switch (status) {
      case 'Rapport klar':
        return 'bg-[#c3e196] text-[#213600]'; // Success green
      case 'Venter på rapport':
        return 'bg-[#fdeeb1] text-[#3d2c00]'; // Warning yellow
      case 'Avsluttet':
        return 'bg-muted text-muted-foreground';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <button
      onClick={onClick}
      className="w-full bg-card border border-border rounded-[var(--radius-card)] p-6 hover:bg-muted/50 transition-colors text-left group"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1 space-y-3">
          {/* Farm Name */}
          <h3 className="title-medium text-foreground">{farmName}</h3>
          
          {/* Location and Scheme */}
          <div className="flex items-center gap-4 flex-wrap">
            <span className="body-medium text-muted-foreground">{location}</span>
            <span className="body-medium text-muted-foreground">•</span>
            <span className="label-medium text-foreground">{certificationScheme}</span>
          </div>

          {/* Status and Date */}
          <div className="flex items-center gap-3 flex-wrap">
            <span className={`px-3 py-1 rounded-full label-small ${getStatusColor()}`}>
              {status}
            </span>
            <span className="body-medium text-muted-foreground">Revisjonsdato: {revisionDate}</span>
          </div>
        </div>

        {/* Arrow Icon */}
        <div className="flex items-center justify-center w-10 h-10 rounded-full group-hover:bg-muted transition-colors">
          <ChevronRight className="w-5 h-5 text-foreground" />
        </div>
      </div>
    </button>
  );
}

interface AksepterteRevisjonerPageProps {
  onRevisionClick: () => void;
}

export function AksepterteRevisjonerPage({ onRevisionClick }: AksepterteRevisjonerPageProps) {
  const revisions = [
    {
      farmName: 'Haugseter Gård',
      location: 'Valdres, Oppland',
      certificationScheme: 'KSL - Spesialitet',
      status: 'Venter på rapport' as const,
      revisionDate: '15. november 2024'
    },
    {
      farmName: 'Solstad Gård',
      location: 'Hadeland, Oppland',
      certificationScheme: 'KSL - LokalMat',
      status: 'Rapport klar' as const,
      revisionDate: '8. november 2024'
    },
    {
      farmName: 'Bjørnstad Gård',
      location: 'Gudbrandsdalen, Oppland',
      certificationScheme: 'Nyt Norge',
      status: 'Avsluttet' as const,
      revisionDate: '1. november 2024'
    }
  ];

  return (
    <div className="flex-1 bg-background overflow-hidden flex flex-col">
      {/* Header */}
      <div className="border-b border-border px-10 py-6 shrink-0">
        <h1 className="headline-medium text-foreground mb-4">Aksepterte revisjoner</h1>
        <p className="body-large text-muted-foreground">
          Oversikt over godkjente revisjoner som er klare for gjennomføring
        </p>
      </div>

      {/* Search Bar */}
      <div className="px-10 py-6 border-b border-border shrink-0">
        <div className="relative max-w-2xl">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <input
            type="text"
            placeholder="Søk etter gård, sted eller sertifiseringsordning..."
            className="w-full h-12 pl-12 pr-4 bg-input border border-border rounded-[var(--radius-button)] body-large text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
          />
        </div>
      </div>

      {/* Revisions List */}
      <div className="flex-1 overflow-auto px-10 py-6">
        <div className="max-w-5xl space-y-4">
          {revisions.map((revision, index) => (
            <RevisionCard
              key={index}
              {...revision}
              onClick={onRevisionClick}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
