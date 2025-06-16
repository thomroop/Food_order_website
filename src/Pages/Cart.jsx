import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity, clearCart } from '../redux/slice/cartSlice';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleQuantityChange = (id, quantity) => {
    if (quantity > 0) {
      dispatch(updateQuantity({ id, quantity }));
    }
  };

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const PolicySection = () => (
    <div className="mt-8 p-5 bg-yellow-100 dark:bg-gray-800 rounded-lg text-gray-800 dark:text-gray-200 shadow">
      <h3 className="text-lg font-bold mb-2">Delivery & Return Policy</h3>
      <ul className="list-disc list-inside space-y-1 text-sm leading-relaxed">
        <li>🍽️ Orders once placed cannot be canceled or refunded.</li>
        <li>🚚 Delivery will be completed within 30–45 minutes from order confirmation.</li>
        <li>📍 Delivery is available within city limits only.</li>
        <li>🔄 In case of wrong or damaged delivery, please contact support within 30 minutes.</li>
        <li>❌ No return or exchange for food items once delivered.</li>
      </ul>
    </div>
  );

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>

      {cartItems.length === 0 ? (
        <div className="text-center text-gray-600">
          <p className="mb-6">Your cart is empty.</p>
          <PolicySection />
        </div>
      ) : (
        <>
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between bg-orange-100 p-4 rounded shadow"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-16 w-16 object-cover rounded"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = '/images/default/avatar.jpeg';
                    }}
                  />
                  <div>
                    <h4 className="font-semibold">{item.name}</h4>
                    <p>₹{item.price}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(e) =>
                      handleQuantityChange(item.id, parseInt(e.target.value))
                    }
                    className="w-16 border rounded text-center"
                  />

                  <button
                    onClick={() => dispatch(removeFromCart(item.id))}
                    className="text-white bg-red-500 px-3 py-1 rounded hover:bg-red-700"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 text-right">
            <p className="text-xl font-bold">Total: ₹{totalPrice}</p>
            <button
              onClick={() => dispatch(clearCart())}
              className="mt-3 bg-gray-700 hover:bg-red-600 text-white py-2 px-6 rounded"
            >
              Clear Cart
            </button>
          </div>

          
          <PolicySection />
        </>
      )}
    </div>
  );
};

export default Cart;
