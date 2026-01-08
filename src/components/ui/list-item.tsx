import { ReactNode } from 'react';

interface ListItemProps {
  leadingIcon?: ReactNode;
  title: string;
  supportingText?: string;
  onClick?: () => void;
  className?: string;
}

/**
 * Material 3 List Item Component
 * - 2-line layout with optional leading icon
 * - Hover state for clickable items
 */
export function ListItem({
  leadingIcon,
  title,
  supportingText,
  onClick,
  className = ''
}: ListItemProps) {
  return (
    <button
      onClick={onClick}
      className={`
        flex items-center gap-4 w-full px-6 py-3 min-h-[56px]
        hover:bg-muted transition-colors
        ${className}
      `}
    >
      {/* Leading Icon */}
      {leadingIcon && (
        <div className="shrink-0 w-6 h-6 flex items-center justify-center">
          {leadingIcon}
        </div>
      )}

      {/* Content */}
      <div className="flex-1 flex flex-col items-start text-left overflow-hidden">
        {/* Title - First two lines */}
        <p className="body-large text-foreground line-clamp-2 w-full">
          {title}
        </p>

        {/* Supporting Text */}
        {supportingText && (
          <p className="label-medium text-muted-foreground mt-0.5">
            {supportingText}
          </p>
        )}
      </div>
    </button>
  );
}
