import { useState, useEffect, useRef } from 'react';
import { imgVector7, imgVector12, imgVector17, imgVector22, imgVector6 } from '../imports/svg-djl4p';
import svgPaths from '../imports/svg-e1u4yqsnoc';
import logoSvgPaths from '../imports/svg-pn3j7cyndy';
import { Sheet, SheetContent, SheetTitle, SheetDescription } from './ui/sheet';
import * as VisuallyHidden from '@radix-ui/react-visually-hidden';

type TabType = 'forside' | 'tildelteRevisjoner' | 'aksepterteRevisjoner' | 'avviksoversikt' | 'fakturagrunnlag' | 'revisjonshistorikk';

interface NavigationRailProps {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
}

// Logo component from Figma imports
function KSLLogo({ collapsed }: { collapsed: boolean }) {
  if (collapsed) {
    // Small logo for collapsed state and mobile top bar
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

  // Full logo for expanded state
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

// Icon components using exact Figma SVGs
function HomeIcon({ className }: { className?: string }) {
  return (
    <div className={`relative w-6 h-6 ${className || ''}`}>
      <svg className="absolute inset-0" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 5.69L17 10.19V18H15V12H9V18H7V10.19L12 5.69ZM12 3L2 12H5V20H11V14H13V20H19V12H22L12 3Z" fill="currentColor" />
      </svg>
    </div>
  );
}

function HistoryIcon({ className }: { className?: string }) {
  return (
    <div className={`relative w-6 h-6 ${className || ''}`}>
      <div className="absolute inset-[12.5%_6.25%]">
        <img alt="" className="block max-w-none size-full" src={imgVector7} />
      </div>
    </div>
  );
}

function ReceiptIcon({ className }: { className?: string }) {
  return (
    <div className={`relative w-6 h-6 ${className || ''}`}>
      <div className="absolute inset-[8.33%_12.5%]">
        <img alt="" className="block max-w-none size-full" src={imgVector12} />
      </div>
    </div>
  );
}

function ReportIcon({ className }: { className?: string }) {
  return (
    <div className={`relative w-6 h-6 ${className || ''}`}>
      <div className="absolute inset-[10.42%_4.17%]">
        <img alt="" className="block max-w-none size-full" src={imgVector17} />
      </div>
    </div>
  );
}

function QuizIcon({ className }: { className?: string }) {
  return (
    <div className={`relative w-6 h-6 ${className || ''}`}>
      <div className="absolute inset-[8.333%]">
        <img alt="" className="block max-w-none size-full" src={imgVector22} />
      </div>
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

function AssignedIcon({ className }: { className?: string }) {
  return (
    <div className={`relative w-6 h-6 ${className || ''}`}>
      <svg className="absolute inset-0" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.89 22 5.99 22H18C19.1 22 20 21.1 20 20V8L14 2ZM18 20H6V4H13V9H18V20Z" fill="currentColor" />
      </svg>
    </div>
  );
}

function AcceptedIcon({ className }: { className?: string }) {
  return (
    <div className={`relative w-6 h-6 ${className || ''}`}>
      <svg className="absolute inset-0" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.89 22 5.99 22H18C19.1 22 20 21.1 20 20V8L14 2ZM18 20H6V4H13V9H18V20ZM10.59 16.59L7.41 13.41L6 14.83L10.59 19.42L18.59 11.42L17.17 10L10.59 16.59Z" fill="currentColor" />
      </svg>
    </div>
  );
}

// Navigation content component (shared between desktop sidebar and mobile drawer)
function NavigationContent({ 
  activeTab, 
  onTabChange, 
  isExpanded, 
  onMenuClick,
  closeDrawer 
}: {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
  isExpanded: boolean;
  onMenuClick?: () => void;
  closeDrawer?: () => void;
}) {
  const navigationItems = [
    { id: 'forside' as TabType, icon: HomeIcon, label: 'Forside' },
    { id: 'tildelteRevisjoner' as TabType, icon: AssignedIcon, label: 'Tildelte Revisjoner' },
    { id: 'aksepterteRevisjoner' as TabType, icon: AcceptedIcon, label: 'Aksepterte Revisjoner' },
    { id: 'avviksoversikt' as TabType, icon: ReportIcon, label: 'Avviksoversikt' },
    { id: 'fakturagrunnlag' as TabType, icon: ReceiptIcon, label: 'Fakturagrunnlag' },
    { id: 'revisjonshistorikk' as TabType, icon: HistoryIcon, label: 'Revisjonshistorikk' },
  ];

  const handleNavClick = (tab: TabType) => {
    onTabChange(tab);
    if (closeDrawer) {
      closeDrawer();
    }
  };

  return (
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
      <nav className="flex flex-col gap-1 py-2 px-3 flex-1 overflow-y-auto">
        {navigationItems.map((item) => (
          <NavItem
            key={item.id}
            icon={item.icon}
            label={item.label}
            isActive={activeTab === item.id}
            isExpanded={isExpanded}
            onClick={() => handleNavClick(item.id)}
          />
        ))}

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
            handleNavClick('byttRolle' as any);
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
}

export function NavigationRail({ activeTab, onTabChange }: NavigationRailProps) {
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
          activeTab={activeTab}
          onTabChange={onTabChange}
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
              Hovednavigasjon for applikasjonen
            </SheetDescription>
          </VisuallyHidden.Root>
          <div className="bg-background flex flex-col h-full">
            <NavigationContent
              activeTab={activeTab}
              onTabChange={onTabChange}
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