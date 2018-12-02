import React from 'react';

import Article from './article';

const ArticleList = (props) => {
  const { articles } = props;

  return (
    <div>
      {Object.values(articles).map((article) => {
        return (
          <Article
            key={article.id} 
            article={article}
          />
        );
      })}
    </div>
  );
};

export default ArticleList;