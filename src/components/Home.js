import React from 'react';
import Nav from './Nav';
import HotTopic from './HotTopic';
import Category from './Category';
import Articles from './Articles';

const Home = () => {
  return (
    <div>
      <Nav />
      <HotTopic />
      <Category />
      <Articles />
    </div>
  );
};

export default Home;
