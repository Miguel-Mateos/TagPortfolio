import React from 'react';
import renderer from 'react-test-renderer';
import {fireEvent, render} from '@testing-library/react';
import Accordion, {AccordionContent, AccordionHeader, IAccordionProps} from './accordion';

const accordionExample = (props?: IAccordionProps) => (
  <Accordion {...props} className="tag-ds">
    <AccordionHeader>
      Accordion example
      <span className="accordion-helper-text">Helper</span>
    </AccordionHeader>
    <AccordionContent>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos eaque beatae pariatur maiores excepturi, sequi
      natus obcaecati vel neque reiciendis, cumque quis alias exercitationem quo tempore corrupti odit atque quae, facilis
      aut molestiae incidunt rerum dolore. Blanditiis quis at est, numquam ad temporibus error iure quae? Eius unde quam
      accusantium.
    </AccordionContent>
  </Accordion>
);

test('Accordion should render', () => {
  const component = renderer.create(accordionExample());
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test('Accordion default show content should render', () => {
  const component = renderer.create(accordionExample({defaultShow: true}));
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Click accordion header', () => {
  const {container, getByTestId} = render(accordionExample({['data-testid']: 'accordion'}));
  expect(container.getElementsByClassName('accordion-content').length).toBe(0);
  const accordionHeader = getByTestId('accordion-header');
  if (accordionHeader) fireEvent.click(accordionHeader);
  expect(container.getElementsByClassName('accordion-content').length).toBe(1);
});
