// src/components/Home.js
import React, { useState, useEffect } from 'react';
import volunteerRequirementService from '../services/volunteerRequirementService';

const ShowRequirements = () => {
  const [requirements, setRequirements] = useState([]);

  useEffect(() => {
    const fetchRequirements = async () => {
      try {
        const res = await volunteerRequirementService.getRequirements();
        setRequirements(res.data);
      } catch (error) {
        alert('Error fetching requirements');
      }
    };
    fetchRequirements();
  }, []);

  return (
    <>
      <div>
     
      <section id="t-cards" className="mt-5">
  <div className="container pb-md-5 mb-md-4 mb-3">
    <div className="row">
      <div className="col-12 text-center mb-5">
        <h1>
         Volunteer Requirements :  <img src="assets/love-icon.png" alt="" width="15px" />
        </h1>
        <p> Join Our NGO's </p>
      </div>
      
          {requirements?.map((requirement) => (
            <>
            <div key={requirement._id}
        className="col-sm-6 col-md-3"
        data-aos="zoom-in"
        data-aos-delay="10"
        data-aos-duration="600"
        data-aos-easing="ease-in-out"
        data-aos-anchor-placement="center-bottom"
      >
        <div className="panel panel-default panel-card">
          {/* <div className="panel-heading">
            <img src="assets/img-1.jpg" alt="" />
          </div> */}
          <div className="panel-figure">
            <i className="fa-solid fa-book-open fa-bounce"></i>
          </div>
          <div className="panel-body text-center">
            <h4 className="panel-header">{requirement.title}</h4>
            <p className="m-0">
              <small>{requirement.description}</small>
            </p>
          </div>
          <div className="panel-thumbnails">
            <div className="row">
              <div className="col-12 text-center">
                <p className="m-0">
                <p>Date: {new Date(requirement.date).toLocaleDateString()}</p>
              <p>Created by: {requirement.createdBy.name}</p>
                </p>
                {/* <a href="">Read More</a> */}
              </div>
            </div>
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
            <img src="assets/img-1.jpg" alt="" />
          </div>
          <div className="panel-figure">
            <i className="fa-solid fa-book-open fa-bounce"></i>
          </div>
          <div className="panel-body text-center">
            <h4 className="panel-header">Education</h4>
            <p className="m-0">
              <small>Education for children</small>
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
      </div> */}
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
      </div> */}
    </div>
  </div>
</section>
     
    </div>

    
    </>
  
  );
};

export default ShowRequirements;



