import React from 'react';
export interface ILoaderProps {
    /**
     * Apply different styles for Loader
     */
    className?: string;
    /**
     * Tells Loader that is in error state
     */
    error?: boolean;
    /**
     * Tells Loader that is in error state
     */
    success?: boolean;
    /**
     * Gives the Title text if needed
     */
    title?: string;
    /**
     * Gives the subtitle text if needed
     */
    subtitle?: string;
    /**
     * Set in case to need a  small loader
     */
    spinner?: boolean;
    percentage?: {
        show: boolean;
        value?: number;
    };
    automatic?: boolean;
    [others: string]: any;
}
export declare const Loader: React.FC<ILoaderProps>;
export default Loader;
