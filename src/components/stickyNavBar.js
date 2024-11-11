import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/stickyNavBar.css';

const StickyNavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`navbar-wrapper ${isScrolled ? 'fixed-top' : ''}`}>
      <div className="navbar">
        <Link to="/Home" className="button">Home</Link>
        <Link to="/About" className="button">About Us</Link>
        <Link to="/Calendar" className="button">Calendar</Link>
        <Link to="/Get-Involved" className="button">Get Involved</Link>
      </div>
    </div>
  );
};

export default StickyNavBar;
