import fakeData from '../fakeData';
import { Link, Route } from 'react-router-dom';
import Axios from 'axios';
import React, { Component } from 'react';

class HotTopic extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
    // this.handleClicked = this.handleClicked.bind(this);
  }

  componentDidMount() {
    Axios.get(`http://localhost:3001/api/hottopic`).then(res => {
      const data = res.data;
      this.setState({ data });
    });
  }

  render() {
    return (
      <div>
        {this.state.data.map(item => (
          <div onClick={() => this.handleClicked(item.category, item.id)}>
            <Link to={`/read/${item.id}`}>
              <img src={item.img}></img>
              <div>{item.topic}</div>
            </Link>
            <Route path={item.id}></Route>
          </div>
        ))}
      </div>
    );
  }
}

export default HotTopic;

// id, 카테고리
// const [category, setCategory] = useState(0);
// const [id, setId] = useState(null);
// useEffect(() => {
//   console.log(`you clicked+ ${category}`);
// }, [category]);
