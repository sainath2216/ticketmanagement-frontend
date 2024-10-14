
import React, { useState } from 'react';
import axios from 'axios';

import "./index.css"

const RaiseComplaint = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (title === "" || description === "" ) {
        alert("title or description cannot be empty..!");
      }
    const token = localStorage.getItem('token');
    try {
      await axios.post(
        'http://localhost:5000/api/complaints/raise',
        { title, description },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      alert('Complaint raised successfully');
      window.location.href = '/user/dashboard';
    } catch (error) {
      alert('Error raising complaint');
    }
  };

  return (
    <div className='app-container'>
        <div className='container'>
        <h2 className='heading'>Raise Complaint</h2>
        <form className='form' onSubmit={handleSubmit}>
            <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className='input'
            />
            <textarea
            className='textarea'
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            />
            <button className='button' type="submit">Raise Complaint</button>
        </form>
        </div>
    </div>
  );
};

export default RaiseComplaint;
