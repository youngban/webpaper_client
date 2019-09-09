import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';
const Nav = props => {
  console.log(window.localStorage);
  const { token } = props;
  return (
    <div className="Nav">
      <Link to="/">WebPaper</Link>
      <Link to="/SignUp" className="signup">
        Sign up
      </Link>
      {token === false ? (
        <Link to="/SignIn" className="signin">
          Sign in
        </Link>
      ) : (
        <div>
          <Link to="/SignOut" className="signout">
            SignOut
          </Link>
        </div>
      )}
    </div>
  );
};

export default Nav;
