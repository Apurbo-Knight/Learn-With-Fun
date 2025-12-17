import React from "react";
import support from "../assets/support.png"

const Support = () => {
  return (
    <section className="pb-24 pt-12 bg-gradient-to-b from-pink-50 to-white">
      <div className="max-w-7xl mx-auto px-4 md:px-10 flex flex-col lg:flex-row items-center gap-10">
        
        {/* Left: Image */}
        <div className="flex-1">
          <img
            src={support}
            alt="Support"
            className="rounded-2xl  w-full object-cover hidden lg:block"
          />
        </div>

        {/* Right: Text Content */}
        <div className="flex-1 text-center lg:text-left">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent mb-4">
            We're Here to Help
          </h2>
          <p className="text-gray-600 mb-6 text-lg">
            Whether you have questions about lessons, need guidance, or want to report a problem, our support team is always ready to assist you. 
            We ensure every learner has the best experience possible.
          </p>
          
          {/* Support Options */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/70 backdrop-blur-md rounded-2xl shadow-lg p-6 text-center hover:-translate-y-1 transition-transform duration-300">
              <h3 className="text-xl font-semibold text-pink-600 mb-2">Email Support</h3>
              <p className="text-gray-600 text-sm">Reach us at support@example.com</p>
            </div>
            <div className="bg-white/70 backdrop-blur-md rounded-2xl shadow-lg p-6 text-center hover:-translate-y-1 transition-transform duration-300">
              <h3 className="text-xl font-semibold text-blue-600 mb-2">Live Chat</h3>
              <p className="text-gray-600 text-sm">Chat with our support team instantly</p>
            </div>
            <div className="bg-white/70 backdrop-blur-md rounded-2xl shadow-lg p-6 text-center hover:-translate-y-1 transition-transform duration-300">
              <h3 className="text-xl font-semibold text-yellow-600 mb-2">FAQs</h3>
              <p className="text-gray-600 text-sm">Find answers to common questions</p>
            </div>
            <div className="bg-white/70 backdrop-blur-md rounded-2xl shadow-lg p-6 text-center hover:-translate-y-1 transition-transform duration-300">
              <h3 className="text-xl font-semibold text-green-600 mb-2">Call Us</h3>
              <p className="text-gray-600 text-sm">+880 123 456 7890</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Support;
