import React from 'react';

class SignOut extends React.Component {
  componentDidMount() {
    localStorage.removeItem('session');
    window.location = '/';
  }
  render() {
    return null;
  }
}
export default SignOut;
