import React from 'react';

export interface ITableElement {
  className?: string
  [others: string]: any
}

export const TElement: React.FC<ITableElement> = ({ children, className, ...rest }) => (
  <td className={className || ''}  {...rest}><div className='table-content'>{children}</div></td>
);