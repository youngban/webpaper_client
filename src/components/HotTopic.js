import { Link, Route } from 'react-router-dom';
import Axios from 'axios';
import React, { Component } from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import { GridListTileBar } from '@material-ui/core';

class HotTopic extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
    // this.handleClicked = this.handleClicked.bind(this);
  }

  componentDidMount() {
    Axios.get(`http://localhost:3001/api/hottopic`).then(res => {
      const data = res.data.slice(0, 6);
      this.setState({ data });
    });
  }

  render() {
    return (
      <div>
        <GridList cellHeight={120} cols={3}>
          {this.state.data.map(item => (
            <GridListTile key={item._id} cols={1} rows={3}>
              <img src={item.img} alt={item.topic} />
              <Link to={{ pathname: `/read/${item._id}`, state: { item } }}>
                <GridListTileBar title={item.topic}></GridListTileBar>
              </Link>
              <Route path={item._id}></Route>
            </GridListTile>
          ))}
        </GridList>
      </div>
    );
  }
}

export default HotTopic;

{
  /* <div key={item._id}>
              <Link to={{ pathname: `/read/${item.id}`, state: { item } }}>
                <img src={item.img}></img>
                <div>{item.topic}</div>
              </Link>
              <Route path={item._id}></Route>
            </div> */
}
