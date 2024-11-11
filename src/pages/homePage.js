import React from 'react';
import StickyNavBar from '../components/stickyNavBar';
import '../styles/homePage.css';

function HomePage() {
    return (
        <div className="Home-Page">
            <StickyNavBar />
            <h1>Welcome to the home page!</h1> 
        </div>
    );
}

export default HomePage;
