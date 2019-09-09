import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';
const Nav = () => {
  return (
    <div className="Nav">
      <Link to="/">Home</Link>
      <Link to="/SignUp" className="signup">
        Sign up
      </Link>
      <Link to="/SignIn" className="signin">
        Sign in
      </Link>
    </div>
  );
};

export default Nav;
