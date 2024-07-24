import React from 'react';
import Header from '../components/Header';
import Banner from '../components/Banner';

function Home({ user, onLogout }) {
  return (
    <div>
      <Header user={user} onLogout={onLogout} />
      <Banner />
    </div>
  );
}

export default Home;
