import React, { Component } from 'react';
import { Route, Link as Router } from 'react-router-dom';
import Home from './components/Home';
import Read from './components/Read';

class App extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/read" component={Read} />
        </div>
      </Router>
    );
  }
}

export default App;
