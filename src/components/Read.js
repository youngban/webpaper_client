import React from 'react';
import TopicInfo from './TopicInfo';
import ArticleList from './ArticleList';
import CommentList from './CommentList';

const Read = ({ match }) => {
  {
    console.log('id가져오기', match.params);
  }
  return (
    <div>
      <TopicInfo />
      <ArticleList />
      <CommentList />
    </div>
  );
};

export default Read;
