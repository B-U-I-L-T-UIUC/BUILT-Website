import React from 'react';
import StickyNavBar from '../components/stickyNavBar';
import '../styles/homePage.css';
import PhotoCarousel from '../components/photoCarousal';

function HomePage() {
    const carouselImages = [
        "Speed-Friending.png",
        "coffee-social.png",
        "coffee-soical-2.png",
        "e-board.png",
        "KlayvioTalk.png",
        "OpenHouse-Food.png",
        "OpenHouse2.JPEG",
        "built-shirt.png",
    ];

    return (
        <div className="Home-Page">
            <StickyNavBar />
            <h1>Welcome to the home page!</h1> 
            <PhotoCarousel imageSrcs={carouselImages}/>
        </div>
    );
}

export default HomePage;
