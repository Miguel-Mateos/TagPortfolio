import React from 'react';
export interface ICardTopProps {
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
export declare const CardTop: React.FC<ICardTopProps>;
export default CardTop;
