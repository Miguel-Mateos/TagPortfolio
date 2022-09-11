import React from 'react';
export interface ICardFloatIconProps {
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
export declare const CardFloatIcon: React.FC<ICardFloatIconProps>;
export default CardFloatIcon;
