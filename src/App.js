import React from 'react';
import HomePage from './pages/homePage';
import AboutPage from './pages/aboutPage';
import GetInvolvedPage from './pages/getInvolvedPage';
import CalendarPage from './pages/calendarPage';
import Footer from './components/footer';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";
import StickyNavBar from './components/stickyNavBar'
import './App.css';

function App() {
    return (
        <div className="App">
            <Router>
                {/*replaced nav with navbar*/ }

                <StickyNavBar />
              
                <main className="App-main"> 
                    <Routes>
                        <Route path="/" element={<Navigate to="/Home" />} />
                        <Route path="/Home" element={<HomePage />} />
                        <Route path="/About" element={<AboutPage />} />
                        <Route path="/GetInvolvedPage" element={<GetInvolvedPage />} />
                        <Route path="/Calendar" element={<CalendarPage />} />
                    </Routes>
                </main>

                <Footer/>
            </Router>

        </div>
    );
}

export default App;