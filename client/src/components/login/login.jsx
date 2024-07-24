import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './form.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post('http://localhost:3000/api/login', {
        email,
        password
      });

      localStorage.setItem('token', response.data.token);
      navigate('/accueil');
      
    } catch (error) {
      setError('Invalid credentials');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="wrapper">
      <div className="image-container">
        <img src="https://img.freepik.com/photos-premium/ecran-telephone-portable-dans-modele-panier-livraison-achats-ligne_115594-2459.jpg?w=900" alt="E-commerce" />
      </div>
      <div className="form-container">
        <h2>Log in to Exclusive</h2>
        <h3>Enter your details below</h3>
        <form onSubmit={handleSubmit}>
          <div className="inputBox">
            <input
              id="emailInput"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="inputBox">
            <input
              id="passwordInput"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button className="btn" type="submit" disabled={loading}>
            {loading ? 'Logging in...' : 'Login'}
          </button>
          {error && <div className="error">{error}</div>}
        </form>
        <p>Forgot password?</p>
      </div>
    </div>
  );
}

export default Login;
