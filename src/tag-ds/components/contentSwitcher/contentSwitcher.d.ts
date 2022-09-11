import React from 'react';
export { default as ContentSwitcherItem } from './contentSwitcherItem';
export interface IContentSwitcherProps {
    /**
     * Indicates the active tab when the component is rendered
     */
    defaultActiveItem?: string;
    divider?: boolean;
    small?: boolean;
    className?: string;
    [others: string]: any;
}
export declare const ContentSwitcher: React.FC<IContentSwitcherProps>;
export default ContentSwitcher;
