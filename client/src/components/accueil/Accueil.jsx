import React, { useEffect, useRef, useState } from 'react';
import NavbarVertical from '../customComponents/verticalNavbar/NavbarVertical';
import Carousel from '../customComponents/carousel/Carousel';

import './Accueil.css';
import Countdown from 'react-countdown';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';  // Changed to useNavigate

const Accueil = () => {
  const slides = [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeRUIL9Kj6p_egY7T8A9GVVpjD99p7LRsPEygvdSFZRQdhldLLwD-jXLLeRIEcYlecow&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKvNxGg961uNE74g_gB2wArPxWAx49vDCa7A&s',
    'https://www.jds.fr/medias/image/vetements-homme-50111-920-0-F.webp',
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
          {/* Sample product data */}
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
            <img src="https://media.gucci.com/style/DarkGray_Center_0_0_490x490/1689180417/758664_FACK7_9768_001_084_0000_Light-medium-duffle-bag-with-web.jpg" alt="Gucci duffle bag" className="product-image" />
            <div className="product-name">Gucci duffle bag</div>
            <div className="product-price">
              <span className="original-price">$960</span>
              <span className="discounted-price">$160</span>
            </div>
            <div className="product-rating">⭐⭐⭐⭐⭐ (65)</div>
          </div>
          <div className="product-card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw2imexOYu5CJrYrecz9WeRmbDL5Mn-N06-A&s" alt="RGB liquid CPU Cooler" className="product-image" />
            <div className="product-name">RGB liquid CPU Cooler</div>
            <div className="product-price">
              <span className="original-price">$180</span>
              <span className="discounted-price">$70</span>
            </div>
            <div className="product-rating">⭐⭐⭐⭐⭐ (65)</div>
          </div>
          <div className="product-card">
            <img src="https://img.buzzfeed.com/store-an-image-prod-us-east-1/tNoFEAk7c.png?output-format=jpg" alt="Small BookShelf" className="product-image" />
            <div className="product-name">Small BookShelf</div>
            <div className="product-price">
              <span className="original-price">$380</span>
              <span className="discounted-price">$360</span>
            </div>
            <div className="product-rating">⭐⭐⭐⭐⭐ (65)</div>
          </div>
        </div>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCPfHHQWRsbruEfXsd0Sbl9by8pANL8UAlTw&s" alt="Music Experience" />
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
            <img src="https://mk-media.mytek.tn/media/catalog/product/cache/8be3f98b14227a82112b46963246dfe1/d/q/dqd_1.jpg" alt="Product 1" className="product-image" />
            <div className="product-name">Manette PS5</div>
            <div className="product-price">
              <span className="original-price">$200</span>
              <span className="discounted-price">$180</span>
            </div>
            <div className="product-rating">⭐⭐⭐⭐⭐ (30)</div>
          </div>
          <div className="product-card">
            <img src="https://i5.walmartimages.com/seo/Canon-EOS-Rebel-T7i-DSLR-Camera-with-18-55mm-Lens_a7321869-97ff-4a7f-aed0-8a939fafa692.9c0dabeb21ce0fb604e4b27da67eb8bc.jpeg" alt="Product 2" className="product-image" />
            <div className="product-name">Camera</div>
            <div className="product-price">
              <span className="original-price">$150</span>
              <span className="discounted-price">$130</span>
            </div>
            <div className="product-rating">⭐⭐⭐⭐⭐ (50)</div>
          </div>
          <div className="product-card">
            <img src="https://i.ebayimg.com/images/g/cHAAAOSwYrpkrBx3/s-l1200.jpg" alt="Product 3" className="product-image" />
            <div className="product-name">Jeans</div>
            <div className="product-price">
              <span className="original-price">$100</span>
              <span className="discounted-price">$90</span>
            </div>
            <div className="product-rating">⭐⭐⭐⭐⭐ (40)</div>
          </div>
          <div className="product-card">
            <img src="https://m.media-amazon.com/images/I/81lQM1JTlnL._AC_UF1000,1000_QL80_.jpg" alt="Product 4" className="product-image" />
            <div className="product-name">Food Dog</div>
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
            <img src="https://www.tunisienumerique.com/wp-content/uploads/2022/08/ps5-1-1591910417.png" alt="PlayStation 5" className="featured-image" />
            <div className="featured-content">
              <h3>PlayStation 5</h3>
              <p>Experience next-gen gaming with PlayStation 5</p>
              <button className="shop-now">Shop Now</button>
            </div>
          </div>
          <div className="featured-product">
            <img src="https://www.cougar.com.pk/cdn/shop/articles/New_Women_s_Collection.jpg?v=1662637654" alt="Women's Collection" className="featured-image" />
            <div className="featured-content">
              <h3>Women's Collection</h3>
              <p>Explore the latest in women's fashion</p>
              <button className="shop-now">Shop Now</button>
            </div>
          </div>
          <div className="featured-product">
            <img src="https://www.jbl.com/dw/image/v2/BFND_PRD/on/demandware.static/-/Sites-siteCatalog_JB_US_Imported/default/dw0c3ec204/categoryimage/Charge5.jpg?sw=800&sh=400" alt="Speakers" className="featured-image" />
            <div className="featured-content">
              <h3>Speakers</h3>
              <p>High-quality sound for every occasion</p>
              <button className="shop-now">Shop Now</button>
            </div>
          </div>
          <div className="featured-product">
            <img src="https://www.bombayshavingcompany.com/cdn/shop/files/Fragrance.webp?v=1703064835" alt="Perfume" className="featured-image" />
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