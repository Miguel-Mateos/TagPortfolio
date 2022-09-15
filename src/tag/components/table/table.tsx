import React from 'react';
import { TBody } from './TBody';
import { TElement } from './TElement';
import { THead } from './THead';
import { TRow } from './TRow';
export interface ITableProps {
  disabled?: boolean
  className?: string
  [others: string]: any
}

export const TableWrapp: React.FC<ITableProps> = ({ disabled, children, className, ...rest }) => {

  return (
    <>
      <div className='table-rotate-device'>
        <span className="material-icons">screen_rotation</span>
        <span className='table-rotate-device-text'>Rotate your device</span>
      </div>
      <div className='table-wrapper'>
        <table data-disabled={disabled} className={className || ''}
          {...rest}
          data-testid={rest['data-testid'] ? rest['data-testid']+'-wrapper' : ''}>
          {children}
        </table>
      </div>
    </>
  );
};

export const  Table = {
  Wrapper: TableWrapp,
  Body: TBody,
  Head: THead,
  Element: TElement,
  Row: TRow 
};
