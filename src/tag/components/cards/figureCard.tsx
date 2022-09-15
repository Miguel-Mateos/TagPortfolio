import React from 'react';

import FigureCardFigure from './cardFigure';
import FigureCardHeader from './cardHeader';
import FigureCardBody from './cardBody';
import FigureCardFloatIcon from './cardFloatIcon';

export {default as FigureCardFigure} from './cardFigure';
export {default as FigureCardHeader} from './cardHeader';
export {default as FigureCardBody} from './cardBody';
export {default as FigureCardFloatIcon} from './cardFloatIcon';

export interface IFigureCardProps {
  /**
   * Identifies the accordion item
   */
  id?: string;
  /**
   * Add class to accordion
   */
  className?: string;
  selected?: boolean;
  accent?: boolean;
  onClick?: () => void;
  children:
    | React.ReactElement<
        typeof FigureCardHeader | typeof FigureCardBody | typeof FigureCardFigure | typeof FigureCardFloatIcon
      >[]
    | React.ReactElement<
        typeof FigureCardHeader | typeof FigureCardBody | typeof FigureCardFigure | typeof FigureCardFloatIcon
      >;
  [others: string]: any;
}

export const FigureCard: React.FC<IFigureCardProps> = (props) => {
  const {id, children, className, selected, accent, onClick, ...rest} = props;

  const renderFigureCard = () => {
    let cardFigure: any;
    let cardFloatIcon: any;
    const contentChildrens: any[] = [];
    let widthStyle = '';
    if (children) {
      React.Children.forEach(children, (_childItem: any) => {
        if (_childItem.type === FigureCardHeader || _childItem.type === FigureCardBody) contentChildrens.push(_childItem);
        else if (_childItem.type === FigureCardFigure) cardFigure = _childItem;
        else if (_childItem.type === FigureCardFloatIcon) cardFloatIcon = _childItem;
      });

      if (cardFigure && cardFloatIcon) {
        cardFigure = React.cloneElement(cardFigure, {
          ...cardFigure.props,
          children: [].concat(cardFloatIcon, cardFigure.props.children),
        });
        if (!contentChildrens.length) widthStyle = 'fit-content';
      }
    }

    return (
      <div
        id={id || ''}
        className={`card_figure${accent ? '_accent' : ''}${selected ? '_selected' : ''} ${className || ''}`}
        style={widthStyle ? {width: widthStyle} : undefined}
        onClick={onClick}
        {...rest}
      >
        {cardFigure}
        {contentChildrens}
      </div>
    );
  };

  return renderFigureCard();
};

export default FigureCard;

