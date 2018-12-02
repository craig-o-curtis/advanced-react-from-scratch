import React from 'react';

import ArticleList from '../ArticleList';

import renderer from 'react-test-renderer';

describe('ArticleList', () => {

  const testProps = {
    articles: { a: { id: 'a'}, b: { id: 'b'} },
    store : {
      
      lookupAuthor: jest.fn( () => ({}) )      
    }
  };
  
  it('renders correctly', () => {
    const tree = renderer.create(
      <ArticleList 
        {...testProps}
      />
    ).toJSON();
    // tree output is:
    // { type: 'div',
    //   props: {},
    //   children:
    //     [ { type: 'div', props: [Object], children: [Array] },
    //       { type: 'div', props: [Object], children: [Array] } ] }

    // snapshot test
    // // NOTE - this also tests nested child components
    // push "u" to update snapshot
    expect(tree).toMatchSnapshot();

    // expect to have 2 children
    expect( tree.children.length ).toBe( 2 );
  });

});

