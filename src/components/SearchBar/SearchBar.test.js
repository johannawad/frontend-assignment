import React from 'react';
import SearchBar from './SearchBar';
import renderer from 'react-test-renderer';

describe('SearchBar', () => {

    it('renders correctly', () => {
        const tree = renderer.create(<SearchBar />).toJSON();
        expect(tree).toMatchSnapshot()
    })
})