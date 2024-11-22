import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/stickyNavBar.css'; 

const StickyNavBar = () => {

  return (
    <>
      <div className="navbar-wrapper">
        <div className="navbar">
          <Link to="/Home" className="button">Home</Link>
          <Link to="/About" className="button">About Us</Link>
          <Link to="/Calendar" className="button">Calendar</Link>
          <Link to="/Get-Involved" className="button">Get Involved</Link>
        </div>
      </div>
    </>
  );
};

export default StickyNavBar;