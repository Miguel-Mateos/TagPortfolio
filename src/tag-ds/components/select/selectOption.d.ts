import React from 'react';
export interface ISelectOptionProps {
    id?: string;
    value: any;
    label: string;
    multiple?: boolean;
    selected?: boolean;
    onRemoveItem?: (value: any) => void;
    onSelectItem?: (value: any) => void;
    [others: string]: any;
}
declare const SelectOption: React.FC<ISelectOptionProps>;
export default SelectOption;
