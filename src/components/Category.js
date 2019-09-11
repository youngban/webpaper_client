import React, { Component } from 'react';
import Articles from './Articles';
import Axios from 'axios';
import Button from 'antd/es/button';
class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [
        {
          category: '',
          articles: [],
          isClick: true
        }
      ]
    };
  }
  // categories: {
  //   sports: {
  //     category: 'sports',
  //     articles: [],
  //     isClick: true
  //   },
  //   politics: {
  //     category: 'politics',
  //     articles: [],
  //     isClick: true
  //   }

  // 다이내믹한 방법으로 리팩토링 할 수 없을까?
  componentDidMount() {
    Axios.all([
      Axios.get(`http://localhost:3001/api/category?name=sports`),
      Axios.get(`http://localhost:3001/api/category?name=politics`),
      Axios.get(`http://localhost:3001/api/category?name=business`),
      Axios.get(`http://localhost:3001/api/category?name=entertainment`),
      Axios.get(`http://localhost:3001/api/category?name=products`),
      Axios.get(`http://localhost:3001/api/category?name=scienceandtechnology`),
      Axios.get(`http://localhost:3001/api/category?name=health`)
    ]).then(
      Axios.spread((cate1, cate2, cate3, cate4, cate5, cate6, cate7) => {
        this.setState({
          categories: [
            {
              category: cate1.data[0].category,
              articles: cate1.data.slice(0, 10),
              isClick: true
            },
            {
              category: cate2.data[0].category,
              articles: cate2.data.slice(0, 10),
              isClick: true
            },
            {
              category: cate3.data[0].category,
              articles: cate3.data.slice(0, 10),
              isClick: true
            },
            {
              category: cate4.data[0].category,
              articles: cate4.data.slice(0, 10),
              isClick: true
            },
            {
              category: cate5.data[0].category,
              articles: cate5.data.slice(0, 10),
              isClick: true
            },
            {
              category: cate6.data[0].category,
              articles: cate6.data.slice(0, 10),
              isClick: true
            },
            {
              category: cate7.data[0].category,
              articles: cate7.data.slice(0, 10),
              isClick: true
            }
          ]
        });
      })
    );
  }

  render() {
    return (
      <div>
        <div>
          <hr></hr>
          <div className="categoryBtn">
            {this.state.categories.map(item => (
              <Button
                key={item.category}
                onClick={() => {
                  this.setState(() => (item.isClick = !item.isClick));
                }}
              >
                {item.category}
              </Button>
            ))}
          </div>
          <Articles data={this.state.categories} />
        </div>
      </div>
    );
  }
}

export default Category;
