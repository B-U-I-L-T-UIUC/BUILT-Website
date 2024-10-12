import React from 'react';
import '../styles/aboutPage.css';
import CardSlider from '../components/cardslider.js';




function AboutPage() {
    return (
        <div className="AboutPage">
            <header className="AboutPage-header">
                <h1>About Us</h1>
                <p>Welcome to the about page!</p>
            </header>
            <CardSlider/>
        </div>
    );
}

export default AboutPage;