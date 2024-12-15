import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = ({ isSignedUp }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-100 shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div>
          <Link to="/" className="text-2xl font-bold text-blue-500">
            QuickRent
          </Link>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Links for Desktop */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } lg:flex space-x-6 items-center`}
        >
          <Link
            to="/"
            className="text-gray-700 hover:text-blue-500 transition duration-200"
          >
            Home
          </Link>
          <Link
            to="/features"
            className="text-gray-700 hover:text-blue-500 transition duration-200"
          >
            Features
          </Link>
          <Link
            to="/gadgetsListing"
            className="text-gray-700 hover:text-blue-500 transition duration-200"
          >
            Gadget Listings
          </Link>
          <Link
            to="/contact-us"
            className="text-gray-700 hover:text-blue-500 transition duration-200"
          >
            Contact Us
          </Link>

          {/* Sign Up Button */}
          {!isSignedUp && (
            <button
              onClick={() => navigate("/signup")}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
            >
              Sign Up
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
