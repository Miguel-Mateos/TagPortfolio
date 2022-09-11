import React from 'react';
export interface IContentSwitcherItemProps {
    id: string;
    /**
     * Identify if this tab is selected
     */
    active?: string;
    onClickItem?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    disabled?: boolean;
    icons?: any;
    title: string;
    badge?: number;
    [others: string]: any;
}
export declare const ContentSwitcherItem: React.FC<IContentSwitcherItemProps>;
export default ContentSwitcherItem;
