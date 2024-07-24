import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [result, showResult] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const ShowContactMessage = (e) => {




    if (!name || !email || !phone || !message) {
      showResult(false);
      alert('All fields are required.');
    }
    else {
      showResult(true);
      console.log(result);
      setName('');
      setEmail('');
      setPhone('');
      setMessage('');
    }

  }
  return (
    <div>
      <div style={{ margin: '70px 0 0 70px' }}>
        <span style={{ color: 'gray' }}>Home &nbsp;/</span>
        <span> &nbsp; Contact</span>
      </div>

      <div className="contact-container">
        <div className="contact-info">
          <div className="info-section">
            <h5 style={{ margin: '10px 0' }}>
              <i className="fas fa-phone"></i>
              <b> Call To Us</b>
            </h5>
            <p style={{ margin: '30px 0 20px 0' }}>We are available 24/7, 7 days a week.</p>
            <p>Phone: +880611112222</p>
          </div>
          <hr />
          <div className="info-section">
            <h5 style={{ margin: '20px 0' }}>
              <i className="fas fa-envelope"></i>
              <b> Write To Us</b>
            </h5>
            <p style={{ margin: '30px 0 20px 0' }}>Fill out our form and we will contact you within 24 hours.</p>
            <p>Emails: customer@exclusive.com</p>
            <p>Emails: support@exclusive.com</p>
          </div>
        </div>

        <div className="contact-form">
          <div className="form-group">
            <div style={{ position: 'relative' }}>
              <input
                type="text"
                placeholder=""
                style={{ backgroundColor: '#F8F8F8', width: '100%', padding: '10px' }}
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              {name === '' && (
                <span
                  style={{
                    position: 'absolute',
                    left: '10px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    pointerEvents: 'none',
                    color: '#666',
                  }}
                >
                  Your Name <span style={{ color: 'red' }}>*</span>
                </span>
              )}
            </div>

            <div style={{ position: 'relative' }}>
              <input
                type="email"
                placeholder=""
                style={{ backgroundColor: '#F8F8F8', width: '100%', padding: '10px' }}
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {email === '' && (
                <span
                  style={{
                    position: 'absolute',
                    left: '10px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    pointerEvents: 'none',
                    color: '#666',
                  }}
                >
                  Your Email <span style={{ color: 'red' }}>*</span>
                </span>
              )}
            </div>

            <div style={{ position: 'relative' }}>
              <input
                type="tel"
                placeholder=""
                style={{ backgroundColor: '#F8F8F8', width: '100%', padding: '10px' }}
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              {phone === '' && (
                <span
                  style={{
                    position: 'absolute',
                    left: '10px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    pointerEvents: 'none',
                    color: '#666',
                  }}
                >
                  Your Phone <span style={{ color: 'red' }}>*</span>
                </span>
              )}
            </div>
          </div>

          <textarea
            placeholder="Your Message"
            style={{ backgroundColor: '#F8F8F8', width: '100%', padding: '10px', marginTop: '20px' }}
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>

          <div className='sendMessageSection' style={{ marginTop: '20px' }}>
            <button type="submit" onClick={ShowContactMessage}>Send Message</button>
            <div>
              {result && <p className='succes-msg'>Your message has been successfully sent.</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
