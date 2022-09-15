import React from 'react';
export interface ISelectOptionProps {
  id?: string;
  value: any;
  label: string;
  multiple?: boolean;
  selected?: boolean;
  onRemoveItem?: (value: any) => void;
  onSelectItem?: (value: any) => void;
  [others: string]: any;
}

const SelectOption: React.FC<ISelectOptionProps> = (props) => {
  const {id, value, label, multiple, selected, onRemoveItem, onSelectItem, ...rest} = props;
  const onChangeItem = (e: React.MouseEvent | React.ChangeEvent) => {
    if (multiple) e.stopPropagation();
    if (selected) {
      if (onRemoveItem) onRemoveItem(value);
    } else {
      if (onSelectItem) onSelectItem(value);
    }
  };
  return multiple ? (
    <li className="dropdown-item checkbox-container dropdown-item">
      <input id={id || value} type="checkbox" checked={selected} onChange={onChangeItem} {...rest} />
      <label htmlFor={id || value} onClick={(e) => e.stopPropagation()}>
        {label}
      </label>
    </li>
  ) : (
    <li className={`dropdown-item ${selected ? 'selected' : ''}`} onClick={onChangeItem} {...rest}>
      {label}
    </li>
  );
};

export default SelectOption;

