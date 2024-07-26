import React from 'react';
import './Wishlist.css';

const Wishlist = () => {
  return (
    <div className="wishlist-container">
      <header>
        <h1>Exclusive</h1>
        <nav>
          <a href="#home">Home</a>
          <a href="#contact">Contact</a>
          <a href="#about">About</a>
          <a href="#signup">Sign Up</a>
        </nav>
        <input type="text" placeholder="What are you looking for?" />
        <div className="icons">
          <span>❤️</span>
          <span>🛒</span>
          <span>👤</span>
        </div>
      </header>
      <h2>Wishlist (4)</h2>
      <div className="wishlist-items">
        <div className="wishlist-item">
          <span className="discount">-30%</span>
          <img src="gucci-duffle-bag.png" alt="Gucci duffle bag" />
          <p>Gucci duffle bag</p>
          <p className="price">$960 <span>$1160</span></p>
          <button>Add to Cart</button>
          <button className="delete">🗑️</button>
        </div>
        <div className="wishlist-item">
          <img src="rgb-liquid-cpu-cooler.png" alt="RGB liquid CPU Cooler" />
          <p>RGB liquid CPU Cooler</p>
          <p className="price">$1960</p>
          <button>Add to Cart</button>
          <button className="delete">🗑️</button>
        </div>
        <div className="wishlist-item">
          <img src="gp11-shooter-usb-gamepad.png" alt="GP11 Shooter USB Gamepad" />
          <p>GP11 Shooter USB Gamepad</p>
          <p className="price">$550</p>
          <button>Add to Cart</button>
          <button className="delete">🗑️</button>
        </div>
        <div className="wishlist-item">
          <img src="quilted-satin-jacket.png" alt="Quilted Satin Jacket" />
          <p>Quilted Satin Jacket</p>
          <p className="price">$750</p>
          <button>Add to Cart</button>
          <button className="delete">🗑️</button>
        </div>
      </div>
      <button className="move-all-to-bag">Move All To Bag</button>
    </div>
  );
}

export default Wishlist;
