import React from 'react';
import renderer from 'react-test-renderer';
import {render, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom';
import Select, {ISelectProps, Option} from './select';

const selectExample = (props: ISelectProps) => (
  <Select
    data-testid="select"
    filter={props.filter}
    multiple={props.multiple}
    disabled={props.disabled}
    error={props.error}
    label="Select a colour..."
    name={props.name}
    placeholder={props.placeholder}
    value={props.value}
    onChange={props.onChange}
    className="tag-ds"
  >
    <Option data-testid="red" id="red" value="1" label="Red" />
    <Option data-testid="yellow" id="yellow" value="2" label="Yellow" />
    <Option data-testid="orange" id="orange" value="3" label="Orange" />
    <Option data-testid="pink" id="pink" value="4" label="Pink" />
    <Option data-testid="purple" id="purple" value="5" label="Purple" />
    <Option data-testid="blue" id="blue" value="6" label="Blue" />
    <Option data-testid="grey" id="grey" value="7" label="Grey" />
    <Option data-testid="white" id="white" value="8" label="White" />
    <Option data-testid="black" id="black" value="9" label="Black" />
  </Select>
);

test('Select component should render and match snapshot', () => {
  const component = renderer.create(selectExample({name: 'color', placeholder: 'Select a colour...', value: '1'}));
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test('Select filter component should render and match snapshot', () => {
  const component = renderer.create(
    selectExample({name: 'color', placeholder: 'Select a colour...', filter: true, value: '1'})
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test('Select multiple component should render and match snapshot', () => {
  const component = renderer.create(
    selectExample({name: 'color', placeholder: 'Select a colour...', multiple: true, value: ['1']})
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test('Select filter multiple component should render and match snapshot', () => {
  const component = renderer.create(
    selectExample({name: 'color', placeholder: 'Select a colour...', multiple: true, filter: true, value: ['1']})
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Select option with simple select', () => {
  const onChangeMock = jest.fn();
  const {container, getByTestId} = render(
    selectExample({name: 'color', placeholder: 'Select a colour...', onChange: onChangeMock})
  );
  const selectBtn = getByTestId('select');

  if (selectBtn) fireEvent.click(selectBtn);

  expect(container.querySelectorAll('.dropdown-item').length).toBe(9);

  const option = getByTestId('red');

  if (option) fireEvent.click(option);
  expect(onChangeMock).toBeCalledWith('1');

  const inputContainer = container.querySelector('.input');

  if (inputContainer) expect(inputContainer.textContent).toBe('Red');
});

test('Remove option with simple select', () => {
  const onChangeMock = jest.fn();
  const {container, getByTestId} = render(
    selectExample({name: 'color', placeholder: 'Select a colour...', onChange: onChangeMock})
  );
  const selectBtn = getByTestId('select');

  if (selectBtn) fireEvent.click(selectBtn);

  expect(container.querySelectorAll('.dropdown-item').length).toBe(9);

  const option = getByTestId('red');

  if (option) fireEvent.click(option);
  expect(onChangeMock).toBeCalledWith('1');

  const inputContainer = container.querySelector('.input');

  if (inputContainer) expect(inputContainer.textContent).toBe('Red');

  if (selectBtn) fireEvent.click(selectBtn);

  const option2 = getByTestId('red');
  if (option2) fireEvent.click(option2);

  expect(onChangeMock).toBeCalledWith('');

  if (inputContainer) expect(inputContainer.textContent).toBe('Select a colour...');
});

test('Select options with multiple select', () => {
  const onChangeMock = jest.fn();
  const {container, getByTestId} = render(
    selectExample({name: 'color', placeholder: 'Select a colour...', multiple: true, onChange: onChangeMock})
  );
  const selectBtn = getByTestId('select');

  if (selectBtn) fireEvent.click(selectBtn);

  expect(container.querySelectorAll('.dropdown-item').length).toBe(9);

  const option1 = getByTestId('red');

  if (option1) fireEvent.click(option1);
  expect(onChangeMock).toBeCalledWith(['1']);

  const inputContainer = container.querySelector('.input');

  if (inputContainer) expect(inputContainer.textContent).toBe('1 Options selected');

  const option2 = getByTestId('blue');

  if (option2) fireEvent.click(option2);
  expect(onChangeMock).toBeCalledWith(['1', '6']);

  if (inputContainer) expect(inputContainer.textContent).toBe('2 Options selected');
});

test('Remove options with multiple select', () => {
  const onChangeMock = jest.fn();
  const {container, getByTestId} = render(
    selectExample({name: 'color', placeholder: 'Select a colour...', multiple: true, onChange: onChangeMock})
  );
  const selectBtn = getByTestId('select');

  if (selectBtn) fireEvent.click(selectBtn);

  expect(container.querySelectorAll('.dropdown-item').length).toBe(9);

  const option1 = getByTestId('red');

  if (option1) fireEvent.click(option1);
  expect(onChangeMock).toBeCalledWith(['1']);

  const inputContainer = container.querySelector('.input');

  if (inputContainer) expect(inputContainer.textContent).toBe('1 Options selected');

  const option2 = getByTestId('blue');

  if (option2) fireEvent.click(option2);
  expect(onChangeMock).toBeCalledWith(['1', '6']);

  if (inputContainer) expect(inputContainer.textContent).toBe('2 Options selected');

  if (option2) fireEvent.click(option2);
  expect(onChangeMock).toBeCalledWith(['1']);

  if (inputContainer) expect(inputContainer.textContent).toBe('1 Options selected');

  if (option1) fireEvent.click(option1);
  expect(onChangeMock).toBeCalledWith([]);

  if (inputContainer) expect(inputContainer.textContent).toBe('Select a colour...');
});

test('Select option with simple filter select', () => {
  const {container, getByTestId} = render(selectExample({name: 'color', placeholder: 'Select a colour...', filter: true}));
  const selectBtn = getByTestId('select');

  if (selectBtn) fireEvent.click(selectBtn);

  expect(container.querySelectorAll('.dropdown-item').length).toBe(9);

  const option = getByTestId('red');

  if (option) fireEvent.click(option);
  if (selectBtn) fireEvent.click(selectBtn);

  expect(container.getElementsByClassName('dropdown-item selected').length).toBe(1);
});

test('Remove option with simple filter select', () => {
  const {container, getByTestId} = render(selectExample({name: 'color', placeholder: 'Select a colour...', filter: true}));
  const selectBtn = getByTestId('select');

  if (selectBtn) fireEvent.click(selectBtn);

  expect(container.querySelectorAll('.dropdown-item').length).toBe(9);

  const option = getByTestId('red');

  if (option) fireEvent.click(option);
  if (selectBtn) fireEvent.click(selectBtn);

  expect(container.getElementsByClassName('dropdown-item selected').length).toBe(1);

  if (option) fireEvent.click(option);
  if (selectBtn) fireEvent.click(selectBtn);

  expect(container.getElementsByClassName('dropdown-item selected').length).toBe(0);
});

test('Select options with multiple filter select', () => {
  const {container, getByTestId} = render(
    selectExample({name: 'color', placeholder: 'Select a colour...', multiple: true, filter: true})
  );
  const selectBtn = getByTestId('select');

  if (selectBtn) fireEvent.click(selectBtn);

  expect(container.getElementsByClassName('dropdown-item').length).toBe(9);

  const option1 = getByTestId('red');

  if (option1) fireEvent.click(option1);

  expect(option1).toBeChecked();

  const option2 = getByTestId('blue');

  if (option2) fireEvent.click(option2);

  expect(option1).toBeChecked();
  expect(option2).toBeChecked();
});

test('Remove options with multiple filter select', () => {
  const {container, getByTestId} = render(
    selectExample({name: 'color', placeholder: 'Select a colour...', multiple: true, filter: true})
  );
  const selectBtn = getByTestId('select');

  if (selectBtn) fireEvent.click(selectBtn);

  expect(container.getElementsByClassName('dropdown-item').length).toBe(9);

  const option1 = getByTestId('red');

  if (option1) fireEvent.click(option1);

  expect(option1).toBeChecked();

  const option2 = getByTestId('blue');

  if (option2) fireEvent.click(option2);

  expect(option1).toBeChecked();
  expect(option2).toBeChecked();

  if (option2) fireEvent.click(option2);

  expect(option1).toBeChecked();
  expect(option2).not.toBeChecked();

  if (option1) fireEvent.click(option1);

  expect(option1).not.toBeChecked();
  expect(option2).not.toBeChecked();
});

test('Remove option default with multiple filter select', () => {
  const {container, getByTestId} = render(
    selectExample({name: 'color', placeholder: 'Select a colour...', multiple: true, filter: true, value: '1'})
  );
  const selectBtn = getByTestId('select');

  if (selectBtn) fireEvent.click(selectBtn);

  expect(container.getElementsByClassName('dropdown-item').length).toBe(9);

  const option1 = getByTestId('red');

  expect(option1).toBeChecked();

  if (option1) fireEvent.click(option1);

  if (selectBtn) fireEvent.click(selectBtn);

  expect(option1).not.toBeChecked();
});

test('Remove option default with remove all button multiple filter select', () => {
  const onChangeMock = jest.fn();
  const {container, getByTestId} = render(
    selectExample({
      name: 'color',
      placeholder: 'Select a colour...',
      multiple: true,
      filter: true,
      value: '1',
      onChange: onChangeMock,
    })
  );

  const removeBtn = getByTestId('select-remove-btn');
  if (removeBtn) fireEvent.click(removeBtn);
  expect(onChangeMock).toBeCalledWith([]);
  const selectBtn = getByTestId('select');

  if (selectBtn) fireEvent.click(selectBtn);

  expect(container.getElementsByClassName('dropdown-item').length).toBe(9);

  const option1 = getByTestId('red');

  expect(option1).not.toBeChecked();
});

test('Fetch options with filter select and click remove filter value', () => {
  const {container, getByTestId} = render(selectExample({name: 'color', placeholder: 'Select a colour...', filter: true}));
  const selectBtn = getByTestId('select');

  if (selectBtn) fireEvent.click(selectBtn);

  expect(container.querySelectorAll('.dropdown-item').length).toBe(9);

  const input = getByTestId('select-input');
  if (input) {
    fireEvent.click(input);
    fireEvent.change(input, {target: {value: 'Red'}});
    expect(input.getAttribute('value')).toBe('Red');
  }

  const removeFilterBtn = getByTestId('select-remove-filter-btn');
  expect(container.querySelectorAll('.dropdown-item').length).toBe(1);
  if (removeFilterBtn) fireEvent.click(removeFilterBtn);
  expect(container.querySelectorAll('.dropdown-item').length).toBe(9);
});

