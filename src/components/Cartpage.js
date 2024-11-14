import React from 'react';
import { Link } from 'react-router-dom';

function CartPage({ cart, removeFromCart, clearCart }) {
    const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);

    const handleCheckout = () => {
        alert('Thank you for your purchase!');
        clearCart(); // Clear the cart after checkout
    };

    return (
        <div style={{ padding: '20px' }}>
            <h2>Shopping Cart</h2>

            {/* Cart Icon */}
            <div style={{ display: 'flex', alignItems: 'center' }}>
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
                            <p>{item.name}</p>
                            <p>${item.price}</p>
                            <button onClick={() => removeFromCart(item.id)}>Remove</button>
                        </div>
                    ))}
                    <h3>Total Price: ${totalPrice.toFixed(2)}</h3>
                    <button onClick={handleCheckout}>Confirm Purchase</button>
                    <Link to="/checkout">
                        <button>Proceed to Checkout</button>
                    </Link>
                </div>
            )}

            {/* Contact Information */}
            <div style={{ marginTop: '20px' }}>
                <h4>Need Help?</h4>
                <p>Contact our customer support team:</p>
                <p>Email: support@trendthreads.com</p>
                <p>Phone: 123-456-7890</p>
            </div>
        </div>
    );
}
export default CartPage;