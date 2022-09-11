import React from 'react';
export declare enum DatePickerMode {
    SINGLE = "single",
    MULTIPLE = "multiple",
    RANGE = "range"
}
declare type DatePickerValue = number | string | number[];
export interface IDatePickerProps {
    /**
     * Define if datepicker is read only in mode simple or multiple
     */
    readOnly?: boolean;
    /**
     * Define if range start is read only in mode range
     */
    readOnlyStart?: boolean;
    /**
     * Define if range end is read only in mode range
     */
    readOnlyEnd?: boolean;
    /**
     * Define if datepicker is disabled in mode simple or multiple
     */
    disabled?: boolean;
    /**
     * Define if range start is disabled in mode range
     */
    disabledStart?: boolean;
    /**
     * Define if range end is disabled in mode range
     */
    disabledEnd?: boolean;
    /**
     * Define if datepicker is required in mode simple or multiple
     */
    required?: boolean;
    /**
     * Define if range start is required in mode range
     */
    requiredStart?: boolean;
    /**
     * Define if range end is required in mode range
     */
    requiredEnd?: boolean;
    /**
     * Define if datepicker have an error in mode simple or multiple
     */
    error?: boolean;
    /**
     * Define if range start have an error in mode range
     */
    errorStart?: boolean;
    /**
     * Define if range end have an error in mode range
     */
    errorEnd?: boolean;
    /**
     * Set label for datepicker on mode simple or multiple
     */
    label?: string;
    /**
     * Set label for start datepicker in mode range
     */
    labelStart?: string;
    /**
     * Set label for end datepicker in mode range
     */
    labelEnd?: string;
    /**
     * Set placeholder for datepicker
     */
    placeholder?: string;
    /**
     * Set placeholder for start datepicker in mode range
     */
    placeholderStart?: string;
    /**
     * Set placeholder for end datepicker in mode range
     */
    placeholderEnd?: string;
    /**
     * Set different classes for datepicker component
     */
    className?: string;
    /**
     * Set the name of value in a form
     */
    name: string;
    /**
     * Set the value of date picker
     */
    defaultValue?: DatePickerValue;
    /**
     * Change the date format to show the dates. This attribute also affects the way dates are entered in the different inputs.
     */
    dateFormat?: string;
    /**
     * Change mode of date picker.
     */
    mode?: DatePickerMode;
    /**
     * Return the value of select
     */
    onChange?: (value: any) => void;
    /**
     * Is the minimum date we will can select
     */
    minDate?: number;
    /**
     * Is the maximum date we will can select
     */
    maxDate?: number;
    /**
     * Is the disable dates in calendar
     */
    disabledDates?: number[];
    [others: string]: any;
}
export declare const DatePicker: React.FC<IDatePickerProps>;
export default DatePicker;
