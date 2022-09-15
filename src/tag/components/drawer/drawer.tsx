import React, {useRef, useEffect} from 'react';
import ReactDOM from 'react-dom';

export {default as DrawerHeader} from './drawerHeader';
export {default as DrawerBody} from './drawerBody';
export {default as DrawerFooter} from './drawerFooter';

export interface IDrawerProps {
  /**
   * To display the drawer
   */
  open: boolean;
  /**
   * To display the arrow back button
   */
  hasBackButton?: boolean;
  /**
   * Reference for parent element
   */
  parentRef?: any;
  /**
   * Add class to drawer
   */
  className?: string;
  /**
   * Set drawer as a portal
   */
  renderAsPortal?: boolean;
  /**
   * handler function for the close button
   */
  onClose: () => void;
  /**
   * handler function for the back button
   */
  onBack?: () => void;
  [others: string]: any;
}

export const Drawer: React.FC<IDrawerProps> = (props) => {
  const {open, hasBackButton, parentRef, className, children, renderAsPortal, onClose, onBack, ...rest} = props;
  const drawerWrapperRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (event && event.target) {
      if (open && drawerWrapperRef && drawerWrapperRef.current && !drawerWrapperRef.current.contains(event.target as Node)) {
        if (onClose) onClose();
      }
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  });

  const calculateWidthAndLeft = () => {
    let _width = '',
      _left = '';
    if (parentRef && parentRef.current) {
      const parent = parentRef.current.getBoundingClientRect();
      _width = `calc(100% - ${parent.width}px)`;
      _left = `${parent.width}px`;
      return {width: _width, left: _left};
    }
    return undefined;
  };

  const iconBack = (
    <button
      data-testid={rest && rest['data-testid'] ? `${rest['data-testid']}-icon-back` : undefined}
      className="drawer-back-button"
      onClick={() => {
        if (typeof onBack === 'function') onBack();
      }}
    >
      <span className="material-icons">arrow_back</span>
    </button>
  );

  const iconClose = (
    <button
      data-testid={rest && rest['data-testid'] ? `${rest['data-testid']}-icon-close` : undefined}
      className="drawer-close-button"
      onClick={() => onClose()}
    >
      <span className="material-icons">close</span>
    </button>
  );

  const drawer = (
    <div className="tag-ds drawer-overlay" style={calculateWidthAndLeft()}>
      <div
        ref={drawerWrapperRef}
        data-testid={rest && rest['data-testid'] ? rest['data-testid'] : undefined}
        className={`drawer-wrapper ${className || ''}`}
      >
        <div className="drawer-buttons-container">{hasBackButton ? iconBack : iconClose}</div>
        {children}
      </div>
    </div>
  );
  const container = document.getElementById('root') || document.body;
  return open ? renderAsPortal ? ReactDOM.createPortal(drawer, container as Element) : drawer : <></>;
};

export default Drawer;

