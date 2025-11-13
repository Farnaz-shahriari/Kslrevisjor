import React, { useState, useRef, useEffect } from 'react';
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
}

interface WriteReportPageProps {
  onBack?: () => void;
  questionData: Record<string, QuestionData>;
  onAnswerQuestion: (questionId: string, answer: AnswerType) => void;
  onUpdateQuestionData: (questionId: string, data: Partial<QuestionData>) => void;
  onNavigateToDocument?: (documentIndex: number) => void;
  onLockDeviations?: () => void;
  deviationsLocked?: boolean;
}

export function WriteReportPage({ 
  onBack, 
  questionData, 
  onAnswerQuestion, 
  onUpdateQuestionData,
  onNavigateToDocument,
  onLockDeviations,
  deviationsLocked 
}: WriteReportPageProps) {
  const [currentStep, setCurrentStep] = useState(0);
  
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
  const [previousRevisionTab, setPreviousRevisionTab] = useState<'ekstern' | 'egen' | 'forbedring' | 'positive'>('ekstern');
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
      improvementText: 'Det mangler rutiner for registrering av fôrtype og mengde som brukes i ulike produksjonsperioder.',
      date: '15. sep. 2024',
      revisionType: 'Egenrevisjon'
    },
    {
      id: 'imp-2',
      questionNumber: '1.1.4',
      questionText: 'Er utstyr som krever det, kontrollert og sertifisert i tråd med forskrifter?',
      improvementText: 'Planen for håndtering av sykdomsutbrudd eller dyretragedier er utdatert og bør revideres.',
      date: '15. sep. 2024',
      revisionType: 'Egenrevisjon'
    },
    {
      id: 'imp-3',
      questionNumber: '1.1.2',
      questionText: 'Noterer du gjødselmengdene som brukes?',
      improvementText: 'Enkelte dyr mangler synlig eller korrekt merking; rutiner for kontroll av øremerker kan forbedres.',
      date: '15. sep. 2024',
      revisionType: 'Egenrevisjon'
    }
  ];
  
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
    if (previousRevisionTab === 'ekstern') {
      if (externalRevisionDeviations.length > 0) {
        setSelectedExternalDeviation(externalRevisionDeviations[0].id);
      } else {
        setSelectedExternalDeviation(null);
      }
      setSelectedPreviousQuestion(null);
    } else if (previousRevisionData[previousRevisionTab].length > 0) {
      setSelectedPreviousQuestion(previousRevisionData[previousRevisionTab][0].id);
      setSelectedExternalDeviation(null);
    } else {
      setSelectedPreviousQuestion(null);
      setSelectedExternalDeviation(null);
    }
  }, [previousRevisionTab]);

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
        const allChecklistChecked = Object.values(checklistItems).every(item => item === true);
        return mainConclusion.trim() !== '' && 
               presentAtRevision.trim() !== '' && 
               revisionDuration.trim() !== '' && 
               implementationDescription.trim() !== '' &&
               allChecklistChecked;
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

  return (
    <div className="basis-0 content-stretch flex grow h-full items-start min-h-px min-w-px relative shrink-0 w-full" data-name="write report">
      {/* Left sidebar - Steps */}
      <div className="box-border content-stretch flex flex-col gap-[8px] h-full items-start overflow-x-clip overflow-y-auto p-[16px] relative shrink-0 w-[392px] z-[3]" data-name="Report steps">
        {steps.map((step) => {
          const isComplete = isStepComplete(step.id);
          const isActive = currentStep === step.id;
          
          return (
            <div
              key={step.id}
              onClick={() => setCurrentStep(step.id)}
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
                            <div className="absolute flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] left-1/2 size-[40px] text-[#284000] text-[16px] text-center top-1/2 tracking-[0.15px] translate-x-[-50%] translate-y-[-50%]">
                              <p className="leading-[24px]">{step.id + 1}</p>
                            </div>
                          </div>
                        </div>
                        <div className={`basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0 ${
                          isComplete ? 'leading-[0] tracking-[0.5px]' : ''
                        }`} data-name="Content">
                          {isComplete && (
                            <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[#44483b] text-[12px] w-full">
                              <p className="leading-[16px]">Fullført</p>
                            </div>
                          )}
                          <div className={`flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center ${
                            isComplete ? '' : 'leading-[0]'
                          } relative shrink-0 text-[16px] ${
                            isComplete ? '' : 'tracking-[0.5px]'
                          } w-full ${
                            isActive ? 'text-[#174295]' : 'text-[#1a1c16]'
                          }`}>
                            <p className="leading-[24px]">{step.label}</p>
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
                    disabled={!isReportComplete()}
                    className={`content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0 transition-all ${
                      isReportComplete() 
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
                      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[16px] text-nowrap text-white tracking-[0.15px]">
                        <p className="leading-[24px] whitespace-pre">Lås rapport</p>
                      </div>
                    </div>
                  </button>
                </div>
                {!isReportComplete() && (
                  <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full relative shrink-0 text-[#44483b] text-[14px] tracking-[0.25px] w-[min-content]">
                    <p className="leading-[20px]">Rapporten inneholder ufullstendige deler</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Vertical divider */}
      <div className="h-full w-px shrink-0 z-[2]" style={{ backgroundColor: 'var(--border)' }} data-name="Vertical divider" />

      {/* Right content area */}
      <div className="content-stretch flex flex-col h-full items-start relative shrink-0 flex-1 z-[1] overflow-y-auto" data-name="About producer">
        {currentStep === 0 && (
          <div className="content-stretch flex flex-col items-start relative size-full" data-name="About producer">
            <div className="relative shrink-0 w-full" data-name="Heading">
              <div className="flex flex-col size-full">
                <div className="box-border content-stretch flex flex-col gap-[16px] items-start px-[40px] py-[12px] relative w-full">
                  {/* Heading */}
                  <div className="flex flex-col font-['Quatro:Regular',sans-serif] h-[48px] justify-center leading-[0] not-italic relative shrink-0 text-[#1a1c16] text-[22px] w-full">
                    <p className="leading-[28px]">Informasjon om foretaket</p>
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
                            <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[#44483b] text-[12px] w-full mb-2">
                              <p className="leading-[16px] m-0">Revisjonssted</p>
                            </div>
                            <input
                              type="text"
                              value={tempAddress.street}
                              onChange={(e) => setTempAddress({ ...tempAddress, street: e.target.value })}
                              className="w-full px-3 py-2 mb-2 border-2 border-[#4a671e] rounded-[8px] text-[#1a1c16] text-[16px] leading-[24px] font-['Manrope:Regular',sans-serif] focus:outline-none focus:border-[#4a671e]"
                            />
                            <input
                              type="text"
                              value={tempAddress.postalCode}
                              onChange={(e) => setTempAddress({ ...tempAddress, postalCode: e.target.value })}
                              className="w-full px-3 py-2 border-2 border-[#4a671e] rounded-[8px] text-[#1a1c16] text-[16px] leading-[24px] font-['Manrope:Regular',sans-serif] focus:outline-none focus:border-[#4a671e]"
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
                          <div className="basis-0 content-stretch flex flex-col grow items-start justify-center leading-[0] min-h-px min-w-px overflow-clip relative shrink-0 tracking-[0.5px]" data-name="Content">
                            <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[#44483b] text-[12px] w-full">
                              <p className="leading-[16px] m-0">Revisjonssted</p>
                            </div>
                            <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[24px] relative shrink-0 text-[#1a1c16] text-[16px] w-full">
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

                  {/* Navigation buttons - only show when step is complete */}
                  {isStepComplete(0) && (
                    <div className="flex items-center gap-4">
                      <button
                        onClick={() => setCurrentStep(1)}
                        className="px-6 py-4 rounded-[var(--radius-button)] bg-primary text-primary-foreground label-medium hover:opacity-90 transition-opacity flex items-center gap-2"
                      >
                        <span>Neste</span>
                        <svg className="w-5 h-5 rotate-[-90deg]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                    </div>
                  )}
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
            <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full px-[40px] py-[24px]" data-name="Content">
              <div className="content-stretch flex items-start relative shrink-0 w-full">
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-[372px]">
                  <ProductionTableHeader title="Produksjon" variant="type" />
                  {productionData.map((item, index) => (
                    <ProductionTableRow key={index} text={item.type} variant="type" />
                  ))}
                </div>

                <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0">
                  <ProductionTableHeader title="Volum importert fra LDIR" variant="volume" />
                  {productionData.map((item, index) => (
                    <ProductionTableRow key={index} text={item.volume} variant="volume" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {currentStep === 1 && (
          <div className="content-stretch flex flex-col items-start relative size-full" data-name="Previous revisions">
            {/* Heading section */}
            <div className="relative shrink-0 w-full" data-name="Heading">
              <div className="flex flex-col size-full">
                <div className="box-border content-stretch flex flex-col gap-[16px] items-start px-[40px] py-[12px] relative w-full">
                  {/* Page title */}
                  <div className="flex flex-col font-['Quatro:Regular',sans-serif] h-[48px] justify-center leading-[0] not-italic relative shrink-0 text-[#1a1c16] text-[22px] w-full">
                    <p className="leading-[28px]">Tidligere revisjoner</p>
                  </div>

                  {/* Description text */}
                  <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                    <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[24px] relative shrink-0 text-[#1a1c16] text-[16px] tracking-[0.5px] w-full">
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

                  {/* Navigation buttons - only show when step is complete */}
                  {isStepComplete(1) && (
                    <div className="flex items-center gap-4">
                      <button
                        onClick={() => setCurrentStep(0)}
                        className="px-6 py-4 rounded-[var(--radius-button)] text-primary label-medium hover:bg-primary/10 transition-colors"
                      >
                        Tilbake
                      </button>
                      <button
                        onClick={() => setCurrentStep(2)}
                        className="px-6 py-4 rounded-[var(--radius-button)] bg-primary text-primary-foreground label-medium hover:opacity-90 transition-opacity flex items-center gap-2"
                      >
                        <span>Neste</span>
                        <svg className="w-5 h-5 rotate-[-90deg]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                    </div>
                  )}
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
                      <button
                        onClick={() => setPreviousRevisionTab('ekstern')}
                        className="bg-white content-stretch flex flex-col h-[48px] items-center justify-end overflow-clip relative shrink-0"
                        data-name="Tab 1"
                      >
                        <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="State-layer">
                          <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
                            <div className="box-border content-stretch flex flex-col items-center justify-center px-[16px] py-[14px] relative size-full">
                              <div className="basis-0 content-stretch flex gap-[4px] grow items-center justify-center min-h-px min-w-px relative shrink-0" data-name="Tab Contents">
                                <div className={`flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-center text-nowrap tracking-[0.1px] ${previousRevisionTab === 'ekstern' ? 'text-[#1a1c16]' : 'text-[#44483b]'}`}>
                                  <p className="leading-[20px] whitespace-pre">Ekstern revisjon</p>
                                </div>
                              </div>
                              {previousRevisionTab === 'ekstern' && (
                                <div className="absolute bg-[#4a671e] bottom-0 h-[2px] left-0 right-0" data-name="Indicator" />
                              )}
                            </div>
                          </div>
                        </div>
                      </button>
                      <button
                        onClick={() => setPreviousRevisionTab('egen')}
                        className="bg-white content-stretch flex flex-col h-[48px] items-center justify-end overflow-clip relative shrink-0"
                        data-name="Tab 2"
                      >
                        <div className="basis-0 box-border content-stretch flex flex-col grow items-center justify-center min-h-px min-w-px overflow-clip px-[16px] py-[14px] relative shrink-0" data-name="State-layer">
                          <div className="basis-0 content-stretch flex gap-[4px] grow items-center justify-center min-h-px min-w-px relative shrink-0" data-name="Tab Contents">
                            <div className={`flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-center text-nowrap tracking-[0.1px] ${previousRevisionTab === 'egen' ? 'text-[#1a1c16]' : 'text-[#44483b]'}`}>
                              <p className="leading-[20px] whitespace-pre">Egenrevisjon</p>
                            </div>
                          </div>
                          {previousRevisionTab === 'egen' && (
                            <div className="absolute bg-[#4a671e] bottom-0 h-[2px] left-0 right-0" data-name="Indicator" />
                          )}
                        </div>
                      </button>
                      <button
                        onClick={() => setPreviousRevisionTab('forbedring')}
                        className="bg-white content-stretch flex flex-col h-[48px] items-center justify-end overflow-clip relative shrink-0"
                        data-name="Tab 4"
                      >
                        <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="State-layer">
                          <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
                            <div className="box-border content-stretch flex flex-col items-center justify-center px-[16px] py-[14px] relative size-full">
                              <div className="basis-0 content-stretch flex gap-[4px] grow items-center justify-center min-h-px min-w-px relative shrink-0" data-name="Tab Contents">
                                <div className={`flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-center text-nowrap tracking-[0.1px] ${previousRevisionTab === 'forbedring' ? 'text-[#1a1c16]' : 'text-[#44483b]'}`}>
                                  <p className="leading-[20px] whitespace-pre">Forbedringspunkter</p>
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
                        className="bg-white content-stretch flex flex-col h-[48px] items-center justify-end overflow-clip relative shrink-0"
                        data-name="Tab 5"
                      >
                        <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="State-layer">
                          <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
                            <div className="box-border content-stretch flex flex-col items-center justify-center px-[16px] py-[14px] relative size-full">
                              <div className="basis-0 content-stretch flex gap-[4px] grow items-center justify-center min-h-px min-w-px relative shrink-0" data-name="Tab Contents">
                                <div className={`flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-center text-nowrap tracking-[0.1px] ${previousRevisionTab === 'positive' ? 'text-[#1a1c16]' : 'text-[#44483b]'}`}>
                                  <p className="leading-[20px] whitespace-pre">Positive observasjoner</p>
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
                {previousRevisionTab === 'ekstern' && (
                  <ExternalRevisionAvvikView deviations={externalRevisionDeviations} />
                )}

                {previousRevisionTab === 'forbedring' && (
                  <PreviousRevisionImprovementPoints improvementPoints={improvementPointsData} />
                )}

                {previousRevisionTab !== 'ekstern' && previousRevisionTab !== 'forbedring' && (
                  <>
                    {/* Table */}
                    <PreviousRevisionTable
                      questions={previousRevisionData[previousRevisionTab]}
                      selectedQuestionId={selectedPreviousQuestion}
                      onSelectQuestion={setSelectedPreviousQuestion}
                    />

                    {/* Detail Panel */}
                    {selectedPreviousQuestion && (() => {
                      const question = previousRevisionData[previousRevisionTab].find(
                        q => q.id === selectedPreviousQuestion
                      );
                      return question ? (
                        <div className="bg-background flex flex-col overflow-hidden" style={{ width: '520px' }}>
                          <PreviousRevisionQuestionDetail
                            questionNumber={question.questionNumber}
                            questionText={question.questionText}
                            answer={question.answer}
                            notes={question.notes}
                            date={question.date}
                            revisionType={question.revisionType}
                          />
                        </div>
                      ) : null;
                    })()}
                    
                    {!selectedPreviousQuestion && (
                      <div className="flex items-center justify-center bg-background" style={{ width: '520px' }}>
                        <p className="body-medium text-muted-foreground">Velg et spørsmål fra tabellen</p>
                      </div>
                    )}
                  </>
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
            hasAgreed={avvikHasAgreed}
            onHasAgreedChange={setAvvikHasAgreed}
            isLocked={avvikIsLocked}
            onIsLockedChange={setAvvikIsLocked}
            closureData={avvikClosureData}
            onClosureDataChange={setAvvikClosureData}
          />
        )}

        {currentStep === 4 && (
          <div className="flex-1 overflow-auto w-full">
            <div className="px-[40px] py-[12px] flex flex-col gap-4 w-full">
              {/* Title */}
              <h2 className="title-large text-foreground m-0">Hovedkonklusjon</h2>

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

              {/* Navigation buttons */}
              <div className="flex items-center gap-4 py-3">
                <button
                  onClick={() => setCurrentStep(3)}
                  className="px-6 py-4 rounded-[var(--radius-button)] text-primary label-medium hover:bg-primary/10 transition-colors"
                >
                  Forrige
                </button>
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
        <div className="flex flex-row items-center size-full">
          <div className="box-border content-stretch flex gap-[16px] items-center p-[8px] relative w-full">
            {/* Leading Icon Button - Plus */}
            <div className="content-stretch flex items-center justify-center relative shrink-0 size-[48px]" data-name="Icon button">
              <div 
                onClick={handleAdd}
                className="content-stretch cursor-pointer flex flex-col items-center justify-center overflow-clip relative rounded-[100px] shrink-0 w-[40px] hover:bg-[#eff1e7] transition-colors"
                data-name="Content"
              >
                <div className="content-stretch flex h-[40px] items-center justify-center relative shrink-0 w-full" data-name="State-layer">
                  <div className="relative shrink-0 size-[24px]" data-name="Icon">
                    <div className="absolute inset-[20.833%]" data-name="icon">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
                        <path d={svgPaths.p2ccb20} fill="#44483B" id="icon" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Content - clickable to activate edit mode */}
            <button
              onClick={handleAdd}
              className="basis-0 content-stretch flex flex-col font-['Manrope:Regular',sans-serif] font-normal grow items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0 text-left cursor-pointer"
              data-name="Content"
            >
              <div className="flex flex-col justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] tracking-[0.5px] w-full">
                <p className="leading-[24px] m-0">Om foretaket</p>
              </div>
              <p className="leading-[20px] relative shrink-0 text-[#44483b] text-[14px] tracking-[0.25px] w-full m-0">Påkrevd</p>
            </button>
            {/* Trenger utfylling chip */}
            <div className="bg-[#f4f4ea] box-border flex items-center justify-center overflow-clip relative rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.3),0px_1px_3px_1px_rgba(0,0,0,0.15)] shrink-0">
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
    );
  }

  // Edit state
  if (mode === 'edit') {
    return (
      <div className="relative shrink-0 w-full">
        <div className="flex flex-row items-center size-full">
          <div className="box-border content-stretch flex gap-[16px] items-start p-[8px] relative w-full">
            {/* Leading Icon Button - Check/Save */}
            <div className="content-stretch flex items-center justify-center relative shrink-0 size-[48px]" data-name="Icon button">
              <div
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  handleSave();
                }}
                className="content-stretch cursor-pointer flex flex-col items-center justify-center overflow-clip relative rounded-[100px] shrink-0 w-[40px] hover:bg-[#eff1e7] transition-colors"
                data-name="Content"
              >
                <div className="content-stretch flex h-[40px] items-center justify-center relative shrink-0 w-full" data-name="State-layer">
                  <div className="relative shrink-0 size-[24px]" data-name="Icon">
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
              <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[#44483b] text-[12px] w-full mb-1">
                <p className="leading-[16px] m-0">Om foretaket</p>
              </div>
              <textarea
                ref={textareaRef}
                value={editValue}
                onChange={(e) => setEditValue(e.target.value)}
                onKeyDown={handleKeyDown}
                onBlur={handleBlur}
                placeholder=""
                rows={1}
                className="w-full px-3 py-2 border-2 border-[#4a671e] rounded-[8px] text-[#1a1c16] text-[16px] leading-[24px] font-['Manrope:Regular',sans-serif] focus:outline-none focus:border-[#4a671e] resize-none overflow-hidden"
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
        <div className="box-border content-stretch flex gap-[16px] items-start p-[8px] relative w-full">
          {/* Leading Icon Button - Edit */}
          <div className="content-stretch flex items-center justify-center relative shrink-0 size-[48px]" data-name="Icon button">
            <div
              onClick={handleEdit}
              className="content-stretch cursor-pointer flex flex-col items-center justify-center overflow-clip relative rounded-[100px] shrink-0 w-[40px] hover:bg-[#eff1e7] transition-colors"
              data-name="Content"
            >
              <div className="content-stretch flex h-[40px] items-center justify-center relative shrink-0 w-full" data-name="State-layer">
                <div className="relative shrink-0 size-[24px]" data-name="Icon">
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
            <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[#44483b] text-[12px] w-full">
              <p className="leading-[16px] m-0">Om foretaket</p>
            </div>
            <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#1a1c16] text-[16px] w-full">
              <p className="leading-[24px] m-0">{value}</p>
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
        <div className="flex flex-row items-center size-full">
          <div className="box-border content-stretch flex gap-[16px] items-center p-[8px] relative w-full">
            {/* Leading Icon Button - Plus */}
            <div className="content-stretch flex items-center justify-center relative shrink-0 size-[48px]" data-name="Icon button">
              <div 
                onClick={handleAdd}
                className="content-stretch cursor-pointer flex flex-col items-center justify-center overflow-clip relative rounded-[100px] shrink-0 w-[40px] hover:bg-[#eff1e7] transition-colors"
                data-name="Content"
              >
                <div className="content-stretch flex h-[40px] items-center justify-center relative shrink-0 w-full" data-name="State-layer">
                  <div className="relative shrink-0 size-[24px]" data-name="Icon">
                    <div className="absolute inset-[20.833%]" data-name="icon">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
                        <path d={svgPaths.p2ccb20} fill="#44483B" id="icon" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Content - clickable to activate edit mode */}
            <button
              onClick={handleAdd}
              className="basis-0 content-stretch flex flex-col font-['Manrope:Regular',sans-serif] font-normal grow items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0 text-left cursor-pointer"
              data-name="Content"
            >
              <div className="flex flex-col justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[16px] tracking-[0.5px] w-full">
                <p className="leading-[24px] m-0">Oppfølging fra tidligere revisjoner</p>
              </div>
              <p className="leading-[20px] relative shrink-0 text-[#44483b] text-[14px] tracking-[0.25px] w-full m-0">Påkrevd</p>
            </button>
            {/* Trenger utfylling chip */}
            <div className="bg-[#f4f4ea] box-border flex items-center justify-center overflow-clip relative rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.3),0px_1px_3px_1px_rgba(0,0,0,0.15)] shrink-0">
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
    );
  }

  // Edit state
  if (mode === 'edit') {
    return (
      <div className="relative shrink-0 w-full">
        <div className="flex flex-row items-center size-full">
          <div className="box-border content-stretch flex gap-[16px] items-start p-[8px] relative w-full">
            {/* Leading Icon Button - Check/Save */}
            <div className="content-stretch flex items-center justify-center relative shrink-0 size-[48px]" data-name="Icon button">
              <div
                onClick={handleSave}
                className="content-stretch cursor-pointer flex flex-col items-center justify-center overflow-clip relative rounded-[100px] shrink-0 w-[40px] hover:bg-[#eff1e7] transition-colors"
                data-name="Content"
              >
                <div className="content-stretch flex h-[40px] items-center justify-center relative shrink-0 w-full" data-name="State-layer">
                  <div className="relative shrink-0 size-[24px]" data-name="Icon">
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
              <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[#44483b] text-[12px] w-full mb-1">
                <p className="leading-[16px] m-0">Oppfølging fra tidligere revisjoner</p>
              </div>
              <textarea
                ref={textareaRef}
                value={editValue}
                onChange={(e) => setEditValue(e.target.value)}
                onKeyDown={handleKeyDown}
                onBlur={handleBlur}
                placeholder=""
                rows={3}
                className="w-full px-3 py-2 border-2 border-[#4a671e] rounded-[8px] text-[#1a1c16] text-[16px] leading-[24px] font-['Manrope:Regular',sans-serif] focus:outline-none focus:border-[#4a671e] resize-none"
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
        <div className="box-border content-stretch flex gap-[16px] items-start p-[8px] relative w-full">
          {/* Leading Icon Button - Edit */}
          <div className="content-stretch flex items-center justify-center relative shrink-0 size-[48px]" data-name="Icon button">
            <div
              onClick={handleEdit}
              className="content-stretch cursor-pointer flex flex-col items-center justify-center overflow-clip relative rounded-[100px] shrink-0 w-[40px] hover:bg-[#eff1e7] transition-colors"
              data-name="Content"
            >
              <div className="content-stretch flex h-[40px] items-center justify-center relative shrink-0 w-full" data-name="State-layer">
                <div className="relative shrink-0 size-[24px]" data-name="Icon">
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
            <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[#44483b] text-[12px] w-full">
              <p className="leading-[16px] m-0">Oppfølging fra tidligere revisjoner</p>
            </div>
            <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#1a1c16] text-[16px] w-full">
              <p className="leading-[24px] m-0">{value}</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

// Production Table Components
function ProductionTableHeader({ title, variant = 'type' }: { title: string; variant?: 'type' | 'volume' }) {
  return (
    <div className="content-stretch flex flex-col h-[56px] items-center justify-center min-h-[56px] relative shrink-0 w-full" data-name="List item/List Item: 0 Density">
      <div className="absolute inset-0" data-name="state-layer overlay" />
      <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
        <div className="flex flex-row items-center size-full">
          <div className={`box-border content-stretch flex gap-[16px] items-center py-[8px] relative size-full ${
            variant === 'type' ? 'pl-[40px] pr-[16px]' : 'px-[16px]'
          }`}>
            <div className="content-stretch flex flex-col h-full items-start justify-center overflow-clip relative shrink-0" data-name="Content">
              <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#1a1c16] text-[14px] tracking-[0.1px] whitespace-nowrap">
                <p className="leading-[20px] m-0">{title}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Divider">
        <div className="h-0 relative shrink-0 w-full" data-name="Divider">
          <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 372 1">
              <line stroke="var(--border)" x2="372" y1="0.5" y2="0.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProductionTableRow({ text, variant = 'type' }: { text: string; variant?: 'type' | 'volume' }) {
  return (
    <div className="content-stretch flex flex-col h-[56px] items-center justify-center min-h-[56px] relative shrink-0 w-full" data-name="List item/List Item: 0 Density">
      <div className="absolute inset-0" data-name="state-layer overlay" />
      <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
        <div className="flex flex-row items-center size-full">
          <div className={`box-border content-stretch flex gap-[16px] items-center py-[8px] relative size-full ${
            variant === 'type' ? 'pl-[40px] pr-[16px]' : 'px-[16px]'
          }`}>
            <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Content">
              <div className={`flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full relative shrink-0 text-[#1a1c16] tracking-[0.5px] w-[min-content] ${
                variant === 'type' ? 'text-[16px]' : 'text-[14px] overflow-ellipsis overflow-hidden text-nowrap tracking-[0.25px]'
              }`}>
                <p className={`${variant === 'type' ? 'leading-[24px]' : 'leading-[20px] overflow-ellipsis overflow-hidden [white-space-collapse:collapse]'} m-0`}>{text}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Divider">
        <div className="h-0 relative shrink-0 w-full" data-name="Divider">
          <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 372 1">
              <line stroke="var(--border)" x2="372" y1="0.5" y2="0.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
