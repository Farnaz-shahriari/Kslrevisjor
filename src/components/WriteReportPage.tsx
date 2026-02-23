import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import svgPaths from '../imports/svg-lebuxrzm9d';
import svgPathsChip from '../imports/svg-cne2b5etox';
import { ExpandableInput } from './ExpandableInput';
import { Button } from './ui/button';
import { SvaroversiktSection } from './SvaroversiktSection';
import { AvvikshandteringPage } from './AvvikshandteringPage';
import { PreviousRevisionTable } from './PreviousRevisionTable';
import { PreviousRevisionQuestionDetail } from './PreviousRevisionQuestionDetail';
import { ExternalRevisionAvvikView } from './ExternalRevisionAvvikView';
import { PreviousRevisionImprovementPoints } from './PreviousRevisionImprovementPoints';
import { PreviousAvvikTable } from './PreviousAvvikTable';
import { AuditCard, AuditCardData } from './AuditCard';
import { previousAvvikData } from '../data/previousAvvik';

type AnswerType = 'ja' | 'nei' | 'ikke-relevant';

interface QuestionData {
  answer?: AnswerType;
  improvementText?: string;
  improvementImages?: string[];
  positiveText?: string;
  positiveImages?: string[];
  notatText?: string;
  deviations?: any[];
  attachedDocuments?: string[];
  closedPreviousAvvikId?: string; // Track if previous avvik has been closed
}

interface WriteReportPageProps {
  onBack?: () => void;
  questionData: Record<string, QuestionData>;
  onAnswerQuestion: (questionId: string, answer: AnswerType) => void;
  onUpdateQuestionData: (questionId: string, data: Partial<QuestionData>) => void;
  onNavigateToDocument?: (documentIndex: number) => void;
  onLockDeviations?: () => void;
  deviationsLocked?: boolean;
  onLockReport?: () => void; // New callback to lock the report
  reportLocked?: boolean; // New prop to track if report is locked
  onBottomSheetOpenChange?: (isOpen: boolean) => void; // Callback to track bottom sheet state
}

export function WriteReportPage({ 
  onBack, 
  questionData, 
  onAnswerQuestion, 
  onUpdateQuestionData,
  onNavigateToDocument,
  onLockDeviations,
  deviationsLocked,
  onLockReport,
  reportLocked = false,
  onBottomSheetOpenChange
}: WriteReportPageProps) {
  // Check if desktop (≥1400px) - only auto-select on desktop, not mobile
  const isDesktop = typeof window !== 'undefined' && window.innerWidth >= 1400;
  const [currentStep, setCurrentStep] = useState<number | null>(isDesktop ? 0 : null);
  const [showingMenu, setShowingMenu] = useState(true);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  
  // Ref for sidebar to detect clicks outside
  const sidebarRef = useRef<HTMLDivElement>(null);
  
  // Step 0: Informasjon om foretaket
  const [aboutCompanyText, setAboutCompanyText] = useState('');
  const [address, setAddress] = useState({
    street: 'HOLTEVEIEN 138',
    postalCode: '4639 Kristiansand s'
  });
  const [isEditingAddress, setIsEditingAddress] = useState(false);
  const [tempAddress, setTempAddress] = useState(address);
  
  // Step 1: Tidligere revisjon
  const [previousRevisionNotes, setPreviousRevisionNotes] = useState('');
  const [previousRevisionTab, setPreviousRevisionTab] = useState<'avvik' | 'ekstern' | 'egen' | 'forbedring' | 'positive'>('avvik');
  const [selectedPreviousQuestion, setSelectedPreviousQuestion] = useState<string | null>('1.3.5');
  const [selectedExternalDeviation, setSelectedExternalDeviation] = useState<string | null>('ext-1');

  // Mock data for previous revision questions
  const previousRevisionData = {
    egen: [
      {
        id: '1.3.5',
        questionNumber: '1.3.5',
        questionText: 'Har du kontrollert gjødsellageret i løpet av de siste 12 månedene?',
        answer: 'ja' as const,
        date: '15. sep. 2024',
        notes: 'Kontroll utført og dokumentert. Alle fasiliteter er i god stand.',
        revisionType: 'Egenrevisjon'
      },
      {
        id: '1.10.2',
        questionNumber: '1.10.2',
        questionText: 'Har du vegetasjonssone mot vassdrag på minst 2 meter?',
        answer: 'nei' as const,
        date: '15. sep. 2024',
        notes: 'Vegetasjonssone er kun 1,5 meter på nordlige del av eiendommen. Planlegger utvidelse til våren.',
        revisionType: 'Egenrevisjon'
      }
    ],
    forbedring: [
      {
        id: '1.5.3',
        questionNumber: '1.5.3',
        questionText: 'Rengjøring og vedlikehold av spredeutstyr',
        answer: 'ja' as const,
        date: '15. sep. 2024',
        notes: 'Rutiner for rengjøring er etablert og følges. Vedlikeholdsplan er oppdatert.',
        revisionType: 'Forbedringspunkt'
      },
      {
        id: '10.3.1',
        questionNumber: '10.3.1',
        questionText: 'Risikovurdering av arbeidsoppgaver',
        answer: 'ja' as const,
        date: '15. sep. 2024',
        notes: 'Risikovurdering er gjennomført for alle arbeidsoppgaver. Dokumentasjon er tilgjengelig.',
        revisionType: 'Forbedringspunkt'
      }
    ],
    positive: [
      {
        id: '1.1.3',
        questionNumber: '1.1.3',
        questionText: 'Arkivering av analyseresultater, vedtak og tilbakemeldinger',
        answer: 'ja' as const,
        date: '15. sep. 2024',
        notes: 'Utmerket system for arkivering. Alt er digitalisert og lett tilgjengelig.',
        revisionType: 'Positiv observasjon'
      },
      {
        id: '10.8.2',
        questionNumber: '10.8.2',
        questionText: 'Opplæring i bruk av arbeidsutstyr',
        answer: 'ja' as const,
        date: '15. sep. 2024',
        notes: 'Systematisk opplæring av alle ansatte. Gode opplæringsrutiner og dokumentasjon.',
        revisionType: 'Positiv observasjon'
      }
    ],
    ekstern: []
  };

  // Mock data for external revision deviations (historical locked state)
  const externalRevisionDeviations = [
    {
      id: 'ext-1',
      questionNumber: '1.3.5',
      questionText: 'Har du kontrollert gjødsellageret de siste 12 månedene?',
      severity: 'avvik' as const,
      responsible: 'Tellef Lima Eidland',
      deadline: '15. mars 2024',
      confirmationMethod: 'dokumentasjon' as const,
      comment: undefined,
      reportedDeviation: 'Avvik fra kravlet.',
      deficiency: 'Dokumentasjon manglet',
      evidence: 'Kontrollskjema vist frem',
      requirement: 'Åpne kontroll dokumenteres (KSL 1.3.5)',
      hasImage: true
    },
    {
      id: 'ext-2',
      questionNumber: '1.3.7',
      questionText: 'Er husdyrgjødsel lagret med bakken allergiksikret mot gjødsel?',
      severity: 'stort-avvik' as const,
      responsible: 'Tellef Lima Eidland',
      deadline: '20. juni 2023',
      confirmationMethod: 'digitalt-besok' as const,
      comment: 'Kontakt oss når gjødsellageret er utbedret.',
      reportedDeviation: 'Lagring av husdyrgjødsel skjer ikke med bakken allergiksikret.',
      deficiency: 'Ingen dokumentasjon fremvist for truckkontroll.',
      evidence: 'Observert under befarring',
      requirement: 'Bakken skal være sikret mot at gjødsel kan trenge ned i bakken (KSL 1.3.7)',
      hasImage: false
    },
    {
      id: 'ext-3',
      questionNumber: '1.7.1',
      questionText: 'Lagrer du mineralgjødsel sikret?',
      severity: 'lite-avvik' as const,
      responsible: 'Tellef Lima Eidland',
      deadline: '10. september 2024',
      confirmationMethod: 'dokumentasjon' as const,
      comment: undefined,
      reportedDeviation: 'Mindre avvik i lagring',
      deficiency: 'Lagring ikke optimalt sikret',
      evidence: 'Bilder tatt under inspeksjon',
      requirement: 'Mineralgjødsel skal lagres under tak (KSL 1.7.1)',
      hasImage: true
    }
  ];

  // Mock data for improvement points from previous revisions
  const improvementPointsData = [
    {
      id: 'imp-1',
      questionNumber: '1.1.1',
      questionText: 'Har du oversikt over alle driftsmidler du har kjøpt, og alle produkter du har solgt?',
      improvementText: 'Det mangler rutiner for registrering av fôrtype og mengde som brukes i ulike produksjonsperioder. Anbefaler å opprette en digital logg for bedre sporbarhet.',
      type: 'improvement' as const,
      date: '15. sep. 2024',
      revisionType: 'Eksternrevisjon'
    },
    {
      id: 'imp-2',
      questionNumber: '1.1.4',
      questionText: 'Er utstyr som krever det, kontrollert og sertifisert i tråd med forskrifter?',
      improvementText: 'Planen for håndtering av sykdomsutbrudd eller dyretragedier er utdatert og bør revideres. Foreslår å oppdatere planen med kontaktinformasjon til veterinær og lokal mattilsyn.',
      type: 'improvement' as const,
      date: '15. sep. 2024',
      revisionType: 'Eksternrevisjon'
    },
    {
      id: 'imp-3',
      questionNumber: '1.1.2',
      questionText: 'Noterer du gjødselmengdene som brukes?',
      improvementText: 'Enkelte dyr mangler synlig eller korrekt merking; rutiner for kontroll av øremerker kan forbedres. Vurder å innføre ukentlig kontroll av alle dyr.',
      type: 'improvement' as const,
      date: '15. sep. 2024',
      revisionType: 'Eksternrevisjon'
    },
    {
      id: 'imp-4',
      questionNumber: '1.3.5',
      questionText: 'Har du kontrollert gjødsellageret de siste 12 månedene?',
      improvementText: 'Gjødsellageret kunne vært bedre organisert for å redusere risiko for lekkasje. Anbefaler å installere drenering og tettere inspeksjonsrunder.',
      type: 'improvement' as const,
      date: '15. sep. 2024',
      revisionType: 'Eksternrevisjon'
    },
    {
      id: 'imp-5',
      questionNumber: '1.5.1',
      questionText: 'Kan du dokumentere at plantevernmidler kun brukes av autorisert personell?',
      improvementText: 'Dokumentasjonen av kurs og sertifiseringer bør samles på ett sted for enklere tilgang ved revisjoner.',
      type: 'improvement' as const,
      date: '15. sep. 2024',
      revisionType: 'Eksternrevisjon'
    }
  ];

  // Mock data for positive observations from previous revisions
  const positiveObservationsData = [
    {
      id: 'pos-1',
      questionNumber: '1.2.1',
      questionText: 'Har du en gyldig gjødslingsplan og skiftekart for året?',
      positiveText: 'Gården har en veldig god og detaljert gjødslingsplan som er oppdatert og lett tilgjengelig. Skiftekart er digitalisert og inkluderer alle relevante detaljer.',
      type: 'positive' as const,
      date: '15. sep. 2024',
      revisionType: 'Eksternrevisjon'
    },
    {
      id: 'pos-2',
      questionNumber: '1.3.1',
      questionText: 'Er husdyrgjødsel kun spredt på dyrket jord eller godkjent innmarksbeite?',
      positiveText: 'Utmerket praksis rundt spredning av husdyrgjødsel. Gården har klare rutiner og dokumentasjon som viser at all gjødsel håndteres i henhold til regelverket.',
      type: 'positive' as const,
      date: '15. sep. 2024',
      revisionType: 'Eksternrevisjon'
    },
    {
      id: 'pos-3',
      questionNumber: '1.3.6',
      questionText: 'Har du nok lagringskapasitet (min. 8 måneder)?',
      positiveText: 'Gjødsellageret er i svært god stand med mer enn tilstrekkelig kapasitet. God planlegging og vedlikehold sikrer at det ikke oppstår problemer.',
      type: 'positive' as const,
      date: '15. sep. 2024',
      revisionType: 'Eksternrevisjon'
    },
    {
      id: 'pos-4',
      questionNumber: '1.4.1',
      questionText: 'Følger du gjeldende regelverk og bruksbegrensninger for slike materialer?',
      positiveText: 'Meget god oversikt over alle regelverk. Gården har etablert gode rutiner for å holde seg oppdatert på endringer i forskrifter.',
      type: 'positive' as const,
      date: '15. sep. 2024',
      revisionType: 'Eksternrevisjon'
    },
    {
      id: 'pos-5',
      questionNumber: '1.5.5',
      questionText: 'Oppbevares plantevernmidler forsvarlig (avlåst, merket, og iht. etikettkrav)?',
      positiveText: 'Plantevernmidler oppbevares på en eksemplarisk måte i et eget avlåst rom med god ventilasjon. All merking er korrekt og tydelig.',
      type: 'positive' as const,
      date: '15. sep. 2024',
      revisionType: 'Eksternrevisjon'
    },
    {
      id: 'pos-6',
      questionNumber: '1.6.1',
      questionText: 'Følger du opplysningsplikten for meldepliktige skadegjørere og floghavre?',
      positiveText: 'Gården har gode rutiner for overvåking av skadegjørere og rapporterer raskt ved mistanke. Dette er viktig for å forhindre spredning.',
      type: 'positive' as const,
      date: '15. sep. 2024',
      revisionType: 'Eksternrevisjon'
    }
  ];

  // External audit history - Same as in Revisjonhistorikk og rapporter
  const externalAuditHistory: AuditCardData[] = [
    {
      id: 'hist-2026',
      ordning: 'KSL',
      status: 'rapport-editerbar',
      revisjonDato: 'Torsdag 30. januar 2025',
      rapportLastDato: 'Torsdag 13. februar 2025',
      produksjon: [
        { name: 'Korn', count: 245 },
        { name: 'Storfe', count: 87 }
      ],
      foretakName: 'Haugseter Gård',
      address: 'Haugseterveien 12, 2350 Nes på Hedmarken',
      kommune: 'Nes',
      avvikCount: 3,
      avvikOpen: 2,
      avvikClosed: 1,
      kortRapport: 'Revisjonen ble gjennomført den 30. januar 2026. Gården viste god etterlevelse av regelverket innenfor de fleste områder. Det ble identifisert ett kritisk avvik knyttet til gjødselplan og lagringskapasitet, samt to mindre avvik relatert til dokumentasjon. Oppfølging er planlagt gjennom fysisk besøk og dokumentasjon.',
      deviations: [
        {
          id: 'dev-1',
          severity: 'kritisk',
          question: '1.2.1 – Har du en gyldig gjødslingsplan og skiftekart for året?',
          mangel: 'Gjødslingsplanen for 2026 var ikke oppdatert med de nye arealene som ble tatt i bruk i fjor høst. Skiftekartet manglet også registrering av 15 dekar nytt kornområde.',
          status: 'lukket',
          deadline: 'Tirsdag 25. mars 2026'
        },
        {
          id: 'dev-2',
          severity: 'lite-avvik',
          question: '1.3.6 – Har du nok lagringskapasitet (min. 8 måneder)?',
          mangel: 'Beregninger viste at lagringskapasiteten kun dekker 7,2 måneder basert på gjeldende dyretall. Kravet er minimum 8 måneder.',
          status: 'lukket',
          deadline: 'Lørdag 5. april 2026'
        },
        {
          id: 'dev-3',
          severity: 'avvik',
          question: '2.1.3 – Er produksjonsregistreringene oppdatert og korrekte?',
          mangel: 'Det manglet registreringer for 3 måneder i 2025. Registreringene for september, oktober og november var ikke ført inn i systemet.',
          status: 'lukket',
          deadline: 'Torsdag 13. mars 2026'
        }
      ]
    },
    {
      id: 'hist-2024',
      ordning: 'KSL',
      status: 'rapport-last',
      revisjonDato: 'Onsdag 15. mars 2024',
      rapportLastDato: 'Onsdag 29. mars 2024',
      produksjon: [
        { name: 'Korn', count: 238 },
        { name: 'Storfe', count: 82 }
      ],
      foretakName: 'Haugseter Gård',
      address: 'Haugseterveien 12, 2350 Nes på Hedmarken',
      kommune: 'Nes',
      avvikCount: 2,
      avvikOpen: 0,
      avvikClosed: 2,
      kortRapport: 'Revisjonen ble gjennomført i mars 2024. To mindre avvik knyttet til dokumentasjon ble identifisert og lukket før fristen. Gården viste generelt god etterlevelse av regelverket.',
      deviations: [
        {
          id: 'dev-4',
          severity: 'lite-avvik',
          question: '1.4.2 – Er registreringene for sprøytemidler komplette?',
          mangel: 'Spredejournalen for våren 2024 manglet dokumentasjon for to behandlinger i mai måned. Riktig produkt var oppgitt, men tidspunkt og dosering var ikke registrert.',
          status: 'lukket',
          deadline: 'Mandag 25. mars 2024'
        },
        {
          id: 'dev-5',
          severity: 'lite-avvik',
          question: '2.3.1 – Er kalibreringsdokumentasjon for utstyr oppdatert?',
          mangel: 'Siste kalibrering av sprøyteutstyr ble utført i 2022. Kravet er årlig kalibrering, så dokumentasjonen for 2023 manglet.',
          status: 'lukket',
          deadline: 'Onsdag 27. mars 2024'
        }
      ]
    },
    {
      id: 'hist-2023',
      ordning: 'KSL',
      status: 'rapport-last',
      revisjonDato: 'Tirsdag 10. januar 2023',
      rapportLastDato: 'Tirsdag 24. januar 2023',
      produksjon: [
        { name: 'Korn', count: 220 },
        { name: 'Storfe', count: 75 }
      ],
      foretakName: 'Haugseter Gård',
      address: 'Haugseterveien 12, 2350 Nes på Hedmarken',
      kommune: 'Nes',
      avvikCount: 0,
      avvikOpen: 0,
      avvikClosed: 0,
      kortRapport: 'Revisjonen ble gjennomført i januar 2023. Ingen avvik ble identifisert. Gården viste god etterlevelse av alle kravpunkter i regelverket.',
      deviations: []
    }
  ];

  // Internal audit history (Egenrevisjoner) - Same as in Revisjonhistorikk og rapporter
  const internalAuditHistory: AuditCardData[] = [
    {
      id: 'egen-2025',
      ordning: 'LokalMat',
      status: 'rapport-last',
      revisjonDato: 'Mandag 15. desember 2025',
      rapportLastDato: 'Mandag 29. desember 2025',
      produksjon: [
        { name: 'Korn', count: 245 },
        { name: 'Storfe', count: 87 }
      ],
      foretakName: 'Haugseter Gård',
      address: 'Haugseterveien 12, 2350 Nes på Hedmarken',
      kommune: 'Nes',
      avvikCount: 1,
      avvikOpen: 1,
      avvikClosed: 0,
      kortRapport: 'Egenrevisjon gjennomført i desember 2025. Ett avvik ble identifisert og er under behandling.',
      deviations: [
        {
          id: 'egen-dev-1',
          severity: 'avvik',
          question: '1.1.4 – Er planteverndokumentasjonen fullstendig?',
          mangel: 'Dokumentasjonen for behandling med soppmiddel i september manglet. Det var ikke registrert dosering eller værforhold for sprøytingen.',
          status: 'apent',
          deadline: 'Fredag 20. desember 2025'
        }
      ]
    },
    {
      id: 'egen-2024-2',
      ordning: 'Spesialitet',
      status: 'rapport-last',
      revisjonDato: 'Torsdag 20. juni 2024',
      rapportLastDato: 'Torsdag 4. juli 2024',
      produksjon: [
        { name: 'Korn', count: 238 },
        { name: 'Storfe', count: 82 }
      ],
      foretakName: 'Haugseter Gård',
      address: 'Haugseterveien 12, 2350 Nes på Hedmarken',
      kommune: 'Nes',
      avvikCount: 3,
      avvikOpen: 0,
      avvikClosed: 3,
      kortRapport: 'Egenrevisjon gjennomført i juni 2024. Tre avvik ble identifisert og håndtert før ekstern revisjon.',
      deviations: [
        {
          id: 'egen-dev-2',
          severity: 'avvik',
          question: '1.1.2 – Er alle dyrehelsekort oppdatert?',
          mangel: 'To dyrehelsekort for kalver født i mars manglet oppføring av vaccinasjonsdato. Dokumentene var ellers komplette.',
          status: 'lukket',
          deadline: 'Mandag 1. juli 2024'
        },
        {
          id: 'egen-dev-3',
          severity: 'avvik',
          question: '2.2.1 – Er lagerbeholdningen korrekt registrert?',
          mangel: 'Lagertelling i april viste avvik mellom registrert og faktisk beholdning av mineralfôr. Differansen var på 3 sekker.',
          status: 'lukket',
          deadline: 'Onsdag 3. juli 2024'
        },
        {
          id: 'egen-dev-4',
          severity: 'avvik',
          question: '1.3.5 – Er gjødsellagerets kapasitet dokumentert?',
          mangel: 'Dokumentasjon av gjødsellagerets totale volum manglet. Kun bredde og lengde var oppgitt, men ikke dybde.',
          status: 'lukket',
          deadline: 'Tirsdag 2. juli 2024'
        }
      ]
    },
    {
      id: 'egen-2024-1',
      ordning: 'KSL',
      status: 'rapport-last',
      revisjonDato: 'Mandag 8. januar 2024',
      rapportLastDato: 'Mandag 22. januar 2024',
      produksjon: [
        { name: 'Korn', count: 230 },
        { name: 'Storfe', count: 80 }
      ],
      foretakName: 'Haugseter Gård',
      address: 'Haugseterveien 12, 2350 Nes på Hedmarken',
      kommune: 'Nes',
      avvikCount: 2,
      avvikOpen: 0,
      avvikClosed: 2,
      kortRapport: 'Egenrevisjon gjennomført i januar 2024. To avvik ble identifisert og lukket før frist.',
      deviations: [
        {
          id: 'egen-dev-5',
          severity: 'avvik',
          question: '1.4.3 – Er sikkerhetsdatablad tilgjengelig for alle kjemikalier?',
          mangel: 'Sikkerhetsdatablad for desinfeksjonsmiddel brukt i fjøset var ikke tilgjengelig ved kontrollpunktet. Produktet var merket men ikke dokumentert.',
          status: 'lukket',
          deadline: 'Fredag 19. januar 2024'
        },
        {
          id: 'egen-dev-6',
          severity: 'avvik',
          question: '2.1.5 – Er maskiner og utstyr jevnlig vedlikeholdt?',
          mangel: 'Servicelogg for traktoren viste at årlig service ikke ble utført i 2023. Siste registrerte service var fra januar 2022.',
          status: 'lukket',
          deadline: 'Lørdag 20. januar 2024'
        }
      ]
    },
    {
      id: 'egen-2023',
      ordning: 'LokalMat',
      status: 'rapport-last',
      revisjonDato: 'Onsdag 10. mai 2023',
      rapportLastDato: 'Onsdag 24. mai 2023',
      produksjon: [
        { name: 'Korn', count: 220 },
        { name: 'Storfe', count: 75 }
      ],
      foretakName: 'Haugseter Gård',
      address: 'Haugseterveien 12, 2350 Nes på Hedmarken',
      kommune: 'Nes',
      avvikCount: 0,
      avvikOpen: 0,
      avvikClosed: 0,
      kortRapport: 'Egenrevisjon gjennomført i mai 2023. Alle kravpunkter var i orden.',
      deviations: []
    }
  ];

  // Combined avvik from both external and internal revisions for the "Tidligere avvik" tab
  // Extract all avvik from external audit history
  const externalAvvik = externalAuditHistory.flatMap(audit => 
    audit.deviations?.map(dev => ({
      id: `ext-${dev.id}`,
      severity: dev.severity === 'kritisk' ? 'kritisk' as const :
                dev.severity === 'lite-avvik' ? 'lite' as const :
                'avvik' as const,
      questionNumber: dev.question.split('–')[0].trim(),
      questionText: dev.question.split('–')[1]?.trim() || dev.question,
      status: dev.status === 'lukket' ? 'lukket' as const : 'apent' as const,
      source: 'ekstern' as const,
      revisionDate: audit.revisjonDato
    })) || []
  );

  // Extract all avvik from internal audit history
  const internalAvvik = internalAuditHistory.flatMap(audit => 
    audit.deviations?.map(dev => ({
      id: `int-${dev.id}`,
      severity: dev.severity === 'kritisk' ? 'kritisk' as const :
                dev.severity === 'lite-avvik' ? 'lite' as const :
                'avvik' as const,
      questionNumber: dev.question.split('–')[0].trim(),
      questionText: dev.question.split('–')[1]?.trim() || dev.question,
      status: dev.status === 'lukket' ? 'lukket' as const : 'apent' as const,
      source: 'egen' as const,
      revisionDate: audit.revisjonDato
    })) || []
  );

  // Extract avvik from previous external audits that are still open (not closed by revisor)
  // Check if the avvik has been closed by checking questionData
  const stillOpenPreviousAvvik = previousAvvikData
    .filter(avvik => {
      const questionInfo = questionData[avvik.questionId];
      // Include the avvik if it hasn't been closed (closedPreviousAvvikId doesn't match)
      return questionInfo?.closedPreviousAvvikId !== avvik.id;
    })
    .map(avvik => ({
      id: avvik.id,
      severity: avvik.severity,
      questionNumber: avvik.questionId,
      questionText: avvik.checklist.split('–')[1]?.trim() || avvik.checklist,
      status: avvik.status === 'lukket' ? 'lukket' as const : 'apent' as const,
      source: 'ekstern' as const,
      revisionDate: avvik.auditDate || 'Tidligere revisjon',
      // Pass through all the detailed avvik information
      fullAvvikData: avvik
    }));

  // Combine all avvik
  const combinedPreviousAvvik = [...stillOpenPreviousAvvik, ...externalAvvik, ...internalAvvik];
  
  // Step 2: Svaroversikt
  const [answerOverviewConfirmed, setAnswerOverviewConfirmed] = useState(false);
  const [svaroversiktInitialFilter, setSvaroversiktInitialFilter] = useState<'all' | 'ubesvarte' | 'ja' | 'nei' | 'forbedring' | 'positive' | 'ikke-relevant' | undefined>(undefined);
  
  // Step 3: Avvikshåndtering - Persistent state
  const [deviationHandlingNotes, setDeviationHandlingNotes] = useState('');
  const [isAvvikshandteringComplete, setIsAvvikshandteringComplete] = useState(false);
  const [avvikHasAgreed, setAvvikHasAgreed] = useState(false);
  const [avvikIsLocked, setAvvikIsLocked] = useState(false);
  const [avvikClosureData, setAvvikClosureData] = useState<Record<string, any>>({});
  
  // Step 4: Hovedkonklusjon
  const [mainConclusion, setMainConclusion] = useState('');
  const [presentAtRevision, setPresentAtRevision] = useState('');
  const [revisionDuration, setRevisionDuration] = useState('');
  const [implementationDescription, setImplementationDescription] = useState('');
  const [checklistItems, setChecklistItems] = useState({
    oppstartsmote: false,
    dokumentgjennomgang: false,
    egenrevisjon: false,
    kvalitetssystem: false,
    stikkprover: false,
    oppsummering: false
  });

  const steps = [
    { id: 0, label: 'Informasjon om foretaket', required: true },
    { id: 1, label: 'Tidligere revisjon', required: true },
    { id: 2, label: 'Svaroversikt', required: false },
    { id: 3, label: 'Avvikshåndtering', required: false },
    { id: 4, label: 'Hovedkonklusjon', required: true }
  ];

  // Update selected question/deviation when tab changes
  useEffect(() => {
    if (previousRevisionTab === 'avvik') {
      // Handled by PreviousAvvikTable component
      setSelectedPreviousQuestion(null);
      setSelectedExternalDeviation(null);
    } else if (previousRevisionTab === 'ekstern') {
      if (externalRevisionDeviations.length > 0) {
        setSelectedExternalDeviation(externalRevisionDeviations[0].id);
      } else {
        setSelectedExternalDeviation(null);
      }
      setSelectedPreviousQuestion(null);
    } else if (previousRevisionTab === 'egen' || previousRevisionTab === 'forbedring' || previousRevisionTab === 'positive') {
      if (previousRevisionData[previousRevisionTab].length > 0) {
        setSelectedPreviousQuestion(previousRevisionData[previousRevisionTab][0].id);
      } else {
        setSelectedPreviousQuestion(null);
      }
      setSelectedExternalDeviation(null);
    } else {
      setSelectedPreviousQuestion(null);
      setSelectedExternalDeviation(null);
    }
  }, [previousRevisionTab]);

  // Click outside sidebar to collapse it
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Only collapse if sidebar is expanded
      if (!isSidebarCollapsed && sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
        setIsSidebarCollapsed(true);
      }
    };

    // Add event listener
    document.addEventListener('mousedown', handleClickOutside);

    // Cleanup
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isSidebarCollapsed]);

  // Check if a step is completed based on its required fields
  const isStepComplete = (stepId: number): boolean => {
    switch (stepId) {
      case 0: // Informasjon om foretaket - REQUIRED
        return aboutCompanyText.trim() !== '';
      case 1: // Tidligere revisjon - REQUIRED
        return previousRevisionNotes.trim() !== '';
      case 2: // Svaroversikt - OPTIONAL (but if doing it, checkbox must be confirmed)
        return answerOverviewConfirmed;
      case 3: // Avvikshåndtering - OPTIONAL (but requires locked + all complete)
        return isAvvikshandteringComplete;
      case 4: // Hovedkonklusjon - REQUIRED
        const anyChecklistChecked = Object.values(checklistItems).some(item => item === true);
        return mainConclusion.trim() !== '' && 
               presentAtRevision.trim() !== '' && 
               revisionDuration.trim() !== '' && 
               implementationDescription.trim() !== '' &&
               anyChecklistChecked;
      default:
        return false;
    }
  };

  const productionData = [
    { type: 'Sau', volume: '120' },
    { type: 'Korn, frø, olje- og belgvekster', volume: '0' },
    { type: 'Grovfôr', volume: '0' },
    { type: 'Storfe', volume: '5' },
    { type: 'Geit', volume: '40' }
  ];

  const handleEditAddress = () => {
    setIsEditingAddress(true);
    setTempAddress(address);
  };

  const handleSaveAddress = () => {
    setAddress(tempAddress);
    setIsEditingAddress(false);
  };

  const isReportComplete = () => {
    // Check if all steps are complete (both required and optional ones that have been started)
    return steps.every(step => isStepComplete(step.id));
  };

  const handleStepClick = (stepId: number) => {
    setCurrentStep(stepId);
    setShowingMenu(false);
  };

  const handleBackToMenu = () => {
    setShowingMenu(true);
  };

  const handleContentClick = () => {
    // Collapse sidebar when user clicks in content area (desktop only)
    if (window.innerWidth >= 1400 && !isSidebarCollapsed) {
      setIsSidebarCollapsed(true);
    }
  };

  return (
    <div className="basis-0 content-stretch flex grow h-full items-start min-h-px min-w-px relative shrink-0 w-full overflow-hidden" data-name="write report">
      {/* MOBILE/TABLET: Steps Menu - Shows ONLY when showingMenu is true */}
      {showingMenu && (
        <div className="min-[1400px]:hidden w-full h-full box-border content-stretch flex flex-col gap-[8px] items-start overflow-x-clip overflow-y-auto p-[16px] bg-background" data-name="Report steps mobile">
          {steps.map((step) => {
            const isComplete = isStepComplete(step.id);
            const isActive = currentStep === step.id;
            
            return (
              <div
                key={step.id}
                onClick={() => handleStepClick(step.id)}
                className={`${
                  isActive ? 'bg-[#dae2ff]' : 'bg-white'
                } box-border content-stretch cursor-pointer flex gap-[16px] items-center min-h-[64px] px-0 py-[8px] relative rounded-[12px] shrink-0 w-full ${
                  !isActive && 'hover:bg-[#f4f4ea]'
                } transition-colors`}
                data-name="checklist Question"
              >
                <div className="basis-0 grow h-[64px] min-h-px min-w-px relative shrink-0">
                  <div className="flex flex-col justify-center size-full">
                    <div className="box-border content-stretch flex flex-col gap-[8px] h-[64px] items-start justify-center px-[8px] py-0 relative w-full">
                      <div className="content-stretch flex flex-col h-[72px] items-center justify-center min-h-[56px] relative shrink-0 w-full" data-name="List item/List Item: 0 Density">
                        <div className="absolute inset-0" data-name="state-layer overlay" />
                        <div className="basis-0 box-border content-stretch flex gap-[16px] grow items-center min-h-px min-w-px px-0 py-[8px] relative shrink-0 w-full" data-name="state-layer">
                          <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0" data-name="Leading element">
                            <div className="bg-[#eff1e7] overflow-clip relative rounded-[100px] shrink-0 size-[40px]" data-name=".Building Blocks/Monogram">
                              <div className="absolute body-large left-1/2 size-[40px] text-[#284000] text-center top-1/2 translate-x-[-50%] translate-y-[-50%] flex items-center justify-center">
                                <p className="m-0">{step.id + 1}</p>
                              </div>
                            </div>
                          </div>
                          <div className={`basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0 ${
                            isComplete ? 'leading-[0] tracking-[0.5px]' : ''
                          }`} data-name="Content">
                            {isComplete && (
                              <div className="label-small text-muted-foreground w-full">
                                <p className="m-0">Fullført</p>
                              </div>
                            )}
                            <div className={`body-large w-full ${
                              isActive ? 'text-secondary-container-foreground' : 'text-foreground'
                            }`}>
                              <p className="m-0">{step.label}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          {/* Lock report button */}
          <div className="relative shrink-0 w-full" data-name="Summary">
            <div className="size-full">
              <div className="box-border content-stretch flex flex-col items-start px-[16px] py-[24px] relative w-full">
                <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
                  <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Button">
                    <button
                      disabled={!isReportComplete() || reportLocked}
                      onClick={() => {
                        if (isReportComplete() && !reportLocked && onLockReport) {
                          onLockReport();
                        }
                      }}
                      className={`content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0 transition-all ${
                        isReportComplete() && !reportLocked
                          ? 'bg-[#4a671e] hover:bg-[#3d5618] cursor-pointer shadow-sm' 
                          : 'bg-[rgba(26,28,22,0.12)] cursor-not-allowed'
                      }`}
                      data-name="Content"
                    >
                      <div className="box-border content-stretch flex gap-[8px] items-center justify-center px-[24px] py-[16px] relative shrink-0" data-name="State-layer">
                        <div className="relative shrink-0 size-[24px]" data-name="Icon">
                          <div className="absolute inset-0 overflow-clip" data-name="lock">
                            <div className="absolute inset-[6.25%_16.67%]" data-name="Vector">
                              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 21">
                                <path d={svgPaths.p29f40100} fill="white" id="Vector" />
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div className="body-large text-white">
                          <p className="m-0 whitespace-pre">{reportLocked ? 'Rapport låst' : 'Lås rapport'}</p>
                        </div>
                      </div>
                    </button>
                  </div>
                  {!isReportComplete() && !reportLocked && (
                    <div className="body-medium text-muted-foreground">
                      <p className="m-0">Rapporten inneholder ufullstendige deler</p>
                    </div>
                  )}
                  {reportLocked && (
                    <div className="body-medium text-primary">
                      <p className="m-0">Rapporten er låst. Se avvik under fanen "Avvik"</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* DESKTOP: Left sidebar - Steps - Always visible */}
      <div 
        ref={sidebarRef}
        className={`max-[1400px]:hidden box-border content-stretch flex flex-col gap-[8px] h-full items-start overflow-x-clip overflow-y-auto p-[16px] relative shrink-0 z-[3] transition-all ${isSidebarCollapsed ? 'w-[88px] cursor-pointer' : 'w-[392px]'}`} 
        data-name="Report steps"
        onClick={() => {
          if (isSidebarCollapsed) {
            setIsSidebarCollapsed(false);
          }
        }}
      >
        {/* Toggle button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsSidebarCollapsed(!isSidebarCollapsed);
          }}
          className={`flex items-center gap-2 px-2 py-2 label-medium text-foreground hover:bg-muted rounded-[var(--radius)] transition-colors w-full mb-2 ${isSidebarCollapsed ? 'justify-center' : ''}`}
        >
          {isSidebarCollapsed ? (
            <ChevronRight className="w-5 h-5" />
          ) : (
            <>
              <ChevronLeft className="w-5 h-5" />
              <span>Skjul rapportseksjoner</span>
            </>
          )}
        </button>
        {steps.map((step) => {
          const isComplete = isStepComplete(step.id);
          const isActive = currentStep === step.id;
          
          return (
            <div
              key={step.id}
              onClick={(e) => {
                e.stopPropagation();
                setCurrentStep(step.id);
              }}
              className={`${
                isActive ? 'bg-[#dae2ff]' : 'bg-white'
              } box-border content-stretch cursor-pointer flex gap-[16px] items-center ${isSidebarCollapsed ? 'min-h-[56px]' : 'min-h-[64px]'} px-0 py-[8px] relative rounded-[12px] shrink-0 w-full ${
                !isActive && 'hover:bg-[#f4f4ea]'
              } transition-colors`}
              data-name="checklist Question"
            >
              {isSidebarCollapsed ? (
                /* Collapsed view - Only number */
                <div className="flex items-center justify-center w-full">
                  <div className="bg-[#eff1e7] overflow-clip relative rounded-[100px] shrink-0 size-[40px]">
                    <div className="absolute body-large left-1/2 size-[40px] text-[#284000] text-center top-1/2 translate-x-[-50%] translate-y-[-50%] flex items-center justify-center">
                      <p className="m-0">{step.id + 1}</p>
                    </div>
                  </div>
                </div>
              ) : (
                /* Expanded view - Number + Labels */
                <div className="basis-0 grow h-[64px] min-h-px min-w-px relative shrink-0">
                  <div className="flex flex-col justify-center size-full">
                    <div className="box-border content-stretch flex flex-col gap-[8px] h-[64px] items-start justify-center px-[8px] py-0 relative w-full">
                      <div className="content-stretch flex flex-col h-[72px] items-center justify-center min-h-[56px] relative shrink-0 w-full" data-name="List item/List Item: 0 Density">
                        <div className="absolute inset-0" data-name="state-layer overlay" />
                        <div className="basis-0 box-border content-stretch flex gap-[16px] grow items-center min-h-px min-w-px px-0 py-[8px] relative shrink-0 w-full" data-name="state-layer">
                          <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0" data-name="Leading element">
                            <div className="bg-[#eff1e7] overflow-clip relative rounded-[100px] shrink-0 size-[40px]" data-name=".Building Blocks/Monogram">
                              <div className="absolute body-large left-1/2 size-[40px] text-[#284000] text-center top-1/2 translate-x-[-50%] translate-y-[-50%] flex items-center justify-center">
                                <p className="m-0">{step.id + 1}</p>
                              </div>
                            </div>
                          </div>
                          <div className={`basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0 ${
                            isComplete ? 'leading-[0] tracking-[0.5px]' : ''
                          }`} data-name="Content">
                            {isComplete && (
                              <div className="label-small text-muted-foreground w-full">
                                <p className="m-0">Fullført</p>
                              </div>
                            )}
                            <div className={`body-large w-full ${
                              isActive ? 'text-secondary-container-foreground' : 'text-foreground'
                            }`}>
                              <p className="m-0">{step.label}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}

        {/* Lock report button - Hide when collapsed */}
        {!isSidebarCollapsed && (
          <div className="relative shrink-0 w-full" data-name="Summary">
            <div className="size-full">
              <div className="box-border content-stretch flex flex-col items-start px-[16px] py-[24px] relative w-full">
                <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
                  <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Button">
                    <button
                      disabled={!isReportComplete() || reportLocked}
                      onClick={() => {
                        if (isReportComplete() && !reportLocked && onLockReport) {
                          onLockReport();
                        }
                      }}
                      className={`content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0 transition-all ${
                        isReportComplete() && !reportLocked
                          ? 'bg-[#4a671e] hover:bg-[#3d5618] cursor-pointer shadow-sm' 
                          : 'bg-[rgba(26,28,22,0.12)] cursor-not-allowed'
                      }`}
                      data-name="Content"
                    >
                      <div className="box-border content-stretch flex gap-[8px] items-center justify-center px-[24px] py-[16px] relative shrink-0" data-name="State-layer">
                        <div className="relative shrink-0 size-[24px]" data-name="Icon">
                          <div className="absolute inset-0 overflow-clip" data-name="lock">
                            <div className="absolute inset-[6.25%_16.67%]" data-name="Vector">
                              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 21">
                                <path d={svgPaths.p29f40100} fill="white" id="Vector" />
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div className="body-large text-white">
                          <p className="m-0 whitespace-pre">{reportLocked ? 'Rapport låst' : 'Lås rapport'}</p>
                        </div>
                      </div>
                    </button>
                  </div>
                  {!isReportComplete() && !reportLocked && (
                    <div className="body-medium text-muted-foreground">
                      <p className="m-0">Rapporten inneholder ufullstendige deler</p>
                    </div>
                  )}
                  {reportLocked && (
                    <div className="body-medium text-primary">
                      <p className="m-0">Rapporten er låst. Se avvik under fanen "Avvik"</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Vertical divider - Desktop only */}
      <div className="max-[1400px]:hidden h-full w-px shrink-0 z-[2]" style={{ backgroundColor: 'var(--border)' }} data-name="Vertical divider" />

      {/* MOBILE/TABLET & DESKTOP: Content area */}
      <div 
        className={`content-stretch flex flex-col h-full items-start relative shrink-0 flex-1 z-[1] overflow-y-auto ${
          showingMenu ? 'max-[1400px]:hidden' : 'max-[1400px]:flex max-[1400px]:w-full'
        } min-[1400px]:flex`} 
        data-name="Content area"
        onClick={handleContentClick}
      >
        {/* Back button for mobile/tablet */}
        {!showingMenu && currentStep !== null && (
          <div className="px-6 pt-4 pb-2 min-[1400px]:hidden">
            <button
              onClick={handleBackToMenu}
              className="flex items-center gap-2 label-large text-foreground hover:opacity-70 transition-opacity"
              aria-label="Tilbake til meny"
            >
              <ChevronLeft className="w-5 h-5" />
              Tilbake
            </button>
          </div>
        )}

        {currentStep === 0 && (
          <div className="content-stretch flex flex-col items-start relative size-full" data-name="About producer">
            <div className="relative shrink-0 w-full" data-name="Heading">
              <div className="flex flex-col size-full">
                <div className="box-border content-stretch flex flex-col gap-[16px] items-start px-[40px] max-[1400px]:px-6 pt-[12px] pb-[24px] relative w-full">
                  {/* Heading with Navigation Buttons */}
                  <div className="flex items-center justify-between w-full h-[48px] max-[1400px]:hidden">
                    <div className="title-large text-foreground">
                      <p className="m-0">Informasjon om foretaket</p>
                    </div>
                    
                    {/* Navigation buttons - always enabled */}
                    <div className="flex items-center gap-4">
                      <Button
                        variant={isStepComplete(0) ? "primary" : "tertiary"}
                        onClick={() => setCurrentStep(1)}
                        className="flex items-center gap-2"
                      >
                        <span>Neste</span>
                        <ChevronLeft className="w-5 h-5 rotate-180" />
                      </Button>
                    </div>
                  </div>

                  {/* Om foretaket field */}
                  <div className="box-border content-stretch flex flex-col gap-[8px] items-start justify-center max-w-[600px] min-h-[64px] pb-0 pt-[8px] px-0 relative shrink-0 w-full" data-name="App User Input">
                    <OmForetaketInput
                      value={aboutCompanyText}
                      onChange={setAboutCompanyText}
                    />
                  </div>

                  {/* Revisjonssted field */}
                  <div className="box-border content-stretch flex flex-col gap-[8px] items-start justify-center max-w-[600px] min-h-[64px] pb-0 pt-[8px] px-0 relative shrink-0 w-full" data-name="App User Input">
                  {isEditingAddress ? (
                    <div className="relative shrink-0 w-full">
                      <div className="size-full">
                        <div className="box-border content-stretch flex gap-[16px] items-start p-[8px] relative w-full">
                          <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Leading element">
                            <div className="relative shrink-0 size-[24px]" data-name="pin_drop">
                              <div className="absolute inset-0 overflow-clip" data-name="pin_drop">
                                <div className="absolute inset-[8.33%_20.83%]" data-name="Vector">
                                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 20">
                                    <g id="Vector">
                                      <path d={svgPaths.p20955040} fill="#44483B" />
                                      <path d={svgPaths.p24454800} fill="#44483B" />
                                    </g>
                                  </svg>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="basis-0 content-stretch flex flex-col grow items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
                            <div className="label-small text-muted-foreground w-full mb-2">
                              <p className="m-0">Revisjonssted</p>
                            </div>
                            <input
                              type="text"
                              value={tempAddress.street}
                              onChange={(e) => setTempAddress({ ...tempAddress, street: e.target.value })}
                              className="w-full px-3 py-2 mb-2 border-2 border-primary rounded-[8px] body-large text-foreground focus:outline-none focus:border-primary"
                            />
                            <input
                              type="text"
                              value={tempAddress.postalCode}
                              onChange={(e) => setTempAddress({ ...tempAddress, postalCode: e.target.value })}
                              className="w-full px-3 py-2 border-2 border-primary rounded-[8px] body-large text-foreground focus:outline-none focus:border-primary"
                            />
                          </div>
                          <div className="content-stretch flex items-center justify-center relative shrink-0 size-[48px]" data-name="Icon button">
                            <div
                              onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                handleSaveAddress();
                              }}
                              className="content-stretch cursor-pointer flex flex-col items-center justify-center overflow-clip relative rounded-[100px] shrink-0 w-[28px] hover:bg-[#eff1e7] transition-colors"
                              data-name="Content"
                            >
                              <div className="content-stretch flex h-[32px] items-center justify-center relative shrink-0 w-full" data-name="State-layer">
                                <div className="relative shrink-0 size-[20px]" data-name="Icon">
                                  <div className="absolute inset-[16.667%]">
                                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                                      <path d="M16.667 5L7.5 14.167L3.333 10" stroke="#44483B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                                    </svg>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="relative shrink-0 w-full">
                      <div className="size-full">
                        <div className="box-border content-stretch flex gap-[16px] items-start p-[8px] relative w-full">
                          <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Leading element">
                            <div className="relative shrink-0 size-[24px]" data-name="pin_drop">
                              <div className="absolute inset-0 overflow-clip" data-name="pin_drop">
                                <div className="absolute inset-[8.33%_20.83%]" data-name="Vector">
                                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 20">
                                    <g id="Vector">
                                      <path d={svgPaths.p20955040} fill="#44483B" />
                                      <path d={svgPaths.p24454800} fill="#44483B" />
                                    </g>
                                  </svg>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="basis-0 content-stretch flex flex-col grow items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
                            <div className="label-small text-muted-foreground w-full">
                              <p className="m-0">Revisjonssted</p>
                            </div>
                            <div className="body-large text-foreground w-full">
                              <p className="mb-0">{address.street}</p>
                              <p className="m-0">{address.postalCode}</p>
                            </div>
                          </div>
                          <div className="content-stretch flex items-center justify-center relative shrink-0 size-[48px]" data-name="Icon button">
                            <div
                              onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                handleEditAddress();
                              }}
                              className="content-stretch cursor-pointer flex flex-col items-center justify-center overflow-clip relative rounded-[100px] shrink-0 w-[28px] hover:bg-[#eff1e7] transition-colors"
                              data-name="Content"
                            >
                              <div className="content-stretch flex h-[32px] items-center justify-center relative shrink-0 w-full" data-name="State-layer">
                                <div className="relative shrink-0 size-[20px]" data-name="Icon">
                                  <div className="absolute inset-0 overflow-clip" data-name="edit">
                                    <div className="absolute inset-[12.5%_12.49%]" data-name="Vector">
                                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
                                        <path d={svgPaths.p25003780} fill="#44483B" id="Vector" />
                                      </svg>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  </div>
                </div>
              </div>
            </div>

            {/* Horizontal Divider */}
            <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Horizontal/Full-width">
              <div className="h-0 relative shrink-0 w-full" data-name="Divider">
                <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1111 1">
                    <line stroke="var(--border)" x2="1111" y1="0.5" y2="0.5" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Production table */}
            <div className="flex-1 overflow-auto relative w-full">
              <table className="w-full table-fixed">
                <thead className="bg-surface-container-low sticky top-0 z-10">
                  <tr className="border-b border-border">
                    <th className="px-10 py-2 text-left bg-surface-container-low w-1/2">
                      <span className="label-medium text-foreground">Produksjon</span>
                    </th>
                    <th className="px-4 py-2 text-left bg-surface-container-low w-1/2">
                      <span className="label-medium text-foreground">Volum importert fra LDIR</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {productionData.map((item, index) => (
                    <tr key={index} className="border-b border-border transition-colors hover:bg-muted">
                      <td className="px-10 py-3">
                        <span className="body-medium text-foreground">{item.type}</span>
                      </td>
                      <td className="px-4 py-3">
                        <span className="body-medium text-foreground">{item.volume}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {currentStep === 1 && (
          <div className="content-stretch flex flex-col items-start relative size-full" data-name="Previous revisions">
            {/* Heading section */}
            <div className="relative shrink-0 w-full" data-name="Heading">
              <div className="flex flex-col size-full">
                <div className="box-border content-stretch flex flex-col gap-[16px] items-start px-[40px] max-[1400px]:px-6 pt-[12px] pb-[24px] relative w-full">
                  {/* Page title with Navigation Buttons */}
                  <div className="flex items-center justify-between w-full h-[48px] max-[1400px]:hidden">
                    <div className="title-large text-foreground">
                      <p className="m-0">Tidligere revisjoner</p>
                    </div>
                    
                    {/* Navigation buttons - always enabled */}
                    <div className="flex items-center gap-4">
                      <Button
                        variant="tertiary"
                        onClick={() => setCurrentStep(0)}
                      >
                        Forrige
                      </Button>
                      <Button
                        variant={isStepComplete(1) ? "primary" : "tertiary"}
                        onClick={() => setCurrentStep(2)}
                        className="flex items-center gap-2"
                      >
                        <span>Neste</span>
                        <ChevronLeft className="w-5 h-5 rotate-180" />
                      </Button>
                    </div>
                  </div>

                  {/* Description text */}
                  <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                    <div className="body-large text-foreground w-full">
                      <p className="mb-0">Tabellen over åpne og lukkede avvik fra siste eksterne revisjon og egenrevisjon vises ikke i rapporten.</p>
                      <p>Åpne avvik fra egenrevisjon blir markert som lukket.</p>
                    </div>
                  </div>

                  {/* Oppfølging fra tidligere revisjoner field */}
                  <div className="box-border content-stretch flex flex-col gap-[8px] items-start justify-center max-w-[520px] min-h-[64px] pb-0 pt-[8px] px-0 relative shrink-0 w-full" data-name="App User Input">
                    <PreviousRevisionInput
                      value={previousRevisionNotes}
                      onChange={setPreviousRevisionNotes}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Tabs and table section */}
            <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0 w-full overflow-y-auto" data-name="Secondary info">
              {/* Tab navigation */}
              <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Tabs">
                <div className="relative shrink-0 w-full" data-name="Tab group">
                  <div className="size-full">
                    <div className="box-border content-stretch cursor-pointer flex items-start pl-[52px] pr-0 py-0 relative w-full">
                      {/* Tab 1: Tidligere avvik (NEW - First tab) */}
                      <button
                        onClick={() => setPreviousRevisionTab('avvik')}
                        className="bg-white content-stretch flex flex-col h-[48px] items-center justify-end overflow-clip relative shrink-0 hover:bg-muted transition-colors cursor-pointer"
                        data-name="Tab 1"
                      >
                        <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="State-layer">
                          <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
                            <div className="box-border content-stretch flex flex-col items-center justify-center px-[16px] py-[14px] relative size-full">
                              <div className="basis-0 content-stretch flex gap-[4px] grow items-center justify-center min-h-px min-w-px relative shrink-0" data-name="Tab Contents">
                                <div className={`label-medium text-center ${previousRevisionTab === 'avvik' ? 'text-foreground' : 'text-muted-foreground'}`}>
                                  <p className="m-0 whitespace-pre">Tidligere avvik</p>
                                </div>
                              </div>
                              {previousRevisionTab === 'avvik' && (
                                <div className="absolute bg-[#4a671e] bottom-0 h-[2px] left-0 right-0" data-name="Indicator" />
                              )}
                            </div>
                          </div>
                        </div>
                      </button>
                      {/* Tab 2: Ekstern revisjon (Empty placeholder) */}
                      <button
                        onClick={() => setPreviousRevisionTab('ekstern')}
                        className="bg-white content-stretch flex flex-col h-[48px] items-center justify-end overflow-clip relative shrink-0 hover:bg-muted transition-colors cursor-pointer"
                        data-name="Tab 2"
                      >
                        <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="State-layer">
                          <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
                            <div className="box-border content-stretch flex flex-col items-center justify-center px-[16px] py-[14px] relative size-full">
                              <div className="basis-0 content-stretch flex gap-[4px] grow items-center justify-center min-h-px min-w-px relative shrink-0" data-name="Tab Contents">
                                <div className={`label-medium text-center ${previousRevisionTab === 'ekstern' ? 'text-foreground' : 'text-muted-foreground'}`}>
                                  <p className="m-0 whitespace-pre">Eksterne revisjoner</p>
                                </div>
                              </div>
                              {previousRevisionTab === 'ekstern' && (
                                <div className="absolute bg-[#4a671e] bottom-0 h-[2px] left-0 right-0" data-name="Indicator" />
                              )}
                            </div>
                          </div>
                        </div>
                      </button>
                      {/* Tab 3: Egenrevisjon (Empty placeholder) */}
                      <button
                        onClick={() => setPreviousRevisionTab('egen')}
                        className="bg-white content-stretch flex flex-col h-[48px] items-center justify-end overflow-clip relative shrink-0 hover:bg-muted transition-colors cursor-pointer"
                        data-name="Tab 3"
                      >
                        <div className="basis-0 box-border content-stretch flex flex-col grow items-center justify-center min-h-px min-w-px overflow-clip px-[16px] py-[14px] relative shrink-0" data-name="State-layer">
                          <div className="basis-0 content-stretch flex gap-[4px] grow items-center justify-center min-h-px min-w-px relative shrink-0" data-name="Tab Contents">
                            <div className={`label-medium text-center ${previousRevisionTab === 'egen' ? 'text-foreground' : 'text-muted-foreground'}`}>
                              <p className="m-0 whitespace-pre">Egenrevisjoner</p>
                            </div>
                          </div>
                          {previousRevisionTab === 'egen' && (
                            <div className="absolute bg-[#4a671e] bottom-0 h-[2px] left-0 right-0" data-name="Indicator" />
                          )}
                        </div>
                      </button>
                      <button
                        onClick={() => setPreviousRevisionTab('forbedring')}
                        className="bg-white content-stretch flex flex-col h-[48px] items-center justify-end overflow-clip relative shrink-0 hover:bg-muted transition-colors cursor-pointer"
                        data-name="Tab 4"
                      >
                        <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="State-layer">
                          <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
                            <div className="box-border content-stretch flex flex-col items-center justify-center px-[16px] py-[14px] relative size-full">
                              <div className="basis-0 content-stretch flex gap-[4px] grow items-center justify-center min-h-px min-w-px relative shrink-0" data-name="Tab Contents">
                                <div className={`label-medium text-center ${previousRevisionTab === 'forbedring' ? 'text-foreground' : 'text-muted-foreground'}`}>
                                  <p className="m-0 whitespace-pre">Forbedringspunkter</p>
                                </div>
                              </div>
                              {previousRevisionTab === 'forbedring' && (
                                <div className="absolute bg-[#4a671e] bottom-0 h-[2px] left-0 right-0" data-name="Indicator" />
                              )}
                            </div>
                          </div>
                        </div>
                      </button>
                      <button
                        onClick={() => setPreviousRevisionTab('positive')}
                        className="bg-white content-stretch flex flex-col h-[48px] items-center justify-end overflow-clip relative shrink-0 hover:bg-muted transition-colors cursor-pointer"
                        data-name="Tab 5"
                      >
                        <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="State-layer">
                          <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
                            <div className="box-border content-stretch flex flex-col items-center justify-center px-[16px] py-[14px] relative size-full">
                              <div className="basis-0 content-stretch flex gap-[4px] grow items-center justify-center min-h-px min-w-px relative shrink-0" data-name="Tab Contents">
                                <div className={`label-medium text-center ${previousRevisionTab === 'positive' ? 'text-foreground' : 'text-muted-foreground'}`}>
                                  <p className="m-0 whitespace-pre">Positive observasjoner</p>
                                </div>
                              </div>
                              {previousRevisionTab === 'positive' && (
                                <div className="absolute bg-[#4a671e] bottom-0 h-[2px] left-0 right-0" data-name="Indicator" />
                              )}
                            </div>
                          </div>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Divider">
                  <div className="h-0 relative shrink-0 w-full" data-name="Divider">
                    <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1111 1">
                        <line stroke="rgba(227, 227, 217, 1)" x2="1111" y1="0.5" y2="0.5" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tab content - Table and Detail Panel */}
              <div className="flex h-full w-full overflow-hidden" data-name="Content">
                {/* Tidligere avvik tab - Combined avvik table */}
                {previousRevisionTab === 'avvik' && (
                  <PreviousAvvikTable deviations={combinedPreviousAvvik} />
                )}

                {/* Ekstern revisjon tab - Show external audit history cards */}
                {previousRevisionTab === 'ekstern' && (
                  <div className="flex-1 overflow-y-auto px-6 py-6">
                    <div className="flex flex-col gap-2">
                      {externalAuditHistory.map((audit) => (
                        <AuditCard
                          key={audit.id}
                          audit={audit}
                          showExpandButton={true}
                          defaultExpanded={false}
                          variant="external"
                        />
                      ))}
                    </div>
                  </div>
                )}

                {/* Egenrevisjon tab - Show internal audit history cards */}
                {previousRevisionTab === 'egen' && (
                  <div className="flex-1 overflow-y-auto px-6 py-6">
                    <div className="flex flex-col gap-2">
                      {internalAuditHistory.map((audit) => (
                        <AuditCard
                          key={audit.id}
                          audit={audit}
                          showExpandButton={true}
                          defaultExpanded={false}
                          variant="self"
                        />
                      ))}
                    </div>
                  </div>
                )}

                {/* Forbedringspunkter tab */}
                {previousRevisionTab === 'forbedring' && (
                  <PreviousRevisionImprovementPoints improvementPoints={improvementPointsData} />
                )}

                {/* Positive observasjoner tab */}
                {previousRevisionTab === 'positive' && (
                  <PreviousRevisionImprovementPoints improvementPoints={positiveObservationsData} />
                )}
              </div>
            </div>
          </div>
        )}

        {currentStep === 2 && (
          <SvaroversiktSection
            isConfirmed={answerOverviewConfirmed}
            onConfirmChange={setAnswerOverviewConfirmed}
            onNext={() => setCurrentStep(3)}
            onPrevious={() => setCurrentStep(1)}
            questionData={questionData}
            onAnswerQuestion={onAnswerQuestion}
            onUpdateQuestionData={onUpdateQuestionData}
            onNavigateToDocument={onNavigateToDocument}
            deviationsLocked={deviationsLocked}
            initialFilter={svaroversiktInitialFilter}
            onBottomSheetOpenChange={onBottomSheetOpenChange}
          />
        )}

        {currentStep === 3 && (
          <AvvikshandteringPage 
            questionData={questionData}
            onAnswerQuestion={onAnswerQuestion}
            onUpdateQuestionData={onUpdateQuestionData}
            onNavigateToDocument={onNavigateToDocument}
            onLockDeviations={onLockDeviations}
            onCompletionChange={setIsAvvikshandteringComplete}
            onNavigateToSvaroversikt={() => {
              setSvaroversiktInitialFilter('ubesvarte');
              setCurrentStep(2);
            }}
            onPrevious={() => setCurrentStep(2)}
            onNext={() => setCurrentStep(4)}
            hasAgreed={avvikHasAgreed}
            onHasAgreedChange={setAvvikHasAgreed}
            isLocked={avvikIsLocked}
            onIsLockedChange={setAvvikIsLocked}
            closureData={avvikClosureData}
            onClosureDataChange={setAvvikClosureData}
            onBottomSheetOpenChange={onBottomSheetOpenChange}
          />
        )}

        {currentStep === 4 && (
          <div className="flex-1 overflow-auto w-full">
            <div className="px-[40px] max-[1400px]:px-6 py-[12px] flex flex-col gap-4 w-full">
              {/* Title with Navigation Buttons */}
              <div className="flex items-center justify-between max-[1400px]:hidden">
                <h2 className="title-large text-foreground m-0">Hovedkonklusjon</h2>
                
                {/* Navigation buttons */}
                <div className="flex flex-col items-end gap-1">
                  <div className="flex items-center gap-4">
                    <Button
                      variant="tertiary"
                      onClick={() => setCurrentStep(3)}
                    >
                      Forrige
                    </Button>
                    <Button
                      variant={isReportComplete() && !reportLocked ? "primary" : "secondary"}
                      disabled={!isReportComplete() || reportLocked}
                      onClick={() => {
                        if (isReportComplete() && !reportLocked && onLockReport) {
                          onLockReport();
                        }
                      }}
                    >
                      {reportLocked ? 'Rapport låst' : 'Lås rapport'}
                    </Button>
                  </div>
                  {!isReportComplete() && !reportLocked && (
                    <div className="body-medium text-muted-foreground">
                      <p className="m-0">Rapporten inneholder ufullstendige deler</p>
                    </div>
                  )}
                  {reportLocked && (
                    <div className="body-medium text-primary">
                      <p className="m-0">Rapporten er låst. Se avvik under fanen "Avvik"</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Konklusjon fra revisjonen */}
              <div className="w-full">
                <ExpandableInput
                  label="Konklusjon fra revisjonen"
                  value={mainConclusion}
                  onChange={setMainConclusion}
                  icon="description"
                  required
                />
              </div>

              {/* Divider */}
              <div className="w-full h-px bg-border my-2" />

              {/* Fakta om revisjonen */}
              <div className="flex flex-col gap-2 w-full">
                <h3 className="label-large text-foreground">Fakta om revisjonen</h3>
                
                <div className="w-full space-y-2">
                  <ExpandableInput
                    label="Til stede ved revisjonen:"
                    value={presentAtRevision}
                    onChange={setPresentAtRevision}
                    icon="groups"
                    required
                  />
                  
                  <ExpandableInput
                    label="Varighet"
                    value={revisionDuration}
                    onChange={setRevisionDuration}
                    icon="timelapse"
                    required
                  />
                </div>
              </div>

              {/* Divider */}
              <div className="w-full h-px bg-border my-2" />

              {/* Revisjonsopplegg */}
              <div className="flex flex-col gap-2 w-full">
                <h3 className="label-large text-foreground">Revisjonsopplegg</h3>
                <p className="body-medium text-foreground">Sjekk at alle sentrale deler av revisjonen er gjennomført.</p>
                
                <div className="flex flex-col w-full">
                  {[
                    { key: 'oppstartsmote' as const, label: 'Oppstartsmøte' },
                    { key: 'dokumentgjennomgang' as const, label: 'Dokumentgjennomgang' },
                    { key: 'egenrevisjon' as const, label: 'Sist gjennomførte egenrevisjon' },
                    { key: 'kvalitetssystem' as const, label: 'Foretakets kvalitetssystem' },
                    { key: 'stikkprover' as const, label: 'Stikkprøver/gjennomgang av produksjon' },
                    { key: 'oppsummering' as const, label: 'Oppsummering og gjennomgang av funn fra revisjonen' }
                  ].map((item) => (
                    <div
                      key={item.key}
                      className="flex items-center h-[56px] min-h-[56px] px-4 hover:bg-muted transition-colors cursor-pointer w-full"
                      onClick={() => setChecklistItems(prev => ({ ...prev, [item.key]: !prev[item.key] }))}
                    >
                      <div className="flex items-center gap-4 flex-1">
                        <div className="p-1">
                          <div className={`w-5 h-5 rounded-sm border-2 flex items-center justify-center transition-colors ${
                            checklistItems[item.key] 
                              ? 'bg-primary border-primary' 
                              : 'border-foreground'
                          }`}>
                            {checklistItems[item.key] && (
                              <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                            )}
                          </div>
                        </div>
                        <span className="body-medium text-foreground">{item.label}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Divider */}
              <div className="w-full h-px bg-border my-2" />

              {/* Gjennomføring av revisjonen */}
              <div className="flex flex-col gap-2 w-full">
                <h3 className="label-large text-foreground">Gjennomføring av revisjonen</h3>
                
                <div className="w-full">
                  <ExpandableInput
                    label="Gjennomføringsbeskrivelse"
                    value={implementationDescription}
                    onChange={setImplementationDescription}
                    icon="description"
                    required
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// Om foretaket Input Component
function OmForetaketInput({ value, onChange }: { value: string; onChange: (value: string) => void }) {
  const [mode, setMode] = useState<'empty' | 'edit' | 'view'>(value ? 'view' : 'empty');
  const [editValue, setEditValue] = useState(value);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const adjustTextareaHeight = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = 'auto';
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  };

  const handleAdd = (e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    setMode('edit');
    setEditValue(value);
  };

  const handleEdit = (e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    setMode('edit');
    setEditValue(value);
  };

  const handleSave = () => {
    const trimmedValue = editValue.trim();
    if (trimmedValue) {
      onChange(trimmedValue);
      setMode('view');
    } else {
      onChange('');
      setMode('empty');
      setEditValue('');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Escape') {
      setEditValue(value);
      setMode(value ? 'view' : 'empty');
    }
    // Allow Enter for new lines in textarea
  };

  const handleBlur = () => {
    handleSave();
  };

  useEffect(() => {
    if (mode === 'edit' && textareaRef.current) {
      textareaRef.current.focus();
      adjustTextareaHeight();
    }
  }, [mode]);

  useEffect(() => {
    if (mode === 'edit') {
      adjustTextareaHeight();
    }
  }, [editValue, mode]);

  // Empty state
  if (mode === 'empty') {
    return (
      <div className="relative shrink-0 w-full">
        <div className="flex flex-col size-full">
          {/* Trenger utfylling chip - Show above on small screens */}
          <div className="max-[400px]:flex max-[400px]:justify-start max-[400px]:mb-2 hidden">
            <div className="bg-[var(--primary-container)] box-border flex items-center justify-center overflow-clip relative rounded-[var(--radius)] shadow-[var(--elevation-sm)] shrink-0">
              <div className="box-border flex gap-2 h-8 items-center justify-center pl-2 pr-4 py-1.5">
                <div className="relative shrink-0 w-[18px] h-[18px]">
                  <div className="absolute inset-[8.333%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
                      <path d={svgPathsChip.p1c3b4f80} fill="#BA1A1A" />
                    </svg>
                  </div>
                </div>
                <span className="label-medium text-foreground whitespace-nowrap">
                  Trenger utfylling
                </span>
              </div>
            </div>
          </div>

          {/* Main input row */}
          <div className="box-border content-stretch flex gap-4 items-center p-2 relative w-full">
            {/* Leading Icon Button - Plus */}
            <div className="content-stretch flex items-center justify-center relative shrink-0 size-12" data-name="Icon button">
              <div 
                onClick={handleAdd}
                className="content-stretch cursor-pointer flex flex-col items-center justify-center overflow-clip relative rounded-[var(--radius-button)] shrink-0 w-10 hover:bg-[var(--primary-container)] transition-colors"
                data-name="Content"
              >
                <div className="content-stretch flex h-10 items-center justify-center relative shrink-0 w-full" data-name="State-layer">
                  <div className="relative shrink-0 size-6" data-name="Icon">
                    <div className="absolute inset-[20.833%]" data-name="icon">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                        <path d="M8 2V14M2 8H14" stroke="#44483B" strokeWidth="2" fill="none" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Content - clickable to activate edit mode */}
            <button
              onClick={handleAdd}
              className="basis-0 content-stretch flex flex-col grow items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0 text-left cursor-pointer"
              data-name="Content"
            >
              <div className="flex flex-col justify-center leading-[0] relative shrink-0 w-full">
                <p className="body-large text-foreground leading-6 m-0">Om foretaket</p>
              </div>
            </button>
            
            {/* Trenger utfylling chip - Show inline on larger screens */}
            <div className="max-[400px]:hidden">
              <div className="bg-[var(--primary-container)] box-border flex items-center justify-center overflow-clip relative rounded-[var(--radius)] shadow-[var(--elevation-sm)] shrink-0">
                <div className="box-border flex gap-2 h-8 items-center justify-center pl-2 pr-4 py-1.5">
                  <div className="relative shrink-0 w-[18px] h-[18px]">
                    <div className="absolute inset-[8.333%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
                        <path d={svgPathsChip.p1c3b4f80} fill="#BA1A1A" />
                      </svg>
                    </div>
                  </div>
                  <span className="label-medium text-foreground whitespace-nowrap">
                    Trenger utfylling
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Edit state
  if (mode === 'edit') {
    return (
      <div className="relative shrink-0 w-full">
        <div className="flex flex-row items-center size-full">
          <div className="box-border content-stretch flex gap-4 items-start p-2 relative w-full">
            {/* Leading Icon Button - Check/Save */}
            <div className="content-stretch flex items-center justify-center relative shrink-0 size-12" data-name="Icon button">
              <div
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  handleSave();
                }}
                className="content-stretch cursor-pointer flex flex-col items-center justify-center overflow-clip relative rounded-[var(--radius-button)] shrink-0 w-10 hover:bg-[var(--primary-container)] transition-colors"
                data-name="Content"
              >
                <div className="content-stretch flex h-10 items-center justify-center relative shrink-0 w-full" data-name="State-layer">
                  <div className="relative shrink-0 size-6" data-name="Icon">
                    <div className="absolute inset-[16.667%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                        <path d="M16.667 5L7.5 14.167L3.333 10" stroke="#44483B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Content */}
            <div className="basis-0 content-stretch flex flex-col grow items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
              <div className="label-small text-muted-foreground w-full mb-1">
                <p className="m-0">Om foretaket</p>
              </div>
              <textarea
                ref={textareaRef}
                value={editValue}
                onChange={(e) => setEditValue(e.target.value)}
                onKeyDown={handleKeyDown}
                onBlur={handleBlur}
                placeholder=""
                rows={1}
                className="w-full px-3 py-2 border-2 border-primary rounded-[var(--radius)] body-large text-foreground focus:outline-none focus:border-primary resize-none overflow-hidden"
                style={{ minHeight: '72px' }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }

  // View state
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-4 items-start p-2 relative w-full">
          {/* Leading Icon Button - Edit */}
          <div className="content-stretch flex items-center justify-center relative shrink-0 size-12" data-name="Icon button">
            <div
              onClick={handleEdit}
              className="content-stretch cursor-pointer flex flex-col items-center justify-center overflow-clip relative rounded-[var(--radius-button)] shrink-0 w-10 hover:bg-[var(--primary-container)] transition-colors"
              data-name="Content"
            >
              <div className="content-stretch flex h-10 items-center justify-center relative shrink-0 w-full" data-name="State-layer">
                <div className="relative shrink-0 size-6" data-name="Icon">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                    <path d={svgPaths.p25003780} fill="#44483B" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          {/* Content - Clickable */}
          <button
            onClick={handleEdit}
            className="basis-0 content-stretch flex flex-col grow items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0 text-left cursor-pointer"
            data-name="Content"
          >
            <div className="label-small text-muted-foreground w-full">
              <p className="m-0">Om foretaket</p>
            </div>
            <div className="body-large text-foreground w-full">
              <p className="m-0">{value}</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

// Previous Revision Input Component
function PreviousRevisionInput({ value, onChange }: { value: string; onChange: (value: string) => void }) {
  const [mode, setMode] = useState<'empty' | 'edit' | 'view'>(value ? 'view' : 'empty');
  const [editValue, setEditValue] = useState(value);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const adjustTextareaHeight = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = 'auto';
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  };

  const handleAdd = (e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    setMode('edit');
    setEditValue(value);
  };

  const handleEdit = (e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    setMode('edit');
    setEditValue(value);
  };

  const handleSave = () => {
    const trimmedValue = editValue.trim();
    if (trimmedValue) {
      onChange(trimmedValue);
      setMode('view');
    } else {
      onChange('');
      setMode('empty');
      setEditValue('');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Escape') {
      setEditValue(value);
      setMode(value ? 'view' : 'empty');
    }
    // Allow Enter for new lines in textarea
  };

  const handleBlur = () => {
    handleSave();
  };

  useEffect(() => {
    if (mode === 'edit' && textareaRef.current) {
      textareaRef.current.focus();
      adjustTextareaHeight();
    }
  }, [mode]);

  useEffect(() => {
    if (mode === 'edit') {
      adjustTextareaHeight();
    }
  }, [editValue, mode]);

  // Empty state
  if (mode === 'empty') {
    return (
      <div className="relative shrink-0 w-full">
        <div className="flex flex-col size-full">
          {/* Trenger utfylling chip - Show above on small screens */}
          <div className="max-[400px]:flex max-[400px]:justify-start max-[400px]:mb-2 hidden">
            <div className="bg-[var(--primary-container)] box-border flex items-center justify-center overflow-clip relative rounded-[var(--radius)] shadow-[var(--elevation-sm)] shrink-0">
              <div className="box-border flex gap-2 h-8 items-center justify-center pl-2 pr-4 py-1.5">
                <div className="relative shrink-0 w-[18px] h-[18px]">
                  <div className="absolute inset-[8.333%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
                      <path d={svgPathsChip.p1c3b4f80} fill="#BA1A1A" />
                    </svg>
                  </div>
                </div>
                <span className="label-medium text-foreground whitespace-nowrap">
                  Trenger utfylling
                </span>
              </div>
            </div>
          </div>

          {/* Main input row */}
          <div className="box-border content-stretch flex gap-4 items-center p-2 relative w-full">
            {/* Leading Icon Button - Plus */}
            <div className="content-stretch flex items-center justify-center relative shrink-0 size-12" data-name="Icon button">
              <div 
                onClick={handleAdd}
                className="content-stretch cursor-pointer flex flex-col items-center justify-center overflow-clip relative rounded-[var(--radius-button)] shrink-0 w-10 hover:bg-[var(--primary-container)] transition-colors"
                data-name="Content"
              >
                <div className="content-stretch flex h-10 items-center justify-center relative shrink-0 w-full" data-name="State-layer">
                  <div className="relative shrink-0 size-6" data-name="Icon">
                    <div className="absolute inset-[20.833%]" data-name="icon">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                        <path d="M8 2V14M2 8H14" stroke="#44483B" strokeWidth="2" fill="none" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Content - clickable to activate edit mode */}
            <button
              onClick={handleAdd}
              className="basis-0 content-stretch flex flex-col grow items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0 text-left cursor-pointer"
              data-name="Content"
            >
              <div className="flex flex-col justify-center leading-[0] relative shrink-0 w-full">
                <p className="body-large text-foreground leading-6 m-0">Oppfølging fra tidligere revisjoner</p>
              </div>
            </button>
            
            {/* Trenger utfylling chip - Show inline on larger screens */}
            <div className="max-[400px]:hidden">
              <div className="bg-[var(--primary-container)] box-border flex items-center justify-center overflow-clip relative rounded-[var(--radius)] shadow-[var(--elevation-sm)] shrink-0">
                <div className="box-border flex gap-2 h-8 items-center justify-center pl-2 pr-4 py-1.5">
                  <div className="relative shrink-0 w-[18px] h-[18px]">
                    <div className="absolute inset-[8.333%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
                        <path d={svgPathsChip.p1c3b4f80} fill="#BA1A1A" />
                      </svg>
                    </div>
                  </div>
                  <span className="label-medium text-foreground whitespace-nowrap">
                    Trenger utfylling
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Edit state
  if (mode === 'edit') {
    return (
      <div className="relative shrink-0 w-full">
        <div className="flex flex-row items-center size-full">
          <div className="box-border content-stretch flex gap-4 items-start p-2 relative w-full">
            {/* Leading Icon Button - Check/Save */}
            <div className="content-stretch flex items-center justify-center relative shrink-0 size-12" data-name="Icon button">
              <div
                onClick={handleSave}
                className="content-stretch cursor-pointer flex flex-col items-center justify-center overflow-clip relative rounded-[var(--radius-button)] shrink-0 w-10 hover:bg-[var(--primary-container)] transition-colors"
                data-name="Content"
              >
                <div className="content-stretch flex h-10 items-center justify-center relative shrink-0 w-full" data-name="State-layer">
                  <div className="relative shrink-0 size-6" data-name="Icon">
                    <div className="absolute inset-[16.667%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                        <path d="M16.667 5L7.5 14.167L3.333 10" stroke="#44483B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Content */}
            <div className="basis-0 content-stretch flex flex-col grow items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
              <div className="label-small text-muted-foreground w-full mb-1">
                <p className="m-0">Oppfølging fra tidligere revisjoner</p>
              </div>
              <textarea
                ref={textareaRef}
                value={editValue}
                onChange={(e) => setEditValue(e.target.value)}
                onKeyDown={handleKeyDown}
                onBlur={handleBlur}
                placeholder=""
                rows={3}
                className="w-full px-3 py-2 border-2 border-primary rounded-[var(--radius)] body-large text-foreground focus:outline-none focus:border-primary resize-none"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }

  // View state
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-4 items-start p-2 relative w-full">
          {/* Leading Icon Button - Edit */}
          <div className="content-stretch flex items-center justify-center relative shrink-0 size-12" data-name="Icon button">
            <div
              onClick={handleEdit}
              className="content-stretch cursor-pointer flex flex-col items-center justify-center overflow-clip relative rounded-[var(--radius-button)] shrink-0 w-10 hover:bg-[var(--primary-container)] transition-colors"
              data-name="Content"
            >
              <div className="content-stretch flex h-10 items-center justify-center relative shrink-0 w-full" data-name="State-layer">
                <div className="relative shrink-0 size-6" data-name="Icon">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                    <path d={svgPaths.p25003780} fill="#44483B" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          {/* Content - Clickable */}
          <button
            onClick={handleEdit}
            className="basis-0 content-stretch flex flex-col grow items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0 text-left cursor-pointer"
            data-name="Content"
          >
            <div className="label-small text-muted-foreground w-full">
              <p className="m-0">Oppfølging fra tidligere revisjoner</p>
            </div>
            <div className="body-large text-foreground w-full">
              <p className="m-0">{value}</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}


