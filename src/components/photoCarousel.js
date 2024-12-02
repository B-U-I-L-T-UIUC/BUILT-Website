import React, { useState, useEffect, useRef } from 'react';
import "../styles/photoCarousal.css"

const PhotoCarousel = ({ imageSrcs }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const intervalRef = useRef(null); // Ref to store the interval ID

  const resetInterval = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    intervalRef.current = setInterval(() => {
      setFade(false); // Start fade-out
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % imageSrcs.length);
        setFade(true); // Start fade-in after image change
      }, 1000); // 1-second fade-out duration
    }, 5000); // Image changes every 5 seconds
  };

  useEffect(() => {
    resetInterval(); // Start interval when component mounts
    return () => clearInterval(intervalRef.current); // Clear interval on unmount
  }, [imageSrcs.length, resetInterval]);

  const handleDotClick = (index) => {
    setFade(false); // Trigger fade-out
    setTimeout(() => {
      setCurrentIndex(index);
      setFade(true); // Trigger fade-in after image change
      resetInterval(); // Reset the interval after dot click
    }, 500); // Half-second fade-out before dot click update
  };

  const handleBackClick = () => {
    setFade(false); // Trigger fade-out
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + imageSrcs.length) % imageSrcs.length);
      setFade(true); // Trigger fade-in after image change
      resetInterval(); // Reset the interval after back click
    }, 500);
  };

  const handleNextClick = () => {
    setFade(false); // Trigger fade-out
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % imageSrcs.length);
      setFade(true); // Trigger fade-in after image change
      resetInterval(); // Reset the interval after next click
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