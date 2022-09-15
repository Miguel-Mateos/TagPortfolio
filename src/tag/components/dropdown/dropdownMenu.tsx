import React from 'react';

export interface DropdownMenuProps {
  className?: string;
  [others: string]: any;
}

const DropdownMenu: React.FC<DropdownMenuProps> = (props) => {
  const {children} = props;

  return <>{children}</>;
};

export default DropdownMenu;

