import React, {useState} from 'react';
import {DateTime} from 'luxon';
import {getDatesBetween2Dates} from '../../helpers/calendarHelper';
import Calendar from '../calendar/calendar';
import Dropdown, {DropdownButton, DropdownMenu} from '../dropdown/dropdown';

export enum DatePickerMode {
  SINGLE = 'single',
  MULTIPLE = 'multiple',
  RANGE = 'range',
}

type DatePickerValue = number | string | number[];

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

export const DatePicker: React.FC<IDatePickerProps> = (props) => {
  const {
    name,
    dateFormat = 'yyyy/MM/dd',
    label,
    labelStart,
    labelEnd,

    placeholder = dateFormat,
    placeholderStart = dateFormat,
    placeholderEnd = dateFormat,

    required,
    requiredEnd,
    requiredStart,

    readOnly,
    readOnlyEnd,
    readOnlyStart,

    disabled,
    disabledEnd,
    disabledStart,

    error,
    errorEnd,
    errorStart,

    defaultValue,

    className,
    mode = DatePickerMode.SINGLE,
    minDate,
    maxDate,
    disabledDates,

    onChange,

    ...rest
  } = props;

  const [value, setValue] = useState<number | string | number[]>(
    defaultValue ? defaultValue : mode === DatePickerMode.MULTIPLE ? '' : mode === DatePickerMode.RANGE ? [] : 0
  );
  const [showCalendar, setShowCalendar] = useState<boolean>(false);
  const [forceRefresh, setForceRefresh] = useState<number>(0);
  const [errorState, setErrorState] = useState<boolean>(error ? error : false);

  const [rangeStart, setRangeStart] = useState('');
  const [errorRangeStart, setErrorRangeStart] = useState(errorStart ? errorStart : false);
  const [rangeEnd, setRangeEnd] = useState('');
  const [errorRangeEnd, setErrorRangeEnd] = useState(errorEnd ? errorEnd : false);

  const onClickInputRange = (e: React.MouseEvent<HTMLDivElement>) => {
    if (showCalendar) e.stopPropagation();
  };

  const renderCalendar = () => {
    let selectedDates: number[] = [];
    let activeDates: number[] | undefined;
    if (value) {
      if (mode === DatePickerMode.MULTIPLE) {
        let _selectedDatesArrStr = (value as string).replaceAll(' ', '').split(',');
        _selectedDatesArrStr = _selectedDatesArrStr.filter((_selectDateStr: string) => _selectDateStr.trim().length);
        selectedDates = _selectedDatesArrStr.map((_dateStr: string) => DateTime.fromFormat(_dateStr, dateFormat).valueOf());
      } else if (mode === DatePickerMode.RANGE) {
        if (typeof value === 'object' && value.length) {
          const _valueMin = value[0];
          const _valueMax = value[1];
          selectedDates = value;
          activeDates = getDatesBetween2Dates(_valueMin, _valueMax);
        }
      } else {
        const _value = value as number;
        selectedDates = [_value];
      }
    }

    return (
      <Calendar
        data-testid={rest ? `${rest['data-testid']}-calendar` : undefined}
        className="datepicker-calendar-wrapper"
        minDate={minDate}
        maxDate={maxDate}
        selectedDates={selectedDates}
        activeDates={activeDates}
        disabledDates={disabledDates}
        onSelectDate={(date: number, e?: React.MouseEvent) => selectCalendarDate(date, false, undefined, e)}
      />
    );
  };

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const _value: string = e?.currentTarget?.value;
    let _date: number | undefined = undefined;

    switch (mode) {
      case DatePickerMode.SINGLE:
        {
          _date = DateTime.fromFormat(_value, dateFormat).valueOf();
          if (!_date) {
            setErrorState(true);
          } else {
            setErrorState(false);
            selectCalendarDate(_date);
          }
          setValue(_value);
        }
        break;
      case DatePickerMode.MULTIPLE:
        {
          const _multipleDates = _value.trim().replaceAll(' ', '');
          const _multipleDatesArr = _multipleDates.split(',');

          if (_multipleDatesArr && _multipleDatesArr.length) {
            const _dateStr = _multipleDatesArr[_multipleDatesArr.length - 1];
            _date = DateTime.fromFormat(_dateStr, dateFormat).valueOf();
          }
          if (!_date) {
            setErrorState(true);
          } else {
            setErrorState(false);
            selectCalendarDate(_date);
          }
          setValue(_value);
        }
        break;
      case DatePickerMode.RANGE:
        {
          const _name = e?.target?.name?.split('.')[1];

          _date = DateTime.fromFormat(_value, dateFormat).valueOf();
          if (_name === 'start') {
            if (!_date) {
              setErrorRangeStart(true);
            } else {
              setErrorRangeStart(false);
              selectCalendarDate(_date, true, 'start');
            }
            setRangeStart(_value);
          } else if (_name === 'end') {
            if (!_date || (_date && (value as number[]).length && (value as number[])[0] > _date)) {
              setErrorRangeEnd(true);
            } else {
              setErrorRangeEnd(false);
              selectCalendarDate(_date, true, 'end');
            }
            setRangeEnd(_value);
          }
        }
        break;
    }
  };

  const selectCalendarDate = (date: number, fromInputs?: boolean, range?: 'start' | 'end', e?: React.MouseEvent) => {
    let _value: number | string | number[] = value;

    switch (mode) {
      case DatePickerMode.SINGLE:
        _value = date;
        break;
      case DatePickerMode.MULTIPLE:
        e?.stopPropagation();
        _value = _value as string;
        if (_value) {
          let _valuesArr = _value.replace(' ', '').split(',');
          _valuesArr = _valuesArr.filter((val: string) => val.trim().length);

          if (_valuesArr.find((element: any) => element === DateTime.fromMillis(date).toFormat(dateFormat))) {
            _valuesArr = _valuesArr.filter((element: any) => element !== DateTime.fromMillis(date).toFormat(dateFormat));
          } else {
            _valuesArr.push(DateTime.fromMillis(date).toFormat(dateFormat));
          }
          _valuesArr.forEach((valueStr: string, index: number) => {
            if (index === 0) _value = valueStr;
            else if (index <= _valuesArr.length - 1) _value += `, ${valueStr}`;
          });
        } else {
          _value = DateTime.fromMillis(date).toFormat(dateFormat);
        }
        break;
      case DatePickerMode.RANGE:
        e?.stopPropagation();
        _value = _value as number[];
        if (fromInputs) {
          if (range === 'start') {
            if (_value && _value.length) {
              if (_value.length === 2) {
                const _valueEndDate = _value[1];
                const _newDate = date;
                if (_valueEndDate > _newDate) {
                  _value = [_newDate, _valueEndDate];
                } else {
                  _value = [_newDate];
                }
              } else {
                _value = [date];
              }
            } else {
              _value = [date];
            }
          } else if (range === 'end') {
            if (_value && _value.length) {
              const _valueStartDate = _value[0];
              const _newDate = date;
              if (_valueStartDate < _newDate) {
                _value = [_valueStartDate, _newDate];
              } else {
                _value = [DateTime.now().valueOf(), _newDate];
              }
            } else {
              _value = [DateTime.now().valueOf(), date];
            }
          }
        } else {
          if (_value.length && _value.length !== 2) {
            if (_value.length) {
              const _valueDate = _value[0];
              const _newDate = date;
              if (_valueDate < _newDate) {
                _value.push(_newDate);
              } else {
                _value = [_newDate, _valueDate];
              }
            }
          } else {
            _value = [date];
          }
        }

        if (_value && _value.length) {
          if (_value.length > 1) {
            setRangeStart(DateTime.fromMillis(_value[0]).toFormat(dateFormat));
            setRangeEnd(DateTime.fromMillis(_value[1]).toFormat(dateFormat));
          } else {
            setRangeStart(DateTime.fromMillis(_value[0]).toFormat(dateFormat));
            setRangeEnd('');
          }
        }
        break;
    }

    const _forceRefresh = forceRefresh + 1;
    setForceRefresh(_forceRefresh);
    setErrorState(false);
    setValue(_value);
    if (onChange) onChange(_value);
  };

  const renderInputsContainer = () => {
    if (mode === DatePickerMode.MULTIPLE) {
      return (
        <div className={`input-wrapper${disabled ? '_disabled' : ''} ${errorState ? 'error' : ''}`}>
          {label && (
            <label className="caption">
              {label}
              {required && <small className="required">*</small>}
            </label>
          )}
          <div className="input-container">
            <input
              data-testid={rest ? `${rest['data-testid']}-input-multiple` : undefined}
              name={name}
              className="input datepicker"
              placeholder={placeholder}
              type="text"
              value={value as string}
              required={required}
              disabled={disabled}
              readOnly={readOnly}
              onChange={onChangeInput}
            />
            <span className="material-icons input-icon-box">calendar_today</span>
          </div>
        </div>
      );
    } else if (mode === DatePickerMode.RANGE) {
      let rangeStartVal = '';
      if (rangeStart) {
        rangeStartVal = rangeStart;
      } else if (value && typeof value === 'object' && value[0]) {
        rangeStartVal = DateTime.fromMillis(value[0]).toFormat(dateFormat);
      }
      let rangeEndVal = '';
      if (rangeEnd) {
        rangeEndVal = rangeEnd;
      } else if (value && typeof value === 'object' && value[1]) {
        rangeEndVal = DateTime.fromMillis(value[1]).toFormat(dateFormat);
      }
      return (
        <>
          <div
            className={`datepicker_left input-wrapper${disabledStart ? '_disabled' : ''} ${errorRangeStart ? 'error' : ''}`}
          >
            {labelStart && (
              <label className="caption">
                {labelStart}
                {requiredStart && <small className="required">*</small>}
              </label>
            )}
            <div className="input-container" onClick={onClickInputRange}>
              <input
                data-testid={rest ? `${rest['data-testid']}-input-range-start` : undefined}
                name={`${name}.start`}
                className="input datepicker"
                placeholder={placeholderStart}
                type="text"
                value={rangeStartVal}
                required={requiredStart}
                disabled={disabledStart}
                readOnly={readOnlyStart}
                onChange={onChangeInput}
              />
              <span className="material-icons input-icon-box">calendar_today</span>
            </div>
          </div>
          <div className={`datepicker_right input-wrapper${disabledEnd ? '_disabled' : ''} ${errorRangeEnd ? 'error' : ''}`}>
            {labelEnd && (
              <label className="caption">
                {labelEnd}
                {requiredEnd && <small className="required">*</small>}
              </label>
            )}
            <div className="input-container" onClick={onClickInputRange}>
              <input
                data-testid={rest ? `${rest['data-testid']}-input-range-end` : undefined}
                name={`${name}.end`}
                className="input datepicker"
                placeholder={placeholderEnd}
                type="text"
                value={rangeEndVal}
                required={requiredEnd}
                disabled={disabledEnd}
                readOnly={readOnlyEnd}
                onChange={onChangeInput}
              />
              <span className="material-icons input-icon-box">calendar_today</span>
            </div>
          </div>
        </>
      );
    }

    let _value: number | undefined = undefined;
    if (value && typeof value === 'number') _value = value;

    return (
      <div className={`input-wrapper${disabled ? '_disabled' : ''} ${errorState ? 'error' : ''}`}>
        {label && (
          <label className="caption">
            {label}
            {required && <small className="required">*</small>}
          </label>
        )}
        <div className="input-container">
          <input
            data-testid={rest ? `${rest['data-testid']}-input-simple` : undefined}
            className="input datepicker"
            placeholder={placeholder}
            type="text"
            value={_value ? DateTime.fromMillis(_value).toFormat(dateFormat) : value ? (value as string) : ''}
            required={required}
            disabled={disabled}
            readOnly={readOnly}
            onChange={onChangeInput}
          />
          <span className="material-icons input-icon-box">calendar_today</span>
        </div>
      </div>
    );
  };

  return (
    <Dropdown
      className={`datepicker-wrapper ${className || ''}`}
      onChangeToggleMenu={() => setShowCalendar(!showCalendar)}
      forceRefresh={forceRefresh}
    >
      <DropdownButton
        className={`datepicker-container${mode === DatePickerMode.RANGE ? '_range' : ''}`}
        data-testid={rest ? rest['data-testid'] : undefined}
        disabled={disabled || (mode === DatePickerMode.RANGE && disabledStart && disabledEnd)}
      >
        {renderInputsContainer()}
      </DropdownButton>
      <DropdownMenu>{renderCalendar()}</DropdownMenu>
    </Dropdown>
  );
};

export default DatePicker;
