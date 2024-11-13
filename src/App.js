
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import ClothingItem from './components/Clothingitem';
import CartPage from './components/CartPage';
import CheckoutPage from './components/CheckoutPage';
import './components/Navbar.css';
function App() {
  const [clothes, setClothes] = useState([]);
  const [cart, setCart] = useState([]);
  // Fetch clothes data from json-server
  useEffect(() => {
    fetch('http://localhost:3001/clothes')
      .then((response) => response.json())
      .then((data) => setClothes(data))
      .catch((error) => console.error("Error fetching clothes: ", error));
  }, []);

  const addToCart = (item) => {
    if (item.stock > 0) {
      // Update the item stock in the clothes state
      const updatedClothes = clothes.map((clothingItem) =>
        clothingItem.id === item.id
          ? { ...clothingItem, stock: clothingItem.stock - 1 }
          : clothingItem
      );
      setClothes(updatedClothes);
  
      // Add the item to the cart
      setCart([...cart, item]);
    }
  };

  // Remove item from cart
  const removeFromCart = (itemId) => {
    setCart(cart.filter((item) => item.id !== itemId));
  };

  // Clear cart
  const clearCart = () => {
    setCart([]);
  };

  return (
    <Router>
      <div>
        {/* Navbar */}
        <Navbar cart={cart} />
        
        {/* Routes */}
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <h2>Trending Clothes</h2>
                <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                  {clothes.map((item) => (
                    <ClothingItem key={item.id} item={item} addToCart={addToCart} />
                  ))}
                </div>
              </div>
            }
          />
          <Route
            path="/cart"
            element={<CartPage cart={cart} removeFromCart={removeFromCart} clearCart={clearCart} />}
          />
          <Route
            path="/checkout"
            element={<CheckoutPage clearCart={clearCart} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
