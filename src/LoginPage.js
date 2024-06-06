import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import chef from './assets/Chef.png';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Make a POST request to your backend server to authenticate the user
      const response = await axios.post('/api/login', { email, password });
      // Assuming your backend returns a token upon successful authentication
      const token = response.data.token;
      // Store the token in local storage or session storage
      localStorage.setItem('token', token);
      // Redirect to the dashboard or any other protected route
      navigate('/dashboard');
    } catch (error) {
      // Handle authentication error, e.g., display error message
      console.error('Authentication failed:', error.message);
    }
  };

  return (
    <section className="h-screen flex flex-col md:flex-row justify-center bg-black space-y-10 md:space-y-0 md:space-x-16 items-center mx-7 md:mx-0 md:my-0">
      <div className="md:w-1/3 max-w-sm">
        <img src={chef} alt="Sample image" />
      </div>
      <div className="md:w-1/3 max-w-sm p-10 bg-black-blue rounded-xl text-white">
        <h1 className='text-3xl py-9 md:text-4xl text-center'>
          Welcome To Our Store!
        </h1>
        <form onSubmit={handleSubmit}>
          <input
            className="text-sm w-full px-4 py-2 bg-gray-800 text-white rounded border-none"
            type="text"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="text-sm w-full px-4 py-2 bg-gray-800 text-white rounded mt-4 border-none"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="mt-4 flex justify-between font-semibold text-sm">
            <label className="flex text-white hover:text-gray-400 cursor-pointer">
              <input className="mr-1" type="checkbox" />
              <span>Remember Me</span>
            </label>
            <a className="text-blue-600 hover:text-blue-400 hover:underline hover:underline-offset-4" href="#">Forgot Password?</a>
          </div>
          <div className="text-center py-2">
            <button
              className="mt-4 bg-blue-600 hover:bg-blue-400 px-4 py-2 text-white uppercase rounded text-xs tracking-wider"
              type="submit"
            >
              Login
            </button>
          </div>
        </form>
        <div className="mt-4 font-semibold text-sm pt-2">
          <p className="text-gray-500 text-center">
            Don't have an account? <a className="text-red-600 hover:underline hover:underline-offset-4" href="/signup">Register</a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default LoginPage;
