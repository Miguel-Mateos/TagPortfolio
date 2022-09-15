import React from 'react';
import ProgressBar, {IProgressBarProps} from './progressBar';
import renderer from 'react-test-renderer';
import {render} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

const ProgressBarTest = (args: IProgressBarProps) => {
  return <ProgressBar data-testid="progress-bar" {...args} />;
};

test('render and match snapshot', () => {
  const component = renderer.create(<ProgressBarTest title="Title" helper="Helper" steps={3} step={1} />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('render circle progress bar', () => {
  const {getByTestId} = render(<ProgressBarTest title="Title" helper="Helper" circular steps={3} step={1} />);
  const progress = getByTestId('progress-bar-svg-container');
  expect(progress).toHaveClass('svg-container_circular_big');
});

test('render small circle progress bar', () => {
  const {getByTestId} = render(<ProgressBarTest title="Title" helper="Helper" small steps={3} step={1} />);
  const progress = getByTestId('progress-bar-svg-container');
  expect(progress).toHaveClass('svg-container_circular_medium');
});

describe('render without title', () => {
  test('default', () => {
    const {container} = render(<ProgressBarTest helper="Helper" steps={3} step={1} />);
    expect(container).not.toContain('Title');
  });
  test('circular', () => {
    const {container} = render(<ProgressBarTest helper="Helper" circular steps={3} step={1} />);
    expect(container).not.toContain('Title');
  });

  test('small', () => {
    const {container} = render(<ProgressBarTest helper="Helper" small steps={3} step={1} />);
    expect(container).not.toContain('Title');
  });
});

test('updates progress', () => {
  const {container} = render(<ProgressBarTest steps={3} step={1} />);

  // update the props, re-render to the same container
  render(<ProgressBarTest step={2} steps={3} showPercentage />, {container});

  expect(container.querySelector('.progress-bar-percentage')).toHaveTextContent('67%');
});

test('updates progress round', () => {
  const {container} = render(<ProgressBarTest steps={3} step={1} circular />);

  // update the props, re-render to the same container
  render(<ProgressBarTest step={2} steps={3} showPercentage />, {container});

  expect(container.querySelector('.progress-bar-percentage')).toHaveTextContent('67%');
});

test('updates progress round', () => {
  const {container} = render(<ProgressBarTest steps={3} step={1} small />);

  // update the props, re-render to the same container
  render(<ProgressBarTest step={2} steps={3} showPercentage />, {container});

  expect(container.querySelector('.progress-bar-percentage')).toHaveTextContent('67%');
});

test('no testid', () => {
  const {container} = render(<ProgressBarTest helper="Helper" small steps={3} step={1} data-testid="" />);
  expect(container).not.toContain('Title');
});

