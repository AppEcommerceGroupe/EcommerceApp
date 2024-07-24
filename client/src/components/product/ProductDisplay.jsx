import React from 'react';
import './ProductDisplay.css';

const ProductDisplay = () => {
  return (
    <div className="product-container">
      <div className="breadcrumb">
        <a href="/account">Account</a> / <a href="/gaming">Gaming</a> / Havic HV G-92 Gamepad
      </div>
      <div className="product-details">
        <div className="product-images">
          <img src="/path/to/main-image.jpg" alt="Havic HV G-92 Gamepad" className="main-image" />
          <div className="thumbnail-images">
            <img src="/path/to/thumb1.jpg" alt="Thumbnail 1" />
            <img src="/path/to/thumb2.jpg" alt="Thumbnail 2" />
            <img src="/path/to/thumb3.jpg" alt="Thumbnail 3" />
            <img src="/path/to/thumb4.jpg" alt="Thumbnail 4" />
          </div>
        </div>
        <div className="product-info">
          <h1>Havic HV G-92 Gamepad</h1>
          <div className="rating">
            <span>★★★★★</span> (150 Reviews)
          </div>
          <div className="price">$192.00</div>
          <p className="description">
            PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal. Pressure sensitive.
          </p>
          <div className="options">
            <label htmlFor="colour">Colours:</label>
            <select id="colour" name="colour">
              <option value="s">S</option>
              <option value="m">M</option>
              <option value="l">L</option>
              <option value="xl">XL</option>
            </select>
            <label htmlFor="quantity">Quantity:</label>
            <input type="number" id="quantity" name="quantity" min="1" defaultValue="2" />
          </div>
          <button className="buy-now">Buy Now</button>
          <div className="delivery">
            <p>Free Delivery</p>
            <p>Return Delivery</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;
