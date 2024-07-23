import React from 'react';
import './Favorite.css'; 

const Favorites = () => {
  return (
    <div className="favorites-container">
      <div className="favorites-header">
      <span className="wishlist-text">Wishlist</span>
        <button className="move-all-to-bag">Move All to Bag</button>
      </div>
    </div>
  );
};

export default Favorites;