import React from 'react';

import CardTop from './cardTop';
import CardImg from './cardImage';
import CardHeader from './cardHeader';
import CardBody from './cardBody';
import CardFooter from './cardFooter';
import CardFloatButtons from './cardFloatButtons';

export {default as CardTop} from './cardTop';
export {default as CardImg} from './cardImage';
export {default as CardHeader} from './cardHeader';
export {default as CardBody} from './cardBody';
export {default as CardFooter} from './cardFooter';
export {default as CardFloatButtons} from './cardFloatButtons';

export interface ICardProps {
  /**
   * Identifies the accordion item
   */
  id?: string;
  /**
   * Add shadow box to accordion
   */
  horizontal?: boolean;
  /**
   * Add class to accordion
   */
  className?: string;
  selected?: boolean;
  onClick?: () => void;
  children:
    | React.ReactElement<
        typeof CardTop | typeof CardImg | typeof CardHeader | typeof CardBody | typeof CardFooter | typeof CardFloatButtons
      >[]
    | React.ReactElement<
        typeof CardTop | typeof CardImg | typeof CardHeader | typeof CardBody | typeof CardFooter | typeof CardFloatButtons
      >;
  [others: string]: any;
}

export const Card: React.FC<ICardProps> = (props) => {
  const {id, horizontal, children, className, selected, onClick, ...rest} = props;

  const renderCard = () => {
    let cardImg: any;
    let cardFloatButtons: any;
    const contentChildrens: any[] = [];
    if (children) {
      React.Children.forEach(children, (_childItem: any) => {
        if (
          _childItem.type === CardTop ||
          _childItem.type === CardHeader ||
          _childItem.type === CardBody ||
          _childItem.type === CardFooter
        )
          contentChildrens.push(_childItem);
        else if (_childItem.type === CardImg) cardImg = _childItem;
        else if (_childItem.type === CardFloatButtons) cardFloatButtons = _childItem;
      });

      if (cardImg && cardFloatButtons) {
        cardImg = React.cloneElement(cardImg, {
          ...cardImg.props,
          children: [].concat(cardImg.props.children, cardFloatButtons),
        });
      }
    }
    if (horizontal)
      return (
        <div
          id={id || ''}
          className={`card_horizontal${selected ? '_selected' : ''} ${className || ''}`}
          onClick={onClick}
          {...rest}
        >
          {cardImg}
          {contentChildrens && contentChildrens.length > 0 && (
            <div className="card_horizontal-content">{contentChildrens}</div>
          )}
        </div>
      );

    return (
      <div id={id || ''} className={`card${selected ? '_selected' : ''} ${className || ''}`} onClick={onClick} {...rest}>
        {cardImg}
        {contentChildrens}
      </div>
    );
  };

  return renderCard();
};

export default Card;

