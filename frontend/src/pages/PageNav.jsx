import React from 'react'
import authService from '../services/authService'
import { useNavigate } from 'react-router-dom'

const PageNav = () => {
    const navigate =  useNavigate()
  return (
    <>
     {/* navbar  */}
     <nav className="navbar navbar-expand-lg sticky-top border-bottom" id="nav_bar">
      <div className="container-fluid px-md-5">
        <a className="navbar-brand" href="#"
          ><img src="assets/logo.png" alt="" height="65px" id="nav_img"
        /></a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler"><i className="fa-solid fa-bars"></i></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end text-center pe-3"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item" id="nav_a1">
              <a className="nav-link active" href="/create-event">New Event</a>
            </li>
            <li className="nav-item" id="nav_a2">
              <a className="nav-link" href="/events">Events</a>
            </li>
            <li className="nav-item" id="nav_a3">
              <a className="nav-link" href="/donate">Donate</a>
            </li>
            <li className="nav-item" id="nav_a4">
              <a className="nav-link" href="/register-volunteer">Volunteer</a>
            </li>
            <li className="nav-item" id="nav_a5">
              <a className="nav-link" onClick={()=> {
                authService.logout()
                alert('Logout')
                navigate('/')
              }}>Logout</a>
            </li>
            {/* <li className="nav-item" id="nav_a1">
              <a className="nav-link " href="/register">Register</a>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
      
    </>
  )
}

export default PageNav
