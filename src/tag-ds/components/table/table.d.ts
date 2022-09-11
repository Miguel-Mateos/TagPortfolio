import React from 'react';
export interface ITableProps {
    disabled?: boolean;
    className?: string;
    [others: string]: any;
}
export declare const TableWrapp: React.FC<ITableProps>;
export declare const Table: {
    Wrapper: React.FC<ITableProps>;
    Body: React.FC<import("./TBody").ITbodyProps>;
    Head: React.FC<import("./THead").ITHeadProps>;
    Element: React.FC<import("./TElement").ITableElement>;
    Row: React.FC<import("./TRow").ITRowProps>;
};
