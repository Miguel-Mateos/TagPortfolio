import React from 'react';
import Dropdown from './dropdown';
import DropdownButton from './dropdownButton';
import DropdownMenu from './dropdownMenu';
import renderer from 'react-test-renderer';
import {fireEvent, render} from '@testing-library/react';

const dropdownExample = (
  <Dropdown className="tag-ds">
    <DropdownButton data-testid="dropdown-btn" className="button">
      Menu dropdown
    </DropdownButton>
    <DropdownMenu>
      <ul>
        <li className="dropdown-item">
          <a href="#dropdown">Item 1</a>
        </li>
        <li className="dropdown-item">
          <a href="#dropdown">Item 2</a>
        </li>
        <li className="dropdown-item">
          <a href="#dropdown">Item 3</a>
        </li>
        <li className="dropdown-item">
          <a href="#dropdown">Item 4</a>
        </li>
      </ul>
    </DropdownMenu>
  </Dropdown>
);

const dropdownWithOtherDivExample = (
  <>
    <div data-testid="other-div">Other div</div>
    <Dropdown>
      <DropdownButton data-testid="dropdown-btn" className="button">
        Menu dropdown
      </DropdownButton>
      <DropdownMenu>
        <ul>
          <li className="dropdown-item">
            <a href="#dropdown">Item 1</a>
          </li>
          <li className="dropdown-item">
            <a href="#dropdown">Item 2</a>
          </li>
          <li className="dropdown-item">
            <a href="#dropdown">Item 3</a>
          </li>
          <li className="dropdown-item">
            <a href="#dropdown">Item 4</a>
          </li>
        </ul>
      </DropdownMenu>
    </Dropdown>
  </>
);

test('Dropdown should render', () => {
  const component = renderer.create(dropdownExample);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Click action toggle menu component', () => {
  const {container, getByTestId} = render(dropdownExample);

  expect(container.getElementsByClassName('dropdown-menu').length).toBe(0);

  const dropdownBtn = getByTestId('dropdown-btn');
  if (dropdownBtn) fireEvent.click(dropdownBtn);
  expect(container.getElementsByClassName('dropdown-menu').length).toBe(1);
});

test('Click action toggle menu component and click outside', () => {
  const {container, getByTestId} = render(dropdownWithOtherDivExample);

  expect(container.getElementsByClassName('dropdown-menu').length).toBe(0);

  const dropdownBtn = getByTestId('dropdown-btn');
  if (dropdownBtn) fireEvent.click(dropdownBtn);
  expect(container.getElementsByClassName('dropdown-menu').length).toBe(1);

  const otherDiv = getByTestId('other-div');
  if (otherDiv) fireEvent.click(otherDiv);

  expect(container.getElementsByClassName('dropdown-menu').length).toBe(0);
});

test('Dropdown should render 4 dropdown items', () => {
  const {container, getByTestId} = render(dropdownExample);

  expect(container.querySelectorAll('.dropdown-menu').length).toBe(0);

  const dropdownBtn = getByTestId('dropdown-btn');
  if (dropdownBtn) fireEvent.click(dropdownBtn);
  expect(container.querySelectorAll('.dropdown-menu').length).toBe(1);

  expect(container.querySelectorAll('.dropdown-item').length).toBe(4);
});
