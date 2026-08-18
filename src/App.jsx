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
<<<<<<< HEAD

        {/* hero image*/}
        <div className="text-[#002366]">
          <div className="w-full  relative z-20">
            <motion.div>
              <div className="flex justify-end gap-5 -mt-20  w-full">
                <img src={hero1} alt="hero1" />
                <img src={hero2} alt="hero2" />
              </div>
            </motion.div>
          </div>
        </div>

        {/* about us */}
        <div>
          <motion.div>
            <div className="flex justify-between font-body gap-[340px] items-center py-[160px]">
              <div className="flex gap-[24px] text-[25px] font-heading">
                <h1>[01]</h1>
                <h1>About Us</h1>
              </div>
              <p className="text-[30px] text-right max-w-[822px]">
                Setiap kisah cinta itu unik, dan cara Anda membagikannya pun
                harus terasa istimewa. Kami adalah tim kreatif di balik
                pembuatan undangan digital premium yang berfokus pada keindahan
                visual dan detail estetika.
              </p>
            </div>
          </motion.div>
        </div>

        {/* what we do */}
        <div>
          <motion.div>
            <div className="flex justify-between font-body gap-[340px] items-center ">
              <h1 className="text-[100px] font-heading max-w-[825px]">
                Focusing on result and aesthetic design
              </h1>
              <div className="flex gap-[24px] text-[25px] font-heading">
                <h1>[02]</h1>
                <h1>What we do </h1>
              </div>
            </div>
          </motion.div>
        </div>

        {/* what we do table list */}
        


=======
        <Footer />
>>>>>>> 413bc0ad1b0eb60215259f9349d5534bf3bf5cf8
      </div>
    </>
  );
}

export default App;
