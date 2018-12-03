import React from 'react';

import ArticleList from '../ArticleList';
/**
 * Note - shallow render looks at ArticleContainer component, not Article
 */

// import renderer from 'react-test-renderer'; // enzyme refactor
// import Adapter from 'enzyme-adapter-react-15';
// setup file
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

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
  };
  
  it('renders correctly', () => {
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
    expect( element.props.children.length ).toEqual( 2 );
    expect( wrapper.find('ArticleContainer').length ).toEqual( 2 );
    expect( wrapper ).toMatchSnapshot();
  });

});

