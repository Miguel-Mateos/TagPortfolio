import React from 'react';
export interface IAccordionContentProps {
    /**
     * Add class to accordion content
     */
    className?: string;
    [others: string]: any;
}
export declare const AccordionContent: React.FC<IAccordionContentProps>;
export default AccordionContent;
