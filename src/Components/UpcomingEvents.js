// UpcomingEvents.js
import React from 'react';

const UpcomingEvents = ({ events }) => {
  return (
    <div className="upcoming-events">
      <h3>Upcoming Events</h3>
      <ul>
        {events.map(event => (
          <li key={event.id}>
            {event.event} on {new Date(event.date).toLocaleDateString()}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UpcomingEvents;
