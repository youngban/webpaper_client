import React, { Component } from 'react';
import { Route } from 'react-router-dom';
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
      <div>
        <Nav></Nav>
        <Route exact path="/" component={Home} />
        <Route path="/read/:id" component={Read} />
      </div>
    );
  }
}

export default App;
