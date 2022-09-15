import React from 'react';
import ReactDOM from 'react-dom';

export {default as ModalHeader} from './modalHeader';
export {default as ModalBody} from './modalBody';
export {default as ModalFooter} from './modalFooter';

export interface IModalProps {
  className?: string;
  onClose?: () => void;
  open?: boolean;
  renderAsPortal?: boolean;
  [others: string]: any;
}

export const Modal: React.FC<IModalProps> = (props) => {
  const {className, onClose, children, open, renderAsPortal, ...rest} = props;
  const iconClose = (
    <button
      data-testid={rest && rest['data-testid'] ? `${rest['data-testid']}-icon-close` : undefined}
      className="modal-close-button"
      onClick={onClose}
    >
      <span className="material-icons">close</span>
    </button>
  );
  const modal = (
    <div data-testid={rest && rest['data-testid'] ? rest['data-testid'] : undefined} className={`modal ${className || ''}`}>
      {typeof onClose === 'function' && iconClose}
      {children}
    </div>
  );
  const content = <div className="tag-ds modal-wrapper">{modal}</div>;

  const container = document.getElementById('root') || document.body;
  return renderAsPortal ? (open ? ReactDOM.createPortal(content, container as Element) : null) : modal;
};

export default Modal;

