import React, { useState, useEffect } from 'react';
import donationService from '../services/donationService';
import ngoService from '../services/ngoService';
import authService from '../services/authService';

const Donate = () => {
  const [formData, setFormData] = useState({
    amount: '',
    userId: '',
    ngoId: '',
  });

  const [ngos, setNgos] = useState([]);
  const [userdata,setUserData] = useState([]);

  useEffect(() => {
    const fetchNgos = async () => {
      try {
        const res = await ngoService.getNGO();
        setNgos(res.data);
      } catch (error) {
        alert('Error fetching NGOs');
      }
    };
    const fetchUsers = async () => {
      try {
        const res = await authService.getAllUsers();
        setUserData(res.data);
      } catch (error) {
        alert('Error fetching NGOs');
      }
    };
    fetchNgos();
    fetchUsers();
  }, []);

  const { amount, userId, ngoId } = formData;
  console.log('donate',formData);

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await donationService.createDonation(formData);
      alert('Donation made successfully');
    } catch (error) {
      alert('Error during donation');
    }
  };

  return (
    <>
    <div className='container m-5 d-flex justify-content-center   '>
    <form onSubmit={onSubmit} style={{width:'80%'}}>
      <h2> Donate Here...</h2>
      <input className='form-control mt-2' type="number" name="amount" value={amount} onChange={onChange} placeholder="Amount" required />
      <select className='form-control mt-2' name="userId" value={userId} onChange={onChange} required>
        <option value="">Select User</option>
        {userdata.map((ngo) => (
          <option key={ngo._id} value={ngo._id}>
            {ngo.name}
          </option>
        ))}
      </select>
      {/* <input className='form-control mt-2' type="text" name="userId" value={userId} onChange={onChange} placeholder="User ID" required /> */}
      <select className='form-control mt-2' name="ngoId" value={ngoId} onChange={onChange} required>
        <option value="">Select NGO</option>
        {ngos.map((ngo) => (
          <option key={ngo._id} value={ngo._id}>
            {ngo.name}
          </option>
        ))}
      </select>
      <button className='form-control mt-2 btn btn-danger' type="submit">Donate</button>
    </form>
    </div>
    </>
  );
};

export default Donate;
