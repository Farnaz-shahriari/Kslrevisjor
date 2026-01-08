import React, { useRef, useState, useEffect } from 'react';

interface OverlayScrollContainerProps {
  children: React.ReactNode;
  className?: string;
}

export const OverlayScrollContainer: React.FC<OverlayScrollContainerProps> = ({
  children,
  className = '',
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showScrollbar, setShowScrollbar] = useState(false);
  const [scrollbarHeight, setScrollbarHeight] = useState(0);
  const [scrollbarTop, setScrollbarTop] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const updateScrollbar = () => {
    if (!scrollContainerRef.current) return;

    const container = scrollContainerRef.current;
    const hasScroll = container.scrollHeight > container.clientHeight;
    
    if (!hasScroll) {
      setShowScrollbar(false);
      return;
    }

    setShowScrollbar(true);

    // Calculate scrollbar thumb height and position
    const scrollRatio = container.clientHeight / container.scrollHeight;
    const thumbHeight = Math.max(container.clientHeight * scrollRatio, 40); // Min 40px
    const scrollProgress = container.scrollTop / (container.scrollHeight - container.clientHeight);
    const maxThumbTop = container.clientHeight - thumbHeight;
    const thumbTop = scrollProgress * maxThumbTop;

    setScrollbarHeight(thumbHeight);
    setScrollbarTop(thumbTop);
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    updateScrollbar();

    const handleScroll = () => updateScrollbar();
    const handleResize = () => updateScrollbar();

    container.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    // Observer for content changes
    const observer = new MutationObserver(updateScrollbar);
    observer.observe(container, { childList: true, subtree: true });

    return () => {
      container.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      observer.disconnect();
    };
  }, []);

  const handleThumbMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);

    const startY = e.clientY;
    const startScrollTop = scrollContainerRef.current?.scrollTop || 0;

    const handleMouseMove = (moveEvent: MouseEvent) => {
      if (!scrollContainerRef.current) return;

      const deltaY = moveEvent.clientY - startY;
      const container = scrollContainerRef.current;
      const scrollRatio = container.scrollHeight / container.clientHeight;
      const newScrollTop = startScrollTop + deltaY * scrollRatio;

      container.scrollTop = newScrollTop;
    };

    const handleMouseUp = () => {
      setIsDragging(false);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  const handleTrackClick = (e: React.MouseEvent) => {
    if (!scrollContainerRef.current) return;
    if ((e.target as HTMLElement).classList.contains('scrollbar-thumb')) return;

    const container = scrollContainerRef.current;
    const rect = e.currentTarget.getBoundingClientRect();
    const clickY = e.clientY - rect.top;
    const scrollRatio = clickY / container.clientHeight;
    const newScrollTop = scrollRatio * (container.scrollHeight - container.clientHeight);

    container.scrollTop = newScrollTop;
  };

  // Only show scrollbar on desktop
  const isDesktop = typeof window !== 'undefined' && window.innerWidth >= 1024;

  return (
    <div 
      className="relative"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Scrollable content with hidden scrollbar */}
      <div
        ref={scrollContainerRef}
        className={className}
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
      >
        {children}
      </div>

      {/* Custom overlay scrollbar - only on desktop, hidden by default, visible on hover */}
      {showScrollbar && isDesktop && (
        <div
          className={`absolute top-0 right-0 w-3 h-full pointer-events-auto z-50 transition-opacity duration-200 ${
            isHovering || isDragging ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={handleTrackClick}
          style={{
            background: 'transparent',
          }}
        >
          <div
            className="scrollbar-thumb absolute right-0 w-1.5 rounded-full cursor-pointer transition-colors duration-200"
            style={{
              height: `${scrollbarHeight}px`,
              top: `${scrollbarTop}px`,
              backgroundColor: isDragging 
                ? 'rgba(196, 200, 183, 0.9)' 
                : 'rgba(196, 200, 183, 0.6)',
            }}
            onMouseDown={handleThumbMouseDown}
          />
        </div>
      )}
    </div>
  );
};