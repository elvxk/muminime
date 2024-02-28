import axios from "axios";

export const getTopAnime = () => {
  const API_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
  return axios.get(`${API_URL}/top/anime`);
};
