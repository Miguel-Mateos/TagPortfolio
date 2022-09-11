import React from 'react';
interface ILoaderProps {
    percentage: number;
    HasText: any;
    error?: boolean;
    success?: boolean;
    className?: string;
    [others: string]: any;
}
export declare const LoaderOval: React.FC<ILoaderProps>;
export {};
