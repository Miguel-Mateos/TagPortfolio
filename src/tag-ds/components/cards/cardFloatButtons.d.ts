import React from 'react';
export interface ICardFloatButtonsProps {
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
export declare const CardFloatButtons: React.FC<ICardFloatButtonsProps>;
export default CardFloatButtons;
