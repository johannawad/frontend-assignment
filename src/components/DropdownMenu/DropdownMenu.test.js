import React from 'react';
import DropdownMenu from './DropdownMenu';
import renderer from 'react-test-renderer';

describe('SearchBar', () => {
    it('renders correctly without any items', () => {
        const tree = renderer.create(<DropdownMenu />).toJSON();
        expect(tree).toMatchSnapshot()
    })

    it('renders correctly with items', () => {
        const items = [{title: 'Title', quantity: 1}, {title: 'Title', quantity: 1}]
        const tree = renderer.create(<DropdownMenu items={items} />).toJSON();
        expect(tree).toMatchSnapshot()
    })

    it('renders without children when items do not have title and quantity props', () => {
        const items = [{someProp: 'Title', someOtherProp: 1}]
        const tree = renderer.create(<DropdownMenu items={items} />).toJSON();
        const content = tree.children[0].children[0].children;
        expect(content).toBeNull();
    })


    it('renders with 2 children when items have title and quantity props', () => {
        const items = [{title: 'Title', quantity: 1}]
        const tree = renderer.create(<DropdownMenu items={items} />).toJSON();
        const content = tree.children[0].children[0].children;
        expect(content.length).toEqual(2);
    })
})