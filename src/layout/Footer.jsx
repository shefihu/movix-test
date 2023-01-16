import React from "react";
import { Link } from "react-router-dom";
import facebook from "../assets/icons/facebook.png";
import instagram from "../assets/icons/instagram.png";
import twitter from "../assets/icons/twitter.png";
import youtube from "../assets/icons/youtube.png";
const Footer = () => {
  return (
    <div className="w-full h-full  pt-[120px] poster_text pb-[62px]">
      <div className="w-full h-[145px] mx-auto  max-w-[492px] flex flex-col items-center justify-between">
        <div className="w-[240px] flex items-center justify-between">
          <img src={facebook} alt="" />
          <img src={instagram} alt="" />
          <img src={twitter} alt="" />
          <img src={youtube} alt="" />
        </div>
        <div className="w-full flex text-[18px] font-bold justify-between">
          <Link>Conditions of Use</Link>
          <Link>Privacy & Policy</Link>
          <Link>Press Room</Link>
        </div>
        <div className="w-full flex justify-center">
          <p>© 2021 Movix</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
