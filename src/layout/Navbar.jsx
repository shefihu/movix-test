import React, { useEffect, useState } from "react";
import Logo from "../assets/icons/NavLogo.png";
import menu from "../assets/icons/Menu.png";
import search from "../assets/icons/Search.png";
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else setIsScrolled(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div>
      <nav
        className={`w-full h-[80px]  lg:flex hidden text-white fixed top-0 z-50 transition-all  ${
          isScrolled &&
          "border-b border-b-gray-500 bg-white/80  backdrop-blur-sm "
        }`}
      >
        <div className="w-full h-full px-8 flex items-center justify-between max-w-[90rem] mx-auto ">
          <div className="">
            <img src={Logo} alt="" />
          </div>
          <div className="w-[525px] h-[36px] flex justify-between items-center rounded-[6px] px-3 border-2 border-[#D1D5DB]">
            <input
              type="search"
              className="w-[95%] bg-transparent placeholder:text-[16px] placeholder:text-[white] font-[400] outline-none"
              placeholder="What do you want to watch?"
            />
            <button>
              <img src={search} alt="" />
            </button>
          </div>
          <div className="w-[166px] flex items-center justify-between h-[36px]">
            <h6 className="text-[16px]">
              Hi, <span>$FullName</span>
            </h6>
            <div>
              <img src={menu} alt="" />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
