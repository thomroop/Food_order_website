import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div
      className="h-screen bg-cover bg-center relative"
      style={{ backgroundImage: "url('/images/background.jpg')" }}
    >
      
      <div className="absolute inset-0  flex flex-col items-center justify-center text-center px-4">
        
    
        <img
          src="/images/logo.png"
          alt="Logo"
          className="h-20 w-auto absolute top-6 left-6"
        />

 
        <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
          Fresh, fast, and full of flavor..
        </h1>

   
        <button
          className="bg-red-600 hover:bg-red-700 text-white text-lg font-semibold py-3 px-8 rounded transition"
          onClick={() => navigate('/login')}
        >
          Order Now
        </button>
      </div>
    </div>
  );
};

export default Home;
