import React, { useCallback, useState } from 'react';
import { TRow } from './TRow';

export interface ITbodyProps {
  className?: string
  [others: string]: any
}

export const TBody: React.FC<ITbodyProps> = ({ children, className, ...rest }) => { 
  const [active, setActive] = useState<number|null>(null);
  const isValid = useCallback(() => {
    return React.Children.toArray(children).every((_child: any) => _child.type === (TRow || 'tr'));
  }, [children]);

  const overpoweredChildren = React.Children.toArray(children).map((_child: any, idx) => {
    return React.cloneElement((_child), {
      'data-testid': rest['data-testid'] ? rest['data-testid']+'-body-row-'+idx : undefined,
      active: idx === active,
      onClick: () => idx === active ? setActive(null) : setActive(idx)
    });
  });

  if (isValid()) return (
    <tbody className={className || 'rest'} {...rest}>{overpoweredChildren}</tbody>
  );

  return null;
};