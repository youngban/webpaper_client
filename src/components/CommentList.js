import React, { Component } from 'react';
import Axios from 'axios';
Axios.defaults.headers.common['x-auth-token'] = localStorage.getItem('session');

class CommentList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userid: '',
      hotTopicId: this.props.id,
      text: '',
      date: new Date().toJSON()
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    Axios.get(
      `http://localhost:3001/api/gettopiccomments?hottopicid=${this.props.id}`
    ).then(res => {
      console.log(res);
    });
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
    // console.log(localStorage.getItem('session'));
  }

  handleSubmit(e) {
    e.preventDefault();
    Axios.post(`http://localhost:3001/api/comment`, {
      userid: this.state.userid,
      hotTopicId: this.state.id,
      text: this.state.text,
      date: this.state.date
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
          <button type="submit" value="Submit">
            Post
          </button>
        </form>
      </div>
    );
  }
}

export default CommentList;
