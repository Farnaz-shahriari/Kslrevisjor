import image_9ee13d227f2fb38ee180cd555a5381af44e5c9c9 from 'figma:asset/9ee13d227f2fb38ee180cd555a5381af44e5c9c9.png';
import image_4e2597a44a0ee1cadd79d91a560ae5ab9e54cc75 from 'figma:asset/4e2597a44a0ee1cadd79d91a560ae5ab9e54cc75.png';
import image_e7bf9a0d99eaeebeb4566f51c876beb2ebf423f6 from 'figma:asset/e7bf9a0d99eaeebeb4566f51c876beb2ebf423f6.png';
import { useState, useRef, useEffect } from 'react';
import { Switch } from './ui/switch';
import { UserInput } from './UserInput';
import { OppdragsomradeTab } from './OppdragsomradeTab';
import { Button } from './ui/button';
import { X, Plus, Trash2, ChevronDown } from 'lucide-react';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from './ui/dialog';
import { RadioButton } from './ui/radio-button';
import { BottomSheet } from './ui/bottom-sheet';
import svgPaths from '../imports/svg-v11lvym0ub';
import expandLessIcon from '../imports/svg-j26sjeopg8';

type TabType = 'kompetanse' | 'kurs' | 'oppdragskapasitet' | 'oppdragsomrade' | 'reservasjonsliste';
type SchemeType = 'ksl' | 'spesialitet' | 'lokalmat' | 'nytNorge' | 'fruktOgGront';
type FylkeType = 'oslo' | 'akershus' | 'ostfold' | 'buskerud' | 'vestfold' | 'telemark' | 'agder' | 'rogaland' | 'vestland' | 'moreOgRomsdal' | 'trondelag' | 'nordland' | 'troms' | 'finnmark' | 'innlandet';

// Mock data for different production types and capabilities
const productionData = {
  ksl: {
    'Inn på tunet': true,
    'Sau': true,
    'Melk - øko': true,
    'Melk - geit': true,
    'Korn, frø, olje- og belgvekster': true,
    'Geit': true,
    'Melk - ku': true,
    'Grønnsaker': true,
    'Grøvfor': true,
    'Potet': true,
    'Høst': true,
    'Verpehøner (egg)': true,
    'Storfe': true,
    'Svin': true,
    'Kalkuner, ender og gjess': false,
    'Oppel - fjørfe': false,
    'Slaktekylling': false,
    'Rugeegg': false,
    'Honning - bivoks FSA': false,
    'Juletrær': false,
  },
  spesialitet: {
    'Spesialitet': true,
  },
  lokalmat: {
    'Lokalmat': true,
    'Lokalmat - sertifisert virksomhet': true,
    'Lokalmat - leieproduksjon (alle produkter)': false,
  },
  nytNorge: {
    'Nyt Norge - Næringsmiddel': true,
    'Nyt Norge - Prydvekster': false,
    'Nyt Norge - Servering': false,
    'Nyt Norge - Sjømat': false,
  },
  fruktOgGront: {
    'Frukt- og grøntpakkerier': false,
  },
};

const additionalCategories = [
  'Vis produksjoner som kan legges til',
  'Kalkuner, ender og gjess',
  'Oppel - fjørfe',
  'Slaktekylling',
  'Saeat',
  'Rugeegg',
  'Røret - bivoks FSA',
  'Juleetre',
  'Tilleggsareal McDonalds',
  'Tilleggsareal vennmiljø',
  'Erter og bønner til konservesindustri',
];

// Norwegian fylker and kommuner data
const kommuneData: Record<string, Record<string, boolean>> = {
  oslo: {
    'Oslo': true, // Close to Ås
  },
  akershus: {
    'Ås': true, // Revisor lives here
    'Ski': true,
    'Oppegård': true,
    'Nesodden': true,
    'Frogn': true,
    'Vestby': true,
    'Enebakk': true,
    'Lørenskog': true,
    'Lillestrøm': true,
    'Nittedal': true,
    'Rælingen': true,
    'Aurskog-Høland': true,
    'Nes': true,
    'Gjerdrum': true,
    'Ullensaker': false,
    'Nannestad': false,
    'Eidsvoll': false,
    'Hurdal': false,
    'Asker': false,
    'Bærum': false,
  },
  ostfold: {
    'Fredrikstad': true, // Reasonably close
    'Sarpsborg': true,
    'Moss': true,
    'Halden': false,
    'Våler': false,
    'Skiptvet': false,
    'Rakkestad': false,
    'Marker': false,
    'Aremark': false,
    'Indre Østfold': false,
    'Råde': false,
    'Hvaler': false,
  },
  buskerud: {
    'Drammen': false, // A bit far
    'Lier': false,
    'Øvre Eiker': false,
    'Modum': false,
    'Krødsherad': false,
    'Sigdal': false,
    'Flesberg': false,
    'Rollag': false,
    'Nore og Uvdal': false,
    'Kongsberg': false,
    'Ringerike': false,
    'Hole': false,
    'Jevnaker': false,
  },
  vestfold: {
    'Horten': false,
    'Holmestrand': false,
    'Tønsberg': false,
    'Sandefjord': false,
    'Larvik': false,
    'Færder': false,
  },
  telemark: {
    'Porsgrunn': false,
    'Skien': false,
    'Notodden': false,
    'Siljan': false,
    'Bamble': false,
    'Kragerø': false,
    'Drangedal': false,
    'Nome': false,
    'Midt-Telemark': false,
    'Tinn': false,
    'Hjartdal': false,
    'Seljord': false,
    'Kviteseid': false,
    'Nissedal': false,
    'Fyresdal': false,
    'Tokke': false,
    'Vinje': false,
  },
  agder: {
    'Risør': false,
    'Grimstad': false,
    'Arendal': false,
    'Kristiansand': false,
    'Lindesnes': false,
    'Farsund': false,
    'Flekkefjord': false,
    'Gjerstad': false,
    'Vegårshei': false,
    'Tvedestrand': false,
    'Froland': false,
    'Lillesand': false,
    'Birkenes': false,
    'Åmli': false,
    'Iveland': false,
    'Evje og Hornnes': false,
    'Bygland': false,
    'Valle': false,
    'Bykle': false,
    'Vennesla': false,
    'Søgne': false,
    'Songdalen': false,
    'Mandal': false,
    'Lyngdal': false,
    'Hægebostad': false,
    'Kvinesdal': false,
    'Sirdal': false,
  },
  rogaland: {
    'Eigersund': false,
    'Stavanger': false,
    'Haugesund': false,
    'Sandnes': false,
    'Sokndal': false,
    'Lund': false,
    'Bjerkreim': false,
    'Hå': false,
    'Klepp': false,
    'Time': false,
    'Gjesdal': false,
    'Sola': false,
    'Randaberg': false,
    'Strand': false,
    'Hjelmeland': false,
    'Suldal': false,
    'Sauda': false,
    'Kvitsøy': false,
    'Bokn': false,
    'Tysvær': false,
    'Karmøy': false,
    'Utsira': false,
    'Vindafjord': false,
  },
  vestland: {
    'Etne': false,
    'Sveio': false,
    'Bømlo': false,
    'Stord': false,
    'Fitjar': false,
    'Tysnes': false,
    'Kvinnherad': false,
    'Ullensvang': false,
    'Eidfjord': false,
    'Ulvik': false,
    'Voss': false,
    'Kvam': false,
    'Samnanger': false,
    'Bjørnafjorden': false,
    'Austevoll': false,
    'Øygarden': false,
    'Askøy': false,
    'Alver': false,
    'Austrheim': false,
    'Fedje': false,
    'Masfjorden': false,
    'Gulen': false,
    'Solund': false,
    'Hyllestad': false,
    'Høyanger': false,
    'Vik': false,
    'Sogndal': false,
    'Aurland': false,
    'Lærdal': false,
    'Årdal': false,
    'Luster': false,
    'Askvoll': false,
    'Fjaler': false,
    'Sunnfjord': false,
    'Bremanger': false,
    'Stad': false,
    'Gloppen': false,
    'Stryn': false,
    'Bergen': false,
  },
  moreOgRomsdal: {
    'Vanylven': false,
    'Sande': false,
    'Herøy': false,
    'Ulstein': false,
    'Hareid': false,
    'Volda': false,
    'Ørsta': false,
    'Sula': false,
    'Giske': false,
    'Ålesund': false,
    'Vestnes': false,
    'Rauma': false,
    'Aukra': false,
    'Averøy': false,
    'Gjemnes': false,
    'Molde': false,
    'Hustadvika': false,
    'Surnadal': false,
    'Smøla': false,
    'Aure': false,
    'Kristiansund': false,
    'Tingvoll': false,
    'Sunndal': false,
  },
  trondelag: {
    'Trondheim': false,
    'Steinkjer': false,
    'Namsos': false,
    'Frøya': false,
    'Osen': false,
    'Oppdal': false,
    'Rennebu': false,
    'Røros': false,
    'Holtålen': false,
    'Midtre Gauldal': false,
    'Melhus': false,
    'Skaun': false,
    'Malvik': false,
    'Selbu': false,
    'Tydal': false,
    'Meråker': false,
    'Stjørdal': false,
    'Frosta': false,
    'Levanger': false,
    'Verdal': false,
    'Snåsa': false,
    'Lierne': false,
    'Røyrvik': false,
    'Namsskogan': false,
    'Grong': false,
    'Høylandet': false,
    'Overhalla': false,
    'Flatanger': false,
    'Leka': false,
    'Inderøy': false,
    'Indre Fosen': false,
    'Ørland': false,
    'Åfjord': false,
    'Orkland': false,
    'Nærøysund': false,
    'Rindal': false,
    'Hitra': false,
  },
  nordland: {
    'Bindal': false,
    'Sømna': false,
    'Brønnøy': false,
    'Vega': false,
    'Vevelstad': false,
    'Herøy': false,
    'Alstahaug': false,
    'Leirfjord': false,
    'Vefsn': false,
    'Grane': false,
    'Hattfjelldal': false,
    'Dønna': false,
    'Nesna': false,
    'Hemnes': false,
    'Rana': false,
    'Lurøy': false,
    'Træna': false,
    'Rødøy': false,
    'Meløy': false,
    'Gildeskål': false,
    'Beiarn': false,
    'Saltdal': false,
    'Fauske': false,
    'Sørfold': false,
    'Bodø': false,
    'Hamarøy': false,
    'Steigen': false,
    'Lødingen': false,
    'Evenes': false,
    'Røst': false,
    'Værøy': false,
    'Flakstad': false,
    'Vestvågøy': false,
    'Vågan': false,
    'Hadsel': false,
    'Bø': false,
    'Øksnes': false,
    'Sortland': false,
    'Andøy': false,
    'Moskenes': false,
  },
  troms: {
    'Harstad': false,
    'Tromsø': false,
    'Kvæfjord': false,
    'Tjeldsund': false,
    'Ibestad': false,
    'Gratangen': false,
    'Loabák': false,
    'Bardu': false,
    'Salangen': false,
    'Målselv': false,
    'Sørreisa': false,
    'Dyrøy': false,
    'Senjahopen': false,
    'Balsfjord': false,
    'Karlsøy': false,
    'Lyngen': false,
    'Storfjord': false,
    'Gáivuotna': false,
    'Skjervøy': false,
    'Nordreisa': false,
    'Kvænangen': false,
  },
  finnmark: {
    'Vardø': false,
    'Vadsø': false,
    'Hammerfest': false,
    'Kautokeino': false,
    'Alta': false,
    'Loppa': false,
    'Hasvik': false,
    'Kvalsund': false,
    'Måsøy': false,
    'Nordkapp': false,
    'Porsanger': false,
    'Karasjok': false,
    'Lebesby': false,
    'Gamvik': false,
    'Berlevåg': false,
    'Tana': false,
    'Nesseby': false,
    'Båtsfjord': false,
    'Sør-Varanger': false,
  },
  innlandet: {
    'Kongsvinger': false,
    'Hamar': false,
    'Lillehammer': false,
    'Gjøvik': false,
    'Ringsaker': false,
    'Løten': false,
    'Stange': false,
    'Nord-Odal': false,
    'Sør-Odal': false,
    'Eidskog': false,
    'Grue': false,
    'Åsnes': false,
    'Våler': false,
    'Elverum': false,
    'Trysil': false,
    'Åmot': false,
    'Stor-Elvdal': false,
    'Rendalen': false,
    'Engerdal': false,
    'Tolga': false,
    'Tynset': false,
    'Alvdal': false,
    'Folldal': false,
    'Os': false,
    'Dovre': false,
    'Lesja': false,
    'Skjåk': false,
    'Lom': false,
    'Vågå': false,
    'Nord-Fron': false,
    'Sel': false,
    'Sør-Fron': false,
    'Ringebu': false,
    'Øyer': false,
    'Gausdal': false,
    'Østre Toten': false,
    'Vestre Toten': false,
    'Gran': false,
    'Søndre Land': false,
    'Nordre Land': false,
    'Sør-Aurdal': false,
    'Etnedal': false,
    'Nord-Aurdal': false,
    'Vestre Slidre': false,
    'Øystre Slidre': false,
    'Vang': false,
  },
};

export function ProfilePage() {
  const [activeTab, setActiveTab] = useState<TabType>('kompetanse');
  const [selectedScheme, setSelectedScheme] = useState<SchemeType>('ksl');
  const [selectedFylke, setSelectedFylke] = useState<FylkeType>('akershus');
  const [showUnselected, setShowUnselected] = useState(true); // Changed to true - show all by default
  
  const [kslSwitches, setKslSwitches] = useState(productionData.ksl);
  const [spesialitetSwitches, setSpesialitetSwitches] = useState(productionData.spesialitet);
  const [lokalmatSwitches, setLokalmatSwitches] = useState(productionData.lokalmat);
  const [nytNorgeSwitches, setNytNorgeSwitches] = useState(productionData.nytNorge);
  const [fruktOgGrontSwitches, setFruktOgGrontSwitches] = useState(productionData.fruktOgGront);
  const [additionalCategorySwitches, setAdditionalCategorySwitches] = useState<Record<string, boolean>>(
    Object.fromEntries(additionalCategories.map(cat => [cat, false]))
  );
  const [oppfolgingGyldigKSL, setOppfolgingGyldigKSL] = useState(true);

  // Oppdragsområde states - one state per fylke
  const [osloKommuner, setOsloKommuner] = useState(kommuneData.oslo);
  const [akershusKommuner, setAkershusKommuner] = useState(kommuneData.akershus);
  const [ostfoldKommuner, setOstfoldKommuner] = useState(kommuneData.ostfold);
  const [buskerudKommuner, setBuskerudKommuner] = useState(kommuneData.buskerud);
  const [vestfoldKommuner, setVestfoldKommuner] = useState(kommuneData.vestfold);
  const [telemarkKommuner, setTelemarkKommuner] = useState(kommuneData.telemark);
  const [agderKommuner, setAgderKommuner] = useState(kommuneData.agder);
  const [rogalandKommuner, setRogalandKommuner] = useState(kommuneData.rogaland);
  const [vestlandKommuner, setVestlandKommuner] = useState(kommuneData.vestland);
  const [moreOgRomsdalKommuner, setMoreOgRomsdalKommuner] = useState(kommuneData.moreOgRomsdal);
  const [trondelagKommuner, setTrondelagKommuner] = useState(kommuneData.trondelag);
  const [nordlandKommuner, setNordlandKommuner] = useState(kommuneData.nordland);
  const [tromsKommuner, setTromsKommuner] = useState(kommuneData.troms);
  const [finnmarkKommuner, setFinnmarkKommuner] = useState(kommuneData.finnmark);
  const [innlandetKommuner, setInnlandetKommuner] = useState(kommuneData.innlandet);

  // Profile field states
  const [profileData, setProfileData] = useState({
    name: 'Liv Berg',
    phone: '+474015467',
    email: 'Liv.berg@ksl.no',
    address: 'Åsvegen 24',
    postalCode: '1430 Ås',
  });

  // Oppdragskapasitet states
  const currentYear = new Date().getFullYear();
  const [selectedYear, setSelectedYear] = useState(currentYear);
  const [capacityData, setCapacityData] = useState<Record<number, { spring: number; fall: number }>>({
    [currentYear - 1]: { spring: 100, fall: 100 },
    [currentYear]: { spring: 100, fall: 100 },
    [currentYear + 1]: { spring: 100, fall: 100 },
  });

  // Kurs tab states
  interface Course {
    id: string;
    kursnavn: string;
    kursholder: string;
    kursdato: string;
    kursbevis: string;
  }

  const [courses, setCourses] = useState<Course[]>([
    {
      id: '1',
      kursnavn: 'Mattrygghet og HACCP',
      kursholder: 'Norsk Mat Kompetansesenter',
      kursdato: 'Tirsdag 15. mars 2025',
      kursbevis: image_4e2597a44a0ee1cadd79d91a560ae5ab9e54cc75
    },
    {
      id: '2',
      kursnavn: 'Dyrevelferd i Landbruk',
      kursholder: 'Landbrukets Velferdsforum',
      kursdato: 'Onsdag 22. april 2025',
      kursbevis: image_e7bf9a0d99eaeebeb4566f51c876beb2ebf423f6
    },
    {
      id: '3',
      kursnavn: 'Økologisk Produksjon - Grunnkurs',
      kursholder: 'Debio Sertifisering',
      kursdato: 'Mandag 10. mai 2025',
      kursbevis: image_9ee13d227f2fb38ee180cd555a5381af44e5c9c9
    },
  ]);
  
  const [selectedCourseId, setSelectedCourseId] = useState<string | null>('1');
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [courseToDelete, setCourseToDelete] = useState<string | null>(null);
  const [newCourse, setNewCourse] = useState<Omit<Course, 'id'>>({
    kursnavn: '',
    kursholder: '',
    kursdato: '',
    kursbevis: '',
  });
  const [newCourseImageFile, setNewCourseImageFile] = useState<string | null>(null);
  const kursbevisInputRef = useRef<HTMLInputElement>(null);

  // Bottom sheet states for mobile
  const [showKompetanseSheet, setShowKompetanseSheet] = useState(false);
  const [showKursSheet, setShowKursSheet] = useState(false);
  const [showReservasjonSheet, setShowReservasjonSheet] = useState(false);
  const [showKapasitetSheet, setShowKapasitetSheet] = useState(false);
  const [showOmradeSheet, setShowOmradeSheet] = useState(false);

  // Temporary state for tracking changes in bottom sheets (before saving)
  const [tempKslSwitches, setTempKslSwitches] = useState(kslSwitches);
  const [tempSpesialitetSwitches, setTempSpesialitetSwitches] = useState(spesialitetSwitches);
  const [tempLokalmatSwitches, setTempLokalmatSwitches] = useState(lokalmatSwitches);
  const [tempNytNorgeSwitches, setTempNytNorgeSwitches] = useState(nytNorgeSwitches);
  const [tempFruktOgGrontSwitches, setTempFruktOgGrontSwitches] = useState(fruktOgGrontSwitches);
  const [tempCapacityData, setTempCapacityData] = useState(capacityData);
  const [tempSelectedFylke, setTempSelectedFylke] = useState(selectedFylke);

  const handleAddCourse = () => {
    if (newCourse.kursnavn && newCourse.kursholder && newCourse.kursdato) {
      const courseToAdd: Course = {
        id: Date.now().toString(),
        ...newCourse,
        kursbevis: newCourseImageFile || newCourse.kursbevis,
      };
      setCourses(prev => [...prev, courseToAdd]);
      setNewCourse({ kursnavn: '', kursholder: '', kursdato: '', kursbevis: '' });
      setNewCourseImageFile(null);
      setIsDialogOpen(false);
      setSelectedCourseId(courseToAdd.id);
    }
  };

  const handleDeleteCourseClick = (courseId: string) => {
    setCourseToDelete(courseId);
    setIsDeleteDialogOpen(true);
  };

  const handleDeleteCourse = () => {
    if (!courseToDelete) return;
    
    const currentIndex = courses.findIndex(c => c.id === courseToDelete);
    const filteredCourses = courses.filter(c => c.id !== courseToDelete);
    
    setCourses(filteredCourses);
    
    // Select next course if we deleted the selected one
    if (selectedCourseId === courseToDelete) {
      if (filteredCourses.length > 0) {
        // Select the next course, or the previous one if we deleted the last
        const nextIndex = currentIndex < filteredCourses.length ? currentIndex : currentIndex - 1;
        setSelectedCourseId(filteredCourses[nextIndex].id);
      } else {
        setSelectedCourseId(null);
      }
    }
    
    setIsDeleteDialogOpen(false);
    setCourseToDelete(null);
  };

  const handleKursbevisUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewCourseImageFile(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  // Reservasjonsliste tab states
  interface Reservation {
    id: string;
    foretak: string;
    arsak: 'nær-relasjon' | 'annen';
    begrunnelse?: string;
  }

  // List of all available foretak
  const allForetak = [
    'Gård & Grønt AS',
    'Norsk Landbruk Holding',
    'Fjellgården Produksjon',
    'Kystgård AS',
    'Økologisk Familiegård',
    'Nordhaugen Gård',
    'Sunnmøre Landbruk',
    'Østfold Gartneri AS',
    'Vestfold Gårdsdrift',
    'Telemark Økogård',
    'Rogaland Dyregård AS',
    'Buskerud Grønnsaker',
    'Agder Kornproduksjon',
    'Trøndelag Melkeproduksjon AS',
    'Nordland Sau og Geit',
    'Finnmark Rein AS',
    'Hedmark Storfegård',
    'Oppland Økologisk',
    'Sogn Frukt AS',
    'Hardanger Eplegård',
    'Valdres Potetgård',
    'Hallingdal Grøvfor AS',
    'Setesdal Gartneri',
    'Numedal Gårdsdrift',
    'Ringerike Melkeproduksjon',
    'Hadeland Kornproduksjon AS',
    'Romerike Grønnsaker',
    'Follo Økogård AS',
    'Moss Gartneri Produksjon',
    'Fredrikstad Landbruk AS',
  ];

  const [reservations, setReservations] = useState<Reservation[]>([
    {
      id: '1',
      foretak: 'Gård & Grønt AS',
      arsak: 'nær-relasjon',
    },
    {
      id: '2',
      foretak: 'Fjellgården Produksjon',
      arsak: 'annen',
      begrunnelse: 'Tidligere samarbeidspartner i familiebedrift',
    },
  ]);

  const [selectedReservationId, setSelectedReservationId] = useState<string | null>('1');
  const [isReservationDialogOpen, setIsReservationDialogOpen] = useState(false);
  const [isDeleteReservationDialogOpen, setIsDeleteReservationDialogOpen] = useState(false);
  const [reservationToDelete, setReservationToDelete] = useState<string | null>(null);
  const [newReservation, setNewReservation] = useState<Omit<Reservation, 'id'>>({
    foretak: '',
    arsak: 'nær-relasjon',
    begrunnelse: '',
  });
  const [foretakSearchTerm, setForetakSearchTerm] = useState('');
  const [showForetakDropdown, setShowForetakDropdown] = useState(false);
  const foretakInputRef = useRef<HTMLInputElement>(null);
  const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0, width: 0 });

  const filteredForetak = allForetak.filter(f => 
    f.toLowerCase().includes(foretakSearchTerm.toLowerCase())
  );

  // Update dropdown position when it opens
  useEffect(() => {
    if (showForetakDropdown && foretakInputRef.current) {
      const rect = foretakInputRef.current.getBoundingClientRect();
      setDropdownPosition({
        top: rect.bottom + 4,
        left: rect.left,
        width: rect.width,
      });
    }
  }, [showForetakDropdown]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (showForetakDropdown && 
          foretakInputRef.current && 
          !foretakInputRef.current.contains(event.target as Node)) {
        // Check if click is not on the dropdown itself
        const target = event.target as HTMLElement;
        if (!target.closest('.foretak-dropdown')) {
          setShowForetakDropdown(false);
        }
      }
    };

    if (showForetakDropdown) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [showForetakDropdown]);

  const handleAddReservation = () => {
    if (newReservation.foretak) {
      // Validate begrunnelse if arsak is 'annen'
      if (newReservation.arsak === 'annen' && !newReservation.begrunnelse?.trim()) {
        return; // Don't add if begrunnelse is required but empty
      }

      const reservationToAdd: Reservation = {
        id: Date.now().toString(),
        ...newReservation,
      };
      setReservations(prev => [...prev, reservationToAdd]);
      setNewReservation({ foretak: '', arsak: 'nær-relasjon', begrunnelse: '' });
      setForetakSearchTerm('');
      setIsReservationDialogOpen(false);
      setSelectedReservationId(reservationToAdd.id);
    }
  };

  const handleDeleteReservationClick = (reservationId: string) => {
    setReservationToDelete(reservationId);
    setIsDeleteReservationDialogOpen(true);
  };

  const handleDeleteReservation = () => {
    if (!reservationToDelete) return;
    
    const currentIndex = reservations.findIndex(r => r.id === reservationToDelete);
    const filteredReservations = reservations.filter(r => r.id !== reservationToDelete);
    
    setReservations(filteredReservations);
    
    // Select next reservation if we deleted the selected one
    if (selectedReservationId === reservationToDelete) {
      if (filteredReservations.length > 0) {
        const nextIndex = currentIndex < filteredReservations.length ? currentIndex : currentIndex - 1;
        setSelectedReservationId(filteredReservations[nextIndex].id);
      } else {
        setSelectedReservationId(null);
      }
    }
    
    setIsDeleteReservationDialogOpen(false);
    setReservationToDelete(null);
  };

  const [profilePicture, setProfilePicture] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePicture(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemovePicture = () => {
    setProfilePicture(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleKslSwitch = (key: string, value: boolean) => {
    setKslSwitches(prev => ({ ...prev, [key]: value }));
  };

  const handleSpesialitetSwitch = (key: string, value: boolean) => {
    setSpesialitetSwitches(prev => ({ ...prev, [key]: value }));
  };

  const handleLokalmatSwitch = (key: string, value: boolean) => {
    setLokalmatSwitches(prev => ({ ...prev, [key]: value }));
  };

  const handleNytNorgeSwitch = (key: string, value: boolean) => {
    setNytNorgeSwitches(prev => ({ ...prev, [key]: value }));
  };

  const handleFruktOgGrontSwitch = (key: string, value: boolean) => {
    setFruktOgGrontSwitches(prev => ({ ...prev, [key]: value }));
  };

  const handleAdditionalSwitch = (key: string, value: boolean) => {
    setAdditionalCategorySwitches(prev => ({ ...prev, [key]: value }));
  };

  const countActive = (switches: Record<string, boolean>) => {
    return Object.values(switches).filter(Boolean).length;
  };

  // Handlers for Kompetanse bottom sheet
  const handleKompetanseSheetOpen = (scheme: SchemeType) => {
    setSelectedScheme(scheme);
    // Load current values into temp state
    setTempKslSwitches(kslSwitches);
    setTempSpesialitetSwitches(spesialitetSwitches);
    setTempLokalmatSwitches(lokalmatSwitches);
    setTempNytNorgeSwitches(nytNorgeSwitches);
    setTempFruktOgGrontSwitches(fruktOgGrontSwitches);
    if (window.innerWidth < 1400) {
      setShowKompetanseSheet(true);
    }
  };

  const handleKompetanseSave = () => {
    // Save temp state to actual state
    setKslSwitches(tempKslSwitches);
    setSpesialitetSwitches(tempSpesialitetSwitches);
    setLokalmatSwitches(tempLokalmatSwitches);
    setNytNorgeSwitches(tempNytNorgeSwitches);
    setFruktOgGrontSwitches(tempFruktOgGrontSwitches);
    setShowKompetanseSheet(false);
  };

  const handleKompetanseCancel = () => {
    // Discard changes and close
    setTempKslSwitches(kslSwitches);
    setTempSpesialitetSwitches(spesialitetSwitches);
    setTempLokalmatSwitches(lokalmatSwitches);
    setTempNytNorgeSwitches(nytNorgeSwitches);
    setTempFruktOgGrontSwitches(fruktOgGrontSwitches);
    setShowKompetanseSheet(false);
  };

  // Check if Kompetanse has changes
  const hasKompetanseChanges = () => {
    return JSON.stringify(tempKslSwitches) !== JSON.stringify(kslSwitches) ||
           JSON.stringify(tempSpesialitetSwitches) !== JSON.stringify(spesialitetSwitches) ||
           JSON.stringify(tempLokalmatSwitches) !== JSON.stringify(lokalmatSwitches) ||
           JSON.stringify(tempNytNorgeSwitches) !== JSON.stringify(nytNorgeSwitches) ||
           JSON.stringify(tempFruktOgGrontSwitches) !== JSON.stringify(fruktOgGrontSwitches);
  };

  // Handlers for Oppdragskapasitet bottom sheet
  const handleKapasitetSheetOpen = (year: number) => {
    setSelectedYear(year);
    setTempCapacityData(capacityData);
    if (window.innerWidth < 1400) {
      setShowKapasitetSheet(true);
    }
  };

  const handleKapasitetSave = () => {
    setCapacityData(tempCapacityData);
    setShowKapasitetSheet(false);
  };

  const handleKapasitetCancel = () => {
    setTempCapacityData(capacityData);
    setShowKapasitetSheet(false);
  };

  const hasKapasitetChanges = () => {
    return JSON.stringify(tempCapacityData) !== JSON.stringify(capacityData);
  };

  // Handlers for Oppdragsområde bottom sheet
  const handleOmradeSheetOpen = (fylke: string) => {
    setSelectedFylke(fylke);
    setTempSelectedFylke(selectedFylke);
    if (window.innerWidth < 1400) {
      setShowOmradeSheet(true);
    }
  };

  const handleOmradeSave = () => {
    setSelectedFylke(tempSelectedFylke);
    setShowOmradeSheet(false);
  };

  const handleOmradeCancel = () => {
    setTempSelectedFylke(selectedFylke);
    setShowOmradeSheet(false);
  };

  const hasOmradeChanges = () => {
    return tempSelectedFylke !== selectedFylke;
  };

  return (
    <div className="flex flex-col h-full w-full overflow-hidden bg-background">
      {/* Header */}
      <div className="px-6 pt-6 pb-4">
        <h2 className="title-large text-foreground">Revisorprofil</h2>
      </div>

      {/* Content - scrollable */}
      <div className="flex-1 overflow-y-auto px-6 pb-6">
        {/* Profile Section - Responsive Layout */}
        <div className="mb-6">
          <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-start">
            {/* Profile Picture + Name Section - Left Side */}
            <div className="w-full md:w-[274px] shrink-0">
              {/* Avatar with Plus Button */}
              <div className="relative w-28 h-28 mb-6">
                <div className="size-28 rounded-full bg-primary-container flex items-center justify-center">
                  {profilePicture ? (
                    <img
                      src={profilePicture}
                      alt="Profile"
                      className="w-28 h-28 rounded-full object-cover"
                    />
                  ) : (
                    <svg className="w-16 h-16" fill="none" viewBox="0 0 112 112">
                      <path clipRule="evenodd" d={svgPaths.pee4ef00} fill="var(--primary)" fillRule="evenodd" />
                      <path d={svgPaths.p2a3b8000} fill="var(--primary)" />
                    </svg>
                  )}
                </div>

                {/* Plus Icon Button - Bottom Right */}
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileChange}
                  className="hidden"
                  accept="image/*"
                />
                <button
                  onClick={handleUploadClick}
                  className="absolute bottom-0 right-0 w-10 h-10 rounded-full bg-[var(--muted)] hover:bg-[var(--muted)]/80 flex items-center justify-center transition-colors border-2 border-background"
                  aria-label="Upload profile picture"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24">
                    <path d="M12 5V19M5 12H19" stroke="var(--foreground)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>

                {/* Remove button - only show when picture exists */}
                {profilePicture && (
                  <button
                    onClick={handleRemovePicture}
                    className="absolute top-0 right-0 w-8 h-8 rounded-full bg-error hover:bg-error/80 flex items-center justify-center transition-colors border-2 border-background"
                    aria-label="Remove profile picture"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24">
                      <path d="M6 18L18 6M6 6l12 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                )}
              </div>

              {/* Name - Non-editable */}
              <div className="box-border flex flex-col items-start p-2 w-full">
                <div className="label-small text-muted-foreground w-full">
                  <p className="m-0">Navn</p>
                </div>
                <div className="body-large text-foreground w-full">
                  <p className="m-0">{profileData.name}</p>
                </div>
              </div>

              {/* Revurderingsoppdrag */}
              <div className="box-border flex flex-col items-start p-2 w-full">
                <div className="label-small text-muted-foreground w-full">
                  <p className="m-0">Foretak</p>
                </div>
                <div className="body-large text-foreground w-full">
                  <p className="m-0">Søndre Arhus Gård DA</p>
                  <p className="body-medium text-muted-foreground m-0">Org nr: 993 345 678</p>
                </div>
              </div>
            </div>

            {/* Contact Information - Right Side */}
            <div className="flex-1 flex flex-col gap-0">
              {/* Subheader */}
              <div className="max-w-[800px] mb-4">
                <h4 className="title-small text-muted-foreground px-2">Kontaktinformasjon</h4>
              </div>

              {/* Phone - Editable */}
              <UserInput
                label="Telefon"
                value={profileData.phone}
                onChange={(value) => setProfileData(prev => ({ ...prev, phone: value }))}
              />

              {/* Email - Editable */}
              <UserInput
                label="E-post"
                value={profileData.email}
                onChange={(value) => setProfileData(prev => ({ ...prev, email: value }))}
              />

              {/* Address - Editable */}
              <UserInput
                label="Adresse"
                value={profileData.address}
                onChange={(value) => setProfileData(prev => ({ ...prev, address: value }))}
              />

              {/* Postal Code - Editable */}
              <UserInput
                label="Postnummer"
                value={profileData.postalCode}
                onChange={(value) => setProfileData(prev => ({ ...prev, postalCode: value }))}
              />

              {/* Switch for "Oppfølging gyldig KSL" */}
              <div className="box-border flex gap-4 items-center p-2 w-full mt-2">
                <Switch
                  checked={oppfolgingGyldigKSL}
                  onCheckedChange={setOppfolgingGyldigKSL}
                />
                <p className="body-large text-foreground">Oppfølging gyldig KSL</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="border-b border-[var(--border)] mb-6">
          <div className="flex gap-0">
            <button
              onClick={() => setActiveTab('kompetanse')}
              className={`px-4 py-3.5 label-medium transition-colors relative ${
                activeTab === 'kompetanse'
                  ? 'text-primary'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Kompetanse
              {activeTab === 'kompetanse' && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-t-full" />
              )}
            </button>
            <button
              onClick={() => setActiveTab('kurs')}
              className={`px-4 py-3.5 label-medium transition-colors relative ${
                activeTab === 'kurs'
                  ? 'text-primary'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Kurs
              {activeTab === 'kurs' && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-t-full" />
              )}
            </button>
            <button
              onClick={() => setActiveTab('oppdragskapasitet')}
              className={`px-4 py-3.5 label-medium transition-colors relative ${
                activeTab === 'oppdragskapasitet'
                  ? 'text-primary'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Oppdragskapasitet
              {activeTab === 'oppdragskapasitet' && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-t-full" />
              )}
            </button>
            <button
              onClick={() => setActiveTab('oppdragsomrade')}
              className={`px-4 py-3.5 label-medium transition-colors relative ${
                activeTab === 'oppdragsomrade'
                  ? 'text-primary'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Oppdragsområde
              {activeTab === 'oppdragsomrade' && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-t-full" />
              )}
            </button>
            <button
              onClick={() => setActiveTab('reservasjonsliste')}
              className={`px-4 py-3.5 label-medium transition-colors relative ${
                activeTab === 'reservasjonsliste'
                  ? 'text-primary'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Reservasjonsliste
              {activeTab === 'reservasjonsliste' && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-t-full" />
              )}
            </button>
          </div>
        </div>

        {/* Tab Content */}
        <div className="space-y-4">
          {activeTab === 'kompetanse' && (
            <div className="flex gap-12">
              {/* Left Menu - Schemes */}
              <div className="w-full min-[1400px]:w-[274px] shrink-0">
                {/* Section Header */}
                <div className="mb-4">
                  <h4 className="title-small text-muted-foreground px-2">Ordning</h4>
                </div>

                {/* Scheme Menu Items */}
                <div className="space-y-2">
                  {/* KSL */}
                  <button
                    onClick={() => handleKompetanseSheetOpen('ksl')}
                    className={`flex items-center justify-between w-full h-14 px-6 py-4 rounded-[100px] transition-colors ${
                      selectedScheme === 'ksl'
                        ? 'bg-[#dae2ff]'
                        : 'hover:bg-[var(--muted)]'
                    }`}
                  >
                    <span className={`label-large ${selectedScheme === 'ksl' ? 'text-[#174295]' : 'text-foreground'}`}>
                      KSL
                    </span>
                    <span className={`label-medium ${selectedScheme === 'ksl' ? 'text-[#174295]' : 'text-foreground'}`}>
                      {countActive(kslSwitches)} Produksjoner
                    </span>
                  </button>

                  {/* Spesialitet */}
                  <button
                    onClick={() => handleKompetanseSheetOpen('spesialitet')}
                    className={`flex items-center justify-between w-full h-14 px-6 py-4 rounded-[100px] transition-colors ${
                      selectedScheme === 'spesialitet'
                        ? 'bg-[#dae2ff]'
                        : 'hover:bg-[var(--muted)]'
                    }`}
                  >
                    <span className={`label-large ${selectedScheme === 'spesialitet' ? 'text-[#174295]' : 'text-foreground'}`}>
                      Spesialitet
                    </span>
                    <span className={`label-medium ${selectedScheme === 'spesialitet' ? 'text-[#174295]' : 'text-foreground'}`}>
                      {countActive(spesialitetSwitches)} Produksjoner
                    </span>
                  </button>

                  {/* Lokalmat */}
                  <button
                    onClick={() => handleKompetanseSheetOpen('lokalmat')}
                    className={`flex items-center justify-between w-full h-14 px-6 py-4 rounded-[100px] transition-colors ${
                      selectedScheme === 'lokalmat'
                        ? 'bg-[#dae2ff]'
                        : 'hover:bg-[var(--muted)]'
                    }`}
                  >
                    <span className={`label-large ${selectedScheme === 'lokalmat' ? 'text-[#174295]' : 'text-foreground'}`}>
                      Lokalmat
                    </span>
                    <span className={`label-medium ${selectedScheme === 'lokalmat' ? 'text-[#174295]' : 'text-foreground'}`}>
                      {countActive(lokalmatSwitches)} Produksjoner
                    </span>
                  </button>

                  {/* Nyt Norge */}
                  <button
                    onClick={() => handleKompetanseSheetOpen('nytNorge')}
                    className={`flex items-center justify-between w-full h-14 px-6 py-4 rounded-[100px] transition-colors ${
                      selectedScheme === 'nytNorge'
                        ? 'bg-[#dae2ff]'
                        : 'hover:bg-[var(--muted)]'
                    }`}
                  >
                    <span className={`label-large ${selectedScheme === 'nytNorge' ? 'text-[#174295]' : 'text-foreground'}`}>
                      Nyt Norge
                    </span>
                    <span className={`label-medium ${selectedScheme === 'nytNorge' ? 'text-[#174295]' : 'text-foreground'}`}>
                      {countActive(nytNorgeSwitches)} Produksjoner
                    </span>
                  </button>

                  {/* Frukt- og grøntpakkerier */}
                  <button
                    onClick={() => handleKompetanseSheetOpen('fruktOgGront')}
                    className={`flex items-start justify-between w-full min-h-[56px] px-6 py-4 rounded-[100px] transition-colors ${
                      selectedScheme === 'fruktOgGront'
                        ? 'bg-[#dae2ff]'
                        : 'hover:bg-[var(--muted)]'
                    }`}
                  >
                    <span className={`label-large text-left pr-2 ${selectedScheme === 'fruktOgGront' ? 'text-[#174295]' : 'text-foreground'}`}>
                      Frukt- og grøntpakkerier
                    </span>
                    <span className={`label-medium flex-shrink-0 whitespace-nowrap ${selectedScheme === 'fruktOgGront' ? 'text-[#174295]' : 'text-foreground'}`}>
                      {countActive(fruktOgGrontSwitches)} Produksjoner
                    </span>
                  </button>
                </div>
              </div>

              {/* Right Panel - Productions Detail - Hidden on mobile */}
              <div className="hidden min-[1400px]:block flex-1">
                {/* Title */}
                <div className="mb-4">
                  <h4 className="title-small text-muted-foreground px-2">
                    {selectedScheme === 'ksl' && 'KSL Produksjoner i din kompetanse'}
                    {selectedScheme === 'spesialitet' && 'Spesialitet Produksjoner i din kompetanse'}
                    {selectedScheme === 'lokalmat' && 'Lokalmat Produksjoner i din kompetanse'}
                    {selectedScheme === 'nytNorge' && 'Nyt Norge Produksjoner i din kompetanse'}
                    {selectedScheme === 'fruktOgGront' && 'Frukt- og grøntpakkerier Produksjoner i din kompetanse'}
                  </h4>
                </div>

                {/* Selected Productions */}
                {selectedScheme === 'ksl' && (
                  <div className="space-y-0">
                    {Object.entries(kslSwitches)
                      .filter(([_, value]) => value)
                      .map(([key, value]) => (
                        <div key={key} className="flex items-center gap-4 px-4 h-14">
                          <Switch
                            checked={value}
                            onCheckedChange={(checked) => handleKslSwitch(key, checked)}
                          />
                          <p className="body-large text-foreground">{key}</p>
                        </div>
                      ))}

                    {/* Unselected Productions - shown by default */}
                    {showUnselected &&
                      Object.entries(kslSwitches)
                        .filter(([_, value]) => !value)
                        .map(([key, value]) => (
                          <div key={key} className="flex items-center gap-4 px-4 h-14">
                            <Switch
                              checked={value}
                              onCheckedChange={(checked) => handleKslSwitch(key, checked)}
                            />
                            <p className="body-large text-muted-foreground">{key}</p>
                          </div>
                        ))}

                    {/* Collapse Button */}
                    {Object.entries(kslSwitches).filter(([_, value]) => !value).length > 0 && (
                      <button
                        onClick={() => setShowUnselected(!showUnselected)}
                        className="flex items-center gap-2 px-4 h-14 w-full hover:bg-[var(--muted)] transition-colors"
                      >
                        <div className="w-6 h-6">
                          <svg className="block size-full" fill="none" viewBox="0 0 24 24">
                            <path
                              d={showUnselected ? expandLessIcon.p2b8d2f00 : 'M12 15.705L6 9.705L7.41 8.295L12 12.875L16.59 8.295L18 9.705L12 15.705Z'}
                              fill="#44483B"
                            />
                          </svg>
                        </div>
                        <p className="body-large text-foreground">Produksjoner som kan legges til</p>
                      </button>
                    )}
                  </div>
                )}

                {selectedScheme === 'spesialitet' && (
                  <div className="space-y-0">
                    {Object.entries(spesialitetSwitches)
                      .filter(([_, value]) => value)
                      .map(([key, value]) => (
                        <div key={key} className="flex items-center gap-4 px-4 h-14">
                          <Switch
                            checked={value}
                            onCheckedChange={(checked) => handleSpesialitetSwitch(key, checked)}
                          />
                          <p className="body-large text-foreground">{key}</p>
                        </div>
                      ))}

                    {showUnselected &&
                      Object.entries(spesialitetSwitches)
                        .filter(([_, value]) => !value)
                        .map(([key, value]) => (
                          <div key={key} className="flex items-center gap-4 px-4 h-14">
                            <Switch
                              checked={value}
                              onCheckedChange={(checked) => handleSpesialitetSwitch(key, checked)}
                            />
                            <p className="body-large text-muted-foreground">{key}</p>
                          </div>
                        ))}

                    {Object.entries(spesialitetSwitches).filter(([_, value]) => !value).length > 0 && (
                      <button
                        onClick={() => setShowUnselected(!showUnselected)}
                        className="flex items-center gap-2 px-4 h-14 w-full hover:bg-[var(--muted)] transition-colors"
                      >
                        <div className="w-6 h-6">
                          <svg className="block size-full" fill="none" viewBox="0 0 24 24">
                            <path
                              d={showUnselected ? expandLessIcon.p2b8d2f00 : 'M12 15.705L6 9.705L7.41 8.295L12 12.875L16.59 8.295L18 9.705L12 15.705Z'}
                              fill="#44483B"
                            />
                          </svg>
                        </div>
                        <p className="body-large text-foreground">Produksjoner som kan legges til</p>
                      </button>
                    )}
                  </div>
                )}

                {selectedScheme === 'lokalmat' && (
                  <div className="space-y-0">
                    {Object.entries(lokalmatSwitches)
                      .filter(([_, value]) => value)
                      .map(([key, value]) => (
                        <div key={key} className="flex items-center gap-4 px-4 h-14">
                          <Switch
                            checked={value}
                            onCheckedChange={(checked) => handleLokalmatSwitch(key, checked)}
                          />
                          <p className="body-large text-foreground">{key}</p>
                        </div>
                      ))}

                    {showUnselected &&
                      Object.entries(lokalmatSwitches)
                        .filter(([_, value]) => !value)
                        .map(([key, value]) => (
                          <div key={key} className="flex items-center gap-4 px-4 h-14">
                            <Switch
                              checked={value}
                              onCheckedChange={(checked) => handleLokalmatSwitch(key, checked)}
                            />
                            <p className="body-large text-muted-foreground">{key}</p>
                          </div>
                        ))}

                    {Object.entries(lokalmatSwitches).filter(([_, value]) => !value).length > 0 && (
                      <button
                        onClick={() => setShowUnselected(!showUnselected)}
                        className="flex items-center gap-2 px-4 h-14 w-full hover:bg-[var(--muted)] transition-colors"
                      >
                        <div className="w-6 h-6">
                          <svg className="block size-full" fill="none" viewBox="0 0 24 24">
                            <path
                              d={showUnselected ? expandLessIcon.p2b8d2f00 : 'M12 15.705L6 9.705L7.41 8.295L12 12.875L16.59 8.295L18 9.705L12 15.705Z'}
                              fill="#44483B"
                            />
                          </svg>
                        </div>
                        <p className="body-large text-foreground">Produksjoner som kan legges til</p>
                      </button>
                    )}
                  </div>
                )}

                {selectedScheme === 'nytNorge' && (
                  <div className="space-y-0">
                    {Object.entries(nytNorgeSwitches)
                      .filter(([_, value]) => value)
                      .map(([key, value]) => (
                        <div key={key} className="flex items-center gap-4 px-4 h-14">
                          <Switch
                            checked={value}
                            onCheckedChange={(checked) => handleNytNorgeSwitch(key, checked)}
                          />
                          <p className="body-large text-foreground">{key}</p>
                        </div>
                      ))}

                    {showUnselected &&
                      Object.entries(nytNorgeSwitches)
                        .filter(([_, value]) => !value)
                        .map(([key, value]) => (
                          <div key={key} className="flex items-center gap-4 px-4 h-14">
                            <Switch
                              checked={value}
                              onCheckedChange={(checked) => handleNytNorgeSwitch(key, checked)}
                            />
                            <p className="body-large text-muted-foreground">{key}</p>
                          </div>
                        ))}

                    {Object.entries(nytNorgeSwitches).filter(([_, value]) => !value).length > 0 && (
                      <button
                        onClick={() => setShowUnselected(!showUnselected)}
                        className="flex items-center gap-2 px-4 h-14 w-full hover:bg-[var(--muted)] transition-colors"
                      >
                        <div className="w-6 h-6">
                          <svg className="block size-full" fill="none" viewBox="0 0 24 24">
                            <path
                              d={showUnselected ? expandLessIcon.p2b8d2f00 : 'M12 15.705L6 9.705L7.41 8.295L12 12.875L16.59 8.295L18 9.705L12 15.705Z'}
                              fill="#44483B"
                            />
                          </svg>
                        </div>
                        <p className="body-large text-foreground">Produksjoner som kan legges til</p>
                      </button>
                    )}
                  </div>
                )}

                {selectedScheme === 'fruktOgGront' && (
                  <div className="space-y-0">
                    {Object.entries(fruktOgGrontSwitches)
                      .filter(([_, value]) => value)
                      .map(([key, value]) => (
                        <div key={key} className="flex items-center gap-4 px-4 h-14">
                          <Switch
                            checked={value}
                            onCheckedChange={(checked) => handleFruktOgGrontSwitch(key, checked)}
                          />
                          <p className="body-large text-foreground">{key}</p>
                        </div>
                      ))}

                    {showUnselected &&
                      Object.entries(fruktOgGrontSwitches)
                        .filter(([_, value]) => !value)
                        .map(([key, value]) => (
                          <div key={key} className="flex items-center gap-4 px-4 h-14">
                            <Switch
                              checked={value}
                              onCheckedChange={(checked) => handleFruktOgGrontSwitch(key, checked)}
                            />
                            <p className="body-large text-muted-foreground">{key}</p>
                          </div>
                        ))}

                    {Object.entries(fruktOgGrontSwitches).filter(([_, value]) => !value).length > 0 && (
                      <button
                        onClick={() => setShowUnselected(!showUnselected)}
                        className="flex items-center gap-2 px-4 h-14 w-full hover:bg-[var(--muted)] transition-colors"
                      >
                        <div className="w-6 h-6">
                          <svg className="block size-full" fill="none" viewBox="0 0 24 24">
                            <path
                              d={showUnselected ? expandLessIcon.p2b8d2f00 : 'M12 15.705L6 9.705L7.41 8.295L12 12.875L16.59 8.295L18 9.705L12 15.705Z'}
                              fill="#44483B"
                            />
                          </svg>
                        </div>
                        <p className="body-large text-foreground">Produksjoner som kan legges til</p>
                      </button>
                    )}
                  </div>
                )}
              </div>
            </div>
          )}

          {activeTab === 'kurs' && (
            <>
              <div className="flex gap-12">
                {/* Left Panel - Course List */}
                <div className="w-full min-[1400px]:w-[274px] shrink-0">
                  {/* Section Header */}
                  <div className="mb-4">
                    <h4 className="title-small text-muted-foreground px-2">Kurs</h4>
                  </div>

                  {/* Add Course Button */}
                  <div className="mb-4">
                    <Button onClick={() => setIsDialogOpen(true)} className="w-full">
                      <Plus className="w-5 h-5" />
                      Legg til kurs
                    </Button>
                  </div>

                  {/* Course Menu Items */}
                  <div className="space-y-2">
                    {courses.map((course) => (
                      <button
                        key={course.id}
                        onClick={() => {
                          setSelectedCourseId(course.id);
                          if (window.innerWidth < 1400) {
                            setShowKursSheet(true);
                          }
                        }}
                        className={`flex flex-col items-start w-full min-h-[56px] px-6 py-4 rounded-[100px] transition-colors ${
                          selectedCourseId === course.id
                            ? 'bg-[#dae2ff]'
                            : 'hover:bg-[var(--muted)]'
                        }`}
                      >
                        <span className={`label-large text-left ${selectedCourseId === course.id ? 'text-[#174295]' : 'text-foreground'}`}>
                          {course.kursnavn}
                        </span>
                        <span className={`label-small text-left ${selectedCourseId === course.id ? 'text-[#174295]' : 'text-muted-foreground'}`}>
                          {course.kursholder}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Right Panel - Course Details - Hidden on mobile */}
                <div className="hidden min-[1400px]:block flex-1">
                  {selectedCourseId && courses.find(c => c.id === selectedCourseId) ? (
                    <>
                      {/* Title - Aligned with left panel header */}
                      <div className="mb-4">
                        <h4 className="title-small text-muted-foreground px-2">
                          Kursdetaljer
                        </h4>
                      </div>

                      {/* Course Details - Read Only */}
                      <div className="space-y-0">
                        {/* Kursnavn */}
                        <div className="box-border flex flex-col items-start p-2 w-full">
                          <div className="label-small text-muted-foreground w-full">
                            <p className="m-0">Kursnavn</p>
                          </div>
                          <div className="body-large text-foreground w-full">
                            <p className="m-0">{courses.find(c => c.id === selectedCourseId)?.kursnavn}</p>
                          </div>
                        </div>

                        {/* Kursholder */}
                        <div className="box-border flex flex-col items-start p-2 w-full">
                          <div className="label-small text-muted-foreground w-full">
                            <p className="m-0">Kursholder</p>
                          </div>
                          <div className="body-large text-foreground w-full">
                            <p className="m-0">{courses.find(c => c.id === selectedCourseId)?.kursholder}</p>
                          </div>
                        </div>

                        {/* Kursdato */}
                        <div className="box-border flex flex-col items-start p-2 w-full">
                          <div className="label-small text-muted-foreground w-full">
                            <p className="m-0">Kursdato</p>
                          </div>
                          <div className="body-large text-foreground w-full">
                            <p className="m-0">{courses.find(c => c.id === selectedCourseId)?.kursdato}</p>
                          </div>
                        </div>

                        {/* Delete Button - Below Kursdato */}
                        <div className="px-2 pt-4">
                          <Button 
                            variant="secondary"
                            onClick={() => handleDeleteCourseClick(selectedCourseId)}
                          >
                            <Trash2 className="w-5 h-5" />
                            Slett kurs
                          </Button>
                        </div>

                        {/* Kursbevis */}
                        <div className="box-border flex flex-col items-start p-2 w-full mt-6">
                          <div className="label-small text-muted-foreground w-full mb-2">
                            <p className="m-0">Kursbevis</p>
                          </div>
                          <div className="w-full">
                            <img 
                              src={courses.find(c => c.id === selectedCourseId)?.kursbevis} 
                              alt="Kursbevis"
                              className="w-full h-auto rounded-[var(--radius)] object-cover"
                            />
                          </div>
                        </div>
                      </div>
                    </>
                  ) : (
                    <div className="px-4 py-8 text-center">
                      <p className="body-large text-muted-foreground">Velg et kurs fra listen</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Dialog for Adding New Course */}
              {isDialogOpen && (
                <div 
                  className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
                  onClick={(e) => {
                    if (e.target === e.currentTarget) {
                      setIsDialogOpen(false);
                      setNewCourse({ kursnavn: '', kursholder: '', kursdato: '', kursbevis: '' });
                      setNewCourseImageFile(null);
                    }
                  }}
                >
                  <div className="bg-[var(--card)] rounded-[28px] w-full max-w-2xl m-4 flex flex-col max-h-[90vh]">
                    {/* Dialog Header - Material 3 Title & Description */}
                    <div className="flex flex-col gap-4 pt-6 px-6 flex-shrink-0">
                      <h3 className="title-large text-foreground">Legg til nytt kurs</h3>
                      <p className="body-medium text-muted-foreground">
                        Fyll inn informasjonen om kurset du ønsker å legge til i din profil.
                      </p>
                    </div>

                    {/* Dialog Content */}
                    <div className="space-y-4 px-6 py-4 overflow-y-auto flex-1">
                      {/* Kursnavn */}
                      <div className="flex flex-col gap-2">
                        <label className="label-small text-muted-foreground">Kursnavn</label>
                        <input
                          type="text"
                          value={newCourse.kursnavn}
                          onChange={(e) => setNewCourse(prev => ({ ...prev, kursnavn: e.target.value }))}
                          className="body-large text-foreground bg-background border border-[var(--border)] rounded-[var(--radius)] px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
                          placeholder="Skriv inn kursnavn"
                        />
                      </div>

                      {/* Kursholder */}
                      <div className="flex flex-col gap-2">
                        <label className="label-small text-muted-foreground">Kursholder</label>
                        <input
                          type="text"
                          value={newCourse.kursholder}
                          onChange={(e) => setNewCourse(prev => ({ ...prev, kursholder: e.target.value }))}
                          className="body-large text-foreground bg-background border border-[var(--border)] rounded-[var(--radius)] px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
                          placeholder="Skriv inn kursholder"
                        />
                      </div>

                      {/* Kursdato */}
                      <div className="flex flex-col gap-2">
                        <label className="label-small text-muted-foreground">Kursdato</label>
                        <input
                          type="date"
                          value={newCourse.kursdato}
                          onChange={(e) => setNewCourse(prev => ({ ...prev, kursdato: e.target.value }))}
                          className="body-large text-foreground bg-background border border-[var(--border)] rounded-[var(--radius)] px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                      </div>

                      {/* Kursbevis Upload */}
                      <div className="flex flex-col gap-2">
                        <label className="label-small text-muted-foreground">Kursbevis</label>
                        <input
                          type="file"
                          ref={kursbevisInputRef}
                          onChange={handleKursbevisUpload}
                          className="hidden"
                          accept="image/*"
                        />
                        <div className="flex gap-2">
                          <Button
                            variant="secondary"
                            onClick={() => kursbevisInputRef.current?.click()}
                            className="flex-1"
                          >
                            {newCourseImageFile ? 'Endre bilde' : 'Last opp bilde'}
                          </Button>
                        </div>
                        {newCourseImageFile && (
                          <div className="mt-2">
                            <img 
                              src={newCourseImageFile} 
                              alt="Preview"
                              className="w-full h-auto rounded-[var(--radius)] object-cover max-h-64"
                            />
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Dialog Actions - Material 3 Text Buttons */}
                    <div className="flex gap-2 justify-end pl-2 pr-6 py-6 flex-shrink-0">
                      <Button
                        variant="tertiary"
                        onClick={() => {
                          setIsDialogOpen(false);
                          setNewCourse({ kursnavn: '', kursholder: '', kursdato: '', kursbevis: '' });
                          setNewCourseImageFile(null);
                        }}
                        className="h-10"
                      >
                        Avbryt
                      </Button>
                      {newCourse.kursnavn && newCourse.kursholder && newCourse.kursdato && (
                        <Button
                          variant="tertiary"
                          onClick={handleAddCourse}
                          className="h-10"
                        >
                          Lagre kurs
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* Delete Confirmation Dialog */}
              <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle className="title-large text-foreground">Slett kurs</DialogTitle>
                    <DialogDescription className="body-medium text-muted-foreground pt-2">
                      Er du sikker på at du vil slette dette kurset? Denne handlingen kan ikke angres.
                    </DialogDescription>
                  </DialogHeader>
                  
                  <DialogFooter className="gap-2 justify-end">
                    <Button 
                      variant="tertiary" 
                      onClick={() => {
                        setIsDeleteDialogOpen(false);
                        setCourseToDelete(null);
                      }}
                      className="h-10"
                    >
                      Avbryt
                    </Button>
                    <Button 
                      variant="tertiary"
                      onClick={handleDeleteCourse}
                      className="h-10"
                    >
                      Slett kurs
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </>
          )}

          {activeTab === 'oppdragskapasitet' && (
            <div className="flex flex-col min-[1400px]:flex-row gap-12">
              {/* Left Panel - Year List */}
              <div className="w-full min-[1400px]:w-[274px] shrink-0">
                {/* Section Header */}
                <div className="mb-4">
                  <h4 className="title-small text-muted-foreground px-2">År</h4>
                </div>

                {/* Year Menu Items */}
                <div className="space-y-2">
                  {/* Last Year */}
                  <button
                    onClick={() => handleKapasitetSheetOpen(currentYear - 1)}
                    className={`flex items-center justify-between w-full h-14 px-6 py-4 rounded-[100px] transition-colors ${
                      selectedYear === currentYear - 1
                        ? 'bg-[var(--secondary-container)] text-[var(--on-secondary-container)]'
                        : 'hover:bg-[var(--muted)]'
                    }`}
                  >
                    <span className="label-large text-left">
                      {currentYear - 1}
                    </span>
                    <span className="label-medium">
                      {capacityData[currentYear - 1].spring + capacityData[currentYear - 1].fall} oppdrag
                    </span>
                  </button>

                  {/* Current Year */}
                  <button
                    onClick={() => handleKapasitetSheetOpen(currentYear)}
                    className={`flex items-center justify-between w-full h-14 px-6 py-4 rounded-[100px] transition-colors ${
                      selectedYear === currentYear
                        ? 'bg-[var(--secondary-container)] text-[var(--on-secondary-container)]'
                        : 'hover:bg-[var(--muted)]'
                    }`}
                  >
                    <span className="label-large text-left">
                      {currentYear}
                    </span>
                    <span className="label-medium">
                      {capacityData[currentYear].spring + capacityData[currentYear].fall} oppdrag
                    </span>
                  </button>

                  {/* Next Year */}
                  <button
                    onClick={() => handleKapasitetSheetOpen(currentYear + 1)}
                    className={`flex items-center justify-between w-full h-14 px-6 py-4 rounded-[100px] transition-colors ${
                      selectedYear === currentYear + 1
                        ? 'bg-[var(--secondary-container)] text-[var(--on-secondary-container)]'
                        : 'hover:bg-[var(--muted)]'
                    }`}
                  >
                    <span className="label-large text-left">
                      {currentYear + 1}
                    </span>
                    <span className="label-medium">
                      {capacityData[currentYear + 1].spring + capacityData[currentYear + 1].fall} oppdrag
                    </span>
                  </button>
                </div>
              </div>

              {/* Vertical Divider - Desktop only */}
              <div className="w-px h-full bg-[var(--border)] max-[1400px]:hidden" />

              {/* Right Panel - Capacity Details - Hidden on mobile */}
              <div className="hidden min-[1400px]:block flex-1">
                {/* Title */}
                <div className="mb-4">
                  <h4 className="title-small text-muted-foreground px-2">
                    Kapasitet i {selectedYear}
                  </h4>
                </div>

                {/* Spring Capacity Input */}
                <UserInput
                  label="Antall oppdrag vår (januar–juni)"
                  value={capacityData[selectedYear].spring.toString()}
                  onChange={(value) => {
                    const numValue = parseInt(value) || 0;
                    setCapacityData(prev => ({
                      ...prev,
                      [selectedYear]: { ...prev[selectedYear], spring: numValue }
                    }));
                  }}
                />

                {/* Fall Capacity Input */}
                <UserInput
                  label="Antall oppdrag høst (Juli-Desember)"
                  value={capacityData[selectedYear].fall.toString()}
                  onChange={(value) => {
                    const numValue = parseInt(value) || 0;
                    setCapacityData(prev => ({
                      ...prev,
                      [selectedYear]: { ...prev[selectedYear], fall: numValue }
                    }));
                  }}
                />
              </div>
            </div>
          )}

          {activeTab === 'oppdragsomrade' && (
            <OppdragsomradeTab
              selectedFylke={selectedFylke}
              setSelectedFylke={setSelectedFylke}
              showUnselected={showUnselected}
              setShowUnselected={setShowUnselected}
              osloKommuner={osloKommuner}
              setOsloKommuner={setOsloKommuner}
              akershusKommuner={akershusKommuner}
              setAkershusKommuner={setAkershusKommuner}
              ostfoldKommuner={ostfoldKommuner}
              setOstfoldKommuner={setOstfoldKommuner}
              buskerudKommuner={buskerudKommuner}
              setBuskerudKommuner={setBuskerudKommuner}
              vestfoldKommuner={vestfoldKommuner}
              setVestfoldKommuner={setVestfoldKommuner}
              telemarkKommuner={telemarkKommuner}
              setTelemarkKommuner={setTelemarkKommuner}
              agderKommuner={agderKommuner}
              setAgderKommuner={setAgderKommuner}
              rogalandKommuner={rogalandKommuner}
              setRogalandKommuner={setRogalandKommuner}
              vestlandKommuner={vestlandKommuner}
              setVestlandKommuner={setVestlandKommuner}
              moreOgRomsdalKommuner={moreOgRomsdalKommuner}
              setMoreOgRomsdalKommuner={setMoreOgRomsdalKommuner}
              trondelagKommuner={trondelagKommuner}
              setTrondelagKommuner={setTrondelagKommuner}
              nordlandKommuner={nordlandKommuner}
              setNordlandKommuner={setNordlandKommuner}
              tromsKommuner={tromsKommuner}
              setTromsKommuner={setTromsKommuner}
              finnmarkKommuner={finnmarkKommuner}
              setFinnmarkKommuner={setFinnmarkKommuner}
              innlandetKommuner={innlandetKommuner}
              setInnlandetKommuner={setInnlandetKommuner}
            />
          )}

          {activeTab === 'reservasjonsliste' && (
            <>
              <div className="flex gap-12">
                {/* Left Panel - Reservations List */}
                <div className="w-full min-[1400px]:w-[274px] shrink-0">
                  {/* Section Header */}
                  <div className="mb-4">
                    <h4 className="title-small text-muted-foreground px-2">Foretak</h4>
                  </div>

                  {/* Add Reservation Button */}
                  <div className="mb-4">
                    <Button onClick={() => setIsReservationDialogOpen(true)} className="w-full">
                      <Plus className="w-5 h-5" />
                      Legg til foretak
                    </Button>
                  </div>

                  {/* Reservation Menu Items */}
                  <div className="space-y-2">
                    {reservations.map((reservation) => (
                      <button
                        key={reservation.id}
                        onClick={() => {
                          setSelectedReservationId(reservation.id);
                          if (window.innerWidth < 1400) {
                            setShowReservasjonSheet(true);
                          }
                        }}
                        className={`flex items-center justify-between w-full h-14 px-6 py-4 rounded-[100px] transition-colors ${
                          selectedReservationId === reservation.id
                            ? 'bg-[var(--secondary-container)] text-[var(--on-secondary-container)]'
                            : 'hover:bg-[var(--muted)]'
                        }`}
                      >
                        <span className="label-large text-left truncate">{reservation.foretak}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Vertical Divider */}
                <div className="w-px h-full bg-[var(--border)] max-[1400px]:hidden" />

                {/* Right Panel - Reservation Details - Hidden on mobile */}
                <div className="hidden min-[1400px]:block flex-1">
                  {selectedReservationId && reservations.find(r => r.id === selectedReservationId) ? (
                    <>
                      {/* Title - Aligned with left panel header */}
                      <div className="mb-6">
                        <h4 className="title-small text-muted-foreground">
                          Reservasjonsdetaljer
                        </h4>
                      </div>

                      {/* Reservation Details - Vertical Layout like Contact Info */}
                      <div className="space-y-6">
                        {/* Foretak */}
                        <div className="flex flex-col gap-1">
                          <span className="label-small text-muted-foreground">Foretak</span>
                          <span className="body-large text-foreground">
                            {reservations.find(r => r.id === selectedReservationId)?.foretak}
                          </span>
                        </div>

                        {/* Årsak */}
                        <div className="flex flex-col gap-1">
                          <span className="label-small text-muted-foreground">Årsak</span>
                          <span className="body-large text-foreground">
                            {reservations.find(r => r.id === selectedReservationId)?.arsak === 'nær-relasjon' 
                              ? 'Nær relasjon' 
                              : 'Annen'}
                          </span>
                        </div>
                        
                        {/* Begrunnelse - Only show if arsak is 'annen' */}
                        {reservations.find(r => r.id === selectedReservationId)?.arsak === 'annen' && (
                          <div className="flex flex-col gap-1">
                            <span className="label-small text-muted-foreground">Begrunnelse</span>
                            <span className="body-large text-foreground">
                              {reservations.find(r => r.id === selectedReservationId)?.begrunnelse}
                            </span>
                          </div>
                        )}

                        {/* Delete Button */}
                        <div className="pt-2">
                          <Button 
                            variant="secondary"
                            onClick={() => handleDeleteReservationClick(selectedReservationId)}
                          >
                            <Trash2 className="w-5 h-5" />
                            Slett reservasjon
                          </Button>
                        </div>
                      </div>
                    </>
                  ) : (
                    <div className="px-4 py-8 text-center">
                      <p className="body-large text-muted-foreground">Velg et foretak fra listen</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Dialog for Adding New Reservation */}
              {isReservationDialogOpen && (
                <div 
                  className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
                  onClick={(e) => {
                    if (e.target === e.currentTarget) {
                      setIsReservationDialogOpen(false);
                      setNewReservation({ foretak: '', arsak: 'nær-relasjon', begrunnelse: '' });
                      setForetakSearchTerm('');
                      setShowForetakDropdown(false);
                    }
                  }}
                >
                  <div className="bg-[var(--card)] rounded-[28px] w-full max-w-2xl m-4 flex flex-col max-h-[90vh]">
                    {/* Dialog Header - Material 3 Title & Description */}
                    <div className="flex flex-col gap-4 pt-6 px-6 flex-shrink-0">
                      <h3 className="title-large text-foreground">Legg til foretak i reservasjonsliste</h3>
                      <p className="body-medium text-muted-foreground">
                        Registrer et foretak du ikke kan utføre revisjon for på grunn av relasjon eller andre årsaker.
                      </p>
                    </div>

                    {/* Dialog Content */}
                    <div className="space-y-4 px-6 py-4 overflow-y-auto flex-1">
                      {/* Foretak Selection */}
                      <div className="flex flex-col gap-2">
                        <label className="label-small text-muted-foreground">Foretak</label>
                        <div className="relative">
                          <input
                            ref={foretakInputRef}
                            type="text"
                            value={foretakSearchTerm || newReservation.foretak}
                            onChange={(e) => {
                              setForetakSearchTerm(e.target.value);
                              setNewReservation({ ...newReservation, foretak: '' });
                              setShowForetakDropdown(true);
                            }}
                            onFocus={() => setShowForetakDropdown(true)}
                            placeholder="Søk etter foretak..."
                            className="w-full px-4 py-3 border border-[var(--border)] rounded-[var(--radius)] body-large focus:outline-none focus:ring-2 focus:ring-primary"
                          />
                          <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
                        </div>
                        
                        {/* Dropdown list - Using portal-like positioning */}
                        {showForetakDropdown && (
                          <div 
                            className="foretak-dropdown fixed z-[100] bg-background border border-[var(--border)] rounded-[var(--radius)] shadow-lg overflow-y-auto"
                            style={{
                              top: `${dropdownPosition.top}px`,
                              left: `${dropdownPosition.left}px`,
                              width: `${dropdownPosition.width}px`,
                              maxHeight: '280px',
                            }}
                          >
                            {filteredForetak.length > 0 ? (
                              filteredForetak.map((foretak) => (
                                <button
                                  key={foretak}
                                  onClick={() => {
                                    setNewReservation({ ...newReservation, foretak });
                                    setForetakSearchTerm('');
                                    setShowForetakDropdown(false);
                                  }}
                                  className="w-full px-4 py-3 text-left body-large hover:bg-[var(--muted)] transition-colors"
                                >
                                  {foretak}
                                </button>
                              ))
                            ) : (
                              <div className="px-4 py-3 body-large text-muted-foreground">
                                Ingen foretak funnet
                              </div>
                            )}
                          </div>
                        )}
                        
                        {newReservation.foretak && (
                          <div className="body-medium text-foreground px-2">
                            Valgt: {newReservation.foretak}
                          </div>
                        )}
                      </div>

                      {/* Årsak */}
                      <div className="flex flex-col gap-2">
                        <label className="label-small text-muted-foreground">Årsak</label>
                        <div className="flex flex-col gap-2">
                          <div className="flex flex-row items-center w-full gap-2">
                            <div className="flex flex-col h-10 min-h-[40px] items-center justify-center flex-1 rounded-[var(--radius)] transition-colors hover:bg-muted">
                              <RadioButton
                                checked={newReservation.arsak === 'nær-relasjon'}
                                onClick={() => setNewReservation({ ...newReservation, arsak: 'nær-relasjon', begrunnelse: '' })}
                                label="Nær relasjon"
                                className="w-full px-4"
                              />
                            </div>
                            <div className="flex flex-col h-10 min-h-[40px] items-center justify-center flex-1 rounded-[var(--radius)] transition-colors hover:bg-muted">
                              <RadioButton
                                checked={newReservation.arsak === 'annen'}
                                onClick={() => setNewReservation({ ...newReservation, arsak: 'annen' })}
                                label="Annen"
                                className="w-full px-4"
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Begrunnelse - Only show if 'Annen' is selected */}
                      {newReservation.arsak === 'annen' && (
                        <div className="flex flex-col gap-2">
                          <UserInput
                            label="Begrunnelse"
                            value={newReservation.begrunnelse || ''}
                            onChange={(value) => setNewReservation({ ...newReservation, begrunnelse: value })}
                            placeholder="Skriv begrunnelse..."
                            required={true}
                          />
                        </div>
                      )}
                    </div>

                    {/* Dialog Actions - Material 3 Text Buttons */}
                    <div className="flex gap-2 justify-end pl-2 pr-6 py-6 flex-shrink-0">
                      <Button
                        variant="tertiary"
                        onClick={() => {
                          setIsReservationDialogOpen(false);
                          setNewReservation({ foretak: '', arsak: 'nær-relasjon', begrunnelse: '' });
                          setForetakSearchTerm('');
                          setShowForetakDropdown(false);
                        }}
                        className="h-10"
                      >
                        Avbryt
                      </Button>
                      {newReservation.foretak && 
                       (newReservation.arsak === 'nær-relasjon' || 
                        (newReservation.arsak === 'annen' && newReservation.begrunnelse?.trim())) && (
                        <Button
                          variant="tertiary"
                          onClick={handleAddReservation}
                          className="h-10"
                        >
                          Lagre reservasjon
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* Delete Confirmation Dialog */}
              <Dialog open={isDeleteReservationDialogOpen} onOpenChange={setIsDeleteReservationDialogOpen}>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle className="title-large text-foreground">Slett reservasjon</DialogTitle>
                    <DialogDescription className="body-medium text-muted-foreground pt-2">
                      Er du sikker på at du vil fjerne dette foretaket fra reservasjonslisten? Denne handlingen kan ikke angres.
                    </DialogDescription>
                  </DialogHeader>
                  
                  <DialogFooter className="gap-2 justify-end">
                    <Button 
                      variant="tertiary" 
                      onClick={() => {
                        setIsDeleteReservationDialogOpen(false);
                        setReservationToDelete(null);
                      }}
                      className="h-10"
                    >
                      Avbryt
                    </Button>
                    <Button 
                      variant="tertiary"
                      onClick={handleDeleteReservation}
                      className="h-10"
                    >
                      Slett reservasjon
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </>
          )}
        </div>
      </div>

      {/* Bottom Sheets for Mobile */}
      {/* Kompetanse Bottom Sheet */}
      <BottomSheet
        isOpen={showKompetanseSheet}
        onClose={handleKompetanseCancel}
        title={
          selectedScheme === 'ksl' ? 'KSL Produksjoner' :
          selectedScheme === 'spesialitet' ? 'Spesialitet Produksjoner' :
          selectedScheme === 'lokalmat' ? 'Lokalmat Produksjoner' :
          selectedScheme === 'nytNorge' ? 'Nyt Norge Produksjoner' :
          'Frukt- og grøntpakkerier Produksjoner'
        }
        maxHeight={90}
        footer={
          hasKompetanseChanges() ? (
            <div className="flex gap-3 justify-end">
              <Button variant="tertiary" onClick={handleKompetanseCancel}>
                Avbryt
              </Button>
              <Button onClick={handleKompetanseSave}>
                Lagre endringer
              </Button>
            </div>
          ) : (
            <div className="flex gap-3 justify-end">
              <Button onClick={handleKompetanseCancel}>
                Lukk
              </Button>
            </div>
          )
        }
      >
        <div className="p-6">
          {/* Render the selected scheme's switches */}
          {selectedScheme === 'ksl' && (
            <div className="space-y-0">
              {Object.entries(tempKslSwitches)
                .filter(([_, value]) => value)
                .map(([key, value]) => (
                  <div key={key} className="flex items-center gap-4 px-4 h-14">
                    <Switch
                      checked={value}
                      onCheckedChange={(checked) => setTempKslSwitches(prev => ({ ...prev, [key]: checked }))}
                    />
                    <p className="body-large text-foreground">{key}</p>
                  </div>
                ))}
              {showUnselected &&
                Object.entries(tempKslSwitches)
                  .filter(([_, value]) => !value)
                  .map(([key, value]) => (
                    <div key={key} className="flex items-center gap-4 px-4 h-14">
                      <Switch
                        checked={value}
                        onCheckedChange={(checked) => setTempKslSwitches(prev => ({ ...prev, [key]: checked }))}
                      />
                      <p className="body-large text-muted-foreground">{key}</p>
                    </div>
                  ))}
            </div>
          )}
          {selectedScheme === 'spesialitet' && (
            <div className="space-y-0">
              {Object.entries(tempSpesialitetSwitches).map(([key, value]) => (
                <div key={key} className="flex items-center gap-4 px-4 h-14">
                  <Switch
                    checked={value}
                    onCheckedChange={(checked) => setTempSpesialitetSwitches(prev => ({ ...prev, [key]: checked }))}
                  />
                  <p className="body-large text-foreground">{key}</p>
                </div>
              ))}
            </div>
          )}
          {selectedScheme === 'lokalmat' && (
            <div className="space-y-0">
              {Object.entries(tempLokalmatSwitches)
                .filter(([_, value]) => value)
                .map(([key, value]) => (
                  <div key={key} className="flex items-center gap-4 px-4 h-14">
                    <Switch
                      checked={value}
                      onCheckedChange={(checked) => setTempLokalmatSwitches(prev => ({ ...prev, [key]: checked }))}
                    />
                    <p className="body-large text-foreground">{key}</p>
                  </div>
                ))}
              {showUnselected &&
                Object.entries(tempLokalmatSwitches)
                  .filter(([_, value]) => !value)
                  .map(([key, value]) => (
                    <div key={key} className="flex items-center gap-4 px-4 h-14">
                      <Switch
                        checked={value}
                        onCheckedChange={(checked) => setTempLokalmatSwitches(prev => ({ ...prev, [key]: checked }))}
                      />
                      <p className="body-large text-muted-foreground">{key}</p>
                    </div>
                  ))}
            </div>
          )}
          {selectedScheme === 'nytNorge' && (
            <div className="space-y-0">
              {Object.entries(tempNytNorgeSwitches)
                .filter(([_, value]) => value)
                .map(([key, value]) => (
                  <div key={key} className="flex items-center gap-4 px-4 h-14">
                    <Switch
                      checked={value}
                      onCheckedChange={(checked) => setTempNytNorgeSwitches(prev => ({ ...prev, [key]: checked }))}
                    />
                    <p className="body-large text-foreground">{key}</p>
                  </div>
                ))}
              {showUnselected &&
                Object.entries(tempNytNorgeSwitches)
                  .filter(([_, value]) => !value)
                  .map(([key, value]) => (
                    <div key={key} className="flex items-center gap-4 px-4 h-14">
                      <Switch
                        checked={value}
                        onCheckedChange={(checked) => setTempNytNorgeSwitches(prev => ({ ...prev, [key]: checked }))}
                      />
                      <p className="body-large text-muted-foreground">{key}</p>
                    </div>
                  ))}
            </div>
          )}
          {selectedScheme === 'fruktOgGront' && (
            <div className="space-y-0">
              {Object.entries(tempFruktOgGrontSwitches).map(([key, value]) => (
                <div key={key} className="flex items-center gap-4 px-4 h-14">
                  <Switch
                    checked={value}
                    onCheckedChange={(checked) => setTempFruktOgGrontSwitches(prev => ({ ...prev, [key]: checked }))}
                  />
                  <p className="body-large text-foreground">{key}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </BottomSheet>

      {/* Kurs Bottom Sheet */}
      <BottomSheet
        isOpen={showKursSheet}
        onClose={() => setShowKursSheet(false)}
        title="Kursdetaljer"
        maxHeight={90}
        footer={
          <div className="flex gap-3 justify-end">
            <Button onClick={() => setShowKursSheet(false)}>
              Lukk
            </Button>
          </div>
        }
      >
        <div className="p-6">
          {selectedCourseId && courses.find(c => c.id === selectedCourseId) && (
            <div className="space-y-6">
              {/* Kursnavn */}
              <div className="flex flex-col gap-1">
                <span className="label-small text-muted-foreground">Kursnavn</span>
                <span className="body-large text-foreground">
                  {courses.find(c => c.id === selectedCourseId)?.kursnavn}
                </span>
              </div>

              {/* Kursholder */}
              <div className="flex flex-col gap-1">
                <span className="label-small text-muted-foreground">Kursholder</span>
                <span className="body-large text-foreground">
                  {courses.find(c => c.id === selectedCourseId)?.kursholder}
                </span>
              </div>

              {/* Kursdato */}
              <div className="flex flex-col gap-1">
                <span className="label-small text-muted-foreground">Kursdato</span>
                <span className="body-large text-foreground">
                  {courses.find(c => c.id === selectedCourseId)?.kursdato}
                </span>
              </div>

              {/* Kursbevis */}
              {courses.find(c => c.id === selectedCourseId)?.kursbevis && (
                <div className="flex flex-col gap-1">
                  <span className="label-small text-muted-foreground">Kursbevis</span>
                  <div className="mt-2">
                    <img 
                      src={courses.find(c => c.id === selectedCourseId)?.kursbevis} 
                      alt="Kursbevis" 
                      className="w-full max-w-md rounded-lg border border-border"
                    />
                  </div>
                </div>
              )}

              {/* Delete Button */}
              <div className="pt-2">
                <Button 
                  variant="secondary"
                  onClick={() => {
                    handleDeleteCourseClick(selectedCourseId);
                    setShowKursSheet(false);
                  }}
                >
                  <Trash2 className="w-5 h-5" />
                  Slett kurs
                </Button>
              </div>
            </div>
          )}
        </div>
      </BottomSheet>

      {/* Reservasjon Bottom Sheet */}
      <BottomSheet
        isOpen={showReservasjonSheet}
        onClose={() => setShowReservasjonSheet(false)}
        title="Reservasjonsdetaljer"
        maxHeight={90}
        footer={
          <div className="flex gap-3 justify-end">
            <Button onClick={() => setShowReservasjonSheet(false)}>
              Lukk
            </Button>
          </div>
        }
      >
        <div className="p-6">
          {selectedReservationId && reservations.find(r => r.id === selectedReservationId) && (
            <div className="space-y-6">
              {/* Foretak */}
              <div className="flex flex-col gap-1">
                <span className="label-small text-muted-foreground">Foretak</span>
                <span className="body-large text-foreground">
                  {reservations.find(r => r.id === selectedReservationId)?.foretak}
                </span>
              </div>

              {/* Årsak */}
              <div className="flex flex-col gap-1">
                <span className="label-small text-muted-foreground">Årsak</span>
                <span className="body-large text-foreground">
                  {reservations.find(r => r.id === selectedReservationId)?.arsak === 'nær-relasjon' 
                    ? 'Nær relasjon' 
                    : 'Annen'}
                </span>
              </div>
              
              {/* Begrunnelse - Only show if arsak is 'annen' */}
              {reservations.find(r => r.id === selectedReservationId)?.arsak === 'annen' && (
                <div className="flex flex-col gap-1">
                  <span className="label-small text-muted-foreground">Begrunnelse</span>
                  <span className="body-large text-foreground">
                    {reservations.find(r => r.id === selectedReservationId)?.begrunnelse}
                  </span>
                </div>
              )}

              {/* Delete Button */}
              <div className="pt-2">
                <Button 
                  variant="secondary"
                  onClick={() => {
                    handleDeleteReservationClick(selectedReservationId);
                    setShowReservasjonSheet(false);
                  }}
                >
                  <Trash2 className="w-5 h-5" />
                  Slett reservasjon
                </Button>
              </div>
            </div>
          )}
        </div>
      </BottomSheet>

      {/* Oppdragskapasitet Bottom Sheet */}
      <BottomSheet
        isOpen={showKapasitetSheet}
        onClose={handleKapasitetCancel}
        title={`Kapasitet i ${selectedYear}`}
        maxHeight={90}
        footer={
          hasKapasitetChanges() ? (
            <div className="flex gap-3 justify-end">
              <Button variant="tertiary" onClick={handleKapasitetCancel}>
                Avbryt
              </Button>
              <Button onClick={handleKapasitetSave}>
                Lagre endringer
              </Button>
            </div>
          ) : (
            <div className="flex gap-3 justify-end">
              <Button onClick={handleKapasitetCancel}>
                Lukk
              </Button>
            </div>
          )
        }
      >
        <div className="p-6">
          <div className="space-y-6">
            {/* Spring Capacity Input */}
            <UserInput
              label="Antall oppdrag vår (januar–juni)"
              value={tempCapacityData[selectedYear]?.spring.toString() || '0'}
              onChange={(value) => {
                const numValue = parseInt(value) || 0;
                setTempCapacityData(prev => ({
                  ...prev,
                  [selectedYear]: { ...prev[selectedYear], spring: numValue }
                }));
              }}
            />

            {/* Fall Capacity Input */}
            <UserInput
              label="Antall oppdrag høst (Juli-Desember)"
              value={tempCapacityData[selectedYear]?.fall.toString() || '0'}
              onChange={(value) => {
                const numValue = parseInt(value) || 0;
                setTempCapacityData(prev => ({
                  ...prev,
                  [selectedYear]: { ...prev[selectedYear], fall: numValue }
                }));
              }}
            />
          </div>
        </div>
      </BottomSheet>

    </div>
  );
}