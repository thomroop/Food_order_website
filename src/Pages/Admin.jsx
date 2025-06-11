import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct, deleteProduct } from '../redux/productSlice';

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
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-6 text-yellow-600">Admin Dashboard</h1>

      {/* Product Form */}
      <form onSubmit={handleAddProduct} className="grid grid-cols-2 gap-4 bg-gray-100 p-4 rounded shadow mb-8">
        <input type="text" name="id" placeholder="Product ID" value={formData.id} onChange={handleChange} className="p-2 border rounded" required />
        <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} className="p-2 border rounded" required />
        <input type="number" name="price" placeholder="Price" value={formData.price} onChange={handleChange} className="p-2 border rounded" required />
        <input type="text" name="category" placeholder="Category" value={formData.category} onChange={handleChange} className="p-2 border rounded" />
        <input type="text" name="image" placeholder="Image URL" value={formData.image} onChange={handleChange} className="p-2 border rounded" />
        <button type="submit" className="col-span-2 bg-yellow-600 text-white p-2 rounded hover:bg-red-700">Add Product</button>
      </form>

      {/* Product List */}
      <h2 className="text-xl font-semibold mb-2">Product List</h2>
      <div className="grid gap-4">
        {products.length === 0 ? (
          <p className="text-gray-600">No products found.</p>
        ) : (
          products.map((product) => (
            <div key={product.id} className="p-4 border rounded shadow flex justify-between items-center">
              <div>
                <p className="font-bold">{product.name}</p>
                <p>₹{product.price} | {product.category}</p>
              </div>
              <button onClick={() => handleDelete(product.id)} className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">
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
