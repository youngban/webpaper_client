import React from 'react';
import Nav from './Nav';
import Description from './Description';
import ArticleList from './ArticleList';
import CommentList from './CommentList';

const TopicInfo = () => {
  return (
    <div>
      <Nav />
      <Description />
      <ArticleList />
      <CommentList />
    </div>
  );
};

export default TopicInfo;
