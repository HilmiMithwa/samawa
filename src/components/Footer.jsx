import logo from "../images/samawaLogo.png";
import emailPicture from "../images/email.png";
import instagramPicture from "../images/instagram.png";

function Footer() {
  return (
    <div className="bg-[#002366] text-white flex justify-center font-price mt-[160px] flex-col ">
      <div className="w-full border-b">
        <div className="max-w-[1440px] mx-auto px-6 md:px-15 w-full py-10 flex justify-between items-center py-[80px]">
          <img src={logo} className="h-10 w-auto object-contain shrink-0" />
          <p className="">
            Jl. Raya Cibiru KM. 15, Cibiru Wetan, Kec. Cileunyi, Kabupaten
            Bandung, Jawa Barat 40625
          </p>
          <div className="flex gap-[12px] w-[24px] h-[24px]">
            <img src={emailPicture} />
            <img src={instagramPicture} />
          </div>
        </div>
      </div>
      <div className="max-w-[1440px] mx-auto px-6 md:px-15 w-full py-10 flex justify-center gap-[24px] py-[80px]">
        <p>©2026, All right reserved.</p>
        <p>Privacy Policy</p>
        <p>Terms of Service</p>
        <p>Cookies Settings</p>
      </div>
    </div>
  );
}

export default Footer;
