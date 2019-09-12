import React from 'react';
import axios from 'axios';
import './SignIn.css';
import Button from 'antd/es/button';
class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      pw: ''
    };
  }
  componentDidMount() {}

  handleEmailChange(e) {
    this.setState({
      email: e.target.value
    });
  }
  handlePasswordChange(e) {
    this.setState({
      pw: e.target.value
    });
  }

  signIn() {
    if (this.state.email === '' || this.state.pw === '') {
      alert('이메일이나 비번을 입력해주세요');
    } else {
      axios
        .post('http://localhost:3001/api/login', {
          email: this.state.email,
          pw: this.state.pw
        })
        .then(res => {
          localStorage.setItem('session', res.data);
          window.location = '/';
        })
        .catch(err => alert('비번이나 아이디 틀림 ㅋ'));
    }
  }

  render() {
    return (
      <div className="signInForm">
        <h2>Sign In</h2>
        <label>email</label>
        <input
          type="text"
          onChange={e => this.handleEmailChange(e)}
          id="email"
        ></input>
        <br></br>
        <label>password</label>
        <input
          type="password"
          onChange={e => this.handlePasswordChange(e)}
          id="pw"
        ></input>
        <br></br>
        <Button onClick={() => this.signIn()}>Sign In</Button>
      </div>
    );
  }
}
export default SignIn;
