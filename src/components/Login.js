import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../supabase';
import loginBg from '../assets/login-bg.png';
import logo from '../assets/login-logo.png';

function Login({ setUser }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    const { data: users, error } = await supabase
      .from('users')
      .select('*')
      .eq('email', email)
      .eq('password', password);

    if (error) {
      setError(error.message);
      return;
    }

    if (users.length > 0) {
      setUser(users[0]);
      navigate('/');
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="flex h-screen">
      <div className="w-2/3 h-full">
        <img src={loginBg} alt="Login Background" className="w-full h-full object-cover" />
      </div>
      <div className="w-1/3 h-full flex flex-col justify-center items-center bg-white p-8">
        <img
          src={logo}
          alt="Logo"
          className="h-20 mb-8 cursor-pointer"
          onClick={() => navigate('/')}
        />
        <h1 className="text-3xl font-bold mb-6 text-blue-600">Welcome back!</h1>
        <form className="w-full max-w-sm" onSubmit={handleLogin}>
          {error && <p className="text-red-500">{error}</p>}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              e-mail
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-between mb-6">
            <label className="inline-flex items-center">
              <input type="checkbox" className="form-checkbox text-blue-600" />
              <span className="ml-2 text-gray-700">Keep me signed in</span>
            </label>
          </div>
          <div className="flex flex-col space-y-4">
            <button
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Login
            </button>
            <a href="/signup" className="text-blue-600 hover:underline text-center">Create Account</a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
