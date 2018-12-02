import React from 'react';

import ArticleList from '../ArticleList';
// import Article from '../Article';

// import renderer from 'react-test-renderer'; // enzyme refactor
// import Adapter from 'enzyme-adapter-react-15';
// setup file
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

// Enzyme.configure({ adapter: new Adapter() });

describe('ArticleList', () => {
  // use unit testing - shallow rendering
  // instead of integration testing - full tree render testing

  const testProps = {
    articles: { 
      // a: { id: 'a' }, // deprecated - must pass in mock props for proptypes to work
      // b: { id: 'b' } // deprecated - must pass in mock props for proptypes to work
      a: { id: 'a', title: 'title', date: 'date', body: 'body' },
      b: { id: 'b', title: 'title', date: 'date', body: 'body' }
    },
    // enzyme refactor
    // store : {
    //   lookupAuthor: jest.fn( () => ({}) )      
    // }
  };

  // fake proptypes of Article -- import Article 
  // FAILS
  // Article.propTypes = {};
  
  it('renders correctly', () => {
    // // enzyme refactor
    // const tree = renderer.create(
    //   <ArticleList 
    //     {...testProps}
    //   />
    // ).toJSON();
    // // tree output is:
    // // { type: 'div',
    // //   props: {},
    // //  children:
    // //     [ { type: 'div', props: [Object], children: [Array] },
    // //       { type: 'div', props: [Object], children: [Array] } ] }
    // // snapshot test
    // // NOTE - this also tests nested child components
    // // push "u" key to update snapshot
    // expect(tree).toMatchSnapshot();
    // // expect to have 2 children
    // expect( tree.children.length ).toBe( 2 );

    // enzyme refactor
    const wrapper = shallow(
      <ArticleList {...testProps} />
    );
    // wrapper shape
    // deprecated - wrapper.node.props
    // NEW SHAPE - wrapper.getElement()
    // {}
    // { '$$typeof': Symbol(react.element),
    //   type: 'div',
    //   key: null,
    //   ref: null,
    //   props: { children: [ [Object], [Object] ] },
    //   _owner: null,
    //   _store: {} }
    const element = wrapper.getElement();
    expect( element.type ).toEqual( 'div' );
    expect( element.props.children.length ).toEqual( 2 );
    expect( wrapper.find('Article').length ).toEqual( 2 );
    expect( wrapper ).toMatchSnapshot();

  });




});

