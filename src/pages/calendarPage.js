import React from 'react';
import StickyNavBar from '../components/stickyNavBar';
import '../styles/calendarPage.css';

function CalendarPage() {
    return (
        <div className="Calendar-Page">
            <StickyNavBar />
            <h1>Calendar</h1>
        </div>
    );
}

export default CalendarPage;
