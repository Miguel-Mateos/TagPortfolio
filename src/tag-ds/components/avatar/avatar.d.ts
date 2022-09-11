import React from 'react';
import AvatarImg from './avatarImg';
export { default as AvatarImg } from './avatarImg';
export declare enum AvatarSize {
    small = "small",
    xsmall = "xsmall",
    big = "big"
}
export interface IAvatarProps {
    /**
     * Title of avatar image
     */
    title?: string;
    /**
     * Subtitle of avatar image
     */
    subtitle?: string;
    /**
     * Set the xsmall size
     */
    xsmall?: boolean;
    /**
     * Set the small size
     */
    small?: boolean;
    /**
     * Set the big size
     */
    big?: boolean;
    /**
     * Set if Avatar is disabled
     */
    disabled?: boolean;
    /**
     * Function that will ocurred when user click on avatar image
     */
    onClick?: () => void;
    /**
     * Additional or alternative styling
     */
    className?: string;
    /**
     * Image, icon or any HTML element that will rendered as avatar image
     */
    children: React.ReactElement<typeof AvatarImg>;
    [others: string]: any;
}
export declare const Avatar: React.FC<IAvatarProps>;
export default Avatar;
