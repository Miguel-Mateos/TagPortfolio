import React from 'react';

export interface ISidebarDividerProps {
  /**
   * Identifies if sidebar is collapsed
   */
  collapsed?: boolean;
  /**
   * Add class to sidebar divider
   */
  className?: string;
  [others: string]: any;
}

export const SidebarDivider: React.FC<ISidebarDividerProps> = (props) => {
  const {children, className, collapsed, ...rest} = props;

  return collapsed ? (
    <hr className="sidebar-divider" {...rest} />
  ) : (
    <div
      data-testid={rest && rest['data-testid'] ? rest['data-testid'] : undefined}
      className={`sidebar-divider ${className || ''}`}
      {...rest}
    >
      {children}
    </div>
  );
};

export default SidebarDivider;
