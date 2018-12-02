import React from 'react';

import Article from './article';

const ArticleList = (props) => {
  // const { articles, authors } = props;
  const { articles, store } = props;

  return (
    <div>
      {articles && Object.values(articles).map((article) => {
        return (
          <Article
            key={article.id} 
            article={article}
            // author={authors[article.authorId]} // logic handled in App.js with method articleActions
            // actions={articleActions} // state refactor
            store={store}
          />
        );
      })}
    </div>
  );
};

export default ArticleList;