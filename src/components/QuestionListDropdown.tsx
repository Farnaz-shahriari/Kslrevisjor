import { useState, useMemo } from 'react';
import { ChevronDown, ChevronRight, Plus, Check, Search } from 'lucide-react';

// Mock data for checklists
const checklists = [
  { id: '1', name: 'Generelle krav til gården', icon: '1' },
  { id: '10', name: 'Helse, miljø og sikkerhet', icon: '10' },
  { id: '15', name: 'Grovfôr, korn, frø, olje- og belgvekster', icon: '15' },
  { id: '30', name: 'Drøvtyggere - generell', icon: '30' },
  { id: '32', name: 'Småfe', icon: '32' },
  { id: 'KSL', name: 'overordnet spørsmål-Overordnede spørsmål for revisor', icon: 'KSL' },
];

// Mock data for questions in the selected checklist
const questionData = [
  // 1.1 - OVERSIKT OVER DOKUMENTASJON, ANALYSERESULTATER OG SERTIFSERINGER
  {
    id: '1.1',
    text: '1.1 OVERSIKT OVER DOKUMENTASJON, ANALYSERESULTATER OG SERTIFSERINGER',
    isGroup: true,
    previousDeviation: null,
    companyAnswer: null,
    partOfBasis: null,
  },
  {
    id: '1.1.1',
    text: '1.1.1 – Oversikt over alle driftsmidler du har kjøpt og produkter du har solgt?',
    isGroup: false,
    previousDeviation: 'Stort avvik',
    companyAnswer: 'Ja (Fil)',
    partOfBasis: 'added',
  },
  {
    id: '1.1.2',
    text: '1.1.2 – En plan for håndtering eller tilbakekalling av helseskadelige produkter, inkludert varsling til Mattilsynet og varemottaker?',
    isGroup: false,
    previousDeviation: 'Lite avvik',
    companyAnswer: 'Nei (egen avvik)',
    partOfBasis: 'added',
  },
  {
    id: '1.1.3',
    text: '1.1.3 – Arkivert analyseresultater, vedtak og tilbakemeldinger fra varemottaker og myndigheter?',
    isGroup: false,
    previousDeviation: null,
    companyAnswer: 'Ja',
    partOfBasis: 'added',
  },
  {
    id: '1.1.4',
    text: '1.1.4 – Kontrollert og sertifisert utstyr i tråd med forskrifter?',
    isGroup: false,
    previousDeviation: null,
    companyAnswer: 'Ja',
    partOfBasis: 'added',
  },

  // 1.2 - GJØDSLINGSPLAN OG JORDPRØVER
  {
    id: '1.2',
    text: '1.2 Gjødslingsplan og jordprøver',
    isGroup: true,
    previousDeviation: null,
    companyAnswer: null,
    partOfBasis: null,
  },
  {
    id: '1.2.1',
    text: '1.2.1 – Har du en gyldig gjødslingsplan og skiftekart for året, basert på representative jordprøver?',
    isGroup: false,
    previousDeviation: null,
    companyAnswer: 'Ja',
    partOfBasis: 'focus',
  },
  {
    id: '1.2.2',
    text: '1.2.2 – Noterer du gjødselmengdene som brukes?',
    isGroup: false,
    previousDeviation: null,
    companyAnswer: 'Ja',
    partOfBasis: 'focus',
  },
];

interface QuestionListDropdownProps {
  isOpen: boolean;
  onClose: () => void;
  manuallyAddedQuestions: Set<string>;
  manuallyRemovedQuestions: Set<string>;
  questionsInRegisterRevisjon: Set<string>;
  focusAreaQuestions: Set<string>;
  onAddQuestionToRegister: (questionId: string) => void;
  onRemoveQuestionFromRegister: (questionId: string) => void;
}

export function QuestionListDropdown({
  isOpen,
  onClose,
  manuallyAddedQuestions,
  manuallyRemovedQuestions,
  questionsInRegisterRevisjon,
  focusAreaQuestions,
  onAddQuestionToRegister,
  onRemoveQuestionFromRegister,
}: QuestionListDropdownProps) {
  const [selectedChecklistId, setSelectedChecklistId] = useState(checklists[0].id);
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(new Set(['1.1', '1.2']));
  const [searchQuery, setSearchQuery] = useState('');

  // Function to get the partOfBasis status for a question
  const getPartOfBasisStatus = (questionId: string): 'added' | 'focus' | 'not-added' => {
    // First check if it's a focus area question (always included, cannot be removed)
    if (focusAreaQuestions.has(questionId)) {
      return 'focus';
    }
    
    // Check if manually removed
    if (manuallyRemovedQuestions.has(questionId)) {
      return 'not-added';
    }
    
    // Check if manually added
    if (manuallyAddedQuestions.has(questionId)) {
      return 'added';
    }
    
    // Check if it exists in the original Register Revisjon data
    if (questionsInRegisterRevisjon.has(questionId)) {
      return 'added';
    }
    
    // Otherwise, it's not added
    return 'not-added';
  };

  // Wrapper to prevent removing focus area questions
  const handleRemoveQuestion = (questionId: string) => {
    // Don't allow removing focus area questions
    if (focusAreaQuestions.has(questionId)) {
      return;
    }
    onRemoveQuestionFromRegister(questionId);
  };

  const toggleCategory = (categoryId: string) => {
    setExpandedCategories((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(categoryId)) {
        newSet.delete(categoryId);
      } else {
        newSet.add(categoryId);
      }
      return newSet;
    });
  };

  // Filter questions based on search query
  const filteredQuestions = useMemo(() => {
    if (!searchQuery.trim()) {
      return questionData;
    }
    const query = searchQuery.toLowerCase();
    return questionData.filter(q => 
      q.text.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/20 z-40"
        onClick={onClose}
      />
      
      {/* Dropdown panel */}
      <div className="absolute top-full left-0 mt-2 w-[800px] max-h-[600px] bg-background border border-[var(--border)] rounded-[var(--radius)] shadow-lg z-50 flex flex-col">
        {/* Header */}
        <div className="px-6 py-4 border-b border-[var(--border)]">
          <h3 className="title-large text-foreground m-0">Legg til spørsmål</h3>
        </div>

        {/* Search field */}
        <div className="px-6 py-4 border-b border-[var(--border)]">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Søk etter spørsmål..."
              className="w-full h-14 pl-12 pr-4 bg-[#e9e9df] border-none rounded-[28px] body-large text-foreground placeholder:text-muted-foreground outline-none"
            />
          </div>
        </div>

        {/* Question list */}
        <div className="flex-1 overflow-y-auto">
          <div className="p-6">
            {filteredQuestions.map((question) => {
              const isExpanded = expandedCategories.has(question.id);
              const basisStatus = getPartOfBasisStatus(question.id);
              const isFocus = basisStatus === 'focus';
              const isAdded = basisStatus === 'added';
              const isNotAdded = basisStatus === 'not-added';

              if (question.isGroup) {
                return (
                  <div key={question.id} className="mb-2">
                    <button
                      onClick={() => toggleCategory(question.id)}
                      className="flex items-center gap-2 w-full px-4 py-2 hover:bg-muted rounded-[var(--radius)] transition-colors"
                    >
                      {isExpanded ? (
                        <ChevronDown className="w-5 h-5 text-foreground" />
                      ) : (
                        <ChevronRight className="w-5 h-5 text-foreground" />
                      )}
                      <span className="label-large text-foreground">{question.text}</span>
                    </button>
                  </div>
                );
              }

              return (
                <div
                  key={question.id}
                  className="flex items-center gap-4 px-4 py-3 hover:bg-muted rounded-[var(--radius)] transition-colors"
                >
                  <div className="flex-1">
                    <p className="body-medium text-foreground m-0">{question.text}</p>
                  </div>

                  {/* Part of basis chip */}
                  <div className="shrink-0">
                    {isFocus ? (
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-[8px] bg-[#dae2ff] text-[#174295]">
                        <span className="label-medium">
                          Fokusområde
                        </span>
                      </div>
                    ) : isAdded ? (
                      <button
                        onClick={() => handleRemoveQuestion(question.id)}
                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-[8px] bg-[#dae2ff] text-[#174295] hover:bg-[#c5d5ff] transition-colors cursor-pointer"
                        title="Klikk for å fjerne fra Register Revisjon"
                      >
                        <Check size={18} />
                        <span className="label-medium">
                          Lagt til
                        </span>
                      </button>
                    ) : isNotAdded ? (
                      <button
                        onClick={() => onAddQuestionToRegister(question.id)}
                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-[8px] border border-[var(--border)] hover:bg-muted transition-colors cursor-pointer"
                        title="Klikk for å legge til i Register Revisjon"
                      >
                        <Plus size={18} className="text-foreground" />
                        <span className="label-medium text-foreground">
                          Legg til
                        </span>
                      </button>
                    ) : null}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
