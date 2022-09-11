import React from 'react';
declare type TStatus = 'success' | 'pending' | 'disabled' | 'error' | 'default' | 'active';
export interface IStep {
    name: string;
    detail?: string;
    status?: TStatus;
}
interface IStepperProps {
    /**
     * List of steps with name, detail and status, being the status one of:
     * success, pending, disabled, error, default, active
     */
    steps: IStep[];
    /**
     * direction of the stepper
     */
    vertical?: boolean;
    numbered?: boolean;
    onClickStep?: (stepIndex: number) => void;
    className?: string;
    [others: string]: any;
}
export declare const Stepper: React.FC<IStepperProps>;
export default Stepper;
