import React, { useEffect, useRef, useState } from 'react';
import NavbarVertical from '../customComponents/verticalNavbar/NavbarVertical';
import Carousel from '../customComponents/carousel/Carousel';
import './Accueil.css';
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
  const [productsonsale, setProductsSale] = useState([]);
  const scrollRef = useRef(null);
  const threeDaysFromNow = Date.now() + 3 * 24 * 60 * 60 * 1000;

  useEffect(() => {
    fetchProductsOnSale();
  }, []);

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

  return (
    <>
      <NavbarVertical />
      <div className="carousel-container">
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
              <span className="original-price">$380</span>
              <span className="discounted-price">$360</span>
            </div>
            <div className="product-rating">⭐⭐⭐⭐⭐ (65)</div>
          </div>
        </div>
        <img src="https://e7.pngegg.com/pngimages/341/69/png-clipart-ferris-wheel-illustration-graphic-design-stock-photography-cartoon-carnival-rides-blue-text.png" alt="Best Selling" className="best-selling-image" />
      </div>

      <div className="new-arrival">
        <div className="section-header">
          <div className="section-title">
            <span className="title-icon">🆕</span>
            <span className="title-text">New Arrival</span>
          </div>
        </div>
        <div className="featured-container">
          <div className="featured-card" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1603791440384-56cd371ee9a7)' }}>
            <h3>PlayStation 5</h3>
            <p>Discover the latest PlayStation 5 games and accessories.</p>
            <button>Shop Now</button>
          </div>
          <div className="featured-card" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f)' }}>
            <h3>Women's Collection</h3>
            <p>Explore the newest trends in women's fashion.</p>
            <button>Shop Now</button>
          </div>
          <div className="featured-card" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1603032537085-9de1dae3808b)' }}>
            <h3>Speakers</h3>
            <p>Experience high-quality sound with our latest speakers.</p>
            <button>Shop Now</button>
          </div>
          <div className="featured-card" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1534531688091-a4588c1f2c34)' }}>
            <h3>Perfume</h3>
            <p>Find your signature scent in our perfume collection.</p>
            <button>Shop Now</button>
          </div>
        </div>
      </div>

      <footer className="footer">
        <div className="footer-column">
          <h3>Subscribe</h3>
          <p>Sign up to get the latest on sales, new releases, and more...</p>
          <div className="subscribe-form">
            <input type="email" placeholder="Enter your email" />
            <button type="submit">Subscribe</button>
          </div>
        </div>
        <div className="footer-column">
          <h3>Support</h3>
          <ul>
            <li>FAQs</li>
            <li>Shipping & Returns</li>
            <li>Order Status</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Account</h3>
          <ul>
            <li>My Account</li>
            <li>Track Order</li>
            <li>Wishlist</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Quick Link</h3>
          <ul>
            <li>About Us</li>
            <li>Gift Cards</li>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Download App</h3>
          <div className="app-download">
            <img src="path_to_google_play_image" alt="Google Play" />
            <img src="path_to_app_store_image" alt="App Store" />
          </div>
        </div>
      </footer>
    </>
  );
};

export default Accueil;
