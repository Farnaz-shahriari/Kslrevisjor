import { useState, ReactNode } from 'react';
import { ChevronLeft } from 'lucide-react';

interface MobileTabletListDetailLayoutProps {
  /** The menu/list panel content (shown first on mobile/tablet) */
  menuPanel: ReactNode;
  /** The detail panel content */
  detailPanel: ReactNode;
  /** Title for the detail view header */
  detailTitle?: string;
  /** Custom detail header (overrides detailTitle if provided) */
  detailHeader?: ReactNode;
  /** Width of the menu panel on desktop (default: 400px) */
  menuPanelWidth?: string;
  /** Additional className for the menu panel */
  menuPanelClassName?: string;
  /** Additional className for the detail panel */
  detailPanelClassName?: string;
  /** Callback when back button is clicked */
  onBackToMenu?: () => void;
}

/**
 * MobileTabletListDetailLayout Component
 * 
 * Implements the mobile/tablet navigation pattern:
 * - Mobile/Tablet (<1400px): Shows menu first, then navigates to detail with back button
 * - Desktop (≥1400px): Shows both panels side-by-side
 * 
 * Usage:
 * ```tsx
 * <MobileTabletListDetailLayout
 *   menuPanel={<MyListComponent />}
 *   detailPanel={<MyDetailComponent />}
 *   detailTitle="Detail View Title"
 * />
 * ```
 */
export function MobileTabletListDetailLayout({
  menuPanel,
  detailPanel,
  detailTitle,
  detailHeader,
  menuPanelWidth = '400px',
  menuPanelClassName = '',
  detailPanelClassName = '',
  onBackToMenu
}: MobileTabletListDetailLayoutProps) {
  const [showingMenu, setShowingMenu] = useState(true);

  const handleBackToMenu = () => {
    setShowingMenu(true);
    onBackToMenu?.();
  };

  const handleNavigateToDetail = () => {
    setShowingMenu(false);
  };

  return (
    <div className="flex h-full w-full overflow-hidden">
      {/* MOBILE/TABLET: Menu Panel - Shows ONLY when showingMenu is true */}
      {showingMenu && (
        <div 
          className={`min-[1400px]:hidden w-full h-full bg-background flex flex-col overflow-hidden animate-in slide-in-from-left duration-300 ${menuPanelClassName}`}
          onClick={handleNavigateToDetail}
        >
          {menuPanel}
        </div>
      )}

      {/* DESKTOP: Menu Panel - Always visible */}
      <div 
        className={`max-[1400px]:hidden h-full flex flex-col overflow-hidden ${menuPanelClassName}`}
        style={{ width: menuPanelWidth }}
      >
        {menuPanel}
      </div>

      {/* Vertical Divider - Desktop only */}
      <div className="w-px h-full bg-[var(--border)] max-[1400px]:hidden" />

      {/* MOBILE/TABLET & DESKTOP: Detail Panel */}
      <div className={`flex-1 h-full flex-col ${showingMenu ? 'max-[1400px]:hidden' : 'max-[1400px]:flex'} min-[1400px]:flex max-[1400px]:w-full max-[1400px]:animate-in max-[1400px]:slide-in-from-right max-[1400px]:duration-300 ${detailPanelClassName}`}>
        {/* Detail Header with Back Button (only if title or custom header provided) */}
        {(detailTitle || detailHeader) && (
          <div className="border-b border-[var(--border)] px-10 max-[1400px]:px-6 py-3">
            <div className="flex items-center gap-3">
              {/* Back button - visible only on mobile/tablet - positioned LEFT of title */}
              <button
                onClick={handleBackToMenu}
                className="min-[1400px]:hidden flex items-center justify-center w-14 h-14 rounded-full hover:bg-muted transition-colors"
                aria-label="Tilbake til meny"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              
              {detailHeader || (
                <h2 className="headline-medium">{detailTitle}</h2>
              )}
            </div>
          </div>
        )}

        {/* Detail content */}
        <div className="flex-1 overflow-hidden flex flex-col">
          {detailPanel}
        </div>
      </div>
    </div>
  );
}
