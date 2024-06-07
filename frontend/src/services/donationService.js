import axios from 'axios';

const API_URL = 'http://localhost:5000/api/donations';

const createDonation = (donationData) => {
  return axios.post(`${API_URL}/create`, donationData);
};

export default { createDonation };
