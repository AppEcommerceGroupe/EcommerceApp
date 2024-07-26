import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Favorite.css';

const Favorites = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('/api/products/getAll');
        console.log('API response:', response.data); 
        setProducts(Array.isArray(response.data) ? response.data : []);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="favorites-container">
      <div className="favorites-header">
        <span className="wishlist-text">Wishlist (4)</span>
        <button className="move-all-to-bag">Move All to Bag</button>
      </div>
      {/* <div className="favorites-list">
        {products.length === 0 ? (
          <p>No products found.</p>
        ) : (
          products.map(product => (
            <div key={product.id} className="favorite-item">
              <img src={product.imageUrl} alt={product.name} className="favorite-item-image" />
              <div className="favorite-item-details">
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <p>${product.price}</p>
              </div>
            </div>
          ))
        )}
      </div> */}
      <div className="products-container">
          {/* Sample product data */}
          <div className="product-card">
            <img src="path/to/product1/image.png" alt="Product 1" className="product-image" />
            <div className="product-name">Product 1</div>
            <div className="product-price">
              <span className="original-price">$200</span>
              <span className="discounted-price">$180</span>
            </div>
            <div className="product-rating">⭐⭐⭐⭐⭐ (30)</div>
          </div>
          <div className="product-card">
            <img src="path/to/product2/image.png" alt="Product 2" className="product-image" />
            <div className="product-name">Product 2</div>
            <div className="product-price">
              <span className="original-price">$150</span>
              <span className="discounted-price">$130</span>
            </div>
            <div className="product-rating">⭐⭐⭐⭐⭐ (50)</div>
          </div>
          <div className="product-card">
            <img src="path/to/product3/image.png" alt="Product 3" className="product-image" />
            <div className="product-name">Product 3</div>
            <div className="product-price">
              <span className="original-price">$100</span>
              <span className="discounted-price">$90</span>
            </div>
            <div className="product-rating">⭐⭐⭐⭐⭐ (40)</div>
          </div>
          <div className="product-card">
            <img src="path/to/product4/image.png" alt="Product 4" className="product-image" />
            <div className="product-name">Product 4</div>
            <div className="product-price">
              <span className="original-price">$120</span>
              <span className="discounted-price">$110</span>
            </div>
            <div className="product-rating">⭐⭐⭐⭐⭐ (60)</div>
          </div>
        </div>
    </div>
  );
};

export default Favorites;