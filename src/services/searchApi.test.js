import React from 'react';
import {getSearchResults} from './searchApi';

describe('Search API', () => {
    beforeEach(()=> {
    })
    it('returns response object', async () => {
        const expected = {
            "search" : "default",
            "suggestions":[
               {
                  "searchterm":"heren truien",
                  "nrResults":1100
               },
               {
                  "searchterm":"dames truien",
                  "nrResults":1501
               },
            ]
        };
      
          jest.spyOn(window, "fetch").mockImplementation(() => {
            const fetchResponse = {
              ok: true,
              json: () => Promise.resolve(expected)
            };
            return Promise.resolve(fetchResponse);
          });
      
          const json = await getSearchResults();
      
          expect(json).toMatchObject(expected);
    });
})