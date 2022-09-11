import React from 'react';
import TeaserCardTop from './cardTop';
import TeaserCardImg from './cardImage';
import TeaserCardHeader from './cardHeader';
import TeaserCardBody from './cardBody';
import TeaserCardFooter from './cardFooter';
export { default as TeaserCardTop } from './cardTop';
export { default as TeaserCardImg } from './cardImage';
export { default as TeaserCardHeader } from './cardHeader';
export { default as TeaserCardBody } from './cardBody';
export { default as TeaserCardFooter } from './cardFooter';
export interface ITeaserCardProps {
    /**
     * Identifies the accordion item
     */
    id?: string;
    /**
     * Add class to accordion
     */
    className?: string;
    selected?: boolean;
    onClick?: () => void;
    children: React.ReactElement<typeof TeaserCardTop | typeof TeaserCardImg | typeof TeaserCardHeader | typeof TeaserCardBody | typeof TeaserCardFooter>[] | React.ReactElement<typeof TeaserCardTop | typeof TeaserCardImg | typeof TeaserCardHeader | typeof TeaserCardBody | typeof TeaserCardFooter>;
    [others: string]: any;
}
export declare const TeaserCard: React.FC<ITeaserCardProps>;
export default TeaserCard;
