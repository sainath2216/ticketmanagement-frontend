
import React, { useEffect, useState } from 'react';
import axios from 'axios';

import "./index.css"


const AdminDashboard = () => {
  const [complaints, setComplaints] = useState([]);

  useEffect(() => {
    const fetchComplaints = async () => {
      const token = localStorage.getItem('token');
      const response = await axios.get('http://localhost:5000/api/complaints/all', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setComplaints(response.data);
    };

    fetchComplaints();
  }, []);

  const handleAssign = async (id) => {
    const token = localStorage.getItem('token');
    await axios.put(
      `http://localhost:5000/api/complaints/assign`,
      { complaintId: id, adminId: 'adminId' },
      { headers: { Authorization: `Bearer ${token}` } }
    );
    alert('Complaint assigned');
  };

  return (
    <div className='dashboard-container'>
      <h2 className='heading'>Admin Dashboard</h2>
      <ul className='list-container'>
        {complaints.map((complaint) => (
          <li key={complaint._id} className='list'>
            {complaint.title} - {complaint.status}{' '}
            <button className='button' onClick={() => handleAssign(complaint._id)}>Assign</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminDashboard;
