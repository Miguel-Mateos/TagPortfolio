import React from 'react';
export interface ICalendarProps {
    /**
     * Show the month of the default date
     */
    defaultDate?: number;
    /**
     * Disable days in calendar
     */
    disabledDates?: number[];
    /**
     * Selected days in calendar
     */
    selectedDates?: number[];
    /**
     * In case the selected dates build up a range, intermediate days of those two dates
     */
    activeDates?: number[];
    /**
     * Minimum date to be able to select
     */
    minDate?: number;
    /**
     * Maximum date to be able to select
     */
    maxDate?: number;
    /**
     * On change function when click another day
     */
    onSelectDate?: (date: number, e?: React.MouseEvent) => void;
    [others: string]: any;
}
export declare const Calendar: React.FC<ICalendarProps>;
export default Calendar;
