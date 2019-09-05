import React, { Component } from 'react';
import { Route, Link as Router } from 'react-router-dom';
import Home from './components/Home';
import Read from './components/Read';
import Nav from './components/Nav';

class App extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <Router>
        <div>
          <Nav></Nav>
          <Route exact path="/" component={Home} />
          <Route path="/read/:id" component={Read} />
        </div>
      </Router>
    );
  }
}

export default App;
