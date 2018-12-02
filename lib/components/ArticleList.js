import React from 'react';

import Article from './article';

const ArticleList = (props) => {
  const { articles, store } = props;

  return (
    <div>
      {articles && Object.values(articles).map((article) => {
        return (
          <Article
            key={article.id} 
            article={article}
            store={store}
          />
        );
      })}
    </div>
  );
};

export default ArticleList;