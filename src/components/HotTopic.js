import React from 'react';
import fakeData from '../fakeData';

const HotTopic = props => {
  return (
    <div>
      {fakeData.map(item => (
        <div>
          <img src={item.img}></img>
          <div>
            {item.name}
            {props.name}
          </div>
        </div>
      ))}
    </div>
  );
};

export default HotTopic;
