import { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet';
import L from 'leaflet';
import { Check, X } from 'lucide-react';
import { Button } from './ui/button';

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

interface MapViewProps {
  revisjoner: TildeltRevisjon[];
  onAccept: (id: string) => void;
  onReject: (id: string) => void;
  acceptedIds: Set<string>;
}

// Component to auto-fit map bounds
function MapBounds({ revisjoner }: { revisjoner: TildeltRevisjon[] }) {
  const map = useMap();

  useEffect(() => {
    if (revisjoner.length > 0) {
      const bounds = revisjoner
        .filter(r => r.location)
        .map(r => [r.location!.lat, r.location!.lng] as [number, number]);
      
      if (bounds.length > 0) {
        map.fitBounds(bounds, { padding: [50, 50] });
      }
    }
  }, [revisjoner, map]);

  return null;
}

export function MapView({ revisjoner, onAccept, onReject, acceptedIds }: MapViewProps) {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [expandedCardId, setExpandedCardId] = useState<string | null>(null);

  const selectedRevisjon = selectedId ? revisjoner.find(r => r.id === selectedId) : null;

  // Group revisjoner by location for clustering
  const groupedByLocation = revisjoner.reduce((acc, revisjon) => {
    if (!revisjon.location) return acc;
    const key = `${revisjon.location.lat.toFixed(4)},${revisjon.location.lng.toFixed(4)}`;
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(revisjon);
    return acc;
  }, {} as Record<string, TildeltRevisjon[]>);

  // Create custom marker icons
  const createMarkerIcon = (
    revisjon: TildeltRevisjon, 
    isSelected: boolean, 
    isAccepted: boolean,
    count?: number
  ) => {
    const firstLetter = revisjon.foretakName.charAt(0).toUpperCase();
    const bgColor = isSelected ? '#dae2ff' : '#fafaf0';
    const textColor = isSelected ? '#174295' : '#44483b';
    const borderColor = '#c4c8b7';

    if (count && count > 1) {
      // Cluster marker with count
      return L.divIcon({
        className: 'custom-marker',
        html: `
          <div style="
            width: 56px;
            height: 56px;
            border-radius: 50%;
            background: ${bgColor};
            border: 1px solid ${borderColor};
            box-shadow: 0px 8px 12px 6px rgba(0,0,0,0.15), 0px 4px 4px 0px rgba(0,0,0,0.3);
            display: flex;
            align-items: center;
            justify-content: center;
            font-family: 'Quatro', sans-serif;
            font-size: 22px;
            color: ${textColor};
            font-weight: 400;
          ">
            ${count}
          </div>
        `,
        iconSize: [56, 56],
        iconAnchor: [28, 56],
      });
    }

    if (isAccepted) {
      // Accepted marker with checkmark
      return L.divIcon({
        className: 'custom-marker',
        html: `
          <div style="
            background: ${bgColor};
            border: 1px solid ${borderColor};
            border-radius: 8px;
            padding: 8px 16px;
            display: flex;
            align-items: center;
            gap: 8px;
            box-shadow: 0px 8px 12px 6px rgba(0,0,0,0.15), 0px 4px 4px 0px rgba(0,0,0,0.3);
            white-space: nowrap;
          ">
            <div style="
              width: 22px;
              height: 22px;
              border-radius: 50%;
              background: #eff1e7;
              display: flex;
              align-items: center;
              justify-content: center;
            ">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" fill="#284000"/>
              </svg>
            </div>
            <span style="
              font-family: 'Manrope', sans-serif;
              font-size: 16px;
              font-weight: 500;
              color: ${textColor};
            ">${revisjon.foretakName}</span>
          </div>
        `,
        iconSize: [200, 38],
        iconAnchor: [100, 38],
      });
    }

    // Regular marker
    return L.divIcon({
      className: 'custom-marker',
      html: `
        <div style="
          background: ${bgColor};
          border: 1px solid ${borderColor};
          border-radius: 8px;
          padding: 8px 16px;
          display: flex;
          align-items: center;
          gap: 8px;
          box-shadow: 0px 8px 12px 6px rgba(0,0,0,0.15), 0px 4px 4px 0px rgba(0,0,0,0.3);
          white-space: nowrap;
        ">
          <div style="
            width: 22px;
            height: 22px;
            border-radius: 50%;
            background: #eff1e7;
            display: flex;
            align-items: center;
            justify-content: center;
            font-family: 'Roboto', sans-serif;
            font-size: 16px;
            font-weight: 500;
            color: #284000;
          ">${firstLetter}</div>
          <span style="
            font-family: 'Manrope', sans-serif;
            font-size: 16px;
            font-weight: 500;
            color: ${textColor};
          ">${revisjon.foretakName}</span>
        </div>
      `,
      iconSize: [200, 38],
      iconAnchor: [100, 38],
    });
  };

  const dateObj = selectedRevisjon?.visitDate;
  const monthNames = ['januar', 'februar', 'mars', 'april', 'mai', 'juni', 'juli', 'august', 'september', 'oktober', 'november', 'desember'];
  const dateStr = dateObj ? `${dateObj.getDate()}. ${monthNames[dateObj.getMonth()]} ${dateObj.getFullYear()}` : '';

  return (
    <div className="relative w-full h-[calc(100vh-200px)] min-h-[600px] rounded-[12px] overflow-hidden">
      <MapContainer
        center={[59.9139, 10.7522]} // Oslo center
        zoom={8}
        style={{ height: '100%', width: '100%' }}
        className="z-0"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <MapBounds revisjoner={revisjoner} />

        {Object.entries(groupedByLocation).map(([locationKey, groupRevisjoner]) => {
          const firstRevisjon = groupRevisjoner[0];
          const location = firstRevisjon.location!;
          const isSelected = groupRevisjoner.some(r => r.id === selectedId);
          const isAccepted = groupRevisjoner.every(r => acceptedIds.has(r.id));
          const count = groupRevisjoner.length;

          return (
            <Marker
              key={locationKey}
              position={[location.lat, location.lng]}
              icon={createMarkerIcon(firstRevisjon, isSelected, isAccepted, count > 1 ? count : undefined)}
              eventHandlers={{
                click: () => {
                  if (count === 1) {
                    setSelectedId(firstRevisjon.id);
                    setExpandedCardId(null);
                  } else {
                    // For clustered markers, select the first one
                    setSelectedId(groupRevisjoner[0].id);
                    setExpandedCardId(null);
                  }
                },
              }}
            />
          );
        })}
      </MapContainer>

      {/* Selected Revisjon Card Overlay */}
      {selectedRevisjon && (
        <div className="absolute top-4 left-4 right-4 md:left-auto md:right-auto md:w-[658px] md:left-1/2 md:-translate-x-1/2 z-[1000] bg-[#fafaf0] rounded-[12px] border border-[#c4c8b7] shadow-lg">
          <div className="flex flex-col gap-4 p-6">
            {/* Info chips */}
            <div className="flex flex-wrap gap-[10px] items-start w-full">
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

            {/* Content */}
            <div className="flex flex-wrap gap-4">
              {/* Revisjon info */}
              <div className="flex-1 min-w-[280px]">
                <div className="title-medium text-foreground">
                  <p>Akseptfrist: {dateStr}</p>
                </div>
              </div>

              {/* Foretak info */}
              <div className="flex-1 min-w-[280px]">
                <div className="title-medium text-foreground mb-1">
                  <p>{selectedRevisjon.foretakName}</p>
                </div>
                <div className="label-medium text-foreground">
                  {selectedRevisjon.revisjonData.address.split(', ').map((line, idx) => (
                    <p key={idx}>{line}</p>
                  ))}
                </div>
              </div>
            </div>

            {/* Vis mindre/mer button */}
            <button
              onClick={() => setExpandedCardId(expandedCardId === selectedRevisjon.id ? null : selectedRevisjon.id)}
              className="flex items-center justify-center gap-4 h-[56px] px-10 py-2 hover:bg-[rgba(0,0,0,0.05)] transition-colors cursor-pointer rounded-[var(--radius)] w-full"
            >
              {expandedCardId === selectedRevisjon.id ? (
                <>
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24">
                    <path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z" fill="currentColor" />
                  </svg>
                  <div className="body-large text-foreground">
                    <p>Vis mindre</p>
                  </div>
                </>
              ) : (
                <>
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24">
                    <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" fill="currentColor" />
                  </svg>
                  <div className="body-large text-foreground">
                    <p>Vis mer</p>
                  </div>
                </>
              )}
            </button>

            {/* Expanded content */}
            {expandedCardId === selectedRevisjon.id && (
              <div className="flex flex-wrap gap-4">
                <div className="flex-1 min-w-[280px] space-y-4">
                  <div>
                    <div className="label-small text-muted-foreground">
                      <p>Ordning</p>
                    </div>
                    <div className="body-large text-foreground">
                      <p>{selectedRevisjon.revisjonData.ordning}</p>
                    </div>
                  </div>
                  <div>
                    <div className="label-small text-muted-foreground">
                      <p>Revisjonsfrist</p>
                    </div>
                    <div className="body-large text-foreground">
                      <p>{selectedRevisjon.revisjonData.revisjonsfrist}</p>
                    </div>
                  </div>
                  <div>
                    <div className="label-small text-muted-foreground">
                      <p>Produksjon</p>
                    </div>
                    <div className="body-large text-foreground">
                      {selectedRevisjon.revisjonData.produksjon.map((prod, idx) => (
                        <p key={idx}>{prod}</p>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex-1 min-w-[280px] space-y-4">
                  <div>
                    <div className="label-small text-muted-foreground">
                      <p>Kommune</p>
                    </div>
                    <div className="body-large text-foreground">
                      <p>{selectedRevisjon.revisjonData.kommune}</p>
                    </div>
                  </div>
                  <div>
                    <div className="label-small text-muted-foreground">
                      <p>Adresse</p>
                    </div>
                    <div className="body-large text-foreground">
                      {selectedRevisjon.revisjonData.address.split(', ').map((line, idx) => (
                        <p key={idx}>{line}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Action buttons */}
            {!acceptedIds.has(selectedRevisjon.id) && (
              <div className="flex flex-col gap-[10px] w-full">
                <Button 
                  variant="secondary" 
                  className="w-full"
                  onClick={() => {
                    onAccept(selectedRevisjon.id);
                    setSelectedId(null);
                  }}
                >
                  Aksepter
                </Button>
                <Button 
                  variant="tertiary" 
                  className="w-full"
                  onClick={() => {
                    onReject(selectedRevisjon.id);
                    setSelectedId(null);
                  }}
                >
                  <X className="w-6 h-6" />
                  Avvis
                </Button>
              </div>
            )}

            {acceptedIds.has(selectedRevisjon.id) && (
              <div className="flex items-center justify-center gap-2 text-primary py-2">
                <Check className="w-6 h-6" />
                <span className="body-large">Akseptert</span>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
