import React from 'react';
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import CreateNGO from './components/CreateNGO';
import CreateEvent from './components/CreateEvent';
import EventList from './components/EventList';
import RegisterVolunteer from './components/RegisterVolunteer';
import Donate from './components/Donate';
import EventDetails from './components/EventDetails';
import Home from './components/Home';
import Homepage from './pages/Homepage';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
         
        <Route path="/" element={<Homepage/>} exact />
          <Route path="/register" element={<Register/>} />
          <Route path="/login" element={<Login></Login>} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path='/event-details/:id' element={<EventDetails />} />
          <Route path="/create-ngo" element={<CreateNGO></CreateNGO>} />
          <Route path="/create-event" element={<CreateEvent></CreateEvent>} />
          <Route path="/events" element={<EventList></EventList>} />
          <Route path="/register-volunteer" element={<RegisterVolunteer></RegisterVolunteer>} />
          <Route path="/donate" element={<Donate></Donate>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
