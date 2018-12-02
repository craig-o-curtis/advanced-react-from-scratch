import React from 'react';

import Article from './article';

const ArticleList = (props) => {
  // const { articles, store } = props; // context-api refactor
  const { articles } = props;

  return (
    <div>
      {articles && Object.values(articles).map((article) => {
        return (
          <Article
            key={article.id} 
            article={article}
            // store={store} // context-api refactor
          />
        );
      })}
    </div>
  );
};

export default ArticleList;