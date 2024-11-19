import React from "react";

const Footer = () => {
  return (
    <footer className= "bg-gray-800 text-white py-8 ">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Contact Information */}
        <div>
          <h3 className="text-xl font-bold mb-4">Contact Us</h3>
          <p>
            Email:{" "}
            <a href="mailto:contact@example.com" className="text-blue-400">
              contact@example.com
            </a>
          </p>
          <p>Phone: +123 456 7890</p>
          <p>Address: 123 Street, City, Country</p>
        </div>

        {/* Social Media Links */}
        <div>
          <h3 className="text-xl font-bold mb-4">Follow Us</h3>
          <div className="flex justify-center md:justify-start space-x-4">
            <a
              href="https://facebook.com"
              className="hover:text-blue-500 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
            <a
              href="https://twitter.com"
              className="hover:text-blue-400 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
            <a
              href="https://instagram.com"
              className="hover:text-pink-400 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </div>
        </div>

        {/* Copyright Notice */}
        <div>
          <p className="text-sm text-gray-400 mt-4 md:mt-0">
            &copy; {new Date().getFullYear()} Your Company. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
