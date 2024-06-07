import React, { useState, useEffect } from 'react';
import ngoService from '../services/ngoService';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

const CreateEvent = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    date: '',
    image:'',
    ngoId: '',
  });

  const [ngos, setNgos] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    const fetchNgos = async () => {
      try {
        const res = await ngoService.getNGO();
        console.log('ressss',res)
        setNgos(res.data);
      } catch (error) {
        console.log('myerrorr',error)
        alert('Error fetching NGOs');
      }
    };
    fetchNgos();
  }, []);

  const { title, description, date, image, ngoId } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await ngoService.createEvent(formData);
      const notify = ()=> toast('Event created successfully');
      notify()
      navigate('/events')
    } catch (error) {
      const notify = ()=>  toast('Error during event creation');
      notify()
    }
  };

  return (
   <>
   <div className='container m-5 d-flex justify-content-center   ' >
   <form onSubmit={onSubmit}  style={{width:'80%'}}>
    <h2>Events</h2>
      <input className='form-control mt-2' type="text" name="title" value={title} onChange={onChange} placeholder="Event Title" required />
      <textarea className='form-control mt-2' name="description" value={description} onChange={onChange} placeholder="Description" required />
      <input className='form-control mt-2' type="text" name="image" value={image} onChange={onChange} placeholder="Event Image URL" required />
      <input className='form-control mt-2' type="date" name="date" value={date} onChange={onChange} required />
      <select className='form-control mt-2' name="ngoId" value={ngoId} onChange={onChange} required>
        <option value="">Select NGO</option>
        {ngos.map((ngo) => (
          <option key={ngo._id} value={ngo._id}>
            {ngo.name}
          </option>
        ))}
      </select>
      <button className='form-control mt-2 btn btn-danger' type="submit">Create Event</button>
    </form>
<ToastContainer/>
    </div>
   
   </>
  );
};

export default CreateEvent;
