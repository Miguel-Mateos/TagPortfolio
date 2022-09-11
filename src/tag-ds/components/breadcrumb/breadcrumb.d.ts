import React from 'react';
export { default as BreadcrumbItem } from './breadcrumbItem';
export interface IBreadcrumbProps {
    defaultActiveBreadcrumb?: string;
    className?: string;
    [others: string]: any;
}
export declare const Breadcrumb: React.FC<IBreadcrumbProps>;
export default Breadcrumb;
