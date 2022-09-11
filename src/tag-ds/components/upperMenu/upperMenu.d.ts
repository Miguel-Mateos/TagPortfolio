import React from 'react';
declare type NotificationType = 'error' | 'info' | 'read' | 'warning';
export interface INotification {
    header: string;
    body: string;
    footer?: React.ReactElement;
    type: NotificationType;
    show?: boolean;
    created?: Date;
    icon?: any;
}
interface IUpperMenu {
    /**
     * For setting the Avatar info
     */
    avatar: {
        img: string | any;
        title: string;
        subtitle?: string;
    };
    /**
     * Title of the Upper Menu
     */
    title?: string;
    /**
     * Notification List containing header, body, footer, type, show and created and actions in the overflow menu of notifications
     */
    notifications?: {
        setShowItems: () => void;
        onAction?: () => void;
        action?: string;
        emptyMessage?: any;
        title: string;
        items: INotification[];
        showItems: boolean;
    };
    /**
     * Options of the Upper Menu
     */
    options?: {
        name: string;
        onClick: () => void;
    }[];
    className?: string;
    [others: string]: any;
}
export declare const UpperMenu: React.FC<IUpperMenu>;
export default UpperMenu;
