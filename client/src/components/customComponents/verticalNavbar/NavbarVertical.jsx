import React, { useState } from 'react';
import './NavbarVertical.css';

const NavbarVertical = () => {
  const [activeMenu, setActiveMenu] = useState(null);

  const handleMouseEnter = (menu) => {
    setActiveMenu(menu);
  };

  const handleMouseLeave = () => {
    setActiveMenu(null);
  };

  return (
    <div className="navbar">
      <ul className="navbar-list">
        <li
          className="navbar-item"
          onMouseEnter={() => handleMouseEnter('womensFashion')}
          onMouseLeave={handleMouseLeave}
        >
          Woman's Fashion
          {activeMenu === 'womensFashion' && (
            <div className="mega-menu">
              <div className="mega-menu-section">
                <h4>Tops</h4>
                <ul>
                  <li>Blouses</li>
                  <li>T-Shirts</li>
                  <li>Sweaters</li>
                </ul>
              </div>
              <div className="mega-menu-section">
                <h4>Bottoms</h4>
                <ul>
                  <li>Jeans</li>
                  <li>Skirts</li>
                  <li>Shorts</li>
                </ul>
              </div>
            </div>
          )}
        </li>
        <li
          className="navbar-item"
          onMouseEnter={() => handleMouseEnter('mensFashion')}
          onMouseLeave={handleMouseLeave}
        >
          Men's Fashion
          {activeMenu === 'mensFashion' && (
            <div className="mega-menu">
              <div className="mega-menu-section">
                <h4>Shirts</h4>
                <ul>
                  <li>Casual Shirts</li>
                  <li>Formal Shirts</li>
                  <li>T-Shirts</li>
                </ul>
              </div>
              <div className="mega-menu-section">
                <h4>Bottoms</h4>
                <ul>
                  <li>Jeans</li>
                  <li>Trousers</li>
                  <li>Shorts</li>
                </ul>
              </div>
            </div>
          )}
        </li>
        <li className="navbar-item">Electronics</li>
        <li className="navbar-item">Home & Lifestyle</li>
        <li className="navbar-item">Medicine</li>
        <li className="navbar-item">Sports & Outdoor</li>
        <li className="navbar-item">Baby's & Toys</li>
        <li className="navbar-item">Groceries & Pets</li>
        <li className="navbar-item">Health & Beauty</li>
      </ul>
    </div>
  );
};

export default NavbarVertical;
