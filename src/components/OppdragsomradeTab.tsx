import { Dispatch, SetStateAction } from 'react';
import { Switch } from './ui/switch';
import expandLessIcon from '../imports/svg-j26sjeopg8';

type FylkeType = 'oslo' | 'akershus' | 'ostfold' | 'buskerud' | 'vestfold' | 'telemark' | 'agder' | 'rogaland' | 'vestland' | 'moreOgRomsdal' | 'trondelag' | 'nordland' | 'troms' | 'finnmark' | 'innlandet';

interface OppdragsomradeTabProps {
  selectedFylke: FylkeType;
  setSelectedFylke: Dispatch<SetStateAction<FylkeType>>;
  showUnselected: boolean;
  setShowUnselected: Dispatch<SetStateAction<boolean>>;
  osloKommuner: Record<string, boolean>;
  setOsloKommuner: Dispatch<SetStateAction<Record<string, boolean>>>;
  akershusKommuner: Record<string, boolean>;
  setAkershusKommuner: Dispatch<SetStateAction<Record<string, boolean>>>;
  ostfoldKommuner: Record<string, boolean>;
  setOstfoldKommuner: Dispatch<SetStateAction<Record<string, boolean>>>;
  buskerudKommuner: Record<string, boolean>;
  setBuskerudKommuner: Dispatch<SetStateAction<Record<string, boolean>>>;
  vestfoldKommuner: Record<string, boolean>;
  setVestfoldKommuner: Dispatch<SetStateAction<Record<string, boolean>>>;
  telemarkKommuner: Record<string, boolean>;
  setTelemarkKommuner: Dispatch<SetStateAction<Record<string, boolean>>>;
  agderKommuner: Record<string, boolean>;
  setAgderKommuner: Dispatch<SetStateAction<Record<string, boolean>>>;
  rogalandKommuner: Record<string, boolean>;
  setRogalandKommuner: Dispatch<SetStateAction<Record<string, boolean>>>;
  vestlandKommuner: Record<string, boolean>;
  setVestlandKommuner: Dispatch<SetStateAction<Record<string, boolean>>>;
  moreOgRomsdalKommuner: Record<string, boolean>;
  setMoreOgRomsdalKommuner: Dispatch<SetStateAction<Record<string, boolean>>>;
  trondelagKommuner: Record<string, boolean>;
  setTrondelagKommuner: Dispatch<SetStateAction<Record<string, boolean>>>;
  nordlandKommuner: Record<string, boolean>;
  setNordlandKommuner: Dispatch<SetStateAction<Record<string, boolean>>>;
  tromsKommuner: Record<string, boolean>;
  setTromsKommuner: Dispatch<SetStateAction<Record<string, boolean>>>;
  finnmarkKommuner: Record<string, boolean>;
  setFinnmarkKommuner: Dispatch<SetStateAction<Record<string, boolean>>>;
  innlandetKommuner: Record<string, boolean>;
  setInnlandetKommuner: Dispatch<SetStateAction<Record<string, boolean>>>;
}

const fylkeNames: Record<FylkeType, string> = {
  oslo: 'Oslo',
  akershus: 'Akershus',
  ostfold: 'Østfold',
  buskerud: 'Buskerud',
  vestfold: 'Vestfold',
  telemark: 'Telemark',
  agder: 'Agder',
  rogaland: 'Rogaland',
  vestland: 'Vestland',
  moreOgRomsdal: 'Møre og Romsdal',
  trondelag: 'Trøndelag',
  nordland: 'Nordland',
  troms: 'Troms',
  finnmark: 'Finnmark',
  innlandet: 'Innlandet',
};

const countActive = (kommuner: Record<string, boolean>) => {
  return Object.values(kommuner).filter(Boolean).length;
};

export function OppdragsomradeTab(props: OppdragsomradeTabProps) {
  const {
    selectedFylke,
    setSelectedFylke,
    showUnselected,
    setShowUnselected,
    osloKommuner, setOsloKommuner,
    akershusKommuner, setAkershusKommuner,
    ostfoldKommuner, setOstfoldKommuner,
    buskerudKommuner, setBuskerudKommuner,
    vestfoldKommuner, setVestfoldKommuner,
    telemarkKommuner, setTelemarkKommuner,
    agderKommuner, setAgderKommuner,
    rogalandKommuner, setRogalandKommuner,
    vestlandKommuner, setVestlandKommuner,
    moreOgRomsdalKommuner, setMoreOgRomsdalKommuner,
    trondelagKommuner, setTrondelagKommuner,
    nordlandKommuner, setNordlandKommuner,
    tromsKommuner, setTromsKommuner,
    finnmarkKommuner, setFinnmarkKommuner,
    innlandetKommuner, setInnlandetKommuner,
  } = props;

  const getCurrentKommuner = (): Record<string, boolean> => {
    switch (selectedFylke) {
      case 'oslo': return osloKommuner;
      case 'akershus': return akershusKommuner;
      case 'ostfold': return ostfoldKommuner;
      case 'buskerud': return buskerudKommuner;
      case 'vestfold': return vestfoldKommuner;
      case 'telemark': return telemarkKommuner;
      case 'agder': return agderKommuner;
      case 'rogaland': return rogalandKommuner;
      case 'vestland': return vestlandKommuner;
      case 'moreOgRomsdal': return moreOgRomsdalKommuner;
      case 'trondelag': return trondelagKommuner;
      case 'nordland': return nordlandKommuner;
      case 'troms': return tromsKommuner;
      case 'finnmark': return finnmarkKommuner;
      case 'innlandet': return innlandetKommuner;
    }
  };

  const handleKommuneToggle = (kommune: string, value: boolean) => {
    switch (selectedFylke) {
      case 'oslo': setOsloKommuner(prev => ({ ...prev, [kommune]: value })); break;
      case 'akershus': setAkershusKommuner(prev => ({ ...prev, [kommune]: value })); break;
      case 'ostfold': setOstfoldKommuner(prev => ({ ...prev, [kommune]: value })); break;
      case 'buskerud': setBuskerudKommuner(prev => ({ ...prev, [kommune]: value })); break;
      case 'vestfold': setVestfoldKommuner(prev => ({ ...prev, [kommune]: value })); break;
      case 'telemark': setTelemarkKommuner(prev => ({ ...prev, [kommune]: value })); break;
      case 'agder': setAgderKommuner(prev => ({ ...prev, [kommune]: value })); break;
      case 'rogaland': setRogalandKommuner(prev => ({ ...prev, [kommune]: value })); break;
      case 'vestland': setVestlandKommuner(prev => ({ ...prev, [kommune]: value })); break;
      case 'moreOgRomsdal': setMoreOgRomsdalKommuner(prev => ({ ...prev, [kommune]: value })); break;
      case 'trondelag': setTrondelagKommuner(prev => ({ ...prev, [kommune]: value })); break;
      case 'nordland': setNordlandKommuner(prev => ({ ...prev, [kommune]: value })); break;
      case 'troms': setTromsKommuner(prev => ({ ...prev, [kommune]: value })); break;
      case 'finnmark': setFinnmarkKommuner(prev => ({ ...prev, [kommune]: value })); break;
      case 'innlandet': setInnlandetKommuner(prev => ({ ...prev, [kommune]: value })); break;
    }
  };

  const currentKommuner = getCurrentKommuner();
  const selectedKommuner = Object.entries(currentKommuner).filter(([_, value]) => value);
  const unselectedKommuner = Object.entries(currentKommuner).filter(([_, value]) => !value);

  return (
    <div className="flex flex-col min-[1400px]:flex-row gap-12">
      {/* Left Panel - Fylke List */}
      <div className="w-full min-[1400px]:w-[274px] shrink-0">
        {/* Section Header */}
        <div className="mb-4">
          <h4 className="title-small text-muted-foreground px-2">Fylke</h4>
        </div>

        {/* Fylke Menu Items */}
        <div className="space-y-2">
          {(Object.keys(fylkeNames) as FylkeType[]).map((fylke) => (
            <button
              key={fylke}
              onClick={() => setSelectedFylke(fylke)}
              className={`flex items-center justify-between w-full h-14 px-6 py-4 rounded-[100px] transition-colors ${
                selectedFylke === fylke
                  ? 'bg-[var(--secondary-container)] text-[var(--on-secondary-container)]'
                  : 'hover:bg-[var(--muted)]'
              }`}
            >
              <span className="label-large text-left">
                {fylkeNames[fylke]}
              </span>
              <span className="label-medium">
                {countActive(
                  fylke === 'oslo' ? osloKommuner :
                  fylke === 'akershus' ? akershusKommuner :
                  fylke === 'ostfold' ? ostfoldKommuner :
                  fylke === 'buskerud' ? buskerudKommuner :
                  fylke === 'vestfold' ? vestfoldKommuner :
                  fylke === 'telemark' ? telemarkKommuner :
                  fylke === 'agder' ? agderKommuner :
                  fylke === 'rogaland' ? rogalandKommuner :
                  fylke === 'vestland' ? vestlandKommuner :
                  fylke === 'moreOgRomsdal' ? moreOgRomsdalKommuner :
                  fylke === 'trondelag' ? trondelagKommuner :
                  fylke === 'nordland' ? nordlandKommuner :
                  fylke === 'troms' ? tromsKommuner :
                  fylke === 'finnmark' ? finnmarkKommuner :
                  innlandetKommuner
                )} kommuner
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Vertical Divider - Desktop only */}
      <div className="w-px h-full bg-[var(--border)] max-[1400px]:hidden" />

      {/* Right Panel - Kommuner Detail - Hidden on mobile */}
      <div className="hidden min-[1400px]:block flex-1">
        {/* Title */}
        <div className="mb-4">
          <h4 className="title-small text-muted-foreground px-2">
            {fylkeNames[selectedFylke]} kommuner i ditt oppdragsområde
          </h4>
        </div>

        {/* Selected Kommuner */}
        <div className="space-y-0">
          {selectedKommuner.map(([kommune, value]) => (
            <div key={kommune} className="flex items-center gap-4 px-4 h-14">
              <Switch
                checked={value}
                onCheckedChange={(checked) => handleKommuneToggle(kommune, checked)}
              />
              <p className="body-large text-foreground">{kommune}</p>
            </div>
          ))}

          {/* Unselected Kommuner - shown by default */}
          {showUnselected &&
            unselectedKommuner.map(([kommune, value]) => (
              <div key={kommune} className="flex items-center gap-4 px-4 h-14">
                <Switch
                  checked={value}
                  onCheckedChange={(checked) => handleKommuneToggle(kommune, checked)}
                />
                <p className="body-large text-muted-foreground">{kommune}</p>
              </div>
            ))}

          {/* Collapse Button */}
          {unselectedKommuner.length > 0 && (
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
              <p className="body-large text-foreground">
                Kommuner som kan legges til
              </p>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}