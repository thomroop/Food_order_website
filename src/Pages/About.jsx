import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  const handleExploreClick = () => {
    navigate("/menu");
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-4 sm:px-8 py-10 bg-[#fdfef5] min-h-screen">
      
      {/* Left: Text Content */}
      <div className="md:w-1/2 mb-10 md:mb-0 text-center md:text-left">
        <h1 className="text-3xl sm:text-5xl font-bold mb-4 text-gray-900">ABOUT US</h1>
        
        <p className="text-lg sm:text-xl font-semibold mb-4 text-gray-800">
          The only thing we’re serious about is food.
        </p>

        <p className="text-gray-600 mb-6 px-2 sm:px-0">
          Instant Munch delivers happiness to your doorstep with hot, fresh meals crafted
          from the finest ingredients. Whether you're craving a cheesy pizza, a hearty burger,
          or something sweet, we bring a world of flavors straight to you.
        </p>

        <button
          onClick={handleExploreClick}
          className="inline-flex items-center px-6 py-2 border-2 border-black rounded-full hover:bg-black hover:text-white transition"
        >
          Explore Menu
          <span className="ml-2 text-lg">→</span>
        </button>
      </div>

      {/* Right: Image */}
      <div className="md:w-1/2 flex justify-center">
        <img
          src="/images/aboutpage.webp"
          alt="About Us"
          className="w-60 sm:w-3/4 max-w-sm object-cover rounded-full shadow-xl"
        />
      </div>
    </div>
  );
};

export default About;
