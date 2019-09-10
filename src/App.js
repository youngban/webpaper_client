import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from './components/Home';
import Read from './components/Read';
import Nav from './components/Nav';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';

class App extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <div>
        <Nav></Nav>
        <Route exact path="/" component={Home} />
        <Route path="/read/:id" render={props => <Read {...props} />} />
        <Route path="/SignUp" component={SignUp} />
        <Route path="/SignIn" component={SignIn} />
      </div>
    );
  }
}

export default App;
