import React from 'react';
export { default as AccordionContent } from './accordionContent';
export { default as AccordionHeader } from './accordionHeader';
export interface IAccordionProps {
    /**
     * Identifies the accordion item
     */
    id?: string;
    /**
     * Add shadow box to accordion
     */
    filled?: boolean;
    /**
     * Indicates if the accordion show the content
     */
    defaultShow?: boolean;
    /**
     * Add class to accordion
     */
    className?: string;
    [others: string]: any;
}
export declare const Accordion: React.FC<IAccordionProps>;
export default Accordion;
