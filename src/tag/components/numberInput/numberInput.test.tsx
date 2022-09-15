import React from 'react';
import renderer from 'react-test-renderer';
import { fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { INumberInputProps, NumberInput } from './numberInput';
import userEvent from '@testing-library/user-event';

const TestNumber = (args: INumberInputProps) => {
  return <NumberInput {...args}/>;
};

test('render Number Input and match snapshot', () => {
  const component = renderer.create(<TestNumber />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('increment Number input value', () => {
  const { getByTestId } = render(<TestNumber data-testid='number-input'/>);
  const increment = getByTestId('number-input-increase');
  const value = getByTestId('number-input-input');
  fireEvent.click(increment);
  expect(value).toHaveValue(1);
});

test('decrement Number input value', () => {
  const { getByTestId } = render(<TestNumber defaultValue={1} data-testid='number-input'/>);
  const decrement = getByTestId('number-input-decrease');
  const value = getByTestId('number-input-input');
  fireEvent.click(decrement);
  expect(value).toHaveValue(0);
});

test('change value input value with keyboard', () => {
  const { getByTestId } = render(<TestNumber defaultValue={1} data-testid='number-input'/>);
  const input = getByTestId('number-input-input');
  userEvent.clear(input);
  userEvent.type(input, '23');
});

test('surpass boundary by max', () => {
  const { getByTestId } = render(<TestNumber defaultValue={1} boundaries={{max: 10, min: 0 }} data-testid='number-input'/>);
  const component = getByTestId('number-input');
  const input = getByTestId('number-input-input');
  userEvent.clear(input);
  userEvent.type(input, '23');
  expect(component).toHaveClass('error');
});

test('surpass boundary by min', () => {
  const { getByTestId } = render(<TestNumber defaultValue={1} boundaries={{max: 10, min: 0 }} data-testid='number-input'/>);
  const component = getByTestId('number-input');
  const input = getByTestId('number-input-input');
  userEvent.clear(input);
  userEvent.type(input, '-1');
  expect(component).toHaveClass('error');
});

describe('call and render onChange properly', () => {
  test ('witch increase', () => {
    const mock = jest.fn();
    const { getByTestId } = render(<TestNumber onChange={mock} data-testid='number-input'/>);
    const increment = getByTestId('number-input-increase');
    userEvent.click(increment);
    expect(mock).toBeCalledTimes(1);
  });

  test ('witch decrease', () => {
    const mock = jest.fn(); 
    const { getByTestId } = render(<TestNumber onChange={mock} data-testid='number-input'/>);
    const decrement = getByTestId('number-input-decrease');
    userEvent.click(decrement);
    expect(mock).toBeCalledTimes(1);
  });

  test ('with keyboard', () => {
    const mock = jest.fn();
    const { getByTestId } = render(<TestNumber onChange={mock} data-testid='number-input'/>);
    const input = getByTestId('number-input-input');
    userEvent.type(input, '2');
    expect(mock).toBeCalledTimes(1);
  });
});

test('disabled Number Input', () => {
  const { getByTestId } = render(<TestNumber disabled data-testid='number-input'/>);
  const component = getByTestId('number-input');
  expect(component).toHaveClass('input-wrapper_disabled');
});