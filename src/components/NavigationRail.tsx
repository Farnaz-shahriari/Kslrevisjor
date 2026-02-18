import { useState, useEffect, useRef } from 'react';
import { imgVector7, imgVector12, imgVector17, imgVector22, imgVector6 } from '../imports/svg-djl4p';
import svgPaths from '../imports/svg-e1u4yqsnoc';
import logoSvgPaths from '../imports/svg-pn3j7cyndy';
import kslLogoExpanded from 'figma:asset/0322202eb2e41df4deecc92938a86f291c0c7b50.png';
import { Sheet, SheetContent, SheetTitle, SheetDescription } from './ui/sheet';
import * as VisuallyHidden from '@radix-ui/react-visually-hidden';

type TabType = 'forside' | 'tildelteRevisjoner' | 'aksepterteRevisjoner' | 'revisjonshistorikk' | 'avviksoversikt' | 'fakturagrunnlag';

interface NavigationRailProps {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
}

// Logo component from Figma imports
function KSLLogo({ collapsed }: { collapsed: boolean }) {
  // Norsk Mat logo - responsive sizing
  // Collapsed: 2x original (162×64), Expanded: 3x original (243×96)
  return (
    <div className="flex items-center justify-start w-full px-3 transition-all duration-300">
      <svg 
        width={collapsed ? "81" : "162"} 
        height={collapsed ? "32" : "64"} 
        viewBox="0 0 81 32" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="transition-all duration-300"
      >
        <path d="M0 24.0534C0 25.5734 1.23497 26.9794 2.73594 27.1884L37.6761 31.8432C39.1961 32.0522 41.647 32.0522 43.167 31.8432L78.0502 27.1884C79.5701 26.9794 80.7861 25.5924 80.7861 24.0534V2.46994H0V24.0534Z" fill="#4A4A4A"/>
        <path d="M44.744 19.9115L47.1569 16.5296H44.915L42.065 20.4815V13.8317H40.0891V23.9014H41.7421L43.471 21.5265L45.105 23.9014H47.4039L44.744 19.9115ZM35.9472 24.0914C37.7141 24.0914 38.8921 23.2554 38.8921 21.7355C38.8921 18.6955 34.6172 19.8735 34.6172 18.5816C34.6172 18.0306 35.2442 17.9166 35.7002 17.9166C36.4032 17.9166 37.2202 18.1446 37.8851 18.5056L38.5121 17.1756C37.7331 16.6626 36.7832 16.3966 35.6622 16.3966C34.0472 16.3966 32.7173 17.1756 32.7173 18.7145C32.7173 21.6595 37.0302 20.5005 37.0302 21.8875C37.0302 22.3815 36.5932 22.5335 35.8712 22.5335C35.0732 22.5335 34.0092 22.2105 33.3632 21.7735L32.6413 23.0654C33.5532 23.7684 34.5222 24.0914 35.9472 24.0914ZM29.2973 18.0116V16.5296H27.3214V23.8824H29.2973V21.0515C29.2973 19.0945 30.5133 18.5436 31.7673 18.5436H31.9953V16.4536C30.5133 16.4536 29.7343 17.2896 29.2973 18.0116ZM22.2105 18.1636C23.4265 18.1636 24.1485 19.0375 24.1485 20.2155C24.1485 21.3745 23.4265 22.2865 22.2105 22.2865C20.9945 22.2865 20.2726 21.3745 20.2726 20.2155C20.2726 19.0375 21.0135 18.1636 22.2105 18.1636ZM22.2105 24.0344C24.5095 24.0344 26.1434 22.3055 26.1434 20.2155C26.1434 18.1066 24.5095 16.3966 22.2105 16.3966C19.9116 16.3966 18.2776 18.1066 18.2776 20.2155C18.2776 22.3055 19.9116 24.0344 22.2105 24.0344ZM14.9337 14.3827V20.2915L10.6588 14.3827H8.72083V23.8824H10.7728V17.9736L15.0477 23.8824H16.9856V14.3827H14.9337Z" fill="white"/>
        <path d="M70.9632 18.2965H72.5402V16.5296H70.9632V14.8766H70.8682L68.2083 17.5556V18.2965H69.0063V22.0774C69.0063 23.3694 69.8422 24.0154 71.2292 24.0154C72.3312 24.0154 72.8822 23.7114 72.8822 23.7114L72.5782 22.2294C72.5782 22.2294 72.2742 22.3624 71.8752 22.3624C71.4002 22.3624 70.9822 22.1344 70.9822 21.4695V18.2965H70.9632ZM63.6294 22.6094C62.8694 22.6094 62.2614 22.2674 62.2614 21.5835C62.2614 20.9185 62.9644 20.5765 63.8004 20.5765C64.3134 20.5765 64.8074 20.6525 65.2824 20.8235V21.3175C65.2824 22.1724 64.5034 22.6094 63.6294 22.6094ZM65.3393 23.8824H67.2393V19.7595C67.2393 17.5176 66.2133 16.3776 63.8954 16.3776C62.5274 16.3776 61.3304 16.8146 60.6465 17.1376L61.1214 18.5815C61.5774 18.3535 62.6224 18.0495 63.5914 18.0495C64.6554 18.0495 65.2633 18.5245 65.2443 19.6455C64.5604 19.4555 63.9144 19.3605 63.2684 19.3605C61.7864 19.3605 60.2665 20.1585 60.2665 21.7165C60.2665 23.2174 61.4254 24.0154 63.0594 24.0154C64.0664 24.0154 64.8834 23.6734 65.3204 23.0464L65.3393 23.8824ZM58.9745 14.3826H56.7516L53.9016 19.1135L51.0517 14.3826H48.8287V23.8824H50.8807V17.7645L53.5596 22.2864H54.2436L56.9225 17.7645V23.8824H58.9935V14.3826H58.9745Z" fill="#D9D9D9"/>
        <path d="M13.0337 0H8.72083V4.95888H13.0337V0Z" fill="#E20613"/>
        <path d="M14.6107 0H13.0337V4.95888H14.6107V0Z" fill="white"/>
        <path d="M18.3725 0H16.7955V4.95888H18.3725V0Z" fill="white"/>
        <path d="M22.6855 0H18.3726V4.95888H22.6855V0Z" fill="#E20613"/>
        <path d="M16.7955 0H14.6106V4.95888H16.7955V0Z" fill="#1D418E"/>
        <path d="M38.9681 8.11283V10.3168L37.3911 8.11283H36.8782V11.2668H37.4291V9.06281L39.0061 11.2668H39.5381V8.11283H38.9681ZM34.1802 8.58782H35.7382V8.11283H33.6482V11.2668H35.7382V10.7918H34.1802V9.93679H35.5672V9.4618H34.1802V8.58782ZM30.2853 10.4688L29.9813 10.8678C30.3043 11.1338 30.7983 11.3238 31.3303 11.3238C32.0333 11.3238 32.5273 11.0008 32.5273 10.3928C32.5273 9.13881 30.5513 9.6138 30.5513 8.96781C30.5513 8.66382 30.8553 8.54982 31.1593 8.54982C31.5203 8.54982 31.8243 8.64482 32.0713 8.83482L32.3563 8.43583C32.0713 8.20783 31.6723 8.03683 31.1973 8.03683C30.5893 8.03683 30.0003 8.32183 30.0003 8.96781C30.0003 10.1838 31.9763 9.70879 31.9763 10.3928C31.9763 10.6968 31.7103 10.8108 31.3303 10.8108C30.9123 10.8108 30.5513 10.6778 30.2853 10.4688ZM29.0693 10.7918H27.5114V8.11283H26.9604V11.2668H29.0693V10.7918ZM24.2625 8.58782H25.8204V8.11283H23.7305V11.2668H25.8204V10.7918H24.2625V9.93679H25.6494V9.4618H24.2625V8.58782ZM22.7045 8.58782V8.11283H20.3295V8.58782H21.2415V11.2668H21.7925V8.58782H22.7045ZM17.8976 8.58782H19.4556V8.11283H17.3656V11.2668H17.9166V9.93679H19.3036V9.4618H17.9166V8.58782H17.8976ZM16.0357 8.11283H15.4847V11.2668H16.0357V8.11283ZM14.4777 8.58782V8.11283H12.1027V8.58782H13.0147V11.2668H13.5657V8.58782H14.4777ZM9.02482 10.4688L8.72083 10.8678C9.04382 11.1338 9.53781 11.3238 10.0698 11.3238C10.7728 11.3238 11.2668 11.0008 11.2668 10.3928C11.2668 9.13881 9.29081 9.6138 9.29081 8.96781C9.29081 8.66382 9.5948 8.54982 9.8988 8.54982C10.2598 8.54982 10.5638 8.64482 10.8108 8.83482L11.0958 8.43583C10.8108 8.20783 10.4118 8.03683 9.9368 8.03683C9.32881 8.03683 8.73982 8.32183 8.73982 8.96781C8.73982 10.1838 10.7158 9.70879 10.7158 10.3928C10.7158 10.6968 10.4498 10.8108 10.0698 10.8108C9.6518 10.8108 9.29081 10.6778 9.02482 10.4688Z" fill="white"/>
      </svg>
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
        {/* Material Design post_add icon */}
        <path d="M17 19.22H5V7h7V5H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-7h-2v7.22z" fill="currentColor" />
        <path d="M19 2h-2v3h-3c.01.01 0 2 0 2h3v2.99c.01.01 2 0 2 0V7h3V5h-3V2zM7 9h8v2H7V9zm0 3v2h8v-2h-3H7zm0 3h8v2H7v-2z" fill="currentColor" />
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
    { id: 'revisjonshistorikk' as TabType, icon: HistoryIcon, label: 'Revisjonshistorikk' },
    { id: 'avviksoversikt' as TabType, icon: ReportIcon, label: 'Avviksoversikt' },
    { id: 'fakturagrunnlag' as TabType, icon: ReceiptIcon, label: 'Fakturagrunnlag' },
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
          onClick={() => handleNavClick('minProfil' as TabType)}
          className={`flex items-center gap-3 h-14 rounded-[var(--radius)] transition-colors w-full ${
            activeTab === 'minProfil'
              ? 'bg-secondary-container text-secondary-container-foreground'
              : 'hover:bg-muted text-foreground'
          }`}
          aria-label="Revisorprofil"
          style={{
            paddingLeft: isExpanded ? '16px' : '0',
            paddingRight: isExpanded ? '24px' : '0',
            justifyContent: isExpanded ? 'flex-start' : 'center'
          }}
        >
          <UserIcon className="shrink-0" />
          {isExpanded && (
            <span className="label-large whitespace-nowrap">Revisorprofil</span>
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
  const [isExpanded, setIsExpanded] = useState(true); // Start expanded by default
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