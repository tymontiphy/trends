import React from 'react';

function CartPage({ cart, removeFromCart }) {
  const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <div>
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div key={item.id} style={{ display: 'flex', alignItems: 'center' }}>
              <img src={item.image} alt={item.name} style={{ width: '50px', marginRight: '10px' }} />
              <p>{item.name}</p>
              <p>${item.price}</p>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          ))}
          <h3>Total Price: ${totalPrice.toFixed(2)}</h3>
        </div>
      )}
    </div>
  );
}

export default CartPage;