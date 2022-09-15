import React, {useEffect, useRef, useState} from 'react';
import {
  compareDateDays,
  getFirstDayOfMonth,
  getLastDayOfMonth,
  getDisplayedDaysPrevMonth,
  getDisplayedDaysNextMonth,
  getDaysFromTo,
  findDateInArray,
} from '../../helpers/calendarHelper';

import {DateTime, Info} from 'luxon';

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

export const Calendar: React.FC<ICalendarProps> = (props) => {
  const {
    defaultDate,
    disabledDates,
    selectedDates,
    activeDates,
    minDate = DateTime.now().valueOf(),
    maxDate,
    onSelectDate,
    ...rest
  } = props;
  const calendarRef = useRef<HTMLDivElement>(null);
  const [defaultDateState, setDefaultDateState] = useState<number>(defaultDate ? defaultDate : DateTime.now().valueOf());

  /**
   * Displayed month is range 1 to 12
   */
  const [displayedMonth, setDisplayedMonth] = useState<number>(
    defaultDate ? DateTime.fromMillis(defaultDate).month : DateTime.now().month
  );

  const updateDisplayedDate = (newDisplayedDate: number) => {
    const _date = DateTime.fromMillis(newDisplayedDate);
    setDefaultDateState(newDisplayedDate);
    setDisplayedMonth(_date.month);
  };

  const selectNextMonth = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    const _nextDate = DateTime.fromMillis(defaultDateState).plus({month: 1});
    updateDisplayedDate(_nextDate.valueOf());
  };

  const selectPrevMonth = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    const _prevDate = DateTime.fromMillis(defaultDateState).plus({months: -1});
    updateDisplayedDate(_prevDate.valueOf());
  };

  const renderNavigationBar = () => {
    const _actualDate = DateTime.fromMillis(defaultDateState);
    return (
      <div className="calendar-navigation">
        <button
          data-testid={rest ? `${rest['data-testid']}-btn_prev` : undefined}
          className="calendar-navigation-btn_prev"
          onClick={selectPrevMonth}
        >
          <span className="material-icons">chevron_left</span>
        </button>
        <span
          data-testid={rest ? `${rest['data-testid']}-nav-label` : undefined}
          className="calendar-navigation-label"
        >{`${_actualDate.monthLong} ${_actualDate.year}`}</span>
        <button
          data-testid={rest ? `${rest['data-testid']}-btn_next` : undefined}
          className="calendar-navigation-btn_next"
          onClick={selectNextMonth}
        >
          <span className="material-icons">chevron_right</span>
        </button>
      </div>
    );
  };

  const renderMonthView = () => (
    <div className="calendar-month">
      <div className="calendar-month-weekdays">
        {Info.weekdays('short', {locale: 'en-US'}).map((day: string, index: number) => {
          return (
            <div key={index}>
              <small>
                <abbr title={'' + day} aria-label={'' + day}>
                  {day}
                </abbr>
              </small>
            </div>
          );
        })}
      </div>
      <div className="calendar-month-days">{renderMonth()}</div>
    </div>
  );

  const renderMonth = () => {
    const dateTmstmp = defaultDateState;

    const date = DateTime.fromMillis(dateTmstmp).toJSDate();

    let renderedDays: any[] = [];

    //array of previous month days
    const previousMonthDisplayedDays = getDisplayedDaysPrevMonth(date);
    if (previousMonthDisplayedDays) {
      renderedDays = renderedDays.concat(previousMonthDisplayedDays);
    }

    const thisMonthFirstDay = getFirstDayOfMonth(date);
    const thisMonthLastDay = getLastDayOfMonth(date);

    const thisMonthDisplayedDays = getDaysFromTo(thisMonthFirstDay, thisMonthLastDay);
    renderedDays = renderedDays.concat(thisMonthDisplayedDays);

    const nextMonthDisplayedDays = getDisplayedDaysNextMonth(date);
    renderedDays = renderedDays.concat(nextMonthDisplayedDays);

    const uniqueDays = renderedDays.filter((v: any, i: any, a: any) => a.indexOf(v) === i);

    return uniqueDays.map((_date: Date) => {
      return renderDayOfMonth(_date);
    });
  };

  const renderDayOfMonth = (date: Date) => {
    const _date = date;
    const _dateTime = DateTime.fromJSDate(_date);
    const todayModifier = compareDateDays(DateTime.now().valueOf(), _dateTime.valueOf()) ? '_today' : '';

    const selectedModifier = selectedDates && findDateInArray(_dateTime.valueOf(), selectedDates) ? '_selected' : '';
    const activeClass = activeDates && findDateInArray(_dateTime.valueOf(), activeDates) ? 'active' : '';
    let disabled =
      (disabledDates && findDateInArray(_dateTime.valueOf(), disabledDates)) || date.getMonth() + 1 !== displayedMonth;

    if (minDate && _date) {
      disabled = _date.setHours(0, 0, 0, 0) < new Date(minDate).setHours(0, 0, 0, 0) || disabled;
      //NOTE: This disables past dates, not present or future, for that, use the disabledDates property.
    }

    if (maxDate && _date) {
      disabled = _date.setHours(0, 0, 0, 0) > new Date(maxDate).setHours(0, 0, 0, 0) || disabled;
      //NOTE: This disables future dates, not present or past, for that, use the disabledDates property.
    }

    return (
      <button
        data-testid={`day-${_dateTime.month}-${_dateTime.day}`}
        key={_dateTime.valueOf()}
        className={`calendar-day${todayModifier}${selectedModifier} ${activeClass}`}
        disabled={disabled}
        onClick={(e: React.MouseEvent<HTMLButtonElement>) => selectDate(_date.valueOf(), e)}
      >
        <span>
          <abbr>{_dateTime.day} </abbr>
        </span>
      </button>
    );
  };

  const selectDate = (date: number, e?: React.MouseEvent<HTMLButtonElement>) => {
    const _element: HTMLElement = document.activeElement as HTMLElement;

    if (_element) {
      _element.blur();
    }

    if (onSelectDate) {
      onSelectDate(date, e);
    }
  };

  const getIfContainsSelectedClassName = (className?: string): boolean => {
    if (className) {
      const _class: string = className;
      const _classes = _class.split(' ');
      if (
        _classes.filter(
          (_classFilter: string) =>
            _classFilter === 'calendar-day_selected' || _classFilter === 'calendar-day_today_selected'
        ).length
      )
        return true;
    }
    return false;
  };

  const setActiveClasses = () => {
    const activeButtons = calendarRef?.current?.getElementsByClassName('calendar-day active');
    const activeTodayButtons = calendarRef?.current?.getElementsByClassName('calendar-day_today active');
    if (activeTodayButtons && activeTodayButtons.length) setActiveTodayClass(activeTodayButtons, activeButtons);

    if (activeButtons && activeButtons.length) setActiveClassModifiers(activeButtons);
  };

  const setActiveTodayClass = (activeTodayButtons: any, activeButtons: any) => {
    if (activeTodayButtons && activeTodayButtons.length) {
      if (!activeButtons?.length && activeDates?.length === 1) {
        activeTodayButtons[0].className += '_all';
      } else if (activeButtons && activeButtons.length) {
        if (
          getIfContainsSelectedClassName(
            activeTodayButtons.length ? activeTodayButtons[0]?.previousElementSibling?.className : null
          )
        )
          activeTodayButtons[0].className += '_first';
        if (
          getIfContainsSelectedClassName(
            activeTodayButtons.length ? activeTodayButtons[0]?.nextElementSibling?.className : null
          )
        )
          activeTodayButtons[0].className += '_last';
      }
    }
  };

  const setActiveClassModifiers = (activeButtons: any) => {
    if (activeButtons && activeButtons.length) {
      if (activeButtons.length === 1 && activeDates?.length === 1) {
        activeButtons[0].className += '_all';
      } else {
        if (getIfContainsSelectedClassName(activeButtons.length ? activeButtons[0].previousElementSibling?.className : null))
          activeButtons[0].className += '_first';
        if (
          getIfContainsSelectedClassName(
            activeButtons.length ? activeButtons[activeButtons.length - 1].nextElementSibling?.className : null
          )
        )
          activeButtons[activeButtons.length - 1].className += '_last';
      }
    }
  };

  useEffect(() => {
    if (activeDates) {
      setActiveClasses();
    }
  }, [activeDates, displayedMonth]);

  return (
    <div ref={calendarRef} className="calendar">
      {renderNavigationBar()}
      {renderMonthView()}
    </div>
  );
};

export default Calendar;

