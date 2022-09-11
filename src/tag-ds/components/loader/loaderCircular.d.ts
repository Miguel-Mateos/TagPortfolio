import React from 'react';
interface ILoaderCircularProps {
    percentage: number;
    HasText: any;
    error?: boolean;
    success?: boolean;
    className?: string;
    [others: string]: any;
}
export declare const LoaderCircular: React.FC<ILoaderCircularProps>;
export {};
