// Mock data for previous open avviks from external audits
// This simulates avviks that were found in previous external audits and are still open

export interface PreviousAvvik {
  id: string;
  questionId: string; // The question ID this avvik is associated with
  severity: 'kritisk' | 'avvik' | 'lite';
  foretakName: string;
  checklist: string;
  deadline: Date;
  status: 'tidspunkt-foreslatt' | 'besok-planlagt' | 'venter-godkjenning' | 'onsker-fristforlengelse' | 'dokument-levert' | 'avventer-moteforslag' | 'avventer-dokumentasjon' | 'lukket';
  requiresAction: boolean;
  confirmationMethod?: 'dokumentasjon' | 'digitalt-besok' | 'fysisk-besok';
  source: 'external' | 'internal'; // From external audit or internal self-audit
  auditDate?: string; // When was this avvik registered
}

// Mock data for question 1.1.3 - has an open avvik from previous external audit
export const previousAvvikData: PreviousAvvik[] = [
  {
    id: 'prev-avvik-1',
    questionId: '1.1.3',
    severity: 'kritisk',
    foretakName: 'Haugseter Gård',
    checklist: '1.1.3 – En plan for håndtering eller tilbakekalling av helseskadelige produkter, inkludert varsling til Mattilsynet og varemottaker?',
    deadline: new Date(2026, 1, 18), // February 18, 2026
    status: 'avventer-dokumentasjon',
    requiresAction: true,
    confirmationMethod: 'dokumentasjon',
    source: 'external',
    auditDate: 'Mandag 15. desember 2025'
  },
  // Add more previous avviks for other questions as needed
];

// Helper function to get previous avvik for a specific question
export function getPreviousAvvikForQuestion(questionId: string): PreviousAvvik | undefined {
  return previousAvvikData.find(avvik => avvik.questionId === questionId && avvik.status !== 'lukket');
}

// Helper function to check if a question has open previous avvik
export function hasOpenPreviousAvvik(questionId: string): boolean {
  return previousAvvikData.some(avvik => avvik.questionId === questionId && avvik.status !== 'lukket');
}
