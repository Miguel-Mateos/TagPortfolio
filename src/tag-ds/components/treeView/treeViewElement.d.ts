import React from 'react';
export interface ITreeElement {
    /**
     * Name of the Tree Element
     */
    name: string;
    /**
     * For disabling the Tree Element
     */
    disabled?: boolean;
    /**
     * click event on developers needs
     */
    onClick?: (name: string) => void;
    /**
     * Alternative className on Tree.Element
     */
    className?: string;
    [others: string]: any;
}
export declare const TreeViewElement: React.FC<ITreeElement>;
