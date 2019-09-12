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
  addBookMark(purl, pcategory, e) {
    const token = localStorage.getItem('session');

    e.preventDefault();
    Axios.post(
      'http://localhost:3001/api/user/bookmark',
      {
        url: purl,
        category: pcategory
      },
      {
        headers: {
          'x-auth-token': token
        }
      }
    )
      .then(res => console.log(res))
      .catch(err => alert('로그인 ㄱ'));
  }
  render() {
    return (
      <div className="articles-wrap">
        {this.props.data.map(item =>
          item.isClick === true ? (
            <div key={item.category}>
              <ul>{item.category}</ul>
              {item.articles.map(article => (
                <div key={article._id}>
                  <a
                    href={article.url}
                    style={{ textDecoration: 'none', color: '#000000' }}
                    onClick={() => this.handleClicked(article)}
                  >
                    {article.name}
                  </a>
                  <a
                    href="#"
                    onClick={e =>
                      this.addBookMark(article.url, article.category, e)
                    }
                    className="ad-book-mark"
                  >
                    북마크 추가하기
                  </a>
                </div>
              ))}
            </div>
          ) : null
        )}
      </div>
    );
  }
}

export default Articles;
