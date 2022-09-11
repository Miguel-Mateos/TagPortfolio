import React from 'react';
export interface IOverflowMenuProps {
    /**
     * Title of the Overflow Menu
     */
    title: string;
    /**
     * Name of the action if needed
     */
    action?: string;
    /**
     * Displays close button and handles the event
     */
    onClose: () => void;
    /**
     * Handler for the action Button
     */
    onAction?: () => void;
    className?: string;
    [other: string]: any;
}
export declare const OverflowMenu: React.FC<IOverflowMenuProps>;
