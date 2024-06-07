import axios from 'axios';

const API_URL = 'http://localhost:5000/api/users';

const register = (userData) => {
  return axios.post(`${API_URL}/register`, userData);
};

const login = (userData) => {
  return axios.post(`${API_URL}/login`, userData);
};

const getAllUsers = ()=>{
  return axios.get(`${API_URL}/allusers`);

}


const logout = ()=>{
  localStorage.clear()
  return true

}

const getCurrentUser = () => {
  const token = localStorage.getItem('token');
  if (!token) return null;

  const user = JSON.parse(atob(token.split('.')[1]));
  console.log('userrrrrget current user',user)
  return user;
};


export default { register, login,getAllUsers,logout,getCurrentUser };
