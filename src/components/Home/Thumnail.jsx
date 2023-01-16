import React from "react";
import heart from "../../assets/icons/heart.png";
import imdb from "../../assets/icons/imdb.png";
import tomatoes from "../../assets/icons/tomatoes.png";
const Thumnail = ({ movie, unique_name }) => {
  return (
    <>
      {unique_name === "poster" && (
        <div className="min-w-[250px] poster_text relative h-[513px] ">
          <div className="absolute w-full h-[370px] ">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full flex justify-center">
            <div className="w-[218px] absolute top-[19.18px] h-[29.21px] flex justify-between items-center ">
              <div className="w-[74px] h-[22px] rounded-[12px] flex justify-center items-center bg-[#F3F4F680]/40 backdrop-blur-lg">
                <span className="text-[12px] text-center font-[500]">
                  TV SERIES
                </span>
              </div>
              <div className="w-[30px] h-[29.21px] bg-[#F3F4F680]/40 backdrop-blur-lg rounded-full flex justify-center items-center">
                <img src={heart} alt="" />
              </div>
            </div>
          </div>
          <div className="w-full absolute bottom-0 mt-[12px]">
            <h6 className="text-[#9CA3AF] font-bold text-[12px]">USA, 2005</h6>
            <h4 className="text-[18px] font-bold mt-[12px]">{movie.name}</h4>
            <div className="w-full  flex justify-between mt-[18px] h-[17px]">
              <div className="w-[101px] text-black  justify-between h-full flex">
                <img src={imdb} alt="" />
                <p className="text-[12px]">{movie.imdb}</p>
              </div>
              <div className="w-[49px] text-black  justify-between h-full flex">
                <img src={tomatoes} alt="" />
                <p className="text-[12px]">{movie.tomatoes}</p>
              </div>
            </div>
            <div className="mt-[12px]">
              <h6 className="text-[#9CA3AF] font-bold text-[12px]">
                Action, Horror, Adventure
              </h6>
            </div>
          </div>
        </div>
      )}
      {unique_name === "video" && (
        <div className="min-w-[450px] poster_text relative h-[288.13px] ">
          <div className="absolute w-full h-[253.13px] ">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>

          <div className="w-full absolute bottom-0 mt-[12px]">
            <h4 className="text-[18px] font-bold mt-[12px]">{movie.title}</h4>
          </div>
        </div>
      )}
      {unique_name === "casts" && (
        <div className="min-w-[250px] poster_text relative h-[405px] ">
          <div className="absolute w-full h-[370px] ">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.profile_path}`}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>

          <div className="w-full absolute bottom-0 mt-[12px]">
            <h4 className="text-[18px] font-bold mt-[12px]">{movie.name}</h4>
          </div>
        </div>
      )}
    </>
  );
};

export default Thumnail;
