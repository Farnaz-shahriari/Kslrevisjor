import { useState } from 'react';
import svgPaths from '../imports/svg-9d04u8h7wb';
import { questionsData, Requirement } from '../data/questions';

interface RightSidebarProps {
  questionId: string;
}

export function RightSidebar({ questionId }: RightSidebarProps) {
  const [kravExpanded, setKravExpanded] = useState(true);
  const [activeTab, setActiveTab] = useState<'veileder-revisor' | 'veileder'>('veileder-revisor');

  // Find the current question
  const currentQuestion = questionsData
    .flatMap(category => category.questionGroups)
    .flatMap(group => group.questions)
    .find(q => q.id === questionId);

  // Use question-specific requirements if available, otherwise use default
  const defaultRequirements: Requirement[] = [
    {
      category: 'Lovkrav',
      title: 'Matlovsforskriften',
      description: 'Artikkel 18 Sporbarhet',
      link: '#'
    },
    {
      category: 'Lovkrav',
      title: 'Bokføringsloven',
      description: 'Bokføringsloven',
      link: '#'
    },
    {
      category: 'Lovkrav',
      title: 'Straffeloven',
      description: 'Se kap 30.',
      link: '#'
    },
    {
      category: 'Lovkrav',
      title: 'Åpenhetsloven',
      description: '',
      link: '#'
    }
  ];

  const requirements = currentQuestion?.kravLinks || defaultRequirements;

  return (
    <div className="w-[400px] bg-[#fafaf0] border-l border-border h-screen overflow-y-auto flex flex-col items-center gap-6 self-stretch">
      {/* Krav Section */}
      <div className="flex flex-col gap-2 w-full">
        {/* Collapse/Expand Button */}
        <div className="flex items-center justify-center w-full h-14 min-h-14 px-0 py-2">
          <button
            onClick={() => setKravExpanded(!kravExpanded)}
            className="flex items-center gap-4 w-full px-0 py-2 hover:bg-muted/20 transition-colors"
          >
            <div className="flex items-center justify-center shrink-0 size-6">
              <div className="relative shrink-0 size-6">
                <div className="absolute inset-0 overflow-clip">
                  <div className={`absolute bottom-[34.56%] left-1/4 right-1/4 top-[34.56%] transition-transform ${kravExpanded ? '' : 'rotate-180'}`}>
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 8">
                      <path d={svgPaths.p2bb41700} fill="#44483B" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-center min-w-0">
              <p className="body-large text-foreground m-0">Krav</p>
            </div>
          </button>
        </div>

        {/* Requirements List */}
        {kravExpanded && (
          <div className="flex flex-col gap-2 px-6 py-2">
            {requirements.map((req, index) => (
              <div
                key={index}
                className={`bg-white border border-border rounded-[12px] ${
                  req.description ? 'min-h-[88px]' : 'h-[72px] min-h-[72px]'
                } flex items-center`}
              >
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
            ))}
          </div>
        )}
      </div>

      {/* Veileder Section */}
      <div className="flex flex-col gap-2 w-full">
        {/* Tabs */}
        <div className="flex flex-col items-start overflow-clip w-full">
          <div className="box-border flex items-start pl-6 pr-0 py-0 w-full">
            <button
              onClick={() => setActiveTab('veileder-revisor')}
              className={`flex flex-col h-12 items-center justify-end overflow-clip relative shrink-0 ${
                activeTab === 'veileder-revisor' ? '' : ''
              }`}
            >
              <div className="flex flex-col items-center justify-center overflow-clip rounded-inherit size-full">
                <div className="box-border flex flex-col items-center justify-center px-4 py-3.5 relative size-full">
                  <div className="flex gap-1 items-center justify-center">
                    <p className={`label-large m-0 text-center whitespace-nowrap ${
                      activeTab === 'veileder-revisor' ? 'text-foreground' : 'text-muted-foreground'
                    }`}>
                      Veileder revisor
                    </p>
                  </div>
                  {activeTab === 'veileder-revisor' && (
                    <div className="absolute bg-[#4a671e] bottom-0 h-[2px] left-0 right-0" />
                  )}
                </div>
              </div>
            </button>
            <button
              onClick={() => setActiveTab('veileder')}
              className={`flex flex-col h-12 items-center justify-end overflow-clip relative shrink-0 ${
                activeTab === 'veileder' ? '' : ''
              }`}
            >
              <div className="flex flex-col items-center justify-center overflow-clip rounded-inherit size-full">
                <div className="box-border flex flex-col items-center justify-center px-4 py-3.5 relative size-full">
                  <div className="flex gap-1 items-center justify-center">
                    <p className={`label-large m-0 text-center whitespace-nowrap ${
                      activeTab === 'veileder' ? 'text-foreground' : 'text-muted-foreground'
                    }`}>
                      Veileder
                    </p>
                  </div>
                  {activeTab === 'veileder' && (
                    <div className="absolute bg-[#4a671e] bottom-0 h-[2px] left-0 right-0" />
                  )}
                </div>
              </div>
            </button>
          </div>
          {/* Divider */}
          <div className="flex flex-col items-start justify-center w-full">
            <div className="h-0 w-full relative">
              <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 400 1">
                  <line stroke="#E3E3D9" x2="400" y1="0.5" y2="0.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Tab Content */}
        {activeTab === 'veileder-revisor' && (
          <div className="box-border flex flex-col items-start px-6 py-2 w-full">
            <div className="flex flex-col w-full">
              {currentQuestion?.veilederRevisorText ? (
                currentQuestion.veilederRevisorText.split('\n').map((line, index) => {
                  if (line.trim().startsWith('-')) {
                    return (
                      <ul key={index} className="list-disc mb-0 pl-5">
                        <li>
                          <span className="body-large text-foreground">
                            {line.trim().substring(1).trim()}
                          </span>
                        </li>
                      </ul>
                    );
                  } else if (line.trim() === '') {
                    return <p key={index} className="body-large mb-0">&nbsp;</p>;
                  } else {
                    return (
                      <p key={index} className="body-large text-foreground mb-0">
                        {line}
                      </p>
                    );
                  }
                })
              ) : (
                <>
                  <p className="body-large text-foreground mb-0">
                    Dette bør du spørre om på dokumentgjennomgang:
                  </p>
                  <p className="body-large mb-0">&nbsp;</p>
                  <ul className="list-disc mb-0 pl-5">
                    <li className="mb-0">
                      <span className="body-large text-foreground">
                        Be om dokumentasjon på kjøp av eks for, gjødsel eller drivstoff. Følg opp med spørsmål om hvor på gården det brukt/hvilke dyr som har fått hvilket for (intern sporing).
                      </span>
                    </li>
                    <li>
                      <span className="body-large text-foreground">
                        Be om dokumentasjon på salg av melk, slakt, grovfor etc.
                      </span>
                    </li>
                  </ul>
                  <p className="body-large mb-0">&nbsp;</p>
                  <p className="body-large mb-0">&nbsp;</p>
                  <p className="body-large text-foreground">
                    Har bonden oversikt og god kontroll på <span className="font-bold">sporing?</span>
                  </p>
                </>
              )}
            </div>
          </div>
        )}

        {activeTab === 'veileder' && (
          <div className="box-border flex flex-col items-start px-6 py-2 w-full">
            <div className="flex flex-col w-full">
              {currentQuestion?.veilederText ? (
                currentQuestion.veilederText.split('\n').map((line, index) => {
                  if (line.trim() === '') {
                    return <p key={index} className="body-large mb-0">&nbsp;</p>;
                  } else if (line.trim().startsWith('**') && line.trim().endsWith('**')) {
                    // Bold text (e.g., **Informasjon**)
                    const text = line.trim().substring(2, line.trim().length - 2);
                    return (
                      <p key={index} className="body-large text-foreground mb-0">
                        <span className="font-bold">{text}</span>
                      </p>
                    );
                  } else if (line.trim().startsWith('-')) {
                    // Bullet point
                    return (
                      <ul key={index} className="list-disc mb-0 pl-5">
                        <li>
                          <span className="body-large text-foreground">
                            {line.trim().substring(1).trim()}
                          </span>
                        </li>
                      </ul>
                    );
                  } else {
                    return (
                      <p key={index} className="body-large text-foreground mb-0">
                        {line}
                      </p>
                    );
                  }
                })
              ) : (
                <p className="body-large text-foreground">
                  Veileder innhold kommer her...
                </p>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
