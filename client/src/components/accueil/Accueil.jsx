import React, { useEffect, useRef, useState } from 'react';
import NavbarVertical from '../customComponents/verticalNavbar/NavbarVertical';
import Carousel from '../customComponents/carousel/Carousel';
import './Accueil.css';
import Countdown from 'react-countdown';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const Accueil = () => {
  const slides = [
    'https://via.placeholder.com/800x500?text=Slide+1',
    'https://via.placeholder.com/800x500?text=Slide+2',
    'https://via.placeholder.com/800x500?text=Slide+3',
  ];

  const categories = [
    { name: 'Phones', icon: '📱' },
    { name: 'Computers', icon: '💻' },
    { name: 'SmartWatch', icon: '⌚' },
    { name: 'Camera', icon: '📷' },
    { name: 'HeadPhones', icon: '🎧' },
    { name: 'Gaming', icon: '🎮' },
  ];

  const history = useHistory();

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
      history.push('/product-display');
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
