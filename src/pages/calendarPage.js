import React, { Component } from 'react';
import StickyNavBar from '../components/stickyNavBar';
import '../styles/calendarPage.css';
class CalendarPage extends Component {
  render() {
    return (
      <div className = "Calendar-Page">
        <StickyNavBar />
        <h1>Calendar</h1>
            
        <div className="googleCal"> 
            <iframe
            src = "https://calendar.google.com/calendar/embed?src=c_8ad2baa493507a75ae60a1871af32c2947f15494ebce1d0bdec1e02cc97c2954%40group.calendar.google.com&ctz=America%2FChicago"
            style = {{
              border: 'solid 3px #e34103',
              borderRadius: '7px',
              width: '70vw',
              height: '75vh'
            }}
            title = "BUILT google calendar"
            ></iframe>
        </div> 
      </div>  
    );
  }
}
export default CalendarPage;