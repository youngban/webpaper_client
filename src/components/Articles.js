import React from 'react';
import './articles.css';
const Articles = props => {
  console.log(props.category);
  return (
    <div>
      {props.data.map(item => (
        <a key={item.id} item={item} href={item.url} className="articles">
          {props.category === 'all'
            ? item.name
            : item.category === props.category
            ? item.name
            : ''}
        </a>
      ))}
    </div>
  );
};

export default Articles;
