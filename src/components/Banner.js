import React from 'react';
import bannerImage from '../assets/banner.jpg';

function Banner() {
  return (
    <div className="relative space-x-11 bg-white px-20 py-5">
      <img src="/discord.jpg" alt="Banner" className="w-full h-auto" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
        <h1 className="text-6xl font-bold mb-8">20% off headset</h1>
        <p className="mt-2 text-2xl mb-2">Limited-time offer for July</p>
        <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded">Shop Now</button>
      </div>
    </div>
  );
}

export default Banner;
