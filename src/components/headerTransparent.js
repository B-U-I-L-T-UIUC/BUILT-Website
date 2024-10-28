import React from 'react';
import '../styles/headerTransparent.css'; 
import StickyNavBar from './stickyNavBar';

const HeaderTransparent = () => {
  return (
    <div className="sticky-header">
      <StickyNavBar/>
    </div>
  );
};

export default HeaderTransparent;