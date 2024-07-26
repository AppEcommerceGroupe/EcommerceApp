import React, { useEffect, useRef, useState } from 'react';
import NavbarVertical from '../customComponents/verticalNavbar/NavbarVertical';
import Carousel from '../customComponents/carousel/Carousel';

import Countdown from 'react-countdown';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Accueil = () => {
  const slides = [
    'https://cdn.dribbble.com/users/6580427/screenshots/19984461/ezgif.com-gif-maker__3__still_2x.gif?resize=400x0',
    'https://www.collidu.com/media/catalog/product/img1/0/2/021f8e11083b526001473718c6f39b0cc4c55b1d6e3a103e272eafecce88847a/perfume-brand-business-plan-slide1.png',
    'https://qph.cf2.quoracdn.net/main-qimg-f11f46bb977d80d5c8dbacd1b4951475',
  ];

  const categories = [
    { name: 'Phones', icon: '📱' },
    { name: 'Computers', icon: '💻' },
    { name: 'SmartWatch', icon: '⌚' },
    { name: 'Camera', icon: '📷' },
    { name: 'HeadPhones', icon: '🎧' },
    { name: 'Gaming', icon: '🎮' },
  ];

  const navigate = useNavigate();

  useEffect(() => {
    fetchProductsOnSale();
  }, []);

  const threeDaysFromNow = Date.now() + 3 * 24 * 60 * 60 * 1000;

  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return <span className="countdown-complete">Countdown complete!</span>;
    } else {
      return (
        <div className="countdown-timer">
          <div className="countdown-section">
            <div className="countdown-value">{days}</div>
            <div className="countdown-label">Days</div>
          </div>
          <span className="countdown-separator">:</span>
          <div className="countdown-section">
            <div className="countdown-value">{hours}</div>
            <div className="countdown-label">Hours</div>
          </div>
          <span className="countdown-separator">:</span>
          <div className="countdown-section">
            <div className="countdown-value">{minutes}</div>
            <div className="countdown-label">Minutes</div>
          </div>
          <span className="countdown-separator">:</span>
          <div className="countdown-section">
            <div className="countdown-value">{seconds}</div>
            <div className="countdown-label">Seconds</div>
          </div>
        </div>
      );
    }
  };

  

  const fetchProductsOnSale = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/produit/getBySale');
      setProductsSale(response.data);
    } catch (error) {
      console.error('Error fetching products on sale:', error);
    }
  };

  const handleCategoryClick = (categoryName) => {
    if (categoryName === 'Gaming') {
      navigate('/product-display');
    }
  };

  return (
    <>
      <div className="bloc1">
        <NavbarVertical />
        <Carousel slides={slides} />
      </div>

      <div className="flash-sales">
        <h2>Flash Sales</h2>
        <Countdown date={threeDaysFromNow} renderer={renderer} />
      </div>

      <div className="scroll-container-wrapper">
       
        <div className="scroll-container" ref={scrollRef}>
          {productsonsale.map((item, index) => (
            <div className="scroll-item" key={index}>
              <div className="discount-badge">-{item.discount}%</div>
              <img src={item.image} alt={item.name} />
              <div className="sale-info">
                <h3>{item.name}</h3>
                <p className="original-price">${item.prix_initial}</p>
                <p className="discounted-price">${item.prix_solde}</p>
                <div className="rating">
                  <span>⭐⭐⭐⭐⭐</span> ({item.reviews})
                </div>
              </div>
              <button className="add-to-cart">Add To Cart</button>
            </div>
          ))}
        </div>
        
      </div>
      <button className="view-all-products">View All Products</button>

      <div className="categories">
        <h2>Browse By Category</h2>
        <div className="categories-container">
          {categories.map((category, index) => (
            <div
              className="category-item"
              key={index}
              onClick={() => handleCategoryClick(category.name)}
            >
              <div className="category-icon">{category.icon}</div>
              <div className="category-name">{category.name}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="best-selling-products">
        <div className="section-header">
          <div className="section-title">
            <span className="title-icon">🔥</span>
            <span className="title-text">This Month</span>
          </div>
          <button className="view-all-button">View All</button>
        </div>
        <div className="products-container">
          <div className="product-card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvehDWxosNif-KwglfwsD2DtGg-7WfsN3xVA&s" alt="The north coat" className="product-image" />
            <div className="product-name">The north coat</div>
            <div className="product-price">
              <span className="original-price">$260</span>
              <span className="discounted-price">$250</span>
            </div>
            <div className="product-rating">⭐⭐⭐⭐⭐ (65)</div>
          </div>
          <div className="product-card">
            <img src="https://media.gucci.com/style/DarkGray_Center_0_0_490x490/1699550104/547953_9C2ST_8746_001_082_0000_Light.jpg" alt="Gucci duffle bag" className="product-image" />
            <div className="product-name">Gucci duffle bag</div>
            <div className="product-price">
              <span className="original-price">$960</span>
              <span className="discounted-price">$160</span>
            </div>
            <div className="product-rating">⭐⭐⭐⭐⭐ (65)</div>
          </div>
          <div className="product-card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-2LLdIy2lCmPaN8bYGoenKIS5HMHJgXq9HQ&s" alt="RGB liquid CPU Cooler" className="product-image" />
            <div className="product-name">RGB liquid CPU Cooler</div>
            <div className="product-price">
              <span className="original-price">$180</span>
              <span className="discounted-price">$70</span>
            </div>
            <div className="product-rating">⭐⭐⭐⭐⭐ (65)</div>
          </div>
          <div className="product-card">
            <img src="https://i.etsystatic.com/11628910/r/il/08b81c/2328038284/il_fullxfull.2328038284_dl9o.jpg" alt="Small BookShelf" className="product-image" />
            <div className="product-name">Small BookShelf</div>
            <div className="product-price">
              <span className="original-price">$420</span>
              <span className="discounted-price">$320</span>
            </div>
            <div className="product-rating">⭐⭐⭐⭐⭐ (65)</div>
          </div>
        </div>
      </div>

      <div className="new-arrivals">
        <h2 className="section-title">New Arrival</h2>
        <div className="arrival-items">
          <div
            className="arrival-item"
            style={{ backgroundImage: 'url("https://m.media-amazon.com/images/I/61SUJDrCTLL._SL1500_.jpg")' }}
          >
            <div className="arrival-content">
              <h3>PlayStation 5</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <button>Shop Now</button>
            </div>
          </div>
          <div
            className="arrival-item"
            style={{ backgroundImage: 'url("https://m.media-amazon.com/images/I/71zlbba0G4L._AC_UL1500_.jpg")' }}
          >
            <div className="arrival-content">
              <h3>Women's Collection</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <button>Shop Now</button>
            </div>
          </div>
          <div
            className="arrival-item"
            style={{ backgroundImage: 'url("https://pyxis.nymag.com/v1/imgs/03e/06e/a555f8a8a14bb7e6ce222.2e16d0ba.fill_1500x1000.jpeg")' }}
          >
            <div className="arrival-content">
              <h3>Speakers</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <button>Shop Now</button>
            </div>
          </div>
          <div
            className="arrival-item"
            style={{ backgroundImage: 'url("https://www.theperfumeshop.com/medias/sys_master/front-zcol-zgrid/h1b/h7d/16505448751134/jpg-21254-HI-img-light-0.jpg")' }}
          >
            <div className="arrival-content">
              <h3>Perfume</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <button>Shop Now</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Accueil;
