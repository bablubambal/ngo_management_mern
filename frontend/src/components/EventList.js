import React, { useState, useEffect } from 'react';
import ngoService from '../services/ngoService';
import { Link } from 'react-router-dom';

const EventList = () => {
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

  return (
   
    <>
     {/* <div>

<h2>Events</h2>
<ul>
  {events?.map((event) => (
    <li key={event._id}>
      <h3>{event.title}</h3>
      <p>{event.description}</p>
      <img src = {event.image} />
      <p>{new Date(event.date).toLocaleDateString()}</p>
      <p>NGO: {event.ngo.name}</p>
    </li>
  ))}
</ul>
</div> */}
    
    <div className="container mb-5">
      <div className="row my-3">
        <div className="col text-center">
          <img src="assets/love-icon.png" alt="" width="20px" />
          <p className="m-0">READY TO HELP THEM</p>
          <h1>Upcoming Events</h1>
        </div>
      </div>
      <div className="row text-center" id="event">
        {
          events?.map((event)=>(
            <div
          className="col-md-6 col-lg-4"
          data-aos="flip-left"
          data-aos-delay="10"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-anchor-placement="top-center"
        >
          <div className="card">
            <span>{new Date(event.date).toLocaleDateString()}</span>
            <img src={event.image} className="card-img-top" alt="..." />
            <div className="card-body text-center">
              <h5>{event.title}</h5>
              <p className="text-muted">
                <small
                  >Organized By
                  <br className="d-none d-md-block" />
                  NGO: {event.ngo.name}</small
                >
              </p>
              
              <Link to={`/event-details/${event._id}`}>Know More</Link>
            </div>
          </div>
        </div>
          ))

        }
        {/* <div
          className="col-md-6 col-lg-4"
          data-aos="fade-up"
          data-aos-delay="10"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-anchor-placement="top-center"
        >
          <div className="card">
            <span> 1 Apr </span>
            <img src="assets/img-6.jpeg" className="card-img-top" alt="..." />
            <div className="card-body text-center">
              <h5>Opening New Shelter Home</h5>
              <p className="text-muted">
                <small
                  >Some quick example text to build
                  <br className="d-none d-md-block" />
                  on the card title</small
                >
              </p>
              <a href="">Read More</a>
            </div>
          </div>
        </div>
        <div
          className="col-md-6 col-lg-4"
          data-aos="flip-right"
          data-aos-delay="10"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-anchor-placement="top-center"
        >
          <div className="card">
            <span> 2 Aug </span>
            <img src="assets/img-7.jpeg" className="card-img-top" alt="..." />
            <div className="card-body text-center">
              <h5>Opening New Free Clinics</h5>
              <p className="text-muted">
                <small
                  >Some quick example text to build
                  <br className="d-none d-md-block" />
                  on the card title</small
                >
              </p>
              <a href="">Read More</a>
            </div>
          </div>
        </div> */}
      </div>
    </div>
    
    
    
    </>
  );
};

export default EventList;
