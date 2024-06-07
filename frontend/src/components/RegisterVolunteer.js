import React, { useState, useEffect } from 'react';
import ngoService from '../services/ngoService';
import volunteerService from '../services/volunteerService';

const RegisterVolunteer = () => {
  const [formData, setFormData] = useState({
    eventId: '',
    userId: '',
  });

  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await ngoService.getEvents();
        setEvents(res.data);
      } catch (error) {
        alert('Error fetching events');
      }
    };
    fetchEvents();
  }, []);
console.log(localStorage.getItem('token'))
  const { eventId, userId } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await volunteerService.registerVolunteer(eventId, userId);
      alert('Volunteer registered successfully');
    } catch (error) {
      alert('Error during volunteer registration');
    }
  };

  return (

    <>
    <div className='container m-5 d-flex justify-content-center   '    >
    <form onSubmit={onSubmit} style={{width:'70%'}}>
      <select name="eventId" className='form-control mt-2 p-2' value={eventId} onChange={onChange} required>
        <option value="">Select Event</option>
        {events?.map((event) => (
          <option key={event._id} value={event._id}>
            {event.title}
          </option>
        ))}
      </select>
      <input type="text" name="userId" className='form-control mt-2 p-2' value={userId} onChange={onChange} placeholder="User ID" required />
      <button className='form-control mt-2 btn btn-danger' type="submit">Register as Volunteer</button>
    </form>
    </div>
    
    </>
   
  );
};

export default RegisterVolunteer;
