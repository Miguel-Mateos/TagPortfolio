import React from 'react';
export { default as CarouselItem } from './carouselItem';
interface ICarousel {
    /**
     * If you want to add an custom defaultId instead to render the first element
     */
    defaultId?: string;
    /**
     * Set to true in order to render arrows and dots outside the box
     */
    outlined?: boolean;
    /**
     * Additional or alternative styling
     */
    className?: string;
    [others: string]: any;
}
export declare const Carousel: React.FC<ICarousel>;
export default Carousel;
