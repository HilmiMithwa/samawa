import { useState } from "react";
import logo from "../images/samawaLogo.png";
import { Link } from "react-scroll";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#002366] text-white sticky top-0 z-50 shadow-md">
      <div className="flex justify-between items-center py-4 px-6 md:py-8 md:px-15 max-w-7xl mx-auto">
        <img src={logo} alt="logo" className="h-8 md:h-12 object-contain" />

        <ul className="hidden md:flex gap-6 lg:gap-9.25 items-center font-navbar text-lg lg:text-[24px]">
          <li className="cursor-pointer hover:text-amber-400 transition-colors">
            <Link to="our-works" smooth={true} duration={800} offset={-70}>
              Our Works
            </Link>
          </li>
          <li className="cursor-pointer hover:text-amber-400 transition-colors">
            <Link to="contact" smooth={true} duration={800} offset={-70}>
              Contact
            </Link>
          </li>
          <li className="cursor-pointer hover:text-amber-400 transition-colors">
            <Link to="about-us" smooth={true} duration={800} offset={-70}>
              About Us
            </Link>
          </li>
          <li className="cursor-pointer hover:text-amber-400 transition-colors">
            <Link to="what-we-do" smooth={true} duration={800} offset={-70}>
              What We Do
            </Link>
          </li>
          <li className="cursor-pointer hover:text-amber-400 transition-colors">
            <Link to="price-list" smooth={true} duration={800} offset={-70}>
              Price List
            </Link>
          </li>
        </ul>

        <button 
          onClick={toggleMenu}
          className="block md:hidden focus:outline-none p-2"
          aria-label="Toggle Menu"
        >
          <div className="w-6 h-5 flex flex-col justify-between relative">
            <span className={`w-full h-0.5 bg-white rounded transition-transform duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`}></span>
            <span className={`w-full h-0.5 bg-white rounded transition-opacity duration-300 ${isOpen ? "opacity-0" : ""}`}></span>
            <span className={`w-full h-0.5 bg-white rounded transition-transform duration-300 ${isOpen ? "-rotate-45 -translate-y-2.5" : ""}`}></span>
          </div>
        </button>
      </div>

      <div className={`md:hidden bg-[#001c52] border-t border-blue-900 overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"}`}>
        <ul className="flex flex-col font-navbar text-center py-4 text-lg">
          <li className="py-3 hover:bg-[#002366]">
            <Link to="our-works" smooth={true} duration={800} offset={-70} onClick={toggleMenu}>
              Our Works
            </Link>
          </li>
          <li className="py-3 hover:bg-[#002366]">
            <Link to="contact" smooth={true} duration={800} offset={-70} onClick={toggleMenu}>
              Contact
            </Link>
          </li>
          <li className="py-3 hover:bg-[#002366]">
            <Link to="about-us" smooth={true} duration={800} offset={-70} onClick={toggleMenu}>
              About Us
            </Link>
          </li>
          <li className="py-3 hover:bg-[#002366]">
            <Link to="what-we-do" smooth={true} duration={800} offset={-70} onClick={toggleMenu}>
              What We Do
            </Link>
          </li>
          <li className="py-3 hover:bg-[#002366]">
            <Link to="price-list" smooth={true} duration={800} offset={-70} onClick={toggleMenu}>
              Price List
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;