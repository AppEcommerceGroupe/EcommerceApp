import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-info">
        <div className="info-section">
          <i className="fas fa-phone"></i>
          <h3>Call To Us</h3>
          <p>We are available 24/7, 7 days a week.</p>
          <p>Phone: +880611112222</p>
        </div>
        <hr />
        <div className="info-section">
          <i className="fas fa-envelope"></i>
          <h3>Write To Us</h3>
          <p>Fill out our form and we will contact you within 24 hours.</p>
          <p>Emails: customer@exclusive.com</p>
          <p>Emails: support@exclusive.com</p>
        </div>
      </div>
      <div className="contact-form">
        <div className="form-group">
          <input type="text" placeholder="Your Name *" />
          <input type="email" placeholder="Your Email *" />
          <input type="tel" placeholder="Your Phone *" />
        </div>
        <textarea placeholder="Your Message"></textarea>
        <div>
          <button type="submit">Send Message</button>
          <span className='succes-msg'>Your message was sended successfully</span>
        </div>

      </div>
    </div>
  );
};

export default Contact;
