import React from 'react';
export interface ISplashScreen {
    /**
    * Set a fixed colour as a background for splash screen component
    */
    backgroundColor?: string;
    /**
    * Set an image as a background for splash screen component
    */
    backgroundImageURI?: string;
    /**
    * Set an video/animation as a background for splash screen component
    */
    backgroundVideoURI?: string;
    /**
    * Set an image of a person or company
    */
    logoURI: string;
    /**
    * Add class for splash screen component
    */
    className?: string;
    [others: string]: any;
}
export declare const SplashScreen: React.FC<ISplashScreen>;
