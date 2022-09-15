import React from 'react';

import MasonryCardTop from './cardTop';
import MasonryCardImg from './cardImage';
import MasonryCardHeader from './cardHeader';
import MasonryCardBody from './cardBody';

export {default as MasonryCardTop} from './cardTop';
export {default as MasonryCardImg} from './cardImage';
export {default as MasonryCardHeader} from './cardHeader';
export {default as MasonryCardBody} from './cardBody';

export interface IMasonryCardProps {
  /**
   * Identifies the accordion item
   */
  id?: string;
  /**
   * Add class to accordion
   */
  className?: string;
  selected?: boolean;
  horizontal?: boolean;
  accent?: boolean;
  onClick?: () => void;
  children:
    | React.ReactElement<typeof MasonryCardTop | typeof MasonryCardImg | typeof MasonryCardHeader | typeof MasonryCardBody>[]
    | React.ReactElement<typeof MasonryCardTop | typeof MasonryCardImg | typeof MasonryCardHeader | typeof MasonryCardBody>;
  [others: string]: any;
}

export const MasonryCard: React.FC<IMasonryCardProps> = (props) => {
  const {id, children, className, accent, horizontal, selected, onClick, ...rest} = props;
  const renderMasonryCard = () => {
    let cardImg: any;
    const contentChildrens: any[] = [];
    if (children) {
      React.Children.forEach(children, (_childItem: any) => {
        if (
          _childItem.type === MasonryCardTop ||
          _childItem.type === MasonryCardHeader ||
          _childItem.type === MasonryCardBody
        )
          contentChildrens.push(_childItem);
        else if (_childItem.type === MasonryCardImg) cardImg = _childItem;
      });
    }
    if (!cardImg || accent) {
      cardImg = <div className="card-img bgAccent"></div>;
    }
    return (
      <div
        id={id || ''}
        className={`card_masonry${horizontal ? '_horizontal' : ''}${selected ? '_selected' : ''} ${className || ''}`}
        onClick={onClick}
        {...rest}
      >
        {cardImg}
        <div className="card_masonry-content">{contentChildrens}</div>
      </div>
    );
  };
  return renderMasonryCard();
};

export default MasonryCard;

