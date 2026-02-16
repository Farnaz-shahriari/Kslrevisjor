import { useState } from 'react';
import { ChevronDown, ChevronUp, FileText } from 'lucide-react';
import type { Question, Requirement } from '../data/questions';
import svgPaths from '../imports/svg-9d04u8h7wb';

interface KravVeilederSectionProps {
  question: Question;
}

export function KravVeilederSection({ question }: KravVeilederSectionProps) {
  const [veilederRevisorExpanded, setVeilederRevisorExpanded] = useState(false);
  const [veilederExpanded, setVeilederExpanded] = useState(false);
  const [kravExpanded, setKravExpanded] = useState(false);

  const hasVeilederRevisor = question.veilederRevisorText && question.veilederRevisorText.trim().length > 0;
  const hasVeileder = question.veilederText && question.veilederText.trim().length > 0;
  const hasKrav = question.kravLinks && question.kravLinks.length > 0;

  return (
    <div className="space-y-3">
      {/* Dokumentasjon kreves button */}
      {question.requiresDocumentation && (
        <button className="inline-flex items-center gap-2 px-3 py-2 bg-secondary-container text-on-secondary-container rounded-lg label-medium hover:opacity-80 transition-opacity">
          <FileText className="w-4 h-4" />
          Dokumentasjon kreves
        </button>
      )}

      {/* Container for expandable sections - ALWAYS show */}
      <div className="bg-muted rounded-lg overflow-hidden">
        {/* Veileder revisor - ALWAYS show */}
        <div className="border-b border-border">
          <button
            onClick={() => setVeilederRevisorExpanded(!veilederRevisorExpanded)}
            className="w-full flex items-center justify-between px-4 py-3 hover:bg-muted-foreground/5 transition-colors"
          >
            <span className="label-medium text-foreground">Veileder revisor</span>
            {veilederRevisorExpanded ? (
              <ChevronUp className="w-5 h-5 text-foreground" />
            ) : (
              <ChevronDown className="w-5 h-5 text-foreground" />
            )}
          </button>
          {veilederRevisorExpanded && (
            <div className="px-4 pb-4">
              <p className="body-medium text-muted-foreground whitespace-pre-wrap">
                {hasVeilederRevisor ? question.veilederRevisorText : 'Ingen tekst tilgjengelig'}
              </p>
            </div>
          )}
        </div>

        {/* Veileder - ALWAYS show */}
        <div className="border-b border-border">
          <button
            onClick={() => setVeilederExpanded(!veilederExpanded)}
            className="w-full flex items-center justify-between px-4 py-3 hover:bg-muted-foreground/5 transition-colors"
          >
            <span className="label-medium text-foreground">Veileder</span>
            {veilederExpanded ? (
              <ChevronUp className="w-5 h-5 text-foreground" />
            ) : (
              <ChevronDown className="w-5 h-5 text-foreground" />
            )}
          </button>
          {veilederExpanded && (
            <div className="px-4 pb-4">
              <p className="body-medium text-muted-foreground whitespace-pre-wrap">
                {hasVeileder ? question.veilederText : 'Ingen tekst tilgjengelig'}
              </p>
            </div>
          )}
        </div>

        {/* Krav - ALWAYS show */}
        <div>
          <button
            onClick={() => setKravExpanded(!kravExpanded)}
            className="w-full flex items-center justify-between px-4 py-3 hover:bg-muted-foreground/5 transition-colors"
          >
            <span className="label-medium text-foreground">Krav</span>
            {kravExpanded ? (
              <ChevronUp className="w-5 h-5 text-foreground" />
            ) : (
              <ChevronDown className="w-5 h-5 text-foreground" />
            )}
          </button>
          {kravExpanded && (
            <div className="px-4 pb-4 space-y-3">
              {hasKrav ? (
                question.kravLinks!.map((req, index) => (
                  <div key={index} className="bg-background rounded-[var(--radius-lg)] border border-[var(--border)]">
                    <div className="box-border flex gap-4 items-start px-4 py-3 w-full">
                      <div className="flex-1 flex flex-col items-start min-w-0">
                        <p className="label-medium text-muted-foreground m-0">
                          {req.category}
                        </p>
                        <p className="body-large text-foreground m-0">
                          {req.title}
                        </p>
                        {req.description && (
                          <p className="body-medium text-muted-foreground m-0">
                            {req.description}
                          </p>
                        )}
                      </div>
                      {req.link && (
                        <button 
                          className="flex items-start justify-center h-16 shrink-0"
                          onClick={() => window.open(req.link, '_blank')}
                        >
                          <div className="relative shrink-0 size-6">
                            <div className="absolute inset-0 overflow-clip">
                              <div className="absolute inset-[12.5%]">
                                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                                  <path d={svgPaths.pd76fd80} fill="#44483B" />
                                </svg>
                              </div>
                            </div>
                          </div>
                        </button>
                      )}
                    </div>
                  </div>
                ))
              ) : (
                <p className="body-medium text-muted-foreground">Ingen krav tilgjengelig</p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}