import React from 'react';
export interface INumberInputProps {
    disabled?: boolean;
    className?: string;
    error?: boolean;
    required?: boolean;
    defaultValue?: number;
    onChange?: (num: number) => void;
    boundaries?: {
        max: number;
        min: number;
    };
    placeholder?: {
        icon: React.ReactElement;
        text: string;
    };
    label?: string;
    [others: string]: any;
}
export declare const NumberInput: React.FC<INumberInputProps>;
