import React from 'react';
import '../styles/homePage.css';
import PhotoCarousel from '../components/PhotoCarousal';

function HomePage() {
    return (
        <div className="HomePage">
            <header className="HomePage-header">
                <h1>Welcome to the home page!</h1>
                <PhotoCarousel/>
            </header>
        </div>
    );
}

export default HomePage;
