import React from 'react';
import { IQuote, Quote } from './quote';
import {render} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';

const QuoteTest = (args: IQuote) => {
    return (
        <Quote {...args} data-testid='quote'/>
    );
};

const avatar = {
    title: "Name and Surname",
    subtitle: "Charge",
    img: "https://www.w3schools.com/howto/img_avatar.png",
}

test('render quote component and match snapshot', () => {
    const component = renderer.create(<QuoteTest quote="Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa commodi officiis optio magni! Perferendis doloremque similique quas magnam repellendus facere voluptatem tenetur possimus cupiditate rerum suscipit, accusamus ullam magni odio."/>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

test('render default quote component', () => {
    const { getByTestId } = render(<QuoteTest quote="Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa commodi officiis optio magni! Perferendis doloremque similique quas magnam repellendus facere voluptatem tenetur possimus cupiditate rerum suscipit, accusamus ullam magni odio."/>);
    const quote = getByTestId('quote');
    expect(quote).toBeInTheDocument();
});

test('render quote component with avatar', () => {
    const {container} = render(<QuoteTest avatar={avatar} quote="Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa commodi officiis optio magni! Perferendis doloremque similique quas magnam repellendus facere voluptatem tenetur possimus cupiditate rerum suscipit, accusamus ullam magni odio."/>);
    const quote = container.getElementsByClassName('avatar-wrapper')[0];
    expect(quote).toBeInTheDocument();
});

