import React from "react";
import facebook from "../assets/facebook.png";
import insta from "../assets/instagram.png";
import twitter from "../assets/twitter.png";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Start Learning", path: "/startLearning" },
    { name: "Tutorials", path: "/tutorials" },
  ];

  return (
    <footer className="bg-gradient-to-r from-pink-100 via-purple-100 to-blue-100 py-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 px-4">
        {/* Contact Info */}
        <div className="text-center md:text-left">
          <h3 className="text-xl font-bold text-pink-600 mb-2">Contact Us</h3>
          <p>
            Email:{" "}
            <a
              href="mailto:akdjoy29@gmail.com"
              className="text-pink-500 hover:underline"
            >
              akdjoy29@gmail.com
            </a>
          </p>
          <p>Phone: 01775888111</p>
          <p>Address: Motijheel, Dhaka</p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <h3 className="text-xl font-bold text-purple-600 mb-2">Navigation</h3>
          <div className="flex flex-col md:flex-row gap-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className="text-gray-800 hover:text-purple-500 transition-colors"
              >
                {link.name}
              </NavLink>
            ))}
          </div>
        </div>

        {/* Social Media */}
        <div className="flex flex-col items-center md:items-end gap-2">
          <h3 className="text-xl font-bold text-blue-600 mb-2">Follow Us</h3>
          <div className="flex gap-4">
            {[{ img: facebook, href: "https://facebook.com" },
              { img: twitter, href: "https://twitter.com" },
              { img: insta, href: "https://instagram.com" }].map((icon, idx) => (
              <a
                key={idx}
                href={icon.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/50 rounded-full hover:bg-white transition"
              >
                <img src={icon.img} alt="" className="w-6 h-6" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-8 text-center text-gray-600 text-sm">
        &copy; {new Date().getFullYear()} All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
