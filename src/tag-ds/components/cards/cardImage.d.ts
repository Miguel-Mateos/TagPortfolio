import React from 'react';
export interface ICardImgProps {
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
export declare const CardImg: React.FC<ICardImgProps>;
export default CardImg;
