import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import logo from '../assets/login-logo.png';

function SignUp() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignUp = () => {
    // 이메일 형식 검증
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Invalid email address');
      return;
    }

    // 회원가입 로직을 추가합니다.
    console.log('User signed up:', { email, name, password });
    navigate('/login');
  };

  return (
    <div className="flex h-screen slide-in">
      <div className="w-full h-full flex flex-col justify-center items-center bg-white p-8">
        <img
          src={logo}
          alt="Logo"
          className="h-20 mb-8 cursor-pointer"
          onClick={() => navigate('/')}
        />
        <h1 className="text-3xl font-bold mb-6 text-blue-600">Create Account</h1>
        <form className="w-full max-w-sm" onSubmit={e => e.preventDefault()}>
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
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="name"
              value={name}
              onChange={e => setName(e.target.value)}
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
              onChange={e => setPassword(e.target.value)}
            />
          </div>
          <div className="flex flex-col space-y-4">
            <button
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={handleSignUp}
            >
              Sign up
            </button>
            <Link to="/login" className="text-blue-600 hover:underline text-center">Already have an account? Log in</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
