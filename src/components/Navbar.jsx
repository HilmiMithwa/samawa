import logo from "../images/samawaLogo.png";
import { Link } from "react-scroll";

function Navbar() {
  return (
    <nav className="bg-[#002366] text-white sticky top-0 z-50">
      <div className="flex justify-between text-[30px] items-center py-14 px-15">
        <img src={logo} alt="logo" />
        <ul className="flex gap-9.25 items-center font-navbar">
          <li>
            <Link to="our-works" smooth={true} duration={800} offset={-70}>
              Our Works
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={800} offset={-70}>
              Contact
            </Link>
          </li>
          <li>
            <Link to="about-us" smooth={true} duration={800} offset={-70}>
              About Us
            </Link>
          </li>
          <li>
            <Link to="what-we-do" smooth={true} duration={800} offset={-70}>
              What We Do
            </Link>
          </li>
          <li>
            <Link to="price-list" smooth={true} duration={800} offset={-70}>
              Price List
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
