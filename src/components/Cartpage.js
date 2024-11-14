import React from 'react';
import { Link } from 'react-router-dom';

function CartPage({ cart, removeFromCart, clearCart }) {
  const totalPrice = cart.reduce((acc, item) => acc + item.price, 0).toFixed(2);

  const handleCheckout = () => {
    if (window.confirm('Are you sure you want to proceed to checkout?')) {
      clearCart(); // Clear the cart after confirmation
      alert('Thank you for your purchase!');
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Shopping Cart</h2>

      {/* Cart Icon */}
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
        <i className="fas fa-shopping-cart" style={{ fontSize: '30px', marginRight: '10px' }}></i>
        <h3>Items in your cart</h3>
      </div>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div key={item.id} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
              <img src={item.image} alt={item.name} style={{ width: '50px', marginRight: '10px' }} />
              <div style={{ flex: 1 }}>
                <p style={{ margin: '0' }}>{item.name}</p>
                <p style={{ margin: '0', color: 'gray' }}>${item.price}</p>
              </div>
              <button 
                onClick={() => removeFromCart(item.id)} 
                style={{ marginLeft: '10px', padding: '5px 10px', backgroundColor: '#E5AA70', border: 'none', cursor: 'pointer'}}
              >
                Remove
              </button>
            </div>
          ))}

          <h3>Total Price: ${totalPrice}</h3>

          {/* Proceed to Checkout Section */}
          <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
            <Link to="/checkout">
              <button 
                style={{ 
                  padding: '10px 20px', 
                  backgroundColor: '#28a745', 
                  color: 'white', 
                  border: 'none', 
                  cursor: 'pointer' 
                }}
              >
                Proceed to Checkout
              </button>
            </Link>
            <button 
              onClick={handleCheckout}
              style={{ 
                padding: '10px 20px', 
                backgroundColor: '#007bff', 
                color: 'white', 
                border: 'none', 
                cursor: 'pointer' 
              }}
            >
              Confirm Purchase
            </button>
          </div>
        </div>
      )}

      {/* Contact Information */}
      <div style={{ marginTop: '40px' }}>
        <h4>Need Help?</h4>
        <p>Contact our customer support team:</p>
        <p>Email: support@trendthreads.com</p>
        <p>Phone: 123-456-7890</p>
      </div>
    </div>
  );
}

export default CartPage;
