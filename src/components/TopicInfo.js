import React from 'react';

const TopicInfo = props => {
  return (
    <div>
      <h1>{props.info.topic}</h1>
      <img src={props.info.img}></img>
      <h3>{props.info.text}</h3>
    </div>
  );
};

export default TopicInfo;
