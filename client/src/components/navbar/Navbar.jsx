// ResponsiveNavbar.jsx
import React, { useState } from 'react';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faSearch,faHeart, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const ResponsiveNavbar = () => {
  const [showItems, setShowItems] = useState(false);

  const toggleMenu = () => {
    setShowItems(!showItems);
  };

  return (
    <div>
      <nav>
        <ul>
          <li className="logo">Exclusive</li>
          <div className={`items ${showItems ? 'show' : ''}`}>
            <li><a href="/">Home</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Sign Up</a></li>
          </div>
          <li className="search-icon">
            <input type="search" placeholder="Search" />
            <label className="icon">
              <FontAwesomeIcon icon={faSearch} />
            </label>
          </li>
          <li>
            <label className="icon" style={{margin: 7,}}>
            <Link to="/favorites">
              <FontAwesomeIcon icon={faHeart} />
              </Link>

            </label>
          </li>
          <li>
            <label className="icon" style={{margin: 7,}}>
              <FontAwesomeIcon icon={faShoppingCart} />
            </label>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default ResponsiveNavbar;
