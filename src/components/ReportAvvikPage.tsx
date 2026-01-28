import { Badge } from './ui/badge';
import { formatNorwegianDate } from '../utils/dateFormat';
import { Button } from './ui/button';
import { BottomSheet } from './ui/bottom-sheet';
import { useState, useRef, useEffect } from 'react';
import { Search, AlertTriangle, ChevronLeft } from 'lucide-react';
import { DeviationDetailPanel } from './DeviationDetailPanel';

type SeverityType = 'kritisk' | 'avvik' | 'lite';
type StatusType = 'tidspunkt-foreslatt' | 'besok-planlagt' | 'venter-godkjenning' | 'onsker-fristforlengelse' | 'dokument-levert' | 'avventer-moteforslag' | 'avventer-dokumentasjon';
type ConfirmationMethod = 'dokumentasjon' | 'digitalt-besok' | 'fysisk-besok';

interface RejectedDocument {
  filename: string;
  reason: string;
}

interface Deviation {
  id: string;
  severity: SeverityType;
  foretakName: string;
  checklist: string;
  deadline: Date;
  status: StatusType;
  requiresAction: boolean;
  confirmationMethod: ConfirmationMethod;
  rejectedDocuments?: RejectedDocument[];
}

// Mock data for Haugseter Gård avvik from the revision
const haugseterDeviations: Deviation[] = [
  { 
    id: '1', 
    severity: 'kritisk', 
    foretakName: 'Haugseter Gård', 
    checklist: '1.3.7 – Er husdyrgjødsel lagret på bakken skjermet mot overflatevann?', 
    deadline: new Date(2025, 5, 15), 
    status: 'avventer-dokumentasjon', 
    requiresAction: false, 
    confirmationMethod: 'dokumentasjon' 
  },
  { 
    id: '2', 
    severity: 'avvik', 
    foretakName: 'Haugseter Gård', 
    checklist: '1.3.5 – Har du kontrollert gjødsellageret de siste 12 månedene?', 
    deadline: new Date(2025, 4, 1), 
    status: 'avventer-dokumentasjon', 
    requiresAction: false, 
    confirmationMethod: 'dokumentasjon' 
  },
  { 
    id: '3', 
    severity: 'lite', 
    foretakName: 'Haugseter Gård', 
    checklist: '1.7.1 – Lagrer du mineralgjødsel sikret?', 
    deadline: new Date(2025, 3, 15), 
    status: 'avventer-dokumentasjon', 
    requiresAction: false, 
    confirmationMethod: 'dokumentasjon' 
  },
];

function SeverityBadge({ severity }: { severity: SeverityType }) {
  const config = {
    kritisk: {
      bg: '#ffdad6',
      text: '#410002',
      icon: AlertTriangle,
      label: 'Kritisk',
    },
    avvik: {
      bg: '#ffddcc',
      text: '#4a2800',
      icon: AlertTriangle,
      label: 'Avvik',
    },
    lite: {
      bg: '#ffedd0',
      text: '#3d2e00',
      icon: AlertTriangle,
      label: 'Lite',
    },
  };

  const { bg, text, icon: Icon, label } = config[severity];

  return (
    <div 
      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg cursor-default" 
      style={{ backgroundColor: bg }}
    >
      <Icon className="w-4 h-4" style={{ color: text }} />
      <span className="label-medium" style={{ color: text }}>
        {label}
      </span>
    </div>
  );
}

function getConfirmationMethodLabel(method: ConfirmationMethod): string {
  const labels: Record<ConfirmationMethod, string> = {
    'dokumentasjon': 'Dokumentasjon',
    'digitalt-besok': 'Digitalt besøk',
    'fysisk-besok': 'Fysisk besøk'
  };
  return labels[method];
}

// Helper function to get confirmation method based on ID if not set
function getConfirmationMethod(deviation: Deviation): ConfirmationMethod {
  if (deviation.confirmationMethod) {
    return deviation.confirmationMethod;
  }
  // Fallback: determine based on ID
  const id = parseInt(deviation.id);
  const methods: ConfirmationMethod[] = ['dokumentasjon', 'digitalt-besok', 'fysisk-besok'];
  return methods[id % 3];
}

// Helper function to get status label
function getStatusLabel(status: StatusType): string {
  const labels: Record<StatusType, string> = {
    'tidspunkt-foreslatt': 'Tidspunkt foreslått',
    'besok-planlagt': 'Besøk planlagt',
    'venter-godkjenning': 'Venter godkjenning',
    'onsker-fristforlengelse': 'Ønsker fristforlengelse',
    'dokument-levert': 'Dokument levert',
    'avventer-moteforslag': 'Avventer møteforslag',
    'avventer-dokumentasjon': 'Avventer dokumentasjon'
  };
  return labels[status] || status;
}

export function ReportAvvikPage() {
  const isDesktop = typeof window !== 'undefined' && window.innerWidth >= 1400;
  const [selectedDeviationId, setSelectedDeviationId] = useState<string | null>(
    isDesktop && haugseterDeviations.length > 0 ? haugseterDeviations[0].id : null
  );
  const [showingMenu, setShowingMenu] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  // Auto-select first deviation on desktop
  useEffect(() => {
    if (isDesktop && haugseterDeviations.length > 0 && !selectedDeviationId) {
      setSelectedDeviationId(haugseterDeviations[0].id);
    }
  }, [isDesktop]);

  const handleDeviationClick = (deviationId: string) => {
    setSelectedDeviationId(deviationId);
    if (window.innerWidth < 1400) {
      setShowingMenu(false);
    }
  };

  const handleBackToMenu = () => {
    setShowingMenu(true);
  };

  // Filter deviations based on search
  const filteredDeviations = haugseterDeviations.filter(deviation => {
    const searchLower = searchQuery.toLowerCase();
    return (
      deviation.checklist.toLowerCase().includes(searchLower) ||
      deviation.foretakName.toLowerCase().includes(searchLower)
    );
  });

  // Sort deviations: action-required first, then by severity (kritisk > avvik > lite)
  const sortedDeviations = [...filteredDeviations].sort((a, b) => {
    // First sort by requiresAction
    if (a.requiresAction !== b.requiresAction) {
      return a.requiresAction ? -1 : 1;
    }
    
    // Then sort by severity
    const severityOrder = { kritisk: 0, avvik: 1, lite: 2 };
    return severityOrder[a.severity] - severityOrder[b.severity];
  });

  const selectedDeviation = sortedDeviations.find(d => d.id === selectedDeviationId);

  return (
    <div className="flex h-full w-full overflow-hidden">
      {/* MOBILE/TABLET: Table - Shows ONLY when showingMenu is true */}
      {showingMenu && (
        <div className="min-[1400px]:hidden w-full h-full bg-background flex flex-col overflow-hidden">
          {/* Header */}
          <div className="flex flex-col gap-4 p-6 border-b border-border bg-background shrink-0">
            <h2 className="title-large text-foreground">Avvik for Haugseter Gård</h2>
            
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Søk i avvik..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-border bg-background text-foreground body-large focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>

          {/* Deviations list */}
          <div className="flex-1 overflow-y-auto">
            {sortedDeviations.length === 0 ? (
              <div className="flex items-center justify-center h-full">
                <p className="body-large text-muted-foreground">Ingen avvik funnet</p>
              </div>
            ) : (
              <div className="divide-y divide-border">
                {sortedDeviations.map((deviation) => (
                  <div
                    key={deviation.id}
                    onClick={() => handleDeviationClick(deviation.id)}
                    className={`p-4 cursor-pointer hover:bg-muted transition-colors ${
                      selectedDeviationId === deviation.id ? 'bg-secondary-container' : ''
                    }`}
                  >
                    <div className="flex flex-col gap-3">
                      <div className="flex items-start justify-between gap-2">
                        <span className="body-large text-foreground flex-1">
                          {deviation.checklist}
                        </span>
                        {deviation.requiresAction && (
                          <Badge variant="destructive" className="shrink-0">
                            Krever handling
                          </Badge>
                        )}
                      </div>
                      
                      <div className="flex items-center gap-2 flex-wrap">
                        <SeverityBadge severity={deviation.severity} />
                        <span className="label-small text-muted-foreground">
                          Frist: {formatNorwegianDate(deviation.deadline)}
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="label-small text-muted-foreground">
                          {getStatusLabel(deviation.status)}
                        </span>
                        <span className="label-small text-muted-foreground">•</span>
                        <span className="label-small text-muted-foreground">
                          {getConfirmationMethodLabel(getConfirmationMethod(deviation))}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* DESKTOP: Table - Always visible */}
      <div className="max-[1400px]:hidden w-[500px] h-full flex flex-col bg-background overflow-hidden border-r border-border">
        {/* Header */}
        <div className="flex flex-col gap-4 p-6 border-b border-border bg-background shrink-0">
          <h2 className="title-large text-foreground">Avvik for Haugseter Gård</h2>
          
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Søk i avvik..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-border bg-background text-foreground body-large focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
        </div>

        {/* Deviations list */}
        <div className="flex-1 overflow-y-auto">
          {sortedDeviations.length === 0 ? (
            <div className="flex items-center justify-center h-full">
              <p className="body-large text-muted-foreground">Ingen avvik funnet</p>
            </div>
          ) : (
            <div className="divide-y divide-border">
              {sortedDeviations.map((deviation) => (
                <div
                  key={deviation.id}
                  onClick={() => handleDeviationClick(deviation.id)}
                  className={`p-4 cursor-pointer hover:bg-muted transition-colors ${
                    selectedDeviationId === deviation.id ? 'bg-secondary-container' : ''
                  }`}
                >
                  <div className="flex flex-col gap-3">
                    <div className="flex items-start justify-between gap-2">
                      <span className="body-large text-foreground flex-1">
                        {deviation.checklist}
                      </span>
                      {deviation.requiresAction && (
                        <Badge variant="destructive" className="shrink-0">
                          Krever handling
                        </Badge>
                      )}
                    </div>
                    
                    <div className="flex items-center gap-2 flex-wrap">
                      <SeverityBadge severity={deviation.severity} />
                      <span className="label-small text-muted-foreground">
                        Frist: {formatNorwegianDate(deviation.deadline)}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="label-small text-muted-foreground">
                        {getStatusLabel(deviation.status)}
                      </span>
                      <span className="label-small text-muted-foreground">•</span>
                      <span className="label-small text-muted-foreground">
                        {getConfirmationMethodLabel(getConfirmationMethod(deviation))}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* MOBILE/TABLET & DESKTOP: Detail Panel */}
      <div className={`flex-1 h-full flex-col ${
        showingMenu ? 'max-[1400px]:hidden' : 'max-[1400px]:flex'
      } min-[1400px]:flex max-[1400px]:w-full overflow-hidden`}>
        {/* Back button - visible only on mobile/tablet */}
        {!showingMenu && (
          <div className="px-6 pt-4 pb-2 min-[1400px]:hidden border-b border-border">
            <button
              onClick={handleBackToMenu}
              className="flex items-center gap-2 label-large text-foreground hover:opacity-70 transition-opacity"
              aria-label="Tilbake til liste"
            >
              <ChevronLeft className="w-5 h-5" />
              Tilbake
            </button>
          </div>
        )}

        {/* Detail content */}
        <div className="flex-1 overflow-y-auto">
          {selectedDeviation ? (
            <DeviationDetailPanel
              deviation={{
                id: selectedDeviation.id,
                severity: selectedDeviation.severity,
                foretakName: selectedDeviation.foretakName,
                checklist: selectedDeviation.checklist,
                deadline: selectedDeviation.deadline,
                status: selectedDeviation.status,
                requiresAction: selectedDeviation.requiresAction,
                confirmationMethod: selectedDeviation.confirmationMethod,
                rejectedDocuments: selectedDeviation.rejectedDocuments
              }}
            />
          ) : (
            <div className="flex items-center justify-center h-full">
              <p className="body-large text-muted-foreground">Velg et avvik for å se detaljer</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
