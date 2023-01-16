import React, { useEffect, useState } from "react";
import Logo from "../assets/icons/NavLogo.png";
import menu from "../assets/icons/Menu.png";
import search from "../assets/icons/Search.png";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false);
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
          isScrolled && "bg-black/30  backdrop-blur-sm "
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
          <div className="w-[166px] relative flex items-center justify-between h-[36px]">
            <h6 className="text-[16px]">
              Hi, <span>$FullName</span>
            </h6>
            <button onClick={() => setOpen(!open)} className="">
              <img src={menu} alt="" />
            </button>
            {open && (
              <motion.div
                transition={{ duration: 0.2 }}
                initial={{ scale: 0.5 }}
                animate={{ scale: 1 }}
                className="absolute w-[135px] text-black justify-between py-1 right-0 h-[70px] px-4 flex flex-col rounded-xl top-10 bg-white"
              >
                <h1 className="text-[18px]"> Dashoard</h1>
                <h1 className="text-[18px]">Log out</h1>
              </motion.div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
