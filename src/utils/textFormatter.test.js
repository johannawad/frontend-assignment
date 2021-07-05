import React from 'react';
import {highlightQueryMatch} from './textFormatter';

describe('textFormatter', () => {
    const text = 'text goes here';
    it('returns highlighted text when the match is at the start of the string', () => {
    const query = 'text'
    const expectedElement=<div>text<b> goes here</b></div>
    expect(highlightQueryMatch(text,query).toString()).toEqual(expectedElement.toString());
    });

    it('returns highlighted text when the match is in the middle of the string', () => {
        const query = 'goes'
        const expectedElement=<div><b>text </b>goes<b> here</b></div>
        expect(highlightQueryMatch(text,query).toString()).toEqual(expectedElement.toString());
    });

    it('returns highlighted text when the match is at the end of the string', () => {
        const query = 'here'
        const expectedElement=<div><b>text goes </b>here</div>
        expect(highlightQueryMatch(text,query).toString()).toEqual(expectedElement.toString());
    });

    it('returns formatted text with no highlights when there is no match', () => {
        const query = 'query'
        const expectedElement=<div><b>text goes here</b></div>
        expect(highlightQueryMatch(text,query).toString()).toEqual(expectedElement.toString());
    });
});