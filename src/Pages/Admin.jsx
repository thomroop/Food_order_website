import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct, deleteProduct } from '../redux/slice/productSlice';

const Admin = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);

  const [formData, setFormData] = useState({
    id: '',
    name: '',
    price: '',
    category: '',
    image: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAddProduct = (e) => {
    e.preventDefault();
    if (!formData.id || !formData.name || !formData.price) {
      alert('Please fill all required fields!');
      return;
    }
    dispatch(addProduct({ ...formData }));
    setFormData({ id: '', name: '', price: '', category: '', image: '' });
  };

  const handleDelete = (id) => {
    dispatch(deleteProduct(id));
  };

  return (
    <div className="p-4 sm:p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-8 text-yellow-600">Admin Dashboard</h1>

    
      <form
        onSubmit={handleAddProduct}
        className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-gray-50 p-6 rounded-lg shadow-md mb-10"
      >
        <input
          type="text"
          name="id"
          placeholder="Product ID"
          value={formData.id}
          onChange={handleChange}
          className="p-2 border rounded w-full"
          required
        />
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          value={formData.name}
          onChange={handleChange}
          className="p-2 border rounded w-full"
          required
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={formData.price}
          onChange={handleChange}
          className="p-2 border rounded w-full"
          required
        />
        <input
          type="text"
          name="category"
          placeholder="Category"
          value={formData.category}
          onChange={handleChange}
          className="p-2 border rounded w-full"
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={formData.image}
          onChange={handleChange}
          className="p-2 border rounded w-full"
        />
        <button
          type="submit"
          className="md:col-span-2 bg-yellow-600 hover:bg-red-700 text-white font-semibold p-2 rounded transition"
        >
          Add Product
        </button>
      </form>

    
      <h2 className="text-2xl font-semibold mb-4">Product List</h2>
      <div className="space-y-4">
        {products.length === 0 ? (
          <p className="text-gray-600">No products found.</p>
        ) : (
          products.map((product) => (
            <div
              key={product.id}
              className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 border rounded shadow-md"
            >
              <div className="mb-2 sm:mb-0">
                <p className="font-bold text-lg">{product.name}</p>
                <p className="text-sm text-gray-600">₹{product.price} | {product.category}</p>
              </div>
              <button
                onClick={() => handleDelete(product.id)}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded transition"
              >
                Delete
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Admin;
