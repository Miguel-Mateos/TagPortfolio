import React from 'react';
interface ICircularLoaderProps {
    step: number;
    steps: number;
    title?: string;
    helper?: string;
    className?: string;
    [others: string]: any;
}
export declare const BigLoader: React.FC<ICircularLoaderProps>;
export declare const LittleLoader: React.FC<ICircularLoaderProps>;
export {};
