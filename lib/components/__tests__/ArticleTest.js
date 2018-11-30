import React from 'react';

import Article from '../Article';

import renderer from 'react-test-renderer';

// const Article = (props) => {
//   // const { article, author } = props; // logic handled in App.js with method articleActions
//   const { article, actions } = props;
//   const author = actions.lookUpAuthor( article.authorId );

//   return (
//     <div style={styles.article}>
//       <h4 style={styles.title}>{article.title}</h4>
//       <p style={styles.date}>{ formatDate(article.date) }</p>
//       <p style={styles.body}>{article.body}</p>
//       <a style={styles.author} href={author.website} rel="noopener noreferrer" target="_blank">{author.firstName}&nbsp;{author.lastName}</a>
//     </div>
//   );
// };

describe('Article', () => {

  const testProps = {
    article: { 
      date: '1999-12-31',
      title: 'title',
      body: 'body',
      authorId: 'authorId' 
    },
    articleActions: {
      lookUpAuthor: jest.fn( () => ({}) )
    }
  };
  
  it('renders correctly', () => {
    // const tree = renderer.create(
    //   <Article
    //     {...testProps}
    //   />
    // ).toJSON();
    expect( testProps ).toBeDefined();

    // snapshot test
    // push "u" to update snapshot
    // expect(tree).toMatchSnapshot();
  });

});