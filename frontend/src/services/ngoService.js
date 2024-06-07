import axios from 'axios';

const API_URL = 'http://localhost:5000/api/ngos';

const createNGO = (ngoData) => {
  return axios.post(`${API_URL}/create`, ngoData);
};

const getNGO = () => {
  return axios.get(`${API_URL}/getngos`);
};

const createEvent = (eventData) => {
  return axios.post(`${API_URL}/events`, eventData);
};

const getEvents = () => {
  return axios.get(`${API_URL}/events`);
};

export default { createNGO, createEvent, getEvents ,getNGO};
