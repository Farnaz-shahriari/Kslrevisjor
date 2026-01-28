import { useState } from 'react';
import { Search, Lightbulb, SmilePlus, Upload, ChevronDown, Volume2, HelpCircle } from 'lucide-react';
import { BottomSheet } from './ui/bottom-sheet';
import { getQuestionById } from '../data/questions';
import { KravVeilederSection } from './KravVeilederSection';

interface ImprovementPoint {
  id: string;
  questionNumber: string;
  questionText: string;
  improvementText?: string;
  positiveText?: string;
  date?: string;
  revisionType?: string;
  type: 'improvement' | 'positive'; // Which list this came from
}

interface PreviousRevisionImprovementPointsProps {
  improvementPoints: ImprovementPoint[];
}

// Detail Content Component (reusable for both desktop and mobile)
function ImprovementPointDetail({ 
  point, 
  activeTab, 
  onTabChange 
}: { 
  point: ImprovementPoint; 
  activeTab: 'observasjoner' | 'egenvurderinger' | 'notat';
  onTabChange: (tab: 'observasjoner' | 'egenvurderinger' | 'notat') => void;
}) {
  // Get the full question data using questionNumber
  const questionInfo = getQuestionById(point.questionNumber);

  return (
    <div className="flex flex-col gap-2 px-4 py-4 w-full">
      {/* Question Number */}
      <div className="flex gap-2 items-center w-full">
        <button className="flex items-center gap-2">
          <div className="relative shrink-0 size-6">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="10" fill="#E3E3D9"/>
              <circle cx="12" cy="12" r="8" fill="#C4C8B7"/>
            </svg>
          </div>
          <span className="title-large text-foreground">{point.questionNumber}</span>
        </button>
        <div className="flex-1"></div>
        <div className="flex gap-2">
          <button className="w-14 h-14 flex items-center justify-center rounded-full hover:bg-muted transition-colors">
            <Volume2 className="w-6 h-6 text-foreground" />
          </button>
          <button className="w-14 h-14 flex items-center justify-center rounded-full hover:bg-muted transition-colors">
            <HelpCircle className="w-6 h-6 text-foreground" />
          </button>
        </div>
      </div>
      
      {/* Question Text */}
      <p className="label-large text-foreground">{point.questionText}</p>

      {/* Krav & Veileder Section */}
      {questionInfo && (
        <div className="mb-3">
          <KravVeilederSection question={questionInfo} />
        </div>
      )}

      {/* Answer Alternatives (Read-only with Ja selected) */}
      <div className="flex flex-col gap-0 w-full opacity-50 cursor-not-allowed">
        {/* Ja Option */}
        <div className="flex items-center gap-4 px-4 py-2 opacity-100">
          <div className="flex items-center justify-center p-2">
            <div className="relative shrink-0 size-6">
              <svg className="block size-full" fill="none" viewBox="0 0 20 20">
                <path d="M10 15C11.3833 15 12.5625 14.5125 13.5375 13.5375C14.5125 12.5625 15 11.3833 15 10C15 8.61667 14.5125 7.4375 13.5375 6.4625C12.5625 5.4875 11.3833 5 10 5C8.61667 5 7.4375 5.4875 6.4625 6.4625C5.4875 7.4375 5 8.61667 5 10C5 11.3833 5.4875 12.5625 6.4625 13.5375C7.4375 14.5125 8.61667 15 10 15ZM10 20C8.61667 20 7.31667 19.7375 6.1 19.2125C4.88333 18.6875 3.825 17.975 2.925 17.075C2.025 16.175 1.3125 15.1167 0.7875 13.9C0.2625 12.6833 0 11.3833 0 10C0 8.61667 0.2625 7.31667 0.7875 6.1C1.3125 4.88333 2.025 3.825 2.925 2.925C3.825 2.025 4.88333 1.3125 6.1 0.7875C7.31667 0.2625 8.61667 0 10 0C11.3833 0 12.6833 0.2625 13.9 0.7875C15.1167 1.3125 16.175 2.025 17.075 2.925C17.975 3.825 18.6875 4.88333 19.2125 6.1C19.7375 7.31667 20 8.61667 20 10C20 11.3833 19.7375 12.6833 19.2125 13.9C18.6875 15.1167 17.975 16.175 17.075 17.075C16.175 17.975 15.1167 18.6875 13.9 19.2125C12.6833 19.7375 11.3833 20 10 20ZM10 18C12.2333 18 14.125 17.225 15.675 15.675C17.225 14.125 18 12.2333 18 10C18 7.76667 17.225 5.875 15.675 4.325C14.125 2.775 12.2333 2 10 2C7.76667 2 5.875 2.775 4.325 4.325C2.775 5.875 2 7.76667 2 10C2 12.2333 2.775 14.125 4.325 15.675C5.875 17.225 7.76667 18 10 18Z" fill="#1A1C16"/>
              </svg>
            </div>
          </div>
          <span className="body-large text-foreground flex-1">Ja</span>
        </div>

        {/* Nei Option */}
        <div className="flex items-center gap-4 px-4 py-2 opacity-60">
          <div className="flex items-center justify-center p-2">
            <div className="relative shrink-0 size-6">
              <svg className="block size-full" fill="none" viewBox="0 0 20 20">
                <path d="M10 20C8.61667 20 7.31667 19.7375 6.1 19.2125C4.88333 18.6875 3.825 17.975 2.925 17.075C2.025 16.175 1.3125 15.1167 0.7875 13.9C0.2625 12.6833 0 11.3833 0 10C0 8.61667 0.2625 7.31667 0.7875 6.1C1.3125 4.88333 2.025 3.825 2.925 2.925C3.825 2.025 4.88333 1.3125 6.1 0.7875C7.31667 0.2625 8.61667 0 10 0C11.3833 0 12.6833 0.2625 13.9 0.7875C15.1167 1.3125 16.175 2.025 17.075 2.925C17.975 3.825 18.6875 4.88333 19.2125 6.1C19.7375 7.31667 20 8.61667 20 10C20 11.3833 19.7375 12.6833 19.2125 13.9C18.6875 15.1167 17.975 16.175 17.075 17.075C16.175 17.975 15.1167 18.6875 13.9 19.2125C12.6833 19.7375 11.3833 20 10 20ZM10 18C12.2333 18 14.125 17.225 15.675 15.675C17.225 14.125 18 12.2333 18 10C18 7.76667 17.225 5.875 15.675 4.325C14.125 2.775 12.2333 2 10 2C7.76667 2 5.875 2.775 4.325 4.325C2.775 5.875 2 7.76667 2 10C2 12.2333 2.775 14.125 4.325 15.675C5.875 17.225 7.76667 18 10 18Z" fill="#1A1C16"/>
              </svg>
            </div>
          </div>
          <span className="body-large text-foreground flex-1">Nei</span>
        </div>

        {/* Ikke relevant Option */}
        <div className="flex items-center gap-4 px-4 py-2 opacity-60">
          <div className="flex items-center justify-center p-2">
            <div className="relative shrink-0 size-6">
              <svg className="block size-full" fill="none" viewBox="0 0 20 20">
                <path d="M10 20C8.61667 20 7.31667 19.7375 6.1 19.2125C4.88333 18.6875 3.825 17.975 2.925 17.075C2.025 16.175 1.3125 15.1167 0.7875 13.9C0.2625 12.6833 0 11.3833 0 10C0 8.61667 0.2625 7.31667 0.7875 6.1C1.3125 4.88333 2.025 3.825 2.925 2.925C3.825 2.025 4.88333 1.3125 6.1 0.7875C7.31667 0.2625 8.61667 0 10 0C11.3833 0 12.6833 0.2625 13.9 0.7875C15.1167 1.3125 16.175 2.025 17.075 2.925C17.975 3.825 18.6875 4.88333 19.2125 6.1C19.7375 7.31667 20 8.61667 20 10C20 11.3833 19.7375 12.6833 19.2125 13.9C18.6875 15.1167 17.975 16.175 17.075 17.075C16.175 17.975 15.1167 18.6875 13.9 19.2125C12.6833 19.7375 11.3833 20 10 20ZM10 18C12.2333 18 14.125 17.225 15.675 15.675C17.225 14.125 18 12.2333 18 10C18 7.76667 17.225 5.875 15.675 4.325C14.125 2.775 12.2333 2 10 2C7.76667 2 5.875 2.775 4.325 4.325C2.775 5.875 2 7.76667 2 10C2 12.2333 2.775 14.125 4.325 15.675C5.875 17.225 7.76667 18 10 18Z" fill="#1A1C16"/>
              </svg>
            </div>
          </div>
          <span className="body-large text-foreground flex-1">Ikke relevant</span>
        </div>
      </div>

      {/* Tabs - Horizontally Scrollable */}
      <div className="flex flex-col w-full">
        <div className="flex overflow-x-auto w-full relative scrollbar-hide">
          <button
            onClick={() => onTabChange('observasjoner')}
            className="flex flex-col h-12 items-center justify-center shrink-0 px-4 py-3.5 relative"
          >
            <span className={`label-medium text-nowrap ${
              activeTab === 'observasjoner' ? 'text-foreground' : 'text-muted-foreground'
            }`}>
              Observasjoner
            </span>
            {activeTab === 'observasjoner' && (
              <div className="absolute bottom-0 h-0.5 left-0 right-0 bg-primary z-10" />
            )}
          </button>
          <button
            onClick={() => onTabChange('egenvurderinger')}
            className="flex flex-col h-12 items-center justify-center shrink-0 px-4 py-3.5 relative"
          >
            <span className={`label-medium text-nowrap ${
              activeTab === 'egenvurderinger' ? 'text-foreground' : 'text-muted-foreground'
            }`}>
              Egenrevisjonssvar
            </span>
            {activeTab === 'egenvurderinger' && (
              <div className="absolute bottom-0 h-0.5 left-0 right-0 bg-primary z-10" />
            )}
          </button>
          <button
            onClick={() => onTabChange('notat')}
            className="flex flex-col h-12 items-center justify-center shrink-0 px-4 py-3.5 relative"
          >
            <span className={`label-medium text-nowrap ${
              activeTab === 'notat' ? 'text-foreground' : 'text-muted-foreground'
            }`}>
              Notat
            </span>
            {activeTab === 'notat' && (
              <div className="absolute bottom-0 h-0.5 left-0 right-0 bg-primary z-10" />
            )}
          </button>
        </div>
        <div className="h-0 w-full relative">
          <div className="absolute bottom-0 left-0 right-0 h-px bg-border" />
        </div>
      </div>

      {/* Tab Content */}
      {activeTab === 'observasjoner' && (
        <div className="flex flex-col gap-2 w-full">
          {/* Forbedringspunkter Card */}
          <div className="relative rounded-[var(--radius)] w-full border border-border">
            <div className="flex flex-col gap-2 p-4 w-full">
              {/* Header */}
              <div className="flex items-center gap-4 min-h-14 w-full">
                <Lightbulb className="w-6 h-6 text-muted-foreground" />
                <div className="flex flex-col flex-1">
                  <span className="body-large text-foreground">Forbedringspunkter</span>
                  <span className="body-medium text-muted-foreground">Anbefalinger for videre forbedring</span>
                </div>
              </div>

              {/* Text Content - Only show if type is improvement */}
              {point.type === 'improvement' && point.improvementText ? (
                <div className="px-4">
                  <p className="body-large text-foreground m-0">
                    {point.improvementText}
                  </p>
                </div>
              ) : (
                <div className="px-4">
                  <p className="body-large text-muted-foreground m-0 italic">
                    Ingen forbedringspunkter registrert
                  </p>
                </div>
              )}

              {/* Upload Button */}
              <button className="flex items-center justify-center gap-2 h-12 px-6 rounded-full hover:bg-muted transition-colors">
                <Upload className="w-5 h-5 text-primary" />
                <span className="label-medium text-primary">Last opp bilde</span>
              </button>
            </div>
          </div>

          {/* Positive observasjoner Card */}
          <div className="relative rounded-[var(--radius)] w-full border border-border">
            <div className="flex flex-col gap-2 p-4 w-full">
              {/* Header */}
              <div className="flex items-center gap-4 min-h-14 w-full">
                <SmilePlus className="w-6 h-6 text-muted-foreground" />
                <div className="flex flex-col flex-1">
                  <span className="body-large text-foreground">Positive observasjoner</span>
                  <span className="body-medium text-muted-foreground">Tydelige funn som viser god praksis</span>
                </div>
              </div>

              {/* Text Content - Only show if type is positive */}
              {point.type === 'positive' && point.positiveText ? (
                <div className="px-4">
                  <p className="body-large text-foreground m-0">
                    {point.positiveText}
                  </p>
                </div>
              ) : (
                <div className="px-4">
                  <p className="body-large text-muted-foreground m-0 italic">
                    Ingen positive observasjoner registrert
                  </p>
                </div>
              )}

              {/* Upload Button */}
              <button className="flex items-center justify-center gap-2 h-12 px-6 rounded-full hover:bg-muted transition-colors">
                <Upload className="w-5 h-5 text-primary" />
                <span className="label-medium text-primary">Last opp bilde</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'egenvurderinger' && (
        <div className="flex flex-col gap-4 w-full px-2">
          <p className="body-medium text-muted-foreground m-0">Ingen egenrevisjonssvar tilgjengelig</p>
        </div>
      )}

      {activeTab === 'notat' && (
        <div className="flex flex-col gap-4 w-full px-2">
          <p className="body-medium text-muted-foreground m-0">Ingen notat registrert</p>
        </div>
      )}

      {/* Metadata */}
      {(point.revisionType || point.date) && (
        <div className="pt-4 border-t border-border w-full">
          {point.revisionType && (
            <div className="mb-2">
              <span className="label-small text-muted-foreground">Revisjonstype</span>
              <p className="body-medium text-foreground m-0">{point.revisionType}</p>
            </div>
          )}
          {point.date && (
            <div>
              <span className="label-small text-muted-foreground">Dato</span>
              <p className="body-medium text-foreground m-0">{point.date}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export function PreviousRevisionImprovementPoints({ improvementPoints }: PreviousRevisionImprovementPointsProps) {
  const [selectedId, setSelectedId] = useState<string | null>(improvementPoints[0]?.id || null);
  const [activeTab, setActiveTab] = useState<'observasjoner' | 'egenvurderinger' | 'notat'>('observasjoner');
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);

  const selectedPoint = improvementPoints.find(point => point.id === selectedId);

  const handlePointSelect = (id: string) => {
    setSelectedId(id);
    // Open bottom sheet on mobile/tablet
    setIsBottomSheetOpen(true);
  };

  const handleCloseBottomSheet = () => {
    setIsBottomSheetOpen(false);
  };

  return (
    <>
      {/* MOBILE/TABLET: Table - Always visible, full width */}
      <div className="min-[1400px]:hidden w-full h-full bg-background flex flex-col overflow-hidden">
        <div className="flex-1 overflow-auto relative bg-background">
          <table className="w-full">
            <thead className="bg-surface-container-low sticky top-0 z-10">
              <tr className="border-b border-border">
                <th className="px-6 py-2 text-left bg-surface-container-low">
                  <div className="flex items-center gap-2">
                    <Search className="w-6 h-6 text-foreground" />
                    <span className="label-medium text-foreground">Sjekklistepunkt</span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {improvementPoints.map((point) => {
                const displayText = point.type === 'improvement' ? point.improvementText : point.positiveText;
                return (
                  <tr
                    key={point.id}
                    onClick={() => handlePointSelect(point.id)}
                    className="cursor-pointer border-b border-border transition-colors hover:bg-muted"
                  >
                    <td className="px-6 py-4">
                      <div className="flex flex-col gap-2">
                        <span className="body-medium text-foreground">
                          {point.questionNumber} - {point.questionText}
                        </span>
                        {displayText && (
                          <span className="body-medium text-muted-foreground">
                            {displayText}
                          </span>
                        )}
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* DESKTOP: Table and Detail Panel side-by-side */}
      <div className="max-[1400px]:hidden flex h-full">
        {/* Table */}
        <div className="flex-1 overflow-auto relative bg-background">
          <table className="w-full">
            <thead className="bg-surface-container-low sticky top-0 z-10">
              <tr className="border-b border-border">
                <th className="px-4 py-2 text-left bg-surface-container-low">
                  <div className="flex items-center gap-2">
                    <Search className="w-6 h-6 text-foreground" />
                    <span className="label-medium text-foreground">Sjekklistepunkt</span>
                  </div>
                </th>
                <th className="px-4 py-2 text-left bg-surface-container-low">
                  <div className="flex items-center gap-2">
                    <span className="label-medium text-foreground">
                      {improvementPoints[0]?.type === 'improvement' ? 'Forbedringspunkt' : 'Positiv observasjon'}
                    </span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {improvementPoints.map((point) => {
                const displayText = point.type === 'improvement' ? point.improvementText : point.positiveText;
                return (
                  <tr
                    key={point.id}
                    onClick={() => setSelectedId(point.id)}
                    className={`cursor-pointer border-b border-border transition-colors ${
                      selectedId === point.id
                        ? 'bg-accent'
                        : 'hover:bg-muted'
                    }`}
                  >
                    <td className="px-4 py-4">
                      <span className={`body-medium ${
                        selectedId === point.id
                          ? 'text-accent-foreground'
                          : 'text-foreground'
                      }`}>
                        {point.questionNumber} - {point.questionText}
                      </span>
                    </td>
                    <td className="px-4 py-4">
                      <span className={`body-medium ${
                        selectedId === point.id
                          ? 'text-accent-foreground'
                          : 'text-foreground'
                      }`}>
                        {displayText || ''}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Vertical Divider */}
        <div className="w-px h-full bg-border" />

        {/* Detail Panel - Desktop only */}
        {selectedPoint && (
          <div className="w-[400px] h-full flex flex-col bg-background overflow-y-auto">
            <ImprovementPointDetail 
              point={selectedPoint} 
              activeTab={activeTab}
              onTabChange={setActiveTab}
            />
          </div>
        )}
      </div>

      {/* MOBILE/TABLET: Bottom Sheet */}
      {selectedPoint && (
        <BottomSheet
          isOpen={isBottomSheetOpen}
          onClose={handleCloseBottomSheet}
          title="Detaljer"
          maxHeight={90}
        >
          <ImprovementPointDetail 
            point={selectedPoint} 
            activeTab={activeTab}
            onTabChange={setActiveTab}
          />
        </BottomSheet>
      )}
    </>
  );
}