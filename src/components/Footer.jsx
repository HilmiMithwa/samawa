import logo from "../images/samawaLogo.png";
import emailPicture from "../images/email.png";
import instagramPicture from "../images/instagram.png";

function Footer() {
  return (
    <div className="bg-[#002366] text-white flex justify-center font-price mt-16 md:mt-[160px] flex-col">
      <div className="w-full border-b">
        <div className="max-w-[1440px] mx-auto px-6 md:px-15 w-full flex flex-col md:flex-row justify-between items-center md:items-center py-12 md:py-[80px] gap-8 md:gap-0 text-center md:text-left">
          <img src={logo} className="h-10 w-auto object-contain shrink-0" />
          <p className="max-w-md md:max-w-xl text-sm md:text-base px-4 md:px-0">
            Jl. Raya Cibiru KM. 15, Cibiru Wetan, Kec. Cileunyi, Kabupaten
            Bandung, Jawa Barat 40625
          </p>
          <div className="flex gap-[12px] w-auto h-6 justify-center">
            <img src={emailPicture} className="w-6 h-6 object-contain" />
            <img src={instagramPicture} className="w-6 h-6 object-contain" />
          </div>
        </div>
      </div>
      <div className="max-w-[1440px] mx-auto px-6 md:px-15 w-full flex flex-col md:flex-row justify-center items-center gap-4 md:gap-[24px] py-10 md:py-[80px] text-sm md:text-base text-center">
        <p>©2026, All right reserved.</p>
        <div className="flex flex-wrap justify-center gap-4 md:gap-[24px]">
          <p className="cursor-pointer hover:underline">Privacy Policy</p>
          <p className="cursor-pointer hover:underline">Terms of Service</p>
          <p className="cursor-pointer hover:underline">Cookies Settings</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;