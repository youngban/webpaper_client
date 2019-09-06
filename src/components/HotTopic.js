import fakeData from '../fakeData';
import { Link, Route } from 'react-router-dom';
import axios from 'axios';
import React, { Component } from 'react';

class HotTopic extends Component {
  constructor(props) {
    super(props);
    this.state = { category: '1', id: '2' };
    // this.handleClicked = this.handleClicked.bind(this);
  }

  handleClicked(category, id) {
    console.log('!!!!!!!!');
    this.setState = {
      category: category,
      id: id
    };
    console.log(this.state, 'STATE');
    axios
      .post(`http://localhost:3001/api/count`, {
        _id: this.state.id,
        category: this.state.category
      })
      .then(res => console.log(res))
      .catch(error => {
        console.log(error.response);
      });
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        {fakeData.map(item => (
          <div onClick={() => this.handleClicked(item.category, item.id)}>
            <Link to={`/read/${item.id}`}>
              <img src={item.img}></img>
              <div>{item.name}</div>
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
