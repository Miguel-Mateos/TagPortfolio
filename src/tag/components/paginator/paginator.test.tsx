import React from 'react';
import {IPaginator, Paginator} from './paginator';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import {fireEvent, logRoles, render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

const PaginatorTest = (args: IPaginator) => {
  return <Paginator {...args} data-testid="paginator" />;
};

test('renders and match snapshot', () => {
  const component = renderer.create(<PaginatorTest pages={20} />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Renders default paginator', () => {
  const {getByTestId} = render(<PaginatorTest pages={20} />);
  const paginator = getByTestId('paginator');
  expect(paginator.querySelector('paginator')).toBeDefined();
});

test('renders collapsed paginator', () => {
  const {getByTestId} = render(<PaginatorTest pages={20} collapsed />);
  const paginator = getByTestId('paginator');
  expect(paginator.querySelector('paginator-collapsed')).toBeDefined();
});

test('incerment page default', () => {
  const {getByText, getByTestId} = render(<PaginatorTest pages={20} />);
  const nextButton = getByTestId('paginator-button-next');
  expect(getByText(1)).toBeDefined();
  userEvent.click(nextButton);
  expect(getByText(5)).toBeDefined();
});

test('incerment page truncate', () => {
  const {getByText, getByTestId} = render(<PaginatorTest pages={20} truncate="right" />);
  const nextButton = getByTestId('paginator-button-next');
  expect(getByText(1)).toBeDefined();
  userEvent.click(nextButton);
  expect(getByText(5)).toBeDefined();
});

test('decrement page default', () => {
  const {getByText, getByTestId} = render(<PaginatorTest pages={20} defaultPage={6} />);
  const nextButton = getByTestId('paginator-button-next');
  const prevButton = getByTestId('paginator-button-previous');
  userEvent.click(nextButton);
  expect(getByText(7)).toBeDefined();
  userEvent.click(prevButton);
  expect(getByText(1)).toBeDefined();
});

test('decrement page truncated', () => {
  const {getByText, getByTestId} = render(<PaginatorTest pages={20} truncate="right" />);
  const nextButton = getByTestId('paginator-button-next');
  const prevButton = getByTestId('paginator-button-previous');
  userEvent.click(nextButton);
  expect(getByText(7)).toBeDefined();
  userEvent.click(prevButton);
  expect(getByText(1)).toBeDefined();
});

test('truncate to start (left)', () => {
  const {getByText, getByTestId} = render(<PaginatorTest pages={20} truncate="left" />);
  const nextChunckBtn = getByTestId('paginator-button-next');
  if (nextChunckBtn) fireEvent.click(nextChunckBtn);
  const trunc = getByTestId('paginator-truncate-left');
  userEvent.click(trunc);
  expect(getByText(1)).toHaveClass('paginator-page_active');
});

test('truncate to finish (right)', () => {
  const {getByText, getByTestId} = render(<PaginatorTest pages={20} truncate="right" />);
  const trunc = getByTestId('paginator-truncate-right');
  userEvent.click(trunc);
  expect(getByText(20)).toHaveClass('paginator-page_active');
});

test('jump option to start', () => {
  const {getByTestId, container} = render(
    <PaginatorTest pages={20} collapsed defaultPage={5} collapsedOptions={{jump: 'all'}} />
  );
  const jump = getByTestId('paginator-button-jump-previous');

  userEvent.click(jump);
  expect(container.getElementsByClassName('input')[0]?.innerHTML).toBe('1');
});

test('jump option to finish', () => {
  const {getByTestId, container} = render(
    <PaginatorTest pages={20} collapsed defaultPage={5} collapsedOptions={{jump: 'all'}} />
  );
  const jump = getByTestId('paginator-button-jump-next');

  userEvent.click(jump);
  expect(container.getElementsByClassName('input')[0]?.innerHTML).toBe('20');
});

test('collapsed arrow navigation left', () => {
  const {getByTestId, container} = render(
    <PaginatorTest pages={20} collapsed defaultPage={5} collapsedOptions={{jump: 'all'}} />
  );
  const previous = getByTestId('paginator-button-previous');
  userEvent.click(previous);
  expect(container.getElementsByClassName('input')[0]?.innerHTML).toBe('4');
});

test('collapsed arrow navigation right', () => {
  const {getByTestId, container} = render(
    <PaginatorTest pages={20} collapsed defaultPage={5} collapsedOptions={{jump: 'all'}} />
  );
  const next = getByTestId('paginator-button-next');
  userEvent.click(next);
  expect(container.getElementsByClassName('input')[0]?.innerHTML).toBe('6');
});

test('select page from dropdown collapsed', () => {
  const {getByTestId} = render(<PaginatorTest pages={20} collapsed defaultPage={5} collapsedOptions={{jump: 'all'}} />);
  const dropdown = getByTestId('paginator-dropdown');
  if (dropdown) userEvent.click(dropdown);
  const DItem = screen.getByTestId('paginator-dropdown-item-4');
  userEvent.click(DItem);
  expect(dropdown.getElementsByClassName('input')[0]?.innerHTML).toBe('4');
});

test('minimum pages render', () => {
  const {queryByText} = render(<PaginatorTest pages={5} />);
  expect(queryByText(/navigate_next/i)).toBeNull();
});

test('disabled paginator', () => {
  const {getByTestId} = render(<PaginatorTest pages={20} disabled />);
  const disabledNumber = getByTestId('paginator-button-next');
  expect(disabledNumber).toHaveAttribute('disabled');
});
