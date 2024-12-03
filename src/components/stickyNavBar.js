import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/stickyNavBar.css'; 


const StickyNavBar = () => {

  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20); 
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className={`navbar-wrapper ${isScrolled ? 'fixed-top' : ''}`}>
        <div className="navbar">
          <button className="hamburger-menu" onClick={toggleMenu}>
            {/* Hamburger Icon */}
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
          </button>
          <div className={`nav-links ${menuOpen ? 'show' : ''}`}>
            {/* Links for both the regular and hamburger menus */}
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