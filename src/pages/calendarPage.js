import React, { useState, useEffect} from 'react';
import StickyNavBar from '../components/stickyNavBar';
import '../styles/calendarPage.css';
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css"; //after installing dependencies
import axios from 'axios';
import ICAL from 'ical.js';  // Import ICAL.js to parse the iCal data

const localizer = momentLocalizer(moment);

function CalendarPage() {
    const [events, setEvents] = useState([]);
    useEffect(() => {
        // URL of public Google Calendar iCal feed
        //temporary development access to its proxy, need to change this for deployment of website
        const calendarUrl = 'https://cors-anywhere.herokuapp.com/https://calendar.google.com/calendar/ical/c_8ad2baa493507a75ae60a1871af32c2947f15494ebce1d0bdec1e02cc97c2954%40group.calendar.google.com/public/basic.ics';

        // Fetch the iCal data
        axios.get(calendarUrl)
            .then(response => {
                // Parse the iCal data
                const jcalData = ICAL.parse(response.data);
                const comp = new ICAL.Component(jcalData);
                const eventsFromCalendar = comp.getAllSubcomponents('vevent');

                // Map the iCal events to a format that react-big-calendar expects
                const mappedEvents = eventsFromCalendar.map(event => {
                    const e = new ICAL.Event(event);
                    return {
                        title: e.summary,
                        start: e.startDate.toJSDate(),
                        end: e.endDate.toJSDate(),
                    };
                });

                setEvents(mappedEvents); // Update state with the events
            })
            .catch(error => {
                console.error('Error fetching calendar events:', error);
            });
    }, []);

    return (
    <div className = "Calendar-Page">
        <StickyNavBar />
        <h1>Calendar</h1>
        <Calendar
            localizer={localizer}
            defaultDate ={new Date()}
            defaultView ="month"
            events ={events} //pass events from the state
        /> 
    </div>
    );
}
export default CalendarPage;