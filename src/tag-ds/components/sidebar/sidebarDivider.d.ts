import React from 'react';
export interface ISidebarDividerProps {
    /**
     * Identifies if sidebar is collapsed
     */
    collapsed?: boolean;
    /**
     * Add class to sidebar divider
     */
    className?: string;
    [others: string]: any;
}
export declare const SidebarDivider: React.FC<ISidebarDividerProps>;
export default SidebarDivider;
