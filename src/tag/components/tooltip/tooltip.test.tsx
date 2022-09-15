import React, {useRef} from 'react';
import Tooltip from './tooltip';
import {render} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

const TooltipTest: React.FC = () => {
  const buttonRef = useRef(null);

  return (
    <div id="root">
      <button data-testid="tooltip-btn" ref={buttonRef} id="parent">
        I have a tooltip
      </button>
      <Tooltip className="tag-ds" data-testid="tooltip" parentRef={buttonRef}>
        I am a tooltip
      </Tooltip>
    </div>
  );
};

test('Tooltip render when mouse out and leave ', () => {
  const {container, getByTestId} = render(<TooltipTest />);

  const tooltipBtn = getByTestId('tooltip-btn');

  if (tooltipBtn) userEvent.hover(tooltipBtn);
  expect(getByTestId('tooltip')).toBeDefined();
  expect(container.getElementsByClassName('tooltip').length).toBe(1);
  if (tooltipBtn) userEvent.unhover(tooltipBtn);
  expect(container.getElementsByClassName('tooltip').length).toBe(0);
});
