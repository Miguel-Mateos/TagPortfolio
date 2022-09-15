import React from 'react';

export interface IAccordionContentProps {
  /**
   * Add class to accordion content
   */
  className?: string;
  [others: string]: any;
}

export const AccordionContent: React.FC<IAccordionContentProps> = (props) => {
  const {children, className} = props;

  return <div className={`accordion-content ${className || ''}`}>{children}</div>;
};

export default AccordionContent;
