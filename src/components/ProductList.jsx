import React, { useState } from 'react';
import products from '../data/products.json';
import ProductCard from './ProductCard';

const ProductList = () => {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');

  // Filter products based on category and search input
  const filteredProducts = products.filter((product) => {
    const matchesCategory = category ? product.category === category : true;
    const matchesSearch = product.name.toLowerCase().includes(search.trim().toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="p-4 sm:p-6 md:p-8 max-w-7xl mx-auto">
      {/* Search Input */}
      <input
        type="text"
        placeholder="Search food..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="mb-4 w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
      />

      {/* Category Buttons */}
      <div className="mb-6 flex flex-wrap gap-2">
        {['All', 'Pizza', 'Burger', 'Pasta', 'Donuts', 'Sandwich'].map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat === 'All' ? '' : cat)}
            className={`px-4 py-1.5 rounded-md text-sm transition ${
              category === cat || (cat === 'All' && category === '')
                ? 'bg-red-500 text-white'
                : 'bg-gray-200 hover:bg-red-500 hover:text-white'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Heading */}
      <h2 className="text-xl md:text-2xl font-bold mb-4 text-gray-800 dark:text-white">
        {category ? `${category} Items` : 'All Products'}
      </h2>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.length === 0 ? (
          <p className="col-span-full text-center text-gray-500">No products found.</p>
        ) : (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        )}
      </div>
    </div>
  );
};

export default ProductList;
