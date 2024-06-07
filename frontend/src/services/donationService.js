import axios from 'axios';

const API_URL = 'http://localhost:5000/api/donations';

const createDonation = (donationData) => {
  return axios.post(`${API_URL}/create`, donationData);
};
const getDonation = () => {
  return axios.get(`${API_URL}/create`, );
};

const getDonors = () => {
  return axios.get(`${API_URL}/donors`,);
};

export default { createDonation,getDonation ,getDonors};
