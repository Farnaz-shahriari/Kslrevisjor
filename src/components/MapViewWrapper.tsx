import { InteractiveMap } from './InteractiveMap';

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

interface MapViewWrapperProps {
  revisjoner: TildeltRevisjon[];
  onAccept: (id: string) => void;
  onReject: (id: string) => void;
  acceptedIds: Set<string>;
}

export function MapViewWrapper({ revisjoner, onAccept, onReject, acceptedIds }: MapViewWrapperProps) {
  return (
    <div className="relative w-full h-[calc(100vh-200px)] min-h-[600px] rounded-[12px] overflow-hidden">
      <InteractiveMap
        revisjoner={revisjoner}
        onAccept={onAccept}
        onReject={onReject}
        acceptedIds={acceptedIds}
      />
    </div>
  );
}
