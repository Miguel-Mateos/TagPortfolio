import {fireEvent, render} from '@testing-library/react';
import React from 'react';
import renderer from 'react-test-renderer';
import Tabs, {ITabsProps, TabItem} from './tabs';

const tabsExample = (props?: ITabsProps) => {
  return (
    <Tabs {...props} className="tag-ds">
      <TabItem data-testid="tab1" id="tab1" title="Tab 1">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur saepe doloribus nisi quis consectetur numquam
          blanditiis accusamus dolor ipsam aspernatur aperiam aut accusantium, itaque quasi magni enim exercitationem
          repellat? Obcaecati. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet,
          consectetur adipisicing elit.
        </p>
      </TabItem>
      <TabItem data-testid="tab2" id="tab2" title="Tab 2">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, neque accusantium fugiat eveniet dignissimos quas!
          Rem cupiditate corrupti, molestias dolores distinctio excepturi perspiciatis numquam placeat ipsa necessitatibus
          facilis nobis optio quisquam, veritatis incidunt officiis at dolore accusantium porro sit, eaque qui atque quas
          suscipit. Voluptatibus asperiores quia dicta ducimus distinctio?
        </p>
      </TabItem>
      <TabItem collapsed data-testid="tab3" id="tab3" title="Tab 3">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, neque accusantium fugiat eveniet dignissimos quas!
          Rem cupiditate corrupti, molestias dolores distinctio excepturi perspiciatis numquam placeat ipsa necessitatibus
          facilis nobis optio quisquam, veritatis incidunt officiis at dolore accusantium porro sit, eaque qui atque quas
          suscipit. Voluptatibus asperiores quia dicta ducimus distinctio? Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Minima, neque accusantium fugiat eveniet dignissimos quas!
        </p>
      </TabItem>
      <TabItem collapsed data-testid="tab4" id="tab4" title="Tab 4">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, neque accusantium fugiat eveniet dignissimos quas!
          Rem cupiditate corrupti, molestias dolores distinctio excepturi perspiciatis numquam placeat ipsa necessitatibus
          facilis nobis optio quisquam, veritatis incidunt officiis at dolore accusantium porro sit, eaque qui atque quas
          suscipit. Voluptatibus asperiores quia dicta ducimus distinctio?
        </p>
      </TabItem>
    </Tabs>
  );
};

const tabsExampleWithUniqueChild = (props?: ITabsProps) => {
  return (
    <Tabs {...props}>
      <TabItem data-testid="tab1" id="tab1" title="Tab 1">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur saepe doloribus nisi quis consectetur numquam
          blanditiis accusamus dolor ipsam aspernatur aperiam aut accusantium, itaque quasi magni enim exercitationem
          repellat? Obcaecati. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet,
          consectetur adipisicing elit.
        </p>
      </TabItem>
    </Tabs>
  );
};

const tabsExampleWithUniqueChildCollapsed = (props?: ITabsProps) => {
  return (
    <Tabs {...props}>
      <TabItem collapsed data-testid="tab1" id="tab1" title="Tab 1">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur saepe doloribus nisi quis consectetur numquam
          blanditiis accusamus dolor ipsam aspernatur aperiam aut accusantium, itaque quasi magni enim exercitationem
          repellat? Obcaecati. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet,
          consectetur adipisicing elit.
        </p>
      </TabItem>
    </Tabs>
  );
};

test('Tabs horizontal should render', () => {
  const component = renderer.create(tabsExample());
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Tabs horizontal with unique child should render', () => {
  const component = renderer.create(tabsExampleWithUniqueChild());
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Tabs horizontal with unique child collapsed should render', () => {
  const component = renderer.create(tabsExampleWithUniqueChildCollapsed());
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Tabs vertical should render', () => {
  const component = renderer.create(tabsExample({vertical: true}));
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Select tab 2 ', () => {
  const {getByTestId} = render(tabsExample());

  const tabBtn2 = getByTestId('tab2');

  if (tabBtn2) fireEvent.click(tabBtn2);

  expect(getByTestId('tab2-content')).toBeDefined();
});

