import React from 'react';
interface TooltipProps {
    id?: string;
    /**
     * Is a reference for parent element
     */
    parentRef: any;
    /**
     * Apply diferent styles for tooltip
     */
    className?: string;
    portal?: boolean;
    [others: string]: any;
}
export declare const Tooltip: React.FC<TooltipProps>;
export default Tooltip;
