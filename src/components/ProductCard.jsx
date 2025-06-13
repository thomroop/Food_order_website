import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/slice/cartSlice';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <div className="border p-4 rounded-lg shadow-md bg-yellow-50 dark:bg-gray-200 transition-transform transform hover:scale-105 hover:z-10 focus:scale-105 focus:z-10 relative">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover rounded"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = '/images/default/avatar.jpeg'; // fallback image
        }}
      />
      <h3 className="mt-2 text-lg font-semibold">{product.name}</h3>
      <p className="text-gray-700 dark:text-gray-900">₹{product.price}</p>
      <button
        onClick={handleAddToCart}
        className="mt-3 bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded transition"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
