import React from 'react';
export interface ITRowProps {
    active?: boolean;
    disabled?: boolean;
    className?: string;
    [others: string]: any;
}
export declare const TRow: React.FC<ITRowProps>;
