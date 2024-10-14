
import React, { useState } from 'react';
import { Navigate} from 'react-router-dom'

import axios from 'axios';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/authentication/login', {
        username,
        password,
      });
      localStorage.setItem('token', response.data.token);
      if (response.data.role === 'admin') {
        <Navigate to= '/admin/dashboard'/>
      } else {
        <Navigate to= '/user/dashboard' />
      }
    } catch (error) {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
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
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
