import React, { useState } from 'react';
import ngoService from '../services/ngoService';

const CreateNGO = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
  });

  const { name, description } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await ngoService.createNGO(formData);
      alert('NGO created successfully');
    } catch (error) {
      alert('Error during NGO creation');
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <input type="text" name="name" value={name} onChange={onChange} placeholder="NGO Name" required />
      <textarea name="description" value={description} onChange={onChange} placeholder="Description" required />
      <button type="submit">Create NGO</button>
    </form>
  );
};

export default CreateNGO;
