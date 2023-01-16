import axios from "axios";

export const fetchMoviesByCategory = async (category) => {
  const apiKey = process.env.REACT_APP_API_KEY;
  const BASE_URL = "https://api.themoviedb.org/3";
  const { data } = await axios.get(
    `${BASE_URL}/discover/movie?api_key=4d6276dcfcb2cf16fcd8e50558585fab&with_networks=213`
  );
  return data;
};
export const fetchNewArrival = async (category) => {
  const apiKey = process.env.REACT_APP_API_KEY;
  const BASE_URL = "https://api.themoviedb.org/3";
  const { data } = await axios.get(
    `${BASE_URL}/trending/all/week?api_key=4d6276dcfcb2cf16fcd8e50558585fab&language=en-US`
  );
  return data;
};
export const fetchVideos = async (category) => {
  const apiKey = process.env.REACT_APP_API_KEY;
  const BASE_URL = "https://api.themoviedb.org/3";
  const { data } = await axios.get(
    `${BASE_URL}/movie/top_rated?api_key=4d6276dcfcb2cf16fcd8e50558585fab&language=en-US`
  );
  return data;
};
export const fetchCredits = async (category) => {
  const apiKey = process.env.REACT_APP_API_KEY;
  const BASE_URL = "https://api.themoviedb.org/3";
  const { data } = await axios.get(
    `${BASE_URL}/movie/315162?api_key=4d6276dcfcb2cf16fcd8e50558585fab&append_to_response=credits`
  );
  return data;
};
