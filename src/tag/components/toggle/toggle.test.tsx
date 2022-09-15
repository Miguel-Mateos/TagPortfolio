import React from 'react';
import Toggle from './toggle';
import renderer from 'react-test-renderer';
import ReactTestUtils from 'react-dom/test-utils';
import {render} from '@testing-library/react';
import '@testing-library/jest-dom';

const ToggleCombinations = () => {
  return (
    <>
      <Toggle className="tag-ds" />
      <Toggle className="tag-ds" id="small-toggle" small />
      <Toggle className="tag-ds" id="toggle-checked" checked />
      <Toggle className="tag-ds" id="small-toggle-checked" small checked />
      <Toggle className="tag-ds" id="toggle-disabled" disabled />
      <Toggle className="tag-ds" id="small-toggle-disabled" small disabled />
      <Toggle className="tag-ds" id="toggle-readOnly" readOnly />
      <Toggle className="tag-ds" id="small-toggle-readOnly" small readOnly />
      <Toggle className="tag-ds" id="toggle-checked-disabled" checked disabled />
      <Toggle className="tag-ds" id="small-toggle-checked-disabled" small checked disabled />
      <Toggle className="tag-ds" id="toggle-label" label="I am label for #toggle-label" />
      <Toggle className="tag-ds" id="small-toggle-label" small label="I am label for #toggle-label" />
      <Toggle className="tag-ds" id="toggle-helper-text" helperTextOff="off" helperTextOn="on" />
      <Toggle className="tag-ds" id="small-toggle-helper-text" small helperTextOff="off" helperTextOn="on" />
    </>
  );
};

test('Toggle combinations render', () => {
  const component = renderer.create(<ToggleCombinations />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Click action toggle component', () => {
  const {container, getByTestId} = render(<Toggle data-testid="toggle-test" helperTextOn="on" helperTextOff="off" />);
  const toggleContainer = container.querySelector('.toggle')?.querySelector('.toggle-container');
  if (toggleContainer) {
    expect(toggleContainer.querySelectorAll('.toggle-pill')?.length).toBe(1);
    const togglePill = toggleContainer.querySelector('.toggle-pill');

    if (togglePill) {
      const toggle = getByTestId('toggle-test');
      if (toggle) {
        expect(toggle).not.toBeChecked();
        ReactTestUtils.Simulate.change(toggle);
        expect(toggleContainer.querySelectorAll('.toggle-pill_checked').length).toBe(1);
        expect(toggleContainer.querySelector('.toggle-pill_checked')?.querySelectorAll('#toggle').length).toBe(1);
        expect(toggleContainer.querySelector('.toggle-pill_checked')?.querySelector('#toggle')).toBeChecked();

        ReactTestUtils.Simulate.change(toggle);

        expect(toggleContainer.querySelectorAll('.toggle-pill')?.length).toBe(1);
        expect(toggle).not.toBeChecked();
      }
    }
  }
  document.body.removeChild(container);
});

test('Render Toggle component OK', () => {
  console.error = jest.fn();

  React.createElement(Toggle, null);
  expect(console.error).toHaveBeenCalledTimes(0);
});
