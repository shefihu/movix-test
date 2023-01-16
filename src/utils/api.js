import axios from "axios";

export const fetchMoviesByCategory = async (category) => {
  const apiKey = process.env.REACT_APP_API_KEY;
  const BASE_URL = "https://api.themoviedb.org/3";
  console.log(apiKey);
  const { data } = await axios.get(
    `${BASE_URL}/discover/movie?api_key=${apiKey}&with_networks=213`
  );
  return data;
};
export const fetchNewArrival = async (category) => {
  const apiKey = process.env.REACT_APP_API_KEY;
  const BASE_URL = "https://api.themoviedb.org/3";
  console.log(apiKey);
  const { data } = await axios.get(
    `${BASE_URL}/discover/movie?api_key=${apiKey}&language=en-US&with_genres=28`
  );
  return data;
};
