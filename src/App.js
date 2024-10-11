import React from 'react';
import HomePage from './pages/homePage';
import AboutPage from './pages/aboutPage';
import GetInvolved from './pages/getInvolved';
import CalendarPage from './pages/calendarPage';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">

                <Router>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/Home">Home</Link>
                            </li>
                            <li>
                                <Link to="/About">About</Link>
                            </li>
                            <li>
                                <Link to="/GetInvolved">Get Involved</Link>
                            </li>
                            <li>
                                <Link to="/Calendar">Calendar</Link>
                            </li>
                        </ul>
                    </nav>
                    <Routes>
                        <Route path="/Home" element={<HomePage />} />
                        <Route path="/About" element={<AboutPage />} />
                        <Route path='/GetInvolved' element={<GetInvolved />} />
                        <Route path='/Calendar' element={<CalendarPage />} />
                    </Routes>
                </Router>
            </header>
        </div>
    );
}

export default App;