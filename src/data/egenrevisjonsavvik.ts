// Data for producer self-registered avvik (egenrevisjonsavvik)

export interface EgenrevisjonsAvvik {
  id: string;
  questionId: string;
  questionNumber: string;
  questionText: string;
  answer: 'ja' | 'nei';
  mangel: string;
  deadline: Date;
  status: 'åpent' | 'lukket';
}

// Mock data for egenrevisjonsavvik
export const egenrevisjonsavvikData: EgenrevisjonsAvvik[] = [
  {
    id: 'egen-avvik-1',
    questionId: '1.1.4',
    questionNumber: '1.1.4',
    questionText: 'Kontrollert og sertifisert utstyr i tråd med forskrifter?',
    answer: 'nei',
    mangel: 'Melkelegget ble ikke kontrollert av Tine i mars i år. Sprøyteustysr (gårens funksjontest) er ikke på noen måte registrert eller godkjent.',
    deadline: new Date(2024, 11, 15), // December 15, 2024
    status: 'åpent'
  }
];

// Helper function to get egenrevisjonsavvik by question ID
export function getEgenrevisjonsAvvikByQuestionId(questionId: string): EgenrevisjonsAvvik | undefined {
  return egenrevisjonsavvikData.find(avvik => avvik.questionId === questionId);
}

// Helper function to check if question has an open egenrevisjonsavvik
export function hasOpenEgenrevisjonsAvvik(questionId: string): boolean {
  const avvik = getEgenrevisjonsAvvikByQuestionId(questionId);
  return avvik?.status === 'åpent';
}
