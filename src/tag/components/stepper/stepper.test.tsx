import React from 'react';
import { IStep, Stepper } from './stepper';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';

const steps: IStep[] = [
  {
    name: 'Step Name',
    detail: 'optional',
    status: 'success'
  },
  {
    name: 'Step Name',
    detail: 'optional',
    status: 'pending'
  },
  {
    name: 'Step Name',
    detail: 'optional',
    status: 'error'
  },
  {
    name: 'Step Name',
    detail: 'optional',
    status: 'disabled'
  },
  {
    name: 'Step Name',
    detail: 'optional',
    status: 'active'
  }
];

const StepperTest = (props: any) => (
  <Stepper steps={steps} direction={props.direction}/>
);

test('Render Stepper and match snapshot', () => {
  const component = renderer.create(<StepperTest />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('render stepper vertical', () => {
  const component = render(<StepperTest direction='vertical' />);
  expect(component).toBeDefined();
});

test('render with mobile', () => {
  // eslint-disable-next-line no-global-assign
  window = Object.assign(window, { innerWidth: 600 });
  const component = render(<StepperTest />);
  expect(component).toBeDefined();
});