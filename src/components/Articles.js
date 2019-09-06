import React from 'react';
import './articles.css';
const Articles = props => {
  //console.log(props.category);
  return (
    <div>
      {props.data.map(item => {
        if (props.category.includes(item.category)) {
          return (
            <a href={item.url} key={item.id} data={item} className="articles">
              {item.name}
            </a>
          );
        }
        if (props.category.length === 0) {
          return (
            <a href={item.url} key={item.id} data={item} className="articles">
              {item.name}
            </a>
          );
        }
      })}
    </div>
  );
};

export default Articles;
