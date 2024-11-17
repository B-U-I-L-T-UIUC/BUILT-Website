import React, { Component } from 'react';
import StickyNavBar from '../components/stickyNavBar';
import '../styles/calendarPage.css';
class CalendarPage extends Component {
  render() {
    return (
      <div className = "Calendar-Page">
        <div className="upper">
          <StickyNavBar />
          <h1>Calendar</h1>
        </div>
 
        <div className="googleCal"> 
          <iframe
          src ="https://calendar.google.com/calendar/embed?height=800&wkst=1&ctz=America%2FChicago&showPrint=0&title=B%5BU%5DILT%20Calendar&src=YnVpbHR1aXVjQGdtYWlsLmNvbQ&src=YTNhZDk1NGU4OWRlMmNiZWVjMGJlMWY3YThiMWFhN2NmYmIyOTc1M2UzYmZiZDk3OGEyMTgxOTY4ODQ2YmQwYkBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%238E24AA&color=%23D81B60"
          style = {{border: 'solid 3px #9C27B0', borderRadius: '7px'}}
          width ="900" height="750"
          title = "BUILT google calendar"
          ></iframe>
        </div> 
      </div>  
    );
  }
}
export default CalendarPage;