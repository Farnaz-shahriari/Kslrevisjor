// Questions data structure for producer/ansatt users (Spesialitet checklist)
// These are independent from revisor questions but follow the same structure

export interface Requirement {
  category: string;
  title: string;
  description?: string;
  link?: string;
}

export interface ProducerQuestion {
  id: string;
  title: string;
  requiresDocumentation?: boolean;
  veilederText?: string;
  kravLinks?: Requirement[];
}

export interface ProducerQuestionGroup {
  id: string;
  title: string;
  questions: ProducerQuestion[];
}

export interface ProducerMainCategory {
  id: string;
  number: number;
  title: string;
  questionGroups: ProducerQuestionGroup[];
}

export const producerQuestionsData: ProducerMainCategory[] = [
  {
    id: 'category-1',
    number: 1,
    title: 'BRUK AV RÅVARER',
    questionGroups: [
      {
        id: 'group-1-1',
        title: '1.1 Bruk av egne råvarer',
        questions: [
          {
            id: '1.1.1',
            title: 'Bruker du råvarer fra egen primærproduksjon?',
            requiresDocumentation: true,
            veilederText: 'Hvis du bruker egenproduserte råvarer, må du ha gyldig Kvalitetssystem i landbruket (KSL).'
          },
          {
            id: '1.1.2',
            title: 'Er dine råvarer produsert i henhold til KSL-krav?',
            requiresDocumentation: false,
            veilederText: 'Dokumenter at primærproduksjonen følger KSL-standardene.'
          }
        ]
      },
      {
        id: 'group-1-2',
        title: '1.2 Norske råvarer kjøpt direkte fra primærprodusenter',
        questions: [
          {
            id: '1.2.1',
            title: 'Kjøper du norske råvarer direkte fra andre primærprodusenter?',
            requiresDocumentation: true,
            veilederText: 'Alle primærprodusenter du kjøper fra må ha gyldig KSL.'
          },
          {
            id: '1.2.2',
            title: 'Har du dokumentasjon på at leverandørene har gyldig KSL?',
            requiresDocumentation: true,
            veilederText: 'Be om kopi av KSL-sertifikat fra hver leverandør.'
          }
        ]
      },
      {
        id: 'group-1-3',
        title: '1.3 Råvarer kjøpt fra andre virksomheter',
        questions: [
          {
            id: '1.3.1',
            title: 'Kjøper du foredlede næringsmidler fra andre virksomheter?',
            requiresDocumentation: false,
            veilederText: 'Dokumenter at råvarene oppfyller kvalitetskrav.'
          },
          {
            id: '1.3.2',
            title: 'Har leverandørene dokumenterte kvalitetssystemer?',
            requiresDocumentation: true,
            veilederText: 'Be om dokumentasjon på kvalitetssystem fra hver leverandør.'
          }
        ]
      }
    ]
  },
  {
    id: 'category-2',
    number: 2,
    title: 'PRODUKSJONSLOKALER OG UTSTYR',
    questionGroups: [
      {
        id: 'group-2-1',
        title: '2.1 Renhold og vedlikehold',
        questions: [
          {
            id: '2.1.1',
            title: 'Har du rutiner for daglig renhold av produksjonslokaler?',
            requiresDocumentation: true,
            veilederText: 'Det skal finnes skriftlige rutiner for renhold av alle produksjonsområder.'
          },
          {
            id: '2.1.2',
            title: 'Er produksjonsutstyr i god stand og jevnlig vedlikeholdt?',
            requiresDocumentation: false,
            veilederText: 'Dokumenter vedlikeholdsplan og gjennomførte vedlikeholdsaktiviteter.'
          },
          {
            id: '2.1.3',
            title: 'Bruker du godkjente rengjøringsmidler?',
            requiresDocumentation: true,
            veilederText: 'Alle rengjøringsmidler skal være matvaregodkjente.'
          }
        ]
      },
      {
        id: 'group-2-2',
        title: '2.2 Lagring og oppbevaring',
        questions: [
          {
            id: '2.2.1',
            title: 'Oppbevares råvarer og ferdige produkter adskilt?',
            requiresDocumentation: false,
            veilederText: 'Råvarer og ferdigvarer skal holdes fysisk atskilt for å unngå krysskontaminering.'
          },
          {
            id: '2.2.2',
            title: 'Er lagerområdene rene og tørre?',
            requiresDocumentation: false,
            veilederText: 'Alle lagerområder skal være beskyttet mot fukt, skadedyr og forurensning.'
          },
          {
            id: '2.2.3',
            title: 'Følger du FIFO-prinsippet (først inn, først ut)?',
            requiresDocumentation: true,
            veilederText: 'Dokumenter hvordan du sikrer at eldre varer brukes før nye varer.'
          }
        ]
      }
    ]
  },
  {
    id: 'category-3',
    number: 3,
    title: 'HYGIENE OG PERSONELL',
    questionGroups: [
      {
        id: 'group-3-1',
        title: '3.1 Personalhygiene',
        questions: [
          {
            id: '3.1.1',
            title: 'Har alle ansatte tilgang til håndvask med varmt vann?',
            requiresDocumentation: false,
            veilederText: 'Håndvaskområder skal være tilgjengelige ved inngang til produksjonsområder.'
          },
          {
            id: '3.1.2',
            title: 'Brukes rent arbeidstøy under produksjon?',
            requiresDocumentation: false,
            veilederText: 'Arbeidstøy skal være rent og egnet for matvareproduksjon.'
          },
          {
            id: '3.1.3',
            title: 'Er det rutiner for håndtering av syke ansatte?',
            requiresDocumentation: true,
            veilederText: 'Ansatte med smittsomme sykdommer skal ikke håndtere mat.'
          }
        ]
      },
      {
        id: 'group-3-2',
        title: '3.2 Opplæring',
        questions: [
          {
            id: '3.2.1',
            title: 'Har alle ansatte fått opplæring i mattrygghet?',
            requiresDocumentation: true,
            veilederText: 'Dokumenter gjennomført opplæring for alle som håndterer mat.'
          },
          {
            id: '3.2.2',
            title: 'Er opplæringen dokumentert?',
            requiresDocumentation: true,
            veilederText: 'Oppbevar kursbevis og opplæringsdokumentasjon.'
          }
        ]
      }
    ]
  }
];

// Helper function to get question by ID
export function getProducerQuestionById(questionId: string): ProducerQuestion | null {
  for (const category of producerQuestionsData) {
    for (const group of category.questionGroups) {
      const question = group.questions.find(q => q.id === questionId);
      if (question) {
        return question;
      }
    }
  }
  return null;
}

// Helper function to get next question ID
export function getNextProducerQuestionId(currentId: string): string | null {
  const allQuestions: ProducerQuestion[] = [];
  
  producerQuestionsData.forEach(category => {
    category.questionGroups.forEach(group => {
      allQuestions.push(...group.questions);
    });
  });

  const currentIndex = allQuestions.findIndex(q => q.id === currentId);
  if (currentIndex === -1 || currentIndex === allQuestions.length - 1) {
    return null;
  }
  
  return allQuestions[currentIndex + 1].id;
}

// Helper function to get previous question ID
export function getPreviousProducerQuestionId(currentId: string): string | null {
  const allQuestions: ProducerQuestion[] = [];
  
  producerQuestionsData.forEach(category => {
    category.questionGroups.forEach(group => {
      allQuestions.push(...group.questions);
    });
  });

  const currentIndex = allQuestions.findIndex(q => q.id === currentId);
  if (currentIndex <= 0) {
    return null;
  }
  
  return allQuestions[currentIndex - 1].id;
}
