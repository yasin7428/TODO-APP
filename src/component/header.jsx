import React from 'react';
import './header.css';

function Header({ currentFilter, setIsSidebarOpen}) {
  return (
    <header className='header'>
      <button className='hamburger-btn' onClick={() => setIsSidebarOpen(true)}>☰</button>
        <h1 className='header-title'>{currentFilter}</h1>
    </header>
  );
}

export default Header;