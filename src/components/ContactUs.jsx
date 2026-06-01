import { motion } from "motion/react";
import emailPicture from "../images/email.png";
import instagramPicture from "../images/instagram.png";

function ContactUs() {
  return (
    <>
      <div className="text-[#002366] pt-16 md:pt-[160px] bg-opacity-90 px-6 md:px-0">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeIn" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 md:gap-0">
            <div className="flex gap-[24px] text-xl md:text-[25px] font-heading">
              <h1>[05]</h1>
              <h1>Contact Us</h1>
            </div>
            <h1 className="text-4xl md:text-[100px] font-heading max-w-[850px] text-left md:text-right font-light leading-tight">
              Let’s connect and make it happen
            </h1>
          </div>
        </motion.div>
      </div>
      
      <div className="px-6 md:px-0">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeIn" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center pt-10 md:pt-[80px] gap-4 md:gap-0">
            <div className="bg-[#002366] text-white flex items-center px-6 md:px-[81px] py-4 md:py-[18px] justify-center font-body gap-4 md:gap-[42px] w-full md:w-[532px] h-auto md:h-[81px] text-lg md:text-[30px] rounded-[18px] md:rounded-[25px]">
              <img src={emailPicture} className="h-6 md:h-auto object-contain" />
              <p className="break-all">kwugoks@gmail.com</p>
            </div>
            <div className="bg-[#002366] text-white flex items-center px-6 md:px-[81px] py-4 md:py-[18px] justify-center font-body gap-4 md:gap-[42px] w-full md:w-[532px] h-auto md:h-[81px] text-lg md:text-[30px] rounded-[18px] md:rounded-[25px]">
              <img src={instagramPicture} className="h-6 md:h-auto object-contain" />
              <p>@samawawedding</p>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
}

export default ContactUs;