import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  const handleExploreClick = () => {
    navigate("/menu");
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-8 bg-[#fdfef5] min-h-screen">
      
     
      <div className="md:w-1/2"> 
        <h1 className="text-5xl font-bold mb-4">ABOUT US</h1> 
        <p className="text-xl font-semibold mb-4">
          The only thing we’re serious about is food.
        </p>
        <p className="text-gray-600 mb-6">
          Instant Munch delivers happiness to your doorstep with hot, fresh meals crafted from the finest ingredients. Whether you're craving a cheesy pizza, a hearty burger, or something sweet, we bring a world of flavors straight to you.
        </p>
        <button
          onClick={handleExploreClick}
          className="flex items-center px-6 py-2 border-2 border-black rounded-full hover:bg-black hover:text-white transition"
        >
          Explore Menu
          <span className="ml-2 text-lg">→</span>
        </button>
      </div>

      
      <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center"> 
        <img
          src="/images/aboutpage.webp" 
          alt="About Us"
          className="w-3/4 h-auto object-cover rounded-full shadow-xl"
        />
      </div>
    </div>
  );
};

export default About;
