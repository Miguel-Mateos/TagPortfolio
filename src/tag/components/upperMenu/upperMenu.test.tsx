import React, {useState} from 'react';
import UpperMenu, {INotification} from './upperMenu';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';
import {render} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
const imageURI = 'https://www.w3schools.com/howto/img_avatar.png';

const notifications: INotification[] = [
  {
    header: 'Calendar availability',
    body: 'Enter your profile to share your availability',
    type: 'error',
    show: true,
    created: new Date(),
  },
  {
    header: 'Header 2',
    body: 'Enter your profile to share your availability',
    type: 'info',
    show: true,
    created: new Date(),
  },
  {
    header: 'Header 3',
    body: 'Enter your profile to share your availability',
    type: 'read',
    show: true,
    created: new Date(),
  },
  {
    header: 'Header 4',
    body: 'Enter your profile to share your availability',
    footer: <button>Footer button</button>,
    type: 'warning',
    show: true,
    created: new Date(),
  },
];

const TestUpperMenu = (props: any) => {
  const [show, setShow] = useState(false);
  return (
    <UpperMenu
      notifications={{
        items: notifications,
        title: 'Overflow Title',
        action: 'OV Action',
        setShowItems: () => setShow(!show),
        showItems: show,
      }}
      data-testid="upper-menu"
      options={[{name: 'Option', onClick: () => console.log('option')}]}
      avatar={{img: imageURI, title: 'Patrick Doe', subtitle: 'Regional Manager'}}
      title={props.title}
    />
  );
};

test('Upper Menu should render', () => {
  const component = renderer.create(<TestUpperMenu title="Section Name" />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('open overflowMenu', () => {
  const {getByTestId, getByText} = render(<TestUpperMenu title="Section Name" />);
  const notifIcon = getByTestId('upper-menu-notif-icon');
  userEvent.click(notifIcon);
  expect(getByText(/Calendar availability/i)).toBeInTheDocument();
});

test('open dropdown menu', () => {
  const {container, getByTestId} = render(<TestUpperMenu title="Section Name" />);
  const moreInfoButton = getByTestId('upper-menu-more-info');
  userEvent.click(moreInfoButton);
  expect(container.getElementsByClassName('dropdown-menu').length).toBe(1);
});

test('render upper menu without title', () => {
  const {queryByTestId} = render(<TestUpperMenu />);
  const upperMenuTitle = queryByTestId('upper-menu-title');
  expect(upperMenuTitle).not.toBeInTheDocument();
});

