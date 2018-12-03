import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import storeProvider from './storeProvider';

// // put styles const outside of component 
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

// store passed in here via wrapper component from storeProvider
const Article = ( props ) => { 
  // const { article, store } = props; // container-store-method refactor
  // const author = store.lookupAuthor( article.authorId ); // container-store-method refactor
  const { article, author } = props; // container-store-method refactor
  // function below component def
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

// store arg used in storeProvider, received from context object from App-level
// originalProps from direct parent props of storeProvider
function getExtraProps( store, originalProps ) {
  return {
    author: store.lookupAuthor( originalProps.article.authorId )
  };
}

// functional programming trick to mack storeProvider return a function
//** passes child component function up to storeProvider container component builder function */
export default storeProvider( getExtraProps )( Article );