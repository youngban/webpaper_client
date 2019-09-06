import React, { Component } from 'react';
import fakeData from '../fakeData';
import Articles from './Articles';

class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: [
        'politics',
        'economy',
        'society',
        'culture',
        'world',
        'entertain',
        'sports'
      ],
      firstbtn: true,
      btnstate: false
    };
  }
  //   선택된 category에 따라
  // state를 필터링해서 article 컴포넌트에 맵핑으로 뿌려줘야 됨.
  getFilterCategoryNews = paracategory => {
    if (this.state.firstbtn) {
      this.setState({
        category: [paracategory],
        firstbtn: false,
        btnstate: !this.state.btnstate
      });
    } else {
      if (!this.state.category.includes(paracategory)) {
        this.setState({
          category: this.state.category.concat(paracategory)
        });
      } else {
        for (let i = 0; i < this.state.category.length; i++) {
          if (this.state.category[i] === paracategory) {
            this.setState({
              category: this.state.category.filter(str => str !== paracategory)
            });
          }
        }
      }
    }
  };
  render() {
    return (
      <div>
        <hr></hr>
        <div className="categoryBtn">
          <button onClick={e => this.getFilterCategoryNews('politics', e)}>
            정치
          </button>
          <button onClick={e => this.getFilterCategoryNews('economy', e)}>
            경제
          </button>
          <button onClick={e => this.getFilterCategoryNews('society', e)}>
            사회
          </button>
          <button onClick={e => this.getFilterCategoryNews('culture', e)}>
            문화
          </button>
          <button onClick={e => this.getFilterCategoryNews('world', e)}>
            세계
          </button>
          <button onClick={e => this.getFilterCategoryNews('entertain', e)}>
            연예
          </button>
          <button onClick={e => this.getFilterCategoryNews('sports', e)}>
            스포츠
          </button>
          <hr></hr>
          <Articles data={fakeData} category={this.state.category} />
        </div>
      </div>
    );
  }
}

export default Category;
