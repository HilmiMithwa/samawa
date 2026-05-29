import { motion } from "motion/react";
import emailPicture from "../images/email.png";
import instagramPicture from "../images/instagram.png";

function ContactUs() {
  return (
    <>
      <div className="text-[#002366] pt-[160px]">
        <motion.div>
          <div className="flex justify-between items-center">
            <div className="flex gap-[24px] text-[25px] font-heading">
              <h1>[05]</h1>
              <h1>Contact Us</h1>
            </div>
            <h1 className="text-[100px] font-heading max-w-[850px] text-right font-light">
              Let’s connect and make it happen
            </h1>
          </div>
        </motion.div>
      </div>

      <div className="flex justify-between items-center pt-[80px]">
        <div className="bg-[#002366] text-white flex items-center px-[81px] py-[18px] justify-center font-body gap-[42px] w-[532px] h-[81px] text-[30px] rounded-[25px]">
            <img src={emailPicture} />
            <p>kwugoks@gmail.com</p>
        </div>
        <div className="bg-[#002366] text-white flex items-center px-[81px] py-[18px] justify-center font-body gap-[42px] w-[532px] h-[81px] text-[30px] rounded-[25px]">
            <img src={instagramPicture} />
            <p>@samawawedding</p>
        </div>
      </div>
    </>
  );
}

export default ContactUs;
