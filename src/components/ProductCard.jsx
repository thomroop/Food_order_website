import React from 'react';

const ProductCard = ({ product }) => {
  const addToCart = () => {
    // Get existing cart from localStorage or empty array
    const existingCart = JSON.parse(localStorage.getItem('cartItems')) || [];

    // Check if product already in cart
    const index = existingCart.findIndex(item => item.id === product.id);

    if (index !== -1) {
      // Product exists, increase quantity
      existingCart[index].quantity += 1;
    } else {
      // Add product with quantity 1
      existingCart.push({ ...product, quantity: 1 });
    }

    // Save updated cart to localStorage
    localStorage.setItem('cartItems', JSON.stringify(existingCart));

    alert(`${product.name} added to cart!`);
  };

  return (
    <div className="border p-4 rounded shadow">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-40 object-cover rounded mb-2"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = '/images/default/avatar.jpeg';
        }}
      />

      <h3 className="text-lg font-bold">{product.name}</h3>
      <p>₹{product.price}</p>

      <button
        onClick={addToCart}
        className="mt-2 bg-gray-500 text-white py-1 px-4 rounded hover:bg-green-600"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
