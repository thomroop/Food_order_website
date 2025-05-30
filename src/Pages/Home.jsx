import React from 'react';
import ProductList from '../components/ProductList';

function Home() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-center my-4">Food Menu</h1>
      <ProductList />
    </div>
  );
}

export default Home;
