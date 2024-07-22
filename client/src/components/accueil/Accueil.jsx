// Navbar.jsx
import React, { useEffect, useRef, useState } from 'react';
import NavbarVertical from '../customComponents/verticalNavbar/NavbarVertical';
import Carousel from '../customComponents/carousel/Carousel';
import './Accueil.css'
import Countdown from 'react-countdown';
import axios from 'axios';

const Accueil = () => {
    // slides for carousel
    const slides = [
        'https://via.placeholder.com/800x500?text=Slide+1',
        'https://via.placeholder.com/800x500?text=Slide+2',
        'https://via.placeholder.com/800x500?text=Slide+3',
      ];
      useEffect(() => {
        fetchProductsOnSale();
      }, []);
      // Custom renderer for the count down timer
      const threeDaysFromNow = Date.now() + 3 * 24 * 60 * 60 * 1000;
      const renderer = ({ days, hours, minutes, seconds, completed }) => {
        if (completed) {
          return <span style={{ color: 'red', fontSize: '24px' }}>Countdown complete!</span>;
        } else {
          const formatNumber = (number) => (number < 10 ? `0${number}` : number);

          return (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
            <div style={{ textAlign: 'center', color: 'blue', fontWeight: 600 }}>
              <div style={{ fontSize: '12px' }}>days</div>
              <div style={{ fontSize: '20px' }}>{formatNumber(days)}<span style={{ color: 'red' ,paddingLeft:10}}> :</span></div>
            </div>
            <div style={{ textAlign: 'center', color: 'blue', fontWeight: 600 }}>
              <div style={{ fontSize: '12px' }}>hours</div>
              <div style={{ fontSize: '20px' }}>{formatNumber(hours)}<span style={{ color: 'red' ,paddingLeft:10}}> :</span></div>
            </div>
            <div style={{ textAlign: 'center', color: 'blue', fontWeight: 600 }}>
              <div style={{ fontSize: '12px' }}>minutes</div>
              <div style={{ fontSize: '20px' }}>{formatNumber(minutes)}<span style={{ color: 'red',paddingLeft:10 }}> :</span></div>
            </div>
            <div style={{ textAlign: 'center', color: 'blue', fontWeight: 600 }}>
              <div style={{ fontSize: '12px' }}>seconds</div>
              <div style={{ fontSize: '20px' ,paddingLeft:0}}>{formatNumber(seconds)}</div>
            </div>
          </div>
          );
        }
      };

      //get products that have sales
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
          setProductsSale(response);
        } catch (error) {
          console.error('Error fetching products on sale:', error);
        }
      };

  return (
    <><><div className='bloc1'>
      <NavbarVertical />
      <Carousel slides={slides} />
    </div>
      <div>
        <Countdown date={threeDaysFromNow} renderer={renderer} />
      </div></>

      <div style={{display:'flex'}}>
      <div className="scroll-container">
      <button className="scroll-button left" onClick={scrollLeft}>
        &lt;
      </button>
      <div className="scroll-content" ref={scrollRef}>
        {productsonsale.map((item, index) => (
          <div className="scroll-item" key={index}>
            <h3>{item.name}</h3>
            <p>{item.prix_initial}</p>
            {/* <img src={item.image} alt={item.name} /> */}
          </div>
        ))}
      </div>
      <button className="scroll-button right" onClick={scrollRight}>
        &gt;
      </button>
    </div>
      </div></>

  );
};

export default Accueil;
