import axios from 'axios';

const API_URL = 'http://localhost:5000/api/events';

const registerVolunteer = (eventId, userId) => {
  return axios.post(`${API_URL}/register-volunteer`, { eventId, userId });
};

export default { registerVolunteer };
