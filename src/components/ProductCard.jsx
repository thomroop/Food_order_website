import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addToCart } from '../redux/slice/cartSlice';
import toast from 'react-hot-toast';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuthenticated } = useSelector((state) => state.auth);

  const handleAddToCart = () => {
    if (!isAuthenticated) {
      toast.error('Please login to add items to the cart.');
      navigate('/login');
      return;
    }

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
      <p className="text-sm text-gray-600">Stock: {product.stock}</p>
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

