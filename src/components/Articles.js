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
    console.log('넘어간url:', purl, '넘어간카테고리:', pcategory);
    e.preventDefault();
    Axios.post('http://localhost:3001/api/user/bookmark', {
      url: purl,
      category: pcategory
    })
      .then(res => console.log(res))
      .catch(err => console.log('addbookmark에러:' + err));
  }
  render() {
    return (
      <div className="articles-wrap">
        {this.props.data.map(item =>
          item.isClick === true ? (
            <div key={item.category}>
              <ul>{item.category}</ul>
              {item.articles.map(article => (
                <li
                  key={article._id}
                  onClick={() => this.handleClicked(article)}
                >
                  {article.name}
                  <a
                    href="#"
                    onClick={e =>
                      this.addBookMark(article.url, article.category, e)
                    }
                    className="ad-book-mark"
                  >
                    해당기사 북마크 추가하기
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
