import React from 'react';
export interface ToggleProps {
    /**
     * Adds id for input in the toggle component
     */
    id?: string;
    /**
     * Adds any class to the parent container
     */
    className?: string;
    /**
     * Toggle value
     */
    checked?: boolean;
    /**
     * Toggle is disabled
     */
    disabled?: boolean;
    /**
     * Toggle is read only, same of disable
     */
    readOnly?: boolean;
    /**
     * Helper text when toggle is not checked
     */
    helperTextOff?: string;
    /**
     * Helper text when toggle is checked
     */
    helperTextOn?: string;
    /**
     * Label for toggle
     */
    label?: string;
    /**
     * Whe toggle value change call this function
     */
    onChange?: (checked: boolean) => void;
    /**
     * Small toggle size
     */
    small?: boolean;
    [others: string]: any;
}
export declare const Toggle: React.FC<ToggleProps>;
export default Toggle;
