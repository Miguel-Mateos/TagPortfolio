import React from 'react';
export interface IBreadcrumbItemProps {
    /**
     * Identifies the Breadcrumb item
     */
    id: string;
    /**
     * Breadcrumb title to display
     */
    title: string;
    /**
     * Breadcrumb link
     */
    href: string;
    [others: string]: any;
}
export declare const BreadcrumbItem: React.FC<IBreadcrumbItemProps>;
export default BreadcrumbItem;
