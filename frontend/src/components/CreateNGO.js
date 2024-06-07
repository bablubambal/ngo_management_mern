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
    <>
   <div className='container m-5 d-flex justify-content-center   '>
   <form onSubmit={onSubmit} style={{width:'80%'}}>
    <h2> Create Your NGO</h2>
      <input className='form-control mt-2' type="text" name="name" value={name} onChange={onChange} placeholder="NGO Name" required />
      <textarea className='form-control mt-2' name="description" value={description} onChange={onChange} placeholder="Description" required />
      <button className='form-control mt-2 btn btn-danger' type="submit">Create NGO</button>
    </form>
   </div>
    </>
  );
};

export default CreateNGO;
