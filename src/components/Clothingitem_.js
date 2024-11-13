import React from 'react';

function ClothingItem({ item, addToCart }) {
  return (
    <div className="clothing-item">
      <img src={item.image} alt={item.name} style={{ width: '100px', height: '150px' }} />
      <h4>{item.name}</h4>
      <p>Price: ${item.price}</p>
      <p>Size: {item.size}</p>
      <p>Stock: {item.stock > 0 ? item.stock : 'Out of Stock'}</p>
      <button onClick={() => addToCart(item)} disabled={item.stock <= 0}>
        {item.stock > 0 ? "Add to Cart" : "Out of Stock"}
      </button>
    </div>
  );
}

export default ClothingItem;
