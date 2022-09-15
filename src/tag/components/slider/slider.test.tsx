import React from 'react';
import Slider from './slider';
import renderer from 'react-test-renderer';
import {fireEvent, render} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';

const SliderTest: React.FC = (props: any) => {
  return <Slider {...props} className="tag-ds" />;
};

test('Slider should render', () => {
  const component = renderer.create(<SliderTest />);

  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});

test('Slider should have labels', () => {
  const {getByText} = render(<Slider data-testid="slider" label={{left: 'left', right: 'right '}} />);

  expect(getByText(/left/i)).toBeInTheDocument();
  expect(getByText(/right/i)).toBeInTheDocument();
});

test('Display max value of 15', () => {
  const {getByTestId} = render(<Slider data-testid="slider" max={15} />);

  const input = getByTestId('slider-input-test') as HTMLInputElement;

  expect(+input.max).toEqual(15);
});

test('Slider has defaultValue', () => {
  const {getByTestId} = render(<Slider defaultValue={4} data-testid="slider" max={15} />);

  const input = getByTestId('slider-input-test') as HTMLInputElement;

  expect(+input.value).toEqual(4);
});

test('Slider has tooltip', () => {
  const {getByTestId} = render(<Slider data-testid="slider" tooltip tooltipText="Text" max={20} min={0} />);

  const ttp = getByTestId('slider-tooltip-test');
  expect(ttp).toBeDefined();
});

test('SLider pass onChange', () => {
  const onChange = jest.fn();

  const {getByTestId} = render(
    <Slider onChange={onChange} data-testid="slider" defaultValue={{min: 1, max: 19}} max={20} min={0} />
  );
  const slider = getByTestId('slider-input-test');

  fireEvent.change(slider, {target: {value: 5}});

  expect(onChange).toBeCalledTimes(1);
});

test('Double slider has tooltip', () => {
  const {getByTestId} = render(
    <Slider data-testid="slider" double tooltip tooltipText={{min: 'Text', max: 'Text'}} max={20} min={0} />
  );

  const ttp = getByTestId('slider-tooltip-test');
  expect(ttp).toBeDefined();

  const ttp2 = getByTestId('slider-tooltip2-test');
  expect(ttp2).toBeDefined();
});

test('Double Slider should have labels', () => {
  const {getByText} = render(<Slider data-testid="slider" double label={{left: 'min', right: 'max '}} max={20} min={0} />);

  expect(getByText(/min/i)).toBeInTheDocument();
  expect(getByText(/max/i)).toBeInTheDocument();
});

test('Double Slider has default Values', () => {
  const {getByTestId} = render(<Slider data-testid="slider" double defaultValue={{min: 4, max: 19}} max={20} min={0} />);
  const input = getByTestId('slider-input-test') as HTMLInputElement;
  const input2 = getByTestId('slider-input2-test') as HTMLInputElement;

  expect(+input.value).toEqual(4);
  expect(+input2.value).toEqual(19);
});

test('Double SLider pass onChange', () => {
  const onChange = jest.fn();

  const {getByTestId} = render(
    <Slider onChange={onChange} data-testid="slider" double defaultValue={{min: 1, max: 19}} max={20} min={0} />
  );
  const slider = getByTestId('slider-input2-test');

  fireEvent.change(slider, {target: {value: 5}});

  expect(onChange).toBeCalledTimes(1);
});

