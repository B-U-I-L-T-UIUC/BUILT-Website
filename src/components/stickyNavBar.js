import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/stickyNavBar.css';

const StickyNavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // Toggle fixed position after scrolling 50px
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Determine if we are on the Home page
  const isHomePage = location.pathname === "/Home";

  return (
    <div className={`navbar-wrapper ${isScrolled ? 'fixed-top' : ''} ${!isHomePage ? 'background-image' : ''}`}>
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
