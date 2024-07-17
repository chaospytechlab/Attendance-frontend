import React, { useEffect, useState } from 'react';
import { getEvents } from '../../../services/api';

const UpcomingEvents = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await getEvents();
      setEvents(data.slice(-5));
    };
    fetchData();
  }, []);

  return (
    <div>
      <h2>Upcoming Events</h2>
      <ul>
        {events.map(event => (
          <li key={event.id}>
            {event.date}: {event.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UpcomingEvents;
