import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from './components/Home';
import Read from './components/Read';
import Nav from './components/Nav';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import SignOut from './components/SignOut';

class App extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      token: false
    };
  }

  render() {
    return (
      <div>
        <Nav token={this.state.token}></Nav>
        <Route exact path="/" component={Home} />
        <Route path="/read/:id" component={Read} />
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
