import React, { Component } from 'react';
import Axios from 'axios';
Axios.defaults.headers.common['x-auth-token'] = localStorage.getItem('session');

class CommentList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hotTopicId: this.props.id,
      text: '',
      date: new Date().toJSON()
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    console.log(this.state.hotTopicId);
    Axios.get(
      `http://localhost:3001/api/gettopiccomments?hottopicid=${this.state.hotTopicId}`
    ).then(res => {
      this.setState({ comments: res.data });
      console.log(this.state.comments);
    });
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
    // console.log(localStorage.getItem('session'));
  }

  handleSubmit(e) {
    const token = localStorage.getItem('session');
    e.preventDefault();
    Axios.post(
      `http://localhost:3001/api/comment`,
      {
        hotTopicId: this.state.hotTopicId,
        text: this.state.text,
        date: this.state.date
      },
      {
        headers: {
          'x-auth-token': token
        }
      }
    )
      .then(() => {
        window.location = `/read/${this.state.hotTopicId}`;
      })
      .catch(err => {
        alert('로긴 ㄱ');
        window.location = `/read/${this.state.hotTopicId}`;
      });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.text}
            onChange={this.handleChange}
          />
          {this.state.comments !== undefined ? (
            this.state.comments.map((v, i) => (
              <div key={i}>
                <div>
                  <span>{v.userId}</span> <span>{v.date}</span>
                </div>
                <div>{v.text}</div>
              </div>
            ))
          ) : (
            <React.Fragment></React.Fragment>
          )}
          <button type="submit" value="Submit">
            등록
          </button>
        </form>
      </div>
    );
  }
}

export default CommentList;
