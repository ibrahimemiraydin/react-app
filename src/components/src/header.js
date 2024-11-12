// src/components/Header.js
import React from 'react';

const Header = ({ title }) => {
  return (
    <header style={{ padding: '20px', textAlign: 'center', background: '#282c34', color: 'white' }}>
      <h1>{title}</h1>
    </header>
  );
};

export default Header;
