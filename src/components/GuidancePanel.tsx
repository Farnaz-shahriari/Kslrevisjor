import { useState } from 'react';
import { ChevronDown, ChevronUp, FileText } from 'lucide-react';
import { Button } from './ui/button';

interface GuidancePanelProps {
  questionText?: string;
  questionId?: string;
  requiresDocumentation?: boolean;
  revisorGuidance?: string;
  foretakGuidance?: string;
  requirements?: Array<{ text: string; url?: string }>;
  className?: string;
}

export function GuidancePanel({
  questionText,
  questionId,
  requiresDocumentation = false,
  revisorGuidance,
  foretakGuidance,
  requirements = [],
  className = ''
}: GuidancePanelProps) {
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set());

  const toggleSection = (section: string) => {
    const newExpanded = new Set(expandedSections);
    if (newExpanded.has(section)) {
      newExpanded.delete(section);
    } else {
      newExpanded.add(section);
    }
    setExpandedSections(newExpanded);
  };

  return (
    <div className={`flex flex-col gap-6 ${className}`}>
      {/* Question Text */}
      {questionText && (
        <p className="body-large text-foreground">
          {questionText}
        </p>
      )}

      {/* Documentation Required Button */}
      {requiresDocumentation && (
        <div>
          <Button className="bg-secondary-container text-on-secondary-container hover:opacity-80">
            <FileText className="w-5 h-5" />
            Dokumentasjon kreves
          </Button>
        </div>
      )}

      {/* Collapsible Sections */}
      <div className="flex flex-col gap-2">
        {/* Veileder revisor */}
        {revisorGuidance && (
          <div className="border border-border rounded-lg overflow-hidden bg-muted">
            <button
              onClick={() => toggleSection('revisor')}
              className="w-full h-14 px-4 flex items-center justify-between hover:bg-muted/80 transition-colors"
            >
              <span className="label-medium text-foreground">Veileder revisor</span>
              {expandedSections.has('revisor') ? (
                <ChevronUp className="w-5 h-5 text-foreground" />
              ) : (
                <ChevronDown className="w-5 h-5 text-foreground" />
              )}
            </button>
            {expandedSections.has('revisor') && (
              <div className="px-4 pb-4 bg-background">
                <p className="body-medium text-foreground whitespace-pre-wrap">
                  {revisorGuidance}
                </p>
              </div>
            )}
          </div>
        )}

        {/* Veileder (for foretak) */}
        {foretakGuidance && (
          <div className="border border-border rounded-lg overflow-hidden bg-muted">
            <button
              onClick={() => toggleSection('foretak')}
              className="w-full h-14 px-4 flex items-center justify-between hover:bg-muted/80 transition-colors"
            >
              <span className="label-medium text-foreground">Veileder</span>
              {expandedSections.has('foretak') ? (
                <ChevronUp className="w-5 h-5 text-foreground" />
              ) : (
                <ChevronDown className="w-5 h-5 text-foreground" />
              )}
            </button>
            {expandedSections.has('foretak') && (
              <div className="px-4 pb-4 bg-background">
                <p className="body-medium text-foreground whitespace-pre-wrap">
                  {foretakGuidance}
                </p>
              </div>
            )}
          </div>
        )}

        {/* Krav (requirements/links) */}
        {requirements.length > 0 && (
          <div className="border border-border rounded-lg overflow-hidden bg-muted">
            <button
              onClick={() => toggleSection('krav')}
              className="w-full h-14 px-4 flex items-center justify-between hover:bg-muted/80 transition-colors"
            >
              <span className="label-medium text-foreground">Krav</span>
              {expandedSections.has('krav') ? (
                <ChevronUp className="w-5 h-5 text-foreground" />
              ) : (
                <ChevronDown className="w-5 h-5 text-foreground" />
              )}
            </button>
            {expandedSections.has('krav') && (
              <div className="px-4 pb-4 bg-background">
                <ul className="flex flex-col gap-2">
                  {requirements.map((req, index) => (
                    <li key={index}>
                      {req.url ? (
                        <a
                          href={req.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="body-medium text-primary hover:underline"
                        >
                          {req.text}
                        </a>
                      ) : (
                        <span className="body-medium text-foreground">{req.text}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}