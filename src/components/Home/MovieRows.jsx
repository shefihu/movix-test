import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import arrowLeft from "../../assets/icons/arrowleft.png";
import arrowRight from "../../assets/icons/arrowright.png";
import greater from "../../assets/icons/littlegreater.png";
import Thumnail from "./Thumnail";
const MovieRows = ({ title, movies, unique_name, loading }) => {
  const rowRef = useRef(null);
  const [isMove, setIsMove] = useState(false);
  const handleClick = (direction) => {
    setIsMove(true);
    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current;
      const scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;
      rowRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };
  return (
    <div>
      <div className="w-full max-w-[1340px] poster_text mt-[70px] mx-auto h-full lg:flex hidden ">
        <div className="w-full h-full ">
          <div className="w-full h-[47px] flex justify-between items-center">
            <h1 className="text-[36px] font-bold poster_text">{title}</h1>
            <div className="flex w-[107px] justify-between items-center">
              <Link className="text-[18px] text-[#BE123C]" to="/home">
                See more
              </Link>
              <img src={greater} alt="" />
            </div>
          </div>
          <div className="w-full  h-full group relative ">
            <button
              className={` ${
                unique_name === "poster"
                  ? "absolute z-20 left-0 top-[215px]"
                  : ""
              }${
                unique_name === "video"
                  ? "absolute z-20 left-0 top-[110px]"
                  : ""
              } ${
                unique_name === "casts"
                  ? "absolute z-20 left-0 top-[215px]"
                  : ""
              }`}
              onClick={() => handleClick("left")}
            >
              <img src={arrowLeft} alt="" />
            </button>
            <div
              className="w-full mt-[44px] flex scrollbar-hide items-center   overflow-x-scroll space-x-[60px]"
              ref={rowRef}
            >
              {movies?.slice(0, 20)?.map((movie) => {
                return (
                  <div key={movie.id}>
                    {loading ? (
                      <div className="flex flex-col m-8 rounded shadow-md w-60 sm:w-80 animate-pulse h-96">
                        <div className="h-48 rounded-t bg-gray-200"></div>
                        <div className="flex-1 px-4 py-8 space-y-4 sm:p-8 bg-gray-400">
                          <div className="w-full h-6 rounded bg-gray-200"></div>
                          <div className="w-full h-6 rounded bg-gray-200"></div>
                          <div className="w-3/4 h-6 rounded bg-gray-200"></div>
                        </div>
                      </div>
                    ) : (
                      <Thumnail movie={movie} unique_name={unique_name} />
                    )}
                  </div>
                );
              })}
            </div>
            <button
              className={` ${
                unique_name === "poster"
                  ? "absolute z-20 right-0 top-[215px]"
                  : ""
              }${
                unique_name === "video"
                  ? "absolute z-20 right-0 top-[110px]"
                  : ""
              } ${
                unique_name === "casts"
                  ? "absolute z-20 right-0 top-[215px]"
                  : ""
              } `}
              onClick={() => handleClick("right")}
            >
              <img src={arrowRight} alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieRows;
