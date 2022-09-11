import React from 'react';
import LocationMapCardTop from './cardTop';
import LocationMapCardMap from './cardImage';
import LocationMapCardHeader from './cardHeader';
import LocationMapCardBody from './cardBody';
export { default as LocationMapCardTop } from './cardTop';
export { default as LocationMapCardMap } from './cardImage';
export { default as LocationMapCardHeader } from './cardHeader';
export { default as LocationMapCardBody } from './cardBody';
export interface ILocationMapCardProps {
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
    children: React.ReactElement<typeof LocationMapCardTop | typeof LocationMapCardMap | typeof LocationMapCardHeader | typeof LocationMapCardBody>[] | React.ReactElement<typeof LocationMapCardTop | typeof LocationMapCardMap | typeof LocationMapCardHeader | typeof LocationMapCardBody>;
    [others: string]: any;
}
export declare const LocationMapCard: React.FC<ILocationMapCardProps>;
export default LocationMapCard;
