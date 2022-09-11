import React from 'react';
import MasonryCardTop from './cardTop';
import MasonryCardImg from './cardImage';
import MasonryCardHeader from './cardHeader';
import MasonryCardBody from './cardBody';
export { default as MasonryCardTop } from './cardTop';
export { default as MasonryCardImg } from './cardImage';
export { default as MasonryCardHeader } from './cardHeader';
export { default as MasonryCardBody } from './cardBody';
export interface IMasonryCardProps {
    /**
     * Identifies the accordion item
     */
    id?: string;
    /**
     * Add class to accordion
     */
    className?: string;
    selected?: boolean;
    horizontal?: boolean;
    accent?: boolean;
    onClick?: () => void;
    children: React.ReactElement<typeof MasonryCardTop | typeof MasonryCardImg | typeof MasonryCardHeader | typeof MasonryCardBody>[] | React.ReactElement<typeof MasonryCardTop | typeof MasonryCardImg | typeof MasonryCardHeader | typeof MasonryCardBody>;
    [others: string]: any;
}
export declare const MasonryCard: React.FC<IMasonryCardProps>;
export default MasonryCard;
