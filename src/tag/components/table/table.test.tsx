import React from 'react';
import { Table, ITableProps } from './table';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

const leftElements = [
  <div
    key={1}
    className='checkbox-container'
  >
    <input id="checkbox" onChange={(e) => console.log(0, e)} type="checkbox" />
  </div>,

];

const rightElements = [
  <div
    key={1}
    className='checkbox-container'
  >
    <input id="checkbox" onChange={(e) => console.log(0, e)} type="checkbox" />
  </div>,
];

const elements = [
  [ 'Content',
    'Content',
    'Content',
    'Content',
    'Content',
    'Content',
    'Content'
  ],
  [ 'Content',
    'Content',
    'Content',
    'Content',
    'Content',
    'Content',
    'Content'
  ],
  [ 'Content',
    'Content',
    'Content',
    'Content',
    'Content',
    'Content',
    'Content'
  ]
];

const headElements = [
  'Label',
  'Label',
  'Label',
  'Label',
  'Label',
  'Label',
  'Label',
];

const TableTest = (args: ITableProps) => {
  return <div className="tag-ds App" style={{ height: '30vh', width: '50vw'}}>
    <Table.Wrapper {...args}>
      <Table.Head>
        <Table.Row>
          {leftElements.map(elem => <Table.Element key={'test'}>{elem}</Table.Element>)}
          {headElements.map(elem => <Table.Element key={'test'}>{elem}</Table.Element>)}
          {rightElements.map(elem => <Table.Element key={'test'}>{elem}</Table.Element>)}
        </Table.Row>
      </Table.Head>
      <Table.Body data-testid="table">
        {elements.map((_,idx) => (
          <Table.Row key={idx}>
            {leftElements.map(elem => <Table.Element key={'test'}>{elem}</Table.Element>)}
            {_.map(elem => <Table.Element key={idx+'string'}>{elem}</Table.Element>)}
            {rightElements.map(elem => <Table.Element key={'test'}>{elem}</Table.Element>)}
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Wrapper>
  </div>;
};

const InvalidTableTest = (args: ITableProps) => {
  return <div className="tag-ds App" style={{ height: '30vh', width: '50vw'}}>
    <Table.Wrapper {...args}>
      <Table.Head>
        <Table.Row>
          {leftElements.map(elem => <Table.Element key={'test'}>{elem}</Table.Element>)}
          {headElements.map(elem => <Table.Element key={'test'}>{elem}</Table.Element>)}
          {rightElements.map(elem => <Table.Element key={'test'}>{elem}</Table.Element>)}
        </Table.Row>
      </Table.Head>
      <Table.Body data-testid="table">
        {elements.map((_,idx) => (
          <div key={idx}>
            {leftElements.map(elem => <Table.Element key={'test'}>{elem}</Table.Element>)}
            {_.map(elem => <Table.Element key={idx+'string'}>{elem}</Table.Element>)}
            {rightElements.map(elem => <Table.Element key={'test'}>{elem}</Table.Element>)}
          </div>
        ))}
      </Table.Body>
    </Table.Wrapper>
  </div>;
};

const TheadTableTest = (args: ITableProps) => {
  return <div className="tag-ds App" style={{ height: '30vh', width: '50vw'}}>
    <Table.Wrapper {...args}>
      <Table.Head>
        <Table.Row>
          {leftElements.map(elem => <Table.Element key={'test'}>{elem}</Table.Element>)}
          {headElements.map(elem => <Table.Element key={'test'}>{elem}</Table.Element>)}
          {rightElements.map(elem => <Table.Element key={'test'}>{elem}</Table.Element>)}
        </Table.Row>
      </Table.Head>
      <Table.Body data-testid="table">
        {elements.map((_,idx) => (
          <tr key={idx}>
            {leftElements.map(elem => <Table.Element key={'test'}>{elem}</Table.Element>)}
            {_.map(elem => <Table.Element key={idx+'string'}>{elem}</Table.Element>)}
            {rightElements.map(elem => <Table.Element key={'test'}>{elem}</Table.Element>)}
          </tr>
        ))}
      </Table.Body>
    </Table.Wrapper>
  </div>;
};


test('renders and matches snapshot', () => {
  const component = renderer.create(<TableTest/>);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('renders and click on row', () => {
  const { getByTestId } = render(<TableTest data-testid='table'/>);
  const row = getByTestId('table-body-row-1');
  userEvent.click(row);
  expect(row).toHaveClass('active');
});

test('render disabled table', () => {
  const { getByTestId } = render(<TableTest disabled={true} data-testid='table'/>);
  const disabledTable = getByTestId('table-wrapper');
  expect(disabledTable).toHaveAttribute('data-disabled', 'true');
});

test('render with invalid body', () => {
  const { getByTestId } = render(<InvalidTableTest disabled={true} data-testid='table'/>);
  const disabledTable = getByTestId('table-wrapper');
  expect(disabledTable).toHaveAttribute('data-disabled', 'true');
});

test('render with invalid thead', () => {
  const { getByTestId } = render(<TheadTableTest disabled={true} data-testid='table'/>);
  const disabledTable = getByTestId('table-wrapper');
  expect(disabledTable).toHaveAttribute('data-disabled', 'true');
});