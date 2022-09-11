import React from 'react';
export interface IFileUploaderProps {
    /**
     * Define full width in the parent for component
     */
    fullWidth?: boolean;
    /**
     * Define the size for button
     */
    small?: boolean;
    /**
     * Define if button is secondary
     */
    secondary?: boolean;
    /**
     * Define if is possible to upload one or more files
     */
    multiple?: boolean;
    /**
     * Define if is drag and drop variable
     */
    dragAndDrop?: boolean;
    /**
     * Define if is disabled
     */
    disabled?: boolean;
    /**
     * Set id for input
     */
    id?: string;
    /**
     * Set label for component
     */
    label?: string;
    /**
     * Set different classes for file uploader component
     */
    className?: string;
    /**
     * Set accept formats for file or files
     */
    formats: string;
    /**
     * Set max size of file in MB, only for show in the info message
     */
    max: number;
    /**
     * Define the value of file or files in component
     */
    value?: IFile | IFile[];
    /**
     * Function to call when files is changed
     */
    onChange: (files?: File[]) => void;
    [others: string]: any;
}
export interface IFile {
    file: File;
    loading?: boolean;
    error?: string;
}
export declare const FileUploader: React.FC<IFileUploaderProps>;
export default FileUploader;
