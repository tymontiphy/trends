import React from 'react';
import ClothingItem from './Clothingitem';

function ClothingList({ clothes, addToCart }) {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {clothes.length > 0 ? (
        clothes.map((item) => (
          <ClothingItem key={item.id} item={item} addToCart={addToCart} />
        ))
      ) : (
        <p>No items match your filter criteria.</p>
      )}
    </div>
  );
}

export default ClothingList;