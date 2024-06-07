import React, { useState } from 'react';
import authService from '../services/authService';
import { ToastContainer, toast } from "react-toastify";
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'user',
  });

const navigate = useNavigate()
  const { name, email, password, role } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await authService.register(formData);
      const notify = () => toast("Registration Success!");
      notify()
      // alert('Registration successful');
      navigate('/login')
    } catch (error) {
      const notify = () => toast("Error during registration");
      notify()
      
    }
  };

  return (
   <>
    <div className='container m-5 d-flex justify-content-center   '    >
      


    <form onSubmit={onSubmit} style={{width:'70%'}}>
    <h2> Register Now</h2>
      <input type="text" className='form-control mt-2 p-2' name="name" value={name} onChange={onChange} placeholder="Name" required />
      <input type="email" className='form-control mt-2 p-2' name="email" value={email} onChange={onChange} placeholder="Email" required />
      <input type="password" className='form-control mt-2 p-2' name="password" value={password} onChange={onChange} placeholder="Password" required />
      <select name="role" className='form-control mt-2 p-2' value={role} onChange={onChange}>
        <option value="user">User</option>
        <option value="ngo">NGO</option>
        <option value="volunteer">Volunteer</option>
      </select>
      <button className='form-control btn btn-danger mt-2' type="submit">Register</button>
      
      <Link to='/login' className='btn btn-primary mt-2 form-control' > Already Have Account! Login Now</Link>
    </form>
    
    </div>
<ToastContainer/>
    
   
   </>
  );
};

export default Register;
