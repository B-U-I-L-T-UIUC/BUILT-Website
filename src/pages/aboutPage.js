import React from 'react';
import StickyNavBar from '../components/stickyNavBar'
import '../styles/aboutPage.css';

function AboutPage() {
    return (
        <div className="About-Page">
            <StickyNavBar />
            <h1>About Us</h1>
            <p>Welcome to the about page!</p>

        </div>
    );
}

export default AboutPage;