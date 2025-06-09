import React from 'react';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;

    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);
     };

      return (
     <div
      className="min-h-screen flex items-center justify-center p-6 bg-cover bg-center"
      style={{ backgroundImage: "url('/images/background1.jpg')" }}
     >
      <form
        onSubmit={handleSubmit}
        className="bg-yellow bg-opacity-90 backdrop-blur-md rounded-lg shadow-lg p-10 max-w-md w-full"
      >
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Contact Us</h2>

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
          required
        />

        <textarea
          name="message"
          rows="4"
          placeholder="Your Message"
          className="w-full mb-6 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
          required
        ></textarea>

        <button
          type="submit"
          className="w-full bg-yellow-600 hover:bg-red-700 text-black font-semibold py-3 rounded transition-colors duration-300"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
