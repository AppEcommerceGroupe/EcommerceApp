// VerticalNavbar.jsx
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
          onMouseEnter={() => handleMouseEnter('menu1')}
          onMouseLeave={handleMouseLeave}
        >
          Menu 1
          {activeMenu === 'menu1' && (
            <div className="mega-menu">
              <div className="mega-menu-section">
                <h4>Section 1</h4>
                <ul>
                  <li>Item 1</li>
                  <li>Item 2</li>
                  <li>Item 3</li>
                </ul>
              </div>
              <div className="mega-menu-section">
                <h4>Section 2</h4>
                <ul>
                  <li>Item 4</li>
                  <li>Item 5</li>
                  <li>Item 6</li>
                </ul>
              </div>
            </div>
          )}
        </li>
        <li
          className="navbar-item"
          onMouseEnter={() => handleMouseEnter('menu2')}
          onMouseLeave={handleMouseLeave}
        >
          Menu 2
          {activeMenu === 'menu2' && (
            <div className="mega-menu">
              <div className="mega-menu-section">
                <h4>Section 3</h4>
                <ul>
                  <li>Item 7</li>
                  <li>Item 8</li>
                  <li>Item 9</li>
                </ul>
              </div>
              <div className="mega-menu-section">
                <h4>Section 4</h4>
                <ul>
                  <li>Item 10</li>
                  <li>Item 11</li>
                  <li>Item 12</li>
                </ul>
              </div>
            </div>
          )}
        </li>
        {/* Add more menu items as needed */}
      </ul>
    </div>
  );
};

export default NavbarVertical;
