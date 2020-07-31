import React from 'react';
import { Link } from 'react-router-dom';

import useApp from '../../hooks/useApp';

function Header({ logo, children }) {
  const app = useApp();
  console.log(app);

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
