import React from 'react';
export { default as DropdownButton } from './dropdownButton';
export { default as DropdownMenu } from './dropdownMenu';
interface DropdownProps {
    className?: string;
    onChangeToggleMenu?: () => void;
    itemsDivider?: boolean;
    forceRefresh?: number;
    [others: string]: any;
}
declare const Dropdown: React.FC<DropdownProps>;
export default Dropdown;
