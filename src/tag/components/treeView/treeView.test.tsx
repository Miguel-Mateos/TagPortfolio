import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import { Tree } from './treeView';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

const TreeViewTest = (args: any) => {
  return (
    <div className='tag-ds'>
      <Tree.Wrap>
        <Tree.Element data-testid='tree-element-1' name='Item Tree'></Tree.Element>
        <Tree.Element name='Item Tree'></Tree.Element>
        <Tree.Element data-testid='tree-element-2' name='Item Tree'>
          <Tree.Element data-testid='tree-element-3' name='Sub item'>
            <Tree.Element data-testid='tree-element-4' onClick={args.onClick} name='Sub item 2' />
          </Tree.Element>
        </Tree.Element>
      </Tree.Wrap>
    </div>
  );
};

const TreeViewTestNonRenderable = (args: any) => {
  return (
    <div className='tag-ds'>
      <Tree.Wrap>
        <li data-testid='tree-element-1'>item tree</li>
      </Tree.Wrap>
    </div>
  );
};

test('render treeView and match snapshot', () => {
  const component = renderer.create(<TreeViewTest />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('on click function Tree Element', () => {
  const fn = jest.fn();
  const { getByTestId } = render(<TreeViewTest onClick={fn}/>);
  userEvent.click(getByTestId('tree-element-2'));
  userEvent.click(getByTestId('tree-element-3'));
  userEvent.click(getByTestId('tree-element-4'));
  expect(fn).toBeCalledTimes(1);
});

test('non renderable Tree Element', () => {
  const { queryByText } = render(<TreeViewTestNonRenderable />);
  const element = queryByText(/item tree/i);
  expect(element).toBeNull();
});