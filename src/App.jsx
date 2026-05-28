import { motion } from "motion/react";
import logo from "./images/samawaLogo.png"
 
function App() {

  return (
    <>
      {/* Navbar */}
      <nav className="bg-[#002366] text-white ">
        <div className="flex justify-between text-[30px] items-center py-14 px-15">
          <img src={logo} alt="logo" />
          <ul className="flex gap-9.25 items-center font-navbar">
            <li><a>Our Works</a></li>
            <li><a>Contact</a></li>
            <li><a>About Us</a></li>
            <li><a>What We Do</a></li>
            <li><a>Price List</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section*/}
      <div className="bg-[#002366] text-white font-body px-51 py-35.25">
        <motion.div
        >
          <div className="max-w-[1032px] flex flex-col">
            <div>  
              <h1 className="font-heading text-[100px]">Samawa</h1>
              <h2 className=" text-[65px]">Satu Makna Berwarna</h2>
            </div>
            <div className="flex justify-between gap-12.5">
              <button className="px-[56px] py-[10px] bg-white text-[#002366] text-[30px] font-medium rounded-[20px] shrink-0 whitespace-nowrap self-start">Contact Us</button>
              <p className="text-[30px] text-justify">Keindahan yang Abadi dalam Sentuhan Digital Rayakan cinta Anda dengan undangan digital premium yang dirancang khusus untuk merefleksikan kisah unik Anda. </p>
            </div>
          </div>
        </motion.div>
      </div>

      
    
    </>
  )
}

export default App