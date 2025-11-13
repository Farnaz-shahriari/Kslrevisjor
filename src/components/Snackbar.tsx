import svgPaths from "../imports/svg-l1bmea34rk";

interface SnackbarProps {
  message: string;
  actionText?: string;
  onAction?: () => void;
  onClose?: () => void;
  isVisible: boolean;
}

export function Snackbar({ message, actionText = "Angre", onAction, onClose, isVisible }: SnackbarProps) {
  if (!isVisible) return null;

  return (
    <div className="bg-[#2f312b] rounded-[4px] shadow-[0px_4px_8px_3px_rgba(0,0,0,0.15),0px_1px_3px_0px_rgba(0,0,0,0.3)]">
      <div className="flex flex-row items-center">
        <div className="box-border flex gap-1 items-center pl-4 pr-0 py-0">
          <p className="flex-1 body-medium text-[#f1f2e6] py-4 min-w-0">
            {message}
          </p>
          <div className="flex items-center shrink-0">
            {/* Action Button */}
            {onAction && (
              <div className="flex items-center justify-center">
                <button
                  onClick={onAction}
                  className="box-border flex gap-2 items-center justify-center px-3 py-2.5 hover:bg-white/10 rounded-full transition-colors"
                >
                  <span className="label-medium text-[#afd27c] whitespace-nowrap">
                    {actionText}
                  </span>
                </button>
              </div>
            )}
            
            {/* Close Button */}
            {onClose && (
              <div className="flex items-center justify-center w-12 h-12">
                <button
                  onClick={onClose}
                  className="flex items-center justify-center w-10 h-10 hover:bg-white/10 rounded-full transition-colors"
                >
                  <div className="w-6 h-6">
                    <svg className="block size-full" fill="none" viewBox="0 0 14 14">
                      <path d={svgPaths.p2aa77200} fill="#F1F1E7" />
                    </svg>
                  </div>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
