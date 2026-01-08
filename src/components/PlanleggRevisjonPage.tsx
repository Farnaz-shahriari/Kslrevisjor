import { useState } from 'react';
import { Button } from './ui/button';
import { ChevronUp, ChevronDown, Filter, X, Send, Plus } from 'lucide-react';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from './ui/dialog';
import { BottomSheet } from './ui/bottom-sheet';
import { Calendar } from './ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { formatNorwegianDate, formatNorwegianDateTime } from '../utils/dateFormat';
import imgMap from "figma:asset/c0527853f7bdf08aa49e67977a1c1456feddc02b.png";

type TabType = 'kontaktinformasjon' | 'ordninger' | 'brev' | 'varemottakere' | 'logg';

interface ContactInfo {
  område: string;
  navn: string;
  epost: string;
  telefon: string;
}

interface BrevVarsel {
  bruker: string;
  dato: string;
  notat: string;
}

interface OrdningData {
  ordning: string;
  produksjon: string;
  volum: string;
  inkludertIRevisjon: 'Ja' | 'Nei';
}

interface LogEntry {
  id: string;
  bruker: string;
  dato: string;
  notat: string;
  filer: string;
}

export function PlanleggRevisjonPage() {
  const [activeTab, setActiveTab] = useState<TabType>('kontaktinformasjon');
  const [detailsExpanded, setDetailsExpanded] = useState(false);
  
  // Ordninger filter state
  const [ordningerFilterOpen, setOrdningerFilterOpen] = useState(false);
  const [ordningerFilter, setOrdningerFilter] = useState<'all' | 'Ja' | 'Nei'>('all');

  // Revision date/time state
  const [revisionDate, setRevisionDate] = useState<Date | undefined>(new Date(2025, 11, 5)); // Dec 5, 2025
  const [revisionStartTime, setRevisionStartTime] = useState('08:00');
  const [revisionEndTime, setRevisionEndTime] = useState('10:00');
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [showDateTimePicker, setShowDateTimePicker] = useState(false);
  const [tempDate, setTempDate] = useState<Date | undefined>();
  const [tempStartTime, setTempStartTime] = useState('');
  const [tempEndTime, setTempEndTime] = useState('');

  // Logg state
  const [isAddingLog, setIsAddingLog] = useState(false);
  const [newLogText, setNewLogText] = useState('');
  const [logEntries, setLogEntries] = useState<LogEntry[]>([
    {
      id: '1',
      bruker: 'Farnaz Shahriari',
      dato: '17/12/2025 - 14.37',
      notat: 'Dato for revisjon er satt til 18/12/2025',
      filer: ''
    },
    {
      id: '2',
      bruker: 'Farnaz Shahriari',
      dato: '17/12/2025 - 14.35',
      notat: 'Brev med varsel om planlagt revisjon ble skrevet ut av Farnaz Shahriari',
      filer: ''
    },
    {
      id: '3',
      bruker: 'Farnaz Shahriari',
      dato: '15/12/2025 - 10.31',
      notat: 'Brev med varsel om planlagt revisjon ble skrevet ut av Farnaz Shahriari',
      filer: ''
    },
    {
      id: '4',
      bruker: 'Farnaz Shahriari',
      dato: '12/11/2025 - 14.21',
      notat: 'otwrotwtww',
      filer: ''
    },
    {
      id: '5',
      bruker: 'Farnaz Shahriari',
      dato: '27/10/2025 - 09.43',
      notat: 'Dato for revisjon er satt til 05/12/2025',
      filer: ''
    }
  ]);

  // Handle adding a new log entry
  const handleAddLog = () => {
    if (newLogText.trim()) {
      const now = new Date();
      const dateStr = `${String(now.getDate()).padStart(2, '0')}/${String(now.getMonth() + 1).padStart(2, '0')}/${now.getFullYear()} - ${String(now.getHours()).padStart(2, '0')}.${String(now.getMinutes()).padStart(2, '0')}`;
      
      const newEntry: LogEntry = {
        id: Date.now().toString(),
        bruker: 'Farnaz Shahriari', // In real app, would be current user
        dato: dateStr,
        notat: newLogText,
        filer: ''
      };

      setLogEntries([newEntry, ...logEntries]);
      setNewLogText('');
      setIsAddingLog(false);
    }
  };

  // Handle delete revision confirmation
  const handleDeleteRevision = () => {
    setRevisionDate(undefined);
    setRevisionStartTime('');
    setRevisionEndTime('');
    setShowDeleteDialog(false);
  };

  // Handle opening date/time picker
  const handleOpenDateTimePicker = () => {
    setTempDate(revisionDate || new Date());
    setTempStartTime(revisionStartTime || '08:00');
    setTempEndTime(revisionEndTime || '10:00');
    setShowDateTimePicker(true);
  };

  // Handle saving date/time
  const handleSaveDateTime = () => {
    if (tempDate && tempStartTime && tempEndTime) {
      setRevisionDate(tempDate);
      setRevisionStartTime(tempStartTime);
      setRevisionEndTime(tempEndTime);
      setShowDateTimePicker(false);
    }
  };

  // Format date for display
  const formatDate = (date: Date) => {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  // Mock data - would come from backend in real app
  const farmAddress = "HOLTEVEIEN 138, 4639 Kristiansand s, Norway";
  const encodedAddress = encodeURIComponent(farmAddress);
  
  const contactData: ContactInfo[] = [
    {
      område: 'Generell kontaktinformasjon',
      navn: 'Full name',
      epost: 'kjellolvaa@gmail.com',
      telefon: '95066834'
    },
    {
      område: 'Generell kontaktinformasjon',
      navn: 'Full name',
      epost: 'kjellolvaa@gmail.com',
      telefon: '95066834'
    }
  ];

  const brevVarslerData: BrevVarsel[] = [
    {
      bruker: 'Farnaz Shahriari',
      dato: '26/02/2025',
      notat: 'Brev med varsel om planlagt revisjon ble skrevet ut av Farnaz Shahriari'
    },
    {
      bruker: 'Farnaz Shahriari',
      dato: '26/02/2025',
      notat: 'Varsel sendt til SMS. AuditAssignment ID: 235428, AuditConsent ID: 6547 - Type varsel: Revisor har forespurt samtykke'
    },
    {
      bruker: 'System User',
      dato: '26/02/2025',
      notat: 'Varsel sendt til epost: kjellolvaa@gmail.com, SMS: 95066834. KSL objekt ID: 29697 - Type varsel: Revisor har akseptert et oppdrag'
    },
    {
      bruker: 'KSL-sekretariatet',
      dato: '02/07/2007',
      notat: 'Masseutsendelse HMS-hefte'
    },
    {
      bruker: 'KSL-sekretariatet',
      dato: '04/10/2006',
      notat: 'Masseutsendelse hovedutsending'
    }
  ];

  const ordningerData: OrdningData[] = [
    {
      ordning: 'KSL',
      produksjon: 'Sau',
      volum: '0 (Produksjonstilskudd)',
      inkludertIRevisjon: 'Ja'
    },
    {
      ordning: 'KSL',
      produksjon: 'Geit',
      volum: '0 (Produksjonstilskudd)',
      inkludertIRevisjon: 'Ja'
    },
    {
      ordning: 'LokalMat',
      produksjon: 'Storfe',
      volum: '50 (Produksjonstilskudd)',
      inkludertIRevisjon: 'Nei'
    },
    {
      ordning: 'Spesialitet',
      produksjon: 'Melk',
      volum: '100 (Produksjonstilskudd)',
      inkludertIRevisjon: 'Ja'
    }
  ];

  const tabs = [
    { id: 'kontaktinformasjon' as TabType, label: 'Kontaktinformasjon' },
    { id: 'ordninger' as TabType, label: 'Foretakets ordninger' },
    { id: 'brev' as TabType, label: 'Brev og varsler tir foretaket' },
    { id: 'varemottakere' as TabType, label: 'Varemottakere' },
    { id: 'logg' as TabType, label: 'Logg' },
  ];

  return (
    <div className="flex flex-col h-full w-full bg-background max-[1023px]:h-auto max-[1023px]:overflow-visible overflow-y-auto min-[1024px]:overflow-hidden">
      {/* Map and Info Section - Scrollable on mobile, fixed on desktop */}
      <div className="flex flex-col min-[1024px]:flex-row gap-6 px-6 pt-6 w-full">
        {/* Map - Left Section - Stretches to fill available space with max width */}
        <div className="flex-1 max-w-[800px] h-[297px] min-[1024px]:h-[480px] relative rounded-[var(--radius-card)] overflow-hidden bg-muted border border-border shrink-0">
          <iframe
            width="100%"
            height="100%"
            style={{ border: 0, display: 'block' }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${encodedAddress}&zoom=13`}
          />
        </div>

        {/* Farm Info Card - Middle Section - Fixed width and height on desktop with scroll */}
        <div className="w-full min-[1024px]:w-[360px] min-[1024px]:h-[480px] flex flex-col gap-4 p-3 shrink-0 min-[1024px]:overflow-y-auto">
          {/* Farm Name */}
          <div className="px-1">
            <h2 className="title-medium text-foreground">Haugseter Gård</h2>
          </div>

          {/* Address */}
          <div className="flex flex-col gap-1 px-4 py-1">
            <span className="label-small text-muted-foreground">Adresse</span>
            <div className="body-large text-foreground">
              <p className="mb-0">HOLTEVEIEN 138</p>
              <p>4639 Kristiansand s</p>
            </div>
          </div>

          {/* Details Section - Expandable */}
          <div className="flex flex-col">
            <button
              onClick={() => setDetailsExpanded(!detailsExpanded)}
              className="flex items-center gap-3 h-10 px-4 hover:bg-muted rounded-[var(--radius)] transition-colors"
            >
              {detailsExpanded ? (
                <ChevronUp className="w-6 h-6 text-muted-foreground" />
              ) : (
                <ChevronDown className="w-6 h-6 text-muted-foreground" />
              )}
              <span className="body-large text-foreground">Foretaksinformasjon</span>
            </button>

            {detailsExpanded && (
              <div className="flex flex-col gap-2 pt-2">
                <div className="flex flex-col gap-1 px-4 py-2">
                  <span className="label-small text-muted-foreground">Organisasjonsnummer</span>
                  <span className="body-large text-foreground">4204015467</span>
                </div>
                <div className="flex flex-col gap-1 px-4 py-2">
                  <span className="label-small text-muted-foreground">Produksentnummer</span>
                  <span className="body-large text-foreground">4204015467</span>
                </div>
                <div className="flex flex-col gap-1 px-4 py-2">
                  <span className="label-small text-muted-foreground">Gammelt produksentnummer</span>
                  <span className="body-large text-foreground">1001022563</span>
                </div>
                <div className="flex flex-col gap-1 px-4 py-2">
                  <span className="label-small text-muted-foreground">Gårds- og bruksnummer</span>
                  <span className="body-large text-foreground">Gårdsnr. 92, bruksnr. 1</span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Revision Details Card - Right Section with Background - Fixed width and height on desktop, max 800px */}
        <div className="w-full min-[1024px]:w-[360px] max-w-[800px] min-[1024px]:h-[480px] flex flex-col gap-2 p-3 rounded-[var(--radius-card)] border border-border shrink-0 relative min-[1024px]:overflow-y-auto" style={{ backgroundColor: '#fafaf0' }}>
          {/* Section Title */}
          <div className="px-1">
            <h3 className="title-medium text-foreground">Revisjonstidspunkt</h3>
          </div>

          {revisionDate ? (
            <>
              {/* Filled State - Date and Time are set */}
              <div className="flex flex-col gap-1 px-4 py-2">
                <span className="label-small text-muted-foreground">Dato</span>
                <span className="body-large text-foreground">{formatNorwegianDate(revisionDate)}</span>
              </div>

              <div className="flex flex-col gap-1 px-4 py-2">
                <span className="label-small text-muted-foreground">Tidspunkt</span>
                <span className="body-large text-foreground">{revisionStartTime} til {revisionEndTime}</span>
              </div>

              <div className="flex flex-col gap-2 pt-2">
                <Button 
                  variant="secondary" 
                  className="w-full"
                  onClick={handleOpenDateTimePicker}
                >
                  Endre revisjonstidspunkt
                </Button>
                <Button 
                  variant="secondary" 
                  className="w-full"
                  onClick={() => setShowDeleteDialog(true)}
                >
                  Slett avtale
                </Button>
              </div>
            </>
          ) : (
            <>
              {/* Empty State - No date/time set */}
              <div className="flex flex-col gap-3 px-4 py-4">
                <p className="body-large text-muted-foreground">
                  Det er ikke satt noe revisjonstidspunkt ennå.
                </p>
                <Button 
                  variant="secondary" 
                  className="w-full"
                  onClick={handleOpenDateTimePicker}
                >
                  Sett revisjonstidspunkt
                </Button>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Delete Confirmation - Desktop Dialog */}
      <div className="max-[1023px]:hidden">
        <Dialog open={showDeleteDialog} onOpenChange={setShowDeleteDialog}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle className="title-large text-foreground">Slett avtale?</DialogTitle>
              <DialogDescription className="body-large text-muted-foreground pt-2">
                Er du sikker på at du vil slette denne revisjonsavtalen? Tidspunkt og dato vil bli fjernet.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter className="gap-2">
              <Button 
                variant="secondary" 
                onClick={() => setShowDeleteDialog(false)}
              >
                Avbryt
              </Button>
              <Button 
                variant="destructive" 
                onClick={handleDeleteRevision}
              >
                Slett avtale
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      {/* Delete Confirmation - Mobile/Tablet Bottom Sheet */}
      <BottomSheet
        isOpen={showDeleteDialog}
        onClose={() => setShowDeleteDialog(false)}
        title="Slett avtale?"
        maxHeight={50}
      >
        <div className="flex flex-col gap-6 p-6">
          <p className="body-large text-muted-foreground">
            Er du sikker på at du vil slette denne revisjonsavtalen? Tidspunkt og dato vil bli fjernet.
          </p>
          
          <div className="flex flex-col gap-3">
            <Button 
              variant="destructive" 
              onClick={handleDeleteRevision}
              className="w-full"
            >
              Slett avtale
            </Button>
            <Button 
              variant="secondary" 
              onClick={() => setShowDeleteDialog(false)}
              className="w-full"
            >
              Avbryt
            </Button>
          </div>
        </div>
      </BottomSheet>

      {/* Date/Time Picker - Desktop Dialog */}
      <div className="max-[1023px]:hidden">
        <Dialog open={showDateTimePicker} onOpenChange={setShowDateTimePicker}>
          <DialogContent className="max-w-md">
            <DialogHeader>
              <DialogTitle className="title-large text-foreground">
                {revisionDate ? 'Endre revisjonstidspunkt' : 'Sett revisjonstidspunkt'}
              </DialogTitle>
              <DialogDescription className="body-medium text-muted-foreground">
                Velg dato og tidspunkt for revisjonen
              </DialogDescription>
            </DialogHeader>
            
            <div className="flex flex-col gap-4 py-4">
              {/* Calendar */}
              <div className="flex justify-center">
                <Calendar
                  mode="single"
                  selected={tempDate}
                  onSelect={setTempDate}
                  disabled={(date) => date < new Date(new Date().setHours(0, 0, 0, 0))}
                  initialFocus
                />
              </div>

              {/* Time Inputs */}
              <div className="flex flex-col gap-3 px-2">
                <div className="flex flex-col gap-2">
                  <label className="label-medium text-foreground">Starttid</label>
                  <input
                    type="time"
                    value={tempStartTime}
                    onChange={(e) => setTempStartTime(e.target.value)}
                    className="h-12 px-3 border border-border rounded-[var(--radius)] body-large text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="label-medium text-foreground">Sluttid</label>
                  <input
                    type="time"
                    value={tempEndTime}
                    onChange={(e) => setTempEndTime(e.target.value)}
                    className="h-12 px-3 border border-border rounded-[var(--radius)] body-large text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>
            </div>

            <DialogFooter className="gap-2">
              <Button 
                variant="secondary" 
                onClick={() => setShowDateTimePicker(false)}
              >
                Avbryt
              </Button>
              <Button 
                onClick={handleSaveDateTime}
                disabled={!tempDate || !tempStartTime || !tempEndTime}
              >
                Lagre
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      {/* Date/Time Picker - Mobile/Tablet Bottom Sheet */}
      <BottomSheet
        isOpen={showDateTimePicker}
        onClose={() => setShowDateTimePicker(false)}
        title={revisionDate ? 'Endre revisjonstidspunkt' : 'Sett revisjonstidspunkt'}
        maxHeight={90}
      >
        <div className="flex flex-col gap-6 p-6">
          {/* Calendar */}
          <div className="flex justify-center">
            <Calendar
              mode="single"
              selected={tempDate}
              onSelect={setTempDate}
              disabled={(date) => date < new Date(new Date().setHours(0, 0, 0, 0))}
              initialFocus
            />
          </div>

          {/* Time Inputs */}
          <div className="flex flex-col gap-3">
            <div className="flex flex-col gap-2">
              <label className="label-medium text-foreground">Starttid</label>
              <input
                type="time"
                value={tempStartTime}
                onChange={(e) => setTempStartTime(e.target.value)}
                className="h-12 px-3 border border-border rounded-[var(--radius)] body-large text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="label-medium text-foreground">Sluttid</label>
              <input
                type="time"
                value={tempEndTime}
                onChange={(e) => setTempEndTime(e.target.value)}
                className="h-12 px-3 border border-border rounded-[var(--radius)] body-large text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col gap-3">
            <Button 
              onClick={handleSaveDateTime}
              disabled={!tempDate || !tempStartTime || !tempEndTime}
              className="w-full"
            >
              Lagre
            </Button>
            <Button 
              variant="secondary" 
              onClick={() => setShowDateTimePicker(false)}
              className="w-full"
            >
              Avbryt
            </Button>
          </div>
        </div>
      </BottomSheet>

      {/* Action Buttons Row */}
      <div className="flex flex-row flex-wrap gap-3 px-6 py-8 shrink-0">
        <Button variant="secondary" className="w-auto">
          Skriv ut varslingsbrev
        </Button>
        <Button variant="secondary" className="w-auto">
          Skriv ut plan
        </Button>
        <Button variant="secondary" className="w-auto">
          Eskaler til Stiftelsen Norsk Mat
        </Button>
        <Button variant="secondary" className="w-auto">
          Be om revisjon
        </Button>
        <Button variant="secondary" className="w-auto">
          <X className="w-5 h-5" />
          Avvis revisjon
        </Button>
      </div>

      {/* Tabs and Content */}
      <div className="flex flex-col flex-1 max-[1023px]:flex-none overflow-hidden min-[1024px]:min-h-0 shrink-0">
        {/* Tabs */}
        <div className="border-b border-border shrink-0">
          <div className="flex gap-0 overflow-x-auto px-6">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`
                    relative px-6 py-4 label-large whitespace-nowrap transition-colors
                    ${isActive ? 'text-primary' : 'text-muted-foreground hover:text-foreground'}
                  `}
                >
                  {tab.label}
                  {isActive && (
                    <div 
                      className="absolute bottom-0 left-0 right-0 h-[3px] bg-primary"
                      style={{ borderRadius: '3px 3px 0px 0px' }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab Content */}
        <div className="flex-1 max-[1023px]:flex-none overflow-auto min-[1024px]:min-h-0">
          {activeTab === 'kontaktinformasjon' && (
            <div className="flex-1 overflow-auto relative">
              {/* Contact Info Table */}
              <table className="w-full">
                <thead className="bg-surface-container-low sticky top-0 z-10">
                  <tr className="border-b border-border">
                    <th className="px-10 py-2 text-left bg-surface-container-low w-64">
                      <span className="label-medium text-foreground">Område</span>
                    </th>
                    <th className="px-4 py-2 text-left bg-surface-container-low w-48">
                      <span className="label-medium text-foreground">Navn</span>
                    </th>
                    <th className="px-4 py-2 text-left bg-surface-container-low w-64">
                      <span className="label-medium text-foreground">E-post</span>
                    </th>
                    <th className="px-4 py-2 text-left bg-surface-container-low w-40">
                      <span className="label-medium text-foreground">Telefonnummer</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {contactData.map((contact, index) => (
                    <tr
                      key={index}
                      className="border-b border-border transition-colors hover:bg-muted"
                    >
                      <td className="px-10 py-3">
                        <span className="body-medium text-foreground">{contact.område}</span>
                      </td>
                      <td className="px-4 py-3">
                        <span className="body-medium text-foreground">{contact.navn}</span>
                      </td>
                      <td className="px-4 py-3">
                        <span className="body-medium text-foreground">{contact.epost}</span>
                      </td>
                      <td className="px-4 py-3">
                        <span className="body-medium text-foreground">{contact.telefon}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {activeTab === 'ordninger' && (
            <div className="flex flex-col h-full">
              {/* Ordninger Table */}
              <div className="flex-1 overflow-auto relative">
                <table className="w-full">
                  <thead className="bg-surface-container-low sticky top-0 z-10">
                    <tr className="border-b border-border">
                      <th className="px-10 py-2 text-left bg-surface-container-low w-48">
                        <span className="label-medium text-foreground">Ordning</span>
                      </th>
                      <th className="px-4 py-2 text-left bg-surface-container-low w-40">
                        <span className="label-medium text-foreground">Produksjon</span>
                      </th>
                      <th className="px-4 py-2 text-left bg-surface-container-low w-64">
                        <span className="label-medium text-foreground">Volum</span>
                      </th>
                      <th className="px-4 py-2 text-left bg-surface-container-low w-48">
                        <div className="flex items-center gap-2">
                          <span className="label-medium text-foreground">Inkludert i revisjon</span>
                          
                          {/* Filter Icon with Badge */}
                          <div className="relative">
                            <button
                              onClick={() => setOrdningerFilterOpen(!ordningerFilterOpen)}
                              className="p-1 rounded hover:bg-muted transition-colors relative"
                              aria-label="Filter inkludert i revisjon"
                            >
                              <Filter className="w-4 h-4 text-foreground" />
                              {ordningerFilter !== 'all' && (
                                <span className="absolute -top-1 -right-1 flex items-center justify-center w-3 h-3 rounded-full bg-primary">
                                  <span className="text-white text-[8px] font-medium">1</span>
                                </span>
                              )}
                            </button>

                            {/* Filter Dropdown */}
                            {ordningerFilterOpen && (
                              <>
                                {/* Backdrop to close filter */}
                                <div 
                                  className="fixed inset-0 z-10" 
                                  onClick={() => setOrdningerFilterOpen(false)}
                                />
                                
                                {/* Filter Menu */}
                                <div className="absolute top-full left-0 mt-2 w-48 bg-background border border-border rounded-[var(--radius)] shadow-lg z-20 overflow-hidden">
                                  <div className="p-2">
                                    <button
                                      onClick={() => {
                                        setOrdningerFilter('all');
                                        setOrdningerFilterOpen(false);
                                      }}
                                      className={`w-full px-3 py-2 rounded-[var(--radius)] text-left label-medium transition-colors ${
                                        ordningerFilter === 'all' 
                                          ? 'bg-primary-container text-primary-container-foreground' 
                                          : 'text-foreground hover:bg-muted'
                                      }`}
                                    >
                                      Alle
                                    </button>
                                    
                                    <button
                                      onClick={() => {
                                        setOrdningerFilter('Ja');
                                        setOrdningerFilterOpen(false);
                                      }}
                                      className={`w-full px-3 py-2 rounded-[var(--radius)] text-left label-medium transition-colors ${
                                        ordningerFilter === 'Ja' 
                                          ? 'bg-primary-container text-primary-container-foreground' 
                                          : 'text-foreground hover:bg-muted'
                                      }`}
                                    >
                                      Ja
                                    </button>
                                    
                                    <button
                                      onClick={() => {
                                        setOrdningerFilter('Nei');
                                        setOrdningerFilterOpen(false);
                                      }}
                                      className={`w-full px-3 py-2 rounded-[var(--radius)] text-left label-medium transition-colors ${
                                        ordningerFilter === 'Nei' 
                                          ? 'bg-primary-container text-primary-container-foreground' 
                                          : 'text-foreground hover:bg-muted'
                                      }`}
                                    >
                                      Nei
                                    </button>
                                  </div>

                                  {/* Clear Filter Button */}
                                  {ordningerFilter !== 'all' && (
                                    <div className="border-t border-border p-2">
                                      <button
                                        onClick={() => {
                                          setOrdningerFilter('all');
                                          setOrdningerFilterOpen(false);
                                        }}
                                        className="w-full px-3 py-2 rounded-[var(--radius)] text-left label-medium text-error hover:bg-muted transition-colors flex items-center gap-2"
                                      >
                                        <X className="w-4 h-4" />
                                        Fjern filter
                                      </button>
                                    </div>
                                  )}
                                </div>
                              </>
                            )}
                          </div>
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {ordningerData
                      .filter(ordning => ordningerFilter === 'all' || ordning.inkludertIRevisjon === ordningerFilter)
                      .map((ordning, index) => (
                        <tr
                          key={index}
                          className="border-b border-border transition-colors hover:bg-muted"
                        >
                          <td className="px-10 py-3">
                            <span className="body-medium text-foreground">{ordning.ordning}</span>
                          </td>
                          <td className="px-4 py-3">
                            <span className="body-medium text-foreground">{ordning.produksjon}</span>
                          </td>
                          <td className="px-4 py-3">
                            <span className="body-medium text-foreground">{ordning.volum}</span>
                          </td>
                          <td className="px-4 py-3">
                            <span className="body-medium text-foreground">{ordning.inkludertIRevisjon}</span>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'brev' && (
            <div className="flex-1 overflow-auto relative">
              {/* Brev Varsel Table */}
              <table className="w-full">
                <thead className="bg-surface-container-low sticky top-0 z-10">
                  <tr className="border-b border-border">
                    <th className="px-10 py-2 text-left bg-surface-container-low w-56">
                      <span className="label-medium text-foreground">Bruker</span>
                    </th>
                    <th className="px-4 py-2 text-left bg-surface-container-low w-40">
                      <span className="label-medium text-foreground">Dato</span>
                    </th>
                    <th className="px-4 py-2 text-left bg-surface-container-low w-auto max-w-2xl">
                      <span className="label-medium text-foreground">Notat</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {brevVarslerData.map((brevVarsel, index) => (
                    <tr
                      key={index}
                      className="border-b border-border transition-colors hover:bg-muted"
                    >
                      <td className="px-10 py-3">
                        <span className="body-medium text-foreground">{brevVarsel.bruker}</span>
                      </td>
                      <td className="px-4 py-3">
                        <span className="body-medium text-foreground">{brevVarsel.dato}</span>
                      </td>
                      <td className="px-4 py-3">
                        <span className="body-medium text-foreground">{brevVarsel.notat}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {activeTab === 'varemottakere' && (
            <div className="p-6">
              <p className="body-large text-muted-foreground">Ingen varemottakere registrert</p>
            </div>
          )}

          {activeTab === 'logg' && (
            <div className="flex flex-col h-full">
              {/* Add Log Entry Section - Above table */}
              <div className="px-10 py-4 border-b border-border bg-background">
                {isAddingLog ? (
                  <div className="flex items-start gap-3 max-w-[520px]">
                    <input
                      type="text"
                      value={newLogText}
                      onChange={(e) => setNewLogText(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' && !e.shiftKey) {
                          e.preventDefault();
                          handleAddLog();
                        } else if (e.key === 'Escape') {
                          setIsAddingLog(false);
                          setNewLogText('');
                        }
                      }}
                      className="flex-1 h-14 px-4 border border-border rounded-[var(--radius-button)] body-large text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Skriv loggmelding..."
                      autoFocus
                    />
                    <Button
                      onClick={handleAddLog}
                      disabled={!newLogText.trim()}
                      className="shrink-0"
                    >
                      <Send className="w-5 h-5" />
                    </Button>
                    <Button
                      variant="secondary"
                      size="icon"
                      onClick={() => {
                        setIsAddingLog(false);
                        setNewLogText('');
                      }}
                      className="shrink-0"
                      aria-label="Avbryt"
                    >
                      <X className="w-5 h-5" />
                    </Button>
                  </div>
                ) : (
                  <Button
                    variant="secondary"
                    onClick={() => setIsAddingLog(true)}
                  >
                    <Plus className="w-5 h-5" />
                    Legg til logg
                  </Button>
                )}
              </div>

              {/* Logg Table */}
              <div className="flex-1 overflow-auto relative">
                <table className="w-full">
                  <thead className="bg-surface-container-low sticky top-0 z-10">
                    <tr className="border-b border-border">
                      <th className="px-10 py-2 text-left bg-surface-container-low w-56">
                        <span className="label-medium text-foreground">Bruker</span>
                      </th>
                      <th className="px-4 py-2 text-left bg-surface-container-low w-48">
                        <span className="label-medium text-foreground">Dato</span>
                      </th>
                      <th className="px-4 py-2 text-left bg-surface-container-low w-auto max-w-xl">
                        <span className="label-medium text-foreground">Notat</span>
                      </th>
                      <th className="px-4 py-2 text-left bg-surface-container-low w-48">
                        <span className="label-medium text-foreground">Filer</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {logEntries.map((logEntry) => (
                      <tr
                        key={logEntry.id}
                        className="border-b border-border transition-colors hover:bg-muted"
                      >
                        <td className="px-10 py-3">
                          <span className="body-medium text-foreground">{logEntry.bruker}</span>
                        </td>
                        <td className="px-4 py-3">
                          <span className="body-medium text-foreground">{logEntry.dato}</span>
                        </td>
                        <td className="px-4 py-3">
                          <span className="body-medium text-foreground">{logEntry.notat}</span>
                        </td>
                        <td className="px-4 py-3">
                          <span className="body-medium text-foreground">{logEntry.filer}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}