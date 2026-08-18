import hero1 from "../images/hero1image.png";
import hero2 from "../images/hero2image.png";
import { motion } from "motion/react";
import Typewriter from "typewriter-effect";

function Hero() {
  return (
    <>
      <div className="bg-[#002366] text-white font-body  md:px-20 lg:px-51 lg:py-35.25 relative z-30">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeIn" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="max-w-7xl mx-auto flex flex-col gap-8">
            <div className="text-center md:text-left">
              <h1 className="font-heading text-5xl md:text-[80px] lg:text-[100px] leading-tight">Samawa</h1>
              <div className="text-2xl md:text-[45px] lg:text-[65px] font-medium min-h-[40px] md:min-h-[80px]">
                <Typewriter
                  options={{
                    strings: [
                      "Satu Makna Berwarna",
                      "Wedding Invitation",
                      "Party Invitation",
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row justify-between gap-6 md:gap-12.5 items-center">
              <button className="w-fit mx-auto md:mx-0 md:w-auto px-6 py-2 md:px-14 md:py-2.5 bg-white text-[#002366] text-base md:text-[30px] font-medium rounded-[15px] md:rounded-[20px] shrink-0 whitespace-nowrap order-2 md:order-1 transition-transform active:scale-95">
                Contact Us
              </button>
              <p className="text-lg md:text-[24px] lg:text-[30px] text-center md:text-justify order-1 md:order-2 leading-relaxed">
                Keindahan yang Abadi dalam Sentuhan Digital Rayakan cinta Anda
                dengan undangan digital premium yang dirancang khusus untuk
                merefleksikan kisah unik Anda
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* hero image*/}
      <div className="text-[#002366] px-6 md:px-0">
        <div className="w-full  relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeIn" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="flex justify-center md:justify-end gap-4 md:gap-5 mt-16 md:mt-10 w-full max-w-7xl mx-auto">
              <img src={hero1} alt="hero1"  className="w-1/2 max-w-[45%] md:w-auto object-cover rounded-lg"/>
              <img src={hero2} alt="hero2" className="w-1/2 max-w-[45%] md:w-auto object-cover rounded-lg"/>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default Hero;
