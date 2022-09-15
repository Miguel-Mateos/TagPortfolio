import React, {useEffect, useRef, useState} from 'react';
import {DropdownButton, DropdownMenu} from './dropdown';

export {default as DropdownButton} from './dropdownButton';
export {default as DropdownMenu} from './dropdownMenu';

interface DropdownProps {
  className?: string;
  onChangeToggleMenu?: () => void;
  itemsDivider?: boolean;
  forceRefresh?: number;
  [others: string]: any;
}

const Dropdown: React.FC<DropdownProps> = (props) => {
  const {children, className, onChangeToggleMenu, itemsDivider, forceRefresh, ...rest} = props;
  const [showMenu, setShowMenu] = useState(true);
  const [refresh, setRefresh] = useState(forceRefresh ? forceRefresh : 0);
  const [dropdownMenuHeight, setDropdownMenuHeight] = useState(0);

  useEffect(() => {
    const positionMenu = dropdownMenuRef.current?.getBoundingClientRect();
    if (positionMenu) setDropdownMenuHeight(positionMenu?.height);
    setShowMenu(false);
  }, []);

  useEffect(() => {
    if (forceRefresh && refresh !== forceRefresh) setRefresh(forceRefresh);
  }, [forceRefresh, refresh]);

  const dropdownRef = useRef<HTMLDivElement>(null);
  const dropdownButtonRef = useRef<HTMLDivElement>(null);
  const dropdownMenuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (event && event.target) {
      if (
        showMenu &&
        ((dropdownRef && dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) ||
          (dropdownMenuRef && dropdownMenuRef.current && dropdownMenuRef.current.contains(event.target as Node)))
      ) {
        setShowMenu(false);
        if (onChangeToggleMenu) onChangeToggleMenu();
      }
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  });

  const calculateDropdownPosition = () => {
    let dropdownPosition = '';
    if (dropdownRef && dropdownRef.current) {
      const position = dropdownRef.current.getBoundingClientRect();
      const {clientHeight} = document.body;
      if (position.top + dropdownMenuHeight > clientHeight) {
        dropdownPosition = 'bottom';
      } else {
        dropdownPosition = 'top';
      }
    }
    return dropdownPosition;
  };

  const renderMenu = () => {
    const _menu = children ? (children as any).find((a: any) => a && a.type === DropdownMenu) : undefined;

    if (showMenu)
      return (
        <div
          ref={dropdownMenuRef}
          className={`dropdown-menu ${itemsDivider ? '_divider' : ''} ${
            _menu.props?.className || ''
          } ${calculateDropdownPosition()}`}
        >
          {_menu}
        </div>
      );
    return <></>;
  };

  const renderDropdownButton = () => {
    let _dropdownButton = children ? (children as any).find((a: any) => a && a.type === DropdownButton) : undefined;

    if (_dropdownButton) {
      _dropdownButton = React.cloneElement(_dropdownButton, {
        onChangeToggleMenu: props?.onChangeToggleMenu,
        toggleMenu: toggleMenu,
        ref: dropdownButtonRef,
      });
      return _dropdownButton;
    }
    return <></>;
  };

  return (
    <div ref={dropdownRef} className={`dropdown ${className || ''}`} {...rest}>
      {renderDropdownButton()}
      {renderMenu()}
    </div>
  );
};

export default Dropdown;

