import React, { useState, useEffect } from 'react';
import ngoService from '../services/ngoService';
import { Link } from 'react-router-dom';

const CollobEvents = () => {
    const [collaboratedEvents, setCollaboratedEvents] = useState([]);

   useEffect(() => {
    // const fetchEvents = async () => {
    //   try {
    //     const res = await ngoService.getEvents();
    //     setEvents(res.data);
    //   } catch (error) {
    //     alert('Error fetching events');
    //   }
    // };
    // fetchEvents();
    const fetchCollaboratedEvents = async () => {
        try {
          const res = await ngoService.getCollaboratedEvents();
          setCollaboratedEvents(res.data);
        } catch (error) {
          alert('Error fetching collaborated events');
        }
      };
      fetchCollaboratedEvents()
  }, []);

  return (
   
    <>

    
    <div className="container mb-5">
      <div className="row my-3">
        <div className="col text-center">
          <img src="assets/love-icon.png" alt="" width="20px" />
          <p className="m-0">GET Ready</p>
          <h1>Collaborated Events</h1>
        </div>
      </div>
      {/* <ul>
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
      </ul> */}
      <div className="row text-center" id="event">
        {
          collaboratedEvents?.map((event)=>(
            <div
          className="col-md-6 col-lg-4"
          data-aos="flip-left"
          data-aos-delay="10"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-anchor-placement="top-center"
          key={event._id}
        >
          <div className="card">
            <span>{new Date(event.date).toLocaleDateString()}</span>
            <img src={event.image} className="card-img-top" alt="..." />
            <div className="card-body text-center">
              <h5>{event.title}</h5>
              <p className="text-muted">
             
                <small
                  >Hosted By
                  <br className="d-none d-md-block" />
                  NGO: <b>{event.ngo.name}</b></small>
                <small ><p>Collaborating NGOs:</p>
                  {event.collaboratingNGOs.length > 0 && (
              <>
                  {event.collaboratingNGOs.map((ngo) => (
                    <h6 key={ngo._id}>{ngo.name}</h6>
                  ))}
                
              </>
            )}
                  </small>
              </p>
              
              <Link to={`/event-details/${event._id}`}>Know More</Link>
            </div>
          </div>
        </div>
          ))

        }


      </div>
    </div>
    
    
    
    </>
  );
};

export default CollobEvents;
