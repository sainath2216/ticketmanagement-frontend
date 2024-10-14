
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./index.css"


const UserDashboard = () => {
  const [complaints, setComplaints] = useState([]);

  useEffect(() => {
    const fetchComplaints = async () => {
      const token = localStorage.getItem('token');
      const response = await axios.get('http://localhost:5000/api/complaints/user', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setComplaints(response.data);
    };

    fetchComplaints();
  }, []);

  return (
    <div className='dashboard-container'>
      <h2 className='heading'>User Dashboard</h2>
      <a href="/raise-complaint" className='link'>Raise New Complaint</a>
      <ul className='list-container'>
        {complaints.map((complaint) => (
          <li className='list' key={complaint._id}>
            {complaint.title} - {complaint.status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserDashboard;
