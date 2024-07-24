import React from 'react';
import { FaSearch, FaShoppingCart } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';

function Header({ user, onLogout }) {
  const navigate = useNavigate();

  return (
    <header className="bg-white p-4 flex justify-between items-center shadow-md">
      <nav className="flex space-x-8 text-blue-600">
        <a href="#" className="hover:underline">Tap</a>
        <a href="#" className="hover:underline">Tap</a>
        <a href="#" className="hover:underline">Tap</a>
      </nav>
      <div className="flex items-center space-x-4">
        <img
          src={logo}
          alt="Logo"
          className="h-10 cursor-pointer"
          onClick={() => navigate('/')}
        />
        <div className="text-2xl font-bold text-blue-600">TOP Tradings</div>
      </div>
      <div className="flex items-center space-x-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className="p-1 border rounded pl-8"
          />
          <FaSearch className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500" />
        </div>
        <FaShoppingCart className="text-blue-600" />
        {user ? (
          <div className="flex items-center space-x-4">
            <div className="text-blue-600">Welcome, {user.name}!</div>
            <button
              className="bg-blue-600 text-white px-4 py-2 rounded"
              onClick={onLogout}
            >
              Logout
            </button>
          </div>
        ) : (
          <Link to="/login">
            <button className="bg-blue-600 text-white px-4 py-2 rounded">LOG IN</button>
          </Link>
        )}
      </div>
    </header>
  );
}

export default Header;
