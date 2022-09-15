import React from 'react';

import LocationMapCardTop from './cardTop';
import LocationMapCardMap from './cardImage';
import LocationMapCardHeader from './cardHeader';
import LocationMapCardBody from './cardBody';

export {default as LocationMapCardTop} from './cardTop';
export {default as LocationMapCardMap} from './cardImage';
export {default as LocationMapCardHeader} from './cardHeader';
export {default as LocationMapCardBody} from './cardBody';

export interface ILocationMapCardProps {
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
        typeof LocationMapCardTop | typeof LocationMapCardMap | typeof LocationMapCardHeader | typeof LocationMapCardBody
      >[]
    | React.ReactElement<
        typeof LocationMapCardTop | typeof LocationMapCardMap | typeof LocationMapCardHeader | typeof LocationMapCardBody
      >;
  [others: string]: any;
}

export const LocationMapCard: React.FC<ILocationMapCardProps> = (props) => {
  const {id, children, className, selected, onClick, ...rest} = props;

  const renderLocationMapCard = () => {
    let cardMap: any;
    let cardTop: any;
    const contentChildrens: any[] = [];
    if (children) {
      React.Children.forEach(children, (_childItem: any) => {
        if (_childItem.type === LocationMapCardHeader || _childItem.type === LocationMapCardBody)
          contentChildrens.push(_childItem);
        else if (_childItem.type === LocationMapCardMap)
          if (_childItem && _childItem.props?.hoverButton)
            cardMap = React.cloneElement(_childItem, {
              ..._childItem.props,
              children: [].concat(_childItem.props.hoverButton, _childItem.props.children),
            });
          else cardMap = _childItem;
        else if (_childItem.type === LocationMapCardTop) cardTop = _childItem;
      });
      if (cardMap && cardTop)
        cardMap = React.cloneElement(cardMap, {
          ...cardMap.props,
          children: [].concat(cardTop, cardMap.props.children),
        });
    }

    return (
      <div id={id || ''} className={`card_map${selected ? '_selected' : ''} ${className || ''}`} onClick={onClick} {...rest}>
        {cardMap}
        {contentChildrens}
      </div>
    );
  };
  return renderLocationMapCard();
};

export default LocationMapCard;

