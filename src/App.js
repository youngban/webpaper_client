import React, { Component } from 'react';
import jwtDecode from 'jwt-decode';
import { Route } from 'react-router-dom';
import Home from './components/Home';
import Read from './components/Read';
import Nav from './components/Nav';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import SignOut from './components/SignOut';
import Profile from './components/profile';

class App extends Component {
  state = {};

  componentDidMount() {
    try {
      const jwt = localStorage.getItem('session');
      let user = jwtDecode(jwt);
      this.setState({
        user
      });
    } catch (ex) {
      console.log(ex);
    }
  }

  render() {
    return (
      <div>
        <Nav user={this.state.user}></Nav>
        <Route exact path="/" component={Home} />
        <Route
          exact
          path="/me"
          render={props => <Profile {...props} user={this.state.user} />}
        />
        <Route path="/read/:id" render={props => <Read {...props} />} />
        <Route path="/SignUp" component={SignUp} />
        <Route path="/SignIn" component={SignIn} />
        <Route
          path="/SignOut"
          render={() => <SignOut data={window.localStorage} />}
        />
      </div>
    );
  }
}

export default App;
