import React, {useEffect, useRef} from 'react';

export interface IOverflowMenuProps {
  /**
   * Title of the Overflow Menu
   */
  title: string;
  /**
   * Name of the action if needed
   */
  action?: string;
  /**
   * Displays close button and handles the event
   */
  onClose: () => void;
  /**
   * Handler for the action Button
   */
  onAction?: () => void;
  className?: string;
  [other: string]: any;
}

export const OverflowMenu: React.FC<IOverflowMenuProps> = ({
  children,
  title,
  action,
  onClose,
  onAction,
  className,
  ...rest
}) => {
  const overflowRef = useRef<HTMLDivElement>(null);
  const handleClickOutsideOverflow = (event: MouseEvent) => {
    if (event && event.target) {
      if (overflowRef && overflowRef.current && !overflowRef.current.contains(event.target as Node)) {
        onClose();
      }
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutsideOverflow);
    return () => {
      document.removeEventListener('click', handleClickOutsideOverflow);
    };
  });
  return (
    <div
      ref={overflowRef}
      className={`overflow-menu ${className || ''}`}
      data-testid={rest['data-testid'] ? rest['data-testid'] : undefined}
      {...rest}
    >
      <div className="overflow-menu-header">
        {title && <div className="overflow-menu-title">{title}</div>}
        {action && (
          <div
            className="overflow-menu-action"
            onClick={onAction}
            data-testid={rest['data-testid'] ? rest['data-testid'] + '-action-button' : undefined}
          >
            {action}
          </div>
        )}

        <button
          className="overflow-menu-close"
          onClick={onClose}
          data-testid={rest['data-testid'] ? rest['data-testid'] + '-close-button' : undefined}
        >
          <span className="material-icons">close</span>
        </button>
      </div>
      <div className="overflow-menu-body">{children}</div>
    </div>
  );
};
