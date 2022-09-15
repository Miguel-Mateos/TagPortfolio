import React, {useState, useEffect, useRef} from 'react';
import Option from './selectOption';
import Dropdown, {DropdownButton, DropdownMenu} from '../dropdown/dropdown';
export {default as Option} from './selectOption';

export interface ISelectProps {
  /**
   * Define if select is large
   */
  large?: boolean;
  /**
   * Define if is select filter
   */
  filter?: boolean;
  /**
   * Define if is select multiple
   */
  multiple?: boolean;

  /**
   * Define if select is disabled
   */
  disabled?: boolean;
  /**
   * Define if select is required
   */
  required?: boolean;
  /**
   * Define if select have an error
   */
  error?: boolean;

  /**
   * Set label for select
   */
  label?: string;
  /**
   * Set helper text for select
   */
  helperText?: string;
  /**
   * Set the icon in helper text. It's a name of material icon, example: "info"
   */
  helperIcon?: string;
  /**
   * Set placeholder for select
   */
  placeholder: string;
  /**
   * Set different classes for select component
   */
  className?: string;

  /**
   * Set the name of value in a form
   */
  name: string;
  /**
   * Set the value of select
   */
  value?: any;
  /**
   * Return the value of select
   */
  onChange?: (value: any) => void;

  [others: string]: any;
}

export const Select: React.FC<ISelectProps> = (props) => {
  const {
    large,
    required,
    filter,
    multiple,
    disabled,
    error,

    label,
    placeholder,
    helperText,
    helperIcon,

    name,
    className,
    value,

    onChange,
    ...rest
  } = props;

  const inputRef: any = useRef<HTMLInputElement>();
  const getValueFromProps = () => {
    if (Array.isArray(value) && multiple) {
      return value as any;
    } else if (typeof value === 'string' || typeof value === 'number') {
      if (multiple) return [value];
      return value;
    }
    return multiple ? [] : '';
  };
  const [items, setItems] = useState<any[]>([]);
  const [valueState, setValueState] = React.useState(getValueFromProps());
  const [filterValue, setFilterValue] = useState<string | undefined>(undefined);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    if (getValueFromProps() !== valueState) setValueState(getValueFromProps());
  }, [value]);

  const onSelectItem = (selectValue: string) => {
    if (!multiple) {
      setValueState(selectValue);
      if (onChange) onChange(selectValue);
    } else {
      let values = valueState;
      if (!values.some((existingValue: string) => existingValue === selectValue)) {
        values = [...values, selectValue];
      }
      setValueState(values);

      if (onChange) onChange(values);
    }
  };

  const onRemoveItem = (deleteValue: string) => {
    let newValues: any;
    if (!multiple) {
      newValues = '';
      if (onChange) onChange('');
    } else {
      const currentStateValue = valueState;
      if (typeof currentStateValue === 'object') {
        newValues =
          currentStateValue &&
          currentStateValue.length &&
          currentStateValue.filter((existingValue: string) => existingValue !== deleteValue);
      }
    }
    setValueState(newValues);
    if (onChange) onChange(newValues);
  };

  const onRemoveOptions = () => {
    if (multiple) {
      setValueState([]);
      if (onChange) onChange([]);
    }
  };

  const renderItems = (_filterValue?: string) => {
    const newItems: any[] = [];
    let index = 0;
    if (props.children) {
      (props.children as any).forEach((item: any) => {
        if (item.type === Option) {
          let isSelected = false;
          if (valueState && valueState.length) {
            if (!multiple) {
              isSelected = valueState === item.props.value ? true : false;
            } else {
              isSelected =
                typeof valueState === 'object' &&
                typeof valueState.find((a: any) => a.value === item.props.value) !== 'undefined'
                  ? true
                  : false;
            }
          }
          const itemCustom: any = React.cloneElement(item, {
            key: index,
            onSelectItem: onSelectItem,
            selected: isSelected,
            index: index,
          });
          if (_filterValue) {
            const matchesValue = itemCustom.props.value
              ? itemCustom.props.value.toUpperCase().includes(_filterValue)
              : false;
            const matchesLabel = itemCustom.props.label
              ? itemCustom.props.label.toUpperCase().includes(_filterValue)
              : false;
            if (matchesValue || matchesLabel) {
              newItems.push(itemCustom);
            }
          } else {
            newItems.push(itemCustom);
          }
          index++;
        }
      });
    }
    setItems(newItems);
  };

  const filterItems = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilterValue(event.target.value);
    renderItems(event.target.value.toUpperCase());
  };

  const renderMenu = () => {
    const newItems: any[] = [];
    let index = 0;
    if (items) {
      items.forEach((item: any) => {
        if (item && item.type === Option) {
          let isSelected = false;
          if (!multiple) {
            isSelected = valueState && valueState === item.props.value;
          } else {
            const valueCompare = valueState ? (typeof valueState === 'object' ? valueState : [valueState]) : [];
            isSelected = valueCompare && valueCompare.length && valueCompare.indexOf(item.props.value) !== -1 ? true : false;
          }

          const itemCustom = React.cloneElement(item, {
            ...item.props,
            key: index,
            onSelectItem: onSelectItem,
            onRemoveItem: onRemoveItem,
            selected: isSelected,
            multiple: multiple,
            index: index,
          });
          newItems.push(itemCustom);
          index++;
        }
      });
    }
    if (newItems && newItems.length) {
      return <ul>{newItems}</ul>;
    }
    return (
      <div className="dropdown-item-icon">
        <span className="material-icons">error</span>
        Info: No results found
      </div>
    );
  };

  const renderHiddenInput = () => {
    let inputValue: any = value ? value : '';

    if (multiple) {
      inputValue = value ? value : [];
      if (typeof value === 'string') {
        inputValue = [value];
      }
    }
    return (
      <div className="hidden">
        <select disabled={disabled} name={name} multiple={multiple} ref={inputRef} value={inputValue}>
          {(props.children as any).map((option: any, index: number) => {
            return (
              <option key={index} value={option.value}>
                {option.label}
              </option>
            );
          })}
        </select>
      </div>
    );
  };

  const onRemoveFilterValue = (e: React.MouseEvent<HTMLSpanElement>) => {
    e.stopPropagation();
    setFilterValue('');
    renderItems();
  };

  const onClickFilter = (e: React.MouseEvent<HTMLInputElement>) => {
    if (showMenu) e.stopPropagation();
  };

  useEffect(() => {
    if (props.children) renderItems();
  }, [props.children]);

  const renderSelectContainer = () => {
    if (filter) {
      return (
        <div className="input-container">
          <input
            data-testid={rest ? `${rest['data-testid']}-input` : undefined}
            className={`input ${large ? 'large' : ''}`}
            placeholder={valueState && valueState.length && multiple ? `${valueState.length} Options selected` : placeholder}
            ref={inputRef}
            type="text"
            value={filterValue}
            onChange={filterItems}
            disabled={disabled}
            onClick={onClickFilter}
          />
          {filterValue ? (
            <span
              data-testid={rest ? `${rest['data-testid']}-remove-filter-btn` : undefined}
              className="material-icons input-icon-box"
              onClick={onRemoveFilterValue}
            >
              close
            </span>
          ) : (
            <span className="material-icons input-icon-box">search</span>
          )}
        </div>
      );
    }

    return (
      <div className="input-container">
        <div className={large ? 'input_large' : 'input'}>{getTextContent()}</div>
        {showMenu ? (
          <span className="material-icons input-icon-box">expand_less</span>
        ) : (
          <span className="material-icons input-icon-box">expand_more</span>
        )}
      </div>
    );
  };

  const getTextContent = () => {
    if (multiple && typeof valueState === 'object' && valueState.length) {
      return <span className="placeholder">{`${valueState.length} Options selected`}</span>;
    } else if (valueState) {
      const itemSelected = items.find((item: any) => item.props.value === valueState);
      if (itemSelected) return itemSelected.props.label;
    }
    return <span className="placeholder">{props.placeholder}</span>;
  };

  const renderBottomContainer = () => {
    if (multiple && valueState && valueState.length) {
      return (
        <div className="select-bottom-container">
          <button
            data-testid={rest ? `${rest['data-testid']}-remove-btn` : undefined}
            className={`chip-icon_right_active${disabled ? '_disabled' : ''}`}
            onClick={onRemoveOptions}
          >
            {`${valueState.length} Options selected`}
            <span className="material-icons">close</span>
          </button>
          {helperText && (
            <p className="input-helper-text">
              {helperIcon && <span className="material-icons">{helperIcon}</span>}
              {helperText}
            </p>
          )}
        </div>
      );
    }
    return (
      helperText && (
        <p className="input-helper-text">
          {helperIcon && <span className="material-icons">{helperIcon}</span>}
          {helperText}
        </p>
      )
    );
  };

  return (
    <div className={`input-wrapper${disabled ? '_disabled' : ''} ${error ? 'error' : ''}  ${className || ''}`}>
      {label && (
        <label className="caption">
          {label}
          {required && <small>*</small>}
        </label>
      )}

      <Dropdown onChangeToggleMenu={() => setShowMenu(!showMenu)}>
        <DropdownButton data-testid={rest ? rest['data-testid'] : undefined} disabled={disabled}>
          {renderSelectContainer()}
        </DropdownButton>
        <DropdownMenu>{renderMenu()}</DropdownMenu>
        {renderHiddenInput()}
      </Dropdown>
      {renderBottomContainer()}
    </div>
  );
};

export default Select;
