import { formatNorwegianDate } from '../utils/dateFormat';
import { useState, useEffect } from 'react';
import svgPathsOld from '../imports/svg-8axi0x1eud';
import svgPathsFysiskBesok from '../imports/svg-h0hxm9lc87';
import svgPathsDokumentasjon from '../imports/svg-41jcdwqzsu';
import svgPathsPostpone from '../imports/svg-1q9ydsa8k6';
import { KravVeilederSection } from './KravVeilederSection';
import { getQuestionById } from '../data/questions';
import { Button } from './ui/button';
import { ChevronDown, ChevronUp, X, Check } from 'lucide-react';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from './ui/dialog';
import { ListItem } from './ui/list-item';
import { AlertTriangle } from 'lucide-react';
import { RadioButton } from './ui/radio-button';

type SeverityType = 'kritisk' | 'avvik' | 'lite';
type StatusType = 'tidspunkt-foreslatt' | 'besok-planlagt' | 'venter-godkjenning' | 'onsker-fristforlengelse' | 'dokument-levert' | 'avventer-moteforslag' | 'avventer-dokumentasjon' | 'lukket';
type ConfirmationMethod = 'dokumentasjon' | 'digitalt-besok' | 'fysisk-besok';

interface Deviation {
  id: string;
  severity: SeverityType;
  foretakName: string;
  checklist: string;
  deadline: Date;
  status: StatusType;
  requiresAction: boolean;
  confirmationMethod?: ConfirmationMethod;
  rejectedDocuments?: RejectedDocument[];
  closedDate?: Date;
  extensionRequest?: {
    requestedDate: Date;
    reason: string;
  };
}

interface DeviationDetailPanelProps {
  deviation: Deviation;
  onStatusUpdate?: (deviationId: string, newStatus: StatusType) => void;
  onAddRejectedDocuments?: (deviationId: string, documents: RejectedDocument[]) => void;
  onClose?: () => void;
  context?: 'avvikoversikt' | 'register-revisjon' | 'tidligere-revisjon'; // Context for conditional rendering
  onCloseAndRegisterNew?: (deviationId: string) => void; // For "Avviket forekommer i en annen form" flow
  onUpdateData?: (questionId: string, data: { closedPreviousAvvikId: string }) => void; // For updating data in parent component
}

interface RejectedDocument {
  filename: string;
  reason: string;
}

function getSeverityLabel(severity: SeverityType): string {
  const labels = {
    'kritisk': 'Kritisk avvik',
    'avvik': 'Avvik',
    'lite': 'Lite avvik'
  };
  return labels[severity] || 'Avvik';
}

function getSeverityColor(severity: SeverityType): string {
  const colors = {
    'kritisk': 'bg-[#ffdad6]',
    'avvik': 'bg-[#fdd19f]',
    'lite': 'bg-[#fdeeb1]'
  };
  return colors[severity] || 'bg-[#fdd19f]';
}

// Generate random but sensible data for fields not in the table
function getDeviationDetails(deviation: Deviation) {
  const responsibleNames = ['Tellef Lima Eidland', 'Kari Hansen', 'Lars Olsen', 'Mari Pettersen', 'Jon Berg'];
  const confirmationMethods: ConfirmationMethod[] = ['dokumentasjon', 'digitalt-besok', 'fysisk-besok'];
  
  // Random comment variations for fysisk-besok
  const fysiskBesokComments = [
    "Besøket gir oss mulighet til å gå gjennom tiltakene sammen og sikre at alt er i tråd med kravene. Send forslag til tidspunkt.",
    "Besøket lar oss sammen gjennomgå tiltakene og sikre at alt er i tråd med kravene. Send forslag til tidspunkt.",
    "Besøket gir oss anledning til å gå gjennom tiltakene sammen og sikre at alt er i tråd med kravene. Send forslag til tidspunkt.",
    "Besøket gjør det mulig for oss å gjennomgå tiltakene sammen og sikre at alt er i tråd med kravene. Send forslag til tidspunkt."
  ];
  
  // Extract question text for context-aware content
  const questionText = deviation.checklist.split('–')[1]?.trim() || 'kravet';
  
  // Determine confirmation method
  const method = deviation.confirmationMethod || confirmationMethods[parseInt(deviation.id) % confirmationMethods.length];
  
  // Select random comment based on method
  let comment: string;
  if (method === 'fysisk-besok') {
    comment = fysiskBesokComments[parseInt(deviation.id) % fysiskBesokComments.length];
  } else if (method === 'dokumentasjon') {
    comment = 'Send meg relevante dokumentasjon her';
  } else {
    comment = `Ring meg på telefon først, og vi fortsetter dialogen på Messenger.`;
  }
  
  return {
    responsible: responsibleNames[parseInt(deviation.id) % responsibleNames.length],
    confirmationMethod: method,
    comment,
    mangel: `Ingen dokumentasjon fremvist for truckkontroll.`,
    bevis: `Ingen dokumentasjon fremvist for truckkontroll.`,
    krav: `Ingen dokumentasjon fremvist for truckkontroll.`,
    rapportertAvvik: `Stort avvik fra kravet.`,
    proposedDate: new Date(2025, 5, 16) // June 16, 2025
  };
}

// Get initials from company name
function getInitials(name: string): string {
  const words = name.split(' ');
  if (words.length >= 2) {
    return (words[0][0] + words[1][0]).toUpperCase();
  }
  return name.substring(0, 2).toUpperCase();
}

export function DeviationDetailPanel({ deviation, onStatusUpdate, onAddRejectedDocuments, onClose, context, onCloseAndRegisterNew, onUpdateData }: DeviationDetailPanelProps) {
  const details = getDeviationDetails(deviation);
  
  // Get question ID from checklist string (e.g., "1.1.1")
  const questionId = deviation.checklist.split('–')[0]?.trim();
  const questionInfo = questionId ? getQuestionById(questionId) : null;
  
  // Local state for deviation status to handle user interactions
  const [currentStatus, setCurrentStatus] = useState<StatusType>(deviation.status);
  const [isLoading, setIsLoading] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [currentProposedDate, setCurrentProposedDate] = useState<Date>(details.proposedDate);
  const [kravBevisExpanded, setKravBevisExpanded] = useState(false);
  const [showRejectDialog, setShowRejectDialog] = useState(false);
  const [rejectComment, setRejectComment] = useState('');
  const [showRejectedDocs, setShowRejectedDocs] = useState(false);
  const [showConfirmCloseDialog, setShowConfirmCloseDialog] = useState(false);
  const [closedDate, setClosedDate] = useState<Date | undefined>(deviation.closedDate);
  const [showCloseAndRegisterDialog, setShowCloseAndRegisterDialog] = useState(false);
  
  // State for previous avvik status (only used in register-revisjon context)
  const [previousAvvikStatus, setPreviousAvvikStatus] = useState<'rettet' | 'annen-form' | 'gjeldende' | null>(null);
  
  // Use rejected documents from the parent deviation object
  const rejectedDocuments = deviation.rejectedDocuments || [];
  
  // Update local state when deviation status changes from parent
  useEffect(() => {
    setCurrentStatus(deviation.status);
  }, [deviation.status]);
  
  // All fields are read-only in Avvikoversikt
  const responsible = details.responsible;
  const comment = details.comment;
  const mangel = details.mangel;
  const bevis = details.bevis;
  const krav = details.krav;
  const confirmationMethod = details.confirmationMethod;
  const rapportertAvvik = details.rapportertAvvik;
  const proposedDate = details.proposedDate;

  const getConfirmationMethodLabel = (method: ConfirmationMethod): string => {
    const labels = {
      'dokumentasjon': 'Lukking krever dokumentasjon',
      'digitalt-besok': 'Lukking krever digitalt besøk',
      'fysisk-besok': 'Lukking krever fysisk besøk'
    };
    return labels[method];
  };

  const initials = getInitials(deviation.foretakName);
  
  // Determine which state to show for digital/physical visit closings
  const isWaitingForProposal = currentStatus === 'avventer-moteforslag';
  const isTimeProposed = currentStatus === 'tidspunkt-foreslatt';
  const isVisitPlanned = currentStatus === 'besok-planlagt';
  const isWaitingForApproval = currentStatus === 'venter-godkjenning';
  const showProposedDate = isTimeProposed || isVisitPlanned || isWaitingForApproval;
  const showActionButtons = isTimeProposed || isVisitPlanned || isWaitingForApproval;
  
  // Determine states for documentation closings
  const isDokumentLevert = currentStatus === 'dokument-levert';
  const isAvventerDokumentasjon = currentStatus === 'avventer-dokumentasjon';
  
  // Handler for rejecting documents (goes back to waiting state)
  const handleRejectDocument = () => {
    // Add the current documents to rejected list with the reason
    const newRejectedDocs = [
      { filename: 'Plantevernjournal_2025.xlsx', reason: rejectComment },
      { filename: 'Bilde_feltkontroll_mai.jpg', reason: rejectComment }
    ];
    
    // Notify parent component to add rejected documents
    if (onAddRejectedDocuments) {
      onAddRejectedDocuments(deviation.id, newRejectedDocs);
    }
    
    setShowRejectDialog(false);
    setRejectComment('');
    setCurrentStatus('avventer-dokumentasjon');
    
    // Notify parent component to update the table status
    if (onStatusUpdate) {
      onStatusUpdate(deviation.id, 'avventer-dokumentasjon');
    }
  };
  
  // Handler for accepting the proposed time with loading state
  const handleAcceptTime = () => {
    setIsLoading(true);
    // Simulate API call with timeout
    setTimeout(() => {
      setCurrentStatus('besok-planlagt');
      // Notify parent component to update the table
      if (onStatusUpdate) {
        onStatusUpdate(deviation.id, 'besok-planlagt');
      }
      setIsLoading(false);
    }, 1500);
  };
  
  // Handler for proposing new time - opens calendar
  const handleProposeNewTime = () => {
    setShowCalendar(true);
  };
  
  // Handler for selecting a date from calendar
  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
    setCurrentProposedDate(date);
    setShowCalendar(false);
    // Change status to "venter-godkjenning" (waiting for farmer's approval)
    setCurrentStatus('venter-godkjenning');
    // Notify parent component to update the table
    if (onStatusUpdate) {
      onStatusUpdate(deviation.id, 'venter-godkjenning');
    }
  };

  // Special rendering for Register revisjon context
  if (context === 'register-revisjon') {
    // Random registration date (in the past)
    const registrationDate = new Date(2024, 10, 15); // November 15, 2024
    
    // Handler for "Avviket er rettet og lukket" - shows confirmation dialog
    const handleAvvikRettet = () => {
      setShowConfirmCloseDialog(true);
    };
    
    // Handler for confirming closure of previous avvik
    const handleConfirmClosePreviousAvvik = () => {
      const currentDate = new Date();
      setClosedDate(currentDate);
      setCurrentStatus('lukket');
      setShowConfirmCloseDialog(false);
      
      // Notify parent component to close avvik and clear question answer
      if (onStatusUpdate) {
        onStatusUpdate(deviation.id, 'lukket');
      }
      
      // Note: Parent component should handle:
      // 1. Closing the avvik
      // 2. Clearing the question answer (no answer selected)
      // 3. Removing the avvik mark from question
    };
    
    // Handler for "Avviket forekommer i en annen form" - shows confirmation dialog first
    const handleAvvikAnnenForm = () => {
      setShowCloseAndRegisterDialog(true);
    };
    
    // Handler for confirming "close and register new"
    const handleConfirmCloseAndRegister = () => {
      setShowCloseAndRegisterDialog(false);
      
      // Mark as closed in parent (this will close the previous avvik)
      if (onUpdateData) {
        onUpdateData(questionId, { closedPreviousAvvikId: deviation.id });
      }
      
      // Notify parent that we want to close and register new
      if (onCloseAndRegisterNew) {
        onCloseAndRegisterNew(deviation.id);
      }
    };
    
    // Handler for "Avviket er fortsatt gjeldende" - marks as ongoing
    const handleAvvikFortsattGjeldende = () => {
      setPreviousAvvikStatus('gjeldende');
    };
    
    // Handler to undo/return to selection state
    const handleAngre = () => {
      setPreviousAvvikStatus(null);
    };
    
    return (
      <div className="flex flex-col h-full overflow-y-auto bg-background">
        <div className="px-6 py-3 space-y-3">
          {/* List item with overline date and title */}
          <div className="px-0 py-1">
            <div className="flex flex-col">
              <span className="label-small text-muted-foreground">
                {formatNorwegianDate(registrationDate)}
              </span>
              <span className="body-large text-foreground">
                Tidligere registrert avvik
              </span>
            </div>
          </div>

          {/* Outline buttons for answer options - Only show if no option selected */}
          {!previousAvvikStatus && (
            <div className="flex flex-col gap-2">
              <button
                onClick={handleAvvikRettet}
                className="flex items-center justify-center h-14 px-6 rounded-[var(--radius-button)] border border-[var(--border)] bg-transparent text-foreground hover:bg-muted transition-colors"
              >
                <span className="label-medium">
                  Avviket er rettet og lukket
                </span>
              </button>

              <button
                onClick={handleAvvikAnnenForm}
                className="flex items-center justify-center h-14 px-6 rounded-[var(--radius-button)] border border-[var(--border)] bg-transparent text-foreground hover:bg-muted transition-colors"
              >
                <span className="label-medium">
                  Avviket forekommer i en annen form
                </span>
              </button>

              <button
                onClick={handleAvvikFortsattGjeldende}
                className="flex items-center justify-center h-14 px-6 rounded-[var(--radius-button)] border border-[var(--border)] bg-transparent text-foreground hover:bg-muted transition-colors"
              >
                <span className="label-medium">
                  Avviket er fortsatt gjeldende
                </span>
              </button>
            </div>
          )}

          {/* Status: Avviket forekommer i en annen form */}
          {previousAvvikStatus === 'annen-form' && (
            <div className="space-y-3">
              {/* Status message with undo button */}
              <div className="bg-[var(--primary-container)] border border-[var(--border)] rounded-[var(--radius-lg)] p-4">
                <div className="flex items-start justify-between gap-2">
                  <div className="flex-1">
                    <p className="body-medium text-[var(--primary-container-foreground)]">
                      Dette avviket er lukket. Avviket forekommer i en annen form.
                    </p>
                  </div>
                  <Button
                    variant="tertiary"
                    onClick={handleAngre}
                    className="shrink-0"
                  >
                    Angre
                  </Button>
                </div>
              </div>

              {/* New avvik registration section */}
              <div className="border border-[var(--border)] rounded-[var(--radius-lg)] p-4 space-y-3">
                <h4 className="title-medium text-foreground">
                  Registrer nytt avvik
                </h4>
                <p className="body-medium text-muted-foreground">
                  Registrer et nytt avvik for denne situasjonen.
                </p>
                
                {/* Placeholder for new avvik registration - can be expanded later */}
                <Button variant="primary" className="w-full" onClick={() => onCloseAndRegisterNew?.(deviation.id)}>
                  Start registrering
                </Button>
              </div>
            </div>
          )}

          {/* Status: Avviket er fortsatt gjeldende */}
          {previousAvvikStatus === 'gjeldende' && (
            <div className="bg-[var(--l-avvik-container)] border border-[var(--on-l-avvik-container)] rounded-[var(--radius-lg)] p-4">
              <div className="flex items-start justify-between gap-2">
                <div className="flex-1 space-y-1">
                  <p className="label-medium text-[var(--on-l-avvik-container)]">
                    Avviket er fortsatt gjeldende
                  </p>
                  <p className="body-medium text-[var(--on-l-avvik-container)]">
                    Dette avviket blir ført videre i rapporten.
                  </p>
                </div>
                <Button
                  variant="tertiary"
                  onClick={handleAngre}
                  className="shrink-0"
                >
                  Angre
                </Button>
              </div>
            </div>
          )}

          {/* Show avvik details below (severity, mangel, deadline, etc.) */}
          <div className="space-y-3">
            {/* Deviation Level/Severity Badge */}
            <div className={`flex gap-4 items-center px-2 py-0 min-h-[56px] rounded-[var(--radius-lg)] ${getSeverityColor(deviation.severity)}`}>
              <div className="size-10 flex items-center justify-center shrink-0">
                <div className="relative size-10">
                  <div className="absolute inset-0 rounded-full" style={{ backgroundColor: getSeverityColor(deviation.severity).replace('bg-', '') }}>
                    <svg className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-6" fill="none" viewBox="0 0 24 24">
                      <path d={svgPathsOld.p24139a00} fill={deviation.severity === 'kritisk' ? '#410002' : '#3d2e00'} />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <p className="label-small text-muted-foreground">
                  Resultat av vurdering
                </p>
                <p className="body-large text-foreground">
                  {getSeverityLabel(deviation.severity)}
                </p>
              </div>
              <button className="size-10 flex items-center justify-center shrink-0 hover:bg-black/5 rounded-full transition-colors">
                <svg className="w-6 h-6" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                  <path d={svgPathsOld.p2668ba00} fill="#44483B" />
                </svg>
              </button>
            </div>

            {/* Mangel */}
            <div className="p-0 w-full">
              <p className="label-small text-muted-foreground">
                Mangel
              </p>
              <p className="body-large text-foreground">
                {mangel}
              </p>
              
              {/* Expand/Collapse Button for Krav and Bevis */}
              <button
                onClick={() => setKravBevisExpanded(!kravBevisExpanded)}
                className="flex items-center gap-2 mt-2 text-primary hover:opacity-70 transition-opacity label-medium"
              >
                {kravBevisExpanded ? (
                  <>
                    <ChevronUp className="w-5 h-5" />
                    Skjul krav og bevis
                  </>
                ) : (
                  <>
                    <ChevronDown className="w-5 h-5" />
                    Vis krav og bevis
                  </>
                )}
              </button>
              
              {/* Collapsible Krav and Bevis Section */}
              {kravBevisExpanded && (
                <div className="mt-4 space-y-4">
                  {/* Krav */}
                  <div>
                    <p className="label-small text-muted-foreground">
                      Krav
                    </p>
                    <p className="body-large text-foreground">
                      {krav}
                    </p>
                  </div>

                  {/* Bevis - Read-only */}
                  <div>
                    <p className="label-small text-muted-foreground">
                      Bevis
                    </p>
                    <p className="body-large text-foreground">
                      {bevis}
                    </p>
                  </div>

                  {/* Rapportert avvik */}
                  <div>
                    <p className="label-small text-muted-foreground">
                      Rapportert avvik
                    </p>
                    <p className="body-large text-foreground">
                      {rapportertAvvik}
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Deadline */}
            <div className="w-full">
              <p className="label-small text-muted-foreground">
                Tidsfrist for lukking av avvik
              </p>
              <p className="body-large text-foreground">
                {formatNorwegianDate(deviation.deadline)}
              </p>
            </div>

            {/* Ansvarlig */}
            <div className="w-full">
              <p className="label-small text-muted-foreground">
                Ansvarlig for lukking:
              </p>
              <p className="body-large text-foreground">
                {responsible}
              </p>
            </div>

            {/* Closing Avvik Container */}
            <div className="bg-[#fafaf0] border border-[var(--border)] rounded-[var(--radius-lg)] p-6 space-y-2">
              {/* Type of Closing */}
              <div className="flex gap-2 items-center py-2">
                {confirmationMethod === 'fysisk-besok' ? (
                  <svg className="w-6 h-6 shrink-0" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                    <path d={svgPathsFysiskBesok.p1d73bd00} fill="#44483B" />
                    <path d={svgPathsFysiskBesok.p17184600} fill="#44483B" />
                    <path d={svgPathsFysiskBesok.pfba46c0} fill="#44483B" />
                    <path d={svgPathsFysiskBesok.p33b21a00} fill="#44483B" />
                  </svg>
                ) : confirmationMethod === 'dokumentasjon' ? (
                  <svg className="w-6 h-6 shrink-0" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                    <path d={svgPathsDokumentasjon.p1a55f400} fill="#44483B" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6 shrink-0" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                    <path d={svgPathsOld.p3b7e4b92} fill="#44483B" />
                  </svg>
                )}
                <p className="label-medium text-foreground">
                  {getConfirmationMethodLabel(confirmationMethod)}
                </p>
              </div>

              {/* Comment */}
              <div className="flex gap-4 items-start p-2 w-full">
                <svg className="w-6 h-6 shrink-0" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                  <path d={confirmationMethod === 'dokumentasjon' ? svgPathsDokumentasjon.p1bbda200 : svgPathsOld.p1bbda200} fill="#44483B" />
                </svg>
                <div className="flex-1">
                  <p className="label-small text-muted-foreground">
                    Kommentar
                  </p>
                  <p className="body-large text-foreground">
                    {comment}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Confirm Close Avvik Dialog - For Register revisjon context */}
        <Dialog open={showConfirmCloseDialog} onOpenChange={setShowConfirmCloseDialog}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle className="title-large text-foreground">Bekreft lukking av avvik</DialogTitle>
              <DialogDescription className="body-medium text-muted-foreground pt-2">
                Er du sikker på at du vil bekrefte lukking av følgende avvik?
              </DialogDescription>
            </DialogHeader>
            
            {/* Deviation details */}
            <div className="space-y-4 py-2">
              {/* Question */}
              <div>
                <p className="label-small text-muted-foreground">Sjekklistespørsmål</p>
                <p className="body-large text-foreground">
                  {questionId} – {deviation.checklist.split('–')[1]?.trim() || deviation.checklist}
                </p>
              </div>
              
              {/* Foretak */}
              <div>
                <p className="label-small text-muted-foreground">Foretak</p>
                <p className="body-large text-foreground">{deviation.foretakName}</p>
              </div>
              
              {/* Mangel */}
              <div>
                <p className="label-small text-muted-foreground">Mangel</p>
                <p className="body-large text-foreground">{mangel}</p>
              </div>
            </div>
            
            <DialogFooter className="gap-2">
              <Button 
                variant="secondary" 
                onClick={() => setShowConfirmCloseDialog(false)}
                className="flex-1"
              >
                Avbryt
              </Button>
              <Button 
                variant="primary"
                onClick={handleConfirmClosePreviousAvvik}
                className="flex-1"
              >
                Bekreft lukking
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        {/* Close and Register New Avvik Dialog */}
        <Dialog open={showCloseAndRegisterDialog} onOpenChange={setShowCloseAndRegisterDialog}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle className="title-large text-foreground">Lukk og registrer nytt avvik</DialogTitle>
              <DialogDescription className="body-medium text-muted-foreground pt-2">
                Er du sikker på at du vil lukke dette avviket og registrere et nytt avvik for denne situasjonen?
              </DialogDescription>
            </DialogHeader>
            
            {/* Deviation details */}
            <div className="space-y-4 py-2">
              {/* Question */}
              <div>
                <p className="label-small text-muted-foreground">Sjekklistespørsmål</p>
                <p className="body-large text-foreground">
                  {questionId} – {deviation.checklist.split('–')[1]?.trim() || deviation.checklist}
                </p>
              </div>
              
              {/* Foretak */}
              <div>
                <p className="label-small text-muted-foreground">Foretak</p>
                <p className="body-large text-foreground">{deviation.foretakName}</p>
              </div>
              
              {/* Mangel */}
              <div>
                <p className="label-small text-muted-foreground">Mangel</p>
                <p className="body-large text-foreground">{mangel}</p>
              </div>
            </div>
            
            <DialogFooter className="gap-2">
              <Button 
                variant="secondary" 
                onClick={() => setShowCloseAndRegisterDialog(false)}
                className="flex-1"
              >
                Avbryt
              </Button>
              <Button 
                variant="primary"
                onClick={handleConfirmCloseAndRegister}
                className="flex-1"
              >
                Lukk og registrer nytt avvik
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    );
  }

  // Original rendering for other contexts (avvikoversikt, tidligere-revisjon)
  return (
    <div className="flex flex-col h-full overflow-y-auto bg-background">
      <div className="px-6 py-3 space-y-3">
        {/* Question Header with Actions - Desktop */}
        <div className="hidden min-[768px]:flex gap-4 items-center justify-between">
          <h3 className="title-large">
            {questionId}
          </h3>
          {currentStatus === 'lukket' ? (
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 bg-[var(--primary-container)] rounded-[12px] px-4 py-3">
                <Check className="w-6 h-6 text-[var(--primary-container-foreground)]" />
                <div className="flex flex-col">
                  <span className="label-medium text-[var(--primary-container-foreground)]">
                    Avviket er lukket
                  </span>
                  {closedDate && (
                    <span className="label-small text-[var(--primary-container-foreground)]">
                      {formatNorwegianDate(closedDate)}
                    </span>
                  )}
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={onClose}
                aria-label="Lukk panel"
              >
                <X className="w-6 h-6" />
              </Button>
            </div>
          ) : (
            <div className="flex items-center gap-4">
              <Button
                variant="secondary"
                onClick={() => setShowConfirmCloseDialog(true)}
              >
                Bekreft lukking av avviket
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={onClose}
                aria-label="Lukk panel"
              >
                <X className="w-6 h-6" />
              </Button>
            </div>
          )}
        </div>

        {/* Question Header with Actions - Mobile */}
        <div className="flex min-[768px]:hidden gap-2 items-center justify-between">
          <h3 className="title-large">
            {questionId}
          </h3>
          {currentStatus === 'lukket' ? (
            <div className="flex items-center gap-2 bg-[var(--primary-container)] rounded-[12px] px-3 py-2 flex-1 shrink-0">
              <Check className="w-5 h-5 text-[var(--primary-container-foreground)]" />
              <div className="flex flex-col">
                <span className="label-small text-[var(--primary-container-foreground)]">
                  Avviket er lukket
                </span>
                {closedDate && (
                  <span className="label-xsmall text-[var(--primary-container-foreground)]">
                    {formatNorwegianDate(closedDate)}
                  </span>
                )}
              </div>
            </div>
          ) : (
            <Button
              variant="secondary"
              onClick={() => setShowConfirmCloseDialog(true)}
              className="shrink-0"
            >
              Bekreft lukking av avviket
            </Button>
          )}
        </div>

        {/* Question Text */}
        <h4 className="title-medium">
          {deviation.checklist.split('–')[1]?.trim() || deviation.checklist}
        </h4>

        {/* Krav Veileder Section - Right below question title */}
        {questionInfo && (
          <KravVeilederSection question={questionInfo} />
        )}

        {/* Deviation Level/Severity Badge */}
        <div className={`flex gap-4 items-center px-2 py-0 min-h-[56px] rounded-[var(--radius-lg)] ${getSeverityColor(deviation.severity)}`}>
          <div className="size-10 flex items-center justify-center shrink-0">
            <div className="relative size-10">
              <div className="absolute inset-0 rounded-full" style={{ backgroundColor: getSeverityColor(deviation.severity).replace('bg-', '') }}>
                <svg className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-6" fill="none" viewBox="0 0 24 24">
                  <path d={svgPathsOld.p24139a00} fill={deviation.severity === 'kritisk' ? '#410002' : '#3d2e00'} />
                </svg>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <p className="label-small text-muted-foreground">
              Resultat av vurdering
            </p>
            <p className="body-large text-foreground">
              {getSeverityLabel(deviation.severity)}
            </p>
          </div>
          <button className="size-10 flex items-center justify-center shrink-0 hover:bg-black/5 rounded-full transition-colors">
            <svg className="w-6 h-6" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
              <path d={svgPathsOld.p2668ba00} fill="#44483B" />
            </svg>
          </button>
        </div>

        {/* Mangel */}
        <div className="p-0 w-full">
          <p className="label-small text-muted-foreground">
            Mangel
          </p>
          <p className="body-large text-foreground">
            {mangel}
          </p>
          
          {/* Expand/Collapse Button for Krav and Bevis */}
          <button
            onClick={() => setKravBevisExpanded(!kravBevisExpanded)}
            className="flex items-center gap-2 mt-2 text-primary hover:opacity-70 transition-opacity label-medium"
          >
            {kravBevisExpanded ? (
              <>
                <ChevronUp className="w-5 h-5" />
                Skjul krav og bevis
              </>
            ) : (
              <>
                <ChevronDown className="w-5 h-5" />
                Vis krav og bevis
              </>
            )}
          </button>
          
          {/* Collapsible Krav and Bevis Section */}
          {kravBevisExpanded && (
            <div className="mt-4 space-y-4">
              {/* Krav */}
              <div>
                <p className="label-small text-muted-foreground">
                  Krav
                </p>
                <p className="body-large text-foreground">
                  {krav}
                </p>
              </div>

              {/* Bevis - Read-only */}
              <div>
                <p className="label-small text-muted-foreground">
                  Bevis
                </p>
                <p className="body-large text-foreground">
                  {bevis}
                </p>
              </div>

              {/* Rapportert avvik */}
              <div>
                <p className="label-small text-muted-foreground">
                  Rapportert avvik
                </p>
                <p className="body-large text-foreground">
                  {rapportertAvvik}
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Deadline */}
        <div className="w-full">
          <p className="label-small text-muted-foreground">
            Tidsfrist for lukking av avvik
          </p>
          <p className="body-large text-foreground">
            {formatNorwegianDate(deviation.deadline)}
          </p>
        </div>

        {/* Extension Request - Only show when status is 'onsker-fristforlengelse' */}
        {deviation.status === 'onsker-fristforlengelse' && deviation.extensionRequest && (
          <div className="bg-[var(--l-avvik-container)] border border-[var(--on-l-avvik-container)] rounded-[var(--radius-lg)] p-6 space-y-4">
            {/* Alert Header */}
            <div className="flex items-center gap-2 py-2">
              <svg className="w-6 h-6 shrink-0" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                <path d={svgPathsPostpone.p2668ba00} fill="var(--on-l-avvik-container)" />
              </svg>
              <p className="label-medium text-[var(--on-l-avvik-container)]">
                Foretaket har bedt om fristforlengelse
              </p>
            </div>

            {/* Requested Date */}
            <div className="space-y-1">
              <p className="label-small text-[var(--on-l-avvik-container)]">
                Ønsket ny frist
              </p>
              <p className="body-large text-[var(--on-l-avvik-container)]">
                {formatNorwegianDate(deviation.extensionRequest.requestedDate)}
              </p>
            </div>

            {/* Reason */}
            <div className="space-y-1">
              <p className="label-small text-[var(--on-l-avvik-container)]">
                Begrunnelse
              </p>
              <p className="body-medium text-[var(--on-l-avvik-container)]">
                "{deviation.extensionRequest.reason}"
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-2">
              <Button variant="primary" className="flex-1">
                Godta fristforlengelse
              </Button>
              <Button variant="secondary" className="flex-1">
                Avvis
              </Button>
            </div>
          </div>
        )}

        {/* Ansvarlig */}
        <div className="w-full">
          <p className="label-small text-muted-foreground">
            Ansvarlig for lukking:
          </p>
          <p className="body-large text-foreground">
            {responsible}
          </p>
        </div>

        {/* Closing Avvik Container */}
        <div className="bg-[#fafaf0] border border-[var(--border)] rounded-[var(--radius-lg)] p-6 space-y-2">
          {/* Type of Closing */}
          <div className="flex gap-2 items-center py-2">
            {confirmationMethod === 'fysisk-besok' ? (
              <svg className="w-6 h-6 shrink-0" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                <path d={svgPathsFysiskBesok.p1d73bd00} fill="#44483B" />
                <path d={svgPathsFysiskBesok.p17184600} fill="#44483B" />
                <path d={svgPathsFysiskBesok.pfba46c0} fill="#44483B" />
                <path d={svgPathsFysiskBesok.p33b21a00} fill="#44483B" />
              </svg>
            ) : confirmationMethod === 'dokumentasjon' ? (
              <svg className="w-6 h-6 shrink-0" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                <path d={svgPathsDokumentasjon.p1a55f400} fill="#44483B" />
              </svg>
            ) : (
              <svg className="w-6 h-6 shrink-0" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                <path d={svgPathsOld.p3b7e4b92} fill="#44483B" />
              </svg>
            )}
            <p className="label-medium text-foreground">
              {getConfirmationMethodLabel(confirmationMethod)}
            </p>
          </div>

          {/* Documentation States */}
          {confirmationMethod === 'dokumentasjon' && (
            <>
              {/* Status Chip - Dokument levert */}
              {isDokumentLevert && (
                <div className="inline-flex gap-2 items-center px-2 pr-4 py-1.5 border border-[var(--border)] rounded-lg">
                  <div className="bg-error rounded-full size-2" />
                  <p className="label-medium text-foreground">
                    Dokument levert
                  </p>
                </div>
              )}

              {/* Status Chip - Avventer dokumentasjon */}
              {isAvventerDokumentasjon && (
                <div className="relative inline-block rounded-lg shrink-0">
                  <div className="flex items-center justify-center overflow-clip relative rounded-inherit">
                    <div className="flex h-8 items-center justify-center px-4 py-1.5 relative shrink-0">
                      <p className="label-medium text-foreground text-center whitespace-nowrap">
                        Avventer dokumentasjon
                      </p>
                    </div>
                  </div>
                  <div aria-hidden="true" className="absolute border border-[var(--border)] border-solid inset-0 pointer-events-none rounded-lg" />
                </div>
              )}

              {/* Comment */}
              <div className="flex gap-4 items-start p-2 w-full">
                <svg className="w-6 h-6 shrink-0" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                  <path d={svgPathsDokumentasjon.p1bbda200} fill="#44483B" />
                </svg>
                <div className="flex-1">
                  <p className="label-small text-muted-foreground">
                    Kommentar
                  </p>
                  <p className="body-large text-foreground">
                    {comment}
                  </p>
                </div>
              </div>

              {/* Show Rejected Documents Button - Only show if there are rejected documents */}
              {rejectedDocuments.length > 0 && (
                <button
                  onClick={() => setShowRejectedDocs(!showRejectedDocs)}
                  className="flex items-center gap-2 px-2 py-2 text-primary hover:opacity-70 transition-opacity label-medium w-full"
                >
                  {showRejectedDocs ? (
                    <>
                      <ChevronUp className="w-5 h-5" />
                      Skjul avviste dokumenter
                    </>
                  ) : (
                    <>
                      <ChevronDown className="w-5 h-5" />
                      Vis avviste dokumenter ({rejectedDocuments.length})
                    </>
                  )}
                </button>
              )}

              {/* Rejected Documents List */}
              {showRejectedDocs && rejectedDocuments.length > 0 && (
                <div className="space-y-2">
                  {/* Section Header */}
                  <div className="px-2">
                    <p className="label-small text-muted-foreground">
                      Avviste dokumenter
                    </p>
                  </div>

                  {/* List of rejected documents grouped by reason */}
                  {Array.from(new Set(rejectedDocuments.map(d => d.reason))).map((reason, idx) => {
                    const docsWithReason = rejectedDocuments.filter(d => d.reason === reason);
                    return (
                      <div key={idx} className="space-y-1">
                        {/* Reason/Comment */}
                        <div className="px-2">
                          <p className="body-medium text-muted-foreground italic">
                            "{reason}"
                          </p>
                        </div>
                        
                        {/* Documents with this reason */}
                        <div className="w-full">
                          {docsWithReason.map((doc, docIdx) => (
                            <ListItem
                              key={`${idx}-${docIdx}`}
                              leadingIcon={
                                <X className="w-6 h-6 text-error" />
                              }
                              title={doc.filename}
                              className="rounded-[var(--radius)]"
                            />
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}

              {/* Document List - Only show when document is delivered */}
              {isDokumentLevert && (
                <>
                  {/* Divider */}
                  <div className="h-px w-full bg-[var(--border)]" />

                  {/* Document 1 - Excel file */}
                  <div className="flex gap-4 items-center px-4 py-2 min-h-[56px] w-full hover:bg-muted rounded-[var(--radius)] transition-colors">
                    <svg className="w-6 h-6 shrink-0" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                      <path d={svgPathsDokumentasjon.pccd6580} fill="#44483B" />
                    </svg>
                    <div className="flex-1">
                      <p className="body-large text-foreground">
                        Plantevernjournal_2025.xlsx
                      </p>
                    </div>
                    <button className="hover:bg-muted p-2 rounded-full transition-colors">
                      <svg className="w-6 h-6" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                        <path d={svgPathsDokumentasjon.p34810300} fill="#44483B" />
                      </svg>
                    </button>
                  </div>

                  {/* Document 2 - Image file with thumbnail */}
                  <div className="flex gap-4 items-center px-4 py-2 min-h-[72px] w-full hover:bg-muted rounded-[var(--radius)] transition-colors">
                    <div className="size-14 bg-muted rounded flex items-center justify-center overflow-hidden shrink-0">
                      <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400" />
                    </div>
                    <div className="flex-1">
                      <p className="body-large text-foreground">
                        Bilde_feltkontroll_mai.jpg
                      </p>
                    </div>
                    <button className="hover:bg-muted p-2 rounded-full transition-colors">
                      <svg className="w-6 h-6" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                        <path d={svgPathsDokumentasjon.p34810300} fill="#44483B" />
                      </svg>
                    </button>
                  </div>

                  {/* Reject Document Button */}
                  <Button variant="secondary" onClick={() => setShowRejectDialog(true)} className="w-full">
                    <svg className="w-6 h-6" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                      <path d={svgPathsDokumentasjon.p3fd9e500} fill="#44483B" />
                    </svg>
                    Avvis dokument og be om nytt
                  </Button>
                </>
              )}
            </>
          )}

          {/* Digital/Physical Visit States */}
          {(confirmationMethod === 'digitalt-besok' || confirmationMethod === 'fysisk-besok') && (
            <>
              {/* Status Chip - Tidspunkt foreslått */}
              {currentStatus === 'tidspunkt-foreslatt' && (
                <div className="relative inline-flex gap-2 items-center px-2 pr-4 py-1.5 border border-[var(--border)] rounded-lg">
                  <svg className="w-4.5 h-4.5 shrink-0" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                    <path d={svgPathsOld.p3a6e7900} fill="#4A671E" />
                  </svg>
                  <p className="label-medium text-foreground">
                    Tidspunkt foreslått
                  </p>
                  {/* Red notification badge */}
                  <div className="absolute -top-1 -right-1 bg-error rounded-full size-3" />
                </div>
              )}

              {/* Status Chip - Besøk planlagt */}
              {currentStatus === 'besok-planlagt' && (
                <div className="inline-flex gap-2 items-center px-2 pr-4 py-1.5 border border-[var(--border)] rounded-lg">
                  <p className="label-medium text-foreground">
                    Besøk planlagt
                  </p>
                </div>
              )}

              {/* Status Chip - Venter godkjenning */}
              {currentStatus === 'venter-godkjenning' && (
                <div className="inline-flex gap-2 items-center px-2 pr-4 py-1.5 border border-[var(--border)] rounded-lg">
                  <p className="label-medium text-foreground">
                    Venter godkjenning
                  </p>
                </div>
              )}

              {/* Status Chip - Avventer møteforslag */}
              {currentStatus === 'avventer-moteforslag' && (
                <div className="inline-flex gap-2 items-center px-4 py-1.5 border border-[var(--border)] rounded-lg">
                  <p className="label-medium text-foreground">
                    Avventer møteforslag
                  </p>
                </div>
              )}

              {/* Comment */}
              <div className="flex gap-4 items-start p-2 w-full">
                <svg className="w-6 h-6 shrink-0" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                  <path d={svgPathsOld.p1bbda200} fill="#44483B" />
                </svg>
                <div className="flex-1">
                  <p className="label-small text-muted-foreground">
                    Kommentar
                  </p>
                  <p className="body-large text-foreground">
                    {comment}
                  </p>
                </div>
              </div>

              {/* Divider */}
              <div className="h-px w-full bg-[var(--border)]" />

              {/* Proposed Date */}
              {showProposedDate && (
                <div className="flex gap-4 items-center px-2 min-h-[56px] w-full">
                  <svg className="w-6 h-6 shrink-0" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                    <path d={svgPathsOld.p13a8df70} fill="#44483B" />
                  </svg>
                  <div className="flex-1">
                    <p className="label-small text-muted-foreground">
                      Forslag til {confirmationMethod === 'digitalt-besok' ? 'digitalt' : 'fysisk'} besøk
                    </p>
                    <div className="flex items-center gap-2">
                      <p className="body-large text-muted-foreground">
                        {formatNorwegianDate(currentProposedDate)}
                      </p>
                      {isVisitPlanned && (
                        <p className="label-medium text-foreground">
                          Godkjent
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              {showActionButtons && (
                <div className="flex flex-wrap gap-4">
                  {isTimeProposed && (
                    <Button 
                      variant="primary" 
                      onClick={handleAcceptTime}
                      disabled={isLoading}
                      className="relative"
                    >
                      {isLoading ? (
                        <>
                          <svg className="w-6 h-6 animate-spin" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Godtar...
                        </>
                      ) : (
                        <>
                          <svg className="w-6 h-6" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                            <path d={svgPathsOld.p217bb200} fill="white" />
                          </svg>
                          Godta tidspunkt
                        </>
                      )}
                    </Button>
                  )}
                  {!isWaitingForApproval && (
                    <Button variant="secondary" onClick={handleProposeNewTime}>
                      Foreslå nytt tidspunkt
                    </Button>
                  )}
                </div>
              )}
            </>
          )}
        </div>
      </div>

      {/* Calendar Dialog */}
      {showCalendar && (
        <Dialog>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Velg nytt tidspunkt</DialogTitle>
              <DialogDescription>
                Velg en dato før {formatNorwegianDate(deviation.deadline)}
              </DialogDescription>
            </DialogHeader>
            
            {/* Simple date picker */}
            <input 
              type="date"
              max={deviation.deadline.toISOString().split('T')[0]}
              onChange={(e) => {
                const date = new Date(e.target.value);
                handleDateSelect(date);
              }}
              className="w-full px-4 py-3 border border-border rounded-[var(--radius)] body-large"
            />
            
            <DialogFooter>
              <Button variant="secondary" onClick={() => setShowCalendar(false)} className="flex-1">
                Avbryt
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}

      {/* Reject Document Dialog */}
      <Dialog open={showRejectDialog} onOpenChange={setShowRejectDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="title-large text-foreground">Avvis dokumentasjon</DialogTitle>
            <DialogDescription className="body-medium text-muted-foreground pt-2">
              Skriv en kommentar for hvorfor du avviser dokumentasjonen. Dette blir sendt til foretaket.
            </DialogDescription>
          </DialogHeader>
          
          {/* Comment textarea */}
          <div className="space-y-2">
            <label className="label-small text-muted-foreground">
              Kommentar til foretak
            </label>
            <textarea
              value={rejectComment}
              onChange={(e) => setRejectComment(e.target.value)}
              placeholder="Skriv hvorfor dokumentasjonen avvises..."
              className="w-full min-h-[120px] px-4 py-3 border border-[var(--border)] rounded-[var(--radius)] body-large resize-none focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          
          <DialogFooter className="gap-2">
            <Button 
              variant="secondary" 
              onClick={() => {
                setShowRejectDialog(false);
                setRejectComment('');
              }}
              className="flex-1"
            >
              Avbryt
            </Button>
            <Button 
              onClick={handleRejectDocument}
              disabled={!rejectComment.trim()}
              className="flex-1"
            >
              Avvis og be om nytt
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Confirm Close Avvik Dialog */}
      <Dialog open={showConfirmCloseDialog} onOpenChange={setShowConfirmCloseDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="title-large text-foreground">Bekreft lukking av avvik</DialogTitle>
            <DialogDescription className="body-medium text-muted-foreground pt-2">
              Er du sikker på at du vil bekrefte lukking av følgende avvik?
            </DialogDescription>
          </DialogHeader>
          
          {/* Deviation details */}
          <div className="space-y-4 py-2">
            {/* Question */}
            <div>
              <p className="label-small text-muted-foreground">Sjekklistespørsmål</p>
              <p className="body-large text-foreground">
                {questionId} – {deviation.checklist.split('–')[1]?.trim() || deviation.checklist}
              </p>
            </div>
            
            {/* Foretak */}
            <div>
              <p className="label-small text-muted-foreground">Foretak</p>
              <p className="body-large text-foreground">{deviation.foretakName}</p>
            </div>
            
            {/* Mangel */}
            <div>
              <p className="label-small text-muted-foreground">Mangel</p>
              <p className="body-large text-foreground">{mangel}</p>
            </div>
          </div>
          
          <DialogFooter className="gap-2">
            <Button 
              variant="secondary" 
              onClick={() => setShowConfirmCloseDialog(false)}
              className="flex-1"
            >
              Avbryt
            </Button>
            <Button 
              variant="primary"
              onClick={() => {
                const currentDate = new Date();
                setClosedDate(currentDate);
                setCurrentStatus('lukket');
                setShowConfirmCloseDialog(false);
                
                // Notify parent component to update the table status
                if (onStatusUpdate) {
                  onStatusUpdate(deviation.id, 'lukket');
                }
              }}
              className="flex-1"
            >
              Bekreft lukking
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}