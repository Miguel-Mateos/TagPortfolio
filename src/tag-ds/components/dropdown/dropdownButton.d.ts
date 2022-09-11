import React from 'react';
export interface DropdownButtonProps {
    className?: string;
    onChangeToggleMenu?: () => void;
    toggleMenu?: () => void;
    disabled?: boolean;
    [others: string]: any;
}
declare const DropdownButton: React.FC<DropdownButtonProps>;
export default DropdownButton;
