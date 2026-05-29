import { motion } from "motion/react";
import logo from "./images/samawaLogo.png";
import hero1 from "./images/hero1image.png";
import hero2 from "./images/hero2image.png";

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

function App() {
  return (
    <>
      <div className="max-w-full bg-white overflow-x-hidden flex flex-col ">
        {/* Navbar */}
        <nav className="bg-[#002366] text-white ">
          <div className="flex justify-between text-[30px] items-center py-14 px-15">
            <img src={logo} alt="logo" />
            <ul className="flex gap-9.25 items-center font-navbar">
              <li>
                <a>Our Works</a>
              </li>
              <li>
                <a>Contact</a>
              </li>
              <li>
                <a>About Us</a>
              </li>
              <li>
                <a>What We Do</a>
              </li>
              <li>
                <a>Price List</a>
              </li>
            </ul>
          </div>
        </nav>

        {/* Hero Section*/}
        <div className="bg-[#002366] text-white font-body px-51 py-35.25">
          <motion.div>
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
            <motion.div>
              <div className="flex justify-end gap-5 -mt-20  w-full">
                <img src={hero1} alt="hero1" />
                <img src={hero2} alt="hero2" />
              </div>
            </motion.div>
          </div>
        </div>

        <div className="px-15">
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
                  pembuatan undangan digital premium yang berfokus pada
                  keindahan visual dan detail estetika.
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
          
        </div>

      </div>
    </>
  );
}

export default App;
