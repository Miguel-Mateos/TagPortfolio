import React from 'react';
export interface IProgressBarProps {
    /**
     * Step where the user currently is
     */
    step: number;
    /**
     * Number of steps that are on the progress
     */
    steps: number;
    /**
     * Title of the Progress Bar
     */
    title?: string;
    /**
     * Helper for hinting or give more information
     */
    helper?: string;
    /**
     * Change from bar to circle
     */
    circular?: boolean;
    /**
     * Change from bar to small circle
     */
    small?: boolean;
    /**
     * On Progress bar: to show if wanted to see the steps
     */
    showSteps?: boolean;
    showPercentage?: boolean;
    className?: string;
    [others: string]: any;
}
export declare const ProgressBar: React.FC<IProgressBarProps>;
export default ProgressBar;
