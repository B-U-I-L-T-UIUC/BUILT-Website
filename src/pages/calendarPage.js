import React, { Component } from 'react';
import StickyNavBar from '../components/stickyNavBar';
import '../styles/calendarPage.css';
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css"; //after installing dependencies

const localizer = momentLocalizer(moment);
class CalendarPage extends Component {
  state = {
    events: [
      {
        start: moment().toDate(),
        end: moment().add(1, "days").toDate(),
        title: "name goes here"
      }
    ]
  };

  render() {
    return (
      <div className = "Calendar-Page">
        <StickyNavBar />
        <h1>Calendar</h1>
        <Calendar
          localizer={localizer}
          defaultDate ={new Date()}
          defaultView ="month"
          events ={this.state.events}
        /> 
      </div> 
    );
  }
}
export default CalendarPage;