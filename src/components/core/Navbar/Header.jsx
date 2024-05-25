import React from 'react'
import UpperNavbar from './components/UpperNavbar/UpperNavbar'
import LowerNavbar from './components/LowerNavbar/LowerNavbar';
import './Header.css'

const Header = () => {
  return (
    <div className="first-primary w-100">
      <div className='nav-container mx-auto'>
        <UpperNavbar />
        <LowerNavbar />
      </div>
    </div>
  );
};

export default Header;