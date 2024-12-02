import React from 'react';
import HomePage from './pages/homePage';
import AboutPage from './pages/aboutPage';
import GetInvolvedPage from './pages/getInvolvedPage';
import CalendarPage from './pages/calendarPage';
import Footer from './components/footer';
import { HashRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import './App.css';

function App() {
    return (
        <div className="App">
            <Router>        
                    <Routes>
                        <Route path="/" element={<Navigate to="/Home" />} />
                        <Route path="/Home" element={<HomePage />} />
                        <Route path="/About" element={<AboutPage />} />
                        <Route path="/Get-Involved" element={<GetInvolvedPage />} />
                        <Route path="/Calendar" element={<CalendarPage />} />
                    </Routes>
            </Router>
            <Footer/>

        </div>
    );
}

export default App;