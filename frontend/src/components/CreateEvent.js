import React, { useState, useEffect } from 'react';
import ngoService from '../services/ngoService';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

const CreateEvent = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    location: '',
    category: '',
    date: '',
    image:'',
    ngoId: '',
    collaboratingNGOs: [],
       

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

  const { title, description, date, image,location,collaboratingNGOs, ngoId } = formData;

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
      <input className='form-control mt-2' type="text" name="location" value={location} onChange={onChange} placeholder="Event Venue Location" required />
      <textarea className='form-control mt-2' name="description" value={description} onChange={onChange} placeholder="Description" required />
      <input className='form-control mt-2' type="text" name="image" value={image} onChange={onChange} placeholder="Event Image URL" required />
      <input className='form-control mt-2' type="date" name="date" value={date} onChange={onChange} required />
      <select className='form-control mt-2' name="ngoId" value={ngoId} onChange={onChange} required>
        <option value="">Select Your NGO</option>
        {ngos.map((ngo) => (
          <option key={ngo._id} value={ngo._id}>
            {ngo.name}
          </option>
        ))}
      </select>
      <select className='form-control mt-2' name="collaboratingNGOs"  value={collaboratingNGOs} onChange={onChange}>
        <option value="">Select Collaborating NGOs</option>
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

// src/components/CreateEvent.js

// import React, { useState, useEffect } from 'react';
// import ngoService from '../services/ngoService';

// const CreateEvent = () => {
//   const [formData, setFormData] = useState({
//     title: '',
//     description: '',
//     date: '',
//     ngoId: '',
    
//   });

//   const [ngos, setNgos] = useState([]);

//   useEffect(() => {
//     const fetchNgos = async () => {
//       try {
//         const res = await ngoService.getEvents();
//         setNgos(res.data);
//       } catch (error) {
//         alert('Error fetching NGOs');
//       }
//     };
//     fetchNgos();
//   }, []);

//   const { title, description, date, ngoId, collaboratingNGOs } = formData;

//   const onChange = (e) => {
//     const { name, value } = e.target;
//     if (name === 'collaboratingNGOs') {
//       setFormData({
//         ...formData,
//         [name]: [...e.target.selectedOptions].map((option) => option.value),
//       });
//     } else {
//       setFormData({ ...formData, [name]: value });
//     }
//   };

//   const onSubmit = async (e) => {
//     e.preventDefault();
//     const token = localStorage.getItem('token'); // Adjust based on your auth handling
//     try {
//       await ngoService.createEvent(formData, token);
//       alert('Event created successfully');
//     } catch (error) {
//       alert('Error during event creation');
//     }
//   };

//   return (
//     <form onSubmit={onSubmit}>
//       <input type="text" name="title" value={title} onChange={onChange} placeholder="Title" required />
//       <textarea name="description" value={description} onChange={onChange} placeholder="Description" required />
//       <input type="date" name="date" value={date} onChange={onChange} required />
//       <select name="ngoId" value={ngoId} onChange={onChange} required>
//         <option value="">Select Your NGO</option>
//         {ngos.map((ngo) => (
//           <option key={ngo._id} value={ngo._id}>
//             {ngo.name}
//           </option>
//         ))}
//       </select>
//       <select name="collaboratingNGOs" multiple value={collaboratingNGOs} onChange={onChange}>
//         <option value="">Select Collaborating NGOs</option>
//         {ngos.map((ngo) => (
//           <option key={ngo._id} value={ngo._id}>
//             {ngo.name}
//           </option>
//         ))}
//       </select>
//       <button type="submit">Create Event</button>
//     </form>
//   );
// };

// export default CreateEvent;
