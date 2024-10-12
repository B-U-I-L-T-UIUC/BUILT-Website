import React from 'react';
import { Link } from 'react-router-dom';

const StickyNavBar = () => {

  return (
    <>
      <style>
        {`
        .navbar-wrapper {
          margin-top: 5px; 
        }

        .navbar {
          position: sticky;
          top: 0px; 
          width: 100%;
          z-index: 1000;
          display: flex;
          justify-content: flex-end;
          padding-right: 20px;
          padding-top: 10px;
          gap: 10px;
          font-family: 'Inter', sans-serif;
        }

        .button {
          background-color: #DB9066;
          border: none;
          color: black;
          padding: 15px 32px;
          text-align: center;
          text-decoration: none;
          display: inline-block;
          font-size: 16px;
          border-radius: 50px;
          font-family: 'Inter', sans-serif;
        }

        .button:hover {
          color: #000000;
          background-color: rgb(243, 221, 205);
        }
        `}
      </style>

      <div className="navbar-wrapper">
        <div className="navbar">
          <Link to="/Home" className="button">Home</Link>
          <Link to="/About" className="button">About Us</Link>
          <Link to="/Calendar" className="button">Calendar</Link>
          <Link to="/GetInvolvedPage" className="button">Get Involved</Link>
        </div>
      </div>
    </>
  );
};

export default StickyNavBar;