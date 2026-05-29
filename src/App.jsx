import { motion } from "motion/react";


import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import AboutUs from "./components/AboutUs";
import WhatWeDo from "./components/WhatWeDo";



function App() {
  return (
    <>
      <div className="max-w-full bg-white  flex flex-col ">
        <Navbar />
        <Hero />
        
        <div className="max-w-full mx-auto px-15 w-full">
          <AboutUs />
          <WhatWeDo />
        </div>

      </div>
    </>
  );
}

export default App;
