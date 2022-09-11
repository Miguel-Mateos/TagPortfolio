import React from 'react';
export interface ITabItemProps {
    /**
     * Identifies the tab item
     */
    id: string;
    /**
     * Tab name to show
     */
    title: string;
    /**
     * Adds the tab to the dropdown menu
     */
    collapsed?: boolean;
    /**
     * Identify if this tab is selected
     */
    activeTab?: string;
    /**
     * Identify if this tab is disabled
     */
    disabled?: boolean;
    [others: string]: any;
}
export declare const TabItem: React.FC<ITabItemProps>;
export default TabItem;
