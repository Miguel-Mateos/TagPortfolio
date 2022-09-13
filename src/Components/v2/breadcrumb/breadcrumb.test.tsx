import React from 'react';
import {render} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import Breadcrumb, {IBreadcrumbProps, BreadcrumbItem} from './breadcrumb';

const BreadcrumbExample = (props?: IBreadcrumbProps) => {
    return (
        <Breadcrumb {...props} className="tag-ds breadcrumb-wrapper" data-testid="breadcrumb-test">
            <BreadcrumbItem href="Breadcrumb_1" data-testid="breadcrumb-1" id="breadcrumb-1" title="Breadcrumb Test 1"></BreadcrumbItem>
            <BreadcrumbItem href="Breadcrumb_2" data-testid="breadcrumb-2" id="breadcrumb-2" title="Breadcrumb Test 2"></BreadcrumbItem>
            <BreadcrumbItem href="Breadcrumb_3" data-testid="breadcrumb-3" id="breadcrumb-3" title="Breadcrumb Test 3"></BreadcrumbItem>
            <BreadcrumbItem href="Breadcrumb_4" data-testid="breadcrumb-4" id="breadcrumb-4" title="Breadcrumb Test 4"></BreadcrumbItem>
            <BreadcrumbItem href="Breadcrumb_5" data-testid="breadcrumb-truncated" id="breadcrumb-5" title="Breadcrumb title with more than 30 characters"></BreadcrumbItem>
        </Breadcrumb>
)}

test('render Breadcrumb and match snap', () => {
    const component = renderer.create(<BreadcrumbExample />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
});

test('display a dropdown menu when there is more than 4 items', () => {
    const {container} = render(<BreadcrumbExample />);

    expect(container.getElementsByClassName('breadcrumb-menu-container'));
});

test('display breadcrumb text truncated when it has more than 30 characters', () => {
    const {getByTestId} = render(<BreadcrumbExample />);
    const breadcrumbToTruncate = getByTestId('breadcrumb-truncated-link');

    expect(breadcrumbToTruncate).toHaveTextContent('Breadcrumb title with more tha...');
});


