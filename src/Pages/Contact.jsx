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
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 py-12 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/background1.jpg')" }}
    >
      <form
        onSubmit={handleSubmit}
        className="bg-brown-dark-100 bg-opacity-90 backdrop-blur-md rounded-xl shadow-xl p-6 sm:p-10 w-full max-w-md"
      >
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Contact Us</h2>

        <div className="mb-4">
          <label htmlFor="name" className="block mb-1 font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Your Name"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block mb-1 font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Your Email"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
            required
          />
        </div>

        <div className="mb-6">
          <label htmlFor="message" className="block mb-1 font-medium text-gray-700">
            Message
          </label>
          <textarea
            name="message"
            id="message"
            rows="4"
            placeholder="Your Message"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-red-500 hover:bg-yellow-600 text-white font-semibold py-3 rounded transition duration-300"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
