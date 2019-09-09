import React from 'react';

const SignOut = props => {
  console.log(props);
  return <div>{(props.data.isLogin = false)}</div>;
};
export default SignOut;
