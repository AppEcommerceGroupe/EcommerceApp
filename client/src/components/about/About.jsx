import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      {/* Breadcrumb Navigation */}
      <div className="breadcrumb">
        <span style={{ color: 'gray' }}>Home &nbsp;/</span>
        <span> &nbsp; About</span>
      </div>
      
      {/* Content Section */}
      <div className="about-content">
        <div className="text-section">
          <h1>Our Story</h1>
          <p>
            Launced in 2015, Exclusive is South Asia’s premier online shopping 
            marketplace with an active presense in Bangladesh. Supported by  
            wide range of tailored marketing, data and service solutions, 
            Exclusive has 10,500 sallers and 300 brands and serves 3 millioons 
            customers across the region.
          </p>
          <p>
            Exclusive has more than 1 Million products to offer, growing at a 
            very fast. Exclusive offers a diverse assotment in categories 
            ranging from consumer .
          </p>
        </div>
        <div className="image-section">
          <img src="https://img.freepik.com/photos-gratuite/portrait-deux-femmes-africaines-tenant-sacs-tout-reagissant-quelque-chose-dans-leur-smartphone_181624-31562.jpg?t=st=1721825312~exp=1721828912~hmac=3284d7f291e4d032895ccc6363d1c936a529554736b64565711050a1f5f5cc71&w=900" alt="About Us" />
        </div>
      </div>

      {/* Statistics Section */}
      <div className="statistics-section">
        <div className="stat-card">
          <img src="/path/to/icon1.png" alt="Sellers" />
          <h2>10.5k</h2>
          <p>Sellers active on our site</p>
        </div>
        <div className="stat-card highlighted">
          <img src="/path/to/icon2.png" alt="Sales" />
          <h2>33k</h2>
          <p>Monthly Product Sales</p>
        </div>
        <div className="stat-card">
          <img src="/path/to/icon3.png" alt="Customers" />
          <h2>45.5k</h2>
          <p>Customers active on our site</p>
        </div>
        <div className="stat-card">
          <img src="/path/to/icon4.png" alt="Annual Sales" />
          <h2>25k</h2>
          <p>Annual gross sales on our site</p>
        </div>
      </div>
    </div>
  )
}

export default About;
