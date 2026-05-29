import { motion } from "motion/react";


import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import AboutUs from "./components/AboutUs";
import WhatWeDo from "./components/WhatWeDo";
import OurWorks from "./components/OurWorks";
import PriceList from "./components/PriceList"



function App() {
  return (
    <>
      <div className="w-full bg-white  flex flex-col min-h-screen ">
        <Navbar />
        <Hero />
        
        <div className="max-w-[1440px] mx-auto px-6 md:px-15 w-full">
          <AboutUs />
          <WhatWeDo />
          <OurWorks />
          <PriceList />

        </div>

      </div>
    </>
  );
}

export default App;
