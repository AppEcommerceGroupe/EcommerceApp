import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './form.css';

function CreateAccount() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    const user = { username, email, password };

    try {
      const response = await fetch('http://localhost:3000/api/products/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
      });

      if (response.ok) {
        navigate('/login');
      } else {
        const errorData = await response.json();
        console.error('Failed to create user:', errorData);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="wrapper">
      <div className="image-container">
        <img src="https://img.freepik.com/photos-premium/ecran-telephone-portable-dans-modele-panier-livraison-achats-ligne_115594-2459.jpg?w=900" alt="E-commerce" />
      </div>
      <div className="form-container">
        <h2>Create an Account</h2>
        <h3>Enter your details below</h3>
        <form onSubmit={handleSubmit}>
          <div className="inputBox">
            <input
              id="usernameInput"
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
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
          <div className="inputBox">
            <input
              id="confirmPasswordInput"
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <button className="button" type="submit">Create Account</button>
        </form>
        <p>Already have an account? <button className='but' onClick={() => navigate('/login')}>Login</button></p>
      </div>
    </div>
  );
}

export default CreateAccount;
