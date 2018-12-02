import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

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
  const isoString = moment(date).toISOString();
  return moment(isoString).format('YYYY-MM-DD');
};

const Article = (props, context) => {
  // const { article, store } = props; // context-api refactor
  const { article } = props;
  // const author = store.lookupAuthor( article.authorId ); // context-api refactor
  const author = context.store.lookupAuthor( article.authorId );

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

// context-api refactor
// allows this component to use the globally-available context object
// used as 2nd argument after props in component def
Article.contextTypes = {
  store: PropTypes.object
};

export default Article;