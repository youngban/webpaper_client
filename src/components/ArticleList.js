import React from 'react';

const ArticleList = props => {
  return (
    <div>
      {props.articles.map((item, i) => (
        <div key={i}>
          <a
            style={{ textDecoration: 'none', color: '#000000' }}
            href={item.url}
          >
            {item.name}
          </a>
        </div>
      ))}
    </div>
  );
};

export default ArticleList;
