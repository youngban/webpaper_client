import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';
const Nav = props => {
  const { user } = props;
  return (
    <div className="Nav">
      <Link to="/" className="title">
        WebPaper
      </Link>

      {!user && (
        <React.Fragment>
          <Link to="/SignUp" className="signup">
            Sign Up
          </Link>
          <Link to="/SignIn" className="signin">
            Login
          </Link>
        </React.Fragment>
      )}
      {user && (
        <React.Fragment>
          <Link to="/me" className="signout">
            {user.email}
          </Link>
          <div></div>
          <Link to="/SignOut" className="signout">
            Logout
          </Link>
        </React.Fragment>
      )}
    </div>
  );
};

export default Nav;
