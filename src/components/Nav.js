import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';
import Axios from 'axios';

const Nav = props => {
  const { user } = props;
  return (
    <div className="Nav">
      <Link to="/">WebPaper</Link>
      <button
        className="button"
        onClick={() => {
          Axios.get('http://localhost:3001/api/hottopic/get').catch(err => {
            console.log(err);
          });
        }}
      >
        Refresh
      </button>
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
