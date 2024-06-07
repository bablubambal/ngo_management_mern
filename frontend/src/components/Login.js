import React, { useState } from 'react';
import authService from '../services/authService';
import { useNavigate,Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const navigate = useNavigate()

  const { email, password } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await authService.login(formData);
      
      localStorage.setItem('token', JSON.stringify(response.data));
      const notify = () => toast('Login successful');
      notify()
      navigate('/dashboard')
    } catch (error) {
      const notfy = () => toast('Error during login');
      notfy()

    
    }
  };

  return (
   <>
   <div className='container d-flex justify-content-center align-items-center mt-5'>

   <form onSubmit={onSubmit}  style={{width:'80%'}}>
      <h2>Login Here...</h2>
      <input  type="email" className='form-control mt-2' name="email" value={email} onChange={onChange} placeholder="Email" required />
      <input type="password" className='form-control mt-2' name="password" value={password} onChange={onChange} placeholder="Password" required />
      <button type="submit" className='form-control mt-2 btn btn-danger'>Login</button>
    <Link to='/register' className='btn btn-primary mt-2 form-control' >New User | Register Here</Link>
    </form>
   </div>
   <ToastContainer/>
   

   </>
  );
};

export default Login;
