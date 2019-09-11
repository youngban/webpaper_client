import React, { Component } from 'react';
import Axios from 'axios';

class CommentList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userid: '',
      hotTopicId: this.props.id,
      text: '',
      date: new Date()
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    console.log(this.props.id);
    Axios.get(
      `http://localhost:3001/api/gettopiccomments?hottopicid=${this.props.id}`
    ).then(res => {
      console.log(res);
    });
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
    console.log(this.state);
  }

  handleSubmit(e) {
    e.preventDefault();
    Axios.post();
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
