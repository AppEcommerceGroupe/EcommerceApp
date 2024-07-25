import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faHeart, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Link, useLocation } from 'react-router-dom';

const ResponsiveNavbar = () => {
  const [showBadge, setShowBadge] = useState(false); // State for badge visibility
  const location = useLocation();

  useEffect(() => {
    // Show badge if the current path is '/favorites'
    if (location.pathname === '/favorites') {
      setShowBadge(true);
    } else {
      setShowBadge(false);
    }
  }, [location.pathname]);

  return (
    <div>
      <nav>
        <ul>
          <li className="logo">Exclusive</li>
          <div className="items">
            <li><a href="/">Home</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="#">Sign Up</a></li>
          </div>
          <li className="search-icon">
            <input type="search" placeholder="Search" />
            <label className="icon">
              <FontAwesomeIcon icon={faSearch} />
            </label>
          </li>
          <li>
            <label className="icon-wrapper" style={{ margin: 7 }}>
              <Link to="/favorites">
                <FontAwesomeIcon icon={faHeart} />
              </Link>
              {showBadge && (
                <div className="badge">4</div>
              )}
            </label>
          </li>
          <li>
            <label className="icon" style={{ margin: 7 }}>
              <Link to="/panier">
                <FontAwesomeIcon icon={faShoppingCart} />
              </Link>
            </label>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default ResponsiveNavbar;
