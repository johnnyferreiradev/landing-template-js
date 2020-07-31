import React from 'react';
import { Link } from 'react-router-dom';

function Header({ logo, children }) {
  return (
    <header className="header">
      <Link to="/">
        {logo ? <img src={logo} alt="Logo" /> : 'No logo'}
      </Link>
      <div className="header-content">
        {children}
      </div>
    </header>
  );
}

export default Header;
