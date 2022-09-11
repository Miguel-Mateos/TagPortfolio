import React from 'react';
import IconCardTop from './cardTop';
import IconCardIcon from './cardIcon';
import IconCardHeader from './cardHeader';
import IconCardBody from './cardBody';
import IconCardFooter from './cardFooter';
export { default as IconCardTop } from './cardTop';
export { default as IconCardIcon } from './cardIcon';
export { default as IconCardHeader } from './cardHeader';
export { default as IconCardBody } from './cardBody';
export { default as IconCardFooter } from './cardFooter';
export interface IIconCardProps {
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
    children: React.ReactElement<typeof IconCardTop | typeof IconCardIcon | typeof IconCardHeader | typeof IconCardBody | typeof IconCardFooter>[] | React.ReactElement<typeof IconCardTop | typeof IconCardIcon | typeof IconCardHeader | typeof IconCardBody | typeof IconCardFooter>;
    [others: string]: any;
}
export declare const IconCard: React.FC<IIconCardProps>;
export default IconCard;
