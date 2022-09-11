import React from 'react';
export { default as NotificationHeader } from './notificationHeader';
export { default as NotificationBody } from './notificationBody';
export { default as NotificationFooter } from './notificationFooter';
interface INotification {
    /**
     * Tell whether you want the close icon or not
     */
    icon?: any;
    /**
     * Additional styling if needed
     */
    className?: string;
    /**
     * Change status to Success
     */
    success?: boolean;
    /**
     * Change status to Error
     */
    error?: boolean;
    /**
     * Change status to Info
     */
    info?: boolean;
    /**
     * Change status to Warning
     */
    warning?: boolean;
    /**
     * Change status to Read
     */
    read?: boolean;
    /**
     * State for showing the notification
     */
    show: boolean;
    setShow?: (show: boolean) => void;
    /**
     * handler function for the close button
     */
    onClose?: () => void;
    /**
     * Handler to show or not as a portal
     */
    renderAsPortal?: boolean;
    [others: string]: any;
}
export declare const Notification: React.FC<INotification>;
export default Notification;
