import React from 'react';

export interface ICardImgProps {
  /**
   * Identifies the accordion item
   */
  id?: string;
  /**
   * Add class to accordion
   */
  className?: string;
  [others: string]: any;
}

export const CardImg: React.FC<ICardImgProps> = (props) => {
  const {id, children, className, ...rest} = props;

  return (
    <div id={id || ''} className={`card-img ${className || ''}`} {...rest}>
      {children}
    </div>
  );
};

export default CardImg;

