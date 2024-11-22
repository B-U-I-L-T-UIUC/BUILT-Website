import React from 'react';
import StickyNavBar from '../components/stickyNavBar';
import EmbGoogleCal from '../components/embGoogleCal';
import '../styles/calendarPage.css';

function CalendarPage()  {
  return (
    <div className = "Calendar-Page">
      <StickyNavBar />
      <h1>Calendar</h1>
      <EmbGoogleCal />
    </div>  
  );
}
export default CalendarPage;