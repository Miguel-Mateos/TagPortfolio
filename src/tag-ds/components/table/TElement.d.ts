import React from 'react';
export interface ITableElement {
    className?: string;
    [others: string]: any;
}
export declare const TElement: React.FC<ITableElement>;
