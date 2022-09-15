import React, {  useState } from 'react';

const testId = (base: string|undefined|null, extension: string) => base ? base+'-'+extension : undefined; 

export interface INumberInputProps {
  disabled?: boolean,
  className?: string
  error?: boolean
  required?: boolean
  defaultValue?: number
  onChange?: (num: number) => void
  boundaries?: {
    max: number
    min: number
  },
  placeholder?: {
    icon: React.ReactElement
    text: string
  }
  label?: string
  [others: string]: any
}

export const NumberInput: React.FC<INumberInputProps> = ({
  disabled,
  className,
  error,
  required,
  defaultValue,
  onChange,
  boundaries,
  placeholder,
  label,
  ...rest
}) => {
  const [value, setValue] = useState(defaultValue || '0');

  const handleIncrease = () => {
    setValue(prev =>  !handleBoundaries(+prev+1) ? (+prev + 1).toString() : prev);
    if (onChange) onChange(+value + 1);
  };
  const handleDecrease = () => {
    setValue(prev => !handleBoundaries(+prev-1) ? (+prev - 1).toString() : prev);
    if (onChange) onChange(+value - 1);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const tValue = e?.currentTarget?.value;
    setValue(tValue);
    if (handleBoundaries(+tValue) !== 'error') {
      if (onChange) onChange(+tValue);
    }
  };

  const handleBoundaries = (val: number) => {
    if (boundaries) {
      if (boundaries.max < val || boundaries.min > val) return 'error';
      return '';
    }
  }; 

  return (
    <div className={`number-input input-wrapper${disabled ? '_disabled' : ''} ${className || ''}
      ${(error || handleBoundaries(+value)) ? 'error' : ''}`}
    data-testid={rest['data-testid'] ? rest['data-testid'] : undefined}
    >
      {label && <label className='caption'>{label}{required && <small>*</small>}</label>}
      <div className='input-number-container'>
        <button disabled={disabled} data-testid={testId(rest['data-testid'], 'decrease')}
          onClick={handleDecrease} className='input-number-minus'>-</button>
        <input
          value={value}
          onChange={handleChange}
          type='number'
          className='input-container'
          disabled={disabled}
          placeholder='hola'
          data-testid={testId(rest['data-testid'], 'input')}
        />
        <button disabled={disabled} data-testid={testId(rest['data-testid'], 'increase')}
          onClick={handleIncrease} className='input-number-plus'>+</button>
      </div>
      {placeholder && <p className='input-helper-text'>
        {placeholder.icon}
        {placeholder.text}
      </p>}
    </div>
  );
};