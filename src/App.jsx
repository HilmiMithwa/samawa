import { motion } from "motion/react";


import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import AboutUs from "./components/AboutUs";
import WhatWeDo from "./components/WhatWeDo";



function App() {
  return (
    <>
      <div className="max-w-full bg-white  flex flex-col ">
        {/* Navbar */}
        <Navbar />

        {/* Hero */}
        <Hero />
        
        <div className="px-15">
          {/* about us */}
          <AboutUs />
          

          {/* what we do */}
          <WhatWeDo />
          


          
          
        </div>

      </div>
    </>
  );
}

export default App;
