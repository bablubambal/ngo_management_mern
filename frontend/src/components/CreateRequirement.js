// src/components/CreateRequirement.js
import React, { useState } from 'react';
import volunteerRequirementService from '../services/volunteerRequirementService';

const CreateRequirement = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    date: '',
    userId: JSON.parse(localStorage.getItem('token'))?.payload?.userId  || ''
  });

  const { title, description, date } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token'); // Adjust based on your auth handling
    try {
      await volunteerRequirementService.createRequirement(formData, token);
      alert('Requirement created successfully');
    } catch (error) {
      alert('Error during requirement creation');
    }
  };

  return (
   <>
   
   <div className='container m-5 d-flex justify-content-center   '>
   <form onSubmit={onSubmit} style={{width:'80%'}} >
    <h1>Post Your Volunteer Requirement</h1>
      <input className='form-control mt-2' type="text" name="title" value={title} onChange={onChange} placeholder="Title" required />
      <textarea  className='form-control mt-2' name="description" value={description} onChange={onChange} placeholder="Description" required />
      <input className='form-control mt-2' type="date" name="date" value={date} onChange={onChange} required />
      <button className='form-control mt-2 btn btn-danger' type="submit">Create Requirement</button>
    </form>
   </div>
   </>
  );
};

export default CreateRequirement;
