// src/components/Dashboard.js
import React, { useState, useEffect } from 'react';
import ngoService from '../services/ngoService';

const EveryEvent = () => {
  const [events, setEvents] = useState([]);
  const [collaboratedEvents, setCollaboratedEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await ngoService.getEvents();
        setEvents(res.data);
      } catch (error) {
        alert('Error fetching events');
      }
    };

    const fetchCollaboratedEvents = async () => {
      try {
        const res = await ngoService.getCollaboratedEvents();
        setCollaboratedEvents(res.data);
      } catch (error) {
        alert('Error fetching collaborated events');
      }
    };

    fetchEvents();
    fetchCollaboratedEvents();
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      <h2>Your Events</h2>
      <ul>
        {events.map((event) => (
          <li key={event._id}>
            <h4>{event.title}</h4>
            <p>{event.description}</p>
            <p>Date: {new Date(event.date).toLocaleDateString()}</p>
            <p>Hosted by: {event.ngo.name}</p>
            {event.collaboratingNGOs.length > 0 && (
              <>
                <p>Collaborating NGOs:</p>
                <ul>
                  {event.collaboratingNGOs.map((ngo) => (
                    <li key={ngo._id}>{ngo.name}</li>
                  ))}
                </ul>
              </>
            )}
          </li>
        ))}
      </ul>

      <h2>Collaborated Events</h2>
      <ul>
        {collaboratedEvents.map((event) => (
          <li key={event._id}>
            <h4>{event.title}</h4>
            <p>{event.description}</p>
            <p>Date: {new Date(event.date).toLocaleDateString()}</p>
            <p>Hosted by: {event.ngo.name}</p>
            {event.collaboratingNGOs.length > 0 && (
              <>
                <p>Collaborating NGOs:</p>
                <ul>
                  {event.collaboratingNGOs.map((ngo) => (
                    <li key={ngo._id}>{ngo.name}</li>
                  ))}
                </ul>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EveryEvent;
