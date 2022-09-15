import React, {useState, useRef, useEffect} from 'react';
import ReactDOM from 'react-dom';

interface TooltipProps {
  id?: string;
  /**
   * Is a reference for parent element
   */
  parentRef: any;
  /**
   * Apply diferent styles for tooltip
   */
  className?: string;
  portal?: boolean;
  [others: string]: any;
}

export const Tooltip: React.FC<TooltipProps> = (props) => {
  const {parentRef, className, children, id, portal, ...rest} = props;
  const tooltipRef = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(false);
  const [position, setPosition] = useState({});
  const [positionClass, setPositionClass] = useState('');

  useEffect(() => {
    if (parentRef && parentRef.current) {
      const parent = parentRef.current;
      if (parent) {
        parent.onmouseenter = () => setShow(true);
        parent.onmouseleave = () => (show ? setShow(false) : undefined);
      }
    }
  });

  const calculateTooltipPositionForParent = () => {
    if (parentRef && parentRef.current && tooltipRef && tooltipRef.current) {
      const {clientHeight, clientWidth} = document.body;
      const parent = parentRef.current.getBoundingClientRect();
      const tooltip = tooltipRef.current.getBoundingClientRect();
      if (parent.left < clientWidth / 2 && parent.left + parent.width / 2 - tooltip.width / 2 < 0) {
        return 'right';
      } else if (parent.left >= clientWidth / 2 && parent.right - parent.width / 2 + tooltip.width / 2 > clientWidth) {
        return 'left';
      } else if (parent.top > clientHeight / 2) {
        return 'top';
      }
      return 'bottom';
    }
    return 'botttom';
  };
  const calculateTooltipPosition = () => {
    if (parentRef && parentRef.current && tooltipRef && tooltipRef.current) {
      const parent = parentRef.current.getBoundingClientRect();
      const tooltip = tooltipRef.current.getBoundingClientRect();
      let top = 0;
      let left = 0;
      let width = 0;

      switch (calculateTooltipPositionForParent()) {
        case 'top':
          top = parent.top - tooltip.height - 8;
          left = parent.left + parent.width / 2 - tooltip.width / 2;
          break;
        case 'right':
          top = parent.top + parent.height / 2 - tooltip.height / 2;
          left = parent.left + parent.width + 8;
          break;
        case 'bottom':
        default:
          top = parent.top + parent.height + 8;
          left = parent.left + parent.width / 2 - tooltip.width / 2;
          break;
        case 'left':
          top = parent.top + parent.height / 2 - tooltip.height / 2;
          left = parent.left - tooltip.width - 8;
          width = parent.left - 8;
          break;
      }
      setPositionClass(calculateTooltipPositionForParent());
      setPosition({top, left, width: width ? width : undefined});
    }
  };

  useEffect(() => {
    calculateTooltipPosition();
  }, [show]);

  const tooltip = (
    <div
      data-testid={rest && rest['data-testid'] ? rest['data-testid'] : undefined}
      id={id}
      className={`tag-ds tooltip ${positionClass} ${className || ''}`}
      ref={tooltipRef}
      style={{...position}}
      {...rest}
    >
      {children}
    </div>
  );
  const container = document.getElementById('root') || document.body;
  return show ? portal ? ReactDOM.createPortal(tooltip, container) : tooltip : <></>;
};

export default Tooltip;

