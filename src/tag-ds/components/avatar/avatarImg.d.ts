import React from 'react';
interface IAvatarImg {
    /**
     * Text that represented as badge in avatar image
     */
    badge?: number | string;
    size?: string;
    /**
     * Additional or alternative styling
     */
    className?: string;
    [others: string]: any;
}
export declare const AvatarImg: React.FC<IAvatarImg>;
export default AvatarImg;
