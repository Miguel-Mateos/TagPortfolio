import React, {useEffect, useState} from 'react';

export interface ToggleProps {
  /**
   * Adds id for input in the toggle component
   */
  id?: string;
  /**
   * Adds any class to the parent container
   */
  className?: string;
  /**
   * Toggle value
   */
  checked?: boolean;
  /**
   * Toggle is disabled
   */
  disabled?: boolean;
  /**
   * Toggle is read only, same of disable
   */
  readOnly?: boolean;
  /**
   * Helper text when toggle is not checked
   */
  helperTextOff?: string;
  /**
   * Helper text when toggle is checked
   */
  helperTextOn?: string;
  /**
   * Label for toggle
   */
  label?: string;
  /**
   * Whe toggle value change call this function
   */
  onChange?: (checked: boolean) => void;
  /**
   * Small toggle size
   */
  small?: boolean;
  [others: string]: any;
}

export const Toggle: React.FC<ToggleProps> = (props) => {
  const {
    id = 'toggle',
    checked = false,
    className,
    disabled,
    readOnly,
    helperTextOff,
    helperTextOn,
    label,
    onChange,
    small,
    ...rest
  } = props;

  const [_checked, setChecked] = useState(checked);

  useEffect(() => {
    if (_checked !== checked) setChecked(checked);
  }, [checked]);

  const [helperTextDescription, setHelperTextDescription] = useState(checked ? helperTextOn : helperTextOff);

  const onChangeToggle = () => {
    setChecked(!_checked);
    handleHelperText();
    if (typeof onChange === 'function') onChange(!_checked);
  };

  const handleHelperText = () => {
    if (helperTextDescription === helperTextOff) {
      setHelperTextDescription(helperTextOn);
    } else {
      setHelperTextDescription(helperTextOff);
    }
  };

  const labelClassName = 'toggle-pill'.concat(
    small ? '_small' : '',
    _checked ? '_checked' : '',
    disabled || readOnly ? '_disabled' : ''
  );

  return (
    <div className={`toggle ${className || ''}`}>
      {label && !small && <p className="toggle-label">{label}</p>}
      <div className="toggle-container">
        <label id={`${id}-label`} className={labelClassName} htmlFor={id}>
          <input
            id={id}
            data-testid={rest ? rest['data-testid'] : undefined}
            className="toggle-input"
            onChange={onChangeToggle}
            checked={_checked}
            disabled={disabled}
            readOnly={readOnly}
            type="checkbox"
          />
          <span className="toggle-handle" />
        </label>
        {helperTextDescription && (
          <span className={`toggle-text-helper${small ? '_small' : ''}`}>{helperTextDescription}</span>
        )}
      </div>
    </div>
  );
};

export default Toggle;

