import React, {useState} from 'react';
import AccordionContent from './accordionContent';
import AccordionHeader from './accordionHeader';

export {default as AccordionContent} from './accordionContent';
export {default as AccordionHeader} from './accordionHeader';

export interface IAccordionProps {
  /**
   * Identifies the accordion item
   */
  id?: string;
  /**
   * Add shadow box to accordion
   */
  filled?: boolean;
  /**
   * Indicates if the accordion show the content
   */
  defaultShow?: boolean;
  /**
   * Add class to accordion
   */
  className?: string;
  [others: string]: any;
}

export const Accordion: React.FC<IAccordionProps> = (props) => {
  const {id, filled, defaultShow = false, children, className, ...rest} = props;
  const [showContent, setShowContent] = useState(defaultShow);

  const renderHeader = () => {
    let _accordionHeader = children ? (children as any).find((a: any) => a && a.type === AccordionHeader) : undefined;

    if (_accordionHeader) {
      _accordionHeader = React.cloneElement(_accordionHeader, {
        ..._accordionHeader.props,
        onClick: () => setShowContent(!showContent),
        showContent: showContent,
        'data-testid': rest && rest['data-testid'] ? `${rest['data-testid']}-header` : undefined,
      });
      return _accordionHeader;
    }
    return <></>;
  };

  const renderContent = () => {
    const _accordionContent = children ? (children as any).find((a: any) => a && a.type === AccordionContent) : undefined;

    if (showContent) {
      return _accordionContent;
    }
    return <></>;
  };

  return (
    <div
      id={id}
      data-testid={rest && rest['data-testid'] ? rest['data-testid'] : undefined}
      className={`accordion${filled ? '_filled' : ''} ${className || ''} ${showContent ? 'show' : ''} `}
    >
      {renderHeader()}
      {renderContent()}
    </div>
  );
};

export default Accordion;
