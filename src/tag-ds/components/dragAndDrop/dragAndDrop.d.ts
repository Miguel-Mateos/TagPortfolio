import React from 'react';
interface IDragAndDropProps {
    disabled?: boolean;
    handleDrop?: (e: any) => void;
    onClick?: () => void;
    className?: string;
    [others: string]: any;
}
export declare const DragAndDrop: React.FC<IDragAndDropProps>;
export default DragAndDrop;
