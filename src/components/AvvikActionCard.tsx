import { FileText, Calendar, Clock } from 'lucide-react';

type SeverityType = 'kritisk' | 'avvik' | 'lite';
type StatusType = 'tidspunkt-foreslatt' | 'besok-planlagt' | 'venter-godkjenning' | 'onsker-fristforlengelse' | 'dokument-levert' | 'avventer-moteforslag' | 'avventer-dokumentasjon';

interface AvvikActionCardProps {
  foretakName: string;
  deadline: string; // Pre-formatted Norwegian date
  checklist: string;
  severity: SeverityType;
  status: StatusType;
  onClick?: () => void;
}

// SVG paths for icons
const svgPaths = {
  // File copy icon
  fileIcon: "M16 1H4C2.9 1 2 1.9 2 3V17H4V3H16V1ZM19 5H8C6.9 5 6 5.9 6 7V21C6 22.1 6.9 23 8 23H19C20.1 23 21 22.1 21 21V7C21 5.9 20.1 5 19 5ZM19 21H8V7H19V21Z",
  // Calendar icon
  calendarIcon: "M17 12H12V17H17V12ZM16 1V3H8V1H6V3H5C3.89 3 3.01 3.9 3.01 5L3 19C3 20.1 3.89 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3H18V1H16ZM19 19H5V8H19V19Z",
  // Pending actions icon (Material Design - hourglass_top for pending deadline)
  pendingIcon: "M6 2V8H6.01L6 8.01L10 12L6 16L6.01 16.01H6V22H18V16.01H17.99L18 16L14 12L18 8.01L17.99 8H18V2H6ZM16 16.5V20H8V16.5L12 12.5L16 16.5Z",
  // Report problem outlined icon (Material)
  reportProblemIcon: "M12 5.99L19.53 19H4.47L12 5.99ZM12 2L1 21H23L12 2ZM13 16H11V18H13V16ZM13 10H11V14H13V10Z",
  // Background circle
  circleBg: "M20 0C31.0457 0 40 8.9543 40 20C40 31.0457 31.0457 40 20 40C8.9543 40 0 31.0457 0 20C0 8.9543 8.9543 0 20 0Z"
};

export function AvvikActionCard({ 
  foretakName, 
  deadline, 
  checklist, 
  severity,
  status,
  onClick
}: AvvikActionCardProps) {
  // Determine the icon and message based on status
  const getStatusInfo = () => {
    switch (status) {
      case 'dokument-levert':
        return {
          icon: svgPaths.fileIcon,
          message: 'Dokumentasjon har blitt sent.',
          iconColor: '#284000'
        };
      case 'tidspunkt-foreslatt':
        return {
          icon: svgPaths.calendarIcon,
          message: 'Revisjonsdato er foreslått',
          iconColor: '#284000'
        };
      case 'onsker-fristforlengelse':
        return {
          icon: svgPaths.pendingIcon,
          message: 'Utsatt frist er forespurt.',
          iconColor: '#284000'
        };
      default:
        return {
          icon: svgPaths.fileIcon,
          message: 'Dokumentasjon har blitt sent.',
          iconColor: '#284000'
        };
    }
  };

  // Get severity badge config
  const getSeverityBadge = () => {
    switch (severity) {
      case 'kritisk':
        return {
          bg: '#ffdad6',
          text: '#410002',
          label: 'Kritisk'
        };
      case 'avvik':
        return {
          bg: '#fdd19f',
          text: '#3d2100',
          label: 'Avvik'
        };
      case 'lite':
        return {
          bg: '#fdeeb1',
          text: '#3d2c00',
          label: 'Lite avvik'
        };
      default:
        return {
          bg: '#fdd19f',
          text: '#3d2100',
          label: 'Avvik'
        };
    }
  };

  const statusInfo = getStatusInfo();
  const severityBadge = getSeverityBadge();

  return (
    <button
      onClick={onClick}
      className="bg-white flex flex-col items-start rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.3),0px_2px_6px_0px_rgba(0,0,0,0.15)] w-full cursor-pointer transition-all hover:shadow-[0px_2px_4px_0px_rgba(0,0,0,0.3),0px_4px_12px_0px_rgba(0,0,0,0.15)] active:shadow-[0px_1px_2px_0px_rgba(0,0,0,0.3),0px_1px_3px_0px_rgba(0,0,0,0.15)] text-left"
    >
      {/* Row 1: Status message with icon (56px height) */}
      <div className="flex flex-col h-[56px] min-h-[56px] items-center justify-center w-full">
        <div className="flex-1 min-h-px min-w-px w-full">
          <div className="flex flex-row items-center size-full">
            <div className="flex gap-[16px] items-center px-[16px] py-[8px] size-full">
              {/* Leading element - Icon */}
              <div className="flex flex-col items-start justify-center overflow-clip rounded-[1000px] shrink-0">
                <div className="bg-[#eff1e7] relative shrink-0 size-[40px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
                    <path 
                      clipRule="evenodd" 
                      d={svgPaths.circleBg}
                      fill="#EFF1E7" 
                      fillRule="evenodd" 
                    />
                  </svg>
                  {/* Icon centered */}
                  <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%+0.1px)] size-[24.208px] top-[calc(50%+0.1px)]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.2085 24.2085">
                      <path d={statusInfo.icon} fill={statusInfo.iconColor} />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-[1_0_0] flex-col h-full items-start justify-center min-h-px min-w-px overflow-clip">
                <div className="body-large text-foreground w-full">
                  <p className="whitespace-pre-wrap">{statusInfo.message}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Row 2: Farm name, deadline, and severity badge (56px height) */}
      <div className="flex flex-col items-center justify-center min-h-[56px] w-full">
        <div className="h-[56px] w-full">
          <div className="flex flex-row items-center size-full">
            <div className="flex gap-[16px] items-center px-[16px] size-full">
              {/* Content - Farm name and deadline */}
              <div className="flex flex-[1_0_0] flex-col label-medium h-full items-start justify-center min-h-px min-w-px overflow-clip">
                <div className="flex flex-col justify-center leading-[0] shrink-0 text-foreground w-full">
                  <p className="leading-[20px] whitespace-pre-wrap">{foretakName}</p>
                </div>
                <p className="h-[20px] leading-[20px] overflow-hidden shrink-0 text-muted-foreground text-ellipsis w-full whitespace-nowrap">
                  Lukkefrist: {deadline}
                </p>
              </div>

              {/* Trailing element - Severity badge */}
              <div className="flex items-start shrink-0">
                <div className="flex items-center justify-center overflow-clip shrink-0">
                  <div 
                    className="relative rounded-[8px] shrink-0"
                    style={{ backgroundColor: severityBadge.bg }}
                  >
                    <div className="flex items-center justify-center overflow-clip relative rounded-[inherit]">
                      <div className="flex gap-[8px] h-[32px] items-center justify-center pl-[8px] pr-[16px] py-[6px] shrink-0">
                        {/* Report problem icon - 24px square */}
                        <div className="relative shrink-0 size-[24px] flex items-center justify-center">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                            <path d={svgPaths.reportProblemIcon} fill={severityBadge.text} />
                          </svg>
                        </div>
                        <div 
                          className="flex flex-col label-medium justify-center leading-[0] shrink-0 text-center whitespace-nowrap"
                          style={{ color: severityBadge.text }}
                        >
                          <p className="leading-[20px]">{severityBadge.label}</p>
                        </div>
                      </div>
                    </div>
                    <div 
                      aria-hidden="true" 
                      className="absolute border border-[#c4c8b7] border-solid inset-0 pointer-events-none rounded-[8px]" 
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Row 3: Checklist question (72px min-height) */}
      <div className="flex flex-col items-center min-h-[72px] w-full">
        <div className="w-full">
          <div className="flex gap-[16px] items-start px-[16px] py-[4px] w-full">
            {/* Content */}
            <div className="flex flex-[1_0_0] flex-col items-start leading-[0] min-h-px min-w-px overflow-clip">
              <div className="flex flex-col label-small justify-center shrink-0 text-muted-foreground w-full">
                <p className="leading-[16px] whitespace-pre-wrap">Sjekklistespørsmål</p>
              </div>
              <div className="flex flex-col body-medium justify-center overflow-hidden shrink-0 text-foreground text-ellipsis w-full whitespace-nowrap">
                <p className="leading-[20px] overflow-hidden">{checklist}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </button>
  );
}