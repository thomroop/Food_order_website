import React from 'react';

function ProductCard({ product }) {
  return (
    <div className="border p-4 rounded shadow">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-40 object-cover rounded mb-2"
      />
      <h3 className="text-lg font-bold">{product.name}</h3>
      <p>₹{product.price}</p>
    </div>
  );
}

export default ProductCard;
