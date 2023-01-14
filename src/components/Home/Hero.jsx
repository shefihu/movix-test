import React, { useEffect, useState } from "react";
import poster from "../../assets/images/Poster.png";
import avatar from "../../assets/images/avatar.jpg";
import imdb from "../../assets/icons/imdb.png";
import tomatoes from "../../assets/icons/tomatoes.png";
import play from "../../assets/icons/play.png";
import { motion } from "framer-motion";
const Hero = () => {
  const data = [
    {
      id: 1,
      name: "Avatar: Way of the water",
      imdb: "9.0 / 10",
      tomatoes: "87%",
      description:
        " Avatar is on the run after killing a member of the international assassins guild, and with a $14 million price tag on his head, he is the target of hit men and women everywhere.",
      img: avatar,
    },
    {
      id: 2,
      name: "A  John Wick 3 : Parabellum",
      imdb: "90.0 / 100",
      tomatoes: "97%",
      description:
        " John wick is on the run after killing a member of the international assassins guild, and with a $14 million price tag on his head, he is the target of hit men and women everywhere.",
      img: poster,
    },
    {
      id: 3,
      name: "Spiderman: No way home",
      imdb: "90.0 / 100",
      tomatoes: "97%",
      description:
        " Spider wick is on the run after killing a member of the international assassins guild, and with a $14 million price tag on his head, he is the target of hit men and women everywhere.",
      img: poster,
    },
    {
      id: 4,
      name: "Flash: Way of the water",
      imdb: "90.0 / 100",
      tomatoes: "97%",
      description:
        " John  is on the run after killing a member of the international assassins guild, and with a $14 million price tag on his head, he is the target of hit men and women everywhere.",
      img: poster,
    },
  ];
  const [index, setIndex] = useState(0);
  const movie = data[index];
  const setLimit = (number) => {
    if (number > data.length - 1) {
      number = 0;
    }
    if (number < 0) {
      number = data.length - 1;
    }
    return number;
  };
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(setLimit(index + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, [index]);
  const variants = {
    notMove: { opacity: 0 },
    moves: {
      transition: {
        duration: 0.5,
        ease: "easeIn",
      },
      opacity: 1,
    },
  };
  return (
    <div>
      <div className="w-full lg:flex hidden">
        <div className="w-full h-[600px]  relative bg-black">
          <div key={index} className="absolute w-full h-full">
            <motion.img
              variants={variants}
              initial={"notMove"}
              animate={"moves"}
              src={movie.img}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full max-w-[90rem] h-full mx-auto px-8">
            <div
              key={index}
              className="absolute w-[404px] space-y-[18.5px] poster_text mt-[150px] h-[285px] "
            >
              <motion.h1
                variants={variants}
                initial={"notMove"}
                animate={"moves"}
                className="text-[48px]  leading-[56px] font-bold text-white"
              >
                {movie.name}
              </motion.h1>
              <div className="w-[184px]  flex justify-between h-[17px]">
                <motion.div
                  variants={variants}
                  initial={"notMove"}
                  animate={"moves"}
                  className="w-[101px] text-white  justify-between h-full flex"
                >
                  <img src={imdb} alt="" />
                  <p className="text-[12px]">{movie.imdb}</p>
                </motion.div>
                <motion.div
                  variants={variants}
                  initial={"notMove"}
                  animate={"moves"}
                  className="w-[49px] text-white  justify-between h-full flex"
                >
                  <img src={tomatoes} alt="" />
                  <p className="text-[12px]">{movie.tomatoes}</p>
                </motion.div>
              </div>
              <div className="w-[302px]">
                <motion.p
                  variants={variants}
                  initial={"notMove"}
                  animate={"moves"}
                  className="font-[500] text-[14px] leading-[18px] text-white"
                >
                  {movie.description}
                </motion.p>
              </div>
              <button className="w-[169px] h-[36px] space-x-[10px] justify-center items-center text-white flex bg-[#BE123C] rounded-[6px]">
                <img src={play} alt="" />
                <span className="font-bold text-[14px]">WATCH TRAILER</span>
              </button>
            </div>
            <div className="absolute right-4  w-10 h-[110px]  top-[245px]">
              {data.map((x, i) => {
                let active;
                let activeText;
                if (i === index) {
                  active = "active";
                  activeText = "activeText";
                }
                return (
                  <div className="flex transition-all justify-between relative items-center">
                    {active && (
                      <div className="w-[20px]  absolute duration-300 ease-in -left-7 h-[2px] bg-white "></div>
                    )}

                    <h1
                      className={` ${
                        activeText
                          ? "text-[16px] duration-300 ease-in text-white font-bold"
                          : "text-[#9CA3AF]  text-[12px]"
                      }`}
                    >
                      {x.id}
                    </h1>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
