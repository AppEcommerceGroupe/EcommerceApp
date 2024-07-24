import React, { useEffect, useState } from 'react';
import './panier.css';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinusCircle } from '@fortawesome/free-solid-svg-icons';

const Panier = () => {
  const [cartItems, setCartItems] = useState([]);
  const [total, settotal] = useState();
  const [deleteButtons, setDeleteButtons] = useState(false);

  useEffect(() => {
    fetchCartItems();
  }, []);

  const fetchCartItems = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:3000/api/panier/getAll');
      setCartItems(response.data);
      // console.log(response.data);
      settotal(response.data.reduce((acc, item) => acc + (item.quantity * item.price), 0));

    } catch (error) {
      console.error('Error fetching cart items:', error);
    }
  };

  const updateCounter = async (index, increment) => {
    try {
      const updatedCartItems = [...cartItems];
      const updatedQuantity = updatedCartItems[index].quantity + increment;

      if (updatedQuantity >= 0) {
        updatedCartItems[index].quantity = updatedQuantity;
        setCartItems(updatedCartItems);

        await updateProduit(updatedCartItems[index].id, updatedQuantity);
      }
    } catch (error) {
      console.error('Error updating product quantity:', error);
    }
  };

  const updateProduit = async (id, newQuantity) => {
    try {
      await axios.put(`http://127.0.0.1:3000/api/panier/update/${id}`, { quantity: newQuantity });

      fetchCartItems();
    } catch (error) {
      console.error('Error updating product:', error);
    }
  };

  const deleteProduit = async (id) => {
    try {
      await axios.delete(`http://127.0.0.1:3000/api/panier/delete/${id}`);

      setCartItems(cartItems.filter(item => item.id !== id));
      setDeleteButtons(false)
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };


  return (
    <div>
      <div style={{ margin: '70px 0 0 70px' }}>
        <span style={{ color: 'gray' }}>Home &nbsp;/</span>
        <span> &nbsp; Cart</span>
      </div>
      <div className="main-content">
        <div id="main-content-static" className="main">
         
          <div className="shopping-card-items">
            <table>
              <thead>
                <tr className="shopping-card-header">
                  <th id="header-product" style={{paddingLeft : '50px'}}>Product</th>
                  <th id="header-amount">Price</th>
                  <th id="header-unitPrice">Quantity</th>
                  <th id="header-total" style={{paddingRight : '50px'}}>Subtotal</th>
                </tr>
              </thead>

              <tbody>
                {cartItems.map((item, index) => (

                  <tr key={item.id} className="shopping-card-item">
                    <td className="shopping-card-item-image" style={{paddingLeft : '50px'}}>
                      <img id={`item${item.id}`} src={item.imageUrl} alt="Product 1" style={{ width: 40, height: 40 }} />
                      <span style={{ marginLeft: 10 }}>Monitor</span>
                    </td>
                    <td className="boldText">$<span id="cost1">{item.price}</span></td>
                    <td>
                      <div id={`item${item.id}`} className="counter">
                        <button type="button" className="btn btn-outline-success counter-minus" onClick={() => updateCounter(index, -1)}>-</button>
                        <input type="number" value={item.quantity} readOnly />
                        <button type="button" className="btn btn-outline-success counter-plus" onClick={() => updateCounter(index, 1)}>+</button>
                      </div>
                    </td>
                    <td className="boldText">$<span id="total1" className="productCost" style={{paddingRight : '50px'}} >{item.price * item.quantity}</span></td>
                    {deleteButtons &&
                    <div style={{ textAlign: 'center',  margin: '50px'}}>
                      <button style={{   border: 0,borderColor: 'transparent',
                      color: 'transparent'}}
                      onClick={()=>deleteProduit(item.id)}>
                      <FontAwesomeIcon icon={faMinusCircle} size="1x" /></button>
          </div>}
                    {/* <td><button type="button" className="btn btn-outline-success counter-minus" onClick={() => handleDeleteClick(item.id)}>-</button></td> */}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="shopping-card-summary">
            <button type="button" className="btn btn-outline-success returnShopButton" onClick={() => console.log('Hello from left side')}>Return to Shop</button>
            <button type="button" className="btn btn-outline-success updateCartButton" onClick={() => setDeleteButtons(true)}>Update Cart</button>
          </div>

          <div className="shopping-card-checkout">
            <div className="shopping-card-checkout-ls">
              <input
                type="text"
                value=''

                placeholder="Enter coupon code"
                className="coupon-input"
              />
              <button className="coupon-button">
                Apply Coupon
              </button>
            </div>

            <div className="shopping-card-checkout-rs">
            <h4>Cart Total</h4>
              <div className="cart-total">
                <div>
                <h6>Subtotal: </h6>
                <span>${total}</span>
                </div>
                <div>
                <h6>Shipping:</h6>
                <span>Free</span>
                </div>
                <div>
                <h6>Total:</h6>
                <span>${total}</span>
                </div>
                
                
                

              </div>

              <button className="checkout-button">
                Process to Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Panier;
