import React, { useState, useEffect } from 'react';
import { ChevronDown, Download } from 'lucide-react';
import { Tab } from './ui/tabs';
import { AuditCard, AuditCardData } from './AuditCard';
import { AuditHistoryDetailPanel } from './AuditHistoryDetailPanel';

type HistoryTabType = 'eksterne' | 'egne' | 'tilsyn';

// Mock data for external audits
const mockAuditHistory: AuditCardData[] = [
  {
    id: 'ext-1',
    ordning: 'KSL',
    status: 'rapport-last',
    revisjonDato: 'Torsdag 15. januar 2025',
    rapportLastDato: 'Fredag 30. januar 2025',
    produksjon: [
      { name: 'Storfe', count: 45 },
      { name: 'Melkeproduksjon' }
    ],
    foretakName: 'Solheim Gård',
    address: 'Solheimveien 12',
    kommune: 'Voss',
    avvikCount: 2,
    avvikCritical: 0,
    avvikMajor: 1,
    avvikMinor: 1,
    avvikOpen: 0,
    kortRapport: 'Revisjonen ble gjennomført som planlagt. Totalt ble det registrert 2 avvik som nå er lukket. Generelt god standard på driften med god dokumentasjon.'
  },
  {
    id: 'ext-2',
    ordning: 'LokalMat',
    status: 'rapport-last',
    revisjonDato: 'Mandag 10. november 2024',
    rapportLastDato: 'Onsdag 25. november 2024',
    produksjon: [
      { name: 'Sau', count: 120 },
      { name: 'Lam' }
    ],
    foretakName: 'Solheim Gård',
    address: 'Solheimveien 12',
    kommune: 'Voss',
    avvikCount: 0,
    avvikOpen: 0,
    kortRapport: 'Ingen avvik registrert. Meget god standard på produksjonen og dokumentasjonen er komplett og oversiktlig.'
  }
];

// Mock data for self-audits
const mockEgenrevisjoner: AuditCardData[] = [
  {
    id: 'self-1',
    ordning: 'KSL',
    status: 'revidert',
    revisjonDato: 'Fredag 5. desember 2025',
    produksjon: [
      { name: 'Storfe', count: 45 },
      { name: 'Melkeproduksjon' }
    ],
    foretakName: 'Solheim Gård',
    address: 'Solheimveien 12',
    kommune: 'Voss',
    avvikCount: 1,
    avvikCritical: 0,
    avvikMajor: 0,
    avvikMinor: 1,
    avvikOpen: 1,
    kortRapport: 'Egenrevisjon gjennomført. Ett lite avvik registrert som er under behandling.'
  },
  {
    id: 'self-2',
    ordning: 'KSL',
    status: 'rapport-last',
    revisjonDato: 'Tirsdag 20. august 2025',
    rapportLastDato: 'Onsdag 3. september 2025',
    produksjon: [
      { name: 'Storfe', count: 45 },
      { name: 'Melkeproduksjon' }
    ],
    foretakName: 'Solheim Gård',
    address: 'Solheimveien 12',
    kommune: 'Voss',
    avvikCount: 0,
    avvikOpen: 0,
    kortRapport: 'Egenrevisjon gjennomført uten avvik. God kontroll på produksjonen.'
  }
];

export function ForetakHistorikkView() {
  const [activeHistoryTab, setActiveHistoryTab] = useState<HistoryTabType>('eksterne');
  const [selectedAuditId, setSelectedAuditId] = useState<string | null>(null);
  
  // State for resizable detail panel
  const [detailPanelWidth, setDetailPanelWidth] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth * 0.5; // Default to 50% of screen width
    }
    return 600;
  });
  const [isResizingDetail, setIsResizingDetail] = useState(false);

  // Get the currently selected audit
  const selectedAudit = selectedAuditId 
    ? [...mockAuditHistory, ...mockEgenrevisjoner].find(a => a.id === selectedAuditId)
    : null;

  // Handle mouse move and mouse up for resizing detail panel
  useEffect(() => {
    if (!isResizingDetail) return;

    const handleMouseMove = (e: MouseEvent) => {
      const newWidth = window.innerWidth - e.clientX;
      
      // Constrain width between 30% and 70% of screen width
      const minWidth = window.innerWidth * 0.30; // 30%
      const maxWidth = window.innerWidth * 0.70; // 70%
      
      const constrainedWidth = Math.max(minWidth, Math.min(maxWidth, newWidth));
      setDetailPanelWidth(constrainedWidth);
    };

    const handleMouseUp = () => {
      setIsResizingDetail(false);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isResizingDetail]);

  // Get the current list of audits based on active tab
  const currentAudits = activeHistoryTab === 'eksterne' 
    ? mockAuditHistory 
    : activeHistoryTab === 'egne' 
    ? mockEgenrevisjoner 
    : [];

  return (
    <div className="flex flex-row h-full overflow-hidden">
      {/* List Panel - Takes remaining space */}
      <div className="flex-1 bg-background overflow-y-auto flex flex-col min-w-0">
        {/* Header with title */}
        <div className="px-10 max-[1400px]:px-6 py-6">
          <h2 className="title-large text-foreground">
            Revisjonshistorikk og rapporter
          </h2>
        </div>

        {/* Content */}
        <div className="p-2">
          {/* History tabs */}
          <div className="flex items-center gap-0 mb-1 border-b border-border">
            {[
              { id: 'eksterne', label: 'Eksterne revisjoner' },
              { id: 'egne', label: 'Egenrevisjoner' },
              { id: 'tilsyn', label: 'Tilsynshistorikk' },
            ].map((tab) => (
              <Tab
                key={tab.id}
                active={activeHistoryTab === tab.id}
                onClick={() => setActiveHistoryTab(tab.id as HistoryTabType)}
              >
                {tab.label}
              </Tab>
            ))}
          </div>

          {/* History content */}
          <div className="flex flex-col gap-1 px-4">
            {activeHistoryTab === 'eksterne' && (
              <>
                {mockAuditHistory.map(audit => (
                  <AuditCard 
                    key={audit.id} 
                    audit={audit} 
                    variant="external"
                    onClick={() => setSelectedAuditId(audit.id)}
                  />
                ))}
              </>
            )}
            
            {activeHistoryTab === 'egne' && (
              <>
                {mockEgenrevisjoner.map(audit => (
                  <AuditCard 
                    key={audit.id} 
                    audit={audit} 
                    variant="self"
                    onClick={() => setSelectedAuditId(audit.id)}
                  />
                ))}
              </>
            )}
            
            {activeHistoryTab === 'tilsyn' && (
              <div className="flex items-center justify-center py-20">
                <p className="body-large text-muted-foreground">
                  Ingen tilsynshistorikk registrert for dette foretaket
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* DESKTOP: Detail Panel - Shows selected audit with resizable width */}
      {selectedAudit && (
        <div 
          className="max-[1200px]:hidden h-full bg-background overflow-hidden flex flex-row relative"
          style={{ width: `${detailPanelWidth}px` }}
        >
          {/* Resize Handle - Left Edge */}
          <div
            onMouseDown={(e) => {
              e.preventDefault();
              setIsResizingDetail(true);
            }}
            className={`absolute left-0 top-0 bottom-0 w-1 cursor-col-resize hover:bg-primary transition-colors z-10 ${
              isResizingDetail ? 'bg-primary' : 'bg-transparent'
            }`}
            style={{
              touchAction: 'none',
            }}
          />

          {/* Vertical Divider */}
          <div className="w-px h-full bg-border shrink-0" />

          {/* Detail Content */}
          <div className="flex-1 overflow-hidden">
            <AuditHistoryDetailPanel 
              audit={selectedAudit}
              onClose={() => setSelectedAuditId(null)}
            />
          </div>
        </div>
      )}
    </div>
  );
}
