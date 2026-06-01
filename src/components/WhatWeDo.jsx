import { motion } from "motion/react";

const whatWeDoList = [
  {
    title: "Fokus pada Kemudahan & Efisiensi (Modern & Praktis)",
    desc: "Kami menyederhanakan proses pembuatan dan penyebaran undangan pernikahan Anda melalui platform digital yang instan, hemat biaya, dan ramah lingkungan.",
  },
  {
    title: "Fokus pada Hasil & Estetika (Elegan & Kreatif)",
    desc: "Kami merancang setiap detail undangan digital dengan estetika visual yang anggun dan transisi modern untuk menciptakan kesan pertama yang eksklusif bagi para tamu.",
  },
  {
    title: "Singkat, Tegas, & Interaktif (Gaya Startup/Tech)",
    desc: "Kami menyediakan fitur-fitur canggih seperti manajemen RSVP otomatis, peta lokasi interaktif, dan musik latar untuk memaksimalkan pengalaman mengundang Anda.",
  },
];

function WhatWeDo() {
  return (
    <>
      <div className="text-[#002366] px-6 md:px-0">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeIn" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="flex flex-col-reverse md:flex-row justify-between font-body gap-6 md:gap-[340px] items-start md:items-center">
            <h1 className="text-4xl md:text-[100px] font-heading max-w-[825px] font-light leading-tight">
              Focusing on result and aesthetic design
            </h1>
            <div className="flex gap-[24px] text-xl md:text-[25px] font-heading text-right">
              <h1>[02]</h1>
              <h1>What we do</h1>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="flex justify-end text-[20px] text-[#002366] py-16 md:py-[160px] px-6 md:px-0">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeIn" }}
          viewport={{ once: true, amount: 0.3 }}
          className="w-full max-w-[1025px]"
        >
          {whatWeDoList.map((item, index) => (
            <div key={index} className="w-full flex flex-col md:flex-row font-body items-start md:items-center justify-between py-6 md:py-[38px] gap-4 md:gap-x-20 border-b">
              <div className="font-medium md:font-normal text-lg md:text-[20px]">{item.title}</div>
              <div className="w-full md:w-[50%] text-base md:text-[20px] text-left md:text-justify text-slate-600 md:text-[#002366]">{item.desc}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </>
  );
}

export default WhatWeDo;