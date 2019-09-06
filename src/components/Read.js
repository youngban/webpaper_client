import React from 'react';
import TopicInfo from './TopicInfo';
import ArticleList from './ArticleList';
import CommentList from './CommentList';

const Read = () => {
  return (
    <div>
      <TopicInfo />
      <ArticleList />
      <CommentList />
    </div>
  );
};

export default Read;
