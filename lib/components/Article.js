import React from 'react';

import moment from 'moment';

// crappy inline styles
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
  return moment(date).format('YYYY-MM-DD');
};

const Article = (props) => {
  // const { article, author } = props; // logic handled in App.js with method articleActions
  // const { article, actions } = props; // state refactor
  const { article, store } = props;
  // const author = actions.lookUpAuthor( article.authorId ); // state refactor

  const author = store.lookupAuthor( article.authorId );

  return (
    <div style={styles.article}>
      <h4 style={styles.title}>{article.title}</h4>
      <p style={styles.date}>{ formatDate(article.date) }</p>
      <p style={styles.body}>{article.body}</p>
      <a style={styles.author} href={author.website} rel="noopener noreferrer" target="_blank">{author.firstName}&nbsp;{author.lastName}</a>
    </div>
  );
};

export default Article;