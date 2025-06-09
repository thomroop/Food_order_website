import React, { useState } from 'react';
import products from '../data/products.json';
import ProductCard from './ProductCard';

const ProductList = () => {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState(''); // You can add UI later to set this

  // Filter products by category and search
  const filteredProducts = products.filter((product) => {
    const matchesCategory = category ? product.category === category : true;
    const matchesSearch = product.name.toLowerCase().includes(search.trim().toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="p-4">
      {/* Search Input */}
      <input
        type="text"
        placeholder="Search food..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="mb-4 p-2 border rounded w-full"
      />

      {/* Optional: Category selector UI */}
      {/* For example, add buttons to select category */}
      <div className="mb-4 space-x-2">
        <button onClick={() => setCategory('')} className="px-3 py-1 bg-gray-300 hover:bg-red-500 rounded">All</button>
        <button onClick={() => setCategory('Pizza')} className="px-3 py-1 bg-gray-300 hover:bg-red-500 rounded">Pizza</button>
        <button onClick={() => setCategory('Burger')} className="px-3 py-1 bg-gray-300 hover:bg-red-500 rounded">Burger</button>
        <button onClick={() => setCategory('Pasta')} className="px-3 py-1 bg-gray-300 hover:bg-red-500 rounded">Pasta</button>
        <button onClick={() => setCategory('Donuts')} className="px-3 py-1 bg-gray-300 hover:bg-red-500 rounded">donuts</button>
        <button onClick={() => setCategory('Sandwich')} className="px-3 py-1 bg-gray-300  hover:bg-red-500rounded">Sandwich</button>
        {/* Add more categories as needed */}
      </div>

      <h2 className="text-2xl font-bold mb-4">
        {category ? `${category} Items` : 'All Products'}
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredProducts.length === 0 ? (
          <p className="col-span-full text-center text-gray-500">No products found.</p>
        ) : (
          filteredProducts.map((product) => <ProductCard key={product.id} product={product} />)
        )}
      </div>
    </div>
  );
};

export default ProductList;
