import React from 'react';
import './articles.css';
const Articles = props => {
  console.log(props.category.length);
  return (
    <div>
      {props.data.map(item => (
        <a key={item.id} item={item} href={item.url} className="articles">
          {console.log(item.category)}
          {props.category.length === 7
            ? item.name
            : item.category.includes(props.category)
            ? item.name //지금 카테고리가 1개일때만 해당 카테고리 기사가 나오고 2개이상일땐 나오지않음
            : ''}
        </a>
      ))}
    </div>
  );
};

export default Articles;
