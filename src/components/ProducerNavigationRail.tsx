import { useState, useEffect, useRef } from 'react';
import { imgVector6 } from '../imports/svg-djl4p';
import { imgVector } from '../imports/svg-unedn';
import svgPaths from '../imports/svg-e1u4yqsnoc';
import logoSvgPaths from '../imports/svg-pn3j7cyndy';
import { Sheet, SheetContent, SheetTitle, SheetDescription } from './ui/sheet';
import * as VisuallyHidden from '@radix-ui/react-visually-hidden';

export type ProducerNavTab = 
  | 'hjem' 
  | 'lokalmat' 
  | 'spesialitet' 
  | 'nytNorge' 
  | 'foretaksopplysninger' 
  | 'avvikOgNotater' 
  | 'rapporter' 
  | 'opplastdeFiler';

interface ProducerNavigationRailProps {
  activeTab: ProducerNavTab;
  onTabChange: (tab: ProducerNavTab) => void;
  onChangeRole?: () => void;
}

// Logo component from Figma imports - EXACT SAME AS REVISOR
function KSLLogo({ collapsed }: { collapsed: boolean }) {
  if (collapsed) {
    // Small logo for collapsed state - Type=KSL, Background=Default, Size=Default
    return (
      <div className="flex items-center justify-center">
        <div className="h-[21px] relative shrink-0 w-[69.695px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 70 21">
            <g id="Logo">
              <path d={svgPaths.p364d3200} fill="var(--fill-0, #79B61D)" id="Vector" />
              <path d={svgPaths.p186c1d80} fill="var(--fill-0, #79B61D)" id="Vector_2" />
              <g id="Group">
                <g id="Vector_3"></g>
                <path d={svgPaths.p27396200} fill="var(--fill-0, #177312)" id="Vector_4" />
                <path d={svgPaths.p1b7dcb00} fill="var(--fill-0, #008F00)" id="Vector_5" />
                <path d={svgPaths.p242e0980} fill="var(--fill-0, #79B61D)" id="Vector_6" />
                <path d={svgPaths.pf608572} fill="var(--fill-0, #AFD377)" id="Vector_7" />
                <g id="Vector_8"></g>
              </g>
              <g id="Group_2">
                <path d={svgPaths.p16848380} fill="var(--fill-0, #79B61D)" id="Vector_9" />
              </g>
            </g>
          </svg>
        </div>
      </div>
    );
  }

  // Full logo for expanded state - using Logo-106-7260 with max height 64px
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="relative" style={{ width: '106px', height: '64px' }}>
        <svg className="block w-full h-full" fill="none" preserveAspectRatio="xMinYMin meet" viewBox="0 0 173.293 104">
          {/* Top part - KSL graphic logo */}
          <g>
            <path d={logoSvgPaths.pc59adc0} fill="#79B61D" />
            <path d={logoSvgPaths.pb353100} fill="#79B61D" />
            <path d={logoSvgPaths.p38a1df00} fill="white" />
            <g>
              <path d={logoSvgPaths.p1f855e00} fill="#177312" />
              <path d={logoSvgPaths.pfd51100} fill="#008F00" />
              <path d={logoSvgPaths.p3a663072} fill="#79B61D" />
              <path d={logoSvgPaths.p38968d00} fill="#AFD377" />
            </g>
            <g>
              <path d={logoSvgPaths.pdc27900} fill="#79B61D" />
            </g>
          </g>
          {/* Bottom part - Kvalitetssystem text */}
          <g>
            <g>
              <path d={logoSvgPaths.p6ce0c80} fill="black" />
              <path d={logoSvgPaths.p3714de70} fill="black" />
              <path d={logoSvgPaths.p1f6d1000} fill="black" />
              <path d={logoSvgPaths.p30cda200} fill="black" />
              <path d={logoSvgPaths.p2de2ab40} fill="black" />
              <path d={logoSvgPaths.p6277170} fill="black" />
              <path d={logoSvgPaths.p6b6a670} fill="black" />
              <path d={logoSvgPaths.p2f29cd00} fill="black" />
              <path d={logoSvgPaths.p3b8dad00} fill="black" />
              <path d={logoSvgPaths.p1171c00} fill="black" />
              <path d={logoSvgPaths.p2f2cb380} fill="black" />
              <path d={logoSvgPaths.p2206be00} fill="black" />
              <path d={logoSvgPaths.p38461c00} fill="black" />
              <path d={logoSvgPaths.p246bf900} fill="black" />
              <path d={logoSvgPaths.p1b7451f0} fill="black" />
              <path d={logoSvgPaths.p202c0f40} fill="black" />
              <path d={logoSvgPaths.p12a36a00} fill="black" />
              <path d={logoSvgPaths.p2eb4d500} fill="black" />
              <path d={logoSvgPaths.p271fc640} fill="black" />
              <path d={logoSvgPaths.p30cc85e0} fill="black" />
              <path d={logoSvgPaths.p203ff100} fill="black" />
              <path d={logoSvgPaths.p192a4f00} fill="black" />
              <path d={logoSvgPaths.pe8ac500} fill="black" />
            </g>
            <path d={logoSvgPaths.p4e31200} fill="black" />
            <path d={logoSvgPaths.p2fd93200} fill="black" />
            <path d={logoSvgPaths.p3d9831f0} fill="black" />
          </g>
        </svg>
      </div>
    </div>
  );
}

// Navigation Rail Item Component
interface NavItemProps {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  isActive: boolean;
  isExpanded: boolean;
  onClick: () => void;
}

function NavItem({ icon: Icon, label, isActive, isExpanded, onClick }: NavItemProps) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-3 h-14 rounded-[var(--radius)] transition-colors ${
        isActive 
          ? 'bg-secondary-container text-secondary-container-foreground' 
          : 'hover:bg-muted text-foreground'
      }`}
      style={{
        paddingLeft: isExpanded ? '16px' : '0',
        paddingRight: isExpanded ? '24px' : '0',
        justifyContent: isExpanded ? 'flex-start' : 'center',
        width: '100%'
      }}
    >
      <Icon className="shrink-0" />
      {isExpanded && (
        <span className="label-large whitespace-nowrap">{label}</span>
      )}
    </button>
  );
}

// Section Header Component
interface SectionHeaderProps {
  label: string;
  isExpanded: boolean;
}

function SectionHeader({ label, isExpanded }: SectionHeaderProps) {
  if (!isExpanded) return null;
  
  return (
    <div className="h-9 flex items-center px-4 w-full">
      <span className="label-xsmall text-foreground">{label}</span>
    </div>
  );
}

// Icon components - Material 3 icons from sketch
function HomeIcon({ className }: { className?: string }) {
  return (
    <div className={`relative w-6 h-6 ${className || ''}`}>
      <svg className="absolute inset-0" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 5.69L17 10.19V18H15V12H9V18H7V10.19L12 5.69ZM12 3L2 12H5V20H11V14H13V20H19V12H22L12 3Z" fill="currentColor" />
      </svg>
    </div>
  );
}

function ChecklistIcon({ className }: { className?: string }) {
  return (
    <div className={`relative w-6 h-6 ${className || ''}`}>
      <div className="absolute inset-[18.6%_8.33%]">
        <img alt="" className="block max-w-none size-full" src={imgVector} />
      </div>
    </div>
  );
}

function DomainIcon({ className }: { className?: string }) {
  return (
    <div className={`relative w-6 h-6 ${className || ''}`}>
      <svg className="absolute inset-0" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 7V3H2V21H22V7H12ZM6 19H4V17H6V19ZM6 15H4V13H6V15ZM6 11H4V9H6V11ZM6 7H4V5H6V7ZM10 19H8V17H10V19ZM10 15H8V13H10V15ZM10 11H8V9H10V11ZM10 7H8V5H10V7ZM20 19H12V17H14V15H12V13H14V11H12V9H20V19ZM18 11H16V13H18V11ZM18 15H16V17H18V15Z" fill="currentColor" />
      </svg>
    </div>
  );
}

function WarningIcon({ className }: { className?: string }) {
  return (
    <div className={`relative w-6 h-6 ${className || ''}`}>
      <svg className="absolute inset-0" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M1 21H23L12 2L1 21ZM13 18H11V16H13V18ZM13 14H11V10H13V14Z" fill="currentColor" />
      </svg>
    </div>
  );
}

function AssessmentIcon({ className }: { className?: string }) {
  return (
    <div className={`relative w-6 h-6 ${className || ''}`}>
      <svg className="absolute inset-0" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM9 17H7V10H9V17ZM13 17H11V7H13V17ZM17 17H15V13H17V17Z" fill="currentColor" />
      </svg>
    </div>
  );
}

function UploadFileIcon({ className }: { className?: string }) {
  return (
    <div className={`relative w-6 h-6 ${className || ''}`}>
      <svg className="absolute inset-0" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M14 2H6C4.9 2 4.01 2.9 4.01 4L4 20C4 21.1 4.89 22 5.99 22H18C19.1 22 20 21.1 20 20V8L14 2ZM18 20H6V4H13V9H18V20ZM8 15.01L9.41 16.42L11 14.84V19H13V14.84L14.59 16.43L16 15.02L12.01 11L8 15.01Z" fill="currentColor" />
      </svg>
    </div>
  );
}

function UserIcon({ className }: { className?: string }) {
  return (
    <div className={`relative w-6 h-6 ${className || ''}`}>
      <div className="absolute inset-[16.667%]">
        <img alt="" className="block max-w-none size-full" src={imgVector6} />
      </div>
    </div>
  );
}

function ChangeRoleIcon({ className }: { className?: string }) {
  return (
    <div className={`relative w-6 h-6 ${className || ''}`}>
      <svg className="absolute inset-0" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 0C5.376 0 0 5.376 0 12C0 18.624 5.376 24 12 24C18.624 24 24 18.624 24 12C24 5.376 18.624 0 12 0ZM12 21.6C6.708 21.6 2.4 17.292 2.4 12C2.4 6.708 6.708 2.4 12 2.4C17.292 2.4 21.6 6.708 21.6 12C21.6 17.292 17.292 21.6 12 21.6ZM17.004 15.312L15.684 13.992C16.536 12.396 16.32 10.38 14.976 9.036C14.148 8.208 13.08 7.8 12 7.8C11.964 7.8 11.928 7.812 11.892 7.812L13.2 9.12L11.928 10.392L8.532 6.996L11.928 3.6L13.2 4.872L12.048 6.024C13.572 6.036 15.084 6.6 16.248 7.752C18.288 9.804 18.54 12.984 17.004 15.312ZM15.468 17.004L12.072 20.4L10.8 19.128L11.94 17.988C10.428 17.976 8.916 17.388 7.764 16.236C5.712 14.184 5.46 11.016 6.996 8.688L8.316 10.008C7.464 11.604 7.68 13.62 9.024 14.964C9.864 15.804 10.98 16.212 12.096 16.176L10.8 14.88L12.072 13.608L15.468 17.004Z" fill="currentColor" />
      </svg>
    </div>
  );
}

function MenuIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M3 18V16H21V18H3ZM3 13V11H21V13H3ZM3 8V6H21V8H3Z" fill="currentColor" />
    </svg>
  );
}

export function ProducerNavigationRail({ activeTab, onTabChange, onChangeRole }: ProducerNavigationRailProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const railRef = useRef<HTMLDivElement>(null);

  // Handle clicks outside to collapse (desktop only)
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (railRef.current && !railRef.current.contains(event.target as Node)) {
        setIsExpanded(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Handle clicks inside to expand (desktop only)
  const handleRailClick = () => {
    if (!isExpanded) {
      setIsExpanded(true);
    }
  };

  // Section 1: Forside
  const section1Items = [
    { id: 'hjem' as ProducerNavTab, icon: HomeIcon, label: 'Forside' },
  ];

  // Section 2: Egenrevisjon
  const section2Items = [
    { id: 'lokalmat' as ProducerNavTab, icon: ChecklistIcon, label: 'Lokalmat' },
    { id: 'spesialitet' as ProducerNavTab, icon: ChecklistIcon, label: 'Spesialitet' },
  ];

  // Section 3: Other items
  const section3Items = [
    { id: 'foretaksopplysninger' as ProducerNavTab, icon: DomainIcon, label: 'Foretaksopplysninger' },
    { id: 'avvikOgNotater' as ProducerNavTab, icon: WarningIcon, label: 'Avvik og notater' },
    { id: 'rapporter' as ProducerNavTab, icon: AssessmentIcon, label: 'Rapporter' },
    { id: 'opplastdeFiler' as ProducerNavTab, icon: UploadFileIcon, label: 'Opplastede filer' },
  ];

  // Navigation Content Component (shared between desktop sidebar and mobile drawer)
  const NavigationContent = ({ 
    isExpanded, 
    onMenuClick,
    closeDrawer 
  }: { 
    isExpanded: boolean; 
    onMenuClick?: (e?: React.MouseEvent) => void;
    closeDrawer?: () => void;
  }) => (
    <>
      {/* Logo Section - 88px height */}
      <div className="flex items-center justify-center shrink-0" style={{ height: '88px' }}>
        <KSLLogo collapsed={!isExpanded} />
      </div>

      {/* Menu Toggle - 56px height */}
      <div className="flex items-center justify-center shrink-0" style={{ height: '56px' }}>
        <button
          onClick={onMenuClick}
          className="flex items-center gap-3 h-14 rounded-[var(--radius)] hover:bg-muted transition-colors"
          style={{
            paddingLeft: isExpanded ? '16px' : '0',
            paddingRight: isExpanded ? '24px' : '0',
            justifyContent: isExpanded ? 'flex-start' : 'center',
            width: isExpanded ? '100%' : '56px'
          }}
          aria-label={isExpanded ? 'Skjul meny' : 'Vis meny'}
        >
          <MenuIcon className="w-6 h-6 text-foreground shrink-0" />
          {isExpanded && (
            <span className="label-large text-foreground whitespace-nowrap">Skjul meny</span>
          )}
        </button>
      </div>

      {/* Navigation Items - Scrollable */}
      <nav className="flex flex-col gap-3 py-2 px-3 flex-1 overflow-y-auto">
        {/* Section 1 - Forside */}
        <div className="flex flex-col gap-1">
          {section1Items.map((item) => (
            <NavItem
              key={item.id}
              icon={item.icon}
              label={item.label}
              isActive={activeTab === item.id}
              isExpanded={isExpanded}
              onClick={() => {
                onTabChange(item.id);
                if (closeDrawer) closeDrawer();
              }}
            />
          ))}
        </div>

        {/* Section 2 - Egenrevisjon */}
        <div className="flex flex-col gap-1">
          <SectionHeader label="EGENREVISJON" isExpanded={isExpanded} />
          {section2Items.map((item) => (
            <NavItem
              key={item.id}
              icon={item.icon}
              label={item.label}
              isActive={activeTab === item.id}
              isExpanded={isExpanded}
              onClick={() => {
                onTabChange(item.id);
                if (closeDrawer) closeDrawer();
              }}
            />
          ))}
        </div>

        {/* Section 3 - Other items */}
        <div className="flex flex-col gap-1">
          {section3Items.map((item) => (
            <NavItem
              key={item.id}
              icon={item.icon}
              label={item.label}
              isActive={activeTab === item.id}
              isExpanded={isExpanded}
              onClick={() => {
                onTabChange(item.id);
                if (closeDrawer) closeDrawer();
              }}
            />
          ))}
        </div>

        {/* User Profile Item */}
        <button
          className="flex items-center gap-3 h-14 rounded-[var(--radius)] hover:bg-muted transition-colors w-full text-foreground"
          aria-label="Min profil"
          style={{
            paddingLeft: isExpanded ? '16px' : '0',
            paddingRight: isExpanded ? '24px' : '0',
            justifyContent: isExpanded ? 'flex-start' : 'center'
          }}
        >
          <UserIcon className="shrink-0" />
          {isExpanded && (
            <span className="label-large whitespace-nowrap">Min profil</span>
          )}
        </button>

        {/* Change Role Item */}
        <button
          onClick={() => {
            if (onChangeRole) {
              onChangeRole();
            }
            if (closeDrawer) closeDrawer();
          }}
          className="flex items-center gap-3 h-14 rounded-[var(--radius)] hover:bg-muted transition-colors w-full text-foreground"
          aria-label="Bytt rolle"
          style={{
            paddingLeft: isExpanded ? '16px' : '0',
            paddingRight: isExpanded ? '24px' : '0',
            justifyContent: isExpanded ? 'flex-start' : 'center'
          }}
        >
          <ChangeRoleIcon className="shrink-0" />
          {isExpanded && (
            <span className="label-large whitespace-nowrap">Bytt rolle</span>
          )}
        </button>
      </nav>
    </>
  );

  return (
    <>
      {/* Mobile/Tablet Top Bar - Visible only on < 1400px - Positioned absolutely above everything */}
      <div className="max-[1400px]:block hidden w-full">
        <div className="h-14 bg-background border-b border-border flex items-center px-4 gap-4 shrink-0">
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="flex items-center justify-center w-8 h-8 text-foreground hover:bg-muted rounded transition-colors"
            aria-label="Åpne meny"
          >
            <MenuIcon className="w-8 h-8" />
          </button>
          <KSLLogo collapsed={true} />
        </div>
      </div>

      {/* Desktop Sidebar - Visible only on >= 1400px */}
      <div 
        ref={railRef}
        onClick={handleRailClick}
        className="max-[1400px]:hidden bg-background flex flex-col h-screen transition-all duration-300"
        style={{ 
          width: isExpanded ? '256px' : '88px',
          minWidth: isExpanded ? '256px' : '88px',
          borderRight: '1px solid var(--border)'
        }}
      >
        <NavigationContent
          isExpanded={isExpanded}
          onMenuClick={(e) => {
            e?.stopPropagation();
            setIsExpanded(!isExpanded);
          }}
        />
      </div>

      {/* Mobile/Tablet Drawer Menu */}
      <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
        <SheetContent side="left" className="p-0 w-[256px] border-r border-border">
          <VisuallyHidden.Root>
            <SheetTitle>Navigasjonsmeny</SheetTitle>
            <SheetDescription>
              Hovednavigasjon for ansatt
            </SheetDescription>
          </VisuallyHidden.Root>
          <div className="bg-background flex flex-col h-full">
            <NavigationContent
              isExpanded={true}
              onMenuClick={() => setIsMobileMenuOpen(false)}
              closeDrawer={() => setIsMobileMenuOpen(false)}
            />
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}