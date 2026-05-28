import { motion } from "motion/react";
import logo from "./images/samawaLogo.png"
 
function App() {

  return (
    <>
      
      <nav className="flex justify-between text-[30px] items-center py-14 px-15 bg-[#002366] text-white">
        <img src={logo} alt="logo" />
        <ul className="flex gap-9.25 items-center font-navbar">
          <li><a>Our Works</a></li>
          <li><a>Contact</a></li>
          <li><a>About Us</a></li>
          <li><a>What We Do</a></li>
          <li><a>Price List</a></li>
        </ul>
      </nav>

      
    
    </>
  )
}

export default App