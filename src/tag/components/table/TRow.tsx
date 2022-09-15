import React from 'react';

export interface ITRowProps {
  active?: boolean
  disabled?: boolean
  className?: string
  [others: string]: any
}
 
export const TRow: React.FC<ITRowProps> = ({children, active, disabled, className, ...rest }) => { 
  return(
    <tr data-disabled={disabled} className={`${className || ''}${active ? 'active' : ''}`} {...rest}>{children}</tr>
  );
};