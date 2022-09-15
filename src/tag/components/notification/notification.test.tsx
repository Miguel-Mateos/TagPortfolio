import React, {useState} from 'react';
import '@testing-library/jest-dom/extend-expect';
import {Notification} from './notification';
import NBody from './notificationBody';
import NFooter from './notificationFooter';
import NHeader from './notificationHeader';
import {fireEvent, render} from '@testing-library/react';

const NotificationSnap = () => {
  const [openNotification, setOpenNotification] = useState(false);
  return (
    <div id="root">
      <button data-testid="show-notification" onClick={() => setOpenNotification(true)}></button>
      <Notification data-testid="notification" className="tag-ds" show={openNotification}>
        <NHeader>This is a Notification</NHeader>
        <NBody>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus doloribus officiis architecto</NBody>
        <NFooter>
          <button data-testid="close-notification" onClick={() => setOpenNotification(false)}>
            Close Button
          </button>
        </NFooter>
      </Notification>
    </div>
  );
};

const NotificationExample = (props: any) => (
  <Notification data-testid="notification" show {...props}>
    <NHeader>This is a Notification</NHeader>
    <NBody>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus doloribus officiis architecto</NBody>
    <NFooter>
      <a href="#" target="_self">
        Link 1
      </a>
    </NFooter>
  </Notification>
);

const NotificationExampleDouble = (props: any) => (
  <Notification data-testid="notification" show {...props}>
    <NHeader>This is a Notification</NHeader>
    <NBody>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus doloribus officiis architecto</NBody>
    <NFooter>
      <a href="#" target="_self">
        Link 1
      </a>
      <a href="#" target="_self">
        Link 2
      </a>
    </NFooter>
  </Notification>
);

const InlineNotification = (props: any) => (
  <Notification data-testid="notification" show {...props}>
    <NHeader>This is a Notification</NHeader>
    <NFooter>
      <a href="#" target="_self">
        Link 1
      </a>
      <a href="#" target="_self">
        Link 2
      </a>
    </NFooter>
  </Notification>
);

const InlineNotificationLink = (props: any) => (
  <Notification data-testid="notification" show {...props}>
    <NHeader>This is a Notification</NHeader>
    <NFooter>
      <a href="#" target="_self">
        Link 1
      </a>
    </NFooter>
  </Notification>
);

test('render Notification and match snapshot', () => {
  const {container, getByTestId} = render(<NotificationSnap />);
  const notificationButton = getByTestId('show-notification');
  if (notificationButton) fireEvent.click(notificationButton);
  expect(getByTestId('notification')).toBeDefined();
  const closeNotification = getByTestId('close-notification');
  if (closeNotification) fireEvent.click(closeNotification);
  expect(container.getElementsByClassName('notification').length).toBe(0);
});

describe('renders double link notification', () => {
  test('on default notification', () => {
    const {getByText} = render(<NotificationExampleDouble />);

    expect(getByText(/Link 1/i)).toBeInTheDocument();
    expect(getByText(/Link 2/i)).toBeInTheDocument();
  });
  test('on inline notification', () => {
    const {getByText} = render(<InlineNotification />);
    expect(getByText(/Link 1/i)).toBeInTheDocument();
    expect(getByText(/Link 2/i)).toBeInTheDocument();
  });
});

describe('renders one link notification', () => {
  test('on default notification', () => {
    const {queryByText, getByText} = render(<NotificationExample />);

    expect(getByText(/Link 1/i)).toBeInTheDocument();
    expect(queryByText(/Link 2/i)).toBeNull();
  });
  test('on inline notification', () => {
    const {getByText, queryByText} = render(<InlineNotificationLink />);
    expect(getByText(/Link 1/i)).toBeInTheDocument();
    expect(queryByText(/Link 2/i)).toBeNull();
  });
});

describe('renders all states on default notification', () => {
  test('render success', () => {
    const {getByTestId} = render(<NotificationExample success iconClose />);
    const side = getByTestId('notification');
    expect(side).toHaveClass('notification_success');
  });

  test('render error', () => {
    const {getByTestId} = render(<NotificationExample error iconClose />);
    const side = getByTestId('notification');
    expect(side).toHaveClass('notification_error');
  });

  test('render warning', () => {
    const {getByTestId} = render(<NotificationExample warning iconClose />);
    const side = getByTestId('notification');
    expect(side).toHaveClass('notification_warning');
  });

  test('render info', () => {
    const {getByTestId} = render(<NotificationExample info iconClose />);
    const side = getByTestId('notification');
    expect(side).toHaveClass('notification_info');
  });

  test('render read', () => {
    const {getByTestId} = render(<NotificationExample read iconClose />);
    const side = getByTestId('notification');
    expect(side).toHaveClass('notification_read');
  });
});

