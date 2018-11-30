import React from 'react';

import Article from './article';

const ArticleList = (props) => {
  // const { articles, authors } = props;
  const { articles, articleActions } = props;

  return (
    <div>
      {Object.values(articles).map((article) => {
        return (
          <Article
            key={article.id} 
            article={article}
            // author={authors[article.authorId]} // logic handled in App.js with method articleActions
            actions={articleActions}
          />
        );
      })}
    </div>
  );
};

export default ArticleList;