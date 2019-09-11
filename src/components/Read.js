import React from 'react';
import TopicInfo from './TopicInfo';
import ArticleList from './ArticleList';
import CommentList from './CommentList';

const Read = props => {
  return (
    <div>
      <TopicInfo info={props.location.state.item} />
      <CommentList id={props.location.state.item._id} />
    </div>
  );
};

export default Read;
