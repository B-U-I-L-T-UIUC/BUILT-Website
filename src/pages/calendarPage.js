import React, { useState, useEffect} from 'react';
import StickyNavBar from '../components/stickyNavBar';
import '../styles/calendarPage.css';
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css"; //after installing dependencies
import axios from 'axios';

const localizer = momentLocalizer(moment);

function CalendarPage() {
    const [events, setEvents] = useState([]);
    useEffect(() => {
        const apiKey = 'YOUR_GOOGLE_API_KEY'; //put real API key once we have it
        const calendarId = 'c_8ad2baa493507a75ae60a1871af32c2947f15494ebce1d0bdec1e02cc97c2954@group.calendar.google.com'; // Google Calendar ID
        const calendarUrl = `https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events?key=${apiKey}`;

        // Fetch the calendar events from Google API
        axios.get(calendarUrl)
            .then(response => {
                const eventsFromCalendar = response.data.items; // Array of events from Google Calendar

                //Map the Google Calendar events to a format that react-big-calendar expects
                const mappedEvents = eventsFromCalendar.map(event => {
                    return {
                        title: event.summary,
                        start: new Date(event.start.dateTime || event.start.date), // Handle date and dateTime fields
                        end: new Date(event.end.dateTime || event.end.date),
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