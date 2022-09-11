import React from 'react';
export interface IQuote {
    quote: string;
    /**
     * For setting the Avatar info
     */
    avatar?: {
        img?: string;
        title?: string;
        subtitle?: string;
    };
    /**
     * Additional styling if needed
     */
    className?: string;
    [others: string]: any;
}
export declare const Quote: React.FC<IQuote>;
export default Quote;
