import { useState } from 'react';

// Import the switch component structure from the library
// The Switch component expects to be positioned within a container
interface ProductionSwitchProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
}

export function ProductionSwitch({ checked, onChange }: ProductionSwitchProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      onClick={() => onChange(!checked)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative w-[52px] h-[32px] rounded-full transition-colors cursor-pointer flex items-center"
      style={{
        backgroundColor: checked ? 'var(--primary)' : '#e3e3d9'
      }}
    >
      {/* Border for unselected state */}
      {!checked && (
        <div
          aria-hidden="true"
          className="absolute border-2 border-[#74796a] border-solid inset-0 pointer-events-none rounded-full"
        />
      )}

      {/* Handle - positioned INSIDE the track */}
      <div
        className="absolute transition-all duration-200 ease-in-out"
        style={{
          left: checked ? '20px' : '4px',
          top: '4px'
        }}
      >
        {/* State layer - only visible on hover */}
        <div
          className={`rounded-full transition-all ${
            isHovered ? 'w-10 h-10 -m-2' : 'w-6 h-6 m-0'
          }`}
          style={{
            backgroundColor: isHovered ? (checked ? 'rgba(77,102,43,0.08)' : 'rgba(26,28,22,0.08)') : 'transparent'
          }}
        >
          {/* Handle shape */}
          <div
            className="w-6 h-6 rounded-full flex items-center justify-center transition-all"
            style={{
              backgroundColor: checked ? '#ffffff' : (isHovered ? '#44483b' : '#74796a'),
              margin: isHovered ? '8px' : '0'
            }}
          >
            {/* Icon */}
            {checked ? (
              <svg
                width="11"
                height="9"
                viewBox="0 0 11 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.8 8.01667L0 4.21667L0.95 3.26667L3.8 6.11667L9.91667 0L10.8667 0.95L3.8 8.01667Z"
                  fill="#284000"
                />
              </svg>
            ) : (
              <svg
                width="10"
                height="10"
                viewBox="0 0 10 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.933333 9.33333L0 8.4L3.73333 4.66667L0 0.933333L0.933333 0L4.66667 3.73333L8.4 0L9.33333 0.933333L5.6 4.66667L9.33333 8.4L8.4 9.33333L4.66667 5.6L0.933333 9.33333Z"
                  fill="#E3E3D9"
                />
              </svg>
            )}
          </div>
        </div>
      </div>
    </button>
  );
}
