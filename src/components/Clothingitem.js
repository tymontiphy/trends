import React from 'react';

function ClothingItem({ item, addToCart }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px', width: '250px' }}> {/* Container width */}
      <img 
        src={item.image} 
        alt={item.name} 
        style={{ width: '100%', height: 'auto', maxHeight: '300px', objectFit: 'cover' }} 
      /> {/* Responsive image */}
      <h4>{item.name}</h4>
      <p>Price: ${item.price}</p>
      <p>Size: {item.size}</p>
      <p>Gender: {item.gender}</p>
      <p>Stock: {item.stock > 0 ? item.stock : 'Out of Stock'}</p>
      <button onClick={() => addToCart(item)} disabled={item.stock <= 0}>
        {item.stock > 0 ? "Add to Cart" : "Out of Stock"}
      </button>
    </div>
  );
}

export default ClothingItem;


