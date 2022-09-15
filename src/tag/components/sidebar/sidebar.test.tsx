import React from 'react';
import renderer from 'react-test-renderer';
import {fireEvent, render} from '@testing-library/react';
import Sidebar, {ISidebarProps, SidebarButton, SidebarDivider, SidebarLogo} from './sidebar';

const sidebarExample = (props?: ISidebarProps) => (
  <Sidebar data-testid="sidebar" {...props} className="tag-ds">
    <SidebarLogo>
      <img
        src="https://www-prd-amz930-com.azureedge.net/es-es/-/media/project/adeccogroup/horizontal-the-adecco-group-brand-mark-land-rgb.png?h=475&w=1385&modified=00010101000000&hash=950A28C29AD61BBB9CB374DA671A06D1"
        alt="logo"
      />
    </SidebarLogo>
    <SidebarButton id="button1" icon={<span className="material-icons">home</span>} label="Home" href="#1" />
    <SidebarButton id="button2" icon={<span className="material-icons">home</span>} label="Home" href="#2" />
    <SidebarButton id="button3" icon={<span className="material-icons">home</span>} label="Home" href="#3" />
    <SidebarButton id="button4" disabled icon={<span className="material-icons">home</span>} label="Home" href="#4" />
    <SidebarDivider>divider text</SidebarDivider>
    <SidebarButton id="button5" icon={<span className="material-icons">home</span>} label="Home" href="#5" />
    <SidebarButton id="button6" icon={<span className="material-icons">home</span>} label="Home" href="#6" />
    <SidebarButton id="button7" icon={<span className="material-icons">home</span>} label="Home" href="#7" />
    <SidebarButton
      id="button8"
      data-testid="button8"
      icon={<span className="material-icons">home</span>}
      label="Home"
      href="#8"
    />
    <SidebarButton id="button9" icon={<span className="material-icons">home</span>} label="Home" href="#12" />
    <SidebarButton id="button10" icon={<span className="material-icons">home</span>} label="Home" href="#123" />
    <SidebarButton id="button11" icon={<span className="material-icons">home</span>} label="Home" href="#145" />
  </Sidebar>
);

test('Sidebar should render', () => {
  const component = renderer.create(sidebarExample());
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Sidebar collapsed should render', () => {
  const component = renderer.create(sidebarExample());
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Sidebar default item should render', () => {
  const component = renderer.create(sidebarExample({defaultShow: true}));
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Click in sidebar item ', () => {
  const {getByTestId} = render(sidebarExample());

  const itemBtn = getByTestId('sidebar-button-2');

  if (itemBtn) {
    fireEvent.click(itemBtn);
    expect(itemBtn.className.trim()).toBe('sidebar-button_selected');
  }
});

test('Click in collapsed btn ', () => {
  const {container, getByTestId} = render(sidebarExample());

  const itemBtn = getByTestId('sidebar-collapsed-btn');
  expect(container.getElementsByClassName('sidebar').length).toBe(1);
  if (itemBtn) {
    fireEvent.click(itemBtn);
  }
  expect(container.getElementsByClassName('sidebar_collapsed').length).toBe(1);
});
