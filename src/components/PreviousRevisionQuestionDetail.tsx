import { useState } from 'react';
import { ChevronDown, Volume2, HelpCircle, Calendar } from 'lucide-react';
import svgPaths from '../imports/svg-4o5ww5kgwr';

type AnswerType = 'ja' | 'nei';

interface PreviousRevisionQuestionDetailProps {
  questionNumber: string;
  questionText: string;
  answer: AnswerType;
  notes?: string;
  date?: string;
  revisionType?: string;
}

export function PreviousRevisionQuestionDetail({ 
  questionNumber, 
  questionText, 
  answer,
  notes,
  date,
  revisionType = 'Egenrevisjon'
}: PreviousRevisionQuestionDetailProps) {
  const [activeTab, setActiveTab] = useState<'egenrevisjon' | 'notat'>('egenrevisjon');
  const [activeGuideTab, setActiveGuideTab] = useState<'revisor' | 'veileder'>('revisor');
  const [requirementsExpanded, setRequirementsExpanded] = useState(false);
  const [guideExpanded, setGuideExpanded] = useState(false);

  return (
    <div className="h-full overflow-y-auto bg-background">
      {/* Question Header */}
      <div className="px-4 py-2 border-b border-[var(--border)]">
        <div className="flex items-center justify-between gap-2 mb-2">
          <div className="flex items-center gap-2">
            <Calendar className="w-6 h-6 text-foreground" />
            <span className="text-foreground" style={{ fontFamily: 'Quatro, sans-serif', fontSize: '22px', lineHeight: '28px' }}>
              {questionNumber}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button className="p-2 rounded-full hover:bg-muted">
              <Volume2 className="w-6 h-6 text-foreground" />
            </button>
            <button className="p-2 rounded-full hover:bg-muted">
              <HelpCircle className="w-6 h-6 text-foreground" />
            </button>
          </div>
        </div>
        
        <p className="body-medium text-foreground mb-2">{questionText}</p>
        
        {/* Documentation required chip */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[var(--primary)] text-white label-medium">
          <svg className="w-[18px] h-[18px]" viewBox="0 0 15 12" fill="none">
            <path d="M13.5 1.5H7.5L6 0H1.5C0.675 0 0.00749999 0.675 0.00749999 1.5L0 10.5C0 11.325 0.675 12 1.5 12H13.5C14.325 12 15 11.325 15 10.5V3C15 2.175 14.325 1.5 13.5 1.5ZM13.5 10.5H1.5V1.5H5.3775L6.8775 3H13.5V10.5ZM11.625 6.09V8.625H9.375V4.875H10.41L11.625 6.09ZM8.25 3.75V9.75H12.75V5.625L10.875 3.75H8.25Z" fill="currentColor"/>
          </svg>
          <span>Dokumentasjon kreves</span>
        </div>
      </div>

      {/* Krav og veileder Section */}
      <div className="border-b border-[var(--border)]">
        <div className="px-4 py-2 bg-[#fafaf0] rounded-xl mx-4 my-2 border border-[#c4c8b7]">
          {/* Requirements */}
          <button 
            onClick={() => setRequirementsExpanded(!requirementsExpanded)}
            className="w-full flex items-center gap-4 py-2"
          >
            <ChevronDown className={`w-6 h-6 text-foreground transition-transform ${requirementsExpanded ? 'rotate-180' : ''}`} />
            <span className="body-medium text-foreground">Krav</span>
          </button>
          
          {requirementsExpanded && (
            <div className="px-6 py-2">
              <div className="flex items-start gap-3 py-2">
                <div className="w-1 h-1 rounded-full bg-foreground mt-3" />
                <p className="body-small text-foreground">Det skal foreligge dokumentasjon som viser at produktet er godkjent av Spesialitet.</p>
              </div>
            </div>
          )}

          {/* Guide Tabs */}
          <div className="mt-2">
            <div className="flex border-b border-[#c4c8b7]">
              <button
                onClick={() => setActiveGuideTab('revisor')}
                className={`flex-1 py-3 px-4 relative label-medium ${
                  activeGuideTab === 'revisor' 
                    ? 'text-[var(--primary)]' 
                    : 'text-[#44483b]'
                }`}
              >
                Veileder revisor
                {activeGuideTab === 'revisor' && (
                  <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[var(--primary)]" />
                )}
              </button>
              <button
                onClick={() => setActiveGuideTab('veileder')}
                className={`flex-1 py-3 px-4 relative label-medium ${
                  activeGuideTab === 'veileder' 
                    ? 'text-[var(--primary)]' 
                    : 'text-[#44483b]'
                }`}
              >
                Veileder
                {activeGuideTab === 'veileder' && (
                  <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[var(--primary)]" />
                )}
              </button>
            </div>

            {/* Guide Content */}
            {!guideExpanded && (
              <div className="px-4 py-3">
                <p className="body-medium text-foreground mb-2">Dette bør du spørre om på dokumentgjennomgang:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li className="body-medium text-foreground">Be om dokumentasjon på kjøp av eks for, gjødsel eller drivstoff...</li>
                </ul>
                <button 
                  onClick={() => setGuideExpanded(true)}
                  className="mt-2 inline-flex items-center gap-1 px-3 py-1.5 rounded-lg hover:bg-muted label-medium text-[var(--primary)]"
                >
                  <ChevronDown className="w-4 h-4" />
                  Les mer
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main Tabs */}
      <div className="border-b border-[var(--border)]">
        <div className="flex">
          <button
            onClick={() => setActiveTab('egenrevisjon')}
            className={`flex-1 py-3 px-4 relative label-medium ${
              activeTab === 'egenrevisjon' 
                ? 'text-[var(--primary)]' 
                : 'text-[#44483b]'
            }`}
          >
            Egenrevisjonsvar
            {activeTab === 'egenrevisjon' && (
              <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[var(--primary)] rounded-t-full" />
            )}
          </button>
          <button
            onClick={() => setActiveTab('notat')}
            className={`flex-1 py-3 px-4 relative label-medium ${
              activeTab === 'notat' 
                ? 'text-[var(--primary)]' 
                : 'text-[#44483b]'
            }`}
          >
            Notat
            {activeTab === 'notat' && (
              <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[var(--primary)] rounded-t-full" />
            )}
          </button>
        </div>
      </div>

      {/* Tab Content */}
      <div className="px-4 py-3">
        {activeTab === 'egenrevisjon' ? (
          <>
            {/* Answer Display */}
            <div className="mb-4">
              <div className="mb-2">
                <span className="label-small text-[#44483b]">Svarvalg</span>
              </div>
              <div className="body-medium text-foreground">
                {answer === 'ja' ? 'Ja' : 'Nei'}
              </div>
            </div>

            {/* Status Card */}
            <div className="bg-[#ffdad6] rounded-lg p-4 border border-[#ffdad6]">
              <div className="flex items-start justify-between mb-3">
                <div className="inline-flex items-center gap-1 px-1 py-0.5 rounded-lg bg-[#ffdad6]">
                  <svg className="w-[18px] h-[18px]" viewBox="0 0 15 15" fill="none">
                    <path d="M7.5 0L6.8025 5.6175L2.1975 2.1975L5.6175 6.8025L0 7.5L5.6175 8.1975L2.1975 12.8025L6.8025 9.3825L7.5 15L8.1975 9.3825L12.8025 12.8025L9.3825 8.1975L15 7.5L9.3825 6.8025L12.8025 2.1975L8.1975 5.6175L7.5 0Z" fill="#410002"/>
                  </svg>
                  <span className="label-medium text-[#410002]">Avvik</span>
                </div>
                <div className="inline-flex items-center px-3 py-1.5 rounded-lg bg-[#ffdad6] cursor-default">
                  <span className="label-medium text-[#410002]">Åpent</span>
                </div>
              </div>
              
              <p className="label-medium text-[#410002] mb-3">
                {revisionType} ({date || 'Årlig dokumentasjon'})
              </p>
              
              <div className="flex items-center gap-1 text-[#410002]">
                <Calendar className="w-[18px] h-[18px]" />
                <span className="label-medium">6 des 2025</span>
              </div>
            </div>
          </>
        ) : (
          <div>
            {notes ? (
              <p className="body-medium text-foreground whitespace-pre-wrap">{notes}</p>
            ) : (
              <p className="body-medium text-muted-foreground italic">Ingen notater registrert</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
