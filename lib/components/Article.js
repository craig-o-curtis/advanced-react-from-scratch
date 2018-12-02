import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import storeProvider from './storeProvider';

// // put outside of component 
// // so React doesn't recreate this object
// // on each render

const styles = {
  article: {
    paddingBottom: 10,
    borderBottomStyle: 'solid',
    borderBottomColor: '#aaa',
    borderBottomWidth: 1,
    marginBottom: 10
  },
  title: {
    fontWeight: 'bold'
  },
  date: {
    fontSize: '0.8rem',
    color: '#888'
  },
  body: {
    paddingLeft: 20
  },
  author: {
    paddingTop: 10,
    paddingBottom: 20
  }
};
// pull into global space so doesn't redefine on each render
const formatDate = (date) => {
  var isoDate = moment( new Date(date)).toISOString();
  return moment( isoDate ).format( 'YYYY-MM-DD' );
};

// const Article = (props, context) => {
const Article = ( props ) => { 
  const { article, store } = props;
  const author = store.lookupAuthor( article.authorId ); // destructure store from context object

  return (
    <div style={styles.article}>
      <h4 style={styles.title}>{article.title}</h4>
      <p style={styles.date}>{ formatDate(article.date) }</p>
      <p style={styles.body}>{article.body}</p>
      <a style={styles.author} href={author.website} rel="noopener noreferrer" target="_blank">{author.firstName}&nbsp;{author.lastName}</a>
    </div>
  );
};

Article.propTypes = {
  article: PropTypes.shape({
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired
  })
};

// const ArticleContainer = storeProvider( Article );

// // higher-order component
// // responsible for extracting the store out of the context
// const ArticleContainer = ( props, { store } ) => { // destructure store from context object
//   return (
//     <Article
//       {...props}
//       store={store}
//     />
//   );
// };

// // allows this component to use the globally-available context object
// // used as 2nd argument after props in component def
// ArticleContainer.contextTypes = {
//   store: PropTypes.object
// };

export default storeProvider( Article );