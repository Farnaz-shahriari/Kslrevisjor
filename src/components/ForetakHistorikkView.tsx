import React, { useState } from 'react';
import { Tab } from './ui/tabs';
import { AuditCard, AuditCardData } from './AuditCard';

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
    avvikCount: 4,
    avvikCritical: 1,
    avvikMajor: 2,
    avvikMinor: 1,
    avvikOpen: 4,
    avvikClosed: 0,
    kortRapport: 'Ingen avvik registrert. Meget god standard på produksjonen og dokumentasjonen er komplett og oversiktlig. Meldet god standard på området med komplett og oversiktlig.',
    deviations: [
      {
        id: 'dev-ext-1-1',
        severity: 'kritisk',
        question: 'Generelle krav til gården',
        mangel: 'Ingen avvik registrert. Meget god standard på produksjonen og dokumentasjonen er komplett og oversiktlig.',
        status: 'apent',
        deadline: '15. februar 2025'
      },
      {
        id: 'dev-ext-1-2',
        severity: 'avvik',
        question: 'Hellas, miljø og sikkerhet',
        mangel: 'Mangler dokumentasjon på gjødsellager.',
        status: 'apent',
        deadline: '20. februar 2025'
      },
      {
        id: 'dev-ext-1-3',
        severity: 'avvik',
        question: 'Smitte, dyr og alv-vikt',
        mangel: 'Manglende oppdatert karantene rutiner.',
        status: 'apent',
        deadline: '25. februar 2025'
      },
      {
        id: 'dev-ext-1-4',
        severity: 'lite-avvik',
        question: 'Generelle krav til gården',
        mangel: 'Ingen avvik registrert. Meget god standard.',
        status: 'apent',
        deadline: '28. februar 2025'
      }
    ]
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
    avvikClosed: 0,
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

  return (
    <div className="flex flex-row h-full overflow-hidden">
      {/* List Panel - Full width */}
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
    </div>
  );
}