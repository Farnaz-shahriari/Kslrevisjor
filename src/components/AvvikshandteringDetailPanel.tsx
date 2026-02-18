import { useRef } from 'react';
import { Upload } from 'lucide-react';
import svgPaths from '../imports/svg-8axi0x1eud';
import svgPathsDeviation from '../imports/svg-rj5c6b7gl3';
import { Button } from './ui/button';
import { ExpandableInput } from './ExpandableInput';
import { DatePicker } from './ui/date-picker';
import { KravVeilederSection } from './KravVeilederSection';
import { addMonths, addDays } from 'date-fns';

type SeverityType = 'kritisk-avvik' | 'avvik' | 'lite-avvik';
type ConfirmationMethod = 'dokumentasjon' | 'digitalt-besok' | 'fysisk-besok';

interface ClosureInfo {
  deadline?: string;
  responsible?: string;
  confirmationMethod?: ConfirmationMethod;
  comment?: string;
}

interface QuestionData {
  deviations?: Array<{
    mangel?: string;
    description?: string;
    krav?: string;
    bevis?: string;
    bevisImages?: Array<{
      id: string;
      name: string;
      url: string;
    }>;
    severity?: SeverityType;
  }>;
}

interface QuestionInfo {
  id: string;
  questionText: string;
  kravVeileder?: string;
  title?: string;
  veilederRevisorText?: string;
  veilederText?: string;
  kravLinks?: Array<{
    category: string;
    title: string;
    description?: string;
    link?: string;
  }>;
  requiresDocumentation?: boolean;
}

interface AvvikshandteringDetailPanelProps {
  selectedQuestionId: string;
  selectedQuestionInfo: QuestionInfo;
  selectedQuestion: {
    questionText: string;
    severity?: SeverityType;
  };
  selectedQuestionData: QuestionData;
  selectedClosureInfo: ClosureInfo;
  updateClosureInfo: (questionId: string, info: Partial<ClosureInfo>) => void;
  onUpdateQuestionData?: (questionId: string, data: Partial<QuestionData>) => void;
}

function getSeverityLabel(severity?: SeverityType): string {
  if (!severity) return 'Avvik';
  const labels = {
    'kritisk-avvik': 'Kritisk avvik',
    'avvik': 'Avvik',
    'lite-avvik': 'Lite avvik'
  };
  return labels[severity] || 'Avvik';
}

function getSeverityColor(severity?: SeverityType): string {
  if (!severity) return 'bg-[#fdd19f]';
  const colors = {
    'kritisk-avvik': 'bg-[#ffdad6]',
    'avvik': 'bg-[#fdd19f]',
    'lite-avvik': 'bg-[#fdeeb1]'
  };
  return colors[severity] || 'bg-[#fdd19f]';
}

export function AvvikshandteringDetailPanel({
  selectedQuestionId,
  selectedQuestionInfo,
  selectedQuestion,
  selectedQuestionData,
  selectedClosureInfo,
  updateClosureInfo,
  onUpdateQuestionData
}: AvvikshandteringDetailPanelProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Get recommended deadline (2 months from now)
  const recommendedDeadline = addMonths(new Date(), 2);
  const maxAllowedDeadline = addDays(recommendedDeadline, 14);
  
  // Convert deadline string to Date object, or use recommended date as default
  const deadlineDate = selectedClosureInfo.deadline 
    ? new Date(selectedClosureInfo.deadline) 
    : recommendedDeadline;

  const handleMangelChange = (value: string) => {
    if (onUpdateQuestionData) {
      const updatedDeviations = selectedQuestionData.deviations ? [...selectedQuestionData.deviations] : [{}];
      updatedDeviations[0] = { ...updatedDeviations[0], mangel: value };
      onUpdateQuestionData(selectedQuestionId, { deviations: updatedDeviations });
    }
  };

  const handleKravChange = (value: string) => {
    if (onUpdateQuestionData) {
      const updatedDeviations = selectedQuestionData.deviations ? [...selectedQuestionData.deviations] : [{}];
      updatedDeviations[0] = { ...updatedDeviations[0], krav: value };
      onUpdateQuestionData(selectedQuestionId, { deviations: updatedDeviations });
    }
  };

  const handleBevisChange = (value: string) => {
    if (onUpdateQuestionData) {
      const updatedDeviations = selectedQuestionData.deviations ? [...selectedQuestionData.deviations] : [{}];
      updatedDeviations[0] = { ...updatedDeviations[0], bevis: value };
      onUpdateQuestionData(selectedQuestionId, { deviations: updatedDeviations });
    }
  };

  const handleAnsvarligChange = (value: string) => {
    updateClosureInfo(selectedQuestionId, { responsible: value });
  };

  const handleDeadlineChange = (date: Date | null) => {
    if (date) {
      updateClosureInfo(selectedQuestionId, { deadline: date.toISOString().split('T')[0] });
    } else {
      updateClosureInfo(selectedQuestionId, { deadline: undefined });
    }
  };

  const handleCommentChange = (value: string) => {
    updateClosureInfo(selectedQuestionId, { comment: value });
  };

  return (
    <div className="flex flex-col h-full overflow-y-auto bg-background">
      {/* Question Header - matches Svaroversikt design */}
      <div className="px-6 py-4 border-b border-border">
        <h3 className="body-large text-foreground mb-3">
          {selectedQuestionInfo.id} {selectedQuestion.questionText}
        </h3>
        
        {/* Krav & Veileder Section */}
        {selectedQuestionInfo && (
          <KravVeilederSection question={selectedQuestionInfo} />
        )}
      </div>

      <div className="px-6 py-4 space-y-4">
        {/* Deviation Level/Severity Badge */}
        {selectedQuestion.severity && (
          <div className={`flex gap-4 items-center px-2 py-0 min-h-[56px] rounded-[var(--radius-lg)] ${getSeverityColor(selectedQuestion.severity)}`}>
            <div className="size-10 flex items-center justify-center shrink-0">
              <div className="relative size-10">
                <div className="absolute inset-0 rounded-full" style={{ backgroundColor: getSeverityColor(selectedQuestion.severity).replace('bg-[', '').replace(']', '') }}>
                  <svg className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-6" fill="none" viewBox="0 0 24 24">
                    <path d={svgPaths.p24139a00} fill={selectedQuestion.severity === 'kritisk-avvik' ? '#410002' : '#3d2e00'} />
                  </svg>
                </div>
              </div>
            </div>
            <div className="flex-1">
              <p className="label-small text-muted-foreground">
                Resultat av vurdering
              </p>
              <p className="body-large text-foreground">
                {getSeverityLabel(selectedQuestion.severity)}
              </p>
            </div>
            <button className="size-10 flex items-center justify-center shrink-0 hover:bg-black/5 rounded-full transition-colors">
              <svg className="w-6 h-6" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                <path d={svgPaths.p2668ba00} fill="#44483B" />
              </svg>
            </button>
          </div>
        )}

        {/* Mangel - Editable with ExpandableInput */}
        <div className="w-full">
          <ExpandableInput
            label="Mangel"
            value={selectedQuestionData.deviations?.[0]?.mangel || selectedQuestionData.deviations?.[0]?.description || ''}
            onChange={handleMangelChange}
            icon="description"
            required={false}
          />
        </div>

        {/* Krav - Editable (always shown) */}
        <div className="w-full">
          <ExpandableInput
            label="Krav"
            value={selectedQuestionData.deviations?.[0]?.krav || ''}
            onChange={handleKravChange}
            icon="description"
            required={false}
          />
        </div>

        {/* Bevis - Editable (always shown) */}
        <div className="w-full">
          <ExpandableInput
            label="Bevis"
            value={selectedQuestionData.deviations?.[0]?.bevis || ''}
            onChange={handleBevisChange}
            icon="description"
            required={false}
          />
        </div>

        {/* Upload Images Button */}
        <div className="w-full">
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            multiple
            className="hidden"
            onChange={(e) => {
              const files = e.target.files;
              if (files && onUpdateQuestionData) {
                const newImages = Array.from(files).map((file, index) => ({
                  id: `${Date.now()}-${index}`,
                  name: file.name,
                  url: URL.createObjectURL(file)
                }));
                const deviation = selectedQuestionData.deviations?.[0] || {};
                const updatedDeviations = [{
                  ...deviation,
                  bevisImages: [...(deviation.bevisImages || []), ...newImages]
                }];
                onUpdateQuestionData(selectedQuestionId, { deviations: updatedDeviations });
              }
              if (fileInputRef.current) {
                fileInputRef.current.value = '';
              }
            }}
          />
          <button
            onClick={() => fileInputRef.current?.click()}
            className="flex items-center gap-2 px-6 py-3 border border-[var(--border)] rounded-full hover:bg-muted transition-colors"
          >
            <Upload className="w-5 h-5 text-foreground" />
            <span className="label-medium text-foreground">
              Last opp bilde
            </span>
          </button>

          {/* Uploaded Images List */}
          {selectedQuestionData.deviations?.[0]?.bevisImages && selectedQuestionData.deviations[0].bevisImages.length > 0 && (
            <div className="mt-4 space-y-0">
              {selectedQuestionData.deviations[0].bevisImages.map((image: any, index: number) => (
                <div key={image.id || index} className="flex items-center gap-4 px-4 py-2 min-h-[72px]">
                  <div className="w-14 h-14 bg-muted rounded overflow-hidden shrink-0">
                    <img src={image.url} alt={image.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <p className="body-large text-foreground">
                      {image.name}
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      if (onUpdateQuestionData) {
                        const deviation = selectedQuestionData.deviations?.[0];
                        const updatedDeviations = [{
                          ...deviation,
                          bevisImages: deviation?.bevisImages?.filter((_: any, i: number) => i !== index) || []
                        }];
                        onUpdateQuestionData(selectedQuestionId, { deviations: updatedDeviations });
                      }
                    }}
                    className="shrink-0"
                  >
                    <svg className="w-6 h-6" fill="none" preserveAspectRatio="none" viewBox="0 0 14 18">
                      <path d={svgPathsDeviation.p4c48400} fill="#44483B" />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Tidsfrist - DatePicker with recommended date */}
        <div className="w-full">
          <DatePicker
            label="Tidsfrist for lukking av avvik"
            value={deadlineDate}
            onChange={handleDeadlineChange}
            recommendedDate={recommendedDeadline}
            maxDate={maxAllowedDeadline}
            required={true}
          />
        </div>

        {/* Ansvarlig - Editable with ExpandableInput */}
        <div className="w-full">
          <ExpandableInput
            label="Ansvarlig for lukking"
            value={selectedClosureInfo.responsible || ''}
            onChange={handleAnsvarligChange}
            icon="groups"
            required={true}
          />
        </div>

        {/* Closing Avvik Container - Hvordan bekreftes tiltaket */}
        <div className="bg-[var(--surface-container-low)] border border-[var(--border)] rounded-[var(--radius-lg)] p-6 space-y-4">
          {/* Type of Closing */}
          <div className="flex gap-2 items-center py-2">
            {selectedClosureInfo.confirmationMethod === 'fysisk-besok' ? (
              <>
                <svg className="w-6 h-6 shrink-0" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z" fill="#44483B" />
                </svg>
                <p className="label-medium text-foreground">
                  Lukking krever fysisk besøk
                </p>
              </>
            ) : selectedClosureInfo.confirmationMethod === 'dokumentasjon' ? (
              <>
                <svg className="w-6 h-6 shrink-0" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                  <path d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.89 22 5.99 22H18C19.1 22 20 21.1 20 20V8L14 2ZM16 18H8V16H16V18ZM16 14H8V12H16V14ZM13 9V3.5L18.5 9H13Z" fill="#44483B" />
                </svg>
                <p className="label-medium text-foreground">
                  Lukking krever dokumentasjon
                </p>
              </>
            ) : selectedClosureInfo.confirmationMethod === 'digitalt-besok' ? (
              <>
                <svg className="w-6 h-6 shrink-0" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                  <path d={svgPaths.p3b7e4b92} fill="#44483B" />
                </svg>
                <p className="label-medium text-foreground">
                  Lukking krever digitalt besøk
                </p>
              </>
            ) : (
              <p className="label-medium text-muted-foreground">
                Velg bekreftelsesmetode
              </p>
            )}
          </div>

          {/* Radio Options */}
          {(() => {
            const isLiteAvvik = selectedQuestion.severity === 'lite-avvik';
            const availableMethods: ConfirmationMethod[] = isLiteAvvik 
              ? ['dokumentasjon']
              : ['dokumentasjon', 'digitalt-besok', 'fysisk-besok'];
            
            return (
              <div className="space-y-2">
                {availableMethods.map((method) => {
                  const isSelected = selectedClosureInfo.confirmationMethod === method;
                  return (
                    <button
                      key={method}
                      onClick={() => updateClosureInfo(selectedQuestionId, { confirmationMethod: method })}
                      className="w-full flex items-center gap-3 px-3 py-2 hover:bg-muted/50 rounded-[var(--radius)] transition-colors"
                    >
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${
                        isSelected
                          ? 'border-primary bg-primary'
                          : 'border-[#44483B]'
                      }`}>
                        {isSelected && (
                          <div className="w-2.5 h-2.5 rounded-full bg-white" />
                        )}
                      </div>
                      <span className="body-large text-foreground">
                        {method === 'dokumentasjon' && 'Dokumentasjon'}
                        {method === 'digitalt-besok' && 'Digitalt besøk'}
                        {method === 'fysisk-besok' && 'Fysisk besøk'}
                      </span>
                    </button>
                  );
                })}
              </div>
            );
          })()}

          {/* Divider */}
          <div className="h-px w-full bg-[var(--border)]" />

          {/* Kommentar - Editable with ExpandableInput */}
          <div className="w-full">
            <ExpandableInput
              label="Kommentar"
              value={selectedClosureInfo.comment || ''}
              onChange={handleCommentChange}
              icon="description"
              required={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
