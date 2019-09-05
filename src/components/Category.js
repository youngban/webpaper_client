import React, { Component } from 'react';
import fakeData from '../fakeData';
import Articles from './Articles';

class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: 'all' //선택된 카테고리
    };
  }
  //   선택된 category에 따라
  // state를 필터링해서 article 컴포넌트에 맵핑으로 뿌려줘야 됨.
  getFilterCategoryNews = category => {
    this.setState({ category: category });
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
          <button onClick={e => this.getFilterCategoryNews('all', e)}>
            전체기사보기
          </button>
          <hr></hr>
          <Articles data={fakeData} category={this.state.category} />
        </div>
      </div>
    );
  }
}

export default Category;
