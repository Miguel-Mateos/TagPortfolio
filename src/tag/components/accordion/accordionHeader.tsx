import React from 'react';

export interface IAccordionHeaderProps {
  /**
   * Identifies if content is showed or not
   */
  showContent?: boolean;
  /**
   * Changes accordion state for show content or not
   */
  onClick?: () => void;
  /**
   * Add class to accordion header
   */
  className?: string;
  [others: string]: any;
}

export const AccordionHeader: React.FC<IAccordionHeaderProps> = (props) => {
  const {children, className, showContent, onClick, ...rest} = props;

  return (
    <div
      data-testid={rest && rest['data-testid'] ? rest['data-testid'] : undefined}
      className={`accordion-header ${className || ''}`}
      onClick={onClick}
    >
      {children}
      {showContent ? (
        <span className="material-icons accordion-icon">expand_less</span>
      ) : (
        <span className="material-icons accordion-icon">expand_more</span>
      )}
    </div>
  );
};

export default AccordionHeader;
