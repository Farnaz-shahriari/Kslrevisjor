import { useEffect, useRef, useState } from 'react';
import { ZoomIn, ZoomOut } from 'lucide-react';
import { Button } from './ui/button';
import { MapRevisjonCard } from './MapRevisjonCard';
import { BottomSheet } from './ui/bottom-sheet';
import { X } from 'lucide-react';

interface TildeltRevisjon {
  id: string;
  foretakName: string;
  visitDate: Date;
  visitTime: string;
  revisjonData: {
    ordning: string;
    revisjonsfrist: string;
    produksjon: string[];
    kommune: string;
    address: string;
    isPriority: boolean;
    isOppfolgingGyldigKSL?: boolean;
  };
  location?: {
    lat: number;
    lng: number;
  };
}

interface InteractiveMapProps {
  revisjoner: TildeltRevisjon[];
  onAccept: (id: string) => void;
  onReject: (id: string) => void;
  acceptedIds: Set<string>;
}

// Helper function to format Norwegian date
function formatNorwegianDate(date: Date | null): string {
  if (!date) {
    return 'Ikke planlagt';
  }
  
  const dayNames = ['Søndag', 'Mandag', 'Tirsdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lørdag'];
  const monthNames = ['januar', 'februar', 'mars', 'april', 'mai', 'juni', 'juli', 'august', 'september', 'oktober', 'november', 'desember'];
  
  const dayOfWeek = dayNames[date.getDay()];
  const day = date.getDate();
  const month = monthNames[date.getMonth()];
  const year = date.getFullYear();
  
  return `${dayOfWeek} ${day}. ${month} ${year}`;
}

export function InteractiveMap({ revisjoner, onAccept, onReject, acceptedIds }: InteractiveMapProps) {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<any>(null);
  const markersRef = useRef<any[]>([]);
  const [selectedRevisjon, setSelectedRevisjon] = useState<TildeltRevisjon | null>(null);
  const [cardPosition, setCardPosition] = useState<{ top: number; left: number } | null>(null);
  const [leafletLoaded, setLeafletLoaded] = useState(false);

  // Function to update card position based on map state
  const updateCardPosition = (revisjon: TildeltRevisjon | null) => {
    if (!revisjon || !revisjon.location || !mapRef.current) {
      setCardPosition(null);
      return;
    }

    const L = window.L;
    const point = mapRef.current.latLngToContainerPoint([revisjon.location.lat, revisjon.location.lng]);
    
    // Position card 4px above the label (label height is 40px, so subtract 44px)
    setCardPosition({
      top: point.y - 44,
      left: point.x,
    });
  };

  // Load Leaflet CSS and JS
  useEffect(() => {
    // Load Leaflet CSS
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
    link.integrity = 'sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=';
    link.crossOrigin = '';
    document.head.appendChild(link);

    // Load Leaflet JS
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';
    script.integrity = 'sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo=';
    script.crossOrigin = '';
    script.onload = () => {
      setLeafletLoaded(true);
    };
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(link);
      document.head.removeChild(script);
    };
  }, []);

  // Initialize map
  useEffect(() => {
    if (!leafletLoaded || !mapContainerRef.current || mapRef.current) return;

    // @ts-ignore - Leaflet is loaded via CDN
    const L = window.L;
    if (!L) return;

    // Calculate center from revisjoner with locations
    const revisjonerWithLocation = revisjoner.filter(r => r.location);
    let centerLat = 61.0; // Default center of Norway
    let centerLng = 10.0;
    
    if (revisjonerWithLocation.length > 0) {
      centerLat = revisjonerWithLocation.reduce((sum, r) => sum + (r.location?.lat || 0), 0) / revisjonerWithLocation.length;
      centerLng = revisjonerWithLocation.reduce((sum, r) => sum + (r.location?.lng || 0), 0) / revisjonerWithLocation.length;
    }

    // Create map
    const map = L.map(mapContainerRef.current, {
      zoomControl: false, // We'll add custom zoom controls
      dragging: true,
      touchZoom: true,
      scrollWheelZoom: true,
      doubleClickZoom: true,
      boxZoom: true,
    }).setView([centerLat, centerLng], 7);

    // Add OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors',
      maxZoom: 19,
    }).addTo(map);

    mapRef.current = map;

    // Add markers
    addMarkers();

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, [leafletLoaded, revisjoner]);

  // Disable/enable map interactions based on whether card is shown
  useEffect(() => {
    if (!mapRef.current) return;

    if (selectedRevisjon) {
      // Disable all map interactions
      mapRef.current.dragging.disable();
      mapRef.current.touchZoom.disable();
      mapRef.current.scrollWheelZoom.disable();
      mapRef.current.doubleClickZoom.disable();
      mapRef.current.boxZoom.disable();
    } else {
      // Enable all map interactions
      mapRef.current.dragging.enable();
      mapRef.current.touchZoom.enable();
      mapRef.current.scrollWheelZoom.enable();
      mapRef.current.doubleClickZoom.enable();
      mapRef.current.boxZoom.enable();
    }
  }, [selectedRevisjon]);

  // Add markers to map
  const addMarkers = () => {
    // @ts-ignore
    const L = window.L;
    if (!L || !mapRef.current) return;

    // Clear existing markers
    markersRef.current.forEach(marker => marker.remove());
    markersRef.current = [];

    // Get current zoom level
    const currentZoom = mapRef.current.getZoom();

    // Group markers by proximity ONLY when zoomed out significantly
    const markerGroups: { revisjoner: TildeltRevisjon[]; center: { lat: number; lng: number } }[] = [];
    const processedIds = new Set<string>();

    revisjoner.forEach((revisjon) => {
      if (!revisjon.location || processedIds.has(revisjon.id)) return;

      // Only cluster when significantly zoomed out (zoom level < 6)
      const shouldCluster = currentZoom < 6;
      
      if (shouldCluster) {
        // Find nearby revisjoner (within ~100km when very zoomed out)
        const threshold = 1.0; // degrees (roughly 100km)
        const nearby = revisjoner.filter(r => {
          if (!r.location || processedIds.has(r.id)) return false;
          const distance = Math.sqrt(
            Math.pow(r.location.lat - revisjon.location!.lat, 2) +
            Math.pow(r.location.lng - revisjon.location!.lng, 2)
          );
          return distance < threshold;
        });

        // Mark all nearby as processed
        nearby.forEach(r => processedIds.add(r.id));

        // Calculate center
        const avgLat = nearby.reduce((sum, r) => sum + (r.location?.lat || 0), 0) / nearby.length;
        const avgLng = nearby.reduce((sum, r) => sum + (r.location?.lng || 0), 0) / nearby.length;

        markerGroups.push({
          revisjoner: nearby,
          center: { lat: avgLat, lng: avgLng },
        });
      } else {
        // Show individual markers
        processedIds.add(revisjon.id);
        markerGroups.push({
          revisjoner: [revisjon],
          center: { lat: revisjon.location.lat, lng: revisjon.location.lng },
        });
      }
    });

    // Create markers for each group
    markerGroups.forEach((group) => {
      const isCluster = group.revisjoner.length > 1 && currentZoom < 6;

      let iconHtml = '';
      
      if (isCluster) {
        // Cluster marker - show count
        iconHtml = `
          <div class="flex items-center justify-center" style="width: 56px; height: 56px;">
            <div style="position: relative; width: 56px; height: 56px; background: var(--primary-container); border-radius: 50%; box-shadow: 0px 8px 12px 6px rgba(0,0,0,0.15), 0px 4px 4px 0px rgba(0,0,0,0.3); display: flex; align-items: center; justify-content: center;">
              <span class="title-large" style="color: var(--primary-container-foreground);">${group.revisjoner.length}</span>
            </div>
          </div>
        `;
      } else {
        // Single marker - show label with T icon + name
        const revisjon = group.revisjoner[0];
        const isSelected = selectedRevisjon?.id === revisjon.id;
        
        iconHtml = `
          <div class="flex items-center gap-2 h-10 px-2 pr-5 rounded-lg" style="background: ${isSelected ? 'var(--secondary-container)' : 'var(--card)'}; border: 1px solid var(--border); box-shadow: 0px 10px 15px 7px rgba(0,0,0,0.15), 0px 5px 5px 0px rgba(0,0,0,0.3); white-space: nowrap;">
            <div style="position: relative; width: 22px; height: 22px; flex-shrink: 0;">
              <div style="position: absolute; inset: 0; background: var(--primary-container); border-radius: 50%; display: flex; align-items: center; justify-content: center;">
                <span class="label-medium" style="color: var(--primary-container-foreground); font-size: 16px; line-height: 24px;">T</span>
              </div>
            </div>
            <span class="label-medium" style="color: ${isSelected ? 'var(--secondary-container-foreground)' : 'var(--foreground)'};">${revisjon.foretakName}</span>
          </div>
        `;
      }

      const customIcon = L.divIcon({
        html: iconHtml,
        className: 'custom-marker-label',
        iconSize: isCluster ? [56, 56] : undefined,
        iconAnchor: isCluster ? [28, 28] : [0, 20],
        popupAnchor: isCluster ? [0, -28] : [0, -20],
      });

      // Create marker
      const marker = L.marker([group.center.lat, group.center.lng], {
        icon: customIcon,
      }).addTo(mapRef.current);

      // Create popup content for cluster or single revisjon
      if (isCluster) {
        // Cluster popup - list all revisjoner
        const popupContent = document.createElement('div');
        popupContent.className = 'p-4';
        popupContent.innerHTML = `
          <div style="min-width: 280px; max-width: 320px;">
            <div class="title-medium" style="color: var(--foreground); margin-bottom: 12px;">
              ${group.revisjoner.length} revisjoner i dette området
            </div>
            <div style="display: flex; flex-direction: column; gap: 8px;">
              ${group.revisjoner.map(r => `
                <div class="body-medium" style="color: var(--foreground); padding: 8px; background: var(--muted); border-radius: 8px;">
                  • ${r.foretakName} (${r.revisjonData.kommune})
                </div>
              `).join('')}
            </div>
            <div class="body-medium" style="color: var(--muted-foreground); margin-top: 12px;">
              Zoom inn for å se detaljer
            </div>
          </div>
        `;

        marker.bindPopup(popupContent, {
          maxWidth: 340,
          className: 'custom-popup',
        });
      } else {
        // Single revisjon popup
        const revisjon = group.revisjoner[0];
        const isAccepted = acceptedIds.has(revisjon.id);
        const popupContent = document.createElement('div');
        popupContent.className = 'p-6';
        popupContent.innerHTML = `
          <div style="min-width: 280px; max-width: 320px;">
            <div style="display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 16px;">
              ${revisjon.revisjonData.isPriority ? '<div style="padding: 6px 12px; border-radius: 8px; background: var(--error-container); color: var(--error-container-foreground); border: 1px solid var(--border);" class="label-medium">Prioritert</div>' : ''}
              ${revisjon.revisjonData.isOppfolgingGyldigKSL ? '<div style="padding: 6px 12px; border-radius: 8px; background: #fdeeb1; color: #3d2c00; border: 1px solid var(--border);" class="label-medium">Oppfølging gyldig KSL</div>' : ''}
            </div>
            
            <div style="margin-bottom: 8px;">
              <div class="body-medium" style="color: var(--foreground);">
                Akseptfrist: ${formatNorwegianDate(revisjon.visitDate)}
              </div>
            </div>
            
            <div style="margin-bottom: 16px;">
              <div class="body-medium" style="color: var(--foreground); margin-bottom: 4px; font-weight: 500;">${revisjon.foretakName}</div>
              <div class="body-medium" style="color: var(--foreground); line-height: 20px;">
                ${revisjon.revisjonData.address}<br/>
                ${revisjon.revisjonData.kommune}
              </div>
            </div>
            
            ${!isAccepted ? `
              <div style="display: flex; flex-col gap: 8px;">
                <button 
                  class="accept-btn" 
                  data-id="${revisjon.id}"
                  style="width: 100%; height: 56px; padding: 0 24px; border-radius: 100px; background: transparent; color: var(--foreground); border: 1px solid var(--border); cursor: pointer; font-family: inherit;"
                  class="label-medium"
                >
                  Aksepter
                </button>
                <button 
                  class="reject-btn" 
                  data-id="${revisjon.id}"
                  style="width: 100%; height: 56px; padding: 0 24px; border-radius: 100px; background: transparent; color: var(--primary); border: none; cursor: pointer; font-family: inherit; display: flex; align-items: center; justify-content: center; gap: 8px;"
                  class="label-medium"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" fill="currentColor"/>
                  </svg>
                  Avvis
                </button>
              </div>
            ` : `
              <div style="display: flex; align-items: center; gap: 8px; color: var(--primary);">
                <span class="label-medium">✓ Akseptert</span>
              </div>
            `}
          </div>
        `;

        // Add event listeners for buttons
        const acceptBtn = popupContent.querySelector('.accept-btn');
        const rejectBtn = popupContent.querySelector('.reject-btn');
        
        if (acceptBtn) {
          acceptBtn.addEventListener('click', () => {
            onAccept(revisjon.id);
            marker.closePopup();
          });
        }
        
        if (rejectBtn) {
          rejectBtn.addEventListener('click', () => {
            onReject(revisjon.id);
            marker.closePopup();
          });
        }

        marker.bindPopup(popupContent, {
          maxWidth: 340,
          className: 'custom-popup',
        });

        marker.on('click', () => {
          setSelectedRevisjon(revisjon);
          
          // Update card position
          updateCardPosition(revisjon);
          
          // Refresh markers to update selected state
          setTimeout(() => addMarkers(), 10);
        });
      }

      markersRef.current.push(marker);
    });

    // Re-render when zoom changes
    mapRef.current.off('zoomend');
    mapRef.current.on('zoomend', () => {
      addMarkers();
      // Update card position after zoom
      if (selectedRevisjon) {
        updateCardPosition(selectedRevisjon);
      }
    });

    // Update card position when map moves/pans
    mapRef.current.off('move');
    mapRef.current.on('move', () => {
      if (selectedRevisjon) {
        updateCardPosition(selectedRevisjon);
      }
    });
  };

  // Update markers when acceptedIds changes
  useEffect(() => {
    if (leafletLoaded && mapRef.current) {
      addMarkers();
    }
  }, [acceptedIds, revisjoner, leafletLoaded]);

  // Zoom controls
  const handleZoomIn = () => {
    if (mapRef.current) {
      mapRef.current.zoomIn();
    }
  };

  const handleZoomOut = () => {
    if (mapRef.current) {
      mapRef.current.zoomOut();
    }
  };

  return (
    <div className="relative w-full h-full rounded-[12px] overflow-hidden bg-muted border border-[var(--border)]">
      <div ref={mapContainerRef} className="w-full h-full" />

      {/* Backdrop overlay when card is shown - DESKTOP ONLY */}
      {selectedRevisjon && leafletLoaded && (
        <div 
          className="absolute inset-0 bg-black/50 z-[1500] max-[768px]:hidden"
          onClick={() => {
            setSelectedRevisjon(null);
            setTimeout(() => addMarkers(), 10);
          }}
        />
      )}

      {/* DESKTOP: Selected Revisjon Card Overlay - Fixed Position - Desktop only */}
      {selectedRevisjon && leafletLoaded && (
        <div 
          className="absolute z-[2000] flex items-center justify-center max-[768px]:hidden"
          style={{
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        >
          <MapRevisjonCard
            revisjon={selectedRevisjon}
            onClose={() => {
              setSelectedRevisjon(null);
              setTimeout(() => addMarkers(), 10);
            }}
            onAccept={(id) => {
              onAccept(id);
              setSelectedRevisjon(null);
              setTimeout(() => addMarkers(), 10);
            }}
            onReject={(id) => {
              onReject(id);
              setSelectedRevisjon(null);
              setTimeout(() => addMarkers(), 10);
            }}
            isAccepted={acceptedIds.has(selectedRevisjon.id)}
          />
        </div>
      )}

      {/* Zoom controls - hide when card is shown */}
      {leafletLoaded && !selectedRevisjon && (
        <div className="absolute top-4 right-4 flex flex-col gap-2 z-[1000]">
          <Button
            variant="secondary"
            size="icon"
            onClick={handleZoomIn}
            className="bg-background shadow-lg"
          >
            <ZoomIn className="w-6 h-6" />
          </Button>
          <Button
            variant="secondary"
            size="icon"
            onClick={handleZoomOut}
            className="bg-background shadow-lg"
          >
            <ZoomOut className="w-6 h-6" />
          </Button>
        </div>
      )}

      {/* Legend - hide when card is shown */}
      {leafletLoaded && !selectedRevisjon && (
        <div className="absolute bottom-4 left-4 bg-background rounded-lg shadow-lg p-4 max-w-[280px] z-[1000]">
          <div className="label-medium text-foreground mb-3">Ordninger</div>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full" style={{ backgroundColor: '#4a671e' }}></div>
              <span className="body-medium text-foreground">KSL</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full" style={{ backgroundColor: '#992b1f' }}></div>
              <span className="body-medium text-foreground">LokalMat</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full" style={{ backgroundColor: '#174295' }}></div>
              <span className="body-medium text-foreground">Nyt Norge</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full" style={{ backgroundColor: '#6f4e37' }}></div>
              <span className="body-medium text-foreground">Spesialitet</span>
            </div>
          </div>
        </div>
      )}

      {/* Loading state */}
      {!leafletLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-muted">
          <div className="flex flex-col items-center gap-4">
            <div className="title-large text-foreground">Laster kart...</div>
          </div>
        </div>
      )}

      {/* Custom popup styles */}
      <style>{`
        .custom-marker-label {
          background: transparent !important;
          border: none !important;
          z-index: 1000 !important;
        }
        
        .leaflet-popup {
          z-index: 2000 !important;
        }
        
        .custom-popup .leaflet-popup-content-wrapper {
          background: var(--card) !important;
          border: 1px solid var(--border) !important;
          border-radius: 12px !important;
          padding: 0 !important;
          box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1) !important;
        }
        
        .custom-popup .leaflet-popup-content {
          margin: 0 !important;
          width: auto !important;
        }
        
        .custom-popup .leaflet-popup-tip {
          background: var(--card) !important;
          border: 1px solid var(--border) !important;
        }
        
        .custom-popup .leaflet-popup-close-button {
          color: var(--foreground) !important;
          font-size: 24px !important;
          padding: 8px !important;
        }
        
        .custom-popup .accept-btn:hover {
          background: var(--muted) !important;
        }
        
        .custom-popup .reject-btn:hover {
          opacity: 0.7;
        }
      `}</style>

      {/* MOBILE/TABLET: BottomSheet for selected revisjon - Rendered OUTSIDE map container */}
      {selectedRevisjon && leafletLoaded && (
        <BottomSheet
          isOpen={!!selectedRevisjon}
          onClose={() => {
            setSelectedRevisjon(null);
            setTimeout(() => addMarkers(), 10);
          }}
          title={selectedRevisjon.foretakName}
          maxHeight={85}
          footer={
            !acceptedIds.has(selectedRevisjon.id) ? (
              <div className="w-full flex flex-col gap-[10px]">
                {/* Secondary button - Aksepter */}
                <Button 
                  variant="secondary" 
                  className="w-full"
                  onClick={() => {
                    onAccept(selectedRevisjon.id);
                    setSelectedRevisjon(null);
                    setTimeout(() => addMarkers(), 10);
                  }}
                >
                  Aksepter
                </Button>
                
                {/* Tertiary/Text button - Avvis */}
                <Button 
                  variant="tertiary" 
                  className="w-full"
                  onClick={() => {
                    onReject(selectedRevisjon.id);
                    setSelectedRevisjon(null);
                    setTimeout(() => addMarkers(), 10);
                  }}
                >
                  <X className="w-6 h-6" />
                  Avvis
                </Button>
              </div>
            ) : (
              <div className="w-full flex items-center justify-center gap-2 text-primary py-4">
                <span className="label-medium">✓ Akseptert</span>
              </div>
            )
          }
        >
          {/* BottomSheet Content */}
          <div className="px-6 pb-6">
            {/* Info chips */}
            {(selectedRevisjon.revisjonData.isPriority || selectedRevisjon.revisjonData.isOppfolgingGyldigKSL) && (
              <div className="flex flex-wrap gap-[10px] mb-6">
                {/* Priority chip */}
                {selectedRevisjon.revisjonData.isPriority && (
                  <div className="bg-[#ffdad6] h-[32px] relative rounded-[8px] shrink-0">
                    <div className="content-stretch flex h-full items-center justify-center overflow-clip relative rounded-[inherit]">
                      <div className="content-stretch flex h-[32px] items-center justify-center px-[16px] py-[6px] relative shrink-0">
                        <div className="label-medium text-[#410002]">
                          <p>Prioritert</p>
                        </div>
                      </div>
                    </div>
                    <div aria-hidden="true" className="absolute border border-[#c4c8b7] border-solid inset-0 pointer-events-none rounded-[8px]" />
                  </div>
                )}
                
                {/* KSL chip */}
                {selectedRevisjon.revisjonData.isOppfolgingGyldigKSL && (
                  <div className="bg-[#fdeeb1] h-[32px] relative rounded-[8px] shrink-0">
                    <div className="content-stretch flex h-full items-center justify-center overflow-clip relative rounded-[inherit]">
                      <div className="content-stretch flex h-[32px] items-center justify-center px-[16px] py-[6px] relative shrink-0">
                        <div className="label-medium text-[#3d2c00]">
                          <p>Oppfølging gyldig KSL</p>
                        </div>
                      </div>
                    </div>
                    <div aria-hidden="true" className="absolute border border-[#c4c8b7] border-solid inset-0 pointer-events-none rounded-[8px]" />
                  </div>
                )}
              </div>
            )}

            {/* Akseptfrist date */}
            <div className="title-medium text-foreground mb-6">
              <p>Akseptfrist: {formatNorwegianDate(selectedRevisjon.visitDate)}</p>
            </div>

            {/* Ordning */}
            <div className="flex flex-col min-h-[56px] mb-4">
              <div className="label-small text-muted-foreground mb-1">
                <p>Ordning</p>
              </div>
              <div className="body-large text-foreground">
                <p>{selectedRevisjon.revisjonData.ordning}</p>
              </div>
            </div>
            
            {/* Revisjonsfrist */}
            <div className="flex flex-col min-h-[56px] mb-4">
              <div className="label-small text-muted-foreground mb-1">
                <p>Revisjonsfrist</p>
              </div>
              <div className="body-large text-foreground">
                <p>{selectedRevisjon.revisjonData.revisjonsfrist}</p>
              </div>
            </div>
            
            {/* Produksjon */}
            <div className="flex flex-col min-h-[72px] mb-4">
              <div className="label-small text-muted-foreground mb-1">
                <p>Produksjon</p>
              </div>
              <div className="body-large text-foreground">
                {selectedRevisjon.revisjonData.produksjon.map((prod, idx) => (
                  <p key={idx}>{prod}</p>
                ))}
              </div>
            </div>

            {/* Address section heading */}
            <div className="title-medium text-foreground mb-2 mt-6">
              <p>Adresse</p>
            </div>

            {/* Kommune */}
            <div className="flex flex-col min-h-[56px] mb-4">
              <div className="label-small text-muted-foreground mb-1">
                <p>Kommune</p>
              </div>
              <div className="body-large text-foreground">
                <p>{selectedRevisjon.revisjonData.kommune}</p>
              </div>
            </div>
            
            {/* Adresse */}
            <div className="flex flex-col min-h-[72px]">
              <div className="label-small text-muted-foreground mb-1">
                <p>Adresse</p>
              </div>
              <div className="body-large text-foreground">
                {selectedRevisjon.revisjonData.address.split(', ').map((line, idx) => (
                  <p key={idx}>{line}</p>
                ))}
              </div>
            </div>
          </div>
        </BottomSheet>
      )}
    </div>
  );
}