import React from 'react';
export { default as DrawerHeader } from './drawerHeader';
export { default as DrawerBody } from './drawerBody';
export { default as DrawerFooter } from './drawerFooter';
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
export declare const Drawer: React.FC<IDrawerProps>;
export default Drawer;
