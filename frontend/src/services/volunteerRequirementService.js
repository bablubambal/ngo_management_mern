// src/services/volunteerRequirementService.js
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/volunteer-requirements';

const createRequirement = (requirementData, token) => {
  return axios.post(API_URL, requirementData, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

const getRequirements = () => {
  return axios.get(API_URL);
};

const getUserRequirements = (token) => {
  return axios.get(`${API_URL}/my-requirements`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export default { createRequirement, getRequirements, getUserRequirements };
