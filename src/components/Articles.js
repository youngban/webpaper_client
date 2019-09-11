import React, { Component } from 'react';
import './articles.css';
import Axios from 'axios';

class Articles extends Component {
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
            <div key={item.category}>
              <ul>{item.category}</ul>
              {item.articles.map(article => (
                <li key={article._id}>
                  <a
                    style={{ textDecoration: 'none', color: '#000000' }}
                    href={article.url}
                    onClick={() => this.handleClicked(article)}
                  >
                    {article.name}
                  </a>
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
