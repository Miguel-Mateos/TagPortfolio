import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import Loader, {ILoaderProps} from './loader';

const LoaderExample = (props: ILoaderProps) => (
  <Loader
    percentage={props.percentage}
    className="tag-ds"
    data-testid="loader-test"
    spinner={props.spinner}
    title={props.title}
    subtitle={props.subtitle}
    success={props.success}
    error={props.error}
  />
);

test('render Loader and match snap', () => {
  const component = renderer.create(<LoaderExample />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('loader small', () => {
  const {getByTestId} = render(<LoaderExample percentage={{value: 50, show: false}} />);
  const loader = getByTestId('loader-test-svg-container');
  expect(loader).toHaveClass('svg-container_circular');
});

test.skip('correct interval load', () => {
  const {getByTestId} = render(<LoaderExample />);

  const loadingProgress = getByTestId('loader-test-progress');

  let currentProgress = 0;
  const timer = setInterval(() => {
    if (currentProgress === 100) clearInterval(timer);
    expect(loadingProgress).toHaveClass(`loader-background_${currentProgress}`);
    currentProgress += 25;
  }, 2000);

  expect(currentProgress).toBeLessThanOrEqual(100);
});

test('render loader automatically', () => {
  const {getByTestId} = render(<LoaderExample title="Test Title" subtitle="Test subtitle" automatic />);
  const loader = getByTestId('loader-test-svg-container');
  setTimeout(() => {
    expect(loader).toHaveClass('success');
  }, 5000);
});

test('render title and subtitle', () => {
  const {getByTestId} = render(<LoaderExample title="Test Title" subtitle="Test subtitle" />);

  const title = getByTestId('loader-test-title');
  const subtitle = getByTestId('loader-test-subtitle');
  expect(title).toHaveTextContent('Test Title');
  expect(subtitle).toHaveTextContent('Test subtitle');
});

describe('finish loading both cases', () => {
  test('success case', () => {
    const {getByTestId} = render(
      <LoaderExample title="Test Title" subtitle="Test subtitle" percentage={{value: 100, show: true}} />
    );
    setTimeout(() => {
      const loader = getByTestId('loader-test-svg-container');
      expect(loader).toHaveClass('success');
    }, 2000);
  });

  test('error case', () => {
    const {getByTestId} = render(
      <LoaderExample title="Test Title" error subtitle="Test subtitle" percentage={{value: 100, show: true}} />
    );
    setTimeout(() => {
      const loader = getByTestId('loader-test-svg-container');
      expect(loader).toHaveClass('error');
    }, 2000);
  });
});

test('render spinner', () => {
  const {getByTestId} = render(<LoaderExample spinner />);
  const loader = getByTestId('loader-test-spinner');
  screen.debug();
  expect(loader).toHaveClass('spinner');
});
