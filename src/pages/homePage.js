import React from 'react';
import StickyNavBar from '../components/stickyNavBar';
import '../styles/homePage.css';
import HeaderTransparent from '../components/headerTransparent.js'

function HomePage() {
    return (
        <div className="Home-Page">
            <StickyNavBar />
            <h1>Welcome to the home page!</h1> 
        </div>
    );
}

export default HomePage;
