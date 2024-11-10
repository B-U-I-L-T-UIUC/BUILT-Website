import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import "./PhotoCarousal.css"

const PhotoCarousel = ({ imageSrcs }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // Start fade-out

      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % imageSrcs.length);
        setFade(true); // Start fade-in after image change
      }, 1000); // 1-second fade-out duration
    }, 5000); // Image changes every 5 seconds

    return () => clearInterval(interval);
  }, [imageSrcs.length]);

  const handleDotClick = (index) => {
    setFade(false); // Trigger fade-out
    setTimeout(() => {
      setCurrentIndex(index);
      setFade(true); // Trigger fade-in after image change
    }, 500); // Half-second fade-out before dot click update
  };

  const handleBackClick = () => {
    setFade(false); // Trigger fade-out
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + imageSrcs.length) % imageSrcs.length);
      setFade(true); // Trigger fade-in after image change
    }, 500);
  };

  const handleNextClick = () => {
    setFade(false); // Trigger fade-out
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % imageSrcs.length);
      setFade(true); // Trigger fade-in after image change
    }, 500);
  };

  return (
    <div>
      <div className="carousel-container">
        <img
          src={imageSrcs[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className={`carousel-image ${fade ? "fade-in" : "fade-out"}`}
        />
      </div>
      <div className="carousel-controls">
        <span className="carousel-arrow" onClick={handleBackClick}>&lt;</span>
        <div className="carousel-dots">
          {imageSrcs.map((_, index) => (
            <span
              key={index}
              className={`dot ${currentIndex === index ? 'active' : ''}`}
              onClick={() => handleDotClick(index)}
            ></span>
          ))}
        </div>
        <span className="carousel-arrow" onClick={handleNextClick}>&gt;</span>
      </div>
    </div>
  );
};

export default PhotoCarousel;