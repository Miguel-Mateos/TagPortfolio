import React from 'react';
export interface ICardHeaderProps {
    /**
     * Identifies the accordion item
     */
    id?: string;
    /**
     * Add class to accordion
     */
    className?: string;
    [others: string]: any;
}
export declare const CardHeader: React.FC<ICardHeaderProps>;
export default CardHeader;
