import React from 'react';

function CheckoutPage({ clearCart }) {
  const handleConfirm = () => {
    alert('Thank you for your purchase!');
    clearCart(); // Empty the cart after confirmation
  };

  return (
    <div>
      <h2>Checkout</h2>
      <p>Your order has been placed. Thank you for shopping with us!</p>
      <button onClick={handleConfirm}>Confirm Purchase</button>
    </div>
  );
}

export default CheckoutPage;