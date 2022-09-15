import React, {useEffect, useState} from 'react';

type TStatus = 'success' | 'pending' | 'disabled' | 'error' | 'default' | 'active';
export interface IStep {
  name: string;
  detail?: string;
  status?: TStatus;
}

interface IStepperProps {
  /**
   * List of steps with name, detail and status, being the status one of:
   * success, pending, disabled, error, default, active
   */
  steps: IStep[];
  /**
   * direction of the stepper
   */
  vertical?: boolean;
  numbered?: boolean;
  onClickStep?: (stepIndex: number) => void;
  className?: string;
  [others: string]: any;
}

export const Stepper: React.FC<IStepperProps> = ({steps, vertical, numbered, onClickStep, className, ...rest}) => {
  const [mobile, setMobile] = useState<boolean>(window.innerWidth < 672);
  useEffect(() => {
    window.addEventListener('resize', () => {
      if (window.innerWidth < 672) setMobile(true);
      else setMobile(false);
    });
    return () => window.removeEventListener('resize', () => null);
  }, []);

  const handlerIcon = (str: TStatus = 'default') => {
    if (str === 'success') return 'done';
    return str;
  };

  const onClickStepItem = (index: number) => {
    if (typeof onClickStep === 'function') onClickStep(index);
  };

  if (mobile) {
    const activeStep = steps.findIndex((step) => step.status === 'active');
    return (
      <div className="stepper-mobile">
        <div className="stepper-mobile-text-container">
          <p className="stepper-title">{steps[activeStep]?.name}</p>
          <div className="stepper-mobile-steps">
            {activeStep}/{steps.length}
          </div>
        </div>
        <div className="stepper-mobile-progress">
          <div
            className="stepper-mobile-progress_fill"
            style={{transform: `translateX(-${100 - (activeStep / steps.length) * 100}%)`}}
          />
        </div>
      </div>
    );
  }
  if (vertical) {
    return (
      <div
        className={`stepper_vertical ${className || ''}`}
        data-testid={rest && rest['data-testid'] ? rest['data-testid'] : undefined}
      >
        {steps.map((step, idx) => (
          <div
            className={`stepper-step-container vertical ${step.status}  ${idx === steps.length - 1 ? 'last' : ''}`}
            key={idx}
            onClick={() => onClickStepItem(idx)}
          >
            <div className="stepper-step-icon-container_vertical">
              {numbered ? (
                <span className="stepper-step-icon_numbered">{idx}</span>
              ) : (
                <span className="material-icons stepper-step-icon">{handlerIcon(step.status)}</span>
              )}
            </div>
            <div className="stepper-text-content">
              <p className="stepper-title">{step.name}</p>
              <p className="stepper-subtitle">{step.detail}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div
      className={`stepper ${className || ''}`}
      data-testid={rest && rest['data-testid'] ? rest['data-testid'] : undefined}
    >
      {steps.map((step: IStep, idx: number) => (
        <div
          className={`stepper-step-container ${step.status}`}
          key={idx}
          onClick={() => onClickStepItem(idx)}
          data-testid={rest && rest['data-testid'] ? `${rest['data-testid']}-item-${idx}` : undefined}
        >
          <div className="stepper-step-icon-container">
            {numbered ? (
              <span className="stepper-step-icon_numbered">{idx}</span>
            ) : (
              <span className="material-icons stepper-step-icon">{handlerIcon(step.status)}</span>
            )}
          </div>
          <div className="stepper-text-content">
            <p className="stepper-title">{step.name}</p>
            <p className="stepper-subtitle">{step.detail}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Stepper;

