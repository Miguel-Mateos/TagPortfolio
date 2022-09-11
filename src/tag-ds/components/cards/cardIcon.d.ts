import React from 'react';
export interface ICardIconProps {
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
export declare const CardIcon: React.FC<ICardIconProps>;
export default CardIcon;
