import React from 'react';
import FigureCardFigure from './cardFigure';
import FigureCardHeader from './cardHeader';
import FigureCardBody from './cardBody';
import FigureCardFloatIcon from './cardFloatIcon';
export { default as FigureCardFigure } from './cardFigure';
export { default as FigureCardHeader } from './cardHeader';
export { default as FigureCardBody } from './cardBody';
export { default as FigureCardFloatIcon } from './cardFloatIcon';
export interface IFigureCardProps {
    /**
     * Identifies the accordion item
     */
    id?: string;
    /**
     * Add class to accordion
     */
    className?: string;
    selected?: boolean;
    accent?: boolean;
    onClick?: () => void;
    children: React.ReactElement<typeof FigureCardHeader | typeof FigureCardBody | typeof FigureCardFigure | typeof FigureCardFloatIcon>[] | React.ReactElement<typeof FigureCardHeader | typeof FigureCardBody | typeof FigureCardFigure | typeof FigureCardFloatIcon>;
    [others: string]: any;
}
export declare const FigureCard: React.FC<IFigureCardProps>;
export default FigureCard;
