import React from "react";
import { useNavigate } from "react-router-dom";

const HeroBanner = ({ isSignedUp }) => {
  const navigate = useNavigate();

  return (
    <div className="relative bg-gray-100 py-16 px-8">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
        {/* Hero Content */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Welcome to <span className="text-blue-500">QuickRent</span>
          </h1>
          <p className="text-gray-600 mb-6 font-bold">
            Rent the latest gadgets like laptops, cameras, and gaming consoles
            at affordable prices.
          </p>
          {/* {!isSignedUp && (
            <button
              className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300"
              onClick={() => navigate("/signup")}
            >
              Sign Up
            </button>
          )} */}
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
