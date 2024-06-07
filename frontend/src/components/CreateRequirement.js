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
    <form onSubmit={onSubmit}>
      <input type="text" name="title" value={title} onChange={onChange} placeholder="Title" required />
      <textarea name="description" value={description} onChange={onChange} placeholder="Description" required />
      <input type="date" name="date" value={date} onChange={onChange} required />
      <button type="submit">Create Requirement</button>
    </form>
  );
};

export default CreateRequirement;
