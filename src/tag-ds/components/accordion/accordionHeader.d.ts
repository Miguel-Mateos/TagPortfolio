import React from 'react';
export interface IAccordionHeaderProps {
    /**
     * Identifies if content is showed or not
     */
    showContent?: boolean;
    /**
     * Changes accordion state for show content or not
     */
    onClick?: () => void;
    /**
     * Add class to accordion header
     */
    className?: string;
    [others: string]: any;
}
export declare const AccordionHeader: React.FC<IAccordionHeaderProps>;
export default AccordionHeader;
