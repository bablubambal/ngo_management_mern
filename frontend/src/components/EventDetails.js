import React, { useState, useEffect } from 'react';
import ngoService from '../services/ngoService';
import {useParams} from 'react-router-dom'
const EventDetails = () => {
    
  const [events, setEvents] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await ngoService.getEvents();
        setEvents(res.data);
        // setEvents(events.filter(event => event._id == id))
        
      } catch (error) {
        alert('Error fetching events');
      }
    };
    fetchEvents();
  }, []);
  let filderedevetn =  events.filter(event => event._id == id)
  console.log(filderedevetn)

  return (
   
    <>
     {/* <div>

<h2>Events</h2>
<ul>
  {filderedevetn?.map((event) => (
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
      <div className=" my-3">
        <div className="col text-center">
          <img src="assets/love-icon.png" alt="" width="20px" />
          <p className="m-0">READY TO HELP THEM</p>
          <h1> Events Details</h1>
        </div>
      </div>
      <div className=" text-center" id="event">
        {
          filderedevetn?.map((event)=>(
            <div
          className="col-md-8 col-lg-8 "
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
              <h5> Title : {event.title}</h5>
              <p className="text-muted">
                <small
                  >Organized By
                  <br className="d-none d-md-block" />
                  NGO: {event.ngo.name}</small
                >
              </p>
              <p> Description:
                {event.description}
              </p>
              <p> Event On : <span>{new Date(event.date).toLocaleDateString()}</span> </p>
            
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

export default EventDetails;
