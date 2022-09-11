import React from 'react';
export { default as TabItem } from './tabItem';
export interface ITabsProps {
    /**
     * Change horizontal for vertical allignment
     */
    vertical?: boolean;
    /**
     * Indicates the active tab when the component is rendered
     */
    defaultActiveTab?: string;
    className?: string;
    [others: string]: any;
}
export declare const Tabs: React.FC<ITabsProps>;
export default Tabs;
