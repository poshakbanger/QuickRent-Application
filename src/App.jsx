import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import HeroBanner from "./components/HeroBanner";
import SignUp from "./pages/SignUp.jsx";
import Features from "./components/Features.jsx";
import Home from "./pages/Home.jsx";
import GadgetListing from "./components/GadgetListing.jsx";
import Navbar from "./components/Navbar.jsx";
import ContactUs from "./components/ContactUs.jsx";

function App() {
  const [isSignedUp, setIsSignedUp] = useState(false);

  // Check local storage for sign-up status
  useEffect(() => {
    const signedUp = localStorage.getItem("isSignedUp") === "true";
    setIsSignedUp(signedUp);
  }, []);

  return (
    <div>
        <Navbar/>
      <Routes>
        {/* Home Page */}
        <Route path="/" element={<Home/>} />
        {/* SignUp Page */}
        <Route
          path="/signup"
        //   element={
        //     isSignedUp ? <Navigate to="/" replace /> : <SignUp setIsSignedUp={setIsSignedUp} />
        //   }
        element={<SignUp/>}/>
        <Route path="/features" element={<Features/>}/>
        <Route path="/gadgetsListing" element={<GadgetListing/>}/>
        <Route path="/contact-us" element={<ContactUs/>}/>
      </Routes>
      </div>
  );
}

export default App;