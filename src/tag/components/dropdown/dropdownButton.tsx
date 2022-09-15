import React from 'react';
export interface DropdownButtonProps {
  className?: string;
  onChangeToggleMenu?: () => void;
  toggleMenu?: () => void;
  disabled?: boolean;
  [others: string]: any;
}
const DropdownButton: React.FC<DropdownButtonProps> = (props) => {
  const {toggleMenu, disabled, children, className, ...rest} = props;

  const onToggleMenu = () => {
    if (toggleMenu) toggleMenu();
    if (props.onChangeToggleMenu) props.onChangeToggleMenu();
  };
  return (
    <div
      className={`dropdown-button${disabled ? '_disabled' : ''} ${className || ''}`}
      onClick={onToggleMenu}
      ref={rest && rest['ref'] ? rest['ref'] : undefined}
      {...rest}
    >
      {children}
    </div>
  );
};

export default DropdownButton;

