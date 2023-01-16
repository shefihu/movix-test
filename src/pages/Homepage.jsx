import React, { useEffect } from "react";
import Hero from "../components/Home/Hero";
import MovieRows from "../components/Home/MovieRows";
import Navbar from "../layout/Navbar";
import poster from "../assets/images/Poster.png";
import avatar from "../assets/images/avatar.jpg";
import Footer from "../layout/Footer";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCasts,
  fetchExclusive,
  fetchLatest,
  fetchMovieData,
} from "../redux/movieSlice";
const Homepage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  });
  useEffect(() => {
    dispatch(fetchMovieData());
    dispatch(fetchLatest());
    dispatch(fetchExclusive());
    dispatch(fetchCasts());
  }, [dispatch]);
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
    {
      id: 5,
      name: "Flash: Way of the water",
      imdb: "90.0 / 100",
      tomatoes: "97%",
      description:
        " John  is on the run after killing a member of the international assassins guild, and with a $14 million price tag on his head, he is the target of hit men and women everywhere.",
      img: poster,
    },
    {
      id: 6,
      name: "Flash: Way of the water",
      imdb: "90.0 / 100",
      tomatoes: "97%",
      description:
        " John  is on the run after killing a member of the international assassins guild, and with a $14 million price tag on his head, he is the target of hit men and women everywhere.",
      img: poster,
    },
  ];
  const { loading, error, featured, latest, exclusive, cast } = useSelector(
    (state) => state.movies
  );
  return (
    <div>
      <Navbar />
      <Hero data={data} />
      <MovieRows
        title="Featured Movies"
        unique_name="poster"
        movies={featured}
      />
      <MovieRows title="New Arrival" unique_name="poster" movies={latest} />
      <MovieRows
        title="Exclusive videos"
        unique_name="video"
        movies={exclusive}
      />
      <MovieRows title="Featured Casts" unique_name="casts" movies={cast} />
      <Footer />
    </div>
  );
};

export default Homepage;
