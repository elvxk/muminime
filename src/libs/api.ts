import axios from "axios";
import rateLimit from "axios-rate-limit";

const API_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
const api = rateLimit(axios.create(), {
  maxRequests: 3, // Jumlah maksimum permintaan
  perMilliseconds: 1000, // Periode waktu dalam milidetik (misalnya, 1000 ms = 1 detik)
});

export const getTopAnime = (callback: any) => {
  api
    .get(`${API_URL}/top/anime`)
    .then(({ data }) => {
      callback({ anime: data.data, status: 200 });
    })
    .catch((e) => {
      console.error(e);
    });
};
