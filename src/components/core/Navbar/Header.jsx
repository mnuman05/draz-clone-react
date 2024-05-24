import React from 'react'
import UpperNavbar from './components/UpperNavbar/UpperNavbar'
import LowerNavbar from './components/LowerNavbar/LowerNavbar';

const Header = () => {
  return (
    <div className="navbar d-block w-100 p-0">
      <UpperNavbar />
      <LowerNavbar />
    </div>
  );
};

export default Header;