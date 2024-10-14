
import React, { useState } from 'react';
import axios from 'axios';
import { Navigate} from 'react-router-dom'
import "./index.css"

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('user'); 

  const handleSubmit = async (e) => {
    
    e.preventDefault();
    if (username === "" || password === "" || role === "") {
  alert("Details cannot be empty..!");
}

    try {
      await axios.post('http://localhost:5000/api/authentication/register', {
        username,
        password,
        role,
      });
      alert('Registration successful');
      <Navigate to="/" />
    } catch (error) {
      alert('Error registering user');
    }
  };

  return (
    <div className="register-container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <select className='select' value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
