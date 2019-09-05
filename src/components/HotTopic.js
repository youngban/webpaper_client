import React from 'react';
import fakeData from '../fakeData';
import { Link, Route } from 'react-router-dom';
import TopicInfo from './TopicInfo';
import { createReadStream } from 'fs';
// import { useState, useEffect } from 'react';

const HotTopic = () => {
  return (
    <div>
      {fakeData.map(item => (
        <div>
          <Link to={`/read/${item.id}`}>
            <img src={item.img}></img>
            <div>{item.name}</div>
          </Link>
          <Route path={item.id}></Route>
        </div>
      ))}
    </div>
  );
};

export default HotTopic;
