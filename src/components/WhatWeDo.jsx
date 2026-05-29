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

      <div className="flex justify-end text-[20px] text-[#002366] py-[160px]">
            <motion.div>
              {whatWeDoList.map((item, index) => (
                <div className="max-w-[1025px] flex font-body items-center justify-between py-[38px] gap-x-20 border-b">
                  <div className="">{item.title}</div>
                  <div className="max-w-[441px] text-justify">{item.desc}</div>
                </div>
              ))}
            </motion.div>
          </div>
    </>
  );
}

export default WhatWeDo;
