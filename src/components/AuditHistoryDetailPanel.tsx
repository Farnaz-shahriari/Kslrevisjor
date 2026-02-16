import React from 'react';
import { X, Download, FileText, Calendar, MapPin, Package } from 'lucide-react';
import { Button } from './ui/button';
import { AuditCardData } from './AuditCard';

interface AuditHistoryDetailPanelProps {
  audit: AuditCardData;
  onClose: () => void;
}

// Get ordning chip colors
const getOrdningChipColors = (ordning: string): { bg: string; text: string } => {
  switch (ordning.toLowerCase()) {
    case 'lokalmat':
      return { bg: '#A80000', text: '#FFFFFF' };
    case 'nyt norge':
      return { bg: '#00319E', text: '#FFFFFF' };
    case 'spesialitet':
      return { bg: '#594414', text: '#FFFFFF' };
    case 'ksl':
    default:
      return { bg: '#4A671E', text: '#FFFFFF' };
  }
};

export function AuditHistoryDetailPanel({ audit, onClose }: AuditHistoryDetailPanelProps) {
  const chipColors = getOrdningChipColors(audit.ordning);
  
  return (
    <div className="h-full flex flex-col bg-background">
      {/* Header */}
      <div className="border-b border-border px-6 py-4">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <h2 className="title-large text-foreground mb-2">
              {audit.foretakName}
            </h2>
            <div className="flex flex-wrap gap-2">
              {/* Ordning chip */}
              <div 
                className="flex items-center justify-center px-3 py-1.5 rounded-lg"
                style={{ backgroundColor: chipColors.bg }}
              >
                <span className="label-medium" style={{ color: chipColors.text }}>
                  {audit.ordning}
                </span>
              </div>
              
              {/* Egenrevisjon chip if self audit */}
              {audit.status === 'revidert' && !audit.rapportLastDato && (
                <div className="bg-[var(--primary-container)] flex items-center justify-center px-3 py-1.5 rounded-lg">
                  <span className="label-medium text-[var(--primary-container-foreground)]">
                    Egenrevisjon
                  </span>
                </div>
              )}
              
              {/* Rapport låst chip */}
              {audit.rapportLastDato && (
                <div className="bg-[var(--secondary-container)] flex items-center justify-center px-3 py-1.5 rounded-lg">
                  <span className="label-medium text-[var(--secondary-container-foreground)]">
                    Rapport låst
                  </span>
                </div>
              )}
              
              {/* Open deviations chip */}
              {audit.avvikOpen > 0 && (
                <div className="bg-[var(--error-container)] flex items-center justify-center px-3 py-1.5 rounded-lg">
                  <span className="label-medium text-[var(--error-container-foreground)]">
                    {audit.avvikOpen} {audit.avvikOpen === 1 ? 'åpent avvik' : 'åpne avvik'}
                  </span>
                </div>
              )}
            </div>
          </div>
          
          {/* Close button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            aria-label="Lukk"
          >
            <X className="w-6 h-6" />
          </Button>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-6">
        <div className="flex flex-col gap-6 max-w-3xl">
          {/* Dates section */}
          <div className="flex flex-col gap-3">
            {audit.revisjonDato && (
              <div className="flex items-start gap-3">
                <Calendar className="w-5 h-5 text-muted-foreground mt-0.5" />
                <div className="flex flex-col">
                  <span className="label-medium text-muted-foreground">Revisjonsdato</span>
                  <span className="body-large text-foreground">{audit.revisjonDato}</span>
                </div>
              </div>
            )}
            
            {audit.rapportLastDato && (
              <div className="flex items-start gap-3">
                <FileText className="w-5 h-5 text-muted-foreground mt-0.5" />
                <div className="flex flex-col">
                  <span className="label-medium text-muted-foreground">Rapport låst</span>
                  <span className="body-large text-foreground">{audit.rapportLastDato}</span>
                </div>
              </div>
            )}
          </div>

          {/* Location section */}
          <div className="flex items-start gap-3">
            <MapPin className="w-5 h-5 text-muted-foreground mt-0.5" />
            <div className="flex flex-col">
              <span className="label-medium text-muted-foreground">Adresse</span>
              <span className="body-large text-foreground">{audit.address}</span>
              <span className="body-large text-foreground">{audit.kommune}</span>
            </div>
          </div>

          {/* Production section */}
          <div className="flex items-start gap-3">
            <Package className="w-5 h-5 text-muted-foreground mt-0.5" />
            <div className="flex flex-col">
              <span className="label-medium text-muted-foreground">Produksjon</span>
              <div className="flex flex-wrap gap-2 mt-1">
                {audit.produksjon.map((prod, idx) => (
                  <div key={idx} className="flex items-center gap-1">
                    <span className="body-large text-foreground">
                      {prod.name}
                      {prod.count && ` (${prod.count})`}
                    </span>
                    {idx < audit.produksjon.length - 1 && (
                      <span className="body-large text-muted-foreground">•</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Deviations summary */}
          {(audit.avvikCount > 0 || audit.avvikCritical > 0 || audit.avvikMajor > 0 || audit.avvikMinor > 0) && (
            <div className="border border-border rounded-lg p-4">
              <h3 className="title-medium text-foreground mb-3">Avvik</h3>
              <div className="flex flex-col gap-2">
                {audit.avvikCritical > 0 && (
                  <div className="flex items-center justify-between">
                    <span className="body-medium text-foreground">Kritisk avvik</span>
                    <span className="label-medium text-foreground">{audit.avvikCritical}</span>
                  </div>
                )}
                {audit.avvikMajor > 0 && (
                  <div className="flex items-center justify-between">
                    <span className="body-medium text-foreground">Avvik</span>
                    <span className="label-medium text-foreground">{audit.avvikMajor}</span>
                  </div>
                )}
                {audit.avvikMinor > 0 && (
                  <div className="flex items-center justify-between">
                    <span className="body-medium text-foreground">Lite avvik</span>
                    <span className="label-medium text-foreground">{audit.avvikMinor}</span>
                  </div>
                )}
                {audit.avvikCount > 0 && !audit.avvikCritical && !audit.avvikMajor && !audit.avvikMinor && (
                  <div className="flex items-center justify-between">
                    <span className="body-medium text-foreground">Totalt</span>
                    <span className="label-medium text-foreground">{audit.avvikCount}</span>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Short report */}
          {audit.kortRapport && (
            <div className="border border-border rounded-lg p-4">
              <h3 className="title-medium text-foreground mb-2">Kort rapport</h3>
              <p className="body-large text-foreground whitespace-pre-wrap">
                {audit.kortRapport}
              </p>
            </div>
          )}

          {/* Download button */}
          {audit.rapportLastDato && (
            <div className="pt-2">
              <Button variant="secondary" className="w-full">
                <Download className="w-5 h-5 mr-2" />
                Last ned rapport
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
