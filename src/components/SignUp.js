import React, { Component } from 'react';
import './SignUp.css';
import axios from 'axios';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      pw: ''
    };
  }
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
  submitSignUp() {
    if (this.state.email === '' || this.state.pw === '') {
      alert('이메일이나 비번을 입력해주세요');
    } else if (this.state.email.length < 5 || this.state.pw.length < 5) {
      alert('이메일이나 비밀번호를 5자이상으로 작성하세요');
    } else {
      axios
        .post('http://localhost:3001/api/user/signup', {
          email: this.state.email,
          pw: this.state.pw
        })
        .then(res => console.log(res))
        .then(this.props.history.push('/'))
        .catch(err => console.log('signup err:' + err));
    }
  }
  render() {
    return (
      <div className="signupForm">
        <h2>회원 가입</h2>
        <label>이메일</label>(5자 이상이어야 합니다)
        <input
          type="text"
          required
          id="InputEmail"
          size="150px"
          onChange={e => this.handleEmailChange(e)}
        ></input>
        <br></br>
        <label>비밀번호</label>(5자 이상이어야 합니다)
        <input
          type="password"
          required
          id="InputPassword"
          onChange={e => this.handlePasswordChange(e)}
        ></input>
        <hr></hr>
        <button onClick={() => this.submitSignUp()}>회원가입!</button>
      </div>
    );
  }
}
export default SignUp;
