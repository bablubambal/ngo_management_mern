// src/components/Dashboard.js
import React, { useState, useEffect } from 'react';

import donationService from '../services/donationService';
import authService from '../services/authService';
import ngoService from '../services/ngoService';

const GetDonors = () => {
  const [events, setEvents] = useState([]);
  const [collaboratedEvents, setCollaboratedEvents] = useState([]);
  const [donors, setDonors] = useState([]);
  const currentUser = authService.getCurrentUser();

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
        // const token = localStorage.getItem('token'); // Adjust based on your auth handling
        const res = await ngoService.getCollaboratedEvents();
        setCollaboratedEvents(res.data);
      } catch (error) {
        alert('Error fetching collaborated events');
      }
    };

    const fetchDonors = async () => {
      try {
        // const token = localStorage.getItem('token'); // Adjust based on your auth handling
        const res = await donationService.getDonors();
        setDonors(res.data);
      } catch (error) {
        alert('Error fetching donors');
      }
    };

    fetchEvents();
    fetchCollaboratedEvents();
    fetchDonors();
  }, []);

  return (
    <div>
      {/* <h1>Dashboard</h1>
      <h2>Welcome, {currentUser?.name}</h2> */}

      {/* <h3>Your Events</h3>
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
      </ul> */}

      {/* <h3>Collaborated Events</h3>
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
      </ul> */}

<section id="t-cards" className="mt-5">
  <div className="container pb-md-5 mb-md-4 mb-3">
    <div className="row">
      <div className="col-12 text-center mb-5">
        <h1>
          Our Donor's <img src="assets/love-icon.png" alt="" width="15px" />
        </h1>
      </div>
      {donors.map((donor) => (
        <>
         {/* <li >
            <p>Donor: {donor.donor.name} ({donor.donor.email})</p>
            <p>Amount: ${donor.amount}</p>
            <p>NGO: {donor.ngo.name}</p>
          </li> */}
          <div
          key={donor._id}
        className="col-sm-6 col-md-3"
        data-aos="zoom-in"
        data-aos-delay="10"
        data-aos-duration="600"
        data-aos-easing="ease-in-out"
        data-aos-anchor-placement="center-bottom"
      >
        <div className="panel panel-default panel-card">
          <div className="panel-heading">
            <img src="assets/img-1.jpg" alt="" />
          </div>
          <div className="panel-figure">
            <i className="fa-solid fa-book-open fa-bounce"></i>
          </div>
          <div className="panel-body text-center ">
            <h4 className="panel-header">Amount: ${donor.amount}</h4>
            <p className="m-0">
              <small>Donor: {donor.donor.name} ({donor.donor.email})</small>
            </p>
            <p className=''> {donor.ngo.name}</p>
          </div>
          <div className="panel-thumbnails">
            
          </div>
        </div>
      </div>
        
        </>
         
        ))}

     
      

      {/* <div
        className="col-sm-6 col-md-3"
        data-aos="zoom-in"
        data-aos-delay="10"
        data-aos-duration="600"
        data-aos-easing="ease-in-out"
        data-aos-anchor-placement="center-bottom"
      >
        <div className="panel panel-default panel-card">
          <div className="panel-heading">
            <img src="assets/img-2.jpeg" alt="" />
          </div>
          <div className="panel-figure">
            <i className="fa-solid fa-stethoscope fa-bounce"></i>
          </div>
          <div className="panel-body text-center">
            <h4 className="panel-header">Health</h4>
            <p className="m-0">
              <small>Medicine for needed people</small>
            </p>
          </div>
          <div className="panel-thumbnails">
            <div className="row">
              <div className="col-12 text-center">
                <p className="m-0">
                  Lorem ipsum dolor sit, ame elit. Saepe, nam.
                </p>
                <a href="">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="col-sm-6 col-md-3"
        data-aos="zoom-in"
        data-aos-delay="10"
        data-aos-duration="600"
        data-aos-easing="ease-in-out"
        data-aos-anchor-placement="center-bottom"
      >
        <div className="panel panel-default panel-card">
          <div className="panel-heading">
            <img src="assets/img-3.jpg" alt="" />
          </div>
          <div className="panel-figure">
            <i className="fa-solid fa-house-circle-check fa-bounce"></i>
          </div>
          <div className="panel-body text-center">
            <h4 className="panel-header">Shelter</h4>
            <p className="m-0">
              <small>Shelter for homeless people</small>
            </p>
          </div>
          <div className="panel-thumbnails">
            <div className="row">
              <div className="col-12 text-center">
                <p className="m-0">
                  Lorem ipsum dolor sit, ame elit. Saepe, nam.
                </p>
                <a href="">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="col-sm-6 col-md-3"
        data-aos="zoom-in"
        data-aos-delay="10"
        data-aos-duration="600"
        data-aos-easing="ease-in-out"
        data-aos-anchor-placement="center-bottom"
      >
        <div className="panel panel-default panel-card">
          <div className="panel-heading">
            <img src="assets/img-4.jpg" alt="" />
          </div>
          <div className="panel-figure">
            <i className="fa-solid fa-dog fa-bounce"></i>
          </div>
          <div className="panel-body text-center">
            <h4 className="panel-header">Animal Care</h4>
            <p className="m-0">
              <small>Shelter and adoption for animals</small>
            </p>
          </div>
          <div className="panel-thumbnails">
            <div className="row">
              <div className="col-12 text-center">
                <p className="m-0">
                  Lorem ipsum dolor sit, ame elit. Saepe, nam.
                </p>
                <a href="">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
       */}
    </div>
  </div>
</section>
     
     
       
     
    </div>
  );
};

export default GetDonors;
