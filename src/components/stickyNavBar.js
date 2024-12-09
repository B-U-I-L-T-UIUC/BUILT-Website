import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import throttle from 'lodash/throttle';
import '../styles/stickyNavBar.css';

const StickyNavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = throttle(() => {
      setIsScrolled(window.scrollY > 10);
    }, 50); // Throttle to once every 50ms

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div style={{ height: isScrolled ? '70px' : '0' }}></div>
      <div className={`navbar-wrapper ${isScrolled ? 'fixed-top' : ''}`}>
        <div className="navbar">
          <button className="hamburger-menu" onClick={toggleMenu}>
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
          </button>
          <div className={`nav-links ${menuOpen ? 'show' : ''}`}>
            <Link to="/Home" className="button">Home</Link>
            <Link to="/About" className="button">About Us</Link>
            <Link to="/Calendar" className="button">Calendar</Link>
            <Link to="/Get-Involved" className="button">Get Involved</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default StickyNavBar;
