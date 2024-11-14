import React from 'react';

function CheckoutPage({ cart, clearCart }) {
  const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);

  const handleConfirm = () => {
    alert('Thank you for your purchase!');
    clearCart(); // Empty the cart after confirmation
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Checkout</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty. Please add items to your cart to proceed.</p>
      ) : (
        <div>
          <h3>Your Order</h3>
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                <p>{item.name}</p>
                <p>Price: ${item.price}</p>
              </li>
            ))}
          </ul>
          <h3>Total Price: ${totalPrice.toFixed(2)}</h3>
          <button onClick={handleConfirm}>Confirm Purchase</button>
        </div>
      )}
    </div>
  );
}

export default CheckoutPage;
