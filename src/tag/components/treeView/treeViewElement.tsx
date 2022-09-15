import React, { useState } from 'react';

export interface ITreeElement {
  /**
   * Name of the Tree Element
   */
  name: string
  /**
   * For disabling the Tree Element
   */
  disabled?: boolean
  /**
   * click event on developers needs
   */
  onClick?: (name: string) => void
  /**
   * Alternative className on Tree.Element
   */
  className?: string
  [others: string]: any
}


export const TreeViewElement: React.FC<ITreeElement> = ({ children, name, onClick, disabled, className, ...rest }) => {
  const [showChildren, setShowChildren] = useState<boolean>(false);

  const handleClickElement = () => {
    setShowChildren(!showChildren);
    if (onClick) onClick(name);
  };

  return (
    <>
      <button disabled={disabled} className={`list-icon tree-element ${className || ''}`}
        onClick={handleClickElement} {...rest}>
        <li className="item-condensed"
        >
          {children ? <span className="material-icons icon-order">arrow_right</span>
            : <span className="icon-order" />}
          {name}
        </li>
      </button>
      {children && showChildren &&
        React.Children.toArray(children).map((_child, _idx) => (
          <div key={_idx} className='tree-element-item'>
            {_child}
          </div>
        ))
      }
    </>
  );
};