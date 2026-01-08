// Separate database for Spesialitet checklist questions
// This is completely independent from the main questions.ts used by revisor

export interface SpesialitetRequirement {
  category: string;
  title: string;
  description?: string;
  link?: string;
}

export interface SpesialitetQuestion {
  id: string;
  title: string;
  hasDocument?: boolean;
  hasDeviation?: boolean;
  isAnswered?: boolean;
  answerText?: string;
  requiresDocumentation?: boolean;
  veilederRevisorText?: string;
  veilederText?: string;
  kravLinks?: SpesialitetRequirement[];
}

export interface SpesialitetQuestionGroup {
  id: string;
  title: string;
  questions: SpesialitetQuestion[];
}

export interface SpesialitetMainCategory {
  id: string;
  number: number;
  title: string;
  questionGroups: SpesialitetQuestionGroup[];
}

// Spesialitet questions data - completely separate from main revisor questions
export const spesialitetQuestionsData: SpesialitetMainCategory[] = [
  {
    id: 'category-1',
    number: 1,
    title: 'Spesialitet sjekkliste',
    questionGroups: [
      {
        id: 'group-1-1',
        title: '1.1 RÅVAREOPPRINNELSE',
        questions: [
          {
            id: '1.1.1',
            title: 'Er det etablert en rutine som sikrer at det kun brukes ingredienser med norsk opprinnelse i Spesialitet-godkjent produkt? (ingredienser som ikke produseres kommersielt i Norge er unntatt fra dette kravet)',
            hasDocument: false,
            hasDeviation: false,
            isAnswered: false,
            requiresDocumentation: true,
            veilederText: 'Det må være etablert en tydelig rutine som sikrer at bare ingredienser med norsk opprinnelse benyttes i produkter som er godkjent under Spesialitet. Ingredienser som ikke er tilgjengelige kommersielt i Norge er unntatt fra dette kravet.'
          }
        ]
      },
      {
        id: 'group-1-2',
        title: '1.2 KRAV TIL PRODUKSJONSSTED',
        questions: [
          {
            id: '1.2.1',
            title: 'Kan det dokumenteres at Spesialitet-godkjent produktet er produsert og pakket i Norge?',
            hasDocument: false,
            hasDeviation: false,
            isAnswered: false,
            requiresDocumentation: true,
            veilederText: 'Det må kunne dokumenteres at Spesialitet-godkjente produkter både er produsert og pakket i Norge. Dette er et grunnleggende krav for merkeordningen.'
          }
        ]
      },
      {
        id: 'group-1-3',
        title: '1.3 KRAV TIL KSL - BRUK AV EGNE RÅVARER',
        questions: [
          {
            id: '1.3.1',
            title: 'Gjennomføres KSL-egenrevisjon årlig?',
            hasDocument: false,
            hasDeviation: false,
            isAnswered: false,
            requiresDocumentation: true,
            veilederText: 'Virksomheten må gjennomføre KSL-egenrevisjon årlig for å sikre etterlevelse av kravene i Kvalitetssystem i Landbruket.'
          },
          {
            id: '1.3.2',
            title: 'Er avvik gitt ved ekstern KSL-revisjon lukket innen avtalt(e) frist(er)?',
            hasDocument: false,
            hasDeviation: false,
            isAnswered: false,
            requiresDocumentation: true,
            veilederText: 'Alle avvik som blir gitt ved ekstern KSL-revisjon må lukkes innen de fristene som er avtalt med revisor.'
          }
        ]
      },
      {
        id: 'group-1-4',
        title: '1.4 KRAV TIL KSL - NORSKE RÅVARER KJØPT DIREKTE FRA PRIMÆRPRODUSENTER',
        questions: [
          {
            id: '1.4.1',
            title: 'Blir oversikten over primærprodusentene du får råvarer fra oppdatert jevnlig / ved behov?',
            hasDocument: false,
            hasDeviation: false,
            isAnswered: false,
            requiresDocumentation: true,
            veilederText: 'Det må føres en oppdatert oversikt over alle primærprodusenter som leverer råvarer til virksomheten. Oversikten må oppdateres jevnlig og ved endringer.'
          },
          {
            id: '1.4.2',
            title: 'Er det etablert en rutine for å gi oppdatert og aktuell informasjon om KSL til deres primærprodusenter?',
            hasDocument: false,
            hasDeviation: false,
            isAnswered: false,
            requiresDocumentation: true,
            veilederText: 'Det må være etablert en rutine for å informere primærprodusentene om kravene i KSL og holde dem oppdatert om endringer og viktig informasjon.'
          },
          {
            id: '1.4.3',
            title: 'Har dere en kontaktperson i virksomheten som følger opp KSL mot primærprodusentene?',
            hasDocument: false,
            hasDeviation: false,
            isAnswered: false,
            veilederText: 'Det må være utpekt en dedikert kontaktperson i virksomheten som har ansvar for å følge opp KSL-kravene overfor primærprodusentene.'
          },
          {
            id: '1.4.4',
            title: 'Er det etablert en rutine for å følge opp primærprodusenter som har utfordringer/ikke har gyldig KSL?',
            hasDocument: false,
            hasDeviation: false,
            isAnswered: false,
            requiresDocumentation: true,
            veilederText: 'Det må være etablert en tydelig rutine for hvordan virksomheten skal følge opp primærprodusenter som har utfordringer med KSL eller ikke har gyldig KSL-godkjenning.'
          },
          {
            id: '1.4.5',
            title: 'Er det etablert en rutine for å hindre at råvare fra primærprodusenter som ikke har gyldig KSL går inn i Spesialitet-godkjent produkt?',
            hasDocument: false,
            hasDeviation: false,
            isAnswered: false,
            requiresDocumentation: true,
            veilederText: 'Det må være etablert en sikker rutine som hindrer at råvarer fra primærprodusenter uten gyldig KSL benyttes i produkter som er godkjent under Spesialitet.'
          }
        ]
      },
      {
        id: 'group-1-5',
        title: '1.5 KRAV TIL KSL - NORSKE RÅVARER OG / ELLER FOREDLEDE NÆRINGSMIDLER KJØPT FRA ANDRE VIRKSOMHETER',
        questions: [
          {
            id: '1.5.1',
            title: 'Er det etablert en rutine som sikrer at deres leverandør(er) følger opp KSL hos sine primærprodusenter i tråd med punktene 1.4.1-1.4.5 over?',
            hasDocument: false,
            hasDeviation: false,
            isAnswered: false,
            requiresDocumentation: true,
            veilederText: 'Det må være etablert en rutine som sikrer at alle leverandører følger opp KSL-kravene hos sine primærprodusenter på samme måte som beskrevet i punktene 1.4.1-1.4.5.'
          }
        ]
      },
      {
        id: 'group-1-6',
        title: '1.6 KRAV TIL KVALITETSSYSTEM - NORSKE RÅVARER FRA ANDRE PRIMÆRPRODUKSJONER ENN LANDBRUK',
        questions: [
          {
            id: '1.6.1',
            title: 'Er det etablert en rutine som sikrer at norske råvarer fra andre primærproduksjoner enn landbruk kommer fra primærprodusenter som har etablert et kvalitetssystem som sikrer etterlevelse av lover og forskrifter?',
            hasDocument: false,
            hasDeviation: false,
            isAnswered: false,
            requiresDocumentation: true,
            veilederText: 'For råvarer fra andre primærproduksjoner enn landbruk (som fisk, ville planter, etc.) må det være etablert en rutine som sikrer at disse kommer fra primærprodusenter med et kvalitetssystem som sikrer overholdelse av lover og forskrifter.'
          }
        ]
      },
      {
        id: 'group-1-7',
        title: '1.7 BRUK AV SPESIALITET-MERKET',
        questions: [
          {
            id: '1.7.1',
            title: 'Er det etablert en rutine som sikrer at Spesialitet-merket brukes i tråd med retningslinjene?',
            hasDocument: false,
            hasDeviation: false,
            isAnswered: false,
            requiresDocumentation: true,
            veilederText: 'Det må være etablert en rutine som sikrer at Spesialitet-merket brukes korrekt i henhold til merkevareretningslinjene fra Stiftelsen Norsk Mat.'
          }
        ]
      },
      {
        id: 'group-1-8',
        title: '1.8 OPPFØLGING, VARSLING OG RAPPORTERING',
        questions: [
          {
            id: '1.8.1',
            title: 'Er det etablert en rutine for varsling av Stiftelsen Norsk Mat ved endringer av godkjent produkt?',
            hasDocument: false,
            hasDeviation: false,
            isAnswered: false,
            requiresDocumentation: true,
            veilederText: 'Det må være etablert en tydelig rutine for å varsle Stiftelsen Norsk Mat ved alle endringer av godkjente produkter, inkludert endringer i ingredienser, produksjonsprosess eller emballasje.'
          },
          {
            id: '1.8.2',
            title: 'Er det etablert en rutine for årlig gjennomføring av egenrevisjon?',
            hasDocument: false,
            hasDeviation: false,
            isAnswered: false,
            requiresDocumentation: true,
            veilederText: 'Det må være etablert en rutine som sikrer at egenrevisjon gjennomføres årlig i henhold til kravene i Spesialitet.'
          },
          {
            id: '1.8.3',
            title: 'Er det etablert rutine som sikrer at avvik etter eksternrevisjon lukkes til avtalt frist?',
            hasDocument: false,
            hasDeviation: false,
            isAnswered: false,
            requiresDocumentation: true,
            veilederText: 'Det må være etablert en rutine som sikrer at alle avvik som blir gitt ved ekstern revisjon følges opp og lukkes innen avtalt frist.'
          },
          {
            id: '1.8.4',
            title: 'Er det etablert en rutine for varsling av Stiftelsen Norsk Mat ved hendelser som kan ha relevans for omdømmet til merkeordningen?',
            hasDocument: false,
            hasDeviation: false,
            isAnswered: false,
            requiresDocumentation: true,
            veilederText: 'Det må være etablert en rutine for å varsle Stiftelsen Norsk Mat umiddelbart ved hendelser som kan påvirke omdømmet til Spesialitet-merket, som produktfeil, tilbakekallinger eller negative medieoppslag.'
          }
        ]
      }
    ]
  }
];

// Helper function to get question by ID from Spesialitet questions
export function getSpesialitetQuestionById(questionId: string): SpesialitetQuestion | null {
  for (const category of spesialitetQuestionsData) {
    for (const group of category.questionGroups) {
      const question = group.questions.find(q => q.id === questionId);
      if (question) {
        return question;
      }
    }
  }
  return null;
}

// Helper function to get all questions as a flat array
export function getAllSpesialitetQuestions(): SpesialitetQuestion[] {
  const allQuestions: SpesialitetQuestion[] = [];
  spesialitetQuestionsData.forEach(category => {
    category.questionGroups.forEach(group => {
      allQuestions.push(...group.questions);
    });
  });
  return allQuestions;
}

// Helper function to get next question ID
export function getNextSpesialitetQuestionId(currentId: string): string | null {
  const allQuestions = getAllSpesialitetQuestions();
  const currentIndex = allQuestions.findIndex(q => q.id === currentId);
  
  if (currentIndex === -1 || currentIndex === allQuestions.length - 1) {
    return null;
  }
  
  return allQuestions[currentIndex + 1].id;
}

// Helper function to get previous question ID
export function getPreviousSpesialitetQuestionId(currentId: string): string | null {
  const allQuestions = getAllSpesialitetQuestions();
  const currentIndex = allQuestions.findIndex(q => q.id === currentId);
  
  if (currentIndex <= 0) {
    return null;
  }
  
  return allQuestions[currentIndex - 1].id;
}
