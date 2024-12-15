import React from "react";
import Features from "../components/Features";
import GadgetListing from "../components/GadgetListing";
import HeroBanner from "../components/HeroBanner";
import Navbar from "../components/Navbar";
import ContactUs from "../components/ContactUs";
const Home = () => {
    return (
    <div>
        <HeroBanner/>
        <Features/>
        <GadgetListing/>
        <ContactUs/>
        
    </div>
    )
}

export default Home;