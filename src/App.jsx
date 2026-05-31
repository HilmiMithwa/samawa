import { motion } from "motion/react";
import { useEffect } from "react";

import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import AboutUs from "./components/AboutUs";
import WhatWeDo from "./components/WhatWeDo";
import OurWorks from "./components/OurWorks";
import PriceList from "./components/PriceList";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    window.scrollTo(0, 0);
  });

  return (
    <>
      <div className="w-full bg-white  flex flex-col min-h-screen ">
        <Navbar />
        <Hero />

        <div className="max-w-[1440px] mx-auto px-6 md:px-15 w-full">
          <div id="about-us"><AboutUs /></div>
          <div id="what-we-do"><WhatWeDo /></div>
          <div id="our-works"><OurWorks /></div>
          <div id="price-list"><PriceList /></div>
          <div id="contact"><ContactUs /></div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
