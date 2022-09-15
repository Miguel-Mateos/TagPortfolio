import React from 'react';

import IconCardTop from './cardTop';
import IconCardIcon from './cardIcon';
import IconCardHeader from './cardHeader';
import IconCardBody from './cardBody';
import IconCardFooter from './cardFooter';

export {default as IconCardTop} from './cardTop';
export {default as IconCardIcon} from './cardIcon';
export {default as IconCardHeader} from './cardHeader';
export {default as IconCardBody} from './cardBody';
export {default as IconCardFooter} from './cardFooter';

export interface IIconCardProps {
  /**
   * Identifies the accordion item
   */
  id?: string;
  /**
   * Add class to accordion
   */
  className?: string;
  selected?: boolean;
  onClick?: () => void;
  children:
    | React.ReactElement<
        typeof IconCardTop | typeof IconCardIcon | typeof IconCardHeader | typeof IconCardBody | typeof IconCardFooter
      >[]
    | React.ReactElement<
        typeof IconCardTop | typeof IconCardIcon | typeof IconCardHeader | typeof IconCardBody | typeof IconCardFooter
      >;
  [others: string]: any;
}

export const IconCard: React.FC<IIconCardProps> = (props) => {
  const {id, children, className, selected, onClick, ...rest} = props;

  const renderIconCard = () => {
    if (children) {
      let cardIcon: any;
      const contentChildrens: any[] = [];
      React.Children.forEach(children, (_childItem: any) => {
        if (
          _childItem.type === IconCardTop ||
          _childItem.type === IconCardHeader ||
          _childItem.type === IconCardBody ||
          _childItem.type === IconCardFooter
        )
          contentChildrens.push(_childItem);
        else if (_childItem.type === IconCardIcon) cardIcon = _childItem;
      });

      return (
        <div
          id={id || ''}
          className={`card_icon${selected ? '_selected' : ''} ${className || ''}`}
          onClick={onClick}
          {...rest}
        >
          {cardIcon}
          {contentChildrens && contentChildrens.length > 0 && <div className="card_icon-content">{contentChildrens}</div>}
        </div>
      );
    }
    return <></>;
  };

  return renderIconCard();
};

export default IconCard;

