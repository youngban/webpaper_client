import React, { Component } from 'react';
import './articles.css';
import Axios from 'axios';

class Articles extends Component {
  // if (props.sports.isClick) {
  //   console.log(props.sports.articles);
  // }
  constructor(props) {
    super(props);
    this.state = { postId: '', category: '' };
  }

  handleClicked = article => {
    this.setState(
      {
        postId: article._id,
        category: article.category
      },
      () => {
        Axios.post(`http://localhost:3001/api/count`, {
          _id: this.state.postId,
          category: this.state.category
        })
          .then(res => console.log(res))
          .catch(err => {
            console.log(err.response);
          });
      }
    );
  };

  render() {
    return (
      <div>
        {this.props.data.map(item =>
          item.isClick === true ? (
            <div>
              {console.log(item)}
              <ul>{item.category}</ul>
              {item.articles.map(article => (
                <li
                  key={article._id}
                  onClick={() => this.handleClicked(article)}
                >
                  {article.name}
                </li>
              ))}
            </div>
          ) : null
        )}
      </div>
    );
  }
}

export default Articles;

{
  /* {props.data.map(item => {
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
      })} */
}
