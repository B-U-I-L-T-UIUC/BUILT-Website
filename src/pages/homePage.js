import React from 'react';
import StickyNavBar from '../components/stickyNavBar';
import '../styles/homePage.css';
import PhotoCarousel from '../components/PhotoCarousal';

function HomePage() {
    return (
        <div className="Home-Page">
            <StickyNavBar />
            <h1>Welcome to the home page!</h1> 
            <PhotoCarousel/>
        </div>
    );
}

export default HomePage;
