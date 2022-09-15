import React from 'react';

export interface ISidebarLogoProps {
  /**
   * Add class to sidebar logo
   */
  className?: string;
  [others: string]: any;
}

export const SidebarLogo: React.FC<ISidebarLogoProps> = (props) => {
  const {children, className, ...rest} = props;

  return (
    <div
      data-testid={rest && rest['data-testid'] ? rest['data-testid'] : undefined}
      className={`sidebar-logo ${className || ''}`}
      {...rest}
    >
      {children}
    </div>
  );
};

export default SidebarLogo;

