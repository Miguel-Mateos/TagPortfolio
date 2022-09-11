import React from 'react';
interface TTProps {
    min: string | number;
    max: string | number;
}
interface DefProps {
    min: number;
    max: number;
}
interface ISlider {
    /**
     * Maximum bound for the slider
     */
    max?: number;
    /**
     * Minimum bound for the slider
     */
    min?: number;
    /**
     * Default value set before initialization, for single slider --> number, for double --> { min: number, max: number }
     */
    defaultValue?: DefProps | number;
    /**
     * Boolean set for telling our component to have 2 sliders on the range
     */
    double?: boolean;
    /**
     * Setter for disabled state of the slider
     */
    disabled?: boolean;
    /**
     * Object containing the left and right labels
     */
    label?: {
        left: string | number;
        right: string | number;
    };
    /**
     * Boolean for telling the component that we want it to have a tooltip
     */
    tooltip?: boolean;
    /**
     * When set, this function will tell the parent in what state the slider/sliders are
     */
    onChange?: (...values: any) => void;
    /**
     * Having a tooltip, We'll can tell the component whether it has a single or double slider
     * `single --> tooltip: 'Text'`
     * `double --> { min: 'Text', max: 'Text' }`
     */
    tooltipText?: TTProps | string | number;
    className?: string;
    [others: string]: any;
}
export declare const Slider: React.FC<ISlider>;
export default Slider;
