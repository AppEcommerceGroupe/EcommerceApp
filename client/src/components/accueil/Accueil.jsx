import React, { useEffect, useRef, useState } from 'react';
import NavbarVertical from '../customComponents/verticalNavbar/NavbarVertical';
import Carousel from '../customComponents/carousel/Carousel';
import './Accueil.css';
import Countdown from 'react-countdown';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';  // Changed to useNavigate

const Accueil = () => {
  const slides = [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6mAw6P9HzKpUa8uydu3uR11u0dXtiHOgfUQ&s',
    'data:image/jpeg;base64,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',
 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG6gJZNhQsTUCVQvxIc2_pKleruP9dvii1Ug&s'
 
  ];


  const categories = [
    { name: 'Phones', icon: '📱' },
    { name: 'Computers', icon: '💻' },
    { name: 'SmartWatch', icon: '⌚' },
    { name: 'Camera', icon: '📷' },
    { name: 'HeadPhones', icon: '🎧' },
    { name: 'Gaming', icon: '🎮' },
  ];

  const navigate = useNavigate();  // Changed to useNavigate

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

  const scrollRef = useRef(null);
  const [productsonsale, setProductsSale] = useState([]);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft -= 200;
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += 200;
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
      navigate('/product-display');  // Changed to navigate
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
        <button className="scroll-button left" onClick={scrollLeft}>
          &lt;
        </button>
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
        <button className="scroll-button right" onClick={scrollRight}>
          &gt;
        </button>
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
          {/* Sample product data */}
          <div className="product-card">
            <img src="path/to/coat/image.png" alt="The north coat" className="product-image" />
            <div className="product-name">The north coat</div>
            <div className="product-price">
              <span className="original-price">$260</span>
              <span className="discounted-price">$250</span>
            </div>
            <div className="product-rating">⭐⭐⭐⭐⭐ (65)</div>
          </div>
          <div className="product-card">
            <img src="path/to/bag/image.png" alt="Gucci duffle bag" className="product-image" />
            <div className="product-name">Gucci duffle bag</div>
            <div className="product-price">
              <span className="original-price">$960</span>
              <span className="discounted-price">$160</span>
            </div>
            <div className="product-rating">⭐⭐⭐⭐⭐ (65)</div>
          </div>
          <div className="product-card">
            <img src="path/to/cooler/image.png" alt="RGB liquid CPU Cooler" className="product-image" />
            <div className="product-name">RGB liquid CPU Cooler</div>
            <div className="product-price">
              <span className="original-price">$180</span>
              <span className="discounted-price">$70</span>
            </div>
            <div className="product-rating">⭐⭐⭐⭐⭐ (65)</div>
          </div>
          <div className="product-card">
            <img src="path/to/bookshelf/image.png" alt="Small BookShelf" className="product-image" />
            <div className="product-name">Small BookShelf</div>
            <div className="product-price">
              <span className="original-price">$380</span>
              <span className="discounted-price">$360</span>
            </div>
            <div className="product-rating">⭐⭐⭐⭐⭐ (65)</div>
          </div>
        </div>
        <img src="client/src/assets/jbl-3.jpg" alt="Music Experience" />
      </div>
      <div className="explore-products">
        <div className="section-header">
          <div className="section-title">
            <span className="title-icon">🔍</span>
            <span className="title-text">Explore Your Products</span>
          </div>
          <button className="view-all-button">View All</button>
        </div>
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

      <div className="featured">
        <div className="section-header">
          <div className="section-title">
            <span className="title-icon">⭐</span>
            <span className="title-text">New Arrival</span>
          </div>
        </div>
        <div className="featured-products">
          <div className="featured-product">
            <img src="path/to/ps5/image.png" alt="PlayStation 5" className="featured-image" />
            <div className="featured-content">
              <h3>PlayStation 5</h3>
              <p>Experience next-gen gaming with PlayStation 5</p>
              <button className="shop-now">Shop Now</button>
            </div>
          </div>
          <div className="featured-product">
            <img src="path/to/womens-collection/image.png" alt="Women's Collection" className="featured-image" />
            <div className="featured-content">
              <h3>Women's Collection</h3>
              <p>Explore the latest in women's fashion</p>
              <button className="shop-now">Shop Now</button>
            </div>
          </div>
          <div className="featured-product">
            <img src="path/to/speakers/image.png" alt="Speakers" className="featured-image" />
            <div className="featured-content">
              <h3>Speakers</h3>
              <p>High-quality sound for every occasion</p>
              <button className="shop-now">Shop Now</button>
            </div>
          </div>
          <div className="featured-product">
            <img src="path/to/perfume/image.png" alt="Perfume" className="featured-image" />
            <div className="featured-content">
              <h3>Perfume</h3>
              <p>Find your signature scent with our range of perfumes</p>
              <button className="shop-now">Shop Now</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Accueil;
