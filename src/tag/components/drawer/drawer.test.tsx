import React from 'react';
import Drawer, {IDrawerProps} from './drawer';
import DrawerHeader from './drawerHeader';
import DrawerBody from './drawerBody';
import {fireEvent, render} from '@testing-library/react';

const DrawerTest = (props: IDrawerProps) => {
  return (
    <Drawer className="tag-ds" data-testid="drawer-test" {...props}>
      <DrawerHeader data-testid="drawer-header">My Title</DrawerHeader>
      <DrawerBody data-testid="drawer-body">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio aperiam libero hic dolorum veritatis, necessitatibus,
        neque suscipit autem nostrum repellat corporis nihil, a saepe est. Autem beatae sunt debitis quasi!
      </DrawerBody>
    </Drawer>
  );
};

test('Display drawer with close button', () => {
  const {getByTestId} = render(<DrawerTest open onClose={() => console.log('onClose')} />);
  const closeBtn = getByTestId('drawer-test-icon-close');
  expect(closeBtn).toBeDefined();
});

test('Close drawer when close button is clicked', () => {
  const {container, getByTestId} = render(<DrawerTest open onClose={() => console.log('onClose')} />);
  const closeBtn = getByTestId('drawer-test-icon-close');
  expect(closeBtn).toBeDefined();
  expect(getByTestId('drawer-test')).toBeDefined();
  if (closeBtn) fireEvent.click(closeBtn);
  expect(container.getElementsByClassName('drawer-test').length).toBe(0);
});

test('Display drawer with back button', () => {
  const {getByTestId} = render(
    <DrawerTest open onClose={() => console.log('onClose')} onBackDrawer={() => console.log('onBackDrawer')} />
  );
  const backBtn = getByTestId('drawer-test-icon-close');
  expect(backBtn).toBeDefined();
});

test('Close drawer when overlay is clicked', () => {
  const {container} = render(
    <DrawerTest open onClose={() => console.log('onClose')} onBackDrawer={() => console.log('onBackDrawer')} />
  );
  fireEvent.mouseDown(document.body);
  expect(container.getElementsByClassName('drawer-test').length).toBe(0);
});

