import React, { useState } from 'react';

function Navbar({ setSearchQuery, setSizeFilter, setPriceFilter, setGenderFilter, cart }) {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(100);

  function handleGenderChange(e) {
    const selectedGender = e.target.value;
    setGenderFilter(selectedGender);
  }

  function handlePriceChange() {
    setPriceFilter([minPrice, maxPrice]);
  }

  function calculateTotal() {
    return cart.reduce((total, item) => total + item.price, 0).toFixed(2);
  }

  return (
    <nav className="navbar">
      <div className="brand-name">TrendThreads</div>

  <div className="search-filter">
    <input
      type="text"
      placeholder="Search clothes..."
      onChange={(e) => setSearchQuery(e.target.value)}
    />

    <select onChange={handleGenderChange}>
      <option value="">Select Gender</option>
      <option value="male">Male</option>
      <option value="female">Female</option>
      <option value="unisex">Unisex</option>
    </select>
    
    <select onChange={(e) => setSizeFilter(e.target.value)}>
      <option value="">Select Size</option>
      <option value="S">Small</option>
      <option value="M">Medium</option>
      <option value="L">Large</option>
      <option value="XL">X-Large</option>
    </select>

    <div className="price-filter">
      <label>Min Price: ${minPrice}</label>
      <input
        type="range"
        min="0"
        max="100"
        value={minPrice}
        onChange={(e) => {
          setMinPrice(Number(e.target.value));
          handlePriceChange();
        }}
      />
      <label>Max Price: ${maxPrice}</label>
      <input
        type="range"
        min="0"
        max="100"
        value={maxPrice}
        onChange={(e) => {
          setMaxPrice(Number(e.target.value));
          handlePriceChange();
        }}
      />
    </div>
  </div>

  <div className="cart-icon">
    <span>🛒</span>
    <a href="/cart">
      Cart ({cart.length}) - Total: ${calculateTotal()}
    </a>
  </div>
</nav>
  );
}

export default Navbar;