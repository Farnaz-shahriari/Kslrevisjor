// Mock data for question 1.1.3 - has an open avvik from previous external audit
export const previousAvvikData: PreviousAvvik[] = [
  {
    id: 'prev-1.1.3-1',
    questionId: '1.1.3',
    severity: 'kritisk',
    foretakName: 'Haugseter Gård',
    checklist: '1.1.3 – Arkivert analyseresultater, vedtak og tilbakemeldinger fra varemottaker og myndigheter?',
    deadline: new Date('2026-03-21'), // March 21, 2026
    status: 'avventer-dokumentasjon',
    requiresAction: true,
    confirmationMethod: 'dokumentasjon',
    source: 'external',
    auditDate: 'Torsdag 5. desember 2025',
    mangel: 'Ingen dokumentasjon fremvist for trykkokontroll',
    bevis: 'Må være helgent',
    krav: 'Må være helgent\nTidsfrist for lukking av avvik\nFredag 21. mars 2026'
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