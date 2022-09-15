import React, {useRef, useEffect} from 'react';

interface ICircularLoaderProps {
  step: number;
  steps: number;
  title?: string;
  helper?: string;
  className?: string;
  [others: string]: any;
}

export const BigLoader: React.FC<ICircularLoaderProps> = ({step, steps, title, helper, className, ...rest}) => {
  const ref = useRef<SVGPathElement>(null);
  const divRef = useRef<HTMLDivElement>(null);
  const calcPercentage = (step / steps) * 100;

  useEffect(() => {
    if (ref.current) {
      ref.current.style.animationDelay = '0';
      ref.current.style.transition = 'stroke-dashoffset 0.2s linear';
      ref.current.style.strokeDashoffset = `${(222 / steps) * (steps - step) + 78}`;
    }
  }, [step, steps]);

  return (
    <div
      className={`progress-bar_round ${className || ''}`}
      data-testid={rest && rest['data-testid'] ? rest['data-testid'] : undefined}
    >
      <div
        ref={divRef}
        className="svg-container_circular_big"
        data-testid={rest && rest['data-testid'] ? `${rest['data-testid']}-svg-container` : undefined}
        data-percentage={`${calcPercentage.toFixed()}%`}
      >
        <svg
          className="svg-content"
          width="80"
          height="80"
          viewBox="0 0 80 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className="circle-svg"
            ref={ref}
            d="M40 76C20.1178 76 4 59.8822 4 40C4 20.1178 20.1178 4 40
            4C59.8823 4 76 20.1178 76 40C76 59.8823 59.8823 76 40 76Z"
            strokeWidth="8"
          />
        </svg>
      </div>
      <div className="progress-bar-text-wrapper">
        {title && <p className="progress-bar-title">{title}</p>}
        {helper && <p className="progress-bar-helper">{helper}</p>}
      </div>
    </div>
  );
};

export const LittleLoader: React.FC<ICircularLoaderProps> = ({step, steps, helper, title, className, ...rest}) => {
  const ref = useRef<SVGPathElement>(null);
  const divRef = useRef<HTMLDivElement>(null);
  const calcPercentage = (step / steps) * 100;

  useEffect(() => {
    if (ref.current) {
      ref.current.style.animationDelay = '0';
      ref.current.style.transition = 'stroke-dashoffset 0.2s linear';
      ref.current.style.strokeDashoffset = `${(137 / steps) * (steps - step) + 163}`;
    }
  }, [step, steps]);

  return (
    <div
      className={`progress-bar_round ${className || ''}`}
      data-testid={rest && rest['data-testid'] ? rest['data-testid'] : undefined}
    >
      <div
        ref={divRef}
        className="svg-container_circular_medium"
        data-testid={rest && rest['data-testid'] ? `${rest['data-testid']}-svg-container` : undefined}
        data-percentage={`${calcPercentage.toFixed()}%`}
      >
        <svg
          width="48"
          className="svg-content"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            ref={ref}
            className="circle-svg"
            d="M24 46C11.8497 46 2 36.1503 2 24C2 11.8497 11.8497 2 24
        2C36.1503 2 46 11.8497 46 24C46 36.1503 36.1503 46 24 46Z"
            strokeWidth="4"
          />
        </svg>
      </div>
      <div className="progress-bar-text-wrapper">
        {title && <p className="progress-bar-title">{title}</p>}
        {helper && <p className="progress-bar-helper">{helper}</p>}
      </div>
    </div>
  );
};

