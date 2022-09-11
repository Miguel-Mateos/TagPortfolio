import React from 'react';
export { default as ModalHeader } from './modalHeader';
export { default as ModalBody } from './modalBody';
export { default as ModalFooter } from './modalFooter';
export interface IModalProps {
    className?: string;
    onClose?: () => void;
    open?: boolean;
    renderAsPortal?: boolean;
    [others: string]: any;
}
export declare const Modal: React.FC<IModalProps>;
export default Modal;
