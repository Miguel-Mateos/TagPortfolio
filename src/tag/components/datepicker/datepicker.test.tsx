import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom';
import DatePicker, {DatePickerMode, IDatePickerProps} from './datepicker';
import {DateTime} from 'luxon';
import {getDatesBetween2Dates} from '../../helpers/calendarHelper';

const datePickerExample = (props: IDatePickerProps) => <DatePicker className="tag-ds" {...props} />;

/**
 * SIMPLE
 */
test('Select option today with simple datepicker', () => {
  const {container, getByTestId} = render(
    datePickerExample({name: 'datepicker-simple', ['data-testid']: 'datepicker', mode: DatePickerMode.SINGLE})
  );

  const dropdownBtn = getByTestId('datepicker');
  const input = getByTestId('datepicker-input-simple');

  if (dropdownBtn) fireEvent.click(dropdownBtn);

  const day1Selected = DateTime.now();
  const day1Btn = getByTestId(`day-${day1Selected.month}-${day1Selected.day}`);
  if (day1Btn) fireEvent.click(day1Btn);
  if (input) expect(input.getAttribute('value')).toBe(day1Selected.toFormat('yyyy/MM/dd'));
  if (dropdownBtn) fireEvent.click(dropdownBtn);
  expect(container.getElementsByClassName('calendar-day_today_selected').length).toBe(1);
});

test('Select option and change with simple datepicker', () => {
  const {container, getByTestId} = render(
    datePickerExample({name: 'datepicker-simple', ['data-testid']: 'datepicker', mode: DatePickerMode.SINGLE})
  );

  const dropdownBtn = getByTestId('datepicker');
  const input = getByTestId('datepicker-input-simple');

  if (dropdownBtn) fireEvent.click(dropdownBtn);

  const nextMonthBtn = getByTestId('datepicker-calendar-btn_next');
  if (nextMonthBtn) fireEvent.click(nextMonthBtn);

  const nextMonth = DateTime.now().plus({months: 1});
  const day1Selected = DateTime.fromFormat(`${nextMonth.year}/${nextMonth.month}/01`, 'yyyy/M/dd');
  const day1Btn = getByTestId(`day-${day1Selected.month}-${day1Selected.day}`);
  if (day1Btn) fireEvent.click(day1Btn);
  if (input) expect(input.getAttribute('value')).toBe(day1Selected.toFormat('yyyy/MM/dd'));

  const dropdownBtn2 = getByTestId('datepicker');

  if (dropdownBtn2) fireEvent.click(dropdownBtn2);

  const nextMonthBtn2 = getByTestId('datepicker-calendar-btn_next');

  if (nextMonthBtn2) fireEvent.click(nextMonthBtn2);
  expect(container.getElementsByClassName('calendar-day_selected').length).toBe(1);

  const day2Selected = day1Selected.plus({days: 10});
  const day2Btn = getByTestId(`day-${day2Selected.month}-${day2Selected.day}`);
  if (day2Btn) fireEvent.click(day2Btn);

  const dropdownBtn3 = getByTestId('datepicker');

  if (dropdownBtn3) fireEvent.click(dropdownBtn3);

  const nextMonthBtn3 = getByTestId('datepicker-calendar-btn_next');

  if (nextMonthBtn3) fireEvent.click(nextMonthBtn3);

  if (input) expect(input.getAttribute('value')).toBe(day2Selected.toFormat('yyyy/MM/dd'));
  expect(container.getElementsByClassName('calendar-day_selected').length).toBe(1);
});

test('Write date today in input simple datepicker', () => {
  const {container, getByTestId} = render(
    datePickerExample({name: 'datepicker-simple', ['data-testid']: 'datepicker', mode: DatePickerMode.SINGLE})
  );

  const input = getByTestId('datepicker-input-simple');
  if (input) fireEvent.change(input, {target: {value: DateTime.now().toFormat('yyyy/MM/dd')}});
  const dropdownBtn = getByTestId('datepicker');

  if (dropdownBtn) fireEvent.click(dropdownBtn);
  expect(container.getElementsByClassName('calendar-day_today_selected').length).toBe(1);
});

test('Write date in input simple datepicker', () => {
  const {container, getByTestId} = render(
    datePickerExample({name: 'datepicker-simple', ['data-testid']: 'datepicker', mode: DatePickerMode.SINGLE})
  );

  const input = getByTestId('datepicker-input-simple');
  if (input) fireEvent.change(input, {target: {value: DateTime.now().plus({months: 1}).toFormat('yyyy/MM/dd')}});
  const dropdownBtn = getByTestId('datepicker');

  if (dropdownBtn) fireEvent.click(dropdownBtn);

  const nextMonthBtn = getByTestId('datepicker-calendar-btn_next');
  if (nextMonthBtn) fireEvent.click(nextMonthBtn);

  expect(container.getElementsByClassName('calendar-day_selected').length).toBe(1);
});

test('Write date with error in input simple datepicker', () => {
  const {container, getByTestId} = render(
    datePickerExample({name: 'datepicker-simple', ['data-testid']: 'datepicker', mode: DatePickerMode.SINGLE})
  );

  const input = getByTestId('datepicker-input-simple');
  if (input) fireEvent.change(input, {target: {value: DateTime.now().plus({months: 1}).toFormat('dd/MM/yyyy')}});
  const dropdownBtn = getByTestId('datepicker');

  if (dropdownBtn) fireEvent.click(dropdownBtn);

  const nextMonthBtn = getByTestId('datepicker-calendar-btn_next');
  if (nextMonthBtn) fireEvent.click(nextMonthBtn);

  expect(container.getElementsByClassName('calendar-day_selected').length).toBe(0);
  expect(container.getElementsByClassName('input-wrapper error').length).toBe(1);
});

/**
 * MULTIPLE
 */

test('Select 2 options multiple datepicker', () => {
  const {container, getByTestId} = render(
    datePickerExample({name: 'datepicker-simple', ['data-testid']: 'datepicker', mode: DatePickerMode.MULTIPLE})
  );

  const dropdownBtn = getByTestId('datepicker');
  const input = getByTestId('datepicker-input-multiple');

  if (dropdownBtn) fireEvent.click(dropdownBtn);

  const nextMonthBtn = getByTestId('datepicker-calendar-btn_next');
  if (nextMonthBtn) fireEvent.click(nextMonthBtn);

  const nextMonth = DateTime.now().plus({months: 1});
  const day1Selected = DateTime.fromFormat(`${nextMonth.year}/${nextMonth.month}/01`, 'yyyy/M/dd');

  const day1Btn = getByTestId(`day-${day1Selected.month}-${day1Selected.day}`);
  if (day1Btn) fireEvent.click(day1Btn);
  if (input) expect(input.getAttribute('value')).toBe(day1Selected.toFormat('yyyy/MM/dd'));
  expect(container.getElementsByClassName('calendar-day_selected').length).toBe(1);

  const day2Selected = day1Selected.plus({days: 10});
  const day2Btn = getByTestId(`day-${day2Selected.month}-${day2Selected.day}`);
  if (day2Btn) fireEvent.click(day2Btn);
  if (input)
    expect(input.getAttribute('value')).toBe(
      `${day1Selected.toFormat('yyyy/MM/dd')}, ${day2Selected.toFormat('yyyy/MM/dd')}`
    );
  expect(container.getElementsByClassName('calendar-day_selected').length).toBe(2);
});

test('Select 2 options and diselect multiple datepicker', () => {
  const {container, getByTestId} = render(
    datePickerExample({name: 'datepicker-simple', ['data-testid']: 'datepicker', mode: DatePickerMode.MULTIPLE})
  );

  const dropdownBtn = getByTestId('datepicker');
  const input = getByTestId('datepicker-input-multiple');

  if (dropdownBtn) fireEvent.click(dropdownBtn);

  const nextMonthBtn = getByTestId('datepicker-calendar-btn_next');
  if (nextMonthBtn) fireEvent.click(nextMonthBtn);

  const nextMonth = DateTime.now().plus({months: 1});
  const day1Selected = DateTime.fromFormat(`${nextMonth.year}/${nextMonth.month}/01`, 'yyyy/M/dd');

  const day1Btn = getByTestId(`day-${day1Selected.month}-${day1Selected.day}`);
  if (day1Btn) fireEvent.click(day1Btn);
  if (input) expect(input.getAttribute('value')).toBe(day1Selected.toFormat('yyyy/MM/dd'));
  expect(container.getElementsByClassName('calendar-day_selected').length).toBe(1);

  const day2Selected = day1Selected.plus({days: 10});
  const day2Btn = getByTestId(`day-${day2Selected.month}-${day2Selected.day}`);
  if (day2Btn) fireEvent.click(day2Btn);
  if (input)
    expect(input.getAttribute('value')).toBe(
      `${day1Selected.toFormat('yyyy/MM/dd')}, ${day2Selected.toFormat('yyyy/MM/dd')}`
    );
  expect(container.getElementsByClassName('calendar-day_selected').length).toBe(2);

  if (day1Btn) fireEvent.click(day1Btn);
  if (input) expect(input.getAttribute('value')).toBe(day2Selected.toFormat('yyyy/MM/dd'));
  expect(container.getElementsByClassName('calendar-day_selected').length).toBe(1);
});

test('Write date today in input multiple datepicker', () => {
  const {container, getByTestId} = render(
    datePickerExample({name: 'datepicker-multiple', ['data-testid']: 'datepicker', mode: DatePickerMode.MULTIPLE})
  );

  const input = getByTestId('datepicker-input-multiple');
  if (input) fireEvent.change(input, {target: {value: DateTime.now().toFormat('yyyy/MM/dd')}});
  const dropdownBtn = getByTestId('datepicker');

  if (dropdownBtn) fireEvent.click(dropdownBtn);
  expect(container.getElementsByClassName('calendar-day_today_selected').length).toBe(1);
});

test('Write two dates in input multiple datepicker', () => {
  const {container, getByTestId} = render(
    datePickerExample({name: 'datepicker-multiple', ['data-testid']: 'datepicker', mode: DatePickerMode.MULTIPLE})
  );

  const input = getByTestId('datepicker-input-multiple');
  if (input)
    fireEvent.change(input, {
      target: {
        value: `${DateTime.now().plus({months: 1}).toFormat('yyyy/MM/dd')}, ${DateTime.now()
          .plus({days: 1, months: 1})
          .toFormat('yyyy/MM/dd')}`,
      },
    });
  const dropdownBtn = getByTestId('datepicker');

  if (dropdownBtn) fireEvent.click(dropdownBtn);

  const nextMonthBtn = getByTestId('datepicker-calendar-btn_next');
  if (nextMonthBtn) fireEvent.click(nextMonthBtn);

  expect(container.getElementsByClassName('calendar-day_selected').length).toBe(2);
});

test('Write two dates with error in input multiple datepicker', () => {
  const {container, getByTestId} = render(
    datePickerExample({name: 'datepicker-multiple', ['data-testid']: 'datepicker', mode: DatePickerMode.MULTIPLE})
  );

  const input = getByTestId('datepicker-input-multiple');
  if (input)
    fireEvent.change(input, {
      target: {
        value: `${DateTime.now().plus({months: 1}).toFormat('yyyy/MM/dd')}, ${DateTime.now()
          .plus({days: 1, months: 1})
          .toFormat('dd/MM/yyyy')}`,
      },
    });
  const dropdownBtn = getByTestId('datepicker');

  if (dropdownBtn) fireEvent.click(dropdownBtn);

  const nextMonthBtn = getByTestId('datepicker-calendar-btn_next');
  if (nextMonthBtn) fireEvent.click(nextMonthBtn);

  expect(container.getElementsByClassName('calendar-day_selected').length).toBe(1);
  expect(container.getElementsByClassName('input-wrapper error').length).toBe(1);
});

/**
 * RANGE
 */

test('Select options in range datepicker', () => {
  const {container, getByTestId} = render(
    datePickerExample({name: 'datepicker-simple', ['data-testid']: 'datepicker', mode: DatePickerMode.RANGE})
  );

  const dropdownBtn = getByTestId('datepicker');

  if (dropdownBtn) fireEvent.click(dropdownBtn);

  const nextMonthBtn = getByTestId('datepicker-calendar-btn_next');
  if (nextMonthBtn) fireEvent.click(nextMonthBtn);

  const nextMonth = DateTime.now().plus({months: 1});
  const day1Selected = DateTime.fromFormat(`${nextMonth.year}/${nextMonth.month}/01`, 'yyyy/M/dd');

  const day1Btn = getByTestId(`day-${day1Selected.month}-${day1Selected.day}`);
  if (day1Btn) fireEvent.click(day1Btn);
  expect(container.getElementsByClassName('calendar-day_selected').length).toBe(1);

  const day2Selected = day1Selected.plus({days: 10});
  const day2Btn = getByTestId(`day-${day2Selected.month}-${day2Selected.day}`);
  if (day2Btn) fireEvent.click(day2Btn);
  expect(container.getElementsByClassName('calendar-day_selected').length).toBe(2);
  const activeDates = getDatesBetween2Dates(day1Selected.valueOf(), day2Selected.valueOf());
  if (activeDates) expect(container.getElementsByClassName('calendar-day active').length).toBe(activeDates.length - 2);
  expect(container.getElementsByClassName('calendar-day active_first').length).toBe(1);
  expect(container.getElementsByClassName('calendar-day active_last').length).toBe(1);
});

test('Select options first end dates in range datepicker', () => {
  const {container, getByTestId} = render(
    datePickerExample({name: 'datepicker-simple', ['data-testid']: 'datepicker', mode: DatePickerMode.RANGE})
  );

  const dropdownBtn = getByTestId('datepicker');

  if (dropdownBtn) fireEvent.click(dropdownBtn);

  const nextMonthBtn = getByTestId('datepicker-calendar-btn_next');
  if (nextMonthBtn) fireEvent.click(nextMonthBtn);

  const nextMonth = DateTime.now().plus({months: 1});
  const day1Selected = DateTime.fromFormat(`${nextMonth.year}/${nextMonth.month}/15`, 'yyyy/M/dd');

  const day1Btn = getByTestId(`day-${day1Selected.month}-${day1Selected.day}`);
  if (day1Btn) fireEvent.click(day1Btn);
  expect(container.getElementsByClassName('calendar-day_selected').length).toBe(1);

  const day2Selected = day1Selected.plus({days: -10});
  const day2Btn = getByTestId(`day-${day2Selected.month}-${day2Selected.day}`);
  if (day2Btn) fireEvent.click(day2Btn);
  expect(container.getElementsByClassName('calendar-day_selected').length).toBe(2);
  const activeDates = getDatesBetween2Dates(day2Selected.valueOf(), day1Selected.valueOf());
  if (activeDates) expect(container.getElementsByClassName('calendar-day active').length).toBe(activeDates.length - 2);
  expect(container.getElementsByClassName('calendar-day active_first').length).toBe(1);
  expect(container.getElementsByClassName('calendar-day active_last').length).toBe(1);

  const inputStart = getByTestId('datepicker-input-range-start');
  if (inputStart) expect(inputStart.getAttribute('value')).toBe(day2Selected.toFormat('yyyy/MM/dd'));
  const inputEnd = getByTestId('datepicker-input-range-end');
  if (inputEnd) expect(inputEnd.getAttribute('value')).toBe(day1Selected.toFormat('yyyy/MM/dd'));
});

test('Write date start and date end in datepicker range', () => {
  const {container, getByTestId} = render(
    datePickerExample({name: 'datepicker-multiple', ['data-testid']: 'datepicker', mode: DatePickerMode.RANGE})
  );

  const nextMonth = DateTime.now().plus({months: 1});
  const day1Selected = DateTime.fromFormat(`${nextMonth.year}/${nextMonth.month}/01`, 'yyyy/M/dd');
  const day2Selected = day1Selected.plus({days: 10});

  const inputStart = getByTestId('datepicker-input-range-start');
  if (inputStart) fireEvent.change(inputStart, {target: {value: day1Selected.toFormat('yyyy/MM/dd')}});
  const inputEnd = getByTestId('datepicker-input-range-end');
  if (inputEnd) fireEvent.change(inputEnd, {target: {value: day2Selected.toFormat('yyyy/MM/dd')}});

  if (inputStart) fireEvent.click(inputStart);

  const nextMonthBtn = getByTestId('datepicker-calendar-btn_next');
  if (nextMonthBtn) fireEvent.click(nextMonthBtn);

  expect(container.getElementsByClassName('calendar-day_selected').length).toBe(2);
  expect(container.getElementsByClassName('calendar-day active').length).toBe(
    getDatesBetween2Dates(day1Selected.valueOf(), day2Selected.valueOf()).length - 2
  );
  expect(container.getElementsByClassName('calendar-day active_first').length).toBe(1);
  expect(container.getElementsByClassName('calendar-day active_last').length).toBe(1);
});

test('Write date start and date end with error in datepicker range', () => {
  const {container, getByTestId} = render(
    datePickerExample({name: 'datepicker-multiple', ['data-testid']: 'datepicker', mode: DatePickerMode.RANGE})
  );

  const nextMonth = DateTime.now().plus({months: 1});
  const day1Selected = DateTime.fromFormat(`${nextMonth.year}/${nextMonth.month}/01`, 'yyyy/M/dd');
  const day2Selected = day1Selected.plus({days: -10});

  const inputStart = getByTestId('datepicker-input-range-start');
  if (inputStart) fireEvent.change(inputStart, {target: {value: day1Selected.toFormat('yyyy/MM/dd')}});
  const inputEnd = getByTestId('datepicker-input-range-end');
  if (inputEnd) fireEvent.change(inputEnd, {target: {value: day2Selected.toFormat('yyyy/MM/dd')}});

  expect(container.getElementsByClassName('input-wrapper error').length).toBe(1);
});

test('Write date start with error and date end in datepicker range', () => {
  const {container, getByTestId} = render(
    datePickerExample({name: 'datepicker-multiple', ['data-testid']: 'datepicker', mode: DatePickerMode.RANGE})
  );

  const nextMonth = DateTime.now().plus({months: 1});
  const day1Selected = DateTime.fromFormat(`${nextMonth.year}/${nextMonth.month}/01`, 'yyyy/M/dd');
  const day2Selected = day1Selected.plus({days: 10});

  const inputStart = getByTestId('datepicker-input-range-start');
  if (inputStart) fireEvent.change(inputStart, {target: {value: day1Selected.toFormat('dd/MM/yyyy')}});
  const inputEnd = getByTestId('datepicker-input-range-end');
  if (inputEnd) fireEvent.change(inputEnd, {target: {value: day2Selected.toFormat('yyyy/MM/dd')}});

  expect(container.getElementsByClassName('input-wrapper error').length).toBe(1);
});

test('Write date start and date end and change start date in datepicker range', () => {
  const {container, getByTestId} = render(
    datePickerExample({name: 'datepicker-multiple', ['data-testid']: 'datepicker', mode: DatePickerMode.RANGE})
  );

  const nextMonth = DateTime.now().plus({months: 1});
  const day1Selected = DateTime.fromFormat(`${nextMonth.year}/${nextMonth.month}/01`, 'yyyy/M/dd');
  const day2Selected = day1Selected.plus({days: 10});

  const inputStart = getByTestId('datepicker-input-range-start');
  if (inputStart) fireEvent.change(inputStart, {target: {value: day1Selected.toFormat('yyyy/MM/dd')}});

  const inputEnd = getByTestId('datepicker-input-range-end');
  if (inputEnd) fireEvent.change(inputEnd, {target: {value: day2Selected.toFormat('yyyy/MM/dd')}});

  if (inputStart) fireEvent.change(inputStart, {target: {value: day1Selected.plus({days: 1}).toFormat('yyyy/MM/dd')}});

  if (inputEnd) fireEvent.click(inputEnd);

  const nextMonthBtn = getByTestId('datepicker-calendar-btn_next');
  if (nextMonthBtn) fireEvent.click(nextMonthBtn);

  expect(container.getElementsByClassName('calendar-day_selected').length).toBe(2);
  expect(container.getElementsByClassName('calendar-day active').length).toBe(
    getDatesBetween2Dates(day1Selected.plus({days: 1}).valueOf(), day2Selected.valueOf()).length - 2
  );
  expect(container.getElementsByClassName('calendar-day active_first').length).toBe(1);
  expect(container.getElementsByClassName('calendar-day active_last').length).toBe(1);
});

test('Write date start and date end and change start date greater than end date in datepicker range', () => {
  const {container, getByTestId} = render(
    datePickerExample({name: 'datepicker-multiple', ['data-testid']: 'datepicker', mode: DatePickerMode.RANGE})
  );

  const nextMonth = DateTime.now().plus({months: 1});
  const day1Selected = DateTime.fromFormat(`${nextMonth.year}/${nextMonth.month}/01`, 'yyyy/M/dd');
  const day2Selected = day1Selected.plus({days: 10});

  const inputStart = getByTestId('datepicker-input-range-start');
  if (inputStart) fireEvent.change(inputStart, {target: {value: day1Selected.toFormat('yyyy/MM/dd')}});

  const inputEnd = getByTestId('datepicker-input-range-end');
  if (inputEnd) fireEvent.change(inputEnd, {target: {value: day2Selected.toFormat('yyyy/MM/dd')}});

  if (inputStart) fireEvent.change(inputStart, {target: {value: day1Selected.plus({days: 20}).toFormat('yyyy/MM/dd')}});

  if (inputEnd) fireEvent.click(inputEnd);

  const nextMonthBtn = getByTestId('datepicker-calendar-btn_next');
  if (nextMonthBtn) fireEvent.click(nextMonthBtn);

  expect(container.getElementsByClassName('calendar-day_selected').length).toBe(1);
  expect(container.getElementsByClassName('calendar-day active').length).toBe(0);
  expect(container.getElementsByClassName('calendar-day active_first').length).toBe(0);
  expect(container.getElementsByClassName('calendar-day active_last').length).toBe(0);
});

test('Write date start and date end and change end date lower than end date in datepicker range', () => {
  const {getByTestId} = render(
    datePickerExample({name: 'datepicker-multiple', ['data-testid']: 'datepicker', mode: DatePickerMode.RANGE})
  );

  const nextMonth = DateTime.now().plus({months: 1, days: 2});
  const day1Selected = DateTime.fromFormat(`${nextMonth.year}/${nextMonth.month}/01`, 'yyyy/M/dd');
  const day2Selected = day1Selected.plus({days: 10});

  const inputStart = getByTestId('datepicker-input-range-start');
  if (inputStart) fireEvent.change(inputStart, {target: {value: day1Selected.toFormat('yyyy/MM/dd')}});

  const inputEnd = getByTestId('datepicker-input-range-end');
  if (inputEnd) fireEvent.change(inputEnd, {target: {value: day2Selected.toFormat('yyyy/MM/dd')}});

  if (inputEnd) fireEvent.change(inputEnd, {target: {value: day2Selected.plus({days: -10}).toFormat('yyyy/MM/dd')}});

  if (inputEnd) fireEvent.click(inputEnd);

  const nextMonthBtn = getByTestId('datepicker-calendar-btn_next');
  if (nextMonthBtn) fireEvent.click(nextMonthBtn);

  expect(inputStart.getAttribute('value')).toBe(DateTime.now().toFormat('yyyy/MM/dd'));
});

test('Write date start without end date in datepicker range', () => {
  const {container, getByTestId} = render(
    datePickerExample({name: 'datepicker-multiple', ['data-testid']: 'datepicker', mode: DatePickerMode.RANGE})
  );

  const nextMonth = DateTime.now().plus({months: 1});
  const day1Selected = DateTime.fromFormat(`${nextMonth.year}/${nextMonth.month}/01`, 'yyyy/M/dd');

  const inputStart = getByTestId('datepicker-input-range-start');
  if (inputStart) fireEvent.change(inputStart, {target: {value: day1Selected.toFormat('yyyy/MM/dd')}});

  if (inputStart) fireEvent.click(inputStart);

  const nextMonthBtn = getByTestId('datepicker-calendar-btn_next');
  if (nextMonthBtn) fireEvent.click(nextMonthBtn);

  expect(container.getElementsByClassName('calendar-day_selected').length).toBe(1);
  expect(container.getElementsByClassName('calendar-day active').length).toBe(0);
  expect(container.getElementsByClassName('calendar-day active_first').length).toBe(0);
  expect(container.getElementsByClassName('calendar-day active_last').length).toBe(0);
});

test('Write date start without end date and change in datepicker range', () => {
  const {container, getByTestId} = render(
    datePickerExample({name: 'datepicker-multiple', ['data-testid']: 'datepicker', mode: DatePickerMode.RANGE})
  );

  const nextMonth = DateTime.now().plus({months: 1});
  const day1Selected = DateTime.fromFormat(`${nextMonth.year}/${nextMonth.month}/01`, 'yyyy/M/dd');

  const inputStart = getByTestId('datepicker-input-range-start');
  if (inputStart) fireEvent.change(inputStart, {target: {value: day1Selected.toFormat('yyyy/MM/dd')}});

  if (inputStart) fireEvent.change(inputStart, {target: {value: day1Selected.plus({days: 1}).toFormat('yyyy/MM/dd')}});

  if (inputStart) fireEvent.click(inputStart);

  const nextMonthBtn = getByTestId('datepicker-calendar-btn_next');
  if (nextMonthBtn) fireEvent.click(nextMonthBtn);

  expect(container.getElementsByClassName('calendar-day_selected').length).toBe(1);
  expect(container.getElementsByClassName('calendar-day active').length).toBe(0);
  expect(container.getElementsByClassName('calendar-day active_first').length).toBe(0);
  expect(container.getElementsByClassName('calendar-day active_last').length).toBe(0);
});

test('Write date end without start date in datepicker range', () => {
  const {getByTestId} = render(
    datePickerExample({name: 'datepicker-multiple', ['data-testid']: 'datepicker', mode: DatePickerMode.RANGE})
  );

  const nextMonth = DateTime.now().plus({months: 1});
  const day1Selected = DateTime.fromFormat(`${nextMonth.year}/${nextMonth.month}/01`, 'yyyy/M/dd');
  const day2Selected = day1Selected.plus({days: 10});

  const inputStart = getByTestId('datepicker-input-range-start');

  const inputEnd = getByTestId('datepicker-input-range-end');
  if (inputEnd) fireEvent.change(inputEnd, {target: {value: day2Selected.toFormat('yyyy/MM/dd')}});

  if (inputEnd) fireEvent.click(inputEnd);

  expect(inputStart.getAttribute('value')).toBe(DateTime.now().toFormat('yyyy/MM/dd'));
});

