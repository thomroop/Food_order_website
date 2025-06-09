import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div
      className="h-screen bg-cover bg-center flex flex-col justify-center items-center"
      style={{ backgroundImage: "url('/images/background.jpg')" }}
    > <div className="p-4 absolute top-0 left-0">
        <img
        src="/images/logo.png"
        alt="Logo"
        className="h-20 w-auto mb-6"
      />
      </div>
      <h1 className="text-white text-5xl font-bold mb-6 text-center">
        Fresh, fast, and full of flavor..
      </h1>
      <button
        className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-8 rounded"
        onClick={() => navigate('/menu')}
      >
        Order Now
      </button>
    </div>
  );
};

export default Home;
