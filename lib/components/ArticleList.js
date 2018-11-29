import React from 'react';

import Article from './article';

const ArticleList = (props) => {
  const { articles, authors } = props;

  return (
    <div>
      {Object.values(articles).map((article) => {
        return (
          <Article
            key={article.id} 
            article={article}
            author={authors[article.authorId]}
          />
        );
      })}
    </div>
  );
};

export default ArticleList;