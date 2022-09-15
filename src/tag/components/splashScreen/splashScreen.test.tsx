import React from 'react';
import {ISplashScreen, SplashScreen} from './splashScreen';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import {render} from '@testing-library/react';

const imageURI = 'https://www.w3schools.com/howto/img_avatar.png';
const backgroundImageURI = 'https://www.w3schools.com/html/img_girl.jpg';
const backgroundVideoURI =
  'https://assets.mixkit.co/videos/preview/mixkit-clouds-in-the-sky-flowing-with-the-wind-21584-large.mp4';

const SplashScreenTest = (props: ISplashScreen) => {
  window.innerWidth = 400;
  return <SplashScreen logoURI={props.logoURI} data-testid="splash-screen" className="tag-ds" />;
};

test('splash screen component should render', () => {
  const component = renderer.create(<SplashScreenTest backgroundImageURI={backgroundImageURI} logoURI={imageURI} />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('render default splash screen', async () => {
  const {getByTestId} = render(<SplashScreenTest logoURI={imageURI} />);
  const component = getByTestId('splash-screen-container');
  expect(component).toBeDefined();
});

test('render splash screen with background image', async () => {
  const {getByTestId} = render(<SplashScreenTest logoURI={imageURI} backgroundImageURI={backgroundImageURI} />);
  const component = getByTestId('splash-screen-container');
  expect(component).toBeDefined();
  expect(backgroundImageURI).toBeDefined();
});

test('render splash screen with background video', async () => {
  const {container} = render(<SplashScreenTest logoURI={imageURI} backgroundVideoURI={backgroundVideoURI} />);
  const component = container.getElementsByClassName('video-wrapper');
  expect(component).toBeDefined();
});
