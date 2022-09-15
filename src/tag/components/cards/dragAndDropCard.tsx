import React from 'react';
import Dropdown, {DropdownButton, DropdownMenu} from '../dropdown/dropdown';

import DragAndDropCardHeader from './cardHeader';

export {default as DragAndDropCardHeader} from './cardHeader';

export interface IDragAndDropCardProps {
  /**
   * Identifies the accordion item
   */
  id?: string;
  /**
   * Add class to accordion
   */
  className?: string;
  options?: string[];
  placeholder?: boolean;
  completed?: boolean;
  draggable?: boolean;
  children: React.ReactElement<typeof DragAndDropCardHeader>;

  [others: string]: any;
}

export const DragAndDropCard: React.FC<IDragAndDropCardProps> = (props) => {
  const {id, children, className, options, placeholder, completed, ...rest} = props;
  return (
    <div
      id={id || ''}
      className={`card_drag-drop${placeholder ? '_placeholder' : ''}${completed ? '_completed' : ''} ${className || ''}`}
      {...rest}
    >
      {children}
      {options && options.length > 0 && (
        <Dropdown>
          <DropdownButton>
            <span className="material-icons">more_vert</span>
          </DropdownButton>
          <DropdownMenu>
            {options.map((_option: string, index: number) => (
              <li key={`option-card-${index}`} className="dropdown-item">
                {_option}
              </li>
            ))}
          </DropdownMenu>
        </Dropdown>
      )}
    </div>
  );
};

export default DragAndDropCard;

