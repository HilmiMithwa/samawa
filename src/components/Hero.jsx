import hero1 from "../images/hero1image.png";
import hero2 from "../images/hero2image.png";
import { motion } from "motion/react";

function Hero() {
  return (
    <>
      <div className="bg-[#002366] text-white font-body px-51 py-35.25">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeIn" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="max-w-258 flex flex-col">
            <div>
              <h1 className="font-heading text-[100px]">Samawa</h1>
              <h2 className=" text-[65px]">Satu Makna Berwarna</h2>
            </div>
            <div className="flex justify-between gap-12.5 items-center">
              <button className="px-14 py-2.5 bg-white text-[#002366] text-[30px] font-medium rounded-[20px] shrink-0 whitespace-nowrap ">
                Contact Us
              </button>
              <p className="text-[30px] text-justify">
                Keindahan yang Abadi dalam Sentuhan Digital Rayakan cinta Anda
                dengan undangan digital premium yang dirancang khusus untuk
                merefleksikan kisah unik Anda
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* hero image*/}
      <div className="text-[#002366]">
        <div className="w-full  relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeIn" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="flex justify-end gap-5 -mt-20  w-full">
              <img src={hero1} alt="hero1" />
              <img src={hero2} alt="hero2" />
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default Hero;
