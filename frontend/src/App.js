// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import CreateNGO from './components/CreateNGO';
import CreateEvent from './components/CreateEvent';
import EventList from './components/EventList';
import RegisterVolunteer from './components/RegisterVolunteer';
import Donate from './components/Donate';
import HomePage from './pages/Homepage'
import CreateRequirement from './components/CreateRequirement';
import Dashboard from './pages/Dashboard';
import ProtectedRoute from './components/ProtectedRoute';
import EventDetails from './components/EventDetails'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route element={<ProtectedRoute roles={['ngo']} />}>
          <Route path="/create-ngo" element={<CreateNGO />} />
          <Route path="/create-event" element={<CreateEvent />} />
          <Route path="/create-requirement" element={<CreateRequirement />} />
        </Route>
        <Route element={<ProtectedRoute />}>
          <Route path="/events" element={<EventList />} />
          <Route path='/event-details/:id' element={<EventDetails />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
        <Route element={<ProtectedRoute roles={['volunteer']} />}>
          <Route path="/register-volunteer" element={<RegisterVolunteer />} />
        </Route>
        <Route path="/donate" element={<Donate />} />
      </Routes>
    </Router>
  );
}

export default App;
