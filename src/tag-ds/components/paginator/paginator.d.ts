import React from 'react';
export interface IPaginator {
    /**
     * Number of pages existing
     */
    pages: number;
    /**
     * First page to be shown
     */
    defaultPage?: number;
    /**
     * Selector for the collapsed Variant
     */
    collapsed?: boolean;
    className?: string;
    /**
     * For truncating the default Paginator
     */
    truncate?: 'left' | 'right' | 'all';
    /**
     * In case of having collapsed variant,
     * options for inserting the jump element on different positions
     */
    collapsedOptions?: {
        jump?: 'right' | 'left' | 'all';
    };
    disabled?: boolean;
    onChangePage?: (page: number) => void;
    [key: string]: any;
}
export declare const Paginator: React.FC<IPaginator>;
