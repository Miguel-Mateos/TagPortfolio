import React from 'react';
export interface ICardFooterProps {
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
export declare const CardFooter: React.FC<ICardFooterProps>;
export default CardFooter;
