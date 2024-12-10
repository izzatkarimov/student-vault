import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const HeaderComponent = () => {
  return (
    <div>
      <header>
        <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
          {/* Logo on the left */}
          <Link className="navbar-brand custom-brand" to="/">StudentVault</Link>

          {/* Links on the right */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item me-3">
                <NavLink className='nav-link' to='/students'>Students</NavLink>
              </li>
              <li className="nav-item me-3">
                <NavLink className='nav-link' to='/departments'>Departments</NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default HeaderComponent;