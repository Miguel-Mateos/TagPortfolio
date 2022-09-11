import React from 'react';
interface ITree {
    /**
     * Alternative className for Tree
     */
    className?: string;
    [other: string]: any;
}
export declare const TreeWrap: React.FC<ITree>;
export declare const Tree: {
    Wrap: React.FC<ITree>;
    Element: React.FC<import("./treeViewElement").ITreeElement>;
};
export {};
