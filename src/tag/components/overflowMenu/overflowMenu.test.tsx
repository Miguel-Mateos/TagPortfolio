import React from 'react';
import { OverflowMenu } from './overflowMenu';
import { fireEvent, render } from '@testing-library/react';
import renderer from 'react-test-renderer';

const OverflowElement = ({bg}: {bg?: string}) => {
  return (
    <div className='o-f-container'
      style={{ backgroundColor: bg||'white', padding: '8px', borderRadius: '8px', width: '300px'}}>
      <p style={{ color: '#a8acb4'}}>Recruitment Process</p>
      <p className='subtitle' style={{ fontWeight: 'bold'}}>Notification Title Lorem</p>
      <div style={{ display: 'flex', alignItems: 'center', gap: '24px'}}>
        <div className='o-f-button'>SEMANTIC</div>
        <span style={{ color: '#a8acb4'}}>6 days left</span>
        <span className='material-icons' style={{ marginLeft: 'auto'}}>keyboard_arrow_right</span>
      </div>
    </div>
  );
};


const OverflowModalTest: React.FC<any> = (props) => (
  <OverflowMenu title='Overflow Title' onAction={props.onAction}
    action='Action/Link' onClose={props.onClose} data-testid={props.testId}>
    <OverflowElement bg='#f8f8f9'/>
    <OverflowElement />
    <OverflowElement bg='#f8f8f9'/>
  </OverflowMenu>
);

test('OverflowModal Test renders and match snapshot', () => {
  const container = renderer.create(<OverflowModalTest onClose={() => null}/>);
  const tree = container.toJSON();
  expect(tree).toMatchSnapshot();
});

test('close button function calls to onClose', () => {
  const onClose = jest.fn();

  const { getByTestId } = render(<OverflowModalTest testId='overflow-menu' onClose={onClose}/>);

  const closeButton = getByTestId('overflow-menu-close-button');

  fireEvent.click(closeButton);

  expect(onClose).toBeCalledTimes(1);
});

test('action button function calls to onAction', () => {
  const onAction = jest.fn();

  const { getByTestId } = render(<OverflowModalTest testId='overflow-menu' onAction={onAction}/>);

  const closeButton = getByTestId('overflow-menu-action-button');

  fireEvent.click(closeButton);

  expect(onAction).toBeCalledTimes(1);
});