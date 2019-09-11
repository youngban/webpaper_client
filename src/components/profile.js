import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
axios.defaults.headers.common['x-auth-token'] = localStorage.getItem('session');

class Profile extends React.Component {
  state = {
    bookmark: [],
    comments: [],
    val: String
  };
  constructor(props) {
    super(props);
  }

  printBookmark() {
    axios
      .get('http://localhost:3001/api/user/getbookmark')
      .then(res => {
        this.setState({ bookmark: res.data });
        this.setState({ val: 'bookmark' });
      })
      .catch(err => console.log('signup err:' + err));
  }

  printComments() {
    axios
      .get('http://localhost:3001/api/getusercomments')
      .then(res => {
        this.setState({ comments: res.data });
        this.setState({ val: 'comments' });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <button onClick={() => this.printBookmark()}>북마크</button>
        <button onClick={() => this.printComments()}>댓글</button>

        {this.state.bookmark.map((k, i) =>
          k && this.state.val === 'bookmark' ? (
            <div key={i + new Date()}>
              <a
                style={{ textDecoration: 'none', color: '#000000' }}
                href={k.url}
              >
                {k.name}
              </a>
            </div>
          ) : (
            <React.Fragment></React.Fragment>
          )
        )}

        {this.state.comments.map((k, i) =>
          k && this.state.val === 'comments' ? (
            <div key={i + new Date()}>
              <span>{k.text}</span>
              <span>{k.date}</span>
            </div>
          ) : (
            <React.Fragment></React.Fragment>
          )
        )}
      </div>
    );
  }
}
export default Profile;
