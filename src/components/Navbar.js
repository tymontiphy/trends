import React from 'react';
import { Link } from 'react-router-dom';

function Navbar({ setSearchQuery, setSizeFilter, setPriceFilter, setGenderFilter, cart }) {
  const handleSearchChange = (e) => setSearchQuery(e.target.value);
  const handleSizeChange = (e) => setSizeFilter(e.target.value);
  const handlePriceChange = (e) => setPriceFilter([0, parseInt(e.target.value)]);
  const handleGenderChange = (e) => setGenderFilter(e.target.value);

  return (
    <nav className="navbar">
      <h1>TrendThreads</h1>
      <input type="text" placeholder="Search..." onChange={handleSearchChange} />

  <label>
    Size:
    <select onChange={handleSizeChange}>
      <option value="">All</option>
      <option value="S">S</option>
      <option value="M">M</option>
      <option value="L">L</option>
    </select>
  </label>

  <label>
    Gender:
    <select onChange={handleGenderChange}>
      <option value="">All</option>
      <option value="Men">Men</option>
      <option value="Women">Women</option>
    </select>
  </label>

  <label>
    Max Price:
    <input type="range" min="0" max="100" onChange={handlePriceChange} />
  </label>

  <Link to="/cart">
    Cart ({cart.length})
  </Link>
</nav>
  );
}

export default Navbar; 

