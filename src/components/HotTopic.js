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
          <div key={item._id}>
            <Link to={{ pathname: `/read/${item.id}`, state: { item } }}>
              <img src={item.img}></img>
              <div>{item.topic}</div>
            </Link>
            <Route path={item._id}></Route>
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
